// tokyo/assets/audio-CgR0uni4 12 — includes
// Lines 5333-5665 of readable/tokyo/assets/audio-CgR0uni4.pretty.js (statement-aligned).
function yt(e) {
  return e.startsWith(`inst/`)
    ? !0
    : e.startsWith(`drum/`)
      ? !gt.has(e.slice(5))
      : e === `amb/vinyl` || e.startsWith(`tune/`)
        ? !0
        : e.startsWith(`sfx/`)
          ? vt.has(St(e))
          : e.startsWith(`amb/`) && _t.has(e.slice(4));
}
function bt(e) {
  return (
    e.startsWith(`inst/`) ||
    e === `amb/vinyl` ||
    (e.startsWith(`drum/`) && !gt.has(e.slice(5)))
  );
}
function xt(e) {
  return yt(e) && !bt(e);
}
function St(e) {
  if (!e.startsWith(`sfx/`)) return ``;
  let t = e.indexOf(`/`, 4);
  return t < 0 ? e.slice(4) : e.slice(4, t);
}
var Ct = e({
    CORE_DRUMS: () => gt,
    LAZY_AMB: () => _t,
    LAZY_SFX: () => vt,
    allLazyWorldIds: () => Mt,
    allRadioIds: () => Nt,
    buildJobs: () => At,
    expandIds: () => jt,
    hashId: () => Ot,
    isOnDemand: () => yt,
    renderJob: () => Pt,
    variantCount: () => kt,
  }),
  wt = new Set([`suona`, `power`, `chug`, `distlead`, `epiano`]),
  Tt =
    `ui_click.ui_hover.ui_back.ui_confirm.phone_open.footstep_concrete.footstep_grass.footstep_wet.horn_car.horn_scooter.horn_bus.punch.punch_whoosh.gunshot.reload.empty_click.bullet_impact.car_door.crash_light.crash_heavy.tire_screech.jump.land.money.coin.pickup.checkpoint.wanted_up.wanted_lost.ped_hey.ped_scream.crosswalk_tick.crosswalk_bird.radio_static.scooter_start.car_start.passby_scooter.passby_car`.split(
      `.`,
    ),
  Et = new Set([`amb_temple`, `amb_river`, `mrt_rumble`]),
  Dt = new Set(
    Object.entries(ht)
      .filter(([, e]) => e.flat)
      .map(([e, t]) => t.recipe ?? e),
  );
function Ot(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
  return t >>> 0;
}
function kt(e, t) {
  let n = De[e] ?? 1;
  return t === `low` ? Math.min(n, 2) : n;
}
function At(e) {
  let t = [],
    n = (e, n) => t.push({ id: e, pri: n });
  (n(`noise/white`, 0), n(`noise/pink`, 0));
  for (let e of _e) n(`ir/world/${e}`, 0);
  n(`amb/amb_city`, 0);
  for (let t of Tt) for (let r = 0; r < kt(t, e); r++) n(`sfx/${t}/${r}`, 0);
  n(`amb/amb_wind`, 1);
  for (let e of gt) n(`drum/${e}`, 1);
  for (let t of Object.keys(Ee))
    if (!(Tt.includes(t) || vt.has(t)))
      for (let r = 0; r < kt(t, e); r++) n(`sfx/${t}/${r}`, 1);
  return t;
}
function jt(e, t) {
  let n = [];
  for (let r of e)
    if (r.startsWith(`sfx/`) && r.endsWith(`/*`)) {
      let e = r.slice(4, -2);
      if (!Ee[e]) continue;
      for (let r = 0; r < kt(e, t); r++) n.push(`sfx/${e}/${r}`);
    } else n.push(r);
  return n;
}
function Mt(e) {
  return jt(
    [
      ...[..._t].map((e) => `amb/${e}`),
      `tune/elise`,
      `tune/maiden`,
      ...[...vt].map((e) => `sfx/${e}/*`),
    ],
    e,
  );
}
function Nt() {
  let e = [];
  for (let t of Object.keys(rt)) gt.has(t) || e.push(`drum/${t}`);
  e.push(`amb/vinyl`);
  for (let [t, n] of Object.entries(tt))
    for (let r of n.roots) e.push(`inst/${t}/${r}`);
  return e;
}
function Pt(e, t, n = !1) {
  let r = e.slice(0, e.indexOf(`/`)),
    i = Bt(e, t);
  if (r === `ir`) return i;
  i = zt(e, r, i);
  let a = i.ch[0].length / i.sr > 1.5;
  return (
    r === `sfx` && (i = Rt(i)),
    t === `low`
      ? le(i, 22050, (r === `sfx` || r === `inst`) && a)
      : n
        ? le(i, 22050, !1)
        : i
  );
}
var Ft = -24,
  It = -60,
  Lt = 0.02;
function Rt(e) {
  let t = e.ch,
    n = t[0].length,
    r = 0;
  for (let e of t)
    for (let t = 0; t < n; t++) {
      let n = e[t] < 0 ? -e[t] : e[t];
      n > r && (r = n);
    }
  if (r <= 0) return e;
  let i = r * 10 ** (It / 20),
    a = 0;
  for (let e of t)
    for (let t = n - 1; t > a; t--)
      if ((e[t] < 0 ? -e[t] : e[t]) > i) {
        a = t;
        break;
      }
  let o = Math.max(1, Math.round(Lt * e.sr)),
    s = a + 1 + o;
  return n - s < 0.05 * e.sr
    ? e
    : {
        sr: e.sr,
        ch: t.map((e) => {
          let t = e.slice(0, s);
          for (let e = 0; e < o; e++) t[s - o + e] *= 1 - (e + 1) / o;
          return t;
        }),
      };
}
function zt(e, t, n) {
  if (n.ch.length !== 2) return n;
  let [r, i] = n.ch,
    a = e.split(`/`)[1],
    o = (t === `sfx` && !Dt.has(a)) || (t === `amb` && Et.has(a)),
    s = !0;
  for (let e = 0; e < r.length; e += 7)
    if (Math.abs(r[e] - i[e]) > 1e-5) {
      s = !1;
      break;
    }
  if (!s && !o && t === `sfx`) {
    let e = 0,
      t = 0;
    for (let n = 0; n < r.length; n++) {
      let a = r[n],
        o = i[n];
      ((e += (a + o) * (a + o)), (t += (a - o) * (a - o)));
    }
    s = t <= e * 10 ** (Ft / 10);
  }
  if (!s && !o) return n;
  let c = o ? Math.SQRT1_2 : 0.5,
    l = new Float32Array(r.length);
  for (let e = 0; e < l.length; e++) l[e] = (r[e] + i[e]) * c;
  return { sr: n.sr, ch: [l] };
}
function Bt(e, t) {
  let n = new o(Ot(e) ^ 8002364),
    [r, i, a] = e.split(`/`),
    s = t === `low` ? 0.6 : t === `medium` ? 0.8 : 1;
  switch (r) {
    case `sfx`: {
      let e = Ee[i];
      if (!e) throw Error(`no sfx ` + i);
      return e(n, Number(a ?? 0));
    }
    case `amb`: {
      let e = Ae[i];
      if (!e) throw Error(`no amb ` + i);
      return e(n, s);
    }
    case `noise`:
      return je(i, n);
    case `ir`: {
      let [e, n, r] = ge(i, t);
      return se(Number(a), e, n, r);
    }
    case `tune`:
      return mt(i, n);
    case `drum`: {
      let e = rt[i];
      if (!e) throw Error(`no drum ` + i);
      return e(n);
    }
    case `inst`: {
      let e = tt[i];
      if (!e) throw Error(`no inst ` + i);
      let t = wt.has(i) ? 2 : 1,
        r = e.render(n, Number(a), e.sr * t, e.dur);
      return t > 1
        ? { sr: e.sr, ch: r.ch.map((n) => ce(n, e.sr * t, e.sr)) }
        : r;
    }
  }
  throw Error(`bad job ` + e);
}
var Vt = {
    major: [0, 2, 4, 5, 7, 9, 11],
    minor: [0, 2, 3, 5, 7, 8, 10],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    mixo: [0, 2, 4, 5, 7, 9, 10],
    pentaMaj: [0, 2, 4, 7, 9],
    pentaMin: [0, 3, 5, 7, 10],
    blues: [0, 3, 5, 6, 7, 10],
  },
  Ht = { I: 0, II: 2, III: 4, IV: 5, V: 7, VI: 9, VII: 11 };
function Ut(e, t) {
  let n = e,
    r = 0;
  for (; n[0] === `b`;) (r--, (n = n.slice(1)));
  n[0] === `#` && (r++, (n = n.slice(1)));
  let i = /^(VII|VI|IV|V|III|II|I|vii|vi|iv|v|iii|ii|i)(.*)$/.exec(n);
  if (!i) return { sym: e, root: t, iv: [0, 4, 7], bass: t };
  let a = i[1],
    o = i[2],
    s = ``,
    c = o.indexOf(`/`);
  c >= 0 && ((s = o.slice(c + 1)), (o = o.slice(0, c)));
  let l = a === a.toLowerCase(),
    u = (t + Ht[a.toUpperCase()] + r + 120) % 12,
    d = l ? [0, 3, 7] : [0, 4, 7];
  ((o.includes(`°`) || o.includes(`dim`)) && (d = [0, 3, 6]),
    o.includes(`sus4`) && (d = [0, 5, 7]),
    o.includes(`sus2`) && (d = [0, 2, 7]),
    o.includes(`maj7`) || o.includes(`maj9`)
      ? (d = [...d, 11])
      : (o.includes(`7`) || o.includes(`9`) || o.includes(`11`)) &&
        (d = [...d, o.includes(`°`) ? 9 : 10]),
    (o.includes(`9`) || o.includes(`add9`)) && (d = [...d, 14]),
    o.includes(`11`) && (d = [...d, 17]),
    o.includes(`6`) && !o.includes(`/6`) && (d = [...d, 9]));
  let f = u;
  return (
    s === `3` ? (f = (u + d[1]) % 12) : s === `5` && (f = (u + 7) % 12),
    { sym: e, root: u, iv: d, bass: f }
  );
}
function Wt(e, t) {
  return e.map((e) => Ut(e, t));
}
function W(e, t, n = 0, r = 127) {
  let i = e,
    a = 1e9;
  for (let o = Math.max(n, e - 12); o <= Math.min(r, e + 12); o++) {
    let n = ((o % 12) + 12) % 12;
    if (!t.includes(n)) continue;
    let r = Math.abs(o - e);
    r < a && ((a = r), (i = o));
  }
  return i;
}
function Gt(e) {
  return e.iv.map((t) => (e.root + t) % 12);
}
function Kt(e, t, n, r) {
  let i = e.iv.map((e) => e % 12);
  (i.length >= 4 && n <= i.length && (i = i.filter((e) => e !== 0)),
    (i = [...new Set(i)].sort((e, t) => e - t)));
  let a = i.map((t) => (e.root + t) % 12),
    o = [];
  for (let e = 0; e < a.length; e++) {
    let r = [],
      i = W(t - 5, [a[e]]);
    r.push(i);
    let s = e;
    for (; r.length < n;) {
      s = (s + 1) % a.length;
      let e = i + 1;
      for (; ((e % 12) + 12) % 12 !== a[s];) e++;
      (r.push(e), (i = e));
    }
    o.push(r);
  }
  let s = o[0],
    c = 1e9;
  for (let e of o) {
    let n = 0;
    if (r && r.length)
      for (let t = 0; t < e.length; t++)
        n += Math.abs(e[t] - (r[t] ?? r[r.length - 1]));
    else n = Math.abs(e[0] + e[e.length - 1] - 2 * t);
    ((n += Math.abs((e[0] + e[e.length - 1]) / 2 - t) * 0.6),
      n < c && ((c = n), (s = e)));
  }
  return s;
}
function qt(e, t, n, r) {
  let i = [];
  for (let a = n; a <= r; a++)
    t.includes((((a - e) % 12) + 12) % 12) && i.push(a);
  return i;
}
function Jt(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    if (e[n] !== `x`) continue;
    let r = 1;
    for (; n + r < e.length && e[n + r] === `-`;) r++;
    t.push([n, r]);
  }
  return t;
}
function G(e, t, n, r = `drums`, i = 0.25, a = 1) {
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    if (s === `.` || s === ` `) continue;
    let c = s === `x` ? 1 : s === `o` ? 0.65 : s === `g` ? 0.32 : 0.8;
    n.push({ t: o * i, m: 60, d: i, v: c * a, inst: `drum:` + t, ch: r });
  }
}
