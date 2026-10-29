// tokyo/assets/actors-qKVitB-C 95 — attributes
// Lines 45623-45673 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function VC(e) {
  let t = new L(0, 0.07, -0.1),
    n = e.meshes[0],
    r = e.adapter.proxy.joints[H.head],
    i = n?.geometry.attributes.position,
    a = n?.geometry.attributes.uv;
  if (!n || !i || !a) return t;
  e.root.updateMatrixWorld(!0);
  let o = new L(),
    s = 1 / 0;
  for (let e = 0; e < i.count; e++) {
    let i = a.getX(e);
    i < 0.34 ||
      i > 0.66 ||
      (n.getVertexPosition(e, o),
      o.applyMatrix4(n.matrixWorld),
      !(Math.abs(o.x) > 0.012 || o.y < r.y + 0.02 || o.y > r.y + 0.14) &&
        o.z < s &&
        ((s = o.z), t.set(0, o.y - r.y, o.z - r.z)));
  }
  return t;
}
var HC = new I(),
  UC = new L();
function WC(e) {
  let t = (((e >> 16) & 255) / 255) ** 2.2,
    n = (((e >> 8) & 255) / 255) ** 2.2,
    r = ((e & 255) / 255) ** 2.2;
  return 0.2126 * t + 0.7152 * n + 0.0722 * r;
}
function GC(e, t, n) {
  let r = ((t >> 16) & 255) / 255,
    i = ((t >> 8) & 255) / 255,
    a = (t & 255) / 255;
  e.set(r ** 2.2, i ** 2.2, a ** 2.2, t ? n : 0);
}
var KC = {
  count: 0,
  alive: 0,
  visible: 0,
  near: 0,
  far: 0,
  crowds: 0,
  jsMs: 0,
  target: 0,
  bodies: 0,
  lite: 0,
  hero: 0,
  cyclists: 0,
  tris: 0,
};
