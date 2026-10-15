// tokyo/assets/characters-BvEb7Acx 36 — math
// Lines 10934-11271 of readable/tokyo/assets/characters-BvEb7Acx.pretty.js (statement-aligned).
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
  let i = e.params.get(`charsel`)?.split(`,`).filter(Boolean),
    a = i ? i.map((e) => rs.find((t) => t.id === e)).filter(Boolean) : rs,
    o = new r();
  ((o.name = `charlab`), e.scene.add(o));
  let s = [],
    c = performance.now(),
    l = 0,
    u = e.params.get(`charasync`) ?? `1`,
    d = async (t, n, r, i) => {
      let a = e.params.get(`charskip`)?.split(`,`),
        o = i === 1 ? { lod: 1, atlas: null, skip: a } : { skip: a };
      return {
        ch:
          u === `0` ? jo(t, o) : await Ko(t, { ...o, worker: u !== `sliced` }),
        desc: t,
        x: n,
        z: r,
      };
    },
    p = ({ ch: t, desc: n, x: r, z: i }) => {
      l += t.triangles;
      let a =
        (e.groundAt ? e.groundAt(r, i, 1) : e.plan.groundHeight(r, i)) + ds;
      (t.root.position.set(r, a, i), (t.root.rotation.y = ps), o.add(t.root));
      let c = {
        desc: n,
        ch: t,
        anim: new Zo(t, s.length),
        x: r,
        z: i,
        heading: -0,
      };
      return (s.push(c), c);
    },
    m = [];
  if (t === `lod`) {
    let e = a.slice(0, 12);
    m.push(e, e);
  } else if (t === `faces`) m.push(a.slice(0, 8));
  else if (a.length <= 8) m.push(a);
  else {
    let e = Math.ceil(a.length / 2);
    m.push(a.slice(0, e), a.slice(e));
  }
  let g = t === `faces` ? 0.3 : a.length <= 8 ? 1.25 : 0.92,
    _ = [us.z + fs * 1.3, us.z - fs * 1.4];
  if (t === `crowd` || t === `tiny`) vs(e, o, a, g, _, t === `tiny` ? 2 : 1);
  else {
    let n = [];
    for (let r = 0; r < m.length; r++) {
      let i = m[r],
        a = i.length;
      for (let o = 0; o < a; o++) {
        let s =
            us.x +
            (o - (a - 1) / 2) * g +
            (r === 1 && t !== `lod` ? g * 0.5 : 0),
          c = d(i[o], s, _[r], +(t === `lod` && r === 1));
        (n.push(c),
          u === `0` && (p(await c), o % 2 == 1 && (await e.yieldFrame())));
      }
    }
    if (u !== `0`) for (let e of await Promise.all(n)) p(e);
  }
  let v = e.params.get(`charatlas`);
  if (v !== null) {
    let e = Ae().pages[Number(v) || 0];
    if (e) {
      let t = new f(
        new h(6, 6),
        new n({ map: e.tex, transparent: !0, premultipliedAlpha: !0 }),
      );
      (t.position.set(us.x, 4, us.z - -3), (t.rotation.y = Math.PI), o.add(t));
    }
  }
  gs(e, o, s, e.params.get(`charlabels`) !== `0`);
  let y = Number(e.params.get(`charfov`)),
    b = Number(e.params.get(`charpeds`) ?? `0.25`);
  try {
    Number.isFinite(b) && (e.peds.density = b);
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
      cam: (t, n = `face`) => {
        let r = s.find((e) => e.desc.id === t) ?? s[Number(t)] ?? s[0],
          i = r.desc.height,
          a = e.plan.groundHeight(r.x, r.z),
          o = a + i - (i / 1.72) * 0.115,
          c = (e) => e.map((e) => e.toFixed(3)).join(`,`);
        switch (n) {
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
    update(n) {
      ((x += n),
        Number.isFinite(y) &&
          y > 5 &&
          e.camera.fov !== y &&
          ((e.camera.fov = y), e.camera.updateProjectionMatrix()));
      for (let e = 0; e < s.length; e++) {
        let r = s[e];
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
function gs(e, t, r, i) {
  if (!r.length) return;
  let a = [];
  for (let t of r) {
    let n = new s(0.36, 0.38, 0.03, 24);
    (n.translate(t.x, e.plan.groundHeight(t.x, t.z) + ds - 0.015, t.z),
      a.push(n));
  }
  let o = _s(a),
    c = new f(o, new S({ color: 2763824, roughness: 0.4, metalness: 0.1 }));
  if (((c.receiveShadow = !0), t.add(c), !i)) return;
  let l = Math.ceil(r.length / 5),
    u = document.createElement(`canvas`);
  ((u.width = 1280), (u.height = 64 * l));
  let m = u.getContext(`2d`);
  ((m.textAlign = `center`), (m.textBaseline = `middle`));
  let h = [],
    g = [],
    _ = [];
  r.forEach((t, n) => {
    let r = (n % 5) * 256,
      i = Math.floor(n / 5) * 64;
    ((m.fillStyle = `rgba(12,14,18,0.78)`),
      m.beginPath(),
      m.roundRect(r + 6, i + 6, 244, 52, 14),
      m.fill(),
      (m.fillStyle = `#ffd98a`),
      (m.font = `800 26px ${ee}`),
      m.fillText(t.desc.name?.zh ?? t.desc.id, r + 128, i + 25.6),
      (m.fillStyle = `#d8dde6`),
      (m.font = `600 13px ${ee}`),
      m.fillText(t.desc.name?.en ?? ``, r + 128, i + 47.36));
    let a = 0.52,
      o = (64 / 256) * a,
      s = e.plan.groundHeight(t.x, t.z) + t.desc.height + 0.3,
      c = h.length / 3,
      l = t.x - (a / 2) * 1,
      d = t.x + (a / 2) * 1;
    h.push(
      l,
      s - o / 2,
      t.z,
      d,
      s - o / 2,
      t.z,
      d,
      s + o / 2,
      t.z,
      l,
      s + o / 2,
      t.z,
    );
    let f = r / u.width,
      p = (r + 256) / u.width,
      v = 1 - (i + 64) / u.height,
      y = 1 - i / u.height;
    (g.push(f, v, p, v, p, y, f, y), _.push(c, c + 1, c + 2, c, c + 2, c + 3));
  });
  let y = new v();
  (y.setAttribute(`position`, new p(h, 3)),
    y.setAttribute(`uv`, new p(g, 2)),
    y.setIndex(_));
  let b = new A(u);
  b.colorSpace = d;
  let x = new f(y, new n({ map: b, transparent: !0, depthWrite: !1 }));
  t.add(x);
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
  let i = new v();
  return (
    i.setAttribute(`position`, new p(t, 3)),
    i.setAttribute(`normal`, new p(n, 3)),
    i.setIndex(r),
    i
  );
}
function vs(t, n, r, a, o, s = 1) {
  let c = co(),
    l = Math.min(r.length, 12),
    d = 0;
  for (let f = 0; f < l; f++) {
    let p = r[f],
      m = Po(p, { lod: s });
    d += m.userData.triangles;
    let h = new e(new Float32Array(8), 4);
    for (let e = 0; e < 2; e++)
      h.setXYZW(e, e * 1.7 + f, e === 0 ? 0 : 1, 0, 0);
    m.setAttribute(`iAnim`, h);
    let g = new D(m, c, 2),
      _ = new j(),
      v = m.userData.scale;
    for (let e = 0; e < 2; e++) {
      let n = us.x + (f - (l - 1) / 2) * a,
        r = o[e];
      (_.compose(
        new k(n, t.plan.groundHeight(n, r) + ds, r),
        new i().setFromEuler(new u(0, ps, 0)),
        new k(v, v, v),
      ),
        g.setMatrixAt(e, _));
    }
    ((g.frustumCulled = !1),
      (g.castShadow = !0),
      n.add(g),
      (g.onBeforeRender = () => {
        for (let e = 0; e < 2; e++) h.setX(e, h.getX(e) + 0.08);
        h.needsUpdate = !0;
      }));
  }
  console.log(
    `[test] charlab crowd (lod ${s}): ${l} crowd geometries, ${d} tris total, avg ${(d / l).toFixed(0)}`,
  );
}
