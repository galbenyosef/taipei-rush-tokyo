// tokyo/assets/actors-qKVitB-C 125 — math
// Lines 58218-58655 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
var nj = {
    cat: kk,
    cash: Ak,
    vest: jk,
    pistol: Mk,
    bat: Nk,
    foodbox: Pk,
    tea: Ik,
    teaCarrier: Lk,
    trashbag: Rk,
    wallet: zk,
    cone: Bk,
    palanquin: Vk,
    altar: Hk,
    firecracker: Uk,
    passport: Wk,
    handbag: Gk,
    camera: Kk,
    blocks: Jk,
    block: Yk,
    incense: Xk,
    stick: Zk,
    bento: Qk,
    bouquet: $k,
    daruma: fA,
    melonca: RA,
    kippu: zA,
    shinkansenModel: BA,
    pandaGoods: VA,
    ameyokoChoco: HA,
    chochin: UA,
    retroCartridge: WA,
    maidFlyer: GA,
    oldBook: KA,
    guitarPick: qA,
    kabukiTicket: JA,
    ginzaBag: YA,
    salarymanTie: XA,
    furin: ZA,
    tenugui: QA,
    sensu: $A,
    ningyoyaki: ej,
    tamagoyaki: tj,
  },
  rj = new R(),
  ij = new I(),
  aj = new O(0, 0, 0, `YXZ`),
  oj = new L(),
  sj = new L(),
  cj = new Me(),
  lj = class {
    sys;
    kind;
    id;
    alive = !0;
    visible = !0;
    x = 0;
    y = 0;
    z = 0;
    constructor(e, t, n) {
      ((this.sys = e), (this.kind = t), (this.id = n));
    }
    set(e, t, n, r = 0, i = 1, a = 0, o = 0) {
      this.alive &&
        ((this.x = e),
        (this.y = t),
        (this.z = n),
        aj.set(a, -r, o, `YXZ`),
        ij.setFromEuler(aj),
        oj.set(e, t, n),
        sj.set(i, i, i),
        rj.compose(oj, ij, sj),
        this.sys.mesh.setMatrixAt(this.id, rj));
    }
    setMatrix(e) {
      this.alive &&
        ((this.x = e.elements[12]),
        (this.y = e.elements[13]),
        (this.z = e.elements[14]),
        this.sys.mesh.setMatrixAt(this.id, e));
    }
    setVisible(e) {
      this.alive &&
        e !== this.visible &&
        ((this.visible = e), this.sys.mesh.setVisibleAt(this.id, e));
    }
    setTint(e) {
      this.alive && this.sys.mesh.setColorAt(this.id, cj.setHex(e));
    }
    remove() {
      this.alive && ((this.alive = !1), this.sys.release(this));
    }
  },
  uj = class {
    mesh;
    geoIds = {};
    live = new Set();
    constructor(e = 220) {
      let t = {},
        n = 0,
        r = 0;
      for (let e of Object.keys(nj)) {
        let i = nj[e]();
        ((t[e] = i),
          (n += i.attributes.position.count),
          (r += i.index ? i.index.count : 0));
      }
      let i = new ye({
        name: `missions-props`,
        vertexColors: !0,
        roughness: 0.5,
        metalness: 0.08,
      });
      ((i.onBeforeCompile = (e) => {
        ((e.uniforms.uNight = bt.uNight),
          (e.vertexShader = e.vertexShader
            .replace(
              `#include <common>`,
              `#include <common>
attribute float glow;
varying float vGlow;`,
            )
            .replace(
              `#include <begin_vertex>`,
              `#include <begin_vertex>
vGlow = glow;`,
            )),
          (e.fragmentShader = e.fragmentShader
            .replace(
              `#include <common>`,
              `#include <common>
varying float vGlow;
uniform float uNight;`,
            )
            .replace(
              `#include <emissivemap_fragment>`,
              `#include <emissivemap_fragment>
totalEmissiveRadiance += vColor.rgb * vGlow * mix(0.3, 1.4, uNight);`,
            )));
      }),
        (i.customProgramCacheKey = () => `missions-props-glow`),
        (this.mesh = new ce(e, n, r, i)),
        (this.mesh.name = `mission-props`),
        (this.mesh.frustumCulled = !1),
        (this.mesh.perObjectFrustumCulled = !0),
        (this.mesh.sortObjects = !1),
        (this.mesh.castShadow = !1),
        (this.mesh.receiveShadow = !1));
      for (let e of Object.keys(t))
        this.geoIds[e] = this.mesh.addGeometry(t[e]);
      let a = this.mesh.addInstance(this.geoIds.cash);
      (this.mesh.setColorAt(a, cj.setHex(16777215)),
        this.mesh.deleteInstance(a));
    }
    get count() {
      return this.live.size;
    }
    add(e, t = 0, n = -1e3, r = 0, i = 0, a = 1) {
      let o;
      try {
        o = this.mesh.addInstance(this.geoIds[e]);
      } catch {
        return null;
      }
      (this.mesh.setColorAt(o, cj.setHex(16777215)),
        this.mesh.setVisibleAt(o, !0));
      let s = new lj(this, e, o);
      return (this.live.add(s), s.set(t, n, r, i, a), s);
    }
    release(e) {
      if (this.live.delete(e))
        try {
          this.mesh.deleteInstance(e.id);
        } catch {}
    }
  },
  dj = `
  uniform float uT;
  uniform float uScale;
  attribute vec3 aCenter;
  attribute vec3 aDir;
  attribute vec4 aData; // x: start time, y: speed, z: life, w: size (m)
  attribute float aTrail; // 0 = head spark, 1..2 = trailing copies
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vA;
  void main() {
    float t = uT - aData.x - aTrail * 0.07;
    if (t < 0.0 || t > aData.z) {
      gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      gl_PointSize = 0.0;
      vA = 0.0;
      return;
    }
    float k = 1.35;
    float travel = aData.y * (1.0 - exp(-k * t)) / k;
    vec3 p = aCenter + aDir * travel;
    p.y -= 4.2 * t * t;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    float life = t / aData.z;
    vA = pow(1.0 - life, 1.4) * (0.75 + 0.25 * sin(t * 40.0 + aData.w * 13.0)) * (1.0 - aTrail * 0.36);
    // initial flash
    vA += smoothstep(0.12, 0.0, t) * 0.8;
    vColor = mix(vec3(1.0, 0.95, 0.85), aColor, smoothstep(0.0, 0.25, t));
    gl_PointSize = aData.w * (1.0 - aTrail * 0.25) * uScale / max(1.0, -mv.z);
  }
`,
  fj = `
  varying vec3 vColor;
  varying float vA;
  void main() {
    vec2 c = gl_PointCoord * 2.0 - 1.0;
    float d = dot(c, c);
    if (d > 1.0) discard;
    float a = exp(-d * 3.5) * vA;
    gl_FragColor = vec4(vColor * 2.2 * a, a);
  }
`,
  pj = [
    16726862, 16762941, 4642815, 16736210, 8257386, 16777215, 16747050,
    11832575,
  ],
  mj = class {
    points;
    mat;
    t = 0;
    bursts = [];
    constructor(e, t, n, r, i = 72) {
      let a = i * 80 * 3,
        o = new Float32Array(a * 3),
        s = new Float32Array(a * 3),
        c = new Float32Array(a * 4),
        l = new Float32Array(a * 3),
        u = new Float32Array(a),
        d = new Me(),
        f = new Me(),
        p = 0;
      for (let a = 0; a < i; a++) {
        let m = a >= i - 12,
          h = Math.floor(a / 3),
          g = m
            ? r - 5 + Math.random() * 2
            : (h / ((i - 12) / 3)) * (r - 6) + Math.random() * 0.5,
          _ = e + (Math.random() - 0.5) * 170,
          v = t + (Math.random() - 0.35) * 150,
          y = n + (Math.random() - 0.5) * 170;
        (this.bursts.push({ t: g, x: _, y: v, z: y }),
          d.setHex(pj[Math.floor(Math.random() * pj.length)]),
          f.setHex(pj[Math.floor(Math.random() * pj.length)]));
        let b = Math.random(),
          x = 55 + Math.random() * 30,
          S = 2.4 + Math.random() * 1.3,
          C = 9 + Math.random() * 5;
        for (let e = 0; e < 240; e++, p++) {
          let t = e % 3,
            n,
            r,
            i;
          if (t > 0) {
            let e = p - t;
            ((o[p * 3] = o[e * 3]),
              (o[p * 3 + 1] = o[e * 3 + 1]),
              (o[p * 3 + 2] = o[e * 3 + 2]),
              (s[p * 3] = s[e * 3]),
              (s[p * 3 + 1] = s[e * 3 + 1]),
              (s[p * 3 + 2] = s[e * 3 + 2]),
              c.copyWithin(p * 4, e * 4, e * 4 + 4),
              l.copyWithin(p * 3, e * 3, e * 3 + 3),
              (u[p] = t));
            continue;
          }
          if (b < 0.2) {
            let t = (Math.floor(e / 3) / 80) * Math.PI * 2;
            ((n = Math.cos(t)),
              (r = Math.sin(t) * 0.5),
              (i = Math.sin(t) * 0.85));
          } else {
            let e = Math.random() * 2 - 1,
              t = Math.random() * Math.PI * 2,
              a = Math.sqrt(1 - e * e);
            ((n = a * Math.cos(t)), (r = e), (i = a * Math.sin(t)));
          }
          ((o[p * 3] = _),
            (o[p * 3 + 1] = v),
            (o[p * 3 + 2] = y),
            (s[p * 3] = n),
            (s[p * 3 + 1] = r),
            (s[p * 3 + 2] = i),
            (c[p * 4] = g + Math.random() * 0.05),
            (c[p * 4 + 1] = x * (b > 0.65 ? 0.6 + Math.random() * 0.4 : 1)),
            (c[p * 4 + 2] = S * (0.8 + Math.random() * 0.3)),
            (c[p * 4 + 3] = C * (0.8 + Math.random() * 0.4)));
          let a = Math.floor(e / 3) % 3 == 0 ? f : d;
          ((l[p * 3] = a.r), (l[p * 3 + 1] = a.g), (l[p * 3 + 2] = a.b));
        }
      }
      let m = new pe();
      (m.setAttribute(`position`, new P(new Float32Array(a * 3), 3)),
        m.setAttribute(`aCenter`, new P(o, 3)),
        m.setAttribute(`aDir`, new P(s, 3)),
        m.setAttribute(`aData`, new P(c, 4)),
        m.setAttribute(`aColor`, new P(l, 3)),
        m.setAttribute(`aTrail`, new P(u, 1)),
        (this.mat = new T({
          name: `missions-fireworks`,
          uniforms: { uT: { value: 0 }, uScale: { value: 600 } },
          vertexShader: dj,
          fragmentShader: fj,
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          toneMapped: !1,
        })),
        (this.points = new re(m, this.mat)),
        (this.points.frustumCulled = !1),
        (this.points.renderOrder = 10),
        this.bursts.sort((e, t) => e.t - t.t));
    }
    update(e, t, n) {
      let r = this.t;
      if (
        ((this.t += e),
        (this.mat.uniforms.uT.value = this.t),
        (this.mat.uniforms.uScale.value = t * 0.87),
        n)
      )
        for (let e of this.bursts) e.t > r && e.t <= this.t && n(e);
    }
    dispose() {
      (this.points.removeFromParent(),
        this.points.geometry.dispose(),
        this.mat.dispose());
    }
  },
  hj = {
    "elder-m": 0.47,
    uncle: 0.48,
    "office-m": 0.5,
    "office-f": 0.53,
    auntie: 0.5,
    "elder-f": 0.5,
    vendor: 0.5,
    "casual-m": 0.55,
    "student-m": 0.56,
    "office-m2": 0.56,
    "casual-f": 0.56,
    "student-f": 0.55,
    police: 0.55,
  },
  gj = [
    `student-m`,
    `casual-m`,
    `casual-f`,
    `office-m`,
    `office-m2`,
    `office-f`,
    `student-f`,
    `uncle`,
    `elder-m`,
    `elder-f`,
    `auntie`,
    `vendor`,
    `police`,
  ],
  _j = (e, t, n) => ({ avatar: e, tint: t, scale: n }),
  vj = {
    ming: _j(`student-m`, void 0, 1.02),
    thief: _j(`casual-m`, { top: 1513500, bottom: 2041395, amount: 0.85 }),
    tourist: _j(`casual-f`, { top: 14275310, amount: 0.75 }),
    auntie: _j(`auntie`),
    templeUncle: _j(`elder-m`, { top: 15855592, bottom: 3815994 }),
    courier: _j(`casual-m`, { top: 15217276 }),
    riderGreen: _j(`casual-m`, { top: 2269274 }),
    teaGirl: _j(`student-f`, { top: 3832410 }),
    friend: _j(`casual-f`, { top: 14168122, bottom: 2764602 }),
    office: _j(`office-m`),
    student: _j(`student-m`),
    grandma: _j(`elder-f`),
    businesswoman: _j(`office-f`, { top: 2764613, amount: 0.8 }),
    uncle: _j(`uncle`),
    backpacker: _j(`casual-m`, { top: 3836522, hair: 12093498 }, 1.06),
    hao: _j(`casual-m`, { top: 1381914, hair: 13137978 }),
    bride: _j(`office-f`, { top: 16513268, bottom: 16513268 }),
    groom: _j(`office-m`, { top: 1513501, bottom: 1513501, amount: 0.7 }),
    detective: _j(`office-m2`, { top: 12098154 }),
    influencer: _j(`student-f`, { top: 16754392, bottom: 15921910 }),
    instructor: _j(`uncle`, { top: 2779864, bottom: 12100218 }),
    vendor: _j(`vendor`),
    cop: _j(`police`),
    nerd: _j(`student-m`, { top: 5929546, bottom: 2767466 }, 0.97),
    snatcher: _j(`casual-m`, { top: 1381914, bottom: 2042426 }),
    suit: _j(`office-m`, { top: 6185580, bottom: 4869720 }),
    photographer: _j(`uncle`, { top: 6969914 }),
    officerLin: _j(`office-m`, { top: 2043210, bottom: 2764342 }),
    enforcer: _j(`uncle`, { top: 1315862, bottom: 1842208 }, 1.04),
    agong: _j(`elder-m`),
    mom: _j(`casual-f`, { top: 10119818, amount: 0.7 }),
    officeLady: _j(`office-f`),
    salaryman: _j(`office-m2`),
    hipster: _j(`casual-m`, { top: 6969930, amount: 0.7 }),
    worker: _j(`casual-m`, { top: 15759906, bottom: 3820130 }),
    taxiDriver: _j(`uncle`, { top: 15779880 }),
    templeLady: _j(`auntie`, { top: 9054778 }),
    clerk: _j(`student-f`, { top: 2067020 }),
    studentGirl: _j(`student-f`),
    jogger: _j(`student-m`, { top: 14739182 }),
    ximenGirl: _j(`casual-f`, { top: 15921906, amount: 0.6 }),
  },
  yj = {
    ama: `grandma`,
    agong: `agong`,
    police: `cop`,
    vendor: `vendor`,
    "office-f": `officeLady`,
    "office-m": `office`,
    "rider-pink": `courier`,
    "rider-green": `riderGreen`,
    "temple-lady": `templeLady`,
    "taxi-uncle": `taxiDriver`,
    "student-m": `student`,
    "student-f": `studentGirl`,
    "ntu-student": `student`,
    tourist: `tourist`,
    auntie: `auntie`,
    uncle: `uncle`,
    mom: `mom`,
    hipster: `hipster`,
    worker: `worker`,
    jogger: `jogger`,
    "ximen-girl": `ximenGirl`,
    clerk: `clerk`,
    salaryman: `salaryman`,
    "rain-commuter": `salaryman`,
    jie: `hao`,
    wen: `friend`,
  },
  bj = new WeakMap();
