import{S as q,i as A,s as y,e as N,t as S,k as j,X as T,c as C,a as w,g as z,d as p,n as I,Y as B,E as d,f as h,F as b,h as D,Z as E,R as F,T as M,j as R,l as G,W as V,m as W,o as X,u as k,w as Y,x as v,v as Z,I as $,U as J,V as H,r as K,G as L}from"../chunks/vendor-e26f2a80.js";import{c as P}from"../chunks/classes-8d77b8fc.js";import{p as Q}from"../chunks/stores-12355bac.js";import{O as x}from"../chunks/OG-27b37b94.js";function O(a){var g;let s,t,r=((g=a[1].prettyName)!=null?g:U(a[1].name))+"",u,i,o,l=E(a[0]).replace(/v\[(.*?)\]/,'<video src="/videos/$1.mp4" controls>')+"",e,n,m;return{c(){s=N("main"),t=N("h1"),u=S(r),i=j(),o=new T,this.h()},l(c){s=C(c,"MAIN",{});var f=w(s);t=C(f,"H1",{style:!0});var _=w(t);u=z(_,r),_.forEach(p),i=I(f),o=B(f),f.forEach(p),this.h()},h(){d(t,"color",a[1].color),d(t,"border-color",a[1].color),o.a=null},m(c,f){h(c,s,f),b(s,t),b(t,u),b(s,i),o.m(l,s),m=!0},p(c,f){var _;(!m||f&2)&&r!==(r=((_=c[1].prettyName)!=null?_:U(c[1].name))+"")&&D(u,r),(!m||f&2)&&d(t,"color",c[1].color),(!m||f&2)&&d(t,"border-color",c[1].color),(!m||f&1)&&l!==(l=E(c[0]).replace(/v\[(.*?)\]/,'<video src="/videos/$1.mp4" controls>')+"")&&o.p(l)},i(c){m||(F(()=>{n&&n.end(1),e=J(s,H,{delay:500}),e.start()}),m=!0)},o(c){e&&e.invalidate(),n=M(s,H,{}),m=!1},d(c){c&&p(s),c&&n&&n.end()}}}function ee(a){let s,t,r,u=a[1],i,o;document.title=s=a[1].prettyName,t=new x({props:{title:a[1].prettyName,description:a[1].embedInfo.description,image:"/images/embed/"+a[1].name+".png",alt:a[1].embedInfo.alt,url:"https://"+a[2].host+"/"+a[2].path}});let l=O(a);return{c(){R(t.$$.fragment),r=j(),l.c(),i=G()},l(e){const n=V('[data-svelte="svelte-kntjpy"]',document.head);W(t.$$.fragment,n),n.forEach(p),r=I(e),l.l(e),i=G()},m(e,n){X(t,document.head,null),h(e,r,n),l.m(e,n),h(e,i,n),o=!0},p(e,[n]){(!o||n&2)&&s!==(s=e[1].prettyName)&&(document.title=s);const m={};n&2&&(m.title=e[1].prettyName),n&2&&(m.description=e[1].embedInfo.description),n&2&&(m.image="/images/embed/"+e[1].name+".png"),n&2&&(m.alt=e[1].embedInfo.alt),n&4&&(m.url="https://"+e[2].host+"/"+e[2].path),t.$set(m),n&2&&y(u,u=e[1])?(K(),k(l,1,1,L),Y(),l=O(e),l.c(),v(l),l.m(i.parentNode,i)):l.p(e,n)},i(e){o||(v(t.$$.fragment,e),v(l),o=!0)},o(e){k(t.$$.fragment,e),k(l),o=!1},d(e){Z(t),e&&p(r),e&&p(i),l.d(e)}}}async function le({page:a,fetch:s}){const r=await(await s(`/${a.params.className}.json`)).json(),u=P.find(i=>i.name===a.params.className);return u?{status:200,props:{content:r.content,theClass:u}}:{status:404}}function U(a){return a.charAt(0).toUpperCase()+a.slice(1)}function ae(a,s,t){let r;$(a,Q,o=>t(2,r=o));let{content:u}=s,{theClass:i}=s;return a.$$set=o=>{"content"in o&&t(0,u=o.content),"theClass"in o&&t(1,i=o.theClass)},[u,i,r]}class re extends q{constructor(s){super();A(this,s,ae,ee,y,{content:0,theClass:1})}}export{re as default,le as load};
