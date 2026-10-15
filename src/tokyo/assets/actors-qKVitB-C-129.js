// tokyo/assets/actors-qKVitB-C 129 — color
// Lines 59865-60170 of readable/tokyo/assets/actors-qKVitB-C.pretty.js (statement-aligned).
function jM(e) {
  let t = [];
  try {
    let n = e.plan.spawns.start,
      r = new AM(e, FM.ming, n.x, n.z, 0, { immediate: !0 });
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
function MM(e, t) {
  return $j(e)
    ? Nj().then(async (n) => {
        if (!n) return !1;
        try {
          Oj.api?.setAvatarRenderer(e.renderer.gl);
        } catch {}
        let r = [...new Set(t.map((e) => wj(e).avatar))];
        return (await Promise.all(r.map((e) => Ij(e)))).every((e) => !!e);
      })
    : Promise.resolve(!1);
}
function NM(e, t, n = {}) {
  let r = cn(t) ?? hn(7, t),
    i = JSON.parse(JSON.stringify(r)),
    { face: a, ...o } = n;
  return (
    Object.assign(i, o),
    a && (i.face = en({ ...i.face, ...a })),
    (i.id = `m-${e}`),
    (i.seed = (r.seed ?? 1) + e.length * 97),
    xj(i, e),
    i
  );
}
var PM = (...e) => e.map((e) => (typeof e == `string` ? { kind: e } : e)),
  FM = {
    ming: NM(`ming`, `ntu-student`, {
      height: 1.77,
      skin: dn.tan,
      face: {
        jaw: 0.55,
        smile: 0.55,
        eyeSize: 1,
        lid: 0.3,
        brow: 0.65,
        facial: `stubble`,
      },
      hair: { style: `spiky`, color: an.black, color2: 13146712 },
      top: { style: `tee`, color: 15921386, print: `logo`, color2: 1842210 },
      bottom: { style: `shorts`, color: 9075290 },
      shoes: { style: `slipper`, color: 2382016, color2: 16053492 },
      acc: PM(
        { kind: `shoulderBag`, color: 2043197 },
        { kind: `watch`, color: 1118483 },
      ),
    }),
    thief: NM(`thief`, `ntu-student`, {
      face: { smile: -0.2, brow: 0.7 },
      hair: { style: `fade`, color: an.black },
      top: { style: `hoodie`, color: 1908516, color2: 1381914 },
      bottom: { style: `jeans`, color: 2832978 },
      shoes: {
        style: `sneaker`,
        color: 1118481,
        color2: 2236962,
        sole: 2763306,
      },
      acc: PM(
        { kind: `cap`, color: 1118481 },
        { kind: `mask`, color: 2763306 },
      ),
    }),
    tourist: NM(`tourist`, `tourist`, {
      top: { style: `tee`, color: 15328500, print: `taipei`, color2: 13115436 },
      acc: PM(
        { kind: `bucket`, color: 15983555 },
        { kind: `backpack`, color: 13851210 },
        `phone`,
      ),
    }),
    auntie: NM(`auntie`, `auntie`),
    templeUncle: NM(`templeUncle`, `agong`, {
      top: { style: `tank`, color: 16119280 },
      bottom: { style: `slacks`, color: 3815994 },
      shoes: { style: `slipper`, color: 2382016, color2: 16053492 },
      acc: PM({ kind: `fan`, color: 15852228, color2: 12730415 }),
    }),
    courier: NM(`courier`, `rider-pink`),
    teaGirl: NM(`teaGirl`, `clerk`, {
      hair: { style: `ponytail`, color: an.darkBrown },
      top: { style: `polo`, color: 3832410, color2: 15921902 },
      acc: PM(
        { kind: `apron`, color: 2972228 },
        { kind: `cap`, color: 2972228 },
      ),
    }),
    friend: NM(`friend`, `ximen-girl`, {
      hair: { style: `long`, color: 3808276, color2: 6959136 },
      top: { style: `sweater`, color: 14168122, sleeve: `long` },
      bottom: { style: `jeans`, color: 2764602 },
      acc: PM({ kind: `shoulderBag`, color: 1579035 }, `phone`),
    }),
    office: NM(`office`, `office-m`),
    student: NM(`student`, `student-m`),
    grandma: NM(`grandma`, `ama`),
    businesswoman: NM(`businesswoman`, `office-f`, {
      outer: { style: `blazer`, color: 2764613, color2: 1843768 },
    }),
    uncle: NM(`uncle`, `uncle`),
    backpacker: NM(`backpacker`, `hipster`, {
      height: 1.86,
      skin: dn.porcelain,
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
      acc: PM(
        { kind: `backpack`, color: 14721072 },
        { kind: `cap`, color: 2775690 },
      ),
    }),
    hao: NM(`hao`, `ntu-student`, {
      face: { smile: 0.25, brow: 0.7, eyeTilt: 0.2 },
      hair: { style: `twoblock`, color: 13137978, color2: 14721120 },
      top: { style: `tee`, color: 1381914 },
      outer: { style: `bomber`, color: 1381914, color2: 13115436 },
      bottom: { style: `jeans`, color: 2764344 },
      shoes: { style: `sneaker`, color: 15921906, color2: 1381914 },
      acc: PM(`phone`, { kind: `necklace`, color: 14278112 }),
    }),
    bride: NM(`bride`, `office-f`, {
      face: { lipColor: 13122122, blush: 0.4, liner: 0.6, smile: 0.5 },
      hair: { style: `bun`, color: an.softBlack },
      top: { style: `blouse`, color: 16513268, sleeve: `none` },
      outer: void 0,
      bottom: { style: `longskirt`, color: 16513268 },
      shoes: { style: `heel`, color: 16513268 },
      acc: PM({ kind: `necklace`, color: 15257738 }),
    }),
    groom: NM(`groom`, `salaryman`, {
      face: { smile: 0.45 },
      hair: { style: `sidepart`, color: an.black },
      outer: { style: `blazer`, color: 1776932, color2: 13112863, closed: !0 },
      bottom: { style: `slacks`, color: 1776932 },
      acc: PM(`watch`),
    }),
    detective: NM(`detective`, `salaryman`, {
      face: { facial: `mustache`, wrinkles: 0.35, smile: -0.1 },
      outer: {
        style: `windbreaker`,
        color: 12098154,
        color2: 9072720,
        closed: !0,
      },
      bottom: { style: `slacks`, color: 3421756 },
      acc: PM({ kind: `cap`, color: 3815994 }, `sunglasses`),
    }),
    influencer: NM(`influencer`, `ximen-girl`, {
      top: { style: `tee`, color: 16754392, print: `logo`, color2: 16777215 },
      bottom: { style: `skirt`, color: 15921910 },
      acc: PM({ kind: `shoulderBag`, color: 16246688 }, `phone`, `sunglasses`),
    }),
    instructor: NM(`instructor`, `taxi-uncle`, {
      top: { style: `polo`, color: 2779864, color2: 15921906 },
      bottom: { style: `slacks`, color: 12100218 },
      acc: PM({ kind: `cap`, color: 15921906 }, `glasses`, {
        kind: `lanyard`,
        color: 2777784,
      }),
    }),
    vendor: NM(`vendor`, `vendor`),
    cop: NM(`cop`, `police`),
    nerd: NM(`nerd`, `office-m`, {
      build: `heavy`,
      face: { cheek: 0.7, smile: 0.2 },
      hair: { style: `bowl`, color: an.black },
      top: {
        style: `shirt`,
        color: 5929546,
        pattern: `check`,
        patternColor: 2767402,
        sleeve: `short`,
      },
      bottom: { style: `jeans`, color: 2767466 },
      shoes: { style: `sneaker`, color: 3815994, color2: 3815994 },
      acc: PM(`glasses`, { kind: `backpack`, color: 2763306 }),
    }),
    snatcher: NM(`snatcher`, `rain-commuter`, {
      top: { style: `tee`, color: 1381914 },
      outer: {
        style: `windbreaker`,
        color: 1381914,
        color2: 2763306,
        closed: !0,
      },
      bottom: { style: `jeans`, color: 2042426 },
      shoes: { style: `sneaker`, color: 1118481, color2: 1118481 },
      acc: PM(
        { kind: `helmet`, color: 1184274, color2: 657930 },
        { kind: `mask`, color: 2236962 },
      ),
    }),
    suit: NM(`suit`, `salaryman`, {
      outer: { style: `blazer`, color: 5922408, color2: 4869720, closed: !0 },
      bottom: { style: `slacks`, color: 4869720 },
      acc: PM(`glasses`, { kind: `shoulderBag`, color: 2760728 }, `watch`),
    }),
    photographer: NM(`photographer`, `hipster`, {
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
      acc: PM({ kind: `bucket`, color: 3815988 }, `glasses`, {
        kind: `shoulderBag`,
        color: 2761760,
      }),
    }),
    officerLin: NM(`officerLin`, `salaryman`, {
      face: { jaw: 0.65, smile: 0.05, brow: 0.7, wrinkles: 0.2 },
      hair: { style: `fade`, color: an.black },
      top: { style: `shirt`, color: 14673646, tucked: !0 },
      outer: { style: `windbreaker`, color: 2043210, color2: 1450298 },
      bottom: { style: `slacks`, color: 2764342, belt: 1380879 },
      acc: PM({ kind: `lanyard`, color: 2777784 }, `watch`),
    }),
    enforcer: NM(`enforcer`, `salaryman`, {
      build: `heavy`,
      face: {
        jaw: 0.8,
        smile: -0.3,
        brow: 0.8,
        facial: `stubble`,
        wrinkles: 0.3,
      },
      hair: { style: `undercut`, color: an.black },
      top: { style: `shirt`, color: 1315862, sleeve: `short` },
      outer: void 0,
      bottom: { style: `slacks`, color: 1842208, belt: 921104 },
      acc: PM({ kind: `necklace`, color: 14263584 }, `sunglasses`, {
        kind: `watch`,
        color: 14263584,
      }),
    }),
    agong: NM(`agong`, `agong`),
    mom: NM(`mom`, `mom`),
    officeLady: NM(`officeLady`, `office-f`),
    salaryman: NM(`salaryman`, `salaryman`),
    hipster: NM(`hipster`, `hipster`),
    worker: NM(`worker`, `worker`),
    taxiDriver: NM(`taxiDriver`, `taxi-uncle`),
    templeLady: NM(`templeLady`, `temple-lady`),
    clerk: NM(`clerk`, `clerk`),
    riderGreen: NM(`riderGreen`, `rider-green`),
    studentGirl: NM(`studentGirl`, `student-f`),
    jogger: NM(`jogger`, `jogger`),
    ximenGirl: NM(`ximenGirl`, `ximen-girl`),
  };
function IM(e, t, n) {
  let r = `v:${t}`,
    i = FM[r];
  if (!i) {
    let a = FM[e] ?? FM.uncle;
    i = JSON.parse(JSON.stringify(a));
    let { face: o, ...s } = n;
    (Object.assign(i, s),
      o && (i.face = en({ ...i.face, ...o })),
      (i.id = `m-${t}`),
      xj(i, FM[e] ? e : `uncle`, Tj(n)),
      (FM[r] = i));
  }
  return i;
}
function LM(e) {
  if (!e) return null;
  if (FM[e]) return FM[e];
  if (!cn(e)) return null;
  let t = FM[`preset:${e}`];
  return (t || ((t = FM[`preset:${e}`] = NM(`p-${e}`, e)), xj(t, e)), t);
}
