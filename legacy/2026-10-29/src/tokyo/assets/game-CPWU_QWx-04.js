// tokyo/assets/game-CPWU_QWx 04 — math
// Lines 893-1151 of readable/tokyo/assets/game-CPWU_QWx.pretty.js (statement-aligned).
function rt(e, t, n, r) {
  let [i, ...a] = t.split(/\s+/),
    o = e.player;
  switch (i.toLowerCase()) {
    case `help`:
    case `?`:
      for (let e of tt) n(e);
      return;
    case `clear`:
    case `cls`:
      r();
      return;
    case `pos`: {
      let t = o.position;
      n(
        `${t.x.toFixed(1)} ${t.z.toFixed(1)} ${Math.round(o.heading / et)}   (y ${t.y.toFixed(1)}, ${e.region.identity.regionId})`,
        `ok`,
      );
      return;
    }
    case `places`: {
      let t = a.join(` `).toLowerCase(),
        r = ot(e).filter(
          (e) =>
            !t ||
            e.key.toLowerCase().includes(t) ||
            e.label.toLowerCase().includes(t),
        );
      if (!r.length) return n(`no places match`, `err`);
      for (let e of r)
        n(
          `${e.key.padEnd(28)} ${e.label}  (${Math.round(e.x)}, ${Math.round(e.z)})`,
        );
      return;
    }
    case `tp`:
    case `teleport`:
    case `goto`:
      return it(e, a, n);
    case `give`:
      return st(e, a, n);
    case `money`:
    case `cash`: {
      let t = e.money;
      if (!a.length) return n(`balance ${t.format(t.balance())}`, `ok`);
      let r = a[0].toLowerCase() === `set`,
        i = Number((r ? a[1] : a[0])?.replace(/[,_]/g, ``));
      return Number.isFinite(i)
        ? (t.add(r ? i - t.balance() : i, void 0, `cheat`),
          n(`balance ${t.format(t.balance())}`, `ok`))
        : n(`usage: money <amount> · money set <amount>`, `err`);
    }
    case `heal`:
      return (o.heal(o.maxHealth), n(`health full`, `ok`));
    case `wanted`: {
      let t = Number(a[0]);
      return !Number.isFinite(t) || t < 0 || t > 5
        ? n(`usage: wanted <0-5>`, `err`)
        : (t === 0 ? e.police.clear() : e.police.setLevel(Math.round(t)),
          n(`wanted level ${Math.round(t)}`, `ok`));
    }
    case `region`: {
      let t = a[0]?.toLowerCase();
      if (!t || !Qe.includes(t))
        return n(`usage: region <${Qe.join(`|`)}>`, `err`);
      if (t === e.region.identity.regionId) return n(`already in ${t}`, `err`);
      e.state.saveNow();
      let r = new URL(location.href);
      (r.searchParams.set(`region`, t),
        r.searchParams.delete(`spawn`),
        n(`reloading into ${t}…`, `ok`),
        (location.href = r.toString()));
      return;
    }
    default:
      n(`unknown command "${i}" — try help`, `err`);
  }
}
function it(e, t, n) {
  let r = e.player;
  if (r.mode === `dead` || r.mode === `busted` || r.mode === `cutscene`)
    return n(`can't teleport while ${r.mode}`, `err`);
  if (!t.length)
    return n(`usage: tp <x> <z> [heading°] · tp <name> · tp waypoint`, `err`);
  let i = null,
    a = t.map((e) => Number(e.replace(/,$/, ``)));
  if (t.length >= 2 && Number.isFinite(a[0]) && Number.isFinite(a[1]))
    i = {
      key: ``,
      label: `${a[0]}, ${a[1]}`,
      x: a[0],
      z: a[1],
      heading: Number.isFinite(a[2]) ? a[2] * et : void 0,
    };
  else if (t[0].toLowerCase() === `waypoint` || t[0].toLowerCase() === `wp`) {
    let t = e.ui.waypoint;
    if (!t) return n(`no waypoint set (mark one on the map)`, `err`);
    i = { key: `waypoint`, label: `waypoint`, x: t.x, z: t.z };
  } else {
    let r = t.join(` `).toLowerCase(),
      a = ot(e),
      o = a.find((e) => e.key.toLowerCase() === r),
      s = o
        ? [o]
        : a.filter(
            (e) =>
              e.key.toLowerCase().includes(r) ||
              e.label.toLowerCase().includes(r),
          );
    if (!s.length) return n(`no place matches "${r}" — try places`, `err`);
    if (s.length > 1) {
      n(`"${r}" matches ${s.length} places:`, `err`);
      for (let e of s.slice(0, 12)) n(`  ${e.key}  ${e.label}`);
      return;
    }
    i = s[0];
  }
  let o = i;
  at(e, o).then(
    () => n(`→ ${o.label}  (${Math.round(o.x)}, ${Math.round(o.z)})`, `ok`),
    (e) => n(`teleport failed: ${e?.message ?? e}`, `err`),
  );
}
async function at(e, t) {
  let n = t.heading ?? e.player.heading;
  await e.ui.fade(1, 0.2);
  try {
    let r = e.districts.ensureResident?.(t.x, t.z);
    (r &&
      (await Promise.race([
        r.catch(() => {}),
        new Promise((e) => setTimeout(e, 8e3)),
      ])),
      e.player.teleport(t.x, t.z, n, t.y),
      e.cameraRig.snapBehind?.(n));
  } finally {
    await e.ui.fade(0, 0.35);
  }
}
function ot(e) {
  let t = (e) => `${e.en} ${e.zh}`,
    n = [];
  for (let [r, i] of Object.entries(e.landmarks?.anchors ?? {}))
    n.push({
      key: r,
      label: t(i.name),
      x: i.x,
      z: i.z,
      y: i.y,
      heading: i.heading,
    });
  for (let r of e.transit?.stations ?? [])
    n.push({
      key: `mrt-${r.id}`,
      label: t(r.name),
      x: r.ex,
      z: r.ez,
      heading: r.eh,
    });
  for (let [t, r] of Object.entries(e.plan.spawns))
    n.push({
      key: t,
      label: `spawn: ${t}`,
      x: r.x,
      z: r.z,
      heading: r.heading,
    });
  return n;
}
function st(e, t, n) {
  let r = e.player,
    i = t[0]?.toLowerCase(),
    a = Number(t[1]);
  switch (i) {
    case `bat`:
    case `pistol`:
    case `smg`: {
      let e = Number.isFinite(a) ? Math.max(0, Math.round(a)) : V[i];
      return (
        r.giveWeapon(i, e),
        n(`gave ${i}${i === `bat` ? `` : ` + ${e} rounds`}`, `ok`)
      );
    }
    case `ammo`: {
      let e = (r.ownedWeapons ?? []).filter(
        (e) => e === `pistol` || e === `smg`,
      );
      if (!e.length)
        return n(`no guns to load — give pistol / smg first`, `err`);
      for (let t of e) r.giveWeapon(t, Number.isFinite(a) ? a : V[t]);
      return n(`ammo for ${e.join(`, `)}`, `ok`);
    }
    case `armor`:
    case `armour`:
      return (
        (r.armor = Math.max(0, Math.min(100, Number.isFinite(a) ? a : 100))),
        n(`armor ${r.armor}`, `ok`)
      );
    case `health`:
    case `hp`:
      return (r.heal(r.maxHealth), n(`health full`, `ok`));
    case `caffeine`:
    case `coffee`: {
      let e = Number.isFinite(a) ? a : 120;
      return r.buff?.(`caffeine`, e)
        ? n(`caffeine for ${e}s`, `ok`)
        : n(`caffeine not available right now`, `err`);
    }
    case `all`:
      for (let e of [`bat`, `pistol`, `smg`]) r.giveWeapon(e, V[e]);
      return (
        (r.armor = 100),
        r.heal(r.maxHealth),
        n(`gave bat, pistol, smg, ammo, armor and full health`, `ok`)
      );
    default:
      n(
        `usage: give <bat|pistol|smg> [ammo] · give ammo · give armor [n] · give health · give caffeine [s] · give all`,
        `err`,
      );
  }
}
var ct = {
    audio: 0.5,
    environment: 3,
    streets: 8,
    buildings: 10,
    landmarks: 6,
    districts: 5,
    culture: 3.5,
    transit: 2.5,
    player: 1.5,
    vehicles: 2,
    traffic: 1,
    peds: 1,
    police: 1,
    missions: 1,
    camera: 0.3,
    ui: 1.5,
  },
  H = 0.9,
  U = [`low`, `medium`, `high`, `ultra`];
function lt(e, t = 1) {
  let n = t >= 2,
    r = Math.min(e.drawDistance, 360);
  return {
    maxPixelRatio: Math.min(e.maxPixelRatio, n ? 1.25 : 1.35),
    maxTextureSize: Math.min(e.maxTextureSize, 1024),
    maxSignTextureSize: Math.min(
      e.maxSignTextureSize ?? e.maxTextureSize,
      1024,
    ),
    textureScale: Math.min(e.textureScale, 0.375),
    drawDistance: n ? Math.round(r * 0.75) : r,
    rainParticles: Math.min(e.rainParticles, n ? 500 : 600),
    maxPeds: Math.min(e.maxPeds, 22),
    maxTrafficVehicles: Math.min(e.maxTrafficVehicles, 20),
  };
}
