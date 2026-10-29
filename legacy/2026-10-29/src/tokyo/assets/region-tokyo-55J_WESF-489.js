// tokyo/assets/region-tokyo-55J_WESF 489 — anim
// Lines 176411-176546 of readable/tokyo/assets/region-tokyo-55J_WESF.pretty.js (statement-aligned).
var Y9 = (e) => e.toLocaleString(`en-US`),
  X9 = [3e4, 15e3, 8e3],
  cHe = [
    {
      id: `tokyo:side_c1`,
      title: {
        zh: `首都高 C1 午夜賽`,
        en: `C1 Midnight`,
        ja: `C1ミッドナイト`,
      },
      description: {
        zh: `芝公園的高架下，小車隊的阿亮在等人。他賭你跑不贏他們——首都高都心環狀線，兩圈，深夜的車流裡一決勝負。`,
        en: `Under the deck by Shibakoen, Ryo's little car club is waiting. He bets you can't beat them: two laps of the Shuto Inner Circular Route, through the late-night traffic.`,
        ja: `芝公園の高架下で、小さなカークラブのリョウが待っている。お前じゃ勝てないと言う——首都高都心環状線を二周、深夜の流れの中で勝負だ。`,
      },
      category: `side`,
      reward: X9[0],
      icon: `race`,
      glyph: `環`,
      blip: `mission`,
      color: nHe,
      order: 345,
      get giver() {
        return (
          U9(),
          { outfit: `v:tk-side-c1-ryo`, dx: 1.4, dz: 0.6, anim: `phone` }
        );
      },
      giverName: H9.name,
      hours: [20, 4],
      skipTo: 22,
      skipCaption: {
        zh: `晚上 10:00 · 芝公園`,
        en: `10 PM · Shibakoen`,
        ja: `午後10時・芝公園`,
      },
      start: () => ({ x: -126, z: 985, heading: -Math.PI / 2 }),
      async run(e) {
        let t = e.ctx,
          n = e.origin,
          r = Z4(t);
        e.step = `briefing`;
        let i = P4(t, n.x + 1.4, n.z + 0.6, 6),
          a = n3(e, H9, U9, i.x, i.z, 0);
        (a.faceTo(e.px, e.pz),
          (a.look = t.player.position),
          (a.anim = `talk`),
          await $(
            e,
            H9,
            N(
              `喂，你就是最近在東京到處跑的那個人？`,
              `Hey — you're the one who's been tearing round Tokyo lately?`,
              `おい、最近東京を走り回ってるってのはアンタか？`,
            ),
          ),
          await $(
            e,
            H9,
            N(
              `頭頂上這條就是首都高 C1，都心環狀線。一圈五公里，隧道、彎道、高架全都有。`,
              `That's C1 over our heads — the Inner Circular Route. Five kilometres a lap: tunnels, corners, decks, the lot.`,
              `頭の上が首都高C1、都心環状線だ。一周五キロ、トンネルもコーナーも高架も全部ある。`,
            ),
          ),
          await $(
            e,
            H9,
            N(
              `跟我們車隊跑兩圈。贏了，獎金歸你；車也借你，之後愛怎麼開都行。`,
              `Run two laps with my club. Win and the pot's yours — and keep the car, drive it wherever you like after.`,
              `ウチのクラブと二周勝負だ。勝ったら賞金はアンタのもん。車も貸すから、その後は好きに走りな。`,
            ),
          ),
          await $(
            e,
            H9,
            N(
              `只有一個規矩：別撞一般車。大家都要平安回家。`,
              `One rule: don't hit the regular traffic. Everybody gets home tonight.`,
              `ルールはひとつ、一般車にはぶつけるな。みんな無事に帰るんだ。`,
            ),
          ),
          await $(e, r, N(`好，來吧。`, `Fine. Let's go.`, `いいよ、やろう。`)),
          (a.anim = `phone`));
        let o = await sHe(e);
        if (!e.alive) return;
        if (!o.finished) {
          e.fail({
            zh: `你離開了 C1——比賽結束`,
            en: `You left C1 — the race is over`,
            ja: `C1を降りた——レース終了`,
          });
          return;
        }
        if (o.place > 3) {
          e.fail({
            zh: `第 ${o.place} 名——車隊全贏了你`,
            en: `${o.place}th — the whole club beat you`,
            ja: `${o.place}位——クラブ全員に負けた`,
          });
          return;
        }
        let s = X9[o.place - 1];
        ((e.step = `done`),
          await $(
            e,
            H9,
            o.place === 1
              ? N(
                  `（電話）……真的贏了啊。C1 上沒人跑得過你了。獎金收下吧。`,
                  `(phone) …You actually won. Nobody on C1 can touch you now. Take the pot.`,
                  `（電話）……マジで勝ちやがった。C1でアンタに敵うやつはもういねえよ。賞金、受け取ってくれ。`,
                )
              : N(
                  `（電話）不錯嘛，第一次就跑成這樣。下次再來挑戰。`,
                  `(phone) Not bad for a first run. Come back and try us again.`,
                  `（電話）初めてにしちゃやるじゃん。また挑戦しに来いよ。`,
                ),
          ));
        let c = t.vehicles.playerVehicle;
        (c && e.keepVehicle(c),
          e.pass({
            reward: s,
            note: {
              zh: `第 ${o.place} 名 · ${J9(o.time)} · 最快圈 ${J9(o.best)} · ¥${Y9(s)}`,
              en: `P${o.place} · ${J9(o.time)} · best lap ${J9(o.best)} · ¥${Y9(s)}`,
              ja: `${o.place}位・${J9(o.time)}・ベスト ${J9(o.best)}・¥${Y9(s)}`,
            },
          }));
      },
    },
  ];
function lHe() {
  return [...qVe, ...eHe, ...T7, ...A7, ...SVe, ...DVe, ...PVe, ...zVe, ...cHe];
}
