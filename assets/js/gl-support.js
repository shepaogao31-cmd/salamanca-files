/* =========================================================
   GL SUPPORT — shared WebGL bootstrap, fallbacks & diagnostics
   Used by both the Salamanca archive and the Saul dossier.

   1. Probe for a usable WebGL context (with driver info).
   2. Build a WebGLRenderer through a fallback chain, so a strict
      "high-performance" request alone cannot kill the page.
   3. Render a readable failure panel instead of a blank box.
   4. Offer an on-page diagnostic that proves whether the GPU
      pipeline works end to end.
   ========================================================= */
(function () {
  "use strict";

  var CHECKED = false;
  var LAST = null;

  function lang() {
    var l = document.documentElement.getAttribute("data-lang");
    return l === "en" ? "en" : "zh";
  }

  var TEXT = {
    zh: {
      title: "3D 无法显示",
      retry: "重试",
      runDiag: "运行诊断",
      close: "关闭",
      rerun: "重新检测",
      copy: "复制诊断信息",
      copied: "已复制",
      pass: "通过",
      fail: "失败",
      kinds: {
        webgl: {
          reason: "浏览器没有可用的 WebGL 图形接口，3D 模型无法渲染。",
          tips: [
            "在浏览器设置中开启「使用硬件加速」，然后完全重启浏览器",
            "更新显卡驱动，或改用最新版 Chrome / Edge",
            "远程桌面、虚拟机或部分省电模式下，系统可能禁用 WebGL"
          ]
        },
        missing: {
          reason: "模型文件没有加载成功，所以舞台一直是空的。",
          tips: [
            "确认 assets 文件夹与 HTML 文件在同一个目录里",
            "如果是从压缩包直接打开的，请先完整解压再双击 HTML",
            "检查安全软件是否拦截了本地 .js 模型文件"
          ]
        },
        parse: {
          reason: "模型文件已读到，但解析失败。",
          tips: [
            "点重试重新载入一次",
            "如果反复失败，说明 assets/models 里的文件已损坏，需要重新获取"
          ]
        },
        lost: {
          reason: "显卡上下文被系统回收，常见于显存不足或双显卡切换。",
          tips: ["点重试重建 3D 场景", "关闭其他占用显存的标签页后再试"]
        }
      },
      diag: {
        title: "3D 环境诊断",
        head: "这份报告可以区分是浏览器、显卡驱动的问题，还是资源文件的问题。",
        webgl: "WebGL 上下文",
        webgl2: "WebGL 2",
        renderer: "图形渲染器",
        vendor: "厂商",
        texture: "最大纹理尺寸",
        dpr: "设备像素比",
        three: "Three.js",
        loader: "GLTFLoader",
        cube: "渲染测试",
        canvas: "舞台画布",
        probeBtn: "实测模型加载",
        probing: "正在读取模型文件…",
        probeOk: "模型加载正常。如果舞台仍然空白，问题在渲染参数而不是文件。",
        probeFail: "模型加载失败，问题就出在这一步。",
        url: "请求地址",
        read: "读取结果",
        size: "文件大小",
        decode: "解码",
        parse: "解析耗时",
        meshes: "网格 / 顶点",
        loadFailed: "脚本没有加载成功",
        timeout: "等待超时（20 秒）",
        noData: "脚本已载入，但没有模型数据",
        decodeFail: "base64 解码失败",
        noLoader: "GLTFLoader 不可用",
        parseFail: "GLB 解析失败",
        yes: "可用",
        no: "不可用",
        none: "未检测到",
        summaryOk: "图形管线正常。若模型仍不显示，问题在资源加载，请检查 assets 目录。",
        summaryBad: "图形管线不可用。请开启浏览器硬件加速或更新显卡驱动后重试。"
      }
    },
    en: {
      title: "3D unavailable",
      retry: "Try again",
      runDiag: "Run diagnostic",
      close: "Close",
      rerun: "Re-check",
      copy: "Copy report",
      copied: "Copied",
      pass: "PASS",
      fail: "FAIL",
      kinds: {
        webgl: {
          reason: "This browser has no usable WebGL context, so the 3D models cannot render.",
          tips: [
            "Turn on hardware acceleration in the browser settings, then fully restart it",
            "Update the graphics driver, or use the latest Chrome / Edge",
            "WebGL is often disabled over remote desktop, in VMs, or in battery-saver modes"
          ]
        },
        missing: {
          reason: "The model files never arrived, which is why the stage stayed empty.",
          tips: [
            "Keep the assets folder in the same directory as the HTML file",
            "If you opened the page straight from a .zip, extract it first",
            "Check whether security software blocked the local .js model files"
          ]
        },
        parse: {
          reason: "The model file was found but could not be parsed.",
          tips: [
            "Hit retry to load it once more",
            "If it keeps failing, the file in assets/models is damaged and needs replacing"
          ]
        },
        lost: {
          reason: "The GPU context was reclaimed — usually low VRAM or a switch between graphics chips.",
          tips: ["Hit retry to rebuild the scene", "Close other GPU-heavy tabs, then try again"]
        }
      },
      diag: {
        title: "3D environment check",
        head: "Use this report to tell a browser problem from a missing-file problem.",
        webgl: "WebGL context",
        webgl2: "WebGL 2",
        renderer: "Renderer",
        vendor: "Vendor",
        texture: "Max texture size",
        dpr: "Device pixel ratio",
        three: "Three.js",
        loader: "GLTFLoader",
        cube: "Render test",
        canvas: "Stage canvas",
        probeBtn: "Test model loading",
        probing: "Reading the model file…",
        probeOk: "Model loading works. If the stage is still empty, the problem is rendering, not the files.",
        probeFail: "Model loading failed — this is where it breaks.",
        url: "Requested URL",
        read: "Read result",
        size: "File size",
        decode: "Decode",
        parse: "Parse time",
        meshes: "Meshes / vertices",
        loadFailed: "Script did not load",
        timeout: "Timed out after 20s",
        noData: "Script loaded but no model data",
        decodeFail: "base64 decode failed",
        noLoader: "GLTFLoader unavailable",
        parseFail: "GLB parse failed",
        yes: "Available",
        no: "Unavailable",
        none: "Not detected",
        summaryOk: "The graphics pipeline works. If a model still stays blank, the issue is asset loading — check the assets folder.",
        summaryBad: "The graphics pipeline is unavailable. Enable hardware acceleration or update the graphics driver."
      }
    }
  };

  function T() { return TEXT[lang()]; }

  /* ---------------- probing ---------------- */

  function probe(force) {
    if (CHECKED && !force && LAST) return LAST;
    CHECKED = true;
    var out = {
      ok: false, webgl: false, webgl2: false,
      renderer: "", vendor: "", maxTexture: 0,
      dpr: window.devicePixelRatio || 1,
      three: (window.THREE && window.THREE.REVISION) || "",
      gltf: !!(window.THREE && window.THREE.GLTFLoader),
      reason: ""
    };
    var gl = null;
    try {
      var c = document.createElement("canvas");
      gl = c.getContext("webgl2") || c.getContext("webgl") || c.getContext("experimental-webgl");
      if (!gl) {
        out.reason = "no-context";
        LAST = out;
        return out;
      }
      out.ok = true;
      out.webgl = true;
      try { out.webgl2 = !!c.getContext("webgl2"); } catch (e2) { out.webgl2 = false; }
      var dbg = gl.getExtension("WEBGL_debug_renderer_info");
      if (dbg) {
        out.renderer = gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) || "";
        out.vendor = gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL) || "";
      }
      if (!out.renderer) out.renderer = gl.getParameter(gl.RENDERER) || "";
      out.maxTexture = gl.getParameter(gl.MAX_TEXTURE_SIZE) || 0;
    } catch (e) {
      out.reason = (e && e.message) ? e.message : "probe-failed";
    } finally {
      try {
        var lose = gl && gl.getExtension && gl.getExtension("WEBGL_lose_context");
        if (lose) lose.loseContext();
      } catch (e3) { /* ignore */ }
    }
    LAST = out;
    return out;
  }

  /* ---------------- renderer with fallback chain ---------------- */

  function createRenderer(Tref, options) {
    if (!Tref) return null;
    options = options || {};
    var alpha = options.alpha !== false;
    var attempts = [
      { antialias: true, alpha: alpha, powerPreference: "high-performance" },
      { antialias: true, alpha: alpha },
      { antialias: false, alpha: alpha, powerPreference: "low-power" },
      { antialias: false, alpha: false, failIfMajorPerformanceCaveat: false }
    ];
    for (var i = 0; i < attempts.length; i++) {
      try {
        var r = new Tref.WebGLRenderer(attempts[i]);
        if (r) return r;
      } catch (e) {
        if (i === attempts.length - 1 && window.console) {
          console.error("WebGLRenderer could not be created:", (e && e.message) || e);
        }
      }
    }
    return null;
  }

  /* ---------------- failure panel ---------------- */

  function buildFallback(cfg) {
    var s = T();
    var kind = (cfg.kind && s.kinds[cfg.kind]) ? cfg.kind : "webgl";
    var k = s.kinds[kind];

    var box = document.createElement("div");
    box.className = "gl-fallback";
    box.setAttribute("data-gl-kind", kind);
    box.setAttribute("role", "status");

    var icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("viewBox", "0 0 48 48");
    icon.setAttribute("fill", "none");
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = '<path d="M24 7 41 16v16L24 41 7 32V16L24 7Z" stroke="currentColor" stroke-width="1.1" opacity=".45"/><path d="M24 16.5v10.4M24 31.4v.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>';
    box.appendChild(icon);

    var title = document.createElement("strong");
    title.textContent = s.title;
    box.appendChild(title);

    var reason = document.createElement("p");
    reason.className = "gl-fallback__reason";
    reason.textContent = cfg.detail || k.reason;
    box.appendChild(reason);

    if (k.tips && k.tips.length) {
      var ul = document.createElement("ul");
      k.tips.forEach(function (tip) {
        var li = document.createElement("li");
        li.textContent = tip;
        ul.appendChild(li);
      });
      box.appendChild(ul);
    }

    var actions = document.createElement("div");
    actions.className = "gl-fallback__actions";

    if (typeof cfg.onRetry === "function") {
      var retry = document.createElement("button");
      retry.type = "button";
      retry.className = "gl-fallback__btn gl-fallback__btn--main";
      retry.textContent = s.retry;
      retry.addEventListener("click", function () {
        if (retry.disabled) return;
        retry.disabled = true;
        box.classList.add("is-busy");
        setTimeout(function () {
          cfg.onRetry();
          setTimeout(function () {
            retry.disabled = false;
            box.classList.remove("is-busy");
          }, 600);
        }, 0);
      });
      actions.appendChild(retry);
    }

    var diag = document.createElement("button");
    diag.type = "button";
    diag.className = "gl-fallback__btn";
    diag.textContent = s.runDiag;
    diag.addEventListener("click", function () { openDiag(); });
    actions.appendChild(diag);

    box.appendChild(actions);
    return box;
  }

  function mountFallback(container, cfg) {
    if (!container) return null;
    cfg = cfg || {};
    var existing = container.querySelector(".gl-fallback");
    if (existing) existing.parentNode.removeChild(existing);
    container.classList.remove("is-ready");
    container.classList.add("is-error");
    var box = buildFallback(cfg);
    container.appendChild(box);
    return box;
  }

  function clearFallback(container) {
    if (!container) return;
    var box = container.querySelector(".gl-fallback");
    if (box) box.parentNode.removeChild(box);
    container.classList.remove("is-error");
  }


  /* ---------------- model loading probe ---------------- */

  function probeModel(root, btn) {
    var s = T();
    var box = root.querySelector(".gl-probe");
    if (!box) return;
    box.innerHTML = "";
    var note = document.createElement("p");
    note.className = "gl-probe__note";
    note.textContent = s.diag.probing;
    box.appendChild(note);

    var id = document.getElementById("dossier") ? "saul" : "hector";
    var url = new URL("assets/models/" + id + ".js?v=20261112a", document.location.href).href;
    var t0 = (window.performance && performance.now) ? performance.now() : Date.now();
    if (btn) btn.disabled = true;

    var dl = document.createElement("dl");
    row(dl, s.diag.url, url);

    function done(text, cls) {
      var sum = document.createElement("p");
      sum.className = "gl-probe__sum " + (cls || "");
      sum.textContent = text;
      box.appendChild(sum);
      if (btn) btn.disabled = false;
    }

    function fail(msg, detail) {
      row(dl, s.diag.read, msg, "is-bad");
      if (detail) row(dl, s.diag.parse, detail);
      box.appendChild(dl);
      done(s.diag.probeFail, "is-bad");
    }

    var settled = false;
    var timer = setTimeout(function () {
      if (settled) return;
      settled = true;
      fail(s.diag.timeout, Math.round(performance.now() - t0) + " ms");
    }, 20000);

    var script = document.createElement("script");
    script.src = "assets/models/" + id + ".js?v=20261112a";
    script.async = true;

    script.onerror = function () {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      fail(s.diag.loadFailed, Math.round(performance.now() - t0) + " ms");
    };

    script.onload = function () {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      var ms = Math.round(performance.now() - t0);
      var b64 = window.SALAMANCA_MODELS && window.SALAMANCA_MODELS[id];
      if (!b64) { fail(s.diag.noData, ms + " ms"); return; }

      row(dl, s.diag.read, s.diag.yes + " · " + ms + " ms", "is-ok");
      row(dl, s.diag.size, Math.round(b64.length / 1024) + " KB base64");

      var raw;
      try {
        raw = window.atob(b64);
      } catch (e) {
        fail(s.diag.decodeFail, (e && e.message) || "");
        return;
      }
      var bytes = raw.length;
      var magic = raw.slice(0, 4);
      row(dl, s.diag.decode,
        (bytes / 1024 / 1024).toFixed(2) + " MB · " + magic,
        magic === "glTF" ? "is-ok" : "is-bad");

      if (!window.THREE || !window.THREE.GLTFLoader) { fail(s.diag.noLoader); return; }

      var buf = new Uint8Array(bytes);
      for (var i = 0; i < bytes; i++) buf[i] = raw.charCodeAt(i);
      var t1 = performance.now();
      try {
        new window.THREE.GLTFLoader().parse(buf.buffer, "", function (gltf) {
          var meshes = 0, verts = 0;
          gltf.scene.traverse(function (o) {
            if (o.isMesh) {
              meshes += 1;
              if (o.geometry && o.geometry.attributes && o.geometry.attributes.position) {
                verts += o.geometry.attributes.position.count;
              }
            }
          });
          row(dl, s.diag.parse, Math.round(performance.now() - t1) + " ms", meshes ? "is-ok" : "is-bad");
          row(dl, s.diag.meshes, meshes + " / " + verts, meshes ? "is-ok" : "is-bad");
          box.appendChild(dl);
          done(s.diag.probeOk, "is-ok");
        }, function (err) {
          fail(s.diag.parseFail, (err && err.message) || "");
        });
      } catch (e) {
        fail(s.diag.parseFail, (e && e.message) || "");
      }
    };

    document.head.appendChild(script);
  }

  /* ---------------- diagnostics overlay ---------------- */

  function readPixelTest() {
    var info = { pass: false, note: "" };
    var ThreeRef = window.THREE;
    if (!ThreeRef) { info.note = "three-missing"; return info; }
    var renderer = null;
    var cvs = document.createElement("canvas");
    cvs.width = 64;
    cvs.height = 64;
    try {
      renderer = createRenderer(ThreeRef, { alpha: false });
      if (!renderer) { info.note = "renderer-null"; return info; }
      renderer.setPixelRatio(1);
      renderer.setSize(64, 64, false);
      renderer.setClearColor(0x000000, 1);
      var scene = new ThreeRef.Scene();
      var cam = new ThreeRef.PerspectiveCamera(45, 1, 0.1, 10);
      cam.position.set(0, 0, 2.2);
      var mat = new ThreeRef.MeshBasicMaterial({ color: 0xff9a2e });
      var cube = new ThreeRef.Mesh(new ThreeRef.BoxGeometry(1.1, 1.1, 1.1), mat);
      cube.rotation.set(0.5, 0.8, 0);
      scene.add(cube);
      renderer.render(scene, cam);
      var gl = renderer.getContext();
      var px = new Uint8Array(4);
      gl.readPixels(32, 32, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
      info.pass = px[0] > 10 || px[1] > 10 || px[2] > 10;
      info.note = px[0] + "," + px[1] + "," + px[2];
      mat.dispose();
      cube.geometry.dispose();
    } catch (e) {
      info.note = (e && e.message) ? e.message : "render-failed";
    } finally {
      try { if (renderer) renderer.dispose(); } catch (e2) { /* ignore */ }
    }
    return info;
  }

  var diagEl = null;

  function row(dl, label, value, cls) {
    var dt = document.createElement("dt");
    dt.textContent = label;
    var dd = document.createElement("dd");
    dd.textContent = value;
    if (cls) dd.className = cls;
    dl.appendChild(dt);
    dl.appendChild(dd);
  }

  function fillDiag(root) {
    var s = T();
    var p = probe(true);
    var px = readPixelTest();
    var body = root.querySelector(".gl-diag__body");
    if (!body) return;
    body.innerHTML = "";

    var dl = document.createElement("dl");
    row(dl, s.diag.webgl, p.webgl ? s.diag.yes : s.diag.no, p.webgl ? "is-ok" : "is-bad");
    row(dl, s.diag.webgl2, p.webgl2 ? s.diag.yes : s.diag.no, p.webgl2 ? "is-ok" : "");
    row(dl, s.diag.renderer, p.renderer || s.diag.none);
    row(dl, s.diag.vendor, p.vendor || s.diag.none);
    row(dl, s.diag.texture, p.maxTexture ? String(p.maxTexture) : s.diag.none);
    row(dl, s.diag.dpr, String(p.dpr));
    row(dl, s.diag.three, p.three ? "r" + p.three : s.diag.none, p.three ? "is-ok" : "is-bad");
    row(dl, s.diag.loader, p.gltf ? s.diag.yes : s.diag.no, p.gltf ? "is-ok" : "is-bad");
    row(dl, s.diag.cube, px.pass ? s.pass : s.fail, px.pass ? "is-ok" : "is-bad");

    var cv = document.querySelector("#stage-canvas canvas");
    if (cv) {
      var rect = cv.getBoundingClientRect();
      var css = Math.round(rect.width) + "x" + Math.round(rect.height);
      var ok = rect.width > 40 && rect.height > 40;
      row(dl, s.diag.canvas, cv.width + "x" + cv.height + " / " + css, ok ? "is-ok" : "is-bad");
    }
    body.appendChild(dl);

    var sum = document.createElement("p");
    sum.className = "gl-diag__summary";
    sum.textContent = px.pass ? s.diag.summaryOk : s.diag.summaryBad;
    body.appendChild(sum);

    var raw = [
      "webgl=" + p.webgl,
      "webgl2=" + p.webgl2,
      "renderer=" + (p.renderer || "n/a"),
      "vendor=" + (p.vendor || "n/a"),
      "maxTexture=" + p.maxTexture,
      "three=r" + (p.three || "?"),
      "gltf=" + p.gltf,
      "renderTest=" + (px.pass ? "pass" : "fail") + " (" + px.note + ")",
      "ua=" + navigator.userAgent
    ].join("\n");
    root.dataset.report = raw;
  }

  function openDiag() {
    var s = T();
    if (diagEl) {
      diagEl.hidden = false;
      fillDiag(diagEl);
      return diagEl;
    }
    diagEl = document.createElement("div");
    diagEl.className = "gl-diag";
    diagEl.innerHTML =
      '<div class="gl-diag__veil" data-close></div>' +
      '<section class="gl-diag__panel" role="dialog" aria-modal="true">' +
        '<header class="gl-diag__head">' +
          '<span>' + s.diag.title + '</span>' +
          '<button type="button" class="gl-diag__x" data-close aria-label="' + s.close + '">' +
            '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 5l10 10M15 5 5 15" stroke="currentColor" stroke-width="1.4"/></svg>' +
          '</button>' +
        '</header>' +
        '<p class="gl-diag__note">' + s.diag.head + '</p>' +
        '<div class="gl-diag__body"></div>' +
        '<div class="gl-diag__probe">' +
          '<button type="button" class="gl-diag__btn" data-probe>' + s.diag.probeBtn + '</button>' +
          '<div class="gl-probe"></div>' +
        '</div>' +
        '<footer class="gl-diag__foot">' +
          '<button type="button" class="gl-diag__btn" data-rerun>' + s.rerun + '</button>' +
          '<button type="button" class="gl-diag__btn gl-diag__btn--main" data-copy>' + s.copy + '</button>' +
        '</footer>' +
      '</section>';
    document.body.appendChild(diagEl);

    diagEl.addEventListener("click", function (e) {
      if (e.target.closest("[data-close]")) diagEl.hidden = true;
      if (e.target.closest("[data-rerun]")) fillDiag(diagEl);
      if (e.target.closest("[data-probe]")) probeModel(diagEl, e.target.closest("[data-probe]"));
      if (e.target.closest("[data-copy]")) {
        var btn = e.target.closest("[data-copy]");
        var text = diagEl.dataset.report || "";
        var done = function () {
          var old = btn.textContent;
          btn.textContent = T().copied;
          setTimeout(function () { btn.textContent = old; }, 1400);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, done);
        } else {
          try {
            var ta = document.createElement("textarea");
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
            done();
          } catch (e2) { /* ignore */ }
        }
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && diagEl && !diagEl.hidden) diagEl.hidden = true;
    });

    fillDiag(diagEl);
    return diagEl;
  }

  document.addEventListener("click", function (e) {
    var node = e.target;
    while (node && node !== document.body) {
      if (node.getAttribute && node.hasAttribute("data-gl-diag")) {
        e.preventDefault();
        openDiag();
        return;
      }
      node = node.parentNode;
    }
  });

  /* deep link: open the diagnostic automatically with ?diag=1 */
  function autoDiag() {
    try {
      var q = window.location.search;
      if (q && /(^|[?&])diag=1(&|$)/.test(q)) openDiag();
    } catch (e) { /* ignore */ }
  }
  if (document.readyState === "complete") {
    setTimeout(autoDiag, 0);
  } else {
    window.addEventListener("load", autoDiag);
  }

  window.GLSupport = {
    probe: probe,
    createRenderer: createRenderer,
    mountFallback: mountFallback,
    clearFallback: clearFallback,
    openDiag: openDiag,
    text: T
  };
})();
