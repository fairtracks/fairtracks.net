(window.webpackJsonp=window.webpackJsonp||[]).push([[65,37,50,52,55],{1064:function(e,t,a){"use strict";a.r(t);var s={mixins:[a(910).a],data(){return{componentId:"presenting",shown:!1,playmusic(){new Audio("https://freemusicarchive.org/track/pay-attention-duffy-duck-cb-052/stream").play()},pageHeader:"Presenting",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","S.svg"),this.$getImageAssetObject("images","tracktypes","VS.svg"),this.$getImageAssetObject("images","tracktypes","LVS.svg")]}},head:()=>({title:"Presenting",meta:[]})},n=a(15),i=a(19),r=a.n(i),o=a(230),c=a(887),l=a(888),d=Object(n.a)(s,(function(){var e=this,t=e._self._c;return t("SectionsPageContainer",{attrs:{"page-header":e.pageHeader,"page-header-images":e.pageHeaderImages}},[t("v-row",{directives:[{name:"show",rawName:"v-show",value:!e.shown,expression:"!shown"}]},[t("v-col",{staticClass:"pa-8"},[t("v-btn",{staticClass:"pa-20",style:{left:"50%",transform:"translateX(-50%)"},attrs:{color:"primary",absolute:""},on:{click:function(t){e.shown=!e.shown,e.playmusic()}}},[e._v("\n          Click me for a surprise\n        ")])],1)],1),e._v(" "),t("v-row",{directives:[{name:"show",rawName:"v-show",value:e.shown,expression:"shown"}],attrs:{"no-gutters":""}},[t("v-col",{attrs:{cols:"12",md:"6","align-self":"center"}},[t("UiSmartImg",{attrs:{"max-height":"512","max-width":"512","image-asset":e.$getImageAssetObject("images","team","sveinung-gundersen-big.png")}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"6","align-self":"center"}},[t("div",{staticClass:"pa-lg-16 pa-md-10 px-4 py-16"},[t("h2",{staticClass:"text-h3 text-center font-weight-black"},[e._v("S. Gundersen")])])])],1),e._v(" "),t("v-row",{directives:[{name:"show",rawName:"v-show",value:e.shown,expression:"shown"}],staticClass:"flex-row-reverse",attrs:{"no-gutters":""}},[t("v-col",{attrs:{cols:"12",md:"6","align-self":"center"}},[t("UiSmartImg",{attrs:{"max-height":"405","max-width":"612","image-asset":e.$getImageAssetObject("images","team","fairtracks-team.png")}})],1),e._v(" "),t("v-col",{attrs:{cols:"12",md:"6","align-self":"center"}},[t("div",{staticClass:"pa-lg-16 pa-md-10 px-4 py-16"},[t("h2",{staticClass:"text-h3 text-center font-weight-black"},[e._v("...and the FAIRtracks team")])])])],1)],1)}),[],!1,null,null,null);t.default=d.exports;r()(d,{UiSmartImg:a(228).default,SectionsPageContainer:a(908).default}),r()(d,{VBtn:o.a,VCol:c.a,VRow:l.a})},898:function(e,t,a){},899:function(e,t,a){},901:function(e,t,a){"use strict";a.r(t);var s={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}},data:()=>({componentId:"ui-no-script-background-img"})},n=a(15),i=Object(n.a)(s,(function(){return(0,this._self._c)("noscript",{inlineTemplate:{render:function(){var e=this;return(0,e._self._c)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'.concat(e.imageAsset.optimizedImagePath,'"); ').concat(e.styleText)})},staticRenderFns:[]}})}),[],!1,null,null,null);t.default=i.exports},902:function(e,t,a){"use strict";a(898)},903:function(e,t,a){"use strict";a.r(t);var s={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1},notResponsive:{type:Boolean,default:!1}},data:()=>({componentId:"ui-smart-background-img"}),methods:{getDynamicClasses(e,t){var a=[];return e?a.push("contain-background"):a.push("cover-background"),t&&a.push("lazyload"),a.join(" ")}}},n=(a(902),a(15)),i=a(19),r=a.n(i),o=a(150),c=Object(n.a)(s,(function(){var e=this,t=e._self._c;return e.imageAsset.isSvgImage||e.$config.optimizeImages?t("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":e.imageAsset,height:e.height,width:e.width,"min-height":e.minHeight,alt:e.alt,behind:"","not-responsive":e.notResponsive},scopedSlots:e._u([{key:"nonRespImgComponent",fn:function(a){var{imageAsset:s,styleText:n,lazyLoad:i}=a;return[t("div",{staticClass:"fill-height center-background attach-classes hide-with-noscript",class:e.getDynamicClasses(e.contain,i),style:i?n:'background-image: url("'.concat(e.imageAsset.optimizedImagePath,'"); ').concat(n),attrs:{"data-bgset":i?s.optimizedImagePath:null}}),e._v(" "),t("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:e.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":s,"style-text":n}})]}},{key:"respImgComponent",fn:function(a){var{imageAsset:s,styleText:n}=a;return[t("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:e.contain?"contain-background":"cover-background",style:n,attrs:{"data-bgset":"".concat(s.responsiveWebpImage.srcSet," [type: image/webp] |\n                      ").concat(s.responsiveImage.srcSet),"data-sizes":"auto"}}),e._v(" "),t("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:e.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":s,"style-text":n}})]}}],null,!1,876970809)}):t("v-img",{class:e.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:e.imageAsset.optimizedImagePath,alt:e.alt,contain:e.contain,"min-height":e.minHeight}})}),[],!1,null,null,null);t.default=c.exports;r()(c,{UiNoScriptBackgroundImg:a(901).default,UiSmartImgFileTypesWrapper:a(414).default}),r()(c,{VImg:o.a})},904:function(e,t,a){"use strict";a(899)},906:function(e,t,a){"use strict";a.r(t);var s={mixins:[{computed:{cssVars(){var e={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,e),e}},methods:{isObject:e=>"[object Object]"===Object.prototype.toString.call(e),hexToRgb(e){var t=0,a=0,s=0;return 4===e.length?(t="0x"+e[1]+e[1],a="0x"+e[2]+e[2],s="0x"+e[3]+e[3]):7===e.length&&(t="0x"+e[1]+e[2],a="0x"+e[3]+e[4],s="0x"+e[5]+e[6]),"".concat(+t,", ").concat(+a,", ").concat(+s)},generateRgbVar(e,t,a){var s=this.hexToRgb(t);s.includes("NaN")||(a["--v-".concat(e,"-rgb")]=s)},createRgbVarsForThemes(e,t){if(void 0!==e)for(var a of Object.values(e))for(var[s,n]of Object.entries(a))if(this.isObject(n))for(var[i,r]of Object.entries(n))this.generateRgbVar("".concat(s,"-").concat(i),r,t);else this.generateRgbVar(s,n,t)}}}],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:()=>[]}},data:()=>({componentId:"ui-page-header-banner"})},n=(a(904),a(15)),i=a(19),r=a.n(i),o=a(887),c=a(210),l=a(200),d=a(888),g=Object(n.a)(s,(function(){var e=this,t=e._self._c;return t("v-responsive",{staticClass:"gradient-fill-header",style:e.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[t("v-responsive",{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[t("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},e._l(e.pageHeaderImages,(function(a,s){return t("v-col",{key:s,attrs:{cols:"4"}},[t("v-row",{attrs:{"no-gutters":"",justify:"center"}},[t("v-responsive",{staticClass:"gradient-fill-header top-level",style:e.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[t("UiSmartBackgroundImg",{attrs:{height:"56.3",width:"189","min-height":"75","image-asset":a,contain:"","not-responsive":""}})],1)],1)],1)})),1)],1),e._v(" "),t("v-overlay",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),e._v(" "),t("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[t("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[e._v("\n        "+e._s(e.pageHeader)+"\n      ")])])],1)}),[],!1,null,null,null);t.default=g.exports;r()(g,{UiSmartBackgroundImg:a(903).default}),r()(g,{VCol:o.a,VOverlay:c.a,VResponsive:l.a,VRow:d.a})},908:function(e,t,a){"use strict";a.r(t);var s={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:()=>[]},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}},data:()=>({componentId:"sections-page-container"})},n=a(15),i=a(19),r=a.n(i),o=a(897),c=Object(n.a)(s,(function(){var e=this,t=e._self._c;return t("section",{class:e.greyBackground?e.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:e.sectionId}},[t("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:e.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":e.pageHeader,"page-header-images":e.pageHeaderImages}}),e._v(" "),t("v-container",{class:e.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[e._t("default")],2)],1)}),[],!1,null,null,null);t.default=c.exports;r()(c,{UiPageHeaderBanner:a(906).default}),r()(c,{VContainer:o.a})},910:function(e,t,a){"use strict";var s=a(416),n=a(94);function i(e,t,a,s,n,i,r){try{var o=e[i](r),c=o.value}catch(e){return void a(e)}o.done?t(c):Promise.resolve(c).then(s,n)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(s,n){var r=e.apply(t,a);function o(e){i(r,s,n,o,c,"next",e)}function c(e){i(r,s,n,o,c,"throw",e)}o(void 0)}))}}function o(e,t,a){var s,i=!1,o=Number(null===(s=getComputedStyle(document.body)["scroll-margin-top"])||void 0===s?void 0:s.replace("px","")),c=window.$nuxt;c.$nextTick((()=>c.$emit("triggerScroll"))),c.$once("triggerScroll",r((function*(){if(a)i={x:a.x,y:a.y};else if(e.hash){var t=e.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(t="#"+window.CSS.escape(t.substring(1)));try{var s=(e,t)=>document.querySelector(e)||new Promise((a=>{if(t>10)return a();setTimeout((()=>{a(s(e,++t||1))}),100)}));(yield s(e.hash,0))&&(i={selector:t})}catch(e){}}else i={x:0,y:0};if(void 0!==i.y){var r=i.y;o&&(r+=o),Object(n.b)(r,{duration:0})}else void 0!==i.selector&&(document.getElementById(i.selector.substring(1)).scrollIntoView({block:"start",inline:"nearest"}),o&&window.scrollBy(0,-o));return i})))}"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",(()=>{window.history.scrollRestoration="auto"})),window.addEventListener("load",(()=>{window.history.scrollRestoration="manual"})));t.a={beforeRouteEnter(e,t,a){a((e=>{e.prevRoute=t;var a=null===t.name;e.scrollPosition=a?e.$store.state.windowState.reloadScrollPosition:void 0}))},data:()=>({prevRoute:void 0,scrollPosition:void 0}),beforeMount(){window.addEventListener("beforeunload",this.leave)},beforeDestroy(){window.removeEventListener("beforeunload",this.leave)},computed:{pageName(){return this.componentId}},activated(){var e,t,a;e=this.$route,this.prevRoute,t=this.scrollPosition,null!==(a=e.meta)&&void 0!==a&&a.savedPosition&&(t=e.meta.savedPosition,delete e.meta.savedPosition),o(e,0,t),this.scrollPosition=void 0},mounted(){0},methods:{leave(){var e=this.$nuxt.context.store.commit,t={x:window.scrollX,y:window.scrollY};e(s.WINDOW_STATE_M_SET_RELOAD_SCROLL_POSITION,t)}}}}}]);