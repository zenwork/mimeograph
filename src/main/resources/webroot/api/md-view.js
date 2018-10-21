!function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=17)}([function(t,e,n){"use strict";n.d(e,"e",function(){return s}),n.d(e,"f",function(){return i}),n.d(e,"g",function(){return o}),n.d(e,"a",function(){return a}),n.d(e,"c",function(){return c}),n.d(e,"b",function(){return d}),n.d(e,"d",function(){return u});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${s}--\x3e`,r=new RegExp(`${s}|${i}`),o=(()=>{const t=document.createElement("div");return t.setAttribute("style","{{bad value}}"),"{{bad value}}"!==t.getAttribute("style")})();class a{constructor(t,e){this.parts=[],this.element=e;let n=-1,i=0;const a=[],c=e=>{const l=e.content,h=document.createTreeWalker(l,133,null,!1);let p,f;for(;h.nextNode();){n++,p=f;const e=f=h.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const a=e.attributes;let c=0;for(let t=0;t<a.length;t++)a[t].value.indexOf(s)>=0&&c++;for(;c-- >0;){const s=t.strings[i],a=u.exec(s)[2],c=o&&"style"===a?"style$":/^[a-zA-Z-]*$/.test(a)?a:a.toLowerCase(),d=e.getAttribute(c).split(r);this.parts.push({type:"attribute",index:n,name:a,strings:d}),e.removeAttribute(c),i+=d.length-1}}"TEMPLATE"===e.tagName&&c(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(s)<0)continue;const o=e.parentNode,c=t.split(r),u=c.length-1;i+=u;for(let t=0;t<u;t++)o.insertBefore(""===c[t]?d():document.createTextNode(c[t]),e),this.parts.push({type:"node",index:n++});o.insertBefore(""===c[u]?d():document.createTextNode(c[u]),e),a.push(e)}else if(8===e.nodeType)if(e.nodeValue===s){const t=e.parentNode,s=e.previousSibling;null===s||s!==p||s.nodeType!==Node.TEXT_NODE?t.insertBefore(d(),e):n--,this.parts.push({type:"node",index:n++}),a.push(e),null===e.nextSibling?t.insertBefore(d(),e):n--,f=p,i++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(s,t+1));)this.parts.push({type:"node",index:-1})}}};c(e);for(const t of a)t.parentNode.removeChild(t)}}const c=t=>-1!==t.index,d=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(t,e,n){"use strict";n.d(e,"a",function(){return s});const s={}},function(t,e,n){"use strict";var s=n(4);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const i=new class{handleAttributeExpressions(t,e,n,i){const r=e[0];return"."===r?new s.e(t,e.slice(1),n).parts:"@"===r?[new s.c(t,e.slice(1),i.eventContext)]:"?"===r?[new s.b(t,e.slice(1),n)]:new s.a(t,e,n).parts}handleTextExpression(t){return new s.d(t)}};var r=n(5),o=n(0),a=n(11),c=n(1),d=n(3),u=n(8),l=n(10),h=n(7);n.d(e,"e",function(){return p}),n.d(e,"b",function(){return r.b}),n.d(e,!1,function(){return r.a}),n.d(e,!1,function(){return o.e}),n.d(e,!1,function(){return o.f}),n.d(e,!1,function(){}),n.d(e,!1,function(){return o.g}),n.d(e,!1,function(){return o.a}),n.d(e,!1,function(){return o.c}),n.d(e,"c",function(){return o.b}),n.d(e,!1,function(){return o.d}),n.d(e,!1,function(){}),n.d(e,!1,function(){return i}),n.d(e,!1,function(){return a.a}),n.d(e,!1,function(){return c.a}),n.d(e,!1,function(){}),n.d(e,!1,function(){return s.a}),n.d(e,!1,function(){}),n.d(e,"a",function(){return s.d}),n.d(e,!1,function(){return s.b}),n.d(e,!1,function(){return s.e}),n.d(e,!1,function(){}),n.d(e,!1,function(){return s.c}),n.d(e,!1,function(){return d.a}),n.d(e,"g",function(){return d.c}),n.d(e,"f",function(){return d.b}),n.d(e,"d",function(){return u.a}),n.d(e,!1,function(){return u.b}),n.d(e,!1,function(){return l.a}),n.d(e,!1,function(){return l.b}),n.d(e,!1,function(){return h.b}),n.d(e,!1,function(){return h.a});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const p=(t,...e)=>new r.b(t,e,"html",i)},function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"c",function(){return i}),n.d(e,"b",function(){return r});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,n=null,s=null)=>{let i=e;for(;i!==n;){const e=i.nextSibling;t.insertBefore(i,s),i=e}},r=(t,e,n=null)=>{let s=e;for(;s!==n;){const e=s.nextSibling;t.removeChild(s),s=e}}},function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"d",function(){return h}),n.d(e,"b",function(){return p}),n.d(e,"e",function(){return f}),n.d(e,"c",function(){return v});var s=n(8),i=n(3),r=n(1),o=n(11),a=n(5),c=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const d=t=>null===t||!("object"==typeof t||"function"==typeof t);class u{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new l(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let s=0;s<e;s++){n+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)n+="string"==typeof e?e:String(e);else n+="string"==typeof t?t:String(t)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class l{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===r.a||d(t)&&t===this.value||(this.value=t,Object(s.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(s.b)(this.value);){const t=this.value;this.value=r.a,t(this)}this.value!==r.a&&this.committer.commit()}}class h{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(c.b)()),this.endNode=t.appendChild(Object(c.b)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=Object(c.b)()),t._insert(this.endNode=Object(c.b)())}insertAfterPart(t){t._insert(this.startNode=Object(c.b)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;Object(s.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=r.a,t(this)}const t=this._pendingValue;t!==r.a&&(d(t)?t!==this.value&&this._commitText(t):t instanceof a.b?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):void 0!==t.then?this._commitPromise(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const n=new o.a(e,t.processor,this.options),s=n._clone();n.update(t.values),this._commitNode(s),this.value=n}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,s=0;for(const i of t)void 0===(n=e[s])&&(n=new h(this.options),e.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(i),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}_commitPromise(t){this.value=t,t.then(e=>{this.value===t&&(this.setValue(e),this.commit())})}clear(t=this.startNode){Object(i.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class p{constructor(t,e,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this._pendingValue=t}commit(){for(;Object(s.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=r.a,t(this)}if(this._pendingValue===r.a)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=r.a}}class f extends u{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends l{}let b=!1;try{const t={get capture(){return b=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class v{constructor(t,e,n){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n}setValue(t){this._pendingValue=t}commit(){for(;Object(s.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=r.a,t(this)}if(this._pendingValue===r.a)return;const t=this._pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this,this._options),this._options=g(t),i&&this.element.addEventListener(this.eventName,this,this._options),this.value=t,this._pendingValue=r.a}handleEvent(t){("function"==typeof this.value?this.value:"function"==typeof this.value.handleEvent?this.value.handleEvent:()=>null).call(this.eventContext||this.element,t)}}const g=t=>t&&(b?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o});var s=n(3),i=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class r{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!0;for(let s=0;s<t;s++){const t=this.strings[s];e+=t;const r=t.lastIndexOf(">");!(n=(r>-1||n)&&-1===t.indexOf("<",r+1))&&i.g&&(e=e.replace(i.d,(t,e,n,s)=>"style"===n?`${e}style$${s}`:t)),e+=n?i.f:i.e}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class o extends r{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),Object(s.c)(e,n.firstChild),t}}},function(t,e,n){"use strict";function s(t,e,n){const s=new MutationObserver(function(s){s.forEach(function(s){if("childList"===s.type&&s.target.nodeName===t.toUpperCase()){let t=s.target.innerHTML;try{t&&e(t,n)}catch(t){throw t}}})});return s.observe(n,{attributes:!1,childList:!0,subtree:!1}),s}n.d(e,"i",function(){return s}),n.d(e,"a",function(){return r}),n.d(e,"d",function(){return a}),n.d(e,"b",function(){return d}),n.d(e,"f",function(){return u}),n.d(e,"j",function(){return l}),n.d(e,"c",function(){return h}),n.d(e,"g",function(){return p}),n.d(e,"e",function(){return f}),n.d(e,"h",function(){return m});const i="md-view-event-mode";function r(t){let e=new CustomEvent(i,{detail:t});t.dispatchEvent(e)}const o="md-view-start-events";function a(t){t.dispatchEvent(new CustomEvent(o,{detail:t}))}const c="md-store-index-updated";function d(t,e){t.dispatchEvent(new CustomEvent(c,{detail:e}))}function u(t,e){t.addEventListener(c,e)}function l(t,e,n){!function(t,e){let n=t.closest("md-view");n&&n.addEventListener(i,e)}(t,s=>{e&&e(t,s);let i=s.detail;n&&function(t,e){t.addEventListener(o,e)}(i,n)})}function h(t,e){let n=new CustomEvent("md-list-selection",{detail:e});t.dispatchEvent(n)}function p(t,e){t.addEventListener("md-list-selection",e)}function f(t,e){let n=new CustomEvent("md-store-story",{detail:e});t.dispatchEvent(n)}function m(t,e){t&&t.addEventListener("md-store-story",e)}},function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return r});var s=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function i(t){let e=r.get(t.type);void 0===e&&(e=new Map,r.set(t.type,e));let n=e.get(t.strings);return void 0===n&&(n=new s.a(t,t.getTemplateElement()),e.set(t.strings,n)),n}const r=new Map},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s=new WeakMap,i=t=>(s.set(t,!0),t),r=t=>"function"==typeof t&&s.has(t)},function(t,e,n){"use strict";var s=n(2),i=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;function o(t,e){const{element:{content:n},parts:s}=t,i=document.createTreeWalker(n,r,null,!1);let o=c(s),a=s[o],d=-1,u=0;const l=[];let h=null;for(;i.nextNode();){d++;const t=i.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(l.push(t),null===h&&(h=t)),null!==h&&u++;void 0!==a&&a.index===d;)a.index=null!==h?-1:a.index-u,a=s[o=c(s,o)]}l.forEach(t=>t.parentNode.removeChild(t))}const a=t=>{let e=t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const n=document.createTreeWalker(t,r,null,!1);for(;n.nextNode();)e++;return e},c=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(Object(i.c)(e))return n}return-1};var d=n(10),u=n(7),l=n(5);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const h=(t,e)=>`${t}--${e}`;let p=!0;void 0===window.ShadyCSS?p=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),p=!1);const f=["html","svg"],m=new Set,b=(t,e,n)=>{m.add(n);const s=t.querySelectorAll("style");if(0===s.length)return;const i=document.createElement("style");for(let t=0;t<s.length;t++){const e=s[t];e.parentNode.removeChild(e),i.textContent+=e.textContent}if((t=>{f.forEach(e=>{const n=u.a.get(h(e,t));void 0!==n&&n.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),o(t,n)})})})(n),function(t,e,n=null){const{element:{content:s},parts:i}=t;if(null===n||void 0===n)return void s.appendChild(e);const o=document.createTreeWalker(s,r,null,!1);let d=c(i),u=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===n&&(u=a(e),n.parentNode.insertBefore(e,n));-1!==d&&i[d].index===l;){if(u>0){for(;-1!==d;)i[d].index+=u,d=c(i,d);return}d=c(i,d)}}(e,i,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,n),window.ShadyCSS.nativeShadow){const n=e.element.content.querySelector("style");t.insertBefore(n.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(i,e.element.content.firstChild);const t=new Set;t.add(i),o(e,t)}},v=t=>null!==t,g=t=>t?"":null,_=(t,e)=>e!==t&&(e==e||t==t),y={attribute:!0,type:String,reflect:!1,hasChanged:_},w=new Promise(t=>t(!0)),x=1,S=4,P=8;class N extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=w,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const t=[];for(const[e,n]of this._classProperties){const s=this._attributeNameForProperty(e,n);void 0!==s&&(this._attributeToPropertyMap.set(s,e),t.push(s))}return t}static createProperty(t,e=y){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}if(this._classProperties.set(t,e),this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(s){const i=this[t];this[n]=s,this._requestPropertyUpdate(t,i,e)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const t=Object.getPrototypeOf(this);"function"==typeof t._finalize&&t._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const e=this.properties,n=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const t of n)this.createProperty(t,e[t])}static _attributeNameForProperty(t,e){const n=void 0!==e&&e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=_){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e&&e.type;if(void 0===n)return t;const s=n===Boolean?v:"function"==typeof n?n:n.fromAttribute;return s?s(t):t}static _propertyValueToAttribute(t,e){if(void 0===e||void 0===e.reflect)return;return(e.type===Boolean?g:e.type&&e.type.toAttribute||String)(t)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const[t]of this.constructor._classProperties)if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}_applyInstanceProperties(){for(const[t,e]of this._instanceProperties)this[t]=e;this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&x?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=y){const s=this.constructor,i=s._propertyValueToAttribute(e,n);if(void 0!==i){const e=s._attributeNameForProperty(t,n);void 0!==e&&(this._updateState=this._updateState|P,null===i?this.removeAttribute(e):this.setAttribute(e,i),this._updateState=this._updateState&~P)}}_attributeToProperty(t,e){if(!(this._updateState&P)){const n=this.constructor,s=n._attributeToPropertyMap.get(t);if(void 0!==s){const t=n._classProperties.get(s);this[s]=n._propertyValueFromAttribute(e,t)}}}requestUpdate(t,e){if(void 0!==t){const n=this.constructor._classProperties.get(t)||y;return this._requestPropertyUpdate(t,e,n)}return this._invalidate()}_requestPropertyUpdate(t,e,n){return this.constructor._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let t;this._updateState=this._updateState|S;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._validate(),t(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&S}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&x||(this._updateState=this._updateState|x,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~S}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const[t,e]of this._reflectingProperties)this._propertyToAttribute(t,this[t],e);this._reflectingProperties=void 0}}updated(t){}firstUpdated(t){}}N._attributeToPropertyMap=new Map,N._finalized=!0,N._classProperties=new Map,N.properties={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
E((t,e)=>t.querySelector(e)),E((t,e)=>t.querySelectorAll(e));function E(t){return e=>(n,s)=>{Object.defineProperty(n,s,{get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0})}}n.d(e,"a",function(){return T}),n.d(e,!1,function(){}),n.d(e,!1,function(){return N}),n.d(e,!1,function(){}),n.d(e,!1,function(){}),n.d(e,!1,function(){}),n.d(e,!1,function(){}),n.d(e,!1,function(){}),n.d(e,"b",function(){return s.e}),n.d(e,!1,function(){});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class T extends N{update(t){super.update(t);const e=this.render();e instanceof s.b&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}T.render=((t,e,n)=>{const s=n.scopeName,r=d.a.has(e);if(Object(d.b)(t,e,Object.assign({templateFactory:(t=>e=>{const n=h(e.type,t);let s=u.a.get(n);void 0===s&&(s=new Map,u.a.set(n,s));let r=s.get(e.strings);if(void 0===r){const n=e.getTemplateElement();p&&window.ShadyCSS.prepareTemplateDom(n,t),r=new i.a(e,n),s.set(e.strings,r)}return r})(s)},n)),e instanceof ShadowRoot&&p&&t instanceof l.b){if(!m.has(s)){const t=d.a.get(e).value;b(e,t.template,s)}r||window.ShadyCSS.styleElement(e.host)}})},function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a});var s=n(3),i=n(4),r=n(7);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=new WeakMap,a=(t,e,n)=>{let a=o.get(e);void 0===a&&(Object(s.b)(e,e.firstChild),o.set(e,a=new i.d(Object.assign({templateFactory:r.b},n))),a.appendInto(e)),a.setValue(t),a.commit()}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var s=n(3),i=n(0);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class r{constructor(t,e,n){this._parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this._parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=s.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let n=0,r=0;const o=t=>{const s=document.createTreeWalker(t,133,null,!1);let a=s.nextNode();for(;n<e.length&&null!==a;){const t=e[n];if(Object(i.c)(t))if(r===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(a,t.name,t.strings,this.options));n++}else r++,"TEMPLATE"===a.nodeName&&o(a.content),a=s.nextNode();else this._parts.push(void 0),n++}};return o(t),s.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var s=n(9);class i extends s.a{constructor(){if(super(),this.Class=new.target.name,new.target===i)throw new TypeError("Cannot construct BaseElement instances directly")}connectedCallback(){}setRoot(t){this.root=t}$(t){return this.root.querySelector(t)}static define(t){try{const e=this;if(t)window.customElements.define(t,e);else{if(!this.name)throw Error("either define [static this.name] or provide a valid name to the define(name) function");window.customElements.define(this.name,e)}}catch(e){console.debug(`swallowing custom component define() for [${t||this.name}] error: ${e.message}`)}}createRenderRoot(){return this.attachShadow({mode:"open"})}}},function(t,e,n){"use strict";n.d(e,"a",function(){return s});class s{constructor(t,e,n){this.key=t,this.title=e,this.content=n}}},,,,function(t,e,n){"use strict";n.r(e);var s=n(9),i=n(12),r=n(6),o=n(13);class a extends i.a{static get name(){return"md-static-store"}static get properties(){return{store:{type:Object,attribute:!1}}}connectedCallback(){this.init(),this.observeContentChange()}disconnectedCallback(){this.observer.disconnect()}render(){return s["b"]``}init(){this.store=[],this.shadowRoot.store=this.store,this.innerHTML&&this.updateStore(this.innerHTML,this);const t=this;Object(r.j)(this,null,()=>{Object(r.g)(event.detail.list,e=>{let n=e.detail.key,s=e.detail.title,i=t.findContent(t,n);Object(r.e)(t,new o.a(n,s,i))}),Object(r.b)(this,this.index)})}updateStore(t,e){e.updateStories(e,t),e.updateIndex(e)}updateStories(t,e){t.store=JSON.parse(e.trim()),t.shadowRoot.store=t.store;let n=new CustomEvent("md-store-updated");t.dispatchEvent(n)}updateIndex(t){let e={};t.store.forEach(t=>{e[t.key]=t.title}),t.index=e,Object(r.b)(t,t.index)}observeContentChange(){Object(r.i)("MD-STATIC-STORE",this.updateStore,this)}findContent(t,e){return t.store.filter(t=>t.key===e)[0].content}}a.define();class c extends i.a{static get name(){return"md-store"}static get properties(){return{src:{type:String},stories:{type:String}}}connectedCallback(){this.init(),this.fetch(this,this.src,(t,e)=>{t.updateIndex(JSON.parse(e),t)})}fetch(t,e,n){var s=new XMLHttpRequest;s.onreadystatechange=(()=>{4===s.readyState&&200===s.status&&n(t,s.responseText)}),s.open("GET",e,!0),s.send()}disconnectedCallback(){}render(){return s["b"]``}shouldUpdate(t){return console.debug("should update"),!0}update(t){console.debug("update")}firstUpdated(t){console.debug("first update")}updated(t){console.debug("updated")}init(){this.index={},this.updateIndex(this.index,this);const t=this;Object(r.j)(this,null,e=>{Object(r.g)(e.detail.list,e=>{this.fetch(t,t.stories+e.detail.key+".md",(t,n)=>{t.addToStore(e.detail,n,t)})}),Object(r.b)(this,this.index)})}addToStore(t,e,n){let s=new o.a(t.key,t.title);s.content=e,n.story=s,Object(r.e)(n,n.story)}updateIndex(t,e){e.shadowRoot.value=e.index=t,Object.keys(e.index).length>0&&Object(r.b)(e,e.index)}}c.define("md-store"),n.d(e,"MdView",function(){return d}),a.define(),c.define();class d extends i.a{static get name(){return"md-view"}static get properties(){return{store:{type:Object,attribute:!1}}}constructor(){super(),this.setRoot(this)}connectedCallback(){super.connectedCallback(),this.init(this),this.listenToStoreUpdates(this),this.listenToSelectionChanges(this)}disconnectedCallback(){this.observer.disconnect()}render(){return s["b"]`<slot></slot>`}init(t){this.$("md-static-store")?t.shadowRoot.store=t.store=this.$("md-static-store"):this.$("md-store")?t.shadowRoot.store=t.store=this.$("md-store"):t.shadowRoot.store=t.store=null,this.$("md-list")&&(t.shadowRoot.list=t.list=this.$("md-list")),this.$("md-story")&&(t.shadowRoot.story=t.story=this.$("md-story")),Object(r.a)(t),Object(r.d)(t)}listenToStoreUpdates(t){t.store&&t.list&&(t.updateStories(t),t.store.addEventListener("md-store-updated",()=>{t.updateStories(t)}))}listenToSelectionChanges(t){this.list.addEventListener("md-list-selected",function(t){})}updateStories(t){if(t.store.shadowRoot){t.stories=t.store.shadowRoot.store;let e={};t.stories&&t.stories.forEach(t=>e[t.key]=t.title)}}}d.define()}]);
//# sourceMappingURL=md-view.js.map