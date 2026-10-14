/* Boot watchdog (round 6 stability, RC1). The game is one module graph (the entry + 7 modulepreloaded chunks): if
         any request of it fails (a network blip, or the HTML of a previous deploy asking for chunks that now 404) or
         stalls, src/main.ts never runs and the loader used to sit at 「準備中 0%」 forever, with no message. Here:
           - a module script / modulepreload error before main.ts ran → fail at once;
           - main.ts has not started 20 s after the page (30 s on phones / tablets) while no request finished for 15 s
             → fail; after it started: no loading report (main.ts bumps window.__tgtaTick) and no finished request for
             60 s (75 s on phones / tablets — the player stage alone may wait 30 s for the heroes + 10 s for the mocap
             pack before its fallbacks) → fail. Paused while the page is hidden or waits for a tap (.failed);
           - fail → ONE automatic cache-busting reload per 5 min (sessionStorage 'tgta-boot-retry'; main.ts clears it once
             a load succeeds and strips ?r= from the address bar), else the error box with a Reload button (never a loop).
             Before either reload the entry chunks are re-requested (fetch, cache: 'no-cache' — a 304 for the good ones):
             WebKit keeps a FAILED modulepreload in its in-process memory cache and hands it to the next page (a one-off
             503 on one chunk failed the retry too), and the re-request replaces that entry.
         window.__tgtaLoaderError(text) shows the error box (the loader script's 「載入失敗」 path uses it too). */
(function () {
  var L = document.getElementById("loader");
  if (!L) return;
  var EN = false,
    JA = false;
  // (the game's own rule — core/state.ts: ?lang=, else the save, else a Japanese browser starts in 日本語)
  var lg = tkLang();
  EN = lg === "en";
  JA = lg === "ja";
  var compact =
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
    (navigator.maxTouchPoints > 1 && /Macintosh/.test(navigator.userAgent));
  var RETRY = "tgta-boot-retry";
  var t0 = Date.now(),
    lastTick = t0,
    nRes = -1,
    done = false,
    iv = 0;
  function retryUrl() {
    var q = "";
    try {
      var p = new URLSearchParams(location.search);
      p.set("r", String(Date.now()));
      q = "?" + p.toString();
    } catch (e) {
      q = "?r=" + Date.now();
    }
    return location.pathname + q + location.hash;
  }
  function retry() {
    var go = function () {
      location.replace(retryUrl());
    };
    try {
      var urls = [].map.call(
        document.querySelectorAll(
          "link[rel=modulepreload], script[type=module][src]",
        ),
        function (el) {
          return el.href || el.src;
        },
      );
      var ps = urls
        .filter(function (u) {
          return u && u.indexOf(location.origin + "/") === 0;
        })
        .map(function (u) {
          return fetch(u, {
            cache: "no-cache",
            credentials: "same-origin",
          }).catch(function () {});
        });
      Promise.race([
        Promise.all(ps),
        new Promise(function (r) {
          setTimeout(r, 6000);
        }),
      ]).then(go, go);
    } catch (e) {
      go();
    }
  }
  function showError(text) {
    L.classList.add("failed");
    L.setAttribute("role", "group");
    L.setAttribute(
      "aria-label",
      EN ? "Loading interrupted" : JA ? "読み込み中断" : "載入中斷",
    );
    var box = document.getElementById("ld-err");
    if (!box) return;
    box.textContent = "";
    var msg = document.createElement("div");
    msg.textContent = text;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = EN ? "Reload" : JA ? "再読み込み" : "重新載入";
    btn.addEventListener("click", function () {
      try {
        sessionStorage.removeItem(RETRY);
      } catch (e) {}
      btn.disabled = true;
      retry();
    });
    box.appendChild(msg);
    box.appendChild(btn);
  }
  window.__tgtaLoaderError = showError;
  function bootFail(kind) {
    if (done || !L.isConnected) return;
    done = true;
    clearInterval(iv);
    var last = 0,
      canRetry = false;
    try {
      last = Number(sessionStorage.getItem(RETRY)) || 0;
      sessionStorage.setItem(RETRY, String(Date.now()));
      canRetry = true;
    } catch (e) {}
    console.warn(
      "[boot] loading " +
        (kind === "module"
          ? "failed (a script did not load)"
          : kind === "start"
            ? "never started"
            : "stalled") +
        (canRetry && !(last && Date.now() - last < 300000)
          ? " — reloading once"
          : ""),
    );
    if (canRetry && !(last && Date.now() - last < 300000)) {
      // (a moment for the other elements' errors of this failure, then the refresh + reload)
      setTimeout(retry, 300);
      return;
    }
    showError(
      EN
        ? "Tokyo Rush could not finish loading (the network or a server file failed). Please reload."
        : JA
          ? "東京ラッシュの読み込みを完了できませんでした（ネットワークまたはサーバーのファイルに問題があります）。再読み込みしてください。"
          : "東京狂飆 無法完成載入（網路或伺服器檔案異常），請重新載入。",
    );
  }
  // a failed module script / modulepreload of the entry graph (after main.ts ran, lazy chunks are core's business)
  window.addEventListener(
    "error",
    function (e) {
      var t = e && e.target;
      if (window.__tgtaBoot || !t || t === window || !t.tagName) return;
      if (
        (t.tagName === "SCRIPT" && t.type === "module") ||
        (t.tagName === "LINK" && /modulepreload/.test(t.rel || ""))
      )
        bootFail("module");
    },
    true,
  );
  // finished requests count as progress (a slow network is not a stalled one)
  try {
    new PerformanceObserver(function () {
      lastTick = Date.now();
    }).observe({ type: "resource", buffered: false });
  } catch (e) {}
  iv = setInterval(function () {
    var now = Date.now();
    if (!L.isConnected || L.style.opacity === "0") return clearInterval(iv);
    if (document.hidden || L.classList.contains("failed")) {
      lastTick = now;
      return;
    }
    try {
      var n = performance.getEntriesByType("resource").length;
      if (n !== nRes) {
        nRes = n;
        lastTick = now;
      }
    } catch (e) {}
    var tick = window.__tgtaTick || 0;
    if (tick > lastTick) lastTick = tick;
    if (!window.__tgtaBoot) {
      if (now - t0 > (compact ? 30000 : 20000) && now - lastTick > 15000)
        bootFail("start");
    } else if (now - lastTick > (compact ? 75000 : 60000)) bootFail("stall");
  }, 5000);
})();
