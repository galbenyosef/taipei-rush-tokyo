/** the page's language before the game boots: ?lang=, else the one the player picked on this page, else 日本語 */
function tkLang() {
  try {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "zh" || q === "en" || q === "ja") return q;
  } catch (e) {}
  try {
    var sv = JSON.parse(localStorage.getItem("tokyo-rush-save-v1") || "{}");
    var l = sv && sv.settings && sv.settings.lang;
    if (sv && sv.langPicked && (l === "zh" || l === "en" || l === "ja"))
      return sv.langJa ? "ja" : l;
  } catch (e) {}
  return "ja";
}
