(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["setting-weight"],{"2ddc":function(t,e,r){"use strict";var s=r("748d"),n=r.n(s);n.a},"748d":function(t,e,r){},e864:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"settingWeight-page"},[r("section",{staticClass:"main"},[r("BaseTitle",{attrs:{title:"請問您目前的體重？"}}),r("ValidationObserver",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var s=e.invalid;return[r("ValidationProvider",{attrs:{rules:{required:!0,regex:/^[1-9]{1}\d{0,2}(\.\d)?$/}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[r("div",{staticClass:"input-container"},[r("b-form-input",{staticClass:"form-input weight",attrs:{id:"weight",type:"number",min:"0",placeholder:"xx.x",value:t.register.weight},on:{input:function(e){t.register.weight=parseFloat(e)}}}),r("div",{staticClass:"icon"},[t._v("公斤/kg")])],1),r("p",{directives:[{name:"show",rawName:"v-show",value:s[0],expression:"errors[0]"}],class:{"font-error":s[0]}},[t._v(" "+t._s(s[0])+" ")])]}}],null,!0)}),r("BaseButton",{staticClass:"nextStep-button",attrs:{title:"下一步",buttonStyle:"primary",disabledState:s},on:{click:t.confirmWeight}})]}}])})],1),t._m(0)])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("div",{staticClass:"state"}),r("div",{staticClass:"state"})])}],i=(r("96cf"),r("1da1")),a=r("7759"),o=r("7e40"),c={components:{BaseTitle:a["a"],BaseButton:o["a"]},data:function(){return{register:{remember_token:localStorage.getItem("token"),user_id:"".concat(this.$store.getters.userProfile.id),weight:""}}},methods:{confirmWeight:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("setUserWeight",t.register);case 2:e.sent,t.$router.push({name:"SettingPlan"});case 4:case"end":return e.stop()}}),e)})))()}}},u=c,l=(r("2ddc"),r("2877")),d=Object(l["a"])(u,s,n,!1,null,"1f15ed81",null);e["default"]=d.exports}}]);
//# sourceMappingURL=setting-weight.0bbbad3c.js.map