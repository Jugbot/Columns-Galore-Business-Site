(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["partinformation"],{"0021":function(t,a,e){t.exports=e.p+"img/steering_column.86684872.svg"},"0add":function(t,a,e){"use strict";var r=e("1ca3"),s=e.n(r);s.a},"1ca3":function(t,a,e){},d722:function(t,a,e){"use strict";e("e6cf");const r="/api",s={getPart:t=>fetch(`${r}/part?id=${t}`),getCatalog:t=>fetch(`${r}/catalog?id=${t}`),postCatalog:t=>fetch(r+"/catalog",{method:"POST",body:t,headers:{"Content-Type":"application/json"}})};a["a"]=s},ff81:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-card",[e("v-img",{staticClass:"img-expand",style:{"max-height":t.imageClicked?"none":null},attrs:{src:t.part.ImagePath,"lazy-src":t.fallbackImage},on:{click:function(a){t.imageClicked=!t.imageClicked}}}),e("v-card-title",[t._v(" "+t._s(this.title)+" ")]),e("v-card-subtitle",[t._v(" Price: $"+t._s(this.part.Price)+", Core Charge: $"+t._s(this.part.CoreCharge)+" ")]),e("v-card-text",[e("span",{directives:[{name:"show",rawName:"v-show",value:t.part.ProcessHTML,expression:"part.ProcessHTML"}]},[e("h3",[t._v("What gets done when we rebuild.")]),e("span",{domProps:{innerHTML:t._s(t.part.ProcessHTML)}})]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.part.IncludesHTML,expression:"part.IncludesHTML"}]},[e("h3",[t._v("Comes complete with:")]),e("span",{domProps:{innerHTML:t._s(t.part.IncludesHTML)}})]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.part.ExcludesHTML,expression:"part.ExcludesHTML"}]},[e("h3",[t._v("This column does not come with:")]),e("span",{domProps:{innerHTML:t._s(t.part.ExcludesHTML)}})])]),e("v-card-actions",[e("v-btn",{attrs:{to:{path:"/quote",query:{id:t.part.CatalogId}},block:"",large:"",color:"primary"}},[e("b",[t._v("Get A Quote")])])],1)],1)],1)},s=[],n=e("d722"),i={name:"InventoryId",metaInfo:{title:"Part Information"},data(){return{imageClicked:!1,fallbackImage:e("0021"),part:{}}},computed:{title(){return["Part #"+this.part.CatalogId,this.part.Year,this.part.Manufacturer,this.part.Model,this.part.Tilt,this.part.AdditionalOptions].join(" ")}},created(){n["a"].getPart(this.$route.params.id).then(t=>{200===t.status&&t.json().then(t=>{console.log(t),this.part=t})})}},o=i,c=(e("0add"),e("2877")),d=e("6544"),l=e.n(d),p=e("8336"),u=e("b0af"),h=e("99d9"),m=e("a523"),g=e("adda"),v=Object(c["a"])(o,r,s,!1,null,null,null);a["default"]=v.exports;l()(v,{VBtn:p["a"],VCard:u["a"],VCardActions:h["a"],VCardSubtitle:h["b"],VCardText:h["c"],VCardTitle:h["d"],VContainer:m["a"],VImg:g["a"]})}}]);
//# sourceMappingURL=partinformation.2dbc68fe.js.map