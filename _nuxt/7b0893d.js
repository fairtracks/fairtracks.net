(window.webpackJsonp=window.webpackJsonp||[]).push([[3,37,44,45],{1001:function(t,e,i){"use strict";i.r(e);var n={props:{id:{type:String,default:null},href:{type:String,default:null},text:{type:String,default:""},xLarge:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:function(){return{prevButtonHoverId:""}},computed:{buttonHoverId:function(){return this.$store.state.buttonHover.buttonHoverId},shouldHover:function(){return this.doHover&&""===this.buttonHoverId}},methods:{setButtonHoverId:function(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit("buttonHover/setButtonHoverId",t)},unsetButtonHoverId:function(){this.prevButtonHoverId="",this.$store.commit("buttonHover/setButtonHoverId",this.prevButtonHoverId)}}},o=i(29),r=i(44),s=i.n(r),a=i(256),l=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"simplebutton"},[i("v-btn",{staticClass:"secondary",class:t.shouldHover?"custom-hover":null,attrs:{id:t.id,"x-large":t.xLarge,href:t.href,ripple:!1},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseleave:function(e){return t.unsetButtonHoverId(t.id)},click:function(e){return e.stopPropagation(),t.$emit("btn-click",!0)}}},[t._v("\n    "+t._s(t.text)+"\n  ")])],1)}),[],!1,null,null,null);e.default=l.exports;s()(l,{VBtn:a.a})},1003:function(t,e,i){"use strict";var n=i(137);e.a=n.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return n.a.options.computed.classes.call(this)}},methods:{genData:n.a.options.methods.genData}})},1011:function(t,e,i){var n=i(1012);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(12).default)("26754d5a",n,!0,{sourceMap:!1})},1012:function(t,e,i){var n=i(11)(!1);n.push([t.i,".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),t.exports=n},1013:function(t,e,i){var n=i(1014);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(12).default)("4de61803",n,!0,{sourceMap:!1})},1014:function(t,e,i){var n=i(11)(!1);n.push([t.i,".v-window{overflow:hidden}.v-window__container{display:flex;flex-direction:column;height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{-webkit-transform:translateX(-200%);transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{-webkit-transform:translateX(200%);transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{-webkit-transform:translateX(-200%);transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{-webkit-transform:translateX(0);transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{-webkit-transform:translateX(100%);transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{-webkit-transform:translateX(100%);transform:translateX(100%)}.v-window-y-transition-enter{-webkit-transform:translateY(100%);transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{-webkit-transform:translateY(100%);transform:translateY(100%)}",""]),t.exports=n},1017:function(t,e,i){"use strict";var n=i(138),o=i(33),r=i(9),s=i(10);e.a=Object(r.a)(n.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(s.c)("v-hover should only contain a single element",this),t)):(Object(s.c)("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},1074:function(t,e,i){"use strict";i(1011),i(1013);var n=i(258),o=i(432),r=i(88),s=i(137);function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){c(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u=s.a.extend({name:"v-window",directives:{Touch:n.a},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return l(l({},s.a.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=(this.internalReverse?!this.isReverse:this.isReverse)?"-reverse":"";return"v-window-".concat(t).concat(e,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var n,s,a,l=this,c={click:function(t){t.stopPropagation(),l.changedByDelimiters=!0,i()}},u={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},v=null!=(n=null==(s=(a=this.$scopedSlots)[t])?void 0:s.call(a,{on:c,attrs:u}))?n:[this.$createElement(o.a,{props:{icon:!0},attrs:u,on:c},[this.$createElement(r.a,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},v)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"==typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"==typeof n){var o=this.genIcon("next",n,this.next);o&&t.push(o)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length;return this.items[e].disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length;return this.items[e].disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var i=this.items.length,n=i-1;return i<=2?t<e:t===n&&0===e||(0!==t||e!==n)&&t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:n})}return t("div",i,[this.genContainer()])}}),v=i(259),h=i(1003),d=i(0),p=i(10);function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(Object(i),!0).forEach((function(e){w(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function w(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e.a=u.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return m(m({},u.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(p.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:u.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,i=[],n=0;n<e;n++){var s=this.$createElement(o.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",n+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(r.a,{props:{size:18}},this.delimiterIcon)]);i.push(s)}return this.$createElement(h.a,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},i)},genProgress:function(){return this.$createElement(v.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=u.options.render.call(this,t);return e.data.style="height: ".concat(Object(d.h)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},1075:function(t,e,i){"use strict";var n=i(140),o=i(136),r=i(258),s=i(0),a=i(9),l=Object(a.a)(n.a,Object(o.a)("windowGroup","v-window-item","v-window")).extend().extend().extend({name:"v-window-item",directives:{Touch:r.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(s.h)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(s.h)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),c=i(178),u=i(60);function v(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(Object(i),!0).forEach((function(e){d(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var p=Object(a.a)(l,u.a);e.a=p.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(c.a,{staticClass:"v-carousel__item",props:h(h({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(s.s)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,i=t.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(e,i,this.genDefaultSlot())}}})},1082:function(t,e,i){var n=i(1143);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(12).default)("b8d150bc",n,!0,{sourceMap:!1})},1109:function(t,e,i){"use strict";i.r(e);var n={props:{buttonToRight:{type:Boolean},carousel:{type:Object,required:!0}}},o=i(29),r=i(44),s=i.n(r),a=i(981),l=i(982),c=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{"no-gutters":"","fill-height":"","align-self":"center"}},[i("v-col",{directives:[{name:"show",rawName:"v-show",value:t.buttonToRight,expression:"buttonToRight"}],attrs:{cols:t.$vuetify.breakpoint.smAndUp?10:8}},[i("h2",{staticClass:"text-lg-h3 text-md-h4 mb-3 text-sm-h5 text-h6 font-weight-black"},[t._v("\n      "+t._s(t.carousel.heading)+"\n    ")]),t._v(" "),i("p",{staticClass:"mb-5 text-md-body-1 text-sm-body-2 text-caption"},[t._v("\n      "+t._s(t.carousel.subHeading)+"\n    ")])]),t._v(" "),i("v-col",{directives:[{name:"show",rawName:"v-show",value:t.buttonToRight,expression:"buttonToRight"}],attrs:{cols:t.$vuetify.breakpoint.smAndUp?2:4}},[i("UiStyledButton",{attrs:{href:t.carousel.href,text:"More Info","x-large":t.$vuetify.breakpoint.mdAndUp}})],1),t._v(" "),i("v-col",{directives:[{name:"show",rawName:"v-show",value:!t.buttonToRight,expression:"!buttonToRight"}],attrs:{cols:"12"}},[i("div",{staticClass:"text-md-h4 mb-3 text-sm-h5 text-h6 font-weight-black"},[t._v("\n      "+t._s(t.carousel.heading)+"\n    ")]),t._v(" "),i("p",{staticClass:"text-md-body-1 text-sm-body-2 text-caption",class:t.$vuetify.breakpoint.mdAndUp?"mb-5":t.$vuetify.breakpoint.smAndUp?"mb-3":"mb-2"},[t._v("\n      "+t._s(t.carousel.subHeading)+"\n    ")]),t._v(" "),i("UiStyledButton",{attrs:{href:t.carousel.href,text:"More Info","x-large":t.$vuetify.breakpoint.mdAndUp}})],1)],1)}),[],!1,null,null,null);e.default=c.exports;s()(c,{UiStyledButton:i(1001).default}),s()(c,{VCol:a.a,VRow:l.a})},1142:function(t,e,i){"use strict";i(1082)},1143:function(t,e,i){var n=i(11)(!1);n.push([t.i,".cropImgBottom .v-image__image--cover{background-position:top!important}.gradient-fill-carousel>.v-responsive{background:var(--v-primary-lighten1)}.gradient-fill-carousel>.v-responsive>.v-responsive__content{background:linear-gradient(180deg,rgba(0,0,0,.5),20%,rgba(0,0,0,.05))}",""]),t.exports=n},1155:function(t,e,i){"use strict";i.r(e);var n={props:{carouselsData:{type:Array,default:function(){return[]}}},methods:{showFullPageImg:function(t){return this.viewportHorizontal()&&t.topToBottomImg&&t.leftToRightImg},showLeftToRightImg:function(t){return this.$vuetify.breakpoint.mdAndUp&&!t.topToBottomImg||!this.viewportHorizontal()},showTopToBottomImg:function(t){return this.$vuetify.breakpoint.mdAndUp?t.topToBottomImg&&!t.leftToRightImg&&this.viewportHorizontal():this.viewportHorizontal()},viewportHorizontal:function(){if("undefined"!=typeof window)return window.innerHeight<window.innerWidth},containImage:function(t){return!t.topToBottomImg||null}}},o=(i(1142),i(29)),r=i(44),s=i.n(r),a=i(1074),l=i(1075),c=i(981),u=i(1017),v=i(982),h=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[i("v-carousel",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Tip: move mouse pointer away from carousel to resume auto-cycling of slides",delay:{show:2e3},placement:"top"},expression:"{\n        content:\n          'Tip: move mouse pointer away from carousel to resume auto-cycling of slides',\n        delay: { show: 2000 },\n        placement: 'top',\n      }"}],attrs:{id:"carousel",height:"calc(100vh - 64px)",dark:"",cycle:!n,"show-arrows-on-hover":"",draggable:"true","hide-delimiter-background":""}},t._l(t.carouselsData,(function(e,n){return i("v-carousel-item",{key:n,staticClass:"gradient-fill-carousel",attrs:{dark:""}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showFullPageImg(e),expression:"showFullPageImg(carousel)"}],staticClass:"v-responsive fill-height"},[i("UiSmartBackgroundImg",{staticStyle:{"z-index":"-1"},attrs:{"image-asset":e.img}}),t._v(" "),i("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",md:"12","align-self":"end"}},[i("UiCarouselText",{class:t.$vuetify.breakpoint.mdAndUp?"px-12 pb-12":t.$vuetify.breakpoint.smAndUp?"px-8 pb-8":"px-4 pb-4",attrs:{"button-to-right":!0,carousel:e}})],1)],1)],1),t._v(" "),i("v-row",{directives:[{name:"show",rawName:"v-show",value:t.showLeftToRightImg(e),expression:"showLeftToRightImg(carousel)"}],staticClass:"fill-height",attrs:{"no-gutters":""}},[i("v-col",{staticClass:"fill-height",attrs:{cols:"12",md:"12"}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("UiSmartImg",{class:e.topToBottomImg?"cropImgBottom":null,staticStyle:{"z-index":"-1"},attrs:{"max-height":t.$vuetify.breakpoint.smAndUp?t.viewportHorizontal()?"calc(66vh - 42px)":"calc(75vh - 48px)":"calc(50vh - 32px)","image-asset":e.img,contain:t.containImage(e),"align-self":"start"}})],1),t._v(" "),i("v-col",{attrs:{cols:"12"}},[i("UiCarouselText",{class:t.$vuetify.breakpoint.mdAndUp?"pa-12":t.$vuetify.breakpoint.smAndUp?"pa-8":"pa-4",attrs:{"button-to-right":t.viewportHorizontal(),carousel:e}})],1)],1)],1)],1),t._v(" "),i("v-row",{directives:[{name:"show",rawName:"v-show",value:t.showTopToBottomImg(e),expression:"showTopToBottomImg(carousel)"}],staticClass:"fill-height",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"6","align-self":"center"}},[i("UiSmartImg",{class:e.topToBottomImg?"cropImgBottom":null,staticStyle:{"z-index":"-1"},attrs:{"image-asset":e.img,"max-height":"calc(100vh - 64px)","max-width":"100vw",contain:""}})],1),t._v(" "),i("v-col",{class:t.$vuetify.breakpoint.mdAndUp?"pa-12":"pa-4",attrs:{cols:"6","align-self":"center"}},[i("UiCarouselText",{attrs:{"button-to-right":!1,carousel:e}})],1)],1)],1)})),1)]}}])})],1)}),[],!1,null,null,null);e.default=h.exports;s()(h,{UiSmartBackgroundImg:i(993).default,UiCarouselText:i(1109).default,UiSmartImg:i(255).default}),s()(h,{VCarousel:a.a,VCarouselItem:l.a,VCol:c.a,VHover:u.a,VRow:v.a})},432:function(t,e,i){"use strict";var n=i(256);e.a=n.a},993:function(t,e,i){"use strict";i.r(e);var n={props:{imageAsset:{type:Object,required:!0}},data:function(){return{fullCoverStyle:"background-position: center center; position: absolute; background-size: cover; width: 100%;object-fit: contain;z-index: -1"}},computed:{altText:function(){return this.alt?this.alt:this.imageAsset.filename}}},o=i(29),r=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[t.imageAsset.isSvgImage?i("div",{staticClass:"lazyload fill-height",style:t.fullCoverStyle,attrs:{"data-bgset":t.imageAsset.optimizedImagePath,"data-sizes":"auto"}}):t._e(),t._v(" "),t.imageAsset.isSvgImage?t._e():i("div",{staticClass:"lazyload fill-height",style:t.fullCoverStyle,attrs:{"data-bgset":t.imageAsset.responsiveWebpImage.srcSet+" [type: image/webp] | "+t.imageAsset.responsiveImage.srcSet,"data-sizes":"auto"}})])}),[],!1,null,null,null);e.default=r.exports}}]);