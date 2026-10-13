// tokyo__assets__engine-BuS5QxN0 04 — math
// Lines 765-1344 of readable/tokyo__assets__engine-BuS5QxN0.pretty.js (statement-aligned).
var at = {
    kind: D.AABB,
    minX: 0,
    minZ: 0,
    maxX: 0,
    maxZ: 0,
    minY: 0,
    maxY: 0,
    cx: 0,
    cz: 0,
    hx: 0,
    hz: 0,
    cos: 1,
    sin: 0,
    tag: ``,
    _stamp: 0,
    disabled: !0,
    _idx: -1,
  },
  ot = class {
    colliders = [];
    cells = new et($e, tt);
    stamp = 1;
    floors = [];
    floorCells = new et($e, tt);
    group = null;
    beginGroup(e) {
      let t = e ?? { colliders: [], floors: [], removed: !1 };
      return ((this.group = t), t);
    }
    endGroup() {
      this.group = null;
    }
    removeGroup(e) {
      if (e.removed) return 0;
      ((e.removed = !0), this.group === e && (this.group = null));
      let t = 0;
      for (let n of e.colliders) this.remove(n) && t++;
      for (let n of e.floors) this.removeFloor(n) && t++;
      return ((e.colliders.length = 0), (e.floors.length = 0), t);
    }
    pageStats() {
      return {
        colliders: this.cells.allocated,
        floors: this.floorCells.allocated,
      };
    }
    addFloor(e, t, n, r, i, a = i, o = 0, s = `floor`) {
      let c = Math.cos(o),
        l = Math.sin(o),
        u = Math.abs(c) * n + Math.abs(l) * r,
        d = Math.abs(l) * n + Math.abs(c) * r,
        f = {
          cx: e,
          cz: t,
          hx: n,
          hz: r,
          cos: c,
          sin: l,
          y0: i,
          y1: a,
          tag: s,
          minX: e - u,
          minZ: t - d,
          maxX: e + u,
          maxZ: t + d,
          _stamp: 0,
          _fi: this.floors.length,
        };
      this.floors.push(f);
      let p = O(f.minX),
        m = O(f.maxX),
        h = O(f.minZ),
        g = O(f.maxZ);
      for (let e = h; e <= g; e++)
        for (let t = p; t <= m; t++) this.floorCells.getOr(t, e, rt).push(f);
      return (this.group?.floors.push(f), f);
    }
    setDisabledIn(e, t, n, r, i, a) {
      let o = [],
        s = ++this.stamp,
        c = O(e),
        l = O(n),
        u = O(t),
        d = O(r);
      for (let f = u; f <= d; f++)
        for (let u = c; u <= l; u++) {
          let c = this.cells.get(u, f);
          if (c)
            for (let l = 0; l < c.length; l++) {
              let u = this.colliders[c[l]];
              u._stamp !== s &&
                ((u._stamp = s),
                !(u.maxX < e || u.minX > n || u.maxZ < t || u.minZ > r) &&
                  (!a || a(u)) &&
                  ((u.disabled = i), o.push(u)));
            }
        }
      return o;
    }
    removeFloor(e) {
      let t = e._fi ?? -1;
      if (
        ((t < 0 || this.floors[t] !== e) && (t = this.floors.indexOf(e)), t < 0)
      )
        return !1;
      let n = this.floors[this.floors.length - 1];
      ((this.floors[t] = n), (n._fi = t), this.floors.pop(), (e._fi = -1));
      let r = O(e.minX),
        i = O(e.maxX),
        a = O(e.minZ),
        o = O(e.maxZ);
      for (let t = a; t <= o; t++)
        for (let n = r; n <= i; n++) {
          let r = this.floorCells.get(n, t);
          if (!r) continue;
          let i = r.indexOf(e);
          i >= 0 && r.splice(i, 1);
        }
      return !0;
    }
    addFloorRect(e, t, n, r, i, a = `floor`) {
      return this.addFloor(
        (e + n) / 2,
        (t + r) / 2,
        (n - e) / 2,
        (r - t) / 2,
        i,
        i,
        0,
        a,
      );
    }
    floorHeightOf(e, t, n) {
      let r = t - e.cx,
        i = n - e.cz,
        a = r * e.cos + i * e.sin,
        o = -r * e.sin + i * e.cos;
      return a < -e.hx || a > e.hx || o < -e.hz || o > e.hz
        ? NaN
        : e.y0 === e.y1
          ? e.y0
          : e.y0 + (e.y1 - e.y0) * ((o + e.hz) / (2 * e.hz));
    }
    floorAt(e, t, n, r = 0.45) {
      let i = this.floorCells.get(O(e), O(t));
      if (!i) return -1 / 0;
      let a = -1 / 0;
      for (let o = 0; o < i.length; o++) {
        let s = this.floorHeightOf(i[o], e, t);
        s === s && s <= n + r && s > a && (a = s);
      }
      return a;
    }
    floorsAt(e, t, n) {
      n.length = 0;
      let r = this.floorCells.get(O(e), O(t));
      if (!r) return 0;
      for (let i of r) Number.isNaN(this.floorHeightOf(i, e, t)) || n.push(i);
      return n.length;
    }
    get count() {
      return this.colliders.length - this.freeSlots.length;
    }
    freeSlots = [];
    insert(e) {
      let t;
      (this.freeSlots.length
        ? ((t = this.freeSlots.pop()), (this.colliders[t] = e))
        : ((t = this.colliders.length), this.colliders.push(e)),
        (e._idx = t));
      let n = O(e.minX),
        r = O(e.maxX),
        i = O(e.minZ),
        a = O(e.maxZ);
      for (let e = i; e <= a; e++)
        for (let i = n; i <= r; i++) this.cells.getOr(i, e, nt).push(t);
      return (this.group?.colliders.push(e), e);
    }
    remove(e) {
      let t = e._idx ?? this.colliders.indexOf(e);
      if (t === void 0 || t < 0 || this.colliders[t] !== e) return !1;
      let n = O(e.minX),
        r = O(e.maxX),
        i = O(e.minZ),
        a = O(e.maxZ);
      for (let e = i; e <= a; e++)
        for (let i = n; i <= r; i++) {
          let n = this.cells.get(i, e);
          if (!n) continue;
          let r = n.indexOf(t);
          r >= 0 && ((n[r] = n[n.length - 1]), n.pop());
        }
      return (
        (e.disabled = !0),
        (e._idx = -1),
        (this.colliders[t] = at),
        this.freeSlots.push(t),
        !0
      );
    }
    addBox(e, t, n, r, i = 0, a = 1e3, o = `building`) {
      return this.insert({
        kind: D.AABB,
        minX: e,
        minZ: t,
        maxX: n,
        maxZ: r,
        minY: i,
        maxY: a,
        cx: (e + n) / 2,
        cz: (t + r) / 2,
        hx: (n - e) / 2,
        hz: (r - t) / 2,
        cos: 1,
        sin: 0,
        tag: o,
        _stamp: 0,
      });
    }
    addOBB(e, t, n, r, i, a = 0, o = 1e3, s = `building`) {
      if (Math.abs(Math.sin(i)) < 1e-4 || Math.abs(Math.cos(i)) < 1e-4) {
        let c = Math.abs(Math.sin(i)) > 0.5,
          l = c ? r : n,
          u = c ? n : r;
        return this.addBox(e - l, t - u, e + l, t + u, a, o, s);
      }
      let c = Math.cos(i),
        l = Math.sin(i),
        u = Math.abs(c) * n + Math.abs(l) * r,
        d = Math.abs(l) * n + Math.abs(c) * r;
      return this.insert({
        kind: D.OBB,
        minX: e - u,
        minZ: t - d,
        maxX: e + u,
        maxZ: t + d,
        minY: a,
        maxY: o,
        cx: e,
        cz: t,
        hx: n,
        hz: r,
        cos: c,
        sin: l,
        tag: s,
        _stamp: 0,
      });
    }
    addCircle(e, t, n, r = 0, i = 1e3, a = `pole`) {
      return this.insert({
        kind: D.Circle,
        minX: e - n,
        minZ: t - n,
        maxX: e + n,
        maxZ: t + n,
        minY: r,
        maxY: i,
        cx: e,
        cz: t,
        hx: n,
        hz: n,
        cos: 1,
        sin: 0,
        tag: a,
        _stamp: 0,
      });
    }
    query(e, t, n, r, i) {
      let a = ++this.stamp,
        o = 0,
        s = O(e),
        c = O(n),
        l = O(t),
        u = O(r);
      for (let d = l; d <= u; d++)
        for (let l = s; l <= c; l++) {
          let s = this.cells.get(l, d);
          if (s)
            for (let c = 0; c < s.length; c++) {
              let l = this.colliders[s[c]];
              l._stamp !== a &&
                ((l._stamp = a),
                !l.disabled &&
                  (l.maxX < e ||
                    l.minX > n ||
                    l.maxZ < t ||
                    l.minZ > r ||
                    (i[o++] = l)));
            }
        }
      return ((i.length = o), o);
    }
    tmp = [];
    satAxes = new Float64Array(8);
    resolveCircle(e, t, n, r = it()) {
      ((r.x = r.z = r.nx = r.nz = r.depth = 0), (r.hit = !1), (r.tag = ``));
      for (let i = 0; i < 2; i++) {
        let i = this.query(e.x - t, e.z - t, e.x + t, e.z + t, this.tmp),
          a = !1;
        for (let o = 0; o < i; o++) {
          let i = this.tmp[o];
          if (e.y >= i.maxY - 0.05 || e.y + n <= i.minY) continue;
          let s,
            c,
            l = 0,
            u = 0;
          if (i.kind === D.Circle) {
            let n = e.x - i.cx,
              o = e.z - i.cz,
              s = Math.hypot(n, o),
              c = t + i.hx - s;
            if (c <= 0) continue;
            let l = s > 1e-6 ? n / s : 1,
              u = s > 1e-6 ? o / s : 0;
            ((e.x += l * c),
              (e.z += u * c),
              this.acc(r, l * c, u * c, l, u, c, i.tag),
              (a = !0));
            continue;
          }
          if (i.kind === D.AABB) ((l = e.x - i.cx), (u = e.z - i.cz));
          else {
            let t = e.x - i.cx,
              n = e.z - i.cz;
            ((l = t * i.cos + n * i.sin), (u = -t * i.sin + n * i.cos));
          }
          let d = Math.max(-i.hx, Math.min(i.hx, l)),
            f = Math.max(-i.hz, Math.min(i.hz, u)),
            p = l - d,
            m = u - f,
            h = Math.hypot(p, m),
            g;
          if (h > 1e-6) {
            if (((g = t - h), g <= 0)) continue;
            ((p /= h), (m /= h));
          } else {
            let e = i.hx - Math.abs(l),
              n = i.hz - Math.abs(u);
            e < n
              ? ((p = Math.sign(l) || 1), (m = 0), (g = e + t))
              : ((p = 0), (m = Math.sign(u) || 1), (g = n + t));
          }
          let _ = p,
            v = m;
          (i.kind === D.OBB &&
            ((_ = p * i.cos - m * i.sin), (v = p * i.sin + m * i.cos)),
            (s = _ * g),
            (c = v * g),
            (e.x += s),
            (e.z += c),
            this.acc(r, s, c, _, v, g, i.tag),
            (a = !0));
        }
        if (!a) break;
      }
      return r;
    }
    resolveRect(e, t, n, r, i, a = it(), o) {
      ((a.x = a.z = a.nx = a.nz = a.depth = 0), (a.hit = !1), (a.tag = ``));
      let s = Math.cos(t),
        c = Math.sin(t),
        l = s,
        u = c,
        d = -c,
        f = s,
        p = Math.hypot(n, r);
      for (let t = 0; t < 3; t++) {
        let t = this.query(e.x - p, e.z - p, e.x + p, e.z + p, this.tmp),
          s = !1;
        for (let c = 0; c < t; c++) {
          let t = this.tmp[c];
          if (
            e.y >= t.maxY - 0.05 ||
            e.y + i <= t.minY ||
            (o !== void 0 && t.tag === o)
          )
            continue;
          let p = 1 / 0,
            m = 0,
            h = 0,
            g = t.cx - e.x,
            _ = t.cz - e.z;
          if (t.kind === D.Circle) {
            let e = g * l + _ * u,
              i = g * d + _ * f,
              a = Math.max(-n, Math.min(n, e)),
              o = Math.max(-r, Math.min(r, i)),
              s = e - a,
              c = i - o,
              v = Math.hypot(s, c),
              y;
            if (v > 1e-6) {
              if (((y = t.hx - v), y <= 0)) continue;
              ((s /= v), (c /= v));
            } else {
              let a = n - Math.abs(e),
                o = r - Math.abs(i);
              a < o
                ? ((s = Math.sign(e) || 1), (c = 0), (y = a + t.hx))
                : ((s = 0), (c = Math.sign(i) || 1), (y = o + t.hx));
            }
            ((m = -(s * l + c * d)), (h = -(s * u + c * f)), (p = y));
          } else {
            let e = t.cos,
              i = t.sin,
              a = -t.sin,
              o = t.cos,
              s = this.satAxes;
            ((s[0] = l),
              (s[1] = u),
              (s[2] = d),
              (s[3] = f),
              (s[4] = e),
              (s[5] = i),
              (s[6] = a),
              (s[7] = o));
            let c = !1;
            for (let v = 0; v < 8; v += 2) {
              let y = s[v],
                b = s[v + 1],
                ee = n * Math.abs(l * y + u * b) + r * Math.abs(d * y + f * b),
                x =
                  t.hx * Math.abs(e * y + i * b) +
                  t.hz * Math.abs(a * y + o * b),
                S = g * y + _ * b,
                C = ee + x - Math.abs(S);
              if (C <= 0) {
                c = !0;
                break;
              }
              if (C < p) {
                p = C;
                let e = S > 0 ? -1 : 1;
                ((m = y * e), (h = b * e));
              }
            }
            if (c) continue;
          }
          ((e.x += m * p),
            (e.z += h * p),
            this.acc(a, m * p, h * p, m, h, p, t.tag),
            (s = !0));
        }
        if (!s) break;
      }
      return a;
    }
    acc(e, t, n, r, i, a, o) {
      ((e.x += t),
        (e.z += n),
        (e.hit = !0),
        a > e.depth && ((e.depth = a), (e.nx = r), (e.nz = i), (e.tag = o)));
    }
    overlapsRect(e, t, n, r, i = 0.5) {
      let a = this.query(e, t, n, r, this.tmp);
      for (let o = 0; o < a; o++) {
        let a = this.tmp[o];
        if (i >= a.maxY || i < a.minY) continue;
        if (a.kind === D.AABB) return !0;
        let s = Math.max(e, Math.min(n, a.cx)),
          c = Math.max(t, Math.min(r, a.cz));
        if (a.kind !== D.Circle || Math.hypot(s - a.cx, c - a.cz) < a.hx)
          return !0;
      }
      return !1;
    }
    raycast(e, t, n, r, i) {
      let a = n,
        o = null,
        s = 0,
        c = 0,
        l = 0,
        u = e.x + t.x * n,
        d = e.z + t.z * n,
        f = this.query(
          Math.min(e.x, u),
          Math.min(e.z, d),
          Math.max(e.x, u),
          Math.max(e.z, d),
          this.tmp,
        );
      for (let n = 0; n < f; n++) {
        let r = this.tmp[n];
        if (i !== void 0 && r.tag === i) continue;
        let u,
          d = 0,
          f = 0,
          p = 0;
        if (r.kind === D.Circle) {
          let n = e.x - r.cx,
            i = e.z - r.cz,
            a = t.x * t.x + t.z * t.z;
          if (a < 1e-9) continue;
          let o = n * t.x + i * t.z,
            s = n * n + i * i - r.hx * r.hx,
            c = o * o - a * s;
          if (c < 0 || ((u = (-o - Math.sqrt(c)) / a), u < 0)) continue;
          let l = e.y + t.y * u;
          if (l < r.minY || l > r.maxY) continue;
          ((d = (n + t.x * u) / r.hx), (p = (i + t.z * u) / r.hx));
        } else {
          let n = e.x - r.cx,
            i = e.z - r.cz,
            a = t.x,
            o = t.z;
          if (r.kind === D.OBB) {
            let e = n * r.cos + i * r.sin,
              t = -n * r.sin + i * r.cos,
              s = a * r.cos + o * r.sin,
              c = -a * r.sin + o * r.cos;
            ((n = e), (i = t), (a = s), (o = c));
          }
          let s = -1 / 0,
            c = 1 / 0,
            l = -1,
            m = 0;
          if (Math.abs(a) < 1e-9) {
            if (n < -r.hx || n > r.hx) continue;
          } else {
            let e = (-r.hx - n) / a,
              t = (r.hx - n) / a,
              i = -1;
            if (e > t) {
              let n = e;
              ((e = t), (t = n), (i = 1));
            }
            (e > s && ((s = e), (l = 0), (m = i)), (c = Math.min(c, t)));
          }
          let h = e.y,
            g = t.y;
          if (Math.abs(g) < 1e-9) {
            if (h < r.minY || h > r.maxY) continue;
          } else {
            let e = (r.minY - h) / g,
              t = (r.maxY - h) / g,
              n = -1;
            if (e > t) {
              let r = e;
              ((e = t), (t = r), (n = 1));
            }
            (e > s && ((s = e), (l = 1), (m = n)), (c = Math.min(c, t)));
          }
          if (Math.abs(o) < 1e-9) {
            if (i < -r.hz || i > r.hz) continue;
          } else {
            let e = (-r.hz - i) / o,
              t = (r.hz - i) / o,
              n = -1;
            if (e > t) {
              let r = e;
              ((e = t), (t = r), (n = 1));
            }
            (e > s && ((s = e), (l = 2), (m = n)), (c = Math.min(c, t)));
          }
          if (c < Math.max(s, 0) || s < 0) continue;
          u = s;
          let _ = l === 0 ? m : 0,
            v = l === 2 ? m : 0;
          if (((f = l === 1 ? m : 0), r.kind === D.OBB)) {
            let e = _ * r.cos - v * r.sin,
              t = _ * r.sin + v * r.cos;
            ((_ = e), (v = t));
          }
          ((d = _), (p = v));
        }
        u < a && ((a = u), (o = r), (s = d), (c = f), (l = p));
      }
      return o
        ? (r &&
            ((r.distance = a),
            r.point.copy(e).addScaledVector(t, a),
            r.normal.set(s, c, l),
            (r.tag = o.tag),
            (r.body = null)),
          !0)
        : !1;
    }
  },
  st = 1;
