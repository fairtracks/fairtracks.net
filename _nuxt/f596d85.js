(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1138:function(t,e,i){},1143:function(t,e,i){"use strict";i.d(e,"a",(function(){return b}));i(1138);var n=i(25),r=i(96),s=i(159),a=i(118),o=i(105),l=i(286),c=i(3),u=i(0);function h(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,o=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return a=t.done,t},e:function(t){o=!0,s=t},f:function(){try{a||null==i.return||i.return()}finally{if(o)throw s}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function v(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function p(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(Object(i),!0).forEach((function(e){d(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function g(t){var e=Math.abs(t);return Math.sign(t)*(e/((1/.501-2)*(1-e)+1))}function m(t,e,i,n){var r=t.clientWidth,s=i?e.content-t.offsetLeft-r:t.offsetLeft;i&&(n=-n);var a=e.wrapper+n,o=r+s,l=.4*r;return s<=n?n=Math.max(s-l,0):a<=o&&(n=Math.min(n-(a-o-l),e.content-e.wrapper)),i?-n:n}var b=Object(c.a)(s.a,a.a).extend({name:"base-slide-group",directives:{Resize:o.a,Touch:l.a},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"==typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{canTouch:function(){return"undefined"!=typeof window},__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return p(p({},s.a.options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,i=t.wrapper;return e>Math.abs(this.scrollOffset)+i},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$vuetify.rtl&&(t=-t);var e=t<=0?g(-t):t>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+g(this.widths.content-this.widths.wrapper-t):-t;this.$vuetify.rtl&&(e=-e),this.$refs.content.style.transform="translateX(".concat(e,"px)")}},mounted:function(){var t=this;if("undefined"!=typeof ResizeObserver){var e=new ResizeObserver((function(){t.onResize()}));e.observe(this.$el),e.observe(this.$refs.content),this.$on("hook:destroyed",(function(){e.disconnect()}))}else{var i=0;this.$on("hook:beforeUpdate",(function(){var e;i=((null==(e=t.$refs.content)?void 0:e.children)||[]).length})),this.$on("hook:updated",(function(){var e;i!==((null==(e=t.$refs.content)?void 0:e.children)||[]).length&&t.setWidths()}))}},methods:{onScroll:function(){this.$refs.wrapper.scrollLeft=0},onFocusin:function(t){if(this.isOverflowing){var e,i=h(Object(u.g)(t));try{for(i.s();!(e=i.n()).done;){var n,r=e.value,s=h(this.items);try{for(s.s();!(n=s.n()).done;){var a=n.value;if(a.$el===r)return void(this.scrollOffset=m(a.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))}}catch(t){s.e(t)}finally{s.f()}}}catch(t){i.e(t)}finally{i.f()}}},genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var i="".concat(t[0].toUpperCase()).concat(t.slice(1)),r=this["has".concat(i)];return this.showArrows||r?this.$createElement(n.a,{props:{disabled:!r}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(r.c,[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset:function(t,e,i,n){var r=i?-1:1,s=r*n+("prev"===t?-1:1)*e.wrapper;return r*Math.max(Math.min(s,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){if(this.canTouch){if(!this.isSwiping){var e=t.touchmoveX-t.touchstartX,i=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(i),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd:function(){if(this.canTouch){var t=this.$refs,e=t.content,i=t.wrapper,n=e.clientWidth-i.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-n&&(this.scrollOffset=-n):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=n&&(this.scrollOffset=n),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")}},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=function(t,e,i){var n=t.offsetLeft,r=t.clientWidth;if(i){var s=e.content-n-r/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,s))}var a=n+r/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,a))}(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=m(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){if(!t._isDestroyed){var e=t.$refs,i=e.content,n=e.wrapper;t.widths={content:i?i.clientWidth:0,wrapper:n?n.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e.b=b.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})},1144:function(t,e,i){t.exports=i.p+"img/df69fca.jpg"},1145:function(t,e,i){t.exports=i.p+"img/9fcd3ef.jpg"},1155:function(t,e,i){},1192:function(t,e,i){},1235:function(t,e,i){"use strict";i(1155);var n=i(1143),r=i(13),s=i(3);function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e.a=Object(s.a)(n.a,r.a).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return o(o({},n.a.options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,o({},n.a.options.methods.genData.call(this)))}}})},1251:function(t,e,i){"use strict";i.r(e);var n={data:function(){return{heroAlt:[{src:i(1145),heading:" Blog "}],posts:[{id:"",title:"Hello World",postImage:"",publishedOn:"",lastUpdated:"",author:"",tags:"",category:"",excerpt:"",content:""}],page:2,tags:["Work","Home Improvement","Vacation","Food","Drawers","Shopping","Art","Tech","Creative Writing"],items:[{text:"Technology"},{text:"Health"},{text:"News"},{text:"Recent Discovery"},{text:"Lifestyle and Fitness"},{text:"Fashion"},{text:"Music"}],comments:[{avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",title:"Ali Connors",subtitle:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg",title:"Alex Scott",subtitle:"Wish I could come, but I'm out of town this weekend."},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg",title:"Sandra Adams",subtitle:"Do you have Paris recommendations? Have you ever been?"},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg",title:"Trevor Hansen",subtitle:"Have any ideas about what we should get Heidi for her birthday?"},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:"Britta Holt",subtitle:"We should eat this: Grate, Squash, Corn, and tomatillo Tacos."}]}},head:function(){return{title:"Blog",meta:[{hid:"description",name:"description",content:"Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem"}]}}},r=i(23),s=i(27),a=i.n(s),o=i(151),l=i(262),c=i(206),u=i(267),h=i(1235),f=i(1096),v=i(1109),p=i(263),d=i(197),g=i(195),m=i(255),b=i(152),y=i(258),w=i(45),O=i(260),x=i(1273),_=i(1097),$=i(1101),C=i(266),j=i(97),S=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("section",{class:t.$vuetify.theme.dark?"":"grey lighten-4"},[e("v-container",[e("v-row",[e("v-col",{staticClass:"py-16",attrs:{cols:"12",xl:"10",lg:"9",md:"8",sm:"8"}},[e("v-row",t._l(10,(function(n){return e("v-col",{key:n,attrs:{cols:"12",sm:"6",md:"6",lg:"4",xl:"3"}},[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"450",elevation:"1"}},[e("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:i(1144)}}),t._v(" "),e("v-card-subtitle",{staticClass:"pb-0"},[e("v-btn",{staticClass:"px-0",attrs:{href:"#",text:"",small:"",color:"primary"}},[t._v("Admin")]),t._v(" "),e("v-btn",{staticClass:"px-0",attrs:{text:"",small:"",disabled:""}},[t._v("October 13, 2020")])],1),t._v(" "),e("v-card-text",{staticClass:"title font-weight-bold mt-3 pb-0 text--primary",staticStyle:{"line-height":"1.8rem"}},[t._v("\n                  Check out the new mansion we got for our eSports team!\n                ")]),t._v(" "),e("v-card-text",{staticClass:"text--primary"},[t._v("\n                  An online streamer, also known as a live streamer, internet streamer, or streamer,\n                  is a person who broadcasts themself online through a live stream or pre-recorded\n                  video. The scope of online streamers has grown to includ...\n                  "),e("v-btn",{attrs:{href:"#",small:"",text:"",color:"primary"}},[t._v("Read More")])],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{icon:"",color:"yellow darken-1"}},[e("v-icon",[t._v("mdi-comment")])],1),t._v(" "),e("span",{staticClass:"text--disabled"},[t._v("15")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:"",color:"orange"}},[e("v-icon",[t._v("mdi-heart")])],1),e("span",{staticClass:"text--disabled mr-2"},[t._v("45K")]),t._v(" "),e("v-btn",{attrs:{icon:"",color:"primary"}},[e("v-icon",[t._v("mdi-share-variant")])],1),e("span",{staticClass:"text--disabled"},[t._v("25K")]),t._v(" "),e("span",{staticClass:"mr-4"})],1)],1)],1)})),1),t._v(" "),e("div",{staticClass:"text-center"},[e("div",{staticClass:"text-center"},[e("v-container",[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"8"}},[e("v-container",{staticClass:"max-width"},[e("v-pagination",{staticClass:"my-4",attrs:{circle:"",length:15},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1)],1)])],1),t._v(" "),e("v-col",{staticClass:"py-16",attrs:{cols:"12",xl:"2",lg:"3",md:"4",sm:"4"}},[e("aside",[e("v-text-field",{staticClass:"mb-6",attrs:{clearable:"",dense:"",flat:"",outlined:"",placeholder:"Search...","append-icon":"mdi-magnify","hide-details":""}}),t._v(" "),e("v-card",{staticClass:"mb-6",attrs:{outlined:""}},[e("div",{staticClass:"subtitle font-weight-black text-uppercase text-center mt-4"},[t._v("\n                Categories\n              ")]),t._v(" "),e("v-list",{attrs:{dense:""}},[e("v-list-item-group",{attrs:{color:"primary"}},t._l(t.items,(function(i,n){return e("v-list-item",{key:n},[e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(i.text)}})],1)],1)})),1)],1)],1),t._v(" "),e("v-card",{staticClass:"mb-6",attrs:{outlined:""}},[e("div",{staticClass:"subtitle font-weight-black text-uppercase text-center mt-4"},[t._v("Tags")]),t._v(" "),e("v-card-text",[e("v-chip-group",{attrs:{column:""}},t._l(t.tags,(function(i){return e("v-chip",{key:i},[t._v("\n                    "+t._s(i)+"\n                  ")])})),1)],1)],1),t._v(" "),e("v-card",{staticClass:"mb-6",attrs:{outlined:""}},[e("div",{staticClass:"subtitle font-weight-black text-uppercase text-center mt-4"},[t._v("\n                Recent Comments\n              ")]),t._v(" "),e("v-list",{attrs:{"three-line":"",dense:""}},[t._l(t.comments,(function(i,n){return[i.header?e("v-subheader",{key:i.header,domProps:{textContent:t._s(i.header)}}):i.divider?e("v-divider",{key:n}):e("v-list-item",{key:i.title},[e("v-list-item-avatar",[e("v-img",{attrs:{src:i.avatar}})],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(i.title)}}),t._v(" "),e("v-list-item-subtitle",{domProps:{textContent:t._s(i.subtitle)}})],1)],1)]}))],2)],1)],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=S.exports;a()(S,{VBtn:o.a,VCard:l.a,VCardActions:c.a,VCardSubtitle:c.b,VCardText:c.c,VChip:u.a,VChipGroup:h.a,VCol:f.a,VContainer:v.a,VDivider:p.a,VIcon:d.a,VImg:g.a,VList:m.a,VListItem:b.a,VListItemAvatar:y.a,VListItemContent:w.a,VListItemGroup:O.a,VListItemSubtitle:w.b,VListItemTitle:w.c,VPagination:x.a,VRow:_.a,VSpacer:$.a,VSubheader:C.a,VTextField:j.a})},1273:function(t,e,i){"use strict";i(1192);var n=i(25),r=i(105),s=i(13),a=i(294),o=i(10),l=i(3);function c(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function f(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e.a=Object(l.a)(s.a,Object(a.a)({onVisible:["init"]}),o.a).extend({name:"v-pagination",directives:{Resize:r.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(Object(i),!0).forEach((function(e){f(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var i=e%2==0?1:0,n=Math.floor(e/2),r=this.length-n+1+i;if(this.value>n&&this.value<r){var s=this.length,a=this.value-n+2,o=this.value+n-2-i,l=o+1===s-1?o+1:"...";return[1,a-1==2?2:"..."].concat(c(this.range(a,o)),[l,this.length])}if(this.value===n){var u=this.value+n-1-i;return[].concat(c(this.range(1,u)),["...",this.length])}if(this.value===r){var h=this.value-n+1;return[1,"..."].concat(c(this.range(h,this.length)))}return[].concat(c(this.range(1,n)),["..."],c(this.range(r,this.length)))}},watch:{value:function(){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){for(var i=[],n=t=t>0?t:1;n<=e;n++)i.push(n);return i},genIcon:function(t,e,i,r,s){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{disabled:i,type:"button","aria-label":s},on:i?{}:{click:r}},[t(n.a,[e])])])},genItem:function(t,e){var i=this,n=e===this.value&&(this.color||"primary"),r=e===this.value,s=r?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":r,"aria-label":this.$vuetify.lang.t(s,e)},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})}}]);