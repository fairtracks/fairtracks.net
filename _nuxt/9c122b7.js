(window.webpackJsonp=window.webpackJsonp||[]).push([[3,38,47,48],{1020:function(t,e,n){var i=n(1023);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(12).default)("112783d2",i,!0,{sourceMap:!1})},1022:function(t,e,n){"use strict";n(1020)},1023:function(t,e,n){var i=n(11)(!1);i.push([t.i,".center-background[data-v-068c8c62]{background-position:50%}.cover-background[data-v-068c8c62]{background-size:cover}.contain-background[data-v-068c8c62]{background-size:contain;background-color:#fff}",""]),t.exports=i},1024:function(t,e,n){"use strict";n.r(e);var i={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},alt:{type:String,default:""},contain:{type:Boolean,default:!1}}},r=(n(1022),n(25)),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("UiSmartImgFileTypesWrapper",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,alt:t.alt,behind:""},scopedSlots:t._u([{key:"svgImgComponent",fn:function(e){var i=e.imageAsset,r=e.altText;return[n("div",{staticClass:"lazyload fill-height center-background",class:t.contain?"contain-background":"cover-background",attrs:{"data-bgset":i.optimizedImagePath,"data-sizes":"auto",alt:r}})]}},{key:"imgComponent",fn:function(e){var i=e.imageAsset,r=e.altText,o=e.styleText;return[n("div",{staticClass:"lazyload fill-height attach-classes center-background",class:t.contain?"contain-background":"cover-background",style:o,attrs:{"data-bgset":i.responsiveWebpImage.srcSet+" [type: image/webp] | "+i.responsiveImage.srcSet,"data-sizes":"auto",alt:r}})]}}])})}),[],!1,null,"068c8c62",null);e.default=o.exports;installComponents(o,{UiSmartImgFileTypesWrapper:n(443).default})},1029:function(t,e,n){"use strict";n.r(e);var i={props:{id:{type:String,default:null},href:{type:String,default:null},text:{type:String,default:""},xLarge:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:function(){return{prevButtonHoverId:""}},computed:{buttonHoverId:function(){return this.$store.state.buttonHover.buttonHoverId},shouldHover:function(){return this.doHover&&""===this.buttonHoverId}},methods:{setButtonHoverId:function(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit("buttonHover/setButtonHoverId",t)},unsetButtonHoverId:function(){this.prevButtonHoverId="",this.$store.commit("buttonHover/setButtonHoverId",this.prevButtonHoverId)}}},r=n(25),o=n(30),s=n.n(o),a=n(259),u=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"simplebutton"},[n("v-btn",{staticClass:"secondary",class:t.shouldHover?"custom-hover":null,attrs:{id:t.id,"x-large":t.xLarge,href:t.href,ripple:!1},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseleave:function(e){return t.unsetButtonHoverId(t.id)},click:function(e){return e.stopPropagation(),t.$emit("btn-click",!0)}}},[t._v("\n    "+t._s(t.text)+"\n  ")])],1)}),[],!1,null,null,null);e.default=u.exports;s()(u,{VBtn:a.a})},1035:function(t,e,n){"use strict";var i=n(138);e.a=i.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return i.a.options.computed.classes.call(this)}},methods:{genData:i.a.options.methods.genData}})},1041:function(t,e,n){"use strict";var i=n(139),r=n(35),o=n(9),s=n(10);e.a=Object(o.a)(i.a,r.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(s.c)("v-hover should only contain a single element",this),t)):(Object(s.c)("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},1049:function(t,e,n){var i=n(1050);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(12).default)("26754d5a",i,!0,{sourceMap:!1})},1050:function(t,e,n){var i=n(11)(!1);i.push([t.i,".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),t.exports=i},1051:function(t,e,n){var i=n(1052);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(12).default)("4de61803",i,!0,{sourceMap:!1})},1052:function(t,e,n){var i=n(11)(!1);i.push([t.i,".v-window{overflow:hidden}.v-window__container{display:flex;flex-direction:column;height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{-webkit-transform:translateX(-200%);transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{-webkit-transform:translateX(200%);transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{-webkit-transform:translateX(-200%);transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{-webkit-transform:translateX(0);transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{-webkit-transform:translateX(100%);transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{-webkit-transform:translateX(100%);transform:translateX(100%)}.v-window-y-transition-enter{-webkit-transform:translateY(100%);transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{-webkit-transform:translateY(100%);transform:translateY(100%)}",""]),t.exports=i},1114:function(t,e,n){"use strict";n(1049),n(1051);var i=n(260),r=n(442),o=n(89),s=n(138);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=s.a.extend({name:"v-window",directives:{Touch:i.a},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return u(u({},s.a.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=(this.internalReverse?!this.isReverse:this.isReverse)?"-reverse":"";return"v-window-".concat(t).concat(e,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,n){return t.internalValue===t.getValue(e,n)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,n){var i,s,a,u=this,c={click:function(t){t.stopPropagation(),u.changedByDelimiters=!0,n()}},l={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},d=null!=(i=null==(s=(a=this.$scopedSlots)[t])?void 0:s.call(a,{on:c,attrs:l}))?i:[this.$createElement(r.a,{props:{icon:!0},attrs:l,on:c},[this.$createElement(o.a,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},d)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"==typeof e){var n=this.genIcon("prev",e,this.prev);n&&t.push(n)}var i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&i&&"string"==typeof i){var r=this.genIcon("next",i,this.next);r&&t.push(r)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length;return this.items[e].disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length;return this.items[e].disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var n=this.items.length,i=n-1;return n<=2?t<e:t===i&&0===e||(0!==t||e!==i)&&t<e}},render:function(t){var e=this,n={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var i=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};n.directives.push({name:"touch",value:i})}return t("div",n,[this.genContainer()])}}),d=n(265),h=n(1035),v=n(0),f=n(10);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a=l.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return w(w({},l.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(f.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:l.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var s=this.$createElement(r.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(o.a,{props:{size:18}},this.delimiterIcon)]);n.push(s)}return this.$createElement(h.a,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(d.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=l.options.render.call(this,t);return e.data.style="height: ".concat(Object(v.h)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},1115:function(t,e,n){"use strict";var i=n(143),r=n(137),o=n(260),s=n(0),a=n(9),u=Object(a.a)(i.a,Object(r.a)("windowGroup","v-window-item","v-window")).extend().extend().extend({name:"v-window-item",directives:{Touch:o.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(s.h)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(s.h)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),c=n(179),l=n(60);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=Object(a.a)(u,l.a);e.a=f.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(c.a,{staticClass:"v-carousel__item",props:h(h({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(s.s)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,n=t.data;return n.staticClass="v-window-item",n.directives.push({name:"show",value:this.isActive}),this.$createElement(e,n,this.genDefaultSlot())}}})},1123:function(t,e,n){var i=n(1189);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(12).default)("b8d150bc",i,!0,{sourceMap:!1})},1151:function(t,e,n){"use strict";n.r(e);var i={props:{buttonToRight:{type:Boolean},carousel:{type:Object,required:!0}}},r=n(25),o=n(30),s=n.n(o),a=n(1009),u=n(1010),c=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{"no-gutters":"","fill-height":"","align-self":"center"}},[n("v-col",{directives:[{name:"show",rawName:"v-show",value:t.buttonToRight,expression:"buttonToRight"}],attrs:{cols:t.$vuetify.breakpoint.smAndUp?10:8}},[n("h2",{staticClass:"text-lg-h3 text-md-h4 mb-3 text-sm-h5 text-h6 font-weight-black"},[t._v("\n      "+t._s(t.carousel.heading)+"\n    ")]),t._v(" "),n("p",{staticClass:"mb-5 text-md-body-1 text-sm-body-2 text-caption"},[t._v("\n      "+t._s(t.carousel.subHeading)+"\n    ")])]),t._v(" "),n("v-col",{directives:[{name:"show",rawName:"v-show",value:t.buttonToRight,expression:"buttonToRight"}],attrs:{cols:t.$vuetify.breakpoint.smAndUp?2:4}},[n("v-row",{staticClass:"ma-0",attrs:{justify:"center"}},[n("UiStyledButton",{attrs:{href:t.carousel.href,text:"More Info","x-large":t.$vuetify.breakpoint.mdAndUp}})],1)],1),t._v(" "),n("v-col",{directives:[{name:"show",rawName:"v-show",value:!t.buttonToRight,expression:"!buttonToRight"}],attrs:{cols:"12"}},[n("div",{staticClass:"text-md-h4 mb-3 text-sm-h5 text-h6 font-weight-black"},[t._v("\n      "+t._s(t.carousel.heading)+"\n    ")]),t._v(" "),n("p",{staticClass:"text-md-body-1 text-sm-body-2 text-caption",class:t.$vuetify.breakpoint.mdAndUp?"mb-5":t.$vuetify.breakpoint.smAndUp?"mb-3":"mb-2"},[t._v("\n      "+t._s(t.carousel.subHeading)+"\n    ")]),t._v(" "),n("UiStyledButton",{staticClass:"ma-auto",attrs:{href:t.carousel.href,text:"More Info","x-large":t.$vuetify.breakpoint.mdAndUp}})],1)],1)}),[],!1,null,null,null);e.default=c.exports;s()(c,{UiStyledButton:n(1029).default}),s()(c,{VCol:a.a,VRow:u.a})},1185:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=n(1186),o=n(1187),s="undefined"!=typeof window,a=function(t){return null!=t?t:s?window.innerWidth:0},u=function(t){return null!=t?t:s?window.innerHeight:0},c=function(t){var e=0,n=t(),i=r.reactive({width:a(void 0),height:u(void 0)});return n.addObserver("composition-api",(function(t){var e=t.width,n=t.height;i.width=e,i.height=n})),function(){return 0===e&&n.subscribe().dispatch(),++e,r.onUnmounted((function(){0===(e=Math.max(e-1,0))&&n.unsubscribe()})),{width:r.computed((function(){return i.width})),height:r.computed((function(){return i.height}))}}}((function(){return i||(i=new o.WindowResizeSubject),i}));e.useWindowSize=c},1186:function(t,e,n){"use strict";n.r(e),n.d(e,"Vue2",(function(){return u})),n.d(e,"isVue2",(function(){return s})),n.d(e,"isVue3",(function(){return a})),n.d(e,"version",(function(){return c})),n.d(e,"install",(function(){return o}));var i=n(1);n.d(e,"Vue",(function(){return i.a}));var r=n(256);function o(t){(t=t||i.a)&&!t.__composition_api_installed__&&i.a.use(r.f)}n.d(e,"EffectScope",(function(){return r.a})),n.d(e,"computed",(function(){return r.b})),n.d(e,"createApp",(function(){return r.c})),n.d(e,"createRef",(function(){return r.d})),n.d(e,"customRef",(function(){return r.e})),n.d(e,"defineAsyncComponent",(function(){return r.g})),n.d(e,"defineComponent",(function(){return r.h})),n.d(e,"del",(function(){return r.i})),n.d(e,"effectScope",(function(){return r.j})),n.d(e,"getCurrentInstance",(function(){return r.k})),n.d(e,"getCurrentScope",(function(){return r.l})),n.d(e,"h",(function(){return r.m})),n.d(e,"inject",(function(){return r.n})),n.d(e,"isRaw",(function(){return r.o})),n.d(e,"isReactive",(function(){return r.p})),n.d(e,"isReadonly",(function(){return r.q})),n.d(e,"isRef",(function(){return r.r})),n.d(e,"markRaw",(function(){return r.s})),n.d(e,"nextTick",(function(){return r.t})),n.d(e,"onActivated",(function(){return r.u})),n.d(e,"onBeforeMount",(function(){return r.v})),n.d(e,"onBeforeUnmount",(function(){return r.w})),n.d(e,"onBeforeUpdate",(function(){return r.x})),n.d(e,"onDeactivated",(function(){return r.y})),n.d(e,"onErrorCaptured",(function(){return r.z})),n.d(e,"onMounted",(function(){return r.A})),n.d(e,"onScopeDispose",(function(){return r.B})),n.d(e,"onServerPrefetch",(function(){return r.C})),n.d(e,"onUnmounted",(function(){return r.D})),n.d(e,"onUpdated",(function(){return r.E})),n.d(e,"provide",(function(){return r.F})),n.d(e,"proxyRefs",(function(){return r.G})),n.d(e,"reactive",(function(){return r.H})),n.d(e,"readonly",(function(){return r.I})),n.d(e,"ref",(function(){return r.J})),n.d(e,"set",(function(){return r.K})),n.d(e,"shallowReactive",(function(){return r.L})),n.d(e,"shallowReadonly",(function(){return r.M})),n.d(e,"shallowRef",(function(){return r.N})),n.d(e,"toRaw",(function(){return r.O})),n.d(e,"toRef",(function(){return r.P})),n.d(e,"toRefs",(function(){return r.Q})),n.d(e,"triggerRef",(function(){return r.R})),n.d(e,"unref",(function(){return r.S})),n.d(e,"useAttrs",(function(){return r.T})),n.d(e,"useCSSModule",(function(){return r.U})),n.d(e,"useCssModule",(function(){return r.V})),n.d(e,"useSlots",(function(){return r.W})),n.d(e,"warn",(function(){return r.X})),n.d(e,"watch",(function(){return r.Y})),n.d(e,"watchEffect",(function(){return r.Z})),n.d(e,"watchPostEffect",(function(){return r.ab})),n.d(e,"watchSyncEffect",(function(){return r.bb})),o(i.a);var s=!0,a=!1,u=i.a,c=i.a.version},1187:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){this._observers=new Map,this._subscribed=!1;var e=(null!=t?t:{}).delay,n=void 0===e?33:e;this._delay=n,this._handler=this._handleResize.bind(this)}return t.prototype.addObserver=function(t,e){return this._observers.set(t,e),e(this._getEvent()),this},t.prototype.deleteObserver=function(t){return this._observers.delete(t),this},t.prototype.deleteObservers=function(){return this._observers.clear(),this},t.prototype.notifyObservers=function(t){return this._observers.forEach((function(e){e(t)})),this},t.prototype.subscribe=function(){return"undefined"==typeof window||this._subscribed||(window.addEventListener("resize",this._handler),window.addEventListener("orientationchange",this._handler),this._subscribed=!0),this},t.prototype.unsubscribe=function(){return this._subscribed?(window.removeEventListener("resize",this._handler),window.removeEventListener("orientationchange",this._handler),this._subscribed=!1,this):this},t.prototype.setDelay=function(t){return this._delay=t,this},t.prototype.hasObserver=function(){return this._observers.size>0},t.prototype.dispatch=function(){return this._dispatch(),this},t.prototype._getEvent=function(){return"undefined"==typeof window?{width:0,height:0}:{width:window.innerWidth,height:window.innerHeight}},t.prototype._dispatch=function(){var t=this._getEvent();this.notifyObservers(t)},t.prototype._handleResize=function(){var t=this;clearTimeout(this._timer),this._timer=setTimeout((function(){t._dispatch()}),this._delay)},t}();e.WindowResizeSubject=i},1188:function(t,e,n){"use strict";n(1123)},1189:function(t,e,n){var i=n(11)(!1);i.push([t.i,".cropImgBottom .v-image__image--cover{background-position:top!important}.gradient-fill-carousel>.v-responsive{background:var(--v-primary-base)}.gradient-fill-carousel>.v-responsive>.v-responsive__content{background:linear-gradient(180deg,transparent,70%,rgba(0,0,0,.2))}",""]),t.exports=i},1202:function(t,e,n){"use strict";n.r(e);var i=n(1185),r={props:{carouselsData:{type:Array,default:function(){return[]}}},setup:function(){var t=Object(i.useWindowSize)();return{windowWidth:t.width,windowHeight:t.height}},computed:{viewportHorizontal:function(){return this.windowHeight<this.windowWidth},viewportHorizontalAndVeryWide:function(){return 1.7*this.windowHeight<this.windowWidth}},methods:{showFullPageImg:function(t){return"fullPage"===this._calcLayoutType(t)},showLeftToRightImg:function(t){return"imgAtTop"===this._calcLayoutType(t)},showTopToBottomImg:function(t){return"sideBySide"===this._calcLayoutType(t)},_calcLayoutType:function(t){var e=null;return t.topToBottomImg&&t.leftToRightImg?e=this.viewportHorizontal?"fullPage":"imgAtTop":t.topToBottomImg?e=this.viewportHorizontal?"sideBySide":"imgAtTop":t.leftToRightImg&&(e=this.viewportHorizontalAndVeryWide?"sideBySide":"imgAtTop"),e},containImage:function(t){return!t.topToBottomImg||null}}},o=(n(1188),n(25)),s=n(30),a=n.n(s),u=n(1114),c=n(1115),l=n(1009),d=n(1041),h=n(1010),v=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[n("v-carousel",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:"Tip: move mouse pointer away from carousel to resume auto-cycling of slides",delay:{show:2e3},placement:"top"},expression:"{\n        content:\n          'Tip: move mouse pointer away from carousel to resume auto-cycling of slides',\n        delay: { show: 2000 },\n        placement: 'top',\n      }"}],attrs:{id:"carousel",height:"calc(100vh - 64px)",dark:"",cycle:!i,"show-arrows-on-hover":"",draggable:"true","hide-delimiter-background":""}},t._l(t.carouselsData,(function(e,i){return n("v-carousel-item",{key:i,staticClass:"gradient-fill-carousel",attrs:{dark:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showFullPageImg(e),expression:"showFullPageImg(carousel)"}],staticClass:"v-responsive fill-height"},[n("UiSmartBackgroundImg",{attrs:{"image-asset":e.img}}),t._v(" "),n("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",md:"12","align-self":"end"}},[n("UiCarouselText",{class:t.$vuetify.breakpoint.mdAndUp?"px-12 pb-12":t.$vuetify.breakpoint.smAndUp?"px-8 pb-8":"px-4 pb-4",attrs:{"button-to-right":!0,carousel:e}})],1)],1)],1),t._v(" "),n("v-row",{directives:[{name:"show",rawName:"v-show",value:t.showLeftToRightImg(e),expression:"showLeftToRightImg(carousel)"}],staticClass:"fill-height",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",md:"12"}},[n("v-row",{attrs:{"no-gutters":"",height:"100%"}},[n("v-col",{attrs:{cols:"12"}},[n("UiSmartImg",{attrs:{"max-height":t.$vuetify.breakpoint.smAndUp?t.viewportHorizontal?"calc(66vh - 42px)":"calc(75vh - 48px)":"calc(50vh - 32px)","image-asset":e.img,"align-self":"start","crop-bottom":!!e.topToBottomImg||null,behind:""}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("UiCarouselText",{class:t.$vuetify.breakpoint.mdAndUp?"pa-12":t.$vuetify.breakpoint.smAndUp?"pa-8":"pa-4",attrs:{"button-to-right":t.viewportHorizontal,carousel:e}})],1)],1)],1)],1),t._v(" "),n("v-row",{directives:[{name:"show",rawName:"v-show",value:t.showTopToBottomImg(e),expression:"showTopToBottomImg(carousel)"}],staticClass:"fill-height",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"6","align-self":"center"}},[n("UiSmartImg",{class:e.topToBottomImg?null:"cropImgBottom",attrs:{"image-asset":e.img,"max-height":"calc(100vh - 64px)",contain:"",behind:""}})],1),t._v(" "),n("v-col",{class:t.$vuetify.breakpoint.mdAndUp?"pa-12":"pa-4",attrs:{cols:"6","align-self":"center"}},[n("UiCarouselText",{attrs:{"button-to-right":!1,carousel:e}})],1)],1)],1)})),1)]}}])})],1)}),[],!1,null,null,null);e.default=v.exports;a()(v,{UiSmartBackgroundImg:n(1024).default,UiCarouselText:n(1151).default,UiSmartImg:n(257).default}),a()(v,{VCarousel:u.a,VCarouselItem:c.a,VCol:l.a,VHover:d.a,VRow:h.a})},442:function(t,e,n){"use strict";var i=n(259);e.a=i.a}}]);