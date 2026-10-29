// tokyo/assets/actors-bknSEpf2 140 — math
// Lines 64139-64576 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var CP = {
    cat: XM,
    cash: ZM,
    vest: QM,
    pistol: $M,
    bat: eN,
    foodbox: tN,
    tea: rN,
    teaCarrier: iN,
    trashbag: aN,
    wallet: oN,
    cone: sN,
    palanquin: cN,
    altar: lN,
    firecracker: uN,
    passport: dN,
    handbag: fN,
    camera: pN,
    blocks: hN,
    block: gN,
    incense: _N,
    stick: vN,
    bento: yN,
    bouquet: bN,
    daruma: NN,
    melonca: aP,
    kippu: oP,
    shinkansenModel: sP,
    pandaGoods: cP,
    ameyokoChoco: lP,
    chochin: uP,
    retroCartridge: dP,
    maidFlyer: fP,
    oldBook: pP,
    guitarPick: mP,
    kabukiTicket: hP,
    ginzaBag: gP,
    salarymanTie: _P,
    furin: vP,
    tenugui: yP,
    sensu: bP,
    ningyoyaki: xP,
    tamagoyaki: SP,
  },
  wP = new N(),
  TP = new v(),
  EP = new Pe(0, 0, 0, `YXZ`),
  DP = new V(),
  OP = new V(),
  kP = new j(),
  AP = class {
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
        EP.set(a, -r, o, `YXZ`),
        TP.setFromEuler(EP),
        DP.set(e, t, n),
        OP.set(i, i, i),
        wP.compose(DP, TP, OP),
        this.sys.mesh.setMatrixAt(this.id, wP));
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
      this.alive && this.sys.mesh.setColorAt(this.id, kP.setHex(e));
    }
    remove() {
      this.alive && ((this.alive = !1), this.sys.release(this));
    }
  },
  jP = class {
    mesh;
    geoIds = {};
    live = new Set();
    constructor(e = 220) {
      let t = {},
        n = 0,
        r = 0;
      for (let e of Object.keys(CP)) {
        let i = CP[e]();
        ((t[e] = i),
          (n += i.attributes.position.count),
          (r += i.index ? i.index.count : 0));
      }
      let i = new C({
        name: `missions-props`,
        vertexColors: !0,
        roughness: 0.5,
        metalness: 0.08,
      });
      ((i.onBeforeCompile = (e) => {
        ((e.uniforms.uNight = Gt.uNight),
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
        (this.mesh = new L(e, n, r, i)),
        (this.mesh.name = `mission-props`),
        (this.mesh.frustumCulled = !1),
        (this.mesh.perObjectFrustumCulled = !0),
        (this.mesh.sortObjects = !1),
        (this.mesh.castShadow = !1),
        (this.mesh.receiveShadow = !1));
      for (let e of Object.keys(t))
        this.geoIds[e] = this.mesh.addGeometry(t[e]);
      let a = this.mesh.addInstance(this.geoIds.cash);
      (this.mesh.setColorAt(a, kP.setHex(16777215)),
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
      (this.mesh.setColorAt(o, kP.setHex(16777215)),
        this.mesh.setVisibleAt(o, !0));
      let s = new AP(this, e, o);
      return (this.live.add(s), s.set(t, n, r, i, a), s);
    }
    release(e) {
      if (this.live.delete(e))
        try {
          this.mesh.deleteInstance(e.id);
        } catch {}
    }
  },
  MP = `
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
  NP = `
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
  PP = [
    16726862, 16762941, 4642815, 16736210, 8257386, 16777215, 16747050,
    11832575,
  ],
  FP = class {
    points;
    mat;
    t = 0;
    bursts = [];
    constructor(e, t, n, r, i = 72) {
      let o = i * 80 * 3,
        s = new Float32Array(o * 3),
        c = new Float32Array(o * 3),
        l = new Float32Array(o * 4),
        u = new Float32Array(o * 3),
        d = new Float32Array(o),
        f = new j(),
        p = new j(),
        m = 0;
      for (let a = 0; a < i; a++) {
        let o = a >= i - 12,
          h = Math.floor(a / 3),
          g = o
            ? r - 5 + Math.random() * 2
            : (h / ((i - 12) / 3)) * (r - 6) + Math.random() * 0.5,
          _ = e + (Math.random() - 0.5) * 170,
          v = t + (Math.random() - 0.35) * 150,
          y = n + (Math.random() - 0.5) * 170;
        (this.bursts.push({ t: g, x: _, y: v, z: y }),
          f.setHex(PP[Math.floor(Math.random() * PP.length)]),
          p.setHex(PP[Math.floor(Math.random() * PP.length)]));
        let b = Math.random(),
          x = 55 + Math.random() * 30,
          S = 2.4 + Math.random() * 1.3,
          C = 9 + Math.random() * 5;
        for (let e = 0; e < 240; e++, m++) {
          let t = e % 3,
            n,
            r,
            i;
          if (t > 0) {
            let e = m - t;
            ((s[m * 3] = s[e * 3]),
              (s[m * 3 + 1] = s[e * 3 + 1]),
              (s[m * 3 + 2] = s[e * 3 + 2]),
              (c[m * 3] = c[e * 3]),
              (c[m * 3 + 1] = c[e * 3 + 1]),
              (c[m * 3 + 2] = c[e * 3 + 2]),
              l.copyWithin(m * 4, e * 4, e * 4 + 4),
              u.copyWithin(m * 3, e * 3, e * 3 + 3),
              (d[m] = t));
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
          ((s[m * 3] = _),
            (s[m * 3 + 1] = v),
            (s[m * 3 + 2] = y),
            (c[m * 3] = n),
            (c[m * 3 + 1] = r),
            (c[m * 3 + 2] = i),
            (l[m * 4] = g + Math.random() * 0.05),
            (l[m * 4 + 1] = x * (b > 0.65 ? 0.6 + Math.random() * 0.4 : 1)),
            (l[m * 4 + 2] = S * (0.8 + Math.random() * 0.3)),
            (l[m * 4 + 3] = C * (0.8 + Math.random() * 0.4)));
          let a = Math.floor(e / 3) % 3 == 0 ? p : f;
          ((u[m * 3] = a.r), (u[m * 3 + 1] = a.g), (u[m * 3 + 2] = a.b));
        }
      }
      let g = new le();
      (g.setAttribute(`position`, new z(new Float32Array(o * 3), 3)),
        g.setAttribute(`aCenter`, new z(s, 3)),
        g.setAttribute(`aDir`, new z(c, 3)),
        g.setAttribute(`aData`, new z(l, 4)),
        g.setAttribute(`aColor`, new z(u, 3)),
        g.setAttribute(`aTrail`, new z(d, 1)),
        (this.mat = new a({
          name: `missions-fireworks`,
          uniforms: { uT: { value: 0 }, uScale: { value: 600 } },
          vertexShader: MP,
          fragmentShader: NP,
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          toneMapped: !1,
        })),
        (this.points = new h(g, this.mat)),
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
  IP = {
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
  LP = [
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
  RP = (e, t, n) => ({ avatar: e, tint: t, scale: n }),
  zP = {
    ming: RP(`student-m`, void 0, 1.02),
    thief: RP(`casual-m`, { top: 1513500, bottom: 2041395, amount: 0.85 }),
    tourist: RP(`casual-f`, { top: 14275310, amount: 0.75 }),
    auntie: RP(`auntie`),
    templeUncle: RP(`elder-m`, { top: 15855592, bottom: 3815994 }),
    courier: RP(`casual-m`, { top: 15217276 }),
    riderGreen: RP(`casual-m`, { top: 2269274 }),
    teaGirl: RP(`student-f`, { top: 3832410 }),
    friend: RP(`casual-f`, { top: 14168122, bottom: 2764602 }),
    office: RP(`office-m`),
    student: RP(`student-m`),
    grandma: RP(`elder-f`),
    businesswoman: RP(`office-f`, { top: 2764613, amount: 0.8 }),
    uncle: RP(`uncle`),
    backpacker: RP(`casual-m`, { top: 3836522, hair: 12093498 }, 1.06),
    hao: RP(`casual-m`, { top: 1381914, hair: 13137978 }),
    bride: RP(`office-f`, { top: 16513268, bottom: 16513268 }),
    groom: RP(`office-m`, { top: 1513501, bottom: 1513501, amount: 0.7 }),
    detective: RP(`office-m2`, { top: 12098154 }),
    influencer: RP(`student-f`, { top: 16754392, bottom: 15921910 }),
    instructor: RP(`uncle`, { top: 2779864, bottom: 12100218 }),
    vendor: RP(`vendor`),
    cop: RP(`police`),
    nerd: RP(`student-m`, { top: 5929546, bottom: 2767466 }, 0.97),
    snatcher: RP(`casual-m`, { top: 1381914, bottom: 2042426 }),
    suit: RP(`office-m`, { top: 6185580, bottom: 4869720 }),
    photographer: RP(`uncle`, { top: 6969914 }),
    officerLin: RP(`office-m`, { top: 2043210, bottom: 2764342 }),
    enforcer: RP(`uncle`, { top: 1315862, bottom: 1842208 }, 1.04),
    agong: RP(`elder-m`),
    mom: RP(`casual-f`, { top: 10119818, amount: 0.7 }),
    officeLady: RP(`office-f`),
    salaryman: RP(`office-m2`),
    hipster: RP(`casual-m`, { top: 6969930, amount: 0.7 }),
    worker: RP(`casual-m`, { top: 15759906, bottom: 3820130 }),
    taxiDriver: RP(`uncle`, { top: 15779880 }),
    templeLady: RP(`auntie`, { top: 9054778 }),
    clerk: RP(`student-f`, { top: 2067020 }),
    studentGirl: RP(`student-f`),
    jogger: RP(`student-m`, { top: 14739182 }),
    ximenGirl: RP(`casual-f`, { top: 15921906, amount: 0.6 }),
  },
  BP = {
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
  VP = new WeakMap();
