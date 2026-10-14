// tokyo/assets/region-tokyo-BcM3fReU 244 — math
// Lines 97814-98109 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function d1(e) {
  let t = e.dataset,
    n = s1(),
    r = t.waterBodies ?? [],
    i = t.terrain ?? [],
    a = t.expressways ?? [],
    o = (t.bridges ?? []).filter((e) => e.name && e.kind !== `far`);
  return {
    base: n1,
    view: n1,
    city: t.bounds,
    ground: r1.ground,
    bearing: (jw.bearingDeg * Math.PI) / 180,
    relief: a1,
    backdrop() {},
    over(e, t, n) {
      let a = 1 / n.pxPerM;
      ((e.fillStyle = r1.water),
        (e.strokeStyle = r1.waterEdge),
        (e.lineWidth = Math.max(a, 0.6)));
      for (let t of r) {
        (e.beginPath(), o1(e, t.polygon));
        for (let n of t.holes ?? []) o1(e, n);
        (e.fill(`evenodd`), e.stroke());
      }
      for (let t of i) {
        ((e.fillStyle = r1.plateau),
          e.beginPath(),
          o1(e, t.polygon),
          e.fill(),
          (e.strokeStyle = r1.cliff));
        for (let n of t.edges) {
          let [r, i] = n.from,
            [o, s] = n.to,
            c = Math.hypot(o - r, s - i);
          if (c < 1) continue;
          let l = (o - r) / c,
            u = (s - i) / c;
          if (n.kind === `cliff`) {
            ((e.lineWidth = Math.max(1.6 * a, 1.2)),
              e.beginPath(),
              e.moveTo(r, i),
              e.lineTo(o, s),
              e.stroke());
            let n = Math.max(6, 7 * a),
              d = Math.max(3.5, 5 * a),
              f = -u,
              p = l,
              m = (r + o) / 2 + f * 3,
              h = (i + s) / 2 + p * 3;
            (f1(t.polygon, m, h) && ((f = -f), (p = -p)),
              (e.lineWidth = Math.max(a, 0.8)),
              e.beginPath());
            for (let t = n / 2; t < c; t += n) {
              let n = r + l * t,
                a = i + u * t;
              (e.moveTo(n, a), e.lineTo(n + f * d, a + p * d));
            }
            e.stroke();
          } else
            ((e.lineWidth = Math.max(a, 0.8)),
              e.setLineDash([4 * a, 4 * a]),
              e.beginPath(),
              e.moveTo(r, i),
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
    top(e, t, r) {
      let i = 1 / r.pxPerM;
      (e.save(), (e.lineJoin = `round`), (e.lineCap = `butt`));
      for (let t of [0, 1, 2])
        for (let n of a) {
          let r = n.path,
            a = n.levels;
          for (let o = 0; o + 1 < r.length; o++) {
            let s = a[o] < 0 && a[o + 1] < 0;
            (t === 2) === s &&
              (e.beginPath(),
              e.moveTo(r[o][0], r[o][1]),
              e.lineTo(r[o + 1][0], r[o + 1][1]),
              t === 0
                ? ((e.strokeStyle = r1.deckCase),
                  (e.lineWidth = n.halfWidth * 2 + Math.max(2 * i, 1.5)))
                : t === 1
                  ? ((e.strokeStyle = r1.deck), (e.lineWidth = n.halfWidth * 2))
                  : ((e.strokeStyle = r1.trench),
                    (e.lineWidth = n.halfWidth * 2)),
              e.stroke());
          }
        }
      ((e.strokeStyle = r1.edge),
        (e.lineWidth = Math.max(1.4 * i, 1)),
        e.setLineDash([8 * i, 6 * i]),
        e.beginPath(),
        o1(e, n),
        e.stroke(),
        e.setLineDash([]),
        e.restore());
    },
    labels(n) {
      let { g: r, s: i, W: s, H: c, X: l, Z: u } = n;
      {
        let e = c - 96,
          t = (jw.bearingDeg * Math.PI) / 180;
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
        p = (e, t, i, a) => {
          if (t < -40 || t > s + 40 || i < -40 || i > c + 40) return;
          let o = r.measureText(e).width,
            l = parseFloat(/(\d+(?:\.\d+)?)px/.exec(r.font)?.[1] ?? `14`),
            u = a
              ? [
                  l * 0.7,
                  (/[㐀-鿿]/.test(e) ? [...e].length * l * 1.15 : o) / 2,
                ]
              : [o / 2, l * 0.7];
          n.free(t - u[0], i - u[1], t + u[0], i + u[1]) &&
            (a ? ni(r, e, t, i) : r.fillText(e, t, i));
        };
      if (
        ((r.font = `italic 600 ${Math.round(Math.max(12, Math.min(17, 14 * Math.sqrt(i / 0.5))))}px ${n.font}`),
        (r.fillStyle = `rgba(140,200,255,0.75)`),
        p(n.t(c1.sumida), l((yg.westX + yg.farX) / 2), f(yg.northZ, 860), !0),
        p(
          n.t(c1.kanda),
          d(ug.west, ug.mouth),
          u((ug.top + ug.bottom) / 2) - 13,
          !1,
        ),
        p(
          n.t(c1.nihonbashi),
          d(fg.west, fg.mouth),
          u((fg.top + fg.bottom) / 2) + 14,
          !1,
        ),
        i >= 0.3 &&
          p(n.t(c1.moat), l((pg.minX + pg.maxX) / 2), f(pg.minZ, pg.maxZ), !0),
        i >= 0.45 &&
          p(n.t(c1.pond), l((mg.minX + mg.maxX) / 2), u(mg.minZ + 22), !1),
        p(n.t(c1.bay), l(560), u(990), !1),
        i >= 1.4)
      ) {
        ((r.font = `600 10.5px ${n.font}`),
          (r.fillStyle = `rgba(190,226,255,0.9)`),
          (r.lineWidth = 3),
          (r.strokeStyle = `rgba(10,12,18,0.85)`));
        for (let e of o) {
          let t = l((e.minX + e.maxX) / 2),
            i = u((e.minZ + e.maxZ) / 2);
          if (t < -40 || t > s + 40 || i < -20 || i > c + 20) continue;
          let a = n.t(e.name),
            o = r.measureText(a).width;
          n.free(t - o / 2 - 2, i - 7, t + o / 2 + 2, i + 7) &&
            (r.strokeText(a, t, i), r.fillText(a, t, i));
        }
      }
      if (i >= 0.45) {
        r.font = `800 10px ${n.font}`;
        for (let e of a) {
          let t = 0,
            i = 0;
          for (let n = 0; n + 1 < e.path.length; n++) {
            let r = Math.hypot(
              e.path[n + 1][0] - e.path[n][0],
              e.path[n + 1][1] - e.path[n][1],
            );
            r > t && ((t = r), (i = n));
          }
          let a = l((e.path[i][0] + e.path[i + 1][0]) / 2),
            o = u((e.path[i][1] + e.path[i + 1][1]) / 2);
          if (a < -20 || a > s + 20 || o < -20 || o > c + 20) continue;
          let d = Math.max(16, r.measureText(e.route).width + 8);
          n.free(a - d / 2, o - 8, a + d / 2, o + 8) &&
            ((r.fillStyle = `rgba(18,110,72,0.95)`),
            r.beginPath(),
            r.roundRect(a - d / 2, o - 7.5, d, 15, 4),
            r.fill(),
            (r.lineWidth = 1.2),
            (r.strokeStyle = `rgba(255,255,255,0.85)`),
            r.stroke(),
            (r.fillStyle = `#fff`),
            r.fillText(e.route, a, o + 0.5));
        }
      }
      if (i >= 1.4) {
        ((r.font = `600 ${i >= 2.4 ? 12 : 11}px ${n.font}`),
          (r.fillStyle = `rgba(232,228,214,0.62)`),
          (r.lineWidth = 3),
          (r.strokeStyle = `rgba(12,14,20,0.7)`));
        for (let e of WS) {
          let t = l((e.minX + e.maxX) / 2),
            a = u((e.minZ + e.maxZ) / 2);
          if (t < -60 || t > s + 60 || a < -20 || a > c + 20) continue;
          let o = n.t(e.town),
            d = r.measureText(o).width;
          d > (e.maxX - e.minX) * i ||
            (n.free(t - d / 2 - 2, a - 8, t + d / 2 + 2, a + 8) &&
              (r.strokeText(o, t, a), r.fillText(o, t, a)));
        }
      }
      if (i < 0.75) {
        let a = Math.round(
          Math.max(14, Math.min(24, 20 * Math.sqrt(i / 0.45))),
        );
        for (let i of e.districts) {
          let e = u1[i.id],
            o = t.bounds,
            d = l(
              e
                ? e.x
                : (Math.max(i.minX, o.minX) + Math.min(i.maxX, o.maxX)) / 2,
            ),
            f = u(
              e
                ? e.z
                : (Math.max(i.minZ, o.minZ) + Math.min(i.maxZ, o.maxZ)) / 2,
            );
          if (d < -100 || d > s + 100 || f < -40 || f > c + 40) continue;
          let p = n.t(i.name).split(/・|, | & /)[0];
          r.font = `800 ${a}px ${n.font}`;
          let m = r.measureText(p).width;
          (n.free(d - m / 2, f - a * 0.7, d + m / 2, f + a * 0.7),
            (r.lineWidth = 4),
            (r.strokeStyle = `rgba(8,10,16,0.6)`),
            r.strokeText(p, d, f),
            (r.fillStyle = `rgba(255,255,255,0.86)`),
            r.fillText(p, d, f));
        }
      }
      r.font = `800 ${Math.round(Math.max(12, Math.min(20, 16 * Math.sqrt(i / 0.5))))}px ${n.font}`;
      for (let e of l1) {
        let t = l(e.x),
          i = u(e.z);
        if (t < -80 || t > s + 80 || i < -20 || i > c + 20) continue;
        let a = (e.mark ? `▲ ` : ``) + n.t(e.name),
          o = r.measureText(a).width;
        n.free(t - o / 2, i - 10, t + o / 2, i + 10) &&
          ((r.fillStyle = e.mark
            ? `rgba(216,206,255,0.7)`
            : `rgba(255,255,255,0.24)`),
          r.fillText(a, t, i));
      }
    },
    districtAnchor: (e) => u1[e],
    mapStreet: (e, t) =>
      !e.lane && !e.unnamed && (t >= 0.6 || e.kind === `boulevard`),
  };
}
function f1(e, t, n) {
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
r.add({ "秋葉原 · 晴空塔": `秋葉原・スカイツリー` });
