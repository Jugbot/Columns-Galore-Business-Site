(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["catalog"],{"0021":function(t,e,i){t.exports=i.p+"img/steering_column.86684872.svg"},"17b3":function(t,e,i){},"247d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-card",[i("v-card-actions",{staticClass:"primary"},[i("v-row",{attrs:{align:"baseline","no-gutters":""}},[t._l(t.questions,(function(e,n){return[i("v-btn",{attrs:{disabled:!e.selected,small:"",text:"",dark:""},on:{click:function(e){return t.goto(n)}}},[t._v(t._s(e.text))]),n!=t.questions.length-1?i("div",{staticClass:"white--text mx-3"},[t._v("/")]):t._e()]}))],2)],1),i("v-card-actions",[0!==t.questions.length?i("v-select",{attrs:{items:t.question.options,label:t.question.text},on:{change:function(e){return t.changeSelection()}},model:{value:t.question.selected,callback:function(e){t.$set(t.question,"selected",e)},expression:"question.selected"}}):t._e()],1),i("v-list",{attrs:{"two-line":""}},t._l(t.searchResults,(function(e){return i("v-list-item",{key:e.CatalogId,on:{click:function(i){return t.toProductPage(e)}}},[i("v-list-item-avatar",[i("v-img",{attrs:{src:e.Image||t.fallbackImage}})],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.Manufacturer)+" "+t._s(e.Model))]),i("v-list-item-subtitle",[t._v(t._s(e.Year)+" "+t._s(e.Shift)+" "+t._s(e.Transmission)+" "+t._s(e.Tilt))])],1)],1)})),1)],1),i("div",{staticClass:"text-center py-5"},[i("v-pagination",{attrs:{"total-visible":"",length:t.maxPage},on:{input:function(e){return t.fetchList()}},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)},s=[],a=(i("fb6a"),i("d3b7"),i("b85c")),o={name:"catalog",metaInfo:{title:"Catalog"},data:function(){return{fallbackImage:i("0021"),questions:[],searchResults:[],page:1,maxPage:1}},computed:{question:function(){return this.questions.length?this.questions[this.questions.length-1]:null}},methods:{goto:function(t){this.questions[t].selected=null,this.questions=this.questions.slice(0,t+1),this.fetchList()},fetchList:function(){var t,e=this,i={},n=Object(a["a"])(this.questions);try{for(n.s();!(t=n.n()).done;){var s=t.value;i[s.text]=s.selected||null}}catch(o){n.e(o)}finally{n.f()}console.log(i),fetch("/api/catalog",{method:"POST",body:JSON.stringify({query:i,page:this.page}),headers:{"Content-Type":"application/json"}}).then((function(t){200===t.status&&t.json().then((function(t){console.log(t),e.searchResults=t.result,e.maxPage=t.maxPage,t.nextQuestion&&e.questions.push({text:t.nextQuestion,options:t.options})}))}))},toProductPage:function(t){this.$router.push("/part/"+t.CatalogId)},changeSelection:function(){this.page=1,this.fetchList()}},created:function(){this.fetchList()}},l=o,r=i("2877"),u=i("6544"),c=i.n(u),h=i("8336"),v=i("b0af"),g=i("99d9"),d=i("a523"),f=i("adda"),m=i("8860"),p=i("da13"),b=i("8270"),x=i("5d23"),_=(i("99af"),i("d81d"),i("a9e3"),i("25f0"),i("2909")),I=i("5530"),q=(i("17b3"),i("9d26")),y=i("dc22"),V=i("a9ad"),$=i("de2c"),k=i("7560"),C=i("58df"),w=Object(C["a"])(V["a"],Object($["a"])({onVisible:["init"]}),k["a"]).extend({name:"v-pagination",directives:{Resize:y["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(I["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var i=e%2===0?1:0,n=Math.floor(e/2),s=this.length-n+1+i;if(this.value>n&&this.value<s){var a=this.value-n+2,o=this.value+n-2-i;return[1,"..."].concat(Object(_["a"])(this.range(a,o)),["...",this.length])}if(this.value===n){var l=this.value+n-1-i;return[].concat(Object(_["a"])(this.range(1,l)),["...",this.length])}if(this.value===s){var r=this.value-n+1;return[1,"..."].concat(Object(_["a"])(this.range(r,this.length)))}return[].concat(Object(_["a"])(this.range(1,n)),["..."],Object(_["a"])(this.range(s,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var i=[];t=t>0?t:1;for(var n=t;n<=e;n++)i.push(n);return i},genIcon:function(t,e,i,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{type:"button"},on:i?{}:{click:n}},[t(q["a"],[e])])])},genItem:function(t,e){var i=this,n=e===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button"},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}}),j=i("0fd9b"),O=i("b974"),S=Object(r["a"])(l,n,s,!1,null,null,null);e["default"]=S.exports;c()(S,{VBtn:h["a"],VCard:v["a"],VCardActions:g["a"],VContainer:d["a"],VImg:f["a"],VList:m["a"],VListItem:p["a"],VListItemAvatar:b["a"],VListItemContent:x["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VPagination:w,VRow:j["a"],VSelect:O["a"]})}}]);
//# sourceMappingURL=catalog.60ad6e49.js.map