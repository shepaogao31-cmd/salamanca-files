/* =========================================================
   BETTER CALL SAUL — THE McGILL NETWORK
   board, filters, dossier panel, i18n
   ========================================================= */
(function () {
  "use strict";

  var DATA = window.SAUL_DATA;
  if (!DATA) return;

  var state = {
    lang: "zh",
    filter: "all",
    active: null,
    hover: null
  };

  var UI = {
    zh: {
      navNetwork: "关系网",
      navTimeline: "时间线",
      navAbout: "档案说明",
      heroKicker: "档案编号 BCS-2002 · 阿尔伯克基，新墨西哥",
      heroTitle: "索尔·古德曼",
      heroSubCn: "人物关系档案",
      heroLead: "三个名字，五段人生。从邮件室的吉米，到霓虹灯下的索尔，再到奥马哈柜台后的吉恩——他不是突然变坏的，他是一步步被自己说服的。",
      heroMeta1: "关键人物",
      heroMeta2: "条关系",
      heroMeta3: "年跨度",
      heroCta: "展开关系网",
      heroCta2: "阅读时间线",
      boardKicker: "关系网 / THE NETWORK",
      boardTitle: "谁在定义索尔·古德曼",
      boardLead: "选中一张卡片，查看他与索尔之间的那条线：红色是爱，暗红是债，冷灰是法律。3D 档案可拖动旋转、滚轮或双指缩放；静态档案为原剧影像；每份档案都可播放台词。",
      filterLabel: "按阵营筛选",
      legendLove: "亲密",
      legendFamily: "血亲",
      legendLaw: "法律",
      legendCrime: "犯罪",
      legendEnemy: "敌对",
      legendEscape: "消失",
      boardHint: "悬停查看关系 · 点击打开档案",
      dossier: "人物档案",
      relationLabel: "与索尔的关系",
      roleLabel: "身份",
      factionLabel: "阵营",
      noteLabel: "档案批注",
      quoteLabel: "原话",
      linksLabel: "关系链",
      close: "关闭",
      timelineKicker: "时间线 / THE ARC",
      timelineTitle: "五段人生，三个名字",
      aboutKicker: "档案说明 / COLOPHON",
      aboutTitle: "关于这份关系档案",
      aboutP1: "这是一份非官方的粉丝创作，围绕《风骚律师》与《绝命毒师》中的吉米·麦吉尔 / 索尔·古德曼展开。人物、剧情与台词版权归 AMC / Sony Pictures Television 及创作者所有。",
      aboutP2: "关系图只收录与索尔有直接或关键间接联系的人物，线不代表全部剧情，只代表这段关系在他生命里的重量。",
      aboutP3: "“索尔·古德曼”来自 “S'all good, man.”——一句让所有人都放松警惕的玩笑。这份档案想记录的，正是这句玩笑的代价。",
      footer: "非官方粉丝作品 · 与 AMC / Sony Pictures Television 无关",
      "footer.glCheck": "3D 诊断",
      back: "萨拉曼卡档案",
      "stage.auto": "自动旋转",
      "stage.reset": "重置视角",
      "dossier.relation": "与索尔的关系 / RELATION",
      "dossier.role": "身份 / ROLE",
      "dossier.faction": "阵营 / FACTION",
      "dossier.season": "活跃 / SEASONS",
      "dossier.traits": "性格特征 / TRAITS",
      "dossier.bio": "档案正文 / FILE NOTE",
      "dossier.margin": "档案批注 / MARGIN",
      "dossier.links": "关系链 / CONNECTIONS",
      all: "全部"
    },
    en: {
      navNetwork: "Network",
      navTimeline: "Timeline",
      navAbout: "About",
      heroKicker: "File BCS-2002 · Albuquerque, New Mexico",
      heroTitle: "Saul Goodman",
      heroSubCn: "The relationship file",
      heroLead: "Three names, five lives. Jimmy from the mailroom, Saul under the neon, Gene behind an Omaha counter — he didn't turn bad overnight. He talked himself into it, one favour at a time.",
      heroMeta1: "key figures",
      heroMeta2: "connections",
      heroMeta3: "years",
      heroCta: "Open the network",
      heroCta2: "Read the timeline",
      boardKicker: "The network",
      boardTitle: "Who defines Saul Goodman",
      boardLead: "Select a card to trace the line back to Saul: red is love, dark red is debt, cold grey is the law. 3D files rotate by drag and zoom by scroll or pinch; still files are on-screen photographs; every file has a playable line.",
      filterLabel: "Filter by faction",
      legendLove: "Intimate",
      legendFamily: "Blood",
      legendLaw: "Law",
      legendCrime: "Criminal",
      legendEnemy: "Enemy",
      legendEscape: "Exit",
      boardHint: "Hover to trace · click to open the file",
      dossier: "Dossier",
      relationLabel: "Relation to Saul",
      roleLabel: "Role",
      factionLabel: "Faction",
      noteLabel: "Marginal note",
      quoteLabel: "On record",
      linksLabel: "Connections",
      close: "Close",
      timelineKicker: "The arc",
      timelineTitle: "Five lives, three names",
      aboutKicker: "Colophon",
      aboutTitle: "About this file",
      aboutP1: "An unofficial fan project about Jimmy McGill / Saul Goodman from Better Call Saul and Breaking Bad. Characters, storylines and dialogue belong to AMC / Sony Pictures Television and the creators.",
      aboutP2: "The network includes only figures with a direct or decisive connection to Saul. A line is not the whole plot — it is the weight that relationship carried in his life.",
      aboutP3: "“Saul Goodman” comes from “S'all good, man.” — a joke that put everyone at ease. This file is about what that joke cost.",
      footer: "An unofficial fan project · not affiliated with AMC / Sony Pictures Television",
      "footer.glCheck": "3D check",
      back: "Salamanca files",
      "stage.auto": "AUTO ROTATE",
      "stage.reset": "RESET VIEW",
      "dossier.relation": "RELATION TO SAUL",
      "dossier.role": "ROLE",
      "dossier.faction": "FACTION",
      "dossier.season": "SEASONS",
      "dossier.traits": "TRAITS",
      "dossier.bio": "FILE NOTE",
      "dossier.margin": "MARGIN",
      "dossier.links": "CONNECTIONS",
      all: "All"
    }
  };

  function t(key) {
    return (UI[state.lang] && UI[state.lang][key]) || key;
  }

  function el(tag, attrs, text) {
    var n = document.createElementNS("http://www.w3.org/2000/svg", tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    if (text !== undefined) n.textContent = text;
    return n;
  }

  function make(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  var byId = {};
  DATA.characters.forEach(function (c) { byId[c.id] = c; });

  /* ---------------- board ---------------- */

  var svg, layerEdges, layerNodes, boardWrap;
  var edgeEls = [];

  function curve(a, b, i) {
    var dx = b.x - a.x, dy = b.y - a.y;
    var len = Math.sqrt(dx * dx + dy * dy) || 1;
    var nx = -dy / len, ny = dx / len;
    var sag = Math.min(42, len * 0.13) * (i % 2 ? 1 : -1);
    var cx = (a.x + b.x) / 2 + nx * sag;
    var cy = (a.y + b.y) / 2 + ny * sag;
    return {
      d: "M" + a.x + " " + a.y + " Q" + cx.toFixed(1) + " " + cy.toFixed(1) + " " + b.x + " " + b.y,
      mx: 0.25 * a.x + 0.5 * cx + 0.25 * b.x,
      my: 0.25 * a.y + 0.5 * cy + 0.25 * b.y
    };
  }

  function buildBoard() {
    svg = document.getElementById("saul-board");
    layerEdges = document.getElementById("layer-edges");
    layerNodes = document.getElementById("layer-nodes");
    if (!svg || !layerEdges || !layerNodes) return;

    DATA.edges.forEach(function (e, i) {
      var a = byId[e.a], b = byId[e.b];
      if (!a || !b) return;
      var c = curve(a, b, i);

      var hit = el("path", { d: c.d, class: "edge-hit" });
      var line = el("path", { d: c.d, class: "edge edge--" + e.type });

      var g = el("g", { class: "edge-label" });
      var label = e.label[state.lang];
      var w = Math.max(78, label.length * 11 + 22);
      g.appendChild(el("rect", { x: c.mx - w / 2, y: c.my - 26, width: w, height: 21, rx: 3 }));
      g.appendChild(el("text", { x: c.mx, y: c.my - 11.5, "text-anchor": "middle" }, label));

      layerEdges.appendChild(hit);
      layerEdges.appendChild(line);
      layerEdges.appendChild(g);

      edgeEls.push({ a: e.a, b: e.b, line: line, hit: hit, label: g, type: e.type });
    });

    DATA.characters.forEach(function (c) {
      var w = c.w || 168;
      var h = c.h || 60;
      var g = el("g", {
        class: "node node--" + c.group + (c.id === "saul" ? " node--center" : ""),
        transform: "translate(" + c.x + " " + c.y + ")",
        "data-id": c.id,
        tabindex: "0",
        role: "button",
        "aria-label": c.name[state.lang] + " — " + c.role[state.lang]
      });

      g.appendChild(el("rect", { class: "node-card", x: -w / 2, y: -h / 2, width: w, height: h, rx: 6 }));
      g.appendChild(el("rect", { class: "node-rule", x: -w / 2 + 10, y: -h / 2 + 5, width: w - 20, height: 1 }));

      var r = c.id === "saul" ? 21 : 16;
      var cx = -w / 2 + (c.id === "saul" ? 34 : 28);
      g.appendChild(el("circle", { class: "node-mark", cx: cx, cy: 0, r: r }));
      g.appendChild(el("text", { class: "node-initials", x: cx, y: 4, "text-anchor": "middle" }, c.initials));

      var tx = cx + r + 10;
      g.appendChild(el("text", { class: "node-name", x: tx, y: c.id === "saul" ? -8 : -4 }, c.name[state.lang]));
      g.appendChild(el("text", { class: "node-role", x: tx, y: c.id === "saul" ? 12 : 14 }, c.role[state.lang]));

      if (c.id === "saul") {
        g.appendChild(el("text", { class: "node-stamp", x: w / 2 - 12, y: -h / 2 + 18, "text-anchor": "end" }, "S/F"));
      }

      g.addEventListener("mouseenter", function () { focusNode(c.id); });
      g.addEventListener("mouseleave", function () { focusNode(null); });
      g.addEventListener("focus", function () { focusNode(c.id); });
      g.addEventListener("blur", function () { focusNode(null); });
      g.addEventListener("click", function () { openDossier(c.id); });
      g.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); openDossier(c.id); }
      });

      layerNodes.appendChild(g);
    });
  }

  function buildIndex() {
    var wrap = document.getElementById("mobile-index");
    if (!wrap) return;
    var chips = wrap.querySelector(".index-strip__chips");
    if (!chips) return;
    chips.innerHTML = "";
    DATA.characters.forEach(function (c) {
      var b = make("button", "index-chip");
      b.type = "button";
      b.setAttribute("data-goto", c.id);
      b.appendChild(make("span", "index-chip__mark", c.initials));
      b.appendChild(make("span", "index-chip__name", c.name[state.lang]));
      b.addEventListener("click", function () { openDossier(c.id); });
      chips.appendChild(b);
    });
    var label = wrap.querySelector(".index-strip__label");
    if (label) label.textContent = state.lang === "zh" ? "全部档案" : "ALL FILES";
  }

  function centerBoard() {
    var board = document.getElementById("board");
    if (!board) return;
    if (board.scrollWidth <= board.clientWidth + 4) return;
    board.scrollLeft = board.scrollWidth * 0.5 - board.clientWidth / 2;
  }

  function focusNode(id) {
    state.hover = id;
    var focus = id || state.active;
    if (!svg) return;
    svg.classList.toggle("has-focus", !!focus);
    var connected = {};
    edgeEls.forEach(function (e) {
      var on = !!focus && (e.a === focus || e.b === focus);
      e.line.classList.toggle("is-lit", on);
      e.hit.classList.toggle("is-lit", on);
      e.label.classList.toggle("is-on", on);
      if (on) { connected[e.a] = 1; connected[e.b] = 1; }
    });
    Array.prototype.forEach.call(layerNodes.children, function (g) {
      var nid = g.getAttribute("data-id");
      g.classList.toggle("is-lit", !!focus && (nid === focus || connected[nid]));
      g.classList.toggle("is-active", nid === state.active);
    });
  }

  /* ---------------- filters ---------------- */

  function applyFilter(group) {
    state.filter = group;
    Array.prototype.forEach.call(layerNodes.children, function (g) {
      var id = g.getAttribute("data-id");
      var c = byId[id];
      var show = group === "all" || c.group === group || id === "saul";
      g.classList.toggle("is-dim", !show);
    });
    edgeEls.forEach(function (e) {
      var a = byId[e.a], b = byId[e.b];
      var visA = group === "all" || a.group === group || e.a === "saul";
      var visB = group === "all" || b.group === group || e.b === "saul";
      var show = visA && visB;
      e.line.classList.toggle("is-dim", !show);
      e.hit.classList.toggle("is-dim", !show);
      if (!show) e.label.classList.remove("is-on");
    });
    document.querySelectorAll(".filter-chip").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-filter") === group);
      b.setAttribute("aria-pressed", b.getAttribute("data-filter") === group ? "true" : "false");
    });
  }

  /* ---------------- dossier ---------------- */

  var viewer = null;
  var audioEl = null;
  var audioId = null;
  var lastFocus = null;

  var STAGE_TEXT = {
    zh: { drag: "拖动旋转 · 滚轮 / 双指缩放", still: "原剧影像 · 档案照片", loading: "正在载入 3D 人物…", offline: "3D 不可用", mode3d: "LIVE 3D", modeImg: "ARCHIVE STILL", statusLoading: "载入中", statusReady: "拖动旋转", statusPhoto: "档案照片" },
    en: { drag: "Drag to rotate · scroll / pinch to zoom", still: "On-screen still · archive print", loading: "Loading 3D figure…", offline: "3D unavailable", mode3d: "LIVE 3D", modeImg: "ARCHIVE STILL", statusLoading: "LOADING", statusReady: "DRAG TO ROTATE", statusPhoto: "ARCHIVE PRINT" }
  };

  function st() { return STAGE_TEXT[state.lang] || STAGE_TEXT.zh; }

  function setText(sel, value) {
    var n = document.querySelector(sel);
    if (n) n.textContent = value;
  }

  function stageErrorKind(detail) {
    var d = String(detail || "");
    if (d.indexOf("webgl") > -1 || d.indexOf("no-webgl") > -1) return "webgl";
    if (d.indexOf("missing") > -1 || d.indexOf("timeout") > -1 || d.indexOf("script") > -1) return "missing";
    if (d.indexOf("lost") > -1) return "lost";
    return "parse";
  }

  function setStageStatus(kind, detail) {
    var n = document.getElementById("stage-status");
    var canvas = document.getElementById("stage-canvas");
    if (!n) return;
    if (kind === "loading") {
      n.textContent = st().statusLoading;
      if (canvas) {
        canvas.classList.remove("is-ready");
        canvas.classList.remove("is-error");
        if (window.GLSupport) window.GLSupport.clearFallback(canvas);
      }
    } else if (kind === "ready") {
      n.textContent = st().statusReady;
      if (canvas) {
        canvas.classList.remove("is-error");
        if (window.GLSupport) window.GLSupport.clearFallback(canvas);
        canvas.classList.add("is-ready");
      }
    } else if (kind === "photo") {
      n.textContent = st().statusPhoto;
      if (canvas) {
        canvas.classList.remove("is-error");
        if (window.GLSupport) window.GLSupport.clearFallback(canvas);
        canvas.classList.add("is-ready");
      }
    } else if (kind === "error") {
      n.textContent = detail === "no-webgl" ? st().offline : st().offline;
      if (canvas) {
        canvas.classList.remove("is-ready");
        canvas.classList.add("is-error");
        if (window.GLSupport) {
          window.GLSupport.mountFallback(canvas, {
            kind: stageErrorKind(detail),
            onRetry: retryStage
          });
        }
      }
    }
  }

  function retryStage() {
    var canvas = document.getElementById("stage-canvas");
    if (canvas && window.GLSupport) window.GLSupport.clearFallback(canvas);
    if (viewer) {
      try { viewer.dispose(); } catch (e) { /* ignore */ }
      viewer = null;
    }
    var c = state.active ? byId[state.active] : null;
    if (!c) return;
    var v = ensureViewer();
    if (v && !v.isFallback) {
      v.start();
      v.setCharacter(c.id);
      v.resize();
    }
  }

  function ensureViewer() {
    if (viewer) return viewer;
    if (!window.SaulViewer || !window.THREE) {
      setStageStatus("error", "model script failed");
      return null;
    }
    var canvasBox = document.getElementById("stage-canvas");
    if (!canvasBox) return null;
    try {
      viewer = window.SaulViewer.create(canvasBox, {
        onRetry: retryStage,
        onStatus: function (kind, detail) { setStageStatus(kind, detail); }
      });
    } catch (e) {
      setStageStatus("error", e && e.message ? e.message : "init-failed");
      return null;
    }
    if (viewer && viewer.isFallback) {
      var dead = viewer;
      viewer = null;
      return dead;
    }
    return viewer;
  }

  function bindAudio() {
    if (audioEl) return audioEl;
    audioEl = new Audio();
    audioEl.preload = "metadata";
    audioEl.addEventListener("timeupdate", paintAudio);
    audioEl.addEventListener("loadedmetadata", paintAudio);
    audioEl.addEventListener("play", function () {
      var b = document.getElementById("audio-btn");
      if (b) { b.classList.add("is-playing"); b.setAttribute("aria-label", state.lang === "zh" ? "暂停台词" : "Pause line"); }
    });
    audioEl.addEventListener("pause", function () {
      var b = document.getElementById("audio-btn");
      if (b) { b.classList.remove("is-playing"); b.setAttribute("aria-label", state.lang === "zh" ? "播放台词" : "Play line"); }
    });
    audioEl.addEventListener("ended", function () {
      var b = document.getElementById("audio-btn");
      if (b) b.classList.remove("is-playing");
      paintAudio();
    });

    var btn = document.getElementById("audio-btn");
    if (btn) btn.addEventListener("click", toggleAudio);

    var track = document.getElementById("audio-track");
    if (track) {
      var seeking = false;
      var seekTo = function (e) {
        if (!audioEl || !audioEl.duration) return;
        var r = track.getBoundingClientRect();
        if (!r.width) return;
        var ratio = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        audioEl.currentTime = ratio * audioEl.duration;
        paintAudio();
      };
      track.addEventListener("pointerdown", function (e) {
        seeking = true;
        track.setPointerCapture && track.setPointerCapture(e.pointerId);
        seekTo(e);
      });
      track.addEventListener("pointermove", function (e) { if (seeking) seekTo(e); });
      track.addEventListener("pointerup", function () { seeking = false; });
      track.addEventListener("pointercancel", function () { seeking = false; });
      track.addEventListener("keydown", function (e) {
        if (!audioEl || !audioEl.duration) return;
        if (e.key === "ArrowRight") { e.preventDefault(); audioEl.currentTime = Math.min(audioEl.duration, audioEl.currentTime + 5); }
        if (e.key === "ArrowLeft") { e.preventDefault(); audioEl.currentTime = Math.max(0, audioEl.currentTime - 5); }
        if (e.key === "Home") { e.preventDefault(); audioEl.currentTime = 0; }
        if (e.key === "End") { e.preventDefault(); audioEl.currentTime = Math.max(0, audioEl.duration - 0.05); }
        if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggleAudio(); }
        paintAudio();
      });
    }
    return audioEl;
  }

  function fmtTime(t) {
    if (!t || !isFinite(t)) return "0:00";
    var m = Math.floor(t / 60);
    var s = Math.floor(t % 60);
    return m + ":" + (s < 10 ? "0" + s : s);
  }

  function paintAudio() {
    var fill = document.getElementById("audio-fill");
    var knob = document.getElementById("audio-knob");
    var time = document.getElementById("audio-time");
    var track = document.getElementById("audio-track");
    if (!audioEl) return;
    var dur = audioEl.duration || 0;
    var cur = audioEl.currentTime || 0;
    var ratio = dur ? Math.min(1, cur / dur) : 0;
    if (fill) fill.style.width = (ratio * 100).toFixed(2) + "%";
    if (knob) knob.style.left = (ratio * 100).toFixed(2) + "%";
    if (time) time.textContent = fmtTime(cur) + " / " + fmtTime(dur);
    if (track) track.setAttribute("aria-valuenow", String(Math.round(ratio * 100)));
  }

  function toggleAudio() {
    var a = bindAudio();
    if (!a.getAttribute("src")) return;
    if (a.paused) {
      var p = a.play();
      if (p && p.catch) p.catch(function () {});
    } else {
      a.pause();
    }
  }

  function stopAudio() {
    if (!audioEl) return;
    audioEl.pause();
    audioEl.currentTime = 0;
    paintAudio();
  }

  function setAudio(c) {
    var a = bindAudio();
    stopAudio();
    audioId = c.id;
    a.setAttribute("src", c.audio.file);
    a.load();
    paintAudio();
    var label = document.getElementById("audio-label");
    if (label) {
      label.textContent = c.audio.type === "quote"
        ? (state.lang === "zh" ? "原话 / ON RECORD" : "ON RECORD")
        : (state.lang === "zh" ? "档案旁白 / NARRATION" : "NARRATION");
    }
    var note = document.querySelector(".audio-card__head em");
    if (note) note.textContent = state.lang === "zh" ? "AI 合成 · 非原声" : "SYNTHESIZED VOICE";
  }

  function renderMedia(c, keepStatus) {
    var photo = document.getElementById("stage-photo");
    var img = document.getElementById("stage-photo-img");
    var mode = document.getElementById("stage-mode");
    var hint = document.getElementById("stage-hint");
    var controls = document.getElementById("stage-controls");
    var canvasBox = document.getElementById("stage-canvas");
    var is3d = c.media === "3d";

    if (canvasBox) canvasBox.classList.toggle("is-photo-mode", !is3d);
    var cv = canvasBox ? canvasBox.querySelector("canvas") : null;
    if (cv) cv.style.display = is3d ? "" : "none";
    if (photo) photo.hidden = is3d;
    if (img && !is3d) {
      var src = "assets/img/cast/" + c.id + ".jpg";
      if (img.getAttribute("src") !== src) img.src = src;
      img.alt = (state.lang === "zh" ? "原剧影像：" : "On-screen still of ") + c.name[state.lang];
    }
    var cap = document.getElementById("stage-photo-cap");
    if (cap) cap.textContent = (state.lang === "zh" ? "原剧影像 · " : "ON-SCREEN · ") + c.name.en.toUpperCase();

    if (mode) mode.textContent = is3d ? st().mode3d : st().modeImg;
    if (hint) hint.textContent = is3d ? st().drag : st().still;
    if (controls) controls.style.display = is3d ? "" : "none";
    var ph = document.querySelector("#stage-placeholder span:last-child");
    if (ph) ph.textContent = st().loading;

    if (is3d) {
      if (!keepStatus) setStageStatus("loading");
      else if (canvasBox && canvasBox.classList.contains("is-ready")) setStageStatus("ready");
    } else {
      if (viewer) viewer.stop();
      setStageStatus("photo");
    }
  }

  function renderDossier(c, keepStatus) {
    setText("#d-tag", c.tag[state.lang]);
    setText("#dossier-name", c.name[state.lang]);
    setText("#d-alias", c.alias[state.lang]);
    setText("#d-relation", c.id === "saul"
      ? (state.lang === "zh" ? "档案中心 · 本人" : "THE SUBJECT")
      : c.relation[state.lang]);
    setText("#d-role", c.role[state.lang]);
    setText("#d-faction", groupName(c.group));
    setText("#d-season", c.season[state.lang]);
    setText("#d-bio", c.bio[state.lang]);
    setText("#d-note", c.note[state.lang]);
    setText("#stage-latin", c.name.en.toUpperCase());
    setText("#stage-num", pad2(DOSSIER_IDS.indexOf(c.id) + 1));
    setText("#d-count", pad2(DOSSIER_IDS.indexOf(c.id) + 1) + " / " + pad2(DOSSIER_IDS.length));

    var traits = document.getElementById("d-traits");
    if (traits) {
      traits.innerHTML = "";
      c.traits[state.lang].forEach(function (t) {
        var li = document.createElement("li");
        li.textContent = t;
        traits.appendChild(li);
      });
    }

    setText("#audio-quote", "“" + c.quote + "”");
    setText("#audio-zh", c.quoteZh);
    setAudio(c);

    var links = document.getElementById("d-links");
    if (links) {
      links.innerHTML = "";
      DATA.edges.filter(function (e) { return e.a === c.id || e.b === c.id; }).forEach(function (e) {
        var other = e.a === c.id ? e.b : e.a;
        var oc = byId[other];
        if (!oc) return;
        var b = make("button", "link-chip", oc.name[state.lang]);
        b.type = "button";
        b.setAttribute("data-goto", other);
        b.appendChild(make("em", null, e.label[state.lang]));
        b.addEventListener("click", function () { openDossier(other); });
        links.appendChild(b);
      });
    }

    renderMedia(c, keepStatus);
  }

  function pad2(n) { return n < 10 ? "0" + n : String(n); }

  function openDossier(id) {
    var c = byId[id];
    if (!c) return;
    if (!state.active) lastFocus = document.activeElement;
    state.active = id;
    var d = document.getElementById("dossier");
    if (!d) return;
    d.hidden = false;
    document.body.classList.add("has-dossier");
    renderDossier(c);

    var info = document.getElementById("dossier-info");
    if (info) info.scrollTop = 0;

    requestAnimationFrame(function () {
      if (c.media === "3d") {
        var v = ensureViewer();
        if (v) {
          v.start();
          v.setCharacter(c.id);
          v.resize();
        }
      }
      var close = d.querySelector(".dossier__close");
      if (close) close.focus({ preventScroll: true });
    });
  }

  function closeDossier() {
    if (!state.active) return;
    state.active = null;
    stopAudio();
    if (viewer) viewer.stop();
    var d = document.getElementById("dossier");
    if (d) d.hidden = true;
    document.body.classList.remove("has-dossier");
    if (lastFocus && lastFocus.focus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
    lastFocus = null;
    focusNode(null);
  }

  function stepDossier(delta) {
    if (!state.active) return;
    var i = DOSSIER_IDS.indexOf(state.active);
    var next = (i + delta + DOSSIER_IDS.length) % DOSSIER_IDS.length;
    openDossier(DOSSIER_IDS[next]);
  }

  var DOSSIER_IDS = DATA.characters.map(function (c) { return c.id; });

  function groupName(id) {
    var g = DATA.groups.filter(function (x) { return x.id === id; })[0];
    return g ? g[state.lang] : id;
  }

  /* ---------------- timeline ---------------- */

  function buildTimeline() {
    var wrap = document.getElementById("timeline-track");
    if (!wrap) return;
    wrap.innerHTML = "";
    DATA.timeline.forEach(function (item, i) {
      var card = make("article", "tl-card");
      card.style.setProperty("--i", i);
      card.appendChild(make("span", "tl-card__year", item.year));
      card.appendChild(make("span", "tl-card__label", item.label[state.lang]));
      card.appendChild(make("h3", null, item.title[state.lang]));
      card.appendChild(make("p", null, item.text[state.lang]));
      wrap.appendChild(card);
    });
  }

  /* ---------------- language ---------------- */

  function applyLanguage(lang) {
    state.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    document.title = lang === "zh"
      ? "索尔·古德曼人物关系档案 · THE McGILL NETWORK"
      : "Saul Goodman — The McGill Network";

    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      var key = n.getAttribute("data-i18n");
      if (UI[lang][key] !== undefined) n.textContent = UI[lang][key];
    });
    document.querySelectorAll("[data-lang-btn]").forEach(function (b) {
      var on = b.getAttribute("data-lang-btn") === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });

    // rebuild dynamic pieces
    if (layerEdges) { layerEdges.innerHTML = ""; }
    if (layerNodes) { layerNodes.innerHTML = ""; }
    edgeEls = [];
    buildBoard();
    buildTimeline();
    buildIndex();
    applyFilter(state.filter);
    buildFilters();
    requestAnimationFrame(centerBoard);
    if (state.active) renderDossier(byId[state.active], true);

    try { localStorage.setItem("bcs-lang", lang); } catch (e) { /* noop */ }
  }

  /* ---------------- filters ui ---------------- */

  function buildFilters() {
    var wrap = document.getElementById("filter-chips");
    if (!wrap) return;
    wrap.innerHTML = "";
    DATA.groups.forEach(function (g) {
      var b = make("button", "filter-chip", g[state.lang]);
      b.type = "button";
      b.setAttribute("data-filter", g.id);
      b.setAttribute("aria-pressed", g.id === state.filter ? "true" : "false");
      if (g.id === state.filter) b.classList.add("is-active");
      b.addEventListener("click", function () { applyFilter(g.id); });
      wrap.appendChild(b);
    });
  }

  /* ---------------- init ---------------- */

  function init() {
    var stored = null;
    try { stored = localStorage.getItem("bcs-lang"); } catch (e) { /* noop */ }
    state.lang = stored === "en" ? "en" : "zh";

    document.querySelectorAll("[data-lang-btn]").forEach(function (b) {
      b.addEventListener("click", function () { applyLanguage(b.getAttribute("data-lang-btn")); });
    });

    buildFilters();
    buildBoard();
    buildTimeline();
    buildIndex();
    applyFilter("all");
    requestAnimationFrame(centerBoard);

    document.querySelectorAll("#dossier [data-close]").forEach(function (b) {
      b.addEventListener("click", closeDossier);
    });
    var prev = document.getElementById("d-prev");
    var next = document.getElementById("d-next");
    if (prev) prev.addEventListener("click", function () { stepDossier(-1); });
    if (next) next.addEventListener("click", function () { stepDossier(1); });
    var rot = document.getElementById("btn-rotate");
    if (rot) rot.addEventListener("click", function () {
      state.auto = !state.auto;
      rot.classList.toggle("is-on", state.auto);
      rot.setAttribute("aria-pressed", state.auto ? "true" : "false");
      if (viewer) viewer.setAuto(state.auto);
    });
    var reset = document.getElementById("btn-reset");
    if (reset) reset.addEventListener("click", function () { if (viewer) viewer.reset(); });

    document.addEventListener("keydown", function (e) {
      if (!state.active) return;
      if (e.key === "Escape") { closeDossier(); return; }
      if (e.target && e.target.id === "audio-track") return;
      if (e.key === "ArrowRight") { e.preventDefault(); stepDossier(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); stepDossier(-1); }
    });

    document.querySelectorAll(".lang-switch [data-lang-btn]").forEach(function (b) {
      if (b.getAttribute("data-lang-btn") === state.lang) {
        b.classList.add("is-active");
        b.setAttribute("aria-pressed", "true");
      }
    });
    if (state.lang === "en") applyLanguage("en");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
