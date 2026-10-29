// tokyo/assets/avatar-Cm3dja-U 14 — add
// Lines 4518-4832 of readable/tokyo/assets/avatar-Cm3dja-U.pretty.js (statement-aligned).
async function Lr(e, t) {
  let n = pr();
  if (!t) return n.loadAsync(`${cr}${e}`);
  let r = Dr();
  if (!r) throw Error(`avatars: KTX2 loader unavailable`);
  gr++;
  try {
    return (
      await dt(Promise.resolve(hr), 1e4, `avatars: KTX2 transcoder`),
      n.setKTX2Loader(r),
      await n.loadAsync(`${cr}${e}`)
    );
  } finally {
    (gr--, Or());
  }
}
function Rr(e) {
  let t = Y.get(e);
  return (
    t ||
      ((t = (async () => {
        let t = (await fr()).avatars.find((t) => t.id === e);
        if (!t) throw Error(`avatars: unknown avatar ${e}`);
        let n = performance.now(),
          r = t.fallback ? wr() : `webp`,
          i;
        try {
          i = await Lr(
            r === `ktx2` ? t.file : (t.fallback ?? t.file),
            r === `ktx2`,
          );
        } catch (n) {
          if (r !== `ktx2` || !t.fallback) throw n;
          (console.warn(
            `[avatars] KTX2 failed for ${e}, using WebP textures:`,
            n,
          ),
            (Q = r = `webp`),
            (i = await Lr(t.fallback, !1)));
        }
        let a = Fr(i.scene, r, t);
        return (
          Z.files++,
          {
            entry: t,
            gltf: Ir(i),
            loadMs: performance.now() - n,
            textures: a,
            instances: 0,
            released: !1,
          }
        );
      })()),
      Y.set(e, t)),
    t
  );
}
function zr(e) {
  let t = Y.get(e);
  t &&
    (dr.add(e),
    t.then(
      (e) => Br(e),
      () => {
        Y.get(e) === t && (Y.delete(e), dr.delete(e));
      },
    ));
}
function Br(e) {
  let t = e.entry.id;
  if (e.released || !dr.has(t) || e.instances > 0 || (X.get(t) ?? 0) > 0)
    return;
  ((e.released = !0), Y.delete(t), dr.delete(t));
  let n = new Set(),
    r = new Set(),
    i = new Set();
  e.gltf.scene.traverse((e) => {
    let t = e;
    if (!t.isMesh) return;
    t.geometry && n.add(t.geometry);
    let a = Array.isArray(t.material) ? t.material : [t.material];
    for (let e of a) {
      let t = e;
      if (t) {
        r.add(t);
        for (let e of [t.map, t.normalMap, t.roughnessMap, t.metalnessMap])
          e && i.add(e);
        for (let e of Object.keys(t.userData))
          e.startsWith(`rbx:`) && r.add(t.userData[e]);
      }
    }
  });
  for (let e of n) e.dispose();
  for (let e of i) e.dispose();
  for (let e of r) e.dispose();
}
function Vr(e) {
  for (let t of e)
    Rr(t).catch((e) => console.warn(`[avatars] preload failed`, t, e));
}
function Hr(e) {
  return e.startsWith(`hair`)
    ? `hair`
    : e.startsWith(`head`)
      ? `head`
      : e.startsWith(`atlas`)
        ? `atlas`
        : `body`;
}
var Ur = class {
  asset;
  root = new pe();
  meshes = [];
  adapter;
  entry;
  textures;
  bones;
  height;
  triangles;
  playerRig = null;
  skeletonParent;
  disposed = !1;
  ownMaterials = new Set();
  constructor(e, t = {}) {
    if (((this.asset = e), e.released))
      throw Error(
        `avatars: released asset ${e.entry.id}; load it again before creating a clone`,
      );
    ((this.entry = e.entry),
      (this.textures = e.textures),
      (this.root.name = `avatar-${e.entry.id}`));
    let n = yt(e.gltf.scene);
    this.root.add(n);
    let r = null,
      i = 0,
      a = e.entry.role === `hero`,
      o = t.fringe ?? a,
      s = [];
    n.traverse((n) => {
      let a = n;
      a.isBone && !r && /Pelvis$/.test(a.name) && (r = a);
      let c = n;
      if (!c.isSkinnedMesh) return;
      let l = c.material,
        u = Hr(l.name);
      if (
        ((c.material = or(l, u, { shared: !t.independentMaterials })),
        t.independentMaterials && this.ownMaterials.add(c.material),
        (c.castShadow = t.castShadow ?? !0),
        (c.receiveShadow = t.receiveShadow ?? !0),
        (c.name = `${e.entry.id}-${u}`),
        this.meshes.push(c),
        (i +=
          (c.geometry.index
            ? c.geometry.index.count
            : c.geometry.attributes.position.count) / 3),
        u === `hair` && o)
      ) {
        let n = or(l, `fringe`, { shared: !t.independentMaterials });
        t.independentMaterials && this.ownMaterials.add(n);
        let r = new h(c.geometry, n);
        ((r.name = `${e.entry.id}-fringe`),
          r.position.copy(c.position),
          r.quaternion.copy(c.quaternion),
          r.scale.copy(c.scale),
          (r.renderOrder = 2),
          (r.castShadow = !1),
          (r.receiveShadow = !0),
          s.push([c.parent, r]),
          this.meshes.push(r));
      }
    });
    for (let [e, t] of s) {
      e.add(t);
      let n = this.meshes.find((e) => e.geometry === t.geometry && e !== t);
      t.bind(n.skeleton, n.bindMatrix);
    }
    if (!r) throw Error(`avatars: no Bip01 Pelvis`);
    ((this.triangles = i),
      (this.adapter = new Jn(r)),
      (this.skeletonParent = r.parent),
      (this.bones = this.adapter.proxy.bones),
      (this.height = e.entry.height),
      (this.adapter.proxy.height = this.height),
      this.adapter.reset(),
      this.root.updateMatrixWorld(!0));
    for (let e of this.meshes)
      (e.computeBoundingSphere(), (e.boundingSphere.radius *= 1.35));
    e.instances++;
  }
  update() {
    this.adapter.update();
  }
  get drawCalls() {
    return this.meshes.length;
  }
  asRiggedCharacter(e) {
    let t = this.adapter.proxy;
    return {
      desc: e,
      lod: 0,
      root: this.root,
      mesh: this.meshes[0],
      bones: t.bones,
      skeleton: this.meshes[0].skeleton,
      rest: t.rest,
      joints: t.joints,
      triangles: this.triangles,
      breakdown: {},
      trim: 0,
      height: this.height,
      thighLen: t.thighLen,
      shinLen: t.shinLen,
      dispose: () => this.dispose(),
    };
  }
  toPlayerRig() {
    if (this.playerRig) return this.playerRig;
    this.skeletonParent.add(this.adapter.proxy.root);
    let e = this.adapter.proxy,
      t = e.joints,
      n = Array(33),
      r = Array(33);
    [
      P.hips,
      P.spine,
      P.chest,
      P.neck,
      P.head,
      P.armL,
      P.foreL,
      P.handL,
      P.armR,
      P.foreR,
      P.handR,
      P.thighL,
      P.shinL,
      P.footL,
      P.thighR,
      P.shinR,
      P.footR,
      P.hair,
    ].forEach((i, a) => {
      ((n[a] = e.bones[i]), (r[a] = t[i].clone()));
    });
    let i = [
      [22, P.fingersL],
      [23, P.fingersR],
      [28, P.lidL],
      [29, P.lidR],
      [30, P.shoulderL],
      [31, P.shoulderR],
      [32, P.jaw],
    ];
    for (let [a, o] of i) ((n[a] = e.bones[o]), (r[a] = t[o].clone()));
    let a = (e, n) => t[e].clone().lerp(t[n], 0.6),
      o = [
        [18, P.handR],
        [19, P.handR],
        [20, P.handR],
        [21, P.handL],
        [24, P.head],
        [25, P.head],
        [26, P.handL],
        [27, P.handL],
      ];
    for (let [i, s] of o) {
      let o = new ke();
      o.name = `socket-${i}`;
      let c =
        s === P.head
          ? new j(0, t[P.hair].y, t[P.head].z)
          : a(s, s === P.handR ? P.fingersR : P.fingersL);
      ((r[i] = c.clone()),
        o.position.copy(c).sub(t[s]),
        e.bones[s].add(o),
        (n[i] = o));
    }
    let s = (e, t) => Math.atan2(-(t.z - e.z), -(t.y - e.y));
    return (
      (this.playerRig = {
        bones: n,
        rest: n.map((e) => e.position.clone()),
        joints: r,
        thighLen: e.thighLen,
        shinLen: e.shinLen,
        hipHeight: t[P.hips].y,
        thighRest: s(t[P.thighL], t[P.shinL]),
        shinRest: s(t[P.shinL], t[P.footL]),
      }),
      this.playerRig
    );
  }
  dispose() {
    if (!this.disposed) {
      ((this.disposed = !0), this.root.removeFromParent());
      for (let e of new Set(this.meshes.map((e) => e.skeleton))) e.dispose();
      for (let e of this.ownMaterials) e.dispose();
      (this.ownMaterials.clear(), this.asset.instances--, Br(this.asset));
    }
  }
};
async function Wr(e, t = {}) {
  X.set(e, (X.get(e) ?? 0) + 1);
  let n;
  try {
    return ((n = await Rr(e)), new Ur(n, t));
  } finally {
    let t = (X.get(e) ?? 1) - 1;
    (t ? X.set(e, t) : X.delete(e), n && Br(n));
  }
}
function Gr(e, t, n = 12) {
  return t > n && e.lod1 ? e.lod1 : e.id;
}
