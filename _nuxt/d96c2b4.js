(window.webpackJsonp=window.webpackJsonp||[]).push([[64,37,49,51,54],{1110:function(t,e,a){},1111:function(t,e,a){},1112:function(t,e,a){"use strict";a.r(e);var s={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}}},r=a(22),n=Object(r.a)(s,(function(){return(0,this._self._c)("noscript",{inlineTemplate:{render:function(){var t=this;return(0,t._self._c)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"  ); ').concat(t.styleText)})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=n.exports},1113:function(t,e,a){"use strict";a(1110)},1114:function(t,e,a){"use strict";a.r(e);var s={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1}}},r=(a(1113),a(22)),n=a(25),i=a.n(n),o=a(184),c=Object(r.a)(s,(function(){var t=this,e=t._self._c;return t.imageAsset.isSvgImage||t.$config.optimizeImages?e("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,alt:t.alt,behind:""},scopedSlots:t._u([{key:"svgImgComponent",fn:function(a){var s=a.imageAsset,r=a.styleText;return[e("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:r,attrs:{"data-bgset":s.optimizedImagePath,"data-sizes":"auto"}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":s,"style-text":r}})]}},{key:"imgComponent",fn:function(a){var s=a.imageAsset,r=a.styleText;return[e("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:r,attrs:{"data-bgset":"".concat(s.responsiveWebpImage.srcSet," [type: image/webp] |\n                      ").concat(s.responsiveImage.srcSet),"data-sizes":"auto"}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":s,"style-text":r}})]}}],null,!1,1036633756)}):e("v-img",{class:t.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain,"min-height":t.minHeight}})}),[],!1,null,null,null);e.default=c.exports;i()(c,{UiNoScriptBackgroundImg:a(1112).default,UiSmartImgFileTypesWrapper:a(452).default}),i()(c,{VImg:o.a})},1116:function(t,e,a){"use strict";a(1111)},1118:function(t,e,a){"use strict";a.r(e);function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==a)return;var s,r,n=[],i=!0,o=!1;try{for(a=a.call(t);!(i=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s}var n={mixins:[{computed:{cssVars:function(){var t={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,t),t}},methods:{isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},hexToRgb:function(t){var e=0,a=0,s=0;return 4===t.length?(e="0x"+t[1]+t[1],a="0x"+t[2]+t[2],s="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],a="0x"+t[3]+t[4],s="0x"+t[5]+t[6]),"".concat(+e,", ").concat(+a,", ").concat(+s)},generateRgbVar:function(t,e,a){var s=this.hexToRgb(e);s.includes("NaN")||(a["--v-".concat(t,"-rgb")]=s)},createRgbVarsForThemes:function(t,e){if(void 0!==t)for(var a=0,r=Object.values(t);a<r.length;a++)for(var n=r[a],i=0,o=Object.entries(n);i<o.length;i++){var c=s(o[i],2),l=c[0],g=c[1];if(this.isObject(g))for(var u=0,d=Object.entries(g);u<d.length;u++){var h=s(d[u],2),m=h[0],p=h[1];this.generateRgbVar("".concat(l,"-").concat(m),p,e)}else this.generateRgbVar(l,g,e)}}}}],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}}},i=(a(1116),a(22)),o=a(25),c=a.n(o),l=a(1099),g=a(247),u=a(237),d=a(1100),h=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("v-responsive",{staticClass:"gradient-fill-header",style:t.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[e("v-responsive",{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[e("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(a,s){return e("v-col",{key:s,attrs:{cols:"4"}},[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},[e("v-responsive",{staticClass:"gradient-fill-header top-level",style:t.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[e("UiSmartBackgroundImg",{attrs:{height:"56.3",width:"189","min-height":"75","image-asset":a,contain:""}})],1)],1)],1)})),1)],1),t._v(" "),e("v-overlay",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),t._v(" "),e("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[e("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n        "+t._s(t.pageHeader)+"\n      ")])])],1)}),[],!1,null,null,null);e.default=h.exports;c()(h,{UiSmartBackgroundImg:a(1114).default}),c()(h,{VCol:l.a,VOverlay:g.a,VResponsive:u.a,VRow:d.a})},1119:function(t,e,a){"use strict";a.r(e);var s={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:function(){return[]}},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}}},r=a(22),n=a(25),i=a.n(n),o=a(1109),c=Object(r.a)(s,(function(){var t=this,e=t._self._c;return e("section",{class:t.greyBackground?t.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:t.sectionId}},[e("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:t.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),e("v-container",{class:t.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=c.exports;i()(c,{UiPageHeaderBanner:a(1118).default}),i()(c,{VContainer:o.a})},1275:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{shown:!1,playmusic:function(){new Audio("https://freemusicarchive.org/track/pay-attention-duffy-duck-cb-052/stream").play()},pageHeader:"Presenting",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","S.svg"),this.$getImageAssetObject("images","tracktypes","VS.svg"),this.$getImageAssetObject("images","tracktypes","LVS.svg")]}},head:function(){return{title:"Presenting",meta:[]}}},r=a(22),n=a(25),i=a.n(n),o=a(268),c=a(1099),l=a(1100),g=Object(r.a)(s,(function(){var t=this,e=t._self._c;return e("SectionsPageContainer",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}},[e("v-row",{directives:[{name:"show",rawName:"v-show",value:!t.shown,expression:"!shown"}]},[e("v-col",{staticClass:"pa-8"},[e("v-btn",{staticClass:"pa-20",style:{left:"50%",transform:"translateX(-50%)"},attrs:{color:"primary",absolute:""},on:{click:function(e){t.shown=!t.shown,t.playmusic()}}},[t._v("\n          Click me for a surprise\n        ")])],1)],1),t._v(" "),e("v-row",{directives:[{name:"show",rawName:"v-show",value:t.shown,expression:"shown"}],attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",md:"6","align-self":"center"}},[e("UiSmartImg",{attrs:{"max-height":"512","max-width":"512","image-asset":t.$getImageAssetObject("images","team","sveinung-gundersen-big.png")}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"6","align-self":"center"}},[e("div",{staticClass:"pa-lg-16 pa-md-10 px-4 py-16"},[e("h2",{staticClass:"text-h3 text-center font-weight-black"},[t._v("S. Gundersen")])])])],1),t._v(" "),e("v-row",{directives:[{name:"show",rawName:"v-show",value:t.shown,expression:"shown"}],staticClass:"flex-row-reverse",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",md:"6","align-self":"center"}},[e("UiSmartImg",{attrs:{"max-height":"405","max-width":"612","image-asset":t.$getImageAssetObject("images","team","fairtracks-team.png")}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"6","align-self":"center"}},[e("div",{staticClass:"pa-lg-16 pa-md-10 px-4 py-16"},[e("h2",{staticClass:"text-h3 text-center font-weight-black"},[t._v("...and the FAIRtracks team")])])])],1)],1)}),[],!1,null,null,null);e.default=g.exports;i()(g,{UiSmartImg:a(266).default,SectionsPageContainer:a(1119).default}),i()(g,{VBtn:o.a,VCol:c.a,VRow:l.a})}}]);