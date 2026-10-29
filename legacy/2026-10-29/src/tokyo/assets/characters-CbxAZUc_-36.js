// tokyo/assets/characters-CbxAZUc_ 36 — math
// Lines 10934-11271 of readable/tokyo/assets/characters-CbxAZUc_.pretty.js (statement-aligned).
function is(e) {
  return rs.find((t) => t.id === e);
}
var as = [
    16052974, 1842210, 2767450, 9051178, 3824186, 14207144, 6982320, 15245480,
    15779880, 5921378, 11061472, 3111530,
  ],
  os = [
    2767450, 1842210, 3820130, 12168070, 5921362, 3026998, 14997695, 4874886,
  ],
  ss = [`fade`, `sidepart`, `twoblock`, `spiky`, `buzz`, `undercut`, `bowl`],
  cs = [`bob`, `long`, `ponytail`, `bun`, `wavy`, `bangs`];
function ls(e, t) {
  let n = e >>> 0 || 1,
    r = () => (n = (n * 1664525 + 1013904223) >>> 0) / 4294967296,
    i = (e) => e[Math.floor(r() * e.length)],
    a = (typeof t == `string` ? is(t) : t) ?? i(ts),
    o = a.sex === `f`,
    s = Object.values(Y),
    c = JSON.parse(JSON.stringify(a));
  ((c.id = `${a.id}~${e}`),
    (c.seed = e),
    (c.skin = i(s)),
    (c.height = a.height + (r() - 0.5) * 0.08),
    a.age !== `elder` &&
      ((c.hair.style = i(o ? cs : ss)),
      (c.hair.color = i([
        X.black,
        X.softBlack,
        X.darkBrown,
        X.brown,
        X.black,
        o ? X.ash : X.black,
      ])),
      (c.hair.color2 = r() < 0.25 ? i([X.brown, X.ash, X.auburn]) : void 0)),
    [`police`, `rider`, `uniform`].includes(c.top.style) ||
      ((c.top.color = i(as)),
      c.top.pattern &&
        c.top.pattern !== `floral` &&
        (c.top.pattern =
          r() < 0.3 ? i([`stripes`, `check`, `solid`]) : `solid`)),
    ![`police`].includes(c.top.style) &&
      c.bottom.style !== `skirt` &&
      (c.bottom.color = i(os)));
  let l = c.face;
  return (
    (l.jaw = Math.min(1, Math.max(0, l.jaw + (r() - 0.5) * 0.4))),
    (l.cheek = Math.min(1, Math.max(0, l.cheek + (r() - 0.5) * 0.4))),
    (l.eyeSize *= 0.94 + r() * 0.12),
    (l.eyeTilt += (r() - 0.5) * 0.1),
    (l.lid = Math.min(1, Math.max(0, l.lid + (r() - 0.5) * 0.6))),
    (l.noseW = r()),
    (l.bridge = r() * 0.8),
    (l.lips = r()),
    (l.brow = Math.min(1, Math.max(0, l.brow + (r() - 0.5) * 0.4))),
    (l.browArch = r()),
    (l.smile = (r() - 0.3) * 0.5),
    (l.mole = r() < 0.15 ? 1 + Math.floor(r() * 2) : 0),
    c
  );
}
var us = { x: -757, z: -252.6 },
  ds = 0.022,
  fs = -1,
  ps = 0,
  ms = us.z + -11;
async function hs(e) {
  let t = e.params.get(`charlab`);
  if (!t) return null;
  let n = e.params.get(`charsel`)?.split(`,`).filter(Boolean),
    i = n ? n.map((e) => rs.find((t) => t.id === e)).filter(Boolean) : rs,
    o = new s();
  ((o.name = `charlab`), e.scene.add(o));
  let c = [],
    l = performance.now(),
    u = 0,
    d = e.params.get(`charasync`) ?? `1`,
    f = async (t, n, r, i) => {
      let a = e.params.get(`charskip`)?.split(`,`),
        o = i === 1 ? { lod: 1, atlas: null, skip: a } : { skip: a };
      return {
        ch:
          d === `0` ? jo(t, o) : await Ko(t, { ...o, worker: d !== `sliced` }),
        desc: t,
        x: n,
        z: r,
      };
    },
    m = ({ ch: t, desc: n, x: r, z: i }) => {
      u += t.triangles;
      let a =
        (e.groundAt ? e.groundAt(r, i, 1) : e.plan.groundHeight(r, i)) + ds;
      (t.root.position.set(r, a, i), (t.root.rotation.y = ps), o.add(t.root));
      let s = {
        desc: n,
        ch: t,
        anim: new Zo(t, c.length),
        x: r,
        z: i,
        heading: -0,
      };
      return (c.push(s), s);
    },
    h = [];
  if (t === `lod`) {
    let e = i.slice(0, 12);
    h.push(e, e);
  } else if (t === `faces`) h.push(i.slice(0, 8));
  else if (i.length <= 8) h.push(i);
  else {
    let e = Math.ceil(i.length / 2);
    h.push(i.slice(0, e), i.slice(e));
  }
  let g = t === `faces` ? 0.3 : i.length <= 8 ? 1.25 : 0.92,
    _ = [us.z + fs * 1.3, us.z - fs * 1.4];
  if (t === `crowd` || t === `tiny`) vs(e, o, i, g, _, t === `tiny` ? 2 : 1);
  else {
    let n = [];
    for (let r = 0; r < h.length; r++) {
      let i = h[r],
        a = i.length;
      for (let o = 0; o < a; o++) {
        let s =
            us.x +
            (o - (a - 1) / 2) * g +
            (r === 1 && t !== `lod` ? g * 0.5 : 0),
          c = f(i[o], s, _[r], +(t === `lod` && r === 1));
        (n.push(c),
          d === `0` && (m(await c), o % 2 == 1 && (await e.yieldFrame())));
      }
    }
    if (d !== `0`) for (let e of await Promise.all(n)) m(e);
  }
  let v = e.params.get(`charatlas`);
  if (v !== null) {
    let e = Ae().pages[Number(v) || 0];
    if (e) {
      let t = new p(
        new a(6, 6),
        new r({ map: e.tex, transparent: !0, premultipliedAlpha: !0 }),
      );
      (t.position.set(us.x, 4, us.z - -3), (t.rotation.y = Math.PI), o.add(t));
    }
  }
  gs(e, o, c, e.params.get(`charlabels`) !== `0`);
  let y = Number(e.params.get(`charfov`)),
    b = Number(e.params.get(`charpeds`) ?? `0.25`);
  try {
    Number.isFinite(b) && (e.peds.density = b);
  } catch {}
  (console.log(
    `[test] charlab: ${c.length} characters, ${u} tris total (${c.map((e) => `${e.desc.id}:${e.ch?.triangles}`).join(` `)}) built in ${(performance.now() - l).toFixed(0)}ms (${d === `0` ? `sync` : d === `sliced` ? `sliced` : `worker`}; ${JSON.stringify(Yo())})`,
  ),
    (window.__charlab = {
      list: c.map((e) => ({
        id: e.desc.id,
        x: e.x,
        z: e.z,
        height: e.desc.height,
        tris: e.ch?.triangles,
        parts: e.ch?.breakdown,
      })),
      cam: (t, n = `face`) => {
        let r = c.find((e) => e.desc.id === t) ?? c[Number(t)] ?? c[0],
          i = r.desc.height,
          a = e.plan.groundHeight(r.x, r.z),
          o = a + i - (i / 1.72) * 0.115,
          s = (e) => e.map((e) => e.toFixed(3)).join(`,`);
        switch (n) {
          case `bust`:
            return s([r.x, o - 0.12, r.z + fs * 1.25, r.x, o - 0.2, r.z]);
          case `body`:
            return s([r.x, a + 1.2, r.z + fs * 3.2, r.x, a + 0.9, r.z]);
          case `back`:
            return s([r.x, a + 1.35, r.z - fs * 2.6, r.x, a + 1, r.z]);
          case `crown`:
            return s([r.x, o + 0.32, r.z - fs * 0.7, r.x, o - 0.02, r.z]);
          case `side`:
            return s([r.x + 2.6, a + 1.2, r.z + fs * 0.3, r.x, a + 0.95, r.z]);
          case `feet`:
            return s([r.x + 0.25, a + 0.55, r.z + fs * 1.1, r.x, a + 0.1, r.z]);
          default:
            return s([r.x, o, r.z + fs * 0.62, r.x, o - 0.01, r.z]);
        }
      },
      wide: () => `${us.x},1.55,${ms},${us.x},0.95,${us.z}`,
      faces: (e = 1.55, t = 1.35) =>
        `${us.x},${e},${_[0] + fs * t},${us.x},${e - 0.02},${_[0]}`,
    }));
  let x = 0;
  return {
    update(n) {
      ((x += n),
        Number.isFinite(y) &&
          y > 5 &&
          e.camera.fov !== y &&
          ((e.camera.fov = y), e.camera.updateProjectionMatrix()));
      for (let e = 0; e < c.length; e++) {
        let r = c[e];
        r.ch &&
          r.anim &&
          (t === `walk`
            ? r.anim.update(n, { gait: 1, speed: 1.35 })
            : t === `run`
              ? r.anim.update(n, { gait: 2, speed: 3.6 })
              : r.anim.update(n, { gait: 0, speed: 0 }),
          t === `turn` && (r.ch.root.rotation.y = ps + x * 0.6 + e * 0.5));
      }
    },
  };
}
function gs(e, t, i, a) {
  if (!i.length) return;
  let o = [];
  for (let t of i) {
    let n = new l(0.36, 0.38, 0.03, 24);
    (n.translate(t.x, e.plan.groundHeight(t.x, t.z) + ds - 0.015, t.z),
      o.push(n));
  }
  let s = _s(o),
    c = new p(s, new x({ color: 2763824, roughness: 0.4, metalness: 0.1 }));
  if (((c.receiveShadow = !0), t.add(c), !a)) return;
  let u = Math.ceil(i.length / 5),
    d = document.createElement(`canvas`);
  ((d.width = 1280), (d.height = 64 * u));
  let f = d.getContext(`2d`);
  ((f.textAlign = `center`), (f.textBaseline = `middle`));
  let h = [],
    g = [],
    v = [];
  i.forEach((t, n) => {
    let r = (n % 5) * 256,
      i = Math.floor(n / 5) * 64;
    ((f.fillStyle = `rgba(12,14,18,0.78)`),
      f.beginPath(),
      f.roundRect(r + 6, i + 6, 244, 52, 14),
      f.fill(),
      (f.fillStyle = `#ffd98a`),
      (f.font = `800 26px ${P}`),
      f.fillText(t.desc.name?.zh ?? t.desc.id, r + 128, i + 25.6),
      (f.fillStyle = `#d8dde6`),
      (f.font = `600 13px ${P}`),
      f.fillText(t.desc.name?.en ?? ``, r + 128, i + 47.36));
    let a = 0.52,
      o = (64 / 256) * a,
      s = e.plan.groundHeight(t.x, t.z) + t.desc.height + 0.3,
      c = h.length / 3,
      l = t.x - (a / 2) * 1,
      u = t.x + (a / 2) * 1;
    h.push(
      l,
      s - o / 2,
      t.z,
      u,
      s - o / 2,
      t.z,
      u,
      s + o / 2,
      t.z,
      l,
      s + o / 2,
      t.z,
    );
    let p = r / d.width,
      m = (r + 256) / d.width,
      _ = 1 - (i + 64) / d.height,
      y = 1 - i / d.height;
    (g.push(p, _, m, _, m, y, p, y), v.push(c, c + 1, c + 2, c, c + 2, c + 3));
  });
  let y = new _();
  (y.setAttribute(`position`, new m(h, 3)),
    y.setAttribute(`uv`, new m(g, 2)),
    y.setIndex(v));
  let b = new A(d);
  b.colorSpace = n;
  let S = new p(y, new r({ map: b, transparent: !0, depthWrite: !1 }));
  t.add(S);
}
function _s(e) {
  let t = [],
    n = [],
    r = [];
  for (let i of e) {
    let e = t.length / 3,
      a = i.attributes.position,
      o = i.attributes.normal;
    for (let e = 0; e < a.count; e++)
      (t.push(a.getX(e), a.getY(e), a.getZ(e)),
        n.push(o.getX(e), o.getY(e), o.getZ(e)));
    let s = i.index;
    for (let t = 0; t < s.count; t++) r.push(e + s.getX(t));
    i.dispose();
  }
  let i = new _();
  return (
    i.setAttribute(`position`, new m(t, 3)),
    i.setAttribute(`normal`, new m(n, 3)),
    i.setIndex(r),
    i
  );
}
function vs(t, n, r, i, a, o = 1) {
  let s = co(),
    c = Math.min(r.length, 12),
    l = 0;
  for (let u = 0; u < c; u++) {
    let d = r[u],
      p = Po(d, { lod: o });
    l += p.userData.triangles;
    let m = new e(new Float32Array(8), 4);
    for (let e = 0; e < 2; e++)
      m.setXYZW(e, e * 1.7 + u, e === 0 ? 0 : 1, 0, 0);
    p.setAttribute(`iAnim`, m);
    let h = new E(p, s, 2),
      g = new j(),
      _ = p.userData.scale;
    for (let e = 0; e < 2; e++) {
      let n = us.x + (u - (c - 1) / 2) * i,
        r = a[e];
      (g.compose(
        new k(n, t.plan.groundHeight(n, r) + ds, r),
        new O().setFromEuler(new f(0, ps, 0)),
        new k(_, _, _),
      ),
        h.setMatrixAt(e, g));
    }
    ((h.frustumCulled = !1),
      (h.castShadow = !0),
      n.add(h),
      (h.onBeforeRender = () => {
        for (let e = 0; e < 2; e++) m.setX(e, m.getX(e) + 0.08);
        m.needsUpdate = !0;
      }));
  }
  console.log(
    `[test] charlab crowd (lod ${o}): ${c} crowd geometries, ${l} tris total, avg ${(l / c).toFixed(0)}`,
  );
}
