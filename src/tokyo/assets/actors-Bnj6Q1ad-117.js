// tokyo/assets/actors-Bnj6Q1ad 117 — color
// Lines 55962-56267 of readable/tokyo/assets/actors-Bnj6Q1ad.pretty.js (statement-aligned).
function qk(e) {
  let t = [];
  try {
    let n = e.plan.spawns.start,
      r = new Kk(e, Zk.ming, n.x, n.z, 0, { immediate: !0 });
    if (r.kind !== `pending`) {
      (r.setVisible(!1), (r.root.visible = !0));
      for (let t of r.meshes)
        ((t.frustumCulled = !1), (t.castShadow = !!e.quality?.shadows));
      t.push(r);
    } else r.dispose();
  } catch (e) {
    console.warn(`[missions] actor prewarm failed`, e);
  }
  return {
    roots: t.map((e) => e.root),
    dispose() {
      for (let e of t) e.dispose();
      t.length = 0;
    },
  };
}
function Jk(e, t) {
  return hk(e)
    ? YO().then(async (n) => {
        if (!n) return !1;
        try {
          WO.api?.setAvatarRenderer(e.renderer.gl);
        } catch {}
        let r = [...new Set(t.map((e) => BO(e).avatar))];
        return (await Promise.all(r.map((e) => QO(e)))).every((e) => !!e);
      })
    : Promise.resolve(!1);
}
function Yk(e, t, n = {}) {
  let r = Yt(t) ?? nn(7, t),
    i = JSON.parse(JSON.stringify(r)),
    { face: a, ...o } = n;
  return (
    Object.assign(i, o),
    a && (i.face = Ht({ ...i.face, ...a })),
    (i.id = `m-${e}`),
    (i.seed = (r.seed ?? 1) + e.length * 97),
    LO(i, e),
    i
  );
}
var Xk = (...e) => e.map((e) => (typeof e == `string` ? { kind: e } : e)),
  Zk = {
    ming: Yk(`ming`, `ntu-student`, {
      height: 1.77,
      skin: Qt.tan,
      face: {
        jaw: 0.55,
        smile: 0.55,
        eyeSize: 1,
        lid: 0.3,
        brow: 0.65,
        facial: `stubble`,
      },
      hair: { style: `spiky`, color: Kt.black, color2: 13146712 },
      top: { style: `tee`, color: 15921386, print: `logo`, color2: 1842210 },
      bottom: { style: `shorts`, color: 9075290 },
      shoes: { style: `slipper`, color: 2382016, color2: 16053492 },
      acc: Xk(
        { kind: `shoulderBag`, color: 2043197 },
        { kind: `watch`, color: 1118483 },
      ),
    }),
    thief: Yk(`thief`, `ntu-student`, {
      face: { smile: -0.2, brow: 0.7 },
      hair: { style: `fade`, color: Kt.black },
      top: { style: `hoodie`, color: 1908516, color2: 1381914 },
      bottom: { style: `jeans`, color: 2832978 },
      shoes: {
        style: `sneaker`,
        color: 1118481,
        color2: 2236962,
        sole: 2763306,
      },
      acc: Xk(
        { kind: `cap`, color: 1118481 },
        { kind: `mask`, color: 2763306 },
      ),
    }),
    tourist: Yk(`tourist`, `tourist`, {
      top: { style: `tee`, color: 15328500, print: `taipei`, color2: 13115436 },
      acc: Xk(
        { kind: `bucket`, color: 15983555 },
        { kind: `backpack`, color: 13851210 },
        `phone`,
      ),
    }),
    auntie: Yk(`auntie`, `auntie`),
    templeUncle: Yk(`templeUncle`, `agong`, {
      top: { style: `tank`, color: 16119280 },
      bottom: { style: `slacks`, color: 3815994 },
      shoes: { style: `slipper`, color: 2382016, color2: 16053492 },
      acc: Xk({ kind: `fan`, color: 15852228, color2: 12730415 }),
    }),
    courier: Yk(`courier`, `rider-pink`),
    teaGirl: Yk(`teaGirl`, `clerk`, {
      hair: { style: `ponytail`, color: Kt.darkBrown },
      top: { style: `polo`, color: 3832410, color2: 15921902 },
      acc: Xk(
        { kind: `apron`, color: 2972228 },
        { kind: `cap`, color: 2972228 },
      ),
    }),
    friend: Yk(`friend`, `ximen-girl`, {
      hair: { style: `long`, color: 3808276, color2: 6959136 },
      top: { style: `sweater`, color: 14168122, sleeve: `long` },
      bottom: { style: `jeans`, color: 2764602 },
      acc: Xk({ kind: `shoulderBag`, color: 1579035 }, `phone`),
    }),
    office: Yk(`office`, `office-m`),
    student: Yk(`student`, `student-m`),
    grandma: Yk(`grandma`, `ama`),
    businesswoman: Yk(`businesswoman`, `office-f`, {
      outer: { style: `blazer`, color: 2764613, color2: 1843768 },
    }),
    uncle: Yk(`uncle`, `uncle`),
    backpacker: Yk(`backpacker`, `hipster`, {
      height: 1.86,
      skin: Qt.porcelain,
      face: {
        facial: `beard`,
        iris: 4876938,
        lid: 0.9,
        eyeSize: 1.02,
        noseL: 0.7,
        bridge: 0.8,
      },
      hair: { style: `wavy`, color: 12093498 },
      top: { style: `tee`, color: 3836522 },
      bottom: { style: `shorts`, color: 6974042 },
      shoes: { style: `boot`, color: 6965802 },
      acc: Xk(
        { kind: `backpack`, color: 14721072 },
        { kind: `cap`, color: 2775690 },
      ),
    }),
    hao: Yk(`hao`, `ntu-student`, {
      face: { smile: 0.25, brow: 0.7, eyeTilt: 0.2 },
      hair: { style: `twoblock`, color: 13137978, color2: 14721120 },
      top: { style: `tee`, color: 1381914 },
      outer: { style: `bomber`, color: 1381914, color2: 13115436 },
      bottom: { style: `jeans`, color: 2764344 },
      shoes: { style: `sneaker`, color: 15921906, color2: 1381914 },
      acc: Xk(`phone`, { kind: `necklace`, color: 14278112 }),
    }),
    bride: Yk(`bride`, `office-f`, {
      face: { lipColor: 13122122, blush: 0.4, liner: 0.6, smile: 0.5 },
      hair: { style: `bun`, color: Kt.softBlack },
      top: { style: `blouse`, color: 16513268, sleeve: `none` },
      outer: void 0,
      bottom: { style: `longskirt`, color: 16513268 },
      shoes: { style: `heel`, color: 16513268 },
      acc: Xk({ kind: `necklace`, color: 15257738 }),
    }),
    groom: Yk(`groom`, `salaryman`, {
      face: { smile: 0.45 },
      hair: { style: `sidepart`, color: Kt.black },
      outer: { style: `blazer`, color: 1776932, color2: 13112863, closed: !0 },
      bottom: { style: `slacks`, color: 1776932 },
      acc: Xk(`watch`),
    }),
    detective: Yk(`detective`, `salaryman`, {
      face: { facial: `mustache`, wrinkles: 0.35, smile: -0.1 },
      outer: {
        style: `windbreaker`,
        color: 12098154,
        color2: 9072720,
        closed: !0,
      },
      bottom: { style: `slacks`, color: 3421756 },
      acc: Xk({ kind: `cap`, color: 3815994 }, `sunglasses`),
    }),
    influencer: Yk(`influencer`, `ximen-girl`, {
      top: { style: `tee`, color: 16754392, print: `logo`, color2: 16777215 },
      bottom: { style: `skirt`, color: 15921910 },
      acc: Xk({ kind: `shoulderBag`, color: 16246688 }, `phone`, `sunglasses`),
    }),
    instructor: Yk(`instructor`, `taxi-uncle`, {
      top: { style: `polo`, color: 2779864, color2: 15921906 },
      bottom: { style: `slacks`, color: 12100218 },
      acc: Xk({ kind: `cap`, color: 15921906 }, `glasses`, {
        kind: `lanyard`,
        color: 2777784,
      }),
    }),
    vendor: Yk(`vendor`, `vendor`),
    cop: Yk(`cop`, `police`),
    nerd: Yk(`nerd`, `office-m`, {
      build: `heavy`,
      face: { cheek: 0.7, smile: 0.2 },
      hair: { style: `bowl`, color: Kt.black },
      top: {
        style: `shirt`,
        color: 5929546,
        pattern: `check`,
        patternColor: 2767402,
        sleeve: `short`,
      },
      bottom: { style: `jeans`, color: 2767466 },
      shoes: { style: `sneaker`, color: 3815994, color2: 3815994 },
      acc: Xk(`glasses`, { kind: `backpack`, color: 2763306 }),
    }),
    snatcher: Yk(`snatcher`, `rain-commuter`, {
      top: { style: `tee`, color: 1381914 },
      outer: {
        style: `windbreaker`,
        color: 1381914,
        color2: 2763306,
        closed: !0,
      },
      bottom: { style: `jeans`, color: 2042426 },
      shoes: { style: `sneaker`, color: 1118481, color2: 1118481 },
      acc: Xk(
        { kind: `helmet`, color: 1184274, color2: 657930 },
        { kind: `mask`, color: 2236962 },
      ),
    }),
    suit: Yk(`suit`, `salaryman`, {
      outer: { style: `blazer`, color: 5922408, color2: 4869720, closed: !0 },
      bottom: { style: `slacks`, color: 4869720 },
      acc: Xk(`glasses`, { kind: `shoulderBag`, color: 2760728 }, `watch`),
    }),
    photographer: Yk(`photographer`, `hipster`, {
      face: { facial: `beard`, wrinkles: 0.35, smile: 0.2 },
      hair: { style: `buzz`, color: 3814962 },
      top: {
        style: `shirt`,
        color: 5925450,
        sleeve: `long`,
        pattern: `check`,
        patternColor: 3820074,
      },
      outer: { style: `vest`, color: 6969914, color2: 4864554 },
      acc: Xk({ kind: `bucket`, color: 3815988 }, `glasses`, {
        kind: `shoulderBag`,
        color: 2761760,
      }),
    }),
    officerLin: Yk(`officerLin`, `salaryman`, {
      face: { jaw: 0.65, smile: 0.05, brow: 0.7, wrinkles: 0.2 },
      hair: { style: `fade`, color: Kt.black },
      top: { style: `shirt`, color: 14673646, tucked: !0 },
      outer: { style: `windbreaker`, color: 2043210, color2: 1450298 },
      bottom: { style: `slacks`, color: 2764342, belt: 1380879 },
      acc: Xk({ kind: `lanyard`, color: 2777784 }, `watch`),
    }),
    enforcer: Yk(`enforcer`, `salaryman`, {
      build: `heavy`,
      face: {
        jaw: 0.8,
        smile: -0.3,
        brow: 0.8,
        facial: `stubble`,
        wrinkles: 0.3,
      },
      hair: { style: `undercut`, color: Kt.black },
      top: { style: `shirt`, color: 1315862, sleeve: `short` },
      outer: void 0,
      bottom: { style: `slacks`, color: 1842208, belt: 921104 },
      acc: Xk({ kind: `necklace`, color: 14263584 }, `sunglasses`, {
        kind: `watch`,
        color: 14263584,
      }),
    }),
    agong: Yk(`agong`, `agong`),
    mom: Yk(`mom`, `mom`),
    officeLady: Yk(`officeLady`, `office-f`),
    salaryman: Yk(`salaryman`, `salaryman`),
    hipster: Yk(`hipster`, `hipster`),
    worker: Yk(`worker`, `worker`),
    taxiDriver: Yk(`taxiDriver`, `taxi-uncle`),
    templeLady: Yk(`templeLady`, `temple-lady`),
    clerk: Yk(`clerk`, `clerk`),
    riderGreen: Yk(`riderGreen`, `rider-green`),
    studentGirl: Yk(`studentGirl`, `student-f`),
    jogger: Yk(`jogger`, `jogger`),
    ximenGirl: Yk(`ximenGirl`, `ximen-girl`),
  };
function Qk(e, t, n) {
  let r = `v:${t}`,
    i = Zk[r];
  if (!i) {
    let a = Zk[e] ?? Zk.uncle;
    i = JSON.parse(JSON.stringify(a));
    let { face: o, ...s } = n;
    (Object.assign(i, s),
      o && (i.face = Ht({ ...i.face, ...o })),
      (i.id = `m-${t}`),
      LO(i, Zk[e] ? e : `uncle`, VO(n)),
      (Zk[r] = i));
  }
  return i;
}
function $k(e) {
  if (!e) return null;
  if (Zk[e]) return Zk[e];
  if (!Yt(e)) return null;
  let t = Zk[`preset:${e}`];
  return (t || ((t = Zk[`preset:${e}`] = Yk(`p-${e}`, e)), LO(t, e)), t);
}
