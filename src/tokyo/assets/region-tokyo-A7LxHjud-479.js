// tokyo/assets/region-tokyo-A7LxHjud 479 — math
// Lines 172771-173084 of readable/tokyo/assets/region-tokyo-A7LxHjud.pretty.js (statement-aligned).
async function VVe(e) {
  let t = e.ctx,
    n = e.origin,
    r = Q4(t),
    i = Math.sin(n.heading),
    a = -Math.cos(n.heading);
  e.step = `intro`;
  let o = Ut(t, I7[0].giver, n),
    s = r3(e, N7.mori, P7.mori, o.x, o.z, 0);
  (s.faceTo(e.px, e.pz), (s.look = t.player.position));
  let c = e.crowd(n.x + i * 3, n.z - 18, 16, 14, [
      `office`,
      `student`,
      `tourist`,
      `uncle`,
    ]),
    l = e.crowd(-185.5, -712, 18, 10, [`student`, `tourist`, `office`]),
    u = [],
    d = [
      { x: n.x + i * 2.5, z: n.z + a * 2.5 },
      ...zVe,
      { x: n.x + i * 2.5, z: n.z + a * 2.5 },
    ];
  for (let t = 0; t + 1 < d.length; t++)
    for (let n of Z4(e, d[t], d[t + 1])) {
      let e = u[u.length - 1];
      (!e || Math.hypot(e.x - n.x, e.z - n.z) > 1.5) && u.push(n);
    }
  for (let e of u) e.x < -192 && (e.x = -188);
  ((e.vars.routeN = u.length),
    await f3(
      e,
      async (e) => {
        (await e.say(
          N7.mori,
          N(
            `……不好意思，打擾一下。我是這家店的保全員。`,
            `…Excuse me, may I have a word? I am this store’s detective.`,
            `……すみません、ちょっといいですか。この店の保安員です。`,
          ),
          s,
        ),
          await e.say(
            N7.mori,
            N(
              `有個男的一直在遊戲機貨架前面打轉……剛剛把一台塞進外套裡了。`,
              `There is a man who keeps circling the console shelf… he just slipped one inside his jacket.`,
              `さっきからゲーム機の棚の前をうろうろしてる男がいて……今、一台上着の中に入れたの。`,
            ),
            s,
          ),
          await e.say(
            r,
            N(`要報警嗎？`, `Should we call the police?`, `警察を呼びますか？`),
            `me`,
          ),
          await e.say(
            N7.mori,
            N(
              `店員在他出店門之前不能叫住他。他一踏出去就是關鍵——我已經通知交番了，但我腳程不快。`,
              `We can't stop him until he's out of the shop. The moment he steps outside is what counts — I've called the koban, but I'm not much of a runner.`,
              `お店を出るまでは声をかけられないの。出た瞬間が勝負よ。交番には連絡したけど、私、足は速くないの。`,
            ),
            s,
          ));
      },
      { thin: { x: n.x, z: n.z } },
    ),
    (e.step = `out`));
  let f = F4(t, n.x + i * 0.4 - 1.4 * a, n.z + a * 0.4 + 1.4 * i, 2),
    p = n3(e, N7.thief, P7.thief, f.x, f.z, n.heading);
  ((p.look = t.player.position),
    e.sfx(`store_chime`, { x: f.x, y: 1.5, z: f.z }),
    p.moveTo(f.x + i * 2.5, f.z + a * 2.5, 1.3),
    await e.wait(1.4),
    (s.anim = `point`),
    (s.look = p),
    e3(
      e,
      N7.mori,
      N(
        `先生，請等一下！那個還沒結帳吧！`,
        `Sir, wait a moment! You haven't paid for that!`,
        `お客様、お待ちください！それ、お会計まだですよね！`,
      ),
      2.4,
    ),
    await e.wait(1.2),
    p.faceTo(s.x, s.z),
    e3(e, N7.thief, N(`糟了！`, `Crap!`, `やべっ！`), 1.2),
    e.sfx(`ped_hey`, { x: s.x, y: 1.5, z: s.z }),
    await e.wait(0.6),
    (e.step = `chase`));
  let m = 0,
    h = 1 / 0;
  for (let e = 0; e < u.length; e++) {
    let t = Math.hypot(u[e].x - p.x, u[e].z - p.z);
    u[e].z < p.z - 3 && t < h && ((h = t), (m = e));
  }
  let g = u.length > 2 ? [...u.slice(m), ...u.slice(0, m)] : u;
  (e3(
    e,
    N7.mori,
    N(`拜託，幫我攔住他！`, `Please — stop him!`, `お願い、止めて！`),
    2,
  ),
    e.objective(
      N(
        `抓住「偷竊犯」！（靠近後按 {interact} 撲倒他，別撞到路人）`,
        `Catch the *shoplifter*! (get close and press {interact} to tackle him — mind the shoppers)`,
        `「万引き犯」を捕まえろ！（近づいて {interact} でタックル。通行人に気をつけて）`,
      ),
    ),
    e.setTimer(120, N(`追捕`, `Chase`, `追跡`), () =>
      e.fail(
        N(
          `偷竊犯消失在人群裡了`,
          `The shoplifter vanished into the crowd`,
          `万引き犯は人混みに消えた`,
        ),
      ),
    ));
  let _ = W4(e, p, {
      path: g.length > 2 ? g : void 0,
      loop: !0,
      home: { x: -170, z: -690 },
      homeR: 90,
      speed: 0.98,
      farD: 70,
      escape: 8,
      speaker: N7.thief.name,
      lost: N(
        `他消失在人群裡了`,
        `He vanished into the crowd`,
        `人混みに紛れて見失った`,
      ),
      taunts: BVe,
    }),
    v = G4(p, 2.5);
  (e.every((e) => {
    if (_.state !== `flee` || !v(e)) return;
    let n = p.heading,
      r = F4(t, p.x + Math.sin(n) * 1.6, p.z - Math.cos(n) * 1.6, 3);
    p.place(r.x, r.z, n);
  }),
    await e.until(() => _.state === `down`),
    _.stop(),
    e.clearTimer(),
    K4(e, p, _.by),
    (e.vars.by = _.by),
    e.objective(null),
    e3(
      e,
      N7.thief,
      N(
        `好痛痛……好啦，還你、還你啦！`,
        `Ow, ow… okay, take it, take it back!`,
        `いてて……わかった、返す、返すから！`,
      ),
      2.4,
    ),
    await e.wait(1),
    (p.anim = `cower`),
    (e.step = `console`));
  let y = p.heading,
    b = F4(t, p.x + Math.sin(y) * 1.3, p.z - Math.cos(y) * 1.3, 2, !0);
  (await iRe(
    e,
    `camera`,
    b.x,
    b.z,
    N(`遊戲機`, `Console`, `ゲーム機`),
    N(`撿起「遊戲機」`, `Pick up the *console*`, `「ゲーム機」を拾う`),
    2.2,
  ),
    (e.step = `police`));
  let x = Fv[0],
    S = 1 / 0;
  for (let e of Fv) {
    let t = Math.hypot(e.x - p.x, e.z - p.z);
    t < S && ((S = t), (x = e));
  }
  let C = Math.hypot(x.x - p.x, x.z - p.z) || 1,
    w = F4(t, p.x + ((x.x - p.x) / C) * 10, p.z + ((x.z - p.z) / C) * 10, 4),
    T = n3(e, N7.officer, P7.officer, w.x, w.z, 0);
  T.look = p;
  let E = F4(t, p.x + 1.1, p.z + 0.5, 2, !0);
  T.moveTo(E.x, E.z, 3.4);
  let D = 0;
  (await e.until((e) => T.distTo(E.x, E.z) < 0.8 || (D += e) > 5),
    T.distTo(E.x, E.z) > 1 && T.place(E.x, E.z),
    T.stop(),
    (p.anim = `handsUp`),
    (p.look = T),
    T.faceTo(p.x, p.z),
    await f3(
      e,
      async (e) => {
        (await e.say(
          N7.officer,
          N(
            `我是${x.name.zh}的。接到店裡保全員的通報。……你沒受傷吧？`,
            `${x.name.en}. The store detective called us. …Are you hurt?`,
            `${x.name.ja}です。保安員さんから通報がありました。……おケガはありませんか？`,
          ),
          T,
        ),
          await e.say(
            N7.thief,
            N(
              `……對不起。我本來想拿去轉賣……`,
              `…I’m sorry. I was going to resell it…`,
              `……すみませんでした。転売するつもりで……`,
            ),
            p,
          ),
          await e.say(
            N7.officer,
            N(
              `詳細的到交番再說。人交給我們，商品請先送回店裡，之後我們會跟保全員一起問話。`,
              `You can tell us at the koban. We'll take him — please bring the item back to the store; we'll speak with the detective afterwards.`,
              `詳しくは交番で聞きます。この人はこちらで。商品はお店に返してください。後ほど保安員さんと一緒にお話を伺います。`,
            ),
            T,
          ));
      },
      { thin: { x: p.x, z: p.z } },
    ),
    HVe(e, T, p, x),
    (e.step = `return`));
  let O = F4(t, s.x + i * 1.2, s.z + a * 1.2, 2);
  ((s.anim = `idle`),
    (s.look = t.player.position),
    await e.goto(O, {
      objective: N(
        `把遊戲機送回店裡交給「森小姐」`,
        `Bring the console back to *Ms. Mori* at the shop`,
        `ゲーム機を店の「森さん」に返す`,
      ),
      radius: 2.4,
      onFoot: !0,
      label: N7.mori.name,
      color: 5104127,
      pillar: !0,
    }),
    s.faceTo(e.px, e.pz),
    (s.anim = `bow`),
    e.sfx(`money`, { ui: !0 }),
    await e.wait(1.3),
    c(),
    l(),
    await f3(
      e,
      async (e) => {
        ((s.anim = `talk`),
          await e.say(
            N7.mori,
            N(
              `真的太感謝了！你跑得好快。`,
              `Thank you so much! You were so fast.`,
              `本当にありがとうございます！足、速いんですね。`,
            ),
            s,
          ),
          await e.say(
            N7.mori,
            N(
              `最近為了轉賣而偷東西的人很多……這是店長的一點謝意，請收下。`,
              `There are a lot of people stealing to resell lately… This is a small thank-you from the manager. Please take it.`,
              `最近多いのよ、転売目的の万引き……これ、店長からのお礼です。受け取ってください。`,
            ),
            s,
          ),
          await e.say(
            r,
            N(
              `不客氣。……原來日本的保全員要等小偷出店門才能抓啊。`,
              `You're welcome. …So in Japan you have to wait until they leave the shop.`,
              `どういたしまして。……日本では、店を出るまで待つんですね。`,
            ),
            `me`,
          ),
          await e.say(
            N7.mori,
            N(
              `對，出了店門才算數。下次跑的時候，記得小心路上的人喔。`,
              `Yes — only once they are outside does it count. Next time you run, mind the people on the pavement.`,
              `そう、店を出てからが勝負。次に走るときは、歩道の人に気をつけてね。`,
            ),
            s,
          ));
      },
      { thin: { x: s.x, z: s.z } },
    ),
    e.pass({
      bonus: _.by === `tackle` ? 1500 : 500,
      note:
        _.by === `tackle`
          ? N(`漂亮的撲倒！`, `A clean tackle!`, `見事なタックル！`)
          : N(`小偷抓到了`, `Shoplifter caught`, `万引き犯を確保`),
    }));
}
function HVe(e, t, n, r) {
  e.branch(async () => {
    ((n.anim = `idle`), (t.anim = `idle`), await e.wait(0.6));
    let i = Z4(e, { x: n.x, z: n.z }, r),
      a =
        i.find((e) => Math.hypot(e.x - n.x, e.z - n.z) > 6) ?? i[i.length - 1];
    (a && (n.moveTo(a.x, a.z, 1.2), t.moveTo(a.x + 0.8, a.z + 0.4, 1.2)),
      await e.wait(12),
      e.removeActor(n),
      e.removeActor(t));
  });
}
