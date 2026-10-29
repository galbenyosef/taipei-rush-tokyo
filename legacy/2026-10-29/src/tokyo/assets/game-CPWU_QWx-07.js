// tokyo/assets/game-CPWU_QWx 07 — textcontent
// Lines 2917-3096 of readable/tokyo/assets/game-CPWU_QWx.pretty.js (statement-aligned).
function Lt(e = Date.now()) {
  return Ft
    ? Q
    : ((Ft = !0), (Q = Ne((e) => (e === `hsr` ? wt() : St()), e)), Q);
}
var Rt = {
  tokyo: () =>
    e(
      () => import(`./tokyo-_rNKO_Y7.js`).then((e) => e.TOKYO),
      __vite__mapDeps([
        8, 2, 3, 1, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 0, 15, 16, 17, 18, 19,
        20, 21, 22,
      ]),
    ),
};
async function zt(e) {
  let t = Rt[e];
  if (!t) throw Error(`[regions] ${e} is not part of this page`);
  let n = await t();
  return (n.ready && (await n.ready().catch(() => {})), n);
}
var $ = window;
(($.__tgtaBoot = 1), ($.__tgtaTick = Date.now()));
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
    (v() && !/\/assets\//.test(n)) ||
    Ee(`lazy chunk (${n.slice(0, 160)})`);
});
var Bt = !1;
async function Vt() {
  (Lt(), Ce());
  let e = A(),
    n = document.getElementById(`loader-bar`),
    r = document.getElementById(`loader-label`),
    i = document.getElementById(`loader`);
  document.documentElement.lang =
    e === `en` ? `en` : e === `ja` ? `ja` : `zh-Hant-TW`;
  let a = e === `ja` ? t() : null;
  _().catch(() => {});
  let o = -1,
    s = ``,
    c = await zt(`tokyo`);
  (await a, await Ae());
  let l = new dt(
    document.getElementById(`app`),
    (e, t, i, a) => {
      $.__tgtaTick = Date.now();
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
    me(l.ctx),
    l.start(),
    xe(`tgta-boot-retry`),
    fe(`title`, l.ctx));
  let u = l.ctx.ui.showMainMenu();
  u.catch(() => {});
  try {
    await l.ctx.ui.titleReady?.(2500);
  } catch {}
  (i &&
    ((i.style.opacity = `0`),
    (Bt = !0),
    setTimeout(() => {
      (i.dispatchEvent(new Event(`loader:dispose`)), i.remove());
    }, 700)),
    await u,
    l.beginPlay(),
    fe(`playing`, l.ctx),
    l.ctx.events.emit(`player:spawned`, { pos: l.ctx.player.position.clone() }),
    l.guardArrival());
}
function Ht() {
  Vt().catch((e) => {
    (console.error(e), Ut(e));
  });
}
function Ut(e) {
  let t = A(),
    n = t === `en`,
    i = t === `ja`;
  if (!Bt && _e(e) && p(n)) return;
  let a = String(e?.message ?? e),
    o = document.getElementById(`loader-label`);
  if (!Bt && o) {
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
function Wt() {
  let e;
  try {
    e = E();
  } catch {
    return !1;
  }
  if (!e.killed) return !1;
  if (
    (b(e.count >= 2 ? 2 : 1),
    k(w, String(Date.now())),
    e.count >= 2 && k(T, `low`),
    console.warn(
      `[boot] the previous page was killed ${e.duringLoad ? `while loading` : `while playing`} (${e.count}× in a row) — memory-saving mode`,
    ),
    e.duringLoad,
    e.count,
    !e.duringLoad && e.count < 2)
  )
    return (d() && oe(), !1);
  let t = document.getElementById(`loader`),
    n = document.getElementById(`ld-err`);
  if (!t || !n) return !1;
  let r = A(),
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
        (t.classList.remove(`failed`), (n.textContent = ``), Ht());
      },
      { once: !0 },
    ),
    s.focus?.(),
    !0
  );
}
ve().then(() => {
  Wt() || Ht();
});
