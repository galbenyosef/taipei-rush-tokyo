import { t as e } from "./ja-anaGONx4.js";
import {
  Ar as t,
  Ln as n,
  Pn as r,
  Qn as i,
  Zn as a,
  ir as o,
  vr as s,
} from "./engine-14d5lda2.js";
import {
  _ as c,
  c as l,
  d as u,
  f as d,
  n as f,
  r as p,
  v as m,
  y as h,
} from "./cities-tfcRdmsJ.js";
var g = (e, t) => ({ zh: e, en: t }),
  _ = (e) => ({ kind: `heal`, hp: e }),
  v = (e, t, n, r, i, a, o = 100, s = `taipei`) => ({
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
  y = (e, t, n, r, i, a = `taipei`) => ({
    id: t,
    shelf: `keep`,
    cat: e,
    name: n,
    blurb: r,
    hint: i,
    max: 100,
    city: a,
  }),
  b = (t, n) =>
    g(
      e.on ? e.t(`${t}夜市`, `${e.jz(t)}夜市`) : `${t}夜市`,
      `${n} Night Market`,
    ),
  x = g(`夾娃娃機店`, `Claw-machine arcades`),
  ee = [
    v(
      `food`,
      `tea-egg`,
      g(`茶葉蛋`, `Tea egg`),
      g(
        `超商門口那鍋，滷了三天三夜。`,
        `From the pot by the convenience-store door, simmered for days.`,
      ),
      g(`超商櫃檯`, `Convenience-store counter`),
      _(25),
    ),
    v(
      `food`,
      `chicken-cutlet`,
      g(`炸雞排`, `Fried chicken cutlet`),
      g(`比臉還大，不切要辣。`, `Bigger than your face. Uncut, extra spicy.`),
      b(`士林`, `Shilin`),
      _(50),
    ),
    v(
      `food`,
      `salt-crispy-chicken`,
      g(`鹹酥雞`, `Salty crispy chicken`),
      g(
        `九層塔一定要炸，胡椒粉灑好灑滿。`,
        `Fry the basil too. Pepper powder, lots of it.`,
      ),
      b(`士林`, `Shilin`),
      _(40),
    ),
    v(
      `food`,
      `oyster-omelet`,
      g(`蚵仔煎`, `Oyster omelette`),
      g(
        `紅色甜辣醬淋滿，地瓜粉煎到 QQ 的。`,
        `Smothered in sweet-chili sauce, chewy with sweet-potato starch.`,
      ),
      b(`寧夏`, `Ningxia`),
      _(45),
    ),
    v(
      `food`,
      `stinky-tofu`,
      g(`臭豆腐`, `Stinky tofu`),
      g(
        `聞起來臭，吃起來香，泡菜要多夾。`,
        `Smells awful, tastes great. Extra pickled cabbage.`,
      ),
      g(`公館`, `Gongguan`),
      _(35),
    ),
    v(
      `food`,
      `big-sausage`,
      g(`大腸包小腸`, `Sausage in a rice sausage`),
      g(
        `糯米腸夾香腸，台式熱狗堡。`,
        `A sausage tucked in a sticky-rice sausage: the Taiwanese hot dog.`,
      ),
      b(`寧夏`, `Ningxia`),
      _(45),
    ),
    v(
      `food`,
      `pepper-bun`,
      g(`胡椒餅`, `Pepper bun`),
      g(
        `炭爐現烤，第一口小心湯汁噴出來。`,
        `Baked on the clay oven wall. Mind the hot juice on the first bite.`,
      ),
      b(`饒河`, `Raohe`),
      _(35),
    ),
    v(
      `food`,
      `gua-bao`,
      g(`刈包`, `Gua bao`),
      g(
        `台式漢堡：滷肉、酸菜、花生粉、香菜。`,
        `The Taiwanese burger: braised pork, pickles, peanut powder, coriander.`,
      ),
      g(`公館`, `Gongguan`),
      _(35),
    ),
    v(
      `food`,
      `braised-pork-rice`,
      g(`滷肉飯`, `Braised pork rice`),
      g(
        `一碗銅板價，再加一顆滷蛋。`,
        `Pocket-change price. Add a braised egg.`,
      ),
      b(`華西街`, `Huaxi Street`),
      _(50),
    ),
    v(
      `food`,
      `beef-noodles`,
      g(`牛肉麵`, `Beef noodle soup`),
      g(
        `紅燒還是清燉？酸菜自己加。`,
        `Braised or clear broth? Help yourself to the pickles.`,
      ),
      g(`永康街`, `Yongkang Street`),
      _(70),
    ),
    v(
      `food`,
      `xiaolongbao`,
      g(`小籠包`, `Soup dumplings`),
      g(
        `十八摺，先咬一小口喝湯。`,
        `Eighteen folds. Nibble a hole, sip the soup first.`,
      ),
      g(`永康街`, `Yongkang Street`),
      _(40),
    ),
    v(
      `food`,
      `scallion-pancake`,
      g(`蔥抓餅`, `Scallion pancake`),
      g(`加蛋加起司，抓鬆了才好吃。`, `Add egg and cheese. Scrunch it fluffy.`),
      g(`早餐店`, `Breakfast shops`),
      _(30),
    ),
    v(
      `food`,
      `rice-roll`,
      g(`飯糰`, `Rice roll`),
      g(
        `紫米包油條、肉鬆、菜脯，一顆吃到中午。`,
        `Purple rice round a fried dough stick: lasts you till lunch.`,
      ),
      g(`早餐店`, `Breakfast shops`),
      _(40),
    ),
    v(
      `food`,
      `oden`,
      g(`關東煮`, `Oden`),
      g(
        `超商冬天最熱賣，甜不辣一定要拿。`,
        `The convenience store winter favourite. Get the tempura.`,
      ),
      g(`超商櫃檯`, `Convenience-store counter`),
      _(45),
    ),
    v(
      `food`,
      `ba-wan`,
      g(`肉圓`, `Ba-wan`),
      g(
        `Q 彈外皮包肉餡，淋上甜辣醬。`,
        `Chewy translucent skin round pork, sweet sauce on top.`,
      ),
      b(`華西街`, `Huaxi Street`),
      _(40),
    ),
    v(
      `food`,
      `pig-blood-cake`,
      g(`豬血糕`, `Pig blood cake`),
      g(
        `沾醬油膏，滾花生粉，撒香菜。`,
        `Dipped in soy paste, rolled in peanut powder, coriander on top.`,
      ),
      b(`寧夏`, `Ningxia`),
      _(30),
    ),
    v(
      `food`,
      `sweet-potato-balls`,
      g(`地瓜球`, `Sweet potato balls`),
      g(
        `QQ 球，壓扁了會再膨起來。`,
        `Chewy balls that puff right back up when squeezed.`,
      ),
      b(`饒河`, `Raohe`),
      _(20),
    ),
    v(
      `food`,
      `wheel-cake`,
      g(`車輪餅`, `Wheel cake`),
      g(
        `紅豆派還是奶油派？吵了幾十年。`,
        `Red bean or custard? The debate never ends.`,
      ),
      b(`師大`, `Shida`),
      _(20),
    ),
    v(
      `food`,
      `tanghulu`,
      g(`糖葫蘆`, `Candied strawberry skewer`),
      g(
        `糖衣咬下去喀一聲，黏到牙齒也甘願。`,
        `The sugar shell cracks on the first bite. Worth the sticky teeth.`,
      ),
      b(`樂華`, `Lehua`),
      _(20),
    ),
    v(
      `food`,
      `takoyaki`,
      g(`章魚燒`, `Takoyaki`),
      g(
        `一盒六顆，柴魚片在上面跳舞，第一顆會燙嘴。`,
        `Six to a boat, bonito flakes dancing on top. The first one burns.`,
      ),
      b(`師大`, `Shida`),
      _(35),
    ),
    v(
      `food`,
      `egg-cake`,
      g(`雞蛋糕`, `Egg cakes`),
      g(
        `小熊小花一袋裝，邊走邊吃，最後一顆都碎了。`,
        `Little bears and flowers in a paper bag. The last one is always crumbs.`,
      ),
      b(`寧夏`, `Ningxia`),
      _(25),
    ),
    v(
      `food`,
      `salmon-nigiri`,
      g(`鮭魚握壽司`, `Salmon nigiri`),
      g(
        `2021 年三月，有人為了它去改名。`,
        `In March 2021, people changed their legal names for it.`,
      ),
      g(`西門町 迴轉壽司`, `Conveyor sushi, Ximending`),
      _(20),
    ),
    v(
      `food`,
      `mango-ice`,
      g(`芒果冰`, `Mango shaved ice`),
      g(`夏天限定，煉乳淋好淋滿。`, `Summer only. Condensed milk, generously.`),
      g(`永康街`, `Yongkang Street`),
      _(30),
    ),
    v(
      `food`,
      `douhua`,
      g(`豆花`, `Douhua`),
      g(
        `花生、粉圓、薑汁，冷熱都好吃。`,
        `Peanuts, tapioca, ginger syrup. Hot or cold.`,
      ),
      b(`饒河`, `Raohe`),
      _(25),
    ),
    v(
      `food`,
      `railway-bento`,
      g(`台鐵便當`, `Railway bento`),
      g(
        `排骨、滷蛋、一片黃蘿蔔，火車上的味道。`,
        `Pork chop, braised egg, a slice of yellow radish: the taste of a train ride.`,
      ),
      g(`臺北車站`, `Taipei Main Station`),
      _(60),
    ),
    v(
      `food`,
      `grilled-sausage`,
      g(`烤香腸`, `Grilled sausage`),
      g(
        `配一瓣生蒜，賭一把十八啦。`,
        `With a raw garlic clove. Roll the dice for another.`,
      ),
      b(`饒河`, `Raohe`),
      _(25),
    ),
    v(
      `food`,
      `egg-crepe`,
      g(`蛋餅`, `Egg crepe`),
      g(
        `早餐店必點，醬油膏還是辣椒醬？`,
        `Breakfast-shop classic. Soy paste or chili?`,
      ),
      g(`早餐店`, `Breakfast shops`),
      _(30),
    ),
    v(
      `food`,
      `philosophy-noodles`,
      g(`哲學麵`, `Philosophy Noodles`),
      g(
        `捏碎、撒粉、搖一搖，直接乾吃。`,
        `Crush it, add the powder, shake, eat it dry.`,
      ),
      g(`超商櫃檯`, `Convenience-store counter`),
      _(10),
    ),
    v(
      `drink`,
      `bubble-tea`,
      g(`珍珠奶茶`, `Bubble milk tea`),
      g(`半糖少冰，珍珠要大顆。`, `Half sugar, less ice, big pearls.`),
      g(`手搖飲店`, `Tea shops`),
      _(15),
    ),
    v(
      `drink`,
      `energy-drink`,
      g(`提神飲料`, `Energy tonic`),
      g(
        `工地與夜班的能量來源，喝了跑更快。`,
        `What keeps building sites and night shifts going. Run faster.`,
      ),
      g(`檳榔攤`, `Betel-nut stands`),
      { kind: `sprint`, sec: 60 },
    ),
    v(
      `drink`,
      `black-tea`,
      g(`大冰紅`, `Big iced black tea`),
      g(
        `早餐店的大杯冰紅茶，甜到發光。`,
        `The breakfast shop’s big iced black tea. Glowing sweet.`,
      ),
      g(`早餐店`, `Breakfast shops`),
      _(15),
    ),
    v(
      `drink`,
      `papaya-milk`,
      g(`木瓜牛奶`, `Papaya milk`),
      g(
        `現打一杯，夜市的甜蜜收尾。`,
        `Blended to order: the sweet end of a night-market walk.`,
      ),
      b(`寧夏`, `Ningxia`),
      _(20),
    ),
    v(
      `drink`,
      `soy-milk`,
      g(`豆漿`, `Soy milk`),
      g(
        `永和來的，甜的鹹的都有。`,
        `From Yonghe. Sweet, or the salty curdled kind.`,
      ),
      g(`永和`, `Yonghe`),
      _(15),
    ),
    v(
      `drink`,
      `winter-melon-tea`,
      g(`冬瓜茶`, `Winter-melon tea`),
      g(`古早味，甜到心坎裡。`, `Old-school and very, very sweet.`),
      b(`師大`, `Shida`),
      _(15),
    ),
    v(
      `drink`,
      `herbal-tea`,
      g(`青草茶`, `Herbal tea`),
      g(`阿嬤說喝了會退火。`, `Grandma says it cools your inner heat.`),
      g(`萬華青草巷`, `Herb Lane, Wanhua`),
      _(15),
    ),
    v(
      `drink`,
      `store-coffee`,
      g(`超商咖啡`, `Convenience-store coffee`),
      g(`第二杯半價，衝刺 90 秒。`, `Second cup half price. Sprint for 90 s.`),
      g(`超商櫃檯`, `Convenience-store counter`),
      { kind: `sprint`, sec: 90 },
    ),
    v(
      `drink`,
      `marble-soda`,
      g(`彈珠汽水`, `Marble soda`),
      g(`彈珠永遠卡在瓶口。`, `The marble always blocks the neck.`),
      g(`超商櫃檯`, `Convenience-store counter`),
      _(10),
    ),
    v(
      `food`,
      `a-gei`,
      g(`淡水阿給`, `Tamsui a-gei`),
      g(
        `油豆腐塞冬粉，淋上紅醬。`,
        `Fried tofu stuffed with glass noodles, red sauce on top.`,
      ),
      g(`淡水老街`, `Tamsui Old Street`),
      _(35),
    ),
    v(
      `food`,
      `iron-egg`,
      g(`鐵蛋`, `Iron egg`),
      g(
        `滷了又風乾，越嚼越香。`,
        `Braised and dried until chewy. Gets better with every bite.`,
      ),
      g(`淡水老街`, `Tamsui Old Street`),
      _(20),
    ),
    v(
      `food`,
      `hot-spring-egg`,
      g(`溫泉蛋`, `Hot-spring egg`),
      g(
        `北投地熱煮的，蛋白半熟滑滑的。`,
        `Cooked in Beitou’s hot water. Silky, half-set white.`,
      ),
      g(`北投溫泉`, `Beitou hot springs`),
      _(20),
    ),
    v(
      `temple`,
      `mazu-amulet`,
      g(`平安符`, `Temple amulet`),
      g(
        `廟裡求來的，阿嬤說戴著就平安。`,
        `From the temple. Grandma says wear it and you will be safe.`,
      ),
      g(`行天宮`, `Xingtian Temple`),
      { kind: `armor`, amount: 50 },
      100,
    ),
    y(
      `temple`,
      `moon-blocks`,
      g(`筊杯`, `Moon blocks`),
      g(`一正一反是聖筊，神明說可以。`, `One up, one down: the gods say yes.`),
      g(`龍山寺`, `Longshan Temple`),
    ),
    y(
      `temple`,
      `red-thread`,
      g(`月老紅線`, `Matchmaker’s red thread`),
      g(
        `城隍廟的月老很靈，單身的快去求。`,
        `The Old Man under the Moon at the City God temple works. Singles, go.`,
      ),
      g(`霞海城隍廟`, `Xiahai City God Temple`),
    ),
    v(
      `temple`,
      `fortune-slip`,
      g(`籤詩`, `Fortune slip`),
      g(
        `擲出聖筊才能抽，上上籤要好好收著。`,
        `Draw it after a yes from the moon blocks. Keep the best ones.`,
      ),
      g(`拜拜時求`, `Pray at a shrine`),
      { kind: `fortune` },
      100,
    ),
    y(
      `temple`,
      `joss-paper`,
      g(`金紙`, `Joss paper`),
      g(
        `初一十五，燒給好兄弟。`,
        `Burned on the 1st and 15th for the wandering spirits.`,
      ),
      g(`拜拜時拿`, `Pray at a shrine`),
    ),
    y(
      `temple`,
      `incense`,
      g(`一把香`, `Incense sticks`),
      g(`三炷香，先拜天公。`, `Three sticks. The Jade Emperor first.`),
      g(`拜拜時拿`, `Pray at a shrine`),
    ),
    y(
      `temple`,
      `firecracker`,
      g(`鞭炮`, `Firecrackers`),
      g(
        `神明出巡，鞭炮放到看不見路。`,
        `When the gods parade, the smoke hides the street.`,
      ),
      g(`士林慈諴宮`, `Cixian Temple, Shilin`),
    ),
    v(
      `temple`,
      `red-envelope`,
      g(`紅包`, `Red envelope`),
      g(
        `過年長輩給的，媽媽說幫你存起來。`,
        `From your elders at New Year. Mom says she will keep it safe for you.`,
      ),
      g(`任務獎勵`, `Mission rewards`),
      { kind: `money`, min: 200, max: 1200 },
      100,
      `both`,
    ),
    y(
      `temple`,
      `pilgrimage-towel`,
      g(`遶境毛巾`, `Pilgrimage towel`),
      g(
        `跟著媽祖走，毛巾掛脖子，一路有人請吃。`,
        `Walk with Mazu, towel round your neck: people feed you all the way.`,
      ),
      g(`松山慈祐宮`, `Songshan Ciyou Temple`),
    ),
    y(
      `temple`,
      `offering-tower`,
      g(`乖寶塔`, `Snack offering tower`),
      g(
        `中元普渡的零食塔，綠色的要放最上面。`,
        `The Ghost Month snack tower. Green bags go on top.`,
      ),
      g(`三重先嗇宮`, `Xianse Temple, Sanchong`),
    ),
    y(
      `life`,
      `blue-white-slippers`,
      g(`藍白拖`, `Blue-and-white slippers`),
      g(
        `國民拖鞋，也是媽媽手中的神兵利器。`,
        `The national slipper — and mom's weapon of choice.`,
      ),
      g(`萬華青草巷`, `Herb Lane, Wanhua`),
    ),
    y(
      `life`,
      `red-white-bag`,
      g(`紅白塑膠袋`, `Red-and-white plastic bag`),
      g(
        `台灣國袋，什麼都裝得下。`,
        `Taiwan's national bag. It holds everything.`,
      ),
      b(`寧夏`, `Ningxia`),
    ),
    y(
      `life`,
      `rice-cooker`,
      g(`大桶電鍋`, `Datong-style rice cooker`),
      g(
        `外鍋一杯水，什麼都能蒸。用了三十年還沒壞。`,
        `One cup of water outside, steams anything. Thirty years and still going.`,
      ),
      g(`大稻埕迪化街`, `Dihua Street, Dadaocheng`),
    ),
    y(
      `life`,
      `plastic-stool`,
      g(`紅色塑膠椅`, `Red plastic stool`),
      g(
        `辦桌、熱炒、廟口，哪裡都有它。`,
        `Banquets, stir-fry joints, temple squares — it is everywhere.`,
      ),
      b(`華西街`, `Huaxi Street`),
    ),
    y(
      `life`,
      `trash-bag`,
      g(`專用垃圾袋`, `City garbage bag`),
      g(
        `聽到《少女的祈禱》，提著它衝出門。`,
        `Hear 'A Maiden's Prayer'? Grab it and run outside.`,
      ),
      g(`永康街巷子`, `A Yongkang Street lane`),
    ),
    y(
      `life`,
      `tissue-pack`,
      g(`選舉面紙`, `Campaign tissue pack`),
      g(
        `候選人送的面紙，選完還能用很久。`,
        `A candidate handed it out. Lasts long after the election.`,
      ),
      g(`忠孝復興站出口`, `Zhongxiao Fuxing station exit`),
    ),
    v(
      `life`,
      `green-guai`,
      g(`綠色乖寶`, `Green Guai-Bao snack`),
      g(
        `工程師的守護神：機器旁放一包就不會當機。一定要綠色的。`,
        `The engineers' charm: a bag next to the machine and it never crashes. Green only.`,
      ),
      g(`超商櫃檯`, `Convenience-store counter`),
      { kind: `repair` },
      100,
    ),
    v(
      `life`,
      `receipt`,
      g(`統一發票`, `Uniform invoice`),
      g(
        `單數月 25 號，全台灣一起對發票。`,
        `Every odd month on the 25th, all of Taiwan checks its receipts.`,
      ),
      g(`在超商買東西`, `Any convenience-store purchase`),
      { kind: `draw` },
      100,
    ),
    v(
      `life`,
      `green-oil`,
      g(`綠由精`, `Green Medicated Oil`),
      g(
        `蚊子咬、頭痛、鼻塞，什麼都擦一點。`,
        `Mosquito bites, headaches, a stuffy nose: dab a little on everything.`,
      ),
      g(`藥局`, `Pharmacies`),
      _(10),
    ),
    v(
      `life`,
      `salonpas`,
      g(`撒龍巴斯`, `Pain-relief patch`),
      g(
        `阿公阿嬤的愛用貼布，貼了就不痠。`,
        `Grandpa’s favourite patch. Stick it on, the ache goes.`,
      ),
      g(`藥局`, `Pharmacies`),
      _(20),
    ),
    y(
      `life`,
      `toilet-paper`,
      g(`一串衛生紙`, `A pack of toilet paper`),
      g(
        `聽說要漲價，先囤一串才安心。`,
        `Heard the price is going up? Stock up, just in case.`,
      ),
      g(`超商櫃檯`, `Convenience-store counter`),
    ),
    y(
      `life`,
      `face-mask`,
      g(`口罩`, `Face mask`),
      g(`出門記得戴好戴滿。`, `Wear it properly when you go out.`),
      g(`藥局`, `Pharmacies`),
    ),
    y(
      `life`,
      `rain-poncho`,
      g(`機車雨衣`, `Scooter rain poncho`),
      g(
        `一件式還是兩件式？午後雷陣雨說來就來。`,
        `One-piece or two-piece? The afternoon storm is coming either way.`,
      ),
      g(`公館`, `Gongguan`),
    ),
    y(
      `life`,
      `thermos`,
      g(`熱水瓶`, `Hot-water dispenser`),
      g(
        `阿嬤家的熱水瓶，永遠插著電。`,
        `At grandma’s it is always plugged in.`,
      ),
      g(`剝皮寮老街`, `Bopiliao Old Street`),
    ),
    y(
      `life`,
      `hakka-cloth`,
      g(`客家花布`, `Hakka floral cloth`),
      g(
        `大紅大綠，阿嬤的被單、媽媽的圍裙。`,
        `Big red and green flowers: grandma’s quilt, mom’s apron.`,
      ),
      g(`迪化街永樂市場`, `Yongle Market, Dihua Street`),
    ),
    y(
      `life`,
      `rattan-cane`,
      g(`藤條`, `Rattan cane`),
      g(
        `掛在牆上的家法，看到就乖了。`,
        `The family rule, hanging on the wall. One look is enough.`,
      ),
      g(`板橋市民廣場`, `Banqiao Civic Plaza`),
    ),
    y(
      `life`,
      `feather-duster`,
      g(`雞毛撢子`, `Feather duster`),
      g(`不是拿來撢灰塵的。`, `Not for dusting.`),
      g(`永和`, `Yonghe`),
    ),
    y(
      `life`,
      `wedding-invite`,
      g(`紅色炸彈`, `Wedding invitation`),
      g(
        `又一張喜帖，紅包要包多少？`,
        `Another wedding invitation. How much goes in the red envelope?`,
      ),
      g(`任務獎勵`, `Mission rewards`),
      `both`,
    ),
    y(
      `life`,
      `queue-ticket`,
      g(`排隊號碼牌`, `Queue number`),
      g(`看到人在排隊，先排再說。`, `See a queue? Join it, find out later.`),
      g(`任務獎勵`, `Mission rewards`),
      `both`,
    ),
    y(
      `life`,
      `parking-ticket`,
      g(`停車繳費單`, `Parking slip`),
      g(`雨刷上夾著的那一張。`, `The slip under your wiper.`),
      g(`任務獎勵`, `Mission rewards`),
      `both`,
    ),
    y(
      `street`,
      `yoyo-card`,
      g(`悠悠卡`, `YoYo Card`),
      g(
        `嗶一聲就上車，沒錢了就嗶不過。`,
        `Beep and board. Unless it is empty.`,
      ),
      g(`臺北車站`, `Taipei Main Station`),
    ),
    y(
      `street`,
      `helmet`,
      g(`安全帽`, `Scooter helmet`),
      g(
        `機車大軍標配，夏天悶到懷疑人生。`,
        `Standard kit of the scooter army. Unbearable in summer.`,
      ),
      g(`師大龍泉街`, `Longquan Street, Shida`),
    ),
    y(
      `street`,
      `mrt-token`,
      g(`捷運單程票`, `MRT token`),
      g(
        `藍色圓圓的代幣，出站要記得投。`,
        `The round blue token. Drop it in on the way out.`,
      ),
      g(`西門站出口`, `Ximen station exit`),
    ),
    y(
      `street`,
      `smilebike-bell`,
      g(`笑笑單車鈴`, `SmileBike bell`),
      g(`叮叮！騎過人行道請慢慢來。`, `Ring ring! Easy on the sidewalk.`),
      g(`市政府廣場`, `City Hall plaza`),
    ),
    y(
      `street`,
      `taxi-sign`,
      g(`小黃頂燈`, `Taxi roof sign`),
      g(
        `滿街的小黃，招手就停。`,
        `A street full of yellow cabs. Wave and one stops.`,
      ),
      g(`松山機場`, `Songshan Airport`),
    ),
    y(
      `street`,
      `green-man`,
      g(`小綠人`, `The little green man`),
      g(
        `號誌裡會走路的小綠人，最後幾秒會用跑的。`,
        `The walking man in the signal. In the last seconds he runs.`,
      ),
      g(`中正紀念堂`, `Chiang Kai-shek Memorial Hall`),
    ),
    y(
      `street`,
      `garbage-music-box`,
      g(`垃圾車音樂盒`, `Garbage-truck music box`),
      g(
        `《少女的祈禱》一響，全巷子出動。`,
        `'A Maiden's Prayer' plays, the whole lane comes out.`,
      ),
      g(`大安青田街`, `Qingtian Street, Da’an`),
    ),
    y(
      `street`,
      `traffic-cone`,
      g(`三角錐`, `Traffic cone`),
      g(
        `路邊停車位的守護者。`,
        `The keeper of the parking space outside the house.`,
      ),
      g(`內湖`, `Neihu`),
    ),
    y(
      `fun`,
      `goldfish-bag`,
      g(`撈到的金魚`, `Goldfish in a bag`),
      g(`紙網破了三張才撈到一隻。`, `Three paper nets torn for one fish.`),
      b(`士林`, `Shilin`),
    ),
    y(
      `fun`,
      `ring-toss`,
      g(`套圈圈獎品`, `Ring-toss prize`),
      g(
        `圈圈明明套到了，老闆說要整個套進去。`,
        `You ringed it. The owner says it has to go all the way down.`,
      ),
      b(`士林`, `Shilin`),
    ),
    y(
      `fun`,
      `pinball`,
      g(`彈珠台`, `Pinball board`),
      g(
        `拉桿一放，彈珠叮叮咚咚。`,
        `Pull the plunger, the marble rattles down.`,
      ),
      b(`饒河`, `Raohe`),
    ),
    y(
      `fun`,
      `dice-bowl`,
      g(`十八啦骰子碗`, `Dice bowl`),
      g(`香腸攤的骰子，十八啦！`, `The sausage stand’s dice. Eighteen!`),
      b(`饒河`, `Raohe`),
    ),
    y(
      `fun`,
      `diabolo`,
      g(`扯鈴`, `Diabolo`),
      g(`國小體育課的回憶。`, `Primary-school PE, remembered.`),
      g(`中正紀念堂`, `Chiang Kai-shek Memorial Hall`),
    ),
    y(
      `fun`,
      `spinning-top`,
      g(`陀螺`, `Spinning top`),
      g(`纏好繩子，用力一甩。`, `Wind the string, throw it hard.`),
      g(`大安森林公園`, `Da’an Forest Park`),
    ),
    v(
      `fun`,
      `lucky-draw`,
      g(`抽抽樂`, `Lucky draw`),
      g(`戳破一格，看看抽到什麼。`, `Punch out a square and see what you get.`),
      b(`師大`, `Shida`),
      { kind: `gacha` },
      100,
    ),
    y(
      `souvenir`,
      `pineapple-cake`,
      g(`鳳梨酥`, `Pineapple cake`),
      g(
        `觀光客必買，親戚來也要帶一盒。`,
        `Every tourist buys a box. So does every visiting aunt.`,
      ),
      g(`臺北101`, `Taipei 101`),
    ),
    y(
      `souvenir`,
      `tieguanyin`,
      g(`貓空鐵觀音`, `Maokong Tieguanyin`),
      g(
        `坐纜車上山，泡一壺看夜景。`,
        `Ride the gondola up, brew a pot, watch the city lights.`,
      ),
      g(`貓空`, `Maokong`),
    ),
    y(
      `souvenir`,
      `calla-lily`,
      g(`竹子湖海芋`, `Zhuzihu calla lilies`),
      g(
        `春天上陽明山，採一把海芋。`,
        `Spring on Yangmingshan: pick an armful of calla lilies.`,
      ),
      g(`陽明山`, `Yangmingshan`),
    ),
    y(
      `souvenir`,
      `cheer-sticks`,
      g(`加油棒`, `Thunder sticks`),
      g(
        `天母棒球場，敲到手痠。`,
        `Tianmu ballpark: bang them till your arms ache.`,
      ),
      g(`天母`, `Tianmu`),
    ),
    y(
      `souvenir`,
      `homerun-ball`,
      g(`全壘打紀念球`, `Home-run ball`),
      g(
        `九局下半那一棒，整座大巨蛋都站起來了。`,
        `That swing in the bottom of the ninth stood the whole Dome up.`,
      ),
      g(`臺北大巨蛋`, `Taipei Dome`),
    ),
    y(
      `souvenir`,
      `zoo-ticket`,
      g(`動物園門票`, `Zoo ticket`),
      g(`木柵動物園，看貓熊要排隊。`, `Muzha zoo. Queue to see the pandas.`),
      g(`木柵`, `Muzha`),
    ),
    y(
      `souvenir`,
      `ferris-ticket`,
      g(`摩天輪票`, `Ferris wheel ticket`),
      g(
        `大直的摩天輪，約會必搭。`,
        `The big wheel in Dazhi. Every date ends up here.`,
      ),
      g(`大直`, `Dazhi`),
    ),
    y(
      `plush`,
      `plush-third-prince`,
      g(`三太子娃娃`, `Third Prince plush`),
      g(
        `電音三太子，夾到會跳舞（不會）。`,
        `The techno Third Prince. Dances if you win it (it does not).`,
      ),
      x,
    ),
    y(
      `plush`,
      `plush-boba`,
      g(`珍奶抱枕`, `Bubble-tea pillow`),
      g(
        `抱著它就不會想喝真的珍奶。才怪。`,
        `Hug it and you will not crave real boba. Sure.`,
      ),
      x,
    ),
    y(
      `plush`,
      `plush-black-bear`,
      g(`台灣黑熊玩偶`, `Formosan black bear plush`),
      g(`胸口那道 V 字白毛是重點。`, `The white V on its chest is the point.`),
      x,
    ),
    y(
      `plush`,
      `plush-leopard-cat`,
      g(`石虎娃娃`, `Leopard-cat plush`),
      g(
        `額頭兩條白線，不是普通的貓。`,
        `Two white stripes on the forehead: not just a cat.`,
      ),
      x,
    ),
    y(
      `plush`,
      `plush-cutlet`,
      g(`雞排造型抱枕`, `Chicken-cutlet cushion`),
      g(`看起來很好吃，但不能吃。`, `Looks delicious. Not edible.`),
      x,
    ),
    y(
      `plush`,
      `plush-blue-magpie`,
      g(`台灣藍鵲娃娃`, `Taiwan blue magpie plush`),
      g(
        `長長的藍尾巴，台灣特有種。`,
        `The long blue tail. Found only in Taiwan.`,
      ),
      x,
    ),
    y(
      `plush`,
      `plush-pangolin`,
      g(`穿山甲娃娃`, `Pangolin plush`),
      g(`縮成一顆球，鱗片軟軟的。`, `Curls into a ball. The scales are soft.`),
      x,
    ),
    y(
      `plush`,
      `plush-macaque`,
      g(`台灣獼猴娃娃`, `Formosan macaque plush`),
      g(`真的獼猴會搶你的塑膠袋。`, `The real ones steal your plastic bag.`),
      x,
    ),
    y(
      `plush`,
      `plush-tram`,
      g(`叮叮電車公仔`, `Ding-ding tram plush`),
      g(
        `香港島的雙層電車，叮叮！`,
        `Hong Kong Island's double-decker tram. Ding ding!`,
      ),
      g(`香港夾公仔舖`, `Hong Kong claw arcades`),
      `hong-kong`,
    ),
    y(
      `plush`,
      `plush-pineapple-bun`,
      g(`菠蘿包攬枕`, `Pineapple-bun cushion`),
      g(`沒有菠蘿的菠蘿包。`, `A pineapple bun with no pineapple.`),
      g(`香港夾公仔舖`, `Hong Kong claw arcades`),
      `hong-kong`,
    ),
    y(
      `plush`,
      `plush-siu-mai`,
      g(`燒賣公仔`, `Siu mai plush`),
      g(`街邊魚肉燒賣，一串五粒。`, `Street fish siu mai, five on a stick.`),
      g(`香港夾公仔舖`, `Hong Kong claw arcades`),
      `hong-kong`,
    ),
    y(
      `plush`,
      `plush-minibus`,
      g(`紅van小巴模型`, `Red minibus model`),
      g(
        `有落！司機開得比你想像中快。`,
        `Stop here! It drives faster than you think.`,
      ),
      g(`香港夾公仔舖`, `Hong Kong claw arcades`),
      `hong-kong`,
    ),
    y(
      `plush`,
      `plush-fish-ball`,
      g(`魚蛋串攬枕`, `Fish-ball skewer cushion`),
      g(
        `咖喱魚蛋，香港人的心靈食物。`,
        `Curry fish balls: Hong Kong's comfort food.`,
      ),
      g(`香港夾公仔舖`, `Hong Kong claw arcades`),
      `hong-kong`,
    ),
    v(
      `food`,
      `egg-tart`,
      g(`蛋撻`, `Egg tart`),
      g(
        `曲奇皮，趁熱吃才鬆化。`,
        `Shortcrust pastry. Eat it hot or it is not the same.`,
      ),
      g(`中環泰晶餅家`, `Tai Ching Bakery, Central`),
      _(15),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `egg-waffle`,
      g(`雞蛋仔`, `Egg waffle`),
      g(
        `一格一格撕來吃，外脆內軟。`,
        `Tear it off bubble by bubble: crisp outside, soft inside.`,
      ),
      g(`中環街市`, `Central Market`),
      _(15),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `wonton-noodles`,
      g(`雲吞麵`, `Wonton noodles`),
      g(
        `細蓉一碗：麵在下，雲吞在上，湯不可以混濁。`,
        `A small bowl: noodles below, wontons on top, the broth crystal clear.`,
      ),
      g(`中環麥根雲吞麵世家`, `Mak Kan Wonton Noodle, Central`),
      _(30),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `brisket-noodles`,
      g(`牛腩伊麵`, `Beef brisket e-fu noodles`),
      g(
        `排隊排到街尾，搭枱是常識。`,
        `The queue runs down the street. Sharing a table is a given.`,
      ),
      g(`上環久記牛腩`, `Kau Gei Beef Brisket, Sheung Wan`),
      _(45),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `milk-pudding`,
      g(`燉奶`, `Steamed milk pudding`),
      g(
        `凍的比熱的甜，店員催你快點選。`,
        `Cold is sweeter than hot. The staff want your answer now.`,
      ),
      g(`佐敦奧洲牛奶公司`, `Austral Dairy Company, Jordan`),
      _(20),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `egg-toast`,
      g(`炒蛋多士`, `Scrambled-egg toast`),
      g(
        `炒蛋滑得像布丁，吃完請馬上讓位。`,
        `Eggs as smooth as custard. Finish up and give up your seat.`,
      ),
      g(`佐敦奧洲牛奶公司`, `Austral Dairy Company, Jordan`),
      _(40),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `samosa`,
      g(`咖喱角`, `Samosa`),
      g(
        `剛炸好，「小辣」其實很辣。`,
        `Fresh from the fryer. 'Mild' is not mild.`,
      ),
      g(`尖沙咀重慶大廈`, `Chungking Mansions, TST`),
      _(15),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `pork-chop-bun`,
      g(`豬扒包`, `Pork-chop bun`),
      g(
        `豬扒現煎，夾在脆脆的豬仔包裡。`,
        `The chop is fried to order, in a crusty bun.`,
      ),
      g(`中環蘭芬園`, `Lan Fun Yuen, Central`),
      _(40),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `baked-pork-chop-rice`,
      g(`焗豬扒飯`, `Baked pork-chop rice`),
      g(
        `要等二十分鐘，茄汁芝士焗到起泡。`,
        `Twenty minutes in the oven, tomato and cheese bubbling.`,
      ),
      g(`油麻地美度餐室`, `Meido Cafe, Yau Ma Tei`),
      _(45),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `pineapple-bun-butter`,
      g(`菠蘿油`, `Pineapple bun with butter`),
      g(
        `一塊冰牛油夾在熱菠蘿包裡，才正宗。`,
        `A slab of cold butter in a hot bun: the proper way.`,
      ),
      g(`油麻地美度餐室`, `Meido Cafe, Yau Ma Tei`),
      _(30),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `roast-goose-rice`,
      g(`燒鵝飯`, `Roast goose rice`),
      g(
        `鵝皮比薯片還脆，要腿要另外加錢。`,
        `The skin is crispier than crisps. The leg costs extra.`,
      ),
      g(`中環容記酒家`, `Yung Gei Restaurant, Central`),
      _(50),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `tomato-beef-macaroni`,
      g(`番茄牛肉通粉`, `Tomato-beef macaroni`),
      g(
        `大牌檔的早餐，加蛋多五元。`,
        `A dai pai dong breakfast. An egg is five dollars more.`,
      ),
      g(`上環盛香園大牌檔`, `Shing Heung Yuen Dai Pai Dong, Sheung Wan`),
      _(30),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `lemon-honey-crispy`,
      g(`檸蜜脆脆`, `Lemon-honey crunchy bun`),
      g(`一口咬下去「咔咔」聲。`, `It crackles when you bite it.`),
      g(`上環盛香園大牌檔`, `Shing Heung Yuen Dai Pai Dong, Sheung Wan`),
      _(20),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `curry-fish-balls`,
      g(`咖喱魚蛋`, `Curry fish balls`),
      g(
        `一串七粒，辣汁淋好淋滿。`,
        `Seven on a stick, drowned in curry sauce.`,
      ),
      g(`便利店`, `Convenience stores`),
      _(25),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `spam-egg-noodles`,
      g(`餐蛋麵`, `Spam & egg noodles`),
      g(
        `午餐肉、煎蛋、公仔麵：茶餐廳的國民早餐。`,
        `Luncheon meat, a fried egg, instant noodles: the cha chaan teng breakfast.`,
      ),
      g(`茶餐廳`, `Cha chaan tengs`),
      _(30),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `afternoon-tea`,
      g(`三層架下午茶`, `Afternoon tea stand`),
      g(
        `三文治、鬆餅、甜點，一層一層慢慢吃。`,
        `Sandwiches, scones, pastries: work your way up.`,
      ),
      g(`尖沙咀半島酒店大堂`, `The Peninsula Lobby, TST`),
      _(100),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `har-gow`,
      g(`蝦餃`, `Har gow`),
      g(
        `一籠四粒，蝦要爽，皮要薄。`,
        `Four to a basket: springy shrimp, thin skin.`,
      ),
      g(`上環龍鳳大酒樓`, `Dragon & Phoenix Restaurant, Sheung Wan`),
      _(22),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `char-siu-bao`,
      g(`叉燒包`, `Char siu bao`),
      g(
        `頂部裂開三瓣，才算蒸得好。`,
        `Split open in three at the top: that is how you know.`,
      ),
      g(`上環龍鳳大酒樓`, `Dragon & Phoenix Restaurant, Sheung Wan`),
      _(18),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `cheung-fun`,
      g(`腸粉`, `Cheung fun`),
      g(
        `滑溜溜的叉燒腸，淋上甜豉油。`,
        `Slippery char siu rice rolls under sweet soy.`,
      ),
      g(`上環龍鳳大酒樓`, `Dragon & Phoenix Restaurant, Sheung Wan`),
      _(20),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `phoenix-claws`,
      g(`鳳爪`, `Phoenix claws`),
      g(
        `豉汁燜到骨頭一吸就脫。`,
        `Braised in black bean sauce till the bones slip out.`,
      ),
      g(`上環龍鳳大酒樓`, `Dragon & Phoenix Restaurant, Sheung Wan`),
      _(16),
      100,
      `hong-kong`,
    ),
    v(
      `food`,
      `milk-tea-soft-serve`,
      g(`奶茶軟雪糕`, `Milk-tea soft serve`),
      g(
        `山頂風大，融化得比你吃得快。`,
        `The wind at the Peak melts it faster than you eat.`,
      ),
      g(`山頂凌霄閣`, `The Peak Tower`),
      _(20),
      100,
      `hong-kong`,
    ),
    v(
      `drink`,
      `hk-milk-tea`,
      g(`絲襪奶茶`, `Silk-stocking milk tea`),
      g(
        `撞足七次，濃到可以跑快一點。`,
        `Poured through seven times. Strong enough to make you run faster.`,
      ),
      g(`中環蘭芬園`, `Lan Fun Yuen, Central`),
      { kind: `sprint`, sec: 60 },
      100,
      `hong-kong`,
    ),
    v(
      `drink`,
      `yuenyeung`,
      g(`鴛鴦`, `Yuenyeung`),
      g(
        `三分咖啡七分茶，雙倍提神。`,
        `Three parts coffee, seven parts tea. Twice the kick.`,
      ),
      g(`中環蘭芬園`, `Lan Fun Yuen, Central`),
      { kind: `sprint`, sec: 90 },
      100,
      `hong-kong`,
    ),
    v(
      `drink`,
      `iced-lemon-tea`,
      g(`凍檸茶`, `Iced lemon tea`),
      g(
        `少甜，用匙羹把檸檬片壓到出汁。`,
        `Less sweet. Mash the lemon slices with the spoon.`,
      ),
      g(`檸檬王飲品店`, `Lemon King drinks counters`),
      _(15),
      100,
      `hong-kong`,
    ),
    v(
      `drink`,
      `herbal-24`,
      g(`廿四味`, `Twenty-four-herb tea`),
      g(
        `苦到皺眉，喝完說是清熱。`,
        `Bitter enough to make you wince. It cools you down, they say.`,
      ),
      g(`便利店涼茶`, `Herbal tea at convenience stores`),
      _(20),
      100,
      `hong-kong`,
    ),
    v(
      `drink`,
      `red-bean-ice`,
      g(`紅豆冰`, `Red-bean ice`),
      g(
        `紅豆煮足三個小時，再加花奶。`,
        `Beans simmered three hours, topped with evaporated milk.`,
      ),
      g(`油麻地美度餐室`, `Meido Cafe, Yau Ma Tei`),
      _(20),
      100,
      `hong-kong`,
    ),
    v(
      `temple`,
      `tin-hau-stick`,
      g(`天后靈籤`, `Tin Hau fortune stick`),
      g(
        `搖到一支跌出來，拿去對籤文。`,
        `Shake the cylinder till one falls out, then look up its verse.`,
      ),
      g(`油麻地天后廟`, `Tin Hau Temple, Yau Ma Tei`),
      { kind: `fortune` },
      100,
      `hong-kong`,
    ),
    y(
      `temple`,
      `incense-coil`,
      g(`塔香`, `Incense coil`),
      g(
        `掛在廟頂燒三個星期，紅紙寫上你的名字。`,
        `It hangs from the temple roof for three weeks, your name on the red tag.`,
      ),
      g(`上環文武廟`, `Man Mo Temple, Sheung Wan`),
      `hong-kong`,
    ),
    y(
      `temple`,
      `villain-slipper`,
      g(`打小人拖鞋`, `Villain-hitting slipper`),
      g(
        `鵝頸橋底的婆婆，一邊唸一邊打紙公仔。`,
        `Under the Goose Neck Bridge, the grannies chant and whack a paper figure.`,
      ),
      g(`銅鑼灣鵝頸橋底`, `Under the Goose Neck Bridge, Causeway Bay`),
      `hong-kong`,
    ),
    y(
      `life`,
      `ninetopus`,
      g(`九達通`, `Ninetopus card`),
      g(
        `「嘟」一聲，坐車買東西都靠它。`,
        `Beep. Buses, trains, shops: it pays for everything.`,
      ),
      g(`中環港鐵站`, `Central MTR station`),
      `hong-kong`,
    ),
    y(
      `life`,
      `rwb-bag`,
      g(`紅白藍膠袋`, `Red-white-blue bag`),
      g(
        `最耐用的香港行李，搬屋、走貨都靠它。`,
        `The toughest luggage in Hong Kong: moving house, moving goods.`,
      ),
      g(`尖沙咀重慶大廈`, `Chungking Mansions, TST`),
      `hong-kong`,
    ),
    y(
      `life`,
      `rooster-bowl`,
      g(`雞公碗`, `Rooster bowl`),
      g(
        `大牌檔的碗，碗邊一隻大公雞。`,
        `The dai pai dong bowl with the big rooster on the side.`,
      ),
      g(`中環嘉咸街`, `Graham Street, Central`),
      `hong-kong`,
    ),
    y(
      `life`,
      `flower-oil`,
      g(`百花油`, `Hundred-flower oil`),
      g(
        `頭痛、蚊叮、暈車，一瓶搞定。`,
        `Headache, mosquito bite, car sickness: one bottle does it all.`,
      ),
      g(`上環海味街`, `The dried-seafood streets, Sheung Wan`),
      `hong-kong`,
    ),
    y(
      `street`,
      `star-ferry-token`,
      g(`天星小輪代幣`, `Star Ferry token`),
      g(
        `從前過海就靠這一枚。`,
        `Once upon a time this got you across the harbour.`,
      ),
      g(`中環天星碼頭`, `Star Ferry Pier, Central`),
      `hong-kong`,
    ),
    y(
      `street`,
      `minibus-placard`,
      g(`小巴水牌`, `Minibus placard`),
      g(
        `手寫的目的地和車費，紅字白底。`,
        `Destination and fare, hand-lettered red on white.`,
      ),
      g(`旺角小巴站`, `Minibus stand, Mong Kok`),
      `hong-kong`,
    ),
    y(
      `street`,
      `neon-sign`,
      g(`霓虹燈招牌`, `Neon sign`),
      g(
        `彌敦道上空少了一塊，這是留下來的。`,
        `One that came down from above Nathan Road.`,
      ),
      g(`旺角西洋菜南街`, `Sai Yeung Choi Street South, Mong Kok`),
      `hong-kong`,
    ),
    y(
      `fun`,
      `mahjong-tile`,
      g(`麻雀牌`, `Mahjong tile`),
      g(
        `一張紅中，古董攤上撿回來的。`,
        `A Red Dragon, rescued from an antique stall.`,
      ),
      g(`上環貓街`, `Cat Street, Sheung Wan`),
      `hong-kong`,
    ),
    y(
      `fun`,
      `tin-robot`,
      g(`鐵皮機械人`, `Tin robot`),
      g(`上鏈之後一步一步走。`, `Wind it up and it marches.`),
      g(`灣仔太原街`, `Tai Yuen Street, Wan Chai`),
      `hong-kong`,
    ),
    y(
      `fun`,
      `race-slip`,
      g(`馬匯投注單`, `Betting slip`),
      g(
        `星期三晚跑馬地，填好了卻沒有落注。`,
        `Wednesday night at Happy Valley. Filled in, never placed.`,
      ),
      g(`跑馬地馬場`, `Happy Valley Racecourse`),
      `hong-kong`,
    ),
    y(
      `fun`,
      `bird-fortune`,
      g(`文雀占卜卡`, `Bird fortune card`),
      g(
        `小鳥從籠子裡跳出來，叼了這一張給你。`,
        `The little bird hopped out of its cage and picked this one for you.`,
      ),
      g(`油麻地廟街`, `Temple Street, Yau Ma Tei`),
      `hong-kong`,
    ),
    y(
      `fun`,
      `goldfish-bag-hk`,
      g(`一袋金魚`, `A bag of goldfish`),
      g(
        `一整面牆的膠袋金魚，選了最胖的那一條。`,
        `A wall of goldfish in bags. You picked the fattest one.`,
      ),
      g(`旺角金魚街`, `Goldfish Market, Mong Kok`),
      `hong-kong`,
    ),
    y(
      `fun`,
      `capsule-toy`,
      g(`扭蛋公仔`, `Capsule toy`),
      g(`又是同一隻……再扭一次吧。`, `The same one again… one more go.`),
      g(`旺角信合中心`, `Shun Hap Centre, Mong Kok`),
      `hong-kong`,
    ),
    y(
      `souvenir`,
      `peak-tram-ticket`,
      g(`山頂纜車車票`, `Peak Tram ticket`),
      g(
        `坐在右邊，才看得到維港。`,
        `Sit on the right if you want the harbour view.`,
      ),
      g(`中環花園道纜車站`, `Peak Tram terminus, Garden Road`),
      `hong-kong`,
    ),
    y(
      `souvenir`,
      `star-lantern`,
      g(`楊桃燈籠`, `Starfruit lantern`),
      g(
        `中秋節的維園，滿天都是燈籠。`,
        `Victoria Park at Mid-Autumn, lanterns everywhere.`,
      ),
      g(`銅鑼灣維多利亞公園`, `Victoria Park, Causeway Bay`),
      `hong-kong`,
    ),
    y(
      `souvenir`,
      `peak-tram-model`,
      g(`山頂纜車模型`, `Peak Tram model`),
      g(
        `綠色車廂，一比八十，車窗很容易斷。`,
        `The green car at 1:80. The little windows snap easily.`,
      ),
      g(`山頂凌霄閣手信店`, `Peak Tower gift shop`),
      `hong-kong`,
    ),
    y(
      `souvenir`,
      `ilovehk-tee`,
      g(`「I ♥ HK」T恤`, `“I ♥ HK” T-shirt`),
      g(`遊客必買，均碼。`, `Every visitor buys one. One size.`),
      g(`山頂凌霄閣手信店`, `Peak Tower gift shop`),
      `hong-kong`,
    ),
    y(
      `souvenir`,
      `harbour-postcards`,
      g(`維港明信片`, `Harbour postcards`),
      g(
        `日景夜景各五張，寄回家。`,
        `Five by day, five by night. Send them home.`,
      ),
      g(`山頂凌霄閣手信店`, `Peak Tower gift shop`),
      `hong-kong`,
    ),
    y(
      `souvenir`,
      `tram-magnet`,
      g(`叮叮雪櫃貼`, `Tram fridge magnet`),
      g(
        `三個一百元，多買一個送朋友。`,
        `Three for a hundred. Get one more for a friend.`,
      ),
      g(`山頂凌霄閣手信店`, `Peak Tower gift shop`),
      `hong-kong`,
    ),
    ...ne(),
    ...te(),
  ];
function te() {
  let e = g(`新竹 巨成購物中心`, `Giant City mall, Hsinchu`),
    t = g(`巨成 燦困 3C 家電館`, `Tsankun 3C appliances, Giant City`),
    n = g(
      `巨成 周年慶（服務台、贈品處）`,
      `Giant City anniversary sale (service & gift desks)`,
    );
  return [
    y(
      `life`,
      `mall-robovac`,
      g(`愛掃寶 掃地機器人`, `iRoombo robot vacuum`),
      g(
        `取了名字叫「小掃」。每天出門前按一下，回家地板亮晶晶。`,
        `Named it "Sweepy". Press go before work; the floor shines when you get home.`,
      ),
      t,
    ),
    y(
      `life`,
      `mall-stickvac`,
      g(`黛森 無線吸塵器`, `Dysen cordless vacuum`),
      g(
        `雷射一照，才知道套房地板有多少灰塵。`,
        `The laser shows just how much dust a studio floor hides.`,
      ),
      t,
    ),
    y(
      `life`,
      `mall-fridge`,
      g(`國際派 變頻冰箱`, `Panasonix inverter fridge`),
      g(`六門，比套房的門還多。`, `Six doors — more than the studio flat has.`),
      t,
    ),
    y(
      `life`,
      `mall-washer`,
      g(`滾筒洗脫烘`, `Washer-dryer`),
      g(
        `不用再去自助洗衣店等烘衣機了。`,
        `No more waiting for the coin-laundry dryer.`,
      ),
      t,
    ),
    y(
      `life`,
      `mall-purifier`,
      g(`空氣清淨機`, `Air purifier`),
      g(
        `九降風一吹，濾網馬上變灰色。`,
        `One gust of the Hsinchu wind and the filter turns grey.`,
      ),
      t,
    ),
    y(
      `life`,
      `mall-dehumidifier`,
      g(`除濕機`, `Dehumidifier`),
      g(
        `新竹冬天的必需品，一天倒兩桶水。`,
        `A Hsinchu-winter must: two tanks of water a day.`,
      ),
      t,
    ),
    y(
      `life`,
      `mall-tv`,
      g(`65 吋 4K 電視`, `65-inch 4K TV`),
      g(
        `比宿舍的牆還大。周年慶刷卡分 24 期。`,
        `Bigger than the dorm wall. 24 interest-free instalments.`,
      ),
      t,
    ),
    y(
      `life`,
      `mall-hairdryer`,
      g(`黛森 吹風機`, `Dysen hair dryer`),
      g(
        `櫃姐吹給你看的那一下，你就決定要買了。`,
        `The moment the clerk dried your hair with it, you were sold.`,
      ),
      t,
    ),
    y(
      `life`,
      `mall-espresso`,
      g(`膠囊咖啡機`, `Capsule coffee machine`),
      g(
        `在家也能喝，但還是每天去買超商咖啡。`,
        `Coffee at home — yet you still buy the store coffee every day.`,
      ),
      t,
    ),
    y(
      `life`,
      `mall-massage-chair`,
      g(`歐西馬 按摩椅`, `OSIMM massage chair`),
      g(
        `分 36 期。坐上去三分鐘就睡著。`,
        `36 instalments. Asleep within three minutes.`,
      ),
      g(`巨成 6F 健康生活館`, `Giant City 6F, health & living`),
    ),
    y(
      `life`,
      `mall-fairy-water`,
      g(`SK-Ⅳ 神仙水`, `SK-IV "fairy water"`),
      g(
        `周年慶限定組，一早排到電扶梯口才買到。`,
        `The anniversary set — queued to the escalator at opening for it.`,
      ),
      g(`巨成 1F 遠西 SOGOO 國際彩妝`, `Giant City 1F, SOGOO cosmetics`),
    ),
    y(
      `life`,
      `mall-serum`,
      g(`小棕瓶精華`, `"Little brown bottle" serum`),
      g(
        `熬夜加班的臉，靠它撐著。`,
        `The face of every all-nighter, held together by this.`,
      ),
      g(`巨成 1F 遠西 SOGOO 國際彩妝`, `Giant City 1F, SOGOO cosmetics`),
    ),
    y(
      `life`,
      `mall-lipstick`,
      g(`口紅禮盒`, `Lipstick gift box`),
      g(
        `一盒五支，色號差在哪裡你看不出來。`,
        `Five shades in a box. You cannot tell them apart.`,
      ),
      g(`巨成 1F 遠西 SOGOO 國際彩妝`, `Giant City 1F, SOGOO cosmetics`),
    ),
    y(
      `life`,
      `mall-perfume`,
      g(`香水`, `Perfume`),
      g(
        `櫃姐噴在試香紙上，你在電梯裡還聞得到。`,
        `The clerk sprayed a card; you could still smell it in the lift.`,
      ),
      g(`巨成 1F 遠西 SOGOO 國際彩妝`, `Giant City 1F, SOGOO cosmetics`),
    ),
    y(
      `life`,
      `mall-handbag`,
      g(`寇迪 托特包`, `COACHY tote`),
      g(
        `竹科太太的標配，接送小孩剛好裝得下 iPad。`,
        `The park wives' standard — fits the iPad on the school run.`,
      ),
      g(`巨成 2F 寇迪`, `Giant City 2F, COACHY`),
    ),
    y(
      `life`,
      `mall-sneakers`,
      g(`慢跑鞋`, `Running shoes`),
      g(
        `買了跑鞋，終於有理由去健身房了。`,
        `New running shoes — finally a reason to go to the gym.`,
      ),
      g(`巨成 3F ABC-MARK`, `Giant City 3F, ABC-MARK`),
    ),
    y(
      `life`,
      `mall-watch`,
      g(`智慧手錶`, `Smartwatch`),
      g(
        `它說你今天走了 2,000 步，其中 1,800 步在無塵室。`,
        `It says 2,000 steps today — 1,800 of them in the cleanroom.`,
      ),
      g(`巨成 1F 燦困 3C`, `Giant City 1F, Tsankun 3C`),
    ),
    y(
      `fun`,
      `mall-lego-fab`,
      g(`樂搞 晶圓廠積木`, `LEGOH wafer-fab set`),
      g(
        `3,000 片。拼完以後你比廠長還熟廠區。`,
        `3,000 pieces. Finish it and you know the fab better than the plant manager.`,
      ),
      g(`巨成 5F 樂搞`, `Giant City 5F, LEGOH`),
    ),
    y(
      `souvenir`,
      `mall-cablecar`,
      g(`叮噹車模型`, `Cable-car model`),
      g(
        `7 樓舊金山大街買的，車頭寫著 POWELL & MASON。`,
        `From the 7F San Francisco street: POWELL & MASON on the front.`,
      ),
      g(`巨成 7F 舊金山大街`, `Giant City 7F, San Francisco Street`),
    ),
    y(
      `souvenir`,
      `mall-anniv-bag`,
      g(`周年慶購物袋`, `Anniversary shopping bag`),
      g(
        `紅色大紙袋，提著走出巨成，整條中央路都知道你買了。`,
        `The big red bag: walk out with it and all of Zhongyang Road knows.`,
      ),
      e,
    ),
    y(
      `fun`,
      `coupon-300`,
      g(`周年慶抵用券 300`, `Anniversary voucher NT$300`),
      g(
        `單筆滿 NT$3,000 現折 NT$300。一疊發票換一張。`,
        `NT$300 off any single buy of NT$3,000 or more. A stack of receipts buys one.`,
      ),
      n,
    ),
    y(
      `fun`,
      `coupon-80`,
      g(`周年慶 8 折券`, `Anniversary 20%-off coupon`),
      g(
        `單件 8 折，最多折 NT$2,000。櫃姐會幫你用。`,
        `20% off one item, up to NT$2,000. The clerk applies it for you.`,
      ),
      n,
    ),
    y(
      `fun`,
      `coupon-app`,
      g(`巨成 APP 購物金 100`, `Giant City app credit NT$100`),
      g(
        `打開 APP 簽到領的，不用門檻。`,
        `From checking in on the app — no minimum spend.`,
      ),
      n,
    ),
  ];
}
function ne() {
  let e = `tokyo`,
    t = g(`便利商店`, `The konbini`),
    n = g(`藥妝店`, `The drugstore`),
    r = g(`珍奶店`, `The tea stand`),
    i = g(`神社參拜`, `Pray at a shrine`),
    a = g(`遊樂場`, `The game centre`);
  return [
    v(
      `food`,
      `jp-onigiri`,
      g(`御飯糰`, `Onigiri`),
      g(
        `照著 1、2、3 撕開，海苔一片都不會斷。`,
        `Pull tab 1, 2, 3 and the seaweed comes out whole. Every time.`,
      ),
      t,
      _(25),
      100,
      e,
    ),
    v(
      `food`,
      `jp-nikuman`,
      g(`肉包`, `Nikuman`),
      g(
        `冬天收銀台旁的蒸櫃，熱到要兩手輪流拿。`,
        `From the steamer by the register. Too hot to hold in one hand.`,
      ),
      t,
      _(25),
      100,
      e,
    ),
    v(
      `food`,
      `jp-oden`,
      g(`日式關東煮`, `Konbini oden`),
      g(
        `白蘿蔔、蛋、竹輪，湯要多舀一點。`,
        `Radish, egg, chikuwa. Ask for extra broth.`,
      ),
      t,
      _(35),
      100,
      e,
    ),
    v(
      `food`,
      `jp-agechiki`,
      g(`アゲチキ炸雞`, `Agechiki`),
      g(
        `收銀台的熱食櫃，隨手一塊，邊走邊吃。`,
        `One from the hot case at the till, eaten on the walk out.`,
      ),
      t,
      _(30),
      100,
      e,
    ),
    v(
      `food`,
      `jp-tamagoyaki`,
      g(`玉子燒`, `Tamagoyaki`),
      g(
        `一串插好，甜甜的，排隊的人比雞蛋還多。`,
        `On a stick, sweet, and the queue is longer than the omelette.`,
      ),
      g(`築地場外市場`, `Tsukiji Outer Market`),
      _(20),
      100,
      e,
    ),
    v(
      `food`,
      `jp-ningyoyaki`,
      g(`人形燒`, `Ningyo-yaki`),
      g(
        `七福神造型的雞蛋糕，紅豆餡熱呼呼。`,
        `Little sponge cakes shaped like the Seven Lucky Gods, warm red bean inside.`,
      ),
      g(`人形町甘酒橫丁`, `Amazake Yokocho, Ningyocho`),
      _(20),
      100,
      e,
    ),
    v(
      `drink`,
      `jp-ocha`,
      g(`瓶裝綠茶`, `Bottled green tea`),
      g(
        `無糖，冷藏櫃第二排，日本人的白開水。`,
        `Unsweetened, second shelf in the fridge. Tokyo's tap water.`,
      ),
      t,
      _(15),
      100,
      e,
    ),
    v(
      `drink`,
      `jp-hot-coffee`,
      g(`超商熱咖啡`, `Konbini hot coffee`),
      g(
        `杯子自己放上機器，按下去等三十秒。衝刺 60 秒。`,
        `Put the cup in the machine yourself, wait thirty seconds. Sprint for 60 s.`,
      ),
      t,
      { kind: `sprint`, sec: 60 },
      100,
      e,
    ),
    v(
      `drink`,
      `jp-energy-drink`,
      g(`營養飲料`, `Energy tonic`),
      g(
        `小小一瓶，上班族的加班燃料。衝刺 90 秒。`,
        `A tiny bottle: what office workers run on. Sprint for 90 s.`,
      ),
      n,
      { kind: `sprint`, sec: 90 },
      100,
      e,
    ),
    v(
      `drink`,
      `jp-tapioca`,
      g(`東京珍奶`, `Tokyo bubble tea`),
      g(
        `臺灣來的，在東京排隊排了一整條街。`,
        `From Taiwan. In Tokyo the queue goes round the block.`,
      ),
      r,
      _(15),
      100,
      e,
    ),
    v(
      `drink`,
      `jp-matcha-latte`,
      g(`抹茶奶茶`, `Matcha milk tea`),
      g(
        `綠到發光，苦一點才對味。`,
        `Glowing green. A bit bitter is how it should be.`,
      ),
      r,
      _(15),
      100,
      e,
    ),
    v(
      `drink`,
      `jp-hojicha-latte`,
      g(`焙茶拿鐵`, `Hojicha latte`),
      g(
        `烘過的茶香，像秋天的落葉。`,
        `Roasted tea: smells like autumn leaves.`,
      ),
      r,
      _(15),
      100,
      e,
    ),
    v(
      `life`,
      `jp-first-aid`,
      g(`急救組`, `First-aid set`),
      g(
        `繃帶、紗布、消毒水，一盒全包。`,
        `Bandages, gauze, disinfectant: the lot in one box.`,
      ),
      n,
      _(100),
      100,
      e,
    ),
    v(
      `life`,
      `jp-shippu`,
      g(`痠痛貼布`, `Cooling patch`),
      g(
        `涼涼的，貼在肩膀上，走一整天也不怕。`,
        `Cool on the shoulder. Walk all day.`,
      ),
      n,
      _(40),
      100,
      e,
    ),
    v(
      `life`,
      `jp-megusuri`,
      g(`眼藥水`, `Eye drops`),
      g(
        `滴下去涼到整個人清醒，眼睛還會冒煙。`,
        `So cool your eyes practically steam. Wide awake.`,
      ),
      n,
      _(10),
      100,
      e,
    ),
    y(
      `life`,
      `jp-mask`,
      g(`不織布口罩`, `Paper face mask`),
      g(
        `花粉季的東京，滿街都戴著。`,
        `Tokyo in pollen season: everyone wears one.`,
      ),
      n,
      e,
    ),
    y(
      `life`,
      `jp-receipt`,
      g(`超商收據`, `Konbini receipt`),
      g(
        `沒有發票可以對，但記帳很好用。`,
        `No lottery on this one. Good for the budget book, though.`,
      ),
      g(`在便利商店買東西`, `Any konbini purchase`),
      e,
    ),
    v(
      `temple`,
      `jp-omamori`,
      g(`御守`, `Omamori`),
      g(
        `交通安全的那一款，掛在包包上。`,
        `The road-safety one. Hang it on your bag.`,
      ),
      i,
      { kind: `armor`, amount: 50 },
      100,
      e,
    ),
    v(
      `temple`,
      `jp-omikuji`,
      g(`神籤`, `Omikuji`),
      g(
        `抽到凶就綁在樹上，留在神社裡。`,
        `Draw a bad one? Tie it to the branch and leave it with the shrine.`,
      ),
      i,
      { kind: `fortune` },
      100,
      e,
    ),
    y(
      `temple`,
      `jp-ema`,
      g(`繪馬`, `Ema`),
      g(
        `寫上心願掛起來，別人的願望不要偷看。`,
        `Write your wish and hang it up. Don't read the others.`,
      ),
      i,
      e,
    ),
    y(
      `temple`,
      `jp-goen`,
      g(`五圓硬幣`, `Five-yen coin`),
      g(
        `「ご縁」的諧音，香油錢投它最有緣。`,
        `Go-en sounds like "a good bond": the luckiest coin to offer.`,
      ),
      i,
      e,
    ),
    v(
      `fun`,
      `jp-pochi`,
      g(`和風小紅包`, `Pochi-bukuro envelope`),
      g(
        `畫著小動物的小紙袋，裡面裝著零用錢。`,
        `A tiny paper envelope with animals on it, pocket money inside.`,
      ),
      g(`任務獎勵`, `Mission rewards`),
      { kind: `money`, min: 200, max: 1200 },
      100,
      e,
    ),
    v(
      `fun`,
      `jp-gacha`,
      g(`扭蛋`, `Gacha capsule`),
      g(
        `轉一圈，喀啦一聲，會是哪一個？`,
        `Turn the handle, clunk — which one will it be?`,
      ),
      g(`任務獎勵、秋葉原`, `Mission rewards, Akihabara`),
      { kind: `gacha` },
      100,
      e,
    ),
    y(
      `street`,
      `jp-melonca`,
      g(`Melonca 交通卡`, `Melonca card`),
      g(
        `嗶一下就進站，車站裡的超商也能用。`,
        `Beep through the gates; works at the station konbini too.`,
      ),
      g(`東京車站`, `Tokyo Station`),
      e,
    ),
    y(
      `street`,
      `jp-kippu`,
      g(`山手線車票`, `Yamanote Line ticket`),
      g(
        `一張小小的紙車票，進站時被剪票機吃進去又吐出來。`,
        `A little paper ticket the gate swallows and spits back out.`,
      ),
      g(`有樂町高架下`, `Under the tracks, Yurakucho`),
      e,
    ),
    y(
      `street`,
      `jp-maid-flyer`,
      g(`女僕咖啡傳單`, `Maid-café flyer`),
      g(
        `街口發的，背面有一張飲料折價券。`,
        `Handed out on the corner. A drink coupon on the back.`,
      ),
      g(`秋葉原電器街`, `Akihabara Electric Town`),
      e,
    ),
    y(
      `street`,
      `jp-ginza-bag`,
      g(`銀座紙提袋`, `Ginza paper bag`),
      g(
        `袋子比裡面的東西還高級，捨不得丟。`,
        `The bag is fancier than what was in it. Too nice to throw away.`,
      ),
      g(`銀座`, `Ginza`),
      e,
    ),
    y(
      `life`,
      `jp-old-book`,
      g(`古書`, `Second-hand book`),
      g(
        `一百圓的均一價書車，翻到一張昭和年代的書籤。`,
        `From the ¥100 cart outside. A bookmark from the Showa era inside.`,
      ),
      g(`神田古書街`, `Kanda used-book street`),
      e,
    ),
    y(
      `life`,
      `jp-salaryman-tie`,
      g(`上班族領帶`, `Salaryman tie`),
      g(
        `下班後在新橋解開，鬆鬆地掛在脖子上。`,
        `Loosened in Shimbashi after work, hanging off the neck.`,
      ),
      g(`新橋SL廣場`, `SL Square, Shimbashi`),
      e,
    ),
    y(
      `fun`,
      `jp-retro-cartridge`,
      g(`中古遊戲卡帶`, `Retro game cartridge`),
      g(
        `吹一吹再插進去，存檔竟然還在。`,
        `Blow on it, push it in — the old save is still there.`,
      ),
      g(`秋葉原`, `Akihabara`),
      e,
    ),
    y(
      `fun`,
      `jp-guitar-pick`,
      g(`吉他彈片`, `Guitar pick`),
      g(
        `樂器街試彈了一整個下午，只買了這一片。`,
        `An afternoon trying guitars on the music street. Bought one pick.`,
      ),
      g(`御茶之水樂器街`, `Ochanomizu music street`),
      e,
    ),
    y(
      `fun`,
      `jp-kabuki-ticket`,
      g(`歌舞伎一幕見票`, `Kabuki single-act ticket`),
      g(
        `站在最上層看一幕，喊聲的老爺爺比演員還準時。`,
        `One act from the top gallery. The old man shouting cues is never late.`,
      ),
      g(`歌舞伎座`, `Kabukiza`),
      e,
    ),
    y(
      `souvenir`,
      `jp-shinkansen-model`,
      g(`新幹線模型`, `Shinkansen model`),
      g(
        `長長的鼻子，車頭比車廂還帥。`,
        `That long nose. The front car is the star.`,
      ),
      g(`東京車站八重洲口`, `Yaesu side, Tokyo Station`),
      e,
    ),
    y(
      `souvenir`,
      `jp-panda-goods`,
      g(`熊貓周邊`, `Panda goods`),
      g(
        `車站裡什麼都是熊貓：麵包、筆、甚至便當。`,
        `Everything at the station is a panda: buns, pens, even lunch boxes.`,
      ),
      g(`上野車站`, `Ueno Station`),
      e,
    ),
    y(
      `souvenir`,
      `jp-ameyoko-choco`,
      g(`阿美橫丁巧克力袋`, `Ameyoko chocolate bag`),
      g(
        `老闆一直往袋子裡丟，「再加！再加！」一千圓。`,
        `The stallholder keeps tossing more in — "and more!" — for a thousand yen.`,
      ),
      g(`阿美橫丁`, `Ameyoko`),
      e,
    ),
    y(
      `souvenir`,
      `jp-furin`,
      g(`風鈴`, `Wind chime`),
      g(
        `掛在窗邊，風一吹，夏天就涼了一點。`,
        `By the window: one breeze and summer feels a little cooler.`,
      ),
      g(`神田明神`, `Kanda Myojin`),
      e,
    ),
    y(
      `souvenir`,
      `jp-tenugui`,
      g(`手巾`, `Tenugui`),
      g(
        `擦汗、包便當、綁頭上，一條布什麼都能做。`,
        `Mop your brow, wrap a lunch, tie it round your head. One cloth, every job.`,
      ),
      g(`人形町`, `Ningyocho`),
      e,
    ),
    y(
      `souvenir`,
      `jp-sensu`,
      g(`扇子`, `Folding fan`),
      g(
        `啪一聲打開，老店的師傅說是手工糊的。`,
        `Snaps open. The old shop's craftsman glued it by hand.`,
      ),
      g(`日本橋`, `Nihonbashi`),
      e,
    ),
    y(
      `souvenir`,
      `jp-chochin`,
      g(`迷你提燈`, `Mini paper lantern`),
      g(
        `紅色的小燈籠，掛在房門口像開了一間居酒屋。`,
        `A little red lantern. Hang it on your door and you run an izakaya.`,
      ),
      g(`上野公園`, `Ueno Park`),
      e,
    ),
    y(
      `plush`,
      `jp-plush-shiba`,
      g(`柴犬大娃娃`, `Giant shiba plush`),
      g(
        `一臉不屑的柴犬，抱起來卻軟綿綿。`,
        `A shiba with a look of total disdain. Very huggable.`,
      ),
      a,
      e,
    ),
    y(
      `plush`,
      `jp-plush-sushi`,
      g(`鮪魚握壽司抱枕`, `Tuna-sushi cushion`),
      g(
        `枕在頭下面，夢裡都是醋飯香。`,
        `Put your head on it and dream of vinegared rice.`,
      ),
      a,
      e,
    ),
    y(
      `plush`,
      `jp-plush-maneki`,
      g(`招財貓娃娃`, `Lucky-cat plush`),
      g(
        `舉右手招錢，舉左手招人，這隻兩手都舉。`,
        `Right paw for money, left for customers. This one raises both.`,
      ),
      a,
      e,
    ),
    y(
      `plush`,
      `jp-okashi-bag`,
      g(`零食大禮盒`, `Big box of snacks`),
      g(
        `一百圓夾到一整箱零食，比超商便宜。`,
        `A whole box of snacks for ¥100. Cheaper than the konbini.`,
      ),
      a,
      e,
    ),
    y(
      `plush`,
      `jp-figure`,
      g(`景品公仔`, `Prize figure`),
      g(
        `盒子不能拆，拆了就不值錢了。`,
        `Never open the box. Opened, it's worth nothing.`,
      ),
      a,
      e,
    ),
  ];
}
var re = Object.fromEntries(ee.map((e) => [e.id, e])),
  ie = [
    {
      id: `food`,
      name: g(`小吃`, `Street food`),
      hk: g(`小食`, `Snacks & meals`),
    },
    { id: `drink`, name: g(`飲料`, `Drinks`), hk: g(`飲品`, `Drinks`) },
    { id: `temple`, name: g(`廟宇`, `Temples`), hk: g(`廟宇`, `Temples`) },
    {
      id: `life`,
      name: g(`生活`, `Everyday life`),
      hk: g(`生活`, `Everyday life`),
    },
    {
      id: `street`,
      name: g(`街頭`, `On the street`),
      hk: g(`街頭`, `On the street`),
    },
    {
      id: `fun`,
      name: g(`夜市與童玩`, `Night-market games & toys`),
      hk: g(`玩意`, `Games & toys`),
    },
    {
      id: `souvenir`,
      name: g(`伴手禮`, `Souvenirs`),
      hk: g(`手信`, `Souvenirs`),
    },
    { id: `plush`, name: g(`娃娃`, `Plushies`), hk: g(`公仔`, `Plushies`) },
  ],
  ae = {
    food: g(`食物`, `Food`),
    drink: g(`飲料`, `Drinks`),
    temple: g(`神社`, `Shrines`),
    life: g(`生活`, `Everyday life`),
    street: g(`街頭`, `On the street`),
    fun: g(`玩樂`, `Games & toys`),
    souvenir: g(`伴手禮`, `Souvenirs`),
    plush: g(`景品`, `Prizes`),
  },
  oe = [
    { id: `taiwan`, name: g(`臺灣`, `Taiwan`) },
    { id: `hong-kong`, name: g(`香港`, `Hong Kong`) },
    { id: `tokyo`, name: g(`東京`, `Tokyo`) },
  ],
  se = (e) =>
    e === `tokyo` ? `tokyo` : e === `hong-kong` ? `hong-kong` : `taiwan`,
  ce = (e, t) =>
    t === `tokyo` || e.city === `tokyo`
      ? e.city === t
      : e.city === `both` ||
        (t === `hong-kong` ? e.city === `hong-kong` : e.city === `taipei`),
  S = {
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
((S.tokyo = [
  `jp-plush-shiba`,
  `jp-plush-sushi`,
  `jp-plush-maneki`,
  `jp-okashi-bag`,
  `jp-figure`,
]),
  (S.london = []),
  (S.mumbai = []),
  (S.taichung = S.taipei),
  (S.tainan = S.taipei));
var le = [
    [`mazu-amulet`, 0.15],
    [`fortune-slip`, 0.2],
    [`joss-paper`, 0.1],
    [`incense`, 0.1],
  ],
  ue = [
    [`red-envelope`, 5],
    [`wedding-invite`, 1],
    [`queue-ticket`, 1],
    [`parking-ticket`, 1],
    [`lucky-draw`, 2],
  ],
  de = 0.35,
  fe = [
    [`jp-omamori`, 0.15],
    [`jp-omikuji`, 0.2],
    [`jp-ema`, 0.1],
    [`jp-goen`, 0.1],
  ],
  pe = [
    [`jp-pochi`, 5],
    [`jp-gacha`, 2],
    [`jp-ningyoyaki`, 1],
  ],
  me = ee
    .filter(
      (e) =>
        e.shelf === `keep` &&
        (e.cat === `life` || e.cat === `street` || e.cat === `fun`) &&
        e.city !== `tokyo` &&
        !/^(mall|coupon)-/.test(e.id),
    )
    .map((e) => e.id),
  he = ee
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
  ge = /^[a-z][a-z0-9-]{1,31}$/,
  _e = 864e5;
function ve(e, t, n) {
  let r = new Date(Date.UTC(e, t, 1)).getUTCDay();
  return Date.UTC(e, t, 1 + ((7 - r) % 7) + 7 * (n - 1));
}
function ye(e) {
  let t = new Date(e).getUTCFullYear();
  return e >= ve(t, 2, 2) && e < ve(t, 10, 1);
}
function be(e) {
  let t = e?.startDate ? /^(\d{4})-(\d{2})-(\d{2})$/.exec(e.startDate) : null;
  return !t || !e ? null : Date.UTC(+t[1], t[2] - 1, +t[3]) + e.day * _e;
}
function C(e, t) {
  let n = f[e];
  if (!n) return 8;
  if (n.dst !== `us`) return n.utc;
  let r = be(t);
  return n.utc + (r === null || ye(r) ? 1 : 0);
}
var xe = (e) => new Date(e).toISOString().slice(0, 10);
function Se(e, t) {
  if (!t || e.hour === void 0) return { ...e };
  let n = e.hour + t,
    r = e.day + Math.floor(n / 24),
    i = { ...e, hour: ((n % 24) + 24) % 24 };
  if (r < 0) {
    let t = be({ ...e, day: 0 });
    (t !== null && (i.startDate = xe(t + r * _e)), (r = 0));
  }
  return ((i.day = r), i);
}
var Ce = (e, t) => Se(e, C(t, e) - 8),
  we = (e, t) => Se(e, 8 - C(t, e)),
  Te = (e, t, n) => C(t, n) - C(e, n);
function Ee(e, t) {
  let n = e ? Ce(e, t.from) : void 0,
    r = t.depMin / 60 + t.hours,
    i = {
      day: (n?.day ?? 0) + +!!t.nextDay + Math.floor(r / 24),
      hour: ((r % 24) + 24) % 24,
    };
  return (n?.startDate && (i.startDate = n.startDate), we(i, t.from));
}
var w = { taipei: 1, "hong-kong": 4, kaohsiung: 1 };
((w.tokyo = 1 / 5),
  (w.london = 40),
  (w.taichung = 1),
  (w.tainan = 1),
  (w.seoul = 1 / 40));
var De = {};
((De.tokyo = 5), (De.seoul = 40));
var T = (e) => De[e] ?? 0;
w.mumbai = 1 / 3;
var Oe = [`quality`, `masterVolume`, `musicVolume`, `sfxVolume`, `showFps`],
  ke = [`bat`, `pistol`, `smg`],
  Ae = `shared`,
  E = (e) => !!e && typeof e == `object` && !Array.isArray(e),
  D = (e) => typeof e == `number` && Number.isFinite(e),
  O = (e, t, n, r = 0) => (D(e) ? Math.max(t, Math.min(n, Math.round(e))) : r),
  k = (e) =>
    (typeof e == `string` && e.length <= 64) || D(e) || typeof e == `boolean`,
  je = 1e3,
  Me = 256,
  Ne = 0x9184e72a000,
  A = (e) => E(e) && e.shared === 1;
function j(e) {
  if (!E(e)) return 500;
  let t =
    typeof e.money == `string` && e.money.trim() !== ``
      ? Number(e.money)
      : e.money;
  return D(t) ? Math.max(0, Math.round(t)) : 500;
}
function Pe(e) {
  return E(e)
    ? (typeof e.firstPlayedAt == `string`
        ? e.firstPlayedAt
        : typeof e.startDate == `string`
          ? e.startDate
          : ``
      ).slice(0, 40)
    : ``;
}
function Fe(e = 0) {
  return {
    v: 1,
    wallet: { ntd: 0, seeds: {}, dev: {} },
    player: {},
    settings: {},
    at: { player: 0, settings: 0, clock: 0 },
    since: e,
  };
}
function M(e) {
  let t = 0;
  for (let n of Object.values(e.seeds)) t += n;
  for (let n of Object.values(e.dev)) t += n.e - n.s;
  if (e.market?.conflict) return 0;
  for (let n of Object.values(e.market?.lanes ?? {})) t += n.credit - n.debit;
  return t;
}
function N(e, t) {
  let n = T(t);
  return n
    ? Math.floor(Math.max(0, D(e) ? e : 0)) * n
    : t === `mumbai`
      ? Math.floor(Math.max(0, D(e) ? e : 0)) * 3
      : Math.floor(Math.max(0, D(e) ? e : 0) / w[t]);
}
function P(e, t) {
  let n = T(t);
  return n
    ? Math.floor(Math.max(0, D(e) ? e : 0) / n)
    : t === `mumbai`
      ? Math.floor(Math.max(0, D(e) ? e : 0) / 3)
      : e * w[t];
}
function Ie(e) {
  let t = e.wallet,
    n = Object.keys(t.seeds);
  return n.length === 1 &&
    n[0] === `start` &&
    t.seeds.start === F(`mumbai`) &&
    Object.values(t.dev).every((e) => !e.e && !e.s) &&
    !Object.keys(t.market?.lanes ?? {}).length
    ? 500 - F(`mumbai`) * 3
    : 0;
}
function Le(e) {
  return E(e) ? O(e.rupeeChange, 0, 2, 0) : 0;
}
function Re(e, t) {
  let n = T(t);
  return n
    ? E(e)
      ? O(e.yenChange, 0, n - 1, 0)
      : 0
    : t === `mumbai`
      ? Le(e)
      : 0;
}
function ze(e) {
  return E(e) ? O(e.yenChange, 0, 4, 0) : 0;
}
function F(e) {
  return e === `tokyo`
    ? 500
    : e === `seoul`
      ? 1250
      : e === `mumbai`
        ? 166
        : 500 * w[e];
}
function I(e, t, n) {
  let r = t.slice(0, 80);
  return (
    !Object.prototype.hasOwnProperty.call(e.wallet.seeds, r) &&
    ((e.wallet.seeds[r] = Math.max(0, Math.round(D(n) ? n : 0))),
    (e.wallet.ntd = Math.max(0, M(e.wallet))),
    !0)
  );
}
function Be(e, t, n, r) {
  let i = Math.round(D(n) ? n : 0);
  if (!i) return 0;
  let a = (e.wallet.dev[t] ??= { e: 0, s: 0, at: r }),
    o = i;
  if (i > 0) a.e += i;
  else {
    let t = Math.min(-i, Math.max(0, M(e.wallet)));
    ((a.s += t), (o = t ? -t : 0));
  }
  return ((a.at = r), (e.wallet.ntd = Math.max(0, M(e.wallet))), o);
}
function L(e) {
  if (!E(e)) return;
  let t = (e) =>
      typeof e == `string` && /^[a-z][\w-]{0,23}$/i.test(e) && e !== `fists`,
    n = Array.isArray(e.owned)
      ? [...new Set(e.owned.filter(t))].slice(0, 16)
      : [],
    r = (e, n) => {
      let r = {};
      if (E(e))
        for (let [i, a] of Object.entries(e))
          t(i) && D(a) && (r[i] = O(a, 0, n));
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
    armor: O(e.armor, 0, 100),
    weapon: i,
  };
}
function R(e) {
  let t = {};
  if (!E(e)) return t;
  for (let [n, r] of Object.entries(e)) {
    if (Object.keys(t).length >= 64) break;
    n.length > 0 && n.length <= 40 && k(r) && (t[n] = r);
  }
  return (t.lang === `ja` && delete t.lang, t);
}
function z(e) {
  if (!E(e)) return;
  let t = {};
  for (let [n, r] of Object.entries(e)) {
    if (Object.keys(t).length >= 340) break;
    ge.test(n) && D(r) && r >= 1 && (t[n] = O(r, 1, 100));
  }
  return t;
}
function Ve(e, t, n) {
  let r = { ...(e ?? {}) },
    i = n ?? {};
  for (let e of new Set([...Object.keys(t), ...Object.keys(i)])) {
    let n = (t[e] ?? 0) - (i[e] ?? 0);
    if (!n) continue;
    let a = Math.max(0, Math.min(100, (r[e] ?? 0) + n));
    a ? (r[e] = a) : delete r[e];
  }
  return z(r) ?? {};
}
function B(e) {
  if (!Array.isArray(e)) return;
  let t = new Set();
  for (let n of e) {
    if (t.size >= 384) break;
    typeof n == `string` && ge.test(n) && t.add(n);
  }
  return [...t];
}
var V = (e, t) => B([...(e ?? []), ...(t ?? [])]) ?? [];
function He(e) {
  if (!E(e)) return;
  let t =
    typeof e.startDate == `string` && /^\d{4}-\d{2}-\d{2}$/.test(e.startDate)
      ? e.startDate
      : void 0;
  if (!D(e.hour) && !t) return;
  let n = { day: O(e.day, 0, 1e6) };
  return (
    D(e.hour) && (n.hour = ((e.hour % 24) + 24) % 24),
    t && (n.startDate = t),
    n
  );
}
function Ue(e) {
  if (!E(e) || !E(e.wallet)) return;
  let t = e.wallet,
    r = {};
  if (E(t.seeds))
    for (let [e, n] of Object.entries(t.seeds)) {
      if (Object.keys(r).length >= je) break;
      e.length > 0 && e.length <= 80 && D(n) && (r[e] = O(n, 0, Ne));
    }
  let i = {};
  if (E(t.dev))
    for (let [e, n] of Object.entries(t.dev)) {
      if (Object.keys(i).length >= Me) break;
      /^[\w-]{1,40}$/.test(e) &&
        E(n) &&
        (i[e] = {
          e: O(n.e, 0, Ne),
          s: O(n.s, 0, Ne),
          at: O(n.at, 0, 0x38d7ea4c68000),
        });
    }
  let a = E(e.player) ? e.player : {},
    o = {};
  (n(a.character) && (o.character = a.character),
    k(a.outfit) && (o.outfit = a.outfit));
  let s = L(a.loadout);
  s && (o.loadout = s);
  let c = E(e.at) ? e.at : {},
    l = {
      v: 1,
      wallet: { ntd: 0, seeds: r, dev: i },
      player: o,
      settings: R(e.settings),
      at: {
        player: O(c.player, 0, 0x38d7ea4c68000),
        settings: O(c.settings, 0, 0x38d7ea4c68000),
        clock: O(c.clock, 0, 0x38d7ea4c68000),
      },
      since: O(e.since, 0, 0x38d7ea4c68000),
    },
    u = z(e.bag);
  u && ((l.bag = u), (l.at.bag = O(c.bag, 0, 0x38d7ea4c68000)));
  let d = B(e.book);
  d?.length && (l.book = d);
  let f = We(t.market);
  (f && (l.wallet.market = f), (l.wallet.ntd = Math.max(0, M(l.wallet))));
  let p = He(e.clock);
  return (p && (l.clock = p), e.adopted === !0 && (l.adopted = !0), l);
}
function We(e) {
  if (e === void 0) return;
  let t = { lanes: {} };
  if (!E(e) || !E(e.lanes)) return { ...t, conflict: !0 };
  e.conflict === !0 && (t.conflict = !0);
  let n = Object.entries(e.lanes);
  n.length > 64 && (t.conflict = !0);
  for (let [e, r] of n) {
    if (
      !/^[\w-]{1,40}$/.test(e) ||
      !E(r) ||
      !Number.isSafeInteger(r.revision) ||
      Number(r.revision) < 1 ||
      !Number.isSafeInteger(r.debit) ||
      Number(r.debit) < 0 ||
      !Number.isSafeInteger(r.credit) ||
      Number(r.credit) < 0 ||
      (r.pending !== void 0 &&
        (!E(r.pending) || JSON.stringify(r.pending).length > 8192))
    ) {
      t.conflict = !0;
      continue;
    }
    t.lanes[e] = {
      revision: Number(r.revision),
      debit: Number(r.debit),
      credit: Number(r.credit),
      ...(r.pending === void 0 ? {} : { pending: U(r.pending) }),
    };
  }
  return t;
}
var H = (e) =>
  Array.isArray(e)
    ? `[${e.map(H).join(`,`)}]`
    : E(e)
      ? `{${Object.keys(e)
          .sort()
          .map((t) => `${JSON.stringify(t)}:${H(e[t])}`)
          .join(`,`)}}`
      : (JSON.stringify(e) ?? `null`);
function Ge(e, t) {
  if (!e && !t) return;
  let n = { lanes: {} };
  for (let r of [e, t])
    if (r) {
      r.conflict && (n.conflict = !0);
      for (let [e, t] of Object.entries(r.lanes)) {
        let r = n.lanes[e];
        if (!r) {
          n.lanes[e] = U(t);
          continue;
        }
        let i = t.revision > r.revision ? t : r,
          a = i === t ? r : t;
        (((t.revision === r.revision && H(t) !== H(r)) ||
          i.debit < a.debit ||
          i.credit < a.credit) &&
          (n.conflict = !0),
          (n.lanes[e] = U(t.revision === r.revision && H(t) > H(r) ? t : i)));
      }
    }
  return (Object.keys(n.lanes).length > 64 && (n.conflict = !0), n);
}
function Ke(e) {
  let t = Ue(e);
  for (let e of Oe) delete t.settings[e];
  return (delete t.adopted, t);
}
function qe(e, t) {
  let n = e ? Ue(e) : void 0,
    r = t ? Ue(t) : void 0;
  if ((r && delete r.adopted, n?.adopted)) return r ? Je(r, n) : void 0;
  if (!n) return r;
  if (!r) return n;
  let i = [n.since, r.since].filter((e) => e > 0),
    a = Fe(i.length ? Math.min(...i) : 0);
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
  let o = Ge(n.wallet.market, r.wallet.market);
  (o && (a.wallet.market = o), (a.wallet.ntd = Math.max(0, M(a.wallet))));
  let s = r.at.player > n.at.player ? r : n;
  ((a.player = U(s.player)), (a.at.player = s.at.player));
  let c = r.at.settings > n.at.settings ? r : n;
  ((a.settings = { ...c.settings }), (a.at.settings = c.at.settings));
  let l = r.at.clock > n.at.clock ? r : n;
  (l.clock && (a.clock = { ...l.clock }), (a.at.clock = l.at.clock));
  let u = n.bag ? (r.bag && (r.at.bag ?? 0) > (n.at.bag ?? 0) ? r : n) : r;
  u.bag && ((a.bag = { ...u.bag }), (a.at.bag = u.at.bag ?? 0));
  for (let e of [n, r])
    for (let t of Object.keys(e.bag ?? {}))
      t.startsWith(`car-`) && ((a.bag ??= {})[t] = 1);
  let d = V(n.book, r.book);
  return (d.length && (a.book = d), Je(a, n));
}
function Je(e, t) {
  for (let n of Oe) t.settings[n] !== void 0 && (e.settings[n] = t.settings[n]);
  return e;
}
function U(e) {
  return JSON.parse(JSON.stringify(e));
}
var Ye = (e) => {
  let t =
    E(e) && typeof e.lastPlayedAt == `string`
      ? Date.parse(e.lastPlayedAt)
      : NaN;
  return Number.isFinite(t) ? t : 0;
};
function Xe(e, t, n) {
  if (!E(n) || A(n)) return !1;
  let r = I(e, `fold:${t}:${Pe(n)}`, P(j(n), t));
  return (r && t === `mumbai` && Qe(e, n, Date.now()), r);
}
function Ze(e, t, n, r) {
  if (!h(t) || !E(n) || A(n)) return !1;
  let i = `bag:${t}:${Pe(n)}`.slice(0, 80);
  if (Object.prototype.hasOwnProperty.call(e.wallet.seeds, i)) return !1;
  e.wallet.seeds[i] = 0;
  let a = z(n.bag);
  a && Object.keys(a).length && ((e.bag = Ve(e.bag, a, {})), (e.at.bag = r));
  let o = B(n.bagBook);
  return (o?.length && (e.book = V(e.book, o)), !0);
}
function Qe(e, t, n = 0) {
  let r = z(t.bag);
  if (r && Object.keys(r).length) {
    let t = { ...(e.bag ?? {}) };
    for (let [e, n] of Object.entries(r)) t[e] = Math.min(100, (t[e] ?? 0) + n);
    ((e.bag = z(t) ?? {}), (e.at.bag = Math.max(e.at.bag ?? 0, n)));
  }
  let i = V(e.book, V(B(t.bagBook), r ? Object.keys(r) : []));
  i.length && (e.book = i);
}
function $e(e) {
  let t = Fe(e.now),
    r = Object.keys(w).filter((t) => E(e.saves[t])),
    i = r.filter((t) => !A(e.saves[t]));
  for (let n of i) (Xe(t, n, e.saves[n]), Ze(t, n, e.saves[n], e.now));
  (!i.length &&
    r.length &&
    I(t, `mirror`, Math.max(...r.map((t) => P(j(e.saves[t]), t)))),
    r.length || I(t, `start`, F(e.here)));
  let a = r
      .filter((e) => !h(e))
      .sort(
        (t, n) =>
          Ye(e.saves[n]) - Ye(e.saves[t]) || +(n === e.at) - (t === e.at),
      ),
    o = a[0];
  if (!o) return t;
  let s = e.saves[o],
    c = Ye(s);
  ((t.settings = R(s.settings)), (t.at.settings = c));
  let l = E(s.player) ? s.player : {},
    u = e.prefs?.[o],
    d = n(l.character)
      ? l.character
      : E(u) && n(u.character)
        ? u.character
        : void 0;
  (d && (t.player.character = d), k(l.outfit) && (t.player.outfit = l.outfit));
  let f;
  for (let t of a) {
    let n = L(E(e.saves[t]) ? e.saves[t].player?.loadout : void 0);
    if (n) {
      if (!f) {
        f = n;
        continue;
      }
      for (let e of n.owned)
        f.owned.includes(e) ||
          (f.owned.push(e),
          n.ammo[e] !== void 0 && (f.ammo[e] = n.ammo[e]),
          n.mag[e] !== void 0 && (f.mag[e] = n.mag[e]));
    }
  }
  (f && (t.player.loadout = f), (t.at.player = c));
  let p = He({ hour: s.hour, day: s.day, startDate: s.startDate });
  return (p && (t.clock = we(p, o)), (t.at.clock = c), t);
}
function et(e, t, n) {
  if (h(n)) return tt(e, t, n);
  let r =
    n === `tokyo`
      ? typeof e.langJa == `boolean`
        ? e.langJa
        : E(e.settings) && typeof e.settings.lang == `string`
          ? e.settings.lang === `ja`
          : void 0
      : void 0;
  if (n === `tokyo`) {
    let r = A(e) ? ze(e) : j(e) % 5;
    ((e.yenChange = r), (e.money = N(t.wallet.ntd, n) + r));
  } else if (n === `mumbai`) {
    let r = A(e) ? Le(e) : `money` in e ? j(e) % 3 : Ie(t);
    ((e.rupeeChange = r), (e.money = N(t.wallet.ntd, n) + r));
  } else e.money = N(t.wallet.ntd, n);
  (Object.keys(t.settings).length &&
    (e.settings = { ...(E(e.settings) ? e.settings : {}), ...t.settings }),
    r !== void 0 &&
      ((e.langJa = r),
      r &&
        (e.settings = { ...(E(e.settings) ? e.settings : {}), lang: `ja` })));
  let i = E(e.player) ? { ...e.player } : {};
  if (
    (t.player.character && (i.character = t.player.character),
    t.player.outfit !== void 0 && (i.outfit = t.player.outfit),
    t.player.loadout && (i.loadout = U(t.player.loadout)),
    Object.keys(i).length && (e.player = i),
    t.bag && (e.bag = { ...t.bag }),
    t.book?.length && (e.bagBook = V(B(e.bagBook), t.book)),
    t.clock)
  ) {
    let r = Ce(t.clock, n);
    (r.hour !== void 0 && (e.hour = r.hour),
      (e.day = r.day),
      r.startDate && (e.startDate = r.startDate));
  } else
    t.clock &&
      (t.clock.hour !== void 0 && (e.hour = t.clock.hour),
      (e.day = t.clock.day),
      t.clock.startDate && (e.startDate = t.clock.startDate));
  return ((e[Ae] = 1), e);
}
function tt(e, t, n) {
  let r = T(n);
  if (r) {
    let i = A(e) ? Re(e, n) : e.money === void 0 ? 0 : j(e) % r;
    ((e.yenChange = i), (e.money = N(t.wallet.ntd, n) + i));
  } else e.money = N(t.wallet.ntd, n);
  return (
    t.bag && (e.bag = { ...t.bag }),
    t.book?.length && (e.bagBook = V(B(e.bagBook), t.book)),
    (e[Ae] = 1),
    e
  );
}
function nt(e) {
  let t = E(e) ? e : {},
    n = E(t.player) ? t.player : {},
    r = { money: j(t), settings: R(t.settings) };
  (typeof n.character == `string` && (r.character = n.character),
    k(n.outfit) && (r.outfit = n.outfit));
  let i = L(n.loadout);
  i && (r.loadout = i);
  let a = He({ hour: t.hour, day: t.day, startDate: t.startDate });
  a && (r.clock = a);
  let o = z(t.bag);
  return (o && (r.bag = o), r);
}
function rt(e, t, n, r = ke) {
  if (!e || !n) {
    let n = U(t);
    for (let t of e?.owned ?? [])
      !r.includes(t) && !n.owned.includes(t) && n.owned.push(t);
    return n;
  }
  let i = U(e);
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
function it(e, t, n, r, i, a) {
  if (r === `tokyo`) return at(e, t, n, i, a);
  if (r === `seoul`) return ot(e, t, n, r, i, a);
  if (r === `mumbai`) return st(e, t, n, i, a);
  let o = j(t),
    s = o === n.money ? 0 : Be(e, i, (o - n.money) * w[r], a);
  return ((t.money = N(e.wallet.ntd, r)), (n.money = t.money), s);
}
function at(e, t, n, r, i) {
  let a = j(t),
    o = 0,
    s = ze(t);
  if (a !== n.money) {
    let t = s + (a - n.money),
      c = Math.floor(t / 5);
    ((o = Be(e, r, c, i)),
      (s = o === c ? t - c * 5 : Math.max(0, Math.min(4, s))));
  }
  return (
    (t.yenChange = s),
    (t.money = N(e.wallet.ntd, `tokyo`) + s),
    (n.money = t.money),
    o
  );
}
function ot(e, t, n, r, i, a) {
  let o = T(r),
    s = j(t),
    c = 0,
    l = Re(t, r);
  if (s !== n.money) {
    let t = l + (s - n.money),
      r = Math.floor(t / o);
    ((c = Be(e, i, r, a)),
      (l = c === r ? t - r * o : Math.max(0, Math.min(o - 1, l))));
  }
  return (
    (t.yenChange = l),
    (t.money = N(e.wallet.ntd, r) + l),
    (n.money = t.money),
    c
  );
}
function st(e, t, n, r, i) {
  let a = j(t),
    o = 0,
    s = Le(t);
  if (a !== n.money) {
    let t = s + (a - n.money),
      c = Math.floor(t / 3);
    ((o = Be(e, r, c, i)),
      (s = o === c ? t - c * 3 : Math.max(0, Math.min(2, s))));
  }
  return (
    (t.rupeeChange = s),
    (t.money = N(e.wallet.ntd, `mumbai`) + s),
    (n.money = t.money),
    o
  );
}
function ct(e, t, r, i, a, o) {
  let s = { money: it(e, t, r, i, a, o), changed: !1 };
  if (h(i)) return ((s.changed = lt(e, t, r, o)), (t[Ae] = 1), s);
  let c = R(t.settings),
    l = !1;
  for (let [t, n] of Object.entries(c))
    r.settings[t] !== n &&
      e.settings[t] !== n &&
      ((e.settings[t] = n), (l = !0));
  ((r.settings = c), l && (e.at.settings = o));
  let u = E(t.player) ? t.player : {},
    d = !1;
  (n(u.character) &&
    u.character !== r.character &&
    (e.player.character !== u.character &&
      ((e.player.character = u.character), (d = !0)),
    (r.character = u.character)),
    k(u.outfit) &&
      u.outfit !== r.outfit &&
      (e.player.outfit !== u.outfit && ((e.player.outfit = u.outfit), (d = !0)),
      (r.outfit = u.outfit)));
  let f = L(u.loadout);
  if (f && JSON.stringify(f) !== JSON.stringify(r.loadout)) {
    let t = rt(e.player.loadout, f, r.loadout);
    (JSON.stringify(t) !== JSON.stringify(e.player.loadout) &&
      ((e.player.loadout = t), (d = !0)),
      (r.loadout = f));
  }
  d && (e.at.player = o);
  let p = lt(e, t, r, o),
    m = He({ hour: t.hour, day: t.day, startDate: t.startDate });
  return (
    m &&
      JSON.stringify(m) !== JSON.stringify(r.clock) &&
      ((e.clock = we(m, i)), (e.at.clock = o), (r.clock = m), (s.changed = !0)),
    (t[Ae] = 1),
    (s.changed ||= l || d || p),
    s
  );
}
function lt(e, t, n, r) {
  let i = z(t.bag),
    a = !1;
  if (i && JSON.stringify(i) !== JSON.stringify(n.bag ?? {})) {
    let o = Ve(e.bag, i, n.bag);
    (JSON.stringify(o) !== JSON.stringify(e.bag ?? {}) &&
      ((e.bag = o), (e.at.bag = r), (a = !0)),
      (t.bag = { ...o }),
      (n.bag = { ...o }));
  }
  let o = B(t.bagBook);
  if (o?.length) {
    let n = V(e.book, o);
    (n.length !== (e.book?.length ?? 0) && ((e.book = n), (a = !0)),
      (t.bagBook = [...n]));
  }
  return a;
}
function ut(e, t) {
  if (t.from) return Ee(e, { ...t, from: t.from });
  let n = t.depMin / 60 + t.hours;
  t.from && (n -= m(t.from));
  let r = {
    day: (e?.day ?? 0) + +!!t.nextDay + Math.floor(n / 24),
    hour: ((n % 24) + 24) % 24,
  };
  return (e?.startDate && (r.startDate = e.startDate), r);
}
var dt = `gta-travel-v1`,
  W = l;
function ft(e) {
  let t = {};
  e.mode === `hsr` && (t.mode = `hsr`);
  let n = G(e.tz, -24, 24);
  return (n && (t.tz = n), t);
}
var G = (e, t, n) =>
    typeof e == `number` && Number.isFinite(e) && e >= t && e <= n ? e : null,
  K = (e, t = 40) =>
    typeof e == `string` && e.length > 0 && e.length <= t ? e : null;
function pt(e) {
  if (!e || typeof e != `object`) return null;
  let t = e,
    n = K(t.id),
    i = K(t.flight, 16),
    a = K(t.gate, 8),
    o = K(t.seat, 8);
  if (!n || !i || !W(t.from) || !W(t.to) || t.from === t.to) return null;
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
        id: n,
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
        passenger: r(t.passenger),
        ...(t.v === 2 ? { v: 2 } : {}),
        ...ft(t),
      };
}
function q(e) {
  let t = e && typeof e == `object` ? e : {},
    n = { v: 1, flights: 0, stamps: {} };
  (G(t.updatedAt, 0, 0x38d7ea4c68000) !== null && (n.updatedAt = t.updatedAt),
    Array.isArray(t.resolved) &&
      (n.resolved = t.resolved
        .flatMap((e) => {
          let t = pt(e?.ticket),
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
  let r = pt(t.ticket);
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
  let o = Ue(t.shared);
  return (o && (n.shared = o), n);
}
function J() {
  try {
    let e = localStorage.getItem(dt);
    return q(e ? JSON.parse(e) : null);
  } catch {
    return q(null);
  }
}
function Y(e) {
  try {
    return (
      localStorage.setItem(dt, JSON.stringify({ ...e, updatedAt: Date.now() })),
      typeof window < `u` && window.dispatchEvent(new Event(`travel:changed`)),
      !0
    );
  } catch {
    return !1;
  }
}
function mt(e = Date.now(), t = Math.random) {
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
function ht(e, t, n = Date.now()) {
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
    gt(r, t, `arrived`, n)
  );
}
function gt(e, t, n, r) {
  let i = q({
    ...e,
    updatedAt: r,
    resolved: [{ ticket: t, status: n, at: r }, ...(e.resolved ?? [])],
  });
  return (i.ticket?.id === t.id && delete i.ticket, i);
}
function _t(e, t) {
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
  let a = qe(n.shared, r.shared);
  return (a ? (i.shared = a) : delete i.shared, i);
}
function vt(e, t, n = 500) {
  let r = X(e);
  if (r.in?.includes(t.id)) return !1;
  let i = typeof e.money == `number` && Number.isFinite(e.money) ? e.money : n;
  return (
    (e.money = Math.max(0, Math.round(i + t.credit))),
    (e.travel = { ...r, in: [...(r.in ?? []), t.id].slice(-20) }),
    !0
  );
}
function yt(e, t) {
  let n = X(e);
  return (
    !n.in?.includes(t.id) &&
    ((e.travel = { ...n, in: [...(n.in ?? []), t.id].slice(-20) }), !0)
  );
}
function bt(e, t) {
  let n = X(e);
  if (n.out !== t.id) return 0;
  let r = t.fare + t.cash,
    i = { ...n, refunded: [...(n.refunded ?? []), t.id].slice(-20) };
  return (delete i.out, (e.travel = i), r);
}
var xt = class extends Error {},
  Z =
    (f.seoul?.saveKey === `tokyo-rush-save-v1`
      ? `seoul`
      : f.jakarta?.saveKey === `tokyo-rush-save-v1`
        ? `jakarta`
        : null) ??
    (f.mumbai?.saveKey === `tokyo-rush-save-v1`
      ? `mumbai`
      : f.taichung?.saveKey === `tokyo-rush-save-v1`
        ? `taichung`
        : f.tainan?.saveKey === `tokyo-rush-save-v1`
          ? `tainan`
          : f.london?.saveKey === `tokyo-rush-save-v1`
            ? `london`
            : f.tokyo?.saveKey === `tokyo-rush-save-v1`
              ? `tokyo`
              : f.kaohsiung.saveKey === `tokyo-rush-save-v1`
                ? `kaohsiung`
                : f[`hong-kong`].saveKey === `tokyo-rush-save-v1`
                  ? `hong-kong`
                  : `taipei`),
  St = `gta-travel-device-v1`,
  Q = null;
function Ct() {
  if (Q) return Q;
  let e = () =>
    (
      globalThis.crypto?.randomUUID?.() ??
      `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
    )
      .replace(/[^\w-]/g, ``)
      .slice(0, 36);
  try {
    let t = localStorage.getItem(St);
    if (t && /^[\w-]{8,40}$/.test(t)) return (Q = t);
    let n = e();
    return (localStorage.setItem(St, n), (Q = (localStorage.getItem(St), n)));
  } catch {
    return (Q = e());
  }
}
function wt(e) {
  try {
    let t = JSON.parse(localStorage.getItem(f[e].prefsKey) || `null`);
    return t && typeof t == `object` && !Array.isArray(t) ? t : null;
  } catch {
    return null;
  }
}
function Tt() {
  try {
    return i(f[d(Z)].saveKey);
  } catch {
    return null;
  }
}
function Et(e) {
  try {
    let n = i(f[e].saveKey);
    return t(n) ? null : n;
  } catch {
    return null;
  }
}
function Dt(e, n, r = Date.now()) {
  let i = d(Z),
    a = { [Z]: t(n) ? null : n, [i]: Tt() };
  t(a[i]) && (a[i] = null);
  for (let e of u(Z)) e !== i && c(e) && (a[e] = Et(e));
  let o = !1;
  if (!e.shared)
    ((e.shared = $e({
      here: Z,
      now: r,
      saves: a,
      prefs: Object.fromEntries([Z, ...u(Z).filter(c)].map((e) => [e, wt(e)])),
      at: e.at,
    })),
      (o = !0),
      console.info(
        `[travel] shared wallet created: NT$${e.shared.wallet.ntd} (${Object.keys(e.shared.wallet.seeds).join(`, `) || `empty`})`,
      ));
  else
    for (let t of [Z, ...u(Z).filter(c)])
      (Xe(e.shared, t, a[t]) &&
        ((o = !0),
        console.info(
          `[travel] ${t}'s save folded into the shared wallet: NT$${e.shared.wallet.ntd}`,
        )),
        Ze(e.shared, t, a[t], r) &&
          ((o = !0),
          console.info(`[travel] ${t}'s backpack folded into the shared one`)));
  let s = e.shared.wallet,
    l =
      Object.keys(s.seeds).every((e) => e === `start`) &&
      Object.values(s.dev).every((e) => !e.e && !e.s) &&
      !s.market?.conflict &&
      Object.keys(s.market?.lanes ?? {}).length === 0,
    f = F(Z);
  return (
    l &&
      !(n && typeof n == `object`) &&
      (s.seeds.start ?? 0) < f &&
      ((s.seeds.start = f), (s.ntd = Math.max(0, M(s))), (o = !0)),
    { rec: e, changed: o }
  );
}
function Ot(e, n = Date.now()) {
  let r = { arrival: null, cancelled: null };
  try {
    let i = o();
    if (t(i)) return r;
    let a = i && typeof i == `object` && !Array.isArray(i) ? i : null,
      { rec: s, changed: c } = Dt(J(), a, n),
      l = s.ticket;
    (l && l.to === Z
      ? (r.arrival = At(s, a, l, n, e))
      : l && l.from === Z
        ? (r.cancelled = jt(s, a, l, n))
        : (!c || Y(s)) && kt(a, s),
      h(Z) || Mt(J().shared));
  } catch (e) {
    console.warn(`[travel] boot failed`, e);
  }
  return r;
}
function kt(e, t, n = !1) {
  if (!e || !t.shared) return;
  let r = JSON.stringify(e);
  (et(e, t.shared, Z), (n || JSON.stringify(e) !== r) && s(e) && n && a());
}
function At(e, t, n, r, i) {
  let a = !t,
    o = t ?? {},
    s = e.shared;
  (n.credit > 0 &&
    !X(o).in?.includes(n.id) &&
    I(s, `ticket:${n.id}`, P(n.credit, Z)),
    yt(o, n),
    a && (o.travel = { ...o.travel, arrivalOnly: !0 }),
    (o.lastPlayedAt = new Date(r).toISOString()),
    s.player.character || (s.player.character = n.passenger));
  let c = a ? null : i(n.mode === `hsr` ? `hsr` : `flight`);
  if (c) {
    o.pos = { x: c.x, z: c.z, heading: c.heading };
    let e = o.player;
    e && typeof e == `object` && delete e.at;
  }
  let l = ut(s.clock, n);
  ((s.clock = l), (s.at.clock = r));
  let u = ht(e, n, r);
  return Y(u)
    ? (kt(o, u, !0),
      console.info(
        `[travel] arrived ${n.flight} ${f[n.from].airport.code} → ${f[n.to].airport.code}${n.credit > 0 ? `: +${n.credit} ${f[n.to].currency} (an old ticket's cash)` : ``}${a ? ` (first visit — new game)` : ``}`,
      ),
      { ticket: n, first: a, hour: Ce(l, Z).hour ?? 12, record: u })
    : null;
}
function jt(e, t, n, r) {
  let i = !!t && X(t).out === n.id,
    a = t ? bt(t, n) : 0;
  a && I(e.shared, `refund:${n.id}`, P(a, n.from));
  let o = gt(e, n, `cancelled`, r);
  return Y(o)
    ? (kt(t, o, i),
      console.info(
        `[travel] ${n.flight} to ${n.to} never arrived — cancelled, ${a} refunded`,
      ),
      { ticket: n, refund: a })
    : null;
}
function Mt(e) {
  let t = e?.player.character;
  if (t)
    try {
      let e = wt(Z) ?? {};
      if (e.character === t) return;
      ((e.character = t),
        localStorage.setItem(f[Z].prefsKey, JSON.stringify(e)));
    } catch {}
}
function Nt(e) {
  if (t(e)) return e;
  try {
    let { rec: t, changed: n } = Dt(J(), e);
    return n && !Y(t)
      ? e
      : et(
          e && typeof e == `object` && !Array.isArray(e) ? { ...e } : {},
          t.shared,
          Z,
        );
  } catch (t) {
    return (console.warn(`[travel] shared state unavailable`, t), e);
  }
}
function Pt() {
  let e = J().shared;
  return e ? e.wallet.ntd : null;
}
function Ft(e) {
  if (!c(e)) return null;
  let t = Pt();
  return t === null ? null : N(t, e);
}
function $() {
  try {
    return localStorage.getItem(dt);
  } catch {
    return null;
  }
}
function It() {
  try {
    let e = localStorage.getItem(`gta-travel-v1:identities-v1`) ?? ``;
    return /^\{"active":"([^"]*)"/.exec(e)?.[1] ?? `guest`;
  } catch {
    return `guest`;
  }
}
var Lt = class {
  st;
  onRemote;
  base;
  seen;
  identity;
  constructor(e, t) {
    ((this.st = e),
      (this.onRemote = t),
      (this.base = nt(e.data)),
      (this.seen = $()),
      (this.identity = It()),
      typeof window < `u` &&
        typeof window.addEventListener == `function` &&
        (window.addEventListener(`storage`, (e) => {
          (e.key === null || e.key === `gta-travel-v1`) && this.refresh();
        }),
        window.addEventListener(`travel:applied`, () => this.refresh())));
  }
  foreign() {
    return this.st.resetting || this.st.qa === !0 || It() !== this.identity;
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
      r.shared || ({ rec: r, changed: i } = Dt(r, null));
      let a = r.shared,
        o = typeof n == `number` && n !== this.base.money,
        s = Date.now();
      if (
        (e
          ? (i = ct(a, t, this.base, Z, Ct(), s).changed || i)
          : it(a, t, this.base, Z, Ct(), s),
        (o || i) && !Y(r))
      )
        throw new xt();
      this.seen = $();
    } catch (e) {
      ((t.money = n),
        (this.base = JSON.parse(r)),
        e instanceof xt || console.warn(`[travel] shared sync failed`, e));
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
      ((e.money = N(t.wallet.ntd, Z) + Re(e, Z)), (this.base.money = e.money));
    }
    e.money !== t && this.onRemote(e.money);
  }
  rebase() {
    ((this.base = nt(this.st.data)), (this.seen = $()));
  }
};
export {
  re as A,
  ze as C,
  ae as D,
  ie as E,
  he as F,
  pe as I,
  fe as L,
  ue as M,
  de as N,
  S as O,
  le as P,
  se as R,
  N as S,
  oe as T,
  Ke as _,
  Pt as a,
  B as b,
  vt as c,
  mt as d,
  J as f,
  w as g,
  Y as h,
  Nt as i,
  ee as j,
  me as k,
  yt as l,
  X as m,
  Z as n,
  Ft as o,
  q as p,
  Ot as r,
  dt as s,
  Lt as t,
  _t as u,
  A as v,
  Te as w,
  V as x,
  z as y,
  ce as z,
};
