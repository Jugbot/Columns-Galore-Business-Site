(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["coloroptions"],{"1b92":function(e,t,a){"use strict";t["a"]=[{id:"15013",available:!0,color:"#000000",name:"Landau Black"},{id:"39193",available:!0,color:"#808080",name:"Dark Gray"},{id:"15163",available:!0,color:"#c0c0c0",name:"Presido"},{id:"15043",available:!0,color:"#000080",name:"Shadow Blue"},{id:"15213",available:!0,color:"#8ec2fd",name:"Blue Mist"},{id:"15133",available:!1,color:"#a7ebfe",name:"Wedgewood Blue"},{id:"15063",available:!0,color:"#800000",name:"Burgundy"},{id:"15273",available:!0,color:"#bb0000",name:"Napa Red"},{id:"15113",available:!0,color:"#ff0000",name:"Firethorn Red"},{id:"25023",available:!0,color:"#004000",name:"Ranger Orchid Green"},{id:"15033",available:!0,color:"#febc81",name:"Saddle Tan"},{id:"15093",available:!0,color:"#fff2e6",name:"Light Buckskin"},{id:"15173",available:!0,color:"#fcae0c",name:"Camel"},{id:"15023",available:!0,color:"#2b1500",name:"Cordovan Brown"},{id:"15483",available:!0,color:"#8a4500",name:"Bluebird Brown"}]},"8adc":function(e,t,a){},cc20:function(e,t,a){"use strict";a("e260"),a("ddb0");var i=a("5530"),l=(a("8adc"),a("58df")),o=a("0789"),s=a("9d26"),n=a("a9ad"),c=a("4e82"),r=a("7560"),h=a("f2e7"),d=a("1c87"),p=a("af2b"),u=a("d9bd");t["a"]=Object(l["a"])(n["a"],p["a"],d["a"],r["a"],Object(c["a"])("chipGroup"),Object(h["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({"v-chip":!0},d["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(d["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach(([e,t])=>{this.$attrs.hasOwnProperty(e)&&Object(u["a"])(e,t,this)})},methods:{click(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter(){const e=[];return this.isActive&&e.push(this.$createElement(s["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(o["b"],e)},genClose(){return this.$createElement(s["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:e=>{e.stopPropagation(),e.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(e){const t=[this.genContent()];let{tag:a,data:l}=this.generateRouteLink();l.attrs=Object(i["a"])(Object(i["a"])({},l.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:l.attrs.tabindex}),l.directives.push({name:"show",value:this.active}),l=this.setBackgroundColor(this.color,l);const o=this.textColor||this.outlined&&this.color;return e(a,this.setTextColor(o,l),t)}})},e208:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("p",[a("span",{attrs:{align:"center"}},[a("h1",[e._v("SEM Brand Vinyl & Plastic Steering Column Paint")])])]),a("p",[e._v(" All Rebuilt Steering Columns come painted one of the following colors. ")]),a("p",[e._v(" This paint is designed for plastic which most steering column parts are but can be used to paint the metal parts also. They have been matched to most of the popular colors that the manufactures have been using on the interiors of their cars.The paint samples below may appear differently on different monitors please use color guide to get a general idea only. ")]),a("p",[e._v(" You may prefer to visit your local auto body supply store to see the exact colors. ")]),a("v-simple-table",[a("table",[a("tbody",[a("tr",[a("th",[e._v("Color Paint")]),a("th",[e._v("Part #")]),a("th",[e._v("Approximate Color")])]),e._l(e.colors,(function(t,i){var l=t.id,o=t.available,s=t.name,n=t.color;return a("tr",{key:i},[a("td",[e._v(e._s(s)+" "+e._s(o?"":"(unavailable)"))]),a("td",[e._v(e._s(l))]),a("td",[a("v-chip",{staticStyle:{width:"100%"},attrs:{color:n}})],1)])}))],2)])])],1)},l=[],o=a("1b92"),s={name:"coloroptions",metaInfo:{title:"Color Options"},data(){return{colors:o["a"]}}},n=s,c=a("2877"),r=a("6544"),h=a.n(r),d=a("cc20"),p=a("a523"),u=a("1f4f"),b=Object(c["a"])(n,i,l,!1,null,null,null);t["default"]=b.exports;h()(b,{VChip:d["a"],VContainer:p["a"],VSimpleTable:u["a"]})}}]);
//# sourceMappingURL=coloroptions.687504c9.js.map