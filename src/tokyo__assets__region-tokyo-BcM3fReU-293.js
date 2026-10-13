// tokyo__assets__region-tokyo-BcM3fReU 293 — math
// Lines 116511-116834 of readable/tokyo__assets__region-tokyo-BcM3fReU.pretty.js (statement-aligned).
async function wne(e, t) {
  let n = e.ctx,
    r = a7(n, t.key),
    i = t.manager,
    a = () => {
      try {
        return (n.police?.level ?? 0) > 0;
      } catch {
        return !1;
      }
    };
  if (a()) return e.fail(o7.wanted);
  if (!e.giver)
    try {
      Z0(e, i, t.managerLook, e.px + 1.3, e.pz + 0.5, Math.atan2(-1.3, 0.5));
    } catch {}
  if (r.shifts === 0) for (let n of t.brief) await $(e, i, n);
  else await $(e, i, t.hello);
  let o = !1;
  if (
    (t.variant &&
      r.rank >= 1 &&
      (o =
        (
          await y2(e, {
            prompt: o7.which,
            shuffle: !1,
            secs: 15,
            options: [
              { text: o7.normal },
              {
                text: F(
                  `${t.variant.name.zh}（時薪×${t.variant.mult}）`,
                  `${t.variant.name.en} (wage ×${t.variant.mult})`,
                  `${t.variant.name.ja}（時給×${t.variant.mult}）`,
                ),
              },
            ],
          })
        ).index === 1),
    t.room)
  ) {
    let r = await t.room(e);
    if (!r)
      return (
        console.warn(
          `[baito] ${t.key}: no room near (${e.px.toFixed(0)}, ${e.pz.toFixed(0)})`,
        ),
        e.fail(o7.closed)
      );
    if (!(await _4(e, r, `inside`, { staff: !1, guests: t.guests ?? !0 })))
      return (
        console.warn(`[baito] ${t.key}: could not enter ${r}`),
        e.fail(o7.closed)
      );
    let i = t.workSpot ? u4(r, t.workSpot) : null;
    if (i) {
      let a = t.face ? u4(r, t.face) : null,
        o =
          a && Math.hypot(a.x - i.x, a.z - i.z) > 0.2
            ? Math.atan2(a.x - i.x, -(a.z - i.z))
            : i.heading;
      try {
        (n.player.teleport(i.x, i.z, o, i.y), n.cameraRig?.snapBehind?.());
      } catch {}
      let s = Math.sin(o),
        c = -Math.cos(o),
        l = a
          ? new k(a.x, a.y + 1.25, a.z)
          : new k(i.x + s * 3, i.y + 1.25, i.z + c * 3),
        u = new k(
          i.x - s * 0.95 + c * 0.45,
          i.y + 1.8,
          i.z - c * 0.95 - s * 0.45,
        );
      try {
        (n.cameraRig.override(u, l),
          e.onCleanup(() => {
            try {
              n.cameraRig.override(null);
            } catch {}
          }));
      } catch {}
    }
  } else if (t.stand) {
    let r = t.stand(n);
    await k0(e, r.x, r.z, r.heading);
  }
  (e.lockPlayer(!0),
    e.onCleanup(() => e.lockPlayer(!1)),
    e.notify(t.uniform, `info`, 3));
  let s = 12;
  try {
    s = n.env.hour;
  } catch {}
  let c = new bne(e, t, {
    rank: r.rank,
    variant: o,
    startHour: s,
    shifts: r.shifts,
  });
  (e.onCleanup(() => c.panel.close()), await t.setup?.(c));
  let l = 0,
    u = () => n.player.anim?.mocap,
    d = e.every((e) => {
      let n = u();
      (n?.action && /^idle_stretch/.test(n.action) && n.stop?.(0.4),
        (l += e),
        (c.progress = Math.min(1, l / t.secs)),
        c.panel.progress(c.progress));
    }),
    f = 0,
    p = !1;
  for (; l < t.secs && !c.over;) {
    if (a()) {
      p = !0;
      break;
    }
    if ((await t.customer(c, f++), !e.alive)) return;
  }
  if ((d(), c.panel.quit)) {
    (c.panel.close(), e.notify(o7.quitNote, `bad`, 4), e.abort());
    return;
  }
  if (p) return (c.panel.close(), e.fail(o7.wanted));
  let m = c.panel.lives <= 0;
  (m || (await t.closing?.(c)), c.panel.close(), e.lockPlayer(!1));
  try {
    n.cameraRig.override(null);
  } catch {}
  await $(e, i, m ? o7.sentHome : o7.otsukare);
  let h = m
    ? Math.max(1, Math.round(t.hours * Math.min(1, l / t.secs)))
    : t.hours;
  await e.skipTo((s + h) % 24, o7.later);
  let g = (t.secs / 22) * (o ? 1.25 : 1),
    _ = m ? `C` : xne(c.quality, c.panel.served, g),
    v = Sne(t, r.rank, o),
    y = v * h,
    b = m ? 0 : Math.round(yne[_] * (o && t.variant ? t.variant.mult : 1)),
    x = y + b,
    S = _e(me(n.state.data, r7(t.key))),
    C = Math.round(x * S),
    w = n.state;
  (w.stat(i7(t.key, `shifts`)),
    w.stat(i7(t.key, `earned`), C),
    w.stat(`baito_shifts`),
    w.stat(`baito_earned`, C),
    _ !== `C` && w.stat(i7(t.key, `xp`)));
  let T = n7.indexOf(_) + 1;
  T > (w.data.stats[i7(t.key, `best`)] ?? 0) &&
    (w.data.stats[i7(t.key, `best`)] = T);
  let E = a7(n, t.key);
  (await Dne(e, {
    job: t,
    wage: v,
    worked: h,
    base: y,
    bonus: b,
    total: x,
    share: S,
    paid: C,
    grade: _,
    rankBefore: r.rank,
    after: E,
    early: m,
    variant: o,
  }),
    e.pass({ reward: x, note: F(`評價 ${_}`, `Grade ${_}`, `評価 ${_}`) }));
}
var Tne = F(
    `一小時內重複同一份工作`,
    `Same job again within the hour`,
    `1時間以内に同じ仕事の繰り返し`,
  ),
  Ene = `
#tk-slip { position: fixed; inset: 0; z-index: 70; display: grid; place-items: center; background: rgba(0,0,0,.35); pointer-events: auto; }
#tk-slip .sl { width: min(380px, calc(100vw - 32px)); padding: 18px 20px 16px; border-radius: 6px; background: #fbf8f0; color: #22201c;
  box-shadow: 0 16px 40px rgba(0,0,0,.4); font: 500 15px "Hiragino Sans","Hiragino Kaku Gothic ProN","Noto Sans JP","PingFang TC","Noto Sans TC",system-ui,sans-serif;
  position: relative; transform: rotate(-1deg); }
#tk-slip h3 { margin: 0 56px 2px; font-size: 19px; letter-spacing: .3em; text-align: center; }
#tk-slip .sub { text-align: center; font-size: 13px; color: #6a655c; margin-bottom: 12px; }
#tk-slip table { width: 100%; border-collapse: collapse; }
#tk-slip td { padding: 5px 2px; border-bottom: 1px dashed #c9c2b2; }
#tk-slip td:last-child { text-align: right; font-variant-numeric: tabular-nums; }
#tk-slip tr.tot td { border-bottom: 0; border-top: 2px solid #22201c; font-weight: 800; font-size: 18px; padding-top: 8px; }
#tk-slip .stamp { position: absolute; right: 14px; top: 10px; width: 54px; height: 54px; border-radius: 50%; border: 3px solid #c8161f; color: #c8161f;
  display: grid; place-items: center; font: 900 26px Georgia,serif; transform: rotate(12deg); opacity: .88; }
#tk-slip .rank { margin-top: 10px; font-size: 13px; color: #4a463e; }
#tk-slip .rank b { color: #b07a10; }
#tk-slip .bar { height: 6px; border-radius: 3px; background: #e2dccd; margin-top: 4px; overflow: hidden; }
#tk-slip .bar i { display: block; height: 100%; background: #d9a21c; }
#tk-slip button { display: block; width: 100%; margin-top: 14px; min-height: 46px; border: 0; border-radius: 10px; background: #22201c; color: #fff;
  font: 700 16px inherit; font-family: inherit; cursor: pointer; }
`;
async function Dne(e, t) {
  let n = e.ctx;
  if (typeof document > `u`) return;
  if (!document.getElementById(`tk-slip-css`)) {
    let e = document.createElement(`style`);
    ((e.id = `tk-slip-css`),
      (e.textContent = Ene),
      document.head.appendChild(e));
  }
  let r = (e) => n.t(e),
    i = (e) => he(e),
    a = document.createElement(`div`);
  a.id = `tk-slip`;
  let o = t7[t.after.rank + 1],
    s = t7[t.after.rank],
    c = o ? (t.after.xp - s.xp) / (o.xp - s.xp) : 1,
    l = t.variant && t.job.variant ? t.job.variant.name : t.job.title;
  a.innerHTML = `<div class="sl"><h3></h3><div class="sub"></div><div class="stamp">${t.grade}</div><table>
    <tr><td class="l-wage"></td><td>${i(t.wage)} × ${t.worked}h</td></tr>
    <tr><td class="l-sub"></td><td>${i(t.base)}</td></tr>
    <tr><td class="l-bonus"></td><td>${t.bonus ? i(t.bonus) : `—`}</td></tr>
    ${t.share < 1 ? `<tr><td class="l-tired"></td><td>−${Math.round((1 - t.share) * 100)}%</td></tr>` : ``}
    <tr class="tot"><td class="l-tot"></td><td>${i(t.paid)}</td></tr></table>
    <div class="rank"></div><div class="bar"><i style="width:${Math.round(c * 100)}%"></i></div><button type="button"></button></div>`;
  let u = (e) => a.querySelector(e);
  ((u(`h3`).textContent = r(o7.slip)),
    (u(`.sub`).textContent = `${r(l)}${t.early ? ` ` + r(o7.early) : ``}`),
    (u(`.l-wage`).textContent = r(o7.hoursPay)),
    (u(`.l-sub`).textContent = `${r(o7.hoursPay)} × ${t.worked}h`),
    (u(`.l-bonus`).textContent = r(o7.bonus)),
    (u(`.l-tot`).textContent = r(o7.total)),
    t.share < 1 && (u(`.l-tired`).textContent = r(Tne)));
  let d = u(`.rank`);
  ((d.innerHTML = `${r(o7.rank)}：<b></b>　<span></span>`),
    (d.querySelector(`b`).textContent =
      r(s.name) + (t.after.rank > t.rankBefore ? `　${r(o7.rankUp)}` : ``)),
    (d.querySelector(`span`).textContent = o
      ? `${r(o7.next)} ${o.xp - t.after.xp} ${r(o7.shifts)}`
      : ``));
  let f = u(`button`);
  f.textContent = r(o7.ok);
  let p = !1;
  (f.addEventListener(`pointerdown`, (e) => {
    (e.preventDefault(), (p = !0));
  }),
    document.body.appendChild(a));
  let m = !1;
  try {
    (n.ui.setExternalMenu?.(!0),
      (m = !0),
      document.pointerLockElement && document.exitPointerLock());
  } catch {}
  let h = () => {
    if ((a.remove(), m)) {
      m = !1;
      try {
        n.ui.setExternalMenu?.(!1);
      } catch {}
    }
  };
  (e.onCleanup(h), e.sfx(`money`, { ui: !0 }));
  let g = n.input.keys,
    _ = !1,
    v = !0,
    y = 0;
  (await e.until((e) => {
    y += e;
    let t = !!g?.has(`KeyE`) || !!g?.has(`Enter`) || !!g?.has(`Space`) || One();
    return (
      v ? (v = t) : _ && t && y > 0.6 && (p = !0),
      (_ = !0),
      n.params.has(`autosolve`) && y > 3 && (p = !0),
      p
    );
  }),
    h());
  try {
    n.input.isTouch || n.input.lockPointer();
  } catch {}
}
function One() {
  let e =
    typeof navigator < `u` && navigator.getGamepads
      ? navigator.getGamepads()
      : null;
  if (!e) return !1;
  for (let t = 0; t < e.length; t++) if (e[t]?.buttons[0]?.pressed) return !0;
  return !1;
}
function s7(e) {
  let t = l4(e);
  return {
    x: t.x + Math.sin(t.facing) * 1.2,
    z: t.z - Math.cos(t.facing) * 1.2,
    heading: t.facing + Math.PI,
  };
}
var kne = [
  `salaryman`,
  `officeLady`,
  `businesswoman`,
  `student`,
  `studentGirl`,
  `tourist`,
  `grandma`,
  `hipster`,
  `worker`,
  `nerd`,
];
function Ane(e) {
  try {
    let t = e.pick(kne);
    return Ht(t, `tk-baito-cust-${t}`, {});
  } catch {
    return null;
  }
}
async function jne(e, t, n, r) {
  let i = Ane(e),
    a = i ? e.customerActor(t, n, i) : null;
  try {
    return await r();
  } finally {
    if (a)
      try {
        e.m.removeActor(a);
      } catch {}
  }
}
