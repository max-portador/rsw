(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,t,n){e.exports={active:"DialogItem_active__2qnc5",dialog:"DialogItem_dialog__3tDA2",img:"DialogItem_img__30y70",name:"DialogItem_name__OhZ87"}},102:function(e,t,n){e.exports={message:"Messages_message__3J_zU",img:"Messages_img__2NzHH",text:"Messages_text__2j9Rn"}},103:function(e,t,n){e.exports={content:"Dialogs_content__1VIii",dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",messageArea:"Dialogs_messageArea__18mWJ",messages:"Dialogs_messages__1w_Up",messageInput:"Dialogs_messageInput__-3Pq0"}},116:function(e,t,n){"use strict";n.r(t);var r=n(98),a=n(15),o=n(24),i=n(56),c=n(97),s=n(0),u=n.n(s),l=n(101),f=n.n(l),m=n(14),p=function(e){var t=e.name,n=e.id;return u.a.createElement("div",{className:f.a.dialog},u.a.createElement(m.b,{to:"/dialogs/".concat(n),className:function(e){return e.isActive?f.a.active:""}},u.a.createElement("img",{className:f.a.img,src:"https://www.pinclipart.com/picdir/big/200-2008697_account-customer-login-man-user-icon-login-icon.png",alt:"profile"}),u.a.createElement("span",{className:f.a.name},t)))},g=n(102),d=n.n(g),h=function(e){var t=e.text;return u.a.createElement("div",{className:d.a.message},u.a.createElement("img",{className:d.a.img,src:"https://www.pinclipart.com/picdir/big/200-2008697_account-customer-login-man-user-icon-login-icon.png",alt:"MessageIcon"}),u.a.createElement("span",{className:d.a.text},t))},y=n(103),v=n.n(y),b=function(e){var t=e.dialogs.map(function(e,t){return u.a.createElement(p,{key:t,name:e.name,id:e.id})}),n=e.messages.map(function(e,t){return u.a.createElement(h,{key:t,text:e.message})}),r=Object(s.useState)(""),a=Object(c.a)(r,2),o=a[0],i=a[1];return u.a.createElement("div",{className:v.a.dialogs},u.a.createElement("div",{className:v.a.dialogsItems},t),u.a.createElement("div",{className:v.a.messageArea},u.a.createElement("div",{className:v.a.messages},n),u.a.createElement("div",{className:v.a.messageInput},u.a.createElement("textarea",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",value:o,onChange:function(e){i(e.currentTarget.value)}}),u.a.createElement("button",{onClick:function(){o.trim()&&(e.sendMessage(o),i(""))}}," Send message "))))};t.default=Object(o.c)(Object(a.b)(function(e){return{newMessageText:e.messagesPage.newMessageText,dialogs:e.messagesPage.dialogs,messages:e.messagesPage.messages,isAuth:e.auth.isAuth}},function(e){return{sendMessage:function(t){e(Object(i.b)(t))}}}),r.a)(b)},97:function(e,t,n){"use strict";var r=n(42);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",function(){return a})},98:function(e,t,n){"use strict";var r=n(28),a=n(29),o=n(31),i=n(30),c=n(0),s=n.n(c),u=n(15),l=n(99);t.a=function(e){var t=function(t){Object(o.a)(c,t);var n=Object(i.a)(c);function c(){return Object(r.a)(this,c),n.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(l.Redirect,{to:"/login"})}}]),c}(s.a.Component);return Object(u.b)(function(e){return{isAuth:e.auth.isAuth}})(t)}},99:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),o=r(n(0)),i=n(9);n(23),n(11);var c=r(n(12));function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){e.prototype=Object.create(t.prototype),function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e.prototype.constructor=e,t)}function l(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],0<=t.indexOf(n)||(a[n]=e[n]);return a}var f=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).history=i.createBrowserHistory(t.props),t}return u(t,e),t.prototype.render=function(){return o.createElement(a.Router,{history:this.history,children:this.props.children})},t}(o.Component),m=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).history=i.createHashHistory(t.props),t}return u(t,e),t.prototype.render=function(){return o.createElement(a.Router,{history:this.history,children:this.props.children})},t}(o.Component),p=function(e,t){return"function"==typeof e?e(t):e},g=function(e,t){return"string"==typeof e?i.createLocation(e,null,null,t):e},d=function(e){return e},h=o.forwardRef;void 0===h&&(h=d);var y=h(function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,i=l(e,["innerRef","navigate","onClick"]),c=i.target,u=s({},i,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}var t;e.defaultPrevented||0!==e.button||c&&"_self"!==c||((t=e).metaKey||t.altKey||t.ctrlKey||t.shiftKey)||(e.preventDefault(),r())}});return u.ref=d!==h&&t||n,o.createElement("a",u)}),v=h(function(e,t){var n=e.component,r=void 0===n?y:n,u=e.replace,f=e.to,m=e.innerRef,v=l(e,["component","replace","to","innerRef"]);return o.createElement(a.__RouterContext.Consumer,null,function(e){e||c(!1);var n=e.history,a=g(p(f,e.location),e.location),l=a?n.createHref(a):"",y=s({},v,{href:l,navigate:function(){var t=p(f,e.location),r=i.createPath(e.location)===i.createPath(g(t));(u||r?n.replace:n.push)(t)}});return d!==h?y.ref=t||m:y.innerRef=m,o.createElement(r,y)})}),b=function(e){return e},_=o.forwardRef;void 0===_&&(_=b);var j=_(function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,i=e.activeClassName,u=void 0===i?"active":i,f=e.activeStyle,m=e.className,d=e.exact,h=e.isActive,y=e.location,j=e.sensitive,O=e.strict,P=e.style,R=e.to,w=e.innerRef,E=l(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.createElement(a.__RouterContext.Consumer,null,function(e){e||c(!1);var n=y||e.location,i=g(p(R,n),n),l=i.pathname,N=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),x=N?a.matchPath(n.pathname,{path:N,exact:d,sensitive:j,strict:O}):null,A=!!(h?h(x,n):x),C="function"==typeof m?m(A):m,I="function"==typeof P?P(A):P;A&&(C=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return e}).join(" ")}(C,u),I=s({},I,f));var D=s({"aria-current":A&&r||null,className:C,style:I,to:i},E);return b!==_?D.ref=t||w:D.innerRef=w,o.createElement(v,D)})});Object.defineProperty(t,"MemoryRouter",{enumerable:!0,get:function(){return a.MemoryRouter}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return a.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return a.Redirect}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return a.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return a.Router}}),Object.defineProperty(t,"StaticRouter",{enumerable:!0,get:function(){return a.StaticRouter}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return a.Switch}}),Object.defineProperty(t,"generatePath",{enumerable:!0,get:function(){return a.generatePath}}),Object.defineProperty(t,"matchPath",{enumerable:!0,get:function(){return a.matchPath}}),Object.defineProperty(t,"useHistory",{enumerable:!0,get:function(){return a.useHistory}}),Object.defineProperty(t,"useLocation",{enumerable:!0,get:function(){return a.useLocation}}),Object.defineProperty(t,"useParams",{enumerable:!0,get:function(){return a.useParams}}),Object.defineProperty(t,"useRouteMatch",{enumerable:!0,get:function(){return a.useRouteMatch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return a.withRouter}}),t.BrowserRouter=f,t.HashRouter=m,t.Link=v,t.NavLink=j}}]);
//# sourceMappingURL=5.efe7974d.chunk.js.map