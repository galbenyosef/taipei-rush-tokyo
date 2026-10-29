var e = (e, t = ``) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${t}>${e}</svg>`,
  t = (e) =>
    `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none">${e}</svg>`,
  n = {
    fists: t(
      `<path d="M6.5 9.2c0-1 .8-1.7 1.7-1.7h.3V6.6c0-1 .8-1.7 1.7-1.7s1.7.8 1.7 1.7v.2c.3-.6.9-1 1.6-1 .9 0 1.7.8 1.7 1.7v.3c.3-.4.8-.6 1.3-.6.9 0 1.7.8 1.7 1.7v2.2c.3-.2.7-.3 1.1-.3.9 0 1.6.7 1.6 1.6v2.9c0 3.6-2.9 6.4-6.4 6.4h-2.3c-2.6 0-4.8-1.9-5.2-4.5l-.5-3c-.1-.9.5-1.7 1.4-1.9.6-.1 1.1.1 1.5.5V9.2z"/>`,
    ),
    bat: t(
      `<path d="M20.6 2.2c.8.5 1.3 1.6.6 2.5L10.8 16.4l-2.2-1.5 9.6-12.3c.6-.7 1.6-.9 2.4-.4zM8 15.7l1.9 1.3-1.2 1.6-1.9-1.3zM6.3 17.7l1.6 1.1-2.6 3a1.2 1.2 0 0 1-1.7.2l-.1-.1a1.2 1.2 0 0 1-.2-1.6z"/>`,
    ),
    pistol: t(
      `<path d="M2 6.5h18.5c.8 0 1.5.7 1.5 1.5v2.2c0 .6-.5 1.1-1.1 1.1H13l-.4 1.4h-2.9l-.6 1.6c-.2.5-.7.9-1.3.9H7.6l-1.5 5.3c-.1.5-.6.8-1.1.8H2.6c-.7 0-1.2-.7-1-1.4L3.4 12H2.5C1.7 12 1 11.3 1 10.5V7.5c0-.6.4-1 1-1zm8.4 5H9.5l-.4 1.2h1z"/>`,
    ),
    smg: t(
      `<path d="M1 7h15.2l.8-1.5h2.2L20 7h2.3c.4 0 .7.3.7.7v2.5c0 .4-.3.7-.7.7h-3.7l-.9 1.2H13l-.8 1.7-1.2 5.8c-.1.5-.5.8-1 .8H7.6c-.6 0-1.1-.6-.9-1.2L8 12.9H6.4L5.6 16c-.1.5-.5.8-1 .8H3c-.6 0-1.1-.6-.9-1.2l1-4.7H1.7c-.4 0-.7-.3-.7-.7z"/>`,
    ),
    sun: e(
      `<circle cx="12" cy="12" r="4.2" fill="currentColor" stroke="none"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/>`,
    ),
    moon: t(
      `<path d="M20.2 14.6A8.6 8.6 0 0 1 9.4 3.8a8.6 8.6 0 1 0 10.8 10.8z"/>`,
    ),
    cloud: t(
      `<path d="M7 19a5 5 0 0 1-.6-10A6.5 6.5 0 0 1 19 9.6 4.8 4.8 0 0 1 18.2 19z"/>`,
    ),
    rain: e(
      `<path d="M7 15a4.5 4.5 0 0 1-.5-9A6 6 0 0 1 18 6.6 4.3 4.3 0 0 1 17.4 15z" fill="currentColor" stroke="none"/><path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3"/>`,
    ),
    storm: e(
      `<path d="M7 14a4.5 4.5 0 0 1-.5-9A6 6 0 0 1 18 5.6 4.3 4.3 0 0 1 17.4 14z" fill="currentColor" stroke="none"/><path d="M12.5 13.5 10 18h4l-2.5 4.5" stroke-width="2.2"/>`,
    ),
    fog: e(
      `<path d="M3 9h14M6 13h15M3 17h12M8 21h8"/><path d="M5 5.5h10" opacity=".6"/>`,
    ),
    heart: t(
      `<path d="M12 21s-7.5-4.6-9.4-9.3C1.2 8.3 3.3 4.5 7 4.5c2 0 3.6 1.1 5 2.8 1.4-1.7 3-2.8 5-2.8 3.7 0 5.8 3.8 4.4 7.2C19.5 16.4 12 21 12 21z"/>`,
    ),
    shield: t(
      `<path d="M12 2 4 5v6.1c0 5 3.4 9.4 8 10.9 4.6-1.5 8-5.9 8-10.9V5z"/>`,
    ),
    star: t(
      `<path d="M12 2.2l2.9 6.2 6.8.8-5 4.7 1.3 6.7L12 17.3l-6 3.3 1.3-6.7-5-4.7 6.8-.8z"/>`,
    ),
    radio: e(
      `<rect x="3" y="8" width="18" height="12" rx="2.5"/><path d="M7 8 17 3.5"/><circle cx="15.5" cy="14" r="2.6"/><path d="M6.5 12.5h3M6.5 15.5h3"/>`,
    ),
    pin: t(
      `<path d="M12 1.8a7.4 7.4 0 0 0-7.4 7.4c0 5.4 7.4 13 7.4 13s7.4-7.6 7.4-13A7.4 7.4 0 0 0 12 1.8zm0 10.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6z"/>`,
    ),
    target: e(
      `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4"/>`,
    ),
    car: t(
      `<path d="M5.2 6.6A2.6 2.6 0 0 1 7.6 5h8.8c1.1 0 2 .7 2.4 1.6L20.5 11c.9.3 1.5 1.1 1.5 2v4c0 .6-.4 1-1 1h-1.2a2.6 2.6 0 0 1-5.1 0H9.3a2.6 2.6 0 0 1-5.1 0H3a1 1 0 0 1-1-1v-4c0-.9.6-1.7 1.5-2zM6.2 10.5h11.6l-1.2-3.3a1 1 0 0 0-.9-.6H8.3a1 1 0 0 0-.9.6z"/>`,
    ),
    scooter: e(
      `<circle cx="5.5" cy="17" r="3"/><circle cx="18.5" cy="17" r="3"/><path d="M8.5 17h6.2l2.6-8.5H20M17.3 8.5 15.5 4h-2.5"/><path d="M5.5 14h5.2l1.8-4.5H7.8" fill="currentColor" stroke-width="1.5"/>`,
    ),
    missions: e(
      `<path d="M9 4.5h6M9 4.5a1.5 1.5 0 0 0-1.5 1.5v.5h9V6A1.5 1.5 0 0 0 15 4.5"/><rect x="4.5" y="5.5" width="15" height="16" rx="2.5"/><path d="m8.5 13 2.2 2.2 4.8-4.8"/>`,
    ),
    bag: e(
      `<path d="M9.5 6V4.5a2.5 2.5 0 0 1 5 0V6"/><rect x="5" y="6" width="14" height="15.5" rx="4"/><path d="M8.5 21.5v-4a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v4M10 11h4"/>`,
    ),
    map: e(
      `<path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6z"/><path d="M9 4v14M15 6v14"/>`,
    ),
    settings: e(
      `<circle cx="12" cy="12" r="3.2"/><path d="M19.4 14.6a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>`,
    ),
    weather: e(
      `<path d="M12 3v1.5M5.6 5.6l1 1M3 12h1.5M18.4 5.6l-1 1"/><path d="M8.2 11.2A4 4 0 0 1 15.8 10"/><path d="M8 20a4 4 0 0 1-.3-8 5 5 0 0 1 9.6 1.3A3.4 3.4 0 0 1 16.8 20z" fill="currentColor" stroke="none"/>`,
    ),
    metro: e(
      `<rect x="5" y="3" width="14" height="14" rx="4"/><path d="M5 11h14M9 20l-2 2M15 20l2 2M8.5 14h.01M15.5 14h.01M8 7h8"/>`,
    ),
    camera: e(
      `<path d="M4 7.5h3l1.8-2.5h6.4L17 7.5h3a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 20 19.5H4A1.5 1.5 0 0 1 2.5 18V9A1.5 1.5 0 0 1 4 7.5z"/><circle cx="12" cy="13" r="3.6"/>`,
    ),
    stats: e(`<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>`),
    help: e(
      `<circle cx="12" cy="12" r="9.5"/><path d="M9.2 9.3a2.9 2.9 0 0 1 5.6 1c0 1.9-2.8 2.6-2.8 2.6M12 17h.01"/>`,
    ),
    play: t(`<path d="M7 4.5v15l12.5-7.5z"/>`),
    pause: t(
      `<rect x="6" y="4.5" width="4.2" height="15" rx="1"/><rect x="13.8" y="4.5" width="4.2" height="15" rx="1"/>`,
    ),
    phone: e(
      `<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>`,
    ),
    close: e(`<path d="M6 6l12 12M18 6 6 18"/>`),
    chevronL: e(`<path d="m15 5-7 7 7 7"/>`),
    chevronR: e(`<path d="m9 5 7 7-7 7"/>`),
    locate: e(
      `<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.2" fill="currentColor"/><path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3"/>`,
    ),
    plus: e(`<path d="M12 5v14M5 12h14"/>`),
    minus: e(`<path d="M5 12h14"/>`),
    user: e(`<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>`),
    friends: e(
      `<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="16.5" cy="9" r="2.8"/><path d="M15.5 14.2a5.5 5.5 0 0 1 6 5.8"/>`,
    ),
    mail: e(
      `<rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="m3.8 7 8.2 6.2L20.2 7"/>`,
    ),
    globe: e(
      `<circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5c2.6 2.8 3.8 6 3.8 9.5s-1.2 6.7-3.8 9.5c-2.6-2.8-3.8-6-3.8-9.5s1.2-6.7 3.8-9.5z"/>`,
    ),
    gamepad: e(
      `<path d="M7 7h10a5 5 0 0 1 4.9 6l-.8 4a2.6 2.6 0 0 1-4.5 1.2L14.5 16h-5l-2.1 2.2A2.6 2.6 0 0 1 2.9 17l-.8-4A5 5 0 0 1 7 7z"/><path d="M7.5 10.5v3M6 12h3"/><circle cx="16" cy="11" r=".6" fill="currentColor"/><circle cx="17.5" cy="13" r=".6" fill="currentColor"/>`,
    ),
    jump: e(
      `<path d="M12 20V6M6.5 11.5 12 6l5.5 5.5"/><path d="M5 3h14" stroke-width="2.4"/>`,
    ),
    sprint: t(
      `<circle cx="15.5" cy="4.2" r="2.2"/><path d="M11.4 7.2c.8-.5 1.8-.6 2.7-.2l2.4 1.1c.5.2.8.6 1 1.1l1 2.6 2.2.6a1 1 0 0 1-.5 2l-2.8-.7a1.2 1.2 0 0 1-.8-.7l-.5-1.2-1.6 3.1 2.4 2.1c.3.3.5.7.4 1.1l-.5 3.9a1.1 1.1 0 0 1-2.2-.3l.4-3.3-3.2-2.7-1.4 2.8a1.2 1.2 0 0 1-1 .6H5a1.1 1.1 0 0 1 0-2.2h3.4l3.3-6.5-1.2-.4-2 2.4a1.1 1.1 0 0 1-1.7-1.4l2.3-2.8z"/>`,
    ),
    attack: t(
      `<path d="M6.5 9.2c0-1 .8-1.7 1.7-1.7h.3V6.6c0-1 .8-1.7 1.7-1.7s1.7.8 1.7 1.7v.2c.3-.6.9-1 1.6-1 .9 0 1.7.8 1.7 1.7v.3c.3-.4.8-.6 1.3-.6.9 0 1.7.8 1.7 1.7v2.2c.3-.2.7-.3 1.1-.3.9 0 1.6.7 1.6 1.6v2.9c0 3.6-2.9 6.4-6.4 6.4h-2.3c-2.6 0-4.8-1.9-5.2-4.5l-.5-3c-.1-.9.5-1.7 1.4-1.9.6-.1 1.1.1 1.5.5V9.2z"/>`,
    ),
    aim: e(
      `<circle cx="12" cy="12" r="7.5"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/>`,
    ),
    enter: e(
      `<path d="M5.2 9.6A2.6 2.6 0 0 1 7.6 8h8.8c1.1 0 2 .7 2.4 1.6l1.2 3.4c.9.3 1.5 1.1 1.5 2v3c0 .6-.4 1-1 1H3.5a1 1 0 0 1-1-1v-3c0-.9.6-1.7 1.5-2z"/><path d="M12 1.5v4.5M9.8 3.8 12 6l2.2-2.2"/>`,
    ),
    interact: e(
      `<path d="M8.5 11V4.8a1.8 1.8 0 0 1 3.6 0V11"/><path d="M12.1 10V8.6a1.8 1.8 0 0 1 3.6 0V11"/><path d="M15.7 10.2a1.8 1.8 0 0 1 3.6 0v4.3a7 7 0 0 1-7 7h-1a6.2 6.2 0 0 1-5.2-2.8L3.8 15a1.7 1.7 0 0 1 2.7-2.1L8.5 15"/>`,
    ),
    horn: e(
      `<path d="M3 10v4h3l6 4.5v-13L6 10z" fill="currentColor"/><path d="M15.5 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11"/>`,
    ),
    handbrake: e(
      `<circle cx="12" cy="12" r="9"/><path d="M9.5 16.5v-9h3.2a2.6 2.6 0 0 1 0 5.2H9.5" stroke-width="2.2"/>`,
    ),
    gas: e(
      `<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M10 7h4M10 11h4M10 15h4"/>`,
    ),
    brake: e(
      `<rect x="4" y="7" width="16" height="11" rx="2.5"/><path d="M8 11h8M8 14h8"/>`,
    ),
    weapon: e(
      `<path d="M3 9h13l2-2h3v5h-4l-1 2h-3l-1 5H8l1-6H3z" fill="currentColor" stroke-width="1.2"/>`,
    ),
    exit: e(
      `<path d="M14 4h4.5A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5H14"/><path d="M10 16l-4-4 4-4M6 12h10"/>`,
    ),
    cam: e(
      `<path d="M3 8.5 12 3l9 5.5M5.5 10v9h13v-9"/><circle cx="12" cy="14.5" r="2.5"/>`,
    ),
    reload: e(
      `<path d="M20 12a8 8 0 1 1-2.4-5.7L20 8.6"/><path d="M20 3.5v5.1h-5.1"/>`,
    ),
    lookBack: e(
      `<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>`,
    ),
    fullscreen: e(`<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>`),
    fullscreenExit: e(`<path d="M9 4v5H4M20 9h-5V4M15 20v-5h5M4 15h5v5"/>`),
    share: e(
      `<path d="M12 3v12M7.5 7.5 12 3l4.5 4.5"/><path d="M8 11H6.5A1.5 1.5 0 0 0 5 12.5v7A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5H16"/>`,
    ),
    flag: e(`<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>`),
    bulb: e(
      `<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.2h5c0-.9.4-1.7 1.1-2.2A6 6 0 0 0 12 3z"/>`,
    ),
  },
  r = `"PingFang TC","Noto Sans TC","Microsoft JhengHei","Heiti TC",sans-serif`,
  i = (e, t) => {
    let n = t * 0.5,
      r = t * 0.26,
      i = -n / 2,
      a = -r / 2 + t * 0.02;
    (e.beginPath(),
      e.moveTo(i, a + r),
      e.lineTo(i, a + r * 0.35),
      e.lineTo(i + n * 0.18, a - r * 0.25),
      e.lineTo(i + n * 0.82, a - r * 0.25),
      e.lineTo(i + n, a + r * 0.35),
      e.lineTo(i + n, a + r),
      e.closePath(),
      e.fill(),
      e.beginPath(),
      e.arc(i + n * 0.24, a + r, t * 0.07, 0, Math.PI * 2),
      e.arc(i + n * 0.76, a + r, t * 0.07, 0, Math.PI * 2),
      e.fill());
  },
  a = {
    player: { bg: `#ffffff`, fg: `#000`, glyph: `` },
    mission: { bg: `#ffc83d`, fg: `#1a1200`, glyph: `任` },
    target: {
      bg: `#ff3b3b`,
      fg: `#fff`,
      glyph: (e, t) => {
        ((e.lineWidth = t * 0.07),
          e.beginPath(),
          e.arc(0, 0, t * 0.2, 0, Math.PI * 2),
          e.stroke(),
          e.beginPath(),
          e.arc(0, 0, t * 0.07, 0, Math.PI * 2),
          e.fill());
      },
      shape: `diamond`,
    },
    waypoint: {
      bg: `#ff3d9a`,
      fg: `#fff`,
      glyph: (e, t) => {
        (e.beginPath(),
          e.moveTo(-t * 0.12, t * 0.24),
          e.lineTo(-t * 0.12, -t * 0.22),
          e.lineTo(t * 0.22, -t * 0.12),
          e.lineTo(-t * 0.12, -t * 0),
          (e.lineWidth = t * 0.07),
          e.stroke(),
          e.fill());
      },
    },
    shop: {
      bg: `#ffffff`,
      fg: `#fff`,
      glyph: (e, t) => {
        let n = t * 0.5,
          r = t * 0.1;
        ((e.fillStyle = `#f47b20`),
          e.fillRect(-n / 2, -r * 1.5, n, r),
          (e.fillStyle = `#00924a`),
          e.fillRect(-n / 2, -r * 0.5, n, r),
          (e.fillStyle = `#e4002b`),
          e.fillRect(-n / 2, r * 0.5, n, r));
      },
      shape: `square`,
    },
    mrt: { bg: `#0a6fc2`, fg: `#fff`, glyph: `捷` },
    hospital: {
      bg: `#ffffff`,
      fg: `#e8202a`,
      glyph: (e, t) => {
        let n = t * 0.13,
          r = t * 0.42;
        (e.fillRect(-n / 2 - n * 0.25, -r / 2, n * 1.5, r),
          e.fillRect(-r / 2, -n / 2 - n * 0.25, r, n * 1.5));
      },
    },
    police: { bg: `#1d3f91`, fg: `#fff`, glyph: `警` },
    "police-car": { bg: `#ff2d3c`, fg: `#fff`, glyph: ``, ring: `#2d6bff` },
    temple: { bg: `#b3261e`, fg: `#ffd66b`, glyph: `廟` },
    market: { bg: `#ff8a00`, fg: `#2a1100`, glyph: `夜` },
    landmark: { bg: `#8b6cff`, fg: `#fff`, glyph: `★` },
    vehicle: { bg: `#5f7da8`, fg: `#fff`, glyph: i },
    taxi: { bg: `#f5c518`, fg: `#1b1400`, glyph: i },
    delivery: { bg: `#23c16b`, fg: `#fff`, glyph: `送` },
    race: {
      bg: `#ffffff`,
      fg: `#111`,
      glyph: (e, t) => {
        let n = t * 0.1;
        for (let t = 0; t < 4; t++)
          for (let r = 0; r < 4; r++)
            (t + r) % 2 == 0 &&
              e.fillRect(-2 * n + t * n, -2 * n + r * n, n, n);
      },
    },
    collectible: { bg: `#ffd84a`, fg: `#b3261e`, glyph: `貓` },
    garbage: { bg: `#f5d000`, fg: `#1d1a00`, glyph: `♪` },
    cash: { bg: `#2fbf5b`, fg: `#fff`, glyph: `$` },
  },
  o = (e, t) => (a[e] = t),
  s = (e) => (a[e] ?? a.target).bg,
  c = new Map();
function l(e) {
  let t = /^#([0-9a-f]{6})$/i.exec(e);
  if (!t) return `#fff`;
  let n = parseInt(t[1], 16);
  return 0.2126 * ((n >> 16) & 255) +
    0.7152 * ((n >> 8) & 255) +
    0.0722 * (n & 255) >
    165
    ? `#14161c`
    : `#fff`;
}
function u(e, t, n, i) {
  let o = `${e}|${n ?? ``}|${t}|${i ?? ``}`,
    s = c.get(o);
  if (s) return s;
  let u = a[e] ?? a.target;
  ((s = document.createElement(`canvas`)), (s.width = s.height = t));
  let f = s.getContext(`2d`);
  f.translate(t / 2, t / 2);
  let p = t * 0.4,
    m = n ?? u.bg;
  ((f.shadowColor = `rgba(0,0,0,.55)`),
    (f.shadowBlur = t * 0.08),
    (f.shadowOffsetY = t * 0.02),
    (f.fillStyle = m),
    f.beginPath(),
    u.shape === `square`
      ? d(f, -p * 0.92, -p * 0.92, p * 1.84, p * 1.84, p * 0.35)
      : u.shape === `diamond`
        ? (f.moveTo(0, -p * 1.1),
          f.lineTo(p * 1.1, 0),
          f.lineTo(0, p * 1.1),
          f.lineTo(-p * 1.1, 0),
          f.closePath())
        : f.arc(0, 0, p, 0, Math.PI * 2),
    f.fill(),
    (f.shadowColor = `transparent`),
    (f.lineWidth = Math.max(1, t * 0.045)),
    (f.strokeStyle = `rgba(8,10,16,.85)`),
    f.stroke(),
    u.ring &&
      ((f.lineWidth = t * 0.09),
      (f.strokeStyle = u.ring),
      f.beginPath(),
      f.arc(0, 0, p * 0.62, 0, Math.PI * 2),
      f.stroke()));
  let h = i ? l(m) : u.fg;
  ((f.fillStyle = h), (f.strokeStyle = h));
  let g = i ? [...i][0] : u.glyph;
  if (typeof g == `string`) {
    if (g) {
      let e = /^[\x00-\x7f]$/.test(g);
      ((f.font = `${e ? 800 : 700} ${Math.round(t * (e ? 0.5 : 0.44))}px ${r}`),
        (f.textAlign = `center`),
        (f.textBaseline = `middle`),
        f.fillText(g, 0, t * (e ? 0.03 : 0.035)));
    }
  } else g(f, t);
  return (c.set(o, s), s);
}
function d(e, t, n, r, i, a) {
  (e.moveTo(t + a, n),
    e.arcTo(t + r, n, t + r, n + i, a),
    e.arcTo(t + r, n + i, t, n + i, a),
    e.arcTo(t, n + i, t, n, a),
    e.arcTo(t, n, t + r, n, a),
    e.closePath());
}
function f(e) {
  let t = `arrow|${e}`,
    n = c.get(t);
  if (n) return n;
  ((n = document.createElement(`canvas`)), (n.width = n.height = e));
  let r = n.getContext(`2d`);
  r.translate(e / 2, e / 2);
  let i = e * 0.42;
  return (
    (r.shadowColor = `rgba(0,0,0,.6)`),
    (r.shadowBlur = e * 0.1),
    r.beginPath(),
    r.moveTo(0, -i),
    r.lineTo(i * 0.72, i * 0.78),
    r.lineTo(0, i * 0.38),
    r.lineTo(-i * 0.72, i * 0.78),
    r.closePath(),
    (r.fillStyle = `#ffffff`),
    r.fill(),
    (r.shadowColor = `transparent`),
    (r.lineWidth = e * 0.05),
    (r.strokeStyle = `#141824`),
    r.stroke(),
    c.set(t, n),
    n
  );
}
var p = {
    "7-TWELVE": [`#f47b20`, `#00924a`, `#e4002b`],
    FamilyMark: [`#1a6fc9`, `#ffffff`, `#1fa64a`],
    "Hi-Lite": [`#e60012`, `#ffffff`, `#f7a600`],
  },
  m = (e, t) => (p[e] = t);
function h(e, t) {
  let n = `shop:${e}|${t}`,
    r = c.get(n);
  if (r) return r;
  let i = p[e] ?? p[`7-TWELVE`];
  ((r = document.createElement(`canvas`)), (r.width = r.height = t));
  let a = r.getContext(`2d`);
  a.translate(t / 2, t / 2);
  let o = t * 0.37;
  ((a.shadowColor = `rgba(0,0,0,.55)`),
    (a.shadowBlur = t * 0.08),
    (a.fillStyle = `#ffffff`),
    a.beginPath(),
    d(a, -o, -o, o * 2, o * 2, o * 0.35),
    a.fill(),
    (a.shadowColor = `transparent`),
    (a.lineWidth = Math.max(1, t * 0.045)),
    (a.strokeStyle = `rgba(8,10,16,.85)`),
    a.stroke());
  let s = o * 1.35,
    l = o * 0.34;
  return (
    i.forEach((e, t) => {
      ((a.fillStyle = e === `#ffffff` ? `#d9dde4` : e),
        a.fillRect(
          -s / 2,
          -l * 1.5 + t * l,
          s,
          l * (e === `#ffffff` ? 0.4 : 1),
        ));
    }),
    c.set(n, r),
    r
  );
}
export { o as a, f as i, s as n, m as o, u as r, h as s, n as t };
