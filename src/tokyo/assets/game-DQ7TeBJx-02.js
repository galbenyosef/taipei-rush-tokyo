// tokyo/assets/game-DQ7TeBJx 02 — missions
// Lines 165-565 of readable/tokyo/assets/game-DQ7TeBJx.pretty.js (statement-aligned).
var Re = `tokyo:p_arrival`,
  I = (e, t, n, r, i, a, o = !1) => ({
    id: `tokyo:${e}`,
    title: t,
    recap: n,
    date: { m: r[0], d: r[1] },
    hour: i,
    reward: a,
    built: o,
  }),
  ze = [
    {
      no: 0,
      title: P(`序章 從羽田出發`, `Prologue — From Haneda`, `序章 羽田から`),
      teaser: P(
        `表妹小晴的訊息停了三天。你只有一個地址。`,
        `Cousin Hsiao-Ching's messages stopped three days ago. All you have is an address.`,
        `従妹の小晴からの連絡が三日前に途絶えた。手がかりは住所ひとつ。`,
      ),
      missions: [
        I(
          `p_arrival`,
          P(`只有一個地址`, `Just an Address`, `住所ひとつ`),
          P(
            `你搭利木津巴士到了八重洲，小晴的電話打不通。你在便利商店儲值了交通卡，搭山手線到上野，照著電線桿上的藍色門牌找到燕來湯。妙子阿嬤說小晴已經三天沒回家，把空房間和一條毛巾給了你。`,
            `You came in on the Haneda limousine bus to Yaesu; Hsiao-Ching's phone went to voicemail. You topped up an IC card at a konbini, rode the Yamanote to Ueno and found 燕来湯 by the blue address plates. Tae said Hsiao-Ching hadn't been home for three days, and gave you the spare room and a towel.`,
            `リムジンバスで八重洲に着いた。小晴の電話はつながらない。コンビニでICカードにチャージし、山手線で上野へ。青い住居表示をたどって燕来湯にたどり着くと、タエさんは「小晴ちゃん、三日も帰ってないのよ」と言い、空き部屋とタオルをくれた。`,
          ),
          [4, 1],
          14,
          6e3,
          !0,
        ),
      ],
    },
    {
      no: 1,
      title: P(`第一章 上野`, `Chapter 1 — Ueno`, `第一章 上野`),
      teaser: P(
        `小晴在アメ横的巧克力攤打過工。從那裡問起。`,
        `Hsiao-Ching worked the chocolate stall at Ameyoko. Start there.`,
        `小晴はアメ横のチョコ屋で働いていた。そこから当たろう。`,
      ),
      call: {
        who: P(`妙子阿嬤`, `Tae`, `タエさん`),
        line: P(
          `（訊息）我跟志水的大將說了，明天十一點你會去攤位找他。今晚好好睡。——妙子`,
          `(text) I told Shimizu you'll come by his stall tomorrow at eleven. Sleep well tonight. — Tae`,
          `（メッセージ）志水の大将に、明日十一時にあなたが店に行くって伝えといたよ。今夜はゆっくり寝なさい。タエ`,
        ),
        where: P(
          `アメ横 志水商店`,
          `Shimizu's stall, Ameyoko`,
          `アメ横 志水商店`,
        ),
        delay: 12,
      },
      missions: [
        I(
          `s1_ameyoko`,
          P(`再來一包！`, `One More Bag!`, `もういっちょ！`),
          P(
            `志水的大將說小晴辭職去做「活動打工」。你幫他叫賣了一下午的巧克力；一個發ネオンリンク傳單的男人一聽到小晴的名字就跑，你在高架橋下抓住了他。`,
            `The auctioneer at Shimizu's said Hsiao-Ching quit for "an event job". You called his chocolate auction for an afternoon; a man handing out ネオンリンク flyers ran at her name, and you caught him under the tracks.`,
            `志水の大将によると、小晴は「イベントのバイト」のために辞めたという。午後いっぱい叩き売りを手伝ったあと、ネオンリンクのチラシを配っていた男が小晴の名前を聞いて逃げ出し、ガード下で捕まえた。`,
          ),
          [4, 2],
          11,
          9e3,
          !0,
        ),
        I(
          `s1_hanami`,
          P(`佔位子`, `Holding the Spot`, `場所取り`),
          P(
            `傳單把你帶到上野公園：十九歲的勇樹天沒亮就被派來替ネオンリンク佔賞花的位子。你陪他守住藍色塑膠布，聽見他在電話裡發抖。幫派的人認出你，在草地上打了一架；勇樹趁亂溜走——小晴的手機在他們手上。`,
            `The flyer led you to Ueno Park: Yuki, nineteen, sent at dawn to hold a hanami spot for ネオンリンク. You held the blue tarp with him and heard him shaking on the phone. The crew recognised you and it came to fists on the lawn; Yuki slipped away — and the crew has Hsiao-Ching's phone.`,
            `チラシをたどって上野公園へ。十九歳の勇樹が夜明けからネオンリンクの花見の場所取りをさせられていた。青いシートを一緒に守り、電話で震える彼の声を聞いた。半グレに顔を覚えられ芝生で殴り合いになり、勇樹はその隙に消えた。小晴の携帯は奴らが持っている。`,
          ),
          [4, 3],
          9.5,
          1e4,
          !0,
        ),
        I(
          `s1_shuden`,
          P(`終電`, `The Last Train`, `終電`),
          P(
            `勇樹要搭末班山手線。你穿過上野站的迷宮，在車門關上前跳進車廂，在安靜的車廂裡一句一句勸他。他說了母親和身分證照片的事；到了新橋他還是逃進夜色。源さん的計程車停在你面前：「妙子打給我的。上車。」`,
            `Yuki was heading for the last Yamanote train. You crossed Ueno station's maze before the doors closed and talked him down, quietly, in a quiet carriage. He told you about his mother and his ID photo; at Shimbashi he still bolted into the night. Gen-san's cab pulled up: "Tae called me. Get in."`,
            `勇樹は終電の山手線に向かった。上野駅の迷路を抜けてドアが閉まる前に乗り込み、静かな車内で彼を説得した。母親のこと、身分証の写真のことを打ち明けたが、新橋で彼は夜の街へ逃げた。源さんのタクシーが止まる。「タエさんから電話があった。乗りな」`,
          ),
          [4, 4],
          0.1,
          12e3,
          !0,
        ),
      ],
    },
    {
      no: 2,
      title: P(`第二章 秋葉原`, `Chapter 2 — Akihabara`, `第二章 秋葉原`),
      teaser: P(
        `小晴的手機訊號還在秋葉原附近出現。`,
        `Hsiao-Ching's phone still pings near Akihabara.`,
        `小晴の携帯の電波が、まだ秋葉原の近くで拾える。`,
      ),
      call: {
        who: P(`源さん`, `Gen-san`, `源さん`),
        line: P(
          `（電話）我是源田。小晴的手機還會在秋葉原附近出現訊號。我認識一個能做追蹤器的女孩，在中央通的女僕咖啡廳。`,
          `(phone) Genda here. Hsiao-Ching's phone still pings around Akihabara. I know a girl who can build a tracker — she works at a maid café on Chuo-dori.`,
          `（電話）源田だ。小晴ちゃんの携帯、まだ秋葉原あたりで電波を拾える。追跡機を作れる子を知ってる。中央通りのメイド喫茶で働いてる子だ。`,
        ),
        where: P(
          `秋葉原電子中心`,
          `Akihabara Denshi Center`,
          `秋葉原デンシセンター`,
        ),
        delay: 10,
      },
      missions: [
        I(
          `s2_parts`,
          P(`電器街的零件`, `Parts of Electric Town`, `電気街のパーツ`),
          P(
            `你在攤位打烊前湊齊了零件，ミコ做出了追蹤器。`,
            `You found every part before the stalls closed, and Miko built the tracker.`,
            `閉店前にパーツをそろえ、ミコが追跡機を組み上げた。`,
          ),
          [4, 4],
          16.5,
          14e3,
          !0,
        ),
        I(
          `s2_stream`,
          P(`直播中`, `Live Now`, `配信中`),
          P(
            `ミコ直播著，你在步行者天國的人群裡揪出帶著小晴手機的跑腿，在後街撲倒他，解開他的暗號：ネオンリンク的辦公室在卡拉OK大樓八樓。`,
            `With Miko streaming, you picked the runner carrying Hsiao-Ching's phone out of the pedestrian-zone crowd, tackled him in the back streets and decoded his drop: ネオンリンク's office, the 8th floor of a karaoke building.`,
            `ミコの配信を背に、歩行者天国の人混みから小晴の携帯を持つ運び屋を見つけ出し、裏通りで取り押さえ、暗号を解いた。ネオンリンクの事務所はカラオケビルの8階。`,
          ),
          [4, 11],
          13.5,
          16e3,
          !0,
        ),
        I(
          `s2_karaoke`,
          P(`拿手歌`, `The Signature Song`, `十八番`),
          P(
            `你在隔壁包廂唱歌掩護，竊聽到神城的「大案子」：銀座，星期六。被發現後，你跳上轟的卡丁車隊逃走。`,
            `Singing in the next booth as cover, you bugged Kamishiro's meeting: "the big job, Ginza, Saturday". Found out, you escaped in Todoroki's kart tour.`,
            `隣の部屋で歌ってごまかしながら、神城の「大仕事」を盗聴した。銀座、土曜日。見つかって、轟のカートツアーにまぎれて逃げた。`,
          ),
          [4, 11],
          21,
          18e3,
          !0,
        ),
      ],
    },
    {
      no: 3,
      title: P(
        `第三章 公道卡丁車`,
        `Chapter 3 — Street Karts`,
        `第三章 公道カート`,
      ),
      teaser: P(
        `轟認得神城的車。`,
        `Todoroki knows Kamishiro's car.`,
        `轟は神城の車を知っている。`,
      ),
      call: {
        who: P(`轟`, `Todoroki`, `轟`),
        line: P(
          `（電話）我是轟。神城的司機每週二在東京車站前收錢。跟我的觀光卡丁車隊一起去，別脫隊。`,
          `(phone) Todoroki. Kamishiro's driver collects in front of Tokyo Station every Tuesday. Come with my kart tour, and stay in line.`,
          `（電話）轟だ。神城の運転手は毎週火曜、東京駅前で金を受け取る。うちのカートツアーで来い。列は乱すなよ。`,
        ),
        where: P(`丸之內`, `Marunouchi`, `丸の内`),
        delay: 10,
      },
      missions: [
        I(
          `s3_tour`,
          P(`觀光卡丁車`, `The Kart Tour`, `カートツアー`),
          P(
            `你跟著轟封路飆過半個東京，在東京車站前拍到了神城的司機交錢。`,
            `You kept up with Todoroki across half of Tokyo on closed streets, and photographed Kamishiro's driver handing over the envelope in front of Tokyo Station.`,
            `轟について通行止めの東京を半周駆け抜け、東京駅前で神城の運転手の受け渡しを撮った。`,
          ),
          [4, 13],
          15,
          16e3,
          !0,
        ),
        I(
          `s3_race`,
          P(`深夜公道大獎賽`, `Midnight Grand Prix`, `深夜の公道グランプリ`),
          P(
            `你在高速公路下贏了辰，他的手機透露了被關的打工者在哪裡。`,
            `You beat Tatsu under the expressway, and his phone showed where the recruits are kept.`,
            `首都高の下で辰に勝ち、奴の携帯から闇バイトの子たちの居場所がわかった。`,
          ),
          [4, 15],
          23.5,
          24e3,
          !0,
        ),
        I(
          `s3_hokoten`,
          P(`步行者天國`, `Pedestrian Paradise`, `歩行者天国`),
          P(
            `銀座步行者天國的搶案沒有成功，也沒有人受傷。可是神城記住了你的臉。`,
            `The robbery on Ginza's pedestrian paradise failed and no one was hurt. But Kamishiro knows your face now.`,
            `銀座の歩行者天国の強盗は失敗し、誰もけがをしなかった。だが神城に顔を覚えられた。`,
          ),
          [4, 17],
          16.5,
          26e3,
          !0,
        ),
      ],
    },
    {
      no: 4,
      title: P(`第四章 被追捕`, `Chapter 4 — Hunted`, `第四章 追われて`),
      teaser: P(
        `燕來湯被盯上了。今晚睡膠囊旅館。`,
        `Tae's sento is being watched. Tonight you sleep in a capsule.`,
        `燕来湯が見張られている。今夜はカプセルホテルだ。`,
      ),
      call: {
        who: P(`源さん`, `Gen-san`, `源さん`),
        line: P(
          `（電話）燕來湯外面有車在盯。今晚別回去，神田站旁邊有膠囊旅館。`,
          `(phone) There's a car watching the sento. Don't go back tonight — there's a capsule hotel by Kanda station.`,
          `（電話）燕来湯の前に車が張り付いてる。今夜は帰るな。神田駅のそばにカプセルホテルがある。`,
        ),
        where: P(
          `神田 膠囊旅館`,
          `Capsule hotel, Kanda`,
          `神田 カプセルホテル`,
        ),
        delay: 12,
      },
      missions: [
        I(
          `s4_capsule`,
          P(`膠囊旅館`, `The Capsule Hotel`, `カプセルホテル`),
          P(
            `凌晨三點，幫派一層一層搜。你從膠囊之間溜出去，巷子裡等著的是鬼頭組的黑田。`,
            `At 3:00 the crew searched floor by floor. You slipped out between the capsules; in the lane, Kuroda of the Kito family was waiting.`,
            `午前三時、半グレが一階ずつ探しに来た。カプセルの間をすり抜けると、路地で鬼頭組の黒田が待っていた。`,
          ),
          [4, 18],
          3,
          18e3,
          !0,
        ),
        I(
          `s4_jingi`,
          P(`仁義`, `Jingi`, `仁義`),
          P(
            `你在御徒町的喫茶店和鬼頭老大打了花札。他給了你客服中心的平面圖，條件是你不為組裡做任何事。`,
            `You played hanafuda with old Kito in an Okachimachi kissa. He gave you the call centre's floor plan — on condition that you do nothing for the family.`,
            `御徒町の喫茶店で鬼頭の親分と花札を打った。コールセンターの見取り図をくれたが、条件は組のために何もしないことだった。`,
          ),
          [4, 18],
          8.5,
          16e3,
          !0,
        ),
        I(
          `s4_tsukiji`,
          P(`築地的早晨`, `Morning at Tsukiji`, `築地の朝`),
          P(
            `你騎著借來的菜籃車，在剛開市的築地場外跟住廂型車，救出了小晴。她帶著詐騙集團的長者名單。`,
            `On a borrowed shopping bike you followed the van through Tsukiji's waking market and freed Hsiao-Ching. She had the scam ring's list of elderly targets.`,
            `借りたママチャリで、開いたばかりの築地場外でバンを追い、小晴を助け出した。彼女は詐欺グループの高齢者リストを持っていた。`,
          ),
          [4, 19],
          5,
          22e3,
          !0,
        ),
        I(
          `s4_shimbashi`,
          P(`SL 廣場`, `SL Square`, `SL広場`),
          P(
            `你照著平面圖上了ニュー烏森ビル，救出打工者、拿走手機和伺服器。神城從後門往車站走了。`,
            `With the floor plan you went up through the ニュー烏森ビル, freed the recruits and took the phones and the server. Kamishiro walked out the back towards the station.`,
            `見取り図を手にニュー烏森ビルを上り、闇バイトの子たちを解放し、携帯とサーバーを押さえた。神城は裏口から駅へ向かった。`,
          ),
          [4, 19],
          20,
          28e3,
          !0,
        ),
      ],
    },
    {
      no: 5,
      title: P(
        `第五章 山手線`,
        `Chapter 5 — The Yamanote Line`,
        `第五章 山手線`,
      ),
      teaser: P(
        `神城要搭山手線去上野，轉 Skyliner 去成田。`,
        `Kamishiro is taking the Yamanote to Ueno and the Skyliner to Narita.`,
        `神城は山手線で上野へ、スカイライナーで成田へ向かう。`,
      ),
      call: {
        who: P(`桐島警部補`, `Inspector Kirishima`, `桐島警部補`),
        line: P(
          `（電話）桐島です。神城往新橋站走了。我們在上野等他，可是在那之前別讓他離開你的視線。`,
          `(phone) Kirishima. Kamishiro is heading into Shimbashi station. We'll wait for him at Ueno — until then, don't let him out of your sight.`,
          `（電話）桐島です。神城は新橋駅に入った。上野で待ち構えるが、それまで目を離さないでください。`,
        ),
        where: P(`新橋站`, `Shimbashi Station`, `新橋駅`),
        delay: 6,
      },
      missions: [
        I(
          `s5_cab`,
          P(`駕駛座`, `In the Cab`, `運転台`),
          P(
            `司機三浦倒下了，你在他的指導下把山手線開進了上野，每一站都停在停止位置上。`,
            `Driver Miura collapsed; coached from the floor, you drove the Yamanote into Ueno, stopping on the mark at every station.`,
            `三浦運転士が倒れ、床からの指導で山手線を上野まで運転した。どの駅でも停止位置にぴったり止めた。`,
          ),
          [4, 19],
          22.5,
          3e4,
          !0,
        ),
        I(
          `s5_shinobazu`,
          P(`不忍池`, `Shinobazu Pond`, `不忍池`),
          P(
            `神城搶了一艘天鵝船。你踩著另一艘追過不忍池，十七點的〈晚霞漸淡〉響起時，桐島在對岸銬上了他。`,
            `Kamishiro took a swan boat. You pedalled after him across Shinobazu Pond, and as the 17:00 chime played, Kirishima cuffed him on the far shore.`,
            `神城はスワンボートを奪った。もう一艘で不忍池を追い、十七時の「夕焼け小焼け」が流れる中、桐島が対岸で手錠をかけた。`,
          ),
          [4, 20],
          16.5,
          48e3,
          !0,
        ),
      ],
    },
    {
      no: 6,
      title: P(
        `尾聲 泡完澡之後`,
        `Epilogue — After the Bath`,
        `終章 銭湯のあとで`,
      ),
      teaser: P(
        `一週後，燕來湯。`,
        `A week later, at 燕来湯.`,
        `一週間後、燕来湯で。`,
      ),
      call: {
        who: P(`妙子阿嬤`, `Tae`, `タエさん`),
        line: P(
          `（電話）星期二下午四點半，大家都來燕來湯。咖啡牛奶我請客！`,
          `(phone) Tuesday, half past four — everyone's coming to the sento. The coffee milk's on me!`,
          `（電話）火曜の四時半、みんな燕来湯に集まるからね。コーヒー牛乳はおごりよ！`,
        ),
        where: P(`燕來湯`, `燕来湯 (the sento)`, `燕来湯`),
        delay: 30,
      },
      missions: [
        I(
          `epilogue`,
          P(`泡完澡之後`, `After the Bath`, `湯上がり`),
          P(
            `咖啡牛奶、十七點的鐘聲，還有八重洲巴士站的一只行李箱。小晴跟你回家了。`,
            `Coffee milk, the 17:00 chime, and a suitcase at the Yaesu bus stop. Hsiao-Ching came home with you.`,
            `コーヒー牛乳、十七時のチャイム、八重洲のバス停にスーツケースひとつ。小晴は一緒に帰ってきた。`,
          ),
          [4, 27],
          16.5,
          12e3,
          !0,
        ),
      ],
    },
  ],
  Be = ze.flatMap((e) => e.missions),
  Ve = new Map(
    Be.map((e, t) => [
      e.id,
      { mission: e, chapter: ze.find((t) => t.missions.includes(e)), index: t },
    ]),
  );
