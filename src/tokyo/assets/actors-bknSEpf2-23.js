// tokyo/assets/actors-bknSEpf2 23 — fillstyle
// Lines 7434-7735 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function _c(e) {
  for (let t of hc) {
    let n = t.tex.image,
      r = Math.min(1, Ye(t.w, e) / t.w);
    ((n.width = Math.max(1, Math.round(t.w * r))),
      (n.height = Math.max(1, Math.round(t.h * r))));
    let i = n.getContext(`2d`);
    (i.setTransform(r, 0, 0, r, 0, 0),
      t.paint(i, t.w, t.h),
      (t.tex.needsUpdate = !0));
  }
}
function vc() {
  for (let e of hc) {
    e.tex.dispose();
    let t = e.tex.image;
    t.width = t.height = 1;
  }
}
var yc = `#efe7da`,
  bc = [`UNI`, `GLOW`],
  xc = (e, t, n) => {
    ((e.fillStyle = yc), e.fillRect(0, 0, t, n));
    let r = t * 0.12,
      i = t * 0.88,
      a = n * 0.2,
      o = n * 0.985;
    for (let t = r; t < i; t++) {
      let n = (t - r) / (i - r);
      ((e.fillStyle = `hsl(352 46% ${26 + (0.5 + 0.5 * Math.sin(n * Math.PI * 22) * (0.85 + 0.15 * Math.sin(n * 7))) * 22}%)`),
        e.fillRect(t, a, 1.5, o - a));
    }
    let s = e.createLinearGradient(0, a, 0, a + n * 0.08);
    (s.addColorStop(0, `rgba(0,0,0,0.35)`),
      s.addColorStop(1, `rgba(0,0,0,0)`),
      (e.fillStyle = s),
      e.fillRect(r, a, i - r, n * 0.08),
      (e.fillStyle = `#b8955a`),
      e.fillRect(r - t * 0.02, a - n * 0.018, i - r + t * 0.04, n * 0.014));
    for (let t = r; t <= i; t += (i - r) / 22)
      (e.beginPath(),
        e.arc(t, a - n * 0.006, n * 0.01, 0, Math.PI * 2),
        e.fill());
    let c = n * 0.1,
      l = t / 2 - c * 2.1,
      u = n * 0.045;
    ((e.fillStyle = `#e60012`),
      e.fillRect(l, u, c, c),
      (e.fillStyle = `#fff`),
      (e.font = `900 ${c * 0.3}px Helvetica, Arial, sans-serif`),
      (e.textAlign = `center`),
      (e.textBaseline = `middle`),
      e.fillText(bc[0], l + c / 2, u + c * 0.34, c * 0.9),
      e.fillText(bc[1], l + c / 2, u + c * 0.68, c * 0.9),
      (e.fillStyle = `#2a2622`),
      (e.textAlign = `left`),
      (e.font = `800 ${c * 0.46}px 'PingFang TC','Noto Sans TC','Microsoft JhengHei',sans-serif`),
      e.fillText(`試衣間`, l + c * 1.25, u + c * 0.36),
      (e.font = `600 ${c * 0.24}px Helvetica, Arial, sans-serif`),
      e.fillText(`FITTING ROOM`, l + c * 1.27, u + c * 0.78),
      (e.fillStyle = `#d9cfbf`),
      e.fillRect(0, n * 0.975, t, n * 0.025));
  };
function Sc(e) {
  return (t, n, r) => {
    ((t.fillStyle = yc),
      t.fillRect(0, 0, n, r),
      (t.fillStyle = `#e6dccb`),
      t.fillRect(0, r * 0.62, n, r * 0.36),
      (t.fillStyle = `#d6cab6`),
      t.fillRect(0, r * 0.615, n, r * 0.008),
      t.fillRect(0, r * 0.975, n, r * 0.025));
    let i = n * (e ? 0.07399061032863849 : 0.1539906103286385),
      a = n * 0.07;
    ((t.fillStyle = `#8a6a48`),
      t.fillRect(i - a / 2 - 8, r * 0.14 - 8, a + 16, r * 0.78 + 16));
    let o = t.createLinearGradient(i - a / 2, 0, i + a / 2, r);
    (o.addColorStop(0, `#dfe7ec`),
      o.addColorStop(0.5, `#aebcc6`),
      o.addColorStop(1, `#cfd9df`),
      (t.fillStyle = o),
      t.fillRect(i - a / 2, r * 0.14, a, r * 0.78),
      (t.fillStyle = `rgba(255,255,255,0.35)`),
      t.beginPath(),
      t.moveTo(i - a * 0.3, r * 0.14),
      t.lineTo(i - a * 0.05, r * 0.14),
      t.lineTo(i - a * 0.45, r * 0.6),
      t.lineTo(i - a / 2, r * 0.6),
      t.closePath(),
      t.fill());
    let s = n * (0.05399061032863849 + (e ? 0.11 : 0.01));
    t.fillStyle = `#b8955a`;
    for (let e of [0, 1])
      (t.beginPath(),
        t.arc(s + e * n * 0.035, r * 0.3, 7, 0, Math.PI * 2),
        t.fill());
    ((t.fillStyle = `#c8232c`),
      t.fillRect(s - 22, r * 0.31, 44, 70),
      (t.fillStyle = `#f2f0ea`),
      t.fillRect(s - 22, r * 0.31 + 14, 44, 10),
      (t.fillStyle = `#1d4f9c`),
      t.fillRect(s - 22, r * 0.31 + 34, 44, 10),
      (t.fillStyle = `#3b6db3`));
    let c = s + n * 0.035;
    (t.beginPath(),
      t.moveTo(c - 30, r * 0.32),
      t.lineTo(c + 30, r * 0.32),
      t.lineTo(c + 26, r * 0.5),
      t.lineTo(c - 26, r * 0.5),
      t.closePath(),
      t.fill());
    let l = n * 0.167981220657277,
      u = n * 0.92,
      d = r * 0.24;
    ((t.fillStyle = `#9a9a9a`), t.fillRect(l, d, u - l, 6));
    let f = [
        `#1f2b46`,
        `#f0eee8`,
        `#c8b18c`,
        `#9a83bf`,
        `#93a35c`,
        `#1e1f22`,
        `#e2535e`,
        `#c49a6c`,
        `#a7c4df`,
        `#f1df9c`,
      ],
      p = 0;
    for (let e = l + 16; e < u - 30; e += 34, p++) {
      t.fillStyle = f[p % f.length];
      let n = p % 3 == 0;
      (t.fillRect(e, d + 10, 28, r * (n ? 0.3 : 0.2)),
        (t.fillStyle = `rgba(0,0,0,0.12)`),
        t.fillRect(e + 24, d + 10, 4, r * (n ? 0.3 : 0.2)));
    }
  };
}
var Cc = (e, t, n) => {
    for (let r = 0; r < 8; r++) {
      let i = (r / 8) * n,
        a = n / 8,
        o = -((r * 97) % 160);
      for (; o < t;) {
        let t = 220 + ((o * 13 + r * 71) % 140);
        ((e.fillStyle = `hsl(33 38% ${66 + ((o + r * 31) % 9)}%)`),
          e.fillRect(o, i, t, a),
          (e.fillStyle = `rgba(80,55,30,0.25)`),
          e.fillRect(o, i, 2, a),
          (o += t));
      }
      ((e.fillStyle = `rgba(80,55,30,0.3)`), e.fillRect(0, i, t, 2));
    }
  },
  wc = (e, t, n) => {
    ((e.fillStyle = `#f6f3ee`), e.fillRect(0, 0, t, n));
    for (let r = 0.1; r < 1; r += 0.2)
      for (let i = 0.25; i < 1; i += 0.5) {
        let a = e.createRadialGradient(i * t, r * n, 0, i * t, r * n, t * 0.08);
        (a.addColorStop(0, `#fffdf4`),
          a.addColorStop(0.25, `#fff6dc`),
          a.addColorStop(1, `rgba(255,246,220,0)`),
          (e.fillStyle = a),
          e.fillRect(0, 0, t, n));
      }
  },
  Tc = (e, t, n) => {
    ((e.fillStyle = `#d8cbb6`),
      e.fillRect(0, 0, t, n),
      (e.strokeStyle = `#b9a88c`),
      (e.lineWidth = t * 0.03),
      e.beginPath(),
      e.arc(t / 2, n / 2, t * 0.42, 0, Math.PI * 2),
      e.stroke());
  },
  Ec = null;
function Dc() {
  let e = new re();
  e.name = `fitting-room`;
  let t = (e) => new u({ map: e, fog: !1, toneMapped: !1 }),
    n = 10.65,
    r = (t, n, r) => {
      let i = new d(t, n);
      (r(i),
        i.layers.set(21),
        (i.frustumCulled = !1),
        (i.castShadow = i.receiveShadow = !1),
        (i.renderOrder = -10),
        e.add(i));
    };
  r(new P(fc, mc), t(gc(1536, 768, xc)), (e) => {
    (e.position.set(0, mc / 2, pc), (e.rotation.y = Math.PI));
  });
  for (let e of [-1, 1]) {
    let i = new P(n, mc);
    if (e > 0) {
      let e = i.attributes.uv;
      for (let t = 0; t < e.count; t++) e.setX(t, 1 - e.getX(t));
    }
    r(i, t(gc(2048, 512, Sc(e < 0))), (t) => {
      (t.position.set((e * fc) / 2, mc / 2, -8.35 / 2),
        (t.rotation.y = e < 0 ? Math.PI / 2 : -Math.PI / 2));
    });
  }
  return (
    r(new P(fc, n), t(gc(1024, 1024, Cc, [1.4, 2.2])), (e) => {
      (e.position.set(0, 0, -8.35 / 2), (e.rotation.x = -Math.PI / 2));
    }),
    r(new P(fc, n), t(gc(512, 1024, wc)), (e) => {
      (e.position.set(0, mc, -8.35 / 2), (e.rotation.x = Math.PI / 2));
    }),
    r(new ae(0.85, 40), t(gc(256, 256, Tc)), (e) => {
      (e.position.set(0, 0.005, 0.05), (e.rotation.x = -Math.PI / 2));
    }),
    e
  );
}
function Oc(e, t) {
  let n = (Ec ??= Dc());
  ((bc = t ?? [`UNI`, `GLOW`]), _c(e.quality));
  let r = e.camera,
    i = e.scene,
    a = r.layers.mask,
    o = new Map(),
    s = (e) => {
      (o.has(e) || o.set(e, e.layers.mask), e.layers.enable(21));
    };
  (i.traverse((e) => {
    e.isLight && s(e);
  }),
    i.add(n));
  let c = () => {
    let t = e.player.position;
    (n.position.set(t.x, t.y, t.z),
      n.rotation.set(0, e.player.object.rotation.y, 0),
      n.updateMatrixWorld(!0),
      e.player.object.traverse(s));
  };
  return (
    c(),
    r.layers.set(21),
    {
      update: c,
      close() {
        ((r.layers.mask = a), n.removeFromParent(), vc());
        for (let [e, t] of o) e.layers.mask = t;
        o.clear();
      },
    }
  );
}
var kc = {
  id: `brothers`,
  hero: `jie`,
  file: `jie-kit-brothers`,
  hat: `hat:cap-navy`,
};
function Ac(e) {
  return Ut && e === kc.hero ? kc : null;
}
var jc = new Map();
function Mc(e, t) {
  let n = `/tokyo/avatars/${e.file}${t ? `-1k` : ``}.webp`,
    r = jc.get(n);
  return (
    r ||
      ((r = Nc(n).then((t) => {
        let n = new ee(t);
        return (
          (n.flipY = !1),
          (n.colorSpace = T),
          (n.wrapS = n.wrapT = M),
          (n.anisotropy = 8),
          (n.name = e.file),
          (n.needsUpdate = !0),
          yt(n),
          n
        );
      })),
      r.catch(() => jc.delete(n)),
      jc.set(n, r)),
    r
  );
}
async function Nc(e) {
  if (typeof createImageBitmap == `function` && typeof fetch == `function`) {
    let t = await fetch(e);
    if (!t.ok) throw Error(`team kit: ${t.status} ${e}`);
    let n = await t.blob();
    return createImageBitmap(n, {
      imageOrientation: `none`,
      premultiplyAlpha: `none`,
      colorSpaceConversion: `none`,
    });
  }
  return new Promise((t, n) => {
    let r = new Image();
    ((r.decoding = `async`),
      (r.onload = () => t(r)),
      (r.onerror = () => n(Error(`team kit: ${e}`))),
      (r.src = e));
  });
}
