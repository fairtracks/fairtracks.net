(window.webpackJsonp=window.webpackJsonp||[]).push([[73,31,37,46,54,55,58],{1318:function(t,e,n){var a=n(1323);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(29).default)("5ca67044",a,!0,{sourceMap:!1})},1319:function(t,e,n){var a=n(1327);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(29).default)("5dbd20a4",a,!0,{sourceMap:!1})},1320:function(t,e,n){"use strict";var a=n(37);n(4),n(33),n(59),n(74),n(163),n(198);e.a={computed:{cssVars:function(){var t={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,t),t}},methods:{isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},hexToRgb:function(t){var e=0,n=0,a=0;return 4===t.length?(e="0x"+t[1]+t[1],n="0x"+t[2]+t[2],a="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],n="0x"+t[3]+t[4],a="0x"+t[5]+t[6]),"".concat(+e,", ").concat(+n,", ").concat(+a)},generateRgbVar:function(t,e,n){var a=this.hexToRgb(e);a.includes("NaN")||(n["--v-".concat(t,"-rgb")]=a)},createRgbVarsForThemes:function(t,e){if(void 0!==t)for(var n=0,s=Object.values(t);n<s.length;n++)for(var i=s[n],r=0,o=Object.entries(i);r<o.length;r++){var l=Object(a.a)(o[r],2),c=l[0],u=l[1];if(this.isObject(u))for(var d=0,p=Object.entries(u);d<p.length;d++){var g=Object(a.a)(p[d],2),f=g[0],m=g[1];this.generateRgbVar("".concat(c,"-").concat(f),m,e)}else this.generateRgbVar(c,u,e)}}}}},1321:function(t,e,n){"use strict";n.r(e);n(33);var a={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}},data:function(){return{componentId:"ui-no-script-background-img"}}},s=n(61),i=Object(s.a)(a,(function(){return(0,this._self._c)("noscript",{inlineTemplate:{render:function(){var t=this;return(0,t._self._c)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"); ').concat(t.styleText)})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=i.exports},1322:function(t,e,n){"use strict";n(1318)},1323:function(t,e,n){var a=n(28)(!1);a.push([t.i,".center-background,.slot-center-background .attach-classes{background-position:50%}.cover-background,.slot-cover-background .attach-classes{background-size:cover}.contain-background,.slot-contain-background .attach-classes{background-size:contain;background-color:#fff}.full-size{height:100%;width:100%}.auto-size{height:auto;width:auto}",""]),t.exports=a},1324:function(t,e,n){"use strict";n.r(e);var a=n(317),s=(n(33),n(69),{props:{imageAsset:{type:Object,required:!0},imgHeight:{type:String,default:null},imgWidth:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1},notResponsive:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-smart-background-img"}},methods:{getDynamicClasses:function(t,e){var n=[];return t?n.push("contain-background"):n.push("cover-background"),e&&n.push("lazyload"),n.join(" ")}}}),i=(n(1322),n(61)),r=Object(i.a)(s,(function(){var t=this,e=t._self._c;return t.imageAsset.isSvgImage||t.$config.optimizeImages?e("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,"img-height":t.imgHeight,"img-width":t.imgWidth,alt:t.alt,behind:"","not-responsive":t.notResponsive},scopedSlots:t._u([{key:"nonRespImgComponent",fn:function(n){var a=n.imageAsset,s=n.styleText,i=n.lazyLoad;return[e("div",{staticClass:"fill-height center-background attach-classes hide-with-noscript",class:t.getDynamicClasses(t.contain,i),style:i?s:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"); ').concat(s),attrs:{"data-bgset":i?a.optimizedImagePath:null}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":a,"style-text":s}})]}},{key:"respImgComponent",fn:function(n){var a=n.imageAsset,s=n.styleText;return[e("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:s,attrs:{"data-bgset":"".concat(a.responsiveWebpImage.srcSet," [type: image/webp] |\n                    ").concat(a.responsiveImage.srcSet),"data-sizes":"auto"}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":a,"style-text":s}})]}}],null,!1,615995449)}):e(a.a,{class:t.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain}})}),[],!1,null,null,null);e.default=r.exports;installComponents(r,{UiNoScriptBackgroundImg:n(1321).default,UiSmartImgFileTypesWrapper:n(647).default})},1326:function(t,e,n){"use strict";n(1319)},1327:function(t,e,n){var a=n(28)(!1);a.push([t.i,".gradient-fill-header>.v-responsive__content{background:-webkit-linear-gradient(top,rgba(var(--v-accent-rgb),.9),rgba(var(--v-success-rgb),.9));background:linear-gradient(180deg,rgba(var(--v-accent-rgb),.9),rgba(var(--v-success-rgb),.9))}.top-level{z-index:2}",""]),t.exports=a},1328:function(t,e,n){"use strict";n.r(e);var a=n(1303),s=n(372),i=n(371),r=n(1302),o={mixins:[n(1320).a],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}},data:function(){return{componentId:"ui-page-header-banner"}}},l=(n(1326),n(61)),c=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e(i.a,{staticClass:"gradient-fill-header",style:t.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[e(i.a,{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[e(r.a,{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(n,s){return e(a.a,{key:s,attrs:{cols:"4"}},[e(r.a,{attrs:{"no-gutters":"",justify:"center"}},[e(i.a,{staticClass:"gradient-fill-header top-level",style:t.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[e("UiSmartBackgroundImg",{attrs:{"img-height":"56.3","img-width":"189","image-asset":n,contain:"","not-responsive":""}})],1)],1)],1)})),1)],1),t._v(" "),e(s.a,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),t._v(" "),e(s.a,{attrs:{absolute:"",opacity:"0","z-index":"3"}},[e("h1",{staticClass:"text-md-h2 text-sm-h4 text-h5 font-weight-black text-center"},[t._v("\n      "+t._s(t.pageHeader)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=c.exports;installComponents(c,{UiSmartBackgroundImg:n(1324).default})},1329:function(t,e,n){"use strict";n.r(e);var a=n(1315),s={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:function(){return[]}},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}},data:function(){return{componentId:"sections-page-container"}}},i=n(61),r=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("section",{class:t.greyBackground?t.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:t.sectionId}},[e("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:t.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),e(a.a,{class:t.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=r.exports;installComponents(r,{UiPageHeaderBanner:n(1328).default})},1331:function(t,e,n){var a=n(1340);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(29).default)("5ce81993",a,!0,{sourceMap:!1})},1332:function(t,e,n){"use strict";n(42),n(4);var a=n(126),s=n(649),i=n(8),r=(n(78),n(35),n(41),n(79),n(70),n(200));function o(t,e,n){var a,s=!1,o=Number(null===(a=getComputedStyle(document.body)["scroll-margin-top"])||void 0===a?void 0:a.replace("px","")),l=window.$nuxt;l.$nextTick((function(){return l.$emit("triggerScroll")})),l.$once("triggerScroll",Object(i.a)(regeneratorRuntime.mark((function e(){var a,i,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=4;break}s={x:n.x,y:n.y},e.next=21;break;case 4:if(!t.hash){e.next=20;break}return a=t.hash,void 0!==window.CSS&&void 0!==window.CSS.escape&&(a="#"+window.CSS.escape(a.substring(1))),e.prev=7,i=function t(e,n){return document.querySelector(e)||new Promise((function(a){if(n>10)return a();setTimeout((function(){a(t(e,++n||1))}),100)}))},e.next=11,i(t.hash,0);case 11:e.sent&&(s={selector:a}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(7);case 18:e.next=21;break;case 20:s={x:0,y:0};case 21:return void 0!==s.y?(l=s.y,o&&(l+=o),Object(r.b)(l,{duration:0})):void 0!==s.selector&&(document.getElementById(s.selector.substring(1)).scrollIntoView({block:"start",inline:"nearest"}),o&&window.scrollBy(0,-o)),e.abrupt("return",s);case 23:case"end":return e.stop()}}),e,null,[[7,15]])}))))}"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",(function(){window.history.scrollRestoration="auto"})),window.addEventListener("load",(function(){window.history.scrollRestoration="manual"})));var l=n(1317);e.a={beforeRouteEnter:function(t,e,n){n((function(n){if(n.prevRoute=e,null===e.name){var a=n.$store.state.windowState.reloadScrollPosition;0===a.y&&t.hash||(n.scrollPosition=a)}else n.scrollPosition=void 0}))},data:function(){return{allLateRenderersMounted:void 0,totalLateRenderers:void 0,prevRoute:void 0,scrollPosition:void 0}},beforeMount:function(){window.addEventListener("beforeunload",this.leave)},beforeDestroy:function(){window.removeEventListener("beforeunload",this.leave)},computed:{pageName:function(){return this.componentId}},created:function(){var t=this,e=this.$nuxt.context.store.getters;this.totalLateRenderers=e[a.MD_REG_G_GET_LATE_RENDERER_COUNT_IN_PAGE](this.pageName),this.totalLateRenderers>0?this.allLateRenderersMounted=new Promise((function(e){var n=0;t.$nuxt.$on(l.a,(function(){(n+=1)===t.totalLateRenderers&&e(!0)}))})):this.allLateRenderersMounted=!0},activated:function(){var t=this;Promise.resolve(this.allLateRenderersMounted).then((function(){var e,n,a;e=t.$route,t.prevRoute,n=t.scrollPosition,null!==(a=e.meta)&&void 0!==a&&a.savedPosition&&(n=e.meta.savedPosition,delete e.meta.savedPosition),o(e,0,n),t.scrollPosition=void 0}))},mounted:function(){Promise.resolve(this.allLateRenderersMounted).then((function(){0}))},methods:{leave:function(){var t=this.$nuxt.context.store.commit,e={x:window.scrollX,y:window.scrollY};t(s.WINDOW_STATE_M_SET_RELOAD_SCROLL_POSITION,e)}}}},1335:function(t,e,n){var a=n(1353);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(29).default)("66254560",a,!0,{sourceMap:!1})},1337:function(t,e,n){"use strict";n.r(e);var a={mixins:[n(1316).a],props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""},scaleDownAtSm:{type:Boolean,default:!1},titleStyle:{type:String,default:""},subtitleStyle:{type:String,default:""},ingressStyle:{type:String,default:""},infoStyle:{type:String,default:""}},data:function(){return{componentId:"ui-main-title"}}},s=n(61),i=Object(s.a)(a,(function(){var t=this,e=t._self._c;return e("div",[e("h2",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"text-h4 text-center font-weight-black mt-4 mb-8",class:t.scaleDownAtSm?"text-sm-h3":"text-md-h3",style:t.titleStyle,domProps:{textContent:t._s(t.title)}}),t._v(" "),e("h3",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",class:t.scaleDownAtSm?"text-sm-h6":"text-md-h5",style:t.subtitleStyle,domProps:{textContent:t._s(t.subtitle)}}),t._v(" "),e("h4",{directives:[{name:"show",rawName:"v-show",value:t.ingress,expression:"ingress"}],staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-regular":"font-weight-medium font-italic",style:t.ingressStyle,domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}),t._v(" "),e("h4",{directives:[{name:"show",rawName:"v-show",value:!t.ingress,expression:"!ingress"}],staticClass:"text-h6 text-center mb-4",class:t.subtitle?"font-weight-regular":"font-weight-medium font-italic",style:t.ingressStyle},[t._t("ingress")],2),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.info,expression:"info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",style:t.infoStyle,domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!t.info,expression:"!info"}],staticClass:"text-subtitle-1 font-weight-light text-center mb-4",style:t.infoStyle},[t._t("info")],2)])}),[],!1,null,null,null);e.default=i.exports},1339:function(t,e,n){"use strict";n(1331)},1340:function(t,e,n){var a=n(28)(!1);a.push([t.i,".table_header{vertical-align:top}",""]),t.exports=a},1343:function(t,e,n){"use strict";n.r(e);var a=n(1303),s={mixins:[n(1317).b],props:{linkObj:{type:Object,required:!0}},data:function(){return{componentId:"ui-icon-link"}}},i=n(61),r=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e(a.a,{staticClass:"px-4 py-1",attrs:{cols:"12","align-self":"center"}},[e("UiSmartIcon",{attrs:{name:t.linkObj.icon,size:"30px"}}),t._v(" "),t.linkObj.href?e("a",{staticClass:"ml-2 my-auto",attrs:{href:t.linkObj.href}},[t._v(" "+t._s(t.linkObj.text))]):t._e(),t._v(" "),t.linkObj.to?e("nuxt-link",{staticClass:"ml-2 my-auto",attrs:{to:t.linkObj.to}},[t._v("\n    "+t._s(t.linkObj.text))]):t._e()],1)}),[],!1,null,null,null);e.default=r.exports;installComponents(r,{UiSmartIcon:n(402).default})},1344:function(t,e,n){"use strict";n.r(e);var a=n(248),s=n(1303),i=n(1312),r=n(1302),o=n(158),l=n(1308),c=(n(41),n(252),n(42),n(35),n(51),n(56),n(57),n(69),n(86)),u=n(1316),d=n(1317),p={mixins:[u.a,d.b],props:{csvBaseFileName:{type:String,required:!0},delimiter:{type:String,default:""},collapseLargeLists:{type:Boolean,default:!0},tableCaption:{type:String,default:""},tableFootnote:{type:String,default:""},itemsPerPage:{type:Number,required:!0}},data:function(){return{componentId:"ui-csv-table",search:""}},computed:{baseFilePath:function(){return"/data/tables/"+this.csvBaseFileName},headers:function(){return this.createHeaders(this.$nuxt.context.store.getters[c.DATA_G_GET_CONTENTS_BODY_ALL_HEADERS](this.baseFilePath))},items:function(){return this.$nuxt.context.store.getters[c.DATA_G_GET_CONTENTS_BODY_POSSIBLY_SPLIT_TO_ARRAYS](this.baseFilePath,this.delimiter)}},methods:{getMobileBreakpoint:function(){return null},createHeaders:function(t){return t.map((function(t){return{text:t,value:t,class:"table_header"}}))},isLargeList:function(t){return!(!this.collapseLargeLists||!Array.isArray(t))&&t.length>3},parseArrayToString:function(t){return this.compileMarkdown(t.join(",\n"))},isArray:function(t){return Array.isArray(t)}}},g=(n(1339),n(61)),f=Object(g.a)(p,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"px-4",attrs:{"no-gutters":""}},[e(s.a,{attrs:{cols:"12"}},[e(a.d,[e(o.a,{attrs:{label:"Search","single-line":"","hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[e("UiSmartIcon",{attrs:{name:"magnify"}})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),e(s.a,{attrs:{cols:"12"}},[e(i.a,{attrs:{dense:"",search:t.search,headers:t.headers,items:t.items,"items-per-page":t.itemsPerPage,height:"100%","fixed-header":"","mobile-breakpoint":t.getMobileBreakpoint()},scopedSlots:t._u([{key:"item",fn:function(n){var a=n.item;return[e("tr",t._l(a,(function(n){return e("td",{key:n.name},[t.isLargeList(n)?e(l.a,{attrs:{bottom:"",transition:"fade-transition"},scopedSlots:t._u([{key:"activator",fn:function(n){var a=n.on,s=n.attrs;return[e("span",t._g(t._b({staticStyle:{"text-align":"center","text-decoration":"underline dotted"}},"span",s,!1),a),[t._v("\n                  Multiple\n                ")])]}}],null,!0)},[t._v(" "),e("div",{staticClass:"d-flex flex-column my-4 mx-2",staticStyle:{"text-align":"center"}},[e("span",{domProps:{innerHTML:t._s(t.parseArrayToString(n))}})])]):t.isArray(n)?e("span",{domProps:{innerHTML:t._s(t.parseArrayToString(n))}}):e("span",{domProps:{innerHTML:t._s(t.compileMarkdown(n))}})],1)})),0)]}}])})],1),t._v(" "),e(s.a,{attrs:{cols:"12"}},[e("p",{directives:[{name:"show",rawName:"v-show",value:t.tableCaption,expression:"tableCaption"}],staticClass:"body-2 font-italic text-center pt-6",domProps:{innerHTML:t._s(t.compileMarkdown(t.tableCaption))}})]),t._v(" "),e(s.a,{attrs:{cols:"12"}},[e("p",{staticClass:"body-2 font-italic text-center pt-6"},[t._v("\n      "+t._s(t.tableFootnote)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=f.exports;installComponents(f,{UiSmartIcon:n(402).default})},1352:function(t,e,n){"use strict";n(1335)},1353:function(t,e,n){var a=n(28)(!1);a.push([t.i,"@media (min-width:1640px){.vl-and-up-align-self-end-else-center[data-v-248c3b15]{-ms-flex-item-align:end;align-self:end}}@media (max-width:1639px){.vl-and-up-align-self-end-else-center[data-v-248c3b15]{-ms-flex-item-align:center;align-self:center}}",""]),t.exports=a},1365:function(t,e,n){"use strict";n.r(e);var a=n(1303),s=(n(33),n(42),n(35),{mixins:[n(1316).a],props:{subSection:{type:Object,required:!0},subSectionIndex:{type:Number,required:!0}},data:function(){return{componentId:"ui-figure-list"}}}),i=(n(1352),n(61)),r=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e(a.a,{staticClass:"px-md-15 px-11 py-2",class:t.subSection.tables&&!t.subSection.links?"vl-and-up-align-self-end-else-center":"align-self-center",attrs:{cols:"12",lg:"6"}},t._l(t.subSection.figures,(function(n,a){return e("UiNumberedFigure",{key:a,class:"".concat(0===a?"pt-lg-0":""," ").concat(a>0&&t.subSection.spaceBetweenFigures?"pt-16":a>0&&t.subSection.littleSpaceBetweenFigures?"pt-lg-2 pt-7":"pt-7"," ").concat(a+1===t.subSection.figures.length?"":t.subSection.spaceBetweenFigures?"pb-16":t.subSection.littleSpaceBetweenFigures?"pb-lg-2 pb-7":"pb-7"),attrs:{"figure-obj":n,"fig-index":a,"fig-name":n.name,"sub-section-index":t.subSectionIndex}})})),1)}),[],!1,null,"248c3b15",null);e.default=r.exports;installComponents(r,{UiNumberedFigure:n(1410).default})},1366:function(t,e,n){"use strict";n.r(e);var a=n(1302),s={props:{links:{type:Array,required:!0}},data:function(){return{componentId:"ui-link-list"}}},i=n(61),r=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e(a.a,{staticClass:"px-3 pt-6 pb-9"},t._l(t.links,(function(t,n){return e("UiIconLink",{key:n,attrs:{"link-obj":t}})})),1)}),[],!1,null,null,null);e.default=r.exports;installComponents(r,{UiIconLink:n(1343).default})},1367:function(t,e,n){"use strict";n.r(e);var a=n(1302),s=(n(33),n(35),{mixins:[n(1316).a],props:{subSection:{type:Object,required:!0},subSectionIndex:{type:Number,required:!0}},data:function(){return{componentId:"ui-table-list"}}}),i=n(61),r=Object(i.a)(s,(function(){var t=this,e=t._self._c;return t.subSection.tables?e(a.a,{staticClass:"px-md-16 pb-md-16 px-8 pb-8 pt-0",attrs:{justify:"center"}},t._l(t.subSection.tables,(function(n,a){return e("div",{key:a,style:"max-width:"+n.maxWidth},[e("UiCsvTable",{staticClass:"mx-auto",attrs:{"csv-base-file-name":n.csvBaseFileName,delimiter:n.delimiter?n.delimiter:null,"collapse-large-lists":!n.collapseLargeLists||n.collapseLargeLists,"table-caption":"Table ".concat(t.subSectionIndex+1,".").concat(a+1,": ").concat(n.caption),"table-footnote":n.footnote?n.footnote:null,"items-per-page":n.itemsPerPage?n.itemsPerPage:5}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=r.exports;installComponents(r,{UiCsvTable:n(1344).default})},1379:function(t,e,n){"use strict";n.r(e);var a=n(1303),s=n(1302),i={mixins:[n(1316).a],props:{page:{type:String,default:""}},data:function(){return{componentId:"sections-alternating-sub-sections",markdownFilesDir:this.page}}},r=n(61),o=Object(r.a)(i,(function(){var t=this,e=t._self._c;return e("div",t._l(t.markdownFiles,(function(n,i){return e("section",{key:n.slug,attrs:{id:n.slug}},[e(s.a,{staticClass:"pa-0 pt-md-16 pt-8"}),t._v(" "),e(s.a,{class:{"flex-row-reverse":i%2==1},attrs:{"no-gutters":""}},[e("UiFigureList",{staticClass:"lg-and-up",attrs:{"sub-section":n,"sub-section-index":i}}),t._v(" "),e(a.a,{staticClass:"px-md-8 px-4 pb-0",attrs:{cols:"12",lg:"6","align-self":"center"}},[e(s.a,{staticClass:"px-3 py-2",attrs:{"no-gutters":"",justify:"center"}},[e(a.a,{attrs:{cols:"12"}},[e("UiMainTitle",{attrs:{title:n.title,ingress:n.ingress}})],1),t._v(" "),e(a.a,{attrs:{cols:"12"}},[e("nuxt-content",{attrs:{document:n}})],1),t._v(" "),n.links?e("UiLinkList",{attrs:{links:n.links}}):t._e()],1)],1)],1),t._v(" "),e("UiFigureList",{staticClass:"md-and-down",attrs:{"sub-section":n,"sub-section-index":i}}),t._v(" "),e("UiTableList",{attrs:{"sub-section":n,"sub-section-index":i}})],1)})),0)}),[],!1,null,null,null);e.default=o.exports;installComponents(o,{UiFigureList:n(1365).default,UiMainTitle:n(1337).default,UiLinkList:n(1366).default,UiTableList:n(1367).default})},1550:function(t,e,n){"use strict";n.r(e);var a={mixins:[n(1332).a],data:function(){return{componentId:"tracks",pageHeader:"Tracks",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","VP.svg"),this.$getImageAssetObject("images","tracktypes","VS.svg"),this.$getImageAssetObject("images","tracktypes","SF.svg")]}},head:function(){return{title:"Tracks",meta:[]}}},s=n(61),i=Object(s.a)(a,(function(){var t=this,e=t._self._c;return e("SectionsPageContainer",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}},[e("SectionsAlternatingSubSections",{attrs:{page:t.pageName}})],1)}),[],!1,null,null,null);e.default=i.exports;installComponents(i,{SectionsAlternatingSubSections:n(1379).default,SectionsPageContainer:n(1329).default})}}]);