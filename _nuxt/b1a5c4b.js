(window.webpackJsonp=window.webpackJsonp||[]).push([[32,35],{636:function(t,e,r){"use strict";r.r(e);var n=r(637),o={props:{title:{type:String,default:""},subtitle:{type:String,default:""},ingress:{type:String,default:""},info:{type:String,default:""}},methods:{compileMarkdown:function(t){return n.marked.parseInline(t,[])}}},l=r(39),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[t.title?r("h2",{staticClass:"text-h4 text-md-h3 text-center font-weight-black mb-8",domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.subtitle?r("h3",{staticClass:"text-h6 text-md-h5 font-weight-medium font-italic text-center mb-8",domProps:{textContent:t._s(t.subtitle)}}):t._e(),t._v(" "),t.ingress?r("h4",{staticClass:"text-h6 font-weight-medium font-italic text-center mb-8",domProps:{innerHTML:t._s(t.compileMarkdown(t.ingress))}}):t._e(),t._v(" "),t.info?r("p",{staticClass:"text-subtitle-1 font-weight-light text-center mb-8",domProps:{innerHTML:t._s(t.compileMarkdown(t.info))}}):t._e()])}),[],!1,null,null,null);e.default=component.exports},705:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{title:"The FAIRtracks ecosystem",subtitle:"– Hoards of genomic track data at your fingertips",cards:[{title:"Bridging the data gaps",subtitle:"Community building",text:"We aim to connect: <p><ul><li>data producers</li><li>biocurators</li><li>tool developers</li><li>the FAIR community</li><li>researchers/data analysts</li><li>...and other interested parties</li></ul></p>Together we can mobilise the power of genomic track data and metadata at the fingertips of the researchers / bioinformaticians that are the target end users.",callout:"01"},{title:"Quality metadata and services",subtitle:"Technology",text:'Working in concert with the <a href="https://github.com/fairtracks/fairtracks_standard#readme">FAIRtracks draft standard</a> for metadata of genomic tracks, we have built an <nuxt-link to="/services"> ecosystem of services</nuxt-link> to interface with track metadata: <p><ul><li><a href="https://github.com/fairtracks/fairtracks_augment#readme">Metadata augmentation</li><li><a href="https://github.com/fairtracks/fairtracks_validator#readme">Metadata validation</li><li><a href="https://trackfind.elixir.no">Precision search</li><li><a href="/services">...and more</li></ul></p>',callout:"02"},{title:"Endorsed by ELIXIR",subtitle:"Organisational backing",text:'<p>The FAIRtracks ecosystem has been developed and is being provided as part of the national Service Delivery Plans by <a href="https://elixir.no/">ELIXIR Norway</a> and <a href="https://elixir-europe.org/about-us/who-we-are/nodes/spain">ELIXIR Spain</a>,  and is supported by the <a href="https://trackhubregistry.org/">Track Hub Registry group</a> at <a href="https://www.ebi.ac.uk/">EMBL-EBI</a>.</p><p>From 2021, FAIRtracks has been endorsed by ELIXIR Europe as a <a href="https://elixir-europe.org/news/four-new-elixir-recommended-interoperability-resources">Recommended Interoperability Resource (RIR)</a>.</p>',callout:"03"}]}}},o=r(39),l=r(77),c=r.n(l),d=r(239),h=r(624),m=r(631),f=r(234),v=r(232),w=r(625),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"py-16",attrs:{id:"intro"}},[r("v-container",[r("v-responsive",{staticClass:"max-auto mx-auto text-center",attrs:{"max-width":"600"}},[r("v-avatar",{staticClass:"mb-8",attrs:{color:"primary",size:"70"}},[r("v-icon",{attrs:{"x-large":"",dark:""}},[t._v("mdi-web")])],1),t._v(" "),r("SectionsMainTitle",{attrs:{title:t.title,subtitle:t.subtitle}}),t._v(" "),r("p",{staticClass:"title font-weight-light"},[t._v('\n        In the spirit of Open Science, the FAIRtracks ecosystem provides\n        technical solutions for the abundance of genome browser track files\n        ("genomic tracks") to become "Findable, Accessible, Interoperable, and\n        Reusable"\n        '),r("a",{attrs:{href:"https://www.go-fair.org/fair-principles/"}},[t._v(" (FAIR) ")]),t._v("\n        in new research contexts.\n      ")]),t._v(" "),r("p")],1),t._v(" "),r("v-row",{staticClass:"pt-12"},t._l(t.cards,(function(e){return r("v-col",{key:e.title,staticClass:"pa-6",attrs:{cols:"12",md:"4"}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:e.callout?9:12}},[r("div",{staticClass:"pr-2"},[r("div",{staticClass:"text--disabled",domProps:{textContent:t._s(e.subtitle)}}),t._v(" "),r("h4",{staticClass:"text-uppercase mt-1 mb-4",staticStyle:{"letter-spacing":"0.15em"},domProps:{textContent:t._s(e.title)}}),t._v(" "),r("p",{domProps:{innerHTML:t._s(e.text)}})])]),t._v(" "),e.callout?r("v-col",{attrs:{cols:"2"}},[r("span",{staticClass:"text-h3 grey--text font-weight-bold pr-8",staticStyle:{opacity:"0.1"}},[t._v(t._s(e.callout))])]):t._e()],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{SectionsMainTitle:r(636).default}),c()(component,{VAvatar:d.a,VCol:h.a,VContainer:m.a,VIcon:f.a,VResponsive:v.a,VRow:w.a})}}]);