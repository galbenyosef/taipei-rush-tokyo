/* 日本語 glyphs for the TC family names (CJK_FONT = "PingFang TC","Noto Sans TC","Microsoft JhengHei"… in canvases
         and injected overlay CSS): while the page is lang="ja", @font-face rules of the same names point at the local
         Japanese system faces (an @font-face hides the installed font of its name — CSS Fonts §4). Where none of them
         exists, the family fails over to the next one in the stack and finally to the locale's (ja) system fallback.
         zh / en: the style is not in the document — nothing changes. */
(function () {
  try {
    var W = [
      [
        "100 449",
        "HiraginoSans-W3",
        "Hiragino Sans W3",
        "HiraKakuProN-W3",
        "NotoSansJP-Regular",
        "Noto Sans JP Regular",
        "NotoSansCJKjp-Regular",
        "YuGothicUI-Regular",
        "Yu Gothic UI Regular",
        "Meiryo",
      ],
      [
        "450 549",
        "HiraginoSans-W5",
        "Hiragino Sans W5",
        "HiraginoSans-W4",
        "HiraginoSans-W3",
        "HiraKakuProN-W3",
        "NotoSansJP-Medium",
        "Noto Sans JP Medium",
        "NotoSansCJKjp-Medium",
        "YuGothicUI-Semibold",
        "Yu Gothic UI Semibold",
        "Meiryo",
      ],
      [
        "550 749",
        "HiraginoSans-W6",
        "Hiragino Sans W6",
        "HiraKakuProN-W6",
        "NotoSansJP-Bold",
        "Noto Sans JP Bold",
        "NotoSansCJKjp-Bold",
        "YuGothicUI-Bold",
        "Yu Gothic UI Bold",
        "Meiryo-Bold",
        "Meiryo Bold",
      ],
      [
        "750 1000",
        "HiraginoSans-W8",
        "Hiragino Sans W8",
        "HiraginoSans-W7",
        "HiraginoSans-W6",
        "HiraKakuProN-W6",
        "NotoSansJP-Black",
        "NotoSansJP-Bold",
        "Noto Sans JP Bold",
        "NotoSansCJKjp-Black",
        "NotoSansCJKjp-Bold",
        "YuGothicUI-Bold",
        "Yu Gothic UI Bold",
        "Meiryo-Bold",
        "Meiryo Bold",
      ],
    ];
    var css = "";
    [
      "PingFang TC",
      "Noto Sans TC",
      "Microsoft JhengHei",
      "Heiti TC",
      "Noto Sans CJK TC",
    ].forEach(function (fam) {
      W.forEach(function (w) {
        css +=
          '@font-face{font-family:"' +
          fam +
          '";font-weight:' +
          w[0] +
          ";src:" +
          w
            .slice(1)
            .map(function (n) {
              return 'local("' + n + '")';
            })
            .join(",") +
          ";}";
      });
    });
    var st = document.createElement("style");
    st.id = "tk-ja-fonts";
    st.textContent = css;
    var root = document.documentElement;
    var sync = function () {
      var ja = /^ja\b/i.test(root.lang || "");
      if (ja && !st.isConnected) document.head.appendChild(st);
      else if (!ja && st.isConnected) st.remove();
    };
    sync();
    if (window.MutationObserver)
      new MutationObserver(sync).observe(root, {
        attributes: true,
        attributeFilter: ["lang"],
      });
  } catch (e) {}
})();
