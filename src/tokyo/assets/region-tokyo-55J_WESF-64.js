// tokyo/assets/region-tokyo-55J_WESF 64 — math
// Lines 28477-28754 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
function* Ad(e, t, n, r, i = !0) {
  let o = e / 8,
    s = o / 256,
    l = o * 11,
    [u, d] = Ae(e, l),
    [f, p] = Ae(e, l);
  (br(u, d), (p.fillStyle = `#fff`), p.fillRect(0, 0, e, l));
  let m = new ie(t);
  for (let e = 0; e < kd.length; e++) {
    let t = (e % 8) * o,
      i = Math.floor(e / 8) * o;
    (d.save(),
      p.save(),
      d.beginPath(),
      d.rect(t, i, o, o),
      d.clip(),
      p.beginPath(),
      p.rect(t, i, o, o),
      p.clip(),
      d.translate(t, i),
      p.translate(t, i),
      d.scale(s, s),
      p.scale(s, s),
      (cd = n));
    try {
      kd[e](d, p, 256, m.fork(e));
    } catch (t) {
      console.warn(`[tokyo-buildings] atlas tile failed`, e, t);
    }
    ((cd = Vu), d.restore(), p.restore(), r() && (yield));
  }
  let h = new Uint8Array(e * l * 4),
    _ = t >>> 0;
  for (let t = 0; t < l; t += 32) {
    let n = Math.min(32, l - t),
      i = d.getImageData(0, t, e, n).data;
    for (let r = 0, a = t * e * 4, o = e * n; r < o; r++, a += 4) {
      _ = (Math.imul(_, 1664525) + 1013904223) >>> 0;
      let e = ((_ >>> 24) - 128) * 0.03,
        t = r * 4;
      ((h[a] = Math.max(0, Math.min(255, i[t] + e))),
        (h[a + 1] = Math.max(0, Math.min(255, i[t + 1] + e))),
        (h[a + 2] = Math.max(0, Math.min(255, i[t + 2] + e))));
    }
    r() && (yield);
  }
  u.width = u.height = 1;
  for (let t = 0; t < l; t += 32) {
    let n = Math.min(32, l - t),
      i = p.getImageData(0, t, e, n).data;
    for (let r = 0, a = t * e * 4 + 3, o = e * n; r < o; r++, a += 4)
      h[a] = i[r * 4];
    r() && (yield);
  }
  f.width = f.height = 1;
  let y = new w(h, e, l, v, c);
  return (
    (y.name =
      n.id === Vu.id ? `tokyo-facade-atlas` : `tokyo-facade-atlas:${n.id}`),
    (y.colorSpace = a),
    (y.generateMipmaps = !0),
    (y.minFilter = x),
    (y.magFilter = E),
    (y.wrapS = y.wrapT = g),
    (y.anisotropy = 8),
    (y.flipY = !1),
    (y.needsUpdate = !0),
    i && ke(y),
    y
  );
}
kd.length;
var jd = 64;
function Zoe(e, t) {
  let n = () => e.quality,
    r = new Map(),
    i = new Map(),
    a = 2048,
    o = 0,
    s = 0,
    c = { painted: 0, freed: 0, swaps: 0, maxStepMs: 0, pumpMs: 0 },
    l = () => n().mobile === !0 || n().level === `low`,
    u = () => (l() ? 230 : 320);
  function d(e) {
    let t = r.get(e);
    if (!t) {
      let n = eoe(e),
        i = {
          id: e,
          tex: null,
          it: null,
          due: () => !0,
          users: new Set(),
          idle: performance.now(),
          near: 1 / 0,
        };
      ((i.it = f(i, n)), r.set(e, (t = i)));
    }
    return t;
  }
  function* f(t, n) {
    let r = yield* Ad(a, Xoe(o, n), n, () => t.due(), !1);
    ((r.anisotropy = Math.min(
      8,
      e.renderer.gl.capabilities.getMaxAnisotropy(),
    )),
      (r.userData.owner = `tokyo-tiles-t2`));
    let i = e.renderer.gl;
    ((r.source.dataReady = !1),
      i.initTexture(r),
      yield,
      (r.source.dataReady = !0));
    let s = r.image.width,
      l = r.image.height;
    for (let e = 0; e < l; e += jd) {
      let t = Math.min(l, e + jd);
      for (let n = e; n < t; n++) r.addUpdateRange(n * s * 4, s * 4);
      (t >= l && ke(r), (r.needsUpdate = !0), i.initTexture(r), yield);
    }
    ((t.tex = r), c.painted++);
  }
  function p(e, t) {
    e.due = t;
    let n = performance.now(),
      r = e.it.next(),
      i = performance.now() - n;
    (i > c.maxStepMs && (c.maxStepMs = i), r.done && (e.it = null));
  }
  function m() {
    let e = l() ? 1 : 3,
      t = [...r.values()]
        .filter((e) => e.tex && !e.users.size)
        .sort((e, t) => e.idle - t.idle);
    for (let n = 0; n < t.length - e; n++) {
      let e = t[n];
      (e.tex.dispose(), r.delete(e.id), c.freed++);
    }
    for (let e of [...r.values()])
      !e.tex && e.near === 1 / 0 && e.it && r.delete(e.id);
  }
  function h(e, t) {
    for (let t of r.values())
      t.users.delete(e) && !t.users.size && (t.idle = performance.now());
    t !== "default" && d(t).users.add(e);
  }
  let g = null;
  return {
    on: t,
    init(e, t, n) {
      ((g = e), (a = t), (o = n));
    },
    want(e) {
      if (!t) return `default`;
      let n = new Map();
      for (let t of e) {
        let e = $ae(t.district, (t.x0 + t.x1) / 2, (t.z0 + t.z1) / 2);
        n.set(e, (n.get(e) ?? 0) + (t.x1 - t.x0) * (t.z1 - t.z0));
      }
      let r = `default`,
        i = -1;
      for (let [e, t] of n) (t > i || (t === i && e < r)) && ((r = e), (i = t));
      return r;
    },
    *ready(n, r, i, a) {
      if (
        !t ||
        n === "default" ||
        Math.hypot(e.camera.position.x - r, e.camera.position.z - i) >= u()
      )
        return;
      let o = d(n);
      for (; o.it;) (p(o, a), yield);
    },
    attach(t, n, a, o, c) {
      let l = Math.hypot(e.camera.position.x - o, e.camera.position.z - c),
        d = a !== "default" && l < u() && r.get(a)?.tex ? a : `default`;
      return (
        i.set(t, { mesh: n, want: a, page: d, cx: o, cz: c }),
        h(t, d),
        (s = 0),
        d
      );
    },
    detach(e) {
      (i.delete(e), h(e, `default`), m());
    },
    texture(e) {
      return r.get(e)?.tex ?? g;
    },
    update(e, n, a, o) {
      if (!t) return;
      let l = performance.now();
      if (l >= s) {
        s = l + 400;
        for (let e of r.values()) e.near = 1 / 0;
        let t = u();
        for (let [a, s] of i) {
          let i = Math.hypot(e - s.cx, n - s.cz);
          if (s.want !== "default") {
            if (i < t) {
              let e = d(s.want);
              ((e.near = Math.min(e.near, i)),
                e.tex &&
                  s.page !== s.want &&
                  ((s.page = s.want),
                  o(s.mesh, s.want),
                  h(a, s.want),
                  c.swaps++));
            } else
              i > t + 60 && s.page !== "default"
                ? ((s.page = `default`),
                  o(s.mesh, `default`),
                  h(a, `default`),
                  c.swaps++)
                : s.page === s.want &&
                  (r.get(s.want).near = Math.min(r.get(s.want).near, i));
          }
        }
        m();
      }
      let f = null;
      for (let e of r.values())
        e.it && e.near < 1 / 0 && (!f || e.near < f.near) && (f = e);
      if (f) {
        let e = performance.now(),
          t = a ? 1.5 : 12;
        (p(f, () => performance.now() - e > t),
          (c.pumpMs += performance.now() - e),
          f.it || (s = 0));
      }
    },
    stats() {
      return {
        facadePages: [...r.values()].filter((e) => e.tex).length + 1,
        facadePagesPainted: c.painted,
        facadePagesFreed: c.freed,
        facadePageSwaps: c.swaps,
        facadePageMaxStepMs: +c.maxStepMs.toFixed(2),
        facadePagePumpMs: +c.pumpMs.toFixed(1),
      };
    },
    debug() {
      let e = [
        {
          id: `default`,
          ready: !0,
          users: [...i.values()].filter((e) => e.page === "default").length,
          w: g?.image.width ?? 0,
          h: g?.image.height ?? 0,
        },
      ];
      for (let t of r.values())
        e.push({
          id: t.id,
          ready: !!t.tex,
          users: t.users.size,
          w: t.tex?.image.width ?? 0,
          h: t.tex?.image.height ?? 0,
        });
      return e;
    },
  };
}
var Md = null;
function Nd(e) {
  Md ||= new Map();
  let t = Md.get(e);
  return (
    t ||
      Md.set(
        e,
        (t = Co()
          .filter((t) => t.startsWith(e))
          .sort()),
      ),
    t
  );
}
