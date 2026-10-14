(function () {
  try {
    var box = document.getElementById("ld-err");
    if (!box || !window.MutationObserver) return;
    var rec = null;
    try {
      rec = JSON.parse(localStorage.getItem("gta-travel-v1") || "null");
    } catch (e) {}
    var O = {
        taipei: {
          page: "/?region=taipei",
          zh: "臺北",
          en: "Taipei",
          gzh: "臺北狂飆",
          gen: "Taipei Rush",
        },
      },
      t = rec && rec.ticket,
      fl = !!(t && t.to === "tokyo" && O[t.from]),
      o = fl ? O[t.from] : O["taipei"],
      hsr = !!(t && t.mode === "hsr");
    if (!o) return;
    function add() {
      if (!box.firstChild || box.querySelector(".ld-city")) return;
      var r = box.querySelector("button"),
        en = r ? r.textContent === "Reload" : !!(t && t.lang === "en");
      var b = document.createElement("button");
      b.type = "button";
      b.className = "ld-city";
      b.style.background = "transparent";
      b.textContent = fl
        ? en
          ? (hsr
              ? "Cancel the trip · back to "
              : "Cancel the flight · back to ") + o.en
          : (hsr ? "取消車票 · 返回" : "取消航班 · 返回") + o.zh
        : en
          ? "Go to " + o.gen
          : "前往《" + o.gzh + "》";
      b.addEventListener("click", function () {
        b.disabled = true;
        location.replace(o.page);
      });
      box.appendChild(b);
    }
    new MutationObserver(add).observe(box, { childList: true });
    add();
  } catch (e) {}
})();
