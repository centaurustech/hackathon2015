window.Modernizr=function(X,W,V){function E(b){P.cssText=b
}function D(e,d){return E(prefixes.join(e+";")+(d||""))
}function C(e,d){return typeof e===d
}function B(e,d){return !!~(""+e).indexOf(d)
}function A(i,g,m){for(var k in i){var j=g[i[k]];
if(j!==V){return m===!1?i[k]:C(j,"function")?j.bind(m||g):j
}}return !1
}var U="2.6.1",T={},S=W.documentElement,R="modernizr",Q=W.createElement(R),P=Q.style,O,N={}.toString,M={},L={},K={},J=[],I=J.slice,H,G={}.hasOwnProperty,F;
!C(G,"undefined")&&!C(G.call,"undefined")?F=function(e,d){return G.call(e,d)
}:F=function(e,d){return d in e&&C(e.constructor.prototype[d],"undefined")
},Function.prototype.bind||(Function.prototype.bind=function(a){var i=this;
if(typeof i!="function"){throw new TypeError
}var g=I.call(arguments,1),f=function(){if(this instanceof f){var b=function(){};
b.prototype=i.prototype;
var e=new b,d=i.apply(e,g.concat(I.call(arguments)));
return Object(d)===d?d:e
}return i.apply(a,g.concat(I.call(arguments)))
};
return f
}),M.canvas=function(){var b=W.createElement("canvas");
return !!b.getContext&&!!b.getContext("2d")
},M.canvastext=function(){return !!T.canvas&&!!C(W.createElement("canvas").getContext("2d").fillText,"function")
},M.localstorage=function(){try{return localStorage.setItem(R,R),localStorage.removeItem(R),!0
}catch(b){return !1
}},M.sessionstorage=function(){try{return sessionStorage.setItem(R,R),sessionStorage.removeItem(R),!0
}catch(b){return !1
}};
for(var z in M){F(M,z)&&(H=z.toLowerCase(),T[H]=M[z](),J.push((T[H]?"":"no-")+H))
}return T.addTest=function(f,e){if(typeof f=="object"){for(var g in f){F(f,g)&&T.addTest(g,f[g])
}}else{f=f.toLowerCase();
if(T[f]!==V){return T
}e=typeof e=="function"?e():e,enableClasses&&(S.className+=" "+(e?"":"no-")+f),T[f]=e
}return T
},E(""),Q=O=null,T._version=U,T
}(this,this.document);
/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)
},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()
},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())
},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))
};
x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;
if(!e){return this
}if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n){return !n||n.jquery?(n||r).find(e):this.constructor(n).find(e)
}if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n)){for(i in n){x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i])
}}return this
}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2]){return r.find(e)
}this.length=1,this[0]=o
}return this.context=a,this.selector=e,this
}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))
},selector:"",length:0,toArray:function(){return g.call(this)
},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]
},pushStack:function(e){var t=x.merge(this.constructor(),e);
return t.prevObject=this,t.context=this.context,t
},each:function(e,t){return x.each(this,e,t)
},ready:function(e){return x.ready.promise().done(e),this
},slice:function(){return this.pushStack(g.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(e){var t=this.length,n=+e+(0>e?t:0);
return this.pushStack(n>=0&&t>n?[this[n]]:[])
},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;
for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);
u>l;
l++){if(null!=(o=arguments[l])){for(i in o){e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r))
}}}return s
},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x
},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)
},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body){return setTimeout(x.ready)
}x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))
}},isFunction:function(e){return"function"===x.type(e)
},isArray:Array.isArray||function(e){return"array"===x.type(e)
},isWindow:function(e){return null!=e&&e==e.window
},isNumeric:function(e){return !isNaN(parseFloat(e))&&isFinite(e)
},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e
},isPlainObject:function(e){var n;
if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e)){return !1
}try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf")){return !1
}}catch(r){return !1
}if(x.support.ownLast){for(n in e){return v.call(e,n)
}}for(n in e){}return n===t||v.call(e,n)
},isEmptyObject:function(e){var t;
for(t in e){return !1
}return !0
},error:function(e){throw Error(e)
},parseHTML:function(e,t,n){if(!e||"string"!=typeof e){return null
}"boolean"==typeof t&&(n=t,t=!1),t=t||a;
var r=k.exec(e),i=!n&&[];
return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))
},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)
},parseXML:function(n){var r,i;
if(!n||"string"!=typeof n){return null
}try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))
}catch(o){r=t
}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r
},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)
})(t)
},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)
},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);
if(n){if(a){for(;
o>i;
i++){if(r=t.apply(e[i],n),r===!1){break
}}}else{for(i in e){if(r=t.apply(e[i],n),r===!1){break
}}}}else{if(a){for(;
o>i;
i++){if(r=t.call(e[i],i,e[i]),r===!1){break
}}}else{for(i in e){if(r=t.call(e[i],i,e[i]),r===!1){break
}}}}return e
},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)
}:function(e){return null==e?"":(e+"").replace(C,"")
},makeArray:function(e,t){var n=t||[];
return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n
},inArray:function(e,t,n){var r;
if(t){if(m){return m.call(t,e,n)
}for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;
r>n;
n++){if(n in t&&t[n]===e){return n
}}}return -1
},merge:function(e,n){var r=n.length,i=e.length,o=0;
if("number"==typeof r){for(;
r>o;
o++){e[i++]=n[o]
}}else{while(n[o]!==t){e[i++]=n[o++]
}}return e.length=i,e
},grep:function(e,t,n){var r,i=[],o=0,a=e.length;
for(n=!!n;
a>o;
o++){r=!!t(e[o],o),n!==r&&i.push(e[o])
}return i
},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];
if(a){for(;
o>i;
i++){r=t(e[i],i,n),null!=r&&(s[s.length]=r)
}}else{for(i in e){r=t(e[i],i,n),null!=r&&(s[s.length]=r)
}}return d.apply([],s)
},guid:1,proxy:function(e,n){var r,i,o;
return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))
},i.guid=e.guid=e.guid||x.guid++,i):t
},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;
if("object"===x.type(r)){o=!0;
for(l in r){x.access(e,n,l,r[l],!0,a,s)
}}else{if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)
})),n)){for(;
u>l;
l++){n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)))
}}}return o?e:c?n.call(e):u?n(e[0],r):a
},now:function(){return(new Date).getTime()
},swap:function(e,t,n,r){var i,o,a={};
for(o in t){a[o]=e.style[o],e.style[o]=t[o]
}i=n.apply(e,r||[]);
for(o in t){e.style[o]=a[o]
}return i
}}),x.ready.promise=function(t){if(!n){if(n=x.Deferred(),"complete"===a.readyState){setTimeout(x.ready)
}else{if(a.addEventListener){a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1)
}else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);
var r=!1;
try{r=null==e.frameElement&&a.documentElement
}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")
}catch(e){return setTimeout(o,50)
}_(),x.ready()
}}()
}}}return n.promise(t)
},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()
});
function M(e){var t=e.length,n=x.type(e);
return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)
}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0
},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;
for(;
n>t;
t++){if(this[t]===e){return t
}}return -1
},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;
return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)
};
try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType
}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))
}:function(e,t){var n=e.length,r=0;
while(e[n++]=t[r++]){}e.length=n-1
}}
}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;
if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e){return n
}if(1!==(l=t.nodeType)&&9!==l){return[]
}if(h&&!i){if(o=Z.exec(e)){if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode){return n
}if(a.id===s){return n.push(a),n
}}else{if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s){return n.push(a),n
}}}else{if(o[2]){return M.apply(n,t.getElementsByTagName(e)),n
}if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName){return M.apply(n,t.getElementsByClassName(s)),n
}}}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;
while(u--){c[u]=m+yt(c[u])
}y=V.test(e)&&t.parentNode||t,x=c.join(",")
}if(x){try{return M.apply(n,y.querySelectorAll(x)),n
}catch(T){}finally{d||t.removeAttribute("id")
}}}}return kt(e.replace(z,"$1"),t,n,i)
}function st(){var e=[];
function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r
}return t
}function lt(e){return e[b]=!0,e
}function ut(e){var t=f.createElement("div");
try{return !!e(t)
}catch(n){return !1
}finally{t.parentNode&&t.parentNode.removeChild(t),t=null
}}function ct(e,t){var n=e.split("|"),r=e.length;
while(r--){o.attrHandle[n[r]]=t
}}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);
if(r){return r
}if(n){while(n=n.nextSibling){if(n===t){return -1
}}}return e?1:-1
}function ft(e){return function(t){var n=t.nodeName.toLowerCase();
return"input"===n&&t.type===e
}
}function dt(e){return function(t){var n=t.nodeName.toLowerCase();
return("input"===n||"button"===n)&&t.type===e
}
}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;
while(a--){n[i=o[a]]&&(n[i]=!(r[i]=n[i]))
}})
})
}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;
return t?"HTML"!==t.nodeName:!1
},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;
return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()
}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")
}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length
}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length
}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length
}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);
return n&&n.parentNode?[n]:[]
}},o.filter.ID=function(e){var t=e.replace(rt,it);
return function(e){return e.getAttribute("id")===t
}
}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);
return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");
return n&&n.value===t
}
}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t
}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);
if("*"===e){while(n=o[i++]){1===n.nodeType&&r.push(n)
}return r
}return o
},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t
},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")
}),ut(function(e){var t=n.createElement("input");
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")
})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)
}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))
}:function(e,t){if(t){while(t=t.parentNode){if(t===e){return !0
}}}return !1
},A=d.compareDocumentPosition?function(e,t){if(e===t){return S=!0,0
}var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);
return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1
}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];
if(e===t){return S=!0,0
}if(!o||!a){return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0
}if(o===a){return pt(e,t)
}r=e;
while(r=r.parentNode){s.unshift(r)
}r=t;
while(r=r.parentNode){l.unshift(r)
}while(s[i]===l[i]){i++
}return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0
},n):f
},at.matches=function(e,t){return at(e,null,null,t)
},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t))){try{var n=y.call(e,t);
if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType){return n
}}catch(i){}}return at(t,f,null,[e]).length>0
},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)
},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);
var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;
return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a
},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)
},at.uniqueSort=function(e){var t,n=[],i=0,o=0;
if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++]){t===e[o]&&(i=n.push(o))
}while(i--){e.splice(n[i],1)
}}return e
},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;
if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent){return e.textContent
}for(e=e.firstChild;
e;
e=e.nextSibling){n+=a(e)
}}else{if(3===i||4===i){return e.nodeValue
}}}else{for(;
t=e[r];
r++){n+=a(t)
}}return n
},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)
},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e
},PSEUDO:function(e){var n,r=!e[5]&&e[2];
return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))
}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();
return"*"===e?function(){return !0
}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t
}
},CLASS:function(e){var t=N[e+" "];
return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")
})
},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);
return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0
}
},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;
return 1===r&&0===i?function(e){return !!e.parentNode
}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;
if(m){if(o){while(g){p=t;
while(p=p[g]){if(s?p.nodeName.toLowerCase()===y:1===p.nodeType){return !1
}}h=g="only"===e&&!h&&"nextSibling"
}return !0
}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];
while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];
break
}}}else{if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T){f=u[1]
}else{while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t)){break
}}}}return f-=i,f===r||0===f%r&&f/r>=0
}}
},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);
return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;
while(a--){i=F.call(e,o[a]),e[i]=!(n[i]=o[a])
}}):function(e){return r(e,0,n)
}):r
}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));
return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;
while(s--){(o=a[s])&&(e[s]=!(t[s]=o))
}}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()
}
}),has:lt(function(e){return function(t){return at(e,t).length>0
}
}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1
}
}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;
do{if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang")){return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-")
}}while((t=t.parentNode)&&1===t.nodeType);
return !1
}
}),target:function(t){var n=e.location&&e.location.hash;
return n&&n.slice(1)===t.id
},root:function(e){return e===d
},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
},enabled:function(e){return e.disabled===!1
},disabled:function(e){return e.disabled===!0
},checked:function(e){var t=e.nodeName.toLowerCase();
return"input"===t&&!!e.checked||"option"===t&&!!e.selected
},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0
},empty:function(e){for(e=e.firstChild;
e;
e=e.nextSibling){if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType){return !1
}}return !0
},parent:function(e){return !o.pseudos.empty(e)
},header:function(e){return tt.test(e.nodeName)
},input:function(e){return et.test(e.nodeName)
},button:function(e){var t=e.nodeName.toLowerCase();
return"input"===t&&"button"===e.type||"button"===t
},text:function(e){var t;
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)
},first:ht(function(){return[0]
}),last:ht(function(e,t){return[t-1]
}),eq:ht(function(e,t,n){return[0>n?n+t:n]
}),even:ht(function(e,t){var n=0;
for(;
t>n;
n+=2){e.push(n)
}return e
}),odd:ht(function(e,t){var n=1;
for(;
t>n;
n+=2){e.push(n)
}return e
}),lt:ht(function(e,t,n){var r=0>n?n+t:n;
for(;
--r>=0;
){e.push(r)
}return e
}),gt:ht(function(e,t,n){var r=0>n?n+t:n;
for(;
t>++r;
){e.push(r)
}return e
})}},o.pseudos.nth=o.pseudos.eq;
for(n in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){o.pseudos[n]=ft(n)
}for(n in {submit:!0,reset:!0}){o.pseudos[n]=dt(n)
}function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;
function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];
if(c){return t?0:c.slice(0)
}s=e,l=[],u=o.preFilter;
while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));
for(a in o.filter){!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length))
}if(!n){break
}}return t?s.length:s?at.error(e):k(e,l).slice(0)
}function yt(e){var t=0,n=e.length,r="";
for(;
n>t;
t++){r+=e[t].value
}return r
}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;
return t.first?function(t,n,i){while(t=t[r]){if(1===t.nodeType||o){return e(t,n,i)
}}}:function(t,n,s){var l,u,c,p=T+" "+a;
if(s){while(t=t[r]){if((1===t.nodeType||o)&&e(t,n,s)){return !0
}}}else{while(t=t[r]){if(1===t.nodeType||o){if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i){return l===!0
}}else{if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0){return !0
}}}}}}
}function bt(e){return e.length>1?function(t,n,r){var i=e.length;
while(i--){if(!e[i](t,n,r)){return !1
}}return !0
}:e[0]
}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;
for(;
l>s;
s++){(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s))
}return a
}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;
if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;
while(c--){(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))
}}if(o){if(i||e){if(i){u=[],c=y.length;
while(c--){(p=y[c])&&u.push(m[c]=p)
}i(null,y=[],u,l)
}c=y.length;
while(c--){(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))
}}}else{y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)
}})
}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t
},s,!0),p=vt(function(e){return F.call(t,e)>-1
},s,!0),f=[function(e,n,r){return !a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))
}];
for(;
i>l;
l++){if(n=o.relative[e[l].type]){f=[vt(bt(f),n)]
}else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;
i>r;
r++){if(o.relative[e[r].type]){break
}}return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))
}f.push(n)
}}return bt(f)
}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||0.1;
for(w&&(u=l!==f&&l,i=n);
null!=(h=N[b]);
b++){if(a&&h){g=0;
while(m=e[g++]){if(m(h,l,c)){p.push(h);
break
}}w&&(T=k,i=++n)
}r&&((h=!m&&h)&&v--,s&&x.push(h))
}if(v+=b,r&&b!==v){g=0;
while(m=t[g++]){m(x,y,l,c)
}if(s){if(v>0){while(b--){x[b]||y[b]||(y[b]=q.call(p))
}}y=xt(y)
}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)
}return w&&(T=k,u=C),x
};
return r?lt(s):s
}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];
if(!o){t||(t=mt(e)),n=t.length;
while(n--){o=Tt(t[n]),o[b]?r.push(o):i.push(o)
}o=E(e,Ct(i,r))
}return o
};
function Nt(e,t,n){var r=0,i=t.length;
for(;
i>r;
r++){at(e,t[r],n)
}return n
}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);
if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t){return n
}e=e.slice(s.shift().value.length)
}a=Q.needsContext.test(e)?0:s.length;
while(a--){if(u=s[a],o.relative[c=u.type]){break
}if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e){return M.apply(n,i),n
}break
}}}return l(e,f)(i,t,!h,n,V.test(e)),n
}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))
}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")
})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)
}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")
})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue
}),ut(function(e){return null==e.getAttribute("disabled")
})||ct(B,function(e,n,r){var i;
return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null
}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains
}(e);
var O={};
function F(e){var t=O[e]={};
return x.each(e.match(T)||[],function(e,n){t[n]=!0
}),t
}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);
var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;
l&&o>a;
a++){if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;
break
}}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())
},p={add:function(){if(l){var t=l.length;
(function i(t){x.each(t,function(t,n){var r=x.type(n);
"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)
})
})(arguments),n?o=l.length:r&&(s=t,c(r))
}return this
},remove:function(){return l&&x.each(arguments,function(e,t){var r;
while((r=x.inArray(t,l,r))>-1){l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)
}}),this
},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)
},empty:function(){return l=[],o=0,this
},disable:function(){return l=u=r=t,this
},disabled:function(){return !l
},lock:function(){return u=t,r||p.disable(),this
},locked:function(){return !u
},fireWith:function(e,t){return !l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this
},fire:function(){return p.fireWith(this,arguments),this
},fired:function(){return !!i
}};
return p
},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n
},always:function(){return i.done(arguments).fail(arguments),this
},then:function(){var e=arguments;
return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];
i[o[1]](function(){var e=s&&s.apply(this,arguments);
e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)
})
}),e=null
}).promise()
},promise:function(e){return null!=e?x.extend(e,r):r
}},i={};
return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];
r[o[1]]=a.add,s&&a.add(function(){n=s
},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this
},i[o[0]+"With"]=a.fireWith
}),r.promise(i),e&&e.call(i,i),i
},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)
}
},s,l,u;
if(r>1){for(s=Array(r),l=Array(r),u=Array(r);
r>t;
t++){n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i
}}return i||o.resolveWith(u,n),o.promise()
}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");
if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length){return t
}s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;
try{delete d.test
}catch(h){t.deleteExpando=!1
}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1
}),d.cloneNode(!0).click());
for(f in {submit:!0,change:!0,focusin:!0}){d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1
}d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;
for(f in x(t)){break
}return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];
l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth
}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)
}),n=s=l=u=r=o=null,t
}({});
var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;
function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;
if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n){return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o
}}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;
if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;
while(i--){delete r[t[i]]
}if(n?!I(r):!x.isEmptyObject(r)){return
}}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)
}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)
},data:function(e,t,n){return R(e,t,n)
},removeData:function(e,t){return W(e,t)
},_data:function(e,t,n){return R(e,t,n,!0)
},_removeData:function(e,t){return W(e,t,!0)
},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType){return !1
}var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];
return !t||t!==!0&&e.getAttribute("classid")===t
}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];
if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;
r.length>a;
a++){i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]))
}x._data(s,"parsedAttrs",!0)
}return o
}return"object"==typeof e?this.each(function(){x.data(this,e)
}):arguments.length>1?this.each(function(){x.data(this,e,n)
}):s?$(s,e,x.data(s,e)):null
},removeData:function(e){return this.each(function(){x.removeData(this,e)
})
}});
function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();
if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r
}catch(o){}x.data(e,n,r)
}else{r=t
}}return r
}function I(e){var t;
for(t in e){if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t){return !1
}}return !0
}x.extend({queue:function(e,n,r){var i;
return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t
},dequeue:function(e,t){t=t||"fx";
var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)
};
"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(e,t){var n=t+"queueHooks";
return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)
})})
}}),x.fn.extend({queue:function(e,n){var r=2;
return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);
x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)
})
},dequeue:function(e){return this.each(function(){x.dequeue(this,e)
})
},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);
n.stop=function(){clearTimeout(r)
}
})
},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])
};
"string"!=typeof e&&(n=e,e=t),e=e||"fx";
while(s--){r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l))
}return l(),o.promise(n)
}});
var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;
x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)
},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)
})
},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)
},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]
}catch(n){}})
},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;
if(x.isFunction(e)){return this.each(function(t){x(this).addClass(e.call(this,t,this.className))
})
}if(l){for(t=(e||"").match(T)||[];
s>a;
a++){if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;
while(i=t[o++]){0>r.indexOf(" "+i+" ")&&(r+=i+" ")
}n.className=x.trim(r)
}}}return this
},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;
if(x.isFunction(e)){return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))
})
}if(l){for(t=(e||"").match(T)||[];
s>a;
a++){if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;
while(i=t[o++]){while(r.indexOf(" "+i+" ")>=0){r=r.replace(" "+i+" "," ")
}}n.className=e?x.trim(r):""
}}}return this
},toggleClass:function(e,t){var n=typeof e;
return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)
}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];
while(t=a[r++]){o.hasClass(t)?o.removeClass(t):o.addClass(t)
}}else{(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")
}})
},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;
for(;
r>n;
n++){if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0){return !0
}}return !1
},val:function(e){var n,r,i,o=this[0];
if(arguments.length){return i=x.isFunction(e),this.each(function(n){var o;
1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""
})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set" in r&&r.set(this,o,"value")!==t||(this.value=o))
})
}if(o){return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get" in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)
}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");
return null!=t?t:e.text
}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;
for(;
s>l;
l++){if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o){return t
}a.push(t)
}}return a
},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;
while(a--){r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0)
}return n||(e.selectedIndex=-1),o
}}},attr:function(e,n,r){var o,a,s=e.nodeType;
if(e&&3!==s&&8!==s&&2!==s){return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get" in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set" in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))
}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);
if(o&&1===e.nodeType){while(n=o[i++]){r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)
}}},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;
return e.setAttribute("type",t),n&&(e.value=n),t
}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;
if(e&&3!==s&&8!==s&&2!==s){return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set" in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get" in o&&null!==(i=o.get(e,n))?i:e[n]
}},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");
return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1
}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n
}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;
x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;
return x.expr.attrHandle[n]=o,a
}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null
}
}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)
}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);
return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t
}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;
return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null
},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);
return r&&r.specified?r.value:t
},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)
}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t
}}
})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)
}}
}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t
},set:function(e,t){return e.style.cssText=t+""
}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;
return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null
}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this
}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t
}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value
})
});
var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;
function it(){return !0
}function ot(){return !1
}function at(){try{return a.activeElement
}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);
if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)
},f.elem=e),n=(n||"").match(T)||[""],u=n.length;
while(u--){s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0)
}e=null
}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);
if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;
while(u--){if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;
while(o--){a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a))
}l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])
}else{for(d in c){x.event.remove(e,d+t[u],n,r,!0)
}}}x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))
}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];
if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);
u;
u=u.parentNode){h.push(u),f=u
}f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)
}d=0;
while((u=h[d++])&&!n.isPropagationStopped()){n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault()
}if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;
try{i[g]()
}catch(y){}x.event.triggered=t,f&&(i[l]=f)
}return n.result
}},dispatch:function(e){e=x.event.fix(e);
var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};
if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;
while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;
while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped()){(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))
}}return c.postDispatch&&c.postDispatch.call(this,e),e.result
}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;
if(l&&u.nodeType&&(!e.button||"click"!==e.type)){for(;
u!=this;
u=u.parentNode||this){if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;
l>a;
a++){i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i)
}o.length&&s.push({elem:u,handlers:o})
}}}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s
},fix:function(e){if(e[x.expando]){return e
}var t,n,r,i=e.type,o=e,s=this.fixHooks[i];
s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;
while(t--){n=r[t],e[n]=o[n]
}return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;
return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e
}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus){try{return this.focus(),!1
}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t
},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t
},_default:function(e){return x.nodeName(e.target,"a")
}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)
}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});
r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()
}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)
}:function(e,t,n){var r="on"+t;
e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))
},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)
},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;
this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)
},stopPropagation:function(){var e=this.originalEvent;
this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()
}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n
}}
}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;
r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0
}),x._data(r,"submitBubbles",!0))
}),t)
},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))
},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)
}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)
}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)
})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;
Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)
}),x._data(t,"changeBubbles",!0))
}),t)
},handle:function(e){var n=e.target;
return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t
},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)
}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)
};
x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)
},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)
}}
}),x.fn.extend({on:function(e,n,r,i,o){var a,s;
if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);
for(a in e){this.on(a,n,r,e[a],o)
}return this
}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1){i=ot
}else{if(!i){return this
}}return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)
},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)
})
},one:function(e,t,n,r){return this.on(e,t,n,r,1)
},off:function(e,n,r){var i,o;
if(e&&e.preventDefault&&e.handleObj){return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this
}if("object"==typeof e){for(o in e){this.off(o,n,e[o])
}return this
}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)
})
},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)
})
},triggerHandler:function(e,n){var r=this[0];
return r?x.event.trigger(e,n,r,!0):t
}});
var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};
x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;
if("string"!=typeof e){return this.pushStack(x(e).filter(function(){for(t=0;
i>t;
t++){if(x.contains(r[t],this)){return !0
}}}))
}for(t=0;
i>t;
t++){x.find(e,r[t],n)
}return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n
},has:function(e){var t,n=x(e,this),r=n.length;
return this.filter(function(){for(t=0;
r>t;
t++){if(x.contains(this,n[t])){return !0
}}})
},not:function(e){return this.pushStack(ft(this,e||[],!0))
},filter:function(e){return this.pushStack(ft(this,e||[],!1))
},is:function(e){return !!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length
},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;
for(;
i>r;
r++){for(n=this[r];
n&&n!==t;
n=n.parentNode){if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);
break
}}}return this.pushStack(o.length>1?x.unique(o):o)
},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);
return this.pushStack(x.unique(r))
},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))
}});
function pt(e,t){do{e=e[t]
}while(e&&1!==e.nodeType);
return e
}x.each({parent:function(e){var t=e.parentNode;
return t&&11!==t.nodeType?t:null
},parents:function(e){return x.dir(e,"parentNode")
},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)
},next:function(e){return pt(e,"nextSibling")
},prev:function(e){return pt(e,"previousSibling")
},nextAll:function(e){return x.dir(e,"nextSibling")
},prevAll:function(e){return x.dir(e,"previousSibling")
},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)
},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)
},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return x.sibling(e.firstChild)
},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)
}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)
}
}),x.extend({filter:function(e,t,n){var r=t[0];
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType
}))
},dir:function(e,n,r){var i=[],o=e[n];
while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r))){1===o.nodeType&&i.push(o),o=o[n]
}return i
},sibling:function(e,t){var n=[];
for(;
e;
e=e.nextSibling){1===e.nodeType&&e!==t&&n.push(e)
}return n
}});
function ft(e,t,n){if(x.isFunction(t)){return x.grep(e,function(e,r){return !!t.call(e,r,e)!==n
})
}if(t.nodeType){return x.grep(e,function(e){return e===t!==n
})
}if("string"==typeof t){if(st.test(t)){return x.filter(t,e,n)
}t=x.filter(t,e)
}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n
})
}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();
if(n.createElement){while(t.length){n.createElement(t.pop())
}}return n
}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));
At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))
},null,e,arguments.length)
},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);
t.appendChild(e)
}})
},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);
t.insertBefore(e,t.firstChild)
}})
},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)
})
},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)
})
},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;
for(;
null!=(n=r[i]);
i++){t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n))
}return this
},empty:function(){var e,t=0;
for(;
null!=(e=this[t]);
t++){1===e.nodeType&&x.cleanData(Ft(e,!1));
while(e.firstChild){e.removeChild(e.firstChild)
}e.options&&x.nodeName(e,"select")&&(e.options.length=0)
}return this
},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)
})
},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;
if(e===t){return 1===n.nodeType?n.innerHTML.replace(gt,""):t
}if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");
try{for(;
i>r;
r++){n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e)
}n=0
}catch(o){}}n&&this.empty().append(e)
},null,e,arguments.length)
},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]
}),t=0;
return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];
i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))
},!0),t?this:this.remove()
},detach:function(e){return this.remove(e,!0)
},domManip:function(e,t,n){e=d.apply([],e);
var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);
if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h)){return this.each(function(r){var i=p.eq(r);
g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)
})
}if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;
c>u;
u++){i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u)
}if(o){for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;
o>u;
u++){i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")))
}}l=r=null
}return this
}});
function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e
}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e
}function qt(e){var t=Et.exec(e.type);
return t?e.type=t[1]:e.removeAttribute("type"),e
}function _t(e,t){var n,r=0;
for(;
null!=(n=e[r]);
r++){x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))
}}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;
if(s){delete a.handle,a.events={};
for(n in s){for(r=0,i=s[n].length;
i>r;
r++){x.event.add(t,n,s[n][r])
}}}a.data&&(a.data=x.extend({},a.data))
}}function Ot(e,t){var n,r,i;
if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);
for(r in i.events){x.removeEvent(t,r,i.handle)
}t.removeAttribute(x.expando)
}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)
}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;
for(;
a>=r;
r++){n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get())
}return this.pushStack(i)
}
});
function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;
if(!s){for(s=[],r=e.childNodes||e;
null!=(o=r[a]);
a++){!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n))
}}return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s
}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)
}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);
if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e))){for(r=Ft(o),s=Ft(e),a=0;
null!=(i=s[a]);
++a){r[a]&&Ot(i,r[a])
}}if(t){if(n){for(s=s||Ft(e),r=r||Ft(o),a=0;
null!=(i=s[a]);
a++){Mt(i,r[a])
}}else{Mt(e,o)
}}return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o
},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;
for(;
p>h;
h++){if(o=e[h],o||0===o){if("object"===x.type(o)){x.merge(d,o.nodeType?[o]:o)
}else{if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];
while(i--){s=s.lastChild
}if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;
while(i--){x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)
}}x.merge(d,s.childNodes),s.textContent="";
while(s.firstChild){s.removeChild(s.firstChild)
}s=f.lastChild
}else{d.push(t.createTextNode(o))
}}}}s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;
while(o=d[h++]){if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;
while(o=s[i++]){kt.test(o.type||"")&&n.push(o)
}}}return s=null,f
},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;
for(;
null!=(n=e[s]);
s++){if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events){for(r in a.events){f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle)
}}u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))
}}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})
}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e)){return this.each(function(t){x(this).wrapAll(e.call(this,t))
})
}if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;
while(e.firstChild&&1===e.firstChild.nodeType){e=e.firstChild
}return e
}).append(this)
}return this
},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))
}):this.each(function(){var t=x(this),n=t.contents();
n.length?n.wrapAll(e):t.append(e)
})
},wrap:function(e){var t=x.isFunction(e);
return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)
})
},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)
}).end()
}});
var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];
function tn(e,t){if(t in e){return t
}var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;
while(i--){if(t=en[i]+n,t in e){return t
}}return r
}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)
}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;
for(;
s>a;
a++){r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))))
}for(a=0;
s>a;
a++){r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"))
}return e
}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;
if(x.isArray(n)){for(o=Rt(e),i=n.length;
i>s;
s++){a[n[s]]=x.css(e,n[s],!1,o)
}return a
}return r!==t?x.style(e,n,r):x.css(e,n)
},e,n,arguments.length>1)
},show:function(){return rn(this,!0)
},hide:function(){return rn(this)
},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()
})
}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");
return""===n?"1":n
}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;
if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t){return s&&"get" in s&&(o=s.get(e,!1,i))!==t?o:u[n]
}if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set" in s&&(r=s.set(e,r,i))===t))){try{u[n]=r
}catch(c){}}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);
return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get" in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a
}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)
},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;
return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l
}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle
},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;
return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l
});
function on(e,t,n){var r=Vt.exec(t);
return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t
}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;
for(;
4>o;
o+=2){"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)))
}return a
}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);
if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i)){return i
}r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0
}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"
}function ln(e){var t=a,n=Gt[e];
return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n
}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");
return n.remove(),r
}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)
}):sn(e,n,i):t
},set:function(e,t,r){var i=r&&Rt(e);
return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)
}}
}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":t?"1":""
},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";
n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)
}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t
}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t
}}
})
}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))
},x.expr.filters.visible=function(e){return !x.expr.filters.hidden(e)
}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];
for(;
4>r;
r++){i[e+Zt[r]+t]=o[r]||o[r-2]||o[0]
}return i
}},Ut.test(e)||(x.cssHooks[e+t].set=on)
});
var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;
x.fn.extend({serialize:function(){return x.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");
return e?x.makeArray(e):this
}).filter(function(){var e=this.type;
return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))
}).map(function(e,t){var n=x(this).val();
return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}
}):{name:t.name,value:n.replace(fn,"\r\n")}
}).get()
}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)
};
if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e)){x.each(e,function(){o(this.name,this.value)
})
}else{for(r in e){gn(r,e[r],n,o)
}}return i.join("&").replace(cn,"+")
};
function gn(e,t,n,r){var i;
if(x.isArray(t)){x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)
})
}else{if(n||"object"!==x.type(t)){r(e,t)
}else{for(i in t){gn(e+"["+i+"]",t[i],n,r)
}}}}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)
}
}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)
},bind:function(e,t,n){return this.on(e,null,t,n)
},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)
},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)
}});
var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");
try{yn=o.href
}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href
}mn=En.exec(yn.toLowerCase())||[];
function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");
var r,i=0,o=t.toLowerCase().match(T)||[];
if(x.isFunction(n)){while(r=o[i++]){"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)
}}}
}function qn(e,n,r,i){var o={},a=e===jn;
function s(l){var u;
return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);
return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)
}),u
}return s(n.dataTypes[0])||!o["*"]&&s("*")
}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};
for(i in n){n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i])
}return r&&x.extend(!0,e,r),e
}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn){return Sn.apply(this,arguments)
}var i,o,a,s=this,l=e.indexOf(" ");
return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)
}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])
}),this
},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)
}
}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)
},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};
var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;
if(2===b){if(!c){c={};
while(t=Tn.exec(a)){c[t[1].toLowerCase()]=t[2]
}}t=c[e.toLowerCase()]
}return null==t?null:t
},getAllResponseHeaders:function(){return 2===b?a:null
},setRequestHeader:function(e,t){var n=e.toLowerCase();
return b||(e=v[n]=v[n]||e,y[e]=t),this
},overrideMimeType:function(e){return b||(p.mimeType=e),this
},statusCode:function(e){var t;
if(e){if(2>b){for(t in e){m[t]=[m[t],e[t]]
}}else{C.always(e[C.status])
}}return this
},abort:function(e){var t=e||w;
return u&&u.abort(t),k(0,t),this
}};
if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b){return C
}l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);
for(i in p.headers){C.setRequestHeader(i,p.headers[i])
}if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b)){return C.abort()
}w="abort";
for(i in {success:1,error:1,complete:1}){C[i](p[i])
}if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")
},p.timeout));
try{b=1,u.send(y,k)
}catch(N){if(!(2>b)){throw N
}k(-1,N)
}}else{k(-1,"No Transport")
}function k(e,n,r,i){var c,y,v,w,T,N=n;
2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))
}return C
},getJSON:function(e,t,n){return x.get(e,t,n,"json")
},getScript:function(e,n){return x.get(e,t,n,"script")
}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})
}
});
function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;
while("*"===u[0]){u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"))
}if(o){for(s in l){if(l[s]&&l[s].test(o)){u.unshift(s);
break
}}}if(u[0] in r){a=u[0]
}else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;
break
}i||(i=s)
}a=a||i
}return a?(a!==u[0]&&u.unshift(a),r[a]):t
}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();
if(c[1]){for(a in e.converters){u[a.toLowerCase()]=e.converters[a]
}}o=c.shift();
while(o){if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift()){if("*"===o){o=l
}else{if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a){for(i in u){if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));
break
}}}if(a!==!0){if(a&&e["throws"]){t=a(t)
}else{try{t=a(t)
}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}
}}}}}}}return{state:"success",data:t}
}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e
}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)
}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;
return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))
},r.insertBefore(n,r.firstChild)
},abort:function(){n&&n.onload(t,!0)
}}
}});
var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;
x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;
return this[e]=!0,e
}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");
return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]
},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments
},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t
}),"script"):t
});
var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;
for(e in Pn){Pn[e](t,!0)
}};
function In(){try{return new e.XMLHttpRequest
}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")
}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return !this.isLocal&&In()||zn()
}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials" in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;
return{send:function(i,o){var a,s,l=n.xhr();
if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields){for(s in n.xhrFields){l[s]=n.xhrFields[s]
}}n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
try{for(s in i){l.setRequestHeader(s,i[s])
}}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;
try{if(r&&(i||4===l.readyState)){if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i){4!==l.readyState&&l.abort()
}else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);
try{c=l.statusText
}catch(f){c=""
}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404
}}}catch(d){i||o(-1,d)
}p&&o(s,c,p,u)
},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()
},abort:function(){r&&r(t,!0)
}}
}});
var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;
if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;
do{s=s||".5",a/=s,x.style(n.elem,e,a+o)
}while(s!==(s=n.cur()/r)&&1!==s&&--l)
}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n
}]};
function Kn(){return setTimeout(function(){Xn=t
}),Xn=x.now()
}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;
for(;
a>o;
o++){if(r=i[o].call(n,t,e)){return r
}}}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem
}),l=function(){if(i){return !1
}var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;
for(;
l>a;
a++){u.tweens[a].run(o)
}return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)
},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);
return u.tweens.push(r),r
},stop:function(t){var n=0,r=t?u.tweens.length:0;
if(i){return this
}for(i=!0;
r>n;
n++){u.tweens[n].run(1)
}return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this
}}),c=u.props;
for(tr(c,u.opts.specialEasing);
a>o;
o++){if(r=Gn[o].call(u,e,c,u.opts)){return r
}}return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)
}function tr(e,t){var n,r,i,o,a;
for(n in e){if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand" in a){o=a.expand(o),delete e[r];
for(n in o){n in e||(e[n]=o[n],t[n]=i)
}}else{t[r]=i
}}}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");
var n,r=0,i=e.length;
for(;
i>r;
r++){n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)
}},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)
}});
function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");
n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()
}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()
})
})),1===e.nodeType&&("height" in t||"width" in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]
}));
for(r in t){if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){continue
}c[r]=d&&d[r]||x.style(e,r)
}}if(!x.isEmptyObject(c)){d?"hidden" in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()
}),u.done(function(){var t;
x._removeData(e,"fxshow");
for(t in c){x.style(e,t,c[t])
}});
for(r in c){a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))
}}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)
}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")
},cur:function(){var e=rr.propHooks[this.prop];
return e&&e.get?e.get(this):rr.propHooks._default.get(this)
},run:function(e){var t,n=rr.propHooks[this.prop];
return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this
}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;
return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]
},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now
}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)
}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];
x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)
}
}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)
},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);
(i||x._data(this,"finish"))&&t.stop(!0)
};
return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)
},stop:function(e,n,r){var i=function(e){var t=e.stop;
delete e.stop,t(r)
};
return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);
if(n){a[n]&&a[n].stop&&i(a[n])
}else{for(n in a){a[n]&&a[n].stop&&Jn.test(n)&&i(a[n])
}}for(n=o.length;
n--;
){o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1))
}(t||!r)&&x.dequeue(this,e)
})
},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;
for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;
t--;
){o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
}for(t=0;
a>t;
t++){r[t]&&r[t].finish&&r[t].finish.call(this)
}delete n.finish
})
}});
function ir(e,t){var n,r={height:e},i=0;
for(t=t?1:0;
4>i;
i+=2-t){n=Zt[i],r["margin"+n]=r["padding"+n]=e
}return t&&(r.opacity=r.width=e),r
}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)
}
}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};
return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)
},r
},x.easing={linear:function(e){return e
},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2
}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;
for(Xn=x.now();
n.length>r;
r++){e=n[r],e()||n[r]!==e||n.splice(r--,1)
}n.length||x.fx.stop(),Xn=t
},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()
},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))
},x.fx.stop=function(){clearInterval(Un),Un=null
},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem
}).length
}),x.fn.offset=function(e){if(arguments.length){return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)
})
}var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;
if(s){return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o
}},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");
"static"===r&&(e.style.position="relative");
var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;
l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using" in t?t.using.call(e,u):i.css(u)
}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];
return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;
while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position")){e=e.offsetParent
}return e||s
})
}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);
x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);
return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)
},e,i,arguments.length,null)
}
});
function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1
}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");
return x.access(this,function(n,r,i){var o;
return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)
},n,a?i:t,a,null)
}
})
}),x.fn.size=function(){return this.length
},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x
}))
})(window);
/*! jQuery UI - v1.10.4 - 2015-01-14
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.resizable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.slider.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
(function(j,f){function d(p,m){var e,w,q,u=p.nodeName.toLowerCase();
return"area"===u?(e=p.parentNode,w=e.name,p.href&&w&&"map"===e.nodeName.toLowerCase()?(q=j("img[usemap=#"+w+"]")[0],!!q&&g(q)):!1):(/input|select|textarea|button|object/.test(u)?!p.disabled:"a"===u?p.href||m:m)&&g(p)
}function g(a){return j.expr.filters.visible(a)&&!j(a).parents().addBack().filter(function(){return"hidden"===j.css(this,"visibility")
}).length
}var b=0,k=/^ui-id-\d+$/;
j.ui=j.ui||{},j.extend(j.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),j.fn.extend({focus:function(a){return function(e,m){return"number"==typeof e?this.each(function(){var i=this;
setTimeout(function(){j(i).focus(),m&&m.call(i)
},e)
}):a.apply(this,arguments)
}
}(j.fn.focus),scrollParent:function(){var a;
return a=j.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(j.css(this,"position"))&&/(auto|scroll)/.test(j.css(this,"overflow")+j.css(this,"overflow-y")+j.css(this,"overflow-x"))
}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(j.css(this,"overflow")+j.css(this,"overflow-y")+j.css(this,"overflow-x"))
}).eq(0),/fixed/.test(this.css("position"))||!a.length?j(document):a
},zIndex:function(m){if(m!==f){return this.css("zIndex",m)
}if(this.length){for(var o,e,p=j(this[0]);
p.length&&p[0]!==document;
){if(o=p.css("position"),("absolute"===o||"relative"===o||"fixed"===o)&&(e=parseInt(p.css("zIndex"),10),!isNaN(e)&&0!==e)){return e
}p=p.parent()
}}return 0
},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++b)
})
},removeUniqueId:function(){return this.each(function(){k.test(this.id)&&j(this).removeAttr("id")
})
}}),j.extend(j.expr[":"],{data:j.expr.createPseudo?j.expr.createPseudo(function(a){return function(e){return !!j.data(e,a)
}
}):function(e,a,m){return !!j.data(e,m[3])
},focusable:function(a){return d(a,!isNaN(j.attr(a,"tabindex")))
},tabbable:function(i){var m=j.attr(i,"tabindex"),e=isNaN(m);
return(e||m>=0)&&d(i,!e)
}}),j("<a>").outerWidth(1).jquery||j.each(["Width","Height"],function(m,p){function e(r,o,x,n){return j.each(w,function(){o-=parseFloat(j.css(r,"padding"+this))||0,x&&(o-=parseFloat(j.css(r,"border"+this+"Width"))||0),n&&(o-=parseFloat(j.css(r,"margin"+this))||0)
}),o
}var w="Width"===p?["Left","Right"]:["Top","Bottom"],q=p.toLowerCase(),u={innerWidth:j.fn.innerWidth,innerHeight:j.fn.innerHeight,outerWidth:j.fn.outerWidth,outerHeight:j.fn.outerHeight};
j.fn["inner"+p]=function(a){return a===f?u["inner"+p].call(this):this.each(function(){j(this).css(q,e(this,a)+"px")
})
},j.fn["outer"+p]=function(n,a){return"number"!=typeof n?u["outer"+p].call(this,n):this.each(function(){j(this).css(q,e(this,n,!0,a)+"px")
})
}
}),j.fn.addBack||(j.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))
}),j("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(j.fn.removeData=function(a){return function(e){return arguments.length?a.call(this,j.camelCase(e)):a.call(this)
}
}(j.fn.removeData)),j.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),j.support.selectstart="onselectstart" in document.createElement("div"),j.fn.extend({disableSelection:function(){return this.bind((j.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}}),j.extend(j.ui,{plugin:{add:function(o,m,p){var e,q=j.ui[o].prototype;
for(e in p){q.plugins[e]=q.plugins[e]||[],q.plugins[e].push([m,p[e]])
}},call:function(q,o,n){var p,m=q.plugins[o];
if(m&&q.element[0].parentNode&&11!==q.element[0].parentNode.nodeType){for(p=0;
m.length>p;
p++){q.options[m[p][0]]&&m[p][1].apply(q.element,n)
}}}},hasScroll:function(n,m){if("hidden"===j(n).css("overflow")){return !1
}var o=m&&"left"===m?"scrollLeft":"scrollTop",e=!1;
return n[o]>0?!0:(n[o]=1,e=n[o]>0,n[o]=0,e)
}})
})(jQuery);
(function(j,f){var d=0,g=Array.prototype.slice,b=j.cleanData;
j.cleanData=function(e){for(var a,k=0;
null!=(a=e[k]);
k++){try{j(a).triggerHandler("remove")
}catch(m){}}b(e)
},j.widget=function(q,z,x){var m,e,k,w,p={},y=q.split(".")[0];
q=q.split(".")[1],m=y+"-"+q,x||(x=z,z=j.Widget),j.expr[":"][m.toLowerCase()]=function(a){return !!j.data(a,m)
},j[y]=j[y]||{},e=j[y][q],k=j[y][q]=function(n,a){return this._createWidget?(arguments.length&&this._createWidget(n,a),f):new k(n,a)
},j.extend(k,e,{version:x.version,_proto:j.extend({},x),_childConstructors:[]}),w=new z,w.options=j.widget.extend({},w.options),j.each(x,function(o,n){return j.isFunction(n)?(p[o]=function(){var i=function(){return z.prototype[o].apply(this,arguments)
},a=function(r){return z.prototype[o].apply(this,r)
};
return function(){var r,u=this._super,A=this._superApply;
return this._super=i,this._superApply=a,r=n.apply(this,arguments),this._super=u,this._superApply=A,r
}
}(),f):(p[o]=n,f)
}),k.prototype=j.widget.extend(w,{widgetEventPrefix:e?w.widgetEventPrefix||q:q},p,{constructor:k,namespace:y,widgetName:q,widgetFullName:m}),e?(j.each(e._childConstructors,function(n,a){var o=a.prototype;
j.widget(o.namespace+"."+o.widgetName,k,a._proto)
}),delete e._childConstructors):z._childConstructors.push(k),j.widget.bridge(q,k)
},j.widget.extend=function(k){for(var e,u,p=g.call(arguments,1),q=0,m=p.length;
m>q;
q++){for(e in p[q]){u=p[q][e],p[q].hasOwnProperty(e)&&u!==f&&(k[e]=j.isPlainObject(u)?j.isPlainObject(k[e])?j.widget.extend({},k[e],u):j.widget.extend({},u):u)
}}return k
},j.widget.bridge=function(k,e){var m=e.prototype.widgetFullName||k;
j.fn[k]=function(n){var p="string"==typeof n,i=g.call(arguments,1),a=this;
return n=!p&&i.length?j.widget.extend.apply(null,[n].concat(i)):n,p?this.each(function(){var q,o=j.data(this,m);
return o?j.isFunction(o[n])&&"_"!==n.charAt(0)?(q=o[n].apply(o,i),q!==o&&q!==f?(a=q&&q.jquery?a.pushStack(q.get()):q,!1):f):j.error("no such method '"+n+"' for "+k+" widget instance"):j.error("cannot call methods on "+k+" prior to initialization; attempted to call method '"+n+"'")
}):this.each(function(){var o=j.data(this,m);
o?o.option(n||{})._init():j.data(this,m,new e(n,this))
}),a
}
},j.Widget=function(){},j.Widget._childConstructors=[],j.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(a,e){e=j(e||this.defaultElement||this)[0],this.element=j(e),this.uuid=d++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=j.widget.extend({},this.options,this._getCreateOptions(),a),this.bindings=j(),this.hoverable=j(),this.focusable=j(),e!==this&&(j.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(i){i.target===e&&this.destroy()
}}),this.document=j(e.style?e.ownerDocument:e.document||e),this.window=j(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()
},_getCreateOptions:j.noop,_getCreateEventData:j.noop,_create:j.noop,_init:j.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(j.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")
},_destroy:j.noop,widget:function(){return this.element
},option:function(k,m){var e,u,p,q=k;
if(0===arguments.length){return j.widget.extend({},this.options)
}if("string"==typeof k){if(q={},e=k.split("."),k=e.shift(),e.length){for(u=q[k]=j.widget.extend({},this.options[k]),p=0;
e.length-1>p;
p++){u[e[p]]=u[e[p]]||{},u=u[e[p]]
}if(k=e.pop(),1===arguments.length){return u[k]===f?null:u[k]
}u[k]=m
}else{if(1===arguments.length){return this.options[k]===f?null:this.options[k]
}q[k]=m
}}return this._setOptions(q),this
},_setOptions:function(i){var a;
for(a in i){this._setOption(a,i[a])
}return this
},_setOption:function(i,a){return this.options[i]=a,"disabled"===i&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!a).attr("aria-disabled",a),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this
},enable:function(){return this._setOption("disabled",!1)
},disable:function(){return this._setOption("disabled",!0)
},_on:function(k,m,e){var p,o=this;
"boolean"!=typeof k&&(e=m,m=k,k=!1),e?(m=p=j(m),this.bindings=this.bindings.add(m)):(e=m,m=this.element,p=this.widget()),j.each(e,function(n,x){function r(){return k||o.options.disabled!==!0&&!j(this).hasClass("ui-state-disabled")?("string"==typeof x?o[x]:x).apply(o,arguments):f
}"string"!=typeof x&&(r.guid=x.guid=x.guid||r.guid||j.guid++);
var i=n.match(/^(\w+)\s*(.*)$/),q=i[1]+o.eventNamespace,w=i[2];
w?p.delegate(w,q,r):m.bind(q,r)
})
},_off:function(i,a){a=(a||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,i.unbind(a).undelegate(a)
},_delay:function(n,k){function a(){return("string"==typeof n?m[n]:n).apply(m,arguments)
}var m=this;
return setTimeout(a,k||0)
},_hoverable:function(a){this.hoverable=this.hoverable.add(a),this._on(a,{mouseenter:function(e){j(e.currentTarget).addClass("ui-state-hover")
},mouseleave:function(e){j(e.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(a){this.focusable=this.focusable.add(a),this._on(a,{focusin:function(e){j(e.currentTarget).addClass("ui-state-focus")
},focusout:function(e){j(e.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(m,k,o){var e,q,p=this.options[m];
if(o=o||{},k=j.Event(k),k.type=(m===this.widgetEventPrefix?m:this.widgetEventPrefix+m).toLowerCase(),k.target=this.element[0],q=k.originalEvent){for(e in q){e in k||(k[e]=q[e])
}}return this.element.trigger(k,o),!(j.isFunction(p)&&p.apply(this.element[0],[k].concat(o))===!1||k.isDefaultPrevented())
}},j.each({show:"fadeIn",hide:"fadeOut"},function(e,a){j.Widget.prototype["_"+e]=function(k,i,q){"string"==typeof i&&(i={effect:i});
var m,p=i?i===!0||"number"==typeof i?a:i.effect||a:e;
i=i||{},"number"==typeof i&&(i={duration:i}),m=!j.isEmptyObject(i),i.complete=q,i.delay&&k.delay(i.delay),m&&j.effects&&j.effects.effect[p]?k[e](i):p!==e&&k[p]?k[p](i.duration,i.easing,q):k.queue(function(n){j(this)[e](),q&&q.call(k[0]),n()
})
}
})
})(jQuery);
(function(b){var a=!1;
b(document).mouseup(function(){a=!1
}),b.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var d=this;
this.element.bind("mousedown."+this.widgetName,function(f){return d._mouseDown(f)
}).bind("click."+this.widgetName,function(e){return !0===b.data(e.target,d.widgetName+".preventClickEvent")?(b.removeData(e.target,d.widgetName+".preventClickEvent"),e.stopImmediatePropagation(),!1):undefined
}),this.started=!1
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
},_mouseDown:function(e){if(!a){this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;
var f=this,d=1===e.which,g="string"==typeof this.options.cancel&&e.target.nodeName?b(e.target).closest(this.options.cancel).length:!1;
return d&&!g&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){f.mouseDelayMet=!0
},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===b.data(e.target,this.widgetName+".preventClickEvent")&&b.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(i){return f._mouseMove(i)
},this._mouseUpDelegate=function(i){return f._mouseUp(i)
},b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),a=!0,!0)):!0
}},_mouseMove:function(d){return b.ui.ie&&(!document.documentMode||9>document.documentMode)&&!d.button?this._mouseUp(d):this._mouseStarted?(this._mouseDrag(d),d.preventDefault()):(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,d)!==!1,this._mouseStarted?this._mouseDrag(d):this._mouseUp(d)),!this._mouseStarted)
},_mouseUp:function(d){return b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,d.target===this._mouseDownEvent.target&&b.data(d.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(d)),!1
},_mouseDistanceMet:function(d){return Math.max(Math.abs(this._mouseDownEvent.pageX-d.pageX),Math.abs(this._mouseDownEvent.pageY-d.pageY))>=this.options.distance
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return !0
}})
})(jQuery);
(function(y,D){function q(f,d,a){return[parseFloat(f[0])*(g.test(f[0])?d/100:1),parseFloat(f[1])*(g.test(f[1])?a/100:1)]
}function E(d,a){return parseInt(y.css(d,a),10)||0
}function B(d){var a=d[0];
return 9===a.nodeType?{width:d.width(),height:d.height(),offset:{top:0,left:0}}:y.isWindow(a)?{width:d.width(),height:d.height(),offset:{top:d.scrollTop(),left:d.scrollLeft()}}:a.preventDefault?{width:0,height:0,offset:{top:a.pageY,left:a.pageX}}:{width:d.outerWidth(),height:d.outerHeight(),offset:d.offset()}
}y.ui=y.ui||{};
var k,b=Math.max,j=Math.abs,w=Math.round,m=/left|center|right/,C=/top|center|bottom/,z=/[\+\-]\d+(\.[\d]+)?%?/,A=/^\w+/,g=/%$/,x=y.fn.position;
y.position={scrollbarWidth:function(){if(k!==D){return k
}var e,f,d=y("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),n=d.children()[0];
return y("body").append(d),e=n.offsetWidth,d.css("overflow","scroll"),f=n.offsetWidth,e===f&&(f=d[0].clientWidth),d.remove(),k=e-f
},getScrollInfo:function(f){var e=f.isWindow||f.isDocument?"":f.element.css("overflow-x"),o=f.isWindow||f.isDocument?"":f.element.css("overflow-y"),d="scroll"===e||"auto"===e&&f.width<f.element[0].scrollWidth,p="scroll"===o||"auto"===o&&f.height<f.element[0].scrollHeight;
return{width:p?y.position.scrollbarWidth():0,height:d?y.position.scrollbarWidth():0}
},getWithinInfo:function(f){var e=y(f||window),n=y.isWindow(e[0]),d=!!e[0]&&9===e[0].nodeType;
return{element:e,isWindow:n,isDocument:d,offset:e.offset()||{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:n?e.width():e.outerWidth(),height:n?e.height():e.outerHeight()}
}},y.fn.position=function(I){if(!I||!I.of){return x.apply(this,arguments)
}I=y.extend({},I);
var d,a,e,i,H,o,r=y(I.of),G=y.position.getWithinInfo(I.within),u=y.position.getScrollInfo(G),f=(I.collision||"flip").split(" "),F={};
return o=B(r),r[0].preventDefault&&(I.at="left top"),a=o.width,e=o.height,i=o.offset,H=y.extend({},i),y.each(["my","at"],function(){var J,n,p=(I[this]||"").split(" ");
1===p.length&&(p=m.test(p[0])?p.concat(["center"]):C.test(p[0])?["center"].concat(p):["center","center"]),p[0]=m.test(p[0])?p[0]:"center",p[1]=C.test(p[1])?p[1]:"center",J=z.exec(p[0]),n=z.exec(p[1]),F[this]=[J?J[0]:0,n?n[0]:0],I[this]=[A.exec(p[0])[0],A.exec(p[1])[0]]
}),1===f.length&&(f[1]=f[0]),"right"===I.at[0]?H.left+=a:"center"===I.at[0]&&(H.left+=a/2),"bottom"===I.at[1]?H.top+=e:"center"===I.at[1]&&(H.top+=e/2),d=q(F.at,a,e),H.left+=d[0],H.top+=d[1],this.each(function(){var R,p,U=y(this),O=U.outerWidth(),P=U.outerHeight(),L=E(this,"marginLeft"),Q=E(this,"marginTop"),J=O+L+E(this,"marginRight")+u.width,n=P+Q+E(this,"marginBottom")+u.height,K=y.extend({},H),N=q(F.my,U.outerWidth(),U.outerHeight());
"right"===I.my[0]?K.left-=O:"center"===I.my[0]&&(K.left-=O/2),"bottom"===I.my[1]?K.top-=P:"center"===I.my[1]&&(K.top-=P/2),K.left+=N[0],K.top+=N[1],y.support.offsetFractions||(K.left=w(K.left),K.top=w(K.top)),R={marginLeft:L,marginTop:Q},y.each(["left","top"],function(M,S){y.ui.position[f[M]]&&y.ui.position[f[M]][S](K,{targetWidth:a,targetHeight:e,elemWidth:O,elemHeight:P,collisionPosition:R,collisionWidth:J,collisionHeight:n,offset:[d[0]+N[0],d[1]+N[1]],my:I.my,at:I.at,within:G,elem:U})
}),I.using&&(p=function(W){var S=i.left-K.left,V=S+a-O,M=i.top-K.top,X=M+e-P,T={target:{element:r,left:i.left,top:i.top,width:a,height:e},element:{element:U,left:K.left,top:K.top,width:O,height:P},horizontal:0>V?"left":S>0?"right":"center",vertical:0>X?"top":M>0?"bottom":"middle"};
O>a&&a>j(S+V)&&(T.horizontal="center"),P>e&&e>j(M+X)&&(T.vertical="middle"),T.important=b(j(S),j(V))>b(j(M),j(X))?"horizontal":"vertical",I.using.call(this,W,T)
}),U.offset(y.extend(K,{using:p}))
})
},y.ui.position={fit:{left:function(F,H){var r,I=H.within,G=I.isWindow?I.scrollLeft:I.offset.left,f=I.width,d=F.left-H.collisionPosition.marginLeft,u=G-d,p=d+H.collisionWidth-f-G;
H.collisionWidth>f?u>0&&0>=p?(r=F.left+u+H.collisionWidth-f-G,F.left+=u-r):F.left=p>0&&0>=u?G:u>p?G+f-H.collisionWidth:G:u>0?F.left+=u:p>0?F.left-=p:F.left=b(F.left-d,F.left)
},top:function(F,H){var r,I=H.within,G=I.isWindow?I.scrollTop:I.offset.top,f=H.within.height,d=F.top-H.collisionPosition.marginTop,u=G-d,p=d+H.collisionHeight-f-G;
H.collisionHeight>f?u>0&&0>=p?(r=F.top+u+H.collisionHeight-f-G,F.top+=u-r):F.top=p>0&&0>=u?G:u>p?G+f-H.collisionHeight:G:u>0?F.top+=u:p>0?F.top-=p:F.top=b(F.top-d,F.top)
}},flip:{left:function(L,Q){var I,R,O=Q.within,G=O.offset.left+O.scrollLeft,o=O.width,J=O.isWindow?O.scrollLeft:O.offset.left,H=L.left-Q.collisionPosition.marginLeft,P=H-J,M=H+Q.collisionWidth-o-J,N="left"===Q.my[0]?-Q.elemWidth:"right"===Q.my[0]?Q.elemWidth:0,F="left"===Q.at[0]?Q.targetWidth:"right"===Q.at[0]?-Q.targetWidth:0,K=-2*Q.offset[0];
0>P?(I=L.left+N+F+K+Q.collisionWidth-o-G,(0>I||j(P)>I)&&(L.left+=N+F+K)):M>0&&(R=L.left-Q.collisionPosition.marginLeft+N+F+K-J,(R>0||M>j(R))&&(L.left+=N+F+K))
},top:function(M,R){var J,S,P=R.within,G=P.offset.top+P.scrollTop,o=P.height,K=P.isWindow?P.scrollTop:P.offset.top,I=M.top-R.collisionPosition.marginTop,Q=I-K,N=I+R.collisionHeight-o-K,O="top"===R.my[1],F=O?-R.elemHeight:"bottom"===R.my[1]?R.elemHeight:0,L="top"===R.at[1]?R.targetHeight:"bottom"===R.at[1]?-R.targetHeight:0,H=-2*R.offset[1];
0>Q?(S=M.top+F+L+H+R.collisionHeight-o-G,M.top+F+L+H>Q&&(0>S||j(Q)>S)&&(M.top+=F+L+H)):N>0&&(J=M.top-R.collisionPosition.marginTop+F+L+H-K,M.top+F+L+H>N&&(J>0||N>j(J))&&(M.top+=F+L+H))
}},flipfit:{left:function(){y.ui.position.flip.left.apply(this,arguments),y.ui.position.fit.left.apply(this,arguments)
},top:function(){y.ui.position.flip.top.apply(this,arguments),y.ui.position.fit.top.apply(this,arguments)
}}},function(){var f,e,p,d,G,u=document.getElementsByTagName("body")[0],F=document.createElement("div");
f=document.createElement(u?"div":"body"),p={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},u&&y.extend(p,{position:"absolute",left:"-1000px",top:"-1000px"});
for(G in p){f.style[G]=p[G]
}f.appendChild(F),e=u||document.documentElement,e.insertBefore(f,e.firstChild),F.style.cssText="position: absolute; left: 10.7432222px;",d=y(F).offset().left,y.support.offsetFractions=d>10&&11>d,f.innerHTML="",e.removeChild(f)
}()
})(jQuery);
(function(a){a.widget("ui.draggable",a.ui.mouse,{version:"1.10.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()
},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()
},_mouseCapture:function(d){var b=this.options;
return this.helper||b.disabled||a(d.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(d),this.handle?(a(b.iframeFix===!0?"iframe":b.iframeFix).each(function(){a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")
}),!0):!1)
},_mouseStart:function(d){var b=this.options;
return this.helper=this._createHelper(d),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,a.extend(this.offset,{click:{left:d.pageX-this.offset.left,top:d.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(d),this.originalPageX=d.pageX,this.originalPageY=d.pageY,b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt),this._setContainment(),this._trigger("start",d)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!b.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,d),this._mouseDrag(d,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,d),!0)
},_mouseDrag:function(d,b){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(d),this.positionAbs=this._convertPositionTo("absolute"),!b){var e=this._uiHash();
if(this._trigger("drag",d,e)===!1){return this._mouseUp({}),!1
}this.position=e.position
}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),a.ui.ddmanager&&a.ui.ddmanager.drag(this,d),!1
},_mouseStop:function(d){var b=this,e=!1;
return a.ui.ddmanager&&!this.options.dropBehaviour&&(e=a.ui.ddmanager.drop(this,d)),this.dropped&&(e=this.dropped,this.dropped=!1),"original"!==this.options.helper||a.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!e||"valid"===this.options.revert&&e||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,e)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){b._trigger("stop",d)!==!1&&b._clear()
}):this._trigger("stop",d)!==!1&&this._clear(),!1):!1
},_mouseUp:function(b){return a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)
},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this
},_getHandle:function(b){return this.options.handle?!!a(b.target).closest(this.element.find(this.options.handle)).length:!0
},_createHelper:function(d){var b=this.options,e=a.isFunction(b.helper)?a(b.helper.apply(this.element[0],[d])):"clone"===b.helper?this.element.clone().removeAttr("id"):this.element;
return e.parents("body").length||e.appendTo("parent"===b.appendTo?this.element[0].parentNode:b.appendTo),e[0]===this.element[0]||/(fixed|absolute)/.test(e.css("position"))||e.css("position","absolute"),e
},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left" in b&&(this.offset.click.left=b.left+this.margins.left),"right" in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top" in b&&(this.offset.click.top=b.top+this.margins.top),"bottom" in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)
},_getParentOffset:function(){var b=this.offsetParent.offset();
return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&a.ui.ie)&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if("relative"===this.cssPosition){var b=this.element.position();
return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}return{top:0,left:0}
},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var e,d,f,b=this.options;
return b.containment?"window"===b.containment?(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===b.containment?(this.containment=[0,0,a(document).width()-this.helperProportions.width-this.margins.left,(a(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):b.containment.constructor===Array?(this.containment=b.containment,undefined):("parent"===b.containment&&(b.containment=this.helper[0].parentNode),d=a(b.containment),f=d[0],f&&(e="hidden"!==d.css("overflow"),this.containment=[(parseInt(d.css("borderLeftWidth"),10)||0)+(parseInt(d.css("paddingLeft"),10)||0),(parseInt(d.css("borderTopWidth"),10)||0)+(parseInt(d.css("paddingTop"),10)||0),(e?Math.max(f.scrollWidth,f.offsetWidth):f.offsetWidth)-(parseInt(d.css("borderRightWidth"),10)||0)-(parseInt(d.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(f.scrollHeight,f.offsetHeight):f.offsetHeight)-(parseInt(d.css("borderBottomWidth"),10)||0)-(parseInt(d.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=d),undefined):(this.containment=null,undefined)
},_convertPositionTo:function(e,d){d||(d=this.position);
var f="absolute"===e?1:-1,b="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;
return this.offset.scroll||(this.offset.scroll={top:b.scrollTop(),left:b.scrollLeft()}),{top:d.top+this.offset.relative.top*f+this.offset.parent.top*f-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*f,left:d.left+this.offset.relative.left*f+this.offset.parent.left*f-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*f}
},_generatePosition:function(m){var g,p,k,e,b=this.options,d="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,j=m.pageX,f=m.pageY;
return this.offset.scroll||(this.offset.scroll={top:d.scrollTop(),left:d.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(p=this.relative_container.offset(),g=[this.containment[0]+p.left,this.containment[1]+p.top,this.containment[2]+p.left,this.containment[3]+p.top]):g=this.containment,m.pageX-this.offset.click.left<g[0]&&(j=g[0]+this.offset.click.left),m.pageY-this.offset.click.top<g[1]&&(f=g[1]+this.offset.click.top),m.pageX-this.offset.click.left>g[2]&&(j=g[2]+this.offset.click.left),m.pageY-this.offset.click.top>g[3]&&(f=g[3]+this.offset.click.top)),b.grid&&(k=b.grid[1]?this.originalPageY+Math.round((f-this.originalPageY)/b.grid[1])*b.grid[1]:this.originalPageY,f=g?k-this.offset.click.top>=g[1]||k-this.offset.click.top>g[3]?k:k-this.offset.click.top>=g[1]?k-b.grid[1]:k+b.grid[1]:k,e=b.grid[0]?this.originalPageX+Math.round((j-this.originalPageX)/b.grid[0])*b.grid[0]:this.originalPageX,j=g?e-this.offset.click.left>=g[0]||e-this.offset.click.left>g[2]?e:e-this.offset.click.left>=g[0]?e-b.grid[0]:e+b.grid[0]:e)),{top:f-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:j-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1
},_trigger:function(d,b,e){return e=e||this._uiHash(),a.ui.plugin.call(this,d,[b,e]),"drag"===d&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,d,b,e)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(e,d){var f=a(this).data("ui-draggable"),b=f.options,g=a.extend({},d,{item:f.element});
f.sortables=[],a(b.connectToSortable).each(function(){var j=a.data(this,"ui-sortable");
j&&!j.options.disabled&&(f.sortables.push({instance:j,shouldRevert:j.options.revert}),j.refreshPositions(),j._trigger("activate",e,g))
})
},stop:function(e,d){var f=a(this).data("ui-draggable"),b=a.extend({},d,{item:f.element});
a.each(f.sortables,function(){this.instance.isOver?(this.instance.isOver=0,f.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(e),this.instance.options.helper=this.instance.options._helper,"original"===f.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",e,b))
})
},drag:function(e,d){var f=a(this).data("ui-draggable"),b=this;
a.each(f.sortables,function(){var i=!1,g=this;
this.instance.positionAbs=f.positionAbs,this.instance.helperProportions=f.helperProportions,this.instance.offset.click=f.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(i=!0,a.each(f.sortables,function(){return this.instance.positionAbs=f.positionAbs,this.instance.helperProportions=f.helperProportions,this.instance.offset.click=f.offset.click,this!==g&&this.instance._intersectsWith(this.instance.containerCache)&&a.contains(g.instance.element[0],this.instance.element[0])&&(i=!1),i
})),i?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(b).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return d.helper[0]
},e.target=this.instance.currentItem[0],this.instance._mouseCapture(e,!0),this.instance._mouseStart(e,!0,!0),this.instance.offset.click.top=f.offset.click.top,this.instance.offset.click.left=f.offset.click.left,this.instance.offset.parent.left-=f.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=f.offset.parent.top-this.instance.offset.parent.top,f._trigger("toSortable",e),f.dropped=this.instance.element,f.currentItem=f.element,this.instance.fromOutside=f),this.instance.currentItem&&this.instance._mouseDrag(e)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",e,this.instance._uiHash(this.instance)),this.instance._mouseStop(e,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),f._trigger("fromSortable",e),f.dropped=!1)
})
}}),a.ui.plugin.add("draggable","cursor",{start:function(){var d=a("body"),b=a(this).data("ui-draggable").options;
d.css("cursor")&&(b._cursor=d.css("cursor")),d.css("cursor",b.cursor)
},stop:function(){var b=a(this).data("ui-draggable").options;
b._cursor&&a("body").css("cursor",b._cursor)
}}),a.ui.plugin.add("draggable","opacity",{start:function(e,d){var f=a(d.helper),b=a(this).data("ui-draggable").options;
f.css("opacity")&&(b._opacity=f.css("opacity")),f.css("opacity",b.opacity)
},stop:function(d,b){var e=a(this).data("ui-draggable").options;
e._opacity&&a(b.helper).css("opacity",e._opacity)
}}),a.ui.plugin.add("draggable","scroll",{start:function(){var b=a(this).data("ui-draggable");
b.scrollParent[0]!==document&&"HTML"!==b.scrollParent[0].tagName&&(b.overflowOffset=b.scrollParent.offset())
},drag:function(e){var d=a(this).data("ui-draggable"),f=d.options,b=!1;
d.scrollParent[0]!==document&&"HTML"!==d.scrollParent[0].tagName?(f.axis&&"x"===f.axis||(d.overflowOffset.top+d.scrollParent[0].offsetHeight-e.pageY<f.scrollSensitivity?d.scrollParent[0].scrollTop=b=d.scrollParent[0].scrollTop+f.scrollSpeed:e.pageY-d.overflowOffset.top<f.scrollSensitivity&&(d.scrollParent[0].scrollTop=b=d.scrollParent[0].scrollTop-f.scrollSpeed)),f.axis&&"y"===f.axis||(d.overflowOffset.left+d.scrollParent[0].offsetWidth-e.pageX<f.scrollSensitivity?d.scrollParent[0].scrollLeft=b=d.scrollParent[0].scrollLeft+f.scrollSpeed:e.pageX-d.overflowOffset.left<f.scrollSensitivity&&(d.scrollParent[0].scrollLeft=b=d.scrollParent[0].scrollLeft-f.scrollSpeed))):(f.axis&&"x"===f.axis||(e.pageY-a(document).scrollTop()<f.scrollSensitivity?b=a(document).scrollTop(a(document).scrollTop()-f.scrollSpeed):a(window).height()-(e.pageY-a(document).scrollTop())<f.scrollSensitivity&&(b=a(document).scrollTop(a(document).scrollTop()+f.scrollSpeed))),f.axis&&"y"===f.axis||(e.pageX-a(document).scrollLeft()<f.scrollSensitivity?b=a(document).scrollLeft(a(document).scrollLeft()-f.scrollSpeed):a(window).width()-(e.pageX-a(document).scrollLeft())<f.scrollSensitivity&&(b=a(document).scrollLeft(a(document).scrollLeft()+f.scrollSpeed)))),b!==!1&&a.ui.ddmanager&&!f.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,e)
}}),a.ui.plugin.add("draggable","snap",{start:function(){var d=a(this).data("ui-draggable"),b=d.options;
d.snapElements=[],a(b.snap.constructor!==String?b.snap.items||":data(ui-draggable)":b.snap).each(function(){var e=a(this),f=e.offset();
this!==d.element[0]&&d.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:f.top,left:f.left})
})
},drag:function(q,E){var w,L,B,x,A,F,D,k,I,J,z=a(this).data("ui-draggable"),C=z.options,H=C.snapTolerance,G=E.offset.left,j=G+z.helperProportions.width,e=E.offset.top,K=e+z.helperProportions.height;
for(I=z.snapElements.length-1;
I>=0;
I--){A=z.snapElements[I].left,F=A+z.snapElements[I].width,D=z.snapElements[I].top,k=D+z.snapElements[I].height,A-H>j||G>F+H||D-H>K||e>k+H||!a.contains(z.snapElements[I].item.ownerDocument,z.snapElements[I].item)?(z.snapElements[I].snapping&&z.options.snap.release&&z.options.snap.release.call(z.element,q,a.extend(z._uiHash(),{snapItem:z.snapElements[I].item})),z.snapElements[I].snapping=!1):("inner"!==C.snapMode&&(w=H>=Math.abs(D-K),L=H>=Math.abs(k-e),B=H>=Math.abs(A-j),x=H>=Math.abs(F-G),w&&(E.position.top=z._convertPositionTo("relative",{top:D-z.helperProportions.height,left:0}).top-z.margins.top),L&&(E.position.top=z._convertPositionTo("relative",{top:k,left:0}).top-z.margins.top),B&&(E.position.left=z._convertPositionTo("relative",{top:0,left:A-z.helperProportions.width}).left-z.margins.left),x&&(E.position.left=z._convertPositionTo("relative",{top:0,left:F}).left-z.margins.left)),J=w||L||B||x,"outer"!==C.snapMode&&(w=H>=Math.abs(D-e),L=H>=Math.abs(k-K),B=H>=Math.abs(A-G),x=H>=Math.abs(F-j),w&&(E.position.top=z._convertPositionTo("relative",{top:D,left:0}).top-z.margins.top),L&&(E.position.top=z._convertPositionTo("relative",{top:k-z.helperProportions.height,left:0}).top-z.margins.top),B&&(E.position.left=z._convertPositionTo("relative",{top:0,left:A}).left-z.margins.left),x&&(E.position.left=z._convertPositionTo("relative",{top:0,left:F-z.helperProportions.width}).left-z.margins.left)),!z.snapElements[I].snapping&&(w||L||B||x||J)&&z.options.snap.snap&&z.options.snap.snap.call(z.element,q,a.extend(z._uiHash(),{snapItem:z.snapElements[I].item})),z.snapElements[I].snapping=w||L||B||x||J)
}}}),a.ui.plugin.add("draggable","stack",{start:function(){var d,b=this.data("ui-draggable").options,e=a.makeArray(a(b.stack)).sort(function(g,f){return(parseInt(a(g).css("zIndex"),10)||0)-(parseInt(a(f).css("zIndex"),10)||0)
});
e.length&&(d=parseInt(a(e[0]).css("zIndex"),10)||0,a(e).each(function(f){a(this).css("zIndex",d+f)
}),this.css("zIndex",d+e.length))
}}),a.ui.plugin.add("draggable","zIndex",{start:function(e,d){var f=a(d.helper),b=a(this).data("ui-draggable").options;
f.css("zIndex")&&(b._zIndex=f.css("zIndex")),f.css("zIndex",b.zIndex)
},stop:function(d,b){var e=a(this).data("ui-draggable").options;
e._zIndex&&a(b.helper).css("zIndex",e._zIndex)
}})
})(jQuery);
(function(d){function b(f){return parseInt(f,10)||0
}function a(f){return !isNaN(parseInt(f,10))
}d.widget("ui.resizable",d.ui.mouse,{version:"1.10.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var g,f,j,e,p,k=this,m=this.options;
if(this.element.addClass("ui-resizable"),d.extend(this,{_aspectRatio:!!m.aspectRatio,aspectRatio:m.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:m.helper||m.ghost||m.animate?m.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(d("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=m.handles||(d(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String){for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),g=this.handles.split(","),this.handles={},f=0;
g.length>f;
f++){j=d.trim(g[f]),p="ui-resizable-"+j,e=d("<div class='ui-resizable-handle "+p+"'></div>"),e.css({zIndex:m.zIndex}),"se"===j&&e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[j]=".ui-resizable-"+j,this.element.append(e)
}}this._renderAxis=function(r){var q,u,o,w;
r=r||this.element;
for(q in this.handles){this.handles[q].constructor===String&&(this.handles[q]=d(this.handles[q],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(u=d(this.handles[q],this.element),w=/sw|ne|nw|se|n|s/.test(q)?u.outerHeight():u.outerWidth(),o=["padding",/ne|nw|n/.test(q)?"Top":/se|sw|s/.test(q)?"Bottom":/^e$/.test(q)?"Right":"Left"].join(""),r.css(o,w),this._proportionallyResize()),d(this.handles[q]).length
}},this._renderAxis(this.element),this._handles=d(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){k.resizing||(this.className&&(e=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),k.axis=e&&e[1]?e[1]:"se")
}),m.autoHide&&(this._handles.hide(),d(this.element).addClass("ui-resizable-autohide").mouseenter(function(){m.disabled||(d(this).removeClass("ui-resizable-autohide"),k._handles.show())
}).mouseleave(function(){m.disabled||k.resizing||(d(this).addClass("ui-resizable-autohide"),k._handles.hide())
})),this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var f,e=function(g){d(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
return this.elementIsWrapper&&(e(this.element),f=this.element,this.originalElement.css({position:f.css("position"),width:f.outerWidth(),height:f.outerHeight(),top:f.css("top"),left:f.css("left")}).insertAfter(f),f.remove()),this.originalElement.css("resize",this.originalResizeStyle),e(this.originalElement),this
},_mouseCapture:function(g){var f,j,e=!1;
for(f in this.handles){j=d(this.handles[f])[0],(j===g.target||d.contains(j,g.target))&&(e=!0)
}return !this.options.disabled&&e
},_mouseStart:function(f){var j,e,p,k=this.options,m=this.element.position(),g=this.element;
return this.resizing=!0,/absolute/.test(g.css("position"))?g.css({position:"absolute",top:g.css("top"),left:g.css("left")}):g.is(".ui-draggable")&&g.css({position:"absolute",top:m.top,left:m.left}),this._renderProxy(),j=b(this.helper.css("left")),e=b(this.helper.css("top")),k.containment&&(j+=d(k.containment).scrollLeft()||0,e+=d(k.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:j,top:e},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:g.width(),height:g.height()},this.originalSize=this._helper?{width:g.outerWidth(),height:g.outerHeight()}:{width:g.width(),height:g.height()},this.originalPosition={left:j,top:e},this.sizeDiff={width:g.outerWidth()-g.width(),height:g.outerHeight()-g.height()},this.originalMousePosition={left:f.pageX,top:f.pageY},this.aspectRatio="number"==typeof k.aspectRatio?k.aspectRatio:this.originalSize.width/this.originalSize.height||1,p=d(".ui-resizable-"+this.axis).css("cursor"),d("body").css("cursor","auto"===p?this.axis+"-resize":p),g.addClass("ui-resizable-resizing"),this._propagate("start",f),!0
},_mouseDrag:function(A){var m,B=this.helper,y={},j=this.originalMousePosition,e=this.axis,g=this.position.top,q=this.position.left,k=this.size.width,z=this.size.height,w=A.pageX-j.left||0,x=A.pageY-j.top||0,f=this._change[e];
return f?(m=f.apply(this,[A,w,x]),this._updateVirtualBoundaries(A.shiftKey),(this._aspectRatio||A.shiftKey)&&(m=this._updateRatio(m,A)),m=this._respectSize(m,A),this._updateCache(m),this._propagate("resize",A),this.position.top!==g&&(y.top=this.position.top+"px"),this.position.left!==q&&(y.left=this.position.left+"px"),this.size.width!==k&&(y.width=this.size.width+"px"),this.size.height!==z&&(y.height=this.size.height+"px"),B.css(y),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),d.isEmptyObject(y)||this._trigger("resize",A,this.ui()),!1):!1
},_mouseStop:function(w){this.resizing=!1;
var k,x,p,g,e,f,m,j=this.options,q=this;
return this._helper&&(k=this._proportionallyResizeElements,x=k.length&&/textarea/i.test(k[0].nodeName),p=x&&d.ui.hasScroll(k[0],"left")?0:q.sizeDiff.height,g=x?0:q.sizeDiff.width,e={width:q.helper.width()-g,height:q.helper.height()-p},f=parseInt(q.element.css("left"),10)+(q.position.left-q.originalPosition.left)||null,m=parseInt(q.element.css("top"),10)+(q.position.top-q.originalPosition.top)||null,j.animate||this.element.css(d.extend(e,{top:m,left:f})),q.helper.height(q.size.height),q.helper.width(q.size.width),this._helper&&!j.animate&&this._proportionallyResize()),d("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",w),this._helper&&this.helper.remove(),!1
},_updateVirtualBoundaries:function(k){var g,i,f,p,j,m=this.options;
j={minWidth:a(m.minWidth)?m.minWidth:0,maxWidth:a(m.maxWidth)?m.maxWidth:1/0,minHeight:a(m.minHeight)?m.minHeight:0,maxHeight:a(m.maxHeight)?m.maxHeight:1/0},(this._aspectRatio||k)&&(g=j.minHeight*this.aspectRatio,f=j.minWidth/this.aspectRatio,i=j.maxHeight*this.aspectRatio,p=j.maxWidth/this.aspectRatio,g>j.minWidth&&(j.minWidth=g),f>j.minHeight&&(j.minHeight=f),j.maxWidth>i&&(j.maxWidth=i),j.maxHeight>p&&(j.maxHeight=p)),this._vBoundaries=j
},_updateCache:function(f){this.offset=this.helper.offset(),a(f.left)&&(this.position.left=f.left),a(f.top)&&(this.position.top=f.top),a(f.height)&&(this.size.height=f.height),a(f.width)&&(this.size.width=f.width)
},_updateRatio:function(j){var g=this.position,i=this.size,f=this.axis;
return a(j.height)?j.width=j.height*this.aspectRatio:a(j.width)&&(j.height=j.width/this.aspectRatio),"sw"===f&&(j.left=g.left+(i.width-j.width),j.top=null),"nw"===f&&(j.top=g.top+(i.height-j.height),j.left=g.left+(i.width-j.width)),j
},_respectSize:function(m){var x=this._vBoundaries,y=this.axis,q=a(m.width)&&x.maxWidth&&x.maxWidth<m.width,i=a(m.height)&&x.maxHeight&&x.maxHeight<m.height,f=a(m.width)&&x.minWidth&&x.minWidth>m.width,g=a(m.height)&&x.minHeight&&x.minHeight>m.height,k=this.originalPosition.left+this.originalSize.width,j=this.position.top+this.size.height,w=/sw|nw|w/.test(y),p=/nw|ne|n/.test(y);
return f&&(m.width=x.minWidth),g&&(m.height=x.minHeight),q&&(m.width=x.maxWidth),i&&(m.height=x.maxHeight),f&&w&&(m.left=k-x.minWidth),q&&w&&(m.left=k-x.maxWidth),g&&p&&(m.top=j-x.minHeight),i&&p&&(m.top=j-x.maxHeight),m.width||m.height||m.left||!m.top?m.width||m.height||m.top||!m.left||(m.left=null):m.top=null,m
},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var m,j,g,k,f,o=this.helper||this.element;
for(m=0;
this._proportionallyResizeElements.length>m;
m++){if(f=this._proportionallyResizeElements[m],!this.borderDif){for(this.borderDif=[],g=[f.css("borderTopWidth"),f.css("borderRightWidth"),f.css("borderBottomWidth"),f.css("borderLeftWidth")],k=[f.css("paddingTop"),f.css("paddingRight"),f.css("paddingBottom"),f.css("paddingLeft")],j=0;
g.length>j;
j++){this.borderDif[j]=(parseInt(g[j],10)||0)+(parseInt(k[j],10)||0)
}}f.css({height:o.height()-this.borderDif[0]-this.borderDif[2]||0,width:o.width()-this.borderDif[1]-this.borderDif[3]||0})
}}},_renderProxy:function(){var f=this.element,e=this.options;
this.elementOffset=f.offset(),this._helper?(this.helper=this.helper||d("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++e.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element
},_change:{e:function(g,f){return{width:this.originalSize.width+f}
},w:function(k,g){var f=this.originalSize,j=this.originalPosition;
return{left:j.left+g,width:f.width-g}
},n:function(m,j,g){var k=this.originalSize,f=this.originalPosition;
return{top:f.top+g,height:k.height-g}
},s:function(j,g,f){return{height:this.originalSize.height+f}
},se:function(f,e,g){return d.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[f,e,g]))
},sw:function(f,e,g){return d.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[f,e,g]))
},ne:function(f,e,g){return d.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[f,e,g]))
},nw:function(f,e,g){return d.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[f,e,g]))
}},_propagate:function(f,e){d.ui.plugin.call(this,f,[e,this.ui()]),"resize"!==f&&this._trigger(f,e,this.ui())
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}}),d.ui.plugin.add("resizable","animate",{stop:function(w){var k=d(this).data("ui-resizable"),x=k.options,p=k._proportionallyResizeElements,g=p.length&&/textarea/i.test(p[0].nodeName),e=g&&d.ui.hasScroll(p[0],"left")?0:k.sizeDiff.height,f=g?0:k.sizeDiff.width,m={width:k.size.width-f,height:k.size.height-e},j=parseInt(k.element.css("left"),10)+(k.position.left-k.originalPosition.left)||null,q=parseInt(k.element.css("top"),10)+(k.position.top-k.originalPosition.top)||null;
k.element.animate(d.extend(m,q&&j?{top:q,left:j}:{}),{duration:x.animateDuration,easing:x.animateEasing,step:function(){var i={width:parseInt(k.element.css("width"),10),height:parseInt(k.element.css("height"),10),top:parseInt(k.element.css("top"),10),left:parseInt(k.element.css("left"),10)};
p&&p.length&&d(p[0]).css({width:i.width,height:i.height}),k._updateCache(i),k._propagate("resize",w)
}})
}}),d.ui.plugin.add("resizable","containment",{start:function(){var m,A,y,j,e,g,q,k=d(this).data("ui-resizable"),z=k.options,w=k.element,x=z.containment,f=x instanceof d?x.get(0):/parent/.test(x)?w.parent().get(0):x;
f&&(k.containerElement=d(f),/document/.test(x)||x===document?(k.containerOffset={left:0,top:0},k.containerPosition={left:0,top:0},k.parentData={element:d(document),left:0,top:0,width:d(document).width(),height:d(document).height()||document.body.parentNode.scrollHeight}):(m=d(f),A=[],d(["Top","Right","Left","Bottom"]).each(function(n,i){A[n]=b(m.css("padding"+i))
}),k.containerOffset=m.offset(),k.containerPosition=m.position(),k.containerSize={height:m.innerHeight()-A[3],width:m.innerWidth()-A[1]},y=k.containerOffset,j=k.containerSize.height,e=k.containerSize.width,g=d.ui.hasScroll(f,"left")?f.scrollWidth:e,q=d.ui.hasScroll(f)?f.scrollHeight:j,k.parentData={element:f,left:y.left,top:y.top,width:g,height:q}))
},resize:function(y){var k,z,w,g,e=d(this).data("ui-resizable"),f=e.options,m=e.containerOffset,j=e.position,x=e._aspectRatio||y.shiftKey,p={top:0,left:0},q=e.containerElement;
q[0]!==document&&/static/.test(q.css("position"))&&(p=m),j.left<(e._helper?m.left:0)&&(e.size.width=e.size.width+(e._helper?e.position.left-m.left:e.position.left-p.left),x&&(e.size.height=e.size.width/e.aspectRatio),e.position.left=f.helper?m.left:0),j.top<(e._helper?m.top:0)&&(e.size.height=e.size.height+(e._helper?e.position.top-m.top:e.position.top),x&&(e.size.width=e.size.height*e.aspectRatio),e.position.top=e._helper?m.top:0),e.offset.left=e.parentData.left+e.position.left,e.offset.top=e.parentData.top+e.position.top,k=Math.abs((e._helper?e.offset.left-p.left:e.offset.left-p.left)+e.sizeDiff.width),z=Math.abs((e._helper?e.offset.top-p.top:e.offset.top-m.top)+e.sizeDiff.height),w=e.containerElement.get(0)===e.element.parent().get(0),g=/relative|absolute/.test(e.containerElement.css("position")),w&&g&&(k-=Math.abs(e.parentData.left)),k+e.size.width>=e.parentData.width&&(e.size.width=e.parentData.width-k,x&&(e.size.height=e.size.width/e.aspectRatio)),z+e.size.height>=e.parentData.height&&(e.size.height=e.parentData.height-z,x&&(e.size.width=e.size.height*e.aspectRatio))
},stop:function(){var q=d(this).data("ui-resizable"),k=q.options,u=q.containerOffset,p=q.containerPosition,g=q.containerElement,e=d(q.helper),f=e.offset(),m=e.outerWidth()-q.sizeDiff.width,j=e.outerHeight()-q.sizeDiff.height;
q._helper&&!k.animate&&/relative/.test(g.css("position"))&&d(this).css({left:f.left-p.left-u.left,width:m,height:j}),q._helper&&!k.animate&&/static/.test(g.css("position"))&&d(this).css({left:f.left-p.left-u.left,width:m,height:j})
}}),d.ui.plugin.add("resizable","alsoResize",{start:function(){var f=d(this).data("ui-resizable"),e=f.options,g=function(i){d(i).each(function(){var j=d(this);
j.data("ui-resizable-alsoresize",{width:parseInt(j.width(),10),height:parseInt(j.height(),10),left:parseInt(j.css("left"),10),top:parseInt(j.css("top"),10)})
})
};
"object"!=typeof e.alsoResize||e.alsoResize.parentNode?g(e.alsoResize):e.alsoResize.length?(e.alsoResize=e.alsoResize[0],g(e.alsoResize)):d.each(e.alsoResize,function(i){g(i)
})
},resize:function(g,f){var k=d(this).data("ui-resizable"),e=k.options,q=k.originalSize,m=k.originalPosition,p={height:k.size.height-q.height||0,width:k.size.width-q.width||0,top:k.position.top-m.top||0,left:k.position.left-m.left||0},j=function(i,n){d(i).each(function(){var u=d(this),o=d(this).data("ui-resizable-alsoresize"),x={},w=n&&n.length?n:u.parents(f.originalElement[0]).length?["width","height"]:["width","height","top","left"];
d.each(w,function(z,y){var r=(o[y]||0)+(p[y]||0);
r&&r>=0&&(x[y]=r||null)
}),u.css(x)
})
};
"object"!=typeof e.alsoResize||e.alsoResize.nodeType?j(e.alsoResize):d.each(e.alsoResize,function(n,i){j(n,i)
})
},stop:function(){d(this).removeData("resizable-alsoresize")
}}),d.ui.plugin.add("resizable","ghost",{start:function(){var f=d(this).data("ui-resizable"),e=f.options,g=f.size;
f.ghost=f.originalElement.clone(),f.ghost.css({opacity:0.25,display:"block",position:"relative",height:g.height,width:g.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof e.ghost?e.ghost:""),f.ghost.appendTo(f.helper)
},resize:function(){var e=d(this).data("ui-resizable");
e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})
},stop:function(){var e=d(this).data("ui-resizable");
e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))
}}),d.ui.plugin.add("resizable","grid",{resize:function(){var H=d(this).data("ui-resizable"),y=H.options,I=H.size,E=H.originalSize,q=H.originalPosition,e=H.axis,k="number"==typeof y.grid?[y.grid,y.grid]:y.grid,z=k[0]||1,x=k[1]||1,G=Math.round((I.width-E.width)/z)*z,C=Math.round((I.height-E.height)/x)*x,D=E.width+G,j=E.height+C,B=y.maxWidth&&D>y.maxWidth,w=y.maxHeight&&j>y.maxHeight,A=y.minWidth&&y.minWidth>D,F=y.minHeight&&y.minHeight>j;
y.grid=k,A&&(D+=z),F&&(j+=x),B&&(D-=z),w&&(j-=x),/^(se|s|e)$/.test(e)?(H.size.width=D,H.size.height=j):/^(ne)$/.test(e)?(H.size.width=D,H.size.height=j,H.position.top=q.top-C):/^(sw)$/.test(e)?(H.size.width=D,H.size.height=j,H.position.left=q.left-G):(j-x>0?(H.size.height=j,H.position.top=q.top-C):(H.size.height=x,H.position.top=q.top+E.height-x),D-z>0?(H.size.width=D,H.position.left=q.left-G):(H.size.width=z,H.position.left=q.left+E.width-z))
}})
})(jQuery);
(function(f){var b=0,a={},d={};
a.height=a.paddingTop=a.paddingBottom=a.borderTopWidth=a.borderBottomWidth="hide",d.height=d.paddingTop=d.paddingBottom=d.borderTopWidth=d.borderBottomWidth="show",f.widget("ui.accordion",{version:"1.10.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var e=this.options;
this.prevShow=this.prevHide=f(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()
},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():f(),content:this.active.length?this.active.next():f()}
},_createIcons:function(){var e=this.options.icons;
e&&(f("<span>").addClass("ui-accordion-header-icon ui-icon "+e.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),this.headers.addClass("ui-accordion-icons"))
},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
},_destroy:function(){var g;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")
}),this._destroyIcons(),g=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")
}),"content"!==this.options.heightStyle&&g.css("height","")
},_setOption:function(i,g){return"active"===i?(this._activate(g),undefined):("event"===i&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(g)),this._super(i,g),"collapsible"!==i||g||this.options.active!==!1||this._activate(0),"icons"===i&&(this._destroyIcons(),g&&this._createIcons()),"disabled"===i&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!g),undefined)
},_keydown:function(j){if(!j.altKey&&!j.ctrlKey){var g=f.ui.keyCode,k=this.headers.length,e=this.headers.index(j.target),m=!1;
switch(j.keyCode){case g.RIGHT:case g.DOWN:m=this.headers[(e+1)%k];
break;
case g.LEFT:case g.UP:m=this.headers[(e-1+k)%k];
break;
case g.SPACE:case g.ENTER:this._eventHandler(j);
break;
case g.HOME:m=this.headers[0];
break;
case g.END:m=this.headers[k-1]
}m&&(f(j.target).attr("tabIndex",-1),f(m).attr("tabIndex",0),m.focus(),j.preventDefault())
}},_panelKeyDown:function(e){e.keyCode===f.ui.keyCode.UP&&e.ctrlKey&&f(e.currentTarget).prev().focus()
},refresh:function(){var e=this.options;
this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=f()):e.active===!1?this._activate(0):this.active.length&&!f.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=f()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()
},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
},_refresh:function(){var g,j=this.options,e=j.heightStyle,m=this.element.parent(),k=this.accordionId="ui-accordion-"+(this.element.attr("id")||++b);
this.active=this._findActive(j.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(q){var p=f(this),r=p.attr("id"),o=p.next(),u=o.attr("id");
r||(r=k+"-header-"+q,p.attr("id",r)),u||(u=k+"-panel-"+q,o.attr("id",u)),p.attr("aria-controls",u),o.attr("aria-labelledby",r)
}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(j.event),"fill"===e?(g=m.height(),this.element.siblings(":visible").each(function(){var i=f(this),n=i.css("position");
"absolute"!==n&&"fixed"!==n&&(g-=i.outerHeight(!0))
}),this.headers.each(function(){g-=f(this).outerHeight(!0)
}),this.headers.next().each(function(){f(this).height(Math.max(0,g-f(this).innerHeight()+f(this).height()))
}).css("overflow","auto")):"auto"===e&&(g=0,this.headers.next().each(function(){g=Math.max(g,f(this).css("height","").height())
}).height(g))
},_activate:function(g){var e=this._findActive(g)[0];
e!==this.active[0]&&(e=e||this.active[0],this._eventHandler({target:e,currentTarget:e,preventDefault:f.noop}))
},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):f()
},_setupEvents:function(g){var e={keydown:"_keydown"};
g&&f.each(g.split(" "),function(j,i){e[i]="_eventHandler"
}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,e),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)
},_eventHandler:function(u){var m=this.options,w=this.active,q=f(u.currentTarget),j=q[0]===w[0],e=j&&m.collapsible,g=e?f():q.next(),p=w.next(),k={oldHeader:w,oldPanel:p,newHeader:e?f():q,newPanel:g};
u.preventDefault(),j&&!m.collapsible||this._trigger("beforeActivate",u,k)===!1||(m.active=e?!1:this.headers.index(q),this.active=j?f():q,this._toggle(k),w.removeClass("ui-accordion-header-active ui-state-active"),m.icons&&w.children(".ui-accordion-header-icon").removeClass(m.icons.activeHeader).addClass(m.icons.header),j||(q.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),m.icons&&q.children(".ui-accordion-header-icon").removeClass(m.icons.header).addClass(m.icons.activeHeader),q.next().addClass("ui-accordion-content-active")))
},_toggle:function(g){var e=g.newPanel,j=this.prevShow.length?this.prevShow:g.oldPanel;
this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=e,this.prevHide=j,this.options.animate?this._animate(e,j,g):(j.hide(),e.show(),this._toggleComplete(g)),j.attr({"aria-hidden":"true"}),j.prev().attr("aria-selected","false"),e.length&&j.length?j.prev().attr({tabIndex:-1,"aria-expanded":"false"}):e.length&&this.headers.filter(function(){return 0===f(this).attr("tabIndex")
}).attr("tabIndex",-1),e.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})
},_animate:function(w,B,z){var k,g,j,q=this,m=0,A=w.length&&(!B.length||w.index()<B.index()),x=this.options.animate||{},y=A&&x.down||x,i=function(){q._toggleComplete(z)
};
return"number"==typeof y&&(j=y),"string"==typeof y&&(g=y),g=g||y.easing||x.easing,j=j||y.duration||x.duration,B.length?w.length?(k=w.show().outerHeight(),B.animate(a,{duration:j,easing:g,step:function(o,n){n.now=Math.round(o)
}}),w.hide().animate(d,{duration:j,easing:g,complete:i,step:function(o,n){n.now=Math.round(o),"height"!==n.prop?m+=n.now:"content"!==q.options.heightStyle&&(n.now=Math.round(k-B.outerHeight()-m),m=0)
}}),undefined):B.animate(a,j,g,i):w.animate(d,j,g,i)
},_toggleComplete:function(i){var g=i.oldPanel;
g.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),g.length&&(g.parent()[0].className=g.parent()[0].className),this._trigger("activate",null,i)
}})
})(jQuery);
(function(a){a.widget("ui.autocomplete",{version:"1.10.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,d,f,b=this.element[0].nodeName.toLowerCase(),j="textarea"===b,g="input"===b;
this.isMultiLine=j?!0:g?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[j||g?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(i){if(this.element.prop("readOnly")){return e=!0,f=!0,d=!0,undefined
}e=!1,f=!1,d=!1;
var k=a.ui.keyCode;
switch(i.keyCode){case k.PAGE_UP:e=!0,this._move("previousPage",i);
break;
case k.PAGE_DOWN:e=!0,this._move("nextPage",i);
break;
case k.UP:e=!0,this._keyEvent("previous",i);
break;
case k.DOWN:e=!0,this._keyEvent("next",i);
break;
case k.ENTER:case k.NUMPAD_ENTER:this.menu.active&&(e=!0,i.preventDefault(),this.menu.select(i));
break;
case k.TAB:this.menu.active&&this.menu.select(i);
break;
case k.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(i),i.preventDefault());
break;
default:d=!0,this._searchTimeout(i)
}},keypress:function(k){if(e){return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&k.preventDefault(),undefined
}if(!d){var i=a.ui.keyCode;
switch(k.keyCode){case i.PAGE_UP:this._move("previousPage",k);
break;
case i.PAGE_DOWN:this._move("nextPage",k);
break;
case i.UP:this._keyEvent("previous",k);
break;
case i.DOWN:this._keyEvent("next",k)
}}},input:function(i){return f?(f=!1,i.preventDefault(),undefined):(this._searchTimeout(i),undefined)
},focus:function(){this.selectedItem=null,this.previous=this._value()
},blur:function(i){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(i),this._change(i),undefined)
}}),this._initSource(),this.menu=a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(m){m.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur
});
var k=this.menu.element[0];
a(m.target).closest(".ui-menu-item").length||this._delay(function(){var i=this;
this.document.one("mousedown",function(n){n.target===i.element[0]||n.target===k||a.contains(k,n.target)||i.close()
})
})
},menufocus:function(m,k){if(this.isNewMenu&&(this.isNewMenu=!1,m.originalEvent&&/^mouse/.test(m.originalEvent.type))){return this.menu.blur(),this.document.one("mousemove",function(){a(m.target).trigger(m.originalEvent)
}),undefined
}var n=k.item.data("ui-autocomplete-item");
!1!==this._trigger("focus",m,{item:n})?m.originalEvent&&/^key/.test(m.originalEvent.type)&&this._value(n.value):this.liveRegion.text(n.value)
},menuselect:function(o,m){var k=m.item.data("ui-autocomplete-item"),n=this.previous;
this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=k
})),!1!==this._trigger("select",o,{item:k})&&this._value(k.value),this.term=this._value(),this.close(o),this.selectedItem=k
}}),this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()
},_setOption:function(d,b){this._super(d,b),"source"===d&&this._initSource(),"appendTo"===d&&this.menu.element.appendTo(this._appendTo()),"disabled"===d&&b&&this.xhr&&this.xhr.abort()
},_appendTo:function(){var b=this.options.appendTo;
return b&&(b=b.jquery||b.nodeType?a(b):this.document.find(b).eq(0)),b||(b=this.element.closest(".ui-front")),b.length||(b=this.document[0].body),b
},_initSource:function(){var d,b,e=this;
a.isArray(this.options.source)?(d=this.options.source,this.source=function(f,g){g(a.ui.autocomplete.filter(d,f.term))
}):"string"==typeof this.options.source?(b=this.options.source,this.source=function(g,f){e.xhr&&e.xhr.abort(),e.xhr=a.ajax({url:b,data:g,dataType:"json",success:function(i){f(i)
},error:function(){f([])
}})
}):this.source=this.options.source
},_searchTimeout:function(b){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,b))
},this.options.delay)
},search:function(d,b){return d=null!=d?d:this._value(),this.term=this._value(),d.length<this.options.minLength?this.close(b):this._trigger("search",b)!==!1?this._search(d):undefined
},_search:function(b){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:b},this._response())
},_response:function(){var b=++this.requestIndex;
return a.proxy(function(d){b===this.requestIndex&&this.__response(d),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")
},this)
},__response:function(b){b&&(b=this._normalize(b)),this._trigger("response",null,{content:b}),!this.options.disabled&&b&&b.length&&!this.cancelSearch?(this._suggest(b),this._trigger("open")):this._close()
},close:function(b){this.cancelSearch=!0,this._close(b)
},_close:function(b){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",b))
},_change:function(b){this.previous!==this._value()&&this._trigger("change",b,{item:this.selectedItem})
},_normalize:function(b){return b.length&&b[0].label&&b[0].value?b:a.map(b,function(d){return"string"==typeof d?{label:d,value:d}:a.extend({label:d.label||d.value,value:d.value||d.label},d)
})
},_suggest:function(d){var b=this.menu.element.empty();
this._renderMenu(b,d),this.isNewMenu=!0,this.menu.refresh(),b.show(),this._resizeMenu(),b.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()
},_resizeMenu:function(){var b=this.menu.element;
b.outerWidth(Math.max(b.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(d,b){var e=this;
a.each(b,function(g,f){e._renderItemData(d,f)
})
},_renderItemData:function(d,b){return this._renderItem(d,b).data("ui-autocomplete-item",b)
},_renderItem:function(d,b){return a("<li>").append(a("<a>").text(b.label)).appendTo(d)
},_move:function(d,b){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(d)||this.menu.isLastItem()&&/^next/.test(d)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[d](b),undefined):(this.search(null,b),undefined)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(d,b){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(d,b),b.preventDefault())
}}),a.extend(a.ui.autocomplete,{escapeRegex:function(b){return b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(d,b){var e=RegExp(a.ui.autocomplete.escapeRegex(b),"i");
return a.grep(d,function(f){return e.test(f.label||f.value||f)
})
}}),a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(b){return b+(b>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(d){var b;
this._superApply(arguments),this.options.disabled||this.cancelSearch||(b=d&&d.length?this.options.messages.results(d.length):this.options.messages.noResults,this.liveRegion.text(b))
}})
})(jQuery);
(function(j){var f,d="ui-button ui-widget ui-state-default ui-corner-all",g="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",b=function(){var a=j(this);
setTimeout(function(){a.find(":ui-button").button("refresh")
},1)
},k=function(n){var m=n.name,o=n.form,e=j([]);
return m&&(m=m.replace(/'/g,"\\'"),e=o?j(o).find("[name='"+m+"']"):j("[name='"+m+"']",n.ownerDocument).filter(function(){return !this.form
})),e
};
j.widget("ui.button",{version:"1.10.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,b),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");
var e=this,i=this.options,m="checkbox"===this.type||"radio"===this.type,a=m?"":"ui-state-active";
null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(d).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===f&&j(this).addClass("ui-state-active")
}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||j(this).removeClass(a)
}).bind("click"+this.eventNamespace,function(n){i.disabled&&(n.preventDefault(),n.stopImmediatePropagation())
}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")
},blur:function(){this.buttonElement.removeClass("ui-state-focus")
}}),m&&this.element.bind("change"+this.eventNamespace,function(){e.refresh()
}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return i.disabled?!1:undefined
}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled){return !1
}j(this).addClass("ui-state-active"),e.buttonElement.attr("aria-pressed","true");
var n=e.element[0];
k(n).not(n).map(function(){return j(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return i.disabled?!1:(j(this).addClass("ui-state-active"),f=this,e.document.one("mouseup",function(){f=null
}),undefined)
}).bind("mouseup"+this.eventNamespace,function(){return i.disabled?!1:(j(this).removeClass("ui-state-active"),undefined)
}).bind("keydown"+this.eventNamespace,function(n){return i.disabled?!1:((n.keyCode===j.ui.keyCode.SPACE||n.keyCode===j.ui.keyCode.ENTER)&&j(this).addClass("ui-state-active"),undefined)
}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){j(this).removeClass("ui-state-active")
}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(n){n.keyCode===j.ui.keyCode.SPACE&&j(this).click()
})),this._setOption("disabled",i.disabled),this._resetButton()
},_determineButtonType:function(){var n,m,a;
this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(n=this.element.parents().last(),m="label[for='"+this.element.attr("id")+"']",this.buttonElement=n.find(m),this.buttonElement.length||(n=n.length?n.siblings():this.element.siblings(),this.buttonElement=n.filter(m),this.buttonElement.length||(this.buttonElement=n.find(m))),this.element.addClass("ui-helper-hidden-accessible"),a=this.element.is(":checked"),a&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",a)):this.buttonElement=this.element
},widget:function(){return this.buttonElement
},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(d+" ui-state-active "+g).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")
},_setOption:function(i,a){return this._super(i,a),"disabled"===i?(this.element.prop("disabled",!!a),a&&this.buttonElement.removeClass("ui-state-focus"),undefined):(this._resetButton(),undefined)
},refresh:function(){var a=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");
a!==this.options.disabled&&this._setOption("disabled",a),"radio"===this.type?k(this.element[0]).each(function(){j(this).is(":checked")?j(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):j(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))
},_resetButton:function(){if("input"===this.type){return this.options.label&&this.element.val(this.options.label),undefined
}var o=this.buttonElement.removeClass(g),m=j("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(o.empty()).text(),e=this.options.icons,q=e.primary&&e.secondary,p=[];
e.primary||e.secondary?(this.options.text&&p.push("ui-button-text-icon"+(q?"s":e.primary?"-primary":"-secondary")),e.primary&&o.prepend("<span class='ui-button-icon-primary ui-icon "+e.primary+"'></span>"),e.secondary&&o.append("<span class='ui-button-icon-secondary ui-icon "+e.secondary+"'></span>"),this.options.text||(p.push(q?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||o.attr("title",j.trim(m)))):p.push("ui-button-text-only"),o.addClass(p.join(" "))
}}),j.widget("ui.buttonset",{version:"1.10.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(i,a){"disabled"===i&&this.buttons.button("option",i,a),this._super(i,a)
},refresh:function(){var a="rtl"===this.element.css("direction");
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return j(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(a?"ui-corner-left":"ui-corner-right").end().end()
},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return j(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
}})
})(jQuery);
(function(k,f){function d(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},k.extend(this._defaults,this.regional[""]),this.dpDiv=g(k("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}function g(e){var a="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return e.delegate(a,"mouseout",function(){k(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&k(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&k(this).removeClass("ui-datepicker-next-hover")
}).delegate(a,"mouseover",function(){k.datepicker._isDisabledDatepicker(m.inline?e.parent()[0]:m.input[0])||(k(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),k(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&k(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&k(this).addClass("ui-datepicker-next-hover"))
})
}function b(e,a){k.extend(e,a);
for(var n in a){null==a[n]&&(e[n]=a[n])
}return e
}k.extend(k.ui,{datepicker:{version:"1.10.4"}});
var m,j="datepicker";
k.extend(d.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(a){return b(this._defaults,a||{}),this
},_attachDatepicker:function(p,o){var q,e,r;
q=p.nodeName.toLowerCase(),e="div"===q||"span"===q,p.id||(this.uuid+=1,p.id="dp"+this.uuid),r=this._newInst(k(p),e),r.settings=k.extend({},o||{}),"input"===q?this._connectDatepicker(p,r):e&&this._inlineDatepicker(p,r)
},_newInst:function(o,n){var e=o[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:e,input:o,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:n,dpDiv:n?g(k("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}
},_connectDatepicker:function(e,a){var n=k(e);
a.append=k([]),a.trigger=k([]),n.hasClass(this.markerClassName)||(this._attachments(n,a),n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(a),k.data(e,j,a),a.settings.disabled&&this._disableDatepicker(e))
},_attachments:function(q,p){var u,e,y,w=this._get(p,"appendText"),x=this._get(p,"isRTL");
p.append&&p.append.remove(),w&&(p.append=k("<span class='"+this._appendClass+"'>"+w+"</span>"),q[x?"before":"after"](p.append)),q.unbind("focus",this._showDatepicker),p.trigger&&p.trigger.remove(),u=this._get(p,"showOn"),("focus"===u||"both"===u)&&q.focus(this._showDatepicker),("button"===u||"both"===u)&&(e=this._get(p,"buttonText"),y=this._get(p,"buttonImage"),p.trigger=k(this._get(p,"buttonImageOnly")?k("<img/>").addClass(this._triggerClass).attr({src:y,alt:e,title:e}):k("<button type='button'></button>").addClass(this._triggerClass).html(y?k("<img/>").attr({src:y,alt:e,title:e}):e)),q[x?"before":"after"](p.trigger),p.trigger.click(function(){return k.datepicker._datepickerShowing&&k.datepicker._lastInput===q[0]?k.datepicker._hideDatepicker():k.datepicker._datepickerShowing&&k.datepicker._lastInput!==q[0]?(k.datepicker._hideDatepicker(),k.datepicker._showDatepicker(q[0])):k.datepicker._showDatepicker(q[0]),!1
}))
},_autoSize:function(x){if(this._get(x,"autoSize")&&!x.inline){var q,p,u,o,y=new Date(2009,11,20),w=this._get(x,"dateFormat");
w.match(/[DM]/)&&(q=function(a){for(p=0,u=0,o=0;
a.length>o;
o++){a[o].length>p&&(p=a[o].length,u=o)
}return u
},y.setMonth(q(this._get(x,w.match(/MM/)?"monthNames":"monthNamesShort"))),y.setDate(q(this._get(x,w.match(/DD/)?"dayNames":"dayNamesShort"))+20-y.getDay())),x.input.attr("size",this._formatDate(x,y).length)
}},_inlineDatepicker:function(e,a){var n=k(e);
n.hasClass(this.markerClassName)||(n.addClass(this.markerClassName).append(a.dpDiv),k.data(e,j,a),this._setDate(a,this._getDefaultDate(a),!0),this._updateDatepicker(a),this._updateAlternate(a),a.settings.disabled&&this._disableDatepicker(e),a.dpDiv.css("display","block"))
},_dialogDatepicker:function(B,w,C,q,e){var x,r,A,y,z,a=this._dialogInst;
return a||(this.uuid+=1,x="dp"+this.uuid,this._dialogInput=k("<input type='text' id='"+x+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),k("body").append(this._dialogInput),a=this._dialogInst=this._newInst(this._dialogInput,!1),a.settings={},k.data(this._dialogInput[0],j,a)),b(a.settings,q||{}),w=w&&w.constructor===Date?this._formatDate(a,w):w,this._dialogInput.val(w),this._pos=e?e.length?e:[e.pageX,e.pageY]:null,this._pos||(r=document.documentElement.clientWidth,A=document.documentElement.clientHeight,y=document.documentElement.scrollLeft||document.body.scrollLeft,z=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[r/2-100+y,A/2-150+z]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),a.settings.onSelect=C,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),k.blockUI&&k.blockUI(this.dpDiv),k.data(this._dialogInput[0],j,a),this
},_destroyDatepicker:function(o){var n,p=k(o),e=k.data(o,j);
p.hasClass(this.markerClassName)&&(n=o.nodeName.toLowerCase(),k.removeData(o,j),"input"===n?(e.append.remove(),e.trigger.remove(),p.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===n||"span"===n)&&p.removeClass(this.markerClassName).empty())
},_enableDatepicker:function(p){var o,q,e=k(p),r=k.data(p,j);
e.hasClass(this.markerClassName)&&(o=p.nodeName.toLowerCase(),"input"===o?(p.disabled=!1,r.trigger.filter("button").each(function(){this.disabled=!1
}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===o||"span"===o)&&(q=e.children("."+this._inlineClass),q.children().removeClass("ui-state-disabled"),q.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=k.map(this._disabledInputs,function(a){return a===p?null:a
}))
},_disableDatepicker:function(p){var o,q,e=k(p),r=k.data(p,j);
e.hasClass(this.markerClassName)&&(o=p.nodeName.toLowerCase(),"input"===o?(p.disabled=!0,r.trigger.filter("button").each(function(){this.disabled=!0
}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===o||"span"===o)&&(q=e.children("."+this._inlineClass),q.children().addClass("ui-state-disabled"),q.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=k.map(this._disabledInputs,function(a){return a===p?null:a
}),this._disabledInputs[this._disabledInputs.length]=p)
},_isDisabledDatepicker:function(i){if(!i){return !1
}for(var a=0;
this._disabledInputs.length>a;
a++){if(this._disabledInputs[a]===i){return !0
}}return !1
},_getInst:function(e){try{return k.data(e,j)
}catch(a){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(p,w,z){var x,y,q,a,e=this._getInst(p);
return 2===arguments.length&&"string"==typeof w?"defaults"===w?k.extend({},k.datepicker._defaults):e?"all"===w?k.extend({},e.settings):this._get(e,w):null:(x=w||{},"string"==typeof w&&(x={},x[w]=z),e&&(this._curInst===e&&this._hideDatepicker(),y=this._getDateDatepicker(p,!0),q=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),b(e.settings,x),null!==q&&x.dateFormat!==f&&x.minDate===f&&(e.settings.minDate=this._formatDate(e,q)),null!==a&&x.dateFormat!==f&&x.maxDate===f&&(e.settings.maxDate=this._formatDate(e,a)),"disabled" in x&&(x.disabled?this._disableDatepicker(p):this._enableDatepicker(p)),this._attachments(k(p),e),this._autoSize(e),this._setDate(e,y),this._updateAlternate(e),this._updateDatepicker(e)),f)
},_changeDatepicker:function(o,n,a){this._optionDatepicker(o,n,a)
},_refreshDatepicker:function(i){var a=this._getInst(i);
a&&this._updateDatepicker(a)
},_setDateDatepicker:function(o,n){var a=this._getInst(o);
a&&(this._setDate(a,n),this._updateDatepicker(a),this._updateAlternate(a))
},_getDateDatepicker:function(o,n){var a=this._getInst(o);
return a&&!a.inline&&this._setDateFromField(a,n),a?this._getDate(a):null
},_doKeyDown:function(q){var p,u,e,y=k.datepicker._getInst(q.target),w=!0,x=y.dpDiv.is(".ui-datepicker-rtl");
if(y._keyEvent=!0,k.datepicker._datepickerShowing){switch(q.keyCode){case 9:k.datepicker._hideDatepicker(),w=!1;
break;
case 13:return e=k("td."+k.datepicker._dayOverClass+":not(."+k.datepicker._currentClass+")",y.dpDiv),e[0]&&k.datepicker._selectDay(q.target,y.selectedMonth,y.selectedYear,e[0]),p=k.datepicker._get(y,"onSelect"),p?(u=k.datepicker._formatDate(y),p.apply(y.input?y.input[0]:null,[u,y])):k.datepicker._hideDatepicker(),!1;
case 27:k.datepicker._hideDatepicker();
break;
case 33:k.datepicker._adjustDate(q.target,q.ctrlKey?-k.datepicker._get(y,"stepBigMonths"):-k.datepicker._get(y,"stepMonths"),"M");
break;
case 34:k.datepicker._adjustDate(q.target,q.ctrlKey?+k.datepicker._get(y,"stepBigMonths"):+k.datepicker._get(y,"stepMonths"),"M");
break;
case 35:(q.ctrlKey||q.metaKey)&&k.datepicker._clearDate(q.target),w=q.ctrlKey||q.metaKey;
break;
case 36:(q.ctrlKey||q.metaKey)&&k.datepicker._gotoToday(q.target),w=q.ctrlKey||q.metaKey;
break;
case 37:(q.ctrlKey||q.metaKey)&&k.datepicker._adjustDate(q.target,x?1:-1,"D"),w=q.ctrlKey||q.metaKey,q.originalEvent.altKey&&k.datepicker._adjustDate(q.target,q.ctrlKey?-k.datepicker._get(y,"stepBigMonths"):-k.datepicker._get(y,"stepMonths"),"M");
break;
case 38:(q.ctrlKey||q.metaKey)&&k.datepicker._adjustDate(q.target,-7,"D"),w=q.ctrlKey||q.metaKey;
break;
case 39:(q.ctrlKey||q.metaKey)&&k.datepicker._adjustDate(q.target,x?-1:1,"D"),w=q.ctrlKey||q.metaKey,q.originalEvent.altKey&&k.datepicker._adjustDate(q.target,q.ctrlKey?+k.datepicker._get(y,"stepBigMonths"):+k.datepicker._get(y,"stepMonths"),"M");
break;
case 40:(q.ctrlKey||q.metaKey)&&k.datepicker._adjustDate(q.target,7,"D"),w=q.ctrlKey||q.metaKey;
break;
default:w=!1
}}else{36===q.keyCode&&q.ctrlKey?k.datepicker._showDatepicker(this):w=!1
}w&&(q.preventDefault(),q.stopPropagation())
},_doKeyPress:function(o){var p,e,q=k.datepicker._getInst(o.target);
return k.datepicker._get(q,"constrainInput")?(p=k.datepicker._possibleChars(k.datepicker._get(q,"dateFormat")),e=String.fromCharCode(null==o.charCode?o.keyCode:o.charCode),o.ctrlKey||o.metaKey||" ">e||!p||p.indexOf(e)>-1):f
},_doKeyUp:function(o){var n,p=k.datepicker._getInst(o.target);
if(p.input.val()!==p.lastVal){try{n=k.datepicker.parseDate(k.datepicker._get(p,"dateFormat"),p.input?p.input.val():null,k.datepicker._getFormatConfig(p)),n&&(k.datepicker._setDateFromField(p),k.datepicker._updateAlternate(p),k.datepicker._updateDatepicker(p))
}catch(e){}}return !0
},_showDatepicker:function(p){if(p=p.target||p,"input"!==p.nodeName.toLowerCase()&&(p=k("input",p.parentNode)[0]),!k.datepicker._isDisabledDatepicker(p)&&k.datepicker._lastInput!==p){var e,u,y,w,x,q,a;
e=k.datepicker._getInst(p),k.datepicker._curInst&&k.datepicker._curInst!==e&&(k.datepicker._curInst.dpDiv.stop(!0,!0),e&&k.datepicker._datepickerShowing&&k.datepicker._hideDatepicker(k.datepicker._curInst.input[0])),u=k.datepicker._get(e,"beforeShow"),y=u?u.apply(p,[p,e]):{},y!==!1&&(b(e.settings,y),e.lastVal=null,k.datepicker._lastInput=p,k.datepicker._setDateFromField(e),k.datepicker._inDialog&&(p.value=""),k.datepicker._pos||(k.datepicker._pos=k.datepicker._findPos(p),k.datepicker._pos[1]+=p.offsetHeight),w=!1,k(p).parents().each(function(){return w|="fixed"===k(this).css("position"),!w
}),x={left:k.datepicker._pos[0],top:k.datepicker._pos[1]},k.datepicker._pos=null,e.dpDiv.empty(),e.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),k.datepicker._updateDatepicker(e),x=k.datepicker._checkOffset(e,x,w),e.dpDiv.css({position:k.datepicker._inDialog&&k.blockUI?"static":w?"fixed":"absolute",display:"none",left:x.left+"px",top:x.top+"px"}),e.inline||(q=k.datepicker._get(e,"showAnim"),a=k.datepicker._get(e,"duration"),e.dpDiv.zIndex(k(p).zIndex()+1),k.datepicker._datepickerShowing=!0,k.effects&&k.effects.effect[q]?e.dpDiv.show(q,k.datepicker._get(e,"showOptions"),a):e.dpDiv[q||"show"](q?a:null),k.datepicker._shouldFocusInput(e)&&e.input.focus(),k.datepicker._curInst=e))
}},_updateDatepicker:function(o){this.maxRows=4,m=o,o.dpDiv.empty().append(this._generateHTML(o)),this._attachHandlers(o),o.dpDiv.find("."+this._dayOverClass+" a").mouseover();
var n,p=this._getNumberOfMonths(o),e=p[1],q=17;
o.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),e>1&&o.dpDiv.addClass("ui-datepicker-multi-"+e).css("width",q*e+"em"),o.dpDiv[(1!==p[0]||1!==p[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),o.dpDiv[(this._get(o,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),o===k.datepicker._curInst&&k.datepicker._datepickerShowing&&k.datepicker._shouldFocusInput(o)&&o.input.focus(),o.yearshtml&&(n=o.yearshtml,setTimeout(function(){n===o.yearshtml&&o.yearshtml&&o.dpDiv.find("select.ui-datepicker-year:first").replaceWith(o.yearshtml),n=o.yearshtml=null
},0))
},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")
},_checkOffset:function(z,w,A){var y=z.dpDiv.outerWidth(),q=z.dpDiv.outerHeight(),e=z.input?z.input.outerWidth():0,p=z.input?z.input.outerHeight():0,x=document.documentElement.clientWidth+(A?0:k(document).scrollLeft()),u=document.documentElement.clientHeight+(A?0:k(document).scrollTop());
return w.left-=this._get(z,"isRTL")?y-e:0,w.left-=A&&w.left===z.input.offset().left?k(document).scrollLeft():0,w.top-=A&&w.top===z.input.offset().top+p?k(document).scrollTop():0,w.left-=Math.min(w.left,w.left+y>x&&x>y?Math.abs(w.left+y-x):0),w.top-=Math.min(w.top,w.top+q>u&&u>q?Math.abs(q+p):0),w
},_findPos:function(o){for(var n,p=this._getInst(o),e=this._get(p,"isRTL");
o&&("hidden"===o.type||1!==o.nodeType||k.expr.filters.hidden(o));
){o=o[e?"previousSibling":"nextSibling"]
}return n=k(o).offset(),[n.left,n.top]
},_hideDatepicker:function(q){var p,r,e,w,u=this._curInst;
!u||q&&u!==k.data(q,j)||this._datepickerShowing&&(p=this._get(u,"showAnim"),r=this._get(u,"duration"),e=function(){k.datepicker._tidyDialog(u)
},k.effects&&(k.effects.effect[p]||k.effects[p])?u.dpDiv.hide(p,k.datepicker._get(u,"showOptions"),r,e):u.dpDiv["slideDown"===p?"slideUp":"fadeIn"===p?"fadeOut":"hide"](p?r:null,e),p||e(),this._datepickerShowing=!1,w=this._get(u,"onClose"),w&&w.apply(u.input?u.input[0]:null,[u.input?u.input.val():"",u]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),k.blockUI&&(k.unblockUI(),k("body").append(this.dpDiv))),this._inDialog=!1)
},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(e){if(k.datepicker._curInst){var a=k(e.target),n=k.datepicker._getInst(a[0]);
(a[0].id!==k.datepicker._mainDivId&&0===a.parents("#"+k.datepicker._mainDivId).length&&!a.hasClass(k.datepicker.markerClassName)&&!a.closest("."+k.datepicker._triggerClass).length&&k.datepicker._datepickerShowing&&(!k.datepicker._inDialog||!k.blockUI)||a.hasClass(k.datepicker.markerClassName)&&k.datepicker._curInst!==n)&&k.datepicker._hideDatepicker()
}},_adjustDate:function(p,o,q){var e=k(p),r=this._getInst(e[0]);
this._isDisabledDatepicker(e[0])||(this._adjustInstDate(r,o+("M"===q?this._get(r,"showCurrentAtPos"):0),q),this._updateDatepicker(r))
},_gotoToday:function(o){var n,p=k(o),e=this._getInst(p[0]);
this._get(e,"gotoCurrent")&&e.currentDay?(e.selectedDay=e.currentDay,e.drawMonth=e.selectedMonth=e.currentMonth,e.drawYear=e.selectedYear=e.currentYear):(n=new Date,e.selectedDay=n.getDate(),e.drawMonth=e.selectedMonth=n.getMonth(),e.drawYear=e.selectedYear=n.getFullYear()),this._notifyChange(e),this._adjustDate(p)
},_selectMonthYear:function(p,o,q){var e=k(p),r=this._getInst(e[0]);
r["selected"+("M"===q?"Month":"Year")]=r["draw"+("M"===q?"Month":"Year")]=parseInt(o.options[o.selectedIndex].value,10),this._notifyChange(r),this._adjustDate(e)
},_selectDay:function(p,o,q,e){var w,u=k(p);
k(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(u[0])||(w=this._getInst(u[0]),w.selectedDay=w.currentDay=k("a",e).html(),w.selectedMonth=w.currentMonth=o,w.selectedYear=w.currentYear=q,this._selectDate(p,this._formatDate(w,w.currentDay,w.currentMonth,w.currentYear)))
},_clearDate:function(e){var a=k(e);
this._selectDate(a,"")
},_selectDate:function(p,o){var q,e=k(p),r=this._getInst(e[0]);
o=null!=o?o:this._formatDate(r),r.input&&r.input.val(o),this._updateAlternate(r),q=this._get(r,"onSelect"),q?q.apply(r.input?r.input[0]:null,[o,r]):r.input&&r.input.trigger("change"),r.inline?this._updateDatepicker(r):(this._hideDatepicker(),this._lastInput=r.input[0],"object"!=typeof r.input[0]&&r.input.focus(),this._lastInput=null)
},_updateAlternate:function(p){var o,q,e,r=this._get(p,"altField");
r&&(o=this._get(p,"altFormat")||this._get(p,"dateFormat"),q=this._getDate(p),e=this.formatDate(o,q,this._getFormatConfig(p)),k(r).each(function(){k(this).val(e)
}))
},noWeekends:function(i){var a=i.getDay();
return[a>0&&6>a,""]
},iso8601Week:function(o){var n,a=new Date(o.getTime());
return a.setDate(a.getDate()+4-(a.getDay()||7)),n=a.getTime(),a.setMonth(0),a.setDate(1),Math.floor(Math.round((n-a)/86400000)/7)+1
},parseDate:function(L,D,S){if(null==L||null==D){throw"Invalid arguments"
}if(D="object"==typeof D?""+D:D+"",""===D){return null
}var H,E,G,M,J=0,C=(S?S.shortYearCutoff:null)||this._defaults.shortYearCutoff,P="string"!=typeof C?C:(new Date).getFullYear()%100+parseInt(C,10),Q=(S?S.dayNamesShort:null)||this._defaults.dayNamesShort,F=(S?S.dayNames:null)||this._defaults.dayNames,I=(S?S.monthNamesShort:null)||this._defaults.monthNamesShort,O=(S?S.monthNames:null)||this._defaults.monthNames,N=-1,B=-1,q=-1,R=-1,U=!1,z=function(i){var a=L.length>H+1&&L.charAt(H+1)===i;
return a&&H++,a
},K=function(u){var r=z(u),p="@"===u?14:"!"===u?20:"y"===u&&r?4:"o"===u?3:2,o=RegExp("^\\d{1,"+p+"}"),w=D.substring(J).match(o);
if(!w){throw"Missing number at position "+J
}return J+=w[0].length,parseInt(w[0],10)
},A=function(u,p,y){var w=-1,x=k.map(z(u)?y:p,function(i,a){return[[a,i]]
}).sort(function(i,a){return -(i[1].length-a[1].length)
});
if(k.each(x,function(r,o){var n=o[1];
return D.substr(J,n.length).toLowerCase()===n.toLowerCase()?(w=o[0],J+=n.length,!1):f
}),-1!==w){return w+1
}throw"Unknown name at position "+J
},e=function(){if(D.charAt(J)!==L.charAt(H)){throw"Unexpected literal at position "+J
}J++
};
for(H=0;
L.length>H;
H++){if(U){"'"!==L.charAt(H)||z("'")?e():U=!1
}else{switch(L.charAt(H)){case"d":q=K("d");
break;
case"D":A("D",Q,F);
break;
case"o":R=K("o");
break;
case"m":B=K("m");
break;
case"M":B=A("M",I,O);
break;
case"y":N=K("y");
break;
case"@":M=new Date(K("@")),N=M.getFullYear(),B=M.getMonth()+1,q=M.getDate();
break;
case"!":M=new Date((K("!")-this._ticksTo1970)/10000),N=M.getFullYear(),B=M.getMonth()+1,q=M.getDate();
break;
case"'":z("'")?e():U=!0;
break;
default:e()
}}}if(D.length>J&&(G=D.substr(J),!/^\s+/.test(G))){throw"Extra/unparsed characters found in date: "+G
}if(-1===N?N=(new Date).getFullYear():100>N&&(N+=(new Date).getFullYear()-(new Date).getFullYear()%100+(P>=N?0:-100)),R>-1){for(B=1,q=R;
;
){if(E=this._getDaysInMonth(N,B-1),E>=q){break
}B++,q-=E
}}if(M=this._daylightSavingAdjust(new Date(N,B-1,q)),M.getFullYear()!==N||M.getMonth()+1!==B||M.getDate()!==q){throw"Invalid date"
}return M
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:10000000*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(A,F,y){if(!F){return""
}var G,D=(y?y.dayNamesShort:null)||this._defaults.dayNamesShort,w=(y?y.dayNames:null)||this._defaults.dayNames,p=(y?y.monthNamesShort:null)||this._defaults.monthNamesShort,q=(y?y.monthNames:null)||this._defaults.monthNames,z=function(e){var a=A.length>G+1&&A.charAt(G+1)===e;
return a&&G++,a
},x=function(r,n,a){var o=""+n;
if(z(r)){for(;
a>o.length;
){o="0"+o
}}return o
},E=function(r,n,a,o){return z(r)?o[n]:a[n]
},B="",C=!1;
if(F){for(G=0;
A.length>G;
G++){if(C){"'"!==A.charAt(G)||z("'")?B+=A.charAt(G):C=!1
}else{switch(A.charAt(G)){case"d":B+=x("d",F.getDate(),2);
break;
case"D":B+=E("D",F.getDay(),D,w);
break;
case"o":B+=x("o",Math.round((new Date(F.getFullYear(),F.getMonth(),F.getDate()).getTime()-new Date(F.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":B+=x("m",F.getMonth()+1,2);
break;
case"M":B+=E("M",F.getMonth(),p,q);
break;
case"y":B+=z("y")?F.getFullYear():(10>F.getYear()%100?"0":"")+F.getYear()%100;
break;
case"@":B+=F.getTime();
break;
case"!":B+=10000*F.getTime()+this._ticksTo1970;
break;
case"'":z("'")?B+="'":C=!0;
break;
default:B+=A.charAt(G)
}}}}return B
},_possibleChars:function(r){var p,o="",q=!1,n=function(a){var e=r.length>p+1&&r.charAt(p+1)===a;
return e&&p++,e
};
for(p=0;
r.length>p;
p++){if(q){"'"!==r.charAt(p)||n("'")?o+=r.charAt(p):q=!1
}else{switch(r.charAt(p)){case"d":case"m":case"y":case"@":o+="0123456789";
break;
case"D":case"M":return null;
case"'":n("'")?o+="'":q=!0;
break;
default:o+=r.charAt(p)
}}}return o
},_get:function(n,a){return n.settings[a]!==f?n.settings[a]:this._defaults[a]
},_setDateFromField:function(y,u){if(y.input.val()!==y.lastVal){var q=this._get(y,"dateFormat"),w=y.lastVal=y.input?y.input.val():null,p=this._getDefaultDate(y),A=p,x=this._getFormatConfig(y);
try{A=this.parseDate(q,w,x)||p
}catch(z){w=u?"":w
}y.selectedDay=A.getDate(),y.drawMonth=y.selectedMonth=A.getMonth(),y.drawYear=y.selectedYear=A.getFullYear(),y.currentDay=w?A.getDate():0,y.currentMonth=w?A.getMonth():0,y.currentYear=w?A.getFullYear():0,this._adjustInstDate(y)
}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))
},_determineDate:function(p,o,q){var e=function(i){var a=new Date;
return a.setDate(a.getDate()+i),a
},w=function(z){try{return k.datepicker.parseDate(k.datepicker._get(p,"dateFormat"),z,k.datepicker._getFormatConfig(p))
}catch(B){}for(var y=(z.toLowerCase().match(/^c/)?k.datepicker._getDate(p):null)||new Date,E=y.getFullYear(),C=y.getMonth(),D=y.getDate(),A=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,x=A.exec(z);
x;
){switch(x[2]||"d"){case"d":case"D":D+=parseInt(x[1],10);
break;
case"w":case"W":D+=7*parseInt(x[1],10);
break;
case"m":case"M":C+=parseInt(x[1],10),D=Math.min(D,k.datepicker._getDaysInMonth(E,C));
break;
case"y":case"Y":E+=parseInt(x[1],10),D=Math.min(D,k.datepicker._getDaysInMonth(E,C))
}x=A.exec(z)
}return new Date(E,C,D)
},u=null==o||""===o?q:"string"==typeof o?w(o):"number"==typeof o?isNaN(o)?q:e(o):new Date(o.getTime());
return u=u&&"Invalid Date"==""+u?q:u,u&&(u.setHours(0),u.setMinutes(0),u.setSeconds(0),u.setMilliseconds(0)),this._daylightSavingAdjust(u)
},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null
},_setDate:function(x,q,p){var u=!q,o=x.selectedMonth,y=x.selectedYear,w=this._restrictMinMax(x,this._determineDate(x,q,new Date));
x.selectedDay=x.currentDay=w.getDate(),x.drawMonth=x.selectedMonth=x.currentMonth=w.getMonth(),x.drawYear=x.selectedYear=x.currentYear=w.getFullYear(),o===x.selectedMonth&&y===x.selectedYear||p||this._notifyChange(x),this._adjustInstDate(x),x.input&&x.input.val(u?"":this._formatDate(x))
},_getDate:function(i){var a=!i.currentYear||i.input&&""===i.input.val()?null:this._daylightSavingAdjust(new Date(i.currentYear,i.currentMonth,i.currentDay));
return a
},_attachHandlers:function(e){var a=this._get(e,"stepMonths"),n="#"+e.id.replace(/\\\\/g,"\\");
e.dpDiv.find("[data-handler]").map(function(){var i={prev:function(){k.datepicker._adjustDate(n,-a,"M")
},next:function(){k.datepicker._adjustDate(n,+a,"M")
},hide:function(){k.datepicker._hideDatepicker()
},today:function(){k.datepicker._gotoToday(n)
},selectDay:function(){return k.datepicker._selectDay(n,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1
},selectMonth:function(){return k.datepicker._selectMonthYear(n,this,"M"),!1
},selectYear:function(){return k.datepicker._selectMonthYear(n,this,"Y"),!1
}};
k(this).bind(this.getAttribute("data-event"),i[this.getAttribute("data-handler")])
})
},_generateHTML:function(aY){var aI,aU,aJ,a2,aP,aK,aO,aV,aR,aH,aZ,a0,aN,aQ,aX,aW,aG,aD,a1,a3,aE,aS,aF,ag,ax,ah,an,am,ay,aA,ak,ar,av,at,aT,aC,aw,ao,al,ad=new Date,ai=this._daylightSavingAdjust(new Date(ad.getFullYear(),ad.getMonth(),ad.getDate())),ab=this._get(aY,"isRTL"),aq=this._get(aY,"showButtonPanel"),az=this._get(aY,"hideIfNoPrevNext"),ap=this._get(aY,"navigationAsDateFormat"),aj=this._getNumberOfMonths(aY),ae=this._get(aY,"showCurrentAtPos"),af=this._get(aY,"stepMonths"),aL=1!==aj[0]||1!==aj[1],au=this._daylightSavingAdjust(aY.currentDay?new Date(aY.currentYear,aY.currentMonth,aY.currentDay):new Date(9999,9,9)),aB=this._getMinMaxDate(aY,"min"),ac=this._getMinMaxDate(aY,"max"),aa=aY.drawMonth-ae,aM=aY.drawYear;
if(0>aa&&(aa+=12,aM--),ac){for(aI=this._daylightSavingAdjust(new Date(ac.getFullYear(),ac.getMonth()-aj[0]*aj[1]+1,ac.getDate())),aI=aB&&aB>aI?aB:aI;
this._daylightSavingAdjust(new Date(aM,aa,1))>aI;
){aa--,0>aa&&(aa=11,aM--)
}}for(aY.drawMonth=aa,aY.drawYear=aM,aU=this._get(aY,"prevText"),aU=ap?this.formatDate(aU,this._daylightSavingAdjust(new Date(aM,aa-af,1)),this._getFormatConfig(aY)):aU,aJ=this._canAdjustMonth(aY,-1,aM,aa)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+aU+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"e":"w")+"'>"+aU+"</span></a>":az?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+aU+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"e":"w")+"'>"+aU+"</span></a>",a2=this._get(aY,"nextText"),a2=ap?this.formatDate(a2,this._daylightSavingAdjust(new Date(aM,aa+af,1)),this._getFormatConfig(aY)):a2,aP=this._canAdjustMonth(aY,1,aM,aa)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+a2+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"w":"e")+"'>"+a2+"</span></a>":az?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+a2+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"w":"e")+"'>"+a2+"</span></a>",aK=this._get(aY,"currentText"),aO=this._get(aY,"gotoCurrent")&&aY.currentDay?au:ai,aK=ap?this.formatDate(aK,aO,this._getFormatConfig(aY)):aK,aV=aY.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(aY,"closeText")+"</button>",aR=aq?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(ab?aV:"")+(this._isInRange(aY,aO)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+aK+"</button>":"")+(ab?"":aV)+"</div>":"",aH=parseInt(this._get(aY,"firstDay"),10),aH=isNaN(aH)?0:aH,aZ=this._get(aY,"showWeek"),a0=this._get(aY,"dayNames"),aN=this._get(aY,"dayNamesMin"),aQ=this._get(aY,"monthNames"),aX=this._get(aY,"monthNamesShort"),aW=this._get(aY,"beforeShowDay"),aG=this._get(aY,"showOtherMonths"),aD=this._get(aY,"selectOtherMonths"),a1=this._getDefaultDate(aY),a3="",aS=0;
aj[0]>aS;
aS++){for(aF="",this.maxRows=4,ag=0;
aj[1]>ag;
ag++){if(ax=this._daylightSavingAdjust(new Date(aM,aa,aY.selectedDay)),ah=" ui-corner-all",an="",aL){if(an+="<div class='ui-datepicker-group",aj[1]>1){switch(ag){case 0:an+=" ui-datepicker-group-first",ah=" ui-corner-"+(ab?"right":"left");
break;
case aj[1]-1:an+=" ui-datepicker-group-last",ah=" ui-corner-"+(ab?"left":"right");
break;
default:an+=" ui-datepicker-group-middle",ah=""
}}an+="'>"
}for(an+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+ah+"'>"+(/all|left/.test(ah)&&0===aS?ab?aP:aJ:"")+(/all|right/.test(ah)&&0===aS?ab?aJ:aP:"")+this._generateMonthYearHeader(aY,aa,aM,aB,ac,aS>0||ag>0,aQ,aX)+"</div><table class='ui-datepicker-calendar'><thead><tr>",am=aZ?"<th class='ui-datepicker-week-col'>"+this._get(aY,"weekHeader")+"</th>":"",aE=0;
7>aE;
aE++){ay=(aE+aH)%7,am+="<th"+((aE+aH+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+a0[ay]+"'>"+aN[ay]+"</span></th>"
}for(an+=am+"</tr></thead><tbody>",aA=this._getDaysInMonth(aM,aa),aM===aY.selectedYear&&aa===aY.selectedMonth&&(aY.selectedDay=Math.min(aY.selectedDay,aA)),ak=(this._getFirstDayOfMonth(aM,aa)-aH+7)%7,ar=Math.ceil((ak+aA)/7),av=aL?this.maxRows>ar?this.maxRows:ar:ar,this.maxRows=av,at=this._daylightSavingAdjust(new Date(aM,aa,1-ak)),aT=0;
av>aT;
aT++){for(an+="<tr>",aC=aZ?"<td class='ui-datepicker-week-col'>"+this._get(aY,"calculateWeek")(at)+"</td>":"",aE=0;
7>aE;
aE++){aw=aW?aW.apply(aY.input?aY.input[0]:null,[at]):[!0,""],ao=at.getMonth()!==aa,al=ao&&!aD||!aw[0]||aB&&aB>at||ac&&at>ac,aC+="<td class='"+((aE+aH+6)%7>=5?" ui-datepicker-week-end":"")+(ao?" ui-datepicker-other-month":"")+(at.getTime()===ax.getTime()&&aa===aY.selectedMonth&&aY._keyEvent||a1.getTime()===at.getTime()&&a1.getTime()===ax.getTime()?" "+this._dayOverClass:"")+(al?" "+this._unselectableClass+" ui-state-disabled":"")+(ao&&!aG?"":" "+aw[1]+(at.getTime()===au.getTime()?" "+this._currentClass:"")+(at.getTime()===ai.getTime()?" ui-datepicker-today":""))+"'"+(ao&&!aG||!aw[2]?"":" title='"+aw[2].replace(/'/g,"&#39;")+"'")+(al?"":" data-handler='selectDay' data-event='click' data-month='"+at.getMonth()+"' data-year='"+at.getFullYear()+"'")+">"+(ao&&!aG?"&#xa0;":al?"<span class='ui-state-default'>"+at.getDate()+"</span>":"<a class='ui-state-default"+(at.getTime()===ai.getTime()?" ui-state-highlight":"")+(at.getTime()===au.getTime()?" ui-state-active":"")+(ao?" ui-priority-secondary":"")+"' href='#'>"+at.getDate()+"</a>")+"</td>",at.setDate(at.getDate()+1),at=this._daylightSavingAdjust(at)
}an+=aC+"</tr>"
}aa++,aa>11&&(aa=0,aM++),an+="</tbody></table>"+(aL?"</div>"+(aj[0]>0&&ag===aj[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),aF+=an
}a3+=aF
}return a3+=aR,aY._keyEvent=!1,a3
},_generateMonthYearHeader:function(L,z,H,A,P,E,B,D){var I,G,x,M,N,C,F,K,J=this._get(L,"changeMonth"),w=this._get(L,"changeYear"),q=this._get(L,"showMonthAfterYear"),O="<div class='ui-datepicker-title'>",Q="";
if(E||!J){Q+="<span class='ui-datepicker-month'>"+B[z]+"</span>"
}else{for(I=A&&A.getFullYear()===H,G=P&&P.getFullYear()===H,Q+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",x=0;
12>x;
x++){(!I||x>=A.getMonth())&&(!G||P.getMonth()>=x)&&(Q+="<option value='"+x+"'"+(x===z?" selected='selected'":"")+">"+D[x]+"</option>")
}Q+="</select>"
}if(q||(O+=Q+(!E&&J&&w?"":"&#xa0;")),!L.yearshtml){if(L.yearshtml="",E||!w){O+="<span class='ui-datepicker-year'>"+H+"</span>"
}else{for(M=this._get(L,"yearRange").split(":"),N=(new Date).getFullYear(),C=function(i){var a=i.match(/c[+\-].*/)?H+parseInt(i.substring(1),10):i.match(/[+\-].*/)?N+parseInt(i,10):parseInt(i,10);
return isNaN(a)?N:a
},F=C(M[0]),K=Math.max(F,C(M[1]||"")),F=A?Math.max(F,A.getFullYear()):F,K=P?Math.min(K,P.getFullYear()):K,L.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
K>=F;
F++){L.yearshtml+="<option value='"+F+"'"+(F===H?" selected='selected'":"")+">"+F+"</option>"
}L.yearshtml+="</select>",O+=L.yearshtml,L.yearshtml=null
}}return O+=this._get(L,"yearSuffix"),q&&(O+=(!E&&J&&w?"":"&#xa0;")+Q),O+="</div>"
},_adjustInstDate:function(x,q,p){var u=x.drawYear+("Y"===p?q:0),o=x.drawMonth+("M"===p?q:0),y=Math.min(x.selectedDay,this._getDaysInMonth(u,o))+("D"===p?q:0),w=this._restrictMinMax(x,this._daylightSavingAdjust(new Date(u,o,y)));
x.selectedDay=w.getDate(),x.drawMonth=x.selectedMonth=w.getMonth(),x.drawYear=x.selectedYear=w.getFullYear(),("M"===p||"Y"===p)&&this._notifyChange(x)
},_restrictMinMax:function(r,p){var o=this._getMinMaxDate(r,"min"),q=this._getMinMaxDate(r,"max"),n=o&&o>p?o:p;
return q&&n>q?q:n
},_notifyChange:function(i){var a=this._get(i,"onChangeMonthYear");
a&&a.apply(i.input?i.input[0]:null,[i.selectedYear,i.selectedMonth+1,i])
},_getNumberOfMonths:function(i){var a=this._get(i,"numberOfMonths");
return null==a?[1,1]:"number"==typeof a?[1,a]:a
},_getMinMaxDate:function(i,a){return this._determineDate(i,this._get(i,a+"Date"),null)
},_getDaysInMonth:function(i,a){return 32-this._daylightSavingAdjust(new Date(i,a,32)).getDate()
},_getFirstDayOfMonth:function(i,a){return new Date(i,a,1).getDay()
},_canAdjustMonth:function(u,q,p,r){var o=this._getNumberOfMonths(u),w=this._daylightSavingAdjust(new Date(p,r+(0>q?q:o[0]*o[1]),1));
return 0>q&&w.setDate(this._getDaysInMonth(w.getFullYear(),w.getMonth())),this._isInRange(u,w)
},_isInRange:function(y,A){var w,B,z=this._getMinMaxDate(y,"min"),u=this._getMinMaxDate(y,"max"),p=null,q=null,x=this._get(y,"yearRange");
return x&&(w=x.split(":"),B=(new Date).getFullYear(),p=parseInt(w[0],10),q=parseInt(w[1],10),w[0].match(/[+\-].*/)&&(p+=B),w[1].match(/[+\-].*/)&&(q+=B)),(!z||A.getTime()>=z.getTime())&&(!u||A.getTime()<=u.getTime())&&(!p||A.getFullYear()>=p)&&(!q||q>=A.getFullYear())
},_getFormatConfig:function(i){var a=this._get(i,"shortYearCutoff");
return a="string"!=typeof a?a:(new Date).getFullYear()%100+parseInt(a,10),{shortYearCutoff:a,dayNamesShort:this._get(i,"dayNamesShort"),dayNames:this._get(i,"dayNames"),monthNamesShort:this._get(i,"monthNamesShort"),monthNames:this._get(i,"monthNames")}
},_formatDate:function(r,p,o,q){p||(r.currentDay=r.selectedDay,r.currentMonth=r.selectedMonth,r.currentYear=r.selectedYear);
var n=p?"object"==typeof p?p:this._daylightSavingAdjust(new Date(q,o,p)):this._daylightSavingAdjust(new Date(r.currentYear,r.currentMonth,r.currentDay));
return this.formatDate(this._get(r,"dateFormat"),n,this._getFormatConfig(r))
}}),k.fn.datepicker=function(e){if(!this.length){return this
}k.datepicker.initialized||(k(document).mousedown(k.datepicker._checkExternalClick),k.datepicker.initialized=!0),0===k("#"+k.datepicker._mainDivId).length&&k("body").append(k.datepicker.dpDiv);
var a=Array.prototype.slice.call(arguments,1);
return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?k.datepicker["_"+e+"Datepicker"].apply(k.datepicker,[this[0]].concat(a)):this.each(function(){"string"==typeof e?k.datepicker["_"+e+"Datepicker"].apply(k.datepicker,[this].concat(a)):k.datepicker._attachDatepicker(this,e)
}):k.datepicker["_"+e+"Datepicker"].apply(k.datepicker,[this[0]].concat(a))
},k.datepicker=new d,k.datepicker.initialized=!1,k.datepicker.uuid=(new Date).getTime(),k.datepicker.version="1.10.4"
})(jQuery);
(function(d){var b={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},a={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};
d.widget("ui.dialog",{version:"1.10.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(f){var e=d(this).css(f).offset().top;
0>e&&d(this).css("top",f.top-e)
}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&d.fn.draggable&&this._makeDraggable(),this.options.resizable&&d.fn.resizable&&this._makeResizable(),this._isOpen=!1
},_init:function(){this.options.autoOpen&&this.open()
},_appendTo:function(){var e=this.options.appendTo;
return e&&(e.jquery||e.nodeType)?d(e):this.document.find(e||"body").eq(0)
},_destroy:function(){var g,f=this.originalPosition;
this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),g=f.parent.children().eq(f.index),g.length&&g[0]!==this.element[0]?g.before(this.element):f.parent.append(this.element)
},widget:function(){return this.uiDialog
},disable:d.noop,enable:d.noop,close:function(g){var f,j=this;
if(this._isOpen&&this._trigger("beforeClose",g)!==!1){if(this._isOpen=!1,this._destroyOverlay(),!this.opener.filter(":focusable").focus().length){try{f=this.document[0].activeElement,f&&"body"!==f.nodeName.toLowerCase()&&d(f).blur()
}catch(e){}}this._hide(this.uiDialog,this.options.hide,function(){j._trigger("close",g)
})
}},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(j,g){var f=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
return f&&!g&&this._trigger("focus",j),f
},open:function(){var e=this;
return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=d(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")
}),this._trigger("open"),undefined)
},_focusTabbable:function(){var f=this.element.find("[autofocus]");
f.length||(f=this.element.find(":tabbable")),f.length||(f=this.uiDialogButtonPane.find(":tabbable")),f.length||(f=this.uiDialogTitlebarClose.filter(":tabbable")),f.length||(f=this.uiDialog),f.eq(0).focus()
},_keepFocus:function(f){function e(){var j=this.document[0].activeElement,g=this.uiDialog[0]===j||d.contains(this.uiDialog[0],j);
g||this._focusTabbable()
}f.preventDefault(),e.call(this),this._delay(e)
},_createWrapper:function(){this.uiDialog=d("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(g){if(this.options.closeOnEscape&&!g.isDefaultPrevented()&&g.keyCode&&g.keyCode===d.ui.keyCode.ESCAPE){return g.preventDefault(),this.close(g),undefined
}if(g.keyCode===d.ui.keyCode.TAB){var f=this.uiDialog.find(":tabbable"),j=f.filter(":first"),e=f.filter(":last");
g.target!==e[0]&&g.target!==this.uiDialog[0]||g.shiftKey?g.target!==j[0]&&g.target!==this.uiDialog[0]||!g.shiftKey||(e.focus(1),g.preventDefault()):(j.focus(1),g.preventDefault())
}},mousedown:function(f){this._moveToTop(f)&&this._focusTabbable()
}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
},_createTitlebar:function(){var e;
this.uiDialogTitlebar=d("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(f){d(f.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()
}}),this.uiDialogTitlebarClose=d("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(f){f.preventDefault(),this.close(f)
}}),e=d("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(e),this.uiDialog.attr({"aria-labelledby":e.attr("id")})
},_title:function(f){this.options.title||f.html("&#160;"),f.text(this.options.title)
},_createButtonPane:function(){this.uiDialogButtonPane=d("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=d("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()
},_createButtons:function(){var f=this,e=this.options.buttons;
return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),d.isEmptyObject(e)||d.isArray(e)&&!e.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(d.each(e,function(j,k){var g,m;
k=d.isFunction(k)?{click:k,text:j}:k,k=d.extend({type:"button"},k),g=k.click,k.click=function(){g.apply(f.element[0],arguments)
},m={icons:k.icons,text:k.showText},delete k.icons,delete k.showText,d("<button></button>",k).button(m).appendTo(f.uiButtonSet)
}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)
},_makeDraggable:function(){function f(i){return{position:i.position,offset:i.offset}
}var e=this,g=this.options;
this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(j,i){d(this).addClass("ui-dialog-dragging"),e._blockFrames(),e._trigger("dragStart",j,f(i))
},drag:function(j,i){e._trigger("drag",j,f(i))
},stop:function(i,j){g.position=[j.position.left-e.document.scrollLeft(),j.position.top-e.document.scrollTop()],d(this).removeClass("ui-dialog-dragging"),e._unblockFrames(),e._trigger("dragStop",i,f(j))
}})
},_makeResizable:function(){function g(i){return{originalPosition:i.originalPosition,originalSize:i.originalSize,position:i.position,size:i.size}
}var f=this,j=this.options,e=j.resizable,m=this.uiDialog.css("position"),k="string"==typeof e?e:"n,e,s,w,se,sw,ne,nw";
this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:j.maxWidth,maxHeight:j.maxHeight,minWidth:j.minWidth,minHeight:this._minHeight(),handles:k,start:function(n,i){d(this).addClass("ui-dialog-resizing"),f._blockFrames(),f._trigger("resizeStart",n,g(i))
},resize:function(n,i){f._trigger("resize",n,g(i))
},stop:function(i,o){j.height=d(this).height(),j.width=d(this).width(),d(this).removeClass("ui-dialog-resizing"),f._unblockFrames(),f._trigger("resizeStop",i,g(o))
}}).css("position",m)
},_minHeight:function(){var f=this.options;
return"auto"===f.height?f.minHeight:Math.min(f.minHeight,f.height)
},_position:function(){var f=this.uiDialog.is(":visible");
f||this.uiDialog.show(),this.uiDialog.position(this.options.position),f||this.uiDialog.hide()
},_setOptions:function(f){var e=this,i=!1,g={};
d.each(f,function(k,j){e._setOption(k,j),k in b&&(i=!0),k in a&&(g[k]=j)
}),i&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",g)
},_setOption:function(m,j){var g,k,f=this.uiDialog;
"dialogClass"===m&&f.removeClass(this.options.dialogClass).addClass(j),"disabled"!==m&&(this._super(m,j),"appendTo"===m&&this.uiDialog.appendTo(this._appendTo()),"buttons"===m&&this._createButtons(),"closeText"===m&&this.uiDialogTitlebarClose.button({label:""+j}),"draggable"===m&&(g=f.is(":data(ui-draggable)"),g&&!j&&f.draggable("destroy"),!g&&j&&this._makeDraggable()),"position"===m&&this._position(),"resizable"===m&&(k=f.is(":data(ui-resizable)"),k&&!j&&f.resizable("destroy"),k&&"string"==typeof j&&f.resizable("option","handles",j),k||j===!1||this._makeResizable()),"title"===m&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
},_size:function(){var k,g,f,j=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),j.minWidth>j.width&&(j.width=j.minWidth),k=this.uiDialog.css({height:"auto",width:j.width}).outerHeight(),g=Math.max(0,j.minHeight-k),f="number"==typeof j.maxHeight?Math.max(0,j.maxHeight-k):"none","auto"===j.height?this.element.css({minHeight:g,maxHeight:f,height:"auto"}):this.element.height(Math.max(0,j.height-k)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())
},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=d(this);
return d("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]
})
},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)
},_allowInteraction:function(e){return d(e.target).closest(".ui-dialog").length?!0:!!d(e.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(this.options.modal){var f=this,e=this.widgetFullName;
d.ui.dialog.overlayInstances||this._delay(function(){d.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(g){f._allowInteraction(g)||(g.preventDefault(),d(".ui-dialog:visible:last .ui-dialog-content").data(e)._focusTabbable())
})
}),this.overlay=d("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),d.ui.dialog.overlayInstances++
}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(d.ui.dialog.overlayInstances--,d.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)
}}),d.ui.dialog.overlayInstances=0,d.uiBackCompat!==!1&&d.widget("ui.dialog",d.ui.dialog,{_position:function(){var g,f=this.options.position,j=[],e=[0,0];
f?(("string"==typeof f||"object"==typeof f&&"0" in f)&&(j=f.split?f.split(" "):[f[0],f[1]],1===j.length&&(j[1]=j[0]),d.each(["left","top"],function(k,i){+j[k]===j[k]&&(e[k]=j[k],j[k]=i)
}),f={my:j[0]+(0>e[0]?e[0]:"+"+e[0])+" "+j[1]+(0>e[1]?e[1]:"+"+e[1]),at:j.join(" ")}),f=d.extend({},d.ui.dialog.prototype.options.position,f)):f=d.ui.dialog.prototype.options.position,g=this.uiDialog.is(":visible"),g||this.uiDialog.show(),this.uiDialog.position(f),g||this.uiDialog.hide()
}})
})(jQuery);
(function(a){a.widget("ui.menu",{version:"1.10.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,a.proxy(function(b){this.options.disabled&&b.preventDefault()
},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(b){b.preventDefault()
},"click .ui-state-disabled > a":function(b){b.preventDefault()
},"click .ui-menu-item:has(a)":function(d){var b=a(d.target).closest(".ui-menu-item");
!this.mouseHandled&&b.not(".ui-state-disabled").length&&(this.select(d),d.isPropagationStopped()||(this.mouseHandled=!0),b.has(".ui-menu").length?this.expand(d):!this.element.is(":focus")&&a(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))
},"mouseenter .ui-menu-item":function(d){var b=a(d.currentTarget);
b.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(d,b)
},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(f,d){var b=this.active||this.element.children(".ui-menu-item").eq(0);
d||this.focus(f,b)
},blur:function(b){this._delay(function(){a.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(b)
})
},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(b){a(b.target).closest(".ui-menu").length||this.collapseAll(b),this.mouseHandled=!1
}})
},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var b=a(this);
b.data("ui-menu-submenu-carat")&&b.remove()
}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
},_keydown:function(e){function d(i){return i.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
}var g,b,m,j,k,f=!0;
switch(e.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(e);
break;
case a.ui.keyCode.PAGE_DOWN:this.nextPage(e);
break;
case a.ui.keyCode.HOME:this._move("first","first",e);
break;
case a.ui.keyCode.END:this._move("last","last",e);
break;
case a.ui.keyCode.UP:this.previous(e);
break;
case a.ui.keyCode.DOWN:this.next(e);
break;
case a.ui.keyCode.LEFT:this.collapse(e);
break;
case a.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);
break;
case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(e);
break;
case a.ui.keyCode.ESCAPE:this.collapse(e);
break;
default:f=!1,b=this.previousFilter||"",m=String.fromCharCode(e.keyCode),j=!1,clearTimeout(this.filterTimer),m===b?j=!0:m=b+m,k=RegExp("^"+d(m),"i"),g=this.activeMenu.children(".ui-menu-item").filter(function(){return k.test(a(this).children("a").text())
}),g=j&&-1!==g.index(this.active.next())?this.active.nextAll(".ui-menu-item"):g,g.length||(m=String.fromCharCode(e.keyCode),k=RegExp("^"+d(m),"i"),g=this.activeMenu.children(".ui-menu-item").filter(function(){return k.test(a(this).children("a").text())
})),g.length?(this.focus(e,g),g.length>1?(this.previousFilter=m,this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)):delete this.previousFilter):delete this.previousFilter
}f&&e.preventDefault()
},_activate:function(b){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(b):this.select(b))
},refresh:function(){var d,b=this.options.icons.submenu,e=this.element.find(this.options.menus);
this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),e.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var g=a(this),i=g.prev("a"),f=a("<span>").addClass("ui-menu-icon ui-icon "+b).data("ui-menu-submenu-carat",!0);
i.attr("aria-haspopup","true").prepend(f),g.attr("aria-labelledby",i.attr("id"))
}),d=e.add(this.element),d.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),d.children(":not(.ui-menu-item)").each(function(){var f=a(this);
/[^\-\u2014\u2013\s]/.test(f.text())||f.addClass("ui-widget-content ui-menu-divider")
}),d.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!a.contains(this.element[0],this.active[0])&&this.blur()
},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(d,b){"icons"===d&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu),this._super(d,b)
},focus:function(g,d){var b,f;
this.blur(g,g&&"focus"===g.type),this._scrollIntoView(d),this.active=d.first(),f=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",f.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),g&&"keydown"===g.type?this._close():this.timer=this._delay(function(){this._close()
},this.delay),b=d.children(".ui-menu"),b.length&&g&&/^mouse/.test(g.type)&&this._startOpening(b),this.activeMenu=d.parent(),this._trigger("focus",g,{item:d})
},_scrollIntoView:function(e){var d,f,b,k,g,j;
this._hasScroll()&&(d=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0,f=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0,b=e.offset().top-this.activeMenu.offset().top-d-f,k=this.activeMenu.scrollTop(),g=this.activeMenu.height(),j=e.height(),0>b?this.activeMenu.scrollTop(k+b):b+j>g&&this.activeMenu.scrollTop(k+b-g+j))
},blur:function(d,b){b||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",d,{item:this.active}))
},_startOpening:function(b){clearTimeout(this.timer),"true"===b.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(b)
},this.delay))
},_open:function(d){var b=a.extend({of:this.active},this.options.position);
clearTimeout(this.timer),this.element.find(".ui-menu").not(d.parents(".ui-menu")).hide().attr("aria-hidden","true"),d.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(b)
},collapseAll:function(d,b){clearTimeout(this.timer),this.timer=this._delay(function(){var e=b?this.element:a(d&&d.target).closest(this.element.find(".ui-menu"));
e.length||(e=this.element),this._close(e),this.blur(d),this.activeMenu=e
},this.delay)
},_close:function(b){b||(b=this.active?this.active.parent():this.element),b.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")
},collapse:function(d){var b=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
b&&b.length&&(this._close(),this.focus(d,b))
},expand:function(d){var b=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();
b&&b.length&&(this._open(b.parent()),this._delay(function(){this.focus(d,b)
}))
},next:function(b){this._move("next","first",b)
},previous:function(b){this._move("prev","last",b)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(g,d,b){var f;
this.active&&(f="first"===g||"last"===g?this.active["first"===g?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[g+"All"](".ui-menu-item").eq(0)),f&&f.length&&this.active||(f=this.activeMenu.children(".ui-menu-item")[d]()),this.focus(b,f)
},nextPage:function(e){var d,f,b;
return this.active?(this.isLastItem()||(this._hasScroll()?(f=this.active.offset().top,b=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return d=a(this),0>d.offset().top-f-b
}),this.focus(e,d)):this.focus(e,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(e),undefined)
},previousPage:function(e){var d,f,b;
return this.active?(this.isFirstItem()||(this._hasScroll()?(f=this.active.offset().top,b=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return d=a(this),d.offset().top-f+b>0
}),this.focus(e,d)):this.focus(e,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(e),undefined)
},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(d){this.active=this.active||a(d.target).closest(".ui-menu-item");
var b={item:this.active};
this.active.has(".ui-menu").length||this.collapseAll(d,!0),this._trigger("select",d,b)
}})
})(jQuery);
(function(b){var a=5;
b.widget("ui.slider",b.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1
},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()
},_createHandles:function(){var f,e,g=this.options,d=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),k="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",j=[];
for(e=g.values&&g.values.length||1,d.length>e&&(d.slice(e).remove(),d=d.slice(0,e)),f=d.length;
e>f;
f++){j.push(k)
}this.handles=d.add(b(j.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(i){b(this).data("ui-slider-handle-index",i)
})
},_createRange:function(){var e=this.options,d="";
e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:b.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=b("<div></div>").appendTo(this.element),d="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(d+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)
},_setupEvents:function(){var d=this.handles.add(this.range).filter("a");
this._off(d),this._on(d,this._handleEvents),this._hoverable(d),this._focusable(d)
},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()
},_mouseCapture:function(x){var k,y,q,g,e,f,m,j,w=this,p=this.options;
return p.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),k={x:x.pageX,y:x.pageY},y=this._normValueFromMouse(k),q=this._valueMax()-this._valueMin()+1,this.handles.each(function(n){var d=Math.abs(y-w.values(n));
(q>d||q===d&&(n===w._lastChangedValue||w.values(n)===p.min))&&(q=d,g=b(this),e=n)
}),f=this._start(x,e),f===!1?!1:(this._mouseSliding=!0,this._handleIndex=e,g.addClass("ui-state-active").focus(),m=g.offset(),j=!b(x.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=j?{left:0,top:0}:{left:x.pageX-m.left-g.width()/2,top:x.pageY-m.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(x,e,y),this._animateOff=!0,!0))
},_mouseStart:function(){return !0
},_mouseDrag:function(g){var f={x:g.pageX,y:g.pageY},d=this._normValueFromMouse(f);
return this._slide(g,this._handleIndex,d),!1
},_mouseStop:function(d){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(d,this._handleIndex),this._change(d,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1
},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"
},_normValueFromMouse:function(k){var g,f,j,d,m;
return"horizontal"===this.orientation?(g=this.elementSize.width,f=k.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(g=this.elementSize.height,f=k.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),j=f/g,j>1&&(j=1),0>j&&(j=0),"vertical"===this.orientation&&(j=1-j),d=this._valueMax()-this._valueMin(),m=this._valueMin()+j*d,this._trimAlignValue(m)
},_start:function(g,f){var d={handle:this.handles[f],value:this.value()};
return this.options.values&&this.options.values.length&&(d.value=this.values(f),d.values=this.values()),this._trigger("start",g,d)
},_slide:function(k,g,f){var j,d,m;
this.options.values&&this.options.values.length?(j=this.values(g?0:1),2===this.options.values.length&&this.options.range===!0&&(0===g&&f>j||1===g&&j>f)&&(f=j),f!==this.values(g)&&(d=this.values(),d[g]=f,m=this._trigger("slide",k,{handle:this.handles[g],value:f,values:d}),j=this.values(g?0:1),m!==!1&&this.values(g,f))):f!==this.value()&&(m=this._trigger("slide",k,{handle:this.handles[g],value:f}),m!==!1&&this.value(f))
},_stop:function(g,f){var d={handle:this.handles[f],value:this.value()};
this.options.values&&this.options.values.length&&(d.value=this.values(f),d.values=this.values()),this._trigger("stop",g,d)
},_change:function(g,f){if(!this._keySliding&&!this._mouseSliding){var d={handle:this.handles[f],value:this.value()};
this.options.values&&this.options.values.length&&(d.value=this.values(f),d.values=this.values()),this._lastChangedValue=f,this._trigger("change",g,d)
}},value:function(d){return arguments.length?(this.options.value=this._trimAlignValue(d),this._refreshValue(),this._change(null,0),undefined):this._value()
},values:function(f,e){var g,d,j;
if(arguments.length>1){return this.options.values[f]=this._trimAlignValue(e),this._refreshValue(),this._change(null,f),undefined
}if(!arguments.length){return this._values()
}if(!b.isArray(arguments[0])){return this.options.values&&this.options.values.length?this._values(f):this.value()
}for(g=this.options.values,d=arguments[0],j=0;
g.length>j;
j+=1){g[j]=this._trimAlignValue(d[j]),this._change(null,j)
}this._refreshValue()
},_setOption:function(f,e){var g,d=0;
switch("range"===f&&this.options.range===!0&&("min"===e?(this.options.value=this._values(0),this.options.values=null):"max"===e&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),b.isArray(this.options.values)&&(d=this.options.values.length),b.Widget.prototype._setOption.apply(this,arguments),f){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();
break;
case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;
break;
case"values":for(this._animateOff=!0,this._refreshValue(),g=0;
d>g;
g+=1){this._change(null,g)
}this._animateOff=!1;
break;
case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;
break;
case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1
}},_value:function(){var d=this.options.value;
return d=this._trimAlignValue(d)
},_values:function(j){var f,d,g;
if(arguments.length){return f=this.options.values[j],f=this._trimAlignValue(f)
}if(this.options.values&&this.options.values.length){for(d=this.options.values.slice(),g=0;
d.length>g;
g+=1){d[g]=this._trimAlignValue(d[g])
}return d
}return[]
},_trimAlignValue:function(j){if(this._valueMin()>=j){return this._valueMin()
}if(j>=this._valueMax()){return this._valueMax()
}var f=this.options.step>0?this.options.step:1,d=(j-this._valueMin())%f,g=j-d;
return 2*Math.abs(d)>=f&&(g+=d>0?f:-f),parseFloat(g.toFixed(5))
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max
},_refreshValue:function(){var q,j,w,m,f,d=this.options.range,e=this.options,k=this,g=this._animateOff?!1:e.animate,p={};
this.options.values&&this.options.values.length?this.handles.each(function(i){j=100*((k.values(i)-k._valueMin())/(k._valueMax()-k._valueMin())),p["horizontal"===k.orientation?"left":"bottom"]=j+"%",b(this).stop(1,1)[g?"animate":"css"](p,e.animate),k.options.range===!0&&("horizontal"===k.orientation?(0===i&&k.range.stop(1,1)[g?"animate":"css"]({left:j+"%"},e.animate),1===i&&k.range[g?"animate":"css"]({width:j-q+"%"},{queue:!1,duration:e.animate})):(0===i&&k.range.stop(1,1)[g?"animate":"css"]({bottom:j+"%"},e.animate),1===i&&k.range[g?"animate":"css"]({height:j-q+"%"},{queue:!1,duration:e.animate}))),q=j
}):(w=this.value(),m=this._valueMin(),f=this._valueMax(),j=f!==m?100*((w-m)/(f-m)):0,p["horizontal"===this.orientation?"left":"bottom"]=j+"%",this.handle.stop(1,1)[g?"animate":"css"](p,e.animate),"min"===d&&"horizontal"===this.orientation&&this.range.stop(1,1)[g?"animate":"css"]({width:j+"%"},e.animate),"max"===d&&"horizontal"===this.orientation&&this.range[g?"animate":"css"]({width:100-j+"%"},{queue:!1,duration:e.animate}),"min"===d&&"vertical"===this.orientation&&this.range.stop(1,1)[g?"animate":"css"]({height:j+"%"},e.animate),"max"===d&&"vertical"===this.orientation&&this.range[g?"animate":"css"]({height:100-j+"%"},{queue:!1,duration:e.animate}))
},_handleEvents:{keydown:function(e){var f,d,k,g,j=b(e.target).data("ui-slider-handle-index");
switch(e.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,b(e.target).addClass("ui-state-active"),f=this._start(e,j),f===!1)){return
}}switch(g=this.options.step,d=k=this.options.values&&this.options.values.length?this.values(j):this.value(),e.keyCode){case b.ui.keyCode.HOME:k=this._valueMin();
break;
case b.ui.keyCode.END:k=this._valueMax();
break;
case b.ui.keyCode.PAGE_UP:k=this._trimAlignValue(d+(this._valueMax()-this._valueMin())/a);
break;
case b.ui.keyCode.PAGE_DOWN:k=this._trimAlignValue(d-(this._valueMax()-this._valueMin())/a);
break;
case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(d===this._valueMax()){return
}k=this._trimAlignValue(d+g);
break;
case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(d===this._valueMin()){return
}k=this._trimAlignValue(d-g)
}this._slide(e,j,k)
},click:function(d){d.preventDefault()
},keyup:function(e){var d=b(e.target).data("ui-slider-handle-index");
this._keySliding&&(this._keySliding=!1,this._stop(e,d),this._change(e,d),b(e.target).removeClass("ui-state-active"))
}}})
})(jQuery);
(function(j,f){function d(){return ++b
}function g(a){return a=a.cloneNode(!1),a.hash.length>1&&decodeURIComponent(a.href.replace(k,""))===decodeURIComponent(location.href.replace(k,""))
}var b=0,k=/#.*$/;
j.widget("ui.tabs",{version:"1.10.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var e=this,a=this.options;
this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",a.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(i){j(this).is(".ui-state-disabled")&&i.preventDefault()
}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){j(this).closest("li").is(".ui-state-disabled")&&this.blur()
}),this._processTabs(),a.active=this._initialActive(),j.isArray(a.disabled)&&(a.disabled=j.unique(a.disabled.concat(j.map(this.tabs.filter(".ui-state-disabled"),function(i){return e.tabs.index(i)
}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(a.active):j(),this._refresh(),this.active.length&&this.load(a.active)
},_initialActive:function(){var m=this.options.active,n=this.options.collapsible,e=location.hash.substring(1);
return null===m&&(e&&this.tabs.each(function(a,i){return j(i).attr("aria-controls")===e?(m=a,!1):f
}),null===m&&(m=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===m||-1===m)&&(m=this.tabs.length?0:!1)),m!==!1&&(m=this.tabs.index(this.tabs.eq(m)),-1===m&&(m=n?!1:0)),!n&&m===!1&&this.anchors.length&&(m=0),m
},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):j()}
},_tabKeydown:function(m){var o=j(this.document[0].activeElement).closest("li"),e=this.tabs.index(o),p=!0;
if(!this._handlePageNav(m)){switch(m.keyCode){case j.ui.keyCode.RIGHT:case j.ui.keyCode.DOWN:e++;
break;
case j.ui.keyCode.UP:case j.ui.keyCode.LEFT:p=!1,e--;
break;
case j.ui.keyCode.END:e=this.anchors.length-1;
break;
case j.ui.keyCode.HOME:e=0;
break;
case j.ui.keyCode.SPACE:return m.preventDefault(),clearTimeout(this.activating),this._activate(e),f;
case j.ui.keyCode.ENTER:return m.preventDefault(),clearTimeout(this.activating),this._activate(e===this.options.active?!1:e),f;
default:return
}m.preventDefault(),clearTimeout(this.activating),e=this._focusNextTab(e,p),m.ctrlKey||(o.attr("aria-selected","false"),this.tabs.eq(e).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",e)
},this.delay))
}},_panelKeydown:function(a){this._handlePageNav(a)||a.ctrlKey&&a.keyCode===j.ui.keyCode.UP&&(a.preventDefault(),this.active.focus())
},_handlePageNav:function(a){return a.altKey&&a.keyCode===j.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):a.altKey&&a.keyCode===j.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):f
},_findNextTab:function(n,m){function o(){return n>e&&(n=0),0>n&&(n=e),n
}for(var e=this.tabs.length-1;
-1!==j.inArray(o(),this.options.disabled);
){n=m?n+1:n-1
}return n
},_focusNextTab:function(i,a){return i=this._findNextTab(i,a),this.tabs.eq(i).focus(),i
},_setOption:function(m,a){return"active"===m?(this._activate(a),f):"disabled"===m?(this._setupDisabled(a),f):(this._super(m,a),"collapsible"===m&&(this.element.toggleClass("ui-tabs-collapsible",a),a||this.options.active!==!1||this._activate(0)),"event"===m&&this._setupEvents(a),"heightStyle"===m&&this._setupHeightStyle(a),f)
},_tabId:function(a){return a.attr("aria-controls")||"ui-tabs-"+d()
},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""
},refresh:function(){var e=this.options,a=this.tablist.children(":has(a[href])");
e.disabled=j.map(a.filter(".ui-state-disabled"),function(i){return a.index(i)
}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!j.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=j()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=j()),this._refresh()
},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)
},_processTabs:function(){var a=this;
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return j("a",this)[0]
}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=j(),this.anchors.each(function(q,m){var z,x,y,w=j(m).uniqueId().attr("id"),e=j(m).closest("li"),p=e.attr("aria-controls");
g(m)?(z=m.hash,x=a.element.find(a._sanitizeSelector(z))):(y=a._tabId(e),z="#"+y,x=a.element.find(z),x.length||(x=a._createPanel(y),x.insertAfter(a.panels[q-1]||a.tablist)),x.attr("aria-live","polite")),x.length&&(a.panels=a.panels.add(x)),p&&e.data("ui-tabs-aria-controls",p),e.attr({"aria-controls":z.substring(1),"aria-labelledby":w}),x.attr("aria-labelledby",w)
}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")
},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)
},_createPanel:function(a){return j("<div>").attr("id",a).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)
},_setupDisabled:function(e){j.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1);
for(var a,m=0;
a=this.tabs[m];
m++){e===!0||-1!==j.inArray(m,e)?j(a).addClass("ui-state-disabled").attr("aria-disabled","true"):j(a).removeClass("ui-state-disabled").removeAttr("aria-disabled")
}this.options.disabled=e
},_setupEvents:function(e){var a={click:function(i){i.preventDefault()
}};
e&&j.each(e.split(" "),function(m,i){a[i]="_eventHandler"
}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,a),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)
},_setupHeightStyle:function(e){var a,m=this.element.parent();
"fill"===e?(a=m.height(),a-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var i=j(this),n=i.css("position");
"absolute"!==n&&"fixed"!==n&&(a-=i.outerHeight(!0))
}),this.element.children().not(this.panels).each(function(){a-=j(this).outerHeight(!0)
}),this.panels.each(function(){j(this).height(Math.max(0,a-j(this).innerHeight()+j(this).height()))
}).css("overflow","auto")):"auto"===e&&(a=0,this.panels.each(function(){a=Math.max(a,j(this).height("").height())
}).height(a))
},_eventHandler:function(A){var w=this.options,B=this.active,y=j(A.currentTarget),p=y.closest("li"),e=p[0]===B[0],m=e&&w.collapsible,x=m?j():this._getPanelForTab(p),q=B.length?this._getPanelForTab(B):j(),z={oldTab:B,oldPanel:q,newTab:m?j():p,newPanel:x};
A.preventDefault(),p.hasClass("ui-state-disabled")||p.hasClass("ui-tabs-loading")||this.running||e&&!w.collapsible||this._trigger("beforeActivate",A,z)===!1||(w.active=m?!1:this.tabs.index(p),this.active=e?j():p,this.xhr&&this.xhr.abort(),q.length||x.length||j.error("jQuery UI Tabs: Mismatching fragment identifier."),x.length&&this.load(this.tabs.index(p),A),this._toggle(A,z))
},_toggle:function(p,m){function q(){x.running=!1,x._trigger("activate",p,m)
}function e(){m.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),u.length&&x.options.show?x._show(u,x.options.show,q):(u.show(),q())
}var x=this,u=m.newPanel,w=m.oldPanel;
this.running=!0,w.length&&this.options.hide?this._hide(w,this.options.hide,function(){m.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),e()
}):(m.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),w.hide(),e()),w.attr({"aria-expanded":"false","aria-hidden":"true"}),m.oldTab.attr("aria-selected","false"),u.length&&w.length?m.oldTab.attr("tabIndex",-1):u.length&&this.tabs.filter(function(){return 0===j(this).attr("tabIndex")
}).attr("tabIndex",-1),u.attr({"aria-expanded":"true","aria-hidden":"false"}),m.newTab.attr({"aria-selected":"true",tabIndex:0})
},_activate:function(e){var a,m=this._findActive(e);
m[0]!==this.active[0]&&(m.length||(m=this.active),a=m.find(".ui-tabs-anchor")[0],this._eventHandler({target:a,currentTarget:a,preventDefault:j.noop}))
},_findActive:function(a){return a===!1?j():this.tabs.eq(a)
},_getIndex:function(a){return"string"==typeof a&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a
},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){j.data(this,"ui-tabs-destroy")?j(this).remove():j(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
}),this.tabs.each(function(){var e=j(this),a=e.data("ui-tabs-aria-controls");
a?e.attr("aria-controls",a).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")
}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")
},enable:function(a){var e=this.options.disabled;
e!==!1&&(a===f?e=!1:(a=this._getIndex(a),e=j.isArray(e)?j.map(e,function(i){return i!==a?i:null
}):j.map(this.tabs,function(m,i){return i!==a?i:null
})),this._setupDisabled(e))
},disable:function(a){var e=this.options.disabled;
if(e!==!0){if(a===f){e=!0
}else{if(a=this._getIndex(a),-1!==j.inArray(a,e)){return
}e=j.isArray(e)?j.merge([a],e).sort():[a]
}this._setupDisabled(e)
}},load:function(p,m){p=this._getIndex(p);
var e=this,x=this.tabs.eq(p),u=x.find(".ui-tabs-anchor"),w=this._getPanelForTab(x),q={tab:x,panel:w};
g(u[0])||(this.xhr=j.ajax(this._ajaxSettings(u,m,q)),this.xhr&&"canceled"!==this.xhr.statusText&&(x.addClass("ui-tabs-loading"),w.attr("aria-busy","true"),this.xhr.success(function(a){setTimeout(function(){w.html(a),e._trigger("load",m,q)
},1)
}).complete(function(i,a){setTimeout(function(){"abort"===a&&e.panels.stop(!1,!0),x.removeClass("ui-tabs-loading"),w.removeAttr("aria-busy"),i===e.xhr&&delete e.xhr
},1)
})))
},_ajaxSettings:function(n,m,o){var e=this;
return{url:n.attr("href"),beforeSend:function(a,i){return e._trigger("beforeLoad",m,j.extend({jqXHR:a,ajaxSettings:i},o))
}}
},_getPanelForTab:function(e){var a=j(e).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#"+a))
}})
})(jQuery);
(function(f){function b(g,e){var j=(g.attr("aria-describedby")||"").split(/\s+/);
j.push(e),g.data("ui-tooltip-id",e).attr("aria-describedby",f.trim(j.join(" ")))
}function a(j){var g=j.data("ui-tooltip-id"),k=(j.attr("aria-describedby")||"").split(/\s+/),e=f.inArray(g,k);
-1!==e&&k.splice(e,1),j.removeData("ui-tooltip-id"),k=f.trim(k.join(" ")),k?j.attr("aria-describedby",k):j.removeAttr("aria-describedby")
}var d=0;
f.widget("ui.tooltip",{version:"1.10.4",options:{content:function(){var e=f(this).attr("title")||"";
return f("<a>").text(e).html()
},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()
},_setOption:function(g,e){var j=this;
return"disabled"===g?(this[e?"_disable":"_enable"](),this.options[g]=e,void 0):(this._super(g,e),"content"===g&&f.each(this.tooltips,function(k,i){j._updateContent(i)
}),void 0)
},_disable:function(){var e=this;
f.each(this.tooltips,function(j,k){var g=f.Event("blur");
g.target=g.currentTarget=k[0],e.close(g,!0)
}),this.element.find(this.options.items).addBack().each(function(){var g=f(this);
g.is("[title]")&&g.data("ui-tooltip-title",g.attr("title")).attr("title","")
})
},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=f(this);
e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))
})
},open:function(g){var e=this,j=f(g?g.target:this.element).closest(this.options.items);
j.length&&!j.data("ui-tooltip-id")&&(j.attr("title")&&j.data("ui-tooltip-title",j.attr("title")),j.data("ui-tooltip-open",!0),g&&"mouseover"===g.type&&j.parents().each(function(){var i,k=f(this);
k.data("ui-tooltip-open")&&(i=f.Event("blur"),i.target=i.currentTarget=this,e.close(i,!0)),k.attr("title")&&(k.uniqueId(),e.parents[this.id]={element:this,title:k.attr("title")},k.attr("title",""))
}),this._updateContent(j,g))
},_updateContent:function(o,k){var j,m=this.options.content,g=this,p=k?k.type:null;
return"string"==typeof m?this._open(k,o,m):(j=m.call(o[0],function(e){o.data("ui-tooltip-open")&&g._delay(function(){k&&(k.type=p),this._open(k,o,e)
})
}),j&&this._open(k,o,j),void 0)
},_open:function(j,m,g){function u(i){e.of=i,p.is(":hidden")||p.position(e)
}var p,q,k,e=f.extend({},this.options.position);
if(g){if(p=this._find(m),p.length){return p.find(".ui-tooltip-content").html(g),void 0
}m.is("[title]")&&(j&&"mouseover"===j.type?m.attr("title",""):m.removeAttr("title")),p=this._tooltip(m),b(m,p.attr("id")),p.find(".ui-tooltip-content").html(g),this.options.track&&j&&/^mouse/.test(j.type)?(this._on(this.document,{mousemove:u}),u(j)):p.position(f.extend({of:m},this.options.position)),p.hide(),this._show(p,this.options.show),this.options.show&&this.options.show.delay&&(k=this.delayedShow=setInterval(function(){p.is(":visible")&&(u(e.of),clearInterval(k))
},f.fx.interval)),this._trigger("open",j,{tooltip:p}),q={keyup:function(o){if(o.keyCode===f.ui.keyCode.ESCAPE){var n=f.Event(o);
n.currentTarget=m[0],this.close(n,!0)
}},remove:function(){this._removeTooltip(p)
}},j&&"mouseover"!==j.type||(q.mouseleave="close"),j&&"focusin"!==j.type||(q.focusout="close"),this._on(!0,m,q)
}},close:function(g){var i=this,e=f(g?g.currentTarget:this.element),j=this._find(e);
this.closing||(clearInterval(this.delayedShow),e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title")),a(e),j.stop(!0),this._hide(j,this.options.hide,function(){i._removeTooltip(f(this))
}),e.removeData("ui-tooltip-open"),this._off(e,"mouseleave focusout keyup"),e[0]!==this.element[0]&&this._off(e,"remove"),this._off(this.document,"mousemove"),g&&"mouseleave"===g.type&&f.each(this.parents,function(m,k){f(k.element).attr("title",k.title),delete i.parents[m]
}),this.closing=!0,this._trigger("close",g,{tooltip:j}),this.closing=!1)
},_tooltip:function(j){var g="ui-tooltip-"+d++,e=f("<div>").attr({id:g,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));
return f("<div>").addClass("ui-tooltip-content").appendTo(e),e.appendTo(this.document[0].body),this.tooltips[g]=j,e
},_find:function(g){var e=g.data("ui-tooltip-id");
return e?f("#"+e):f()
},_removeTooltip:function(g){g.remove(),delete this.tooltips[g.attr("id")]
},_destroy:function(){var e=this;
f.each(this.tooltips,function(j,k){var g=f.Event("blur");
g.target=g.currentTarget=k[0],e.close(g,!0),f("#"+j).remove(),k.data("ui-tooltip-title")&&(k.attr("title",k.data("ui-tooltip-title")),k.removeData("ui-tooltip-title"))
})
}})
})(jQuery);
(function($){$.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata",savetype:"metadatatype"},setType:function(type,name){this.defaults.type=type;
this.defaults.name=name
},get:function(elem,opts){var settings=$.extend({},this.defaults,opts);
if(!settings.single.length){settings.single="metadata"
}var data=$.data(elem,settings.single);
var type=$.data(elem,settings.savetype);
if(data&&type===settings.type){return data
}data="{}";
var getData=function(data){if(typeof data!="string"){return data
}if(data.indexOf("{")<0){data=eval("("+data+")")
}};
var getObject=function(data){if(typeof data!="string"){return data
}data=eval("("+data+")");
return data
};
if(settings.type=="html5"){var object={};
$(elem.attributes).each(function(){var name=this.nodeName;
if(name.match(/^data-/)){name=name.replace(/^data-/,"")
}else{return true
}object[name]=getObject(this.nodeValue)
})
}else{if(settings.type=="class"){var m=settings.cre.exec(elem.className);
if(m){data=m[1]
}}else{if(settings.type=="elem"){if(!elem.getElementsByTagName){return
}var e=elem.getElementsByTagName(settings.name);
if(e.length){data=$.trim(e[0].innerHTML)
}}else{if(elem.getAttribute!=undefined){var attr=elem.getAttribute(settings.name);
if(attr){data=attr
}}}}object=getObject(data.indexOf("{")<0?"{"+data+"}":data)
}$.data(elem,settings.single,object);
$.data(elem,settings.savetype,settings.type);
return object
}}});
$.fn.metadata=function(opts){return $.metadata.get(this[0],opts)
}
})(jQuery);
(function(i){i.fn.adGallery=function(m){var o={loader_image:"loader.gif",start_at_index:0,description_wrapper:false,thumb_opacity:0.7,animate_first_image:false,animation_speed:400,width:false,height:false,display_next_and_prev:true,display_back_and_forward:true,display_back_and_forward_add:false,scroll_jump:0,slideshow:{enable:true,autostart:false,speed:5000,start_label:"Start",stop_label:"Stop",stop_on_scroll:true,countdown_prefix:"(",countdown_sufix:")",onStart:false,onStop:false},effect:"slide-hori",enable_keyboard_move:true,cycle:false,direction:i("html").css("direction")=="rtl"?"rtl":"ltr",callbacks:{init:false,afterImageVisible:false,beforeImageVisible:false}};
var n=i.extend(false,o,m);
if(m&&m.slideshow){n.slideshow=i.extend(false,o.slideshow,m.slideshow)
}if(!n.slideshow.enable){n.slideshow.autostart=false
}var k=[];
i(this).each(function(q){var p=new d(this,n,q);
k[k.length]=p
});
return k
};
function g(m,n,o){var p=parseInt(m.css("top"),10);
if(n=="left"){var k="-"+this.image_wrapper_height+"px";
m.css("top",this.image_wrapper_height+"px")
}else{var k=this.image_wrapper_height+"px";
m.css("top","-"+this.image_wrapper_height+"px")
}if(o){o.css("bottom","-"+o[0].offsetHeight+"px");
o.animate({bottom:0},this.settings.animation_speed*2)
}if(this.current_description){this.current_description.animate({bottom:"-"+this.current_description[0].offsetHeight+"px"},this.settings.animation_speed*2)
}return{old_image:{top:k},new_image:{top:p}}
}function f(m,n,p){var o=parseInt(m.css("left"),10);
if(n=="left"){var k="-"+this.image_wrapper_width+"px";
m.css("left",this.image_wrapper_width+"px")
}else{var k=this.image_wrapper_width+"px";
m.css("left","-"+this.image_wrapper_width+"px")
}if(p){p.fadeIn("slow")
}if(this.current_description){this.current_description.fadeOut()
}return{old_image:{left:k},new_image:{left:o}}
}function e(n,o,q){var m=n.width();
var k=n.height();
var p=parseInt(n.css("left"),10);
var r=parseInt(n.css("top"),10);
n.css({width:0,height:0,top:this.image_wrapper_height/2,left:this.image_wrapper_width/2});
return{old_image:{width:0,height:0,top:this.image_wrapper_height/2,left:this.image_wrapper_width/2},new_image:{width:m,height:k,top:r,left:p}}
}function b(k,m,n){k.css("opacity",0);
return{old_image:{opacity:0},new_image:{opacity:1}}
}function j(k,m,n){k.css("opacity",0);
return{old_image:{opacity:0},new_image:{opacity:1},speed:0}
}function d(n,k,m){this.init(n,k,m)
}d.prototype={wrapper:false,image_wrapper:false,gallery_info:false,nav:false,loader:false,preloads:false,thumbs_wrapper:false,scroll_back:false,scroll_forward:false,next_link:false,prev_link:false,slideshow:false,image_wrapper_width:0,image_wrapper_height:0,current_index:0,gallery_index:0,current_image:false,current_description:false,nav_display_width:0,settings:false,images:false,in_transition:false,animations:false,init:function(q,o,p){var n=this;
this.wrapper=i(q);
this.gallery_index=p;
this.settings=o;
this.setupElements();
this.setupAnimations();
if(this.settings.width){this.image_wrapper_width=this.settings.width;
this.image_wrapper.width(this.settings.width);
this.wrapper.width(this.settings.width)
}else{this.image_wrapper_width=this.image_wrapper.width()
}if(this.settings.height){this.image_wrapper_height=this.settings.height;
this.image_wrapper.height(this.settings.height)
}else{this.image_wrapper_height=this.image_wrapper.height()
}this.nav_display_width=this.nav.width();
this.current_index=0;
this.current_image=false;
this.current_description=false;
this.in_transition=false;
this.findImages();
if(this.settings.display_next_and_prev){this.initNextAndPrev()
}var k=function(r){return n.nextImage(r)
};
this.slideshow=new a(k,this.settings.slideshow);
this.controls.append(this.slideshow.create());
if(this.settings.slideshow.enable){this.slideshow.enable()
}else{this.slideshow.disable()
}if(this.settings.display_back_and_forward){this.initBackAndForward()
}if(this.settings.enable_keyboard_move){this.initKeyEvents()
}var m=parseInt(this.settings.start_at_index,10);
if(window.location.hash&&window.location.hash.indexOf("#ad-image")===0){m=window.location.hash.replace(/[^0-9]+/g,"");
if((m*1)!=m){m=this.settings.start_at_index
}}this.loading(true);
this.showImage(m,function(){if(n.settings.slideshow.autostart){n.preloadImage(m+1);
n.slideshow.start()
}});
this.fireCallback(this.settings.callbacks.init)
},setupAnimations:function(){this.animations={"slide-vert":g,"slide-hori":f,resize:e,fade:b,none:j}
},setupElements:function(){this.prev_text_link=i('<a href="#" class="ad-prev-img">back</a>');
this.next_text_link=i('<a href="#" class="ad-next-img">next</a>');
this.image_controls_box=i('<div class="ad-controls-box"></div>');
this.image_controls_box.append(this.prev_text_link,this.next_text_link);
this.wrapper.prepend(this.image_controls_box);
this.image_description=i('<div class="ad-img-description"></div>');
this.wrapper.prepend(this.image_description);
this.image_box=i('<div class="ad-image-box"><div class="ad-image-wrapper"></div></div>');
this.wrapper.prepend(this.image_box);
this.controls=i('<div class="ad-controls"></div>');
this.wrapper.find(".ad-nav-box").append(this.controls);
this.gallery_info=i('<p class="ad-info"></p>');
this.controls.append(this.gallery_info);
this.image_wrapper=this.wrapper.find(".ad-image-wrapper");
this.image_wrapper.empty();
this.nav=this.wrapper.find(".ad-nav");
this.thumbs_wrapper=this.nav.find(".ad-thumbs");
this.preloads=i('<div class="ad-preloads"></div>');
this.loader=i('<img class="ad-loader" src="'+this.settings.loader_image+'">');
this.image_wrapper.append(this.loader);
this.loader.hide();
if(this.settings.description_wrapper){this.settings.description_wrapper=this.wrapper.find(this.settings.description_wrapper)
}i(document.body).append(this.preloads)
},loading:function(k){if(k){this.loader.show()
}else{this.loader.hide()
}},addAnimation:function(k,m){if(i.isFunction(m)){this.animations[k]=m
}},findImages:function(){var q=this;
this.images=[];
var p=0;
var o=0;
var n=this.thumbs_wrapper.find("a");
var m=n.length;
if(this.settings.thumb_opacity<1){n.find("img").css("opacity",this.settings.thumb_opacity)
}n.each(function(u){var x=i(this);
var w=x.prop("href");
var r=x.find("img");
if(r.length>0){if(!q.isImageLoaded(r[0])){r.load(function(){p+=this.parentNode.parentNode.offsetWidth;
o++
})
}else{p+=r[0].parentNode.parentNode.offsetWidth;
o++
}}x.addClass("ad-thumb"+u);
x.click(function(){q.showImage(u);
q.slideshow.stop();
return false
}).hover(function(){if(!i(this).is(".ad-active")&&q.settings.thumb_opacity<1){i(this).find("img").fadeTo(300,1)
}q.preloadImage(u)
},function(){if(!i(this).is(".ad-active")&&q.settings.thumb_opacity<1){i(this).find("img").fadeTo(300,q.settings.thumb_opacity)
}});
var x=false;
if(r.data("ad-link")){x=r.data("ad-link")
}else{if(r.prop("longdesc")&&r.attr("longdesc").length){x=r.prop("longdesc")
}}var z=false;
if(r.data("ad-desc")){z=r.data("ad-desc")
}else{if(r.prop("alt")&&r.attr("alt").length){z=r.prop("alt");
i(this).html(u+1)
}else{z=i(this).html();
i(this).html(u+1)
}}var y=false;
if(r.data("ad-title")){y=r.data("ad-title")
}else{if(r.prop("title")&&r.prop("title").length){y=r.prop("title")
}}q.images[u]={thumb:r.prop("src"),image:w,error:false,preloaded:false,desc:z,title:y,size:false,link:x}
});
var k=setInterval(function(){if(m==o){p-=100;
var w=q.nav.find(".ad-thumb-list");
w.css("width",p+"px");
var u=1;
var r=w.height();
while(u<201){w.css("width",(p+u)+"px");
if(r!=w.height()){break
}r=w.height();
u++
}clearInterval(k)
}},100)
},initKeyEvents:function(){var k=this;
i(document).keydown(function(m){if(m.keyCode==39){k.nextImage();
k.slideshow.stop()
}else{if(m.keyCode==37){k.prevImage();
k.slideshow.stop()
}}})
},initNextAndPrev:function(){this.next_link=i('<div class="ad-next"><div class="ad-next-image"></div></div>');
this.prev_link=i('<div class="ad-prev"><div class="ad-prev-image"></div></div>');
this.image_wrapper.append(this.next_link);
this.image_wrapper.append(this.prev_link);
var k=this;
this.prev_link.add(this.next_link).mouseover(function(m){i(this).css("height",k.image_wrapper_height);
i(this).find("div").show()
}).mouseout(function(m){i(this).find("div").hide()
}).click(function(){if(i(this).is(".ad-next")){k.nextImage();
k.slideshow.stop()
}else{k.prevImage();
k.slideshow.stop()
}});
this.next_text_link.click(function(){k.nextImage();
k.slideshow.stop();
return false
});
this.prev_text_link.click(function(){k.prevImage();
k.slideshow.stop();
return false
})
},initBackAndForward:function(){var n=this;
this.scroll_forward=i('<div class="ad-forward"></div>');
this.scroll_back=i('<div class="ad-back"></div>');
this.nav.append(this.scroll_forward);
this.nav.prepend(this.scroll_back);
var m=0;
var k=false;
i(this.scroll_back).add(this.scroll_forward).click(function(){var o=n.nav_display_width-50;
if(n.settings.scroll_jump>0){var o=n.settings.scroll_jump
}if(i(this).is(".ad-forward")){var p=n.thumbs_wrapper.scrollLeft()+o
}else{var p=n.thumbs_wrapper.scrollLeft()-o
}if(n.settings.slideshow.stop_on_scroll){n.slideshow.stop()
}n.thumbs_wrapper.animate({scrollLeft:p+"px"});
return false
}).css("opacity",0.6).hover(function(){var o=(n.settings.direction=="rtl")?"left":"right";
if(i(this).is(".ad-forward")){o=(n.settings.direction=="rtl")?"right":"left"
}k=setInterval(function(){m++;
if(m>30&&n.settings.slideshow.stop_on_scroll){n.slideshow.stop()
}var p=n.thumbs_wrapper.scrollLeft()+1;
if(o=="left"){p=n.thumbs_wrapper.scrollLeft()-1
}n.thumbs_wrapper.scrollLeft(p)
},10);
i(this).css("opacity",1)
},function(){m=0;
clearInterval(k);
i(this).css("opacity",0.6)
})
},_afterShow:function(){this.gallery_info.html(" / "+this.images.length);
if(!this.settings.cycle){this.prev_link.show().css("height",this.image_wrapper_height);
this.next_link.show().css("height",this.image_wrapper_height);
this.prev_text_link.removeClass("hide");
this.next_text_link.removeClass("hide");
if(this.current_index==(this.images.length-1)){this.next_link.hide();
this.next_text_link.addClass("hide")
}if(this.current_index==0){this.prev_link.hide();
this.prev_text_link.addClass("hide")
}this.wrapper.hide().show()
}this.fireCallback(this.settings.callbacks.afterImageVisible)
},_getContainedImageSize:function(m,k){if(k>this.image_wrapper_height){var n=m/k;
k=this.image_wrapper_height;
m=this.image_wrapper_height*n
}if(m>this.image_wrapper_width){var n=k/m;
m=this.image_wrapper_width;
k=this.image_wrapper_width*n
}return{width:m,height:k}
},_centerImage:function(o,m,k){o.css("top","0px");
if(k<this.image_wrapper_height){var n=this.image_wrapper_height-k;
o.css("top",(n/2)+"px")
}o.css("left","0px");
if(m<this.image_wrapper_width){var n=this.image_wrapper_width-m;
o.css("left",(n/2)+"px")
}},_getDescription:function(k){var n=false;
if(k.desc.length||k.title.length){var m="";
if(k.title.length){m='<strong class="ad-description-title">'+k.title+"</strong>"
}var n="";
if(k.desc.length){n="<span>"+k.desc+"</span>"
}n=i('<p class="ad-image-description">'+m+n+"</p>")
}return n
},showImage:function(k,o){if(this.images[k]&&!this.in_transition){var m=this;
var n=this.images[k];
this.in_transition=true;
if(!n.preloaded){this.loading(true);
this.preloadImage(k,function(){m.loading(false);
m._showWhenLoaded(k,o)
})
}else{this._showWhenLoaded(k,o)
}}},_showWhenLoaded:function(w,C){if(this.images[w]){var m=this;
var o=this.images[w];
var p=i(document.createElement("div")).addClass("ad-image");
var r=i(new Image()).prop("src",o.image);
if(o.link){var z=i('<a href="'+o.link+'" target="_blank"></a>');
z.append(r);
p.append(z)
}else{p.append(r)
}this.image_wrapper.prepend(p);
var E=this._getContainedImageSize(o.size.width,o.size.height);
r.prop("width",E.width);
r.prop("height",E.height);
p.css({width:E.width+"px",height:E.height+"px"});
this._centerImage(p,E.width,E.height);
var D=this;
i(window).resize(function(){if(D.settings.width){D.image_wrapper_width=D.settings.width;
D.image_wrapper.width(D.settings.width);
D.wrapper.width(D.settings.width)
}else{D.image_wrapper_width=D.image_wrapper.width()
}E=D._getContainedImageSize(o.size.width,o.size.height);
p.css({width:E.width+"px",height:E.height+"px"});
D._centerImage(p,E.width,E.height)
});
var u=this._getDescription(o,p);
if(u){if(!this.settings.description_wrapper){p.append(u);
var k=E.width-parseInt(u.css("padding-left"),10)-parseInt(u.css("padding-right"),10);
u.css("width",k+"px")
}else{this.image_description.append(u)
}}this.highLightThumb(this.nav.find(".ad-thumb"+w));
var A=(m.settings.direction=="rtl")?"left":"right";
if(this.current_index<w){A=(m.settings.direction=="rtl")?"right":"left"
}this.fireCallback(this.settings.callbacks.beforeImageVisible);
if(this.current_image||this.settings.animate_first_image){var B=this.settings.animation_speed;
var y="swing";
var q=this.animations[this.settings.effect].call(this,p,A,u);
if(typeof q.speed!="undefined"){B=q.speed
}if(typeof q.easing!="undefined"){y=q.easing
}if(this.current_image){var n=this.current_image;
var x=this.current_description;
n.animate(q.old_image,B,y,function(){n.remove();
if(x){x.remove()
}})
}p.animate(q.new_image,B,y,function(){m.current_index=w;
m.current_image=p;
m.current_description=u;
m.in_transition=false;
m._afterShow();
m.fireCallback(C)
})
}else{this.current_index=w;
this.current_image=p;
m.current_description=u;
this.in_transition=false;
m._afterShow();
this.fireCallback(C)
}}},nextIndex:function(){if(this.current_index==(this.images.length-1)){if(!this.settings.cycle){return false
}var k=0
}else{var k=this.current_index+1
}return k
},nextImage:function(m){var k=this.nextIndex();
if(k===false){return false
}this.preloadImage(k+1);
this.showImage(k,m);
return true
},prevIndex:function(){if(this.current_index==0){if(!this.settings.cycle){return false
}var k=this.images.length-1
}else{var k=this.current_index-1
}return k
},prevImage:function(m){var k=this.prevIndex();
if(k===false){return false
}this.preloadImage(k-1);
this.showImage(k,m);
return true
},preloadAll:function(){var m=this;
var k=0;
function n(){if(k<m.images.length){k++;
m.preloadImage(k,n)
}}m.preloadImage(k,n)
},preloadImage:function(m,p){if(this.images[m]){var o=this.images[m];
if(!this.images[m].preloaded){var k=i(new Image());
k.prop("src",o.image);
if(!this.isImageLoaded(k[0])){this.preloads.append(k);
var n=this;
k.load(function(){o.preloaded=true;
o.size={width:this.width,height:this.height};
n.fireCallback(p)
})
}else{o.preloaded=true;
o.size={width:k[0].width,height:k[0].height};
this.fireCallback(p)
}}else{this.fireCallback(p)
}}},isImageLoaded:function(k){if(typeof k.complete!="undefined"&&!k.complete){return false
}if(typeof k.naturalWidth!="undefined"&&k.naturalWidth==0){return false
}return true
},highLightThumb:function(k){this.thumbs_wrapper.find(".ad-active").removeClass("ad-active");
k.addClass("ad-active");
if(this.settings.thumb_opacity<1){this.thumbs_wrapper.find("a:not(.ad-active) img").fadeTo(300,this.settings.thumb_opacity);
k.find("img").fadeTo(300,1)
}var m=k[0].parentNode.offsetLeft;
m-=(this.nav_display_width/2)-(k[0].offsetWidth/2);
this.thumbs_wrapper.animate({scrollLeft:m+"px"})
},fireCallback:function(k){if(i.isFunction(k)){k.call(this)
}}};
function a(k,m){this.init(k,m)
}a.prototype={start_link:false,stop_link:false,countdown:false,controls:false,settings:false,nextimage_callback:false,enabled:false,running:false,countdown_interval:false,init:function(k,n){var m=this;
this.nextimage_callback=k;
this.settings=n
},create:function(){this.start_link=i('<span class="ad-slideshow-start">'+this.settings.start_label+"</span>");
this.stop_link=i('<span class="ad-slideshow-stop">'+this.settings.stop_label+"</span>");
this.countdown=i('<span class="ad-slideshow-countdown"></span>');
this.controls=i('<div class="ad-slideshow-controls"></div>');
this.controls.append(this.start_link).append(this.stop_link).append(this.countdown);
this.countdown.hide();
var k=this;
this.start_link.click(function(){k.start()
});
this.stop_link.click(function(){k.stop()
});
i(document).keydown(function(m){if(m.keyCode==83){if(k.running){k.stop()
}else{k.start()
}}});
return this.controls
},disable:function(){this.enabled=false;
this.stop();
this.controls.hide()
},enable:function(){this.enabled=true;
this.controls.show()
},toggle:function(){if(this.enabled){this.disable()
}else{this.enable()
}},start:function(){if(this.running||!this.enabled){return false
}var k=this;
this.running=true;
this.controls.addClass("ad-slideshow-running");
this._next();
this.fireCallback(this.settings.onStart);
return true
},stop:function(){if(!this.running){return false
}this.running=false;
this.countdown.hide();
this.controls.removeClass("ad-slideshow-running");
clearInterval(this.countdown_interval);
this.fireCallback(this.settings.onStop);
return true
},_next:function(){var n=this;
var o=this.settings.countdown_prefix;
var m=this.settings.countdown_sufix;
clearInterval(n.countdown_interval);
this.countdown.show().html(o+(this.settings.speed/1000)+m);
var k=0;
this.countdown_interval=setInterval(function(){k+=1000;
if(k>=n.settings.speed){var q=function(){if(n.running){n._next()
}k=0
};
if(!n.nextimage_callback(q)){n.stop()
}k=0
}var p=parseInt(n.countdown.text().replace(/[^0-9]/g,""),10);
p--;
if(p>0){n.countdown.html(o+p+m)
}},1000)
},fireCallback:function(k){if(i.isFunction(k)){k.call(this)
}},orientationchange:function(){}}
})(jQuery);
(function($){$.extend({tablesorter:new function(){var parsers=[],widgets=[];
this.defaults={cssHeader:"header",cssAsc:"headerSortUp",cssDesc:"headerSortDown",cssChildRow:"expand-child",cssUI:{widget:"ui-widget ui-widget-content ui-corner-all",header:"ui-widget-header ui-corner-all",hover:"ui-state-hover",icon:"ui-icon",iconBoth:"ui-icon-arrowthick-2-n-s",iconDesc:"ui-icon-arrowthick-1-n",iconAsc:"ui-icon-arrowthick-1-s"},sortInitialOrder:"asc",sortMultiSortKey:"shiftKey",sortForce:null,sortAppend:null,textExtraction:"simple",parsers:{},widgets:[],widgetZebra:{css:["even","odd"]},headers:{},widthFixed:false,cancelSelection:true,sortList:[],headerList:[],locale:"us",format:{us:{decimal:".",date:"/"},en:{decimal:".",date:"/"},eu:{decimal:",",date:"."},de:{decimal:",",date:"."}},onRenderHeader:null,selectorHeaders:"thead th",useUI:false,debug:false};
function benchmark(s,d){log(s+","+(new Date().getTime()-d.getTime())+"ms")
}this.benchmark=benchmark;
function log(s){if(typeof console!="undefined"&&typeof console.debug!="undefined"){console.log(s)
}else{alert(s)
}}function buildParserCache(table,$headers){if(table.config.debug){var parsersDebug=""
}var rows=table.tBodies[0].rows;
if(table.tBodies[0].rows[0]){var list=[],cells=rows[0].cells,l=cells.length;
for(var i=0;
i<l;
i++){var p=false;
if($.metadata&&($($headers[i]).metadata()&&$($headers[i]).metadata().sorter)){p=getParserById($($headers[i]).metadata().sorter)
}else{if((table.config.headers[i]&&table.config.headers[i].sorter)){p=getParserById(table.config.headers[i].sorter)
}}if(!p){p=detectParserForColumn(table,cells[i])
}if(table.config.debug){parsersDebug+="column:"+i+" parser:"+p.id+"\n"
}list.push(p)
}}if(table.config.debug){log(parsersDebug)
}return list
}function detectParserForColumn(table,node){var l=parsers.length;
for(var i=1;
i<l;
i++){if(parsers[i].is($.trim(getElementText(table.config,node)),table,node)){return parsers[i]
}}return parsers[0]
}function getParserById(name){var l=parsers.length;
for(var i=0;
i<l;
i++){if(parsers[i].id.toLowerCase()==name.toLowerCase()){return parsers[i]
}}return false
}function buildCache(table){if(table.config.debug){var cacheTime=new Date()
}var totalRows=(table.tBodies[0]&&table.tBodies[0].rows.length)||0,totalCells=(table.tBodies[0].rows[0]&&table.tBodies[0].rows[0].cells.length)||0,parsers=table.config.parsers,cache={row:[],normalized:[]};
for(var i=0;
i<totalRows;
++i){var c=$(table.tBodies[0].rows[i]),cols=[];
if(c.hasClass(table.config.cssChildRow)){cache.row[cache.row.length-1]=cache.row[cache.row.length-1].add(c);
continue
}cache.row.push(c);
for(var j=0;
j<totalCells;
++j){cols.push(parsers[j].format(getElementText(table.config,c[0].cells[j]),table,c[0].cells[j]))
}cols.push(cache.normalized.length);
cache.normalized.push(cols);
cols=null
}if(table.config.debug){benchmark("Building cache for "+totalRows+" rows:",cacheTime)
}return cache
}function getElementText(config,node){if(!node){return""
}var t="";
if(config.textExtraction=="simple"){if(node.childNodes[0]&&node.childNodes[0].hasChildNodes()){t=node.childNodes[0].innerHTML
}else{t=node.innerHTML
}}else{if(typeof(config.textExtraction)=="function"){t=config.textExtraction(node)
}else{t=$(node).text()
}}return t
}function appendToTable(table,cache){if(table.config.debug){var appendTime=new Date()
}var c=cache,r=c.row,n=c.normalized,totalRows=n.length,checkCell=(n[0].length-1),tableBody=$(table.tBodies[0]),rows=[];
for(var i=0;
i<totalRows;
i++){var pos=n[i][checkCell];
rows.push(r[pos]);
if(!table.config.appender){var o=r[pos];
var l=o.length;
for(var j=0;
j<l;
j++){tableBody[0].appendChild(o[j])
}}}if(table.config.appender){table.config.appender(table,rows)
}rows=null;
if(table.config.debug){benchmark("Rebuilt table:",appendTime)
}applyWidget(table);
setTimeout(function(){$(table).trigger("sortEnd")
},0)
}function buildHeaders(table){if(table.config.debug){var time=new Date()
}var config=table.config;
var meta=($.metadata)?true:false;
$tableHeaders=$(config.selectorHeaders,table).each(function(index){this.column=index;
this.order=formatSortingOrder(config.sortInitialOrder);
this.count=this.order;
if(checkHeaderMetadata(this)||checkHeaderOptions(table,index)){this.sortDisabled=true
}if(!this.sortDisabled){if(config.useUI){$(this).prepend("<span></span>").children("span").addClass(config.cssUI.icon);
$(this).on("mouseenter mouseleave",function(){$(this).addClass(config.cssUI.hover)
},function(){$(this).removeClass(config.cssUI.hover)
})
}else{if(config.onRenderHeader){config.onRenderHeader.apply(this)
}}}config.headerList[index]=this
});
if(table.config.debug){benchmark("Built headers:",time);
log($tableHeaders)
}return $tableHeaders
}function setupCss(table,$headers){var c=table.config;
if(c.useUI){$(table).parent("div:first").addClass(c.cssUI.widget);
$headers.addClass(c.cssUI.header);
return[c.cssUI.iconDesc,c.cssUI.iconAsc,c.cssUI.iconBoth]
}else{$headers.addClass(c.cssHeader);
return[c.cssDesc,c.cssAsc]
}}function checkCellColSpan(table,rows,row){var arr=[],r=table.tHead.rows,c=r[row].cells;
for(var i=0;
i<c.length;
i++){var cell=c[i];
if(cell.colSpan>1){arr=arr.concat(checkCellColSpan(table,headerArr,row++))
}else{if(table.tHead.length==1||(cell.rowSpan>1||!r[row+1])){arr.push(cell)
}}}return arr
}function checkHeaderMetadata(cell){if(($.metadata)&&($(cell).metadata().sorter===false)){return true
}return false
}function checkHeaderOptions(table,i){if((table.config.headers[i])&&(table.config.headers[i].sorter===false)){return true
}return false
}function applyWidget(table){var c=table.config.widgets;
var l=c.length;
for(var i=0;
i<l;
i++){getWidgetById(c[i]).format(table)
}}function getWidgetById(name){var l=widgets.length;
for(var i=0;
i<l;
i++){if(widgets[i].id.toLowerCase()==name.toLowerCase()){return widgets[i]
}}}function formatSortingOrder(v){if(typeof(v)!="Number"){return(v.toLowerCase()=="desc")?1:0
}else{return(v==1)?1:0
}}function isValueInArray(v,a){var l=a.length;
for(var i=0;
i<l;
i++){if(a[i][0]==v){return true
}}return false
}function setHeadersCss(table,$headers,list,css){var c=table.config;
if(c.useUI){$headers.children("span").removeClass(css[0]).removeClass(css[1]).addClass(css[2])
}else{$headers.removeClass(css[0]).removeClass(css[1])
}var h=[];
$headers.each(function(offset){if(!this.sortDisabled){h[this.column]=$(this)
}});
var l=list.length;
for(var i=0;
i<l;
i++){if(c.useUI){h[list[i][0]].children("span").removeClass(css[2]).addClass(css[list[i][1]])
}else{h[list[i][0]].addClass(css[list[i][1]])
}}}function fixColumnWidth(table,$headers){var c=table.config;
if(c.widthFixed){var colgroup=$("<colgroup>");
$("tr:first td",table.tBodies[0]).each(function(){colgroup.append($("<col>").css("width",$(this).width()))
});
$(table).prepend(colgroup)
}}function updateHeaderSortCount(table,sortList){var c=table.config,l=sortList.length;
for(var i=0;
i<l;
i++){var s=sortList[i],o=c.headerList[s[0]];
o.count=s[1];
o.count++
}}function multisort(table,sortList,cache){if(table.config.debug){var sortTime=new Date()
}var dynamicExp="var sortWrapper = function(a,b) {",l=sortList.length;
for(var i=0;
i<l;
i++){var c=sortList[i][0];
var order=sortList[i][1];
var s=(table.config.parsers[c].type=="text")?((order==0)?makeSortFunction("text","asc",c):makeSortFunction("text","desc",c)):((order==0)?makeSortFunction("numeric","asc",c):makeSortFunction("numeric","desc",c));
var e="e"+i;
dynamicExp+="var "+e+" = "+s;
dynamicExp+="if("+e+") { return "+e+"; } ";
dynamicExp+="else { "
}var orgOrderCol=cache.normalized[0].length-1;
dynamicExp+="return a["+orgOrderCol+"]-b["+orgOrderCol+"];";
for(var i=0;
i<l;
i++){dynamicExp+="}; "
}dynamicExp+="return 0; ";
dynamicExp+="}; ";
if(table.config.debug){benchmark("Evaling expression:"+dynamicExp,new Date())
}eval(dynamicExp);
cache.normalized.sort(sortWrapper);
if(table.config.debug){benchmark("Sorting on "+sortList.toString()+" and dir "+order+" time:",sortTime)
}return cache
}function makeSortFunction(type,direction,index){var a="a["+index+"]",b="b["+index+"]";
if(type=="text"&&direction=="asc"){return"("+a+" == "+b+" ? 0 : ("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : ("+a+" < "+b+") ? -1 : 1 )));"
}else{if(type=="text"&&direction=="desc"){return"("+a+" == "+b+" ? 0 : ("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : ("+b+" < "+a+") ? -1 : 1 )));"
}else{if(type=="numeric"&&direction=="asc"){return"("+a+" === null && "+b+" === null) ? 0 :("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : "+a+" - "+b+"));"
}else{if(type=="numeric"&&direction=="desc"){return"("+a+" === null && "+b+" === null) ? 0 :("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : "+b+" - "+a+"));"
}}}}}function makeSortText(i){return"((a["+i+"] < b["+i+"]) ? -1 : ((a["+i+"] > b["+i+"]) ? 1 : 0));"
}function makeSortTextDesc(i){return"((b["+i+"] < a["+i+"]) ? -1 : ((b["+i+"] > a["+i+"]) ? 1 : 0));"
}function makeSortNumeric(i){return"a["+i+"]-b["+i+"];"
}function makeSortNumericDesc(i){return"b["+i+"]-a["+i+"];"
}function sortText(a,b){return((a<b)?-1:((a>b)?1:0))
}function sortTextDesc(a,b){return((b<a)?-1:((b>a)?1:0))
}function sortNumeric(a,b){return a-b
}function sortNumericDesc(a,b){return b-a
}function getCachedSortType(parsers,i){return parsers[i].type
}this.construct=function(settings){return this.each(function(){if(!this.tHead||!this.tBodies){return
}var $this,$document,$headers,cache,config,shiftDown=0,sortOrder;
this.config={};
config=$.extend(this.config,$.tablesorter.defaults,settings);
$this=$(this);
$.data(this,"tablesorter",config);
$headers=buildHeaders(this);
this.config.parsers=buildParserCache(this,$headers);
cache=buildCache(this);
var sortCSS=setupCss(this,$headers);
fixColumnWidth(this);
$headers.click(function(e){var totalRows=($this[0].tBodies[0]&&$this[0].tBodies[0].rows.length)||0;
if(!this.sortDisabled&&totalRows>0){$this.trigger("sortStart");
var $cell=$(this);
var i=this.column;
this.order=this.count++%2;
if(!e[config.sortMultiSortKey]){config.sortList=[];
if(config.sortForce!=null){var a=config.sortForce;
for(var j=0;
j<a.length;
j++){if(a[j][0]!=i){config.sortList.push(a[j])
}}}config.sortList.push([i,this.order])
}else{if(isValueInArray(i,config.sortList)){for(var j=0;
j<config.sortList.length;
j++){var s=config.sortList[j],o=config.headerList[s[0]];
if(s[0]==i){o.count=s[1];
o.count++;
s[1]=o.count%2
}}}else{config.sortList.push([i,this.order])
}}setTimeout(function(){setHeadersCss($this[0],$headers,config.sortList,sortCSS);
appendToTable($this[0],multisort($this[0],config.sortList,cache))
},1);
return false
}}).mousedown(function(){if(config.cancelSelection){this.onselectstart=function(){return false
};
return false
}});
$this.bind("update",function(){var me=this;
setTimeout(function(){me.config.parsers=buildParserCache(me,$headers);
cache=buildCache(me)
},1)
}).bind("updateCell",function(e,cell){var config=this.config;
var pos=[(cell.parentNode.rowIndex-1),cell.cellIndex];
cache.normalized[pos[0]][pos[1]]=config.parsers[pos[1]].format(getElementText(config,cell),cell)
}).bind("sorton",function(e,list){$(this).trigger("sortStart");
config.sortList=list;
var sortList=config.sortList;
updateHeaderSortCount(this,sortList);
setHeadersCss(this,$headers,sortList,sortCSS);
appendToTable(this,multisort(this,sortList,cache))
}).bind("appendCache",function(){appendToTable(this,cache)
}).bind("applyWidgetId",function(e,id){getWidgetById(id).format(this)
}).bind("applyWidgets",function(){applyWidget(this)
});
if($.metadata&&($(this).metadata()&&$(this).metadata().sortlist)){config.sortList=$(this).metadata().sortlist
}if(config.sortList.length>0){$this.trigger("sorton",[config.sortList])
}else{applyWidget(this)
}})
};
this.addParser=function(parser){var l=parsers.length,a=true;
for(var i=0;
i<l;
i++){if(parsers[i].id.toLowerCase()==parser.id.toLowerCase()){a=false
}}if(a){parsers.push(parser)
}};
this.addWidget=function(widget){widgets.push(widget)
};
this.formatDate=function(s,config){if(config.locale!="us"){var datePoint="\\"+config.format[config.locale]["date"];
s=s.replace(new RegExp("[\\-"+datePoint+"]","g"),config.format.us["date"])
}return s
};
this.formatDecimal=function(s,config){if(config.locale!="us"){s=s.replace(config.format[config.locale]["decimal"],config.format.us["decimal"])
}return s
};
this.formatFloat=function(s){var i=parseFloat(s);
return(isNaN(i))?0:i
};
this.formatInt=function(s){var i=parseInt(s);
return(isNaN(i))?0:i
};
this.isDigit=function(s,config){var decimalPoint="\\"+config.format[config.locale]["decimal"];
var exp="/(^[+]?0("+decimalPoint+"0+)?$)|(^([-+]?[0-9]*)$)|(^([-+]?((0?[0-9]*)"+decimalPoint+"(0*[0-9]*)))$)|(^[-+]?[0-9]*"+decimalPoint+"0+$)/";
return RegExp(exp).test($.trim(s))
};
this.clearTableBody=function(table){if(ubs.util.ie()){function empty(){while(this.firstChild){this.removeChild(this.firstChild)
}}empty.apply(table.tBodies[0])
}else{table.tBodies[0].innerHTML=""
}}
}});
$.fn.extend({tablesorter:$.tablesorter.construct});
var ts=$.tablesorter;
ts.addParser({id:"text",is:function(s){return true
},format:function(s){return $.trim(s.toLowerCase())
},type:"text"});
ts.addParser({id:"digit",is:function(s,table){var c=table.config;
return $.tablesorter.isDigit(s,c)
},format:function(s,table){var c=table.config;
s=$.tablesorter.formatDecimal(s,c);
return $.tablesorter.formatFloat(s)
},type:"numeric"});
ts.addParser({id:"currency",is:function(s){return/^[Â£$â‚¬?.,]/.test(s)
},format:function(s,table){var c=table.config;
s=$.tablesorter.formatDecimal(s,c);
return $.tablesorter.formatFloat(s.replace(new RegExp(/[Â£$â‚¬]/g),""))
},type:"numeric"});
ts.addParser({id:"ipAddress",is:function(s){return/^\d{2,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/.test(s)
},format:function(s){var a=s.split("."),r="",l=a.length;
for(var i=0;
i<l;
i++){var item=a[i];
if(item.length==2){r+="0"+item
}else{r+=item
}}return $.tablesorter.formatFloat(r)
},type:"numeric"});
ts.addParser({id:"url",is:function(s){return/^(https?|ftp|file):\/\/$/.test(s)
},format:function(s){return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//),""))
},type:"text"});
ts.addParser({id:"isoDate",is:function(s){return/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s)
},format:function(s){return $.tablesorter.formatFloat((s!="")?new Date(s.replace(new RegExp(/-/g),"/")).getTime():"0")
},type:"numeric"});
ts.addParser({id:"percent",is:function(s){return/\%$/.test($.trim(s))
},format:function(s,table){var c=table.config;
s=$.tablesorter.formatDecimal(s,c);
return $.tablesorter.formatFloat(s.replace(new RegExp(/%/g),""))
},type:"numeric"});
ts.addParser({id:"usLongDate",is:function(s){return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/))
},format:function(s){return $.tablesorter.formatFloat(new Date(s).getTime())
},type:"numeric"});
ts.addParser({id:"mediumDate",is:function(s,table){var c=table.config;
var datePoint="\\"+c.format[c.locale]["date"];
var expStr="\\d{1,2}[\\-"+datePoint+"]\\d{1,2}[\\-"+datePoint+"]\\d{4}";
return RegExp(expStr).test(s)
},format:function(s,table){var c=table.config;
s=$.tablesorter.formatDate(s,c);
if(c.locale=="us"){s=s.replace(/(\d{1,2})[\/](\d{1,2})[\/](\d{4})/,"$3/$1/$2")
}else{if(c.locale=="en"||c.locale=="de"||c.locale=="eu"){s=s.replace(/(\d{1,2})[\/](\d{1,2})[\/](\d{4})/,"$3/$2/$1")
}}return $.tablesorter.formatFloat((s!="")?new Date(s).getTime():0)
},type:"numeric"});
ts.addParser({id:"shortDate",is:function(s,table){var c=table.config;
var datePoint="\\"+c.format[c.locale]["date"];
var expStr="\\d{1,2}[\\-"+datePoint+"]\\d{1,2}[\\-"+datePoint+"]\\d{2}";
return RegExp(expStr).test(s)
},format:function(s,table){var c=table.config;
s=$.tablesorter.formatDate(s,c);
if(c.locale=="us"){s=s.replace(/(\d{1,2})[\/](\d{1,2})[\/](\d{2})/,"$1/$2/$3")
}else{if(c.locale=="en"||c.locale=="de"||c.locale=="eu"){s=s.replace(/(\d{1,2})[\/](\d{1,2})[\/](\d{2})/,"$2/$1/$3")
}}return $.tablesorter.formatFloat((s!="")?new Date(s).getTime():0)
},type:"numeric"});
ts.addParser({id:"time",is:function(s){return/^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(s)
},format:function(s){return $.tablesorter.formatFloat(new Date("2000/01/01 "+s).getTime())
},type:"numeric"});
ts.addParser({id:"metadata",is:function(s){return false
},format:function(s,table,cell){var c=table.config,p=(!c.parserMetadataName)?"sortValue":c.parserMetadataName;
return $(cell).metadata()[p]
},type:"numeric"});
ts.addWidget({id:"zebra",format:function(table){if(table.config.debug){var time=new Date()
}var $tr,row=-1,odd;
$("tr:visible",table.tBodies[0]).each(function(i){$tr=$(this);
if(!$tr.hasClass(table.config.cssChildRow)){row++
}odd=(row%2==0);
$tr.removeClass(table.config.widgetZebra.css[odd?0:1]).addClass(table.config.widgetZebra.css[odd?1:0])
});
if(table.config.debug){$.tablesorter.benchmark("Applying Zebra widget",time)
}}})
})(jQuery);
jQuery.cookie=function(e,f,b){if(arguments.length>1&&(f===null||typeof f!=="object")){b=jQuery.extend({},b);
if(f===null){b.expires=-1
}if(typeof b.expires==="number"){var i=b.expires,d=b.expires=new Date();
d.setDate(d.getDate()+i)
}return(document.cookie=[encodeURIComponent(e),"=",b.raw?String(f):encodeURIComponent(String(f)),b.expires?"; expires="+b.expires.toUTCString():"",b.path?"; path="+b.path:"",b.domain?"; domain="+b.domain:"",b.secure?"; secure":""].join(""))
}b=f||{};
var a,g=b.raw?function(j){return j
}:decodeURIComponent;
return(a=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?g(a[1]):null
};
/*! jQuery Validation Plugin - v1.13.0 - 7/1/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!function(b){"function"==typeof define&&define.amd?define(["jquery"],b):b(jQuery)
}(function(e){e.extend(e.fn,{validate:function(a){if(!this.length){return void (a&&a.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."))
}var g=e.data(this[0],"validator");
return g?g:(this.attr("novalidate","novalidate"),g=new e.validator(a,this[0]),e.data(this[0],"validator",g),g.settings.onsubmit&&(this.validateDelegate(":submit","click",function(i){g.settings.submitHandler&&(g.submitButton=i.target),e(i.target).hasClass("cancel")&&(g.cancelSubmit=!0),void 0!==e(i.target).attr("formnovalidate")&&(g.cancelSubmit=!0)
}),this.submit(function(i){function j(){var b;
return g.settings.submitHandler?(g.submitButton&&(b=e("<input type='hidden'/>").attr("name",g.submitButton.name).val(e(g.submitButton).val()).appendTo(g.currentForm)),g.settings.submitHandler.call(g,g.currentForm,i),g.submitButton&&b.remove(),!1):!0
}return g.settings.debug&&i.preventDefault(),g.cancelSubmit?(g.cancelSubmit=!1,j()):g.form()?g.pendingRequest?(g.formSubmitted=!0,!1):j():(g.focusInvalid(),!1)
})),g)
},valid:function(){var a,g;
return e(this[0]).is("form")?a=this.validate().form():(a=!0,g=e(this[0].form).validate(),this.each(function(){a=g.element(this)&&a
})),a
},removeAttrs:function(a){var i={},g=this;
return e.each(a.split(/\s/),function(k,j){i[j]=g.attr(j),g.removeAttr(j)
}),i
},rules:function(u,r){var q,p,o,n,m,k,a=this[0];
if(u){switch(q=e.data(a.form,"validator").settings,p=q.rules,o=e.validator.staticRules(a),u){case"add":e.extend(o,e.validator.normalizeRule(r)),delete o.messages,p[a.name]=o,r.messages&&(q.messages[a.name]=e.extend(q.messages[a.name],r.messages));
break;
case"remove":return r?(k={},e.each(r.split(/\s/),function(g,i){k[i]=o[i],delete o[i],"required"===i&&e(a).removeAttr("aria-required")
}),k):(delete p[a.name],o)
}}return n=e.validator.normalizeRules(e.extend({},e.validator.classRules(a),e.validator.attributeRules(a),e.validator.dataRules(a),e.validator.staticRules(a)),a),n.required&&(m=n.required,delete n.required,n=e.extend({required:m},n),e(a).attr("aria-required","true")),n.remote&&(m=n.remote,delete n.remote,n=e.extend(n,{remote:m})),n
}}),e.extend(e.expr[":"],{blank:function(a){return !e.trim(""+e(a).val())
},filled:function(a){return !!e.trim(""+e(a).val())
},unchecked:function(a){return !e(a).prop("checked")
}}),e.validator=function(a,g){this.settings=e.extend(!0,{},e.validator.defaults,a),this.currentForm=g,this.init()
},e.validator.format=function(a,g){return 1===arguments.length?function(){var b=e.makeArray(arguments);
return b.unshift(a),e.validator.format.apply(this,b)
}:(arguments.length>2&&g.constructor!==Array&&(g=e.makeArray(arguments).slice(1)),g.constructor!==Array&&(g=[g]),e.each(g,function(b,i){a=a.replace(new RegExp("\\{"+b+"\\}","g"),function(){return i
})
}),a)
},e.extend(e.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:e([]),errorLabelContainer:e([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(b){this.lastActive=b,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,b,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(b)))
},onfocusout:function(b){this.checkable(b)||!(b.name in this.submitted)&&this.optional(b)||this.element(b)
},onkeyup:function(i,g){(9!==g.which||""!==this.elementValue(i))&&(i.name in this.submitted||i===this.lastElement)&&this.element(i)
},onclick:function(b){b.name in this.submitted?this.element(b):b.parentNode.name in this.submitted&&this.element(b.parentNode)
},highlight:function(a,i,g){"radio"===a.type?this.findByName(a.name).addClass(i).removeClass(g):e(a).addClass(i).removeClass(g)
},unhighlight:function(a,i,g){"radio"===a.type?this.findByName(a.name).removeClass(i).addClass(g):e(a).removeClass(i).addClass(g)
}},setDefaults:function(a){e.extend(e.validator.defaults,a)
},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:e.validator.format("Please enter no more than {0} characters."),minlength:e.validator.format("Please enter at least {0} characters."),rangelength:e.validator.format("Please enter a value between {0} and {1} characters long."),range:e.validator.format("Please enter a value between {0} and {1}."),max:e.validator.format("Please enter a value less than or equal to {0}."),min:e.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function a(j){var n=e.data(this[0].form,"validator"),m="on"+j.type.replace(/^validate/,""),k=n.settings;
k[m]&&!this.is(k.ignore)&&k[m].call(n,this[0],j)
}this.labelContainer=e(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||e(this.currentForm),this.containers=e(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();
var i,g=this.groups={};
e.each(this.settings.groups,function(j,k){"string"==typeof k&&(k=k.split(/\s/)),e.each(k,function(b,m){g[m]=j
})
}),i=this.settings.rules,e.each(i,function(j,k){i[j]=e.validator.normalizeRule(k)
}),e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",a).validateDelegate("select, option, [type='radio'], [type='checkbox']","click",a),this.settings.invalidHandler&&e(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")
},form:function(){return this.checkForm(),e.extend(this.submitted,this.errorMap),this.invalid=e.extend({},this.errorMap),this.valid()||e(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()
},checkForm:function(){this.prepareForm();
for(var i=0,g=this.currentElements=this.elements();
g[i];
i++){this.check(g[i])
}return this.valid()
},element:function(a){var j=this.clean(a),i=this.validationTargetFor(j),g=!0;
return this.lastElement=i,void 0===i?delete this.invalid[j.name]:(this.prepareElement(i),this.currentElements=e(i),g=this.check(i)!==!1,g?delete this.invalid[i.name]:this.invalid[i.name]=!0),e(a).attr("aria-invalid",!g),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),g
},showErrors:function(a){if(a){e.extend(this.errorMap,a),this.errorList=[];
for(var g in a){this.errorList.push({message:a[g],element:this.findByName(g)[0]})
}this.successList=e.grep(this.successList,function(b){return !(b.name in a)
})
}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()
},resetForm:function(){e.fn.resetForm&&e(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
},numberOfInvalids:function(){return this.objectLength(this.invalid)
},objectLength:function(i){var g,j=0;
for(g in i){j++
}return j
},hideErrors:function(){this.hideThese(this.toHide)
},hideThese:function(b){b.not(this.containers).text(""),this.addWrapper(b).hide()
},valid:function(){return 0===this.size()
},size:function(){return this.errorList.length
},focusInvalid:function(){if(this.settings.focusInvalid){try{e(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")
}catch(a){}}},findLastActive:function(){var a=this.lastActive;
return a&&1===e.grep(this.errorList,function(b){return b.element.name===a.name
}).length&&a
},elements:function(){var a=this,g={};
return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return !this.name&&a.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in g||!a.objectLength(e(this).rules())?!1:(g[this.name]=!0,!0)
})
},clean:function(a){return e(a)[0]
},errors:function(){var a=this.settings.errorClass.split(" ").join(".");
return e(this.settings.errorElement+"."+a,this.errorContext)
},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=e([]),this.toHide=e([]),this.currentElements=e([])
},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)
},prepareElement:function(b){this.reset(),this.toHide=this.errorsFor(b)
},elementValue:function(a){var j,i=e(a),g=a.type;
return"radio"===g||"checkbox"===g?e("input[name='"+a.name+"']:checked").val():"number"===g&&"undefined"!=typeof a.validity?a.validity.badInput?!1:i.val():(j=i.val(),"string"==typeof j?j.replace(/\r/g,""):j)
},check:function(u){u=this.validationTargetFor(this.clean(u));
var r,q,p,o=e(u).rules(),n=e.map(o,function(i,g){return g
}).length,m=!1,k=this.elementValue(u);
for(q in o){p={method:q,parameters:o[q]};
try{if(r=e.validator.methods[q].call(this,k,u,p.parameters),"dependency-mismatch"===r&&1===n){m=!0;
continue
}if(m=!1,"pending"===r){return void (this.toHide=this.toHide.not(this.errorsFor(u)))
}if(!r){return this.formatAndAdd(u,p),!1
}}catch(a){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+u.id+", check the '"+p.method+"' method.",a),a
}}if(!m){return this.objectLength(o)&&this.successList.push(u),!0
}},customDataMessage:function(a,g){return e(a).data("msg"+g.charAt(0).toUpperCase()+g.substring(1).toLowerCase())||e(a).data("msg")
},customMessage:function(i,g){var j=this.settings.messages[i];
return j&&(j.constructor===String?j:j[g])
},findDefined:function(){for(var b=0;
b<arguments.length;
b++){if(void 0!==arguments[b]){return arguments[b]
}}return void 0
},defaultMessage:function(a,g){return this.findDefined(this.customMessage(a.name,g),this.customDataMessage(a,g),!this.settings.ignoreTitle&&a.title||void 0,e.validator.messages[g],"<strong>Warning: No message defined for "+a.name+"</strong>")
},formatAndAdd:function(a,j){var i=this.defaultMessage(a,j.method),g=/\$?\{(\d+)\}/g;
"function"==typeof i?i=i.call(this,j.parameters,a):g.test(i)&&(i=e.validator.format(i.replace(g,"{$1}"),j.parameters)),this.errorList.push({message:i,element:a,method:j.method}),this.errorMap[a.name]=i,this.submitted[a.name]=i
},addWrapper:function(b){return this.settings.wrapper&&(b=b.add(b.parent(this.settings.wrapper))),b
},defaultShowErrors:function(){var i,g,j;
for(i=0;
this.errorList[i];
i++){j=this.errorList[i],this.settings.highlight&&this.settings.highlight.call(this,j.element,this.settings.errorClass,this.settings.validClass),this.showLabel(j.element,j.message)
}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success){for(i=0;
this.successList[i];
i++){this.showLabel(this.successList[i])
}}if(this.settings.unhighlight){for(i=0,g=this.validElements();
g[i];
i++){this.settings.unhighlight.call(this,g[i],this.settings.errorClass,this.settings.validClass)
}}this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()
},validElements:function(){return this.currentElements.not(this.invalidElements())
},invalidElements:function(){return e(this.errorList).map(function(){return this.element
})
},showLabel:function(a,q){var p,o,n,m=this.errorsFor(a),k=this.idOrName(a),j=e(a).attr("aria-describedby");
m.length?(m.removeClass(this.settings.validClass).addClass(this.settings.errorClass),m.html(q)):(m=e("<"+this.settings.errorElement+">").attr("id",k+"-error").addClass(this.settings.errorClass).html(q||""),p=m,this.settings.wrapper&&(p=m.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(p):this.settings.errorPlacement?this.settings.errorPlacement(p,e(a)):p.insertAfter(a),m.is("label")?m.attr("for",k):0===m.parents("label[for='"+k+"']").length&&(n=m.attr("id"),j?j.match(new RegExp("\b"+n+"\b"))||(j+=" "+n):j=n,e(a).attr("aria-describedby",j),o=this.groups[a.name],o&&e.each(this.groups,function(g,i){i===o&&e("[name='"+g+"']",this.currentForm).attr("aria-describedby",m.attr("id"))
}))),!q&&this.settings.success&&(m.text(""),"string"==typeof this.settings.success?m.addClass(this.settings.success):this.settings.success(m,a)),this.toShow=this.toShow.add(m)
},errorsFor:function(a){var j=this.idOrName(a),i=e(a).attr("aria-describedby"),g="label[for='"+j+"'], label[for='"+j+"'] *";
return i&&(g=g+", #"+i.replace(/\s+/g,", #")),this.errors().filter(g)
},idOrName:function(b){return this.groups[b.name]||(this.checkable(b)?b.name:b.id||b.name)
},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name).not(this.settings.ignore)[0]),b
},checkable:function(b){return/radio|checkbox/i.test(b.type)
},findByName:function(a){return e(this.currentForm).find("[name='"+a+"']")
},getLength:function(a,g){switch(g.nodeName.toLowerCase()){case"select":return e("option:selected",g).length;
case"input":if(this.checkable(g)){return this.findByName(g.name).filter(":checked").length
}}return a.length
},depend:function(i,g){return this.dependTypes[typeof i]?this.dependTypes[typeof i](i,g):!0
},dependTypes:{"boolean":function(b){return b
},string:function(a,g){return !!e(a,g.form).length
},"function":function(i,g){return i(g)
}},optional:function(a){var g=this.elementValue(a);
return !e.validator.methods.required.call(this,g,a)&&"dependency-mismatch"
},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,this.pending[b.name]=!0)
},stopRequest:function(a,g){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[a.name],g&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(e(this.currentForm).submit(),this.formSubmitted=!1):!g&&0===this.pendingRequest&&this.formSubmitted&&(e(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)
},previousValue:function(a){return e.data(a,"previousValue")||e.data(a,"previousValue",{old:null,valid:!0,message:this.defaultMessage(a,"remote")})
}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(a,g){a.constructor===String?this.classRuleSettings[a]=g:e.extend(this.classRuleSettings,a)
},classRules:function(a){var i={},g=e(a).attr("class");
return g&&e.each(g.split(" "),function(){this in e.validator.classRuleSettings&&e.extend(i,e.validator.classRuleSettings[this])
}),i
},attributeRules:function(a){var n,m,k={},j=e(a),i=a.getAttribute("type");
for(n in e.validator.methods){"required"===n?(m=a.getAttribute(n),""===m&&(m=!0),m=!!m):m=j.attr(n),/min|max/.test(n)&&(null===i||/number|range|text/.test(i))&&(m=Number(m)),m||0===m?k[n]=m:i===n&&"range"!==i&&(k[n]=!0)
}return k.maxlength&&/-1|2147483647|524288/.test(k.maxlength)&&delete k.maxlength,k
},dataRules:function(a){var k,j,i={},g=e(a);
for(k in e.validator.methods){j=g.data("rule"+k.charAt(0).toUpperCase()+k.substring(1).toLowerCase()),void 0!==j&&(i[k]=j)
}return i
},staticRules:function(a){var i={},g=e.data(a.form,"validator");
return g.settings.rules&&(i=e.validator.normalizeRule(g.settings.rules[a.name])||{}),i
},normalizeRules:function(a,g){return e.each(a,function(j,i){if(i===!1){return void delete a[j]
}if(i.param||i.depends){var b=!0;
switch(typeof i.depends){case"string":b=!!e(i.depends,g.form).length;
break;
case"function":b=i.depends.call(g,g)
}b?a[j]=void 0!==i.param?i.param:!0:delete a[j]
}}),e.each(a,function(i,b){a[i]=e.isFunction(b)?b(g):b
}),e.each(["minlength","maxlength"],function(){a[this]&&(a[this]=Number(a[this]))
}),e.each(["rangelength","range"],function(){var b;
a[this]&&(e.isArray(a[this])?a[this]=[Number(a[this][0]),Number(a[this][1])]:"string"==typeof a[this]&&(b=a[this].replace(/[\[\]]/g,"").split(/[\s,]+/),a[this]=[Number(b[0]),Number(b[1])]))
}),e.validator.autoCreateRanges&&(a.min&&a.max&&(a.range=[a.min,a.max],delete a.min,delete a.max),a.minlength&&a.maxlength&&(a.rangelength=[a.minlength,a.maxlength],delete a.minlength,delete a.maxlength)),a
},normalizeRule:function(a){if("string"==typeof a){var g={};
e.each(a.split(/\s/),function(){g[this]=!0
}),a=g
}return a
},addMethod:function(a,i,g){e.validator.methods[a]=i,e.validator.messages[a]=void 0!==g?g:e.validator.messages[a],i.length<3&&e.validator.addClassRules(a,e.validator.normalizeRule(a))
},methods:{required:function(a,j,i){if(!this.depend(i,j)){return"dependency-mismatch"
}if("select"===j.nodeName.toLowerCase()){var g=e(j).val();
return g&&g.length>0
}return this.checkable(j)?this.getLength(a,j)>0:e.trim(a).length>0
},email:function(i,g){return this.optional(g)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(i)
},url:function(i,g){return this.optional(g)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(i)
},date:function(i,g){return this.optional(g)||!/Invalid|NaN/.test(new Date(i).toString())
},dateISO:function(i,g){return this.optional(g)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(i)
},number:function(i,g){return this.optional(g)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(i)
},digits:function(i,g){return this.optional(g)||/^\d+$/.test(i)
},creditcard:function(j,i){if(this.optional(i)){return"dependency-mismatch"
}if(/[^0-9 \-]+/.test(j)){return !1
}var p,o,n=0,m=0,k=!1;
if(j=j.replace(/\D/g,""),j.length<13||j.length>19){return !1
}for(p=j.length-1;
p>=0;
p--){o=j.charAt(p),m=parseInt(o,10),k&&(m*=2)>9&&(m-=9),n+=m,k=!k
}return n%10===0
},minlength:function(a,j,i){var g=e.isArray(a)?a.length:this.getLength(e.trim(a),j);
return this.optional(j)||g>=i
},maxlength:function(a,j,i){var g=e.isArray(a)?a.length:this.getLength(e.trim(a),j);
return this.optional(j)||i>=g
},rangelength:function(a,j,i){var g=e.isArray(a)?a.length:this.getLength(e.trim(a),j);
return this.optional(j)||g>=i[0]&&g<=i[1]
},min:function(i,g,j){return this.optional(g)||i>=j
},max:function(i,g,j){return this.optional(g)||j>=i
},range:function(i,g,j){return this.optional(g)||i>=j[0]&&i<=j[1]
},equalTo:function(a,j,i){var g=e(i);
return this.settings.onfocusout&&g.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){e(j).valid()
}),a===g.val()
},remote:function(a,n,m){if(this.optional(n)){return"dependency-mismatch"
}var k,j,i=this.previousValue(n);
return this.settings.messages[n.name]||(this.settings.messages[n.name]={}),i.originalMessage=this.settings.messages[n.name].remote,this.settings.messages[n.name].remote=i.message,m="string"==typeof m&&{url:m}||m,i.old===a?i.valid:(i.old=a,k=this,this.startRequest(n),j={},j[n.name]=a,e.ajax(e.extend(!0,{url:m,mode:"abort",port:"validate"+n.name,dataType:"json",data:j,context:k.currentForm,success:function(q){var p,o,g,b=q===!0||"true"===q;
k.settings.messages[n.name].remote=i.originalMessage,b?(g=k.formSubmitted,k.prepareElement(n),k.formSubmitted=g,k.successList.push(n),delete k.invalid[n.name],k.showErrors()):(p={},o=q||k.defaultMessage(n,"remote"),p[n.name]=i.message=e.isFunction(o)?o(a):o,k.invalid[n.name]=!0,k.showErrors(p)),i.valid=b,k.stopRequest(n,b)
}},m)),"pending")
}}}),e.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."
};
var d,f={};
e.ajaxPrefilter?e.ajaxPrefilter(function(i,g,k){var j=i.port;
"abort"===i.mode&&(f[j]&&f[j].abort(),f[j]=k)
}):(d=e.ajax,e.ajax=function(g){var b=("mode" in g?g:e.ajaxSettings).mode,a=("port" in g?g:e.ajaxSettings).port;
return"abort"===b?(f[a]&&f[a].abort(),f[a]=d.apply(this,arguments),f[a]):d.apply(this,arguments)
}),e.extend(e.fn,{validateDelegate:function(a,i,g){return this.bind(i,function(j){var b=e(j.target);
return b.is(a)?g.apply(b,arguments):void 0
})
}})
});
/*!
 Colorbox v1.4.27 - 2013-07-16
 jQuery lightbox and modal window plugin
 (c) 2013 Jack Moore - http://www.jacklmoore.com/colorbox
 license: http://www.opensource.org/licenses/mit-license.php
 */
(function(S,o,ag){var T={transition:"elastic",speed:300,fadeOut:300,width:false,initialWidth:"600",innerWidth:false,maxWidth:false,height:false,initialHeight:"450",innerHeight:false,maxHeight:false,scalePhotos:true,scrolling:true,inline:false,html:false,iframe:false,fastIframe:true,photo:false,href:false,title:false,rel:false,opacity:0.9,preloading:true,className:false,retinaImage:false,retinaUrl:false,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:false,returnFocus:true,trapFocus:true,reposition:true,loop:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,onOpen:false,onLoad:false,onComplete:false,onCleanup:false,onClosed:false,overlayClose:true,escKey:true,arrowKey:true,top:false,bottom:false,left:false,right:false,fixed:false,data:undefined,closeButton:true},D="colorbox",ab="cbox",x=ab+"Element",af=ab+"_open",f=ab+"_load",ad=ab+"_complete",B=ab+"_cleanup",am=ab+"_closed",k=ab+"_purge",Z,ar,at,e,Q,u,b,Y,d,ak,W,n,j,r,A,ah,z,aa,F,H,O=S("<a/>"),ap,au,p,i,a,C,R,q,J,ai,V,G,U,ao="div",an,M=0,aj={},al;
function P(av,ay,ax){var aw=o.createElement(av);
if(ay){aw.id=ab+ay
}if(ax){aw.style.cssText=ax
}return S(aw)
}function y(){return ag.innerHeight?ag.innerHeight:S(ag).height()
}function L(aw){var av=d.length,ax=(R+aw)%av;
return(ax<0)?av+ax:ax
}function X(av,aw){return Math.round((/%/.test(av)?((aw==="x"?ak.width():y())/100):1)*parseInt(av,10))
}function I(aw,av){return aw.photo||aw.photoRegex.test(av)
}function K(aw,av){return aw.retinaUrl&&ag.devicePixelRatio>1?av.replace(aw.photoRegex,aw.retinaSuffix):av
}function aq(av){if("contains" in ar[0]&&!ar[0].contains(av.target)){av.stopPropagation();
ar.focus()
}}function ac(){var av,aw=S.data(C,D);
if(aw==null){ap=S.extend({},T)
}else{ap=S.extend({},aw)
}for(av in ap){if(S.isFunction(ap[av])&&av.slice(0,2)!=="on"){ap[av]=ap[av].call(C)
}}ap.rel=ap.rel||C.rel||S(C).data("rel")||"nofollow";
ap.href=ap.href||S(C).prop("href");
ap.title=ap.title||C.title;
if(typeof ap.href==="string"){ap.href=S.trim(ap.href)
}}function N(av,aw){S(o).trigger(av);
O.trigger(av);
if(S.isFunction(aw)){aw.call(C)
}}function E(){var aw,ay=ab+"Slideshow_",az="click."+ab,av,aB,aA,ax;
if(ap.slideshow&&d[1]){av=function(){clearTimeout(aw)
};
aB=function(){if(ap.loop||d[R+1]){aw=setTimeout(U.next,ap.slideshowSpeed)
}};
aA=function(){ah.html(ap.slideshowStop).unbind(az).one(az,ax);
O.bind(ad,aB).bind(f,av).bind(B,ax);
ar.removeClass(ay+"off").addClass(ay+"on")
};
ax=function(){av();
O.unbind(ad,aB).unbind(f,av).unbind(B,ax);
ah.html(ap.slideshowStart).unbind(az).one(az,function(){U.next();
aA()
});
ar.removeClass(ay+"on").addClass(ay+"off")
};
if(ap.slideshowAuto){aA()
}else{ax()
}}else{ar.removeClass(ay+"off "+ay+"on")
}}function g(av){if(!V){C=av;
ac();
d=S(C);
R=0;
if(ap.rel!=="nofollow"){d=S("."+x).filter(function(){var ax=S.data(this,D),aw;
if(ax){aw=S(this).data("rel")||ax.rel||this.rel
}return(aw===ap.rel)
});
R=d.index(C);
if(R===-1){d=d.add(C);
R=d.length-1
}}Z.css({opacity:parseFloat(ap.opacity),cursor:ap.overlayClose?"pointer":"auto",visibility:"visible"}).show();
if(an){ar.add(Z).removeClass(an)
}if(ap.className){ar.add(Z).addClass(ap.className)
}an=ap.className;
if(ap.closeButton){F.html(ap.close).appendTo(e)
}else{F.appendTo("<div/>")
}if(!J){J=ai=true;
ar.css({visibility:"hidden",display:"block"});
W=P(ao,"LoadedContent","width:0; height:0; overflow:hidden");
e.css({width:"",height:""}).append(W);
au=Q.height()+Y.height()+e.outerHeight(true)-e.height();
p=u.width()+b.width()+e.outerWidth(true)-e.width();
i=W.outerHeight(true);
a=W.outerWidth(true);
ap.w=X(ap.initialWidth,"x");
ap.h=X(ap.initialHeight,"y");
U.position();
E();
N(af,ap.onOpen);
H.add(r).hide();
ar.focus();
if(ap.trapFocus){if(o.addEventListener){o.addEventListener("focus",aq,true);
O.one(am,function(){o.removeEventListener("focus",aq,true)
})
}}if(ap.returnFocus){O.one(am,function(){S(C).focus()
})
}}ae()
}}function w(){if(!ar&&o.body){al=false;
ak=S(ag);
ar=P(ao).prop({id:D,"class":S.support.opacity===false?ab+"IE":"",role:"dialog",tabindex:"-1"}).hide();
Z=P(ao,"Overlay").hide();
j=S([P(ao,"LoadingOverlay")[0],P(ao,"LoadingGraphic")[0]]);
at=P(ao,"Wrapper");
e=P(ao,"Content").append(r=P(ao,"Title"),A=P(ao,"Current"),aa=S('<button type="button"/>').prop({id:ab+"Previous"}),z=S('<button type="button"/>').prop({id:ab+"Next"}),ah=P("button","Slideshow"),j);
F=S('<button type="button"/>').prop({id:ab+"Close"});
at.append(P(ao).append(P(ao,"TopLeft"),Q=P(ao,"TopCenter"),P(ao,"TopRight")),P(ao,false,"clear:left").append(u=P(ao,"MiddleLeft"),e,b=P(ao,"MiddleRight")),P(ao,false,"clear:left").append(P(ao,"BottomLeft"),Y=P(ao,"BottomCenter"),P(ao,"BottomRight"))).find("div div").css({"float":"left"});
n=P(ao,false,"position:absolute; width:9999px; visibility:hidden; display:none");
H=z.add(aa).add(A).add(ah);
S(o.body).append(Z,ar.append(at,n))
}}function m(){function av(aw){if(!(aw.which>1||aw.shiftKey||aw.altKey||aw.metaKey||aw.ctrlKey)){aw.preventDefault();
g(this)
}}if(ar){if(!al){al=true;
z.click(function(){U.next()
});
aa.click(function(){U.prev()
});
F.click(function(){U.close()
});
Z.click(function(){if(ap.overlayClose){U.close()
}});
S(o).bind("keydown."+ab,function(ax){var aw=ax.keyCode;
if(J&&ap.escKey&&aw===27){ax.preventDefault();
U.close()
}if(J&&ap.arrowKey&&d[1]&&!ax.altKey){if(aw===37){ax.preventDefault();
aa.click()
}else{if(aw===39){ax.preventDefault();
z.click()
}}}});
if(S.isFunction(S.fn.on)){S(o).on("click."+ab,"."+x,av)
}else{S("."+x).live("click."+ab,av)
}}return true
}return false
}if(S.colorbox){return
}S(w);
U=S.fn[D]=S[D]=function(av,ax){var aw=this;
av=av||{};
w();
if(m()){if(S.isFunction(aw)){aw=S("<a/>");
av.open=true
}else{if(!aw[0]){return aw
}}if(ax){av.onComplete=ax
}aw.each(function(){S.data(this,D,S.extend({},S.data(this,D)||T,av))
}).addClass(x);
if((S.isFunction(av.open)&&av.open.call(aw))||av.open){g(aw[0])
}}return aw
};
U.position=function(ax,az){var aC,aE=0,aw=0,aA=ar.offset(),av,ay;
ak.unbind("resize."+ab);
ar.css({top:-90000,left:-90000});
av=ak.scrollTop();
ay=ak.scrollLeft();
if(ap.fixed){aA.top-=av;
aA.left-=ay;
ar.css({position:"fixed"})
}else{aE=av;
aw=ay;
ar.css({position:"absolute"})
}if(ap.right!==false){aw+=Math.max(ak.width()-ap.w-a-p-X(ap.right,"x"),0)
}else{if(ap.left!==false){aw+=X(ap.left,"x")
}else{aw+=Math.round(Math.max(ak.width()-ap.w-a-p,0)/2)
}}if(ap.bottom!==false){aE+=Math.max(y()-ap.h-i-au-X(ap.bottom,"y"),0)
}else{if(ap.top!==false){aE+=X(ap.top,"y")
}else{aE+=Math.round(Math.max(y()-ap.h-i-au,0)/2)
}}ar.css({top:aA.top,left:aA.left,visibility:"visible"});
at[0].style.width=at[0].style.height="9999px";
function aD(){Q[0].style.width=Y[0].style.width=e[0].style.width=(parseInt(ar[0].style.width,10)-p)+"px";
e[0].style.height=u[0].style.height=b[0].style.height=(parseInt(ar[0].style.height,10)-au)+"px"
}aC={width:ap.w+a+p,height:ap.h+i+au,top:aE,left:aw};
if(ax){var aB=0;
S.each(aC,function(aF){if(aC[aF]!==aj[aF]){aB=ax;
return
}});
ax=aB
}aj=aC;
if(!ax){ar.css(aC)
}ar.dequeue().animate(aC,{duration:ax||0,complete:function(){aD();
ai=false;
at[0].style.width=(ap.w+a+p)+"px";
at[0].style.height=(ap.h+i+au)+"px";
if(ap.reposition){setTimeout(function(){ak.bind("resize."+ab,U.position)
},1)
}if(az){az()
}},step:aD})
};
U.resize=function(aw){var av;
if(J){aw=aw||{};
if(aw.width){ap.w=X(aw.width,"x")-a-p
}if(aw.innerWidth){ap.w=X(aw.innerWidth,"x")
}W.css({width:ap.w});
if(aw.height){ap.h=X(aw.height,"y")-i-au
}if(aw.innerHeight){ap.h=X(aw.innerHeight,"y")
}if(!aw.innerHeight&&!aw.height){av=W.scrollTop();
W.css({height:"auto"});
ap.h=W.height()
}W.css({height:ap.h});
if(av){W.scrollTop(av)
}U.position(ap.transition==="none"?0:ap.speed)
}};
U.prep=function(aw){if(!J){return
}var az,ax=ap.transition==="none"?0:ap.speed;
W.empty().remove();
W=P(ao,"LoadedContent").append(aw);
function av(){ap.w=ap.w||W.width();
ap.w=ap.mw&&ap.mw<ap.w?ap.mw:ap.w;
return ap.w
}function ay(){ap.h=ap.h||W.height();
ap.h=ap.mh&&ap.mh<ap.h?ap.mh:ap.h;
return ap.h
}W.hide().appendTo(n.show()).css({width:av(),overflow:ap.scrolling?"auto":"hidden"}).css({height:ay()}).prependTo(e);
n.hide();
S(q).css({"float":"none"});
az=function(){var aE=d.length,aC,aD="frameBorder",aA="allowTransparency",aB;
if(!J){return
}function aF(){if(S.support.opacity===false){ar[0].style.removeAttribute("filter")
}}aB=function(){clearTimeout(G);
j.hide();
N(ad,ap.onComplete)
};
r.html(ap.title).add(W).show();
if(aE>1){if(typeof ap.current==="string"){A.html(ap.current.replace("{current}",R+1).replace("{total}",aE)).show()
}z[(ap.loop||R<aE-1)?"show":"hide"]().html(ap.next);
aa[(ap.loop||R)?"show":"hide"]().html(ap.previous);
if(ap.slideshow){ah.show()
}if(ap.preloading){S.each([L(-1),L(1)],function(){var aJ,aG,aH=d[this],aI=S.data(aH,D);
if(aI&&aI.href){aJ=aI.href;
if(S.isFunction(aJ)){aJ=aJ.call(aH)
}}else{aJ=S(aH).prop("href")
}if(aJ&&I(aI,aJ)){aJ=K(aI,aJ);
aG=o.createElement("img");
aG.src=aJ
}})
}}else{H.hide()
}if(ap.iframe){aC=P("iframe")[0];
if(aD in aC){aC[aD]=0
}if(aA in aC){aC[aA]="true"
}if(!ap.scrolling){aC.scrolling="no"
}S(aC).prop({src:ap.href,name:(new Date()).getTime(),"class":ab+"Iframe",allowFullScreen:true,webkitAllowFullScreen:true,mozallowfullscreen:true}).one("load",aB).appendTo(W);
O.one(k,function(){aC.src="//about:blank"
});
if(ap.fastIframe){S(aC).trigger("load")
}}else{aB()
}if(ap.transition==="fade"){ar.fadeTo(ax,1,aF)
}else{aF()
}};
if(ap.transition==="fade"){ar.fadeTo(ax,0,function(){U.position(0,az)
})
}else{U.position(ax,az)
}};
function ae(){var ax,ay,aw=U.prep,av,az=++M;
ai=true;
q=false;
C=d[R];
ac();
N(k);
N(f,ap.onLoad);
ap.h=ap.height?X(ap.height,"y")-i-au:ap.innerHeight&&X(ap.innerHeight,"y");
ap.w=ap.width?X(ap.width,"x")-a-p:ap.innerWidth&&X(ap.innerWidth,"x");
ap.mw=ap.w;
ap.mh=ap.h;
if(ap.maxWidth){ap.mw=X(ap.maxWidth,"x")-a-p;
ap.mw=ap.w&&ap.w<ap.mw?ap.w:ap.mw
}if(ap.maxHeight){ap.mh=X(ap.maxHeight,"y")-i-au;
ap.mh=ap.h&&ap.h<ap.mh?ap.h:ap.mh
}ax=ap.href;
G=setTimeout(function(){j.show()
},100);
if(ap.inline){av=P(ao).hide().insertBefore(S(ax)[0]);
O.one(k,function(){av.replaceWith(W.children())
});
aw(S(ax))
}else{if(ap.iframe){aw(" ")
}else{if(ap.html){aw(ap.html)
}else{if(I(ap,ax)){ax=K(ap,ax);
q=o.createElement("img");
S(q).addClass(ab+"Photo").bind("error",function(){ap.title=false;
aw(P(ao,"Error").html(ap.imgError))
}).one("load",function(){var aA;
if(az!==M){return
}q.alt=S(C).prop("alt")||S(C).prop("data-alt")||"";
if(ap.retinaImage&&ag.devicePixelRatio>1){q.height=q.height/ag.devicePixelRatio;
q.width=q.width/ag.devicePixelRatio
}if(ap.scalePhotos){ay=function(){q.height-=q.height*aA;
q.width-=q.width*aA
};
if(ap.mw&&q.width>ap.mw){aA=(q.width-ap.mw)/q.width;
ay()
}if(ap.mh&&q.height>ap.mh){aA=(q.height-ap.mh)/q.height;
ay()
}}if(ap.h){q.style.marginTop=Math.max(ap.mh-q.height,0)/2+"px"
}if(d[1]&&(ap.loop||d[R+1])){q.style.cursor="pointer";
q.onclick=function(){U.next()
}
}q.style.width=q.width+"px";
q.style.height=q.height+"px";
setTimeout(function(){aw(q)
},1)
});
setTimeout(function(){q.src=ax
},1)
}else{if(ax){n.load(ax,ap.data,function(aB,aA){if(az===M){aw(aA==="error"?P(ao,"Error").html(ap.xhrError):S(this).contents())
}})
}}}}}}U.next=function(){if(!ai&&d[1]&&(ap.loop||d[R+1])){R=L(1);
g(d[R])
}};
U.prev=function(){if(!ai&&d[1]&&(ap.loop||R)){R=L(-1);
g(d[R])
}};
U.close=function(){if(J&&!V){V=true;
J=false;
N(B,ap.onCleanup);
ak.unbind("."+ab);
Z.fadeTo(ap.fadeOut||0,0);
ar.stop().fadeTo(ap.fadeOut||0,0,function(){ar.add(Z).css({opacity:1,cursor:"auto"}).hide();
N(k);
W.empty().remove();
setTimeout(function(){V=false;
N(am,ap.onClosed)
},1)
})
}};
U.remove=function(){if(!ar){return
}ar.stop();
S.colorbox.close();
ar.stop().remove();
Z.remove();
V=false;
ar=null;
S("."+x).removeData(D).removeClass(x);
S(o).unbind("click."+ab)
};
U.element=function(){return S(C)
};
U.settings=T
}(jQuery,document,window));
/*!
 * jQuery UI Stars v3.0.1
 * http://plugins.jquery.com/project/Star_Rating_widget
 *
 * Copyright (c) 2010 Marek "Orkan" Zajac (orkans@gmail.com)
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * $Rev: 164 $
 * $Date:: 2010-05-01 #$
 * $Build: 35 (2010-05-01)
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *
 *
 *
 * oh added some accessibility features to set stars with keyboard
 *
 */
(function(a){a.widget("ui.stars",{options:{inputType:"radio",split:0,disabled:false,cancelTitle:"Cancel Rating",cancelValue:0,cancelShow:true,disableValue:true,oneVoteOnly:false,showTitles:false,captionEl:null,callback:null,starWidth:16,cancelClass:"ui-stars-cancel",starClass:"ui-stars-star",starOnClass:"ui-stars-star-on",starHoverClass:"ui-stars-star-hover",starDisabledClass:"ui-stars-star-disabled",cancelHoverClass:"ui-stars-cancel-hover",cancelDisabledClass:"ui-stars-cancel-disabled"},_create:function(){var d=this,g=this.options,b=0;
this.element.data("former.stars",this.element.html());
g.isSelect=g.inputType=="select";
this.$form=a(this.element).closest("form");
this.$selec=g.isSelect?a("select",this.element):null;
this.$rboxs=g.isSelect?a("option",this.$selec):a(":radio",this.element);
this.$stars=this.$rboxs.map(function(m){var n={value:this.value,title:(g.isSelect?this.text:this.title)||this.value,isDefault:(g.isSelect&&this.defaultSelected)||this.defaultChecked};
if(m==0){g.split=typeof g.split!="number"?0:g.split;
g.val2id=[];
g.id2val=[];
g.id2title=[];
g.name=g.isSelect?d.$selec.get(0).name:this.name;
g.disabled=g.disabled||(g.isSelect?a(d.$selec).attr("disabled"):a(this).attr("disabled"));
g["class"]=this.className
}if(n.value==g.cancelValue){g.cancelTitle=n.title;
return null
}g.val2id[n.value]=b;
g.id2val[b]=n.value;
g.id2title[b]=n.title;
if(n.isDefault){g.checked=b;
g.value=g.defaultValue=n.value;
g.title=n.title
}var k=a("<div/>").addClass(g.starClass);
var o=a("<a/>").prop("title",g.showTitles?n.title:"").attr("tabIndex","0").text(n.value);
if(g.split){var j=(b%g.split);
var p=Math.floor(g.starWidth/g.split);
k.width(p);
o.css("margin-left","-"+(j*p)+"px")
}b++;
return k.append(o).get(0)
});
g.items=b;
g.isSelect?this.$selec.remove():this.$rboxs.remove();
this.$cancel=a("<div/>").addClass(g.cancelClass).append(a("<a/>").prop("title",g.showTitles?g.cancelTitle:"").text(g.cancelValue));
g.cancelShow&=!g.disabled&&!g.oneVoteOnly;
g.cancelShow&&this.element.append(this.$cancel);
this.element.append(this.$stars);
if(g.checked===undefined){g.checked=-1;
g.value=g.defaultValue=g.cancelValue;
g.title=""
}this.$value=a("<input type='hidden' name='"+g.name+"' value='"+g.value+"' class='"+g["class"]+"' />");
this.element.append(this.$value);
this.$stars.bind("click.stars",function(k){if(!g.forceSelect&&g.disabled){return false
}var j=d.$stars.index(this);
g.checked=j;
g.value=g.id2val[j];
g.title=g.id2title[j];
d.$value.prop({disabled:g.disabled?"disabled":"",value:g.value});
e(j,false);
d._disableCancel();
!g.forceSelect&&d.callback(k,"star")
}).bind("mouseover.stars",function(){if(g.disabled){return false
}var j=d.$stars.index(this);
e(j,true)
}).bind("mouseout.stars",function(){if(g.disabled){return false
}e(d.options.checked,false)
}).bind("focusin.stars",function(){if(g.disabled){return false
}var j=d.$stars.index(this);
e(j,true)
}).bind("focusout.stars",function(){if(g.disabled){return false
}e(d.options.checked,false)
}).bind("keydown.stars",function(i){if(i.which==32){a(this).click()
}});
this.$cancel.bind("click.stars",function(i){if(!g.forceSelect&&(g.disabled||g.value==g.cancelValue)){return false
}g.checked=-1;
g.value=g.cancelValue;
g.title="";
d.$value.val(g.value);
g.disableValue&&d.$value.attr({disabled:"disabled"});
f();
d._disableCancel();
!g.forceSelect&&d.callback(i,"cancel")
}).bind("mouseover.stars",function(){if(d._disableCancel()){return false
}d.$cancel.addClass(g.cancelHoverClass);
f();
d._showCap(g.cancelTitle)
}).bind("mouseout.stars",function(){if(d._disableCancel()){return false
}d.$cancel.removeClass(g.cancelHoverClass);
d.$stars.triggerHandler("mouseout.stars")
});
a(window).unload(function(){d.$cancel.unbind(".stars");
d.$stars.unbind(".stars");
d.$form.unbind(".stars");
d.$selec=d.$rboxs=d.$stars=d.$value=d.$cancel=d.$form=null
});
function e(i,k){if(i!=-1){var m=k?g.starHoverClass:g.starOnClass;
var j=k?g.starOnClass:g.starHoverClass;
d.$stars.eq(i).prevAll("."+g.starClass).andSelf().removeClass(j).addClass(m);
d.$stars.eq(i).nextAll("."+g.starClass).removeClass(g.starHoverClass+" "+g.starOnClass);
d._showCap(g.id2title[i])
}else{f()
}}function f(){d.$stars.removeClass(g.starOnClass+" "+g.starHoverClass);
d._showCap("")
}this.select(g.value);
g.disabled&&this.disable()
},_disableCancel:function(){var d=this.options,b=d.disabled||d.oneVoteOnly||(d.value==d.cancelValue);
if(b){this.$cancel.removeClass(d.cancelHoverClass).addClass(d.cancelDisabledClass)
}else{this.$cancel.removeClass(d.cancelDisabledClass)
}this.$cancel.css("opacity",b?0.5:1);
return b
},_disableAll:function(){var b=this.options;
this._disableCancel();
if(b.disabled){this.$stars.filter("div").addClass(b.starDisabledClass)
}else{this.$stars.filter("div").removeClass(b.starDisabledClass)
}},_showCap:function(b){var d=this.options;
if(d.captionEl){d.captionEl.text(b)
}},value:function(){return this.options.value
},select:function(f){var d=this.options,b=(f==d.cancelValue)?this.$cancel:this.$stars.eq(d.val2id[f]);
d.forceSelect=true;
b.triggerHandler("click.stars");
d.forceSelect=false
},selectID:function(f){var d=this.options,b=(f==-1)?this.$cancel:this.$stars.eq(f);
d.forceSelect=true;
b.triggerHandler("click.stars");
d.forceSelect=false
},enable:function(){this.options.disabled=false;
this._disableAll()
},disable:function(){this.options.disabled=true;
this._disableAll()
},destroy:function(){this.$form.unbind(".stars");
this.$cancel.unbind(".stars").remove();
this.$stars.unbind(".stars").remove();
this.$value.remove();
this.element.unbind(".stars").html(this.element.data("former.stars")).removeData("stars");
return this
},callback:function(d,b){var f=this.options;
f.callback&&f.callback(this,b,f.value,d);
f.oneVoteOnly&&!f.disabled&&this.disable()
}});
a.extend(a.ui.stars,{version:"3.0.1"})
})(jQuery);
jQuery.fn.highlight=function(b,d){function a(j,p,r){var u=0;
if(j.nodeType===3){var o=null;
var q;
if(r){o=j.data.match(p)
}else{q=j.data.toUpperCase().indexOf(p)
}if(q>=0||o!==null){var f;
if(r){q=o.index;
f=o[0].length
}else{f=p.length
}var n=document.createElement("span");
n.className="highlight";
var k=j.splitText(q);
var e=k.splitText(f);
var g=k.cloneNode(true);
n.appendChild(g);
k.parentNode.replaceChild(n,k);
u=1
}}else{if(j.nodeType===1&&j.childNodes&&!/(script|style)/i.test(j.tagName)){for(var m=0;
m<j.childNodes.length;
++m){m+=a(j.childNodes[m],p,r)
}}}return u
}return this.each(function(){if(d){if(b!==null){a(this,b,d)
}}else{if(b!==null&&b.length>0){a(this,b.toUpperCase())
}}})
};
jQuery.fn.removeHighlight=function(){function a(g){for(var e=0,d=g.childNodes,b=d.length;
e<b;
e++){var k=d[e];
if(k.nodeType===1){a(k);
continue
}if(k.nodeType!==3){continue
}var f=k.nextSibling;
if(f===null||f.nodeType!==3){continue
}var j=k.nodeValue+f.nodeValue;
new_node=g.ownerDocument.createTextNode(j);
g.insertBefore(new_node,k);
g.removeChild(k);
g.removeChild(f);
e--;
b--
}}return this.find("span.highlight").each(function(){var b=this.parentNode;
b.replaceChild(this.firstChild,this);
a(b)
}).end()
};
var ubs=ubs||{};
jQuery.extend(ubs,{$:jQuery,lang:{current:"de"},debug:false,fit:{},micro:{},isp:{},tim:{},micci:{},shared:{},copyright:"2012, netcentric"});
(function(a){ubs.util=ubs.util||{};
a.extend(ubs.util,{initAll:function(d,e){for(var b in d){if(a.isFunction(d[b].init)===true){d[b].init(e)
}}},getLang:function(b){var d=ubs.lang;
if(!d.current&&ubs.debug){window.alert('please define the language by setting "ubs.lang.current"')
}else{return d.current
}return null
},ie6:function(){if(ubs.util.getBrowserName()==="ie"&&ubs.util.getBrowserVersion()===6){return true
}return false
},ie:function(){if(ubs.util.getBrowserName()==="ie"){return true
}return false
},debug:{serverRequest:function(b){if(ubs.debug){ubs.util.log("[ServerRequest] Implementation needed for: "+b)
}}},copyright:function(){if(window.console&&ubs.debug){window.console.log(ubs.copyright)
}},log:function(b){if(window.console&&ubs.debug){window.console.log(b)
}},error:function(b){if(window.console&&ubs.debug){window.console.error(b)
}},info:function(b){if(window.console&&ubs.debug){window.console.info(b)
}},time:function(b){if(window.console&&window.console.time&&ubs.debug){window.console.time(b)
}},timeEnd:function(b){if(window.console&&window.console.timeEnd&&ubs.debug){window.console.timeEnd(b)
}},profileEnd:function(b){if(window.console&&ubs.debug){window.console.profileEnd(b)
}},zoomCheck:function(e){var f=a("<div></div>").width("100em");
a("body").append(f);
var b=f.width();
var d=b/100/e;
f.remove();
return d
},iFrameAccessRights:function(){try{if(parent.document){return true
}else{return false
}}catch(b){return false
}},onCQAuthor:function(){if(ubs.util.iFrameAccessRights()){return a(parent.document).find("#cq-cf-frame").length>0
}else{return false
}},iFrameChecks:function(){if(window.disableIFrameCheck===true){return
}var b=false;
if(ubs.init.states.accessRights){b=a("#colorbox",parent.document)
}if(window.self!==parent){if(b.length>0){ubs.init.states.$content.css("width",(ubs.init.states.$content.width()/ubs.init.states.fontbase/ubs.init.states.textzoom+"em"));
a("body").css({width:"auto",height:"100%"}).prop("id","iFrameBody");
a("#doc").addClass(b.prop("class"));
a(document).keydown(function(d){if(d.keyCode===27){if(parent.$(parent.document).find("#colorbox #cboxClose").html().length>0){parent.$(parent.document).colorbox.close()
}}})
}else{if(!ubs.init.states.accessRights){a("body").css({width:"auto",height:"100%",overflow:"auto"});
a("#doc").addClass("colorbox-pf");
a("html").css("overflow","auto")
}}}},getRefQueryParam:function(b){b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
b=RegExp("[\\?&]"+b+"=([^&#]*)").exec(document.referrer);
return b===null?"":b[1]
},getQueryParam:function(b){b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
b=RegExp("[\\?&]"+b+"=([^&#]*)").exec(document.URL);
return b===null?"":b[1]
},getRootDomain:function(b){var d=document.domain.split(".");
return d.slice(-b).join(".")
},getCookiesStartingWith:function(e){var b=decodeURIComponent(document.cookie).replace(/ /g,"").split(";");
var d=[];
var f=RegExp(e);
a.each(b,function(g,i){if(i.search(f)===0){d.push(i.split("=")[0])
}});
return d
},getStringWithout:function(b,e){var d=b;
a.each(e,function(f,i){var g=RegExp(i);
d=d.replace(g,"")
});
return d
},addPageSelector:function(g,e){var d=e.lastIndexOf(".");
var f=e.substr(0,d+1);
var b=e.substr(d);
e=f+g+b;
return e
},updateQueryString:function(d,f,b){if(!b){b=window.location.href
}var e=new RegExp("([?|&])"+d+"=.*?(&|#|$)(.*)","gi");
if(e.test(b)){if(typeof f!=="undefined"&&f!==null){return b.replace(e,"$1"+d+"="+f+"$2$3")
}else{var i=b.split("#");
b=i[0].replace(e,"$1$3").replace(/(&|\?)$/,"");
if(typeof i[1]!=="undefined"&&i[1]!==null){b+="#"+i[1]
}return b
}}else{if(typeof f!=="undefined"&&f!==null){var g=b.indexOf("?")!==-1?"&":"?",i=b.split("#");
b=i[0]+g+d+"="+f;
if(typeof i[1]!=="undefined"&&i[1]!==null){b+="#"+i[1]
}return b
}else{return b
}}},ajaxUtil:{sendAjaxRequest:function(e,i,g,b,d,f){jQuery.ajax({url:e,type:i,dataType:g,data:b,success:d,error:f})
}},getMyValuePosition:function(j,f){var b=[],d=[],e="",g="",i="";
if(typeof j==="string"&&j.length>0){if(typeof f==="string"&&f.length>0){b=j.replace(/px/g,"").split(" ");
d=f.replace(/px/g,"").split(" ");
if(b.length==2&&d.length==2){e=(parseInt(d[0],10)>=0?"+":"");
g=(parseInt(d[1],10)>=0?"+":"");
i=b[0]+e+d[0]+" "+b[1]+g+d[1]
}}else{i=j
}}else{i="left top"
}return i
},sign:function(b){return b>0?1:b<0?-1:0
},parseBoolean:function(b){switch(String(b).toLowerCase()){case"true":case"1":case"yes":case"y":return true;
case"false":case"0":case"no":case"n":return false;
default:return undefined
}},checkBrowser:function(i,e,d){if(typeof e!=="undefined"){if(typeof d==="undefined"||d===false){return a("body").hasClass(i+e)
}else{var f=false;
var g=(i==="ie"?6:0);
for(var b=e;
b>g;
b--){f=a("body").hasClass(i+b);
if(f===true){return true
}}return f
}}else{return(this.getBrowserName()===i.toLowerCase())
}},getBrowserName:function(){if(!ubs.util._browserDetect.initialized){ubs.util._browserDetect.init()
}return ubs.util._browserDetect.browser
},getBrowserVersion:function(){if(!ubs.util._browserDetect.initialized){ubs.util._browserDetect.init()
}return ubs.util._browserDetect.version
},_browserDetect:{initialized:false,init:function(){ubs.util._browserDetect.initialized=true;
this.browser=this.searchString(this.dataBrowser)||"Other";
this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"Unknown"
},searchString:function(e){for(var b=0;
b<e.length;
b++){var d=e[b].string;
this.versionSearchString=e[b].subString;
if(d.indexOf(e[b].subString)!==-1){return e[b].identity
}}},searchVersion:function(d){var b=d.indexOf(this.versionSearchString);
if(b===-1){return
}return parseFloat(d.substring(b+this.versionSearchString.length+1))
},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"chrome"},{string:navigator.userAgent,subString:"MSIE",identity:"ie"},{string:navigator.userAgent,subString:"Firefox",identity:"firefox"},{string:navigator.userAgent,subString:"Safari",identity:"safari"},{string:navigator.userAgent,subString:"Opera",identity:"opera"}]},initWithParams:function(b,d){if(b.length){b.each(function(){var e=a(this),f=e.data("nn-params");
if(f){f=f.replace(/'/g,'"');
f=a.parseJSON(f)
}if(f&&f.hasOwnProperty("options")){a(this)[d](f.options)
}else{a(this)[d]()
}})
}},placeholder:function(b){var d="input-js-placeholder",e="input-js-placeholder--in",f;
if(!("placeholder" in document.createElement("input"))){a.each(b,function(){var i=a(this),g=i.attr("name"),j=i.attr("placeholder");
i.addClass(d);
if(j===undefined){return false
}if(i.val()===""&&j){i.val(j);
i.addClass(e);
i.hiddenName=g
}this.plchldr=j;
i.bind("focus",function(){var k=a(this);
if(k.val()===j){k.val("")
}});
i.bind("blur",function(){var k=a(this);
if(k.val()===""&&k.val()!==this.plchldr){k.val(this.plchldr);
k.addClass(e)
}else{k.removeClass(e)
}})
});
f=a("form").has("."+d);
a.each(f,function(){var i=a(this),g=i.data("validator");
i.submit(function(j,k){if(!g||g&&i.valid()){i.find("."+e).val("")
}})
})
}else{a.each(b,function(){a(this).addClass("input-native-placeholder")
})
}},currencyFormatString:function(b){var e=parseInt(this);
e=e.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,").toString();
var d=new RegExp(",","g");
e=e.replace(d,b);
return e.substring(0,e.length-3)
}})
})(ubs.$);
(function(a){ubs.init=ubs.init||{};
a.extend(ubs.init,{states:{$content:a("#content"),accessRights:true,readingDirection:a("html").css("direction"),textzoom:1,fontbase:12,isp:false,tim:false,etf:false,funds:false,shared:false,mobile:false,cqAuthor:false,rootDomain:ubs.util.getRootDomain(2)},all:function(b){if(a(b).html()){ubs.util.log("[init.all] Context: "+b);
ubs.init.states.textzoom=ubs.util.zoomCheck(ubs.init.states.fontbase);
ubs.init.states.isp=!a.isEmptyObject(ubs.isp);
ubs.init.states.tim=!a.isEmptyObject(ubs.tim);
ubs.init.states.etf=!a.isEmptyObject(ubs.etf);
ubs.init.states.funds=!a.isEmptyObject(ubs.funds);
ubs.init.states.shared=!a.isEmptyObject(ubs.shared);
ubs.init.states.mobile=!a.isEmptyObject(ubs.fit.mobile);
ubs.init.states.accessRights=ubs.util.iFrameAccessRights();
ubs.init.states.cqAuthor=ubs.util.onCQAuthor();
ubs.util.initAll(ubs,b);
if(!ubs.init.states.mobile){ubs.util.initAll(ubs.desktop,b)
}if(ubs.init.states.isp){ubs.util.initAll(ubs.isp,b)
}else{if(ubs.init.states.tim){ubs.util.initAll(ubs.tim,b)
}else{if(ubs.init.states.etf){ubs.util.initAll(ubs.etf,b);
ubs.util.initAll(ubs.fit,b)
}else{if(ubs.init.states.funds){ubs.util.initAll(ubs.funds,b);
ubs.util.initAll(ubs.fit,b)
}else{ubs.util.initAll(ubs.fit,b)
}}}}ubs.util.initAll(ubs.shared,b);
ubs.util.initAll(ubs.micro,b);
if(ubs.init.states.mobile){ubs.util.initAll(ubs.fit.mobile,b)
}}}});
a(document).ready(function(){ubs.util.log("[System] "+ubs.util.getLang());
ubs.init.all("body")
})
})(ubs.$);
(function(a){a.fn.tabNav=function(){$tabNav={};
$tabContent={};
a.each(this,function(d){$tabNav[d]=a(this).children(".tab-navigation-elements").find("li");
$tabContent[d]=a(this).children(".tab-content");
var e=0;
var f=0;
a.each($tabContent[d],function(){var g=a(this).css("position","static").height();
a(this).css("position","");
if(g>f){f=g
}});
a.each($tabContent[d],function(){a(this).height(f)
});
b($tabNav[d][e],d);
$tabNav[d].click(function(g){b(this,d);
return false
})
});
function b(e,d){$tabNav[d].filter(".active").removeClass("active");
a(e).addClass("active");
$activeTabNumber=a(e).index();
$tabContent[d].filter(".selected").removeClass("selected");
$tabContent[d].eq($activeTabNumber).addClass("selected")
}}
})(jQuery);
(function(a){a.fn.infotoggle=function(b){a.each(a(this),function(j){var r=a(this);
var y=a(this).children(".info-status");
var q=y.children(".info-label");
var f=a(this).children(".info-content");
var n=false;
var m=q.attr("data-altlabel");
var k=q.html();
var e=a(this).hasClass("expandQuote");
if(e){var x=a(this).parents(".box-featured").find(".quoteDetails");
f=x.find(".quoteDetailsBody");
var d=x.find(".qtoggledetails")
}var g=a(this).hasClass("expandInfo");
if(g){f=a(this).closest("div.box-featured").find("div.info-content")
}var o=a(this).hasClass("expandCurrency");
if(o){var p=a(this).closest("div.box-featured");
f=f.add(p.find("div.currency-calculator form")).add(p.find("div.quote"))
}y.addClass("ui-state-active");
u();
y.click(function(i){if(n){u();
f.slideUp()
}else{f.slideDown();
w()
}return false
});
if(a(this).hasClass("expandView")){y.click()
}function w(i){y.attr("aria-expanded","true").attr("aria-selected","true").toggleClass("ui-state-default").toggleClass("ui-state-active");
q.html(m);
n=true;
if(e){d.hide()
}}function u(){y.attr("aria-expanded","false").attr("aria-selected","false").toggleClass("ui-state-default").toggleClass("ui-state-active");
q.html(k);
n=false;
if(e){d.show()
}}})
}
})(jQuery);
CurrencyCalculator=function(){return{getLeftCurrencyName:function(){return"amount1"
},getRightCurrencyName:function(){return"amount2"
},getPathName:function(){return window.location.pathname
},getItemLocalStorage:function(a){return localStorage.getItem(a)
},getItemCookie:function(a){return jQuery.cookie(a)
},getItemByName:function(a){if(typeof(localStorage)=="undefined"){return CurrencyCalculator.getItemCookie(CurrencyCalculator.getPathName()+a)
}else{return CurrencyCalculator.getItemLocalStorage(CurrencyCalculator.getPathName()+a)
}},addItemFavourite:function(d,b,a){if(d=="undefined"||b=="undefined"||a=="undefined"||d==""||b==""||a==""){return
}var e=CurrencyCalculator.getPathName();
var f=e+d;
if(typeof(localStorage)=="undefined"){return CurrencyCalculator.addFavouriteCookie(f,b,a)
}else{return CurrencyCalculator.addFavouriteLocalStorage(f,b,a)
}},addItem:function(g,b){if(g=="undefined"||b=="undefined"){return
}var f=window.location.pathname;
var a=f+g;
if(typeof(localStorage)=="undefined"){return CurrencyCalculator.addCookie(a,b)
}else{try{ubs.func.cookieHandling.setStorage(a,b,ubs.func.cookieHandling.cookieCategorySettings.currencycalculator.privacySetting)
}catch(d){return CurrencyCalculator.addCookie(a,b)
}}return true
},addFavouriteLocalStorage:function(d,b,a){try{var g=localStorage.getItem(d);
if(g==null){g=CurrencyCalculator.addFavouritesFromString(CurrencyCalculator.createFavouritesJSON(),b,a)
}else{g=CurrencyCalculator.addFavouritesFromString(g,b,a)
}ubs.func.cookieHandling.setStorage(d,g,ubs.func.cookieHandling.cookieCategorySettings.currencycalculator.privacySetting)
}catch(f){return CurrencyCalculator.addFavouriteCookie(d,b,a)
}return true
},addFavouriteCookie:function(f,b,a){try{var d=jQuery.cookie(f);
if(d==null){d=CurrencyCalculator.addFavouritesFromString(CurrencyCalculator.createFavouritesJSON(),b,a)
}else{d=CurrencyCalculator.addFavouritesFromString(d,b,a)
}ubs.func.cookieHandling.setCookie(f,d,ubs.func.cookieHandling.cookieCategorySettings.currencycalculator.privacySetting)
}catch(g){return false
}return true
},addCookie:function(a,b){try{ubs.func.cookieHandling.setCookie(a,b,ubs.func.cookieHandling.cookieCategorySettings.currencycalculator.privacySetting)
}catch(d){return false
}return true
},getFavourites:function(a){if(a){return CurrencyCalculator.getItemByName(CurrencyCalculator.getLeftCurrencyName())
}else{return CurrencyCalculator.getItemByName(CurrencyCalculator.getRightCurrencyName())
}},getFieldTrigger:function(a){var e=a.split("&");
for(var b=0;
b<e.length;
b++){var d=e[b].split("=");
if(d.length==2&&d[0]=="fieldTrigger"&&(d[1]=="amount1"||d[1]=="amount2")){return d[1]
}}return""
},getRate:function(b,a,d){var i=CurrencyCalculator.getFieldTrigger(b);
if(i!=""){if($("#"+i).val()==""){return
}}var f=$("#amount1").val();
if(f==""){return
}if(isNaN(f.charAt(f.length-1))){return
}var g=$("#currencyval1").val();
var e=$("#currencyval2").val();
if(g==e){$cc1=$("#cc");
$result1=$cc1.find(".result");
$result1.html("");
return
}ubs.util.ajaxUtil.sendAjaxRequest("/bin/ubs/currencycalculator","GET","",b,a,d)
},successFunction:function(e,j,d){var g=jQuery.evalJSON(jQuery.toJSON(e)).data;
var a;
var f;
for(var b=0;
b<g.length;
b++){a=g[b].name;
f=g[b].val;
if(f!=""){if(a=="result"){jQuery(".result").html(f)
}else{}if(a=="rate"){jQuery(".rate").html(f)
}if(a=="currencies"){jQuery(".exchange-currencies").html(f)
}if(a=="ask"){jQuery(".ask").html(f)
}if(a=="bid"){jQuery(".bid").html(f)
}if(a=="date"){jQuery(".conversion-date").html(f)
}if(a=="htmldate"){jQuery("#conversion-time").attr({dateTime:f})
}}}},errorFunction:function(a,d,b){},createFavouritesJSON:function(){return'{"Favourites":[]}'
},addFavouritesFromString:function(b,e,a){if(b=="undefined"){return CurrencyCalculator.createFavouritesJSON()
}var k=jQuery.evalJSON(b).Favourites;
var j;
var d=false;
for(var g=0;
g<k.length;
g++){j=jQuery.evalJSON(jQuery.toJSON(k[g])).code;
if(j==e){d=true;
break
}}if(!d){var f=new Object();
f.code=e;
f.desc=a;
k.push(f)
}return CurrencyCalculator.createJSONFavouritesArray(k)
},createJSONFavouritesArray:function(f){if(f.length==0){return CurrencyCalculator.createFavouritesJSON()
}else{var e='{"Favourites":[';
var b;
var d;
for(var a=0;
a<f.length;
a++){e+='{"code":"'+f[a].code+'","desc":"'+f[a].desc+'"}';
if(a!=f.length-1){e+=","
}}e+="]}";
return e
}}}
}();
function setCurrencyCalculatorValues(){if(window.currencyJs){currencyJSON=$.parseJSON(currencyJs);
$.each(currencyJSON.Selected,function(b,f){var e=f.code;
var a=0;
var d=0;
$.each(currencyJSON.Favourites,function(g,i){d++;
if(i.code==e){a=d;
return false
}});
if(a==0){$.each(currencyJSON.Currencies,function(g,i){$.each(i,function(j,k){$.each(k,function(m,n){if(n.code==e){currencyJSON.Favourites.push({code:n.code,desc:n.desc});
return false
}})
})
})
}});
getCurrencyConversion(currencyCalculatorServlet)
}}function getCurrencyConversion(a){ubs.util.ajaxUtil.sendAjaxRequest("/bin/ubs/currencycalculator","GET","json",a,displayConversionResult,convertionError)
}function convertionError(){}function displayConversionResult(e,j,d){if(e!=""){var g=e.data;
var a;
var f;
for(var b=0;
b<g.length;
b++){a=g[b].name;
f=g[b].val;
if(f!=""){if(a=="result"){jQuery(".result").html(f)
}if(a=="rate"){jQuery(".rate").html(f)
}if(a=="currencies"){jQuery(".exchange-currencies").html(f)
}if(a=="ask"){jQuery(".ask").html(f)
}if(a=="bid"){jQuery(".bid").html(f)
}if(a=="date"){jQuery(".conversion-date").html(f)
}if(a=="htmldate"){jQuery("#conversion-time").attr({dateTime:f})
}}}if(window.value){jQuery("#amount1").val(value)
}}}(function(a){a.fn.currencyCalculator=function(b){a.each(a(this),function(g){$cc=a(this);
$revert=$cc.find(".currencyRevert");
$amount1=$cc.find("input[data-amount=true]:eq(0)");
$amount2=$cc.find("input[data-amount=true]:eq(1)");
$currency1=$cc.find("input[data-currency=true]:eq(0)");
$currency2=$cc.find("input[data-currency=true]:eq(1)");
$result=$cc.find(".result");
$currencyval1=$cc.find("#currencyval1");
$currencyval2=$cc.find("#currencyval2");
$revert.click(function(){var u=$amount1.val();
var q=$amount2.val();
var w=$currency1.val();
var r=$currency2.val();
var p=$currencyval1.val();
var o=$currencyval2.val();
$currency1.val(r);
$currency2.val(w);
$currencyval1.val(o);
$currencyval2.val(p);
var i=$cc.find("form").serialize();
CurrencyCalculator.getRate(i,CurrencyCalculator.successFunction,CurrencyCalculator.errorFunction);
return false
});
var f=$amount1.prop("name");
if($amount1.val()==null||$amount1.val()==""){var m=CurrencyCalculator.getItemByName(f);
if(m!="undefined"&&m!=""&&m!=null){$amount1.val(m)
}}var d=$amount2.prop("name");
var e=CurrencyCalculator.getItemByName(d);
if(e!="undefined"&&e!=""&&e!=null){$amount2.val(e)
}$operation=$cc.find("#operation");
var k=CurrencyCalculator.getItemByName("operation");
if(k!="undefined"&&k!=""&&k!=null){$operation.val(k)
}$exchange=$cc.find("#exchange");
var n=CurrencyCalculator.getItemByName("exchange");
if(n!="undefined"&&n!=""&&n!=null){$exchange.val(n)
}var j=a("#main").hasClass("page-search");
a("select",$cc).bind("change",function(){if(!j){CurrencyCalculator.addItem(a(this).prop("name"),a(this).val())
}var i=$cc.find("form").serialize();
i+="&fieldTrigger="+a(this).prop("id");
CurrencyCalculator.getRate(i,CurrencyCalculator.successFunction,CurrencyCalculator.errorFunction)
});
a("input:not('.selectinput')",$cc).bind("keyup",function(){if(!j){CurrencyCalculator.addItem(a(this).prop("name"),a(this).val())
}var i=$cc.find("form").serialize();
i+="&fieldTrigger="+a(this).prop("id");
CurrencyCalculator.getRate(i,CurrencyCalculator.successFunction,CurrencyCalculator.errorFunction)
});
$cc.find("form").submit(function(o){o.preventDefault();
var i=a(this).serialize();
CurrencyCalculator.getRate(i,CurrencyCalculator.successFunction,CurrencyCalculator.errorFunction)
})
})
}
})(jQuery);
(function(a){a.fn.dynamicTeaser=function(d){var e={animation_speed:500,rotate_speed:5000,fadeIn_speed:450,teaserExpWith:"44.583em",teaserExpWithNarrow:"36.250em",navNext:"next",navPrev:"prev",mobile:false,direction:"ltr",baseFontSize:12,resizable:false,showArrows:false,expandable:true};
e.direction=a("html").css("direction");
var b=a(this);
if(b.length===0){return
}a.each(b,function(){var E=a.extend(e,d);
var G=a(this);
if(E.debug){G.css("background-color","red")
}var n=G.find("div.dynamicteaser-wrapper");
var O=a(this).find("div.teaser");
var M=false;
var j=false;
var X=O.length;
var u=0;
var p;
var o;
var x="left";
var g=n.width();
E.expandable=n.attr("data-expandable")?n.attr("data-expandable"):E.expandable;
E.navNext=n.attr("data-navNext")?n.attr("data-navNext"):E.navNext;
E.navPrev=n.attr("data-navPrev")?n.attr("data-navPrev"):E.navPrev;
E.expandable=ubs.util.parseBoolean(E.expandable);
if(n.hasClass("narrowTeaser")){E.teaserExpWith=E.teaserExpWithNarrow
}if(n.attr("data-publish")==="false"){n.find("div.teaser-body-wrapper").addClass("expand");
O.css("display","block");
O.find("div.teaser-body-wrapper").css({visibility:"visible"});
if(!E.mobile){O.find("div.teaser-body-wrapper").css({width:E.teaserExpWith});
O.find("div.textimage.hidden").removeClass("hidden")
}return
}a.each(O,function(ad){var aj=a(this);
var ac=aj.find("div.teaser-bottom");
var af=a(this).find("div.teaser-body-wrapper");
var ak=a(this).find("div.teaser-content");
var ae=a(this).find("div.textimage.hidden");
var aa=aj.hasClass("videoLink");
var ai=aj.children(".teaser-body-wrapper").attr("class");
aj.data("color",ubs.util.getStringWithout(ai,["teaser-body-wrapper","left","right"]));
if(ad===0){aj.show().css("zIndex","2").css("position","relative")
}var Y=af.width()/E.baseFontSize+"em";
if(X>1&&!E.mobile){ak.css("bottom","8.667em");
ac.css("bottom","3.75em")
}var ag="dtNav_"+ad;
var Z="dtTab_"+ad;
var ab=(ad!==u);
aj.attr({role:"tabpanel","aria-labelledby":ag,"aria-hidden":ab,id:Z});
af.css("visibility","visible");
if(aa){J(aj)
}else{if(E.mobile){return
}else{aj.width()
}}aj.mouseenter(function(){if(!aa&&E.expandable){i()
}clearTimeout(o)
});
aj.mouseleave(function(al){if(!aa&&E.expandable){ah()
}if(al.originalEvent!==undefined){r()
}});
if(aa||!E.expandable){return
}function i(){j=true;
if(!M){ak.hide();
af.stop().animate({width:E.teaserExpWith},E.animation_speed,function(){af.addClass("expand");
ae.removeClass("hidden");
ak.show()
})
}}function ah(){j=false;
ak.hide();
af.stop().animate({width:Y},E.animation_speed,function(){af.removeClass("expand");
ae.addClass("hidden");
ak.show()
})
}});
function J(Y){var i=Y.find("a.video-wrapper");
var ac=a('<div class="imageStatus"></div>');
i.append(ac);
if(!E.mobile){var Z=Y.find("div.teaser-body-wrapper"),aa=0,ab=0;
if(Z.hasClass("right")&&E.direction!=="rtl"||!Z.hasClass("right")&&E.direction==="rtl"){ab=Z.width()
}else{aa=Z.width()
}ac.css({left:aa,right:ab})
}}function N(Y,i,aa,ab){clearTimeout(o);
if(i==="move"&&(aa==="left"||aa==="right")){var Z=0;
if(aa==="left"){if(ubs.util.checkBrowser("ie",9,true)){y((100*u)+(E.sign*ab*100/U),Z)
}else{y((100*u)+(E.sign*ab*100/U),Z)
}}else{if(aa==="right"){if(ubs.util.checkBrowser("ie",9,true)){y((100*u)-(E.sign*ab*100/U),Z)
}else{y((100*u)-(E.sign*ab*100/U),Z)
}}}}else{if(i==="cancel"){y(100*u,R)
}else{if(i==="end"){if(aa==="left"){if(E.direction==="ltr"){Q()
}else{z()
}}else{if(aa==="right"){if(E.direction==="ltr"){z()
}else{Q()
}}}}}}r()
}function r(){o=window.setTimeout(function(){if(E.mobile){N("","end",x,0)
}else{B.find("li.go-next").click()
}},E.rotate_speed)
}function H(i){i.target.click()
}function I(Z){var Y=O.eq(Z).find("div.teaser-body-wrapper");
var ac=Y.hasClass("right")?"right":"left";
if(E.direction==="rtl"){ac=ac==="right"?"left":"right"
}var ab=16;
var i=40;
var aa=Y.width()/E.baseFontSize-((E.mobile?ab:i)/E.baseFontSize);
if(!E.mobile){f.css({"float":ac,width:aa+"em"})
}}if(X>1){var q=O.eq(0).data("color");
var P='<div class="nav-dynamicTeaser"><div class="nav-dynamicTeaser-wrapper">';
P+='<ul role="tablist" class="'+q+'">';
var F=E.mobile?-1:0;
if(E.showArrows||!E.mobile){P+='<li class="go-prev" tabindex="-1"><span>'+E.navPrev+"</span></li>"
}P+='<li id="dtNav_0" aria-controls="dtTab_0" role="tab" aria-selected="true"  tabindex="'+F+'" class="go-teaser active"><span>'+O.eq(0).find("h2").html()+"</span></li>";
for(var W=1;
W<X;
W++){P+='<li id="dtNav_'+W+'" aria-controls="dtTab_'+W+'" role="tab" aria-selected="false" class="go-teaser" tabindex="-1"><span>'+O.eq(W).find("h2").html()+"</span></li>"
}if(E.showArrows||!E.mobile){P+='<li class="go-next" tabindex="-1"><span>'+E.navNext+"</span></li>"
}P+="</ul>";
P+="</div></div>";
var B=a(P);
var f=B.find("div.nav-dynamicTeaser-wrapper");
var k=f.find("ul[role=tablist]");
var K=B.find("li.go-teaser");
if(E.mobile){G.find("div.dynamicteaser-wrapper").append(B).width(X*100+"%");
B.width(100/X+"%");
O.css({width:100/X+"%","background-size":"cover"})
}else{G.find("div.dynamicteaser-wrapper").prepend(B);
if(X>1){I(u)
}}var w=false;
var S=false;
var m=false;
if(E.resizable){a(window).resize(function(){clearTimeout(o);
g=n.width();
U=O.eq(0).width();
T();
r()
})
}if(E.showArrows||!E.mobile){B.find("li.go-prev").click(function(i){if(!E.mobile){S=true;
V((u+X-1)%X);
i.stopPropagation();
return false
}else{if(E.direction==="ltr"){x="right"
}else{x="left"
}N("","end",x,0)
}});
B.find("li.go-next").click(function(i){if(!E.mobile){S=true;
V((u+1)%X);
i.stopPropagation();
return false
}else{if(E.direction==="ltr"){x="left"
}else{x="right"
}N("","end",x,0)
}})
}if(!E.mobile){a.each(K,function(i){a(this).click(function(Y){S=true;
V(i);
Y.stopPropagation();
return false
})
});
B.focusin(function(){clearTimeout(o);
setTimeout(function(){if(!S&&!m){m=true;
S=false;
O.eq(u).mouseenter()
}},500)
});
K.keydown(function(Y){var i=K.index(a(this));
switch(Y.keyCode){case a.ui.keyCode.ENTER:A(a(this));
break;
case a.ui.keyCode.SPACE:A(a(this));
break;
case a.ui.keyCode.UP:C(i,i-1);
return false;
case a.ui.keyCode.DOWN:C(i,i+1);
return false;
case a.ui.keyCode.LEFT:C(i,i-1);
return false;
case a.ui.keyCode.RIGHT:C(i,i+1);
return false;
case a.ui.keyCode.TAB:O.eq(u).mouseleave();
r();
S=false;
m=false;
break
}})
}else{var U=O.eq(0).width();
var R=500;
E.sign=(E.direction==="ltr"?+1:-1);
var L={triggerOnTouchEnd:true,swipeStatus:N,allowPageScroll:"vertical",threshold:100,click:H,excludedElements:"button, input, select, textarea, .noSwipe"};
a(function(){O.swipe(L)
})
}r()
}function V(i){if(i===u||w){return
}p=i;
w=true;
clearTimeout(o);
I(p);
var Z=O.eq(p);
var Y=O.eq(u);
Y.stop().css({zIndex:"1"});
Z.css({position:"absolute",zIndex:2}).fadeIn(E.fadeIn_speed,function(){a(this).css({position:"relative"});
Y.css({zIndex:"",display:"none",position:"absolute"});
w=false;
D();
u=p;
k.attr("class",Z.data("color"));
r()
})
}function D(){K.eq(p).addClass("active");
K.eq(u).removeClass("active");
K.eq(p).attr("aria-selected","true");
K.eq(u).attr("aria-selected","false");
K.attr("tabindex","-1");
K.eq(p).attr("tabindex","0");
O.eq(u).attr("aria-hidden","true");
O.eq(p).attr("aria-hidden","false")
}function C(Y,i){i=i%X;
K.eq(Y).attr("tabindex","-1");
K.eq(i).attr("tabindex","0").focus()
}function A(i){O.eq(u).mouseleave();
clearTimeout(o);
var Y;
if(i.hasClass("go-next")){Y=((u+1)%X)
}else{if(i.hasClass("go-prev")){Y=((u-1)%X)
}else{Y=i.index()-1
}}setTimeout(function(){O.eq(Y).mouseenter()
},E.animation_speed);
i.click();
clearTimeout(o)
}function T(){y("100"*u,0)
}function z(){p=u-1;
if(p>=0){D();
u=p
}if(p===0){if(E.direction==="ltr"){x="left"
}else{x="right"
}}y("100"*u,R)
}function Q(){p=u+1;
if(p<X){D();
u=p
}if(p+1===X){if(E.direction==="ltr"){x="right"
}else{x="left"
}}if(U<100){U=O.eq(0).width()
}y("100"*u,R)
}function y(ab,aa){aa=(aa/1000).toFixed(1)+"s";
O.css({"-webkit-transition-duration":aa,"-moz-transition-duration":aa,"-o-transition-duration":aa,"transition-duration":aa});
var Z=(ab<0?(+1*E.sign):(-1*E.sign))*Math.abs(ab).toString();
if(ubs.util.checkBrowser("ie",9,true)){var Y=(Z/100)*g;
O.animate({left:Y+"px"}).css({position:"relative"})
}else{var i="translateX("+Z+"%)";
O.css({"-webkit-transform":i,"-moz-transform":i,"-o-transform":i,transform:i})
}}})
}
})(jQuery);
(function(a){a.fn.rotatingTeaser=function(f){var j={animation_speed:250,animation_speed_mobile:500,rotate_speed:4000,nav_spacing:27,navNext:"next",navPrev:"prev",autorotate:false,endlessMode:false,mobile:false,direction:"ltr",directionForward:true,scrollDirection:"left",baseFontSize:12};
j.direction=a("html").css("direction");
var n=a.extend(j,f);
if(n.direction==="ltr"){n.scrollDirection="left"
}else{n.scrollDirection="right"
}var k=a(this);
var i={};
b();
e();
function b(){a.each(k,function(A){var z=a(this);
if(z.children().length===0){z.parent(".rotatingteaser").css({display:"none"});
return
}var B="rt_"+A;
i[B]={};
i[B].container=z;
i[B].elements=z.find(".teaser");
i[B].rotate_speed=z.attr("data-rotSpeed")?z.attr("data-rotSpeed"):n.rotate_speed;
i[B].prev=z.attr("data-navPrev")?z.attr("data-navPrev"):n.navPrev;
i[B].next=z.attr("data-navNext")?z.attr("data-navNext"):n.navNext;
i[B].autorotate=z.attr("data-autorotate")==="true"?true:z.attr("data-autorotate")==="false"?false:n.autorotate;
i[B].enlessmode=z.attr("data-endless")==="true"?true:z.attr("data-endless")==="false"?false:n.endlessMode;
i[B].rotateon=i[B].autorotate
})
}function e(){a.each(i,function(z){var A=this;
A.name=z;
A.length=A.elements.length;
if(A.length<2){return
}A.actualTeaser=0;
A.scrolldirection="left";
p(A)
})
}function q(A){var z=0;
a.each(A,function(){var C=a(this);
var B=C.height();
z=(B>z?B:z)
});
return z
}function x(z){var A=0;
a.each(z,function(){var B=a(this);
var C=parseInt(B.css("marginBottom"),10);
A=(C>A?C:A)
});
return A
}function p(D){D.container.empty();
D.rTWrapper=a("<div class='wrapper-rotatingTeaser' style='width:"+D.length*100+"%'></div>");
D.container.append(D.rTWrapper);
a.each(D.elements,function(){D.rTWrapper.append(a(this).width(100/D.length+"%").data("group-name",D.name))
});
var z=q(D.elements);
a.each(D.elements,function(I){var G=a(this);
G.prop("id",D.name+"_"+I);
var H=G.find(".teaser-body");
var F=G.find(".articleItem");
if(H.length>0){H.height((z-(G.height()-H.height()))/n.baseFontSize+(n.nav_spacing/n.baseFontSize)+"em")
}else{if(F.length>0){F.height((z)/n.baseFontSize+(n.nav_spacing/n.baseFontSize)+"em")
}else{G.height(z/n.baseFontSize+(n.nav_spacing/n.baseFontSize)+"em")
}}});
var E='<div class="nav-dynamicTeaser"><div class="nav-dynamicTeaser-wrapper">';
E+="<ul>";
if(!n.mobile){E+='<li class="go-prev"><span>'+n.navPrev+"</span></li>"
}a.each(D.elements,function(G){var F=G===0?" active":"";
E+='<li class="go-teaser'+F+'"><a href="#'+D.name+"_"+G+'"><span>'+a(this).find("h2").text()+"</span></a></li>"
});
if(!n.mobile){E+='<li class="go-next"><span>'+n.navNext+"</span></li>"
}E+="</ul>";
E+="</div></div>";
var C=a(E);
var A=x(D.elements);
C.css("marginBottom",A);
D.container.prepend(C);
D.goTeaser=C.find("li.go-teaser");
if(!n.mobile){C.find("li.go-prev").click(function(){clearTimeout(D.rotate_timer);
d(D,D.actualTeaser-1)
});
D.goTeaser.click(function(){clearTimeout(D.rotate_timer);
d(D,D.goTeaser.index(a(this)));
return false
});
C.find("li.go-next").click(function(){clearTimeout(D.rotate_timer);
d(D,D.actualTeaser+1)
});
D.container.on("mouseenter focusin",function(){clearTimeout(D.rotate_timer)
});
D.container.on("mouseleave focusout",function(){if(D.rotateon){o(D)
}})
}else{var B={triggerOnTouchEnd:true,swipeStatus:w,allowPageScroll:"vertical",threshold:100,group:D};
a(function(){a(D.elements).swipe(B)
});
D.goTeaser.click(function(){return false
})
}if(D.autorotate){o(D)
}}function d(B,z){var D=z;
z=((z%B.length)+B.length)%B.length;
var A=a(B.elements).eq(B.actualTeaser).index();
var C=a(B.elements).eq(z).index();
if(A-C>1||(C===0&&D===B.actualTeaser+1)){B.rTWrapper.append(B.elements[z]);
B.rTWrapper.css("marginLeft",g("left",B));
B.rTWrapper.css("marginRight",g("right",B))
}if(A-C<-1||(C===B.length-1&&D===B.actualTeaser-1)){B.rTWrapper.prepend(B.elements[z]);
B.rTWrapper.css("marginLeft",g("left",B));
B.rTWrapper.css("marginRight",g("right",B))
}B.actualTeaser=z;
y(B);
a(B.elements).css("visibility","visible");
B.rTWrapper.stop().animate({marginRight:g("right",B),marginLeft:g("left",B)},n.animation_speed,function(){a(B.elements).css("visibility","hidden");
a(B.elements).eq(z).css("visibility","visible")
})
}function g(A,z){if(n.scrollDirection===A){return -(a(z.elements[z.actualTeaser]).index()*100)+"%"
}else{return 0
}}function y(z){z.goTeaser.removeClass("active");
z.goTeaser.eq(z.actualTeaser).addClass("active")
}function o(z){z.rotate_timer=window.setTimeout(function(){var A=z.actualTeaser+1;
if(n.mobile){if(z.actualTeaser===0&&!z.directionForward){z.directionForward=true;
z.scrollDirection=z.scrollDirection==="left"?"right":"left"
}if(z.actualTeaser===z.length&&z.directionForward){z.directionForward=false;
z.scrollDirection=z.scrollDirection==="left"?"right":"left"
}if((A<z.length)||z.enlessmode){w("","end",n.scrollDirection,0,z);
o(z)
}}else{if((A<z.length)||z.enlessmode){d(z,A);
o(z)
}}},z.rotate_speed,z)
}function w(C,z,F,G,E){var A=a(this);
if(!E){E=i[A.data("group-name")];
clearTimeout(E.rotate_timer)
}if(z==="move"&&(F==="left"||F==="right")){var D=0;
var B=G/A.width()/E.length*100;
if(F==="left"){r(E.actualTeaser*100/E.length+B,D,E)
}else{if(F==="right"){r(E.actualTeaser*100/E.length-B,D,E)
}}}else{if(z==="cancel"){r(E.actualTeaser*100/E.length,n.animation_speed_mobile,E)
}else{if(z==="end"){if(F==="right"){m(E)
}else{if(F==="left"){u(E)
}}}}}}function m(z){if(z.actualTeaser>0){z.actualTeaser-=1;
r(z.actualTeaser*100/z.length,n.animation_speed_mobile,z);
y(z)
}}function u(z){if(z.actualTeaser<z.length-1){z.actualTeaser+=1;
r(z.actualTeaser*100/z.length,n.animation_speed_mobile,z);
y(z)
}}function r(D,C,B){C=(C/1000).toFixed(1)+"s";
B.rTWrapper.css({"-webkit-transition-duration":C,"-moz-transition-duration":C,"-o-transition-duration":C,"transition-duration":C});
var A=(D<0?"":"-")+Math.abs(D).toString();
var z="translateX("+A+"%)";
B.rTWrapper.css({"-webkit-transform":z,"-moz-transform":z,"-o-transform":z,transform:z})
}}
})(jQuery);
function getjQueryVersion(a){if($().jQuery===a){return jQuery
}else{var b=jQuery;
$.ajax({url:"/js/jquery-"+a+".min.js",dataType:"script",async:false})
}}function checkChildCb(){var a=$("#cbtable").find(".cbparent");
a.click(function(){var d=$(this).prop("checked");
var b=$(this).parents("tr").nextAll().find("input:checkbox");
if(b.length===0){b=$(this).parents("li").nextAll().find("input:checkbox")
}$.each(b,function(){if($(this).hasClass("cbchild")){if(d){$(this).prop("checked",true)
}else{$(this).prop("checked",false)
}}else{return false
}})
})
}function _chartTabs(a){$.each(a,function(){var d=$(this).find(".quote-chart-img");
var b=$(this).find(".quote-chart-tabs a");
b.click(function(){var e=$(this).prop("href");
d.prop("src",e);
b.removeClass("active");
$(this).addClass("active");
return false
})
})
}function _dropdownList(a){a.selectmenu_linklist({transferClasses:false})
}function _initImageGallery(b){var a=b.addClass("gallery-active").adGallery({loader_image:"/img/loader.gif",description_wrapper:".ad-img-description",display_back_and_forward:false,display_back_and_forward_add:true,effect:"slide-hori",slideshow:{enable:false},callbacks:{afterImageVisible:function(){if(d){d[this.gallery_index].selectmenu_linklist("index",this.current_index)
}}}});
var d=[];
$.each($(".init-gallery .ad-thumb-list",$("#content")),function(e){d[e]=$(this).selectmenu_linklist({transferClasses:false,followLink:false,change:function(g,f){a[e].showImage(f.index)
}})
})
}function _openInParent(b,a){if(self!==parent&&a){$.each(b,function(){var d=$(this);
if(d.is("form")){d.prop("target","_parent");
d.submit(function(f){var e=$(this);
if(e.attr("data-error")!=="true"){var g=$.base64Encode(parent.window.location.pathname);
ubs.func.cookieHandling.setCookieStorage("colorbox_open_"+g,null)
}})
}if(d.is("a")){d.click(function(f){f.preventDefault();
var e=$(this).prop("href");
var g=parent.window;
parent.$(parent.document).bind("cbox_closed",function(){g.location.href=e
});
parent.$(parent.document).colorbox.close()
})
}})
}}function _initUnsubscribe(a){$.each(a,function(){var b=$(this).closest("tr");
var d=$(this).closest("tbody").find("tr");
$forms=$(this).find("form");
$forms.submit(function(g){g.preventDefault();
var e=$(this),f=e.prop("action");
$.post(f,e.serialize()).success(function(i){$.colorbox.close();
b.hide();
if(d.filter(":visible").length===0){b.closest("table").hide().siblings(".hide").show()
}}).error(function(i){})
});
$closeButton=$(this).find("button.closeOl");
$closeButton.click(function(){$.colorbox.close()
})
})
}function _popUp(a){a.popupWindow({height:800,width:560,top:100,left:65,toolbar:0,scrollbars:1,location:0,statusbar:0,menubar:0,resizable:1,open_in:"_blank"})
}function _stayInPopup(a){$("a",a).click(function(){var b=$(this).prop("target");
if(b==="_self"||b===""){$(this).prop("href",$(this).prop("href").replace(".html",".popup.html"))
}});
$("form",a).submit(function(){$(this).prop("action",$(this).prop("action").replace(".html",".popup.html"))
})
}function _columnHeightAdjust(a){$.each(a,function(b){$columns=$(this).find("div.col-body:first > div > div.col-inner-wrapper");
var d=0;
$.each($columns,function(){var e=$(this).height();
if(e>d){d=e
}});
$.each($columns,function(){$(this).height(d)
})
})
}function _ckeckStorage(){try{sessionStorage.setItem("test-key","test-value");
if(sessionStorage.getItem("test-key")==="test-value"){return true
}}catch(a){return false
}}var storageEnabled=_ckeckStorage();
function _brightcoveVideo(a){$.each(a,function(){$element=$(this);
$element.closest("div.video").height($element.height());
$imgWrapper=$('<div class="brigthcoveImageWrapper" />');
$element.wrap($imgWrapper);
$imgStatus=$('<div class="imageStatus" />');
$element.parent().append($imgStatus);
$imgStatus.css({left:($element.width()/2-$imgStatus.width()/2),top:($element.height()/2-$imgStatus.height()/2)});
$element.parent().click(function(){_loadBrightcoveVideo(this)
})
})
}function _loadBrightcoveVideo(a){$(a).addClass("loadVideo").next().addClass("BrightcoveExperience");
brightcove.createExperiences()
}function _checkPageContent(e,d){$.cookie("login-token","");
e.preventDefault();
var a=$(d),b=a.prop("action");
$.post(b,a.serialize()).success(function(f){window.location.href=$("#resource").val()
}).error(function(f){if(f!==""){if($(".messageBox p").length===0){$("#loginform").prepend('<div class="messageBox"><p>'+f.responseText+"</p></div>")
}else{$(".messageBox p").empty().append(f.responseText)
}}})
}(function(a){a.fn.constraint=function(d){a.each(a(this),function(k){var j=a(this),m=j.find(".constraint");
a.each(m,function(o){var n=a(this),q=a(this).metadata().constraint,p={};
a.each(q,function(u,w){var i=j.find("input[name="+u+"], select[name="+u+"]");
if(i.prop("type")==="radio"){var r=i.filter(":checked");
p[u]=f(r,w);
i.change(function(){p[u]=f(a(this),w);
b(n,p,j)
})
}else{if(i.prop("type")==="checkbox"){p[u]=e(i.filter(":checked"),w);
i.change(function(){p[u]=e(i.filter(":checked"),w);
b(n,p,j)
})
}else{if(i.is("select")){p[u]=f(i,w);
i.change(function(){p[u]=f(a(this),w);
b(n,p,j)
})
}else{p[u]=f(i,w);
i.keyup(function(){p[u]=f(i,w);
b(n,p,j)
})
}}}});
b(n,p,j)
})
});
function b(i,m,j){var k=i.closest("li");
if(k.prop("className").match(/\bcol/)){k=a(this).parents("ul")
}if(g(m)){k.show();
j.children(".wrapper-error").children("label").hide()
}else{k.hide();
j.children(".wrapper-error").children("label").hide()
}}function f(i,j){if(i.val()===j){return true
}else{return false
}}function e(j,k){var i=false;
a.each(j,function(){if(a(this).val()===k){i=true
}});
return i
}function g(j){var i=true;
a.each(j,function(k,m){i=(i)?m:false
});
return i
}}
})(jQuery);
(function(a){a.fn.posconstraint=function(d){a.each(a(this),function(k){var j=a(this);
var m=j.find(".posconstraint");
a.each(m,function(){var n=a(this).metadata().posconstraint;
var i={};
a.each(n,function(q,r){var o=j.find("input[name="+q+"], select[name="+q+"]");
if(o.prop("type")==="radio"){var p=o.filter(":checked");
i[q]=f(p,r);
o.change(function(){i[q]=f(a(this),r);
b(m,i,j)
})
}else{if(o.prop("type")==="checkbox"){i[q]=e(o.filter(":checked"),r);
o.change(function(){i[q]=e(o.filter(":checked"),r);
b(m,i,j)
})
}else{if(o.is("select")){i[q]=f(o,r);
o.change(function(){i[q]=f(a(this),r);
b(m,i,j)
})
}else{i[q]=f(o,r);
o.keyup(function(){i[q]=f(o,r);
b(m,i,j)
})
}}}});
b(m,i,j)
})
});
function b(i,k,j){if(g(k)){i.hide()
}else{i.show()
}}function f(i,j){if(i.val()===j){return true
}else{return false
}}function e(j,k){var i=false;
a.each(j,function(){if(a(this).val()===k){i=true
}});
return i
}function g(j){var i=false;
a.each(j,function(k,m){i=(i)||m
});
return i
}}
})(jQuery);
(function(a){a.fn.popupWindow=function(d){var f={height:800,width:585,top:100,left:65,toolbar:0,scrollbars:1,location:0,statusbar:0,menubar:0,resizable:1,open_in:"_blank"};
var e=a.extend(f,d);
a.each(a(this),function(){if(this.tagName==="A"){a(this).click(function(i){var g=this.getAttribute("href");
b(this,g.replace(".html",".popup.html"));
i.preventDefault()
})
}if(this.tagName==="FORM"){a(this).submit(function(){var g="";
e.open_in="popup";
this.target=e.open_in;
if(a(this).hasClass("validate")){if(a(this).valid()){b(this,g)
}}else{b(this,g)
}})
}});
var b=function(i,k){var m=a(i).metadata().popup;
var g=a.extend({},e,m);
if(g.left==="center"){g.left=((screen.width/2)-(g.width/2))
}var j=window.open(k,g.open_in,"height="+g.height+",width="+g.width+",left="+g.left+",top="+g.top+",toolbars="+g.toolbar+",scrollbars="+g.scrollbars+",location="+g.location+",statusbar="+g.statusbar+",menubar="+g.menubar+",resizable="+g.resizable);
if(j!==null){j.focus()
}}
}
})(jQuery);
var s_code=s_code||{};
s_code.fit={init:function(){if(typeof sc_suite!="undefined"){window.s_account=sc_suite
}else{window.s_account="ubs-logdev"
}var o=b(window.s_account);
function i(p){p=p.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var r=new RegExp("[\\?&]"+p+"=([^&#]*)","i"),q=r.exec(location.search);
return q==null?a(p):decodeURIComponent(q[1].replace(/\+/g," "))
}function a(p){if((p=="campID")&&(k("campID")!="")){sc_campID=decodeURIComponent(k("campID").replace(/\+/g," "));
n("campID","ubs.com","/");
return sc_campID
}else{return""
}}function e(x,p,u,y,r){var w=new Date();
w.setTime(w.getTime()+(parseInt(r)*60*1000));
var q="expires="+w.toUTCString();
document.cookie=x+"="+y+"; "+q+"; domain="+p+"; path=/;"
}scCheckTimeDiff=function(r,q){var p=Math.round(((new Date().getTime()/1000)-(r/1000))*10)/10;
if(p>(parseInt(q)*60)){return false
}else{return true
}};
function k(r){var p=new RegExp("[; ]"+r+"=([^\\s;]*)");
var q=(" "+document.cookie).match(p);
if(r&&q){return unescape(q[1])
}return""
}function n(p,q,r){var q=q||document.domain;
var r=r||"/";
document.cookie=p+"=; expires="+ +new Date+"; domain="+q+"; path="+r
}function m(u,r){var p=[];
for(var q=0;
q<u.length;
q++){if(u[q].match(r)){p.push(u[q])
}}return p
}check_localStorage=function(){var p="s_code";
try{localStorage.setItem(p,p);
localStorage.removeItem(p);
return true
}catch(q){return false
}};
flashTrack=function(p){o.prop21=p;
o.tl();
o.events="";
o.linkTrackVars="";
o.linkTrackEvents="None"
};
scflashclicktrack=function(p){var q=b(window.s_account);
q.linkTrackVars="prop3,prop4,prop5,eVar4,eVar5,eVar6,prop51,eVar53,list1,events";
q.linkTrackEvents="None";
q.list1=p;
q.tl("Flash-Click: "+p,"o",p);
q.events="";
q.linkTrackVars="";
q.linkTrackEvents="None"
};
scclicktrack=function(r){var q=b(window.s_account);
q.linkTrackVars="prop3,prop4,prop5,eVar4,eVar5,eVar6,prop51,eVar53,list1,events";
q.linkTrackEvents="event21";
q.events="event21";
q.list1=r;
var p=r.href!=null?q.tl(r.href):"";
if(p==""){q.tl(r,"o",r)
}q.events="";
q.linkTrackVars="";
q.linkTrackEvents="None"
};
scclick=function(p){if(p=="rate"){var q=b(window.s_account);
q.linkTrackVars="events";
q.linkTrackEvents="event10";
q.events="event10";
q.tl(p,"o","Rating");
q.events="";
q.linkTrackVars="";
q.linkTrackEvents="None"
}if(p=="recommendation"){var q=b(window.s_account);
q.linkTrackVars="events";
q.linkTrackEvents="event11";
q.events="event11";
q.tl(p,"o","Recommendation");
q.events="";
q.linkTrackVars="";
q.linkTrackEvents="None"
}if(p=="print"){var q=b(window.s_account);
q.linkTrackVars="events";
q.linkTrackEvents="event12";
q.events="event12";
q.tl(p,"o","Print Page");
q.events="";
q.linkTrackVars="";
q.linkTrackEvents="None"
}};
searchresultpage=function(x,w){var r=b(window.s_account);
r.linkTrackVars="prop3,prop4,prop5,eVar4,eVar5,eVar6,prop51,eVar53,eVar30,eVar36,prop29,prop30,events";
r.linkTrackEvents="event17,event18";
r.events="event17";
r.prop29=x;
r.prop30=w;
var q=r.getPreviousValue(sc_searchphrase,"s_old_sword","");
if(q!=sc_searchphrase){r.events=r.apl(r.events,"event18",",",2)
}var u=x+":"+w;
var p=u.href!=null?r.tl(u.href):"";
if(p==""){r.tl(u,"o","Click on internal search result")
}r.events="";
r.linkTrackVars="";
r.linkTrackEvents="None"
};
scform_answertracking=function(q,y,u){if(typeof q!="undefined"&&q!=""){var x=b(window.s_account);
var z;
if(y=="form success"){x.linkTrackVars="prop3,prop4,prop5,eVar4,eVar5,eVar6,prop51,eVar53,prop18,eVar14,prop45,list1,events";
z=q+": "+y;
if(typeof u!="undefined"&&u!=""){var r=x.split(u,",");
for(var w=0;
w<r.length;
w++){r[w]="fa: "+r[w]
}x.list1=r
}}var p=z.href!=null?x.tl(z.href):"";
if(p==""){x.tl(z,"o","FormTracking_"+z)
}x.events="";
x.linkTrackVars="";
x.linkTrackEvents="None";
x.prop18=undefined;
x.prop43=undefined;
x.prop44=undefined;
x.prop45=undefined;
x.prop46=undefined;
x.list1=undefined
}};
scformtracking=function(z,C,y,p,B){var A=(typeof z!="undefined"&&z!="")?true:false;
if(A&&z=="subscription-manager"){var D=b(window.s_account);
var x;
var w;
if(C=="form success"){if(z=="subscription-manager"){D.linkTrackVars="prop3,prop4,prop5,eVar4,eVar5,eVar6,prop51,eVar53,prop18,eVar14,eVar43,prop45,events";
x="event14";
if(y.search(/sms/i)!=-1){x=D.apl(x,"event23",",",2)
}if(y.search(/mail/i)!=-1){x=D.apl(x,"event24",",",2)
}if(y.search(/mysite/i)!=-1){x=D.apl(x,"event25",",",2)
}w=z+": "+C+": "+y;
D.prop45=C
}else{D.linkTrackVars="prop3,prop4,prop5,eVar4,eVar5,eVar6,prop51,eVar53,prop18,eVar14,prop45,list1,events";
x="event14";
w=z+": "+C;
D.prop45=C;
if(typeof sc_formanswers!="undefined"){var q=D.split(sc_formanswers,",");
for(var u=0;
u<q.length;
u++){q[u]="fa: "+q[u]
}D.list1=q
}}}if(C=="start form"){D.linkTrackVars="prop3,prop4,prop5,eVar4,eVar5,eVar6,prop51,eVar53,prop18,eVar14,eVar43,prop45,events";
x="event13";
w=z+": "+C;
D.prop45=C
}D.linkTrackEvents=x;
D.events=x;
var r=w.href!=null?D.tl(w.href):"";
if(r==""){D.tl(w,"o","FormTracking_"+w)
}D.events="";
D.linkTrackVars="";
D.linkTrackEvents="None";
D.prop18=undefined;
D.prop43=undefined;
D.prop44=undefined;
D.prop45=undefined;
D.prop46=undefined;
D.list1=undefined
}else{if(A){var D=b(window.s_account);
var x;
var w;
if(C=="form success"){D.linkTrackVars="prop3,prop4,prop5,eVar4,eVar5,eVar6,prop51,eVar53,prop18,eVar14,prop45,list1,events";
x=(z=="callmeback-form")?"event14,event48":"event14";
w=z+": "+C;
D.prop45=C
}if(C=="start form"&&typeof y!=="undefined"){D.linkTrackVars="prop3,prop4,prop5,eVar4,eVar5,eVar6,prop51,eVar53,prop18,eVar14,eVar43,prop45,eVar63,events";
x="event52,event13";
w=z+": "+C;
D.prop45=C;
if(typeof y!="undefined"&&y!=""){D.eVar63=D.apl(D.eVar63,y,"|",0)
}else{D.eVar63=D.apl(D.eVar63," ","",0)
}if(typeof z!="undefined"&&z!=""){D.eVar63=D.apl(D.eVar63,z,"|",0)
}else{D.eVar63=D.apl(D.eVar63,"|","",0)
}if(typeof C!="undefined"&&C!=""){D.eVar63=D.apl(D.eVar63,C,"|",0)
}else{D.eVar63=D.apl(D.eVar63,"|","",0)
}if(typeof p!="undefined"&&p!=""){D.eVar63=D.apl(D.eVar63,p,"|",0)
}else{D.eVar63=D.apl(D.eVar63,"|","",0)
}}else{if(C=="start form"){D.linkTrackVars="prop3,prop4,prop5,eVar4,eVar5,eVar6,prop51,eVar53,prop18,eVar14,eVar43,prop45,events";
x="event13";
w=z+": "+C;
D.prop45=C
}}if(C=="error message"){D.linkTrackVars="prop3,prop4,prop5,eVar4,eVar5,eVar6,prop51,eVar53,prop18,eVar14,eVar41,eVar42,eVar43,prop43,prop44,prop45,events";
x="event15";
w=z+": "+C;
D.prop43=B.replace(/^\s+|\s+$/g,"");
D.prop44=p+" ("+y+")";
D.prop45=p+" ("+y+") error"
}if(C=="fftracking"){D.linkTrackVars="prop3,prop4,prop5,eVar4,eVar5,eVar6,prop51,eVar53,prop18,eVar14,eVar44,prop46";
x="";
w=z+": "+C;
D.prop46=p+" ("+y+")"
}if(C=="form step"){D.linkTrackVars="prop3,prop4,prop5,eVar4,eVar5,eVar6,prop51,eVar53,prop18,eVar14,eVar43,prop45,eVar63,events";
x="event52";
w=z+": "+C;
D.prop45=C;
if(typeof y!="undefined"&&y!=""){D.eVar63=D.apl(D.eVar63,y,"|",0)
}else{D.eVar63=D.apl(D.eVar63," ","",0)
}if(typeof z!="undefined"&&z!=""){D.eVar63=D.apl(D.eVar63,z,"|",0)
}else{D.eVar63=D.apl(D.eVar63,"|","",0)
}if(typeof C!="undefined"){D.eVar63=D.apl(D.eVar63,C,"|",0)
}else{D.eVar63=D.apl(D.eVar63,"|","",0)
}if(typeof p!="undefined"&&p!=""){D.eVar63=D.apl(D.eVar63,p,"|",0)
}else{D.eVar63=D.apl(D.eVar63,"|","",0)
}}D.linkTrackEvents=x;
D.events=x;
var r=w.href!=null?D.tl(w.href):"";
if(r==""){D.tl(w,"o","FormTracking_"+w)
}D.events="";
D.linkTrackVars="";
D.linkTrackEvents="None";
D.prop18=undefined;
D.prop43=undefined;
D.prop44=undefined;
D.prop45=undefined;
D.prop46=undefined;
D.list1=undefined;
D.eVar63=undefined
}}};
sc_marketingTouchPoint=function(q,u,y){var x="";
if((q==undefined)||(q==null)){q=0
}if((u==undefined)||(u==null)){u=""
}if((y==undefined)||(y==null)){y=""
}SEArules=["SEM-","-SCO-GOOGLE-","-MOBILE-GOOGLE-","s_kwcid","ef_id"];
var r=0;
while(SEArules[r]){var w=new RegExp(SEArules[r],"gi");
var p=y.match(w);
if(p){x="SEA"
}r++
}if(x==""){SEOrules=["www.google..+url","www.bing..+search","www.baidu..+","search.yahoo..+"];
var r=0;
while(SEOrules[r]){var w=new RegExp(SEOrules[r],"gi");
var p=u.match(w);
if(p){x="SEO"
}r++
}}if(y.match(/NL-/gi)&&x==""){var x="NL"
}if(x==""){Displayrules=["Display-","DS-"];
var r=0;
while(Displayrules[r]){var w=new RegExp(Displayrules[r],"gi");
var p=y.match(w);
if(p){x="Display"
}r++
}}if(y.match(/SM-/gi)&&x==""){var x="Social"
}if(x==""){SocialMediarules=["xanga.com","cafemom.com","yuku.com","hi5.com","bebo.com","ning.com","brightkite.com","tagged.com","mylife.com","myyearbook.com","classmates.com","smugmug.com","fotolog.com","photobucket.com","dailymotion.com","imeem.com","flickr.com","jaiku.com","identi.ca","zooomr.com","12seconds.tv","youtube.com","vimeo.com","flixster.com","diigo.com","mister-wong.com","netvibes.com","backtype.com","slideshare.net","plurk.com","intensedebate.com","disqus.com","tumblr.com","delicious.com","mixx.com","twine.com","yelp.com","reddit.com","stumbleupon.com","digg.com","myspace.com","friendfeed.com","wordpress.com","blogspot.com","livejournal.com","friendster.com","orkut.com","plus.google.com","twitter.com","linkedin.com","facebook.com","xing.de","t.co"];
var r=0;
while(SocialMediarules[r]){var w=new RegExp(SocialMediarules[r],"gi");
var p=u.match(w);
if(p){x="Social"
}r++
}}if(y.match(/RSS-/gi)&&x==""){var x="RSS"
}if(y.match(/cdm-/gi)&&x==""){var x="CDM"
}if(u.match(/ubs\.com/)&&x==""&&q==1){var x="Internal"
}if(u.match(/ubs\.net/)&&x==""&&q==1){var x="Internal"
}if(u==""&&x==""&&q==1){var x="DirectTypeIn"
}if(u&&x==""&&q==1){var x="ReferringDomains"
}return x
};
applicationUsertrack=function(q){if(typeof q=="undefined"){q={};
q.innerHTML="undefined link"
}var p=b(window.s_account);
p.trackExternalLinks=false;
p.linkTrackVars="events";
p.linkTrackEvents="event39";
p.events="event39";
p.tl(this,"o","ApplicationUserClick: "+q.innerHTML);
p.events="";
p.linkTrackVars="";
p.linkTrackEvents="None"
};
sc_optout=function(p){if(p=="user_preferences"){var q=b(window.s_account);
q.linkTrackVars="events";
q.linkTrackEvents="event41";
q.events="event41";
q.tl(p,"o","Opt-Out: User Preferences");
q.events="";
q.linkTrackVars="";
q.linkTrackEvents="None"
}if(p=="tracking"){var q=b(window.s_account);
q.linkTrackVars="events";
q.linkTrackEvents="event42";
q.events="event42";
q.tl(p,"o","Opt-Out: Tracking");
q.events="";
q.linkTrackVars="";
q.linkTrackEvents="None"
}};
hp_scroll_tracking=function(){o.linkTrackVars="prop3,prop4,prop5,eVar4,eVar5,eVar6,prop51,eVar53,events";
o.linkTrackEvents="event47";
o.events="event47";
o.tl("HP Scroll Tracking","o","HP Scroll Tracking");
o.events="";
o.linkTrackVars="";
o.linkTrackEvents="None"
};
hp_promotions_tracking=function(r,p,w){o.linkTrackVars="prop3,prop4,prop5,eVar4,eVar5,eVar6,prop19,eVar19,prop20,eVar20,prop51,eVar53,prop58,eVar58,list2";
o.linkTrackEvents="None";
sc_tags=undefined;
var q=r.split("/").pop();
p=p.replace(/,/g,"");
if(p!=""){o.list2="hp_p:"+p.replace(/\|/g,",hp_p:")
}o.eVar58=q+":"+w;
o.prop58=o.eVar58;
window.sc_hp_propmotion=true;
if(check_localStorage()){var u='{"prop58":"'+o.prop58+'","eVar58":"'+o.eVar58+'","list2":"'+o.list2+'","time":"'+new Date().getTime()+'"}';
window.localStorage.setItem("hp_promotions",u)
}else{var u='{"prop58":"'+o.prop58+'","eVar58":"'+o.eVar58+'","list2":"'+o.list2+'","time":"'+new Date().getTime()+'"}';
e("hp_promotions",document.location.hostname,"/",encodeURIComponent(u),1)
}o.list2="";
o.prop58="";
o.events="";
o.linkTrackVars="";
o.linkTrackEvents="None"
};
hp_link_tracking=function(p,r,u){o.linkTrackVars="prop3,prop4,prop5,eVar4,eVar5,eVar6,prop19,eVar19,prop20,eVar20,prop51,eVar53,list2";
o.linkTrackEvents="None";
sc_tags=undefined;
u=u.split("|");
var q=u[1].replace(/\.html$|\.htm$|^htt(p|ps):\/\//,"").split("/");
q=q.slice(Math.max(q.length-4,0)).join("/");
u=u[0]+" / .."+q;
u=u.replace(/,/g,"");
p=p.replace(/,/g,"");
r=r.replace(/,/g,"");
o.list2="l_t:"+p+",l_a:"+r+",l_d:"+u;
window.sc_hp_clicktrack=true;
if(check_localStorage()){var w='{"list2":"'+o.list2+'","time":"'+new Date().getTime()+'"}';
window.localStorage.setItem("hp_link",w)
}else{var w='{"list2":"'+o.list2+'","time":"'+new Date().getTime()+'"}';
e("hp_link",document.location.hostname,"/",encodeURIComponent(w),1)
}o.list2="";
o.events="";
o.linkTrackVars="";
o.linkTrackEvents="None"
};
sc_clicktrack=function(u,p,w){var r="";
if(typeof q==="undefined"){var q=b(window.s_account)
}q.linkTrackVars="prop53,prop24,prop51,eVar61,eVar59,eVar53";
q.linkTrackEvents="None";
if(typeof u!="undefined"&&u!=""){if(typeof p!="undefined"&&p!=""){q.prop53=u+","+p;
q.eVar61="D=c53"
}else{q.prop53=u;
q.eVar61="D=c53"
}}else{if(typeof p!="undefined"&&p!=""){q.prop53=p;
q.eVar61="D=c53"
}}if(typeof w!="undefined"&&w!=""){q.prop24=w;
q.eVar59="D=c24";
r=w
}q.tl(this,"o","Function Area: "+r);
q.prop53=q.prop24=q.eVar59=q.eVar61=undefined;
q.events="";
q.linkTrackVars="";
q.linkTrackEvents="None"
};
var j=false;
scSocialBookmarks=function(r,q,w,A,z,x,u,p){var y=b(window.s_account);
y.eVar62=undefined;
y.events="";
y.linkTrackVars="prop3,prop4,prop5,eVar4,eVar5,eVar6,prop51,eVar53,eVar45,eVar62,prop21,prop32,events";
y.linkTrackEvents="event49";
y.events="event49";
if(y.linkURL){y.eVar62=y.linkURL
}else{y.eVar62="D=pev1"
}if(q){y.prop32=y.apl(y.prop32,q,0);
y.prop21=y.apl(y.prop21,q,0)
}else{y.prop32=y.apl(y.prop32,"SBM","--",0);
y.prop21=y.apl(y.prop21,"SBM","--",0)
}if(w){if(w==="V"){w="Video component"
}if(w==="I"){w="Text image component"
}if(w==="P"){w="Stand-alone component"
}y.prop32=y.apl(y.prop32,w,"--",0)
}else{y.prop32=y.apl(y.prop32,"N","--",0)
}if(x){y.prop32=y.apl(y.prop32,x,"--",0)
}else{y.prop32=y.apl(y.prop32,"N","--",0)
}if(p){y.prop32=y.apl(y.prop32,p,"--",0)
}else{y.prop32=y.apl(y.prop32,"N","--",0)
}if(A){y.prop21=y.apl(y.prop21,A,"--",0)
}else{y.prop21=y.apl(y.prop32,"N","--",0)
}if(z){y.prop21=y.apl(y.prop21,z,"--",0)
}else{y.prop21=y.apl(y.prop32,"N","--",0)
}if(u){y.prop21=y.apl(y.prop21,u,"--",0)
}else{y.prop21=y.apl(y.prop32,"N","--",0)
}y.tl(r,"e");
j=false;
y.prop21=undefined;
y.prop32=undefined
};
o.charSet="UTF-8";
o.currencyCode="CHF";
o.trackDownloadLinks=true;
o.trackExternalLinks=true;
o.trackInlineStats=true;
o.linkDownloadFileTypes="exe,zip,rar,7z,gz,avi,wmv,mp4,mp3,wma,wav,pdf,doc,docx,xls,xlsx,ppt,pptx,rss,xml";
o.linkInternalFilters="javascript:,www.ubs.com,"+document.domain;
o.linkLeaveQueryString=false;
o.linkTrackVars="None";
o.linkTrackEvents="None";
o.dstStart="1/1/2009";
o.dstEnd="1/1/2009";
o.currentYear=new Date().getFullYear();
if(typeof sc_postviewtrack!="undefined"){o.list1=sc_postviewtrack
}o.usePlugins=true;
function g(D){D.campaign=i("campID");
var R=sc_marketingTouchPoint(D.getVisitStart("s_visit"),document.referrer,location.search);
if(R){var x=D.getAndPersistValue(F,"s_mtouch",60);
var w=x.match(/\|/gi);
if(w&&w.length>8){x=x.substring(x.search(/\|/)+1)
}if(x.length>1){x=x+"|"
}R=x+R;
D.getAndPersistValue(R,"s_mtouch",60);
D.eVar64=R
}if(k("sc-murl")!=""){var E=D.split(k("sc-murl"),"---");
D.prop33=E[0];
if(E[1]){D.referrer="http://"+E[1]
}n("sc-murl","www.ubs.com","/")
}var N;
var G;
var C;
if(typeof sc_tags!="undefined"){var r=D.split(sc_tags,",");
N=m(r,":division/")[0];
if(typeof N!="undefined"){D.prop34=N.replace("content:division/","")
}D.list2=sc_tags
}if(typeof window.sc_hp_propmotion=="undefined"){if(check_localStorage()){json_hp_promotions=window.localStorage.getItem("hp_promotions");
window.localStorage.removeItem("hp_promotions")
}else{json_hp_promotions=decodeURIComponent(k("hp_promotions"));
n("hp_promotions",document.location.hostname,"/")
}if(typeof json_hp_promotions!="undefined"&&json_hp_promotions!=null&&json_hp_promotions!=""&&scCheckTimeDiff(json_hp_promotions.time,1)){D.events=D.apl(D.events,"event50",",",2);
json_hp_promotions=JSON.parse(json_hp_promotions);
if(typeof json_hp_promotions.eVar58!="undefined"&&json_hp_promotions.eVar58!="undefined"){D.prop58=json_hp_promotions.eVar58;
D.eVar58=json_hp_promotions.eVar58
}if(typeof json_hp_promotions.list2!="undefined"&&json_hp_promotions.list2!=""){if(typeof D.list2!="undefined"&&D.list2!=""){D.list2+=","+json_hp_promotions.list2
}else{D.list2=json_hp_promotions.list2
}}}}if(typeof window.sc_hp_clicktrack=="undefined"){if(check_localStorage()){json_hp_link=window.localStorage.getItem("hp_link");
window.localStorage.removeItem("hp_link")
}else{json_hp_link=decodeURIComponent(k("hp_link"));
n("hp_link",document.location.hostname,"/")
}if(typeof json_hp_link!="undefined"&&json_hp_link!=null&&json_hp_link!=""&&scCheckTimeDiff(json_hp_link.time,1)){D.events=D.apl(D.events,"event51",",",2);
json_hp_link=JSON.parse(json_hp_link);
if(typeof json_hp_link.list2!="undefined"&&json_hp_link.list2!=""){if(typeof D.list2!="undefined"&&D.list2!=""){D.list2+=","+json_hp_link.list2
}else{D.list2=json_hp_link.list2
}}}}if(typeof sc_breadcrumb!="undefined"){if(sc_breadcrumb.match(/\|/)){var P=D.split(sc_breadcrumb,"|");
D.prop7=D.split(sc_breadcrumb,"|").pop()
}else{if(sc_breadcrumb.match(",")){var P=D.split(sc_breadcrumb,",");
D.prop7=D.split(sc_breadcrumb,",").pop()
}}if(typeof P!="undefined"&&P instanceof Array){G=P[1];
if(typeof P[2]!="undefined"){C=P[2]
}D.eVar7="D=c7";
D.prop35=G;
D.prop36=C
}}if(typeof sc_contenttype!="undefined"){sc_contenttype=sc_contenttype.replace("ubs/fit/components/pages/","");
D.prop17=sc_contenttype
}D.hier1=window.location.hostname+location.pathname.toLowerCase();
if(typeof G!="undefined"&&typeof sc_contenttype!="undefined"&&typeof sc_country!="undefined"&&typeof C!="undefined"){D.channel=(sc_country+":"+G+":"+C+":"+sc_contenttype).toLowerCase();
D.hier2="D=ch";
var z=sc_breadcrumb.match(/\(.*?\)/);
D.hier3=sc_breadcrumb.replace(/\|/g,":").replace(/\(.*?\)/g,z).toLowerCase();
if(typeof sc_title!="undefined"){D.prop14=sc_title
}}else{if(typeof sc_breadcrumb!="undefined"&&sc_breadcrumb==""){D.channel=sc_country+":homepage";
D.hier2="D=ch";
if(typeof sc_breadcrumb!="undefined"){var z=sc_breadcrumb.match(/\(.*?\)/);
D.hier3=sc_breadcrumb.replace(/\|/g,":").replace(/\(.*?\)/g,z).toLowerCase()
}if(typeof sc_title!="undefined"){D.prop14=sc_title
}}else{if(typeof sc_breadcrumb!="undefined"){var z=sc_breadcrumb.match(/\(.*?\)/);
D.hier3=sc_breadcrumb.replace(/\|/g,":").replace(/\(.*?\)/g,z).toLowerCase();
if(sc_breadcrumb.match(/\|/)){D.channel=sc_country+":"+D.split(sc_breadcrumb,"|")[1].toLowerCase();
D.hier2="D=ch"
}else{if(sc_breadcrumb.match(",")){D.channel=sc_country+":"+D.split(sc_breadcrumb,",")[1].toLowerCase();
D.hier2="D=ch"
}}}if(typeof sc_title!="undefined"){D.prop14=sc_title
}}}if(typeof sc_contentid!="undefined"){D.prop15=sc_contentid
}if(typeof sc_rendition!="undefined"){D.prop16=sc_rendition
}if(typeof sc_formname!="undefined"){D.prop18=sc_formname
}if(typeof sc_country!="undefined"){D.prop19=sc_country
}if(typeof sc_lang!="undefined"){D.prop20=sc_lang
}if(typeof sc_cugname!="undefined"){D.prop23=sc_cugname
}if(typeof sc_newspath!="undefined"){D.prop25=sc_newspath
}if(typeof sc_livecopymaster!="undefined"){D.prop49=sc_livecopymaster
}if(typeof sc_searchphrase!="undefined"){D.prop27=sc_searchphrase;
if(sc_searchphrase!=""){D.events=D.apl(D.events,"event16",",",2)
}}if(typeof sc_searchresults!="undefined"){D.prop28=sc_searchresults;
if(sc_searchresults=="0"){D.events=D.apl(D.events,"event19",",",2)
}}if(typeof sc_searchfilter!="undefined"){D.prop31=sc_searchfilter
}if(typeof sc_postviewtrack!="undefined"){if(sc_postviewtrack!=""){D.events=D.apl(D.events,"event20",",",2)
}}var y=D.getAndPersistValue(y,"s_gpv_url2",0);
var L;
if(y==document.URL){D.events=D.apl(D.events,"event26",",",2);
L="1"
}var F=D.getAndPersistValue(F,"s_gpv_url",0);
D.getAndPersistValue(F,"s_gpv_url2",0);
D.prop41=D.getPreviousValue(D.channel,"s_gpv_channel","");
D.prop42=D.getPreviousValue(document.URL.replace(/\?.*/,"").replace(/#.*/,""),"s_gpv_url","");
if(L=="1"){D.prop6=D.prop42
}D.prop37=D.getNewRepeat(60,"s_gnr");
D.prop38=D.getTimeParting("h");
D.prop39=D.getTimeParting("d");
D.prop40=D.getTimeParting("w");
D.prop48=D.getDaysSinceLastVisit("s_lv");
D.server=window.location.protocol+"//"+window.location.hostname;
var O=document.URL.substring(document.URL.lastIndexOf("/")+1,document.URL.length);
var B=O.replace(/\?.*/,"").replace(/#.*/,"");
if(document.URL.replace(/.*:\/\//,"").replace(/.*?\//,"/").replace(O,B).length>99){if(B.length>99){D.eVar4=B
}else{D.eVar4=document.URL.replace(/.*:\/\//,"").replace(/.*?\//,"/").substring(0,97-B.length)+".."+B
}}else{D.eVar4=document.URL.replace(/.*:\/\//,"").replace(/.*?\//,"/").replace(O,B)
}D.eVar5="D=ch";
D.eVar6=document.URL.replace(/.*:\/\//,"").replace(/.*?\//,"/").replace("/"+sc_country+"/","/").replace("/"+sc_lang+"/","/").replace(O,"");
if(document.URL.match("/"+sc_country+"/"+sc_lang+".html")){D.prop51="homepage"
}else{D.prop51=document.URL.replace(/.*:\/\//,"").replace(/.*?\//,"/").replace("/"+sc_country+"/","/").replace("/"+sc_lang+"/","").replace(/\?.*/,"").replace(/#.*/,"").replace(/\.html/,"")
}D.eVar53="D=c51";
if(location.pathname.toLowerCase().match(/\/$/)){D.hier1=window.location.hostname+location.pathname.toLowerCase()+"index"
}if(typeof sc_errorpage!="undefined"){if(sc_errorpage=="errorPage"){D.prop26=document.title
}}if(typeof sc_loggedin!="undefined"){if(sc_loggedin=="true"){D.prop22="logged in"
}else{D.prop22="logged out"
}}if(D.linkType=="d"){D.linkTrackVars="prop3,prop4,prop5,eVar4,eVar5,eVar6,prop51,eVar53,eVar45,prop47,events";
D.linkTrackEvents="event22";
D.events="event22";
var I=D.linkURL.substring(D.linkURL.lastIndexOf("/")+1,D.linkURL.length);
D.prop47=I;
D.eVar45="D=c47"
}if(D.linkType=="e"&&((D.linkObject.href.indexOf("campID%3DSBM")!=-1)||(D.linkObject.href.indexOf("campID=SBM")!=-1))&&!j){D.linkType=undefined;
j=true
}if(D.linkType=="e"){D.eVar62=undefined;
D.events="";
D.linkTrackVars="prop3,prop4,prop5,eVar4,eVar5,eVar6,prop51,eVar53,eVar45,eVar62,prop21,prop32,events";
D.linkTrackEvents="event49";
D.events="event49";
if(D.linkURL){D.eVar62=D.linkURL
}else{D.eVar62="D=pev1"
}}var p=k("s_pvtrack");
if(p!==""){p=p.split("|");
var u=[];
var K=p.slice("-10");
for(var J=0;
J<K.length;
J++){u.push(K[J].split(";")[0])
}D.eVar54=u.join(" > ");
var M=p[p.length-1].split(";");
if(i("campID")!==""&&(new Date().getTime()-parseInt(M[3],10))<=600000){D.eVar55=M.slice(0,3).join(" | ")+" | Click"
}else{D.eVar55=M.slice(0,3).join(" | ")+" | View"
}D.eVar56=p.length+" contacts";
var Q=[];
for(var J=0;
J<p.length;
J++){params=p[J].split(";").slice(0,3);
params[0]="p:"+params[0];
params[1]="c:"+params[1];
params[2]="a:"+params[2];
Q.push(params)
}var A={};
Q=Q.join().split(",");
for(var J=0;
J<Q.length;
J++){if(!A[Q[J]]){A[Q[J]]=0
}A[Q[J]]+=1
}var q=[];
for(var H in A){q.push(H+"|"+A[H])
}D.list3=q.join(",");
n("s_pvtrack","ubs.com","/")
}if(typeof sc_page_load1!="undefined"){D.prop59=Math.round(((new Date().getTime()/1000)-(sc_page_load1/1000))*10)/10
}if(typeof sc_conSiteIdentifier!=="undefined"){D.contextData.sc_conSI=sc_conSiteIdentifier;
if(typeof sc_conFirstValue!="undefined"){D.contextData.sc_conFV=sc_conFirstValue
}if(typeof sc_conSecondValue!="undefined"){D.contextData.sc_conSV=sc_conSecondValue
}if(typeof sc_conThirdValue!="undefined"){D.contextData.sc_conTV=sc_conThirdValue
}}if(D.prop18&&!D.eVar14){D.eVar14="D=c18"
}if(D.prop19&&!D.eVar19){D.eVar19="D=c19"
}if(D.prop20&&!D.eVar20){D.eVar20="D=c20"
}if(D.prop43&&!D.eVar41){D.eVar41="D=c43"
}if(D.prop44&&!D.eVar42){D.eVar42="D=c44"
}if(D.prop45&&!D.eVar43){D.eVar43="D=c45"
}if(D.prop46&&!D.eVar44){D.eVar44="D=c46"
}if(D.prop29){D.eVar30="D=c29"
}if(D.prop30){D.eVar36="D=c30"
}if(D.eVar4&&D.eVar5&&D.eVar6){D.prop3="D=v4";
D.prop4="D=ch";
D.prop5="D=v6"
}}o.doPlugins=g;
o.getNewRepeat=new Function("d","cn","var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length==0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'New';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");
o.split=new Function("l","d","var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
o.apl=new Function("l","v","d","u","var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)l=l?l+d+v:v;return l");
o.getTimeParting=new Function("t","z","var s=this,cy;dc=new Date('1/1/2000');if(dc.getDay()!=6||dc.getMonth()!=0){return'Data Not Available'}else{;z=parseFloat(z);var dsts=new Date(s.dstStart);var dste=new Date(s.dstEnd);fl=dste;cd=new Date();if(cd>dsts&&cd<fl){z=z+1}else{z=z};utc=cd.getTime();tz=new Date(utc);thisy=tz.getFullYear();var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];if(thisy!=s.currentYear){return'Data Not Available'}else{;thish=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow=days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>30){mint='30'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){thish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+':'+mint+ap;if(t=='h'){return timestring}if(t=='d'){return dow};if(t=='w'){return dt}}};");
o.getPreviousValue=new Function("v","c","el","var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
o.getDaysSinceLastVisit=new Function("c","var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getTime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.setTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s.c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) return f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s!=f5) return '';else return cval_s;");
o.getVisitStart=new Function("c","var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);if(s.c_r(c)){v=0}if(!s.c_w(c,1,t)){s.c_w(c,1,0)}if(!s.c_r(c)){v=0}return v;");
o.getAndPersistValue=new Function("v","c","e","var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if(v)s.c_w(c,v,e?a:0);return s.c_r(c);");
o.visitorNamespace="ubsextern";
o.trackingServer=sc_trackingServer;
function d(){var D=this;
D.version="1.4.3";
var A=window;
A.s_c_in||(A.s_c_il=[],A.s_c_in=0);
D._il=A.s_c_il;
D._in=A.s_c_in;
D._il[D._in]=D;
A.s_c_in++;
D._c="s_c";
var w=A.yb;
w||(w=null);
var p=A,z,F;
try{for(z=p.parent,F=p.location;
z&&z.location&&F&&""+z.location!=""+F&&p.location&&""+z.location!=""+p.location&&z.location.host==F.host;
){p=z,z=p.parent
}}catch(E){}D.nb=function(r){try{console.log(r)
}catch(q){}};
D.za=function(q){return""+parseInt(q)==""+q
};
D.replace=function(r,q,u){return !r||0>r.indexOf(q)?r:r.split(q).join(u)
};
D.escape=function(u){var q,r;
if(!u){return u
}u=encodeURIComponent(u);
for(q=0;
7>q;
q++){r="+~!*()'".substring(q,q+1),0<=u.indexOf(r)&&(u=D.replace(u,r,"%"+r.charCodeAt(0).toString(16).toUpperCase()))
}return u
};
D.unescape=function(r){if(!r){return r
}r=0<=r.indexOf("+")?D.replace(r,"+"," "):r;
try{return decodeURIComponent(r)
}catch(q){}return unescape(r)
};
D.eb=function(){var u=A.location.hostname,q=D.fpCookieDomainPeriods,r;
q||(q=D.cookieDomainPeriods);
if(u&&!D.cookieDomain&&!/^[0-9.]+$/.test(u)&&(q=q?parseInt(q):2,q=2<q?q:2,r=u.lastIndexOf("."),0<=r)){for(;
0<=r&&1<q;
){r=u.lastIndexOf(".",r-1),q--
}D.cookieDomain=0<r?u.substring(r):u
}return D.cookieDomain
};
D.c_r=D.cookieRead=function(x){x=D.escape(x);
var q=" "+D.d.cookie,u=q.indexOf(" "+x+"="),r=0>u?u:q.indexOf(";",u);
x=0>u?"":D.unescape(q.substring(u+2+x.length,0>r?q.length:r));
return"[[B]]"!=x?x:""
};
D.c_w=D.cookieWrite=function(H,q,y){var u=D.eb(),x=D.cookieLifetime,r;
q=""+q;
x=x?(""+x).toUpperCase():"";
y&&"SESSION"!=x&&"NONE"!=x&&((r=""!=q?parseInt(x?x:0):-60)?(y=new Date,y.setTime(y.getTime()+1000*r)):1==y&&(y=new Date,r=y.getYear(),y.setYear(r+5+(1900>r?1900:0))));
return H&&"NONE"!=x?(D.d.cookie=H+"="+D.escape(""!=q?q:"[[B]]")+"; path=/;"+(y&&"SESSION"!=x?" expires="+y.toGMTString()+";":"")+(u?" domain="+u+";":""),D.cookieRead(H)==q):0
};
D.F=[];
D.ba=function(I,r,H){if(D.ta){return 0
}D.maxDelay||(D.maxDelay=250);
var x=0,y=(new Date).getTime()+D.maxDelay,u=D.d.visibilityState,q=["webkitvisibilitychange","visibilitychange"];
u||(u=D.d.webkitVisibilityState);
if(u&&"prerender"==u){if(!D.ca){for(D.ca=1,H=0;
H<q.length;
H++){D.d.addEventListener(q[H],function(){var J=D.d.visibilityState;
J||(J=D.d.webkitVisibilityState);
"visible"==J&&(D.ca=0,D.delayReady())
})
}}x=1;
y=0
}else{H||D.l("_d")&&(x=1)
}x&&(D.F.push({m:I,a:r,t:y}),D.ca||setTimeout(D.delayReady,D.maxDelay));
return x
};
D.delayReady=function(){var u=(new Date).getTime(),q=0,r;
for(D.l("_d")?q=1:D.na();
0<D.F.length;
){r=D.F.shift();
if(q&&!r.t&&r.t>u){D.F.unshift(r);
setTimeout(D.delayReady,parseInt(D.maxDelay/2));
break
}D.ta=1;
D[r.m].apply(D,r.a);
D.ta=0
}};
D.setAccount=D.sa=function(u){var q,r;
if(!D.ba("setAccount",arguments)){if(D.account=u,D.allAccounts){for(q=D.allAccounts.concat(u.split(",")),D.allAccounts=[],q.sort(),r=0;
r<q.length;
r++){0!=r&&q[r-1]==q[r]||D.allAccounts.push(q[r])
}}else{D.allAccounts=u.split(",")
}}};
D.foreachVar=function(I,r){var H,x,y,u,q="";
y=x="";
if(D.lightProfileID){H=D.J,(q=D.lightTrackVars)&&(q=","+q+","+D.ga.join(",")+",")
}else{H=D.c;
if(D.pe||D.linkType){q=D.linkTrackVars,x=D.linkTrackEvents,D.pe&&(y=D.pe.substring(0,1).toUpperCase()+D.pe.substring(1),D[y]&&(q=D[y].xb,x=D[y].wb))
}q&&(q=","+q+","+D.A.join(",")+",");
x&&q&&(q+=",events,")
}r&&(r=","+r+",");
for(x=0;
x<H.length;
x++){y=H[x],(u=D[y])&&(!q||0<=q.indexOf(","+y+","))&&(!r||0<=r.indexOf(","+y+","))&&I(y,u)
}};
D.L=function(K,L,J,H,I){var y="",u,q,x,M,r=0;
"contextData"==K&&(K="c");
if(L){for(u in L){if(!(Object.prototype[u]||I&&u.substring(0,I.length)!=I)&&L[u]&&(!J||0<=J.indexOf(","+(H?H+".":"")+u+","))){x=!1;
if(r){for(q=0;
q<r.length;
q++){u.substring(0,r[q].length)==r[q]&&(x=!0)
}}if(!x&&(""==y&&(y+="&"+K+"."),q=L[u],I&&(u=u.substring(I.length)),0<u.length)){if(x=u.indexOf("."),0<x){q=u.substring(0,x),x=(I?I:"")+q+".",r||(r=[]),r.push(x),y+=D.L(q,L,J,H,x)
}else{if("boolean"==typeof q&&(q=q?"true":"false"),q){if("retrieveLightData"==H&&0>I.indexOf(".contextData.")){switch(x=u.substring(0,4),M=u.substring(4),u){case"transactionID":u="xact";
break;
case"channel":u="ch";
break;
case"campaign":u="v0";
break;
default:D.za(M)&&("prop"==x?u="c"+M:"eVar"==x?u="v"+M:"list"==x?u="l"+M:"hier"==x&&(u="h"+M,q=q.substring(0,255)))
}}y+="&"+D.escape(u)+"="+D.escape(q)
}}}}}""!=y&&(y+="&."+K)
}return y
};
D.gb=function(){var O="",P,N,L,M,K,I,y,J,H="",x="",u=N="";
if(D.lightProfileID){P=D.J,(H=D.lightTrackVars)&&(H=","+H+","+D.ga.join(",")+",")
}else{P=D.c;
if(D.pe||D.linkType){H=D.linkTrackVars,x=D.linkTrackEvents,D.pe&&(N=D.pe.substring(0,1).toUpperCase()+D.pe.substring(1),D[N]&&(H=D[N].xb,x=D[N].wb))
}H&&(H=","+H+","+D.A.join(",")+",");
x&&(x=","+x+",",H&&(H+=",events,"));
D.events2&&(u+=(""!=u?",":"")+D.events2)
}D.AudienceManagement&&D.AudienceManagement.isReady()&&(O+=D.L("d",D.AudienceManagement.getEventCallConfigParams()));
for(N=0;
N<P.length;
N++){M=P[N];
K=D[M];
L=M.substring(0,4);
I=M.substring(4);
!K&&"events"==M&&u&&(K=u,u="");
if(K&&(!H||0<=H.indexOf(","+M+","))){switch(M){case"supplementalDataID":M="sdid";
break;
case"timestamp":M="ts";
break;
case"dynamicVariablePrefix":M="D";
break;
case"visitorID":M="vid";
break;
case"marketingCloudVisitorID":M="mid";
break;
case"analyticsVisitorID":M="aid";
break;
case"audienceManagerLocationHint":M="aamlh";
break;
case"audienceManagerBlob":M="aamb";
break;
case"authState":M="as";
break;
case"pageURL":M="g";
255<K.length&&(D.pageURLRest=K.substring(255),K=K.substring(0,255));
break;
case"pageURLRest":M="-g";
break;
case"referrer":M="r";
break;
case"vmk":case"visitorMigrationKey":M="vmt";
break;
case"visitorMigrationServer":M="vmf";
D.ssl&&D.visitorMigrationServerSecure&&(K="");
break;
case"visitorMigrationServerSecure":M="vmf";
!D.ssl&&D.visitorMigrationServer&&(K="");
break;
case"charSet":M="ce";
break;
case"visitorNamespace":M="ns";
break;
case"cookieDomainPeriods":M="cdp";
break;
case"cookieLifetime":M="cl";
break;
case"variableProvider":M="vvp";
break;
case"currencyCode":M="cc";
break;
case"channel":M="ch";
break;
case"transactionID":M="xact";
break;
case"campaign":M="v0";
break;
case"latitude":M="lat";
break;
case"longitude":M="lon";
break;
case"resolution":M="s";
break;
case"colorDepth":M="c";
break;
case"javascriptVersion":M="j";
break;
case"javaEnabled":M="v";
break;
case"cookiesEnabled":M="k";
break;
case"browserWidth":M="bw";
break;
case"browserHeight":M="bh";
break;
case"connectionType":M="ct";
break;
case"homepage":M="hp";
break;
case"events":u&&(K+=(""!=K?",":"")+u);
if(x){for(I=K.split(","),K="",L=0;
L<I.length;
L++){y=I[L],J=y.indexOf("="),0<=J&&(y=y.substring(0,J)),J=y.indexOf(":"),0<=J&&(y=y.substring(0,J)),0<=x.indexOf(","+y+",")&&(K+=(K?",":"")+I[L])
}}break;
case"events2":K="";
break;
case"contextData":O+=D.L("c",D[M],H,M);
K="";
break;
case"lightProfileID":M="mtp";
break;
case"lightStoreForSeconds":M="mtss";
D.lightProfileID||(K="");
break;
case"lightIncrementBy":M="mti";
D.lightProfileID||(K="");
break;
case"retrieveLightProfiles":M="mtsr";
break;
case"deleteLightProfiles":M="mtsd";
break;
case"retrieveLightData":D.retrieveLightProfiles&&(O+=D.L("mts",D[M],H,M));
K="";
break;
default:D.za(I)&&("prop"==L?M="c"+I:"eVar"==L?M="v"+I:"list"==L?M="l"+I:"hier"==L&&(M="h"+I,K=K.substring(0,255)))
}K&&(O+="&"+M+"="+("pev"!=M.substring(0,3)?D.escape(K):K))
}"pev3"==M&&D.e&&(O+=D.e)
}return O
};
D.u=function(r){var q=r.tagName;
if("undefined"!=""+r.Bb||"undefined"!=""+r.rb&&"HTML"!=(""+r.rb).toUpperCase()){return""
}q=q&&q.toUpperCase?q.toUpperCase():"";
"SHAPE"==q&&(q="");
q&&(("INPUT"==q||"BUTTON"==q)&&r.type&&r.type.toUpperCase?q=r.type.toUpperCase():!q&&r.href&&(q="A"));
return q
};
D.va=function(r){var q=r.href?r.href:"",y,u,x;
y=q.indexOf(":");
u=q.indexOf("?");
x=q.indexOf("/");
q&&(0>y||0<=u&&y>u||0<=x&&y>x)&&(u=r.protocol&&1<r.protocol.length?r.protocol:l.protocol?l.protocol:"",y=l.pathname.lastIndexOf("/"),q=(u?u+"//":"")+(r.host?r.host:l.host?l.host:"")+("/"!=h.substring(0,1)?l.pathname.substring(0,0>y?0:y)+"/":"")+q);
return q
};
D.G=function(H){var q=D.u(H),y,u,x="",r=0;
return q&&(y=H.protocol,u=H.onclick,!H.href||"A"!=q&&"AREA"!=q||u&&y&&!(0>y.toLowerCase().indexOf("javascript"))?u?(x=D.replace(D.replace(D.replace(D.replace(""+u,"\r",""),"\n",""),"\t","")," ",""),r=2):"INPUT"==q||"SUBMIT"==q?(H.value?x=H.value:H.innerText?x=H.innerText:H.textContent&&(x=H.textContent),r=3):H.src&&"IMAGE"==q&&(x=H.src):x=D.va(H),x)?{id:x.substring(0,100),type:r}:0
};
D.zb=function(u){for(var q=D.u(u),r=D.G(u);
u&&!r&&"BODY"!=q;
){if(u=u.parentElement?u.parentElement:u.parentNode){q=D.u(u),r=D.G(u)
}}r&&"BODY"!=q||(u=0);
u&&(q=u.onclick?""+u.onclick:"",0<=q.indexOf(".tl(")||0<=q.indexOf(".trackLink("))&&(u=0);
return u
};
D.qb=function(){var N,O,M=D.linkObject,K=D.linkType,L=D.linkURL,J,I;
D.ha=1;
M||(D.ha=0,M=D.clickObject);
if(M){N=D.u(M);
for(O=D.G(M);
M&&!O&&"BODY"!=N;
){if(M=M.parentElement?M.parentElement:M.parentNode){N=D.u(M),O=D.G(M)
}}O&&"BODY"!=N||(M=0);
if(M){var y=M.onclick?""+M.onclick:"";
if(0<=y.indexOf(".tl(")||0<=y.indexOf(".trackLink(")){M=0
}}}else{D.ha=1
}!L&&M&&(L=D.va(M));
L&&!D.linkLeaveQueryString&&(J=L.indexOf("?"),0<=J&&(L=L.substring(0,J)));
if(!K&&L){var H=0,x=0,u;
if(D.trackDownloadLinks&&D.linkDownloadFileTypes){for(y=L.toLowerCase(),J=y.indexOf("?"),I=y.indexOf("#"),0<=J?0<=I&&I<J&&(J=I):J=I,0<=J&&(y=y.substring(0,J)),J=D.linkDownloadFileTypes.toLowerCase().split(","),I=0;
I<J.length;
I++){(u=J[I])&&y.substring(y.length-(u.length+1))=="."+u&&(K="d")
}}if(D.trackExternalLinks&&!K&&(y=L.toLowerCase(),D.ya(y)&&(D.linkInternalFilters||(D.linkInternalFilters=A.location.hostname),J=0,D.linkExternalFilters?(J=D.linkExternalFilters.toLowerCase().split(","),H=1):D.linkInternalFilters&&(J=D.linkInternalFilters.toLowerCase().split(",")),J))){for(I=0;
I<J.length;
I++){u=J[I],0<=y.indexOf(u)&&(x=1)
}x?H&&(K="e"):H||(K="e")
}}D.linkObject=M;
D.linkURL=L;
D.linkType=K;
if(D.trackClickMap||D.trackInlineStats){D.e="",M&&(K=D.pageName,L=1,M=M.sourceIndex,K||(K=D.pageURL,L=0),A.s_objectID&&(O.id=A.s_objectID,M=O.type=1),K&&O&&O.id&&N&&(D.e="&pid="+D.escape(K.substring(0,255))+(L?"&pidt="+L:"")+"&oid="+D.escape(O.id.substring(0,100))+(O.type?"&oidt="+O.type:"")+"&ot="+N+(M?"&oi="+M:"")))
}};
D.hb=function(){var J=D.ha,K=D.linkType,I=D.linkURL,y=D.linkName;
K&&(I||y)&&(K=K.toLowerCase(),"d"!=K&&"e"!=K&&(K="o"),D.pe="lnk_"+K,D.pev1=I?D.escape(I):"",D.pev2=y?D.escape(y):"",J=1);
D.abort&&(J=0);
if(D.trackClickMap||D.trackInlineStats){var K={},I=0,H=D.cookieRead("s_sq"),x=H?H.split("&"):0,r,q,u,H=0;
if(x){for(r=0;
r<x.length;
r++){q=x[r].split("="),y=D.unescape(q[0]).split(","),q=D.unescape(q[1]),K[q]=y
}}y=D.account.split(",");
if(J||D.e){J&&!D.e&&(H=1);
for(q in K){if(!Object.prototype[q]){for(r=0;
r<y.length;
r++){for(H&&(u=K[q].join(","),u==D.account&&(D.e+=("&"!=q.charAt(0)?"&":"")+q,K[q]=[],I=1)),x=0;
x<K[q].length;
x++){u=K[q][x],u==y[r]&&(H&&(D.e+="&u="+D.escape(u)+("&"!=q.charAt(0)?"&":"")+q+"&u=0"),K[q].splice(x,1),I=1)
}}}}J||(I=1);
if(I){H="";
r=2;
!J&&D.e&&(H=D.escape(y.join(","))+"="+D.escape(D.e),r=1);
for(q in K){!Object.prototype[q]&&0<r&&0<K[q].length&&(H+=(H?"&":"")+D.escape(K[q].join(","))+"="+D.escape(q),r--)
}D.cookieWrite("s_sq",H)
}}}return J
};
D.ib=function(){if(!D.vb){var N=new Date,O=p.location,M,K,L=K=M="",J="",H="",I="1.2",y=D.cookieWrite("s_cc","true",0)?"Y":"N",r="",S="";
if(N.setUTCDate&&(I="1.3",(0).toPrecision&&(I="1.5",N=[],N.forEach))){I="1.6";
K=0;
M={};
try{K=new Iterator(M),K.next&&(I="1.7",N.reduce&&(I="1.8",I.trim&&(I="1.8.1",Date.parse&&(I="1.8.2",Object.create&&(I="1.8.5")))))
}catch(R){}}M=screen.width+"x"+screen.height;
L=navigator.javaEnabled()?"Y":"N";
K=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;
J=D.w.innerWidth?D.w.innerWidth:D.d.documentElement.offsetWidth;
H=D.w.innerHeight?D.w.innerHeight:D.d.documentElement.offsetHeight;
try{D.b.addBehavior("#default#homePage"),r=D.b.Ab(O)?"Y":"N"
}catch(Q){}try{D.b.addBehavior("#default#clientCaps"),S=D.b.connectionType
}catch(P){}D.resolution=M;
D.colorDepth=K;
D.javascriptVersion=I;
D.javaEnabled=L;
D.cookiesEnabled=y;
D.browserWidth=J;
D.browserHeight=H;
D.connectionType=S;
D.homepage=r;
D.vb=1
}};
D.K={};
D.loadModule=function(x,q){var u=D.K[x];
if(!u){u=A["AppMeasurement_Module_"+x]?new A["AppMeasurement_Module_"+x](D):{};
D.K[x]=D[x]=u;
u.Na=function(){return u.Ra
};
u.Sa=function(y){if(u.Ra=y){D[x+"_onLoad"]=y,D.ba(x+"_onLoad",[D,u],1)||y(D,u)
}};
try{Object.defineProperty?Object.defineProperty(u,"onLoad",{get:u.Na,set:u.Sa}):u._olc=1
}catch(r){u._olc=1
}}q&&(D[x+"_onLoad"]=q,D.ba(x+"_onLoad",[D,u],1)||q(D,u))
};
D.l=function(u){var q,r;
for(q in D.K){if(!Object.prototype[q]&&(r=D.K[q])&&(r._olc&&r.onLoad&&(r._olc=0,r.onLoad(D,r)),r[u]&&r[u]())){return 1
}}return 0
};
D.lb=function(){var x=Math.floor(10000000000000*Math.random()),q=D.visitorSampling,u=D.visitorSamplingGroup,u="s_vsn_"+(D.visitorNamespace?D.visitorNamespace:D.account)+(u?"_"+u:""),r=D.cookieRead(u);
if(q){r&&(r=parseInt(r));
if(!r){if(!D.cookieWrite(u,x)){return 0
}r=x
}if(r%10000>v){return 0
}}return 1
};
D.M=function(J,r){var I,y,H,x,q,u;
for(I=0;
2>I;
I++){for(y=0<I?D.oa:D.c,H=0;
H<y.length;
H++){if(x=y[H],(q=J[x])||J["!"+x]){if(!r&&("contextData"==x||"retrieveLightData"==x)&&D[x]){for(u in D[x]){q[u]||(q[u]=D[x][u])
}}D[x]=q
}}}};
D.Ga=function(H,q){var y,u,x,r;
for(y=0;
2>y;
y++){for(u=0<y?D.oa:D.c,x=0;
x<u.length;
x++){r=u[x],H[r]=D[r],q||H[r]||(H["!"+r]=1)
}}};
D.cb=function(M){var L,K,I,J,H,x=0,y,u="",r="";
if(M&&255<M.length&&(L=""+M,K=L.indexOf("?"),0<K&&(y=L.substring(K+1),L=L.substring(0,K),J=L.toLowerCase(),I=0,"http://"==J.substring(0,7)?I+=7:"https://"==J.substring(0,8)&&(I+=8),K=J.indexOf("/",I),0<K&&(J=J.substring(I,K),H=L.substring(K),L=L.substring(0,K),0<=J.indexOf("google")?x=",q,ie,start,search_key,word,kw,cd,":0<=J.indexOf("yahoo.co")&&(x=",p,ei,"),x&&y)))){if((M=y.split("&"))&&1<M.length){for(I=0;
I<M.length;
I++){J=M[I],K=J.indexOf("="),0<K&&0<=x.indexOf(","+J.substring(0,K)+",")?u+=(u?"&":"")+J:r+=(r?"&":"")+J
}u&&r?y=u+"&"+r:r=""
}K=253-(y.length-r.length)-L.length;
M=L+(0<K?H.substring(0,K):"")+"?"+y
}return M
};
D.Ma=function(u){var q=D.d.visibilityState,r=["webkitvisibilitychange","visibilitychange"];
q||(q=D.d.webkitVisibilityState);
if(q&&"prerender"==q){if(u){for(q=0;
q<r.length;
q++){D.d.addEventListener(r[q],function(){var x=D.d.visibilityState;
x||(x=D.d.webkitVisibilityState);
"visible"==x&&u()
})
}}return !1
}return !0
};
D.Y=!1;
D.C=!1;
D.Ta=function(){D.C=!0;
D.i()
};
D.W=!1;
D.Q=!1;
D.Qa=function(q){D.marketingCloudVisitorID=q;
D.Q=!0;
D.i()
};
D.T=!1;
D.N=!1;
D.Ia=function(q){D.analyticsVisitorID=q;
D.N=!0;
D.i()
};
D.V=!1;
D.P=!1;
D.Ka=function(q){D.audienceManagerLocationHint=q;
D.P=!0;
D.i()
};
D.U=!1;
D.O=!1;
D.Ja=function(q){D.audienceManagerBlob=q;
D.O=!0;
D.i()
};
D.La=function(q){D.maxDelay||(D.maxDelay=250);
return D.l("_d")?(q&&setTimeout(function(){q()
},D.maxDelay),!1):!0
};
D.X=!1;
D.B=!1;
D.na=function(){D.B=!0;
D.i()
};
D.isReadyToTrack=function(){var r=!0,q=D.visitor;
D.Y||D.C||(D.Ma(D.Ta)?D.C=!0:D.Y=!0);
if(D.Y&&!D.C){return !1
}q&&q.isAllowed()&&(D.W||D.marketingCloudVisitorID||!q.getMarketingCloudVisitorID||(D.W=!0,D.marketingCloudVisitorID=q.getMarketingCloudVisitorID([D,D.Qa]),D.marketingCloudVisitorID&&(D.Q=!0)),D.T||D.analyticsVisitorID||!q.getAnalyticsVisitorID||(D.T=!0,D.analyticsVisitorID=q.getAnalyticsVisitorID([D,D.Ia]),D.analyticsVisitorID&&(D.N=!0)),D.V||D.audienceManagerLocationHint||!q.getAudienceManagerLocationHint||(D.V=!0,D.audienceManagerLocationHint=q.getAudienceManagerLocationHint([D,D.Ka]),D.audienceManagerLocationHint&&(D.P=!0)),D.U||D.audienceManagerBlob||!q.getAudienceManagerBlob||(D.U=!0,D.audienceManagerBlob=q.getAudienceManagerBlob([D,D.Ja]),D.audienceManagerBlob&&(D.O=!0)),D.W&&!D.Q&&!D.marketingCloudVisitorID||D.T&&!D.N&&!D.analyticsVisitorID||D.V&&!D.P&&!D.audienceManagerLocationHint||D.U&&!D.O&&!D.audienceManagerBlob)&&(r=!1);
D.X||D.B||(D.La(D.na)?D.B=!0:D.X=!0);
D.X&&!D.B&&(r=!1);
return r
};
D.k=w;
D.o=0;
D.callbackWhenReadyToTrack=function(x,q,u){var r;
r={};
r.Xa=x;
r.Wa=q;
r.Ua=u;
D.k==w&&(D.k=[]);
D.k.push(r);
0==D.o&&(D.o=setInterval(D.i,100))
};
D.i=function(){var q;
if(D.isReadyToTrack()&&(D.o&&(clearInterval(D.o),D.o=0),D.k!=w)){for(;
0<D.k.length;
){q=D.k.shift(),q.Wa.apply(q.Xa,q.Ua)
}}};
D.Oa=function(y){var q,x,r=w,u=w;
if(!D.isReadyToTrack()){q=[];
if(y!=w){for(x in r={},y){r[x]=y[x]
}}u={};
D.Ga(u,!0);
q.push(r);
q.push(u);
D.callbackWhenReadyToTrack(D,D.track,q);
return !0
}return !1
};
D.fb=function(){var y=D.cookieRead("s_fid"),q="",x="",r;
r=8;
var u=4;
if(!y||0>y.indexOf("-")){for(y=0;
16>y;
y++){r=Math.floor(Math.random()*r),q+="0123456789ABCDEF".substring(r,r+1),r=Math.floor(Math.random()*u),x+="0123456789ABCDEF".substring(r,r+1),r=u=16
}y=q+"-"+x
}D.cookieWrite("s_fid",y,1)||(y=0);
return y
};
D.t=D.track=function(H,q){var y,u=new Date,x="s"+Math.floor(u.getTime()/10800000)%10+Math.floor(10000000000000*Math.random()),r=u.getYear(),r="t="+D.escape(u.getDate()+"/"+u.getMonth()+"/"+(1900>r?r+1900:r)+" "+u.getHours()+":"+u.getMinutes()+":"+u.getSeconds()+" "+u.getDay()+" "+u.getTimezoneOffset());
D.visitor&&(D.visitor.getAuthState&&(D.authState=D.visitor.getAuthState()),!D.supplementalDataID&&D.visitor.getSupplementalDataID&&(D.supplementalDataID=D.visitor.getSupplementalDataID("AppMeasurement:"+D._in,D.expectSupplementalData?!1:!0)));
D.l("_s");
D.Oa(H)||(q&&D.M(q),H&&(y={},D.Ga(y,0),D.M(H)),D.lb()&&(D.analyticsVisitorID||D.marketingCloudVisitorID||(D.fid=D.fb()),D.qb(),D.usePlugins&&D.doPlugins&&D.doPlugins(D),D.account&&(D.abort||(D.trackOffline&&!D.timestamp&&(D.timestamp=Math.floor(u.getTime()/1000)),u=A.location,D.pageURL||(D.pageURL=u.href?u.href:u),D.referrer||D.Ha||(D.referrer=p.document.referrer),D.Ha=1,D.referrer=D.cb(D.referrer),D.l("_g")),D.hb()&&!D.abort&&(D.ib(),r+=D.gb(),D.pb(x,r),D.l("_t"),D.referrer=""))),H&&D.M(y,1));
D.abort=D.supplementalDataID=D.timestamp=D.pageURLRest=D.linkObject=D.clickObject=D.linkURL=D.linkName=D.linkType=A.s_objectID=D.pe=D.pev1=D.pev2=D.pev3=D.e=0
};
D.tl=D.trackLink=function(y,q,x,r,u){D.linkObject=y;
D.linkType=q;
D.linkName=x;
u&&(D.j=y,D.q=u);
return D.track(r)
};
D.trackLight=function(x,q,u,r){D.lightProfileID=x;
D.lightStoreForSeconds=q;
D.lightIncrementBy=u;
return D.track(r)
};
D.clearVars=function(){var r,q;
for(r=0;
r<D.c.length;
r++){if(q=D.c[r],"prop"==q.substring(0,4)||"eVar"==q.substring(0,4)||"hier"==q.substring(0,4)||"list"==q.substring(0,4)||"channel"==q||"events"==q||"eventList"==q||"products"==q||"productList"==q||"purchaseID"==q||"transactionID"==q||"state"==q||"zip"==q||"campaign"==q){D[q]=void 0
}}};
D.tagContainerMarker="";
D.pb=function(I,q){var H,x=D.trackingServer;
H="";
var y=D.dc,u="sc.",r=D.visitorNamespace;
x?D.trackingServerSecure&&D.ssl&&(x=D.trackingServerSecure):(r||(r=D.account,x=r.indexOf(","),0<=x&&(r=r.substring(0,x)),r=r.replace(/[^A-Za-z0-9]/g,"")),H||(H="2o7.net"),y=y?(""+y).toLowerCase():"d1","2o7.net"==H&&("d1"==y?y="112":"d2"==y&&(y="122"),u=""),x=r+"."+y+"."+u+H);
H=D.ssl?"https://":"http://";
y=D.AudienceManagement&&D.AudienceManagement.isReady();
H+=x+"/b/ss/"+D.account+"/"+(D.mobile?"5.":"")+(y?"10":"1")+"/JS-"+D.version+(D.ub?"T":"")+(D.tagContainerMarker?"-"+D.tagContainerMarker:"")+"/"+I+"?AQB=1&ndh=1&pf=1&"+(y?"callback=s_c_il["+D._in+"].AudienceManagement.passData&":"")+q+"&AQE=1";
D.ab(H);
D.da()
};
D.ab=function(q){D.g||D.jb();
D.g.push(q);
D.fa=D.r();
D.Fa()
};
D.jb=function(){D.g=D.mb();
D.g||(D.g=[])
};
D.mb=function(){var u,q;
if(D.ka()){try{(q=A.localStorage.getItem(D.ia()))&&(u=A.JSON.parse(q))
}catch(r){}return u
}};
D.ka=function(){var q=!0;
D.trackOffline&&D.offlineFilename&&A.localStorage&&A.JSON||(q=!1);
return q
};
D.wa=function(){var q=0;
D.g&&(q=D.g.length);
D.v&&q++;
return q
};
D.da=function(){if(!D.v){if(D.xa=w,D.ja){D.fa>D.I&&D.Da(D.g),D.ma(500)
}else{var q=D.Va();
if(0<q){D.ma(q)
}else{if(q=D.ua()){D.v=1,D.ob(q),D.sb(q)
}}}}};
D.ma=function(q){D.xa||(q||(q=0),D.xa=setTimeout(D.da,q))
};
D.Va=function(){var q;
if(!D.trackOffline||0>=D.offlineThrottleDelay){return 0
}q=D.r()-D.Ca;
return D.offlineThrottleDelay<q?0:D.offlineThrottleDelay-q
};
D.ua=function(){if(0<D.g.length){return D.g.shift()
}};
D.ob=function(u){if(D.debugTracking){var q="AppMeasurement Debug: "+u;
u=u.split("&");
var r;
for(r=0;
r<u.length;
r++){q+="\n\t"+D.unescape(u[r])
}D.nb(q)
}};
D.Pa=function(){return D.marketingCloudVisitorID||D.analyticsVisitorID
};
D.S=!1;
var G;
try{G=JSON.parse('{"x":"y"}')
}catch(C){G=null
}G&&"y"==G.x?(D.S=!0,D.R=function(q){return JSON.parse(q)
}):A.$&&A.$.parseJSON?(D.R=function(q){return A.$.parseJSON(q)
},D.S=!0):D.R=function(){return null
};
D.sb=function(H){var q,y,u;
D.Pa()&&2047<H.length&&("undefined"!=typeof XMLHttpRequest&&(q=new XMLHttpRequest,"withCredentials" in q?y=1:q=0),q||"undefined"==typeof XDomainRequest||(q=new XDomainRequest,y=2),q&&D.AudienceManagement&&D.AudienceManagement.isReady()&&(D.S?q.pa=!0:q=0));
!q&&D.kb&&(H=H.substring(0,2047));
!q&&D.d.createElement&&D.AudienceManagement&&D.AudienceManagement.isReady()&&(q=D.d.createElement("SCRIPT"))&&"async" in q&&((u=(u=D.d.getElementsByTagName("HEAD"))&&u[0]?u[0]:D.d.body)?(q.type="text/javascript",q.setAttribute("async","async"),y=3):q=0);
q||(q=new Image,q.alt="");
q.ra=function(){try{D.la&&(clearTimeout(D.la),D.la=0),q.timeout&&(clearTimeout(q.timeout),q.timeout=0)
}catch(I){}};
q.onload=q.tb=function(){q.ra();
D.$a();
D.Z();
D.v=0;
D.da();
if(q.pa){q.pa=!1;
try{var J=D.R(q.responseText);
AudienceManagement.passData(J)
}catch(I){}}};
q.onabort=q.onerror=q.bb=function(){q.ra();
(D.trackOffline||D.ja)&&D.v&&D.g.unshift(D.Za);
D.v=0;
D.fa>D.I&&D.Da(D.g);
D.Z();
D.ma(500)
};
q.onreadystatechange=function(){4==q.readyState&&(200==q.status?q.tb():q.bb())
};
D.Ca=D.r();
if(1==y||2==y){var x=H.indexOf("?");
u=H.substring(0,x);
x=H.substring(x+1);
x=x.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");
1==y?(q.open("POST",u,!0),q.send(x)):2==y&&(q.open("POST",u),q.send(x))
}else{if(q.src=H,3==y){if(D.Aa){try{u.removeChild(D.Aa)
}catch(r){}}u.firstChild?u.insertBefore(q,u.firstChild):u.appendChild(q);
D.Aa=D.Ya
}}q.abort&&(D.la=setTimeout(q.abort,5000));
D.Za=H;
D.Ya=A["s_i_"+D.replace(D.account,",","_")]=q;
if(D.useForcedLinkTracking&&D.D||D.q){D.forcedLinkTrackingTimeout||(D.forcedLinkTrackingTimeout=250),D.aa=setTimeout(D.Z,D.forcedLinkTrackingTimeout)
}};
D.$a=function(){if(D.ka()&&!(D.Ba>D.I)){try{A.localStorage.removeItem(D.ia()),D.Ba=D.r()
}catch(q){}}};
D.Da=function(r){if(D.ka()){D.Fa();
try{A.localStorage.setItem(D.ia(),A.JSON.stringify(r)),D.I=D.r()
}catch(q){}}};
D.Fa=function(){if(D.trackOffline){if(!D.offlineLimit||0>=D.offlineLimit){D.offlineLimit=10
}for(;
D.g.length>D.offlineLimit;
){D.ua()
}}};
D.forceOffline=function(){D.ja=!0
};
D.forceOnline=function(){D.ja=!1
};
D.ia=function(){return D.offlineFilename+"-"+D.visitorNamespace+D.account
};
D.r=function(){return(new Date).getTime()
};
D.ya=function(q){q=q.toLowerCase();
return 0!=q.indexOf("#")&&0!=q.indexOf("about:")&&0!=q.indexOf("opera:")&&0!=q.indexOf("javascript:")?!0:!1
};
D.setTagContainer=function(x){var q,u,r;
D.ub=x;
for(q=0;
q<D._il.length;
q++){if((u=D._il[q])&&"s_l"==u._c&&u.tagContainerName==x){D.M(u);
if(u.lmq){for(q=0;
q<u.lmq.length;
q++){r=u.lmq[q],D.loadModule(r.n)
}}if(u.ml){for(r in u.ml){if(D[r]){for(q in x=D[r],r=u.ml[r],r){!Object.prototype[q]&&("function"!=typeof r[q]||0>(""+r[q]).indexOf("s_c_il"))&&(x[q]=r[q])
}}}}if(u.mmq){for(q=0;
q<u.mmq.length;
q++){r=u.mmq[q],D[r.m]&&(x=D[r.m],x[r.f]&&"function"==typeof x[r.f]&&(r.a?x[r.f].apply(x,r.a):x[r.f].apply(x)))
}}if(u.tq){for(q=0;
q<u.tq.length;
q++){D.track(u.tq[q])
}}u.s=D;
break
}}};
D.Util={urlEncode:D.escape,urlDecode:D.unescape,cookieRead:D.cookieRead,cookieWrite:D.cookieWrite,getQueryParam:function(x,q,u){var r;
q||(q=D.pageURL?D.pageURL:A.location);
u||(u="&");
return x&&q&&(q=""+q,r=q.indexOf("?"),0<=r&&(q=u+q.substring(r+1)+u,r=q.indexOf(u+x+"="),0<=r&&(q=q.substring(r+u.length+x.length+1),r=q.indexOf(u),0<=r&&(q=q.substring(0,r)),0<q.length)))?D.unescape(q):""
}};
D.A="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData pe pev1 pev2 pev3 pageURLRest".split(" ");
D.c=D.A.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));
D.ga="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");
D.J=D.ga.slice(0);
D.oa="account allAccounts debugTracking visitor trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData AudienceManagement".split(" ");
for(z=0;
250>=z;
z++){76>z&&(D.c.push("prop"+z),D.J.push("prop"+z)),D.c.push("eVar"+z),D.J.push("eVar"+z),6>z&&D.c.push("hier"+z),4>z&&D.c.push("list"+z)
}z="latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage".split(" ");
D.c=D.c.concat(z);
D.A=D.A.concat(z);
D.ssl=0<=A.location.protocol.toLowerCase().indexOf("https");
D.charSet="UTF-8";
D.contextData={};
D.offlineThrottleDelay=0;
D.offlineFilename="AppMeasurement.offline";
D.Ca=0;
D.fa=0;
D.I=0;
D.Ba=0;
D.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
D.w=A;
D.d=A.document;
try{D.kb="Microsoft Internet Explorer"==navigator.appName
}catch(B){}D.Z=function(){D.aa&&(A.clearTimeout(D.aa),D.aa=w);
D.j&&D.D&&D.j.dispatchEvent(D.D);
D.q&&("function"==typeof D.q?D.q():D.j&&D.j.href&&(D.d.location=D.j.href));
D.j=D.D=D.q=0
};
D.Ea=function(){D.b=D.d.body;
D.b?(D.p=function(M){var N,L,J,K,I;
if(!(D.d&&D.d.getElementById("cppXYctnr")||M&&M["s_fe_"+D._in])){if(D.qa){if(D.useForcedLinkTracking){D.b.removeEventListener("click",D.p,!1)
}else{D.b.removeEventListener("click",D.p,!0);
D.qa=D.useForcedLinkTracking=0;
return
}}else{D.useForcedLinkTracking=0
}D.clickObject=M.srcElement?M.srcElement:M.target;
try{if(!D.clickObject||D.H&&D.H==D.clickObject||!(D.clickObject.tagName||D.clickObject.parentElement||D.clickObject.parentNode)){D.clickObject=0
}else{var H=D.H=D.clickObject;
D.ea&&(clearTimeout(D.ea),D.ea=0);
D.ea=setTimeout(function(){D.H==H&&(D.H=0)
},10000);
J=D.wa();
D.track();
if(J<D.wa()&&D.useForcedLinkTracking&&M.target){for(K=M.target;
K&&K!=D.b&&"A"!=K.tagName.toUpperCase()&&"AREA"!=K.tagName.toUpperCase();
){K=K.parentNode
}if(K&&(I=K.href,D.ya(I)||(I=0),L=K.target,M.target.dispatchEvent&&I&&(!L||"_self"==L||"_top"==L||"_parent"==L||A.name&&L==A.name))){try{N=D.d.createEvent("MouseEvents")
}catch(y){N=new A.MouseEvent
}if(N){try{N.initMouseEvent("click",M.bubbles,M.cancelable,M.view,M.detail,M.screenX,M.screenY,M.clientX,M.clientY,M.ctrlKey,M.altKey,M.shiftKey,M.metaKey,M.button,M.relatedTarget)
}catch(x){N=0
}N&&(N["s_fe_"+D._in]=N.s_fe=1,M.stopPropagation(),M.stopImmediatePropagation&&M.stopImmediatePropagation(),M.preventDefault(),D.j=M.target,D.D=N)
}}}}}catch(u){D.clickObject=0
}}},D.b&&D.b.attachEvent?D.b.attachEvent("onclick",D.p):D.b&&D.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&D.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&A.MouseEvent)&&(D.qa=1,D.useForcedLinkTracking=1,D.b.addEventListener("click",D.p,!0)),D.b.addEventListener("click",D.p,!1))):setTimeout(D.Ea,30)
};
D.Ea()
}function b(B){var z,w=window.s_c_il,p,y,D=B.split(","),C,E,A=0;
if(w){for(p=0;
!A&&p<w.length;
){z=w[p];
if("s_c"==z._c&&(z.account||z.oun)){if(z.account&&z.account==B){A=1
}else{for(y=z.account?z.account:z.oun,y=z.allAccounts?z.allAccounts:y.split(","),C=0;
C<D.length;
C++){for(E=0;
E<y.length;
E++){D[C]==y[E]&&(A=1)
}}}}p++
}}A||(z=new d);
z.setAccount?z.setAccount(B):z.sa&&z.sa(B);
return z
}d.getInstance=b;
window.s_objectID||(window.s_objectID=0);
function f(){var p=window,u=p.s_giq,x,w,y;
if(u){for(x=0;
x<u.length;
x++){w=u[x],y=b(w.oun),y.setAccount(w.un),y.setTagContainer(w.tagContainerName)
}}p.s_giq=0
}f();
return o
}};
var hv5CXAInsert=(function(){var a=function(n){function j(q){var p=document.cookie.match("(^|;) ?"+q+"=([^;]*)(;|$)");
return p?p[2]:null
}var o=j("ubs_cookie_settings_1.0");
if(o&&o.indexOf("3")<0){var b=new Date;
b.setFullYear(b.getFullYear()+20),document.cookie="UBSCSAP3P=optedOut; expires="+b.toUTCString()+"; path=/"
}else{document.cookie="UBSCSAP3P=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}window.UBSCSAcompatVersion="3";
var g=((document.cookie.indexOf("UBSCSASF=y")==-1)&&(document.cookie.indexOf("UBSCSAStopFlag=y")==-1)&&(-2!=window.UBSCSAsn));
window.UBSCSASL=function(){if((g==true)&&(window.UBSCSAwindowID)){return
}var E="UBSCSA",B="windowID",F="usy46gabsosd",x=window,r=document,u=location,I=r.cookie,y=/^[a-z0-9]+$/i;
x[E+"LF"]=true;
x[E+"TCP"]="https://"+n+"/app/HV5";
x[E+"SSL"]="https://"+n+"/app/HV5";
x[E+"gPr"]=function(){var J=u.protocol;
if(x[E+"ForceSecure"]==true){J="https:"
}if(J=="https:"){return"https://"+n+"/app/HV5"
}else{return"https://"+n+"/app/HV5"
}};
function D(N,Q){if(document.cookie){var L=document.cookie.split("; ");
for(var R=0;
R<L.length;
R++){var J=L[R].indexOf("=");
if(J==-1){continue
}var O=L[R].substring(0,J);
if(O==N){try{return L[R].substring(J+1)
}catch(M){}}}}else{var P="";
try{var K=window.sessionStorage;
if((Q)||(N=="UBSCSAuvt")||(N=="UBSCSADBID")){K=window.localStorage
}if(K){P=K.getItem(N)
}}catch(M){}return P
}return null
}function z(){return D("UBSCSADBID",1)
}function A(){return D("UBSCSAkey")
}function q(M){var K=D(F);
if(!K){return M
}var J=K.lastIndexOf("_");
if(J==-1){return M
}var L=K.substring(J+1);
if(L.length!=4){return M
}if(!L.match(y)){return M
}return L
}var p=""+Math.floor((Math.random()*9999)+1);
while(p.length<4){p="0"+p
}p=q(p);
var C=x.encodeURIComponent;
function H(J){if(C){J=C(J);
J=J.replace(/'/g,"%27");
J=J.replace(/~/g,"%7E");
return J
}else{return escape(J)
}}function w(R){x.sImgArr=new Array();
function S(){R()
}function K(Y){if(("https:"==location.protocol)||(x[E+"ForceSecure"]==true)){return E+"ssl"+Y
}else{return E+"tcp"+Y
}}function O(Y){var aa=K(Y);
try{if(x.sessionStorage){x.sessionStorage.removeItem(aa)
}}catch(Z){}}function P(Y){var ab=K(Y);
try{if(x.sessionStorage){var aa=x.sessionStorage.getItem(ab);
if(aa){return""+aa
}return""
}}catch(Z){}return""
}function X(Y,Z){var ab=K(Y);
try{if(x.sessionStorage){x.sessionStorage.setItem(ab,Z)
}}catch(aa){}}function N(){try{var Y=P("lastProcessPointer"),aa=parseInt(Y);
if(isNaN(aa)){return 0
}else{return aa
}}catch(Z){return 0
}}function T(){try{var Y=P("lastQueuePointer"),aa=parseInt(Y);
if(isNaN(aa)){return 0
}else{return aa
}}catch(Z){return 0
}}function M(){try{var Y=parseInt(P("lastProcessPointer"));
if(isNaN(Y)){Y=0
}Y++;
X("lastProcessPointer",""+Y)
}catch(Z){}}function L(){var Y=N(),Z=""+(Y%50),ab;
try{ab=P(Z)
}catch(aa){}try{O(Z)
}catch(aa){}return ab
}function W(){var Z=N(),Y=T();
if(Z<Y){M()
}U()
}function J(){var Z=N(),Y=T();
if(Z<Y){M()
}U()
}function V(Z,aa,Y){if(Z.attachEvent){Z.attachEvent("on"+aa,Y)
}else{if(Z.addEventListener){Z.addEventListener(aa,Y,false)
}}}function Q(aa){aa=aa.replace(/&/g,"+");
aa=aa.replace(/%/g,"q");
aa=aa.replace(/(..)(..)/g,"$2$1");
aa=aa.replace(/(........)(.....)/g,"$2$1");
var Y=z(),Z=A();
if(Z){Y+="_"+Z
}aa="z="+H(Y)+"&y="+aa;
return aa
}function U(){var ad=L();
if(ad){if(x.sImgArr[0]==null){x.sImgArr[0]=new Image();
V(x.sImgArr[0],"load",W);
V(x.sImgArr[0],"error",J)
}var Y=-1,aa=ad.indexOf(":");
if(aa>-1){try{Y=ad.substring(0,aa);
ad=ad.substring(aa+1)
}catch(ab){}}if(Y>-1){ad=Q(ad);
var ac=x[E+"gPr"](),Z=ac+"/"+p+"/"+Y+"/UYT76TBX45GD/uw2jde932.bmp?"+ad;
x.sImgArr[0].src=Z
}else{J()
}}else{S()
}}U()
}var G=[];
if(!(x[E+"gC"])){x[E+"gC"]=function(Q){var P=[F,E+"uvt",E+"DBID"],N="";
if(true){var K=document.cookie;
for(var J=0;
J<P.length;
J++){var O=M(P[J],Q);
if(O){N=L(N,O);
K=K.replace(O,"")
}}return N+"; "+K
}var P=[F,E+"uvt",E+"DBID"];
P=P.concat(G);
function M(T,S,V,R){var U=D(T);
if(U){return T+"="+U
}return""
}function L(S,R){if(""!=R){if(""!=S){S+="; "
}S+=R
}return S
}for(var J=0;
J<P.length;
J++){var O=M(P[J],Q);
if(O){N=L(N,O)
}}return N
}
}x[E+"SC"]=function(W,R,U,V,P,N,O){var L=document,M=window;
V=W+"; path=/;";
var J=V;
if(R){V=V+"expires="+R
}if(V.charAt(V.length-1)==";"){V=V.substring(0,V.length-1)
}if(M[E+"GD"]){L.cookie=V+M[E+"GD"]()
}if(L.cookie.indexOf(W)>-1){return
}U=location.hostname;
P=U.split(".");
if(P.length>=2){N=P.length-2;
O="."+P[N+1];
while((L.cookie.indexOf(W)==-1)&&(N>=0)){O="."+P[N]+O;
L.cookie=V+"; domain="+O;
N--
}if((L.cookie.indexOf(W)==-1)&&(J)){N=P.length-2;
O="."+P[N+1];
while((L.cookie.indexOf(W)==-1)&&(N>=0)){O="."+P[N]+O;
L.cookie=J+" domain="+O;
N--
}}}if((location.href.indexOf("file://")!=0)&&(L.cookie.indexOf(W)==-1)){L.cookie=J+" domain="+location.hostname
}if(L.cookie.indexOf(W)==-1){var T="",S=W.split("=");
try{var Q=window.sessionStorage;
if(R){Q=window.localStorage
}if(Q){T=Q.setItem(S[0],S[1])
}return
}catch(R){}if(!M.t){t=M[E+"gPr"]()+"/WEOIWMPIJ/"+new Date().valueOf()+"/cImage.bmp";
var K=window.encodeURIComponent;
if(K){t+="?c="+K(L.referrer.substring(0,Math.min(L.referrer.length,500)))+"&d="+K(navigator.cookieEnabled)
}new Image().src=t
}M[E+"SF"]=1
}};
x[E+"ae"]=function(){if(x[E+"ln"]){return
}if((new Date().valueOf()-x[E+"Tm"])>30000){if(x.frames.length==0){x[E+"SC"](E+"SF=y")
}return
}else{x.setTimeout(x[E+"ae"],2000)
}};
x[E+"client_event"]=function(J,L){if(document.cookie.indexOf("UBSCSASF=y")>-1){return
}var M=window;
if(M[E+"queueUserEvent"]){M[E+"queueUserEvent"](J,L)
}else{var K=E+"client_event('"+J+"','"+L+"');";
M.setTimeout(K,500)
}};
x[E+"GP"]=function(J){return null
};
x[E+"GPWID"]=function(J){return J.UBSCSAwindowID
};
x[E+"LC"]=function(L,K){if(I.indexOf("UBSCSASF=y")>-1){return
}if(r.getElementById){var M=r.getElementsByTagName("head").item(0);
if(M){var J=r.createElement("script");
J.src=L;
J.type="text/javascript";
J.id=K;
M.appendChild(J)
}}};
x[E+"GP"]=function(K){try{if(K===K.parent){return null
}return K.parent
}catch(J){}return null
};
x[E+"TWID"]="AUTOSET";
window[E+"optOut"]=function(){if(window.localStorage){window.localStorage.setItem("UBSCSAP3P","optedOut")
}if(window[E+"stopEvents"]){window[E+"stopEvents"]()
}};
window[E+"optIn"]=function(){if(window.localStorage){window.localStorage.removeItem("UBSCSAP3P")
}if(window[E+"doReInit"]){window[E+"doReInit"](true)
}};
window[E+"resetCSA"]=function(){if(window[E+"doResetCSA"]){window[E+"doResetCSA"]()
}};
window[E+"doReInit"]=function(K){x[E+"lstActv"]=new Date().valueOf();
var J=D("UBSCSAP3P",1);
if(J=="optedOut"){return
}if(window[E+"resetCSA"]){window[E+"resetCSA"]()
}if(K){if(window[E+"deleteSessionCookie"]){window[E+"deleteSessionCookie"]()
}}if(window[E+"getSD"]){window[E+"getSD"](document.body,window,document,navigator)
}};
window[E+"tmoPoll"]=function(){var K=x[E+"lstActv"],L=x[E+"idl"],J=new Date().valueOf();
if(K!=-1){if(J-K>L){if(window[E+"doReInit"]){window[E+"doReInit"]()
}}}window.setTimeout(window[E+"tmoPoll"],10000)
};
if(window.location.href.indexOf("file://")==0){window[E+"tmoPoll"]()
}window[E+"jsInsertAlreadyLoaded"]=false;
x[E+"getSD"]=function(M,P,O){P[E+B]="_"+(new Date()).getTime()+Math.random()+"_";
function N(aq,Z,S,aj,am,V,X,Y,aa,ac,af){aq=window[E+"gPr"]();
var av=O.cookie;
Z="";
S="";
if(!av){av=""
}if((av=="")&&(window.sessionStorage)){try{av=window.sessionStorage.getItem(F);
var ae="",ao="";
if(window.localStorage){ae=window.localStorage.getItem(E+"DBID");
ao=window.localStorage.getItem(E+"uvt")
}var W=window.sessionStorage.getItem(E+"key");
if(av){av=F+"="+av
}else{av=""
}if(ae){av+="; "+E+"DBID="+ae
}if(ao){av+="; "+E+"uvt="+ao
}if(W){av+="; "+E+"key="+W
}}catch(T){}I=av
}if(av.length>1024){S=av.substring(0,1024)
}else{S=av
}if(av.indexOf(F)==-1){P.UBSCSASC(F+"="+E+P[E+B]+p);
Z=P[E+B]+p;
try{if(!P.top.name){P.top.name=P[E+B]
}}catch(T){}}else{var ab,ai,ak,al,au,ap;
ai=av.indexOf(F);
ak=av.indexOf(";",ai);
if(ak==-1){ak=av.length
}ab=av.substring(ai,ak);
al=E+"__";
au=ab.indexOf(al);
if(au>-1){aj=ab.indexOf("::",au);
if(aj<0){aj=ab.indexOf(";",au)
}if(aj<0){aj=ab.length
}Z="x"+ab.substring(au+al.length,aj)
}else{al=E+"_";
au=ab.indexOf(al);
if(au>-1){au+=al.length-1;
var aj=ab.indexOf("::",au);
if(aj<0){aj=ab.indexOf(";",au)
}if(aj<0){aj=ab.length
}Z=ab.substring(au,aj)
}else{var ap=av.indexOf(F+"="),aj=av.indexOf(";",ap);
if(aj<0){aj=av.length
}Z=P[E+B]+p;
P[E+"SC"](av.substring(ap,aj)+"::"+E+P[E+B]+p)
}}}function ax(ah,ag){if((!ag)&&(!(ag===0))&(!(ag===false))){return
}ag=H(ag);
if((am.length+ah.length+ag.length)<=1950){am=am+ah+ag
}}function R(aB,aC,ag,ah,az,aA){if((aB.length+ag.length+ah.length+az.length+aC.length+aA.length+20)<=1940){return true
}return false
}am=""+aq+"/"+p+"/handler8/session.js?";
ax("se=",Z);
ax("&di=",z());
ax("&us=",D("UBSCSAP3P",1));
ax("&sj=",E);
ax("&aP=",P[E+B]);
ax("&bd=",navigator.cookieEnabled);
ax("&si=",navigator.javaEnabled());
ax("&aM=",K(P));
var U=J();
if(-2<U){ax("&aO=",""+U)
}var an=A();
ax("&tz=",an);
ax("&vb=",P[E+"compatVersion"]);
ax("&wa=","8.0:2202");
try{if(P.top.name){ax("&aW=",P.top.name)
}else{ax("&aW=",Z)
}}catch(T){}var aw="not_available";
try{aw=(P==P.top)
}catch(T){}ax("&bu=",aw);
if(am.length<1950){var ad=new Array();
ad[0]=O.title;
ad[1]=P[E+"gC"](I);
ad[2]=O.referrer;
ad[3]=location.href;
ad[4]=P[E+"PageID"];
if(!(P[E+"PageID"])&&(!(P[E+"PageID"]===0))){ad[4]=""
}var ay=false,at=false;
while((!R(am,H(ad[0]),H(ad[1]),H(ad[2]),H(ad[3]),H(ad[4])))&&(!ay)){var Q=0;
if(H(ad[1]).length>H(ad[Q]).length){Q=1
}if(H(ad[2]).length>H(ad[Q]).length){Q=2
}if(H(ad[3]).length>H(ad[Q]).length){Q=3
}if(H(ad[4]).length>H(ad[Q]).length){Q=4
}var ar=Math.min((ad[Q].length/2),(1940-am.length-20));
ad[Q]=ad[Q].substring(0,ar);
at=true;
ay=((ad[0].length==0)&&(ad[1].length==0)&&(ad[2].length==0)&&(ad[3].length==0)&&(ad[4].length==0))
}ax("&cf=",ad[0]);
ax("&az=",ad[1]);
ax("&ar=",ad[2]);
ax("&au=",ad[3]);
ax("&sg=",ad[4]);
if(at){ax("&ic=","true")
}}if((!P.UBSCSASF)&&(am.length<=1950)){window.UBSCSALC(am,"UBSCSAloadPageId");
if(!window[ax+"jsInsertAlreadyLoaded"]){window.UBSCSALC(""+aq+"/JavascriptInsert.js","UBSCSAcsaId");
window[ax+"jsInsertAlreadyLoaded"]=true
}}P[E+"ae"]()
}function J(T,R,S){if(L){T=L(P);
try{if(!T||!T.frames){return -1
}R=T.frames;
for(S=0;
S<R.length;
S++){if(R[S]==P){return S
}}}catch(Q){return -1
}}return -1
}P[E+"GPWID"]=function(S,Q){if(!L){return"not_available"
}Q=L(S);
if(!Q){Q=S
}try{return Q.UBSCSAwindowID
}catch(R){return"not_available"
}};
var L=P[E+"GP"],K=P[E+"GPWID"];
P[E+"Tm"]=new Date().valueOf();
w(N)
};
x.UBSCSAgetSD(r.body,x,r)
};
var f=false;
function e(p){if(!f){return
}if(window.UBSCSASL){window.UBSCSASL()
}f=false
}if(document.webkitVisibilityState!="prerender"){if(window.UBSCSASL){window.UBSCSASL()
}}else{f=true;
if(document.addEventListener){document.addEventListener("webkitvisibilitychange",e,false)
}}function m(r,q){try{var u=new Object;
u.tagName="input",u.type="text",r&&q&&(u.name=r,u.value=q,u.id=r,window.UBSCSAclick&&window.UBSCSAclick(u),window.UBSCSAtextchange&&window.UBSCSAtextchange(u))
}catch(p){}}"undefined"!=typeof jQuery&&jQuery(function(){jQuery("select").on("change",function(){var q=jQuery(this).attr("id"),p=this.value;
m(q,p)
}),jQuery(".box-featured").on("click",function(){var p=jQuery(this).find("a").attr("href");
p="featured="+p,t=p,m(p,t)
})
});
var i=100,k=0;
try{"undefined"!=typeof jQuery&&jQuery(function(){function p(w,y,x){var u;
return function(){var r=this,B=arguments,z=function(){u=null,x||w.apply(r,B)
},A=x&&!u;
clearTimeout(u),u=setTimeout(z,y),A&&w.apply(r,B)
}
}jQuery.extend(jQuery.expr[":"],{inview:function(x){var z=$(x),y=z.offset(),w=$(window),u=w.scrollTop(),A=z.outerHeight(!0);
y.top>u-A&&y.top<u+A+w.height()&&z.attr("data-title")&&m("cxtScroll="+z.attr("data-title"),z.attr("data-title"))
}});
var q=p(function(){$(".grid-section__header:inview")
},3000);
window.addEventListener("scroll",q)
})
}catch(d){}return false
};
return{init:a}
})();
(function(a){a.fn.initTracking=function(k){this.functionalAreaTracking=function(){var y=a('[data-nn-tracking="functionalarea"]',k),x=y.find(".functionalArea__header"),w=a.trim(x.find(".button-text strong").text()),E="",D=y.data("fa-type"),B=y.data("ubsFunctionalarea"),C=true;
function z(H,G){var F=a(H.currentTarget),I;
if(typeof H.data!=="undefined"&&H.data.type==="close"){E="close"
}else{if(F.data("nn-tracking")==="togglebutton"){if(C){I=y.functionalarea("isExpanded");
E=I?"expand":"collapse";
C=false
}else{return false
}}else{if(F.is("a:not(.button)")){E="link"
}else{if(F.is("a.button")){E="button"
}}}}return{Fa_Type:D,Functionality:E,Title_of_functional_area:w}
}function A(G){var F=this;
var H=z(G,F);
if(H){sc_clicktrack(H.Fa_Type,H.Functionality,H.Title_of_functional_area)
}}y.on("click.functionalarea.traking","button, a",A);
y.find("[data-nn-tracking='closebutton']").on("click.functionalarea.traking",{type:"close"},A)
};
var j=a("div.displayMBox");
if(window.sc_trackingServer===undefined||!ubs.func.cookieHandling.cookiePrivacySetting[ubs.func.cookieHandling.cookieCategorySettings.analytics.privacySetting]){if(j.length>0){ubs.ui.abTest.displayMbox(j,k,"1")
}return
}this.functionalAreaTracking();
var g=function(x){var w;
if(x!==null){a.each(x,function(){var y="";
var z=a(this).data("ct");
if(z){y=z
}if(w===undefined){w=y
}else{w+=","+y
}})
}return(w)?w:""
};
var e=function(x){var w;
a.each(x,function(){var y=a(this).find("input[name='formTrackingId'][type='hidden']").val();
if(w===undefined){w=y
}else{w+=","+y
}});
return(w)?w:""
};
var n=a("a");
var q=n.filter(".ct");
var i=a('input[name="ftracking"]');
var u=i.parents("form");
window.sc_postviewtrack=g(q);
window.sc_formname=e(u);
if(a.cookie("form_success")){window.sc_formname=a.cookie("form_success")
}var d=a("#nav-service div.loginstatus");
window.sc_loggedin=d.find("p").length>0?"true":"false";
var m="";
if(window.cdn_domain){m=location.protocol+"//"+window.cdn_domain
}var r=s_code.fit.init();
q.click(function(){var w=a(this).data("ct");
window.scclicktrack(w)
});
n.filter(".print").click(function(){ubs.util.log("print user tracking");
window.scclick("print")
});
a(".searchresultlink").click(function(){var x=a(this).metadata().region;
var w=a(this).metadata().position;
ubs.util.log("search result:"+x+w);
window.searchresultpage(x,w)
});
if(a.cookie("form_success")){var o=window.sc_formname;
var p=a.cookie("sc_formanswers");
window.scformtracking(o,"form success");
window.scform_answertracking(o,"form success",p);
ubs.func.cookieHandling.setCookie("form_success",null);
ubs.func.cookieHandling.setCookie("sc_formanswers",null);
ubs.util.log("form success:"+o)
}if(a.cookie("form_success_recommendation")){if(window.self.location===parent.location){window.scclick("recommendation")
}else{parent.scclick("recommendation")
}ubs.func.cookieHandling.setCookie("form_success_recommendation",null);
ubs.util.log("recommendation")
}a("#subscriptionMForm").submit(function(){var y=a(this).find("input:checked");
var w=[];
a.each(y,function(){w.push(a(this).val())
});
a.unique(w);
var x=w.toString();
ubs.util.log("subscription-manager,form success,"+x);
window.scformtracking("subscription-manager","form success",x)
});
a.each(i,function(){var x=a(this).hasClass("fftracking");
var B=a(this.form[0].form);
var z=B.find("input[name='formTrackingId'][type='hidden']").val();
var w=a(this).metadata().page;
w=w?w:1;
var A=B.find("input, textarea, select");
B.data("page",w);
a.each(A,function(C){a(this).data("index",C)
});
var y=function(E){var D=a(E.target).prop("id");
var C=a(E.target).data("index");
ubs.util.log(z+":"+w+"-"+C+":"+D);
window.scformtracking(z,"fftracking",w+"-"+C,D)
};
B.bind("focusin click change",function(C){if(x&&C.type==="change"){y(C)
}var E=B.find("input[name='ismultistepform'][type='hidden']");
var H=(E.length>0&&E.val()==="true");
if((C.type==="focusin"||C.type==="click")&&C.target.tagName!=="BUTTON"){if(!H){if(a.cookie("form["+z+"]")!=="start"){window.scformtracking(z,"start form");
ubs.util.log(z+" - start form:"+C.type);
ubs.func.cookieHandling.setCookie("form["+z+"]","start",ubs.func.cookieHandling.cookieCategorySettings.formtracking.privacySetting,{path:"/"})
}}else{E=B.find("input[name='multistepformpages'][type='hidden']");
var K=(E.length>0?E.val():"1");
E=B.find("input[name='currentStepIndex'][type='hidden']");
var D=(E.length>0?E.val():"1");
E=B.find("input[name='currentStepName'][type='hidden']");
var I=(E.length>0?E.val():"");
var F="form["+z+I+"]";
if(typeof B.data(F)==="undefined"&&((a.cookie(F)===null||typeof a.cookie(F)!=="string"))){var J=(D==="1");
var G=(D===K);
if(J){ubs.util.log(z+" multistep -  start form:"+C.type);
scformtracking(z,"start form",D,I)
}else{if(G){ubs.util.log(z+" multistep - form last step:"+C.type)
}else{ubs.util.log(z+" multistep - form step:"+C.type);
scformtracking(z,"form step",D,I)
}}B.data(F,true);
ubs.func.cookieHandling.setCookie(F,I,ubs.func.cookieHandling.cookieCategorySettings.formtracking.privacySetting,{})
}}}E=null
})
});
a.each(u,function(){var y=a(this);
if(!y.hasClass("validate")){var x=y.find("input[name='formTrackingId'][type='hidden']").val();
var z=y.data("page");
var w=y.find("label.errorlabel");
a.each(w,function(){var C=a(this);
var D=C.prop("for");
var B=a("#"+D).data("index");
var A=C.text();
window.scformtracking(x,"error message",z+"-"+B,D,A)
})
}});
u.submit(function(){var w=a(this);
if(w.hasClass("validate")){var x=w.prop("name");
var z=w.data("page");
var A=w.find("input.error, textarea.error, select.error");
var y=w.find(".wrapper-error");
a.each(A,function(){var D=a(this).prop("id");
var C=a(this).data("index");
var B=y.find("label[for="+D+"]").text();
ubs.util.log("form name:"+x+" error message "+z+"-"+C+" Index: "+D+" error text: "+B);
window.scformtracking(x,"error message",z+"-"+C,D,B)
})
}});
if(a("#RatingForm, #recommendForm").length===0&&(typeof sc_donottrackpageviews==="undefined")){var f=r.t();
if(f){a("body").append(f)
}}if(window.sas_trackingServer){hv5CXAInsert.init(window.sas_trackingServer)
}if(ubs.init.states.mobile){return
}if(!window.mbox_testandtarget_host){window.mbox_testandtarget_host="tt.ubs.com"
}var b=function(){var w=a("div.displayMBoxID");
var x=a("div.conversionMBoxID");
a.each((w.add(x)),function(){var z=a(this);
var y=z.prop("id");
var A=z.attr("data-mBoxName");
window.mboxFactoryDefault.E=true;
window.mboxDefine(y,A);
window.mboxUpdate(A)
});
ubs.ui.abTest.init(j,k)
};
a.ajax({
    url:m+"/js/mbox.js",
    dataType:"script",
    cache:false})
        .fail(function(){
            ubs.ui.abTest.displayMbox(j,k,"1")
        })
        .done(function(){
            b()
         })
}
})(jQuery);
(function(e,d){e.widget("ui.accordionHor",{options:{active:0,animated:"slide",autoHeight:!0,clearStyle:!1,collapsible:!1,event:"click",fillSpace:!1,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:!1,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()
}},_create:function(){var a=this,i=a.options;
a.running=0,a.element.addClass("ui-accordionHor ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"),a.headers=a.element.find(i.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){i.disabled||e(this).addClass("ui-state-hover")
}).bind("mouseleave.accordion",function(){i.disabled||e(this).removeClass("ui-state-hover")
}).bind("focus.accordion",function(){i.disabled||e(this).addClass("ui-state-focus")
}).bind("blur.accordion",function(){i.disabled||e(this).removeClass("ui-state-focus")
}),a.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
a._createContentWrapper();
if(i.navigation){var g=a.element.find("a").filter(i.navigationFilter).eq(0);
if(g.length){var f=g.closest(".ui-accordion-header");
f.length?a.active=f:a.active=g.closest(".ui-accordion-content").prev()
}}a.active=a._findActive(a.active||i.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"),a.active.next().addClass("ui-accordion-content-active"),a._createIcons(),a.resize(),a.element.attr("role","tablist"),a.headers.attr("role","tab").bind("keydown.accordion",function(b){return a._keydown(b)
}).next().attr("role","tabpanel"),a.headers.not(a.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:"-1"}).next().hide(),a.active.length?a.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:"0"}):a.headers.eq(0).attr("tabIndex",0),ubs.util.checkBrowser("safari")||a.headers.find("a").attr("tabIndex","-1"),i.event&&a.headers.bind(i.event.split(" ").join(".accordion ")+".accordion",function(b){a._clickHandler.call(a,b,this),b.preventDefault()
})
},_createIcons:function(){var a=this.options;
a.icons&&(e("<span></span>").addClass("ui-icon "+a.icons.header).prependTo(this.headers),this.active.children(".ui-icon").toggleClass(a.icons.header).toggleClass(a.icons.headerSelected),this.element.addClass("ui-accordion-icons"))
},_createContentWrapper:function(){var b="<div class='ui-accordion-content-wrapper'></div>";
var a=this.element.width()-(this.headers.width()*this.headers.length)-(ubs.util.checkBrowser("ie")&&ubs.util.getBrowserVersion()<7?3:1);
this.headers.each(function(f){e(this).next().prepend("<div class='ui-accordion-content-bg' style='width: "+a/24+"em'></div>").wrapInner(b).width(a).find(".textimage").width(a/24+"em");
e(this).children().find("span").addClass("hidden").after("<span class='ui-accordion-index'>"+(f+1)+"</span>")
})
},_destroyIcons:function(){this.headers.children(".ui-icon").remove(),this.element.removeClass("ui-accordion-icons")
},destroy:function(){var a=this.options;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"),this.headers.find("a").removeAttr("tabIndex"),this._destroyIcons();
var f=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
(a.autoHeight||a.fillHeight)&&f.css("height","");
return e.Widget.prototype.destroy.call(this)
},_setOption:function(a,f){e.Widget.prototype._setOption.apply(this,arguments),a=="active"&&this.activate(f),a=="icons"&&(this._destroyIcons(),f&&this._createIcons()),a=="disabled"&&this.headers.add(this.headers.next())[f?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")
},_keydown:function(a){if(!(this.options.disabled||a.altKey||a.ctrlKey)){var k=e.ui.keyCode,j=this.headers.length,i=this.headers.index(a.target),g=!1;
switch(a.keyCode){case k.RIGHT:case k.DOWN:g=this.headers[(i+1)%j];
break;
case k.LEFT:case k.UP:g=this.headers[(i-1+j)%j];
break;
case k.SPACE:case k.ENTER:this._clickHandler({target:a.target},a.target),a.preventDefault()
}if(g){e(a.target).attr("tabIndex","-1"),e(g).attr("tabIndex","0"),g.focus();
return !1
}return !0
}},resize:function(){var a=this.options,g;
if(a.fillSpace){if(ubs.util.checkBrowser("ie")){var f=this.element.parent().css("overflow");
this.element.parent().css("overflow","hidden")
}g=this.element.parent().height(),ubs.util.checkBrowser("ie")&&this.element.parent().css("overflow",f),this.headers.each(function(){g-=e(this).outerHeight(!0)
}),this.headers.next().each(function(){e(this).height(Math.max(0,g-e(this).innerHeight()+e(this).height()))
}).css("overflow","auto")
}else{a.autoHeight&&(g=0,this.headers.next().each(function(){g=Math.max(g,e(this).height("").height())
}).height(g))
}return this
},activate:function(g){this.options.active=g;
var f=this._findActive(g)[0];
this._clickHandler({target:f},f);
return this
},_findActive:function(a){return a?typeof a=="number"?this.headers.filter(":eq("+a+")"):this.headers.not(this.headers.not(a)):a===!1?e([]):this.headers.filter(":eq(0)")
},_clickHandler:function(x,w){var u=this.options;
if(!u.disabled){if(!x.target){if(!u.collapsible){return
}this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(u.icons.headerSelected).addClass(u.icons.header),this.active.next().addClass("ui-accordion-content-active");
var r=this.active.next(),q={options:u,newHeader:e([]),oldHeader:u.active,newContent:e([]),oldContent:r},p=this.active=e([]);
this._toggle(p,r,q);
return
}var o=e(x.currentTarget||w),n=o[0]===this.active[0];
u.active=u.collapsible&&n?!1:this.headers.index(o);
if(this.running||!u.collapsible&&n){return
}var m=this.active,p=o.next(),r=this.active.next(),q={options:u,newHeader:n&&u.collapsible?e([]):o,oldHeader:this.active,newContent:n&&u.collapsible?e([]):p,oldContent:r},a=this.headers.index(this.active[0])>this.headers.index(o[0]);
this.active=n?e([]):o,this._toggle(p,r,q,n,a),m.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(u.icons.headerSelected).addClass(u.icons.header),n||(o.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(u.icons.header).addClass(u.icons.headerSelected),o.next().addClass("ui-accordion-content-active"));
return
}},_toggle:function(A,z,y,x,w){var u=this,r=u.options;
u.toShow=A,u.toHide=z,u.data=y;
var q=function(){if(!!u){return u._completed.apply(u,arguments)
}};
u._trigger("changestart",null,u.data),u.running=z.size()===0?A.size():z.size();
if(r.animated){var p={};
r.collapsible&&x?p={toShow:e([]),toHide:z,complete:q,down:w,autoHeight:r.autoHeight||r.fillSpace}:p={toShow:A,toHide:z,complete:q,down:w,autoHeight:r.autoHeight||r.fillSpace},r.proxied||(r.proxied=r.animated),r.proxiedDuration||(r.proxiedDuration=r.duration),r.animated=e.isFunction(r.proxied)?r.proxied(p):r.proxied,r.duration=e.isFunction(r.proxiedDuration)?r.proxiedDuration(p):r.proxiedDuration;
var o=e.ui.accordionHor.animations,n=r.duration,a=r.animated;
a&&!o[a]&&!e.easing[a]&&(a="slide"),o[a]||(o[a]=function(b){this.slide(b,{easing:a,duration:n||700})
}),o[a](p)
}else{r.collapsible&&x?A.toggle():(z.hide(),A.show()),q(!0)
}z.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:"-1"}).blur(),A.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:"0"}).focus()
},_completed:function(b){this.running=b?0:--this.running;
this.running||(this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""}),this.toHide.removeClass("ui-accordion-content-active"),this.toHide.length&&(this.toHide.parent()[0].className=this.toHide.parent()[0].className),this._trigger("change",null,this.data))
}}),e.extend(e.ui.accordionHor,{version:"1.8.18",animations:{slide:function(u,r){u=e.extend({easing:"swing",duration:300},u,r);
if(!u.toHide.size()){u.toShow.animate({height:"show",paddingLeft:"show",paddingRight:"show"},u)
}else{if(!u.toShow.size()){u.toHide.animate({width:"hide",paddingLeft:"hide",paddingRight:"hide"},u);
return
}var q=u.toShow.css("overflow"),p=0,o={},n={},m=["width","paddingLeft","paddingRight"],k,a=u.toShow;
k=a[0].style.width,e.each(m,function(g,f){n[f]="hide";
var b=(""+e.css(u.toShow[0],f)).match(/^([\d+-.]+)(.*)$/);
o[f]={value:b[1],unit:b[2]||"px"}
}),u.toShow.css({width:0,overflow:"hidden"}).show(),u.toHide.filter(":hidden").each(u.complete).end().filter(":visible").animate(n,{step:function(b,f){f.prop=="width"&&(p=f.end-f.start===0?0:(f.now-f.start)/(f.end-f.start)),u.toShow[0].style[f.prop]=p*o[f.prop].value+o[f.prop].unit
},duration:u.duration,easing:u.easing,complete:function(){u.autoHeight||u.toShow.css("height",""),u.toShow.css({width:k,overflow:q}),u.complete()
}})
}},bounceslide:function(b){this.slide(b,{easing:b.left?"easeOutBounce":"swing",duration:b.left?1000:200})
}}})
})(jQuery);
(function(a){a.widget("ui.selectmenu_linklist",{getter:"value",version:"1.8",eventPrefix:"selectmenu",widgetBaseClass:"ui-selectmenu",options:{transferClasses:true,typeAhead:"sequential",style:"dropdown",positionOptions:{my:"left top",at:"left bottom",offset:null},width:null,menuWidth:null,handleWidth:26,maxHeight:null,icons:null,format:null,bgImage:function(){},wrapperElement:"",selectedIndex:0,followLink:true,inputList:false,listValues:false,index:0},_create:function(){var b=this,f=this.options;
var e=this.element.prop("id")||"ui-selectmenu-"+Math.random().toString(16).slice(2,10);
this.ids=[e+"-button",e+"-menu"];
this._safemouseup=true;
if(f.inputList){this.newelement=this.element
}else{this.newelement=a('<a class="'+this.widgetBaseClass+' ui-widget ui-state-default ui-corner-all" id="'+this.ids[0]+'" role="button" href="#" tabindex="0" aria-haspopup="true" aria-owns="'+this.ids[1]+'"></a>').insertAfter(this.element)
}this.newelement.wrap(f.wrapperElement);
var d=this.element.attr("tabindex");
if(d){this.newelement.attr("tabindex",d)
}this.newelement.data("selectelement",this.element);
this.selectmenuIcon=a('<span class="'+this.widgetBaseClass+'-icon ui-icon"></span>');
this.statusIcon=a('<span class="'+b.widgetBaseClass+'-status" />');
if(f.inputList){this.listWrapper=a('<div class="selectInput-wrapper"></div>');
this.newelement.wrap(this.listWrapper).after(this.selectmenuIcon)
}else{this.selectmenuIcon.prependTo(this.newelement);
this.statusIcon.prependTo(this.newelement)
}a('label[for="'+this.element.prop("id")+'"]').prop("for",this.ids[0]).bind("click.selectmenu",function(){b.newelement[0].focus();
return false
});
this.newelement.bind("mousedown.selectmenu",function(g){if(f.inputList){b.open(g,true)
}else{b._toggle(g,true)
}if(f.style=="popup"||f.style==="dropdown"){b._safemouseup=false;
setTimeout(function(){b._safemouseup=true
},500)
}return false
}).bind("click.selectmenu",function(){return false
}).bind("keyup.selectmenu",function(g){if(f.inputList){if(!(g.keyCode==a.ui.keyCode.ENTER||g.keyCode==a.ui.keyCode.SPACE||g.keyCode==a.ui.keyCode.ESCAPE)){b.filterList();
b.open(g,true)
}}}).bind("keydown.selectmenu",function(i){var g=false;
switch(i.keyCode){case a.ui.keyCode.ENTER:g=true;
if(f.inputList){b._toggle(i);
b._refreshValue()
}break;
case a.ui.keyCode.SPACE:if(f.inputList){g=true
}else{b._toggle(i);
break
}case a.ui.keyCode.UP:if(i.altKey){b.open(i)
}else{if(f.inputList){b._moveFocus(-1)
}else{b._moveSelection(-1)
}}break;
case a.ui.keyCode.DOWN:if(i.altKey){b.open(i)
}else{if(f.inputList){b._moveFocus(1)
}else{b._moveSelection(1)
}}break;
case a.ui.keyCode.LEFT:b._moveSelection(-1);
break;
case a.ui.keyCode.RIGHT:b._moveSelection(1);
break;
case a.ui.keyCode.TAB:g=true;
if(f.inputList){b.close(i);
b._refreshValue()
}break;
default:g=true
}return g
}).bind("keypress.selectmenu",function(g){b._typeAhead(g.which,"mouseup");
return true
}).bind("mouseover.selectmenu focus.selectmenu",function(){if(!f.disabled){if(f.inputList){a(this).parent().addClass(b.widgetBaseClass+"-focus ui-state-hover")
}else{a(this).addClass(b.widgetBaseClass+"-focus ui-state-hover")
}}}).bind("mouseout.selectmenu blur.selectmenu",function(){if(!f.disabled){if(f.inputList){a(this).parent().removeClass(b.widgetBaseClass+"-focus ui-state-hover")
}else{a(this).removeClass(b.widgetBaseClass+"-focus ui-state-hover")
}}});
a(document).bind("mousedown.selectmenu",function(g){b.close(g)
});
this.element.bind("click.selectmenu",function(){if(f.inputList){a(this).val("");
b.filterList()
}else{b._refreshValue()
}}).bind("keyup.selectmenu",function(g){if(f.inputList&&g.keyCode==9){a(this).val("");
b.filterList()
}}).bind("focus.selectmenu",function(g){if(b.newelement){b.newelement[0].focus()
}});
if(!f.width){this.element.find("li").show();
f.width=this.element.outerWidth()
}if(!f.inputList){this.newelement.outerWidth(f.width)
}if(!f.inputList){this.element.hide()
}this.list=a('<ul class="'+b.widgetBaseClass+'-menu ui-widget ui-widget-content" aria-hidden="true" role="listbox" aria-labelledby="'+this.ids[0]+'" id="'+this.ids[1]+'"></ul>').appendTo("body");
this.list.wrap(f.wrapperElement);
this.list.bind("keydown.selectmenu",function(i){var g=false;
switch(i.keyCode){case a.ui.keyCode.UP:if(i.altKey){b.close(i,true)
}else{b._moveFocus(-1)
}break;
case a.ui.keyCode.DOWN:if(i.altKey){b.close(i,true)
}else{b._moveFocus(1)
}break;
case a.ui.keyCode.LEFT:b._moveFocus(-1);
break;
case a.ui.keyCode.RIGHT:b._moveFocus(1);
break;
case a.ui.keyCode.HOME:b._moveFocus(":first");
break;
case a.ui.keyCode.PAGE_UP:b._scrollPage("up");
break;
case a.ui.keyCode.PAGE_DOWN:b._scrollPage("down");
break;
case a.ui.keyCode.END:b._moveFocus(":last");
break;
case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:b.close(i,true);
a(i.target).parents("li:eq(0)").trigger("mouseup");
a(i.target).click();
break;
case a.ui.keyCode.TAB:g=true;
b.close(i,true);
a(i.target).parents("li:eq(0)").trigger("mouseup");
break;
case a.ui.keyCode.ESCAPE:b.close(i,true);
break;
default:g=true
}return g
}).bind("keypress.selectmenu",function(g){b._typeAhead(g.which,"focus");
return true
}).bind("mousedown.selectmenu mouseup.selectmenu",function(){return false
});
a(window).bind("resize.selectmenu",a.proxy(b._refreshPosition,this))
},_init:function(){var z=this,g=this.options;
var b=[];
if(g.inputList){var y=window[g.listValues];
if(y==undefined){return
}var x=y.Selected;
var n=x[g.index].code;
var f=-1;
f++;
b.push({value:"Favourites",href:"#",text:"Favourites",selected:false,disabled:true,classes:a(this).prop("className"),typeahead:a(this).attr("typeahead"),parentOptGroup:a(this).parent("optgroup"),bgImage:g.bgImage.call(a(this))});
a.each(y.Favourites,function(i,o){f++;
var j=(n==o.code);
if(j){g.selectedIndex=f
}b.push({value:o.code,href:"#",text:o.desc,selected:j,parentOptGroup:"",bgImage:g.bgImage.call(a(this))})
});
var r=CurrencyCalculator.getItemByName(this.element.context.id);
if(r!=undefined&&r!=null){r=a.evalJSON(r);
a.each(r.Favourites,function(j,B){var i=B.code;
var C=false;
a.each(y.Favourites,function(D,E){if(E.code==i){C=true
}});
if(!C){f++;
var o=(n==B.code);
if(o){g.selectedIndex=f
}b.push({value:B.code,href:"#",text:B.desc,selected:o,disabled:false,parentOptGroup:"",bgImage:g.bgImage.call(a(this))})
}})
}a.each(y.Currencies,function(i,j){a.each(j,function(o,B){f++;
b.push({value:o,href:"#",text:o,selected:false,disabled:true,classes:a(this).prop("className"),typeahead:a(this).attr("typeahead"),parentOptGroup:a(this).parent("optgroup"),bgImage:g.bgImage.call(a(this))});
a.each(B,function(C,E){f++;
var D=(n==E.code&&g.selectedIndex==0);
if(D){g.selectedIndex=f
}b.push({value:E.code,href:"#",text:E.desc,selected:D,parentOptGroup:a(this).parent("optgroup"),bgImage:g.bgImage.call(a(this))})
})
})
})
}else{this.element.find("a").each(function(){b.push({value:a(this).val(),href:a(this).prop("href"),text:z._formatText(a(this).html()),selected:a(this).prop("selected"),disabled:a(this).prop("disabled"),classes:a(this).prop("class"),target:a(this).prop("target"),typeahead:a(this).attr("typeahead"),parentOptGroup:a(this).parent("optgroup"),bgImage:g.bgImage.call(a(this))})
})
}var u=(z.options.style=="popup")?" ui-state-active":"";
this.list.html("");
for(var m=0;
m<b.length;
m++){var p="";
if(b[m].target){p=" target='"+b[m].target+"'"
}var e=a('<li role="presentation"'+(b[m].disabled?' class="'+this.namespace+'-state-disabled"':"")+'><a href="'+b[m].href+'" class="'+b[m].classes+'"'+p+'data-name="'+b[m].value+'" tabindex="-1" role="option"'+(b[m].disabled?' aria-disabled="true"':"")+' aria-selected="false"'+(b[m].typeahead?' typeahead="'+b[m].typeahead+'"':"")+">"+b[m].text+"</a></li>").data("index",m).data("optionClasses",b[m].classes||"").bind("mouseup.selectmenu",function(o){if(z._safemouseup&&!z._disabled(o.currentTarget)&&!z._disabled(a(o.currentTarget).parents("ul>li."+z.widgetBaseClass+"-group "))){var B=a(this).data("index")!=z._selectedIndex();
z.index(a(this).data("index"));
z.select(o);
if(B){z.change(o)
}z.close(o,true)
}if(!g.followLink){return
}var i=a(this).find("a");
if(i.not("[target]").not(".popup").length&&z._safemouseup){var j=b[a(this).index()].href;
if(j!==""&&j!=="#"&&j!==undefined){window.location=j
}}return false
}).bind("click.selectmenu",function(){if(a(this).find("a").not("[target]").length){return false
}}).bind("mouseover.selectmenu focus.selectmenu",function(i){if(!a(i.currentTarget).hasClass(z.namespace+"-state-disabled")){z._selectedOptionLi().addClass(u);
z._focusedOptionLi().removeClass(z.widgetBaseClass+"-item-focus ui-state-hover");
a(this).removeClass("ui-state-active").addClass(z.widgetBaseClass+"-item-focus ui-state-hover")
}}).bind("mouseout.selectmenu blur.selectmenu",function(){if(a(this).is(z._selectedOptionLi().selector)){a(this).addClass(u)
}a(this).removeClass(z.widgetBaseClass+"-item-focus ui-state-hover")
});
e.children().bind("focus.selectmenu",function(){a(this).parent().removeClass("ui-state-active").addClass(z.widgetBaseClass+"-item-focus");
z.index(a(this).parent().data("index"))
});
if(b[m].parentOptGroup.length){var q=z.widgetBaseClass+"-group-"+this.element.find("optgroup").index(b[m].parentOptGroup);
if(this.list.find("li."+q).length){this.list.find("li."+q+":last ul").append(e)
}else{a(' <li role="presentation" class="'+z.widgetBaseClass+"-group "+q+(b[m].parentOptGroup.attr("disabled")?" "+this.namespace+'-state-disabled" aria-disabled="true"':'"')+'><span class="'+z.widgetBaseClass+'-group-label">'+b[m].parentOptGroup.attr("label")+"</span><ul></ul></li> ").appendTo(this.list).find("ul").append(e)
}}else{e.appendTo(this.list)
}if(g.icons){for(var k in g.icons){if(e.is(g.icons[k].find)){e.data("optionClasses",b[m].classes+" "+z.widgetBaseClass+"-hasIcon").addClass(z.widgetBaseClass+"-hasIcon");
var w=g.icons[k].icon||"";
e.find("a:eq(0)").prepend('<span class="'+z.widgetBaseClass+"-item-icon ui-icon "+w+'"></span>');
if(b[m].bgImage){e.find("span").css("background-image",b[m].bgImage)
}}}}}var d=(g.style=="dropdown");
this.newelement.toggleClass(z.widgetBaseClass+"-dropdown",d).toggleClass(z.widgetBaseClass+"-popup",!d);
this.list.toggleClass(z.widgetBaseClass+"-menu-dropdown ui-corner-bottom",d).toggleClass(z.widgetBaseClass+"-menu-popup ui-corner-all",!d).find("li:first").toggleClass("ui-corner-top",!d).end().find("li:last").addClass("ui-corner-bottom");
this.selectmenuIcon.toggleClass("ui-icon-triangle-1-s",d).toggleClass("ui-icon-triangle-2-n-s",!d);
if(g.inputList){this.selectmenuIcon.click(function(){a(z.element).mousedown().click()
})
}if(g.transferClasses){var A=this.element.prop("className")||"";
this.newelement.add(this.list).addClass(A)
}if(g.style=="dropdown"){this.list.outerWidth(g.menuWidth?g.menuWidth:g.width)
}else{this.list.outerWidth(g.menuWidth?g.menuWidth:g.width-g.handleWidth)
}if(g.maxHeight){if(g.maxHeight<this.list.height()){this.list.height(g.maxHeight)
}}else{if(!g.format&&(a(window).height()/3)<this.list.height()){g.maxHeight=a(window).height()/3;
this.list.height(g.maxHeight)
}}this._optionLis=this.list.find("li:not(."+z.widgetBaseClass+"-group)");
if(this.element.attr("disabled")===true){this.disable()
}else{this.enable()
}this.index(this._selectedIndex(),"init");
window.setTimeout(function(){z._refreshPosition()
},200)
},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled").unbind(".selectmenu");
a(window).unbind(".selectmenu");
a(document).unbind(".selectmenu");
a("label[for="+this.newelement.prop("id")+"]").prop("for",this.element.prop("id")).unbind(".selectmenu");
if(this.options.wrapperElement){this.newelement.find(this.options.wrapperElement).remove();
this.list.find(this.options.wrapperElement).remove()
}else{this.newelement.remove();
this.list.remove()
}this.element.show();
a.Widget.prototype.destroy.apply(this,arguments)
},_typeAhead:function(f,e){var b=this,d=false,k=String.fromCharCode(f).toUpperCase();
c=k.toLowerCase();
if(b.options.typeAhead==false){return
}if(b.options.typeAhead=="sequential"){window.clearTimeout("ui.selectmenu-"+b.selectmenuId);
var j=typeof(b._prevChar)=="undefined"?"":b._prevChar.join("");
function g(m,n,o){d=true;
a(m).trigger(e);
typeof(b._prevChar)=="undefined"?b._prevChar=[o]:b._prevChar[b._prevChar.length]=o
}this.list.find("li a").each(function(m){if(!d){var n=a(this).attr("typeahead")||a(this).text();
if(n.indexOf(j+k)==0){g(this,m,k)
}else{if(n.indexOf(j+c)==0){g(this,m,c)
}}}});
window.setTimeout(function(m){b._prevChar=undefined
},1000,b)
}else{if(!b._prevChar){b._prevChar=["",0]
}var d=false;
function i(m,n){d=true;
a(m).trigger(e);
b._prevChar[1]=n
}this.list.find("li a").each(function(m){if(!d){var n=a(this).text();
if(n.indexOf(k)==0||n.indexOf(c)==0){if(b._prevChar[0]==k){if(b._prevChar[1]<m){i(this,m)
}}else{i(this,m)
}}}});
this._prevChar[0]=k
}},_uiHash:function(){var b=this.index();
return{index:b,option:a("option",this.element).get(b),value:this.element[0].value}
},open:function(e,d){var b=this;
var f=this.options;
if(this.newelement.attr("aria-disabled")!="true"){this._closeOthers(e);
this.newelement.addClass("ui-state-active");
if(this.options.inputList){this.newelement.parent().addClass("ui-state-active")
}if(b.options.wrapperElement){this.list.parent().appendTo("body")
}else{this.list.appendTo("body")
}this.list.addClass(b.widgetBaseClass+"-open").attr("aria-hidden",false);
if(this.options.style=="dropdown"){this.newelement.removeClass("ui-corner-all").addClass("ui-corner-top")
}this._refreshPosition();
if(!f.inputList){this.list.find("li:not(."+b.widgetBaseClass+"-group):eq("+this._selectedIndex()+") a")[0].focus();
this._trigger("open",e,this._uiHash())
}if(d){this.newelement.focus()
}}},close:function(d,b){if(this.newelement.is(".ui-state-active")){this.newelement.removeClass("ui-state-active");
if(this.options.inputList){this.newelement.parent().removeClass("ui-state-active")
}this.list.attr("aria-hidden",true).removeClass(this.widgetBaseClass+"-open");
if(this.options.style=="dropdown"){this.newelement.removeClass("ui-corner-top").addClass("ui-corner-all")
}if(b){this.newelement.focus()
}this._trigger("close",d,this._uiHash());
if(this.options.inputList){this._refreshValue()
}}},change:function(b){this.element.trigger("change");
this._trigger("change",b,this._uiHash())
},select:function(b){if(this._disabled(b.currentTarget)){return false
}this._trigger("select",b,this._uiHash())
},_closeOthers:function(b){a("."+this.widgetBaseClass+".ui-state-active").not(this.newelement).each(function(){a(this).data("selectelement").selectmenu("close",b)
});
a("."+this.widgetBaseClass+".ui-state-hover").trigger("mouseout")
},_toggle:function(d,b){if(this.list.is("."+this.widgetBaseClass+"-open")){this.close(d,b)
}else{if(this.options.inputList){this.open(d,b)
}else{this.open(d)
}}},_formatText:function(b){return(this.options.format?this.options.format(b):b)
},_selectedIndex:function(){var b=this.element[0].selectedIndex;
if(b){return b
}else{return this.options.selectedIndex
}},_selectedOptionLi:function(){return this._optionLis.eq(this._selectedIndex())
},_focusedOptionLi:function(){return this.list.find("."+this.widgetBaseClass+"-item-focus")
},_moveSelection:function(f,b){var e=parseInt(this._selectedOptionLi().data("index")||0,10);
var d=e+f;
if(d<0){d=0
}if(d>this._optionLis.size()-1){d=this._optionLis.size()-1
}if(d===b){return false
}if(this._optionLis.eq(d).hasClass(this.namespace+"-state-disabled")){(f>0)?++f:--f;
this._moveSelection(f,d)
}else{return this._optionLis.eq(d).trigger("mouseup")
}},_moveFocus:function(j,d){if(!isNaN(j)){var i=parseInt(this._focusedOptionLi().data("index")||0,10);
var g=i+j
}else{var g=parseInt(this._optionLis.filter(j).data("index"),10)
}if(g<0){g=0
}if(g>this._optionLis.size()-1){g=this._optionLis.size()-1
}if(g===d){return false
}var f=this.widgetBaseClass+"-item-"+Math.round(Math.random()*1000);
this._focusedOptionLi().find("a:eq(0)").prop("id","");
var b=this._optionLis.eq(g).is(":visible");
var e=this._optionLis.eq(g).hasClass(this.namespace+"-state-disabled");
if(e||(!b&&!e)){(j>0)?++j:--j;
this._moveFocus(j,g)
}else{this.list.find("."+this.widgetBaseClass+"-item-focus").removeClass(this.widgetBaseClass+"-item-focus");
this._optionLis.eq(g).find("a:eq(0)").prop("id",f).focus()
}this.list.attr("aria-activedescendant",f)
},_scrollPage:function(d){var b=Math.floor(this.list.outerHeight()/this.list.find("li:first").outerHeight());
b=(d=="up"?-b:b);
this._moveFocus(b)
},_setOption:function(b,d){this.options[b]=d;
if(b=="disabled"){this.close();
this.element.add(this.newelement).add(this.list)[d?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",d)
}},disable:function(b,d){if(typeof(b)=="undefined"){this._setOption("disabled",true)
}else{if(d=="optgroup"){this._disableOptgroup(b)
}else{this._disableOption(b)
}}},enable:function(b,d){if(typeof(b)=="undefined"){this._setOption("disabled",false)
}else{if(d=="optgroup"){this._enableOptgroup(b)
}else{this._enableOption(b)
}}},_disabled:function(b){return a(b).hasClass(this.namespace+"-state-disabled")
},_disableOption:function(b){var d=this._optionLis.eq(b);
if(d){d.addClass(this.namespace+"-state-disabled").find("a").attr("aria-disabled",true);
this.element.find("option").eq(b).prop("disabled",true)
}},_enableOption:function(b){var d=this._optionLis.eq(b);
if(d){d.removeClass(this.namespace+"-state-disabled").find("a").attr("aria-disabled",false);
this.element.find("option").eq(b).prop("disabled",false)
}},_disableOptgroup:function(d){var b=this.list.find("li."+this.widgetBaseClass+"-group-"+d);
if(b){b.addClass(this.namespace+"-state-disabled").attr("aria-disabled",true);
this.element.find("optgroup").eq(d).prop("disabled",true)
}},_enableOptgroup:function(d){var b=this.list.find("li."+this.widgetBaseClass+"-group-"+d);
if(b){b.removeClass(this.namespace+"-state-disabled").attr("aria-disabled",false);
this.element.find("optgroup").eq(d).prop("disabled",false)
}},index:function(b,d){if(arguments.length){if(!this._disabled(a(this._optionLis[b]))){this.element[0].selectedIndex=b;
this._refreshValue(d)
}else{return false
}}else{return this._selectedIndex()
}},filterList:function(){var d=this.newelement.val();
var b=0;
a.each(this._optionLis,function(f){var j=a(this).children().html();
var i=new RegExp(d,"i");
var g=j.search(i);
var e=a(this).hasClass(this.namespace+"-state-disabled");
if(d.length=0){a(this).show();
b=0
}else{if(g>-1&&!e){a(this).show();
if(b==0){b=f
}}else{a(this).hide()
}}});
this.element[0].selectedIndex=b
},value:function(b){if(arguments.length){this.element[0].value=b;
this._refreshValue()
}else{return this.element[0].value
}},_refreshValue:function(k){var i=(this.options.style=="popup")?" ui-state-active":"";
var f=this.widgetBaseClass+"-item-"+Math.round(Math.random()*1000);
this.list.find("."+this.widgetBaseClass+"-item-selected").removeClass(this.widgetBaseClass+"-item-selected"+i).find("a").attr("aria-selected","false").prop("id","");
this._selectedOptionLi().addClass(this.widgetBaseClass+"-item-selected"+i).find("a").attr("aria-selected","true").prop("id",f);
var b=(this.newelement.data("optionClasses")?this.newelement.data("optionClasses"):"");
var j=(this._selectedOptionLi().data("optionClasses")?this._selectedOptionLi().data("optionClasses"):"");
if(this.options.inputList){var e=this._selectedOptionLi().find("a:eq(0)").html();
var g=this._selectedOptionLi().find("a:eq(0)").data("name");
var d=this.element.attr("id");
this.newelement.removeClass(b).data("optionClasses",j).addClass(j).val(e);
this.newelement.prev().val(g);
if(k!=="init"){this._safeSelection(d,g,e)
}}else{this.newelement.removeClass(b).data("optionClasses",j).find("."+this.widgetBaseClass+"-status").html(this._selectedOptionLi().find("a:eq(0)").html())
}this.list.attr("aria-activedescendant",f)
},_refreshPosition:function(){var f=this.options;
if(f.style=="popup"&&!f.positionOptions.offset){var e=this._selectedOptionLi();
var b="0 -"+(e.outerHeight()+e.offset().top-this.list.offset().top)
}var d=this.element.zIndex();
if(d){this.list.css({zIndex:d})
}this.list.position({of:f.positionOptions.offset||this.newelement,my:ubs.util.getMyValuePosition(f.positionOptions.my,(f.positionOptions.offset||b)),at:f.positionOptions.at,collision:f.positionOptions.collision||"flip"})
},_safeSelection:function(b,f,e){var g="currencyval"+b.charAt(b.length-1);
a(this.element[0].form).find("#"+g).val(f);
var d=a(this.element[0].form).serialize();
d+="&fieldTrigger="+b;
CurrencyCalculator.getRate(d,CurrencyCalculator.successFunction,CurrencyCalculator.errorFunction);
CurrencyCalculator.addItemFavourite(b,f,e)
}})
})(jQuery);
(function(a){a.widget("ubs.expandabletext",{options:{closetext:"Show less..",opentext:"Show more..",alignment:"left"},_create:function(){var b=this;
b.$button=a("<span class='textimage__btn textimage__btn-is-closed textimage__btn--"+b.options.alignment+"' tabindex='0' aria-expanded='false' aria-controls='ui-id-"+b.uuid+"'><span class='textimage__btnIcon'></span></span>");
b.$buttonText=a("<span>"+b.options.opentext+"</span>");
b.$button.append(b.$buttonText);
b.element.append(b.$button)
},_init:function(){var b=this;
b.$expandablecontent=b.element.find(".textimage__expandableContent").attr("aria-hidden","true").attr("id","ui-id-"+b.uuid).hide();
b.$button.on("click.expandabletext keydown.expandable",{self:b},b._buttonEvents)
},_buttonEvents:function(d){var b=d.data.self;
if((d.type==="keydown"&&d.which===13)||(d.type==="click")){var e=a(d.currentTarget);
if(e.hasClass("textimage__btn-is-closed")){e.removeClass("textimage__btn-is-closed").addClass("textimage__btn-is-open").attr("aria-expanded","true");
b.$buttonText.text(b.options.closetext);
b.$expandablecontent.attr("aria-hidden","false").stop(true,true).slideDown()
}else{e.removeClass("textimage__btn-is-open").addClass("textimage__btn-is-closed").attr("aria-expanded","false");
b.$buttonText.text(b.options.opentext);
b.$expandablecontent.attr("aria-hidden","true").stop(true,true).slideUp()
}}},destroy:function(){var b=this;
b.$button.remove();
b.$expandablecontent.removeAttr("aria-hidden").css({display:""});
a.Widget.prototype.destroy.call(this)
}})
})(jQuery);
(function(a){a.ui.position.flip.top=function(i,g){var f=g.within,q=f.offset.top+f.scrollTop,r=f.height,b=f.isWindow?f.scrollTop:f.offset.top,k=i.top-g.collisionPosition.marginTop,n=k-b,j=k+g.collisionHeight-r-b,o=g.my[1]==="top",m=o?-g.elemHeight:g.my[1]==="bottom"?g.elemHeight:0,u=g.at[1]==="top"?g.targetHeight:g.at[1]==="bottom"?-g.targetHeight:0,e=-2*g.offset[1],p,d;
if(n<0){d=i.top+m+u+e+g.collisionHeight-r-q;
if(d<0||d<Math.abs(n)){i.top+=m+u+e
}}else{if(j>0){p=i.top-g.collisionPosition.marginTop+m+u+e-b;
if(p>0||Math.abs(p)<j){i.top+=m+u+e
}}}}
})(jQuery);
(function(a){ubs.brightcoveVideo=ubs.brightcoveVideo||{};
a.extend(ubs.brightcoveVideo,{BRIGHTCOVE:{},init:function(d){var b=a(".BrightcoveExperience",d);
b.each(function(){var e=a(this);
ubs.brightcoveVideo.setBrightcoveVideoParameters(e);
if(e.hasClass("advancedVideo")){ubs.brightcoveVideo.setAdvancedBrightcovePlayer(this.id);
ubs.brightcoveVideo.loadBrightCove(this.id)
}else{if(e.hasClass("simpleVideo")){ubs.brightcoveVideo.loadBrightCove(this.id)
}else{ubs.brightcoveVideo.loadBrightCove(this.id)
}}})
},setBrightcoveVideoParameters:function(d){var f=d.closest(".basecomponent.videoaudio"),e=f.width(),b=d.find("param[name='width']");
if(e>0){b.val(e)
}},loadBrightCove:function(i){var b,f,e,g;
f=ubs.brightcoveVideo.getParentWidth(i);
e=a("#"+i);
g=e.find("param[name='width']");
if(f>0){g.val(f)
}try{b=(location.href.indexOf("https")===0?"https://sadmin":"http://admin");
b+=".brightcove.com/js/BrightcoveExperiences_all.js";
a.getScript(b,function(){brightcove.createExperiences()
})
}catch(d){ubs.util.log("Failed to load BrightcoveExperiences.js:"+d)
}},getParentWidth:function(e){var d,b;
d=a("#"+e).closest(".basecomponent.videoaudio");
b=d.width();
return b
},setAdvancedBrightcovePlayer:function(d){var b;
ubs.brightcoveVideo.BRIGHTCOVE=ubs.brightcoveVideo.BRIGHTCOVE||{};
b=ubs.brightcoveVideo.BRIGHTCOVE;
b["video"+d]={replay:"false",relatedVideos:[],player:{},onTemplateLoaded:function(g){var f=brightcove.getExperience(d),e,i;
f.getModule(APIModules.EXPERIENCE).addEventListener(BCExperienceEvent.TEMPLATE_READY,this.onTemplateReady);
e=f.getModule(APIModules.EXPERIENCE);
this.replay=e.getPlayerParameter("videoreplay");
i=e.getPlayerParameter("playRelatedVideos");
if(i!==null){this.relatedVideos=i.split(",")
}this.player=f
},onTemplateReady:function(i){var f=b["video"+d].player,e,g;
f.getModule(APIModules.EXPERIENCE).removeEventListener(BCExperienceEvent.TEMPLATE_READY,this.onTemplateReady);
e=f.getModule(APIModules.MENU);
if(b["video"+d].relatedVideos.length!==0){e.setAdditionalMediaCallback(b["video"+d].getAdditionalMedia)
}if(b["video"+d].replay==="true"){g=f.getModule(APIModules.VIDEO_PLAYER);
g.addEventListener(BCMediaEvent.PROGRESS,b["video"+d].onMediaProgress);
g.addEventListener(BCMediaEvent.COMPLETE,b["video"+d].onMediaComplete)
}},onMediaProgress:function(f){var e;
if(f.position>(f.duration-0.5)){e=b["video"+d].player.getModule(APIModules.VIDEO_PLAYER);
e.seek(0);
e.play()
}},onMediaComplete:function(f){var e=b["video"+d].player.getModule(APIModules.VIDEO_PLAYER);
e.play()
},getAdditionalMedia:function(f,g){var e=false;
if(f===BCMenuAdditionalMedia.RELATED_VIDEOS){b["video"+d].requestRelatedForMedia(g.id);
e=true
}return e
},requestRelatedForMedia:function(j){var e=b["video"+j].player,f=[],i,g;
i=e.getModule(APIModules.CONTENT);
i.addEventListener(BCContentEvent.MEDIA_COLLECTION_LOAD,b["video"+j].onMediaCollectionLoad);
g=e.getModule(APIModules.VIDEO_PLAYER);
f.push(g.getCurrentVideo().id);
i.getMediaInGroupAsynch(f)
},onMediaCollectionLoad:function(j){var g=b["video"+d].player,k=[],e;
for(var f in b["video"+d].relatedVideos){k.push({id:b["video"+d].relatedVideos[f]})
}e=g.getModule(APIModules.MENU);
e.setAdditionalMediaForType(k,BCMenuAdditionalMedia.RELATED_VIDEOS)
}}
}})
}(jQuery));
(function(a){ubs.ui=ubs.ui||{};
a.extend(ubs.ui,{init:function(b){},accordion:{registeredAccordions:[],standard:function(b){a.each(b,function(d){var f=a(this),e=ubs.ui.accordion.getActiveElement(f,0,d,"standard");
f.accordion({header:".accordionsplit",heightStyle:"content",active:e,collapsible:true,activate:function(){var i,g;
ubs.ui.accordion.saveStatus(d,f,"standard");
i=f.offset().top;
g=a("body").scrollTop();
if(g>i){a("body").scrollTop(i);
ubs.util.log("accordion-scroll: "+i)
}}}).find("a.accordion-openall").click(function(g){ubs.ui.accordion.openall(this,g)
})
});
ubs.ui.accordion.registeredAccordions=a(ubs.ui.accordion.registeredAccordions).add(b)
},event:function(b){var d=function(e,f){f.oldPanel.hide()
};
a.each(b,function(e){var g=a(this),f=ubs.ui.accordion.getActiveElement(g,false,e,"event");
g.accordion({header:".parent-row",animated:false,heightStyle:"content",active:f,beforeActivate:d,collapsible:true,icons:false,activate:function(){ubs.ui.accordion.saveStatus(e,g,"event")
}}).find("a.accordion-openall").click(function(i){ubs.ui.accordion.openall(this,i)
})
})
},horizontal:function(b){a.each(b,function(d){var f=a(this),e=ubs.ui.accordion.getActiveElement(f,0,d,"horizontal");
f.accordionHor({header:".accordionsplit",autoHeight:false,active:e,collapsible:false,icons:false,change:function(){ubs.ui.accordion.saveStatus(d,f,"horizontal")
}}).find("a.accordion-openall").click(function(g){ubs.ui.accordion.hor_openall(this,g)
})
});
ubs.ui.accordion.registeredAccordions=a(ubs.ui.accordion.registeredAccordions).add(b)
},inHeader:function(b){var e=b,d=ubs.ui.accordion.getActiveElement(e,false,0,"inHeader");
b.accordion({header:".accordionsplit",heightStyle:"content",active:d,collapsible:true,create:function(){a(this).find(".ui-accordion-header").attr("tabIndex","-1")
},activate:function(){ubs.ui.accordion.saveStatus(0,e,"inHeader")
}})
},openall:function(b,e){e.preventDefault();
var f=a(b).parents("div.ui-accordion");
var d=f.find("div.ui-accordion-header");
var g=f.find("div.ui-accordion-content");
d.attr("aria-expanded","true").removeClass("ui-state-default").addClass("ui-state-active");
g.show()
},saveStatus:function(b,e,d){var g,f=document.location.pathname;
if(d==="horizontal"){g=e.accordionHor("option","active")
}else{g=e.accordion("option","active")
}ubs.func.cookieHandling.setCookieStorage("accordionsStatus_"+f+"_"+d+"_"+b,g,1)
},gotoAnchor:{init:function(d){var b=this;
a(d).delegate("a","click",function(){b.openAccordion(a(this).attr("href"),false)
});
b.openAccordion(window.location.href,true)
},openAccordion:function(b,d){var e;
if(b){e=b.split("#")[1];
if(e&&e.search(/,/)!==-1){e=false
}}if(e){a.each(ubs.ui.accordion.registeredAccordions,function(){var j=a(this);
var i=j.find("a[name="+e+"]");
if(i.length===0){i=j.find("#"+e)
}if(i.length>0){var f=i.closest("div.ui-accordion-header").nextAll("div.ui-accordion-content:first");
var g=f.prevAll("div.ui-accordion-content").length;
if(j.hasClass("box-accordion-horizontal")){j.accordionHor("option","active",g)
}else{j.accordion("option","animate",false);
j.accordion("option","active",g);
j.accordion("option","animate",true)
}if(d){window.location.href=b
}ubs.util.log("accordion content: "+g)
}})
}}},hor_openall:function(b,e){e.preventDefault();
var f=a(b).parents("div.ui-accordionHor");
var d=f.find("div.ui-accordion-header");
var g=f.find("div.ui-accordion-content");
f.removeClass("ui-accordionHor").width("");
d.find("span").filter(".hidden").removeClass("hidden").andSelf().filter(".ui-accordion-index").hide();
g.width("").show().find("div.textimage").width("").find()
},getActiveElement:function(b,f,d,e){var k=b.attr("data-active"),i,j,g;
if(k!==undefined){if(k==="false"||k==="-1"){f=false
}else{f=parseInt(k,10)
}}if(d!==undefined){i=document.location.pathname;
j=ubs.func.cookieHandling.getCookieStorage("accordionsStatus_"+i+"_"+e+"_"+d);
if(j){g=parseInt(j,10)
}if(g!==undefined){f=g
}}return f
}},setAsideBoxWidth:function(b){a.each(b,function(){var g=a(this),e=g.closest("div.aside"),f=g.siblings("img"),d=new Image();
d.src=f.attr("src");
e.waitForImages(function(){e.width(d.width);
g.show()
})
})
},extendTableSort:function(){a.tablesorter.addWidget({id:"accessibility",format:function(d){var b=a(d).data("header");
if(!b){b=a("thead th",d);
a(d).data("header",b);
a.each(b,function(){var e=a(this);
if(e.html().length>0){e.attr("tabIndex","0");
e.keypress(function(f){if(f.which===13||f.which===32){f.preventDefault();
a(this).click()
}})
}})
}a.each(b,function(){var e=a(this);
if(e.hasClass("headerSortDown")){e.attr("aria-sort","descending")
}else{if(e.hasClass("headerSortUp")){e.attr("aria-sort","ascending")
}else{e.attr("aria-sort","none")
}}if(ubs.util.checkBrowser("ie",8)){e.hide().show()
}})
}});
a.tablesorter.addWidget({id:"accordion",format:function(d){var b=a("tr.parent-row",d);
b.each(function(e){if(b.length-1===e){a(this).addClass("last-row")
}else{a(this).removeClass("last-row")
}var f=a(this).data("child");
if(f){f.detach();
a(this).after(f)
}})
}})
},sortTable:function(d,b){a(d).each(function(){var g=a(this).find("thead th.eventDate").index();
g=g>0?g:0;
var i={cssChildRow:"child-row",widgets:["zebra","accessibility","accordion"],sortList:[[g,0]]};
if(a(this).hasClass("accordion")){a.each(a("tr.parent-row",a(this)),function(){a(this).data("child",a(this).next())
});
var f=a(this).find("thead th");
a.each(f,function(){var j=a(this).width()/12;
a(this).css("width",j+"em")
});
i.textExtraction=function(j){var k=a("time",j).eq(0).attr("datetime");
if(k){return k
}else{return a("p",j).html()
}}
}else{i.textExtraction=function(j){var k=a("time",j).eq(0).attr("datetime");
if(k){return k
}else{return a(j).text()
}}
}var e=a.extend(i,b);
a(this).tablesorter(e)
})
},zebraTable:function(b){a(b).each(function(){var e=a(this).find("tbody tr");
var d=e.length;
a.each(e,function(){var f=a(this);
if((f.index()%2===0)){f.addClass("odd")
}else{f.addClass("even")
}if(f.index()+1===d){f.addClass("last-child")
}})
})
},heightAdjust:function(b){if(b.filter(":visible").size()===0){return true
}var d=0;
b.filter(":not(:visible)").addClass("was-hidden").css("display","block");
a.each(b,function(){var e=a(this).height();
if(e>d){d=e
}});
a.each(b,function(){a(this).height(d)
});
b.filter(".was-hidden").removeClass("was-hidden").css("display","none")
},checkDisclaimerCookie:function(b){a.each(b,function(){var d=a(this);
d.unbind("click").click(function(){var g=d.prop("href");
var e=g.lastIndexOf("/");
var f=a.cookie(g.slice(e+1));
var i=d.attr("data-disclaimer-href");
if(f==="1"){if(d.hasClass("popup")){d.prop("href",i);
d.unbind("click");
d.popupWindow();
d.click();
return false
}else{if(d.hasClass("lightBox")){d.prop("href",i);
d.unbind("click");
ubs.ui.lightbox.init(d);
d.click();
return false
}else{window.location.href=i;
return false
}}}else{d.unbind("click").addClass("lightBox {lightBox:{iframe:true}}");
ubs.ui.lightbox.init(d)
}})
})
},setDisclaimerCookie:function(b){a.each(b,function(){var d=a(this);
d.submit(function(){var f=d.find('input[data-disclaimer-required="true"]');
var n=0;
a.each(f,function(){if(a(this).is(":checked")){n++
}});
if(f.length===n){var o=d.attr("data-set-cookie");
if(o==="true"){var j=window.location.pathname;
var e=j.lastIndexOf("/");
var m=j.slice(e+1);
var k;
k=parseInt(d.attr("data-cookie-expire"),10);
var i=d.find('input[name="cookie-expiry"]');
if(i.length>0){if(i.prop("checked")===false){k=false
}else{if(!k){k=1825
}}}var g={};
g.path="/";
if(k){g.expires=k
}ubs.func.cookieHandling.setCookie(m,1,ubs.func.cookieHandling.cookieCategorySettings.disclaimer.privacySetting,g)
}if(d.is(".popup, .lightBox, .lightBoxiFrame")){parent.$.colorbox.close()
}else{d.prop("rel","nofollow").prop("target","_parent")
}}})
})
},abTest:{options:{counter:0,repeats:60,timer:60,returnValue:"",interval:[]},init:function(b,d){ubs.ui.abTest.options.interval=window.setInterval(function(){ubs.ui.abTest.checkValue(b,d)
},ubs.ui.abTest.options.timer)
},checkValue:function(b,d){ubs.ui.abTest.options.returnValue=a.trim(b.children("div").text());
if(ubs.ui.abTest.options.returnValue!==""){window.clearInterval(ubs.ui.abTest.options.interval);
ubs.ui.abTest.displayMbox(b,d,ubs.ui.abTest.options.returnValue)
}else{ubs.ui.abTest.options.counter++;
if(ubs.ui.abTest.options.counter>ubs.ui.abTest.options.repeats){window.clearInterval(ubs.ui.abTest.options.interval);
ubs.ui.abTest.displayMbox(b,d,"1")
}}},displayMbox:function(f,g,e){var d=a("div.abtest-variant-a",g);
var b=a("div.abtest-variant-b",g);
if(e==="1"){d.css({display:"block"});
b.css({display:"none"});
this.initContent(d)
}else{if(e==="2"){d.css({display:"none"});
b.css({display:"block"});
this.initContent(b)
}}},initContent:function(b){a("div.initStageTeaser",b).stageteaser("destroy").stageteaser()
}},globalHorizons:{init:function(b,e){var d;
if(!b.length||!e.length){return
}d=b.find("option:selected").val();
ubs.ui.globalHorizons.currentValue=d;
ubs.ui.globalHorizons.$selectable=b;
ubs.ui.globalHorizons.$tables=e;
ubs.ui.globalHorizons.showOrHideHorizonTables();
ubs.ui.globalHorizons.addSelectableListener()
},addSelectableListener:function(){ubs.ui.globalHorizons.$selectable.change(function(){var b=a(this).find("option:selected").val();
ubs.ui.globalHorizons.currentValue=b;
ubs.ui.globalHorizons.showOrHideHorizonTables()
})
},showOrHideHorizonTables:function(){var b=ubs.ui.globalHorizons;
if(b.currentValue===undefined||b.currentValue===null){return
}if(b.currentValue==="all"){b.$tables.find(".gH__tableWrapper").show()
}else{b.$tables.find(".gH__tableWrapper").each(function(){var d=a(this);
if(d.attr("data-identifier")!==ubs.ui.globalHorizons.currentValue){d.hide()
}else{d.show()
}})
}}}})
})(ubs.$);
(function(a){ubs.func=ubs.func||{};
a.extend(ubs.func,{init:function(b){ubs.func.decodeMailto(a("a.mailto",b));
ubs.func.stepBack(a(".stepBack",b))
},termHighlight:{init:function(d,b,f){var e=ubs.func.termHighlight.getSearchTerm(d,b);
ubs.func.termHighlight.highlight(e,f)
},getSearchTerm:function(d,b){var e="";
if(d){e=decodeURIComponent(ubs.util.getQueryParam("querystring")).replace(/\+$/,"").replace(/\+/g," ");
if(e.length===0){e=decodeURIComponent(ubs.util.getQueryParam("q")).replace(/\+$/,"").replace(/\+/g," ")
}}if(b&&e.length===0){e=decodeURIComponent(ubs.util.getRefQueryParam("querystring")).replace(/\+$/,"").replace(/\+/g," ");
if(e.length===0){e=decodeURIComponent(ubs.util.getRefQueryParam("q")).replace(/\+$/,"").replace(/\+/g," ")
}}return e
},sort:function(e,d){return d.length-e.length
},highlightOnPage:function(){if(ubs.init.states.isp){return true
}else{if(ubs.init.states.etf){return false
}else{if(a("#search-bar").length===0&&!a("#doc").hasClass("colorbox-pf")){return true
}}}},highlight:function(e,d){if(e.length>0){if(ubs.func.termHighlight.highlightOnPage()){var b=e.split(" ");
b.sort(ubs.func.termHighlight.sort);
a.each(b,function(g,f){var j=new RegExp("\\b"+f+"\\b","i");
a(d).highlight(j,true)
})
}}}},cookieHandling:{cookiePrivacySetting:{0:true,1:true,2:true,3:true},cookieCategorySettings:{disclaimer:{privacySetting:1},lightboxstatus:{privacySetting:1},nomobile:{privacySetting:1,cookies:[{name:"nomobile",path:"/"}]},nomobilemessage:{privacySetting:1,cookies:[{name:"nomobilemessage"}]},currencycalculator:{privacySetting:1,cookies:[{name:"htmlamount1"},{name:"htmlcurrency1"},{name:"htmlcurrency2"},{name:"htmlexchange"},{name:"htmloperation"}]},login:{privacySetting:1,cookies:[{name:"loginStatus"},{name:"ubsLogin"}]},functionalarea:{privacySetting:2,cookies:[{name:"fa_dismissed",path:"/"}]},formtracking:{privacySetting:3,cookies:[{name:"form_success",path:"/"},{name:"form_success_recommendation",path:"/"},{name:"sc_formanswers",path:"/"}]},analytics:{privacySetting:3,cookies:[{name:"s_gnr",domain:"."+ubs.init.states.rootDomain,path:"/"},{name:"s_old_sword",domain:"."+ubs.init.states.rootDomain,path:"/"},{name:"s_gpv_url",domain:"."+ubs.init.states.rootDomain,path:"/"},{name:"s_gpv_url2",domain:"."+ubs.init.states.rootDomain,path:"/"},{name:"s_gpv_channel",domain:"."+ubs.init.states.rootDomain,path:"/"},{name:"s_cc",domain:"."+ubs.init.states.rootDomain,path:"/"},{name:"s_sq",domain:"."+ubs.init.states.rootDomain,path:"/"},{name:"s_lv",domain:"."+ubs.init.states.rootDomain,path:"/"},{name:"s_lv_s",domain:"."+ubs.init.states.rootDomain,path:"/"},{name:"sc-murl",domain:"."+document.domain,path:"/"},{name:"mbox",domain:"."+ubs.init.states.rootDomain,path:"/"}]},session:{privacySetting:1,cookies:[{name:"JSESSIONID",path:"/"}]},cugAuthentication:{privacySetting:1,cookies:[{name:"login-token",path:"/"}]},country:{privacySetting:2,cookies:[{name:"country",path:"/"}]},language:{privacySetting:2,cookies:[{name:"language",path:"/"}]}},cookieManagement:function(){if(window.cookie_management&&window.self===parent){var e=ubs.func.cookieHandling.getCookieStorage("ubs_cookie_settings_"+window.cookie_management_ver);
if(e===null){var b="lightBox {lightBox:{close: false, boxName:'nodisclaimer', overlayClose:false, iframe:true}}";
var d=a("<a href='"+window.cookie_management+"' style='display:none' />").addClass(b);
if(a.colorbox){if(ubs.ui.lightbox){a("body").append(d);
ubs.ui.lightbox.init(d);
d.click()
}else{if(!ubs.fit.mobile.ui.lightBox.options.cmOpen){ubs.fit.mobile.ui.lightBox.init(window.cookie_management)
}}}else{ubs.func.cookieHandling.setCookieStorage("sourcepageurl",window.location.href,1);
window.location=window.cookie_management
}}}},setCookieSetting:function(d,e){if(d.is("a")&&e){d.click(function(g){var f;
a.each(ubs.func.cookieHandling.cookiePrivacySetting,function(i){if(f===undefined){f=i
}else{f+="-"+i
}});
g.preventDefault();
ubs.func.cookieHandling.setPrivacyCookie(f)
})
}else{if(d.is("form")){var b=d.find("input[type=checkbox]");
d.submit(function(g){g.preventDefault();
var f=0;
a.each(b.filter(":checked"),function(){f+="-"+a(this).val()
});
ubs.func.cookieHandling.setPrivacyCookie(f)
});
b.filter(":checked").closest("tr").addClass("active");
b.click(function(){var f=a(this);
if(!f.prop("disabled")){f.closest("tr").toggleClass("active")
}});
a.each(b,function(){var f=a(this);
if(!ubs.func.cookieHandling.cookiePrivacySetting[f.val()]){if(f.is(":checked")){var g=f.prev(".imageCheck");
if(g.length===0){f.click()
}else{g.click()
}}}})
}}},setCookieStorage:function(b,e,d,f){if(Modernizr.sessionstorage&&storageEnabled){ubs.func.cookieHandling.setStorage(b,e,d)
}else{ubs.func.cookieHandling.setCookie(b,e,d,f)
}},setStorage:function(b,e,d){if(Modernizr.sessionstorage&&storageEnabled){var f=ubs.func.cookieHandling.getCookieParameters(b,e,d);
if(f){if(e===null){sessionStorage.removeItem(b)
}else{sessionStorage.setItem(b,e)
}}}},setCookie:function(b,e,d,g){var f=ubs.func.cookieHandling.getCookieParameters(b,e,d,g);
if(f){a.cookie(b,e,f)
}},getCookieParameters:function(d,f,e,k){var j={};
var i=d;
var g=f;
var b=false;
a.each(ubs.func.cookieHandling.cookieCategorySettings,function(m,n){if(ubs.func.cookieHandling.cookiePrivacySetting[n.privacySetting]||g===null){if(n.cookies!==undefined){a.each(n.cookies,function(o,p){if(i===p.name){if(p.path){j.path=p.path
}if(p.domain){j.domain=p.domain
}if(k){a.extend(j,k)
}b=j;
return false
}})
}}if(b){return false
}});
if(!b){if(ubs.func.cookieHandling.cookiePrivacySetting[e]||g===null){if(k){b=k
}else{b=j
}}}return b
},setPrivacyCookie:function(b){ubs.func.cookieHandling.setCookie("ubs_cookie_settings_"+parent.window.cookie_management_ver,b,0,{expires:2000,path:"/",domain:ubs.util.getRootDomain(2)});
ubs.func.cookieHandling.setCookiePrivacySetting();
ubs.func.cookieHandling.addCookiesToList("form","formtracking");
ubs.func.cookieHandling.removeNotAllowedCookies();
ubs.func.cookieHandling.optOutTracking();
if(a.colorbox){parent.$(parent.document).colorbox.close()
}if(ubs.init.states.mobile){if(!ubs.fit.mobile.ui.lightBox.options.cmOpen){var d=ubs.func.cookieHandling.getCookieStorage("sourcepageurl");
ubs.func.cookieHandling.setCookieStorage("sourcepageurl",null);
if(d!==null){window.location=d
}}}},optOutTracking:function(){if(!ubs.func.cookieHandling.cookiePrivacySetting[2]){if(window.sc_optout){sc_optout("user_preferences")
}ubs.util.log("opt out user preferences")
}if(!ubs.func.cookieHandling.cookiePrivacySetting[3]){if(window.sc_optout){sc_optout("tracking")
}ubs.util.log("opt out tracking")
}},setCookiePrivacySetting:function(){if(ubs.func.cookieHandling.getDoNotTrack()){ubs.func.cookieHandling.cookiePrivacySetting[3]=false
}var d=a.cookie("ubs_cookie_settings_"+window.cookie_management_ver,{path:"/"});
if(d!==null){var b=d.split("-");
a.each(ubs.func.cookieHandling.cookiePrivacySetting,function(e){ubs.func.cookieHandling.cookiePrivacySetting[e]=false;
parent.ubs.func.cookieHandling.cookiePrivacySetting[e]=false
});
a.each(b,function(){var e=this;
ubs.func.cookieHandling.cookiePrivacySetting[e]=true;
parent.ubs.func.cookieHandling.cookiePrivacySetting[e]=true
})
}},removeNotAllowedCookies:function(){a.each(ubs.func.cookieHandling.cookieCategorySettings,function(b,d){if(!ubs.func.cookieHandling.cookiePrivacySetting[d.privacySetting]){if(d.cookies){a.each(d.cookies,function(e,f){var g={};
if(f.path){g.path=f.path
}if(f.domain){g.domain=f.domain
}ubs.func.cookieHandling.setCookie(f.name,null,0,g)
})
}}})
},getDoNotTrack:function(){var b=(window.navigator.doNotTrack||window.navigator.msDoNotTrack);
return(b==="1"||b==="yes")
},addCookiesToList:function(d,f){var b=ubs.func.cookieHandling.cookieCategorySettings[f];
var e=ubs.util.getCookiesStartingWith(d);
a.each(e,function(i,j){var g={};
g.name=j;
g.path="/";
b.cookies.push(g)
})
},getCookieStorage:function(b){if(Modernizr.sessionstorage&&storageEnabled){var d=sessionStorage.getItem(b);
if(d!==null){return d
}else{return a.cookie(b)
}}else{return a.cookie(b)
}}},decodeMailto:function(b){b.bind("mouseover focus",function(){var e=a(this);
e.unbind();
var d=e.attr("href").split("?")[1];
var f=String(d);
f=decodeURIComponent(f);
f=f.replace(/T/g,"@").replace(/B/g,".").replace(/[A-Z]/g,"");
f=f.replace(/\+/g,"%20");
e.prop("href","mailto:"+f)
})
},stepBack:function(b){b.click(function(){if(parent.$("#colorbox").css("display")==="block"){parent.$.colorbox.close()
}else{history.back()
}return false
})
}})
})(ubs.$);
(function(b){var a=".answersensitivity";
ubs.form=ubs.form||{};
b.extend(ubs.form,{AnswerSensitivity:{options:{context:"body"},init:function(d){if(d){ubs.form.AnswerSensitivity.options.context=d
}ubs.form.AnswerSensitivity.checkForm();
b(".formcomponent",ubs.form.AnswerSensitivity.options.context).bind("change"+a,function(){ubs.form.AnswerSensitivity.checkForm()
})
},checkForm:function(){if(window.conditionalElements!==undefined){b.each(window.conditionalElements,function(){var d=this;
b.each(d,function(g){var e=this;
var f=ubs.form.AnswerSensitivity.checkConditions(e);
if(f){ubs.form.AnswerSensitivity.toggleElement(g,"block");
ubs.form.AnswerSensitivity.toggleDisableElements(e,"enabled")
}else{ubs.form.AnswerSensitivity.toggleElement(g,"none");
ubs.form.AnswerSensitivity.toggleDisableElements(e,"disabled")
}})
})
}},checkConditions:function(d){var g="initial";
var e="";
var f;
b.each(d,function(){var i=this;
var j;
b.each(i,function(o){var k=this.val;
var n=this.op;
var m=this.cond;
if(m!==""){j=m
}f=ubs.form.AnswerSensitivity.checkSingleCondition(o,k,n);
if(g==="initial"){g=f
}});
if(e==="AND"){f=(f&&g)
}else{if(e==="OR"){f=(f||g)
}}g=f;
e=j
});
return f
},toggleElement:function(d,e){if(e==="none"){ubs.form.AnswerSensitivity.options.context.find("."+d+"_fieldSet",ubs.form.AnswerSensitivity.options.context).hide().prop("disabled",true).find("[name='"+d+"']").prop("disabled",true)
}else{ubs.form.AnswerSensitivity.options.context.find("."+d+"_fieldSet",ubs.form.AnswerSensitivity.options.context).show().prop("disabled",false).find("[name='"+d+"']").prop("disabled",false)
}},toggleDisableElements:function(d,e){b.each(d[0],function(j){var k=this.disableform;
if(k){var i=ubs.form.AnswerSensitivity.options.context.find("input, select, textarea, button").not("[name='"+j+"']");
var g=i.filter("button[type='submit']").not(".button-sec");
var f=i.filter("input[type='submit']");
if(e==="disabled"){g.addClass("button-prim").removeClass("button-inactive").removeAttr("disabled");
f.removeAttr("disabled")
}else{g.addClass("button-inactive").removeClass("button-prim").attr("disabled","true");
f.attr("disabled","true")
}}})
},checkSingleCondition:function(f,o,d){var m=false;
var k=this.findElement(f);
if(k.length>1||k.is("[type='checkbox']")||k.is("[type='radio']")){var n=k.filter(":checked");
if(d==="!="){if(n.length){m=true;
for(var e=0;
e<n.length;
e++){if(n[e].checked){if(n[e].value===o){m=false
}}}}}else{for(var g=0;
g<n.length;
g++){if(n[g].checked){m=ubs.form.AnswerSensitivity.checkConditionValue(d,n[g].value,o)
}}}}else{m=ubs.form.AnswerSensitivity.checkConditionValue(d,k.val(),o)
}return m
},checkConditionValue:function(d,f,g){var e=false;
if(d==="="){e=f===g
}else{if(d==="!="){e=f!==g
}else{if(d===">"){e=(!isNaN(f)&&(parseFloat(f)>parseFloat(g)))
}else{if(d==="<"){e=(!isNaN(f)&&(parseFloat(f)<parseFloat(g)))
}else{if(d===">="){e=(!isNaN(f)&&(parseFloat(f)>=parseFloat(g)))
}else{if(d==="<="){e=(!isNaN(f)&&(parseFloat(f)<=parseFloat(g)))
}}}}}}return e
},findElement:function(d){var e=ubs.form.AnswerSensitivity.options.context.find("#"+d,ubs.form.AnswerSensitivity.options.context);
if(e.is("select")){if(e.prop("multiple")){e=e.children(":selected")
}}else{if(e.is("ul")){e=e.find("input:radio, input:checkbox")
}}return e
}}})
})(ubs.$);
var FIT_swfobject=function(){var aq="undefined",aD="object",ab="Shockwave Flash",X="ShockwaveFlash.ShockwaveFlash",aE="application/x-shockwave-flash",ac="SWFObjectExprInst",ax="onreadystatechange",af=window,aL=document,aB=navigator,aa=false,Z=[aN],aG=[],ag=[],al=[],aJ,ad,ap,at,ak=false,aU=false,aH,an,aI=true,ah=function(){var a=typeof aL.getElementById!=aq&&typeof aL.getElementsByTagName!=aq&&typeof aL.createElement!=aq,f=aB.userAgent.toLowerCase(),d=aB.platform.toLowerCase(),j=d?/win/.test(d):/win/.test(f),m=d?/mac/.test(d):/mac/.test(f),i=/webkit/.test(f)?parseFloat(f.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,e=!+"\v1",g=[0,0,0],n=null;
if(typeof aB.plugins!=aq&&typeof aB.plugins[ab]==aD){n=aB.plugins[ab].description;
if(n&&!(typeof aB.mimeTypes!=aq&&aB.mimeTypes[aE]&&!aB.mimeTypes[aE].enabledPlugin)){aa=true;
e=false;
n=n.replace(/^.*\s+(\S+\s+\S+$)/,"$1");
g[0]=parseInt(n.replace(/^(.*)\..*$/,"$1"),10);
g[1]=parseInt(n.replace(/^.*\.(.*)\s.*$/,"$1"),10);
g[2]=/[a-zA-Z]/.test(n)?parseInt(n.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0
}}else{if(typeof af.ActiveXObject!=aq){try{var k=new ActiveXObject(X);
if(k){n=k.GetVariable("$version");
if(n){e=true;
n=n.split(" ")[1].split(",");
g=[parseInt(n[0],10),parseInt(n[1],10),parseInt(n[2],10)]
}}}catch(b){}}}return{w3:a,pv:g,wk:i,ie:e,win:j,mac:m}
}(),aK=function(){if(!ah.w3){return
}if((typeof aL.readyState!=aq&&aL.readyState=="complete")||(typeof aL.readyState==aq&&(aL.getElementsByTagName("body")[0]||aL.body))){aP()
}if(!ak){if(typeof aL.addEventListener!=aq){aL.addEventListener("DOMContentLoaded",aP,false)
}if(ah.ie&&ah.win){aL.attachEvent(ax,function(){if(aL.readyState=="complete"){aL.detachEvent(ax,arguments.callee);
aP()
}});
if(af==top){(function(){if(ak){return
}try{aL.documentElement.doScroll("left")
}catch(a){setTimeout(arguments.callee,0);
return
}aP()
})()
}}if(ah.wk){(function(){if(ak){return
}if(!/loaded|complete/.test(aL.readyState)){setTimeout(arguments.callee,0);
return
}aP()
})()
}aC(aP)
}}();
function aP(){if(ak){return
}try{var b=aL.getElementsByTagName("body")[0].appendChild(ar("span"));
b.parentNode.removeChild(b)
}catch(a){return
}ak=true;
var e=Z.length;
for(var d=0;
d<e;
d++){Z[d]()
}}function aj(a){if(ak){a()
}else{Z[Z.length]=a
}}function aC(a){if(typeof af.addEventListener!=aq){af.addEventListener("load",a,false)
}else{if(typeof aL.addEventListener!=aq){aL.addEventListener("load",a,false)
}else{if(typeof af.attachEvent!=aq){aM(af,"onload",a)
}else{if(typeof af.onload=="function"){var b=af.onload;
af.onload=function(){b();
a()
}
}else{af.onload=a
}}}}}function aN(){if(aa){Y()
}else{am()
}}function Y(){var e=aL.getElementsByTagName("body")[0];
var b=ar(aD);
b.setAttribute("type",aE);
var a=e.appendChild(b);
if(a){var d=0;
(function(){if(typeof a.GetVariable!=aq){var f=a.GetVariable("$version");
if(f){f=f.split(" ")[1].split(",");
ah.pv=[parseInt(f[0],10),parseInt(f[1],10),parseInt(f[2],10)]
}}else{if(d<10){d++;
setTimeout(arguments.callee,10);
return
}}e.removeChild(b);
a=null;
am()
})()
}else{am()
}}function am(){var i=aG.length;
if(i>0){for(var j=0;
j<i;
j++){var d=aG[j].id;
var o=aG[j].callbackFn;
var a={success:false,id:d};
if(ah.pv[0]>0){var k=aS(d);
if(k){if(ao(aG[j].swfVersion)&&!(ah.wk&&ah.wk<312)){ay(d,true);
if(o){a.success=true;
a.ref=av(d);
o(a)
}}else{if(aG[j].expressInstall&&au()){var f={};
f.data=aG[j].expressInstall;
f.width=k.getAttribute("width")||"0";
f.height=k.getAttribute("height")||"0";
if(k.getAttribute("class")){f.styleclass=k.getAttribute("class")
}if(k.getAttribute("align")){f.align=k.getAttribute("align")
}var g={};
var e=k.getElementsByTagName("param");
var n=e.length;
for(var m=0;
m<n;
m++){if(e[m].getAttribute("name").toLowerCase()!="movie"){g[e[m].getAttribute("name")]=e[m].getAttribute("value")
}}ae(f,g,d,o)
}else{aF(k);
if(o){o(a)
}}}}}else{ay(d,true);
if(o){var b=av(d);
if(b&&typeof b.SetVariable!=aq){a.success=true;
a.ref=b
}o(a)
}}}}}function av(b){var e=null;
var d=aS(b);
if(d&&d.nodeName=="OBJECT"){if(typeof d.SetVariable!=aq){e=d
}else{var a=d.getElementsByTagName(aD)[0];
if(a){e=a
}}}return e
}function au(){return !aU&&ao("6.0.65")&&(ah.win||ah.mac)&&!(ah.wk&&ah.wk<312)
}function ae(g,e,j,f){aU=true;
ap=f||null;
at={success:false,id:j};
var a=aS(j);
if(a){if(a.nodeName=="OBJECT"){aJ=aO(a);
ad=null
}else{aJ=a;
ad=j
}g.id=ac;
if(typeof g.width==aq||(!/%$/.test(g.width)&&parseInt(g.width,10)<310)){g.width="310"
}if(typeof g.height==aq||(!/%$/.test(g.height)&&parseInt(g.height,10)<137)){g.height="137"
}aL.title=aL.title.slice(0,47)+" - Flash Player Installation";
var b=ah.ie&&ah.win?"ActiveX":"PlugIn",d="MMredirectURL="+af.location.toString().replace(/&/g,"%26")+"&MMplayerType="+b+"&MMdoctitle="+aL.title;
if(typeof e.flashvars!=aq){e.flashvars+="&"+d
}else{e.flashvars=d
}if(ah.ie&&ah.win&&a.readyState!=4){var i=ar("div");
j+="SWFObjectNew";
i.setAttribute("id",j);
a.parentNode.insertBefore(i,a);
a.style.display="none";
(function(){if(a.readyState==4){a.parentNode.removeChild(a)
}else{setTimeout(arguments.callee,10)
}})()
}aA(g,e,j)
}}function aF(a){if(ah.ie&&ah.win&&a.readyState!=4){var b=ar("div");
a.parentNode.insertBefore(b,a);
b.parentNode.replaceChild(aO(a),b);
a.style.display="none";
(function(){if(a.readyState==4){a.parentNode.removeChild(a)
}else{setTimeout(arguments.callee,10)
}})()
}else{a.parentNode.replaceChild(aO(a),a)
}}function aO(b){var e=ar("div");
if(ah.win&&ah.ie){e.innerHTML=b.innerHTML
}else{var f=b.getElementsByTagName(aD)[0];
if(f){var a=f.childNodes;
if(a){var g=a.length;
for(var d=0;
d<g;
d++){if(!(a[d].nodeType==1&&a[d].nodeName=="PARAM")&&!(a[d].nodeType==8)){e.appendChild(a[d].cloneNode(true))
}}}}}return e
}function aA(f,i,d){var e,a=aS(d);
if(ah.wk&&ah.wk<312){return e
}if(a){if(typeof f.id==aq){f.id=d
}if(ah.ie&&ah.win){var g="";
for(var k in f){if(f[k]!=Object.prototype[k]){if(k.toLowerCase()=="data"){i.movie=f[k]
}else{if(k.toLowerCase()=="styleclass"){g+=' class="'+f[k]+'"'
}else{if(k.toLowerCase()!="classid"){g+=" "+k+'="'+f[k]+'"'
}}}}}var j="";
for(var m in i){if(i[m]!=Object.prototype[m]){j+='<param name="'+m+'" value="'+i[m]+'" />'
}}a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+g+">"+j+"</object>";
ag[ag.length]=f.id;
e=aS(f.id)
}else{var b=ar(aD);
b.setAttribute("type",aE);
for(var n in f){if(f[n]!=Object.prototype[n]){if(n.toLowerCase()=="styleclass"){b.setAttribute("class",f[n])
}else{if(n.toLowerCase()!="classid"){b.setAttribute(n,f[n])
}}}}for(var o in i){if(i[o]!=Object.prototype[o]&&o.toLowerCase()!="movie"){aQ(b,o,i[o])
}}a.parentNode.replaceChild(b,a);
e=b
}}return e
}function aQ(b,e,d){var a=ar("param");
a.setAttribute("name",e);
a.setAttribute("value",d);
b.appendChild(a)
}function aw(a){var b=aS(a);
if(b&&b.nodeName=="OBJECT"){if(ah.ie&&ah.win){b.style.display="none";
(function(){if(b.readyState==4){aT(a)
}else{setTimeout(arguments.callee,10)
}})()
}else{b.parentNode.removeChild(b)
}}}function aT(a){var b=aS(a);
if(b){for(var d in b){if(typeof b[d]=="function"){b[d]=null
}}b.parentNode.removeChild(b)
}}function aS(a){var d=null;
try{d=aL.getElementById(a)
}catch(b){}return d
}function ar(a){return aL.createElement(a)
}function aM(a,d,b){a.attachEvent(d,b);
al[al.length]=[a,d,b]
}function ao(a){var b=ah.pv,d=a.split(".");
d[0]=parseInt(d[0],10);
d[1]=parseInt(d[1],10)||0;
d[2]=parseInt(d[2],10)||0;
return(b[0]>d[0]||(b[0]==d[0]&&b[1]>d[1])||(b[0]==d[0]&&b[1]==d[1]&&b[2]>=d[2]))?true:false
}function az(b,g,a,d){if(ah.ie&&ah.mac){return
}var f=aL.getElementsByTagName("head")[0];
if(!f){return
}var i=(a&&typeof a=="string")?a:"screen";
if(d){aH=null;
an=null
}if(!aH||an!=i){var e=ar("style");
e.setAttribute("type","text/css");
e.setAttribute("media",i);
aH=f.appendChild(e);
if(ah.ie&&ah.win&&typeof aL.styleSheets!=aq&&aL.styleSheets.length>0){aH=aL.styleSheets[aL.styleSheets.length-1]
}an=i
}if(ah.ie&&ah.win){if(aH&&typeof aH.addRule==aD){aH.addRule(b,g)
}}else{if(aH&&typeof aL.createTextNode!=aq){aH.appendChild(aL.createTextNode(b+" {"+g+"}"))
}}}function ay(a,d){if(!aI){return
}var b=d?"visible":"hidden";
if(ak&&aS(a)){aS(a).style.visibility=b
}else{az("#"+a,"visibility:"+b)
}}function ai(b){var a=/[\\\"<>\.;]/;
var d=a.exec(b)!=null;
return d&&typeof encodeURIComponent!=aq?encodeURIComponent(b):b
}var aR=function(){if(ah.ie&&ah.win){window.attachEvent("onunload",function(){var a=al.length;
for(var b=0;
b<a;
b++){al[b][0].detachEvent(al[b][1],al[b][2])
}var e=ag.length;
for(var d=0;
d<e;
d++){aw(ag[d])
}for(var f in ah){ah[f]=null
}ah=null;
for(var g in FIT_swfobject){FIT_swfobject[g]=null
}FIT_swfobject=null
})
}}();
return{registerObject:function(a,f,d,b){if(ah.w3&&a&&f){var e={};
e.id=a;
e.swfVersion=f;
e.expressInstall=d;
e.callbackFn=b;
aG[aG.length]=e;
ay(a,false)
}else{if(b){b({success:false,id:a})
}}},getObjectById:function(a){if(ah.w3){return av(a)
}},embedSWF:function(n,f,j,g,d,a,b,k,i,m){var e={success:false,id:f};
if(ah.w3&&!(ah.wk&&ah.wk<312)&&n&&f&&j&&g&&d){ay(f,false);
aj(function(){j+="";
g+="";
var w={};
if(i&&typeof i===aD){for(var r in i){w[r]=i[r]
}}w.data=n;
w.width=j;
w.height=g;
var q={};
if(k&&typeof k===aD){for(var u in k){q[u]=k[u]
}}if(b&&typeof b===aD){for(var o in b){if(typeof q.flashvars!=aq){q.flashvars+="&"+o+"="+b[o]
}else{q.flashvars=o+"="+b[o]
}}}if(ao(d)){var p=aA(w,q,f);
if(w.id==f){ay(f,true)
}e.success=true;
e.ref=p
}else{if(a&&au()){w.data=a;
ae(w,q,f,m);
return
}else{ay(f,true)
}}if(m){m(e)
}})
}else{if(m){m(e)
}}},switchOffAutoHideShow:function(){aI=false
},ua:ah,getFlashPlayerVersion:function(){return{major:ah.pv[0],minor:ah.pv[1],release:ah.pv[2]}
},hasFlashPlayerVersion:ao,createSWF:function(a,b,d){if(ah.w3){return aA(a,b,d)
}else{return undefined
}},showExpressInstall:function(b,a,e,d){if(ah.w3&&au()){ae(b,a,e,d)
}},removeSWF:function(a){if(ah.w3){aw(a)
}},createCSS:function(b,a,d,e){if(ah.w3){az(b,a,d,e)
}},addDomLoadEvent:aj,addLoadEvent:aC,getQueryParamValue:function(b){var a=aL.location.search||aL.location.hash;
if(a){if(/\?/.test(a)){a=a.split("?")[1]
}if(b==null){return ai(a)
}var d=a.split("&");
for(var e=0;
e<d.length;
e++){if(d[e].substring(0,d[e].indexOf("="))==b){return ai(d[e].substring((d[e].indexOf("=")+1)))
}}}return""
},expressInstallCallback:function(){if(aU){var a=aS(ac);
if(a&&aJ){a.parentNode.replaceChild(aJ,a);
if(ad){ay(ad,true);
if(ah.ie&&ah.win){aJ.style.display="block"
}}if(ap){ap(at)
}}aU=false
}}}
}();
$.fn.tree=function(a){var b=$.extend({expanded:"",direction:$("html").css("direction")==="rtl"?"rtl":"ltr",classHasSubTree:"hasSubTree"},a);
return $(this).each(function(){if(!$(this).parents(".tree").length){var d=$(this),e=d.find("li.tree-parent");
if(0<e.length){d.addClass(b.classHasSubTree)
}if(!$("body").is("[role]")){$("body").attr("role","application")
}d.attr({role:"tree"}).addClass("tree");
d.find("a:eq(0)").attr("tabIndex","0");
d.find("a:gt(0)").attr("tabIndex","-1");
d.find("ul").attr("role","group").addClass("tree-group-collapsed");
d.find("li").attr("role","treeitem");
d.find("li:has(ul)").attr("role","tree-parent");
d.find("li:last-child").addClass("last-child");
d.find("li:has(ul)").attr("aria-expanded","false").find(">a").addClass("tree-parent tree-parent-collapsed").hide().show();
d.find(b.expanded).attr("aria-expanded","true").find(">a").removeClass("tree-parent-collapsed").next().removeClass("tree-group-collapsed");
d.bind("expand",function(f){var g=$(f.target)||d.find("a[tabindex=0]");
g.removeClass("tree-parent-collapsed");
g.next().hide().removeClass("tree-group-collapsed").slideDown(150,function(){$(this).removeAttr("style");
g.parent().attr("aria-expanded","true").hide().show()
})
}).bind("collapse",function(f){var g=$(f.target)||d.find("a[tabindex=0]");
g.addClass("tree-parent-collapsed");
g.next().slideUp(150,function(){g.parent().attr("aria-expanded","false").hide().show();
$(this).addClass("tree-group-collapsed").removeAttr("style")
})
}).bind("toggle",function(f){var g=$(f.target)||d.find("a[tabindex=0]");
if(g.parent().is("[aria-expanded=false]")){g.trigger("expand")
}else{g.trigger("collapse")
}}).bind("traverseDown",function(g){var i=$(g.target)||d.find("a[tabindex=0]");
var f=i.parent();
if(f.is("[aria-expanded=true]")){i.next().find("a").eq(0).focus()
}else{if(f.next().length){f.next().find("a").eq(0).focus()
}else{f.parents("li").next().find("a").eq(0).focus()
}}}).bind("traverseUp",function(g){var i=$(g.target)||d.find("a[tabindex=0]");
var f=i.parent();
if(f.prev().length){if(f.prev().is("[aria-expanded=true]")){f.prev().find("li:visible:last a").eq(0).focus()
}else{f.prev().find("a").eq(0).focus()
}}else{f.parents("li:eq(0)").find("a").eq(0).focus()
}});
d.focus(function(f){d.find("[tabindex=0]").attr("tabIndex","-1").removeClass("tree-item-active");
$(f.target).attr("tabIndex","0").addClass("tree-item-active")
}).click(function(i){var j=$(i.target);
if(j.is("a.tree-parent")){var f=$(j).offset().left+parseFloat($(j).css("paddingLeft"));
if(b.direction==="rtl"){f=$(j).offset().left+$(j).width()+parseFloat($(j).css("paddingLeft"))
}var g=i.clientX;
if(g>0){if((b.direction==="ltr"&&g<f)||(b.direction==="rtl"&&g>f)){j.trigger("toggle");
j.eq(0).focus();
return false
}}}if(j.is("img")){j.parent().trigger("toggle");
j.parent().focus();
return false
}}).keydown(function(f){var g=d.find("a[tabindex=0]");
if(f.keyCode===37||f.keyCode===38||f.keyCode===39||f.keyCode===40){if(f.keyCode===37){if(g.parent().is("[aria-expanded=true]")){g.trigger("collapse")
}else{g.parents("li:eq(1)").find("a").eq(0).focus()
}}if(f.keyCode===39){if(g.parent().is("[aria-expanded=false]")){g.trigger("expand")
}else{g.parents("li:eq(0)").find("li a").eq(0).focus()
}}if(f.keyCode===38){g.trigger("traverseUp")
}if(f.keyCode===40){g.trigger("traverseDown")
}return false
}else{if((f.keyCode===32)&&g.is("a.tree-parent")){g.trigger("toggle");
return false
}}})
}})
};
(function(d){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var e=function(g){g=g.replace(/\x0d\x0a/g,"\x0a");
var f="";
for(var j=0;
j<g.length;
j++){var i=g.charCodeAt(j);
if(i<128){f+=String.fromCharCode(i)
}else{if((i>127)&&(i<2048)){f+=String.fromCharCode((i>>6)|192);
f+=String.fromCharCode((i&63)|128)
}else{f+=String.fromCharCode((i>>12)|224);
f+=String.fromCharCode(((i>>6)&63)|128);
f+=String.fromCharCode((i&63)|128)
}}}return f
};
var a=function(f){var g="";
var j=0;
var k=c1=c2=0;
while(j<f.length){k=f.charCodeAt(j);
if(k<128){g+=String.fromCharCode(k);
j++
}else{if((k>191)&&(k<224)){c2=f.charCodeAt(j+1);
g+=String.fromCharCode(((k&31)<<6)|(c2&63));
j+=2
}else{c2=f.charCodeAt(j+1);
c3=f.charCodeAt(j+2);
g+=String.fromCharCode(((k&15)<<12)|((c2&63)<<6)|(c3&63));
j+=3
}}}return g
};
d.extend({base64Encode:function(j){var f="";
var r,p,n,q,o,m,k;
var g=0;
j=e(j);
while(g<j.length){r=j.charCodeAt(g++);
p=j.charCodeAt(g++);
n=j.charCodeAt(g++);
q=r>>2;
o=((r&3)<<4)|(p>>4);
m=((p&15)<<2)|(n>>6);
k=n&63;
if(isNaN(p)){m=k=64
}else{if(isNaN(n)){k=64
}}f=f+b.charAt(q)+b.charAt(o)+b.charAt(m)+b.charAt(k)
}return f
},base64Decode:function(j){var f="";
var r,p,n;
var q,o,m,k;
var g=0;
j=j.replace(/[^A-Za-z0-9\+\/\=]/g,"");
while(g<j.length){q=b.indexOf(j.charAt(g++));
o=b.indexOf(j.charAt(g++));
m=b.indexOf(j.charAt(g++));
k=b.indexOf(j.charAt(g++));
r=(q<<2)|(o>>4);
p=((o&15)<<4)|(m>>2);
n=((m&3)<<6)|k;
f=f+String.fromCharCode(r);
if(m!=64){f=f+String.fromCharCode(p)
}if(k!=64){f=f+String.fromCharCode(n)
}}f=a(f);
return f
}})
})(jQuery);
(function(b){var a="waitForImages";
b.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};
b.expr[":"].uncached=function(e){if(!b(e).is('img[src!=""]')){return false
}var d=document.createElement("img");
d.src=e.src;
return !d.complete
};
b.fn.waitForImages=function(f,d,e){if(b.isPlainObject(arguments[0])){d=f.each;
e=f.waitForAll;
f=f.finished
}f=f||b.noop;
d=d||b.noop;
e=!!e;
if(!b.isFunction(f)||!b.isFunction(d)){throw new TypeError("An invalid callback was supplied.")
}return this.each(function(){var m=b(this),n=[];
if(e){var g=b.waitForImages.hasImageProperties||[],k=/url\((['"]?)(.*?)\1\)/g;
m.find("*").each(function(){var o=b(this);
if(o.is("img:uncached")){n.push({src:o.prop("src"),element:o[0]})
}b.each(g,function(r,u){var p=o.css(u);
if(!p){return true
}var q;
while(q=k.exec(p)){n.push({src:q[2],element:o[0]})
}})
})
}else{m.find("img:uncached").each(function(){n.push({src:this.src,element:this})
})
}var j=n.length,i=0;
if(j==0){f.call(m[0])
}b.each(n,function(p,o){var q=new Image;
b(q).bind("load."+a+" error."+a,function(r){i++;
d.call(o.element,i,j,r.type=="load");
if(i==j){f.call(m[0]);
return false
}});
q.src=o.src
})
})
}
})(jQuery);
(function($){var escape=/["\\\x00-\x1f\x7f-\x9f]/g,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},hasOwn=Object.prototype.hasOwnProperty;
$.toJSON=typeof JSON==="object"&&JSON.stringify?JSON.stringify:function(o){if(o===null){return"null"
}var pairs,k,name,val,type=$.type(o);
if(type==="undefined"){return undefined
}if(type==="number"||type==="boolean"){return String(o)
}if(type==="string"){return $.quoteString(o)
}if(typeof o.toJSON==="function"){return $.toJSON(o.toJSON())
}if(type==="date"){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();
if(month<10){month="0"+month
}if(day<10){day="0"+day
}if(hours<10){hours="0"+hours
}if(minutes<10){minutes="0"+minutes
}if(seconds<10){seconds="0"+seconds
}if(milli<100){milli="0"+milli
}if(milli<10){milli="0"+milli
}return'"'+year+"-"+month+"-"+day+"T"+hours+":"+minutes+":"+seconds+"."+milli+'Z"'
}pairs=[];
if($.isArray(o)){for(k=0;
k<o.length;
k++){pairs.push($.toJSON(o[k])||"null")
}return"["+pairs.join(",")+"]"
}if(typeof o==="object"){for(k in o){if(hasOwn.call(o,k)){type=typeof k;
if(type==="number"){name='"'+k+'"'
}else{if(type==="string"){name=$.quoteString(k)
}else{continue
}}type=typeof o[k];
if(type!=="function"&&type!=="undefined"){val=$.toJSON(o[k]);
pairs.push(name+":"+val)
}}}return"{"+pairs.join(",")+"}"
}};
$.evalJSON=typeof JSON==="object"&&JSON.parse?JSON.parse:function(str){return eval("("+str+")")
};
$.secureEvalJSON=typeof JSON==="object"&&JSON.parse?JSON.parse:function(str){var filtered=str.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");
if(/^[\],:{}\s]*$/.test(filtered)){return eval("("+str+")")
}throw new SyntaxError("Error parsing JSON, source is not valid.")
};
$.quoteString=function(str){if(str.match(escape)){return'"'+str.replace(escape,function(a){var c=meta[a];
if(typeof c==="string"){return c
}c=a.charCodeAt();
return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)
})+'"'
}return'"'+str+'"'
}
}(jQuery));
(function(a){a.fn.clearInput=function(b){var d=[];
a.each(a(this),function(e){d[e]=a(this).prop("value");
var f=a(this).prop("data-defaultvalue");
if(f){d[e]=f
}a(this).focusin(function(i){var g=a(this).prop("value");
if(g==d[e]){a(this).prop("value","")
}});
a(this).focusout(function(i){var g=a(this).prop("value");
if(g==""){a(this).prop("value",d[e])
}})
})
}
})(jQuery);
(function(a){a.fn.highlightTable=function(d){var i={delay:10};
var f=a.extend(i,d);
var g=[];
var b=[];
var e=[];
a.each(a(this),function(k){var j=a(this);
g[k]=j.find("tr");
var m=[];
if(ubs.util.ie6()){g[k].find("td:last-child, th:last-child").addClass("last-child")
}a.each(g[k],function(n){m[n]=a(this).find("td, th")
});
j.delegate("td, th","mouseenter mouseleave",function(){e[k]=a(this).index();
if(b[k]!==e[k]){a.each(m,function(n){m[n].eq(e[k]).toggleClass("highlight");
m[n].eq(b[k]).toggleClass("highlight")
});
b[k]=e[k]
}});
j.mouseleave(function(){a.each(m,function(n){m[n].eq(b[k]).toggleClass("highlight")
});
b[k]=undefined
})
})
}
})(jQuery);
(function(b){var d=[];
var a={init:function(K){var w=b(this),af=[],p=false,ag=0.2,ad="Alpha(Opacity="+ag*100+")",ab=[],B=false,R=0,ak="col-mainNav-wrapper",ap="data-nce-columnid",D=200,ai="slideDown",E="slideUp",L=Math.floor(Math.random()*99999),I=b('<button type="button" tabindex="-1" class="nce_close_button nce_overlay nce_dark_background"><div class="button-close button nce_dark_background"><span><span class="nce_close_text"></span></span></div></button>'),r=false,ah=false,Z=false,T,J,ao=b("#cboxOverlay"),q=b("#main"),al=b("#doc");
T={blockPage:false,opacity:0.2,isFixedHeight:true,isCloseButton:false,mode:"hover",overlayOpen:"mouseenter",overlayCloseOnClick:false,overlayCloseOnMouseLeave:true,delayOpen:100,delayClose:500,openStart:function(){},openEnd:function(){},closeStart:function(){},closeEnd:function(){}};
b(document).on("keydown",function(aq){switch(aq.keyCode){case b.ui.keyCode.ESCAPE:C(aq);
break
}});
b.each(w,function(){var aA=b(this),aq=b.extend(T,K),ay=aA.siblings(".box-overlay"),ar,aB,av,ax,at=ay.parent(),az,au,aw=d.length;
if(aq.mode==="click"){aq.overlayOpen="click";
aq.overlayCloseOnClick=true
}aA.addClass("clMenuAccessible");
r=j(aA);
ah=P(aA);
if(r){k(aA)
}Z=F(ay);
J=N(aq.overlayOpen);
af[aw]=aA;
ar="subMenu_"+L+"_"+aw,af[aw].attr({"aria-controls":ar,"aria-expanded":false,"data-submenuid":aw});
ay.attr({id:ar,"aria-hidden":true});
d[aw]=ay.find("a");
d[aw].attr("tabindex",-1);
p=aq.blockPage;
ag=aq.opacity;
aB=ay.data("closebutton")!==undefined;
if(aB===true){av=ay.data("closebutton")+"&nbsp; X";
ax=I.clone(true);
ax.find(".nce_close_text").html(av);
ax.on("click",function(aC){aC.stopImmediatePropagation();
z(ay)
});
ax.mouseenter(function(){ay.clearQueue();
return false
});
at.append(ax)
}aA.on("click",function(aC){if(B&&aq.overlayCloseOnClick){x(af[aw],aC,true)
}aC.preventDefault()
}).on("keydown",function(aC){switch(aC.keyCode){case b.ui.keyCode.TAB:if(B){x(af[aw],aC,false)
}break;
case b.ui.keyCode.ENTER:if(!B){o(af[aw],aC,true)
}else{x(af[aw],aC,true)
}break;
case b.ui.keyCode.SPACE:if(!B){o(af[aw],aC,true)
}else{x(af[aw],aC,true)
}break;
case b.ui.keyCode.ESCAPE:x(af[aw],aC,true);
break;
case b.ui.keyCode.UP:W(d[aw],aC,true);
break;
case b.ui.keyCode.DOWN:i(d[aw],aC,true);
break;
case b.ui.keyCode.LEFT:i(d[aw],aC,true);
break;
case b.ui.keyCode.RIGHT:W(d[aw],aC,true);
break
}}).on("openStart",function(aC){b(this).addClass("opened");
b(this).attr("aria-expanded",true);
aq.openStart(aC);
if(p){m(b(this),ay)
}}).on("openEnd",function(aC){aq.openEnd(aC);
an(true)
}).on("closeStart",function(aC){aq.closeStart(aC)
}).on("closeEnd",function(aC){b(this).removeClass("opened");
b(this).attr("aria-expanded",false);
aq.closeEnd(aC);
S();
if(p){am()
}an(false)
});
ay.on("keydown","a",function(aG){var aE=b(this),aD=aE.parent(),aC,aF;
aF=n(aE,d[aw]);
switch(aG.keyCode){case b.ui.keyCode.TAB:M(aG,aE,aw,aF);
break;
case b.ui.keyCode.ENTER:f(aG,aE,aD);
break;
case b.ui.keyCode.SPACE:e(aG,aE,aD);
break;
case b.ui.keyCode.ESCAPE:x(af[aw],aG,true);
break;
case b.ui.keyCode.UP:G(aG,aE,aw,aF);
break;
case b.ui.keyCode.DOWN:ac(aG,aE,aw,aF);
break;
case b.ui.keyCode.LEFT:aa(aG,aE,aw,aF);
break;
case b.ui.keyCode.RIGHT:aj(aG,aE,aC,ay,aw,aF);
break
}}).on("focus","a",function(){var aD=b(this),aC=aD.parent();
if(aC.hasClass("folderPage")||aC.hasClass("folder")){aD.trigger("click")
}}).on("click","a",function(aE){var aD=b(this),aC=aD.parent();
if(aC.hasClass("folderPage")||aC.hasClass("folder")){aE.preventDefault()
}});
az=(J==="focus")?aA:aA.parent();
az.on("mouseenter",function(aD,aC){ay.clearQueue()
});
az.on(J,function(aD,aC){if(aD!==undefined&&aC!==undefined){if(typeof aC==="object"&&aC.hasOwnProperty("redraw")){if(aC.redraw===false){return false
}}}U(ay,aA,T.delayOpen,ai,D)
});
aA.parent().on("hideOverlay",function(){z(ay)
}).on("mouseleave",function(aC){if(aq.overlayCloseOnMouseLeave){z(ay,T.delayClose)
}})
});
function N(ar){var aq;
if(ar!=="click"&&ar!=="mouseenter"&&ar!=="focus"){aq=J
}else{aq=ar
}return aq
}function C(aq){var ar=b("a.clMenuAccessible.opened");
x(ar,aq,true)
}function z(ar,aq){if(!aq){aq=0
}ar.delay(aq).queue(function(){Y(ar,w,E,D);
b(this).dequeue()
})
}function P(aq){var ar,at;
at=aq.parent().find("div.mainNavigator");
if(at.data("nopreview")===true){ar=false
}else{if(at.attr("data-navsections")){ar=true
}else{ar=false
}}return ar
}function j(aq){var ar;
if(aq.parent().find("div.mainNavigator").attr("data-navsections")){ar=true
}else{if(aq.parent().find("div.etfNavigator").length){ar=true
}else{ar=false
}}return ar
}function F(aq){var ar;
if(aq.find(".box-accordion")){ar=true
}else{ar=false
}return ar
}function an(aq){if(typeof aq==="boolean"){B=aq
}}function S(){ab=[];
R=0
}function k(aq){if(aq.parent().find("div.etfNavigator").length){aq.parent().find("div.etfNavigator").find(".etfNavigator__assets").attr("data-nce-columnid",0).end().find(".etfNavigator__tags").attr("data-nce-columnid",1).end().find(".etfNavigator__products").attr("data-nce-columnid",2)
}}function n(aq,at){var ar;
b.each(at,function(au){var av=b(this);
if(av.is(aq)){ar=au
}});
return ar
}function G(au,aq,at,ar){au.preventDefault();
if(aq.hasClass("accordion-header")){au.stopImmediatePropagation();
if(O(at,ar)===false){aq.focus()
}}else{u(at,ar,true)
}}function ac(au,aq,at,ar){au.preventDefault();
if(aq.hasClass("accordion-header")){au.stopImmediatePropagation();
if(A(at,ar)===false){aq.focus()
}}else{Q(at,ar,true)
}aq.parent().removeClass("active");
aq.closest("tr").removeClass("trFocused")
}function aj(ax,at,ar,aw,av,au){var aq=at.parent();
ax.preventDefault();
if(at.closest(".etfNavigator").length){if(at.attr("data-show-filter")){V(at);
at.closest(".etfNavigator").find(".etfNavigator__tags:visible > div:visible a").first().focus()
}if(at.attr("data-filterasset")){V(at);
at.closest(".etfNavigator").find(".etfNavigator__products:visible > table tbody tr:visible").first().addClass("trFocused").find("a").first().focus()
}}else{if(aq.hasClass("folder")||aq.hasClass("folderPage")){V(at)
}if(at.hasClass("accordion-header")){ax.stopImmediatePropagation();
if(R===0){if(A(av,au)===false){at.focus()
}}else{if(R>0){if(at.is(ab[R-1])){ar=aw.find("."+ak+"["+ap+"="+R+"]");
ar.find(".mainNav-list").filter(":visible").find("a").first().trigger("click").focus()
}else{Q(av,au,true)
}}}}else{if(R===0){Q(av,au,true)
}else{if(R>0){if(at.is(ab[R-1])){ar=aw.find("."+ak+"["+ap+"="+R+"]");
ar.find(".mainNav-list").filter(":visible").find("a").first().focus()
}else{Q(av,au,true)
}}}}}}function aa(au,aq,at,ar){au.preventDefault();
if(aq.hasClass("accordion-header")){au.stopImmediatePropagation();
if(R===0){if(O(at,ar)===false){aq.focus()
}}else{if(R>0){aq.parent().removeClass("active");
y()
}}}else{if(R===0){u(at,ar,true)
}else{if(R>0){aq.parent().removeClass("active");
aq.closest("tr").removeClass("trFocused");
y()
}}}}function f(at,ar,aq){if(ar.closest(".etfNavigator__assetList").length||ar.closest(".etfNavigator__filterList").length){at.preventDefault();
ab[R]=ar;
R=R+1;
ar.trigger(J,[{redraw:false}])
}else{if(!aq.hasClass("folder")){if(window.console&&window.console.log){window.console.log("About to access to the link: ",at.target.href)
}}else{if(aq.hasClass("folder")||aq.hasClass("folderPage")){at.preventDefault();
ab[R]=ar
}}}}function e(at,ar,aq){at.preventDefault();
f(at,ar,aq)
}function M(au,aq,at,ar){au.preventDefault();
if(aq.hasClass("accordion-header")){g(aq,au)
}if(!au.shiftKey){ae(at,ar,true)
}else{X(at,ar,true)
}}function m(at,aq){var ar=b(".blockBox");
if(!ar.length){ar=b('<div class="blockBox"></div>');
ar.css({position:"fixed",top:0,left:0,width:"100%",height:"100%",opacity:ag,filter:"Alpha(Opacity="+ag*100+")",display:"none","background-color":"black","z-index":9998});
b("body").append(ar);
ar.on("click",function(au){z(aq);
au.preventDefault();
return false
})
}ar.show()
}function am(){b(".blockBox").remove()
}function o(ar,at,aq){if(aq!==false){at.preventDefault();
at.stopImmediatePropagation()
}ar.parent().trigger(J);
ar.focus()
}function x(ar,at,aq){if(aq!==false){at.preventDefault();
at.stopImmediatePropagation()
}ar.parent().trigger("hideOverlay");
ar.trigger("focus",[{redraw:false}])
}function H(aq){aq.find(".ui-accordion-header").attr("tabindex","-1")
}function g(ar,at){var aq;
if(!at.shiftKey){if(!ar.parent().hasClass("ui-state-active")){ar.trigger("click")
}}else{if(ar.parent().hasClass("ui-state-active")){ar.trigger("click")
}aq=ar.parent().prevAll(".ui-accordion-header").first();
if(!aq.hasClass("ui-state-active")){aq.trigger("click")
}}}function U(at,au,ar,aq,ay){var av,ax={complete:function(){if(aw&&aw.length){aw.css("display","block")
}au.trigger("openEnd");
H(at);
if(!av){at.css({height:"auto",overflowY:"hidden",overflowX:"hidden"})
}},duration:ay},aw=au.parent().find(".nce_close_button");
au.trigger("openStart");
av=au.hasClass("menu-item");
if(av){if(ao.length===0){ao=b("#cboxOverlay")
}ao.css({opacity:0.4,filter:"Alpha(Opacity=40)",display:"block"});
q.css({zIndex:"",position:"static"});
al.css({position:"static"});
if(b("body").hasClass("ie6")){ao.css({width:b(window).width(),height:b(document).height()})
}}switch(aq){case"slideDown":at.clearQueue().finish().slideDown(ax);
break;
case"show":at.clearQueue().finish().show(ax);
break;
case"fadeIn":at.clearQueue().finish().fadeIn(ax);
break;
default:at.clearQueue().finish().slideDown(ax);
break
}}function Y(ar,at,aq,aw){var av={complete:function(){ao.css({opacity:"",filter:"",display:"none"});
at.trigger("closeEnd")
},duration:aw},au=at.parent().find(".nce_close_button");
at.trigger("closeStart");
if(au&&au.length){au.css("display","none")
}switch(aq){case"slideUp":ar.clearQueue().finish().slideUp(av);
break;
case"hide":ar.clearQueue().finish().hide(av);
break;
case"fadeOut":ar.clearQueue().finish().fadeOut(av);
break;
default:ar.clearQueue().finish().slideUp(av);
break
}}function W(aq,at,ar){if(ar!==false){at.preventDefault()
}aq.last().focus()
}function i(aq,at,ar){if(ar!==false){at.preventDefault()
}aq.first().focus()
}function A(ar,aq){var au=d[ar].slice(aq+1).filter("a.accordion-header"),at;
if(au.length){au.first().focus();
at=true
}else{at=false
}return at
}function O(ar,aq){var au=d[ar].slice(0,aq).filter("a.accordion-header"),at;
if(au.length){au.last().focus();
at=true
}else{at=false
}return at
}function y(){ab[R-1].focus();
R=R-1
}function V(aq){if(r){ab[R]=aq;
R=R+1
}}function Q(au,av,ay){var az=d[au].slice(av+1).filter(":not(a.accordion-header):visible").first(),ax,aw,at,aq,ar;
ax=az.closest(".ui-accordion-content");
if(ax.length){if(!ax.hasClass("ui-accordion-content-active")){ax.prev(".ui-accordion-header").trigger("click")
}}if(az.closest(".etfNavigator__products").length){aw=b(document.activeElement).closest("tr");
at=az.closest("tr");
az.closest(".etfNavigator__products").find("table tbody tr.trFocused").removeClass("trFocused");
if(at.is(aw)){aq=az.parents("tr").nextAll(":visible");
if(aq.length){az=aq.first().addClass("trFocused").find("a").first()
}else{at.addClass("trFocused");
return false
}}else{at.addClass("trFocused")
}}if(az.closest(".etfNavigator__filterList").length){ar=az.data();
if(!ar.hasOwnProperty("filterasset")&&!ar.hasOwnProperty("filtertags")){ay=false
}}if(az.closest(".etfNavigator").length){if(!az.closest("div[data-nce-columnid="+R+"]").length){return false
}}if(ah){if(!az.closest("div[data-nce-columnid="+R+"]").length){return false
}}if(ay!==false&&r){az.trigger("click")
}az.focus().trigger("scrollTo.menulink").trigger("goToNext.menulink")
}function u(au,av,ay){var az=d[au].slice(0,av).filter(":not(a.accordion-header):visible").last(),ax,aw,at,aq,ar;
ax=az.closest(".ui-accordion-content");
if(ax.length){if(!ax.hasClass("ui-accordion-content-active")){ax.prev(".ui-accordion-header").trigger("click")
}}if(az.closest(".etfNavigator__products").length){aw=b(document.activeElement).closest("tr");
at=az.closest("tr");
az.closest(".etfNavigator__products").find("table tbody tr.trFocused").removeClass("trFocused");
if(at.is(aw)){aq=az.closest("tr").prevAll(":visible");
if(aq.length){az=aq.first().addClass("trFocused").find("a").first()
}else{at.addClass("trFocused");
return false
}}else{at.addClass("trFocused")
}}if(az.closest(".etfNavigator__filterList").length){ar=az.data();
if(!ar.hasOwnProperty("filterasset")&&!ar.hasOwnProperty("filtertags")){ay=false
}}if(az.closest(".etfNavigator").length){if(!az.closest("div[data-nce-columnid="+R+"]").length){return false
}}if(ay!==false&&r){az.trigger("click")
}az.focus().trigger("scrollTo.menulink").trigger("goToPrevious.menulink")
}function X(au,at,av){var aw,ar,aq=false;
if(at===0){aq=true
}else{aw=b(d[au][at-1])
}if(aq){return
}if(aw.closest(".etfNavigator__filterList").length){ar=aw.data();
if(!ar.hasOwnProperty("filterasset")&&!ar.hasOwnProperty("filtertags")){av=false
}}if(av!==false&&r){aw.trigger("click")
}aw.focus()
}function ae(au,at,av){var ar,aq;
if(at+1<d[au].length){ar=b(d[au][at+1])
}else{return false
}if(ar.closest(".etfNavigator__filterList").length){aq=ar.data();
if(!aq.hasOwnProperty("filterasset")&&!aq.hasOwnProperty("filtertags")){av=false
}}if(av!==false&&r){ar.trigger("click")
}ar.focus()
}},updateLinks:function(){var f=b(this).data("submenuid"),e=b("#"+b(this).attr("aria-controls"));
f=parseInt(f,10);
d[f]=e.find("a");
d[f].attr("tabindex",-1)
}};
b.fn.overlayMenu=function(e){if(a[e]){return a[e].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof e==="object"||!e){return a.init.apply(this,arguments)
}else{b.error("Method "+e+" does not exist")
}}}
}(jQuery));
(function(a){a.fn.ticker=function(d){var g={animationspeed:50,animationsteps:2,direction:"rtl"},f,k=[];
g.direction=a("html").css("direction");
f=a.extend(g,d);
a.each(a(this),function(w){var z=a(this),u,o,r,p=0,B,q,m=z.find(".ticker__disconnector").length===0?false:true,A=z.parents(".emergencycall").first().attr("data-disconnector")||"+++";
if(z.hasClass("stackedItem")){o=z.children();
r=o.length;
if(r===1&&!m){b(z,A);
q=function(F){var G=a(this),E=G.find(".emergencyBanner.stackedItem.oneItemTicker a").first().attr("href");
F.preventDefault();
a(location).attr("href",E)
};
z.on("click",q)
}else{B=function(){var E=a(this),F=E.clone();
F.data("iscloned",true);
E.parent().append(F)
};
while(r<8&&p<4){o.each(B);
o=z.children();
r=o.length;
p=p+1
}if(!m){o.each(function(){var E=a(this);
a('<li class="disconnector">'+A+"</li>").insertAfter(E)
});
u=z.find("li:not(.disconnector)");
u.css({"margin-left":0,"margin-right":0})
}}}var y=z.find("li");
var n=z.hasClass("emergencyBanner");
k[w]=[];
k[w].numItems=y.length;
k[w].width=z.width();
k[w].emergencyIconWidth=0;
k[w].accumulatedWidth=(function(F){var E=0;
F.each(function(){var G=a(this);
E+=G.width()
})
}(y));
var x=z.prev();
if(x.hasClass("emergencyIcon")){k[w].emergencyIconWidth=x.outerWidth()
}var D=false;
var C=z.siblings("a.icon-pause");
if(C.length===0){C=z.parent().siblings("a.icon-pause")
}C.click(function(E){E.preventDefault();
if(D){j(k[w]);
a(this).removeClass("icon-play").addClass("icon-pause");
D=false
}else{clearTimeout(k[w].timeout);
a(this).removeClass("icon-pause").addClass("icon-play");
D=true
}});
a.each(y,function(E){var F=a(this);
k[w][E]={};
k[w][E].item=F;
k[w][E].item_pos_left=Math.round(F.position().left);
k[w][E].item_width=F.outerWidth(true)
});
a.each(k[w],function(E){this.item.css({position:"absolute",left:this.item_pos_left});
var F=this.item.find("a");
if(E!==0){F.attr("tabIndex",-1)
}if(n){this.item.mouseenter(function(){clearTimeout(k[w].timeout)
});
this.item.bind("focusout mouseleave",function(I,H){if(H!==true){if(!D){j(k[w])
}a.each(k[w],function(J){if(E!==J){this.item.css("display","inline")
}});
F.trigger("blur",true)
}})
}else{F.mouseenter(function(){clearTimeout(k[w].timeout);
a.each(k[w],function(H){if(E!==H){this.item.css("display","none")
}});
if(k[w][E].item_pos_left>50){k[w][E].item.css("left",k[w][E].item_pos_left-50)
}else{if(k[w][E].item_pos_left<0){k[w][E].item.css("left",0)
}}});
F.on("focusout mouseleave",function(I,H){if(H!==true){k[w][E].item.css("left",k[w][E].item_pos_left);
if(!D){j(k[w])
}a.each(k[w],function(J){if(E!==J){this.item.css("display","inline")
}});
F.trigger("blur",true)
}})
}var G=false;
F.bind("focusin mousedown mouseup",function(H){if(H.type==="mousedown"){H.preventDefault();
G=true;
return false
}if(H.type==="mouseup"){G=false
}if(H.type==="focusin"&&!G){e(w,E,a(this))
}})
});
j(k[w])
});
function b(q,o){var r,n,m=6,p;
r=q.find("> li").clone().find("span.hidden").remove().end().find("a").html();
n=r.length;
if(n<=50){m=12
}if(n<=150){a('<li class="disconnector">'+o+"</li>").insertAfter(q.find("> li:not(.disconnector)"));
a("<li>"+q.find("> li").first().html()+"</li>").insertAfter(q.find("> li.disconnector"));
for(p=0;
p<m;
p=(p+1)){a('<li class="disconnector">'+o+"</li>").insertAfter(q.find("> li:not(.disconnector)").last());
a("<li>"+q.find("> li").first().html()+"</li>").data("iscloned",true).insertAfter(q.find("> li.disconnector").last())
}a('<li class="disconnector">'+o+"</li>").insertAfter(q.find("> li:not(.disconnector)").last());
liItems=q.find("li:not(.disconnector)");
liItems.css("margin-left",0).css("margin-right",0)
}}function e(n,m,o){clearTimeout(k[n].timeout);
a.each(k[n],function(p){if(m!==p){this.item.css("display","none")
}});
o.closest("li").css({left:k[n].emergencyIconWidth,right:0});
o.keydown(function(r){var p,q,u;
if(r.keyCode===a.ui.keyCode.TAB){p=m+1;
if(k[n][p].item.hasClass("disconnector")){p++
}q=k[n][p].item;
u=q.data("iscloned");
if(p<k[n].length&&(typeof u==="undefined"||typeof u===false)){q.css("display","block").find("a").focus();
return false
}}})
}function j(m){clearTimeout(m.timeout);
m.timeout=setTimeout(function(){a.each(m,function(n){i(this,m,n)
});
j(m)
},f.animationspeed)
}function i(o,m,n){if(o.item_pos_left+o.item_width>0){o.item_pos_left=o.item_pos_left-f.animationsteps
}else{var p=(f.direction==="rtl"?n-1:n-1);
p=(((p)%m.numItems)+m.numItems)%m.numItems;
o.item_pos_left=m[p].item_pos_left+m[p].item_width;
if(o.item_pos_left<m.width){o.item_pos_left=m.width
}}o.item.css("left",o.item_pos_left)
}}
}(jQuery));
(function(a){a.fn.initFlash=function(b){var e={width:528,height:300,version:"9.0.0",install:"",load:true};
var d=a.extend(e,b);
a.each(a(this),function(m){var q=a(this).find("span.flashPlaceholder");
var o=q.metadata().flash;
var k=a.extend({},d,o);
var n=q.prop("id");
var r=a(this).parents("div.flash").children();
var p=a(this).attr("data-publish");
k.path=q.children("a").prop("href");
var g=function(){FIT_swfobject.embedSWF(k.path,n,k.width,k.height,k.version,k.install,k.flashvars,k.params,k.attributes)
};
if(FIT_swfobject.hasFlashPlayerVersion(k.version)){if(p==="true"){var u=r.filter("div.imagePar");
if(u.length>0){u.hide()
}else{r.filter("div.image").hide()
}}if(k.load){g()
}else{j(a(this))
}}else{if(p==="true"){var f=r.find("div.flashPar");
if(f.length>0){f.hide()
}else{r.filter("div.flashobject").hide()
}}}function j(w){var i=a('<a href="#" class="flash-click-wrapper" />');
w.wrap(i);
var x=a('<div class="imageStatus" />');
w.append(x);
x.css({top:(w.height()/2-x.height()/2)});
w.parent().click(function(){w.unwrap();
x.remove();
g();
return false
})
}})
}
})(jQuery);
(function(a){a.widget("ubs.horizontalContentSlider",{options:{slideAnimation:true,slideSpeed:250,slideLength:"all",scrollBar:true,numberVisibleElements:0,keyboardControl:true,direction:"ltr"},_create:function(){var b=this;
var e=this.element.find("div.sliderList-pane");
var f=e.find(".sliderList-content");
var d=f.find("ul.sliderList");
this.listLinks=d.find("li>a");
this.prevNav=a('<div class="prevSliderElement"><a href="" tabindex="-1"></a></div>');
this.nextNav=a('<div class="nextSliderElement"><a href="" tabindex="-1"></a></div>');
this.scrollBar=a('<div class="scroll-bar-wrap ui-widget-content ui-corner-bottom"><div class="scroll-bar"></div></div>');
this.prevNav.click(function(){b._slideContent("prev");
return false
});
this.nextNav.click(function(){b._slideContent("next");
return false
});
e.prepend(this.prevNav).append(this.nextNav);
if(this.options.scrollBar){e.append(this.scrollBar)
}this.scrollPane=f;
this.scrollContent=d;
this.scrollbar=this.scrollBar.find(".scroll-bar").slider({slide:function(g,i){b._moveContent(g,i)
},change:function(g,i){b._moveContent(g,i)
}});
this.handleHelper=this.scrollbar.find(".ui-slider-handle").mousedown(function(){b.scrollbar.width(b.handleHelper.width())
}).mouseup(function(){b.scrollbar.width("100%");
b._statusChangeButton(b.scrollbar.slider("option","value"))
}).append("<span class='ui-icon ui-icon-grip-dotted-vertical'></span>").wrap("<div class='ui-handle-helper-parent'></div>").parent();
this.scrollPane.css("overflow","hidden");
this.options.direction=a("html").css("direction");
this._setAriaAttributes()
},_init:function(){var b=this;
var f=this.scrollPane.width();
if(this.options.numberVisibleElements>0){this.scrollContent.children().children().width(f/this.options.numberVisibleElements/12+"em")
}var d=this.scrollContent.width();
var e=(d/(d-f));
this.moveRate=((100/this.scrollContent.children().length)*e);
if(this.options.slideLength==="all"){this.options.slideLength=Math.floor(f/this.scrollContent.find("li:first-child").width())
}b._sizeScrollbar();
if(this.options.direction==="rtl"){b.scrollbar.slider("option","value",100)
}b._statusChangeButton(b.scrollbar.slider("option","value"));
if(this.options.keyboardControl){this._keyboardControl()
}b.element.css("visibility","visible")
},destroy:function(){this.prevNav.remove();
this.nextNav.remove();
this.scrollBar.remove();
this.scrollPane.removeAttr("style");
a.Widget.prototype.destroy.call(this)
},_keyboardControl:function(){var b=this;
if(this.options.direction==="rtl"){this.listLinks.not(":last").attr("tabIndex","-1")
}else{this.listLinks.not(":first").attr("tabIndex","-1")
}this.element.bind("keydown.selectmenu",function(e){var d=false;
switch(e.keyCode){case a.ui.keyCode.UP:b._moveSelect(e.target,-1);
break;
case a.ui.keyCode.DOWN:b._moveSelect(e.target,1);
break;
case a.ui.keyCode.LEFT:b._moveSelect(e.target,-1);
break;
case a.ui.keyCode.RIGHT:b._moveSelect(e.target,1);
break;
default:d=true
}return d
})
},_moveSelect:function(g,f){var b=this.listLinks.index(g);
var e=this.listLinks.length;
var d=(((b+f)%e)+e)%e;
a(g).attr("tabIndex","-1");
var j=((100/this.listLinks.length)*(d+1===e?d+1:d));
this._slideContent("",j,d)
},_setAriaAttributes:function(){this.scrollContent.attr("role","listbox");
this.scrollContent.find("li").attr("role","presentation");
this.listLinks.attr("role","option")
},_slideContent:function(f,g,d){var e=this.scrollbar.slider("option","value");
var b;
if(g!==undefined){b=g;
this._slideAnimation(e,b,d)
}else{if(f==="prev"){b=this._newSliderPosition(e,f);
this._slideAnimation(e,b)
}else{if(f==="next"){b=this._newSliderPosition(e,f);
this._slideAnimation(e,b)
}}}this._statusChangeButton(b)
},_statusChangeButton:function(b){if(b===0){this.prevNav.children("a").addClass("inactive");
this.nextNav.children("a").removeClass("inactive")
}else{if(b===100){this.nextNav.children("a").addClass("inactive");
this.prevNav.children("a").removeClass("inactive")
}else{this.prevNav.children("a").removeClass("inactive");
this.nextNav.children("a").removeClass("inactive")
}}},_slideAnimation:function(f,d,e){var b=this;
if(this.options.slideAnimation){a({sliderMovPos:f}).animate({sliderMovPos:d},{duration:this.options.slideSpeed,step:function(){b.scrollbar.slider("option","value",this.sliderMovPos)
},complete:function(){b.scrollbar.slider("option","value",d);
b.listLinks.eq(e).attr("tabIndex","0").focus()
}})
}else{b.scrollbar.slider("option","value",d);
b.listLinks.eq(e).attr("tabIndex","0").focus()
}},_newSliderPosition:function(e,d){var b;
if(d==="next"){b=(Math.floor(((e/this.moveRate)*this.moveRate)+(this.moveRate*this.options.slideLength)));
if(b>=100){b=100
}}else{if(d==="prev"){b=(Math.ceil(((e/this.moveRate)*this.moveRate)-(this.moveRate*this.options.slideLength)));
if(b<=0){b=0
}}}return b
},_sizeScrollbar:function(){var d=this.scrollContent.width()-this.scrollPane.width();
if(d<0){this.handleHelper.hide()
}else{var e=d/this.scrollContent.width();
var b=this.scrollPane.width()-(e*this.scrollPane.width());
this.scrollbar.find(".ui-slider-handle").css({width:b,"margin-left":-b/2});
this.handleHelper.width("").width(this.scrollbar.width()-b)
}},_moveContent:function(b,d){if(this.scrollContent.width()>this.scrollPane.width()){this.scrollContent.css("margin-left",Math.round(d.value/100*(this.scrollPane.width()-this.scrollContent.width()))+"px")
}else{this.scrollContent.css("margin-left",0)
}},_resetValue:function(){var e=this.scrollPane.width()-this.scrollContent.width();
var d=this.scrollContent.css("margin-left")==="auto"?0:parseInt(this.scrollContent.css("margin-left"),10);
var b=Math.round(d/e*100);
this.scrollbar.slider("value",b)
},_reflowContent:function(){var b=this.scrollContent.width()+parseInt(this.scrollContent.css("margin-left"),10);
var d=this.scrollPane.width()-b;
if(d>0){this.scrollContent.css("margin-left",parseInt(this.scrollContent.css("margin-left"),10)+d)
}}})
})(jQuery);
(function(a){a.widget("ubs.tabNavCorrection",{options:{},_create:function(){},_init:function(){var o=this;
var e=o.element.find("ul.ui-tabs-nav");
var k=e.children();
var g=k.length;
var n=0;
var f={};
e.removeClass("list-link").unwrap();
var i=o.element.find("div.ui-tabs-panel");
if(o.element.hasClass("verticalNav")){var j=a("<div class='tabNav-content-wrapper'></div>");
j.append(i);
o.element.append(j)
}o.element.waitForImages(function(){ubs.ui.heightAdjust(i)
});
if(o.element.hasClass("verticalNav")){var d=e.height()+parseFloat(e.css("marginTop"));
var b=parseFloat(i.eq(0).css("paddingTop"))+parseFloat(i.eq(0).css("paddingBottom"));
a.each(i,function(){var p=a(this);
p.css("minHeight",d-b)
});
if(ubs.util.checkBrowser("ie",8,true)){e.width(e.width());
var m=a("html").css("direction");
a.each(k,function(){a(this).width("100%");
a(this).find("a").css("display","block");
if(m==="rtl"){a(this).find(".linkiconWrapper").css("float","right");
a(this).find(".linkText").css("float","right")
}})
}}else{a.each(k,function(r){var q=a(this);
var p=100/g;
if(ubs.util.checkBrowser("ie",7)){p-=0.06
}q.css({width:(p)+"%","z-index":1});
f[r]=q.children();
n=(f[r].height()>n?f[r].height():n)
});
a.each(k,function(p){f[p].height(n)
})
}}})
})(jQuery);
(function(a){a.widget("ubs.stageteaser",{options:{slideAnimation:true,slideSpeed:250,delay:500,direction:"ltr"},_create:function(){},_init:function(){var b=this;
b.ul=b.element.find("ul.stageTabs");
b.li=b.ul.children();
b.tabs=b.ul.find(".body-stageTab");
this._prepareTabs();
b._keyboardControl();
b._setAriaAttributes();
b.tabs.eq(0).attr("tabIndex","0");
b.tabs.hover(function(){b._slideUp(this)
},function(){b._slideDown(this)
});
b.tabs.focusin(function(){b._slideUp(this)
});
b.tabs.focusout(function(){b._slideDown(this)
})
},destroy:function(){var b=this;
a.each(b.tabs,function(d){a(this).css({height:""});
this.components.css({display:""})
});
a.Widget.prototype.destroy.call(this)
},_prepareTabs:function(){var b=this;
b.li.addClass("ui-default");
b.element.waitForImages(function(){b.tabHeight=b._maxHeight(b.tabs)
});
a.each(b.tabs,function(d){a(this).height(b.tabHeight)
})
},_maxHeight:function(b){var d=0;
a.each(b,function(g){var f=a(this);
this.maxHeight=f.height();
this.components=f.find(".visual, .teaser-body ").hide();
var e=f.height();
d=(e>d?e:d)
});
return d
},_slideUp:function(b){clearTimeout(b.slideDownTimer);
b.components.stop(true,true).show();
a(b).stop().animate({height:b.maxHeight},this.options.slideSpeed).closest("li").attr("aria-expanded",true).attr("aria-selected",true).addClass("ui-active").removeClass("ui-default")
},_slideDown:function(d){var b=this;
d.slideDownTimer=window.setTimeout(function(e){a(d).stop().animate({height:b.tabHeight},b.options.slideSpeed).closest("li").attr("aria-expanded",false).attr("aria-selected",false).removeClass("ui-active").addClass("ui-default");
d.components.stop(true,true).hide("fast")
},b.options.delay,b)
},_keyboardControl:function(){var b=this;
b.tabs.bind("keydown",function(e){var d=false;
switch(e.keyCode){case a.ui.keyCode.UP:b._moveSelect(this,-1);
break;
case a.ui.keyCode.DOWN:b._moveSelect(this,1);
break;
case a.ui.keyCode.LEFT:b._moveSelect(this,-1);
break;
case a.ui.keyCode.RIGHT:b._moveSelect(this,1);
break;
default:d=true
}return d
})
},_moveSelect:function(g,f){var b=this.tabs.index(g);
var e=this.tabs.length;
var d=(((b+f)%e)+e)%e;
a(g).attr("tabIndex","-1");
this.tabs.eq(d).focus().attr("tabIndex","0")
},_setAriaAttributes:function(){var b=this;
b.ul.attr("role","tablist");
b.li.attr("role","tab").attr("aria-expanded",false).attr("aria-selected",false)
}})
})(jQuery);
(function(a){a.widget("ui.selectmenu",{options:{appendTo:"body",typeAhead:1000,style:"dropdown",positionOptions:null,width:null,menuWidth:null,handleWidth:26,maxHeight:null,icons:null,format:null,escapeHtml:false,bgImage:function(){}},_create:function(){var b=this,f=this.options;
var e=this.element.uniqueId().attr("id");
this.ids=[e,e+"-button",e+"-menu"];
this._safemouseup=true;
this.isOpen=false;
this.newelement=a("<a />",{"class":"ui-selectmenu ui-widget ui-state-default ui-corner-all",id:this.ids[1],role:"button",href:"#nogo",tabindex:this.element.attr("disabled")?1:0,"aria-haspopup":true,"aria-owns":this.ids[2]});
this.newelementWrap=a("<span />").append(this.newelement).insertAfter(this.element);
var d=this.element.attr("tabindex");
if(d){this.newelement.attr("tabindex",d)
}this.newelement.data("selectelement",this.element);
this.selectmenuIcon=a('<span class="ui-selectmenu-icon ui-icon"></span>').prependTo(this.newelement);
this.newelement.prepend('<span class="ui-selectmenu-status" />');
this.element.bind({"click.selectmenu":function(g){b.newelement.focus();
g.preventDefault()
}});
this.newelement.bind("mousedown.selectmenu",function(g){b._toggle(g,true);
if(f.style=="popup"){b._safemouseup=false;
setTimeout(function(){b._safemouseup=true
},300)
}g.preventDefault()
}).bind("click.selectmenu",function(g){g.preventDefault()
}).bind("keydown.selectmenu",function(i){var g=false;
switch(i.keyCode){case a.ui.keyCode.ENTER:g=true;
break;
case a.ui.keyCode.SPACE:b._toggle(i);
break;
case a.ui.keyCode.UP:if(i.altKey){b.open(i)
}else{b._moveSelection(-1)
}break;
case a.ui.keyCode.DOWN:if(i.altKey){b.open(i)
}else{b._moveSelection(1)
}break;
case a.ui.keyCode.LEFT:b._moveSelection(-1);
break;
case a.ui.keyCode.RIGHT:b._moveSelection(1);
break;
case a.ui.keyCode.TAB:g=true;
break;
case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.HOME:b.index(0);
break;
case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.END:b.index(b._optionLis.length);
break;
default:g=true
}return g
}).bind("keypress.selectmenu",function(g){if(g.which>0){b._typeAhead(g.which,"mouseup")
}return true
}).bind("mouseover.selectmenu",function(){if(!f.disabled){a(this).addClass("ui-state-hover")
}}).bind("mouseout.selectmenu",function(){if(!f.disabled){a(this).removeClass("ui-state-hover")
}}).bind("focus.selectmenu",function(){if(!f.disabled){a(this).addClass("ui-state-focus")
}}).bind("blur.selectmenu",function(){if(!f.disabled){a(this).removeClass("ui-state-focus")
}});
a(document).bind("mousedown.selectmenu-"+this.ids[0],function(g){if(b.isOpen&&!a(g.target).closest("#"+b.ids[1]).length){b.close(g)
}});
this.element.bind("click.selectmenu",function(){b._refreshValue()
}).bind("focus.selectmenu",function(){if(b.newelement){b.newelement[0].focus()
}});
if(!f.width){f.width=this.element.outerWidth()
}this.newelement.width(f.width);
this.element.hide();
this.list=a("<ul />",{"class":"ui-widget ui-widget-content","aria-hidden":true,role:"listbox","aria-labelledby":this.ids[1],id:this.ids[2]});
this.listWrap=a("<div />",{"class":"ui-selectmenu-menu"}).append(this.list).appendTo(f.appendTo);
this.list.bind("keydown.selectmenu",function(i){var g=false;
switch(i.keyCode){case a.ui.keyCode.UP:if(i.altKey){b.close(i,true)
}else{b._moveFocus(-1)
}break;
case a.ui.keyCode.DOWN:if(i.altKey){b.close(i,true)
}else{b._moveFocus(1)
}break;
case a.ui.keyCode.LEFT:b._moveFocus(-1);
break;
case a.ui.keyCode.RIGHT:b._moveFocus(1);
break;
case a.ui.keyCode.HOME:b._moveFocus(":first");
break;
case a.ui.keyCode.PAGE_UP:b._scrollPage("up");
break;
case a.ui.keyCode.PAGE_DOWN:b._scrollPage("down");
break;
case a.ui.keyCode.END:b._moveFocus(":last");
break;
case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:b.close(i,true);
a(i.target).parents("li:eq(0)").trigger("mouseup");
break;
case a.ui.keyCode.TAB:g=true;
b.close(i,true);
a(i.target).parents("li:eq(0)").trigger("mouseup");
break;
case a.ui.keyCode.ESCAPE:b.close(i,true);
break;
default:g=true
}return g
}).bind("keypress.selectmenu",function(g){if(g.which>0){b._typeAhead(g.which,"focus")
}return true
}).bind("mousedown.selectmenu mouseup.selectmenu",function(){return false
});
a(window).bind("resize.selectmenu-"+this.ids[0],a.proxy(b.close,this))
},_init:function(){var y=this,f=this.options;
var b=[];
this.element.find("option").each(function(){var i=a(this);
b.push({value:i.attr("value"),text:y._formatText(i.text(),i),selected:i.attr("selected"),disabled:i.attr("disabled"),classes:i.attr("class"),typeahead:i.attr("typeahead"),parentOptGroup:i.parent("optgroup"),bgImage:f.bgImage.call(i)})
});
var q=(y.options.style=="popup")?" ui-state-active":"";
this.list.html("");
if(b.length){for(var n=0;
n<b.length;
n++){var g={role:"presentation"};
if(b[n].disabled){g["class"]="ui-state-disabled"
}var z={html:b[n].text||"&nbsp;",href:"#nogo",tabindex:-1,role:"option","aria-selected":false};
if(b[n].disabled){z["aria-disabled"]=b[n].disabled
}if(b[n].typeahead){z.typeahead=b[n].typeahead
}var x=a("<a/>",z).bind("focus.selectmenu",function(){a(this).parent().mouseover()
}).bind("blur.selectmenu",function(){a(this).parent().mouseout()
});
var e=a("<li/>",g).append(x).data("index",n).addClass(b[n].classes).data("optionClasses",b[n].classes||"").bind("mouseup.selectmenu",function(i){if(y._safemouseup&&!y._disabled(i.currentTarget)&&!y._disabled(a(i.currentTarget).parents("ul > li.ui-selectmenu-group "))){y.index(a(this).data("index"));
y.select(i);
y.close(i,true)
}return false
}).bind("click.selectmenu",function(){return false
}).bind("mouseover.selectmenu",function(i){if(!a(this).hasClass("ui-state-disabled")&&!a(this).parent("ul").parent("li").hasClass("ui-state-disabled")){i.optionValue=y.element[0].options[a(this).data("index")].value;
y._trigger("hover",i,y._uiHash());
y._selectedOptionLi().addClass(q);
y._focusedOptionLi().removeClass("ui-selectmenu-item-focus ui-state-hover");
a(this).removeClass("ui-state-active").addClass("ui-selectmenu-item-focus ui-state-hover")
}}).bind("mouseout.selectmenu",function(i){if(a(this).is(y._selectedOptionLi())){a(this).addClass(q)
}i.optionValue=y.element[0].options[a(this).data("index")].value;
y._trigger("blur",i,y._uiHash());
a(this).removeClass("ui-selectmenu-item-focus ui-state-hover")
});
if(b[n].parentOptGroup.length){var p="ui-selectmenu-group-"+this.element.find("optgroup").index(b[n].parentOptGroup);
if(this.list.find("li."+p).length){this.list.find("li."+p+":last ul").append(e)
}else{a('<li role="presentation" class="ui-selectmenu-group '+p+(b[n].parentOptGroup.attr("disabled")?' ui-state-disabled" aria-disabled="true"':'"')+'><span class="ui-selectmenu-group-label">'+b[n].parentOptGroup.attr("label")+"</span><ul></ul></li>").appendTo(this.list).find("ul").append(e)
}}else{e.appendTo(this.list)
}if(f.icons){for(var m in f.icons){if(e.is(f.icons[m].find)){e.data("optionClasses",b[n].classes+" ui-selectmenu-hasIcon").addClass("ui-selectmenu-hasIcon");
var u=f.icons[m].icon||"";
e.find("a:eq(0)").prepend('<span class="ui-selectmenu-item-icon ui-icon '+u+'"></span>');
if(b[n].bgImage){e.find("span").css("background-image",b[n].bgImage)
}}}}}}else{a(' <li role="presentation"><a href="#nogo" tabindex="-1" role="option"></a></li>').appendTo(this.list)
}var d=(f.style=="dropdown");
this.newelement.toggleClass("ui-selectmenu-dropdown",d).toggleClass("ui-selectmenu-popup",!d);
this.list.toggleClass("ui-selectmenu-menu-dropdown ui-corner-bottom",d).toggleClass("ui-selectmenu-menu-popup ui-corner-all",!d).find("li:first").toggleClass("ui-corner-top",!d).end().find("li:last").addClass("ui-corner-bottom");
this.selectmenuIcon.toggleClass("ui-icon-triangle-1-s",d).toggleClass("ui-icon-triangle-2-n-s",!d);
if(f.style=="dropdown"){this.list.width(f.menuWidth?f.menuWidth:f.width)
}else{this.list.width(f.menuWidth?f.menuWidth:f.width-f.handleWidth)
}this.list.css("height","auto");
var r=this.listWrap.height();
var k=a(window).height();
var w=f.maxHeight?Math.min(f.maxHeight,k):k/3;
if(r>w){this.list.height(w)
}this._optionLis=this.list.find("li:not(.ui-selectmenu-group)");
if(this.element.attr("disabled")){this.disable()
}else{this.enable()
}this._refreshValue();
this._selectedOptionLi().addClass("ui-selectmenu-item-focus");
clearTimeout(this.refreshTimeout);
this.refreshTimeout=window.setTimeout(function(){y._refreshPosition()
},200)
},destroy:function(){this.element.removeData(this.widgetName).removeClass("ui-selectmenu-disabled ui-state-disabled").removeAttr("aria-disabled").unbind(".selectmenu");
a(window).unbind(".selectmenu-"+this.ids[0]);
a(document).unbind(".selectmenu-"+this.ids[0]);
this.newelementWrap.remove();
this.listWrap.remove();
this.element.unbind(".selectmenu").show();
a.Widget.prototype.destroy.apply(this,arguments)
},_typeAhead:function(e,f){var n=this,m=String.fromCharCode(e).toLowerCase(),d=null,k=null;
if(n._typeAhead_timer){window.clearTimeout(n._typeAhead_timer);
n._typeAhead_timer=undefined
}n._typeAhead_chars=(n._typeAhead_chars===undefined?"":n._typeAhead_chars).concat(m);
if(n._typeAhead_chars.length<2||(n._typeAhead_chars.substr(-2,1)===m&&n._typeAhead_cycling)){n._typeAhead_cycling=true;
d=m
}else{n._typeAhead_cycling=false;
d=n._typeAhead_chars
}var g=(f!=="focus"?this._selectedOptionLi().data("index"):this._focusedOptionLi().data("index"))||0;
for(var j=0;
j<this._optionLis.length;
j++){var b=this._optionLis.eq(j).text().substr(0,d.length).toLowerCase();
if(b===d){if(n._typeAhead_cycling){if(k===null){k=j
}if(j>g){k=j;
break
}}else{k=j
}}}if(k!==null){this._optionLis.eq(k).find("a").trigger(f)
}n._typeAhead_timer=window.setTimeout(function(){n._typeAhead_timer=undefined;
n._typeAhead_chars=undefined;
n._typeAhead_cycling=undefined
},n.options.typeAhead)
},_uiHash:function(){var b=this.index();
return{index:b,option:a("option",this.element).get(b),value:this.element[0].value}
},open:function(f){if(this.newelement.attr("aria-disabled")!="true"){var b=this,g=this.options,d=this._selectedOptionLi(),e=d.find("a");
b._closeOthers(f);
b.newelement.addClass("ui-state-active");
b.list.attr("aria-hidden",false);
b.listWrap.addClass("ui-selectmenu-open");
if(g.style=="dropdown"){b.newelement.removeClass("ui-corner-all").addClass("ui-corner-top")
}else{this.list.css("left",-5000).scrollTop(this.list.scrollTop()+d.position().top-this.list.outerHeight()/2+d.outerHeight()/2).css("left","auto")
}b._refreshPosition();
if(e.length){e[0].focus()
}b.isOpen=true;
b._trigger("open",f,b._uiHash())
}},close:function(d,b){if(this.newelement.is(".ui-state-active")){this.newelement.removeClass("ui-state-active");
this.listWrap.removeClass("ui-selectmenu-open");
this.list.attr("aria-hidden",true);
if(this.options.style=="dropdown"){this.newelement.removeClass("ui-corner-top").addClass("ui-corner-all")
}if(b){this.newelement.focus()
}this.isOpen=false;
this._trigger("close",d,this._uiHash())
}},change:function(b){this.element.trigger("change");
this._trigger("change",b,this._uiHash())
},select:function(b){if(this._disabled(b.currentTarget)){return false
}this._trigger("select",b,this._uiHash())
},widget:function(){return this.listWrap.add(this.newelementWrap)
},_closeOthers:function(b){a(".ui-selectmenu.ui-state-active").not(this.newelement).each(function(){a(this).data("selectelement").selectmenu("close",b)
});
a(".ui-selectmenu.ui-state-hover").trigger("mouseout")
},_toggle:function(d,b){if(this.isOpen){this.close(d,b)
}else{this.open(d)
}},_formatText:function(d,b){if(this.options.format){d=this.options.format(d,b)
}else{if(this.options.escapeHtml){d=a("<div />").text(d).html()
}}return d
},_selectedIndex:function(){return this.element[0].selectedIndex
},_selectedOptionLi:function(){return this._optionLis.eq(this._selectedIndex())
},_focusedOptionLi:function(){return this.list.find(".ui-selectmenu-item-focus")
},_moveSelection:function(f,b){if(!this.options.disabled){var e=parseInt(this._selectedOptionLi().data("index")||0,10);
var d=e+f;
if(d<0){d=0
}if(d>this._optionLis.size()-1){d=this._optionLis.size()-1
}if(d===b){return false
}if(this._optionLis.eq(d).hasClass("ui-state-disabled")){(f>0)?++f:--f;
this._moveSelection(f,d)
}else{this._optionLis.eq(d).trigger("mouseover").trigger("mouseup")
}}},_moveFocus:function(g,b){if(!isNaN(g)){var f=parseInt(this._focusedOptionLi().data("index")||0,10);
var e=f+g
}else{var e=parseInt(this._optionLis.filter(g).data("index"),10)
}if(e<0){e=0
}if(e>this._optionLis.size()-1){e=this._optionLis.size()-1
}if(e===b){return false
}var d="ui-selectmenu-item-"+Math.round(Math.random()*1000);
this._focusedOptionLi().find("a:eq(0)").attr("id","");
if(this._optionLis.eq(e).hasClass("ui-state-disabled")){(g>0)?++g:--g;
this._moveFocus(g,e)
}else{this._optionLis.eq(e).find("a:eq(0)").attr("id",d).focus()
}this.list.attr("aria-activedescendant",d)
},_scrollPage:function(d){var b=Math.floor(this.list.outerHeight()/this._optionLis.first().outerHeight());
b=(d=="up"?-b:b);
this._moveFocus(b)
},_setOption:function(b,d){this.options[b]=d;
if(b=="disabled"){if(d){this.close()
}this.element.add(this.newelement).add(this.list)[d?"addClass":"removeClass"]("ui-selectmenu-disabled ui-state-disabled").attr("aria-disabled",d)
}},disable:function(b,d){if(typeof(b)=="undefined"){this._setOption("disabled",true)
}else{if(d=="optgroup"){this._toggleOptgroup(b,false)
}else{this._toggleOption(b,false)
}}},enable:function(b,d){if(typeof(b)=="undefined"){this._setOption("disabled",false)
}else{if(d=="optgroup"){this._toggleOptgroup(b,true)
}else{this._toggleOption(b,true)
}}},_disabled:function(b){return a(b).hasClass("ui-state-disabled")
},_toggleOption:function(d,b){var e=this._optionLis.eq(d);
if(e){e.toggleClass("ui-state-disabled",b).find("a").attr("aria-disabled",!b);
if(b){this.element.find("option").eq(d).attr("disabled","disabled")
}else{this.element.find("option").eq(d).removeAttr("disabled")
}}},_toggleOptgroup:function(e,b){var d=this.list.find("li.ui-selectmenu-group-"+e);
if(d){d.toggleClass("ui-state-disabled",b).attr("aria-disabled",!b);
if(b){this.element.find("optgroup").eq(e).attr("disabled","disabled")
}else{this.element.find("optgroup").eq(e).removeAttr("disabled")
}}},index:function(b){if(arguments.length){if(!this._disabled(a(this._optionLis[b]))&&b!=this._selectedIndex()){this.element[0].selectedIndex=b;
this._refreshValue();
this.change()
}else{return false
}}else{return this._selectedIndex()
}},value:function(b){if(arguments.length&&b!=this.element[0].value){this.element[0].value=b;
this._refreshValue();
this.change()
}else{return this.element[0].value
}},_refreshValue:function(){var e=(this.options.style=="popup")?" ui-state-active":"";
var d="ui-selectmenu-item-"+Math.round(Math.random()*1000);
this.list.find(".ui-selectmenu-item-selected").removeClass("ui-selectmenu-item-selected"+e).find("a").attr("aria-selected","false").attr("id","");
this._selectedOptionLi().addClass("ui-selectmenu-item-selected"+e).find("a").attr("aria-selected","true").attr("id",d);
var b=(this.newelement.data("optionClasses")?this.newelement.data("optionClasses"):"");
var f=(this._selectedOptionLi().data("optionClasses")?this._selectedOptionLi().data("optionClasses"):"");
this.newelement.removeClass(b).data("optionClasses",f).addClass(f).find(".ui-selectmenu-status").html(this._selectedOptionLi().find("a:eq(0)").html());
this.list.attr("aria-activedescendant",d)
},_refreshPosition:function(){var e=this.options,d={of:this.newelement,my:"left top",at:"left bottom",collision:"flip"};
if(e.style=="popup"){var b=this._selectedOptionLi();
d.my="left top"+(this.list.offset().top-b.offset().top-(this.newelement.outerHeight()+b.outerHeight())/2);
d.collision="fit"
}this.listWrap.removeAttr("style").zIndex(this.element.zIndex()+2).position(a.extend(d,e.positionOptions))
}})
})(jQuery);
(function(a){a.widget("ubs.toolTip",{options:{customClass:"",offsetTop:"-7",offsetLeft:0,width:"auto",minWidth:"auto",maxWidth:"auto",iconWidth:8,documentPaddingCorrection:20,toolTipArrowOffset:0,toolTipArrowWidth:8,last:[]},_create:function(){var b=this;
b.identifier=b.uuid;
b.title=b.element.prop("title");
b.tooltip=a("<div id='ui-toolTip-"+b.identifier+"' class='ui-tooltip "+b.options.customClass+"' style='width:"+b.options.width+"px; min-width:"+b.options.minWidth+"px; max-width:"+b.options.maxWidth+"px;'></div>");
b.tooltipInner=a("<span><span><span class='help-icon'></span>"+b.title+"</span></span>");
b.tooltip.append(b.tooltipInner);
a("body").append(b.tooltip)
},_init:function(){var b=this;
if(b.title.length===0){return
}b.alignment=(ubs.init.states.readingDirection==="rtl"?"right":"left");
b.last={};
b.options.offsetLeft=parseInt(b.options.offsetLeft,10);
b.options.width=parseInt(b.options.width,10);
if(b.alignment==="right"){b.options.offsetLeft=b.options.offsetLeft*-1
}if(isNaN(b.options.width)){b.options.width=b.tooltip.width()
}b.element.prop("title","").attr("data-title",b.title).attr("aria-Describedby","ui-toolTip-"+b.identifier);
b._posCorrect();
b._toolTipArrow();
b.tooltipInner.css({backgroundPosition:b.toolTipIconOffset+"px bottom"});
b._eventHandler()
},destroy:function(){var b=this;
b.element.prop("title",b.title).removeAttr("data-title aria-Describedby");
b.tooltip.empty();
a.Widget.prototype.destroy.call(this)
},_eventHandler:function(){var d=this,b=("ontouchstart" in window||(window.DocumentTouch&&document instanceof DocumentTouch))?true:false;
if(!b){d.element.bind("mouseenter focusin",function(){d._hideTooltip(a.ubs.toolTip.lastTooltip);
d._showTooltip(d.tooltip);
a.ubs.toolTip.lastTooltip=d.tooltip
}).bind("mouseleave focusout",function(){d._hideTooltip(d.tooltip)
})
}},_posCorrect:function(){var d=this;
var f=a("body");
var e=d.element.offset().left;
var b=f.width()-d.options.documentPaddingCorrection;
if(d.alignment==="right"){if(f.offset().left>(e-d.options.width+d.options.offsetLeft)){d.options.offsetLeft=(f.offset().left-e+d.options.width)
}}else{if(e+d.options.offsetLeft+d.options.width>b){d.options.offsetLeft=(b-d.options.width-e)
}else{if((e+d.options.offsetLeft)<0){d.options.offsetLeft=e+d.options.offsetLeft
}}}},_toolTipArrow:function(){var b=this;
if(b.options.toolTipArrowOffset!==0){if(b.alignment==="right"){b.toolTipIconOffset=b.options.width-b.options.toolTipArrowOffset-b.options.iconWidth
}else{b.toolTipIconOffset=b.options.toolTipArrowOffset
}}else{if(b.alignment==="right"){b.toolTipIconOffset=b.options.width-b.options.iconWidth+(-b.element.innerWidth()/2-b.options.offsetLeft+b.options.iconWidth/2)
}else{b.toolTipIconOffset=b.element.innerWidth()/2-b.options.offsetLeft-b.options.iconWidth/2
}}},_showTooltip:function(d){var e=this;
var b=ubs.util.sign(e.options.offsetLeft);
if(b>0){b="+"
}else{b="-"
}d.css("display","inline-block").position({my:e.alignment+b+e.options.offsetLeft+"px bottom"+e.options.offsetTop+"px",at:e.alignment+" top",of:e.element,collision:"none"})
},_hideTooltip:function(b){if(b){b.hide().css("top","").css("left","");
a.ubs.toolTip.lastTooltip=null
}}})
})(jQuery);
(function(a){a.widget("ubs.checkboxradio",{options:{wrapperClass:"ui-form",checkboxClass:"ui-checkbox",radioClass:"ui-radio",focusClass:"ui-focus",disabledClass:"ui-disabled",statusCheckedRadio:"ui-radio-checked",statusunCheckedRadio:"ui-radio-unchecked",statusCheckedCheckbox:"ui-checkbox-checked",statusunCheckedCheckbox:"ui-checkbox-unchecked"},_create:function(){var b=this;
b.checkboxes=b.element.find("input[type=checkbox]");
b.radios=b.element.find("input[type=radio]");
a.each(b.checkboxes,function(){b._createWrapper(a(this),b.options.statusCheckedCheckbox,b.options.statusunCheckedCheckbox,b.options.checkboxClass)
});
a.each(b.radios,function(){b._createWrapper(a(this),b.options.statusCheckedRadio,b.options.statusunCheckedRadio,b.options.radioClass)
})
},_init:function(){var b=this;
if(b.element.data("radiocheckbox")){return
}b.element.data("radiocheckbox",true);
b.element.on("click.checkboxradio focusin.checkboxradio focusout.checkboxradio checkboxradio","input[type=checkbox], input[type=radio]",{self:b},b._delegateHandler);
b.element.on("reset.checkboxradio checkboxradioreset.checkboxradio",{self:b},b._reset)
},_createWrapper:function(e,i,b,j){var d,g,f=this;
if(e.data("radiocheckbox")){return
}e.data("radiocheckbox",true);
d=e.is(":checked")?i:b;
g=a("<span></span>").addClass(f.options.wrapperClass+" "+j+" "+d);
if(e.prop("disabled")){g.addClass(f.options.disabledClass)
}e.wrap(g)
},_delegateHandler:function(f){var d,e,b=f.data.self,g=a(this);
if(f.type==="click"||f.type==="checkboxradio"){if(g.is("[type=checkbox]")){if(g.prop("checked")){g.parent().removeClass(b.options.statusunCheckedCheckbox).addClass(b.options.statusCheckedCheckbox)
}else{g.parent().removeClass(b.options.statusCheckedCheckbox).addClass(b.options.statusunCheckedCheckbox)
}}else{d=g.prop("name");
e=b.element.find("input[name="+d+"]");
a.each(e,function(){var j=a(this),i=j.is(":checked")?b.options.statusCheckedRadio:b.options.statusunCheckedRadio;
j.parent().removeClass(b.options.statusCheckedRadio+" "+b.options.statusunCheckedRadio).addClass(i)
})
}}else{if(f.type==="focusin"){g.parent().addClass(b.options.focusClass)
}else{if(f.type==="focusout"){g.parent().removeClass(b.options.focusClass)
}}}},_reset:function(e){var d=e.data.self,b;
if(e.result!==false){b=d.element.find("input[type=checkbox], input[type=radio]");
b.parent().removeClass(d.options.statusCheckedRadio+" "+d.options.statusCheckedCheckbox)
}},destroy:function(){var d=this,b=d.element.find("input[type=checkbox], input[type=radio]");
b.unwrap();
b.removeData("radiocheckbox");
d.element.off(".checkboxradio").removeData("radiocheckbox")
}})
})(jQuery);
(function(a){a.widget("ubs.functionalarea",{options:{toggleElement:a("<span class='functionalArea__buttonIconWrapper'><span class='functionalArea__buttonIcon functionalArea__buttonIcon-is-closed'></span></span>"),closeElement:a("<span class='functionalArea__close' tabindex='0' data-nn-tracking='closebutton'><span class='functionalArea__buttonIconWrapper'><span class='functionalArea__buttonIcon functionalArea__buttonIcon-is-dismiss'></span></span></span>")},_create:function(){var b=this;
if(b._checkIfDismissed()){return false
}b._checkIfDismissed();
b.button=b.element.find("a.button");
b.wrapper=b.element.find(".functionalArea__wrapper");
b.color=b.element.data("fa-color");
b.contentloaded=false;
b._styleHeader();
b._createContentArea()
},_init:function(){var b=this;
b.button.on("click.functionalarea",{fa:b},b._loadContent);
b.options.closeElement.on("click.functionalarea",{fa:b},b._dismissFA);
b.wrapper.show()
},_checkIfDismissed:function(){var b=this;
var d=ubs.func.cookieHandling.getCookieStorage("fa_dismiss_"+b.element.data("fa-id"));
if(d==="true"){b.element.hide();
return true
}},_styleHeader:function(){var b=this;
var d=a("<div class='functionalArea__header'></div>").addClass(b.color);
b.wrapper.wrapInner(d);
b.options.closeElement.find(".functionalArea__buttonIcon").text(b.element.data("fa-dismiss"));
b.button.attr("aria-controls","functionalArea__"+b.uuid).attr("aria-expanded","false").attr("data-nn-tracking","togglebutton").append(b.options.toggleElement).parent().append(b.options.closeElement)
},_createContentArea:function(){var b=this;
b.contentArea=a("<div class='functionalArea__mainContentWrapper' aria-live='polite' aria-hidden='true' id='functionAlarea__"+b.uuid+"'></div>");
b.contentArea.hide();
b.wrapper.append(b.contentArea)
},_loadContent:function(e){var f=a(this),d=e.data.fa,b;
e.preventDefault();
b=f.attr("href");
if(b!==undefined&&b!==""){if(!d.contentloaded){a.ajax({url:f.attr("href")}).done(function(g){d.contentArea.append(g);
d.contentloaded=true;
d._toggleState(false)
})
}else{d._toggleState(true)
}}},_dismissFA:function(d){var b=d.data.fa;
b.element.remove();
ubs.func.cookieHandling.setCookieStorage("fa_dismiss_"+b.element.data("fa-id"),"true",1,{path:"/"})
},_toggleState:function(d){var b=this;
b.contentArea.slideToggle();
if(b.button.attr("aria-expanded")==="true"){b.button.attr("aria-expanded","false")
}else{b.button.attr("aria-expanded","true")
}if(b.contentArea.attr("aria-expanded")==="true"){b.contentArea.attr("aria-expanded","false")
}else{b.contentArea.attr("aria-expanded","true")
}b.options.toggleElement.children().toggleClass("functionalArea__buttonIcon-is-open").toggleClass("functionalArea__buttonIcon-is-closed")
},_reset:function(b){},destroy:function(){},isExpanded:function(){return this.button.attr("aria-expanded")
}})
})(jQuery);
(function(a){ubs.form=ubs.form||{};
a.extend(ubs.form,{init:function(e){ubs.util.time("init Form");
var b=a("form.form",e);
var d=a("div.form",e);
a.each(d,function(){var f=a(this);
var g=a(this).closest("form");
if(f.hasClass("validate")){f.removeClass("validate");
g.addClass("validate")
}if(f.attr("data-nn-init")==="unloadwarning"){f.removeAttr("data-nn-init");
g.attr("data-nn-init","unloadwarning")
}b=b.add(g)
});
a(".stars",b).stars({cancelShow:false,disableValue:false,cancelValue:""});
ubs.form.resetFormWarning(b);
ubs.form.cancelFormWarning(b);
if(!ubs.util.checkBrowser("ie",6)){a(".selectmenu",b).removeProp("disabled").selectmenu();
a(b).checkboxradio()
}ubs.form.infoIcon(a(".info-form",b));
ubs.form.dropdownInput(a(".selectinput",b));
ubs.form.assetList.init(b);
ubs.form.buttonfix(b);
ubs.form.fileUpload.init(b);
ubs.form.validate.init(b.filter(".validate"));
ubs.form.datedropdown.init(b.find("ul.datedropdown"));
ubs.form.datepicker.init(b.find("input.datepicker"));
b.constraint();
b.posconstraint();
ubs.form.unloadWarning(b.filter("[data-nn-init='unloadwarning']"));
ubs.form.sliderForm.init(b.find("[data-nn-init='sliderform']"));
ubs.form.AnswerSensitivity.init(b);
ubs.util.timeEnd("init Form")
},datedropdown:{init:function(b){a.each(b,function(){var d=a(this);
a.each(d.find(".datedropdown"),function(){var e=a(this);
e.change(function(){var g=d.find(".datedropdownvalue");
var k=d.find("select.datedropdown[name="+g.prop("name")+"DD]");
var i=d.find("select.datedropdown[name="+g.prop("name")+"MM]");
var j=d.find("select.datedropdown[name="+g.prop("name")+"YY]");
var f="";
if(k!==undefined&&k.val()!==undefined){f+=k.val()
}if(i!==undefined){if(f.trim().length>0){f+="/"
}if(i.val()!==undefined){f+=i.val()
}}if(j!==undefined){if(f.trim().length>0){f+="/"
}if(j.val()!==undefined){f+=j.val()
}}g.val(f)
})
})
})
}},datepicker:{defaults:{changeYear:true,minDate:0,showOtherMonths:true,selectOtherMonths:true,numberOfMonths:1,onSelect:function(d,b){var e=b.input.closest("form").data("validator");
if(e){e.element(b.input)
}}},init:function(b,d){if(b.length){var i=a.cookie("language");
var f=a.cookie("country");
if(ubs.init.states.readingDirection==="rtl"){ubs.form.datepicker.defaults.isRTL=true
}var g="";
var e=ubs.form.datepicker.select(i,f);
if(e&&e!==""){a.ajax({url:"/js/datepicker/jquery.ui.datepicker-"+e+".js",statusCode:{404:function(){ubs.util.log("Error: jquery.ui.datepicker-"+e+".js not found")
}}}).fail(function(j){var k=j.status+": "+j.statusText;
ubs.util.log("Error: Failed to load the file. Status: "+k);
a.datepicker.setDefaults(a.datepicker.regional[g])
}).always(function(){ubs.form.datepicker.action(b,d)
})
}else{ubs.form.datepicker.action(b,d)
}}},action:function(d,b){a.each(d,function(){var e=a(this);
var f=a.extend({},ubs.form.datepicker.defaults,b);
a.metadata.setType("attr","data-datepicker");
var g=e.metadata();
a.metadata.setType("class");
f=a.extend({},f,g);
e.datepicker(f)
})
},select:function(e,d){var b=false;
var f={it:{dflt:"it"},es:{dflt:"es"},de:{dflt:"de"},ru:{dflt:"ru"},pt:{dflt:"pt"},ja:{dflt:"ja"},nl:{dflt:"nl"},fi:{dflt:"fi"},ko:{dflt:"ko"},sv:{dflt:"sv"},no:{dflt:"no"},tr:{dflt:"tr"},he:{dflt:"he"},tc:{hk:"zh-HK",dflt:"zh-TW"},sc:{dflt:"zh-CN"},zh_sg:{dflt:"zh-CN"},"jp-cap-ad":{dflt:"ja"},"jp-cap-homepage":{dflt:"ja"},"jp-cap-ad/jp-cap-homepage":{dflt:"ja"},fr:{dflt:"fr"},en:{dflt:""},ar:{dflt:"ar"}};
if(f.hasOwnProperty(e)){if(f[e].hasOwnProperty(d)){b=f[e][d]
}else{b=f[e].dflt
}}else{b=f.en.dflt
}return b
}},validate:{options:{input_error:false,invalidElements:false,errorLabels:[],checkErrorTrigger:false},init:function(b){if(!ubs.util.checkBrowser("ie",6)){b.find("select.selectmenu").attr("tabIndex","-1").show().addClass("hideInput")
}ubs.form.validate.addMethods();
ubs.form.validate.addCustomMessages(window.formValidateMessagesDefaults);
a.each(b,function(e,f){var d=a(f);
ubs.form.validate.bindValidator(d);
ubs.form.validate.eventHandlerInit(d)
})
},addCustomMessages:function(b){if(b){a.extend(a.validator.messages,b)
}},bindValidator:function(b){var e=ubs.form.validate.options;
var d=b.validate({onfocusout:function(f,g){a(f).valid()
},invalidHandler:function(i,f){var k=f.numberOfInvalids();
if(k){var g=b.find(".messageBox");
g.removeClass("hidden").addClass("error");
e.invalidElements=f.invalidElements();
b.attr("data-error",true);
if(ubs.util.checkBrowser("ie",7)){b.find("button").prop("disabled",false);
var j=b.find('button[type="submit"]');
a.each(j,function(){if(a(this).has("span").length===0){a(this).html(a(this).data("label"))
}})
}}window.isSubmitEvent=false
},wrapper:"span",ignore:".ftracking, :disabled, :hidden, .input-js-placeholder--in",errorPlacement:function(f,g){f.children().attr("role","alert").css({display:"block"});
f.appendTo(g.parentsUntil("form").filter("li").last());
f.addClass("wrapper-error");
e.errorLabels.push(f);
ubs.form.validate.posErrorLabel(f,g)
},success:function(f){b.attr("data-error",false);
f.addClass("valid")
},submitHandler:function(f){a("input[data-rule-currencyformat='true'],textarea[data-rule-currencyformatmultiline='true']",f).each(function(){var k=a(this).data("defValue");
if(typeof k!=="undefined"){if(a(this)[0].tagName==="INPUT"){a(this).val(k)
}else{var g="";
for(var j=0;
j<k.length;
j++){g+=k[j]+"\n"
}$this.val(g)
}}});
f.submit()
},highlight:function(j,f,g){a(j).addClass(f).removeClass(g);
a(j).parentsUntil("form").filter("li").last().addClass("error");
if(!ubs.util.checkBrowser("ie",6)){if(a(j).is("select")||a(j).is("input[type=file]")){a(j).next().addClass(f)
}}a(j).attr("aria-invalid","true");
if(e.input_error===undefined){e.input_error=j
}var k=this;
var i=this.toHide.parent();
setTimeout(function(){if(i.length>0&&!k.found){ubs.form.validate.posErrorLabel(i,a(j));
k.found=true
}},5)
},unhighlight:function(j,f,i){var g=a(j);
g.removeClass(f).addClass(i);
if(!ubs.util.checkBrowser("ie",6)){if(g.is("select")||g.is("input[type=file]")){g.next().removeClass(f)
}}g.removeAttr("aria-invalid");
var k=g.find("li.error").add(g.parentsUntil("form").filter("li.error")).last();
if(k.find("input.error").length===0){k.removeClass("error")
}}});
b.data("validator",d)
},eventHandlerInit:function(b){var d=ubs.form.validate.options;
b.find("select").change(function(e){if(e.originalEvent===undefined){a(this).valid();
return
}});
b.find("input[type=file]").click(function(e){a(this).focus()
}).change(function(e){a(this).valid();
return
});
b.find("input, textarea, a.ui-selectmenu").focus(function(f){if(d.checkErrorTrigger){d.checkErrorTrigger=false;
return
}var e=a(this);
var g=(e.is("input")||e.prev().is("select"))?a(e).hasClass("error"):a(e).parentsUntil("form").filter("li").last().hasClass("error");
if(e.hasClass("ui-selectmenu")){e=e.prev()
}if(f.originalEvent===undefined){g=true
}if(f.target!==this){return
}ubs.form.validate.showHideLabels(e,g)
})
},showHideLabels:function(e,g){var d=ubs.form.validate.options;
var b=e.prop("id");
if(e.hasClass("ui-selectmenu")){b=e.prev().prop("id")
}if(d.errorLabels.length>1){a.each(d.errorLabels,function(){a(this).children("label").hide()
})
}d.invalidElements=[];
if(g){var f;
a.each(d.errorLabels,function(){if(e[0].type==="radio"||e[0].type==="checkbox"){d.checkErrorTrigger=true;
a(e[0]).focus()
}if(a(this).children().is("[for="+b+"]")){f=a(this);
return false
}else{if(a(this).children().is("[for="+e[0].name+"]")){f=a(this);
return false
}}});
if(f){f.children().css({display:"block"});
ubs.form.validate.posErrorLabel(f,e)
}}if((d.input_error!==undefined&&d.input_error!==e[0])&&g){a.each(d.errorLabels,function(){var i=a(this).children();
if(i.is("[for="+d.input_error.id+"]")){i.hide()
}else{if(i.is("[for="+d.input_error.name+"]")){if(a(d.input_error).parentsUntil("form").filter("li").last()[0]!==a(e[0]).parentsUntil("form").filter("li").last()[0]){i.hide()
}}}});
d.input_error=e[0]
}},posErrorLabel:function(d,e){var b=e;
if(e.prop("type")==="checkbox"||e.prop("type")==="radio"){b=e.closest("fieldset").children("legend")
}if(!ubs.util.checkBrowser("ie",6)){if(e.is("select")){b=e.next()
}}var j;
var g;
if(e.prop("type")==="checkbox"||e.prop("type")==="radio"){var i=a("html").css("direction");
var k=(i==="rtl"?"right":"left");
j=k+" bottom";
g=k+" top"
}else{j="center bottom";
g="center top"
}var f={my:ubs.util.getMyValuePosition(j,"0 -2px"),at:g,of:b,collision:"none"};
d.position(f)
},addMethods:function(){a.validator.addMethod("customVal",function(d,b,e){return this.optional(b)||d===e.toString()
});
a.validator.addMethod("customExp",function(f,d,g){var e;
var b=g.match(/^\/(.*?)\/([gim]*)$/);
if(b){e=new RegExp(b[1],b[2])
}else{e=new RegExp(g)
}return this.optional(d)||e.test(f)
});
a.validator.addMethod("passwordValidation",function(e,b){var d=new RegExp("^.*[\\d\\W]+.*$");
return this.optional(b)||(e.length>=7&&d.test(e))
});
a.validator.addMethod("phoneValidation",function(e,b){var d=new RegExp("^\\+(?:[0-9] ?){6,14}[0-9]$");
return this.optional(b)||d.test(e)
});
a.validator.addMethod("simplePhoneValidation",function(e,b){var d=new RegExp("^[+0-9]{1}[0-9]{6,18}$");
return this.optional(b)||d.test(e)
});
a.validator.addMethod("telephonenumber",function(e,b){var d=new RegExp("^(\\+?(\\d|-)){0,20}$");
return this.optional(b)||d.test(e)
});
a.validator.addMethod("datenumericmonth",function(e,b){var d=new RegExp("^0[1-9]$|^1[0-2]$");
return this.optional(b)||d.test(e)
});
a.validator.addMethod("namevalidation",function(e,b){var d=new RegExp("^[a-zA-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ -.]*$");
return this.optional(b)||d.test(e)
});
a.validator.addMethod("swissplz",function(e,b){var d=new RegExp("^[1-9]{1}\\d{3}$");
return this.optional(b)||d.test(e)
});
a.validator.addMethod("dateyear",function(e,b){var d=new RegExp("^[0-9]{2}$|^[0-9]{4}$");
return this.optional(b)||d.test(e)
});
a.validator.addMethod("email",function(d,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(d)
});
a.validator.addMethod("constraint",function(){return true
});
a.validator.addMethod("posconstraint",function(){return true
});
a.validator.addMethod("alphanumeric",function(d,b){return this.optional(b)||/^[a-z0-9]+$/i.test(d)
});
a.validator.addMethod("zip",function(d,b){return this.optional(b)||/^[a-z0-9\- ]+$/i.test(d)
});
a.validator.addMethod("uploadlimit",function(d,b){var g=8000000,f=true,e=a(b).data("maxsize");
if(b.files&&b.files[0]){if(e){g=e
}f=b.files[0].size<g
}return this.optional(b)||f
});
a.validator.addMethod("checkFileType",function(e,b){var g=a(b).data("acceptedfiletype").split(" "),f=false,d;
e=e.split(".");
d=e[e.length-1];
if(a.inArray(d,g)!==-1){f=true
}return this.optional(b)||f
});
a.validator.addMethod("digits",function(g,d){var b=a(d).data("separator"),e,f;
if(b===undefined){b=""
}e="^["+b+"0-9]+$";
f=new RegExp(e,"ig");
return this.optional(d)||f.test(g)
});
a.validator.addMethod("digitsnegative",function(g,d){var b=a(d).data("separator"),e,f;
if(b===undefined){b=""
}e="^-?["+b+"0-9]+$";
f=new RegExp(e,"ig");
return this.optional(d)||f.test(g)
});
a.validator.addMethod("roundup",function(f,e){if(!a(e).is(":focus")){var d=a(e).data("rule-digitsnegative"),b;
if(d){b=f.toString().charAt(0)==="-"
}f=a(e).val().replace(/[^a-zA-Z0-9]/g,"");
if(f<1000&&f!==""){f=1000
}else{f=Math.round(f/1000)*1000
}if(b){f*=-1
}a(e).val(f)
}return true
});
a.validator.addMethod("roundupmultiline",function(j,g){var d=a(g).val().split("\n"),f,k="",e=a(g).data("rule-digitsnegative"),b;
if(!a(g).is(":focus")){if(e){b=j.toString().charAt(0)==="-"
}for(f=0;
f<d.length;
f++){j=d[f].replace(/[^0-9]+/g,"");
if(j<1000&&j!==""){j=1000
}else{j=Math.round(j/1000)*1000
}if(b){j*=-1
}d[f]=j;
if(d[f]===0){d.splice(a.inArray(d[f],d),-1)
}else{k+=d[f]+"\n"
}}a(g).val(k)
}return true
});
a.validator.addMethod("currencyformat",function(f,e){if(!a(e).is(":focus")){var d=a(e).data("separator"),b=a(e).data("rule-digitsnegative");
if(d===undefined){d=""
}if(b){f=a(e).val().replace(/[^-a-zA-Z0-9]/g,"")
}else{f=a(e).val().replace(/[^a-zA-Z0-9]/g,"")
}a.data(e,"defValue",f);
f=ubs.util.currencyFormatString.call(f,d);
a(e).val(f)
}return true
});
a.validator.addMethod("currencyformatmultiline",function(k,g){var b=a(g).val().split("\n"),f,m="",e=a(g).data("separator"),j=[],d=a(g).data("rule-digitsnegative");
if(!a(g).is(":focus")){for(f=0;
f<b.length;
f++){if(d){k=b[f].replace(/[^-0-9]+/g,"")
}else{k=b[f].replace(/[^0-9]+/g,"")
}b[f]=ubs.util.currencyFormatString.call(k,e);
if(b[f]===""){b.splice(a.inArray(b[f],b),-1)
}else{j.push(k);
m+=b[f]+"\n"
}}a.data(g,"defValue",j);
a(g).val(m)
}return true
})
}},unloadWarning:function(b){a.each(b,function(){var d=a(this),j,k=false,g,i=d.data("onunload"),f=window.attachEvent||window.addEventListener,e=window.attachEvent?"onbeforeunload":"beforeunload";
if(i===undefined){i=d.find(".form").data("onunload")
}if(i===""){i=undefined
}g=function(){k=true;
d.off("change.unload")
};
d.on("change.unload",g);
d.find("button[type='submit'], input[type='submit']").click(function(){window.isSubmitEvent=true
});
j=function(m){if(window.isSubmitEvent!==true&&k===true){(m||window.event).returnValue=i;
return i
}};
f(e,j)
})
},resetFormWarning:function(b){a.each(b,function(){var d=a(this),f=d.data("onreset"),e;
if(f===undefined){f=d.find(".form").data("onreset")
}d.bind("reset",function(){e=window.confirm(f);
if(e===true){ubs.form.resetCustomElements(d)
}else{return false
}})
})
},resetCustomElements:function(e){var b=e,g,f,d;
g=b.find(".sliderForm__slider");
if(g){a.each(g,function(){var i=a(this);
i.slider("value",i.data("preValue"))
})
}f=a(".stars",b).data("ui-stars");
if(f){!f.options.disabled&&f.select(f.options.defaultValue)
}if(!ubs.util.checkBrowser("ie",6)){d=b.find("select.selectmenu");
window.setTimeout(function(){d.selectmenu("destroy").removeClass("hideInput").selectmenu().addClass("hideInput").css({display:"block"})
},100)
}if(b.data("validator")){b.data("validator").resetForm()
}b.find(".error").removeClass("error")
},cancelFormWarning:function(b){a.each(b,function(){var n=a(this),i=n.find(".button-cancel"),d=i.data("title"),e=i.data("text"),m=i.data("confirm"),f=i.data("continue"),k,j;
k=g({classBTN:"button-cancelConfirm",textBTN:m},{classBTN:"button-continue",textBTN:f});
function g(){var o,r,q="";
for(var p=0;
p<arguments.length;
p++){o=arguments[p].classBTN||"";
r=arguments[p].textBTN||"";
q+='<button type="button" name="" class="'+o+'" value="'+r+'"><span><span>'+r+"</span></span></button>"
}return q
}j="<div class='cancel__wrapper'><h2 class='cancel__title'>"+d+"</h2><p class='cancel__text'>"+e+"</p>"+k+"</div>";
i.bind("click.confirmCancel",function(){a(this).metadata().lightBox.html=j;
ubs.ui.lightbox.init(a(this))
});
a("body").on("click.confirmCancel",".button-continue",function(){a.colorbox.close()
});
a("body").on("click.confirmCancel",".button-cancelConfirm",function(){n.data("submit-bypass",true);
n.append('<input type="hidden" name="cancelButtonPressed" value="true">');
n.validate().settings.ignore="*";
n.submit()
})
})
},fileUpload:{init:function(b){this.create(b.find(".multi-fileUpload"));
this.create(b.find(".single-fileUpload"));
b.on({change:this.changeHandler,focusin:this.focusinHandler,focusout:this.focusoutHandler},"input[type=file]");
b.on("click keydown","span.icon-add",this.addHandler)
},create:function(b){var d,e;
a.each(b,function(){var f=a(this).find("input[type=file]"),g=f.length;
a(".multi-fileUpload").find("span + a").each(function(){a(this).siblings().addClass("firstChild").find("input").addClass("jsInitialWidth")
});
a.each(f,function(i){var k=a(this),j=a("<span class='inputFile-wrapper'/>"),n=a('<input type="text" id="input12" name="" value="" aria-required="false" tabindex="-1"/>'),m;
m=k.attr("class").replace(/inputFile\b/g,"").replace(/\s{.+\s/,"").replace(/\s{.+$/,"");
n.addClass(m);
k.wrap(j).parent().append(n);
k.parent().find("input").addClass("jsModifiedWidth");
if(i<g){d=a('<span tabindex="-1" class="button-icon icon-upload"><span></span></span>');
e=a('<span tabindex="0" class="button-icon icon-add"><span>+</span></span>').data("fileuploadindex","index+1");
k.parent().append(d)
}if(i+1<g){e.insertBefore(k.parent())
}if(i>0){k.closest("li").hide()
}n.val(k.val())
})
})
},addHandler:function(b){if(b.type==="keydown"){if(b.keyCode===32||b.keyCode===13){b.preventDefault()
}else{return
}}a(this).parent().find("input").removeClass("jsInitialWidth").addClass("jsModifiedWidth");
a(this).removeClass("jsButtonShown").hide().closest("li").next().show().find(".icon-add").addClass("jsButtonShown")
},changeHandler:function(){var b=a(this);
b.next().val(b.val())
},focusinHandler:function(){a(this).next().addClass("focus-input")
},focusoutHandler:function(){a(this).next().removeClass("focus-input")
}},infoIcon:function(b){var d=ubs.init.states.readingDirection;
var e=(d==="rtl"?"right":"left");
a.each(b,function(){var g=a(this);
var f=a("<a href='#' class='button-icon button-icon-round icon-info'><span></span></a>");
g.before(f);
a("body").append(g);
f.bind("mouseenter focusin",function(){g.css({display:"block"}).position({my:e+" top+1",at:e+" bottom",of:f,collision:"none"})
}).bind("mouseleave focusout",function(){g.hide().css("top","").css("left","")
}).bind("click",function(){g.toggle();
return false
})
})
},buttonfix:function(b){if(ubs.util.checkBrowser("ie",7,true)){var d=b.find("button[type=submit]");
a(d).click(function(){d.not(this).prop("disabled",true);
a(this).data("label",a(this).html());
this.value=this.attributes.getNamedItem("value").nodeValue
})
}},dropdownInput:function(b){setCurrencyCalculatorValues();
a.each(b,function(d){a(this).selectmenu_linklist({transferClasses:true,inputList:true,typeAhead:false,followLink:false,listValues:"currencyJSON",index:d})
})
},sliderForm:{init:function(b){a.each(b,function(){var k=a(this),n=a(this).closest("form"),d=k.find(".sliderForm__select"),g=null,j=d.children("option"),i="",f,m,e;
k.find(".sliderForm__sliderItem").append('<div class="sliderForm__slider"></div>');
g=k.find(".sliderForm__slider");
e=d.attr("id");
d.removeAttr("id");
g.attr("id",e);
f=g.width();
g.data("preValue",d[0].selectedIndex+1);
m=parseInt(f/(j.length-1),10);
g.slider({min:1,max:j.length,range:"min",value:d[0].selectedIndex+1,slide:function(o,p){d[0].selectedIndex=p.value-1
}});
g.find(".ui-slider-handle").addClass("sliderForm__handler");
a.each(j,function(p,u){var o="",q=u.innerHTML.length,r=(p*m)-(q*2)+"px;";
if(p===0){o='<span class="sliderForm__legend sliderForm__minLegend" style="left:'+r+'">'+u.innerHTML+"</span>"
}else{if(p===j.length-1){o='<span class="sliderForm__legend sliderForm__maxLegend" style="left:'+r+'">'+u.innerHTML+"</span>"
}else{o='<span class="sliderForm__legend sliderForm__middleLegend" style="left:'+r+'">'+u.innerHTML+"</span>"
}}i+=o
});
a(g).append(i);
d.on("change",function(){g.slider("value",this.selectedIndex+1)
})
})
}},assetList:{init:function(b){a.each(b,function(){var e=a(this);
var d=e.parents().is("div.assetlist");
if(d){var f=e.find("input[type=checkbox]");
var g=e.find("button[type=submit]");
g.toggleClass("button-prim",false).toggleClass("button-inactive",true).prop("disabled",true);
e.on("change",function(k,i){var j=(f.filter(":checked").size()>0);
g.toggleClass("button-prim",j).toggleClass("button-inactive",!j).prop("disabled",!j);
if(i!==true){ubs.form.assetList.checkboxStatus(a(k.target))
}})
}})
},checkboxStatus:function(d){var m=d.prop("name")==="folder";
var i=d.is(":checked");
if(m){var k=d.parent().siblings("ul");
if(k.size()===0){k=a("input[id^='"+d.attr("id")+"_']").parents("tr")
}k.find("input[type='checkbox']").prop("checked",i).parent().toggleClass("ui-checkbox-unchecked",!i).toggleClass("ui-checkbox-checked",i);
d.trigger("change",true).parent().removeClass("ui-checkbox-thirdstate")
}else{var q=d.parent().parent()[0].nodeName.toLowerCase();
var g=0,o=0,f=0,n=0,e=false,b,p,j;
if(q==="li"){p=d.parents("li").siblings().find("input[type='checkbox']");
j=d.closest("ul").siblings("span")
}else{if(q==="td"){p=d.parents("tr").siblings().find("input[type='checkbox']");
j=p.filter("[name='folder']").parent()
}}b=p.filter("[name='asset']");
f=b.size()+1;
n=b.filter(":checked").size()+(i?1:0);
g=(n===0&&!i);
o=(n===f);
e=!(g||o);
j.toggleClass("ui-checkbox-thirdstate",e);
if(o){j.toggleClass("ui-checkbox-unchecked",false).toggleClass("ui-checkbox-checked",true).find("input[type='checkbox']").prop("checked",true)
}if(g){j.toggleClass("ui-checkbox-unchecked",true).toggleClass("ui-checkbox-checked",false).find("input[type='checkbox']").prop("checked",false)
}}}}})
})(ubs.$);
!(function(e,d,a,f){e.fn.preBind=function(i,j,g){this.each(function(){var m=e(this);
if(typeof j!==null){m.bind(i,j,g)
}else{m.bind(i,g)
}if(i.indexOf(".")>0){i=i.split(".")[0]
}var k=e._data(this,"events")[i];
if(e.isArray(k)){k.unshift(k.pop())
}});
return this
};
var b={$theForm:null,$progressBar:null,$currentStepObj:null,$activePageField:null,isLocalStep:false,currentStepIndex:0,lastStepIndex:0,currentStepName:"",formSteps:0,formName:"",dataURL:"/",debugMode:false,init:function(g,i){this.options=e.extend(true,{},e.fn.localForm.options,g);
this.$window=e(d);
this.$document=e(a);
this.el=i;
this.$el=e(i);
this.setup()
},setup:function(){var g=this;
if(typeof ubs.form.init==="function"){var i=ubs.form.init;
ubs.form.init=function(m){var j=e("form.form",m);
i(m);
if(j.length===0){var k=e(".form.browseronlymultistepform");
if(k.length>0){j=k.closest("form");
if(j.length>0){g._setupMultiStepForm(j)
}}}else{if(j.find("div.browseronlymultistepform").length>0){g._setupMultiStepForm(j)
}}}
}},_setupMultiStepForm:function(i){var g=this;
g.isLocalStep=true;
g.$theForm=i;
g.$progressBar=i.find(".progressbar ul li");
g._readFormParams(i);
g._rearrangeForm(i);
g._setupStep(i,1);
g._addEventListeners()
},_setupStep:function(g,i){this.currentStepIndex=i;
if(this.$activePageField.length>0){this.$activePageField.val(i-1)
}var m=g.find(".msf-step-wrapper").eq(i-1);
if(m.length>0){this.currentStepName=m.attr("data-step-name");
this.isLocalStep=(m.attr("data-external-storage")==="false")
}var j=g.find("input[name='currentStepName'][type='hidden']");
if(j.length>0){j.val(this.currentStepName)
}var k=g.find("input[name='currentStepIndex'][type='hidden']");
if(k.length>0){k.val(i)
}},_changeToStep:function(i){if(this.$progressBar.length>0){this.$progressBar.removeClass("progressbarAlternative__li progressbarAlternative__li-is-active").addClass("progressbarAlternative__li progressbarAlternative__li-is-disabled");
this.$progressBar.eq(i-1).removeClass("progressbarAlternative__li progressbarAlternative__li-is-disabled").addClass("progressbarAlternative__li progressbarAlternative__li-is-active")
}var j=this.$theForm.find(".msf-step-wrapper");
this._disableSteps(j);
var g=this;
setTimeout(function(){g.$currentStepObj=g._enableSteps(j.eq(i-1))
},100);
if(!this.debugMode){this._scrollToTop()
}this._setupStep(this.$theForm,i)
},_disableSteps:function(g){g.find("input:not([type=hidden]),textarea, button, select").prop("disabled","disabled").prop("readonly","true");
if(!this.debugMode){g.hide()
}else{g.css({border:"3px solid black","background-color":"grey"})
}return g
},_enableSteps:function(i,g){i.css({position:"static",left:"auto"}).find("input:not([type=hidden]), textarea, button, select").removeProp("disabled").removeProp("readonly");
if(!this.debugMode){if(g!==true){i.show()
}}else{i.css({border:"none","background-color":"lightgrey"})
}return i
},_addEventListeners:function(){var g=this;
if(typeof this.$theForm!=="undefined"&&this.$theForm.length>0){this.$theForm.preBind("submit"+this.options.eventNamespace,null,function(j){if(!g.$theForm.data("submit-bypass")){g.beforeValidationHandler.call(g,j);
g.afterValidationHandler.call(g,j)
}else{var i=g.$theForm.validate();
if(typeof i==="object"){i.settings.submitHandler=null
}}}).bind("submit"+this.options.eventNamespace,function(i){}).on("click"+this.options.eventNamespace,"button, input.submitLink, input[type=file].error",function(m){var i=e(m.currentTarget);
g.$theForm.data("clicked",i);
if(i.is("[name=:previouspage]")){g._doPageMove()
}else{if(i.hasClass("submitLink")){var k=i.next("input[type='hidden']");
if(k.length>0){var j=k.val();
if(j!==""&&!isNaN(j)){g._changeToStep(parseInt(j,10)+1)
}}}else{if(i.is("input[type=file]")){}}}})
}},beforeValidationHandler:function(g){ubs.util.log("Form submit captured before validation!");
return true
},afterValidationHandler:function(k){var g=this;
var j=e(k.currentTarget);
var m=this._isValidForm(j);
if(m){this._fixCurrencyFormat(j)
}if(this.currentStepIndex===this.formSteps){if(!m){k.preventDefault();
return false
}ubs.util.log("Allow form submit!");
this.$theForm.find("input:not([type=hidden]), textarea, select").removeProp("disabled").removeProp("readonly");
this.$theForm.find("button").prop("disabled","disabled");
this._muteHiddenFields(this.$theForm,true);
this.$theForm.find(".msf-step-wrapper").show();
this.$theForm.find("input[type='file']").removeClass("inputFile").css({visibility:"visible",opacity:"1"}).removeProp("disabled").show();
this.$theForm.find(".form__contentWrapper").css({overflow:"hidden",height:"1px",width:"1px"});
this.$theForm.data("submit-bypass",true).submit();
return
}k.preventDefault();
var i=this.$theForm.validate();
if(typeof i==="object"){i.settings.submitHandler=function(){if(g.$theForm.data("submit-bypass")===true){return true
}}
}if(m){if(!this.isLocalStep){this.sendDataToServer()
}else{this._doPageMove()
}}return false
},_fixCurrencyFormat:function(g){e("input[data-rule-currencyformat='true'],textarea[data-rule-currencyformatmultiline='true']",g).each(function(){var m=e(this).data("defValue");
if(typeof m!=="undefined"){if(e(this)[0].tagName==="INPUT"){e(this).val(m)
}else{var j="";
for(var k=0;
k<m.length;
k++){j+=m[k]+"\n"
}$this.val(j)
}}})
},sendDataToServer:function(){var k=this;
if(this.isLocalStep){if(this._isValidForm(k.$theForm)){this._doPageMove()
}return false
}var n;
var o=this.currentStepIndex;
if(o>1){var g='input:not([type="hidden"],[type="file"]), textarea, button, select';
for(var m=o;
m>=1;
m--){this._enableSteps(e(".msf-step-wrapper[data-step-index='"+m+"']"),true)
}}n=this._serializeForm(this.$theForm);
var j={url:this.dataURL,data:n,type:"POST",beforeSend:function(){k._onBeforeSendData.call(k)
}};
e.ajax(j).done(function(i){k._onSentData.call(k,i)
}).fail(function(i,p){k._onSentDataFailed.call(k,i,p)
}).always(function(){k._onAfterSentData.call(k)
})
},_checkForAJAXErrors:function(j){if(typeof j!=="string"){return true
}var i=e(j);
var g=".request-result-message";
this.$theForm.find(g).remove();
i=i.find(g);
if(i.length>0){this.$theForm.prepend(i);
return true
}else{return false
}},_muteHiddenFields:function(i,j){ubs.util.log("** Calling _muteHiddenFields("+j+")");
var g="input:not([type=hidden]), textarea, button, select";
if(j){i.find("fieldset").filter(":disabled").find(g).each(function(m,n){var k=(e(n).prop("disabled")==="disabled"||e(n).prop("disabled")===true);
if(k===false){ubs.util.log("**** Field: "+n.nodeName+" "+e(n).attr("name")+" wasn't disabled! Disabling now, and it's "+(e(n).is(":visible")?"visible":"hidden!"));
e(n).prop("disabled","disabled").data("muted",true)
}else{ubs.util.log("** Field: "+n.nodeName+" "+e(n).attr("name")+" was already disabled...")
}})
}else{i.find("fieldset").filter(":disabled").find(g).each(function(k,m){if(e(m).data("muted")===true){ubs.util.log("** Field: "+m.nodeName+" "+e(m).attr("name")+" has been re-enabled...");
e(m).removeProp("disabled");
e(m).data("muted",false)
}})
}},_prepareSummary:function(u,m){var y=this;
var x=e(m);
var i=x.find(".accordionbox").length>0;
if(u.length>0&&x){var j="div.formsummary";
var k=x.find(j).find("fieldset.buttons").remove().end();
var n=k.find(".textimage, .adjacenttextbox, .kmufinancialdata");
e.each(n,function(){var z=e(this);
if(z.html().replace(/\s|&nbsp;/g,"").length===0){z.remove()
}});
var p=e('<div class="formsummary-ajax-response formsummary"></div>');
var o=k.find("[data-nn-fileupload]");
var q;
var w;
var r;
var g;
e.each(o,function(){g=e(this).closest(".basecomponent");
q=e(this).attr("data-nn-fileupload");
w=y.$theForm.find("#"+q);
r=w.val();
if(r!==f&&r!==""){e(this).text(r);
g.data("isset",true)
}else{if(e(this).data("nn-lastelement")===true&&g.data("isset")!==true){g.remove()
}else{e(this).closest(".formsummary__item--description").remove()
}}});
u.find(".formsummary-ajax-response").remove();
p.prepend(k).find(".submitLink").attr("type","button");
u.find(".formsummary").eq(0).append(p);
if(i){ubs.desktop.ui.init_content(u)
}}},_onSentData:function(i){ubs.util.log("Data sent successfully...");
if(!this._checkForAJAXErrors(i)){if(typeof i==="string"&&(this.currentStepIndex===(this.formSteps-1))){var g=this.$theForm.find(".msf-step-wrapper__last-step");
this._prepareSummary(g,i)
}this._doPageMove()
}},_onSentDataFailed:function(g,i){ubs.util.log("Sending to server has failed: "+i);
this._showAJAXError(i)
},_onBeforeSendData:function(){ubs.util.log("Before sending data...")
},_onAfterSentData:function(){ubs.util.log("Done sending data...")
},destroy:function(){this.removeEventListeners();
this.removeElements()
},removeEventListeners:function(){this.$theForm.off(this.options.eventNamespace)
},removeElements:function(){this.$theForm=null;
this.$progressBar=null;
this.$currentStepObj=null;
this.$activePageField=null
},_isValidForm:function(g){var i=true;
if(typeof g.valid==="function"){i=g.valid()
}return i
},_doPageMove:function(){var g=this.$theForm,j,i;
i=g.data("clicked").closest(".msf-step-wrapper");
if(this.lastStepIndex<this.currentStepIndex){i.data("prevstepindex",this.lastStepIndex)
}if(g.data("clicked").is("[name=:nextpage]")){if(this.currentStepIndex<this.formSteps){j=this._checkPageStepConstraint(g.data("clicked"));
this.lastStepIndex=this.currentStepIndex;
if(j){this.currentStepIndex=j
}else{this.currentStepIndex+=1
}}}else{if(g.data("clicked").is("[name=:previouspage]")){j=i.data("prevstepindex");
if(j){this.lastStepIndex=this.currentStepIndex;
this.currentStepIndex=j
}else{this.currentStepIndex-=1
}}}this._changeToStep(this.currentStepIndex)
},_checkPageStepConstraint:function(j){var m=this,i=false,k,o,p,g,n;
k=j.closest(".msf-step-wrapper").data("answer-sensitivity");
if(k.length){k=k.replace(/'/g,'"');
k=e.parseJSON(k)
}e.each(k,function(q,r){n=q.split("=");
o=n[0];
g=n[1];
p=m.$theForm.find("[name='"+o+"']");
if(p.is(":radio")||p.is(":checkbox")){p=p.filter(":checked")
}if(p.length){if(p.val()===g){i=parseInt(r);
return false
}}});
return i
},_readFormParams:function(g){this.formName=g.attr("name")||encodeURIComponent(location.pathname);
var i=g.find("input[type='hidden'][name='multistepformpages']");
this.formSteps=(i.length>0?parseInt(i.val(),10):0);
this.dataURL=g.attr("action")
},_rearrangeForm:function(k){var g=[];
var n=0,m=0;
var q=e(".form__contentWrapper",k);
var p=q.find("> div");
p.each(function(i,r){if(e(r).hasClass("pagebreak")){g.push(e(r).index()+1)
}});
for(var o=0;
o<g.length;
o++){if(o===0){m=g[o]
}else{n=g[o-1];
m=g[o]
}p.slice(n,m).wrapAll('<div class="msf-step-wrapper" data-step-index="'+(o+1)+'"></div>')
}if(g.length>1){q.find("> div:not(.msf-step-wrapper)").wrapAll('<div class="msf-step-wrapper msf-step-wrapper__last-step" data-step-index="'+(g.length+1)+'"></div>');
if(!this.debugMode){q.find("> div:not(:eq(0))").hide()
}else{q.find("> div:not(:eq(0))").show()
}this.$currentStepObj=q.find("> div:eq(0)").show()
}q.find(".msf-step-wrapper:not(.msf-step-wrapper__last-step)").each(function(){var i=[];
if(e(this).attr("data-step-index")==="1"){i=e(this).find(".pagetitle .step-wrapper").eq(0);
if(i.length>0){e(this).attr("data-step-name",i.attr("data-step-name"))
}if(k.find("input[name='currentStepIndex'][type='hidden']").length===0){e('<input type="hidden" name="currentStepIndex" value="1">').appendTo(k)
}if(k.find("input[name='currentStepName'][type='hidden']").length===0){e('<input type="hidden" name="currentStepName" value="'+i.attr("data-step-name")+'">').appendTo(k)
}}var u=e(this).find(".pagebreak");
if(u.length>0){i=u.find(".pagetitle .step-wrapper");
if(i.length>0){e(this).next().attr("data-step-name",i.attr("data-step-name"))
}var r=u.find("> .step-wrapper");
if(r.length>0){e(this).attr("data-external-storage",r.attr("data-external-storage")).attr("data-answer-sensitivity",r.attr("data-answer-sensitivity"))
}}});
var j=e('<input type="hidden" name=":actPage" value="0">');
k.find("[name=':actPage']").remove().end().prepend(j);
this.$activePageField=j;
this._changeToStep(1)
},_serializeForm:function(g){this._muteHiddenFields(g,true);
g.find(".input-js-placeholder--in").val("");
var i=g.serializeArray();
this._muteHiddenFields(g,false);
i.push({name:":nextpage",value:"submit"});
return(i)
},_clearForm:function(g){g.find("input:not[type='button'], select, textarea").each(function(){var i=e(this).attr("type");
switch(i){case"checkbox":case"radio":e(this).removeAttr("checked").prop("checked",false);
break;
default:e(this).val("")
}})
},_checkFileAPISupport:function(){return e("<input type='file'>").get(0).files!==f
},_scrollToTop:function(){var g=e("html, body");
g.animate({scrollTop:0},"500",function(){ubs.util.log("Scroll to top...")
})
},_showAJAXError:function(i){var g=e('<div class="messageBox request-result-message"><p><strong>'+i+"</strong></p></div>");
this.$theForm.prepend(g)
}};
e.fn.localForm=function(g){if(!Object.create){Object.create=function(j){function i(){}i.prototype=j;
return new i()
}
}return this.each(function(){var i=Object.create(b);
i.init(g,this);
e.data(this,"localform",i)
})
};
e.fn.localForm.options={eventNamespace:".localForm"};
if(typeof CQ!=="undefined"&&typeof CQ.WCM!=="undefined"&&CQ.WCM.isEditMode()){e(".form__contentWrapper > div").show()
}else{e(d).localForm()
}}(jQuery,window,document));
(function(a){ubs.ui=ubs.ui||{};
ubs.ui.lightbox=ubs.ui.lightbox||{};
a.extend(ubs.ui.lightbox,{defaults_no_iframe:{iframe:false,opacity:0.4,close:"Close",close_description:"",innerWidth:false,innerHeight:false,left:65,top:false,right:false,overlayClose:true,escKey:true,hp:false,pf:false,sb:false,info:false,leftAligned:false,boxName:false,html:false,service:false,href:false,inline:false,base:false,direction:"ltr"},defaults_iframe:{iframe:true,fastIframe:false,permission:true,opacity:0.4,close:"Close",close_description:"",innerWidth:a("body").width()-90,innerHeight:30,innerHeightDefault:500,left:65,top:false,right:false,bottom:false,scrolling:false,transition:"elastic",escKey:false,overlayClose:true,hp:false,pf:false,sb:false,info:false,leftAligned:false,boxName:false,html:false,data:false,service:false,href:false,inline:false,path:"",base:false,direction:"ltr",visibilityTimeout:2000},status:{element:[],elementClone:[],parent:[],opts:[],iFrame:[],iFramedoc:[],iwidth:[],iFramebody:[],iFramecont:[],executedObject:[],loading:false,scrollPosition:0},init:function(d){var e=a("html").css("direction");
ubs.ui.lightbox.defaults_no_iframe.direction=e;
ubs.ui.lightbox.defaults_iframe.direction=e;
var b=ubs.ui.lightbox.status.opts.length;
if(ubs.init.states.cqAuthor){a(window).scroll(function(){if(ubs.ui.lightbox.status.loading){a(this).scrollTop(ubs.ui.lightbox.status.scrollPosition)
}})
}a.each(d,function(k){k+=b;
var g;
ubs.ui.lightbox.status.element[k]=a(this);
ubs.ui.lightbox.status.parent[k]=ubs.ui.lightbox.status.element[k].parent();
var m=a(this).metadata().lightBox;
if(m){if(m.iframe){ubs.ui.lightbox.status.opts[k]=a.extend({},ubs.ui.lightbox.defaults_iframe,m)
}else{ubs.ui.lightbox.status.opts[k]=a.extend({},ubs.ui.lightbox.defaults_no_iframe,m)
}}else{ubs.ui.lightbox.status.opts[k]=a.extend({},ubs.ui.lightbox.defaults_no_iframe,m)
}if(ubs.ui.lightbox.status.opts[k].direction==="rtl"){ubs.ui.lightbox.status.opts[k].left=false;
if(ubs.ui.lightbox.status.opts[k].leftAligned){ubs.ui.lightbox.status.opts[k].right=10
}else{ubs.ui.lightbox.status.opts[k].right=65
}}if(ubs.ui.lightbox.status.opts[k].iframe&&ubs.ui.lightbox.status.opts[k].innerWidth!==ubs.ui.lightbox.defaults_iframe.innerWidth){ubs.ui.lightbox.status.opts[k].innerWidthCustom=ubs.ui.lightbox.status.opts[k].innerWidth
}if(ubs.ui.lightbox.status.opts[k].iframe&&ubs.ui.lightbox.status.opts[k].innerHeight!==30){ubs.ui.lightbox.status.opts[k].innerHeightCustom=ubs.ui.lightbox.status.opts[k].innerHeight
}if(ubs.ui.lightbox.status.element[k].children().length===1&&ubs.ui.lightbox.status.element[k].children("img").length===1){ubs.ui.lightbox.status.opts[k].html='<div style="padding:1.67em; width:auto;height:auto;background:#fff;"><img src="'+a(this).prop("href")+'"/></div>';
ubs.ui.lightbox.status.opts[k].close_description=ubs.ui.lightbox.status.opts[k].close;
if(ubs.ui.lightbox.status.opts[k].close){g=ubs.ui.lightbox.status.opts[k].close+"&nbsp; X"
}else{g="X";
ubs.ui.lightbox.status.opts[k].close_description=g
}ubs.ui.lightbox.status.opts[k].close="<div class='button-close button'><span><span>"+g+"</span></span></div>"
}if(ubs.ui.lightbox.status.opts[k].iframe){if(!(ubs.ui.lightbox.status.element[k].children().length===1&&ubs.ui.lightbox.status.element[k].children("img").length===1)){ubs.ui.lightbox.status.opts[k].close_description=ubs.ui.lightbox.status.opts[k].close;
if(ubs.ui.lightbox.status.opts[k].close){g=ubs.ui.lightbox.status.opts[k].close+"&nbsp; X"
}else{g="X";
ubs.ui.lightbox.status.opts[k].close_description=g
}ubs.ui.lightbox.status.opts[k].close="<div class='button-close button'><span><span>"+g+"</span></span></div>"
}if(ubs.ui.lightbox.status.opts[k].pf){var p=ubs.init.states.$content.siblings("#nav-content").outerWidth(true)+ubs.init.states.$content.width();
var o=((ubs.init.states.tim)?791:757)*(ubs.init.states.textzoom>1?ubs.init.states.textzoom:1);
if(o>p&&p!==0){o=p
}ubs.ui.lightbox.status.opts[k].opacity=0;
ubs.ui.lightbox.status.opts[k].transition="none";
ubs.ui.lightbox.status.opts[k].innerWidth=((ubs.ui.lightbox.status.opts[k].innerWidth>o)?o:(ubs.ui.lightbox.status.opts[k].innerWidth))
}if(ubs.ui.lightbox.status.opts[k].hp){ubs.ui.lightbox.status.opts[k].innerHeight=540*(ubs.init.states.textzoom);
ubs.ui.lightbox.status.opts[k].innerWidth=860*(ubs.init.states.textzoom);
if(ubs.ui.lightbox.status.opts[k].direction==="rtl"){ubs.ui.lightbox.status.opts[k].right=65
}else{ubs.ui.lightbox.status.opts[k].left=65
}ubs.ui.lightbox.status.opts[k].top=100
}}else{if(ubs.ui.lightbox.status.opts[k].html){ubs.ui.lightbox.status.opts[k].html=(a(ubs.ui.lightbox.status.opts[k].html))
}ubs.ui.lightbox.status.opts[k].transition="none";
if(ubs.ui.lightbox.status.opts[k].close){g=ubs.ui.lightbox.status.opts[k].close+"&nbsp; X"
}else{g="X";
ubs.ui.lightbox.status.opts[k].close_description=g
}ubs.ui.lightbox.status.opts[k].close="<div class='button-close button'><span><span>"+g+"</span></span></div>"
}if(ubs.ui.lightbox.status.opts[k].pf){ubs.ui.lightbox.status.opts[k].close="X"
}if(ubs.ui.lightbox.status.opts[k].sb){ubs.ui.lightbox.status.opts[k].right=false;
ubs.ui.lightbox.status.opts[k].left=false;
ubs.ui.lightbox.status.opts[k].html.css("position","absolute").css("left","0");
ubs.ui.lightbox.status.opts[k].innerWidth=ubs.ui.lightbox.status.opts[k].html.outerWidth(true)+(24*ubs.init.states.textzoom);
ubs.ui.lightbox.status.opts[k].html.css("position","relative");
if(ubs.util.ie()){if(ubs.util.getBrowserVersion()<=7){ubs.ui.lightbox.status.opts[k].innerWidth="300"
}}ubs.ui.lightbox.status.opts[k].close="X"
}if(ubs.ui.lightbox.status.opts[k].pf||ubs.ui.lightbox.status.opts[k].sb){ubs.ui.lightbox.status.opts[k].footerBar=a("#footer-interact");
if(ubs.ui.lightbox.status.opts[k].footerBar.length===0){ubs.ui.lightbox.status.opts[k].footerBar=ubs.ui.lightbox.status.element[k].closest("div.articletoolbar")
}if((ubs.ui.lightbox.status.opts[k].direction==="rtl"&&!ubs.ui.lightbox.status.opts[k].leftAligned)||(ubs.ui.lightbox.status.opts[k].direction!=="rtl"&&ubs.ui.lightbox.status.opts[k].leftAligned)){var n=ubs.ui.lightbox.status.opts[k].footerBar.offset().left;
var f=ubs.ui.lightbox.status.opts[k].footerBar.position().left;
if(f>n){n=f
}ubs.ui.lightbox.status.opts[k].right=(a(document).width()-n);
if(ubs.ui.lightbox.status.opts[k].pf){ubs.ui.lightbox.status.opts[k].right+=(-parseInt(ubs.ui.lightbox.status.opts[k].innerWidth,10)-10);
if(ubs.util.ie()){if(ubs.util.getBrowserVersion()<=8){ubs.ui.lightbox.status.opts[k].right-=20
}else{if(ubs.util.getBrowserVersion()>=9){ubs.ui.lightbox.status.opts[k].right-=15
}}}}else{ubs.ui.lightbox.status.opts[k].right+=(-ubs.ui.lightbox.status.opts[k].html.outerWidth(true)-(29*ubs.init.states.textzoom)-5);
if(ubs.util.ie()){if(ubs.util.getBrowserVersion()<=8){ubs.ui.lightbox.status.opts[k].right-=23
}else{if(ubs.util.getBrowserVersion()>=9){ubs.ui.lightbox.status.opts[k].right-=16
}}}}}else{ubs.ui.lightbox.status.opts[k].left=((ubs.ui.lightbox.status.opts[k].footerBar.offset().left+ubs.ui.lightbox.status.opts[k].footerBar.width())-parseInt(ubs.ui.lightbox.status.opts[k].innerWidth,10));
if(ubs.ui.lightbox.status.opts[k].sb){if(ubs.util.ie()){if(ubs.util.getBrowserVersion()<=8){ubs.ui.lightbox.status.opts[k].left-=0
}}}}}if(ubs.ui.lightbox.status.opts[k].info){ubs.ui.lightbox.status.opts[k].innerWidth=300*(ubs.init.states.textzoom>1?ubs.init.states.textzoom:1);
ubs.ui.lightbox.status.opts[k].close="X"
}if(ubs.util.ie()&&ubs.util.getBrowserVersion()<=6){ubs.ui.lightbox.status.opts[k].right=false;
ubs.ui.lightbox.status.opts[k].left=false;
if(ubs.ui.lightbox.status.opts[k].direction==="rtl"){ubs.ui.lightbox.status.opts[k].right=65
}else{ubs.ui.lightbox.status.opts[k].left=65
}ubs.ui.lightbox.status.opts[k].top=100;
ubs.ui.lightbox.status.opts[k].bottom=false
}ubs.ui.lightbox.status.opts[k].path=a.base64Encode(window.location.pathname);
if(ubs.init.states.textzoom!==1){if(ubs.ui.lightbox.status.opts[k].innerWidthCustom){ubs.ui.lightbox.status.opts[k].innerWidthCustom*=ubs.init.states.textzoom
}if(ubs.ui.lightbox.status.opts[k].innerHeightCustom){ubs.ui.lightbox.status.opts[k].innerHeightCustom*=ubs.init.states.textzoom
}}ubs.ui.lightbox.initPlugin(k);
var j=ubs.func.cookieHandling.getCookieStorage("colorbox_open_"+ubs.ui.lightbox.status.opts[k].path);
if(j===a(this).prop("href")){if(a.colorbox.element().length===0){a(this).click()
}}})
},initPlugin:function(b){ubs.ui.lightbox.status.element[b].colorbox({title:" ",iframe:ubs.ui.lightbox.status.opts[b].iframe,fastIframe:ubs.ui.lightbox.status.opts[b].fastIframe,opacity:ubs.ui.lightbox.status.opts[b].opacity,close:ubs.ui.lightbox.status.opts[b].close,html:ubs.ui.lightbox.status.opts[b].html,inline:ubs.ui.lightbox.status.opts[b].inline,href:ubs.ui.lightbox.status.opts[b].href,innerWidth:ubs.ui.lightbox.status.opts[b].innerWidth,innerHeight:ubs.ui.lightbox.status.opts[b].innerHeight,left:ubs.ui.lightbox.status.opts[b].left,right:ubs.ui.lightbox.status.opts[b].right,top:ubs.ui.lightbox.status.opts[b].top,scrolling:ubs.ui.lightbox.status.opts[b].scrolling,transition:ubs.ui.lightbox.status.opts[b].transition,overlayClose:ubs.ui.lightbox.status.opts[b].overlayClose,escKey:ubs.ui.lightbox.status.opts[b].escKey,current:false,next:'<img src="/img/bg_nav-img-gallery.png"/>',onOpen:function(){if(ubs.init.states.cqAuthor){ubs.ui.lightbox.status.scrollPosition=a("html, body").scrollTop();
ubs.ui.lightbox.status.loading=true
}ubs.ui.lightbox.status.executedObject=a(this);
var e=a("#colorbox");
if(ubs.ui.lightbox.status.opts[b].hp){e.addClass("colorbox-homepage");
a("#main").css("position","relative")
}else{if(ubs.ui.lightbox.status.opts[b].pf||ubs.ui.lightbox.status.opts[b].sb){e.addClass("colorbox-pf").hide();
var d=a("html").height()-ubs.ui.lightbox.status.element[b].offset().top;
e.show();
if(!(ubs.util.ie()&&ubs.util.getBrowserVersion()<7)){e.css("bottom",d).css("top","auto !important")
}}else{if(ubs.ui.lightbox.status.opts[b].info){e.addClass("colorbox-info")
}else{e.addClass("colorbox-default")
}}}if(ubs.ui.lightbox.status.opts[b].boxName){e.addClass("colorbox-"+ubs.ui.lightbox.status.opts[b].boxName)
}},onLoad:function(){var d=a("#colorbox");
if(ubs.ui.lightbox.status.opts[b].hp){d.addClass("colorbox-homepage")
}else{if(ubs.ui.lightbox.status.opts[b].pf||ubs.ui.lightbox.status.opts[b].sb){d.addClass("colorbox-pf");
if(ubs.ui.lightbox.status.opts[b].sb){d.addClass("colorbox-sb")
}}else{if(ubs.ui.lightbox.status.opts[b].info){d.addClass("colorbox-info")
}else{d.addClass("colorbox-default")
}}}if(ubs.ui.lightbox.status.opts[b].boxName){d.addClass("colorbox-"+ubs.ui.lightbox.status.opts[b].boxName)
}},onComplete:function(){ubs.ui.lightbox.colorboxComplete(b);
if(ubs.ui.lightbox.status.opts[b].pf||ubs.ui.lightbox.status.opts[b].sb){if(ubs.ui.lightbox.status.opts[b].direction==="rtl"){var d=ubs.ui.lightbox.status.opts[b].right;
d=d+10;
a("#colorbox").css({right:d,left:"auto"})
}else{a("#colorbox").css({left:ubs.ui.lightbox.status.opts[b].left})
}}ubs.func.cookieHandling.setCookieStorage("colorbox_open_"+ubs.ui.lightbox.status.opts[b].path,a(this).prop("href"),ubs.func.cookieHandling.cookieCategorySettings.lightboxstatus.privacySetting);
function e(){ubs.ui.lightbox.status.loading=false
}if(ubs.init.states.cqAuthor){a("html, body").scrollTop(ubs.ui.lightbox.status.scrollPosition);
setTimeout(function(){e()
},1000)
}},onClosed:function(){ubs.ui.lightbox.status.loading=false;
var e=a("#colorbox");
if(ubs.ui.lightbox.status.opts[b].hp){e.removeClass("colorbox-homepage");
if(ubs.func.cookieHandling.cookiePrivacySetting[ubs.func.cookieHandling.cookieCategorySettings.analytics.privacySetting]){if(window.s){var d=s.t();
if(d){a("body").append(d)
}}}}else{if(ubs.ui.lightbox.status.opts[b].pf||ubs.ui.lightbox.status.opts[b].sb){if(!(ubs.util.ie()&&ubs.util.getBrowserVersion()<=6)){e.removeClass("colorbox-pf")
}}else{if(ubs.ui.lightbox.status.opts[b].info){e.removeClass("colorbox-info")
}else{e.removeClass("colorbox-default").css({"margin-top":"","margin-bottom":""})
}}}if(ubs.ui.lightbox.status.opts[b].boxName){e.removeClass("colorbox-"+ubs.ui.lightbox.status.opts[b].boxName)
}ubs.func.cookieHandling.setCookieStorage("colorbox_open_"+ubs.ui.lightbox.status.opts[b].path,null);
ubs.ui.lightbox.status.executedObject.focus();
a(document).trigger("colorbox/closed")
}})
},resizeiFrame:function(d){var f;
var b;
var e=ubs.ui.lightbox.status.element[d].offset().top;
if(ubs.ui.lightbox.status.opts[d].permission){if(ubs.ui.lightbox.status.iFramedoc[d].length>0){b=ubs.ui.lightbox.status.iFramedoc[d].height()
}else{b=ubs.ui.lightbox.status.iFrame[d].contents().height()
}a("#cboxClose").css("right","")
}else{if(ubs.ui.lightbox.status.opts[d].innerHeight>30){b=ubs.ui.lightbox.status.opts[d].innerHeight
}else{b=ubs.ui.lightbox.status.opts[d].innerHeightDefault
}ubs.ui.lightbox.status.iFrame[d].attr("scrolling","auto");
ubs.ui.lightbox.status.iFrame[d].parent().css("overflow","auto");
a("#cboxClose").css("right","")
}if(ubs.ui.lightbox.status.opts[d].pf&&e<b){f=e;
ubs.ui.lightbox.status.iFrame[d].attr("scrolling","auto");
a("#cboxClose").css("right","30px")
}else{f=b
}if(ubs.ui.lightbox.status.opts[d].innerWidthCustom){ubs.ui.lightbox.status.iwidth[d]=ubs.ui.lightbox.status.opts[d].innerWidthCustom;
if(ubs.ui.lightbox.status.iFramecont[d]){ubs.ui.lightbox.status.iFramecont[d].width("auto")
}}if(ubs.ui.lightbox.status.opts[d].innerHeightCustom){f=ubs.ui.lightbox.status.opts[d].innerHeightCustom
}a.colorbox.resize({innerHeight:f,innerWidth:ubs.ui.lightbox.status.iwidth[d]});
if(ubs.ui.lightbox.status.opts[d].permission){ubs.ui.lightbox.status.iFramebody[d].find("ul.ui-selectmenu-menu-dropdown").css("height","");
ubs.ui.lightbox.status.iFramebody[d].find("ul.ui-selectmenu-menu-dropdown").css("maxHeight",f/2.5)
}if(ubs.ui.lightbox.status.opts[d].permission){ubs.ui.lightbox.status.iFrame[d].contents().find("html").css("overflow-y","auto").css("overflow-x","hidden").find("body").css("overflow-y","auto").css("overflow-x","hidden")
}},colorboxComplete:function(d){if(ubs.ui.lightbox.status.opts[d].iframe){ubs.ui.lightbox.status.iFrame[d]=a("#colorbox iframe");
try{var g=ubs.ui.lightbox.status.iFrame[d].contents()[0].URL
}catch(j){ubs.ui.lightbox.status.opts[d].permission=false
}if(ubs.ui.lightbox.status.opts[d].permission){ubs.ui.lightbox.status.iFramebody[d]=ubs.ui.lightbox.status.iFrame[d].contents().find("body").focus();
ubs.ui.lightbox.status.iFramedoc[d]=ubs.ui.lightbox.status.iFrame[d].contents().find("#doc");
ubs.ui.lightbox.status.iFramecont[d]=ubs.ui.lightbox.status.iFrame[d].contents().find("#content");
if(ubs.ui.lightbox.status.opts[d].close){var b=a.cookie("overlay_closebutton_text");
if(!b){b=ubs.ui.lightbox.status.iFrame[d][0].contentWindow.overlay_closebutton_text
}if(b){ubs.ui.lightbox.status.opts[d].close_description=b;
a("#cboxClose").find("span span").html(b+"&nbsp; X")
}if(!(ubs.util.checkBrowser("ie",7,true))){var f=a("<a href='#' class='show-onfocus hidden'>"+ubs.ui.lightbox.status.opts[d].close_description+"</a>");
f.click(function(){a.colorbox.close()
});
ubs.ui.lightbox.status.iFramebody[d].append(f.clone(true).css("bottom",0)).prepend(f)
}}if(ubs.ui.lightbox.status.opts[d].base){ubs.ui.lightbox.status.iFrame[d].contents().find("head").append("<base target="+ubs.ui.lightbox.status.opts[d].base+"/>")
}if(ubs.ui.lightbox.status.opts[d].hp){ubs.ui.lightbox.status.iFrame[d].contents().find("body").width("auto")
}ubs.ui.lightbox.status.iFrame[d].contents().find("#nav-meta .box-overlay-language").addClass("right").parent().show();
_columnHeightAdjust(ubs.ui.lightbox.status.iFrame[d].contents().find("#content .parsys:first > .columncontrol"));
if(ubs.ui.lightbox.status.iFramecont[d].length>0){ubs.ui.lightbox.status.iwidth[d]=ubs.ui.lightbox.status.iFramecont[d].width()+40
}else{ubs.ui.lightbox.status.iwidth[d]=ubs.ui.lightbox.status.iFramedoc[d].innerWidth()
}if(ubs.ui.lightbox.status.opts[d].pf||ubs.ui.lightbox.status.opts[d].hp){ubs.ui.lightbox.status.iFramebody[d].width("auto");
ubs.ui.lightbox.status.iFramecont[d].width("auto");
ubs.ui.lightbox.status.iwidth[d]=false
}if(ubs.ui.lightbox.status.opts[d].service){ubs.ui.lightbox.status.iFramebody[d].width("auto");
ubs.ui.lightbox.status.iFramecont[d].width("auto");
ubs.ui.lightbox.status.iwidth[d]=false
}}ubs.ui.lightbox.status.iFrame[d].focus();
ubs.ui.lightbox.status.iFrame[d].load(function(){clearTimeout(ubs.ui.lightbox.status.opts[d].visibility_timer);
ubs.ui.lightbox.status.iFrame[d].css("visibility","hidden");
ubs.ui.lightbox.colorboxComplete(d);
ubs.ui.lightbox.status.iFrame[d].css("visibility","visible")
});
ubs.ui.lightbox.resizeiFrame(d)
}if(ubs.ui.lightbox.status.opts[d].iframe&&ubs.ui.lightbox.status.opts[d].permission){if(ubs.ui.lightbox.status.iFramedoc[d].height()>a("html").height()&&!(ubs.ui.lightbox.status.opts[d].pf||ubs.ui.lightbox.status.opts[d].sb)){a("#colorbox").css({"margin-top":"102px","margin-bottom":"102px"})
}if((ubs.util.ie()&&ubs.util.getBrowserVersion()>=8)){ubs.ui.lightbox.status.iFrame[d][0].contentWindow.onbeforeunload=function(){ubs.ui.lightbox.status.iFrame[d].css("visibility","hidden")
}
}else{a(ubs.ui.lightbox.status.iFrame[d][0].contentWindow).unload(function(){ubs.ui.lightbox.status.iFrame[d].css("visibility","hidden");
ubs.ui.lightbox.status.opts[d].visibility_timer=window.setTimeout(function(){ubs.ui.lightbox.status.iFrame[d].css("visibility","visible")
},ubs.ui.lightbox.status.opts[d].visibilityTimeout)
})
}}}})
})(ubs.$);
var nn=nn||{};
jQuery.extend(nn,{$:jQuery});
(function(a){ubs.desktop=ubs.desktop||{};
ubs.desktop.ui=ubs.desktop.ui||{};
a.extend(ubs.desktop.ui,{init:function(d){ubs.util.time("init Desktop UI");
ubs.util.iFrameChecks();
checkChildCb();
ubs.desktop.ui.init_body(d);
var b=a("#content",d);
if(b.length===0){b=a("#main",d);
if(b.length===0){b=d
}}ubs.desktop.ui.init_content(b);
ubs.util.timeEnd("init Desktop UI")
},init_body:function(f){ubs.ui.accordion.inHeader(a("#header .box-accordion",f));
ubs.util.initWithParams(a("a.select-item, #box-login > a",f),"overlayMenu");
_dropdownList(a(".dropdownlist ul",f).not(".fundsproductselection .dropdownlist ul"));
ubs.util.placeholder(a("input[placeholder], textarea[placeholder]",f));
var d=a("#cc",f);
if(d.length){d.currencyCalculator()
}a(".ticker",f).ticker();
ubs.ui.setDisclaimerCookie(a('form[data-disclaimer="set"]',f));
ubs.ui.checkDisclaimerCookie(a('a[data-disclaimer="check"]',f));
var e=a("table.table.quotes",f);
if(e.length){e.highlightTable()
}ubs.ui.zebraTable(a("table.table:not('.quotes')",f).add(a("table.tableHighlight",f)));
a(".print",f).click(function(){window.print();
return false
});
ubs.desktop.ui.autocomplete(a("#search-bar input.autocomplete , .init-autocomplete",f));
a("div.dynamicteaser",f).dynamicTeaser();
a("div.initRotTeaser",f).rotatingTeaser();
a(".tab",f).tabNav();
if(!a("body").hasClass("documentView")){_initImageGallery(a(".init-gallery",f))
}ubs.ui.lightbox.init(a(".lightBox",f));
if(a("html").hasClass("js-popup")){_stayInPopup(f)
}var b=a("div.flash-wrapper",f);
if(b.length){b.initFlash()
}a("div.box-info",f).infotoggle();
a('a.popup, a[target="_popup"], form.popup',f).popupWindow()
},init_content:function(b){ubs.util.initWithParams(a('[data-nn-init="expandabletext"]',b),"expandabletext");
_initUnsubscribe(a(".unSubConform"));
a('[data-nn-init="highlighttable"]',b).highlightTable();
ubs.ui.extendTableSort();
ubs.ui.sortTable(a(".sortTable",b).not(a(".rbaTable .sortTable"),b));
ubs.ui.sortTable(a('[data-nn-init2="sorttable"]',b),{sortList:[]});
ubs.ui.accordion.event(a(".eventTable.accordion",b));
ubs.ui.accordion.standard(a(".box-accordion",b));
ubs.ui.accordion.horizontal(a('[data-nn-init="horizontalaccordion"]',b));
ubs.ui.accordion.gotoAnchor.init(b);
ubs.form.infoIcon(a(".info-form",a(".quote",b)));
if(!a("body").hasClass("documentView")){a(".list-tree",b).tree({expanded:"li:first"})
}_chartTabs(a(".quote-chart"),b);
_brightcoveVideo(a("img.brigthcoveImagePlaceholder",b));
a(".initHCS",b).horizontalContentSlider();
ubs.ui.setAsideBoxWidth(a("p.imageCaption"),b);
a("div.initTabNav",b).tabs().tabNavCorrection();
ubs.ui.globalHorizons.init(a(".gH__tablesSelector",b),a(".gH__mainContainer",b));
a("div.initStageTeaser",b).stageteaser();
_openInParent(a(".openInParent",b),ubs.init.states.accessRights);
a("#footer .button-icon",b).toolTip({width:215,offsetLeft:-50,customClass:"ui-tooltip-footer"});
a('[data-nn-init="functionalarea"]',b).functionalarea()
},autocomplete:function(b){b.autocomplete({minLength:2,source:function(e,d){a.ajax({url:"/bin/ubs/searchservlet",dataType:"JSON",data:"term="+e.term+"&_charset_=UTF-8",success:function(f){d(a.map(f,function(g){return{label:g,value:g}
}))
}})
},search:function(d,e){},select:function(d,e){a(this).val(e.item.value);
a(this).parents("form").eq(0).submit()
}})
}})
})(ubs.$);
(function(a){ubs.fit.func=ubs.fit.func||{};
a.extend(ubs.fit.func,{init:function(b){ubs.util.time("init FIT func");
ubs.fit.func.userCheck.init(b);
ubs.fit.func.svgFallback(b);
ubs.func.termHighlight.init(false,true,a(" > div > div:not('#footer, #disclaimer, div:has(\".fundsSearchResults\")')",ubs.init.states.$content));
ubs.init.states.$content.find(".dynamicteaser").removeHighlight();
ubs.func.cookieHandling.setCookiePrivacySetting();
ubs.func.cookieHandling.removeNotAllowedCookies();
ubs.func.cookieHandling.cookieManagement();
ubs.func.cookieHandling.setCookieSetting(a("form.cookieSettings",b));
ubs.func.cookieHandling.setCookieSetting(a("a.cookieSettings",b),true);
if(typeof a().initTracking!=="undefined"){a().initTracking(b)
}ubs.util.timeEnd("init FIT func")
},svgFallback:function(b){if(!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")){a('img[src$="svg"]').attr("src",function(){return a(this).data("nn-svg-fallback")
})
}},userCheck:{defaults:{},init:function(g){var d=ubs.fit.func.userCheck;
d.defaults.$ls=a("#nav-service div.loginstatus",g);
d.defaults.$loginform=a("#loginform",g);
var b=null;
b=ubs.func.cookieHandling.getCookieStorage("loginStatus");
var f=true;
if(d.defaults.$ls.length>0&&b!==null){f=false;
if(b!=="false"){d.defaults.$ls.html(b)
}else{if(window.sc_cugname!==undefined&&window.sc_cugname.length>0){f=true
}}}if(d.defaults.$ls.length>0&&f){var e="requestUri="+window.location.pathname;
}d.logoutBinding()
},successFunction:function(e,f,d){if(e!==""){var b=ubs.fit.func.userCheck;
b.defaults.$ls.html(e);
ubs.func.cookieHandling.setStorage("loginStatus",e)
}else{ubs.func.cookieHandling.setStorage("loginStatus",false)
}},errorFunction:function(b,e,d){},logoutBinding:function(){a("body").click(function(b){if(a(b.target).closest("a").hasClass("logout")){ubs.fit.func.userCheck.logoutUser()
}});
ubs.fit.func.userCheck.defaults.$loginform.submit(function(){ubs.fit.func.userCheck.logoutUser()
})
},cugLinkHandling:function(f){var d=ubs.fit.func.userCheck;
var e=d.defaults.$ls.find("a.mysite-link").attr("data-cugrights");
if(e){var b=e.split(",");
d.defaults.$cugLinks=a("a[data-cug]",f);
a.each(d.defaults.$cugLinks,function(){var g=a(this);
a.each(b,function(k){var j=b[k];
if(j===g.attr("data-cug")){g.removeClass("cug-link")
}})
})
}},logoutUser:function(){ubs.func.cookieHandling.setStorage("loginStatus",null)
}},cugLogin:function(d){var b=false;
d.click(function(g){g.preventDefault();
var f=a(this).prop("href");
var e=f.replace(".html",".logintest.html");
a.ajax({type:"GET",url:e,success:(function(i){}),error:(function(k){var i="lightBox {lightBox:{ iframe:true}}";
var j=a("<a href='"+f+"' class='"+i+"' style='display:none' />");
a("body").append(j);
ubs.ui.lightbox.init(j);
j.click()
})})
});
_openInParent(a("#loginform"),ubs.init.states.accessRights)
}})
})(ubs.$);