(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["catalog"],{"0021":function(t,e,i){t.exports=i.p+"img/steering_column.86684872.svg"},"17b3":function(t,e,i){},"247d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-card",[i("v-card-actions",{staticClass:"primary"},[i("v-row",{attrs:{align:"baseline","no-gutters":""}},[t._l(t.questions,(function(e,n){return[i("v-btn",{attrs:{disabled:!e.selected,small:"",text:"",dark:""},on:{click:function(e){return t.goto(n)}}},[t._v(t._s(e.text))]),n!=t.questions.length-1?i("div",{staticClass:"white--text mx-3"},[t._v("/")]):t._e()]}))],2)],1),i("v-card-actions",[0!==t.questions.length?i("v-select",{attrs:{items:t.question.options,label:t.question.text},on:{change:function(e){return t.changeSelection()}},model:{value:t.question.selected,callback:function(e){t.$set(t.question,"selected",e)},expression:"question.selected"}}):t._e()],1),i("v-list",{attrs:{"two-line":""}},t._l(t.searchResults,(function(e){return i("v-list-item",{key:e.CatalogId,on:{click:function(i){return t.toProductPage(e)}}},[i("v-list-item-avatar",[i("v-img",{attrs:{src:e.Image||t.fallbackImage}})],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.Manufacturer)+" "+t._s(e.Model))]),i("v-list-item-subtitle",[t._v(t._s(e.Year)+" "+t._s(e.Shift)+" "+t._s(e.Transmission)+" "+t._s(e.Tilt))])],1)],1)})),1)],1),i("div",{staticClass:"text-center py-5"},[i("v-pagination",{attrs:{"total-visible":"",length:t.maxPage},on:{input:function(e){return t.fetchList()}},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)},s=[],a=(i("fb6a"),i("b85c")),o=i("d722"),l={name:"catalog",metaInfo:{title:"Catalog"},data:function(){return{fallbackImage:i("0021"),questions:[],searchResults:[],page:1,maxPage:1}},computed:{question:function(){return this.questions.length?this.questions[this.questions.length-1]:null}},methods:{goto:function(t){this.questions[t].selected=null,this.questions=this.questions.slice(0,t+1),this.fetchList()},fetchList:function(){var t,e=this,i={},n=Object(a["a"])(this.questions);try{for(n.s();!(t=n.n()).done;){var s=t.value;i[s.text]=s.selected||null}}catch(l){n.e(l)}finally{n.f()}console.log(i),o["a"].postCatalog(JSON.stringify({query:i,page:this.page})).then((function(t){200===t.status&&t.json().then((function(t){console.log(t),e.searchResults=t.result,e.maxPage=t.maxPage,t.nextQuestion&&e.questions.push({text:t.nextQuestion,options:t.options})}))}))},toProductPage:function(t){this.$router.push("/part/"+t.CatalogId)},changeSelection:function(){this.page=1,this.fetchList()}},created:function(){this.fetchList()}},r=l,u=i("2877"),c=i("6544"),h=i.n(c),v=i("8336"),g=i("b0af"),f=i("99d9"),d=i("a523"),m=i("adda"),p=i("8860"),b=i("da13"),x=i("8270"),_=i("5d23"),I=(i("99af"),i("d81d"),i("a9e3"),i("d3b7"),i("25f0"),i("2909")),q=i("5530"),y=(i("17b3"),i("9d26")),V=i("dc22"),$=i("a9ad"),k=i("de2c"),C=i("7560"),w=i("58df"),j=Object(w["a"])($["a"],Object(k["a"])({onVisible:["init"]}),C["a"]).extend({name:"v-pagination",directives:{Resize:V["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(q["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var i=e%2===0?1:0,n=Math.floor(e/2),s=this.length-n+1+i;if(this.value>n&&this.value<s){var a=this.value-n+2,o=this.value+n-2-i;return[1,"..."].concat(Object(I["a"])(this.range(a,o)),["...",this.length])}if(this.value===n){var l=this.value+n-1-i;return[].concat(Object(I["a"])(this.range(1,l)),["...",this.length])}if(this.value===s){var r=this.value-n+1;return[1,"..."].concat(Object(I["a"])(this.range(r,this.length)))}return[].concat(Object(I["a"])(this.range(1,n)),["..."],Object(I["a"])(this.range(s,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var i=[];t=t>0?t:1;for(var n=t;n<=e;n++)i.push(n);return i},genIcon:function(t,e,i,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{type:"button"},on:i?{}:{click:n}},[t(y["a"],[e])])])},genItem:function(t,e){var i=this,n=e===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button"},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}}),L=i("0fd9b"),O=i("b974"),S=Object(u["a"])(r,n,s,!1,null,null,null);e["default"]=S.exports;h()(S,{VBtn:v["a"],VCard:g["a"],VCardActions:f["a"],VContainer:d["a"],VImg:m["a"],VList:p["a"],VListItem:b["a"],VListItemAvatar:x["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VPagination:j,VRow:L["a"],VSelect:O["a"]})}}]);
//# sourceMappingURL=catalog.d42610a6.js.map