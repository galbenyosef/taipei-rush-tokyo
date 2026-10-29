// tokyo/assets/coordinator-Brhh9B6T 01 — state
// Lines 1-257 of readable/tokyo/assets/coordinator-Brhh9B6T.pretty.js (statement-aligned).
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/landing-CD9ntJhH.js",
      "assets/engine-14d5lda2.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/preload-helper-DZce6yc-.js",
      "assets/ja-anaGONx4.js",
      "assets/three-C4coU-vx.js",
      "assets/cities-tfcRdmsJ.js",
      "assets/shared-BaQwRjes.js",
      "assets/game-DQ7TeBJx.js",
      "assets/notice-DnIsya3-.js",
      "assets/session-DVEw0yxj.js",
      "assets/accounts-DSoNIbxN.js",
      "assets/tabs-C1IhIOn4.js",
      "assets/dom-CivB7fIR.js",
      "assets/text-Dz2IP1v8.js",
      "assets/ui-P-VyG5rz.js",
      "assets/controllers-DHBZ_k07.js",
      "assets/icons-Md4jzY0j.js",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./preload-helper-DZce6yc-.js";
import {
  Ar as t,
  Jn as n,
  Un as r,
  Wn as i,
  Wt as a,
  Yn as o,
  ir as s,
  rr as c,
} from "./engine-14d5lda2.js";
import { n as l } from "./cities-tfcRdmsJ.js";
import { t as u } from "./notice-DnIsya3-.js";
import {
  _ as d,
  f,
  g as p,
  i as m,
  o as h,
  s as g,
} from "./session-DVEw0yxj.js";
import {
  a as _,
  c as v,
  i as y,
  l as b,
  s as x,
  t as S,
} from "./controllers-DHBZ_k07.js";
import { h as C, o as w } from "./accounts-DSoNIbxN.js";
import { a as T, i as E, o as D, r as O, t as k } from "./tabs-C1IhIOn4.js";
var A = class {
    host;
    started = !1;
    pending = !1;
    constructor(e) {
      this.host = e;
    }
    async tick() {
      if (
        this.pending ||
        (this.started && (!this.host.deferred() || !this.host.menu()))
      )
        return;
      let e = this.host.stored();
      if (!(!this.started && !e && this.host.playTime() < 180)) {
        ((this.started = !0), (this.pending = !0));
        try {
          await this.host.start(!e, !this.host.menu());
        } finally {
          this.pending = !1;
        }
      }
    }
  },
  j,
  M,
  N = !1,
  P = (e) => new Promise((t) => setTimeout(t, e)),
  F = (e) => (e && e.anonymous === !1 ? e.user_id : `guest`);
function installCloud(n) {
  if (j) return j;
  ((M = n), o());
  let r = (j = S());
  r.setPorts({
    apply: (e, t = !0) => {
      if (!n.state.restoreSave(e)) throw Error(`Local storage unavailable`);
      t && location.reload();
    },
    reload: () => location.reload(),
  });
  let a = () =>
    !!document.querySelector(`dialog.cloud-overlay[open]`) ||
    [`main`, `phone`, `pause`].includes(n.ui.menuOpen ?? ``);
  d(a);
  let c = new A({
    playTime: () => n.state.totalPlayTime,
    stored: () => m() !== null,
    menu: a,
    deferred: g,
    start: h,
  });
  if ((t(s()) && r.protectNewerSave(), D()))
    return ((n.state.resetting = !0), n.setPaused(!0), r);
  let l = ``,
    u = (e, t) => {
      if (N) return;
      let a = F(e);
      if (i() !== a) {
        L(n, r, a, e, t);
        return;
      }
      let o = e ? `${e.user_id}:${e.anonymous ?? !0}` : ``;
      o !== l &&
        ((l = o),
        e
          ? _(e).then(() => {
              if (!r.connectedTo(e.user_id)) return r.connect(e);
            })
          : (r.disconnect(), v().disconnect()));
    };
  f(u);
  let p = m();
  return (
    p && r.connectedTo(p.user_id) && (l = `${p.user_id}:${p.anonymous ?? !0}`),
    p ? h(!1) : u(null, `restore`),
    n.events.on(`state:saved`, ({ data: e }) => {
      let t = e?.travel;
      (t?.arrivalOnly && !b(e) && delete t.arrivalOnly, r.markDirty());
    }),
    n.events.on(`mission:completed`, () => {
      (n.state.saveNow(), r.flush(!0));
    }),
    window.addEventListener(`pagehide`, () => {
      r.flush(!0, !0);
    }),
    window.addEventListener(`travel:changed`, () => {
      v().markDirty();
    }),
    v().markDirty(),
    document.addEventListener(`visibilitychange`, () => {
      document.visibilityState === `hidden` ? r.flush(!0, !0) : h(!1);
    }),
    setInterval(() => {
      (c.tick().catch(() => {}),
        r.tick().catch(() => {}),
        v()
          .tick()
          .catch(() => {}));
    }, 1e3),
    n.events.on(`game:pause`, () =>
      queueMicrotask(() => {
        c.tick().catch(() => {});
      }),
    ),
    k(async () => {
      n.state.resetting || n.state.saveNow();
      let [e, t] = await Promise.all([r.flushNow(6e3), v().flushNow(6e3)]);
      return e && t;
    }),
    O(async () => {
      (n.state.saveNow(),
        (n.state.resetting = !0),
        n.setPaused(!0),
        await Promise.race([
          Promise.all([r.flushNow(3e3), v().flushNow(3e3)]),
          P(3500),
        ]),
        r.disconnect(),
        v().disconnect(),
        E(),
        await e(
          () =>
            import(`./landing-CD9ntJhH.js`).then((e) => e.showMovedNotice()),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
        ).catch(() => {}));
    }),
    e(
      () =>
        import(`./ui-P-VyG5rz.js`).then((e) => {
          (e.showSaveUndo(n, r), e.showStartupNotices(n), e.showWalletGuard(n));
        }),
      __vite__mapDeps([15, 4, 3, 1, 2, 5, 6, 7, 8, 9, 10, 16, 11, 13, 14, 17]),
    ).catch(() => {}),
    c.tick().catch(() => {}),
    r
  );
}
function L(e, n, a, o, l) {
  (e.state.resetting || e.state.saveNow(), n.disconnect(), v().disconnect());
  let d = a !== `guest` && i() === `guest`;
  if (!r(a, d)) {
    (t(s()) || t(c(a))) && n.protectNewerSave();
    return;
  }
  (y(a),
    (N = !0),
    l === `signout`
      ? u(`signed_out`)
      : l === `expired`
        ? u(`expired`)
        : l === `deleted`
          ? u(`deleted`)
          : o && (l === `signin` || l === `remote`)
            ? u(`signed_in`, o.email ?? ``)
            : !o && l === `remote` && u(`signed_out`),
    e.state.restoreSave(s()),
    (e.state.resetting = !0),
    e.setPaused(!0),
    location.reload());
}
async function syncNow(e = 1e4) {
  if (!j) return !1;
  M && !M.state.resetting && M.state.saveNow();
  let [t, n] = await Promise.all([j.flushNow(e), v().flushNow(e)]);
  return t && n;
}
async function signOutFlow(e = !1) {
  if (!e) {
    let [e, t] = await Promise.all([syncNow(8e3), T(8e3)]);
    if (!(e && t)) return { synced: !1, signedOut: !1 };
  }
  return (await C(), { synced: !e, signedOut: !0 });
}
var B = !1,
  V = !1;
async function leaveForGoogle() {
  (M && !M.state.resetting && M.state.saveNow(),
    await Promise.race([syncNow(4e3), P(4500)]),
    M && (M.state.resetting = !0),
    a(),
    V ||
      window.addEventListener(`pageshow`, (e) => {
        e.persisted && B && M && ((M.state.resetting = !1), (B = !1));
      }),
    (V = !0),
    (B = !0));
}
async function deleteFlow(e) {
  let t = m()?.user_id,
    r = await w(e);
  if (r.ok && t)
    for (let e of Object.values(l)) n(t, `${e.saveKey}:identities-v1`);
  return (r.ok && t && n(t, `jakarta-rush-save-v1:identities-v1`), r);
}
async function flushDeparture() {
  (await Promise.race([
    Promise.all([j?.flushForNavigation(), x()]),
    new Promise((e) => setTimeout(e, 3e3)),
  ]),
    await p());
}
