// tokyo/assets/region-tokyo-55J_WESF 380 — math
// Lines 137481-138722 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var K$ = { vehX: 0, vehZ: 4, pedX: 8, pedZ: 10, waitX: 12, waitZ: 16, n: 20 },
  q$ = {
    signal: 320,
    head: 300,
    ped: 140,
    lamp: 300,
    light: 360,
    upole: 320,
    tree: 260,
    vend: 130,
    rail: 110,
    bollard: 60,
    bike: 55,
    sign: 140,
    bus: 140,
    shelter: 160,
    guide: 420,
  },
  RNe = class {
    c;
    inst = new Float32Array(40960);
    nInst = 0;
    lamps = new Float32Array(10240);
    lampRole = new Int16Array(512);
    lampNode = new Int32Array(512);
    nLamps = 0;
    m = new Float32Array(16);
    signs = [];
    sigNodes = [];
    counts = {};
    colliders = 0;
    t;
    w;
    wf;
    col;
    sw = 0.15;
    corr = [];
    decks = [];
    constructor(e) {
      this.c = e;
    }
    *build(e, t, n, r, i) {
      let { plan: a, city: o } = this.c;
      ((this.t = e),
        (this.w = t),
        (this.wf = i ?? t),
        (this.col = n),
        (this.sw = a.sidewalkHeight));
      let s = Wl(a);
      (Gl(s, e.minX - 40, e.minZ - 40, e.maxX + 40, e.maxZ + 40, this.corr),
        (this.decks.length = 0));
      for (let t = 0, n = s.decks; t < n.length; t += 3) {
        let r = n[t],
          i = n[t + 1],
          a = n[t + 2] + 40;
        r > e.minX - a &&
          r < e.maxX + a &&
          i > e.minZ - a &&
          i < e.maxZ + a &&
          this.decks.push(r, i, n[t + 2]);
      }
      ((this.nInst = 0),
        (this.nLamps = 0),
        (this.signs = []),
        (this.sigNodes = []),
        (this.counts = {}),
        (this.colliders = 0));
      for (let e of a.nodes)
        e.kind !== `end` &&
          this.inT(e.x, e.z) &&
          (e.signal ? this.signalNode(e) : this.giveWay(e),
          this.blockCornerPlates(e),
          r() && (yield));
      for (let t of a.roads) {
        let [n, i, a, s] =
          t.axis === `x`
            ? [
                t.from - t.halfTotal,
                t.to + t.halfTotal,
                t.at - t.halfTotal,
                t.at + t.halfTotal,
              ]
            : [
                t.at - t.halfTotal,
                t.at + t.halfTotal,
                t.from - t.halfTotal,
                t.to + t.halfTotal,
              ];
        if (
          i < e.minX ||
          n > e.maxX ||
          s < e.minZ ||
          a > e.maxZ ||
          t.pedestrian
        )
          continue;
        let c = o.nodesOf(t);
        for (let n = 0; n + 1 < c.length; n++) {
          let r = t.axis === `x` ? c[n].x : c[n].z,
            i = t.axis === `x` ? c[n + 1].x : c[n + 1].z,
            a = t.axis === `x` ? e.minX : e.minZ,
            o = t.axis === `x` ? e.maxX : e.maxZ;
          if (!(i < a - 40 || r > o + 40))
            for (let e of [-1, 1]) this.run(t, c[n], c[n + 1], n, e);
        }
        r() && (yield);
      }
      for (let e of o.busStops) this.inT(e.px, e.pz) && this.busStop(e);
      for (let e of Ox(a).trees)
        this.inT(e.x, e.z) &&
          !this.claimed(e.x, e.z, 1) &&
          (this.add(
            `sakura-${this.c.season}`,
            e.x,
            e.y,
            e.z,
            Math.cos(e.h),
            Math.sin(e.h),
            q$.tree,
            e.s,
            e.s,
            e.s,
          ),
          this.circle(e.x, e.z, 0.24, e.y + 3, `tree`));
      for (let e of Ox(a).items) {
        if (e.kind !== `vend` || !this.inT(e.x, e.z) || this.claimed(e.x, e.z))
          continue;
        this.add(`vend${e.k & 3}`, e.x, e.y, e.z, e.fx, e.fz, q$.vend);
        let t = Math.abs(e.fx) > 0.5 ? 0.37 : 0.5,
          n = Math.abs(e.fx) > 0.5 ? 0.5 : 0.37;
        this.boxC(e.x - t, e.z - n, e.x + t, e.z + n, e.y + 1.85, `prop`);
      }
      for (let e of o.guides) this.inT(e.px, e.pz) && this.guide(e);
      for (let e of o.gantries) this.inT(e.x, e.z) && this.gantry(e);
      for (let e of o.deckLamps) this.inT(e.x, e.z) && this.deckLamp(e);
      return (
        HMe(this.w, this.wf, a, Wl(a), e),
        tNe(this.w, this.wf, e),
        lMe(this.wf, a, e, this.w),
        {
          inst: this.inst.slice(0, this.nInst * 20),
          nInst: this.nInst,
          lamps: this.lamps.slice(0, this.nLamps * 20),
          nLamps: this.nLamps,
          lampRole: this.lampRole.slice(0, this.nLamps),
          lampNode: this.lampNode.slice(0, this.nLamps),
          sigNodes: this.sigNodes,
          signs: this.signs,
          colliders: this.colliders,
          counts: this.counts,
        }
      );
    }
    inT(e, t) {
      let n = this.t;
      return e >= n.minX && e < n.maxX && t >= n.minZ && t < n.maxZ;
    }
    count(e) {
      this.counts[e] = (this.counts[e] ?? 0) + 1;
    }
    add(e, t, n, r, i, a, o, s = 1, c = 1, l = 1) {
      let u = this.c.kit.f.get(e);
      if (u === void 0) return;
      if (((n += Fb(t, r)), (this.nInst + 1) * 20 > this.inst.length)) {
        let e = new Float32Array(this.inst.length * 2);
        (e.set(this.inst), (this.inst = e));
      }
      let d = this.nInst++ * 20,
        f = this.inst;
      ((f[d] = u),
        (f[d + 1] = t),
        (f[d + 2] = r),
        (f[d + 3] = o),
        vm(this.m, t, n, r, i, a, s, c, l),
        f.set(this.m, d + 4),
        this.count(e));
    }
    lamp(e, t, n, r, i, a, o, s) {
      let c = this.c.kit.l.get(e);
      if (c === void 0) return;
      if (((i += Fb(r, a)), this.nLamps + 1 > this.lampRole.length)) {
        let e = this.lampRole.length * 2,
          t = new Float32Array(e * 20);
        (t.set(this.lamps), (this.lamps = t));
        let n = new Int16Array(e);
        (n.set(this.lampRole), (this.lampRole = n));
        let r = new Int32Array(e);
        (r.set(this.lampNode), (this.lampNode = r));
      }
      let l = this.nLamps++,
        u = l * 20;
      ((this.lamps[u] = c),
        (this.lamps[u + 1] = r),
        (this.lamps[u + 2] = a),
        (this.lamps[u + 3] = q$.lamp),
        vm(this.m, r, i, a, o, s),
        this.lamps.set(this.m, u + 4),
        (this.lampRole[l] = n),
        (this.lampNode[l] = t));
    }
    sign(e, t, n, r, i, a, o, s, c, l, u = !0) {
      let d = this.w;
      (d.setMaterial(0.5, 0.1, 0.04, 0), d.setColor(255, 255, 255));
      let f = _m(d, r + o * 0.012, i, a + s * 0.012, o, s, c, l, LZ(e));
      if (u) {
        (d.setMaterial(0.6, 0.3, 0, 0),
          um(d, 10133668),
          _m(d, r - o * 0.012, i, a - s * 0.012, -o, -s, c, l, LZ(`name`)),
          um(d, 9080980));
        let e = (c / 2) * s,
          t = -o * (c / 2);
        dm(
          d,
          r - e - o * 0.012,
          i + l / 2,
          a - t - s * 0.012,
          r + e - o * 0.012,
          i + l / 2,
          a + t - s * 0.012,
          r + e + o * 0.012,
          i + l / 2,
          a + t + s * 0.012,
          r - e + o * 0.012,
          i + l / 2,
          a - t + s * 0.012,
        );
      }
      (this.signs.push({ kind: e, key: t, data: n, x: r, y: i, z: a, v: f }),
        this.count(`sign:${e}`));
    }
    circle(e, t, n, r, i = `pole`) {
      (this.col.circle(e, t, n, r + Fb(e, t), i), this.colliders++);
    }
    boxC(e, t, n, r, i, a = `prop`) {
      (this.col.box(
        Math.min(e, n),
        Math.min(t, r),
        Math.max(e, n),
        Math.max(t, r),
        i + Math.max(Fb(e, t), Fb(n, r)),
        a,
      ),
        this.colliders++);
    }
    inCorridor(e, t) {
      let n = this.corr;
      for (let r = 0; r < n.length; r += 3) {
        let i = e - n[r],
          a = t - n[r + 1],
          o = n[r + 2] - 1.4;
        if (i * i + a * a < o * o) return !0;
      }
      return !1;
    }
    tallBlocked(e, t, n = 0, r = 0, i = 0, a = 0) {
      let o = this.decks;
      if (!o.length) return !1;
      let s = (e, t) => {
        for (let n = 0; n < o.length; n += 3) {
          let r = e - o[n],
            i = t - o[n + 1],
            s = o[n + 2] - 1.4 + a;
          if (r * r + i * i < s * s) return !0;
        }
        return !1;
      };
      return s(e, t) || (i > 0 && s(e + n * i, t + r * i));
    }
    segInCorridor(e, t, n, r) {
      if (!this.corr.length) return !1;
      let i = Math.max(1, Math.ceil(Math.hypot(n - e, r - t) / 2));
      for (let a = 0; a <= i; a++)
        if (this.inCorridor(e + ((n - e) * a) / i, t + ((r - t) * a) / i))
          return !0;
      return !1;
    }
    gy(e, t) {
      return this.c.plan.isFlush(e, t) ? 0 : this.sw;
    }
    claimed(e, t, n = 0.5) {
      return !!this.c.claimed?.(e - n, t - n, e + n, t + n);
    }
    signalNode(e) {
      let { plan: t, city: n } = this.c,
        r = this.sigNodes.length;
      this.sigNodes.push(e.id);
      let i = this.sw,
        a = 0.8,
        o = ce(t.side),
        s = new Map(),
        c = (t, r) => {
          let i = (t + 1) * 3 + (r + 1),
            o = s.get(i);
          if (!o) {
            let [c, l] = n.cornerHalf(e, t, r),
              u = e.x + t * (c + a),
              d = e.z + r * (l + a),
              f = Math.hypot(e.x - u, e.z - d) || 1;
            s.set(
              i,
              (o = {
                x: u,
                z: d,
                tall: !1,
                ped: 0,
                ux: (e.x - u) / f,
                uz: (e.z - d) / f,
              }),
            );
          }
          return o;
        },
        l = this.c.intersectionName?.(e.x, e.z, e.roads) ?? null,
        u = l ? (l.ja ?? l.zh) : ``,
        d = n.arms[e.id],
        f = 0;
      for (let n of e.in) {
        let e = t.links[n];
        if (e.pedestrian) continue;
        let s = e.rx * o,
          p = e.rz * o,
          m = c(
            Math.abs(e.dx) > 0.5 ? Math.sign(e.dx) : Math.sign(s),
            Math.abs(e.dz) > 0.5 ? Math.sign(e.dz) : Math.sign(p),
          );
        m.tall = !0;
        let h =
            (e.road.axis === `x`
              ? e.dx > 0
                ? d.E
                : d.W
              : e.dz > 0
                ? d.S
                : d.N) ?? e.road,
          g = h.halfWidth + a,
          _ = Math.max(2.6, Math.min(11.5, g - (h.median / 2 + 0.6))),
          v = i + m$.armY,
          y = -s,
          b = -p;
        (this.add(`arm`, m.x, v, m.z, -b, y, q$.signal, _, 1, 1),
          this.add(
            `armThin`,
            m.x,
            v - 0.9,
            m.z,
            -b,
            y,
            q$.signal,
            Math.min(2.4, _ * 0.45),
            1,
            1,
          ),
          f++);
        let x = -e.dx,
          S = -e.dz,
          C = _ - 0.9,
          w = m.x + y * C,
          T = m.z + b * C,
          E = v - 0.36;
        this.add(`vehHead`, w, E, T, x, S, q$.head);
        let D = e.road.axis === `x` ? K$.vehX : K$.vehZ;
        if (
          (this.lamp(`litG`, r, D, w, E, T, x, S),
          this.lamp(`litY`, r, D + 1, w, E, T, x, S),
          this.lamp(`litR`, r, D + 2, w, E, T, x, S),
          e.road.lanesPerDir >= 2)
        ) {
          let e = S,
            t = -x,
            n = w + e * m$.lampX[2],
            i = T + t * m$.lampX[2],
            a = E - 0.42;
          (this.add(`arrowBox`, n, a, i, x, S, q$.head),
            this.lamp(`litArrow`, r, D + 3, n, a, i, x, S));
        }
        if (e.road.lanesPerDir >= 3 && _ > 7) {
          let e = 2.8,
            t = m.x + y * e,
            n = m.z + b * e;
          (this.add(`vehHead`, t, E, n, x, S, q$.head * 0.8),
            this.lamp(`litG`, r, D, t, E, n, x, S),
            this.lamp(`litY`, r, D + 1, t, E, n, x, S),
            this.lamp(`litR`, r, D + 2, t, E, n, x, S));
        }
        if (l) {
          let e = Math.max(1.3, Math.min(C - 1.55, _ * 0.42));
          this.sign(
            `cross`,
            `c|${u}`,
            { kind: `cross`, ja: u, en: l.en },
            m.x + y * e,
            v - 0.36,
            m.z + b * e,
            x,
            S,
            1.5,
            0.375,
          );
        }
      }
      let p = (t, n, a) => {
        if (!t || t.pedestrian) return;
        let o = t.axis === `x` ? K$.pedX : K$.pedZ,
          s = t.axis === `x` ? K$.waitX : K$.waitZ;
        for (let [l, u] of [
          [n, a],
          [a, n],
        ]) {
          let n = c(l[0], l[1]),
            a = c(u[0], u[1]),
            d = a.x - n.x,
            f = a.z - n.z,
            p = Math.hypot(d, f) || 1,
            m = d / p,
            h = f / p,
            g = i + (n.ped === 0 ? 2.75 : 3.7);
          n.ped++;
          let _ = n.x + m * 0.24,
            v = n.z + h * 0.24,
            y = t.lanesPerDir >= 2 && ge(e.id, `wait`, l[0], l[1]) % 2 == 0;
          if (
            (this.add(y ? `pedHeadBar` : `pedHead`, _, g, v, m, h, q$.ped),
            this.lamp(`litPedRed`, r, o, _, g, v, m, h),
            this.lamp(`litPedGreen`, r, o + 1, _, g, v, m, h),
            y)
          )
            for (let e = 0; e < 4; e++)
              this.lamp(`litWait${e}`, r, s + e, _, g, v, m, h);
        }
      };
      (p(d.N, [-1, -1], [1, -1]),
        p(d.S, [-1, 1], [1, 1]),
        p(d.E, [1, -1], [1, 1]),
        p(d.W, [-1, -1], [-1, 1]));
      let m = !1;
      for (let e of s.values()) {
        if (this.claimed(e.x, e.z)) continue;
        let t = e.tall;
        (this.add(
          t ? `signalPole` : `pedPole`,
          e.x,
          i,
          e.z,
          -e.ux,
          -e.uz,
          q$.signal,
        ),
          this.circle(
            e.x,
            e.z,
            t ? 0.16 : 0.11,
            i + (t ? m$.poleH : m$.pedPoleH),
          ),
          t &&
            !m &&
            ((m = !0),
            this.add(`controller`, e.x, i + 2.3, e.z, -e.ux, -e.uz, q$.sign)));
      }
      this.count(`signalArms`);
    }
    giveWay(e) {
      let { plan: t, city: n } = this.c;
      if (e.kind === `corner`) return;
      let r = this.sw;
      for (let n of e.in) {
        let r = t.links[n];
        if (r.pedestrian || !Eo(t, e, r)) continue;
        let i = t.side,
          a = r.ex + r.rx * i * (r.road.halfWidth + 0.5) - r.dx * 0.6,
          o = r.ez + r.rz * i * (r.road.halfWidth + 0.5) - r.dz * 0.6;
        if (!this.inT(a, o) || this.claimed(a, o)) continue;
        let s = this.gy(a, o);
        (this.add(`signPost`, a, s, o, -r.dx, -r.dz, q$.sign),
          this.add(`tomare`, a, s + 2.35, o, -r.dx, -r.dz, q$.sign),
          this.circle(a, o, 0.05, s + 2.9, `pole`));
      }
      if (n.zebra[e.id])
        for (let n of e.in) {
          let e = t.links[n];
          if (e.pedestrian || !wo(e.road)) continue;
          let i = t.side,
            a = e.ex + e.rx * i * (e.road.halfWidth + 0.45) + e.dx * 0.2,
            o = e.ez + e.rz * i * (e.road.halfWidth + 0.45) + e.dz * 0.2;
          this.inT(a, o) &&
            !this.claimed(a, o) &&
            (this.add(`signPost`, a, r, o, -e.dx, -e.dz, q$.sign),
            this.add(`crossing`, a, r + 2.45, o, -e.dx, -e.dz, q$.sign),
            this.circle(a, o, 0.05, r + 2.9, `pole`));
        }
    }
    blockCornerPlates(e) {
      let { city: t } = this.c;
      if (!this.c.areaAt) return;
      let n = t.arms[e.id];
      for (let [t, r] of [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ]) {
        let i = t > 0 ? n.E : n.W,
          a = r > 0 ? n.S : n.N;
        if (
          !i ||
          !a ||
          i.pedestrian ||
          a.pedestrian ||
          ge(e.id, `plate`, t, r) % 3 == 0
        )
          continue;
        let o = e.x + t * a.halfTotal,
          s = e.z + r * i.halfTotal,
          c = i.halfWidth >= a.halfWidth,
          l = c ? 0 : -t,
          u = c ? -r : 0,
          d = o + (c ? t * 0.9 : 0) + l * 0.05,
          f = s + (c ? 0 : r * 0.9) + u * 0.05;
        if (!this.inT(d, f)) continue;
        let p = this.c.areaAt(o + t * 4, s + r * 4);
        p && this.plate(p, d, this.sw + 2.4, f, l, u);
      }
      if (!(e.signal || e.roads.some((e) => wo(e))))
        for (let [r, i] of [
          [-1, -1],
          [1, -1],
          [-1, 1],
          [1, 1],
        ]) {
          let a = r > 0 ? n.E : n.W,
            o = i > 0 ? n.S : n.N;
          if (
            !a ||
            !o ||
            a.pedestrian ||
            o.pedestrian ||
            ge(e.id, `bollard`, r, i) % 2
          )
            continue;
          let [s, c] = t.cornerHalf(e, r, i);
          for (let [t, n] of [
            [2.2, 0.35],
            [0.35, 2.2],
          ]) {
            let a = e.x + r * (s + t),
              o = e.z + i * (c + n);
            if (
              !this.inT(a, o) ||
              this.claimed(a, o) ||
              this.c.plan.surfaceAt(a, o) !== `sidewalk`
            )
              continue;
            let l = this.gy(a, o);
            (this.add(`bollard`, a, l, o, 1, 0, q$.bollard),
              this.circle(a, o, 0.08, l + 0.8, `prop`));
          }
        }
    }
    plate(e, t, n, r, i, a) {
      let o = `${e.town.ja ?? e.town.zh}${e.chome ? `${Io[e.chome] ?? e.chome}丁目` : ``}`,
        s = `${e.town.en}${e.chome ? ` ${e.chome}` : ``}`,
        c = e.ward.ja ?? e.ward.zh;
      this.sign(
        `plate`,
        `p|${c}|${o}|${e.ban}`,
        { kind: `plate`, ward: c, town: o, ban: String(e.ban), en: s },
        t,
        n,
        r,
        i,
        a,
        0.42,
        0.105,
        !1,
      );
    }
    run(e, t, n, r, i) {
      let { plan: a, city: o } = this.c,
        s = o.runRange(e, t, n);
      if (!s) return;
      let [c, l] = s,
        u = e.halfTotal - e.halfWidth,
        d = new ie(ge(a.dataset.seed, `tokyo-run`, e.id, r, i)),
        f = (t, n) => (e.axis === `x` ? [t, e.at + i * n] : [e.at + i * n, t]),
        p = e.axis === `x` ? 0 : -i,
        m = e.axis === `x` ? -i : 0,
        h = +(e.axis === `x`),
        g = e.axis === `x` ? 0 : 1,
        _ = [],
        v = (e, t) => {
          for (let [n, r] of _) if (t > n && e < r) return !1;
          return !0;
        },
        y = (e, t) => _.push([e, t]),
        b = LNe(a, e, i),
        x = (e, t) => {
          for (let [n, r] of b) if (t > n && e < r) return !1;
          return !0;
        };
      for (let t of o.busStops)
        t.road === e &&
          t.side === i &&
          t.t > c &&
          t.t < l &&
          y(t.t - (t.shelter ? 4.5 : 2.2), t.t + (t.shelter ? 4.5 : 2.2));
      for (let t of Ao(a)) t.road === e && t.side === i && y(...No(t));
      let S = e.axis === `x` ? (c + l) / 2 : e.at,
        C = e.axis === `x` ? e.at : (c + l) / 2,
        w = bae(a, e, S, C),
        T = iu(a, e, S, C),
        E = this.sw,
        D = !!e.flush,
        O = (e, t) => (D && a.isFlush(e, t) ? 0 : E),
        k = this.c.density,
        A = a.districtAt(S, C).id,
        j = A === `marunouchi` || A === `nihonbashi`,
        ee = o.primaryLights(e, t, n, i);
      if (ee)
        for (let t of ee.ts) {
          y(t - 0.6, t + 0.6);
          let [n, r] = f(t, e.halfWidth + 0.55);
          !this.inT(n, r) ||
            this.claimed(n, r) ||
            this.tallBlocked(n, r, p, m, 2.8, 0.6) ||
            (T && !wo(e)
              ? (this.add(`lantern`, n, O(n, r), r, p, m, q$.light * 0.6),
                this.circle(n, r, 0.1, O(n, r) + 6.5))
              : (this.add(
                  T ? `lantern` : `streetLight`,
                  n,
                  O(n, r),
                  r,
                  p,
                  m,
                  q$.light,
                ),
                this.circle(n, r, 0.13, O(n, r) + 9)));
        }
      if (u >= 4 && (wo(e) || ge(e.id, `trees`) % 3 == 0)) {
        let t = xae(a, e, S, C),
          n =
            this.c.season === `bloom` && t === `ginkgo`
              ? `green`
              : this.c.season,
          o = e.id === `sj-omotesando`,
          s = o ? 13 : 9,
          u = 0;
        for (let a = c + 4.5; a < l - 2; a += s) {
          let s = a + (d.next() - 0.5) * 1.2;
          if (!v(s - 1, s + 1)) continue;
          y(s - 1, s + 1);
          let [c, l] = f(s, e.halfWidth + (o ? 1.8 : 1.35));
          if (
            !this.inT(c, l) ||
            this.claimed(c, l, 1) ||
            this.tallBlocked(c, l, 0, 0, 0, 3.6) ||
            Hre(c, l)
          )
            continue;
          let p = (0.85 + d.next() * 0.3) * (o ? 2 : 1),
            m = d.next(),
            h = ge(e.id, r, i, u++, `tree`),
            g = n === `bare` ? 0 : h % F$.length,
            _ = p * (0.9 + ((h >> 4) % 21) / 100);
          (this.add(
            I$(t, n, g),
            c,
            O(c, l),
            l,
            Math.cos(m * 6.28),
            Math.sin(m * 6.28),
            q$.tree,
            p,
            _,
            p,
          ),
            this.circle(c, l, o ? 0.45 : 0.24, O(c, l) + 3, `tree`));
        }
      }
      if (w && ge(e.id, r, `pside`) % 2 == +(i > 0)) {
        let t = [],
          n = c + 2 + d.next() * 6;
        for (; n < l - 1;) (t.push([n, 0, 0]), (n += 24 + d.next() * 8));
        let a = Math.min(e.halfWidth + 0.4, e.halfTotal - 0.3),
          o = 0;
        for (let n of t) {
          let [t, s] = f(n[0], a);
          ((n[1] = t), (n[2] = s));
          let c = n[0];
          if (this.inCorridor(t, s)) {
            n[0] = NaN;
            continue;
          }
          if (
            !v(c - 0.5, c + 0.5) ||
            (y(c - 0.5, c + 0.5), o++, !this.inT(t, s) || this.claimed(t, s))
          )
            continue;
          let l = ge(e.id, r, i, o, `upole`);
          if (
            (this.add(
              l % 4 == 0 ? `upoleT` : `upole`,
              t,
              O(t, s),
              s,
              p,
              m,
              q$.upole,
            ),
            this.circle(t, s, 0.22, O(t, s) + h$.h, `pole`),
            l % 3 != 0)
          )
            this.add(`poleAd${l % 5}`, t, O(t, s) + 2.6, s, p, m, q$.sign);
          else if (this.c.areaAt) {
            let e = this.c.areaAt(t - p * (u + 3), s - m * (u + 3));
            e &&
              this.plate(e, t + p * 0.205, O(t, s) + 2.9, s + m * 0.205, p, m);
          }
        }
        for (let n = 0; n + 1 < t.length; n++) {
          let [o, s, c] = t[n],
            [l, u, d] = t[n + 1];
          if (
            !this.inT(s, c) ||
            Number.isNaN(o) ||
            Number.isNaN(l) ||
            this.segInCorridor(s, c, u, d)
          )
            continue;
          this.span(s, O(s, c), c, u, d, p, m, ge(e.id, r, i, n));
          let f = s - p * (e.halfTotal - a + 0.2) + h * 3,
            _ = c - m * (e.halfTotal - a + 0.2) + g * 3;
          ge(e.id, r, i, n, `drop`) % 3 == 0 &&
            !this.segInCorridor(s, c, f, _) &&
            this.wire(
              s + p * 0.25,
              O(s, c) + h$.lowY,
              c + m * 0.25,
              f,
              4.6,
              _,
              0.4,
              0.013,
              2105376,
            );
        }
      } else if (!wo(e) && !T && ge(e.id, r, `light`) % 2 == +(i > 0))
        for (let t = c + 10; t < l - 3; t += 28) {
          if (!v(t - 0.5, t + 0.5)) continue;
          y(t - 0.5, t + 0.5);
          let [n, r] = f(t, Math.min(e.halfWidth + 0.4, e.halfTotal - 0.3));
          !this.inT(n, r) ||
            this.claimed(n, r) ||
            this.tallBlocked(n, r, p, m, 1.2, 0.4) ||
            (this.add(
              `lantern`,
              n,
              O(n, r),
              r,
              p,
              m,
              q$.light * 0.6,
              1,
              1.08,
              1,
            ),
            this.circle(n, r, 0.1, O(n, r) + 6.5));
        }
      if (wo(e) && e.id !== `chuo-ginza` && e.id !== `gyoko`) {
        let t = A === `ginza` || A === `marunouchi`,
          n = t ? `railDark` : `rail`,
          r = NaN,
          i = () => {
            if (Number.isNaN(r)) return;
            let [e, n] = f(r, s);
            (this.add(
              t ? `railPostDark` : `railPost`,
              e,
              O(e, n),
              n,
              -g,
              h,
              q$.rail,
            ),
              (r = NaN));
          },
          a = c + 1.5,
          o = -1,
          s = e.halfWidth + 0.28,
          u = c + 25 + d.next() * 30,
          p = (t, n) => {
            if (n - t < 3.9) return;
            let [r, i] = f(t, s),
              [a, o] = f(n, s),
              c = (r + a) / 2,
              l = (i + o) / 2;
            this.inT(c, l) &&
              this.boxC(
                r - (e.axis === `x` ? 0 : 0.06),
                i - (e.axis === `x` ? 0.06 : 0),
                a + (e.axis === `x` ? 0 : 0.06),
                o + (e.axis === `x` ? 0.06 : 0),
                O(c, l) + 0.9,
                `rail`,
              );
          };
        for (; a + 4 <= l - 1.5;) {
          if (a > u) {
            (o >= 0 && p(o, a),
              (o = -1),
              (a += 5),
              (u = a + 25 + d.next() * 35));
            continue;
          }
          if (!v(a, a + 4)) {
            (o >= 0 && p(o, a), (o = -1), (a += 1));
            continue;
          }
          o < 0 && (o = a);
          let [e, t] = f(a, s),
            [c, l] = f(a + 4, s);
          (this.inT((e + c) / 2, (t + l) / 2) && !this.claimed(e, t)
            ? (r !== a && i(),
              this.add(n, e, O(e, t), t, -g, h, q$.rail),
              (r = a + 4))
            : i(),
            (a += 4));
        }
        (i(), o >= 0 && p(o, a));
      }
      if (e.medianFence && i > 0 && e.median >= 1.5) {
        let t = NaN,
          n = NaN;
        for (let e = c + 2; e + 4 <= l - 2; e += 4) {
          let [r, i] = f(e, 0);
          if (this.inT(r, i)) {
            if (t !== e) {
              let [t, n] = f(e, 0);
              this.add(`railPost`, t, E, n, -g, h, q$.rail);
            }
            (this.add(`rail`, r, E, i, -g, h, q$.rail),
              Number.isNaN(n) && (n = e),
              (t = e + 4));
          }
        }
        if (!Number.isNaN(t)) {
          let [r, i] = f(t, 0);
          this.add(`railPost`, r, E, i, -g, h, q$.rail);
          let [a, o] = f(n, 0),
            [s, c] = f(t, 0);
          this.boxC(
            Math.min(a, s) - (e.axis === `x` ? 0 : 0.06),
            Math.min(o, c) - (e.axis === `x` ? 0.06 : 0),
            Math.max(a, s) + (e.axis === `x` ? 0 : 0.06),
            Math.max(o, c) + (e.axis === `x` ? 0.06 : 0),
            E + 0.9,
            `rail`,
          );
        }
      }
      let M = j ? 0.12 : wo(e) ? 0.25 : 0.55;
      if (u >= 1.5) {
        let t = c + 6 + d.next() * 20;
        for (; t < l - 4;) {
          let n = 1 + Math.floor(d.next() * (j ? 2 : 4)),
            r = d.next() < M * k,
            i = n * 1.05 + 0.5;
          if (r && v(t, t + i) && x(t, t + i)) {
            y(t, t + i);
            let r = e.halfTotal - 0.42;
            for (let i = 0; i < n; i++) {
              let [n, a] = f(t + 0.5 + i * 1.05, r);
              if (!this.inT(n, a) || this.claimed(n, a, 0.6)) continue;
              let o = Math.floor(d.next() * 4);
              (this.add(`vend${o}`, n, O(n, a), a, p, m, q$.vend),
                this.boxC(
                  n - (e.axis === `x` ? 0.5 : 0.37),
                  a - (e.axis === `x` ? 0.37 : 0.5),
                  n + (e.axis === `x` ? 0.5 : 0.37),
                  a + (e.axis === `x` ? 0.37 : 0.5),
                  O(n, a) + 1.85,
                  `prop`,
                ));
            }
            let [a, o] = f(t + 0.5 + n * 1.05 - 0.25, e.halfTotal - 0.25);
            (this.inT(a, o) &&
              this.add(`recycle`, a, O(a, o), o, p, m, q$.vend * 0.7),
              (t += i + 8 + d.next() * 30));
          } else t += 14 + d.next() * 26;
        }
      }
      if (u >= 2 && !j) {
        let t = c + 3 + d.next() * 15,
          n = this.nearStation(S, C);
        for (; t < l - 3;) {
          let r = 2 + Math.floor(d.next() * (n ? 10 : 4)),
            i = d.next() < (n ? 0.6 : 0.25) * k,
            a = r * 0.55;
          if (i && v(t, t + a) && x(t, t + a)) {
            y(t, t + a);
            let i = e.halfTotal - 0.7;
            if (n && r >= 8)
              for (let e = 0; e + 6 <= a + 0.5; e += 6) {
                let [n, r] = f(t + e, i + 0.45);
                this.inT(n, r) &&
                  !this.claimed(n, r, 0.6) &&
                  this.add(`bikeRack`, n, O(n, r), r, -g, h, q$.bike);
              }
            for (let e = 0; e < r; e++) {
              let [n, r] = f(t + 0.3 + e * 0.55, i);
              if (!this.inT(n, r) || this.claimed(n, r, 0.6)) continue;
              let a = (d.next() - 0.5) * 0.25,
                o = -p * Math.cos(a) - h * Math.sin(a),
                s = -m * Math.cos(a) - g * Math.sin(a);
              this.add(
                W$[Math.floor(d.next() * W$.length)],
                n,
                O(n, r),
                r,
                -s,
                o,
                q$.bike,
              );
            }
            t += a + 6 + d.next() * 20;
          } else t += 10 + d.next() * 20;
        }
      }
      if (wo(e) && l - c > 90 && ge(e.id, r, i, `spd`) % 2 == 0) {
        let t = le(e.axis, i, a.side),
          n = t > 0 ? c + 6 : l - 6;
        if (v(n - 0.4, n + 0.4)) {
          y(n - 0.4, n + 0.4);
          let [i, a] = f(n, e.halfWidth + 0.45);
          if (this.inT(i, a) && !this.claimed(i, a)) {
            let n = e.axis === `x` ? -t : 0,
              o = e.axis === `x` ? 0 : -t;
            (this.add(`signPost`, i, O(i, a), a, n, o, q$.sign),
              this.add(
                e.speedKmh >= 50
                  ? `speed50`
                  : e.speedKmh >= 40
                    ? `speed40`
                    : `speed30`,
                i,
                O(i, a) + 2.5,
                a,
                n,
                o,
                q$.sign,
              ),
              this.add(
                ge(e.id, r, `np`) % 2 ? `noParking` : `noStopping`,
                i,
                O(i, a) + 1.85,
                a,
                n,
                o,
                q$.sign,
              ),
              this.circle(i, a, 0.05, O(i, a) + 2.9));
          }
        }
      } else if (!wo(e) && l - c > 40 && ge(e.id, r, i, `np`) % 3 == 0) {
        let t = le(e.axis, i, a.side),
          n = c + (l - c) * (0.3 + 0.4 * d.next());
        if (v(n - 0.4, n + 0.4)) {
          y(n - 0.4, n + 0.4);
          let [r, i] = f(n, Math.min(e.halfWidth + 0.35, e.halfTotal - 0.2));
          if (this.inT(r, i) && !this.claimed(r, i)) {
            let n = e.axis === `x` ? -t : 0,
              a = e.axis === `x` ? 0 : -t;
            (this.add(`signPostShort`, r, O(r, i), i, n, a, q$.sign),
              this.add(`noParking`, r, O(r, i) + 1.95, i, n, a, q$.sign),
              this.add(`parkTimes`, r, O(r, i) + 1.55, i, n, a, q$.sign * 0.7),
              this.circle(r, i, 0.04, O(r, i) + 2.2));
          }
        }
      }
    }
    nearStation(e, t) {
      for (let n of this.c.plan.mrtStations)
        if (Math.abs(n.x - e) < 130 && Math.abs(n.z - t) < 130) return !0;
      return !1;
    }
    span(e, t, n, r, i, a, o, s) {
      let c = 0.25 + Math.hypot(r - e, i - n) * 0.012;
      for (let [l, u, d, f] of [
        [h$.armY + 0.24, -0.85, 0.011, 2763306],
        [h$.armY + 0.24, 0, 0.011, 2763306],
        [h$.armY + 0.24, 0.85, 0.011, 2763306],
        [h$.arm2Y + 0.2, -0.65, 0.012, 2500134],
        [h$.arm2Y + 0.2, 0.65, 0.012, 2500134],
        [h$.lowY + 0.05, 0.2, 0.02, 1447446],
        [h$.lowY - 1.15, 0.2, 0.028, 1184274],
      ]) {
        let p = c * (1 + ((s >> (u > 0 ? 3 : 5)) % 3) * 0.15);
        this.wire(
          e + a * u,
          t + l,
          n + o * u,
          r + a * u,
          t + l,
          i + o * u,
          p,
          d,
          f,
        );
      }
    }
    wire(e, t, n, r, i, a, o, s, c) {
      let l = this.wf;
      (l.setMaterial(0.6, 0.2, 0, 0), um(l, c));
      let u = this.c.wireSeg ?? 6,
        d = r - e,
        f = a - n,
        p = Math.hypot(d, f) || 1,
        m = -f / p,
        h = d / p,
        g = l.n,
        _ = sm.u,
        v = sm.v;
      for (let r = 0; r <= u; r++) {
        let a = r / u,
          c = e + d * a,
          p = n + f * a,
          g = t + (i - t) * a - o * 4 * a * (1 - a);
        for (let e = 0; e < 3; e++) {
          let t = (e / 3) * Math.PI * 2,
            n = Math.cos(t),
            r = Math.sin(t);
          l.vertex(
            c + m * r * s,
            g + n * s,
            p + h * r * s,
            m * r,
            n,
            h * r,
            _,
            v,
          );
        }
      }
      for (let e = 0; e < u; e++)
        for (let t = 0; t < 3; t++) {
          let n = g + e * 3 + t,
            r = g + e * 3 + ((t + 1) % 3);
          l.tri(n, r, n + 3).tri(r, r + 3, n + 3);
        }
    }
    guide(e) {
      let t = this.sw;
      if (
        this.claimed(e.px, e.pz) ||
        this.tallBlocked(e.px, e.pz, e.ax, e.az, e.reach, 0.3)
      )
        return;
      this.add(`guidePost`, e.px, t, e.pz, e.fx, e.fz, q$.guide);
      for (let n of [7.15, 5.25])
        this.add(
          `arm`,
          e.px,
          t + n,
          e.pz,
          -e.az,
          e.ax,
          q$.guide,
          e.reach,
          1.4,
          1.4,
        );
      let n = Math.min(e.reach - 1.6, Math.max(2.2, e.reach * 0.55));
      (this.sign(
        `guide`,
        e.key,
        {
          kind: `guide`,
          ahead: e.ahead,
          left: e.left,
          right: e.right,
          route: e.route,
        },
        e.px + e.ax * n + e.fx * 0.15,
        t + 6.2,
        e.pz + e.az * n + e.fz * 0.15,
        e.fx,
        e.fz,
        3.6,
        1.58,
      ),
        this.circle(e.px, e.pz, 0.24, t + 7.6),
        this.count(`guide`));
    }
    gantry(e) {
      let t = this.w,
        n = -e.uz,
        r = e.ux,
        i = e.half - 0.3,
        a = e.y + 7.2;
      (t.setMaterial(0.55, 0.45, 0, 0), um(t, 10134438));
      for (let o of [-1, 1])
        pm(
          t,
          e.x + n * i * o,
          (e.y + 1 + a) / 2,
          e.z + r * i * o,
          0.22,
          (a - e.y - 1) / 2,
          0.22,
          e.ux,
          e.uz,
        );
      pm(t, e.x, a - 0.35, e.z, e.half, 0.35, 0.3, e.ux, e.uz);
      let o = Math.min(e.half - 1.2, 7.2),
        s = 2.7;
      for (let [t, i] of [
        [1, e.fwd],
        [-1, e.back],
      ]) {
        let c = t * this.c.plan.side * (e.half / 2),
          l = e.x + n * c - e.ux * t * 0.4,
          u = e.z + r * c - e.uz * t * 0.4,
          d = `s|${i.exit ? `x` : `r`}|${i.top.ja}|${i.sub?.ja ?? ``}|${i.route ?? ``}`;
        this.sign(
          `shuto`,
          d,
          {
            kind: `shuto`,
            top: i.top,
            sub: i.sub,
            route: i.route,
            exit: i.exit,
          },
          l,
          a - 0.35 - s / 2 - 0.3,
          u,
          -e.ux * t,
          -e.uz * t,
          o,
          s,
        );
      }
      this.count(`gantry`);
    }
    deckLamp(e) {
      let t = -e.uz,
        n = e.ux;
      for (let r of [-1, 1])
        this.add(
          `streetLight`,
          e.x + t * r * 0.12,
          e.y,
          e.z + n * r * 0.12,
          t * r,
          n * r,
          q$.light,
          1,
          0.85,
          1,
        );
    }
    busStop(e) {
      let t = this.sw,
        n = e.road,
        r = +(n.axis === `x`),
        i = n.axis === `x` ? 0 : 1;
      if (this.claimed(e.px, e.pz)) return;
      (this.add(`busPole`, e.px, t, e.pz, r, i, q$.bus),
        this.circle(e.px, e.pz, 0.3, t + 2.9, `pole`));
      let a = null,
        o = 1e9;
      for (let t of this.c.city.nodesOf(n)) {
        let n = Math.hypot(t.x - e.px, t.z - e.pz);
        if (n >= o || n > 160 || t.kind === `end`) continue;
        let r = this.c.intersectionName?.(t.x, t.z, t.roads) ?? null;
        r && ((a = r), (o = n));
      }
      let s =
          this.c.areaAt?.(
            e.px - (n.axis === `z` ? e.side * 6 : 0),
            e.pz - (n.axis === `x` ? e.side * 6 : 0),
          ) ?? null,
        c = this.c.plan.streetLabel(n, e.px, e.pz),
        l = s
          ? `${s.town.ja ?? s.town.zh}${s.chome ? `${Io[s.chome] ?? s.chome}丁目` : ``}`
          : null,
        u = s ? `${s.town.en}${s.chome ? ` ${s.chome}-chome` : ``}` : null,
        d = a?.ja ?? l ?? c.ja ?? c.zh,
        f = a?.en ?? u ?? c.en;
      if (
        (this.sign(
          `name`,
          `n|${d}`,
          { kind: `name`, ja: d, en: f },
          e.px + r * 0.03,
          t + 2.12,
          e.pz + i * 0.03,
          r,
          i,
          0.6,
          0.15,
          !1,
        ),
        this.sign(
          `name`,
          `n|${d}`,
          { kind: `name`, ja: d, en: f },
          e.px - r * 0.03,
          t + 2.12,
          e.pz - i * 0.03,
          -r,
          -i,
          0.6,
          0.15,
          !1,
        ),
        e.shelter)
      ) {
        let i = e.side,
          a = n.axis === `x` ? 0 : -i,
          o = n.axis === `x` ? -i : 0,
          s = e.px - a * 1.6 + r * 0,
          c = e.pz - o * 1.6;
        this.add(`busShelter`, s, t, c, a, o, q$.shelter);
        let l = s - a * 0.6,
          u = c - o * 0.6;
        this.boxC(
          l - (n.axis === `x` ? 1.6 : 0.05),
          u - (n.axis === `x` ? 0.05 : 1.6),
          l + (n.axis === `x` ? 1.6 : 0.05),
          u + (n.axis === `x` ? 0.05 : 1.6),
          t + 2.6,
          `prop`,
        );
      }
      this.count(`busStop`);
    }
  },
  J$ = 8,
  Y$ = 2.05,
  X$ = { low: 100, medium: 220, high: 260, ultra: 340 },
  zNe = 170,
  BNe = 12;
