// tokyo/assets/region-tokyo-BcM3fReU 302 — body
// Lines 118940-119411 of readable/tokyo/assets/region-tokyo-BcM3fReU.pretty.js (statement-aligned).
async function lre(e) {
  let t = e.ctx,
    n = t.plan,
    r = e.origin,
    i = G0(t),
    a = new ne(P(N7, Math.floor(t.time.real)));
  e.step = `intro`;
  let o = dn(t, R7[0].giver, r),
    s = Z0(e, F7.suzuki, I7.suzuki, o.x, o.z, 0);
  (s.faceTo(e.px, e.pz), (s.look = t.player.position), (s.anim = `talk`));
  let c = Je(n, sre, !0),
    l = new lt(En(n, c, 0, !0, 10), !0);
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
      ? new Nt(t, m, l, {
          maxSpeed: 0,
          latAccel: 8,
          decel: 8,
          canReset: !0,
          avoid: !0,
          swerve: 2,
        })
      : null,
    g = m
      ? pn(
          e,
          `handbag`,
          () => (m.destroyed ? null : m.object),
          [0, 0.95, 0.5],
          1.1,
        )
      : null;
  g?.handle.setVisible(!1);
  let _ = Math.atan2(p.x, -p.z),
    v = C0(t, o.x + p.x * 1.8, o.z + p.z * 1.8, 4),
    y = e.playerVehicle
      ? null
      : e.vehicle(`mamachari`, v.x, v.z, _, { seed: 0.31, color: 12896460 });
  (await $(
    e,
    F7.suzuki,
    F(
      `不好意思，請問乾貨店是在這條巷子裡面嗎？我眼睛不太好……`,
      `Excuse me, is the dried-goods shop down this lane? My eyes aren't what they were…`,
      `ちょっとすみません、乾物屋さんはこの路地の中だったかしら？目が悪くてねえ……`,
    ),
  ),
    await $(
      e,
      i,
      F(
        `呃……抱歉，我也是第一次來……`,
        `Uh… sorry, it is my first time here too…`,
        `あ、すみません、私も初めてで……`,
      ),
      2.4,
    ),
    (e.step = `snatch`));
  let b = new k(
      r.x + (r.x - f.x) * 0.5 + Math.sin(r.heading) * 6,
      2.4,
      r.z + (r.z - f.z) * 0.5 - Math.cos(r.heading) * 6,
    ),
    x = new k((s.x + f.x) / 2, 1, (s.z + f.z) / 2);
  (e.lockPlayer(!0),
    e.branch(() => e.cinematic(b, x, 3.2)),
    m && ((m.controls.throttle = 0.65), (m.controls.brake = 0)),
    await e.wait(0.8),
    g?.handle.setVisible(!0),
    (s.anim = `cower`),
    e.sfx(`ped_scream`, { x: s.x, y: 1.5, z: s.z }),
    await $(
      e,
      F7.suzuki,
      F(
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
      (J0(
        e,
        F7.suzuki,
        F(
          `騎我的腳踏車去！鑰匙插著！`,
          `Take my bicycle — the key is in it!`,
          `私の自転車、使って！鍵ついてるから！`,
        ),
        2.6,
      ),
      (S = await e.enterVehicle({
        vehicle: y,
        kinds: [`mamachari`, `scooter`, `motorcycle`],
        objective: F(
          `按 {enter} 騎上鈴木奶奶的淑女車`,
          `Press {enter} to get on Mrs. Suzuki's *mamachari*`,
          `{enter} で鈴木さんのママチャリに乗る`,
        ),
      })),
      S && e.keepVehicle(S)),
    !m || !h)
  ) {
    (await e.goto(l.pointAt(d + 300, { x: 0, z: 0 }), {
      objective: F(
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
      F(
        `追上「搶劫犯」！緊跟在後讓他慌張，或直接把他撞倒`,
        `Chase the *snatcher*! Stay on his tail to rattle him — or ram him`,
        `「ひったくり犯」を追え！ぴったり付いて焦らせるか、ぶつけて止めろ`,
      ),
    ),
    e.hud.bigMessage(
      F(`追！`, `GO!`, `追え！`),
      F(
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
      label: F7.rider.name,
      pulse: !0,
      clampToEdge: !0,
      color: `#ff4d5e`,
    }));
  let C = e.marker({
    x: m.body.x,
    z: m.body.z,
    y: 2.2,
    color: x0,
    style: `target`,
    iconSize: 0.9,
  });
  e.setTimer(170, F(`追捕`, `Chase`, `追跡`), () =>
    e.fail(
      F(
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
    A = !1,
    j = 7,
    M = !1,
    ee = { kind: `catch`, x: m.body.x, z: m.body.z, inVehicle: !0 },
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
        (A = !0);
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
        e.progress(ore, E),
        E > 0.6 && !M
          ? ((M = !0),
            J0(
              e,
              F7.rider,
              F(
                `可惡，怎麼甩不掉！`,
                `Damn — I can't shake him!`,
                `くそっ、振り切れねえ！`,
              ),
              1.8,
            ))
          : (j -= t) <= 0 &&
            n < 40 &&
            ((j = 10), J0(e, F7.rider, a.pick(cre), 1.8)),
        (D = n > 200 ? D + t : 0),
        D > 7 &&
          e.fail(
            F(
              `搶劫犯逃走了`,
              `The snatcher got away`,
              `ひったくり犯に逃げられた`,
            ),
          ),
        (E >= 1 || A || (n < 2.6 && e.playerSpeed > 4)) && (O = `crash`),
        (ee.x = m.body.x),
        (ee.z = m.body.z),
        (e.waitFor = ee),
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
  let N = a.chance(0.5) ? -1 : 1,
    re = 0;
  (await e.until(
    (e) => (
      (re += e),
      (m.controls.throttle = 0),
      (m.controls.brake = re > 0.5 ? 1 : 0.2),
      (m.controls.steer = N * 0.9),
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
  let ie = m.heading,
    ae = { x: -Math.cos(ie), z: -Math.sin(ie) },
    oe = C0(t, m.body.x + ae.x * 1.4, m.body.z + ae.z * 1.4, 3, !0),
    se = X0(e, F7.rider, I7.rider, oe.x, oe.z, ie + Math.PI / 2);
  ((se.anim = `fallen`), (se.look = t.player.position), g?.stop());
  let ce = m.body.x - Math.sin(ie) * 1.8,
    le = m.body.z + Math.cos(ie) * 1.8,
    ue = e.prop(`handbag`, ce, n.groundHeight(ce, le) + 0.02, le, ie, 1.1);
  (e.hud.bigMessage(
    A
      ? F(`撞倒了！`, `TAKEDOWN!`, `止めた！`)
      : F(`搶劫犯摔車了！`, `HE WENT DOWN!`, `転倒した！`),
    void 0,
    { duration: 1.6, color: `#ffb03d` },
  ),
    J0(
      e,
      F7.rider,
      F(
        `好痛……好啦好啦，包包還你啦！`,
        `Ow… okay, okay, take the bag!`,
        `いってえ……わかった、わかったよ、返すって！`,
      ),
      2.8,
    ),
    await e.wait(1.2),
    (se.anim = `cower`),
    (e.step = `bag`),
    e.inVehicle &&
      (await e.exitVehicle(
        F(`按 {enter} 下車`, `Press {enter} to get off`, `{enter} で降りる`),
      )),
    await e.goto(
      { x: ce, z: le },
      {
        objective: F(
          `撿回「手提包」`,
          `Pick up the *handbag*`,
          `「バッグ」を拾う`,
        ),
        radius: 1.8,
        onFoot: !0,
        color: 6160266,
        label: F(`手提包`, `Handbag`, `バッグ`),
      },
    ),
    ue?.remove(),
    e.sfx(`pickup`, { ui: !0 }));
  let de = nn(e, `handbag`, {
    hand: [0.34, 0.62, -0.04],
    scooter: [0, 0.95, 0.5],
    scale: 1,
  });
  e.step = `police`;
  let fe = EC[0],
    pe = 1 / 0;
  for (let e of EC) {
    let t = Math.hypot(e.x - se.x, e.z - se.z);
    t < pe && ((pe = t), (fe = e));
  }
  let me = Math.hypot(fe.x - se.x, fe.z - se.z) || 1,
    he = C0(
      t,
      se.x + ((fe.x - se.x) / me) * 10,
      se.z + ((fe.z - se.z) / me) * 10,
      4,
    ),
    ge = X0(e, F7.officer, I7.officer, he.x, he.z, 0);
  ge.look = se;
  let _e = C0(t, se.x + 1.1, se.z + 0.5, 2, !0);
  (ge.moveTo(_e.x, _e.z, 3.4),
    e.sfx(`police_whistle`, { x: ge.x, y: 1.5, z: ge.z }));
  let ve = 0;
  (await e.until((e) => ge.distTo(_e.x, _e.z) < 0.8 || (ve += e) > 5),
    ge.distTo(_e.x, _e.z) > 1 && ge.place(_e.x, _e.z),
    ge.stop(),
    (se.anim = `handsUp`),
    (se.look = ge),
    ge.faceTo(se.x, se.z),
    await m2(
      e,
      async (e) => {
        (await e.say(
          F7.officer,
          F(
            `警察！別動。……是你把他攔下來的嗎？謝謝你的協助。`,
            `Police! Stay where you are. …You stopped him? Thank you for your help.`,
            `警察です！動かないで。……あなたが止めてくれたんですか？ご協力ありがとうございます。`,
          ),
          ge,
        ),
          await e.say(
            F7.rider,
            F(`……對不起。`, `…Sorry.`, `……すんません。`),
            se,
          ),
          await e.say(
            F7.officer,
            F(
              `我是${fe.name.zh}的。這個人交給我們。包包請先還給失主——被害的筆錄我們之後再請她到交番做。`,
              `I'm from ${fe.name.en}. We'll take him from here. Please return the bag to its owner — we'll take her statement at the koban later.`,
              `${fe.name.ja}の者です。この男はこちらで引き取ります。バッグは持ち主の方に返してあげてください。被害届は後ほど交番で伺います。`,
            ),
            ge,
          ),
          await e.say(
            i,
            F(
              `好，我這就拿去還給奶奶。`,
              `Okay — I'll take it back to her now.`,
              `はい、おばあさんに返してきます。`,
            ),
            `me`,
          ));
      },
      { thin: { x: se.x, z: se.z } },
    ),
    ure(e, ge, se, fe),
    (e.step = `return`),
    (s.anim = `idle`),
    (s.look = t.player.position));
  let ye = C0(
    t,
    s.x + Math.sin(r.heading) * 1.4,
    s.z - Math.cos(r.heading) * 1.4,
    2,
  );
  (await e.goto(ye, {
    objective: F(
      `把包包還給「鈴木奶奶」`,
      `Return the bag to *Mrs. Suzuki*`,
      `バッグを「鈴木さん」に返す`,
    ),
    radius: 3,
    style: `goto`,
    label: F7.suzuki.name,
    color: 5104127,
    pillar: !0,
  }),
    e.inVehicle &&
      (await e.exitVehicle(
        F(`按 {enter} 下車`, `Press {enter} to get off`, `{enter} で降りる`),
      )),
    de?.stop(),
    s.faceTo(e.px, e.pz),
    (s.anim = `bow`),
    e.sfx(`money`, { ui: !0 }),
    await e.wait(1.3),
    await m2(
      e,
      async (e) => {
        ((s.anim = `talk`),
          await e.say(
            F7.suzuki,
            F(
              `哎呀……真的幫我拿回來了？謝謝你，謝謝你。`,
              `Oh my… you really got it back? Thank you, thank you.`,
              `まあ……本当に取り返してくれたの？ありがとうねえ、ありがとう。`,
            ),
            s,
          ),
          await e.say(
            F7.suzuki,
            F(
              `裡面有我的年金，還有我先生的照片。他走了以後，我一直帶在身上。`,
              `My pension is in here, and a photo of my husband. I've carried it everywhere since he passed.`,
              `この中にね、年金と、主人の写真が入ってるの。亡くなってから、ずっと持ち歩いてるのよ。`,
            ),
            s,
          ),
          await e.say(
            i,
            F(
              `您沒事就好。警察說之後會請您去交番做筆錄。`,
              `I'm glad you're alright. The police would like to take your statement at the koban later.`,
              `ご無事でよかったです。警察が、あとで交番でお話を聞きたいそうです。`,
            ),
            `me`,
          ),
          await e.say(
            F7.suzuki,
            F(
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
      bonus: A ? 500 : 1500,
      note: A
        ? F(`一撞就停！`, `Stopped him cold!`, `体当たりで止めた！`)
        : F(
            `緊追不捨，讓他自己摔車！`,
            `Rattled him right off his scooter!`,
            `ぴったり追って転ばせた！`,
          ),
    }));
}
