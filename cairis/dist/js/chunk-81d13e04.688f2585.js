(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81d13e04"],{"26c0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"misusabilitymodelview"},[a("b-breadcrumb",{attrs:{items:t.bcItems}}),a("misusability-model")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"misusabilitymodel"},[""!=t.theMisusabilityCase?a("external-document-modal",{ref:"edDialog",attrs:{external_document:this.theSelectedObject}}):t._e(),a("b-card",{attrs:{"no-body":""}},[a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",[a("b-form-group",{attrs:{label:"Misusability Case","label-for":"misusabilityModelMisusabilityCase","label-cols":3}},[a("dimension-select",{ref:"misusabilityModelMisusabilityCase",attrs:{id:"misusabilityModelMisusabilityCase",dimension:"misusability_case"},on:{"dimension-select-change":t.misusabilityCaseSelected}})],1)],1),""!=t.theMisusabilityCase?a("b-col",[a("b-form-group",{attrs:{label:"Characteristic","label-form":"misusabilityModelCharacteristic","label-cols":4}},[a("dimension-select",{ref:"misusabilityModelCharacteristic",attrs:{id:"misusabilityModelCharacteristic",dimensionUrl:t.tcUrl,initial:"all",includeall:""},on:{"dimension-select-change":t.characteristicSelected}})],1)],1):t._e()],1)],1)],1),""!=t.theMisusabilityCase?a("graphical-model",{attrs:{api:t.misusabilityModelURI},on:{"graphical-model-url":t.nodeClicked}}):t._e()],1)},l=[],r=a("bc3a"),n=a.n(r),c=a("e342"),b=a("1864"),u=a("a5fd"),d=(a("636b"),a("61da")),m={computed:{misusabilityModelURI:function(){return""!=this.theMisusabilityCase?"/api/tasks/model/misusability/"+this.theMisusabilityCase+"/characteristic/"+this.theCharacteristic:""},tcUrl:function(){return""!=this.theMisusabilityCase?"/api/dimensions/table/task_characteristic/environment/"+this.theMisusabilityCase:""}},data:function(){return{theMisusabilityCase:"",theCharacteristic:"all",theSelectedObject:null}},components:{DimensionSelect:b["default"],ExternalDocumentModal:u["a"],GraphicalModel:c["a"]},methods:{nodeClicked:function(t){var e=this,a=t.slice(5).substring(0,t.slice(5).indexOf("/"));if(-1!=["grounds","warrants","backings","rebuttals"].indexOf(a)){var i="/api/concept_references"+t.slice(12);"backings"==a?i="/api/external_documents"+t.slice(13):"warrants"==a?i="/api/concept_references"+t.slice(13):"rebuttals"==a&&(i="/api/concept_references"+t.slice(14)),n.a.get(i,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(t){e.theSelectedObject=t.data,"backings"==a&&e.$refs.edDialog.show()}).catch(function(t){d["a"].$emit("operation-failure",t)})}},misusabilityCaseSelected:function(t){this.theMisusabilityCase=t,void 0!=this.$refs.misusabilityModelCharacteristic&&(this.theCharacteristic="all",this.$refs.misusabilityModelCharacteristic.selected=this.theCharacteristic)},characteristicSelected:function(t){this.theCharacteristic=t}}},h=m,f=a("2877"),p=Object(f["a"])(h,o,l,!1,null,null,null),x=p.exports,y={computed:{bcItems:function(){return[{text:"Home",to:{name:"home"}},{text:"Misusability Model",to:{name:"misusabilitymodel"}}]}},components:{MisusabilityModel:x}},j=y,g=Object(f["a"])(j,i,s,!1,null,null,null);e["default"]=g.exports},"636b":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"documentReferenceDialog",attrs:{"ok-only":"",title:t.dialogTitle}},[void 0!=t.objt?a("b-container",[a("b-form-group",{attrs:{label:"Name","label-class":"font-weight-bold text-md-left"}},[a("b-form-input",{attrs:{readonly:"",type:"text"},model:{value:t.objt.theName,callback:function(e){t.$set(t.objt,"theName",e)},expression:"objt.theName"}})],1),a("b-form-group",{attrs:{label:"External Document","label-class":"font-weigh-bold text-md-left"}},[a("b-form-input",{attrs:{readonly:"",type:"text"},model:{value:t.objt.theDocName,callback:function(e){t.$set(t.objt,"theDocName",e)},expression:"objt.theDocName"}})],1),a("b-form-group",{attrs:{label:"Contributor","label-class":"font-weight-bold text-md-left"}},[a("b-form-input",{attrs:{readonly:"",type:"text"},model:{value:t.objt.theContributor,callback:function(e){t.$set(t.objt,"theContributor",e)},expression:"objt.theContributor"}})],1),a("b-form-group",{attrs:{label:"Excerpt","label-class":"font-weight-bold text-md-left"}},[a("b-form-textarea",{attrs:{readonly:"",type:"text",rows:4,"max-rows":6},model:{value:t.objt.theExcerpt,callback:function(e){t.$set(t.objt,"theExcerpt",e)},expression:"objt.theExcerpt"}})],1)],1):t._e()],1)},s=[],o={name:"document-reference-modal",props:{document_reference:Object},data:function(){return{objt:this.document_reference}},watch:{document_reference:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" Document Reference"}},methods:{show:function(){this.$refs.documentReferenceDialog.show()},updateData:function(){this.objt=this.document_reference}}},l=o,r=a("2877"),n=Object(r["a"])(l,i,s,!1,null,null,null);e["a"]=n.exports},a5fd:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"externalDocumentDialog",attrs:{"ok-only":"",title:t.dialogTitle}},[void 0!=t.objt?a("b-container",[a("b-form-group",{attrs:{label:"Name","label-class":"font-weight-bold text-md-left"}},[a("b-form-input",{attrs:{type:"text",readonly:""},model:{value:t.objt.theName,callback:function(e){t.$set(t.objt,"theName",e)},expression:"objt.theName"}})],1),a("b-form-group",{attrs:{label:"Authors","label-class":"font-weight-bold text-md-left"}},[a("b-form-input",{attrs:{type:"text",readonly:""},model:{value:t.objt.theAuthors,callback:function(e){t.$set(t.objt,"theAuthors",e)},expression:"objt.theAuthors"}})],1),a("b-form-group",{attrs:{label:"Version","label-class":"font-weight-bold text-md-left"}},[a("b-form-input",{attrs:{type:"text",readonly:""},model:{value:t.objt.theVersion,callback:function(e){t.$set(t.objt,"theVersion",e)},expression:"objt.theVersion"}})],1),a("b-form-group",{attrs:{label:"Publication Date","label-class":"font-weight-bold text-md-left"}},[a("b-form-input",{attrs:{type:"text",readonly:""},model:{value:t.objt.thePublicationDate,callback:function(e){t.$set(t.objt,"thePublicationDate",e)},expression:"objt.thePublicationDate"}})],1),a("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-md-left"}},[a("b-form-textarea",{attrs:{type:"text",rows:4,"max-rows":6,readonly:""},model:{value:t.objt.theDescription,callback:function(e){t.$set(t.objt,"theDescription",e)},expression:"objt.theDescription"}})],1)],1):t._e()],1)},s=[],o={name:"external-document-modal",props:{external_document:Object},data:function(){return{objt:this.external_document}},watch:{external_document:"updateData"},computed:{dialogTitle:function(){return(void 0!=this.objt?this.objt.theName:"")+" External Document"}},methods:{show:function(){this.$refs.externalDocumentDialog.show()},updateData:function(){this.objt=this.external_document}}},l=o,r=a("2877"),n=Object(r["a"])(l,i,s,!1,null,null,null);e["a"]=n.exports}}]);
//# sourceMappingURL=chunk-81d13e04.688f2585.js.map