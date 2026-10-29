// tokyo/assets/actors-qKVitB-C 20 — push
// Lines 6252-6360 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function gs(e, t) {
  let n = t.cars
      .map(
        (e) =>
          `${e.role[0]}${e.state === `deployed` ? `*` : ``}:${e.d}m/${e.speed}${e.los ? `` : `?`}`,
      )
      .join(` `),
    r = t.officers.map((e) => `${e.state[0]}${e.d}`).join(`,`);
  return `${e.toFixed(1)}s ★${t.level}${t.evading ? ` EVADING` : ``}${t.frozen ? ` FROZEN` : ``}${t.minorOnly ? ` (traffic)` : ``} player(${t.player.x},${t.player.z} ${t.player.speed}m/s) cars[${n}] officers[${r}]${t.heli ? ` heli:` + t.heli.state : ``} js${t.jsMs}ms`;
}
async function _s(e, t = 4e3) {
  for (let n = 0; n < t / 100 && !e.vehicles.playerVehicle; n++) await hs(100);
  return !!e.vehicles.playerVehicle;
}
async function vs(e, t, n, r, i = {}) {
  let a = [],
    o = e.input.virtual,
    s = e.time.elapsed,
    c = () => e.time.elapsed - s;
  switch (r) {
    case `pursuit`: {
      (await _s(e), t.setLevel(i.level ?? 2), (o.moveY = 1));
      let r = i.duration ?? 22,
        s = i.stop ?? 7;
      for (let e = 0; e < r; e += 1)
        (await hs(1e3),
          (o.moveX = +(e % 8 == 6)),
          e >= s && ((o.moveY = 0), (o.moveX = 0)),
          a.push(gs(c(), n.stats())));
      o.moveY = o.moveX = 0;
      break;
    }
    case `ticket`: {
      await _s(e);
      let r = e.state.money;
      (e.events.emit(`crime`, {
        type: `red_light`,
        pos: e.player.position.clone(),
        severity: 1,
      }),
        a.push(`unseen red_light → ★${t.level}`),
        n.spawnOfficer(9, 4, `guard`, 0, `guard`),
        await hs(400),
        e.events.emit(`crime`, {
          type: `red_light`,
          pos: e.player.position.clone(),
          severity: 1,
        }),
        a.push(
          `red_light seen by an officer → ★${t.level} traffic=${n.stats().minorOnly}`,
        ));
      for (let e = 0; e < 30 && (t.level > 0 || e < 2); e += 1)
        (await hs(1e3), a.push(gs(c(), n.stats())));
      a.push(`money ${pt(r, ft)} → ${pt(e.state.money, ft)}`);
      break;
    }
    case `evade`: {
      (t.setLevel(i.level ?? 2),
        await hs(3e3),
        e.player.teleport(i.x ?? 420, i.z ?? 330, 0));
      let r = ``;
      for (let e = 0; e < 160 && t.level > 0; e++) {
        await hs(500);
        let e = n.stats(),
          t = `★${e.level} evading=${e.evading}`;
        t !== r &&
          (a.push(`${c().toFixed(1)}s ${t} evadeT=${e.evadeT}`), (r = t));
      }
      a.push(`${c().toFixed(1)}s ★${t.level}`);
      break;
    }
    case `gunfight`:
      (t.setLevel(i.level ?? 3),
        n.spawnOfficer(0, -12, `aim`, 0, `foot`),
        n.spawnOfficer(6, -16, `aim`, 1, `foot`));
      for (let t = 0; t < (i.duration ?? 8); t++)
        (await hs(1e3),
          a.push(
            `${c().toFixed(1)}s hp=${Math.round(e.player.health)} ${JSON.stringify(n.stats().shots)}`,
          ));
      break;
    case `crimes`: {
      (e.player.teleport(i.x ?? 300, i.z ?? 380, 0), await hs(300), t.clear());
      let n = e.player.position;
      for (let [r, i] of [
        [`assault`, !1],
        [`assault`, !0],
        [`carjack`, !0],
        [`shooting`, !0],
        [`kill`, !0],
        [`kill_police`, !0],
      ])
        (e.events.emit(`crime`, {
          type: r,
          pos: new L(n.x, 0, n.z),
          severity: 1,
          witnessed: i,
        }),
          await hs(400),
          a.push(`${r}${i ? ` (witnessed)` : ``} → ★${t.level}`));
      break;
    }
    default:
      a.push(
        `unknown scenario '${r}' (pursuit | ticket | evade | gunfight | crimes)`,
      );
  }
  return (a.push(...n.log.slice(-14).map((e) => `log ${e}`)), a);
}
