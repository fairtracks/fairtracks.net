(window.webpackJsonp=window.webpackJsonp||[]).push([[4,10],{535:function(t,e,r){},549:function(t,e,r){"use strict";var n=r(2),o=(r(33),r(51),r(240),r(10),r(7),r(50),r(114),r(8),r(6),r(11),r(12),r(5)),l=r(96),c=r(138);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},550:function(t,e,r){"use strict";r(8),r(6),r(10),r(11),r(7),r(12);var n=r(2),o=(r(17),r(50),r(535),r(542)),l=r(5);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d=Object(l.a)(o.a);e.a=d.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var t=input.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(e,t)+"px"}},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(t){o.a.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},569:function(t,e,r){"use strict";r.r(e);var n=r(35),o=r(63),l=r.n(o),c=r(239),d=r(549),v=r(542),h=r(550),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",[r("v-text-field",{attrs:{label:"Name",dense:"",outlined:""}}),t._v(" "),r("v-text-field",{attrs:{label:"Email",dense:"",outlined:""}}),t._v(" "),r("v-text-field",{attrs:{label:"Subject",dense:"",outlined:""}}),t._v(" "),r("v-textarea",{attrs:{dense:"",label:"Your Message","auto-grow":"",outlined:"",rows:"8","row-height":"20"}}),t._v(" "),r("v-btn",{attrs:{outlined:"",block:"",color:"primary"}},[t._v("SEND MESSAGE")])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:c.a,VForm:d.a,VTextField:v.a,VTextarea:h.a})},605:function(t,e,r){"use strict";r.r(e);var n={components:{footerContactForm:r(569).default},data:function(){return{social:[{platform:"Facebook",link:"https://www.facebook.com/",icon:"mdi-facebook"},{platform:"Twitter",link:"https://twitter.com/",icon:"mdi-twitter"},{platform:"Instagram",link:"https://www.instagram.com/",icon:"mdi-instagram"},{platform:"Linkedin",link:"https://www.linkedin.com/",icon:"mdi-linkedin"},{platform:"Github",link:"https://modevue.staticdesigner.com/",icon:"mdi-github"}]}}},o=r(35),l=r(63),c=r.n(l),d=r(239),v=r(519),h=r(529),f=r(523),m=r(219),w=r(220),_=r(131),y=r(76),O=r(112),j=r(520),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{class:t.$vuetify.theme.dark?"blue-grey darken-4 grey--text text--lighten-1":"grey lighten-3 grey--text text--darken-4",attrs:{id:"footer-top"}},[r("v-container",[r("v-row",[r("v-col",{staticClass:"py-12",attrs:{cols:"12",md:"5"}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12"}},[r("Logo")],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("p",{staticClass:"mt-8 text-justify",staticStyle:{"max-width":"400px"}},[t._v("\n              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo\n              pariatur quidem, quis modi iure nihil commodi suscipit, corporis\n              dicta adipisci, voluptatum quia cupiditate. Nulla minus\n              voluptatum nostrum deleniti, asperiores facere.\n            ")])]),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-list",{staticClass:"transparent",attrs:{"two-line":""}},[r("v-list-item",[r("v-list-item-icon",[r("v-icon",[t._v(" mdi-map-marker ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("ADDRESS")]),t._v(" "),r("v-list-item-subtitle",[t._v("1400 Main Street, Orlando, FL 79938")])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-list-item",[r("v-list-item-icon",[r("v-icon",[t._v(" mdi-email ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("EMAIL")]),t._v(" "),r("v-list-item-subtitle",[t._v("info@example.com")]),t._v(" "),r("v-list-item-subtitle",[t._v("support@example.com")])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-list-item",[r("v-list-item-icon",[r("v-icon",[t._v(" mdi-phone ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("PHONE")]),t._v(" "),r("v-list-item-subtitle",[t._v("(323) 555-6789")]),t._v(" "),r("v-list-item-subtitle",[t._v("(650) 555-1234")])],1)],1),t._v(" "),r("v-divider")],1),t._v(" "),r("div",{staticClass:"d-flex justify-center mt-5"},t._l(t.social,(function(e,i){return r("v-btn",{key:"social-"+i,staticClass:"d-flex",attrs:{icon:"",large:"",color:"primary",href:e.link,target:"_blank"}},[r("v-icon",[t._v(t._s(e.icon))])],1)})),1)],1)],1)],1),t._v(" "),r("v-col",{staticClass:"text-center hidden-sm-and-down col col-2 py-12",attrs:{cols:"1"}},[r("v-divider",{attrs:{vertical:""}})],1),t._v(" "),r("v-col",{staticClass:"py-12",attrs:{cols:"12",md:"5"}},[r("h3",{staticClass:"mb-8"},[t._v("SEND YOUR MESSAGE")]),t._v(" "),r("footerContactForm")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{Logo:r(338).default}),c()(component,{VBtn:d.a,VCol:v.a,VContainer:h.a,VDivider:f.a,VIcon:m.a,VList:w.a,VListItem:_.a,VListItemContent:y.a,VListItemIcon:O.a,VListItemSubtitle:y.b,VListItemTitle:y.c,VRow:j.a})}}]);