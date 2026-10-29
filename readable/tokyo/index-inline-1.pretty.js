(function () {
  try {
    var L = {
        "taipei-gta.vercel.app": "https://www.taipei-rush.app",
        "taipei-gta-taipei-dream-team.vercel.app":
          "https://www.taipei-rush.app",
        "taipei-rush-legacy-test.vercel.app":
          "https://taipei-rush-preview.vercel.app",
      },
      K = new RegExp(
        "^(taipei-rush-|hong-kong-gta-|kaohsiung-rush-|tokyo-rush-|london-rush-|taichung-rush-|mumbai-rush-|tainan-rush-|gta-travel-|tgta-device-)",
      ),
      X = new RegExp("(cloud|auth|pkce|session|probe|handoff|identities)"),
      S = [
        "taipei-rush-save-v1",
        "hong-kong-gta-save-v1",
        "kaohsiung-rush-save-v1",
        "tokyo-rush-save-v1",
        "london-rush-save-v1",
        "taichung-rush-save-v1",
        "mumbai-rush-save-v1",
        "tainan-rush-save-v1",
      ];
    var ls = window.localStorage,
      host = location.hostname,
      to = L[host];
    function pack() {
      var items = {},
        n = 0;
      for (var i = 0; i < ls.length; i++) {
        var k = ls.key(i);
        if (k && K.test(k) && !X.test(k)) {
          items[k] = ls.getItem(k);
          n++;
        }
      }
      if (!n) return "";
      var b = btoa(
        unescape(
          encodeURIComponent(
            JSON.stringify({ v: 1, from: host, items: items }),
          ),
        ),
      )
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
      return b.length < 1500000 ? "#tr-handoff=" + b : "";
    }
    function installed() {
      try {
        var nv = window.navigator,
          mm = window.matchMedia;
        if (nv && nv.standalone === true) return true;
        if (!mm) return false;
        return (
          mm("(display-mode: standalone)").matches ||
          mm("(display-mode: fullscreen)").matches ||
          mm("(display-mode: minimal-ui)").matches
        );
      } catch (e) {
        return false;
      }
    }
    function receive() {
      var m = /^#tr-handoff=([A-Za-z0-9_-]+)$/.exec(location.hash);
      if (!m) return;
      history.replaceState(
        history.state,
        "",
        location.pathname + location.search,
      );
      var b64 = m[1].replace(/-/g, "+").replace(/_/g, "/");
      while (b64.length % 4) b64 += "=";
      var d = JSON.parse(decodeURIComponent(escape(atob(b64))));
      if (!d || d.v !== 1 || !d.items) return;
      function parse(s) {
        try {
          return JSON.parse(s);
        } catch (e) {
          return null;
        }
      }
      function len(a) {
        return (a && a.length) || 0;
      }
      function score(s) {
        if (!s || typeof s !== "object") return [-1, 0, 0, 0];
        var st = s.stats || {};
        return [
          len(s.completedMissions),
          len(s.collectibles),
          +st.playTime || 0,
          Date.parse(s.lastPlayedAt || "") || 0,
        ];
      }
      function better(a, b) {
        var x = score(a),
          y = score(b);
        for (var i = 0; i < 4; i++) {
          if (y[i] !== x[i]) return y[i] > x[i];
        }
        return false;
      }
      var moved = 0;
      for (var k in d.items) {
        if (
          !Object.prototype.hasOwnProperty.call(d.items, k) ||
          !K.test(k) ||
          X.test(k)
        )
          continue;
        var inc = d.items[k];
        if (typeof inc !== "string") continue;
        if (S.indexOf(k) >= 0) {
          var id = parse(ls.getItem(k + ":identities-v1"));
          if (id && id.slots && id.active && id.active !== "guest") {
            var g = id.slots.guest || { data: null, backups: [] };
            if (g.data === null || g.data === undefined) {
              g.data = parse(inc);
            } else if (JSON.stringify(g.data) !== JSON.stringify(parse(inc))) {
              if (better(g.data, parse(inc))) {
                ls.setItem(k + ":handoff-v1", JSON.stringify(g.data));
                g.data = parse(inc);
              } else ls.setItem(k + ":handoff-v1", inc);
            }
            if (!g.backups) g.backups = [];
            id.slots.guest = g;
            var act = id.slots[id.active];
            if (act && better(act.data, parse(inc))) {
              var bk = {
                id: "handoff-" + Date.now() + "-" + k.length,
                date: new Date().toISOString(),
                data: parse(inc),
                reason: "legacy",
              };
              act.backups = [bk].concat(act.backups || []).slice(0, 3);
              act.undo = bk.id;
            }
            ls.setItem(k + ":identities-v1", JSON.stringify(id));
            moved++;
            continue;
          }
          var mine = ls.getItem(k);
          if (mine === null) {
            ls.setItem(k, inc);
            moved++;
          } else if (mine !== inc) {
            if (better(parse(mine), parse(inc))) {
              ls.setItem(k + ":handoff-v1", mine);
              ls.setItem(k, inc);
            } else ls.setItem(k + ":handoff-v1", inc);
            moved++;
          }
          continue;
        }
        if (ls.getItem(k) === null) {
          ls.setItem(k, inc);
          moved++;
        }
      }
      ls.setItem(
        "taipei-rush-handoff-v1",
        JSON.stringify({
          from: String(d.from || ""),
          at: Date.now(),
          moved: moved,
        }),
      );
    }
    if (to) {
      receive();
      if (installed()) {
        window.__trLegacyApp = 1;
        return;
      }
      var h = pack();
      window.__trHandoff = 1;
      location.replace(to + location.pathname + location.search + h);
      return;
    }
    var p = /^\?(.*&)?tr-pull=([a-z0-9.-]+)(&.*)?$/.exec(location.search);
    if (p && L[p[2]] === "https://" + host) {
      var q = ((p[1] || "") + (p[3] || "").slice(1)).replace(/&$/, "");
      var back = pack();
      window.__trHandoff = 1;
      location.replace(
        "https://" + p[2] + location.pathname + (q ? "?" + q : "") + back,
      );
      return;
    }
    receive();
  } catch (e) {}
})();
