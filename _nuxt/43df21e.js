(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{208:function(t,e,n){"use strict";var r=n(1),o=n(279),l=n.n(o);r.a.component("cookie-law",l.a)},209:function(t,e,n){"use strict";var r=n(1),o=n(280);r.a.component("vue-if-bot",o.a)},210:function(t,e,n){"use strict";var r=n(281),o=new(n.n(r).a)({max:10,maxAge:36e5});e.a=function(t){t.$vuetify.theme.options.themeCache=o}},211:function(t,e,n){"use strict";var r=n(282),o=n.n(r);e.a=function(t){t.$vuetify.theme.options.minifyTheme=o.a}},252:function(t,e,n){},273:function(t,e,n){},285:function(t,e,n){"use strict";var r=n(286),o=n(287),l={components:{siteHeader:r.default,siteFooter:o.default}},c=n(35),v=n(57),d=n.n(v),m=n(386),f=n(393),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[n("siteHeader"),t._v(" "),n("v-main",[n("nuxt")],1),t._v(" "),n("Notification"),t._v(" "),n("siteFooter")],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{Notification:n(376).default}),d()(component,{VApp:m.a,VMain:f.a})},286:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{clipped:!1,drawer:!1,items:[{title:"Home",to:"/"},{title:"About",to:"/about"},{title:"Services",to:"/services",submenu:[{title:"Services Page",to:"/services#a"},{title:"Static Websites",to:"/services#b"}]},{title:"Pricing",to:"/pricing"},{title:"Gallery",to:"/gallery"},{title:"Blog",to:"/blog"},{title:"Contact",to:"/contact"}]}},methods:{changeThemeColor:function(){!0===this.$vuetify.theme.dark?this.$vuetify.theme.dark=!1:this.$vuetify.theme.dark=!0}}},o=(n(350),n(35)),l=n(57),c=n.n(l),v=n(395),d=n(389),m=n(214),f=n(196),h=n(197),_=n(198),x=n(122),y=n(75),k=n(201),w=n(394),C=n(396),V=n(390),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{staticClass:"secondary",attrs:{fixed:"",app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{staticClass:"secondary",attrs:{dense:""}},t._l(t.items,(function(e,i){return n("v-list-item-group",{key:i},[e.submenu?n("v-list-group",{attrs:{"prepend-icon":e.icon,ripple:!1,"no-action":"",value:"true"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item",{key:e.title,staticClass:"pl-0",attrs:{ripple:!1,to:e.to},on:{click:function(n){return n.stopPropagation(),t.$router.push({path:e.to})}}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title.toUpperCase())}})],1)],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.submenu,(function(e){return n("v-list-item",{key:e.title,attrs:{ripple:!1,to:e.to}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],2):n("v-list-item",{attrs:{ripple:!1,to:e.to}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title.toUpperCase())}})],1)],1)],1)})),1)],1),t._v(" "),n("v-app-bar",{staticClass:"secondary",attrs:{fixed:"",app:"",height:"64"}},[n("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!0}}}),t._v(" "),n("Logo"),t._v(" "),n("v-spacer"),t._v(" "),t._l(t.items,(function(e,menuitem){return[e.submenu?[n("v-menu",{key:menuitem,attrs:{"open-on-hover":"","offset-y":"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,l=r.attrs;return[n("v-btn",t._g(t._b({staticClass:"py-8 hidden-sm-and-down",attrs:{plain:"",ripple:!1,to:e.to}},"v-btn",l,!1),o),[t._v("\n              "+t._s(e.title)+"\n              "),n("v-icon",{staticClass:"mx-0",attrs:{right:"",small:""}},[t._v(" mdi-chevron-down ")])],1)]}}],null,!0)},[t._v(" "),n("v-list",{staticClass:"secondary",attrs:{dense:""}},t._l(e.submenu,(function(e,r){return n("v-list-item",{key:r,attrs:{ripple:!1,link:"",to:e.to}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)]:n("v-btn",{key:menuitem,staticClass:"py-8 hidden-sm-and-down",attrs:{depressed:"",tile:"",plain:"",ripple:!1,to:e.to}},[t._v(t._s(e.title)+"\n      ")])]})),t._v(" "),n("v-btn",{attrs:{icon:"",ripple:!1},on:{click:t.changeThemeColor}},[n("v-icon",[t._v(t._s(t.$vuetify.theme.dark?"mdi-white-balance-sunny":"mdi-weather-night")+"\n      ")])],1)],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{Logo:n(292).default}),c()(component,{VAppBar:v.a,VAppBarNavIcon:d.a,VBtn:m.a,VIcon:f.a,VList:h.a,VListGroup:_.a,VListItem:x.a,VListItemContent:y.a,VListItemGroup:k.a,VListItemTitle:y.c,VMenu:w.a,VNavigationDrawer:C.a,VSpacer:V.a})},287:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{menu:[{text:"Support",link:"#"},{text:"Contact Us",link:"#"},{text:"Disclaimer",link:"#"},{text:"Covid-19 Operation",link:"#"}],social:[{platform:"Twitter",link:"https://twitter.com/fairtracks",icon:"mdi-twitter"},{platform:"Github",link:"https://github.com/fairtracks",icon:"mdi-github"}]}}},o=n(35),l=n(57),c=n.n(l),v=n(214),d=n(203),m=n(166),f=n(391),h=n(392),_=n(196),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{height:"100px"}},[n("v-footer",{attrs:{padless:""}},[n("v-card",{staticClass:"secondary text-center grey--text text--lighten-1",attrs:{flat:"",tile:"",width:"100%"}},[n("v-card-text",t._l(t.social,(function(e,i){return n("v-btn",{key:"social-"+i,attrs:{icon:"",small:"",color:"info",href:e.link,target:"_blank"}},[n("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e.icon))])],1)})),1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"secondary info--text"},[t._v("\n        "+t._s((new Date).getFullYear())+" ©\n        "),n("nuxt-link",{staticClass:"primary--text",attrs:{to:"/"}},[t._v("FAIRtracks")]),t._v("\n        (based on the\n        "),n("a",{attrs:{href:"https://github.com/staticdesigner/modevue"}},[t._v("ModeVue")]),t._v("\n        template, available under the MIT license)\n      ")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VCard:d.a,VCardText:m.c,VDivider:f.a,VFooter:h.a,VIcon:_.a})},288:function(t,e,n){"use strict";var r=n(35),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("nuxt")}),[],!1,null,null,null);e.a=component.exports},292:function(t,e,n){"use strict";n.r(e);var r=n(35),o=n(57),l=n.n(o),c=n(159),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticStyle:{height:"100%","aspect-ratio":"1532/480"},attrs:{to:"/"}},[e("v-img",{attrs:{contain:"",height:"100%","aspect-ratio":1532/480,src:"/logos/FairTracks-logo-light-white.png",alt:"FAIRtracks logo"}})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VImg:c.a})},295:function(t,e,n){n(296),t.exports=n(297)},326:function(t,e,n){"use strict";n(252)},350:function(t,e,n){"use strict";n(273)},376:function(t,e,n){"use strict";n.r(e);var r=n(35),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-if-bot",[n("footer",[n("cookie-law",{staticClass:"secondary grey--text text--lighten-1",attrs:{"button-text":"Accept","button-class":"v-btn v-size--large white black--text","storage-type":"cookies"}},[n("div",{attrs:{slot:"message"},slot:"message"},[t._v("\n        This website uses cookies to ensure you get the best experience on our\n        website.\n        "),n("a",{attrs:{href:"https://elixir-oslo.github.io/gdpr/"}},[t._v("\n          Read more about your privacy and our terms of service .\n        ")])]),t._v(" "),n("div",{attrs:{slot:"buttonText"},slot:"buttonText"},[t._v("Hei hei")])])],1)])}),[],!1,null,null,null);e.default=component.exports},84:function(t,e,n){"use strict";var r={layout:"error-layout",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"Page you are looking for could not be found.",otherError:"An error occurred",title404:"404 error"}},head:function(){return{title:404===this.error.statusCode?this.title404:this.otherError}}},o=(n(326),n(35)),l=n(57),c=n.n(l),v=n(386),d=n(387),m=n(397),f=n(159),h=n(388),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{class:t.$vuetify.theme.dark?"grey darken-4":"white",attrs:{dark:""}},[n("section",{attrs:{id:"error"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},[n("v-container",{staticClass:"py-16 text-center"},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[404===t.error.statusCode?n("div",[n("span",{staticClass:"text-h5 text-sm-h4 text--disabled"},[t._v("\n                  "+t._s(t.pageNotFound)+"\n                ")]),t._v(" "),n("div",{staticClass:"pt-16"},[n("v-img",{staticClass:"mx-auto",attrs:{src:"/404.svg","lazy-src":"404.svg","max-width":"700"}}),t._v(" "),n("div",{staticClass:"mt-4"},[n("small",[n("a",{staticClass:"\n                          text--primary text--disabled text-decoration-none\n                        ",attrs:{href:"https://www.freepik.com/vectors/business"}},[t._v("Business vector created by pikisuperstar -\n                        www.freepik.com")])])])],1)]):n("div",{staticClass:"text-h5 text-sm-h4 text--disabled"},[t._v("\n                "+t._s(t.otherError)+"\n              ")]),t._v(" "),n("p",{staticClass:"pt-16 text-uppercase"},[t._v("\n                Go to\n                "),n("NuxtLink",{staticClass:"text-decoration-none",attrs:{to:"/"}},[t._v("\n                  Home page\n                ")])],1)])],1)],1)],1)],1)],1)])}),[],!1,null,"bbf6092a",null);e.a=component.exports;c()(component,{VApp:v.a,VCol:d.a,VContainer:m.a,VImg:f.a,VRow:h.a})}},[[295,23,2,24]]]);