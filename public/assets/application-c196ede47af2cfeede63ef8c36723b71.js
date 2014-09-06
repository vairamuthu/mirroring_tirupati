/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/

(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
/* ========================================================================
 * Bootstrap: affix.js v3.2.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.2.0'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin != null) this.$element.css('top', '')

    var affixType = 'affix' + (affix ? '-' + affix : '')
    var e         = $.Event(affixType + '.bs.affix')

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

    this.$element
      .removeClass(Affix.RESET)
      .addClass(affixType)
      .trigger($.Event(affixType.replace('affix', 'affixed')))

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - this.$element.height() - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: alert.js v3.2.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.2.0'

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);
/* ========================================================================
 * Bootstrap: button.js v3.2.0
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.2.0'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    $el[val](data[state] == null ? this.options[state] : data[state])

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    Plugin.call($btn, 'toggle')
    e.preventDefault()
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: carousel.js v3.2.0
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element).on('keydown.bs.carousel', $.proxy(this.keydown, this))
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.2.0'

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true
  }

  Carousel.prototype.keydown = function (e) {
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: collapse.js v3.2.0
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.2.0'

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      Plugin.call(actives, 'hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') option = !option
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var href
    var $this   = $(this)
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle="collapse"][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    Plugin.call($target, option)
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: dropdown.js v3.2.0
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.2.0'

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.trigger('focus')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $parent = getParent($(this))
      var relatedTarget = { relatedTarget: this }
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role="menu"], [role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);
/* ========================================================================
 * Bootstrap: tab.js v3.2.0
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.2.0'

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: transition.js v3.2.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: scrollspy.js v3.2.0
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var process  = $.proxy(this.process, this)

    this.$body          = $('body')
    this.$scrollElement = $(element).is('body') ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', process)
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.2.0'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = 'offset'
    var offsetBase   = 0

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.offsets = []
    this.targets = []
    this.scrollHeight = this.getScrollHeight()

    var self     = this

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: modal.js v3.2.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options        = options
    this.$body          = $(document.body)
    this.$element       = $(element)
    this.$backdrop      =
    this.isShown        = null
    this.scrollbarWidth = 0

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.2.0'

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.$body.addClass('modal-open')

    this.setScrollbar()
    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.$body.removeClass('modal-open')

    this.resetScrollbar()
    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(150) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  Modal.prototype.checkScrollbar = function () {
    if (document.body.clientWidth >= window.innerWidth) return
    this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    if (this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', '')
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);
/* ========================================================================
 * Bootstrap: tooltip.js v3.2.0
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.2.0'

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(document.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $parent      = this.$element.parent()
        var parentDim    = this.getPosition($parent)

        placement = placement == 'bottom' && pos.top   + pos.height       + actualHeight - parentDim.scroll > parentDim.height ? 'top'    :
                    placement == 'top'    && pos.top   - parentDim.scroll - actualHeight < 0                                   ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth      > parentDim.width                                    ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth      < parentDim.left                                     ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(150) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var arrowDelta          = delta.left ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowPosition       = delta.left ? 'left'        : 'top'
    var arrowOffsetPosition = delta.left ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], arrowPosition)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    this.$element.removeAttr('aria-describedby')

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element.trigger('hidden.bs.' + that.type)
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(150) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element
    var el     = $element[0]
    var isBody = el.tagName == 'BODY'
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : null, {
      scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop(),
      width:  isBody ? $(window).width()  : $element.outerWidth(),
      height: isBody ? $(window).height() : $element.outerHeight()
    }, isBody ? { top: 0, left: 0 } : $element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    return (this.$tip = this.$tip || $(this.options.template))
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout)
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);
/* ========================================================================
 * Bootstrap: popover.js v3.2.0
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */



+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.2.0'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').empty()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);












(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.7.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with], button[data-disable-with], textarea[data-disable-with]',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // making sure that all forms have actual up-to-date token(cached forms contain old one)
    refreshCSRFTokens: function(){
      var csrfToken = $('meta[name=csrf-token]').attr('content');
      var csrfParam = $('meta[name=csrf-param]').attr('content');
      $('form input[name="' + csrfParam + '"]').val(csrfToken);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element.attr('href');
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, elCrossDomain, crossDomain, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        elCrossDomain = element.data('cross-domain');
        crossDomain = elCrossDomain === undefined ? null : elCrossDomain;
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            return rails.fire(element, 'ajax:beforeSend', [xhr, settings]);
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: crossDomain
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        var jqxhr = rails.ajax(options);
        element.trigger('ajax:send', jqxhr);
        return jqxhr;
      } else {
        return false;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = $('meta[name=csrf-token]').attr('content'),
        csrfParam = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      form.find(rails.disableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        element.data('ujs:enable-with', element[method]());
        element[method](element.data('disable-with'));
        element.prop('disabled', true);
      });
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      form.find(rails.enableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
        element.prop('disabled', false);
      });
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck,
          selector = specifiedSelector || 'input,textarea',
          allInputs = form.find(selector);

      allInputs.each(function() {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : input.val();
        // If nonBlank and valueToCheck are both truthy, or nonBlank and valueToCheck are both falsey
        if (!valueToCheck === !nonBlank) {

          // Don't count unchecked required radio if other radio with same name is checked
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true; // Skip to next input
          }

          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      element.data('ujs:enable-with', element.html()); // store enabled state
      element.html(element.data('disable-with')); // set to disabled state
      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }

  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (link.data('remote') !== undefined) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.error( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (link.data('method')) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);
      if (!rails.allowAction(button)) return rails.stopEverything(e);

      rails.handleRemote(button);
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = form.data('remote') !== undefined,
        blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector),
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // skip other logic when required values are missing or file upload is present
      if (blankRequiredInputs && form.attr("novalidate") == undefined && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
        return rails.stopEverything(e);
      }

      if (remote) {
        if (nonBlankFileInputs) {
          // slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      button.closest('form').data('ujs:submit-button', data);
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:beforeSend.rails', function(event) {
      if (this == event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this == event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
(function() {
  var CSRFToken, Click, ComponentUrl, Link, browserCompatibleDocumentParser, browserIsntBuggy, browserSupportsCustomEvents, browserSupportsPushState, browserSupportsTurbolinks, bypassOnLoadPopstate, cacheCurrentPage, cacheSize, changePage, constrainPageCacheTo, createDocument, currentState, enableTransitionCache, executeScriptTags, extractTitleAndBody, fetch, fetchHistory, fetchReplacement, historyStateIsDefined, initializeTurbolinks, installDocumentReadyPageEventTriggers, installHistoryChangeHandler, installJqueryAjaxSuccessPageUpdateTrigger, loadedAssets, pageCache, pageChangePrevented, pagesCached, popCookie, processResponse, recallScrollPosition, referer, reflectNewUrl, reflectRedirectedUrl, rememberCurrentState, rememberCurrentUrl, rememberReferer, removeNoscriptTags, requestMethodIsSafe, resetScrollPosition, transitionCacheEnabled, transitionCacheFor, triggerEvent, visit, xhr, _ref,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  pageCache = {};

  cacheSize = 10;

  transitionCacheEnabled = false;

  currentState = null;

  loadedAssets = null;

  referer = null;

  createDocument = null;

  xhr = null;

  fetch = function(url) {
    var cachedPage;
    url = new ComponentUrl(url);
    rememberReferer();
    cacheCurrentPage();
    reflectNewUrl(url);
    if (transitionCacheEnabled && (cachedPage = transitionCacheFor(url.absolute))) {
      fetchHistory(cachedPage);
      return fetchReplacement(url);
    } else {
      return fetchReplacement(url, resetScrollPosition);
    }
  };

  transitionCacheFor = function(url) {
    var cachedPage;
    cachedPage = pageCache[url];
    if (cachedPage && !cachedPage.transitionCacheDisabled) {
      return cachedPage;
    }
  };

  enableTransitionCache = function(enable) {
    if (enable == null) {
      enable = true;
    }
    return transitionCacheEnabled = enable;
  };

  fetchReplacement = function(url, onLoadFunction) {
    if (onLoadFunction == null) {
      onLoadFunction = (function(_this) {
        return function() {};
      })(this);
    }
    triggerEvent('page:fetch', {
      url: url.absolute
    });
    if (xhr != null) {
      xhr.abort();
    }
    xhr = new XMLHttpRequest;
    xhr.open('GET', url.withoutHashForIE10compatibility(), true);
    xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml, application/xml');
    xhr.setRequestHeader('X-XHR-Referer', referer);
    xhr.onload = function() {
      var doc;
      triggerEvent('page:receive');
      if (doc = processResponse()) {
        changePage.apply(null, extractTitleAndBody(doc));
        reflectRedirectedUrl();
        onLoadFunction();
        return triggerEvent('page:load');
      } else {
        return document.location.href = url.absolute;
      }
    };
    xhr.onloadend = function() {
      return xhr = null;
    };
    xhr.onerror = function() {
      return document.location.href = url.absolute;
    };
    return xhr.send();
  };

  fetchHistory = function(cachedPage) {
    if (xhr != null) {
      xhr.abort();
    }
    changePage(cachedPage.title, cachedPage.body);
    recallScrollPosition(cachedPage);
    return triggerEvent('page:restore');
  };

  cacheCurrentPage = function() {
    var currentStateUrl;
    currentStateUrl = new ComponentUrl(currentState.url);
    pageCache[currentStateUrl.absolute] = {
      url: currentStateUrl.relative,
      body: document.body,
      title: document.title,
      positionY: window.pageYOffset,
      positionX: window.pageXOffset,
      cachedAt: new Date().getTime(),
      transitionCacheDisabled: document.querySelector('[data-no-transition-cache]') != null
    };
    return constrainPageCacheTo(cacheSize);
  };

  pagesCached = function(size) {
    if (size == null) {
      size = cacheSize;
    }
    if (/^[\d]+$/.test(size)) {
      return cacheSize = parseInt(size);
    }
  };

  constrainPageCacheTo = function(limit) {
    var cacheTimesRecentFirst, key, pageCacheKeys, _i, _len, _results;
    pageCacheKeys = Object.keys(pageCache);
    cacheTimesRecentFirst = pageCacheKeys.map(function(url) {
      return pageCache[url].cachedAt;
    }).sort(function(a, b) {
      return b - a;
    });
    _results = [];
    for (_i = 0, _len = pageCacheKeys.length; _i < _len; _i++) {
      key = pageCacheKeys[_i];
      if (!(pageCache[key].cachedAt <= cacheTimesRecentFirst[limit])) {
        continue;
      }
      triggerEvent('page:expire', pageCache[key]);
      _results.push(delete pageCache[key]);
    }
    return _results;
  };

  changePage = function(title, body, csrfToken, runScripts) {
    document.title = title;
    document.documentElement.replaceChild(body, document.body);
    if (csrfToken != null) {
      CSRFToken.update(csrfToken);
    }
    if (runScripts) {
      executeScriptTags();
    }
    currentState = window.history.state;
    triggerEvent('page:change');
    return triggerEvent('page:update');
  };

  executeScriptTags = function() {
    var attr, copy, nextSibling, parentNode, script, scripts, _i, _j, _len, _len1, _ref, _ref1;
    scripts = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])'));
    for (_i = 0, _len = scripts.length; _i < _len; _i++) {
      script = scripts[_i];
      if (!((_ref = script.type) === '' || _ref === 'text/javascript')) {
        continue;
      }
      copy = document.createElement('script');
      _ref1 = script.attributes;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        attr = _ref1[_j];
        copy.setAttribute(attr.name, attr.value);
      }
      copy.appendChild(document.createTextNode(script.innerHTML));
      parentNode = script.parentNode, nextSibling = script.nextSibling;
      parentNode.removeChild(script);
      parentNode.insertBefore(copy, nextSibling);
    }
  };

  removeNoscriptTags = function(node) {
    node.innerHTML = node.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/ig, '');
    return node;
  };

  reflectNewUrl = function(url) {
    if ((url = new ComponentUrl(url)).absolute !== referer) {
      return window.history.pushState({
        turbolinks: true,
        url: url.absolute
      }, '', url.absolute);
    }
  };

  reflectRedirectedUrl = function() {
    var location, preservedHash;
    if (location = xhr.getResponseHeader('X-XHR-Redirected-To')) {
      location = new ComponentUrl(location);
      preservedHash = location.hasNoHash() ? document.location.hash : '';
      return window.history.replaceState(currentState, '', location.href + preservedHash);
    }
  };

  rememberReferer = function() {
    return referer = document.location.href;
  };

  rememberCurrentUrl = function() {
    return window.history.replaceState({
      turbolinks: true,
      url: document.location.href
    }, '', document.location.href);
  };

  rememberCurrentState = function() {
    return currentState = window.history.state;
  };

  recallScrollPosition = function(page) {
    return window.scrollTo(page.positionX, page.positionY);
  };

  resetScrollPosition = function() {
    if (document.location.hash) {
      return document.location.href = document.location.href;
    } else {
      return window.scrollTo(0, 0);
    }
  };

  popCookie = function(name) {
    var value, _ref;
    value = ((_ref = document.cookie.match(new RegExp(name + "=(\\w+)"))) != null ? _ref[1].toUpperCase() : void 0) || '';
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/';
    return value;
  };

  triggerEvent = function(name, data) {
    var event;
    event = document.createEvent('Events');
    if (data) {
      event.data = data;
    }
    event.initEvent(name, true, true);
    return document.dispatchEvent(event);
  };

  pageChangePrevented = function() {
    return !triggerEvent('page:before-change');
  };

  processResponse = function() {
    var assetsChanged, clientOrServerError, doc, extractTrackAssets, intersection, validContent;
    clientOrServerError = function() {
      var _ref;
      return (400 <= (_ref = xhr.status) && _ref < 600);
    };
    validContent = function() {
      return xhr.getResponseHeader('Content-Type').match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
    };
    extractTrackAssets = function(doc) {
      var node, _i, _len, _ref, _results;
      _ref = doc.head.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        if ((typeof node.getAttribute === "function" ? node.getAttribute('data-turbolinks-track') : void 0) != null) {
          _results.push(node.getAttribute('src') || node.getAttribute('href'));
        }
      }
      return _results;
    };
    assetsChanged = function(doc) {
      var fetchedAssets;
      loadedAssets || (loadedAssets = extractTrackAssets(document));
      fetchedAssets = extractTrackAssets(doc);
      return fetchedAssets.length !== loadedAssets.length || intersection(fetchedAssets, loadedAssets).length !== loadedAssets.length;
    };
    intersection = function(a, b) {
      var value, _i, _len, _ref, _results;
      if (a.length > b.length) {
        _ref = [b, a], a = _ref[0], b = _ref[1];
      }
      _results = [];
      for (_i = 0, _len = a.length; _i < _len; _i++) {
        value = a[_i];
        if (__indexOf.call(b, value) >= 0) {
          _results.push(value);
        }
      }
      return _results;
    };
    if (!clientOrServerError() && validContent()) {
      doc = createDocument(xhr.responseText);
      if (doc && !assetsChanged(doc)) {
        return doc;
      }
    }
  };

  extractTitleAndBody = function(doc) {
    var title;
    title = doc.querySelector('title');
    return [title != null ? title.textContent : void 0, removeNoscriptTags(doc.body), CSRFToken.get(doc).token, 'runScripts'];
  };

  CSRFToken = {
    get: function(doc) {
      var tag;
      if (doc == null) {
        doc = document;
      }
      return {
        node: tag = doc.querySelector('meta[name="csrf-token"]'),
        token: tag != null ? typeof tag.getAttribute === "function" ? tag.getAttribute('content') : void 0 : void 0
      };
    },
    update: function(latest) {
      var current;
      current = this.get();
      if ((current.token != null) && (latest != null) && current.token !== latest) {
        return current.node.setAttribute('content', latest);
      }
    }
  };

  browserCompatibleDocumentParser = function() {
    var createDocumentUsingDOM, createDocumentUsingParser, createDocumentUsingWrite, e, testDoc, _ref;
    createDocumentUsingParser = function(html) {
      return (new DOMParser).parseFromString(html, 'text/html');
    };
    createDocumentUsingDOM = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.documentElement.innerHTML = html;
      return doc;
    };
    createDocumentUsingWrite = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.open('replace');
      doc.write(html);
      doc.close();
      return doc;
    };
    try {
      if (window.DOMParser) {
        testDoc = createDocumentUsingParser('<html><body><p>test');
        return createDocumentUsingParser;
      }
    } catch (_error) {
      e = _error;
      testDoc = createDocumentUsingDOM('<html><body><p>test');
      return createDocumentUsingDOM;
    } finally {
      if ((testDoc != null ? (_ref = testDoc.body) != null ? _ref.childNodes.length : void 0 : void 0) !== 1) {
        return createDocumentUsingWrite;
      }
    }
  };

  ComponentUrl = (function() {
    function ComponentUrl(original) {
      this.original = original != null ? original : document.location.href;
      if (this.original.constructor === ComponentUrl) {
        return this.original;
      }
      this._parse();
    }

    ComponentUrl.prototype.withoutHash = function() {
      return this.href.replace(this.hash, '');
    };

    ComponentUrl.prototype.withoutHashForIE10compatibility = function() {
      return this.withoutHash();
    };

    ComponentUrl.prototype.hasNoHash = function() {
      return this.hash.length === 0;
    };

    ComponentUrl.prototype._parse = function() {
      var _ref;
      (this.link != null ? this.link : this.link = document.createElement('a')).href = this.original;
      _ref = this.link, this.href = _ref.href, this.protocol = _ref.protocol, this.host = _ref.host, this.hostname = _ref.hostname, this.port = _ref.port, this.pathname = _ref.pathname, this.search = _ref.search, this.hash = _ref.hash;
      this.origin = [this.protocol, '//', this.hostname].join('');
      if (this.port.length !== 0) {
        this.origin += ":" + this.port;
      }
      this.relative = [this.pathname, this.search, this.hash].join('');
      return this.absolute = this.href;
    };

    return ComponentUrl;

  })();

  Link = (function(_super) {
    __extends(Link, _super);

    Link.HTML_EXTENSIONS = ['html'];

    Link.allowExtensions = function() {
      var extension, extensions, _i, _len;
      extensions = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      for (_i = 0, _len = extensions.length; _i < _len; _i++) {
        extension = extensions[_i];
        Link.HTML_EXTENSIONS.push(extension);
      }
      return Link.HTML_EXTENSIONS;
    };

    function Link(link) {
      this.link = link;
      if (this.link.constructor === Link) {
        return this.link;
      }
      this.original = this.link.href;
      Link.__super__.constructor.apply(this, arguments);
    }

    Link.prototype.shouldIgnore = function() {
      return this._crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target();
    };

    Link.prototype._crossOrigin = function() {
      return this.origin !== (new ComponentUrl).origin;
    };

    Link.prototype._anchored = function() {
      var current;
      return ((this.hash && this.withoutHash()) === (current = new ComponentUrl).withoutHash()) || (this.href === current.href + '#');
    };

    Link.prototype._nonHtml = function() {
      return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + (Link.HTML_EXTENSIONS.join('|')) + ")?$", 'g'));
    };

    Link.prototype._optOut = function() {
      var ignore, link;
      link = this.link;
      while (!(ignore || link === document)) {
        ignore = link.getAttribute('data-no-turbolink') != null;
        link = link.parentNode;
      }
      return ignore;
    };

    Link.prototype._target = function() {
      return this.link.target.length !== 0;
    };

    return Link;

  })(ComponentUrl);

  Click = (function() {
    Click.installHandlerLast = function(event) {
      if (!event.defaultPrevented) {
        document.removeEventListener('click', Click.handle, false);
        return document.addEventListener('click', Click.handle, false);
      }
    };

    Click.handle = function(event) {
      return new Click(event);
    };

    function Click(event) {
      this.event = event;
      if (this.event.defaultPrevented) {
        return;
      }
      this._extractLink();
      if (this._validForTurbolinks()) {
        if (!pageChangePrevented()) {
          visit(this.link.href);
        }
        this.event.preventDefault();
      }
    }

    Click.prototype._extractLink = function() {
      var link;
      link = this.event.target;
      while (!(!link.parentNode || link.nodeName === 'A')) {
        link = link.parentNode;
      }
      if (link.nodeName === 'A' && link.href.length !== 0) {
        return this.link = new Link(link);
      }
    };

    Click.prototype._validForTurbolinks = function() {
      return (this.link != null) && !(this.link.shouldIgnore() || this._nonStandardClick());
    };

    Click.prototype._nonStandardClick = function() {
      return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey;
    };

    return Click;

  })();

  bypassOnLoadPopstate = function(fn) {
    return setTimeout(fn, 500);
  };

  installDocumentReadyPageEventTriggers = function() {
    return document.addEventListener('DOMContentLoaded', (function() {
      triggerEvent('page:change');
      return triggerEvent('page:update');
    }), true);
  };

  installJqueryAjaxSuccessPageUpdateTrigger = function() {
    if (typeof jQuery !== 'undefined') {
      return jQuery(document).on('ajaxSuccess', function(event, xhr, settings) {
        if (!jQuery.trim(xhr.responseText)) {
          return;
        }
        return triggerEvent('page:update');
      });
    }
  };

  installHistoryChangeHandler = function(event) {
    var cachedPage, _ref;
    if ((_ref = event.state) != null ? _ref.turbolinks : void 0) {
      if (cachedPage = pageCache[(new ComponentUrl(event.state.url)).absolute]) {
        cacheCurrentPage();
        return fetchHistory(cachedPage);
      } else {
        return visit(event.target.location.href);
      }
    }
  };

  initializeTurbolinks = function() {
    rememberCurrentUrl();
    rememberCurrentState();
    createDocument = browserCompatibleDocumentParser();
    document.addEventListener('click', Click.installHandlerLast, true);
    return bypassOnLoadPopstate(function() {
      return window.addEventListener('popstate', installHistoryChangeHandler, false);
    });
  };

  historyStateIsDefined = window.history.state !== void 0 || navigator.userAgent.match(/Firefox\/2[6|7]/);

  browserSupportsPushState = window.history && window.history.pushState && window.history.replaceState && historyStateIsDefined;

  browserIsntBuggy = !navigator.userAgent.match(/CriOS\//);

  requestMethodIsSafe = (_ref = popCookie('request_method')) === 'GET' || _ref === '';

  browserSupportsTurbolinks = browserSupportsPushState && browserIsntBuggy && requestMethodIsSafe;

  browserSupportsCustomEvents = document.addEventListener && document.createEvent;

  if (browserSupportsCustomEvents) {
    installDocumentReadyPageEventTriggers();
    installJqueryAjaxSuccessPageUpdateTrigger();
  }

  if (browserSupportsTurbolinks) {
    visit = fetch;
    initializeTurbolinks();
  } else {
    visit = function(url) {
      return document.location.href = url;
    };
  }

  this.Turbolinks = {
    visit: visit,
    pagesCached: pagesCached,
    enableTransitionCache: enableTransitionCache,
    allowLinkExtensions: Link.allowExtensions,
    supported: browserSupportsTurbolinks
  };

}).call(this);
/*! bootstrap3-wysihtml5-bower 2014-06-23 */

Object.defineProperty&&Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(Element.prototype,"textContent")&&!Object.getOwnPropertyDescriptor(Element.prototype,"textContent").get&&!function(){var a=Object.getOwnPropertyDescriptor(Element.prototype,"innerText");Object.defineProperty(Element.prototype,"textContent",{get:function(){return a.get.call(this)},set:function(b){return a.set.call(this,b)}})}(),Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)});var wysihtml5={version:"0.4.9",commands:{},dom:{},quirks:{},toolbar:{},lang:{},selection:{},views:{},INVISIBLE_SPACE:"﻿",EMPTY_FUNCTION:function(){},ELEMENT_NODE:1,TEXT_NODE:3,BACKSPACE_KEY:8,ENTER_KEY:13,ESCAPE_KEY:27,SPACE_KEY:32,DELETE_KEY:46};!function(a){function b(a,b){var c=typeof a[b];return c==u||!(c!=t||!a[b])||"unknown"==c}function c(a,b){return!(typeof a[b]!=t||!a[b])}function d(a,b){return typeof a[b]!=v}function e(a){return function(b,c){for(var d=c.length;d--;)if(!a(b,c[d]))return!1;return!0}}function f(a){return a&&A(a,z)&&C(a,y)}function g(a){return c(a,"body")?a.body:a.getElementsByTagName("body")[0]}function h(a){c(window,"console")&&b(window.console,"log")&&window.console.log(a)}function i(a,b){b?window.alert(a):h(a)}function j(a){E.initialized=!0,E.supported=!1,i("Rangy is not supported on this page in your browser. Reason: "+a,E.config.alertOnFail)}function k(a){i("Rangy warning: "+a,E.config.alertOnWarn)}function l(a){return a.message||a.description||String(a)}function m(){if(!E.initialized){var a,c=!1,d=!1;b(document,"createRange")&&(a=document.createRange(),A(a,x)&&C(a,w)&&(c=!0),a.detach());var e=g(document);if(!e||"body"!=e.nodeName.toLowerCase())return void j("No body element found");if(e&&b(e,"createTextRange")&&(a=e.createTextRange(),f(a)&&(d=!0)),!c&&!d)return void j("Neither Range nor TextRange are available");E.initialized=!0,E.features={implementsDomRange:c,implementsTextRange:d};var i,k;for(var m in D)(i=D[m])instanceof o&&i.init(i,E);for(var n=0,p=G.length;p>n;++n)try{G[n](E)}catch(q){k="Rangy init listener threw an exception. Continuing. Detail: "+l(q),h(k)}}}function n(a){a=a||window,m();for(var b=0,c=H.length;c>b;++b)H[b](a)}function o(a,b,c){this.name=a,this.dependencies=b,this.initialized=!1,this.supported=!1,this.initializer=c}function p(a,b,c,d){var e=new o(b,c,function(a){if(!a.initialized){a.initialized=!0;try{d(E,a),a.supported=!0}catch(c){var e="Module '"+b+"' failed to load: "+l(c);h(e)}}});D[b]=e}function q(){}function r(){}var s="function"==typeof a.define&&a.define.amd,t="object",u="function",v="undefined",w=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],x=["setStart","setStartBefore","setStartAfter","setEnd","setEndBefore","setEndAfter","collapse","selectNode","selectNodeContents","compareBoundaryPoints","deleteContents","extractContents","cloneContents","insertNode","surroundContents","cloneRange","toString","detach"],y=["boundingHeight","boundingLeft","boundingTop","boundingWidth","htmlText","text"],z=["collapse","compareEndPoints","duplicate","moveToElementText","parentElement","select","setEndPoint","getBoundingClientRect"],A=e(b),B=e(c),C=e(d),D={},E={version:"1.3alpha.804",initialized:!1,supported:!0,util:{isHostMethod:b,isHostObject:c,isHostProperty:d,areHostMethods:A,areHostObjects:B,areHostProperties:C,isTextRange:f,getBody:g},features:{},modules:D,config:{alertOnFail:!0,alertOnWarn:!1,preferTextRange:!1}};E.fail=j,E.warn=k,{}.hasOwnProperty?E.util.extend=function(a,b,c){var d,e;for(var f in b)b.hasOwnProperty(f)&&(d=a[f],e=b[f],c&&null!==d&&"object"==typeof d&&null!==e&&"object"==typeof e&&E.util.extend(d,e,!0),a[f]=e);return a}:j("hasOwnProperty not supported"),function(){var a=document.createElement("div");a.appendChild(document.createElement("span"));var b,c=[].slice;try{1==c.call(a.childNodes,0)[0].nodeType&&(b=function(a){return c.call(a,0)})}catch(d){}b||(b=function(a){for(var b=[],c=0,d=a.length;d>c;++c)b[c]=a[c];return b}),E.util.toArray=b}();var F;b(document,"addEventListener")?F=function(a,b,c){a.addEventListener(b,c,!1)}:b(document,"attachEvent")?F=function(a,b,c){a.attachEvent("on"+b,c)}:j("Document does not have required addEventListener or attachEvent method"),E.util.addListener=F;var G=[];E.init=m,E.addInitListener=function(a){E.initialized?a(E):G.push(a)};var H=[];E.addCreateMissingNativeApiListener=function(a){H.push(a)},E.createMissingNativeApi=n,o.prototype={init:function(){for(var a,b,c=this.dependencies||[],d=0,e=c.length;e>d;++d){if(b=c[d],a=D[b],!(a&&a instanceof o))throw new Error("required module '"+b+"' not found");if(a.init(),!a.supported)throw new Error("required module '"+b+"' not supported")}this.initializer(this)},fail:function(a){throw this.initialized=!0,this.supported=!1,new Error("Module '"+this.name+"' failed to load: "+a)},warn:function(a){E.warn("Module "+this.name+": "+a)},deprecationNotice:function(a,b){E.warn("DEPRECATED: "+a+" in module "+this.name+"is deprecated. Please use "+b+" instead")},createError:function(a){return new Error("Error in Rangy "+this.name+" module: "+a)}},E.createModule=function(a){var b,c;2==arguments.length?(b=arguments[1],c=[]):(b=arguments[2],c=arguments[1]),p(!1,a,c,b)},E.createCoreModule=function(a,b,c){p(!0,a,b,c)},E.RangePrototype=q,E.rangePrototype=new q,E.selectionPrototype=new r;var I=!1,J=function(){I||(I=!0,E.initialized||m())};return typeof window==v?void j("No window found"):typeof document==v?void j("No document found"):(b(document,"addEventListener")&&document.addEventListener("DOMContentLoaded",J,!1),F(window,"load",J),s&&a.define(function(){return E.amd=!0,E}),void(a.rangy=E))}(this),rangy.createCoreModule("DomUtil",[],function(a,b){function c(a){var b;return typeof a.namespaceURI==D||null===(b=a.namespaceURI)||"http://www.w3.org/1999/xhtml"==b}function d(a){var b=a.parentNode;return 1==b.nodeType?b:null}function e(a){for(var b=0;a=a.previousSibling;)++b;return b}function f(a){switch(a.nodeType){case 7:case 10:return 0;case 3:case 8:return a.length;default:return a.childNodes.length}}function g(a,b){var c,d=[];for(c=a;c;c=c.parentNode)d.push(c);for(c=b;c;c=c.parentNode)if(H(d,c))return c;return null}function h(a,b,c){for(var d=c?b:b.parentNode;d;){if(d===a)return!0;d=d.parentNode}return!1}function i(a,b){return h(a,b,!0)}function j(a,b,c){for(var d,e=c?a:a.parentNode;e;){if(d=e.parentNode,d===b)return e;e=d}return null}function k(a){var b=a.nodeType;return 3==b||4==b||8==b}function l(a){if(!a)return!1;var b=a.nodeType;return 3==b||8==b}function m(a,b){var c=b.nextSibling,d=b.parentNode;return c?d.insertBefore(a,c):d.appendChild(a),a}function n(a,b,c){var d=a.cloneNode(!1);if(d.deleteData(0,b),a.deleteData(b,a.length-b),m(d,a),c)for(var f,g=0;f=c[g++];)f.node==a&&f.offset>b?(f.node=d,f.offset-=b):f.node==a.parentNode&&f.offset>e(a)&&++f.offset;return d}function o(a){if(9==a.nodeType)return a;if(typeof a.ownerDocument!=D)return a.ownerDocument;if(typeof a.document!=D)return a.document;if(a.parentNode)return o(a.parentNode);throw b.createError("getDocument: no document found for node")}function p(a){var c=o(a);if(typeof c.defaultView!=D)return c.defaultView;if(typeof c.parentWindow!=D)return c.parentWindow;throw b.createError("Cannot get a window object for node")}function q(a){if(typeof a.contentDocument!=D)return a.contentDocument;if(typeof a.contentWindow!=D)return a.contentWindow.document;throw b.createError("getIframeDocument: No Document object found for iframe element")}function r(a){if(typeof a.contentWindow!=D)return a.contentWindow;if(typeof a.contentDocument!=D)return a.contentDocument.defaultView;throw b.createError("getIframeWindow: No Window object found for iframe element")}function s(a){return a&&E.isHostMethod(a,"setTimeout")&&E.isHostObject(a,"document")}function t(a,b,c){var d;if(a?E.isHostProperty(a,"nodeType")?d=1==a.nodeType&&"iframe"==a.tagName.toLowerCase()?q(a):o(a):s(a)&&(d=a.document):d=document,!d)throw b.createError(c+"(): Parameter must be a Window object or DOM node");return d}function u(a){for(var b;b=a.parentNode;)a=b;return a}function v(a,c,d,f){var h,i,k,l,m;if(a==d)return c===f?0:f>c?-1:1;if(h=j(d,a,!0))return c<=e(h)?-1:1;if(h=j(a,d,!0))return e(h)<f?-1:1;if(i=g(a,d),!i)throw new Error("comparePoints error: nodes have no common ancestor");if(k=a===i?i:j(a,i,!0),l=d===i?i:j(d,i,!0),k===l)throw b.createError("comparePoints got to case 4 and childA and childB are the same!");for(m=i.firstChild;m;){if(m===k)return-1;if(m===l)return 1;m=m.nextSibling}}function w(a){try{return a.parentNode,!1}catch(b){return!0}}function x(a){if(!a)return"[No node]";if(I&&w(a))return"[Broken node]";if(k(a))return'"'+a.data+'"';if(1==a.nodeType){var b=a.id?' id="'+a.id+'"':"";return"<"+a.nodeName+b+">["+e(a)+"]["+a.childNodes.length+"]["+(a.innerHTML||"[innerHTML not supported]").slice(0,25)+"]"}return a.nodeName}function y(a){for(var b,c=o(a).createDocumentFragment();b=a.firstChild;)c.appendChild(b);return c}function z(a){this.root=a,this._next=a}function A(a){return new z(a)}function B(a,b){this.node=a,this.offset=b}function C(a){this.code=this[a],this.codeName=a,this.message="DOMException: "+this.codeName}var D="undefined",E=a.util;E.areHostMethods(document,["createDocumentFragment","createElement","createTextNode"])||b.fail("document missing a Node creation method"),E.isHostMethod(document,"getElementsByTagName")||b.fail("document missing getElementsByTagName method");var F=document.createElement("div");E.areHostMethods(F,["insertBefore","appendChild","cloneNode"]||!E.areHostObjects(F,["previousSibling","nextSibling","childNodes","parentNode"]))||b.fail("Incomplete Element implementation"),E.isHostProperty(F,"innerHTML")||b.fail("Element is missing innerHTML property");var G=document.createTextNode("test");E.areHostMethods(G,["splitText","deleteData","insertData","appendData","cloneNode"]||!E.areHostObjects(F,["previousSibling","nextSibling","childNodes","parentNode"])||!E.areHostProperties(G,["data"]))||b.fail("Incomplete Text Node implementation");var H=function(a,b){for(var c=a.length;c--;)if(a[c]===b)return!0;return!1},I=!1;!function(){var b=document.createElement("b");b.innerHTML="1";var c=b.firstChild;b.innerHTML="<br>",I=w(c),a.features.crashyTextNodes=I}();var J;typeof window.getComputedStyle!=D?J=function(a,b){return p(a).getComputedStyle(a,null)[b]}:typeof document.documentElement.currentStyle!=D?J=function(a,b){return a.currentStyle[b]}:b.fail("No means of obtaining computed style properties found"),z.prototype={_current:null,hasNext:function(){return!!this._next},next:function(){var a,b,c=this._current=this._next;if(this._current)if(a=c.firstChild)this._next=a;else{for(b=null;c!==this.root&&!(b=c.nextSibling);)c=c.parentNode;this._next=b}return this._current},detach:function(){this._current=this._next=this.root=null}},B.prototype={equals:function(a){return!!a&&this.node===a.node&&this.offset==a.offset},inspect:function(){return"[DomPosition("+x(this.node)+":"+this.offset+")]"},toString:function(){return this.inspect()}},C.prototype={INDEX_SIZE_ERR:1,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INVALID_STATE_ERR:11},C.prototype.toString=function(){return this.message},a.dom={arrayContains:H,isHtmlNamespace:c,parentElement:d,getNodeIndex:e,getNodeLength:f,getCommonAncestor:g,isAncestorOf:h,isOrIsAncestorOf:i,getClosestAncestorIn:j,isCharacterDataNode:k,isTextOrCommentNode:l,insertAfter:m,splitDataNode:n,getDocument:o,getWindow:p,getIframeWindow:r,getIframeDocument:q,getBody:E.getBody,isWindow:s,getContentDocument:t,getRootContainer:u,comparePoints:v,isBrokenNode:w,inspectNode:x,getComputedStyleProperty:J,fragmentFromNodeChildren:y,createIterator:A,DomPosition:B},a.DOMException=C}),rangy.createCoreModule("DomRange",["DomUtil"],function(a){function b(a,b){return 3!=a.nodeType&&(Q(a,b.startContainer)||Q(a,b.endContainer))}function c(a){return a.document||R(a.startContainer)}function d(a){return new M(a.parentNode,P(a))}function e(a){return new M(a.parentNode,P(a)+1)}function f(a,b,c){var d=11==a.nodeType?a.firstChild:a;return O(b)?c==b.length?K.insertAfter(a,b):b.parentNode.insertBefore(a,0==c?b:T(b,c)):c>=b.childNodes.length?b.appendChild(a):b.insertBefore(a,b.childNodes[c]),d}function g(a,b,d){if(A(a),A(b),c(b)!=c(a))throw new N("WRONG_DOCUMENT_ERR");var e=S(a.startContainer,a.startOffset,b.endContainer,b.endOffset),f=S(a.endContainer,a.endOffset,b.startContainer,b.startOffset);return d?0>=e&&f>=0:0>e&&f>0}function h(a){for(var b,d,e,f=c(a.range).createDocumentFragment();d=a.next();){if(b=a.isPartiallySelectedSubtree(),d=d.cloneNode(!b),b&&(e=a.getSubtreeIterator(),d.appendChild(h(e)),e.detach(!0)),10==d.nodeType)throw new N("HIERARCHY_REQUEST_ERR");f.appendChild(d)}return f}function i(a,b,c){var d,e;c=c||{stop:!1};for(var f,g;f=a.next();)if(a.isPartiallySelectedSubtree()){if(b(f)===!1)return void(c.stop=!0);if(g=a.getSubtreeIterator(),i(g,b,c),g.detach(!0),c.stop)return}else for(d=K.createIterator(f);e=d.next();)if(b(e)===!1)return void(c.stop=!0)}function j(a){for(var b;a.next();)a.isPartiallySelectedSubtree()?(b=a.getSubtreeIterator(),j(b),b.detach(!0)):a.remove()}function k(a){for(var b,d,e=c(a.range).createDocumentFragment();b=a.next();){if(a.isPartiallySelectedSubtree()?(b=b.cloneNode(!1),d=a.getSubtreeIterator(),b.appendChild(k(d)),d.detach(!0)):a.remove(),10==b.nodeType)throw new N("HIERARCHY_REQUEST_ERR");e.appendChild(b)}return e}function l(a,b,c){var d,e=!(!b||!b.length),f=!!c;e&&(d=new RegExp("^("+b.join("|")+")$"));var g=[];return i(new n(a,!1),function(b){if(!(e&&!d.test(b.nodeType)||f&&!c(b))){var h=a.startContainer;if(b!=h||!O(h)||a.startOffset!=h.length){var i=a.endContainer;b==i&&O(i)&&0==a.endOffset||g.push(b)}}}),g}function m(a){var b="undefined"==typeof a.getName?"Range":a.getName();return"["+b+"("+K.inspectNode(a.startContainer)+":"+a.startOffset+", "+K.inspectNode(a.endContainer)+":"+a.endOffset+")]"}function n(a,b){if(this.range=a,this.clonePartiallySelectedTextNodes=b,!a.collapsed){this.sc=a.startContainer,this.so=a.startOffset,this.ec=a.endContainer,this.eo=a.endOffset;var c=a.commonAncestorContainer;this.sc===this.ec&&O(this.sc)?(this.isSingleCharacterDataNode=!0,this._first=this._last=this._next=this.sc):(this._first=this._next=this.sc!==c||O(this.sc)?U(this.sc,c,!0):this.sc.childNodes[this.so],this._last=this.ec!==c||O(this.ec)?U(this.ec,c,!0):this.ec.childNodes[this.eo-1])}}function o(a){this.code=this[a],this.codeName=a,this.message="RangeException: "+this.codeName}function p(a){return function(b,c){for(var d,e=c?b:b.parentNode;e;){if(d=e.nodeType,W(a,d))return e;e=e.parentNode}return null}}function q(a,b){if(eb(a,b))throw new o("INVALID_NODE_TYPE_ERR")}function r(a){if(!a.startContainer)throw new N("INVALID_STATE_ERR")}function s(a,b){if(!W(b,a.nodeType))throw new o("INVALID_NODE_TYPE_ERR")}function t(a,b){if(0>b||b>(O(a)?a.length:a.childNodes.length))throw new N("INDEX_SIZE_ERR")}function u(a,b){if(cb(a,!0)!==cb(b,!0))throw new N("WRONG_DOCUMENT_ERR")}function v(a){if(db(a,!0))throw new N("NO_MODIFICATION_ALLOWED_ERR")}function w(a,b){if(!a)throw new N(b)}function x(a){return Y&&K.isBrokenNode(a)||!W($,a.nodeType)&&!cb(a,!0)}function y(a,b){return b<=(O(a)?a.length:a.childNodes.length)}function z(a){return!!a.startContainer&&!!a.endContainer&&!x(a.startContainer)&&!x(a.endContainer)&&y(a.startContainer,a.startOffset)&&y(a.endContainer,a.endOffset)}function A(a){if(r(a),!z(a))throw new Error("Range error: Range is no longer valid after DOM mutation ("+a.inspect()+")")}function B(a,b){A(a);var c=a.startContainer,d=a.startOffset,e=a.endContainer,f=a.endOffset,g=c===e;O(e)&&f>0&&f<e.length&&T(e,f,b),O(c)&&d>0&&d<c.length&&(c=T(c,d,b),g?(f-=d,e=c):e==c.parentNode&&f>=P(c)&&f++,d=0),a.setStartAndEnd(c,d,e,f)}function C(a){a.START_TO_START=kb,a.START_TO_END=lb,a.END_TO_END=mb,a.END_TO_START=nb,a.NODE_BEFORE=ob,a.NODE_AFTER=pb,a.NODE_BEFORE_AND_AFTER=qb,a.NODE_INSIDE=rb}function D(a){C(a),C(a.prototype)}function E(a,b){return function(){A(this);var c,d,f=this.startContainer,g=this.startOffset,h=this.commonAncestorContainer,j=new n(this,!0);f!==h&&(c=U(f,h,!0),d=e(c),f=d.node,g=d.offset),i(j,v),j.reset();var k=a(j);return j.detach(),b(this,f,g,f,g),k}}function F(c,f,g){function h(a,b){return function(c){r(this),s(c,Z),s(X(c),$);var f=(a?d:e)(c);(b?i:l)(this,f.node,f.offset)}}function i(a,b,c){var d=a.endContainer,e=a.endOffset;(b!==a.startContainer||c!==a.startOffset)&&((X(b)!=X(d)||1==S(b,c,d,e))&&(d=b,e=c),f(a,b,c,d,e))}function l(a,b,c){var d=a.startContainer,e=a.startOffset;(b!==a.endContainer||c!==a.endOffset)&&((X(b)!=X(d)||-1==S(b,c,d,e))&&(d=b,e=c),f(a,d,e,b,c))}var m=function(){};m.prototype=a.rangePrototype,c.prototype=new m,L.extend(c.prototype,{setStart:function(a,b){r(this),q(a,!0),t(a,b),i(this,a,b)},setEnd:function(a,b){r(this),q(a,!0),t(a,b),l(this,a,b)},setStartAndEnd:function(){r(this);var a=arguments,b=a[0],c=a[1],d=b,e=c;switch(a.length){case 3:e=a[2];break;case 4:d=a[2],e=a[3]}f(this,b,c,d,e)},setBoundary:function(a,b,c){this["set"+(c?"Start":"End")](a,b)},setStartBefore:h(!0,!0),setStartAfter:h(!1,!0),setEndBefore:h(!0,!1),setEndAfter:h(!1,!1),collapse:function(a){A(this),a?f(this,this.startContainer,this.startOffset,this.startContainer,this.startOffset):f(this,this.endContainer,this.endOffset,this.endContainer,this.endOffset)},selectNodeContents:function(a){r(this),q(a,!0),f(this,a,0,a,V(a))},selectNode:function(a){r(this),q(a,!1),s(a,Z);var b=d(a),c=e(a);f(this,b.node,b.offset,c.node,c.offset)},extractContents:E(k,f),deleteContents:E(j,f),canSurroundContents:function(){A(this),v(this.startContainer),v(this.endContainer);var a=new n(this,!0),c=a._first&&b(a._first,this)||a._last&&b(a._last,this);return a.detach(),!c},detach:function(){g(this)},splitBoundaries:function(){B(this)},splitBoundariesPreservingPositions:function(a){B(this,a)},normalizeBoundaries:function(){A(this);var a=this.startContainer,b=this.startOffset,c=this.endContainer,d=this.endOffset,e=function(a){var b=a.nextSibling;b&&b.nodeType==a.nodeType&&(c=a,d=a.length,a.appendData(b.data),b.parentNode.removeChild(b))},g=function(e){var f=e.previousSibling;if(f&&f.nodeType==e.nodeType){a=e;var g=e.length;if(b=f.length,e.insertData(0,f.data),f.parentNode.removeChild(f),a==c)d+=b,c=a;else if(c==e.parentNode){var h=P(e);d==h?(c=e,d=g):d>h&&d--}}},h=!0;if(O(c))c.length==d&&e(c);else{if(d>0){var i=c.childNodes[d-1];i&&O(i)&&e(i)}h=!this.collapsed}if(h){if(O(a))0==b&&g(a);else if(b<a.childNodes.length){var j=a.childNodes[b];j&&O(j)&&g(j)}}else a=c,b=d;f(this,a,b,c,d)},collapseToPoint:function(a,b){r(this),q(a,!0),t(a,b),this.setStartAndEnd(a,b)}}),D(c)}function G(a){a.collapsed=a.startContainer===a.endContainer&&a.startOffset===a.endOffset,a.commonAncestorContainer=a.collapsed?a.startContainer:K.getCommonAncestor(a.startContainer,a.endContainer)}function H(a,b,c,d,e){a.startContainer=b,a.startOffset=c,a.endContainer=d,a.endOffset=e,a.document=K.getDocument(b),G(a)}function I(a){r(a),a.startContainer=a.startOffset=a.endContainer=a.endOffset=a.document=null,a.collapsed=a.commonAncestorContainer=null}function J(a){this.startContainer=a,this.startOffset=0,this.endContainer=a,this.endOffset=0,this.document=a,G(this)}var K=a.dom,L=a.util,M=K.DomPosition,N=a.DOMException,O=K.isCharacterDataNode,P=K.getNodeIndex,Q=K.isOrIsAncestorOf,R=K.getDocument,S=K.comparePoints,T=K.splitDataNode,U=K.getClosestAncestorIn,V=K.getNodeLength,W=K.arrayContains,X=K.getRootContainer,Y=a.features.crashyTextNodes;n.prototype={_current:null,_next:null,_first:null,_last:null,isSingleCharacterDataNode:!1,reset:function(){this._current=null,this._next=this._first},hasNext:function(){return!!this._next},next:function(){var a=this._current=this._next;return a&&(this._next=a!==this._last?a.nextSibling:null,O(a)&&this.clonePartiallySelectedTextNodes&&(a===this.ec&&(a=a.cloneNode(!0)).deleteData(this.eo,a.length-this.eo),this._current===this.sc&&(a=a.cloneNode(!0)).deleteData(0,this.so))),a},remove:function(){var a,b,c=this._current;!O(c)||c!==this.sc&&c!==this.ec?c.parentNode&&c.parentNode.removeChild(c):(a=c===this.sc?this.so:0,b=c===this.ec?this.eo:c.length,a!=b&&c.deleteData(a,b-a))},isPartiallySelectedSubtree:function(){var a=this._current;return b(a,this.range)},getSubtreeIterator:function(){var a;if(this.isSingleCharacterDataNode)a=this.range.cloneRange(),a.collapse(!1);else{a=new J(c(this.range));var b=this._current,d=b,e=0,f=b,g=V(b);Q(b,this.sc)&&(d=this.sc,e=this.so),Q(b,this.ec)&&(f=this.ec,g=this.eo),H(a,d,e,f,g)}return new n(a,this.clonePartiallySelectedTextNodes)},detach:function(a){a&&this.range.detach(),this.range=this._current=this._next=this._first=this._last=this.sc=this.so=this.ec=this.eo=null}},o.prototype={BAD_BOUNDARYPOINTS_ERR:1,INVALID_NODE_TYPE_ERR:2},o.prototype.toString=function(){return this.message};var Z=[1,3,4,5,7,8,10],$=[2,9,11],_=[5,6,10,12],ab=[1,3,4,5,7,8,10,11],bb=[1,3,4,5,7,8],cb=p([9,11]),db=p(_),eb=p([6,10,12]),fb=document.createElement("style"),gb=!1;try{fb.innerHTML="<b>x</b>",gb=3==fb.firstChild.nodeType}catch(hb){}a.features.htmlParsingConforms=gb;var ib=gb?function(a){var b=this.startContainer,c=R(b);if(!b)throw new N("INVALID_STATE_ERR");var d=null;return 1==b.nodeType?d=b:O(b)&&(d=K.parentElement(b)),d=null===d||"HTML"==d.nodeName&&K.isHtmlNamespace(R(d).documentElement)&&K.isHtmlNamespace(d)?c.createElement("body"):d.cloneNode(!1),d.innerHTML=a,K.fragmentFromNodeChildren(d)}:function(a){r(this);var b=c(this),d=b.createElement("body");return d.innerHTML=a,K.fragmentFromNodeChildren(d)},jb=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],kb=0,lb=1,mb=2,nb=3,ob=0,pb=1,qb=2,rb=3;L.extend(a.rangePrototype,{compareBoundaryPoints:function(a,b){A(this),u(this.startContainer,b.startContainer);var c,d,e,f,g=a==nb||a==kb?"start":"end",h=a==lb||a==kb?"start":"end";return c=this[g+"Container"],d=this[g+"Offset"],e=b[h+"Container"],f=b[h+"Offset"],S(c,d,e,f)},insertNode:function(a){if(A(this),s(a,ab),v(this.startContainer),Q(a,this.startContainer))throw new N("HIERARCHY_REQUEST_ERR");var b=f(a,this.startContainer,this.startOffset);this.setStartBefore(b)},cloneContents:function(){A(this);var a,b;if(this.collapsed)return c(this).createDocumentFragment();if(this.startContainer===this.endContainer&&O(this.startContainer))return a=this.startContainer.cloneNode(!0),a.data=a.data.slice(this.startOffset,this.endOffset),b=c(this).createDocumentFragment(),b.appendChild(a),b;var d=new n(this,!0);return a=h(d),d.detach(),a},canSurroundContents:function(){A(this),v(this.startContainer),v(this.endContainer);var a=new n(this,!0),c=a._first&&b(a._first,this)||a._last&&b(a._last,this);return a.detach(),!c},surroundContents:function(a){if(s(a,bb),!this.canSurroundContents())throw new o("BAD_BOUNDARYPOINTS_ERR");var b=this.extractContents();if(a.hasChildNodes())for(;a.lastChild;)a.removeChild(a.lastChild);f(a,this.startContainer,this.startOffset),a.appendChild(b),this.selectNode(a)},cloneRange:function(){A(this);for(var a,b=new J(c(this)),d=jb.length;d--;)a=jb[d],b[a]=this[a];return b},toString:function(){A(this);var a=this.startContainer;if(a===this.endContainer&&O(a))return 3==a.nodeType||4==a.nodeType?a.data.slice(this.startOffset,this.endOffset):"";var b=[],c=new n(this,!0);return i(c,function(a){(3==a.nodeType||4==a.nodeType)&&b.push(a.data)}),c.detach(),b.join("")},compareNode:function(a){A(this);var b=a.parentNode,c=P(a);if(!b)throw new N("NOT_FOUND_ERR");var d=this.comparePoint(b,c),e=this.comparePoint(b,c+1);return 0>d?e>0?qb:ob:e>0?pb:rb},comparePoint:function(a,b){return A(this),w(a,"HIERARCHY_REQUEST_ERR"),u(a,this.startContainer),S(a,b,this.startContainer,this.startOffset)<0?-1:S(a,b,this.endContainer,this.endOffset)>0?1:0},createContextualFragment:ib,toHtml:function(){A(this);var a=this.commonAncestorContainer.parentNode.cloneNode(!1);return a.appendChild(this.cloneContents()),a.innerHTML},intersectsNode:function(a,b){if(A(this),w(a,"NOT_FOUND_ERR"),R(a)!==c(this))return!1;var d=a.parentNode,e=P(a);w(d,"NOT_FOUND_ERR");var f=S(d,e,this.endContainer,this.endOffset),g=S(d,e+1,this.startContainer,this.startOffset);return b?0>=f&&g>=0:0>f&&g>0},isPointInRange:function(a,b){return A(this),w(a,"HIERARCHY_REQUEST_ERR"),u(a,this.startContainer),S(a,b,this.startContainer,this.startOffset)>=0&&S(a,b,this.endContainer,this.endOffset)<=0},intersectsRange:function(a){return g(this,a,!1)},intersectsOrTouchesRange:function(a){return g(this,a,!0)},intersection:function(a){if(this.intersectsRange(a)){var b=S(this.startContainer,this.startOffset,a.startContainer,a.startOffset),c=S(this.endContainer,this.endOffset,a.endContainer,a.endOffset),d=this.cloneRange();return-1==b&&d.setStart(a.startContainer,a.startOffset),1==c&&d.setEnd(a.endContainer,a.endOffset),d}return null},union:function(a){if(this.intersectsOrTouchesRange(a)){var b=this.cloneRange();return-1==S(a.startContainer,a.startOffset,this.startContainer,this.startOffset)&&b.setStart(a.startContainer,a.startOffset),1==S(a.endContainer,a.endOffset,this.endContainer,this.endOffset)&&b.setEnd(a.endContainer,a.endOffset),b}throw new o("Ranges do not intersect")},containsNode:function(a,b){return b?this.intersectsNode(a,!1):this.compareNode(a)==rb},containsNodeContents:function(a){return this.comparePoint(a,0)>=0&&this.comparePoint(a,V(a))<=0},containsRange:function(a){var b=this.intersection(a);return null!==b&&a.equals(b)},containsNodeText:function(a){var b=this.cloneRange();b.selectNode(a);var c=b.getNodes([3]);if(c.length>0){b.setStart(c[0],0);var d=c.pop();b.setEnd(d,d.length);var e=this.containsRange(b);return b.detach(),e}return this.containsNodeContents(a)},getNodes:function(a,b){return A(this),l(this,a,b)},getDocument:function(){return c(this)},collapseBefore:function(a){r(this),this.setEndBefore(a),this.collapse(!1)},collapseAfter:function(a){r(this),this.setStartAfter(a),this.collapse(!0)},getBookmark:function(b){var d=c(this),e=a.createRange(d);b=b||K.getBody(d),e.selectNodeContents(b);var f=this.intersection(e),g=0,h=0;return f&&(e.setEnd(f.startContainer,f.startOffset),g=e.toString().length,h=g+f.toString().length,e.detach()),{start:g,end:h,containerNode:b}},moveToBookmark:function(a){var b=a.containerNode,c=0;this.setStart(b,0),this.collapse(!0);for(var d,e,f,g,h=[b],i=!1,j=!1;!j&&(d=h.pop());)if(3==d.nodeType)e=c+d.length,!i&&a.start>=c&&a.start<=e&&(this.setStart(d,a.start-c),i=!0),i&&a.end>=c&&a.end<=e&&(this.setEnd(d,a.end-c),j=!0),c=e;else for(g=d.childNodes,f=g.length;f--;)h.push(g[f])},getName:function(){return"DomRange"},equals:function(a){return J.rangesEqual(this,a)},isValid:function(){return z(this)},inspect:function(){return m(this)}}),F(J,H,I),L.extend(J,{rangeProperties:jb,RangeIterator:n,copyComparisonConstants:D,createPrototypeRange:F,inspect:m,getRangeDocument:c,rangesEqual:function(a,b){return a.startContainer===b.startContainer&&a.startOffset===b.startOffset&&a.endContainer===b.endContainer&&a.endOffset===b.endOffset}}),a.DomRange=J,a.RangeException=o}),rangy.createCoreModule("WrappedRange",["DomRange"],function(a,b){var c,d,e=a.dom,f=a.util,g=e.DomPosition,h=a.DomRange,i=e.getBody,j=e.getContentDocument,k=e.isCharacterDataNode;if(a.features.implementsDomRange&&!function(){function d(a){for(var b,c=n.length;c--;)b=n[c],a[b]=a.nativeRange[b];a.collapsed=a.startContainer===a.endContainer&&a.startOffset===a.endOffset}function g(a,b,c,d,e){var f=a.startContainer!==b||a.startOffset!=c,g=a.endContainer!==d||a.endOffset!=e,h=!a.equals(a.nativeRange);(f||g||h)&&(a.setEnd(d,e),a.setStart(b,c))}function k(a){a.nativeRange.detach(),a.detached=!0;for(var b=n.length;b--;)a[n[b]]=null}var l,m,n=h.rangeProperties;c=function(a){if(!a)throw b.createError("WrappedRange: Range must be specified");this.nativeRange=a,d(this)},h.createPrototypeRange(c,g,k),l=c.prototype,l.selectNode=function(a){this.nativeRange.selectNode(a),d(this)},l.cloneContents=function(){return this.nativeRange.cloneContents()},l.surroundContents=function(a){this.nativeRange.surroundContents(a),d(this)},l.collapse=function(a){this.nativeRange.collapse(a),d(this)},l.cloneRange=function(){return new c(this.nativeRange.cloneRange())},l.refresh=function(){d(this)},l.toString=function(){return this.nativeRange.toString()};var o=document.createTextNode("test");i(document).appendChild(o);var p=document.createRange();p.setStart(o,0),p.setEnd(o,0);try{p.setStart(o,1),l.setStart=function(a,b){this.nativeRange.setStart(a,b),d(this)},l.setEnd=function(a,b){this.nativeRange.setEnd(a,b),d(this)},m=function(a){return function(b){this.nativeRange[a](b),d(this)}}}catch(q){l.setStart=function(a,b){try{this.nativeRange.setStart(a,b)}catch(c){this.nativeRange.setEnd(a,b),this.nativeRange.setStart(a,b)}d(this)},l.setEnd=function(a,b){try{this.nativeRange.setEnd(a,b)}catch(c){this.nativeRange.setStart(a,b),this.nativeRange.setEnd(a,b)}d(this)},m=function(a,b){return function(c){try{this.nativeRange[a](c)}catch(e){this.nativeRange[b](c),this.nativeRange[a](c)}d(this)}}}l.setStartBefore=m("setStartBefore","setEndBefore"),l.setStartAfter=m("setStartAfter","setEndAfter"),l.setEndBefore=m("setEndBefore","setStartBefore"),l.setEndAfter=m("setEndAfter","setStartAfter"),l.selectNodeContents=function(a){this.setStartAndEnd(a,0,e.getNodeLength(a))},p.selectNodeContents(o),p.setEnd(o,3);var r=document.createRange();r.selectNodeContents(o),r.setEnd(o,4),r.setStart(o,2),l.compareBoundaryPoints=-1==p.compareBoundaryPoints(p.START_TO_END,r)&&1==p.compareBoundaryPoints(p.END_TO_START,r)?function(a,b){return b=b.nativeRange||b,a==b.START_TO_END?a=b.END_TO_START:a==b.END_TO_START&&(a=b.START_TO_END),this.nativeRange.compareBoundaryPoints(a,b)}:function(a,b){return this.nativeRange.compareBoundaryPoints(a,b.nativeRange||b)};var s=document.createElement("div");s.innerHTML="123";var t=s.firstChild,u=i(document);u.appendChild(s),p.setStart(t,1),p.setEnd(t,2),p.deleteContents(),"13"==t.data&&(l.deleteContents=function(){this.nativeRange.deleteContents(),d(this)},l.extractContents=function(){var a=this.nativeRange.extractContents();return d(this),a}),u.removeChild(s),u=null,f.isHostMethod(p,"createContextualFragment")&&(l.createContextualFragment=function(a){return this.nativeRange.createContextualFragment(a)}),i(document).removeChild(o),p.detach(),r.detach(),l.getName=function(){return"WrappedRange"},a.WrappedRange=c,a.createNativeRange=function(a){return a=j(a,b,"createNativeRange"),a.createRange()}}(),a.features.implementsTextRange){var l=function(a){var b=a.parentElement(),c=a.duplicate();c.collapse(!0);var d=c.parentElement();c=a.duplicate(),c.collapse(!1);var f=c.parentElement(),g=d==f?d:e.getCommonAncestor(d,f);return g==b?g:e.getCommonAncestor(b,g)},m=function(a){return 0==a.compareEndPoints("StartToEnd",a)},n=function(a,b,c,d,f){var h=a.duplicate();h.collapse(c);var i=h.parentElement();if(e.isOrIsAncestorOf(b,i)||(i=b),!i.canHaveHTML){var j=new g(i.parentNode,e.getNodeIndex(i));return{boundaryPosition:j,nodeInfo:{nodeIndex:j.offset,containerElement:j.node}}}var l=e.getDocument(i).createElement("span");l.parentNode&&l.parentNode.removeChild(l);for(var m,n,o,p,q,r=c?"StartToStart":"StartToEnd",s=f&&f.containerElement==i?f.nodeIndex:0,t=i.childNodes.length,u=t,v=u;;){if(v==t?i.appendChild(l):i.insertBefore(l,i.childNodes[v]),h.moveToElementText(l),m=h.compareEndPoints(r,a),0==m||s==u)break;if(-1==m){if(u==s+1)break;s=v}else u=u==s+1?s:v;v=Math.floor((s+u)/2),i.removeChild(l)}if(q=l.nextSibling,-1==m&&q&&k(q)){h.setEndPoint(c?"EndToStart":"EndToEnd",a);var w;if(/[\r\n]/.test(q.data)){var x=h.duplicate(),y=x.text.replace(/\r\n/g,"\r").length;for(w=x.moveStart("character",y);-1==(m=x.compareEndPoints("StartToEnd",x));)w++,x.moveStart("character",1)}else w=h.text.length;p=new g(q,w)}else n=(d||!c)&&l.previousSibling,o=(d||c)&&l.nextSibling,p=o&&k(o)?new g(o,0):n&&k(n)?new g(n,n.data.length):new g(i,e.getNodeIndex(l));return l.parentNode.removeChild(l),{boundaryPosition:p,nodeInfo:{nodeIndex:v,containerElement:i}}
},o=function(a,b){var c,d,f,g,h=a.offset,j=e.getDocument(a.node),l=i(j).createTextRange(),m=k(a.node);return m?(c=a.node,d=c.parentNode):(g=a.node.childNodes,c=h<g.length?g[h]:null,d=a.node),f=j.createElement("span"),f.innerHTML="&#feff;",c?d.insertBefore(f,c):d.appendChild(f),l.moveToElementText(f),l.collapse(!b),d.removeChild(f),m&&l[b?"moveStart":"moveEnd"]("character",h),l};if(d=function(a){this.textRange=a,this.refresh()},d.prototype=new h(document),d.prototype.refresh=function(){var a,b,c,d=l(this.textRange);m(this.textRange)?b=a=n(this.textRange,d,!0,!0).boundaryPosition:(c=n(this.textRange,d,!0,!1),a=c.boundaryPosition,b=n(this.textRange,d,!1,!1,c.nodeInfo).boundaryPosition),this.setStart(a.node,a.offset),this.setEnd(b.node,b.offset)},d.prototype.getName=function(){return"WrappedTextRange"},h.copyComparisonConstants(d),d.rangeToTextRange=function(a){if(a.collapsed)return o(new g(a.startContainer,a.startOffset),!0);var b=o(new g(a.startContainer,a.startOffset),!0),c=o(new g(a.endContainer,a.endOffset),!1),d=i(h.getRangeDocument(a)).createTextRange();return d.setEndPoint("StartToStart",b),d.setEndPoint("EndToEnd",c),d},a.WrappedTextRange=d,!a.features.implementsDomRange||a.config.preferTextRange){var p=function(){return this}();"undefined"==typeof p.Range&&(p.Range=d),a.createNativeRange=function(a){return a=j(a,b,"createNativeRange"),i(a).createTextRange()},a.WrappedRange=d}}a.createRange=function(c){return c=j(c,b,"createRange"),new a.WrappedRange(a.createNativeRange(c))},a.createRangyRange=function(a){return a=j(a,b,"createRangyRange"),new h(a)},a.createIframeRange=function(c){return b.deprecationNotice("createIframeRange()","createRange(iframeEl)"),a.createRange(c)},a.createIframeRangyRange=function(c){return b.deprecationNotice("createIframeRangyRange()","createRangyRange(iframeEl)"),a.createRangyRange(c)},a.addCreateMissingNativeApiListener(function(b){var c=b.document;"undefined"==typeof c.createRange&&(c.createRange=function(){return a.createRange(c)}),c=b=null})}),rangy.createCoreModule("WrappedSelection",["DomRange","WrappedRange"],function(a,b){function c(a){return"string"==typeof a?/^backward(s)?$/i.test(a):!!a}function d(a,c){if(a){if(C.isWindow(a))return a;if(a instanceof r)return a.win;var d=C.getContentDocument(a,b,c);return C.getWindow(d)}return window}function e(a){return d(a,"getWinSelection").getSelection()}function f(a){return d(a,"getDocSelection").document.selection}function g(a){var b=!1;return a.anchorNode&&(b=1==C.comparePoints(a.anchorNode,a.anchorOffset,a.focusNode,a.focusOffset)),b}function h(a,b,c){var d=c?"end":"start",e=c?"start":"end";a.anchorNode=b[d+"Container"],a.anchorOffset=b[d+"Offset"],a.focusNode=b[e+"Container"],a.focusOffset=b[e+"Offset"]}function i(a){var b=a.nativeSelection;a.anchorNode=b.anchorNode,a.anchorOffset=b.anchorOffset,a.focusNode=b.focusNode,a.focusOffset=b.focusOffset}function j(a){a.anchorNode=a.focusNode=null,a.anchorOffset=a.focusOffset=0,a.rangeCount=0,a.isCollapsed=!0,a._ranges.length=0}function k(b){var c;return b instanceof F?(c=a.createNativeRange(b.getDocument()),c.setEnd(b.endContainer,b.endOffset),c.setStart(b.startContainer,b.startOffset)):b instanceof G?c=b.nativeRange:J.implementsDomRange&&b instanceof C.getWindow(b.startContainer).Range&&(c=b),c}function l(a){if(!a.length||1!=a[0].nodeType)return!1;for(var b=1,c=a.length;c>b;++b)if(!C.isAncestorOf(a[0],a[b]))return!1;return!0}function m(a){var c=a.getNodes();if(!l(c))throw b.createError("getSingleElementFromRange: range "+a.inspect()+" did not consist of a single element");return c[0]}function n(a){return!!a&&"undefined"!=typeof a.text}function o(a,b){var c=new G(b);a._ranges=[c],h(a,c,!1),a.rangeCount=1,a.isCollapsed=c.collapsed}function p(b){if(b._ranges.length=0,"None"==b.docSelection.type)j(b);else{var c=b.docSelection.createRange();if(n(c))o(b,c);else{b.rangeCount=c.length;for(var d,e=L(c.item(0)),f=0;f<b.rangeCount;++f)d=a.createRange(e),d.selectNode(c.item(f)),b._ranges.push(d);b.isCollapsed=1==b.rangeCount&&b._ranges[0].collapsed,h(b,b._ranges[b.rangeCount-1],!1)}}}function q(a,c){for(var d=a.docSelection.createRange(),e=m(c),f=L(d.item(0)),g=M(f).createControlRange(),h=0,i=d.length;i>h;++h)g.add(d.item(h));try{g.add(e)}catch(j){throw b.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)")}g.select(),p(a)}function r(a,b,c){this.nativeSelection=a,this.docSelection=b,this._ranges=[],this.win=c,this.refresh()}function s(a){a.win=a.anchorNode=a.focusNode=a._ranges=null,a.rangeCount=a.anchorOffset=a.focusOffset=0,a.detached=!0}function t(a,b){for(var c,d,e=bb.length;e--;)if(c=bb[e],d=c.selection,"deleteAll"==b)s(d);else if(c.win==a)return"delete"==b?(bb.splice(e,1),!0):d;return"deleteAll"==b&&(bb.length=0),null}function u(a,c){for(var d,e=L(c[0].startContainer),f=M(e).createControlRange(),g=0,h=c.length;h>g;++g){d=m(c[g]);try{f.add(d)}catch(i){throw b.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)")}}f.select(),p(a)}function v(a,b){if(a.win.document!=L(b))throw new H("WRONG_DOCUMENT_ERR")}function w(b){return function(c,d){var e;this.rangeCount?(e=this.getRangeAt(0),e["set"+(b?"Start":"End")](c,d)):(e=a.createRange(this.win.document),e.setStartAndEnd(c,d)),this.setSingleRange(e,this.isBackward())}}function x(a){var b=[],c=new I(a.anchorNode,a.anchorOffset),d=new I(a.focusNode,a.focusOffset),e="function"==typeof a.getName?a.getName():"Selection";if("undefined"!=typeof a.rangeCount)for(var f=0,g=a.rangeCount;g>f;++f)b[f]=F.inspect(a.getRangeAt(f));return"["+e+"(Ranges: "+b.join(", ")+")(anchor: "+c.inspect()+", focus: "+d.inspect()+"]"}a.config.checkSelectionRanges=!0;var y,z,A="boolean",B="number",C=a.dom,D=a.util,E=D.isHostMethod,F=a.DomRange,G=a.WrappedRange,H=a.DOMException,I=C.DomPosition,J=a.features,K="Control",L=C.getDocument,M=C.getBody,N=F.rangesEqual,O=E(window,"getSelection"),P=D.isHostObject(document,"selection");J.implementsWinGetSelection=O,J.implementsDocSelection=P;var Q=P&&(!O||a.config.preferTextRange);Q?(y=f,a.isSelectionValid=function(a){var b=d(a,"isSelectionValid").document,c=b.selection;return"None"!=c.type||L(c.createRange().parentElement())==b}):O?(y=e,a.isSelectionValid=function(){return!0}):b.fail("Neither document.selection or window.getSelection() detected."),a.getNativeSelection=y;var R=y(),S=a.createNativeRange(document),T=M(document),U=D.areHostProperties(R,["anchorNode","focusNode","anchorOffset","focusOffset"]);J.selectionHasAnchorAndFocus=U;var V=E(R,"extend");J.selectionHasExtend=V;var W=typeof R.rangeCount==B;J.selectionHasRangeCount=W;var X=!1,Y=!0,Z=V?function(b,c){var d=F.getRangeDocument(c),e=a.createRange(d);e.collapseToPoint(c.endContainer,c.endOffset),b.addRange(k(e)),b.extend(c.startContainer,c.startOffset)}:null;D.areHostMethods(R,["addRange","getRangeAt","removeAllRanges"])&&typeof R.rangeCount==B&&J.implementsDomRange&&!function(){var b=window.getSelection();if(b){for(var c=b.rangeCount,d=c>1,e=[],f=g(b),h=0;c>h;++h)e[h]=b.getRangeAt(h);var i=M(document),j=i.appendChild(document.createElement("div"));j.contentEditable="false";var k=j.appendChild(document.createTextNode("   ")),l=document.createRange();if(l.setStart(k,1),l.collapse(!0),b.addRange(l),Y=1==b.rangeCount,b.removeAllRanges(),!d){var m=l.cloneRange();l.setStart(k,0),m.setEnd(k,3),m.setStart(k,2),b.addRange(l),b.addRange(m),X=2==b.rangeCount,m.detach()}for(i.removeChild(j),b.removeAllRanges(),l.detach(),h=0;c>h;++h)0==h&&f?Z?Z(b,e[h]):(a.warn("Rangy initialization: original selection was backwards but selection has been restored forwards because browser does not support Selection.extend"),b.addRange(e[h])):b.addRange(e[h])}}(),J.selectionSupportsMultipleRanges=X,J.collapsedNonEditableSelectionsSupported=Y;var $,_=!1;T&&E(T,"createControlRange")&&($=T.createControlRange(),D.areHostProperties($,["item","add"])&&(_=!0)),J.implementsControlRange=_,z=U?function(a){return a.anchorNode===a.focusNode&&a.anchorOffset===a.focusOffset}:function(a){return a.rangeCount?a.getRangeAt(a.rangeCount-1).collapsed:!1};var ab;E(R,"getRangeAt")?ab=function(a,b){try{return a.getRangeAt(b)}catch(c){return null}}:U&&(ab=function(b){var c=L(b.anchorNode),d=a.createRange(c);return d.setStartAndEnd(b.anchorNode,b.anchorOffset,b.focusNode,b.focusOffset),d.collapsed!==this.isCollapsed&&d.setStartAndEnd(b.focusNode,b.focusOffset,b.anchorNode,b.anchorOffset),d}),r.prototype=a.selectionPrototype;var bb=[],cb=function(a){if(a&&a instanceof r)return a.refresh(),a;a=d(a,"getNativeSelection");var b=t(a),c=y(a),e=P?f(a):null;return b?(b.nativeSelection=c,b.docSelection=e,b.refresh()):(b=new r(c,e,a),bb.push({win:a,selection:b})),b};a.getSelection=cb,a.getIframeSelection=function(c){return b.deprecationNotice("getIframeSelection()","getSelection(iframeEl)"),a.getSelection(C.getIframeWindow(c))};var db=r.prototype;if(!Q&&U&&D.areHostMethods(R,["removeAllRanges","addRange"])){db.removeAllRanges=function(){this.nativeSelection.removeAllRanges(),j(this)};var eb=function(a,b){Z(a.nativeSelection,b),a.refresh()};db.addRange=W?function(b,d){if(_&&P&&this.docSelection.type==K)q(this,b);else if(c(d)&&V)eb(this,b);else{var e;if(X?e=this.rangeCount:(this.removeAllRanges(),e=0),this.nativeSelection.addRange(k(b).cloneRange()),this.rangeCount=this.nativeSelection.rangeCount,this.rangeCount==e+1){if(a.config.checkSelectionRanges){var f=ab(this.nativeSelection,this.rangeCount-1);f&&!N(f,b)&&(b=new G(f))}this._ranges[this.rangeCount-1]=b,h(this,b,hb(this.nativeSelection)),this.isCollapsed=z(this)}else this.refresh()}}:function(a,b){c(b)&&V?eb(this,a):(this.nativeSelection.addRange(k(a)),this.refresh())},db.setRanges=function(a){if(_&&a.length>1)u(this,a);else{this.removeAllRanges();for(var b=0,c=a.length;c>b;++b)this.addRange(a[b])}}}else{if(!(E(R,"empty")&&E(S,"select")&&_&&Q))return b.fail("No means of selecting a Range or TextRange was found"),!1;db.removeAllRanges=function(){try{if(this.docSelection.empty(),"None"!=this.docSelection.type){var a;if(this.anchorNode)a=L(this.anchorNode);else if(this.docSelection.type==K){var b=this.docSelection.createRange();b.length&&(a=L(b.item(0)))}if(a){var c=M(a).createTextRange();c.select(),this.docSelection.empty()}}}catch(d){}j(this)},db.addRange=function(b){this.docSelection.type==K?q(this,b):(a.WrappedTextRange.rangeToTextRange(b).select(),this._ranges[0]=b,this.rangeCount=1,this.isCollapsed=this._ranges[0].collapsed,h(this,b,!1))},db.setRanges=function(a){this.removeAllRanges();var b=a.length;b>1?u(this,a):b&&this.addRange(a[0])}}db.getRangeAt=function(a){if(0>a||a>=this.rangeCount)throw new H("INDEX_SIZE_ERR");return this._ranges[a].cloneRange()};var fb;if(Q)fb=function(b){var c;a.isSelectionValid(b.win)?c=b.docSelection.createRange():(c=M(b.win.document).createTextRange(),c.collapse(!0)),b.docSelection.type==K?p(b):n(c)?o(b,c):j(b)};else if(E(R,"getRangeAt")&&typeof R.rangeCount==B)fb=function(b){if(_&&P&&b.docSelection.type==K)p(b);else if(b._ranges.length=b.rangeCount=b.nativeSelection.rangeCount,b.rangeCount){for(var c=0,d=b.rangeCount;d>c;++c)b._ranges[c]=new a.WrappedRange(b.nativeSelection.getRangeAt(c));h(b,b._ranges[b.rangeCount-1],hb(b.nativeSelection)),b.isCollapsed=z(b)}else j(b)};else{if(!U||typeof R.isCollapsed!=A||typeof S.collapsed!=A||!J.implementsDomRange)return b.fail("No means of obtaining a Range or TextRange from the user's selection was found"),!1;fb=function(a){var b,c=a.nativeSelection;c.anchorNode?(b=ab(c,0),a._ranges=[b],a.rangeCount=1,i(a),a.isCollapsed=z(a)):j(a)}}db.refresh=function(a){var b=a?this._ranges.slice(0):null,c=this.anchorNode,d=this.anchorOffset;if(fb(this),a){var e=b.length;if(e!=this._ranges.length)return!0;if(this.anchorNode!=c||this.anchorOffset!=d)return!0;for(;e--;)if(!N(b[e],this._ranges[e]))return!0;return!1}};var gb=function(a,b){var c=a.getAllRanges();a.removeAllRanges();for(var d=0,e=c.length;e>d;++d)N(b,c[d])||a.addRange(c[d]);a.rangeCount||j(a)};db.removeRange=_?function(a){if(this.docSelection.type==K){for(var b,c=this.docSelection.createRange(),d=m(a),e=L(c.item(0)),f=M(e).createControlRange(),g=!1,h=0,i=c.length;i>h;++h)b=c.item(h),b!==d||g?f.add(c.item(h)):g=!0;f.select(),p(this)}else gb(this,a)}:function(a){gb(this,a)};var hb;!Q&&U&&J.implementsDomRange?(hb=g,db.isBackward=function(){return hb(this)}):hb=db.isBackward=function(){return!1},db.isBackwards=db.isBackward,db.toString=function(){for(var a=[],b=0,c=this.rangeCount;c>b;++b)a[b]=""+this._ranges[b];return a.join("")},db.collapse=function(b,c){v(this,b);var d=a.createRange(b);d.collapseToPoint(b,c),this.setSingleRange(d),this.isCollapsed=!0},db.collapseToStart=function(){if(!this.rangeCount)throw new H("INVALID_STATE_ERR");var a=this._ranges[0];this.collapse(a.startContainer,a.startOffset)},db.collapseToEnd=function(){if(!this.rangeCount)throw new H("INVALID_STATE_ERR");var a=this._ranges[this.rangeCount-1];this.collapse(a.endContainer,a.endOffset)},db.selectAllChildren=function(b){v(this,b);var c=a.createRange(b);c.selectNodeContents(b),this.setSingleRange(c)},db.deleteFromDocument=function(){if(_&&P&&this.docSelection.type==K){for(var a,b=this.docSelection.createRange();b.length;)a=b.item(0),b.remove(a),a.parentNode.removeChild(a);this.refresh()}else if(this.rangeCount){var c=this.getAllRanges();if(c.length){this.removeAllRanges();for(var d=0,e=c.length;e>d;++d)c[d].deleteContents();this.addRange(c[e-1])}}},db.eachRange=function(a,b){for(var c=0,d=this._ranges.length;d>c;++c)if(a(this.getRangeAt(c)))return b},db.getAllRanges=function(){var a=[];return this.eachRange(function(b){a.push(b)}),a},db.setSingleRange=function(a,b){this.removeAllRanges(),this.addRange(a,b)},db.callMethodOnEachRange=function(a,b){var c=[];return this.eachRange(function(d){c.push(d[a].apply(d,b))}),c},db.setStart=w(!0),db.setEnd=w(!1),a.rangePrototype.select=function(a){cb(this.getDocument()).setSingleRange(this,a)},db.changeEachRange=function(a){var b=[],c=this.isBackward();this.eachRange(function(c){a(c),b.push(c)}),this.removeAllRanges(),c&&1==b.length?this.addRange(b[0],"backward"):this.setRanges(b)},db.containsNode=function(a,b){return this.eachRange(function(c){return c.containsNode(a,b)},!0)},db.getBookmark=function(a){return{backward:this.isBackward(),rangeBookmarks:this.callMethodOnEachRange("getBookmark",[a])}},db.moveToBookmark=function(b){for(var c,d,e=[],f=0;c=b.rangeBookmarks[f++];)d=a.createRange(this.win),d.moveToBookmark(c),e.push(d);b.backward?this.setSingleRange(e[0],"backward"):this.setRanges(e)},db.toHtml=function(){return this.callMethodOnEachRange("toHtml").join("")},db.getName=function(){return"WrappedSelection"},db.inspect=function(){return x(this)},db.detach=function(){t(this.win,"delete"),s(this)},r.detachAll=function(){t(null,"deleteAll")},r.inspect=x,r.isDirectionBackward=c,a.Selection=r,a.selectionPrototype=db,a.addCreateMissingNativeApiListener(function(a){"undefined"==typeof a.getSelection&&(a.getSelection=function(){return cb(a)}),a=null})}),rangy.createModule("SaveRestore",["WrappedRange"],function(a,b){function c(a,b){return(b||document).getElementById(a)}function d(a,b){var c,d="selectionBoundary_"+ +new Date+"_"+(""+Math.random()).slice(2),e=o.getDocument(a.startContainer),f=a.cloneRange();return f.collapse(b),c=e.createElement("span"),c.id=d,c.style.lineHeight="0",c.style.display="none",c.className="rangySelectionBoundary",c.appendChild(e.createTextNode(p)),f.insertNode(c),f.detach(),c}function e(a,d,e,f){var g=c(e,a);g?(d[f?"setStartBefore":"setEndBefore"](g),g.parentNode.removeChild(g)):b.warn("Marker element has been removed. Cannot restore selection.")}function f(a,b){return b.compareBoundaryPoints(a.START_TO_START,a)}function g(b,c){var e,f,g=a.DomRange.getRangeDocument(b),h=b.toString();return b.collapsed?(f=d(b,!1),{document:g,markerId:f.id,collapsed:!0}):(f=d(b,!1),e=d(b,!0),{document:g,startMarkerId:e.id,endMarkerId:f.id,collapsed:!1,backward:c,toString:function(){return"original text: '"+h+"', new text: '"+b.toString()+"'"}})}function h(d,f){var g=d.document;"undefined"==typeof f&&(f=!0);var h=a.createRange(g);if(d.collapsed){var i=c(d.markerId,g);if(i){i.style.display="inline";var j=i.previousSibling;j&&3==j.nodeType?(i.parentNode.removeChild(i),h.collapseToPoint(j,j.length)):(h.collapseBefore(i),i.parentNode.removeChild(i))}else b.warn("Marker element has been removed. Cannot restore selection.")}else e(g,h,d.startMarkerId,!0),e(g,h,d.endMarkerId,!1);return f&&h.normalizeBoundaries(),h}function i(b,d){var e,h,i=[];b=b.slice(0),b.sort(f);for(var j=0,k=b.length;k>j;++j)i[j]=g(b[j],d);for(j=k-1;j>=0;--j)e=b[j],h=a.DomRange.getRangeDocument(e),e.collapsed?e.collapseAfter(c(i[j].markerId,h)):(e.setEndBefore(c(i[j].endMarkerId,h)),e.setStartAfter(c(i[j].startMarkerId,h)));return i}function j(c){if(!a.isSelectionValid(c))return b.warn("Cannot save selection. This usually happens when the selection is collapsed and the selection document has lost focus."),null;var d=a.getSelection(c),e=d.getAllRanges(),f=1==e.length&&d.isBackward(),g=i(e,f);return f?d.setSingleRange(e[0],"backward"):d.setRanges(e),{win:c,rangeInfos:g,restored:!1}}function k(a){for(var b=[],c=a.length,d=c-1;d>=0;d--)b[d]=h(a[d],!0);return b}function l(b,c){if(!b.restored){var d=b.rangeInfos,e=a.getSelection(b.win),f=k(d),g=d.length;1==g&&c&&a.features.selectionHasExtend&&d[0].backward?(e.removeAllRanges(),e.addRange(f[0],!0)):e.setRanges(f),b.restored=!0}}function m(a,b){var d=c(b,a);d&&d.parentNode.removeChild(d)}function n(a){for(var b,c=a.rangeInfos,d=0,e=c.length;e>d;++d)b=c[d],b.collapsed?m(a.doc,b.markerId):(m(a.doc,b.startMarkerId),m(a.doc,b.endMarkerId))}var o=a.dom,p="﻿";a.util.extend(a,{saveRange:g,restoreRange:h,saveRanges:i,restoreRanges:k,saveSelection:j,restoreSelection:l,removeMarkerElement:m,removeMarkers:n})});var Base=function(){};Base.extend=function(a,b){var c=Base.prototype.extend;Base._prototyping=!0;var d=new this;c.call(d,a),d.base=function(){},delete Base._prototyping;var e=d.constructor,f=d.constructor=function(){if(!Base._prototyping)if(this._constructing||this.constructor==f)this._constructing=!0,e.apply(this,arguments),delete this._constructing;else if(null!=arguments[0])return(arguments[0].extend||c).call(arguments[0],d)};return f.ancestor=this,f.extend=this.extend,f.forEach=this.forEach,f.implement=this.implement,f.prototype=d,f.toString=this.toString,f.valueOf=function(a){return"object"==a?f:e.valueOf()},c.call(f,b),"function"==typeof f.init&&f.init(),f},Base.prototype={extend:function(a,b){if(arguments.length>1){var c=this[a];if(c&&"function"==typeof b&&(!c.valueOf||c.valueOf()!=b.valueOf())&&/\bbase\b/.test(b)){var d=b.valueOf();b=function(){var a=this.base||Base.prototype.base;this.base=c;var b=d.apply(this,arguments);return this.base=a,b},b.valueOf=function(a){return"object"==a?b:d},b.toString=Base.toString}this[a]=b}else if(a){var e=Base.prototype.extend;Base._prototyping||"function"==typeof this||(e=this.extend||e);for(var f={toSource:null},g=["constructor","toString","valueOf"],h=Base._prototyping?0:1;i=g[h++];)a[i]!=f[i]&&e.call(this,i,a[i]);for(var i in a)f[i]||e.call(this,i,a[i])}return this}},Base=Base.extend({constructor:function(){this.extend(arguments[0])}},{ancestor:Object,version:"1.1",forEach:function(a,b,c){for(var d in a)void 0===this.prototype[d]&&b.call(c,a[d],d,a)},implement:function(){for(var a=0;a<arguments.length;a++)"function"==typeof arguments[a]?arguments[a](this.prototype):this.prototype.extend(arguments[a]);return this},toString:function(){return String(this.valueOf())}}),wysihtml5.browser=function(){function a(a){return+(/ipad|iphone|ipod/.test(a)&&a.match(/ os (\d+).+? like mac os x/)||[void 0,0])[1]}function b(a){return+(a.match(/android (\d+)/)||[void 0,0])[1]}var c=navigator.userAgent,d=document.createElement("div"),e=-1!==c.indexOf("MSIE")&&-1===c.indexOf("Opera"),f=-1!==c.indexOf("Gecko")&&-1===c.indexOf("KHTML"),g=-1!==c.indexOf("AppleWebKit/"),h=-1!==c.indexOf("Chrome/"),i=-1!==c.indexOf("Opera/");return{USER_AGENT:c,supported:function(){var c=this.USER_AGENT.toLowerCase(),e="contentEditable"in d,f=document.execCommand&&document.queryCommandSupported&&document.queryCommandState,g=document.querySelector&&document.querySelectorAll,h=this.isIos()&&a(c)<5||this.isAndroid()&&b(c)<4||-1!==c.indexOf("opera mobi")||-1!==c.indexOf("hpwos/");return e&&f&&g&&!h},isTouchDevice:function(){return this.supportsEvent("touchmove")},isIos:function(){return/ipad|iphone|ipod/i.test(this.USER_AGENT)},isAndroid:function(){return-1!==this.USER_AGENT.indexOf("Android")},supportsSandboxedIframes:function(){return e},throwsMixedContentWarningWhenIframeSrcIsEmpty:function(){return!("querySelector"in document)},displaysCaretInEmptyContentEditableCorrectly:function(){return e},hasCurrentStyleProperty:function(){return"currentStyle"in d},hasHistoryIssue:function(){return f&&"Mac"===navigator.platform.substr(0,3)},insertsLineBreaksOnReturn:function(){return f},supportsPlaceholderAttributeOn:function(a){return"placeholder"in a},supportsEvent:function(a){return"on"+a in d||function(){return d.setAttribute("on"+a,"return;"),"function"==typeof d["on"+a]}()},supportsEventsInIframeCorrectly:function(){return!i},supportsHTML5Tags:function(a){var b=a.createElement("div"),c="<article>foo</article>";return b.innerHTML=c,b.innerHTML.toLowerCase()===c},supportsCommand:function(){var a={formatBlock:e,insertUnorderedList:e||g,insertOrderedList:e||g},b={insertHTML:f};return function(c,d){var e=a[d];if(!e){try{return c.queryCommandSupported(d)}catch(f){}try{return c.queryCommandEnabled(d)}catch(g){return!!b[d]}}return!1}}(),doesAutoLinkingInContentEditable:function(){return e},canDisableAutoLinking:function(){return this.supportsCommand(document,"AutoUrlDetect")},clearsContentEditableCorrectly:function(){return f||i||g},supportsGetAttributeCorrectly:function(){var a=document.createElement("td");return"1"!=a.getAttribute("rowspan")},canSelectImagesInContentEditable:function(){return f||e||i},autoScrollsToCaret:function(){return!g},autoClosesUnclosedTags:function(){var a,b,c=d.cloneNode(!1);return c.innerHTML="<p><div></div>",b=c.innerHTML.toLowerCase(),a="<p></p><div></div>"===b||"<p><div></div></p>"===b,this.autoClosesUnclosedTags=function(){return a},a},supportsNativeGetElementsByClassName:function(){return-1!==String(document.getElementsByClassName).indexOf("[native code]")},supportsSelectionModify:function(){return"getSelection"in window&&"modify"in window.getSelection()},needsSpaceAfterLineBreak:function(){return i},supportsSpeechApiOn:function(a){var b=c.match(/Chrome\/(\d+)/)||[void 0,0];return b[1]>=11&&("onwebkitspeechchange"in a||"speech"in a)},crashesWhenDefineProperty:function(a){return e&&("XMLHttpRequest"===a||"XDomainRequest"===a)},doesAsyncFocus:function(){return e},hasProblemsSettingCaretAfterImg:function(){return e},hasUndoInContextMenu:function(){return f||h||i},hasInsertNodeIssue:function(){return i},hasIframeFocusIssue:function(){return e},createsNestedInvalidMarkupAfterPaste:function(){return g},supportsMutationEvents:function(){return"MutationEvent"in window}}}(),wysihtml5.lang.array=function(a){return{contains:function(b){if(Array.isArray(b)){for(var c=b.length;c--;)if(-1!==wysihtml5.lang.array(a).indexOf(b[c]))return!0;return!1}return-1!==wysihtml5.lang.array(a).indexOf(b)},indexOf:function(b){if(a.indexOf)return a.indexOf(b);for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},without:function(b){b=wysihtml5.lang.array(b);for(var c=[],d=0,e=a.length;e>d;d++)b.contains(a[d])||c.push(a[d]);return c},get:function(){for(var b=0,c=a.length,d=[];c>b;b++)d.push(a[b]);return d},map:function(b,c){if(Array.prototype.map)return a.map(b,c);for(var d=a.length>>>0,e=new Array(d),f=0;d>f;f++)e[f]=b.call(c,a[f],f,a);return e},unique:function(){for(var b=[],c=a.length,d=0;c>d;)wysihtml5.lang.array(b).contains(a[d])||b.push(a[d]),d++;return b}}},wysihtml5.lang.Dispatcher=Base.extend({on:function(a,b){return this.events=this.events||{},this.events[a]=this.events[a]||[],this.events[a].push(b),this},off:function(a,b){this.events=this.events||{};var c,d,e=0;if(a){for(c=this.events[a]||[],d=[];e<c.length;e++)c[e]!==b&&b&&d.push(c[e]);this.events[a]=d}else this.events={};return this},fire:function(a,b){this.events=this.events||{};for(var c=this.events[a]||[],d=0;d<c.length;d++)c[d].call(this,b);return this},observe:function(){return this.on.apply(this,arguments)},stopObserving:function(){return this.off.apply(this,arguments)}}),wysihtml5.lang.object=function(a){return{merge:function(b){for(var c in b)a[c]=b[c];return this},get:function(){return a},clone:function(){var b,c={};for(b in a)c[b]=a[b];return c},isArray:function(){return"[object Array]"===Object.prototype.toString.call(a)}}},function(){var a=/^\s+/,b=/\s+$/,c=/[&<>"]/g,d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};wysihtml5.lang.string=function(e){return e=String(e),{trim:function(){return e.replace(a,"").replace(b,"")},interpolate:function(a){for(var b in a)e=this.replace("#{"+b+"}").by(a[b]);return e},replace:function(a){return{by:function(b){return e.split(a).join(b)}}},escapeHTML:function(){return e.replace(c,function(a){return d[a]})}}}}(),function(a){function b(a,b){return f(a,b)?a:(a===a.ownerDocument.documentElement&&(a=a.ownerDocument.body),g(a,b))}function c(a){return a.replace(i,function(a,b){var c=(b.match(j)||[])[1]||"",d=l[c];b=b.replace(j,""),b.split(d).length>b.split(c).length&&(b+=c,c="");var e=b,f=b;return b.length>k&&(f=f.substr(0,k)+"..."),"www."===e.substr(0,4)&&(e="http://"+e),'<a href="'+e+'">'+f+"</a>"+c})}function d(a){var b=a._wysihtml5_tempElement;return b||(b=a._wysihtml5_tempElement=a.createElement("div")),b}function e(b){var e=b.parentNode,f=a.lang.string(b.data).escapeHTML(),g=d(e.ownerDocument);for(g.innerHTML="<span></span>"+c(f),g.removeChild(g.firstChild);g.firstChild;)e.insertBefore(g.firstChild,b);e.removeChild(b)}function f(b,c){for(var d;b.parentNode;){if(b=b.parentNode,d=b.nodeName,b.className&&a.lang.array(b.className.split(" ")).contains(c))return!0;if(h.contains(d))return!0;if("body"===d)return!1}return!1}function g(b,c){if(!(h.contains(b.nodeName)||b.className&&a.lang.array(b.className.split(" ")).contains(c))){if(b.nodeType===a.TEXT_NODE&&b.data.match(i))return void e(b);for(var d=a.lang.array(b.childNodes).get(),f=d.length,j=0;f>j;j++)g(d[j],c);return b}}var h=a.lang.array(["CODE","PRE","A","SCRIPT","HEAD","TITLE","STYLE"]),i=/((https?:\/\/|www\.)[^\s<]{3,})/gi,j=/([^\w\/\-](,?))$/i,k=100,l={")":"(","]":"[","}":"{"};a.dom.autoLink=b,a.dom.autoLink.URL_REG_EXP=i}(wysihtml5),function(a){var b=a.dom;b.addClass=function(a,c){var d=a.classList;return d?d.add(c):void(b.hasClass(a,c)||(a.className+=" "+c))},b.removeClass=function(a,b){var c=a.classList;return c?c.remove(b):void(a.className=a.className.replace(new RegExp("(^|\\s+)"+b+"(\\s+|$)")," "))},b.hasClass=function(a,b){var c=a.classList;if(c)return c.contains(b);var d=a.className;return d.length>0&&(d==b||new RegExp("(^|\\s)"+b+"(\\s|$)").test(d))}}(wysihtml5),wysihtml5.dom.contains=function(){var a=document.documentElement;return a.contains?function(a,b){return b.nodeType!==wysihtml5.ELEMENT_NODE&&(b=b.parentNode),a!==b&&a.contains(b)}:a.compareDocumentPosition?function(a,b){return!!(16&a.compareDocumentPosition(b))}:void 0}(),wysihtml5.dom.convertToList=function(){function a(a,b){var c=a.createElement("li");return b.appendChild(c),c}function b(a,b){return a.createElement(b)}function c(c,d,e){if("UL"===c.nodeName||"OL"===c.nodeName||"MENU"===c.nodeName)return c;var f,g,h,i,j,k,l,m,n,o=c.ownerDocument,p=b(o,d),q=c.querySelectorAll("br"),r=q.length;for(n=0;r>n;n++)for(i=q[n];(j=i.parentNode)&&j!==c&&j.lastChild===i;){if("block"===wysihtml5.dom.getStyle("display").from(j)){j.removeChild(i);break}wysihtml5.dom.insert(i).after(i.parentNode)}for(f=wysihtml5.lang.array(c.childNodes).get(),g=f.length,n=0;g>n;n++)m=m||a(o,p),h=f[n],k="block"===wysihtml5.dom.getStyle("display").from(h),l="BR"===h.nodeName,!k||e&&wysihtml5.dom.hasClass(h,e)?l?m=m.firstChild?null:m:m.appendChild(h):(m=m.firstChild?a(o,p):m,m.appendChild(h),m=null);return 0===f.length&&a(o,p),c.parentNode.replaceChild(p,c),p}return c}(),wysihtml5.dom.copyAttributes=function(a){return{from:function(b){return{to:function(c){for(var d,e=0,f=a.length;f>e;e++)d=a[e],"undefined"!=typeof b[d]&&""!==b[d]&&(c[d]=b[d]);return{andTo:arguments.callee}}}}}},function(a){var b=["-webkit-box-sizing","-moz-box-sizing","-ms-box-sizing","box-sizing"],c=function(b){return d(b)?parseInt(a.getStyle("width").from(b),10)<b.offsetWidth:!1},d=function(c){for(var d=0,e=b.length;e>d;d++)if("border-box"===a.getStyle(b[d]).from(c))return b[d]};a.copyStyles=function(d){return{from:function(e){c(e)&&(d=wysihtml5.lang.array(d).without(b));for(var f,g="",h=d.length,i=0;h>i;i++)f=d[i],g+=f+":"+a.getStyle(f).from(e)+";";return{to:function(b){return a.setStyles(g).on(b),{andTo:arguments.callee}}}}}}}(wysihtml5.dom),function(a){a.dom.delegate=function(b,c,d,e){return a.dom.observe(b,d,function(d){for(var f=d.target,g=a.lang.array(b.querySelectorAll(c));f&&f!==b;){if(g.contains(f)){e.call(f,d);break}f=f.parentNode}})}}(wysihtml5),function(a){a.dom.domNode=function(b){var c=[a.ELEMENT_NODE,a.TEXT_NODE],d=function(b){return b.nodeType===a.TEXT_NODE&&/^\s*$/g.test(b.data)};return{prev:function(e){var f=b.previousSibling,g=e&&e.nodeTypes?e.nodeTypes:c;return f?!a.lang.array(g).contains(f.nodeType)||e&&e.ignoreBlankTexts&&d(f)?a.dom.domNode(f).prev(e):f:null},next:function(e){var f=b.nextSibling,g=e&&e.nodeTypes?e.nodeTypes:c;return f?!a.lang.array(g).contains(f.nodeType)||e&&e.ignoreBlankTexts&&d(f)?a.dom.domNode(f).next(e):f:null}}}}(wysihtml5),wysihtml5.dom.getAsDom=function(){var a=function(a,b){var c=b.createElement("div");c.style.display="none",b.body.appendChild(c);try{c.innerHTML=a}catch(d){}return b.body.removeChild(c),c},b=function(a){if(!a._wysihtml5_supportsHTML5Tags){for(var b=0,d=c.length;d>b;b++)a.createElement(c[b]);a._wysihtml5_supportsHTML5Tags=!0}},c=["abbr","article","aside","audio","bdi","canvas","command","datalist","details","figcaption","figure","footer","header","hgroup","keygen","mark","meter","nav","output","progress","rp","rt","ruby","svg","section","source","summary","time","track","video","wbr"];return function(c,d){d=d||document;var e;return"object"==typeof c&&c.nodeType?(e=d.createElement("div"),e.appendChild(c)):wysihtml5.browser.supportsHTML5Tags(d)?(e=d.createElement("div"),e.innerHTML=c):(b(d),e=a(c,d)),e}}(),wysihtml5.dom.getParentElement=function(){function a(a,b){return b&&b.length?"string"==typeof b?a===b:wysihtml5.lang.array(b).contains(a):!0}function b(a){return a.nodeType===wysihtml5.ELEMENT_NODE}function c(a,b,c){var d=(a.className||"").match(c)||[];return b?d[d.length-1]===b:!!d.length}function d(a,b,c){var d=(a.getAttribute("style")||"").match(c)||[];return b?d[d.length-1]===b:!!d.length}return function(e,f,g,h){var i=f.cssStyle||f.styleRegExp,j=f.className||f.classRegExp;for(g=g||50;g--&&e&&"BODY"!==e.nodeName&&(!h||e!==h);){if(b(e)&&a(e.nodeName,f.nodeName)&&(!i||d(e,f.cssStyle,f.styleRegExp))&&(!j||c(e,f.className,f.classRegExp)))return e;e=e.parentNode}return null}}(),wysihtml5.dom.getStyle=function(){function a(a){return a.replace(c,function(a){return a.charAt(1).toUpperCase()})}var b={"float":"styleFloat"in document.createElement("div").style?"styleFloat":"cssFloat"},c=/\-[a-z]/g;return function(c){return{from:function(d){if(d.nodeType===wysihtml5.ELEMENT_NODE){var e=d.ownerDocument,f=b[c]||a(c),g=d.style,h=d.currentStyle,i=g[f];if(i)return i;if(h)try{return h[f]}catch(j){}var k,l,m=e.defaultView||e.parentWindow,n=("height"===c||"width"===c)&&"TEXTAREA"===d.nodeName;return m.getComputedStyle?(n&&(k=g.overflow,g.overflow="hidden"),l=m.getComputedStyle(d,null).getPropertyValue(c),n&&(g.overflow=k||""),l):void 0}}}}}(),wysihtml5.dom.getTextNodes=function(a){var b=[];for(a=a.firstChild;a;a=a.nextSibling)3==a.nodeType?b.push(a):b=b.concat(wysihtml5.dom.getTextNodes(a));
return b},wysihtml5.dom.hasElementWithTagName=function(){function a(a){return a._wysihtml5_identifier||(a._wysihtml5_identifier=c++)}var b={},c=1;return function(c,d){var e=a(c)+":"+d,f=b[e];return f||(f=b[e]=c.getElementsByTagName(d)),f.length>0}}(),function(a){function b(a){return a._wysihtml5_identifier||(a._wysihtml5_identifier=d++)}var c={},d=1;a.dom.hasElementWithClassName=function(d,e){if(!a.browser.supportsNativeGetElementsByClassName())return!!d.querySelector("."+e);var f=b(d)+":"+e,g=c[f];return g||(g=c[f]=d.getElementsByClassName(e)),g.length>0}}(wysihtml5),wysihtml5.dom.insert=function(a){return{after:function(b){b.parentNode.insertBefore(a,b.nextSibling)},before:function(b){b.parentNode.insertBefore(a,b)},into:function(b){b.appendChild(a)}}},wysihtml5.dom.insertCSS=function(a){return a=a.join("\n"),{into:function(b){var c=b.createElement("style");c.type="text/css",c.styleSheet?c.styleSheet.cssText=a:c.appendChild(b.createTextNode(a));var d=b.querySelector("head link");if(d)return void d.parentNode.insertBefore(c,d);var e=b.querySelector("head");e&&e.appendChild(c)}}},function(a){a.dom.lineBreaks=function(b){function c(a){return"BR"===a.nodeName}function d(b){return c(b)?!0:"block"===a.dom.getStyle("display").from(b)?!0:!1}return{add:function(){var c=b.ownerDocument,e=a.dom.domNode(b).next({ignoreBlankTexts:!0}),f=a.dom.domNode(b).prev({ignoreBlankTexts:!0});e&&!d(e)&&a.dom.insert(c.createElement("br")).after(b),f&&!d(f)&&a.dom.insert(c.createElement("br")).before(b)},remove:function(){var d=a.dom.domNode(b).next({ignoreBlankTexts:!0}),e=a.dom.domNode(b).prev({ignoreBlankTexts:!0});d&&c(d)&&d.parentNode.removeChild(d),e&&c(e)&&e.parentNode.removeChild(e)}}}}(wysihtml5),wysihtml5.dom.observe=function(a,b,c){b="string"==typeof b?[b]:b;for(var d,e,f=0,g=b.length;g>f;f++)e=b[f],a.addEventListener?a.addEventListener(e,c,!1):(d=function(b){"target"in b||(b.target=b.srcElement),b.preventDefault=b.preventDefault||function(){this.returnValue=!1},b.stopPropagation=b.stopPropagation||function(){this.cancelBubble=!0},c.call(a,b)},a.attachEvent("on"+e,d));return{stop:function(){for(var e,f=0,g=b.length;g>f;f++)e=b[f],a.removeEventListener?a.removeEventListener(e,c,!1):a.detachEvent("on"+e,d)}}},wysihtml5.dom.parse=function(){function a(a,c){wysihtml5.lang.object(o).merge(n).merge(c.rules).get();var d,e,f,g=c.context||a.ownerDocument||document,h=g.createDocumentFragment(),i="string"==typeof a,j=!1;for(c.clearInternals===!0&&(j=!0),c.uneditableClass&&(p=c.uneditableClass),d=i?wysihtml5.dom.getAsDom(a,g):a;d.firstChild;)f=d.firstChild,e=b(f,c.cleanUp,j),e&&h.appendChild(e),f!==e&&d.removeChild(f);return d.innerHTML="",d.appendChild(h),i?wysihtml5.quirks.getCorrectInnerHTML(d):d}function b(a,c,d){var e,f,g,h=a.nodeType,i=a.childNodes,j=i.length,m=k[h],n=0;if(p&&1===h&&wysihtml5.dom.hasClass(a,p))return a;if(f=m&&m(a,d),!f){if(f===!1){for(e=a.ownerDocument.createDocumentFragment(),n=j;n--;)i[n]&&(g=b(i[n],c,d),g&&(i[n]===g&&n--,e.insertBefore(g,e.firstChild)));return wysihtml5.lang.array(["div","pre","p","table","td","th","ul","ol","li","dd","dl","footer","header","section","h1","h2","h3","h4","h5","h6"]).contains(a.nodeName.toLowerCase())&&a.parentNode.lastChild!==a&&(a.nextSibling&&3===a.nextSibling.nodeType&&/^\s/.test(a.nextSibling.nodeValue)||e.appendChild(a.ownerDocument.createTextNode(" "))),e.normalize&&e.normalize(),e}return null}for(n=0;j>n;n++)i[n]&&(g=b(i[n],c,d),g&&(i[n]===g&&n--,f.appendChild(g)));if(c&&f.nodeName.toLowerCase()===l&&(!f.childNodes.length||/^\s*$/gi.test(f.innerHTML)&&(d||"_wysihtml5-temp-placeholder"!==a.className&&"rangySelectionBoundary"!==a.className)||!f.attributes.length)){for(e=f.ownerDocument.createDocumentFragment();f.firstChild;)e.appendChild(f.firstChild);return e.normalize&&e.normalize(),e}return f.normalize&&f.normalize(),f}function c(a,b){var c,e,h=o.tags,i=a.nodeName.toLowerCase(),j=a.scopeName;if(a._wysihtml5)return null;if(a._wysihtml5=1,"wysihtml5-temp"===a.className)return null;if(j&&"HTML"!=j&&(i=j+":"+i),"outerHTML"in a&&(wysihtml5.browser.autoClosesUnclosedTags()||"P"!==a.nodeName||"</p>"===a.outerHTML.slice(-4).toLowerCase()||(i="div")),i in h){if(c=h[i],!c||c.remove)return null;if(c.unwrap)return!1;c="string"==typeof c?{rename_tag:c}:c}else{if(!a.firstChild)return null;c={rename_tag:l}}return e=a.ownerDocument.createElement(c.rename_tag||i),g(a,e,c,b),f(a,e,c),c.one_of_type&&!d(a,o,c.one_of_type,b)?c.remove_action&&"unwrap"==c.remove_action?!1:null:(a=null,e.normalize&&e.normalize(),e)}function d(a,b,c,d){var f,g;if("SPAN"===a.nodeName&&!d&&("_wysihtml5-temp-placeholder"===a.className||"rangySelectionBoundary"===a.className))return!0;for(g in c)if(c.hasOwnProperty(g)&&b.type_definitions&&b.type_definitions[g]&&(f=b.type_definitions[g],e(a,f)))return!0;return!1}function e(a,b){var c,d,e,f,g,i=a.getAttribute("class"),j=a.getAttribute("style");if(b.methods)for(var k in b.methods)if(b.methods.hasOwnProperty(k)&&v[k]&&v[k](a))return!0;if(i&&b.classes){i=i.replace(/^\s+/g,"").replace(/\s+$/g,"").split(m),c=i.length;for(var l=0;c>l;l++)if(b.classes[i[l]])return!0}if(j&&b.styles){j=j.split(";");for(d in b.styles)if(b.styles.hasOwnProperty(d))for(var n=j.length;n--;)if(g=j[n].split(":"),g[0].replace(/\s/g,"").toLowerCase()===d&&(b.styles[d]===!0||1===b.styles[d]||wysihtml5.lang.array(b.styles[d]).contains(g[1].replace(/\s/g,"").toLowerCase())))return!0}if(b.attrs)for(e in b.attrs)if(b.attrs.hasOwnProperty(e)&&(f=h(a,e),"string"==typeof f&&f.search(b.attrs[e])>-1))return!0;return!1}function f(a,b,c){var d;if(c&&c.keep_styles)for(d in c.keep_styles)c.keep_styles.hasOwnProperty(d)&&("float"==d?(a.style.styleFloat&&(b.style.styleFloat=a.style.styleFloat),a.style.cssFloat&&(b.style.cssFloat=a.style.cssFloat)):a.style[d]&&(b.style[d]=a.style[d]))}function g(a,b,c,d){var e,f,g,i,j,k,l={},n=c.set_class,p=c.add_class,q=c.add_style,r=c.set_attributes,v=c.check_attributes,w=o.classes,x=0,y=[],z=[],A=[],B=[];if(r&&(l=wysihtml5.lang.object(r).clone()),v)for(i in v)k=s[v[i]],k&&(oldAttribute=h(a,i),(oldAttribute||"alt"===i&&"IMG"==a.nodeName)&&(j=k(oldAttribute),"string"==typeof j&&(l[i]=j)));if(n&&y.push(n),p)for(i in p)k=u[p[i]],k&&(g=k(h(a,i)),"string"==typeof g&&y.push(g));if(q)for(i in q)k=t[q[i]],k&&(newStyle=k(h(a,i)),"string"==typeof newStyle&&z.push(newStyle));if("string"==typeof w&&"any"===w&&a.getAttribute("class"))l["class"]=a.getAttribute("class");else{for(d||(w["_wysihtml5-temp-placeholder"]=1,w._rangySelectionBoundary=1,w["wysiwyg-tmp-selected-cell"]=1),B=a.getAttribute("class"),B&&(y=y.concat(B.split(m))),e=y.length;e>x;x++)f=y[x],w[f]&&A.push(f);A.length&&(l["class"]=wysihtml5.lang.array(A).unique().join(" "))}l["class"]&&d&&(l["class"]=l["class"].replace("wysiwyg-tmp-selected-cell",""),/^\s*$/g.test(l["class"])&&delete l.class),z.length&&(l.style=wysihtml5.lang.array(z).unique().join(" "));for(i in l)try{b.setAttribute(i,l[i])}catch(C){}l.src&&("undefined"!=typeof l.width&&b.setAttribute("width",l.width),"undefined"!=typeof l.height&&b.setAttribute("height",l.height))}function h(a,b){b=b.toLowerCase();var c=a.nodeName;if("IMG"==c&&"src"==b&&i(a)===!0)return a.src;if(q&&"outerHTML"in a){var d=a.outerHTML.toLowerCase(),e=-1!=d.indexOf(" "+b+"=");return e?a.getAttribute(b):null}return a.getAttribute(b)}function i(a){try{return a.complete&&!a.mozMatchesSelector(":-moz-broken")}catch(b){if(a.complete&&"complete"===a.readyState)return!0}}function j(a){var b=a.nextSibling;if(!b||b.nodeType!==wysihtml5.TEXT_NODE){var c=a.data.replace(r,"");return a.ownerDocument.createTextNode(c)}b.data=a.data.replace(r,"")+b.data.replace(r,"")}var k={1:c,3:j},l="span",m=/\s+/,n={tags:{},classes:{}},o={},p=!1,q=!wysihtml5.browser.supportsGetAttributeCorrectly(),r=/\uFEFF/g,s={url:function(){var a=/^https?:\/\//i;return function(b){return b&&b.match(a)?b.replace(a,function(a){return a.toLowerCase()}):null}}(),src:function(){var a=/^(\/|https?:\/\/)/i;return function(b){return b&&b.match(a)?b.replace(a,function(a){return a.toLowerCase()}):null}}(),href:function(){var a=/^(#|\/|https?:\/\/|mailto:)/i;return function(b){return b&&b.match(a)?b.replace(a,function(a){return a.toLowerCase()}):null}}(),alt:function(){var a=/[^ a-z0-9_\-]/gi;return function(b){return b?b.replace(a,""):""}}(),numbers:function(){var a=/\D/g;return function(b){return b=(b||"").replace(a,""),b||null}}(),any:function(){return function(a){return a}}()},t={align_text:function(){var a={left:"text-align: left;",right:"text-align: right;",center:"text-align: center;"};return function(b){return a[String(b).toLowerCase()]}}()},u={align_img:function(){var a={left:"wysiwyg-float-left",right:"wysiwyg-float-right"};return function(b){return a[String(b).toLowerCase()]}}(),align_text:function(){var a={left:"wysiwyg-text-align-left",right:"wysiwyg-text-align-right",center:"wysiwyg-text-align-center",justify:"wysiwyg-text-align-justify"};return function(b){return a[String(b).toLowerCase()]}}(),clear_br:function(){var a={left:"wysiwyg-clear-left",right:"wysiwyg-clear-right",both:"wysiwyg-clear-both",all:"wysiwyg-clear-both"};return function(b){return a[String(b).toLowerCase()]}}(),size_font:function(){var a={1:"wysiwyg-font-size-xx-small",2:"wysiwyg-font-size-small",3:"wysiwyg-font-size-medium",4:"wysiwyg-font-size-large",5:"wysiwyg-font-size-x-large",6:"wysiwyg-font-size-xx-large",7:"wysiwyg-font-size-xx-large","-":"wysiwyg-font-size-smaller","+":"wysiwyg-font-size-larger"};return function(b){return a[String(b).charAt(0)]}}()},v={has_visible_contet:function(){var a,b=["img","video","picture","br","script","noscript","style","table","iframe","object","embed","audio","svg","input","button","select","textarea","canvas"];return function(c){if(a=(c.innerText||c.textContent).replace(/\s/g,""),a&&a.length>0)return!0;for(var d=b.length;d--;)if(c.querySelector(b[d]))return!0;return c.offsetWidth&&c.offsetWidth>0&&c.offsetHeight&&c.offsetHeight>0?!0:!1}}()};return a}(),wysihtml5.dom.removeEmptyTextNodes=function(a){for(var b,c=wysihtml5.lang.array(a.childNodes).get(),d=c.length,e=0;d>e;e++)b=c[e],b.nodeType===wysihtml5.TEXT_NODE&&""===b.data&&b.parentNode.removeChild(b)},wysihtml5.dom.renameElement=function(a,b){for(var c,d=a.ownerDocument.createElement(b);c=a.firstChild;)d.appendChild(c);return wysihtml5.dom.copyAttributes(["align","className"]).from(a).to(d),a.parentNode.replaceChild(d,a),d},wysihtml5.dom.replaceWithChildNodes=function(a){if(a.parentNode){if(!a.firstChild)return void a.parentNode.removeChild(a);for(var b=a.ownerDocument.createDocumentFragment();a.firstChild;)b.appendChild(a.firstChild);a.parentNode.replaceChild(b,a),a=b=null}},function(a){function b(b){return"block"===a.getStyle("display").from(b)}function c(a){return"BR"===a.nodeName}function d(a){var b=a.ownerDocument.createElement("br");a.appendChild(b)}function e(a,e){if(a.nodeName.match(/^(MENU|UL|OL)$/)){var f,g,h,i,j,k,l=a.ownerDocument,m=l.createDocumentFragment(),n=wysihtml5.dom.domNode(a).prev({ignoreBlankTexts:!0});if(e)for(!n||b(n)||c(n)||d(m);k=a.firstElementChild||a.firstChild;){for(g=k.lastChild;f=k.firstChild;)h=f===g,i=h&&!b(f)&&!c(f),m.appendChild(f),i&&d(m);k.parentNode.removeChild(k)}else for(;k=a.firstElementChild||a.firstChild;){if(k.querySelector&&k.querySelector("div, p, ul, ol, menu, blockquote, h1, h2, h3, h4, h5, h6"))for(;f=k.firstChild;)m.appendChild(f);else{for(j=l.createElement("p");f=k.firstChild;)j.appendChild(f);m.appendChild(j)}k.parentNode.removeChild(k)}a.parentNode.replaceChild(m,a)}}a.resolveList=e}(wysihtml5.dom),function(a){var b=document,c=["parent","top","opener","frameElement","frames","localStorage","globalStorage","sessionStorage","indexedDB"],d=["open","close","openDialog","showModalDialog","alert","confirm","prompt","openDatabase","postMessage","XMLHttpRequest","XDomainRequest"],e=["referrer","write","open","close"];a.dom.Sandbox=Base.extend({constructor:function(b,c){this.callback=b||a.EMPTY_FUNCTION,this.config=a.lang.object({}).merge(c).get(),this.editableArea=this._createIframe()},insertInto:function(a){"string"==typeof a&&(a=b.getElementById(a)),a.appendChild(this.editableArea)},getIframe:function(){return this.editableArea},getWindow:function(){this._readyError()},getDocument:function(){this._readyError()},destroy:function(){var a=this.getIframe();a.parentNode.removeChild(a)},_readyError:function(){throw new Error("wysihtml5.Sandbox: Sandbox iframe isn't loaded yet")},_createIframe:function(){var c=this,d=b.createElement("iframe");return d.className="wysihtml5-sandbox",a.dom.setAttributes({security:"restricted",allowtransparency:"true",frameborder:0,width:0,height:0,marginwidth:0,marginheight:0}).on(d),a.browser.throwsMixedContentWarningWhenIframeSrcIsEmpty()&&(d.src="javascript:'<html></html>'"),d.onload=function(){d.onreadystatechange=d.onload=null,c._onLoadIframe(d)},d.onreadystatechange=function(){/loaded|complete/.test(d.readyState)&&(d.onreadystatechange=d.onload=null,c._onLoadIframe(d))},d},_onLoadIframe:function(f){if(a.dom.contains(b.documentElement,f)){var g=this,h=f.contentWindow,i=f.contentWindow.document,j=b.characterSet||b.charset||"utf-8",k=this._getHtml({charset:j,stylesheets:this.config.stylesheets});if(i.open("text/html","replace"),i.write(k),i.close(),this.getWindow=function(){return f.contentWindow},this.getDocument=function(){return f.contentWindow.document},h.onerror=function(a,b,c){throw new Error("wysihtml5.Sandbox: "+a,b,c)},!a.browser.supportsSandboxedIframes()){var l,m;for(l=0,m=c.length;m>l;l++)this._unset(h,c[l]);for(l=0,m=d.length;m>l;l++)this._unset(h,d[l],a.EMPTY_FUNCTION);for(l=0,m=e.length;m>l;l++)this._unset(i,e[l]);this._unset(i,"cookie","",!0)}this.loaded=!0,setTimeout(function(){g.callback(g)},0)}},_getHtml:function(b){var c,d=b.stylesheets,e="",f=0;if(d="string"==typeof d?[d]:d)for(c=d.length;c>f;f++)e+='<link rel="stylesheet" href="'+d[f]+'">';return b.stylesheets=e,a.lang.string('<!DOCTYPE html><html><head><meta charset="#{charset}">#{stylesheets}</head><body></body></html>').interpolate(b)},_unset:function(b,c,d,e){try{b[c]=d}catch(f){}try{b.__defineGetter__(c,function(){return d})}catch(f){}if(e)try{b.__defineSetter__(c,function(){})}catch(f){}if(!a.browser.crashesWhenDefineProperty(c))try{var g={get:function(){return d}};e&&(g.set=function(){}),Object.defineProperty(b,c,g)}catch(f){}}})}(wysihtml5),function(a){var b=document;a.dom.ContentEditableArea=Base.extend({getContentEditable:function(){return this.element},getWindow:function(){return this.element.ownerDocument.defaultView},getDocument:function(){return this.element.ownerDocument},constructor:function(b,c,d){this.callback=b||a.EMPTY_FUNCTION,this.config=a.lang.object({}).merge(c).get(),this.element=d?this._bindElement(d):this._createElement()},_createElement:function(){var a=b.createElement("div");return a.className="wysihtml5-sandbox",this._loadElement(a),a},_bindElement:function(a){return a.className=a.className&&""!=a.className?a.className+" wysihtml5-sandbox":"wysihtml5-sandbox",this._loadElement(a,!0),a},_loadElement:function(a,b){var c=this;if(!b){var d=this._getHtml();a.innerHTML=d}this.getWindow=function(){return a.ownerDocument.defaultView},this.getDocument=function(){return a.ownerDocument},this.loaded=!0,setTimeout(function(){c.callback(c)},0)},_getHtml:function(){return""}})}(wysihtml5),function(){var a={className:"class"};wysihtml5.dom.setAttributes=function(b){return{on:function(c){for(var d in b)c.setAttribute(a[d]||d,b[d])}}}}(),wysihtml5.dom.setStyles=function(a){return{on:function(b){var c=b.style;if("string"==typeof a)return void(c.cssText+=";"+a);for(var d in a)"float"===d?(c.cssFloat=a[d],c.styleFloat=a[d]):c[d]=a[d]}}},function(a){a.simulatePlaceholder=function(b,c,d){var e="placeholder",f=function(){c.hasPlaceholderSet()&&c.clear(),c.placeholderSet=!1,a.removeClass(c.element,e)},g=function(){c.isEmpty()&&(c.placeholderSet=!0,c.setValue(d),a.addClass(c.element,e))};b.on("set_placeholder",g).on("unset_placeholder",f).on("focus:composer",f).on("paste:composer",f).on("blur:composer",g),g()}}(wysihtml5.dom),function(a){var b=document.documentElement;"textContent"in b?(a.setTextContent=function(a,b){a.textContent=b},a.getTextContent=function(a){return a.textContent}):"innerText"in b?(a.setTextContent=function(a,b){a.innerText=b},a.getTextContent=function(a){return a.innerText}):(a.setTextContent=function(a,b){a.nodeValue=b},a.getTextContent=function(a){return a.nodeValue})}(wysihtml5.dom),wysihtml5.dom.getAttribute=function(a,b){var c=!wysihtml5.browser.supportsGetAttributeCorrectly();b=b.toLowerCase();var d=a.nodeName;if("IMG"==d&&"src"==b&&_isLoadedImage(a)===!0)return a.src;if(c&&"outerHTML"in a){var e=a.outerHTML.toLowerCase(),f=-1!=e.indexOf(" "+b+"=");return f?a.getAttribute(b):null}return a.getAttribute(b)},function(a){function b(a,b){for(var c,d=[],e=0,f=a.length;f>e;e++)if(c=a[e].querySelectorAll(b))for(var g=c.length;g--;d.unshift(c[g]));return d}function d(a){a.parentNode.removeChild(a)}function e(a,b){a.parentNode.insertBefore(b,a.nextSibling)}function f(a,b){for(var c=a.nextSibling;1!=c.nodeType;)if(c=c.nextSibling,!b||b==c.tagName.toLowerCase())return c;return null}var g=a.dom,h=function(a){this.el=a,this.isColspan=!1,this.isRowspan=!1,this.firstCol=!0,this.lastCol=!0,this.firstRow=!0,this.lastRow=!0,this.isReal=!0,this.spanCollection=[],this.modified=!1},i=function(a,b){a?(this.cell=a,this.table=g.getParentElement(a,{nodeName:["TABLE"]})):b&&(this.table=b,this.cell=this.table.querySelectorAll("th, td")[0])};i.prototype={addSpannedCellToMap:function(a,b,c,d,e,f){for(var g=[],i=c+(f?parseInt(f,10)-1:0),j=d+(e?parseInt(e,10)-1:0),k=c;i>=k;k++){"undefined"==typeof b[k]&&(b[k]=[]);for(var l=d;j>=l;l++)b[k][l]=new h(a),b[k][l].isColspan=e&&parseInt(e,10)>1,b[k][l].isRowspan=f&&parseInt(f,10)>1,b[k][l].firstCol=l==d,b[k][l].lastCol=l==j,b[k][l].firstRow=k==c,b[k][l].lastRow=k==i,b[k][l].isReal=l==d&&k==c,b[k][l].spanCollection=g,g.push(b[k][l])}},setCellAsModified:function(a){if(a.modified=!0,a.spanCollection.length>0)for(var b=0,c=a.spanCollection.length;c>b;b++)a.spanCollection[b].modified=!0},setTableMap:function(){var a,b,c,d,e,f,i,j,k=[],l=this.getTableRows();for(a=0;a<l.length;a++)for(b=l[a],c=this.getRowCells(b),f=0,"undefined"==typeof k[a]&&(k[a]=[]),d=0;d<c.length;d++){for(e=c[d];"undefined"!=typeof k[a][f];)f++;i=g.getAttribute(e,"colspan"),j=g.getAttribute(e,"rowspan"),i||j?(this.addSpannedCellToMap(e,k,a,f,i,j),f+=i?parseInt(i,10):1):(k[a][f]=new h(e),f++)}return this.map=k,k},getRowCells:function(c){var d=this.table.querySelectorAll("table"),e=d?b(d,"th, td"):[],f=c.querySelectorAll("th, td"),g=e.length>0?a.lang.array(f).without(e):f;return g},getTableRows:function(){var c=this.table.querySelectorAll("table"),d=c?b(c,"tr"):[],e=this.table.querySelectorAll("tr"),f=d.length>0?a.lang.array(e).without(d):e;return f},getMapIndex:function(a){for(var b=this.map.length,c=this.map&&this.map[0]?this.map[0].length:0,d=0;b>d;d++)for(var e=0;c>e;e++)if(this.map[d][e].el===a)return{row:d,col:e};return!1},getElementAtIndex:function(a){return this.setTableMap(),this.map[a.row]&&this.map[a.row][a.col]&&this.map[a.row][a.col].el?this.map[a.row][a.col].el:null},getMapElsTo:function(a){var b=[];if(this.setTableMap(),this.idx_start=this.getMapIndex(this.cell),this.idx_end=this.getMapIndex(a),this.idx_start.row>this.idx_end.row||this.idx_start.row==this.idx_end.row&&this.idx_start.col>this.idx_end.col){var c=this.idx_start;this.idx_start=this.idx_end,this.idx_end=c}if(this.idx_start.col>this.idx_end.col){var d=this.idx_start.col;this.idx_start.col=this.idx_end.col,this.idx_end.col=d}if(null!=this.idx_start&&null!=this.idx_end)for(var e=this.idx_start.row,f=this.idx_end.row;f>=e;e++)for(var g=this.idx_start.col,h=this.idx_end.col;h>=g;g++)b.push(this.map[e][g].el);return b},orderSelectionEnds:function(a){if(this.setTableMap(),this.idx_start=this.getMapIndex(this.cell),this.idx_end=this.getMapIndex(a),this.idx_start.row>this.idx_end.row||this.idx_start.row==this.idx_end.row&&this.idx_start.col>this.idx_end.col){var b=this.idx_start;this.idx_start=this.idx_end,this.idx_end=b}if(this.idx_start.col>this.idx_end.col){var c=this.idx_start.col;this.idx_start.col=this.idx_end.col,this.idx_end.col=c}return{start:this.map[this.idx_start.row][this.idx_start.col].el,end:this.map[this.idx_end.row][this.idx_end.col].el}},createCells:function(a,b,c){for(var d,e=this.table.ownerDocument,f=e.createDocumentFragment(),g=0;b>g;g++){if(d=e.createElement(a),c)for(var h in c)c.hasOwnProperty(h)&&d.setAttribute(h,c[h]);d.appendChild(document.createTextNode(" ")),f.appendChild(d)}return f},correctColIndexForUnreals:function(a,b){for(var c=this.map[b],d=-1,e=0;a>e;e++)c[e].isReal&&d++;return d},getLastNewCellOnRow:function(a,b){for(var c,d,e=this.getRowCells(a),f=0,g=e.length;g>f;f++)if(c=e[f],d=this.getMapIndex(c),d===!1||"undefined"!=typeof b&&d.row!=b)return c;return null},removeEmptyTable:function(){var a=this.table.querySelectorAll("td, th");return a&&0!=a.length?!1:(d(this.table),!0)},splitRowToCells:function(a){if(a.isColspan){var b=parseInt(g.getAttribute(a.el,"colspan")||1,10),c=a.el.tagName.toLowerCase();if(b>1){var d=this.createCells(c,b-1);e(a.el,d)}a.el.removeAttribute("colspan")}},getRealRowEl:function(a,b){var c=null,d=null;b=b||this.idx;for(var e=0,f=this.map[b.row].length;f>e;e++)if(d=this.map[b.row][e],d.isReal&&(c=g.getParentElement(d.el,{nodeName:["TR"]})))return c;return null===c&&a&&(c=g.getParentElement(this.map[b.row][b.col].el,{nodeName:["TR"]})||null),c},injectRowAt:function(a,b,c,d,f){var h=this.getRealRowEl(!1,{row:a,col:b}),i=this.createCells(d,c);if(h){var j=this.correctColIndexForUnreals(b,a);j>=0?e(this.getRowCells(h)[j],i):h.insertBefore(i,h.firstChild)}else{var k=this.table.ownerDocument.createElement("tr");k.appendChild(i),e(g.getParentElement(f.el,{nodeName:["TR"]}),k)}},canMerge:function(a){if(this.to=a,this.setTableMap(),this.idx_start=this.getMapIndex(this.cell),this.idx_end=this.getMapIndex(this.to),this.idx_start.row>this.idx_end.row||this.idx_start.row==this.idx_end.row&&this.idx_start.col>this.idx_end.col){var b=this.idx_start;this.idx_start=this.idx_end,this.idx_end=b}if(this.idx_start.col>this.idx_end.col){var c=this.idx_start.col;this.idx_start.col=this.idx_end.col,this.idx_end.col=c}for(var d=this.idx_start.row,e=this.idx_end.row;e>=d;d++)for(var f=this.idx_start.col,g=this.idx_end.col;g>=f;f++)if(this.map[d][f].isColspan||this.map[d][f].isRowspan)return!1;return!0},decreaseCellSpan:function(a,b){var c=parseInt(g.getAttribute(a.el,b),10)-1;c>=1?a.el.setAttribute(b,c):(a.el.removeAttribute(b),"colspan"==b&&(a.isColspan=!1),"rowspan"==b&&(a.isRowspan=!1),a.firstCol=!0,a.lastCol=!0,a.firstRow=!0,a.lastRow=!0,a.isReal=!0)},removeSurplusLines:function(){var a,b,c,e,f,h,i;if(this.setTableMap(),this.map){for(c=0,e=this.map.length;e>c;c++){for(a=this.map[c],i=!0,f=0,h=a.length;h>f;f++)if(b=a[f],!(g.getAttribute(b.el,"rowspan")&&parseInt(g.getAttribute(b.el,"rowspan"),10)>1&&b.firstRow!==!0)){i=!1;break}if(i)for(f=0;h>f;f++)this.decreaseCellSpan(a[f],"rowspan")}var j=this.getTableRows();for(c=0,e=j.length;e>c;c++)a=j[c],0==a.childNodes.length&&/^\s*$/.test(a.textContent||a.innerText)&&d(a)}},fillMissingCells:function(){var a=0,b=0,c=null;if(this.setTableMap(),this.map){a=this.map.length;for(var d=0;a>d;d++)this.map[d].length>b&&(b=this.map[d].length);for(var f=0;a>f;f++)for(var g=0;b>g;g++)this.map[f]&&!this.map[f][g]&&g>0&&(this.map[f][g]=new h(this.createCells("td",1)),c=this.map[f][g-1],c&&c.el&&c.el.parent&&e(this.map[f][g-1].el,this.map[f][g].el))}},rectify:function(){return this.removeEmptyTable()?!1:(this.removeSurplusLines(),this.fillMissingCells(),!0)},unmerge:function(){if(this.rectify()&&(this.setTableMap(),this.idx=this.getMapIndex(this.cell),this.idx)){var a=this.map[this.idx.row][this.idx.col],b=g.getAttribute(a.el,"colspan")?parseInt(g.getAttribute(a.el,"colspan"),10):1,c=a.el.tagName.toLowerCase();if(a.isRowspan){var d=parseInt(g.getAttribute(a.el,"rowspan"),10);if(d>1)for(var e=1,f=d-1;f>=e;e++)this.injectRowAt(this.idx.row+e,this.idx.col,b,c,a);a.el.removeAttribute("rowspan")}this.splitRowToCells(a)}},merge:function(a){if(this.rectify())if(this.canMerge(a)){for(var b=this.idx_end.row-this.idx_start.row+1,c=this.idx_end.col-this.idx_start.col+1,e=this.idx_start.row,f=this.idx_end.row;f>=e;e++)for(var g=this.idx_start.col,h=this.idx_end.col;h>=g;g++)e==this.idx_start.row&&g==this.idx_start.col?(b>1&&this.map[e][g].el.setAttribute("rowspan",b),c>1&&this.map[e][g].el.setAttribute("colspan",c)):(/^\s*<br\/?>\s*$/.test(this.map[e][g].el.innerHTML.toLowerCase())||(this.map[this.idx_start.row][this.idx_start.col].el.innerHTML+=" "+this.map[e][g].el.innerHTML),d(this.map[e][g].el));this.rectify()}else window.console},collapseCellToNextRow:function(a){var b=this.getMapIndex(a.el),c=b.row+1,d={row:c,col:b.col};if(c<this.map.length){var f=this.getRealRowEl(!1,d);if(null!==f){var h=this.correctColIndexForUnreals(d.col,d.row);if(h>=0)e(this.getRowCells(f)[h],a.el);else{var i=this.getLastNewCellOnRow(f,c);null!==i?e(i,a.el):f.insertBefore(a.el,f.firstChild)}parseInt(g.getAttribute(a.el,"rowspan"),10)>2?a.el.setAttribute("rowspan",parseInt(g.getAttribute(a.el,"rowspan"),10)-1):a.el.removeAttribute("rowspan")}}},removeRowCell:function(a){a.isReal?a.isRowspan?this.collapseCellToNextRow(a):d(a.el):parseInt(g.getAttribute(a.el,"rowspan"),10)>2?a.el.setAttribute("rowspan",parseInt(g.getAttribute(a.el,"rowspan"),10)-1):a.el.removeAttribute("rowspan")},getRowElementsByCell:function(){var a=[];if(this.setTableMap(),this.idx=this.getMapIndex(this.cell),this.idx!==!1)for(var b=this.map[this.idx.row],c=0,d=b.length;d>c;c++)b[c].isReal&&a.push(b[c].el);return a},getColumnElementsByCell:function(){var a=[];if(this.setTableMap(),this.idx=this.getMapIndex(this.cell),this.idx!==!1)for(var b=0,c=this.map.length;c>b;b++)this.map[b][this.idx.col]&&this.map[b][this.idx.col].isReal&&a.push(this.map[b][this.idx.col].el);return a},removeRow:function(){var a=g.getParentElement(this.cell,{nodeName:["TR"]});if(a){if(this.setTableMap(),this.idx=this.getMapIndex(this.cell),this.idx!==!1)for(var b=this.map[this.idx.row],c=0,e=b.length;e>c;c++)b[c].modified||(this.setCellAsModified(b[c]),this.removeRowCell(b[c]));d(a)}},removeColCell:function(a){a.isColspan?parseInt(g.getAttribute(a.el,"colspan"),10)>2?a.el.setAttribute("colspan",parseInt(g.getAttribute(a.el,"colspan"),10)-1):a.el.removeAttribute("colspan"):a.isReal&&d(a.el)},removeColumn:function(){if(this.setTableMap(),this.idx=this.getMapIndex(this.cell),this.idx!==!1)for(var a=0,b=this.map.length;b>a;a++)this.map[a][this.idx.col].modified||(this.setCellAsModified(this.map[a][this.idx.col]),this.removeColCell(this.map[a][this.idx.col]))},remove:function(a){if(this.rectify()){switch(a){case"row":this.removeRow();break;case"column":this.removeColumn()}this.rectify()}},addRow:function(a){var b=this.table.ownerDocument;if(this.setTableMap(),this.idx=this.getMapIndex(this.cell),"below"==a&&g.getAttribute(this.cell,"rowspan")&&(this.idx.row=this.idx.row+parseInt(g.getAttribute(this.cell,"rowspan"),10)-1),this.idx!==!1){for(var c=this.map[this.idx.row],d=b.createElement("tr"),f=0,h=c.length;h>f;f++)c[f].modified||(this.setCellAsModified(c[f]),this.addRowCell(c[f],d,a));switch(a){case"below":e(this.getRealRowEl(!0),d);break;case"above":var i=g.getParentElement(this.map[this.idx.row][this.idx.col].el,{nodeName:["TR"]});i&&i.parentNode.insertBefore(d,i)}}},addRowCell:function(a,b,d){var e=a.isColspan?{colspan:g.getAttribute(a.el,"colspan")}:null;a.isReal?"above"!=d&&a.isRowspan?a.el.setAttribute("rowspan",parseInt(g.getAttribute(a.el,"rowspan"),10)+1):b.appendChild(this.createCells("td",1,e)):"above"!=d&&a.isRowspan&&a.lastRow?b.appendChild(this.createCells("td",1,e)):c.isRowspan&&a.el.attr("rowspan",parseInt(g.getAttribute(a.el,"rowspan"),10)+1)},add:function(a){this.rectify()&&(("below"==a||"above"==a)&&this.addRow(a),("before"==a||"after"==a)&&this.addColumn(a))},addColCell:function(a,b,d){var f,h=a.el.tagName.toLowerCase();switch(d){case"before":f=!a.isColspan||a.firstCol;break;case"after":f=!a.isColspan||a.lastCol||a.isColspan&&c.el==this.cell}if(f){switch(d){case"before":a.el.parentNode.insertBefore(this.createCells(h,1),a.el);break;case"after":e(a.el,this.createCells(h,1))}a.isRowspan&&this.handleCellAddWithRowspan(a,b+1,d)}else a.el.setAttribute("colspan",parseInt(g.getAttribute(a.el,"colspan"),10)+1)},addColumn:function(a){var b,c;if(this.setTableMap(),this.idx=this.getMapIndex(this.cell),"after"==a&&g.getAttribute(this.cell,"colspan")&&(this.idx.col=this.idx.col+parseInt(g.getAttribute(this.cell,"colspan"),10)-1),this.idx!==!1)for(var d=0,e=this.map.length;e>d;d++)b=this.map[d],b[this.idx.col]&&(c=b[this.idx.col],c.modified||(this.setCellAsModified(c),this.addColCell(c,d,a)))},handleCellAddWithRowspan:function(a,b,c){for(var d,h,i,j=parseInt(g.getAttribute(this.cell,"rowspan"),10)-1,k=g.getParentElement(a.el,{nodeName:["TR"]}),l=a.el.tagName.toLowerCase(),m=this.table.ownerDocument,n=0;j>n;n++)if(d=this.correctColIndexForUnreals(this.idx.col,b+n),k=f(k,"tr"))if(d>0)switch(c){case"before":h=this.getRowCells(k),d>0&&this.map[b+n][this.idx.col].el!=h[d]&&d==h.length-1?e(h[d],this.createCells(l,1)):h[d].parentNode.insertBefore(this.createCells(l,1),h[d]);break;case"after":e(this.getRowCells(k)[d],this.createCells(l,1))}else k.insertBefore(this.createCells(l,1),k.firstChild);else i=m.createElement("tr"),i.appendChild(this.createCells(l,1)),this.table.appendChild(i)}},g.table={getCellsBetween:function(a,b){var c=new i(a);return c.getMapElsTo(b)},addCells:function(a,b){var c=new i(a);c.add(b)},removeCells:function(a,b){var c=new i(a);c.remove(b)},mergeCellsBetween:function(a,b){var c=new i(a);c.merge(b)},unmergeCell:function(a){var b=new i(a);b.unmerge()},orderSelectionEnds:function(a,b){var c=new i(a);return c.orderSelectionEnds(b)},indexOf:function(a){var b=new i(a);return b.setTableMap(),b.getMapIndex(a)},findCell:function(a,b){var c=new i(null,a);return c.getElementAtIndex(b)},findRowByCell:function(a){var b=new i(a);return b.getRowElementsByCell()},findColumnByCell:function(a){var b=new i(a);return b.getColumnElementsByCell()},canMerge:function(a,b){var c=new i(a);return c.canMerge(b)}}}(wysihtml5),wysihtml5.dom.query=function(a,b){var c,d=[];a.nodeType&&(a=[a]);for(var e=0,f=a.length;f>e;e++)if(c=a[e].querySelectorAll(b))for(var g=c.length;g--;d.unshift(c[g]));return d},wysihtml5.dom.compareDocumentPosition=function(){var a=document.documentElement;return a.compareDocumentPosition?function(a,b){return a.compareDocumentPosition(b)}:function(a,b){var c,d;if(c=9===a.nodeType?a:a.ownerDocument,d=9===b.nodeType?b:b.ownerDocument,a===b)return 0;if(a===b.ownerDocument)return 20;if(a.ownerDocument===b)return 10;if(c!==d)return 1;if(2===a.nodeType&&a.childNodes&&-1!==wysihtml5.lang.array(a.childNodes).indexOf(b))return 20;if(2===b.nodeType&&b.childNodes&&-1!==wysihtml5.lang.array(b.childNodes).indexOf(a))return 10;for(var e=a,f=[],g=null;e;){if(e==b)return 10;f.push(e),e=e.parentNode}for(e=b,g=null;e;){if(e==a)return 20;var h=wysihtml5.lang.array(f).indexOf(e);if(-1!==h){var i=f[h],j=wysihtml5.lang.array(i.childNodes).indexOf(f[h-1]),k=wysihtml5.lang.array(i.childNodes).indexOf(g);return j>k?2:4}g=e,e=e.parentNode}return 1}}(),wysihtml5.dom.unwrap=function(a){if(a.parentNode){for(;a.lastChild;)wysihtml5.dom.insert(a.lastChild).after(a);a.parentNode.removeChild(a)}},wysihtml5.quirks.cleanPastedHTML=function(){function a(a,c,d){c=c||b,d=d||a.ownerDocument||document;var e,f,g,h,i,j,k="string"==typeof a,l=0;e=k?wysihtml5.dom.getAsDom(a,d):a;for(i in c)for(g=e.querySelectorAll(i),f=c[i],h=g.length;h>l;l++)f(g[l]);var m=wysihtml5.dom.getTextNodes(e);for(j=m.length;j--;)m[j].nodeValue=m[j].nodeValue.replace(/([\S\u00A0])\u00A0/gi,"$1 ");return g=a=c=null,k?e.innerHTML:e}var b={"a u":wysihtml5.dom.replaceWithChildNodes};return a}(),wysihtml5.quirks.ensureProperClearing=function(){var a=function(){var a=this;setTimeout(function(){var b=a.innerHTML.toLowerCase();("<p>&nbsp;</p>"==b||"<p>&nbsp;</p><p>&nbsp;</p>"==b)&&(a.innerHTML="")
},0)};return function(b){wysihtml5.dom.observe(b.element,["cut","keydown"],a)}}(),function(a){var b="%7E";a.quirks.getCorrectInnerHTML=function(c){var d=c.innerHTML;if(-1===d.indexOf(b))return d;var e,f,g,h,i=c.querySelectorAll("[href*='~'], [src*='~']");for(h=0,g=i.length;g>h;h++)e=i[h].href||i[h].src,f=a.lang.string(e).replace("~").by(b),d=a.lang.string(d).replace(f).by(e);return d}}(wysihtml5),function(a){var b="wysihtml5-quirks-redraw";a.quirks.redraw=function(c){a.dom.addClass(c,b),a.dom.removeClass(c,b);try{var d=c.ownerDocument;d.execCommand("italic",!1,null),d.execCommand("italic",!1,null)}catch(e){}}}(wysihtml5),wysihtml5.quirks.tableCellsSelection=function(a,b){function c(){return k.observe(a,"mousedown",function(a){var b=wysihtml5.dom.getParentElement(a.target,{nodeName:["TD","TH"]});b&&d(b)}),l}function d(c){l.start=c,l.end=c,l.cells=[c],l.table=k.getParentElement(l.start,{nodeName:["TABLE"]}),l.table&&(e(),k.addClass(c,m),n=k.observe(a,"mousemove",g),o=k.observe(a,"mouseup",h),b.fire("tableselectstart").fire("tableselectstart:composer"))}function e(){if(a){var b=a.querySelectorAll("."+m);if(b.length>0)for(var c=0;c<b.length;c++)k.removeClass(b[c],m)}}function f(a){for(var b=0;b<a.length;b++)k.addClass(a[b],m)}function g(a){var c,d=null,g=k.getParentElement(a.target,{nodeName:["TD","TH"]});g&&l.table&&l.start&&(d=k.getParentElement(g,{nodeName:["TABLE"]}),d&&d===l.table&&(e(),c=l.end,l.end=g,l.cells=k.table.getCellsBetween(l.start,g),l.cells.length>1&&b.composer.selection.deselect(),f(l.cells),l.end!==c&&b.fire("tableselectchange").fire("tableselectchange:composer")))}function h(){n.stop(),o.stop(),b.fire("tableselect").fire("tableselect:composer"),setTimeout(function(){i()},0)}function i(){var c=k.observe(a.ownerDocument,"click",function(a){c.stop(),k.getParentElement(a.target,{nodeName:["TABLE"]})!=l.table&&(e(),l.table=null,l.start=null,l.end=null,b.fire("tableunselect").fire("tableunselect:composer"))})}function j(a,c){l.start=a,l.end=c,l.table=k.getParentElement(l.start,{nodeName:["TABLE"]}),selectedCells=k.table.getCellsBetween(l.start,l.end),f(selectedCells),i(),b.fire("tableselect").fire("tableselect:composer")}var k=wysihtml5.dom,l={table:null,start:null,end:null,cells:null,select:j},m="wysiwyg-tmp-selected-cell",n=null,o=null;return c()},function(a){var b=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([\d\.]+)\s*\)/i,c=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/i,d=/^#([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])/i,e=/^#([0-9a-f])([0-9a-f])([0-9a-f])/i,f=function(a){return new RegExp("(^|\\s|;)"+a+"\\s*:\\s*[^;$]+","gi")};a.quirks.styleParser={parseColor:function(g,h){var i,j,k=f(h),l=g.match(k),m=10;if(l){for(var n=l.length;n--;)l[n]=a.lang.string(l[n].split(":")[1]).trim();if(i=l[l.length-1],b.test(i))j=i.match(b);else if(c.test(i))j=i.match(c);else if(d.test(i))j=i.match(d),m=16;else if(e.test(i))return j=i.match(e),j.shift(),j.push(1),a.lang.array(j).map(function(a,b){return 3>b?16*parseInt(a,16)+parseInt(a,16):parseFloat(a)});if(j)return j.shift(),j[3]||j.push(1),a.lang.array(j).map(function(a,b){return 3>b?parseInt(a,m):parseFloat(a)})}return!1},unparseColor:function(a,b){if(b){if("hex"==b)return a[0].toString(16).toUpperCase()+a[1].toString(16).toUpperCase()+a[2].toString(16).toUpperCase();if("hash"==b)return"#"+a[0].toString(16).toUpperCase()+a[1].toString(16).toUpperCase()+a[2].toString(16).toUpperCase();if("rgb"==b)return"rgb("+a[0]+","+a[1]+","+a[2]+")";if("rgba"==b)return"rgba("+a[0]+","+a[1]+","+a[2]+","+a[3]+")";if("csv"==b)return a[0]+","+a[1]+","+a[2]+","+a[3]}return a[3]&&1!==a[3]?"rgba("+a[0]+","+a[1]+","+a[2]+","+a[3]+")":"rgb("+a[0]+","+a[1]+","+a[2]+")"},parseFontSize:function(b){var c=b.match(f("font-size"));return c?a.lang.string(c[c.length-1].split(":")[1]).trim():!1}}}(wysihtml5),function(a){function b(a){var b=0;if(a.parentNode)do b+=a.offsetTop||0,a=a.offsetParent;while(a);return b}function c(a,b){for(var c=0;b!==a;)if(c++,b=b.parentNode,!b)throw new Error("not a descendant of ancestor!");return c}function d(a){if(!a.canSurroundContents())for(var b=a.commonAncestorContainer,d=c(b,a.startContainer),e=c(b,a.endContainer);!a.canSurroundContents();)d>e?(a.setStartBefore(a.startContainer),d=c(b,a.startContainer)):(a.setEndAfter(a.endContainer),e=c(b,a.endContainer))}var e=a.dom;a.Selection=Base.extend({constructor:function(a,b,c){window.rangy.init(),this.editor=a,this.composer=a.composer,this.doc=this.composer.doc,this.contain=b,this.unselectableClass=c||!1},getBookmark:function(){var a=this.getRange();return a&&d(a),a&&a.cloneRange()},setBookmark:function(a){a&&this.setSelection(a)},setBefore:function(a){var b=rangy.createRange(this.doc);return b.setStartBefore(a),b.setEndBefore(a),this.setSelection(b)},setAfter:function(a){var b=rangy.createRange(this.doc);return b.setStartAfter(a),b.setEndAfter(a),this.setSelection(b)},selectNode:function(b,c){var d=rangy.createRange(this.doc),f=b.nodeType===a.ELEMENT_NODE,g="canHaveHTML"in b?b.canHaveHTML:"IMG"!==b.nodeName,h=f?b.innerHTML:b.data,i=""===h||h===a.INVISIBLE_SPACE,j=e.getStyle("display").from(b),k="block"===j||"list-item"===j;if(i&&f&&g&&!c)try{b.innerHTML=a.INVISIBLE_SPACE}catch(l){}g?d.selectNodeContents(b):d.selectNode(b),g&&i&&f?d.collapse(k):g&&i&&(d.setStartAfter(b),d.setEndAfter(b)),this.setSelection(d)},getSelectedNode:function(a){var b,c;return a&&this.doc.selection&&"Control"===this.doc.selection.type&&(c=this.doc.selection.createRange(),c&&c.length)?c.item(0):(b=this.getSelection(this.doc),b.focusNode===b.anchorNode?b.focusNode:(c=this.getRange(this.doc),c?c.commonAncestorContainer:this.doc.body))},getSelectedOwnNodes:function(){for(var a=this.getOwnRanges(),b=[],c=0,d=a.length;d>c;c++)b.push(a[c].commonAncestorContainer||this.doc.body);return b},findNodesInSelection:function(b){for(var c,d=this.getOwnRanges(),e=[],f=0,g=d.length;g>f;f++)c=d[f].getNodes([1],function(c){return a.lang.array(b).contains(c.nodeName)}),e=e.concat(c);return e},containsUneditable:function(){for(var a=this.getOwnUneditables(),b=this.getSelection(),c=0,d=a.length;d>c;c++)if(b.containsNode(a[c]))return!0;return!1},deleteContents:function(){for(var a=this.getOwnRanges(),b=a.length;b--;)a[b].deleteContents();this.setSelection(a[0])},getPreviousNode:function(b,c){if(!b){var d=this.getSelection();b=d.anchorNode}if(b===this.contain)return!1;var e,f=b.previousSibling;return f===this.contain?!1:(f&&3!==f.nodeType&&1!==f.nodeType?f=this.getPreviousNode(f,c):f&&3===f.nodeType&&/^\s*$/.test(f.textContent)?f=this.getPreviousNode(f,c):c&&f&&1===f.nodeType&&!a.lang.array(["BR","HR","IMG"]).contains(f.nodeName)&&/^[\s]*$/.test(f.innerHTML)?f=this.getPreviousNode(f,c):f||b===this.contain||(e=b.parentNode,e!==this.contain&&(f=this.getPreviousNode(e,c))),f!==this.contain?f:!1)},getSelectionParentsByTag:function(){for(var b,c=this.getSelectedOwnNodes(),d=[],e=0,f=c.length;f>e;e++)b=c[e].nodeName&&"LI"===c[e].nodeName?c[e]:a.dom.getParentElement(c[e],{nodeName:["LI"]},!1,this.contain),b&&d.push(b);return d.length?d:null},getRangeToNodeEnd:function(){if(this.isCollapsed()){var a=this.getRange(),b=a.startContainer,c=a.startOffset,d=rangy.createRange(this.doc);return d.selectNodeContents(b),d.setStart(b,c),d}},caretIsLastInSelection:function(){var a=(rangy.createRange(this.doc),this.getSelection(),this.getRangeToNodeEnd().cloneContents()),b=a.textContent;return/^\s*$/.test(b)},caretIsFirstInSelection:function(){var a=rangy.createRange(this.doc),b=this.getSelection();return a.selectNodeContents(this.getRange().commonAncestorContainer),a.collapse(!0),this.isCollapsed()&&(a.startContainer===b.anchorNode||a.endContainer===b.anchorNode)&&a.startOffset===b.anchorOffset},caretIsInTheBeginnig:function(b){var c=this.getSelection(),d=c.anchorNode,e=c.anchorOffset;return b?0===e&&(d.nodeName&&d.nodeName===b.toUpperCase()||a.dom.getParentElement(d.parentNode,{nodeName:b},1)):0===e&&!this.getPreviousNode(d,!0)},caretIsBeforeUneditable:function(){var a=this.getSelection(),b=a.anchorNode,c=a.anchorOffset;if(0===c){var d=this.getPreviousNode(b,!0);if(d)for(var e=this.getOwnUneditables(),f=0,g=e.length;g>f;f++)if(d===e[f])return e[f]}return!1},executeAndRestoreRangy:function(a){var b=this.doc.defaultView||this.doc.parentWindow,c=rangy.saveSelection(b);if(c)try{a()}catch(d){setTimeout(function(){throw d},0)}else a();rangy.restoreSelection(c)},executeAndRestore:function(b,c){var d,f,g,h,i,j,k,l,m=this.doc.body,n=c&&m.scrollTop,o=c&&m.scrollLeft,p="_wysihtml5-temp-placeholder",q='<span class="'+p+'">'+a.INVISIBLE_SPACE+"</span>",r=this.getRange(!0);if(!r)return void b(m,m);r.collapsed||(k=r.cloneRange(),j=k.createContextualFragment(q),k.collapse(!1),k.insertNode(j),k.detach()),i=r.createContextualFragment(q),r.insertNode(i),j&&(d=this.contain.querySelectorAll("."+p),r.setStartBefore(d[0]),r.setEndAfter(d[d.length-1])),this.setSelection(r);try{b(r.startContainer,r.endContainer)}catch(s){setTimeout(function(){throw s},0)}if(d=this.contain.querySelectorAll("."+p),d&&d.length){l=rangy.createRange(this.doc),g=d[0].nextSibling,d.length>1&&(h=d[d.length-1].previousSibling),h&&g?(l.setStartBefore(g),l.setEndAfter(h)):(f=this.doc.createTextNode(a.INVISIBLE_SPACE),e.insert(f).after(d[0]),l.setStartBefore(f),l.setEndAfter(f)),this.setSelection(l);for(var t=d.length;t--;)d[t].parentNode.removeChild(d[t])}else this.contain.focus();c&&(m.scrollTop=n,m.scrollLeft=o);try{d.parentNode.removeChild(d)}catch(u){}},set:function(a,b){var c=rangy.createRange(this.doc);c.setStart(a,b||0),this.setSelection(c)},insertHTML:function(a){var b=rangy.createRange(this.doc),c=b.createContextualFragment(a),d=c.lastChild;this.insertNode(c),d&&this.setAfter(d)},insertNode:function(a){var b=this.getRange();b&&b.insertNode(a)},surround:function(a){var b,c=this.getOwnRanges(),d=[];if(0==c.length)return d;for(var e=c.length;e--;){b=this.doc.createElement(a.nodeName),d.push(b),a.className&&(b.className=a.className),a.cssStyle&&b.setAttribute("style",a.cssStyle);try{c[e].surroundContents(b),this.selectNode(b)}catch(f){b.appendChild(c[e].extractContents()),c[e].insertNode(b)}}return d},deblockAndSurround:function(b){var c,d,e,f=this.doc.createElement("div"),g=rangy.createRange(this.doc);if(f.className=b.className,this.composer.commands.exec("formatBlock",b.nodeName,b.className),c=this.contain.querySelectorAll("."+b.className),c[0])for(c[0].parentNode.insertBefore(f,c[0]),g.setStartBefore(c[0]),g.setEndAfter(c[c.length-1]),d=g.extractContents();d.firstChild;)if(e=d.firstChild,1==e.nodeType&&a.dom.hasClass(e,b.className)){for(;e.firstChild;)f.appendChild(e.firstChild);"BR"!==e.nodeName&&f.appendChild(this.doc.createElement("br")),d.removeChild(e)}else f.appendChild(e);else f=null;return f},scrollIntoView:function(){var c,d=this.doc,e=5,f=d.documentElement.scrollHeight>d.documentElement.offsetHeight,g=d._wysihtml5ScrollIntoViewElement=d._wysihtml5ScrollIntoViewElement||function(){var b=d.createElement("span");return b.innerHTML=a.INVISIBLE_SPACE,b}();f&&(this.insertNode(g),c=b(g),g.parentNode.removeChild(g),c>=d.body.scrollTop+d.documentElement.offsetHeight-e&&(d.body.scrollTop=c))},selectLine:function(){a.browser.supportsSelectionModify()?this._selectLine_W3C():this.doc.selection&&this._selectLine_MSIE()},_selectLine_W3C:function(){var a=this.doc.defaultView,b=a.getSelection();b.modify("move","left","lineboundary"),b.modify("extend","right","lineboundary")},_selectLine_MSIE:function(){var a,b,c,d,e,f=this.doc.selection.createRange(),g=f.boundingTop,h=this.doc.body.scrollWidth;if(f.moveToPoint){for(0===g&&(c=this.doc.createElement("span"),this.insertNode(c),g=c.offsetTop,c.parentNode.removeChild(c)),g+=1,d=-10;h>d;d+=2)try{f.moveToPoint(d,g);break}catch(i){}for(a=g,b=this.doc.selection.createRange(),e=h;e>=0;e--)try{b.moveToPoint(e,a);break}catch(j){}f.setEndPoint("EndToEnd",b),f.select()}},getText:function(){var a=this.getSelection();return a?a.toString():""},getNodes:function(a,b){var c=this.getRange();return c?c.getNodes([a],b):[]},fixRangeOverflow:function(a){if(this.contain&&this.contain.firstChild&&a){var b=a.compareNode(this.contain);if(2!==b)1===b&&a.setStartBefore(this.contain.firstChild),0===b&&a.setEndAfter(this.contain.lastChild),3===b&&(a.setStartBefore(this.contain.firstChild),a.setEndAfter(this.contain.lastChild));else if(this._detectInlineRangeProblems(a)){var c=a.endContainer.previousElementSibling;c&&a.setEnd(c,this._endOffsetForNode(c))}}},_endOffsetForNode:function(a){var b=document.createRange();return b.selectNodeContents(a),b.endOffset},_detectInlineRangeProblems:function(a){return position=e.compareDocumentPosition(a.startContainer,a.endContainer),0==a.endOffset&&4&position},getRange:function(a){var b=this.getSelection(),c=b&&b.rangeCount&&b.getRangeAt(0);return a!==!0&&this.fixRangeOverflow(c),c},getOwnUneditables:function(){var b=e.query(this.contain,"."+this.unselectableClass),c=e.query(b,"."+this.unselectableClass);return a.lang.array(b).without(c)},getOwnRanges:function(){var a,b=[],c=this.getRange();if(c&&b.push(c),this.unselectableClass&&this.contain&&c){var d,e=this.getOwnUneditables();if(e.length>0)for(var f=0,g=e.length;g>f;f++){a=[];for(var h=0,i=b.length;i>h;h++){if(b[h])switch(b[h].compareNode(e[f])){case 2:break;case 3:d=b[h].cloneRange(),d.setEndBefore(e[f]),a.push(d),d=b[h].cloneRange(),d.setStartAfter(e[f]),a.push(d);break;default:a.push(b[h])}b=a}}}return b},getSelection:function(){return rangy.getSelection(this.doc.defaultView||this.doc.parentWindow)},setSelection:function(a){var b=this.doc.defaultView||this.doc.parentWindow,c=rangy.getSelection(b);return c.setSingleRange(a)},createRange:function(){return rangy.createRange(this.doc)},isCollapsed:function(){return this.getSelection().isCollapsed},isEndToEndInNode:function(b){var c=this.getRange(),d=c.commonAncestorContainer,e=c.startContainer,f=c.endContainer;if(d.nodeType===a.TEXT_NODE&&(d=d.parentNode),e.nodeType===a.TEXT_NODE&&!/^\s*$/.test(e.data.substr(c.startOffset)))return!1;if(f.nodeType===a.TEXT_NODE&&!/^\s*$/.test(f.data.substr(c.endOffset)))return!1;for(;e&&e!==d;){if(e.nodeType!==a.TEXT_NODE&&!a.dom.contains(d,e))return!1;if(a.dom.domNode(e).prev({ignoreBlankTexts:!0}))return!1;e=e.parentNode}for(;f&&f!==d;){if(f.nodeType!==a.TEXT_NODE&&!a.dom.contains(d,f))return!1;if(a.dom.domNode(f).next({ignoreBlankTexts:!0}))return!1;f=f.parentNode}return a.lang.array(b).contains(d.nodeName)?d:!1},deselect:function(){var a=this.getSelection();a&&a.removeAllRanges()}})}(wysihtml5),function(a,b){function c(a,b,c){if(!a.className)return!1;var d=a.className.match(c)||[];return d[d.length-1]===b}function d(a,b){if(!a.getAttribute||!a.getAttribute("style"))return!1;a.getAttribute("style").match(b);return a.getAttribute("style").match(b)?!0:!1}function e(a,b,c){a.getAttribute("style")?(h(a,c),a.getAttribute("style")&&!/^\s*$/.test(a.getAttribute("style"))?a.setAttribute("style",b+";"+a.getAttribute("style")):a.setAttribute("style",b)):a.setAttribute("style",b)}function f(a,b,c){a.className?(g(a,c),a.className+=" "+b):a.className=b}function g(a,b){a.className&&(a.className=a.className.replace(b,""))}function h(a,b){var c,d=[];if(a.getAttribute("style")){c=a.getAttribute("style").split(";");for(var e=c.length;e--;)c[e].match(b)||/^\s*$/.test(c[e])||d.push(c[e]);d.length?a.setAttribute("style",d.join(";")):a.removeAttribute("style")}}function i(a,b){var c=[],d=b.split(";"),e=a.getAttribute("style");if(e){e=e.replace(/\s/gi,"").toLowerCase(),c.push(new RegExp("(^|\\s|;)"+b.replace(/\s/gi,"").replace(/([\(\)])/gi,"\\$1").toLowerCase().replace(";",";?").replace(/rgb\\\((\d+),(\d+),(\d+)\\\)/gi,"\\s?rgb\\($1,\\s?$2,\\s?$3\\)"),"gi"));for(var f=d.length;f-->0;)/^\s*$/.test(d[f])||c.push(new RegExp("(^|\\s|;)"+d[f].replace(/\s/gi,"").replace(/([\(\)])/gi,"\\$1").toLowerCase().replace(";",";?").replace(/rgb\\\((\d+),(\d+),(\d+)\\\)/gi,"\\s?rgb\\($1,\\s?$2,\\s?$3\\)"),"gi"));for(var g=0,h=c.length;h>g;g++)if(e.match(c[g]))return c[g]}return!1}function j(a,b,c){var d=i(a,b);return d?(h(a,d),"remove"):(e(a,b,c),"change")}function k(a,b){return a.className.replace(s," ")==b.className.replace(s," ")}function l(a){for(var b=a.parentNode;a.firstChild;)b.insertBefore(a.firstChild,a);b.normalize&&b.normalize(),b.removeChild(a)}function m(a,b){if(a.attributes.length!=b.attributes.length)return!1;for(var c,d,e,f=0,g=a.attributes.length;g>f;++f)if(c=a.attributes[f],e=c.name,"class"!=e){if(d=b.attributes.getNamedItem(e),c.specified!=d.specified)return!1;if(c.specified&&c.nodeValue!==d.nodeValue)return!1}return!0}function n(a,c){return b.dom.isCharacterDataNode(a)?0==c?!!a.previousSibling:c==a.length?!!a.nextSibling:!0:c>0&&c<a.childNodes.length}function o(a,c,d,e){var f;if(b.dom.isCharacterDataNode(c)&&(0==d?(d=b.dom.getNodeIndex(c),c=c.parentNode):d==c.length?(d=b.dom.getNodeIndex(c)+1,c=c.parentNode):f=b.dom.splitDataNode(c,d)),!(f||e&&c===e)){f=c.cloneNode(!1),f.id&&f.removeAttribute("id");for(var g;g=c.childNodes[d];)f.appendChild(g);b.dom.insertAfter(f,c)}return c==a?f:o(a,f.parentNode,b.dom.getNodeIndex(f),e)}function p(b){this.isElementMerge=b.nodeType==a.ELEMENT_NODE,this.firstTextNode=this.isElementMerge?b.lastChild:b,this.textNodes=[this.firstTextNode]}function q(a,b,c,d,e,f,g){this.tagNames=a||[r],this.cssClass=b||(b===!1?!1:""),this.similarClassRegExp=c,this.cssStyle=e||"",this.similarStyleRegExp=f,this.normalize=d,this.applyToAnyTagName=!1,this.container=g}var r="span",s=/\s+/g;p.prototype={doMerge:function(){for(var a,b,c,d=[],e=0,f=this.textNodes.length;f>e;++e)a=this.textNodes[e],b=a.parentNode,d[e]=a.data,e&&(b.removeChild(a),b.hasChildNodes()||b.parentNode.removeChild(b));return this.firstTextNode.data=c=d.join(""),c},getLength:function(){for(var a=this.textNodes.length,b=0;a--;)b+=this.textNodes[a].length;return b},toString:function(){for(var a=[],b=0,c=this.textNodes.length;c>b;++b)a[b]="'"+this.textNodes[b].data+"'";return"[Merge("+a.join(",")+")]"}},q.prototype={getAncestorWithClass:function(d){for(var e;d;){if(e=this.cssClass?c(d,this.cssClass,this.similarClassRegExp):""!==this.cssStyle?!1:!0,d.nodeType==a.ELEMENT_NODE&&"false"!=d.getAttribute("contenteditable")&&b.dom.arrayContains(this.tagNames,d.tagName.toLowerCase())&&e)return d;d=d.parentNode}return!1},getAncestorWithStyle:function(c){for(var e;c;){if(e=this.cssStyle?d(c,this.similarStyleRegExp):!1,c.nodeType==a.ELEMENT_NODE&&"false"!=c.getAttribute("contenteditable")&&b.dom.arrayContains(this.tagNames,c.tagName.toLowerCase())&&e)return c;c=c.parentNode}return!1},postApply:function(a,b){for(var c,d,e,f=a[0],g=a[a.length-1],h=[],i=f,j=g,k=0,l=g.length,m=0,n=a.length;n>m;++m)d=a[m],e=null,d&&d.parentNode&&(e=this.getAdjacentMergeableTextNode(d.parentNode,!1)),e?(c||(c=new p(e),h.push(c)),c.textNodes.push(d),d===f&&(i=c.firstTextNode,k=i.length),d===g&&(j=c.firstTextNode,l=c.getLength())):c=null;if(g&&g.parentNode){var o=this.getAdjacentMergeableTextNode(g.parentNode,!0);o&&(c||(c=new p(g),h.push(c)),c.textNodes.push(o))}if(h.length){for(m=0,n=h.length;n>m;++m)h[m].doMerge();b.setStart(i,k),b.setEnd(j,l)}},getAdjacentMergeableTextNode:function(b,c){var d,e=b.nodeType==a.TEXT_NODE,f=e?b.parentNode:b,g=c?"nextSibling":"previousSibling";if(e){if(d=b[g],d&&d.nodeType==a.TEXT_NODE)return d}else if(d=f[g],d&&this.areElementsMergeable(b,d))return d[c?"firstChild":"lastChild"];return null},areElementsMergeable:function(a,c){return b.dom.arrayContains(this.tagNames,(a.tagName||"").toLowerCase())&&b.dom.arrayContains(this.tagNames,(c.tagName||"").toLowerCase())&&k(a,c)&&m(a,c)},createContainer:function(a){var b=a.createElement(this.tagNames[0]);return this.cssClass&&(b.className=this.cssClass),this.cssStyle&&b.setAttribute("style",this.cssStyle),b},applyToTextNode:function(a){var c=a.parentNode;if(1==c.childNodes.length&&b.dom.arrayContains(this.tagNames,c.tagName.toLowerCase()))this.cssClass&&f(c,this.cssClass,this.similarClassRegExp),this.cssStyle&&e(c,this.cssStyle,this.similarStyleRegExp);else{var d=this.createContainer(b.dom.getDocument(a));a.parentNode.insertBefore(d,a),d.appendChild(a)}},isRemovable:function(c){return b.dom.arrayContains(this.tagNames,c.tagName.toLowerCase())&&""===a.lang.string(c.className).trim()&&(!c.getAttribute("style")||""===a.lang.string(c.getAttribute("style")).trim())},undoToTextNode:function(a,b,c,d){var e=c?!1:!0,f=c||d,h=!1;if(!b.containsNode(f)){var i=b.cloneRange();i.selectNode(f),i.isPointInRange(b.endContainer,b.endOffset)&&n(b.endContainer,b.endOffset)&&(o(f,b.endContainer,b.endOffset,this.container),b.setEndAfter(f)),i.isPointInRange(b.startContainer,b.startOffset)&&n(b.startContainer,b.startOffset)&&(f=o(f,b.startContainer,b.startOffset,this.container))}!e&&this.similarClassRegExp&&g(f,this.similarClassRegExp),e&&this.similarStyleRegExp&&(h="change"===j(f,this.cssStyle,this.similarStyleRegExp)),this.isRemovable(f)&&!h&&l(f)},applyToRange:function(b){for(var c,d=b.length;d--;){if(c=b[d].getNodes([a.TEXT_NODE]),!c.length)try{var e=this.createContainer(b[d].endContainer.ownerDocument);return b[d].surroundContents(e),void this.selectNode(b[d],e)}catch(f){}if(b[d].splitBoundaries(),c=b[d].getNodes([a.TEXT_NODE]),c.length){for(var g,h=0,i=c.length;i>h;++h)g=c[h],this.getAncestorWithClass(g)||this.applyToTextNode(g),this.getAncestorWithStyle(g)||this.applyToTextNode(g);b[d].setStart(c[0],0),g=c[c.length-1],b[d].setEnd(g,g.length),this.normalize&&this.postApply(c,b[d])}}},undoToRange:function(b){for(var c,d,e,f,g=b.length;g--;){if(c=b[g].getNodes([a.TEXT_NODE]),c.length)b[g].splitBoundaries(),c=b[g].getNodes([a.TEXT_NODE]);else{var h=b[g].endContainer.ownerDocument,i=h.createTextNode(a.INVISIBLE_SPACE);b[g].insertNode(i),b[g].selectNode(i),c=[i]}for(var j=0,k=c.length;k>j;++j)b[g].isValid()&&(d=c[j],e=this.getAncestorWithClass(d),f=this.getAncestorWithStyle(d),e?this.undoToTextNode(d,b[g],e):f&&this.undoToTextNode(d,b[g],!1,f));1==k?this.selectNode(b[g],c[0]):(b[g].setStart(c[0],0),d=c[c.length-1],b[g].setEnd(d,d.length),this.normalize&&this.postApply(c,b[g]))}},selectNode:function(b,c){var d=c.nodeType===a.ELEMENT_NODE,e="canHaveHTML"in c?c.canHaveHTML:!0,f=d?c.innerHTML:c.data,g=""===f||f===a.INVISIBLE_SPACE;if(g&&d&&e)try{c.innerHTML=a.INVISIBLE_SPACE}catch(h){}b.selectNodeContents(c),g&&d?b.collapse(!1):g&&(b.setStartAfter(c),b.setEndAfter(c))},getTextSelectedByRange:function(a,b){var c=b.cloneRange();c.selectNodeContents(a);var d=c.intersection(b),e=d?d.toString():"";return c.detach(),e},isAppliedToRange:function(b){for(var c,d,e=[],f=b.length;f--;){if(d=b[f].getNodes([a.TEXT_NODE]),!d.length)return c=this.getAncestorWithClass(b[f].startContainer),c||(c=this.getAncestorWithStyle(b[f].startContainer)),c?[c]:!1;for(var g,h=0,i=d.length;i>h;++h)g=this.getTextSelectedByRange(d[h],b[f]),c=this.getAncestorWithClass(d[h]),c||(c=this.getAncestorWithStyle(d[h])),c&&""!=g&&e.push(c)}return e.length?e:!1},toggleRange:function(a){this.isAppliedToRange(a)?this.undoToRange(a):this.applyToRange(a)}},a.selection.HTMLApplier=q}(wysihtml5,rangy),wysihtml5.Commands=Base.extend({constructor:function(a){this.editor=a,this.composer=a.composer,this.doc=this.composer.doc},support:function(a){return wysihtml5.browser.supportsCommand(this.doc,a)},exec:function(a,b){var c=wysihtml5.commands[a],d=wysihtml5.lang.array(arguments).get(),e=c&&c.exec,f=null;if(this.editor.fire("beforecommand:composer"),e)d.unshift(this.composer),f=e.apply(c,d);else try{f=this.doc.execCommand(a,!1,b)}catch(g){}return this.editor.fire("aftercommand:composer"),f},state:function(a){var b=wysihtml5.commands[a],c=wysihtml5.lang.array(arguments).get(),d=b&&b.state;if(d)return c.unshift(this.composer),d.apply(b,c);try{return this.doc.queryCommandState(a)}catch(e){return!1}},stateValue:function(a){var b=wysihtml5.commands[a],c=wysihtml5.lang.array(arguments).get(),d=b&&b.stateValue;return d?(c.unshift(this.composer),d.apply(b,c)):!1}}),wysihtml5.commands.bold={exec:function(a,b){wysihtml5.commands.formatInline.execWithToggle(a,b,"b")},state:function(a,b){return wysihtml5.commands.formatInline.state(a,b,"b")}},function(a){function b(b,c){var g,h,i,j,k,l,m,n,o,p=b.doc,q="_wysihtml5-temp-"+ +new Date,r=/non-matching-class/g,s=0;for(a.commands.formatInline.exec(b,d,e,q,r,d,d,!0,!0),h=p.querySelectorAll(e+"."+q),g=h.length;g>s;s++){i=h[s],i.removeAttribute("class");for(o in c)"text"!==o&&i.setAttribute(o,c[o])}l=i,1===g&&(m=f.getTextContent(i),j=!!i.querySelector("*"),k=""===m||m===a.INVISIBLE_SPACE,!j&&k&&(f.setTextContent(i,c.text||i.href),n=p.createTextNode(" "),b.selection.setAfter(i),f.insert(n).after(i),l=n)),b.selection.setAfter(l)}function c(a,b,c){for(var d,e=b.length;e--;){d=b[e].attributes;for(var f=d.length;f--;)b[e].removeAttribute(d.item(f).name);for(var g in c)c.hasOwnProperty(g)&&b[e].setAttribute(g,c[g])}}var d,e="A",f=a.dom;a.commands.createLink={exec:function(a,d,e){var f=this.state(a,d);f?a.selection.executeAndRestore(function(){c(a,f,e)}):(e="object"==typeof e?e:{href:e},b(a,e))},state:function(b,c){return a.commands.formatInline.state(b,c,"A")}}}(wysihtml5),function(a){function b(a,b){for(var d,e,f,g=b.length,h=0;g>h;h++)d=b[h],e=c.getParentElement(d,{nodeName:"code"}),f=c.getTextContent(d),f.match(c.autoLink.URL_REG_EXP)&&!e?e=c.renameElement(d,"code"):c.replaceWithChildNodes(d)}var c=a.dom;a.commands.removeLink={exec:function(a,c){var d=this.state(a,c);d&&a.selection.executeAndRestore(function(){b(a,d)})},state:function(b,c){return a.commands.formatInline.state(b,c,"A")}}}(wysihtml5),function(a){var b=/wysiwyg-font-size-[0-9a-z\-]+/g;a.commands.fontSize={exec:function(c,d,e){a.commands.formatInline.execWithToggle(c,d,"span","wysiwyg-font-size-"+e,b)},state:function(c,d,e){return a.commands.formatInline.state(c,d,"span","wysiwyg-font-size-"+e,b)}}}(wysihtml5),function(a){var b=/(\s|^)font-size\s*:\s*[^;\s]+;?/gi;a.commands.fontSizeStyle={exec:function(c,d,e){e="object"==typeof e?e.size:e,/^\s*$/.test(e)||a.commands.formatInline.execWithToggle(c,d,"span",!1,!1,"font-size:"+e,b)},state:function(c,d){return a.commands.formatInline.state(c,d,"span",!1,!1,"font-size",b)},stateValue:function(b,c){var d,e=this.state(b,c);return e&&a.lang.object(e).isArray()&&(e=e[0]),e&&(d=e.getAttribute("style"))?a.quirks.styleParser.parseFontSize(d):!1}}}(wysihtml5),function(a){var b=/wysiwyg-color-[0-9a-z]+/g;a.commands.foreColor={exec:function(c,d,e){a.commands.formatInline.execWithToggle(c,d,"span","wysiwyg-color-"+e,b)},state:function(c,d,e){return a.commands.formatInline.state(c,d,"span","wysiwyg-color-"+e,b)}}}(wysihtml5),function(a){var b=/(\s|^)color\s*:\s*[^;\s]+;?/gi;a.commands.foreColorStyle={exec:function(c,d,e){var f,g=a.quirks.styleParser.parseColor("object"==typeof e?"color:"+e.color:"color:"+e,"color");g&&(f="color: rgb("+g[0]+","+g[1]+","+g[2]+");",1!==g[3]&&(f+="color: rgba("+g[0]+","+g[1]+","+g[2]+","+g[3]+");"),a.commands.formatInline.execWithToggle(c,d,"span",!1,!1,f,b))},state:function(c,d){return a.commands.formatInline.state(c,d,"span",!1,!1,"color",b)},stateValue:function(b,c,d){var e,f=this.state(b,c);return f&&a.lang.object(f).isArray()&&(f=f[0]),f&&(e=f.getAttribute("style"),e&&e)?(val=a.quirks.styleParser.parseColor(e,"color"),a.quirks.styleParser.unparseColor(val,d)):!1}}}(wysihtml5),function(a){var b=/(\s|^)background-color\s*:\s*[^;\s]+;?/gi;a.commands.bgColorStyle={exec:function(c,d,e){var f,g=a.quirks.styleParser.parseColor("object"==typeof e?"background-color:"+e.color:"background-color:"+e,"background-color");g&&(f="background-color: rgb("+g[0]+","+g[1]+","+g[2]+");",1!==g[3]&&(f+="background-color: rgba("+g[0]+","+g[1]+","+g[2]+","+g[3]+");"),a.commands.formatInline.execWithToggle(c,d,"span",!1,!1,f,b))},state:function(c,d){return a.commands.formatInline.state(c,d,"span",!1,!1,"background-color",b)},stateValue:function(b,c,d){var e,f=this.state(b,c),g=!1;return f&&a.lang.object(f).isArray()&&(f=f[0]),f&&(e=f.getAttribute("style"))?(g=a.quirks.styleParser.parseColor(e,"background-color"),a.quirks.styleParser.unparseColor(g,d)):!1}}}(wysihtml5),function(a){function b(b,c,e){b.className?(d(b,e),b.className=a.lang.string(b.className+" "+c).trim()):b.className=c}function c(b,c,d){e(b,d),b.getAttribute("style")?b.setAttribute("style",a.lang.string(b.getAttribute("style")+" "+c).trim()):b.setAttribute("style",c)}function d(b,c){var d=c.test(b.className);return b.className=b.className.replace(c,""),""==a.lang.string(b.className).trim()&&b.removeAttribute("class"),d}function e(b,c){var d=c.test(b.getAttribute("style"));return b.setAttribute("style",(b.getAttribute("style")||"").replace(c,"")),""==a.lang.string(b.getAttribute("style")||"").trim()&&b.removeAttribute("style"),d}function f(a){var b=a.lastChild;b&&g(b)&&b.parentNode.removeChild(b)}function g(a){return"BR"===a.nodeName}function h(b,c){b.selection.isCollapsed()&&b.selection.selectLine();for(var d=b.selection.surround(c),e=0,g=d.length;g>e;e++)a.dom.lineBreaks(d[e]).remove(),f(d[e])}function i(b){return!!a.lang.string(b.className).trim()}function j(b){return!!a.lang.string(b.getAttribute("style")||"").trim()}var k=a.dom,l=["H1","H2","H3","H4","H5","H6","P","PRE","DIV"];a.commands.formatBlock={exec:function(f,g,m,n,o,p,q){var r,s,t,u,v=(f.doc,this.state(f,g,m,n,o,p,q)),w=f.config.useLineBreaks,x=w?"DIV":"P";return m="string"==typeof m?m.toUpperCase():m,v.length?void f.selection.executeAndRestoreRangy(function(){for(var b=v.length;b--;){if(o&&(s=d(v[b],o)),q&&(u=e(v[b],q)),(u||s)&&null===m&&v[b].nodeName!=x)return;var c=i(v[b]),f=j(v[b]);c||f||!w&&"P"!==m?k.renameElement(v[b],"P"===m?"DIV":x):(a.dom.lineBreaks(v[b]).add(),k.replaceWithChildNodes(v[b]))}}):void((null!==m&&!a.lang.array(l).contains(m)||(r=f.selection.findNodesInSelection(l).concat(f.selection.getSelectedOwnNodes()),f.selection.executeAndRestoreRangy(function(){for(var a=r.length;a--;)blockElement=k.getParentElement(r[a],{nodeName:l}),blockElement==f.element&&(blockElement=null),blockElement&&(m&&(blockElement=k.renameElement(blockElement,m)),n&&b(blockElement,n,o),p&&c(blockElement,p,q),t=!0)}),!t))&&h(f,{nodeName:m||x,className:n||null,cssStyle:p||null}))},state:function(b,c,d,e,f,g,h){var i,j=b.selection.getSelectedOwnNodes(),l=[];d="string"==typeof d?d.toUpperCase():d;for(var m=0,n=j.length;n>m;m++)i=k.getParentElement(j[m],{nodeName:d,className:e,classRegExp:f,cssStyle:g,styleRegExp:h}),i&&-1==a.lang.array(l).indexOf(i)&&l.push(i);return 0==l.length?!1:l}}}(wysihtml5),wysihtml5.commands.formatCode={exec:function(a,b,c){var d,e,f,g=this.state(a);g?a.selection.executeAndRestore(function(){d=g.querySelector("code"),wysihtml5.dom.replaceWithChildNodes(g),d&&wysihtml5.dom.replaceWithChildNodes(d)}):(e=a.selection.getRange(),f=e.extractContents(),g=a.doc.createElement("pre"),d=a.doc.createElement("code"),c&&(d.className=c),g.appendChild(d),d.appendChild(f),e.insertNode(g),a.selection.selectNode(g))},state:function(a){var b=a.selection.getSelectedNode();return b&&b.nodeName&&"PRE"==b.nodeName&&b.firstChild&&b.firstChild.nodeName&&"CODE"==b.firstChild.nodeName?b:wysihtml5.dom.getParentElement(b,{nodeName:"CODE"})&&wysihtml5.dom.getParentElement(b,{nodeName:"PRE"})}},function(a){function b(a){var b=d[a];return b?[a.toLowerCase(),b.toLowerCase()]:[a.toLowerCase()]}function c(c,d,f,g,h,i){var j=c;return d&&(j+=":"+d),g&&(j+=":"+g),e[j]||(e[j]=new a.selection.HTMLApplier(b(c),d,f,!0,g,h,i)),e[j]}var d={strong:"b",em:"i",b:"strong",i:"em"},e={};a.commands.formatInline={exec:function(a,b,d,e,f,g,h,i,j){var k=a.selection.createRange();return ownRanges=a.selection.getOwnRanges(),ownRanges&&0!=ownRanges.length?(a.selection.getSelection().removeAllRanges(),c(d,e,f,g,h,a.element).toggleRange(ownRanges),void(i?j||a.cleanUp():(k.setStart(ownRanges[0].startContainer,ownRanges[0].startOffset),k.setEnd(ownRanges[ownRanges.length-1].endContainer,ownRanges[ownRanges.length-1].endOffset),a.selection.setSelection(k),a.selection.executeAndRestore(function(){j||a.cleanUp()},!0,!0)))):!1},execWithToggle:function(b,c,d,e,f,g,h){var i=this;if(this.state(b,c,d,e,f,g,h)&&b.selection.isCollapsed()&&!b.selection.caretIsLastInSelection()&&!b.selection.caretIsFirstInSelection()){var j=i.state(b,c,d,e,f)[0];
b.selection.executeAndRestoreRangy(function(){j.parentNode;b.selection.selectNode(j,!0),a.commands.formatInline.exec(b,c,d,e,f,g,h,!0,!0)})}else this.state(b,c,d,e,f,g,h)&&!b.selection.isCollapsed()?b.selection.executeAndRestoreRangy(function(){a.commands.formatInline.exec(b,c,d,e,f,g,h,!0,!0)}):a.commands.formatInline.exec(b,c,d,e,f,g,h)},state:function(b,e,f,g,h,i,j){var k,l=b.doc,m=d[f]||f;return a.dom.hasElementWithTagName(l,f)||a.dom.hasElementWithTagName(l,m)?g&&!a.dom.hasElementWithClassName(l,g)?!1:(k=b.selection.getOwnRanges(),k&&0!==k.length?c(f,g,h,i,j,b.element).isAppliedToRange(k):!1):!1}}}(wysihtml5),function(a){a.commands.insertBlockQuote={exec:function(b,c){var d=this.state(b,c),e=b.selection.isEndToEndInNode(["H1","H2","H3","H4","H5","H6","P"]);b.selection.executeAndRestore(function(){if(d)b.config.useLineBreaks&&a.dom.lineBreaks(d).add(),a.dom.unwrap(d);else if(b.selection.isCollapsed()&&b.selection.selectLine(),e){var c=e.ownerDocument.createElement("blockquote");a.dom.insert(c).after(e),c.appendChild(e)}else b.selection.surround({nodeName:"blockquote"})})},state:function(b){var c=b.selection.getSelectedNode(),d=a.dom.getParentElement(c,{nodeName:"BLOCKQUOTE"},!1,b.element);return d?d:!1}}}(wysihtml5),wysihtml5.commands.insertHTML={exec:function(a,b,c){a.commands.support(b)?a.doc.execCommand(b,!1,c):a.selection.insertHTML(c)},state:function(){return!1}},function(a){var b="IMG";a.commands.insertImage={exec:function(c,d,e){e="object"==typeof e?e:{src:e};var f,g,h=c.doc,i=this.state(c);if(i)return c.selection.setBefore(i),g=i.parentNode,g.removeChild(i),a.dom.removeEmptyTextNodes(g),"A"!==g.nodeName||g.firstChild||(c.selection.setAfter(g),g.parentNode.removeChild(g)),void a.quirks.redraw(c.element);i=h.createElement(b);for(var j in e)i.setAttribute("className"===j?"class":j,e[j]);c.selection.insertNode(i),a.browser.hasProblemsSettingCaretAfterImg()?(f=h.createTextNode(a.INVISIBLE_SPACE),c.selection.insertNode(f),c.selection.setAfter(f)):c.selection.setAfter(i)},state:function(c){var d,e,f,g=c.doc;return a.dom.hasElementWithTagName(g,b)&&(d=c.selection.getSelectedNode())?d.nodeName===b?d:d.nodeType!==a.ELEMENT_NODE?!1:(e=c.selection.getText(),(e=a.lang.string(e).trim())?!1:(f=c.selection.getNodes(a.ELEMENT_NODE,function(a){return"IMG"===a.nodeName}),1!==f.length?!1:f[0])):!1}}}(wysihtml5),function(a){var b="<br>"+(a.browser.needsSpaceAfterLineBreak()?" ":"");a.commands.insertLineBreak={exec:function(c,d){c.commands.support(d)?(c.doc.execCommand(d,!1,null),a.browser.autoScrollsToCaret()||c.selection.scrollIntoView()):c.commands.exec("insertHTML",b)},state:function(){return!1}}}(wysihtml5),wysihtml5.commands.insertOrderedList={exec:function(a,b){wysihtml5.commands.insertList.exec(a,b,"OL")},state:function(a,b){return wysihtml5.commands.insertList.state(a,b,"OL")}},wysihtml5.commands.insertUnorderedList={exec:function(a,b){wysihtml5.commands.insertList.exec(a,b,"UL")},state:function(a,b){return wysihtml5.commands.insertList.state(a,b,"UL")}},wysihtml5.commands.insertList=function(a){var b=function(a,b){if(a&&a.nodeName){"string"==typeof b&&(b=[b]);for(var c=b.length;c--;)if(a.nodeName===b[c])return!0}return!1},c=function(c,d,e){var f={el:null,other:!1};if(c){var g=a.dom.getParentElement(c,{nodeName:"LI"});otherNodeName="UL"===d?"OL":"UL",b(c,d)?f.el=c:b(c,otherNodeName)?f={el:c,other:!0}:g&&(b(g.parentNode,d)?f.el=g.parentNode:b(g.parentNode,otherNodeName)&&(f={el:g.parentNode,other:!0}))}return f.el&&!e.element.contains(f.el)&&(f.el=null),f},d=function(b,c,d){var e,g="UL"===c?"OL":"UL";d.selection.executeAndRestore(function(){var h=f(g,d);if(h.length)for(var i=h.length;i--;)a.dom.renameElement(h[i],c.toLowerCase());else{e=f(["OL","UL"],d);for(var j=e.length;j--;)a.dom.resolveList(e[j],d.config.useLineBreaks);a.dom.resolveList(b,d.config.useLineBreaks)}})},e=function(b,c,d){var e="UL"===c?"OL":"UL";d.selection.executeAndRestore(function(){for(var g=[b].concat(f(e,d)),h=g.length;h--;)a.dom.renameElement(g[h],c.toLowerCase())})},f=function(a,c){for(var d=c.selection.getOwnRanges(),e=[],f=d.length;f--;)e=e.concat(d[f].getNodes([1],function(c){return b(c,a)}));return e},g=function(b,c){c.selection.executeAndRestoreRangy(function(){var d,e,f="_wysihtml5-temp-"+(new Date).getTime(),g=c.selection.deblockAndSurround({nodeName:"div",className:f}),h=/\uFEFF/g;g.innerHTML=g.innerHTML.replace(h,""),g&&(d=a.lang.array(["","<br>",a.INVISIBLE_SPACE]).contains(g.innerHTML),e=a.dom.convertToList(g,b.toLowerCase(),c.parent.config.uneditableContainerClassname),d&&c.selection.selectNode(e.querySelector("li"),!0))})};return{exec:function(a,b,f){var h=a.doc,i="OL"===f?"insertorderedlist":"insertunorderedlist",j=a.selection.getSelectedNode(),k=c(j,f,a);k.el?k.other?e(k.el,f,a):d(k.el,f,a):a.commands.support(i)?h.execCommand(i,!1,null):g(f,a)},state:function(a,b,d){var e=a.selection.getSelectedNode(),f=c(e,d,a);return f.el&&!f.other?f.el:!1}}}(wysihtml5),wysihtml5.commands.italic={exec:function(a,b){wysihtml5.commands.formatInline.execWithToggle(a,b,"i")},state:function(a,b){return wysihtml5.commands.formatInline.state(a,b,"i")}},function(a){var b="wysiwyg-text-align-center",c=/wysiwyg-text-align-[0-9a-z]+/g;a.commands.justifyCenter={exec:function(d){return a.commands.formatBlock.exec(d,"formatBlock",null,b,c)},state:function(d){return a.commands.formatBlock.state(d,"formatBlock",null,b,c)}}}(wysihtml5),function(a){var b="wysiwyg-text-align-left",c=/wysiwyg-text-align-[0-9a-z]+/g;a.commands.justifyLeft={exec:function(d){return a.commands.formatBlock.exec(d,"formatBlock",null,b,c)},state:function(d){return a.commands.formatBlock.state(d,"formatBlock",null,b,c)}}}(wysihtml5),function(a){var b="wysiwyg-text-align-right",c=/wysiwyg-text-align-[0-9a-z]+/g;a.commands.justifyRight={exec:function(d){return a.commands.formatBlock.exec(d,"formatBlock",null,b,c)},state:function(d){return a.commands.formatBlock.state(d,"formatBlock",null,b,c)}}}(wysihtml5),function(a){var b="wysiwyg-text-align-justify",c=/wysiwyg-text-align-[0-9a-z]+/g;a.commands.justifyFull={exec:function(d){return a.commands.formatBlock.exec(d,"formatBlock",null,b,c)},state:function(d){return a.commands.formatBlock.state(d,"formatBlock",null,b,c)}}}(wysihtml5),function(a){var b="text-align: right;",c=/(\s|^)text-align\s*:\s*[^;\s]+;?/gi;a.commands.alignRightStyle={exec:function(d){return a.commands.formatBlock.exec(d,"formatBlock",null,null,null,b,c)},state:function(d){return a.commands.formatBlock.state(d,"formatBlock",null,null,null,b,c)}}}(wysihtml5),function(a){var b="text-align: left;",c=/(\s|^)text-align\s*:\s*[^;\s]+;?/gi;a.commands.alignLeftStyle={exec:function(d){return a.commands.formatBlock.exec(d,"formatBlock",null,null,null,b,c)},state:function(d){return a.commands.formatBlock.state(d,"formatBlock",null,null,null,b,c)}}}(wysihtml5),function(a){var b="text-align: center;",c=/(\s|^)text-align\s*:\s*[^;\s]+;?/gi;a.commands.alignCenterStyle={exec:function(d){return a.commands.formatBlock.exec(d,"formatBlock",null,null,null,b,c)},state:function(d){return a.commands.formatBlock.state(d,"formatBlock",null,null,null,b,c)}}}(wysihtml5),wysihtml5.commands.redo={exec:function(a){return a.undoManager.redo()},state:function(){return!1}},wysihtml5.commands.underline={exec:function(a,b){wysihtml5.commands.formatInline.execWithToggle(a,b,"u")},state:function(a,b){return wysihtml5.commands.formatInline.state(a,b,"u")}},wysihtml5.commands.undo={exec:function(a){return a.undoManager.undo()},state:function(){return!1}},wysihtml5.commands.createTable={exec:function(a,b,c){var d,e,f;if(c&&c.cols&&c.rows&&parseInt(c.cols,10)>0&&parseInt(c.rows,10)>0){for(f=c.tableStyle?'<table style="'+c.tableStyle+'">':"<table>",f+="<tbody>",e=0;e<c.rows;e++){for(f+="<tr>",d=0;d<c.cols;d++)f+="<td>&nbsp;</td>";f+="</tr>"}f+="</tbody></table>",a.commands.exec("insertHTML",f)}},state:function(){return!1}},wysihtml5.commands.mergeTableCells={exec:function(a,b){a.tableSelection&&a.tableSelection.start&&a.tableSelection.end&&(this.state(a,b)?wysihtml5.dom.table.unmergeCell(a.tableSelection.start):wysihtml5.dom.table.mergeCellsBetween(a.tableSelection.start,a.tableSelection.end))},state:function(a){if(a.tableSelection){var b=a.tableSelection.start,c=a.tableSelection.end;if(b&&c&&b==c&&(wysihtml5.dom.getAttribute(b,"colspan")&&parseInt(wysihtml5.dom.getAttribute(b,"colspan"),10)>1||wysihtml5.dom.getAttribute(b,"rowspan")&&parseInt(wysihtml5.dom.getAttribute(b,"rowspan"),10)>1))return[b]}return!1}},wysihtml5.commands.addTableCells={exec:function(a,b,c){if(a.tableSelection&&a.tableSelection.start&&a.tableSelection.end){var d=wysihtml5.dom.table.orderSelectionEnds(a.tableSelection.start,a.tableSelection.end);"before"==c||"above"==c?wysihtml5.dom.table.addCells(d.start,c):("after"==c||"below"==c)&&wysihtml5.dom.table.addCells(d.end,c),setTimeout(function(){a.tableSelection.select(d.start,d.end)},0)}},state:function(){return!1}},wysihtml5.commands.deleteTableCells={exec:function(a,b,c){if(a.tableSelection&&a.tableSelection.start&&a.tableSelection.end){var d,e=wysihtml5.dom.table.orderSelectionEnds(a.tableSelection.start,a.tableSelection.end),f=wysihtml5.dom.table.indexOf(e.start),g=a.tableSelection.table;wysihtml5.dom.table.removeCells(e.start,c),setTimeout(function(){d=wysihtml5.dom.table.findCell(g,f),d||("row"==c&&(d=wysihtml5.dom.table.findCell(g,{row:f.row-1,col:f.col})),"column"==c&&(d=wysihtml5.dom.table.findCell(g,{row:f.row,col:f.col-1}))),d&&a.tableSelection.select(d,d)},0)}},state:function(){return!1}},wysihtml5.commands.indentList={exec:function(a){var b=a.selection.getSelectionParentsByTag("LI");return b?this.tryToPushLiLevel(b,a.selection):!1},state:function(){return!1},tryToPushLiLevel:function(a,b){var c,d,e,f,g,h=!1;return b.executeAndRestoreRangy(function(){for(var b=a.length;b--;)f=a[b],c="OL"===f.parentNode.nodeName?"OL":"UL",d=f.ownerDocument.createElement(c),e=wysihtml5.dom.domNode(f).prev({nodeTypes:[wysihtml5.ELEMENT_NODE]}),g=e?e.querySelector("ul, ol"):null,e&&(g?g.appendChild(f):(d.appendChild(f),e.appendChild(d)),h=!0)}),h}},wysihtml5.commands.outdentList={exec:function(a){var b=a.selection.getSelectionParentsByTag("LI");return b?this.tryToPullLiLevel(b,a):!1},state:function(){return!1},tryToPullLiLevel:function(a,b){var c,d,e,f,g,h=!1,i=this;return b.selection.executeAndRestoreRangy(function(){for(var j=a.length;j--;)if(f=a[j],f.parentNode&&(c=f.parentNode,"OL"===c.tagName||"UL"===c.tagName)){if(h=!0,d=wysihtml5.dom.getParentElement(c.parentNode,{nodeName:["OL","UL"]},!1,b.element),e=wysihtml5.dom.getParentElement(c.parentNode,{nodeName:["LI"]},!1,b.element),d&&e)f.nextSibling&&(g=i.getAfterList(c,f),f.appendChild(g)),d.insertBefore(f,e.nextSibling);else{f.nextSibling&&(g=i.getAfterList(c,f),f.appendChild(g));for(var k=f.childNodes.length;k--;)c.parentNode.insertBefore(f.childNodes[k],c.nextSibling);c.parentNode.insertBefore(document.createElement("br"),c.nextSibling),f.parentNode.removeChild(f)}0===c.childNodes.length&&c.parentNode.removeChild(c)}}),h},getAfterList:function(a,b){for(var c=a.nodeName,d=document.createElement(c);b.nextSibling;)d.appendChild(b.nextSibling);return d}},function(a){var b=90,c=89,d=8,e=46,f=25,g="data-wysihtml5-selection-node",h="data-wysihtml5-selection-offset",i=('<span id="_wysihtml5-undo" class="_wysihtml5-temp">'+a.INVISIBLE_SPACE+"</span>",'<span id="_wysihtml5-redo" class="_wysihtml5-temp">'+a.INVISIBLE_SPACE+"</span>",a.dom);a.UndoManager=a.lang.Dispatcher.extend({constructor:function(a){this.editor=a,this.composer=a.composer,this.element=this.composer.element,this.position=0,this.historyStr=[],this.historyDom=[],this.transact(),this._observe()},_observe:function(){{var a,f=this;this.composer.sandbox.getDocument()}i.observe(this.element,"keydown",function(a){if(!a.altKey&&(a.ctrlKey||a.metaKey)){var d=a.keyCode,e=d===b&&!a.shiftKey,g=d===b&&a.shiftKey||d===c;e?(f.undo(),a.preventDefault()):g&&(f.redo(),a.preventDefault())}}),i.observe(this.element,"keydown",function(b){var c=b.keyCode;c!==a&&(a=c,(c===d||c===e)&&f.transact())}),this.editor.on("newword:composer",function(){f.transact()}).on("beforecommand:composer",function(){f.transact()})},transact:function(){var b=this.historyStr[this.position-1],c=this.composer.getValue(!1,!1);if(c!==b){var d=this.historyStr.length=this.historyDom.length=this.position;d>f&&(this.historyStr.shift(),this.historyDom.shift(),this.position--),this.position++;var e,i,j=this.composer.selection.getRange(),k=j&&j.startContainer?j.startContainer:this.element,l=j&&j.startOffset?j.startOffset:0;k.nodeType===a.ELEMENT_NODE?e=k:(e=k.parentNode,i=this.getChildNodeIndex(e,k)),e.setAttribute(h,l),"undefined"!=typeof i&&e.setAttribute(g,i);var m=this.element.cloneNode(!!c);this.historyDom.push(m),this.historyStr.push(c),e.removeAttribute(h),e.removeAttribute(g)}},undo:function(){this.transact(),this.undoPossible()&&(this.set(this.historyDom[--this.position-1]),this.editor.fire("undo:composer"))},redo:function(){this.redoPossible()&&(this.set(this.historyDom[++this.position-1]),this.editor.fire("redo:composer"))},undoPossible:function(){return this.position>1},redoPossible:function(){return this.position<this.historyStr.length},set:function(a){this.element.innerHTML="";for(var b=0,c=a.childNodes,d=a.childNodes.length;d>b;b++)this.element.appendChild(c[b].cloneNode(!0));var e,f,i;a.hasAttribute(h)?(e=a.getAttribute(h),i=a.getAttribute(g),f=this.element):(f=this.element.querySelector("["+h+"]")||this.element,e=f.getAttribute(h),i=f.getAttribute(g),f.removeAttribute(h),f.removeAttribute(g)),null!==i&&(f=this.getChildNodeByIndex(f,+i)),this.composer.selection.set(f,e)},getChildNodeIndex:function(a,b){for(var c=0,d=a.childNodes,e=d.length;e>c;c++)if(d[c]===b)return c},getChildNodeByIndex:function(a,b){return a.childNodes[b]}})}(wysihtml5),wysihtml5.views.View=Base.extend({constructor:function(a,b,c){this.parent=a,this.element=b,this.config=c,this.config.noTextarea||this._observeViewChange()},_observeViewChange:function(){var a=this;this.parent.on("beforeload",function(){a.parent.on("change_view",function(b){b===a.name?(a.parent.currentView=a,a.show(),setTimeout(function(){a.focus()},0)):a.hide()})})},focus:function(){if(this.element.ownerDocument.querySelector(":focus")!==this.element)try{this.element.focus()}catch(a){}},hide:function(){this.element.style.display="none"},show:function(){this.element.style.display=""},disable:function(){this.element.setAttribute("disabled","disabled")},enable:function(){this.element.removeAttribute("disabled")}}),function(a){var b=a.dom,c=a.browser;a.views.Composer=a.views.View.extend({name:"composer",CARET_HACK:"<br>",constructor:function(a,b,c){this.base(a,b,c),this.config.noTextarea?this.editableArea=b:this.textarea=this.parent.textarea,this.config.contentEditableMode?this._initContentEditableArea():this._initSandbox()},clear:function(){this.element.innerHTML=c.displaysCaretInEmptyContentEditableCorrectly()?"":this.CARET_HACK},getValue:function(b,c){var d=this.isEmpty()?"":a.quirks.getCorrectInnerHTML(this.element);return b!==!1&&(d=this.parent.parse(d,c===!1?!1:!0)),d},setValue:function(a,b){b&&(a=this.parent.parse(a));try{this.element.innerHTML=a}catch(c){this.element.innerText=a}},cleanUp:function(){this.parent.parse(this.element)},show:function(){this.editableArea.style.display=this._displayStyle||"",this.config.noTextarea||this.textarea.element.disabled||(this.disable(),this.enable())},hide:function(){this._displayStyle=b.getStyle("display").from(this.editableArea),"none"===this._displayStyle&&(this._displayStyle=null),this.editableArea.style.display="none"},disable:function(){this.parent.fire("disable:composer"),this.element.removeAttribute("contentEditable")},enable:function(){this.parent.fire("enable:composer"),this.element.setAttribute("contentEditable","true")},focus:function(b){a.browser.doesAsyncFocus()&&this.hasPlaceholderSet()&&this.clear(),this.base();var c=this.element.lastChild;b&&c&&this.selection&&("BR"===c.nodeName?this.selection.setBefore(this.element.lastChild):this.selection.setAfter(this.element.lastChild))},getTextContent:function(){return b.getTextContent(this.element)},hasPlaceholderSet:function(){return this.getTextContent()==(this.config.noTextarea?this.editableArea.getAttribute("data-placeholder"):this.textarea.element.getAttribute("placeholder"))&&this.placeholderSet},isEmpty:function(){var a=this.element.innerHTML.toLowerCase();return""===a||"<br>"===a||"<p></p>"===a||"<p><br></p>"===a||this.hasPlaceholderSet()},_initContentEditableArea:function(){var a=this;this.config.noTextarea?this.sandbox=new b.ContentEditableArea(function(){a._create()},{},this.editableArea):(this.sandbox=new b.ContentEditableArea(function(){a._create()}),this.editableArea=this.sandbox.getContentEditable(),b.insert(this.editableArea).after(this.textarea.element),this._createWysiwygFormField())},_initSandbox:function(){var a=this;this.sandbox=new b.Sandbox(function(){a._create()},{stylesheets:this.config.stylesheets}),this.editableArea=this.sandbox.getIframe();var c=this.textarea.element;b.insert(this.editableArea).after(c),this._createWysiwygFormField()},_createWysiwygFormField:function(){if(this.textarea.element.form){var a=document.createElement("input");a.type="hidden",a.name="_wysihtml5_mode",a.value=1,b.insert(a).after(this.textarea.element)}},_create:function(){var d=this;this.doc=this.sandbox.getDocument(),this.element=this.config.contentEditableMode?this.sandbox.getContentEditable():this.doc.body,this.config.noTextarea?this.cleanUp():(this.textarea=this.parent.textarea,this.element.innerHTML=this.textarea.getValue(!0,!1)),this.selection=new a.Selection(this.parent,this.element,this.config.uneditableContainerClassname),this.commands=new a.Commands(this.parent),this.config.noTextarea||b.copyAttributes(["className","spellcheck","title","lang","dir","accessKey"]).from(this.textarea.element).to(this.element),b.addClass(this.element,this.config.composerClassName),this.config.style&&!this.config.contentEditableMode&&this.style(),this.observe();var e=this.config.name;e&&(b.addClass(this.element,e),this.config.contentEditableMode||b.addClass(this.editableArea,e)),this.enable(),!this.config.noTextarea&&this.textarea.element.disabled&&this.disable();var f="string"==typeof this.config.placeholder?this.config.placeholder:this.config.noTextarea?this.editableArea.getAttribute("data-placeholder"):this.textarea.element.getAttribute("placeholder");f&&b.simulatePlaceholder(this.parent,this,f),this.commands.exec("styleWithCSS",!1),this._initAutoLinking(),this._initObjectResizing(),this._initUndoManager(),this._initLineBreaking(),this.config.noTextarea||!this.textarea.element.hasAttribute("autofocus")&&document.querySelector(":focus")!=this.textarea.element||c.isIos()||setTimeout(function(){d.focus(!0)},100),c.clearsContentEditableCorrectly()||a.quirks.ensureProperClearing(this),this.initSync&&this.config.sync&&this.initSync(),this.config.noTextarea||this.textarea.hide(),this.parent.fire("beforeload").fire("load")},_initAutoLinking:function(){var d=this,e=c.canDisableAutoLinking(),f=c.doesAutoLinkingInContentEditable();if(e&&this.commands.exec("autoUrlDetect",!1),this.config.autoLink){(!f||f&&e)&&(this.parent.on("newword:composer",function(){b.getTextContent(d.element).match(b.autoLink.URL_REG_EXP)&&d.selection.executeAndRestore(function(c,e){for(var f=d.element.querySelectorAll("."+d.config.uneditableContainerClassname),g=!1,h=f.length;h--;)a.dom.contains(f[h],e)&&(g=!0);g||b.autoLink(e.parentNode,[d.config.uneditableContainerClassname])})}),b.observe(this.element,"blur",function(){b.autoLink(d.element,[d.config.uneditableContainerClassname])}));var g=this.sandbox.getDocument().getElementsByTagName("a"),h=b.autoLink.URL_REG_EXP,i=function(c){var d=a.lang.string(b.getTextContent(c)).trim();return"www."===d.substr(0,4)&&(d="http://"+d),d};b.observe(this.element,"keydown",function(a){if(g.length){var c,e=d.selection.getSelectedNode(a.target.ownerDocument),f=b.getParentElement(e,{nodeName:"A"},4);f&&(c=i(f),setTimeout(function(){var a=i(f);a!==c&&a.match(h)&&f.setAttribute("href",a)},0))}})}},_initObjectResizing:function(){if(this.commands.exec("enableObjectResizing",!0),c.supportsEvent("resizeend")){var d=["width","height"],e=d.length,f=this.element;b.observe(f,"resizeend",function(b){var c,g=b.target||b.srcElement,h=g.style,i=0;if("IMG"===g.nodeName){for(;e>i;i++)c=d[i],h[c]&&(g.setAttribute(c,parseInt(h[c],10)),h[c]="");a.quirks.redraw(f)}})}},_initUndoManager:function(){this.undoManager=new a.UndoManager(this.parent)},_initLineBreaking:function(){function d(a){var c=b.getParentElement(a,{nodeName:["P","DIV"]},2);c&&b.contains(e.element,c)&&e.selection.executeAndRestore(function(){e.config.useLineBreaks?b.replaceWithChildNodes(c):"P"!==c.nodeName&&b.renameElement(c,"p")})}var e=this,f=["LI","P","H1","H2","H3","H4","H5","H6"],g=["UL","OL","MENU"];this.config.useLineBreaks||b.observe(this.element,["focus","keydown"],function(){if(e.isEmpty()){var a=e.doc.createElement("P");e.element.innerHTML="",e.element.appendChild(a),c.displaysCaretInEmptyContentEditableCorrectly()?e.selection.selectNode(a,!0):(a.innerHTML="<br>",e.selection.setBefore(a.firstChild))}}),b.observe(this.element,"keydown",function(c){var h=c.keyCode;if(!c.shiftKey&&(h===a.ENTER_KEY||h===a.BACKSPACE_KEY)){var i=b.getParentElement(e.selection.getSelectedNode(),{nodeName:f},4);return i?void setTimeout(function(){var c,f=e.selection.getSelectedNode();if("LI"===i.nodeName){if(!f)return;c=b.getParentElement(f,{nodeName:g},2),c||d(f)}h===a.ENTER_KEY&&i.nodeName.match(/^H[1-6]$/)&&d(f)},0):void(e.config.useLineBreaks&&h===a.ENTER_KEY&&!a.browser.insertsLineBreaksOnReturn()&&(c.preventDefault(),e.commands.exec("insertLineBreak")))}})}})}(wysihtml5),function(a){var b=a.dom,c=document,d=window,e=c.createElement("div"),f=["background-color","color","cursor","font-family","font-size","font-style","font-variant","font-weight","line-height","letter-spacing","text-align","text-decoration","text-indent","text-rendering","word-break","word-wrap","word-spacing"],g=["background-color","border-collapse","border-bottom-color","border-bottom-style","border-bottom-width","border-left-color","border-left-style","border-left-width","border-right-color","border-right-style","border-right-width","border-top-color","border-top-style","border-top-width","clear","display","float","margin-bottom","margin-left","margin-right","margin-top","outline-color","outline-offset","outline-width","outline-style","padding-left","padding-right","padding-top","padding-bottom","position","top","left","right","bottom","z-index","vertical-align","text-align","-webkit-box-sizing","-moz-box-sizing","-ms-box-sizing","box-sizing","-webkit-box-shadow","-moz-box-shadow","-ms-box-shadow","box-shadow","-webkit-border-top-right-radius","-moz-border-radius-topright","border-top-right-radius","-webkit-border-bottom-right-radius","-moz-border-radius-bottomright","border-bottom-right-radius","-webkit-border-bottom-left-radius","-moz-border-radius-bottomleft","border-bottom-left-radius","-webkit-border-top-left-radius","-moz-border-radius-topleft","border-top-left-radius","width","height"],h=["html                 { height: 100%; }","body                 { height: 100%; padding: 1px 0 0 0; margin: -1px 0 0 0; }","body > p:first-child { margin-top: 0; }","._wysihtml5-temp     { display: none; }",a.browser.isGecko?"body.placeholder { color: graytext !important; }":"body.placeholder { color: #a9a9a9 !important; }","img:-moz-broken      { -moz-force-broken-image-icon: 1; height: 24px; width: 24px; }"],i=function(a){if(a.setActive)try{a.setActive()}catch(e){}else{var f=a.style,g=c.documentElement.scrollTop||c.body.scrollTop,h=c.documentElement.scrollLeft||c.body.scrollLeft,i={position:f.position,top:f.top,left:f.left,WebkitUserSelect:f.WebkitUserSelect};b.setStyles({position:"absolute",top:"-99999px",left:"-99999px",WebkitUserSelect:"none"}).on(a),a.focus(),b.setStyles(i).on(a),d.scrollTo&&d.scrollTo(h,g)}};a.views.Composer.prototype.style=function(){var d,j=this,k=c.querySelector(":focus"),l=this.textarea.element,m=l.hasAttribute("placeholder"),n=m&&l.getAttribute("placeholder"),o=l.style.display,p=l.disabled;this.focusStylesHost=e.cloneNode(!1),this.blurStylesHost=e.cloneNode(!1),this.disabledStylesHost=e.cloneNode(!1),m&&l.removeAttribute("placeholder"),l===k&&l.blur(),l.disabled=!1,l.style.display=d="none",(l.getAttribute("rows")&&"auto"===b.getStyle("height").from(l)||l.getAttribute("cols")&&"auto"===b.getStyle("width").from(l))&&(l.style.display=d=o),b.copyStyles(g).from(l).to(this.editableArea).andTo(this.blurStylesHost),b.copyStyles(f).from(l).to(this.element).andTo(this.blurStylesHost),b.insertCSS(h).into(this.element.ownerDocument),l.disabled=!0,b.copyStyles(g).from(l).to(this.disabledStylesHost),b.copyStyles(f).from(l).to(this.disabledStylesHost),l.disabled=p,l.style.display=o,i(l),l.style.display=d,b.copyStyles(g).from(l).to(this.focusStylesHost),b.copyStyles(f).from(l).to(this.focusStylesHost),l.style.display=o,b.copyStyles(["display"]).from(l).to(this.editableArea);var q=a.lang.array(g).without(["display"]);return k?k.focus():l.blur(),m&&l.setAttribute("placeholder",n),this.parent.on("focus:composer",function(){b.copyStyles(q).from(j.focusStylesHost).to(j.editableArea),b.copyStyles(f).from(j.focusStylesHost).to(j.element)}),this.parent.on("blur:composer",function(){b.copyStyles(q).from(j.blurStylesHost).to(j.editableArea),b.copyStyles(f).from(j.blurStylesHost).to(j.element)}),this.parent.observe("disable:composer",function(){b.copyStyles(q).from(j.disabledStylesHost).to(j.editableArea),b.copyStyles(f).from(j.disabledStylesHost).to(j.element)}),this.parent.observe("enable:composer",function(){b.copyStyles(q).from(j.blurStylesHost).to(j.editableArea),b.copyStyles(f).from(j.blurStylesHost).to(j.element)}),this}}(wysihtml5),function(a){var b=a.dom,c=a.browser,d={66:"bold",73:"italic",85:"underline"},e=function(a,b,c){var d=a.getPreviousNode(b,!0),e=a.getSelectedNode();if(1!==e.nodeType&&e.parentNode!==c&&(e=e.parentNode),d)if(1==e.nodeType){var f=e.firstChild;if(1==d.nodeType)for(;e.firstChild;)d.appendChild(e.firstChild);else for(;e.firstChild;)b.parentNode.insertBefore(e.firstChild,b);e.parentNode&&e.parentNode.removeChild(e),a.setBefore(f)}else 1==d.nodeType?d.appendChild(e):b.parentNode.insertBefore(e,b),a.setBefore(e)},f=function(a,b,c,d){if(b.isCollapsed())if(b.caretIsInTheBeginnig("LI"))a.preventDefault(),d.commands.exec("outdentList");else if(b.caretIsInTheBeginnig())a.preventDefault();else{var f=b.caretIsBeforeUneditable();f&&(a.preventDefault(),e(b,f,c))}else b.containsUneditable()&&(a.preventDefault(),b.deleteContents())},g=function(a){if(a.selection.isCollapsed()){if(a.selection.caretIsInTheBeginnig("LI")&&a.commands.exec("indentList"))return}else a.selection.deleteContents();a.commands.exec("insertHTML","&emsp;")};a.views.Composer.prototype.observe=function(){var e=this,h=this.getValue(!1,!1),i=this.sandbox.getIframe?this.sandbox.getIframe():this.sandbox.getContentEditable(),j=this.element,k=c.supportsEventsInIframeCorrectly()||this.sandbox.getContentEditable?j:this.sandbox.getWindow(),l=["drop","paste"],m=["drop","paste","mouseup","focus","keyup"];if(b.observe(i,"DOMNodeRemoved",function(){clearInterval(n),e.parent.fire("destroy:composer")}),!c.supportsMutationEvents())var n=setInterval(function(){b.contains(document.documentElement,i)||(clearInterval(n),e.parent.fire("destroy:composer"))},250);b.observe(k,m,function(){setTimeout(function(){e.parent.fire("interaction").fire("interaction:composer")},0)}),this.config.handleTables&&(this.doc.execCommand&&a.browser.supportsCommand(this.doc,"enableObjectResizing")&&a.browser.supportsCommand(this.doc,"enableInlineTableEditing")&&setTimeout(function(){e.doc.execCommand("enableObjectResizing",!1,"false"),e.doc.execCommand("enableInlineTableEditing",!1,"false")},0),this.tableSelection=a.quirks.tableCellsSelection(j,e.parent)),b.observe(k,"focus",function(){e.parent.fire("focus").fire("focus:composer"),setTimeout(function(){h=e.getValue(!1,!1)},0)}),b.observe(k,"blur",function(){h!==e.getValue(!1,!1)&&e.parent.fire("change").fire("change:composer"),e.parent.fire("blur").fire("blur:composer")}),b.observe(j,"dragenter",function(){e.parent.fire("unset_placeholder")}),b.observe(j,l,function(){setTimeout(function(){e.parent.fire("paste").fire("paste:composer")},0)}),b.observe(j,"keyup",function(b){var c=b.keyCode;(c===a.SPACE_KEY||c===a.ENTER_KEY)&&e.parent.fire("newword:composer")}),this.parent.on("paste:composer",function(){setTimeout(function(){e.parent.fire("newword:composer")},0)}),c.canSelectImagesInContentEditable()||b.observe(j,"mousedown",function(b){var c=b.target,d=j.querySelectorAll("img"),f=j.querySelectorAll("."+e.config.uneditableContainerClassname+" img"),g=a.lang.array(d).without(f);"IMG"===c.nodeName&&a.lang.array(g).contains(c)&&e.selection.selectNode(c)}),c.canSelectImagesInContentEditable()||b.observe(j,"drop",function(){setTimeout(function(){e.selection.getSelection().removeAllRanges()},0)}),c.hasHistoryIssue()&&c.supportsSelectionModify()&&b.observe(j,"keydown",function(a){if(a.metaKey||a.ctrlKey){var b=a.keyCode,c=j.ownerDocument.defaultView,d=c.getSelection();(37===b||39===b)&&(37===b&&(d.modify("extend","left","lineboundary"),a.shiftKey||d.collapseToStart()),39===b&&(d.modify("extend","right","lineboundary"),a.shiftKey||d.collapseToEnd()),a.preventDefault())}}),b.observe(j,"keydown",function(a){var b=a.keyCode,c=d[b];(a.ctrlKey||a.metaKey)&&!a.altKey&&c&&(e.commands.exec(c),a.preventDefault()),8===b?f(a,e.selection,j,e):e.config.handleTabKey&&9===b&&(a.preventDefault(),g(e,j))}),b.observe(j,"keydown",function(b){var c,d=e.selection.getSelectedNode(!0),f=b.keyCode;!d||"IMG"!==d.nodeName||f!==a.BACKSPACE_KEY&&f!==a.DELETE_KEY||(c=d.parentNode,c.removeChild(d),"A"!==c.nodeName||c.firstChild||c.parentNode.removeChild(c),setTimeout(function(){a.quirks.redraw(j)},0),b.preventDefault())}),!this.config.contentEditableMode&&c.hasIframeFocusIssue()&&(b.observe(i,"focus",function(){setTimeout(function(){e.doc.querySelector(":focus")!==e.element&&e.focus()},0)}),b.observe(this.element,"blur",function(){setTimeout(function(){e.selection.getSelection().removeAllRanges()},0)}));var o={IMG:"Image: ",A:"Link: "};b.observe(j,"mouseover",function(a){var b,c=a.target,d=c.nodeName;if("A"===d||"IMG"===d){var e=c.hasAttribute("title");e||(b=o[d]+(c.getAttribute("href")||c.getAttribute("src")),c.setAttribute("title",b))}})}}(wysihtml5),function(a){var b=400;a.views.Synchronizer=Base.extend({constructor:function(a,b,c){this.editor=a,this.textarea=b,this.composer=c,this._observe()},fromComposerToTextarea:function(b){this.textarea.setValue(a.lang.string(this.composer.getValue(!1,!1)).trim(),b)},fromTextareaToComposer:function(a){var b=this.textarea.getValue(!1,!1);b?this.composer.setValue(b,a):(this.composer.clear(),this.editor.fire("set_placeholder"))},sync:function(a){"textarea"===this.editor.currentView.name?this.fromTextareaToComposer(a):this.fromComposerToTextarea(a)},_observe:function(){var c,d=this,e=this.textarea.element.form,f=function(){c=setInterval(function(){d.fromComposerToTextarea()},b)},g=function(){clearInterval(c),c=null};f(),e&&(a.dom.observe(e,"submit",function(){d.sync(!0)}),a.dom.observe(e,"reset",function(){setTimeout(function(){d.fromTextareaToComposer()},0)})),this.editor.on("change_view",function(a){"composer"!==a||c?"textarea"===a&&(d.fromComposerToTextarea(!0),g()):(d.fromTextareaToComposer(!0),f())}),this.editor.on("destroy:composer",g)}})}(wysihtml5),wysihtml5.views.Textarea=wysihtml5.views.View.extend({name:"textarea",constructor:function(a,b,c){this.base(a,b,c),this._observe()},clear:function(){this.element.value=""},getValue:function(a){var b=this.isEmpty()?"":this.element.value;return a!==!1&&(b=this.parent.parse(b)),b},setValue:function(a,b){b&&(a=this.parent.parse(a)),this.element.value=a},cleanUp:function(){var a=this.parent.parse(this.element.value);this.element.value=a},hasPlaceholderSet:function(){var a=wysihtml5.browser.supportsPlaceholderAttributeOn(this.element),b=this.element.getAttribute("placeholder")||null,c=this.element.value,d=!c;
return a&&d||c===b},isEmpty:function(){return!wysihtml5.lang.string(this.element.value).trim()||this.hasPlaceholderSet()},_observe:function(){var a=this.element,b=this.parent,c={focusin:"focus",focusout:"blur"},d=wysihtml5.browser.supportsEvent("focusin")?["focusin","focusout","change"]:["focus","blur","change"];b.on("beforeload",function(){wysihtml5.dom.observe(a,d,function(a){var d=c[a.type]||a.type;b.fire(d).fire(d+":textarea")}),wysihtml5.dom.observe(a,["paste","drop"],function(){setTimeout(function(){b.fire("paste").fire("paste:textarea")},0)})})}}),function(a){var b,c={name:b,style:!0,toolbar:b,showToolbarAfterInit:!0,autoLink:!0,handleTables:!0,handleTabKey:!0,parserRules:{tags:{br:{},span:{},div:{},p:{}},classes:{}},parser:a.dom.parse,composerClassName:"wysihtml5-editor",bodyClassName:"wysihtml5-supported",useLineBreaks:!0,stylesheets:[],placeholderText:b,supportTouchDevices:!0,cleanUp:!0,contentEditableMode:!1,uneditableContainerClassname:"wysihtml5-uneditable-container"};a.Editor=a.lang.Dispatcher.extend({constructor:function(b,d){if(this.editableElement="string"==typeof b?document.getElementById(b):b,this.config=a.lang.object({}).merge(c).merge(d).get(),this._isCompatible=a.browser.supported(),"textarea"!=this.editableElement.nodeName.toLowerCase()&&(this.config.contentEditableMode=!0,this.config.noTextarea=!0),this.config.noTextarea||(this.textarea=new a.views.Textarea(this,this.editableElement,this.config),this.currentView=this.textarea),!this._isCompatible||!this.config.supportTouchDevices&&a.browser.isTouchDevice()){var e=this;return void setTimeout(function(){e.fire("beforeload").fire("load")},0)}a.dom.addClass(document.body,this.config.bodyClassName),this.composer=new a.views.Composer(this,this.editableElement,this.config),this.currentView=this.composer,"function"==typeof this.config.parser&&this._initParser(),this.on("beforeload",this.handleBeforeLoad)},handleBeforeLoad:function(){this.config.noTextarea||(this.synchronizer=new a.views.Synchronizer(this,this.textarea,this.composer)),this.config.toolbar&&(this.toolbar=new a.toolbar.Toolbar(this,this.config.toolbar,this.config.showToolbarAfterInit))},isCompatible:function(){return this._isCompatible},clear:function(){return this.currentView.clear(),this},getValue:function(a,b){return this.currentView.getValue(a,b)},setValue:function(a,b){return this.fire("unset_placeholder"),a?(this.currentView.setValue(a,b),this):this.clear()},cleanUp:function(){this.currentView.cleanUp()},focus:function(a){return this.currentView.focus(a),this},disable:function(){return this.currentView.disable(),this},enable:function(){return this.currentView.enable(),this},isEmpty:function(){return this.currentView.isEmpty()},hasPlaceholderSet:function(){return this.currentView.hasPlaceholderSet()},parse:function(b,c){var d=this.config.contentEditableMode?document:this.composer?this.composer.sandbox.getDocument():null,e=this.config.parser(b,{rules:this.config.parserRules,cleanUp:this.config.cleanUp,context:d,uneditableClass:this.config.uneditableContainerClassname,clearInternals:c});return"object"==typeof b&&a.quirks.redraw(b),e},_initParser:function(){this.on("paste:composer",function(){var b=!0,c=this;c.composer.selection.executeAndRestore(function(){a.quirks.cleanPastedHTML(c.composer.element),c.parse(c.composer.element)},b)})}})}(wysihtml5),function(a){var b=a.dom,c="wysihtml5-command-dialog-opened",d="input, select, textarea",e="[data-wysihtml5-dialog-field]",f="data-wysihtml5-dialog-field";a.toolbar.Dialog=a.lang.Dispatcher.extend({constructor:function(a,b){this.link=a,this.container=b},_observe:function(){if(!this._observed){var e=this,f=function(a){var b=e._serialize();b==e.elementToChange?e.fire("edit",b):e.fire("save",b),e.hide(),a.preventDefault(),a.stopPropagation()};b.observe(e.link,"click",function(){b.hasClass(e.link,c)&&setTimeout(function(){e.hide()},0)}),b.observe(this.container,"keydown",function(b){var c=b.keyCode;c===a.ENTER_KEY&&f(b),c===a.ESCAPE_KEY&&(e.fire("cancel"),e.hide())}),b.delegate(this.container,"[data-wysihtml5-dialog-action=save]","click",f),b.delegate(this.container,"[data-wysihtml5-dialog-action=cancel]","click",function(a){e.fire("cancel"),e.hide(),a.preventDefault(),a.stopPropagation()});for(var g=this.container.querySelectorAll(d),h=0,i=g.length,j=function(){clearInterval(e.interval)};i>h;h++)b.observe(g[h],"change",j);this._observed=!0}},_serialize:function(){for(var a=this.elementToChange||{},b=this.container.querySelectorAll(e),c=b.length,d=0;c>d;d++)a[b[d].getAttribute(f)]=b[d].value;return a},_interpolate:function(a){for(var b,c,d,g=document.querySelector(":focus"),h=this.container.querySelectorAll(e),i=h.length,j=0;i>j;j++)b=h[j],b!==g&&(a&&"hidden"===b.type||(c=b.getAttribute(f),d=this.elementToChange&&"boolean"!=typeof this.elementToChange?this.elementToChange.getAttribute(c)||"":b.defaultValue,b.value=d))},show:function(a){if(!b.hasClass(this.link,c)){var e=this,f=this.container.querySelector(d);if(this.elementToChange=a,this._observe(),this._interpolate(),a&&(this.interval=setInterval(function(){e._interpolate(!0)},500)),b.addClass(this.link,c),this.container.style.display="",this.fire("show"),f&&!a)try{f.focus()}catch(g){}}},hide:function(){clearInterval(this.interval),this.elementToChange=null,b.removeClass(this.link,c),this.container.style.display="none",this.fire("hide")}})}(wysihtml5),function(a){var b=a.dom,c={position:"relative"},d={left:0,margin:0,opacity:0,overflow:"hidden",padding:0,position:"absolute",top:0,zIndex:1},e={cursor:"inherit",fontSize:"50px",height:"50px",marginTop:"-25px",outline:0,padding:0,position:"absolute",right:"-4px",top:"50%"},f={"x-webkit-speech":"",speech:""};a.toolbar.Speech=function(g,h){var i=document.createElement("input");if(!a.browser.supportsSpeechApiOn(i))return void(h.style.display="none");var j=g.editor.textarea.element.getAttribute("lang");j&&(f.lang=j);var k=document.createElement("div");a.lang.object(d).merge({width:h.offsetWidth+"px",height:h.offsetHeight+"px"}),b.insert(i).into(k),b.insert(k).into(h),b.setStyles(e).on(i),b.setAttributes(f).on(i),b.setStyles(d).on(k),b.setStyles(c).on(h);var l="onwebkitspeechchange"in i?"webkitspeechchange":"speechchange";b.observe(i,l,function(){g.execCommand("insertText",i.value),i.value=""}),b.observe(i,"click",function(a){b.hasClass(h,"wysihtml5-command-disabled")&&a.preventDefault(),a.stopPropagation()})}}(wysihtml5),function(a){var b="wysihtml5-command-disabled",c="wysihtml5-commands-disabled",d="wysihtml5-command-active",e="wysihtml5-action-active",f=a.dom;a.toolbar.Toolbar=Base.extend({constructor:function(b,c,d){this.editor=b,this.container="string"==typeof c?document.getElementById(c):c,this.composer=b.composer,this._getLinks("command"),this._getLinks("action"),this._observe(),d&&this.show();for(var e=this.container.querySelectorAll("[data-wysihtml5-command=insertSpeech]"),f=e.length,g=0;f>g;g++)new a.toolbar.Speech(this,e[g])},_getLinks:function(b){for(var c,d,e,f,g,h=this[b+"Links"]=a.lang.array(this.container.querySelectorAll("[data-wysihtml5-"+b+"]")).get(),i=h.length,j=0,k=this[b+"Mapping"]={};i>j;j++)c=h[j],e=c.getAttribute("data-wysihtml5-"+b),f=c.getAttribute("data-wysihtml5-"+b+"-value"),d=this.container.querySelector("[data-wysihtml5-"+b+"-group='"+e+"']"),g=this._getDialog(c,e),k[e+":"+f]={link:c,group:d,name:e,value:f,dialog:g,state:!1}},_getDialog:function(b,c){var d,e,f=this,g=this.container.querySelector("[data-wysihtml5-dialog='"+c+"']");return g&&(d=a.toolbar["Dialog_"+c]?new a.toolbar["Dialog_"+c](b,g):new a.toolbar.Dialog(b,g),d.on("show",function(){e=f.composer.selection.getBookmark(),f.editor.fire("show:dialog",{command:c,dialogContainer:g,commandLink:b})}),d.on("save",function(a){e&&f.composer.selection.setBookmark(e),f._execCommand(c,a),f.editor.fire("save:dialog",{command:c,dialogContainer:g,commandLink:b})}),d.on("cancel",function(){f.editor.focus(!1),f.editor.fire("cancel:dialog",{command:c,dialogContainer:g,commandLink:b})})),d},execCommand:function(a,b){if(!this.commandsDisabled){var c=this.commandMapping[a+":"+b];c&&c.dialog&&!c.state?c.dialog.show():this._execCommand(a,b)}},_execCommand:function(a,b){this.editor.focus(!1),this.composer.commands.exec(a,b),this._updateLinkStates()},execAction:function(a){var b=this.editor;"change_view"===a&&b.textarea&&(b.currentView===b.textarea?b.fire("change_view","composer"):b.fire("change_view","textarea")),"showSource"==a&&b.fire("showSource")},_observe:function(){for(var a=this,b=this.editor,d=this.container,e=this.commandLinks.concat(this.actionLinks),g=e.length,h=0;g>h;h++)"A"===e[h].nodeName?f.setAttributes({href:"javascript:;",unselectable:"on"}).on(e[h]):f.setAttributes({unselectable:"on"}).on(e[h]);f.delegate(d,"[data-wysihtml5-command], [data-wysihtml5-action]","mousedown",function(a){a.preventDefault()}),f.delegate(d,"[data-wysihtml5-command]","click",function(b){var c=this,d=c.getAttribute("data-wysihtml5-command"),e=c.getAttribute("data-wysihtml5-command-value");a.execCommand(d,e),b.preventDefault()}),f.delegate(d,"[data-wysihtml5-action]","click",function(b){var c=this.getAttribute("data-wysihtml5-action");a.execAction(c),b.preventDefault()}),b.on("interaction:composer",function(){a._updateLinkStates()}),b.on("focus:composer",function(){a.bookmark=null}),this.editor.config.handleTables&&(b.on("tableselect:composer",function(){a.container.querySelectorAll('[data-wysihtml5-hiddentools="table"]')[0].style.display=""}),b.on("tableunselect:composer",function(){a.container.querySelectorAll('[data-wysihtml5-hiddentools="table"]')[0].style.display="none"})),b.on("change_view",function(e){b.textarea&&setTimeout(function(){a.commandsDisabled="composer"!==e,a._updateLinkStates(),a.commandsDisabled?f.addClass(d,c):f.removeClass(d,c)},0)})},_updateLinkStates:function(){var c,g,h,i,j=this.commandMapping,k=this.actionMapping;for(c in j)i=j[c],this.commandsDisabled?(g=!1,f.removeClass(i.link,d),i.group&&f.removeClass(i.group,d),i.dialog&&i.dialog.hide()):(g=this.composer.commands.state(i.name,i.value),f.removeClass(i.link,b),i.group&&f.removeClass(i.group,b)),i.state!==g&&(i.state=g,g?(f.addClass(i.link,d),i.group&&f.addClass(i.group,d),i.dialog&&("object"==typeof g||a.lang.object(g).isArray()?(!i.dialog.multiselect&&a.lang.object(g).isArray()&&(g=1===g.length?g[0]:!0,i.state=g),i.dialog.show(g)):i.dialog.hide())):(f.removeClass(i.link,d),i.group&&f.removeClass(i.group,d),i.dialog&&i.dialog.hide()));for(c in k)h=k[c],"change_view"===h.name&&(h.state=this.editor.currentView===this.editor.textarea,h.state?f.addClass(h.link,e):f.removeClass(h.link,e))},show:function(){this.container.style.display=""},hide:function(){this.container.style.display="none"}})}(wysihtml5),function(a){a.toolbar.Dialog_createTable=a.toolbar.Dialog.extend({show:function(a){this.base(a)}})}(wysihtml5),function(a){var b=(a.dom,"[data-wysihtml5-dialog-field]"),c="data-wysihtml5-dialog-field";a.toolbar.Dialog_foreColorStyle=a.toolbar.Dialog.extend({multiselect:!0,_serialize:function(){for(var a={},d=this.container.querySelectorAll(b),e=d.length,f=0;e>f;f++)a[d[f].getAttribute(c)]=d[f].value;return a},_interpolate:function(d){for(var e,f=document.querySelector(":focus"),g=this.container.querySelectorAll(b),h=g.length,i=0,j=this.elementToChange?a.lang.object(this.elementToChange).isArray()?this.elementToChange[0]:this.elementToChange:null,k=j?j.getAttribute("style"):null,l=k?a.quirks.styleParser.parseColor(k,"color"):null;h>i;i++)e=g[i],e!==f&&(d&&"hidden"===e.type||"color"===e.getAttribute(c)&&(e.value=l?l[3]&&1!=l[3]?"rgba("+l[0]+","+l[1]+","+l[2]+","+l[3]+");":"rgb("+l[0]+","+l[1]+","+l[2]+");":"rgb(0,0,0);"))}})}(wysihtml5),function(a){a.dom;a.toolbar.Dialog_fontSizeStyle=a.toolbar.Dialog.extend({multiselect:!0,_serialize:function(){return{size:this.container.querySelector('[data-wysihtml5-dialog-field="size"]').value}},_interpolate:function(){var b=document.querySelector(":focus"),c=this.container.querySelector("[data-wysihtml5-dialog-field='size']"),d=this.elementToChange?a.lang.object(this.elementToChange).isArray()?this.elementToChange[0]:this.elementToChange:null,e=d?d.getAttribute("style"):null,f=e?a.quirks.styleParser.parseFontSize(e):null;c&&c!==b&&f&&!/^\s*$/.test(f)&&(c.value=f)}})}(wysihtml5);var Handlebars=function(){var a=function(){"use strict";function a(a){this.string=a}var b;return a.prototype.toString=function(){return""+this.string},b=a}(),b=function(a){"use strict";function b(a){return h[a]||"&amp;"}function c(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])}function d(a){return a instanceof g?a.toString():a||0===a?(a=""+a,j.test(a)?a.replace(i,b):a):""}function e(a){return a||0===a?m(a)&&0===a.length?!0:!1:!0}var f={},g=a,h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},i=/[&<>"'`]/g,j=/[&<>"'`]/;f.extend=c;var k=Object.prototype.toString;f.toString=k;var l=function(a){return"function"==typeof a};l(/x/)&&(l=function(a){return"function"==typeof a&&"[object Function]"===k.call(a)});var l;f.isFunction=l;var m=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===k.call(a):!1};return f.isArray=m,f.escapeExpression=d,f.isEmpty=e,f}(a),c=function(){"use strict";function a(a,b){var d;b&&b.firstLine&&(d=b.firstLine,a+=" - "+d+":"+b.firstColumn);for(var e=Error.prototype.constructor.call(this,a),f=0;f<c.length;f++)this[c[f]]=e[c[f]];d&&(this.lineNumber=d,this.column=b.firstColumn)}var b,c=["description","fileName","lineNumber","message","name","number","stack"];return a.prototype=new Error,b=a}(),d=function(a,b){"use strict";function c(a,b){this.helpers=a||{},this.partials=b||{},d(this)}function d(a){a.registerHelper("helperMissing",function(a){if(2===arguments.length)return void 0;throw new h("Missing helper: '"+a+"'")}),a.registerHelper("blockHelperMissing",function(b,c){var d=c.inverse||function(){},e=c.fn;return m(b)&&(b=b.call(this)),b===!0?e(this):b===!1||null==b?d(this):l(b)?b.length>0?a.helpers.each(b,c):d(this):e(b)}),a.registerHelper("each",function(a,b){var c,d=b.fn,e=b.inverse,f=0,g="";if(m(a)&&(a=a.call(this)),b.data&&(c=q(b.data)),a&&"object"==typeof a)if(l(a))for(var h=a.length;h>f;f++)c&&(c.index=f,c.first=0===f,c.last=f===a.length-1),g+=d(a[f],{data:c});else for(var i in a)a.hasOwnProperty(i)&&(c&&(c.key=i,c.index=f,c.first=0===f),g+=d(a[i],{data:c}),f++);return 0===f&&(g=e(this)),g}),a.registerHelper("if",function(a,b){return m(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||g.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})}),a.registerHelper("with",function(a,b){return m(a)&&(a=a.call(this)),g.isEmpty(a)?void 0:b.fn(a)}),a.registerHelper("log",function(b,c){var d=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;a.log(d,b)})}function e(a,b){p.log(a,b)}var f={},g=a,h=b,i="1.3.0";f.VERSION=i;var j=4;f.COMPILER_REVISION=j;var k={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};f.REVISION_CHANGES=k;var l=g.isArray,m=g.isFunction,n=g.toString,o="[object Object]";f.HandlebarsEnvironment=c,c.prototype={constructor:c,logger:p,log:e,registerHelper:function(a,b,c){if(n.call(a)===o){if(c||b)throw new h("Arg not supported with multiple helpers");g.extend(this.helpers,a)}else c&&(b.not=c),this.helpers[a]=b},registerPartial:function(a,b){n.call(a)===o?g.extend(this.partials,a):this.partials[a]=b}};var p={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(a,b){if(p.level<=a){var c=p.methodMap[a];"undefined"!=typeof console&&console[c]&&console[c].call(console,b)}}};f.logger=p,f.log=e;var q=function(a){var b={};return g.extend(b,a),b};return f.createFrame=q,f}(b,c),e=function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=m;if(b!==c){if(c>b){var d=n[c],e=n[b];throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){if(!b)throw new l("No environment passed to template");var c=function(a,c,d,e,f,g){var h=b.VM.invokePartial.apply(this,arguments);if(null!=h)return h;if(b.compile){var i={helpers:e,partials:f,data:g};return f[c]=b.compile(a,{data:void 0!==g},b),f[c](d,i)}throw new l("The partial "+c+" could not be compiled when running in runtime-only mode")},d={escapeExpression:k.escapeExpression,invokePartial:c,programs:[],program:function(a,b,c){var d=this.programs[a];return c?d=g(a,b,c):d||(d=this.programs[a]=g(a,b)),d},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c={},k.extend(c,b),k.extend(c,a)),c},programWithDepth:b.VM.programWithDepth,noop:b.VM.noop,compilerInfo:null};return function(c,e){e=e||{};var f,g,h=e.partial?e:b;e.partial||(f=e.helpers,g=e.partials);var i=a.call(d,h,c,f,g,e.data);return e.partial||b.VM.checkRevision(d.compilerInfo),i}}function f(a,b,c){var d=Array.prototype.slice.call(arguments,3),e=function(a,e){return e=e||{},b.apply(this,[a,e.data||c].concat(d))};return e.program=a,e.depth=d.length,e}function g(a,b,c){var d=function(a,d){return d=d||{},b(a,d.data||c)};return d.program=a,d.depth=0,d}function h(a,b,c,d,e,f){var g={partial:!0,helpers:d,partials:e,data:f};if(void 0===a)throw new l("The partial "+b+" could not be found");return a instanceof Function?a(c,g):void 0}function i(){return""}var j={},k=a,l=b,m=c.COMPILER_REVISION,n=c.REVISION_CHANGES;return j.checkRevision=d,j.template=e,j.programWithDepth=f,j.program=g,j.invokePartial=h,j.noop=i,j}(b,c,d),f=function(a,b,c,d,e){"use strict";var f,g=a,h=b,i=c,j=d,k=e,l=function(){var a=new g.HandlebarsEnvironment;return j.extend(a,g),a.SafeString=h,a.Exception=i,a.Utils=j,a.VM=k,a.template=function(b){return k.template(b,a)},a},m=l();return m.create=l,f=m}(d,a,c,b,e);return f}();this.wysihtml5=this.wysihtml5||{},this.wysihtml5.tpl=this.wysihtml5.tpl||{},this.wysihtml5.tpl.blockquote=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="btn-"+l((b=a&&a.options,b=null==b||b===!1?b:b.toolbar,b=null==b||b===!1?b:b.size,typeof b===k?b.apply(a):b))}function g(){return' \n      <span class="fa fa-quote-left"></span>\n    '}function h(){return'\n      <span class="glyphicon glyphicon-quote"></span>\n    '}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var i,j="",k="function",l=this.escapeExpression,m=this;return j+='<li>\n  <a class="btn ',i=c["if"].call(b,(i=b&&b.options,i=null==i||i===!1?i:i.toolbar,null==i||i===!1?i:i.size),{hash:{},inverse:m.noop,fn:m.program(1,f,e),data:e}),(i||0===i)&&(j+=i),j+=' btn-default" data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="blockquote" data-wysihtml5-display-format-name="false" tabindex="-1">\n    ',i=c["if"].call(b,(i=b&&b.options,i=null==i||i===!1?i:i.toolbar,null==i||i===!1?i:i.fa),{hash:{},inverse:m.program(5,h,e),fn:m.program(3,g,e),data:e}),(i||0===i)&&(j+=i),j+="\n  </a>\n</li>\n"}),this.wysihtml5.tpl.color=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="btn-"+j((b=a&&a.options,b=null==b||b===!1?b:b.toolbar,b=null==b||b===!1?b:b.size,typeof b===i?b.apply(a):b))}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h="",i="function",j=this.escapeExpression,k=this;return h+='<li class="dropdown">\n  <a class="btn btn-default dropdown-toggle ',g=c["if"].call(b,(g=b&&b.options,g=null==g||g===!1?g:g.toolbar,null==g||g===!1?g:g.size),{hash:{},inverse:k.noop,fn:k.program(1,f,e),data:e}),(g||0===g)&&(h+=g),h+='" data-toggle="dropdown" tabindex="-1">\n    <span class="current-color">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.black,typeof g===i?g.apply(b):g))+'</span>\n    <b class="caret"></b>\n  </a>\n  <ul class="dropdown-menu">\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="black"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="black">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.black,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="silver"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="silver">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.silver,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="gray"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="gray">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.gray,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="maroon"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="maroon">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.maroon,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="red"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="red">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.red,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="purple"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="purple">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.purple,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="green"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="green">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.green,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="olive"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="olive">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.olive,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="navy"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="navy">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.navy,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="blue"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="blue">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.blue,typeof g===i?g.apply(b):g))+'</a></li>\n    <li><div class="wysihtml5-colors" data-wysihtml5-command-value="orange"></div><a class="wysihtml5-colors-title" data-wysihtml5-command="foreColor" data-wysihtml5-command-value="orange">'+j((g=b&&b.locale,g=null==g||g===!1?g:g.colours,g=null==g||g===!1?g:g.orange,typeof g===i?g.apply(b):g))+"</a></li>\n  </ul>\n</li>\n"}),this.wysihtml5.tpl.emphasis=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="btn-"+k((b=a&&a.options,b=null==b||b===!1?b:b.toolbar,b=null==b||b===!1?b:b.size,typeof b===j?b.apply(a):b))}function g(a,b){var d,e="";return e+='\n    <a class="btn ',d=c["if"].call(a,(d=a&&a.options,d=null==d||d===!1?d:d.toolbar,null==d||d===!1?d:d.size),{hash:{},inverse:l.noop,fn:l.program(1,f,b),data:b}),(d||0===d)&&(e+=d),e+=' btn-default" data-wysihtml5-command="small" title="CTRL+S" tabindex="-1">'+k((d=a&&a.locale,d=null==d||d===!1?d:d.emphasis,d=null==d||d===!1?d:d.small,typeof d===j?d.apply(a):d))+"</a>\n    "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var h,i="",j="function",k=this.escapeExpression,l=this;return i+='<li>\n  <div class="btn-group">\n    <a class="btn ',h=c["if"].call(b,(h=b&&b.options,h=null==h||h===!1?h:h.toolbar,null==h||h===!1?h:h.size),{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+=' btn-default" data-wysihtml5-command="bold" title="CTRL+B" tabindex="-1">'+k((h=b&&b.locale,h=null==h||h===!1?h:h.emphasis,h=null==h||h===!1?h:h.bold,typeof h===j?h.apply(b):h))+'</a>\n    <a class="btn ',h=c["if"].call(b,(h=b&&b.options,h=null==h||h===!1?h:h.toolbar,null==h||h===!1?h:h.size),{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+=' btn-default" data-wysihtml5-command="italic" title="CTRL+I" tabindex="-1">'+k((h=b&&b.locale,h=null==h||h===!1?h:h.emphasis,h=null==h||h===!1?h:h.italic,typeof h===j?h.apply(b):h))+'</a>\n    <a class="btn ',h=c["if"].call(b,(h=b&&b.options,h=null==h||h===!1?h:h.toolbar,null==h||h===!1?h:h.size),{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+=' btn-default" data-wysihtml5-command="underline" title="CTRL+U" tabindex="-1">'+k((h=b&&b.locale,h=null==h||h===!1?h:h.emphasis,h=null==h||h===!1?h:h.underline,typeof h===j?h.apply(b):h))+"</a>\n    ",h=c["if"].call(b,(h=b&&b.options,h=null==h||h===!1?h:h.toolbar,h=null==h||h===!1?h:h.emphasis,null==h||h===!1?h:h.small),{hash:{},inverse:l.noop,fn:l.program(3,g,e),data:e}),(h||0===h)&&(i+=h),i+="\n  </div>\n</li>\n"}),this.wysihtml5.tpl["font-styles"]=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="btn-"+l((b=a&&a.options,b=null==b||b===!1?b:b.toolbar,b=null==b||b===!1?b:b.size,typeof b===k?b.apply(a):b))}function g(){return'\n      <span class="fa fa-font"></span>\n    '}function h(){return'\n      <span class="glyphicon glyphicon-font"></span>\n    '}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var i,j="",k="function",l=this.escapeExpression,m=this;return j+='<li class="dropdown">\n  <a class="btn btn-default dropdown-toggle ',i=c["if"].call(b,(i=b&&b.options,i=null==i||i===!1?i:i.toolbar,null==i||i===!1?i:i.size),{hash:{},inverse:m.noop,fn:m.program(1,f,e),data:e}),(i||0===i)&&(j+=i),j+='" data-toggle="dropdown">\n    ',i=c["if"].call(b,(i=b&&b.options,i=null==i||i===!1?i:i.toolbar,null==i||i===!1?i:i.fa),{hash:{},inverse:m.program(5,h,e),fn:m.program(3,g,e),data:e}),(i||0===i)&&(j+=i),j+='\n    <span class="current-font">'+l((i=b&&b.locale,i=null==i||i===!1?i:i.font_styles,i=null==i||i===!1?i:i.normal,typeof i===k?i.apply(b):i))+'</span>\n    <b class="caret"></b>\n  </a>\n  <ul class="dropdown-menu">\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="p" tabindex="-1">'+l((i=b&&b.locale,i=null==i||i===!1?i:i.font_styles,i=null==i||i===!1?i:i.normal,typeof i===k?i.apply(b):i))+'</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h1" tabindex="-1">'+l((i=b&&b.locale,i=null==i||i===!1?i:i.font_styles,i=null==i||i===!1?i:i.h1,typeof i===k?i.apply(b):i))+'</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h2" tabindex="-1">'+l((i=b&&b.locale,i=null==i||i===!1?i:i.font_styles,i=null==i||i===!1?i:i.h2,typeof i===k?i.apply(b):i))+'</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h3" tabindex="-1">'+l((i=b&&b.locale,i=null==i||i===!1?i:i.font_styles,i=null==i||i===!1?i:i.h3,typeof i===k?i.apply(b):i))+'</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h4" tabindex="-1">'+l((i=b&&b.locale,i=null==i||i===!1?i:i.font_styles,i=null==i||i===!1?i:i.h4,typeof i===k?i.apply(b):i))+'</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h5" tabindex="-1">'+l((i=b&&b.locale,i=null==i||i===!1?i:i.font_styles,i=null==i||i===!1?i:i.h5,typeof i===k?i.apply(b):i))+'</a></li>\n    <li><a data-wysihtml5-command="formatBlock" data-wysihtml5-command-value="h6" tabindex="-1">'+l((i=b&&b.locale,i=null==i||i===!1?i:i.font_styles,i=null==i||i===!1?i:i.h6,typeof i===k?i.apply(b):i))+"</a></li>\n  </ul>\n</li>\n"}),this.wysihtml5.tpl.html=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="btn-"+l((b=a&&a.options,b=null==b||b===!1?b:b.toolbar,b=null==b||b===!1?b:b.size,typeof b===k?b.apply(a):b))}function g(){return'\n        <span class="fa fa-pencil"></span>\n      '}function h(){return'\n        <span class="glyphicon glyphicon-pencil"></span>\n      '}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var i,j="",k="function",l=this.escapeExpression,m=this;return j+='<li>\n  <div class="btn-group">\n    <a class="btn ',i=c["if"].call(b,(i=b&&b.options,i=null==i||i===!1?i:i.toolbar,null==i||i===!1?i:i.size),{hash:{},inverse:m.noop,fn:m.program(1,f,e),data:e}),(i||0===i)&&(j+=i),j+=' btn-default" data-wysihtml5-action="change_view" title="'+l((i=b&&b.locale,i=null==i||i===!1?i:i.html,i=null==i||i===!1?i:i.edit,typeof i===k?i.apply(b):i))+'" tabindex="-1">\n      ',i=c["if"].call(b,(i=b&&b.options,i=null==i||i===!1?i:i.toolbar,null==i||i===!1?i:i.fa),{hash:{},inverse:m.program(5,h,e),fn:m.program(3,g,e),data:e}),(i||0===i)&&(j+=i),j+="\n    </a>\n  </div>\n</li>\n"}),this.wysihtml5.tpl.image=Handlebars.template(function(a,b,c,d,e){function f(){return"modal-sm"}function g(a){var b,c="";return c+="btn-"+m((b=a&&a.options,b=null==b||b===!1?b:b.toolbar,b=null==b||b===!1?b:b.size,typeof b===l?b.apply(a):b))}function h(){return'\n      <span class="fa fa-file-image-o"></span>\n    '}function i(){return'\n      <span class="glyphicon glyphicon-picture"></span>\n    '}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var j,k="",l="function",m=this.escapeExpression,n=this;return k+='<li>\n  <div class="bootstrap-wysihtml5-insert-image-modal modal fade">\n    <div class="modal-dialog ',j=c["if"].call(b,(j=b&&b.options,j=null==j||j===!1?j:j.toolbar,null==j||j===!1?j:j.smallmodals),{hash:{},inverse:n.noop,fn:n.program(1,f,e),data:e}),(j||0===j)&&(k+=j),k+='">\n      <div class="modal-content">\n        <div class="modal-header">\n          <a class="close" data-dismiss="modal">&times;</a>\n          <h3>'+m((j=b&&b.locale,j=null==j||j===!1?j:j.image,j=null==j||j===!1?j:j.insert,typeof j===l?j.apply(b):j))+'</h3>\n        </div>\n        <div class="modal-body">\n          <input value="http://" class="bootstrap-wysihtml5-insert-image-url form-control">\n        </div>\n        <div class="modal-footer">\n          <a class="btn btn-default" data-dismiss="modal">'+m((j=b&&b.locale,j=null==j||j===!1?j:j.image,j=null==j||j===!1?j:j.cancel,typeof j===l?j.apply(b):j))+'</a>\n          <a class="btn btn-primary" data-dismiss="modal">'+m((j=b&&b.locale,j=null==j||j===!1?j:j.image,j=null==j||j===!1?j:j.insert,typeof j===l?j.apply(b):j))+'</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class="btn ',j=c["if"].call(b,(j=b&&b.options,j=null==j||j===!1?j:j.toolbar,null==j||j===!1?j:j.size),{hash:{},inverse:n.noop,fn:n.program(3,g,e),data:e}),(j||0===j)&&(k+=j),k+=' btn-default" data-wysihtml5-command="insertImage" title="'+m((j=b&&b.locale,j=null==j||j===!1?j:j.image,j=null==j||j===!1?j:j.insert,typeof j===l?j.apply(b):j))+'" tabindex="-1">\n    ',j=c["if"].call(b,(j=b&&b.options,j=null==j||j===!1?j:j.toolbar,null==j||j===!1?j:j.fa),{hash:{},inverse:n.program(7,i,e),fn:n.program(5,h,e),data:e}),(j||0===j)&&(k+=j),k+="\n  </a>\n</li>\n"}),this.wysihtml5.tpl.link=Handlebars.template(function(a,b,c,d,e){function f(){return"modal-sm"}function g(a){var b,c="";return c+="btn-"+m((b=a&&a.options,b=null==b||b===!1?b:b.toolbar,b=null==b||b===!1?b:b.size,typeof b===l?b.apply(a):b))}function h(){return'\n      <span class="fa fa-share-square-o"></span>\n    '}function i(){return'\n      <span class="glyphicon glyphicon-share"></span>\n    '}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var j,k="",l="function",m=this.escapeExpression,n=this;
return k+='<li>\n  <div class="bootstrap-wysihtml5-insert-link-modal modal fade">\n    <div class="modal-dialog ',j=c["if"].call(b,(j=b&&b.options,j=null==j||j===!1?j:j.toolbar,null==j||j===!1?j:j.smallmodals),{hash:{},inverse:n.noop,fn:n.program(1,f,e),data:e}),(j||0===j)&&(k+=j),k+='">\n      <div class="modal-content">\n        <div class="modal-header">\n          <a class="close" data-dismiss="modal">&times;</a>\n          <h3>'+m((j=b&&b.locale,j=null==j||j===!1?j:j.link,j=null==j||j===!1?j:j.insert,typeof j===l?j.apply(b):j))+'</h3>\n        </div>\n        <div class="modal-body">\n          <input value="http://" class="bootstrap-wysihtml5-insert-link-url form-control">\n          <label class="checkbox"> <input type="checkbox" class="bootstrap-wysihtml5-insert-link-target" checked>'+m((j=b&&b.locale,j=null==j||j===!1?j:j.link,j=null==j||j===!1?j:j.target,typeof j===l?j.apply(b):j))+'</label>\n        </div>\n        <div class="modal-footer">\n          <a class="btn btn-default" data-dismiss="modal">'+m((j=b&&b.locale,j=null==j||j===!1?j:j.link,j=null==j||j===!1?j:j.cancel,typeof j===l?j.apply(b):j))+'</a>\n          <a href="#" class="btn btn-primary" data-dismiss="modal">'+m((j=b&&b.locale,j=null==j||j===!1?j:j.link,j=null==j||j===!1?j:j.insert,typeof j===l?j.apply(b):j))+'</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <a class="btn ',j=c["if"].call(b,(j=b&&b.options,j=null==j||j===!1?j:j.toolbar,null==j||j===!1?j:j.size),{hash:{},inverse:n.noop,fn:n.program(3,g,e),data:e}),(j||0===j)&&(k+=j),k+=' btn-default" data-wysihtml5-command="createLink" title="'+m((j=b&&b.locale,j=null==j||j===!1?j:j.link,j=null==j||j===!1?j:j.insert,typeof j===l?j.apply(b):j))+'" tabindex="-1">\n    ',j=c["if"].call(b,(j=b&&b.options,j=null==j||j===!1?j:j.toolbar,null==j||j===!1?j:j.fa),{hash:{},inverse:n.program(7,i,e),fn:n.program(5,h,e),data:e}),(j||0===j)&&(k+=j),k+="\n  </a>\n</li>\n"}),this.wysihtml5.tpl.lists=Handlebars.template(function(a,b,c,d,e){function f(a){var b,c="";return c+="btn-"+r((b=a&&a.options,b=null==b||b===!1?b:b.toolbar,b=null==b||b===!1?b:b.size,typeof b===q?b.apply(a):b))}function g(){return'\n      <span class="fa fa-list-ul"></span>\n    '}function h(){return'\n      <span class="glyphicon glyphicon-list"></span>\n    '}function i(){return'\n      <span class="fa fa-list-ol"></span>\n    '}function j(){return'\n      <span class="glyphicon glyphicon-th-list"></span>\n    '}function k(){return'\n      <span class="fa fa-outdent"></span>\n    '}function l(){return'\n      <span class="glyphicon glyphicon-indent-right"></span>\n    '}function m(){return'\n      <span class="fa fa-indent"></span>\n    '}function n(){return'\n      <span class="glyphicon glyphicon-indent-left"></span>\n    '}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var o,p="",q="function",r=this.escapeExpression,s=this;return p+='<li>\n  <div class="btn-group">\n    <a class="btn ',o=c["if"].call(b,(o=b&&b.options,o=null==o||o===!1?o:o.toolbar,null==o||o===!1?o:o.size),{hash:{},inverse:s.noop,fn:s.program(1,f,e),data:e}),(o||0===o)&&(p+=o),p+=' btn-default" data-wysihtml5-command="insertUnorderedList" title="'+r((o=b&&b.locale,o=null==o||o===!1?o:o.lists,o=null==o||o===!1?o:o.unordered,typeof o===q?o.apply(b):o))+'" tabindex="-1">\n    ',o=c["if"].call(b,(o=b&&b.options,o=null==o||o===!1?o:o.toolbar,null==o||o===!1?o:o.fa),{hash:{},inverse:s.program(5,h,e),fn:s.program(3,g,e),data:e}),(o||0===o)&&(p+=o),p+='\n    </a>\n    <a class="btn ',o=c["if"].call(b,(o=b&&b.options,o=null==o||o===!1?o:o.toolbar,null==o||o===!1?o:o.size),{hash:{},inverse:s.noop,fn:s.program(1,f,e),data:e}),(o||0===o)&&(p+=o),p+=' btn-default" data-wysihtml5-command="insertOrderedList" title="'+r((o=b&&b.locale,o=null==o||o===!1?o:o.lists,o=null==o||o===!1?o:o.ordered,typeof o===q?o.apply(b):o))+'" tabindex="-1">\n    ',o=c["if"].call(b,(o=b&&b.options,o=null==o||o===!1?o:o.toolbar,null==o||o===!1?o:o.fa),{hash:{},inverse:s.program(9,j,e),fn:s.program(7,i,e),data:e}),(o||0===o)&&(p+=o),p+='\n    </a>\n    <a class="btn ',o=c["if"].call(b,(o=b&&b.options,o=null==o||o===!1?o:o.toolbar,null==o||o===!1?o:o.size),{hash:{},inverse:s.noop,fn:s.program(1,f,e),data:e}),(o||0===o)&&(p+=o),p+=' btn-default" data-wysihtml5-command="Outdent" title="'+r((o=b&&b.locale,o=null==o||o===!1?o:o.lists,o=null==o||o===!1?o:o.outdent,typeof o===q?o.apply(b):o))+'" tabindex="-1">\n    ',o=c["if"].call(b,(o=b&&b.options,o=null==o||o===!1?o:o.toolbar,null==o||o===!1?o:o.fa),{hash:{},inverse:s.program(13,l,e),fn:s.program(11,k,e),data:e}),(o||0===o)&&(p+=o),p+='\n    </a>\n    <a class="btn ',o=c["if"].call(b,(o=b&&b.options,o=null==o||o===!1?o:o.toolbar,null==o||o===!1?o:o.size),{hash:{},inverse:s.noop,fn:s.program(1,f,e),data:e}),(o||0===o)&&(p+=o),p+=' btn-default" data-wysihtml5-command="Indent" title="'+r((o=b&&b.locale,o=null==o||o===!1?o:o.lists,o=null==o||o===!1?o:o.indent,typeof o===q?o.apply(b):o))+'" tabindex="-1">\n    ',o=c["if"].call(b,(o=b&&b.options,o=null==o||o===!1?o:o.toolbar,null==o||o===!1?o:o.fa),{hash:{},inverse:s.program(17,n,e),fn:s.program(15,m,e),data:e}),(o||0===o)&&(p+=o),p+="\n    </a>\n  </div>\n</li>\n"}),function(a){"function"==typeof define&&define.amd?define("bootstrap.wysihtml5",["jquery","wysihtml5","bootstrap.wysihtml5.templates","bootstrap.wysihtml5.commands"],a):a(jQuery,wysihtml5)}(function(a,b){var c=function(a,b){"use strict";var c=function(a,c,d){return b.tpl[a]?b.tpl[a]({locale:c,options:d}):void 0},d=function(c,d){this.el=c;var e=a.extend(!0,{},f,d);for(var g in e.customTemplates)b.tpl[g]=e.customTemplates[g];this.toolbar=this.createToolbar(c,e),this.editor=this.createEditor(e),window.editor=this.editor,a("iframe.wysihtml5-sandbox").each(function(b,c){a(c.contentWindow).off("focus.wysihtml5").on({"focus.wysihtml5":function(){a("li.dropdown").removeClass("open")}})})};d.prototype={constructor:d,createEditor:function(c){c=c||{},c=a.extend(!0,{},c),c.toolbar=this.toolbar[0];var d=new b.Editor(this.el[0],c);if(d.composer.editableArea.contentDocument?this.addMoreShortcuts(d,d.composer.editableArea.contentDocument.body||d.composer.editableArea.contentDocument,c.shortcuts):this.addMoreShortcuts(d,d.composer.editableArea,c.shortcuts),c&&c.events)for(var e in c.events)d.on(e,c.events[e]);return d},createToolbar:function(b,d){var e=this,h=a("<ul/>",{"class":"wysihtml5-toolbar",style:"display:none"}),i=d.locale||f.locale||"en";g.hasOwnProperty(i)||(i="en");var j=a.extend(!0,{},g.en,g[i]);for(var k in d.toolbar)d.toolbar[k]&&(h.append(c(k,j,d)),"html"===k&&this.initHtml(h),"link"===k&&this.initInsertLink(h),"image"===k&&this.initInsertImage(h));return h.find('a[data-wysihtml5-command="formatBlock"]').click(function(b){var c=b.delegateTarget||b.target||b.srcElement,d=a(c),f=d.data("wysihtml5-display-format-name"),g=d.data("wysihtml5-format-name")||d.html();(void 0===f||"true"===f)&&e.toolbar.find(".current-font").text(g)}),h.find('a[data-wysihtml5-command="foreColor"]').click(function(b){var c=b.target||b.srcElement,d=a(c);e.toolbar.find(".current-color").text(d.html())}),this.el.before(h),h},initHtml:function(a){var b='a[data-wysihtml5-action="change_view"]';a.find(b).click(function(){a.find("a.btn").not(b).toggleClass("disabled")})},initInsertImage:function(b){var c,d=this,e=b.find(".bootstrap-wysihtml5-insert-image-modal"),f=e.find(".bootstrap-wysihtml5-insert-image-url"),g=e.find("a.btn-primary"),h=f.val(),i=function(){var a=f.val();f.val(h),d.editor.currentView.element.focus(),c&&(d.editor.composer.selection.setBookmark(c),c=null),d.editor.composer.commands.exec("insertImage",a)};f.keypress(function(a){13==a.which&&(i(),e.modal("hide"))}),g.click(i),e.on("shown",function(){f.focus()}),e.on("hide",function(){d.editor.currentView.element.focus()}),b.find("a[data-wysihtml5-command=insertImage]").click(function(){var b=a(this).hasClass("wysihtml5-command-active");return b?!0:(d.editor.currentView.element.focus(!1),c=d.editor.composer.selection.getBookmark(),e.appendTo("body").modal("show"),e.on("click.dismiss.modal",'[data-dismiss="modal"]',function(a){a.stopPropagation()}),!1)})},initInsertLink:function(b){var c,d=this,e=b.find(".bootstrap-wysihtml5-insert-link-modal"),f=e.find(".bootstrap-wysihtml5-insert-link-url"),g=e.find(".bootstrap-wysihtml5-insert-link-target"),h=e.find("a.btn-primary"),i=f.val(),j=function(){var a=f.val();f.val(i),d.editor.currentView.element.focus(),c&&(d.editor.composer.selection.setBookmark(c),c=null);var b=g.prop("checked");d.editor.composer.commands.exec("createLink",{href:a,target:b?"_blank":"_self",rel:b?"nofollow":""})};f.keypress(function(a){13==a.which&&(j(),e.modal("hide"))}),h.click(j),e.on("shown",function(){f.focus()}),e.on("hide",function(){d.editor.currentView.element.focus()}),b.find("a[data-wysihtml5-command=createLink]").click(function(){var b=a(this).hasClass("wysihtml5-command-active");return b?!0:(d.editor.currentView.element.focus(!1),c=d.editor.composer.selection.getBookmark(),e.appendTo("body").modal("show"),e.on("click.dismiss.modal",'[data-dismiss="modal"]',function(a){a.stopPropagation()}),!1)})},addMoreShortcuts:function(a,c,d){b.dom.observe(c,"keydown",function(c){var e=c.keyCode,f=d[e];(c.ctrlKey||c.metaKey||c.altKey)&&f&&b.commands[f]&&(b.commands[f].exec(a.composer,f),c.preventDefault())})}};var e={resetDefaults:function(){a.fn.wysihtml5.defaultOptions=a.extend(!0,{},a.fn.wysihtml5.defaultOptionsCache)},bypassDefaults:function(b){return this.each(function(){var c=a(this);c.data("wysihtml5",new d(c,b))})},shallowExtend:function(b){var c=a.extend({},a.fn.wysihtml5.defaultOptions,b||{},a(this).data()),d=this;return e.bypassDefaults.apply(d,[c])},deepExtend:function(b){var c=a.extend(!0,{},a.fn.wysihtml5.defaultOptions,b||{}),d=this;return e.bypassDefaults.apply(d,[c])},init:function(a){var b=this;return e.shallowExtend.apply(b,[a])}};a.fn.wysihtml5=function(b){return e[b]?e[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist on jQuery.wysihtml5"):e.init.apply(this,arguments)},a.fn.wysihtml5.Constructor=d;var f=a.fn.wysihtml5.defaultOptions={toolbar:{"font-styles":!0,color:!1,emphasis:{small:!0},blockquote:!0,lists:!0,html:!1,link:!0,image:!0,smallmodals:!1},events:{},parserRules:{classes:{"wysiwyg-color-silver":1,"wysiwyg-color-gray":1,"wysiwyg-color-white":1,"wysiwyg-color-maroon":1,"wysiwyg-color-red":1,"wysiwyg-color-purple":1,"wysiwyg-color-fuchsia":1,"wysiwyg-color-green":1,"wysiwyg-color-lime":1,"wysiwyg-color-olive":1,"wysiwyg-color-yellow":1,"wysiwyg-color-navy":1,"wysiwyg-color-blue":1,"wysiwyg-color-teal":1,"wysiwyg-color-aqua":1,"wysiwyg-color-orange":1},tags:{b:{},i:{},strong:{},em:{},p:{},br:{},ol:{},ul:{},li:{},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},blockquote:{},u:1,img:{check_attributes:{width:"numbers",alt:"alt",src:"url",height:"numbers"}},a:{check_attributes:{href:"url"},set_attributes:{target:"_blank",rel:"nofollow"}},span:1,div:1,small:1,code:1,pre:1}},locale:"en",shortcuts:{83:"small"}};"undefined"==typeof a.fn.wysihtml5.defaultOptionsCache&&(a.fn.wysihtml5.defaultOptionsCache=a.extend(!0,{},a.fn.wysihtml5.defaultOptions));var g=a.fn.wysihtml5.locale={}};c(a,b)}),function(a){a.commands.small={exec:function(b,c){return a.commands.formatInline.exec(b,c,"small")},state:function(b,c){return a.commands.formatInline.state(b,c,"small")}}}(wysihtml5),function(a){"function"==typeof define&&define.amd?define("bootstrap.wysihtml5.en-US",["jquery","bootstrap.wysihtml5"],a):a(jQuery)}(function(a){a.fn.wysihtml5.locale.en=a.fn.wysihtml5.locale["en-US"]={font_styles:{normal:"Normal text",h1:"Heading 1",h2:"Heading 2",h3:"Heading 3",h4:"Heading 4",h5:"Heading 5",h6:"Heading 6"},emphasis:{bold:"Bold",italic:"Italic",underline:"Underline",small:"Small"},lists:{unordered:"Unordered list",ordered:"Ordered list",outdent:"Outdent",indent:"Indent"},link:{insert:"Insert link",cancel:"Cancel",target:"Open link in new window"},image:{insert:"Insert image",cancel:"Cancel"},html:{edit:"Edit HTML"},colours:{black:"Black",silver:"Silver",gray:"Grey",maroon:"Maroon",red:"Red",purple:"Purple",green:"Green",olive:"Olive",navy:"Navy",blue:"Blue",orange:"Orange"}}});
(function() {


}).call(this);
(function() {


}).call(this);
/**
* bootstrap.js v3.0.0 by @fat and @mdo
* Copyright 2013 Twitter Inc.
* http://www.apache.org/licenses/LICENSE-2.0
*/

if(!jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===b.prop("type")&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(window.jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("dropdown");d||c.data("dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery);
/*
 HTML5 Shiv v3.6.2pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/

(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",version:"3.6.2pre",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);if(g)return a.createDocumentFragment();
for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);
/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2013 Metafizzy
 */

(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);
/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.5
------------------------------------------------------------------------- */

(function(e){function t(){var e=location.href;hashtag=e.indexOf("#prettyPhoto")!==-1?decodeURI(e.substring(e.indexOf("#prettyPhoto")+1,e.length)):false;return hashtag}function n(){if(typeof theRel=="undefined")return;location.hash=theRel+"/"+rel_index+"/"}function r(){if(location.href.indexOf("#prettyPhoto")!==-1)location.hash="prettyPhoto"}function i(e,t){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n="[\\?&]"+e+"=([^&#]*)";var r=new RegExp(n);var i=r.exec(t);return i==null?"":i[1]}e.prettyPhoto={version:"3.1.5"};e.fn.prettyPhoto=function(s){function g(){e(".pp_loaderIcon").hide();projectedTop=scroll_pos["scrollTop"]+(d/2-a["containerHeight"]/2);if(projectedTop<0)projectedTop=0;$ppt.fadeTo(settings.animation_speed,1);$pp_pic_holder.find(".pp_content").animate({height:a["contentHeight"],width:a["contentWidth"]},settings.animation_speed);$pp_pic_holder.animate({top:projectedTop,left:v/2-a["containerWidth"]/2<0?0:v/2-a["containerWidth"]/2,width:a["containerWidth"]},settings.animation_speed,function(){$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(a["height"]).width(a["width"]);$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);if(isSet&&S(pp_images[set_position])=="image"){$pp_pic_holder.find(".pp_hoverContainer").show()}else{$pp_pic_holder.find(".pp_hoverContainer").hide()}if(settings.allow_expand){if(a["resized"]){e("a.pp_expand,a.pp_contract").show()}else{e("a.pp_expand").hide()}}if(settings.autoplay_slideshow&&!m&&!f)e.prettyPhoto.startSlideshow();settings.changepicturecallback();f=true});C();s.ajaxcallback()}function y(t){$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility","hidden");$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed,function(){e(".pp_loaderIcon").show();t()})}function b(t){t>1?e(".pp_nav").show():e(".pp_nav").hide()}function w(e,t){resized=false;E(e,t);imageWidth=e,imageHeight=t;if((p>v||h>d)&&doresize&&settings.allow_resize&&!u){resized=true,fitting=false;while(!fitting){if(p>v){imageWidth=v-200;imageHeight=t/e*imageWidth}else if(h>d){imageHeight=d-200;imageWidth=e/t*imageHeight}else{fitting=true}h=imageHeight,p=imageWidth}if(p>v||h>d){w(p,h)}E(imageWidth,imageHeight)}return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(h),containerWidth:Math.floor(p)+settings.horizontal_padding*2,contentHeight:Math.floor(l),contentWidth:Math.floor(c),resized:resized}}function E(t,n){t=parseFloat(t);n=parseFloat(n);$pp_details=$pp_pic_holder.find(".pp_details");$pp_details.width(t);detailsHeight=parseFloat($pp_details.css("marginTop"))+parseFloat($pp_details.css("marginBottom"));$pp_details=$pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({position:"absolute",top:-1e4});detailsHeight+=$pp_details.height();detailsHeight=detailsHeight<=34?36:detailsHeight;$pp_details.remove();$pp_title=$pp_pic_holder.find(".ppt");$pp_title.width(t);titleHeight=parseFloat($pp_title.css("marginTop"))+parseFloat($pp_title.css("marginBottom"));$pp_title=$pp_title.clone().appendTo(e("body")).css({position:"absolute",top:-1e4});titleHeight+=$pp_title.height();$pp_title.remove();l=n+detailsHeight;c=t;h=l+titleHeight+$pp_pic_holder.find(".pp_top").height()+$pp_pic_holder.find(".pp_bottom").height();p=t}function S(e){if(e.match(/youtube\.com\/watch/i)||e.match(/youtu\.be/i)){return"youtube"}else if(e.match(/vimeo\.com/i)){return"vimeo"}else if(e.match(/\b.mov\b/i)){return"quicktime"}else if(e.match(/\b.swf\b/i)){return"flash"}else if(e.match(/\biframe=true\b/i)){return"iframe"}else if(e.match(/\bajax=true\b/i)){return"ajax"}else if(e.match(/\bcustom=true\b/i)){return"custom"}else if(e.substr(0,1)=="#"){return"inline"}else{return"image"}}function x(){if(doresize&&typeof $pp_pic_holder!="undefined"){scroll_pos=T();contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width();projectedTop=d/2+scroll_pos["scrollTop"]-contentHeight/2;if(projectedTop<0)projectedTop=0;if(contentHeight>d)return;$pp_pic_holder.css({top:projectedTop,left:v/2+scroll_pos["scrollLeft"]-contentwidth/2})}}function T(){if(self.pageYOffset){return{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset}}else if(document.documentElement&&document.documentElement.scrollTop){return{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft}}else if(document.body){return{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}}}function N(){d=e(window).height(),v=e(window).width();if(typeof $pp_overlay!="undefined")$pp_overlay.height(e(document).height()).width(v)}function C(){if(isSet&&settings.overlay_gallery&&S(pp_images[set_position])=="image"){itemWidth=52+5;navWidth=settings.theme=="facebook"||settings.theme=="pp_default"?50:30;itemsPerPage=Math.floor((a["containerWidth"]-100-navWidth)/itemWidth);itemsPerPage=itemsPerPage<pp_images.length?itemsPerPage:pp_images.length;totalPage=Math.ceil(pp_images.length/itemsPerPage)-1;if(totalPage==0){navWidth=0;$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()}else{$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show()}galleryWidth=itemsPerPage*itemWidth;fullGalleryWidth=pp_images.length*itemWidth;$pp_gallery.css("margin-left",-(galleryWidth/2+navWidth/2)).find("div:first").width(galleryWidth+5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected");goToPage=Math.floor(set_position/itemsPerPage)<totalPage?Math.floor(set_position/itemsPerPage):totalPage;e.prettyPhoto.changeGalleryPage(goToPage);$pp_gallery_li.filter(":eq("+set_position+")").addClass("selected")}else{$pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")}}function k(t){if(settings.social_tools)facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href));settings.markup=settings.markup.replace("{pp_social}","");e("body").append(settings.markup);$pp_pic_holder=e(".pp_pic_holder"),$ppt=e(".ppt"),$pp_overlay=e("div.pp_overlay");if(isSet&&settings.overlay_gallery){currentGalleryPage=0;toInject="";for(var n=0;n<pp_images.length;n++){if(!pp_images[n].match(/\b(jpg|jpeg|png|gif)\b/gi)){classname="default";img_src=""}else{classname="";img_src=pp_images[n]}toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /></a></li>"}toInject=settings.gallery_markup.replace(/{gallery}/g,toInject);$pp_pic_holder.find("#pp_full_res").after(toInject);$pp_gallery=e(".pp_pic_holder .pp_gallery"),$pp_gallery_li=$pp_gallery.find("li");$pp_gallery.find(".pp_arrow_next").click(function(){e.prettyPhoto.changeGalleryPage("next");e.prettyPhoto.stopSlideshow();return false});$pp_gallery.find(".pp_arrow_previous").click(function(){e.prettyPhoto.changeGalleryPage("previous");e.prettyPhoto.stopSlideshow();return false});$pp_pic_holder.find(".pp_content").hover(function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()},function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()});itemWidth=52+5;$pp_gallery_li.each(function(t){e(this).find("a").click(function(){e.prettyPhoto.changePage(t);e.prettyPhoto.stopSlideshow();return false})})}if(settings.slideshow){$pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>');$pp_pic_holder.find(".pp_nav .pp_play").click(function(){e.prettyPhoto.startSlideshow();return false})}$pp_pic_holder.attr("class","pp_pic_holder "+settings.theme);$pp_overlay.css({opacity:0,height:e(document).height(),width:e(window).width()}).bind("click",function(){if(!settings.modal)e.prettyPhoto.close()});e("a.pp_close").bind("click",function(){e.prettyPhoto.close();return false});if(settings.allow_expand){e("a.pp_expand").bind("click",function(t){if(e(this).hasClass("pp_expand")){e(this).removeClass("pp_expand").addClass("pp_contract");doresize=false}else{e(this).removeClass("pp_contract").addClass("pp_expand");doresize=true}y(function(){e.prettyPhoto.open()});return false})}$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click",function(){e.prettyPhoto.changePage("previous");e.prettyPhoto.stopSlideshow();return false});$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click",function(){e.prettyPhoto.changePage("next");e.prettyPhoto.stopSlideshow();return false});x()}s=jQuery.extend({hook:"rel",animation_speed:"fast",ajaxcallback:function(){},slideshow:5e3,autoplay_slideshow:false,opacity:.8,show_title:true,allow_resize:true,allow_expand:true,default_width:500,default_height:344,counter_separator_label:"/",theme:"pp_default",horizontal_padding:20,hideflash:false,wmode:"opaque",autoplay:true,modal:false,deeplinking:true,overlay_gallery:true,overlay_gallery_max:30,keyboard_shortcuts:true,changepicturecallback:function(){},callback:function(){},ie6_fallback:true,markup:'<div class="pp_pic_holder"> 						<div class="ppt"> </div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:"",social_tools:'<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'},s);var o=this,u=false,a,f,l,c,h,p,d=e(window).height(),v=e(window).width(),m;doresize=true,scroll_pos=T();e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto",function(){x();N()});if(s.keyboard_shortcuts){e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto",function(t){if(typeof $pp_pic_holder!="undefined"){if($pp_pic_holder.is(":visible")){switch(t.keyCode){case 37:e.prettyPhoto.changePage("previous");t.preventDefault();break;case 39:e.prettyPhoto.changePage("next");t.preventDefault();break;case 27:if(!settings.modal)e.prettyPhoto.close();t.preventDefault();break}}}})}e.prettyPhoto.initialize=function(){settings=s;if(settings.theme=="pp_default")settings.horizontal_padding=16;theRel=e(this).attr(settings.hook);galleryRegExp=/\[(?:.*)\]/;isSet=galleryRegExp.exec(theRel)?true:false;pp_images=isSet?jQuery.map(o,function(t,n){if(e(t).attr(settings.hook).indexOf(theRel)!=-1)return e(t).attr("href")}):e.makeArray(e(this).attr("href"));pp_titles=isSet?jQuery.map(o,function(t,n){if(e(t).attr(settings.hook).indexOf(theRel)!=-1)return e(t).find("img").attr("alt")?e(t).find("img").attr("alt"):""}):e.makeArray(e(this).find("img").attr("alt"));pp_descriptions=isSet?jQuery.map(o,function(t,n){if(e(t).attr(settings.hook).indexOf(theRel)!=-1)return e(t).attr("title")?e(t).attr("title"):""}):e.makeArray(e(this).attr("title"));if(pp_images.length>settings.overlay_gallery_max)settings.overlay_gallery=false;set_position=jQuery.inArray(e(this).attr("href"),pp_images);rel_index=isSet?set_position:e("a["+settings.hook+"^='"+theRel+"']").index(e(this));k(this);if(settings.allow_resize)e(window).bind("scroll.prettyphoto",function(){x()});e.prettyPhoto.open();return false};e.prettyPhoto.open=function(t){if(typeof settings=="undefined"){settings=s;pp_images=e.makeArray(arguments[0]);pp_titles=arguments[1]?e.makeArray(arguments[1]):e.makeArray("");pp_descriptions=arguments[2]?e.makeArray(arguments[2]):e.makeArray("");isSet=pp_images.length>1?true:false;set_position=arguments[3]?arguments[3]:0;k(t.target)}if(settings.hideflash)e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","hidden");b(e(pp_images).size());e(".pp_loaderIcon").show();if(settings.deeplinking)n();if(settings.social_tools){facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href));$pp_pic_holder.find(".pp_social").html(facebook_like_link)}if($ppt.is(":hidden"))$ppt.css("opacity",0).show();$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);$pp_pic_holder.find(".currentTextHolder").text(set_position+1+settings.counter_separator_label+e(pp_images).size());if(typeof pp_descriptions[set_position]!="undefined"&&pp_descriptions[set_position]!=""){$pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position]))}else{$pp_pic_holder.find(".pp_description").hide()}movie_width=parseFloat(i("width",pp_images[set_position]))?i("width",pp_images[set_position]):settings.default_width.toString();movie_height=parseFloat(i("height",pp_images[set_position]))?i("height",pp_images[set_position]):settings.default_height.toString();u=false;if(movie_height.indexOf("%")!=-1){movie_height=parseFloat(e(window).height()*parseFloat(movie_height)/100-150);u=true}if(movie_width.indexOf("%")!=-1){movie_width=parseFloat(e(window).width()*parseFloat(movie_width)/100-150);u=true}$pp_pic_holder.fadeIn(function(){settings.show_title&&pp_titles[set_position]!=""&&typeof pp_titles[set_position]!="undefined"?$ppt.html(unescape(pp_titles[set_position])):$ppt.html(" ");imgPreloader="";skipInjection=false;switch(S(pp_images[set_position])){case"image":imgPreloader=new Image;nextImage=new Image;if(isSet&&set_position<e(pp_images).size()-1)nextImage.src=pp_images[set_position+1];prevImage=new Image;if(isSet&&pp_images[set_position-1])prevImage.src=pp_images[set_position-1];$pp_pic_holder.find("#pp_full_res")[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]);imgPreloader.onload=function(){a=w(imgPreloader.width,imgPreloader.height);g()};imgPreloader.onerror=function(){alert("Image cannot be loaded. Make sure the path is correct and image exist.");e.prettyPhoto.close()};imgPreloader.src=pp_images[set_position];break;case"youtube":a=w(movie_width,movie_height);movie_id=i("v",pp_images[set_position]);if(movie_id==""){movie_id=pp_images[set_position].split("youtu.be/");movie_id=movie_id[1];if(movie_id.indexOf("?")>0)movie_id=movie_id.substr(0,movie_id.indexOf("?"));if(movie_id.indexOf("&")>0)movie_id=movie_id.substr(0,movie_id.indexOf("&"))}movie="http://www.youtube.com/embed/"+movie_id;i("rel",pp_images[set_position])?movie+="?rel="+i("rel",pp_images[set_position]):movie+="?rel=1";if(settings.autoplay)movie+="&autoplay=1";toInject=settings.iframe_markup.replace(/{width}/g,a["width"]).replace(/{height}/g,a["height"]).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case"vimeo":a=w(movie_width,movie_height);movie_id=pp_images[set_position];var t=/http(s?):\/\/(www\.)?vimeo.com\/(\d+)/;var n=movie_id.match(t);movie="http://player.vimeo.com/video/"+n[3]+"?title=0&byline=0&portrait=0";if(settings.autoplay)movie+="&autoplay=1;";vimeo_width=a["width"]+"/embed/?moog_width="+a["width"];toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,a["height"]).replace(/{path}/g,movie);break;case"quicktime":a=w(movie_width,movie_height);a["height"]+=15;a["contentHeight"]+=15;a["containerHeight"]+=15;toInject=settings.quicktime_markup.replace(/{width}/g,a["width"]).replace(/{height}/g,a["height"]).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case"flash":a=w(movie_width,movie_height);flash_vars=pp_images[set_position];flash_vars=flash_vars.substring(pp_images[set_position].indexOf("flashvars")+10,pp_images[set_position].length);filename=pp_images[set_position];filename=filename.substring(0,filename.indexOf("?"));toInject=settings.flash_markup.replace(/{width}/g,a["width"]).replace(/{height}/g,a["height"]).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+"?"+flash_vars);break;case"iframe":a=w(movie_width,movie_height);frame_url=pp_images[set_position];frame_url=frame_url.substr(0,frame_url.indexOf("iframe")-1);toInject=settings.iframe_markup.replace(/{width}/g,a["width"]).replace(/{height}/g,a["height"]).replace(/{path}/g,frame_url);break;case"ajax":doresize=false;a=w(movie_width,movie_height);doresize=true;skipInjection=true;e.get(pp_images[set_position],function(e){toInject=settings.inline_markup.replace(/{content}/g,e);$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject;g()});break;case"custom":a=w(movie_width,movie_height);toInject=settings.custom_markup;break;case"inline":myClone=e(pp_images[set_position]).clone().append('<br clear="all" />').css({width:settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show();doresize=false;a=w(e(myClone).width(),e(myClone).height());doresize=true;e(myClone).remove();toInject=settings.inline_markup.replace(/{content}/g,e(pp_images[set_position]).html());break}if(!imgPreloader&&!skipInjection){$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject;g()}});return false};e.prettyPhoto.changePage=function(t){currentGalleryPage=0;if(t=="previous"){set_position--;if(set_position<0)set_position=e(pp_images).size()-1}else if(t=="next"){set_position++;if(set_position>e(pp_images).size()-1)set_position=0}else{set_position=t}rel_index=set_position;if(!doresize)doresize=true;if(settings.allow_expand){e(".pp_contract").removeClass("pp_contract").addClass("pp_expand")}y(function(){e.prettyPhoto.open()})};e.prettyPhoto.changeGalleryPage=function(e){if(e=="next"){currentGalleryPage++;if(currentGalleryPage>totalPage)currentGalleryPage=0}else if(e=="previous"){currentGalleryPage--;if(currentGalleryPage<0)currentGalleryPage=totalPage}else{currentGalleryPage=e}slide_speed=e=="next"||e=="previous"?settings.animation_speed:0;slide_to=currentGalleryPage*itemsPerPage*itemWidth;$pp_gallery.find("ul").animate({left:-slide_to},slide_speed)};e.prettyPhoto.startSlideshow=function(){if(typeof m=="undefined"){$pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function(){e.prettyPhoto.stopSlideshow();return false});m=setInterval(e.prettyPhoto.startSlideshow,settings.slideshow)}else{e.prettyPhoto.changePage("next")}};e.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function(){e.prettyPhoto.startSlideshow();return false});clearInterval(m);m=undefined};e.prettyPhoto.close=function(){if($pp_overlay.is(":animated"))return;e.prettyPhoto.stopSlideshow();$pp_pic_holder.stop().find("object,embed").css("visibility","hidden");e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed,function(){e(this).remove()});$pp_overlay.fadeOut(settings.animation_speed,function(){if(settings.hideflash)e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","visible");e(this).remove();e(window).unbind("scroll.prettyphoto");r();settings.callback();doresize=true;f=false;delete settings})};if(!pp_alreadyInitialized&&t()){pp_alreadyInitialized=true;hashIndex=t();hashRel=hashIndex;hashIndex=hashIndex.substring(hashIndex.indexOf("/")+1,hashIndex.length-1);hashRel=hashRel.substring(0,hashRel.indexOf("/"));setTimeout(function(){e("a["+s.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger("click")},50)}return this.unbind("click.prettyphoto").bind("click.prettyphoto",e.prettyPhoto.initialize)};})(jQuery);var pp_alreadyInitialized=false
;
jQuery(function($) {

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});

	$( '.centered' ).each(function( e ) {
		$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
	});

	$(window).resize(function(){
		$( '.centered' ).each(function( e ) {
			$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
		});
	});

	//portfolio
	$(window).load(function(){
		$portfolio_selectors = $('.portfolio-filter >li>a');
		if($portfolio_selectors!='undefined'){
			$portfolio = $('.portfolio-items');
			$portfolio.isotope({
				itemSelector : 'li',
				layoutMode : 'fitRows'
			});
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({ filter: selector });
				return false;
			});
		}
	});

	//contact form
	var form = $('.contact-form');
	form.submit(function () {
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	
});
(function() {
  $('#post_content').wysihtml5();

}).call(this);
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */

window.matchMedia=window.matchMedia||function(a){"use strict";var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42===g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(document);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(a){"use strict";function x(){u(!0)}var b={};a.respond=b,b.update=function(){},b.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,b.mediaQueriesSupported;var q,r,t,c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=c.getElementsByTagName("base")[0],l=j.getElementsByTagName("link"),m=[],n=function(){for(var b=0;l.length>b;b++){var c=l[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!h[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(p(c.styleSheet.rawCssText,d,e),h[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!k||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&m.push({href:d,media:e}))}o()},o=function(){if(m.length){var a=m.shift();v(a.href,function(b){p(b,a.href,a.media),h[a.href]=!0,setTimeout(function(){o()},0)})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),g=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c;b.length&&(b+="/"),i&&(g=1);for(var j=0;g>j;j++){var k,l,m,n;i?(k=c,f.push(h(a))):(k=d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],e.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},s=function(){var a,b=c.createElement("div"),e=c.body,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=c.createElement("body"),e.style.background="none"),e.appendChild(b),d.insertBefore(e,d.firstChild),a=b.offsetWidth,f?d.removeChild(e):e.removeChild(b),a=t=parseFloat(a)},u=function(a){var b="clientWidth",h=d[b],k="CSS1Compat"===c.compatMode&&h||c.body[b]||h,m={},n=l[l.length-1],o=(new Date).getTime();if(a&&q&&i>o-q)return clearTimeout(r),r=setTimeout(u,i),void 0;q=o;for(var p in e)if(e.hasOwnProperty(p)){var v=e[p],w=v.minw,x=v.maxw,y=null===w,z=null===x,A="em";w&&(w=parseFloat(w)*(w.indexOf(A)>-1?t||s():1)),x&&(x=parseFloat(x)*(x.indexOf(A)>-1?t||s():1)),v.hasquery&&(y&&z||!(y||k>=w)||!(z||x>=k))||(m[v.media]||(m[v.media]=[]),m[v.media].push(f[v.rules]))}for(var B in g)g.hasOwnProperty(B)&&g[B]&&g[B].parentNode===j&&j.removeChild(g[B]);for(var C in m)if(m.hasOwnProperty(C)){var D=c.createElement("style"),E=m[C].join("\n");D.type="text/css",D.media=C,j.insertBefore(D,n.nextSibling),D.styleSheet?D.styleSheet.cssText=E:D.appendChild(c.createTextNode(E)),g.push(D)}},v=function(a,b){var c=w();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();n(),b.update=n,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)})(this);
(function() {


}).call(this);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//






;
