// 《東京狂飆》 ?region= alias (as on the Hong Kong page): this page IS Tokyo; another city's id goes to the site root
// with the query kept (the root's route script sends it on — src/travel/html.ts).
(function () {
  try {
    var r = new URLSearchParams(location.search).get("region");
    if (r && r !== "tokyo")
      location.replace(new URL("/" + location.search, location.href).href);
  } catch (e) {}
})();
