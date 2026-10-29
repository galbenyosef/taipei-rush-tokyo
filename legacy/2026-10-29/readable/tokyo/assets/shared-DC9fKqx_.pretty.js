import { t as e } from "./ja-DY7SMsVw.js";
import {
  An as t,
  Dn as n,
  Gn as r,
  Wn as i,
  Zn as a,
  _r as o,
  dr as s,
} from "./engine-wUBYs8Z3.js";
import {
  c,
  d as l,
  f as u,
  g as d,
  n as f,
  r as p,
} from "./cities-8-O8IWPJ.js";
var m = (e, t) => ({ zh: e, en: t }),
  h = (e) => ({ kind: `heal`, hp: e }),
  g = (e, t, n, r, i, a, o = 20, s = `taipei`) => ({
    id: t,
    shelf: `use`,
    cat: e,
    name: n,
    blurb: r,
    hint: i,
    effect: a,
    max: o,
    city: s,
  }),
  _ = (e, t, n, r, i, a = `taipei`) => ({
    id: t,
    shelf: `keep`,
    cat: e,
    name: n,
    blurb: r,
    hint: i,
    max: 9,
    city: a,
  }),
  v = (t, n) =>
    m(
      e.on ? e.t(`${t}夜市`, `${e.jz(t)}夜市`) : `${t}夜市`,
      `${n} Night Market`,
    ),
  y = m(`夾娃娃機店`, `Claw-machine arcades`),
  b = [
    g(
      `food`,
      `tea-egg`,
      m(`茶葉蛋`, `Tea egg`),
      m(
        `超商門口那鍋，滷了三天三夜。`,
        `From the pot by the convenience-store door, simmered for days.`,
      ),
      m(`超商櫃檯`, `Convenience-store counter`),
      h(25),
    ),
    g(
      `food`,
      `chicken-cutlet`,
      m(`炸雞排`, `Fried chicken cutlet`),
      m(`比臉還大，不切要辣。`, `Bigger than your face. Uncut, extra spicy.`),
      v(`士林`, `Shilin`),
      h(50),
    ),
    g(
      `food`,
      `salt-crispy-chicken`,
      m(`鹹酥雞`, `Salty crispy chicken`),
      m(
        `九層塔一定要炸，胡椒粉灑好灑滿。`,
        `Fry the basil too. Pepper powder, lots of it.`,
      ),
      v(`士林`, `Shilin`),
      h(40),
    ),
    g(
      `food`,
      `oyster-omelet`,
      m(`蚵仔煎`, `Oyster omelette`),
      m(
        `紅色甜辣醬淋滿，地瓜粉煎到 QQ 的。`,
        `Smothered in sweet-chili sauce, chewy with sweet-potato starch.`,
      ),
      v(`寧夏`, `Ningxia`),
      h(45),
    ),
    g(
      `food`,
      `stinky-tofu`,
      m(`臭豆腐`, `Stinky tofu`),
      m(
        `聞起來臭，吃起來香，泡菜要多夾。`,
        `Smells awful, tastes great. Extra pickled cabbage.`,
      ),
      m(`公館`, `Gongguan`),
      h(35),
    ),
    g(
      `food`,
      `big-sausage`,
      m(`大腸包小腸`, `Sausage in a rice sausage`),
      m(
        `糯米腸夾香腸，台式熱狗堡。`,
        `A sausage tucked in a sticky-rice sausage: the Taiwanese hot dog.`,
      ),
      v(`寧夏`, `Ningxia`),
      h(45),
    ),
    g(
      `food`,
      `pepper-bun`,
      m(`胡椒餅`, `Pepper bun`),
      m(
        `炭爐現烤，第一口小心湯汁噴出來。`,
        `Baked on the clay oven wall. Mind the hot juice on the first bite.`,
      ),
      v(`饒河`, `Raohe`),
      h(35),
    ),
    g(
      `food`,
      `gua-bao`,
      m(`刈包`, `Gua bao`),
      m(
        `台式漢堡：滷肉、酸菜、花生粉、香菜。`,
        `The Taiwanese burger: braised pork, pickles, peanut powder, coriander.`,
      ),
      m(`公館`, `Gongguan`),
      h(35),
    ),
    g(
      `food`,
      `braised-pork-rice`,
      m(`滷肉飯`, `Braised pork rice`),
      m(
        `一碗銅板價，再加一顆滷蛋。`,
        `Pocket-change price. Add a braised egg.`,
      ),
      v(`華西街`, `Huaxi Street`),
      h(50),
    ),
    g(
      `food`,
      `beef-noodles`,
      m(`牛肉麵`, `Beef noodle soup`),
      m(
        `紅燒還是清燉？酸菜自己加。`,
        `Braised or clear broth? Help yourself to the pickles.`,
      ),
      m(`永康街`, `Yongkang Street`),
      h(70),
    ),
    g(
      `food`,
      `xiaolongbao`,
      m(`小籠包`, `Soup dumplings`),
      m(
        `十八摺，先咬一小口喝湯。`,
        `Eighteen folds. Nibble a hole, sip the soup first.`,
      ),
      m(`永康街`, `Yongkang Street`),
      h(40),
    ),
    g(
      `food`,
      `scallion-pancake`,
      m(`蔥抓餅`, `Scallion pancake`),
      m(`加蛋加起司，抓鬆了才好吃。`, `Add egg and cheese. Scrunch it fluffy.`),
      m(`早餐店`, `Breakfast shops`),
      h(30),
    ),
    g(
      `food`,
      `rice-roll`,
      m(`飯糰`, `Rice roll`),
      m(
        `紫米包油條、肉鬆、菜脯，一顆吃到中午。`,
        `Purple rice round a fried dough stick: lasts you till lunch.`,
      ),
      m(`早餐店`, `Breakfast shops`),
      h(40),
    ),
    g(
      `food`,
      `oden`,
      m(`關東煮`, `Oden`),
      m(
        `超商冬天最熱賣，甜不辣一定要拿。`,
        `The convenience store winter favourite. Get the tempura.`,
      ),
      m(`超商櫃檯`, `Convenience-store counter`),
      h(45),
    ),
    g(
      `food`,
      `ba-wan`,
      m(`肉圓`, `Ba-wan`),
      m(
        `Q 彈外皮包肉餡，淋上甜辣醬。`,
        `Chewy translucent skin round pork, sweet sauce on top.`,
      ),
      v(`華西街`, `Huaxi Street`),
      h(40),
    ),
    g(
      `food`,
      `pig-blood-cake`,
      m(`豬血糕`, `Pig blood cake`),
      m(
        `沾醬油膏，滾花生粉，撒香菜。`,
        `Dipped in soy paste, rolled in peanut powder, coriander on top.`,
      ),
      v(`寧夏`, `Ningxia`),
      h(30),
    ),
    g(
      `food`,
      `sweet-potato-balls`,
      m(`地瓜球`, `Sweet potato balls`),
      m(
        `QQ 球，壓扁了會再膨起來。`,
        `Chewy balls that puff right back up when squeezed.`,
      ),
      v(`饒河`, `Raohe`),
      h(20),
    ),
    g(
      `food`,
      `wheel-cake`,
      m(`車輪餅`, `Wheel cake`),
      m(
        `紅豆派還是奶油派？吵了幾十年。`,
        `Red bean or custard? The debate never ends.`,
      ),
      v(`師大`, `Shida`),
      h(20),
    ),
    g(
      `food`,
      `tanghulu`,
      m(`糖葫蘆`, `Candied strawberry skewer`),
      m(
        `糖衣咬下去喀一聲，黏到牙齒也甘願。`,
        `The sugar shell cracks on the first bite. Worth the sticky teeth.`,
      ),
      v(`樂華`, `Lehua`),
      h(20),
    ),
    g(
      `food`,
      `takoyaki`,
      m(`章魚燒`, `Takoyaki`),
      m(
        `一盒六顆，柴魚片在上面跳舞，第一顆會燙嘴。`,
        `Six to a boat, bonito flakes dancing on top. The first one burns.`,
      ),
      v(`師大`, `Shida`),
      h(35),
    ),
    g(
      `food`,
      `egg-cake`,
      m(`雞蛋糕`, `Egg cakes`),
      m(
        `小熊小花一袋裝，邊走邊吃，最後一顆都碎了。`,
        `Little bears and flowers in a paper bag. The last one is always crumbs.`,
      ),
      v(`寧夏`, `Ningxia`),
      h(25),
    ),
    g(
      `food`,
      `mango-ice`,
      m(`芒果冰`, `Mango shaved ice`),
      m(`夏天限定，煉乳淋好淋滿。`, `Summer only. Condensed milk, generously.`),
      m(`永康街`, `Yongkang Street`),
      h(30),
    ),
    g(
      `food`,
      `douhua`,
      m(`豆花`, `Douhua`),
      m(
        `花生、粉圓、薑汁，冷熱都好吃。`,
        `Peanuts, tapioca, ginger syrup. Hot or cold.`,
      ),
      v(`饒河`, `Raohe`),
      h(25),
    ),
    g(
      `food`,
      `railway-bento`,
      m(`台鐵便當`, `Railway bento`),
      m(
        `排骨、滷蛋、一片黃蘿蔔，火車上的味道。`,
        `Pork chop, braised egg, a slice of yellow radish: the taste of a train ride.`,
      ),
      m(`臺北車站`, `Taipei Main Station`),
      h(60),
    ),
    g(
      `food`,
      `grilled-sausage`,
      m(`烤香腸`, `Grilled sausage`),
      m(
        `配一瓣生蒜，賭一把十八啦。`,
        `With a raw garlic clove. Roll the dice for another.`,
      ),
      v(`饒河`, `Raohe`),
      h(25),
    ),
    g(
      `food`,
      `egg-crepe`,
      m(`蛋餅`, `Egg crepe`),
      m(
        `早餐店必點，醬油膏還是辣椒醬？`,
        `Breakfast-shop classic. Soy paste or chili?`,
      ),
      m(`早餐店`, `Breakfast shops`),
      h(30),
    ),
    g(
      `food`,
      `philosophy-noodles`,
      m(`哲學麵`, `Philosophy Noodles`),
      m(
        `捏碎、撒粉、搖一搖，直接乾吃。`,
        `Crush it, add the powder, shake, eat it dry.`,
      ),
      m(`超商櫃檯`, `Convenience-store counter`),
      h(10),
    ),
    g(
      `drink`,
      `bubble-tea`,
      m(`珍珠奶茶`, `Bubble milk tea`),
      m(`半糖少冰，珍珠要大顆。`, `Half sugar, less ice, big pearls.`),
      m(`手搖飲店`, `Tea shops`),
      h(15),
    ),
    g(
      `drink`,
      `energy-drink`,
      m(`提神飲料`, `Energy tonic`),
      m(
        `工地與夜班的能量來源，喝了跑更快。`,
        `What keeps building sites and night shifts going. Run faster.`,
      ),
      m(`檳榔攤`, `Betel-nut stands`),
      { kind: `sprint`, sec: 60 },
    ),
    g(
      `drink`,
      `black-tea`,
      m(`大冰紅`, `Big iced black tea`),
      m(
        `早餐店的大杯冰紅茶，甜到發光。`,
        `The breakfast shop’s big iced black tea. Glowing sweet.`,
      ),
      m(`早餐店`, `Breakfast shops`),
      h(15),
    ),
    g(
      `drink`,
      `papaya-milk`,
      m(`木瓜牛奶`, `Papaya milk`),
      m(
        `現打一杯，夜市的甜蜜收尾。`,
        `Blended to order: the sweet end of a night-market walk.`,
      ),
      v(`寧夏`, `Ningxia`),
      h(20),
    ),
    g(
      `drink`,
      `soy-milk`,
      m(`豆漿`, `Soy milk`),
      m(
        `永和來的，甜的鹹的都有。`,
        `From Yonghe. Sweet, or the salty curdled kind.`,
      ),
      m(`永和`, `Yonghe`),
      h(15),
    ),
    g(
      `drink`,
      `winter-melon-tea`,
      m(`冬瓜茶`, `Winter-melon tea`),
      m(`古早味，甜到心坎裡。`, `Old-school and very, very sweet.`),
      v(`師大`, `Shida`),
      h(15),
    ),
    g(
      `drink`,
      `herbal-tea`,
      m(`青草茶`, `Herbal tea`),
      m(`阿嬤說喝了會退火。`, `Grandma says it cools your inner heat.`),
      m(`萬華青草巷`, `Herb Lane, Wanhua`),
      h(15),
    ),
    g(
      `drink`,
      `store-coffee`,
      m(`超商咖啡`, `Convenience-store coffee`),
      m(`第二杯半價，衝刺 90 秒。`, `Second cup half price. Sprint for 90 s.`),
      m(`超商櫃檯`, `Convenience-store counter`),
      { kind: `sprint`, sec: 90 },
    ),
    g(
      `drink`,
      `marble-soda`,
      m(`彈珠汽水`, `Marble soda`),
      m(`彈珠永遠卡在瓶口。`, `The marble always blocks the neck.`),
      m(`超商櫃檯`, `Convenience-store counter`),
      h(10),
    ),
    g(
      `food`,
      `a-gei`,
      m(`淡水阿給`, `Tamsui a-gei`),
      m(
        `油豆腐塞冬粉，淋上紅醬。`,
        `Fried tofu stuffed with glass noodles, red sauce on top.`,
      ),
      m(`淡水老街`, `Tamsui Old Street`),
      h(35),
    ),
    g(
      `food`,
      `iron-egg`,
      m(`鐵蛋`, `Iron egg`),
      m(
        `滷了又風乾，越嚼越香。`,
        `Braised and dried until chewy. Gets better with every bite.`,
      ),
      m(`淡水老街`, `Tamsui Old Street`),
      h(20),
    ),
    g(
      `food`,
      `hot-spring-egg`,
      m(`溫泉蛋`, `Hot-spring egg`),
      m(
        `北投地熱煮的，蛋白半熟滑滑的。`,
        `Cooked in Beitou’s hot water. Silky, half-set white.`,
      ),
      m(`北投溫泉`, `Beitou hot springs`),
      h(20),
    ),
    g(
      `temple`,
      `mazu-amulet`,
      m(`平安符`, `Temple amulet`),
      m(
        `廟裡求來的，阿嬤說戴著就平安。`,
        `From the temple. Grandma says wear it and you will be safe.`,
      ),
      m(`行天宮`, `Xingtian Temple`),
      { kind: `armor`, amount: 50 },
      5,
    ),
    _(
      `temple`,
      `moon-blocks`,
      m(`筊杯`, `Moon blocks`),
      m(`一正一反是聖筊，神明說可以。`, `One up, one down: the gods say yes.`),
      m(`龍山寺`, `Longshan Temple`),
    ),
    _(
      `temple`,
      `red-thread`,
      m(`月老紅線`, `Matchmaker’s red thread`),
      m(
        `城隍廟的月老很靈，單身的快去求。`,
        `The Old Man under the Moon at the City God temple works. Singles, go.`,
      ),
      m(`霞海城隍廟`, `Xiahai City God Temple`),
    ),
    g(
      `temple`,
      `fortune-slip`,
      m(`籤詩`, `Fortune slip`),
      m(
        `擲出聖筊才能抽，上上籤要好好收著。`,
        `Draw it after a yes from the moon blocks. Keep the best ones.`,
      ),
      m(`拜拜時求`, `Pray at a shrine`),
      { kind: `fortune` },
      9,
    ),
    _(
      `temple`,
      `joss-paper`,
      m(`金紙`, `Joss paper`),
      m(
        `初一十五，燒給好兄弟。`,
        `Burned on the 1st and 15th for the wandering spirits.`,
      ),
      m(`拜拜時拿`, `Pray at a shrine`),
    ),
    _(
      `temple`,
      `incense`,
      m(`一把香`, `Incense sticks`),
      m(`三炷香，先拜天公。`, `Three sticks. The Jade Emperor first.`),
      m(`拜拜時拿`, `Pray at a shrine`),
    ),
    _(
      `temple`,
      `firecracker`,
      m(`鞭炮`, `Firecrackers`),
      m(
        `神明出巡，鞭炮放到看不見路。`,
        `When the gods parade, the smoke hides the street.`,
      ),
      m(`士林慈諴宮`, `Cixian Temple, Shilin`),
    ),
    g(
      `temple`,
      `red-envelope`,
      m(`紅包`, `Red envelope`),
      m(
        `過年長輩給的，媽媽說幫你存起來。`,
        `From your elders at New Year. Mom says she will keep it safe for you.`,
      ),
      m(`任務獎勵`, `Mission rewards`),
      { kind: `money`, min: 200, max: 1200 },
      20,
      `both`,
    ),
    _(
      `temple`,
      `pilgrimage-towel`,
      m(`遶境毛巾`, `Pilgrimage towel`),
      m(
        `跟著媽祖走，毛巾掛脖子，一路有人請吃。`,
        `Walk with Mazu, towel round your neck: people feed you all the way.`,
      ),
      m(`松山慈祐宮`, `Songshan Ciyou Temple`),
    ),
    _(
      `temple`,
      `offering-tower`,
      m(`乖寶塔`, `Snack offering tower`),
      m(
        `中元普渡的零食塔，綠色的要放最上面。`,
        `The Ghost Month snack tower. Green bags go on top.`,
      ),
      m(`三重先嗇宮`, `Xianse Temple, Sanchong`),
    ),
    _(
      `life`,
      `blue-white-slippers`,
      m(`藍白拖`, `Blue-and-white slippers`),
      m(
        `國民拖鞋，也是媽媽手中的神兵利器。`,
        `The national slipper — and mom's weapon of choice.`,
      ),
      m(`萬華青草巷`, `Herb Lane, Wanhua`),
    ),
    _(
      `life`,
      `red-white-bag`,
      m(`紅白塑膠袋`, `Red-and-white plastic bag`),
      m(
        `台灣國袋，什麼都裝得下。`,
        `Taiwan's national bag. It holds everything.`,
      ),
      v(`寧夏`, `Ningxia`),
    ),
    _(
      `life`,
      `rice-cooker`,
      m(`大桶電鍋`, `Datong-style rice cooker`),
      m(
        `外鍋一杯水，什麼都能蒸。用了三十年還沒壞。`,
        `One cup of water outside, steams anything. Thirty years and still going.`,
      ),
      m(`大稻埕迪化街`, `Dihua Street, Dadaocheng`),
    ),
    _(
      `life`,
      `plastic-stool`,
      m(`紅色塑膠椅`, `Red plastic stool`),
      m(
        `辦桌、熱炒、廟口，哪裡都有它。`,
        `Banquets, stir-fry joints, temple squares — it is everywhere.`,
      ),
      v(`華西街`, `Huaxi Street`),
    ),
    _(
      `life`,
      `trash-bag`,
      m(`專用垃圾袋`, `City garbage bag`),
      m(
        `聽到《少女的祈禱》，提著它衝出門。`,
        `Hear 'A Maiden's Prayer'? Grab it and run outside.`,
      ),
      m(`永康街巷子`, `A Yongkang Street lane`),
    ),
    _(
      `life`,
      `tissue-pack`,
      m(`選舉面紙`, `Campaign tissue pack`),
      m(
        `候選人送的面紙，選完還能用很久。`,
        `A candidate handed it out. Lasts long after the election.`,
      ),
      m(`忠孝復興站出口`, `Zhongxiao Fuxing station exit`),
    ),
    g(
      `life`,
      `green-guai`,
      m(`綠色乖寶`, `Green Guai-Bao snack`),
      m(
        `工程師的守護神：機器旁放一包就不會當機。一定要綠色的。`,
        `The engineers' charm: a bag next to the machine and it never crashes. Green only.`,
      ),
      m(`超商櫃檯`, `Convenience-store counter`),
      { kind: `repair` },
      9,
    ),
    g(
      `life`,
      `receipt`,
      m(`統一發票`, `Uniform invoice`),
      m(
        `單數月 25 號，全台灣一起對發票。`,
        `Every odd month on the 25th, all of Taiwan checks its receipts.`,
      ),
      m(`在超商買東西`, `Any convenience-store purchase`),
      { kind: `draw` },
      99,
    ),
    g(
      `life`,
      `green-oil`,
      m(`綠由精`, `Green Medicated Oil`),
      m(
        `蚊子咬、頭痛、鼻塞，什麼都擦一點。`,
        `Mosquito bites, headaches, a stuffy nose: dab a little on everything.`,
      ),
      m(`藥局`, `Pharmacies`),
      h(10),
    ),
    g(
      `life`,
      `salonpas`,
      m(`撒龍巴斯`, `Pain-relief patch`),
      m(
        `阿公阿嬤的愛用貼布，貼了就不痠。`,
        `Grandpa’s favourite patch. Stick it on, the ache goes.`,
      ),
      m(`藥局`, `Pharmacies`),
      h(20),
    ),
    _(
      `life`,
      `toilet-paper`,
      m(`一串衛生紙`, `A pack of toilet paper`),
      m(
        `聽說要漲價，先囤一串才安心。`,
        `Heard the price is going up? Stock up, just in case.`,
      ),
      m(`超商櫃檯`, `Convenience-store counter`),
    ),
    _(
      `life`,
      `face-mask`,
      m(`口罩`, `Face mask`),
      m(`出門記得戴好戴滿。`, `Wear it properly when you go out.`),
      m(`藥局`, `Pharmacies`),
    ),
    _(
      `life`,
      `rain-poncho`,
      m(`機車雨衣`, `Scooter rain poncho`),
      m(
        `一件式還是兩件式？午後雷陣雨說來就來。`,
        `One-piece or two-piece? The afternoon storm is coming either way.`,
      ),
      m(`公館`, `Gongguan`),
    ),
    _(
      `life`,
      `thermos`,
      m(`熱水瓶`, `Hot-water dispenser`),
      m(
        `阿嬤家的熱水瓶，永遠插著電。`,
        `At grandma’s it is always plugged in.`,
      ),
      m(`剝皮寮老街`, `Bopiliao Old Street`),
    ),
    _(
      `life`,
      `hakka-cloth`,
      m(`客家花布`, `Hakka floral cloth`),
      m(
        `大紅大綠，阿嬤的被單、媽媽的圍裙。`,
        `Big red and green flowers: grandma’s quilt, mom’s apron.`,
      ),
      m(`迪化街永樂市場`, `Yongle Market, Dihua Street`),
    ),
    _(
      `life`,
      `rattan-cane`,
      m(`藤條`, `Rattan cane`),
      m(
        `掛在牆上的家法，看到就乖了。`,
        `The family rule, hanging on the wall. One look is enough.`,
      ),
      m(`板橋市民廣場`, `Banqiao Civic Plaza`),
    ),
    _(
      `life`,
      `feather-duster`,
      m(`雞毛撢子`, `Feather duster`),
      m(`不是拿來撢灰塵的。`, `Not for dusting.`),
      m(`永和`, `Yonghe`),
    ),
    _(
      `life`,
      `wedding-invite`,
      m(`紅色炸彈`, `Wedding invitation`),
      m(
        `又一張喜帖，紅包要包多少？`,
        `Another wedding invitation. How much goes in the red envelope?`,
      ),
      m(`任務獎勵`, `Mission rewards`),
      `both`,
    ),
    _(
      `life`,
      `queue-ticket`,
      m(`排隊號碼牌`, `Queue number`),
      m(`看到人在排隊，先排再說。`, `See a queue? Join it, find out later.`),
      m(`任務獎勵`, `Mission rewards`),
      `both`,
    ),
    _(
      `life`,
      `parking-ticket`,
      m(`停車繳費單`, `Parking slip`),
      m(`雨刷上夾著的那一張。`, `The slip under your wiper.`),
      m(`任務獎勵`, `Mission rewards`),
      `both`,
    ),
    _(
      `street`,
      `yoyo-card`,
      m(`悠悠卡`, `YoYo Card`),
      m(
        `嗶一聲就上車，沒錢了就嗶不過。`,
        `Beep and board. Unless it is empty.`,
      ),
      m(`臺北車站`, `Taipei Main Station`),
    ),
    _(
      `street`,
      `helmet`,
      m(`安全帽`, `Scooter helmet`),
      m(
        `機車大軍標配，夏天悶到懷疑人生。`,
        `Standard kit of the scooter army. Unbearable in summer.`,
      ),
      m(`師大龍泉街`, `Longquan Street, Shida`),
    ),
    _(
      `street`,
      `mrt-token`,
      m(`捷運單程票`, `MRT token`),
      m(
        `藍色圓圓的代幣，出站要記得投。`,
        `The round blue token. Drop it in on the way out.`,
      ),
      m(`西門站出口`, `Ximen station exit`),
    ),
    _(
      `street`,
      `smilebike-bell`,
      m(`笑笑單車鈴`, `SmileBike bell`),
      m(`叮叮！騎過人行道請慢慢來。`, `Ring ring! Easy on the sidewalk.`),
      m(`市政府廣場`, `City Hall plaza`),
    ),
    _(
      `street`,
      `taxi-sign`,
      m(`小黃頂燈`, `Taxi roof sign`),
      m(
        `滿街的小黃，招手就停。`,
        `A street full of yellow cabs. Wave and one stops.`,
      ),
      m(`松山機場`, `Songshan Airport`),
    ),
    _(
      `street`,
      `green-man`,
      m(`小綠人`, `The little green man`),
      m(
        `號誌裡會走路的小綠人，最後幾秒會用跑的。`,
        `The walking man in the signal. In the last seconds he runs.`,
      ),
      m(`中正紀念堂`, `Chiang Kai-shek Memorial Hall`),
    ),
    _(
      `street`,
      `garbage-music-box`,
      m(`垃圾車音樂盒`, `Garbage-truck music box`),
      m(
        `《少女的祈禱》一響，全巷子出動。`,
        `'A Maiden's Prayer' plays, the whole lane comes out.`,
      ),
      m(`大安青田街`, `Qingtian Street, Da’an`),
    ),
    _(
      `street`,
      `traffic-cone`,
      m(`三角錐`, `Traffic cone`),
      m(
        `路邊停車位的守護者。`,
        `The keeper of the parking space outside the house.`,
      ),
      m(`內湖`, `Neihu`),
    ),
    _(
      `fun`,
      `goldfish-bag`,
      m(`撈到的金魚`, `Goldfish in a bag`),
      m(`紙網破了三張才撈到一隻。`, `Three paper nets torn for one fish.`),
      v(`士林`, `Shilin`),
    ),
    _(
      `fun`,
      `ring-toss`,
      m(`套圈圈獎品`, `Ring-toss prize`),
      m(
        `圈圈明明套到了，老闆說要整個套進去。`,
        `You ringed it. The owner says it has to go all the way down.`,
      ),
      v(`士林`, `Shilin`),
    ),
    _(
      `fun`,
      `pinball`,
      m(`彈珠台`, `Pinball board`),
      m(
        `拉桿一放，彈珠叮叮咚咚。`,
        `Pull the plunger, the marble rattles down.`,
      ),
      v(`饒河`, `Raohe`),
    ),
    _(
      `fun`,
      `dice-bowl`,
      m(`十八啦骰子碗`, `Dice bowl`),
      m(`香腸攤的骰子，十八啦！`, `The sausage stand’s dice. Eighteen!`),
      v(`饒河`, `Raohe`),
    ),
    _(
      `fun`,
      `diabolo`,
      m(`扯鈴`, `Diabolo`),
      m(`國小體育課的回憶。`, `Primary-school PE, remembered.`),
      m(`中正紀念堂`, `Chiang Kai-shek Memorial Hall`),
    ),
    _(
      `fun`,
      `spinning-top`,
      m(`陀螺`, `Spinning top`),
      m(`纏好繩子，用力一甩。`, `Wind the string, throw it hard.`),
      m(`大安森林公園`, `Da’an Forest Park`),
    ),
    g(
      `fun`,
      `lucky-draw`,
      m(`抽抽樂`, `Lucky draw`),
      m(`戳破一格，看看抽到什麼。`, `Punch out a square and see what you get.`),
      v(`師大`, `Shida`),
      { kind: `gacha` },
      9,
    ),
    _(
      `souvenir`,
      `pineapple-cake`,
      m(`鳳梨酥`, `Pineapple cake`),
      m(
        `觀光客必買，親戚來也要帶一盒。`,
        `Every tourist buys a box. So does every visiting aunt.`,
      ),
      m(`臺北101`, `Taipei 101`),
    ),
    _(
      `souvenir`,
      `tieguanyin`,
      m(`貓空鐵觀音`, `Maokong Tieguanyin`),
      m(
        `坐纜車上山，泡一壺看夜景。`,
        `Ride the gondola up, brew a pot, watch the city lights.`,
      ),
      m(`貓空`, `Maokong`),
    ),
    _(
      `souvenir`,
      `calla-lily`,
      m(`竹子湖海芋`, `Zhuzihu calla lilies`),
      m(
        `春天上陽明山，採一把海芋。`,
        `Spring on Yangmingshan: pick an armful of calla lilies.`,
      ),
      m(`陽明山`, `Yangmingshan`),
    ),
    _(
      `souvenir`,
      `cheer-sticks`,
      m(`加油棒`, `Thunder sticks`),
      m(
        `天母棒球場，敲到手痠。`,
        `Tianmu ballpark: bang them till your arms ache.`,
      ),
      m(`天母`, `Tianmu`),
    ),
    _(
      `souvenir`,
      `homerun-ball`,
      m(`全壘打紀念球`, `Home-run ball`),
      m(
        `九局下半那一棒，整座大巨蛋都站起來了。`,
        `That swing in the bottom of the ninth stood the whole Dome up.`,
      ),
      m(`臺北大巨蛋`, `Taipei Dome`),
    ),
    _(
      `souvenir`,
      `zoo-ticket`,
      m(`動物園門票`, `Zoo ticket`),
      m(`木柵動物園，看貓熊要排隊。`, `Muzha zoo. Queue to see the pandas.`),
      m(`木柵`, `Muzha`),
    ),
    _(
      `souvenir`,
      `ferris-ticket`,
      m(`摩天輪票`, `Ferris wheel ticket`),
      m(
        `大直的摩天輪，約會必搭。`,
        `The big wheel in Dazhi. Every date ends up here.`,
      ),
      m(`大直`, `Dazhi`),
    ),
    _(
      `plush`,
      `plush-third-prince`,
      m(`三太子娃娃`, `Third Prince plush`),
      m(
        `電音三太子，夾到會跳舞（不會）。`,
        `The techno Third Prince. Dances if you win it (it does not).`,
      ),
      y,
    ),
    _(
      `plush`,
      `plush-boba`,
      m(`珍奶抱枕`, `Bubble-tea pillow`),
      m(
        `抱著它就不會想喝真的珍奶。才怪。`,
        `Hug it and you will not crave real boba. Sure.`,
      ),
      y,
    ),
    _(
      `plush`,
      `plush-black-bear`,
      m(`台灣黑熊玩偶`, `Formosan black bear plush`),
      m(`胸口那道 V 字白毛是重點。`, `The white V on its chest is the point.`),
      y,
    ),
    _(
      `plush`,
      `plush-leopard-cat`,
      m(`石虎娃娃`, `Leopard-cat plush`),
      m(
        `額頭兩條白線，不是普通的貓。`,
        `Two white stripes on the forehead: not just a cat.`,
      ),
      y,
    ),
    _(
      `plush`,
      `plush-cutlet`,
      m(`雞排造型抱枕`, `Chicken-cutlet cushion`),
      m(`看起來很好吃，但不能吃。`, `Looks delicious. Not edible.`),
      y,
    ),
    _(
      `plush`,
      `plush-blue-magpie`,
      m(`台灣藍鵲娃娃`, `Taiwan blue magpie plush`),
      m(
        `長長的藍尾巴，台灣特有種。`,
        `The long blue tail. Found only in Taiwan.`,
      ),
      y,
    ),
    _(
      `plush`,
      `plush-pangolin`,
      m(`穿山甲娃娃`, `Pangolin plush`),
      m(`縮成一顆球，鱗片軟軟的。`, `Curls into a ball. The scales are soft.`),
      y,
    ),
    _(
      `plush`,
      `plush-macaque`,
      m(`台灣獼猴娃娃`, `Formosan macaque plush`),
      m(`真的獼猴會搶你的塑膠袋。`, `The real ones steal your plastic bag.`),
      y,
    ),
    _(
      `plush`,
      `plush-tram`,
      m(`叮叮電車公仔`, `Ding-ding tram plush`),
      m(
        `香港島的雙層電車，叮叮！`,
        `Hong Kong Island's double-decker tram. Ding ding!`,
      ),
      m(`香港夾公仔舖`, `Hong Kong claw arcades`),
      `hong-kong`,
    ),
    _(
      `plush`,
      `plush-pineapple-bun`,
      m(`菠蘿包攬枕`, `Pineapple-bun cushion`),
      m(`沒有菠蘿的菠蘿包。`, `A pineapple bun with no pineapple.`),
      m(`香港夾公仔舖`, `Hong Kong claw arcades`),
      `hong-kong`,
    ),
    _(
      `plush`,
      `plush-siu-mai`,
      m(`燒賣公仔`, `Siu mai plush`),
      m(`街邊魚肉燒賣，一串五粒。`, `Street fish siu mai, five on a stick.`),
      m(`香港夾公仔舖`, `Hong Kong claw arcades`),
      `hong-kong`,
    ),
    _(
      `plush`,
      `plush-minibus`,
      m(`紅van小巴模型`, `Red minibus model`),
      m(
        `有落！司機開得比你想像中快。`,
        `Stop here! It drives faster than you think.`,
      ),
      m(`香港夾公仔舖`, `Hong Kong claw arcades`),
      `hong-kong`,
    ),
    _(
      `plush`,
      `plush-fish-ball`,
      m(`魚蛋串攬枕`, `Fish-ball skewer cushion`),
      m(
        `咖喱魚蛋，香港人的心靈食物。`,
        `Curry fish balls: Hong Kong's comfort food.`,
      ),
      m(`香港夾公仔舖`, `Hong Kong claw arcades`),
      `hong-kong`,
    ),
    g(
      `food`,
      `egg-tart`,
      m(`蛋撻`, `Egg tart`),
      m(
        `曲奇皮，趁熱吃才鬆化。`,
        `Shortcrust pastry. Eat it hot or it is not the same.`,
      ),
      m(`中環泰晶餅家`, `Tai Ching Bakery, Central`),
      h(15),
      20,
      `hong-kong`,
    ),
    g(
      `food`,
      `egg-waffle`,
      m(`雞蛋仔`, `Egg waffle`),
      m(
        `一格一格撕來吃，外脆內軟。`,
        `Tear it off bubble by bubble: crisp outside, soft inside.`,
      ),
      m(`中環街市`, `Central Market`),
      h(15),
      20,
      `hong-kong`,
    ),
    g(
      `food`,
      `wonton-noodles`,
      m(`雲吞麵`, `Wonton noodles`),
      m(
        `細蓉一碗：麵在下，雲吞在上，湯不可以混濁。`,
        `A small bowl: noodles below, wontons on top, the broth crystal clear.`,
      ),
      m(`中環麥根雲吞麵世家`, `Mak Kan Wonton Noodle, Central`),
      h(30),
      20,
      `hong-kong`,
    ),
    g(
      `food`,
      `brisket-noodles`,
      m(`牛腩伊麵`, `Beef brisket e-fu noodles`),
      m(
        `排隊排到街尾，搭枱是常識。`,
        `The queue runs down the street. Sharing a table is a given.`,
      ),
      m(`上環久記牛腩`, `Kau Gei Beef Brisket, Sheung Wan`),
      h(45),
      20,
      `hong-kong`,
    ),
    g(
      `food`,
      `milk-pudding`,
      m(`燉奶`, `Steamed milk pudding`),
      m(
        `凍的比熱的甜，店員催你快點選。`,
        `Cold is sweeter than hot. The staff want your answer now.`,
      ),
      m(`佐敦奧洲牛奶公司`, `Austral Dairy Company, Jordan`),
      h(20),
      20,
      `hong-kong`,
    ),
    g(
      `food`,
      `egg-toast`,
      m(`炒蛋多士`, `Scrambled-egg toast`),
      m(
        `炒蛋滑得像布丁，吃完請馬上讓位。`,
        `Eggs as smooth as custard. Finish up and give up your seat.`,
      ),
      m(`佐敦奧洲牛奶公司`, `Austral Dairy Company, Jordan`),
      h(40),
      20,
      `hong-kong`,
    ),
    g(
      `food`,
      `samosa`,
      m(`咖喱角`, `Samosa`),
      m(
        `剛炸好，「小辣」其實很辣。`,
        `Fresh from the fryer. 'Mild' is not mild.`,
      ),
      m(`尖沙咀重慶大廈`, `Chungking Mansions, TST`),
      h(15),
      20,
      `hong-kong`,
    ),
    g(
      `food`,
      `pork-chop-bun`,
      m(`豬扒包`, `Pork-chop bun`),
      m(
        `豬扒現煎，夾在脆脆的豬仔包裡。`,
        `The chop is fried to order, in a crusty bun.`,
      ),
      m(`中環蘭芬園`, `Lan Fun Yuen, Central`),
      h(40),
      20,
      `hong-kong`,
    ),
    g(
      `food`,
      `baked-pork-chop-rice`,
      m(`焗豬扒飯`, `Baked pork-chop rice`),
      m(
        `要等二十分鐘，茄汁芝士焗到起泡。`,
        `Twenty minutes in the oven, tomato and cheese bubbling.`,
      ),
      m(`油麻地美度餐室`, `Meido Cafe, Yau Ma Tei`),
      h(45),
      20,
      `hong-kong`,
    ),
    g(
      `food`,
      `pineapple-bun-butter`,
      m(`菠蘿油`, `Pineapple bun with butter`),
      m(
        `一塊冰牛油夾在熱菠蘿包裡，才正宗。`,
        `A slab of cold butter in a hot bun: the proper way.`,
      ),
      m(`油麻地美度餐室`, `Meido Cafe, Yau Ma Tei`),
      h(30),
      20,
      `hong-kong`,
    ),
    g(
      `food`,
      `roast-goose-rice`,
      m(`燒鵝飯`, `Roast goose rice`),
      m(
        `鵝皮比薯片還脆，要腿要另外加錢。`,
        `The skin is crispier than crisps. The leg costs extra.`,
      ),
      m(`中環容記酒家`, `Yung Gei Restaurant, Central`),
      h(50),
      20,
      `hong-kong`,
    ),
    g(
      `food`,
      `tomato-beef-macaroni`,
      m(`番茄牛肉通粉`, `Tomato-beef macaroni`),
      m(
        `大牌檔的早餐，加蛋多五元。`,
        `A dai pai dong breakfast. An egg is five dollars more.`,
      ),
      m(`上環盛香園大牌檔`, `Shing Heung Yuen Dai Pai Dong, Sheung Wan`),
      h(30),
      20,
      `hong-kong`,
    ),
    g(
      `food`,
      `lemon-honey-crispy`,
      m(`檸蜜脆脆`, `Lemon-honey crunchy bun`),
      m(`一口咬下去「咔咔」聲。`, `It crackles when you bite it.`),
      m(`上環盛香園大牌檔`, `Shing Heung Yuen Dai Pai Dong, Sheung Wan`),
      h(20),
      20,
      `hong-kong`,
    ),
    g(
      `food`,
      `curry-fish-balls`,
      m(`咖喱魚蛋`, `Curry fish balls`),
      m(
        `一串七粒，辣汁淋好淋滿。`,
        `Seven on a stick, drowned in curry sauce.`,
      ),
      m(`便利店`, `Convenience stores`),
      h(25),
      20,
      `hong-kong`,
    ),
    g(
      `food`,
      `spam-egg-noodles`,
      m(`餐蛋麵`, `Spam & egg noodles`),
      m(
        `午餐肉、煎蛋、公仔麵：茶餐廳的國民早餐。`,
        `Luncheon meat, a fried egg, instant noodles: the cha chaan teng breakfast.`,
      ),
      m(`茶餐廳`, `Cha chaan tengs`),
      h(30),
      20,
      `hong-kong`,
    ),
    g(
      `food`,
      `afternoon-tea`,
      m(`三層架下午茶`, `Afternoon tea stand`),
      m(
        `三文治、鬆餅、甜點，一層一層慢慢吃。`,
        `Sandwiches, scones, pastries: work your way up.`,
      ),
      m(`尖沙咀半島酒店大堂`, `The Peninsula Lobby, TST`),
      h(100),
      9,
      `hong-kong`,
    ),
    g(
      `food`,
      `har-gow`,
      m(`蝦餃`, `Har gow`),
      m(
        `一籠四粒，蝦要爽，皮要薄。`,
        `Four to a basket: springy shrimp, thin skin.`,
      ),
      m(`上環龍鳳大酒樓`, `Dragon & Phoenix Restaurant, Sheung Wan`),
      h(22),
      20,
      `hong-kong`,
    ),
    g(
      `food`,
      `char-siu-bao`,
      m(`叉燒包`, `Char siu bao`),
      m(
        `頂部裂開三瓣，才算蒸得好。`,
        `Split open in three at the top: that is how you know.`,
      ),
      m(`上環龍鳳大酒樓`, `Dragon & Phoenix Restaurant, Sheung Wan`),
      h(18),
      20,
      `hong-kong`,
    ),
    g(
      `food`,
      `cheung-fun`,
      m(`腸粉`, `Cheung fun`),
      m(
        `滑溜溜的叉燒腸，淋上甜豉油。`,
        `Slippery char siu rice rolls under sweet soy.`,
      ),
      m(`上環龍鳳大酒樓`, `Dragon & Phoenix Restaurant, Sheung Wan`),
      h(20),
      20,
      `hong-kong`,
    ),
    g(
      `food`,
      `phoenix-claws`,
      m(`鳳爪`, `Phoenix claws`),
      m(
        `豉汁燜到骨頭一吸就脫。`,
        `Braised in black bean sauce till the bones slip out.`,
      ),
      m(`上環龍鳳大酒樓`, `Dragon & Phoenix Restaurant, Sheung Wan`),
      h(16),
      20,
      `hong-kong`,
    ),
    g(
      `food`,
      `milk-tea-soft-serve`,
      m(`奶茶軟雪糕`, `Milk-tea soft serve`),
      m(
        `山頂風大，融化得比你吃得快。`,
        `The wind at the Peak melts it faster than you eat.`,
      ),
      m(`山頂凌霄閣`, `The Peak Tower`),
      h(20),
      20,
      `hong-kong`,
    ),
    g(
      `drink`,
      `hk-milk-tea`,
      m(`絲襪奶茶`, `Silk-stocking milk tea`),
      m(
        `撞足七次，濃到可以跑快一點。`,
        `Poured through seven times. Strong enough to make you run faster.`,
      ),
      m(`中環蘭芬園`, `Lan Fun Yuen, Central`),
      { kind: `sprint`, sec: 60 },
      20,
      `hong-kong`,
    ),
    g(
      `drink`,
      `yuenyeung`,
      m(`鴛鴦`, `Yuenyeung`),
      m(
        `三分咖啡七分茶，雙倍提神。`,
        `Three parts coffee, seven parts tea. Twice the kick.`,
      ),
      m(`中環蘭芬園`, `Lan Fun Yuen, Central`),
      { kind: `sprint`, sec: 90 },
      20,
      `hong-kong`,
    ),
    g(
      `drink`,
      `iced-lemon-tea`,
      m(`凍檸茶`, `Iced lemon tea`),
      m(
        `少甜，用匙羹把檸檬片壓到出汁。`,
        `Less sweet. Mash the lemon slices with the spoon.`,
      ),
      m(`檸檬王飲品店`, `Lemon King drinks counters`),
      h(15),
      20,
      `hong-kong`,
    ),
    g(
      `drink`,
      `herbal-24`,
      m(`廿四味`, `Twenty-four-herb tea`),
      m(
        `苦到皺眉，喝完說是清熱。`,
        `Bitter enough to make you wince. It cools you down, they say.`,
      ),
      m(`便利店涼茶`, `Herbal tea at convenience stores`),
      h(20),
      20,
      `hong-kong`,
    ),
    g(
      `drink`,
      `red-bean-ice`,
      m(`紅豆冰`, `Red-bean ice`),
      m(
        `紅豆煮足三個小時，再加花奶。`,
        `Beans simmered three hours, topped with evaporated milk.`,
      ),
      m(`油麻地美度餐室`, `Meido Cafe, Yau Ma Tei`),
      h(20),
      20,
      `hong-kong`,
    ),
    g(
      `temple`,
      `tin-hau-stick`,
      m(`天后靈籤`, `Tin Hau fortune stick`),
      m(
        `搖到一支跌出來，拿去對籤文。`,
        `Shake the cylinder till one falls out, then look up its verse.`,
      ),
      m(`油麻地天后廟`, `Tin Hau Temple, Yau Ma Tei`),
      { kind: `fortune` },
      9,
      `hong-kong`,
    ),
    _(
      `temple`,
      `incense-coil`,
      m(`塔香`, `Incense coil`),
      m(
        `掛在廟頂燒三個星期，紅紙寫上你的名字。`,
        `It hangs from the temple roof for three weeks, your name on the red tag.`,
      ),
      m(`上環文武廟`, `Man Mo Temple, Sheung Wan`),
      `hong-kong`,
    ),
    _(
      `temple`,
      `villain-slipper`,
      m(`打小人拖鞋`, `Villain-hitting slipper`),
      m(
        `鵝頸橋底的婆婆，一邊唸一邊打紙公仔。`,
        `Under the Goose Neck Bridge, the grannies chant and whack a paper figure.`,
      ),
      m(`銅鑼灣鵝頸橋底`, `Under the Goose Neck Bridge, Causeway Bay`),
      `hong-kong`,
    ),
    _(
      `life`,
      `ninetopus`,
      m(`九達通`, `Ninetopus card`),
      m(
        `「嘟」一聲，坐車買東西都靠它。`,
        `Beep. Buses, trains, shops: it pays for everything.`,
      ),
      m(`中環港鐵站`, `Central MTR station`),
      `hong-kong`,
    ),
    _(
      `life`,
      `rwb-bag`,
      m(`紅白藍膠袋`, `Red-white-blue bag`),
      m(
        `最耐用的香港行李，搬屋、走貨都靠它。`,
        `The toughest luggage in Hong Kong: moving house, moving goods.`,
      ),
      m(`尖沙咀重慶大廈`, `Chungking Mansions, TST`),
      `hong-kong`,
    ),
    _(
      `life`,
      `rooster-bowl`,
      m(`雞公碗`, `Rooster bowl`),
      m(
        `大牌檔的碗，碗邊一隻大公雞。`,
        `The dai pai dong bowl with the big rooster on the side.`,
      ),
      m(`中環嘉咸街`, `Graham Street, Central`),
      `hong-kong`,
    ),
    _(
      `life`,
      `flower-oil`,
      m(`百花油`, `Hundred-flower oil`),
      m(
        `頭痛、蚊叮、暈車，一瓶搞定。`,
        `Headache, mosquito bite, car sickness: one bottle does it all.`,
      ),
      m(`上環海味街`, `The dried-seafood streets, Sheung Wan`),
      `hong-kong`,
    ),
    _(
      `street`,
      `star-ferry-token`,
      m(`天星小輪代幣`, `Star Ferry token`),
      m(
        `從前過海就靠這一枚。`,
        `Once upon a time this got you across the harbour.`,
      ),
      m(`中環天星碼頭`, `Star Ferry Pier, Central`),
      `hong-kong`,
    ),
    _(
      `street`,
      `minibus-placard`,
      m(`小巴水牌`, `Minibus placard`),
      m(
        `手寫的目的地和車費，紅字白底。`,
        `Destination and fare, hand-lettered red on white.`,
      ),
      m(`旺角小巴站`, `Minibus stand, Mong Kok`),
      `hong-kong`,
    ),
    _(
      `street`,
      `neon-sign`,
      m(`霓虹燈招牌`, `Neon sign`),
      m(
        `彌敦道上空少了一塊，這是留下來的。`,
        `One that came down from above Nathan Road.`,
      ),
      m(`旺角西洋菜南街`, `Sai Yeung Choi Street South, Mong Kok`),
      `hong-kong`,
    ),
    _(
      `fun`,
      `mahjong-tile`,
      m(`麻雀牌`, `Mahjong tile`),
      m(
        `一張紅中，古董攤上撿回來的。`,
        `A Red Dragon, rescued from an antique stall.`,
      ),
      m(`上環貓街`, `Cat Street, Sheung Wan`),
      `hong-kong`,
    ),
    _(
      `fun`,
      `tin-robot`,
      m(`鐵皮機械人`, `Tin robot`),
      m(`上鏈之後一步一步走。`, `Wind it up and it marches.`),
      m(`灣仔太原街`, `Tai Yuen Street, Wan Chai`),
      `hong-kong`,
    ),
    _(
      `fun`,
      `race-slip`,
      m(`馬匯投注單`, `Betting slip`),
      m(
        `星期三晚跑馬地，填好了卻沒有落注。`,
        `Wednesday night at Happy Valley. Filled in, never placed.`,
      ),
      m(`跑馬地馬場`, `Happy Valley Racecourse`),
      `hong-kong`,
    ),
    _(
      `fun`,
      `bird-fortune`,
      m(`文雀占卜卡`, `Bird fortune card`),
      m(
        `小鳥從籠子裡跳出來，叼了這一張給你。`,
        `The little bird hopped out of its cage and picked this one for you.`,
      ),
      m(`油麻地廟街`, `Temple Street, Yau Ma Tei`),
      `hong-kong`,
    ),
    _(
      `fun`,
      `goldfish-bag-hk`,
      m(`一袋金魚`, `A bag of goldfish`),
      m(
        `一整面牆的膠袋金魚，選了最胖的那一條。`,
        `A wall of goldfish in bags. You picked the fattest one.`,
      ),
      m(`旺角金魚街`, `Goldfish Market, Mong Kok`),
      `hong-kong`,
    ),
    _(
      `fun`,
      `capsule-toy`,
      m(`扭蛋公仔`, `Capsule toy`),
      m(`又是同一隻……再扭一次吧。`, `The same one again… one more go.`),
      m(`旺角信合中心`, `Shun Hap Centre, Mong Kok`),
      `hong-kong`,
    ),
    _(
      `souvenir`,
      `peak-tram-ticket`,
      m(`山頂纜車車票`, `Peak Tram ticket`),
      m(
        `坐在右邊，才看得到維港。`,
        `Sit on the right if you want the harbour view.`,
      ),
      m(`中環花園道纜車站`, `Peak Tram terminus, Garden Road`),
      `hong-kong`,
    ),
    _(
      `souvenir`,
      `star-lantern`,
      m(`楊桃燈籠`, `Starfruit lantern`),
      m(
        `中秋節的維園，滿天都是燈籠。`,
        `Victoria Park at Mid-Autumn, lanterns everywhere.`,
      ),
      m(`銅鑼灣維多利亞公園`, `Victoria Park, Causeway Bay`),
      `hong-kong`,
    ),
    _(
      `souvenir`,
      `peak-tram-model`,
      m(`山頂纜車模型`, `Peak Tram model`),
      m(
        `綠色車廂，一比八十，車窗很容易斷。`,
        `The green car at 1:80. The little windows snap easily.`,
      ),
      m(`山頂凌霄閣手信店`, `Peak Tower gift shop`),
      `hong-kong`,
    ),
    _(
      `souvenir`,
      `ilovehk-tee`,
      m(`「I ♥ HK」T恤`, `“I ♥ HK” T-shirt`),
      m(`遊客必買，均碼。`, `Every visitor buys one. One size.`),
      m(`山頂凌霄閣手信店`, `Peak Tower gift shop`),
      `hong-kong`,
    ),
    _(
      `souvenir`,
      `harbour-postcards`,
      m(`維港明信片`, `Harbour postcards`),
      m(
        `日景夜景各五張，寄回家。`,
        `Five by day, five by night. Send them home.`,
      ),
      m(`山頂凌霄閣手信店`, `Peak Tower gift shop`),
      `hong-kong`,
    ),
    _(
      `souvenir`,
      `tram-magnet`,
      m(`叮叮雪櫃貼`, `Tram fridge magnet`),
      m(
        `三個一百元，多買一個送朋友。`,
        `Three for a hundred. Get one more for a friend.`,
      ),
      m(`山頂凌霄閣手信店`, `Peak Tower gift shop`),
      `hong-kong`,
    ),
    ...ee(),
  ];
function ee() {
  let e = `tokyo`,
    t = m(`便利商店`, `The konbini`),
    n = m(`藥妝店`, `The drugstore`),
    r = m(`珍奶店`, `The tea stand`),
    i = m(`神社參拜`, `Pray at a shrine`),
    a = m(`遊樂場`, `The game centre`);
  return [
    g(
      `food`,
      `jp-onigiri`,
      m(`御飯糰`, `Onigiri`),
      m(
        `照著 1、2、3 撕開，海苔一片都不會斷。`,
        `Pull tab 1, 2, 3 and the seaweed comes out whole. Every time.`,
      ),
      t,
      h(25),
      20,
      e,
    ),
    g(
      `food`,
      `jp-nikuman`,
      m(`肉包`, `Nikuman`),
      m(
        `冬天收銀台旁的蒸櫃，熱到要兩手輪流拿。`,
        `From the steamer by the register. Too hot to hold in one hand.`,
      ),
      t,
      h(25),
      20,
      e,
    ),
    g(
      `food`,
      `jp-oden`,
      m(`日式關東煮`, `Konbini oden`),
      m(
        `白蘿蔔、蛋、竹輪，湯要多舀一點。`,
        `Radish, egg, chikuwa. Ask for extra broth.`,
      ),
      t,
      h(35),
      20,
      e,
    ),
    g(
      `food`,
      `jp-agechiki`,
      m(`アゲチキ炸雞`, `Agechiki`),
      m(
        `收銀台的熱食櫃，隨手一塊，邊走邊吃。`,
        `One from the hot case at the till, eaten on the walk out.`,
      ),
      t,
      h(30),
      20,
      e,
    ),
    g(
      `food`,
      `jp-tamagoyaki`,
      m(`玉子燒`, `Tamagoyaki`),
      m(
        `一串插好，甜甜的，排隊的人比雞蛋還多。`,
        `On a stick, sweet, and the queue is longer than the omelette.`,
      ),
      m(`築地場外市場`, `Tsukiji Outer Market`),
      h(20),
      20,
      e,
    ),
    g(
      `food`,
      `jp-ningyoyaki`,
      m(`人形燒`, `Ningyo-yaki`),
      m(
        `七福神造型的雞蛋糕，紅豆餡熱呼呼。`,
        `Little sponge cakes shaped like the Seven Lucky Gods, warm red bean inside.`,
      ),
      m(`人形町甘酒橫丁`, `Amazake Yokocho, Ningyocho`),
      h(20),
      20,
      e,
    ),
    g(
      `drink`,
      `jp-ocha`,
      m(`瓶裝綠茶`, `Bottled green tea`),
      m(
        `無糖，冷藏櫃第二排，日本人的白開水。`,
        `Unsweetened, second shelf in the fridge. Tokyo's tap water.`,
      ),
      t,
      h(15),
      20,
      e,
    ),
    g(
      `drink`,
      `jp-hot-coffee`,
      m(`超商熱咖啡`, `Konbini hot coffee`),
      m(
        `杯子自己放上機器，按下去等三十秒。衝刺 60 秒。`,
        `Put the cup in the machine yourself, wait thirty seconds. Sprint for 60 s.`,
      ),
      t,
      { kind: `sprint`, sec: 60 },
      20,
      e,
    ),
    g(
      `drink`,
      `jp-energy-drink`,
      m(`營養飲料`, `Energy tonic`),
      m(
        `小小一瓶，上班族的加班燃料。衝刺 90 秒。`,
        `A tiny bottle: what office workers run on. Sprint for 90 s.`,
      ),
      n,
      { kind: `sprint`, sec: 90 },
      20,
      e,
    ),
    g(
      `drink`,
      `jp-tapioca`,
      m(`東京珍奶`, `Tokyo bubble tea`),
      m(
        `臺灣來的，在東京排隊排了一整條街。`,
        `From Taiwan. In Tokyo the queue goes round the block.`,
      ),
      r,
      h(15),
      20,
      e,
    ),
    g(
      `drink`,
      `jp-matcha-latte`,
      m(`抹茶奶茶`, `Matcha milk tea`),
      m(
        `綠到發光，苦一點才對味。`,
        `Glowing green. A bit bitter is how it should be.`,
      ),
      r,
      h(15),
      20,
      e,
    ),
    g(
      `drink`,
      `jp-hojicha-latte`,
      m(`焙茶拿鐵`, `Hojicha latte`),
      m(
        `烘過的茶香，像秋天的落葉。`,
        `Roasted tea: smells like autumn leaves.`,
      ),
      r,
      h(15),
      20,
      e,
    ),
    g(
      `life`,
      `jp-first-aid`,
      m(`急救組`, `First-aid set`),
      m(
        `繃帶、紗布、消毒水，一盒全包。`,
        `Bandages, gauze, disinfectant: the lot in one box.`,
      ),
      n,
      h(100),
      5,
      e,
    ),
    g(
      `life`,
      `jp-shippu`,
      m(`痠痛貼布`, `Cooling patch`),
      m(
        `涼涼的，貼在肩膀上，走一整天也不怕。`,
        `Cool on the shoulder. Walk all day.`,
      ),
      n,
      h(40),
      20,
      e,
    ),
    g(
      `life`,
      `jp-megusuri`,
      m(`眼藥水`, `Eye drops`),
      m(
        `滴下去涼到整個人清醒，眼睛還會冒煙。`,
        `So cool your eyes practically steam. Wide awake.`,
      ),
      n,
      h(10),
      20,
      e,
    ),
    _(
      `life`,
      `jp-mask`,
      m(`不織布口罩`, `Paper face mask`),
      m(
        `花粉季的東京，滿街都戴著。`,
        `Tokyo in pollen season: everyone wears one.`,
      ),
      n,
      e,
    ),
    _(
      `life`,
      `jp-receipt`,
      m(`超商收據`, `Konbini receipt`),
      m(
        `沒有發票可以對，但記帳很好用。`,
        `No lottery on this one. Good for the budget book, though.`,
      ),
      m(`在便利商店買東西`, `Any konbini purchase`),
      e,
    ),
    g(
      `temple`,
      `jp-omamori`,
      m(`御守`, `Omamori`),
      m(
        `交通安全的那一款，掛在包包上。`,
        `The road-safety one. Hang it on your bag.`,
      ),
      i,
      { kind: `armor`, amount: 50 },
      5,
      e,
    ),
    g(
      `temple`,
      `jp-omikuji`,
      m(`神籤`, `Omikuji`),
      m(
        `抽到凶就綁在樹上，留在神社裡。`,
        `Draw a bad one? Tie it to the branch and leave it with the shrine.`,
      ),
      i,
      { kind: `fortune` },
      9,
      e,
    ),
    _(
      `temple`,
      `jp-ema`,
      m(`繪馬`, `Ema`),
      m(
        `寫上心願掛起來，別人的願望不要偷看。`,
        `Write your wish and hang it up. Don't read the others.`,
      ),
      i,
      e,
    ),
    _(
      `temple`,
      `jp-goen`,
      m(`五圓硬幣`, `Five-yen coin`),
      m(
        `「ご縁」的諧音，香油錢投它最有緣。`,
        `Go-en sounds like "a good bond": the luckiest coin to offer.`,
      ),
      i,
      e,
    ),
    g(
      `fun`,
      `jp-pochi`,
      m(`和風小紅包`, `Pochi-bukuro envelope`),
      m(
        `畫著小動物的小紙袋，裡面裝著零用錢。`,
        `A tiny paper envelope with animals on it, pocket money inside.`,
      ),
      m(`任務獎勵`, `Mission rewards`),
      { kind: `money`, min: 200, max: 1200 },
      20,
      e,
    ),
    g(
      `fun`,
      `jp-gacha`,
      m(`扭蛋`, `Gacha capsule`),
      m(
        `轉一圈，喀啦一聲，會是哪一個？`,
        `Turn the handle, clunk — which one will it be?`,
      ),
      m(`任務獎勵、秋葉原`, `Mission rewards, Akihabara`),
      { kind: `gacha` },
      9,
      e,
    ),
    _(
      `street`,
      `jp-melonca`,
      m(`Melonca 交通卡`, `Melonca card`),
      m(
        `嗶一下就進站，車站裡的超商也能用。`,
        `Beep through the gates; works at the station konbini too.`,
      ),
      m(`東京車站`, `Tokyo Station`),
      e,
    ),
    _(
      `street`,
      `jp-kippu`,
      m(`山手線車票`, `Yamanote Line ticket`),
      m(
        `一張小小的紙車票，進站時被剪票機吃進去又吐出來。`,
        `A little paper ticket the gate swallows and spits back out.`,
      ),
      m(`有樂町高架下`, `Under the tracks, Yurakucho`),
      e,
    ),
    _(
      `street`,
      `jp-maid-flyer`,
      m(`女僕咖啡傳單`, `Maid-café flyer`),
      m(
        `街口發的，背面有一張飲料折價券。`,
        `Handed out on the corner. A drink coupon on the back.`,
      ),
      m(`秋葉原電器街`, `Akihabara Electric Town`),
      e,
    ),
    _(
      `street`,
      `jp-ginza-bag`,
      m(`銀座紙提袋`, `Ginza paper bag`),
      m(
        `袋子比裡面的東西還高級，捨不得丟。`,
        `The bag is fancier than what was in it. Too nice to throw away.`,
      ),
      m(`銀座`, `Ginza`),
      e,
    ),
    _(
      `life`,
      `jp-old-book`,
      m(`古書`, `Second-hand book`),
      m(
        `一百圓的均一價書車，翻到一張昭和年代的書籤。`,
        `From the ¥100 cart outside. A bookmark from the Showa era inside.`,
      ),
      m(`神田古書街`, `Kanda used-book street`),
      e,
    ),
    _(
      `life`,
      `jp-salaryman-tie`,
      m(`上班族領帶`, `Salaryman tie`),
      m(
        `下班後在新橋解開，鬆鬆地掛在脖子上。`,
        `Loosened in Shimbashi after work, hanging off the neck.`,
      ),
      m(`新橋SL廣場`, `SL Square, Shimbashi`),
      e,
    ),
    _(
      `fun`,
      `jp-retro-cartridge`,
      m(`中古遊戲卡帶`, `Retro game cartridge`),
      m(
        `吹一吹再插進去，存檔竟然還在。`,
        `Blow on it, push it in — the old save is still there.`,
      ),
      m(`秋葉原`, `Akihabara`),
      e,
    ),
    _(
      `fun`,
      `jp-guitar-pick`,
      m(`吉他彈片`, `Guitar pick`),
      m(
        `樂器街試彈了一整個下午，只買了這一片。`,
        `An afternoon trying guitars on the music street. Bought one pick.`,
      ),
      m(`御茶之水樂器街`, `Ochanomizu music street`),
      e,
    ),
    _(
      `fun`,
      `jp-kabuki-ticket`,
      m(`歌舞伎一幕見票`, `Kabuki single-act ticket`),
      m(
        `站在最上層看一幕，喊聲的老爺爺比演員還準時。`,
        `One act from the top gallery. The old man shouting cues is never late.`,
      ),
      m(`歌舞伎座`, `Kabukiza`),
      e,
    ),
    _(
      `souvenir`,
      `jp-shinkansen-model`,
      m(`新幹線模型`, `Shinkansen model`),
      m(
        `長長的鼻子，車頭比車廂還帥。`,
        `That long nose. The front car is the star.`,
      ),
      m(`東京車站八重洲口`, `Yaesu side, Tokyo Station`),
      e,
    ),
    _(
      `souvenir`,
      `jp-panda-goods`,
      m(`熊貓周邊`, `Panda goods`),
      m(
        `車站裡什麼都是熊貓：麵包、筆、甚至便當。`,
        `Everything at the station is a panda: buns, pens, even lunch boxes.`,
      ),
      m(`上野車站`, `Ueno Station`),
      e,
    ),
    _(
      `souvenir`,
      `jp-ameyoko-choco`,
      m(`阿美橫丁巧克力袋`, `Ameyoko chocolate bag`),
      m(
        `老闆一直往袋子裡丟，「再加！再加！」一千圓。`,
        `The stallholder keeps tossing more in — "and more!" — for a thousand yen.`,
      ),
      m(`阿美橫丁`, `Ameyoko`),
      e,
    ),
    _(
      `souvenir`,
      `jp-furin`,
      m(`風鈴`, `Wind chime`),
      m(
        `掛在窗邊，風一吹，夏天就涼了一點。`,
        `By the window: one breeze and summer feels a little cooler.`,
      ),
      m(`神田明神`, `Kanda Myojin`),
      e,
    ),
    _(
      `souvenir`,
      `jp-tenugui`,
      m(`手巾`, `Tenugui`),
      m(
        `擦汗、包便當、綁頭上，一條布什麼都能做。`,
        `Mop your brow, wrap a lunch, tie it round your head. One cloth, every job.`,
      ),
      m(`人形町`, `Ningyocho`),
      e,
    ),
    _(
      `souvenir`,
      `jp-sensu`,
      m(`扇子`, `Folding fan`),
      m(
        `啪一聲打開，老店的師傅說是手工糊的。`,
        `Snaps open. The old shop's craftsman glued it by hand.`,
      ),
      m(`日本橋`, `Nihonbashi`),
      e,
    ),
    _(
      `souvenir`,
      `jp-chochin`,
      m(`迷你提燈`, `Mini paper lantern`),
      m(
        `紅色的小燈籠，掛在房門口像開了一間居酒屋。`,
        `A little red lantern. Hang it on your door and you run an izakaya.`,
      ),
      m(`上野公園`, `Ueno Park`),
      e,
    ),
    _(
      `plush`,
      `jp-plush-shiba`,
      m(`柴犬大娃娃`, `Giant shiba plush`),
      m(
        `一臉不屑的柴犬，抱起來卻軟綿綿。`,
        `A shiba with a look of total disdain. Very huggable.`,
      ),
      a,
      e,
    ),
    _(
      `plush`,
      `jp-plush-sushi`,
      m(`鮪魚握壽司抱枕`, `Tuna-sushi cushion`),
      m(
        `枕在頭下面，夢裡都是醋飯香。`,
        `Put your head on it and dream of vinegared rice.`,
      ),
      a,
      e,
    ),
    _(
      `plush`,
      `jp-plush-maneki`,
      m(`招財貓娃娃`, `Lucky-cat plush`),
      m(
        `舉右手招錢，舉左手招人，這隻兩手都舉。`,
        `Right paw for money, left for customers. This one raises both.`,
      ),
      a,
      e,
    ),
    _(
      `plush`,
      `jp-okashi-bag`,
      m(`零食大禮盒`, `Big box of snacks`),
      m(
        `一百圓夾到一整箱零食，比超商便宜。`,
        `A whole box of snacks for ¥100. Cheaper than the konbini.`,
      ),
      a,
      e,
    ),
    _(
      `plush`,
      `jp-figure`,
      m(`景品公仔`, `Prize figure`),
      m(
        `盒子不能拆，拆了就不值錢了。`,
        `Never open the box. Opened, it's worth nothing.`,
      ),
      a,
      e,
    ),
  ];
}
var te = Object.fromEntries(b.map((e) => [e.id, e])),
  ne = [
    {
      id: `food`,
      name: m(`小吃`, `Street food`),
      hk: m(`小食`, `Snacks & meals`),
    },
    { id: `drink`, name: m(`飲料`, `Drinks`), hk: m(`飲品`, `Drinks`) },
    { id: `temple`, name: m(`廟宇`, `Temples`), hk: m(`廟宇`, `Temples`) },
    {
      id: `life`,
      name: m(`生活`, `Everyday life`),
      hk: m(`生活`, `Everyday life`),
    },
    {
      id: `street`,
      name: m(`街頭`, `On the street`),
      hk: m(`街頭`, `On the street`),
    },
    {
      id: `fun`,
      name: m(`夜市與童玩`, `Night-market games & toys`),
      hk: m(`玩意`, `Games & toys`),
    },
    {
      id: `souvenir`,
      name: m(`伴手禮`, `Souvenirs`),
      hk: m(`手信`, `Souvenirs`),
    },
    { id: `plush`, name: m(`娃娃`, `Plushies`), hk: m(`公仔`, `Plushies`) },
  ],
  re = {
    food: m(`食物`, `Food`),
    drink: m(`飲料`, `Drinks`),
    temple: m(`神社`, `Shrines`),
    life: m(`生活`, `Everyday life`),
    street: m(`街頭`, `On the street`),
    fun: m(`玩樂`, `Games & toys`),
    souvenir: m(`伴手禮`, `Souvenirs`),
    plush: m(`景品`, `Prizes`),
  },
  ie = [
    { id: `taiwan`, name: m(`臺灣`, `Taiwan`) },
    { id: `hong-kong`, name: m(`香港`, `Hong Kong`) },
    { id: `tokyo`, name: m(`東京`, `Tokyo`) },
  ],
  ae = (e) =>
    e === `tokyo` ? `tokyo` : e === `hong-kong` ? `hong-kong` : `taiwan`,
  oe = (e, t) =>
    t === `tokyo` || e.city === `tokyo`
      ? e.city === t
      : e.city === `both` ||
        (t === `hong-kong` ? e.city === `hong-kong` : e.city === `taipei`),
  se = {
    taipei: [
      `plush-third-prince`,
      `plush-boba`,
      `plush-black-bear`,
      `plush-leopard-cat`,
      `plush-cutlet`,
      `plush-blue-magpie`,
      `plush-pangolin`,
      `plush-macaque`,
    ],
    "hong-kong": [
      `plush-tram`,
      `plush-pineapple-bun`,
      `plush-siu-mai`,
      `plush-minibus`,
      `plush-fish-ball`,
    ],
    kaohsiung: [
      `plush-third-prince`,
      `plush-boba`,
      `plush-black-bear`,
      `plush-leopard-cat`,
      `plush-cutlet`,
      `plush-blue-magpie`,
      `plush-pangolin`,
      `plush-macaque`,
    ],
  };
se.tokyo = [
  `jp-plush-shiba`,
  `jp-plush-sushi`,
  `jp-plush-maneki`,
  `jp-okashi-bag`,
  `jp-figure`,
];
var ce = [
    [`mazu-amulet`, 0.15],
    [`fortune-slip`, 0.2],
    [`joss-paper`, 0.1],
    [`incense`, 0.1],
  ],
  le = [
    [`red-envelope`, 5],
    [`wedding-invite`, 1],
    [`queue-ticket`, 1],
    [`parking-ticket`, 1],
    [`lucky-draw`, 2],
  ],
  ue = 0.35,
  de = [
    [`jp-omamori`, 0.15],
    [`jp-omikuji`, 0.2],
    [`jp-ema`, 0.1],
    [`jp-goen`, 0.1],
  ],
  fe = [
    [`jp-pochi`, 5],
    [`jp-gacha`, 2],
    [`jp-ningyoyaki`, 1],
  ],
  pe = b
    .filter(
      (e) =>
        e.shelf === `keep` &&
        (e.cat === `life` || e.cat === `street` || e.cat === `fun`) &&
        e.city !== `tokyo`,
    )
    .map((e) => e.id),
  me = b
    .filter(
      (e) =>
        e.city === `tokyo` &&
        e.shelf === `keep` &&
        (e.cat === `life` ||
          e.cat === `street` ||
          e.cat === `fun` ||
          e.cat === `souvenir`) &&
        e.id !== `jp-receipt`,
    )
    .map((e) => e.id),
  he = /^[a-z][a-z0-9-]{1,31}$/,
  x = { taipei: 1, "hong-kong": 4, kaohsiung: 1 };
x.tokyo = 1 / 5;
var ge = [`quality`, `masterVolume`, `musicVolume`, `sfxVolume`, `showFps`],
  _e = [`bat`, `pistol`, `smg`],
  ve = `shared`,
  S = (e) => !!e && typeof e == `object` && !Array.isArray(e),
  C = (e) => typeof e == `number` && Number.isFinite(e),
  w = (e, t, n, r = 0) => (C(e) ? Math.max(t, Math.min(n, Math.round(e))) : r),
  T = (e) =>
    (typeof e == `string` && e.length <= 64) || C(e) || typeof e == `boolean`,
  ye = 1e3,
  be = 256,
  E = 0x9184e72a000,
  D = (e) => S(e) && e.shared === 1;
function O(e) {
  if (!S(e)) return 500;
  let t =
    typeof e.money == `string` && e.money.trim() !== ``
      ? Number(e.money)
      : e.money;
  return C(t) ? Math.max(0, Math.round(t)) : 500;
}
function xe(e) {
  return S(e)
    ? (typeof e.firstPlayedAt == `string`
        ? e.firstPlayedAt
        : typeof e.startDate == `string`
          ? e.startDate
          : ``
      ).slice(0, 40)
    : ``;
}
function Se(e = 0) {
  return {
    v: 1,
    wallet: { ntd: 0, seeds: {}, dev: {} },
    player: {},
    settings: {},
    at: { player: 0, settings: 0, clock: 0 },
    since: e,
  };
}
function k(e) {
  let t = 0;
  for (let n of Object.values(e.seeds)) t += n;
  for (let n of Object.values(e.dev)) t += n.e - n.s;
  if (e.market?.conflict) return 0;
  for (let n of Object.values(e.market?.lanes ?? {})) t += n.credit - n.debit;
  return t;
}
function A(e, t) {
  return t === `tokyo`
    ? Math.floor(Math.max(0, C(e) ? e : 0)) * 5
    : Math.floor(Math.max(0, C(e) ? e : 0) / x[t]);
}
function j(e, t) {
  return t === `tokyo` ? Math.floor(Math.max(0, C(e) ? e : 0) / 5) : e * x[t];
}
function M(e) {
  return S(e) ? w(e.yenChange, 0, 4, 0) : 0;
}
function Ce(e) {
  return e === `tokyo` ? 500 : 500 * x[e];
}
function N(e, t, n) {
  let r = t.slice(0, 80);
  return (
    !Object.prototype.hasOwnProperty.call(e.wallet.seeds, r) &&
    ((e.wallet.seeds[r] = Math.max(0, Math.round(C(n) ? n : 0))),
    (e.wallet.ntd = Math.max(0, k(e.wallet))),
    !0)
  );
}
function we(e, t, n, r) {
  let i = Math.round(C(n) ? n : 0);
  if (!i) return 0;
  let a = (e.wallet.dev[t] ??= { e: 0, s: 0, at: r }),
    o = i;
  if (i > 0) a.e += i;
  else {
    let t = Math.min(-i, Math.max(0, k(e.wallet)));
    ((a.s += t), (o = t ? -t : 0));
  }
  return ((a.at = r), (e.wallet.ntd = Math.max(0, k(e.wallet))), o);
}
function P(e) {
  if (!S(e)) return;
  let t = (e) =>
      typeof e == `string` && /^[a-z][\w-]{0,23}$/i.test(e) && e !== `fists`,
    n = Array.isArray(e.owned)
      ? [...new Set(e.owned.filter(t))].slice(0, 16)
      : [],
    r = (e, n) => {
      let r = {};
      if (S(e))
        for (let [i, a] of Object.entries(e))
          t(i) && C(a) && (r[i] = w(a, 0, n));
      return r;
    },
    i =
      typeof e.weapon == `string` &&
      (e.weapon === `fists` || n.includes(e.weapon))
        ? e.weapon
        : `fists`;
  return {
    owned: n,
    ammo: r(e.ammo, 99999),
    mag: r(e.mag, 9999),
    armor: w(e.armor, 0, 100),
    weapon: i,
  };
}
function F(e) {
  let t = {};
  if (!S(e)) return t;
  for (let [n, r] of Object.entries(e)) {
    if (Object.keys(t).length >= 64) break;
    n.length > 0 && n.length <= 40 && T(r) && (t[n] = r);
  }
  return (t.lang === `ja` && delete t.lang, t);
}
function I(e) {
  if (!S(e)) return;
  let t = {};
  for (let [n, r] of Object.entries(e)) {
    if (Object.keys(t).length >= 220) break;
    he.test(n) && C(r) && r >= 1 && (t[n] = w(r, 1, 99));
  }
  return t;
}
function Te(e, t, n) {
  let r = { ...(e ?? {}) },
    i = n ?? {};
  for (let e of new Set([...Object.keys(t), ...Object.keys(i)])) {
    let n = (t[e] ?? 0) - (i[e] ?? 0);
    if (!n) continue;
    let a = Math.max(0, Math.min(99, (r[e] ?? 0) + n));
    a ? (r[e] = a) : delete r[e];
  }
  return I(r) ?? {};
}
function L(e) {
  if (!Array.isArray(e)) return;
  let t = new Set();
  for (let n of e) {
    if (t.size >= 256) break;
    typeof n == `string` && he.test(n) && t.add(n);
  }
  return [...t];
}
var R = (e, t) => L([...(e ?? []), ...(t ?? [])]) ?? [];
function z(e) {
  if (!S(e)) return;
  let t =
    typeof e.startDate == `string` && /^\d{4}-\d{2}-\d{2}$/.test(e.startDate)
      ? e.startDate
      : void 0;
  if (!C(e.hour) && !t) return;
  let n = { day: w(e.day, 0, 1e6) };
  return (
    C(e.hour) && (n.hour = ((e.hour % 24) + 24) % 24),
    t && (n.startDate = t),
    n
  );
}
function B(e) {
  if (!S(e) || !S(e.wallet)) return;
  let n = e.wallet,
    r = {};
  if (S(n.seeds))
    for (let [e, t] of Object.entries(n.seeds)) {
      if (Object.keys(r).length >= ye) break;
      e.length > 0 && e.length <= 80 && C(t) && (r[e] = w(t, 0, E));
    }
  let i = {};
  if (S(n.dev))
    for (let [e, t] of Object.entries(n.dev)) {
      if (Object.keys(i).length >= be) break;
      /^[\w-]{1,40}$/.test(e) &&
        S(t) &&
        (i[e] = {
          e: w(t.e, 0, E),
          s: w(t.s, 0, E),
          at: w(t.at, 0, 0x38d7ea4c68000),
        });
    }
  let a = S(e.player) ? e.player : {},
    o = {};
  (t(a.character) && (o.character = a.character),
    T(a.outfit) && (o.outfit = a.outfit));
  let s = P(a.loadout);
  s && (o.loadout = s);
  let c = S(e.at) ? e.at : {},
    l = {
      v: 1,
      wallet: { ntd: 0, seeds: r, dev: i },
      player: o,
      settings: F(e.settings),
      at: {
        player: w(c.player, 0, 0x38d7ea4c68000),
        settings: w(c.settings, 0, 0x38d7ea4c68000),
        clock: w(c.clock, 0, 0x38d7ea4c68000),
      },
      since: w(e.since, 0, 0x38d7ea4c68000),
    },
    u = I(e.bag);
  u && ((l.bag = u), (l.at.bag = w(c.bag, 0, 0x38d7ea4c68000)));
  let d = L(e.book);
  d?.length && (l.book = d);
  let f = Ee(n.market);
  (f && (l.wallet.market = f), (l.wallet.ntd = Math.max(0, k(l.wallet))));
  let p = z(e.clock);
  return (p && (l.clock = p), e.adopted === !0 && (l.adopted = !0), l);
}
function Ee(e) {
  if (e === void 0) return;
  let t = { lanes: {} };
  if (!S(e) || !S(e.lanes)) return { ...t, conflict: !0 };
  e.conflict === !0 && (t.conflict = !0);
  let n = Object.entries(e.lanes);
  n.length > 64 && (t.conflict = !0);
  for (let [e, r] of n) {
    if (
      !/^[\w-]{1,40}$/.test(e) ||
      !S(r) ||
      !Number.isSafeInteger(r.revision) ||
      Number(r.revision) < 1 ||
      !Number.isSafeInteger(r.debit) ||
      Number(r.debit) < 0 ||
      !Number.isSafeInteger(r.credit) ||
      Number(r.credit) < 0 ||
      (r.pending !== void 0 &&
        (!S(r.pending) || JSON.stringify(r.pending).length > 8192))
    ) {
      t.conflict = !0;
      continue;
    }
    t.lanes[e] = {
      revision: Number(r.revision),
      debit: Number(r.debit),
      credit: Number(r.credit),
      ...(r.pending === void 0 ? {} : { pending: H(r.pending) }),
    };
  }
  return t;
}
var V = (e) =>
  Array.isArray(e)
    ? `[${e.map(V).join(`,`)}]`
    : S(e)
      ? `{${Object.keys(e)
          .sort()
          .map((t) => `${JSON.stringify(t)}:${V(e[t])}`)
          .join(`,`)}}`
      : (JSON.stringify(e) ?? `null`);
function De(e, t) {
  if (!e && !t) return;
  let n = { lanes: {} };
  for (let r of [e, t])
    if (r) {
      r.conflict && (n.conflict = !0);
      for (let [e, t] of Object.entries(r.lanes)) {
        let r = n.lanes[e];
        if (!r) {
          n.lanes[e] = H(t);
          continue;
        }
        let i = t.revision > r.revision ? t : r,
          a = i === t ? r : t;
        (((t.revision === r.revision && V(t) !== V(r)) ||
          i.debit < a.debit ||
          i.credit < a.credit) &&
          (n.conflict = !0),
          (n.lanes[e] = H(t.revision === r.revision && V(t) > V(r) ? t : i)));
      }
    }
  return (Object.keys(n.lanes).length > 64 && (n.conflict = !0), n);
}
function Oe(e) {
  let t = B(e);
  for (let e of ge) delete t.settings[e];
  return (delete t.adopted, t);
}
function ke(e, t) {
  let n = e ? B(e) : void 0,
    r = t ? B(t) : void 0;
  if ((r && delete r.adopted, n?.adopted)) return r ? Ae(r, n) : void 0;
  if (!n) return r;
  if (!r) return n;
  let i = [n.since, r.since].filter((e) => e > 0),
    a = Se(i.length ? Math.min(...i) : 0);
  for (let e of [n, r]) {
    for (let [t, n] of Object.entries(e.wallet.seeds))
      a.wallet.seeds[t] = Math.max(a.wallet.seeds[t] ?? 0, n);
    for (let [t, n] of Object.entries(e.wallet.dev)) {
      let e = a.wallet.dev[t];
      a.wallet.dev[t] = e
        ? {
            e: Math.max(e.e, n.e),
            s: Math.max(e.s, n.s),
            at: Math.max(e.at, n.at),
          }
        : { ...n };
    }
  }
  let o = De(n.wallet.market, r.wallet.market);
  (o && (a.wallet.market = o), (a.wallet.ntd = Math.max(0, k(a.wallet))));
  let s = r.at.player > n.at.player ? r : n;
  ((a.player = H(s.player)), (a.at.player = s.at.player));
  let c = r.at.settings > n.at.settings ? r : n;
  ((a.settings = { ...c.settings }), (a.at.settings = c.at.settings));
  let l = r.at.clock > n.at.clock ? r : n;
  (l.clock && (a.clock = { ...l.clock }), (a.at.clock = l.at.clock));
  let u = n.bag ? (r.bag && (r.at.bag ?? 0) > (n.at.bag ?? 0) ? r : n) : r;
  u.bag && ((a.bag = { ...u.bag }), (a.at.bag = u.at.bag ?? 0));
  for (let e of [n, r])
    for (let t of Object.keys(e.bag ?? {}))
      t.startsWith(`car-`) && ((a.bag ??= {})[t] = 1);
  let d = R(n.book, r.book);
  return (d.length && (a.book = d), Ae(a, n));
}
function Ae(e, t) {
  for (let n of ge) t.settings[n] !== void 0 && (e.settings[n] = t.settings[n]);
  return e;
}
function H(e) {
  return JSON.parse(JSON.stringify(e));
}
var je = (e) => {
  let t =
    S(e) && typeof e.lastPlayedAt == `string`
      ? Date.parse(e.lastPlayedAt)
      : NaN;
  return Number.isFinite(t) ? t : 0;
};
function Me(e, t, n) {
  return !S(n) || D(n) ? !1 : N(e, `fold:${t}:${xe(n)}`, j(O(n), t));
}
function Ne(e) {
  let n = Se(e.now),
    r = Object.keys(x).filter((t) => S(e.saves[t])),
    i = r.filter((t) => !D(e.saves[t]));
  for (let t of i) Me(n, t, e.saves[t]);
  (!i.length &&
    r.length &&
    N(n, `mirror`, Math.max(...r.map((t) => j(O(e.saves[t]), t)))),
    r.length || N(n, `start`, Ce(e.here)));
  let a = [...r].sort(
      (t, n) => je(e.saves[n]) - je(e.saves[t]) || +(n === e.at) - (t === e.at),
    ),
    o = a[0];
  if (!o) return n;
  let s = e.saves[o],
    c = je(s);
  ((n.settings = F(s.settings)), (n.at.settings = c));
  let l = S(s.player) ? s.player : {},
    u = e.prefs?.[o],
    f = t(l.character)
      ? l.character
      : S(u) && t(u.character)
        ? u.character
        : void 0;
  (f && (n.player.character = f), T(l.outfit) && (n.player.outfit = l.outfit));
  let p;
  for (let t of a) {
    let n = P(S(e.saves[t]) ? e.saves[t].player?.loadout : void 0);
    if (n) {
      if (!p) {
        p = n;
        continue;
      }
      for (let e of n.owned)
        p.owned.includes(e) ||
          (p.owned.push(e),
          n.ammo[e] !== void 0 && (p.ammo[e] = n.ammo[e]),
          n.mag[e] !== void 0 && (p.mag[e] = n.mag[e]));
    }
  }
  (p && (n.player.loadout = p), (n.at.player = c));
  let m = z({ hour: s.hour, day: s.day, startDate: s.startDate });
  return (m && (n.clock = Pe(m, -d(o))), (n.at.clock = c), n);
}
function Pe(e, t) {
  if (!t || e.hour === void 0) return e;
  let n = e.hour + t,
    r = Math.floor(n / 24);
  return {
    ...e,
    hour: ((n % 24) + 24) % 24,
    day: Math.max(0, (e.day ?? 0) + r),
  };
}
function Fe(e, t, n) {
  let r =
    n === `tokyo`
      ? typeof e.langJa == `boolean`
        ? e.langJa
        : S(e.settings) && typeof e.settings.lang == `string`
          ? e.settings.lang === `ja`
          : void 0
      : void 0;
  if (n === `tokyo`) {
    let r = D(e) ? M(e) : O(e) % 5;
    ((e.yenChange = r), (e.money = A(t.wallet.ntd, n) + r));
  } else e.money = A(t.wallet.ntd, n);
  (Object.keys(t.settings).length &&
    (e.settings = { ...(S(e.settings) ? e.settings : {}), ...t.settings }),
    r !== void 0 &&
      ((e.langJa = r),
      r &&
        (e.settings = { ...(S(e.settings) ? e.settings : {}), lang: `ja` })));
  let i = S(e.player) ? { ...e.player } : {};
  if (
    (t.player.character && (i.character = t.player.character),
    t.player.outfit !== void 0 && (i.outfit = t.player.outfit),
    t.player.loadout && (i.loadout = H(t.player.loadout)),
    Object.keys(i).length && (e.player = i),
    t.bag && (e.bag = { ...t.bag }),
    t.book?.length && (e.bagBook = R(L(e.bagBook), t.book)),
    t.clock &&
      (t.clock.hour !== void 0 && (e.hour = t.clock.hour),
      (e.day = t.clock.day),
      t.clock.startDate && (e.startDate = t.clock.startDate)),
    t.clock && d(n))
  ) {
    let r = Pe(t.clock, d(n));
    (r.hour !== void 0 && (e.hour = r.hour), (e.day = r.day));
  }
  return ((e[ve] = 1), e);
}
function Ie(e) {
  let t = S(e) ? e : {},
    n = S(t.player) ? t.player : {},
    r = { money: O(t), settings: F(t.settings) };
  (typeof n.character == `string` && (r.character = n.character),
    T(n.outfit) && (r.outfit = n.outfit));
  let i = P(n.loadout);
  i && (r.loadout = i);
  let a = z({ hour: t.hour, day: t.day, startDate: t.startDate });
  a && (r.clock = a);
  let o = I(t.bag);
  return (o && (r.bag = o), r);
}
function Le(e, t, n, r = _e) {
  if (!e || !n) {
    let n = H(t);
    for (let t of e?.owned ?? [])
      !r.includes(t) && !n.owned.includes(t) && n.owned.push(t);
    return n;
  }
  let i = H(e);
  for (let e of r) {
    let r = n.owned.includes(e),
      a = t.owned.includes(e);
    (a && !r && !i.owned.includes(e) && i.owned.push(e),
      !a && r && (i.owned = i.owned.filter((t) => t !== e)));
    for (let r of [`ammo`, `mag`]) {
      let a = (t[r][e] ?? 0) - (n[r][e] ?? 0);
      (a && (i[r][e] = Math.max(0, (i[r][e] ?? 0) + a)),
        i.owned.includes(e) || delete i[r][e]);
    }
  }
  return (
    t.armor !== n.armor &&
      (i.armor = Math.max(0, Math.min(100, i.armor + t.armor - n.armor))),
    t.weapon !== n.weapon && (i.weapon = t.weapon),
    i.weapon !== `fists` && !i.owned.includes(i.weapon) && (i.weapon = `fists`),
    i
  );
}
function Re(e, t, n, r, i, a) {
  if (r === `tokyo`) return ze(e, t, n, i, a);
  let o = O(t),
    s = o === n.money ? 0 : we(e, i, (o - n.money) * x[r], a);
  return ((t.money = A(e.wallet.ntd, r)), (n.money = t.money), s);
}
function ze(e, t, n, r, i) {
  let a = O(t),
    o = 0,
    s = M(t);
  if (a !== n.money) {
    let t = s + (a - n.money),
      c = Math.floor(t / 5);
    ((o = we(e, r, c, i)),
      (s = o === c ? t - c * 5 : Math.max(0, Math.min(4, s))));
  }
  return (
    (t.yenChange = s),
    (t.money = A(e.wallet.ntd, `tokyo`) + s),
    (n.money = t.money),
    o
  );
}
function Be(e, n, r, i, a, o) {
  let s = { money: Re(e, n, r, i, a, o), changed: !1 },
    c = F(n.settings),
    l = !1;
  for (let [t, n] of Object.entries(c))
    r.settings[t] !== n &&
      e.settings[t] !== n &&
      ((e.settings[t] = n), (l = !0));
  ((r.settings = c), l && (e.at.settings = o));
  let u = S(n.player) ? n.player : {},
    f = !1;
  (t(u.character) &&
    u.character !== r.character &&
    (e.player.character !== u.character &&
      ((e.player.character = u.character), (f = !0)),
    (r.character = u.character)),
    T(u.outfit) &&
      u.outfit !== r.outfit &&
      (e.player.outfit !== u.outfit && ((e.player.outfit = u.outfit), (f = !0)),
      (r.outfit = u.outfit)));
  let p = P(u.loadout);
  if (p && JSON.stringify(p) !== JSON.stringify(r.loadout)) {
    let t = Le(e.player.loadout, p, r.loadout);
    (JSON.stringify(t) !== JSON.stringify(e.player.loadout) &&
      ((e.player.loadout = t), (f = !0)),
      (r.loadout = p));
  }
  f && (e.at.player = o);
  let m = I(n.bag),
    h = !1;
  if (m && JSON.stringify(m) !== JSON.stringify(r.bag ?? {})) {
    let t = Te(e.bag, m, r.bag);
    (JSON.stringify(t) !== JSON.stringify(e.bag ?? {}) &&
      ((e.bag = t), (e.at.bag = o), (h = !0)),
      (n.bag = { ...t }),
      (r.bag = { ...t }));
  }
  let g = L(n.bagBook);
  if (g?.length) {
    let t = R(e.book, g);
    (t.length !== (e.book?.length ?? 0) && ((e.book = t), (h = !0)),
      (n.bagBook = [...t]));
  }
  let _ = z({ hour: n.hour, day: n.day, startDate: n.startDate });
  return (
    _ &&
      JSON.stringify(_) !== JSON.stringify(r.clock) &&
      ((e.clock = Pe(_, -d(i))),
      (e.at.clock = o),
      (r.clock = _),
      (s.changed = !0)),
    (n[ve] = 1),
    (s.changed ||= l || f || h),
    s
  );
}
function Ve(e, t) {
  let n = t.depMin / 60 + t.hours;
  t.from && (n -= d(t.from));
  let r = {
    day: (e?.day ?? 0) + +!!t.nextDay + Math.floor(n / 24),
    hour: ((n % 24) + 24) % 24,
  };
  return (e?.startDate && (r.startDate = e.startDate), r);
}
var U = `gta-travel-v1`,
  W = c,
  G = (e, t, n) =>
    typeof e == `number` && Number.isFinite(e) && e >= t && e <= n ? e : null,
  K = (e, t = 40) =>
    typeof e == `string` && e.length > 0 && e.length <= t ? e : null;
function He(e) {
  if (!e || typeof e != `object`) return null;
  let t = e,
    r = K(t.id),
    i = K(t.flight, 16),
    a = K(t.gate, 8),
    o = K(t.seat, 8);
  if (!r || !i || !W(t.from) || !W(t.to) || t.from === t.to) return null;
  let s = G(t.depMin, 0, 1440),
    c = G(t.hours, 0, 24),
    l = G(t.fare, 0, 1e9),
    u = G(t.cash, 0, 0xe8d4a51000),
    d = G(t.credit, 0, 0xe8d4a51000),
    f = G(t.issued, 0, 0x38d7ea4c68000);
  return s === null ||
    c === null ||
    l === null ||
    u === null ||
    d === null ||
    f === null
    ? null
    : {
        id: r,
        from: t.from,
        to: t.to,
        flight: i,
        gate: a ?? `1`,
        seat: o ?? `1A`,
        depMin: s,
        nextDay: t.nextDay === !0,
        hours: c,
        fare: Math.round(l),
        cash: Math.round(u),
        credit: Math.round(d),
        promo: t.promo === !0 || void 0,
        issued: f,
        lang: t.lang === `en` ? `en` : `zh`,
        passenger: n(t.passenger),
        ...(t.v === 2 ? { v: 2 } : {}),
        ...(t.mode === `hsr` ? { mode: `hsr` } : {}),
      };
}
function q(e) {
  let t = e && typeof e == `object` ? e : {},
    n = { v: 1, flights: 0, stamps: {} };
  (G(t.updatedAt, 0, 0x38d7ea4c68000) !== null && (n.updatedAt = t.updatedAt),
    Array.isArray(t.resolved) &&
      (n.resolved = t.resolved
        .flatMap((e) => {
          let t = He(e?.ticket),
            n = G(e?.at, 0, 0x38d7ea4c68000);
          return t &&
            n !== null &&
            (e.status === `arrived` || e.status === `cancelled`)
            ? [{ ticket: t, status: e.status, at: n }]
            : [];
        })
        .sort((e, t) => t.at - e.at)
        .filter(
          (e, t, n) => n.findIndex((t) => t.ticket.id === e.ticket.id) === t,
        )
        .slice(0, 20)),
    W(t.at) && (n.at = t.at));
  let r = He(t.ticket);
  r && (n.ticket = r);
  let i = G(t.flights, 0, 1e6);
  if (
    (i !== null && (n.flights = Math.floor(i)),
    t.stamps && typeof t.stamps == `object`)
  )
    for (let [e, r] of Object.entries(t.stamps)) {
      let t = G(r, 0, 0x38d7ea4c68000);
      W(e) && t !== null && (n.stamps[e] = t);
    }
  let a = t.last;
  a &&
    typeof a == `object` &&
    K(a.id) &&
    W(a.from) &&
    W(a.to) &&
    (n.last = {
      id: a.id,
      from: a.from,
      to: a.to,
      flight: K(a.flight, 16) ?? ``,
      at: G(a.at, 0, 0x38d7ea4c68000) ?? 0,
      fare: Math.round(G(a.fare, 0, 1e9) ?? 0),
      cash: Math.round(G(a.cash, 0, 0xe8d4a51000) ?? 0),
      credit: Math.round(G(a.credit, 0, 0xe8d4a51000) ?? 0),
    });
  let o = B(t.shared);
  return (o && (n.shared = o), n);
}
function J() {
  try {
    let e = localStorage.getItem(U);
    return q(e ? JSON.parse(e) : null);
  } catch {
    return q(null);
  }
}
function Y(e) {
  try {
    return (
      localStorage.setItem(U, JSON.stringify({ ...e, updatedAt: Date.now() })),
      typeof window < `u` && window.dispatchEvent(new Event(`travel:changed`)),
      !0
    );
  } catch {
    return !1;
  }
}
function Ue(e = Date.now(), t = Math.random) {
  return `${e.toString(36)}-${Math.floor(t() * 36 ** 6)
    .toString(36)
    .padStart(6, `0`)}`;
}
function X(e) {
  let t = e && typeof e == `object` ? e.travel : void 0;
  if (!t || typeof t != `object`) return {};
  let n = t,
    r = {};
  typeof n.out == `string` && n.out && (r.out = n.out);
  for (let e of [`in`, `paid`, `refunded`])
    Array.isArray(n[e]) &&
      (r[e] = n[e]
        .filter((e) => typeof e == `string` && e.length > 0)
        .slice(-20));
  return (n.arrivalOnly === !0 && (r.arrivalOnly = !0), r);
}
function We(e, t, n = Date.now()) {
  let r = { ...e, stamps: { ...e.stamps } };
  return (
    r.ticket?.id === t.id && delete r.ticket,
    e.last?.id !== t.id &&
      !e.resolved?.some(
        (e) => e.ticket.id === t.id && e.status === `arrived`,
      ) &&
      ((r.flights = e.flights + 1),
      (r.last = {
        id: t.id,
        from: t.from,
        to: t.to,
        flight: t.flight,
        at: n,
        fare: t.fare,
        cash: t.cash,
        credit: t.credit,
      })),
    r.stamps[t.to] === void 0 && (r.stamps[t.to] = n),
    (r.at = t.to),
    Ge(r, t, `arrived`, n)
  );
}
function Ge(e, t, n, r) {
  let i = q({
    ...e,
    updatedAt: r,
    resolved: [{ ticket: t, status: n, at: r }, ...(e.resolved ?? [])],
  });
  return (i.ticket?.id === t.id && delete i.ticket, i);
}
function Ke(e, t) {
  let n = q(e),
    r = q(t),
    i = q({
      ...((r.updatedAt ?? r.last?.at ?? r.ticket?.issued ?? 0) >
      (n.updatedAt ?? n.last?.at ?? n.ticket?.issued ?? 0)
        ? r
        : n),
      flights: Math.max(n.flights, r.flights),
      resolved: [...(n.resolved ?? []), ...(r.resolved ?? [])],
    });
  for (let e of p) {
    let t = [n.stamps[e], r.stamps[e]].filter((e) => e !== void 0);
    t.length && (i.stamps[e] = Math.min(...t));
  }
  ((i.last = (r.last?.at ?? 0) > (n.last?.at ?? 0) ? r.last : n.last),
    (i.ticket = [n.ticket, r.ticket]
      .filter((e) => !!e && !i.resolved?.some((t) => t.ticket.id === e.id))
      .sort((e, t) => t.issued - e.issued)[0]));
  let a = ke(n.shared, r.shared);
  return (a ? (i.shared = a) : delete i.shared, i);
}
function qe(e, t, n = 500) {
  let r = X(e);
  if (r.in?.includes(t.id)) return !1;
  let i = typeof e.money == `number` && Number.isFinite(e.money) ? e.money : n;
  return (
    (e.money = Math.max(0, Math.round(i + t.credit))),
    (e.travel = { ...r, in: [...(r.in ?? []), t.id].slice(-20) }),
    !0
  );
}
function Je(e, t) {
  let n = X(e);
  return (
    !n.in?.includes(t.id) &&
    ((e.travel = { ...n, in: [...(n.in ?? []), t.id].slice(-20) }), !0)
  );
}
function Ye(e, t) {
  let n = X(e);
  if (n.out !== t.id) return 0;
  let r = t.fare + t.cash,
    i = { ...n, refunded: [...(n.refunded ?? []), t.id].slice(-20) };
  return (delete i.out, (e.travel = i), r);
}
var Xe = class extends Error {},
  Z =
    f.tokyo?.saveKey === `tokyo-rush-save-v1`
      ? `tokyo`
      : f.kaohsiung.saveKey === `tokyo-rush-save-v1`
        ? `kaohsiung`
        : f[`hong-kong`].saveKey === `tokyo-rush-save-v1`
          ? `hong-kong`
          : `taipei`,
  Ze = `gta-travel-device-v1`,
  Q = null;
function Qe() {
  if (Q) return Q;
  let e = () =>
    (
      globalThis.crypto?.randomUUID?.() ??
      `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
    )
      .replace(/[^\w-]/g, ``)
      .slice(0, 36);
  try {
    let t = localStorage.getItem(Ze);
    if (t && /^[\w-]{8,40}$/.test(t)) return (Q = t);
    let n = e();
    return (localStorage.setItem(Ze, n), (Q = (localStorage.getItem(Ze), n)));
  } catch {
    return (Q = e());
  }
}
function $e(e) {
  try {
    let t = JSON.parse(localStorage.getItem(f[e].prefsKey) || `null`);
    return t && typeof t == `object` && !Array.isArray(t) ? t : null;
  } catch {
    return null;
  }
}
function et() {
  try {
    return r(f[u(Z)].saveKey);
  } catch {
    return null;
  }
}
function tt(e) {
  try {
    let t = r(f[e].saveKey);
    return o(t) ? null : t;
  } catch {
    return null;
  }
}
function nt(e, t, n = Date.now()) {
  let r = u(Z),
    i = { [Z]: o(t) ? null : t, [r]: et() };
  o(i[r]) && (i[r] = null);
  for (let e of l(Z)) e !== r && (i[e] = tt(e));
  let a = !1;
  if (!e.shared)
    ((e.shared = Ne({
      here: Z,
      now: n,
      saves: i,
      prefs: Object.fromEntries([Z, ...l(Z)].map((e) => [e, $e(e)])),
      at: e.at,
    })),
      (a = !0),
      console.info(
        `[travel] shared wallet created: NT$${e.shared.wallet.ntd} (${Object.keys(e.shared.wallet.seeds).join(`, `) || `empty`})`,
      ));
  else
    for (let t of [Z, ...l(Z)])
      Me(e.shared, t, i[t]) &&
        ((a = !0),
        console.info(
          `[travel] ${t}'s save folded into the shared wallet: NT$${e.shared.wallet.ntd}`,
        ));
  let s = e.shared.wallet,
    c =
      Object.keys(s.seeds).every((e) => e === `start`) &&
      Object.values(s.dev).every((e) => !e.e && !e.s) &&
      !s.market?.conflict &&
      Object.keys(s.market?.lanes ?? {}).length === 0,
    d = Ce(Z);
  return (
    c &&
      !(t && typeof t == `object`) &&
      (s.seeds.start ?? 0) < d &&
      ((s.seeds.start = d), (s.ntd = Math.max(0, k(s))), (a = !0)),
    { rec: e, changed: a }
  );
}
function rt(e, t = Date.now()) {
  let n = { arrival: null, cancelled: null };
  try {
    let r = a();
    if (o(r)) return n;
    let i = r && typeof r == `object` && !Array.isArray(r) ? r : null,
      { rec: s, changed: c } = nt(J(), i, t),
      l = s.ticket;
    (l && l.to === Z
      ? (n.arrival = at(s, i, l, t, e))
      : l && l.from === Z
        ? (n.cancelled = ot(s, i, l, t))
        : (!c || Y(s)) && it(i, s),
      st(J().shared));
  } catch (e) {
    console.warn(`[travel] boot failed`, e);
  }
  return n;
}
function it(e, t, n = !1) {
  if (!e || !t.shared) return;
  let r = JSON.stringify(e);
  (Fe(e, t.shared, Z), (n || JSON.stringify(e) !== r) && s(e) && n && i());
}
function at(e, t, n, r, i) {
  let a = !t,
    o = t ?? {},
    s = e.shared;
  (n.credit > 0 &&
    !X(o).in?.includes(n.id) &&
    N(s, `ticket:${n.id}`, j(n.credit, Z)),
    Je(o, n),
    a && (o.travel = { ...o.travel, arrivalOnly: !0 }),
    (o.lastPlayedAt = new Date(r).toISOString()),
    s.player.character || (s.player.character = n.passenger));
  let c = a ? null : i(n.mode === `hsr` ? `hsr` : `flight`);
  if (c) {
    o.pos = { x: c.x, z: c.z, heading: c.heading };
    let e = o.player;
    e && typeof e == `object` && delete e.at;
  }
  let l = Ve(s.clock, n);
  ((s.clock = l), (s.at.clock = r));
  let u = We(e, n, r);
  return Y(u)
    ? (it(o, u, !0),
      console.info(
        `[travel] arrived ${n.flight} ${f[n.from].airport.code} → ${f[n.to].airport.code}${n.credit > 0 ? `: +${n.credit} ${f[n.to].currency} (an old ticket's cash)` : ``}${a ? ` (first visit — new game)` : ``}`,
      ),
      { ticket: n, first: a, hour: l.hour ?? 12, record: u })
    : null;
}
function ot(e, t, n, r) {
  let i = !!t && X(t).out === n.id,
    a = t ? Ye(t, n) : 0;
  a && N(e.shared, `refund:${n.id}`, j(a, n.from));
  let o = Ge(e, n, `cancelled`, r);
  return Y(o)
    ? (it(t, o, i),
      console.info(
        `[travel] ${n.flight} to ${n.to} never arrived — cancelled, ${a} refunded`,
      ),
      { ticket: n, refund: a })
    : null;
}
function st(e) {
  let t = e?.player.character;
  if (t)
    try {
      let e = $e(Z) ?? {};
      if (e.character === t) return;
      ((e.character = t),
        localStorage.setItem(f[Z].prefsKey, JSON.stringify(e)));
    } catch {}
}
function ct(e) {
  if (o(e)) return e;
  try {
    let { rec: t, changed: n } = nt(J(), e);
    return n && !Y(t)
      ? e
      : Fe(
          e && typeof e == `object` && !Array.isArray(e) ? { ...e } : {},
          t.shared,
          Z,
        );
  } catch (t) {
    return (console.warn(`[travel] shared state unavailable`, t), e);
  }
}
function lt() {
  let e = J().shared;
  return e ? e.wallet.ntd : null;
}
function ut(e) {
  let t = lt();
  return t === null ? null : A(t, e);
}
function $() {
  try {
    return localStorage.getItem(U);
  } catch {
    return null;
  }
}
function dt() {
  try {
    let e = localStorage.getItem(`gta-travel-v1:identities-v1`) ?? ``;
    return /^\{"active":"([^"]*)"/.exec(e)?.[1] ?? `guest`;
  } catch {
    return `guest`;
  }
}
var ft = class {
  st;
  onRemote;
  base;
  seen;
  identity;
  constructor(e, t) {
    ((this.st = e),
      (this.onRemote = t),
      (this.base = Ie(e.data)),
      (this.seen = $()),
      (this.identity = dt()),
      typeof window < `u` &&
        typeof window.addEventListener == `function` &&
        (window.addEventListener(`storage`, (e) => {
          (e.key === null || e.key === `gta-travel-v1`) && this.refresh();
        }),
        window.addEventListener(`travel:applied`, () => this.refresh())));
  }
  foreign() {
    return this.st.resetting || dt() !== this.identity;
  }
  money() {
    this.sync(!1);
  }
  save() {
    this.sync(!0);
  }
  sync(e) {
    if (this.foreign()) return;
    let t = this.st.data,
      n = t.money,
      r = JSON.stringify(this.base);
    try {
      let r = J(),
        i = !1;
      r.shared || ({ rec: r, changed: i } = nt(r, null));
      let a = r.shared,
        o = typeof n == `number` && n !== this.base.money,
        s = Date.now();
      if (
        (e
          ? (i = Be(a, t, this.base, Z, Qe(), s).changed || i)
          : Re(a, t, this.base, Z, Qe(), s),
        (o || i) && !Y(r))
      )
        throw new Xe();
      this.seen = $();
    } catch (e) {
      ((t.money = n),
        (this.base = JSON.parse(r)),
        e instanceof Xe || console.warn(`[travel] shared sync failed`, e));
    }
  }
  refresh() {
    if (this.st.resetting || $() === this.seen || this.foreign()) return;
    let e = this.st.data,
      t = e.money;
    if (typeof t == `number` && t !== this.base.money) this.sync(!1);
    else {
      let t = J().shared;
      if (((this.seen = $()), !t)) return;
      ((e.money = A(t.wallet.ntd, Z) + M(e)), (this.base.money = e.money));
    }
    e.money !== t && this.onRemote(e.money);
  }
  rebase() {
    ((this.base = Ie(this.st.data)), (this.seen = $()));
  }
};
export {
  b as A,
  M as C,
  se as D,
  re as E,
  fe as F,
  de as I,
  ae as L,
  ue as M,
  ce as N,
  pe as O,
  me as P,
  oe as R,
  A as S,
  ne as T,
  Oe as _,
  lt as a,
  L as b,
  qe as c,
  Ue as d,
  J as f,
  x as g,
  Y as h,
  ct as i,
  le as j,
  te as k,
  Je as l,
  X as m,
  Z as n,
  ut as o,
  q as p,
  rt as r,
  U as s,
  ft as t,
  Ke as u,
  D as v,
  ie as w,
  R as x,
  I as y,
};
