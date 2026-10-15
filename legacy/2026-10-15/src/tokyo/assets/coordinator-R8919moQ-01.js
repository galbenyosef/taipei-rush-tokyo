// tokyo/assets/coordinator-R8919moQ 01 — state
// Lines 1-255 of readable/tokyo/assets/coordinator-R8919moQ.pretty.js (statement-aligned).
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/landing-DfZEUEhC.js",
      "assets/engine-BuS5QxN0.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/ja-Ci9Qv_M-.js",
      "assets/three-CC5Mkdpe.js",
      "assets/cities-8-O8IWPJ.js",
      "assets/shared-DcD5mkpI.js",
      "assets/game-y-FF2uWA.js",
      "assets/notice-DnIsya3-.js",
      "assets/session-CLv8PYlR.js",
      "assets/accounts-CpfgQQfK.js",
      "assets/tabs-C1IhIOn4.js",
      "assets/dom-BIQnAwky.js",
      "assets/text-0MpKmkwJ.js",
      "assets/ui-Bz5oqxsZ.js",
      "assets/icons-DYNV7fxr.js",
    ]),
) => i.map((i) => d[i]);
import { a as e } from "./ja-Ci9Qv_M-.js";
import {
  Dn as t,
  En as n,
  Fn as r,
  In as i,
  Lt as a,
  Sn as o,
  er as s,
  xn as c,
} from "./engine-BuS5QxN0.js";
import { n as l } from "./cities-8-O8IWPJ.js";
import { t as u } from "./notice-DnIsya3-.js";
import {
  f as d,
  g as f,
  h as p,
  i as m,
  o as h,
  s as g,
} from "./session-CLv8PYlR.js";
import {
  a as _,
  c as v,
  l as y,
  r as b,
  s as x,
  t as S,
} from "./controllers-mah1C7rD.js";
import { h as C, o as w } from "./accounts-CpfgQQfK.js";
import { a as T, i as E, o as D, r as O, t as k } from "./tabs-C1IhIOn4.js";
var StartGate = class {
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
  cloudSave,
  game,
  switchingIdentity = !1,
  delay = (e) => new Promise((t) => setTimeout(t, e)),
  identityKeyOf = (e) => (e && e.anonymous === !1 ? e.user_id : `guest`);
function installCloud(n) {
  if (cloudSave) return cloudSave;
  ((game = n), t());
  let r = (cloudSave = S());
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
  f(a);
  let c = new StartGate({
    playTime: () => n.state.totalPlayTime,
    stored: () => m() !== null,
    menu: a,
    deferred: g,
    start: h,
  });
  if ((s(i()) && r.protectNewerSave(), D()))
    return ((n.state.resetting = !0), n.setPaused(!0), r);
  let l = ``,
    u = (e, t) => {
      if (switchingIdentity) return;
      let i = identityKeyOf(e);
      if (o() !== i) {
        L(n, r, i, e, t);
        return;
      }
      let a = e ? `${e.user_id}:${e.anonymous ?? !0}` : ``;
      a !== l &&
        ((l = a),
        e
          ? _(e).then(() => {
              if (!r.connectedTo(e.user_id)) return r.connect(e);
            })
          : (r.disconnect(), v().disconnect()));
    };
  d(u);
  let p = m();
  return (
    p && r.connectedTo(p.user_id) && (l = `${p.user_id}:${p.anonymous ?? !0}`),
    p ? h(!1) : u(null, `restore`),
    n.events.on(`state:saved`, ({ data: e }) => {
      let t = e?.travel;
      (t?.arrivalOnly && !y(e) && delete t.arrivalOnly, r.markDirty());
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
          delay(3500),
        ]),
        r.disconnect(),
        v().disconnect(),
        E(),
        await e(
          () =>
            import(`./landing-DfZEUEhC.js`).then((e) => e.showMovedNotice()),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
        ).catch(() => {}));
    }),
    e(
      () =>
        import(`./ui-Bz5oqxsZ.js`).then((e) => {
          (e.showSaveUndo(n, r), e.showStartupNotices(n));
        }),
      __vite__mapDeps([14, 3, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 15]),
    ).catch(() => {}),
    c.tick().catch(() => {}),
    r
  );
}
function L(e, t, n, a, l) {
  (e.state.resetting || e.state.saveNow(), t.disconnect(), v().disconnect());
  let d = n !== `guest` && o() === `guest`;
  if (!c(n, d)) {
    (s(i()) || s(r(n))) && t.protectNewerSave();
    return;
  }
  (b(n),
    (switchingIdentity = !0),
    l === `signout`
      ? u(`signed_out`)
      : l === `expired`
        ? u(`expired`)
        : l === `deleted`
          ? u(`deleted`)
          : a && (l === `signin` || l === `remote`)
            ? u(`signed_in`, a.email ?? ``)
            : !a && l === `remote` && u(`signed_out`),
    e.state.restoreSave(i()),
    (e.state.resetting = !0),
    e.setPaused(!0),
    location.reload());
}
async function syncNow(e = 1e4) {
  if (!cloudSave) return !1;
  game && !game.state.resetting && game.state.saveNow();
  let [t, n] = await Promise.all([cloudSave.flushNow(e), v().flushNow(e)]);
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
  (game && !game.state.resetting && game.state.saveNow(),
    await Promise.race([syncNow(4e3), delay(4500)]),
    game && (game.state.resetting = !0),
    a(),
    V ||
      window.addEventListener(`pageshow`, (e) => {
        e.persisted && B && game && ((game.state.resetting = !1), (B = !1));
      }),
    (V = !0),
    (B = !0));
}
async function deleteFlow(e) {
  let t = m()?.user_id,
    r = await w(e);
  if (r.ok && t)
    for (let e of Object.values(l)) n(t, `${e.saveKey}:identities-v1`);
  return r;
}
async function flushDeparture() {
  (await Promise.race([
    Promise.all([cloudSave?.flushForNavigation(), x()]),
    new Promise((e) => setTimeout(e, 3e3)),
  ]),
    await p());
}
