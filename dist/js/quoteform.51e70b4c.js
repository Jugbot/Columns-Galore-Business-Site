(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["quoteform"],{1681:function(t,e,a){},"1b92":function(t,e,a){"use strict";e["a"]=[{id:"15013",available:!0,color:"#000000",name:"Landau Black"},{id:"39193",available:!0,color:"#808080",name:"Dark Gray"},{id:"15163",available:!0,color:"#c0c0c0",name:"Presido"},{id:"15043",available:!0,color:"#000080",name:"Shadow Blue"},{id:"15213",available:!0,color:"#8ec2fd",name:"Blue Mist"},{id:"15133",available:!1,color:"#a7ebfe",name:"Wedgewood Blue"},{id:"15063",available:!0,color:"#800000",name:"Burgundy"},{id:"15273",available:!0,color:"#bb0000",name:"Napa Red"},{id:"15113",available:!0,color:"#ff0000",name:"Firethorn Red"},{id:"25023",available:!0,color:"#004000",name:"Ranger Orchid Green"},{id:"15033",available:!0,color:"#febc81",name:"Saddle Tan"},{id:"15093",available:!0,color:"#fff2e6",name:"Light Buckskin"},{id:"15173",available:!0,color:"#fcae0c",name:"Camel"},{id:"15023",available:!0,color:"#2b1500",name:"Cordovan Brown"},{id:"15483",available:!0,color:"#8a4500",name:"Bluebird Brown"}]},"2c64":function(t,e,a){},"3d86":function(t,e,a){},"4c7d":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-form",{ref:"form",attrs:{method:"POST",action:"mailto:quoteform@columnsgalore.com",enctype:"text/plain",target:"_blank",rel:"noopener noreferrer"}},[a("v-card",[a("v-card-title",[t._v("Your Vehicle Information")]),a("v-card-subtitle",[t._v(" Use the "),a("router-link",{attrs:{to:"catalog"}},[t._v("Catalog")]),t._v(" to automatically fill this information! ")],1),a("v-card-text",[a("v-row",[a("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{required:"",name:"year",label:"Year"},model:{value:t.part.Year,callback:function(e){t.$set(t.part,"Year",e)},expression:"part.Year"}}),a("v-text-field",{attrs:{required:"",name:"make",label:"Make"},model:{value:t.part.Manufacturer,callback:function(e){t.$set(t.part,"Manufacturer",e)},expression:"part.Manufacturer"}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{required:"",name:"model",label:"Model"},model:{value:t.part.Model,callback:function(e){t.$set(t.part,"Model",e)},expression:"part.Model"}}),a("v-select",{attrs:{items:t.colors,name:"color",label:"Paint Color","item-disabled":function(t){return!t.available},"item-text":function(t){return t.name},"item-value":function(t){return t.id}},scopedSlots:t._u([{key:"selection",fn:function(e){var a=e.item;return[t._v(" "+t._s(a.name)+" ")]}},{key:"item",fn:function(e){var i=e.item;return[a("v-chip",{staticStyle:{width:"100%"},attrs:{color:i.color}},[i.available?a("v-chip",{attrs:{disabled:"",small:"",color:"white"}},[t._v(t._s(i.name))]):a("v-chip",{attrs:{disabled:"",small:"",color:"grey","text-color":"white"}},[t._v("unavailable")])],1)]}}])})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[t.part.Price?a("v-text-field",{attrs:{outlined:"",name:"price",label:"Price",readonly:""},model:{value:t.part.Price,callback:function(e){t.$set(t.part,"Price",e)},expression:"part.Price"}}):t._e()],1),a("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[a("v-row",{attrs:{"no-gutters":"",wrap:""}},[a("v-col",[a("v-radio-group",{model:{value:t.part.Tilt,callback:function(e){t.$set(t.part,"Tilt",e)},expression:"part.Tilt"}},[a("v-radio",{attrs:{name:"wheel",label:"Tilt Wheel",value:"tilt"}}),a("v-radio",{attrs:{name:"wheel",label:"Fixed Wheel",value:"fixed"}})],1)],1),a("v-col",[a("v-radio-group",{model:{value:t.part.Shift,callback:function(e){t.$set(t.part,"Shift",e)},expression:"part.Shift"}},[a("v-radio",{attrs:{name:"shift",label:"Column Shift",value:"column"}}),a("v-radio",{attrs:{name:"shift",label:"Floor Shift",value:"floor"}})],1)],1),a("v-col",[a("v-radio-group",{model:{value:t.part.Transmission,callback:function(e){t.$set(t.part,"Transmission",e)},expression:"part.Transmission"}},[a("v-radio",{attrs:{name:"transmission",label:"Automatic",value:"automatic"}}),a("v-radio",{attrs:{name:"transmission",label:"Manual",value:"manual"}})],1)],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{"auto-grow":"",rows:"1",name:"aditionalinfo",label:"Additional Information"},model:{value:t.part.AdditionalInformation,callback:function(e){t.$set(t.part,"AdditionalInformation",e)},expression:"part.AdditionalInformation"}})],1)],1)],1)],1),a("v-card",{staticClass:"mt-3"},[a("v-card-title",[t._v("Personal Information")]),a("v-card-text",[a("v-row",{attrs:{wrap:"","no-gutters":""}},[a("v-text-field",{attrs:{required:"",name:"company",label:"Company"}}),a("v-text-field",{attrs:{required:"",name:"contact",label:"Contact"}}),a("v-text-field",{attrs:{required:"",name:"street",label:"Street"}}),a("v-text-field",{attrs:{required:"",name:"city",label:"City"}}),a("v-text-field",{attrs:{required:"",name:"state",label:"State"}}),a("v-text-field",{attrs:{required:"",name:"zip",label:"Zip"}}),a("v-text-field",{attrs:{required:"",name:"country",label:"Country"}}),a("v-select",{attrs:{required:"",items:[{text:"Email",value:"email"},{text:"Phone",value:"phone"}],name:"contactby",label:"Contact Preference"}}),a("v-text-field",{attrs:{required:"",name:"phone",label:"Phone"}}),a("v-text-field",{attrs:{required:"",name:"email",label:"Email"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"error"},on:{click:function(e){return t.$refs.form.reset()}}},[t._v("Reset")]),a("v-btn",{attrs:{type:"submit",color:"success"}},[t._v("Submit")]),a("v-spacer")],1)],1)],1)],1)},r=[],o=a("1b92"),s=a("d722"),l={name:"quote",metaInfo:{title:"Get A Quote"},data(){return{colors:o["a"],part:{CatalogId:null,Manufacturer:"",Model:"",Year:"",Shift:"",Transmission:"",Tilt:"",AdditionalOptions:null,Image:null,Price:"",CoreCharge:""}}},created(){"id"in this.$route.query&&(console.log(this.$route.query),s["a"].getCatalog(this.$route.query.id).then(t=>{200===t.status&&t.json().then(t=>{t.Tilt=t.Tilt.toLowerCase(),t.Shift=t.Shift.toLowerCase(),t.Transmission=t.Transmission.toLowerCase(),this.part=t})}))}},n=l,u=(a("51cf"),a("2877")),d=a("6544"),c=a.n(d),h=a("8336"),p=a("b0af"),m=a("99d9"),v=a("cc20"),f=a("62ad"),b=a("a523"),g=(a("2532"),a("5530")),w=a("58df"),y=a("7e2b"),C=a("3206"),x=Object(w["a"])(y["a"],Object(C["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:Object(g["a"])({novalidate:!0},this.attrs$),on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}}),V=(a("2c64"),a("ba87")),S=a("9d26"),I=a("c37a"),k=a("a9ad"),$=a("4e82"),_=(a("cca6"),a("5607")),B=a("2b0e"),O=B["a"].extend({name:"rippleable",directives:{ripple:_["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange(){}}}),T=a("7560"),A=(a("25f0"),a("8547")),G=Object(w["a"])(I["a"],O,A["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.disabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=I["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:t=>{t.preventDefault(),this.onChange()}},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur(){this.isFocused=!1},onChange(){if(this.isDisabled)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const a=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===a&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}}),j=a("80d2");const q=Object(w["a"])(y["a"],k["a"],O,Object($["a"])("radioGroup"),T["a"]);var F=q.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:()=>({isFocused:!1}),computed:{classes(){return Object(g["a"])(Object(g["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor(){return G.options.computed.computedColor.call(this)},computedIcon(){return this.isActive?this.onIcon:this.offIcon},computedId(){return I["a"].options.computed.computedId.call(this)},hasLabel:I["a"].options.computed.hasLabel,hasState(){return(this.radioGroup||{}).hasState},isDisabled(){return this.disabled||!!(this.radioGroup||{}).disabled},isReadonly(){return this.readonly||!!(this.radioGroup||{}).readonly},computedName(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-"+this.radioGroup._uid},rippleState(){return G.options.computed.rippleState.call(this)},validationState(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput(t){return G.options.methods.genInput.call(this,"radio",t)},genLabel(){return this.hasLabel?this.$createElement(V["a"],{on:{click:t=>{t.preventDefault(),this.onChange()}},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(j["k"])(this,"label")||this.label):null},genRadio(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(S["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(g["a"])({name:this.computedName,value:this.value},this.attrs$)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onChange(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:()=>{}},render(t){const e={staticClass:"v-radio",class:this.classes};return t("div",e,[this.genRadio(),this.genLabel()])}}),R=(a("ec29"),a("3d86"),a("604c"));const M=Object(w["a"])(A["a"],R["a"],I["a"]);var P=M.extend({name:"v-radio-group",provide(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes(){return Object(g["a"])(Object(g["a"])({},I["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},I["a"].options.methods.genDefaultSlot.call(this))},genInputSlot(){const t=I["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel(){const t=I["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:R["a"].options.methods.onClick}}),E=a("0fd9"),D=a("b974"),L=a("2fa4"),z=a("8654");a("1681");const H=Object(w["a"])(z["a"]);var N=H.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return Object(g["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},z["a"].options.computed.classes.call(this))},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"},genInput(){const t=z["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){z["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),Y=Object(u["a"])(n,i,r,!1,null,null,null);e["default"]=Y.exports;c()(Y,{VBtn:h["a"],VCard:p["a"],VCardActions:m["a"],VCardSubtitle:m["b"],VCardText:m["c"],VCardTitle:m["d"],VChip:v["a"],VCol:f["a"],VContainer:b["a"],VForm:x,VRadio:F,VRadioGroup:P,VRow:E["a"],VSelect:D["a"],VSpacer:L["a"],VTextField:z["a"],VTextarea:N})},"51cf":function(t,e,a){"use strict";var i=a("933a"),r=a.n(i);r.a},"933a":function(t,e,a){},ec29:function(t,e,a){}}]);
//# sourceMappingURL=quoteform.51e70b4c.js.map