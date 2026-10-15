// tokyo/assets/region-tokyo-55J_WESF 476 — body
// Lines 171370-171841 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
async function fVe(e) {
  let t = e.ctx,
    n = t.plan,
    r = e.origin,
    i = Z4(t),
    a = new ie(ge(b7, Math.floor(t.time.real)));
  e.step = `intro`;
  let o = Ht(t, T7[0].giver, r),
    s = n3(e, S7.suzuki, C7.suzuki, o.x, o.z, 0);
  (s.faceTo(e.px, e.pz), (s.look = t.player.position), (s.anim = `talk`));
  let c = ht(n, uVe, !0),
    l = new rt(ut(n, c, 0, !0, 10), !0);
  e.vars.loopM = Math.round(l.length);
  let u = { s: 0, seg: 0, dist: 0 };
  l.project(r.x, r.z, u);
  let d = u.s,
    f = l.pointAt(d - 7, { x: 0, z: 0 }),
    p = l.dirAt(d - 7, { x: 0, z: 0 }),
    m = e.vehicle(`scooter`, f.x, f.z, Math.atan2(p.x, -p.z), {
      driver: `ai`,
      locked: !0,
      color: 1908257,
    });
  m && (m.driver = `ai`);
  let h = m
      ? new wt(t, m, l, {
          maxSpeed: 0,
          latAccel: 8,
          decel: 8,
          canReset: !0,
          avoid: !0,
          swerve: 2,
        })
      : null,
    g = m
      ? Iee(
          e,
          `handbag`,
          () => (m.destroyed ? null : m.object),
          [0, 0.95, 0.5],
          1.1,
        )
      : null;
  g?.handle.setVisible(!1);
  let _ = Math.atan2(p.x, -p.z),
    v = P4(t, o.x + p.x * 1.8, o.z + p.z * 1.8, 4),
    y = e.playerVehicle
      ? null
      : e.vehicle(`mamachari`, v.x, v.z, _, { seed: 0.31, color: 12896460 });
  (await $(
    e,
    S7.suzuki,
    N(
      `不好意思，請問乾貨店是在這條巷子裡面嗎？我眼睛不太好……`,
      `Excuse me, is the dried-goods shop down this lane? My eyes aren't what they were…`,
      `ちょっとすみません、乾物屋さんはこの路地の中だったかしら？目が悪くてねえ……`,
    ),
  ),
    await $(
      e,
      i,
      N(
        `呃……抱歉，我也是第一次來……`,
        `Uh… sorry, it is my first time here too…`,
        `あ、すみません、私も初めてで……`,
      ),
      2.4,
    ),
    (e.step = `snatch`));
  let b = new j(
      r.x + (r.x - f.x) * 0.5 + Math.sin(r.heading) * 6,
      2.4,
      r.z + (r.z - f.z) * 0.5 - Math.cos(r.heading) * 6,
    ),
    x = new j((s.x + f.x) / 2, 1, (s.z + f.z) / 2);
  (e.lockPlayer(!0),
    e.branch(() => e.cinematic(b, x, 3.2)),
    m && ((m.controls.throttle = 0.65), (m.controls.brake = 0)),
    await e.wait(0.8),
    g?.handle.setVisible(!0),
    (s.anim = `cower`),
    e.sfx(`ped_scream`, { x: s.x, y: 1.5, z: s.z }),
    await $(
      e,
      S7.suzuki,
      N(
        `啊——！搶劫！我的包包！`,
        `Ah — ! Thief! My bag!`,
        `あっ——！ひったくり！私のバッグ！`,
      ),
      2.2,
    ),
    e.lockPlayer(!1),
    (s.anim = `point`),
    m && (s.look = m.body),
    (e.step = `ride`));
  let S = e.playerVehicle;
  if (
    (S ||
      ($4(
        e,
        S7.suzuki,
        N(
          `騎我的腳踏車去！鑰匙插著！`,
          `Take my bicycle — the key is in it!`,
          `私の自転車、使って！鍵ついてるから！`,
        ),
        2.6,
      ),
      (S = await e.enterVehicle({
        vehicle: y,
        kinds: [`mamachari`, `scooter`, `motorcycle`],
        objective: N(
          `按 {enter} 騎上鈴木奶奶的淑女車`,
          `Press {enter} to get on Mrs. Suzuki's *mamachari*`,
          `{enter} で鈴木さんのママチャリに乗る`,
        ),
      })),
      S && e.keepVehicle(S)),
    !m || !h)
  ) {
    (await e.goto(l.pointAt(d + 300, { x: 0, z: 0 }), {
      objective: N(
        `追上搶劫犯！`,
        `Catch the snatcher!`,
        `ひったくり犯を追え！`,
      ),
      style: `drive`,
      radius: 8,
    }),
      e.pass());
    return;
  }
  ((e.step = `chase`),
    e.objective(
      N(
        `追上「搶劫犯」！緊跟在後讓他慌張，或直接把他撞倒`,
        `Chase the *snatcher*! Stay on his tail to rattle him — or ram him`,
        `「ひったくり犯」を追え！ぴったり付いて焦らせるか、ぶつけて止めろ`,
      ),
    ),
    e.hud.bigMessage(
      N(`追！`, `GO!`, `追え！`),
      N(
        `春日通 → 浅草通 → 中央通`,
        `Kasuga-dori → Asakusa-dori → Chuo-dori`,
        `春日通り → 浅草通り → 中央通り`,
      ),
      { duration: 1.8, color: `#ffc83d` },
    ),
    e.blip(`thief`, {
      x: m.body.x,
      z: m.body.z,
      icon: `target`,
      label: S7.rider.name,
      pulse: !0,
      clampToEdge: !0,
      color: `#ff4d5e`,
    }));
  let C = e.marker({
    x: m.body.x,
    z: m.body.z,
    y: 2.2,
    color: M4,
    style: `target`,
    iconSize: 0.9,
  });
  e.setTimer(170, N(`追捕`, `Chase`, `追跡`), () =>
    e.fail(
      N(
        `搶劫犯消失在巷子裡了`,
        `The snatcher vanished into the back streets`,
        `ひったくり犯は路地に消えた`,
      ),
    ),
  );
  let w = S?.spec?.maxSpeed ?? 7.8,
    T = Math.min(16.5, Math.max(6, w * 0.86)),
    E = 0,
    D = 0,
    O = `flee`,
    k = !1,
    A = 7,
    ee = !1,
    M = { kind: `catch`, x: m.body.x, z: m.body.z, inVehicle: !0 },
    te = { obst: -1, v: 0, vt: 0 };
  ((e.vars.ai = te),
    e.on(`vehicle:collision`, (t) => {
      if (O !== `flee`) return;
      let n = e.playerVehicle;
      (t.vehicleId === m.id ||
        (n &&
          t.vehicleId === n.id &&
          Math.hypot(t.pos.x - m.body.x, t.pos.z - m.body.z) < 3.2)) &&
        n &&
        Math.hypot(n.body.x - m.body.x, n.body.z - m.body.z) < 4.5 &&
        (k = !0);
    }),
    e.every((t) => {
      if (O !== `flee`) return;
      let n = e.dist(m.body.x, m.body.z),
        r = n > 90 ? 0.6 : n > 50 ? 0.75 : n > 25 ? 0.9 : n < 8 ? 1.06 : 0.96;
      ((h.opts.maxSpeed = T * r),
        h.update(t, 1),
        C.setPos(m.body.x, m.body.y + 2.1, m.body.z),
        e.moveBlip(`thief`, m.body.x, m.body.z),
        (E =
          n < 10 && e.inVehicle
            ? Math.min(1, E + t * 0.22)
            : Math.max(0, E - t * (n > 30 ? 0.08 : 0.03))),
        e.progress(lVe, E),
        E > 0.6 && !ee
          ? ((ee = !0),
            $4(
              e,
              S7.rider,
              N(
                `可惡，怎麼甩不掉！`,
                `Damn — I can't shake him!`,
                `くそっ、振り切れねえ！`,
              ),
              1.8,
            ))
          : (A -= t) <= 0 &&
            n < 40 &&
            ((A = 10), $4(e, S7.rider, a.pick(dVe), 1.8)),
        (D = n > 200 ? D + t : 0),
        D > 7 &&
          e.fail(
            N(
              `搶劫犯逃走了`,
              `The snatcher got away`,
              `ひったくり犯に逃げられた`,
            ),
          ),
        (E >= 1 || k || (n < 2.6 && e.playerSpeed > 4)) && (O = `crash`),
        (M.x = m.body.x),
        (M.z = m.body.z),
        (e.waitFor = M),
        (e.vars.gap = Math.round(n)),
        (e.vars.pressure = +E.toFixed(2)),
        (te.obst = h.obstacle < 1e6 ? Math.round(h.obstacle) : -1),
        (te.v = +m.speed.toFixed(1)),
        (te.vt = +h.targetSpeed.toFixed(1)));
    }),
    await e.until(() => O === `crash`),
    (e.waitFor = null),
    e.clearTimer(),
    e.progress(null),
    C.remove(),
    e.removeBlip(`thief`),
    (e.step = `wipeout`));
  let ne = a.chance(0.5) ? -1 : 1,
    re = 0;
  (await e.until(
    (e) => (
      (re += e),
      (m.controls.throttle = 0),
      (m.controls.brake = re > 0.5 ? 1 : 0.2),
      (m.controls.steer = ne * 0.9),
      re > 1.1 || Math.abs(m.speed) < 0.5
    ),
  ),
    (m.controls.steer = 0),
    (m.controls.brake = 1),
    (m.driver = `none`),
    e.sfx(`crash_light`, { x: m.body.x, y: 0.6, z: m.body.z }));
  try {
    t.cameraRig.shake(0.3);
  } catch {}
  let ae = m.heading,
    oe = { x: -Math.cos(ae), z: -Math.sin(ae) },
    se = P4(t, m.body.x + oe.x * 1.4, m.body.z + oe.z * 1.4, 3, !0),
    ce = t3(e, S7.rider, C7.rider, se.x, se.z, ae + Math.PI / 2);
  ((ce.anim = `fallen`), (ce.look = t.player.position), g?.stop());
  let le = m.body.x - Math.sin(ae) * 1.8,
    ue = m.body.z + Math.cos(ae) * 1.8,
    de = e.prop(`handbag`, le, n.groundHeight(le, ue) + 0.02, ue, ae, 1.1);
  (e.hud.bigMessage(
    k
      ? N(`撞倒了！`, `TAKEDOWN!`, `止めた！`)
      : N(`搶劫犯摔車了！`, `HE WENT DOWN!`, `転倒した！`),
    void 0,
    { duration: 1.6, color: `#ffb03d` },
  ),
    $4(
      e,
      S7.rider,
      N(
        `好痛……好啦好啦，包包還你啦！`,
        `Ow… okay, okay, take the bag!`,
        `いってえ……わかった、わかったよ、返すって！`,
      ),
      2.8,
    ),
    await e.wait(1.2),
    (ce.anim = `cower`),
    (e.step = `bag`),
    e.inVehicle &&
      (await e.exitVehicle(
        N(`按 {enter} 下車`, `Press {enter} to get off`, `{enter} で降りる`),
      )),
    await e.goto(
      { x: le, z: ue },
      {
        objective: N(
          `撿回「手提包」`,
          `Pick up the *handbag*`,
          `「バッグ」を拾う`,
        ),
        radius: 1.8,
        onFoot: !0,
        color: 6160266,
        label: N(`手提包`, `Handbag`, `バッグ`),
      },
    ),
    de?.remove(),
    e.sfx(`pickup`, { ui: !0 }));
  let fe = It(e, `handbag`, {
    hand: [0.34, 0.62, -0.04],
    scooter: [0, 0.95, 0.5],
    scale: 1,
  });
  e.step = `police`;
  let pe = Mv[0],
    me = 1 / 0;
  for (let e of Mv) {
    let t = Math.hypot(e.x - ce.x, e.z - ce.z);
    t < me && ((me = t), (pe = e));
  }
  let he = Math.hypot(pe.x - ce.x, pe.z - ce.z) || 1,
    _e = P4(
      t,
      ce.x + ((pe.x - ce.x) / he) * 10,
      ce.z + ((pe.z - ce.z) / he) * 10,
      4,
    ),
    ve = t3(e, S7.officer, C7.officer, _e.x, _e.z, 0);
  ve.look = ce;
  let ye = P4(t, ce.x + 1.1, ce.z + 0.5, 2, !0);
  (ve.moveTo(ye.x, ye.z, 3.4),
    e.sfx(`police_whistle`, { x: ve.x, y: 1.5, z: ve.z }));
  let be = 0;
  (await e.until((e) => ve.distTo(ye.x, ye.z) < 0.8 || (be += e) > 5),
    ve.distTo(ye.x, ye.z) > 1 && ve.place(ye.x, ye.z),
    ve.stop(),
    (ce.anim = `handsUp`),
    (ce.look = ve),
    ve.faceTo(ce.x, ce.z),
    await d3(
      e,
      async (e) => {
        (await e.say(
          S7.officer,
          N(
            `警察！別動。……是你把他攔下來的嗎？謝謝你的協助。`,
            `Police! Stay where you are. …You stopped him? Thank you for your help.`,
            `警察です！動かないで。……あなたが止めてくれたんですか？ご協力ありがとうございます。`,
          ),
          ve,
        ),
          await e.say(
            S7.rider,
            N(`……對不起。`, `…Sorry.`, `……すんません。`),
            ce,
          ),
          await e.say(
            S7.officer,
            N(
              `我是${pe.name.zh}的。這個人交給我們。包包請先還給失主——被害的筆錄我們之後再請她到交番做。`,
              `I'm from ${pe.name.en}. We'll take him from here. Please return the bag to its owner — we'll take her statement at the koban later.`,
              `${pe.name.ja}の者です。この男はこちらで引き取ります。バッグは持ち主の方に返してあげてください。被害届は後ほど交番で伺います。`,
            ),
            ve,
          ),
          await e.say(
            i,
            N(
              `好，我這就拿去還給奶奶。`,
              `Okay — I'll take it back to her now.`,
              `はい、おばあさんに返してきます。`,
            ),
            `me`,
          ));
      },
      { thin: { x: ce.x, z: ce.z } },
    ),
    pVe(e, ve, ce, pe),
    (e.step = `return`),
    (s.anim = `idle`),
    (s.look = t.player.position));
  let xe = P4(
    t,
    s.x + Math.sin(r.heading) * 1.4,
    s.z - Math.cos(r.heading) * 1.4,
    2,
  );
  (await e.goto(xe, {
    objective: N(
      `把包包還給「鈴木奶奶」`,
      `Return the bag to *Mrs. Suzuki*`,
      `バッグを「鈴木さん」に返す`,
    ),
    radius: 3,
    style: `goto`,
    label: S7.suzuki.name,
    color: 5104127,
    pillar: !0,
  }),
    e.inVehicle &&
      (await e.exitVehicle(
        N(`按 {enter} 下車`, `Press {enter} to get off`, `{enter} で降りる`),
      )),
    fe?.stop(),
    s.faceTo(e.px, e.pz),
    (s.anim = `bow`),
    e.sfx(`money`, { ui: !0 }),
    await e.wait(1.3),
    await d3(
      e,
      async (e) => {
        ((s.anim = `talk`),
          await e.say(
            S7.suzuki,
            N(
              `哎呀……真的幫我拿回來了？謝謝你，謝謝你。`,
              `Oh my… you really got it back? Thank you, thank you.`,
              `まあ……本当に取り返してくれたの？ありがとうねえ、ありがとう。`,
            ),
            s,
          ),
          await e.say(
            S7.suzuki,
            N(
              `裡面有我的年金，還有我先生的照片。他走了以後，我一直帶在身上。`,
              `My pension is in here, and a photo of my husband. I've carried it everywhere since he passed.`,
              `この中にね、年金と、主人の写真が入ってるの。亡くなってから、ずっと持ち歩いてるのよ。`,
            ),
            s,
          ),
          await e.say(
            i,
            N(
              `您沒事就好。警察說之後會請您去交番做筆錄。`,
              `I'm glad you're alright. The police would like to take your statement at the koban later.`,
              `ご無事でよかったです。警察が、あとで交番でお話を聞きたいそうです。`,
            ),
            `me`,
          ),
          await e.say(
            S7.suzuki,
            N(
              `好好，我等一下就去。……這個，一點小心意，收下吧。不用客氣、不用客氣。`,
              `Yes, yes, I'll go in a moment. …Here, just a little something. No, no — I insist.`,
              `はいはい、あとで行きますよ。……これ、少ないけどお礼。いいから、いいから。`,
            ),
            s,
          ));
      },
      { thin: { x: s.x, z: s.z } },
    ),
    e.pass({
      bonus: k ? 500 : 1500,
      note: k
        ? N(`一撞就停！`, `Stopped him cold!`, `体当たりで止めた！`)
        : N(
            `緊追不捨，讓他自己摔車！`,
            `Rattled him right off his scooter!`,
            `ぴったり追って転ばせた！`,
          ),
    }));
}
