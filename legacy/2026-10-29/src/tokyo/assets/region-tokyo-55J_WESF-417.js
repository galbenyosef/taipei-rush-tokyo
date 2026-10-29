// tokyo/assets/region-tokyo-55J_WESF 417 — math
// Lines 149671-150012 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function qIe(e) {
  r4 = e;
  let t = e.dataset,
    n = UIe(),
    r = WIe(),
    i = t.waterBodies ?? [],
    a = t.terrain ?? [],
    o = t.expressways ?? [],
    s = (t.bridges ?? []).filter((e) => e.name && e.kind !== `far`);
  return {
    base: Z2,
    view: Z2,
    city: t.bounds,
    ground: Q2.ground,
    bearing: (Rb.bearingDeg * Math.PI) / 180,
    relief: HIe,
    backdrop() {},
    over(e, t, n) {
      let r = 1 / n.pxPerM;
      ((e.fillStyle = Q2.water),
        (e.strokeStyle = Q2.waterEdge),
        (e.lineWidth = Math.max(r, 0.6)));
      for (let t of i) {
        (e.beginPath(), e4(e, t.polygon));
        for (let n of t.holes ?? []) e4(e, n);
        (e.fill(`evenodd`), e.stroke());
      }
      for (let t of a) {
        ((e.fillStyle = Q2.plateau),
          e.beginPath(),
          e4(e, t.polygon),
          e.fill(),
          (e.strokeStyle = Q2.cliff));
        for (let n of t.edges) {
          let [i, a] = n.from,
            [o, s] = n.to,
            c = Math.hypot(o - i, s - a);
          if (c < 1) continue;
          let l = (o - i) / c,
            u = (s - a) / c;
          if (n.kind === `cliff`) {
            ((e.lineWidth = Math.max(1.6 * r, 1.2)),
              e.beginPath(),
              e.moveTo(i, a),
              e.lineTo(o, s),
              e.stroke());
            let n = Math.max(6, 7 * r),
              d = Math.max(3.5, 5 * r),
              f = -u,
              p = l,
              m = (i + o) / 2 + f * 3,
              h = (a + s) / 2 + p * 3;
            (JIe(t.polygon, m, h) && ((f = -f), (p = -p)),
              (e.lineWidth = Math.max(r, 0.8)),
              e.beginPath());
            for (let t = n / 2; t < c; t += n) {
              let n = i + l * t,
                r = a + u * t;
              (e.moveTo(n, r), e.lineTo(n + f * d, r + p * d));
            }
            e.stroke();
          } else
            ((e.lineWidth = Math.max(r, 0.8)),
              e.setLineDash([4 * r, 4 * r]),
              e.beginPath(),
              e.moveTo(i, a),
              e.lineTo(o, s),
              e.stroke(),
              e.setLineDash([]));
        }
        if (n.pxPerM > 0.5) {
          e.fillStyle = `rgba(240,236,220,0.7)`;
          for (let n of t.stairs) {
            (e.save(), e.translate(n.x, n.z), e.rotate(n.heading));
            for (let t = 0; t < n.length; t += 3)
              e.fillRect(-n.width / 2, -t - 1, n.width, 1);
            e.restore();
          }
        }
      }
    },
    ownExpressways: !0,
    top(e, t, i) {
      let a = 1 / i.pxPerM;
      (e.save(), (e.lineJoin = `round`), (e.lineCap = `butt`));
      for (let t of [0, 1, 2])
        for (let n of o) {
          let r = n.path,
            i = n.levels;
          for (let o = 0; o + 1 < r.length; o++) {
            let s = i[o] < 0 && i[o + 1] < 0;
            (t === 2) === s &&
              (e.beginPath(),
              e.moveTo(r[o][0], r[o][1]),
              e.lineTo(r[o + 1][0], r[o + 1][1]),
              t === 0
                ? ((e.strokeStyle = Q2.deckCase),
                  (e.lineWidth = n.halfWidth * 2 + Math.max(2 * a, 1.5)))
                : t === 1
                  ? ((e.strokeStyle = Q2.deck), (e.lineWidth = n.halfWidth * 2))
                  : ((e.strokeStyle = Q2.trench),
                    (e.lineWidth = n.halfWidth * 2)),
              e.stroke());
          }
        }
      for (let { L: t } of aQ()) {
        ((e.strokeStyle = Q2.deck), (e.lineWidth = rQ * 2), e.beginPath());
        for (let n = 0; n < t.n; n++)
          (n ? e.lineTo : e.moveTo).call(e, t.x[n], t.z[n]);
        e.stroke();
      }
      ((e.strokeStyle = Q2.ramp), (e.lineWidth = Yo.half * 2 + 1));
      for (let t of Zo()) {
        let n = t.at + t.side * Yo.off;
        (e.beginPath(),
          t.axis === `z`
            ? (e.moveTo(n, t.street), e.lineTo(n, t.end))
            : (e.moveTo(t.street, n), e.lineTo(t.end, n)),
          e.stroke());
      }
      ((e.strokeStyle = Q2.edge),
        (e.lineWidth = Math.max(1.4 * a, 1)),
        e.setLineDash([8 * a, 6 * a]),
        e.beginPath(),
        e4(e, n));
      for (let t of r) e4(e, t);
      (e.stroke(), e.setLineDash([]), e.restore());
    },
    labels(n) {
      let { g: r, s: i, W: a, H: c, X: l, Z: u } = n;
      {
        let e = c - 96,
          t = (Rb.bearingDeg * Math.PI) / 180;
        n.free(20, e - 22, 64, e + 22) &&
          ((r.fillStyle = `rgba(10,12,18,0.82)`),
          r.beginPath(),
          r.arc(42, e, 20, 0, Math.PI * 2),
          r.fill(),
          (r.lineWidth = 1.5),
          (r.strokeStyle = `rgba(255,255,255,0.35)`),
          r.stroke(),
          r.save(),
          r.translate(42, e),
          r.rotate(-t),
          (r.fillStyle = `#ff5a5f`),
          r.beginPath(),
          r.moveTo(0, -17),
          r.lineTo(5, -6),
          r.lineTo(-5, -6),
          r.closePath(),
          r.fill(),
          (r.fillStyle = `#fff`),
          (r.font = `700 12px ${n.font}`),
          r.fillText(n.lang === `en` ? `N` : `北`, 0, 3),
          r.restore());
      }
      let d = (e, t) => Math.max(l(e) + 60, Math.min(l(t) - 60, l(n.cx))),
        f = (e, t) => Math.max(u(e) + 60, Math.min(u(t) - 60, u(n.cz))),
        p = (e, t, i, o) => {
          if (t < -40 || t > a + 40 || i < -40 || i > c + 40) return;
          let s = r.measureText(e).width,
            l = parseFloat(/(\d+(?:\.\d+)?)px/.exec(r.font)?.[1] ?? `14`),
            u = o
              ? [
                  l * 0.7,
                  (/[㐀-鿿]/.test(e) ? [...e].length * l * 1.15 : s) / 2,
                ]
              : [s / 2, l * 0.7];
          n.free(t - u[0], i - u[1], t + u[0], i + u[1]) &&
            (o ? Wte(r, e, t, i) : r.fillText(e, t, i));
        };
      if (
        ((r.font = `italic 600 ${Math.round(Math.max(12, Math.min(17, 14 * Math.sqrt(i / 0.5))))}px ${n.font}`),
        (r.fillStyle = `rgba(140,200,255,0.75)`),
        p(n.t(t4.sumida), l((Gp.westX + Gp.farX) / 2), f(Gp.northZ, 860), !0),
        p(
          n.t(t4.kanda),
          d(Ap.west, Ap.mouth),
          u((Ap.top + Ap.bottom) / 2) - 13,
          !1,
        ),
        p(
          n.t(t4.nihonbashi),
          d(Mp.west, Mp.mouth),
          u((Mp.top + Mp.bottom) / 2) + 14,
          !1,
        ),
        i >= 0.3 &&
          p(n.t(t4.moat), l((zp.minX + zp.maxX) / 2), f(zp.minZ, zp.maxZ), !0),
        i >= 0.45 &&
          p(n.t(t4.pond), l((Bp.minX + Bp.maxX) / 2), u(Bp.minZ + 22), !1),
        p(n.t(t4.bay), l(560), u(990), !1),
        i >= 1.4)
      ) {
        ((r.font = `600 10.5px ${n.font}`),
          (r.fillStyle = `rgba(190,226,255,0.9)`),
          (r.lineWidth = 3),
          (r.strokeStyle = `rgba(10,12,18,0.85)`));
        for (let e of s) {
          let t = l((e.minX + e.maxX) / 2),
            i = u((e.minZ + e.maxZ) / 2);
          if (t < -40 || t > a + 40 || i < -20 || i > c + 20) continue;
          let o = n.t(e.name),
            s = r.measureText(o).width;
          n.free(t - s / 2 - 2, i - 7, t + s / 2 + 2, i + 7) &&
            (r.strokeText(o, t, i), r.fillText(o, t, i));
        }
      }
      if (i >= 0.45) {
        r.font = `800 10px ${n.font}`;
        for (let e of o) {
          let t = 0,
            i = 0;
          for (let n = 0; n + 1 < e.path.length; n++) {
            let r = Math.hypot(
              e.path[n + 1][0] - e.path[n][0],
              e.path[n + 1][1] - e.path[n][1],
            );
            r > t && ((t = r), (i = n));
          }
          let o = l((e.path[i][0] + e.path[i + 1][0]) / 2),
            s = u((e.path[i][1] + e.path[i + 1][1]) / 2);
          if (o < -20 || o > a + 20 || s < -20 || s > c + 20) continue;
          let d = Math.max(16, r.measureText(e.route).width + 8);
          n.free(o - d / 2, s - 8, o + d / 2, s + 8) &&
            ((r.fillStyle = `rgba(18,110,72,0.95)`),
            r.beginPath(),
            r.roundRect(o - d / 2, s - 7.5, d, 15, 4),
            r.fill(),
            (r.lineWidth = 1.2),
            (r.strokeStyle = `rgba(255,255,255,0.85)`),
            r.stroke(),
            (r.fillStyle = `#fff`),
            r.fillText(e.route, o, s + 0.5));
        }
      }
      if (i >= 0.3) {
        r.font = `700 ${i >= 1 ? 11 : 10}px ${n.font}`;
        for (let e of KIe()) {
          let t = l(e.x),
            i = u(e.z);
          if (t < -40 || t > a + 40 || i < -20 || i > c + 20) continue;
          let o =
              n.lang === `en`
                ? e.en
                : n.lang === `ja`
                  ? e.ja
                  : e.ja.replace(`宝`, `寶`).replace(`が関`, `關`),
            s = r.measureText(o).width + 10;
          n.free(t - s / 2, i - 9, t + s / 2, i + 9) &&
            ((r.fillStyle = e.on
              ? `rgba(22,130,70,0.95)`
              : `rgba(30,90,170,0.95)`),
            r.beginPath(),
            r.roundRect(t - s / 2, i - 8, s, 16, 4),
            r.fill(),
            (r.lineWidth = 1.2),
            (r.strokeStyle = `rgba(255,255,255,0.9)`),
            r.stroke(),
            (r.fillStyle = `#fff`),
            r.fillText(o, t, i + 0.5));
        }
      }
      if (i >= 1.4) {
        ((r.font = `600 ${i >= 2.4 ? 12 : 11}px ${n.font}`),
          (r.fillStyle = `rgba(232,228,214,0.62)`),
          (r.lineWidth = 3),
          (r.strokeStyle = `rgba(12,14,20,0.7)`));
        for (let e of mv) {
          let t = l((e.minX + e.maxX) / 2),
            o = u((e.minZ + e.maxZ) / 2);
          if (t < -60 || t > a + 60 || o < -20 || o > c + 20) continue;
          let s = n.t(e.town),
            d = r.measureText(s).width;
          d > (e.maxX - e.minX) * i ||
            (n.free(t - d / 2 - 2, o - 8, t + d / 2 + 2, o + 8) &&
              (r.strokeText(s, t, o), r.fillText(s, t, o)));
        }
      }
      if (i < 0.75) {
        let o = Math.round(
          Math.max(14, Math.min(24, 20 * Math.sqrt(i / 0.45))),
        );
        for (let i of e.districts) {
          let e = n4[i.id],
            s = t.bounds,
            d = l(
              e
                ? e.x
                : (Math.max(i.minX, s.minX) + Math.min(i.maxX, s.maxX)) / 2,
            ),
            f = u(
              e
                ? e.z
                : (Math.max(i.minZ, s.minZ) + Math.min(i.maxZ, s.maxZ)) / 2,
            );
          if (d < -100 || d > a + 100 || f < -40 || f > c + 40) continue;
          let p = n.t(i.name).split(/・|, | & /)[0];
          r.font = `800 ${o}px ${n.font}`;
          let m = r.measureText(p).width;
          (n.free(d - m / 2, f - o * 0.7, d + m / 2, f + o * 0.7),
            (r.lineWidth = 4),
            (r.strokeStyle = `rgba(8,10,16,0.6)`),
            r.strokeText(p, d, f),
            (r.fillStyle = `rgba(255,255,255,0.86)`),
            r.fillText(p, d, f));
        }
      }
      r.font = `800 ${Math.round(Math.max(12, Math.min(20, 16 * Math.sqrt(i / 0.5))))}px ${n.font}`;
      for (let e of GIe) {
        let t = l(e.x),
          i = u(e.z);
        if (t < -80 || t > a + 80 || i < -20 || i > c + 20) continue;
        let o = (e.mark ? `▲ ` : ``) + n.t(e.name),
          s = r.measureText(o).width;
        n.free(t - s / 2, i - 10, t + s / 2, i + 10) &&
          ((r.fillStyle = e.mark
            ? `rgba(216,206,255,0.7)`
            : `rgba(255,255,255,0.24)`),
          r.fillText(o, t, i));
      }
    },
    districtAnchor: (e) => n4[e],
    mapStreet: (e, t) =>
      !e.lane && !e.unnamed && (t >= 0.6 || e.kind === `boulevard`),
  };
}
function JIe(e, t, n) {
  let r = !1;
  for (let i = 0, a = e.length - 1; i < e.length; a = i++) {
    let o = e[i][0],
      s = e[i][1],
      c = e[a][0],
      l = e[a][1];
    s > n != l > n && t < ((c - o) * (n - s)) / (l - s) + o && (r = !r);
  }
  return r;
}
r.add({
  "SHIBUYA SKYE · 東京鐵塔": `SHIBUYA SKYE・東京タワー`,
  澀谷區: `渋谷区`,
});
