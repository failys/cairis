(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bea572d","chunk-f72b1efa","chunk-2d0ac01b"],{"0184":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-modal",{ref:"associationDialog",attrs:{title:this.dialogTitle},on:{ok:t.onOk}},[t.errors.length?i("p",[i("b",[t._v("Please correct the following error(s):")]),i("ul",t._l(t.errors,function(e){return i("li",{key:e},[t._v(t._s(e))])}),0)]):t._e(),i("b-card",[i("b-container",{attrs:{fluid:""}},[i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Asset","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theHeadAssetSelect"}},[i("dimension-select",{ref:"theHeadAssetSelect",attrs:{id:"theHeadAssetSelect",dimension:"template_asset",initial:t.association.association.theHeadAsset},on:{"dimension-select-change":t.headAssetSelected}})],1)],1)],1),t.isArchitecturalPattern?i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Navigation","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theHeadNavSelect"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theHeadNavSelect",options:t.navValues,required:""},model:{value:t.association.association.theHeadNav,callback:function(e){t.$set(t.association.association,"theHeadNav",e)},expression:"association.association.theHeadNav"}})],1)],1)],1):t._e(),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Adornment","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theHeadAdornmentSelect"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theHeadAdornmentSelect",options:t.typeValues,required:""},model:{value:t.association.association.theHeadAdornment,callback:function(e){t.$set(t.association.association,"theHeadAdornment",e)},expression:"association.association.theHeadAdornment"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Nry","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theHeadNrySelect"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theHeadNrySelect",options:t.nryValues,required:""},model:{value:t.association.association.theHeadNry,callback:function(e){t.$set(t.association.association,"theHeadNry",e)},expression:"association.association.theHeadNry"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Role","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theHeadRoleInput"}},[i("b-form-input",{attrs:{id:"theHeadRoleInput"},model:{value:t.association.association.theHeadRole,callback:function(e){t.$set(t.association.association,"theHeadRole",e)},expression:"association.association.theHeadRole"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Role","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theTailRoleInput"}},[i("b-form-input",{attrs:{id:"theTailRoleInput"},model:{value:t.association.association.theTailRole,callback:function(e){t.$set(t.association.association,"theTailRole",e)},expression:"association.association.theTailRole"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Nry","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theTailNryInput"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theTailNryInput",options:t.nryValues,required:""},model:{value:t.association.association.theTailNry,callback:function(e){t.$set(t.association.association,"theTailNry",e)},expression:"association.association.theTailNry"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Adornment","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theTailAdornmentInput"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theTailAdornmentInput",options:t.typeValues,required:""},model:{value:t.association.association.theTailAdornment,callback:function(e){t.$set(t.association.association,"theTailAdornment",e)},expression:"association.association.theTailAdornment"}})],1)],1)],1),t.isArchitecturalPattern?i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Navigation","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theTailNavInput"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theTailNavInput",options:t.navValues,required:""},model:{value:t.association.association.theTailNav,callback:function(e){t.$set(t.association.association,"theTailNav",e)},expression:"association.association.theTailNav"}})],1)],1)],1):t._e(),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Tail","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theTailAssetSelect"}},[i("dimension-select",{ref:"theTailAssetSelect",attrs:{id:"theTailAssetSelect",dimension:"template_asset",initial:this.association.association.theTailAsset},on:{"dimension-select-change":t.tailAssetSelected}})],1)],1)],1)],1)],1)],1)},a=[],o=i("1864"),n={name:"component-association-modal",props:{componentAssociation:Object,isArchitecturalPattern:{type:Boolean,default:!0}},data:function(){return{association:this.componentAssociation,errors:[],navValues:["0","1"],typeValues:["Inheritance","Association","Aggregation","Composition","Dependency"],nryValues:["1","*","1..*"]}},components:{DimensionSelect:o["default"]},computed:{dialogTitle:function(){return(this.componentAssociation.update?"Update":"Add")+" Component association"}},methods:{checkForm:function(){return this.errors=[],0==this.association.association.theHeadAsset.length&&this.errors.push("Head Asset is required"),0==this.association.association.theHeadAdornment.length&&this.errors.push("Head Adornment is required"),0==this.association.association.theHeadNry.length&&this.errors.push("Head Multiplicity is required"),0==this.association.association.theTailNry.length&&this.errors.push("Tail Multiplicity is required"),0==this.association.association.theTailAdornment.length&&this.errors.push("Tail Adornment is required"),0==this.association.association.theTailAsset.length&&this.errors.push("Tail Asset is required"),!this.errors.length},show:function(){this.$refs.associationDialog.show()},headAssetSelected:function(t){this.association.association.theHeadAsset=t},tailAssetSelected:function(t){this.association.association.theTailAsset=t},onOk:function(t){this.checkForm()?(this.$emit("association-update",{association:this.association.association,update:this.componentAssociation.update,index:this.componentAssociation.update?this.association.index:-1}),this.$refs.associationDialog.hide()):t.preventDefault()}}},l=n,r=i("2877"),c=Object(r["a"])(l,s,a,!1,null,null,null);e["default"]=c.exports},1864:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-form-select",{ref:"dimensionSelect",attrs:{id:"dimensionSelect",disabled:t.is_disabled,size:t.display_size,options:t.filteredItems},on:{change:function(e){return t.onChange(e)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})},a=[],o=(i("6762"),i("2fdb"),i("bc3a")),n=i.n(o),l=i("61da"),r={name:"dimension-select",props:{dimension:{type:String},dimensionUrl:{type:String,default:function(){return""}},existing:{type:Array,default:function(){return[]}},environment:{type:String,default:function(){return""}},includeall:{type:Boolean,default:function(){return!1}},initial:{type:String,default:function(){return""}},display_size:{type:String,default:function(){return"md"}},is_disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{items:[],selected:this.initial}},computed:{filteredItems:function(){var t=this;return this.items.length>0?this.items.filter(function(e){if(!t.existing.includes(e))return e}):[]}},watch:{dimension:"updateSelector",dimensionUrl:"updateSelector",existing:"updateSelector",environment:"updateSelector",initial:"updateSelector"},methods:{onChange:function(t){this.$emit("dimension-select-change",t)},updateSelector:function(){var t=this;if((void 0!=this.dimension||""!=this.dimensionUrl)&&""!=this.$store.state.session){var e=this.dimensionUrl;0==this.dimensionUrl.length&&(e="/api/dimensions/table/"+this.dimension,""!=this.environment&&(e+="/environment/"+this.environment));var i=this;n.a.get(e,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(e){i.items=e.data,i.items=i.items.length>0?i.items.filter(function(t){if(!i.existing.includes(t))return t}):[],1==i.items.length&&i.$emit("dimension-select-change",i.items[0]),i.includeall&&("dfd_filter"==i.dimension?i.items.unshift("None"):"persona_characteristic"==i.dimension?i.items.unshift("All"):i.items.unshift("all")),t.selected=t.initial}).catch(function(t){l["a"].$emit("operation-failure","Error updating selector:"+t)})}}},mounted:function(){void 0==this.dimension&&""==this.dimensionUrl||this.updateSelector()}},c=r,d=i("2877"),u=Object(d["a"])(c,s,a,!1,null,null,null);e["default"]=u.exports},"2fdb":function(t,e,i){"use strict";var s=i("5ca1"),a=i("d2c8"),o="includes";s(s.P+s.F*i("5147")(o),"String",{includes:function(t){return!!~a(this,t,o).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,i){var s=i("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[s]=!1,!"/./"[t](e)}catch(a){}}return!0}},6762:function(t,e,i){"use strict";var s=i("5ca1"),a=i("c366")(!0);s(s.P,"Array",{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")("includes")},aae3:function(t,e,i){var s=i("d3f4"),a=i("2d95"),o=i("2b4c")("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},d2c8:function(t,e,i){var s=i("aae3"),a=i("be13");t.exports=function(t,e,i){if(s(e))throw TypeError("String#"+i+" doesn't accept regex!");return String(a(t))}}}]);
//# sourceMappingURL=chunk-5bea572d.b4b34ba3.js.map