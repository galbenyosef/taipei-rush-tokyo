// tokyo/assets/postfx-BzHvx3aB 16 — float32array
// Lines 9261-9527 of readable/tokyo/assets/postfx-BzHvx3aB.pretty.js (statement-aligned).
function wi(e, t, n, r, i) {
  let a = X[0],
    o = X[1],
    s = t + n + 1;
  switch (e) {
    case 0:
      (Q(e, 1, 1, 1 + s, 1 + s, t, r, a),
        Q(e, 1, 0, 1 + s, 0 + s, t, r, o),
        (i[0] = (a[0] + o[0]) / 2),
        (i[1] = (a[1] + o[1]) / 2));
      break;
    case 1:
      (Q(e, 1, 0, 0 + s, 0 + s, t, r, a),
        Q(e, 1, 0, 1 + s, 0 + s, t, r, o),
        (i[0] = (a[0] + o[0]) / 2),
        (i[1] = (a[1] + o[1]) / 2));
      break;
    case 2:
      (Q(e, 0, 0, 1 + s, 0 + s, t, r, a),
        Q(e, 1, 0, 1 + s, 0 + s, t, r, o),
        (i[0] = (a[0] + o[0]) / 2),
        (i[1] = (a[1] + o[1]) / 2));
      break;
    case 3:
      Q(e, 1, 0, 1 + s, 0 + s, t, r, i);
      break;
    case 4:
      (Q(e, 1, 1, 0 + s, 0 + s, t, r, a),
        Q(e, 1, 1, 1 + s, 0 + s, t, r, o),
        (i[0] = (a[0] + o[0]) / 2),
        (i[1] = (a[1] + o[1]) / 2));
      break;
    case 5:
      (Q(e, 1, 1, 0 + s, 0 + s, t, r, a),
        Q(e, 1, 0, 1 + s, 0 + s, t, r, o),
        (i[0] = (a[0] + o[0]) / 2),
        (i[1] = (a[1] + o[1]) / 2));
      break;
    case 6:
      Q(e, 1, 1, 1 + s, 0 + s, t, r, i);
      break;
    case 7:
      (Q(e, 1, 1, 1 + s, 0 + s, t, r, a),
        Q(e, 1, 0, 1 + s, 0 + s, t, r, o),
        (i[0] = (a[0] + o[0]) / 2),
        (i[1] = (a[1] + o[1]) / 2));
      break;
    case 8:
      (Q(e, 0, 0, 1 + s, 1 + s, t, r, a),
        Q(e, 1, 0, 1 + s, 1 + s, t, r, o),
        (i[0] = (a[0] + o[0]) / 2),
        (i[1] = (a[1] + o[1]) / 2));
      break;
    case 9:
      (Q(e, 1, 0, 1 + s, 1 + s, t, r, i), Q(e, 1, 0, 1 + s, 1 + s, t, r, i));
      break;
    case 10:
      (Q(e, 0, 0, 1 + s, 1 + s, t, r, a),
        Q(e, 1, 0, 1 + s, 0 + s, t, r, o),
        (i[0] = (a[0] + o[0]) / 2),
        (i[1] = (a[1] + o[1]) / 2));
      break;
    case 11:
      (Q(e, 1, 0, 1 + s, 1 + s, t, r, a),
        Q(e, 1, 0, 1 + s, 0 + s, t, r, o),
        (i[0] = (a[0] + o[0]) / 2),
        (i[1] = (a[1] + o[1]) / 2));
      break;
    case 12:
      Q(e, 1, 1, 1 + s, 1 + s, t, r, i);
      break;
    case 13:
      (Q(e, 1, 1, 1 + s, 1 + s, t, r, a),
        Q(e, 1, 0, 1 + s, 1 + s, t, r, o),
        (i[0] = (a[0] + o[0]) / 2),
        (i[1] = (a[1] + o[1]) / 2));
      break;
    case 14:
      (Q(e, 1, 1, 1 + s, 1 + s, t, r, a),
        Q(e, 1, 1, 1 + s, 0 + s, t, r, o),
        (i[0] = (a[0] + o[0]) / 2),
        (i[1] = (a[1] + o[1]) / 2));
      break;
    case 15:
      (Q(e, 1, 1, 1 + s, 1 + s, t, r, a),
        Q(e, 1, 0, 1 + s, 0 + s, t, r, o),
        (i[0] = (a[0] + o[0]) / 2),
        (i[1] = (a[1] + o[1]) / 2));
  }
  return i;
}
function Ti(e, t, n) {
  let r = new Float32Array(2);
  for (let i = 0, a = e.length; i < a; ++i) {
    let a = e[i],
      o = a.data,
      s = a.width;
    for (let e = 0; e < s; ++e)
      for (let a = 0; a < s; ++a) {
        n ? xi(i, a, e, t, r) : wi(i, a, e, t, r);
        let c = (e * s + a) * 2;
        ((o[c] = r[0] * 255), (o[c + 1] = r[1] * 255));
      }
  }
}
function Ei(e, t, n, r, i, a, o) {
  let s = o.data,
    c = o.width;
  for (let o = 0, l = n.length; o < l; ++o) {
    let l = r[o],
      u = n[o],
      d = u.data,
      f = u.width;
    for (let n = 0; n < i; ++n)
      for (let r = 0; r < i; ++r) {
        let o = l[0] * i + e + r,
          u = ((l[1] * i + t + n) * c + o) * 4,
          p = a ? (n * n * f + r * r) * 2 : (n * f + r) * 2;
        ((s[u] = d[p]),
          (s[u + 1] = d[p + 1]),
          (s[u + 2] = 0),
          (s[u + 3] = 255));
      }
  }
}
var Di = class {
    static generate() {
      let e = 10 * ui,
        t = mi.length * 5 * ui,
        n = new Uint8ClampedArray(e * t * 4),
        r = new K(e, t, n),
        i = (ui - 1) ** 2 + 1,
        a = di,
        o = [],
        s = [];
      for (let e = 3, t = n.length; e < t; e += 4) n[e] = 255;
      for (let e = 0; e < 16; ++e)
        (o.push(new K(i, i, new Uint8ClampedArray(i * i * 2), 2)),
          s.push(new K(a, a, new Uint8ClampedArray(a * a * 2), 2)));
      for (let e = 0, t = mi.length; e < t; ++e)
        (Ti(o, mi[e], !0), Ei(0, 5 * ui * e, o, gi, ui, !0, r));
      for (let e = 0, t = hi.length; e < t; ++e)
        (Ti(s, hi[e], !1), Ei(5 * ui, 4 * di * e, s, _i, di, !1, r));
      return r;
    }
  },
  Oi = `(()=>{function q(t,a,s){let e=document.createElement("canvas"),n=e.getContext("2d");if(e.width=t,e.height=a,s instanceof Image)n.drawImage(s,0,0);else{let r=n.createImageData(t,a);r.data.set(s),n.putImageData(r,0,0)}return e}var F=class t{constructor(a=0,s=0,e=null){this.width=a,this.height=s,this.data=e}toCanvas(){return typeof document=="undefined"?null:q(this.width,this.height,this.data)}static from(a){let{width:s,height:e}=a,n;if(a instanceof Image){let r=q(s,e,a);r!==null&&(n=r.getContext("2d").getImageData(0,0,s,e).data)}else n=a.data;return new t(s,e,n)}};var M=[new Float32Array(2),new Float32Array(2)],D=16,W=20,I=30,j=32,v=new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),N=[new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125])],z=[new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4])],p=[new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3])];function C(t,a,s){return t+(a-t)*s}function B(t){return Math.min(Math.max(t,0),1)}function _(t){let a=M[0],s=M[1],e=Math.sqrt(a[0]*2)*.5,n=Math.sqrt(a[1]*2)*.5,r=Math.sqrt(s[0]*2)*.5,o=Math.sqrt(s[1]*2)*.5,c=B(t/j);a[0]=C(e,a[0],c),a[1]=C(n,a[1],c),s[0]=C(r,s[0],c),s[1]=C(o,s[1],c)}function d(t,a,s,e,n,r){let o=s-t,c=e-a,h=n,i=n+1,w=a+c*(h-t)/o,b=a+c*(i-t)/o;if(h>=t&&h<s||i>t&&i<=s)if(Math.sign(w)===Math.sign(b)||Math.abs(w)<1e-4||Math.abs(b)<1e-4){let g=(w+b)/2;g<0?(r[0]=Math.abs(g),r[1]=0):(r[0]=0,r[1]=Math.abs(g))}else{let g=-a*o/c+t,k=Math.trunc(g),m=g>t?w*(g-k)/2:0,U=g<s?b*(1-(g-k))/2:0;(Math.abs(m)>Math.abs(U)?m:-U)<0?(r[0]=Math.abs(m),r[1]=Math.abs(U)):(r[0]=Math.abs(U),r[1]=Math.abs(m))}else r[0]=0,r[1]=0;return r}function J(t,a,s,e,n){let r=M[0],o=M[1],c=.5+e,h=.5+e-1,i=a+s+1;switch(t){case 0:{n[0]=0,n[1]=0;break}case 1:{a<=s?d(0,h,i/2,0,a,n):(n[0]=0,n[1]=0);break}case 2:{a>=s?d(i/2,0,i,h,a,n):(n[0]=0,n[1]=0);break}case 3:{d(0,h,i/2,0,a,r),d(i/2,0,i,h,a,o),_(i,M),n[0]=r[0]+o[0],n[1]=r[1]+o[1];break}case 4:{a<=s?d(0,c,i/2,0,a,n):(n[0]=0,n[1]=0);break}case 5:{n[0]=0,n[1]=0;break}case 6:{Math.abs(e)>0?(d(0,c,i,h,a,r),d(0,c,i/2,0,a,o),d(i/2,0,i,h,a,n),o[0]=o[0]+n[0],o[1]=o[1]+n[1],n[0]=(r[0]+o[0])/2,n[1]=(r[1]+o[1])/2):d(0,c,i,h,a,n);break}case 7:{d(0,c,i,h,a,n);break}case 8:{a>=s?d(i/2,0,i,c,a,n):(n[0]=0,n[1]=0);break}case 9:{Math.abs(e)>0?(d(0,h,i,c,a,r),d(0,h,i/2,0,a,o),d(i/2,0,i,c,a,n),o[0]=o[0]+n[0],o[1]=o[1]+n[1],n[0]=(r[0]+o[0])/2,n[1]=(r[1]+o[1])/2):d(0,h,i,c,a,n);break}case 10:{n[0]=0,n[1]=0;break}case 11:{d(0,h,i,c,a,n);break}case 12:{d(0,c,i/2,0,a,r),d(i/2,0,i,c,a,o),_(i,M),n[0]=r[0]+o[0],n[1]=r[1]+o[1];break}case 13:{d(0,h,i,c,a,n);break}case 14:{d(0,c,i,h,a,n);break}case 15:{n[0]=0,n[1]=0;break}}return n}function K(t,a,s,e,n,r){let o=t===s&&a===e;if(!o){let c=(t+s)/2,h=(a+e)/2,i=e-a,w=t-s;o=i*(n-c)+w*(r-h)>0}return o}function G(t,a,s,e,n,r){let o=0;for(let c=0;c<I;++c)for(let h=0;h<I;++h){let i=h/(I-1),w=c/(I-1);K(t,a,s,e,n+i,r+w)&&++o}return o/(I*I)}function A(t,a,s,e,n,r,o,c){let h=p[t],i=h[0],w=h[1];return i>0&&(a+=o[0],s+=o[1]),w>0&&(e+=o[0],n+=o[1]),c[0]=1-G(a,s,e,n,1+r,0+r),c[1]=G(a,s,e,n,1+r,1+r),c}function Q(t,a,s,e,n){let r=M[0],o=M[1],c=a+s+1;switch(t){case 0:{A(t,1,1,1+c,1+c,a,e,r),A(t,1,0,1+c,0+c,a,e,o),n[0]=(r[0]+o[0])/2,n[1]=(r[1]+o[1])/2;break}case 1:{A(t,1,0,0+c,0+c,a,e,r),A(t,1,0,1+c,0+c,a,e,o),n[0]=(r[0]+o[0])/2,n[1]=(r[1]+o[1])/2;break}case 2:{A(t,0,0,1+c,0+c,a,e,r),A(t,1,0,1+c,0+c,a,e,o),n[0]=(r[0]+o[0])/2,n[1]=(r[1]+o[1])/2;break}case 3:{A(t,1,0,1+c,0+c,a,e,n);break}case 4:{A(t,1,1,0+c,0+c,a,e,r),A(t,1,1,1+c,0+c,a,e,o),n[0]=(r[0]+o[0])/2,n[1]=(r[1]+o[1])/2;break}case 5:{A(t,1,1,0+c,0+c,a,e,r),A(t,1,0,1+c,0+c,a,e,o),n[0]=(r[0]+o[0])/2,n[1]=(r[1]+o[1])/2;break}case 6:{A(t,1,1,1+c,0+c,a,e,n);break}case 7:{A(t,1,1,1+c,0+c,a,e,r),A(t,1,0,1+c,0+c,a,e,o),n[0]=(r[0]+o[0])/2,n[1]=(r[1]+o[1])/2;break}case 8:{A(t,0,0,1+c,1+c,a,e,r),A(t,1,0,1+c,1+c,a,e,o),n[0]=(r[0]+o[0])/2,n[1]=(r[1]+o[1])/2;break}case 9:{A(t,1,0,1+c,1+c,a,e,n),A(t,1,0,1+c,1+c,a,e,n);break}case 10:{A(t,0,0,1+c,1+c,a,e,r),A(t,1,0,1+c,0+c,a,e,o),n[0]=(r[0]+o[0])/2,n[1]=(r[1]+o[1])/2;break}case 11:{A(t,1,0,1+c,1+c,a,e,r),A(t,1,0,1+c,0+c,a,e,o),n[0]=(r[0]+o[0])/2,n[1]=(r[1]+o[1])/2;break}case 12:{A(t,1,1,1+c,1+c,a,e,n);break}case 13:{A(t,1,1,1+c,1+c,a,e,r),A(t,1,0,1+c,1+c,a,e,o),n[0]=(r[0]+o[0])/2,n[1]=(r[1]+o[1])/2;break}case 14:{A(t,1,1,1+c,1+c,a,e,r),A(t,1,1,1+c,0+c,a,e,o),n[0]=(r[0]+o[0])/2,n[1]=(r[1]+o[1])/2;break}case 15:{A(t,1,1,1+c,1+c,a,e,r),A(t,1,0,1+c,0+c,a,e,o),n[0]=(r[0]+o[0])/2,n[1]=(r[1]+o[1])/2;break}}return n}function R(t,a,s){let e=new Float32Array(2);for(let n=0,r=t.length;n<r;++n){let o=t[n],c=o.data,h=o.width;for(let i=0;i<h;++i)for(let w=0;w<h;++w){s?J(n,w,i,a,e):Q(n,w,i,a,e);let b=(i*h+w)*2;c[b]=e[0]*255,c[b+1]=e[1]*255}}}function T(t,a,s,e,n,r,o){let c=o.data,h=o.width;for(let i=0,w=s.length;i<w;++i){let b=e[i],g=s[i],k=g.data,m=g.width;for(let U=0;U<n;++U)for(let x=0;x<n;++x){let Z=b[0]*n+t+x,O=((b[1]*n+a+U)*h+Z)*4,L=r?(U*U*m+x*x)*2:(U*m+x)*2;c[O]=k[L],c[O+1]=k[L+1],c[O+2]=0,c[O+3]=255}}}var S=class{static generate(){let a=10*D,s=v.length*5*D,e=new Uint8ClampedArray(a*s*4),n=new F(a,s,e),r=Math.pow(D-1,2)+1,o=W,c=[],h=[];for(let i=3,w=e.length;i<w;i+=4)e[i]=255;for(let i=0;i<16;++i)c.push(new F(r,r,new Uint8ClampedArray(r*r*2),2)),h.push(new F(o,o,new Uint8ClampedArray(o*o*2),2));for(let i=0,w=v.length;i<w;++i)R(c,v[i],!0),T(0,5*D*i,c,z,D,!0,n);for(let i=0,w=N.length;i<w;++i)R(h,N[i],!1),T(5*D,4*W*i,h,p,W,!1,n);return n}};var P=new Map([[y(0,0,0,0),new Float32Array([0,0,0,0])],[y(0,0,0,1),new Float32Array([0,0,0,1])],[y(0,0,1,0),new Float32Array([0,0,1,0])],[y(0,0,1,1),new Float32Array([0,0,1,1])],[y(0,1,0,0),new Float32Array([0,1,0,0])],[y(0,1,0,1),new Float32Array([0,1,0,1])],[y(0,1,1,0),new Float32Array([0,1,1,0])],[y(0,1,1,1),new Float32Array([0,1,1,1])],[y(1,0,0,0),new Float32Array([1,0,0,0])],[y(1,0,0,1),new Float32Array([1,0,0,1])],[y(1,0,1,0),new Float32Array([1,0,1,0])],[y(1,0,1,1),new Float32Array([1,0,1,1])],[y(1,1,0,0),new Float32Array([1,1,0,0])],[y(1,1,0,1),new Float32Array([1,1,0,1])],[y(1,1,1,0),new Float32Array([1,1,1,0])],[y(1,1,1,1),new Float32Array([1,1,1,1])]]);function H(t,a,s){return t+(a-t)*s}function y(t,a,s,e){let n=H(t,a,.75),r=H(s,e,1-.25);return H(n,r,1-.125)}function V(t,a){let s=0;return a[3]===1&&(s+=1),s===1&&a[2]===1&&t[1]!==1&&t[3]!==1&&(s+=1),s}function $(t,a){let s=0;return a[3]===1&&t[1]!==1&&t[3]!==1&&(s+=1),s===1&&a[2]===1&&t[0]!==1&&t[2]!==1&&(s+=1),s}var E=class{static generate(){let o=new Uint8ClampedArray(2178),c=new Uint8ClampedArray(1024*4);for(let h=0;h<33;++h)for(let i=0;i<66;++i){let w=.03125*i,b=.03125*h;if(P.has(w)&&P.has(b)){let g=P.get(w),k=P.get(b),m=h*66+i;o[m]=127*V(g,k),o[m+33]=127*$(g,k)}}for(let h=0,i=17;i<33;++i)for(let w=0;w<64;++w,h+=4)c[h]=o[i*66+w],c[h+3]=255;return new F(64,16,c)}};self.addEventListener("message",t=>{let a=S.generate(),s=E.generate();postMessage({areaImageData:a,searchImageData:s},[a.data.buffer,s.data.buffer]),close()});})();
`;
function ki(e = !0) {
  let t = URL.createObjectURL(new Blob([Oi], { type: `text/javascript` })),
    n = new Worker(t);
  return (
    URL.revokeObjectURL(t),
    new Promise((t, r) => {
      (n.addEventListener(`error`, (e) => r(e.error)),
        n.addEventListener(`message`, (n) => {
          let r = K.from(n.data.searchImageData),
            i = K.from(n.data.areaImageData),
            a = [
              r.toCanvas().toDataURL(`image/png`, 1),
              i.toCanvas().toDataURL(`image/png`, 1),
            ];
          (e &&
            (localStorage.setItem(`smaa-search`, a[0]),
            localStorage.setItem(`smaa-area`, a[1])),
            t(a));
        }),
        n.postMessage(null));
    })
  );
}
var Ai = class {
    constructor() {
      this.disableCache = !1;
    }
    setCacheEnabled(e) {
      this.disableCache = !e;
    }
    generate() {
      let e = !this.disableCache && window.localStorage !== void 0,
        t = e
          ? [
              localStorage.getItem(`smaa-search`),
              localStorage.getItem(`smaa-area`),
            ]
          : [null, null];
      return (t[0] !== null && t[1] !== null ? Promise.resolve(t) : ki(e)).then(
        (e) =>
          new Promise((t, n) => {
            let r = new Image(),
              i = new Image(),
              a = new x();
            ((a.onLoad = () => t([r, i])),
              (a.onError = n),
              r.addEventListener(`error`, (e) => a.itemError(`smaa-search`)),
              i.addEventListener(`error`, (e) => a.itemError(`smaa-area`)),
              r.addEventListener(`load`, () => a.itemEnd(`smaa-search`)),
              i.addEventListener(`load`, () => a.itemEnd(`smaa-area`)),
              a.itemStart(`smaa-search`),
              a.itemStart(`smaa-area`),
              (r.src = e[0]),
              (i.src = e[1]));
          }),
      );
    }
  },
  ji = new Map([
    [$(0, 0, 0, 0), new Float32Array([0, 0, 0, 0])],
    [$(0, 0, 0, 1), new Float32Array([0, 0, 0, 1])],
    [$(0, 0, 1, 0), new Float32Array([0, 0, 1, 0])],
    [$(0, 0, 1, 1), new Float32Array([0, 0, 1, 1])],
    [$(0, 1, 0, 0), new Float32Array([0, 1, 0, 0])],
    [$(0, 1, 0, 1), new Float32Array([0, 1, 0, 1])],
    [$(0, 1, 1, 0), new Float32Array([0, 1, 1, 0])],
    [$(0, 1, 1, 1), new Float32Array([0, 1, 1, 1])],
    [$(1, 0, 0, 0), new Float32Array([1, 0, 0, 0])],
    [$(1, 0, 0, 1), new Float32Array([1, 0, 0, 1])],
    [$(1, 0, 1, 0), new Float32Array([1, 0, 1, 0])],
    [$(1, 0, 1, 1), new Float32Array([1, 0, 1, 1])],
    [$(1, 1, 0, 0), new Float32Array([1, 1, 0, 0])],
    [$(1, 1, 0, 1), new Float32Array([1, 1, 0, 1])],
    [$(1, 1, 1, 0), new Float32Array([1, 1, 1, 0])],
    [$(1, 1, 1, 1), new Float32Array([1, 1, 1, 1])],
  ]);
function Mi(e, t, n) {
  return e + (t - e) * n;
}
function $(e, t, n, r) {
  return Mi(Mi(e, t, 0.75), Mi(n, r, 0.75), 0.875);
}
function Ni(e, t) {
  let n = 0;
  return (
    t[3] === 1 && (n += 1),
    n === 1 && t[2] === 1 && e[1] !== 1 && e[3] !== 1 && (n += 1),
    n
  );
}
function Pi(e, t) {
  let n = 0;
  return (
    t[3] === 1 && e[1] !== 1 && e[3] !== 1 && (n += 1),
    n === 1 && t[2] === 1 && e[0] !== 1 && e[2] !== 1 && (n += 1),
    n
  );
}
var Fi = class {
  static generate() {
    let e = new Uint8ClampedArray(2178),
      t = new Uint8ClampedArray(4096);
    for (let t = 0; t < 33; ++t)
      for (let n = 0; n < 66; ++n) {
        let r = 0.03125 * n,
          i = 0.03125 * t;
        if (ji.has(r) && ji.has(i)) {
          let a = ji.get(r),
            o = ji.get(i),
            s = t * 66 + n;
          ((e[s] = 127 * Ni(a, o)), (e[s + 33] = 127 * Pi(a, o)));
        }
      }
    for (let n = 0, r = 17; r < 33; ++r)
      for (let i = 0; i < 64; ++i, n += 4)
        ((t[n] = e[r * 66 + i]), (t[n + 3] = 255));
    return new K(64, 16, t);
  }
};
