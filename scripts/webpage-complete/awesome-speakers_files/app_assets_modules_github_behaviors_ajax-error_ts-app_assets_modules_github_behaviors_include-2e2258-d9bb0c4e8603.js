"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_behaviors_ajax-error_ts-app_assets_modules_github_behaviors_include-2e2258","ui_packages_soft-navigate_soft-navigate_ts"],{54679:(e,t,r)=>{r.d(t,{H:()=>i,v:()=>a});var n=r(59753);function a(){let e=document.getElementById("ajax-error-message");e&&(e.hidden=!1)}function i(){let e=document.getElementById("ajax-error-message");e&&(e.hidden=!0)}(0,n.on)("deprecatedAjaxError","[data-remote]",function(e){let t=e.detail,{error:r,text:n}=t;e.currentTarget===e.target&&"abort"!==r&&"canceled"!==r&&(/<html/.test(n)?(a(),e.stopImmediatePropagation()):setTimeout(function(){e.defaultPrevented||a()},0))}),(0,n.on)("deprecatedAjaxSend","[data-remote]",function(){i()}),(0,n.on)("click",".js-ajax-error-dismiss",function(){i()})},93491:(e,t,r)=>{r.d(t,{I:()=>l,x:()=>s});var n=r(36162),a=r(36071),i=r(59753),o=r(76237);let d=new WeakMap;function l(e){let t=e.closest(".js-render-needs-enrichment");t&&(t.classList.remove("render-error"),d.get(t)?.setLoading(!1))}function s(e,t){let r=e.closest(".js-render-needs-enrichment");return!!r&&(r.classList.add("render-error"),d.get(r)?.setError(!0,t))}function c(e,t,r){let a=r.identifier??"",i=new URL(e,window.location.origin);for(let[e,r]of Object.entries(t))i.searchParams.append(e,`${r}`);return i.hash=a,n.dy`
    <div
      class="render-container color-bg-transparent js-render-target p-0"
      data-identity="${a}"
      data-host="${i.origin}"
      data-type="${r.type}"
    >
      <iframe
        role="presentation"
        class="render-viewer"
        src="${String(i)}"
        name="${a}"
        data-content="${r.contentJson}"
        sandbox="allow-scripts allow-same-origin allow-top-navigation allow-popups"
      >
      </iframe>
    </div>
  `}function u(e,t,r){let a=n.dy`<clipboard-copy
    aria-label="Copy ${r.type} code"
    .value=${e}
    class="btn my-2 js-clipboard-copy p-0 d-inline-flex tooltipped-no-delay"
    role="button"
    data-copy-feedback="Copied!"
    data-tooltip-direction="s"
  >
    <svg
      aria-hidden="true"
      height="16"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      class="octicon octicon-copy js-clipboard-copy-icon m-2"
    >
      <path
        fill-rule="evenodd"
        d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"
      ></path>
      <path
        fill-rule="evenodd"
        d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"
      ></path>
    </svg>
    <svg
      aria-hidden="true"
      height="16"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2"
    >
      <path
        fill-rule="evenodd"
        d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
      ></path>
    </svg>
  </clipboard-copy>`,i=n.dy`
    <details class="details-reset details-overlay details-overlay-dark" style="display: contents">
      <summary
        role="button"
        aria-label="Open dialog"
        class="btn my-2 mr-2 p-0 d-inline-flex"
        aria-haspopup="dialog"
        @click="${t}"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="octicon m-2">
          <path
            fill-rule="evenodd"
            d="M3.72 3.72a.75.75 0 011.06 1.06L2.56 7h10.88l-2.22-2.22a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.22-2.22H2.56l2.22 2.22a.75.75 0 11-1.06 1.06l-3.5-3.5a.75.75 0 010-1.06l3.5-3.5z"
          ></path>
        </svg>
      </summary>
      <details-dialog
        class="Box Box--overlay render-full-screen d-flex flex-column anim-fade-in fast"
        aria-label="${r.type} rendered container"
      >
        <div>
          <button
            aria-label="Close dialog"
            data-close-dialog=""
            type="button"
            data-view-component="true"
            class="Link--muted btn-link position-absolute render-full-screen-close"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              style="display:inline-block;vertical-align:text-bottom"
              class="octicon octicon-x"
            >
              <path
                fill-rule="evenodd"
                d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
              ></path>
            </svg>
          </button>
          <div class="Box-body border-0" role="presentation"></div>
        </div>
      </details-dialog>
    </details>
  `;return n.dy`<div class="position-absolute top-0 pr-2 width-full d-flex flex-justify-end flex-items-center">
    ${i}${a}
  </div>`}function f(e){let t={color_mode:(0,o.Fg)()},r=e.getAttribute("data-type"),a=e.getAttribute("data-src"),i=e.getAttribute("data-identity"),l=e.getElementsByClassName("js-render-enrichment-target")[0],s=e.getElementsByClassName("js-render-enrichment-loader")[0],f=document.createElement("div");f.classList.add("js-render-enrichment-fallback"),e.appendChild(f);let m=l.firstElementChild;f.appendChild(m);let h={setLoading(e){s.hidden=!e},setError:(e,t)=>(h.setLoading(!1),!1!==e&&(m.classList.toggle("render-plaintext-hidden",!e),!!t&&((0,n.sY)([t,m],f),!0)))};d.set(e,h);let g=l.getAttribute("data-plain"),p=l.getAttribute("data-json");if(null==p||null==g)throw h.setError(!0,n.dy`<p class="flash flash-error">Unable to render rich display</p>`),Error(`Expected to see input data for type: ${r}`);let y=c(a,t,{type:r,identifier:i,contentJson:p}),v=c(a,t,{type:r,identifier:`${i}-fullscreen`,contentJson:p}),b=u(g,()=>{(0,n.sY)(v,l.getElementsByClassName("Box-body")[0])},{type:r});(0,n.sY)([b,y],l)}(0,a.N7)(".js-render-needs-enrichment",{constructor:HTMLElement,initialize:f}),(0,i.on)("preview:toggle:off",".js-previewable-comment-form",function(e){let t=e.currentTarget,r=t.querySelector(".js-render-needs-enrichment"),n=r?.querySelector(".js-render-enrichment-target");n&&(n.textContent="")}),(0,i.on)("preview:rendered",".js-previewable-comment-form",function(e){let t=e.currentTarget,r=t.querySelector(".js-render-needs-enrichment");r&&d.get(r)?.setLoading(!1)})},52191:(e,t,r)=>{r.d(t,{$:()=>c,G:()=>s});var n=r(56959),a=r(36071),i=r(59753);function o(e,t){let r=e.currentTarget;if(r instanceof Element){for(let e of r.querySelectorAll("[data-show-on-error]"))e instanceof HTMLElement&&(e.hidden=!t);for(let e of r.querySelectorAll("[data-hide-on-error]"))e instanceof HTMLElement&&(e.hidden=t)}}function d(e){o(e,!1)}function l(e){o(e,!0)}function s({currentTarget:e}){e instanceof Element&&c(e)}function c(e){let t=e.closest("details");t&&u(t)}function u(e){let t=e.getAttribute("data-deferred-details-content-url");if(t){e.removeAttribute("data-deferred-details-content-url");let r=e.querySelector("include-fragment, poll-include-fragment");r&&(r.src=t)}}(0,a.N7)("include-fragment, poll-include-fragment",{subscribe:e=>(0,n.qC)((0,n.RB)(e,"error",l),(0,n.RB)(e,"loadstart",d))}),(0,i.on)("click","include-fragment button[data-retry-button]",({currentTarget:e})=>{let t=e.closest("include-fragment");t.refetch()})},75297:(e,t,r)=>{r.d(t,{fK:()=>L,j:()=>w,ur:()=>d});var n=r(36162),a=r(93491),i=r(36071),o=r(97629);function d(e){return!!e.querySelector('.js-render-target[data-type="ipynb"]')}let l=["is-render-pending","is-render-ready","is-render-loading","is-render-loaded"],s=["is-render-ready","is-render-loading","is-render-loaded","is-render-failed","is-render-failed-fatally"],c=new WeakMap;function u(e){let t=c.get(e);null!=t&&(t.load=t.hello=null,t.helloTimer&&(clearTimeout(t.helloTimer),t.helloTimer=null),t.loadTimer&&(clearTimeout(t.loadTimer),t.loadTimer=null))}function f(e,t=""){e.classList.remove(...l),e.classList.add("is-render-failed");let r=h(t);!1===(0,a.x)(e,r)&&m(e,r),u(e)}function m(e,t){let r=e.querySelector(".render-viewer-error");r&&(r.remove(),e.classList.remove("render-container"),(0,n.sY)(t,e))}function h(e){let t=n.dy`<p>Unable to render rich display</p>`;if(""!==e){let r=e.split("\n");t=n.dy`<p><b>Unable to render rich display</b></p>
      <p>${r.map(e=>n.dy`${e}<br />`)}</p>`}return n.dy`<div class="flash flash-error">${t}</div>`}function g(e,t=!1){!(!(0,o.Z)(e)||e.classList.contains("is-render-ready")||e.classList.contains("is-render-failed")||e.classList.contains("is-render-failed-fatally"))&&(!t||c.get(e)?.hello)&&f(e)}function p(e,t){return!!e&&!!e.postMessage&&(e.postMessage(JSON.stringify(t),"*"),!0)}function y(e,t){let r=e.querySelector(`.js-render-target[data-identity="${t}"]`);return r&&r instanceof HTMLElement?r:null}function v(e){return t=>{let r=t.querySelector(".js-render-target");if(!r)return;let n=t.querySelector("iframe"),a=n?.contentWindow;if(a)return e(a)}}function b(e){let t=e.data;if(!t)return;if("string"==typeof t)try{t=JSON.parse(t)}catch{return}if("object"!=typeof t&&void 0!=t||"render"!==t.type||"string"!=typeof t.identity)return;let r=t.identity;if("string"!=typeof t.body)return;let n=t.body,i=y(document,r);if(!i||e.origin!==i.getAttribute("data-host"))return;let o=null!=t.payload?t.payload:void 0,d=i.querySelector("iframe"),s=d?.contentWindow;switch(n){case"hello":{let e=c.get(i)||{untimed:!0};if(e.hello=Date.now(),!s)return;p(s,{type:"render:cmd",body:{cmd:"ack",ack:!0}}),p(s,{type:"render:cmd",body:{cmd:"branding",branding:!1}});break}case"error":f(i,o?.error);break;case"error:fatal":f(i,o?.error),i.classList.add("is-render-failed-fatal");break;case"error:invalid":f(i,o?.error),i.classList.add("is-render-failed-invalid");break;case"loading":i.classList.remove(...l),i.classList.add("is-render-loading");break;case"loaded":i.classList.remove(...l),i.classList.add("is-render-loaded");break;case"ready":(0,a.I)(i),i.classList.remove(...l),i.classList.add("is-render-ready"),o&&"number"==typeof o.height&&(i.style.height=`${o.height}px`,""!==location.hash&&window.dispatchEvent(new HashChangeEvent("hashchange")));break;case"resize":o&&"number"==typeof o.height&&(i.style.height=`${o.height}px`);break;case"code_rendering_service:container:get_size":p(s,{type:"render:cmd",body:{cmd:"code_rendering_service:container:size","code_rendering_service:container:size":{width:i?.getBoundingClientRect().width}}});break;case"code_rendering_service:markdown:get_data":if(!s)return;!function(){let e;let t=d?.getAttribute("data-content")??"";try{e=JSON.parse(t)?.data}catch{e=null}if(!e)return;let r={type:"render:cmd",body:{cmd:"code_rendering_service:data:ready","code_rendering_service:data:ready":{data:e,width:i?.getBoundingClientRect().width}}};p(s,r)}()}}(0,i.N7)(".js-render-target",function(e){let t=e;t.classList.remove(...s),t.style.height="auto",!c.get(e)?.load&&(u(e),c.get(e)||(c.set(e,{load:Date.now(),hello:null,helloTimer:window.setTimeout(g,1e4,e,!0),loadTimer:window.setTimeout(g,45e3,e)}),e.classList.add("is-render-automatic","is-render-requested")))}),window.addEventListener("message",b);let w=v(e=>p(e,{type:"render:cmd",body:{cmd:"code_rendering_service:behaviour:expand_all"}})),L=v(e=>p(e,{type:"render:cmd",body:{cmd:"code_rendering_service:behaviour:collapse_all"}}))},76237:(e,t,r)=>{r.d(t,{Fg:()=>f,I3:()=>o,h5:()=>s,on:()=>c,yn:()=>u});var n=r(4412),a=r(67404);function i(){(0,a.d8)("preferred_color_mode",o())}function o(){return d("dark")?"dark":d("light")?"light":void 0}function d(e){return window.matchMedia&&window.matchMedia(`(prefers-color-scheme: ${e})`).matches}function l(){let e=document.querySelector("html[data-color-mode]");if(e)return e.getAttribute("data-color-mode")}function s(e){let t=document.querySelector("html[data-color-mode]");t&&t.setAttribute("data-color-mode",e)}function c(e,t){let r=document.querySelector("html[data-color-mode]");r&&r.setAttribute(`data-${t}-theme`,e)}function u(e){let t=document.querySelector("html[data-color-mode]");if(t)return t.getAttribute(`data-${e}-theme`)}function f(e="light"){let t=l();return("auto"===t?o():t)??e}(async()=>{if(await n.x,i(),window.matchMedia){let e=window.matchMedia("(prefers-color-scheme: dark)");e?.addEventListener?e.addEventListener("change",i):e.addListener(i)}})()},75198:(e,t,r)=>{r.r(t),r.d(t,{softNavigate:()=>i});var n=r(67852),a=r(68202);function i(e,t){(0,a.LD)("turbo"),(0,n.visit)(e,{...t})}}}]);
//# sourceMappingURL=app_assets_modules_github_behaviors_ajax-error_ts-app_assets_modules_github_behaviors_include-2e2258-2e35b2d869a5.js.map