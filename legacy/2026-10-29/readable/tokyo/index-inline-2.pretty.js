(function () {
  try {
    var q = new URLSearchParams(location.search),
      r = q.get("region"),
      rec = null;
    try {
      rec = JSON.parse(localStorage.getItem("gta-travel-v1") || "null");
    } catch (e) {}
    function go(p) {
      var s = q.toString();
      location.replace(p + (s ? "?" + s : ""));
    }
    if (q.has("auth")) return;
    if (
      ["tokyo", "tk"].indexOf(r) >= 0 ||
      q.has("autoplay") ||
      q.has("spawn") ||
      q.has("cam") ||
      q.has("menu")
    )
      return;
    var t = rec && rec.ticket;
    if (t && t.to === "taipei" && t.from === "tokyo") go("/");
  } catch (e) {}
})();
