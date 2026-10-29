// tokyo/assets/characters-p5grEi98 33 — math
// Lines 9934-10206 of readable/tokyo/assets/characters-p5grEi98.pretty.js (statement-aligned).
var Xo = (e, t, n) => (e < t ? t : e > n ? n : e),
  Zo = class {
    ch;
    phase = 0;
    t = 0;
    blinkT = 1 + Math.random() * 2;
    blinkP = -1;
    sacT = 0.5 + Math.random();
    gazeTX = 0;
    gazeTY = 0;
    gazeX = 0;
    gazeY = 0;
    carry;
    stance;
    constructor(e, t = 0) {
      ((this.ch = e),
        (this.t = t * 13.1),
        (this.stance = (e.desc.seed ?? t) % 2 ? 1 : -1));
      let n = (t) => e.desc.acc.some((e) => e.kind === t);
      this.carry = {
        umbrella: n(`umbrella`),
        cup: n(`cup`),
        phone: n(`phone`),
        bagL: n(`marketBag`),
        fan: n(`fan`),
      };
    }
    update(e, t) {
      let n = this.ch.bones;
      this.t += e;
      let r = this.t,
        i = Xo(t.gait, 0, 2),
        a = Xo(i, 0, 1),
        o = Xo(i - 1, 0, 1),
        s = 1 - Xo(i * 3, 0, 1),
        c = (1.35 + 0.9 * o) * (this.ch.height / 1.72);
      ((this.phase += (t.speed / c) * Math.PI * 2 * e),
        this.phase > Math.PI * 2 && (this.phase -= Math.PI * 2));
      let l = this.phase,
        u = Math.sin(l),
        d = this.ch.desc.stoop ?? (this.ch.desc.age === `elder` ? 0.45 : 0),
        f = u * (0.37 * a + 0.33 * o),
        p = -f,
        m =
          a * (0.08 + 0.6 * Math.max(0, Math.cos(l + 0.5))) +
          o * (0.35 + 1.05 * Math.max(0, Math.cos(l + 0.3))),
        h =
          a * (0.08 + 0.6 * Math.max(0, -Math.cos(l + 0.5))) +
          o * (0.35 + 1.05 * Math.max(0, -Math.cos(l + 0.3))),
        g = Math.sin(r * 0.19) * s;
      ((m += 0.08 * Math.max(0, g) + d * 0.1),
        (h += 0.08 * Math.max(0, -g) + d * 0.1));
      let _ = 0.3 * a + 0.55 * o,
        v = -u * _,
        y = u * _,
        b = Math.max(
          0,
          (this.ch.desc.build === `heavy`
            ? 1
            : this.ch.desc.build === `avg`
              ? 0.35
              : 0) - 0.2,
        ),
        x = 0.07 * a + 0.1 * o + (0.018 + 0.05 * b) * s + 0.02,
        S = x,
        C = 0.15 * a + 1.15 * o + 0.3 * s + Math.max(0, -u) * 0.3 * a,
        w = 0.15 * a + 1.15 * o + 0.34 * s + Math.max(0, u) * 0.3 * a;
      ((v += 0.06 * s), (y += 0.045 * s));
      let T = -0.42 * s - 0.2 * a * (1 - o),
        E = 0.42 * s + 0.2 * a * (1 - o),
        D = 0,
        O = 0,
        k = 0,
        A = 0.035 * a + 0.24 * o + d * 0.3 + 0.012 * Math.sin(r * 1.7) * s,
        j = u * (0.06 * a + 0.1 * o),
        ee = -d * 0.25 + s * 0.04 * Math.sin(r * 0.31),
        M = 1 - o,
        N = this.carry;
      ((N.umbrella || N.cup || N.fan) && (E *= 1 - M),
        (N.phone || N.bagL) && (T *= 1 - M),
        N.umbrella
          ? ((y += (0.32 - y) * M),
            (S += (-0.3 - S) * M),
            (w += (1.72 - w) * M),
            (D = Math.PI - (y + w)))
          : N.cup
            ? ((y += (0.12 + y * 0.3 - y) * M),
              (w += (1.35 - w) * M),
              (S += (-0.05 - S) * M),
              (D = -(y + w) + 0.05))
            : N.fan &&
              ((y += (0.35 - y) * M),
              (w += (1.9 + 0.25 * Math.sin(r * 9) - w) * M),
              (S += (0.15 - S) * M)),
        N.phone
          ? ((v += (0.3 - v) * M),
            (C += (1.45 - C) * M),
            (x += (-0.3 - x) * M),
            (ee += 0.4 * M * (1 - o)),
            (O = -0.2),
            (k = 0.9))
          : N.bagL &&
            ((v += (v * 0.3 - v) * M),
            (x += (0.2 - x) * M),
            (C += (0.06 - C) * M)));
      let te =
          -0.86 * (1 - Math.cos(f)) * (this.ch.height / 1.72) * 0.7 +
          o * 0.045 * Math.abs(Math.cos(l)) -
          0.012 * Math.abs(g) -
          d * 0.015,
        ne = this.stance * s * (d > 0.3 ? 0.4 : 1),
        re = +(ne > 0),
        ie = +(ne < 0),
        ae = Math.abs(ne);
      ((m += 0.2 * re * ae),
        (h += 0.2 * ie * ae),
        n[L.thighL].rotation.set(
          f + 0.1 * re * ae,
          0,
          -0.02 - 0.05 * re * ae + 0.045 * ne,
        ),
        n[L.thighR].rotation.set(
          p + 0.1 * ie * ae,
          0,
          0.02 + 0.05 * ie * ae + 0.045 * ne,
        ),
        n[L.shinL].rotation.set(-m, 0, 0),
        n[L.shinR].rotation.set(-h, 0, 0),
        n[L.footL].rotation.set(
          -(f - m) - 0.1 * a * Math.max(0, -Math.sin(l + 0.4)),
          0,
          0.02,
        ),
        n[L.footR].rotation.set(
          -(p - h) - 0.1 * a * Math.max(0, Math.sin(l + 0.4)),
          0,
          -0.02,
        ),
        n[L.armL].rotation.set(v, 0, -x),
        n[L.armR].rotation.set(y, 0, S),
        n[L.foreL].rotation.set(C, T, 0),
        n[L.foreR].rotation.set(w, E, 0));
      let oe = 0.05 * s + 0.02,
        se = 0.035 * s;
      (n[L.shoulderL].rotation.set(0, -oe + 0.04 * u * a, se),
        n[L.shoulderR].rotation.set(0, oe + 0.04 * u * a, -se),
        n[L.handL].rotation.set(O, k, 0),
        n[L.handR].rotation.set(D, 0, 0));
      let ce = 0.25 + 0.35 * o;
      (n[L.fingersL].rotation.set(0, 0, ce + (N.phone || N.bagL ? 0.5 : 0)),
        n[L.fingersR].rotation.set(
          0,
          0,
          -(ce + (N.umbrella || N.cup || N.fan ? 0.6 : 0)),
        ),
        n[L.spine].rotation.set(-A * 0.5, -j * 0.5, 0),
        n[L.chest].rotation.set(
          -A * 0.5 + 0.015 * Math.sin(r * 1.6) * s,
          -j * 0.5,
          0,
        ),
        n[L.hips].rotation.set(
          0,
          j * 0.6 + 0.06 * ne,
          u * 0.03 * a - 0.045 * ne,
        ),
        (n[L.chest].rotation.z = 0.035 * ne));
      let le = this.ch.rest[L.hips];
      n[L.hips].position.set(
        le.x + 0.012 * g + 0.022 * ne,
        le.y + te - 0.008 * ae,
        le.z,
      );
      let ue =
        (t.look ?? 0) + s * 0.25 * Math.sin(r * 0.23) * Math.sin(r * 0.11 + 2);
      if (
        (n[L.neck].rotation.set(-ee * 0.5, ue * 0.4, 0),
        n[L.head].rotation.set(
          -ee * 0.5 + (a > 0 ? 0.02 * Math.sin(l * 2) : 0),
          ue * 0.6 - j * 0.8,
          (0.035 * ne + 0.02 * Math.sin(r * 0.17)) * s,
        ),
        (this.sacT -= e),
        this.sacT <= 0)
      ) {
        this.sacT = 0.5 + Math.random() * 2.2;
        let e = Math.random() < 0.35;
        ((this.gazeTY =
          (Math.random() - 0.5) * (e ? 0.2 : 0.06) * (0.4 + 0.6 * s)),
          (this.gazeTX = (Math.random() - 0.5) * 0.06 - 0.02 * a));
      }
      let de = Math.min(1, e * 28);
      ((this.gazeX += (this.gazeTX - this.gazeX) * de),
        (this.gazeY += (this.gazeTY + ue * 0.35 - this.gazeY) * de),
        n[L.eyeL].rotation.set(this.gazeX, this.gazeY, 0),
        n[L.eyeR].rotation.set(this.gazeX, this.gazeY, 0),
        n[L.hair].rotation.set(
          0.1 * a * Math.sin(l * 2 + 1) + 0.05 * o,
          0.12 * a * Math.sin(l),
          0.08 * Math.sin(r * 1.3) * s,
        ),
        (this.blinkT -= e));
      let fe = 0.001;
      if (this.blinkP >= 0) {
        this.blinkP += e;
        let t = this.blinkP;
        ((fe = t < 0.06 ? t / 0.06 : t < 0.16 ? 1 - (t - 0.06) / 0.1 : 0.001),
          t >= 0.16 && (this.blinkP = -1));
      } else
        this.blinkT <= 0 &&
          ((this.blinkP = 0), (this.blinkT = 2 + Math.random() * 3.5));
      if (
        ((fe = Math.max(0.001, fe)),
        n[L.lidL].scale.set(1, fe, 1),
        n[L.lidR].scale.set(1, fe, 1),
        t.talk !== void 0 || t.jaw !== void 0)
      ) {
        let i = Xo(t.talk ?? 0, 0, 1);
        this.talkW += (i - this.talkW) * Math.min(1, e * 8);
        let a = Math.abs(
            Math.sin(r * 11.7) * (0.55 + 0.45 * Math.sin(r * 3.1 + 1.3)),
          ),
          o = this.talkW * (0.03 + 0.1 * a) + Xo(t.jaw ?? 0, 0, 1) * 0.22;
        n[L.jaw].rotation.set(-o, 0, 0);
      }
    }
    talkW = 0;
  },
  Y = {
    porcelain: 15980224,
    fair: 15518125,
    light: 14990748,
    medium: 14199428,
    tan: 13211248,
    deep: 11566682,
  },
  X = {
    black: 1709073,
    softBlack: 2431766,
    darkBrown: 3022873,
    brown: 4862498,
    ash: 6970450,
    auburn: 5909022,
    grey: 9407108,
    white: 13223359,
  };
function Z(e = {}) {
  return {
    jaw: 0.5,
    length: 0.5,
    cheek: 0.5,
    eyeSize: 1,
    eyeTilt: 0.1,
    eyeGap: 1,
    lid: 0.5,
    noseW: 0.5,
    noseL: 0.5,
    bridge: 0.4,
    lips: 0.5,
    mouthW: 1,
    brow: 0.5,
    browArch: 0.4,
    iris: 3810328,
    lipColor: 0,
    blush: 0.1,
    liner: 0,
    facial: `none`,
    wrinkles: 0,
    mole: 0,
    smile: 0.1,
    ...e,
  };
}
