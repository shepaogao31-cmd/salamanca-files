/* =========================================================
   SAUL DOSSIER — 3D viewer
   Loads a base64 GLB from assets/models/<id>.js and renders a
   lit bust with drag-rotate, wheel / pinch zoom and auto-spin.
   ========================================================= */
(function () {
  "use strict";
  var T = window.THREE;
  if (!T) return;

  var cache = {};

  function loadScript(id, cb) {
    if (cache[id] === "ok") return cb(null);
    if (cache[id] && cache[id].queue) { cache[id].queue.push(cb); return; }
    cache[id] = { queue: [cb] };
    var s = document.createElement("script");
    s.src = "assets/models/" + id + ".js?v=20261112a";
    s.async = true;

    var settled = false;
    var finish = function (err) {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      var q = (cache[id] && cache[id].queue) || [];
      if (err) {
        cache[id] = "error";
        q.forEach(function (f) { f(err); });
        return;
      }
      if (!window.SALAMANCA_MODELS || !window.SALAMANCA_MODELS[id]) {
        cache[id] = "error";
        var e = new Error("model data missing");
        e.code = "missing";
        q.forEach(function (f) { f(e); });
        return;
      }
      cache[id] = "ok";
      q.forEach(function (f) { f(null); });
    };

    var timer = setTimeout(function () {
      var e = new Error("model script timeout");
      e.code = "missing";
      finish(e);
    }, 25000);

    s.onload = function () { finish(null); };
    s.onerror = function () {
      var e = new Error("model script failed");
      e.code = "missing";
      finish(e);
    };
    document.head.appendChild(s);
  }

  function b64ToBuffer(b64) {
    var bin = window.atob(b64);
    var len = bin.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) bytes[i] = bin.charCodeAt(i);
    return bytes.buffer;
  }

  function deadViewer(container) {
    return {
      isFallback: true,
      setCharacter: function () {},
      start: function () {},
      stop: function () {},
      reset: function () {},
      resize: function () {},
      setAuto: function () {},
      dispose: function () {
        if (window.GLSupport) window.GLSupport.clearFallback(container);
      }
    };
  }

  function create(container, opts) {
    opts = opts || {};
    var W = container.clientWidth || 600;
    var H = container.clientHeight || 600;

    var renderer = window.GLSupport
      ? window.GLSupport.createRenderer(T, { alpha: true })
      : new T.WebGLRenderer({ antialias: true, alpha: true });
    if (!renderer) {
      if (window.GLSupport) {
        window.GLSupport.mountFallback(container, {
          kind: (window.GLSupport.probe(true).webgl ? "lost" : "webgl"),
          onRetry: function () { if (opts.onRetry) opts.onRetry(); }
        });
      }
      if (opts.onStatus) opts.onStatus("error", "no-webgl");
      return deadViewer(container);
    }
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.setSize(W, H);
    renderer.outputEncoding = T.sRGBEncoding;
    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.02;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = T.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    renderer.domElement.addEventListener("webglcontextlost", function (e) {
      e.preventDefault();
      if (window.GLSupport) {
        window.GLSupport.mountFallback(container, {
          kind: "lost",
          onRetry: function () { if (opts.onRetry) opts.onRetry(); }
        });
      }
      setStatus("error", "context-lost");
    }, false);

    var scene = new T.Scene();
    var camera = new T.PerspectiveCamera(31, W / H, 0.1, 60);
    var camZ = 4.35;
    camera.position.set(0, 1.16, camZ);
    camera.lookAt(0, 0.96, 0);

    var hemi = new T.HemisphereLight(0x8aa0ad, 0x0a0705, 0.44);
    scene.add(hemi);

    var key = new T.DirectionalLight(0xffd0a0, 2.35);
    key.position.set(-2.3, 3.2, 2.4);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.left = -2;
    key.shadow.camera.right = 2;
    key.shadow.camera.top = 3;
    key.shadow.camera.bottom = -1;
    key.shadow.camera.near = 0.5;
    key.shadow.camera.far = 10;
    key.shadow.bias = -0.0006;
    scene.add(key);

    var rim = new T.DirectionalLight(0x86b2c9, 2.5);
    rim.position.set(2.3, 2.1, -2.5);
    scene.add(rim);

    var fill = new T.PointLight(0xe2a76c, 0.45, 8, 1.6);
    fill.position.set(1.9, 1.3, 2.1);
    scene.add(fill);

    var top = new T.SpotLight(0xffdcb4, 0.5, 9, 0.65, 0.8, 1.2);
    top.position.set(0.2, 4.0, 1.0);
    top.target.position.set(0, 0.9, 0);
    scene.add(top);
    scene.add(top.target);

    // floor
    var canvas = document.createElement("canvas");
    canvas.width = canvas.height = 512;
    var ctx = canvas.getContext("2d");
    var g = ctx.createRadialGradient(256, 240, 10, 256, 256, 250);
    g.addColorStop(0, "#241a11");
    g.addColorStop(0.5, "#0e0a06");
    g.addColorStop(1, "#050403");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 512, 512);
    var floorTex = new T.CanvasTexture(canvas);
    floorTex.encoding = T.sRGBEncoding;
    var floor = new T.Mesh(
      new T.CircleGeometry(2.6, 64),
      new T.MeshStandardMaterial({ map: floorTex, roughness: 0.7, metalness: 0.05, transparent: true, opacity: 0.9 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0.001;
    floor.receiveShadow = true;
    scene.add(floor);

    var ring = new T.Mesh(
      new T.RingGeometry(0.86, 0.875, 96),
      new T.MeshBasicMaterial({ color: 0xb0864c, transparent: true, opacity: 0.32, side: T.DoubleSide })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.004;
    scene.add(ring);

    var glowCanvas = document.createElement("canvas");
    glowCanvas.width = glowCanvas.height = 256;
    var gx = glowCanvas.getContext("2d");
    var gg = gx.createRadialGradient(128, 128, 4, 128, 128, 126);
    gg.addColorStop(0, "rgba(120,84,44,0.55)");
    gg.addColorStop(0.45, "rgba(60,42,22,0.18)");
    gg.addColorStop(1, "rgba(0,0,0,0)");
    gx.fillStyle = gg;
    gx.fillRect(0, 0, 256, 256);
    var glow = new T.Sprite(new T.SpriteMaterial({
      map: new T.CanvasTexture(glowCanvas), transparent: true, depthWrite: false, blending: T.AdditiveBlending, opacity: 0.7
    }));
    glow.position.set(-0.2, 1.25, -1.6);
    glow.scale.set(3.6, 2.9, 1);
    scene.add(glow);

    var group = new T.Group();
    scene.add(group);

    var loader = null;
    var token = 0;
    var current = null;
    var running = false;
    var raf = null;
    var dragging = false;
    var lastX = 0, lastY = 0;
    var yaw = 0, pitch = 0, vel = 0;
    var auto = true;
    var zoom = 1;
    var initialYaw = 0;

    function setStatus(s, detail) { if (opts.onStatus) opts.onStatus(s, detail); }

    function showLoadError(err) {
      var kind = (err && err.code === "missing") ? "missing" : "parse";
      if (window.GLSupport) {
        window.GLSupport.mountFallback(container, {
          kind: kind,
          onRetry: function () { if (opts.onRetry) opts.onRetry(); }
        });
      }
      setStatus("error", err && err.message ? err.message : "load failed");
    }

    function getLoader() {
      if (loader) return loader;
      if (!T.GLTFLoader) throw new Error("GLTFLoader missing");
      loader = new T.GLTFLoader();
      return loader;
    }

    function clearGroup() {
      while (group.children.length) {
        var c = group.children.pop();
        c.traverse(function (o) {
          if (o.geometry) o.geometry.dispose();
          if (o.material) {
            var mats = Array.isArray(o.material) ? o.material : [o.material];
            mats.forEach(function (m) {
              Object.keys(m).forEach(function (k) {
                var v = m[k];
                if (v && v.isTexture) v.dispose();
              });
              m.dispose();
            });
          }
        });
      }
    }

    function normalize(root) {
      root.updateMatrixWorld(true);
      var box = new T.Box3().setFromObject(root);
      var size = box.getSize(new T.Vector3());
      var scale = 1.24 / (size.y || 1);
      root.scale.setScalar(scale);
      root.updateMatrixWorld(true);
      box.setFromObject(root);
      var center = box.getCenter(new T.Vector3());
      root.position.x -= center.x;
      root.position.z -= center.z;
      root.position.y += 0.005 - box.min.y;
      root.traverse(function (o) {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = false;
          if (o.material) {
            var mats = Array.isArray(o.material) ? o.material : [o.material];
            mats.forEach(function (m) {
              if ("envMapIntensity" in m) m.envMapIntensity = 0.7;
              m.needsUpdate = true;
            });
          }
        }
      });
      group.add(root);
      group.rotation.set(0, initialYaw, 0);
      yaw = initialYaw;
      if (window.GLSupport) window.GLSupport.clearFallback(container);
      setStatus("ready");
      render();
    }

    function setCharacter(id) {
      token += 1;
      var my = token;
      current = id;
      initialYaw = (opts.yaw && opts.yaw[id]) || 0;
      if (window.GLSupport) window.GLSupport.clearFallback(container);
      setStatus("loading");
      clearGroup();
      loadScript(id, function (err) {
        if (my !== token) return;
        if (err) {
          showLoadError(err);
          return;
        }
        var b64 = window.SALAMANCA_MODELS[id];
        try {
          getLoader().parse(b64ToBuffer(b64), "", function (gltf) {
            if (my !== token) return;
            normalize(gltf.scene);
          }, function (e) {
            if (my !== token) return;
            var err2 = new Error("parse failed");
            err2.code = "parse";
            showLoadError(err2);
          });
        } catch (e) {
          var err3 = new Error("decode failed");
          err3.code = "parse";
          showLoadError(err3);
        }
      });
    }

    function applyCamera() {
      camera.position.z = camZ / zoom;
      camera.position.y = 1.16;
      camera.lookAt(0, 0.96, 0);
    }

    function render() {
      group.rotation.y = yaw;
      group.rotation.x = pitch;
      applyCamera();
      renderer.render(scene, camera);
    }

    function loop(t) {
      if (!running) return;
      raf = requestAnimationFrame(loop);
      if (!lastX) lastX = t;
      var dt = Math.min(0.05, (t - lastX) / 1000);
      lastX = t;
      if (auto && !dragging) yaw += dt * 0.28;
      if (!dragging) {
        vel *= 0.94;
        if (Math.abs(vel) > 0.0001) yaw += vel;
      }
      render();
    }

    function start() {
      if (running) return;
      running = true;
      lastX = 0;
      raf = requestAnimationFrame(loop);
    }

    function stop() {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = null;
    }

    function resize() {
      var w = container.clientWidth;
      var h = container.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      render();
    }

    var el = renderer.domElement;
    el.style.touchAction = "none";

    el.addEventListener("pointerdown", function (e) {
      dragging = true;
      vel = 0;
      lastX = e.clientX;
      lastY = e.clientY;
      el.setPointerCapture && el.setPointerCapture(e.pointerId);
      el.classList.add("is-grabbing");
    });
    el.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      var dx = e.clientX - lastX;
      var dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      yaw += dx * 0.008;
      pitch = Math.max(-0.2, Math.min(0.2, pitch + dy * 0.0025));
      vel = dx * 0.0012;
    });
    function endDrag() { dragging = false; el.classList.remove("is-grabbing"); }
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);
    el.addEventListener("pointerleave", endDrag);

    el.addEventListener("wheel", function (e) {
      e.preventDefault();
      zoom = Math.max(0.72, Math.min(1.9, zoom * (e.deltaY > 0 ? 0.94 : 1.06)));
      render();
    }, { passive: false });

    var pinch = 0;
    el.addEventListener("touchstart", function (e) {
      if (e.touches.length === 2) {
        pinch = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      }
    }, { passive: true });
    el.addEventListener("touchmove", function (e) {
      if (e.touches.length === 2) {
        e.preventDefault();
        var d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
        if (pinch) {
          zoom = Math.max(0.72, Math.min(1.9, zoom * (d / pinch)));
          pinch = d;
          render();
        }
      }
    }, { passive: false });
    el.addEventListener("touchend", function () { pinch = 0; }, { passive: true });

    if (window.ResizeObserver) {
      var ro = new ResizeObserver(function () { resize(); });
      ro.observe(container);
    }

    applyCamera();
    render();

    return {
      setCharacter: setCharacter,
      start: start,
      stop: stop,
      reset: function () { yaw = initialYaw; pitch = 0; zoom = 1; vel = 0; render(); },
      resize: resize,
      setAuto: function (v) { auto = !!v; },
      dispose: function () {
        stop();
        clearGroup();
        renderer.dispose();
        if (el.parentNode) el.parentNode.removeChild(el);
      }
    };
  }

  window.SaulViewer = { create: create };
})();
