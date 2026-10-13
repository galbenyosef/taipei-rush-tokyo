(function () {
  try {
    var L = document.getElementById("loader");
    if (!L) return;
    var rec = JSON.parse(localStorage.getItem("gta-travel-v1") || "null"),
      t = rec && rec.ticket;
    if (!t || t.to !== "tokyo" || !t.from) return;
    var C = {
        taipei: { zh: "臺北", en: "Taipei", code: "TSA", rail: "TPE", utc: 8 },
        "hong-kong": {
          zh: "香港",
          en: "Hong Kong",
          code: "HKG",
          rail: "HKG",
          utc: 8,
        },
        kaohsiung: {
          zh: "高雄",
          en: "Kaohsiung",
          code: "KHH",
          rail: "ZUY",
          utc: 8,
        },
        tokyo: { zh: "東京", en: "Tokyo", code: "HND", rail: "HND", utc: 9 },
      },
      a = C[t.from],
      b = C[t.to];
    if (!a || !b) return;
    var en = t.lang === "en",
      hsr = t.mode === "hsr";
    function hm(m) {
      m = ((Math.round(m) % 1440) + 1440) % 1440;
      return (
        (m < 600 ? "0" : "") +
        Math.floor(m / 60) +
        ":" +
        (m % 60 < 10 ? "0" : "") +
        (m % 60)
      );
    }
    var eta = hm(
      (t.depMin || 0) +
        (t.hours || 2) * 60 +
        ((b.utc || 8) - (a.utc || 8)) * 60,
    );
    L.classList.add("flight");
    var d = document.createElement("div");
    d.className = "fl";
    d.setAttribute("aria-hidden", "true");
    if (hsr) L.classList.add("rail");
    d.innerHTML =
      '<div class="fl-top"><b>' +
      String(t.flight || "").replace(/[<>&]/g, "") +
      "</b>" +
      (hsr
        ? en
          ? "High Speed Rail"
          : "高鐵 HIGH SPEED RAIL"
        : en
          ? "RUSH AIR"
          : "狂飆航空 RUSH AIR") +
      '<span class="fl-st">' +
      (hsr
        ? en
          ? "On the way"
          : "行駛中 · On the way"
        : en
          ? "In flight"
          : "飛行中 · In flight") +
      "</span></div>" +
      '<div class="fl-route"><div class="fl-ap"><b>' +
      (hsr ? a.rail : a.code) +
      "</b><small>" +
      (en ? a.en : a.zh) +
      '</small></div><div class="fl-line"><i></i><em>' +
      (hsr ? "▶" : "✈") +
      '</em></div><div class="fl-ap r"><b>' +
      (hsr ? b.rail : b.code) +
      "</b><small>" +
      (en ? b.en : b.zh) +
      "</small></div></div>" +
      '<div class="fl-eta"><span>' +
      (en ? "Arriving" : "預計抵達") +
      " <b>" +
      eta +
      "</b> " +
      (en ? "local time" : "當地時間") +
      "</span><span>" +
      (en ? "Welcome to " : "歡迎來到") +
      (en ? b.en : b.zh) +
      "</span></div>";
    L.appendChild(d);
    var pct = document.getElementById("ld-pct"),
      st = d.querySelector(".fl-st"),
      last = -1;
    function upd() {
      var n = pct ? parseInt(pct.textContent, 10) || 0 : 0;
      n = Math.max(4, Math.min(100, n));
      if (n === last) return;
      last = n;
      d.style.setProperty("--fp", String(n));
      if (n >= 96 && st)
        st.textContent = hsr
          ? en
            ? "Arriving"
            : "即將到站 · Arriving"
          : en
            ? "Landing"
            : "即將降落 · Landing";
    }
    upd();
    if (window.MutationObserver && pct) {
      var o = new MutationObserver(upd);
      o.observe(pct, { childList: true, characterData: true, subtree: true });
      L.addEventListener(
        "loader:dispose",
        function () {
          o.disconnect();
        },
        { once: true },
      );
    }
  } catch (e) {}
})();
