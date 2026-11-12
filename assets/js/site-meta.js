/* =========================================================
   SITE META — author credit, source link, shared by both pages.
   Single place to change the signature that appears in the
   footer and in the about section.
   ========================================================= */
(function () {
  "use strict";

  var META = {
    handle: "gaosh",                            // GitHub 用户名
    name: "",                                   // 可选：中文署名，留空则显示 @handle
    url: "https://github.com/gaosh",            // 个人主页
    repo: "https://github.com/gaosh/salamanca-files",
    repoLabel: "salamanca-files"
  };

  function lang() {
    return document.documentElement.getAttribute("data-lang") === "en" ? "en" : "zh";
  }

  function displayName() {
    return META.name || ("@" + META.handle);
  }

  function render() {
    var en = lang() === "en";

    document.querySelectorAll("[data-author-name]").forEach(function (n) {
      n.textContent = displayName();
    });
    document.querySelectorAll("[data-author-link]").forEach(function (n) {
      n.setAttribute("href", META.url);
    });
    document.querySelectorAll("[data-author-label]").forEach(function (n) {
      n.textContent = en ? "AUTHOR" : "作者 / AUTHOR";
    });
    document.querySelectorAll("[data-repo-link]").forEach(function (n) {
      n.setAttribute("href", META.repo);
    });
    document.querySelectorAll("[data-repo-label]").forEach(function (n) {
      n.textContent = en ? "SOURCE" : "源码 / SOURCE";
    });
    document.querySelectorAll("[data-repo-name]").forEach(function (n) {
      n.textContent = META.repoLabel;
    });
  }

  /* 语言切换由各页脚本处理，这里只跟着重绘 */
  document.addEventListener("click", function (e) {
    var btn = e.target && e.target.closest && e.target.closest("[data-lang-btn]");
    if (btn) setTimeout(render, 60);
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
  window.addEventListener("load", render);

  window.SiteMeta = { data: META, render: render };
})();
