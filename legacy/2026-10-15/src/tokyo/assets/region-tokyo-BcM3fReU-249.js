// tokyo/assets/region-tokyo-BcM3fReU 249 — next
// Lines 99140-99539 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
var Q1 = 0.07,
  $1 = 0.75,
  e0 = 0,
  t0 = 1,
  n0 = 2,
  r0 = 3,
  i0 = class extends Ge {
    sig;
    giveWay;
    priority;
    zn;
    zf;
    closed;
    routeMask;
    busRoute;
    stand;
    hailK = 1;
    fare;
    fareSeed;
    fareStop;
    kerbCd;
    constructor(e, t, n) {
      super(e, t, n);
      let r = e.plan,
        i = this.net,
        a = i.nL;
      ((this.sig = e.signals instanceof IS ? e.signals : null),
        (this.giveWay = new Uint8Array(a)),
        (this.priority = new Uint8Array(a)),
        (this.zn = new Float32Array(a * 5)),
        (this.zf = new Float32Array(a * 5)),
        (this.closed = new Uint8Array(a)),
        (this.busRoute = new Int8Array(t).fill(-1)),
        (this.fare = new Uint8Array(t)),
        (this.fareSeed = new Float64Array(t).fill(NaN)),
        (this.fareStop = new Uint8Array(t)),
        (this.kerbCd = new Float32Array(t)),
        (gt.occupied = (e) => this.occupied(e)));
      for (let e of r.links) {
        let t = r.nodes[e.to];
        e.pedestrian ||
          t.signal ||
          t.kind === `end` ||
          (uc(r, t, e) && (this.giveWay[e.id] = 1));
      }
      for (let e of r.links) {
        if (e.pedestrian || this.giveWay[e.id]) continue;
        let t = r.nodes[e.to];
        for (let n of t.in)
          this.giveWay[n] &&
            r.links[n].road.axis !== e.road.axis &&
            (this.priority[e.id] = 1);
      }
      let o = [];
      try {
        o = e.streets?.crosswalks ?? [];
      } catch {
        o = [];
      }
      for (let e of o) {
        let t = r.nodes[e.nodeId];
        if (!t || t.signal) continue;
        let n = (e.x0 + e.x1) / 2,
          i = (e.z0 + e.z1) / 2,
          a = Math.hypot(e.x1 - e.x0, e.z1 - e.z0) || 1;
        for (let o of t.in) {
          let s = r.links[o];
          if (s.pedestrian || s.road.axis !== e.roadAxis) continue;
          let c = (n - t.x) * s.dx + (i - t.z) * s.dz < 0 ? this.zn : this.zf,
            l = o * 5;
          ((c[l] = n),
            (c[l + 1] = i),
            (c[l + 2] = (e.x1 - e.x0) / a),
            (c[l + 3] = (e.z1 - e.z0) / a),
            (c[l + 4] = a / 2));
        }
      }
      if (
        ((this.routeMask = P1(r, a)),
        (this.stand = I1(r, a)),
        Z1(i, H1(r).corners),
        i.nL > i.nPlan)
      )
        for (let e of gc(r))
          for (let t of e.underLinks)
            i.curb[t] = Math.min(i.curb[t], pc.lat - pc.half - 0.3);
    }
    setClosed(e, t) {
      let n = +!!t,
        r = !1;
      for (let t of e) (this.closed[t] !== n && (r = !0), (this.closed[t] = n));
      if (r && t)
        for (let e of this.active)
          e.mode === 0 &&
            !e.committed &&
            e.next >= 0 &&
            this.closed[e.next] &&
            this.chooseNext(e);
    }
    canEnter(e, t, n) {
      let r = this.net,
        i = e.link;
      if (e.ghost > 0 || e.panic > 0 || r.thru[i] || i >= r.nPlan)
        return super.canEnter(e, t, n);
      if (r.sig[i])
        return e.turn === Xt &&
          !e.two2 &&
          e.kind !== w1 &&
          this.sig &&
          this.sig.arrow(t.to, r.axis[i] === 0 ? `x` : `z`)
          ? ((this.yielding = !0),
            !this.crossClear(e, t) || !this.spaceOnNext(e)
              ? !1
              : ((this.yielding = !1), !0))
          : super.canEnter(e, t, n)
            ? this.waitInBox &&
              e.turn === Xt &&
              !e.two2 &&
              this.boxWaiting(t.to, i) >= 2 &&
              !this.crossClear(e, t)
              ? ((this.yielding = !0), !1)
              : !0
            : !1;
      let a = this.dStopF;
      if (this.giveWay[i]) {
        if (!e.sawRed)
          return (
            e.v < 0.3 &&
              a < 2.6 &&
              ((e.greenT += n),
              e.greenT > 0.6 + e.reaction * 0.6 &&
                ((e.sawRed = !0), (e.greenT = 0))),
            !1
          );
        if (!this.priorityClear(t)) return ((this.yielding = !0), !1);
      } else if (this.priority[i]) {
        if (this.occOf(t.to, 1 - r.axis[i]) > 0) return !1;
      } else if (!this.unsignalizedOk(e, t, a)) return !1;
      return a < 14 &&
        (!this.zebraClear(this.zn, i) ||
          (e.turn === ut && !this.zebraClear(this.zf, i)))
        ? ((this.yielding = !0), !1)
        : e.next < 0 ||
            ((this.yielding = !0),
            (Oe(e.turn) && !e.two2 && !this.crossClear(e, t)) ||
            (De(e.turn) && a < 14 && !this.curbClear(e, t)) ||
            !this.spaceOnNext(e)
              ? !1
              : ((this.yielding = !1), !0));
    }
    boxWaiting(e, t) {
      let n = 0;
      for (let r = this.hN(e); r >= 0; r = this.nextN[r]) {
        let e = this.cars[r];
        e.jFrom === t && e.boxHold >= 0 && n++;
      }
      return n;
    }
    priorityClear(e) {
      let t = e.to,
        n = this.net.axis[e.id];
      if (this.occOf(t, 1 - n) > 0) return !1;
      let r = this.ctx.plan.nodes[t].in;
      for (let e = 0; e < r.length; e++) {
        let t = r[e];
        if (this.net.axis[t] === n) continue;
        let i = this.links[t];
        for (let e = this.hL(t); e >= 0; e = this.nextL[e]) {
          let t = this.cars[e],
            n = i.length - t.s - t.halfL;
          if (
            (t.committed && n < 4) ||
            (t.v > 0.8 && n < (t.v * 4 > 10 ? t.v * 4 : 10))
          )
            return !1;
        }
      }
      return !0;
    }
    zebraClear(e, t) {
      let n = t * 5,
        r = e[n + 4];
      if (r <= 0) return !0;
      let i = e[n],
        a = e[n + 1],
        o = e[n + 2],
        s = e[n + 3],
        c = this.ctx.dynamics.query(
          i,
          a,
          r + 2.5,
          this.tmpBodies,
          this.pedFilter,
        );
      for (let e = 0; e < c; e++) {
        let t = this.tmpBodies[e],
          n = t.x - i,
          c = t.z - a,
          l = n * o + c * s,
          u = c * o - n * s;
        if (u > 2.4 || u < -2.4) continue;
        let d = l < 0 ? -l : l;
        if (
          d < r - 0.3 ||
          (d < r + 0.9 && (t.vx * o + t.vz * s) * (l < 0 ? 1 : -1) > 0.5)
        )
          return !1;
      }
      return !0;
    }
    moveWeight(e, t, n, r) {
      if (this.closed[n]) return 0;
      let i = super.moveWeight(e, t, n, r);
      if (e.kind === 6 && i > 0) {
        let t = this.busRoute[e.idx];
        t >= 0 && (i *= (this.routeMask[n] >> t) & 1 ? 6 : 0.2);
      }
      return i;
    }
    setMove(e, t, n) {
      (super.setMove(e, t, n),
        e.kind === w1 &&
          n === Xt &&
          !e.two2 &&
          this.net.sig[e.link] &&
          this.net.feeder[t] >= 0 &&
          ((e.two2 = !0), (e.vTurn = 7)));
    }
    assignRoute(e, t) {
      let n = this.routeMask[e.link],
        r = -1;
      if ((n >> t) & 1) r = t;
      else if (n) {
        let e = Math.floor(this.rng.next() * 8);
        for (let t = 0; t < M1.length && r < 0; t++, e++)
          (n >> (e % M1.length)) & 1 && (r = e % M1.length);
      }
      this.busRoute[e.idx] = r;
    }
    planDwell(e) {
      let t = this.links[e.link],
        n = this.net,
        r = this.rng;
      ((e.dwellS = -1), (e.dwellT = 0));
      let i = e.kind;
      if (i === w1) {
        e.vf = (4.2 + e.seed * 1.7) / (t.speed > 1 ? t.speed : 1);
        return;
      }
      if (i === 6) {
        n.busStop[e.link] > e.s + 20 &&
          ((e.dwellS = n.busStop[e.link]), (e.waitT = 10 + r.next() * 12));
        return;
      }
      if (!n.expr[e.link]) {
        if (i === 1 || i === C1) {
          let n = !this.occupied(e),
            i = this.stand[e.link];
          if (
            ((this.fareStop[e.idx] = e0), n && i > e.s + 22 && r.next() < 0.55)
          ) {
            ((e.dwellS = i),
              (e.waitT = 8 + r.next() * 16),
              (this.fareStop[e.idx] = n0));
            return;
          }
          let a = t.length - e.s,
            o = Math.min(1.5, Math.max(0.3, t.length / 120));
          a > 34 &&
            r.next() < (n ? Q1 * this.hailK : 0.05) * o &&
            ((e.dwellS =
              e.s +
              (a > 80 ? 25 + r.next() * (a - 55) : 12 + r.next() * (a - 30))),
            (e.waitT = n ? 5 + r.next() * 6 : 3 + r.next() * 4),
            (this.fareStop[e.idx] = n ? t0 : r0));
          return;
        }
        t.length > 70 &&
          (i === 4 || i === 5 || i === S1) &&
          r.next() < (i === S1 ? 0.03 : 0.07) &&
          ((e.dwellS = e.s + 25 + r.next() * (t.length - e.s - 55)),
          e.dwellS > t.length - 25 && (e.dwellS = -1),
          (e.waitT = 8 + r.next() * 12));
      }
    }
    laneLat(e, t, n) {
      if (e.kind !== w1) return super.laneLat(e, t, n);
      let r = this.net,
        i = r.curb[t] - 0.55 - e.seed * 0.3,
        a = r.medianHalf[t] + 0.5;
      return i > a ? i : a;
    }
    step(e, t, n) {
      if (
        (e.dwellS >= 0 &&
          e.dwellT <= 0 &&
          e.blocked > 2.5 &&
          e.why === 3 &&
          e.obsVeh &&
          e.obsV < 0.5 &&
          e.mode === 0 &&
          (e.dwellS = e.kind === 6 && e.dwellS - e.s < 30 ? e.s + 0.5 : -1),
        this.kerbPass(e, t),
        e.lead >= 0 &&
          e.mode === 0 &&
          !e.two &&
          e.bypass === 0 &&
          e.back <= 0 &&
          e.dwellS < 0 &&
          e.laneCd <= 0)
      ) {
        let t = this.cars[e.lead];
        if (t.kind === w1 && t.active && t.mode === 0 && t.link === e.link) {
          let n = this.links[e.link],
            r = t.s - e.s - t.halfL - e.halfL;
          n.lanes === 1 &&
            r > 0.5 &&
            r < 10 &&
            n.length - e.s > 30 &&
            ((e.laneCd = 0.6),
            this.planBypass(e, t.lat - e.lat, t.halfW, t.halfL + 10, r));
        }
      }
      let r = e.dwellS >= 0 && e.dwellT > 0 && this.fareStop[e.idx] !== e0;
      (super.step(e, t, n), r && e.dwellS < 0 && this.endStop(e));
    }
    kerbPass(e, t) {
      let n = e.idx;
      if (
        (this.kerbCd[n] > 0 && (this.kerbCd[n] -= t),
        e.two ||
          e.mode !== 0 ||
          e.why !== 3 ||
          !e.obsVeh ||
          e.obsV >= 0.5 ||
          e.obsGap > 22 ||
          e.dwellS >= 0 ||
          e.committed ||
          e.back > 0 ||
          this.kerbCd[n] > 0)
      )
        return;
      let r = e.obsExt + e.halfW + 0.45;
      if (e.bypass === 0) {
        if (e.obsLat <= 0 || e.obsGap < 0.5 || r - e.obsLat > 1.1) return;
        ((this.kerbCd[n] = 0.3),
          this.planBypass(e, e.obsLat, e.obsExt, e.obsExtF, e.obsGap));
        return;
      }
      let i = e.latTarget + e.bypass,
        a = e.lat + e.obsLat;
      e.blocked < 1.5 ||
        Math.abs(i - a) > e.obsExt + e.halfW + 0.3 ||
        ((this.kerbCd[n] = 1),
        (e.bypass = 0),
        (e.bypassS = -1),
        this.planBypass(
          e,
          e.obsLat,
          e.obsExt,
          e.obsExtF,
          e.obsGap > 0 ? e.obsGap : 0,
        ));
    }
    occupied(e) {
      let t = e.idx;
      return (
        this.fareSeed[t] !== e.seed &&
          ((this.fareSeed[t] = e.seed),
          (this.fare[t] = +(e.seed > 0.45)),
          (this.fareStop[t] = e0)),
        this.fare[t] === 1
      );
    }
    endStop(e) {
      let t = e.idx,
        n = this.fareStop[t];
      ((this.fareStop[t] = e0),
        n === t0
          ? (this.fare[t] = 1)
          : n === r0
            ? (this.fare[t] = 0)
            : n === n0 && this.rng.next() < $1 && (this.fare[t] = 1));
    }
    honk(e, t) {
      if (e.kind === w1) {
        if (!t || e.hornCd > 0) return;
        ((e.hornCd = 8 + this.rng.next() * 6), this.onHorn(e));
        return;
      }
      if (!(e.hornCd > 0)) {
        if (t) {
          ((e.hornCd = 8 + this.rng.next() * 8), this.onHorn(e));
          return;
        }
        ((e.hornCd = 12 + this.rng.next() * 12),
          this.rng.next() < 0.12 && this.onHorn(e));
      }
    }
  };
