(function () {
  try {
    var L = document.getElementById("loader"),
      lg = L && L.querySelector(".ld-logo"),
      tp = document.getElementById("ld-logo-en");
    var zhLogo = lg && lg.innerHTML;
    function syncLogo() {
      var en = document.documentElement.lang === "en";
      if (lg && tp) lg.innerHTML = en ? tp.innerHTML : zhLogo;
      if (L)
        L.setAttribute(
          "aria-label",
          en ? "Tokyo Rush loading" : "東京狂飆 載入中",
        );
      document.title = en
        ? "Tokyo Rush · Full throttle through Tokyo"
        : "東京狂飆 · 去東京狂飆";
    }
    syncLogo();
    if (window.MutationObserver) {
      var languageObserver = new MutationObserver(syncLogo);
      languageObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["lang"],
      });
      L.addEventListener(
        "loader:dispose",
        function () {
          languageObserver.disconnect();
        },
        { once: true },
      );
    }
  } catch (e) {}
})();
