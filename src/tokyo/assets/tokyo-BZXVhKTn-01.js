// tokyo/assets/tokyo-BZXVhKTn 01 — math
// Lines 1-306 of readable/tokyo/assets/tokyo-BZXVhKTn.pretty.js (statement-aligned).
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/clips-B74kfFEX.js",
      "assets/pose-hAXyTQQR.js",
      "assets/lab-CQYp1Cs9.js",
      "assets/three-CC5Mkdpe.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/engine-BuS5QxN0.js",
      "assets/ja-Ci9Qv_M-.js",
      "assets/cities-8-O8IWPJ.js",
      "assets/shared-DcD5mkpI.js",
      "assets/rig-BjRdQXtM.js",
      "assets/animator-C4Q6-_Wy.js",
      "assets/characters-BvEb7Acx.js",
      "assets/actors-Bnj6Q1ad.js",
      "assets/world-Bo9wkXrT.js",
      "assets/lab-X7McqYcL.js",
      "assets/avatar-CbvrNwG6.js",
      "assets/market-l-6OeMtj.js",
      "assets/session-CLv8PYlR.js",
      "assets/recovery-CHWBNwD3.js",
      "assets/client-NeGl0SRK.js",
      "assets/controllers-mah1C7rD.js",
      "assets/game-y-FF2uWA.js",
      "assets/dom-BCt0vy2n.js",
      "assets/market-DnDxqrTc.css",
      "assets/bag-LX8mo88s.js",
      "assets/bag-DRzQCt3x.css",
      "assets/fullmap-CXrrUiBa.js",
      "assets/icons-DYNV7fxr.js",
      "assets/prefs-BioZODFl.js",
      "assets/audio-DzcbodvB.js",
      "assets/board-CFkVQWI7.js",
      "assets/scene-MReEd7Ml.js",
    ]),
) => i.map((i) => d[i]);
import { a as e, n as t, t as n } from "./ja-Ci9Qv_M-.js";
import {
  Dt as r,
  En as i,
  J as a,
  Kt as o,
  Lt as s,
  g as c,
  h as l,
  ir as u,
  m as d,
  p as f,
  tr as p,
} from "./three-CC5Mkdpe.js";
import {
  An as m,
  G as h,
  H as g,
  In as _,
  It as v,
  Lt as y,
  _t as b,
  a as x,
  at as S,
  cr as C,
  ct as ee,
  er as w,
  ft as T,
  hn as E,
  ht as D,
  mr as te,
  nt as O,
  o as ne,
  or as re,
  ot as ie,
  rt as ae,
  st as oe,
  tn as se,
  ut as ce,
  zt as le,
} from "./engine-BuS5QxN0.js";
import {
  a as ue,
  c as de,
  d as fe,
  f as pe,
  h as k,
  l as A,
  n as j,
  o as M,
  p as N,
  s as me,
} from "./cities-8-O8IWPJ.js";
import {
  F as he,
  I as ge,
  N as P,
  O as _e,
  P as ve,
  S as F,
  a as I,
  b as L,
  d as ye,
  f as be,
  g as xe,
  h as Se,
  j as Ce,
  k as we,
  m as Te,
  n as Ee,
  o as De,
  x as Oe,
  y as ke,
} from "./shared-DcD5mkpI.js";
import {
  C as Ae,
  a as je,
  c as Me,
  d as Ne,
  f as Pe,
  i as R,
  l as Fe,
  n as Ie,
  o as Le,
  r as Re,
  s as ze,
  t as Be,
  u as Ve,
  v as He,
  w as Ue,
} from "./game-y-FF2uWA.js";
import { t as We } from "./characters-BvEb7Acx.js";
import {
  i as Ge,
  n as Ke,
  r as qe,
  s as Je,
  t as z,
} from "./icons-DYNV7fxr.js";
import {
  a as Ye,
  c as Xe,
  i as Ze,
  l as B,
  n as Qe,
  o as $e,
  r as V,
  s as et,
  t as H,
  u as U,
} from "./dom-BCt0vy2n.js";
import { i as tt, n as W, r as G, t as nt } from "./prefs-BioZODFl.js";
import {
  c as rt,
  d as it,
  i as at,
  n as ot,
  r as st,
  s as ct,
} from "./audio-DzcbodvB.js";
import { t as lt } from "./region-tokyo-BcM3fReU.js";
var ut = { renderer: null, mobile: null, halveHeroMaps: null },
  dt = Ee === `tokyo`,
  ft = new Set(),
  pt = (e) => e.state.data;
function mt(e) {
  let t = pt(e),
    n = ke(t.bag) ?? {};
  return ((t.bag = n), n);
}
var ht = (e, t) => mt(e)[t] ?? 0;
function gt(e) {
  let t = pt(e),
    n = Oe(L(t.bagBook), Object.keys(mt(e)));
  return ((t.bagBook = n), new Set(n));
}
function _t(e) {
  return (ft.add(e), () => ft.delete(e));
}
function vt(e, t) {
  e.state.scheduleSave(0.5);
  for (let e of ft)
    try {
      e(t);
    } catch (e) {
      console.error(`[bag] listener`, e);
    }
}
var yt = (e, t) => {
    try {
      e.audio.play(t, { ui: !0, volume: 0.8 });
    } catch {}
  },
  bt = (e, t, n = `good`, r = 3) =>
    e.events.emit(`notify`, { text: t, kind: n, duration: r }),
  xt = (e) => {
    if (dt) {
      let t = F(e, Ee);
      return { v: t, label: `¥ ${t.toLocaleString()}` };
    }
    let t = Math.floor(e / xe[Ee]);
    return {
      v: t,
      label:
        Ee === `hong-kong`
          ? `HK$ ${t.toLocaleString()}`
          : `NT$ ${t.toLocaleString()}`,
    };
  };
function St() {
  return W().bagNew ?? [];
}
function Ct() {
  St().length && G({ bagNew: [] });
}
function wt(e, t, r = 1, i = {}) {
  let a = we[t];
  if (!a || !(r > 0)) return 0;
  let o = mt(e),
    s = o[t] ?? 0,
    c = Math.max(0, Math.min(Math.floor(r), a.max - s));
  if (!c)
    return (
      i.quiet ||
        bt(
          e,
          {
            zh: n.on
              ? n.t(
                  `${a.name.zh}已經帶滿了（最多 ${a.max} 個）`,
                  `${n.jz(a.name.zh)}はもう持てない（最大 ${a.max} 個）`,
                )
              : `${a.name.zh}已經帶滿了（最多 ${a.max} 個）`,
            en: `You can't carry more ${a.name.en} (max ${a.max})`,
          },
          `info`,
          2.5,
        ),
      0
    );
  o[t] = s + c;
  let l = pt(e),
    u = !gt(e).has(t);
  u && (l.bagBook = Oe(L(l.bagBook), [t]));
  let d = St();
  return (
    d.includes(t) || G({ bagNew: [...d, t].slice(-32) }),
    vt(e, o),
    i.quiet ||
      (yt(e, `pickup`),
      bt(e, {
        zh: n.on
          ? n.t(
              `🎒 ${a.name.zh}${c > 1 ? ` ×${c}` : ``} 放進背包${u ? `（圖鑑新收錄）` : ``}`,
              `🎒 ${n.jz(a.name.zh)}${c > 1 ? ` ×${c}` : ``} をバッグに入れた${u ? `（図鑑に新登録）` : ``}`,
            )
          : `🎒 ${a.name.zh}${c > 1 ? ` ×${c}` : ``} 放進背包${u ? `（圖鑑新收錄）` : ``}`,
        en: `🎒 ${a.name.en}${c > 1 ? ` ×${c}` : ``} — in your bag${u ? ` (new in your book)` : ``}`,
      })),
    c
  );
}
function Tt(e, t, n = 1) {
  let r = mt(e),
    i = r[t] ?? 0;
  return !(n > 0) || i < n
    ? !1
    : (i === n ? delete r[t] : (r[t] = i - n), vt(e, r), !0);
}
function Et(e) {
  let t = e.reduce((e, [, t]) => e + t, 0),
    n = Math.random() * t;
  for (let [t, r] of e) if ((n -= r) < 0) return t;
  return e[e.length - 1][0];
}
function Dt(e) {
  for (let [t, n] of dt ? ge : P)
    if (Math.random() < n && wt(e, t, 1, { quiet: !0 })) return we[t];
  return null;
}
var Ot = !1;
function kt(e) {
  Ot ||
    ((Ot = !0),
    e.events.on(`mission:completed`, (t) => {
      if ((t?.id && E(e.state.data, t.id) > 1) || Math.random() >= 0.35) return;
      let r = Et(dt ? he : Ce);
      wt(e, r, 1, { quiet: !0 }) &&
        setTimeout(() => {
          (yt(e, `pickup`),
            bt(
              e,
              {
                zh: n.on
                  ? n.t(
                      `任務獎勵：「${we[r].name.zh}」放進背包`,
                      `ミッション報酬：「${n.jz(we[r].name.zh)}」をバッグに入れた`,
                    )
                  : `任務獎勵：「${we[r].name.zh}」放進背包`,
                en: `Mission bonus: ${we[r].name.en} — in your bag`,
              },
              `good`,
              4,
            ));
        }, 3500);
    }));
}
