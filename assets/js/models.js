/* =========================================================
   SALAMANCA FILES — 3D reconstruction viewer
   Models are reference-based GLB reconstructions, embedded
   as base64 scripts so the page still works from file://.
   ========================================================= */
(function () {
  "use strict";

  var T = window.THREE;
  if (!T) {
    console.error("Three.js failed to load.");
    window.SalamancaModels = null;
    return;
  }

  var TABLE_Y = 0.5;
  var PLINTH_TOP = 0.622;

  var SOURCE = {
    hector: "hector",
    tuco: "tuco",
    lalo: "lalo",
    marco: "twin",
    leonel: "twin",
    abuelita: "abuelita"
  };

  var TUNING = {
    hector: { height: 1.5, yaw: -0.12, offsetY: 0, prop: "bell" },
    tuco: { height: 1.48, yaw: -0.14, offsetY: 0, prop: "crystals" },
    lalo: { height: 1.5, yaw: -0.14, offsetY: 0, prop: "glass" },
    marco: { height: 1.5, yaw: 0.28, offsetY: 0, prop: "skull" },
    leonel: { height: 1.5, yaw: -0.22, offsetY: 0, prop: null },
    abuelita: { height: 1.46, yaw: -0.12, offsetY: 0, prop: "teacup" }
  };

  var pendingLoads = {};
  var dataCache = {};
  var loader = null;

  function getLoader() {
    if (loader) return loader;
    if (!T.GLTFLoader) throw new Error("GLTFLoader missing");
    loader = new T.GLTFLoader();
    return loader;
  }

  /* ---------------- shared helpers ---------------- */

  function std(color, roughness, metalness, extra) {
    var opts = {
      color: new T.Color(color),
      roughness: roughness === undefined ? 0.72 : roughness,
      metalness: metalness === undefined ? 0 : metalness,
      envMapIntensity: 0.45
    };
    if (extra) Object.keys(extra).forEach(function (k) { opts[k] = extra[k]; });
    return new T.MeshStandardMaterial(opts);
  }

  function add(parent, geo, material, pos, rot, scale) {
    var mesh = new T.Mesh(geo, material);
    if (pos) mesh.position.set(pos[0], pos[1], pos[2]);
    if (rot) mesh.rotation.set(rot[0], rot[1], rot[2]);
    if (scale) {
      if (typeof scale === "number") mesh.scale.setScalar(scale);
      else mesh.scale.set(scale[0], scale[1], scale[2]);
    }
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }

  function cyl(rt, rb, h, s, open) { return new T.CylinderGeometry(rt, rb, h, s || 32, 1, !!open); }
  function sph(r, w, h) { return new T.SphereGeometry(r, w || 20, h || 16); }
  function torus(r, t, rs, ts, arc) { return new T.TorusGeometry(r, t, rs || 8, ts || 32, arc || Math.PI * 2); }

  function disposeObject(obj) {
    obj.traverse(function (o) {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        var mats = Array.isArray(o.material) ? o.material : [o.material];
        mats.forEach(function (m) {
          if (!m) return;
          ["map", "normalMap", "roughnessMap", "metalnessMap", "emissiveMap", "aoMap"].forEach(function (k) {
            if (m[k] && m[k].dispose) m[k].dispose();
          });
          m.dispose();
        });
      }
    });
  }

  function clearGroup(group) {
    while (group.children.length) {
      var child = group.children.pop();
      disposeObject(child);
    }
  }

  function isSupported() {
    if (window.GLSupport) return window.GLSupport.probe().webgl;
    try {
      var c = document.createElement("canvas");
      return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl")));
    } catch (e) {
      return false;
    }
  }

  /* ---------------- loading embedded GLB ---------------- */

  function loadModelData(id, onReady, onError) {
    var source = SOURCE[id] || id;
    if (dataCache[source]) return onReady(dataCache[source]);
    if (window.SALAMANCA_MODELS && window.SALAMANCA_MODELS[source]) {
      dataCache[source] = window.SALAMANCA_MODELS[source];
      return onReady(dataCache[source]);
    }
    if (pendingLoads[source]) {
      pendingLoads[source].push({ ok: onReady, err: onError });
      return;
    }
    pendingLoads[source] = [{ ok: onReady, err: onError }];

    var script = document.createElement("script");
    script.src = "assets/models/" + source + ".js?v=20261112b";
    script.async = true;
    script.setAttribute("data-model-source", source);

    var settled = false;
    var timer = setTimeout(function () {
      if (settled) return;
      settled = true;
      var err = new Error("Model script timeout: " + source);
      err.code = "timeout";
      finishPending(source, err);
    }, 25000);

    script.onload = function () {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      var b64 = window.SALAMANCA_MODELS && window.SALAMANCA_MODELS[source];
      if (!b64) {
        var err = new Error("Model data missing: " + source);
        err.code = "missing";
        finishPending(source, err);
        return;
      }
      dataCache[source] = b64;
      finishPending(source, null, b64);
    };
    script.onerror = function () {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      var err = new Error("Model script failed: " + source);
      err.code = "missing";
      finishPending(source, err);
    };
    document.head.appendChild(script);
  }

  function finishPending(source, err, data) {
    var list = pendingLoads[source] || [];
    delete pendingLoads[source];
    list.forEach(function (cb) {
      if (err) { if (cb.err) cb.err(err); }
      else if (cb.ok) cb.ok(data);
    });
  }

  function base64ToBuffer(base64) {
    var bin = window.atob(base64);
    var len = bin.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) bytes[i] = bin.charCodeAt(i);
    return bytes.buffer;
  }

  function parseModel(id, onReady, onError) {
    loadModelData(id, function (b64) {
      try {
        getLoader().parse(base64ToBuffer(b64), "", function (gltf) {
          onReady(gltf.scene);
        }, function (err) {
          var e = err instanceof Error ? err : new Error("parse failed");
          e.code = e.code || "parse";
          onError(e);
        });
      } catch (err) {
        var e = err instanceof Error ? err : new Error(String(err));
        e.code = e.code || "parse";
        onError(e);
      }
    }, function (err) {
      if (err && !err.code) err.code = "missing";
      onError(err);
    });
  }

  /* ---------------- stage ---------------- */

  function makeGradientTexture(inner, mid, outer) {
    var c = document.createElement("canvas");
    c.width = 512;
    c.height = 512;
    var ctx = c.getContext("2d");
    var g = ctx.createRadialGradient(256, 240, 18, 256, 256, 360);
    g.addColorStop(0, inner);
    g.addColorStop(0.5, mid);
    g.addColorStop(1, outer);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 512, 512);
    var tex = new T.CanvasTexture(c);
    tex.encoding = T.sRGBEncoding;
    tex.anisotropy = 16;
    return tex;
  }

  var envCache = new WeakMap();

  function makeEnvironment(renderer) {
    if (envCache.has(renderer)) return envCache.get(renderer);
    var canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;
    var ctx = canvas.getContext("2d");

    var g = ctx.createLinearGradient(0, 0, 0, 512);
    g.addColorStop(0, "#20262b");
    g.addColorStop(0.48, "#0c0d0f");
    g.addColorStop(1, "#040302");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 1024, 512);

    var warm = ctx.createRadialGradient(280, 130, 8, 280, 130, 270);
    warm.addColorStop(0, "rgba(255,214,158,0.85)");
    warm.addColorStop(0.3, "rgba(219,159,91,0.35)");
    warm.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = warm;
    ctx.fillRect(0, 0, 1024, 512);

    var cool = ctx.createRadialGradient(790, 180, 10, 790, 180, 250);
    cool.addColorStop(0, "rgba(142,183,200,0.5)");
    cool.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = cool;
    ctx.fillRect(0, 0, 1024, 512);

    var tex = new T.CanvasTexture(canvas);
    tex.mapping = T.EquirectangularReflectionMapping;
    tex.encoding = T.sRGBEncoding;
    var pmrem = new T.PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    var rt = pmrem.fromEquirectangular(tex);
    envCache.set(renderer, rt.texture);
    tex.dispose();
    pmrem.dispose();
    return rt.texture;
  }

  function makeDustTexture() {
    var c = document.createElement("canvas");
    c.width = 64;
    c.height = 64;
    var ctx = c.getContext("2d");
    var g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, "rgba(255,238,205,1)");
    g.addColorStop(0.4, "rgba(255,220,168,0.5)");
    g.addColorStop(1, "rgba(255,210,150,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    return new T.CanvasTexture(c);
  }

  function createStage(renderer) {
    var scene = new T.Scene();
    scene.environment = makeEnvironment(renderer);

    var camera = new T.PerspectiveCamera(34, 0.8, 0.1, 40);
    camera.position.set(0, 1.72, 4.4);
    camera.lookAt(0, 1.2, 0);

    scene.add(new T.HemisphereLight(0x8fa3ad, 0x080604, 0.2));

    var key = new T.DirectionalLight(0xffd2a0, 1.95);
    key.position.set(-3.2, 3.6, 2.7);
    key.target.position.set(0, 1.15, 0);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.near = 0.5;
    key.shadow.camera.far = 12;
    key.shadow.camera.left = -2.8;
    key.shadow.camera.right = 2.8;
    key.shadow.camera.top = 3.2;
    key.shadow.camera.bottom = -1.2;
    key.shadow.bias = -0.0006;
    scene.add(key);
    scene.add(key.target);

    var rim = new T.DirectionalLight(0x80abc0, 1.9);
    rim.position.set(3.0, 2.4, -2.4);
    rim.target.position.set(0, 1.3, 0);
    scene.add(rim);
    scene.add(rim.target);

    var fill = new T.PointLight(0xe5a86a, 0.3, 8, 1.5);
    fill.position.set(2.0, 1.4, 2.1);
    scene.add(fill);

    var top = new T.SpotLight(0xffdcb0, 0.5, 9, 0.6, 0.8, 1.2);
    top.position.set(0.2, 4.2, 1.1);
    top.target.position.set(0, 0.9, 0);
    scene.add(top);
    scene.add(top.target);

    var tableMap = makeGradientTexture("#140d08", "#060403", "#020201");
    var table = new T.Mesh(
      new T.CircleGeometry(3.4, 96),
      new T.MeshStandardMaterial({ map: tableMap, color: 0x7a7a7a, roughness: 0.62, metalness: 0.05, envMapIntensity: 0.35 })
    );
    table.rotation.x = -Math.PI / 2;
    table.position.y = TABLE_Y;
    table.receiveShadow = false;
    scene.add(table);

    var tableSide = new T.Mesh(
      new T.CylinderGeometry(3.4, 3.4, 0.1, 96, 1, true),
      std(0x070504, 0.9, 0.03)
    );
    tableSide.position.y = TABLE_Y - 0.05;
    scene.add(tableSide);

    var blob = new T.Mesh(
      new T.PlaneGeometry(2.5, 2.5),
      new T.MeshBasicMaterial({
        map: makeGradientTexture("rgba(0,0,0,0.92)", "rgba(0,0,0,0.45)", "rgba(0,0,0,0)"),
        transparent: true,
        opacity: 0.85,
        depthWrite: false
      })
    );
    blob.rotation.x = -Math.PI / 2;
    blob.position.set(0, TABLE_Y + 0.004, 0.03);
    scene.add(blob);

    var plinth = new T.Mesh(
      new T.CylinderGeometry(0.62, 0.66, 0.12, 64),
      std(0x090705, 0.68, 0.08)
    );
    plinth.position.y = 0.562;
    plinth.castShadow = true;
    plinth.receiveShadow = true;
    scene.add(plinth);

    var ring = new T.Mesh(
      new T.TorusGeometry(0.62, 0.0055, 6, 64),
      std(0xb08a50, 0.3, 0.9)
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.623;
    scene.add(ring);

    var glowMap = makeGradientTexture("rgba(132,92,48,0.75)", "rgba(64,43,23,0.26)", "rgba(0,0,0,0)");
    var glow = new T.Sprite(new T.SpriteMaterial({
      map: glowMap,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: T.AdditiveBlending
    }));
    glow.position.set(-0.18, 1.36, -1.85);
    glow.scale.set(4.5, 3.5, 1);
    scene.add(glow);

    var dustGeo = new T.BufferGeometry();
    var count = 90;
    var positions = new Float32Array(count * 3);
    var speeds = new Float32Array(count);
    for (var i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 3.0;
      positions[i * 3 + 1] = 0.6 + Math.random() * 1.7;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2.0 - 0.1;
      speeds[i] = 0.008 + Math.random() * 0.018;
    }
    dustGeo.setAttribute("position", new T.BufferAttribute(positions, 3));
    dustGeo.userData.speeds = speeds;
    var dust = new T.Points(dustGeo, new T.PointsMaterial({
      color: 0xd8b074,
      size: 0.022,
      map: makeDustTexture(),
      transparent: true,
      opacity: 0.38,
      depthWrite: false,
      blending: T.AdditiveBlending,
      sizeAttenuation: true
    }));
    dust.frustumCulled = false;
    scene.add(dust);

    var figureSlot = new T.Group();
    scene.add(figureSlot);
    var propSlot = new T.Group();
    propSlot.position.set(-0.06, 0, 0.11);
    scene.add(propSlot);

    return { scene: scene, camera: camera, figureSlot: figureSlot, propSlot: propSlot, dust: dust };
  }

  function fitCamera(camera, aspect, zoom) {
    var z = 4.4;
    var minAspect = 0.74;
    if (aspect < minAspect) z *= minAspect / Math.max(0.48, aspect);
    z *= zoom || 1;
    camera.aspect = aspect;
    camera.position.z = z;
    camera.updateProjectionMatrix();
  }

  /* ---------------- props ---------------- */

  function propBell(group) {
    var brass = std(0xc59a50, 0.28, 0.92, { envMapIntensity: 1.2 });
    var dark = std(0x3b2d1b, 0.55, 0.35);
    var y = TABLE_Y + 0.005;
    add(group, cyl(0.16, 0.175, 0.024, 40), dark, [0.56, y + 0.012, 0.54]);
    add(group, cyl(0.13, 0.155, 0.012, 40), brass, [0.56, y + 0.031, 0.54]);
    var pts = [
      new T.Vector2(0.045, 0), new T.Vector2(0.115, 0.006), new T.Vector2(0.138, 0.04),
      new T.Vector2(0.144, 0.10), new T.Vector2(0.124, 0.143), new T.Vector2(0.06, 0.168),
      new T.Vector2(0.045, 0.198), new T.Vector2(0.03, 0.21)
    ];
    add(group, new T.LatheGeometry(pts, 36), brass, [0.56, y + 0.036, 0.54]);
    add(group, sph(0.033, 18, 12), brass, [0.56, y + 0.255, 0.54], null, [1, 0.9, 1]);
    add(group, torus(0.031, 0.008, 6, 18), brass, [0.56, y + 0.282, 0.54], [0.3, 0, 0]);
  }

  function propCrystals(group) {
    var glassy = new T.MeshPhysicalMaterial({
      color: 0x66d7e6, roughness: 0.12, metalness: 0.25, transparent: true,
      opacity: 0.88, clearcoat: 1, emissive: new T.Color(0x0c4652), emissiveIntensity: 0.7,
      envMapIntensity: 1.2
    });
    var coords = [
      [0.50, 0.535, 0.56, 0.055], [0.56, 0.525, 0.59, 0.04],
      [0.45, 0.523, 0.60, 0.034], [0.53, 0.548, 0.52, 0.03],
      [0.59, 0.518, 0.53, 0.026], [0.47, 0.548, 0.51, 0.024]
    ];
    coords.forEach(function (c, i) {
      var m = add(group, new T.IcosahedronGeometry(c[3], 0), glassy, [c[0], c[1], c[2]], [i * 0.8, i * 0.5, i * 0.3]);
      m.scale.set(1, 1.35, 0.9);
    });
  }

  function propGlass(group) {
    var glassMat = new T.MeshPhysicalMaterial({
      color: 0xdfe9e7, roughness: 0.05, metalness: 0, transparent: true, opacity: 0.22,
      clearcoat: 1, clearcoatRoughness: 0.03, side: T.DoubleSide, envMapIntensity: 1.4, depthWrite: false
    });
    var amber = new T.MeshPhysicalMaterial({
      color: 0x9b541d, roughness: 0.1, metalness: 0, transparent: true, opacity: 0.9,
      clearcoat: 1, emissive: new T.Color(0x2a0f02), emissiveIntensity: 0.25
    });
    var y = TABLE_Y;
    add(group, cyl(0.078, 0.068, 0.17, 32), glassMat, [0.56, y + 0.10, 0.55]);
    add(group, cyl(0.06, 0.055, 0.07, 28), amber, [0.56, y + 0.05, 0.55]);
    add(group, torus(0.078, 0.0035, 6, 32), glassMat, [0.56, y + 0.185, 0.55], [Math.PI / 2, 0, 0]);
    add(group, cyl(0.07, 0.07, 0.008, 32), glassMat, [0.56, y + 0.018, 0.55]);
  }

  function propSkull(group) {
    var silver = std(0xc3c6c8, 0.28, 0.92, { envMapIntensity: 1.1 });
    var dark = std(0x151412, 0.8, 0);
    var y = TABLE_Y;
    add(group, sph(0.09, 26, 20), silver, [0.56, y + 0.1, 0.55], null, [1, 1.02, 0.94]);
    add(group, new T.BoxGeometry(0.1, 0.042, 0.08), silver, [0.56, y + 0.052, 0.535]);
    [-1, 1].forEach(function (side) {
      add(group, sph(0.022, 12, 8), dark, [0.56 + 0.034 * side, y + 0.112, 0.632], null, [1, 1.05, 0.4]);
    });
    add(group, new T.BoxGeometry(0.026, 0.036, 0.018), dark, [0.56, y + 0.077, 0.638]);
    add(group, new T.BoxGeometry(0.068, 0.007, 0.01), dark, [0.56, y + 0.057, 0.632]);
    add(group, new T.BoxGeometry(0.068, 0.007, 0.01), dark, [0.56, y + 0.069, 0.635]);
  }

  function propAxe(group) {
    var wood = std(0x5b3d25, 0.8, 0);
    var metal = std(0x9ea3a3, 0.32, 0.88, { envMapIntensity: 1.1 });
    var edge = std(0xd3d6d4, 0.2, 0.95, { envMapIntensity: 1.2 });
    var axe = new T.Group();
    axe.position.set(0.40, TABLE_Y + 0.01, 0.70);
    axe.rotation.z = Math.PI / 2;
    axe.rotation.x = -0.1;
    add(axe, cyl(0.017, 0.022, 0.9, 12), wood, [0, 0.45, 0]);
    add(axe, new T.BoxGeometry(0.24, 0.14, 0.04), metal, [0, 0.9, 0]);
    add(axe, new T.BoxGeometry(0.05, 0.17, 0.045), edge, [-0.13, 0.9, 0]);
    add(axe, new T.ConeGeometry(0.05, 0.1, 10), metal, [0.13, 0.89, 0], [0, 0, -Math.PI / 2]);
    group.add(axe);
  }

  function propTeacup(group) {
    var porcelain = new T.MeshPhysicalMaterial({ color: 0xe3d8c5, roughness: 0.18, metalness: 0, clearcoat: 0.8, clearcoatRoughness: 0.1 });
    var gold = std(0xc2a05c, 0.3, 0.85);
    var tea = new T.MeshPhysicalMaterial({ color: 0x7a3b12, roughness: 0.12, metalness: 0, clearcoat: 1 });
    var y = TABLE_Y;
    add(group, cyl(0.14, 0.14, 0.013, 36), porcelain, [0.56, y + 0.007, 0.55]);
    add(group, cyl(0.078, 0.056, 0.095, 36), porcelain, [0.56, y + 0.06, 0.55]);
    add(group, cyl(0.068, 0.056, 0.01, 32), tea, [0.56, y + 0.108, 0.55]);
    add(group, torus(0.076, 0.0035, 6, 32), gold, [0.56, y + 0.107, 0.55], [Math.PI / 2, 0, 0]);
    add(group, torus(0.041, 0.01, 8, 24, Math.PI * 1.35), porcelain, [0.635, y + 0.07, 0.55], [0, 0, -0.5]);
  }

  function addProp(group, id) {
    var kind = (TUNING[id] && TUNING[id].prop) || null;
    if (kind === "bell") propBell(group);
    if (kind === "crystals") propCrystals(group);
    if (kind === "glass") propGlass(group);
    if (kind === "skull") propSkull(group);
    if (kind === "axe") propAxe(group);
    if (kind === "teacup") propTeacup(group);
  }

  /* ---------------- live viewer ---------------- */

  function makeDeadViewer(container) {
    return {
      isFallback: true,
      setCharacter: function (id, done) {
        if (done) done(new Error("3D unavailable"));
      },
      start: function () {},
      stop: function () {},
      reset: function () {},
      setAuto: function () {},
      isAuto: function () { return false; },
      resize: function () {},
      dispose: function () {
        if (window.GLSupport) window.GLSupport.clearFallback(container);
      }
    };
  }

  function createLive(container, options) {
    var opts = options || {};
    var renderer = window.GLSupport
      ? window.GLSupport.createRenderer(T, { alpha: true })
      : new T.WebGLRenderer({ antialias: true, alpha: true });
    if (!renderer) {
      var probe = window.GLSupport ? window.GLSupport.probe(true) : { webgl: false };
      if (window.GLSupport) {
        window.GLSupport.mountFallback(container, {
          kind: probe.webgl ? "lost" : "webgl",
          onRetry: function () { if (opts.onRetry) opts.onRetry(); }
        });
      }
      if (opts.onStatus) opts.onStatus("error", "no-webgl");
      return makeDeadViewer(container);
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.outputEncoding = T.sRGBEncoding;
    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.9;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = T.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.setAttribute("aria-label", opts.ariaLabel || "Interactive 3D model");
    container.appendChild(renderer.domElement);

    renderer.domElement.addEventListener("webglcontextlost", function (e) {
      e.preventDefault();
      if (window.GLSupport) {
        window.GLSupport.mountFallback(container, {
          kind: "lost",
          onRetry: function () { if (opts.onRetry) opts.onRetry(); }
        });
      }
      if (opts.onStatus) opts.onStatus("error", "context-lost");
    }, false);

    var stage = createStage(renderer);
    var currentId = null;
    var currentToken = 0;
    var running = false;
    var raf = null;
    var lastTime = 0;
    var auto = opts.auto !== false;
    var rotation = -0.14;
    var tilt = 0;
    var velocity = 0;
    var zoom = 1;
    var dragging = false;
    var lastX = 0;
    var lastY = 0;
    var pointerId = null;
    var limitedRotation = false;
    var baseYaw = -0.14;
    var dustPositions = stage.dust.geometry.attributes.position;
    var dustSpeeds = stage.dust.geometry.userData.speeds;

    function applySize() {
      var rect = container.getBoundingClientRect();
      var w = Math.max(1, Math.round(rect.width));
      var h = Math.max(1, Math.round(rect.height));
      renderer.setSize(w, h, false);
      fitCamera(stage.camera, w / h, zoom);
    }

    function setStatus(status, detail) {
      if (opts.onStatus) opts.onStatus(status, detail || "");
    }

    function normalize(root, id) {
      var cfg = TUNING[id] || {};
      root.updateMatrixWorld(true);
      var box = new T.Box3().setFromObject(root);
      var size = box.getSize(new T.Vector3());
      if (!size.y || !size.x) return;
      var s = Math.min((cfg.height || 1.5) / size.y, 1.9 / size.x);
      root.scale.setScalar(s);
      root.updateMatrixWorld(true);
      box.setFromObject(root);
      var center = box.getCenter(new T.Vector3());
      root.position.x -= center.x;
      root.position.z -= center.z;
      root.position.y += PLINTH_TOP + 0.002 - box.min.y + (cfg.offsetY || 0);
      root.traverse(function (o) {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = false;
          o.frustumCulled = true;
          if (o.material) {
            var mats = Array.isArray(o.material) ? o.material : [o.material];
            mats.forEach(function (m) {
              if (!m) return;
              if ("envMapIntensity" in m) m.envMapIntensity = 0.8;
              if (m.map) m.map.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
              m.needsUpdate = true;
            });
          }
        }
      });
      root.userData.sourceId = id;
    }

    function setCharacter(id, done) {
      if (!TUNING[id]) { if (done) done(new Error("Unknown character")); return; }
      currentId = id;
      currentToken += 1;
      var token = currentToken;
      clearGroup(stage.figureSlot);
      clearGroup(stage.propSlot);
      addProp(stage.propSlot, id);
      baseYaw = (TUNING[id] && TUNING[id].yaw) || -0.14;
      limitedRotation = (id === "marco" || id === "leonel");
      stage.figureSlot.rotation.set(0, baseYaw, 0);
      rotation = baseYaw;
      tilt = 0;
      velocity = 0;
      zoom = 1;
      container.classList.remove("is-ready");
      container.classList.add("is-loading");
      setStatus("loading");

      parseModel(id, function (root) {
        if (token !== currentToken) {
          disposeObject(root);
          return;
        }
        normalize(root, id);
        stage.figureSlot.add(root);
        container.classList.remove("is-loading");
        if (window.GLSupport) window.GLSupport.clearFallback(container);
        container.classList.add("is-ready");
        setStatus("ready");
        applySize();
        if (done) done(null);
      }, function (err) {
        if (token !== currentToken) return;
        console.error("3D model load failed", id, err);
        container.classList.remove("is-loading");
        container.classList.add("is-error");
        var kind = (err && err.code === "missing") ? "missing" : (err && err.code === "timeout" ? "missing" : "parse");
        if (window.GLSupport) {
          window.GLSupport.mountFallback(container, {
            kind: kind,
            onRetry: function () {
              window.GLSupport.clearFallback(container);
              setCharacter(id, done);
            }
          });
        }
        setStatus("error", String(err && err.message ? err.message : err));
        if (done) done(err);
      });
    }

    function start() {
      if (running) return;
      running = true;
      lastTime = performance.now();
      applySize();
      loop();
    }

    function stop() {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = null;
    }

    function reset() {
      var base = (currentId && TUNING[currentId] && TUNING[currentId].yaw) || -0.14;
      rotation = base;
      tilt = 0;
      velocity = 0;
      zoom = 1;
      stage.figureSlot.rotation.set(0, rotation, 0);
      applySize();
    }

    function setAuto(value) {
      auto = !!value;
      if (opts.onAutoChange) opts.onAutoChange(auto);
    }

    function loop(now) {
      if (!running) return;
      var t = now || performance.now();
      var dt = Math.min(0.05, (t - lastTime) / 1000 || 0.016);
      lastTime = t;

      if (auto && !dragging) {
        if (limitedRotation) rotation = baseYaw + Math.sin(t * 0.00035) * 0.18;
        else rotation += dt * 0.26;
      }
      if (!dragging && Math.abs(velocity) > 0.0001) {
        rotation += velocity * dt;
        velocity *= Math.exp(-4.2 * dt);
      }
      stage.figureSlot.rotation.y = rotation;
      stage.figureSlot.rotation.x = tilt;

      var pos = dustPositions.array;
      for (var i = 0; i < dustSpeeds.length; i++) {
        pos[i * 3 + 1] += dustSpeeds[i] * dt * 0.96;
        if (pos[i * 3 + 1] > 2.35) pos[i * 3 + 1] = 0.55;
      }
      dustPositions.needsUpdate = true;

      renderer.render(stage.scene, stage.camera);
      raf = requestAnimationFrame(loop);
    }

    function onPointerDown(e) {
      if (e.button !== undefined && e.button !== 0) return;
      dragging = true;
      pointerId = e.pointerId;
      lastX = e.clientX;
      lastY = e.clientY;
      velocity = 0;
      if (container.setPointerCapture) {
        try { container.setPointerCapture(e.pointerId); } catch (err) { /* noop */ }
      }
    }

    function onPointerMove(e) {
      if (!dragging || e.pointerId !== pointerId) return;
      var dx = e.clientX - lastX;
      var dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      rotation += dx * 0.008;
      if (limitedRotation) rotation = Math.max(baseYaw - 0.42, Math.min(baseYaw + 0.42, rotation));
      velocity = dx * 0.12;
      tilt = Math.max(-0.1, Math.min(0.1, tilt + dy * 0.0015));
      e.preventDefault();
    }

    function onPointerUp(e) {
      if (!dragging || (pointerId !== null && e.pointerId !== pointerId)) return;
      dragging = false;
      pointerId = null;
      if (container.releasePointerCapture) {
        try { container.releasePointerCapture(e.pointerId); } catch (err) { /* noop */ }
      }
    }

    function onWheel(e) {
      if (!running) return;
      e.preventDefault();
      zoom = Math.max(0.9, Math.min(1.35, zoom + e.deltaY * 0.0006));
      applySize();
    }

    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointercancel", onPointerUp);
    container.addEventListener("wheel", onWheel, { passive: false });

    var ro = null;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(function () { if (running) applySize(); });
      ro.observe(container);
    } else {
      window.addEventListener("resize", applySize);
    }

    function dispose() {
      stop();
      currentToken += 1;
      if (ro) ro.disconnect();
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointercancel", onPointerUp);
      container.removeEventListener("wheel", onWheel);
      disposeObject(stage.scene);
      renderer.dispose();
      if (renderer.forceContextLoss) renderer.forceContextLoss();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    }

    return {
      setCharacter: setCharacter,
      start: start,
      stop: stop,
      reset: reset,
      setAuto: setAuto,
      isAuto: function () { return auto; },
      resize: applySize,
      dispose: dispose
    };
  }

  window.SalamancaModels = {
    isSupported: isSupported,
    createLive: createLive,
    tuning: TUNING
  };
})();
