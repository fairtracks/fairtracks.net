(window.webpackJsonp=window.webpackJsonp||[]).push([[2,41,49,54,55],{1110:function(t,e,n){},1112:function(t,e,n){"use strict";n.r(e);var i={props:{imageAsset:{type:Object,required:!0},altText:{type:String,default:""},styleText:{type:String,default:""}}},o=n(22),s=Object(o.a)(i,(function(){return(0,this._self._c)("noscript",{inlineTemplate:{render:function(){var t=this;return(0,t._self._c)("div",{staticClass:"fill-height attach-classes",style:'background-image: url("'.concat(t.imageAsset.optimizedImagePath,'"  ); ').concat(t.styleText)})},staticRenderFns:[]}})}),[],!1,null,null,null);e.default=s.exports},1113:function(t,e,n){"use strict";n(1110)},1114:function(t,e,n){"use strict";n.r(e);var i={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1}}},o=(n(1113),n(22)),s=n(25),r=n.n(s),a=n(184),l=Object(o.a)(i,(function(){var t=this,e=t._self._c;return t.imageAsset.isSvgImage||t.$config.optimizeImages?e("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,alt:t.alt,behind:""},scopedSlots:t._u([{key:"svgImgComponent",fn:function(n){var i=n.imageAsset,o=n.styleText;return[e("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:o,attrs:{"data-bgset":i.optimizedImagePath,"data-sizes":"auto"}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"fill-height slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":i,"style-text":o}})]}},{key:"imgComponent",fn:function(n){var i=n.imageAsset,o=n.styleText;return[e("div",{staticClass:"lazyload fill-height center-background attach-classes hide-with-noscript",class:t.contain?"contain-background":"cover-background",style:o,attrs:{"data-bgset":"".concat(i.responsiveWebpImage.srcSet," [type: image/webp] |\n                      ").concat(i.responsiveImage.srcSet),"data-sizes":"auto"}}),t._v(" "),e("UiNoScriptBackgroundImg",{staticClass:"slot-center-background",class:t.contain?"slot-contain-background":"slot-cover-background",attrs:{"image-asset":i,"style-text":o}})]}}],null,!1,1036633756)}):e("v-img",{class:t.contain?"full-size":"auto-size",staticStyle:{"z-index":"-1"},attrs:{src:t.imageAsset.optimizedImagePath,alt:t.alt,contain:t.contain,"min-height":t.minHeight}})}),[],!1,null,null,null);e.default=l.exports;r()(l,{UiNoScriptBackgroundImg:n(1112).default,UiSmartImgFileTypesWrapper:n(452).default}),r()(l,{VImg:a.a})},1117:function(t,e,n){"use strict";n.r(e);var i=n(115),o=n(453);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={props:{id:{type:String,default:null},href:{type:String,default:null},to:{type:String,default:null},text:{type:String,default:""},icon:{type:String,default:""},large:{type:Boolean,default:!1},xLarge:{type:Boolean,default:!1},small:{type:Boolean,default:!1},xSmall:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:function(){return{prevButtonHoverId:""}},computed:r(r({},Object(i.b)({buttonHoverId:function(t){return t.buttonHover.buttonHoverId}})),{},{shouldHover:function(){return this.doHover&&""===this.buttonHoverId}}),mounted:function(){document.addEventListener("mouseup",this.unsetButtonHoverId)},destroyed:function(){document.removeEventListener("mouseup",this.unsetButtonHoverId)},methods:{setButtonHoverId:function(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit(o.BUTTON_HOVER_M_SET_ID,t)},unsetButtonHoverId:function(){this.prevButtonHoverId="",this.$store.commit(o.BUTTON_HOVER_M_SET_ID,this.prevButtonHoverId)}}},c=n(22),u=n(25),h=n.n(u),d=n(268),m=n(239),p=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"simplebutton"},[e("v-btn",{class:"".concat(t.$vuetify.theme.dark?"primary":"secondary").concat(t.shouldHover?" custom-hover":""),attrs:{id:t.id,large:t.large,"x-large":t.xLarge,small:t.small,"x-small":t.xSmall,href:t.href,"to:":t.to,ripple:!1,nuxt:!!t.to||null},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseout:function(e){return t.unsetButtonHoverId()},click:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()}}},[t.icon?e("v-icon",{staticClass:"pr-3 center"},[t._v("\n        "+t._s(t.icon)+"\n      ")]):t._e(),t._v("\n      "+t._s(t.text)+"\n    ")],1)],1)}),[],!1,null,null,null);e.default=p.exports;h()(p,{VBtn:d.a,VIcon:m.a})},1128:function(t,e,n){"use strict";var i=n(146),o=n(45),s=n(8),r=n(9);e.a=Object(s.a)(i.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(r.c)("v-hover should only contain a single element",this),t)):(Object(r.c)("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},1129:function(t,e,n){"use strict";var i=n(145);e.a=i.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return i.a.options.computed.classes.call(this)}},methods:{genData:i.a.options.methods.genData}})},1137:function(t,e,n){},1138:function(t,e,n){},1170:function(t,e,n){"use strict";e.a={methods:{selectByComponentWidthUnbound:function(t,e,n){return n>=1888&&"xl"in t?t.xl:n>=1248&&"lg"in t?t.lg:n>=960&&"md"in t?t.md:n>=600&&"sm"in t?t.sm:"xs"in t?t.xs:e},calcComponentHeightAsStringUnbound:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return"".concat(n*t+e,"px")}}}},1194:function(t,e,n){"use strict";n(1137),n(1138);var i=n(267),o=n(451),s=n(91),r=n(145);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=r.a.extend({name:"v-window",directives:{Touch:i.a},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return l(l({},r.a.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=(this.internalReverse?!this.isReverse:this.isReverse)?"-reverse":"";return"v-window-".concat(t).concat(e,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,n){return t.internalValue===t.getValue(e,n)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,n){var i,r,a,l=this,c={click:function(t){t.stopPropagation(),l.changedByDelimiters=!0,n()}},u={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},h=null!=(i=null==(r=(a=this.$scopedSlots)[t])?void 0:r.call(a,{on:c,attrs:u}))?i:[this.$createElement(o.a,{props:{icon:!0},attrs:u,on:c},[this.$createElement(s.a,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},h)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"==typeof e){var n=this.genIcon("prev",e,this.prev);n&&t.push(n)}var i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&i&&"string"==typeof i){var o=this.genIcon("next",i,this.next);o&&t.push(o)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length;return this.items[e].disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length;return this.items[e].disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var n=this.items.length,i=n-1;return n<=2?t<e:t===i&&0===e||(0!==t||e!==i)&&t<e}},render:function(t){var e=this,n={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var i=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};n.directives.push({name:"touch",value:i})}return t("div",n,[this.genContainer()])}}),h=n(273),d=n(1129),m=n(0),p=n(9);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a=u.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return f(f({},u.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(p.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:u.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var r=this.$createElement(o.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(s.a,{props:{size:18}},this.delimiterIcon)]);n.push(r)}return this.$createElement(d.a,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(h.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=u.options.render.call(this,t);return e.data.style="height: ".concat(Object(m.h)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},1195:function(t,e,n){"use strict";var i=n(151),o=n(144),s=n(267),r=n(0),a=n(8),l=Object(a.a)(i.a,Object(o.a)("windowGroup","v-window-item","v-window")).extend().extend().extend({name:"v-window-item",directives:{Touch:s.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(r.h)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(r.h)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),c=n(184),u=n(59);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=Object(a.a)(l,u.a);e.a=p.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(c.a,{staticClass:"v-carousel__item",props:d(d({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(r.s)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,n=t.data;return n.staticClass="v-window-item",n.directives.push({name:"show",value:this.isActive}),this.$createElement(e,n,this.genDefaultSlot())}}})},1200:function(t,e,n){},1203:function(t,e,n){"use strict";n.r(e);var i={mixins:[{mixins:[n(1170).a],data:function(){return{componentWidth:void 0,componentHeight:void 0,componentKey:0,componentRef:void 0}},computed:{componentHorizontal:function(){return this.componentHeight<this.componentWidth},componentHorizontalAndVeryWide:function(){return 1.7*this.componentHeight<this.componentWidth}},mounted:function(){window.addEventListener("resize",this.onResizeWindow),this.componentKey+=1,this.onResizeWindow()},destroyed:function(){window.removeEventListener("resize",this.onResizeWindow)},methods:{onResizeWindow:function(t){void 0!==this.$refs[this.componentRef]&&(this.componentWidth=this.$refs[this.componentRef].clientWidth,this.componentHeight=this.$refs[this.componentRef].clientHeight)},selectByComponentWidth:function(t,e){return this.selectByComponentWidthUnbound(t,e,this.componentWidth)},calcComponentHeightAsString:function(t,e){return this.calcComponentHeightAsStringUnbound(t,e,this.componentHeight)}}}],props:{carouselId:{type:String,required:!0},slidesFiles:{type:Object,default:function(){}},height:{type:String,required:!0}},data:function(){return{componentRef:"carousel-section"}},methods:{showFullPageImg:function(t){return"fullPage"===this._calcLayoutType(t)},showLeftToRightImg:function(t){return"imgAtTop"===this._calcLayoutType(t)},showTopToBottomImg:function(t){return"sideBySide"===this._calcLayoutType(t)},_calcLayoutType:function(t){var e=null;return t.topToBottomImg&&t.leftToRightImg?e=this.componentHorizontal?"fullPage":"imgAtTop":t.topToBottomImg?e=this.componentHorizontal?"sideBySide":"imgAtTop":t.leftToRightImg&&(e=this.componentHorizontalAndVeryWide?"sideBySide":"imgAtTop"),e},getImageAsset:function(t,e){return t.imageAssetObjects[e.img]},containImage:function(t){return!t.topToBottomImg||null}}},o=(n(1254),n(22)),s=n(25),r=n.n(s),a=n(1194),l=n(1195),c=n(1099),u=n(1128),h=n(1100),d=Object(o.a)(i,(function(){var t=this,e=t._self._c;return e("section",[e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var i=n.hover;return[e("div",{key:t.componentKey,ref:"carousel-section"},[e("v-carousel",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Tip: move mouse pointer away from carousel to resume auto-cycling of slides",delay:{show:1e3},placement:"bottom"},expression:"{\n            content: 'Tip: move mouse pointer away from carousel to resume auto-cycling of slides',\n            delay: { show: 1000 },\n            placement: 'bottom',\n          }"}],attrs:{id:t.carouselId,dark:"",cycle:!i,"show-arrows-on-hover":"",draggable:"true","hide-delimiter-background":"",height:t.height}},t._l(t.slidesFiles.markdownFiles,(function(n,i){return e("v-carousel-item",{key:i,staticClass:"gradient-fill-carousel",class:t.$vuetify.theme.dark?"background-dark":"background-light",attrs:{src:t.showFullPageImg(n)&&!t.$config.optimizeImages?t.getImageAsset(t.slidesFiles,n).optimizedImagePath:null,dark:""}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFullPageImg(n),expression:"showFullPageImg(slideMdFile)"}],staticClass:"v-responsive fill-height"},[e("UiSmartBackgroundImg",{directives:[{name:"show",rawName:"v-show",value:t.$config.optimizeImages,expression:"$config.optimizeImages"}],attrs:{"image-asset":t.getImageAsset(t.slidesFiles,n)}}),t._v(" "),e("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12","align-self":"end"}},[e("UiCarouselText",{class:t.selectByComponentWidth({md:"px-12 pb-12",sm:"px-8 pb-8"},"px-4 pb-4"),attrs:{"button-to-right":!0,"slide-markdown-file":n,"carousel-width":t.componentWidth}})],1)],1)],1),t._v(" "),e("v-row",{directives:[{name:"show",rawName:"v-show",value:t.showLeftToRightImg(n),expression:"showLeftToRightImg(slideMdFile)"}],staticClass:"fill-height",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("UiSmartImg",{attrs:{"max-height":t.selectByComponentWidth({sm:t.componentHorizontal?t.calcComponentHeightAsString(.6,0):t.calcComponentHeightAsString(.75,0)},t.calcComponentHeightAsString(.5,0)),f:"","image-asset":t.getImageAsset(t.slidesFiles,n),"align-self":"start","crop-bottom":!!n.topToBottomImg||null,behind:""}})],1),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("UiCarouselText",{class:t.selectByComponentWidth({md:"pa-12",sm:"pa-8"},"pa-4"),attrs:{"button-to-right":t.componentHorizontal,"slide-markdown-file":n,"carousel-width":t.componentWidth}})],1)],1),t._v(" "),e("v-row",{directives:[{name:"show",rawName:"v-show",value:t.showTopToBottomImg(n),expression:"showTopToBottomImg(slideMdFile)"}],staticClass:"fill-height",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"6","align-self":"center"}},[e("UiSmartImg",{class:n.topToBottomImg?null:"cropImgBottom",attrs:{"image-asset":t.getImageAsset(t.slidesFiles,n),"max-height":t.calcComponentHeightAsString(1),contain:"",behind:""}})],1),t._v(" "),e("v-col",{class:t.selectByComponentWidth({md:"pa-12"},"pa-4"),attrs:{cols:"6","align-self":"center"}},[e("UiCarouselText",{attrs:{"button-to-right":!1,"slide-markdown-file":n,"carousel-width":t.componentWidth}})],1)],1)],1)})),1)],1)]}}])})],1)}),[],!1,null,null,null);e.default=d.exports;r()(d,{UiSmartBackgroundImg:n(1114).default,UiCarouselText:n(1230).default,UiSmartImg:n(266).default}),r()(d,{VCarousel:a.a,VCarouselItem:l.a,VCol:c.a,VHover:u.a,VRow:h.a})},1230:function(t,e,n){"use strict";n.r(e);var i={mixins:[n(1170).a],props:{buttonToRight:{type:Boolean},slideMarkdownFile:{type:Object,required:!0},carouselWidth:{type:Number,default:void 0}}},o=n(22),s=n(25),r=n.n(s),a=n(1099),l=n(1100),c=Object(o.a)(i,(function(){var t=this,e=t._self._c;return e("v-row",{attrs:{"no-gutters":"","align-self":"center"}},[e("v-col",{attrs:{cols:"12"}},[e("div",{staticClass:"font-weight-black",class:t.selectByComponentWidthUnbound({lg:t.buttonToRight?"text-h3":"text-h4",md:"text-h4",sm:"text-h5"},"text-h6",t.carouselWidth)},[t._v("\n        "+t._s(t.slideMarkdownFile.title)+"\n      ")])]),t._v(" "),e("v-col",{directives:[{name:"show",rawName:"v-show",value:t.buttonToRight,expression:"buttonToRight"}],attrs:{cols:t.selectByComponentWidthUnbound({sm:9},8,t.carouselWidth)}},[e("div",{class:t.selectByComponentWidthUnbound({md:"text-body-1",sm:"text-body-2"},"text-caption",t.carouselWidth)},[e("nuxt-content",{attrs:{document:t.slideMarkdownFile}})],1)]),t._v(" "),e("v-col",{directives:[{name:"show",rawName:"v-show",value:t.buttonToRight,expression:"buttonToRight"}],staticClass:"pl-4",attrs:{"align-self":"center",cols:t.selectByComponentWidthUnbound({sm:3},4,t.carouselWidth)}},[e("UiStyledButton",{attrs:{href:t.slideMarkdownFile.href,text:"More Info","x-large":t.selectByComponentWidthUnbound({md:!0},!1,t.carouselWidth)}})],1),t._v(" "),e("v-col",{directives:[{name:"show",rawName:"v-show",value:!t.buttonToRight,expression:"!buttonToRight"}],attrs:{cols:"12"}},[e("p",{class:t.selectByComponentWidthUnbound({md:"text-body-1 mb-5",sm:"text-body-2 mb-3"},"text-caption mb-2",t.carouselWidth)},[e("nuxt-content",{attrs:{document:t.slideMarkdownFile}})],1),t._v(" "),e("UiStyledButton",{staticClass:"ma-auto",attrs:{href:t.slideMarkdownFile.href,text:"More Info","x-large":t.selectByComponentWidthUnbound({md:!0},!1,t.carouselWidth)}})],1)],1)}),[],!1,null,null,null);e.default=c.exports;r()(c,{UiStyledButton:n(1117).default}),r()(c,{VCol:a.a,VRow:l.a})},1254:function(t,e,n){"use strict";n(1200)},451:function(t,e,n){"use strict";var i=n(268);e.a=i.a}}]);