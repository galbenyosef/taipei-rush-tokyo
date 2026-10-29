// tokyo/assets/region-tokyo-A7LxHjud 50 — math
// Lines 24069-24418 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function jl(e, t, n, r, i) {
  let a = t.walls.get(r.id);
  if (!a) return;
  let o = i?.white;
  for (let [s, c] of Al(n, r)) {
    let l = n.deck.at(r.sc) - Bc - 0.9;
    for (let u = s; u < c - 0.01; u += 4) {
      let d = Math.min(c, u + 4);
      for (let f of [-1, 1]) {
        let p = a[f < 0 ? 0 : 1];
        if (!Number.isFinite(p)) continue;
        let m = $c(n, (u + d) / 2, p);
        if (!wie(m.x, m.z)) {
          if (i) {
            let a = Ol(t, n);
            for (let t = u; t < d - 0.01; t += 2) {
              let s = Math.min(d, t + 2),
                c = Math.floor(t / 2) % 2 ? 1 : 0.94,
                l = Math.floor(t / 6),
                u = sae(a, (t + s) / 2, f),
                m =
                  u <= El
                    ? u < 2.6
                      ? `concGates`
                      : u < 5.2
                        ? de(r.id, `conc2`, f, Math.floor(t / 2)) % 3
                          ? `concTickets`
                          : `concPassage`
                        : aae(r.id, f, l)
                    : cae(r.id, f, l);
              (m === `shutter`
                ? (e.setMaterial(0.7, 0.3, 0, 0),
                  e.setColor(R(220 * c), R(222 * c), R(220 * c)))
                : (e.setMaterial(0.25, 0.3, 0.17, 1),
                  e.setColor(R(168 * c), R(174 * c), R(176 * c))),
                el(
                  e,
                  n,
                  t + 0.08,
                  s - 0.08,
                  p,
                  p,
                  0.15,
                  2.95,
                  0.15,
                  2.95,
                  f,
                  i.uv(m),
                  +(f < 0),
                  f < 0 ? 0 : 1,
                ),
                e.setMaterial(0.7, 0.4, 0, 0),
                Yc(e, [96, 100, 104]),
                el(
                  e,
                  n,
                  t - 0.08,
                  t + 0.08,
                  p + f * 0.04,
                  p + f * 0.04,
                  0.15,
                  2.95,
                  0.15,
                  2.95,
                  f,
                  o,
                ));
            }
            (e.setMaterial(0.85, 0, 0, 0),
              Yc(e, [232, 228, 220]),
              tl(
                e,
                n,
                u,
                d,
                p,
                p,
                2.95,
                l - 0.45,
                2.95,
                l - 0.45,
                f,
                i.uv(`conc`),
                4,
                0.05,
                0.05 + (l - 3.4) / 4,
              ),
              Yc(e, [92, 96, 100]),
              el(
                e,
                n,
                u,
                d,
                p + f * 0.04,
                p + f * 0.04,
                l - 0.45,
                l,
                l - 0.45,
                l,
                f,
                o,
              ),
              Yc(e, [176, 172, 166]));
            for (let t = Math.ceil(u / 4) * 4; t < d; t += 4)
              al(e, n, t, p + f * 0.12, 0.14, 2.95, l - 0.45, 0.22, o);
            (Yc(e, [120, 124, 128]),
              rl(
                e,
                n,
                u,
                d,
                f < 0 ? p - 0.9 : p,
                f < 0 ? p : p + 0.9,
                3.05,
                3.05,
                !1,
                o,
              ),
              rl(
                e,
                n,
                u,
                d,
                f < 0 ? p - 0.9 : p,
                f < 0 ? p : p + 0.9,
                3.2,
                3.2,
                !0,
                o,
              ));
            let m = `jrname:${r.name.ja}`;
            if (i.has(m) && l - 0.6 > 5)
              for (let a of [r.sc - 20, r.sc + 20]) {
                let l = a,
                  h = Math.sign(a - r.sc);
                for (let e = 0; e < 4; e++) {
                  let e = $c(n, l - 3.8, p),
                    r = $c(n, l + 3.8, p);
                  if (!kl(t, n, e.x, e.z, 4) && !kl(t, n, r.x, r.z, 4)) break;
                  l += h * 4;
                }
                l >= u &&
                  l < d &&
                  l - 3.8 >= s &&
                  l + 3.8 <= c &&
                  (e.setMaterial(0.5, 0.4, 0, 0),
                  Yc(e, [86, 90, 94]),
                  al(e, n, l, p + f * 0.36, 0.08, 3.55, 5.15, 3.75, o),
                  e.setMaterial(0.35, 0, 0.3, 1),
                  e.setColor(R(255), R(255), R(255)),
                  ol(e, n, l, p + f * 0.45, f, 7.2, 3.6, 1.5, i.uv(m)));
              }
          } else
            (e.setMaterial(0.8, 0.1, 0.25, 1),
              Yc(e, [150, 160, 166]),
              el(e, n, u, d, p, p, 0.15, 2.95, 0.15, 2.95, f),
              e.setMaterial(0.85, 0, 0, 0),
              Yc(e, Jc.stationWall),
              el(e, n, u, d, p, p, 2.95, l, 2.95, l, f));
        }
      }
    }
    Number.isFinite(a[0]) &&
      Number.isFinite(a[1]) &&
      (e.setMaterial(0.85, 0, 0, 0),
      Yc(e, Jc.stationWall, 0.95),
      il(e, n, s, a[0], a[1], 0.15, l, -1, o),
      il(e, n, c, a[0], a[1], 0.15, l, 1, o));
  }
}
function Ml(e, t) {
  return (e.path.at(t, Xc), Math.atan2(Xc.tx, -Xc.tz));
}
function lae(e, t, n) {
  let r = e.plan;
  for (let i of e.m.corridors)
    if (_l(i, t)) {
      dl(i, t, 6, hl);
      for (let e = 0; e < hl.length; e += 2) {
        let t = hl[e],
          a = hl[e + 1],
          o = cl(i, (t + a) / 2);
        if (o === Zs.Frame)
          for (let e = Math.ceil(t / Wc) * Wc; e < a; e += Wc) {
            let t = i.deck.at(e),
              a = i.edge0.at(e),
              o = i.edge1.at(e),
              s = Math.max(2, Math.round((o - a) / 8.5) + 1);
            for (let c = 0; c < s; c++) {
              let l = a + 1.6 + ((o - a - 3.2) * c) / (s - 1),
                u = $c(i, e, l);
              ul(r, u.x, u.z) &&
                !Fc(u.x, u.z) &&
                n.circle(u.x, u.z, 0.6, t - Bc - 0.9);
            }
          }
        else if (o === Zs.Upper && i.upper)
          for (let e = Math.ceil(t / 12) * 12; e < a; e += 12) {
            let t = Tl(i, e, i.upper.colOnGround),
              a = $c(i, e, i.upper.colOnGround);
            t &&
              !t.onDeck &&
              ul(r, a.x, a.z) &&
              !Fc(a.x, a.z) &&
              n.circle(a.x, a.z, 0.65, i.deck.at(e) - Bc - 0.9);
          }
        else if (o === Zs.Brick || o === Zs.Bank) {
          let e = (t + a) / 2,
            r = i.edge0.at(e),
            o = i.edge1.at(e),
            s = $c(i, e, (r + o) / 2);
          n.obb(
            s.x,
            s.z,
            (o - r) / 2,
            (a - t) / 2,
            Ml(i, e),
            i.deck.at(e) - Bc,
          );
        } else if (o === Zs.Girder)
          for (let e of i.girders)
            for (let o of [e.s0, e.s1]) {
              if (o < t || o >= a) continue;
              let e = i.deck.at(o),
                s = i.edge0.at(o) + 0.6,
                c = i.edge1.at(o) - 0.6,
                l = Math.max(2, Math.round((c - s) / 7) + 1);
              for (let t = 0; t < l; t++) {
                let a = $c(i, o, s + 0.6 + ((c - s - 1.2) * t) / (l - 1));
                ul(r, a.x, a.z) &&
                  !Fc(a.x, a.z) &&
                  n.circle(a.x, a.z, 0.75, e - Vc - Hc);
              }
            }
      }
      for (let r of i.platforms) {
        if ((i.path.pos(r.sc, 0, B), !zc(t, B.x, B.z))) continue;
        let a = e.walls.get(r.id);
        if (!a) continue;
        let o = i.deck.at(r.sc) - Bc - 0.9;
        for (let [e, t] of Al(i, r)) {
          for (let r = e; r < t - 0.01; r += 8) {
            let e = Math.min(t, r + 8),
              s = (r + e) / 2;
            for (let t of a) {
              if (!Number.isFinite(t)) continue;
              let a = $c(i, s, t);
              n.obb(a.x, a.z, 0.2, (e - r) / 2, Ml(i, s), o);
            }
          }
          if (Number.isFinite(a[0]) && Number.isFinite(a[1]))
            for (let r of [e, t]) {
              let e = $c(i, r, (a[0] + a[1]) / 2);
              n.obb(e.x, e.z, (a[1] - a[0]) / 2, 0.2, Ml(i, r), o);
            }
        }
      }
    }
  for (let r of e.entrances) {
    if (r.kind !== `metro` || r.hl < 1 || !zc(t, r.cx, r.cz)) continue;
    let e = Math.sin(r.heading),
      i = -Math.cos(r.heading),
      a = Math.cos(r.heading),
      o = Math.sin(r.heading);
    (n.obb(
      r.cx - a * (r.hw - 0.08) + e * 0.3,
      r.cz - o * (r.hw - 0.08) + i * 0.3,
      0.1,
      r.hl - 0.3,
      r.heading,
      1,
    ),
      n.obb(
        r.cx + a * (r.hw - 0.08) + e * 0.3,
        r.cz + o * (r.hw - 0.08) + i * 0.3,
        0.1,
        r.hl - 0.3,
        r.heading,
        1,
      ),
      n.obb(
        r.cx + e * (r.hl - 0.08),
        r.cz + i * (r.hl - 0.08),
        r.hw,
        0.1,
        r.heading,
        1,
      ),
      n.obb(
        r.cx + e * 0.3,
        r.cz + i * 0.3,
        r.hw - 0.2,
        r.hl - 0.4,
        r.heading,
        0.9,
      ));
  }
  let i = Rc;
  for (let r of e.entrances) {
    if (r.kind !== `jr` || !r.tickets || !zc(t, r.cx, r.cz)) continue;
    let e = Math.sin(r.heading),
      a = -Math.cos(r.heading),
      o = Math.cos(r.heading),
      s = Math.sin(r.heading),
      c = r.tickets * (r.hw + i.gap + (i.w * i.n) / 2),
      l = -i.d / 2 - 0.05;
    n.obb(
      r.cx + o * c + e * l,
      r.cz + s * c + a * l,
      (i.w * i.n) / 2,
      i.d / 2,
      r.heading,
      0.15 + i.h,
    );
  }
}
var Nl = (e, t, n) => {
    let r = e.surfaceAt(t, n);
    return r === `lot` || r === `park` || r === `plaza`;
  },
  Pl = (e, t, n) => {
    let r = e.surfaceAt(t, n);
    return (
      r !== `road` &&
      r !== `water` &&
      r !== `terrain` &&
      !Il(e, t, n) &&
      !Ic(t - 0.05, n - 0.05, t + 0.05, n + 0.05)
    );
  };
function uae(e, t, n) {
  let r = Rc,
    i = Math.sin(n.heading),
    a = -Math.cos(n.heading),
    o = Math.cos(n.heading),
    s = Math.sin(n.heading);
  for (let c of [1, -1]) {
    let l = !0;
    for (let u = 0; u <= r.n * 2 && l; u++) {
      let d = c * (n.hw + r.gap + (r.w * r.n * u) / (r.n * 2));
      for (let r of [-0.4, -1.4]) {
        let c = n.cx + o * d + i * r,
          u = n.cz + s * d + a * r;
        (!Pl(e, c, u) || Fl(t, c, u)) && (l = !1);
      }
    }
    if (l) return c;
  }
  return 0;
}
