// tokyo__assets__actors-Bnj6Q1ad 118 — officer
// Lines 56268-56324 of readable/tokyo__assets__actors-Bnj6Q1ad.pretty.js (statement-aligned).
var eA = [
    [/林警官|Officer Lin/i, `officerLin`],
    [/扒手|小偷|pickpocket|thief/i, `thief`],
    [/搶匪|snatcher/i, `snatcher`],
    [/小胖|hacker|駭客/i, `nerd`],
    [/刀疤|強哥|Scarface|討債|thug|小弟/i, `enforcer`],
    [/阿嬤|奶奶|婆婆/, `grandma`],
    [/阿公|爺爺|廟公|林伯|財伯|老伯/, `agong`],
    [/警|Officer|police/i, `cop`],
    [/阿明|表哥/, `ming`],
    [/外送|快遞|courier|rider/i, `courier`],
    [/司機|運將|driver/i, `taxiDriver`],
    [/攤|老闆(?!娘)|vendor|chef|師傅/i, `vendor`],
    [/老闆娘|阿姨|太太|媽媽|大嬸|auntie|Mrs/i, `auntie`],
    [/廟|宮|volunteer/i, `templeLady`],
    [/店員|clerk/i, `clerk`],
    [/教練|考官|coach|examiner/i, `instructor`],
    [/攝影|photographer/i, `hipster`],
    [/觀光客|遊客|tourist|美咲|陽菜|由紀/i, `tourist`],
    [/學生|同學|小妹|student/i, `studentGirl`],
    [/工人|工頭|worker/i, `worker`],
    [/網紅|influencer/i, `influencer`],
    [/新郎|groom/i, `groom`],
    [/新娘|bride/i, `bride`],
    [/阿伯|伯伯|大叔|uncle/i, `uncle`],
    [/小姐|Ms\.|Miss/i, `officeLady`],
    [/先生|經理|Mr\.|manager/i, `salaryman`],
    [/跑者|runner/i, `jogger`],
  ],
  tA = {
    story: [`salaryman`, `mom`, `uncle`],
    job: [`courier`, `riderGreen`, `vendor`],
    race: [`hao`, `hipster`, `ximenGirl`],
    culture: [`templeLady`, `agong`, `templeUncle`],
    side: [
      `officeLady`,
      `hipster`,
      `mom`,
      `salaryman`,
      `student`,
      `ximenGirl`,
      `uncle`,
      `auntie`,
    ],
  };
function nA(e) {
  for (let [t, n] of eA) if (t.test(e)) return n;
  return null;
}
function rA(e, t, n) {
  let r = e ? `${e.zh} ${e.en}` : ``;
  for (let [e, t] of eA) if (r && e.test(r)) return t;
  let i = tA[t] ?? tA.side,
    a = 0;
  for (let e = 0; e < n.length; e++) a = (a * 31 + n.charCodeAt(e)) >>> 0;
  return i[a % i.length];
}
