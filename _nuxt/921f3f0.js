(window.webpackJsonp=window.webpackJsonp||[]).push([[41,55],{1111:function(t,e,n){"use strict";n.r(e);var o=n(129),r=n(477);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={props:{id:{type:String,default:null},href:{type:String,default:null},to:{type:String,default:null},text:{type:String,default:""},icon:{type:String,default:""},large:{type:Boolean,default:!1},xLarge:{type:Boolean,default:!1},small:{type:Boolean,default:!1},xSmall:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:function(){return{componentId:"ui-styled-button",prevButtonHoverId:""}},computed:s(s({},Object(o.b)({buttonHoverId:function(t){return t.buttonHover.buttonHoverId}})),{},{shouldHover:function(){return this.doHover&&""===this.buttonHoverId}}),mounted:function(){document.addEventListener("mouseup",this.unsetButtonHoverId)},destroyed:function(){document.removeEventListener("mouseup",this.unsetButtonHoverId)},methods:{setButtonHoverId:function(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit(r.BUTTON_HOVER_M_SET_ID,t)},unsetButtonHoverId:function(){this.prevButtonHoverId="",this.$store.commit(r.BUTTON_HOVER_M_SET_ID,this.prevButtonHoverId)},openLink:function(t){window.open(t,"_blank")}}},a=n(23),c=n(27),d=n.n(c),p=n(151),v=n(197),h=Object(a.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"simplebutton"},[e("v-btn",{class:"".concat(t.$vuetify.theme.dark?"primary":"secondary").concat(t.shouldHover?" custom-hover":""),attrs:{id:t.id,large:t.large,"x-large":t.xLarge,small:t.small,"x-small":t.xSmall,"to:":t.to,ripple:!1,nuxt:!!t.to||null},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseout:function(e){return t.unsetButtonHoverId()},click:[function(t){t.stopPropagation()},function(e){return t.openLink(t.href)}],mousedown:function(t){t.stopPropagation()}}},[t.icon?e("v-icon",{staticClass:"pr-3 center"},[t._v("\n        "+t._s(t.icon)+"\n      ")]):t._e(),t._v("\n      "+t._s(t.text)+"\n    ")],1)],1)}),[],!1,null,null,null);e.default=h.exports;d()(h,{VBtn:p.a,VIcon:v.a})},1180:function(t,e,n){"use strict";e.a={methods:{selectByComponentWidthUnbound:function(t,e,n){return n>=1888&&"xl"in t?t.xl:n>=1248&&"lg"in t?t.lg:n>=960&&"md"in t?t.md:n>=600&&"sm"in t?t.sm:"xs"in t?t.xs:e},calcComponentHeightAsStringUnbound:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return"".concat(n*t+e,"px")}}}},1267:function(t,e,n){"use strict";n.r(e);var o={mixins:[n(1180).a],props:{buttonToRight:{type:Boolean},slideMarkdownFile:{type:Object,required:!0},carouselWidth:{type:Number,default:void 0}},data:function(){return{componentId:"ui-carousel-text"}}},r=n(23),i=n(27),s=n.n(i),u=n(1096),l=n(1097),a=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("v-row",{attrs:{"no-gutters":"","align-self":"center"}},[e("v-col",{attrs:{cols:"12"}},[e("div",{staticClass:"font-weight-black",class:t.selectByComponentWidthUnbound({lg:t.buttonToRight?"text-h3":"text-h4",md:"text-h4",sm:"text-h5"},"text-h6",t.carouselWidth)},[t._v("\n        "+t._s(t.slideMarkdownFile.title)+"\n      ")])]),t._v(" "),e("v-col",{directives:[{name:"show",rawName:"v-show",value:t.buttonToRight,expression:"buttonToRight"}],attrs:{cols:t.selectByComponentWidthUnbound({sm:9},8,t.carouselWidth)}},[e("div",{class:t.selectByComponentWidthUnbound({md:"text-body-1",sm:"text-body-2"},"text-caption",t.carouselWidth)},[e("nuxt-content",{attrs:{document:t.slideMarkdownFile}})],1)]),t._v(" "),e("v-col",{directives:[{name:"show",rawName:"v-show",value:t.buttonToRight,expression:"buttonToRight"}],staticClass:"pl-4",attrs:{"align-self":"center",cols:t.selectByComponentWidthUnbound({sm:3},4,t.carouselWidth)}},[e("UiStyledButton",{attrs:{href:t.slideMarkdownFile.href,text:"More Info","x-large":t.selectByComponentWidthUnbound({md:!0},!1,t.carouselWidth)}})],1),t._v(" "),e("v-col",{directives:[{name:"show",rawName:"v-show",value:!t.buttonToRight,expression:"!buttonToRight"}],attrs:{cols:"12"}},[e("p",{class:t.selectByComponentWidthUnbound({md:"text-body-1 mb-5",sm:"text-body-2 mb-3"},"text-caption mb-2",t.carouselWidth)},[e("nuxt-content",{attrs:{document:t.slideMarkdownFile}})],1),t._v(" "),e("UiStyledButton",{staticClass:"ma-auto",attrs:{href:t.slideMarkdownFile.href,text:"More Info","x-large":t.selectByComponentWidthUnbound({md:!0},!1,t.carouselWidth)}})],1)],1)}),[],!1,null,null,null);e.default=a.exports;s()(a,{UiStyledButton:n(1111).default}),s()(a,{VCol:u.a,VRow:l.a})}}]);