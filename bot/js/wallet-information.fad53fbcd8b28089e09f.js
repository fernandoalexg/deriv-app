(window.webpackJsonp=window.webpackJsonp||[]).push([["wallet-information"],{547:function(e,a,n){"use strict";n.r(a);var r=n(1),t=n.n(r),c=n(0),s=n.n(c),i=n(12),l=n(6),o=n.n(l);function u(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}var m=["default","success","warn","danger","info","success-invert","warn-invert"],d=["regular","large"],p=function(e){var a,n=e.mode,r=e.children,t=e.size,c=void 0===t?"regular":t,i=m.some(function(e){return e===n})?n:"default",l=d.some(function(e){return e===c})?c:"regular";return s.a.createElement("span",{className:o()("label",(a={},u(a,"label--".concat(l),l),u(a,"label--".concat(i),i),a))},r)};p.propTypes={children:t.a.oneOfType([t.a.arrayOf(t.a.node),t.a.node]),mode:t.a.oneOf(m)};var _=p,b=n(18),v=n(24),y=function(e){var a=e.amount,n=e.className,r=e.currency,t=void 0===r?"USD":r,c=e.has_sign,i=e.is_formatted,l=void 0===i||i,u="";+a&&(a<0||c)&&(u=a>0?"+":"-");var m=Math.abs(a),d=l?Object(v.formatMoney)(t,m,!0):m;return s.a.createElement(s.a.Fragment,null,c&&u,s.a.createElement("span",{className:o()(n,"symbols","symbols--".concat(t.toLowerCase()))}),d)};y.propTypes={amount:t.a.oneOfType([t.a.number,t.a.string]),className:t.a.string,currency:t.a.string,has_sign:t.a.bool,is_formatted:t.a.bool};var f=y,g=n(21),w=function(e){var a=e.currency;return e.is_virtual?s.a.createElement(b.a,{i18n_default_text:"Practice wallet"}):s.a.createElement(b.a,{i18n_default_text:"{{currency}} wallet",values:{currency:a.toUpperCase()}})},E=function(e){var a=e.currency,n=e.balance,r=e.has_description,t=e.has_loginid,c=e.is_virtual,l=e.is_website_status_ready,o=e.loginid;return s.a.createElement("div",{className:"account-wallet"},!c&&s.a.createElement(i.a,{icon:"IconAccountsCurrency",type:a.toLowerCase()}),c&&s.a.createElement(i.a,{icon:"IconDemo"}),s.a.createElement("span",{className:"description"},r?s.a.createElement(w,{currency:a,is_virtual:c}):s.a.createElement("span",{className:"description__currency"},a.toUpperCase())),t&&s.a.createElement("span",{className:"current-loginid"},o),l&&s.a.createElement(_,{mode:"".concat(c?"warn-invert":"success-invert"),size:"large"},s.a.createElement(f,{amount:n,currency:a})),!l&&s.a.createElement("div",null))};E.propTypes={has_description:t.a.bool,has_loginid:t.a.bool};a.default=Object(g.b)(function(e){var a=e.client;return{balance:a.balance,currency:a.currency,is_virtual:a.is_virtual,is_website_status_ready:a.is_website_status_ready,loginid:a.loginid}})(E)}}]);
//# sourceMappingURL=wallet-information.fad53fbcd8b28089e09f.js.map