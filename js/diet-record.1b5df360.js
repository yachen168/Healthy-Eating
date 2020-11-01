(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["diet-record"],{"0163":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-table",{attrs:{stacked:"",small:"",fields:t.fields,items:t.items,responsive:"sm"},scopedSlots:t._u([{key:"cell()",fn:function(e){return[a("div",{staticClass:"recording"},[t.canBeModified?a("MinusIcon",{staticClass:"icon",class:{disabled:e.value===t.min},on:{click:function(a){return t.updateQuantity(e,-1)}}}):t._e(),a("span",{staticClass:"quantity"},[t._v(t._s(e.value>t.min?"water"===e.field.key?e.value.toFixed(2):e.value.toFixed(1):e.value))]),t.canBeModified?a("AddIcon",{staticClass:"icon",class:{disabled:e.value===t.max},on:{click:function(a){return t.updateQuantity(e,1)}}}):t._e(),a("span",{staticClass:"unit"},[t._v(t._s("dairy"===e.field.key?"杯":"water"===e.field.key?"公升":"份"))])],1),a("div",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-scrollable",modifiers:{"modal-scrollable":!0}}],staticClass:"info",on:{click:function(a){return t.$emit("showModal",e.field)}}},[a("InfoIcon",{staticClass:"icon"}),a("span",[t._v("份量說明")])],1)]}}])})],1)},i=[],r=(a("a9e3"),a("3dd0")),s=a.n(r),o=a("8f28"),u=a.n(o),c=a("eb4e"),l=a.n(c),d={name:"RecordingTable",components:{MinusIcon:s.a,AddIcon:u.a,InfoIcon:l.a},props:{items:{type:Array,required:!0},fields:{type:Array,required:!0},canBeModified:{type:Boolean,required:!0},min:{type:Number,required:!0},max:{type:Number,required:!0}},methods:{updateQuantity:function(t,e){var a=t.item[t.field.key];0===a&&e<0||10===a&&e>0||("water"!==t.field.key?this.$emit("update:quantity",{data:t,addAndSubtractRange:.5*e}):this.$emit("update:quantity",{data:t,addAndSubtractRange:.25*e}))}}},m=d,y=(a("ad74"),a("2877")),f=Object(y["a"])(m,n,i,!1,null,"619a2910",null);e["a"]=f.exports},1326:function(t,e,a){"use strict";var n=a("90b3"),i=a.n(n);i.a},"32e6":function(t,e,a){"use strict";var n=a("5a0c"),i=a.n(n);e["a"]={isSearchedDateExpired:function(t){var e=i()().format("YYYY-MM-DD"),a=t||e;return!(a===e)}}},"33a8":function(t,e,a){"use strict";var n=a("c5b0"),i=a.n(n);i.a},"3dd0":function(t,e,a){a("99af");var n=a("ded3"),i=a("4082");t.exports={functional:!0,render:function(t,e){var a=e._c,r=(e._v,e.data),s=e.children,o=void 0===s?[]:s,u=r.class,c=r.staticClass,l=r.style,d=r.staticStyle,m=r.attrs,y=void 0===m?{}:m,f=i(r,["class","staticClass","style","staticStyle","attrs"]);return a("svg",n({class:[u,c],style:[l,d],attrs:Object.assign({width:"18",height:"18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y)},f),o.concat([a("rect",{attrs:{x:"4",y:"8",width:"10",height:"2",rx:"1",fill:"#407D60"}}),a("circle",{attrs:{cx:"9",cy:"9",r:"8",stroke:"#407D60","stroke-width":"2"}})]))}}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),i=a("5899"),r="["+i+"]",s=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),u=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(s,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:u(1),end:u(2),trim:u(3)}},"5eeb":function(t,e,a){},"68dd":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("main",[a("Title",{attrs:{title:t.diets[t.$route.params.dietType].name+"的營養攝取記錄"}}),a("form",{on:{submit:function(t){t.preventDefault()}}},[a("RecordingTable",{attrs:{items:[t.$store.getters.historyOfAMealRecording],canBeModified:t.canBeModified,fields:t.fields,min:0,max:10},on:{"update:quantity":t.updateQuantity,showModal:function(e){t.dataOfConversionTable=e}}})],1),t.canBeModified?a("div",{staticClass:"button-wrapper"},[a("BaseButton",{attrs:{title:"取消",buttonStyle:"outline-default",disabledState:!1},on:{click:function(e){return t.$router.push({name:"RecordingStates",params:{date:t.$route.params.date}})}}}),a("BaseButton",{attrs:{title:"確認",buttonStyle:"primary",disabledState:t.isConfirmButtonPass},on:{click:t.confirmUpdate}})],1):a("div",{staticClass:"button-wrapper"},[a("BaseButton",{attrs:{title:"回首頁",buttonStyle:"primary"},on:{click:function(e){return t.$router.push({name:"RecordingStates",params:{date:t.$route.params.date}})}}})],1)],1),a("b-modal",{attrs:{id:"modal-scrollable",scrollable:"","hide-footer":""}},[a("div",{attrs:{slot:"modal-title"},slot:"modal-title"},[t._v(" "+t._s(t.dataOfConversionTable.label)+" 1 份"),a("br"),t._v("換算表 ")]),a("ConversionTable",{attrs:{items:t.nutritionalInformation}})],1)],1)},i=[],r=(a("a623"),a("07ac"),a("96cf"),a("1da1")),s=a("ade3"),o=a("5530"),u=a("7759"),c=a("7e40"),l=a("0163"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"conversion-table"},[a("b-table",{attrs:{responsive:"",items:t.items,fields:t.fields},scopedSlots:t._u([{key:"head()",fn:function(e){return[a("div",{staticClass:"text-nowrap"},[t._v(t._s(e.label))])]}},{key:"cell(quantity)",fn:function(e){return[a("div",{staticClass:"text-nowrap"},[t._v(" "+t._s(e.value?e.value:"-")+" ")])]}},{key:"cell(weight)",fn:function(e){return[a("div",{staticClass:"text-nowrap"},[t._v(" "+t._s(e.value?e.value+" 克":"-")+" ")])]}}])})],1)},m=[],y={name:"ConversionTable",props:{items:{type:Array,required:!0}},data:function(){return{fields:[{key:"name",label:"名稱"},{key:"quantity",label:"份量"},{key:"weight",label:"重量"}]}}},f=y,h=(a("1326"),a("2877")),g=Object(h["a"])(f,d,m,!1,null,"2e7c28e4",null),w=g.exports,p={grains:{name:"全穀雜糧類",items:[{name:"糙米飯(熟)",quantity:"1/4 碗",weight:50},{name:"雜糧飯(熟)",quantity:"1/4 碗",weight:50},{name:"白米飯(熟)",quantity:"1/4 碗",weight:50},{name:"粥",quantity:"1/2 碗",weight:125},{name:"麵條(熟)",quantity:"1/2 碗",weight:60},{name:"芋頭",quantity:"3~4 塊",weight:55},{name:"蕃薯(小)",quantity:"1/2 個",weight:55},{name:"馬鈴薯(中)",quantity:"1/2 個",weight:90},{name:"玉米",quantity:"1/3 根",weight:null},{name:"玉米粒",quantity:"1/2 杯",weight:65},{name:"紅豆(熟)",quantity:" 2 免洗匙",weight:null},{name:"綠豆(熟)",quantity:" 2 免洗匙",weight:null},{name:"土司",quantity:"1/2 片",weight:25},{name:"饅頭",quantity:" 1/3 個",weight:30},{name:"餐包(小)",quantity:" 1 個",weight:25},{name:"餃子皮",quantity:" 3 張",weight:30},{name:"小湯圓(無餡)",quantity:" 10 顆",weight:30},{name:"蘇打餅乾",quantity:" 3 片",weight:60}]},proteins:{name:"豆魚蛋肉類",items:[{name:"雞蛋",quantity:"1 顆",weight:55},{name:"豆皮(生)",quantity:"",weight:15},{name:"豆漿",quantity:"1 杯",weight:260},{name:"傳統豆腐",quantity:"",weight:80},{name:"嫩豆腐",quantity:"1/2 盒",weight:140},{name:"黃豆",quantity:"",weight:20},{name:"魚丸",quantity:"",weight:50}]},dairy:{name:"奶品類",items:[{name:"鮮奶",quantity:"1 杯",weight:240},{name:"奶粉",quantity:"4 湯匙",weight:30}]},description:"",vegetables:{name:"蔬菜類",items:[{name:"小黃瓜",quantity:"",weight:100},{name:"高麗菜",quantity:"",weight:100},{name:"空心菜",quantity:"",weight:100},{name:"苦瓜",quantity:"",weight:100},{name:"金針菇",quantity:"",weight:100},{name:"花椰菜",quantity:"",weight:100},{name:"洋蔥",quantity:"",weight:100},{name:"茭白筍",quantity:"",weight:100},{name:"玉米筍",quantity:"",weight:100},{name:"青江菜",quantity:"",weight:100},{name:"地瓜葉",quantity:"",weight:100},{name:"茼蒿",quantity:"",weight:100},{name:"香菇",quantity:"",weight:100}]},fruits:{name:"水果類",items:[{name:"蘋果(小)",quantity:"1 顆",weight:120},{name:"聖女番茄",quantity:"23 個",weight:175},{name:"荔枝",quantity:"9 個",weight:100},{name:"草莓",quantity:"",weight:160},{name:"香蕉(中)",quantity:"1 根",weight:75},{name:"鳳梨",quantity:"",weight:130},{name:"奇異果",quantity:"1 個",weight:115},{name:"葡萄",quantity:"13 個",weight:105},{name:"蓮霧",quantity:"2 個",weight:170},{name:"柳丁",quantity:"1 顆",weight:130},{name:"芭樂",quantity:"1 顆",weight:155},{name:"水梨",quantity:"3/4 顆",weight:150},{name:"水蜜桃(小)",quantity:"1 顆",weight:145},{name:"白柚",quantity:"2 片",weight:165},{name:"木瓜",quantity:"1/3 顆",weight:120},{name:"西瓜(黃)",quantity:"",weight:195},{name:"西瓜(紅)",quantity:"",weight:250},{name:"哈密瓜",quantity:"",weight:195}]},nuts:{name:"油脂及堅果種子類",items:[{name:"油",quantity:"1 茶匙",weight:5},{name:"杏仁果",quantity:"5 粒",weight:7},{name:"開心果",quantity:"10 粒",weight:7},{name:"腰果",quantity:"5 粒",weight:8},{name:"南瓜子",quantity:"30 顆",weight:8},{name:"花生仁",quantity:"10 粒",weight:8},{name:"培根",quantity:"1 片",weight:10},{name:"鮮奶油",quantity:"1 茶匙",weight:30},{name:"酪梨",quantity:"1/6 個",weight:30}]}},v=p,b=a("32e6"),q=(a("5a0c"),{components:{Title:u["a"],RecordingTable:l["a"],ConversionTable:w,BaseButton:c["a"]},data:function(){return{pageTitle:"",isConfirmButtonPass:!0,dataOfConversionTable:{},diets:{breakfast:{name:"早餐",symbol:1},lunch:{name:"午餐",symbol:2},dessert:{name:"午茶點心",symbol:3},dinner:{name:"晚餐",symbol:4},supper:{name:"宵夜",symbol:5}},fields:[{key:"grains",label:"全穀雜糧類"},{key:"proteins",label:"豆魚蛋肉類"},{key:"dairy",label:"奶品類"},{key:"vegetables",label:"蔬菜類"},{key:"fruits",label:"水果類"},{key:"nuts",label:"油脂及堅果種子類"}]}},methods:{updateQuantity:function(t){var e=t.data.field.key;this.$store.commit("updateHistoryOfAMealRecording",Object(o["a"])(Object(o["a"])({},this.$store.getters.historyOfAMealRecording),{},Object(s["a"])({},e,this.$store.getters.historyOfAMealRecording[e]+t.addAndSubtractRange))),this.checkConfirmButtonPass(t.data.item)},checkConfirmButtonPass:function(t){this.isConfirmButtonPass=Object.values(this.$store.getters.historyOfAMealRecording).every((function(t){return 0===t}))},confirmUpdate:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.diets[t.$route.params.dietType].symbol,n=t.$store.getters.historyOfAMealRecordingID,i=t.$store.getters.userProfile.id,!n){e.next=8;break}return e.next=6,t.$store.dispatch("updateDiet",{diet_id:n,data:Object(o["a"])(Object(o["a"])({},t.$store.getters.historyOfAMealRecording),{},{_method:"put",diet_type:a})});case 6:e.next=10;break;case 8:return e.next=10,t.$store.dispatch("addNewDiet",Object(o["a"])(Object(o["a"])({},t.$store.getters.historyOfAMealRecording),{},{diet_type:a,kind:0,user_id:i}));case 10:t.$router.push({name:"RecordingStates",params:{date:t.$route.params.date}});case 11:case"end":return e.stop()}}),e)})))()}},computed:{nutritionalInformation:function(){return this.dataOfConversionTable.key?v[this.dataOfConversionTable.key].items:""},canBeModified:function(){return!b["a"].isSearchedDateExpired(this.$route.params.date)}}}),k=q,_=(a("33a8"),Object(h["a"])(k,n,i,!1,null,"3800ac1e",null));e["default"]=_.exports},"8f28":function(t,e,a){a("99af");var n=a("ded3"),i=a("4082");t.exports={functional:!0,render:function(t,e){var a=e._c,r=(e._v,e.data),s=e.children,o=void 0===s?[]:s,u=r.class,c=r.staticClass,l=r.style,d=r.staticStyle,m=r.attrs,y=void 0===m?{}:m,f=i(r,["class","staticClass","style","staticStyle","attrs"]);return a("svg",n({class:[u,c],style:[l,d],attrs:Object.assign({width:"18",height:"18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y)},f),o.concat([a("rect",{attrs:{x:"4",y:"8",width:"10",height:"2",rx:"1",fill:"#407D60"}}),a("rect",{attrs:{x:"10",y:"4",width:"10",height:"2",rx:"1",transform:"rotate(90 10 4)",fill:"#407D60"}}),a("circle",{attrs:{cx:"9",cy:"9",r:"8",stroke:"#407D60","stroke-width":"2"}})]))}}},"90b3":function(t,e,a){},a623:function(t,e,a){"use strict";var n=a("23e7"),i=a("b727").every,r=a("a640"),s=a("ae40"),o=r("every"),u=s("every");n({target:"Array",proto:!0,forced:!o||!u},{every:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},a9e3:function(t,e,a){"use strict";var n=a("83ab"),i=a("da84"),r=a("94ca"),s=a("6eeb"),o=a("5135"),u=a("c6b6"),c=a("7156"),l=a("c04e"),d=a("d039"),m=a("7c73"),y=a("241c").f,f=a("06cf").f,h=a("9bf2").f,g=a("58a8").trim,w="Number",p=i[w],v=p.prototype,b=u(m(v))==w,q=function(t){var e,a,n,i,r,s,o,u,c=l(t,!1);if("string"==typeof c&&c.length>2)if(c=g(c),e=c.charCodeAt(0),43===e||45===e){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(r=c.slice(2),s=r.length,o=0;o<s;o++)if(u=r.charCodeAt(o),u<48||u>i)return NaN;return parseInt(r,n)}return+c};if(r(w,!p(" 0o1")||!p("0b1")||p("+0x1"))){for(var k,_=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof _&&(b?d((function(){v.valueOf.call(a)})):u(a)!=w)?c(new p(q(e)),a,_):q(e)},x=n?y(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;x.length>C;C++)o(p,k=x[C])&&!o(_,k)&&h(_,k,f(p,k));_.prototype=v,v.constructor=_,s(i,w,_)}},ad74:function(t,e,a){"use strict";var n=a("5eeb"),i=a.n(n);i.a},c5b0:function(t,e,a){},eb4e:function(t,e,a){a("99af");var n=a("ded3"),i=a("4082");t.exports={functional:!0,render:function(t,e){var a=e._c,r=(e._v,e.data),s=e.children,o=void 0===s?[]:s,u=r.class,c=r.staticClass,l=r.style,d=r.staticStyle,m=r.attrs,y=void 0===m?{}:m,f=i(r,["class","staticClass","style","staticStyle","attrs"]);return a("svg",n({class:[u,c],style:[l,d],attrs:Object.assign({width:"16",height:"16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y)},f),o.concat([a("circle",{attrs:{cx:"8",cy:"8",r:"7.5",stroke:"#407D60"}}),a("path",{attrs:{d:"M8.398 5.53c-.134 0-.262-.024-.383-.073a1.01 1.01 0 01-.529-.522 1.021 1.021 0 01-.073-.383c0-.134.024-.261.073-.383.053-.121.124-.229.213-.322a.888.888 0 01.316-.212.953.953 0 01.765 0 .95.95 0 01.535.534.953.953 0 010 .766.831.831 0 01-.213.31c-.093.089-.2.16-.322.212-.121.05-.249.073-.382.073zm-.845 6.97c-.397 0-.711-.117-.942-.352-.26-.26-.389-.639-.389-1.137 0-.235.033-.506.097-.814l.845-3.992h1.793l-.894 4.229a1.39 1.39 0 00-.048.401c0 .17.038.29.115.359.081.068.21.103.389.103a.829.829 0 00.352-.08c.118-.056.225-.133.323-.23.198-.198.348-.462.45-.79h.522c-.223.628-.503 1.128-.839 1.5a2.516 2.516 0 01-.96.657 2.3 2.3 0 01-.814.146z",fill:"#407D60"}})]))}}}}]);
//# sourceMappingURL=diet-record.1b5df360.js.map