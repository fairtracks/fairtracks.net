(window.webpackJsonp=window.webpackJsonp||[]).push([[58,33,34,35,37,38,39,42,48,49,51,52,54,55],{1110:function(t,e,i){},1111:function(t,e,i){},1112:function(t,e,i){"use strict";i.r(e);var n={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}}},a=i(22),s=Object(a.a)(n,(function(){return(0,this._self._c)("noscript",{inlineTemplate:{render:function(){var t=this;return(0,t._self._c)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"  ); ').concat(t.styleText)})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=s.exports},1113:function(t,e,i){"use strict";i(1110)},1114:function(t,e,i){"use strict";i.r(e);var n={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1}}},a=(i(1113),i(22)),s=i(25),o=i.n(s),r=i(184),l=Object(a.a)(n,(function(){var t=this,e=t._self._c;return t.imageAsset.isSvgImage||t.$config.optimizeImages?e("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,alt:t.alt,behind:""},scopedSlots:t._u([{key:"svgImgComponent",fn:function(i){var n=i.imageAsset,a=i.styleText;return[e("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:a,attrs:{"data-bgset":n.optimizedImagePath,"data-sizes":"auto"}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":n,"style-text":a}})]}},{key:"imgComponent",fn:function(i){var n=i.imageAsset,a=i.styleText;return[e("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:a,attrs:{"data-bgset":"".concat(n.responsiveWebpImage.srcSet," [type: image/webp] |\n                      ").concat(n.responsiveImage.srcSet),"data-sizes":"auto"}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":n,"style-text":a}})]}}],null,!1,1036633756)}):e("v-img",{class:t.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain,"min-height":t.minHeight}})}),[],!1,null,null,null);e.default=l.exports;o()(l,{UiNoScriptBackgroundImg:i(1112).default,UiSmartImgFileTypesWrapper:i(452).default}),o()(l,{VImg:r.a})},1115:function(t,e,i){"use strict";i.r(e);var n={props:{title:{type:String,default:""}}},a=i(22),s=Object(a.a)(n,(function(){var t=this;return(0,t._self._c)("h3",{staticClass:"text-h4 font-weight-bold mb-5"},[t._v(t._s(t.title))])}),[],!1,null,null,null);e.default=s.exports},1116:function(t,e,i){"use strict";i(1111)},1117:function(t,e,i){"use strict";i.r(e);var n=i(115),a=i(453);function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l={props:{id:{type:String,default:null},href:{type:String,default:null},to:{type:String,default:null},text:{type:String,default:""},icon:{type:String,default:""},large:{type:Boolean,default:!1},xLarge:{type:Boolean,default:!1},small:{type:Boolean,default:!1},xSmall:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:function(){return{prevButtonHoverId:""}},computed:o(o({},Object(n.b)({buttonHoverId:function(t){return t.buttonHover.buttonHoverId}})),{},{shouldHover:function(){return this.doHover&&""===this.buttonHoverId}}),mounted:function(){document.addEventListener("mouseup",this.unsetButtonHoverId)},destroyed:function(){document.removeEventListener("mouseup",this.unsetButtonHoverId)},methods:{setButtonHoverId:function(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit(a.BUTTON_HOVER_M_SET_ID,t)},unsetButtonHoverId:function(){this.prevButtonHoverId="",this.$store.commit(a.BUTTON_HOVER_M_SET_ID,this.prevButtonHoverId)}}},c=i(22),u=i(25),d=i.n(u),m=i(268),h=i(239),f=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"simplebutton"},[e("v-btn",{class:"".concat(t.$vuetify.theme.dark?"primary":"secondary").concat(t.shouldHover?" custom-hover":""),attrs:{id:t.id,large:t.large,"x-large":t.xLarge,small:t.small,"x-small":t.xSmall,href:t.href,"to:":t.to,ripple:!1,nuxt:!!t.to||null},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseout:function(e){return t.unsetButtonHoverId()},click:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()}}},[t.icon?e("v-icon",{staticClass:"pr-3 center"},[t._v("\n        "+t._s(t.icon)+"\n      ")]):t._e(),t._v("\n      "+t._s(t.text)+"\n    ")],1)],1)}),[],!1,null,null,null);e.default=f.exports;d()(f,{VBtn:m.a,VIcon:h.a})},1118:function(t,e,i){"use strict";i.r(e);function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==i)return;var n,a,s=[],o=!0,r=!1;try{for(i=i.call(t);!(o=(n=i.next()).done)&&(s.push(n.value),!e||s.length!==e);o=!0);}catch(t){r=!0,a=t}finally{try{o||null==i.return||i.return()}finally{if(r)throw a}}return s}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var s={mixins:[{computed:{cssVars:function(){var t={};return this.createRgbVarsForThemes(this.$vuetify.theme.themes,t),t}},methods:{isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},hexToRgb:function(t){var e=0,i=0,n=0;return 4===t.length?(e="0x"+t[1]+t[1],i="0x"+t[2]+t[2],n="0x"+t[3]+t[3]):7===t.length&&(e="0x"+t[1]+t[2],i="0x"+t[3]+t[4],n="0x"+t[5]+t[6]),"".concat(+e,", ").concat(+i,", ").concat(+n)},generateRgbVar:function(t,e,i){var n=this.hexToRgb(e);n.includes("NaN")||(i["--v-".concat(t,"-rgb")]=n)},createRgbVarsForThemes:function(t,e){if(void 0!==t)for(var i=0,a=Object.values(t);i<a.length;i++)for(var s=a[i],o=0,r=Object.entries(s);o<r.length;o++){var l=n(r[o],2),c=l[0],u=l[1];if(this.isObject(u))for(var d=0,m=Object.entries(u);d<m.length;d++){var h=n(m[d],2),f=h[0],p=h[1];this.generateRgbVar("".concat(c,"-").concat(f),p,e)}else this.generateRgbVar(c,u,e)}}}}],props:{pageHeader:{type:String,required:!0},pageHeaderImages:{type:Array,default:function(){return[]}}}},o=(i(1116),i(22)),r=i(25),l=i.n(r),c=i(1099),u=i(247),d=i(237),m=i(1100),h=Object(o.a)(s,(function(){var t=this,e=t._self._c;return e("v-responsive",{staticClass:"gradient-fill-header",style:t.cssVars,attrs:{"max-height":"125px","min-height":"75px"}},[e("v-responsive",{staticClass:"mx-auto",attrs:{"aspect-ratio":567/56.3,"max-width":"1258.9"}},[e("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},t._l(t.pageHeaderImages,(function(i,n){return e("v-col",{key:n,attrs:{cols:"4"}},[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},[e("v-responsive",{staticClass:"gradient-fill-header top-level",style:t.cssVars,attrs:{width:"33%",height:"100%","aspect-ratio":189/56.3,"max-height":"150px","min-height":"75px"}},[e("UiSmartBackgroundImg",{attrs:{height:"56.3",width:"189","min-height":"75","image-asset":i,contain:""}})],1)],1)],1)})),1)],1),t._v(" "),e("v-overlay",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.theme.dark,expression:"$vuetify.theme.dark"}],staticClass:"black",staticStyle:{opacity:"0.3"},attrs:{absolute:"","z-index":"3"}}),t._v(" "),e("v-overlay",{attrs:{absolute:"",opacity:"0","z-index":"3"}},[e("h1",{staticClass:"text-md-h2 text-sm-h3 text-h4 font-weight-black text-center"},[t._v("\n        "+t._s(t.pageHeader)+"\n      ")])])],1)}),[],!1,null,null,null);e.default=h.exports;l()(h,{UiSmartBackgroundImg:i(1114).default}),l()(h,{VCol:c.a,VOverlay:u.a,VResponsive:d.a,VRow:m.a})},1119:function(t,e,i){"use strict";i.r(e);var n={props:{pageHeader:{type:String,default:""},pageHeaderImages:{type:Array,default:function(){return[]}},greyBackground:{type:Boolean,default:!1},sectionId:{type:String,default:null},setMargins:{type:Boolean,default:!1}}},a=i(22),s=i(25),o=i.n(s),r=i(1109),l=Object(a.a)(n,(function(){var t=this,e=t._self._c;return e("section",{class:t.greyBackground?t.$vuetify.theme.dark?"primary":"grey lighten-4":null,attrs:{id:t.sectionId}},[e("UiPageHeaderBanner",{directives:[{name:"show",rawName:"v-show",value:t.pageHeader,expression:"pageHeader"}],staticClass:"white",attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}}),t._v(" "),e("v-container",{class:t.setMargins?"pa-md-8 pa-4":"pa-0",staticStyle:{"max-width":"1700px"},attrs:{fluid:""}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=l.exports;o()(l,{UiPageHeaderBanner:i(1118).default}),o()(l,{VContainer:r.a})},1120:function(t,e,i){},1123:function(t,e,i){"use strict";i(1120)},1124:function(t,e,i){},1128:function(t,e,i){"use strict";var n=i(146),a=i(45),s=i(8),o=i(9);e.a=Object(s.a)(n.a,a.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(o.c)("v-hover should only contain a single element",this),t)):(Object(o.c)("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},1130:function(t,e,i){"use strict";i.r(e);var n=i(68),a={props:{value:Boolean,imageAsset:{type:Object,required:!0},alt:{type:String,default:""},buttons:{type:Array,default:function(){return[]}},cropBottom:{type:Boolean,default:!1}},data:function(){return{mdiClose:n.mdiClose}},computed:{show:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},s=(i(1123),i(22)),o=i(25),r=i.n(o),l=i(268),c=i(248),u=i(190),d=i(1099),m=i(1149),h=i(239),f=i(247),p=i(237),g=i(1100),v=Object(s.a)(a,(function(){var t=this,e=t._self._c;return e("v-dialog",{attrs:{"content-class":t.cropBottom?"size-from-contents max-height-95":"size-from-contents no-max-height"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("v-card",[e("v-row",{attrs:{"no-gutters":"","fill-height":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-overlay",{staticClass:"full-overlay",attrs:{absolute:"",opacity:"0","z-index":"1"}},[e("v-responsive",{attrs:{height:"100%"}},[e("v-row",{staticClass:"mb-auto",attrs:{"fill-height":"","no-gutters":"",align:"start",justify:"end"}},[e("v-col",{staticClass:"pa-2 ma-0",attrs:{cols:"auto","align-self":"start"}},[e("div",{staticClass:"simplebutton"},[e("v-btn",{staticClass:"pa-0",attrs:{width:"24px",height:"24px","min-width":"24px",ripple:!1},on:{click:function(e){t.show=!1}}},[e("v-icon",[t._v(t._s(t.mdiClose))])],1)],1)])],1)],1)],1),t._v(" "),e("UiSmartImg",{class:t.cropBottom?"mx-10 mt-10 overflow-y-auto thin-border above-overlay":null,attrs:{"image-asset":t.imageAsset,alt:t.alt,"max-height":t.cropBottom?"calc(95vh - 151px)":"calc(95vh - 110px)",width:t.cropBottom?"calc(90vw - 82px)":"90vw","crop-bottom":t.cropBottom}})],1)],1),t._v(" "),e("v-card-actions",[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},t._l(t.buttons,(function(i,n){return e("v-col",{key:"s_"+n,staticClass:"pa-2 ma-0",attrs:{cols:"auto","align-self":"end"}},[e("UiStyledButton",{staticClass:"text-weight-light above-overlay",attrs:{id:"btn_"+n,href:i.href,to:i.to,text:i.text,icon:i.icon,"x-large":""},on:{"btn-click":function(e){!i.link&&(t.show=!1)}}})],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=v.exports;r()(v,{UiSmartImg:i(266).default,UiStyledButton:i(1117).default}),r()(v,{VBtn:l.a,VCard:c.a,VCardActions:u.a,VCol:d.a,VDialog:m.a,VIcon:h.a,VOverlay:f.a,VResponsive:p.a,VRow:g.a})},1148:function(t,e,i){},1149:function(t,e,i){"use strict";i(1124);var n=i(1102),a=i(116),s=i(147),o=i(271),r=i(272),l=i(269),c=i(270),u=i(148),d=i(8),m=i(9),h=i(0);function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function p(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(Object(i),!0).forEach((function(e){y(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function g(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return v(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function y(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var b=Object(d.a)(s.a,o.a,r.a,l.a,c.a,a.a);e.a=b.extend({name:"v-dialog",directives:{ClickOutside:u.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return y(t={},"v-dialog ".concat(this.contentClass).trim(),!0),y(t,"v-dialog--active",this.isActive),y(t,"v-dialog--persistent",this.persistent),y(t,"v-dialog--fullscreen",this.fullscreen),y(t,"v-dialog--scrollable",this.scrollable),y(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(m.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):r.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){var e,i;null!=(e=t.$refs.dialog)&&e.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,null==(i=t.$refs.dialog)||i.focus());t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===h.x.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=g(this.$refs.dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(n.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:p({role:"dialog","aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=p(p({},t.style),{},{maxWidth:Object(h.h)(this.maxWidth),width:Object(h.h)(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},1150:function(t,e,i){},1178:function(t,e,i){"use strict";i(1148)},1179:function(t,e,i){"use strict";i(1150)},1204:function(t,e,i){"use strict";i.r(e);var n={props:{card:{type:Object,default:function(){}}},data:function(){return{down:!1}}},a=(i(1178),i(22)),s=i(25),o=i.n(s),r=i(248),l=i(1128),c=Object(a.a)(n,(function(){var t=this,e=t._self._c;return e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(i){var n=i.hover;return[e("v-card",{staticClass:"transition-swing mx-auto",class:n?t.down?"halfzoom":"zoom":"notzoom",staticStyle:{"z-index":"2"},attrs:{elevation:n?t.down?6:12:2,href:t.card.link?t.card.link:null,ripple:!1,"max-width":t.card.maxWidth?t.card.maxWidth:null},on:{mousedown:function(e){t.down=!0},mouseup:function(e){t.down=!1},mouseleave:function(e){t.down=!1},click:function(e){return t.$emit("btn-click",!0)}}},[e("UiSmartImg",{attrs:{"image-asset":t.card.img}})],1)]}}])})}),[],!1,null,"4777290a",null);e.default=c.exports;o()(c,{UiSmartImg:i(266).default}),o()(c,{VCard:r.a,VHover:l.a})},1205:function(t,e,i){"use strict";i.r(e);var n={props:{title:{type:String,default:""}}},a=i(22),s=i(25),o=i.n(s),r=i(1099),l=i(1100),c=Object(a.a)(n,(function(){var t=this,e=t._self._c;return e("section",[e("v-row",{staticClass:"ma-0 pb-4",attrs:{"no-gutters":""}},[e("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),e("v-col",{staticClass:"ma-0",attrs:{cols:"12"}},[t._t("default")],2)],1)],1)}),[],!1,null,null,null);e.default=c.exports;o()(c,{UiMinorTitle:i(1115).default}),o()(c,{VCol:r.a,VRow:l.a})},1206:function(t,e,i){"use strict";i.r(e);var n={props:{title:{type:String,default:""},contactPoints:{type:Array,default:function(){return[]}},githubIssues:{type:Object,default:null}}},a=i(22),s=i(25),o=i.n(s),r=i(1099),l=i(239),c=i(240),u=i(138),d=i(53),m=i(112),h=i(1100),f=Object(a.a)(n,(function(){var t=this,e=t._self._c;return e("section",[e("v-row",{staticClass:"ma-0",attrs:{"no-gutters":""}},[e("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-list",{staticClass:"transparent",attrs:{"two-line":"","max-width":"100%"}},[t._l(t.contactPoints,(function(i,n){return e("v-list-item",{key:"c_"+n},[e("v-list-item-icon",[e("v-icon",{attrs:{color:t.$vuetify.theme.dark?"accent":"primary"}},[t._v("\n                "+t._s(i.icon))])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n                "+t._s(i.title)+"\n              ")]),t._v(" "),e("v-list-item-title",{staticClass:"text-wrap"},[e("a",{attrs:{href:i.link}},[t._v("\n                  "+t._s(i.linkText)+"\n                ")])])],1)],1)})),t._v(" "),t.githubIssues?e("v-list-item",[e("v-list-item-icon",[e("v-icon",{attrs:{color:t.$vuetify.theme.dark?"accent":"primary"}},[t._v("\n                "+t._s(t.githubIssues.icon))])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n                "+t._s(t.githubIssues.title)+"\n              ")]),t._v(" "),t._l(t.githubIssues.repos,(function(i,n){return e("v-list-item-title",{key:"r_"+n,staticClass:"text-wrap"},[e("a",{attrs:{href:i.issuesLink}},[t._v("\n                  "+t._s(i.title)+"\n                ")])])})),t._v(" "),e("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n                "+t._s(t.githubIssues.endComment)+"\n                "),e("nuxt-link",{attrs:{to:t.githubIssues.endCommentPageLink}},[t._v("\n                  "+t._s(t.githubIssues.endCommentPageText)+"\n                ")])],1)],2)],1):t._e()],2)],1)],1)],1)}),[],!1,null,null,null);e.default=f.exports;o()(f,{UiMinorTitle:i(1115).default}),o()(f,{VCol:r.a,VIcon:l.a,VList:c.a,VListItem:u.a,VListItemContent:d.a,VListItemIcon:m.a,VListItemTitle:d.c,VRow:h.a})},1207:function(t,e,i){"use strict";i.r(e);var n={props:{title:{type:String,default:""},text:{type:String,default:""},references:{type:Array,default:function(){return[]}}}},a=i(22),s=i(25),o=i.n(s),r=i(1099),l=i(239),c=i(240),u=i(138),d=i(53),m=i(112),h=i(1100),f=Object(a.a)(n,(function(){var t=this,e=t._self._c;return e("section",[e("v-row",{staticClass:"ma-0 pt-16",attrs:{"no-gutters":""}},[e("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("p",{staticClass:"font-italic"},[t._v("\n          "+t._s(t.text)+"\n        ")])]),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-list",t._l(t.references,(function(i,n){return e("v-list-item",{key:"r_"+n},[e("v-list-item-icon",[e("v-icon",{attrs:{color:"primary"}},[t._v(" "+t._s(i.icon))])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{staticClass:"text-wrap"},[t._v("\n                "+t._s(i.text)+"\n                "),i.doi?e("a",{attrs:{href:"https://doi.org/"+i.doi}},[t._v("doi: "+t._s(i.doi))]):t._e()])],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=f.exports;o()(f,{UiMinorTitle:i(1115).default}),o()(f,{VCol:r.a,VIcon:l.a,VList:c.a,VListItem:u.a,VListItemContent:d.a,VListItemIcon:m.a,VListItemTitle:d.c,VRow:h.a})},1208:function(t,e,i){"use strict";i.r(e);var n={props:{title:{type:String,default:""},logos:{type:Array,default:function(){return[]}}}},a=i(22),s=i(25),o=i.n(s),r=i(1099),l=i(237),c=i(1100),u=Object(a.a)(n,(function(){var t=this,e=t._self._c;return e("section",[e("v-row",{staticClass:"ma-0 pt-16",attrs:{"no-gutters":""}},[e("UiMinorTitle",{attrs:{title:t.title}}),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-responsive",{attrs:{"aspect-ratio":t.$vuetify.breakpoint.mdAndUp?.35:.7,"max-height":"1000"}},[e("v-row",{staticClass:"ma-0 pt-0 fill-height d-flow align-content-space-around"},t._l(t.logos,(function(i,n){return e("v-col",{key:n,staticClass:"pa-8 my-auto",attrs:{cols:"6"}},[e("UiSmartImg",{staticClass:"ma-auto",attrs:{"image-asset":t.$getImageAssetObject("images","logos",i.filename),contain:"","max-width":"200",width:i.width,height:i.height}})],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports;o()(u,{UiMinorTitle:i(1115).default,UiSmartImg:i(266).default}),o()(u,{VCol:r.a,VResponsive:l.a,VRow:c.a})},1209:function(t,e,i){"use strict";i.r(e);var n={props:{teamName:{type:String,default:""},ourTeam:{type:Array,default:function(){return[]}}}},a=(i(1179),i(22)),s=i(25),o=i.n(s),r=i(1099),l=i(1100),c=Object(a.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"pa-16",class:t.$vuetify.theme.dark?"primary":"grey lighten-4"},[e("v-row",{attrs:{"no-gutters":""}},[e("UiMinorTitle",{attrs:{title:t.teamName}}),t._v(" "),t._l(t.ourTeam,(function(i,n){return e("v-col",{key:"group-".concat(n),attrs:{cols:"12"}},[e("h4",{staticClass:"text-h5 text-center pb-5 pt-15 px-5"},[t._v(t._s(i.group))]),t._v(" "),e("v-row",t._l(i.members,(function(i,n){return e("v-col",{key:"person-".concat(n),attrs:{cols:"12"}},[e("v-row",{staticClass:"mx-auto team-column py-0",class:{"flex-row-reverse":n%2==1}},[e("v-col",{staticClass:"pa-0",attrs:{cols:"6"}},[e("UiSmartImg",{class:n%2==1?"mr-auto":"ml-auto",attrs:{"image-asset":t.$getImageAssetObject("images","team",i.photo)}})],1),t._v(" "),e("v-col",{staticClass:"my-auto",attrs:{cols:"6"}},[e("v-row",{staticClass:"pa-4",class:n%2==1?"text-right":"text-left"},[e("div",{staticClass:"text-h6 font-weight-bold"},[t._v("\n                    "+t._s(i.name)+"\n                  ")]),t._v(" "),i.position?e("div",{staticClass:"text-uppercase"},[t._v("\n                    "+t._s(i.position)+"\n                  ")]):t._e()])],1)],1)],1)})),1)],1)})),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("h4",{staticClass:"text-h6 font-italic font-weight-light text-center pb-5 pt-15 px-5"},[t._v("\n          * Has changed affiliation since contributing to FAIRtracks\n        ")])])],2)],1)}),[],!1,null,"1ea515ee",null);e.default=c.exports;o()(c,{UiMinorTitle:i(1115).default,UiSmartImg:i(266).default}),o()(c,{VCol:r.a,VRow:l.a})},1272:function(t,e,i){"use strict";i.r(e);var n=i(68),a={data:function(){return{pageHeader:"Community",pageHeaderImages:[this.$getImageAssetObject("images","tracktypes","LP.svg"),this.$getImageAssetObject("images","tracktypes","LS.svg"),this.$getImageAssetObject("images","tracktypes","LBP.svg")],surveyTitle:"Fill out our community survey!",surveyCard:{link:"",img:this.$getImageAssetObject("images","media","FAIRtracks-survey-ad-webpage.png"),maxWidth:"850px"},showSurveyDialog:!1,surveyDialogButtons:[{text:"Fill out survey!",link:"https://fairtracks.net/survey"}],contactUsTitle:"Contact us!",contactPoints:[{icon:n.mdiBullhornVariant,title:"Join the FAIRtracks announcement mailing list:",link:"https://sympa.uio.no/elixir.no/subscribe/fairtracks-info",linkText:"Subscribe here"},{icon:n.mdiTwitter,title:"Follow us on Twitter:",link:"https://twitter.com/fairtracks",linkText:"@fairtracks"},{icon:n.mdiEmail,title:"Send an e-mail to the international FAIRtracks team:",link:"mailto:fairtracks@elixir.no",linkText:"fairtracks@elixir.no"}],githubIssues:{icon:n.mdiGithub,title:"Submit an issue to a GitHub repo:",repos:[{title:"The FAIRtracks draft standard",issuesLink:"https://github.com/fairtracks/fairtracks_standard/issues"},{title:"TrackFind",issuesLink:"https://github.com/elixir-oslo/trackfind/issues"},{title:"The FAIRtracks validator",issuesLink:"https://github.com/fairtracks/fairtracks_validator/issues"}],endComment:"...or any of the others listed on the",endCommentPageLink:"/code/",endCommentPageText:"source code page"},citeUsTitle:"Cite us!",citeUsText:"Please cite our primary publication in any research that uses or extends FAIRtracks:",references:[{icon:n.mdiSchool,text:"Gundersen, S. et al. Recommendations to the FAIRification of genomic track metadata. F1000Res 10, ELIXIR-268 (2021).",doi:"10.12688/f1000research.28449.1"}],recommendationsTitle:"Recommendations",recommendationCard:{link:"https://elixir-europe.org/platforms/interoperability/rirs",img:this.$getImageAssetObject("images","logos","elixir-rir.png")},logosTitle:"Funding / Acknowledgements",logos:[{filename:"elixir-norway.png"},{filename:"elixir-spain.png"},{filename:"embl-ebi.svg",width:"587",height:"181"},{filename:"inb.png"},{filename:"bsc.jpeg"},{filename:"rcn.png"},{filename:"uio.png"},{filename:"uib.png"},{filename:"ntnu.png"}],teamName:"The FAIRtracks team",ourTeam:[{group:"ELIXIR Norway at the Centre for Bioinformatics, University of Oslo (UiO)",members:[{name:"Sveinung Gundersen",position:"",photo:"sveinung-gundersen.png"},{name:"Dmytro Titov*",position:"",photo:"dmytro-titov.png"},{name:"Radmila Kompova*",position:"",photo:"radmila-kompova.png"},{name:"Ahmed Ghanem",position:"",photo:"ahmed-ghanem.png"},{name:"Nazeefa Fatima",position:"",photo:"nazeefa-fatima.png"},{name:"Federico Bianchini",position:"",photo:"federico-bianchini.png"},{name:"Eivind Hovig",position:"",photo:"eivind-hovig.png"}]},{group:"ELIXIR Spain at the Life Sciences Department from the Barcelona Supercomputer Centre (BSC)",members:[{name:"José Mariá Fernández",position:"",photo:"jose-maria-fernandez.png"},{name:"Salvador Capella Gutierrez",position:"",photo:"salvador-capella-gutierrez.png"}]},{group:"The Track Hub Registry group at EMBL-EBI, Hinxton, UK",members:[{name:"Sanjay Boddu",position:"",photo:"sanjay-boddu.png"},{name:"Peter Harrison",position:"",photo:"peter-harrison.png"},{name:"Kieron Taylor*",position:"",photo:"kieron-taylor.png"},{name:"Daniel Zerbino*",position:"",photo:"daniel-zerbino.png"}]},{group:"ELIXIR Norway at the Computational Biology Unit, University of Bergen (UiB)",members:[{name:"Matúš Kalaš",position:"",photo:"matus-kalas.png"}]},{group:"ELIXIR Norway at the Department of Clinical and Molecular Medicine, Norwegian University of Science and Technology (NTNU)",members:[{name:"Finn Drabløs*",position:"",photo:"finn-drablos.png"}]}]}},head:function(){return{title:"Community",meta:[]}}},s=i(22),o=i(25),r=i.n(o),l=i(1099),c=i(1100),u=Object(s.a)(a,(function(){var t=this,e=t._self._c;return e("SectionsPageContainer",{attrs:{"page-header":t.pageHeader,"page-header-images":t.pageHeaderImages}},[e("v-row",{staticClass:"pa-0",attrs:{"no-gutters":""}},[e("v-col",{staticClass:"pa-16",attrs:{md:"6",cols:"12"}},[e("SectionsSubSection",{attrs:{title:t.surveyTitle}},[e("UiClickableCard",{staticClass:"survey",attrs:{card:t.surveyCard},on:{"btn-click":function(e){t.showSurveyDialog=!0}}})],1),t._v(" "),e("UiPopupDialog",{attrs:{buttons:t.surveyDialogButtons,"image-asset":t.surveyCard.img},model:{value:t.showSurveyDialog,callback:function(e){t.showSurveyDialog=e},expression:"showSurveyDialog"}}),t._v(" "),e("SectionsContactUs",{attrs:{title:t.contactUsTitle,"contact-points":t.contactPoints,"github-issues":t.githubIssues}}),t._v(" "),e("SectionsCiteUs",{attrs:{title:t.citeUsTitle,text:t.citeUsText,references:t.references}}),t._v(" "),e("v-row",{staticClass:"pa-0 pt-16",attrs:{"no-gutters":""}},[e("v-col",{attrs:{md:"12",cols:"12"}},[e("SectionsSubSection",{attrs:{title:t.recommendationsTitle}},[e("UiClickableCard",{attrs:{card:t.recommendationCard}})],1)],1)],1),t._v(" "),e("SectionsLogoList",{attrs:{title:t.logosTitle,logos:t.logos}})],1),t._v(" "),e("v-col",{staticClass:"pt-0",attrs:{md:"6",cols:"12"}},[e("SectionsTeamColumn",{staticClass:"fill-height",attrs:{"our-team":t.ourTeam,"team-name":t.teamName}})],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports;r()(u,{UiClickableCard:i(1204).default,SectionsSubSection:i(1205).default,UiPopupDialog:i(1130).default,SectionsContactUs:i(1206).default,SectionsCiteUs:i(1207).default,SectionsLogoList:i(1208).default,SectionsTeamColumn:i(1209).default,SectionsPageContainer:i(1119).default}),r()(u,{VCol:l.a,VRow:c.a})}}]);