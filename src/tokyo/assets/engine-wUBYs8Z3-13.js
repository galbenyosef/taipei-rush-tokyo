// tokyo/assets/engine-wUBYs8Z3 13 — addeventlistener
// Lines 4243-4429 of readable/tokyo/assets/engine-wUBYs8Z3.pretty.js (statement-aligned).
function Qi() {
  if (!U()) return { killedElsewhere: !1 };
  let e = W(),
    t = Zi(),
    n = Date.now(),
    r = !1;
  for (let [i, a] of Object.entries(e.live)) {
    if (i === t) continue;
    let o = n - a.t;
    o < 6e4 || (a.v && !a.p && o < 108e5 && (r = !0), delete e.live[i]);
  }
  let i = { t: n, v: document.visibilityState === `hidden` ? 0 : 1, p: 0 };
  ((e.live[t] = i), Hi());
  let a = () => {
    ((i.t = Date.now()),
      (i.v = document.visibilityState === `hidden` ? 0 : 1),
      (Wi().live[t] = i),
      Hi());
  };
  return (
    setInterval(() => {
      document.visibilityState !== `hidden` && a();
    }, 2e4),
    document.addEventListener(`visibilitychange`, a),
    window.addEventListener(`pagehide`, () => {
      (delete Wi().live[t], Hi());
    }),
    window.addEventListener(`pageshow`, (e) => {
      e.persisted && a();
    }),
    ($i = i),
    (ea = a),
    { killedElsewhere: r }
  );
}
var $i = null,
  ea = null;
function ta() {
  let e = Number(B(xi));
  return e > 0 ? Date.now() - e : 1 / 0;
}
function na() {
  let e = null;
  try {
    let t = B(Si);
    e = t ? JSON.parse(t) : null;
  } catch {
    e = null;
  }
  let t = Date.now(),
    n =
      !!e &&
      Number.isFinite(e.t) &&
      t >= e.t &&
      t - e.t < 36e5 &&
      e.vis === `visible`,
    r = n ? Math.min(9, (Number(e.n) || 0) + 1) : 0,
    i = {
      at: t,
      t,
      vis: document.visibilityState === `hidden` ? `hidden` : `visible`,
      n: r,
      ph: `load`,
    },
    a = () => {
      ((i.t = Date.now()), V(Si, JSON.stringify(i)));
    };
  (a(),
    document.addEventListener(`visibilitychange`, () => {
      ((i.vis = document.visibilityState === `hidden` ? `hidden` : `visible`),
        a());
    }),
    window.addEventListener(`pagehide`, () => Ti(Si)),
    window.addEventListener(`pageshow`, (e) => {
      e.persisted && a();
    }),
    (ra = i),
    (ia = a));
  let o = Qi();
  return (
    n
      ? Gi(r >= 2 ? { safeQ: `low`, lowmem: 2 } : { lowmem: 1 })
      : o.killedElsewhere &&
        (Gi({ lowmem: 1 }),
        (Number(B(`tgta-lowmem`)) || 0) < 1 && V(bi, `1`),
        V(xi, String(t))),
    { killed: n, count: r, duringLoad: n && e.ph === `load` }
  );
}
var ra = null,
  ia = null;
function aa(e) {
  ($i && ea && (($i.p = 1), ea()),
    ra && ia && ((ra.ph = `play`), e && (ra.n = 0), ia()));
}
var oa = {
  zh: {
    title: `無法啟動 3D 繪圖（WebGL）`,
    reload: `重新載入`,
    help: `若仍無法啟動：顯示記憶體不足當機後，瀏覽器會暫停 3D 約 2 分鐘。請關閉其他分頁或 App，等候約 2 分鐘再重新載入。電腦請確認瀏覽器已開啟「硬體加速」。`,
  },
  en: {
    title: `3D graphics (WebGL) could not start.`,
    reload: `Reload`,
    help: `If it still does not start: after a graphics crash the browser pauses 3D for about 2 minutes. Close other tabs or apps and wait about 2 minutes before reloading. On a computer, check that hardware acceleration is on.`,
  },
};
function sa(e, t, n) {
  if ((console.error(`[boot] WebGL context unavailable`, e), n))
    try {
      (Fi(1), V(xi, String(Date.now())));
    } catch {}
  let r = oa[t === `en` ? `en` : `zh`],
    i = Error(`${r.title} ${r.help}`);
  return ((i.name = `WebGLUnavailable`), i);
}
function ca(e) {
  return e?.name === `WebGLUnavailable`;
}
function la(e) {
  let t = document.getElementById(`loader`),
    n = document.getElementById(`ld-err`);
  if (!t || !n || !t.isConnected) return !1;
  let r = oa[e ? `en` : `zh`];
  (t.classList.add(`failed`),
    t.setAttribute(`role`, `group`),
    t.setAttribute(`aria-label`, e ? `Loading interrupted` : `載入中斷`),
    (n.textContent = ``),
    (n.style.pointerEvents = `auto`));
  let i = document.createElement(`div`);
  i.textContent = r.title;
  let a = document.createElement(`button`);
  ((a.type = `button`),
    (a.textContent = r.reload),
    (a.style.margin = `14px auto 16px`),
    a.addEventListener(`click`, () => {
      ((a.disabled = !0), location.reload());
    }));
  let o = document.createElement(`div`);
  return (
    (o.textContent = r.help),
    (o.style.cssText = `font-size:13px;line-height:1.6;opacity:.8;font-weight:500`),
    n.append(i, a, o),
    !0
  );
}
var ua = 0,
  da = null;
function fa() {
  return (
    da ||
      (ua++,
      (da = t(() => import(`./analytics-B76dRwr5.js`), [])),
      da.then(
        () => ua--,
        () => {
          (ua--, (da = null));
        },
      )),
    da
  );
}
function pa() {
  return ua > 0;
}
function ma(e, t) {}
var ha =
    typeof location < `u` && new URLSearchParams(location.search).has(`prof`),
  ga = {
    on: ha,
    stage: ``,
    log: [],
    seg(e, t) {
      if (!ha) return;
      let n = performance.now();
      if ((this.log.push([n, e, n - t]), this.log.length > 4e3)) {
        this.log.splice(0, 2e3);
        try {
          performance.clearMeasures();
        } catch {}
      }
      try {
        performance.measure(e, { start: t, end: n });
      } catch {}
    },
  };
ha && typeof window < `u` && (window.__prof = ga);
