// tokyo/assets/tokyo-CqLdAwml 25 — addcolorstop
// Lines 10757-10796 of readable/tokyo/assets/tokyo-CqLdAwml.pretty.js (statement-aligned).
function Po(e, t, n) {
  let r = e.createRadialGradient(
    t / 2,
    n * 0.42,
    n * 0.25,
    t / 2,
    n * 0.45,
    n * 0.75,
  );
  (r.addColorStop(0, `rgba(0,0,0,0)`),
    r.addColorStop(1, `rgba(0,0,0,0.55)`),
    (e.fillStyle = r),
    e.fillRect(0, 0, t, n));
  let i = e.createLinearGradient(0, n * 0.7, 0, n);
  (i.addColorStop(0, `rgba(11,12,18,0)`),
    i.addColorStop(1, `rgba(11,12,18,0.85)`),
    (e.fillStyle = i),
    e.fillRect(0, n * 0.7, t, n * 0.3));
}
function Fo() {
  try {
    let e = le();
    return e === null
      ? !1
      : (e.completedMissions?.length ?? 0) > 0 ||
          (e.collectibles?.length ?? 0) > 0 ||
          (e.money ?? 500) !== 500 ||
          !!e.pos ||
          Object.keys(e.stats ?? {}).length > 0;
  } catch {
    return !1;
  }
}
function Io(e) {
  try {
    return e.ctx.player.character;
  } catch {
    return null;
  }
}
