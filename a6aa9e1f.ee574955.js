(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{248:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(251),l=t(264),o=t(270),i=t(254);var s=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(i.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))};a.default=function(e){var a=e.metadata,t=e.items,n=Object(c.a)().siteConfig.title,i="/"===a.permalink?n:"Blog";return r.a.createElement(l.a,{title:i,description:"Blog"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},t.map((function(e){var a=e.content;return r.a.createElement(o.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null))})),r.a.createElement(s,{metadata:a})))))}},255:function(e,a,t){"use strict";var n=t(0),r=t(257);a.a=function(){return Object(n.useContext)(r.a)}},256:function(e,a,t){"use strict";var n=t(251),r=t(255),c=t(253),l=t(258);a.a=function(){var e=Object(n.a)().siteConfig,a=(e=void 0===e?{}:e).baseUrl,t=e.themeConfig.navbar,o=(t=void 0===t?{}:t).logo,i=void 0===o?{}:o,s=Object(r.a)().isDarkTheme,m=i.href||a,u={};i.target?u={target:i.target}:Object(l.a)(m)||(u={rel:"noopener noreferrer",target:"_blank"});var d=i.srcDark&&s?i.srcDark:i.src;return{logoLink:m,logoLinkProps:u,logoImageUrl:Object(c.a)(d),logoAlt:i.alt}}},257:function(e,a,t){"use strict";var n=t(0),r=t.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});a.a=r},262:function(e,a,t){"use strict";var n=t(0);a.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},264:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(266),l=t(258),o=t(251),i=t(253),s="",m="dark",u=function(){var e=Object(o.a)().siteConfig,a=(e=void 0===e?{}:e).themeConfig.disableDarkMode,t=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=t[0],c=t[1],l=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(a){console.error(a)}}),[c]),i=Object(n.useCallback)((function(){c(s),l(s)}),[]),u=Object(n.useCallback)((function(){c(m),l(m)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!a)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(t){console.error(t)}}),[c]),Object(n.useEffect)((function(){a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var a=e.matches;c(a?m:s)}))}),[]),{isDarkTheme:r===m,setLightTheme:i,setDarkTheme:u}},d=t(257);var b=function(e){var a=u(),t=a.isDarkTheme,n=a.setLightTheme,c=a.setDarkTheme;return r.a.createElement(d.a.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:c}},e.children)},v=(t(260),t(259),function(){var e=Object(n.useState)({}),a=e[0],t=e[1],r=Object(n.useCallback)((function(e,a){try{localStorage.setItem("docusaurus.tab."+e,a)}catch(t){console.error(t)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},a=0;a<localStorage.length;a+=1){var n=localStorage.key(a);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}t(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:a,setTabGroupChoices:function(e,a){t((function(t){var n;return Object.assign(Object.assign({},t),{},((n={})[e]=a,n))})),r(e,a)}}}),h=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});var f=function(e){var a=v(),t=a.tabGroupChoices,n=a.setTabGroupChoices;return r.a.createElement(h.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)},g=t(127),E=t.n(g);var p=function(){var e=Object(o.a)().siteConfig,a=(e=void 0===e?{}:e).themeConfig.announcementBar,t=void 0===a?{}:a,c=t.id,l=t.content,i=t.backgroundColor,s=t.textColor,m=Object(n.useState)(!0),u=m[0],d=m[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("docusaurus.announcement.id"),a=c!==e;localStorage.setItem("docusaurus.announcement.id",c),a&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(a||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&d(!1)}),[]),!l||u?null:r.a.createElement("div",{className:E.a.announcementBar,style:{backgroundColor:i,color:s},role:"banner"},r.a.createElement("div",{className:E.a.announcementBarContent,dangerouslySetInnerHTML:{__html:l}}),r.a.createElement("button",{type:"button",className:E.a.announcementBarClose,onClick:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),d(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},k=t(2),j=(t(265),t(9)),N=t(252),O=t.n(N),_=t(254),w=t(261),C=t(268),y=t.n(C),T=t(128),S=t.n(T),x=function(){return r.a.createElement("span",{className:O()(S.a.toggle,S.a.moon)})},B=function(){return r.a.createElement("span",{className:O()(S.a.toggle,S.a.sun)})},L=function(e){var a=Object(o.a)().isClient;return r.a.createElement(y.a,Object(k.a)({disabled:!a,icons:{checked:r.a.createElement(x,null),unchecked:r.a.createElement(B,null)}},e))},D=t(255),I=t(267);var M=function(e){var a=Object(n.useState)(e),t=a[0],r=a[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[t,r]},P=t(50),R=function(){return{scrollX:P.a.canUseDOM?window.pageXOffset:0,scrollY:P.a.canUseDOM?window.pageYOffset:0}},G=function(e,a){void 0===a&&(a=[]);var t=Object(n.useState)(R()),r=t[0],c=t[1],l=function(){var a=R();c(a),e&&e(a)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l,{passive:!0})}}),a),r},H=function(e){var a=Object(n.useState)(!0),t=a[0],r=a[1],c=Object(n.useState)(!1),l=c[0],o=c[1],i=Object(n.useState)(0),s=i[0],m=i[1],u=Object(n.useState)(0),d=u[0],b=u[1],v=Object(n.useCallback)((function(e){null!==e&&b(e.getBoundingClientRect().height)}),[]),h=Object(I.b)(),f=M(h.hash),g=f[0],E=f[1];return G((function(a){var t=a.scrollY;if(e&&(0===t&&r(!0),!(t<d))){if(l)return o(!1),r(!1),void m(t);var n=document.documentElement.scrollHeight-d,c=window.innerHeight;s&&t>=s?r(!1):t+c<n&&r(!0),m(t)}}),[s,d]),Object(n.useEffect)((function(){e&&(r(!0),E(h.hash))}),[h]),Object(n.useEffect)((function(){e&&g&&o(!0)}),[g]),{navbarRef:v,isNavbarVisible:t}},U=t(262),A=t(256),F=t(263),J=t(129),W=t.n(J);function V(e){var a=e.activeBasePath,t=e.activeBaseRegex,n=e.to,c=e.href,l=e.label,o=e.activeClassName,s=void 0===o?"navbar__link--active":o,m=e.prependBaseUrlToHref,u=Object(j.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),d=Object(i.a)(n),b=Object(i.a)(a),v=Object(i.a)(c,!0);return r.a.createElement(_.a,Object(k.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:m?v:c}:Object.assign({isNavLink:!0,activeClassName:s,to:d},a||t?{isActive:function(e,a){return t?new RegExp(t).test(a.pathname):a.pathname.startsWith(b)}}:null),u),l)}function $(e){var a=e.items,t=e.position,n=e.className,c=Object(j.a)(e,["items","position","className"]),l=function(e,a){return void 0===a&&(a=!1),O()({"navbar__item navbar__link":!a,dropdown__link:a},e)};return a?r.a.createElement("div",{className:O()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},r.a.createElement(V,Object(k.a)({className:l(n)},c,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),c.label),r.a.createElement("ul",{className:"dropdown__menu"},a.map((function(e,a){var t=e.className,n=Object(j.a)(e,["className"]);return r.a.createElement("li",{key:a},r.a.createElement(V,Object(k.a)({activeClassName:"dropdown__link--active",className:l(t,!0)},n)))})))):r.a.createElement(V,Object(k.a)({className:l(n)},c))}function Y(e){var a=e.items,t=(e.position,e.className),n=Object(j.a)(e,["items","position","className"]),c=function(e,a){return void 0===a&&(a=!1),O()("menu__link","navbar__link",{"menu__link--sublist":a},e)};return a?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(V,Object(k.a)({className:c(t,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},a.map((function(e,a){var t=e.className,l=Object(j.a)(e,["className"]);return r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement(V,Object(k.a)({activeClassName:"menu__link--active",className:c(t)},l,{onClick:n.onClick})))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(V,Object(k.a)({className:c(t)},n)))}var K=function(){var e,a,t=Object(o.a)(),c=t.siteConfig.themeConfig,l=c.navbar,i=(l=void 0===l?{}:l).title,s=l.links,m=void 0===s?[]:s,u=l.hideOnScroll,d=void 0!==u&&u,b=c.disableDarkMode,v=void 0!==b&&b,h=t.isClient,f=Object(n.useState)(!1),g=f[0],E=f[1],p=Object(n.useState)(!1),j=p[0],N=p[1],C=Object(D.a)(),y=C.isDarkTheme,T=C.setLightTheme,S=C.setDarkTheme,x=H(d),B=x.navbarRef,I=x.isNavbarVisible,M=Object(A.a)(),P=M.logoLink,R=M.logoLinkProps,G=M.logoImageUrl,J=M.logoAlt;Object(U.a)(g);var V=Object(n.useCallback)((function(){E(!0)}),[E]),K=Object(n.useCallback)((function(){E(!1)}),[E]),X=Object(n.useCallback)((function(e){return e.target.checked?S():T()}),[T,S]);return r.a.createElement("nav",{ref:B,className:O()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":g},e[W.a.navbarHideable]=d,e[W.a.navbarHidden]=!I,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=m&&0!==m.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:V,onKeyDown:V},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(_.a,Object(k.a)({className:"navbar__brand",to:P},R),null!=i&&r.a.createElement("strong",{className:O()("navbar__title",(a={},a[W.a.hideLogoText]=j,a))},i,r.a.createElement("span",{className:"badge badge--info"},"V2 alpha")))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},m.filter((function(e){return"left"===e.position})).map((function(e,a){return r.a.createElement($,Object(k.a)({},e,{key:a}))})),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(F.a,{href:"https://github.com/software-mansion/react-native-reanimated","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-reanimated on GitHub"},"Star")),m.filter((function(e){return"right"===e.position})).map((function(e,a){return r.a.createElement($,Object(k.a)({},e,{key:a}))})),!v&&r.a.createElement(L,{className:W.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:y,onChange:X}),r.a.createElement(w.a,{handleSearchBarToggle:N,isSearchBarExpanded:j}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:K}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(_.a,Object(k.a)({className:"navbar__brand",onClick:K,to:P},R),null!=G&&r.a.createElement("img",{key:h,className:"navbar__logo",src:G,alt:J}),null!=i&&r.a.createElement("strong",{className:"navbar__title"},i)),!v&&g&&r.a.createElement(L,{"aria-label":"Dark mode toggle in sidebar",checked:y,onChange:X})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},m.map((function(e,a){return r.a.createElement(Y,Object(k.a)({},e,{onClick:K,key:a}))})))))))};t(130);var X=function(){var e=Object(o.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,n=Object(i.a)("/img/swmLogo.svg");return t?r.a.createElement("footer",{className:O()("footer",{"footer--dark":"dark"===t.style})},r.a.createElement("div",{className:"footer-container"},r.a.createElement(_.a,{className:"navbar__brand footer-image-link",to:"https://www.swmansion.com/"},null!=n&&r.a.createElement("img",{className:"navbar__logo",src:n,alt:"Software Mansion logo"})),r.a.createElement("div",{className:"githubStarLink"},r.a.createElement(F.a,{href:"https://github.com/software-mansion/react-native-reanimated","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star software-mansion/react-native-reanimated on GitHub"},"Star")))):null};t(131);a.a=function(e){var a=Object(o.a)().siteConfig,t=void 0===a?{}:a,n=t.favicon,s=t.title,m=t.themeConfig.image,u=t.url,d=t.customFields,v=e.children,h=e.title,g=e.noFooter,E=e.description,k=e.image,j=e.keywords,N=e.permalink,O=e.version,_=d&&d.shortTitle?d.shortTitle:s,w=h?h+" | "+_:_,C=k||m,y=u+Object(i.a)(C);Object(l.a)(C)||(y=C);var T=Object(i.a)(n);return r.a.createElement(b,null,r.a.createElement(f,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),w&&r.a.createElement("title",null,w),w&&r.a.createElement("meta",{property:"og:title",content:w}),n&&r.a.createElement("link",{rel:"shortcut icon",href:T}),E&&r.a.createElement("meta",{name:"description",content:E}),E&&r.a.createElement("meta",{property:"og:description",content:E}),O&&r.a.createElement("meta",{name:"docsearch:version",content:O}),j&&j.length&&r.a.createElement("meta",{name:"keywords",content:j.join(",")}),C&&r.a.createElement("meta",{property:"og:image",content:y}),C&&r.a.createElement("meta",{property:"twitter:image",content:y}),C&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+w}),N&&r.a.createElement("meta",{property:"og:url",content:u+N}),N&&r.a.createElement("link",{rel:"canonical",href:u+N}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(p,null),r.a.createElement(K,null),r.a.createElement("div",{className:"main-wrapper"},v),!g&&r.a.createElement(X,null)))}},269:function(e,a,t){"use strict";var n=t(2),r=t(0),c=t.n(r),l=t(254),o=(t(271),t(272),t(70),t(273),t(274),t(265),t(252)),i=t.n(o),s=t(278),m=t(275),u=t.n(m),d=t(276),b=t.n(d),v=t(251),h=t(277),f=t(255),g=function(){var e=Object(v.a)().siteConfig.themeConfig.prism,a=void 0===e?{}:e,t=Object(f.a)().isDarkTheme,n=a.theme||h.a,r=a.darkTheme||n;return t?r:n},E=t(132),p=t.n(E),k=/{([\d,-]+)}/,j=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var a={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},t=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+a[e].start+"\\s*("+t+")\\s*"+a[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},N=/title=".*"/,O=function(e){var a=e.children,t=e.className,l=e.metastring,o=Object(v.a)().siteConfig.themeConfig.prism,m=void 0===o?{}:o,d=Object(r.useState)(!1),h=d[0],f=d[1],E=Object(r.useState)(!1),O=E[0],_=E[1];Object(r.useEffect)((function(){_(!0)}),[]);var w=Object(r.useRef)(null),C=Object(r.useRef)(null),y=[],T="",S=g();if(l&&k.test(l)){var x=l.match(k)[1];y=b.a.parse(x).filter((function(e){return e>0}))}l&&N.test(l)&&(T=l.match(N)[0].split("title=")[1].replace(/"+/g,"")),Object(r.useEffect)((function(){var e;return C.current&&(e=new u.a(C.current,{target:function(){return w.current}})),function(){e&&e.destroy()}}),[C.current,w.current]);var B=t&&t.replace(/language-/,"");!B&&m.defaultLanguage&&(B=m.defaultLanguage);var L=a.replace(/\n$/,"");if(0===y.length&&void 0!==B){for(var D,I="",M=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return j(["js","jsBlock"]);case"jsx":case"tsx":return j(["js","jsBlock","jsx"]);case"html":return j(["js","jsBlock","html"]);case"python":case"py":return j(["python"]);default:return j()}}(B),P=a.replace(/\n$/,"").split("\n"),R=0;R<P.length;){var G=R+1,H=P[R].match(M);if(null!==H){switch(H.slice(1).reduce((function(e,a){return e||a}),void 0)){case"highlight-next-line":I+=G+",";break;case"highlight-start":D=G;break;case"highlight-end":I+=D+"-"+(G-1)+","}P.splice(R,1)}else R+=1}y=b.a.parse(I),L=P.join("\n")}var U=function(){window.getSelection().empty(),f(!0),setTimeout((function(){return f(!1)}),2e3)};return c.a.createElement(s.a,Object(n.a)({},s.b,{key:O,theme:S,code:L,language:B}),(function(e){var a,t,r=e.className,l=e.style,o=e.tokens,s=e.getLineProps,m=e.getTokenProps;return c.a.createElement(c.a.Fragment,null,T&&c.a.createElement("div",{style:l,className:p.a.codeBlockTitle},T),c.a.createElement("div",{className:p.a.codeBlockContent},c.a.createElement("button",{ref:C,type:"button","aria-label":"Copy code to clipboard",className:i()(p.a.copyButton,(a={},a[p.a.copyButtonWithTitle]=T,a)),onClick:U},h?"Copied":"Copy"),c.a.createElement("div",{tabIndex:"0",className:i()(r,p.a.codeBlock,(t={},t[p.a.codeBlockWithTitle]=T,t))},c.a.createElement("div",{ref:w,className:p.a.codeBlockLines,style:l},o.map((function(e,a){1===e.length&&""===e[0].content&&(e[0].content="\n");var t=s({line:e,key:a});return y.includes(a+1)&&(t.className=t.className+" docusaurus-highlight-code-line"),c.a.createElement("div",Object(n.a)({key:a},t),e.map((function(e,a){return c.a.createElement("span",Object(n.a)({key:a},m({token:e,key:a})))})))}))))))}))},_=t(9),w=(t(133),t(134)),C=t.n(w),y=function(e){return function(a){var t,n=a.id,r=Object(_.a)(a,["id"]),l=Object(v.a)().siteConfig,o=(l=void 0===l?{}:l).themeConfig,s=(o=void 0===o?{}:o).navbar,m=(s=void 0===s?{}:s).hideOnScroll,u=void 0!==m&&m;return n?c.a.createElement(e,r,c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:i()("anchor",(t={},t[C.a.enhancedAnchor]=!u,t)),id:n}),r.children,c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):c.a.createElement(e,r)}},T=t(135),S=t.n(T);a.a={code:function(e){var a=e.children;return"string"==typeof a?c.a.createElement(O,e):a},a:function(e){return/\.[^./]+$/.test(e.href)?c.a.createElement("a",e):c.a.createElement(l.a,e)},pre:function(e){return c.a.createElement("div",Object(n.a)({className:S.a.mdxCodeBlock},e))},h1:y("h1"),h2:y("h2"),h3:y("h3"),h4:y("h4"),h5:y("h5"),h6:y("h6")}},270:function(e,a,t){"use strict";t(70);var n=t(0),r=t.n(n),c=t(252),l=t.n(c),o=t(250),i=t(254),s=t(269),m=t(136),u=t.n(m),d=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,c,m,b=e.children,v=e.frontMatter,h=e.metadata,f=e.truncated,g=e.isBlogPostPage,E=void 0!==g&&g,p=h.date,k=h.permalink,j=h.tags,N=h.readingTime,O=v.author,_=v.title,w=v.author_url||v.authorURL,C=v.author_title||v.authorTitle,y=v.author_image_url||v.authorImageURL;return r.a.createElement("article",{className:E?void 0:"margin-bottom--xl"},(a=E?"h1":"h2",t=p.substring(0,10).split("-"),n=t[0],c=d[parseInt(t[1],10)-1],m=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:l()("margin-bottom--sm",u.a.blogPostTitle)},E?_:r.a.createElement(i.a,{to:k},_)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:p,className:u.a.blogPostDate},c," ",m,", ",n," ",N&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(N)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},y&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:w,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:y,alt:O})),r.a.createElement("div",{className:"avatar__intro"},O&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},O)),r.a.createElement("small",{className:"avatar__subtitle"},C)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(o.a,{components:s.a},b)),(j.length>0||f)&&r.a.createElement("footer",{className:"row margin-vert--lg"},j.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),j.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),f&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:h.permalink,"aria-label":"Read more about "+_},r.a.createElement("strong",null,"Read More")))))}}}]);