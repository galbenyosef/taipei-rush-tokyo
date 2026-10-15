// tokyo/assets/tokyo-_rNKO_Y7 01 — math
// Lines 1-322 of readable/tokyo/assets/tokyo-_rNKO_Y7.pretty.js (statement-aligned).
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/clips-GNiXKOuW.js",
      "assets/pose-hAXyTQQR.js",
      "assets/lab-DzZxQgDp.js",
      "assets/three-x0mFGRTI.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/engine-wUBYs8Z3.js",
      "assets/ja-DY7SMsVw.js",
      "assets/cities-8-O8IWPJ.js",
      "assets/shared-DC9fKqx_.js",
      "assets/rig-BjRdQXtM.js",
      "assets/animator-B5fCfINc.js",
      "assets/characters-CbxAZUc_.js",
      "assets/actors-qKVitB-C.js",
      "assets/world-CAmHK742.js",
      "assets/lab-AJ7ypZPa.js",
      "assets/avatar-CgSTz8jy.js",
      "assets/market-CcnhaQYm.js",
      "assets/session-B5ukzynC.js",
      "assets/recovery-WpSwz0a9.js",
      "assets/client-ap9WfXdd.js",
      "assets/controllers-DIi301oL.js",
      "assets/game-CPWU_QWx.js",
      "assets/dom-BCt0vy2n.js",
      "assets/market-DnDxqrTc.css",
      "assets/bag-B0X6UNsq.js",
      "assets/bag-DRzQCt3x.css",
      "assets/fullmap-Dd3RmRQQ.js",
      "assets/icons-DYNV7fxr.js",
      "assets/prefs-BioZODFl.js",
      "assets/audio-CgR0uni4.js",
      "assets/board-INUeDSQr.js",
      "assets/scene-G8jS_Se3.js",
    ]),
) => i.map((i) => d[i]);
import { a as e, n as t, t as n } from "./ja-DY7SMsVw.js";
import {
  Dn as r,
  Dt as i,
  J as a,
  Lt as o,
  g as s,
  h as c,
  m as l,
  or as u,
  p as d,
  qt as f,
  rr as p,
} from "./three-x0mFGRTI.js";
import {
  Cn as m,
  Cr as h,
  Ct as g,
  Dn as _,
  G as v,
  Gn as y,
  H as b,
  Ht as x,
  On as S,
  Rt as C,
  St as w,
  Tn as T,
  Tr as ee,
  Zn as E,
  Zt as te,
  _r as D,
  _t as ne,
  a as re,
  at as O,
  ct as ie,
  ft as k,
  ht as A,
  i as ae,
  jn as oe,
  jr as se,
  nt as ce,
  ot as le,
  rt as ue,
  sn as de,
  st as fe,
  ut as pe,
  zt as me,
} from "./engine-wUBYs8Z3.js";
import {
  a as j,
  c as he,
  d as ge,
  f as _e,
  h as ve,
  l as M,
  n as N,
  o as P,
  p as F,
  s as I,
} from "./cities-8-O8IWPJ.js";
import {
  F as L,
  I as ye,
  N as be,
  O as xe,
  P as Se,
  S as Ce,
  a as we,
  b as Te,
  d as Ee,
  f as De,
  g as Oe,
  h as ke,
  j as Ae,
  k as R,
  m as je,
  n as Me,
  o as Ne,
  x as Pe,
  y as Fe,
} from "./shared-DC9fKqx_.js";
import {
  C as Ie,
  a as Le,
  c as Re,
  d as ze,
  f as Be,
  i as z,
  l as Ve,
  n as He,
  o as Ue,
  r as We,
  s as Ge,
  t as Ke,
  u as qe,
  v as Je,
  w as Ye,
} from "./game-CPWU_QWx.js";
import { t as Xe } from "./characters-CbxAZUc_.js";
import {
  i as Ze,
  n as Qe,
  r as $e,
  s as et,
  t as B,
} from "./icons-DYNV7fxr.js";
import {
  a as tt,
  c as nt,
  i as rt,
  l as V,
  n as it,
  o as at,
  r as H,
  s as ot,
  t as U,
  u as st,
} from "./dom-BCt0vy2n.js";
import { i as ct, n as W, r as G, t as lt } from "./prefs-BioZODFl.js";
import {
  c as ut,
  d as dt,
  i as ft,
  n as pt,
  r as mt,
  s as ht,
} from "./audio-CgR0uni4.js";
import { t as TOKYO } from "./region-tokyo-55J_WESF.js";
var _t = { renderer: null, mobile: null, halveHeroMaps: null },
  vt = Me === `tokyo`,
  yt = new Set(),
  bt = (e) => e.state.data;
function xt(e) {
  let t = bt(e),
    n = Fe(t.bag) ?? {};
  return ((t.bag = n), n);
}
var St = (e, t) => xt(e)[t] ?? 0;
function Ct(e) {
  let t = bt(e),
    n = Pe(
      Te(t.bagBook),
      Object.keys(xt(e)).filter((e) => R[e]),
    );
  return ((t.bagBook = n), new Set(n));
}
function wt(e) {
  return (yt.add(e), () => yt.delete(e));
}
function Tt(e, t) {
  e.state.scheduleSave(0.5);
  for (let e of yt)
    try {
      e(t);
    } catch (e) {
      console.error(`[bag] listener`, e);
    }
}
var Et = (e, t) => {
    try {
      e.audio.play(t, { ui: !0, volume: 0.8 });
    } catch {}
  },
  Dt = (e, t, n = `good`, r = 3) =>
    e.events.emit(`notify`, { text: t, kind: n, duration: r }),
  Ot = (e) => {
    if (vt) {
      let t = Ce(e, Me);
      return { v: t, label: `¥ ${t.toLocaleString()}` };
    }
    let t = Math.floor(e / Oe[Me]);
    return {
      v: t,
      label:
        Me === `hong-kong`
          ? `HK$ ${t.toLocaleString()}`
          : `NT$ ${t.toLocaleString()}`,
    };
  };
function kt() {
  return W().bagNew ?? [];
}
function At() {
  kt().length && G({ bagNew: [] });
}
function jt(e, t, r = 1, i = {}) {
  let a = R[t];
  if (!a || !(r > 0)) return 0;
  let o = xt(e),
    s = o[t] ?? 0,
    c = Math.max(0, Math.min(Math.floor(r), a.max - s));
  if (!c)
    return (
      i.quiet ||
        Dt(
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
  let l = bt(e),
    u = !Ct(e).has(t);
  u && (l.bagBook = Pe(Te(l.bagBook), [t]));
  let d = kt();
  return (
    d.includes(t) || G({ bagNew: [...d, t].slice(-32) }),
    Tt(e, o),
    i.quiet ||
      (Et(e, `pickup`),
      Dt(e, {
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
function Mt(e, t) {
  let n = xt(e);
  return n[t]
    ? !0
    : ((n[t] = 1), Fe(n)?.[t] === 1 ? (Tt(e, n), !0) : (delete n[t], !1));
}
function Nt(e, t, n = 1) {
  let r = xt(e),
    i = r[t] ?? 0;
  return !(n > 0) || i < n
    ? !1
    : (i === n ? delete r[t] : (r[t] = i - n), Tt(e, r), !0);
}
function Pt(e) {
  let t = e.reduce((e, [, t]) => e + t, 0),
    n = Math.random() * t;
  for (let [t, r] of e) if ((n -= r) < 0) return t;
  return e[e.length - 1][0];
}
function Ft(e) {
  for (let [t, n] of vt ? ye : be)
    if (Math.random() < n && jt(e, t, 1, { quiet: !0 })) return R[t];
  return null;
}
var It = !1;
function Lt(e) {
  It ||
    ((It = !0),
    e.events.on(`mission:completed`, (t) => {
      if ((t?.id && m(e.state.data, t.id) > 1) || Math.random() >= 0.35) return;
      let r = Pt(vt ? L : Ae);
      jt(e, r, 1, { quiet: !0 }) &&
        setTimeout(() => {
          (Et(e, `pickup`),
            Dt(
              e,
              {
                zh: n.on
                  ? n.t(
                      `任務獎勵：「${R[r].name.zh}」放進背包`,
                      `ミッション報酬：「${n.jz(R[r].name.zh)}」をバッグに入れた`,
                    )
                  : `任務獎勵：「${R[r].name.zh}」放進背包`,
                en: `Mission bonus: ${R[r].name.en} — in your bag`,
              },
              `good`,
              4,
            ));
        }, 3500);
    }));
}
