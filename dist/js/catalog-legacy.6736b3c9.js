(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["catalog"],{"0021":function(t,e,a){t.exports=a.p+"img/steering_column.86684872.svg"},"1f09":function(t,e,a){},"247d":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",[t.questions.length>1?a("v-card-actions",{staticClass:"primary"},[a("v-row",{attrs:{align:"baseline","no-gutters":""}},[t._l(t.questions,(function(e,i){return[a("v-btn",{key:e.text,attrs:{disabled:!e.selected,small:"",text:"",dark:""},on:{click:function(e){return t.goto(i)}}},[t._v(t._s(e.text))]),i!=t.questions.length-1?a("div",{key:e.text+"-slash",staticClass:"white--text mx-3"},[t._v("/")]):t._e()]}))],2)],1):t._e(),0===t.questions.length||t.questionaireCompleted?t._e():a("v-card-actions",{staticClass:"primary"},[a("v-select",{attrs:{items:t.question.options,label:"Steering Column "+t.question.text,"prepend-icon":"mdi-home-search",filled:"",dark:"","hide-details":"",outlined:""},on:{change:function(e){return t.changeSelection()}},model:{value:t.question.selected,callback:function(e){t.$set(t.question,"selected",e)},expression:"question.selected"}})],1),a("v-card-text",{staticClass:"text-center"},[t._v(" Search for the steering column you need! Use the prompt above to narrow down your search. "),a("br"),t._v(" Alternatively, "),a("router-link",{attrs:{to:"/quote"}},[t._v("request a quote")]),t._v(". ")],1)],1),a("v-card",{staticClass:"mt-5"},[t.fetching?a("v-list",{attrs:{"two-line":""}},t._l([1,2,3,4,5],(function(t){return a("v-skeleton-loader",{key:t,attrs:{type:"list-item-avatar-two-line"}})})),1):a("v-list",{attrs:{"two-line":""}},t._l(t.searchResults,(function(e){return a("v-list-item",{key:e.CatalogId,attrs:{to:"/part/"+e.CatalogId}},[a("v-list-item-avatar",[a("v-img",{attrs:{src:e.ImagePath,"lazy-src":t.fallbackImage}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.Manufacturer)+" "+t._s(e.Model))]),a("v-list-item-subtitle",[t._v(t._s(e.Year)+" "+t._s(e.Shift)+" "+t._s(e.Transmission)+" "+t._s(e.Tilt)+" "+t._s(e.AdditionalOptions))])],1)],1)})),1)],1),a("v-row",{staticClass:"text-center py-5",attrs:{"no-gutters":""}},[a("v-btn",{attrs:{to:{query:Object.assign({},t.$route.query,{page:t.page-1})},disabled:1===t.page,color:"primary"}},[a("v-icon",[t._v("mdi-arrow-left")])],1),a("v-spacer"),a("v-btn",{attrs:{to:{query:Object.assign({},t.$route.query,{page:t.page+1})},disabled:t.page===t.maxPage,color:"primary"}},[a("v-icon",[t._v("mdi-arrow-right")])],1)],1)],1)},s=[],n=(a("99af"),a("fb6a"),a("4fad"),a("2909")),r=a("3835"),o=a("5530"),l=a("b85c"),c=a("d722"),u={name:"catalog",metaInfo:{title:"Catalog"},data:function(){return{fallbackImage:a("0021"),questions:[],searchResults:[],page:1,maxPage:1,fetching:!0}},computed:{question:function(){return this.questions.length?this.questions[this.questions.length-1]:null},questionaireCompleted:function(){return!!this.question.selected},columnQuery:function(){var t,e={},a=Object(l["a"])(this.questions);try{for(a.s();!(t=a.n()).done;){var i=t.value;e[i.text]=i.selected||null}}catch(s){a.e(s)}finally{a.f()}return e}},methods:{setPage:function(t){this.page=t,this.setSearchParams(Object(o["a"])({page:t},this.columnQuery))},setQuestions:function(t){this.questions=t,this.setSearchParams(Object(o["a"])({page:this.page},this.columnQuery))},goto:function(t){this.setQuestions(this.questions.slice(0,t)),this.setPage(1),this.fetchList()},setSearchParams:function(t){for(var e=0,a=Object.entries(t);e<a.length;e++){var i=Object(r["a"])(a[e],2),s=i[0],n=i[1];null===n&&delete t[s]}this.$router.push({query:t}).catch((function(){}))},fetchList:function(){var t=this;this.fetching=!0,c["a"].postCatalog({query:this.columnQuery,page:this.page}).then((function(e){t.fetching=!1,200===e.status&&e.json().then((function(e){t.searchResults=e.result,t.maxPage=e.maxPage,e.nextQuestion&&t.setQuestions([].concat(Object(n["a"])(t.questions),[{text:e.nextQuestion,options:e.options}]))}))}))},changeSelection:function(){this.setPage(1),this.fetchList()}},created:function(){var t=Object(o["a"])({},this.$route.query);for(var e in t)"page"===e?this.setPage(parseInt(t[e])):this.setQuestions([].concat(Object(n["a"])(this.questions),[{text:e,options:[],selected:t[e]}]));this.fetchList()}},d=u,h=a("2877"),g=a("6544"),p=a.n(g),f=a("8336"),v=a("b0af"),m=a("99d9"),b=a("a523"),y=a("132d"),x=a("adda"),_=a("8860"),S=a("da13"),q=a("8270"),k=a("5d23"),O=a("0fd9b"),w=a("b974"),C=(a("a630"),a("c975"),a("d81d"),a("ac1f"),a("3ca3"),a("5319"),a("1276"),a("1f09"),a("c995")),j=a("24b2"),L=a("7560"),V=a("58df"),B=a("80d2"),I=Object(V["a"])(C["a"],j["a"],L["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(o["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(o["a"])(Object(o["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(o["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,a=t.split("@"),i=Object(r["a"])(a,2),s=i[0],n=i[1],o=function(){return e.genStructure(s)};return Array.from({length:n}).map(o)},genStructure:function(t){var e=[];t=t||this.type||"";var a=this.rootTypes[t]||"";if(t===a);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);a.indexOf(",")>-1?e=this.mapBones(a):a.indexOf("@")>-1?e=this.genBones(a):a&&e.push(this.genStructure(a))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(B["n"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}}),P=a("2fa4"),$=Object(h["a"])(d,i,s,!1,null,null,null);e["default"]=$.exports;p()($,{VBtn:f["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["c"],VContainer:b["a"],VIcon:y["a"],VImg:x["a"],VList:_["a"],VListItem:S["a"],VListItemAvatar:q["a"],VListItemContent:k["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VRow:O["a"],VSelect:w["a"],VSkeletonLoader:I,VSpacer:P["a"]})},"4fad":function(t,e,a){var i=a("23e7"),s=a("6f53").entries;i({target:"Object",stat:!0},{entries:function(t){return s(t)}})}}]);
//# sourceMappingURL=catalog-legacy.6736b3c9.js.map