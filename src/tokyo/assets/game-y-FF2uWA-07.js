// tokyo/assets/game-y-FF2uWA 07 — textcontent
// Lines 2909-3087 of readable/tokyo/assets/game-y-FF2uWA.pretty.js (statement-aligned).
function Ft(e = Date.now()) {
  return Nt
    ? X
    : ((Nt = !0), (X = Me((e) => (e === `hsr` ? St() : bt()), e)), X);
}
var It = {
  tokyo: () =>
    e(
      () => import(`./tokyo-BZXVhKTn.js`).then((e) => e.TOKYO),
      __vite__mapDeps([
        8, 2, 3, 1, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 0, 15, 16, 17, 18, 19,
      ]),
    ),
};
async function Lt(e) {
  let t = It[e];
  if (!t) throw Error(`[regions] ${e} is not part of this page`);
  let n = await t();
  return (n.ready && (await n.ready().catch(() => {})), n);
}
var Z = window;
((Z.__tgtaBoot = 1), (Z.__tgtaTick = Date.now()));
try {
  let e = new URL(location.href);
  e.searchParams.has(`r`) &&
    (e.searchParams.delete(`r`),
    history.replaceState(history.state, ``, e.pathname + e.search + e.hash));
} catch {}
window.addEventListener(`vite:preloadError`, (e) => {
  let t = e.payload,
    n = String(t?.message ?? t ?? ``);
  /\/analytics-[\w-]+\.js/.test(n) ||
    (ke() && !/\/assets\//.test(n)) ||
    De(`lazy chunk (${n.slice(0, 160)})`);
});
var Q = !1;
async function Rt() {
  Ft();
  let e = O(),
    n = document.getElementById(`loader-bar`),
    r = document.getElementById(`loader-label`),
    i = document.getElementById(`loader`);
  document.documentElement.lang =
    e === `en` ? `en` : e === `ja` ? `ja` : `zh-Hant-TW`;
  let a = e === `ja` ? t() : null;
  re().catch(() => {});
  let o = -1,
    s = ``,
    c = await Lt(`tokyo`);
  (await a, await Ae());
  let l = new lt(
    document.getElementById(`app`),
    (e, t, i, a) => {
      Z.__tgtaTick = Date.now();
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
    _e(l.ctx),
    l.start(),
    ie(`tgta-boot-retry`),
    pe(`title`, l.ctx));
  let u = l.ctx.ui.showMainMenu();
  u.catch(() => {});
  try {
    await l.ctx.ui.titleReady?.(2500);
  } catch {}
  (i &&
    ((i.style.opacity = `0`),
    (Q = !0),
    setTimeout(() => {
      (i.dispatchEvent(new Event(`loader:dispose`)), i.remove());
    }, 700)),
    await u,
    l.beginPlay(),
    pe(`playing`, l.ctx),
    l.ctx.events.emit(`player:spawned`, { pos: l.ctx.player.position.clone() }),
    l.guardArrival());
}
function $() {
  Rt().catch((e) => {
    (console.error(e), zt(e));
  });
}
function zt(e) {
  let t = O(),
    n = t === `en`,
    i = t === `ja`;
  if (!Q && h(e) && C(n)) return;
  let a = String(e?.message ?? e),
    o = document.getElementById(`loader-label`);
  if (!Q && o) {
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
function Bt() {
  let e;
  try {
    e = Ce();
  } catch {
    return !1;
  }
  if (
    !e.killed ||
    (E(e.count >= 2 ? 2 : 1),
    _(k, String(Date.now())),
    e.count >= 2 && _(x, `low`),
    console.warn(
      `[boot] the previous page was killed ${e.duringLoad ? `while loading` : `while playing`} (${e.count}× in a row) — memory-saving mode`,
    ),
    e.duringLoad,
    e.count,
    !e.duringLoad && e.count < 2)
  )
    return !1;
  let t = document.getElementById(`loader`),
    n = document.getElementById(`ld-err`);
  if (!t || !n) return !1;
  let r = O(),
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
        (t.classList.remove(`failed`), (n.textContent = ``), $());
      },
      { once: !0 },
    ),
    s.focus?.(),
    !0
  );
}
ye().then(() => {
  Bt() || $();
});
