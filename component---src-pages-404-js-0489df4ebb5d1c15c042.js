(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(156),s=a(157),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return o.a.createElement(c.a,{location:this.props.location,title:e},o.a.createElement(s.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(o.a.Component);t.default=l;var u="1097489062"},153:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(154);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},154:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},155:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},156:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(153),o=a(164),c=a(165),s=a.n(c);t.a=function(e){var t,a=e.location,n=e.title,c=e.children,l=Object(o.a)(!1);return t="/experience/"===a.pathname?r.a.createElement("h1",{className:"flex-1 no-underline"},r.a.createElement(i.a,{to:"/"},n)):r.a.createElement("h3",{className:"flex-1 no-underline"},r.a.createElement(i.a,{to:"/"},n)),r.a.createElement("div",{className:"font-sans w-5/6 sm:w-3/6 mx-auto flex flex-col content-between h-screen"},r.a.createElement("header",{className:"font-bold text-2xl flex content-between content-center py-8 items-center"},t,r.a.createElement(s.a,{inactiveLabel:"☀",activeLabel:"☾",value:!l.value,onToggle:l.toggle})),r.a.createElement("main",{className:"flex-grow"},c),r.a.createElement("footer",{className:"text-center my-4"},"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))}},157:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(166),l=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,c=n.data.site,s=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=u},158:function(e){e.exports={data:{site:{siteMetadata:{title:"FullStackJs",description:"javascript, javascript tiếng việt, javascript nâng cao.",author:"Le Van Son"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-0489df4ebb5d1c15c042.js.map