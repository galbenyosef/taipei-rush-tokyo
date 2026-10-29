// tokyo/assets/region-tokyo-A7LxHjud 346 — key
// Lines 125184-125317 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
function ije(e, t) {
  let n = { boards: [], dirs: [], exits: [], metro: [], plates: [], names: [] },
    r = (e, t) => {
      if (e) return { kanji: e.name.ja, roman: e.name.en, num: e.code };
      if (t) {
        let e = yo(`transit.stn.${t.toLowerCase()}`);
        return { kanji: e.ja, roman: e.en ?? ``, num: t };
      }
      return null;
    };
  for (let e of t.m.corridors)
    for (let t of [`JY`, `JB`, `JC`]) {
      let i = e.platforms
        .filter((e) => e.line === t)
        .sort((e, t) => e.sc - t.sc);
      for (let e = 0; e < i.length; e++) {
        let a = i[e],
          o = r(i[e - 1], e === 0 ? WY[t]?.lo : void 0),
          s = r(i[e + 1], e === i.length - 1 ? WY[t]?.hi : void 0),
          c = {
            line: t,
            num: nje(a.code),
            code3: HY(`transit.code3.${a.id}`) || void 0,
            kanji: a.name.ja,
            kana: HY(`transit.kana.${a.id}`),
            roman: a.name.en,
          };
        (n.boards.push({ ...c, key: `jrboard:${a.id}:a`, left: s, right: o }),
          n.boards.push({ ...c, key: `jrboard:${a.id}:b`, left: o, right: s }));
        let l = UY(a),
          u = HY(`transit.line.${t.toLowerCase()}`);
        for (let e of [0, 1]) {
          let r =
              t === `JY`
                ? `transit.dir.${e === 0 ? `in` : `out`}.${a.id}`
                : t === `JB`
                  ? `transit.dir.${e === 0 ? `e` : `w`}.jb`
                  : `transit.dir.${e === 0 && a.id !== `jc-tokyo` ? `e` : `w`}.jc`,
            i = { ja: `` };
          try {
            i = yo(r);
          } catch {}
          n.dirs.push({
            key: `jrdir:${a.id}:${e}`,
            track: l[e],
            line: t,
            lineJa: u,
            dirJa: i.ja,
            dirEn: i.en ?? ``,
          });
        }
      }
    }
  for (let e of t.m.corridors)
    for (let t of e.platforms) {
      let r = `jrname:${t.name.ja}`;
      if (n.names.some((e) => e.key === r)) continue;
      let i = e.platforms.some(
        (e) => e.name.ja === t.name.ja && e.line === `JY`,
      )
        ? `JY`
        : t.line;
      n.names.push({
        key: r,
        kanji: t.name.ja + HY(`transit.station.suffix`, `駅`),
        roman: `${t.name.en} Station`,
        line: i,
      });
    }
  for (let r of t.entrances.list)
    if (r.op === `jr`) {
      let e = t.m.platforms.find((e) => e.id === r.stationId);
      if (!e || !r.exitKey) continue;
      let i = { ja: `` };
      try {
        i = yo(r.exitKey);
      } catch {}
      n.exits.push({
        key: r.geo.sign,
        kanji: e.name.ja + HY(`transit.station.suffix`, `駅`),
        roman: `${e.name.en} Sta.`,
        exitJa: i.ja,
        exitEn: i.en ?? ``,
        line: `JY`,
      });
    } else {
      let t = e.mrtStations.find((e) => e.id === r.stationId);
      if (!t) continue;
      let i = t.name.ja ?? t.name.zh,
        a = e.mrtStations
          .filter(
            (e) => e.line !== `JY` && (e.name.ja ?? e.name.zh) === i && e.code,
          )
          .map((e) => e.code),
        o = (e) => `GHM`.indexOf(rje(e));
      (a.sort((e, t) => o(e) - o(t)),
        n.metro.push({
          key: r.geo.sign,
          kanji: i,
          roman: t.name.en,
          codes: a,
          exit: HY(`transit.metro.exitno.${t.id}`, `1`),
        }));
    }
  let i = { x: 0, z: 0 },
    a = HY(`transit.plate.kado`, `架道橋`);
  for (let r of t.m.corridors)
    r.girders.forEach((t, o) => {
      if (t.water) return;
      let s = (t.s0 + t.s1) / 2;
      if (s < r.path.s0 || s > r.path.s1) return;
      r.path.pos(s, 0, i);
      let c = e.roadAt(i.x, i.z)?.name?.ja;
      if (!c) return;
      let l = c.replace(/[一二三四五六七八九十]+丁目$/, ``);
      n.plates.push({ key: `plate:${r.id}:${o}`, text: l + a });
    });
  return n;
}
var GY = [`position`, `normal`, `uv`, `color`, `aCity`],
  KY = new p(),
  qY = new k();
function aje() {
  let e = new S();
  return (
    e.setAttribute(`position`, new w(new Float32Array(), 3)),
    e.setAttribute(`normal`, new w(new Float32Array(), 3)),
    e.setAttribute(`uv`, new w(new Float32Array(), 2)),
    e.setAttribute(`color`, new w(new Uint8Array(), 4, !0)),
    e.setAttribute(`aCity`, new w(new Uint8Array(), 4, !0)),
    e.setIndex(new w(new Uint32Array(), 1)),
    e
  );
}
