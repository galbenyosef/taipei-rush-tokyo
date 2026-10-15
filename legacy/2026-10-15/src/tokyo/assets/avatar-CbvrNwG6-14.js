// tokyo/assets/avatar-CbvrNwG6 14 — adapter
// Lines 4442-4694 of readable/tokyo/assets/avatar-CbvrNwG6.pretty.js (statement-aligned).
function Ar(e) {
  let t = rr.get(e);
  return (
    t ||
      ((t = (async () => {
        let t = (await ir()).avatars.find((t) => t.id === e);
        if (!t) throw Error(`avatars: unknown avatar ${e}`);
        let n = performance.now(),
          r = t.fallback ? gr() : `webp`,
          i;
        try {
          i = await kr(
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
            (i = await kr(t.fallback, !1)));
        }
        let a = Dr(i.scene, r, t);
        return (
          Z.files++,
          { entry: t, gltf: Or(i), loadMs: performance.now() - n, textures: a }
        );
      })()),
      rr.set(e, t)),
    t
  );
}
function jr(e) {
  let t = rr.get(e);
  t &&
    (rr.delete(e),
    t.then(
      (e) => {
        e.gltf.scene.traverse((e) => {
          let t = e;
          if (!t.isMesh) return;
          t.geometry?.dispose();
          let n = t.material;
          if (n) {
            for (let e of [n.map, n.normalMap, n.roughnessMap, n.metalnessMap])
              e?.dispose();
            for (let e of Object.keys(n.userData))
              e.startsWith(`rbx:`) && n.userData[e].dispose?.();
            n.dispose();
          }
        });
      },
      () => {},
    ));
}
function Mr(e) {
  for (let t of e)
    Ar(t).catch((e) => console.warn(`[avatars] preload failed`, t, e));
}
function Nr(e) {
  return e.startsWith(`hair`)
    ? `hair`
    : e.startsWith(`head`)
      ? `head`
      : e.startsWith(`atlas`)
        ? `atlas`
        : `body`;
}
var Pr = class {
  root = new m();
  meshes = [];
  adapter;
  entry;
  textures;
  bones;
  height;
  triangles;
  playerRig = null;
  skeletonParent;
  constructor(e, t = {}) {
    ((this.entry = e.entry),
      (this.textures = e.textures),
      (this.root.name = `avatar-${e.entry.id}`));
    let n = _t(e.gltf.scene);
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
        u = Nr(l.name);
      if (
        ((c.material = $n(l, u)),
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
        let t = new y(c.geometry, $n(l, `fringe`));
        ((t.name = `${e.entry.id}-fringe`),
          t.position.copy(c.position),
          t.quaternion.copy(c.quaternion),
          t.scale.copy(c.scale),
          (t.renderOrder = 2),
          (t.castShadow = !1),
          (t.receiveShadow = !0),
          s.push([c.parent, t]),
          this.meshes.push(t));
      }
    });
    for (let [e, t] of s) {
      e.add(t);
      let n = this.meshes.find((e) => e.geometry === t.geometry && e !== t);
      t.bind(n.skeleton, n.bindMatrix);
    }
    if (!r) throw Error(`avatars: no Bip01 Pelvis`);
    ((this.triangles = i),
      (this.adapter = new Kn(r)),
      (this.skeletonParent = r.parent),
      (this.bones = this.adapter.proxy.bones),
      (this.height = e.entry.height),
      (this.adapter.proxy.height = this.height),
      this.adapter.reset(),
      this.root.updateMatrixWorld(!0));
    for (let e of this.meshes)
      (e.computeBoundingSphere(), (e.boundingSphere.radius *= 1.35));
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
      F.hips,
      F.spine,
      F.chest,
      F.neck,
      F.head,
      F.armL,
      F.foreL,
      F.handL,
      F.armR,
      F.foreR,
      F.handR,
      F.thighL,
      F.shinL,
      F.footL,
      F.thighR,
      F.shinR,
      F.footR,
      F.hair,
    ].forEach((i, a) => {
      ((n[a] = e.bones[i]), (r[a] = t[i].clone()));
    });
    let i = [
      [22, F.fingersL],
      [23, F.fingersR],
      [28, F.lidL],
      [29, F.lidR],
      [30, F.shoulderL],
      [31, F.shoulderR],
      [32, F.jaw],
    ];
    for (let [a, o] of i) ((n[a] = e.bones[o]), (r[a] = t[o].clone()));
    let a = (e, n) => t[e].clone().lerp(t[n], 0.6),
      o = [
        [18, F.handR],
        [19, F.handR],
        [20, F.handR],
        [21, F.handL],
        [24, F.head],
        [25, F.head],
        [26, F.handL],
        [27, F.handL],
      ];
    for (let [i, s] of o) {
      let o = new Ce();
      o.name = `socket-${i}`;
      let c =
        s === F.head
          ? new j(0, t[F.hair].y, t[F.head].z)
          : a(s, s === F.handR ? F.fingersR : F.fingersL);
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
        hipHeight: t[F.hips].y,
        thighRest: s(t[F.thighL], t[F.shinL]),
        shinRest: s(t[F.shinL], t[F.footL]),
      }),
      this.playerRig
    );
  }
  dispose() {
    this.root.removeFromParent();
  }
};
async function Fr(e, t = {}) {
  return new Pr(await Ar(e), t);
}
function Ir(e, t, n = 12) {
  return t > n && e.lod1 ? e.lod1 : e.id;
}
