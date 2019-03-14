(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237730"],{faba:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"waDialog",attrs:{title:"Weakness Analysis"},on:{ok:t.onOk}},[void 0!=t.objt?a("b-container",{attrs:{fluid:""}},[a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{card:""}},[a("b-tab",{attrs:{title:"Threats",active:""}},[a("b-card",{attrs:{"bg-variant":"light"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-table",{attrs:{bordered:"",small:"",items:t.threats,fields:t.threatTableFields}})],1)],1)],1)],1),a("b-tab",{attrs:{title:"Vulnerabilities"}},[a("b-card",{attrs:{"bg-variant":"light"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-table",{attrs:{bordered:"",small:"",items:t.vulnerabilities,fields:t.vulTableFields}})],1)],1)],1)],1),a("b-tab",{attrs:{title:"Persona Impact"}},[a("b-card",{attrs:{"bg-variant":"light"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-table",{attrs:{bordered:"",small:"",items:t.personaImpact,fields:t.paTableFields}})],1)],1)],1)],1),a("b-tab",{attrs:{title:"Obstacles"}},[a("b-card",{attrs:{"bg-variant":"light"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-table",{attrs:{bordered:"",small:"",items:t.obstacles,fields:t.obsTableFields}})],1)],1)],1)],1)],1)],1)],1):t._e()],1)},n=[],r=a("bc3a"),i=a.n(r),o=a("61da"),l={name:"weakness-analysis-modal",props:{architecturalPattern:String,environment:String},data:function(){return{objt:void 0,threatTableFields:{theTarget:{label:"Target"},theComponent:{label:"Component"},theAssets:{label:"Assets"}},vulTableFields:{theTarget:{label:"Target"},theComponent:{label:"Component"},theAssets:{label:"Assets"}},paTableFields:{thePersonaName:{label:"Persona",sortable:!0},theImpactScore:{label:"Score",sortable:!0}},obsTableFields:{theGoalName:{label:"Goal",sortable:!0},theObstacleName:{label:"Obstacle",sortable:!0}}}},watch:{environment:"getAnalysis"},computed:{threats:function(){return void 0!=this.objt?this.objt.theThreatWeaknesses.map(function(t){return{theComponent:t.theComponents.join(),theTarget:t.theTargetName,theAssets:t.theAssets.join()}}):[]},vulnerabilities:function(){return void 0!=this.objt?this.objt.theVulnerabilityWeaknesses.map(function(t){return{theComponent:t.theComponents.join(),theTarget:t.theTargetName,theAssets:t.theAssets.join()}}):[]},personaImpact:function(){return void 0!=this.objt?this.objt.thePersonaImpact:[]},obstacles:function(){return void 0!=this.objt?this.objt.theCandidateGoals:[]}},methods:{show:function(){this.$refs.waDialog.show()},getAnalysis:function(){var t=this;if(""!=this.architecturalPattern&&""!=this.environment){var e=this.$store.state.url+"/api/architectural_patterns/name/"+this.architecturalPattern+"/environment/"+this.environment+"/weakness_analysis";i.a.get(e,{params:{session_id:this.$store.state.session}}).then(function(e){t.objt=e.data}).catch(function(t){o["a"].$emit("operation-failure",t)})}},onOk:function(){this.$emit("weakness-analysis-confirm"),this.$refs.waDialog.hide()}}},b=l,h=a("2877"),c=Object(h["a"])(b,s,n,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d237730.42c01277.js.map