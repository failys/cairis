(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22975e"],{de18:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"objectsview"},[s("objects",{attrs:{breadCrumbItems:e.bcItems,fieldList:e.objectsFields,getUrl:e.theGetUrl,delUrl:e.theDelUrl,dimName:e.dimension}})],1)},l=[],i=(s("cadf"),s("551c"),s("f751"),s("097d"),s("0d49")),o={asset:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Assets",to:{name:"objectsview",params:{dimension:"asset"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Asset",sortable:!0},theType:{label:"Type",sortable:!0},postaction:{label:""}},theGetUrl:"/api/assets/summary",theDelUrl:"/api/assets/name/"},attacker:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Attackers",to:{name:"objectsview",params:{dimension:"attacker"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Attacker",sortable:!0},theDescription:{label:"Description"}},theGetUrl:"/api/attackers/summary",theDelUrl:"/api/attackers/name/"},role:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Roles",to:{name:"objectsview",params:{dimension:"role"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Role",sortable:!0},theType:{label:"Type",sortable:!0},theDescription:{label:"Description"},pretaction:{label:""}},theGetUrl:"/api/roles",theDelUrl:"/api/roles/name/"},threat:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Threats",to:{name:"objectsview",params:{dimension:"threat"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theType:{label:"Type",sortable:!0}},theGetUrl:"/api/threats/summary",theDelUrl:"/api/threats/name/"},vulnerability:{bcItems:[{text:"Home",to:{name:"home"}},{text:"Vulnerabilities",to:{name:"objectsview",params:{dimension:"vulnerability"}}}],objectsFields:{objectsactions:{label:""},theName:{label:"Name",sortable:!0},theType:{label:"Type",sortable:!0},pretaction:{label:""}},theGetUrl:"/api/vulnerabilities",theDelUrl:"/api/vulnerabilities/name/"}},r=o,n={props:{dimension:String},watch:{dimension:"setData"},components:{Objects:i["a"]},data:function(){return{bcItems:[],items:[],objectsFields:{},theGetUrl:"",theDelUrl:""}},methods:{setData:function(){var e=r[this.dimension];this.bcItems=e.bcItems,this.objectsFields=e.objectsFields,this.theGetUrl=e.theGetUrl,this.theDelUrl=e.theDelUrl}},mounted:function(){this.setData()}},m=n,b=s("2877"),c=Object(b["a"])(m,a,l,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d22975e.7f4e4a79.js.map