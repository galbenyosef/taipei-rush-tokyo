// tokyo/assets/actors-bknSEpf2 45 — push
// Lines 15984-16331 of readable/tokyo/assets/actors-bknSEpf2.pretty.js (statement-aligned).
function Mf(e, t, n, r, i) {
  let a = (e, t, n, r) => {
    if (!isFinite(n)) return e;
    let i = [],
      a = (e) => (r ? e[t] >= n : e[t] <= n);
    for (let r = 0; r < e.length; r++) {
      let o = e[r],
        s = e[(r + 1) % e.length],
        c = a(o),
        l = a(s);
      if ((c && i.push(o), c !== l)) {
        let e = (n - o[t]) / (s[t] - o[t]);
        i.push(
          t === 0
            ? [n, o[1] + (s[1] - o[1]) * e]
            : [o[0] + (s[0] - o[0]) * e, n],
        );
      }
    }
    return i;
  };
  return a(a(a(a(e, 0, t, !0), 0, n, !1), 1, r, !0), 1, i, !1);
}
var Nf = new Int32Array(),
  Pf = new Float64Array(),
  Ff = new Int32Array(),
  If = new Float64Array(),
  Lf = new Int32Array(),
  Rf = new Uint8Array(),
  zf = new Float32Array(1),
  Bf = new Int32Array(zf.buffer),
  Vf = (e) => ((zf[0] = e), Bf[0]),
  Hf = !0,
  Uf = (e) => {
    let t = 16;
    for (; t < e;) t *= 2;
    return t;
  };
function Wf() {
  ((Hf = !1),
    (Nf = new Int32Array()),
    (Pf = new Float64Array()),
    (Ff = new Int32Array()),
    (If = new Float64Array()),
    (Lf = new Int32Array()),
    (Rf = new Uint8Array()));
}
function Gf(e) {
  e.boundingBox || e.computeBoundingBox();
  let t = e.boundingBox;
  return Math.max(t.max.x - t.min.x, t.max.y - t.min.y, t.max.z - t.min.z) / 24;
}
function Kf(e, t) {
  let n = e.attributes.position.array,
    r = e.attributes.color.array,
    i = e.attributes.uv.array,
    a = e.attributes.vdata.array,
    o = e.attributes.vvar.array,
    s = t ?? Math.max(0.045, Gf(e)),
    c = n.length / 9,
    l = c * 3,
    u = (e) => a[e * 12 + 1] > 0.5;
  Nf.length < l && (Nf = new Int32Array(l));
  let d = Uf(l * 2),
    f = d - 1;
  (Pf.length < d && ((Pf = new Float64Array(d)), (Ff = new Int32Array(d))),
    Pf.fill(-1, 0, d),
    If.length < l * 4 && (If = new Float64Array(l * 4)));
  let p = 0;
  for (let e = 0; e < c; e++) {
    if (u(e)) {
      Nf[e * 3] = Nf[e * 3 + 1] = Nf[e * 3 + 2] = -1;
      continue;
    }
    for (let t = 0; t < 3; t++) {
      let r = e * 3 + t,
        i = r * 3,
        a = n[i],
        o = n[i + 1],
        c = n[i + 2],
        l = Math.round(a / s) + 1024,
        u = Math.round(o / s) + 1024,
        d = Math.round(c / s) + 1024,
        m = (l * 2048 + u) * 2048 + d,
        h =
          (Math.imul(l, 73856093) ^
            Math.imul(u, 19349663) ^
            Math.imul(d, 83492791)) &
          f,
        g = -1;
      for (;;) {
        let e = Pf[h];
        if (e === m) {
          g = Ff[h];
          break;
        }
        if (e === -1) {
          ((g = p++), (Pf[h] = m), (Ff[h] = g));
          let e = g * 4;
          If[e] = If[e + 1] = If[e + 2] = If[e + 3] = 0;
          break;
        }
        h = (h + 1) & f;
      }
      Nf[r] = g;
      let _ = g * 4;
      ((If[_] += a), (If[_ + 1] += o), (If[_ + 2] += c), If[_ + 3]++);
    }
  }
  Rf.length < c && (Rf = new Uint8Array(c));
  let m = Uf(c * 2),
    h = m - 1;
  Lf.length < m * 5 && (Lf = new Int32Array(m * 5));
  for (let e = 0; e < m; e++) Lf[e * 5] = -1;
  let g = 0;
  for (let e = 0; e < c; e++) {
    Rf[e] = 0;
    let t = e * 3,
      r = Nf[t],
      i = Nf[t + 1],
      s = Nf[t + 2];
    if (r >= 0) {
      if (r === i || i === s || r === s) continue;
      (r > i && ((r ^= i), (i ^= r), (r ^= i)),
        i > s && ((i ^= s), (s ^= i), (i ^= s)),
        r > i && ((r ^= i), (i ^= r), (r ^= i)));
      let e = Vf(o[t]),
        n = Vf(a[t * 4]),
        c =
          (Math.imul(r, 2654435761) ^
            Math.imul(i, 2246822519) ^
            Math.imul(s, 3266489917) ^
            Math.imul(e, 668265263) ^
            n) >>>
          0;
      c = (c ^ (c >>> 15)) & h;
      let l = !1;
      for (;;) {
        let t = c * 5;
        if (Lf[t] === -1) {
          ((Lf[t] = r),
            (Lf[t + 1] = i),
            (Lf[t + 2] = s),
            (Lf[t + 3] = e),
            (Lf[t + 4] = n));
          break;
        }
        if (
          Lf[t] === r &&
          Lf[t + 1] === i &&
          Lf[t + 2] === s &&
          Lf[t + 3] === e &&
          Lf[t + 4] === n
        ) {
          l = !0;
          break;
        }
        c = (c + 1) & h;
      }
      if (l) continue;
    }
    ep(n, t) && ((Rf[e] = 1), g++);
  }
  let _ = new Float32Array(g * 9),
    v = new Float32Array(g * 9),
    y = new Float32Array(g * 9),
    b = new Float32Array(g * 6),
    x = new Float32Array(g * 12),
    S = new Float32Array(g * 3),
    C = 0;
  for (let e = 0; e < c; e++) {
    if (!Rf[e]) continue;
    let t = e * 3;
    ep(n, t);
    for (let e = 0; e < 3; e++) {
      let n = t + e,
        s = C + e;
      ((_[s * 3] = qf[e * 3]),
        (_[s * 3 + 1] = qf[e * 3 + 1]),
        (_[s * 3 + 2] = qf[e * 3 + 2]),
        (v[s * 3] = Zf.x),
        (v[s * 3 + 1] = Zf.y),
        (v[s * 3 + 2] = Zf.z),
        (y[s * 3] = r[n * 3]),
        (y[s * 3 + 1] = r[n * 3 + 1]),
        (y[s * 3 + 2] = r[n * 3 + 2]),
        (b[s * 2] = i[n * 2]),
        (b[s * 2 + 1] = i[n * 2 + 1]),
        (x[s * 4] = a[n * 4]),
        (x[s * 4 + 1] = a[n * 4 + 1]),
        (x[s * 4 + 2] = a[n * 4 + 2]),
        (x[s * 4 + 3] = a[n * 4 + 3]),
        (S[s] = o[n]));
    }
    C += 3;
  }
  let w = new le();
  return (
    w.setAttribute(`position`, new z(_, 3)),
    w.setAttribute(`normal`, new z(v, 3)),
    w.setAttribute(`color`, new z(y, 3)),
    w.setAttribute(`uv`, new z(b, 2)),
    w.setAttribute(`vdata`, new z(x, 4)),
    w.setAttribute(`vvar`, new z(S, 1)),
    w.computeBoundingBox(),
    w.computeBoundingSphere(),
    (w.userData = { ...e.userData, isLod: !0, triangles: g, cell: s }),
    delete w.userData.lod,
    Hf || Wf(),
    w
  );
}
var qf = new Float64Array(9),
  Jf = new V(),
  Yf = new V(),
  Xf = new V(),
  Zf = new V(),
  Qf = new V(),
  $f = [Jf, Yf, Xf];
function ep(e, t) {
  let n = $f;
  for (let r = 0; r < 3; r++) {
    let i = Nf[t + r],
      a = n[r];
    if (i < 0) {
      let n = (t + r) * 3;
      a.set(e[n], e[n + 1], e[n + 2]);
    } else {
      let e = i * 4;
      a.set(If[e] / If[e + 3], If[e + 1] / If[e + 3], If[e + 2] / If[e + 3]);
    }
    ((qf[r * 3] = a.x), (qf[r * 3 + 1] = a.y), (qf[r * 3 + 2] = a.z));
  }
  Zf.subVectors(Yf, Jf).cross(Qf.subVectors(Xf, Jf));
  let r = Zf.length();
  return r < 1e-7 ? !1 : (Zf.multiplyScalar(1 / r), !0);
}
var tp = e({ runScenario: () => ap }),
  np = (e) => new Promise((t) => setTimeout(t, e));
function rp(e, t) {
  let n = t.cars
      .map(
        (e) =>
          `${e.role[0]}${e.state === `deployed` ? `*` : ``}:${e.d}m/${e.speed}${e.los ? `` : `?`}`,
      )
      .join(` `),
    r = t.officers.map((e) => `${e.state[0]}${e.d}`).join(`,`);
  return `${e.toFixed(1)}s ★${t.level}${t.evading ? ` EVADING` : ``}${t.frozen ? ` FROZEN` : ``}${t.minorOnly ? ` (traffic)` : ``} player(${t.player.x},${t.player.z} ${t.player.speed}m/s) cars[${n}] officers[${r}]${t.heli ? ` heli:` + t.heli.state : ``} js${t.jsMs}ms`;
}
async function ip(e, t = 4e3) {
  for (let n = 0; n < t / 100 && !e.vehicles.playerVehicle; n++) await np(100);
  return !!e.vehicles.playerVehicle;
}
async function ap(e, t, n, r, i = {}) {
  let a = [],
    o = e.input.virtual,
    s = e.time.elapsed,
    c = () => e.time.elapsed - s;
  switch (r) {
    case `pursuit`: {
      (await ip(e), t.setLevel(i.level ?? 2), (o.moveY = 1));
      let r = i.duration ?? 22,
        s = i.stop ?? 7;
      for (let e = 0; e < r; e += 1)
        (await np(1e3),
          (o.moveX = +(e % 8 == 6)),
          e >= s && ((o.moveY = 0), (o.moveX = 0)),
          a.push(rp(c(), n.stats())));
      o.moveY = o.moveX = 0;
      break;
    }
    case `ticket`: {
      await ip(e);
      let r = e.state.money;
      (e.events.emit(`crime`, {
        type: `red_light`,
        pos: e.player.position.clone(),
        severity: 1,
      }),
        a.push(`unseen red_light → ★${t.level}`),
        n.spawnOfficer(9, 4, `guard`, 0, `guard`),
        await np(400),
        e.events.emit(`crime`, {
          type: `red_light`,
          pos: e.player.position.clone(),
          severity: 1,
        }),
        a.push(
          `red_light seen by an officer → ★${t.level} traffic=${n.stats().minorOnly}`,
        ));
      for (let e = 0; e < 30 && (t.level > 0 || e < 2); e += 1)
        (await np(1e3), a.push(rp(c(), n.stats())));
      a.push(`money ${vt(r, gt)} → ${vt(e.state.money, gt)}`);
      break;
    }
    case `evade`: {
      (t.setLevel(i.level ?? 2),
        await np(3e3),
        e.player.teleport(i.x ?? 420, i.z ?? 330, 0));
      let r = ``;
      for (let e = 0; e < 160 && t.level > 0; e++) {
        await np(500);
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
        (await np(1e3),
          a.push(
            `${c().toFixed(1)}s hp=${Math.round(e.player.health)} ${JSON.stringify(n.stats().shots)}`,
          ));
      break;
    case `crimes`: {
      (e.player.teleport(i.x ?? 300, i.z ?? 380, 0), await np(300), t.clear());
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
          pos: new V(n.x, 0, n.z),
          severity: 1,
          witnessed: i,
        }),
          await np(400),
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
