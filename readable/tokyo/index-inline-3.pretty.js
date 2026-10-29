/** Saved language wins; browser language is provisional until main.ts resolves the country. */
function tkLang() {
  try {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "zh" || q === "en" || q === "ja") return q;
  } catch (e) {}
  try {
    var sv = JSON.parse(localStorage.getItem("tokyo-rush-save-v1") || "{}");
    var l = sv && sv.settings && sv.settings.lang;
    if (sv && sv.langJa === true) return "ja";
    if (l === "zh" || l === "en" || l === "ja") return l;
  } catch (e) {}
  try {
    var record = JSON.parse(localStorage.getItem("gta-travel-v1") || "{}");
    var shared =
      record &&
      record.shared &&
      record.shared.settings &&
      record.shared.settings.lang;
    if (shared === "zh" || shared === "en") return shared;
  } catch (e) {}
  return /^zh(?:[-_](?:tw|hant)(?:[-_]|$)|$)/i.test(
    (navigator.languages && navigator.languages[0]) || navigator.language || "",
  )
    ? "zh"
    : "en";
}
var initialLang = tkLang();
document.documentElement.lang =
  initialLang === "zh" ? "zh-Hant-TW" : initialLang;
