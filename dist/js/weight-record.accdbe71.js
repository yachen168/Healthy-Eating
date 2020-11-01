(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["weight-record"],{1902:function(t,e,a){a("99af");var r=a("ded3"),i=a("4082");t.exports={functional:!0,render:function(t,e){var a=e._c,s=(e._v,e.data),n=e.children,c=void 0===n?[]:n,o=s.class,u=s.staticClass,d=s.style,l=s.staticStyle,f=s.attrs,h=void 0===f?{}:f,p=i(s,["class","staticClass","style","staticStyle","attrs"]);return a("svg",r({class:[o,u],style:[d,l],attrs:Object.assign({width:"80",height:"80",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h)},p),c.concat([a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M19 10a9 9 0 00-9 9v42a9 9 0 009 9h42a9 9 0 009-9V19a9 9 0 00-9-9H19zm6.177 6.335c-1.722.234-2.852 1.894-2.47 3.59l1.234 5.474c3.145-1.272 8.61-2.708 15.059-2.882V20a1 1 0 112 0v2.505c4.749.07 9.931.863 15.058 2.9l1.235-5.48c.383-1.696-.748-3.356-2.47-3.59C50.92 15.805 44.288 15 40 15s-10.92.805-14.823 1.335zM39 25.519c-6.331.18-11.634 1.654-14.39 2.851l.163.722c.363 1.609 1.958 2.63 3.582 2.341 2.714-.48 6.888-1.109 10.645-1.209V25.52zm2 4.705v-4.718c4.545.073 9.512.851 14.39 2.865l-.163.72c-.363 1.61-1.958 2.63-3.582 2.342-2.714-.48-6.888-1.109-10.645-1.209z",fill:"#407D60"}})]))}}},"20cc":function(t,e,a){"use strict";var r=a("2f9c"),i=a.n(r);i.a},"2f9c":function(t,e,a){},"32e6":function(t,e,a){"use strict";var r=a("5a0c"),i=a.n(r);e["a"]={isSearchedDateExpired:function(t){var e=i()().format("YYYY-MM-DD"),a=t||e;return!(a===e)}}},"3dd0":function(t,e,a){a("99af");var r=a("ded3"),i=a("4082");t.exports={functional:!0,render:function(t,e){var a=e._c,s=(e._v,e.data),n=e.children,c=void 0===n?[]:n,o=s.class,u=s.staticClass,d=s.style,l=s.staticStyle,f=s.attrs,h=void 0===f?{}:f,p=i(s,["class","staticClass","style","staticStyle","attrs"]);return a("svg",r({class:[o,u],style:[d,l],attrs:Object.assign({width:"18",height:"18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h)},p),c.concat([a("rect",{attrs:{x:"4",y:"8",width:"10",height:"2",rx:"1",fill:"#407D60"}}),a("circle",{attrs:{cx:"9",cy:"9",r:"8",stroke:"#407D60","stroke-width":"2"}})]))}}},"40b2":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weight-record"},[a("main",[a("BaseTitle",{attrs:{title:"體重紀錄"}}),a("FormCard",{attrs:{unit:"kg",quantity:t.$store.getters.weightOfSpecificDate.weight,canBeModified:t.canBeModified},on:{"minus:quantity":function(e){return t.$store.commit("updateWeightOfSpecificDate",-.1)},"add:quantity":function(e){return t.$store.commit("updateWeightOfSpecificDate",.1)}}},[a("WaterRecordIcon",{attrs:{slot:"image"},slot:"image"})],1),t.canBeModified?a("div",{staticClass:"button-wrapper"},[a("BaseButton",{attrs:{title:"取消",buttonStyle:"outline-default"},on:{click:function(e){return t.$router.push({name:"RecordingStates",params:{date:t.$route.params.date}})}}}),a("BaseButton",{attrs:{title:"確認",buttonStyle:"primary",disabledState:0===t.$store.getters.weightOfSpecificDate.weight},on:{click:t.confirmUpdateWeight}})],1):a("div",{staticClass:"button-wrapper"},[a("BaseButton",{attrs:{title:"回首頁",buttonStyle:"primary"},on:{click:function(e){return t.$router.push({name:"RecordingStates",params:{date:t.$route.params.date}})}}})],1)],1)])},i=[],s=a("5530"),n=(a("96cf"),a("1da1")),c=a("7759"),o=a("7e40"),u=a("6503"),d=a("1902"),l=a.n(d),f=a("32e6"),h={components:{BaseTitle:c["a"],BaseButton:o["a"],FormCard:u["a"],WaterRecordIcon:l.a},methods:{confirmUpdateWeight:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.$store.getters.weightIdOfSpecificDate,r=t.$store.getters.isWeightOfSpecificDateRecorded,!r){e.next=7;break}return e.next=5,t.$store.dispatch("updateUserWeight",{weightId:a,data:Object(s["a"])(Object(s["a"])({},t.$store.getters.weightOfSpecificDate),{},{_method:"put"})});case 5:e.next=9;break;case 7:return e.next=9,t.$store.dispatch("setUserWeight",{user_id:t.$store.getters.userProfile.id,remember_token:localStorage.getItem("token"),weight:t.$store.getters.weightOfSpecificDate.weight});case 9:t.$router.push({name:"RecordingStates"});case 10:case"end":return e.stop()}}),e)})))()}},computed:{canBeModified:function(){return!f["a"].isSearchedDateExpired(this.$route.params.date)}}},p=h,g=(a("c03f"),a("2877")),m=Object(g["a"])(p,r,i,!1,null,"213ca69f",null);e["default"]=m.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),i=a("5899"),s="["+i+"]",n=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),o=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(n,"")),2&t&&(a=a.replace(c,"")),a}};t.exports={start:o(1),end:o(2),trim:o(3)}},6503:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-card"},[t._t("image"),a("div",{staticClass:"record"},[t.canBeModified?a("MinusIcon",{staticClass:"icon",class:{disabled:0==t.quantity},on:{click:function(e){return t.$emit("minus:quantity")}}}):t._e(),a("h2",{staticClass:"quantity"},[t._v(" "+t._s(Math.round(100*t.quantity)/100)+" "+t._s(t.unit)+" ")]),t.canBeModified?a("AddIcon",{staticClass:"icon",on:{click:function(e){return t.$emit("add:quantity")}}}):t._e()],1),t._t("footer")],2)},i=[],s=(a("a9e3"),a("3dd0")),n=a.n(s),c=a("8f28"),o=a.n(c),u={components:{MinusIcon:n.a,AddIcon:o.a},props:{quantity:{type:[Number,String],required:!0},unit:{type:String,required:!0},canBeModified:{type:Boolean,required:!0}}},d=u,l=(a("20cc"),a("2877")),f=Object(l["a"])(d,r,i,!1,null,"d15ac65a",null);e["a"]=f.exports},"881e":function(t,e,a){},"8f28":function(t,e,a){a("99af");var r=a("ded3"),i=a("4082");t.exports={functional:!0,render:function(t,e){var a=e._c,s=(e._v,e.data),n=e.children,c=void 0===n?[]:n,o=s.class,u=s.staticClass,d=s.style,l=s.staticStyle,f=s.attrs,h=void 0===f?{}:f,p=i(s,["class","staticClass","style","staticStyle","attrs"]);return a("svg",r({class:[o,u],style:[d,l],attrs:Object.assign({width:"18",height:"18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h)},p),c.concat([a("rect",{attrs:{x:"4",y:"8",width:"10",height:"2",rx:"1",fill:"#407D60"}}),a("rect",{attrs:{x:"10",y:"4",width:"10",height:"2",rx:"1",transform:"rotate(90 10 4)",fill:"#407D60"}}),a("circle",{attrs:{cx:"9",cy:"9",r:"8",stroke:"#407D60","stroke-width":"2"}})]))}}},a9e3:function(t,e,a){"use strict";var r=a("83ab"),i=a("da84"),s=a("94ca"),n=a("6eeb"),c=a("5135"),o=a("c6b6"),u=a("7156"),d=a("c04e"),l=a("d039"),f=a("7c73"),h=a("241c").f,p=a("06cf").f,g=a("9bf2").f,m=a("58a8").trim,v="Number",w=i[v],y=w.prototype,S=o(f(y))==v,b=function(t){var e,a,r,i,s,n,c,o,u=d(t,!1);if("string"==typeof u&&u.length>2)if(u=m(u),e=u.charCodeAt(0),43===e||45===e){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(s=u.slice(2),n=s.length,c=0;c<n;c++)if(o=s.charCodeAt(c),o<48||o>i)return NaN;return parseInt(s,r)}return+u};if(s(v,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var x,I=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof I&&(S?l((function(){y.valueOf.call(a)})):o(a)!=v)?u(new w(b(e)),a,I):b(e)},_=r?h(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),$=0;_.length>$;$++)c(w,x=_[$])&&!c(I,x)&&g(I,x,p(w,x));I.prototype=y,y.constructor=I,n(i,v,I)}},c03f:function(t,e,a){"use strict";var r=a("881e"),i=a.n(r);i.a}}]);
//# sourceMappingURL=weight-record.accdbe71.js.map