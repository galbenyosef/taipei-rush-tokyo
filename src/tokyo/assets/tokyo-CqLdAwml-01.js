// tokyo/assets/tokyo-CqLdAwml 01 — addeventlistener
// Lines 1-340 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/clips-GNiXKOuW.js",
      "assets/pose-hAXyTQQR.js",
      "assets/lab-Q58d0-gH.js",
      "assets/three-C4coU-vx.js",
      "assets/rolldown-runtime-DK3Fl9T5.js",
      "assets/engine-14d5lda2.js",
      "assets/preload-helper-DZce6yc-.js",
      "assets/ja-anaGONx4.js",
      "assets/cities-tfcRdmsJ.js",
      "assets/shared-BaQwRjes.js",
      "assets/rig-BjRdQXtM.js",
      "assets/animator-ZoMjw9Jq.js",
      "assets/characters-p5grEi98.js",
      "assets/actors-bknSEpf2.js",
      "assets/prefs-zGhi31Iu.js",
      "assets/world-CVm1JHks.js",
      "assets/lab-DxV2kalD.js",
      "assets/avatar-Cm3dja-U.js",
      "assets/net-PtwKfaxg.js",
      "assets/game-DQ7TeBJx.js",
      "assets/session-DVEw0yxj.js",
      "assets/icons-Md4jzY0j.js",
      "assets/market-CT3qdM6h.js",
      "assets/recovery-DKVj2RZ5.js",
      "assets/client-BwrkpB9y.js",
      "assets/controllers-DHBZ_k07.js",
      "assets/dom-BCt0vy2n.js",
      "assets/market-DnDxqrTc.css",
      "assets/bag-C4RJ7iUM.js",
      "assets/bag-DRzQCt3x.css",
      "assets/fullmap-DiPIDBIM.js",
      "assets/strings-nmBOf9Pn.js",
      "assets/photoShare-C-qEBRcV.js",
      "assets/audio-BTLLtCvZ.js",
      "assets/board-NSb6t8eV.js",
      "assets/scene-D8wsoyD2.js",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./preload-helper-DZce6yc-.js";
import { n as t, t as n } from "./ja-anaGONx4.js";
import {
  Jt as r,
  Ot as i,
  Rt as a,
  Y as o,
  g as s,
  h as c,
  kn as l,
  lr as u,
  m as d,
  or as f,
  p,
} from "./three-C4coU-vx.js";
import {
  An as m,
  Ar as h,
  Dt as g,
  Fn as _,
  Gr as v,
  Ir as y,
  K as b,
  Mn as x,
  On as S,
  Ot as C,
  Pn as w,
  Qn as ee,
  Rn as T,
  Rr as E,
  St as D,
  U as O,
  Ut as te,
  Wt as ne,
  _t as re,
  a as k,
  bt as A,
  ct as ie,
  dt as ae,
  fn as oe,
  ft as se,
  ht as ce,
  ir as le,
  it as ue,
  lt as de,
  nn as fe,
  o as pe,
  ot as me,
  pt as he,
  qt as ge,
  rt as _e,
  ut as ve,
} from "./engine-14d5lda2.js";
import {
  a as ye,
  c as j,
  d as be,
  f as xe,
  g as M,
  h as N,
  l as P,
  n as F,
  o as I,
  p as Se,
  s as Ce,
} from "./cities-tfcRdmsJ.js";
import {
  A as L,
  F as we,
  I as Te,
  L as Ee,
  M as De,
  P as Oe,
  S as ke,
  a as Ae,
  b as je,
  d as Me,
  f as Ne,
  g as Pe,
  h as Fe,
  k as Ie,
  m as Le,
  n as Re,
  o as ze,
  w as Be,
  x as Ve,
  y as He,
} from "./shared-BaQwRjes.js";
import {
  E as Ue,
  M as We,
  _ as Ge,
  b as Ke,
  d as qe,
  f as R,
  g as Je,
  h as Ye,
  j as Xe,
  l as Ze,
  m as Qe,
  p as $e,
  u as et,
  v as tt,
  y as nt,
} from "./game-DQ7TeBJx.js";
import { t as rt } from "./characters-p5grEi98.js";
import {
  Jt as it,
  Tt as at,
  Xt as ot,
  Yt as st,
  qt as ct,
} from "./actors-bknSEpf2.js";
import {
  i as lt,
  n as ut,
  r as dt,
  s as ft,
  t as z,
} from "./icons-Md4jzY0j.js";
import {
  a as pt,
  c as mt,
  i as ht,
  l as B,
  n as gt,
  o as _t,
  r as V,
  s as vt,
  t as H,
  u as U,
} from "./dom-BCt0vy2n.js";
import {
  a as W,
  c as yt,
  d as bt,
  f as xt,
  i as G,
  l as St,
  n as Ct,
  o as wt,
  p as Tt,
  r as Et,
  s as Dt,
  t as Ot,
  u as kt,
} from "./strings-nmBOf9Pn.js";
import { i as At, n as K, r as q, t as jt } from "./prefs-zGhi31Iu.js";
import {
  c as Mt,
  d as Nt,
  i as Pt,
  n as Ft,
  r as It,
  s as Lt,
} from "./audio-BTLLtCvZ.js";
import { t as TOKYO } from "./region-tokyo-A7LxHjud.js";
var zt = { renderer: null, mobile: null, halveHeroMaps: null };
function J(e, t, n, r, i = {}) {
  let a = B(`button`, `mbtn ${i.cls ?? ``}`, t);
  ((a.type = `button`),
    (a.dataset.nav = `1`),
    i.icon && (B(`span`, `mbtn-ic`, a).innerHTML = z[i.icon]));
  let o = B(`span`, `mbtn-label`, a);
  return (
    i.dual === !1 ? e.bind(o, n) : e.dual(o, n),
    a.addEventListener(`click`, (t) => {
      (t.stopPropagation(), e.sfx(`ui_click`), r());
    }),
    a.addEventListener(`mouseenter`, () => e.sfx(`ui_hover`, 0.5)),
    a
  );
}
function Bt(e, t, n, r) {
  let i = B(`div`, `srow srow-${r}`, t);
  ((i.dataset.nav = r === `slider` ? `slider` : `1`), (i.tabIndex = -1));
  let a = B(`div`, `srow-label`, i);
  return (e.dual(a, n), { r: i, ctl: B(`div`, `srow-ctl`, i) });
}
function Vt(e, t, n, r, i, a, o, s, c = (e) => `${Math.round(e * 100)}%`) {
  let { r: l, ctl: u } = Bt(e, t, n, `slider`),
    d = B(`div`, `sl-track`, u),
    f = B(`i`, `sl-fill`, d),
    p = B(`b`, `sl-knob`, d),
    m = B(`span`, `sl-val`, u),
    h = () => {
      let e = o(),
        t = (e - r) / (i - r);
      ((f.style.transform = `scaleX(${t})`),
        (p.style.left = `${t * 100}%`),
        (m.textContent = c(e)));
    },
    g = (e) => {
      ((e = Math.max(r, Math.min(i, Math.round(e / a) * a))),
        !(Math.abs(e - o()) < 1e-6) && (s(+e.toFixed(3)), h()));
    };
  l.navAdjust = (t) => {
    (g(o() + t * a), e.sfx(`ui_hover`, 0.6));
  };
  let _ = !1,
    v = (e) => {
      let t = d.getBoundingClientRect();
      g(r + ((e.clientX - t.left) / t.width) * (i - r));
    };
  return (
    d.addEventListener(`pointerdown`, (e) => {
      ((_ = !0), ht(d, e.pointerId), v(e), e.preventDefault());
    }),
    d.addEventListener(`pointermove`, (e) => _ && v(e)),
    d.addEventListener(`pointerup`, () => {
      ((_ = !1), e.sfx(`ui_click`, 0.6));
    }),
    d.addEventListener(`pointercancel`, () => (_ = !1)),
    h(),
    { el: l, render: h }
  );
}
function Ht(e, t, n, r, i, a) {
  let { r: o, ctl: s } = Bt(e, t, n, `seg`),
    c = B(`div`, `seg`, s),
    l = r.map((t) => {
      let n = B(`button`, `seg-opt`, c);
      return (
        (n.type = `button`),
        e.bind(n, t.msg),
        n.addEventListener(`click`, (n) => {
          (n.stopPropagation(),
            i() !== t.value && (a(t.value), e.sfx(`ui_click`)),
            u());
        }),
        n
      );
    }),
    u = () => {
      let e = i();
      r.forEach((t, n) => l[n].classList.toggle(`on`, t.value === e));
    };
  return (
    (o.navAdjust = (t) => {
      let n = r.findIndex((e) => e.value === i()),
        o = Math.max(0, Math.min(r.length - 1, n + t));
      (o !== n && (a(r[o].value), e.sfx(`ui_hover`, 0.7)), u());
    }),
    o.addEventListener(`click`, () => o.navAdjust(1)),
    u(),
    { el: o, render: u }
  );
}
function Ut(e, t, n, r, i) {
  let { r: a, ctl: o } = Bt(e, t, n, `toggle`),
    s = B(`span`, `tgl`, o);
  B(`i`, ``, s);
  let c = B(`span`, `tgl-txt`, o),
    l = () => {
      let t = r();
      (s.classList.toggle(`on`, t), (c.textContent = e.t(t ? G.on : G.off)));
    };
  return (
    a.addEventListener(`click`, (t) => {
      (t.stopPropagation(), i(!r()), e.sfx(`ui_click`), l());
    }),
    (a.navAdjust = (t) => {
      let n = t > 0;
      n !== r() && (i(n), e.sfx(`ui_hover`, 0.7), l());
    }),
    e.onLang(l),
    l(),
    { el: a, render: l }
  );
}
function Wt(e, t) {
  let n = e.ctx,
    r = t === `auto` ? E() : t;
  if (y[r]) {
    try {
      n.quality.level !== r &&
        Promise.resolve(n.setQuality(r)).catch((e) =>
          console.error(`[ui] setQuality failed`, e),
        );
    } catch (e) {
      console.error(`[ui] setQuality failed`, e);
    }
    document.body.dataset.quality = r;
  }
}
function Gt(e) {
  document.documentElement.style.setProperty(
    `--ui-scale`,
    String(Math.max(0.7, Math.min(1.4, e))),
  );
}
function Kt(e) {
  let t = e.ctx.state.settings;
  try {
    e.ctx.audio.setVolumes(t.masterVolume, t.musicVolume, t.sfxVolume);
  } catch {}
}
