"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_soft-nav_soft-nav_ts"],{15345:(e,t,n)=>{n.d(t,{N:()=>o,x:()=>a});var r=n(86283);function o(e){a(c(e))}function a(e){i(e)}function i(e){let t=r.n4?.querySelector("#js-global-screen-reader-notice");t&&(t.textContent===e?t.textContent=`${e}\u00A0`:t.textContent=e)}function c(e){return(e.getAttribute("aria-label")||e.innerText||"").trim()}},26855:(e,t,n)=>{let r;function o(){if(!r)throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");return r}function a(){return r?.locale??"en-US"}function i(){if("undefined"!=typeof document){let e=document.getElementById("client-env");if(e)try{r=JSON.parse(e.textContent||"")}catch(e){console.error("Error parsing client-env",e)}}}n.d(t,{Kd:()=>a,dU:()=>o}),i()},4412:(e,t,n)=>{n.d(t,{C:()=>a,x:()=>o});var r=n(86283);let o=r.n4?.readyState==="interactive"||r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.n4?.addEventListener("DOMContentLoaded",()=>{e()})}),a=r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.iG?.addEventListener("load",e)})},46426:(e,t,n)=>{n.d(t,{$:()=>f,c:()=>l});var r=n(15205),o=n(26855),a=n(86283);function i(){let e=a.n4?.head?.querySelector('meta[name="enabled-features"]')?.content||"";return e.split(",")}function c(){let e=(0,o.dU)();if(e?.featureFlags)return e.featureFlags}function u(){let e=c()||i(),t=e.map(e=>e.toUpperCase());return new Set(t)}let s=a.W6?u:(0,r.Z)(u);function l(e){return s().has(e.toUpperCase())}let f={isFeatureEnabled:l}},53729:(e,t,n)=>{n.d(t,{A7:()=>f,ko:()=>s,q1:()=>c});var r=n(15205),o=n(86283);let a=(0,r.Z)(i);function i(){return o.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}let c=(0,r.Z)(u);function u(){return o.n4?.head?.querySelector('meta[name="is-private-instance"]')?.content==="true"}let s=(0,r.Z)(l);function l(){return"enterprise"===a()}let f="webpack"},44544:(e,t,n)=>{n.d(t,{Z:()=>i,_:()=>c});var r=n(86283),o=n(71643);let a=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function i(e,t={throwQuotaErrorsOnSet:!1},n=r.iG,i=e=>e,c=e=>e){let u;try{if(!n)throw Error();u=n[e]||new a}catch{u=new a}let{throwQuotaErrorsOnSet:s}=t;function l(e){t.sendCacheStats&&(0,o.b)({incrementKey:e})}function f(e){try{if(u.removeItem(e),t.ttl){let t=`${e}:expiry`;u.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let n=u.getItem(e);if(!n)return null;let r=`${e}:expiry`,o=Number(u.getItem(r));if(o&&t>o)return f(e),f(r),l("SAFE_STORAGE_VALUE_EXPIRED"),null;return l("SAFE_STORAGE_VALUE_WITHIN_TTL"),i(n)}catch(e){return null}},setItem:function(e,n,r=new Date().getTime()){try{if(u.setItem(e,c(n)),t.ttl){let n=`${e}:expiry`,o=r+t.ttl;u.setItem(n,o.toString())}}catch(e){if(s&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:f,clear:u.clear,key:u.key,get length(){return u.length}}}function c(e){return i(e,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},39629:(e,t,n)=>{n.d(t,{LS:()=>a,cl:()=>i,rV:()=>o});var r=n(44544);let{getItem:o,setItem:a,removeItem:i}=(0,r.Z)("sessionStorage")},68202:(e,t,n)=>{n.d(t,{CF:()=>c,QE:()=>d,QW:()=>SoftNavErrorEvent,$g:()=>SoftNavSuccessEvent,FP:()=>g,r_:()=>h,Nb:()=>V,Gj:()=>U,wP:()=>G,OE:()=>B,sj:()=>D,Yl:()=>m,RN:()=>z,TL:()=>R,Ak:()=>P,U6:()=>_,cY:()=>Z,LD:()=>S,BT:()=>p,u5:()=>y});var r=n(39629);let o=class SoftNavEvent extends Event{constructor(e,t){super(t),this.mechanism=e}};let SoftNavStartEvent=class SoftNavStartEvent extends o{constructor(e){super(e,d.START)}};let SoftNavSuccessEvent=class SoftNavSuccessEvent extends o{constructor(e,t){super(e,d.SUCCESS),this.visitCount=t}};let SoftNavErrorEvent=class SoftNavErrorEvent extends o{constructor(e,t){super(e,d.ERROR),this.error=t}};let SoftNavEndEvent=class SoftNavEndEvent extends o{constructor(e){super(e,d.END)}};var a=n(71643);let i="stats:soft-nav-duration",c={turbo:"TURBO",react:"REACT","turbo.frame":"FRAME",ui:"UI",hard:"HARD"};function u(){performance.clearResourceTimings(),performance.mark(i)}function s(){if(0===performance.getEntriesByName(i).length)return null;performance.measure(i,i);let e=performance.getEntriesByName(i),t=e.pop();return t?t.duration:null}function l(e){(0,a.b)({turboFailureReason:e,turboStartUrl:G(),turboEndUrl:window.location.href})}function f(){let e=s();if(!e)return;let t=c[U()],n=Math.round(e);t===c.react&&document.dispatchEvent(new CustomEvent("staffbar-update",{detail:{duration:n}})),(0,a.b)({requestUrl:window.location.href,softNavigationTiming:{mechanism:t,destination:V()||"rails",duration:n,initiator:j()||"rails"}})}let d=Object.freeze({INITIAL:"soft-nav:initial",START:"soft-nav:start",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",END:"soft-nav:end",RENDER:"soft-nav:render",PROGRESS_BAR:{START:"soft-nav:progress-bar:start",END:"soft-nav:progress-bar:end"}}),v="reload",E=0;function m(){E=0,document.dispatchEvent(new Event(d.INITIAL)),O()}function S(e){D()||(w(),document.dispatchEvent(new SoftNavStartEvent(e)),_(e),F(),q(),u())}function p(e={}){N(e)&&(E+=1,document.dispatchEvent(new SoftNavSuccessEvent(U(),E)),g(e))}function h(e={}){if(!N(e))return;E=0;let t=k()||v;document.dispatchEvent(new SoftNavErrorEvent(U(),t)),T(),l(t),O()}function g(e={}){N(e)&&(T(),document.dispatchEvent(new SoftNavEndEvent(U())),x())}function R(e={}){N(e)&&(f(),document.dispatchEvent(new Event(d.RENDER)))}function y(){document.dispatchEvent(new Event(d.FRAME_UPDATE))}function w(){document.dispatchEvent(new Event(d.PROGRESS_BAR.START))}function T(){document.dispatchEvent(new Event(d.PROGRESS_BAR.END))}function N({skipIfGoingToReactApp:e,allowedMechanisms:t=[]}={}){return D()&&(0===t.length||t.includes(U()))&&(!e||!V())}let A="soft-nav:fail",L="soft-nav:fail-referrer",b="soft-nav:referrer",I="soft-nav:marker",C="soft-nav:react-app-name";function O(){(0,r.LS)(I,"0"),(0,r.cl)(b),(0,r.cl)(A),(0,r.cl)(L),(0,r.cl)(C)}function _(e){(0,r.LS)(I,e)}function x(){(0,r.LS)(I,"0")}function D(){let e=(0,r.rV)(I);return e&&"0"!==e}function U(){return(0,r.rV)(I)}function B(){return Boolean(k())}function k(){return(0,r.rV)(A)}function P(e){(0,r.LS)(A,e||v),(0,r.LS)(L,window.location.href)}function q(){(0,r.LS)(b,window.location.href)}function G(){return(0,r.rV)(b)||document.referrer}function F(){let e=V();e?(0,r.LS)(C,e):(0,r.cl)(C)}function j(){return(0,r.rV)(C)}function V(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}var $=n(15345),Q=n(86283);let W=Object.freeze({INITIAL:"soft-nav:external:initial",START:"soft-nav:external:start",SUCCESS:"soft-nav:external:success",ERROR:"soft-nav:external:error",RENDER:"soft-nav:external:render"});function Z(){Q.n4?.addEventListener(d.SUCCESS,function(e){"turbo"===e.mechanism&&(0,$.x)(`${document.title}`)}),Q.n4?.addEventListener(W.INITIAL,m),Q.n4?.addEventListener(W.START,e=>{S(e.detail.mechanism)}),Q.n4?.addEventListener(W.SUCCESS,()=>p()),Q.n4?.addEventListener(W.ERROR,()=>h()),Q.n4?.addEventListener(W.RENDER,()=>R())}function z(){"undefined"!=typeof navigation&&"undefined"!=typeof NavigateEvent&&"function"==typeof NavigateEvent.prototype?.intercept&&document.addEventListener(d.PROGRESS_BAR.START,()=>{let e=new Promise(e=>{document.addEventListener(d.PROGRESS_BAR.END,e,{once:!0})});navigation.addEventListener("navigate",t=>{t.canIntercept&&t.intercept({scroll:"manual",handler:()=>(history.replaceState(navigation.currentEntry.getState(),"",location.href),e)})},{once:!0}),navigation.navigate(location.href,{history:"replace",state:history.state})})}},86283:(e,t,n)=>{n.d(t,{Qg:()=>r.Qg,W6:()=>r.W6,cF:()=>r.cF,iG:()=>o.iG,jX:()=>o.jX,n4:()=>o.n4,zu:()=>o.zu});var r=n(35647),o=n(73614)},73614:(e,t,n)=>{n.d(t,{iG:()=>o,jX:()=>i,n4:()=>r,zu:()=>a});let r="undefined"==typeof document?void 0:document,o="undefined"==typeof window?void 0:window,a="undefined"==typeof history?void 0:history,i="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},35647:(e,t,n)=>{n.d(t,{Qg:()=>a,W6:()=>o,cF:()=>i});var r=n(73614);let o=void 0===r.n4,a=!o;function i(){return!!o||Boolean(r.n4.querySelector('react-app[data-ssr="true"]'))}},71643:(e,t,n)=>{n.d(t,{B:()=>S,b:()=>u});var r=n(86283),o=n(4412),a=n(53729),i=n(46426);let c=[];function u(e,t=!1){!0!==(0,i.c)("BROWSER_STATS_DISABLED")&&(void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=m(),e.staff=S(),e.bundler=a.A7,c.push(e),t?f():l())}let s=null;async function l(){await o.C,null==s&&(s=window.requestIdleCallback(f))}function f(){if(s=null,!c.length)return;let e=r.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!e)return;let t=d(c);for(let n of t)E(e,`{"stats": [${n.join(",")}] }`);c=[]}function d(e){let t=[],n=e.map(e=>JSON.stringify(e));for(;n.length>0;)t.push(v(n));return t}function v(e){let t=e.shift(),n=[t],r=t.length;for(;e.length>0&&r<=65536;){let t=e[0].length;if(r+t<=65536){let o=e.shift();n.push(o),r+=t}else break}return n}function E(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}function m(){return!!r.n4?.head?.querySelector('meta[name="user-login"]')?.content}function S(){return!!r.n4?.head?.querySelector('meta[name="user-staff"]')?.content}r.n4?.addEventListener("pagehide",f),r.n4?.addEventListener("visibilitychange",f)}}]);
//# sourceMappingURL=ui_packages_soft-nav_soft-nav_ts-73af19106e1d.js.map