// tokyo/assets/actors-bknSEpf2 89 — math
// Lines 38682-38710 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function eC(e) {
  let t = e.mat,
    n = -e.heading,
    r = Math.cos(n),
    i = Math.sin(n);
  ((e.sh = -i), (e.ch = r));
  let a = e.pitch,
    o = -e.lean,
    s = Math.cos(a),
    c = Math.sin(a),
    l = Math.cos(o),
    u = Math.sin(o);
  ((t[0] = r * l + i * c * u),
    (t[1] = s * u),
    (t[2] = -i * l + r * c * u),
    (t[3] = 0),
    (t[4] = -r * u + i * c * l),
    (t[5] = s * l),
    (t[6] = i * u + r * c * l),
    (t[7] = 0),
    (t[8] = i * s),
    (t[9] = -c),
    (t[10] = r * s),
    (t[11] = 0),
    (t[12] = e.x),
    (t[13] = e.y),
    (t[14] = e.z),
    (t[15] = 1));
}
