// tokyo/assets/tokyo-BZXVhKTn 18 — addeventlistener
// Lines 7486-7630 of readable/tokyo/assets/tokyo-BZXVhKTn.pretty.js (statement-aligned).
function li(e) {
  return e.endsWith(`站`) ? e : e + `站`;
}
function ui(e) {
  return /station$/i.test(e) ? e : e + ` Station`;
}
function Z(e, t, n, r, i = {}) {
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
function di(e, t, n, r) {
  let i = B(`div`, `srow srow-${r}`, t);
  ((i.dataset.nav = r === `slider` ? `slider` : `1`), (i.tabIndex = -1));
  let a = B(`div`, `srow-label`, i);
  return (e.dual(a, n), { r: i, ctl: B(`div`, `srow-ctl`, i) });
}
function fi(e, t, n, r, i, a, o, s, c = (e) => `${Math.round(e * 100)}%`) {
  let { r: l, ctl: u } = di(e, t, n, `slider`),
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
      ((_ = !0), Ze(d, e.pointerId), v(e), e.preventDefault());
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
function pi(e, t, n, r, i, a) {
  let { r: o, ctl: s } = di(e, t, n, `seg`),
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
function mi(e, t, n, r, i) {
  let { r: a, ctl: o } = di(e, t, n, `toggle`),
    s = B(`span`, `tgl`, o);
  B(`i`, ``, s);
  let c = B(`span`, `tgl-txt`, o),
    l = () => {
      let t = r();
      (s.classList.toggle(`on`, t), (c.textContent = e.t(t ? J.on : J.off)));
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
function hi(e, t) {
  let n = e.ctx,
    r = t === `auto` ? C() : t;
  if (re[r]) {
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
function gi(e) {
  document.documentElement.style.setProperty(
    `--ui-scale`,
    String(Math.max(0.7, Math.min(1.4, e))),
  );
}
function _i(e) {
  let t = e.ctx.state.settings;
  try {
    e.ctx.audio.setVolumes(t.masterVolume, t.musicVolume, t.sfxVolume);
  } catch {}
}
