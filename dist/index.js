var HTMLComponents=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var r={$:function(e,t){return t||(t=document),t.querySelector(e)},$$:function(e,t,n){return t||(t=document),!0===(n=n||{}).asArray?Array.prototype.slice.call(t.querySelectorAll(e))||[]:t.querySelectorAll(e)||new NodeList}},i=Object.freeze({Backspace:8,Tab:9,Enter:13,Shift:16,Ctrl:17,Alt:18,PauseBreak:19,CapsLock:20,Escape:27,PageUp:33,PageDown:34,end:35,Home:36,LeftArrow:37,UpArrow:38,RightArrow:39,DownArrow:40,Insert:45,Delete:46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,LeftWindowKey:91,RightWindowKey:92,SelectKey:93,Numpad0:96,Numpad1:97,Numpad2:98,Numpad3:99,Numpad4:100,Numpad5:101,Numpad6:102,Numpad7:103,Numpad8:104,Numpad9:105,Multiply:106,Add:107,Subtract:109,DecimalPoint:110,Divide:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NumLock:144,ScrollLock:145,SemiColon:186,EqualSign:187,Comma:188,Dash:189,Period:190,ForwardSlash:191,GraveAccent:192,OpenBracket:219,Backlash:220,CloseBraket:221,SingleQuote:222}),l=Object.freeze({QuerySelector:r,KeyCode:i,deepCopy:function e(t,n){for(var r in n||(n={}),t)Array.isArray(t[r])?n[r]=t[r]:"object"==typeof t[r]?n[r]=e(t[r],n[r]):n[r]=t[r];return n}}),a={unknown:HTMLElement,a:HTMLAnchorElement,area:HTMLAreaElement,article:HTMLDivElement,audio:HTMLAudioElement,base:HTMLBaseElement,body:HTMLBodyElement,br:HTMLBRElement,button:HTMLButtonElement,canvas:HTMLCanvasElement,datalist:HTMLDataListElement,details:HTMLDivElement,dialog:HTMLDialogElement,div:HTMLDivElement,dl:HTMLDListElement,embed:HTMLEmbedElement,fieldset:HTMLFieldSetElement,figcaption:HTMLDivElement,figure:HTMLDivElement,font:HTMLFontElement,form:HTMLFormElement,frame:HTMLFrameElement,footer:HTMLDivElement,head:HTMLHeadElement,header:HTMLDivElement,h1:HTMLHeadingElement,h2:HTMLHeadingElement,h3:HTMLHeadingElement,h4:HTMLHeadingElement,h5:HTMLHeadingElement,h6:HTMLHeadingElement,hr:HTMLHRElement,iframe:HTMLIFrameElement,img:HTMLImageElement,input:HTMLInputElement,label:HTMLLabelElement,legend:HTMLLegendElement,li:HTMLLIElement,link:HTMLLinkElement,main:HTMLDivElement,map:HTMLMapElement,mark:HTMLDivElement,media:HTMLMediaElement,meta:HTMLMetaElement,meter:HTMLMeterElement,mod:HTMLModElement,nav:HTMLDivElement,object:HTMLObjectElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,option:HTMLOptionElement,output:HTMLOutputElement,p:HTMLParagraphElement,param:HTMLParamElement,picture:HTMLPictureElement,pre:HTMLPreElement,progress:HTMLProgressElement,quote:HTMLQuoteElement,section:HTMLDivElement,select:HTMLSelectElement,script:HTMLScriptElement,slot:HTMLSlotElement,source:HTMLSourceElement,span:HTMLSpanElement,style:HTMLStyleElement,summary:HTMLDivElement,caption:HTMLTableCaptionElement,td:HTMLTableCellElement,table:HTMLTableElement,tr:HTMLTableRowElement,col:HTMLTableColElement,template:HTMLTemplateElement,textarea:HTMLTextAreaElement,time:HTMLDivElement,title:HTMLTitleElement,track:HTMLTrackElement,ul:HTMLUListElement,video:HTMLVideoElement};const o=e=>(class extends e{static get observedAttributes(){return[]}constructor(){super();var e=this;for(var t in e){var n="_"+t;if(e[n])if(e[t]){var r=e[t];"function"==typeof r&&(e[t]=function(){r.apply(e,arguments),"function"==typeof e[n]&&e[n].apply(e,arguments)})}else e[t]=e[n]}}on(e,...t){var n=this;Array.prototype.slice.apply(t).forEach(function(t){n.addEventListener(e,t)})}once(e,...t){var n=this;Array.prototype.slice.apply(t).forEach(function(t){n.addEventListener(e,t,{once:!0})})}off(e,...t){var n=this;Array.prototype.slice.apply(t).forEach(function(t){n.removeEventListener(e,t)})}emit(e,...t){var n=new CustomEvent(e,{detail:t,currentTarget:this});this.dispatchEvent(n)}createdCallback(){this.emit("created",{source:this})}connectedCallback(){"function"==typeof super.connectedCallback&&super.connectedCallback(),this.emit("connected",{source:this})}disconnectedCallback(){this.emit("disconnected",{source:this})}attributeChangedCallback(e,t,n,r){var i={source:this,name:e,oldValue:t,newValue:n,namespace:r};this.emit("attribute",i),this.emit("attribute:"+e,i)}adoptedCallback(e,t){var n={oldDocument:e,newDocument:t};this.emit("adopted",this,n)}}),s=e=>(class extends e{insertAfter(e){return e.parentNode.insertBefore(this,e.nextSibling),e}push(e){return this.appendChild(e)}}),c=e=>(class extends(o(s(e))){constructor(){super()}args(e){return Array.prototype.slice.apply(e)}get UniqueID(){let e;return e||(e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),e}get text(){return this.innerText}set text(e){this.innerText=(e||"").trim()}get html(){return this.innerHTML}set html(e){this.innerHTML=(e||"").trim()}selectAll(){this.focus(),document.execCommand("selectAll",!1,null)}}),u=e=>(class extends(c(e)){constructor(){super()}attributeChangedCallback(e,t,n,r){super.attributeChangedCallback(e,t,n,r),this.emit("data",this,e,t,n,r),this.emit("data:"+e,this,t,n,r)}get Model(){return this.dataset}set Model(e){this.bind(e)}bind(e,...t){for(var n in e){var r=e[n];this.setAttribute(this.constructor.camelCaseToDashStyle(n),r)}return this.emit("bound",e,this,t),this}createEventedProperty(e){this.__properties}static dashStyleToCamelCase(e){var t=(e||"").toString();return"data-"===t.substring(0,4)&&(t=t.slice(5)),t.replace(/-+(.)/gi,function(e,t){return t.toUpperCase()})}static camelCaseToDashStyle(e){var t=(e||"").toString();return"data-"+(t=t[0].toLowerCase()+t.substr(1)).replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}}),m=e=>(class extends(c(e)){constructor(){super()}dispose(e,...t){return e.emit("dispose",this,t),this.emit("dispose_child",e,t),this}}),d=e=>(class extends(c(e)){constructor(){super();var e=this;e.on("edit",function(e){console.log("edit")}),e.on("updated",function(e){console.log("updated")}),e.on("save",function(t){var n=t.detail[0].oldValue||"",r=t.detail[0].newValue||"";n!==r&&(e.emit("updated",t),""===r.trim()&&e.emit("empty",t))})}edit(e){this.contentEditable=!0,this.text===this.placeholder?this.innerHTML="":this.innerHTML=this.text,this._oldValue=this.text,"true"===this.getAttribute("selectOnEdit")&&this.selectAll(),this.emit("edit",{source:this,oldValue:this._oldValue,newValue:this.text})}save(e){this.contentEditable=!1,""===this.text?this.innerHTML=this.placeholder:this.innerHTML=this.html,this.emit("save",{source:this,oldValue:this._oldValue,newValue:this.text})}get text(){return this.innerHTML}get html(){return this.innerHTML}get placeholder(){return this.getAttribute("placeholder")||"Enter some text"}set placeholder(e){return this.setAttribute("placeholder",e)}});var p={};Object.keys(a).forEach(function(e){var t=a[e];var n=document.registerElement("x-"+e,{prototype:Object.create(class extends(c(u(m(d(t))))){connectedCallback(){this.emit("connected",{source:this})}}.prototype),extends:e});p[e]=n});var h=Object.freeze(p);class E extends h.ul{}customElements.define("editable-ul",E,{extends:"x-ul"});class L extends h.li{}customElements.define("editable-li",L,{extends:"x-li"});class M extends h.img{constructor(){super()}connectedCallback(){super.connectedCallback()}}customElements.define("resizable-img",M,{extends:"x-img"});var T={EditableListElement:E,EditableListItemElement:L,ResizableImageElement:M},H={Base:c,Events:o,DOM:s,Bindable:u,Disposable:m,Editable:d};n.d(t,"el",function(){return f}),n.d(t,"Utility",function(){return l}),n.d(t,"Base",function(){return h}),n.d(t,"Components",function(){return T}),n.d(t,"Mixins",function(){return H});var f=function(e,t,n){var r=null,i=null;t=t||{},e=(e=e||"  ").toLowerCase().trim(),(r=h[e])||(r=T[e]);try{i=new r}catch(t){i=document.createElement(e)}if(!i)throw new Error(e+" instance is null");return Object.keys(t).forEach(function(e){i[e]=t[e]}),n&&n.appendChild(i),i}},function(e,t,n){"use strict";"function"==typeof DOMString&&(DOMString.prototype.asBool=function(){return~["Y","YES","TRUE","1"].indexOf(this.valueOf().toString().toUpperCase())},DOMString.prototype.asInt=function(){return parseInt(this.valueOf())},DOMString.prototype.asFloat=function(){return parseFloat(this.valueOf())},DOMString.prototype.asObject=function(){return JSON.parse(this.valueOf())},DOMString.prototype.asFunction=function(){try{return new Function(this.valueOf())}catch(e){return console.error(e),null}})}]);