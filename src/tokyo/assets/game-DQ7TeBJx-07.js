// tokyo/assets/game-DQ7TeBJx 07 — searchparams
// Lines 2921-3195 of readable/tokyo/assets/game-DQ7TeBJx.pretty.js (statement-aligned).
function Bt(e = Date.now()) {
  return Rt
    ? X
    : ((Rt = !0), (X = Pe((e) => (e === `hsr` ? Dt() : Tt()), e)), X);
}
var Vt = {
  tokyo: () =>
    e(
      () => import(`./tokyo-CqLdAwml.js`).then((e) => e.TOKYO),
      __vite__mapDeps([
        9, 2, 3, 4, 1, 5, 6, 7, 8, 10, 11, 0, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24,
      ]),
    ),
};
async function Ht(e) {
  let t = Vt[e];
  if (!t) throw Error(`[regions] ${e} is not part of this page`);
  let n = await t();
  return (n.ready && (await n.ready().catch(() => {})), n);
}
var Z = ``,
  Ut = `tgta-net-preview-share`,
  Wt = ``;
function Gt(e) {
  let t =
    e.searchParams.get(`preview-share`) || e.searchParams.get(`_vercel_share`);
  if (t && /^[A-Za-z0-9_-]{16,256}$/.test(t)) {
    Wt = t;
    try {
      sessionStorage.setItem(Ut, t);
    } catch {}
  }
  e.searchParams.delete(`preview-share`);
}
var Q = !1,
  Kt = /^[2-9A-HJ-NP-Z]{6}$/;
function qt(e) {
  let t = String(e ?? ``)
    .trim()
    .toUpperCase();
  return Kt.test(t) ? t : ``;
}
function Jt() {
  try {
    let e = new URL(location.href),
      t = e.searchParams.has(`join`),
      n = e.searchParams.has(`preview-share`),
      r = e.searchParams.has(`lobby`);
    if ((Gt(e), r && (Q = !0), e.searchParams.delete(`lobby`), !t && !n && !r))
      return;
    (t && (Z = qt(e.searchParams.get(`join`))),
      e.searchParams.delete(`join`),
      t && e.searchParams.delete(`region`),
      history.replaceState(history.state, ``, e.pathname + e.search + e.hash));
  } catch {}
}
function Yt() {
  let e = Q || !!Z;
  return ((Q = !1), e);
}
function Xt() {
  return Z;
}
function Zt() {
  let e = Z;
  return ((Z = ``), e);
}
function Qt(e, t = ``, n) {
  try {
    let r = new URL(location.href),
      i = new URL(n ?? `/tokyo/`, r.origin),
      a =
        r.searchParams.get(`preview-share`) ||
        r.searchParams.get(`_vercel_share`) ||
        Wt;
    try {
      a ||= sessionStorage.getItem(Ut) || ``;
    } catch {}
    return (
      a &&
        /^[A-Za-z0-9_-]{16,256}$/.test(a) &&
        (i.searchParams.set(`_vercel_share`, a),
        i.searchParams.set(`preview-share`, a)),
      t && i.searchParams.set(`region`, t),
      i.searchParams.set(`join`, e),
      i.href
    );
  } catch {
    return `${n ?? `/`}?${t ? `region=${t}&` : ``}join=${e}`;
  }
}
var $t = `tgta-net-room`,
  en = 3e5;
function tn(e) {
  try {
    e &&
      sessionStorage.setItem($t, JSON.stringify({ code: e, at: Date.now() }));
  } catch {}
}
function nn() {
  try {
    sessionStorage.removeItem($t);
  } catch {}
}
function rn() {
  try {
    let e = JSON.parse(sessionStorage.getItem($t) ?? `null`);
    return !e || typeof e.at != `number` || Date.now() - e.at > en
      ? ``
      : qt(e.code);
  } catch {
    return ``;
  }
}
var an = window;
((an.__tgtaBoot = 1), (an.__tgtaTick = Date.now()));
try {
  let e = new URL(location.href);
  e.searchParams.has(`r`) &&
    (e.searchParams.delete(`r`),
    history.replaceState(history.state, ``, e.pathname + e.search + e.hash));
} catch {}
(Jt(),
  window.addEventListener(`vite:preloadError`, (e) => {
    let t = e.payload,
      n = String(t?.message ?? t ?? ``);
    /\/analytics-[\w-]+\.js/.test(n) ||
      (be() && !/\/assets\//.test(n)) ||
      ge(`lazy chunk (${n.slice(0, 160)})`);
  }));
var $ = !1;
async function on() {
  (Bt(), Oe());
  let e = D(),
    n = document.getElementById(`loader-bar`),
    r = document.getElementById(`loader-label`),
    i = document.getElementById(`loader`);
  document.documentElement.lang =
    e === `en` ? `en` : e === `ja` ? `ja` : `zh-Hant-TW`;
  let a = e === `ja` ? t() : null;
  w().catch(() => {});
  let o = -1,
    s = ``,
    c = await Ht(`tokyo`);
  (await a, await g());
  let l = new mt(
    document.getElementById(`app`),
    (e, t, i, a) => {
      an.__tgtaTick = Date.now();
      let c = e === `shaders` ? `ready` : e;
      r &&
        c !== s &&
        ((s = c), (o = -1), (r.dataset.key = c), (r.textContent = c));
      let l = Math.round(Math.min(1, Math.max(0, a ?? 0)) * 1e3) / 10;
      (n && l !== o && (n.style.width = `${l}%`), (o = l));
    },
    c,
  );
  (await l.init(),
    Te(l.ctx),
    l.start(),
    ie(`tgta-boot-retry`),
    me(`title`, l.ctx));
  let u = l.ctx.ui.showMainMenu();
  u.catch(() => {});
  try {
    await l.ctx.ui.titleReady?.(2500);
  } catch {}
  (i &&
    ((i.style.opacity = `0`),
    ($ = !0),
    setTimeout(() => {
      (i.dispatchEvent(new Event(`loader:dispose`)), i.remove());
    }, 700)),
    await u,
    l.beginPlay(),
    me(`playing`, l.ctx),
    l.ctx.events.emit(`player:spawned`, { pos: l.ctx.player.position.clone() }),
    l.guardArrival());
}
function sn() {
  on().catch((e) => {
    (console.error(e), cn(e));
  });
}
function cn(e) {
  let t = D(),
    n = t === `en`,
    i = t === `ja`;
  if (!$ && T(e) && _(n)) return;
  let a = String(e?.message ?? e),
    o = document.getElementById(`loader-label`);
  if (!$ && o) {
    o.textContent = (n ? `Failed to load: ` : `載入失敗：`) + a;
    return;
  }
  try {
    let e = document.createElement(`div`);
    (e.setAttribute(`role`, `alert`),
      (e.style.cssText = `position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:100001;max-width:min(80vw,560px);padding:18px 24px;background:rgba(8,8,12,.94);border-left:3px solid #e0262f;color:#f4f1ea;font:600 15px/1.6 "PingFang TC","Noto Sans TC",system-ui,sans-serif;pointer-events:auto;touch-action:auto`));
    let t = document.createElement(`div`);
    t.textContent = n
      ? `Tokyo Rush ran into a problem. (${a})`
      : i
        ? `東京ラッシュで問題が発生しました。（${a}）`
        : r.on
          ? r.t(
              `東京狂飆 發生問題。（${a}）`,
              `東京ラッシュで問題が発生しました。（${a}）`,
            )
          : `東京狂飆 發生問題。（${a}）`;
    let o = document.createElement(`button`);
    ((o.type = `button`),
      (o.textContent = n ? `Reload` : i ? `再読み込み` : `重新載入`),
      (o.style.cssText = `display:block;min-width:9em;min-height:44px;margin:16px auto 0;padding:8px 18px;border:1px solid rgba(255,255,255,.45);border-radius:4px;background:#d81f2a;color:#fff;font:700 15px/1.2 "PingFang TC","Noto Sans TC",system-ui,sans-serif;cursor:pointer`),
      o.addEventListener(`click`, () => location.reload()),
      e.append(t, o),
      document.body.appendChild(e));
  } catch {}
}
function ln() {
  let e;
  try {
    e = we();
  } catch {
    return !1;
  }
  if (!e.killed) return !1;
  if (
    (k(e.count >= 2 ? 2 : 1),
    j(E, String(Date.now())),
    e.count >= 2 && j(Ne, `low`),
    console.warn(
      `[boot] the previous page was killed ${e.duringLoad ? `while loading` : `while playing`} (${e.count}× in a row) — memory-saving mode`,
    ),
    e.duringLoad,
    e.count,
    !e.duringLoad && e.count < 2)
  )
    return (_e() && S(), !1);
  let t = document.getElementById(`loader`),
    n = document.getElementById(`ld-err`);
  if (!t || !n) return !1;
  let r = D(),
    i = r === `en`,
    a = r === `ja`;
  (t.classList.add(`failed`), (n.textContent = ``));
  let o = document.createElement(`div`);
  o.textContent = i
    ? `The last load was interrupted: the browser ran out of memory. Memory-saving mode is on (lighter graphics).`
    : a
      ? `前回の読み込みはブラウザのメモリ不足で中断されました。省メモリモードに切り替えました（グラフィックを軽量化）。`
      : `上次載入時瀏覽器記憶體不足而中斷。已切換為省記憶體模式（畫面較簡化）。`;
  let s = document.createElement(`button`);
  return (
    (s.type = `button`),
    (s.textContent = i ? `Continue` : a ? `続ける` : `繼續`),
    (s.style.cssText = `display:block;min-width:9em;min-height:44px;margin:16px auto 0;padding:8px 18px;border:1px solid rgba(255,255,255,.45);border-radius:4px;background:#d81f2a;color:#fff;font:700 15px/1.2 "PingFang TC","Noto Sans TC",system-ui,sans-serif;cursor:pointer;pointer-events:auto`),
    (n.style.pointerEvents = `auto`),
    n.append(o, s),
    s.addEventListener(
      `click`,
      () => {
        (t.classList.remove(`failed`), (n.textContent = ``), sn());
      },
      { once: !0 },
    ),
    s.focus?.(),
    !0
  );
}
Promise.all([Se(), ve()]).then(() => {
  ln() || sn();
});
