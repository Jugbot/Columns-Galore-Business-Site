(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["partinformation"],{"0021":function(a,t,e){a.exports=e.p+"img/steering_column.86684872.svg"},"0add":function(a,t,e){"use strict";var r=e("1ca3"),s=e.n(r);s.a},"1ca3":function(a,t,e){},d722:function(a,t,e){"use strict";e("e6cf");const r="/api",s={getPart:a=>fetch(`${r}/part?id=${a}`),getCatalog:a=>fetch(`${r}/catalog?id=${a}`),postCatalog:a=>fetch(r+"/catalog",{method:"POST",body:a,headers:{"Content-Type":"application/json"}})};t["a"]=s},ff81:function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-container",[e("v-card",[e("v-img",{staticClass:"img-expand hidden-md-and-up",style:{"max-height":a.imageClicked?"500px":null},attrs:{src:a.part.ImagePath||a.fallbackImage},on:{click:function(t){a.imageClicked=!a.imageClicked}}}),e("v-card-title",[a._v(a._s(this.title))]),e("v-card-subtitle",[a._v(" Price: $"+a._s(this.part.Price)+", Core Charge: $"+a._s(this.part.CoreCharge)+" ")]),e("v-card-text",[e("v-img",{staticClass:"float-right hidden-sm-and-down",attrs:{src:a.part.ImagePath||a.fallbackImage,width:"200"}}),e("span",{directives:[{name:"show",rawName:"v-show",value:a.part.ProcessHTML,expression:"part.ProcessHTML"}]},[e("h3",[a._v("What gets done when we rebuild.")]),e("span",{domProps:{innerHTML:a._s(a.part.ProcessHTML)}})]),e("span",{directives:[{name:"show",rawName:"v-show",value:a.part.IncludesHTML,expression:"part.IncludesHTML"}]},[e("h3",[a._v("Comes complete with:")]),e("span",{domProps:{innerHTML:a._s(a.part.IncludesHTML)}})]),e("span",{directives:[{name:"show",rawName:"v-show",value:a.part.ExcludesHTML,expression:"part.ExcludesHTML"}]},[e("h3",[a._v("This column does not come with:")]),e("span",{domProps:{innerHTML:a._s(a.part.ExcludesHTML)}})])],1),e("v-card-actions",[e("v-btn",{attrs:{to:{path:"/quote",query:{id:a.part.CatalogId}},block:"",large:"",color:"primary"}},[e("b",[a._v("Get A Quote")])])],1)],1)],1)},s=[],n=e("d722"),i={name:"InventoryId",metaInfo:{title:"Part Information"},data(){return{imageClicked:!1,fallbackImage:e("0021"),part:{}}},computed:{title(){return[this.part.Year,this.part.Manufacturer,this.part.Model,this.part.Tilt].join(" ")}},created(){n["a"].getPart(this.$route.params.id).then(a=>{200===a.status&&a.json().then(a=>{console.log(a),this.part=a})})}},o=i,c=(e("0add"),e("2877")),d=e("6544"),l=e.n(d),p=e("8336"),h=e("b0af"),u=e("99d9"),m=e("a523"),g=e("adda"),v=Object(c["a"])(o,r,s,!1,null,null,null);t["default"]=v.exports;l()(v,{VBtn:p["a"],VCard:h["a"],VCardActions:u["a"],VCardSubtitle:u["b"],VCardText:u["c"],VCardTitle:u["d"],VContainer:m["a"],VImg:g["a"]})}}]);
//# sourceMappingURL=partinformation.974482ad.js.map