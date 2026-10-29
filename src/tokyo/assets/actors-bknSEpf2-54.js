// tokyo/assets/actors-bknSEpf2 54 — bones
// Lines 20403-20597 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
var qm = null;
function Jm() {
  return (qm ??= t(
    () => import(`./api-CqQ1pZ52.js`),
    __vite__mapDeps([
      11, 12, 1, 2, 3, 4, 5, 6, 7, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
      24, 25, 26, 27, 28, 29, 30,
    ]),
  ));
}
function Ym(e) {
  Jm()
    .then((t) => t.preloadAvatars(e))
    .catch(() => {});
}
function Xm(e) {
  Jm()
    .then((t) => t.releaseAvatarAsset(e))
    .catch(() => {});
}
var Zm = [
    [26, 0.03, -0.004, -0.006],
    [27, 0.014, -0.004, 0],
    [21, -0.004, 0, -0.01],
    [18, -0.008, -0.006, -0.004],
    [19, -0.008, -0.006, -0.004],
    [20, -0.008, -0.006, -0.004],
  ],
  Qm = new V(),
  $m = new N();
function eh(e, t) {
  let n = new V(1 / 0, 1 / 0, 1 / 0),
    r = new V(-1 / 0, -1 / 0, -1 / 0);
  (e.root.updateMatrixWorld(!0), $m.copy(e.root.matrixWorld).invert());
  for (let i of e.meshes) {
    if (!/-(head|hair)$/.test(i.name)) continue;
    let e = i.geometry.attributes.position.count;
    for (let a = 0; a < e; a++)
      (i.getVertexPosition(a, Qm),
        Qm.applyMatrix4(i.matrixWorld).applyMatrix4($m),
        !(Qm.y < t - 0.015) && (n.min(Qm), r.max(Qm)));
  }
  return { min: n, max: r };
}
function th(e, t) {
  let n = e.skeleton,
    r = t.skeleton;
  if (n.bones.length !== r.bones.length || !e.bindMatrix.equals(t.bindMatrix))
    return !1;
  for (let e = 0; e < n.bones.length; e++)
    if (
      n.bones[e] !== r.bones[e] ||
      !n.boneInverses[e].equals(r.boneInverses[e])
    )
      return !1;
  return !0;
}
function nh(e) {
  return (
    (typeof ImageBitmap < `u` && e instanceof ImageBitmap) ||
    (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement)
  );
}
function rh(e) {
  return !!e.quality.mobile && lt() >= 1;
}
var ih = { textures: 0, compressed: 0, halved: 0, halvedMB: 0, reuploaded: 0 };
function ah(e, t) {
  let n = rh(e),
    r = e.renderer?.gl?.properties,
    i = (e) => !!r && r.get(e).__webglTexture !== void 0;
  for (let e of t.meshes) {
    let t = e.material;
    for (let e of [t.map, t.normalMap, t.roughnessMap, t.metalnessMap]) {
      if (!e || e.userData.playerTrim) continue;
      ((e.userData.playerTrim = 1), ih.textures++);
      let t = i(e),
        r = e;
      if (r.isCompressedTexture) {
        ih.compressed++;
        let i = r.mipmaps;
        if (!i || !i.length) continue;
        if (n && i.length > 1 && i[0].width >= 512) {
          t && e.dispose();
          let n = i.shift();
          (ih.halved++,
            (ih.halvedMB += (n.data?.byteLength ?? 0) / 1048576),
            (e.image = { width: i[0].width, height: i[0].height }),
            (e.needsUpdate = !0));
        } else t && ((e.needsUpdate = !0), ih.reuploaded++);
        yt(e);
        continue;
      }
      let a = e.image;
      if (nh(a) && a.width) {
        if (n && a.width >= 512) {
          let n = document.createElement(`canvas`);
          ((n.width = a.width >> 1), (n.height = a.height >> 1));
          let r = n.getContext(`2d`);
          if (r) {
            ((r.imageSmoothingQuality = `high`),
              r.drawImage(a, 0, 0, n.width, n.height),
              t && e.dispose(),
              a.close?.(),
              (e.image = n),
              (e.needsUpdate = !0),
              ih.halved++,
              yt(e));
            continue;
          }
        }
        (t &&
          typeof ImageBitmap < `u` &&
          a instanceof ImageBitmap &&
          ((e.needsUpdate = !0), ih.reuploaded++),
          yt(e));
      }
    }
  }
}
async function oh(e, t) {
  let n = await (
      await Jm()
    ).createAvatar(t, { castShadow: !0, receiveShadow: !0, fringe: !rh(e) }),
    r = n.meshes[0];
  for (let e of n.meshes)
    (jo(e.material),
      /-hair$/.test(e.name) && (e.castShadow = !1),
      e !== r &&
        e.skeleton !== r.skeleton &&
        th(e, r) &&
        e.bind(r.skeleton, e.bindMatrix));
  let i = n.toPlayerRig(),
    a = n.adapter.proxy.joints,
    o = (a[W.lidL].y + a[W.lidR].y) / 2;
  ah(e, n);
  let s = Mm(eh(n, o), n.height, o, a[W.head].z),
    c = Km({
      id: t,
      kind: `rocketbox`,
      root: n.root,
      meshes: n.meshes,
      bones: i.bones.slice(),
      joints: i.joints.map((e) => e.clone()),
      lib: a,
      rc: { bones: n.bones, joints: a },
      height: n.height,
      thighLen: i.thighLen,
      shinLen: i.shinLen,
      hipHeight: i.hipHeight,
      head: s,
      propMaterial: Gm(),
      nudges: Zm,
      update: () => n.update(),
      dispose: () => n.dispose(),
    });
  try {
    let t = {
      eyeL: a[W.lidL],
      eyeR: a[W.lidR],
      chest: a[W.chest],
      neck: a[W.neck],
      armL: a[W.armL],
      armR: a[W.armR],
      hips: a[W.hips],
    };
    eu(e, c, Tl(n.root, n.meshes, t, s, n.entry.sex === `f`));
  } catch (e) {
    console.warn(`[wardrobe] could not dress`, t, e);
  }
  return c;
}
function sh(e, t, n, r) {
  let i = Promise.all(t.map((t) => oh(e, t))).then((e) => {
    let t = {};
    return (e.forEach((e) => (t[e.id] = e)), t);
  });
  return new Promise((e, t) => {
    let a = !1,
      o = setTimeout(() => {
        ((a = !0), t(Error(`heroes: not loaded after ${n} ms`)));
      }, n);
    i.then(
      (t) => {
        if (!a) (clearTimeout(o), e(t));
        else if (r) r(t);
        else for (let e of Object.values(t)) e.dispose();
      },
      (e) => {
        (clearTimeout(o), t(e));
      },
    );
  });
}
