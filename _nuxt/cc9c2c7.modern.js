(window.webpackJsonp=window.webpackJsonp||[]).push([[2,49,52,53],{1002:function(t,e,i){"use strict";i.r(e);var o=i(59),n={props:{imageAsset:{type:Object,required:!0},height:{type:String,default:null},width:{type:String,default:null},minHeight:{type:String,default:null},minWidth:{type:String,default:null},maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},cropBottom:{type:Boolean,default:null},dialogButtons:{type:Array,default:()=>{}},alt:{type:String,default:""}},data:()=>({componentId:"ui-zoomable-imaged",showDialog:!1,mdiMagnifyExpand:o.mdiMagnifyExpand})},s=(i(975),i(16)),a=i(21),r=i.n(a),l=i(953),c=i(161),d=i(222),u=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(i){var{hover:o}=i;return[e("div",{staticClass:"image-box",class:o?"image-hover":null,on:{click:function(e){t.showDialog=!0}}},[e("v-overlay",{attrs:{absolute:"",opacity:"0"}},[e("v-icon",{staticStyle:{transition:"all 0.3s"},attrs:{"x-large":"",color:"black"}},[t._v("\n            "+t._s(t.mdiMagnifyExpand)+"\n          ")])],1),t._v(" "),e("UiSmartImg",{attrs:{"image-asset":t.imageAsset,height:t.height,width:t.width,"min-height":t.minHeight,"min-width":t.minWidth,"max-height":t.maxHeight,"max-width":t.maxWidth,"crop-bottom":t.cropBottom,alt:t.alt}})],1)]}}])}),t._v(" "),e("UiPopupDialog",{attrs:{"max-width":"80vw","image-asset":t.imageAsset,"crop-bottom":t.cropBottom,buttons:t.dialogButtons},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}})],1)}),[],!1,null,null,null);e.default=u.exports;r()(u,{UiSmartImg:i(244).default,UiPopupDialog:i(963).default}),r()(u,{VHover:l.a,VIcon:c.a,VOverlay:d.a})},1057:function(t,e,i){},1070:function(t,e,i){"use strict";i.r(e);var o=i(59),n={props:{post:{type:Object,default:()=>{}}},data:()=>({componentId:"ui-materials-card",mdiOpenInNew:o.mdiOpenInNew,mdiDownload:o.mdiDownload,mdiCalendar:o.mdiCalendar}),methods:{categoryToDateText(t){switch(t){case"presentation":return"Presented on";case"workshop":return"Conducted on";default:return"Published on"}},categoryToLinkText(t){switch(t){case"poster":return"Open poster [pdf]";case"blog":return"Read blog post";case"presentation":return"View slides [pdf]";default:return"Read full text"}}}},s=(i(1096),i(16)),a=i(21),r=i.n(a),l=i(120),c=i(223),d=i(170),u=i(161),h=i(214),p=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("v-card",{staticClass:"mx-auto",attrs:{id:"post-card","max-width":"450",elevation:"1",height:"500px"}},[e("p",{staticClass:"card-category my-0",class:"".concat(t.post.category)},[t._v(t._s(t.post.category))]),t._v(" "),e("v-responsive",{attrs:{height:"162",width:"100%"}},[e("UiZoomableImage",{staticClass:"thin-border-bottom",attrs:{"image-asset":t.$getImageAssetObject("materials","previews",t.post.previewImg),"max-height":"160px",width:"100%","dialog-buttons":t.post.dialogButtons,"crop-bottom":""}})],1),t._v(" "),e("v-card-subtitle",{staticClass:"pb-0"},[e("v-btn",{staticClass:"px-0 primary--text",attrs:{text:"",small:"",disabled:""}},[e("div",{staticClass:"primary--text mr-1"},[t._v(t._s(t.categoryToDateText(t.post.category))+":")]),t._v(" "),e("div",{staticClass:"text--primary",staticStyle:{opacity:"60%"}},[t._v(t._s(t.post.date))])])],1),t._v(" "),e("v-responsive",{staticClass:"pa-0 mb-4",attrs:{height:"200px"}},[e("v-card-text",{staticClass:"title font-weight-bold pb-0 text--primary",staticStyle:{"line-height":"1.6rem"}},[t._v("\n        "+t._s(t.post.title)+"\n      ")]),t._v(" "),e("v-card-text",{staticClass:"text--primary",staticStyle:{opacity:"85%"}},[t._v("\n        "+t._s(t.post.description)+"\n      ")])],1),t._v(" "),e("v-btn",{staticClass:"ml-3 px-1",attrs:{text:"",color:"primary"}},[e("a",{staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:"".concat(t.post.link)}},[e("v-icon",{staticClass:"mr-2"},[t._v(t._s(t.post.external?t.mdiOpenInNew:t.mdiDownload))]),t._v("\n        "+t._s(t.categoryToLinkText(t.post.category))+"\n      ")],1)])],1)}),[],!1,null,"48dd29f4",null);e.default=p.exports;r()(p,{UiZoomableImage:i(1002).default}),r()(p,{VBtn:l.a,VCard:c.a,VCardSubtitle:d.b,VCardText:d.c,VIcon:u.a,VResponsive:h.a})},1096:function(t,e,i){"use strict";i(1057)},943:function(t,e,i){"use strict";i.r(e);var o=i(107),n=i(435);function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l={props:{id:{type:String,default:null},href:{type:String,default:null},to:{type:String,default:null},text:{type:String,default:""},icon:{type:String,default:""},large:{type:Boolean,default:!1},xLarge:{type:Boolean,default:!1},small:{type:Boolean,default:!1},xSmall:{type:Boolean,default:!1},doHover:{type:Boolean,default:!1}},data:()=>({componentId:"ui-styled-button",prevButtonHoverId:""}),computed:a(a({},Object(o.b)({buttonHoverId:t=>t.buttonHover.buttonHoverId})),{},{shouldHover(){return this.doHover&&""===this.buttonHoverId}}),mounted(){document.addEventListener("mouseup",this.unsetButtonHoverId)},destroyed(){document.removeEventListener("mouseup",this.unsetButtonHoverId)},methods:{setButtonHoverId(t){this.prevButtonHoverId=this.buttonHoverId,this.$store.commit(n.BUTTON_HOVER_M_SET_ID,t)},unsetButtonHoverId(){this.prevButtonHoverId="",this.$store.commit(n.BUTTON_HOVER_M_SET_ID,this.prevButtonHoverId)},openLink(t){window.open(t,"_blank")}}},c=i(16),d=i(21),u=i.n(d),h=i(120),p=i(161),v=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"simplebutton"},[e("v-btn",{class:"".concat(t.$vuetify.theme.dark?"primary":"secondary").concat(t.shouldHover?" custom-hover":""),attrs:{id:t.id,large:t.large,"x-large":t.xLarge,small:t.small,"x-small":t.xSmall,"to:":t.to,ripple:!1,nuxt:!!t.to||null},on:{mouseover:function(e){return t.setButtonHoverId(t.id)},mouseout:function(e){return t.unsetButtonHoverId()},click:[function(t){t.stopPropagation()},function(e){return t.openLink(t.href)}],mousedown:function(t){t.stopPropagation()}}},[t.icon?e("v-icon",{staticClass:"pr-3 center"},[t._v("\n        "+t._s(t.icon)+"\n      ")]):t._e(),t._v("\n      "+t._s(t.text)+"\n    ")],1)],1)}),[],!1,null,null,null);e.default=v.exports;u()(v,{VBtn:h.a,VIcon:p.a})},946:function(t,e,i){},953:function(t,e,i){"use strict";var o=i(129),n=i(30),s=i(2),a=i(4);e.a=Object(s.a)(o.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(a.c)("v-hover should only contain a single element",this),t)):(Object(a.c)("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},954:function(t,e,i){"use strict";i(946)},955:function(t,e,i){},960:function(t,e,i){},963:function(t,e,i){"use strict";i.r(e);var o=i(59),n={props:{value:Boolean,imageAsset:{type:Object,required:!0},alt:{type:String,default:""},buttons:{type:Array,default:()=>[]},cropBottom:{type:Boolean,default:!1}},data:()=>({componentId:"ui-popup-dialog",mdiClose:o.mdiClose}),computed:{show:{get(){return this.value},set(t){this.$emit("input",t)}}}},s=(i(954),i(16)),a=i(21),r=i.n(a),l=i(120),c=i(223),d=i(170),u=i(920),h=(i(955),i(923)),p=i(109),v=i(84),m=i(249),g=i(250),f=i(247),y=i(248),b=i(85),w=i(2),x=i(4),O=i(0);function _(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function C(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?_(Object(i),!0).forEach((function(e){B(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):_(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function B(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var S=Object(w.a)(v.a,m.a,g.a,f.a,y.a,p.a).extend({name:"v-dialog",directives:{ClickOutside:b.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:()=>({activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}),computed:{classes(){return{["v-dialog ".concat(this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(x.e)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):g.a.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var t,e;null!=(t=this.$refs.dialog)&&t.contains(document.activeElement)||(this.previousActiveElement=document.activeElement,null==(e=this.$refs.dialog)||e.focus());this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===O.x.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((()=>e&&e.focus()))}this.$emit("keydown",t)},onFocusin(t){if(t&&this.retainFocus){var e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){var i=[...this.$refs.dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].find((t=>!t.hasAttribute("disabled")));i&&i.focus()}}},genContent(){return this.showLazyContent((()=>[this.$createElement(h.a,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:C({role:"dialog","aria-modal":this.hideOverlay?void 0:"true"},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){var t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=C(C({},t.style),{},{maxWidth:Object(O.h)(this.maxWidth),width:Object(O.h)(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}}),k=i(161),I=i(222),j=i(214),A=i(921),D=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("v-dialog",{attrs:{"content-class":t.cropBottom?"size-from-contents max-height-95":"size-from-contents no-max-height"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("v-card",[e("v-row",{attrs:{"no-gutters":"","fill-height":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-overlay",{staticClass:"full-overlay",attrs:{absolute:"",opacity:"0","z-index":"1"}},[e("v-responsive",{attrs:{height:"100%"}},[e("v-row",{staticClass:"mb-auto",attrs:{"fill-height":"","no-gutters":"",align:"start",justify:"end"}},[e("v-col",{staticClass:"pa-2 ma-0",attrs:{cols:"auto","align-self":"start"}},[e("div",{staticClass:"simplebutton"},[e("v-btn",{staticClass:"pa-0",attrs:{width:"24px",height:"24px","min-width":"24px",ripple:!1},on:{click:function(e){t.show=!1}}},[e("v-icon",[t._v(t._s(t.mdiClose))])],1)],1)])],1)],1)],1),t._v(" "),e("UiSmartImg",{class:t.cropBottom?"mx-10 mt-10 overflow-y-auto thin-border above-overlay":null,attrs:{"image-asset":t.imageAsset,alt:t.alt,"max-height":t.cropBottom?"calc(95vh - 151px)":"calc(95vh - 110px)",width:t.cropBottom?"calc(90vw - 82px)":"90vw","crop-bottom":t.cropBottom}})],1)],1),t._v(" "),e("v-card-actions",[e("v-row",{attrs:{"no-gutters":"",justify:"center"}},t._l(t.buttons,(function(i,o){return e("v-col",{key:"s_"+o,staticClass:"pa-2 ma-0",attrs:{cols:"auto","align-self":"end"}},[e("UiStyledButton",{staticClass:"text-weight-light above-overlay",attrs:{id:"btn_"+o,href:i.href,to:i.to,text:i.text,icon:i.icon,"x-large":""},on:{"btn-click":function(e){!i.link&&(t.show=!1)}}})],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=D.exports;r()(D,{UiSmartImg:i(244).default,UiStyledButton:i(943).default}),r()(D,{VBtn:l.a,VCard:c.a,VCardActions:d.a,VCol:u.a,VDialog:S,VIcon:k.a,VOverlay:I.a,VResponsive:j.a,VRow:A.a})},975:function(t,e,i){"use strict";i(960)}}]);