(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["partinformation"],{"0021":function(t,a,n){t.exports=n.p+"img/steering_column.86684872.svg"},"0add":function(t,a,n){"use strict";var e=n("1ca3"),r=n.n(e);r.a},"1ca3":function(t,a,n){},d722:function(t,a,n){"use strict";n("99af"),n("d3b7");var e="http://localhost:3000/api";e="http://columnsgalore.com/api";var r={getPart:function(t){return fetch("".concat(e,"/part?id=").concat(t))},getCatalog:function(t){return fetch("".concat(e,"/catalog?id=").concat(t))},postCatalog:function(t){return fetch("".concat(e,"/catalog"),{method:"POST",body:t,headers:{"Content-Type":"application/json"}})}};a["a"]=r},ff81:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-container",[n("v-card",[n("v-img",{staticClass:"img-expand hidden-md-and-up",style:{"max-height":t.imageClicked?"500px":null},attrs:{src:t.part.Image||t.fallbackImage},on:{click:function(a){t.imageClicked=!t.imageClicked}}}),n("v-card-title",[t._v(t._s(this.title))]),n("v-card-subtitle",[t._v(" Price: $"+t._s(this.part.Price)+", Core Charge: $"+t._s(this.part.CoreCharge)+" ")]),n("v-card-text",[n("v-img",{staticClass:"float-right hidden-sm-and-down",attrs:{src:t.part.Image||t.fallbackImage,width:"200"}}),n("span",{domProps:{innerHTML:t._s(t.part.DescriptionHTML)}})],1),n("v-card-actions",[n("v-btn",{attrs:{to:{path:"/quote",query:{id:t.part.CatalogId}},block:"",large:"",color:"primary"}},[n("b",[t._v("Get A Quote")])])],1)],1)],1)},r=[],i=(n("a15b"),n("d722")),c={name:"InventoryId",metaInfo:{title:"Part Information"},data:function(){return{imageClicked:!1,fallbackImage:n("0021"),part:{}}},computed:{title:function(){return[this.part.Year,this.part.Manufacturer,this.part.Model,this.part.Tilt].join(" ")}},created:function(){var t=this;i["a"].getPart(this.$route.params.id).then((function(a){200===a.status&&a.json().then((function(a){console.log(a),t.part=a}))}))}},o=c,s=(n("0add"),n("2877")),d=n("6544"),l=n.n(d),u=n("8336"),p=n("b0af"),f=n("99d9"),g=n("a523"),h=n("adda"),m=Object(s["a"])(o,e,r,!1,null,null,null);a["default"]=m.exports;l()(m,{VBtn:u["a"],VCard:p["a"],VCardActions:f["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"],VContainer:g["a"],VImg:h["a"]})}}]);
//# sourceMappingURL=partinformation.ddcb26b5.js.map