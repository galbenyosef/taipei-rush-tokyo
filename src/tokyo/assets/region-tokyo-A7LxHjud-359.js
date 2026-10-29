// tokyo/assets/region-tokyo-A7LxHjud 359 — math
// Lines 131175-131341 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function aMe(e, t, n, r) {
  let i = { x: 0, z: 0 },
    a = {
      JY: { zh: `山手線`, en: `Yamanote Line` },
      JK: { zh: `京濱東北線`, en: `Keihin-Tohoku Line` },
      SK: { zh: `新幹線`, en: `Shinkansen` },
      JB: { zh: `總武線`, en: `Sobu Line` },
      JC: { zh: `中央線`, en: `Chuo Line` },
      G: { zh: `銀座線`, en: `Ginza Line` },
      H: { zh: `日比谷線`, en: `Hibiya Line` },
      M: { zh: `丸之內線`, en: `Marunouchi Line` },
    },
    o = new Set();
  for (let t of e.m.corridors)
    for (let e of t.tracks) {
      let r = `${t.id}:${e.line}`;
      if (o.has(r)) continue;
      o.add(r);
      let s = [],
        c = Math.max(e.s0, t.path.s0),
        l = Math.min(e.s1, t.path.s1);
      for (let n = c; n <= l; n += 16)
        (t.path.pos(n, e.off.at(n), i),
          s.push({
            x: Math.round(i.x * 10) / 10,
            z: Math.round(i.z * 10) / 10,
          }));
      n.push({
        id: `${e.line}:${t.id}`,
        name: a[e.line] ?? { zh: e.line, en: e.line },
        color: LY[e.line] ?? `#888`,
        elevated: !0,
        points: s,
      });
    }
  for (let e of [`G`, `H`, `M`]) {
    let r = t
      .filter((t) => t.line === e)
      .sort((e, t) => String(e.code).localeCompare(String(t.code)));
    r.length < 2 ||
      n.push({
        id: e,
        name: a[e],
        color: LY[e],
        elevated: !1,
        points: r.map((e) => ({ x: e.x, z: e.z })),
      });
  }
  for (let t of e.m.platforms) {
    if (!t.rideable) continue;
    let e = t.corridor;
    e.path.pos(t.sc, (e.edge0.at(t.sc) + e.edge1.at(t.sc)) / 2, i);
    let n = (e.edge1.at(t.sc) - e.edge0.at(t.sc)) / 2,
      a = { x: 0, z: 0, tx: 0, tz: 1 };
    e.path.at(t.sc, a);
    let o = Math.abs(a.tz) > Math.abs(a.tx);
    r.push({
      id: t.id,
      name: { zh: t.name.zh, en: t.name.en },
      lines: [`JY`, `JK`],
      colors: [LY.JY, LY.JK],
      elevated: !0,
      x: i.x,
      z: i.z,
      hw: o ? n : 64,
      hl: o ? 64 : n,
    });
  }
  for (let e of t)
    e.line === `JY` ||
      e.elevated ||
      r.push({
        id: e.id,
        name: { zh: e.name.zh, en: e.name.en },
        lines: [String(e.line)],
        colors: [LY[String(e.line)] ?? `#888`],
        elevated: !1,
        x: e.x,
        z: e.z,
        hw: 0,
        hl: 0,
      });
}
var $X = [72, 72, 76],
  eZ = [76, 76, 79],
  tZ = (e) => e / 7;
function nZ(e, t) {
  let n = new Float32Array(t * t);
  for (let t = 0; t < n.length; t++) n[t] = e.next() * 2 - 1;
  return (e, r) => {
    let i = e * t,
      a = r * t,
      o = Math.floor(i),
      s = Math.floor(a),
      c = i - o,
      l = a - s,
      u = c * c * (3 - 2 * c),
      d = l * l * (3 - 2 * l),
      f = ((o % t) + t) % t,
      p = ((s % t) + t) % t,
      m = (f + 1) % t,
      h = (p + 1) % t,
      g = n[p * t + f],
      _ = n[p * t + m],
      v = n[h * t + f],
      y = n[h * t + m];
    return g + (_ - g) * u + (v - g) * d + (g - _ - v + y) * u * d;
  };
}
function oMe(e) {
  let t = e,
    n = document.createElement(`canvas`);
  n.width = n.height = t;
  let r = n.getContext(`2d`),
    i = r.createImageData(t, t),
    a = i.data,
    o = new le(8019777),
    s = [nZ(o, 4), nZ(o, 9), nZ(o, 21), nZ(o, 48), nZ(o, 120)],
    c = [0.06, 0.06, 0.05, 0.05, 0.06],
    l = new Float32Array(t * t);
  for (let e = 0; e < t; e++)
    for (let n = 0; n < t; n++) {
      let r = n / t,
        i = e / t,
        a = 0.9;
      for (let e = 0; e < s.length; e++) a += c[e] * s[e](r, i);
      let u = o.next();
      ((a += (u - 0.55) * 0.1), (l[e * t + n] = a));
    }
  let u = Math.round(t * t * 0.03);
  for (let e = 0; e < u; e++) {
    let e = Math.floor(o.next() * t),
      n = Math.floor(o.next() * t),
      r = o.next() < 0.45 ? 0.1 + o.next() * 0.12 : -(0.1 + o.next() * 0.12),
      i = t >= 512 ? +(o.next() < 0.5) : 0;
    for (let a = -i; a <= i; a++)
      for (let o = -i; o <= i; o++) {
        let i = ((n + a + t) % t) * t + ((e + o + t) % t);
        l[i] += r * (o || a ? 0.5 : 1);
      }
  }
  for (let e = 0; e < 5; e++) {
    let e = o.next() * t,
      n = o.next() * t,
      r = o.next() * Math.PI * 2,
      i = t * (0.08 + o.next() * 0.16);
    for (let a = 0; a < i; a++) {
      ((r += (o.next() - 0.5) * 0.5), (e += Math.cos(r)), (n += Math.sin(r)));
      let i =
        (((Math.floor(n) % t) + t) % t) * t + (((Math.floor(e) % t) + t) % t);
      l[i] -= 0.12;
    }
  }
  for (let e = 0, n = 0; e < t * t; e++, n += 4) {
    let t = Math.max(0, Math.min(1, l[e]));
    ((a[n] = Math.round(t * 255)),
      (a[n + 1] = Math.round(t * 254)),
      (a[n + 2] = Math.round(Math.min(1, t * 1.01) * 255)),
      (a[n + 3] = 255));
  }
  return (r.putImageData(i, 0, 0), n);
}
function sMe(e) {
  let t = !e.mobile && (e.level === `high` || e.level === `ultra`) ? 512 : 256,
    n = Ne(oMe(t), { repeat: !0, anisotropy: 8 });
  return ((n.name = `tokyo-asphalt`), n);
}
