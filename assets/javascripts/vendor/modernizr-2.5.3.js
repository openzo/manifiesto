/*!
 * Modernizr v2.5.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(E.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e)if(b[e[r]]!==n)return"pfx"==t?e[r]:!0;return!1}function s(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.substr(1),o=(e+" "+k.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?c(o,t):(o=(e+" "+T.join(r+" ")+r).split(" "),s(o,t,n))}function l(){m.input=function(n){for(var r=0,o=n.length;o>r;r++)M[n[r]]=!!(n[r]in x);return M.list&&(M.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),M}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var r,o,i,a=0,c=e.length;c>a;a++)x.setAttribute("type",o=e[a]),r="text"!==x.type,r&&(x.value=w,x.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&x.style.WebkitAppearance!==n?(g.appendChild(x),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(x,null).WebkitAppearance&&0!==x.offsetHeight,g.removeChild(x)):/^(search|tel)$/.test(o)||(/^(url|email)$/.test(o)?r=x.checkValidity&&x.checkValidity()===!1:/^color$/.test(o)?(g.appendChild(x),g.offsetWidth,r=x.value!=w,g.removeChild(x)):r=x.value!=w)),P[e[a]]=!!r;return P}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,p="2.5.3",m={},h=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,x=t.createElement("input"),w=":)",C={}.toString,E=" -webkit- -moz- -o- -ms- ".split(" "),S="Webkit Moz O ms",k=S.split(" "),T=S.toLowerCase().split(" "),j={svg:"http://www.w3.org/2000/svg"},N={},P={},M={},$=[],D=$.slice,A=function(e,n,r,o){var i,a,c,s=t.createElement("div"),u=t.body,l=u?u:t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),s.appendChild(c);return i=["&#173;","<style>",e,"</style>"].join(""),s.id=v,l.innerHTML+=i,l.appendChild(s),u||(l.style.background="",g.appendChild(l)),a=n(s,e),u?s.parentNode.removeChild(s):l.parentNode.removeChild(l),!!a},L=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return A("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},z=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),F={}.hasOwnProperty;f=i(F,"undefined")||i(F.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return F.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=D.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(D.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(D.call(arguments)))};return r}),function(n,r){var o=n.join(""),i=r.length;A(o,function(n,r){for(var o=t.styleSheets[t.styleSheets.length-1],a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",c=n.childNodes,s={};i--;)s[c[i].id]=c[i];m.touch="ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch||9===(s.touch&&s.touch.offsetTop),m.csstransforms3d=9===(s.csstransforms3d&&s.csstransforms3d.offsetLeft)&&3===s.csstransforms3d.offsetHeight,m.generatedcontent=(s.generatedcontent&&s.generatedcontent.offsetHeight)>=1,m.fontface=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])},i,r)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",E.join("touch-enabled),("),v,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",E.join("transform-3d),("),v,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""),['#generatedcontent:after{content:"',w,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]),N.flexbox=function(){return u("flexOrder")},N["flexbox-legacy"]=function(){return u("boxDirection")},N.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},N.canvastext=function(){return!(!m.canvas||!i(t.createElement("canvas").getContext("2d").fillText,"function"))},N.webgl=function(){try{var r,o=t.createElement("canvas");r=!(!e.WebGLRenderingContext||!o.getContext("experimental-webgl")&&!o.getContext("webgl")),o=n}catch(i){r=!1}return r},N.touch=function(){return m.touch},N.geolocation=function(){return!!navigator.geolocation},N.postmessage=function(){return!!e.postMessage},N.websqldatabase=function(){return!!e.openDatabase},N.indexedDB=function(){return!!u("indexedDB",e)},N.hashchange=function(){return z("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},N.history=function(){return!(!e.history||!history.pushState)},N.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},N.websockets=function(){for(var t=-1,n=k.length;++t<n;)if(e[k[t]+"WebSocket"])return!0;return"WebSocket"in e},N.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},N.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},N.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},N.backgroundsize=function(){return u("backgroundSize")},N.borderimage=function(){return u("borderImage")},N.borderradius=function(){return u("borderRadius")},N.boxshadow=function(){return u("boxShadow")},N.textshadow=function(){return""===t.createElement("div").style.textShadow},N.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},N.cssanimations=function(){return u("animationName")},N.csscolumns=function(){return u("columnCount")},N.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+E.join(n+e)).slice(0,-e.length)),a(b.backgroundImage,"gradient")},N.cssreflections=function(){return u("boxReflect")},N.csstransforms=function(){return!!u("transform")},N.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in g.style&&(e=m.csstransforms3d),e},N.csstransitions=function(){return u("transition")},N.fontface=function(){return m.fontface},N.generatedcontent=function(){return m.generatedcontent},N.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},N.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},N.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},N.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},N.webworkers=function(){return!!e.Worker},N.applicationcache=function(){return!!e.applicationCache},N.svg=function(){return!!t.createElementNS&&!!t.createElementNS(j.svg,"svg").createSVGRect},N.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==j.svg},N.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(C.call(t.createElementNS(j.svg,"animate")))},N.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(C.call(t.createElementNS(j.svg,"clipPath")))};for(var H in N)f(N,H)&&(d=H.toLowerCase(),m[d]=N[H](),$.push((m[d]?"":"no-")+d));return m.input||l(),m.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&m.addTest(r,e[r]);else{if(e=e.toLowerCase(),m[e]!==n)return m;t="function"==typeof t?t():t,g.className+=" "+(t?"":"no-")+e,m[e]=t}return m},r(""),y=x=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=l.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t={},n=e.createElement,o=e.createDocumentFragment,i=o();e.createElement=function(e){var r=(t[e]||(t[e]=n(e))).cloneNode();return l.shivMethods&&r.canHaveChildren&&!u.test(e)?i.appendChild(r):r},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t[e]=n(e),i.createElement(e),'c("'+e+'")'})+");return n}")(l,i)}function i(e){var t;return e.documentShived?e:(l.shivCSS&&!a&&(t=!!n(e,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),c||(t=!o(e)),t&&(e.documentShived=t),e)}var a,c,s=e.html5||{},u=/^<|^(?:button|form|map|select|textarea)$/i;!function(){var e=t.createElement("a");e.innerHTML="<xyz></xyz>",a="hidden"in e,c=1==e.childNodes.length||function(){try{t.createElement("a")}catch(e){return!0}var n=t.createDocumentFragment();return"undefined"==typeof n.cloneNode||"undefined"==typeof n.createDocumentFragment||"undefined"==typeof n.createElement}()}();var l={elements:s.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!(s.shivCSS===!1),shivMethods:!(s.shivMethods===!1),type:"default",shivDocument:i};e.html5=l,i(t)}(this,t),m._version=p,m._prefixes=E,m._domPrefixes=T,m._cssomPrefixes=k,m.mq=L,m.hasEvent=z,m.testProp=function(e){return c([e])},m.testAllProps=u,m.testStyles=A,m.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+$.join(" "):""),m}(this,this.document);