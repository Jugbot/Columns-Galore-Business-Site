(function(t){function e(e){for(var o,r,c=e[0],l=e[1],u=e[2],i=0,m=[];i<c.length;i++)r=c[i],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);p&&p(e);while(m.length)m.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(o=!1)}o&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var o={},r={app:0},n={app:0},s=[];function c(t){return l.p+"js/"+({about:"about","catalog~quoteform":"catalog~quoteform",catalog:"catalog",quoteform:"quoteform",coloroptions:"coloroptions",columnparts:"columnparts",home:"home",partinformation:"partinformation",payment:"payment",rebuiltcolumns:"rebuiltcolumns",techsupport:"techsupport"}[t]||t)+"-legacy."+{about:"ac354004","catalog~quoteform":"50a38ca7",catalog:"0464ca49",quoteform:"ffe6483a",coloroptions:"8c2bf909",columnparts:"be8be163",home:"77184d28",partinformation:"d7ca0a84",payment:"9f8959c0",rebuiltcolumns:"e65d73a4",techsupport:"4cd9322e"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"catalog~quoteform":1,catalog:1,quoteform:1,coloroptions:1,partinformation:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var o="css/"+({about:"about","catalog~quoteform":"catalog~quoteform",catalog:"catalog",quoteform:"quoteform",coloroptions:"coloroptions",columnparts:"columnparts",home:"home",partinformation:"partinformation",payment:"payment",rebuiltcolumns:"rebuiltcolumns",techsupport:"techsupport"}[t]||t)+"."+{about:"31d6cfe0","catalog~quoteform":"1b0dca86",catalog:"13e27461",quoteform:"861c3348",coloroptions:"6bad7d54",columnparts:"31d6cfe0",home:"31d6cfe0",partinformation:"fcc5a8cf",payment:"31d6cfe0",rebuiltcolumns:"31d6cfe0",techsupport:"31d6cfe0"}[t]+".css",n=l.p+o,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],i=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(i===o||i===n))return e()}var m=document.getElementsByTagName("style");for(c=0;c<m.length;c++){u=m[c],i=u.getAttribute("data-href");if(i===o||i===n)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||n,s=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete r[t],p.parentNode.removeChild(p),a(s)},p.href=n;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[t]=0})));var o=n[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise((function(e,a){o=n[t]=[e,a]}));e.push(o[2]=s);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=c(t);var m=new Error;u=function(e){i.onerror=i.onload=null,clearTimeout(p);var a=n[t];if(0!==a){if(a){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",m.name="ChunkLoadError",m.type=o,m.request=r,a[1](m)}n[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(a,o,function(e){return t[e]}.bind(null,o));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var m=0;m<u.length;m++)e(u[m]);var p=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var o=a("8a23"),r=a.n(o);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var o=a("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-content",[o("v-col",{staticClass:"pa-0"},[t.$vuetify.breakpoint.smAndUp?o("v-container",[o("v-row",{attrs:{justify:"center"}},[o("v-flex",{attrs:{xs12:"",sm2:"","px-1":""}},[o("v-img",{attrs:{src:a("9b19")}})],1),o("v-flex",{attrs:{shrink:""}},[o("v-row",{staticClass:"fill-height mx-3",attrs:{"no-gutters":"",align:"center"}},[o("v-flex",[o("h2",[t._v("Your complete steering column source.")]),o("h3",[t._v("Steering Columns And Parts Shipped Worldwide")]),o("v-row",{staticClass:"accent--text",attrs:{"no-gutters":""}},[o("h3",[t._v("Toll Free 888-326-5866")]),o("div",{staticClass:"px-1"},[t._v("—")]),o("h3",[t._v("Satisfaction Guaranteed")])])],1)],1)],1)],1)],1):t._e(),o("v-tabs",{attrs:{centered:"","show-arrows":""}},[o("v-tab",{key:"Home",attrs:{to:"/",exact:""}},[t.$vuetify.breakpoint.xsOnly?o("v-avatar",{attrs:{tile:""}},[o("v-img",{attrs:{src:a("9b19")}})],1):o("span",[t._v("Home")])],1),t._l(t.pages.primary,(function(e){var a=e.name,r=e.page;return[o("v-tab",{key:a,attrs:{to:r}},[t._v(t._s(a))])]})),o("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.value;return[o("v-tab",t._g({},a),[o("v-icon",{attrs:{left:""}},[t._v(" "+t._s(r?"mdi-close":"mdi-menu")+" ")]),t._v(" More ")],1)]}}])},[o("v-list",[t._l(t.pages.secondary,(function(e){var a=e.name,r=e.page;return[o("v-list-item",{key:a,attrs:{to:r}},[o("v-list-item-title",[t._v(t._s(a))])],1)]}))],2)],1)],2)],1),o("v-container",{staticClass:"py-5",attrs:{fluid:""}},[o("router-view",{key:t.$route.fullPath})],1)],1),o("v-footer",{attrs:{app:"",absolute:"",color:"white"}},[o("v-container",[o("v-row",{attrs:{justify:"space-between"}},[o("v-col",{staticClass:"grow",attrs:{cols:"12",md:"auto"}},[o("v-card",{staticClass:"pa-3 fill-height",attrs:{outlined:""}},[o("v-card-title",[t._v("Phone")]),o("v-card-text",{},t._l(t.phoneNumbers,(function(e,a){var r=e.name,n=e.number;return o("p",{key:a},[t._v(" "+t._s(r)+" "),o("a",{staticClass:"ml-2",staticStyle:{float:"right"},attrs:{href:t.toCallable(n)}},[t._v(t._s(n))])])})),0)],1)],1),o("v-col",{staticClass:"grow",attrs:{cols:"12",md:"auto"}},[o("v-card",{staticClass:"pa-3 fill-height",attrs:{outlined:""}},[o("v-card-title",[t._v("Shipping & Mailing")]),o("v-card-text",[o("p",[t._v("Steering Columns Galore Inc.")]),o("p",[t._v("5 Progress Street")]),o("p",[t._v("Brewster, NY 10509")])])],1)],1),o("v-col",{staticClass:"grow",attrs:{cols:"12",md:"auto"}},[o("v-card",{staticClass:"pa-3 fill-height",attrs:{outlined:""}},[o("v-card-title",[t._v("Email")]),o("v-card-text",[o("p",[o("a",{attrs:{href:"mailto:techsupport@columnsgalore.com"}},[t._v("techsupport@columnsgalore.com")])]),o("p",[o("a",{attrs:{href:"mailto:salesteam@columnsgalore.com"}},[t._v("salesteam@columnsgalore.com")])])])],1)],1),o("v-col",{staticClass:"grow",attrs:{cols:"12",md:"auto"}},[o("v-card",{staticClass:"pa-3 fill-height",attrs:{outlined:""}},[o("v-card-title",[t._v("Hours of Operation (EST)")]),o("v-card-text",[o("v-simple-table",{attrs:{dense:"",width:"100%"}},[o("tbody",t._l(t.hours,(function(e,a){var r=e.day,n=e.start,s=e.end;return o("tr",{key:a},[o("td",[t._v(t._s(r))]),o("td",[t._v(t._s(n))]),o("td",[t._v(t._s(s))])])})),0)])],1)],1)],1),o("v-col",{staticClass:"grow",attrs:{cols:"12",md:"auto"}},[o("v-card",{staticClass:"fill-height grow",attrs:{outlined:""}},[o("v-card-actions",{staticClass:"pa-0"},[o("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.03556457633!2d-73.62045168448964!3d41.3950340034838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd52e5ff79a0cb%3A0x487f9a4fb8e078ea!2sSteering%20Columns%20Galore%20Inc.!5e0!3m2!1sen!2sus!4v1578945739765!5m2!1sen!2sus",width:"100%",height:"300",frameborder:"0",allowfullscreen:""}})])],1)],1)],1)],1)],1)],1)},n=[],s=(a("a15b"),a("ac1f"),a("466d"),{name:"App",metaInfo:{titleTemplate:"%s | Steering Columns Galore",meta:[{name:"description",content:"Steering columns for American cars and trucks from 1967 and up"}]},components:{},data:function(){return{pages:{primary:[{name:"Catalog",page:"/catalog"},{name:"Quote",page:"/quote"}],secondary:[{name:"Rebuilt Columns",page:"/rebuiltcolumns"},{name:"Tech Support",page:"/techsupport"},{name:"Color Options",page:"/coloroptions"},{name:"Payment",page:"/payment"},{name:"About",page:"/about"}]},phoneNumbers:[{name:"Toll Free",number:"(888) 326-5866"},{name:"Local",number:"(845) 278-5762"},{name:"Fax",number:"(845) 278-5764"},{name:"International",number:"+1 (845) 278-5762"}],hours:[{day:"Sunday",start:"CLOSED",end:"CLOSED"},{day:"Monday",start:"9 AM",end:"6 PM"},{day:"Tuesday",start:"9 AM",end:"6 PM"},{day:"Wednesday",start:"9 AM",end:"6 PM"},{day:"Thursday",start:"9 AM",end:"6 PM"},{day:"Friday",start:"9 AM",end:"6 PM"},{day:"Saturday",start:"CLOSED",end:"CLOSED"}]}},methods:{toCallable:function(t){return"tel:"+t.match(/(\d|\+)+/g).join("-")}}}),c=s,l=(a("034f"),a("2877")),u=a("6544"),i=a.n(u),m=a("7496"),p=a("8212"),d=a("b0af"),f=a("99d9"),v=a("62ad"),h=a("a523"),g=a("a75b"),b=a("0e8f"),y=a("553a"),_=a("132d"),w=a("adda"),C=a("8860"),x=a("da13"),S=a("5d23"),A=a("e449"),O=a("0fd9b"),P=a("1f4f"),k=a("71a3"),q=a("fe57"),T=Object(l["a"])(c,r,n,!1,null,null,null),V=T.exports;i()(T,{VApp:m["a"],VAvatar:p["a"],VCard:d["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VCol:v["a"],VContainer:h["a"],VContent:g["a"],VFlex:b["a"],VFooter:y["a"],VIcon:_["a"],VImg:w["a"],VList:C["a"],VListItem:x["a"],VListItemTitle:S["c"],VMenu:A["a"],VRow:O["a"],VSimpleTable:P["a"],VTab:k["a"],VTabs:q["a"]});a("99af");var E=a("2909"),M=a("8c4f"),j=a("58ca"),F=a("d046"),L=F.staticRoutes,I=F.dynamicRoutes,N=[].concat(Object(E["a"])(L),Object(E["a"])(I),[{path:"*",redirect:"/"}]);o["a"].use(M["a"]),o["a"].use(j["a"],{keyName:"metaInfo",attribute:"data-vue-meta",ssrAttribute:"data-vue-meta-server-rendered",tagIDKeyName:"vmid",refreshOnceOnNavigation:!0});var B=new M["a"]({mode:"history",routes:N}),D=B,R=a("f309");o["a"].use(R["a"]);var $=new R["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#EF5B5B",secondary:"#23001E",accent:"#235789",error:"#FFBA49",info:"#235789",success:"#FFBA49",warning:"#FFBA49"}}}});o["a"].config.productionTip=!1,new o["a"]({router:D,vuetify:$,render:function(t){return t(V)},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")},"8a23":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.93dfd27b.svg"},d046:function(t,e,a){a("d3b7"),a("ddb0");var o=a("448a"),r=[{path:"/",name:"home",component:function(){return a.e("home").then(a.bind(null,"bb51"))}},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/catalog",name:"catalog",component:function(){return Promise.all([a.e("catalog~quoteform"),a.e("catalog")]).then(a.bind(null,"247d"))}},{path:"/rebuiltcolumns",name:"rebuiltcolumns",component:function(){return a.e("rebuiltcolumns").then(a.bind(null,"242b"))}},{path:"/columnparts",name:"columnparts",component:function(){return a.e("columnparts").then(a.bind(null,"00a5"))}},{path:"/coloroptions",name:"coloroptions",component:function(){return a.e("coloroptions").then(a.bind(null,"e208"))}},{path:"/techsupport",name:"techsupport",component:function(){return a.e("techsupport").then(a.bind(null,"63e1"))}},{path:"/payment",name:"payment",component:function(){return a.e("payment").then(a.bind(null,"1175"))}},{path:"/quote",component:function(){return Promise.all([a.e("catalog~quoteform"),a.e("quoteform")]).then(a.bind(null,"4c7d"))}}],n=5,s=[{path:"/part/:id",component:function(){return a.e("partinformation").then(a.bind(null,"ff81"))},meta:{sitemap:{priority:.1,slugs:o(Array(n).keys())}}}];t.exports={staticRoutes:r,dynamicRoutes:s}}});
//# sourceMappingURL=app-legacy.388ec7f7.js.map