(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{404:function(t,e,n){},413:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));n(8),n(6),n(10),n(11),n(7),n(12);var r=n(2),o=(n(33),n(24),n(58),n(404),n(91)),c=n(108),l=n(126),h=n(167),f=n(129),v=n(213),d=n(5);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=Object(d.a)(l.a,h.a).extend({name:"base-slide-group",directives:{Resize:f.a,Touch:v.a},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"==typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{canTouch:function(){return"undefined"!=typeof window},__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return m(m({},l.a.options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,content=t.content,e=t.wrapper;return content>Math.abs(this.scrollOffset)+e},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this,slot=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[slot])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var n="".concat(t[0].toUpperCase()).concat(t.slice(1)),r=this["has".concat(n)];return this.showArrows||r?this.$createElement(o.a,{props:{disabled:!r}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,slot=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[slot])},genTransition:function(t){return this.$createElement(c.c,[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,n,r){var o=n?-1:1,c=o*r+("prev"===t?-1:1)*e.wrapper;return o*Math.max(Math.min(c,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var content=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,content.style.setProperty("transition","none"),content.style.setProperty("willChange","transform")},onTouchMove:function(t){if(this.canTouch){if(!this.isSwiping){var e=t.touchmoveX-t.touchstartX,n=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(n),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd:function(){if(this.canTouch){var t=this.$refs,content=t.content,e=t.wrapper,n=content.clientWidth-e.clientWidth;content.style.setProperty("transition",null),content.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-n&&(this.scrollOffset=-n):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=n&&(this.scrollOffset=n),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")}},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,n,r){var o=t.clientWidth,c=n?e.content-t.offsetLeft-o:t.offsetLeft;n&&(r=-r);var l=e.wrapper+r,h=o+c,f=.4*o;return c<=r?r=Math.max(c-f,0):l<=h&&(r=Math.min(r-(l-h-f),e.content-e.wrapper)),n?-r:r},calculateCenteredOffset:function(t,e,n){var r=t.offsetLeft,o=t.clientWidth;if(n){var c=e.content-r-o/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,c))}var l=r+o/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,l))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,content=e.content,n=e.wrapper;t.widths={content:content?content.clientWidth:0,wrapper:n?n.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e.b=O.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})},416:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{brandsLogo:["logo-12.svg","logo-17.svg","logo-25.svg","logo-26.svg","logo-20.svg","logo-11.svg","logo-1.svg","logo-22.svg","logo-23.svg","logo-16.svg","logo-8.svg"]}}},o=n(35),c=n(57),l=n.n(c),h=n(203),f=n(387),v=n(397),d=n(391),w=n(159),m=n(194),O=n(388),y=n(413),$=n(441),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:t.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{id:"sponsors"}},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"4","align-self":"center"}},[n("h3",{staticClass:"text-h4 text-center font-weight-light mb-xs-4",class:t.$vuetify.theme.dark?"grey--text":null},[t._v("\n          OUR SPONSORS\n        ")])]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"8"}},[n("v-slide-group",{attrs:{"show-arrows":"",draggable:"true"}},[t._l(t.brandsLogo,(function(e,r){return[n("v-slide-item",{key:e,model:{value:t.brandsLogo,callback:function(e){t.brandsLogo=e},expression:"brandsLogo"}},[n("v-card",{staticClass:"mx-4 pa-0",class:t.$vuetify.theme.dark?"white":"grey lighten-4",attrs:{height:"90",width:"140",flat:""}},[n("v-img",{attrs:{height:"90",contain:"",src:"/brands/"+e}})],1)],1),t._v(" "),r<t.brandsLogo.length-1?n("v-responsive",{key:r,staticClass:"my-auto",attrs:{height:"50"}},[n("v-divider",{attrs:{vertical:""}})],1):t._e()]}))],2)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:h.a,VCol:f.a,VContainer:v.a,VDivider:d.a,VImg:w.a,VResponsive:m.a,VRow:O.a,VSlideGroup:y.b,VSlideItem:$.a})},441:function(t,e,n){"use strict";var r=n(2),o=n(127),c=n(5),l=n(9),h=n(1).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(r.a)({},this.activeClass,this.isActive)}),element):(Object(l.c)("v-item should only contain a single element",this),element)):(Object(l.c)("v-item is missing a default scopedSlot",this),null);var element}});Object(c.a)(h,Object(o.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),e.a=Object(c.a)(h,Object(o.a)("slideGroup")).extend({name:"v-slide-item"})}}]);