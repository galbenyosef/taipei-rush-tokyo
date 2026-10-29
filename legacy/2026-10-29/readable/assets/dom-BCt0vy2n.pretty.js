function e(e, t, n, r) {
  let i = document.createElement(e);
  return (
    t && (i.className = t),
    r !== void 0 && (i.textContent = r),
    n && n.appendChild(i),
    i
  );
}
var t = class {
    el;
    last = null;
    node = null;
    constructor(e) {
      this.el = e;
    }
    set(e) {
      if (e === this.last) return;
      this.last = e;
      let t = this.node;
      t && t.parentNode === this.el && this.el.childNodes.length === 1
        ? (t.data = e)
        : ((this.node = document.createTextNode(e)),
          (this.el.textContent = ``),
          this.el.appendChild(this.node));
    }
    get value() {
      return this.last ?? ``;
    }
  },
  n = class {
    el;
    cls;
    state = null;
    constructor(e, t) {
      ((this.el = e), (this.cls = t));
    }
    set(e) {
      e !== this.state &&
        ((this.state = e), this.el.classList.toggle(this.cls, e));
    }
    get on() {
      return !!this.state;
    }
  },
  r = class {
    el;
    prop;
    last = null;
    constructor(e, t) {
      ((this.el = e), (this.prop = t));
    }
    set(e) {
      e !== this.last &&
        ((this.last = e), this.el.style.setProperty(this.prop, e));
    }
  };
function i(e, t) {
  (e.classList.remove(t), e.offsetWidth, e.classList.add(t));
}
var a = (e) => Math.round(e).toLocaleString(`en-US`);
function o(e) {
  let t = Math.floor(((e % 24) + 24) % 24),
    n = Math.floor((e - Math.floor(e)) * 60);
  return `${t < 10 ? `0` : ``}${t}:${n < 10 ? `0` : ``}${n}`;
}
function s(e) {
  let t = Math.max(0, e);
  if (t < 10) return t.toFixed(1);
  let n = Math.floor(t / 60),
    r = Math.floor(t % 60);
  return `${n}:${r < 10 ? `0` : ``}${r}`;
}
var c = null,
  l = { top: 0, right: 0, bottom: 0, left: 0 };
function u() {
  c ||
    ((c = document.createElement(`div`)),
    (c.style.cssText = `position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top,0px) env(safe-area-inset-right,0px) env(safe-area-inset-bottom,0px) env(safe-area-inset-left,0px)`),
    document.body.appendChild(c));
  let e = getComputedStyle(c);
  return (
    (l.top = parseFloat(e.paddingTop) || 0),
    (l.right = parseFloat(e.paddingRight) || 0),
    (l.bottom = parseFloat(e.paddingBottom) || 0),
    (l.left = parseFloat(e.paddingLeft) || 0),
    l
  );
}
function d(e) {
  e && (e.width > 1 || e.height > 1) && (e.width = e.height = 1);
}
function f(e, t) {
  try {
    e.setPointerCapture(t);
  } catch {}
}
export {
  o as a,
  d as c,
  u as d,
  f as i,
  e as l,
  r as n,
  a as o,
  t as r,
  s,
  n as t,
  i as u,
};
