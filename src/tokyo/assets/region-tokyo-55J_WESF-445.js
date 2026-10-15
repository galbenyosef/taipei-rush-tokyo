// tokyo/assets/region-tokyo-55J_WESF 445 — math
// Lines 157746-158058 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var zRe = {
    go: {
      zh: `路封好了，就十分鐘！跟緊我——全速前進！`,
      en: `The streets are ours for ten minutes! Stay on my tail — flat out!`,
      ja: `十分間だけ道は貸し切りだ！ついて来い——全開で行くぞ！`,
    },
    drift: {
      zh: `看好了——路口直接甩過去！`,
      en: `Watch this — we drift the crossings!`,
      ja: `見てろ——交差点はドリフトで抜ける！`,
    },
    warn: { zh: `喂！跟上來！`, en: `Hey! Keep up!`, ja: `おい！離されるな！` },
    lost: {
      zh: `……人呢？跟丟了。`,
      en: `…Where did you go? Lost you.`,
      ja: `……どこ行った？見失ったぞ。`,
    },
    stop: { zh: `在這裡停！`, en: `Pull up here!`, ja: `ここで止まるぞ！` },
    end: {
      zh: `到了！跑得不錯嘛。`,
      en: `Here we are! Not bad at all.`,
      ja: `着いた！なかなかやるじゃねえか。`,
    },
  },
  BRe = 0.25,
  b6 = 12,
  x6 = (e) => (
    (e = (e + Math.PI) % (2 * Math.PI)),
    e < 0 && (e += 2 * Math.PI),
    e - Math.PI
  );
function VRe(e, t, n = b6) {
  let r = ht(e, t, !1),
    i = new rt(ut(e, r, BRe, !1, n), !1),
    a = t[0],
    o = t[t.length - 1];
  i.project(a.x, a.z, Q3);
  let s = Q3.dist < 25 ? Q3.s : 0;
  i.project(o.x, o.z, Q3);
  let c = Q3.dist < 25 && Q3.s > s + 50 ? Q3.s : i.length,
    l = [i.pointAt(s, { x: 0, z: 0 })];
  for (let e = 0; e < i.n; e++)
    i.cum[e] > s + 0.5 &&
      i.cum[e] < c - 0.5 &&
      l.push({ x: i.xs[e], z: i.zs[e] });
  return (
    l.push(i.pointAt(c, { x: 0, z: 0 })),
    { path: new rt(l, !1), nodes: r }
  );
}
function HRe(e, t) {
  let n = e.ctx.statics;
  if (typeof n?.resolveRect != `function`) return { path: t, moved: 0 };
  let r = e.ctx.plan,
    i = Math.max(2, Math.ceil(t.length / 2)),
    a = new Float64Array(i + 1),
    o = new Float64Array(i + 1),
    s = new Float64Array(i + 1),
    c = new Float64Array(i + 1),
    l = new Float64Array(i + 1),
    u = { x: 0, y: 0, z: 0 },
    d = [
      0, 0.5, -0.5, 1, -1, 1.5, -1.5, 2, -2, 2.5, -2.5, 3, -3, 3.5, -3.5, 4, -4,
      4.5, -4.5,
    ],
    f = 0;
  for (let e = 0; e <= i; e++) {
    let p = (t.length * e) / i;
    (t.pointAt(p, X3),
      t.dirAt(p, Z3),
      (a[e] = X3.x),
      (o[e] = X3.z),
      (s[e] = -Z3.z),
      (c[e] = Z3.x));
    let m = $3(Z3);
    for (let t of d) {
      ((u.x = X3.x + s[e] * t),
        (u.z = X3.z + c[e] * t),
        (u.y = r.groundHeight(u.x, u.z) + 0.15));
      let i = !0;
      try {
        i = n.resolveRect(u, m, 2.16, 1.6, 1.2).hit;
      } catch {
        i = !1;
      }
      if (!i) {
        ((l[e] = t), t && f++);
        break;
      }
    }
  }
  if (!f) return { path: t, moved: f };
  let p = new Float64Array(i + 1);
  for (let e = 0; e <= i; e++) {
    let t = 0;
    for (let n = Math.max(0, e - 4); n <= Math.min(i, e + 4); n++)
      Math.abs(l[n]) > Math.abs(t) && (t = l[n]);
    p[e] = t;
  }
  let m = [];
  for (let e = 0; e <= i; e++) {
    let t = 0,
      n = 0;
    for (let r = Math.max(0, e - 4); r <= Math.min(i, e + 4); r++)
      ((t += p[r]), n++);
    let r = t / n;
    m.push({ x: a[e] + s[e] * r, z: o[e] + c[e] * r });
  }
  return { path: new rt(m, !1), moved: f };
}
function URe(e, t, n) {
  let r = e.ctx.plan,
    i = [];
  for (let e = 0; e <= t.length; e += 20) {
    let n = t.pointAt(e, { x: 0, z: 0 });
    i.push({ s: e, x: n.x, z: n.z, off: null });
  }
  let a = c6(r, n, !1).map((e) => {
      let n = r.nodes[e.node];
      return (
        t.project(n.x, n.z, Q3),
        { s: Q3.dist < 30 ? Q3.s : -1e9, cones: e.cones, props: null }
      );
    }),
    o = [];
  for (let e = 0; e < n.length; e++)
    for (let i of [e - 1, e + 1]) {
      if (i < 0 || i >= n.length) continue;
      let a = r.linkBetween(n[e], n[i]);
      if (!a || a.from !== n[e]) continue;
      let s = a.sx + a.dx,
        c = a.sz + a.dz;
      (t.project(s, c, Q3),
        Q3.dist < 20 &&
          o.push({
            s: Q3.s,
            x: s,
            z: c,
            r: a.road.halfWidth + 0.3,
            off: null,
            done: !1,
          }));
    }
  let s = e.ctx.peds,
    c = 0,
    l = 0,
    u = 0,
    d = 0,
    f = 0,
    p = s6(
      e,
      t,
      () => c - 20,
      () => l + 320,
    );
  return {
    update: (t, n, u, m = !1) => {
      if (((c = n), (l = u), p(t), !(!m && (f -= t) > 0))) {
        f = 0.4;
        for (let t of i) {
          let r = t.s >= n - 60 && t.s <= u + 420;
          r && !t.off
            ? (t.off = e.holdTraffic(t.x, t.z, 18))
            : !r && t.off && (t.off(), (t.off = null));
        }
        for (let t of a) {
          let i = t.s >= n - 40 && t.s <= u + 300;
          if (i && !t.props)
            ((t.props = t.cones.map((t) =>
              e.prop(`cone`, t.x, r.groundHeight(t.x, t.z), t.z, t.heading),
            )),
              (d += t.props.length));
          else if (!i && t.props) {
            for (let e of t.props) e?.remove();
            ((d -= t.props.length), (t.props = null));
          }
        }
        e.vars.kartCones = d;
        for (let e of o)
          if (!e.done && e.s <= u + 260) {
            e.done = !0;
            try {
              typeof s?.clearArea == `function` &&
                (e.off = s.clearArea(e.x, e.z, e.r, 45));
            } catch {}
          }
      }
    },
    clearAhead: (n) => {
      for (let r = 0; r <= Math.min(t.length, n); r += 25) {
        t.pointAt(r, X3);
        for (let t = 0; t < 8 && u < 160 && o6(e, X3.x, X3.z, 22); t++) u++;
      }
      e.vars.kartCleared = u;
    },
    release: () => {
      for (let e of i) e.off &&= (e.off(), null);
      for (let e of a)
        if (e.props) {
          for (let t of e.props) t?.remove();
          e.props = null;
        }
      for (let e of o)
        if (e.off) {
          try {
            e.off();
          } catch {}
          e.off = null;
        }
    },
  };
}
var S6 = 3.9,
  C6 = class {
    v;
    drv;
    path;
    drift;
    drifting = !1;
    drifts = 0;
    t = 0;
    exiting = !1;
    exitT = 0;
    dir = 0;
    coolT = 0;
    constructor(e, t, n, r = !0) {
      ((this.v = e), (this.drv = t), (this.path = n), (this.drift = r));
    }
    get s() {
      return this.drv.s;
    }
    hAt(e) {
      return (this.path.dirAt(e, Z3), $3(Z3));
    }
    update(e, t, n) {
      let r = this.v,
        i = this.drv;
      if ((i.update(e, t, n), !this.drift)) return;
      let a = r.controls,
        o = r.body,
        s = Math.hypot(o.vx, o.vz),
        c = i.s,
        l = s > 1 ? Math.atan2(o.vx, -o.vz) : r.heading,
        u = 2 + s * 0.4;
      if (!this.drifting && !this.exiting) {
        this.coolT > 0 && (this.coolT -= e);
        let t = 1 + s * 0.25,
          a = x6(this.hAt(c + t + 6) - this.hAt(c + t)),
          o = x6(this.hAt(c + u + 34) - this.hAt(c)),
          l = n >= 0 && n - c < 70;
        s > 11 &&
          this.coolT <= 0 &&
          !l &&
          Math.abs(a) > 0.12 &&
          Math.abs(o) > 0.9 &&
          i.lateral < 2.5 &&
          (r.kart?.spinT ?? 0) <= 0 &&
          ((this.drifting = !0),
          (this.t = 0),
          (this.dir = Math.sign(o)),
          this.drifts++);
      }
      if (!this.drifting && !this.exiting) return;
      this.t += e;
      let d = x6(this.hAt(c + u) - this.hAt(c)) / u,
        f = Math.asin(Math.max(-0.6, Math.min(0.6, (s * d) / S6))),
        p = x6(this.hAt(c + 2) - l),
        m = i6(this.path, c, o.x, o.z),
        h = x6(r.heading - l),
        g = this.exiting ? p - 0.25 * S6 * Math.sin(h) : p,
        _ = Math.max(-0.62, Math.min(0.62, f + 1 * g - 0.08 * m));
      if (this.drifting) {
        let e =
            Math.abs(x6(this.hAt(c + u + 10) - this.hAt(c))) < 0.1 &&
            Math.abs(p) < 0.12,
          t =
            i.lateral > 4 ||
            Math.abs(h) > 1 ||
            s < 7 ||
            this.t > 4.5 ||
            (r.kart?.spinT ?? 0) > 0;
        (e || t) &&
          ((this.drifting = !1),
          (this.exiting = !0),
          (this.exitT = 0),
          (this.coolT = 0.8));
      }
      if (this.exiting) {
        if (
          ((this.exitT += e),
          (!r.drifting && this.exitT > 0.15) ||
            this.exitT > 1.6 ||
            (r.kart?.spinT ?? 0) > 0)
        ) {
          this.exiting = !1;
          return;
        }
        ((a.handbrake = !1), (a.steer = Math.max(-1, Math.min(1, _ / 0.56))));
        return;
      }
      let v = this.t < 0.2 ? 0.4 : -0.1,
        y = _ / 0.56;
      ((y =
        this.dir > 0
          ? Math.max(v, Math.min(1, y))
          : Math.min(-v, Math.max(-1, y))),
        (a.handbrake = !0),
        (a.steer = y),
        a.brake > 0
          ? ((a.brake = Math.min(a.brake, 0.25)), (a.throttle = 0))
          : (a.throttle = Math.max(a.throttle, 0.85)));
    }
  };
