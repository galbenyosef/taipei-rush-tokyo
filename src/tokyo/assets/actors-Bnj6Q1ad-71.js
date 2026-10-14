// tokyo/assets/actors-Bnj6Q1ad 71 — batch
// Lines 34002-34712 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
var ov = new y(),
  sv = new k(),
  cv = new ke(),
  lv = new R(),
  uv = new R(),
  dv = new R(),
  fv =
    Y(14) |
    Y(15) |
    Y(16) |
    Y(17) |
    Y(18) |
    Y(19) |
    Y(20) |
    Y(21) |
    Y(10) |
    Y(23),
  pv = Y(6) | Y(7) | Y(4) | Y(3),
  mv = class {
    active = !1;
    t = 0;
    heading = 0;
    height = 1;
    pitch = 0;
    roll = Math.PI / 2;
    rx = 0;
    rz = 0;
    y = 0;
    cy = 0.3;
    seatY = 0;
    limp = 0;
    rphase = 0;
    gait = 0;
    pose = 0;
    poseW = 0;
    fade = 1;
    headYaw = 0;
    seed = 0;
    cloth = 0;
    width = 1;
    belly = 0;
    female = 0;
    stoop = 0;
    skin = 0;
    hair = 0;
    top = 0;
    bottom = 0;
    shoes = 0;
    accA = 0;
    accB = 0;
    accMask = 0;
    variant = -1;
    vTop = 0;
    vBottom = 0;
    vOuter = 0;
    umbColor = 0;
  },
  hv = {
    low: [0, 0, 0, 30, 105],
    medium: [3, 11, 6, 42, 135],
    high: [5, 15, 10, 52, 165],
    ultra: [8, 20, 16, 70, 200],
  },
  gv = 24,
  _v = typeof location > `u` || !/[?&]pedrecolour=0/.test(location.search),
  vv = typeof location < `u` && /[?&]gpumem=0/.test(location.search),
  yv = { medium: 144, high: 192, ultra: 224 },
  bv = class e {
    batch;
    defs;
    dropped = [];
    blobs;
    nBlob = 0;
    scene;
    fx = null;
    frustum = new v();
    pv = new ke();
    sphere = new C();
    mats;
    pbr;
    lod1;
    lod0;
    lod0Want;
    lod0Queue = [];
    jobT = 0;
    building = 0;
    buildDone = !1;
    workerFreed = !1;
    ready = [];
    builder;
    farId;
    propsId;
    propsAvId;
    placardId;
    bikeId;
    faces;
    heroLod;
    heroMax = 5;
    lod0Dist = 15;
    lod0Max = 10;
    farDist = 52;
    maxDist = 165;
    shadows = !0;
    multiDraw = !0;
    drawCap = 1e9;
    nHero = 0;
    n0 = 0;
    n1 = 0;
    nFar = 0;
    nBikes = 0;
    nProps = 0;
    nAvatar = 0;
    avatarsNear = 0;
    constructor(e, t, n, r, i, a, o, s, c) {
      ((this.scene = e),
        (this.defs = r),
        (this.builder = o),
        (this.pbr = n !== `low`),
        (this.mats = L_(this.pbr)),
        (this.faces = a),
        (this.heroLod = !!a));
      let l = $_(),
        u = ev(`hand`, c),
        d = ev(`avatar`, c),
        p = ev(`placard`),
        m = iv(s),
        h = 0,
        g = 0;
      for (let e of [l, u, d, p, m])
        ((h += e.attributes.position.count), (g += e.index?.count ?? 0));
      for (let e of i)
        e && ((h += e.attributes.position.count), (g += e.index?.count ?? 0));
      (this.heroLod && ((h += r.length * 3700), (g += r.length * 16e3)),
        (this.batch = new Gg(t, h, g, this.mats.mat, this.mats.depth)),
        (S_.uPedData.value = this.batch.data),
        a &&
          ((S_.uFaces.value = a.tex),
          a.gridInfo(S_.uFaceA.value, S_.uFaceB.value)),
        (this.lod1 = i.map((e) => (e ? this.batch.addGeo(e) : -1))),
        (this.farId = this.batch.addGeo(l)),
        (this.propsId = this.batch.addGeo(u)),
        (this.propsAvId = this.batch.addGeo(d)),
        (this.placardId = this.batch.addGeo(p)),
        (this.bikeId = this.batch.addGeo(m)));
      for (let e of [...i, l, u, d, p, m]) e?.dispose();
      if (
        ((this.lod0 = r.map(() => -1)),
        (this.lod0Want = new Uint8Array(r.length)),
        this.heroLod)
      )
        for (let e = 0; e < r.length; e++) this.lod0Queue.push(e);
      a && !vv && (a.release(), et(a.tex));
      for (let e = 0; e < 6; e++) this.dropped.push(new mv());
      e.add(this.batch);
      let _ = new te(1, 1);
      _.rotateX(-Math.PI / 2);
      let v = new f({
        color: 0,
        map: av(),
        transparent: !0,
        opacity: 0.42,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2,
      });
      ((v.name = `peds-blob`),
        (this.blobs = new Se(_, v, t)),
        this.blobs.instanceMatrix.setUsage(b),
        (this.blobs.frustumCulled = !1),
        (this.blobs.count = 0),
        (this.blobs.renderOrder = 1),
        (this.blobs.name = `peds-blobs`),
        e.add(this.blobs));
    }
    static async create(t, n, r, i, a, o, s, c, l, u) {
      let d = r !== `low`,
        f =
          o && o.length === i.length ? o : i.map((e) => a.build(e.desc, 1, _v)),
        p = i.map(() => null),
        m = 0;
      f.forEach((e, t) =>
        e.then(
          (e) => {
            ((p[t] = e), m++);
          },
          (e) => {
            (console.warn(`[peds] variant body failed`, i[t]?.desc.id, e), m++);
          },
        ),
      );
      let h = performance.now(),
        g = d ? new x_(yv[r] ?? 144, i.length) : null;
      if (g)
        for (let e = 0; e < i.length; e++)
          (g.paint(e, i[e].desc),
            performance.now() - h > 12 &&
              (a.pump(4),
              c?.(0.5 * (m / i.length) + 0.3 * (e / i.length)),
              await s(),
              (h = performance.now())));
      g?.flush();
      let _ = m,
        v = performance.now();
      for (; m < i.length;)
        (a.pump(12),
          c?.(0.3 + 0.7 * (m / i.length)),
          await s(),
          m === _
            ? a.usesWorker &&
              performance.now() - v > 8e3 &&
              (console.warn(
                `[peds] body worker stalled, building on the main thread`,
              ),
              a.fallback())
            : ((_ = m), (v = performance.now())));
      let y = p.map((e) => (e ? __(e) : null));
      return new e(t, n, r, i, y, g, a, l, u);
    }
    tick(e) {
      if (!this.heroLod || this.buildDone) {
        this.finishBuilds();
        return;
      }
      let t = this.ready.shift();
      if (t) {
        let e = __(t.d);
        (this.batch.fits(e) && (this.lod0[t.v] = this.batch.addGeo(e)),
          e.dispose());
      }
      let n = this.builder,
        r = n.usesWorker;
      if (
        ((this.jobT -= e), this.lod0Queue.length && this.building < (r ? 2 : 1))
      ) {
        let e = 0;
        for (let t = 0; t < this.lod0Queue.length; t++)
          if (this.lod0Want[this.lod0Queue[t]]) {
            e = t;
            break;
          }
        let t = this.lod0Queue.splice(e, 1)[0];
        (this.building++,
          n.build(this.defs[t].desc, 0, _v).then(
            (e) => {
              (this.building--, this.ready.push({ v: t, d: e }));
            },
            () => this.building--,
          ));
      }
      (!r &&
        n.pending &&
        this.jobT <= 0 &&
        (n.pump(1), (this.jobT = this.lod0Want.includes(1) ? 0.05 : 0.12)),
        !this.lod0Queue.length &&
          !this.building &&
          !this.ready.length &&
          (this.buildDone = !0));
    }
    finishBuilds() {
      (!this.workerFreed &&
        this.builder.pending === 0 &&
        ((this.workerFreed = !0), this.builder.dispose()),
        !(this.batch.released || vv) &&
          this.batch.drawnSinceAdd >= 2 &&
          this.batch.releaseCpu());
    }
    configure(e, t) {
      let [n, r, i, a, o] = hv[e] ?? hv.high;
      ((this.shadows = t),
        (this.heroMax = t ? n : 0),
        (this.batch.castShadow = this.heroMax > 0),
        (this.lod0Dist = this.heroLod ? r : 0),
        (this.lod0Max = this.heroLod ? i : 0),
        (this.farDist = a),
        (this.maxDist = o));
      let s = e !== `low`;
      if (s !== this.pbr) {
        this.pbr = s;
        let e = this.mats;
        ((this.mats = L_(s)),
          (this.batch.material = this.mats.mat),
          (this.batch.customDepthMaterial = this.mats.depth),
          e.mat.dispose(),
          e.depth.dispose());
      }
    }
    begin(e) {
      (this.pv.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        this.frustum.setFromProjectionMatrix(
          this.pv,
          e.coordinateSystem,
          e.reversedDepth,
        ),
        this.batch.begin(),
        (this.nBlob = 0),
        (this.fx = vt(this.scene)),
        (this.nHero =
          this.n0 =
          this.n1 =
          this.nFar =
          this.nBikes =
          this.nProps =
          this.nAvatar =
            0),
        this.lod0Want.fill(0));
    }
    dropBike(e, t, n, r, i, a) {
      let o = this.dropped[0];
      for (let e of this.dropped) {
        if (!e.active) {
          o = e;
          break;
        }
        e.t > o.t && (o = e);
      }
      ((o.active = !0),
        (o.t = 0),
        (o.rx = e),
        (o.rz = n),
        (o.y = t),
        (o.heading = r),
        (o.roll = i >= 0 ? Math.PI / 2 : -Math.PI / 2),
        (o.height = a),
        (o.fade = 1));
    }
    pushDropped(e, t, n) {
      for (let r of this.dropped) {
        if (!r.active) continue;
        ((r.t += e), r.t > 30 && (r.fade -= e * 0.8));
        let i = r.rx - t,
          a = r.rz - n;
        if (r.fade <= 0 || i * i + a * a > 22500) {
          r.active = !1;
          continue;
        }
        !this.batch.full &&
          i * i + a * a < this.maxDist * this.maxDist &&
          this.visible(r.rx, r.y + 0.4, r.rz, 1.2) &&
          (this.write(this.batch.entry(this.bikeId), r, 2, 1), this.nBikes++);
      }
    }
    visible(e, t, n, r) {
      return (
        this.sphere.center.set(e, t, n),
        (this.sphere.radius = r),
        this.frustum.intersectsSphere(this.sphere)
      );
    }
    setMultiDraw(e) {
      ((this.multiDraw = e), (this.drawCap = e ? 1e9 : 60));
    }
    push(e, t) {
      let n = this.batch;
      if (n.n + 3 > n.cap || n.n >= this.drawCap) return;
      let r = e.variant,
        i = e.avW,
        a = i < 0.999,
        o = r >= 0 && this.lod1[r] >= 0 && t < this.farDist;
      if (a) {
        let a;
        if (o) {
          let e = -1;
          (t < this.lod0Dist &&
            this.n0 < this.lod0Max - this.avatarsNear &&
            ((e = this.lod0[r]), e < 0 && i === 0 && (this.lod0Want[r] = 1)),
            e >= 0 ? ((a = e), this.n0++) : ((a = this.lod1[r]), this.n1++));
        } else ((a = this.farId), this.nFar++);
        this.write(n.entry(a), e, +!o, 1 - i);
      } else this.nAvatar++;
      let s = o && i < 0.5 && this.nHero < this.heroMax && t < gv,
        c = e.avHands && i > 0;
      ((o || !a) &&
        (e.accMask & (c ? fv | pv : fv)) !== 0 &&
        (this.multiDraw || t < 22) &&
        (this.write(
          n.entry(c ? this.propsAvId : this.propsId),
          e,
          c ? 3 : 0,
          1,
        ),
        this.nProps++),
        e.pose === 24 &&
          !c &&
          (this.write(n.entry(this.placardId), e, +!o, 1), this.nProps++),
        e.bike && (this.write(n.entry(this.bikeId), e, 2, 1), this.nBikes++),
        s && (this.nHero++, n.markShadow()),
        t < 75 && this.pushBlob(e));
    }
    write(e, t, n, r) {
      let i = this.batch.mats,
        a = e * 16,
        o = t.height;
      if (t.pitch === 0 && t.roll === 0) {
        let e = Math.cos(t.heading) * o,
          n = Math.sin(t.heading) * o;
        ((i[a] = e),
          (i[a + 1] = 0),
          (i[a + 2] = n),
          (i[a + 3] = 0),
          (i[a + 4] = 0),
          (i[a + 5] = o),
          (i[a + 6] = 0),
          (i[a + 7] = 0),
          (i[a + 8] = -n),
          (i[a + 9] = 0),
          (i[a + 10] = e),
          (i[a + 11] = 0),
          (i[a + 12] = t.rx),
          (i[a + 13] = t.y + t.seatY),
          (i[a + 14] = t.rz),
          (i[a + 15] = 1));
      } else
        (sv.set(t.pitch, -t.heading, t.roll, `YXZ`),
          ov.setFromEuler(sv),
          dv.set(0, 0.9 * o, 0).applyQuaternion(ov),
          lv.set(t.rx - dv.x, t.y + t.cy * o - dv.y, t.rz - dv.z),
          cv.compose(lv, ov, uv.set(o, o, o)),
          cv.toArray(i, a));
      let s = this.batch.dataArr,
        c = e * 5 * 4;
      if (n === 3) {
        let e = t;
        ((s[c] = e.avRx),
          (s[c + 1] = e.avRy),
          (s[c + 2] = 22),
          (s[c + 3] = e.avRz));
      } else
        ((s[c] = t.rphase),
          (s[c + 1] = t.gait),
          (s[c + 2] = t.pose),
          (s[c + 3] = t.poseW));
      if (
        ((s[c + 4] = t.fade * r),
        (s[c + 5] = n === 3 ? t.avHyp : t.headYaw),
        (s[c + 6] = t.seed),
        (s[c + 7] = t.cloth),
        n === 3)
      ) {
        let e = t;
        ((s[c + 8] = e.avLx),
          (s[c + 9] = e.avLy),
          (s[c + 10] = e.avLz),
          (s[c + 11] = e.avChest),
          (s[c + 12] = e.avHy),
          (s[c + 13] = e.avHxz),
          (s[c + 14] = t.vTop),
          (s[c + 15] = t.vBottom),
          (s[c + 16] = t.vOuter),
          (s[c + 17] = e.headAccA ? e.accA : t.umbColor),
          (s[c + 18] = t.accB),
          (s[c + 19] = t.accMask));
      } else
        n === 1
          ? ((s[c + 8] = t.width),
            (s[c + 9] = t.belly),
            (s[c + 10] = t.female),
            (s[c + 11] = t.stoop + t.limp * 0.35),
            (s[c + 12] = t.skin),
            (s[c + 13] = t.hair),
            (s[c + 14] = t.top),
            (s[c + 15] = t.bottom),
            (s[c + 16] = t.shoes),
            (s[c + 17] = t.accA),
            (s[c + 18] = t.accB),
            (s[c + 19] = t.accMask))
          : ((s[c + 8] = 1),
            (s[c + 9] = 0),
            (s[c + 10] = 0),
            (s[c + 11] = t.stoop + t.limp * 0.35),
            (s[c + 12] = t.variant),
            (s[c + 13] = 0),
            (s[c + 14] = t.vTop),
            (s[c + 15] = t.vBottom),
            (s[c + 16] = t.vOuter),
            (s[c + 17] = t.umbColor),
            (s[c + 18] = t.accB),
            (s[c + 19] = n === 2 ? 0 : t.accMask));
    }
    pushBlob(e) {
      let t = 0.78 * e.width * e.height,
        n = 0.78 * e.height,
        r = e.heading,
        i = Math.abs(e.pitch) > 0.4 || Math.abs(e.roll) > 0.4,
        a = e.rx,
        o = e.rz;
      i
        ? ((t = 0.8),
          (n = 1.9 * e.height),
          Math.abs(e.roll) > Math.abs(e.pitch) && (r += Math.PI / 2))
        : e.bike && ((t = 0.55), (n = 1.8 * e.height));
      let s =
          Math.max(0, Math.min(1, e.fade)) *
          (e.air ? Math.max(0, 1 - (e.cy - 0.9) * 0.8) : 1),
        c = Math.cos(r),
        l = Math.sin(r),
        u = this.fx;
      if (u) {
        let r = u.take();
        if (r >= 0) {
          let i = u.d;
          ((i[r] = a),
            (i[r + 1] = e.y + 0.025),
            (i[r + 2] = o),
            (i[r + 3] = 0.5 * t * s),
            (i[r + 4] = 0.5 * n * s),
            (i[r + 5] = 6),
            (i[r + 6] = 0),
            (i[r + 7] = 0),
            (i[r + 8] = 0),
            (i[r + 9] = 0.42),
            (i[r + 10] = -l),
            (i[r + 11] = c));
          return;
        }
      }
      let d = this.nBlob++,
        f = this.blobs.instanceMatrix.array,
        p = d * 16;
      ((f[p] = c * t * s),
        (f[p + 1] = 0),
        (f[p + 2] = l * t * s),
        (f[p + 3] = 0),
        (f[p + 4] = 0),
        (f[p + 5] = 1),
        (f[p + 6] = 0),
        (f[p + 7] = 0),
        (f[p + 8] = -l * n * s),
        (f[p + 9] = 0),
        (f[p + 10] = c * n * s),
        (f[p + 11] = 0),
        (f[p + 12] = a),
        (f[p + 13] = e.y + 0.025),
        (f[p + 14] = o),
        (f[p + 15] = 1));
    }
    end() {
      this.batch.end();
      let e = this.nBlob;
      if (((this.blobs.count = e), (this.blobs.visible = e > 0), e > 0)) {
        let t = this.blobs.instanceMatrix;
        (t.clearUpdateRanges(),
          t.addUpdateRange(0, e * 16),
          (t.needsUpdate = !0));
      }
    }
    hasHero(e) {
      return this.lod0[e] >= 0;
    }
    get heroBuilt() {
      let e = 0;
      for (let t of this.lod0) t >= 0 && e++;
      return e;
    }
  },
  xv = class {
    worker = null;
    seq = 1;
    inFlight = new Map();
    local = [];
    built = 0;
    workerMs = 0;
    mainMs = 0;
    constructor(e = !0, t) {
      if (e && typeof Worker < `u`)
        try {
          let e = t
            ? t()
            : new Worker(
                new URL(
                  `/tokyo/assets/bodyWorker-Bk4d3Tu3.js`,
                  `` + import.meta.url,
                ),
                { type: `module` },
              );
          ((e.onmessage = (e) => {
            let t = e.data,
              n = this.inFlight.get(t.id);
            n &&
              (this.inFlight.delete(t.id),
              t.data
                ? (this.built++,
                  (this.workerMs += t.ms ?? 0),
                  n.resolve(t.data))
                : (console.warn(
                    `[peds] body worker job failed, building on the main thread`,
                    t.error,
                  ),
                  this.local.push(n)));
          }),
            (e.onerror = (e) => {
              (e.preventDefault?.(),
                console.warn(
                  `[peds] body worker unavailable, building bodies on the main thread`,
                ),
                this.fallback());
            }),
            (this.worker = e));
        } catch {
          this.worker = null;
        }
    }
    get usesWorker() {
      return !!this.worker;
    }
    get pending() {
      return this.inFlight.size + this.local.length;
    }
    build(e, t, n) {
      return new Promise((r, i) => {
        let a = {
          id: this.seq++,
          desc: e,
          lod: t,
          recolour: n,
          resolve: r,
          reject: i,
          half: null,
        };
        if (this.worker) {
          this.inFlight.set(a.id, a);
          try {
            this.worker.postMessage({ id: a.id, desc: e, lod: t, recolour: n });
          } catch {
            (this.inFlight.delete(a.id), this.local.push(a));
          }
        } else this.local.push(a);
      });
    }
    pump(e) {
      if (!this.local.length) return;
      let t = performance.now();
      do {
        let e = this.local[0];
        try {
          if (!e.half) e.half = v_(e.desc, e.lod);
          else {
            let t = y_(e.half, e.recolour);
            (this.local.shift(), this.built++, e.resolve(t));
          }
        } catch (t) {
          (this.local.shift(), e.reject(t));
        }
      } while (this.local.length && performance.now() - t < e);
      this.mainMs += performance.now() - t;
    }
    fallback() {
      let e = this.worker;
      ((this.worker = null), e?.terminate());
      for (let e of this.inFlight.values()) this.local.push(e);
      this.inFlight.clear();
    }
    dispose() {
      (this.worker?.terminate(), (this.worker = null));
    }
  },
  Sv = [
    15713442, 15251604, 14658436, 13933684, 13209448, 15912368, 14987916,
    15515808, 14461062,
  ],
  Cv = [12879456, 11892562, 10906182, 13603946],
  wv = [1183760, 1643279, 2234642, 2891801, 921104, 1709330],
  Tv = [
    5913126, 7227952, 8082743, 4008480, 9071178, 4864580, 11043674, 6969938,
    10127992,
  ],
  Ev = [9210502, 11118498, 13223874, 7236713, 14473940],
  Dv = [2758166, 3874078, 4858402, 1840148, 5910564, 3810328],
  Ov = [15660022, 15660022, 15660022, 11064562, 16107992, 2763310, 14215408],
  kv = [
    1981066, 2829102, 12597547, 3112301, 8011680, 15246140, 14673642, 3894952,
    15231628, 6130234, 15331058, 1776414, 1776414,
  ],
  Av = [1776414, 2763312, 15909071, 13219556, 16049077, 1776414, 10933480],
  jv = [1710618, 2760988, 3812904, 2237480],
  Mv = [
    15724527, 15263976, 15921386, 2894892, 14275786, 15724527, 10132124,
    13220250,
  ],
  Nv = [2974392, 2974392, 2974392, 14697851, 3815994],
  Pv = [
    16053231, 16053231, 15460060, 13224390, 10132120, 3815996, 1776413, 1776413,
    14207147, 13615784, 2634312,
  ],
  Fv = [
    10136462, 14264998, 11125209, 15720614, 12168911, 7039813, 10242620,
    13212218, 4020805, 7178408, 11904130,
  ],
  Iv = [
    16053490, 16053490, 15921904, 12375018, 13622506, 14673902, 15327203,
    14211286,
  ],
  Lv = [
    16052974, 15722202, 15257552, 12374246, 1907999, 14273456, 11122844,
    13022160, 2765638,
  ],
  Rv = [3886958, 2964567, 5927316, 8229811, 2371656, 4874886],
  zv = [3092791, 2436157, 1710620, 5988198, 3814704, 4472890],
  Bv = [
    1842206, 3684669, 12167044, 13483935, 5790270, 8158592, 2502212, 15263196,
  ],
  Vv = [
    9272157, 5988198, 2765638, 3814704, 6974042, 12167044, 1842206, 4874886,
  ],
  Hv = [
    1842206, 2502212, 13483935, 6965813, 10136462, 8158592, 3886958, 15263196,
  ],
  Uv = [
    12073850, 8080028, 12597547, 14913456, 2793880, 14711609, 10239322, 5926832,
    13936202, 4885098,
  ];
