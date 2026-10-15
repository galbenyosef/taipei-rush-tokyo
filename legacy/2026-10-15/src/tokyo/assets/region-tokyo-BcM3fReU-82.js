// tokyo/assets/region-tokyo-BcM3fReU 82 — math
// Lines 40970-41004 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
function Nb(e, t) {
  let n = Mb(e, t),
    r = {
      door: [n.dx, 0.9, 0, Math.PI],
      counter: [n.stoolX - 0.35, 6.6, 0, Math.PI / 2],
      master: [n.counter.x1 + 0.3, 4.4, 0, -Math.PI / 2],
      phone: [n.phone.x, n.phone.z - 0.6, 0, Math.PI],
      game: [n.game.x + 0.75, n.game.z, 0, -Math.PI / 2],
      corner: [n.corner.tx, n.corner.tz + 0.72, 0, 0],
      "corner-guest": [n.corner.tx, n.corner.tz - 0.72, 0, Math.PI],
      "corner-guard": [
        n.corner.screenX + 0.6,
        n.corner.screenZ0 - 0.6,
        0,
        -Math.PI / 2 - 0.4,
      ],
    };
  return (
    n.booths.forEach((e, t) => {
      let i = (e.z0 + e.z1) / 2;
      ((r[`booth-${t + 1}`] = [n.boothX[1] + 0.45, i, 0, -Math.PI / 2]),
        (r[`booth-${t + 1}-seat`] = [
          n.boothX[1] - 0.45,
          e.z0 + 0.32,
          0,
          Math.PI,
        ]),
        (r[`booth-${t + 1}-seat2`] = [n.boothX[1] - 0.45, e.z1 - 0.32, 0, 0]));
    }),
    r
  );
}
function Pb(e) {
  return e;
}
