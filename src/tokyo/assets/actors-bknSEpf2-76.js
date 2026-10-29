// tokyo/assets/actors-bknSEpf2 76 — math
// Lines 31609-32044 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var ub = 7,
  db = 150,
  fb = 180,
  pb = new be(),
  mb = new N(),
  hb = new b(),
  gb = [],
  _b = [
    [`sedan`, 30],
    [`taxi`, 14],
    [`suv`, 14],
    [`van`, 8],
    [`truck`, 11],
    [`sports`, 3],
  ],
  vb = [
    [`scooter`, 80],
    [`motorcycle`, 14],
    [`superbike`, 6],
  ],
  yb = [
    [`scooter`, 3.5, 11],
    [`motorcycle`, 4, 14],
    [`superbike`, 8, 26],
  ],
  bb = class {
    ctx;
    host;
    timer = 0;
    enabled = !0;
    initial = !0;
    rng = new He(10112061);
    reasons = {};
    rej(e) {
      return ((this.reasons[e] = (this.reasons[e] ?? 0) + 1), null);
    }
    spots = [];
    mix = zd().parked ?? null;
    get keepClear() {
      return zd().keepClear;
    }
    constructor(e, t) {
      ((this.ctx = e), (this.host = t));
    }
    addSpots(e) {
      let t = e.map((e) => ({ ...e, v: null, gone: !1, filled: !1 }));
      return (
        this.spots.push(...t),
        (this.timer = 0),
        () => {
          this.spots = this.spots.filter((e) => !t.includes(e));
        }
      );
    }
    spotOf(e) {
      for (let t of this.spots) if (t.v === e) return t;
      return null;
    }
    updateSpots(e, t, n) {
      let r = 0;
      for (let i of this.spots) {
        let a = Math.hypot(i.x - e, i.z - t),
          o = i.v;
        if (
          (o &&
            (this.host.list.includes(o)
              ? (o.used ||
                  o.destroyed ||
                  o.driver !== `none` ||
                  Math.hypot(o.x - i.x, o.z - i.z) > 3) &&
                ((i.v = null),
                (i.gone = !0),
                (o.parked = !o.used && !o.destroyed && o.parked))
              : (i.v = null)),
          i.gone && a > fb && (i.gone = !1),
          i.v || i.gone || a > db || r >= (i.filled ? 1 : 4) || n - r <= 0)
        )
          continue;
        let s = tr[i.kind];
        if (
          !s ||
          (i.filled && a < 90 && this.visible(i.x, 0, i.z, s.halfL + 1))
        )
          continue;
        let c = Math.max(s.halfW, s.halfL) + 0.3;
        if (
          this.ctx.dynamics.query(
            i.x,
            i.z,
            c,
            gb,
            (e) => e.kind === `vehicle` || e.kind === `player`,
          ) > 0
        )
          continue;
        let l =
            i.seed ??
            Ke(Math.round(i.x * 10), Math.round(i.z * 10), 101) / 4294967296,
          u = i.color ?? s.colors[Math.floor(l * 7919) % s.colors.length];
        ((i.v = this.host.spawn(i.kind, i.x, i.z, i.heading, {
          color: u,
          driver: `none`,
          parked: !0,
          seed: l,
        })),
          (i.filled = !0),
          r++);
      }
      return r;
    }
    blockedArea(e, t, n) {
      let r = this.ctx;
      if (r.plan.surfaceAt(e, t) === `plaza` || this.keepClear?.(e, t, n))
        return !0;
      try {
        if (r.districts?.claimed?.(e - n, t - n, e + n, t + n, `props`))
          return !0;
      } catch {}
      return !1;
    }
    target() {
      let e = this.ctx.quality.level;
      return e === `low` ? 5 : e === `medium` ? 7 : e === `high` ? 9 : 10;
    }
    frustumFrame = -1;
    visible(e, t, n, r) {
      if (this.frustumFrame !== this.ctx.time.frame) {
        this.frustumFrame = this.ctx.time.frame;
        let e = this.ctx.camera;
        (mb.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
          pb.setFromProjectionMatrix(mb, e.coordinateSystem, e.reversedDepth));
      }
      return (
        hb.center.set(e, t + 1, n),
        (hb.radius = r),
        pb.intersectsSphere(hb)
      );
    }
    update(e) {
      if (!this.enabled || ((this.timer -= e), this.timer > 0)) return;
      this.timer = 0.5;
      let t = this.ctx,
        n = t.player.position,
        r = this.host.list,
        i = 0;
      for (let e = r.length - 1; e >= 0; e--) {
        let a = r[e];
        if (a.driver !== `none`) continue;
        let o = Math.hypot(a.x - n.x, a.z - n.z);
        if (a.destroyed) {
          let e = t.time.elapsed - a.destroyedAt;
          ((e > 40 && o > 60 && !this.visible(a.x, a.y, a.z, 4)) ||
            e > 150 ||
            (a.sinking > 4 && o > 20)) &&
            this.host.despawn(a);
          continue;
        }
        if (a.sinking > 6) {
          this.host.despawn(a);
          continue;
        }
        if (!a.parked && !a.used) continue;
        let s = a.parked ? this.spotOf(a) : null;
        if (!(s && o < fb)) {
          if (o > (a.used ? 260 : 170) && !this.visible(a.x, a.y, a.z, 5)) {
            this.host.despawn(a);
            continue;
          }
          if (o > 420) {
            this.host.despawn(a);
            continue;
          }
          a.parked && !s && i++;
        }
      }
      let a = this.target(),
        o = this.host.physicalBudget();
      this.spots.length && (o -= this.updateSpots(n.x, n.z, o));
      let s = this.initial ? 60 : 8,
        c = this.initial;
      if (((this.initial = !1), c)) {
        let e = null;
        for (let [t, r, a] of this.mix?.start ?? yb)
          if (!(t === `superbike` && this.rng.next() < 0.4)) {
            if (e && this.spawnBeside(e, t)) {
              (i++, o--);
              continue;
            }
            for (let s = 0; s < 40; s++) {
              let c = this.spawnNear(n.x, n.z, r, a + s * 0.4, !0, t);
              if (c) {
                ((e ??= c), i++, o--);
                break;
              }
            }
          }
      }
      for (
        ;
        i < a &&
        o > 0 &&
        s-- > 0 &&
        !(
          this.spawnNear(n.x, n.z, c ? 10 : 45, c ? 70 : 110, c) &&
          (i++, o--, !c)
        );
      );
    }
    spawnNear(e, t, n, r, i, a) {
      let o = this.ctx,
        s = o.plan,
        c = this.rng.next() * Math.PI * 2,
        l = n + (r - n) * Math.sqrt(this.rng.next()),
        u = e + Math.cos(c) * l,
        d = t + Math.sin(c) * l,
        f = s.roadsNear(u, d);
      if (!f.length) return this.rej(`noroad`);
      let p = f[Math.floor(this.rng.next() * f.length)],
        m = !!a && tr[a].twoWheeler;
      if (p.pedestrian && !m) return this.rej(`ped`);
      let h = p.axis === `x` ? u : d,
        g = Math.round(h / ub),
        _ = g * ub;
      if (_ < p.from + p.halfTotal + 6 || _ > p.to - p.halfTotal - 6)
        return this.rej(`ends`);
      let v = a
          ? Math.sign((p.axis === `x` ? t : e) - p.at) || 1
          : this.rng.next() < 0.5
            ? -1
            : 1,
        y = Ke(p.index, g, v),
        b = new He(y),
        x,
        S = p.kind !== `boulevard` && (!p.major || p.lanesPerDir >= 2),
        C = this.mix,
        w = S ? (p.major ? (C ? C.twoMajor : 0.75) : C ? C.twoMinor : 0.62) : 1;
      x =
        a ||
        (b.next() < w || !S
          ? b.weighted(C ? C.two : vb)
          : b.weighted(C ? C.car : _b));
      let T = tr[x],
        E = T.twoWheeler,
        D = p.axis === `x` ? _ : p.at,
        O = p.axis === `x` ? p.at : _,
        k = E ? 5 : (C?.carNodeClear ?? 9),
        A = Math.ceil(k / 5);
      for (let e = -A; e <= A; e++) {
        let t = (e * k) / A;
        if (s.nodeAt(p.axis === `x` ? _ + t : D, p.axis === `x` ? O : _ + t))
          return this.rej(`node`);
      }
      let j, M, N;
      if (E) {
        let e = p.halfWidth - 0.5,
          t = (b.next() - 0.5) * 3;
        ((j = p.axis === `x` ? _ + t : p.at + v * e),
          (M = p.axis === `x` ? p.at + v * e : _ + t),
          (N = xt(p.axis, v, s.side) + (b.next() - 0.5) * 0.12));
      } else {
        if (p.kind === `boulevard`) return this.rej(`blvd`);
        let e = p.halfWidth - T.halfW - 0.3;
        ((j = p.axis === `x` ? _ : p.at + v * e),
          (M = p.axis === `x` ? p.at + v * e : _),
          (N = xt(p.axis, v, s.side)));
      }
      let ee = Math.hypot(j - e, M - t);
      if (this.blockedArea(j, M, Math.max(T.halfW, T.halfL)))
        return this.rej(`claimed`);
      if (ee < n * 0.8) return this.rej(`tooclose`);
      if (ee > r * 1.6) return this.rej(`toofar`);
      if (!i && ee < 90 && this.visible(j, 0, M, T.halfL + 1))
        return this.rej(`visible`);
      let P = Math.max(T.halfW, T.halfL) + 0.3;
      if (
        o.statics.overlapsRect(
          j - P * 0.7,
          M - P * 0.7,
          j + P * 0.7,
          M + P * 0.7,
          0.6,
        )
      )
        return this.rej(`static`);
      if (
        o.dynamics.query(
          j,
          M,
          P + 1.2,
          gb,
          (e) => e.kind === `vehicle` || e.kind === `player`,
        ) > 0
      )
        return this.rej(`body`);
      for (let e of this.host.list)
        if (Math.hypot(e.x - j, e.z - M) < P + 1.5) return this.rej(`vehicle`);
      if (
        !E &&
        C?.narrowClear &&
        p.lanesPerDir < 2 &&
        this.facingCar(p, _, v, C.narrowClear)
      )
        return this.rej(`narrow`);
      let F = T.colors[Math.floor(b.next() * T.colors.length)];
      return this.host.spawn(x, j, M, N, {
        color: F,
        driver: `none`,
        parked: !0,
        seed: b.next(),
      });
    }
    facingCar(e, t, n, r) {
      for (let i of this.host.list) {
        if (!i.parked || tr[i.kind]?.twoWheeler) continue;
        let a = e.axis === `x` ? i.x : i.z,
          o = (e.axis === `x` ? i.z : i.x) - e.at;
        if (Math.abs(a - t) < r && o * n < 0 && Math.abs(o) < e.halfWidth + 1)
          return !0;
      }
      return !1;
    }
    spawnBeside(e, t) {
      let n = this.ctx,
        r = tr[t],
        i = Math.sin(e.heading),
        a = -Math.cos(e.heading);
      for (let o of [-2.3, 2.3, -4.6, 4.6]) {
        let s = e.x + i * o,
          c = e.z + a * o;
        if (
          n.plan.nodeAt(s, c) ||
          this.blockedArea(s, c, r.halfL) ||
          n.statics.overlapsRect(s - 0.5, c - 0.5, s + 0.5, c + 0.5, 0.6) ||
          n.dynamics.query(
            s,
            c,
            r.halfL + 0.4,
            gb,
            (e) => e.kind === `vehicle` || e.kind === `player`,
          ) > 0 ||
          this.host.list.some((e) => Math.hypot(e.x - s, e.z - c) < 1.8)
        )
          continue;
        let l = this.rng.next();
        return (
          this.host.spawn(t, s, c, e.heading + (this.rng.next() - 0.5) * 0.1, {
            color: r.colors[Math.floor(l * 7919) % r.colors.length],
            driver: `none`,
            parked: !0,
            seed: l,
          }),
          !0
        );
      }
      return !1;
    }
  },
  xb = `
attribute vec3 aCenter;
attribute vec3 aInfo; // kind, sizeX, sizeY
attribute float instanceLights;
attribute float instanceSeed;
uniform float uNight;
uniform float uTime;
uniform float uWet;
varying vec2 vUv;
varying vec4 vCol;
varying float vPool;
#include <fog_pars_vertex>
float vbit(float v, float b) { return mod(floor(v / b), 2.0); }
void main() {
  vUv = position.xy + 0.5;
  float kind = aInfo.x;
  float fl = instanceLights;
  float head = max(smoothstep(0.28, 0.55, uNight), vbit(fl, 32.0)) * (1.0 - vbit(fl, 128.0));
  float brake = vbit(fl, 1.0) * (1.0 - vbit(fl, 128.0));
  float siren = vbit(fl, 16.0);
  float hz = vbit(fl, 8.0);
  float blink = step(0.5, fract(uTime * 1.45 + instanceSeed * 3.7));
  mat4 im = modelMatrix * instanceMatrix;
  vec3 fwd = normalize((im * vec4(0.0, 0.0, -1.0, 0.0)).xyz);
  vec4 wc = im * vec4(aCenter, 1.0);
  vec3 toCam = normalize(cameraPosition - wc.xyz);
  float facing = dot(toCam, fwd);
  vec4 col = vec4(0.0);
  vPool = 0.0;
  if (kind < 0.5) { // head halo
    col = vec4(1.0, 0.93, 0.8, 0.55 * head * uNight * clamp((facing + 0.15) * 1.6, 0.0, 1.0));
  } else if (kind < 1.5) { // tail halo
    col = vec4(1.0, 0.08, 0.05, (0.3 * head * uNight + 0.6 * brake) * clamp((-facing + 0.1) * 1.6, 0.0, 1.0));
  } else if (kind < 2.5) { // head road wash
    col = vec4(1.0, 0.9, 0.72, (0.12 + 0.07 * uWet) * head * uNight);
    vPool = 1.0;
  } else if (kind < 3.5) { // brake wash
    col = vec4(1.0, 0.08, 0.05, (0.04 + 0.08 * uWet) * brake * uNight);
    vPool = 1.0;
  } else if (kind < 4.5) { // siren red
    float ph = step(0.5, fract(uTime * 2.6));
    col = vec4(1.0, 0.1, 0.08, 0.9 * siren * (1.0 - ph));
  } else if (kind < 5.5) { // siren blue
    float ph = step(0.5, fract(uTime * 2.6));
    col = vec4(0.15, 0.3, 1.0, 0.9 * siren * ph);
  } else { // hazard / indicator halos (amber)
    col = vec4(1.0, 0.55, 0.1, 0.6 * hz * blink);
  }
  vCol = col;
  vec4 mvPosition;
  if (vPool > 0.5) {
    mvPosition = viewMatrix * (im * vec4(aCenter + vec3(position.x * aInfo.y, 0.0, position.y * aInfo.z), 1.0));
  } else {
    mvPosition = viewMatrix * wc;
    mvPosition.xy += position.xy * aInfo.y;
  }
  if (col.a < 0.003) mvPosition = vec4(0.0, 0.0, 2.0, 1.0); // cull (behind camera)
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,
  Sb = `
varying vec2 vUv;
varying vec4 vCol;
varying float vPool;
#include <common>
#include <fog_pars_fragment>
void main() {
  float d = length(vUv - 0.5) * 2.0;
  float a = vPool > 0.5 ? pow(max(0.0, 1.0 - d), 1.6) : pow(max(0.0, 1.0 - d), 2.2) + 0.6 * pow(max(0.0, 1.0 - d), 8.0);
  a *= vCol.a;
  if (a < 0.003) discard;
  gl_FragColor = vec4(vCol.rgb * a, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`,
  Cb = null;
