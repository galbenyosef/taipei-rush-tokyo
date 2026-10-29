// tokyo/assets/region-tokyo-55J_WESF 54 — axis
// Lines 25233-25612 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var Ql = 1.5,
  $l = 1.75,
  eu = 0.5,
  pae = class {
    plan;
    arms = [];
    busStops = [];
    crosswalks = [];
    zebra;
    guides = [];
    gantries = [];
    deckLamps = [];
    constructor(e) {
      this.plan = e;
      let t = (e, t) => (!e || t.halfWidth > e.halfWidth ? t : e);
      for (let n of e.nodes) {
        let e = { E: null, W: null, N: null, S: null };
        for (let r of n.roads)
          r.axis === `x`
            ? (n.x > r.from + eu && (e.W = t(e.W, r)),
              n.x < r.to - eu && (e.E = t(e.E, r)))
            : (n.z > r.from + eu && (e.N = t(e.N, r)),
              n.z < r.to - eu && (e.S = t(e.S, r)));
        this.arms.push(e);
      }
      this.zebra = new Uint8Array(e.nodes.length);
      for (let t of e.nodes) {
        if (t.kind === `end` || !To(t)) continue;
        this.zebra[t.id] = 1;
        let e = this.arms[t.id];
        for (let [n, r] of [
          [`E`, 1],
          [`W`, -1],
          [`S`, 1],
          [`N`, -1],
        ]) {
          let i = e[n];
          if (!i || i.pedestrian) continue;
          let a = i.axis === `x` ? t.halfX : t.halfZ,
            o = (i.axis === `x` ? t.x : t.z) + r * (a + $l),
            s = i.at - i.halfWidth,
            c = i.at + i.halfWidth;
          i.axis === `x`
            ? this.crosswalks.push({
                nodeId: t.id,
                roadAxis: `x`,
                x0: o,
                z0: s,
                x1: o,
                z1: c,
                width: Ql * 2,
              })
            : this.crosswalks.push({
                nodeId: t.id,
                roadAxis: `z`,
                x0: s,
                z0: o,
                x1: c,
                z1: o,
                width: Ql * 2,
              });
        }
      }
      (this.placeBusStops(), this.placeGuides(), this.placeShuto());
    }
    placeGuides() {
      let e = this.plan,
        t = e.side,
        n = (e, t, n, r, i) => {
          let a = null,
            o = -1;
          for (let [s, c, l] of mae) {
            if (i.includes(s)) continue;
            let u = c - e,
              d = l - t,
              f = Math.hypot(u, d);
            if (f < 260) continue;
            let p = (u * n + d * r) / f;
            if (p < 0.72) continue;
            let m = p * 2 - f / 2500;
            m > o && ((o = m), (a = s));
          }
          return a;
        };
      for (let r of e.nodes)
        if (
          r.signal &&
          r.kind === `cross` &&
          !(r.roads.filter((e) => wo(e)).length < 2)
        )
          for (let i of r.in) {
            let a = e.links[i],
              o = a.road;
            if (
              !wo(o) ||
              a.pedestrian ||
              a.length < 70 ||
              o.elevated ||
              !(ge(a.id, `guide`) & 3)
            )
              continue;
            let s = -a.dz,
              c = a.dx,
              l = n(r.x, r.z, a.dx, a.dz, []),
              u = n(r.x, r.z, -s, -c, l ? [l] : []),
              d = n(r.x, r.z, s, c, [l, u].filter(Boolean));
            if ([l, u, d].filter(Boolean).length < 2) continue;
            let f = a.length - Math.min(45, a.length * 0.55),
              p = s * t,
              m = c * t,
              h = a.sx + a.dx * f + p * (o.halfWidth + 0.9),
              g = a.sz + a.dz * f + m * (o.halfWidth + 0.9),
              _ = Math.min(o.lanesPerDir * e.laneWidth * 0.8 + 1.2, 8.5),
              v = {
                px: h,
                pz: g,
                fx: -a.dx,
                fz: -a.dz,
                ax: -p,
                az: -m,
                reach: _,
                route: hae[o.id],
                ahead: l ? tu(l) : void 0,
                left: u ? tu(u) : void 0,
                right: d ? tu(d) : void 0,
                key: ``,
              };
            ((v.key = `g|${l}|${u}|${d}|${v.route ?? ``}`),
              this.guides.push(v));
          }
    }
    placeShuto() {
      let e = this.plan.dataset.expressways ?? [],
        t = Wl(this.plan).rail;
      for (let n of e) {
        if (n.loop) {
          fae(this.deckLamps, this.gantries);
          continue;
        }
        let e = gae[n.route] ?? [],
          r = yo(`streets.shuto.${_ae[n.route] ?? `c1`}`),
          i = { ja: r.ja, en: r.en ?? `` },
          a = 0;
        for (let o = 0; o + 1 < n.path.length; o++) {
          let [s, c] = n.path[o],
            [l, u] = n.path[o + 1],
            d = Math.hypot(l - s, u - c);
          if (d < 1) continue;
          let f = (l - s) / d,
            p = (u - c) / d,
            m = n.levels[o],
            h = n.levels[o + 1],
            g = (e, n, r, i) => r < 12 && Bl(t, e, n, i);
          for (let e = 24; e < d - 24; e += 48) {
            let t = m + ((h - m) * e) / d;
            t >= 5 &&
              !g(s + f * e, c + p * e, t, 3) &&
              this.deckLamps.push({
                x: s + f * e,
                z: c + p * e,
                y: t,
                ux: f,
                uz: p,
              });
          }
          for (let t = 60; t < d - 40; t += 230) {
            let o = m + ((h - m) * t) / d;
            if (o < 5 || g(s + f * t, c + p * t, o, n.halfWidth + 1)) continue;
            let l = (t) => {
              let o = e.length
                  ? yo(`streets.shuto.${e[(a + t) % e.length]}`)
                  : r,
                s = { ja: o.ja, en: o.en ?? `` };
              return (a + t) % 2 == 0
                ? { top: s, exit: !0 }
                : { top: i, sub: s, route: n.route };
            };
            (this.gantries.push({
              x: s + f * t,
              z: c + p * t,
              y: o,
              ux: f,
              uz: p,
              half: n.halfWidth,
              fwd: l(0),
              back: l(1),
            }),
              a++);
          }
        }
      }
    }
    cornerHalf(e, t, n) {
      let r = this.arms[e.id],
        i = t > 0 ? r.E : r.W,
        a = n > 0 ? r.S : r.N;
      return [a ? a.halfWidth : e.halfX, i ? i.halfWidth : e.halfZ];
    }
    runBetween(e, t, n, r) {
      let i = (t) => {
          let n = 0;
          for (let r of t.roads)
            r !== e && r.axis !== e.axis && (n = Math.max(n, r.halfTotal));
          return n;
        },
        a = e.axis === `x` ? t.x : t.z,
        o = e.axis === `x` ? n.x : n.z,
        s = a + (t.kind === `end` ? 0 : i(t)) + r,
        c = o - (n.kind === `end` ? 0 : i(n)) - r;
      return c - s > 1 ? [s, c] : null;
    }
    runRange(e, t, n) {
      let r = this.runBetween(e, t, n, 0.6);
      if (!r) return null;
      let [i, a] = r;
      return (
        this.zebra[t.id] &&
          (i = Math.max(
            i,
            (e.axis === `x` ? t.x + t.halfX : t.z + t.halfZ) + 3.8,
          )),
        this.zebra[n.id] &&
          (a = Math.min(
            a,
            (e.axis === `x` ? n.x - n.halfX : n.z - n.halfZ) - 3.8,
          )),
        a - i < 2 ? null : [i, a]
      );
    }
    primaryLights(e, t, n, r) {
      let i = this.runRange(e, t, n);
      if (!i) return null;
      let [a, o] = i,
        s = e.axis === `x` ? (a + o) / 2 : e.at,
        c = e.axis === `x` ? e.at : (a + o) / 2,
        l = iu(this.plan, e, s, c);
      if (!wo(e) && !l) return null;
      let u = [];
      for (let t of this.busStops)
        t.road === e &&
          t.side === r &&
          t.t > a &&
          t.t < o &&
          u.push([
            t.t - (t.shelter ? 4.5 : 2.2),
            t.t + (t.shelter ? 4.5 : 2.2),
          ]);
      for (let t of Ao(this.plan))
        t.road === e && t.side === r && u.push(No(t));
      let d = l ? 18 : 30,
        f = l ? 6 : r > 0 ? 8 : 23,
        p = [];
      for (let e = a + f; e < o - 3; e += d)
        u.some(([t, n]) => e + 0.6 > t && e - 0.6 < n) || p.push(e);
      return { ts: p, kind: l ? (wo(e) ? `lantern` : `slim`) : `tall` };
    }
    nodesOf(e) {
      let t = this.nodesByRoad.get(e);
      return (
        t ||
          ((t = this.plan.nodes
            .filter((t) => t.roads.includes(e))
            .sort((t, n) => (e.axis === `x` ? t.x - n.x : t.z - n.z))),
          this.nodesByRoad.set(e, t)),
        t
      );
    }
    nodesByRoad = new Map();
    placeBusStops() {
      let e = this.plan,
        t = e.laneWidth,
        n = 0;
      for (let r of e.roads) {
        if (
          r.pedestrian ||
          (r.kind !== `boulevard` && r.kind !== `arterial`) ||
          r.elevated
        )
          continue;
        let i = this.nodesOf(r);
        for (let a = 0; a + 1 < i.length; a++) {
          let o = this.runBetween(r, i[a], i[a + 1], 0);
          if (!(!o || o[1] - o[0] < 80))
            for (let i of [-1, 1]) {
              let s = ge(e.dataset.seed, `tokyo-bus`, r.id, a, i);
              if (s % 3 == 0) continue;
              let c = le(r.axis, i, e.side),
                l = (o[0] + o[1]) / 2 + c * (6 + (s % 11)),
                u = i * (r.halfWidth - t / 2),
                d = i * (r.halfWidth + 0.55),
                f = (e, t) =>
                  r.axis === `x`
                    ? { x: e, z: r.at + t }
                    : { x: r.at + t, z: e };
              if (Po(e, r, i, l - 20, l + 20)) continue;
              let p = f(l, u),
                m = f(l, d),
                h = f(l - c * 2.5, i * (r.halfWidth + 1.8)),
                g =
                  r.axis === `x`
                    ? c > 0
                      ? Math.PI / 2
                      : -Math.PI / 2
                    : c > 0
                      ? Math.PI
                      : 0,
                _ =
                  r.axis === `x`
                    ? i > 0
                      ? 0
                      : Math.PI
                    : i > 0
                      ? -Math.PI / 2
                      : Math.PI / 2,
                v = r.halfTotal - r.halfWidth >= 5 && (s >> 4) % 2 == 0;
              this.busStops.push({
                id: n++,
                x: h.x,
                z: h.z,
                heading: _,
                roadId: r.id,
                curbX: p.x,
                curbZ: p.z,
                busHeading: g,
                px: m.x,
                pz: m.z,
                side: i,
                t: l,
                road: r,
                shelter: v,
              });
            }
        }
      }
    }
  },
  mae = [
    [`ueno`, -110, -1190],
    [`akihabara`, -35, -640],
    [`kanda`, -35, -390],
    [`nihonbashi`, 250, -180],
    [`tokyo-sta`, 0, 0],
    [`ginza`, 75, 355],
    [`shimbashi`, -125, 600],
    [`hibiya`, -315, 355],
    [`kasumigaseki`, -560, 440],
    [`otemachi`, -200, -120],
    [`asakusa`, 662, -1300],
    [`ryogoku`, 900, -560],
    [`tsukiji`, 380, 480],
    [`kachidoki`, 750, 650],
    [`shinagawa`, -700, 2600],
    [`ochanomizu`, -360, -620],
    [`hongo`, -720, -830],
    [`kudanshita`, -760, -400],
    [`ningyocho`, 480, -260],
    [`kuramae`, 520, -860],
    [`shinjuku`, -2100, 225],
    [`shibuya`, -1845, 1330],
    [`ikebukuro`, -2215, -1110],
    [`harajuku`, -1840, 950],
    [`aoyama`, -1300, 760],
    [`yotsuya`, -1215, 225],
    [`roppongi`, -955, 940],
    [`akasaka`, -955, 420],
    [`hanzomon`, -955, 225],
  ],
  hae = {
    "chuo-ginza": `15`,
    "daiichi-keihin": `15`,
    "chuo-kyobashi": `15`,
    "chuo-nihonbashi": `15`,
    "chuo-kanda": `17`,
    "chuo-akihabara": `17`,
    "chuo-ueno": `17`,
    "showa-edobashi": `4`,
    "showa-ueno": `4`,
    "edo-kodemmacho": `6`,
    "edo-asakusabashi": `6`,
  };
