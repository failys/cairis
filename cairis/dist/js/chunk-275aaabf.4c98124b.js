(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-275aaabf","chunk-f72b1efa","chunk-5edcbcf4","chunk-2d0ac01b"],{1864:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-form-select",{ref:"dimensionSelect",attrs:{id:"dimensionSelect",disabled:t.is_disabled,size:t.display_size,options:t.filteredItems},on:{change:function(e){return t.onChange(e)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})},o=[],a=(i("6762"),i("2fdb"),i("cadf"),i("551c"),i("f751"),i("097d"),i("bc3a")),s=i.n(a),r=i("61da"),c={name:"dimension-select",props:{dimension:{type:String},dimensionUrl:{type:String,default:function(){return""}},existing:{type:Array,default:function(){return[]}},environment:{type:String,default:function(){return""}},includeall:{type:Boolean,default:function(){return!1}},initial:{type:String,default:function(){return""}},display_size:{type:String,default:function(){return"md"}},is_disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{items:[],selected:this.initial}},computed:{filteredItems:function(){var t=this;return this.items.length>0?this.items.filter(function(e){if(!t.existing.includes(e))return e}):[]}},watch:{dimension:"updateSelector",dimensionUrl:"updateSelector",existing:"updateSelector",environment:"updateSelector",initial:"updateSelector"},methods:{onChange:function(t){this.$emit("dimension-select-change",t)},updateSelector:function(){var t=this;if((void 0!=this.dimension||""!=this.dimensionUrl)&&""!=this.$store.state.session){var e=this.dimensionUrl;0==this.dimensionUrl.length&&(e="/api/dimensions/table/"+this.dimension,""!=this.environment&&(e+="/environment/"+this.environment));var i=this;s.a.get(e,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(e){i.items=e.data,i.items=i.items.length>0?i.items.filter(function(t){if(!i.existing.includes(t))return t}):[],1==i.items.length&&i.$emit("dimension-select-change",i.items[0]),i.includeall&&("dfd_filter"==i.dimension?i.items.unshift("None"):"persona_characteristic"==i.dimension?i.items.unshift("All"):i.items.unshift("all")),t.selected=t.initial}).catch(function(t){r["a"].$emit("operation-failure","Error updating selector:"+t)})}}},mounted:function(){void 0==this.dimension&&""==this.dimensionUrl||this.updateSelector()}},l=c,m=i("2877"),u=Object(m["a"])(l,n,o,!1,null,null,null);e["default"]=u.exports},"2fdb":function(t,e,i){"use strict";var n=i("5ca1"),o=i("d2c8"),a="includes";n(n.P+n.F*i("5147")(a),"String",{includes:function(t){return!!~o(this,t,a).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"3f53":function(t,e,i){"use strict";var n=i("bc3a"),o=i.n(n),a=i("61da");e["a"]={methods:{commitObject:function(t,e,i,n,s){var r=this;"undefined"==typeof n&&(n={post:{},put:{}}),"Update"==this.commitLabel?o.a.put(t,{session_id:this.$store.state.session,object:this.objt}).then(function(t){a["a"].$emit("operation-success",t.data.message),void 0!=s?r.$router.push({name:i,params:{dimension:s}}):r.$router.push({name:i})}).catch(function(t){a["a"].$emit("operation-failure",t)}):o.a.post(e,{session_id:this.$store.state.session,object:this.objt},{params:n["post"]}).then(function(t){a["a"].$emit("operation-success",t.data.message),void 0!=s?r.$router.push({name:i,params:{dimension:s}}):r.$router.push({name:i})}).catch(function(t){a["a"].$emit("operation-failure",t)})}},postImage:function(t){var e="/api/upload/image?session_id="+this.$store.state.session;o.a.post(e,t).then(function(t){a["a"].$emit("operation-success",t.data.message)}).catch(function(t){a["a"].$emit("operation-failure",t)})}}},5147:function(t,e,i){var n=i("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[n]=!1,!"/./"[t](e)}catch(o){}}return!0}},"56ac":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"requirementview"},[i("b-breadcrumb",{attrs:{items:t.bcItems}}),i("requirement",{attrs:{object:this.objt,domain:this.domain,label:this.commitLabel},on:{"requirement-commit":t.commitRequirement}})],1)},o=[],a=(i("7f7f"),i("cadf"),i("551c"),i("f751"),i("097d"),i("bc3a")),s=i.n(a),r=i("3f53"),c=i("fd22"),l=i("4360"),m=i("61da"),u={props:{objectName:String,domain:Object},mixins:[r["a"]],computed:{bcItems:function(){return[{text:"Home",to:{name:"home"}},{text:"Requirements",to:{name:"objectsview",params:{dimension:"requirement"}}},{text:this.objt.theName,to:{name:"requirement"}}]}},components:{Requirement:c["default"]},data:function(){return{objt:{theName:"",theLabel:"-1",theDescription:"",thePriority:"1",theOriginator:"",theFitCriterion:"",theRationale:"",theType:"Functional",theDomain:""},commitLabel:"Create"}},beforeRouteEnter:function(t,e,i){if("New requirement"==t.params.objectName)i();else{var n="/api/requirements/name/"+t.params.objectName;s.a.get(n,{baseURL:l["a"].state.url,params:{session_id:l["a"].state.session}}).then(function(e){i(function(i){i.commitLabel="Update";var n=e.data;n["theDomain"]=t.params.domain.name,i.objt=n,i.selectedDomain=t.params.domain.type})}).catch(function(t){m["a"].$emit("operation-failure",t)})}},methods:{commitRequirement:function(t){this.objt=t.object;var e=this.$store.state.url+"/api/requirements/name/"+this.objectName+"?session_id="+this.$store.state.session,i=this.$store.state.url+"/api/requirements";this.commitObject(e,i,"objectsview",t.parameters,"requirement")}}},d=u,b=i("2877"),h=Object(b["a"])(d,n,o,!1,null,null,null);e["default"]=h.exports},6762:function(t,e,i){"use strict";var n=i("5ca1"),o=i("c366")(!0);n(n.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")("includes")},"7f7f":function(t,e,i){var n=i("86cc").f,o=Function.prototype,a=/^\s*function ([^ (]*)/,s="name";s in o||i("9e1e")&&n(o,s,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},"94cc":function(t,e,i){"use strict";var n=i("bc3a"),o=i.n(n),a=i("61da");e["a"]={methods:{commitObject:function(t,e,i,n){var s=this;"Update"==this.commitLabel?o.a.put(t,{session_id:this.$store.state.session,object:this.objt}).then(function(t){a["a"].$emit("operation-success",t.data.message),void 0!=n?s.$router.push({name:i,params:{dimension:n}}):s.$router.push({name:i})}).catch(function(t){a["a"].$emit("operation-failure",t)}):o.a.post(e,{session_id:this.$store.state.session,object:this.objt}).then(function(t){a["a"].$emit("operation-success",t.data.message),void 0!=n?s.$router.push({name:i,params:{dimension:n}}):s.$router.push({name:i})}).catch(function(t){a["a"].$emit("operation-failure",t)})}}}},aae3:function(t,e,i){var n=i("d3f4"),o=i("2d95"),a=i("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==o(t))}},d2c8:function(t,e,i){var n=i("aae3"),o=i("be13");t.exports=function(t,e,i){if(n(e))throw TypeError("String#"+i+" doesn't accept regex!");return String(o(t))}},fd22:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"requirement"},[t.errors.length?i("p",[i("b",[t._v("Please correct the following error(s):")]),i("ul",t._l(t.errors,function(e){return i("li",{key:e},[t._v(t._s(e))])}),0)]):t._e(),i("b-form",[i("b-container",{attrs:{fluid:""}},[i("b-card",{attrs:{"bg-variant":"light"}},[i("b-row",[i("b-col",{attrs:{md:"6"}},[i("b-form-group",{attrs:{label:"Name","label-class":"font-weight-bold text-md-left","label-cols":"2","label-for":"theNameInput"}},[i("b-form-input",{attrs:{id:"theNameInput",type:"text",required:""},model:{value:t.objt.theName,callback:function(e){t.$set(t.objt,"theName",e)},expression:"objt.theName"}})],1)],1),i("b-col",{attrs:{md:"6"}},[i("b-form-group",{attrs:{label:"Type","label-class":"font-weight-bold text-md-left","label-cols":"2","label-for":"theType"}},[i("b-form-select",{staticClass:"mb-3",attrs:{id:"theTypeInput",options:t.reqTypes,required:""},model:{value:t.objt.theType,callback:function(e){t.$set(t.objt,"theType",e)},expression:"objt.theType"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"4"}},[i("b-form-group",{attrs:{label:"Domain","label-class":"font-weight-bold text-md-left","label-cols":"3"}},[i("b-form-radio-group",{model:{value:t.selectedDomain,callback:function(e){t.selectedDomain=e},expression:"selectedDomain"}},[i("b-form-radio",{attrs:{value:"asset"}},[t._v("Asset")]),i("b-form-radio",{attrs:{value:"environment"}},[t._v("Environment")])],1)],1)],1),i("b-col",{attrs:{md:"8"}},[i("dimension-select",{attrs:{id:"reqDomains",dimension:t.selectedDomain,initial:t.objt.theDomain},on:{"dimension-select-change":t.domainSelected}})],1)],1)],1),i("b-card",{attrs:{"bg-variant":"light"}},[i("b-row",[i("b-col",{attrs:{md:"6"}},[i("b-form-group",{attrs:{label:"Specification","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theDescriptionInput"}},[i("b-form-textarea",{attrs:{id:"theDescriptionInput",type:"text",rows:4,"max-rows":8,required:""},model:{value:t.objt.theDescription,callback:function(e){t.$set(t.objt,"theDescription",e)},expression:"objt.theDescription"}})],1)],1),i("b-col",{attrs:{md:"6"}},[i("b-form-group",{attrs:{label:"Fit Criterion","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theFitCriterionInput"}},[i("b-form-textarea",{attrs:{id:"theFitCriterionInput",type:"text",rows:4,"max-rows":8,required:""},model:{value:t.objt.theFitCriterion,callback:function(e){t.$set(t.objt,"theFitCriterion",e)},expression:"objt.theFitCriterion"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"5"}},[i("b-form-group",{attrs:{label:"Priority","label-class":"font-weight-bold text-md-left","label-cols":"2"}},[i("b-form-radio-group",{model:{value:t.objt.thePriority,callback:function(e){t.$set(t.objt,"thePriority",e)},expression:"objt.thePriority"}},[i("b-form-radio",{attrs:{value:"1"}},[t._v("1")]),i("b-form-radio",{attrs:{value:"2"}},[t._v("2")]),i("b-form-radio",{attrs:{value:"3"}},[t._v("3")])],1)],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Rationale","label-class":"font-weight-bold text-md-left","label-cols":"1","label-for":"theRationaleInput"}},[i("b-form-textarea",{attrs:{id:"theRationaleInput",type:"text",rows:2,"max-rows":4,required:""},model:{value:t.objt.theRationale,callback:function(e){t.$set(t.objt,"theRationale",e)},expression:"objt.theRationale"}})],1)],1)],1),i("b-row",[i("b-col",{attrs:{md:"12"}},[i("b-form-group",{attrs:{label:"Originator","label-class":"font-weight-bold text-md-left","label-cols":"1","label-for":"theOriginatorInput"}},[i("b-form-input",{attrs:{id:"theOriginatorInput",type:"text",required:""},model:{value:t.objt.theOriginator,callback:function(e){t.$set(t.objt,"theOriginator",e)},expression:"objt.theOriginator"}})],1)],1)],1)],1)],1),i("b-container",{attrs:{fluid:""}},[i("b-form-row",[i("b-col",{attrs:{md:"4","offset-md":"5"}},[i("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:t.onCommit}},[t._v(t._s(t.commitLabel))]),i("b-button",{attrs:{type:"submit",variant:"secondary"},on:{click:t.onCancel}},[t._v("Cancel")])],1)],1)],1)],1)],1)},o=[],a=i("94cc"),s=i("1864"),r={props:{object:Object,label:String,domain:Object},watch:{object:"setObject"},components:{DimensionSelect:s["default"]},mixins:[a["a"]],data:function(){return{objt:this.object,selectedDomain:this.domain.type,commitLabel:this.label,errors:[],reqPriorities:["1","2","3"],reqTypes:["Functional","Data","Look and Feel","Usability","Performance","Operational","Maintainability","Portability","Security","Cultural and Political","Legal","Privacy"],axiosParameters:{post:{},put:{}}}},methods:{checkForm:function(){return this.errors=[],0==this.objt.theName.length&&this.errors.push("Name is required"),0==this.objt.theDescription.length&&this.errors.push("Type is required"),!this.errors.length},setObject:function(){this.objt=this.object,this.commitLabel=this.label},onCommit:function(t){t.preventDefault(),this.checkForm()&&this.$emit("object-commit",{object:this.objt,parameters:this.axiosParameters})},onCancel:function(t){t.preventDefault(),this.$router.push({name:"objectsview",params:{dimension:"requirement"}})},domainSelected:function(t){this.objt.theDomain=t,"asset"==this.selectedDomain?this.axiosParameters={post:{asset:t},put:{}}:this.axiosParameters={post:{environment:t},put:{}}}}},c=r,l=i("2877"),m=Object(l["a"])(c,n,o,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-275aaabf.4c98124b.js.map