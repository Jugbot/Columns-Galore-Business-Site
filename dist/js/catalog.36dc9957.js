(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["catalog"],{"0021":function(t,e,s){t.exports=s.p+"img/steering_column.86684872.svg"},"1f09":function(t,e,s){},"247d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-card",[t.questions.length>1?s("v-card-actions",{staticClass:"primary"},[s("v-row",{attrs:{align:"baseline","no-gutters":""}},[t._l(t.questions,(function(e,a){return[s("v-btn",{key:e.text,attrs:{disabled:!e.selected,small:"",text:"",dark:""},on:{click:function(e){return t.goto(a)}}},[t._v(t._s(e.text))]),a!=t.questions.length-1?s("div",{key:e.text+"-slash",staticClass:"white--text mx-3"},[t._v("/")]):t._e()]}))],2)],1):t._e(),0===t.questions.length||t.questionaireCompleted?t._e():s("v-card-actions",{staticClass:"primary"},[s("v-select",{attrs:{items:t.question.options,label:"Steering Column "+t.question.text,"prepend-icon":"mdi-home-search",filled:"",dark:"","hide-details":"",outlined:""},on:{change:function(e){return t.changeSelection()}},model:{value:t.question.selected,callback:function(e){t.$set(t.question,"selected",e)},expression:"question.selected"}})],1),s("v-card-text",{staticClass:"text-center"},[t._v(" Search for the steering column you need! Use the prompt above to narrow down your search. "),s("br"),t._v(" Alternatively, "),s("router-link",{attrs:{to:"/quote"}},[t._v("request a quote")]),t._v(". ")],1)],1),s("v-card",{staticClass:"mt-5"},[t.fetching?s("v-list",{attrs:{"two-line":""}},t._l([1,2,3,4,5],(function(t){return s("v-skeleton-loader",{key:t,attrs:{type:"list-item-avatar-two-line"}})})),1):s("v-list",{attrs:{"two-line":""}},t._l(t.searchResults,(function(e){return s("v-list-item",{key:e.CatalogId,attrs:{to:"/part/"+e.CatalogId}},[s("v-list-item-avatar",[s("v-img",{attrs:{src:e.ImagePath,"lazy-src":t.fallbackImage}})],1),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(e.Manufacturer)+" "+t._s(e.Model))]),s("v-list-item-subtitle",[t._v(t._s(e.Year)+" "+t._s(e.Shift)+" "+t._s(e.Transmission)+" "+t._s(e.Tilt))])],1)],1)})),1)],1),s("v-row",{staticClass:"text-center py-5",attrs:{"no-gutters":""}},[s("v-btn",{attrs:{to:{query:Object.assign({},t.$route.query,{page:t.page-1})},disabled:1===t.page,color:"primary"}},[s("v-icon",[t._v("mdi-arrow-left")])],1),s("v-spacer"),s("v-btn",{attrs:{to:{query:Object.assign({},t.$route.query,{page:t.page+1})},disabled:t.page===t.maxPage,color:"primary"}},[s("v-icon",[t._v("mdi-arrow-right")])],1)],1)],1)},i=[],n=(s("e260"),s("fb6a"),s("ddb0"),s("5530")),r=s("d722"),o={name:"catalog",metaInfo:{title:"Catalog"},data(){return{fallbackImage:s("0021"),questions:[],searchResults:[],page:1,maxPage:1,fetching:!0}},computed:{question(){return this.questions.length?this.questions[this.questions.length-1]:null},questionaireCompleted(){return!!this.question.selected},columnQuery(){let t={};for(const e of this.questions)t[e.text]=e.selected||null;return t}},methods:{setPage(t){this.page=t,this.setSearchParams(Object(n["a"])({page:t},this.columnQuery))},setQuestions(t){this.questions=t,this.setSearchParams(Object(n["a"])({page:this.page},this.columnQuery))},goto(t){this.setQuestions(this.questions.slice(0,t)),this.setPage(1),this.fetchList()},setSearchParams(t){for(const[e,s]of Object.entries(t))null===s&&delete t[e];this.$router.push({query:t}).catch(()=>{})},fetchList(){this.fetching=!0,r["a"].postCatalog(JSON.stringify({query:this.columnQuery,page:this.page})).then(t=>{this.fetching=!1,200===t.status&&t.json().then(t=>{this.searchResults=t.result,this.maxPage=t.maxPage,t.nextQuestion&&this.setQuestions([...this.questions,{text:t.nextQuestion,options:t.options}])})})},changeSelection(){this.setPage(1),this.fetchList()}},created(){const t=Object(n["a"])({},this.$route.query);for(const e in t)"page"===e?this.setPage(parseInt(t[e])):this.setQuestions([...this.questions,{text:e,options:[],selected:t[e]}]);this.fetchList()}},l=o,c=s("2877"),h=s("6544"),d=s.n(h),u=s("8336"),g=s("b0af"),p=s("99d9"),m=s("a523"),v=s("132d"),b=s("adda"),y=s("8860"),f=s("da13"),x=s("8270"),_=s("5d23"),S=s("0fd9"),q=s("b974"),k=(s("c975"),s("5319"),s("1276"),s("1f09"),s("c995")),w=s("24b2"),C=s("7560"),L=s("58df"),O=s("80d2"),V=Object(L["a"])(k["a"],w["a"],C["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:()=>({})}},computed:{attrs(){return this.isLoading?this.boilerplate?{}:Object(n["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes(){return Object(n["a"])(Object(n["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading(){return!("default"in this.$scopedSlots)||this.loading},rootTypes(){return Object(n["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone(t,e){return this.$createElement("div",{staticClass:`v-skeleton-loader__${t} v-skeleton-loader__bone`},e)},genBones(t){const[e,s]=t.split("@"),a=()=>this.genStructure(e);return Array.from({length:s}).map(a)},genStructure(t){let e=[];t=t||this.type||"";const s=this.rootTypes[t]||"";if(t===s);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);s.indexOf(",")>-1?e=this.mapBones(s):s.indexOf("@")>-1?e=this.genBones(s):s&&e.push(this.genStructure(s))}return[this.genBone(t,e)]},genSkeleton(){const t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(O["l"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave(t){t.style.setProperty("display","none","important")},resetStyles(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}}),B=s("2fa4"),j=Object(c["a"])(l,a,i,!1,null,null,null);e["default"]=j.exports;d()(j,{VBtn:u["a"],VCard:g["a"],VCardActions:p["a"],VCardText:p["c"],VContainer:m["a"],VIcon:v["a"],VImg:b["a"],VList:y["a"],VListItem:f["a"],VListItemAvatar:x["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VRow:S["a"],VSelect:q["a"],VSkeletonLoader:V,VSpacer:B["a"]})}}]);
//# sourceMappingURL=catalog.36dc9957.js.map