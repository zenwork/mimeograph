!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=24)}([function(t,e,n){"use strict";n.d(e,"e",function(){return i}),n.d(e,"f",function(){return s}),n.d(e,"g",function(){return o}),n.d(e,"a",function(){return a}),n.d(e,"c",function(){return c}),n.d(e,"b",function(){return u}),n.d(e,"d",function(){return d});
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
const i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,r=new RegExp(`${i}|${s}`),o=(()=>{const t=document.createElement("div");return t.setAttribute("style","{{bad value}}"),"{{bad value}}"!==t.getAttribute("style")})();class a{constructor(t,e){this.parts=[],this.element=e;let n=-1,s=0;const a=[],c=e=>{const l=e.content,h=document.createTreeWalker(l,133,null,!1);let p,f;for(;h.nextNode();){n++,p=f;const e=f=h.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const a=e.attributes;let c=0;for(let t=0;t<a.length;t++)a[t].value.indexOf(i)>=0&&c++;for(;c-- >0;){const i=t.strings[s],a=d.exec(i)[2],c=o&&"style"===a?"style$":/^[a-zA-Z-]*$/.test(a)?a:a.toLowerCase(),u=e.getAttribute(c).split(r);this.parts.push({type:"attribute",index:n,name:a,strings:u}),e.removeAttribute(c),s+=u.length-1}}"TEMPLATE"===e.tagName&&c(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(i)<0)continue;const o=e.parentNode,c=t.split(r),d=c.length-1;s+=d;for(let t=0;t<d;t++)o.insertBefore(""===c[t]?u():document.createTextNode(c[t]),e),this.parts.push({type:"node",index:n++});o.insertBefore(""===c[d]?u():document.createTextNode(c[d]),e),a.push(e)}else if(8===e.nodeType)if(e.nodeValue===i){const t=e.parentNode,i=e.previousSibling;null===i||i!==p||i.nodeType!==Node.TEXT_NODE?t.insertBefore(u(),e):n--,this.parts.push({type:"node",index:n++}),a.push(e),null===e.nextSibling?t.insertBefore(u(),e):n--,f=p,s++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(i,t+1));)this.parts.push({type:"node",index:-1})}}};c(e);for(const t of a)t.parentNode.removeChild(t)}}const c=t=>-1!==t.index,u=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(t,e,n){"use strict";n.d(e,"g",function(){return i}),n.d(e,"h",function(){return s}),n.d(e,"f",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"e",function(){return a}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return u}),n.d(e,"a",function(){return d});const i="md-join",s="md-acceptor-ready",r="md-join-request",o="md-join-accepted",a="md-join-ready",c="md-join-catchup",u="md-join-leaving";class d{static createRequest(t){return new CustomEvent(i,{detail:{type:r,source:t}})}static createAccept(t){return new CustomEvent(i,{detail:{type:o,source:t}})}static createReady(t){return new CustomEvent(i,{detail:{type:a,source:t}})}static createCatchup(t){return new CustomEvent(i,{detail:{type:c,source:t}})}static createAcceptorReady(t){return new CustomEvent(i,{detail:{type:s,source:t}})}static createLeaving(t){return new CustomEvent(i,{detail:{type:u,source:t}})}}},function(t,e,n){"use strict";n.d(e,"a",function(){return i});const i={}},function(t,e,n){"use strict";var i=n(5);
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
 */const s=new class{handleAttributeExpressions(t,e,n,s){const r=e[0];return"."===r?new i.e(t,e.slice(1),n).parts:"@"===r?[new i.c(t,e.slice(1),s.eventContext)]:"?"===r?[new i.b(t,e.slice(1),n)]:new i.a(t,e,n).parts}handleTextExpression(t){return new i.d(t)}};var r=n(6),o=n(0),a=n(11),c=n(2),u=n(4),d=n(8),l=n(10),h=n(7);n.d(e,"e",function(){return p}),n.d(e,"b",function(){return r.b}),n.d(e,!1,function(){return r.a}),n.d(e,!1,function(){return o.e}),n.d(e,!1,function(){return o.f}),n.d(e,!1,function(){}),n.d(e,!1,function(){return o.g}),n.d(e,!1,function(){return o.a}),n.d(e,!1,function(){return o.c}),n.d(e,"c",function(){return o.b}),n.d(e,!1,function(){return o.d}),n.d(e,!1,function(){}),n.d(e,!1,function(){return s}),n.d(e,!1,function(){return a.a}),n.d(e,!1,function(){return c.a}),n.d(e,!1,function(){}),n.d(e,!1,function(){return i.a}),n.d(e,!1,function(){}),n.d(e,"a",function(){return i.d}),n.d(e,!1,function(){return i.b}),n.d(e,!1,function(){return i.e}),n.d(e,!1,function(){}),n.d(e,!1,function(){return i.c}),n.d(e,!1,function(){return u.a}),n.d(e,"g",function(){return u.c}),n.d(e,"f",function(){return u.b}),n.d(e,"d",function(){return d.a}),n.d(e,!1,function(){return d.b}),n.d(e,!1,function(){return l.a}),n.d(e,!1,function(){return l.b}),n.d(e,!1,function(){return h.b}),n.d(e,!1,function(){return h.a});
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
const p=(t,...e)=>new r.b(t,e,"html",s)},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"b",function(){return r});
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
const i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,e,n=null,i=null)=>{let s=e;for(;s!==n;){const e=s.nextSibling;t.insertBefore(s,i),s=e}},r=(t,e,n=null)=>{let i=e;for(;i!==n;){const e=i.nextSibling;t.removeChild(i),i=e}}},function(t,e,n){"use strict";n.d(e,"a",function(){return d}),n.d(e,"d",function(){return h}),n.d(e,"b",function(){return p}),n.d(e,"e",function(){return f}),n.d(e,"c",function(){return g});var i=n(8),s=n(4),r=n(2),o=n(11),a=n(6),c=n(0);
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
const u=t=>null===t||!("object"==typeof t||"function"==typeof t);class d{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new l(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let i=0;i<e;i++){n+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)n+="string"==typeof e?e:String(e);else n+="string"==typeof t?t:String(t)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class l{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===r.a||u(t)&&t===this.value||(this.value=t,Object(i.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(i.b)(this.value);){const t=this.value;this.value=r.a,t(this)}this.value!==r.a&&this.committer.commit()}}class h{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(c.b)()),this.endNode=t.appendChild(Object(c.b)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=Object(c.b)()),t._insert(this.endNode=Object(c.b)())}insertAfterPart(t){t._insert(this.startNode=Object(c.b)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;Object(i.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=r.a,t(this)}const t=this._pendingValue;t!==r.a&&(u(t)?t!==this.value&&this._commitText(t):t instanceof a.b?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):void 0!==t.then?this._commitPromise(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const n=new o.a(e,t.processor,this.options),i=n._clone();n.update(t.values),this._commitNode(i),this.value=n}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const s of t)void 0===(n=e[i])&&(n=new h(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(s),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}_commitPromise(t){this.value=t,t.then(e=>{this.value===t&&(this.setValue(e),this.commit())})}clear(t=this.startNode){Object(s.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class p{constructor(t,e,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this._pendingValue=t}commit(){for(;Object(i.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=r.a,t(this)}if(this._pendingValue===r.a)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=r.a}}class f extends d{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends l{}let b=!1;try{const t={get capture(){return b=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class g{constructor(t,e,n){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n}setValue(t){this._pendingValue=t}commit(){for(;Object(i.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=r.a,t(this)}if(this._pendingValue===r.a)return;const t=this._pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this,this._options),this._options=v(t),s&&this.element.addEventListener(this.eventName,this,this._options),this.value=t,this._pendingValue=r.a}handleEvent(t){("function"==typeof this.value?this.value:"function"==typeof this.value.handleEvent?this.value.handleEvent:()=>null).call(this.eventContext||this.element,t)}}const v=t=>t&&(b?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o});var i=n(4),s=n(0);
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
class r{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!0;for(let i=0;i<t;i++){const t=this.strings[i];e+=t;const r=t.lastIndexOf(">");!(n=(r>-1||n)&&-1===t.indexOf("<",r+1))&&s.g&&(e=e.replace(s.d,(t,e,n,i)=>"style"===n?`${e}style$${i}`:t)),e+=n?s.f:s.e}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class o extends r{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),Object(i.c)(e,n.firstChild),t}}},function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return r});var i=n(0);
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
 */function s(t){let e=r.get(t.type);void 0===e&&(e=new Map,r.set(t.type,e));let n=e.get(t.strings);return void 0===n&&(n=new i.a(t,t.getTemplateElement()),e.set(t.strings,n)),n}const r=new Map},function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return r});
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
const i=new WeakMap,s=t=>(i.set(t,!0),t),r=t=>"function"==typeof t&&i.has(t)},function(t,e,n){"use strict";var i=n(3),s=n(0);
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
const r=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;function o(t,e){const{element:{content:n},parts:i}=t,s=document.createTreeWalker(n,r,null,!1);let o=c(i),a=i[o],u=-1,d=0;const l=[];let h=null;for(;s.nextNode();){u++;const t=s.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(l.push(t),null===h&&(h=t)),null!==h&&d++;void 0!==a&&a.index===u;)a.index=null!==h?-1:a.index-d,a=i[o=c(i,o)]}l.forEach(t=>t.parentNode.removeChild(t))}const a=t=>{let e=t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const n=document.createTreeWalker(t,r,null,!1);for(;n.nextNode();)e++;return e},c=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(Object(s.c)(e))return n}return-1};var u=n(10),d=n(7),l=n(6);
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
const h=(t,e)=>`${t}--${e}`;let p=!0;void 0===window.ShadyCSS?p=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),p=!1);const f=["html","svg"],m=new Set,b=(t,e,n)=>{m.add(n);const i=t.querySelectorAll("style");if(0===i.length)return;const s=document.createElement("style");for(let t=0;t<i.length;t++){const e=i[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}if((t=>{f.forEach(e=>{const n=d.a.get(h(e,t));void 0!==n&&n.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),o(t,n)})})})(n),function(t,e,n=null){const{element:{content:i},parts:s}=t;if(null===n||void 0===n)return void i.appendChild(e);const o=document.createTreeWalker(i,r,null,!1);let u=c(s),d=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===n&&(d=a(e),n.parentNode.insertBefore(e,n));-1!==u&&s[u].index===l;){if(d>0){for(;-1!==u;)s[u].index+=d,u=c(s,u);return}u=c(s,u)}}(e,s,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,n),window.ShadyCSS.nativeShadow){const n=e.element.content.querySelector("style");t.insertBefore(n.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(s,e.element.content.firstChild);const t=new Set;t.add(s),o(e,t)}},g=t=>null!==t,v=t=>t?"":null,y=(t,e)=>e!==t&&(e==e||t==t),_={attribute:!0,type:String,reflect:!1,hasChanged:y},w=new Promise(t=>t(!0)),S=1,x=4,N=8;class P extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=w,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const t=[];for(const[e,n]of this._classProperties){const i=this._attributeNameForProperty(e,n);void 0!==i&&(this._attributeToPropertyMap.set(i,e),t.push(i))}return t}static createProperty(t,e=_){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}if(this._classProperties.set(t,e),this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(i){const s=this[t];this[n]=i,this._requestPropertyUpdate(t,s,e)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const t=Object.getPrototypeOf(this);"function"==typeof t._finalize&&t._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const e=this.properties,n=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const t of n)this.createProperty(t,e[t])}static _attributeNameForProperty(t,e){const n=void 0!==e&&e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=y){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e&&e.type;if(void 0===n)return t;const i=n===Boolean?g:"function"==typeof n?n:n.fromAttribute;return i?i(t):t}static _propertyValueToAttribute(t,e){if(void 0===e||void 0===e.reflect)return;return(e.type===Boolean?v:e.type&&e.type.toAttribute||String)(t)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const[t]of this.constructor._classProperties)if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}_applyInstanceProperties(){for(const[t,e]of this._instanceProperties)this[t]=e;this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&S?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=_){const i=this.constructor,s=i._propertyValueToAttribute(e,n);if(void 0!==s){const e=i._attributeNameForProperty(t,n);void 0!==e&&(this._updateState=this._updateState|N,null===s?this.removeAttribute(e):this.setAttribute(e,s),this._updateState=this._updateState&~N)}}_attributeToProperty(t,e){if(!(this._updateState&N)){const n=this.constructor,i=n._attributeToPropertyMap.get(t);if(void 0!==i){const t=n._classProperties.get(i);this[i]=n._propertyValueFromAttribute(e,t)}}}requestUpdate(t,e){if(void 0!==t){const n=this.constructor._classProperties.get(t)||_;return this._requestPropertyUpdate(t,e,n)}return this._invalidate()}_requestPropertyUpdate(t,e,n){return this.constructor._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let t;this._updateState=this._updateState|x;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._validate(),t(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&x}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&S||(this._updateState=this._updateState|S,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~x}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const[t,e]of this._reflectingProperties)this._propertyToAttribute(t,this[t],e);this._reflectingProperties=void 0}}updated(t){}firstUpdated(t){}}P._attributeToPropertyMap=new Map,P._finalized=!0,P._classProperties=new Map,P.properties={};
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
E((t,e)=>t.querySelector(e)),E((t,e)=>t.querySelectorAll(e));function E(t){return e=>(n,i)=>{Object.defineProperty(n,i,{get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0})}}n.d(e,"a",function(){return C}),n.d(e,!1,function(){}),n.d(e,!1,function(){return P}),n.d(e,!1,function(){}),n.d(e,!1,function(){}),n.d(e,!1,function(){}),n.d(e,!1,function(){}),n.d(e,!1,function(){}),n.d(e,"b",function(){return i.e}),n.d(e,!1,function(){});
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
class C extends P{update(t){super.update(t);const e=this.render();e instanceof i.b&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}C.render=((t,e,n)=>{const i=n.scopeName,r=u.a.has(e);if(Object(u.b)(t,e,Object.assign({templateFactory:(t=>e=>{const n=h(e.type,t);let i=d.a.get(n);void 0===i&&(i=new Map,d.a.set(n,i));let r=i.get(e.strings);if(void 0===r){const n=e.getTemplateElement();p&&window.ShadyCSS.prepareTemplateDom(n,t),r=new s.a(e,n),i.set(e.strings,r)}return r})(i)},n)),e instanceof ShadowRoot&&p&&t instanceof l.b){if(!m.has(i)){const t=u.a.get(e).value;b(e,t.template,i)}r||window.ShadyCSS.styleElement(e.host)}})},function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a});var i=n(4),s=n(5),r=n(7);
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
const o=new WeakMap,a=(t,e,n)=>{let a=o.get(e);void 0===a&&(Object(i.b)(e,e.firstChild),o.set(e,a=new s.d(Object.assign({templateFactory:r.b},n))),a.appendInto(e)),a.setValue(t),a.commit()}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n(4),s=n(0);
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
class r{constructor(t,e,n){this._parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this._parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=i.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let n=0,r=0;const o=t=>{const i=document.createTreeWalker(t,133,null,!1);let a=i.nextNode();for(;n<e.length&&null!==a;){const t=e[n];if(Object(s.c)(t))if(r===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(a,t.name,t.strings,this.options));n++}else r++,"TEMPLATE"===a.nodeName&&o(a.content),a=i.nextNode();else this._parts.push(void 0),n++}};return o(t),i.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},function(t,e,n){"use strict";function i(t,e,n){const i=new MutationObserver(function(i){i.forEach(function(i){if("childList"===i.type&&i.target.nodeName===t.toUpperCase()){let t=i.target.innerHTML;try{t&&e(t,n)}catch(t){throw t}}})});return i.observe(n,{attributes:!1,childList:!0,subtree:!1}),i}n.d(e,"g",function(){return i}),n.d(e,"a",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"b",function(){return a}),n.d(e,"e",function(){return c}),n.d(e,"c",function(){return u}),n.d(e,"f",function(){return d});const s="md-store-index-updated";function r(t,e){t.dispatchEvent(new CustomEvent(s,{detail:e}))}function o(t,e){t.addEventListener(s,e)}function a(t,e){let n=new CustomEvent("md-list-selection",{detail:e});t.dispatchEvent(n)}function c(t,e){t.addEventListener("md-list-selection",e)}function u(t,e){let n=new CustomEvent("md-store-story",{detail:e});t.dispatchEvent(n)}function d(t,e){t&&t.addEventListener("md-store-story",e)}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n(9);let s=0;class r extends i.a{constructor(){if(super(),this.Id=s++,this.Class=new.target.name,new.target===r)throw new TypeError("Cannot construct BaseElement instances directly")}hashcode(){return this.Class+":"+this.Id}connectedCallback(){}static define(t){try{const e=this;if(t)window.customElements.define(t,e);else{if(!this.name)throw Error("either define [static this.name] or provide a valid name to the define(name) function");window.customElements.define(this.name,e)}}catch(e){console.debug(`swallowing custom component define() for [${t||this.name}] error: ${e.message}`)}}createRenderRoot(){return this.attachShadow({mode:"open"})}}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n(13),s=n(1);class r extends i.a{static get name(){return"md-child"}constructor(){super(),this.ancestor=null,this.siblings=[]}beforeJoining(){}initStandalone(){}onAccepted(t){}onSiblingReady(t){}onSiblingLeaving(t){}ready(){this.ancestor.dispatchEvent(s.a.createReady(this))}connectedCallback(){this.joinParent("md-parent")}disconnectedCallback(){this.ancestor.dispatchEvent(s.a.createLeaving(this))}joinParent(t,e){const n=this;if(!t)return this.initStandalone(),"standalone";let i;return i=e&&e.byId?this.ancestor=document.getElementById(t):this.ancestor=this.closest(t),this.beforeJoining(),i?(this.addEventListener(s.g,function(t){let e=t.detail,i=e.source;switch(e.type){case s.b:n.onAccepted(i);break;case s.c:i.hashcode()!==n.hashcode()&&n.siblings.indexOf(i.hashcode())<0&&(console.debug(`${n.hashcode()} catching up with ${i.hashcode()}`),n.siblings.push(i.hashcode()),n.onSiblingReady(i))}}),this.ancestor.addEventListener(s.g,function(t){let e=t.detail,i=e.source;if(i.hashcode()&&i.hashcode()!==n.hashcode()){let t=e.type;switch(t){case s.h:n.join();break;case s.e:n.siblings.includes(i.hashcode())||(n.siblings.push(i.hashcode()),n.onSiblingReady(i));break;case s.d:n.siblings.indexOf(i.hashcode())>-1&&(delete n.siblings[n.siblings.findIndex(t=>t===i.hashcode())],n.onSiblingLeaving(i))}}}),this.join(),"cooperative"):(this.initStandalone(),"standalone")}join(){this.ancestor&&this.ancestor.dispatchEvent(s.a.createRequest(this))}}},function(t,e,n){"use strict";n.d(e,"a",function(){return l});var i=n(3);
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
 */const s=(t,e)=>{const n=t.startNode.parentNode,s=void 0===e?t.endNode:e.startNode,r=n.insertBefore(Object(i.c)(),s);n.insertBefore(Object(i.c)(),s);const o=new i.a(t.options);return o.insertAfterNode(r),o},r=(t,e)=>(t.setValue(e),t.commit(),t),o=(t,e,n)=>{const s=t.startNode.parentNode,r=n?n.startNode:t.endNode,o=e.endNode.nextSibling;o!==r&&Object(i.g)(s,e.startNode,o,r)},a=t=>{Object(i.f)(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},c=(t,e,n)=>{const i=new Map;for(let s=e;s<=n;s++)i.set(t[s],s);return i},u=new WeakMap,d=new WeakMap;function l(t,e,n){let l;return 2===arguments.length?n=e:3===arguments.length&&(l=e),Object(i.d)(e=>{const i=u.get(e)||[],h=d.get(e)||[],p=[],f=[],m=[];let b,g,v=0;for(const e of t)m[v]=l?l(e,v):v,f[v]=n(e,v),v++;let y=0,_=i.length-1,w=0,S=f.length-1;for(;y<=_&&w<=S;)if(null===i[y])y++;else if(null===i[_])_--;else if(h[y]===m[w])p[w]=r(i[y],f[w]),y++,w++;else if(h[_]===m[S])p[S]=r(i[_],f[S]),_--,S--;else if(h[y]===m[S])p[S]=r(i[y],f[S]),o(e,i[y],p[S+1]),y++,S--;else if(h[_]===m[w])p[w]=r(i[_],f[w]),o(e,i[_],i[y]),_--,w++;else if(void 0===b&&(b=c(m,w,S),g=c(h,y,_)),b.has(h[y]))if(b.has(h[_])){const t=g.get(m[w]),n=void 0!==t?i[t]:null;if(null===n){const t=s(e,i[y]);r(t,f[w]),p[w]=t}else p[w]=r(n,f[w]),o(e,n,i[y]),i[t]=null;w++}else a(i[_]),_--;else a(i[y]),y++;for(;w<=S;){const t=s(e,p[S+1]);r(t,f[w]),p[w++]=t}for(;y<=_;){const t=i[y++];null!==t&&a(t)}u.set(e,p),d.set(e,m)})}},,,,,,,,,function(t,e,n){"use strict";n.r(e);var i=n(9),s=n(15),r=n(14),o=n(12);n.d(e,"default",function(){return a});class a extends r.a{static get name(){return"md-crumbs"}constructor(){super(),this.crumbs=[],this.delimiter=">"}static get properties(){return{crumbs:{type:Object,attribute:!1},delimiter:{type:String},view:{type:String}}}connectedCallback(){this.joinParent(this.view,{byId:!0})}initStandalone(){function t(t,e){e.crumbs=JSON.parse(t.trim()),e.updatePageLink(e)}this.innerHTML&&t(this.innerHTML,this),this.observer=Object(o.g)("MD-CRUMBS",t,this)}updatePageLink(t){let e=t.crumbs[t.crumbs.length-1];history.pushState({},e.name,e.link),document.title=e.name}onAccepted(t){this.crumbs.push({id:"home",name:"home",link:"http://localhost:8080/demo"}),this.ready()}onSiblingReady(t){switch(console.log("foo!!!"),t.Class){case"md-list":console.log(t.hashcode()),Object(o.e)(t,t=>{let e=[];const n=t.detail;e.push({id:"home",name:"home",link:"http://localhost:8080/demo"}),e.push({id:n.key,name:n.title,link:`#${n.key}`}),this.crumbs=e,this.updatePageLink(this)})}}render(){return this.crumbs.length>0?i["b"]`
			${this.elementStyle()} 
			${this.renderCrumbs()}`:i["b"]`
			${this.elementStyle()}
			<ul><li>&nbsp;</li></ul>`}elementStyle(){return i["b"]`<style>${function(t){return i["b"]`
/* Style the list */
		ul {
		    padding: 10px 16px;
		    list-style: none;
		    background-color: #eee;
		}
		
		/* Display list items side by side */
		ul li {
		    display: inline;
		    font-size: 18px;
		}
		
		/* Add a slash symbol (/) before/behind each list item */
		ul li + li:before {
		    padding: 8px;
		    color: black;
		    content: "${t}";
		}
		
		/* Add a color to all links inside the list */
		ul li a {
		    /*color: #0275d8;*/
		    text-decoration: none;
		}
		
		/* Add a color on mouse-over */
		ul li a:hover {
		    /*color: #01447e;*/
		    text-decoration: underline;
		}
        `}(this.delimiter)}</style>`}renderCrumbs(){return i["b"]`<ul>
					${Object(s.a)(this.crumbs,t=>t.id,t=>i["b"]`<li><a href="${t.link}">${t.name}</a></li>`)}
					</ul>`}}a.define()}]);
//# sourceMappingURL=md-crumbs.js.map