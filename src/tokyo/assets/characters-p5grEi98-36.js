// tokyo/assets/characters-p5grEi98 36 — math
// Lines 10934-11271 of readable/tokyo/assets/characters-p5grEi98.pretty.js (statement-aligned).
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
async function hs(n) {
  let r = n.params.get(`charlab`);
  if (!r) return null;
  let i = n.params.get(`charsel`)?.split(`,`).filter(Boolean),
    a = i ? i.map((e) => rs.find((t) => t.id === e)).filter(Boolean) : rs,
    o = new m();
  ((o.name = `charlab`), n.scene.add(o));
  let s = [],
    c = performance.now(),
    l = 0,
    u = n.params.get(`charasync`) ?? `1`,
    d = async (e, t, r, i) => {
      let a = n.params.get(`charskip`)?.split(`,`),
        o = i === 1 ? { lod: 1, atlas: null, skip: a } : { skip: a };
      return {
        ch:
          u === `0` ? jo(e, o) : await Ko(e, { ...o, worker: u !== `sliced` }),
        desc: e,
        x: t,
        z: r,
      };
    },
    p = ({ ch: e, desc: t, x: r, z: i }) => {
      l += e.triangles;
      let a =
        (n.groundAt ? n.groundAt(r, i, 1) : n.plan.groundHeight(r, i)) + ds;
      (e.root.position.set(r, a, i), (e.root.rotation.y = ps), o.add(e.root));
      let c = {
        desc: t,
        ch: e,
        anim: new Zo(e, s.length),
        x: r,
        z: i,
        heading: -0,
      };
      return (s.push(c), c);
    },
    h = [];
  if (r === `lod`) {
    let e = a.slice(0, 12);
    h.push(e, e);
  } else if (r === `faces`) h.push(a.slice(0, 8));
  else if (a.length <= 8) h.push(a);
  else {
    let e = Math.ceil(a.length / 2);
    h.push(a.slice(0, e), a.slice(e));
  }
  let g = r === `faces` ? 0.3 : a.length <= 8 ? 1.25 : 0.92,
    _ = [us.z + fs * 1.3, us.z - fs * 1.4];
  if (r === `crowd` || r === `tiny`) vs(n, o, a, g, _, r === `tiny` ? 2 : 1);
  else {
    let e = [];
    for (let t = 0; t < h.length; t++) {
      let i = h[t],
        a = i.length;
      for (let o = 0; o < a; o++) {
        let s =
            us.x +
            (o - (a - 1) / 2) * g +
            (t === 1 && r !== `lod` ? g * 0.5 : 0),
          c = d(i[o], s, _[t], +(r === `lod` && t === 1));
        (e.push(c),
          u === `0` && (p(await c), o % 2 == 1 && (await n.yieldFrame())));
      }
    }
    if (u !== `0`) for (let t of await Promise.all(e)) p(t);
  }
  let v = n.params.get(`charatlas`);
  if (v !== null) {
    let n = je().pages[Number(v) || 0];
    if (n) {
      let r = new t(
        new f(6, 6),
        new e({ map: n.tex, transparent: !0, premultipliedAlpha: !0 }),
      );
      (r.position.set(us.x, 4, us.z - -3), (r.rotation.y = Math.PI), o.add(r));
    }
  }
  gs(n, o, s, n.params.get(`charlabels`) !== `0`);
  let y = Number(n.params.get(`charfov`)),
    b = Number(n.params.get(`charpeds`) ?? `0.25`);
  try {
    Number.isFinite(b) && (n.peds.density = b);
  } catch {}
  (console.log(
    `[test] charlab: ${s.length} characters, ${l} tris total (${s.map((e) => `${e.desc.id}:${e.ch?.triangles}`).join(` `)}) built in ${(performance.now() - c).toFixed(0)}ms (${u === `0` ? `sync` : u === `sliced` ? `sliced` : `worker`}; ${JSON.stringify(Yo())})`,
  ),
    (window.__charlab = {
      list: s.map((e) => ({
        id: e.desc.id,
        x: e.x,
        z: e.z,
        height: e.desc.height,
        tris: e.ch?.triangles,
        parts: e.ch?.breakdown,
      })),
      cam: (e, t = `face`) => {
        let r = s.find((t) => t.desc.id === e) ?? s[Number(e)] ?? s[0],
          i = r.desc.height,
          a = n.plan.groundHeight(r.x, r.z),
          o = a + i - (i / 1.72) * 0.115,
          c = (e) => e.map((e) => e.toFixed(3)).join(`,`);
        switch (t) {
          case `bust`:
            return c([r.x, o - 0.12, r.z + fs * 1.25, r.x, o - 0.2, r.z]);
          case `body`:
            return c([r.x, a + 1.2, r.z + fs * 3.2, r.x, a + 0.9, r.z]);
          case `back`:
            return c([r.x, a + 1.35, r.z - fs * 2.6, r.x, a + 1, r.z]);
          case `crown`:
            return c([r.x, o + 0.32, r.z - fs * 0.7, r.x, o - 0.02, r.z]);
          case `side`:
            return c([r.x + 2.6, a + 1.2, r.z + fs * 0.3, r.x, a + 0.95, r.z]);
          case `feet`:
            return c([r.x + 0.25, a + 0.55, r.z + fs * 1.1, r.x, a + 0.1, r.z]);
          default:
            return c([r.x, o, r.z + fs * 0.62, r.x, o - 0.01, r.z]);
        }
      },
      wide: () => `${us.x},1.55,${ms},${us.x},0.95,${us.z}`,
      faces: (e = 1.55, t = 1.35) =>
        `${us.x},${e},${_[0] + fs * t},${us.x},${e - 0.02},${_[0]}`,
    }));
  let x = 0;
  return {
    update(e) {
      ((x += e),
        Number.isFinite(y) &&
          y > 5 &&
          n.camera.fov !== y &&
          ((n.camera.fov = y), n.camera.updateProjectionMatrix()));
      for (let t = 0; t < s.length; t++) {
        let n = s[t];
        n.ch &&
          n.anim &&
          (r === `walk`
            ? n.anim.update(e, { gait: 1, speed: 1.35 })
            : r === `run`
              ? n.anim.update(e, { gait: 2, speed: 3.6 })
              : n.anim.update(e, { gait: 0, speed: 0 }),
          r === `turn` && (n.ch.root.rotation.y = ps + x * 0.6 + t * 0.5));
      }
    },
  };
}
function gs(n, r, i, a) {
  if (!i.length) return;
  let o = [];
  for (let e of i) {
    let t = new C(0.36, 0.38, 0.03, 24);
    (t.translate(e.x, n.plan.groundHeight(e.x, e.z) + ds - 0.015, e.z),
      o.push(t));
  }
  let l = _s(o),
    u = new t(l, new s({ color: 2763824, roughness: 0.4, metalness: 0.1 }));
  if (((u.receiveShadow = !0), r.add(u), !a)) return;
  let d = Math.ceil(i.length / 5),
    f = document.createElement(`canvas`);
  ((f.width = 1280), (f.height = 64 * d));
  let m = f.getContext(`2d`);
  ((m.textAlign = `center`), (m.textBaseline = `middle`));
  let h = [],
    g = [],
    _ = [];
  i.forEach((e, t) => {
    let r = (t % 5) * 256,
      i = Math.floor(t / 5) * 64;
    ((m.fillStyle = `rgba(12,14,18,0.78)`),
      m.beginPath(),
      m.roundRect(r + 6, i + 6, 244, 52, 14),
      m.fill(),
      (m.fillStyle = `#ffd98a`),
      (m.font = `800 26px ${te}`),
      m.fillText(e.desc.name?.zh ?? e.desc.id, r + 128, i + 25.6),
      (m.fillStyle = `#d8dde6`),
      (m.font = `600 13px ${te}`),
      m.fillText(e.desc.name?.en ?? ``, r + 128, i + 47.36));
    let a = 0.52,
      o = (64 / 256) * a,
      s = n.plan.groundHeight(e.x, e.z) + e.desc.height + 0.3,
      c = h.length / 3,
      l = e.x - (a / 2) * 1,
      u = e.x + (a / 2) * 1;
    h.push(
      l,
      s - o / 2,
      e.z,
      u,
      s - o / 2,
      e.z,
      u,
      s + o / 2,
      e.z,
      l,
      s + o / 2,
      e.z,
    );
    let d = r / f.width,
      p = (r + 256) / f.width,
      v = 1 - (i + 64) / f.height,
      y = 1 - i / f.height;
    (g.push(d, v, p, v, p, y, d, y), _.push(c, c + 1, c + 2, c, c + 2, c + 3));
  });
  let v = new y();
  (v.setAttribute(`position`, new p(h, 3)),
    v.setAttribute(`uv`, new p(g, 2)),
    v.setIndex(_));
  let b = new j(f);
  b.colorSpace = c;
  let x = new t(v, new e({ map: b, transparent: !0, depthWrite: !1 }));
  r.add(x);
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
  let i = new y();
  return (
    i.setAttribute(`position`, new p(t, 3)),
    i.setAttribute(`normal`, new p(n, 3)),
    i.setIndex(r),
    i
  );
}
function vs(e, t, n, r, i, o = 1) {
  let s = co(),
    c = Math.min(n.length, 12),
    l = 0;
  for (let u = 0; u < c; u++) {
    let f = n[u],
      p = Po(f, { lod: o });
    l += p.userData.triangles;
    let m = new _(new Float32Array(8), 4);
    for (let e = 0; e < 2; e++)
      m.setXYZW(e, e * 1.7 + u, e === 0 ? 0 : 1, 0, 0);
    p.setAttribute(`iAnim`, m);
    let h = new k(p, s, 2),
      g = new d(),
      v = p.userData.scale;
    for (let t = 0; t < 2; t++) {
      let n = us.x + (u - (c - 1) / 2) * r,
        o = i[t];
      (g.compose(
        new D(n, e.plan.groundHeight(n, o) + ds, o),
        new a().setFromEuler(new M(0, ps, 0)),
        new D(v, v, v),
      ),
        h.setMatrixAt(t, g));
    }
    ((h.frustumCulled = !1),
      (h.castShadow = !0),
      t.add(h),
      (h.onBeforeRender = () => {
        for (let e = 0; e < 2; e++) m.setX(e, m.getX(e) + 0.08);
        m.needsUpdate = !0;
      }));
  }
  console.log(
    `[test] charlab crowd (lod ${o}): ${c} crowd geometries, ${l} tris total, avg ${(l / c).toFixed(0)}`,
  );
}
