/*! jQuery v1.12.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ra(b),i=l.boxSizing&&"border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Sa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Oa.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+eb(b,c,e||(i?"border":"content"),f,h)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb,tb,ub=n.expr.attrHandle,vb=/^(?:checked|selected)$/i,wb=l.getSetAttribute,xb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?tb:sb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?xb&&wb||!vb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(wb?c:d)}}),tb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):xb&&wb||!vb.test(c)?a.setAttribute(!wb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ub[b]||n.find.attr;xb&&wb||!vb.test(b)?ub[b]=function(a,b,d){var e,f;return d||(f=ub[b],ub[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ub[b]=f),e}:ub[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),xb&&wb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):sb&&sb.set(a,b,c)}}),wb||(sb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ub.id=ub.name=ub.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:sb.set},n.attrHooks.contenteditable={set:function(a,b,c){sb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var yb=/^(?:input|select|textarea|button|object)$/i,zb=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):yb.test(a.nodeName)||zb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Ab=/[\t\r\n\f]/g;function Bb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Bb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Bb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Bb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=Bb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Bb(c)+" ").replace(Ab," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Cb=a.location,Db=n.now(),Eb=/\?/,Fb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Fb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Gb=/#.*$/,Hb=/([?&])_=[^&]*/,Ib=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Jb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Kb=/^(?:GET|HEAD)$/,Lb=/^\/\//,Mb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Nb={},Ob={},Pb="*/".concat("*"),Qb=Cb.href,Rb=Mb.exec(Qb.toLowerCase())||[];function Sb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Tb(a,b,c,d){var e={},f=a===Ob;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ub(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Vb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Wb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Qb,type:"GET",isLocal:Jb.test(Rb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ub(Ub(a,n.ajaxSettings),b):Ub(n.ajaxSettings,a)},ajaxPrefilter:Sb(Nb),ajaxTransport:Sb(Ob),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Ib.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Qb)+"").replace(Gb,"").replace(Lb,Rb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Mb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Rb[1]&&d[2]===Rb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Rb[3]||("http:"===Rb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Tb(Nb,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Kb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Eb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Hb.test(f)?f.replace(Hb,"$1_="+Db++):f+(Eb.test(f)?"&":"?")+"_="+Db++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Pb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Tb(Ob,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Vb(l,w,d)),v=Wb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Xb(a){return a.style&&a.style.display||n.css(a,"display")}function Yb(a){while(a&&1===a.nodeType){if("none"===Xb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Yb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Zb=/%20/g,$b=/\[\]$/,_b=/\r?\n/g,ac=/^(?:submit|button|image|reset|file)$/i,bc=/^(?:input|select|textarea|keygen)/i;function cc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||$b.test(a)?d(a,e):cc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)cc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)cc(c,a[c],b,e);return d.join("&").replace(Zb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&bc.test(this.nodeName)&&!ac.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(_b,"\r\n")}}):{name:b.name,value:c.replace(_b,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?hc():d.documentMode>8?gc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&gc()||hc()}:gc;var dc=0,ec={},fc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in ec)ec[a](void 0,!0)}),l.cors=!!fc&&"withCredentials"in fc,fc=l.ajax=!!fc,fc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++dc;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete ec[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=ec[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function gc(){try{return new a.XMLHttpRequest}catch(b){}}function hc(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ic=[],jc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ic.pop()||n.expando+"_"+Db++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(jc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&jc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(jc,"$1"+e):b.jsonp!==!1&&(b.url+=(Eb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ic.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){if(!d.implementation.createHTMLDocument)return!1;var a=d.implementation.createHTMLDocument("");return a.body.innerHTML="<form></form><form></form>",2===a.body.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var kc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&kc)return kc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function lc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=lc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0)-a.scrollTop(),c.left+=n.css(a[0],"borderLeftWidth",!0)-a.scrollLeft()),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=lc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){
n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var mc=a.jQuery,nc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=nc),b&&a.jQuery===n&&(a.jQuery=mc),n},b||(a.jQuery=a.$=n),n});

/* jquery.columns-1.0.min.js Copyright (c) 2014 Michael Eisenbraun (http://jquery.michaeleisenbraun.com)
 * Licensed under the MIT License.
 * Version: 1.0.0
 * Requires: jQuery 1.7.2+
 */if(!window.console)var console={log:function(){}};(function(e){e.fn.columns=function(n){return this.each(function(){var r=e(this),i=r.data("columns");i||r.data("columns",i=new t(this,n))}).data("columns")};var t=function(t,n){this.$el=e(t);n&&e.extend(this,n);this.init()};t.prototype={table:null,search:null,schema:null,sortBy:null,showRows:[5,10,25,50],reverse:!1,size:5,page:1,pages:1,query:null,range:null,total:null,master:null,templates:{table:'<div class="{{columns_table_class}}"></div>',search:'<div class="{{columns_search_class}}"><input class="ui-table-search" placeholder="Search" type="text" name="query" /></div>',open:'<table class="{{table_class}}"><thead></tr>',th:'<th class="{{sort}}" data-columns-sortby="{{key}}">{{header}} <span class="ui-arrow">{{arrow}}</th>',tbody:"</tr></thead><tbody>",controls:'<div class="{{table_footer_class}}"><span class="{{show_rows_class}}">Show rows: <select>{{show_rows}}</select></span> <span class="{{table_results_class}}">Results: <strong>{{table_range_start}} &ndash; {{table_range_end}}</strong> of <strong>{{table_total}}</strong></span> <span class="{{table_controls_class}}"><span class="{{prev_class}}" data-columns-page="{{prev_page}}">{{prev_text}}</span> <span class="{{next_class}}" data-columns-page="{{next_page}}">{{next_text}}</span></span></div>'},sort:function(){function n(e,n,r){n=n?-1:1;return function(i,s){i=i[e];s=s[e];if(t.test(i)&&t.test(s)){i=new Date(i);i=Date.parse(i);s=new Date(s);s=Date.parse(s)}else if(typeof r!="undefined"){i=r(i);s=r(s)}return i<s?n*-1:i>s?n*1:0}}var e=this,t=/^(Jan|January|Feb|February|Mar|March|Apr|April|May|Jun|June|Jul|July|Aug|August|Sep|September|Oct|October|Nov|November|Dec|December|(0?\d{1})|(10|11|12))(-|\s|\/|\.)(0?[1-9]|(1|2)[0-9]|3(0|1))(-|\s|\/|\.|,\s)(19|20)?\d\d$/i;e.sortBy&&typeof e.data[0][e.sortBy]!="undefined"&&e.data.sort(n(e.sortBy,e.reverse))},filter:function(){var t=this;t.query&&(t.data=e.grep(t.data,function(e,n){for(val in e)if(typeof e[val]=="string"){var r=new RegExp(t.query,"gi");if(e[val].match(r))return!0}else if(typeof e[val]=="number"&&e[val]==t.query)return!0;return!1}));t.total=t.data.length},paginate:function(){var e=this;e.pages=Math.ceil(e.data.length/e.size);e.page=e.page<=e.pages?e.page:1;var t=(e.page-1)*e.size,n=t+e.size<e.total?t+e.size:e.total;e.range={start:t+1,end:n};e.data=e.data.slice(t,n)},condition:function(){var t=this,n=[],r={};if(t.schema){e.each(t.data,function(i,s){r={};e.each(t.schema,function(e,t){if(t.condition&&!t.condition(s[t.key])){r=null;return!1}r[t.key]=s[t.key]});r&&n.push(r)});t.data=n}},create:function(){var t=this;t.data=[];e.extend(t.data,t.master);t.condition();t.sort();t.filter();t.paginate();var n=t.page-1,r=t.page+1<=t.pages?t.page+1:0,i=t.chevron(t.templates.open,{table_class:"ui-table"});t.schema?e.each(t.data,function(n,r){if(n==0){e.each(t.schema,function(e,n){t.sortBy==n.key?t.reverse?i+=t.chevron(t.templates.th,{sort:"ui-table-sort-down",key:n.key,header:n.header,arrow:" &#x25BC;"}):i+=t.chevron(t.templates.th,{sort:"ui-table-sort-up",key:n.key,header:n.header,arrow:"&#x25B2;"}):i+=t.chevron(t.templates.th,{sort:"",key:n.key,header:n.header,arrow:""})});i+=t.chevron(t.templates.tbody,{})}i+=n%2==0?'<tr class="ui-table-rows-even">':'<tr class="ui-table-rows-odd">';e.each(t.schema,function(e,n){n.template?i+="<td>"+t.chevron(n.template,r)+"</td>":i+="<td>"+r[n.key]+"</td>"});i+="</tr>"}):e.each(t.data,function(n,r){if(n==0){e.each(r,function(e,n){t.sortBy==e?t.reverse?i+=t.chevron(t.templates.th,{sort:"ui-table-sort-down",key:e,header:e,arrow:" &#x25BC;"}):i+=t.chevron(t.templates.th,{sort:"ui-table-sort-up",key:e,header:e,arrow:"&#x25B2;"}):i+=t.chevron(t.templates.th,{sort:"",key:e,header:e,arrow:""})});i+=t.chevron(t.templates.tbody,{})}i+=n%2==0?'<tr class="ui-table-rows-even">':'<tr class="ui-table-rows-odd">';e.each(r,function(e,t){i+="<td>"+t+"</td>"});i+="</tr>"});i+="</tbody></table>";var s={table_footer_class:"ui-table-footer",table_controls_class:"ui-table-controls",prev_page:n,prev_text:'<img src="./img/arrow-left.png">',next_page:r,next_text:'<img src="./img/arrow-right.png">',table_results_class:"ui-table-results",table_range_start:t.range.start,table_range_end:t.range.end,table_total:t.total,show_rows_class:"ui-table-show-rows",show_rows:""};e.each(t.showRows,function(e,n){n==t.size?s.show_rows+='<option value="'+n+'" selected="selected">'+n+"</option>":s.show_rows+='<option value="'+n+'">'+n+"</option>"});n?s.prev_class="ui-table-control-prev":s.prev_class="ui-table-control-disabled";r?s.next_class="ui-table-control-next":s.next_class="ui-table-control-disabled";i+=t.chevron(t.templates.controls,s);t.table.html(i)},chevron:function(t,n){e.each(n,function(e,n){var r=new RegExp("{{"+e+"}}","g");t=t.replace(r,n)});return t},init:function(){var t=this;if(e.isArray(t.data)){t.master=[];e.extend(t.master,t.data);t.$el.addClass("columns");t.$el.append(t.chevron(t.templates.search,{columns_search_class:"ui-columns-search"}));t.$el.append(t.chevron(t.templates.table,{columns_table_class:"ui-columns-table"}));t.search=e(".ui-columns-search",t.$el);t.table=e(".ui-columns-table",t.$el);t.$el.on("click","th",function(){t.sortBy==e(this).data("columns-sortby")&&(t.reverse=t.reverse?!1:!0);t.sortBy=e(this).data("columns-sortby");t.page=1;t.create()});t.$el.on("click",".ui-table-control-prev, .ui-table-control-next",function(){t.page=e(this).data("columns-page");t.create()});t.$el.on("keyup",".ui-table-search",function(){t.query=e(this).val();t.create()});t.$el.on("change",".ui-table-show-rows select",function(){console.log(e(this).val());t.size=parseInt(e(this).val());t.create()});t.create()}else e.error('The "data" parameter must be an array.')}}})(jQuery);

// iemagic.js -- http://stackoverflow.com/a/5913807
if(/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
    var IEBinaryToArray_ByteStr_Script =
    "<!-- IEBinaryToArray_ByteStr -->\r\n"+
    "<script type='text/vbscript'>\r\n"+
    "Function IEBinaryToArray_ByteStr(Binary)\r\n"+
    "   IEBinaryToArray_ByteStr = CStr(Binary)\r\n"+
    "End Function\r\n"+
    "Function IEBinaryToArray_ByteStr_Last(Binary)\r\n"+
    "   Dim lastIndex\r\n"+
    "   lastIndex = LenB(Binary)\r\n"+
    "   if lastIndex mod 2 Then\r\n"+
    "       IEBinaryToArray_ByteStr_Last = Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n"+
    "   Else\r\n"+
    "       IEBinaryToArray_ByteStr_Last = "+'""'+"\r\n"+
    "   End If\r\n"+
    "End Function\r\n"+
    "</script>\r\n";

    // inject VBScript
    document.write(IEBinaryToArray_ByteStr_Script);
}

var convertResponseBodyToText = function (binary) {
        var byteMapping = {};
        for ( var i = 0; i < 256; i++ ) {
            for ( var j = 0; j < 256; j++ ) {
                byteMapping[ String.fromCharCode( i + j * 256 ) ] =
                    String.fromCharCode(i) + String.fromCharCode(j);
            }
        }
        var rawBytes = IEBinaryToArray_ByteStr(binary);
        var lastChr = IEBinaryToArray_ByteStr_Last(binary);
        return rawBytes.replace(/[\s\S]/g,
                                function( match ) { return byteMapping[match]; }) + lastChr;
};

// shim.js 
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;
 
    return function (obj) {
      if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');
 
      var result = [];
 
      for (var prop in obj) {
        if (hasOwnProperty.call(obj, prop)) result.push(prop);
      }
 
      if (hasDontEnumBug) {
        for (var i=0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
        }
      }
      return result;
    };
  })();
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
if (!Array.prototype.filter)
{
  Array.prototype.filter = function(fun /*, thisp */)
  {
    "use strict";
 
    if (this == null)
      throw new TypeError();
 
    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun != "function")
      throw new TypeError();
 
    var res = [];
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in t)
      {
        var val = t[i]; // in case fun mutates this
        if (fun.call(thisp, val, i, t))
          res.push(val);
      }
    }
 
    return res;
  };
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
  };
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
if (!Array.prototype.forEach)
{
  Array.prototype.forEach = function(fun /*, thisArg */)
  {
    "use strict";

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function")
      throw new TypeError();

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++)
    {
      if (i in t)
        fun.call(thisArg, t[i], i, t);
    }
  };
}

// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.com/#x15.4.4.19
if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {
 
    var T, A, k;
 
    if (this == null) {
      throw new TypeError(" this is null or not defined");
    }
 
    // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
    var O = Object(this);
 
    // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;
 
    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
 
    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (thisArg) {
      T = thisArg;
    }
 
    // 6. Let A be a new array created as if by the expression new Array(len) where Array is
    // the standard built-in constructor with that name and len is the value of len.
    A = new Array(len);
 
    // 7. Let k be 0
    k = 0;
 
    // 8. Repeat, while k < len
    while(k < len) {
 
      var kValue, mappedValue;
 
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {
 
        // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
        kValue = O[ k ];
 
        // ii. Let mappedValue be the result of calling the Call internal method of callback
        // with T as the this value and argument list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);
 
        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor {Value: mappedValue, : true, Enumerable: true, Configurable: true},
        // and false.
 
        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, Pk, { value: mappedValue, writable: true, enumerable: true, configurable: true });
 
        // For best browser support, use the following:
        A[ k ] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }
 
    // 9. return A
    return A;
  };      
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    if ( this === undefined || this === null ) {
      throw new TypeError( '"this" is null or not defined' );
    }

    var length = this.length >>> 0; // Hack to convert object.length to a UInt32

    fromIndex = +fromIndex || 0;

    if (Math.abs(fromIndex) === Infinity) {
      fromIndex = 0;
    }

    if (fromIndex < 0) {
      fromIndex += length;
      if (fromIndex < 0) {
        fromIndex = 0;
      }
    }

    for (;fromIndex < length; fromIndex++) {
      if (this[fromIndex] === searchElement) {
        return fromIndex;
      }
    }

    return -1;
  };
}
// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

if (! Array.isArray) {
    Array.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    };
}

// https://github.com/ttaubert/node-arraybuffer-slice
// (c) 2013 Tim Taubert <tim@timtaubert.de>
// arraybuffer-slice may be freely distributed under the MIT license.

"use strict";

if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
  ArrayBuffer.prototype.slice = function (begin, end) {
    begin = (begin|0) || 0;
    var num = this.byteLength;
    end = end === (void 0) ? num : (end|0);

    // Handle negative values.
    if (begin < 0) begin += num;
    if (end < 0) end += num;

    if (num === 0 || begin >= num || begin >= end) {
      return new ArrayBuffer(0);
    }

    var length = Math.min(num - begin, end - begin);
    var target = new ArrayBuffer(length);
    var targetArray = new Uint8Array(target);
    targetArray.set(new Uint8Array(this, begin, length));
    return target;
  };
}

//jszip.js

var JSZip = function(data, options) {
    this.files = {};
    this.root = "";
    if (data) {
        this.load(data, options);
    }
};

JSZip.signature = {
    LOCAL_FILE_HEADER: "PK",
    CENTRAL_FILE_HEADER: "PK",
    CENTRAL_DIRECTORY_END: "PK",
    ZIP64_CENTRAL_DIRECTORY_LOCATOR: "PK",
    ZIP64_CENTRAL_DIRECTORY_END: "PK",
    DATA_DESCRIPTOR: "PK\b"
};

JSZip.defaults = {
    base64: false,
    binary: false,
    dir: false,
    date: null
};

JSZip.prototype = function() {
    var ZipObject = function(name, data, options) {
        this.name = name;
        this.data = data;
        this.options = options;
    };
    ZipObject.prototype = {
        asText: function() {
            return this.options.binary ? JSZip.prototype.utf8decode(this.data) : this.data;
        },
        asBinary: function() {
            return this.options.binary ? this.data : JSZip.prototype.utf8encode(this.data);
        }
    };
    var decToHex = function(dec, bytes) {
        var hex = "", i;
        for (i = 0; i < bytes; i++) {
            hex += String.fromCharCode(dec & 255);
            dec = dec >>> 8;
        }
        return hex;
    };
    var extend = function() {
        var result = {}, i, attr;
        for (i = 0; i < arguments.length; i++) {
            for (attr in arguments[i]) {
                if (typeof result[attr] === "undefined") {
                    result[attr] = arguments[i][attr];
                }
            }
        }
        return result;
    };
    var prepareFileAttrs = function(o) {
        o = o || {};
        if (o.base64 === true && o.binary == null) {
            o.binary = true;
        }
        o = extend(o, JSZip.defaults);
        o.date = o.date || new Date();
        return o;
    };
    var fileAdd = function(name, data, o) {
        var parent = parentFolder(name);
        if (parent) {
            folderAdd.call(this, parent);
        }
        o = prepareFileAttrs(o);
        return this.files[name] = {
            name: name,
            data: data,
            options: o
        };
    };
    var parentFolder = function(path) {
        if (path.slice(-1) == "/") {
            path = path.substring(0, path.length - 1);
        }
        var lastSlash = path.lastIndexOf("/");
        return lastSlash > 0 ? path.substring(0, lastSlash) : "";
    };
    var folderAdd = function(name) {
        if (name.slice(-1) != "/") {
            name += "/";
        }
        if (!this.files[name]) {
            var parent = parentFolder(name);
            if (parent) {
                folderAdd.call(this, parent);
            }
            fileAdd.call(this, name, "", {
                dir: true
            });
        }
        return this.files[name];
    };
    var prepareLocalHeaderData = function(file, utfEncodedFileName, compressionType) {
        var useUTF8 = utfEncodedFileName !== file.name, data = file.data, o = file.options, dosTime, dosDate;
        dosTime = o.date.getHours();
        dosTime = dosTime << 6;
        dosTime = dosTime | o.date.getMinutes();
        dosTime = dosTime << 5;
        dosTime = dosTime | o.date.getSeconds() / 2;
        dosDate = o.date.getFullYear() - 1980;
        dosDate = dosDate << 4;
        dosDate = dosDate | o.date.getMonth() + 1;
        dosDate = dosDate << 5;
        dosDate = dosDate | o.date.getDate();
        if (o.base64 === true) {
            data = JSZipBase64.decode(data);
        }
        if (o.binary === false) {
            data = this.utf8encode(data);
        }
        var compression = JSZip.compressions[compressionType];
        var compressedData = compression.compress(data);
        var header = "";
        header += "\n\0";
        header += useUTF8 ? "\0\b" : "\0\0";
        header += compression.magic;
        header += decToHex(dosTime, 2);
        header += decToHex(dosDate, 2);
        header += decToHex(this.crc32(data), 4);
        header += decToHex(compressedData.length, 4);
        header += decToHex(data.length, 4);
        header += decToHex(utfEncodedFileName.length, 2);
        header += "\0\0";
        return {
            header: header,
            compressedData: compressedData
        };
    };
    return {
        load: function(stream, options) {
            throw new Error("Load method is not defined. Is the file jszip-load.js included ?");
        },
        filter: function(search) {
            var result = [], filename, relativePath, file, fileClone;
            for (filename in this.files) {
                file = this.files[filename];
                fileClone = new ZipObject(file.name, file.data, extend(file.options));
                relativePath = filename.slice(this.root.length, filename.length);
                if (filename.slice(0, this.root.length) === this.root && search(relativePath, fileClone)) {
                    result.push(fileClone);
                }
            }
            return result;
        },
        file: function(name, data, o) {
            if (arguments.length === 1) {
                if (name instanceof RegExp) {
                    var regexp = name;
                    return this.filter(function(relativePath, file) {
                        return !file.options.dir && regexp.test(relativePath);
                    });
                } else {
                    return this.filter(function(relativePath, file) {
                        return !file.options.dir && relativePath === name;
                    })[0] || null;
                }
            } else {
                name = this.root + name;
                fileAdd.call(this, name, data, o);
            }
            return this;
        },
        folder: function(arg) {
            if (!arg) {
                throw new Error("folder : wrong argument");
            }
            if (arg instanceof RegExp) {
                return this.filter(function(relativePath, file) {
                    return file.options.dir && arg.test(relativePath);
                });
            }
            var name = this.root + arg;
            var newFolder = folderAdd.call(this, name);
            var ret = this.clone();
            ret.root = newFolder.name;
            return ret;
        },
        remove: function(name) {
            name = this.root + name;
            var file = this.files[name];
            if (!file) {
                if (name.slice(-1) != "/") {
                    name += "/";
                }
                file = this.files[name];
            }
            if (file) {
                if (!file.options.dir) {
                    delete this.files[name];
                } else {
                    var kids = this.filter(function(relativePath, file) {
                        return file.name.slice(0, name.length) === name;
                    });
                    for (var i = 0; i < kids.length; i++) {
                        delete this.files[kids[i].name];
                    }
                }
            }
            return this;
        },
        generate: function(options) {
            options = extend(options || {}, {
                base64: true,
                compression: "STORE"
            });
            var compression = options.compression.toUpperCase();
            var directory = [], files = [], fileOffset = 0;
            if (!JSZip.compressions[compression]) {
                throw compression + " is not a valid compression method !";
            }
            for (var name in this.files) {
                if (!this.files.hasOwnProperty(name)) {
                    continue;
                }
                var file = this.files[name];
                var utfEncodedFileName = this.utf8encode(file.name);
                var fileRecord = "", dirRecord = "", data = prepareLocalHeaderData.call(this, file, utfEncodedFileName, compression);
                fileRecord = JSZip.signature.LOCAL_FILE_HEADER + data.header + utfEncodedFileName + data.compressedData;
                dirRecord = JSZip.signature.CENTRAL_FILE_HEADER + "\0" + data.header + "\0\0" + "\0\0" + "\0\0" + (this.files[name].dir === true ? "\0\0\0" : "\0\0\0\0") + decToHex(fileOffset, 4) + utfEncodedFileName;
                fileOffset += fileRecord.length;
                files.push(fileRecord);
                directory.push(dirRecord);
            }
            var fileData = files.join("");
            var dirData = directory.join("");
            var dirEnd = "";
            dirEnd = JSZip.signature.CENTRAL_DIRECTORY_END + "\0\0" + "\0\0" + decToHex(files.length, 2) + decToHex(files.length, 2) + decToHex(dirData.length, 4) + decToHex(fileData.length, 4) + "\0\0";
            var zip = fileData + dirData + dirEnd;
            return options.base64 ? JSZipBase64.encode(zip) : zip;
        },
        crc32: function(str, crc) {
            if (str === "" || typeof str === "undefined") {
                return 0;
            }
            var table = [ 0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117 ];
            if (typeof crc == "undefined") {
                crc = 0;
            }
            var x = 0;
            var y = 0;
            crc = crc ^ -1;
            for (var i = 0, iTop = str.length; i < iTop; i++) {
                y = (crc ^ str.charCodeAt(i)) & 255;
                x = table[y];
                crc = crc >>> 8 ^ x;
            }
            return crc ^ -1;
        },
        clone: function() {
            var newObj = new JSZip();
            for (var i in this) {
                if (typeof this[i] !== "function") {
                    newObj[i] = this[i];
                }
            }
            return newObj;
        },
        utf8encode: function(string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                } else if (c > 127 && c < 2048) {
                    utftext += String.fromCharCode(c >> 6 | 192);
                    utftext += String.fromCharCode(c & 63 | 128);
                } else {
                    utftext += String.fromCharCode(c >> 12 | 224);
                    utftext += String.fromCharCode(c >> 6 & 63 | 128);
                    utftext += String.fromCharCode(c & 63 | 128);
                }
            }
            return utftext;
        },
        utf8decode: function(utftext) {
            var string = "";
            var i = 0;
            var c = 0, c1 = 0, c2 = 0, c3 = 0;
            while (i < utftext.length) {
                c = utftext.charCodeAt(i);
                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                } else if (c > 191 && c < 224) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode((c & 31) << 6 | c2 & 63);
                    i += 2;
                } else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    i += 3;
                }
            }
            return string;
        }
    };
}();

JSZip.compressions = {
    STORE: {
        magic: "\0\0",
        compress: function(content) {
            return content;
        },
        uncompress: function(content) {
            return content;
        }
    }
};

var JSZipBase64 = function() {
    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    return {
        encode: function(input, utf8) {
            var output = "";
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = (chr1 & 3) << 4 | chr2 >> 4;
                enc3 = (chr2 & 15) << 2 | chr3 >> 6;
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
            }
            return output;
        },
        decode: function(input, utf8) {
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (i < input.length) {
                enc1 = _keyStr.indexOf(input.charAt(i++));
                enc2 = _keyStr.indexOf(input.charAt(i++));
                enc3 = _keyStr.indexOf(input.charAt(i++));
                enc4 = _keyStr.indexOf(input.charAt(i++));
                chr1 = enc1 << 2 | enc2 >> 4;
                chr2 = (enc2 & 15) << 4 | enc3 >> 2;
                chr3 = (enc3 & 3) << 6 | enc4;
                output = output + String.fromCharCode(chr1);
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
            }
            return output;
        }
    };
}();

if (!JSZip) {
    throw "JSZip not defined";
}

(function() {
    var zip_WSIZE = 32768;
    var zip_STORED_BLOCK = 0;
    var zip_STATIC_TREES = 1;
    var zip_DYN_TREES = 2;
    var zip_DEFAULT_LEVEL = 6;
    var zip_FULL_SEARCH = true;
    var zip_INBUFSIZ = 32768;
    var zip_INBUF_EXTRA = 64;
    var zip_OUTBUFSIZ = 1024 * 8;
    var zip_window_size = 2 * zip_WSIZE;
    var zip_MIN_MATCH = 3;
    var zip_MAX_MATCH = 258;
    var zip_BITS = 16;
    var zip_LIT_BUFSIZE = 8192;
    var zip_HASH_BITS = 13;
    if (zip_LIT_BUFSIZE > zip_INBUFSIZ) alert("error: zip_INBUFSIZ is too small");
    if (zip_WSIZE << 1 > 1 << zip_BITS) alert("error: zip_WSIZE is too large");
    if (zip_HASH_BITS > zip_BITS - 1) alert("error: zip_HASH_BITS is too large");
    if (zip_HASH_BITS < 8 || zip_MAX_MATCH != 258) alert("error: Code too clever");
    var zip_DIST_BUFSIZE = zip_LIT_BUFSIZE;
    var zip_HASH_SIZE = 1 << zip_HASH_BITS;
    var zip_HASH_MASK = zip_HASH_SIZE - 1;
    var zip_WMASK = zip_WSIZE - 1;
    var zip_NIL = 0;
    var zip_TOO_FAR = 4096;
    var zip_MIN_LOOKAHEAD = zip_MAX_MATCH + zip_MIN_MATCH + 1;
    var zip_MAX_DIST = zip_WSIZE - zip_MIN_LOOKAHEAD;
    var zip_SMALLEST = 1;
    var zip_MAX_BITS = 15;
    var zip_MAX_BL_BITS = 7;
    var zip_LENGTH_CODES = 29;
    var zip_LITERALS = 256;
    var zip_END_BLOCK = 256;
    var zip_L_CODES = zip_LITERALS + 1 + zip_LENGTH_CODES;
    var zip_D_CODES = 30;
    var zip_BL_CODES = 19;
    var zip_REP_3_6 = 16;
    var zip_REPZ_3_10 = 17;
    var zip_REPZ_11_138 = 18;
    var zip_HEAP_SIZE = 2 * zip_L_CODES + 1;
    var zip_H_SHIFT = parseInt((zip_HASH_BITS + zip_MIN_MATCH - 1) / zip_MIN_MATCH);
    var zip_free_queue;
    var zip_qhead, zip_qtail;
    var zip_initflag;
    var zip_outbuf = null;
    var zip_outcnt, zip_outoff;
    var zip_complete;
    var zip_window;
    var zip_d_buf;
    var zip_l_buf;
    var zip_prev;
    var zip_bi_buf;
    var zip_bi_valid;
    var zip_block_start;
    var zip_ins_h;
    var zip_hash_head;
    var zip_prev_match;
    var zip_match_available;
    var zip_match_length;
    var zip_prev_length;
    var zip_strstart;
    var zip_match_start;
    var zip_eofile;
    var zip_lookahead;
    var zip_max_chain_length;
    var zip_max_lazy_match;
    var zip_compr_level;
    var zip_good_match;
    var zip_nice_match;
    var zip_dyn_ltree;
    var zip_dyn_dtree;
    var zip_static_ltree;
    var zip_static_dtree;
    var zip_bl_tree;
    var zip_l_desc;
    var zip_d_desc;
    var zip_bl_desc;
    var zip_bl_count;
    var zip_heap;
    var zip_heap_len;
    var zip_heap_max;
    var zip_depth;
    var zip_length_code;
    var zip_dist_code;
    var zip_base_length;
    var zip_base_dist;
    var zip_flag_buf;
    var zip_last_lit;
    var zip_last_dist;
    var zip_last_flags;
    var zip_flags;
    var zip_flag_bit;
    var zip_opt_len;
    var zip_static_len;
    var zip_deflate_data;
    var zip_deflate_pos;
    var zip_DeflateCT = function() {
        this.fc = 0;
        this.dl = 0;
    };
    var zip_DeflateTreeDesc = function() {
        this.dyn_tree = null;
        this.static_tree = null;
        this.extra_bits = null;
        this.extra_base = 0;
        this.elems = 0;
        this.max_length = 0;
        this.max_code = 0;
    };
    var zip_DeflateConfiguration = function(a, b, c, d) {
        this.good_length = a;
        this.max_lazy = b;
        this.nice_length = c;
        this.max_chain = d;
    };
    var zip_DeflateBuffer = function() {
        this.next = null;
        this.len = 0;
        this.ptr = new Array(zip_OUTBUFSIZ);
        this.off = 0;
    };
    var zip_extra_lbits = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0);
    var zip_extra_dbits = new Array(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13);
    var zip_extra_blbits = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7);
    var zip_bl_order = new Array(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15);
    var zip_configuration_table = new Array(new zip_DeflateConfiguration(0, 0, 0, 0), new zip_DeflateConfiguration(4, 4, 8, 4), new zip_DeflateConfiguration(4, 5, 16, 8), new zip_DeflateConfiguration(4, 6, 32, 32), new zip_DeflateConfiguration(4, 4, 16, 16), new zip_DeflateConfiguration(8, 16, 32, 32), new zip_DeflateConfiguration(8, 16, 128, 128), new zip_DeflateConfiguration(8, 32, 128, 256), new zip_DeflateConfiguration(32, 128, 258, 1024), new zip_DeflateConfiguration(32, 258, 258, 4096));
    var zip_deflate_start = function(level) {
        var i;
        if (!level) level = zip_DEFAULT_LEVEL; else if (level < 1) level = 1; else if (level > 9) level = 9;
        zip_compr_level = level;
        zip_initflag = false;
        zip_eofile = false;
        if (zip_outbuf != null) return;
        zip_free_queue = zip_qhead = zip_qtail = null;
        zip_outbuf = new Array(zip_OUTBUFSIZ);
        zip_window = new Array(zip_window_size);
        zip_d_buf = new Array(zip_DIST_BUFSIZE);
        zip_l_buf = new Array(zip_INBUFSIZ + zip_INBUF_EXTRA);
        zip_prev = new Array(1 << zip_BITS);
        zip_dyn_ltree = new Array(zip_HEAP_SIZE);
        for (i = 0; i < zip_HEAP_SIZE; i++) zip_dyn_ltree[i] = new zip_DeflateCT();
        zip_dyn_dtree = new Array(2 * zip_D_CODES + 1);
        for (i = 0; i < 2 * zip_D_CODES + 1; i++) zip_dyn_dtree[i] = new zip_DeflateCT();
        zip_static_ltree = new Array(zip_L_CODES + 2);
        for (i = 0; i < zip_L_CODES + 2; i++) zip_static_ltree[i] = new zip_DeflateCT();
        zip_static_dtree = new Array(zip_D_CODES);
        for (i = 0; i < zip_D_CODES; i++) zip_static_dtree[i] = new zip_DeflateCT();
        zip_bl_tree = new Array(2 * zip_BL_CODES + 1);
        for (i = 0; i < 2 * zip_BL_CODES + 1; i++) zip_bl_tree[i] = new zip_DeflateCT();
        zip_l_desc = new zip_DeflateTreeDesc();
        zip_d_desc = new zip_DeflateTreeDesc();
        zip_bl_desc = new zip_DeflateTreeDesc();
        zip_bl_count = new Array(zip_MAX_BITS + 1);
        zip_heap = new Array(2 * zip_L_CODES + 1);
        zip_depth = new Array(2 * zip_L_CODES + 1);
        zip_length_code = new Array(zip_MAX_MATCH - zip_MIN_MATCH + 1);
        zip_dist_code = new Array(512);
        zip_base_length = new Array(zip_LENGTH_CODES);
        zip_base_dist = new Array(zip_D_CODES);
        zip_flag_buf = new Array(parseInt(zip_LIT_BUFSIZE / 8));
    };
    var zip_deflate_end = function() {
        zip_free_queue = zip_qhead = zip_qtail = null;
        zip_outbuf = null;
        zip_window = null;
        zip_d_buf = null;
        zip_l_buf = null;
        zip_prev = null;
        zip_dyn_ltree = null;
        zip_dyn_dtree = null;
        zip_static_ltree = null;
        zip_static_dtree = null;
        zip_bl_tree = null;
        zip_l_desc = null;
        zip_d_desc = null;
        zip_bl_desc = null;
        zip_bl_count = null;
        zip_heap = null;
        zip_depth = null;
        zip_length_code = null;
        zip_dist_code = null;
        zip_base_length = null;
        zip_base_dist = null;
        zip_flag_buf = null;
    };
    var zip_reuse_queue = function(p) {
        p.next = zip_free_queue;
        zip_free_queue = p;
    };
    var zip_new_queue = function() {
        var p;
        if (zip_free_queue != null) {
            p = zip_free_queue;
            zip_free_queue = zip_free_queue.next;
        } else p = new zip_DeflateBuffer();
        p.next = null;
        p.len = p.off = 0;
        return p;
    };
    var zip_head1 = function(i) {
        return zip_prev[zip_WSIZE + i];
    };
    var zip_head2 = function(i, val) {
        return zip_prev[zip_WSIZE + i] = val;
    };
    var zip_put_byte = function(c) {
        zip_outbuf[zip_outoff + zip_outcnt++] = c;
        if (zip_outoff + zip_outcnt == zip_OUTBUFSIZ) zip_qoutbuf();
    };
    var zip_put_short = function(w) {
        w &= 65535;
        if (zip_outoff + zip_outcnt < zip_OUTBUFSIZ - 2) {
            zip_outbuf[zip_outoff + zip_outcnt++] = w & 255;
            zip_outbuf[zip_outoff + zip_outcnt++] = w >>> 8;
        } else {
            zip_put_byte(w & 255);
            zip_put_byte(w >>> 8);
        }
    };
    var zip_INSERT_STRING = function() {
        zip_ins_h = (zip_ins_h << zip_H_SHIFT ^ zip_window[zip_strstart + zip_MIN_MATCH - 1] & 255) & zip_HASH_MASK;
        zip_hash_head = zip_head1(zip_ins_h);
        zip_prev[zip_strstart & zip_WMASK] = zip_hash_head;
        zip_head2(zip_ins_h, zip_strstart);
    };
    var zip_SEND_CODE = function(c, tree) {
        zip_send_bits(tree[c].fc, tree[c].dl);
    };
    var zip_D_CODE = function(dist) {
        return (dist < 256 ? zip_dist_code[dist] : zip_dist_code[256 + (dist >> 7)]) & 255;
    };
    var zip_SMALLER = function(tree, n, m) {
        return tree[n].fc < tree[m].fc || tree[n].fc == tree[m].fc && zip_depth[n] <= zip_depth[m];
    };
    var zip_read_buff = function(buff, offset, n) {
        var i;
        for (i = 0; i < n && zip_deflate_pos < zip_deflate_data.length; i++) buff[offset + i] = zip_deflate_data.charCodeAt(zip_deflate_pos++) & 255;
        return i;
    };
    var zip_lm_init = function() {
        var j;
        for (j = 0; j < zip_HASH_SIZE; j++) zip_prev[zip_WSIZE + j] = 0;
        zip_max_lazy_match = zip_configuration_table[zip_compr_level].max_lazy;
        zip_good_match = zip_configuration_table[zip_compr_level].good_length;
        if (!zip_FULL_SEARCH) zip_nice_match = zip_configuration_table[zip_compr_level].nice_length;
        zip_max_chain_length = zip_configuration_table[zip_compr_level].max_chain;
        zip_strstart = 0;
        zip_block_start = 0;
        zip_lookahead = zip_read_buff(zip_window, 0, 2 * zip_WSIZE);
        if (zip_lookahead <= 0) {
            zip_eofile = true;
            zip_lookahead = 0;
            return;
        }
        zip_eofile = false;
        while (zip_lookahead < zip_MIN_LOOKAHEAD && !zip_eofile) zip_fill_window();
        zip_ins_h = 0;
        for (j = 0; j < zip_MIN_MATCH - 1; j++) {
            zip_ins_h = (zip_ins_h << zip_H_SHIFT ^ zip_window[j] & 255) & zip_HASH_MASK;
        }
    };
    var zip_longest_match = function(cur_match) {
        var chain_length = zip_max_chain_length;
        var scanp = zip_strstart;
        var matchp;
        var len;
        var best_len = zip_prev_length;
        var limit = zip_strstart > zip_MAX_DIST ? zip_strstart - zip_MAX_DIST : zip_NIL;
        var strendp = zip_strstart + zip_MAX_MATCH;
        var scan_end1 = zip_window[scanp + best_len - 1];
        var scan_end = zip_window[scanp + best_len];
        if (zip_prev_length >= zip_good_match) chain_length >>= 2;
        do {
            matchp = cur_match;
            if (zip_window[matchp + best_len] != scan_end || zip_window[matchp + best_len - 1] != scan_end1 || zip_window[matchp] != zip_window[scanp] || zip_window[++matchp] != zip_window[scanp + 1]) {
                continue;
            }
            scanp += 2;
            matchp++;
            do {} while (zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && scanp < strendp);
            len = zip_MAX_MATCH - (strendp - scanp);
            scanp = strendp - zip_MAX_MATCH;
            if (len > best_len) {
                zip_match_start = cur_match;
                best_len = len;
                if (zip_FULL_SEARCH) {
                    if (len >= zip_MAX_MATCH) break;
                } else {
                    if (len >= zip_nice_match) break;
                }
                scan_end1 = zip_window[scanp + best_len - 1];
                scan_end = zip_window[scanp + best_len];
            }
        } while ((cur_match = zip_prev[cur_match & zip_WMASK]) > limit && --chain_length != 0);
        return best_len;
    };
    var zip_fill_window = function() {
        var n, m;
        var more = zip_window_size - zip_lookahead - zip_strstart;
        if (more == -1) {
            more--;
        } else if (zip_strstart >= zip_WSIZE + zip_MAX_DIST) {
            for (n = 0; n < zip_WSIZE; n++) zip_window[n] = zip_window[n + zip_WSIZE];
            zip_match_start -= zip_WSIZE;
            zip_strstart -= zip_WSIZE;
            zip_block_start -= zip_WSIZE;
            for (n = 0; n < zip_HASH_SIZE; n++) {
                m = zip_head1(n);
                zip_head2(n, m >= zip_WSIZE ? m - zip_WSIZE : zip_NIL);
            }
            for (n = 0; n < zip_WSIZE; n++) {
                m = zip_prev[n];
                zip_prev[n] = m >= zip_WSIZE ? m - zip_WSIZE : zip_NIL;
            }
            more += zip_WSIZE;
        }
        if (!zip_eofile) {
            n = zip_read_buff(zip_window, zip_strstart + zip_lookahead, more);
            if (n <= 0) zip_eofile = true; else zip_lookahead += n;
        }
    };
    var zip_deflate_fast = function() {
        while (zip_lookahead != 0 && zip_qhead == null) {
            var flush;
            zip_INSERT_STRING();
            if (zip_hash_head != zip_NIL && zip_strstart - zip_hash_head <= zip_MAX_DIST) {
                zip_match_length = zip_longest_match(zip_hash_head);
                if (zip_match_length > zip_lookahead) zip_match_length = zip_lookahead;
            }
            if (zip_match_length >= zip_MIN_MATCH) {
                flush = zip_ct_tally(zip_strstart - zip_match_start, zip_match_length - zip_MIN_MATCH);
                zip_lookahead -= zip_match_length;
                if (zip_match_length <= zip_max_lazy_match) {
                    zip_match_length--;
                    do {
                        zip_strstart++;
                        zip_INSERT_STRING();
                    } while (--zip_match_length != 0);
                    zip_strstart++;
                } else {
                    zip_strstart += zip_match_length;
                    zip_match_length = 0;
                    zip_ins_h = zip_window[zip_strstart] & 255;
                    zip_ins_h = (zip_ins_h << zip_H_SHIFT ^ zip_window[zip_strstart + 1] & 255) & zip_HASH_MASK;
                }
            } else {
                flush = zip_ct_tally(0, zip_window[zip_strstart] & 255);
                zip_lookahead--;
                zip_strstart++;
            }
            if (flush) {
                zip_flush_block(0);
                zip_block_start = zip_strstart;
            }
            while (zip_lookahead < zip_MIN_LOOKAHEAD && !zip_eofile) zip_fill_window();
        }
    };
    var zip_deflate_better = function() {
        while (zip_lookahead != 0 && zip_qhead == null) {
            zip_INSERT_STRING();
            zip_prev_length = zip_match_length;
            zip_prev_match = zip_match_start;
            zip_match_length = zip_MIN_MATCH - 1;
            if (zip_hash_head != zip_NIL && zip_prev_length < zip_max_lazy_match && zip_strstart - zip_hash_head <= zip_MAX_DIST) {
                zip_match_length = zip_longest_match(zip_hash_head);
                if (zip_match_length > zip_lookahead) zip_match_length = zip_lookahead;
                if (zip_match_length == zip_MIN_MATCH && zip_strstart - zip_match_start > zip_TOO_FAR) {
                    zip_match_length--;
                }
            }
            if (zip_prev_length >= zip_MIN_MATCH && zip_match_length <= zip_prev_length) {
                var flush;
                flush = zip_ct_tally(zip_strstart - 1 - zip_prev_match, zip_prev_length - zip_MIN_MATCH);
                zip_lookahead -= zip_prev_length - 1;
                zip_prev_length -= 2;
                do {
                    zip_strstart++;
                    zip_INSERT_STRING();
                } while (--zip_prev_length != 0);
                zip_match_available = 0;
                zip_match_length = zip_MIN_MATCH - 1;
                zip_strstart++;
                if (flush) {
                    zip_flush_block(0);
                    zip_block_start = zip_strstart;
                }
            } else if (zip_match_available != 0) {
                if (zip_ct_tally(0, zip_window[zip_strstart - 1] & 255)) {
                    zip_flush_block(0);
                    zip_block_start = zip_strstart;
                }
                zip_strstart++;
                zip_lookahead--;
            } else {
                zip_match_available = 1;
                zip_strstart++;
                zip_lookahead--;
            }
            while (zip_lookahead < zip_MIN_LOOKAHEAD && !zip_eofile) zip_fill_window();
        }
    };
    var zip_init_deflate = function() {
        if (zip_eofile) return;
        zip_bi_buf = 0;
        zip_bi_valid = 0;
        zip_ct_init();
        zip_lm_init();
        zip_qhead = null;
        zip_outcnt = 0;
        zip_outoff = 0;
        if (zip_compr_level <= 3) {
            zip_prev_length = zip_MIN_MATCH - 1;
            zip_match_length = 0;
        } else {
            zip_match_length = zip_MIN_MATCH - 1;
            zip_match_available = 0;
        }
        zip_complete = false;
    };
    var zip_deflate_internal = function(buff, off, buff_size) {
        var n;
        if (!zip_initflag) {
            zip_init_deflate();
            zip_initflag = true;
            if (zip_lookahead == 0) {
                zip_complete = true;
                return 0;
            }
        }
        if ((n = zip_qcopy(buff, off, buff_size)) == buff_size) return buff_size;
        if (zip_complete) return n;
        if (zip_compr_level <= 3) zip_deflate_fast(); else zip_deflate_better();
        if (zip_lookahead == 0) {
            if (zip_match_available != 0) zip_ct_tally(0, zip_window[zip_strstart - 1] & 255);
            zip_flush_block(1);
            zip_complete = true;
        }
        return n + zip_qcopy(buff, n + off, buff_size - n);
    };
    var zip_qcopy = function(buff, off, buff_size) {
        var n, i, j;
        n = 0;
        while (zip_qhead != null && n < buff_size) {
            i = buff_size - n;
            if (i > zip_qhead.len) i = zip_qhead.len;
            for (j = 0; j < i; j++) buff[off + n + j] = zip_qhead.ptr[zip_qhead.off + j];
            zip_qhead.off += i;
            zip_qhead.len -= i;
            n += i;
            if (zip_qhead.len == 0) {
                var p;
                p = zip_qhead;
                zip_qhead = zip_qhead.next;
                zip_reuse_queue(p);
            }
        }
        if (n == buff_size) return n;
        if (zip_outoff < zip_outcnt) {
            i = buff_size - n;
            if (i > zip_outcnt - zip_outoff) i = zip_outcnt - zip_outoff;
            for (j = 0; j < i; j++) buff[off + n + j] = zip_outbuf[zip_outoff + j];
            zip_outoff += i;
            n += i;
            if (zip_outcnt == zip_outoff) zip_outcnt = zip_outoff = 0;
        }
        return n;
    };
    var zip_ct_init = function() {
        var n;
        var bits;
        var length;
        var code;
        var dist;
        if (zip_static_dtree[0].dl != 0) return;
        zip_l_desc.dyn_tree = zip_dyn_ltree;
        zip_l_desc.static_tree = zip_static_ltree;
        zip_l_desc.extra_bits = zip_extra_lbits;
        zip_l_desc.extra_base = zip_LITERALS + 1;
        zip_l_desc.elems = zip_L_CODES;
        zip_l_desc.max_length = zip_MAX_BITS;
        zip_l_desc.max_code = 0;
        zip_d_desc.dyn_tree = zip_dyn_dtree;
        zip_d_desc.static_tree = zip_static_dtree;
        zip_d_desc.extra_bits = zip_extra_dbits;
        zip_d_desc.extra_base = 0;
        zip_d_desc.elems = zip_D_CODES;
        zip_d_desc.max_length = zip_MAX_BITS;
        zip_d_desc.max_code = 0;
        zip_bl_desc.dyn_tree = zip_bl_tree;
        zip_bl_desc.static_tree = null;
        zip_bl_desc.extra_bits = zip_extra_blbits;
        zip_bl_desc.extra_base = 0;
        zip_bl_desc.elems = zip_BL_CODES;
        zip_bl_desc.max_length = zip_MAX_BL_BITS;
        zip_bl_desc.max_code = 0;
        length = 0;
        for (code = 0; code < zip_LENGTH_CODES - 1; code++) {
            zip_base_length[code] = length;
            for (n = 0; n < 1 << zip_extra_lbits[code]; n++) zip_length_code[length++] = code;
        }
        zip_length_code[length - 1] = code;
        dist = 0;
        for (code = 0; code < 16; code++) {
            zip_base_dist[code] = dist;
            for (n = 0; n < 1 << zip_extra_dbits[code]; n++) {
                zip_dist_code[dist++] = code;
            }
        }
        dist >>= 7;
        for (;code < zip_D_CODES; code++) {
            zip_base_dist[code] = dist << 7;
            for (n = 0; n < 1 << zip_extra_dbits[code] - 7; n++) zip_dist_code[256 + dist++] = code;
        }
        for (bits = 0; bits <= zip_MAX_BITS; bits++) zip_bl_count[bits] = 0;
        n = 0;
        while (n <= 143) {
            zip_static_ltree[n++].dl = 8;
            zip_bl_count[8]++;
        }
        while (n <= 255) {
            zip_static_ltree[n++].dl = 9;
            zip_bl_count[9]++;
        }
        while (n <= 279) {
            zip_static_ltree[n++].dl = 7;
            zip_bl_count[7]++;
        }
        while (n <= 287) {
            zip_static_ltree[n++].dl = 8;
            zip_bl_count[8]++;
        }
        zip_gen_codes(zip_static_ltree, zip_L_CODES + 1);
        for (n = 0; n < zip_D_CODES; n++) {
            zip_static_dtree[n].dl = 5;
            zip_static_dtree[n].fc = zip_bi_reverse(n, 5);
        }
        zip_init_block();
    };
    var zip_init_block = function() {
        var n;
        for (n = 0; n < zip_L_CODES; n++) zip_dyn_ltree[n].fc = 0;
        for (n = 0; n < zip_D_CODES; n++) zip_dyn_dtree[n].fc = 0;
        for (n = 0; n < zip_BL_CODES; n++) zip_bl_tree[n].fc = 0;
        zip_dyn_ltree[zip_END_BLOCK].fc = 1;
        zip_opt_len = zip_static_len = 0;
        zip_last_lit = zip_last_dist = zip_last_flags = 0;
        zip_flags = 0;
        zip_flag_bit = 1;
    };
    var zip_pqdownheap = function(tree, k) {
        var v = zip_heap[k];
        var j = k << 1;
        while (j <= zip_heap_len) {
            if (j < zip_heap_len && zip_SMALLER(tree, zip_heap[j + 1], zip_heap[j])) j++;
            if (zip_SMALLER(tree, v, zip_heap[j])) break;
            zip_heap[k] = zip_heap[j];
            k = j;
            j <<= 1;
        }
        zip_heap[k] = v;
    };
    var zip_gen_bitlen = function(desc) {
        var tree = desc.dyn_tree;
        var extra = desc.extra_bits;
        var base = desc.extra_base;
        var max_code = desc.max_code;
        var max_length = desc.max_length;
        var stree = desc.static_tree;
        var h;
        var n, m;
        var bits;
        var xbits;
        var f;
        var overflow = 0;
        for (bits = 0; bits <= zip_MAX_BITS; bits++) zip_bl_count[bits] = 0;
        tree[zip_heap[zip_heap_max]].dl = 0;
        for (h = zip_heap_max + 1; h < zip_HEAP_SIZE; h++) {
            n = zip_heap[h];
            bits = tree[tree[n].dl].dl + 1;
            if (bits > max_length) {
                bits = max_length;
                overflow++;
            }
            tree[n].dl = bits;
            if (n > max_code) continue;
            zip_bl_count[bits]++;
            xbits = 0;
            if (n >= base) xbits = extra[n - base];
            f = tree[n].fc;
            zip_opt_len += f * (bits + xbits);
            if (stree != null) zip_static_len += f * (stree[n].dl + xbits);
        }
        if (overflow == 0) return;
        do {
            bits = max_length - 1;
            while (zip_bl_count[bits] == 0) bits--;
            zip_bl_count[bits]--;
            zip_bl_count[bits + 1] += 2;
            zip_bl_count[max_length]--;
            overflow -= 2;
        } while (overflow > 0);
        for (bits = max_length; bits != 0; bits--) {
            n = zip_bl_count[bits];
            while (n != 0) {
                m = zip_heap[--h];
                if (m > max_code) continue;
                if (tree[m].dl != bits) {
                    zip_opt_len += (bits - tree[m].dl) * tree[m].fc;
                    tree[m].fc = bits;
                }
                n--;
            }
        }
    };
    var zip_gen_codes = function(tree, max_code) {
        var next_code = new Array(zip_MAX_BITS + 1);
        var code = 0;
        var bits;
        var n;
        for (bits = 1; bits <= zip_MAX_BITS; bits++) {
            code = code + zip_bl_count[bits - 1] << 1;
            next_code[bits] = code;
        }
        for (n = 0; n <= max_code; n++) {
            var len = tree[n].dl;
            if (len == 0) continue;
            tree[n].fc = zip_bi_reverse(next_code[len]++, len);
        }
    };
    var zip_build_tree = function(desc) {
        var tree = desc.dyn_tree;
        var stree = desc.static_tree;
        var elems = desc.elems;
        var n, m;
        var max_code = -1;
        var node = elems;
        zip_heap_len = 0;
        zip_heap_max = zip_HEAP_SIZE;
        for (n = 0; n < elems; n++) {
            if (tree[n].fc != 0) {
                zip_heap[++zip_heap_len] = max_code = n;
                zip_depth[n] = 0;
            } else tree[n].dl = 0;
        }
        while (zip_heap_len < 2) {
            var xnew = zip_heap[++zip_heap_len] = max_code < 2 ? ++max_code : 0;
            tree[xnew].fc = 1;
            zip_depth[xnew] = 0;
            zip_opt_len--;
            if (stree != null) zip_static_len -= stree[xnew].dl;
        }
        desc.max_code = max_code;
        for (n = zip_heap_len >> 1; n >= 1; n--) zip_pqdownheap(tree, n);
        do {
            n = zip_heap[zip_SMALLEST];
            zip_heap[zip_SMALLEST] = zip_heap[zip_heap_len--];
            zip_pqdownheap(tree, zip_SMALLEST);
            m = zip_heap[zip_SMALLEST];
            zip_heap[--zip_heap_max] = n;
            zip_heap[--zip_heap_max] = m;
            tree[node].fc = tree[n].fc + tree[m].fc;
            if (zip_depth[n] > zip_depth[m] + 1) zip_depth[node] = zip_depth[n]; else zip_depth[node] = zip_depth[m] + 1;
            tree[n].dl = tree[m].dl = node;
            zip_heap[zip_SMALLEST] = node++;
            zip_pqdownheap(tree, zip_SMALLEST);
        } while (zip_heap_len >= 2);
        zip_heap[--zip_heap_max] = zip_heap[zip_SMALLEST];
        zip_gen_bitlen(desc);
        zip_gen_codes(tree, max_code);
    };
    var zip_scan_tree = function(tree, max_code) {
        var n;
        var prevlen = -1;
        var curlen;
        var nextlen = tree[0].dl;
        var count = 0;
        var max_count = 7;
        var min_count = 4;
        if (nextlen == 0) {
            max_count = 138;
            min_count = 3;
        }
        tree[max_code + 1].dl = 65535;
        for (n = 0; n <= max_code; n++) {
            curlen = nextlen;
            nextlen = tree[n + 1].dl;
            if (++count < max_count && curlen == nextlen) continue; else if (count < min_count) zip_bl_tree[curlen].fc += count; else if (curlen != 0) {
                if (curlen != prevlen) zip_bl_tree[curlen].fc++;
                zip_bl_tree[zip_REP_3_6].fc++;
            } else if (count <= 10) zip_bl_tree[zip_REPZ_3_10].fc++; else zip_bl_tree[zip_REPZ_11_138].fc++;
            count = 0;
            prevlen = curlen;
            if (nextlen == 0) {
                max_count = 138;
                min_count = 3;
            } else if (curlen == nextlen) {
                max_count = 6;
                min_count = 3;
            } else {
                max_count = 7;
                min_count = 4;
            }
        }
    };
    var zip_send_tree = function(tree, max_code) {
        var n;
        var prevlen = -1;
        var curlen;
        var nextlen = tree[0].dl;
        var count = 0;
        var max_count = 7;
        var min_count = 4;
        if (nextlen == 0) {
            max_count = 138;
            min_count = 3;
        }
        for (n = 0; n <= max_code; n++) {
            curlen = nextlen;
            nextlen = tree[n + 1].dl;
            if (++count < max_count && curlen == nextlen) {
                continue;
            } else if (count < min_count) {
                do {
                    zip_SEND_CODE(curlen, zip_bl_tree);
                } while (--count != 0);
            } else if (curlen != 0) {
                if (curlen != prevlen) {
                    zip_SEND_CODE(curlen, zip_bl_tree);
                    count--;
                }
                zip_SEND_CODE(zip_REP_3_6, zip_bl_tree);
                zip_send_bits(count - 3, 2);
            } else if (count <= 10) {
                zip_SEND_CODE(zip_REPZ_3_10, zip_bl_tree);
                zip_send_bits(count - 3, 3);
            } else {
                zip_SEND_CODE(zip_REPZ_11_138, zip_bl_tree);
                zip_send_bits(count - 11, 7);
            }
            count = 0;
            prevlen = curlen;
            if (nextlen == 0) {
                max_count = 138;
                min_count = 3;
            } else if (curlen == nextlen) {
                max_count = 6;
                min_count = 3;
            } else {
                max_count = 7;
                min_count = 4;
            }
        }
    };
    var zip_build_bl_tree = function() {
        var max_blindex;
        zip_scan_tree(zip_dyn_ltree, zip_l_desc.max_code);
        zip_scan_tree(zip_dyn_dtree, zip_d_desc.max_code);
        zip_build_tree(zip_bl_desc);
        for (max_blindex = zip_BL_CODES - 1; max_blindex >= 3; max_blindex--) {
            if (zip_bl_tree[zip_bl_order[max_blindex]].dl != 0) break;
        }
        zip_opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
        return max_blindex;
    };
    var zip_send_all_trees = function(lcodes, dcodes, blcodes) {
        var rank;
        zip_send_bits(lcodes - 257, 5);
        zip_send_bits(dcodes - 1, 5);
        zip_send_bits(blcodes - 4, 4);
        for (rank = 0; rank < blcodes; rank++) {
            zip_send_bits(zip_bl_tree[zip_bl_order[rank]].dl, 3);
        }
        zip_send_tree(zip_dyn_ltree, lcodes - 1);
        zip_send_tree(zip_dyn_dtree, dcodes - 1);
    };
    var zip_flush_block = function(eof) {
        var opt_lenb, static_lenb;
        var max_blindex;
        var stored_len;
        stored_len = zip_strstart - zip_block_start;
        zip_flag_buf[zip_last_flags] = zip_flags;
        zip_build_tree(zip_l_desc);
        zip_build_tree(zip_d_desc);
        max_blindex = zip_build_bl_tree();
        opt_lenb = zip_opt_len + 3 + 7 >> 3;
        static_lenb = zip_static_len + 3 + 7 >> 3;
        if (static_lenb <= opt_lenb) opt_lenb = static_lenb;
        if (stored_len + 4 <= opt_lenb && zip_block_start >= 0) {
            var i;
            zip_send_bits((zip_STORED_BLOCK << 1) + eof, 3);
            zip_bi_windup();
            zip_put_short(stored_len);
            zip_put_short(~stored_len);
            for (i = 0; i < stored_len; i++) zip_put_byte(zip_window[zip_block_start + i]);
        } else if (static_lenb == opt_lenb) {
            zip_send_bits((zip_STATIC_TREES << 1) + eof, 3);
            zip_compress_block(zip_static_ltree, zip_static_dtree);
        } else {
            zip_send_bits((zip_DYN_TREES << 1) + eof, 3);
            zip_send_all_trees(zip_l_desc.max_code + 1, zip_d_desc.max_code + 1, max_blindex + 1);
            zip_compress_block(zip_dyn_ltree, zip_dyn_dtree);
        }
        zip_init_block();
        if (eof != 0) zip_bi_windup();
    };
    var zip_ct_tally = function(dist, lc) {
        zip_l_buf[zip_last_lit++] = lc;
        if (dist == 0) {
            zip_dyn_ltree[lc].fc++;
        } else {
            dist--;
            zip_dyn_ltree[zip_length_code[lc] + zip_LITERALS + 1].fc++;
            zip_dyn_dtree[zip_D_CODE(dist)].fc++;
            zip_d_buf[zip_last_dist++] = dist;
            zip_flags |= zip_flag_bit;
        }
        zip_flag_bit <<= 1;
        if ((zip_last_lit & 7) == 0) {
            zip_flag_buf[zip_last_flags++] = zip_flags;
            zip_flags = 0;
            zip_flag_bit = 1;
        }
        if (zip_compr_level > 2 && (zip_last_lit & 4095) == 0) {
            var out_length = zip_last_lit * 8;
            var in_length = zip_strstart - zip_block_start;
            var dcode;
            for (dcode = 0; dcode < zip_D_CODES; dcode++) {
                out_length += zip_dyn_dtree[dcode].fc * (5 + zip_extra_dbits[dcode]);
            }
            out_length >>= 3;
            if (zip_last_dist < parseInt(zip_last_lit / 2) && out_length < parseInt(in_length / 2)) return true;
        }
        return zip_last_lit == zip_LIT_BUFSIZE - 1 || zip_last_dist == zip_DIST_BUFSIZE;
    };
    var zip_compress_block = function(ltree, dtree) {
        var dist;
        var lc;
        var lx = 0;
        var dx = 0;
        var fx = 0;
        var flag = 0;
        var code;
        var extra;
        if (zip_last_lit != 0) do {
            if ((lx & 7) == 0) flag = zip_flag_buf[fx++];
            lc = zip_l_buf[lx++] & 255;
            if ((flag & 1) == 0) {
                zip_SEND_CODE(lc, ltree);
            } else {
                code = zip_length_code[lc];
                zip_SEND_CODE(code + zip_LITERALS + 1, ltree);
                extra = zip_extra_lbits[code];
                if (extra != 0) {
                    lc -= zip_base_length[code];
                    zip_send_bits(lc, extra);
                }
                dist = zip_d_buf[dx++];
                code = zip_D_CODE(dist);
                zip_SEND_CODE(code, dtree);
                extra = zip_extra_dbits[code];
                if (extra != 0) {
                    dist -= zip_base_dist[code];
                    zip_send_bits(dist, extra);
                }
            }
            flag >>= 1;
        } while (lx < zip_last_lit);
        zip_SEND_CODE(zip_END_BLOCK, ltree);
    };
    var zip_Buf_size = 16;
    var zip_send_bits = function(value, length) {
        if (zip_bi_valid > zip_Buf_size - length) {
            zip_bi_buf |= value << zip_bi_valid;
            zip_put_short(zip_bi_buf);
            zip_bi_buf = value >> zip_Buf_size - zip_bi_valid;
            zip_bi_valid += length - zip_Buf_size;
        } else {
            zip_bi_buf |= value << zip_bi_valid;
            zip_bi_valid += length;
        }
    };
    var zip_bi_reverse = function(code, len) {
        var res = 0;
        do {
            res |= code & 1;
            code >>= 1;
            res <<= 1;
        } while (--len > 0);
        return res >> 1;
    };
    var zip_bi_windup = function() {
        if (zip_bi_valid > 8) {
            zip_put_short(zip_bi_buf);
        } else if (zip_bi_valid > 0) {
            zip_put_byte(zip_bi_buf);
        }
        zip_bi_buf = 0;
        zip_bi_valid = 0;
    };
    var zip_qoutbuf = function() {
        if (zip_outcnt != 0) {
            var q, i;
            q = zip_new_queue();
            if (zip_qhead == null) zip_qhead = zip_qtail = q; else zip_qtail = zip_qtail.next = q;
            q.len = zip_outcnt - zip_outoff;
            for (i = 0; i < q.len; i++) q.ptr[i] = zip_outbuf[zip_outoff + i];
            zip_outcnt = zip_outoff = 0;
        }
    };
    var zip_deflate = function(str, level) {
        var i, j;
        zip_deflate_data = str;
        zip_deflate_pos = 0;
        if (typeof level == "undefined") level = zip_DEFAULT_LEVEL;
        zip_deflate_start(level);
        var buff = new Array(1024);
        var aout = [];
        while ((i = zip_deflate_internal(buff, 0, buff.length)) > 0) {
            var cbuf = new Array(i);
            for (j = 0; j < i; j++) {
                cbuf[j] = String.fromCharCode(buff[j]);
            }
            aout[aout.length] = cbuf.join("");
        }
        zip_deflate_data = null;
        return aout.join("");
    };
    if (!JSZip.compressions["DEFLATE"]) {
        JSZip.compressions["DEFLATE"] = {
            magic: "\b\0",
            compress: zip_deflate
        };
    } else {
        JSZip.compressions["DEFLATE"].compress = zip_deflate;
    }
})();

if (!JSZip) {
    throw "JSZip not defined";
}

(function() {
    var zip_fixed_bd;
    var zip_WSIZE = 32768;
    var zip_STORED_BLOCK = 0;
    var zip_STATIC_TREES = 1;
    var zip_DYN_TREES = 2;
    var zip_lbits = 9;
    var zip_dbits = 6;
    var zip_INBUFSIZ = 32768;
    var zip_INBUF_EXTRA = 64;
    var zip_slide;
    var zip_wp;
    var zip_fixed_tl = null;
    var zip_fixed_td;
    var zip_fixed_bl, fixed_bd;
    var zip_bit_buf;
    var zip_bit_len;
    var zip_method;
    var zip_eof;
    var zip_copy_leng;
    var zip_copy_dist;
    var zip_tl, zip_td;
    var zip_bl, zip_bd;
    var zip_inflate_data;
    var zip_inflate_pos;
    var zip_MASK_BITS = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
    var zip_cplens = new Array(3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0);
    var zip_cplext = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99);
    var zip_cpdist = new Array(1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577);
    var zip_cpdext = new Array(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13);
    var zip_border = new Array(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15);
    function zip_HuftList() {
        this.next = null;
        this.list = null;
    }
    function zip_HuftNode() {
        this.e = 0;
        this.b = 0;
        this.n = 0;
        this.t = null;
    }
    function zip_HuftBuild(b, n, s, d, e, mm) {
        this.BMAX = 16;
        this.N_MAX = 288;
        this.status = 0;
        this.root = null;
        this.m = 0;
        {
            var a;
            var c = new Array(this.BMAX + 1);
            var el;
            var f;
            var g;
            var h;
            var i;
            var j;
            var k;
            var lx = new Array(this.BMAX + 1);
            var p;
            var pidx;
            var q;
            var r = new zip_HuftNode();
            var u = new Array(this.BMAX);
            var v = new Array(this.N_MAX);
            var w;
            var x = new Array(this.BMAX + 1);
            var xp;
            var y;
            var z;
            var o;
            var tail;
            tail = this.root = null;
            for (i = 0; i < c.length; i++) c[i] = 0;
            for (i = 0; i < lx.length; i++) lx[i] = 0;
            for (i = 0; i < u.length; i++) u[i] = null;
            for (i = 0; i < v.length; i++) v[i] = 0;
            for (i = 0; i < x.length; i++) x[i] = 0;
            el = n > 256 ? b[256] : this.BMAX;
            p = b;
            pidx = 0;
            i = n;
            do {
                c[p[pidx]]++;
                pidx++;
            } while (--i > 0);
            if (c[0] == n) {
                this.root = null;
                this.m = 0;
                this.status = 0;
                return;
            }
            for (j = 1; j <= this.BMAX; j++) if (c[j] != 0) break;
            k = j;
            if (mm < j) mm = j;
            for (i = this.BMAX; i != 0; i--) if (c[i] != 0) break;
            g = i;
            if (mm > i) mm = i;
            for (y = 1 << j; j < i; j++, y <<= 1) if ((y -= c[j]) < 0) {
                this.status = 2;
                this.m = mm;
                return;
            }
            if ((y -= c[i]) < 0) {
                this.status = 2;
                this.m = mm;
                return;
            }
            c[i] += y;
            x[1] = j = 0;
            p = c;
            pidx = 1;
            xp = 2;
            while (--i > 0) x[xp++] = j += p[pidx++];
            p = b;
            pidx = 0;
            i = 0;
            do {
                if ((j = p[pidx++]) != 0) v[x[j]++] = i;
            } while (++i < n);
            n = x[g];
            x[0] = i = 0;
            p = v;
            pidx = 0;
            h = -1;
            w = lx[0] = 0;
            q = null;
            z = 0;
            for (;k <= g; k++) {
                a = c[k];
                while (a-- > 0) {
                    while (k > w + lx[1 + h]) {
                        w += lx[1 + h];
                        h++;
                        z = (z = g - w) > mm ? mm : z;
                        if ((f = 1 << (j = k - w)) > a + 1) {
                            f -= a + 1;
                            xp = k;
                            while (++j < z) {
                                if ((f <<= 1) <= c[++xp]) break;
                                f -= c[xp];
                            }
                        }
                        if (w + j > el && w < el) j = el - w;
                        z = 1 << j;
                        lx[1 + h] = j;
                        q = new Array(z);
                        for (o = 0; o < z; o++) {
                            q[o] = new zip_HuftNode();
                        }
                        if (tail == null) tail = this.root = new zip_HuftList(); else tail = tail.next = new zip_HuftList();
                        tail.next = null;
                        tail.list = q;
                        u[h] = q;
                        if (h > 0) {
                            x[h] = i;
                            r.b = lx[h];
                            r.e = 16 + j;
                            r.t = q;
                            j = (i & (1 << w) - 1) >> w - lx[h];
                            u[h - 1][j].e = r.e;
                            u[h - 1][j].b = r.b;
                            u[h - 1][j].n = r.n;
                            u[h - 1][j].t = r.t;
                        }
                    }
                    r.b = k - w;
                    if (pidx >= n) r.e = 99; else if (p[pidx] < s) {
                        r.e = p[pidx] < 256 ? 16 : 15;
                        r.n = p[pidx++];
                    } else {
                        r.e = e[p[pidx] - s];
                        r.n = d[p[pidx++] - s];
                    }
                    f = 1 << k - w;
                    for (j = i >> w; j < z; j += f) {
                        q[j].e = r.e;
                        q[j].b = r.b;
                        q[j].n = r.n;
                        q[j].t = r.t;
                    }
                    for (j = 1 << k - 1; (i & j) != 0; j >>= 1) i ^= j;
                    i ^= j;
                    while ((i & (1 << w) - 1) != x[h]) {
                        w -= lx[h];
                        h--;
                    }
                }
            }
            this.m = lx[1];
            this.status = y != 0 && g != 1 ? 1 : 0;
        }
    }
    function zip_GET_BYTE() {
        if (zip_inflate_data.length == zip_inflate_pos) return -1;
        return zip_inflate_data.charCodeAt(zip_inflate_pos++) & 255;
    }
    function zip_NEEDBITS(n) {
        while (zip_bit_len < n) {
            zip_bit_buf |= zip_GET_BYTE() << zip_bit_len;
            zip_bit_len += 8;
        }
    }
    function zip_GETBITS(n) {
        return zip_bit_buf & zip_MASK_BITS[n];
    }
    function zip_DUMPBITS(n) {
        zip_bit_buf >>= n;
        zip_bit_len -= n;
    }
    function zip_inflate_codes(buff, off, size) {
        var e;
        var t;
        var n;
        if (size == 0) return 0;
        n = 0;
        for (;;) {
            zip_NEEDBITS(zip_bl);
            t = zip_tl.list[zip_GETBITS(zip_bl)];
            e = t.e;
            while (e > 16) {
                if (e == 99) return -1;
                zip_DUMPBITS(t.b);
                e -= 16;
                zip_NEEDBITS(e);
                t = t.t[zip_GETBITS(e)];
                e = t.e;
            }
            zip_DUMPBITS(t.b);
            if (e == 16) {
                zip_wp &= zip_WSIZE - 1;
                buff[off + n++] = zip_slide[zip_wp++] = t.n;
                if (n == size) return size;
                continue;
            }
            if (e == 15) break;
            zip_NEEDBITS(e);
            zip_copy_leng = t.n + zip_GETBITS(e);
            zip_DUMPBITS(e);
            zip_NEEDBITS(zip_bd);
            t = zip_td.list[zip_GETBITS(zip_bd)];
            e = t.e;
            while (e > 16) {
                if (e == 99) return -1;
                zip_DUMPBITS(t.b);
                e -= 16;
                zip_NEEDBITS(e);
                t = t.t[zip_GETBITS(e)];
                e = t.e;
            }
            zip_DUMPBITS(t.b);
            zip_NEEDBITS(e);
            zip_copy_dist = zip_wp - t.n - zip_GETBITS(e);
            zip_DUMPBITS(e);
            while (zip_copy_leng > 0 && n < size) {
                zip_copy_leng--;
                zip_copy_dist &= zip_WSIZE - 1;
                zip_wp &= zip_WSIZE - 1;
                buff[off + n++] = zip_slide[zip_wp++] = zip_slide[zip_copy_dist++];
            }
            if (n == size) return size;
        }
        zip_method = -1;
        return n;
    }
    function zip_inflate_stored(buff, off, size) {
        var n;
        n = zip_bit_len & 7;
        zip_DUMPBITS(n);
        zip_NEEDBITS(16);
        n = zip_GETBITS(16);
        zip_DUMPBITS(16);
        zip_NEEDBITS(16);
        if (n != (~zip_bit_buf & 65535)) return -1;
        zip_DUMPBITS(16);
        zip_copy_leng = n;
        n = 0;
        while (zip_copy_leng > 0 && n < size) {
            zip_copy_leng--;
            zip_wp &= zip_WSIZE - 1;
            zip_NEEDBITS(8);
            buff[off + n++] = zip_slide[zip_wp++] = zip_GETBITS(8);
            zip_DUMPBITS(8);
        }
        if (zip_copy_leng == 0) zip_method = -1;
        return n;
    }
    function zip_inflate_fixed(buff, off, size) {
        if (zip_fixed_tl == null) {
            var i;
            var l = new Array(288);
            var h;
            for (i = 0; i < 144; i++) l[i] = 8;
            for (;i < 256; i++) l[i] = 9;
            for (;i < 280; i++) l[i] = 7;
            for (;i < 288; i++) l[i] = 8;
            zip_fixed_bl = 7;
            h = new zip_HuftBuild(l, 288, 257, zip_cplens, zip_cplext, zip_fixed_bl);
            if (h.status != 0) {
                alert("HufBuild error: " + h.status);
                return -1;
            }
            zip_fixed_tl = h.root;
            zip_fixed_bl = h.m;
            for (i = 0; i < 30; i++) l[i] = 5;
            zip_fixed_bd = 5;
            h = new zip_HuftBuild(l, 30, 0, zip_cpdist, zip_cpdext, zip_fixed_bd);
            if (h.status > 1) {
                zip_fixed_tl = null;
                alert("HufBuild error: " + h.status);
                return -1;
            }
            zip_fixed_td = h.root;
            zip_fixed_bd = h.m;
        }
        zip_tl = zip_fixed_tl;
        zip_td = zip_fixed_td;
        zip_bl = zip_fixed_bl;
        zip_bd = zip_fixed_bd;
        return zip_inflate_codes(buff, off, size);
    }
    function zip_inflate_dynamic(buff, off, size) {
        var i;
        var j;
        var l;
        var n;
        var t;
        var nb;
        var nl;
        var nd;
        var ll = new Array(286 + 30);
        var h;
        for (i = 0; i < ll.length; i++) ll[i] = 0;
        zip_NEEDBITS(5);
        nl = 257 + zip_GETBITS(5);
        zip_DUMPBITS(5);
        zip_NEEDBITS(5);
        nd = 1 + zip_GETBITS(5);
        zip_DUMPBITS(5);
        zip_NEEDBITS(4);
        nb = 4 + zip_GETBITS(4);
        zip_DUMPBITS(4);
        if (nl > 286 || nd > 30) return -1;
        for (j = 0; j < nb; j++) {
            zip_NEEDBITS(3);
            ll[zip_border[j]] = zip_GETBITS(3);
            zip_DUMPBITS(3);
        }
        for (;j < 19; j++) ll[zip_border[j]] = 0;
        zip_bl = 7;
        h = new zip_HuftBuild(ll, 19, 19, null, null, zip_bl);
        if (h.status != 0) return -1;
        zip_tl = h.root;
        zip_bl = h.m;
        n = nl + nd;
        i = l = 0;
        while (i < n) {
            zip_NEEDBITS(zip_bl);
            t = zip_tl.list[zip_GETBITS(zip_bl)];
            j = t.b;
            zip_DUMPBITS(j);
            j = t.n;
            if (j < 16) ll[i++] = l = j; else if (j == 16) {
                zip_NEEDBITS(2);
                j = 3 + zip_GETBITS(2);
                zip_DUMPBITS(2);
                if (i + j > n) return -1;
                while (j-- > 0) ll[i++] = l;
            } else if (j == 17) {
                zip_NEEDBITS(3);
                j = 3 + zip_GETBITS(3);
                zip_DUMPBITS(3);
                if (i + j > n) return -1;
                while (j-- > 0) ll[i++] = 0;
                l = 0;
            } else {
                zip_NEEDBITS(7);
                j = 11 + zip_GETBITS(7);
                zip_DUMPBITS(7);
                if (i + j > n) return -1;
                while (j-- > 0) ll[i++] = 0;
                l = 0;
            }
        }
        zip_bl = zip_lbits;
        h = new zip_HuftBuild(ll, nl, 257, zip_cplens, zip_cplext, zip_bl);
        if (zip_bl == 0) h.status = 1;
        if (h.status != 0) {
            if (h.status == 1) ;
            return -1;
        }
        zip_tl = h.root;
        zip_bl = h.m;
        for (i = 0; i < nd; i++) ll[i] = ll[i + nl];
        zip_bd = zip_dbits;
        h = new zip_HuftBuild(ll, nd, 0, zip_cpdist, zip_cpdext, zip_bd);
        zip_td = h.root;
        zip_bd = h.m;
        if (zip_bd == 0 && nl > 257) {
            return -1;
        }
        if (h.status == 1) {
        }
        if (h.status != 0) return -1;
        return zip_inflate_codes(buff, off, size);
    }
    function zip_inflate_start() {
        var i;
        if (zip_slide == null) zip_slide = new Array(2 * zip_WSIZE);
        zip_wp = 0;
        zip_bit_buf = 0;
        zip_bit_len = 0;
        zip_method = -1;
        zip_eof = false;
        zip_copy_leng = zip_copy_dist = 0;
        zip_tl = null;
    }
    function zip_inflate_internal(buff, off, size) {
        var n, i;
        n = 0;
        while (n < size) {
            if (zip_eof && zip_method == -1) return n;
            if (zip_copy_leng > 0) {
                if (zip_method != zip_STORED_BLOCK) {
                    while (zip_copy_leng > 0 && n < size) {
                        zip_copy_leng--;
                        zip_copy_dist &= zip_WSIZE - 1;
                        zip_wp &= zip_WSIZE - 1;
                        buff[off + n++] = zip_slide[zip_wp++] = zip_slide[zip_copy_dist++];
                    }
                } else {
                    while (zip_copy_leng > 0 && n < size) {
                        zip_copy_leng--;
                        zip_wp &= zip_WSIZE - 1;
                        zip_NEEDBITS(8);
                        buff[off + n++] = zip_slide[zip_wp++] = zip_GETBITS(8);
                        zip_DUMPBITS(8);
                    }
                    if (zip_copy_leng == 0) zip_method = -1;
                }
                if (n == size) return n;
            }
            if (zip_method == -1) {
                if (zip_eof) break;
                zip_NEEDBITS(1);
                if (zip_GETBITS(1) != 0) zip_eof = true;
                zip_DUMPBITS(1);
                zip_NEEDBITS(2);
                zip_method = zip_GETBITS(2);
                zip_DUMPBITS(2);
                zip_tl = null;
                zip_copy_leng = 0;
            }
            switch (zip_method) {
              case 0:
                i = zip_inflate_stored(buff, off + n, size - n);
                break;

              case 1:
                if (zip_tl != null) i = zip_inflate_codes(buff, off + n, size - n); else i = zip_inflate_fixed(buff, off + n, size - n);
                break;

              case 2:
                if (zip_tl != null) i = zip_inflate_codes(buff, off + n, size - n); else i = zip_inflate_dynamic(buff, off + n, size - n);
                break;

              default:
                i = -1;
                break;
            }
            if (i == -1) {
                if (zip_eof) return 0;
                return -1;
            }
            n += i;
        }
        return n;
    }
    function zip_inflate(str) {
        var out, buff;
        var i, j;
        zip_inflate_start();
        zip_inflate_data = str;
        zip_inflate_pos = 0;
        buff = new Array(1024);
        out = "";
        while ((i = zip_inflate_internal(buff, 0, buff.length)) > 0) {
            for (j = 0; j < i; j++) out += String.fromCharCode(buff[j]);
        }
        zip_inflate_data = null;
        return out;
    }
    if (!JSZip.compressions["DEFLATE"]) {
        JSZip.compressions["DEFLATE"] = {
            magic: "\b\0",
            uncompress: zip_inflate
        };
    } else {
        JSZip.compressions["DEFLATE"].uncompress = zip_inflate;
    }
})();

(function() {
    var pretty = function(str) {
        var res = "", code, i;
        for (i = 0; i < str.length; i++) {
            code = str.charCodeAt(i);
            res += "\\x" + (code < 10 ? "0" : "") + code.toString(16);
        }
        return res;
    };
    var findCompression = function(compressionMethod) {
        for (var method in JSZip.compressions) {
            if (JSZip.compressions[method].magic === compressionMethod) {
                return JSZip.compressions[method];
            }
        }
        return null;
    };
    function StreamReader(stream) {
        this.stream = stream;
        this.index = 0;
    }
    StreamReader.prototype = {
        checkOffset: function(offset) {
            this.checkIndex(this.index + offset);
        },
        checkIndex: function(newIndex) {
            if (this.stream.length < newIndex || newIndex < 0) {
                throw new Error("End of stream reached (stream length = " + this.stream.length + ", asked index = " + newIndex + "). Corrupted zip ?");
            }
        },
        setIndex: function(newIndex) {
            this.checkIndex(newIndex);
            this.index = newIndex;
        },
        eof: function() {
            return this.index >= this.stream.length;
        },
        byteAt: function(i) {
            return this.stream.charCodeAt(i) & 255;
        },
        readByte: function() {
            this.checkOffset(1);
            return this.byteAt(1 + this.index++);
        },
        readInt: function(size) {
            var result = 0, i;
            this.checkOffset(size);
            for (i = size - 1; i >= 0; i--) {
                result = (result << 8) + this.byteAt(this.index + i);
            }
            this.index += size;
            return result;
        },
        readString: function(size) {
            var result = "", i, code;
            this.checkOffset(size);
            for (i = 0; i < size; i++) {
                code = this.byteAt(this.index + i);
                result += String.fromCharCode(code);
            }
            this.index += size;
            return result;
        },
        readDate: function() {
            var dostime = this.readInt(4);
            return new Date((dostime >> 25 & 127) + 1980, (dostime >> 21 & 15) - 1, dostime >> 16 & 31, dostime >> 11 & 31, dostime >> 5 & 63, (dostime & 31) << 1);
        }
    };
    function ZipEntry(options, loadOptions) {
        this.options = options;
        this.loadOptions = loadOptions;
    }
    ZipEntry.prototype = {
        isEncrypted: function() {
            return (this.bitFlag & 1) === 1;
        },
        hasDataDescriptor: function() {
            return (this.bitFlag & 8) === 8;
        },
        useUTF8: function() {
            return (this.bitFlag & 2048) === 2048;
        },
        isZIP64: function() {
            return this.options.zip64;
        },
        readLocalPartHeader: function(reader) {
            this.versionNeeded = reader.readInt(2);
            this.bitFlag = reader.readInt(2);
            this.compressionMethod = reader.readString(2);
            this.date = reader.readDate();
            this.crc32 = reader.readInt(4);
            this.compressedSize = reader.readInt(4);
            this.uncompressedSize = reader.readInt(4);
            this.fileNameLength = reader.readInt(2);
            this.extraFieldsLength = reader.readInt(2);
            if (this.isEncrypted()) {
                throw new Error("Encrypted zip are not supported");
            }
        },
        readLocalPart: function(reader) {
            var compression;
            this.readLocalPartHeader(reader);
            this.fileName = reader.readString(this.fileNameLength);
            this.readExtraFields(reader);
            if (!this.hasDataDescriptor()) {
                this.compressedFileData = reader.readString(this.compressedSize);
            } else {
                this.compressedFileData = this.findDataUntilDataDescriptor(reader);
                this.crc32 = reader.readInt(4);
                this.compressedSize = reader.readInt(this.isZIP64() ? 8 : 4);
                this.uncompressedSize = reader.readInt(this.isZIP64() ? 8 : 4);
                if (this.compressedFileData.length !== this.compressedSize) {
                    throw new Error("Bug : data descriptor incorrectly read (size mismatch)");
                }
            }
            this.uncompressedFileData = null;
            compression = findCompression(this.compressionMethod);
            if (compression === null) {
                throw new Error("Corrupted zip : compression " + pretty(this.compressionMethod) + " unknown (inner file : " + this.fileName + ")");
            }
            this.uncompressedFileData = compression.uncompress(this.compressedFileData);
            if (this.loadOptions.checkCRC32 && JSZip.prototype.crc32(this.uncompressedFileData) !== this.crc32) {
                throw new Error("Corrupted zip : CRC32 mismatch");
            }
            if (this.useUTF8()) {
                this.fileName = JSZip.prototype.utf8decode(this.fileName);
            }
        },
        findDataUntilDataDescriptor: function(reader) {
            var data = "", buffer = reader.readString(4), aByte;
            while (buffer !== JSZip.signature.DATA_DESCRIPTOR) {
                aByte = reader.readString(1);
                data += buffer.slice(0, 1);
                buffer = (buffer + aByte).slice(-4);
            }
            return data;
        },
        readCentralPart: function(reader) {
            this.versionMadeBy = reader.readString(2);
            this.readLocalPartHeader(reader);
            this.fileCommentLength = reader.readInt(2);
            this.diskNumberStart = reader.readInt(2);
            this.internalFileAttributes = reader.readInt(2);
            this.externalFileAttributes = reader.readInt(4);
            this.localHeaderOffset = reader.readInt(4);
            this.fileName = reader.readString(this.fileNameLength);
            this.readExtraFields(reader);
            this.fileComment = reader.readString(this.fileCommentLength);
            if (this.useUTF8()) {
                this.fileName = JSZip.prototype.utf8decode(this.fileName);
                this.fileComment = JSZip.prototype.utf8decode(this.fileComment);
            }
            this.dir = this.externalFileAttributes & 16 ? true : false;
        },
        parseZIP64ExtraField: function(reader) {
            var extraReader = new StreamReader(this.extraFields[1].value);
            if (this.uncompressedSize === -1) {
                this.uncompressedSize = extraReader.readInt(8);
            }
            if (this.compressedSize === -1) {
                this.compressedSize = extraReader.readInt(8);
            }
            if (this.localHeaderOffset === -1) {
                this.localHeaderOffset = extraReader.readInt(8);
            }
            if (this.diskNumberStart === -1) {
                this.diskNumberStart = extraReader.readInt(4);
            }
        },
        readExtraFields: function(reader) {
            var start = reader.index, extraFieldId, extraFieldLength, extraFieldValue;
            this.extraFields = this.extraFields || {};
            while (reader.index < start + this.extraFieldsLength) {
                extraFieldId = reader.readInt(2);
                extraFieldLength = reader.readInt(2);
                extraFieldValue = reader.readString(extraFieldLength);
                this.extraFields[extraFieldId] = {
                    id: extraFieldId,
                    length: extraFieldLength,
                    value: extraFieldValue
                };
            }
            if (this.isZIP64() && this.extraFields[1]) {
                this.parseZIP64ExtraField(reader);
            }
        }
    };
    function ZipEntries(data, loadOptions) {
        this.files = [];
        this.loadOptions = loadOptions;
        if (data) {
            this.load(data);
        }
    }
    ZipEntries.prototype = {
        checkSignature: function(expectedSignature) {
            var signature = this.reader.readString(4);
            if (signature !== expectedSignature) {
                throw new Error("Corrupted zip or bug : unexpected signature " + "(" + pretty(signature) + ", expected " + pretty(expectedSignature) + ")");
            }
        },
        readBlockEndOfCentral: function() {
            this.diskNumber = this.reader.readInt(2);
            this.diskWithCentralDirStart = this.reader.readInt(2);
            this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
            this.centralDirRecords = this.reader.readInt(2);
            this.centralDirSize = this.reader.readInt(4);
            this.centralDirOffset = this.reader.readInt(4);
            this.zipCommentLength = this.reader.readInt(2);
            this.zipComment = this.reader.readString(this.zipCommentLength);
        },
        readBlockZip64EndOfCentral: function() {
            this.zip64EndOfCentralSize = this.reader.readInt(8);
            this.versionMadeBy = this.reader.readString(2);
            this.versionNeeded = this.reader.readInt(2);
            this.diskNumber = this.reader.readInt(4);
            this.diskWithCentralDirStart = this.reader.readInt(4);
            this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
            this.centralDirRecords = this.reader.readInt(8);
            this.centralDirSize = this.reader.readInt(8);
            this.centralDirOffset = this.reader.readInt(8);
            this.zip64ExtensibleData = {};
            var extraDataSize = this.zip64EndOfCentralSize - 44, index = 0, extraFieldId, extraFieldLength, extraFieldValue;
            while (index < extraDataSize) {
                extraFieldId = this.reader.readInt(2);
                extraFieldLength = this.reader.readInt(4);
                extraFieldValue = this.reader.readString(extraFieldLength);
                this.zip64ExtensibleData[extraFieldId] = {
                    id: extraFieldId,
                    length: extraFieldLength,
                    value: extraFieldValue
                };
            }
        },
        readBlockZip64EndOfCentralLocator: function() {
            this.diskWithZip64CentralDirStart = this.reader.readInt(4);
            this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
            this.disksCount = this.reader.readInt(4);
            if (this.disksCount > 1) {
                throw new Error("Multi-volumes zip are not supported");
            }
        },
        readLocalFiles: function() {
            var i, file;
            for (i = 0; i < this.files.length; i++) {
                file = this.files[i];
                this.reader.setIndex(file.localHeaderOffset);
                this.checkSignature(JSZip.signature.LOCAL_FILE_HEADER);
                file.readLocalPart(this.reader);
            }
        },
        readCentralDir: function() {
            var file;
            this.reader.setIndex(this.centralDirOffset);
            while (this.reader.readString(4) === JSZip.signature.CENTRAL_FILE_HEADER) {
                file = new ZipEntry({
                    zip64: this.zip64
                }, this.loadOptions);
                file.readCentralPart(this.reader);
                this.files.push(file);
            }
        },
        readEndOfCentral: function() {
            var offset = this.reader.stream.lastIndexOf(JSZip.signature.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
            if (offset === -1) {
                this.zip64 = false;
                offset = this.reader.stream.lastIndexOf(JSZip.signature.CENTRAL_DIRECTORY_END);
                if (offset === -1) {
                    throw new Error("Corrupted zip : can't find end of central directory");
                }
                this.reader.setIndex(offset);
                this.checkSignature(JSZip.signature.CENTRAL_DIRECTORY_END);
                this.readBlockEndOfCentral();
            } else {
                this.zip64 = true;
                this.reader.setIndex(offset);
                this.checkSignature(JSZip.signature.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
                this.readBlockZip64EndOfCentralLocator();
                this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
                this.checkSignature(JSZip.signature.ZIP64_CENTRAL_DIRECTORY_END);
                this.readBlockZip64EndOfCentral();
            }
        },
        load: function(data) {
            this.reader = new StreamReader(data);
            this.readEndOfCentral();
            this.readCentralDir();
            this.readLocalFiles();
        }
    };
    JSZip.prototype.load = function(data, options) {
        var files, zipEntries, i, input;
        options = options || {};
        if (options.base64) {
            data = JSZipBase64.decode(data);
        }
        zipEntries = new ZipEntries(data, options);
        files = zipEntries.files;
        for (i in files) {
            input = files[i];
            this.file(input.fileName, input.uncompressedFileData, {
                binary: true,
                date: input.date,
                dir: input.dir
            });
        }
        return this;
    };
})();
if (typeof exports !== 'undefined') exports.JSZip = JSZip;

/* xlsx.js (C) 2013-2015 SheetJS -- http://sheetjs.com */
/* vim: set ts=2: */
/*jshint -W041 */
/*jshint funcscope:true, eqnull:true */
var XLSX = {};
(function make_xlsx(XLSX){
XLSX.version = '0.8.0';
var current_codepage = 1200, current_cptable;
if(typeof module !== "undefined" && typeof require !== 'undefined') {
    if(typeof cptable === 'undefined') cptable = require('./dist/cpexcel');
    current_cptable = cptable[current_codepage];
}
function reset_cp() { set_cp(1200); }
var set_cp = function(cp) { current_codepage = cp; };

function char_codes(data) { var o = []; for(var i = 0, len = data.length; i < len; ++i) o[i] = data.charCodeAt(i); return o; }
var debom_xml = function(data) { return data; };

var _getchar = function _gc1(x) { return String.fromCharCode(x); };
if(typeof cptable !== 'undefined') {
    set_cp = function(cp) { current_codepage = cp; current_cptable = cptable[cp]; };
    debom_xml = function(data) {
        if(data.charCodeAt(0) === 0xFF && data.charCodeAt(1) === 0xFE) { return cptable.utils.decode(1200, char_codes(data.substr(2))); }
        return data;
    };
    _getchar = function _gc2(x) {
        if(current_codepage === 1200) return String.fromCharCode(x);
        return cptable.utils.decode(current_codepage, [x&255,x>>8])[0];
    };
}
var Base64 = (function make_b64(){
    var map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    return {
        encode: function(input, utf8) {
            var o = "";
            var c1, c2, c3, e1, e2, e3, e4;
            for(var i = 0; i < input.length; ) {
                c1 = input.charCodeAt(i++);
                c2 = input.charCodeAt(i++);
                c3 = input.charCodeAt(i++);
                e1 = c1 >> 2;
                e2 = (c1 & 3) << 4 | c2 >> 4;
                e3 = (c2 & 15) << 2 | c3 >> 6;
                e4 = c3 & 63;
                if (isNaN(c2)) { e3 = e4 = 64; }
                else if (isNaN(c3)) { e4 = 64; }
                o += map.charAt(e1) + map.charAt(e2) + map.charAt(e3) + map.charAt(e4);
            }
            return o;
        },
        decode: function b64_decode(input, utf8) {
            var o = "";
            var c1, c2, c3;
            var e1, e2, e3, e4;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            for(var i = 0; i < input.length;) {
                e1 = map.indexOf(input.charAt(i++));
                e2 = map.indexOf(input.charAt(i++));
                e3 = map.indexOf(input.charAt(i++));
                e4 = map.indexOf(input.charAt(i++));
                c1 = e1 << 2 | e2 >> 4;
                c2 = (e2 & 15) << 4 | e3 >> 2;
                c3 = (e3 & 3) << 6 | e4;
                o += String.fromCharCode(c1);
                if (e3 != 64) { o += String.fromCharCode(c2); }
                if (e4 != 64) { o += String.fromCharCode(c3); }
            }
            return o;
        }
    };
})();
var has_buf = (typeof Buffer !== 'undefined');

function new_raw_buf(len) {
    /* jshint -W056 */
    return new (has_buf ? Buffer : Array)(len);
    /* jshint +W056 */
}

function s2a(s) {
    if(has_buf) return new Buffer(s, "binary");
    return s.split("").map(function(x){ return x.charCodeAt(0) & 0xff; });
}

var bconcat = function(bufs) { return [].concat.apply([], bufs); };

var chr0 = /\u0000/g, chr1 = /[\u0001-\u0006]/;
/* ssf.js (C) 2013-2014 SheetJS -- http://sheetjs.com */
/*jshint -W041 */
var SSF = {};
var make_ssf = function make_ssf(SSF){
SSF.version = '0.8.1';
function _strrev(x) { var o = "", i = x.length-1; while(i>=0) o += x.charAt(i--); return o; }
function fill(c,l) { var o = ""; while(o.length < l) o+=c; return o; }
function pad0(v,d){var t=""+v; return t.length>=d?t:fill('0',d-t.length)+t;}
function pad_(v,d){var t=""+v;return t.length>=d?t:fill(' ',d-t.length)+t;}
function rpad_(v,d){var t=""+v; return t.length>=d?t:t+fill(' ',d-t.length);}
function pad0r1(v,d){var t=""+Math.round(v); return t.length>=d?t:fill('0',d-t.length)+t;}
function pad0r2(v,d){var t=""+v; return t.length>=d?t:fill('0',d-t.length)+t;}
var p2_32 = Math.pow(2,32);
function pad0r(v,d){if(v>p2_32||v<-p2_32) return pad0r1(v,d); var i = Math.round(v); return pad0r2(i,d); }
function isgeneral(s, i) { return s.length >= 7 + i && (s.charCodeAt(i)|32) === 103 && (s.charCodeAt(i+1)|32) === 101 && (s.charCodeAt(i+2)|32) === 110 && (s.charCodeAt(i+3)|32) === 101 && (s.charCodeAt(i+4)|32) === 114 && (s.charCodeAt(i+5)|32) === 97 && (s.charCodeAt(i+6)|32) === 108; }
/* Options */
var opts_fmt = [
    ["date1904", 0],
    ["output", ""],
    ["WTF", false]
];
function fixopts(o){
    for(var y = 0; y != opts_fmt.length; ++y) if(o[opts_fmt[y][0]]===undefined) o[opts_fmt[y][0]]=opts_fmt[y][1];
}
SSF.opts = opts_fmt;
var table_fmt = {
    0:  'General',
    1:  '0',
    2:  '0.00',
    3:  '#,##0',
    4:  '#,##0.00',
    9:  '0%',
    10: '0.00%',
    11: '0.00E+00',
    12: '# ?/?',
    13: '# ??/??',
    14: 'm/d/yy',
    15: 'd-mmm-yy',
    16: 'd-mmm',
    17: 'mmm-yy',
    18: 'h:mm AM/PM',
    19: 'h:mm:ss AM/PM',
    20: 'h:mm',
    21: 'h:mm:ss',
    22: 'm/d/yy h:mm',
    37: '#,##0 ;(#,##0)',
    38: '#,##0 ;[Red](#,##0)',
    39: '#,##0.00;(#,##0.00)',
    40: '#,##0.00;[Red](#,##0.00)',
    45: 'mm:ss',
    46: '[h]:mm:ss',
    47: 'mmss.0',
    48: '##0.0E+0',
    49: '@',
    56: '"上午/下午 "hh"時"mm"分"ss"秒 "',
    65535: 'General'
};
var days = [
    ['Sun', 'Sunday'],
    ['Mon', 'Monday'],
    ['Tue', 'Tuesday'],
    ['Wed', 'Wednesday'],
    ['Thu', 'Thursday'],
    ['Fri', 'Friday'],
    ['Sat', 'Saturday']
];
var months = [
    ['J', 'Jan', 'January'],
    ['F', 'Feb', 'February'],
    ['M', 'Mar', 'March'],
    ['A', 'Apr', 'April'],
    ['M', 'May', 'May'],
    ['J', 'Jun', 'June'],
    ['J', 'Jul', 'July'],
    ['A', 'Aug', 'August'],
    ['S', 'Sep', 'September'],
    ['O', 'Oct', 'October'],
    ['N', 'Nov', 'November'],
    ['D', 'Dec', 'December']
];
function frac(x, D, mixed) {
    var sgn = x < 0 ? -1 : 1;
    var B = x * sgn;
    var P_2 = 0, P_1 = 1, P = 0;
    var Q_2 = 1, Q_1 = 0, Q = 0;
    var A = Math.floor(B);
    while(Q_1 < D) {
        A = Math.floor(B);
        P = A * P_1 + P_2;
        Q = A * Q_1 + Q_2;
        if((B - A) < 0.0000000005) break;
        B = 1 / (B - A);
        P_2 = P_1; P_1 = P;
        Q_2 = Q_1; Q_1 = Q;
    }
    if(Q > D) { Q = Q_1; P = P_1; }
    if(Q > D) { Q = Q_2; P = P_2; }
    if(!mixed) return [0, sgn * P, Q];
    if(Q===0) throw "Unexpected state: "+P+" "+P_1+" "+P_2+" "+Q+" "+Q_1+" "+Q_2;
    var q = Math.floor(sgn * P/Q);
    return [q, sgn*P - q*Q, Q];
}
function general_fmt_int(v, opts) { return ""+v; }
SSF._general_int = general_fmt_int;
var general_fmt_num = (function make_general_fmt_num() {
var gnr1 = /\.(\d*[1-9])0+$/, gnr2 = /\.0*$/, gnr4 = /\.(\d*[1-9])0+/, gnr5 = /\.0*[Ee]/, gnr6 = /(E[+-])(\d)$/;
function gfn2(v) {
    var w = (v<0?12:11);
    var o = gfn5(v.toFixed(12)); if(o.length <= w) return o;
    o = v.toPrecision(10); if(o.length <= w) return o;
    return v.toExponential(5);
}
function gfn3(v) {
    var o = v.toFixed(11).replace(gnr1,".$1");
    if(o.length > (v<0?12:11)) o = v.toPrecision(6);
    return o;
}
function gfn4(o) {
    for(var i = 0; i != o.length; ++i) if((o.charCodeAt(i) | 0x20) === 101) return o.replace(gnr4,".$1").replace(gnr5,"E").replace("e","E").replace(gnr6,"$10$2");
    return o;
}
function gfn5(o) {
    //for(var i = 0; i != o.length; ++i) if(o.charCodeAt(i) === 46) return o.replace(gnr2,"").replace(gnr1,".$1");
    //return o;
    return o.indexOf(".") > -1 ? o.replace(gnr2,"").replace(gnr1,".$1") : o;
}
return function general_fmt_num(v, opts) {
    var V = Math.floor(Math.log(Math.abs(v))*Math.LOG10E), o;
    if(V >= -4 && V <= -1) o = v.toPrecision(10+V);
    else if(Math.abs(V) <= 9) o = gfn2(v);
    else if(V === 10) o = v.toFixed(10).substr(0,12);
    else o = gfn3(v);
    return gfn5(gfn4(o));
};})();
SSF._general_num = general_fmt_num;
function general_fmt(v, opts) {
    switch(typeof v) {
        case 'string': return v;
        case 'boolean': return v ? "TRUE" : "FALSE";
        case 'number': return (v|0) === v ? general_fmt_int(v, opts) : general_fmt_num(v, opts);
    }
    throw new Error("unsupported value in General format: " + v);
}
SSF._general = general_fmt;
function fix_hijri(date, o) { return 0; }
function parse_date_code(v,opts,b2) {
    if(v > 2958465 || v < 0) return null;
    var date = (v|0), time = Math.floor(86400 * (v - date)), dow=0;
    var dout=[];
    var out={D:date, T:time, u:86400*(v-date)-time,y:0,m:0,d:0,H:0,M:0,S:0,q:0};
    if(Math.abs(out.u) < 1e-6) out.u = 0;
    fixopts(opts != null ? opts : (opts=[]));
    if(opts.date1904) date += 1462;
    if(out.u > 0.999) {
        out.u = 0;
        if(++time == 86400) { time = 0; ++date; }
    }
    if(date === 60) {dout = b2 ? [1317,10,29] : [1900,2,29]; dow=3;}
    else if(date === 0) {dout = b2 ? [1317,8,29] : [1900,1,0]; dow=6;}
    else {
        if(date > 60) --date;
        /* 1 = Jan 1 1900 */
        var d = new Date(1900,0,1);
        d.setDate(d.getDate() + date - 1);
        dout = [d.getFullYear(), d.getMonth()+1,d.getDate()];
        dow = d.getDay();
        if(date < 60) dow = (dow + 6) % 7;
        if(b2) dow = fix_hijri(d, dout);
    }
    out.y = dout[0]; out.m = dout[1]; out.d = dout[2];
    out.S = time % 60; time = Math.floor(time / 60);
    out.M = time % 60; time = Math.floor(time / 60);
    out.H = time;
    out.q = dow;
    return out;
}
SSF.parse_date_code = parse_date_code;
/*jshint -W086 */
function write_date(type, fmt, val, ss0) {
    var o="", ss=0, tt=0, y = val.y, out, outl = 0;
    switch(type) {
        case 98: /* 'b' buddhist year */
            y = val.y + 543;
            /* falls through */
        case 121: /* 'y' year */
        switch(fmt.length) {
            case 1: case 2: out = y % 100; outl = 2; break;
            default: out = y % 10000; outl = 4; break;
        } break;
        case 109: /* 'm' month */
        switch(fmt.length) {
            case 1: case 2: out = val.m; outl = fmt.length; break;
            case 3: return months[val.m-1][1];
            case 5: return months[val.m-1][0];
            default: return months[val.m-1][2];
        } break;
        case 100: /* 'd' day */
        switch(fmt.length) {
            case 1: case 2: out = val.d; outl = fmt.length; break;
            case 3: return days[val.q][0];
            default: return days[val.q][1];
        } break;
        case 104: /* 'h' 12-hour */
        switch(fmt.length) {
            case 1: case 2: out = 1+(val.H+11)%12; outl = fmt.length; break;
            default: throw 'bad hour format: ' + fmt;
        } break;
        case 72: /* 'H' 24-hour */
        switch(fmt.length) {
            case 1: case 2: out = val.H; outl = fmt.length; break;
            default: throw 'bad hour format: ' + fmt;
        } break;
        case 77: /* 'M' minutes */
        switch(fmt.length) {
            case 1: case 2: out = val.M; outl = fmt.length; break;
            default: throw 'bad minute format: ' + fmt;
        } break;
        case 115: /* 's' seconds */
        if(val.u === 0) switch(fmt) {
            case 's': case 'ss': return pad0(val.S, fmt.length);
            case '.0': case '.00': case '.000':
        }
        switch(fmt) {
            case 's': case 'ss': case '.0': case '.00': case '.000':
                if(ss0 >= 2) tt = ss0 === 3 ? 1000 : 100;
                else tt = ss0 === 1 ? 10 : 1;
                ss = Math.round((tt)*(val.S + val.u));
                if(ss >= 60*tt) ss = 0;
                if(fmt === 's') return ss === 0 ? "0" : ""+ss/tt;
                o = pad0(ss,2 + ss0);
                if(fmt === 'ss') return o.substr(0,2);
                return "." + o.substr(2,fmt.length-1);
            default: throw 'bad second format: ' + fmt;
        }
        case 90: /* 'Z' absolute time */
        switch(fmt) {
            case '[h]': case '[hh]': out = val.D*24+val.H; break;
            case '[m]': case '[mm]': out = (val.D*24+val.H)*60+val.M; break;
            case '[s]': case '[ss]': out = ((val.D*24+val.H)*60+val.M)*60+Math.round(val.S+val.u); break;
            default: throw 'bad abstime format: ' + fmt;
        } outl = fmt.length === 3 ? 1 : 2; break;
        case 101: /* 'e' era */
            out = y; outl = 1;
    }
    if(outl > 0) return pad0(out, outl); else return "";
}
/*jshint +W086 */
function commaify(s) {
    if(s.length <= 3) return s;
    var j = (s.length % 3), o = s.substr(0,j);
    for(; j!=s.length; j+=3) o+=(o.length > 0 ? "," : "") + s.substr(j,3);
    return o;
}
var write_num = (function make_write_num(){
var pct1 = /%/g;
function write_num_pct(type, fmt, val){
    var sfmt = fmt.replace(pct1,""), mul = fmt.length - sfmt.length;
    return write_num(type, sfmt, val * Math.pow(10,2*mul)) + fill("%",mul);
}
function write_num_cm(type, fmt, val){
    var idx = fmt.length - 1;
    while(fmt.charCodeAt(idx-1) === 44) --idx;
    return write_num(type, fmt.substr(0,idx), val / Math.pow(10,3*(fmt.length-idx)));
}
function write_num_exp(fmt, val){
    var o;
    var idx = fmt.indexOf("E") - fmt.indexOf(".") - 1;
    if(fmt.match(/^#+0.0E\+0$/)) {
        var period = fmt.indexOf("."); if(period === -1) period=fmt.indexOf('E');
        var ee = Math.floor(Math.log(Math.abs(val))*Math.LOG10E)%period;
        if(ee < 0) ee += period;
        o = (val/Math.pow(10,ee)).toPrecision(idx+1+(period+ee)%period);
        if(o.indexOf("e") === -1) {
            var fakee = Math.floor(Math.log(Math.abs(val))*Math.LOG10E);
            if(o.indexOf(".") === -1) o = o[0] + "." + o.substr(1) + "E+" + (fakee - o.length+ee);
            else o += "E+" + (fakee - ee);
            while(o.substr(0,2) === "0.") {
                o = o[0] + o.substr(2,period) + "." + o.substr(2+period);
                o = o.replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.");
            }
            o = o.replace(/\+-/,"-");
        }
        o = o.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function($$,$1,$2,$3) { return $1 + $2 + $3.substr(0,(period+ee)%period) + "." + $3.substr(ee) + "E"; });
    } else o = val.toExponential(idx);
    if(fmt.match(/E\+00$/) && o.match(/e[+-]\d$/)) o = o.substr(0,o.length-1) + "0" + o[o.length-1];
    if(fmt.match(/E\-/) && o.match(/e\+/)) o = o.replace(/e\+/,"e");
    return o.replace("e","E");
}
var frac1 = /# (\?+)( ?)\/( ?)(\d+)/;
function write_num_f1(r, aval, sign) {
    var den = parseInt(r[4]), rr = Math.round(aval * den), base = Math.floor(rr/den);
    var myn = (rr - base*den), myd = den;
    return sign + (base === 0 ? "" : ""+base) + " " + (myn === 0 ? fill(" ", r[1].length + 1 + r[4].length) : pad_(myn,r[1].length) + r[2] + "/" + r[3] + pad0(myd,r[4].length));
}
function write_num_f2(r, aval, sign) {
    return sign + (aval === 0 ? "" : ""+aval) + fill(" ", r[1].length + 2 + r[4].length);
}
var dec1 = /^#*0*\.(0+)/;
var closeparen = /\).*[0#]/;
var phone = /\(###\) ###\\?-####/;
function hashq(str) {
    var o = "", cc;
    for(var i = 0; i != str.length; ++i) switch((cc=str.charCodeAt(i))) {
        case 35: break;
        case 63: o+= " "; break;
        case 48: o+= "0"; break;
        default: o+= String.fromCharCode(cc);
    }
    return o;
}
function rnd(val, d) { var dd = Math.pow(10,d); return ""+(Math.round(val * dd)/dd); }
function dec(val, d) { return Math.round((val-Math.floor(val))*Math.pow(10,d)); }
function flr(val) { if(val < 2147483647 && val > -2147483648) return ""+(val >= 0 ? (val|0) : (val-1|0)); return ""+Math.floor(val); }
function write_num_flt(type, fmt, val) {
    if(type.charCodeAt(0) === 40 && !fmt.match(closeparen)) {
        var ffmt = fmt.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");
        if(val >= 0) return write_num_flt('n', ffmt, val);
        return '(' + write_num_flt('n', ffmt, -val) + ')';
    }
    if(fmt.charCodeAt(fmt.length - 1) === 44) return write_num_cm(type, fmt, val);
    if(fmt.indexOf('%') !== -1) return write_num_pct(type, fmt, val);
    if(fmt.indexOf('E') !== -1) return write_num_exp(fmt, val);
    if(fmt.charCodeAt(0) === 36) return "$"+write_num_flt(type,fmt.substr(fmt[1]==' '?2:1),val);
    var o, oo;
    var r, ri, ff, aval = Math.abs(val), sign = val < 0 ? "-" : "";
    if(fmt.match(/^00+$/)) return sign + pad0r(aval,fmt.length);
    if(fmt.match(/^[#?]+$/)) {
        o = pad0r(val,0); if(o === "0") o = "";
        return o.length > fmt.length ? o : hashq(fmt.substr(0,fmt.length-o.length)) + o;
    }
    if((r = fmt.match(frac1)) !== null) return write_num_f1(r, aval, sign);
    if(fmt.match(/^#+0+$/) !== null) return sign + pad0r(aval,fmt.length - fmt.indexOf("0"));
    if((r = fmt.match(dec1)) !== null) {
        o = rnd(val, r[1].length).replace(/^([^\.]+)$/,"$1."+r[1]).replace(/\.$/,"."+r[1]).replace(/\.(\d*)$/,function($$, $1) { return "." + $1 + fill("0", r[1].length-$1.length); });
        return fmt.indexOf("0.") !== -1 ? o : o.replace(/^0\./,".");
    }
    fmt = fmt.replace(/^#+([0.])/, "$1");
    if((r = fmt.match(/^(0*)\.(#*)$/)) !== null) {
        return sign + rnd(aval, r[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,r[1].length?"0.":".");
    }
    if((r = fmt.match(/^#,##0(\.?)$/)) !== null) return sign + commaify(pad0r(aval,0));
    if((r = fmt.match(/^#,##0\.([#0]*0)$/)) !== null) {
        return val < 0 ? "-" + write_num_flt(type, fmt, -val) : commaify(""+(Math.floor(val))) + "." + pad0(dec(val, r[1].length),r[1].length);
    }
    if((r = fmt.match(/^#,#*,#0/)) !== null) return write_num_flt(type,fmt.replace(/^#,#*,/,""),val);
    if((r = fmt.match(/^([0#]+)(\\?-([0#]+))+$/)) !== null) {
        o = _strrev(write_num_flt(type, fmt.replace(/[\\-]/g,""), val));
        ri = 0;
        return _strrev(_strrev(fmt.replace(/\\/g,"")).replace(/[0#]/g,function(x){return ri<o.length?o[ri++]:x==='0'?'0':"";}));
    }
    if(fmt.match(phone) !== null) {
        o = write_num_flt(type, "##########", val);
        return "(" + o.substr(0,3) + ") " + o.substr(3, 3) + "-" + o.substr(6);
    }
    var oa = "";
    if((r = fmt.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) !== null) {
        ri = Math.min(r[4].length,7);
        ff = frac(aval, Math.pow(10,ri)-1, false);
        o = "" + sign;
        oa = write_num("n", r[1], ff[1]);
        if(oa[oa.length-1] == " ") oa = oa.substr(0,oa.length-1) + "0";
        o += oa + r[2] + "/" + r[3];
        oa = rpad_(ff[2],ri);
        if(oa.length < r[4].length) oa = hashq(r[4].substr(r[4].length-oa.length)) + oa;
        o += oa;
        return o;
    }
    if((r = fmt.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) !== null) {
        ri = Math.min(Math.max(r[1].length, r[4].length),7);
        ff = frac(aval, Math.pow(10,ri)-1, true);
        return sign + (ff[0]||(ff[1] ? "" : "0")) + " " + (ff[1] ? pad_(ff[1],ri) + r[2] + "/" + r[3] + rpad_(ff[2],ri): fill(" ", 2*ri+1 + r[2].length + r[3].length));
    }
    if((r = fmt.match(/^[#0?]+$/)) !== null) {
        o = pad0r(val, 0);
        if(fmt.length <= o.length) return o;
        return hashq(fmt.substr(0,fmt.length-o.length)) + o;
    }
  if((r = fmt.match(/^([#0?]+)\.([#0]+)$/)) !== null) {
        o = "" + val.toFixed(Math.min(r[2].length,10)).replace(/([^0])0+$/,"$1");
        ri = o.indexOf(".");
        var lres = fmt.indexOf(".") - ri, rres = fmt.length - o.length - lres;
        return hashq(fmt.substr(0,lres) + o + fmt.substr(fmt.length-rres));
    }
    if((r = fmt.match(/^00,000\.([#0]*0)$/)) !== null) {
        ri = dec(val, r[1].length);
        return val < 0 ? "-" + write_num_flt(type, fmt, -val) : commaify(flr(val)).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function($$) { return "00," + ($$.length < 3 ? pad0(0,3-$$.length) : "") + $$; }) + "." + pad0(ri,r[1].length);
    }
    switch(fmt) {
        case "#,###": var x = commaify(pad0r(aval,0)); return x !== "0" ? sign + x : "";
        default:
    }
    throw new Error("unsupported format |" + fmt + "|");
}
function write_num_cm2(type, fmt, val){
    var idx = fmt.length - 1;
    while(fmt.charCodeAt(idx-1) === 44) --idx;
    return write_num(type, fmt.substr(0,idx), val / Math.pow(10,3*(fmt.length-idx)));
}
function write_num_pct2(type, fmt, val){
    var sfmt = fmt.replace(pct1,""), mul = fmt.length - sfmt.length;
    return write_num(type, sfmt, val * Math.pow(10,2*mul)) + fill("%",mul);
}
function write_num_exp2(fmt, val){
    var o;
    var idx = fmt.indexOf("E") - fmt.indexOf(".") - 1;
    if(fmt.match(/^#+0.0E\+0$/)) {
        var period = fmt.indexOf("."); if(period === -1) period=fmt.indexOf('E');
        var ee = Math.floor(Math.log(Math.abs(val))*Math.LOG10E)%period;
        if(ee < 0) ee += period;
        o = (val/Math.pow(10,ee)).toPrecision(idx+1+(period+ee)%period);
        if(!o.match(/[Ee]/)) {
            var fakee = Math.floor(Math.log(Math.abs(val))*Math.LOG10E);
            if(o.indexOf(".") === -1) o = o[0] + "." + o.substr(1) + "E+" + (fakee - o.length+ee);
            else o += "E+" + (fakee - ee);
            o = o.replace(/\+-/,"-");
        }
        o = o.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function($$,$1,$2,$3) { return $1 + $2 + $3.substr(0,(period+ee)%period) + "." + $3.substr(ee) + "E"; });
    } else o = val.toExponential(idx);
    if(fmt.match(/E\+00$/) && o.match(/e[+-]\d$/)) o = o.substr(0,o.length-1) + "0" + o[o.length-1];
    if(fmt.match(/E\-/) && o.match(/e\+/)) o = o.replace(/e\+/,"e");
    return o.replace("e","E");
}
function write_num_int(type, fmt, val) {
    if(type.charCodeAt(0) === 40 && !fmt.match(closeparen)) {
        var ffmt = fmt.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");
        if(val >= 0) return write_num_int('n', ffmt, val);
        return '(' + write_num_int('n', ffmt, -val) + ')';
    }
    if(fmt.charCodeAt(fmt.length - 1) === 44) return write_num_cm2(type, fmt, val);
    if(fmt.indexOf('%') !== -1) return write_num_pct2(type, fmt, val);
    if(fmt.indexOf('E') !== -1) return write_num_exp2(fmt, val);
    if(fmt.charCodeAt(0) === 36) return "$"+write_num_int(type,fmt.substr(fmt[1]==' '?2:1),val);
    var o;
    var r, ri, ff, aval = Math.abs(val), sign = val < 0 ? "-" : "";
    if(fmt.match(/^00+$/)) return sign + pad0(aval,fmt.length);
    if(fmt.match(/^[#?]+$/)) {
        o = (""+val); if(val === 0) o = "";
        return o.length > fmt.length ? o : hashq(fmt.substr(0,fmt.length-o.length)) + o;
    }
    if((r = fmt.match(frac1)) !== null) return write_num_f2(r, aval, sign);
    if(fmt.match(/^#+0+$/) !== null) return sign + pad0(aval,fmt.length - fmt.indexOf("0"));
    if((r = fmt.match(dec1)) !== null) {
        o = (""+val).replace(/^([^\.]+)$/,"$1."+r[1]).replace(/\.$/,"."+r[1]).replace(/\.(\d*)$/,function($$, $1) { return "." + $1 + fill("0", r[1].length-$1.length); });
        return fmt.indexOf("0.") !== -1 ? o : o.replace(/^0\./,".");
    }
    fmt = fmt.replace(/^#+([0.])/, "$1");
    if((r = fmt.match(/^(0*)\.(#*)$/)) !== null) {
        return sign + (""+aval).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,r[1].length?"0.":".");
    }
    if((r = fmt.match(/^#,##0(\.?)$/)) !== null) return sign + commaify((""+aval));
    if((r = fmt.match(/^#,##0\.([#0]*0)$/)) !== null) {
        return val < 0 ? "-" + write_num_int(type, fmt, -val) : commaify((""+val)) + "." + fill('0',r[1].length);
    }
    if((r = fmt.match(/^#,#*,#0/)) !== null) return write_num_int(type,fmt.replace(/^#,#*,/,""),val);
    if((r = fmt.match(/^([0#]+)(\\?-([0#]+))+$/)) !== null) {
        o = _strrev(write_num_int(type, fmt.replace(/[\\-]/g,""), val));
        ri = 0;
        return _strrev(_strrev(fmt.replace(/\\/g,"")).replace(/[0#]/g,function(x){return ri<o.length?o[ri++]:x==='0'?'0':"";}));
    }
    if(fmt.match(phone) !== null) {
        o = write_num_int(type, "##########", val);
        return "(" + o.substr(0,3) + ") " + o.substr(3, 3) + "-" + o.substr(6);
    }
    var oa = "";
    if((r = fmt.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) !== null) {
        ri = Math.min(r[4].length,7);
        ff = frac(aval, Math.pow(10,ri)-1, false);
        o = "" + sign;
        oa = write_num("n", r[1], ff[1]);
        if(oa[oa.length-1] == " ") oa = oa.substr(0,oa.length-1) + "0";
        o += oa + r[2] + "/" + r[3];
        oa = rpad_(ff[2],ri);
        if(oa.length < r[4].length) oa = hashq(r[4].substr(r[4].length-oa.length)) + oa;
        o += oa;
        return o;
    }
    if((r = fmt.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) !== null) {
        ri = Math.min(Math.max(r[1].length, r[4].length),7);
        ff = frac(aval, Math.pow(10,ri)-1, true);
        return sign + (ff[0]||(ff[1] ? "" : "0")) + " " + (ff[1] ? pad_(ff[1],ri) + r[2] + "/" + r[3] + rpad_(ff[2],ri): fill(" ", 2*ri+1 + r[2].length + r[3].length));
    }
    if((r = fmt.match(/^[#0?]+$/)) !== null) {
        o = "" + val;
        if(fmt.length <= o.length) return o;
        return hashq(fmt.substr(0,fmt.length-o.length)) + o;
    }
    if((r = fmt.match(/^([#0]+)\.([#0]+)$/)) !== null) {
        o = "" + val.toFixed(Math.min(r[2].length,10)).replace(/([^0])0+$/,"$1");
        ri = o.indexOf(".");
        var lres = fmt.indexOf(".") - ri, rres = fmt.length - o.length - lres;
        return hashq(fmt.substr(0,lres) + o + fmt.substr(fmt.length-rres));
    }
    if((r = fmt.match(/^00,000\.([#0]*0)$/)) !== null) {
        return val < 0 ? "-" + write_num_int(type, fmt, -val) : commaify(""+val).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function($$) { return "00," + ($$.length < 3 ? pad0(0,3-$$.length) : "") + $$; }) + "." + pad0(0,r[1].length);
    }
    switch(fmt) {
        case "#,###": var x = commaify(""+aval); return x !== "0" ? sign + x : "";
        default:
    }
    throw new Error("unsupported format |" + fmt + "|");
}
return function write_num(type, fmt, val) {
    return (val|0) === val ? write_num_int(type, fmt, val) : write_num_flt(type, fmt, val);
};})();
function split_fmt(fmt) {
    var out = [];
    var in_str = false, cc;
    for(var i = 0, j = 0; i < fmt.length; ++i) switch((cc=fmt.charCodeAt(i))) {
        case 34: /* '"' */
            in_str = !in_str; break;
        case 95: case 42: case 92: /* '_' '*' '\\' */
            ++i; break;
        case 59: /* ';' */
            out[out.length] = fmt.substr(j,i-j);
            j = i+1;
    }
    out[out.length] = fmt.substr(j);
    if(in_str === true) throw new Error("Format |" + fmt + "| unterminated string ");
    return out;
}
SSF._split = split_fmt;
var abstime = /\[[HhMmSs]*\]/;
function eval_fmt(fmt, v, opts, flen) {
    var out = [], o = "", i = 0, c = "", lst='t', q, dt, j, cc;
    var hr='H';
    /* Tokenize */
    while(i < fmt.length) {
        switch((c = fmt[i])) {
            case 'G': /* General */
                if(!isgeneral(fmt, i)) throw new Error('unrecognized character ' + c + ' in ' +fmt);
                out[out.length] = {t:'G', v:'General'}; i+=7; break;
            case '"': /* Literal text */
                for(o="";(cc=fmt.charCodeAt(++i)) !== 34 && i < fmt.length;) o += String.fromCharCode(cc);
                out[out.length] = {t:'t', v:o}; ++i; break;
            case '\\': var w = fmt[++i], t = (w === "(" || w === ")") ? w : 't';
                out[out.length] = {t:t, v:w}; ++i; break;
            case '_': out[out.length] = {t:'t', v:" "}; i+=2; break;
            case '@': /* Text Placeholder */
                out[out.length] = {t:'T', v:v}; ++i; break;
            case 'B': case 'b':
                if(fmt[i+1] === "1" || fmt[i+1] === "2") {
          if(dt==null) { dt=parse_date_code(v, opts, fmt[i+1] === "2"); if(dt==null) return ""; }
                    out[out.length] = {t:'X', v:fmt.substr(i,2)}; lst = c; i+=2; break;
                }
                /* falls through */
            case 'M': case 'D': case 'Y': case 'H': case 'S': case 'E':
                c = c.toLowerCase();
                /* falls through */
            case 'm': case 'd': case 'y': case 'h': case 's': case 'e': case 'g':
                if(v < 0) return "";
                if(dt==null) { dt=parse_date_code(v, opts); if(dt==null) return ""; }
                o = c; while(++i<fmt.length && fmt[i].toLowerCase() === c) o+=c;
                if(c === 'm' && lst.toLowerCase() === 'h') c = 'M'; /* m = minute */
                if(c === 'h') c = hr;
                out[out.length] = {t:c, v:o}; lst = c; break;
            case 'A':
                q={t:c, v:"A"};
                if(dt==null) dt=parse_date_code(v, opts);
        if(fmt.substr(i, 3) === "A/P") { if(dt!=null) q.v = dt.H >= 12 ? "P" : "A"; q.t = 'T'; hr='h';i+=3;}
        else if(fmt.substr(i,5) === "AM/PM") { if(dt!=null) q.v = dt.H >= 12 ? "PM" : "AM"; q.t = 'T'; i+=5; hr='h'; }
                else { q.t = "t"; ++i; }
                if(dt==null && q.t === 'T') return "";
                out[out.length] = q; lst = c; break;
            case '[':
                o = c;
                while(fmt[i++] !== ']' && i < fmt.length) o += fmt[i];
                if(o.substr(-1) !== ']') throw 'unterminated "[" block: |' + o + '|';
                if(o.match(abstime)) {
                    if(dt==null) { dt=parse_date_code(v, opts); if(dt==null) return ""; }
                    out[out.length] = {t:'Z', v:o.toLowerCase()};
                } else { o=""; }
                break;
            /* Numbers */
            case '.':
                if(dt != null) {
                    o = c; while((c=fmt[++i]) === "0") o += c;
                    out[out.length] = {t:'s', v:o}; break;
                }
                /* falls through */
            case '0': case '#':
                o = c; while("0#?.,E+-%".indexOf(c=fmt[++i]) > -1 || c=='\\' && fmt[i+1] == "-" && "0#".indexOf(fmt[i+2])>-1) o += c;
                out[out.length] = {t:'n', v:o}; break;
            case '?':
                o = c; while(fmt[++i] === c) o+=c;
                q={t:c, v:o}; out[out.length] = q; lst = c; break;
            case '*': ++i; if(fmt[i] == ' ' || fmt[i] == '*') ++i; break; // **
            case '(': case ')': out[out.length] = {t:(flen===1?'t':c), v:c}; ++i; break;
            case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
                o = c; while("0123456789".indexOf(fmt[++i]) > -1) o+=fmt[i];
                out[out.length] = {t:'D', v:o}; break;
            case ' ': out[out.length] = {t:c, v:c}; ++i; break;
            default:
                if(",$-+/():!^&'~{}<>=€acfijklopqrtuvwxz".indexOf(c) === -1) throw new Error('unrecognized character ' + c + ' in ' + fmt);
                out[out.length] = {t:'t', v:c}; ++i; break;
        }
    }
    var bt = 0, ss0 = 0, ssm;
    for(i=out.length-1, lst='t'; i >= 0; --i) {
        switch(out[i].t) {
            case 'h': case 'H': out[i].t = hr; lst='h'; if(bt < 1) bt = 1; break;
            case 's':
                if((ssm=out[i].v.match(/\.0+$/))) ss0=Math.max(ss0,ssm[0].length-1);
                if(bt < 3) bt = 3;
            /* falls through */
            case 'd': case 'y': case 'M': case 'e': lst=out[i].t; break;
            case 'm': if(lst === 's') { out[i].t = 'M'; if(bt < 2) bt = 2; } break;
            case 'X': if(out[i].v === "B2");
                break;
            case 'Z':
                if(bt < 1 && out[i].v.match(/[Hh]/)) bt = 1;
                if(bt < 2 && out[i].v.match(/[Mm]/)) bt = 2;
                if(bt < 3 && out[i].v.match(/[Ss]/)) bt = 3;
        }
    }
    switch(bt) {
        case 0: break;
        case 1:
            if(dt.u >= 0.5) { dt.u = 0; ++dt.S; }
            if(dt.S >=  60) { dt.S = 0; ++dt.M; }
            if(dt.M >=  60) { dt.M = 0; ++dt.H; }
            break;
        case 2:
            if(dt.u >= 0.5) { dt.u = 0; ++dt.S; }
            if(dt.S >=  60) { dt.S = 0; ++dt.M; }
            break;
    }
    /* replace fields */
    var nstr = "", jj;
    for(i=0; i < out.length; ++i) {
        switch(out[i].t) {
            case 't': case 'T': case ' ': case 'D': break;
            case 'X': out[i] = undefined; break;
            case 'd': case 'm': case 'y': case 'h': case 'H': case 'M': case 's': case 'e': case 'b': case 'Z':
                out[i].v = write_date(out[i].t.charCodeAt(0), out[i].v, dt, ss0);
                out[i].t = 't'; break;
            case 'n': case '(': case '?':
                jj = i+1;
                while(out[jj] != null && (
                    (c=out[jj].t) === "?" || c === "D" ||
                    (c === " " || c === "t") && out[jj+1] != null && (out[jj+1].t === '?' || out[jj+1].t === "t" && out[jj+1].v === '/') ||
                    out[i].t === '(' && (c === ' ' || c === 'n' || c === ')') ||
                    c === 't' && (out[jj].v === '/' || '$€'.indexOf(out[jj].v) > -1 || out[jj].v === ' ' && out[jj+1] != null && out[jj+1].t == '?')
                )) {
                    out[i].v += out[jj].v;
                    out[jj] = undefined; ++jj;
                }
                nstr += out[i].v;
                i = jj-1; break;
            case 'G': out[i].t = 't'; out[i].v = general_fmt(v,opts); break;
        }
    }
    var vv = "", myv, ostr;
    if(nstr.length > 0) {
        myv = (v<0&&nstr.charCodeAt(0) === 45 ? -v : v); /* '-' */
        ostr = write_num(nstr.charCodeAt(0) === 40 ? '(' : 'n', nstr, myv); /* '(' */
        jj=ostr.length-1;
        var decpt = out.length;
        for(i=0; i < out.length; ++i) if(out[i] != null && out[i].v.indexOf(".") > -1) { decpt = i; break; }
        var lasti=out.length;
        if(decpt === out.length && ostr.indexOf("E") === -1) {
            for(i=out.length-1; i>= 0;--i) {
                if(out[i] == null || 'n?('.indexOf(out[i].t) === -1) continue;
                if(jj>=out[i].v.length-1) { jj -= out[i].v.length; out[i].v = ostr.substr(jj+1, out[i].v.length); }
                else if(jj < 0) out[i].v = "";
                else { out[i].v = ostr.substr(0, jj+1); jj = -1; }
                out[i].t = 't';
                lasti = i;
            }
            if(jj>=0 && lasti<out.length) out[lasti].v = ostr.substr(0,jj+1) + out[lasti].v;
        }
        else if(decpt !== out.length && ostr.indexOf("E") === -1) {
            jj = ostr.indexOf(".")-1;
            for(i=decpt; i>= 0; --i) {
                if(out[i] == null || 'n?('.indexOf(out[i].t) === -1) continue;
                j=out[i].v.indexOf(".")>-1&&i===decpt?out[i].v.indexOf(".")-1:out[i].v.length-1;
                vv = out[i].v.substr(j+1);
                for(; j>=0; --j) {
                    if(jj>=0 && (out[i].v[j] === "0" || out[i].v[j] === "#")) vv = ostr[jj--] + vv;
                }
                out[i].v = vv;
                out[i].t = 't';
                lasti = i;
            }
            if(jj>=0 && lasti<out.length) out[lasti].v = ostr.substr(0,jj+1) + out[lasti].v;
            jj = ostr.indexOf(".")+1;
            for(i=decpt; i<out.length; ++i) {
                if(out[i] == null || 'n?('.indexOf(out[i].t) === -1 && i !== decpt ) continue;
                j=out[i].v.indexOf(".")>-1&&i===decpt?out[i].v.indexOf(".")+1:0;
                vv = out[i].v.substr(0,j);
                for(; j<out[i].v.length; ++j) {
                    if(jj<ostr.length) vv += ostr[jj++];
                }
                out[i].v = vv;
                out[i].t = 't';
                lasti = i;
            }
        }
    }
    for(i=0; i<out.length; ++i) if(out[i] != null && 'n(?'.indexOf(out[i].t)>-1) {
        myv = (flen >1 && v < 0 && i>0 && out[i-1].v === "-" ? -v:v);
        out[i].v = write_num(out[i].t, out[i].v, myv);
        out[i].t = 't';
    }
    var retval = "";
    for(i=0; i !== out.length; ++i) if(out[i] != null) retval += out[i].v;
    return retval;
}
SSF._eval = eval_fmt;
var cfregex = /\[[=<>]/;
var cfregex2 = /\[([=<>]*)(-?\d+\.?\d*)\]/;
function chkcond(v, rr) {
    if(rr == null) return false;
    var thresh = parseFloat(rr[2]);
    switch(rr[1]) {
        case "=":  if(v == thresh) return true; break;
        case ">":  if(v >  thresh) return true; break;
        case "<":  if(v <  thresh) return true; break;
        case "<>": if(v != thresh) return true; break;
        case ">=": if(v >= thresh) return true; break;
        case "<=": if(v <= thresh) return true; break;
    }
    return false;
}
function choose_fmt(f, v) {
    var fmt = split_fmt(f);
    var l = fmt.length, lat = fmt[l-1].indexOf("@");
    if(l<4 && lat>-1) --l;
    if(fmt.length > 4) throw "cannot find right format for |" + fmt + "|";
    if(typeof v !== "number") return [4, fmt.length === 4 || lat>-1?fmt[fmt.length-1]:"@"];
    switch(fmt.length) {
        case 1: fmt = lat>-1 ? ["General", "General", "General", fmt[0]] : [fmt[0], fmt[0], fmt[0], "@"]; break;
        case 2: fmt = lat>-1 ? [fmt[0], fmt[0], fmt[0], fmt[1]] : [fmt[0], fmt[1], fmt[0], "@"]; break;
        case 3: fmt = lat>-1 ? [fmt[0], fmt[1], fmt[0], fmt[2]] : [fmt[0], fmt[1], fmt[2], "@"]; break;
        case 4: break;
    }
    var ff = v > 0 ? fmt[0] : v < 0 ? fmt[1] : fmt[2];
    if(fmt[0].indexOf("[") === -1 && fmt[1].indexOf("[") === -1) return [l, ff];
    if(fmt[0].match(cfregex) != null || fmt[1].match(cfregex) != null) {
        var m1 = fmt[0].match(cfregex2);
        var m2 = fmt[1].match(cfregex2);
        return chkcond(v, m1) ? [l, fmt[0]] : chkcond(v, m2) ? [l, fmt[1]] : [l, fmt[m1 != null && m2 != null ? 2 : 1]];
    }
    return [l, ff];
}
function format(fmt,v,o) {
    fixopts(o != null ? o : (o=[]));
    var sfmt = "";
    switch(typeof fmt) {
        case "string": sfmt = fmt; break;
        case "number": sfmt = (o.table != null ? o.table : table_fmt)[fmt]; break;
    }
    if(isgeneral(sfmt,0)) return general_fmt(v, o);
    var f = choose_fmt(sfmt, v);
    if(isgeneral(f[1])) return general_fmt(v, o);
    if(v === true) v = "TRUE"; else if(v === false) v = "FALSE";
    else if(v === "" || v == null) return "";
    return eval_fmt(f[1], v, o, f[0]);
}
SSF._table = table_fmt;
SSF.load = function load_entry(fmt, idx) { table_fmt[idx] = fmt; };
SSF.format = format;
SSF.get_table = function get_table() { return table_fmt; };
SSF.load_table = function load_table(tbl) { for(var i=0; i!=0x0188; ++i) if(tbl[i] !== undefined) SSF.load(tbl[i], i); };
};
make_ssf(SSF);
/* map from xlml named formats to SSF TODO: localize */
var XLMLFormatMap = {
    "General Number": "General",
    "General Date": SSF._table[22],
    "Long Date": "dddd, mmmm dd, yyyy",
    "Medium Date": SSF._table[15],
    "Short Date": SSF._table[14],
    "Long Time": SSF._table[19],
    "Medium Time": SSF._table[18],
    "Short Time": SSF._table[20],
    "Currency": '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    "Fixed": SSF._table[2],
    "Standard": SSF._table[4],
    "Percent": SSF._table[10],
    "Scientific": SSF._table[11],
    "Yes/No": '"Yes";"Yes";"No";@',
    "True/False": '"True";"True";"False";@',
    "On/Off": '"Yes";"Yes";"No";@'
};

var DO_NOT_EXPORT_CFB = true;
/* cfb.js (C) 2013-2014 SheetJS -- http://sheetjs.com */
/* vim: set ts=2: */
/*jshint eqnull:true */

/* [MS-CFB] v20130118 */
var CFB = (function _CFB(){
var exports = {};
exports.version = '0.10.2';
function parse(file) {
var mver = 3; // major version
var ssz = 512; // sector size
var nmfs = 0; // number of mini FAT sectors
var ndfs = 0; // number of DIFAT sectors
var dir_start = 0; // first directory sector location
var minifat_start = 0; // first mini FAT sector location
var difat_start = 0; // first mini FAT sector location

var fat_addrs = []; // locations of FAT sectors

/* [MS-CFB] 2.2 Compound File Header */
var blob = file.slice(0,512);
prep_blob(blob, 0);

/* major version */
var mv = check_get_mver(blob);
mver = mv[0];
switch(mver) {
    case 3: ssz = 512; break; case 4: ssz = 4096; break;
    default: throw "Major Version: Expected 3 or 4 saw " + mver;
}

/* reprocess header */
if(ssz !== 512) { blob = file.slice(0,ssz); prep_blob(blob, 28 /* blob.l */); }
/* Save header for final object */
var header = file.slice(0,ssz);

check_shifts(blob, mver);

// Number of Directory Sectors
var nds = blob.read_shift(4, 'i');
if(mver === 3 && nds !== 0) throw '# Directory Sectors: Expected 0 saw ' + nds;

// Number of FAT Sectors
//var nfs = blob.read_shift(4, 'i');
blob.l += 4;

// First Directory Sector Location
dir_start = blob.read_shift(4, 'i');

// Transaction Signature
blob.l += 4;

// Mini Stream Cutoff Size
blob.chk('00100000', 'Mini Stream Cutoff Size: ');

// First Mini FAT Sector Location
minifat_start = blob.read_shift(4, 'i');

// Number of Mini FAT Sectors
nmfs = blob.read_shift(4, 'i');

// First DIFAT sector location
difat_start = blob.read_shift(4, 'i');

// Number of DIFAT Sectors
ndfs = blob.read_shift(4, 'i');

// Grab FAT Sector Locations
for(var q, j = 0; j < 109; ++j) { /* 109 = (512 - blob.l)>>>2; */
    q = blob.read_shift(4, 'i');
    if(q<0) break;
    fat_addrs[j] = q;
}

/** Break the file up into sectors */
var sectors = sectorify(file, ssz);

sleuth_fat(difat_start, ndfs, sectors, ssz, fat_addrs);

/** Chains */
var sector_list = make_sector_list(sectors, dir_start, fat_addrs, ssz);

sector_list[dir_start].name = "!Directory";
if(nmfs > 0 && minifat_start !== ENDOFCHAIN) sector_list[minifat_start].name = "!MiniFAT";
sector_list[fat_addrs[0]].name = "!FAT";
sector_list.fat_addrs = fat_addrs;
sector_list.ssz = ssz;

/* [MS-CFB] 2.6.1 Compound File Directory Entry */
var files = {}, Paths = [], FileIndex = [], FullPaths = [], FullPathDir = {};
read_directory(dir_start, sector_list, sectors, Paths, nmfs, files, FileIndex);

build_full_paths(FileIndex, FullPathDir, FullPaths, Paths);

var root_name = Paths.shift();
Paths.root = root_name;

/* [MS-CFB] 2.6.4 (Unicode 3.0.1 case conversion) */
var find_path = make_find_path(FullPaths, Paths, FileIndex, files, root_name);

return {
    raw: {header: header, sectors: sectors},
    FileIndex: FileIndex,
    FullPaths: FullPaths,
    FullPathDir: FullPathDir,
    find: find_path
};
} // parse

/* [MS-CFB] 2.2 Compound File Header -- read up to major version */
function check_get_mver(blob) {
    // header signature 8
    blob.chk(HEADER_SIGNATURE, 'Header Signature: ');

    // clsid 16
    blob.chk(HEADER_CLSID, 'CLSID: ');

    // minor version 2
    var mver = blob.read_shift(2, 'u');

    return [blob.read_shift(2,'u'), mver];
}
function check_shifts(blob, mver) {
    var shift = 0x09;

    // Byte Order
    blob.chk('feff', 'Byte Order: ');

    // Sector Shift
    switch((shift = blob.read_shift(2))) {
        case 0x09: if(mver !== 3) throw 'MajorVersion/SectorShift Mismatch'; break;
        case 0x0c: if(mver !== 4) throw 'MajorVersion/SectorShift Mismatch'; break;
        default: throw 'Sector Shift: Expected 9 or 12 saw ' + shift;
    }

    // Mini Sector Shift
    blob.chk('0600', 'Mini Sector Shift: ');

    // Reserved
    blob.chk('000000000000', 'Reserved: ');
}

/** Break the file up into sectors */
function sectorify(file, ssz) {
    var nsectors = Math.ceil(file.length/ssz)-1;
    var sectors = new Array(nsectors);
    for(var i=1; i < nsectors; ++i) sectors[i-1] = file.slice(i*ssz,(i+1)*ssz);
    sectors[nsectors-1] = file.slice(nsectors*ssz);
    return sectors;
}

/* [MS-CFB] 2.6.4 Red-Black Tree */
function build_full_paths(FI, FPD, FP, Paths) {
    var i = 0, L = 0, R = 0, C = 0, j = 0, pl = Paths.length;
    var dad = new Array(pl), q = new Array(pl);

    for(; i < pl; ++i) { dad[i]=q[i]=i; FP[i]=Paths[i]; }

    for(; j < q.length; ++j) {
        i = q[j];
        L = FI[i].L; R = FI[i].R; C = FI[i].C;
        if(dad[i] === i) {
            if(L !== -1 /*NOSTREAM*/ && dad[L] !== L) dad[i] = dad[L];
            if(R !== -1 && dad[R] !== R) dad[i] = dad[R];
        }
        if(C !== -1 /*NOSTREAM*/) dad[C] = i;
        if(L !== -1) { dad[L] = dad[i]; q.push(L); }
        if(R !== -1) { dad[R] = dad[i]; q.push(R); }
    }
    for(i=1; i !== pl; ++i) if(dad[i] === i) {
        if(R !== -1 /*NOSTREAM*/ && dad[R] !== R) dad[i] = dad[R];
        else if(L !== -1 && dad[L] !== L) dad[i] = dad[L];
    }

    for(i=1; i < pl; ++i) {
        if(FI[i].type === 0 /* unknown */) continue;
        j = dad[i];
        if(j === 0) FP[i] = FP[0] + "/" + FP[i];
        else while(j !== 0) {
            FP[i] = FP[j] + "/" + FP[i];
            j = dad[j];
        }
        dad[i] = 0;
    }

    FP[0] += "/";
    for(i=1; i < pl; ++i) {
        if(FI[i].type !== 2 /* stream */) FP[i] += "/";
        FPD[FP[i]] = FI[i];
    }
}

/* [MS-CFB] 2.6.4 */
function make_find_path(FullPaths, Paths, FileIndex, files, root_name) {
    var UCFullPaths = new Array(FullPaths.length);
    var UCPaths = new Array(Paths.length), i;
    for(i = 0; i < FullPaths.length; ++i) UCFullPaths[i] = FullPaths[i].toUpperCase().replace(chr0,'').replace(chr1,'!');
    for(i = 0; i < Paths.length; ++i) UCPaths[i] = Paths[i].toUpperCase().replace(chr0,'').replace(chr1,'!');
    return function find_path(path) {
        var k;
        if(path.charCodeAt(0) === 47 /* "/" */) { k=true; path = root_name + path; }
        else k = path.indexOf("/") !== -1;
        var UCPath = path.toUpperCase().replace(chr0,'').replace(chr1,'!');
        var w = k === true ? UCFullPaths.indexOf(UCPath) : UCPaths.indexOf(UCPath);
        if(w === -1) return null;
        return k === true ? FileIndex[w] : files[Paths[w]];
    };
}

/** Chase down the rest of the DIFAT chain to build a comprehensive list
    DIFAT chains by storing the next sector number as the last 32 bytes */
function sleuth_fat(idx, cnt, sectors, ssz, fat_addrs) {
    var q;
    if(idx === ENDOFCHAIN) {
        if(cnt !== 0) throw "DIFAT chain shorter than expected";
    } else if(idx !== -1 /*FREESECT*/) {
        var sector = sectors[idx], m = (ssz>>>2)-1;
        for(var i = 0; i < m; ++i) {
            if((q = __readInt32LE(sector,i*4)) === ENDOFCHAIN) break;
            fat_addrs.push(q);
        }
        sleuth_fat(__readInt32LE(sector,ssz-4),cnt - 1, sectors, ssz, fat_addrs);
    }
}

/** Follow the linked list of sectors for a given starting point */
function get_sector_list(sectors, start, fat_addrs, ssz, chkd) {
    var sl = sectors.length;
    var buf, buf_chain;
    if(!chkd) chkd = new Array(sl);
    var modulus = ssz - 1, j, jj;
    buf = [];
    buf_chain = [];
    for(j=start; j>=0;) {
        chkd[j] = true;
        buf[buf.length] = j;
        buf_chain.push(sectors[j]);
        var addr = fat_addrs[Math.floor(j*4/ssz)];
        jj = ((j*4) & modulus);
        if(ssz < 4 + jj) throw "FAT boundary crossed: " + j + " 4 "+ssz;
        j = __readInt32LE(sectors[addr], jj);
    }
    return {nodes: buf, data:__toBuffer([buf_chain])};
}

/** Chase down the sector linked lists */
function make_sector_list(sectors, dir_start, fat_addrs, ssz) {
    var sl = sectors.length, sector_list = new Array(sl);
    var chkd = new Array(sl), buf, buf_chain;
    var modulus = ssz - 1, i, j, k, jj;
    for(i=0; i < sl; ++i) {
        buf = [];
        k = (i + dir_start); if(k >= sl) k-=sl;
        if(chkd[k] === true) continue;
        buf_chain = [];
        for(j=k; j>=0;) {
            chkd[j] = true;
            buf[buf.length] = j;
            buf_chain.push(sectors[j]);
            var addr = fat_addrs[Math.floor(j*4/ssz)];
            jj = ((j*4) & modulus);
            if(ssz < 4 + jj) throw "FAT boundary crossed: " + j + " 4 "+ssz;
            j = __readInt32LE(sectors[addr], jj);
        }
        sector_list[k] = {nodes: buf, data:__toBuffer([buf_chain])};
    }
    return sector_list;
}

/* [MS-CFB] 2.6.1 Compound File Directory Entry */
function read_directory(dir_start, sector_list, sectors, Paths, nmfs, files, FileIndex) {
    var blob;
    var minifat_store = 0, pl = (Paths.length?2:0);
    var sector = sector_list[dir_start].data;
    var i = 0, namelen = 0, name, o, ctime, mtime;
    for(; i < sector.length; i+= 128) {
        blob = sector.slice(i, i+128);
        prep_blob(blob, 64);
        namelen = blob.read_shift(2);
        if(namelen === 0) continue;
        name = __utf16le(blob,0,namelen-pl);
        Paths.push(name);
        o = {
            name:  name,
            type:  blob.read_shift(1),
            color: blob.read_shift(1),
            L:     blob.read_shift(4, 'i'),
            R:     blob.read_shift(4, 'i'),
            C:     blob.read_shift(4, 'i'),
            clsid: blob.read_shift(16),
            state: blob.read_shift(4, 'i')
        };
        ctime = blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2);
        if(ctime !== 0) {
            o.ctime = ctime; o.ct = read_date(blob, blob.l-8);
        }
        mtime = blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2) + blob.read_shift(2);
        if(mtime !== 0) {
            o.mtime = mtime; o.mt = read_date(blob, blob.l-8);
        }
        o.start = blob.read_shift(4, 'i');
        o.size = blob.read_shift(4, 'i');
        if(o.type === 5) { /* root */
            minifat_store = o.start;
            if(nmfs > 0 && minifat_store !== ENDOFCHAIN) sector_list[minifat_store].name = "!StreamData";
            /*minifat_size = o.size;*/
        } else if(o.size >= 4096 /* MSCSZ */) {
            o.storage = 'fat';
            if(sector_list[o.start] === undefined) sector_list[o.start] = get_sector_list(sectors, o.start, sector_list.fat_addrs, sector_list.ssz);
            sector_list[o.start].name = o.name;
            o.content = sector_list[o.start].data.slice(0,o.size);
            prep_blob(o.content, 0);
        } else {
            o.storage = 'minifat';
            if(minifat_store !== ENDOFCHAIN && o.start !== ENDOFCHAIN) {
                o.content = sector_list[minifat_store].data.slice(o.start*MSSZ,o.start*MSSZ+o.size);
                prep_blob(o.content, 0);
            }
        }
        files[name] = o;
        FileIndex.push(o);
    }
}

function read_date(blob, offset) {
    return new Date(( ( (__readUInt32LE(blob,offset+4)/1e7)*Math.pow(2,32)+__readUInt32LE(blob,offset)/1e7 ) - 11644473600)*1000);
}

var fs;
function readFileSync(filename, options) {
    if(fs === undefined) fs = require('fs');
    return parse(fs.readFileSync(filename), options);
}

function readSync(blob, options) {
    switch(options !== undefined && options.type !== undefined ? options.type : "base64") {
        case "file": return readFileSync(blob, options);
        case "base64": return parse(s2a(Base64.decode(blob)), options);
        case "binary": return parse(s2a(blob), options);
    }
    return parse(blob);
}

/** CFB Constants */
var MSSZ = 64; /* Mini Sector Size = 1<<6 */
//var MSCSZ = 4096; /* Mini Stream Cutoff Size */
/* 2.1 Compound File Sector Numbers and Types */
var ENDOFCHAIN = -2;
/* 2.2 Compound File Header */
var HEADER_SIGNATURE = 'd0cf11e0a1b11ae1';
var HEADER_CLSID = '00000000000000000000000000000000';
var consts = {
    /* 2.1 Compund File Sector Numbers and Types */
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN: ENDOFCHAIN,
    FREESECT: -1,
    /* 2.2 Compound File Header */
    HEADER_SIGNATURE: HEADER_SIGNATURE,
    HEADER_MINOR_VERSION: '3e00',
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID: HEADER_CLSID,
    /* 2.6.1 Compound File Directory Entry */
    EntryTypes: ['unknown','storage','stream','lockbytes','property','root']
};

exports.read = readSync;
exports.parse = parse;
exports.utils = {
    ReadShift: ReadShift,
    CheckField: CheckField,
    prep_blob: prep_blob,
    bconcat: bconcat,
    consts: consts
};

return exports;
})();

if(typeof require !== 'undefined' && typeof module !== 'undefined' && typeof DO_NOT_EXPORT_CFB === 'undefined') { module.exports = CFB; }
function isval(x) { return x !== undefined && x !== null; }

function keys(o) { return Object.keys(o); }

function evert_key(obj, key) {
    var o = [], K = keys(obj);
    for(var i = 0; i !== K.length; ++i) o[obj[K[i]][key]] = K[i];
    return o;
}

function evert(obj) {
    var o = [], K = keys(obj);
    for(var i = 0; i !== K.length; ++i) o[obj[K[i]]] = K[i];
    return o;
}

function evert_num(obj) {
    var o = [], K = keys(obj);
    for(var i = 0; i !== K.length; ++i) o[obj[K[i]]] = parseInt(K[i],10);
    return o;
}

function evert_arr(obj) {
    var o = [], K = keys(obj);
    for(var i = 0; i !== K.length; ++i) {
        if(o[obj[K[i]]] == null) o[obj[K[i]]] = [];
        o[obj[K[i]]].push(K[i]);
    }
    return o;
}

/* TODO: date1904 logic */
function datenum(v, date1904) {
    if(date1904) v+=1462;
    var epoch = Date.parse(v);
    return (epoch + 2209161600000) / (24 * 60 * 60 * 1000);
}

function cc2str(arr) {
    var o = "";
    for(var i = 0; i != arr.length; ++i) o += String.fromCharCode(arr[i]);
    return o;
}

function getdata(data) {
    if(!data) return null;
    if(data.name.substr(-4) === ".bin") {
        if(data.data) return char_codes(data.data);
        if(data.asNodeBuffer && has_buf) return data.asNodeBuffer();
        if(data._data && data._data.getContent) return Array.prototype.slice.call(data._data.getContent());
    } else {
        if(data.data) return data.name.substr(-4) !== ".bin" ? debom_xml(data.data) : char_codes(data.data);
        if(data.asNodeBuffer && has_buf) return debom_xml(data.asNodeBuffer().toString('binary'));
        if(data.asBinary) return debom_xml(data.asBinary());
        if(data._data && data._data.getContent) return debom_xml(cc2str(Array.prototype.slice.call(data._data.getContent(),0)));
    }
    return null;
}

function safegetzipfile(zip, file) {
    var f = file; if(zip.files[f]) return zip.files[f];
    f = file.toLowerCase(); if(zip.files[f]) return zip.files[f];
    f = f.replace(/\//g,'\\'); if(zip.files[f]) return zip.files[f];
    return null;
}

function getzipfile(zip, file) {
    var o = safegetzipfile(zip, file);
    if(o == null) throw new Error("Cannot find file " + file + " in zip");
    return o;
}

function getzipdata(zip, file, safe) {
    if(!safe) return getdata(getzipfile(zip, file));
    if(!file) return null;
    try { return getzipdata(zip, file); } catch(e) { return null; }
}

var _fs, jszip;
if(typeof JSZip !== 'undefined') jszip = JSZip;
if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        if(has_buf && typeof jszip === 'undefined') jszip = require('js'+'zip');
        if(typeof jszip === 'undefined') jszip = require('./js'+'zip').JSZip;
        _fs = require('f'+'s');
    }
}
var attregexg=/([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g;
var tagregex=/<[^>]*>/g;
var nsregex=/<\w*:/, nsregex2 = /<(\/?)\w+:/;
function parsexmltag(tag, skip_root) {
    var z = [];
    var eq = 0, c = 0;
    for(; eq !== tag.length; ++eq) if((c = tag.charCodeAt(eq)) === 32 || c === 10 || c === 13) break;
    if(!skip_root) z[0] = tag.substr(0, eq);
    if(eq === tag.length) return z;
    var m = tag.match(attregexg), j=0, w="", v="", i=0, q="", cc="";
    if(m) for(i = 0; i != m.length; ++i) {
        cc = m[i];
        for(c=0; c != cc.length; ++c) if(cc.charCodeAt(c) === 61) break;
        q = cc.substr(0,c); v = cc.substring(c+2, cc.length-1);
        for(j=0;j!=q.length;++j) if(q.charCodeAt(j) === 58) break;
        if(j===q.length) z[q] = v;
        else z[(j===5 && q.substr(0,5)==="xmlns"?"xmlns":"")+q.substr(j+1)] = v;
    }
    return z;
}
function strip_ns(x) { return x.replace(nsregex2, "<$1"); }

var encodings = {
    '&quot;': '"',
    '&apos;': "'",
    '&gt;': '>',
    '&lt;': '<',
    '&amp;': '&'
};
var rencoding = evert(encodings);
var rencstr = "&<>'\"".split("");

// TODO: CP remap (need to read file version to determine OS)
var unescapexml = (function() {
    var encregex = /&[a-z]*;/g, coderegex = /_x([\da-fA-F]+)_/g;
    return function unescapexml(text){
        var s = text + '';
        return s.replace(encregex, function($$) { return encodings[$$]; }).replace(coderegex,function(m,c) {return String.fromCharCode(parseInt(c,16));});
    };
})();

var decregex=/[&<>'"]/g, charegex = /[\u0000-\u0008\u000b-\u001f]/g;
function escapexml(text){
    var s = text + '';
    return s.replace(decregex, function(y) { return rencoding[y]; }).replace(charegex,function(s) { return "_x" + ("000"+s.charCodeAt(0).toString(16)).substr(-4) + "_";});
}

/* TODO: handle codepages */
var xlml_fixstr = (function() {
    var entregex = /&#(\d+);/g;
    function entrepl($$,$1) { return String.fromCharCode(parseInt($1,10)); }
    return function xlml_fixstr(str) { return str.replace(entregex,entrepl); };
})();

function parsexmlbool(value, tag) {
    switch(value) {
        case '1': case 'true': case 'TRUE': return true;
        /* case '0': case 'false': case 'FALSE':*/
        default: return false;
    }
}

var utf8read = function utf8reada(orig) {
    var out = "", i = 0, c = 0, d = 0, e = 0, f = 0, w = 0;
    while (i < orig.length) {
        c = orig.charCodeAt(i++);
        if (c < 128) { out += String.fromCharCode(c); continue; }
        d = orig.charCodeAt(i++);
        if (c>191 && c<224) { out += String.fromCharCode(((c & 31) << 6) | (d & 63)); continue; }
        e = orig.charCodeAt(i++);
        if (c < 240) { out += String.fromCharCode(((c & 15) << 12) | ((d & 63) << 6) | (e & 63)); continue; }
        f = orig.charCodeAt(i++);
        w = (((c & 7) << 18) | ((d & 63) << 12) | ((e & 63) << 6) | (f & 63))-65536;
        out += String.fromCharCode(0xD800 + ((w>>>10)&1023));
        out += String.fromCharCode(0xDC00 + (w&1023));
    }
    return out;
};


if(has_buf) {
    var utf8readb = function utf8readb(data) {
        var out = new Buffer(2*data.length), w, i, j = 1, k = 0, ww=0, c;
        for(i = 0; i < data.length; i+=j) {
            j = 1;
            if((c=data.charCodeAt(i)) < 128) w = c;
            else if(c < 224) { w = (c&31)*64+(data.charCodeAt(i+1)&63); j=2; }
            else if(c < 240) { w=(c&15)*4096+(data.charCodeAt(i+1)&63)*64+(data.charCodeAt(i+2)&63); j=3; }
            else { j = 4;
                w = (c & 7)*262144+(data.charCodeAt(i+1)&63)*4096+(data.charCodeAt(i+2)&63)*64+(data.charCodeAt(i+3)&63);
                w -= 65536; ww = 0xD800 + ((w>>>10)&1023); w = 0xDC00 + (w&1023);
            }
            if(ww !== 0) { out[k++] = ww&255; out[k++] = ww>>>8; ww = 0; }
            out[k++] = w%256; out[k++] = w>>>8;
        }
        out.length = k;
        return out.toString('ucs2');
    };
    var corpus = "foo bar baz\u00e2\u0098\u0083\u00f0\u009f\u008d\u00a3";
    if(utf8read(corpus) == utf8readb(corpus)) utf8read = utf8readb;
    var utf8readc = function utf8readc(data) { return Buffer(data, 'binary').toString('utf8'); };
    if(utf8read(corpus) == utf8readc(corpus)) utf8read = utf8readc;
}

// matches <foo>...</foo> extracts content
var matchtag = (function() {
    var mtcache = {};
    return function matchtag(f,g) {
        var t = f+"|"+g;
        if(mtcache[t] !== undefined) return mtcache[t];
        return (mtcache[t] = new RegExp('<(?:\\w+:)?'+f+'(?: xml:space="preserve")?(?:[^>]*)>([^\u2603]*)</(?:\\w+:)?'+f+'>',(g||"")));
    };
})();

var vtregex = (function(){ var vt_cache = {};
    return function vt_regex(bt) {
        if(vt_cache[bt] !== undefined) return vt_cache[bt];
        return (vt_cache[bt] = new RegExp("<vt:" + bt + ">(.*?)</vt:" + bt + ">", 'g') );
};})();
var vtvregex = /<\/?vt:variant>/g, vtmregex = /<vt:([^>]*)>(.*)</;
function parseVector(data) {
    var h = parsexmltag(data);

    var matches = data.match(vtregex(h.baseType))||[];
    if(matches.length != h.size) throw "unexpected vector length " + matches.length + " != " + h.size;
    var res = [];
    matches.forEach(function(x) {
        var v = x.replace(vtvregex,"").match(vtmregex);
        res.push({v:v[2], t:v[1]});
    });
    return res;
}

var wtregex = /(^\s|\s$|\n)/;
function writetag(f,g) {return '<' + f + (g.match(wtregex)?' xml:space="preserve"' : "") + '>' + g + '</' + f + '>';}

function wxt_helper(h) { return keys(h).map(function(k) { return " " + k + '="' + h[k] + '"';}).join(""); }
function writextag(f,g,h) { return '<' + f + (isval(h) ? wxt_helper(h) : "") + (isval(g) ? (g.match(wtregex)?' xml:space="preserve"' : "") + '>' + g + '</' + f : "/") + '>';}

function write_w3cdtf(d, t) { try { return d.toISOString().replace(/\.\d*/,""); } catch(e) { if(t) throw e; } }

function write_vt(s) {
    switch(typeof s) {
        case 'string': return writextag('vt:lpwstr', s);
        case 'number': return writextag((s|0)==s?'vt:i4':'vt:r8', String(s));
        case 'boolean': return writextag('vt:bool',s?'true':'false');
    }
    if(s instanceof Date) return writextag('vt:filetime', write_w3cdtf(s));
    throw new Error("Unable to serialize " + s);
}

var XML_HEADER = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n';
var XMLNS = {
    'dc': 'http://purl.org/dc/elements/1.1/',
    'dcterms': 'http://purl.org/dc/terms/',
    'dcmitype': 'http://purl.org/dc/dcmitype/',
    'mx': 'http://schemas.microsoft.com/office/mac/excel/2008/main',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
    'sjs': 'http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties',
    'vt': 'http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes',
    'xsi': 'http://www.w3.org/2001/XMLSchema-instance',
    'xsd': 'http://www.w3.org/2001/XMLSchema'
};

XMLNS.main = [
    'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
    'http://purl.oclc.org/ooxml/spreadsheetml/main',
    'http://schemas.microsoft.com/office/excel/2006/main',
    'http://schemas.microsoft.com/office/excel/2006/2'
];

function readIEEE754(buf, idx, isLE, nl, ml) {
    if(isLE === undefined) isLE = true;
    if(!nl) nl = 8;
    if(!ml && nl === 8) ml = 52;
    var e, m, el = nl * 8 - ml - 1, eMax = (1 << el) - 1, eBias = eMax >> 1;
    var bits = -7, d = isLE ? -1 : 1, i = isLE ? (nl - 1) : 0, s = buf[idx + i];

    i += d;
    e = s & ((1 << (-bits)) - 1); s >>>= (-bits); bits += el;
    for (; bits > 0; e = e * 256 + buf[idx + i], i += d, bits -= 8);
    m = e & ((1 << (-bits)) - 1); e >>>= (-bits); bits += ml;
    for (; bits > 0; m = m * 256 + buf[idx + i], i += d, bits -= 8);
    if (e === eMax) return m ? NaN : ((s ? -1 : 1) * Infinity);
    else if (e === 0) e = 1 - eBias;
    else { m = m + Math.pow(2, ml); e = e - eBias; }
    return (s ? -1 : 1) * m * Math.pow(2, e - ml);
}

var __toBuffer, ___toBuffer;
__toBuffer = ___toBuffer = function toBuffer_(bufs) { var x = []; for(var i = 0; i < bufs[0].length; ++i) { x.push.apply(x, bufs[0][i]); } return x; };
var __utf16le, ___utf16le;
__utf16le = ___utf16le = function utf16le_(b,s,e) { var ss=[]; for(var i=s; i<e; i+=2) ss.push(String.fromCharCode(__readUInt16LE(b,i))); return ss.join(""); };
var __hexlify, ___hexlify;
__hexlify = ___hexlify = function hexlify_(b,s,l) { return b.slice(s,(s+l)).map(function(x){return (x<16?"0":"") + x.toString(16);}).join(""); };
var __utf8, ___utf8;
__utf8 = ___utf8 = function(b,s,e) { var ss=[]; for(var i=s; i<e; i++) ss.push(String.fromCharCode(__readUInt8(b,i))); return ss.join(""); };
var __lpstr, ___lpstr;
__lpstr = ___lpstr = function lpstr_(b,i) { var len = __readUInt32LE(b,i); return len > 0 ? __utf8(b, i+4,i+4+len-1) : "";};
var __lpwstr, ___lpwstr;
__lpwstr = ___lpwstr = function lpwstr_(b,i) { var len = 2*__readUInt32LE(b,i); return len > 0 ? __utf8(b, i+4,i+4+len-1) : "";};
var __double, ___double;
__double = ___double = function(b, idx) { return readIEEE754(b, idx);};

var is_buf = function is_buf_a(a) { return Array.isArray(a); };
if(has_buf) {
    __utf16le = function utf16le_b(b,s,e) { if(!Buffer.isBuffer(b)) return ___utf16le(b,s,e); return b.toString('utf16le',s,e); };
    __hexlify = function(b,s,l) { return Buffer.isBuffer(b) ? b.toString('hex',s,s+l) : ___hexlify(b,s,l); };
    __lpstr = function lpstr_b(b,i) { if(!Buffer.isBuffer(b)) return ___lpstr(b, i); var len = b.readUInt32LE(i); return len > 0 ? b.toString('utf8',i+4,i+4+len-1) : "";};
    __lpwstr = function lpwstr_b(b,i) { if(!Buffer.isBuffer(b)) return ___lpwstr(b, i); var len = 2*b.readUInt32LE(i); return b.toString('utf16le',i+4,i+4+len-1);};
    __utf8 = function utf8_b(s,e) { return this.toString('utf8',s,e); };
    __toBuffer = function(bufs) { return (bufs[0].length > 0 && Buffer.isBuffer(bufs[0][0])) ? Buffer.concat(bufs[0]) : ___toBuffer(bufs);};
    bconcat = function(bufs) { return Buffer.isBuffer(bufs[0]) ? Buffer.concat(bufs) : [].concat.apply([], bufs); };
    __double = function double_(b,i) { if(Buffer.isBuffer(b)) return b.readDoubleLE(i); return ___double(b,i); };
    is_buf = function is_buf_b(a) { return Buffer.isBuffer(a) || Array.isArray(a); };
}

/* from js-xls */
if(typeof cptable !== 'undefined') {
    __utf16le = function(b,s,e) { return cptable.utils.decode(1200, b.slice(s,e)); };
    __utf8 = function(b,s,e) { return cptable.utils.decode(65001, b.slice(s,e)); };
    __lpstr = function(b,i) { var len = __readUInt32LE(b,i); return len > 0 ? cptable.utils.decode(current_codepage, b.slice(i+4, i+4+len-1)) : "";};
    __lpwstr = function(b,i) { var len = 2*__readUInt32LE(b,i); return len > 0 ? cptable.utils.decode(1200, b.slice(i+4,i+4+len-1)) : "";};
}

var __readUInt8 = function(b, idx) { return b[idx]; };
var __readUInt16LE = function(b, idx) { return b[idx+1]*(1<<8)+b[idx]; };
var __readInt16LE = function(b, idx) { var u = b[idx+1]*(1<<8)+b[idx]; return (u < 0x8000) ? u : (0xffff - u + 1) * -1; };
var __readUInt32LE = function(b, idx) { return b[idx+3]*(1<<24)+(b[idx+2]<<16)+(b[idx+1]<<8)+b[idx]; };
var __readInt32LE = function(b, idx) { return (b[idx+3]<<24)|(b[idx+2]<<16)|(b[idx+1]<<8)|b[idx]; };

var ___unhexlify = function(s) { return s.match(/../g).map(function(x) { return parseInt(x,16);}); };
var __unhexlify = typeof Buffer !== "undefined" ? function(s) { return Buffer.isBuffer(s) ? new Buffer(s, 'hex') : ___unhexlify(s); } : ___unhexlify;

function ReadShift(size, t) {
    var o="", oI, oR, oo=[], w, vv, i, loc;
    switch(t) {
        case 'dbcs':
            loc = this.l;
            if(has_buf && Buffer.isBuffer(this)) o = this.slice(this.l, this.l+2*size).toString("utf16le");
            else for(i = 0; i != size; ++i) { o+=String.fromCharCode(__readUInt16LE(this, loc)); loc+=2; }
            size *= 2;
            break;

        case 'utf8': o = __utf8(this, this.l, this.l + size); break;
        case 'utf16le': size *= 2; o = __utf16le(this, this.l, this.l + size); break;

        /* [MS-OLEDS] 2.1.4 LengthPrefixedAnsiString */
        case 'lpstr': o = __lpstr(this, this.l); size = 5 + o.length; break;
        /* [MS-OLEDS] 2.1.5 LengthPrefixedUnicodeString */
        case 'lpwstr': o = __lpwstr(this, this.l); size = 5 + o.length; if(o[o.length-1] == '\u0000') size += 2; break;

        case 'cstr': size = 0; o = "";
            while((w=__readUInt8(this, this.l + size++))!==0) oo.push(_getchar(w));
            o = oo.join(""); break;
        case 'wstr': size = 0; o = "";
            while((w=__readUInt16LE(this,this.l +size))!==0){oo.push(_getchar(w));size+=2;}
            size+=2; o = oo.join(""); break;

        /* sbcs and dbcs support continue records in the SST way TODO codepages */
        case 'dbcs-cont': o = ""; loc = this.l;
            for(i = 0; i != size; ++i) {
                if(this.lens && this.lens.indexOf(loc) !== -1) {
                    w = __readUInt8(this, loc);
                    this.l = loc + 1;
                    vv = ReadShift.call(this, size-i, w ? 'dbcs-cont' : 'sbcs-cont');
                    return oo.join("") + vv;
                }
                oo.push(_getchar(__readUInt16LE(this, loc)));
                loc+=2;
            } o = oo.join(""); size *= 2; break;

        case 'sbcs-cont': o = ""; loc = this.l;
            for(i = 0; i != size; ++i) {
                if(this.lens && this.lens.indexOf(loc) !== -1) {
                    w = __readUInt8(this, loc);
                    this.l = loc + 1;
                    vv = ReadShift.call(this, size-i, w ? 'dbcs-cont' : 'sbcs-cont');
                    return oo.join("") + vv;
                }
                oo.push(_getchar(__readUInt8(this, loc)));
                loc+=1;
            } o = oo.join(""); break;

        default:
    switch(size) {
        case 1: oI = __readUInt8(this, this.l); this.l++; return oI;
        case 2: oI = (t === 'i' ? __readInt16LE : __readUInt16LE)(this, this.l); this.l += 2; return oI;
        case 4:
            if(t === 'i' || (this[this.l+3] & 0x80)===0) { oI = __readInt32LE(this, this.l); this.l += 4; return oI; }
            else { oR = __readUInt32LE(this, this.l); this.l += 4; return oR; } break;
        case 8: if(t === 'f') { oR = __double(this, this.l); this.l += 8; return oR; }
        /* falls through */
        case 16: o = __hexlify(this, this.l, size); break;
    }}
    this.l+=size; return o;
}

function WriteShift(t, val, f) {
    var size, i;
    if(f === 'dbcs') {
        for(i = 0; i != val.length; ++i) this.writeUInt16LE(val.charCodeAt(i), this.l + 2 * i);
        size = 2 * val.length;
    } else switch(t) {
        case  1: size = 1; this[this.l] = val&255; break;
        case  3: size = 3; this[this.l+2] = val & 255; val >>>= 8; this[this.l+1] = val&255; val >>>= 8; this[this.l] = val&255; break;
        case  4: size = 4; this.writeUInt32LE(val, this.l); break;
        case  8: size = 8; if(f === 'f') { this.writeDoubleLE(val, this.l); break; }
        /* falls through */
        case 16: break;
        case -4: size = 4; this.writeInt32LE(val, this.l); break;
    }
    this.l += size; return this;
}

function CheckField(hexstr, fld) {
    var m = __hexlify(this,this.l,hexstr.length>>1);
    if(m !== hexstr) throw fld + 'Expected ' + hexstr + ' saw ' + m;
    this.l += hexstr.length>>1;
}

function prep_blob(blob, pos) {
    blob.l = pos;
    blob.read_shift = ReadShift;
    blob.chk = CheckField;
    blob.write_shift = WriteShift;
}

function parsenoop(blob, length) { blob.l += length; }

function writenoop(blob, length) { blob.l += length; }

function new_buf(sz) {
    var o = new_raw_buf(sz);
    prep_blob(o, 0);
    return o;
}

/* [MS-XLSB] 2.1.4 Record */
function recordhopper(data, cb, opts) {
    var tmpbyte, cntbyte, length;
    prep_blob(data, data.l || 0);
    while(data.l < data.length) {
        var RT = data.read_shift(1);
        if(RT & 0x80) RT = (RT & 0x7F) + ((data.read_shift(1) & 0x7F)<<7);
        var R = XLSBRecordEnum[RT] || XLSBRecordEnum[0xFFFF];
        tmpbyte = data.read_shift(1);
        length = tmpbyte & 0x7F;
        for(cntbyte = 1; cntbyte <4 && (tmpbyte & 0x80); ++cntbyte) length += ((tmpbyte = data.read_shift(1)) & 0x7F)<<(7*cntbyte);
        var d = R.f(data, length, opts);
        if(cb(d, R, RT)) return;
    }
}

/* control buffer usage for fixed-length buffers */
function buf_array() {
    var bufs = [], blksz = 2048;
    var newblk = function ba_newblk(sz) {
        var o = new_buf(sz);
        prep_blob(o, 0);
        return o;
    };

    var curbuf = newblk(blksz);

    var endbuf = function ba_endbuf() {
        curbuf.length = curbuf.l;
        if(curbuf.length > 0) bufs.push(curbuf);
        curbuf = null;
    };

    var next = function ba_next(sz) {
        if(sz < curbuf.length - curbuf.l) return curbuf;
        endbuf();
        return (curbuf = newblk(Math.max(sz+1, blksz)));
    };

    var end = function ba_end() {
        endbuf();
        return __toBuffer([bufs]);
    };

    var push = function ba_push(buf) { endbuf(); curbuf = buf; next(blksz); };

    return { next:next, push:push, end:end, _bufs:bufs };
}

function write_record(ba, type, payload, length) {
    var t = evert_RE[type], l;
    if(!length) length = XLSBRecordEnum[t].p || (payload||[]).length || 0;
    l = 1 + (t >= 0x80 ? 1 : 0) + 1 + length;
    if(length >= 0x80) ++l; if(length >= 0x4000) ++l; if(length >= 0x200000) ++l;
    var o = ba.next(l);
    if(t <= 0x7F) o.write_shift(1, t);
    else {
        o.write_shift(1, (t & 0x7F) + 0x80);
        o.write_shift(1, (t >> 7));
    }
    for(var i = 0; i != 4; ++i) {
        if(length >= 0x80) { o.write_shift(1, (length & 0x7F)+0x80); length >>= 7; }
        else { o.write_shift(1, length); break; }
    }
    if(length > 0 && is_buf(payload)) ba.push(payload);
}
/* XLS ranges enforced */
function shift_cell_xls(cell, tgt) {
    if(tgt.s) {
        if(cell.cRel) cell.c += tgt.s.c;
        if(cell.rRel) cell.r += tgt.s.r;
    } else {
        cell.c += tgt.c;
        cell.r += tgt.r;
    }
    cell.cRel = cell.rRel = 0;
    while(cell.c >= 0x100) cell.c -= 0x100;
    while(cell.r >= 0x10000) cell.r -= 0x10000;
    return cell;
}

function shift_range_xls(cell, range) {
    cell.s = shift_cell_xls(cell.s, range.s);
    cell.e = shift_cell_xls(cell.e, range.s);
    return cell;
}

var OFFCRYPTO = {};
var make_offcrypto = function(O, _crypto) {
    var crypto;
    if(typeof _crypto !== 'undefined') crypto = _crypto;
    else if(typeof require !== 'undefined') {
        try { crypto = require('cry'+'pto'); }
        catch(e) { crypto = null; }
    }

    O.rc4 = function(key, data) {
        var S = new Array(256);
        var c = 0, i = 0, j = 0, t = 0;
        for(i = 0; i != 256; ++i) S[i] = i;
        for(i = 0; i != 256; ++i) {
            j = (j + S[i] + (key[i%key.length]).charCodeAt(0))&255;
            t = S[i]; S[i] = S[j]; S[j] = t;
        }
        i = j = 0; out = Buffer(data.length);
        for(c = 0; c != data.length; ++c) {
            i = (i + 1)&255;
            j = (j + S[i])%256;
            t = S[i]; S[i] = S[j]; S[j] = t;
            out[c] = (data[c] ^ S[(S[i]+S[j])&255]);
        }
        return out;
    };

    if(crypto) {
        O.md5 = function(hex) { return crypto.createHash('md5').update(hex).digest('hex'); };
    } else {
        O.md5 = function(hex) { throw "unimplemented"; };
    }
};
make_offcrypto(OFFCRYPTO, typeof crypto !== "undefined" ? crypto : undefined);


/* [MS-XLSB] 2.5.143 */
function parse_StrRun(data, length) {
    return { ich: data.read_shift(2), ifnt: data.read_shift(2) };
}

/* [MS-XLSB] 2.1.7.121 */
function parse_RichStr(data, length) {
    var start = data.l;
    var flags = data.read_shift(1);
    var str = parse_XLWideString(data);
    var rgsStrRun = [];
    var z = { t: str, h: str };
    if((flags & 1) !== 0) { /* fRichStr */
        /* TODO: formatted string */
        var dwSizeStrRun = data.read_shift(4);
        for(var i = 0; i != dwSizeStrRun; ++i) rgsStrRun.push(parse_StrRun(data));
        z.r = rgsStrRun;
    }
    else z.r = "<t>" + escapexml(str) + "</t>";
    if((flags & 2) !== 0) { /* fExtStr */
        /* TODO: phonetic string */
    }
    data.l = start + length;
    return z;
}
function write_RichStr(str, o) {
    /* TODO: formatted string */
    if(o == null) o = new_buf(5+2*str.t.length);
    o.write_shift(1,0);
    write_XLWideString(str.t, o);
    return o;
}

/* [MS-XLSB] 2.5.9 */
function parse_XLSBCell(data) {
    var col = data.read_shift(4);
    var iStyleRef = data.read_shift(2);
    iStyleRef += data.read_shift(1) <<16;
    var fPhShow = data.read_shift(1);
    return { c:col, iStyleRef: iStyleRef };
}
function write_XLSBCell(cell, o) {
    if(o == null) o = new_buf(8);
    o.write_shift(-4, cell.c);
    o.write_shift(3, cell.iStyleRef === undefined ? cell.iStyleRef : cell.s);
    o.write_shift(1, 0); /* fPhShow */
    return o;
}


/* [MS-XLSB] 2.5.21 */
function parse_XLSBCodeName (data, length) { return parse_XLWideString(data, length); }

/* [MS-XLSB] 2.5.166 */
function parse_XLNullableWideString(data) {
    var cchCharacters = data.read_shift(4);
    return cchCharacters === 0 || cchCharacters === 0xFFFFFFFF ? "" : data.read_shift(cchCharacters, 'dbcs');
}
function write_XLNullableWideString(data, o) {
    if(!o) o = new_buf(127);
    o.write_shift(4, data.length > 0 ? data.length : 0xFFFFFFFF);
    if(data.length > 0) o.write_shift(0, data, 'dbcs');
    return o;
}

/* [MS-XLSB] 2.5.168 */
function parse_XLWideString(data) {
    var cchCharacters = data.read_shift(4);
    return cchCharacters === 0 ? "" : data.read_shift(cchCharacters, 'dbcs');
}
function write_XLWideString(data, o) {
    if(o == null) o = new_buf(4+2*data.length);
    o.write_shift(4, data.length);
    if(data.length > 0) o.write_shift(0, data, 'dbcs');
    return o;
}

/* [MS-XLSB] 2.5.114 */
var parse_RelID = parse_XLNullableWideString;
var write_RelID = write_XLNullableWideString;


/* [MS-XLSB] 2.5.122 */
/* [MS-XLS] 2.5.217 */
function parse_RkNumber(data) {
    var b = data.slice(data.l, data.l+4);
    var fX100 = b[0] & 1, fInt = b[0] & 2;
    data.l+=4;
    b[0] &= 0xFC; // b[0] &= ~3;
    var RK = fInt === 0 ? __double([0,0,0,0,b[0],b[1],b[2],b[3]],0) : __readInt32LE(b,0)>>2;
    return fX100 ? RK/100 : RK;
}

/* [MS-XLSB] 2.5.153 */
function parse_UncheckedRfX(data) {
    var cell = {s: {}, e: {}};
    cell.s.r = data.read_shift(4);
    cell.e.r = data.read_shift(4);
    cell.s.c = data.read_shift(4);
    cell.e.c = data.read_shift(4);
    return cell;
}

function write_UncheckedRfX(r, o) {
    if(!o) o = new_buf(16);
    o.write_shift(4, r.s.r);
    o.write_shift(4, r.e.r);
    o.write_shift(4, r.s.c);
    o.write_shift(4, r.e.c);
    return o;
}

/* [MS-XLSB] 2.5.171 */
/* [MS-XLS] 2.5.342 */
function parse_Xnum(data, length) { return data.read_shift(8, 'f'); }
function write_Xnum(data, o) { return (o || new_buf(8)).write_shift(8, 'f', data); }

/* [MS-XLSB] 2.5.198.2 */
var BErr = {
    0x00: "#NULL!",
    0x07: "#DIV/0!",
    0x0F: "#VALUE!",
    0x17: "#REF!",
    0x1D: "#NAME?",
    0x24: "#NUM!",
    0x2A: "#N/A",
    0x2B: "#GETTING_DATA",
    0xFF: "#WTF?"
};
var RBErr = evert_num(BErr);

/* [MS-XLSB] 2.4.321 BrtColor */
function parse_BrtColor(data, length) {
    var out = {};
    var d = data.read_shift(1);
    out.fValidRGB = d & 1;
    out.xColorType = d >>> 1;
    out.index = data.read_shift(1);
    out.nTintAndShade = data.read_shift(2, 'i');
    out.bRed   = data.read_shift(1);
    out.bGreen = data.read_shift(1);
    out.bBlue  = data.read_shift(1);
    out.bAlpha = data.read_shift(1);
}

/* [MS-XLSB] 2.5.52 */
function parse_FontFlags(data, length) {
    var d = data.read_shift(1);
    data.l++;
    var out = {
        fItalic: d & 0x2,
        fStrikeout: d & 0x8,
        fOutline: d & 0x10,
        fShadow: d & 0x20,
        fCondense: d & 0x40,
        fExtend: d & 0x80
    };
    return out;
}
/* [MS-OLEPS] 2.2 PropertyType */
{
    var VT_EMPTY    = 0x0000;
    var VT_NULL     = 0x0001;
    var VT_I2       = 0x0002;
    var VT_I4       = 0x0003;
    var VT_R4       = 0x0004;
    var VT_R8       = 0x0005;
    var VT_CY       = 0x0006;
    var VT_DATE     = 0x0007;
    var VT_BSTR     = 0x0008;
    var VT_ERROR    = 0x000A;
    var VT_BOOL     = 0x000B;
    var VT_VARIANT  = 0x000C;
    var VT_DECIMAL  = 0x000E;
    var VT_I1       = 0x0010;
    var VT_UI1      = 0x0011;
    var VT_UI2      = 0x0012;
    var VT_UI4      = 0x0013;
    var VT_I8       = 0x0014;
    var VT_UI8      = 0x0015;
    var VT_INT      = 0x0016;
    var VT_UINT     = 0x0017;
    var VT_LPSTR    = 0x001E;
    var VT_LPWSTR   = 0x001F;
    var VT_FILETIME = 0x0040;
    var VT_BLOB     = 0x0041;
    var VT_STREAM   = 0x0042;
    var VT_STORAGE  = 0x0043;
    var VT_STREAMED_Object  = 0x0044;
    var VT_STORED_Object    = 0x0045;
    var VT_BLOB_Object      = 0x0046;
    var VT_CF       = 0x0047;
    var VT_CLSID    = 0x0048;
    var VT_VERSIONED_STREAM = 0x0049;
    var VT_VECTOR   = 0x1000;
    var VT_ARRAY    = 0x2000;

    var VT_STRING   = 0x0050; // 2.3.3.1.11 VtString
    var VT_USTR     = 0x0051; // 2.3.3.1.12 VtUnalignedString
    var VT_CUSTOM   = [VT_STRING, VT_USTR];
}

/* [MS-OSHARED] 2.3.3.2.2.1 Document Summary Information PIDDSI */
var DocSummaryPIDDSI = {
    0x01: { n: 'CodePage', t: VT_I2 },
    0x02: { n: 'Category', t: VT_STRING },
    0x03: { n: 'PresentationFormat', t: VT_STRING },
    0x04: { n: 'ByteCount', t: VT_I4 },
    0x05: { n: 'LineCount', t: VT_I4 },
    0x06: { n: 'ParagraphCount', t: VT_I4 },
    0x07: { n: 'SlideCount', t: VT_I4 },
    0x08: { n: 'NoteCount', t: VT_I4 },
    0x09: { n: 'HiddenCount', t: VT_I4 },
    0x0a: { n: 'MultimediaClipCount', t: VT_I4 },
    0x0b: { n: 'Scale', t: VT_BOOL },
    0x0c: { n: 'HeadingPair', t: VT_VECTOR | VT_VARIANT },
    0x0d: { n: 'DocParts', t: VT_VECTOR | VT_LPSTR },
    0x0e: { n: 'Manager', t: VT_STRING },
    0x0f: { n: 'Company', t: VT_STRING },
    0x10: { n: 'LinksDirty', t: VT_BOOL },
    0x11: { n: 'CharacterCount', t: VT_I4 },
    0x13: { n: 'SharedDoc', t: VT_BOOL },
    0x16: { n: 'HLinksChanged', t: VT_BOOL },
    0x17: { n: 'AppVersion', t: VT_I4, p: 'version' },
    0x1A: { n: 'ContentType', t: VT_STRING },
    0x1B: { n: 'ContentStatus', t: VT_STRING },
    0x1C: { n: 'Language', t: VT_STRING },
    0x1D: { n: 'Version', t: VT_STRING },
    0xFF: {}
};

/* [MS-OSHARED] 2.3.3.2.1.1 Summary Information Property Set PIDSI */
var SummaryPIDSI = {
    0x01: { n: 'CodePage', t: VT_I2 },
    0x02: { n: 'Title', t: VT_STRING },
    0x03: { n: 'Subject', t: VT_STRING },
    0x04: { n: 'Author', t: VT_STRING },
    0x05: { n: 'Keywords', t: VT_STRING },
    0x06: { n: 'Comments', t: VT_STRING },
    0x07: { n: 'Template', t: VT_STRING },
    0x08: { n: 'LastAuthor', t: VT_STRING },
    0x09: { n: 'RevNumber', t: VT_STRING },
    0x0A: { n: 'EditTime', t: VT_FILETIME },
    0x0B: { n: 'LastPrinted', t: VT_FILETIME },
    0x0C: { n: 'CreatedDate', t: VT_FILETIME },
    0x0D: { n: 'ModifiedDate', t: VT_FILETIME },
    0x0E: { n: 'PageCount', t: VT_I4 },
    0x0F: { n: 'WordCount', t: VT_I4 },
    0x10: { n: 'CharCount', t: VT_I4 },
    0x11: { n: 'Thumbnail', t: VT_CF },
    0x12: { n: 'ApplicationName', t: VT_LPSTR },
    0x13: { n: 'DocumentSecurity', t: VT_I4 },
    0xFF: {}
};

/* [MS-OLEPS] 2.18 */
var SpecialProperties = {
    0x80000000: { n: 'Locale', t: VT_UI4 },
    0x80000003: { n: 'Behavior', t: VT_UI4 },
    0x72627262: {}
};

(function() {
    for(var y in SpecialProperties) if(SpecialProperties.hasOwnProperty(y))
    DocSummaryPIDDSI[y] = SummaryPIDSI[y] = SpecialProperties[y];
})();

/* [MS-XLS] 2.4.63 Country/Region codes */
var CountryEnum = {
    0x0001: "US", // United States
    0x0002: "CA", // Canada
    0x0003: "", // Latin America (except Brazil)
    0x0007: "RU", // Russia
    0x0014: "EG", // Egypt
    0x001E: "GR", // Greece
    0x001F: "NL", // Netherlands
    0x0020: "BE", // Belgium
    0x0021: "FR", // France
    0x0022: "ES", // Spain
    0x0024: "HU", // Hungary
    0x0027: "IT", // Italy
    0x0029: "CH", // Switzerland
    0x002B: "AT", // Austria
    0x002C: "GB", // United Kingdom
    0x002D: "DK", // Denmark
    0x002E: "SE", // Sweden
    0x002F: "NO", // Norway
    0x0030: "PL", // Poland
    0x0031: "DE", // Germany
    0x0034: "MX", // Mexico
    0x0037: "BR", // Brazil
    0x003d: "AU", // Australia
    0x0040: "NZ", // New Zealand
    0x0042: "TH", // Thailand
    0x0051: "JP", // Japan
    0x0052: "KR", // Korea
    0x0054: "VN", // Viet Nam
    0x0056: "CN", // China
    0x005A: "TR", // Turkey
    0x0069: "JS", // Ramastan
    0x00D5: "DZ", // Algeria
    0x00D8: "MA", // Morocco
    0x00DA: "LY", // Libya
    0x015F: "PT", // Portugal
    0x0162: "IS", // Iceland
    0x0166: "FI", // Finland
    0x01A4: "CZ", // Czech Republic
    0x0376: "TW", // Taiwan
    0x03C1: "LB", // Lebanon
    0x03C2: "JO", // Jordan
    0x03C3: "SY", // Syria
    0x03C4: "IQ", // Iraq
    0x03C5: "KW", // Kuwait
    0x03C6: "SA", // Saudi Arabia
    0x03CB: "AE", // United Arab Emirates
    0x03CC: "IL", // Israel
    0x03CE: "QA", // Qatar
    0x03D5: "IR", // Iran
    0xFFFF: "US"  // United States
};

/* [MS-XLS] 2.5.127 */
var XLSFillPattern = [
    null,
    'solid',
    'mediumGray',
    'darkGray',
    'lightGray',
    'darkHorizontal',
    'darkVertical',
    'darkDown',
    'darkUp',
    'darkGrid',
    'darkTrellis',
    'lightHorizontal',
    'lightVertical',
    'lightDown',
    'lightUp',
    'lightGrid',
    'lightTrellis',
    'gray125',
    'gray0625'
];

function rgbify(arr) { return arr.map(function(x) { return [(x>>16)&255,(x>>8)&255,x&255]; }); }

/* [MS-XLS] 2.5.161 */
var XLSIcv = rgbify([
    /* Color Constants */
    0x000000,
    0xFFFFFF,
    0xFF0000,
    0x00FF00,
    0x0000FF,
    0xFFFF00,
    0xFF00FF,
    0x00FFFF,

    /* Defaults */
    0x000000,
    0xFFFFFF,
    0xFF0000,
    0x00FF00,
    0x0000FF,
    0xFFFF00,
    0xFF00FF,
    0x00FFFF,

    0x800000,
    0x008000,
    0x000080,
    0x808000,
    0x800080,
    0x008080,
    0xC0C0C0,
    0x808080,
    0x9999FF,
    0x993366,
    0xFFFFCC,
    0xCCFFFF,
    0x660066,
    0xFF8080,
    0x0066CC,
    0xCCCCFF,

    0x000080,
    0xFF00FF,
    0xFFFF00,
    0x00FFFF,
    0x800080,
    0x800000,
    0x008080,
    0x0000FF,
    0x00CCFF,
    0xCCFFFF,
    0xCCFFCC,
    0xFFFF99,
    0x99CCFF,
    0xFF99CC,
    0xCC99FF,
    0xFFCC99,

    0x3366FF,
    0x33CCCC,
    0x99CC00,
    0xFFCC00,
    0xFF9900,
    0xFF6600,
    0x666699,
    0x969696,
    0x003366,
    0x339966,
    0x003300,
    0x333300,
    0x993300,
    0x993366,
    0x333399,
    0x333333,

    /* Sheet */
    0xFFFFFF,
    0x000000
]);

/* Parts enumerated in OPC spec, MS-XLSB and MS-XLSX */
/* 12.3 Part Summary <SpreadsheetML> */
/* 14.2 Part Summary <DrawingML> */
/* [MS-XLSX] 2.1 Part Enumerations */
/* [MS-XLSB] 2.1.7 Part Enumeration */
var ct2type = {
    /* Workbook */
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",

    /* Worksheet */
    "application/vnd.ms-excel.binIndexWs": "TODO", /* Binary Index */

    /* Chartsheet */
    "application/vnd.ms-excel.chartsheet": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "TODO",

    /* Dialogsheet */
    "application/vnd.ms-excel.dialogsheet": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "TODO",

    /* Macrosheet */
    "application/vnd.ms-excel.macrosheet": "TODO",
    "application/vnd.ms-excel.macrosheet+xml": "TODO",
    "application/vnd.ms-excel.intlmacrosheet": "TODO",
    "application/vnd.ms-excel.binIndexMs": "TODO", /* Binary Index */

    /* File Properties */
    "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
    "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
    "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",

    /* Custom Data Properties */
    "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",

    /* Comments */
    "application/vnd.ms-excel.comments": "comments",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",

    /* PivotTable */
    "application/vnd.ms-excel.pivotTable": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",

    /* Calculation Chain */
    "application/vnd.ms-excel.calcChain": "calcchains",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",

    /* Printer Settings */
    "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",

    /* ActiveX */
    "application/vnd.ms-office.activeX": "TODO",
    "application/vnd.ms-office.activeX+xml": "TODO",

    /* Custom Toolbars */
    "application/vnd.ms-excel.attachedToolbars": "TODO",

    /* External Data Connections */
    "application/vnd.ms-excel.connections": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",

    /* External Links */
    "application/vnd.ms-excel.externalLink": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "TODO",

    /* Metadata */
    "application/vnd.ms-excel.sheetMetadata": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "TODO",

    /* PivotCache */
    "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
    "application/vnd.ms-excel.pivotCacheRecords": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",

    /* Query Table */
    "application/vnd.ms-excel.queryTable": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",

    /* Shared Workbook */
    "application/vnd.ms-excel.userNames": "TODO",
    "application/vnd.ms-excel.revisionHeaders": "TODO",
    "application/vnd.ms-excel.revisionLog": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",

    /* Single Cell Table */
    "application/vnd.ms-excel.tableSingleCells": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",

    /* Slicer */
    "application/vnd.ms-excel.slicer": "TODO",
    "application/vnd.ms-excel.slicerCache": "TODO",
    "application/vnd.ms-excel.slicer+xml": "TODO",
    "application/vnd.ms-excel.slicerCache+xml": "TODO",

    /* Sort Map */
    "application/vnd.ms-excel.wsSortMap": "TODO",

    /* Table */
    "application/vnd.ms-excel.table": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",

    /* Themes */
    "application/vnd.openxmlformats-officedocument.theme+xml": "themes",

    /* Timeline */
    "application/vnd.ms-excel.Timeline+xml": "TODO", /* verify */
    "application/vnd.ms-excel.TimelineCache+xml": "TODO", /* verify */

    /* VBA */
    "application/vnd.ms-office.vbaProject": "vba",
    "application/vnd.ms-office.vbaProjectSignature": "vba",

    /* Volatile Dependencies */
    "application/vnd.ms-office.volatileDependencies": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",

    /* Control Properties */
    "application/vnd.ms-excel.controlproperties+xml": "TODO",

    /* Data Model */
    "application/vnd.openxmlformats-officedocument.model+data": "TODO",

    /* Survey */
    "application/vnd.ms-excel.Survey+xml": "TODO",

    /* Drawing */
    "application/vnd.openxmlformats-officedocument.drawing+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",

    /* VML */
    "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",

    "application/vnd.openxmlformats-package.relationships+xml": "rels",
    "application/vnd.openxmlformats-officedocument.oleObject": "TODO",

    "sheet": "js"
};

var CT_LIST = (function(){
    var o = {
        workbooks: {
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
            xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
            xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
            xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
        },
        strs: { /* Shared Strings */
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
            xlsb: "application/vnd.ms-excel.sharedStrings"
        },
        sheets: {
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
            xlsb: "application/vnd.ms-excel.worksheet"
        },
        styles: {/* Styles */
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
            xlsb: "application/vnd.ms-excel.styles"
        }
    };
    keys(o).forEach(function(k) { if(!o[k].xlsm) o[k].xlsm = o[k].xlsx; });
    keys(o).forEach(function(k){ keys(o[k]).forEach(function(v) { ct2type[o[k][v]] = k; }); });
    return o;
})();

var type2ct = evert_arr(ct2type);

XMLNS.CT = 'http://schemas.openxmlformats.org/package/2006/content-types';

function parse_ct(data, opts) {
    var ctext = {};
    if(!data || !data.match) return data;
    var ct = { workbooks: [], sheets: [], calcchains: [], themes: [], styles: [],
        coreprops: [], extprops: [], custprops: [], strs:[], comments: [], vba: [],
        TODO:[], rels:[], xmlns: "" };
    (data.match(tagregex)||[]).forEach(function(x) {
        var y = parsexmltag(x);
        switch(y[0].replace(nsregex,"<")) {
            case '<?xml': break;
            case '<Types': ct.xmlns = y['xmlns' + (y[0].match(/<(\w+):/)||["",""])[1] ]; break;
            case '<Default': ctext[y.Extension] = y.ContentType; break;
            case '<Override':
                if(ct[ct2type[y.ContentType]] !== undefined) ct[ct2type[y.ContentType]].push(y.PartName);
                else if(opts.WTF) console.error(y);
                break;
        }
    });
    if(ct.xmlns !== XMLNS.CT) throw new Error("Unknown Namespace: " + ct.xmlns);
    ct.calcchain = ct.calcchains.length > 0 ? ct.calcchains[0] : "";
    ct.sst = ct.strs.length > 0 ? ct.strs[0] : "";
    ct.style = ct.styles.length > 0 ? ct.styles[0] : "";
    ct.defaults = ctext;
    delete ct.calcchains;
    return ct;
}

var CTYPE_XML_ROOT = writextag('Types', null, {
    'xmlns': XMLNS.CT,
    'xmlns:xsd': XMLNS.xsd,
    'xmlns:xsi': XMLNS.xsi
});

var CTYPE_DEFAULTS = [
    ['xml', 'application/xml'],
    ['bin', 'application/vnd.ms-excel.sheet.binary.macroEnabled.main'],
    ['rels', type2ct.rels[0]]
].map(function(x) {
    return writextag('Default', null, {'Extension':x[0], 'ContentType': x[1]});
});

function write_ct(ct, opts) {
    var o = [], v;
    o[o.length] = (XML_HEADER);
    o[o.length] = (CTYPE_XML_ROOT);
    o = o.concat(CTYPE_DEFAULTS);
    var f1 = function(w) {
        if(ct[w] && ct[w].length > 0) {
            v = ct[w][0];
            o[o.length] = (writextag('Override', null, {
                'PartName': (v[0] == '/' ? "":"/") + v,
                'ContentType': CT_LIST[w][opts.bookType || 'xlsx']
            }));
        }
    };
    var f2 = function(w) {
        ct[w].forEach(function(v) {
            o[o.length] = (writextag('Override', null, {
                'PartName': (v[0] == '/' ? "":"/") + v,
                'ContentType': CT_LIST[w][opts.bookType || 'xlsx']
            }));
        });
    };
    var f3 = function(t) {
        (ct[t]||[]).forEach(function(v) {
            o[o.length] = (writextag('Override', null, {
                'PartName': (v[0] == '/' ? "":"/") + v,
                'ContentType': type2ct[t][0]
            }));
        });
    };
    f1('workbooks');
    f2('sheets');
    f3('themes');
    ['strs', 'styles'].forEach(f1);
    ['coreprops', 'extprops', 'custprops'].forEach(f3);
    if(o.length>2){ o[o.length] = ('</Types>'); o[1]=o[1].replace("/>",">"); }
    return o.join("");
}
/* 9.3.2 OPC Relationships Markup */
var RELS = {
    WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
    SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument"
};

function parse_rels(data, currentFilePath) {
    if (!data) return data;
    if (currentFilePath.charAt(0) !== '/') {
        currentFilePath = '/'+currentFilePath;
    }
    var rels = {};
    var hash = {};
    var resolveRelativePathIntoAbsolute = function (to) {
        var toksFrom = currentFilePath.split('/');
        toksFrom.pop(); // folder path
        var toksTo = to.split('/');
        var reversed = [];
        while (toksTo.length !== 0) {
            var tokTo = toksTo.shift();
            if (tokTo === '..') {
                toksFrom.pop();
            } else if (tokTo !== '.') {
                toksFrom.push(tokTo);
            }
        }
        return toksFrom.join('/');
    };

    data.match(tagregex).forEach(function(x) {
        var y = parsexmltag(x);
        /* 9.3.2.2 OPC_Relationships */
        if (y[0] === '<Relationship') {
            var rel = {}; rel.Type = y.Type; rel.Target = y.Target; rel.Id = y.Id; rel.TargetMode = y.TargetMode;
            var canonictarget = y.TargetMode === 'External' ? y.Target : resolveRelativePathIntoAbsolute(y.Target);
            rels[canonictarget] = rel;
            hash[y.Id] = rel;
        }
    });
    rels["!id"] = hash;
    return rels;
}

XMLNS.RELS = 'http://schemas.openxmlformats.org/package/2006/relationships';

var RELS_ROOT = writextag('Relationships', null, {
    //'xmlns:ns0': XMLNS.RELS,
    'xmlns': XMLNS.RELS
});

/* TODO */
function write_rels(rels) {
    var o = [];
    o[o.length] = (XML_HEADER);
    o[o.length] = (RELS_ROOT);
    keys(rels['!id']).forEach(function(rid) { var rel = rels['!id'][rid];
        o[o.length] = (writextag('Relationship', null, rel));
    });
    if(o.length>2){ o[o.length] = ('</Relationships>'); o[1]=o[1].replace("/>",">"); }
    return o.join("");
}
/* ECMA-376 Part II 11.1 Core Properties Part */
/* [MS-OSHARED] 2.3.3.2.[1-2].1 (PIDSI/PIDDSI) */
var CORE_PROPS = [
    ["cp:category", "Category"],
    ["cp:contentStatus", "ContentStatus"],
    ["cp:keywords", "Keywords"],
    ["cp:lastModifiedBy", "LastAuthor"],
    ["cp:lastPrinted", "LastPrinted"],
    ["cp:revision", "RevNumber"],
    ["cp:version", "Version"],
    ["dc:creator", "Author"],
    ["dc:description", "Comments"],
    ["dc:identifier", "Identifier"],
    ["dc:language", "Language"],
    ["dc:subject", "Subject"],
    ["dc:title", "Title"],
    ["dcterms:created", "CreatedDate", 'date'],
    ["dcterms:modified", "ModifiedDate", 'date']
];

XMLNS.CORE_PROPS = "http://schemas.openxmlformats.org/package/2006/metadata/core-properties";
RELS.CORE_PROPS  = 'http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties';

var CORE_PROPS_REGEX = (function() {
    var r = new Array(CORE_PROPS.length);
    for(var i = 0; i < CORE_PROPS.length; ++i) {
        var f = CORE_PROPS[i];
        var g = "(?:"+ f[0].substr(0,f[0].indexOf(":")) +":)"+ f[0].substr(f[0].indexOf(":")+1);
        r[i] = new RegExp("<" + g + "[^>]*>(.*)<\/" + g + ">");
    }
    return r;
})();

function parse_core_props(data) {
    var p = {};

    for(var i = 0; i < CORE_PROPS.length; ++i) {
        var f = CORE_PROPS[i], cur = data.match(CORE_PROPS_REGEX[i]);
        if(cur != null && cur.length > 0) p[f[1]] = cur[1];
        if(f[2] === 'date' && p[f[1]]) p[f[1]] = new Date(p[f[1]]);
    }

    return p;
}

var CORE_PROPS_XML_ROOT = writextag('cp:coreProperties', null, {
    //'xmlns': XMLNS.CORE_PROPS,
    'xmlns:cp': XMLNS.CORE_PROPS,
    'xmlns:dc': XMLNS.dc,
    'xmlns:dcterms': XMLNS.dcterms,
    'xmlns:dcmitype': XMLNS.dcmitype,
    'xmlns:xsi': XMLNS.xsi
});

function cp_doit(f, g, h, o, p) {
    if(p[f] != null || g == null || g === "") return;
    p[f] = g;
    o[o.length] = (h ? writextag(f,g,h) : writetag(f,g));
}

function write_core_props(cp, opts) {
    var o = [XML_HEADER, CORE_PROPS_XML_ROOT], p = {};
    if(!cp) return o.join("");


    if(cp.CreatedDate != null) cp_doit("dcterms:created", typeof cp.CreatedDate === "string" ? cp.CreatedDate : write_w3cdtf(cp.CreatedDate, opts.WTF), {"xsi:type":"dcterms:W3CDTF"}, o, p);
    if(cp.ModifiedDate != null) cp_doit("dcterms:modified", typeof cp.ModifiedDate === "string" ? cp.ModifiedDate : write_w3cdtf(cp.ModifiedDate, opts.WTF), {"xsi:type":"dcterms:W3CDTF"}, o, p);

    for(var i = 0; i != CORE_PROPS.length; ++i) { var f = CORE_PROPS[i]; cp_doit(f[0], cp[f[1]], null, o, p); }
    if(o.length>2){ o[o.length] = ('</cp:coreProperties>'); o[1]=o[1].replace("/>",">"); }
    return o.join("");
}
/* 15.2.12.3 Extended File Properties Part */
/* [MS-OSHARED] 2.3.3.2.[1-2].1 (PIDSI/PIDDSI) */
var EXT_PROPS = [
    ["Application", "Application", "string"],
    ["AppVersion", "AppVersion", "string"],
    ["Company", "Company", "string"],
    ["DocSecurity", "DocSecurity", "string"],
    ["Manager", "Manager", "string"],
    ["HyperlinksChanged", "HyperlinksChanged", "bool"],
    ["SharedDoc", "SharedDoc", "bool"],
    ["LinksUpToDate", "LinksUpToDate", "bool"],
    ["ScaleCrop", "ScaleCrop", "bool"],
    ["HeadingPairs", "HeadingPairs", "raw"],
    ["TitlesOfParts", "TitlesOfParts", "raw"]
];

XMLNS.EXT_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties";
RELS.EXT_PROPS  = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties';

function parse_ext_props(data, p) {
    var q = {}; if(!p) p = {};

    EXT_PROPS.forEach(function(f) {
        switch(f[2]) {
            case "string": p[f[1]] = (data.match(matchtag(f[0]))||[])[1]; break;
            case "bool": p[f[1]] = (data.match(matchtag(f[0]))||[])[1] === "true"; break;
            case "raw":
                var cur = data.match(new RegExp("<" + f[0] + "[^>]*>(.*)<\/" + f[0] + ">"));
                if(cur && cur.length > 0) q[f[1]] = cur[1];
                break;
        }
    });

    if(q.HeadingPairs && q.TitlesOfParts) {
        var v = parseVector(q.HeadingPairs);
        var j = 0, widx = 0;
        for(var i = 0; i !== v.length; ++i) {
            switch(v[i].v) {
                case "Worksheets": widx = j; p.Worksheets = +(v[++i].v); break;
                case "Named Ranges": ++i; break; // TODO: Handle Named Ranges
            }
        }
        var parts = parseVector(q.TitlesOfParts).map(function(x) { return utf8read(x.v); });
        p.SheetNames = parts.slice(widx, widx + p.Worksheets);
    }
    return p;
}

var EXT_PROPS_XML_ROOT = writextag('Properties', null, {
    'xmlns': XMLNS.EXT_PROPS,
    'xmlns:vt': XMLNS.vt
});

function write_ext_props(cp, opts) {
    var o = [], p = {}, W = writextag;
    if(!cp) cp = {};
    cp.Application = "SheetJS";
    o[o.length] = (XML_HEADER);
    o[o.length] = (EXT_PROPS_XML_ROOT);

    EXT_PROPS.forEach(function(f) {
        if(cp[f[1]] === undefined) return;
        var v;
        switch(f[2]) {
            case 'string': v = cp[f[1]]; break;
            case 'bool': v = cp[f[1]] ? 'true' : 'false'; break;
        }
        if(v !== undefined) o[o.length] = (W(f[0], v));
    });

    /* TODO: HeadingPairs, TitlesOfParts */
    o[o.length] = (W('HeadingPairs', W('vt:vector', W('vt:variant', '<vt:lpstr>Worksheets</vt:lpstr>')+W('vt:variant', W('vt:i4', String(cp.Worksheets))), {size:2, baseType:"variant"})));
    o[o.length] = (W('TitlesOfParts', W('vt:vector', cp.SheetNames.map(function(s) { return "<vt:lpstr>" + s + "</vt:lpstr>"; }).join(""), {size: cp.Worksheets, baseType:"lpstr"})));
    if(o.length>2){ o[o.length] = ('</Properties>'); o[1]=o[1].replace("/>",">"); }
    return o.join("");
}
/* 15.2.12.2 Custom File Properties Part */
XMLNS.CUST_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties";
RELS.CUST_PROPS  = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties';

var custregex = /<[^>]+>[^<]*/g;
function parse_cust_props(data, opts) {
    var p = {}, name;
    var m = data.match(custregex);
    if(m) for(var i = 0; i != m.length; ++i) {
        var x = m[i], y = parsexmltag(x);
        switch(y[0]) {
            case '<?xml': break;
            case '<Properties':
                if(y.xmlns !== XMLNS.CUST_PROPS) throw "unrecognized xmlns " + y.xmlns;
                if(y.xmlnsvt && y.xmlnsvt !== XMLNS.vt) throw "unrecognized vt " + y.xmlnsvt;
                break;
            case '<property': name = y.name; break;
            case '</property>': name = null; break;
            default: if (x.indexOf('<vt:') === 0) {
                var toks = x.split('>');
                var type = toks[0].substring(4), text = toks[1];
                /* 22.4.2.32 (CT_Variant). Omit the binary types from 22.4 (Variant Types) */
                switch(type) {
                    case 'lpstr': case 'lpwstr': case 'bstr': case 'lpwstr':
                        p[name] = unescapexml(text);
                        break;
                    case 'bool':
                        p[name] = parsexmlbool(text, '<vt:bool>');
                        break;
                    case 'i1': case 'i2': case 'i4': case 'i8': case 'int': case 'uint':
                        p[name] = parseInt(text, 10);
                        break;
                    case 'r4': case 'r8': case 'decimal':
                        p[name] = parseFloat(text);
                        break;
                    case 'filetime': case 'date':
                        p[name] = new Date(text);
                        break;
                    case 'cy': case 'error':
                        p[name] = unescapexml(text);
                        break;
                    default:
                        if(typeof console !== 'undefined') console.warn('Unexpected', x, type, toks);
                }
            } else if(x.substr(0,2) === "</") {
            } else if(opts.WTF) throw new Error(x);
        }
    }
    return p;
}

var CUST_PROPS_XML_ROOT = writextag('Properties', null, {
    'xmlns': XMLNS.CUST_PROPS,
    'xmlns:vt': XMLNS.vt
});

function write_cust_props(cp, opts) {
    var o = [XML_HEADER, CUST_PROPS_XML_ROOT];
    if(!cp) return o.join("");
    var pid = 1;
    keys(cp).forEach(function custprop(k) { ++pid;
        o[o.length] = (writextag('property', write_vt(cp[k]), {
            'fmtid': '{D5CDD505-2E9C-101B-9397-08002B2CF9AE}',
            'pid': pid,
            'name': k
        }));
    });
    if(o.length>2){ o[o.length] = '</Properties>'; o[1]=o[1].replace("/>",">"); }
    return o.join("");
}
function xlml_set_prop(Props, tag, val) {
    /* TODO: Normalize the properties */
    switch(tag) {
        case 'Description': tag = 'Comments'; break;
    }
    Props[tag] = val;
}

/* [MS-DTYP] 2.3.3 FILETIME */
/* [MS-OLEDS] 2.1.3 FILETIME (Packet Version) */
/* [MS-OLEPS] 2.8 FILETIME (Packet Version) */
function parse_FILETIME(blob) {
    var dwLowDateTime = blob.read_shift(4), dwHighDateTime = blob.read_shift(4);
    return new Date(((dwHighDateTime/1e7*Math.pow(2,32) + dwLowDateTime/1e7) - 11644473600)*1000).toISOString().replace(/\.000/,"");
}

/* [MS-OSHARED] 2.3.3.1.4 Lpstr */
function parse_lpstr(blob, type, pad) {
    var str = blob.read_shift(0, 'lpstr');
    if(pad) blob.l += (4 - ((str.length+1) & 3)) & 3;
    return str;
}

/* [MS-OSHARED] 2.3.3.1.6 Lpwstr */
function parse_lpwstr(blob, type, pad) {
    var str = blob.read_shift(0, 'lpwstr');
    if(pad) blob.l += (4 - ((str.length+1) & 3)) & 3;
    return str;
}


/* [MS-OSHARED] 2.3.3.1.11 VtString */
/* [MS-OSHARED] 2.3.3.1.12 VtUnalignedString */
function parse_VtStringBase(blob, stringType, pad) {
    if(stringType === 0x1F /*VT_LPWSTR*/) return parse_lpwstr(blob);
    return parse_lpstr(blob, stringType, pad);
}

function parse_VtString(blob, t, pad) { return parse_VtStringBase(blob, t, pad === false ? 0: 4); }
function parse_VtUnalignedString(blob, t) { if(!t) throw new Error("dafuq?"); return parse_VtStringBase(blob, t, 0); }

/* [MS-OSHARED] 2.3.3.1.9 VtVecUnalignedLpstrValue */
function parse_VtVecUnalignedLpstrValue(blob) {
    var length = blob.read_shift(4);
    var ret = [];
    for(var i = 0; i != length; ++i) ret[i] = blob.read_shift(0, 'lpstr');
    return ret;
}

/* [MS-OSHARED] 2.3.3.1.10 VtVecUnalignedLpstr */
function parse_VtVecUnalignedLpstr(blob) {
    return parse_VtVecUnalignedLpstrValue(blob);
}

/* [MS-OSHARED] 2.3.3.1.13 VtHeadingPair */
function parse_VtHeadingPair(blob) {
    var headingString = parse_TypedPropertyValue(blob, VT_USTR);
    var headerParts = parse_TypedPropertyValue(blob, VT_I4);
    return [headingString, headerParts];
}

/* [MS-OSHARED] 2.3.3.1.14 VtVecHeadingPairValue */
function parse_VtVecHeadingPairValue(blob) {
    var cElements = blob.read_shift(4);
    var out = [];
    for(var i = 0; i != cElements / 2; ++i) out.push(parse_VtHeadingPair(blob));
    return out;
}

/* [MS-OSHARED] 2.3.3.1.15 VtVecHeadingPair */
function parse_VtVecHeadingPair(blob) {
    // NOTE: When invoked, wType & padding were already consumed
    return parse_VtVecHeadingPairValue(blob);
}

/* [MS-OLEPS] 2.18.1 Dictionary (uses 2.17, 2.16) */
function parse_dictionary(blob,CodePage) {
    var cnt = blob.read_shift(4);
    var dict = {};
    for(var j = 0; j != cnt; ++j) {
        var pid = blob.read_shift(4);
        var len = blob.read_shift(4);
        dict[pid] = blob.read_shift(len, (CodePage === 0x4B0 ?'utf16le':'utf8')).replace(chr0,'').replace(chr1,'!');
    }
    if(blob.l & 3) blob.l = (blob.l>>2+1)<<2;
    return dict;
}

/* [MS-OLEPS] 2.9 BLOB */
function parse_BLOB(blob) {
    var size = blob.read_shift(4);
    var bytes = blob.slice(blob.l,blob.l+size);
    if(size & 3 > 0) blob.l += (4 - (size & 3)) & 3;
    return bytes;
}

/* [MS-OLEPS] 2.11 ClipboardData */
function parse_ClipboardData(blob) {
    // TODO
    var o = {};
    o.Size = blob.read_shift(4);
    //o.Format = blob.read_shift(4);
    blob.l += o.Size;
    return o;
}

/* [MS-OLEPS] 2.14 Vector and Array Property Types */
function parse_VtVector(blob, cb) {
    /* [MS-OLEPS] 2.14.2 VectorHeader */
/*  var Length = blob.read_shift(4);
    var o = [];
    for(var i = 0; i != Length; ++i) {
        o.push(cb(blob));
    }
    return o;*/
}

/* [MS-OLEPS] 2.15 TypedPropertyValue */
function parse_TypedPropertyValue(blob, type, _opts) {
    var t = blob.read_shift(2), ret, opts = _opts||{};
    blob.l += 2;
    if(type !== VT_VARIANT)
    if(t !== type && VT_CUSTOM.indexOf(type)===-1) throw new Error('Expected type ' + type + ' saw ' + t);
    switch(type === VT_VARIANT ? t : type) {
        case 0x02 /*VT_I2*/: ret = blob.read_shift(2, 'i'); if(!opts.raw) blob.l += 2; return ret;
        case 0x03 /*VT_I4*/: ret = blob.read_shift(4, 'i'); return ret;
        case 0x0B /*VT_BOOL*/: return blob.read_shift(4) !== 0x0;
        case 0x13 /*VT_UI4*/: ret = blob.read_shift(4); return ret;
        case 0x1E /*VT_LPSTR*/: return parse_lpstr(blob, t, 4).replace(chr0,'');
        case 0x1F /*VT_LPWSTR*/: return parse_lpwstr(blob);
        case 0x40 /*VT_FILETIME*/: return parse_FILETIME(blob);
        case 0x41 /*VT_BLOB*/: return parse_BLOB(blob);
        case 0x47 /*VT_CF*/: return parse_ClipboardData(blob);
        case 0x50 /*VT_STRING*/: return parse_VtString(blob, t, !opts.raw && 4).replace(chr0,'');
        case 0x51 /*VT_USTR*/: return parse_VtUnalignedString(blob, t, 4).replace(chr0,'');
        case 0x100C /*VT_VECTOR|VT_VARIANT*/: return parse_VtVecHeadingPair(blob);
        case 0x101E /*VT_LPSTR*/: return parse_VtVecUnalignedLpstr(blob);
        default: throw new Error("TypedPropertyValue unrecognized type " + type + " " + t);
    }
}
/* [MS-OLEPS] 2.14.2 VectorHeader */
/*function parse_VTVectorVariant(blob) {
    var Length = blob.read_shift(4);

    if(Length & 1 !== 0) throw new Error("VectorHeader Length=" + Length + " must be even");
    var o = [];
    for(var i = 0; i != Length; ++i) {
        o.push(parse_TypedPropertyValue(blob, VT_VARIANT));
    }
    return o;
}*/

/* [MS-OLEPS] 2.20 PropertySet */
function parse_PropertySet(blob, PIDSI) {
    var start_addr = blob.l;
    var size = blob.read_shift(4);
    var NumProps = blob.read_shift(4);
    var Props = [], i = 0;
    var CodePage = 0;
    var Dictionary = -1, DictObj;
    for(i = 0; i != NumProps; ++i) {
        var PropID = blob.read_shift(4);
        var Offset = blob.read_shift(4);
        Props[i] = [PropID, Offset + start_addr];
    }
    var PropH = {};
    for(i = 0; i != NumProps; ++i) {
        if(blob.l !== Props[i][1]) {
            var fail = true;
            if(i>0 && PIDSI) switch(PIDSI[Props[i-1][0]].t) {
                case 0x02 /*VT_I2*/: if(blob.l +2 === Props[i][1]) { blob.l+=2; fail = false; } break;
                case 0x50 /*VT_STRING*/: if(blob.l <= Props[i][1]) { blob.l=Props[i][1]; fail = false; } break;
                case 0x100C /*VT_VECTOR|VT_VARIANT*/: if(blob.l <= Props[i][1]) { blob.l=Props[i][1]; fail = false; } break;
            }
            if(!PIDSI && blob.l <= Props[i][1]) { fail=false; blob.l = Props[i][1]; }
            if(fail) throw new Error("Read Error: Expected address " + Props[i][1] + ' at ' + blob.l + ' :' + i);
        }
        if(PIDSI) {
            var piddsi = PIDSI[Props[i][0]];
            PropH[piddsi.n] = parse_TypedPropertyValue(blob, piddsi.t, {raw:true});
            if(piddsi.p === 'version') PropH[piddsi.n] = String(PropH[piddsi.n] >> 16) + "." + String(PropH[piddsi.n] & 0xFFFF);
            if(piddsi.n == "CodePage") switch(PropH[piddsi.n]) {
                case 0: PropH[piddsi.n] = 1252;
                    /* falls through */
                case 10000: // OSX Roman
                case 1252: // Windows Latin

                case 874: // SB Windows Thai
                case 1250: // SB Windows Central Europe
                case 1251: // SB Windows Cyrillic
                case 1253: // SB Windows Greek
                case 1254: // SB Windows Turkish
                case 1255: // SB Windows Hebrew
                case 1256: // SB Windows Arabic
                case 1257: // SB Windows Baltic
                case 1258: // SB Windows Vietnam

                case 932: // DB Windows Japanese Shift-JIS
                case 936: // DB Windows Simplified Chinese GBK
                case 949: // DB Windows Korean
                case 950: // DB Windows Traditional Chinese Big5

                case 1200: // UTF16LE
                case 1201: // UTF16BE
                case 65000: case -536: // UTF-7
                case 65001: case -535: // UTF-8
                    set_cp(CodePage = PropH[piddsi.n]); break;
                default: throw new Error("Unsupported CodePage: " + PropH[piddsi.n]);
            }
        } else {
            if(Props[i][0] === 0x1) {
                CodePage = PropH.CodePage = parse_TypedPropertyValue(blob, VT_I2);
                set_cp(CodePage);
                if(Dictionary !== -1) {
                    var oldpos = blob.l;
                    blob.l = Props[Dictionary][1];
                    DictObj = parse_dictionary(blob,CodePage);
                    blob.l = oldpos;
                }
            } else if(Props[i][0] === 0) {
                if(CodePage === 0) { Dictionary = i; blob.l = Props[i+1][1]; continue; }
                DictObj = parse_dictionary(blob,CodePage);
            } else {
                var name = DictObj[Props[i][0]];
                var val;
                /* [MS-OSHARED] 2.3.3.2.3.1.2 + PROPVARIANT */
                switch(blob[blob.l]) {
                    case 0x41 /*VT_BLOB*/: blob.l += 4; val = parse_BLOB(blob); break;
                    case 0x1E /*VT_LPSTR*/: blob.l += 4; val = parse_VtString(blob, blob[blob.l-4]); break;
                    case 0x1F /*VT_LPWSTR*/: blob.l += 4; val = parse_VtString(blob, blob[blob.l-4]); break;
                    case 0x03 /*VT_I4*/: blob.l += 4; val = blob.read_shift(4, 'i'); break;
                    case 0x13 /*VT_UI4*/: blob.l += 4; val = blob.read_shift(4); break;
                    case 0x05 /*VT_R8*/: blob.l += 4; val = blob.read_shift(8, 'f'); break;
                    case 0x0B /*VT_BOOL*/: blob.l += 4; val = parsebool(blob, 4); break;
                    case 0x40 /*VT_FILETIME*/: blob.l += 4; val = new Date(parse_FILETIME(blob)); break;
                    default: throw new Error("unparsed value: " + blob[blob.l]);
                }
                PropH[name] = val;
            }
        }
    }
    blob.l = start_addr + size; /* step ahead to skip padding */
    return PropH;
}

/* [MS-OLEPS] 2.21 PropertySetStream */
function parse_PropertySetStream(file, PIDSI) {
    var blob = file.content;
    prep_blob(blob, 0);

    var NumSets, FMTID0, FMTID1, Offset0, Offset1;
    blob.chk('feff', 'Byte Order: ');

    var vers = blob.read_shift(2); // TODO: check version
    var SystemIdentifier = blob.read_shift(4);
    blob.chk(CFB.utils.consts.HEADER_CLSID, 'CLSID: ');
    NumSets = blob.read_shift(4);
    if(NumSets !== 1 && NumSets !== 2) throw "Unrecognized #Sets: " + NumSets;
    FMTID0 = blob.read_shift(16); Offset0 = blob.read_shift(4);

    if(NumSets === 1 && Offset0 !== blob.l) throw "Length mismatch";
    else if(NumSets === 2) { FMTID1 = blob.read_shift(16); Offset1 = blob.read_shift(4); }
    var PSet0 = parse_PropertySet(blob, PIDSI);

    var rval = { SystemIdentifier: SystemIdentifier };
    for(var y in PSet0) rval[y] = PSet0[y];
    //rval.blob = blob;
    rval.FMTID = FMTID0;
    //rval.PSet0 = PSet0;
    if(NumSets === 1) return rval;
    if(blob.l !== Offset1) throw "Length mismatch 2: " + blob.l + " !== " + Offset1;
    var PSet1;
    try { PSet1 = parse_PropertySet(blob, null); } catch(e) { }
    for(y in PSet1) rval[y] = PSet1[y];
    rval.FMTID = [FMTID0, FMTID1]; // TODO: verify FMTID0/1
    return rval;
}


function parsenoop2(blob, length) { blob.read_shift(length); return null; }

function parslurp(blob, length, cb) {
    var arr = [], target = blob.l + length;
    while(blob.l < target) arr.push(cb(blob, target - blob.l));
    if(target !== blob.l) throw new Error("Slurp error");
    return arr;
}

function parslurp2(blob, length, cb) {
    var arr = [], target = blob.l + length, len = blob.read_shift(2);
    while(len-- !== 0) arr.push(cb(blob, target - blob.l));
    if(target !== blob.l) throw new Error("Slurp error");
    return arr;
}

function parsebool(blob, length) { return blob.read_shift(length) === 0x1; }

function parseuint16(blob) { return blob.read_shift(2, 'u'); }
function parseuint16a(blob, length) { return parslurp(blob,length,parseuint16);}

/* --- 2.5 Structures --- */

/* [MS-XLS] 2.5.14 Boolean */
var parse_Boolean = parsebool;

/* [MS-XLS] 2.5.10 Bes (boolean or error) */
function parse_Bes(blob) {
    var v = blob.read_shift(1), t = blob.read_shift(1);
    return t === 0x01 ? v : v === 0x01;
}

/* [MS-XLS] 2.5.240 ShortXLUnicodeString */
function parse_ShortXLUnicodeString(blob, length, opts) {
    var cch = blob.read_shift(1);
    var width = 1, encoding = 'sbcs-cont';
    var cp = current_codepage;
    if(opts && opts.biff >= 8) current_codepage = 1200;
    if(opts === undefined || opts.biff !== 5) {
        var fHighByte = blob.read_shift(1);
        if(fHighByte) { width = 2; encoding = 'dbcs-cont'; }
    }
    var o = cch ? blob.read_shift(cch, encoding) : "";
    current_codepage = cp;
    return o;
}

/* 2.5.293 XLUnicodeRichExtendedString */
function parse_XLUnicodeRichExtendedString(blob) {
    var cp = current_codepage;
    current_codepage = 1200;
    var cch = blob.read_shift(2), flags = blob.read_shift(1);
    var fHighByte = flags & 0x1, fExtSt = flags & 0x4, fRichSt = flags & 0x8;
    var width = 1 + (flags & 0x1); // 0x0 -> utf8, 0x1 -> dbcs
    var cRun, cbExtRst;
    var z = {};
    if(fRichSt) cRun = blob.read_shift(2);
    if(fExtSt) cbExtRst = blob.read_shift(4);
    var encoding = (flags & 0x1) ? 'dbcs-cont' : 'sbcs-cont';
    var msg = cch === 0 ? "" : blob.read_shift(cch, encoding);
    if(fRichSt) blob.l += 4 * cRun; //TODO: parse this
    if(fExtSt) blob.l += cbExtRst; //TODO: parse this
    z.t = msg;
    if(!fRichSt) { z.raw = "<t>" + z.t + "</t>"; z.r = z.t; }
    current_codepage = cp;
    return z;
}

/* 2.5.296 XLUnicodeStringNoCch */
function parse_XLUnicodeStringNoCch(blob, cch, opts) {
    var retval;
    var fHighByte = blob.read_shift(1);
    if(fHighByte===0) { retval = blob.read_shift(cch, 'sbcs-cont'); }
    else { retval = blob.read_shift(cch, 'dbcs-cont'); }
    return retval;
}

/* 2.5.294 XLUnicodeString */
function parse_XLUnicodeString(blob, length, opts) {
    var cch = blob.read_shift(opts !== undefined && opts.biff > 0 && opts.biff < 8 ? 1 : 2);
    if(cch === 0) { blob.l++; return ""; }
    return parse_XLUnicodeStringNoCch(blob, cch, opts);
}
/* BIFF5 override */
function parse_XLUnicodeString2(blob, length, opts) {
    if(opts.biff !== 5 && opts.biff !== 2) return parse_XLUnicodeString(blob, length, opts);
    var cch = blob.read_shift(1);
    if(cch === 0) { blob.l++; return ""; }
    return blob.read_shift(cch, 'sbcs-cont');
}

/* [MS-XLS] 2.5.61 ControlInfo */
var parse_ControlInfo = parsenoop;

/* [MS-OSHARED] 2.3.7.6 URLMoniker TODO: flags */
var parse_URLMoniker = function(blob, length) {
    var len = blob.read_shift(4), start = blob.l;
    var extra = false;
    if(len > 24) {
        /* look ahead */
        blob.l += len - 24;
        if(blob.read_shift(16) === "795881f43b1d7f48af2c825dc4852763") extra = true;
        blob.l = start;
    }
    var url = blob.read_shift((extra?len-24:len)>>1, 'utf16le').replace(chr0,"");
    if(extra) blob.l += 24;
    return url;
};

/* [MS-OSHARED] 2.3.7.8 FileMoniker TODO: all fields */
var parse_FileMoniker = function(blob, length) {
    var cAnti = blob.read_shift(2);
    var ansiLength = blob.read_shift(4);
    var ansiPath = blob.read_shift(ansiLength, 'cstr');
    var endServer = blob.read_shift(2);
    var versionNumber = blob.read_shift(2);
    var cbUnicodePathSize = blob.read_shift(4);
    if(cbUnicodePathSize === 0) return ansiPath.replace(/\\/g,"/");
    var cbUnicodePathBytes = blob.read_shift(4);
    var usKeyValue = blob.read_shift(2);
    var unicodePath = blob.read_shift(cbUnicodePathBytes>>1, 'utf16le').replace(chr0,"");
    return unicodePath;
};

/* [MS-OSHARED] 2.3.7.2 HyperlinkMoniker TODO: all the monikers */
var parse_HyperlinkMoniker = function(blob, length) {
    var clsid = blob.read_shift(16); length -= 16;
    switch(clsid) {
        case "e0c9ea79f9bace118c8200aa004ba90b": return parse_URLMoniker(blob, length);
        case "0303000000000000c000000000000046": return parse_FileMoniker(blob, length);
        default: throw "unsupported moniker " + clsid;
    }
};

/* [MS-OSHARED] 2.3.7.9 HyperlinkString */
var parse_HyperlinkString = function(blob, length) {
    var len = blob.read_shift(4);
    var o = blob.read_shift(len, 'utf16le').replace(chr0, "");
    return o;
};

/* [MS-OSHARED] 2.3.7.1 Hyperlink Object TODO: unify params with XLSX */
var parse_Hyperlink = function(blob, length) {
    var end = blob.l + length;
    var sVer = blob.read_shift(4);
    if(sVer !== 2) throw new Error("Unrecognized streamVersion: " + sVer);
    var flags = blob.read_shift(2);
    blob.l += 2;
    var displayName, targetFrameName, moniker, oleMoniker, location, guid, fileTime;
    if(flags & 0x0010) displayName = parse_HyperlinkString(blob, end - blob.l);
    if(flags & 0x0080) targetFrameName = parse_HyperlinkString(blob, end - blob.l);
    if((flags & 0x0101) === 0x0101) moniker = parse_HyperlinkString(blob, end - blob.l);
    if((flags & 0x0101) === 0x0001) oleMoniker = parse_HyperlinkMoniker(blob, end - blob.l);
    if(flags & 0x0008) location = parse_HyperlinkString(blob, end - blob.l);
    if(flags & 0x0020) guid = blob.read_shift(16);
    if(flags & 0x0040) fileTime = parse_FILETIME(blob, 8);
    blob.l = end;
    var target = (targetFrameName||moniker||oleMoniker);
    if(location) target+="#"+location;
    return {Target: target};
};

/* 2.5.178 LongRGBA */
function parse_LongRGBA(blob, length) { var r = blob.read_shift(1), g = blob.read_shift(1), b = blob.read_shift(1), a = blob.read_shift(1); return [r,g,b,a]; }

/* 2.5.177 LongRGB */
function parse_LongRGB(blob, length) { var x = parse_LongRGBA(blob, length); x[3] = 0; return x; }


/* --- MS-XLS --- */

/* 2.5.19 */
function parse_XLSCell(blob, length) {
    var rw = blob.read_shift(2); // 0-indexed
    var col = blob.read_shift(2);
    var ixfe = blob.read_shift(2);
    return {r:rw, c:col, ixfe:ixfe};
}

/* 2.5.134 */
function parse_frtHeader(blob) {
    var rt = blob.read_shift(2);
    var flags = blob.read_shift(2); // TODO: parse these flags
    blob.l += 8;
    return {type: rt, flags: flags};
}



function parse_OptXLUnicodeString(blob, length, opts) { return length === 0 ? "" : parse_XLUnicodeString2(blob, length, opts); }

/* 2.5.158 */
var HIDEOBJENUM = ['SHOWALL', 'SHOWPLACEHOLDER', 'HIDEALL'];
var parse_HideObjEnum = parseuint16;

/* 2.5.344 */
function parse_XTI(blob, length) {
    var iSupBook = blob.read_shift(2), itabFirst = blob.read_shift(2,'i'), itabLast = blob.read_shift(2,'i');
    return [iSupBook, itabFirst, itabLast];
}

/* 2.5.218 */
function parse_RkRec(blob, length) {
    var ixfe = blob.read_shift(2);
    var RK = parse_RkNumber(blob);
    //console.log("::", ixfe, RK,";;");
    return [ixfe, RK];
}

/* 2.5.1 */
function parse_AddinUdf(blob, length) {
    blob.l += 4; length -= 4;
    var l = blob.l + length;
    var udfName = parse_ShortXLUnicodeString(blob, length);
    var cb = blob.read_shift(2);
    l -= blob.l;
    if(cb !== l) throw "Malformed AddinUdf: padding = " + l + " != " + cb;
    blob.l += cb;
    return udfName;
}

/* 2.5.209 TODO: Check sizes */
function parse_Ref8U(blob, length) {
    var rwFirst = blob.read_shift(2);
    var rwLast = blob.read_shift(2);
    var colFirst = blob.read_shift(2);
    var colLast = blob.read_shift(2);
    return {s:{c:colFirst, r:rwFirst}, e:{c:colLast,r:rwLast}};
}

/* 2.5.211 */
function parse_RefU(blob, length) {
    var rwFirst = blob.read_shift(2);
    var rwLast = blob.read_shift(2);
    var colFirst = blob.read_shift(1);
    var colLast = blob.read_shift(1);
    return {s:{c:colFirst, r:rwFirst}, e:{c:colLast,r:rwLast}};
}

/* 2.5.207 */
var parse_Ref = parse_RefU;

/* 2.5.143 */
function parse_FtCmo(blob, length) {
    blob.l += 4;
    var ot = blob.read_shift(2);
    var id = blob.read_shift(2);
    var flags = blob.read_shift(2);
    blob.l+=12;
    return [id, ot, flags];
}

/* 2.5.149 */
function parse_FtNts(blob, length) {
    var out = {};
    blob.l += 4;
    blob.l += 16; // GUID TODO
    out.fSharedNote = blob.read_shift(2);
    blob.l += 4;
    return out;
}

/* 2.5.142 */
function parse_FtCf(blob, length) {
    var out = {};
    blob.l += 4;
    blob.cf = blob.read_shift(2);
    return out;
}

/* 2.5.140 - 2.5.154 and friends */
var FtTab = {
    0x15: parse_FtCmo,
    0x13: parsenoop,                                /* FtLbsData */
    0x12: function(blob, length) { blob.l += 12; }, /* FtCblsData */
    0x11: function(blob, length) { blob.l += 8; },  /* FtRboData */
    0x10: parsenoop,                                /* FtEdoData */
    0x0F: parsenoop,                                /* FtGboData */
    0x0D: parse_FtNts,                              /* FtNts */
    0x0C: function(blob, length) { blob.l += 24; }, /* FtSbs */
    0x0B: function(blob, length) { blob.l += 10; }, /* FtRbo */
    0x0A: function(blob, length) { blob.l += 16; }, /* FtCbls */
    0x09: parsenoop,                                /* FtPictFmla */
    0x08: function(blob, length) { blob.l += 6; },  /* FtPioGrbit */
    0x07: parse_FtCf,                               /* FtCf */
    0x06: function(blob, length) { blob.l += 6; },  /* FtGmo */
    0x04: parsenoop,                                /* FtMacro */
    0x00: function(blob, length) { blob.l += 4; }   /* FtEnding */
};
function parse_FtArray(blob, length, ot) {
    var s = blob.l;
    var fts = [];
    while(blob.l < s + length) {
        var ft = blob.read_shift(2);
        blob.l-=2;
        try {
            fts.push(FtTab[ft](blob, s + length - blob.l));
        } catch(e) { blob.l = s + length; return fts; }
    }
    if(blob.l != s + length) blob.l = s + length; //throw "bad Object Ft-sequence";
    return fts;
}

/* 2.5.129 */
var parse_FontIndex = parseuint16;

/* --- 2.4 Records --- */

/* 2.4.21 */
function parse_BOF(blob, length) {
    var o = {};
    o.BIFFVer = blob.read_shift(2); length -= 2;
    switch(o.BIFFVer) {
        case 0x0600: /* BIFF8 */
        case 0x0500: /* BIFF5 */
        case 0x0002: case 0x0007: /* BIFF2 */
            break;
        default: throw "Unexpected BIFF Ver " + o.BIFFVer;
    }
    blob.read_shift(length);
    return o;
}


/* 2.4.146 */
function parse_InterfaceHdr(blob, length) {
    if(length === 0) return 0x04b0;
    var q;
    if((q=blob.read_shift(2))!==0x04b0) throw 'InterfaceHdr codePage ' + q;
    return 0x04b0;
}


/* 2.4.349 */
function parse_WriteAccess(blob, length, opts) {
    if(opts.enc) { blob.l += length; return ""; }
    var l = blob.l;
    // TODO: make sure XLUnicodeString doesnt overrun
    var UserName = parse_XLUnicodeString(blob, 0, opts);
    blob.read_shift(length + l - blob.l);
    return UserName;
}

/* 2.4.28 */
function parse_BoundSheet8(blob, length, opts) {
    var pos = blob.read_shift(4);
    var hidden = blob.read_shift(1) >> 6;
    var dt = blob.read_shift(1);
    switch(dt) {
        case 0: dt = 'Worksheet'; break;
        case 1: dt = 'Macrosheet'; break;
        case 2: dt = 'Chartsheet'; break;
        case 6: dt = 'VBAModule'; break;
    }
    var name = parse_ShortXLUnicodeString(blob, 0, opts);
    if(name.length === 0) name = "Sheet1";
    return { pos:pos, hs:hidden, dt:dt, name:name };
}

/* 2.4.265 TODO */
function parse_SST(blob, length) {
    var cnt = blob.read_shift(4);
    var ucnt = blob.read_shift(4);
    var strs = [];
    for(var i = 0; i != ucnt; ++i) {
        strs.push(parse_XLUnicodeRichExtendedString(blob));
    }
    strs.Count = cnt; strs.Unique = ucnt;
    return strs;
}

/* 2.4.107 */
function parse_ExtSST(blob, length) {
    var extsst = {};
    extsst.dsst = blob.read_shift(2);
    blob.l += length-2;
    return extsst;
}


/* 2.4.221 TODO*/
function parse_Row(blob, length) {
    var rw = blob.read_shift(2), col = blob.read_shift(2), Col = blob.read_shift(2), rht = blob.read_shift(2);
    blob.read_shift(4); // reserved(2), unused(2)
    var flags = blob.read_shift(1); // various flags
    blob.read_shift(1); // reserved
    blob.read_shift(2); //ixfe, other flags
    return {r:rw, c:col, cnt:Col-col};
}


/* 2.4.125 */
function parse_ForceFullCalculation(blob, length) {
    var header = parse_frtHeader(blob);
    if(header.type != 0x08A3) throw "Invalid Future Record " + header.type;
    var fullcalc = blob.read_shift(4);
    return fullcalc !== 0x0;
}


var parse_CompressPictures = parsenoop2; /* 2.4.55 Not interesting */



/* 2.4.215 rt */
function parse_RecalcId(blob, length) {
    blob.read_shift(2);
    return blob.read_shift(4);
}

/* 2.4.87 */
function parse_DefaultRowHeight (blob, length) {
    var f = blob.read_shift(2), miyRw;
    miyRw = blob.read_shift(2); // flags & 0x02 -> hidden, else empty
    var fl = {Unsynced:f&1,DyZero:(f&2)>>1,ExAsc:(f&4)>>2,ExDsc:(f&8)>>3};
    return [fl, miyRw];
}

/* 2.4.345 TODO */
function parse_Window1(blob, length) {
    var xWn = blob.read_shift(2), yWn = blob.read_shift(2), dxWn = blob.read_shift(2), dyWn = blob.read_shift(2);
    var flags = blob.read_shift(2), iTabCur = blob.read_shift(2), iTabFirst = blob.read_shift(2);
    var ctabSel = blob.read_shift(2), wTabRatio = blob.read_shift(2);
    return { Pos: [xWn, yWn], Dim: [dxWn, dyWn], Flags: flags, CurTab: iTabCur,
        FirstTab: iTabFirst, Selected: ctabSel, TabRatio: wTabRatio };
}

/* 2.4.122 TODO */
function parse_Font(blob, length, opts) {
    blob.l += 14;
    var name = parse_ShortXLUnicodeString(blob, 0, opts);
    return name;
}

/* 2.4.149 */
function parse_LabelSst(blob, length) {
    var cell = parse_XLSCell(blob);
    cell.isst = blob.read_shift(4);
    return cell;
}

/* 2.4.148 */
function parse_Label(blob, length, opts) {
    var cell = parse_XLSCell(blob, 6);
    var str = parse_XLUnicodeString(blob, length-6, opts);
    cell.val = str;
    return cell;
}

/* 2.4.126 Number Formats */
function parse_Format(blob, length, opts) {
    var ifmt = blob.read_shift(2);
    var fmtstr = parse_XLUnicodeString2(blob, 0, opts);
    return [ifmt, fmtstr];
}

/* 2.4.90 */
function parse_Dimensions(blob, length) {
    var w = length === 10 ? 2 : 4;
    var r = blob.read_shift(w), R = blob.read_shift(w),
        c = blob.read_shift(2), C = blob.read_shift(2);
    blob.l += 2;
    return {s: {r:r, c:c}, e: {r:R, c:C}};
}

/* 2.4.220 */
function parse_RK(blob, length) {
    var rw = blob.read_shift(2), col = blob.read_shift(2);
    var rkrec = parse_RkRec(blob);
    return {r:rw, c:col, ixfe:rkrec[0], rknum:rkrec[1]};
}

/* 2.4.175 */
function parse_MulRk(blob, length) {
    var target = blob.l + length - 2;
    var rw = blob.read_shift(2), col = blob.read_shift(2);
    var rkrecs = [];
    while(blob.l < target) rkrecs.push(parse_RkRec(blob));
    if(blob.l !== target) throw "MulRK read error";
    var lastcol = blob.read_shift(2);
    if(rkrecs.length != lastcol - col + 1) throw "MulRK length mismatch";
    return {r:rw, c:col, C:lastcol, rkrec:rkrecs};
}

/* 2.5.20 2.5.249 TODO */
function parse_CellStyleXF(blob, length, style) {
    var o = {};
    var a = blob.read_shift(4), b = blob.read_shift(4);
    var c = blob.read_shift(4), d = blob.read_shift(2);
    o.patternType = XLSFillPattern[c >> 26];
    o.icvFore = d & 0x7F;
    o.icvBack = (d >> 7) & 0x7F;
    return o;
}
function parse_CellXF(blob, length) {return parse_CellStyleXF(blob,length,0);}
function parse_StyleXF(blob, length) {return parse_CellStyleXF(blob,length,1);}

/* 2.4.353 TODO: actually do this right */
function parse_XF(blob, length) {
    var o = {};
    o.ifnt = blob.read_shift(2); o.ifmt = blob.read_shift(2); o.flags = blob.read_shift(2);
    o.fStyle = (o.flags >> 2) & 0x01;
    length -= 6;
    o.data = parse_CellStyleXF(blob, length, o.fStyle);
    return o;
}

/* 2.4.134 */
function parse_Guts(blob, length) {
    blob.l += 4;
    var out = [blob.read_shift(2), blob.read_shift(2)];
    if(out[0] !== 0) out[0]--;
    if(out[1] !== 0) out[1]--;
    if(out[0] > 7 || out[1] > 7) throw "Bad Gutters: " + out;
    return out;
}

/* 2.4.24 */
function parse_BoolErr(blob, length) {
    var cell = parse_XLSCell(blob, 6);
    var val = parse_Bes(blob, 2);
    cell.val = val;
    cell.t = (val === true || val === false) ? 'b' : 'e';
    return cell;
}

/* 2.4.180 Number */
function parse_Number(blob, length) {
    var cell = parse_XLSCell(blob, 6);
    var xnum = parse_Xnum(blob, 8);
    cell.val = xnum;
    return cell;
}

var parse_XLHeaderFooter = parse_OptXLUnicodeString; // TODO: parse 2.4.136

/* 2.4.271 */
function parse_SupBook(blob, length, opts) {
    var end = blob.l + length;
    var ctab = blob.read_shift(2);
    var cch = blob.read_shift(2);
    var virtPath;
    if(cch >=0x01 && cch <=0xff) virtPath = parse_XLUnicodeStringNoCch(blob, cch);
    var rgst = blob.read_shift(end - blob.l);
    opts.sbcch = cch;
    return [cch, ctab, virtPath, rgst];
}

/* 2.4.105 TODO */
function parse_ExternName(blob, length, opts) {
    var flags = blob.read_shift(2);
    var body;
    var o = {
        fBuiltIn: flags & 0x01,
        fWantAdvise: (flags >>> 1) & 0x01,
        fWantPict: (flags >>> 2) & 0x01,
        fOle: (flags >>> 3) & 0x01,
        fOleLink: (flags >>> 4) & 0x01,
        cf: (flags >>> 5) & 0x3FF,
        fIcon: flags >>> 15 & 0x01
    };
    if(opts.sbcch === 0x3A01) body = parse_AddinUdf(blob, length-2);
    //else throw new Error("unsupported SupBook cch: " + opts.sbcch);
    o.body = body || blob.read_shift(length-2);
    return o;
}

/* 2.4.150 TODO */
function parse_Lbl(blob, length, opts) {
    if(opts.biff < 8) return parse_Label(blob, length, opts);
    var target = blob.l + length;
    var flags = blob.read_shift(2);
    var chKey = blob.read_shift(1);
    var cch = blob.read_shift(1);
    var cce = blob.read_shift(2);
    blob.l += 2;
    var itab = blob.read_shift(2);
    blob.l += 4;
    var name = parse_XLUnicodeStringNoCch(blob, cch, opts);
    var rgce = parse_NameParsedFormula(blob, target - blob.l, opts, cce);
    return {
        chKey: chKey,
        Name: name,
        rgce: rgce
    };
}

/* 2.4.106 TODO: verify supbook manipulation */
function parse_ExternSheet(blob, length, opts) {
    if(opts.biff < 8) return parse_ShortXLUnicodeString(blob, length, opts);
    var o = parslurp2(blob,length,parse_XTI);
    var oo = [];
    if(opts.sbcch === 0x0401) {
        for(var i = 0; i != o.length; ++i) oo.push(opts.snames[o[i][1]]);
        return oo;
    }
    else return o;
}

/* 2.4.260 */
function parse_ShrFmla(blob, length, opts) {
    var ref = parse_RefU(blob, 6);
    blob.l++;
    var cUse = blob.read_shift(1);
    length -= 8;
    return [parse_SharedParsedFormula(blob, length, opts), cUse];
}

/* 2.4.4 TODO */
function parse_Array(blob, length, opts) {
    var ref = parse_Ref(blob, 6);
    blob.l += 6; length -= 12; /* TODO: fAlwaysCalc */
    return [ref, parse_ArrayParsedFormula(blob, length, opts, ref)];
}

/* 2.4.173 */
function parse_MTRSettings(blob, length) {
    var fMTREnabled = blob.read_shift(4) !== 0x00;
    var fUserSetThreadCount = blob.read_shift(4) !== 0x00;
    var cUserThreadCount = blob.read_shift(4);
    return [fMTREnabled, fUserSetThreadCount, cUserThreadCount];
}

/* 2.5.186 TODO: BIFF5 */
function parse_NoteSh(blob, length, opts) {
    if(opts.biff < 8) return;
    var row = blob.read_shift(2), col = blob.read_shift(2);
    var flags = blob.read_shift(2), idObj = blob.read_shift(2);
    var stAuthor = parse_XLUnicodeString2(blob, 0, opts);
    if(opts.biff < 8) blob.read_shift(1);
    return [{r:row,c:col}, stAuthor, idObj, flags];
}

/* 2.4.179 */
function parse_Note(blob, length, opts) {
    /* TODO: Support revisions */
    return parse_NoteSh(blob, length, opts);
}

/* 2.4.168 */
function parse_MergeCells(blob, length) {
    var merges = [];
    var cmcs = blob.read_shift(2);
    while (cmcs--) merges.push(parse_Ref8U(blob,length));
    return merges;
}

/* 2.4.181 TODO: parse all the things! */
function parse_Obj(blob, length) {
    var cmo = parse_FtCmo(blob, 22); // id, ot, flags
    var fts = parse_FtArray(blob, length-22, cmo[1]);
    return { cmo: cmo, ft:fts };
}

/* 2.4.329 TODO: parse properly */
function parse_TxO(blob, length, opts) {
    var s = blob.l;
try {
    blob.l += 4;
    var ot = (opts.lastobj||{cmo:[0,0]}).cmo[1];
    var controlInfo;
    if([0,5,7,11,12,14].indexOf(ot) == -1) blob.l += 6;
    else controlInfo = parse_ControlInfo(blob, 6, opts);
    var cchText = blob.read_shift(2);
    var cbRuns = blob.read_shift(2);
    var ifntEmpty = parse_FontIndex(blob, 2);
    var len = blob.read_shift(2);
    blob.l += len;
    //var fmla = parse_ObjFmla(blob, s + length - blob.l);

    var texts = "";
    for(var i = 1; i < blob.lens.length-1; ++i) {
        if(blob.l-s != blob.lens[i]) throw "TxO: bad continue record";
        var hdr = blob[blob.l];
        var t = parse_XLUnicodeStringNoCch(blob, blob.lens[i+1]-blob.lens[i]-1);
        texts += t;
        if(texts.length >= (hdr ? cchText : 2*cchText)) break;
    }
    if(texts.length !== cchText && texts.length !== cchText*2) {
        throw "cchText: " + cchText + " != " + texts.length;
    }

    blob.l = s + length;
    /* 2.5.272 TxORuns */
//  var rgTxoRuns = [];
//  for(var j = 0; j != cbRuns/8-1; ++j) blob.l += 8;
//  var cchText2 = blob.read_shift(2);
//  if(cchText2 !== cchText) throw "TxOLastRun mismatch: " + cchText2 + " " + cchText;
//  blob.l += 6;
//  if(s + length != blob.l) throw "TxO " + (s + length) + ", at " + blob.l;
    return { t: texts };
} catch(e) { blob.l = s + length; return { t: texts||"" }; }
}

/* 2.4.140 */
var parse_HLink = function(blob, length) {
    var ref = parse_Ref8U(blob, 8);
    blob.l += 16; /* CLSID */
    var hlink = parse_Hyperlink(blob, length-24);
    return [ref, hlink];
};

/* 2.4.141 */
var parse_HLinkTooltip = function(blob, length) {
    var end = blob.l + length;
    blob.read_shift(2);
    var ref = parse_Ref8U(blob, 8);
    var wzTooltip = blob.read_shift((length-10)/2, 'dbcs-cont');
    wzTooltip = wzTooltip.replace(chr0,"");
    return [ref, wzTooltip];
};

/* 2.4.63 */
function parse_Country(blob, length) {
    var o = [], d;
    d = blob.read_shift(2); o[0] = CountryEnum[d] || d;
    d = blob.read_shift(2); o[1] = CountryEnum[d] || d;
    return o;
}

/* 2.4.50 ClrtClient */
function parse_ClrtClient(blob, length) {
    var ccv = blob.read_shift(2);
    var o = [];
    while(ccv-->0) o.push(parse_LongRGB(blob, 8));
    return o;
}

/* 2.4.188 */
function parse_Palette(blob, length) {
    var ccv = blob.read_shift(2);
    var o = [];
    while(ccv-->0) o.push(parse_LongRGB(blob, 8));
    return o;
}

/* 2.4.354 */
function parse_XFCRC(blob, length) {
    blob.l += 2;
    var o = {cxfs:0, crc:0};
    o.cxfs = blob.read_shift(2);
    o.crc = blob.read_shift(4);
    return o;
}


var parse_Style = parsenoop;
var parse_StyleExt = parsenoop;

var parse_ColInfo = parsenoop;

var parse_Window2 = parsenoop;


var parse_Backup = parsebool; /* 2.4.14 */
var parse_Blank = parse_XLSCell; /* 2.4.20 Just the cell */
var parse_BottomMargin = parse_Xnum; /* 2.4.27 */
var parse_BuiltInFnGroupCount = parseuint16; /* 2.4.30 0x0E or 0x10 but excel 2011 generates 0x11? */
var parse_CalcCount = parseuint16; /* 2.4.31 #Iterations */
var parse_CalcDelta = parse_Xnum; /* 2.4.32 */
var parse_CalcIter = parsebool;  /* 2.4.33 1=iterative calc */
var parse_CalcMode = parseuint16; /* 2.4.34 0=manual, 1=auto (def), 2=table */
var parse_CalcPrecision = parsebool; /* 2.4.35 */
var parse_CalcRefMode = parsenoop2; /* 2.4.36 */
var parse_CalcSaveRecalc = parsebool; /* 2.4.37 */
var parse_CodePage = parseuint16; /* 2.4.52 */
var parse_Compat12 = parsebool; /* 2.4.54 true = no compatibility check */
var parse_Date1904 = parsebool; /* 2.4.77 - 1=1904,0=1900 */
var parse_DefColWidth = parseuint16; /* 2.4.89 */
var parse_DSF = parsenoop2; /* 2.4.94 -- MUST be ignored */
var parse_EntExU2 = parsenoop2; /* 2.4.102 -- Explicitly says to ignore */
var parse_EOF = parsenoop2; /* 2.4.103 */
var parse_Excel9File = parsenoop2; /* 2.4.104 -- Optional and unused */
var parse_FeatHdr = parsenoop2; /* 2.4.112 */
var parse_FontX = parseuint16; /* 2.4.123 */
var parse_Footer = parse_XLHeaderFooter; /* 2.4.124 */
var parse_GridSet = parseuint16; /* 2.4.132, =1 */
var parse_HCenter = parsebool; /* 2.4.135 sheet centered horizontal on print */
var parse_Header = parse_XLHeaderFooter; /* 2.4.136 */
var parse_HideObj = parse_HideObjEnum; /* 2.4.139 */
var parse_InterfaceEnd = parsenoop2; /* 2.4.145 -- noop */
var parse_LeftMargin = parse_Xnum; /* 2.4.151 */
var parse_Mms = parsenoop2; /* 2.4.169 -- Explicitly says to ignore */
var parse_ObjProtect = parsebool; /* 2.4.183 -- must be 1 if present */
var parse_Password = parseuint16; /* 2.4.191 */
var parse_PrintGrid = parsebool; /* 2.4.202 */
var parse_PrintRowCol = parsebool; /* 2.4.203 */
var parse_PrintSize = parseuint16; /* 2.4.204 0:3 */
var parse_Prot4Rev = parsebool; /* 2.4.205 */
var parse_Prot4RevPass = parseuint16; /* 2.4.206 */
var parse_Protect = parsebool; /* 2.4.207 */
var parse_RefreshAll = parsebool; /* 2.4.217 -- must be 0 if not template */
var parse_RightMargin = parse_Xnum; /* 2.4.219 */
var parse_RRTabId = parseuint16a; /* 2.4.241 */
var parse_ScenarioProtect = parsebool; /* 2.4.245 */
var parse_Scl = parseuint16a; /* 2.4.247 num, den */
var parse_String = parse_XLUnicodeString; /* 2.4.268 */
var parse_SxBool = parsebool; /* 2.4.274 */
var parse_TopMargin = parse_Xnum; /* 2.4.328 */
var parse_UsesELFs = parsebool; /* 2.4.337 -- should be 0 */
var parse_VCenter = parsebool; /* 2.4.342 */
var parse_WinProtect = parsebool; /* 2.4.347 */
var parse_WriteProtect = parsenoop; /* 2.4.350 empty record */


/* ---- */
var parse_VerticalPageBreaks = parsenoop;
var parse_HorizontalPageBreaks = parsenoop;
var parse_Selection = parsenoop;
var parse_Continue = parsenoop;
var parse_Pane = parsenoop;
var parse_Pls = parsenoop;
var parse_DCon = parsenoop;
var parse_DConRef = parsenoop;
var parse_DConName = parsenoop;
var parse_XCT = parsenoop;
var parse_CRN = parsenoop;
var parse_FileSharing = parsenoop;
var parse_Uncalced = parsenoop;
var parse_Template = parsenoop;
var parse_Intl = parsenoop;
var parse_WsBool = parsenoop;
var parse_Sort = parsenoop;
var parse_Sync = parsenoop;
var parse_LPr = parsenoop;
var parse_DxGCol = parsenoop;
var parse_FnGroupName = parsenoop;
var parse_FilterMode = parsenoop;
var parse_AutoFilterInfo = parsenoop;
var parse_AutoFilter = parsenoop;
var parse_Setup = parsenoop;
var parse_ScenMan = parsenoop;
var parse_SCENARIO = parsenoop;
var parse_SxView = parsenoop;
var parse_Sxvd = parsenoop;
var parse_SXVI = parsenoop;
var parse_SxIvd = parsenoop;
var parse_SXLI = parsenoop;
var parse_SXPI = parsenoop;
var parse_DocRoute = parsenoop;
var parse_RecipName = parsenoop;
var parse_MulBlank = parsenoop;
var parse_SXDI = parsenoop;
var parse_SXDB = parsenoop;
var parse_SXFDB = parsenoop;
var parse_SXDBB = parsenoop;
var parse_SXNum = parsenoop;
var parse_SxErr = parsenoop;
var parse_SXInt = parsenoop;
var parse_SXString = parsenoop;
var parse_SXDtr = parsenoop;
var parse_SxNil = parsenoop;
var parse_SXTbl = parsenoop;
var parse_SXTBRGIITM = parsenoop;
var parse_SxTbpg = parsenoop;
var parse_ObProj = parsenoop;
var parse_SXStreamID = parsenoop;
var parse_DBCell = parsenoop;
var parse_SXRng = parsenoop;
var parse_SxIsxoper = parsenoop;
var parse_BookBool = parsenoop;
var parse_DbOrParamQry = parsenoop;
var parse_OleObjectSize = parsenoop;
var parse_SXVS = parsenoop;
var parse_BkHim = parsenoop;
var parse_MsoDrawingGroup = parsenoop;
var parse_MsoDrawing = parsenoop;
var parse_MsoDrawingSelection = parsenoop;
var parse_PhoneticInfo = parsenoop;
var parse_SxRule = parsenoop;
var parse_SXEx = parsenoop;
var parse_SxFilt = parsenoop;
var parse_SxDXF = parsenoop;
var parse_SxItm = parsenoop;
var parse_SxName = parsenoop;
var parse_SxSelect = parsenoop;
var parse_SXPair = parsenoop;
var parse_SxFmla = parsenoop;
var parse_SxFormat = parsenoop;
var parse_SXVDEx = parsenoop;
var parse_SXFormula = parsenoop;
var parse_SXDBEx = parsenoop;
var parse_RRDInsDel = parsenoop;
var parse_RRDHead = parsenoop;
var parse_RRDChgCell = parsenoop;
var parse_RRDRenSheet = parsenoop;
var parse_RRSort = parsenoop;
var parse_RRDMove = parsenoop;
var parse_RRFormat = parsenoop;
var parse_RRAutoFmt = parsenoop;
var parse_RRInsertSh = parsenoop;
var parse_RRDMoveBegin = parsenoop;
var parse_RRDMoveEnd = parsenoop;
var parse_RRDInsDelBegin = parsenoop;
var parse_RRDInsDelEnd = parsenoop;
var parse_RRDConflict = parsenoop;
var parse_RRDDefName = parsenoop;
var parse_RRDRstEtxp = parsenoop;
var parse_LRng = parsenoop;
var parse_CUsr = parsenoop;
var parse_CbUsr = parsenoop;
var parse_UsrInfo = parsenoop;
var parse_UsrExcl = parsenoop;
var parse_FileLock = parsenoop;
var parse_RRDInfo = parsenoop;
var parse_BCUsrs = parsenoop;
var parse_UsrChk = parsenoop;
var parse_UserBView = parsenoop;
var parse_UserSViewBegin = parsenoop; // overloaded
var parse_UserSViewEnd = parsenoop;
var parse_RRDUserView = parsenoop;
var parse_Qsi = parsenoop;
var parse_CondFmt = parsenoop;
var parse_CF = parsenoop;
var parse_DVal = parsenoop;
var parse_DConBin = parsenoop;
var parse_Lel = parsenoop;
var parse_XLSCodeName = parse_XLUnicodeString;
var parse_SXFDBType = parsenoop;
var parse_ObNoMacros = parsenoop;
var parse_Dv = parsenoop;
var parse_Index = parsenoop;
var parse_Table = parsenoop;
var parse_BigName = parsenoop;
var parse_ContinueBigName = parsenoop;
var parse_WebPub = parsenoop;
var parse_QsiSXTag = parsenoop;
var parse_DBQueryExt = parsenoop;
var parse_ExtString = parsenoop;
var parse_TxtQry = parsenoop;
var parse_Qsir = parsenoop;
var parse_Qsif = parsenoop;
var parse_RRDTQSIF = parsenoop;
var parse_OleDbConn = parsenoop;
var parse_WOpt = parsenoop;
var parse_SXViewEx = parsenoop;
var parse_SXTH = parsenoop;
var parse_SXPIEx = parsenoop;
var parse_SXVDTEx = parsenoop;
var parse_SXViewEx9 = parsenoop;
var parse_ContinueFrt = parsenoop;
var parse_RealTimeData = parsenoop;
var parse_ChartFrtInfo = parsenoop;
var parse_FrtWrapper = parsenoop;
var parse_StartBlock = parsenoop;
var parse_EndBlock = parsenoop;
var parse_StartObject = parsenoop;
var parse_EndObject = parsenoop;
var parse_CatLab = parsenoop;
var parse_YMult = parsenoop;
var parse_SXViewLink = parsenoop;
var parse_PivotChartBits = parsenoop;
var parse_FrtFontList = parsenoop;
var parse_SheetExt = parsenoop;
var parse_BookExt = parsenoop;
var parse_SXAddl = parsenoop;
var parse_CrErr = parsenoop;
var parse_HFPicture = parsenoop;
var parse_Feat = parsenoop;
var parse_DataLabExt = parsenoop;
var parse_DataLabExtContents = parsenoop;
var parse_CellWatch = parsenoop;
var parse_FeatHdr11 = parsenoop;
var parse_Feature11 = parsenoop;
var parse_DropDownObjIds = parsenoop;
var parse_ContinueFrt11 = parsenoop;
var parse_DConn = parsenoop;
var parse_List12 = parsenoop;
var parse_Feature12 = parsenoop;
var parse_CondFmt12 = parsenoop;
var parse_CF12 = parsenoop;
var parse_CFEx = parsenoop;
var parse_AutoFilter12 = parsenoop;
var parse_ContinueFrt12 = parsenoop;
var parse_MDTInfo = parsenoop;
var parse_MDXStr = parsenoop;
var parse_MDXTuple = parsenoop;
var parse_MDXSet = parsenoop;
var parse_MDXProp = parsenoop;
var parse_MDXKPI = parsenoop;
var parse_MDB = parsenoop;
var parse_PLV = parsenoop;
var parse_DXF = parsenoop;
var parse_TableStyles = parsenoop;
var parse_TableStyle = parsenoop;
var parse_TableStyleElement = parsenoop;
var parse_NamePublish = parsenoop;
var parse_NameCmt = parsenoop;
var parse_SortData = parsenoop;
var parse_GUIDTypeLib = parsenoop;
var parse_FnGrp12 = parsenoop;
var parse_NameFnGrp12 = parsenoop;
var parse_HeaderFooter = parsenoop;
var parse_CrtLayout12 = parsenoop;
var parse_CrtMlFrt = parsenoop;
var parse_CrtMlFrtContinue = parsenoop;
var parse_ShapePropsStream = parsenoop;
var parse_TextPropsStream = parsenoop;
var parse_RichTextStream = parsenoop;
var parse_CrtLayout12A = parsenoop;
var parse_Units = parsenoop;
var parse_Chart = parsenoop;
var parse_Series = parsenoop;
var parse_DataFormat = parsenoop;
var parse_LineFormat = parsenoop;
var parse_MarkerFormat = parsenoop;
var parse_AreaFormat = parsenoop;
var parse_PieFormat = parsenoop;
var parse_AttachedLabel = parsenoop;
var parse_SeriesText = parsenoop;
var parse_ChartFormat = parsenoop;
var parse_Legend = parsenoop;
var parse_SeriesList = parsenoop;
var parse_Bar = parsenoop;
var parse_Line = parsenoop;
var parse_Pie = parsenoop;
var parse_Area = parsenoop;
var parse_Scatter = parsenoop;
var parse_CrtLine = parsenoop;
var parse_Axis = parsenoop;
var parse_Tick = parsenoop;
var parse_ValueRange = parsenoop;
var parse_CatSerRange = parsenoop;
var parse_AxisLine = parsenoop;
var parse_CrtLink = parsenoop;
var parse_DefaultText = parsenoop;
var parse_Text = parsenoop;
var parse_ObjectLink = parsenoop;
var parse_Frame = parsenoop;
var parse_Begin = parsenoop;
var parse_End = parsenoop;
var parse_PlotArea = parsenoop;
var parse_Chart3d = parsenoop;
var parse_PicF = parsenoop;
var parse_DropBar = parsenoop;
var parse_Radar = parsenoop;
var parse_Surf = parsenoop;
var parse_RadarArea = parsenoop;
var parse_AxisParent = parsenoop;
var parse_LegendException = parsenoop;
var parse_ShtProps = parsenoop;
var parse_SerToCrt = parsenoop;
var parse_AxesUsed = parsenoop;
var parse_SBaseRef = parsenoop;
var parse_SerParent = parsenoop;
var parse_SerAuxTrend = parsenoop;
var parse_IFmtRecord = parsenoop;
var parse_Pos = parsenoop;
var parse_AlRuns = parsenoop;
var parse_BRAI = parsenoop;
var parse_SerAuxErrBar = parsenoop;
var parse_SerFmt = parsenoop;
var parse_Chart3DBarShape = parsenoop;
var parse_Fbi = parsenoop;
var parse_BopPop = parsenoop;
var parse_AxcExt = parsenoop;
var parse_Dat = parsenoop;
var parse_PlotGrowth = parsenoop;
var parse_SIIndex = parsenoop;
var parse_GelFrame = parsenoop;
var parse_BopPopCustom = parsenoop;
var parse_Fbi2 = parsenoop;

/* --- Specific to versions before BIFF8 --- */
function parse_BIFF5String(blob) {
    var len = blob.read_shift(1);
    return blob.read_shift(len, 'sbcs-cont');
}

/* BIFF2_??? where ??? is the name from [XLS] */
function parse_BIFF2STR(blob, length, opts) {
    var cell = parse_XLSCell(blob, 6);
    ++blob.l;
    var str = parse_XLUnicodeString2(blob, length-7, opts);
    cell.val = str;
    return cell;
}

function parse_BIFF2NUM(blob, length, opts) {
    var cell = parse_XLSCell(blob, 6);
    ++blob.l;
    var num = parse_Xnum(blob, 8);
    cell.val = num;
    return cell;
}

/* 18.4.1 charset to codepage mapping */
var CS2CP = {
    0:    1252, /* ANSI */
    1:   65001, /* DEFAULT */
    2:   65001, /* SYMBOL */
    77:  10000, /* MAC */
    128:   932, /* SHIFTJIS */
    129:   949, /* HANGUL */
    130:  1361, /* JOHAB */
    134:   936, /* GB2312 */
    136:   950, /* CHINESEBIG5 */
    161:  1253, /* GREEK */
    162:  1254, /* TURKISH */
    163:  1258, /* VIETNAMESE */
    177:  1255, /* HEBREW */
    178:  1256, /* ARABIC */
    186:  1257, /* BALTIC */
    204:  1251, /* RUSSIAN */
    222:   874, /* THAI */
    238:  1250, /* EASTEUROPE */
    255:  1252, /* OEM */
    69:   6969  /* MISC */
};

/* Parse a list of <r> tags */
var parse_rs = (function parse_rs_factory() {
    var tregex = matchtag("t"), rpregex = matchtag("rPr"), rregex = /<r>/g, rend = /<\/r>/, nlregex = /\r\n/g;
    /* 18.4.7 rPr CT_RPrElt */
    var parse_rpr = function parse_rpr(rpr, intro, outro) {
        var font = {}, cp = 65001;
        var m = rpr.match(tagregex), i = 0;
        if(m) for(;i!=m.length; ++i) {
            var y = parsexmltag(m[i]);
            switch(y[0]) {
                /* 18.8.12 condense CT_BooleanProperty */
                /* ** not required . */
                case '<condense': break;
                /* 18.8.17 extend CT_BooleanProperty */
                /* ** not required . */
                case '<extend': break;
                /* 18.8.36 shadow CT_BooleanProperty */
                /* ** not required . */
                case '<shadow':
                    /* falls through */
                case '<shadow/>': break;

                /* 18.4.1 charset CT_IntProperty TODO */
                case '<charset':
                    if(y.val == '1') break;
                    cp = CS2CP[parseInt(y.val, 10)];
                    break;

                /* 18.4.2 outline CT_BooleanProperty TODO */
                case '<outline':
                    /* falls through */
                case '<outline/>': break;

                /* 18.4.5 rFont CT_FontName */
                case '<rFont': font.name = y.val; break;

                /* 18.4.11 sz CT_FontSize */
                case '<sz': font.sz = y.val; break;

                /* 18.4.10 strike CT_BooleanProperty */
                case '<strike':
                    if(!y.val) break;
                    /* falls through */
                case '<strike/>': font.strike = 1; break;
                case '</strike>': break;

                /* 18.4.13 u CT_UnderlineProperty */
                case '<u':
                    if(!y.val) break;
                    /* falls through */
                case '<u/>': font.u = 1; break;
                case '</u>': break;

                /* 18.8.2 b */
                case '<b':
                    if(!y.val) break;
                    /* falls through */
                case '<b/>': font.b = 1; break;
                case '</b>': break;

                /* 18.8.26 i */
                case '<i':
                    if(!y.val) break;
                    /* falls through */
                case '<i/>': font.i = 1; break;
                case '</i>': break;

                /* 18.3.1.15 color CT_Color TODO: tint, theme, auto, indexed */
                case '<color':
                    if(y.rgb) font.color = y.rgb.substr(2,6);
                    break;

                /* 18.8.18 family ST_FontFamily */
                case '<family': font.family = y.val; break;

                /* 18.4.14 vertAlign CT_VerticalAlignFontProperty TODO */
                case '<vertAlign': break;

                /* 18.8.35 scheme CT_FontScheme TODO */
                case '<scheme': break;

                default:
                    if(y[0].charCodeAt(1) !== 47) throw 'Unrecognized rich format ' + y[0];
            }
        }
        /* TODO: These should be generated styles, not inline */
        var style = [];
        if(font.b) style.push("font-weight: bold;");
        if(font.i) style.push("font-style: italic;");
        intro.push('<span style="' + style.join("") + '">');
        outro.push("</span>");
        return cp;
    };

    /* 18.4.4 r CT_RElt */
    function parse_r(r) {
        var terms = [[],"",[]];
        /* 18.4.12 t ST_Xstring */
        var t = r.match(tregex), cp = 65001;
        if(!isval(t)) return "";
        terms[1] = t[1];

        var rpr = r.match(rpregex);
        if(isval(rpr)) cp = parse_rpr(rpr[1], terms[0], terms[2]);

        return terms[0].join("") + terms[1].replace(nlregex,'<br/>') + terms[2].join("");
    }
    return function parse_rs(rs) {
        return rs.replace(rregex,"").split(rend).map(parse_r).join("");
    };
})();

/* 18.4.8 si CT_Rst */
var sitregex = /<t[^>]*>([^<]*)<\/t>/g, sirregex = /<r>/;
function parse_si(x, opts) {
    var html = opts ? opts.cellHTML : true;
    var z = {};
    if(!x) return null;
    var y;
    /* 18.4.12 t ST_Xstring (Plaintext String) */
    if(x.charCodeAt(1) === 116) {
        z.t = utf8read(unescapexml(x.substr(x.indexOf(">")+1).split(/<\/t>/)[0]));
        z.r = x;
        if(html) z.h = z.t;
    }
    /* 18.4.4 r CT_RElt (Rich Text Run) */
    else if((y = x.match(sirregex))) {
        z.r = x;
        z.t = utf8read(unescapexml(x.match(sitregex).join("").replace(tagregex,"")));
        if(html) z.h = parse_rs(x);
    }
    /* 18.4.3 phoneticPr CT_PhoneticPr (TODO: needed for Asian support) */
    /* 18.4.6 rPh CT_PhoneticRun (TODO: needed for Asian support) */
    return z;
}

/* 18.4 Shared String Table */
var sstr0 = /<sst([^>]*)>([\s\S]*)<\/sst>/;
var sstr1 = /<(?:si|sstItem)>/g;
var sstr2 = /<\/(?:si|sstItem)>/;
function parse_sst_xml(data, opts) {
    var s = [], ss;
    /* 18.4.9 sst CT_Sst */
    var sst = data.match(sstr0);
    if(isval(sst)) {
        ss = sst[2].replace(sstr1,"").split(sstr2);
        for(var i = 0; i != ss.length; ++i) {
            var o = parse_si(ss[i], opts);
            if(o != null) s[s.length] = o;
        }
        sst = parsexmltag(sst[1]); s.Count = sst.count; s.Unique = sst.uniqueCount;
    }
    return s;
}

RELS.SST = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings";
var straywsregex = /^\s|\s$|[\t\n\r]/;
function write_sst_xml(sst, opts) {
    if(!opts.bookSST) return "";
    var o = [XML_HEADER];
    o[o.length] = (writextag('sst', null, {
        xmlns: XMLNS.main[0],
        count: sst.Count,
        uniqueCount: sst.Unique
    }));
    for(var i = 0; i != sst.length; ++i) { if(sst[i] == null) continue;
        var s = sst[i];
        var sitag = "<si>";
        if(s.r) sitag += s.r;
        else {
            sitag += "<t";
            if(s.t.match(straywsregex)) sitag += ' xml:space="preserve"';
            sitag += ">" + escapexml(s.t) + "</t>";
        }
        sitag += "</si>";
        o[o.length] = (sitag);
    }
    if(o.length>2){ o[o.length] = ('</sst>'); o[1]=o[1].replace("/>",">"); }
    return o.join("");
}
/* [MS-XLSB] 2.4.219 BrtBeginSst */
function parse_BrtBeginSst(data, length) {
    return [data.read_shift(4), data.read_shift(4)];
}

/* [MS-XLSB] 2.1.7.45 Shared Strings */
function parse_sst_bin(data, opts) {
    var s = [];
    var pass = false;
    recordhopper(data, function hopper_sst(val, R, RT) {
        switch(R.n) {
            case 'BrtBeginSst': s.Count = val[0]; s.Unique = val[1]; break;
            case 'BrtSSTItem': s.push(val); break;
            case 'BrtEndSst': return true;
            /* TODO: produce a test case with a future record */
            case 'BrtFRTBegin': pass = true; break;
            case 'BrtFRTEnd': pass = false; break;
            default: if(!pass || opts.WTF) throw new Error("Unexpected record " + RT + " " + R.n);
        }
    });
    return s;
}

function write_BrtBeginSst(sst, o) {
    if(!o) o = new_buf(8);
    o.write_shift(4, sst.Count);
    o.write_shift(4, sst.Unique);
    return o;
}

var write_BrtSSTItem = write_RichStr;

function write_sst_bin(sst, opts) {
    var ba = buf_array();
    write_record(ba, "BrtBeginSst", write_BrtBeginSst(sst));
    for(var i = 0; i < sst.length; ++i) write_record(ba, "BrtSSTItem", write_BrtSSTItem(sst[i]));
    write_record(ba, "BrtEndSst");
    return ba.end();
}
function _JS2ANSI(str) { if(typeof cptable !== 'undefined') return cptable.utils.encode(1252, str); return str.split("").map(function(x) { return x.charCodeAt(0); }); }

/* [MS-OFFCRYPTO] 2.1.4 Version */
function parse_Version(blob, length) {
    var o = {};
    o.Major = blob.read_shift(2);
    o.Minor = blob.read_shift(2);
    return o;
}
/* [MS-OFFCRYPTO] 2.3.2 Encryption Header */
function parse_EncryptionHeader(blob, length) {
    var o = {};
    o.Flags = blob.read_shift(4);

    // Check if SizeExtra is 0x00000000
    var tmp = blob.read_shift(4);
    if(tmp !== 0) throw 'Unrecognized SizeExtra: ' + tmp;

    o.AlgID = blob.read_shift(4);
    switch(o.AlgID) {
        case 0: case 0x6801: case 0x660E: case 0x660F: case 0x6610: break;
        default: throw 'Unrecognized encryption algorithm: ' + o.AlgID;
    }
    parsenoop(blob, length-12);
    return o;
}

/* [MS-OFFCRYPTO] 2.3.3 Encryption Verifier */
function parse_EncryptionVerifier(blob, length) {
    return parsenoop(blob, length);
}
/* [MS-OFFCRYPTO] 2.3.5.1 RC4 CryptoAPI Encryption Header */
function parse_RC4CryptoHeader(blob, length) {
    var o = {};
    var vers = o.EncryptionVersionInfo = parse_Version(blob, 4); length -= 4;
    if(vers.Minor != 2) throw 'unrecognized minor version code: ' + vers.Minor;
    if(vers.Major > 4 || vers.Major < 2) throw 'unrecognized major version code: ' + vers.Major;
    o.Flags = blob.read_shift(4); length -= 4;
    var sz = blob.read_shift(4); length -= 4;
    o.EncryptionHeader = parse_EncryptionHeader(blob, sz); length -= sz;
    o.EncryptionVerifier = parse_EncryptionVerifier(blob, length);
    return o;
}
/* [MS-OFFCRYPTO] 2.3.6.1 RC4 Encryption Header */
function parse_RC4Header(blob, length) {
    var o = {};
    var vers = o.EncryptionVersionInfo = parse_Version(blob, 4); length -= 4;
    if(vers.Major != 1 || vers.Minor != 1) throw 'unrecognized version code ' + vers.Major + ' : ' + vers.Minor;
    o.Salt = blob.read_shift(16);
    o.EncryptedVerifier = blob.read_shift(16);
    o.EncryptedVerifierHash = blob.read_shift(16);
    return o;
}

/* [MS-OFFCRYPTO] 2.3.7.1 Binary Document Password Verifier Derivation */
function crypto_CreatePasswordVerifier_Method1(Password) {
    var Verifier = 0x0000, PasswordArray;
    var PasswordDecoded = _JS2ANSI(Password);
    var len = PasswordDecoded.length + 1, i, PasswordByte;
    var Intermediate1, Intermediate2, Intermediate3;
    PasswordArray = new_raw_buf(len);
    PasswordArray[0] = PasswordDecoded.length;
    for(i = 1; i != len; ++i) PasswordArray[i] = PasswordDecoded[i-1];
    for(i = len-1; i >= 0; --i) {
        PasswordByte = PasswordArray[i];
        Intermediate1 = ((Verifier & 0x4000) === 0x0000) ? 0 : 1;
        Intermediate2 = (Verifier << 1) & 0x7FFF;
        Intermediate3 = Intermediate1 | Intermediate2;
        Verifier = Intermediate3 ^ PasswordByte;
    }
    return Verifier ^ 0xCE4B;
}

/* [MS-OFFCRYPTO] 2.3.7.2 Binary Document XOR Array Initialization */
var crypto_CreateXorArray_Method1 = (function() {
    var PadArray = [0xBB, 0xFF, 0xFF, 0xBA, 0xFF, 0xFF, 0xB9, 0x80, 0x00, 0xBE, 0x0F, 0x00, 0xBF, 0x0F, 0x00];
    var InitialCode = [0xE1F0, 0x1D0F, 0xCC9C, 0x84C0, 0x110C, 0x0E10, 0xF1CE, 0x313E, 0x1872, 0xE139, 0xD40F, 0x84F9, 0x280C, 0xA96A, 0x4EC3];
    var XorMatrix = [0xAEFC, 0x4DD9, 0x9BB2, 0x2745, 0x4E8A, 0x9D14, 0x2A09, 0x7B61, 0xF6C2, 0xFDA5, 0xEB6B, 0xC6F7, 0x9DCF, 0x2BBF, 0x4563, 0x8AC6, 0x05AD, 0x0B5A, 0x16B4, 0x2D68, 0x5AD0, 0x0375, 0x06EA, 0x0DD4, 0x1BA8, 0x3750, 0x6EA0, 0xDD40, 0xD849, 0xA0B3, 0x5147, 0xA28E, 0x553D, 0xAA7A, 0x44D5, 0x6F45, 0xDE8A, 0xAD35, 0x4A4B, 0x9496, 0x390D, 0x721A, 0xEB23, 0xC667, 0x9CEF, 0x29FF, 0x53FE, 0xA7FC, 0x5FD9, 0x47D3, 0x8FA6, 0x0F6D, 0x1EDA, 0x3DB4, 0x7B68, 0xF6D0, 0xB861, 0x60E3, 0xC1C6, 0x93AD, 0x377B, 0x6EF6, 0xDDEC, 0x45A0, 0x8B40, 0x06A1, 0x0D42, 0x1A84, 0x3508, 0x6A10, 0xAA51, 0x4483, 0x8906, 0x022D, 0x045A, 0x08B4, 0x1168, 0x76B4, 0xED68, 0xCAF1, 0x85C3, 0x1BA7, 0x374E, 0x6E9C, 0x3730, 0x6E60, 0xDCC0, 0xA9A1, 0x4363, 0x86C6, 0x1DAD, 0x3331, 0x6662, 0xCCC4, 0x89A9, 0x0373, 0x06E6, 0x0DCC, 0x1021, 0x2042, 0x4084, 0x8108, 0x1231, 0x2462, 0x48C4];
    var Ror = function(Byte) { return ((Byte/2) | (Byte*128)) & 0xFF; };
    var XorRor = function(byte1, byte2) { return Ror(byte1 ^ byte2); };
    var CreateXorKey_Method1 = function(Password) {
        var XorKey = InitialCode[Password.length - 1];
        var CurrentElement = 0x68;
        for(var i = Password.length-1; i >= 0; --i) {
            var Char = Password[i];
            for(var j = 0; j != 7; ++j) {
                if(Char & 0x40) XorKey ^= XorMatrix[CurrentElement];
                Char *= 2; --CurrentElement;
            }
        }
        return XorKey;
    };
    return function(password) {
        var Password = _JS2ANSI(password);
        var XorKey = CreateXorKey_Method1(Password);
        var Index = Password.length;
        var ObfuscationArray = new_raw_buf(16);
        for(var i = 0; i != 16; ++i) ObfuscationArray[i] = 0x00;
        var Temp, PasswordLastChar, PadIndex;
        if((Index & 1) === 1) {
            Temp = XorKey >> 8;
            ObfuscationArray[Index] = XorRor(PadArray[0], Temp);
            --Index;
            Temp = XorKey & 0xFF;
            PasswordLastChar = Password[Password.length - 1];
            ObfuscationArray[Index] = XorRor(PasswordLastChar, Temp);
        }
        while(Index > 0) {
            --Index;
            Temp = XorKey >> 8;
            ObfuscationArray[Index] = XorRor(Password[Index], Temp);
            --Index;
            Temp = XorKey & 0xFF;
            ObfuscationArray[Index] = XorRor(Password[Index], Temp);
        }
        Index = 15;
        PadIndex = 15 - Password.length;
        while(PadIndex > 0) {
            Temp = XorKey >> 8;
            ObfuscationArray[Index] = XorRor(PadArray[PadIndex], Temp);
            --Index;
            --PadIndex;
            Temp = XorKey & 0xFF;
            ObfuscationArray[Index] = XorRor(Password[Index], Temp);
            --Index;
            --PadIndex;
        }
        return ObfuscationArray;
    };
})();

/* [MS-OFFCRYPTO] 2.3.7.3 Binary Document XOR Data Transformation Method 1 */
var crypto_DecryptData_Method1 = function(password, Data, XorArrayIndex, XorArray, O) {
    /* If XorArray is set, use it; if O is not set, make changes in-place */
    if(!O) O = Data;
    if(!XorArray) XorArray = crypto_CreateXorArray_Method1(password);
    var Index, Value;
    for(Index = 0; Index != Data.length; ++Index) {
        Value = Data[Index];
        Value ^= XorArray[XorArrayIndex];
        Value = ((Value>>5) | (Value<<3)) & 0xFF;
        O[Index] = Value;
        ++XorArrayIndex;
    }
    return [O, XorArrayIndex, XorArray];
};

var crypto_MakeXorDecryptor = function(password) {
    var XorArrayIndex = 0, XorArray = crypto_CreateXorArray_Method1(password);
    return function(Data) {
        var O = crypto_DecryptData_Method1(null, Data, XorArrayIndex, XorArray);
        XorArrayIndex = O[1];
        return O[0];
    };
};

/* 2.5.343 */
function parse_XORObfuscation(blob, length, opts, out) {
    var o = { key: parseuint16(blob), verificationBytes: parseuint16(blob) };
    if(opts.password) o.verifier = crypto_CreatePasswordVerifier_Method1(opts.password);
    out.valid = o.verificationBytes === o.verifier;
    if(out.valid) out.insitu_decrypt = crypto_MakeXorDecryptor(opts.password);
    return o;
}

/* 2.4.117 */
function parse_FilePassHeader(blob, length, oo) {
    var o = oo || {}; o.Info = blob.read_shift(2); blob.l -= 2;
    if(o.Info === 1) o.Data = parse_RC4Header(blob, length);
    else o.Data = parse_RC4CryptoHeader(blob, length);
    return o;
}
function parse_FilePass(blob, length, opts) {
    var o = { Type: blob.read_shift(2) }; /* wEncryptionType */
    if(o.Type) parse_FilePassHeader(blob, length-2, o);
    else parse_XORObfuscation(blob, length-2, opts, o);
    return o;
}


function hex2RGB(h) {
    var o = h.substr(h[0]==="#"?1:0,6);
    return [parseInt(o.substr(0,2),16),parseInt(o.substr(0,2),16),parseInt(o.substr(0,2),16)];
}
function rgb2Hex(rgb) {
    for(var i=0,o=1; i!=3; ++i) o = o*256 + (rgb[i]>255?255:rgb[i]<0?0:rgb[i]);
    return o.toString(16).toUpperCase().substr(1);
}

function rgb2HSL(rgb) {
    var R = rgb[0]/255, G = rgb[1]/255, B=rgb[2]/255;
    var M = Math.max(R, G, B), m = Math.min(R, G, B), C = M - m;
    if(C === 0) return [0, 0, R];

    var H6 = 0, S = 0, L2 = (M + m);
    S = C / (L2 > 1 ? 2 - L2 : L2);
    switch(M){
        case R: H6 = ((G - B) / C + 6)%6; break;
        case G: H6 = ((B - R) / C + 2); break;
        case B: H6 = ((R - G) / C + 4); break;
    }
    return [H6 / 6, S, L2 / 2];
}

function hsl2RGB(hsl){
    var H = hsl[0], S = hsl[1], L = hsl[2];
    var C = S * 2 * (L < 0.5 ? L : 1 - L), m = L - C/2;
    var rgb = [m,m,m], h6 = 6*H;

    var X;
    if(S !== 0) switch(h6|0) {
        case 0: case 6: X = C * h6; rgb[0] += C; rgb[1] += X; break;
        case 1: X = C * (2 - h6);   rgb[0] += X; rgb[1] += C; break;
        case 2: X = C * (h6 - 2);   rgb[1] += C; rgb[2] += X; break;
        case 3: X = C * (4 - h6);   rgb[1] += X; rgb[2] += C; break;
        case 4: X = C * (h6 - 4);   rgb[2] += C; rgb[0] += X; break;
        case 5: X = C * (6 - h6);   rgb[2] += X; rgb[0] += C; break;
    }
    for(var i = 0; i != 3; ++i) rgb[i] = Math.round(rgb[i]*255);
    return rgb;
}

/* 18.8.3 bgColor tint algorithm */
function rgb_tint(hex, tint) {
    if(tint === 0) return hex;
    var hsl = rgb2HSL(hex2RGB(hex));
    if (tint < 0) hsl[2] = hsl[2] * (1 + tint);
    else hsl[2] = 1 - (1 - hsl[2]) * (1 - tint);
    return rgb2Hex(hsl2RGB(hsl));
}

/* 18.3.1.13 width calculations */
var DEF_MDW = 7, MAX_MDW = 15, MIN_MDW = 1, MDW = DEF_MDW;
function width2px(width) { return (( width + ((128/MDW)|0)/256 )* MDW )|0; }
function px2char(px) { return (((px - 5)/MDW * 100 + 0.5)|0)/100; }
function char2width(chr) { return (((chr * MDW + 5)/MDW*256)|0)/256; }
function cycle_width(collw) { return char2width(px2char(width2px(collw))); }
function find_mdw(collw, coll) {
    if(cycle_width(collw) != collw) {
        for(MDW=DEF_MDW; MDW>MIN_MDW; --MDW) if(cycle_width(collw) === collw) break;
        if(MDW === MIN_MDW) for(MDW=DEF_MDW+1; MDW<MAX_MDW; ++MDW) if(cycle_width(collw) === collw) break;
        if(MDW === MAX_MDW) MDW = DEF_MDW;
    }
}

/* [MS-EXSPXML3] 2.4.54 ST_enmPattern */
var XLMLPatternTypeMap = {
    "None": "none",
    "Solid": "solid",
    "Gray50": "mediumGray",
    "Gray75": "darkGray",
    "Gray25": "lightGray",
    "HorzStripe": "darkHorizontal",
    "VertStripe": "darkVertical",
    "ReverseDiagStripe": "darkDown",
    "DiagStripe": "darkUp",
    "DiagCross": "darkGrid",
    "ThickDiagCross": "darkTrellis",
    "ThinHorzStripe": "lightHorizontal",
    "ThinVertStripe": "lightVertical",
    "ThinReverseDiagStripe": "lightDown",
    "ThinHorzCross": "lightGrid"
};

var styles = {}; // shared styles

var themes = {}; // shared themes

/* 18.8.21 fills CT_Fills */
function parse_fills(t, opts) {
    styles.Fills = [];
    var fill = {};
    t[0].match(tagregex).forEach(function(x) {
        var y = parsexmltag(x);
        switch(y[0]) {
            case '<fills': case '<fills>': case '</fills>': break;

            /* 18.8.20 fill CT_Fill */
            case '<fill>': break;
            case '</fill>': styles.Fills.push(fill); fill = {}; break;

            /* 18.8.32 patternFill CT_PatternFill */
            case '<patternFill':
                if(y.patternType) fill.patternType = y.patternType;
                break;
            case '<patternFill/>': case '</patternFill>': break;

            /* 18.8.3 bgColor CT_Color */
            case '<bgColor':
                if(!fill.bgColor) fill.bgColor = {};
                if(y.indexed) fill.bgColor.indexed = parseInt(y.indexed, 10);
                if(y.theme) fill.bgColor.theme = parseInt(y.theme, 10);
                if(y.tint) fill.bgColor.tint = parseFloat(y.tint);
                /* Excel uses ARGB strings */
                if(y.rgb) fill.bgColor.rgb = y.rgb.substring(y.rgb.length - 6);
                break;
            case '<bgColor/>': case '</bgColor>': break;

            /* 18.8.19 fgColor CT_Color */
            case '<fgColor':
                if(!fill.fgColor) fill.fgColor = {};
                if(y.theme) fill.fgColor.theme = parseInt(y.theme, 10);
                if(y.tint) fill.fgColor.tint = parseFloat(y.tint);
                /* Excel uses ARGB strings */
                if(y.rgb) fill.fgColor.rgb = y.rgb.substring(y.rgb.length - 6);
                break;
            case '<fgColor/>': case '</fgColor>': break;

            default: if(opts.WTF) throw 'unrecognized ' + y[0] + ' in fills';
        }
    });
}

/* 18.8.31 numFmts CT_NumFmts */
function parse_numFmts(t, opts) {
    styles.NumberFmt = [];
    var k = keys(SSF._table);
    for(var i=0; i < k.length; ++i) styles.NumberFmt[k[i]] = SSF._table[k[i]];
    var m = t[0].match(tagregex);
    for(i=0; i < m.length; ++i) {
        var y = parsexmltag(m[i]);
        switch(y[0]) {
            case '<numFmts': case '</numFmts>': case '<numFmts/>': case '<numFmts>': break;
            case '<numFmt': {
                var f=unescapexml(utf8read(y.formatCode)), j=parseInt(y.numFmtId,10);
                styles.NumberFmt[j] = f; if(j>0) SSF.load(f,j);
            } break;
            default: if(opts.WTF) throw 'unrecognized ' + y[0] + ' in numFmts';
        }
    }
}

function write_numFmts(NF, opts) {
    var o = ["<numFmts>"];
    [[5,8],[23,26],[41,44],[63,66],[164,392]].forEach(function(r) {
        for(var i = r[0]; i <= r[1]; ++i) if(NF[i] !== undefined) o[o.length] = (writextag('numFmt',null,{numFmtId:i,formatCode:escapexml(NF[i])}));
    });
    if(o.length === 1) return "";
    o[o.length] = ("</numFmts>");
    o[0] = writextag('numFmts', null, { count:o.length-2 }).replace("/>", ">");
    return o.join("");
}

/* 18.8.10 cellXfs CT_CellXfs */
function parse_cellXfs(t, opts) {
    styles.CellXf = [];
    t[0].match(tagregex).forEach(function(x) {
        var y = parsexmltag(x);
        switch(y[0]) {
            case '<cellXfs': case '<cellXfs>': case '<cellXfs/>': case '</cellXfs>': break;

            /* 18.8.45 xf CT_Xf */
            case '<xf': delete y[0];
                if(y.numFmtId) y.numFmtId = parseInt(y.numFmtId, 10);
                if(y.fillId) y.fillId = parseInt(y.fillId, 10);
                styles.CellXf.push(y); break;
            case '</xf>': break;

            /* 18.8.1 alignment CT_CellAlignment */
            case '<alignment': case '<alignment/>': break;

            /* 18.8.33 protection CT_CellProtection */
            case '<protection': case '</protection>': case '<protection/>': break;

            case '<extLst': case '</extLst>': break;
            case '<ext': break;
            default: if(opts.WTF) throw 'unrecognized ' + y[0] + ' in cellXfs';
        }
    });
}

function write_cellXfs(cellXfs) {
    var o = [];
    o[o.length] = (writextag('cellXfs',null));
    cellXfs.forEach(function(c) { o[o.length] = (writextag('xf', null, c)); });
    o[o.length] = ("</cellXfs>");
    if(o.length === 2) return "";
    o[0] = writextag('cellXfs',null, {count:o.length-2}).replace("/>",">");
    return o.join("");
}

/* 18.8 Styles CT_Stylesheet*/
var parse_sty_xml= (function make_pstyx() {
var numFmtRegex = /<numFmts([^>]*)>.*<\/numFmts>/;
var cellXfRegex = /<cellXfs([^>]*)>.*<\/cellXfs>/;
var fillsRegex = /<fills([^>]*)>.*<\/fills>/;

return function parse_sty_xml(data, opts) {
    /* 18.8.39 styleSheet CT_Stylesheet */
    var t;

    /* numFmts CT_NumFmts ? */
    if((t=data.match(numFmtRegex))) parse_numFmts(t, opts);

    /* fonts CT_Fonts ? */
    /*if((t=data.match(/<fonts([^>]*)>.*<\/fonts>/))) parse_fonts(t, opts);*/

    /* fills CT_Fills */
    if((t=data.match(fillsRegex))) parse_fills(t, opts);

    /* borders CT_Borders ? */
    /* cellStyleXfs CT_CellStyleXfs ? */

    /* cellXfs CT_CellXfs ? */
    if((t=data.match(cellXfRegex))) parse_cellXfs(t, opts);

    /* dxfs CT_Dxfs ? */
    /* tableStyles CT_TableStyles ? */
    /* colors CT_Colors ? */
    /* extLst CT_ExtensionList ? */

    return styles;
};
})();

var STYLES_XML_ROOT = writextag('styleSheet', null, {
    'xmlns': XMLNS.main[0],
    'xmlns:vt': XMLNS.vt
});

RELS.STY = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";

function write_sty_xml(wb, opts) {
    var o = [XML_HEADER, STYLES_XML_ROOT], w;
    if((w = write_numFmts(wb.SSF)) != null) o[o.length] = w;
    o[o.length] = ('<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>');
    o[o.length] = ('<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>');
    o[o.length] = ('<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>');
    o[o.length] = ('<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>');
    if((w = write_cellXfs(opts.cellXfs))) o[o.length] = (w);
    o[o.length] = ('<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>');
    o[o.length] = ('<dxfs count="0"/>');
    o[o.length] = ('<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>');

    if(o.length>2){ o[o.length] = ('</styleSheet>'); o[1]=o[1].replace("/>",">"); }
    return o.join("");
}
/* [MS-XLSB] 2.4.651 BrtFmt */
function parse_BrtFmt(data, length) {
    var ifmt = data.read_shift(2);
    var stFmtCode = parse_XLWideString(data,length-2);
    return [ifmt, stFmtCode];
}

/* [MS-XLSB] 2.4.653 BrtFont TODO */
function parse_BrtFont(data, length) {
    var out = {flags:{}};
    out.dyHeight = data.read_shift(2);
    out.grbit = parse_FontFlags(data, 2);
    out.bls = data.read_shift(2);
    out.sss = data.read_shift(2);
    out.uls = data.read_shift(1);
    out.bFamily = data.read_shift(1);
    out.bCharSet = data.read_shift(1);
    data.l++;
    out.brtColor = parse_BrtColor(data, 8);
    out.bFontScheme = data.read_shift(1);
    out.name = parse_XLWideString(data, length - 21);

    out.flags.Bold = out.bls === 0x02BC;
    out.flags.Italic = out.grbit.fItalic;
    out.flags.Strikeout = out.grbit.fStrikeout;
    out.flags.Outline = out.grbit.fOutline;
    out.flags.Shadow = out.grbit.fShadow;
    out.flags.Condense = out.grbit.fCondense;
    out.flags.Extend = out.grbit.fExtend;
    out.flags.Sub = out.sss & 0x2;
    out.flags.Sup = out.sss & 0x1;
    return out;
}

/* [MS-XLSB] 2.4.816 BrtXF */
function parse_BrtXF(data, length) {
    var ixfeParent = data.read_shift(2);
    var ifmt = data.read_shift(2);
    parsenoop(data, length-4);
    return {ixfe:ixfeParent, ifmt:ifmt };
}

/* [MS-XLSB] 2.1.7.50 Styles */
function parse_sty_bin(data, opts) {
    styles.NumberFmt = [];
    for(var y in SSF._table) styles.NumberFmt[y] = SSF._table[y];

    styles.CellXf = [];
    var state = ""; /* TODO: this should be a stack */
    var pass = false;
    recordhopper(data, function hopper_sty(val, R, RT) {
        switch(R.n) {
            case 'BrtFmt':
                styles.NumberFmt[val[0]] = val[1]; SSF.load(val[1], val[0]);
                break;
            case 'BrtFont': break; /* TODO */
            case 'BrtKnownFonts': break; /* TODO */
            case 'BrtFill': break; /* TODO */
            case 'BrtBorder': break; /* TODO */
            case 'BrtXF':
                if(state === "CELLXFS") {
                    styles.CellXf.push(val);
                }
                break; /* TODO */
            case 'BrtStyle': break; /* TODO */
            case 'BrtDXF': break; /* TODO */
            case 'BrtMRUColor': break; /* TODO */
            case 'BrtIndexedColor': break; /* TODO */
            case 'BrtBeginStyleSheet': break;
            case 'BrtEndStyleSheet': break;
            case 'BrtBeginTableStyle': break;
            case 'BrtTableStyleElement': break;
            case 'BrtEndTableStyle': break;
            case 'BrtBeginFmts': state = "FMTS"; break;
            case 'BrtEndFmts': state = ""; break;
            case 'BrtBeginFonts': state = "FONTS"; break;
            case 'BrtEndFonts': state = ""; break;
            case 'BrtACBegin': state = "ACFONTS"; break;
            case 'BrtACEnd': state = ""; break;
            case 'BrtBeginFills': state = "FILLS"; break;
            case 'BrtEndFills': state = ""; break;
            case 'BrtBeginBorders': state = "BORDERS"; break;
            case 'BrtEndBorders': state = ""; break;
            case 'BrtBeginCellStyleXFs': state = "CELLSTYLEXFS"; break;
            case 'BrtEndCellStyleXFs': state = ""; break;
            case 'BrtBeginCellXFs': state = "CELLXFS"; break;
            case 'BrtEndCellXFs': state = ""; break;
            case 'BrtBeginStyles': state = "STYLES"; break;
            case 'BrtEndStyles': state = ""; break;
            case 'BrtBeginDXFs': state = "DXFS"; break;
            case 'BrtEndDXFs': state = ""; break;
            case 'BrtBeginTableStyles': state = "TABLESTYLES"; break;
            case 'BrtEndTableStyles': state = ""; break;
            case 'BrtBeginColorPalette': state = "COLORPALETTE"; break;
            case 'BrtEndColorPalette': state = ""; break;
            case 'BrtBeginIndexedColors': state = "INDEXEDCOLORS"; break;
            case 'BrtEndIndexedColors': state = ""; break;
            case 'BrtBeginMRUColors': state = "MRUCOLORS"; break;
            case 'BrtEndMRUColors': state = ""; break;
            case 'BrtFRTBegin': pass = true; break;
            case 'BrtFRTEnd': pass = false; break;
            case 'BrtBeginStyleSheetExt14': break;
            case 'BrtBeginSlicerStyles': break;
            case 'BrtEndSlicerStyles': break;
            case 'BrtBeginTimelineStylesheetExt15': break;
            case 'BrtEndTimelineStylesheetExt15': break;
            case 'BrtBeginTimelineStyles': break;
            case 'BrtEndTimelineStyles': break;
            case 'BrtEndStyleSheetExt14': break;
            default: if(!pass || opts.WTF) throw new Error("Unexpected record " + RT + " " + R.n);
        }
    });
    return styles;
}

/* [MS-XLSB] 2.1.7.50 Styles */
function write_sty_bin(data, opts) {
    var ba = buf_array();
    write_record(ba, "BrtBeginStyleSheet");
    /* [FMTS] */
    /* [FONTS] */
    /* [FILLS] */
    /* [BORDERS] */
    /* CELLSTYLEXFS */
    /* CELLXFS*/
    /* STYLES */
    /* DXFS */
    /* TABLESTYLES */
    /* [COLORPALETTE] */
    /* FRTSTYLESHEET*/
    write_record(ba, "BrtEndStyleSheet");
    return ba.end();
}
RELS.THEME = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme";

/* 20.1.6.2 clrScheme CT_ColorScheme */
function parse_clrScheme(t, opts) {
    themes.themeElements.clrScheme = [];
    var color = {};
    t[0].match(tagregex).forEach(function(x) {
        var y = parsexmltag(x);
        switch(y[0]) {
            case '<a:clrScheme': case '</a:clrScheme>': break;

            /* 20.1.2.3.32 srgbClr CT_SRgbColor */
            case '<a:srgbClr': color.rgb = y.val; break;

            /* 20.1.2.3.33 sysClr CT_SystemColor */
            case '<a:sysClr': color.rgb = y.lastClr; break;

            /* 20.1.4.1.9 dk1 (Dark 1) */
            case '<a:dk1>':
            case '</a:dk1>':
            /* 20.1.4.1.10 dk2 (Dark 2) */
            case '<a:dk2>':
            case '</a:dk2>':
            /* 20.1.4.1.22 lt1 (Light 1) */
            case '<a:lt1>':
            case '</a:lt1>':
            /* 20.1.4.1.23 lt2 (Light 2) */
            case '<a:lt2>':
            case '</a:lt2>':
            /* 20.1.4.1.1 accent1 (Accent 1) */
            case '<a:accent1>':
            case '</a:accent1>':
            /* 20.1.4.1.2 accent2 (Accent 2) */
            case '<a:accent2>':
            case '</a:accent2>':
            /* 20.1.4.1.3 accent3 (Accent 3) */
            case '<a:accent3>':
            case '</a:accent3>':
            /* 20.1.4.1.4 accent4 (Accent 4) */
            case '<a:accent4>':
            case '</a:accent4>':
            /* 20.1.4.1.5 accent5 (Accent 5) */
            case '<a:accent5>':
            case '</a:accent5>':
            /* 20.1.4.1.6 accent6 (Accent 6) */
            case '<a:accent6>':
            case '</a:accent6>':
            /* 20.1.4.1.19 hlink (Hyperlink) */
            case '<a:hlink>':
            case '</a:hlink>':
            /* 20.1.4.1.15 folHlink (Followed Hyperlink) */
            case '<a:folHlink>':
            case '</a:folHlink>':
                if (y[0][1] === '/') {
                    themes.themeElements.clrScheme.push(color);
                    color = {};
                } else {
                    color.name = y[0].substring(3, y[0].length - 1);
                }
                break;

            default: if(opts.WTF) throw 'unrecognized ' + y[0] + ' in clrScheme';
        }
    });
}

/* 20.1.4.1.18 fontScheme CT_FontScheme */
function parse_fontScheme(t, opts) { }

/* 20.1.4.1.15 fmtScheme CT_StyleMatrix */
function parse_fmtScheme(t, opts) { }

var clrsregex = /<a:clrScheme([^>]*)>[^\u2603]*<\/a:clrScheme>/;
var fntsregex = /<a:fontScheme([^>]*)>[^\u2603]*<\/a:fontScheme>/;
var fmtsregex = /<a:fmtScheme([^>]*)>[^\u2603]*<\/a:fmtScheme>/;

/* 20.1.6.10 themeElements CT_BaseStyles */
function parse_themeElements(data, opts) {
    themes.themeElements = {};

    var t;

    [
        /* clrScheme CT_ColorScheme */
        ['clrScheme', clrsregex, parse_clrScheme],
        /* fontScheme CT_FontScheme */
        ['fontScheme', fntsregex, parse_fontScheme],
        /* fmtScheme CT_StyleMatrix */
        ['fmtScheme', fmtsregex, parse_fmtScheme]
    ].forEach(function(m) {
        if(!(t=data.match(m[1]))) throw m[0] + ' not found in themeElements';
        m[2](t, opts);
    });
}

var themeltregex = /<a:themeElements([^>]*)>[^\u2603]*<\/a:themeElements>/;

/* 14.2.7 Theme Part */
function parse_theme_xml(data, opts) {
    /* 20.1.6.9 theme CT_OfficeStyleSheet */
    if(!data || data.length === 0) return themes;

    var t;

    /* themeElements CT_BaseStyles */
    if(!(t=data.match(themeltregex))) throw 'themeElements not found in theme';
    parse_themeElements(t[0], opts);

    return themes;
}

function write_theme() { return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="1F497D"/></a:dk2><a:lt2><a:srgbClr val="EEECE1"/></a:lt2><a:accent1><a:srgbClr val="4F81BD"/></a:accent1><a:accent2><a:srgbClr val="C0504D"/></a:accent2><a:accent3><a:srgbClr val="9BBB59"/></a:accent3><a:accent4><a:srgbClr val="8064A2"/></a:accent4><a:accent5><a:srgbClr val="4BACC6"/></a:accent5><a:accent6><a:srgbClr val="F79646"/></a:accent6><a:hlink><a:srgbClr val="0000FF"/></a:hlink><a:folHlink><a:srgbClr val="800080"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Cambria"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="宋体"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="宋体"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs><a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="16200000" scaled="1"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="16200000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln><a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln><a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst><a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw></a:effectLst><a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d><a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs><a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs></a:gsLst><a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs></a:gsLst><a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults><a:spDef><a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style></a:spDef><a:lnDef><a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style></a:lnDef></a:objectDefaults><a:extraClrSchemeLst/></a:theme>'; }
/* [MS-XLS] 2.4.326 TODO: payload is a zip file */
function parse_Theme(blob, length) {
    var dwThemeVersion = blob.read_shift(4);
    if(dwThemeVersion === 124226) return;
    blob.l += length-4;
}

/* 2.5.49 */
function parse_ColorTheme(blob, length) { return blob.read_shift(4); }

/* 2.5.155 */
function parse_FullColorExt(blob, length) {
    var o = {};
    o.xclrType = blob.read_shift(2);
    o.nTintShade = blob.read_shift(2);
    switch(o.xclrType) {
        case 0: blob.l += 4; break;
        case 1: o.xclrValue = parse_IcvXF(blob, 4); break;
        case 2: o.xclrValue = parse_LongRGBA(blob, 4); break;
        case 3: o.xclrValue = parse_ColorTheme(blob, 4); break;
        case 4: blob.l += 4; break;
    }
    blob.l += 8;
    return o;
}

/* 2.5.164 TODO: read 7 bits*/
function parse_IcvXF(blob, length) {
    return parsenoop(blob, length);
}

/* 2.5.280 */
function parse_XFExtGradient(blob, length) {
    return parsenoop(blob, length);
}

/* 2.5.108 */
function parse_ExtProp(blob, length) {
    var extType = blob.read_shift(2);
    var cb = blob.read_shift(2);
    var o = [extType];
    switch(extType) {
        case 0x04: case 0x05: case 0x07: case 0x08:
        case 0x09: case 0x0A: case 0x0B: case 0x0D:
            o[1] = parse_FullColorExt(blob, cb); break;
        case 0x06: o[1] = parse_XFExtGradient(blob, cb); break;
        case 0x0E: case 0x0F: o[1] = blob.read_shift(cb === 5 ? 1 : 2); break;
        default: throw new Error("Unrecognized ExtProp type: " + extType + " " + cb);
    }
    return o;
}

/* 2.4.355 */
function parse_XFExt(blob, length) {
    var end = blob.l + length;
    blob.l += 2;
    var ixfe = blob.read_shift(2);
    blob.l += 2;
    var cexts = blob.read_shift(2);
    var ext = [];
    while(cexts-- > 0) ext.push(parse_ExtProp(blob, end-blob.l));
    return {ixfe:ixfe, ext:ext};
}

/* xf is an XF, see parse_XFExt for xfext */
function update_xfext(xf, xfext) {
    xfext.forEach(function(xfe) {
        switch(xfe[0]) { /* 2.5.108 extPropData */
            case 0x04: break; /* foreground color */
            case 0x05: break; /* background color */
            case 0x07: case 0x08: case 0x09: case 0x0a: break;
            case 0x0d: break; /* text color */
            case 0x0e: break; /* font scheme */
            default: throw "bafuq" + xfe[0].toString(16);
        }
    });
}

/* 18.6 Calculation Chain */
function parse_cc_xml(data, opts) {
    var d = [];
    var l = 0, i = 1;
    (data.match(tagregex)||[]).forEach(function(x) {
        var y = parsexmltag(x);
        switch(y[0]) {
            case '<?xml': break;
            /* 18.6.2  calcChain CT_CalcChain 1 */
            case '<calcChain': case '<calcChain>': case '</calcChain>': break;
            /* 18.6.1  c CT_CalcCell 1 */
            case '<c': delete y[0]; if(y.i) i = y.i; else y.i = i; d.push(y); break;
        }
    });
    return d;
}

function write_cc_xml(data, opts) { }
/* [MS-XLSB] 2.6.4.1 */
function parse_BrtCalcChainItem$(data, length) {
    var out = {};
    out.i = data.read_shift(4);
    var cell = {};
    cell.r = data.read_shift(4);
    cell.c = data.read_shift(4);
    out.r = encode_cell(cell);
    var flags = data.read_shift(1);
    if(flags & 0x2) out.l = '1';
    if(flags & 0x8) out.a = '1';
    return out;
}

/* 18.6 Calculation Chain */
function parse_cc_bin(data, opts) {
    var out = [];
    var pass = false;
    recordhopper(data, function hopper_cc(val, R, RT) {
        switch(R.n) {
            case 'BrtCalcChainItem$': out.push(val); break;
            case 'BrtBeginCalcChain$': break;
            case 'BrtEndCalcChain$': break;
            default: if(!pass || opts.WTF) throw new Error("Unexpected record " + RT + " " + R.n);
        }
    });
    return out;
}

function write_cc_bin(data, opts) { }

function parse_comments(zip, dirComments, sheets, sheetRels, opts) {
    for(var i = 0; i != dirComments.length; ++i) {
        var canonicalpath=dirComments[i];
        var comments=parse_cmnt(getzipdata(zip, canonicalpath.replace(/^\//,''), true), canonicalpath, opts);
        if(!comments || !comments.length) continue;
        // find the sheets targeted by these comments
        var sheetNames = keys(sheets);
        for(var j = 0; j != sheetNames.length; ++j) {
            var sheetName = sheetNames[j];
            var rels = sheetRels[sheetName];
            if(rels) {
                var rel = rels[canonicalpath];
                if(rel) insertCommentsIntoSheet(sheetName, sheets[sheetName], comments);
            }
        }
    }
}

function insertCommentsIntoSheet(sheetName, sheet, comments) {
    comments.forEach(function(comment) {
        var cell = sheet[comment.ref];
        if (!cell) {
            cell = {};
            sheet[comment.ref] = cell;
            var range = safe_decode_range(sheet["!ref"]||"BDWGO1000001:A1");
            var thisCell = decode_cell(comment.ref);
            if(range.s.r > thisCell.r) range.s.r = thisCell.r;
            if(range.e.r < thisCell.r) range.e.r = thisCell.r;
            if(range.s.c > thisCell.c) range.s.c = thisCell.c;
            if(range.e.c < thisCell.c) range.e.c = thisCell.c;
            var encoded = encode_range(range);
            if (encoded !== sheet["!ref"]) sheet["!ref"] = encoded;
        }

        if (!cell.c) cell.c = [];
        var o = {a: comment.author, t: comment.t, r: comment.r};
        if(comment.h) o.h = comment.h;
        cell.c.push(o);
    });
}

/* 18.7.3 CT_Comment */
function parse_comments_xml(data, opts) {
    if(data.match(/<(?:\w+:)?comments *\/>/)) return [];
    var authors = [];
    var commentList = [];
    data.match(/<(?:\w+:)?authors>([^\u2603]*)<\/(?:\w+:)?authors>/)[1].split(/<\/\w*:?author>/).forEach(function(x) {
        if(x === "" || x.trim() === "") return;
        authors.push(x.match(/<(?:\w+:)?author[^>]*>(.*)/)[1]);
    });
    (data.match(/<(?:\w+:)?commentList>([^\u2603]*)<\/(?:\w+:)?commentList>/)||["",""])[1].split(/<\/\w*:?comment>/).forEach(function(x, index) {
        if(x === "" || x.trim() === "") return;
        var y = parsexmltag(x.match(/<(?:\w+:)?comment[^>]*>/)[0]);
        var comment = { author: y.authorId && authors[y.authorId] ? authors[y.authorId] : undefined, ref: y.ref, guid: y.guid };
        var cell = decode_cell(y.ref);
        if(opts.sheetRows && opts.sheetRows <= cell.r) return;
        var textMatch = x.match(/<text>([^\u2603]*)<\/text>/);
        if (!textMatch || !textMatch[1]) return; // a comment may contain an empty text tag.
        var rt = parse_si(textMatch[1]);
        comment.r = rt.r;
        comment.t = rt.t;
        if(opts.cellHTML) comment.h = rt.h;
        commentList.push(comment);
    });
    return commentList;
}

function write_comments_xml(data, opts) { }
/* [MS-XLSB] 2.4.28 BrtBeginComment */
function parse_BrtBeginComment(data, length) {
    var out = {};
    out.iauthor = data.read_shift(4);
    var rfx = parse_UncheckedRfX(data, 16);
    out.rfx = rfx.s;
    out.ref = encode_cell(rfx.s);
    data.l += 16; /*var guid = parse_GUID(data); */
    return out;
}

/* [MS-XLSB] 2.4.324 BrtCommentAuthor */
var parse_BrtCommentAuthor = parse_XLWideString;

/* [MS-XLSB] 2.4.325 BrtCommentText */
var parse_BrtCommentText = parse_RichStr;

/* [MS-XLSB] 2.1.7.8 Comments */
function parse_comments_bin(data, opts) {
    var out = [];
    var authors = [];
    var c = {};
    var pass = false;
    recordhopper(data, function hopper_cmnt(val, R, RT) {
        switch(R.n) {
            case 'BrtCommentAuthor': authors.push(val); break;
            case 'BrtBeginComment': c = val; break;
            case 'BrtCommentText': c.t = val.t; c.h = val.h; c.r = val.r; break;
            case 'BrtEndComment':
                c.author = authors[c.iauthor];
                delete c.iauthor;
                if(opts.sheetRows && opts.sheetRows <= c.rfx.r) break;
                delete c.rfx; out.push(c); break;
            case 'BrtBeginComments': break;
            case 'BrtEndComments': break;
            case 'BrtBeginCommentAuthors': break;
            case 'BrtEndCommentAuthors': break;
            case 'BrtBeginCommentList': break;
            case 'BrtEndCommentList': break;
            default: if(!pass || opts.WTF) throw new Error("Unexpected record " + RT + " " + R.n);
        }
    });
    return out;
}

function write_comments_bin(data, opts) { }
/* TODO: it will be useful to parse the function str */
var rc_to_a1 = (function(){
    var rcregex = /(^|[^A-Za-z])R(\[?)(-?\d+|)\]?C(\[?)(-?\d+|)\]?/g;
    var rcbase;
    function rcfunc($$,$1,$2,$3,$4,$5) {
        var R = $3.length>0?parseInt($3,10)|0:0, C = $5.length>0?parseInt($5,10)|0:0;
        if(C<0 && $4.length === 0) C=0;
        if($4.length > 0) C += rcbase.c;
        if($2.length > 0) R += rcbase.r;
        return $1 + encode_col(C) + encode_row(R);
    }
    return function rc_to_a1(fstr, base) {
        rcbase = base;
        return fstr.replace(rcregex, rcfunc);
    };
})();

/* --- formula references point to MS-XLS --- */
/* Small helpers */
function parseread(l) { return function(blob, length) { blob.l+=l; return; }; }
function parseread1(blob, length) { blob.l+=1; return; }

/* Rgce Helpers */

/* 2.5.51 */
function parse_ColRelU(blob, length) {
    var c = blob.read_shift(2);
    return [c & 0x3FFF, (c >> 14) & 1, (c >> 15) & 1];
}

/* 2.5.198.105 */
function parse_RgceArea(blob, length) {
    var r=blob.read_shift(2), R=blob.read_shift(2);
    var c=parse_ColRelU(blob, 2);
    var C=parse_ColRelU(blob, 2);
    return { s:{r:r, c:c[0], cRel:c[1], rRel:c[2]}, e:{r:R, c:C[0], cRel:C[1], rRel:C[2]} };
}

/* 2.5.198.105 TODO */
function parse_RgceAreaRel(blob, length) {
    var r=blob.read_shift(2), R=blob.read_shift(2);
    var c=parse_ColRelU(blob, 2);
    var C=parse_ColRelU(blob, 2);
    return { s:{r:r, c:c[0], cRel:c[1], rRel:c[2]}, e:{r:R, c:C[0], cRel:C[1], rRel:C[2]} };
}

/* 2.5.198.109 */
function parse_RgceLoc(blob, length) {
    var r = blob.read_shift(2);
    var c = parse_ColRelU(blob, 2);
    return {r:r, c:c[0], cRel:c[1], rRel:c[2]};
}

/* 2.5.198.111 */
function parse_RgceLocRel(blob, length) {
    var r = blob.read_shift(2);
    var cl = blob.read_shift(2);
    var cRel = (cl & 0x8000) >> 15, rRel = (cl & 0x4000) >> 14;
    cl &= 0x3FFF;
    if(cRel !== 0) while(cl >= 0x100) cl -= 0x100;
    return {r:r,c:cl,cRel:cRel,rRel:rRel};
}

/* Ptg Tokens */

/* 2.5.198.27 */
function parse_PtgArea(blob, length) {
    var type = (blob[blob.l++] & 0x60) >> 5;
    var area = parse_RgceArea(blob, 8);
    return [type, area];
}

/* 2.5.198.28 */
function parse_PtgArea3d(blob, length) {
    var type = (blob[blob.l++] & 0x60) >> 5;
    var ixti = blob.read_shift(2);
    var area = parse_RgceArea(blob, 8);
    return [type, ixti, area];
}

/* 2.5.198.29 */
function parse_PtgAreaErr(blob, length) {
    var type = (blob[blob.l++] & 0x60) >> 5;
    blob.l += 8;
    return [type];
}
/* 2.5.198.30 */
function parse_PtgAreaErr3d(blob, length) {
    var type = (blob[blob.l++] & 0x60) >> 5;
    var ixti = blob.read_shift(2);
    blob.l += 8;
    return [type, ixti];
}

/* 2.5.198.31 */
function parse_PtgAreaN(blob, length) {
    var type = (blob[blob.l++] & 0x60) >> 5;
    var area = parse_RgceAreaRel(blob, 8);
    return [type, area];
}

/* 2.5.198.32 -- ignore this and look in PtgExtraArray for shape + values */
function parse_PtgArray(blob, length) {
    var type = (blob[blob.l++] & 0x60) >> 5;
    blob.l += 7;
    return [type];
}

/* 2.5.198.33 */
function parse_PtgAttrBaxcel(blob, length) {
    var bitSemi = blob[blob.l+1] & 0x01; /* 1 = volatile */
    var bitBaxcel = 1;
    blob.l += 4;
    return [bitSemi, bitBaxcel];
}

/* 2.5.198.34 */
function parse_PtgAttrChoose(blob, length) {
    blob.l +=2;
    var offset = blob.read_shift(2);
    var o = [];
    /* offset is 1 less than the number of elements */
    for(var i = 0; i <= offset; ++i) o.push(blob.read_shift(2));
    return o;
}

/* 2.5.198.35 */
function parse_PtgAttrGoto(blob, length) {
    var bitGoto = (blob[blob.l+1] & 0xFF) ? 1 : 0;
    blob.l += 2;
    return [bitGoto, blob.read_shift(2)];
}

/* 2.5.198.36 */
function parse_PtgAttrIf(blob, length) {
    var bitIf = (blob[blob.l+1] & 0xFF) ? 1 : 0;
    blob.l += 2;
    return [bitIf, blob.read_shift(2)];
}

/* 2.5.198.37 */
function parse_PtgAttrSemi(blob, length) {
    var bitSemi = (blob[blob.l+1] & 0xFF) ? 1 : 0;
    blob.l += 4;
    return [bitSemi];
}

/* 2.5.198.40 (used by PtgAttrSpace and PtgAttrSpaceSemi) */
function parse_PtgAttrSpaceType(blob, length) {
    var type = blob.read_shift(1), cch = blob.read_shift(1);
    return [type, cch];
}

/* 2.5.198.38 */
function parse_PtgAttrSpace(blob, length) {
    blob.read_shift(2);
    return parse_PtgAttrSpaceType(blob, 2);
}

/* 2.5.198.39 */
function parse_PtgAttrSpaceSemi(blob, length) {
    blob.read_shift(2);
    return parse_PtgAttrSpaceType(blob, 2);
}

/* 2.5.198.84 TODO */
function parse_PtgRef(blob, length) {
    var ptg = blob[blob.l] & 0x1F;
    var type = (blob[blob.l] & 0x60)>>5;
    blob.l += 1;
    var loc = parse_RgceLoc(blob,4);
    return [type, loc];
}

/* 2.5.198.88 TODO */
function parse_PtgRefN(blob, length) {
    var ptg = blob[blob.l] & 0x1F;
    var type = (blob[blob.l] & 0x60)>>5;
    blob.l += 1;
    var loc = parse_RgceLocRel(blob,4);
    return [type, loc];
}

/* 2.5.198.85 TODO */
function parse_PtgRef3d(blob, length) {
    var ptg = blob[blob.l] & 0x1F;
    var type = (blob[blob.l] & 0x60)>>5;
    blob.l += 1;
    var ixti = blob.read_shift(2); // XtiIndex
    var loc = parse_RgceLoc(blob,4);
    return [type, ixti, loc];
}


/* 2.5.198.62 TODO */
function parse_PtgFunc(blob, length) {
    var ptg = blob[blob.l] & 0x1F;
    var type = (blob[blob.l] & 0x60)>>5;
    blob.l += 1;
    var iftab = blob.read_shift(2);
    return [FtabArgc[iftab], Ftab[iftab]];
}
/* 2.5.198.63 TODO */
function parse_PtgFuncVar(blob, length) {
    blob.l++;
    var cparams = blob.read_shift(1), tab = parsetab(blob);
    return [cparams, (tab[0] === 0 ? Ftab : Cetab)[tab[1]]];
}

function parsetab(blob, length) {
    return [blob[blob.l+1]>>7, blob.read_shift(2) & 0x7FFF];
}

/* 2.5.198.41 */
var parse_PtgAttrSum = parseread(4);
/* 2.5.198.43 */
var parse_PtgConcat = parseread1;

/* 2.5.198.58 */
function parse_PtgExp(blob, length) {
    blob.l++;
    var row = blob.read_shift(2);
    var col = blob.read_shift(2);
    return [row, col];
}

/* 2.5.198.57 */
function parse_PtgErr(blob, length) { blob.l++; return BErr[blob.read_shift(1)]; }

/* 2.5.198.66 TODO */
function parse_PtgInt(blob, length) { blob.l++; return blob.read_shift(2); }

/* 2.5.198.42 */
function parse_PtgBool(blob, length) { blob.l++; return blob.read_shift(1)!==0;}

/* 2.5.198.79 */
function parse_PtgNum(blob, length) { blob.l++; return parse_Xnum(blob, 8); }

/* 2.5.198.89 */
function parse_PtgStr(blob, length) { blob.l++; return parse_ShortXLUnicodeString(blob); }

/* 2.5.192.112 + 2.5.192.11{3,4,5,6,7} */
function parse_SerAr(blob) {
    var val = [];
    switch((val[0] = blob.read_shift(1))) {
        /* 2.5.192.113 */
        case 0x04: /* SerBool -- boolean */
            val[1] = parsebool(blob, 1) ? 'TRUE' : 'FALSE';
            blob.l += 7; break;
        /* 2.5.192.114 */
        case 0x10: /* SerErr -- error */
            val[1] = BErr[blob[blob.l]];
            blob.l += 8; break;
        /* 2.5.192.115 */
        case 0x00: /* SerNil -- honestly, I'm not sure how to reproduce this */
            blob.l += 8; break;
        /* 2.5.192.116 */
        case 0x01: /* SerNum -- Xnum */
            val[1] = parse_Xnum(blob, 8); break;
        /* 2.5.192.117 */
        case 0x02: /* SerStr -- XLUnicodeString (<256 chars) */
            val[1] = parse_XLUnicodeString(blob); break;
        // default: throw "Bad SerAr: " + val[0]; /* Unreachable */
    }
    return val;
}

/* 2.5.198.61 */
function parse_PtgExtraMem(blob, cce) {
    var count = blob.read_shift(2);
    var out = [];
    for(var i = 0; i != count; ++i) out.push(parse_Ref8U(blob, 8));
    return out;
}

/* 2.5.198.59 */
function parse_PtgExtraArray(blob) {
    var cols = 1 + blob.read_shift(1); //DColByteU
    var rows = 1 + blob.read_shift(2); //DRw
    for(var i = 0, o=[]; i != rows && (o[i] = []); ++i)
        for(var j = 0; j != cols; ++j) o[i][j] = parse_SerAr(blob);
    return o;
}

/* 2.5.198.76 */
function parse_PtgName(blob, length) {
    var type = (blob.read_shift(1) >>> 5) & 0x03;
    var nameindex = blob.read_shift(4);
    return [type, 0, nameindex];
}

/* 2.5.198.77 */
function parse_PtgNameX(blob, length) {
    var type = (blob.read_shift(1) >>> 5) & 0x03;
    var ixti = blob.read_shift(2); // XtiIndex
    var nameindex = blob.read_shift(4);
    return [type, ixti, nameindex];
}

/* 2.5.198.70 */
function parse_PtgMemArea(blob, length) {
    var type = (blob.read_shift(1) >>> 5) & 0x03;
    blob.l += 4;
    var cce = blob.read_shift(2);
    return [type, cce];
}

/* 2.5.198.72 */
function parse_PtgMemFunc(blob, length) {
    var type = (blob.read_shift(1) >>> 5) & 0x03;
    var cce = blob.read_shift(2);
    return [type, cce];
}


/* 2.5.198.86 */
function parse_PtgRefErr(blob, length) {
    var type = (blob.read_shift(1) >>> 5) & 0x03;
    blob.l += 4;
    return [type];
}

/* 2.5.198.26 */
var parse_PtgAdd = parseread1;
/* 2.5.198.45 */
var parse_PtgDiv = parseread1;
/* 2.5.198.56 */
var parse_PtgEq = parseread1;
/* 2.5.198.64 */
var parse_PtgGe = parseread1;
/* 2.5.198.65 */
var parse_PtgGt = parseread1;
/* 2.5.198.67 */
var parse_PtgIsect = parseread1;
/* 2.5.198.68 */
var parse_PtgLe = parseread1;
/* 2.5.198.69 */
var parse_PtgLt = parseread1;
/* 2.5.198.74 */
var parse_PtgMissArg = parseread1;
/* 2.5.198.75 */
var parse_PtgMul = parseread1;
/* 2.5.198.78 */
var parse_PtgNe = parseread1;
/* 2.5.198.80 */
var parse_PtgParen = parseread1;
/* 2.5.198.81 */
var parse_PtgPercent = parseread1;
/* 2.5.198.82 */
var parse_PtgPower = parseread1;
/* 2.5.198.83 */
var parse_PtgRange = parseread1;
/* 2.5.198.90 */
var parse_PtgSub = parseread1;
/* 2.5.198.93 */
var parse_PtgUminus = parseread1;
/* 2.5.198.94 */
var parse_PtgUnion = parseread1;
/* 2.5.198.95 */
var parse_PtgUplus = parseread1;

/* 2.5.198.71 */
var parse_PtgMemErr = parsenoop;
/* 2.5.198.73 */
var parse_PtgMemNoMem = parsenoop;
/* 2.5.198.87 */
var parse_PtgRefErr3d = parsenoop;
/* 2.5.198.92 */
var parse_PtgTbl = parsenoop;

/* 2.5.198.25 */
var PtgTypes = {
    0x01: { n:'PtgExp', f:parse_PtgExp },
    0x02: { n:'PtgTbl', f:parse_PtgTbl },
    0x03: { n:'PtgAdd', f:parse_PtgAdd },
    0x04: { n:'PtgSub', f:parse_PtgSub },
    0x05: { n:'PtgMul', f:parse_PtgMul },
    0x06: { n:'PtgDiv', f:parse_PtgDiv },
    0x07: { n:'PtgPower', f:parse_PtgPower },
    0x08: { n:'PtgConcat', f:parse_PtgConcat },
    0x09: { n:'PtgLt', f:parse_PtgLt },
    0x0A: { n:'PtgLe', f:parse_PtgLe },
    0x0B: { n:'PtgEq', f:parse_PtgEq },
    0x0C: { n:'PtgGe', f:parse_PtgGe },
    0x0D: { n:'PtgGt', f:parse_PtgGt },
    0x0E: { n:'PtgNe', f:parse_PtgNe },
    0x0F: { n:'PtgIsect', f:parse_PtgIsect },
    0x10: { n:'PtgUnion', f:parse_PtgUnion },
    0x11: { n:'PtgRange', f:parse_PtgRange },
    0x12: { n:'PtgUplus', f:parse_PtgUplus },
    0x13: { n:'PtgUminus', f:parse_PtgUminus },
    0x14: { n:'PtgPercent', f:parse_PtgPercent },
    0x15: { n:'PtgParen', f:parse_PtgParen },
    0x16: { n:'PtgMissArg', f:parse_PtgMissArg },
    0x17: { n:'PtgStr', f:parse_PtgStr },
    0x1C: { n:'PtgErr', f:parse_PtgErr },
    0x1D: { n:'PtgBool', f:parse_PtgBool },
    0x1E: { n:'PtgInt', f:parse_PtgInt },
    0x1F: { n:'PtgNum', f:parse_PtgNum },
    0x20: { n:'PtgArray', f:parse_PtgArray },
    0x21: { n:'PtgFunc', f:parse_PtgFunc },
    0x22: { n:'PtgFuncVar', f:parse_PtgFuncVar },
    0x23: { n:'PtgName', f:parse_PtgName },
    0x24: { n:'PtgRef', f:parse_PtgRef },
    0x25: { n:'PtgArea', f:parse_PtgArea },
    0x26: { n:'PtgMemArea', f:parse_PtgMemArea },
    0x27: { n:'PtgMemErr', f:parse_PtgMemErr },
    0x28: { n:'PtgMemNoMem', f:parse_PtgMemNoMem },
    0x29: { n:'PtgMemFunc', f:parse_PtgMemFunc },
    0x2A: { n:'PtgRefErr', f:parse_PtgRefErr },
    0x2B: { n:'PtgAreaErr', f:parse_PtgAreaErr },
    0x2C: { n:'PtgRefN', f:parse_PtgRefN },
    0x2D: { n:'PtgAreaN', f:parse_PtgAreaN },
    0x39: { n:'PtgNameX', f:parse_PtgNameX },
    0x3A: { n:'PtgRef3d', f:parse_PtgRef3d },
    0x3B: { n:'PtgArea3d', f:parse_PtgArea3d },
    0x3C: { n:'PtgRefErr3d', f:parse_PtgRefErr3d },
    0x3D: { n:'PtgAreaErr3d', f:parse_PtgAreaErr3d },
    0xFF: {}
};
/* These are duplicated in the PtgTypes table */
var PtgDupes = {
    0x40: 0x20, 0x60: 0x20,
    0x41: 0x21, 0x61: 0x21,
    0x42: 0x22, 0x62: 0x22,
    0x43: 0x23, 0x63: 0x23,
    0x44: 0x24, 0x64: 0x24,
    0x45: 0x25, 0x65: 0x25,
    0x46: 0x26, 0x66: 0x26,
    0x47: 0x27, 0x67: 0x27,
    0x48: 0x28, 0x68: 0x28,
    0x49: 0x29, 0x69: 0x29,
    0x4A: 0x2A, 0x6A: 0x2A,
    0x4B: 0x2B, 0x6B: 0x2B,
    0x4C: 0x2C, 0x6C: 0x2C,
    0x4D: 0x2D, 0x6D: 0x2D,
    0x59: 0x39, 0x79: 0x39,
    0x5A: 0x3A, 0x7A: 0x3A,
    0x5B: 0x3B, 0x7B: 0x3B,
    0x5C: 0x3C, 0x7C: 0x3C,
    0x5D: 0x3D, 0x7D: 0x3D
};
(function(){for(var y in PtgDupes) PtgTypes[y] = PtgTypes[PtgDupes[y]];})();

var Ptg18 = {};
var Ptg19 = {
    0x01: { n:'PtgAttrSemi', f:parse_PtgAttrSemi },
    0x02: { n:'PtgAttrIf', f:parse_PtgAttrIf },
    0x04: { n:'PtgAttrChoose', f:parse_PtgAttrChoose },
    0x08: { n:'PtgAttrGoto', f:parse_PtgAttrGoto },
    0x10: { n:'PtgAttrSum', f:parse_PtgAttrSum },
    0x20: { n:'PtgAttrBaxcel', f:parse_PtgAttrBaxcel },
    0x40: { n:'PtgAttrSpace', f:parse_PtgAttrSpace },
    0x41: { n:'PtgAttrSpaceSemi', f:parse_PtgAttrSpaceSemi },
    0xFF: {}
};

/* 2.4.127 TODO */
function parse_Formula(blob, length, opts) {
    var cell = parse_XLSCell(blob, 6);
    var val = parse_FormulaValue(blob,8);
    var flags = blob.read_shift(1);
    blob.read_shift(1);
    var chn = blob.read_shift(4);
    var cbf = "";
    if(opts.biff === 5) blob.l += length-20;
    else cbf = parse_XLSCellParsedFormula(blob, length-20, opts);
    return {cell:cell, val:val[0], formula:cbf, shared: (flags >> 3) & 1, tt:val[1]};
}

/* 2.5.133 TODO: how to emit empty strings? */
function parse_FormulaValue(blob) {
    var b;
    if(__readUInt16LE(blob,blob.l + 6) !== 0xFFFF) return [parse_Xnum(blob),'n'];
    switch(blob[blob.l]) {
        case 0x00: blob.l += 8; return ["String", 's'];
        case 0x01: b = blob[blob.l+2] === 0x1; blob.l += 8; return [b,'b'];
        case 0x02: b = blob[blob.l+2]; blob.l += 8; return [b,'e'];
        case 0x03: blob.l += 8; return ["",'s'];
    }
}

/* 2.5.198.103 */
function parse_RgbExtra(blob, length, rgce, opts) {
    if(opts.biff < 8) return parsenoop(blob, length);
    var target = blob.l + length;
    var o = [];
    for(var i = 0; i !== rgce.length; ++i) {
        switch(rgce[i][0]) {
            case 'PtgArray': /* PtgArray -> PtgExtraArray */
                rgce[i][1] = parse_PtgExtraArray(blob);
                o.push(rgce[i][1]);
                break;
            case 'PtgMemArea': /* PtgMemArea -> PtgExtraMem */
                rgce[i][2] = parse_PtgExtraMem(blob, rgce[i][1]);
                o.push(rgce[i][2]);
                break;
            default: break;
        }
    }
    length = target - blob.l;
    if(length !== 0) o.push(parsenoop(blob, length));
    return o;
}

/* 2.5.198.21 */
function parse_NameParsedFormula(blob, length, opts, cce) {
    var target = blob.l + length;
    var rgce = parse_Rgce(blob, cce);
    var rgcb;
    if(target !== blob.l) rgcb = parse_RgbExtra(blob, target - blob.l, rgce, opts);
    return [rgce, rgcb];
}

/* 2.5.198.3 TODO */
function parse_XLSCellParsedFormula(blob, length, opts) {
    var target = blob.l + length;
    var rgcb, cce = blob.read_shift(2); // length of rgce
    if(cce == 0xFFFF) return [[],parsenoop(blob, length-2)];
    var rgce = parse_Rgce(blob, cce);
    if(length !== cce + 2) rgcb = parse_RgbExtra(blob, length - cce - 2, rgce, opts);
    return [rgce, rgcb];
}

/* 2.5.198.118 TODO */
function parse_SharedParsedFormula(blob, length, opts) {
    var target = blob.l + length;
    var rgcb, cce = blob.read_shift(2); // length of rgce
    var rgce = parse_Rgce(blob, cce);
    if(cce == 0xFFFF) return [[],parsenoop(blob, length-2)];
    if(length !== cce + 2) rgcb = parse_RgbExtra(blob, target - cce - 2, rgce, opts);
    return [rgce, rgcb];
}

/* 2.5.198.1 TODO */
function parse_ArrayParsedFormula(blob, length, opts, ref) {
    var target = blob.l + length;
    var rgcb, cce = blob.read_shift(2); // length of rgce
    if(cce == 0xFFFF) return [[],parsenoop(blob, length-2)];
    var rgce = parse_Rgce(blob, cce);
    if(length !== cce + 2) rgcb = parse_RgbExtra(blob, target - cce - 2, rgce, opts);
    return [rgce, rgcb];
}

/* 2.5.198.104 */
function parse_Rgce(blob, length) {
    var target = blob.l + length;
    var R, id, ptgs = [];
    while(target != blob.l) {
        length = target - blob.l;
        id = blob[blob.l];
        R = PtgTypes[id];
        //console.log("ptg", id, R)
        if(id === 0x18 || id === 0x19) {
            id = blob[blob.l + 1];
            R = (id === 0x18 ? Ptg18 : Ptg19)[id];
        }
        if(!R || !R.f) { ptgs.push(parsenoop(blob, length)); }
        else { ptgs.push([R.n, R.f(blob, length)]); }
    }
    return ptgs;
}

function mapper(x) { return x.map(function f2(y) { return y[1];}).join(",");}

/* 2.2.2 + Magic TODO */
function stringify_formula(formula, range, cell, supbooks, opts) {
    if(opts !== undefined && opts.biff === 5) return "BIFF5??";
    var _range = range !== undefined ? range : {s:{c:0, r:0}};
    var stack = [], e1, e2, type, c, ixti, nameidx, r;
    if(!formula[0] || !formula[0][0]) return "";
    //console.log("--",cell,formula[0])
    for(var ff = 0, fflen = formula[0].length; ff < fflen; ++ff) {
        var f = formula[0][ff];
        //console.log("++",f, stack)
        switch(f[0]) {
        /* 2.2.2.1 Unary Operator Tokens */
            /* 2.5.198.93 */
            case 'PtgUminus': stack.push("-" + stack.pop()); break;
            /* 2.5.198.95 */
            case 'PtgUplus': stack.push("+" + stack.pop()); break;
            /* 2.5.198.81 */
            case 'PtgPercent': stack.push(stack.pop() + "%"); break;

        /* 2.2.2.1 Binary Value Operator Token */
            /* 2.5.198.26 */
            case 'PtgAdd':
                e1 = stack.pop(); e2 = stack.pop();
                stack.push(e2+"+"+e1);
                break;
            /* 2.5.198.90 */
            case 'PtgSub':
                e1 = stack.pop(); e2 = stack.pop();
                stack.push(e2+"-"+e1);
                break;
            /* 2.5.198.75 */
            case 'PtgMul':
                e1 = stack.pop(); e2 = stack.pop();
                stack.push(e2+"*"+e1);
                break;
            /* 2.5.198.45 */
            case 'PtgDiv':
                e1 = stack.pop(); e2 = stack.pop();
                stack.push(e2+"/"+e1);
                break;
            /* 2.5.198.82 */
            case 'PtgPower':
                e1 = stack.pop(); e2 = stack.pop();
                stack.push(e2+"^"+e1);
                break;
            /* 2.5.198.43 */
            case 'PtgConcat':
                e1 = stack.pop(); e2 = stack.pop();
                stack.push(e2+"&"+e1);
                break;
            /* 2.5.198.69 */
            case 'PtgLt':
                e1 = stack.pop(); e2 = stack.pop();
                stack.push(e2+"<"+e1);
                break;
            /* 2.5.198.68 */
            case 'PtgLe':
                e1 = stack.pop(); e2 = stack.pop();
                stack.push(e2+"<="+e1);
                break;
            /* 2.5.198.56 */
            case 'PtgEq':
                e1 = stack.pop(); e2 = stack.pop();
                stack.push(e2+"="+e1);
                break;
            /* 2.5.198.64 */
            case 'PtgGe':
                e1 = stack.pop(); e2 = stack.pop();
                stack.push(e2+">="+e1);
                break;
            /* 2.5.198.65 */
            case 'PtgGt':
                e1 = stack.pop(); e2 = stack.pop();
                stack.push(e2+">"+e1);
                break;
            /* 2.5.198.78 */
            case 'PtgNe':
                e1 = stack.pop(); e2 = stack.pop();
                stack.push(e2+"<>"+e1);
                break;

        /* 2.2.2.1 Binary Reference Operator Token */
            /* 2.5.198.67 */
            case 'PtgIsect':
                e1 = stack.pop(); e2 = stack.pop();
                stack.push(e2+" "+e1);
                break;
            case 'PtgUnion':
                e1 = stack.pop(); e2 = stack.pop();
                stack.push(e2+","+e1);
                break;
            case 'PtgRange': break;

        /* 2.2.2.3 Control Tokens "can be ignored" */
            /* 2.5.198.34 */
            case 'PtgAttrChoose': break;
            /* 2.5.198.35 */
            case 'PtgAttrGoto': break;
            /* 2.5.198.36 */
            case 'PtgAttrIf': break;


            /* 2.5.198.84 */
            case 'PtgRef':
                type = f[1][0]; c = shift_cell_xls(decode_cell(encode_cell(f[1][1])), _range);
                stack.push(encode_cell(c));
                break;
            /* 2.5.198.88 */
            case 'PtgRefN':
                type = f[1][0]; c = shift_cell_xls(decode_cell(encode_cell(f[1][1])), cell);
                stack.push(encode_cell(c));
                break;
            case 'PtgRef3d': // TODO: lots of stuff
                type = f[1][0]; ixti = f[1][1]; c = shift_cell_xls(f[1][2], _range);
                stack.push(supbooks[1][ixti+1]+"!"+encode_cell(c));
                break;

        /* Function Call */
            /* 2.5.198.62 */
            case 'PtgFunc':
            /* 2.5.198.63 */
            case 'PtgFuncVar':
                /* f[1] = [argc, func] */
                var argc = f[1][0], func = f[1][1];
                if(!argc) argc = 0;
                var args = stack.slice(-argc);
                stack.length -= argc;
                if(func === 'User') func = args.shift();
                stack.push(func + "(" + args.join(",") + ")");
                break;

            /* 2.5.198.42 */
            case 'PtgBool': stack.push(f[1] ? "TRUE" : "FALSE"); break;
            /* 2.5.198.66 */
            case 'PtgInt': stack.push(f[1]); break;
            /* 2.5.198.79 TODO: precision? */
            case 'PtgNum': stack.push(String(f[1])); break;
            /* 2.5.198.89 */
            case 'PtgStr': stack.push('"' + f[1] + '"'); break;
            /* 2.5.198.57 */
            case 'PtgErr': stack.push(f[1]); break;
            /* 2.5.198.27 TODO: fixed points */
            case 'PtgArea':
                type = f[1][0]; r = shift_range_xls(f[1][1], _range);
                stack.push(encode_range(r));
                break;
            /* 2.5.198.28 */
            case 'PtgArea3d': // TODO: lots of stuff
                type = f[1][0]; ixti = f[1][1]; r = f[1][2];
                stack.push(supbooks[1][ixti+1]+"!"+encode_range(r));
                break;
            /* 2.5.198.41 */
            case 'PtgAttrSum':
                stack.push("SUM(" + stack.pop() + ")");
                break;

        /* Expression Prefixes */
            /* 2.5.198.37 */
            case 'PtgAttrSemi': break;

            /* 2.5.97.60 TODO: do something different for revisions */
            case 'PtgName':
                /* f[1] = type, 0, nameindex */
                nameidx = f[1][2];
                var lbl = supbooks[0][nameidx];
                var name = lbl.Name;
                if(name in XLSXFutureFunctions) name = XLSXFutureFunctions[name];
                stack.push(name);
                break;

            /* 2.5.97.61 TODO: do something different for revisions */
            case 'PtgNameX':
                /* f[1] = type, ixti, nameindex */
                var bookidx = f[1][1]; nameidx = f[1][2]; var externbook;
                /* TODO: Properly handle missing values */
                if(supbooks[bookidx+1]) externbook = supbooks[bookidx+1][nameidx];
                else if(supbooks[bookidx-1]) externbook = supbooks[bookidx-1][nameidx];
                if(!externbook) externbook = {body: "??NAMEX??"};
                stack.push(externbook.body);
                break;

        /* 2.2.2.4 Display Tokens */
            /* 2.5.198.80 */
            case 'PtgParen': stack.push('(' + stack.pop() + ')'); break;

            /* 2.5.198.86 */
            case 'PtgRefErr': stack.push('#REF!'); break;

        /* */
            /* 2.5.198.58 TODO */
            case 'PtgExp':
                c = {c:f[1][1],r:f[1][0]};
                var q = {c: cell.c, r:cell.r};
                if(supbooks.sharedf[encode_cell(c)]) {
                    var parsedf = (supbooks.sharedf[encode_cell(c)]);
                    stack.push(stringify_formula(parsedf, _range, q, supbooks, opts));
                }
                else {
                    var fnd = false;
                    for(e1=0;e1!=supbooks.arrayf.length; ++e1) {
                        /* TODO: should be something like range_has */
                        e2 = supbooks.arrayf[e1];
                        if(c.c < e2[0].s.c || c.c > e2[0].e.c) continue;
                        if(c.r < e2[0].s.r || c.r > e2[0].e.r) continue;
                        stack.push(stringify_formula(e2[1], _range, q, supbooks, opts));
                    }
                    if(!fnd) stack.push(f[1]);
                }
                break;

            /* 2.5.198.32 TODO */
            case 'PtgArray':
                stack.push("{" + f[1].map(mapper).join(";") + "}");
                break;

        /* 2.2.2.5 Mem Tokens */
            /* 2.5.198.70 TODO: confirm this is a non-display */
            case 'PtgMemArea':
                //stack.push("(" + f[2].map(encode_range).join(",") + ")");
                break;

            /* 2.5.198.38 TODO */
            case 'PtgAttrSpace': break;

            /* 2.5.198.92 TODO */
            case 'PtgTbl': break;

            /* 2.5.198.71 */
            case 'PtgMemErr': break;

            /* 2.5.198.74 */
            case 'PtgMissArg':
                stack.push("");
                break;

            /* 2.5.198.29 TODO */
            case 'PtgAreaErr': break;

            /* 2.5.198.31 TODO */
            case 'PtgAreaN': stack.push(""); break;

            /* 2.5.198.87 TODO */
            case 'PtgRefErr3d': break;

            /* 2.5.198.72 TODO */
            case 'PtgMemFunc': break;

            default: throw 'Unrecognized Formula Token: ' + f;
        }
        //console.log("::",f, stack)
    }
    //console.log("--",stack);
    return stack[0];
}

/* [MS-XLSB] 2.5.97.4 CellParsedFormula TODO: use similar logic to js-xls */
function parse_XLSBCellParsedFormula(data, length) {
    var cce = data.read_shift(4);
    return parsenoop(data, length-4);
}
/* [MS-XLS] 2.5.198.44 */
var PtgDataType = {
    0x1: "REFERENCE", // reference to range
    0x2: "VALUE", // single value
    0x3: "ARRAY" // array of values
};

/* [MS-XLS] 2.5.198.4 */
var Cetab = {
    0x0000: 'BEEP',
    0x0001: 'OPEN',
    0x0002: 'OPEN.LINKS',
    0x0003: 'CLOSE.ALL',
    0x0004: 'SAVE',
    0x0005: 'SAVE.AS',
    0x0006: 'FILE.DELETE',
    0x0007: 'PAGE.SETUP',
    0x0008: 'PRINT',
    0x0009: 'PRINTER.SETUP',
    0x000A: 'QUIT',
    0x000B: 'NEW.WINDOW',
    0x000C: 'ARRANGE.ALL',
    0x000D: 'WINDOW.SIZE',
    0x000E: 'WINDOW.MOVE',
    0x000F: 'FULL',
    0x0010: 'CLOSE',
    0x0011: 'RUN',
    0x0016: 'SET.PRINT.AREA',
    0x0017: 'SET.PRINT.TITLES',
    0x0018: 'SET.PAGE.BREAK',
    0x0019: 'REMOVE.PAGE.BREAK',
    0x001A: 'FONT',
    0x001B: 'DISPLAY',
    0x001C: 'PROTECT.DOCUMENT',
    0x001D: 'PRECISION',
    0x001E: 'A1.R1C1',
    0x001F: 'CALCULATE.NOW',
    0x0020: 'CALCULATION',
    0x0022: 'DATA.FIND',
    0x0023: 'EXTRACT',
    0x0024: 'DATA.DELETE',
    0x0025: 'SET.DATABASE',
    0x0026: 'SET.CRITERIA',
    0x0027: 'SORT',
    0x0028: 'DATA.SERIES',
    0x0029: 'TABLE',
    0x002A: 'FORMAT.NUMBER',
    0x002B: 'ALIGNMENT',
    0x002C: 'STYLE',
    0x002D: 'BORDER',
    0x002E: 'CELL.PROTECTION',
    0x002F: 'COLUMN.WIDTH',
    0x0030: 'UNDO',
    0x0031: 'CUT',
    0x0032: 'COPY',
    0x0033: 'PASTE',
    0x0034: 'CLEAR',
    0x0035: 'PASTE.SPECIAL',
    0x0036: 'EDIT.DELETE',
    0x0037: 'INSERT',
    0x0038: 'FILL.RIGHT',
    0x0039: 'FILL.DOWN',
    0x003D: 'DEFINE.NAME',
    0x003E: 'CREATE.NAMES',
    0x003F: 'FORMULA.GOTO',
    0x0040: 'FORMULA.FIND',
    0x0041: 'SELECT.LAST.CELL',
    0x0042: 'SHOW.ACTIVE.CELL',
    0x0043: 'GALLERY.AREA',
    0x0044: 'GALLERY.BAR',
    0x0045: 'GALLERY.COLUMN',
    0x0046: 'GALLERY.LINE',
    0x0047: 'GALLERY.PIE',
    0x0048: 'GALLERY.SCATTER',
    0x0049: 'COMBINATION',
    0x004A: 'PREFERRED',
    0x004B: 'ADD.OVERLAY',
    0x004C: 'GRIDLINES',
    0x004D: 'SET.PREFERRED',
    0x004E: 'AXES',
    0x004F: 'LEGEND',
    0x0050: 'ATTACH.TEXT',
    0x0051: 'ADD.ARROW',
    0x0052: 'SELECT.CHART',
    0x0053: 'SELECT.PLOT.AREA',
    0x0054: 'PATTERNS',
    0x0055: 'MAIN.CHART',
    0x0056: 'OVERLAY',
    0x0057: 'SCALE',
    0x0058: 'FORMAT.LEGEND',
    0x0059: 'FORMAT.TEXT',
    0x005A: 'EDIT.REPEAT',
    0x005B: 'PARSE',
    0x005C: 'JUSTIFY',
    0x005D: 'HIDE',
    0x005E: 'UNHIDE',
    0x005F: 'WORKSPACE',
    0x0060: 'FORMULA',
    0x0061: 'FORMULA.FILL',
    0x0062: 'FORMULA.ARRAY',
    0x0063: 'DATA.FIND.NEXT',
    0x0064: 'DATA.FIND.PREV',
    0x0065: 'FORMULA.FIND.NEXT',
    0x0066: 'FORMULA.FIND.PREV',
    0x0067: 'ACTIVATE',
    0x0068: 'ACTIVATE.NEXT',
    0x0069: 'ACTIVATE.PREV',
    0x006A: 'UNLOCKED.NEXT',
    0x006B: 'UNLOCKED.PREV',
    0x006C: 'COPY.PICTURE',
    0x006D: 'SELECT',
    0x006E: 'DELETE.NAME',
    0x006F: 'DELETE.FORMAT',
    0x0070: 'VLINE',
    0x0071: 'HLINE',
    0x0072: 'VPAGE',
    0x0073: 'HPAGE',
    0x0074: 'VSCROLL',
    0x0075: 'HSCROLL',
    0x0076: 'ALERT',
    0x0077: 'NEW',
    0x0078: 'CANCEL.COPY',
    0x0079: 'SHOW.CLIPBOARD',
    0x007A: 'MESSAGE',
    0x007C: 'PASTE.LINK',
    0x007D: 'APP.ACTIVATE',
    0x007E: 'DELETE.ARROW',
    0x007F: 'ROW.HEIGHT',
    0x0080: 'FORMAT.MOVE',
    0x0081: 'FORMAT.SIZE',
    0x0082: 'FORMULA.REPLACE',
    0x0083: 'SEND.KEYS',
    0x0084: 'SELECT.SPECIAL',
    0x0085: 'APPLY.NAMES',
    0x0086: 'REPLACE.FONT',
    0x0087: 'FREEZE.PANES',
    0x0088: 'SHOW.INFO',
    0x0089: 'SPLIT',
    0x008A: 'ON.WINDOW',
    0x008B: 'ON.DATA',
    0x008C: 'DISABLE.INPUT',
    0x008E: 'OUTLINE',
    0x008F: 'LIST.NAMES',
    0x0090: 'FILE.CLOSE',
    0x0091: 'SAVE.WORKBOOK',
    0x0092: 'DATA.FORM',
    0x0093: 'COPY.CHART',
    0x0094: 'ON.TIME',
    0x0095: 'WAIT',
    0x0096: 'FORMAT.FONT',
    0x0097: 'FILL.UP',
    0x0098: 'FILL.LEFT',
    0x0099: 'DELETE.OVERLAY',
    0x009B: 'SHORT.MENUS',
    0x009F: 'SET.UPDATE.STATUS',
    0x00A1: 'COLOR.PALETTE',
    0x00A2: 'DELETE.STYLE',
    0x00A3: 'WINDOW.RESTORE',
    0x00A4: 'WINDOW.MAXIMIZE',
    0x00A6: 'CHANGE.LINK',
    0x00A7: 'CALCULATE.DOCUMENT',
    0x00A8: 'ON.KEY',
    0x00A9: 'APP.RESTORE',
    0x00AA: 'APP.MOVE',
    0x00AB: 'APP.SIZE',
    0x00AC: 'APP.MINIMIZE',
    0x00AD: 'APP.MAXIMIZE',
    0x00AE: 'BRING.TO.FRONT',
    0x00AF: 'SEND.TO.BACK',
    0x00B9: 'MAIN.CHART.TYPE',
    0x00BA: 'OVERLAY.CHART.TYPE',
    0x00BB: 'SELECT.END',
    0x00BC: 'OPEN.MAIL',
    0x00BD: 'SEND.MAIL',
    0x00BE: 'STANDARD.FONT',
    0x00BF: 'CONSOLIDATE',
    0x00C0: 'SORT.SPECIAL',
    0x00C1: 'GALLERY.3D.AREA',
    0x00C2: 'GALLERY.3D.COLUMN',
    0x00C3: 'GALLERY.3D.LINE',
    0x00C4: 'GALLERY.3D.PIE',
    0x00C5: 'VIEW.3D',
    0x00C6: 'GOAL.SEEK',
    0x00C7: 'WORKGROUP',
    0x00C8: 'FILL.GROUP',
    0x00C9: 'UPDATE.LINK',
    0x00CA: 'PROMOTE',
    0x00CB: 'DEMOTE',
    0x00CC: 'SHOW.DETAIL',
    0x00CE: 'UNGROUP',
    0x00CF: 'OBJECT.PROPERTIES',
    0x00D0: 'SAVE.NEW.OBJECT',
    0x00D1: 'SHARE',
    0x00D2: 'SHARE.NAME',
    0x00D3: 'DUPLICATE',
    0x00D4: 'APPLY.STYLE',
    0x00D5: 'ASSIGN.TO.OBJECT',
    0x00D6: 'OBJECT.PROTECTION',
    0x00D7: 'HIDE.OBJECT',
    0x00D8: 'SET.EXTRACT',
    0x00D9: 'CREATE.PUBLISHER',
    0x00DA: 'SUBSCRIBE.TO',
    0x00DB: 'ATTRIBUTES',
    0x00DC: 'SHOW.TOOLBAR',
    0x00DE: 'PRINT.PREVIEW',
    0x00DF: 'EDIT.COLOR',
    0x00E0: 'SHOW.LEVELS',
    0x00E1: 'FORMAT.MAIN',
    0x00E2: 'FORMAT.OVERLAY',
    0x00E3: 'ON.RECALC',
    0x00E4: 'EDIT.SERIES',
    0x00E5: 'DEFINE.STYLE',
    0x00F0: 'LINE.PRINT',
    0x00F3: 'ENTER.DATA',
    0x00F9: 'GALLERY.RADAR',
    0x00FA: 'MERGE.STYLES',
    0x00FB: 'EDITION.OPTIONS',
    0x00FC: 'PASTE.PICTURE',
    0x00FD: 'PASTE.PICTURE.LINK',
    0x00FE: 'SPELLING',
    0x0100: 'ZOOM',
    0x0103: 'INSERT.OBJECT',
    0x0104: 'WINDOW.MINIMIZE',
    0x0109: 'SOUND.NOTE',
    0x010A: 'SOUND.PLAY',
    0x010B: 'FORMAT.SHAPE',
    0x010C: 'EXTEND.POLYGON',
    0x010D: 'FORMAT.AUTO',
    0x0110: 'GALLERY.3D.BAR',
    0x0111: 'GALLERY.3D.SURFACE',
    0x0112: 'FILL.AUTO',
    0x0114: 'CUSTOMIZE.TOOLBAR',
    0x0115: 'ADD.TOOL',
    0x0116: 'EDIT.OBJECT',
    0x0117: 'ON.DOUBLECLICK',
    0x0118: 'ON.ENTRY',
    0x0119: 'WORKBOOK.ADD',
    0x011A: 'WORKBOOK.MOVE',
    0x011B: 'WORKBOOK.COPY',
    0x011C: 'WORKBOOK.OPTIONS',
    0x011D: 'SAVE.WORKSPACE',
    0x0120: 'CHART.WIZARD',
    0x0121: 'DELETE.TOOL',
    0x0122: 'MOVE.TOOL',
    0x0123: 'WORKBOOK.SELECT',
    0x0124: 'WORKBOOK.ACTIVATE',
    0x0125: 'ASSIGN.TO.TOOL',
    0x0127: 'COPY.TOOL',
    0x0128: 'RESET.TOOL',
    0x0129: 'CONSTRAIN.NUMERIC',
    0x012A: 'PASTE.TOOL',
    0x012E: 'WORKBOOK.NEW',
    0x0131: 'SCENARIO.CELLS',
    0x0132: 'SCENARIO.DELETE',
    0x0133: 'SCENARIO.ADD',
    0x0134: 'SCENARIO.EDIT',
    0x0135: 'SCENARIO.SHOW',
    0x0136: 'SCENARIO.SHOW.NEXT',
    0x0137: 'SCENARIO.SUMMARY',
    0x0138: 'PIVOT.TABLE.WIZARD',
    0x0139: 'PIVOT.FIELD.PROPERTIES',
    0x013A: 'PIVOT.FIELD',
    0x013B: 'PIVOT.ITEM',
    0x013C: 'PIVOT.ADD.FIELDS',
    0x013E: 'OPTIONS.CALCULATION',
    0x013F: 'OPTIONS.EDIT',
    0x0140: 'OPTIONS.VIEW',
    0x0141: 'ADDIN.MANAGER',
    0x0142: 'MENU.EDITOR',
    0x0143: 'ATTACH.TOOLBARS',
    0x0144: 'VBAActivate',
    0x0145: 'OPTIONS.CHART',
    0x0148: 'VBA.INSERT.FILE',
    0x014A: 'VBA.PROCEDURE.DEFINITION',
    0x0150: 'ROUTING.SLIP',
    0x0152: 'ROUTE.DOCUMENT',
    0x0153: 'MAIL.LOGON',
    0x0156: 'INSERT.PICTURE',
    0x0157: 'EDIT.TOOL',
    0x0158: 'GALLERY.DOUGHNUT',
    0x015E: 'CHART.TREND',
    0x0160: 'PIVOT.ITEM.PROPERTIES',
    0x0162: 'WORKBOOK.INSERT',
    0x0163: 'OPTIONS.TRANSITION',
    0x0164: 'OPTIONS.GENERAL',
    0x0172: 'FILTER.ADVANCED',
    0x0175: 'MAIL.ADD.MAILER',
    0x0176: 'MAIL.DELETE.MAILER',
    0x0177: 'MAIL.REPLY',
    0x0178: 'MAIL.REPLY.ALL',
    0x0179: 'MAIL.FORWARD',
    0x017A: 'MAIL.NEXT.LETTER',
    0x017B: 'DATA.LABEL',
    0x017C: 'INSERT.TITLE',
    0x017D: 'FONT.PROPERTIES',
    0x017E: 'MACRO.OPTIONS',
    0x017F: 'WORKBOOK.HIDE',
    0x0180: 'WORKBOOK.UNHIDE',
    0x0181: 'WORKBOOK.DELETE',
    0x0182: 'WORKBOOK.NAME',
    0x0184: 'GALLERY.CUSTOM',
    0x0186: 'ADD.CHART.AUTOFORMAT',
    0x0187: 'DELETE.CHART.AUTOFORMAT',
    0x0188: 'CHART.ADD.DATA',
    0x0189: 'AUTO.OUTLINE',
    0x018A: 'TAB.ORDER',
    0x018B: 'SHOW.DIALOG',
    0x018C: 'SELECT.ALL',
    0x018D: 'UNGROUP.SHEETS',
    0x018E: 'SUBTOTAL.CREATE',
    0x018F: 'SUBTOTAL.REMOVE',
    0x0190: 'RENAME.OBJECT',
    0x019C: 'WORKBOOK.SCROLL',
    0x019D: 'WORKBOOK.NEXT',
    0x019E: 'WORKBOOK.PREV',
    0x019F: 'WORKBOOK.TAB.SPLIT',
    0x01A0: 'FULL.SCREEN',
    0x01A1: 'WORKBOOK.PROTECT',
    0x01A4: 'SCROLLBAR.PROPERTIES',
    0x01A5: 'PIVOT.SHOW.PAGES',
    0x01A6: 'TEXT.TO.COLUMNS',
    0x01A7: 'FORMAT.CHARTTYPE',
    0x01A8: 'LINK.FORMAT',
    0x01A9: 'TRACER.DISPLAY',
    0x01AE: 'TRACER.NAVIGATE',
    0x01AF: 'TRACER.CLEAR',
    0x01B0: 'TRACER.ERROR',
    0x01B1: 'PIVOT.FIELD.GROUP',
    0x01B2: 'PIVOT.FIELD.UNGROUP',
    0x01B3: 'CHECKBOX.PROPERTIES',
    0x01B4: 'LABEL.PROPERTIES',
    0x01B5: 'LISTBOX.PROPERTIES',
    0x01B6: 'EDITBOX.PROPERTIES',
    0x01B7: 'PIVOT.REFRESH',
    0x01B8: 'LINK.COMBO',
    0x01B9: 'OPEN.TEXT',
    0x01BA: 'HIDE.DIALOG',
    0x01BB: 'SET.DIALOG.FOCUS',
    0x01BC: 'ENABLE.OBJECT',
    0x01BD: 'PUSHBUTTON.PROPERTIES',
    0x01BE: 'SET.DIALOG.DEFAULT',
    0x01BF: 'FILTER',
    0x01C0: 'FILTER.SHOW.ALL',
    0x01C1: 'CLEAR.OUTLINE',
    0x01C2: 'FUNCTION.WIZARD',
    0x01C3: 'ADD.LIST.ITEM',
    0x01C4: 'SET.LIST.ITEM',
    0x01C5: 'REMOVE.LIST.ITEM',
    0x01C6: 'SELECT.LIST.ITEM',
    0x01C7: 'SET.CONTROL.VALUE',
    0x01C8: 'SAVE.COPY.AS',
    0x01CA: 'OPTIONS.LISTS.ADD',
    0x01CB: 'OPTIONS.LISTS.DELETE',
    0x01CC: 'SERIES.AXES',
    0x01CD: 'SERIES.X',
    0x01CE: 'SERIES.Y',
    0x01CF: 'ERRORBAR.X',
    0x01D0: 'ERRORBAR.Y',
    0x01D1: 'FORMAT.CHART',
    0x01D2: 'SERIES.ORDER',
    0x01D3: 'MAIL.LOGOFF',
    0x01D4: 'CLEAR.ROUTING.SLIP',
    0x01D5: 'APP.ACTIVATE.MICROSOFT',
    0x01D6: 'MAIL.EDIT.MAILER',
    0x01D7: 'ON.SHEET',
    0x01D8: 'STANDARD.WIDTH',
    0x01D9: 'SCENARIO.MERGE',
    0x01DA: 'SUMMARY.INFO',
    0x01DB: 'FIND.FILE',
    0x01DC: 'ACTIVE.CELL.FONT',
    0x01DD: 'ENABLE.TIPWIZARD',
    0x01DE: 'VBA.MAKE.ADDIN',
    0x01E0: 'INSERTDATATABLE',
    0x01E1: 'WORKGROUP.OPTIONS',
    0x01E2: 'MAIL.SEND.MAILER',
    0x01E5: 'AUTOCORRECT',
    0x01E9: 'POST.DOCUMENT',
    0x01EB: 'PICKLIST',
    0x01ED: 'VIEW.SHOW',
    0x01EE: 'VIEW.DEFINE',
    0x01EF: 'VIEW.DELETE',
    0x01FD: 'SHEET.BACKGROUND',
    0x01FE: 'INSERT.MAP.OBJECT',
    0x01FF: 'OPTIONS.MENONO',
    0x0205: 'MSOCHECKS',
    0x0206: 'NORMAL',
    0x0207: 'LAYOUT',
    0x0208: 'RM.PRINT.AREA',
    0x0209: 'CLEAR.PRINT.AREA',
    0x020A: 'ADD.PRINT.AREA',
    0x020B: 'MOVE.BRK',
    0x0221: 'HIDECURR.NOTE',
    0x0222: 'HIDEALL.NOTES',
    0x0223: 'DELETE.NOTE',
    0x0224: 'TRAVERSE.NOTES',
    0x0225: 'ACTIVATE.NOTES',
    0x026C: 'PROTECT.REVISIONS',
    0x026D: 'UNPROTECT.REVISIONS',
    0x0287: 'OPTIONS.ME',
    0x028D: 'WEB.PUBLISH',
    0x029B: 'NEWWEBQUERY',
    0x02A1: 'PIVOT.TABLE.CHART',
    0x02F1: 'OPTIONS.SAVE',
    0x02F3: 'OPTIONS.SPELL',
    0x0328: 'HIDEALL.INKANNOTS'
};

/* [MS-XLS] 2.5.198.17 */
var Ftab = {
    0x0000: 'COUNT',
    0x0001: 'IF',
    0x0002: 'ISNA',
    0x0003: 'ISERROR',
    0x0004: 'SUM',
    0x0005: 'AVERAGE',
    0x0006: 'MIN',
    0x0007: 'MAX',
    0x0008: 'ROW',
    0x0009: 'COLUMN',
    0x000A: 'NA',
    0x000B: 'NPV',
    0x000C: 'STDEV',
    0x000D: 'DOLLAR',
    0x000E: 'FIXED',
    0x000F: 'SIN',
    0x0010: 'COS',
    0x0011: 'TAN',
    0x0012: 'ATAN',
    0x0013: 'PI',
    0x0014: 'SQRT',
    0x0015: 'EXP',
    0x0016: 'LN',
    0x0017: 'LOG10',
    0x0018: 'ABS',
    0x0019: 'INT',
    0x001A: 'SIGN',
    0x001B: 'ROUND',
    0x001C: 'LOOKUP',
    0x001D: 'INDEX',
    0x001E: 'REPT',
    0x001F: 'MID',
    0x0020: 'LEN',
    0x0021: 'VALUE',
    0x0022: 'TRUE',
    0x0023: 'FALSE',
    0x0024: 'AND',
    0x0025: 'OR',
    0x0026: 'NOT',
    0x0027: 'MOD',
    0x0028: 'DCOUNT',
    0x0029: 'DSUM',
    0x002A: 'DAVERAGE',
    0x002B: 'DMIN',
    0x002C: 'DMAX',
    0x002D: 'DSTDEV',
    0x002E: 'VAR',
    0x002F: 'DVAR',
    0x0030: 'TEXT',
    0x0031: 'LINEST',
    0x0032: 'TREND',
    0x0033: 'LOGEST',
    0x0034: 'GROWTH',
    0x0035: 'GOTO',
    0x0036: 'HALT',
    0x0037: 'RETURN',
    0x0038: 'PV',
    0x0039: 'FV',
    0x003A: 'NPER',
    0x003B: 'PMT',
    0x003C: 'RATE',
    0x003D: 'MIRR',
    0x003E: 'IRR',
    0x003F: 'RAND',
    0x0040: 'MATCH',
    0x0041: 'DATE',
    0x0042: 'TIME',
    0x0043: 'DAY',
    0x0044: 'MONTH',
    0x0045: 'YEAR',
    0x0046: 'WEEKDAY',
    0x0047: 'HOUR',
    0x0048: 'MINUTE',
    0x0049: 'SECOND',
    0x004A: 'NOW',
    0x004B: 'AREAS',
    0x004C: 'ROWS',
    0x004D: 'COLUMNS',
    0x004E: 'OFFSET',
    0x004F: 'ABSREF',
    0x0050: 'RELREF',
    0x0051: 'ARGUMENT',
    0x0052: 'SEARCH',
    0x0053: 'TRANSPOSE',
    0x0054: 'ERROR',
    0x0055: 'STEP',
    0x0056: 'TYPE',
    0x0057: 'ECHO',
    0x0058: 'SET.NAME',
    0x0059: 'CALLER',
    0x005A: 'DEREF',
    0x005B: 'WINDOWS',
    0x005C: 'SERIES',
    0x005D: 'DOCUMENTS',
    0x005E: 'ACTIVE.CELL',
    0x005F: 'SELECTION',
    0x0060: 'RESULT',
    0x0061: 'ATAN2',
    0x0062: 'ASIN',
    0x0063: 'ACOS',
    0x0064: 'CHOOSE',
    0x0065: 'HLOOKUP',
    0x0066: 'VLOOKUP',
    0x0067: 'LINKS',
    0x0068: 'INPUT',
    0x0069: 'ISREF',
    0x006A: 'GET.FORMULA',
    0x006B: 'GET.NAME',
    0x006C: 'SET.VALUE',
    0x006D: 'LOG',
    0x006E: 'EXEC',
    0x006F: 'CHAR',
    0x0070: 'LOWER',
    0x0071: 'UPPER',
    0x0072: 'PROPER',
    0x0073: 'LEFT',
    0x0074: 'RIGHT',
    0x0075: 'EXACT',
    0x0076: 'TRIM',
    0x0077: 'REPLACE',
    0x0078: 'SUBSTITUTE',
    0x0079: 'CODE',
    0x007A: 'NAMES',
    0x007B: 'DIRECTORY',
    0x007C: 'FIND',
    0x007D: 'CELL',
    0x007E: 'ISERR',
    0x007F: 'ISTEXT',
    0x0080: 'ISNUMBER',
    0x0081: 'ISBLANK',
    0x0082: 'T',
    0x0083: 'N',
    0x0084: 'FOPEN',
    0x0085: 'FCLOSE',
    0x0086: 'FSIZE',
    0x0087: 'FREADLN',
    0x0088: 'FREAD',
    0x0089: 'FWRITELN',
    0x008A: 'FWRITE',
    0x008B: 'FPOS',
    0x008C: 'DATEVALUE',
    0x008D: 'TIMEVALUE',
    0x008E: 'SLN',
    0x008F: 'SYD',
    0x0090: 'DDB',
    0x0091: 'GET.DEF',
    0x0092: 'REFTEXT',
    0x0093: 'TEXTREF',
    0x0094: 'INDIRECT',
    0x0095: 'REGISTER',
    0x0096: 'CALL',
    0x0097: 'ADD.BAR',
    0x0098: 'ADD.MENU',
    0x0099: 'ADD.COMMAND',
    0x009A: 'ENABLE.COMMAND',
    0x009B: 'CHECK.COMMAND',
    0x009C: 'RENAME.COMMAND',
    0x009D: 'SHOW.BAR',
    0x009E: 'DELETE.MENU',
    0x009F: 'DELETE.COMMAND',
    0x00A0: 'GET.CHART.ITEM',
    0x00A1: 'DIALOG.BOX',
    0x00A2: 'CLEAN',
    0x00A3: 'MDETERM',
    0x00A4: 'MINVERSE',
    0x00A5: 'MMULT',
    0x00A6: 'FILES',
    0x00A7: 'IPMT',
    0x00A8: 'PPMT',
    0x00A9: 'COUNTA',
    0x00AA: 'CANCEL.KEY',
    0x00AB: 'FOR',
    0x00AC: 'WHILE',
    0x00AD: 'BREAK',
    0x00AE: 'NEXT',
    0x00AF: 'INITIATE',
    0x00B0: 'REQUEST',
    0x00B1: 'POKE',
    0x00B2: 'EXECUTE',
    0x00B3: 'TERMINATE',
    0x00B4: 'RESTART',
    0x00B5: 'HELP',
    0x00B6: 'GET.BAR',
    0x00B7: 'PRODUCT',
    0x00B8: 'FACT',
    0x00B9: 'GET.CELL',
    0x00BA: 'GET.WORKSPACE',
    0x00BB: 'GET.WINDOW',
    0x00BC: 'GET.DOCUMENT',
    0x00BD: 'DPRODUCT',
    0x00BE: 'ISNONTEXT',
    0x00BF: 'GET.NOTE',
    0x00C0: 'NOTE',
    0x00C1: 'STDEVP',
    0x00C2: 'VARP',
    0x00C3: 'DSTDEVP',
    0x00C4: 'DVARP',
    0x00C5: 'TRUNC',
    0x00C6: 'ISLOGICAL',
    0x00C7: 'DCOUNTA',
    0x00C8: 'DELETE.BAR',
    0x00C9: 'UNREGISTER',
    0x00CC: 'USDOLLAR',
    0x00CD: 'FINDB',
    0x00CE: 'SEARCHB',
    0x00CF: 'REPLACEB',
    0x00D0: 'LEFTB',
    0x00D1: 'RIGHTB',
    0x00D2: 'MIDB',
    0x00D3: 'LENB',
    0x00D4: 'ROUNDUP',
    0x00D5: 'ROUNDDOWN',
    0x00D6: 'ASC',
    0x00D7: 'DBCS',
    0x00D8: 'RANK',
    0x00DB: 'ADDRESS',
    0x00DC: 'DAYS360',
    0x00DD: 'TODAY',
    0x00DE: 'VDB',
    0x00DF: 'ELSE',
    0x00E0: 'ELSE.IF',
    0x00E1: 'END.IF',
    0x00E2: 'FOR.CELL',
    0x00E3: 'MEDIAN',
    0x00E4: 'SUMPRODUCT',
    0x00E5: 'SINH',
    0x00E6: 'COSH',
    0x00E7: 'TANH',
    0x00E8: 'ASINH',
    0x00E9: 'ACOSH',
    0x00EA: 'ATANH',
    0x00EB: 'DGET',
    0x00EC: 'CREATE.OBJECT',
    0x00ED: 'VOLATILE',
    0x00EE: 'LAST.ERROR',
    0x00EF: 'CUSTOM.UNDO',
    0x00F0: 'CUSTOM.REPEAT',
    0x00F1: 'FORMULA.CONVERT',
    0x00F2: 'GET.LINK.INFO',
    0x00F3: 'TEXT.BOX',
    0x00F4: 'INFO',
    0x00F5: 'GROUP',
    0x00F6: 'GET.OBJECT',
    0x00F7: 'DB',
    0x00F8: 'PAUSE',
    0x00FB: 'RESUME',
    0x00FC: 'FREQUENCY',
    0x00FD: 'ADD.TOOLBAR',
    0x00FE: 'DELETE.TOOLBAR',
    0x00FF: 'User',
    0x0100: 'RESET.TOOLBAR',
    0x0101: 'EVALUATE',
    0x0102: 'GET.TOOLBAR',
    0x0103: 'GET.TOOL',
    0x0104: 'SPELLING.CHECK',
    0x0105: 'ERROR.TYPE',
    0x0106: 'APP.TITLE',
    0x0107: 'WINDOW.TITLE',
    0x0108: 'SAVE.TOOLBAR',
    0x0109: 'ENABLE.TOOL',
    0x010A: 'PRESS.TOOL',
    0x010B: 'REGISTER.ID',
    0x010C: 'GET.WORKBOOK',
    0x010D: 'AVEDEV',
    0x010E: 'BETADIST',
    0x010F: 'GAMMALN',
    0x0110: 'BETAINV',
    0x0111: 'BINOMDIST',
    0x0112: 'CHIDIST',
    0x0113: 'CHIINV',
    0x0114: 'COMBIN',
    0x0115: 'CONFIDENCE',
    0x0116: 'CRITBINOM',
    0x0117: 'EVEN',
    0x0118: 'EXPONDIST',
    0x0119: 'FDIST',
    0x011A: 'FINV',
    0x011B: 'FISHER',
    0x011C: 'FISHERINV',
    0x011D: 'FLOOR',
    0x011E: 'GAMMADIST',
    0x011F: 'GAMMAINV',
    0x0120: 'CEILING',
    0x0121: 'HYPGEOMDIST',
    0x0122: 'LOGNORMDIST',
    0x0123: 'LOGINV',
    0x0124: 'NEGBINOMDIST',
    0x0125: 'NORMDIST',
    0x0126: 'NORMSDIST',
    0x0127: 'NORMINV',
    0x0128: 'NORMSINV',
    0x0129: 'STANDARDIZE',
    0x012A: 'ODD',
    0x012B: 'PERMUT',
    0x012C: 'POISSON',
    0x012D: 'TDIST',
    0x012E: 'WEIBULL',
    0x012F: 'SUMXMY2',
    0x0130: 'SUMX2MY2',
    0x0131: 'SUMX2PY2',
    0x0132: 'CHITEST',
    0x0133: 'CORREL',
    0x0134: 'COVAR',
    0x0135: 'FORECAST',
    0x0136: 'FTEST',
    0x0137: 'INTERCEPT',
    0x0138: 'PEARSON',
    0x0139: 'RSQ',
    0x013A: 'STEYX',
    0x013B: 'SLOPE',
    0x013C: 'TTEST',
    0x013D: 'PROB',
    0x013E: 'DEVSQ',
    0x013F: 'GEOMEAN',
    0x0140: 'HARMEAN',
    0x0141: 'SUMSQ',
    0x0142: 'KURT',
    0x0143: 'SKEW',
    0x0144: 'ZTEST',
    0x0145: 'LARGE',
    0x0146: 'SMALL',
    0x0147: 'QUARTILE',
    0x0148: 'PERCENTILE',
    0x0149: 'PERCENTRANK',
    0x014A: 'MODE',
    0x014B: 'TRIMMEAN',
    0x014C: 'TINV',
    0x014E: 'MOVIE.COMMAND',
    0x014F: 'GET.MOVIE',
    0x0150: 'CONCATENATE',
    0x0151: 'POWER',
    0x0152: 'PIVOT.ADD.DATA',
    0x0153: 'GET.PIVOT.TABLE',
    0x0154: 'GET.PIVOT.FIELD',
    0x0155: 'GET.PIVOT.ITEM',
    0x0156: 'RADIANS',
    0x0157: 'DEGREES',
    0x0158: 'SUBTOTAL',
    0x0159: 'SUMIF',
    0x015A: 'COUNTIF',
    0x015B: 'COUNTBLANK',
    0x015C: 'SCENARIO.GET',
    0x015D: 'OPTIONS.LISTS.GET',
    0x015E: 'ISPMT',
    0x015F: 'DATEDIF',
    0x0160: 'DATESTRING',
    0x0161: 'NUMBERSTRING',
    0x0162: 'ROMAN',
    0x0163: 'OPEN.DIALOG',
    0x0164: 'SAVE.DIALOG',
    0x0165: 'VIEW.GET',
    0x0166: 'GETPIVOTDATA',
    0x0167: 'HYPERLINK',
    0x0168: 'PHONETIC',
    0x0169: 'AVERAGEA',
    0x016A: 'MAXA',
    0x016B: 'MINA',
    0x016C: 'STDEVPA',
    0x016D: 'VARPA',
    0x016E: 'STDEVA',
    0x016F: 'VARA',
    0x0170: 'BAHTTEXT',
    0x0171: 'THAIDAYOFWEEK',
    0x0172: 'THAIDIGIT',
    0x0173: 'THAIMONTHOFYEAR',
    0x0174: 'THAINUMSOUND',
    0x0175: 'THAINUMSTRING',
    0x0176: 'THAISTRINGLENGTH',
    0x0177: 'ISTHAIDIGIT',
    0x0178: 'ROUNDBAHTDOWN',
    0x0179: 'ROUNDBAHTUP',
    0x017A: 'THAIYEAR',
    0x017B: 'RTD'
};
var FtabArgc = {
    0x0002: 1, /* ISNA */
    0x0003: 1, /* ISERROR */
    0x000F: 1, /* SIN */
    0x0010: 1, /* COS */
    0x0011: 1, /* TAN */
    0x0012: 1, /* ATAN */
    0x0014: 1, /* SQRT */
    0x0015: 1, /* EXP */
    0x0016: 1, /* LN */
    0x0017: 1, /* LOG10 */
    0x0018: 1, /* ABS */
    0x0019: 1, /* INT */
    0x001A: 1, /* SIGN */
    0x001B: 2, /* ROUND */
    0x001E: 2, /* REPT */
    0x001F: 3, /* MID */
    0x0020: 1, /* LEN */
    0x0021: 1, /* VALUE */
    0x0026: 1, /* NOT */
    0x0027: 2, /* MOD */
    0x0028: 3, /* DCOUNT */
    0x0029: 3, /* DSUM */
    0x002A: 3, /* DAVERAGE */
    0x002B: 3, /* DMIN */
    0x002C: 3, /* DMAX */
    0x002D: 3, /* DSTDEV */
    0x002F: 3, /* DVAR */
    0x0030: 2, /* TEXT */
    0x0035: 1, /* GOTO */
    0x003D: 3, /* MIRR */
    0x0041: 3, /* DATE */
    0x0042: 3, /* TIME */
    0x0043: 1, /* DAY */
    0x0044: 1, /* MONTH */
    0x0045: 1, /* YEAR */
    0x0047: 1, /* HOUR */
    0x0048: 1, /* MINUTE */
    0x0049: 1, /* SECOND */
    0x004B: 1, /* AREAS */
    0x004C: 1, /* ROWS */
    0x004D: 1, /* COLUMNS */
    0x004F: 2, /* ABSREF */
    0x0050: 2, /* RELREF */
    0x0053: 1, /* TRANSPOSE */
    0x0056: 1, /* TYPE */
    0x005A: 1, /* DEREF */
    0x0061: 2, /* ATAN2 */
    0x0062: 1, /* ASIN */
    0x0063: 1, /* ACOS */
    0x0069: 1, /* ISREF */
    0x006F: 1, /* CHAR */
    0x0070: 1, /* LOWER */
    0x0071: 1, /* UPPER */
    0x0072: 1, /* PROPER */
    0x0075: 2, /* EXACT */
    0x0076: 1, /* TRIM */
    0x0077: 4, /* REPLACE */
    0x0079: 1, /* CODE */
    0x007E: 1, /* ISERR */
    0x007F: 1, /* ISTEXT */
    0x0080: 1, /* ISNUMBER */
    0x0081: 1, /* ISBLANK */
    0x0082: 1, /* T */
    0x0083: 1, /* N */
    0x0085: 1, /* FCLOSE */
    0x0086: 1, /* FSIZE */
    0x0087: 1, /* FREADLN */
    0x0088: 2, /* FREAD */
    0x0089: 2, /* FWRITELN */
    0x008A: 2, /* FWRITE */
    0x008C: 1, /* DATEVALUE */
    0x008D: 1, /* TIMEVALUE */
    0x008E: 3, /* SLN */
    0x008F: 4, /* SYD */
    0x00A2: 1, /* CLEAN */
    0x00A3: 1, /* MDETERM */
    0x00A4: 1, /* MINVERSE */
    0x00A5: 2, /* MMULT */
    0x00AC: 1, /* WHILE */
    0x00AF: 2, /* INITIATE */
    0x00B0: 2, /* REQUEST */
    0x00B1: 3, /* POKE */
    0x00B2: 2, /* EXECUTE */
    0x00B3: 1, /* TERMINATE */
    0x00B8: 1, /* FACT */
    0x00BD: 3, /* DPRODUCT */
    0x00BE: 1, /* ISNONTEXT */
    0x00C3: 3, /* DSTDEVP */
    0x00C4: 3, /* DVARP */
    0x00C6: 1, /* ISLOGICAL */
    0x00C7: 3, /* DCOUNTA */
    0x00C9: 1, /* UNREGISTER */
    0x00CF: 4, /* REPLACEB */
    0x00D2: 3, /* MIDB */
    0x00D3: 1, /* LENB */
    0x00D4: 2, /* ROUNDUP */
    0x00D5: 2, /* ROUNDDOWN */
    0x00D6: 1, /* ASC */
    0x00D7: 1, /* DBCS */
    0x00E5: 1, /* SINH */
    0x00E6: 1, /* COSH */
    0x00E7: 1, /* TANH */
    0x00E8: 1, /* ASINH */
    0x00E9: 1, /* ACOSH */
    0x00EA: 1, /* ATANH */
    0x00EB: 3, /* DGET */
    0x00F4: 1, /* INFO */
    0x00FC: 2, /* FREQUENCY */
    0x0101: 1, /* EVALUATE */
    0x0105: 1, /* ERROR.TYPE */
    0x010F: 1, /* GAMMALN */
    0x0111: 4, /* BINOMDIST */
    0x0112: 2, /* CHIDIST */
    0x0113: 2, /* CHIINV */
    0x0114: 2, /* COMBIN */
    0x0115: 3, /* CONFIDENCE */
    0x0116: 3, /* CRITBINOM */
    0x0117: 1, /* EVEN */
    0x0118: 3, /* EXPONDIST */
    0x0119: 3, /* FDIST */
    0x011A: 3, /* FINV */
    0x011B: 1, /* FISHER */
    0x011C: 1, /* FISHERINV */
    0x011D: 2, /* FLOOR */
    0x011E: 4, /* GAMMADIST */
    0x011F: 3, /* GAMMAINV */
    0x0120: 2, /* CEILING */
    0x0121: 4, /* HYPGEOMDIST */
    0x0122: 3, /* LOGNORMDIST */
    0x0123: 3, /* LOGINV */
    0x0124: 3, /* NEGBINOMDIST */
    0x0125: 4, /* NORMDIST */
    0x0126: 1, /* NORMSDIST */
    0x0127: 3, /* NORMINV */
    0x0128: 1, /* NORMSINV */
    0x0129: 3, /* STANDARDIZE */
    0x012A: 1, /* ODD */
    0x012B: 2, /* PERMUT */
    0x012C: 3, /* POISSON */
    0x012D: 3, /* TDIST */
    0x012E: 4, /* WEIBULL */
    0x012F: 2, /* SUMXMY2 */
    0x0130: 2, /* SUMX2MY2 */
    0x0131: 2, /* SUMX2PY2 */
    0x0132: 2, /* CHITEST */
    0x0133: 2, /* CORREL */
    0x0134: 2, /* COVAR */
    0x0135: 3, /* FORECAST */
    0x0136: 2, /* FTEST */
    0x0137: 2, /* INTERCEPT */
    0x0138: 2, /* PEARSON */
    0x0139: 2, /* RSQ */
    0x013A: 2, /* STEYX */
    0x013B: 2, /* SLOPE */
    0x013C: 4, /* TTEST */
    0x0145: 2, /* LARGE */
    0x0146: 2, /* SMALL */
    0x0147: 2, /* QUARTILE */
    0x0148: 2, /* PERCENTILE */
    0x014B: 2, /* TRIMMEAN */
    0x014C: 2, /* TINV */
    0x0151: 2, /* POWER */
    0x0156: 1, /* RADIANS */
    0x0157: 1, /* DEGREES */
    0x015A: 2, /* COUNTIF */
    0x015B: 1, /* COUNTBLANK */
    0x015E: 4, /* ISPMT */
    0x015F: 3, /* DATEDIF */
    0x0160: 1, /* DATESTRING */
    0x0161: 2, /* NUMBERSTRING */
    0x0168: 1, /* PHONETIC */
    0x0170: 1, /* BAHTTEXT */
    0x0171: 1, /* THAIDAYOFWEEK */
    0x0172: 1, /* THAIDIGIT */
    0x0173: 1, /* THAIMONTHOFYEAR */
    0x0174: 1, /* THAINUMSOUND */
    0x0175: 1, /* THAINUMSTRING */
    0x0176: 1, /* THAISTRINGLENGTH */
    0x0177: 1, /* ISTHAIDIGIT */
    0x0178: 1, /* ROUNDBAHTDOWN */
    0x0179: 1, /* ROUNDBAHTUP */
    0x017A: 1, /* THAIYEAR */
    0xFFFF: 0
};
/* [MS-XLSX] 2.2.3 Functions */
var XLSXFutureFunctions = {
    "_xlfn.ACOT": "ACOT",
    "_xlfn.ACOTH": "ACOTH",
    "_xlfn.AGGREGATE": "AGGREGATE",
    "_xlfn.ARABIC": "ARABIC",
    "_xlfn.AVERAGEIF": "AVERAGEIF",
    "_xlfn.AVERAGEIFS": "AVERAGEIFS",
    "_xlfn.BASE": "BASE",
    "_xlfn.BETA.DIST": "BETA.DIST",
    "_xlfn.BETA.INV": "BETA.INV",
    "_xlfn.BINOM.DIST": "BINOM.DIST",
    "_xlfn.BINOM.DIST.RANGE": "BINOM.DIST.RANGE",
    "_xlfn.BINOM.INV": "BINOM.INV",
    "_xlfn.BITAND": "BITAND",
    "_xlfn.BITLSHIFT": "BITLSHIFT",
    "_xlfn.BITOR": "BITOR",
    "_xlfn.BITRSHIFT": "BITRSHIFT",
    "_xlfn.BITXOR": "BITXOR",
    "_xlfn.CEILING.MATH": "CEILING.MATH",
    "_xlfn.CEILING.PRECISE": "CEILING.PRECISE",
    "_xlfn.CHISQ.DIST": "CHISQ.DIST",
    "_xlfn.CHISQ.DIST.RT": "CHISQ.DIST.RT",
    "_xlfn.CHISQ.INV": "CHISQ.INV",
    "_xlfn.CHISQ.INV.RT": "CHISQ.INV.RT",
    "_xlfn.CHISQ.TEST": "CHISQ.TEST",
    "_xlfn.COMBINA": "COMBINA",
    "_xlfn.CONFIDENCE.NORM": "CONFIDENCE.NORM",
    "_xlfn.CONFIDENCE.T": "CONFIDENCE.T",
    "_xlfn.COT": "COT",
    "_xlfn.COTH": "COTH",
    "_xlfn.COUNTIFS": "COUNTIFS",
    "_xlfn.COVARIANCE.P": "COVARIANCE.P",
    "_xlfn.COVARIANCE.S": "COVARIANCE.S",
    "_xlfn.CSC": "CSC",
    "_xlfn.CSCH": "CSCH",
    "_xlfn.DAYS": "DAYS",
    "_xlfn.DECIMAL": "DECIMAL",
    "_xlfn.ECMA.CEILING": "ECMA.CEILING",
    "_xlfn.ERF.PRECISE": "ERF.PRECISE",
    "_xlfn.ERFC.PRECISE": "ERFC.PRECISE",
    "_xlfn.EXPON.DIST": "EXPON.DIST",
    "_xlfn.F.DIST": "F.DIST",
    "_xlfn.F.DIST.RT": "F.DIST.RT",
    "_xlfn.F.INV": "F.INV",
    "_xlfn.F.INV.RT": "F.INV.RT",
    "_xlfn.F.TEST": "F.TEST",
    "_xlfn.FILTERXML": "FILTERXML",
    "_xlfn.FLOOR.MATH": "FLOOR.MATH",
    "_xlfn.FLOOR.PRECISE": "FLOOR.PRECISE",
    "_xlfn.FORMULATEXT": "FORMULATEXT",
    "_xlfn.GAMMA": "GAMMA",
    "_xlfn.GAMMA.DIST": "GAMMA.DIST",
    "_xlfn.GAMMA.INV": "GAMMA.INV",
    "_xlfn.GAMMALN.PRECISE": "GAMMALN.PRECISE",
    "_xlfn.GAUSS": "GAUSS",
    "_xlfn.HYPGEOM.DIST": "HYPGEOM.DIST",
    "_xlfn.IFNA": "IFNA",
    "_xlfn.IFERROR": "IFERROR",
    "_xlfn.IMCOSH": "IMCOSH",
    "_xlfn.IMCOT": "IMCOT",
    "_xlfn.IMCSC": "IMCSC",
    "_xlfn.IMCSCH": "IMCSCH",
    "_xlfn.IMSEC": "IMSEC",
    "_xlfn.IMSECH": "IMSECH",
    "_xlfn.IMSINH": "IMSINH",
    "_xlfn.IMTAN": "IMTAN",
    "_xlfn.ISFORMULA": "ISFORMULA",
    "_xlfn.ISO.CEILING": "ISO.CEILING",
    "_xlfn.ISOWEEKNUM": "ISOWEEKNUM",
    "_xlfn.LOGNORM.DIST": "LOGNORM.DIST",
    "_xlfn.LOGNORM.INV": "LOGNORM.INV",
    "_xlfn.MODE.MULT": "MODE.MULT",
    "_xlfn.MODE.SNGL": "MODE.SNGL",
    "_xlfn.MUNIT": "MUNIT",
    "_xlfn.NEGBINOM.DIST": "NEGBINOM.DIST",
    "_xlfn.NETWORKDAYS.INTL": "NETWORKDAYS.INTL",
    "_xlfn.NIGBINOM": "NIGBINOM",
    "_xlfn.NORM.DIST": "NORM.DIST",
    "_xlfn.NORM.INV": "NORM.INV",
    "_xlfn.NORM.S.DIST": "NORM.S.DIST",
    "_xlfn.NORM.S.INV": "NORM.S.INV",
    "_xlfn.NUMBERVALUE": "NUMBERVALUE",
    "_xlfn.PDURATION": "PDURATION",
    "_xlfn.PERCENTILE.EXC": "PERCENTILE.EXC",
    "_xlfn.PERCENTILE.INC": "PERCENTILE.INC",
    "_xlfn.PERCENTRANK.EXC": "PERCENTRANK.EXC",
    "_xlfn.PERCENTRANK.INC": "PERCENTRANK.INC",
    "_xlfn.PERMUTATIONA": "PERMUTATIONA",
    "_xlfn.PHI": "PHI",
    "_xlfn.POISSON.DIST": "POISSON.DIST",
    "_xlfn.QUARTILE.EXC": "QUARTILE.EXC",
    "_xlfn.QUARTILE.INC": "QUARTILE.INC",
    "_xlfn.QUERYSTRING": "QUERYSTRING",
    "_xlfn.RANK.AVG": "RANK.AVG",
    "_xlfn.RANK.EQ": "RANK.EQ",
    "_xlfn.RRI": "RRI",
    "_xlfn.SEC": "SEC",
    "_xlfn.SECH": "SECH",
    "_xlfn.SHEET": "SHEET",
    "_xlfn.SHEETS": "SHEETS",
    "_xlfn.SKEW.P": "SKEW.P",
    "_xlfn.STDEV.P": "STDEV.P",
    "_xlfn.STDEV.S": "STDEV.S",
    "_xlfn.SUMIFS": "SUMIFS",
    "_xlfn.T.DIST": "T.DIST",
    "_xlfn.T.DIST.2T": "T.DIST.2T",
    "_xlfn.T.DIST.RT": "T.DIST.RT",
    "_xlfn.T.INV": "T.INV",
    "_xlfn.T.INV.2T": "T.INV.2T",
    "_xlfn.T.TEST": "T.TEST",
    "_xlfn.UNICHAR": "UNICHAR",
    "_xlfn.UNICODE": "UNICODE",
    "_xlfn.VAR.P": "VAR.P",
    "_xlfn.VAR.S": "VAR.S",
    "_xlfn.WEBSERVICE": "WEBSERVICE",
    "_xlfn.WEIBULL.DIST": "WEIBULL.DIST",
    "_xlfn.WORKDAY.INTL": "WORKDAY.INTL",
    "_xlfn.XOR": "XOR",
    "_xlfn.Z.TEST": "Z.TEST"
};

var strs = {}; // shared strings
var _ssfopts = {}; // spreadsheet formatting options

RELS.WS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet";

function get_sst_id(sst, str) {
    for(var i = 0, len = sst.length; i < len; ++i) if(sst[i].t === str) { sst.Count ++; return i; }
    sst[len] = {t:str}; sst.Count ++; sst.Unique ++; return len;
}

function get_cell_style(styles, cell, opts) {
    var z = opts.revssf[cell.z != null ? cell.z : "General"];
    for(var i = 0, len = styles.length; i != len; ++i) if(styles[i].numFmtId === z) return i;
    styles[len] = {
        numFmtId:z,
        fontId:0,
        fillId:0,
        borderId:0,
        xfId:0,
        applyNumberFormat:1
    };
    return len;
}

function safe_format(p, fmtid, fillid, opts) {
    try {
        if(p.t === 'e') p.w = p.w || BErr[p.v];
        else if(fmtid === 0) {
            if(p.t === 'n') {
                if((p.v|0) === p.v) p.w = SSF._general_int(p.v,_ssfopts);
                else p.w = SSF._general_num(p.v,_ssfopts);
            }
            else if(p.t === 'd') {
                var dd = datenum(p.v);
                if((dd|0) === dd) p.w = SSF._general_int(dd,_ssfopts);
                else p.w = SSF._general_num(dd,_ssfopts);
            }
            else if(p.v === undefined) return "";
            else p.w = SSF._general(p.v,_ssfopts);
        }
        else if(p.t === 'd') p.w = SSF.format(fmtid,datenum(p.v),_ssfopts);
        else p.w = SSF.format(fmtid,p.v,_ssfopts);
        if(opts.cellNF) p.z = SSF._table[fmtid];
    } catch(e) { if(opts.WTF) throw e; }
    if(fillid) try {
        p.s = styles.Fills[fillid];
        if (p.s.fgColor && p.s.fgColor.theme) {
            p.s.fgColor.rgb = rgb_tint(themes.themeElements.clrScheme[p.s.fgColor.theme].rgb, p.s.fgColor.tint || 0);
            if(opts.WTF) p.s.fgColor.raw_rgb = themes.themeElements.clrScheme[p.s.fgColor.theme].rgb;
        }
        if (p.s.bgColor && p.s.bgColor.theme) {
            p.s.bgColor.rgb = rgb_tint(themes.themeElements.clrScheme[p.s.bgColor.theme].rgb, p.s.bgColor.tint || 0);
            if(opts.WTF) p.s.bgColor.raw_rgb = themes.themeElements.clrScheme[p.s.bgColor.theme].rgb;
        }
    } catch(e) { if(opts.WTF) throw e; }
}
function parse_ws_xml_dim(ws, s) {
    var d = safe_decode_range(s);
    if(d.s.r<=d.e.r && d.s.c<=d.e.c && d.s.r>=0 && d.s.c>=0) ws["!ref"] = encode_range(d);
}
var mergecregex = /<mergeCell ref="[A-Z0-9:]+"\s*\/>/g;
var sheetdataregex = /<(?:\w+:)?sheetData>([^\u2603]*)<\/(?:\w+:)?sheetData>/;
var hlinkregex = /<hyperlink[^>]*\/>/g;
var dimregex = /"(\w*:\w*)"/;
var colregex = /<col[^>]*\/>/g;
/* 18.3 Worksheets */
function parse_ws_xml(data, opts, rels) {
    if(!data) return data;
    /* 18.3.1.99 worksheet CT_Worksheet */
    var s = {};

    /* 18.3.1.35 dimension CT_SheetDimension ? */
    var ridx = data.indexOf("<dimension");
    if(ridx > 0) {
        var ref = data.substr(ridx,50).match(dimregex);
        if(ref != null) parse_ws_xml_dim(s, ref[1]);
    }

    /* 18.3.1.55 mergeCells CT_MergeCells */
    var mergecells = [];
    if(data.indexOf("</mergeCells>")!==-1) {
        var merges = data.match(mergecregex);
        for(ridx = 0; ridx != merges.length; ++ridx)
            mergecells[ridx] = safe_decode_range(merges[ridx].substr(merges[ridx].indexOf("\"")+1));
    }

    /* 18.3.1.17 cols CT_Cols */
    var columns = [];
    if(opts.cellStyles && data.indexOf("</cols>")!==-1) {
        /* 18.3.1.13 col CT_Col */
        var cols = data.match(colregex);
        parse_ws_xml_cols(columns, cols);
    }

    var refguess = {s: {r:1000000, c:1000000}, e: {r:0, c:0} };

    /* 18.3.1.80 sheetData CT_SheetData ? */
    var mtch=data.match(sheetdataregex);
    if(mtch) parse_ws_xml_data(mtch[1], s, opts, refguess);

    /* 18.3.1.48 hyperlinks CT_Hyperlinks */
    if(data.indexOf("</hyperlinks>")!==-1) parse_ws_xml_hlinks(s, data.match(hlinkregex), rels);

    if(!s["!ref"] && refguess.e.c >= refguess.s.c && refguess.e.r >= refguess.s.r) s["!ref"] = encode_range(refguess);
    if(opts.sheetRows > 0 && s["!ref"]) {
        var tmpref = safe_decode_range(s["!ref"]);
        if(opts.sheetRows < +tmpref.e.r) {
            tmpref.e.r = opts.sheetRows - 1;
            if(tmpref.e.r > refguess.e.r) tmpref.e.r = refguess.e.r;
            if(tmpref.e.r < tmpref.s.r) tmpref.s.r = tmpref.e.r;
            if(tmpref.e.c > refguess.e.c) tmpref.e.c = refguess.e.c;
            if(tmpref.e.c < tmpref.s.c) tmpref.s.c = tmpref.e.c;
            s["!fullref"] = s["!ref"];
            s["!ref"] = encode_range(tmpref);
        }
    }
    if(mergecells.length > 0) s["!merges"] = mergecells;
    if(columns.length > 0) s["!cols"] = columns;
    return s;
}

function write_ws_xml_merges(merges) {
    if(merges.length == 0) return "";
    var o = '<mergeCells count="' + merges.length + '">';
    for(var i = 0; i != merges.length; ++i) o += '<mergeCell ref="' + encode_range(merges[i]) + '"/>';
    return o + '</mergeCells>';
}

function parse_ws_xml_hlinks(s, data, rels) {
    for(var i = 0; i != data.length; ++i) {
        var val = parsexmltag(data[i], true);
        if(!val.ref) return;
        var rel = rels ? rels['!id'][val.id] : null;
        if(rel) {
            val.Target = rel.Target;
            if(val.location) val.Target += "#"+val.location;
            val.Rel = rel;
        } else {
            val.Target = val.location;
            rel = {Target: val.location, TargetMode: 'Internal'};
            val.Rel = rel;
        }
        var rng = safe_decode_range(val.ref);
        for(var R=rng.s.r;R<=rng.e.r;++R) for(var C=rng.s.c;C<=rng.e.c;++C) {
            var addr = encode_cell({c:C,r:R});
            if(!s[addr]) s[addr] = {t:"stub",v:undefined};
            s[addr].l = val;
        }
    }
}

function parse_ws_xml_cols(columns, cols) {
    var seencol = false;
    for(var coli = 0; coli != cols.length; ++coli) {
        var coll = parsexmltag(cols[coli], true);
        var colm=parseInt(coll.min, 10)-1, colM=parseInt(coll.max,10)-1;
        delete coll.min; delete coll.max;
        if(!seencol && coll.width) { seencol = true; find_mdw(+coll.width, coll); }
        if(coll.width) {
            coll.wpx = width2px(+coll.width);
            coll.wch = px2char(coll.wpx);
            coll.MDW = MDW;
        }
        while(colm <= colM) columns[colm++] = coll;
    }
}

function write_ws_xml_cols(ws, cols) {
    var o = ["<cols>"], col, width;
    for(var i = 0; i != cols.length; ++i) {
        if(!(col = cols[i])) continue;
        var p = {min:i+1,max:i+1};
        /* wch (chars), wpx (pixels) */
        width = -1;
        if(col.wpx) width = px2char(col.wpx);
        else if(col.wch) width = col.wch;
        if(width > -1) { p.width = char2width(width); p.customWidth= 1; }
        o[o.length] = (writextag('col', null, p));
    }
    o[o.length] = "</cols>";
    return o.join("");
}

function write_ws_xml_cell(cell, ref, ws, opts, idx, wb) {
    if(cell.v === undefined) return "";
    var vv = "";
    var oldt = cell.t, oldv = cell.v;
    switch(cell.t) {
        case 'b': vv = cell.v ? "1" : "0"; break;
        case 'n': vv = ''+cell.v; break;
        case 'e': vv = BErr[cell.v]; break;
        case 'd':
            if(opts.cellDates) vv = new Date(cell.v).toISOString();
            else {
                cell.t = 'n';
                vv = ''+(cell.v = datenum(cell.v));
                if(typeof cell.z === 'undefined') cell.z = SSF._table[14];
            }
            break;
        default: vv = cell.v; break;
    }
    var v = writetag('v', escapexml(vv)), o = {r:ref};
    /* TODO: cell style */
    var os = get_cell_style(opts.cellXfs, cell, opts);
    if(os !== 0) o.s = os;
    switch(cell.t) {
        case 'n': break;
        case 'd': o.t = "d"; break;
        case 'b': o.t = "b"; break;
        case 'e': o.t = "e"; break;
        default:
            if(opts.bookSST) {
                v = writetag('v', ''+get_sst_id(opts.Strings, cell.v));
                o.t = "s"; break;
            }
            o.t = "str"; break;
    }
    if(cell.t != oldt) { cell.t = oldt; cell.v = oldv; }
    return writextag('c', v, o);
}

var parse_ws_xml_data = (function parse_ws_xml_data_factory() {
    var cellregex = /<(?:\w+:)?c[ >]/, rowregex = /<\/(?:\w+:)?row>/;
    var rregex = /r=["']([^"']*)["']/, isregex = /<is>([\S\s]*?)<\/is>/;
    var match_v = matchtag("v"), match_f = matchtag("f");

return function parse_ws_xml_data(sdata, s, opts, guess) {
    var ri = 0, x = "", cells = [], cref = [], idx = 0, i=0, cc=0, d="", p;
    var tag, tagr = 0, tagc = 0;
    var sstr;
    var fmtid = 0, fillid = 0, do_format = Array.isArray(styles.CellXf), cf;
    for(var marr = sdata.split(rowregex), mt = 0, marrlen = marr.length; mt != marrlen; ++mt) {
        x = marr[mt].trim();
        var xlen = x.length;
        if(xlen === 0) continue;

        /* 18.3.1.73 row CT_Row */
        for(ri = 0; ri < xlen; ++ri) if(x.charCodeAt(ri) === 62) break; ++ri;
        tag = parsexmltag(x.substr(0,ri), true);
        /* SpreadSheetGear uses implicit r/c */
        tagr = typeof tag.r !== 'undefined' ? parseInt(tag.r, 10) : tagr+1; tagc = -1;
        if(opts.sheetRows && opts.sheetRows < tagr) continue;
        if(guess.s.r > tagr - 1) guess.s.r = tagr - 1;
        if(guess.e.r < tagr - 1) guess.e.r = tagr - 1;

        /* 18.3.1.4 c CT_Cell */
        cells = x.substr(ri).split(cellregex);
        for(ri = typeof tag.r === 'undefined' ? 0 : 1; ri != cells.length; ++ri) {
            x = cells[ri].trim();
            if(x.length === 0) continue;
            cref = x.match(rregex); idx = ri; i=0; cc=0;
            x = "<c " + (x.substr(0,1)=="<"?">":"") + x;
            if(cref !== null && cref.length === 2) {
                idx = 0; d=cref[1];
                for(i=0; i != d.length; ++i) {
                    if((cc=d.charCodeAt(i)-64) < 1 || cc > 26) break;
                    idx = 26*idx + cc;
                }
                --idx;
                tagc = idx;
            } else ++tagc;
            for(i = 0; i != x.length; ++i) if(x.charCodeAt(i) === 62) break; ++i;
            tag = parsexmltag(x.substr(0,i), true);
            if(!tag.r) tag.r = utils.encode_cell({r:tagr-1, c:tagc});
            d = x.substr(i);
            p = {t:""};

            if((cref=d.match(match_v))!== null && cref[1] !== '') p.v=unescapexml(cref[1]);
            if(opts.cellFormula && (cref=d.match(match_f))!== null) p.f=unescapexml(cref[1]);

            /* SCHEMA IS ACTUALLY INCORRECT HERE.  IF A CELL HAS NO T, EMIT "" */
            if(tag.t === undefined && p.v === undefined) {
                if(!opts.sheetStubs) continue;
                p.t = "stub";
            }
            else p.t = tag.t || "n";
            if(guess.s.c > idx) guess.s.c = idx;
            if(guess.e.c < idx) guess.e.c = idx;
            /* 18.18.11 t ST_CellType */
            switch(p.t) {
                case 'n': p.v = parseFloat(p.v); break;
                case 's':
                    sstr = strs[parseInt(p.v, 10)];
                    p.v = sstr.t;
                    p.r = sstr.r;
                    if(opts.cellHTML) p.h = sstr.h;
                    break;
                case 'str':
                    p.t = "s";
                    p.v = (p.v!=null) ? utf8read(p.v) : '';
                    if(opts.cellHTML) p.h = p.v;
                    break;
                case 'inlineStr':
                    cref = d.match(isregex);
                    p.t = 's';
                    if(cref !== null) { sstr = parse_si(cref[1]); p.v = sstr.t; } else p.v = "";
                    break; // inline string
                case 'b': p.v = parsexmlbool(p.v); break;
                case 'd':
                    if(!opts.cellDates) { p.v = datenum(p.v); p.t = 'n'; }
                    break;
                /* error string in .v, number in .v */
                case 'e': p.w = p.v; p.v = RBErr[p.v]; break;
            }
            /* formatting */
            fmtid = fillid = 0;
            if(do_format && tag.s !== undefined) {
                cf = styles.CellXf[tag.s];
                if(cf != null) {
                    if(cf.numFmtId != null) fmtid = cf.numFmtId;
                    if(opts.cellStyles && cf.fillId != null) fillid = cf.fillId;
                }
            }
            safe_format(p, fmtid, fillid, opts);
            s[tag.r] = p;
        }
    }
}; })();

function write_ws_xml_data(ws, opts, idx, wb) {
    var o = [], r = [], range = safe_decode_range(ws['!ref']), cell, ref, rr = "", cols = [], R, C;
    for(C = range.s.c; C <= range.e.c; ++C) cols[C] = encode_col(C);
    for(R = range.s.r; R <= range.e.r; ++R) {
        r = [];
        rr = encode_row(R);
        for(C = range.s.c; C <= range.e.c; ++C) {
            ref = cols[C] + rr;
            if(ws[ref] === undefined) continue;
            if((cell = write_ws_xml_cell(ws[ref], ref, ws, opts, idx, wb)) != null) r.push(cell);
        }
        if(r.length > 0) o[o.length] = (writextag('row', r.join(""), {r:rr}));
    }
    return o.join("");
}

var WS_XML_ROOT = writextag('worksheet', null, {
    'xmlns': XMLNS.main[0],
    'xmlns:r': XMLNS.r
});

function write_ws_xml(idx, opts, wb) {
    var o = [XML_HEADER, WS_XML_ROOT];
    var s = wb.SheetNames[idx], sidx = 0, rdata = "";
    var ws = wb.Sheets[s];
    if(ws === undefined) ws = {};
    var ref = ws['!ref']; if(ref === undefined) ref = 'A1';
    o[o.length] = (writextag('dimension', null, {'ref': ref}));

    if(ws['!cols'] !== undefined && ws['!cols'].length > 0) o[o.length] = (write_ws_xml_cols(ws, ws['!cols']));
    o[sidx = o.length] = '<sheetData/>';
    if(ws['!ref'] !== undefined) {
        rdata = write_ws_xml_data(ws, opts, idx, wb);
        if(rdata.length > 0) o[o.length] = (rdata);
    }
    if(o.length>sidx+1) { o[o.length] = ('</sheetData>'); o[sidx]=o[sidx].replace("/>",">"); }

    if(ws['!merges'] !== undefined && ws['!merges'].length > 0) o[o.length] = (write_ws_xml_merges(ws['!merges']));

    if(o.length>2) { o[o.length] = ('</worksheet>'); o[1]=o[1].replace("/>",">"); }
    return o.join("");
}

/* [MS-XLSB] 2.4.718 BrtRowHdr */
function parse_BrtRowHdr(data, length) {
    var z = [];
    z.r = data.read_shift(4);
    data.l += length-4;
    return z;
}

/* [MS-XLSB] 2.4.812 BrtWsDim */
var parse_BrtWsDim = parse_UncheckedRfX;
var write_BrtWsDim = write_UncheckedRfX;

/* [MS-XLSB] 2.4.815 BrtWsProp */
function parse_BrtWsProp(data, length) {
    var z = {};
    /* TODO: pull flags */
    data.l += 19;
    z.name = parse_XLSBCodeName(data, length - 19);
    return z;
}

/* [MS-XLSB] 2.4.303 BrtCellBlank */
function parse_BrtCellBlank(data, length) {
    var cell = parse_XLSBCell(data);
    return [cell];
}
function write_BrtCellBlank(cell, val, o) {
    if(o == null) o = new_buf(8);
    return write_XLSBCell(val, o);
}


/* [MS-XLSB] 2.4.304 BrtCellBool */
function parse_BrtCellBool(data, length) {
    var cell = parse_XLSBCell(data);
    var fBool = data.read_shift(1);
    return [cell, fBool, 'b'];
}

/* [MS-XLSB] 2.4.305 BrtCellError */
function parse_BrtCellError(data, length) {
    var cell = parse_XLSBCell(data);
    var fBool = data.read_shift(1);
    return [cell, fBool, 'e'];
}

/* [MS-XLSB] 2.4.308 BrtCellIsst */
function parse_BrtCellIsst(data, length) {
    var cell = parse_XLSBCell(data);
    var isst = data.read_shift(4);
    return [cell, isst, 's'];
}

/* [MS-XLSB] 2.4.310 BrtCellReal */
function parse_BrtCellReal(data, length) {
    var cell = parse_XLSBCell(data);
    var value = parse_Xnum(data);
    return [cell, value, 'n'];
}

/* [MS-XLSB] 2.4.311 BrtCellRk */
function parse_BrtCellRk(data, length) {
    var cell = parse_XLSBCell(data);
    var value = parse_RkNumber(data);
    return [cell, value, 'n'];
}

/* [MS-XLSB] 2.4.314 BrtCellSt */
function parse_BrtCellSt(data, length) {
    var cell = parse_XLSBCell(data);
    var value = parse_XLWideString(data);
    return [cell, value, 'str'];
}

/* [MS-XLSB] 2.4.647 BrtFmlaBool */
function parse_BrtFmlaBool(data, length, opts) {
    var cell = parse_XLSBCell(data);
    var value = data.read_shift(1);
    var o = [cell, value, 'b'];
    if(opts.cellFormula) {
        var formula = parse_XLSBCellParsedFormula(data, length-9);
        o[3] = ""; /* TODO */
    }
    else data.l += length-9;
    return o;
}

/* [MS-XLSB] 2.4.648 BrtFmlaError */
function parse_BrtFmlaError(data, length, opts) {
    var cell = parse_XLSBCell(data);
    var value = data.read_shift(1);
    var o = [cell, value, 'e'];
    if(opts.cellFormula) {
        var formula = parse_XLSBCellParsedFormula(data, length-9);
        o[3] = ""; /* TODO */
    }
    else data.l += length-9;
    return o;
}

/* [MS-XLSB] 2.4.649 BrtFmlaNum */
function parse_BrtFmlaNum(data, length, opts) {
    var cell = parse_XLSBCell(data);
    var value = parse_Xnum(data);
    var o = [cell, value, 'n'];
    if(opts.cellFormula) {
        var formula = parse_XLSBCellParsedFormula(data, length - 16);
        o[3] = ""; /* TODO */
    }
    else data.l += length-16;
    return o;
}

/* [MS-XLSB] 2.4.650 BrtFmlaString */
function parse_BrtFmlaString(data, length, opts) {
    var start = data.l;
    var cell = parse_XLSBCell(data);
    var value = parse_XLWideString(data);
    var o = [cell, value, 'str'];
    if(opts.cellFormula) {
        var formula = parse_XLSBCellParsedFormula(data, start + length - data.l);
    }
    else data.l = start + length;
    return o;
}

/* [MS-XLSB] 2.4.676 BrtMergeCell */
var parse_BrtMergeCell = parse_UncheckedRfX;

/* [MS-XLSB] 2.4.656 BrtHLink */
function parse_BrtHLink(data, length, opts) {
    var end = data.l + length;
    var rfx = parse_UncheckedRfX(data, 16);
    var relId = parse_XLNullableWideString(data);
    var loc = parse_XLWideString(data);
    var tooltip = parse_XLWideString(data);
    var display = parse_XLWideString(data);
    data.l = end;
    return {rfx:rfx, relId:relId, loc:loc, tooltip:tooltip, display:display};
}

/* [MS-XLSB] 2.1.7.61 Worksheet */
function parse_ws_bin(data, opts, rels) {
    if(!data) return data;
    if(!rels) rels = {'!id':{}};
    var s = {};

    var ref;
    var refguess = {s: {r:1000000, c:1000000}, e: {r:0, c:0} };

    var pass = false, end = false;
    var row, p, cf, R, C, addr, sstr, rr;
    var mergecells = [];
    recordhopper(data, function ws_parse(val, R) {
        if(end) return;
        switch(R.n) {
            case 'BrtWsDim': ref = val; break;
            case 'BrtRowHdr':
                row = val;
                if(opts.sheetRows && opts.sheetRows <= row.r) end=true;
                rr = encode_row(row.r);
                break;

            case 'BrtFmlaBool':
            case 'BrtFmlaError':
            case 'BrtFmlaNum':
            case 'BrtFmlaString':
            case 'BrtCellBool':
            case 'BrtCellError':
            case 'BrtCellIsst':
            case 'BrtCellReal':
            case 'BrtCellRk':
            case 'BrtCellSt':
                p = {t:val[2]};
                switch(val[2]) {
                    case 'n': p.v = val[1]; break;
                    case 's': sstr = strs[val[1]]; p.v = sstr.t; p.r = sstr.r; break;
                    case 'b': p.v = val[1] ? true : false; break;
                    case 'e': p.v = val[1]; p.w = BErr[p.v]; break;
                    case 'str': p.t = 's'; p.v = utf8read(val[1]); break;
                }
                if(opts.cellFormula && val.length > 3) p.f = val[3];
                if((cf = styles.CellXf[val[0].iStyleRef])) safe_format(p,cf.ifmt,null,opts);
                s[encode_col(C=val[0].c) + rr] = p;
                if(refguess.s.r > row.r) refguess.s.r = row.r;
                if(refguess.s.c > C) refguess.s.c = C;
                if(refguess.e.r < row.r) refguess.e.r = row.r;
                if(refguess.e.c < C) refguess.e.c = C;
                break;

            case 'BrtCellBlank': if(!opts.sheetStubs) break;
                p = {t:'s',v:undefined};
                s[encode_col(C=val[0].c) + rr] = p;
                if(refguess.s.r > row.r) refguess.s.r = row.r;
                if(refguess.s.c > C) refguess.s.c = C;
                if(refguess.e.r < row.r) refguess.e.r = row.r;
                if(refguess.e.c < C) refguess.e.c = C;
                break;

            /* Merge Cells */
            case 'BrtBeginMergeCells': break;
            case 'BrtEndMergeCells': break;
            case 'BrtMergeCell': mergecells.push(val); break;

            case 'BrtHLink':
                var rel = rels['!id'][val.relId];
                if(rel) {
                    val.Target = rel.Target;
                    if(val.loc) val.Target += "#"+val.loc;
                    val.Rel = rel;
                }
                for(R=val.rfx.s.r;R<=val.rfx.e.r;++R) for(C=val.rfx.s.c;C<=val.rfx.e.c;++C) {
                    addr = encode_cell({c:C,r:R});
                    if(!s[addr]) s[addr] = {t:'s',v:undefined};
                    s[addr].l = val;
                }
                break;

            case 'BrtArrFmla': break; // TODO
            case 'BrtShrFmla': break; // TODO
            case 'BrtBeginSheet': break;
            case 'BrtWsProp': break; // TODO
            case 'BrtSheetCalcProp': break; // TODO
            case 'BrtBeginWsViews': break; // TODO
            case 'BrtBeginWsView': break; // TODO
            case 'BrtPane': break; // TODO
            case 'BrtSel': break; // TODO
            case 'BrtEndWsView': break; // TODO
            case 'BrtEndWsViews': break; // TODO
            case 'BrtACBegin': break; // TODO
            case 'BrtRwDescent': break; // TODO
            case 'BrtACEnd': break; // TODO
            case 'BrtWsFmtInfoEx14': break; // TODO
            case 'BrtWsFmtInfo': break; // TODO
            case 'BrtBeginColInfos': break; // TODO
            case 'BrtColInfo': break; // TODO
            case 'BrtEndColInfos': break; // TODO
            case 'BrtBeginSheetData': break; // TODO
            case 'BrtEndSheetData': break; // TODO
            case 'BrtSheetProtection': break; // TODO
            case 'BrtPrintOptions': break; // TODO
            case 'BrtMargins': break; // TODO
            case 'BrtPageSetup': break; // TODO
            case 'BrtFRTBegin': pass = true; break;
            case 'BrtFRTEnd': pass = false; break;
            case 'BrtEndSheet': break; // TODO
            case 'BrtDrawing': break; // TODO
            case 'BrtLegacyDrawing': break; // TODO
            case 'BrtLegacyDrawingHF': break; // TODO
            case 'BrtPhoneticInfo': break; // TODO
            case 'BrtBeginHeaderFooter': break; // TODO
            case 'BrtEndHeaderFooter': break; // TODO
            case 'BrtBrk': break; // TODO
            case 'BrtBeginRwBrk': break; // TODO
            case 'BrtEndRwBrk': break; // TODO
            case 'BrtBeginColBrk': break; // TODO
            case 'BrtEndColBrk': break; // TODO
            case 'BrtBeginUserShViews': break; // TODO
            case 'BrtBeginUserShView': break; // TODO
            case 'BrtEndUserShView': break; // TODO
            case 'BrtEndUserShViews': break; // TODO
            case 'BrtBkHim': break; // TODO
            case 'BrtBeginOleObjects': break; // TODO
            case 'BrtOleObject': break; // TODO
            case 'BrtEndOleObjects': break; // TODO
            case 'BrtBeginListParts': break; // TODO
            case 'BrtListPart': break; // TODO
            case 'BrtEndListParts': break; // TODO
            case 'BrtBeginSortState': break; // TODO
            case 'BrtBeginSortCond': break; // TODO
            case 'BrtEndSortCond': break; // TODO
            case 'BrtEndSortState': break; // TODO
            case 'BrtBeginConditionalFormatting': break; // TODO
            case 'BrtEndConditionalFormatting': break; // TODO
            case 'BrtBeginCFRule': break; // TODO
            case 'BrtEndCFRule': break; // TODO
            case 'BrtBeginDVals': break; // TODO
            case 'BrtDVal': break; // TODO
            case 'BrtEndDVals': break; // TODO
            case 'BrtRangeProtection': break; // TODO
            case 'BrtBeginDCon': break; // TODO
            case 'BrtEndDCon': break; // TODO
            case 'BrtBeginDRefs': break;
            case 'BrtDRef': break;
            case 'BrtEndDRefs': break;

            /* ActiveX */
            case 'BrtBeginActiveXControls': break;
            case 'BrtActiveX': break;
            case 'BrtEndActiveXControls': break;

            /* AutoFilter */
            case 'BrtBeginAFilter': break;
            case 'BrtEndAFilter': break;
            case 'BrtBeginFilterColumn': break;
            case 'BrtBeginFilters': break;
            case 'BrtFilter': break;
            case 'BrtEndFilters': break;
            case 'BrtEndFilterColumn': break;
            case 'BrtDynamicFilter': break;
            case 'BrtTop10Filter': break;
            case 'BrtBeginCustomFilters': break;
            case 'BrtCustomFilter': break;
            case 'BrtEndCustomFilters': break;

            /* Smart Tags */
            case 'BrtBeginSmartTags': break;
            case 'BrtBeginCellSmartTags': break;
            case 'BrtBeginCellSmartTag': break;
            case 'BrtCellSmartTagProperty': break;
            case 'BrtEndCellSmartTag': break;
            case 'BrtEndCellSmartTags': break;
            case 'BrtEndSmartTags': break;

            /* Cell Watch */
            case 'BrtBeginCellWatches': break;
            case 'BrtCellWatch': break;
            case 'BrtEndCellWatches': break;

            /* Table */
            case 'BrtTable': break;

            /* Ignore Cell Errors */
            case 'BrtBeginCellIgnoreECs': break;
            case 'BrtCellIgnoreEC': break;
            case 'BrtEndCellIgnoreECs': break;

            default: if(!pass || opts.WTF) throw new Error("Unexpected record " + R.n);
        }
    }, opts);
    if(!s["!ref"] && (refguess.s.r < 1000000 || ref.e.r > 0 || ref.e.c > 0 || ref.s.r > 0 || ref.s.c > 0)) s["!ref"] = encode_range(ref);
    if(opts.sheetRows && s["!ref"]) {
        var tmpref = safe_decode_range(s["!ref"]);
        if(opts.sheetRows < +tmpref.e.r) {
            tmpref.e.r = opts.sheetRows - 1;
            if(tmpref.e.r > refguess.e.r) tmpref.e.r = refguess.e.r;
            if(tmpref.e.r < tmpref.s.r) tmpref.s.r = tmpref.e.r;
            if(tmpref.e.c > refguess.e.c) tmpref.e.c = refguess.e.c;
            if(tmpref.e.c < tmpref.s.c) tmpref.s.c = tmpref.e.c;
            s["!fullref"] = s["!ref"];
            s["!ref"] = encode_range(tmpref);
        }
    }
    if(mergecells.length > 0) s["!merges"] = mergecells;
    return s;
}

/* TODO: something useful -- this is a stub */
function write_ws_bin_cell(ba, cell, R, C, opts) {
    if(cell.v === undefined) return "";
    var vv = "";
    switch(cell.t) {
        case 'b': vv = cell.v ? "1" : "0"; break;
        case 'n': case 'e': vv = ''+cell.v; break;
        default: vv = cell.v; break;
    }
    var o = {r:R, c:C};
    /* TODO: cell style */
    o.s = get_cell_style(opts.cellXfs, cell, opts);
    switch(cell.t) {
        case 's': case 'str':
            if(opts.bookSST) {
                vv = get_sst_id(opts.Strings, cell.v);
                o.t = "s"; break;
            }
            o.t = "str"; break;
        case 'n': break;
        case 'b': o.t = "b"; break;
        case 'e': o.t = "e"; break;
    }
    write_record(ba, "BrtCellBlank", write_BrtCellBlank(cell, o));
}

function write_CELLTABLE(ba, ws, idx, opts, wb) {
    var range = safe_decode_range(ws['!ref'] || "A1"), ref, rr = "", cols = [];
    write_record(ba, 'BrtBeginSheetData');
    for(var R = range.s.r; R <= range.e.r; ++R) {
        rr = encode_row(R);
        /* [ACCELLTABLE] */
        /* BrtRowHdr */
        for(var C = range.s.c; C <= range.e.c; ++C) {
            /* *16384CELL */
            if(R === range.s.r) cols[C] = encode_col(C);
            ref = cols[C] + rr;
            if(!ws[ref]) continue;
            /* write cell */
            write_ws_bin_cell(ba, ws[ref], R, C, opts);
        }
    }
    write_record(ba, 'BrtEndSheetData');
}

function write_ws_bin(idx, opts, wb) {
    var ba = buf_array();
    var s = wb.SheetNames[idx], ws = wb.Sheets[s] || {};
    var r = safe_decode_range(ws['!ref'] || "A1");
    write_record(ba, "BrtBeginSheet");
    /* [BrtWsProp] */
    write_record(ba, "BrtWsDim", write_BrtWsDim(r));
    /* [WSVIEWS2] */
    /* [WSFMTINFO] */
    /* *COLINFOS */
    write_CELLTABLE(ba, ws, idx, opts, wb);
    /* [BrtSheetCalcProp] */
    /* [[BrtSheetProtectionIso] BrtSheetProtection] */
    /* *([BrtRangeProtectionIso] BrtRangeProtection) */
    /* [SCENMAN] */
    /* [AUTOFILTER] */
    /* [SORTSTATE] */
    /* [DCON] */
    /* [USERSHVIEWS] */
    /* [MERGECELLS] */
    /* [BrtPhoneticInfo] */
    /* *CONDITIONALFORMATTING */
    /* [DVALS] */
    /* *BrtHLink */
    /* [BrtPrintOptions] */
    /* [BrtMargins] */
    /* [BrtPageSetup] */
    /* [HEADERFOOTER] */
    /* [RWBRK] */
    /* [COLBRK] */
    /* *BrtBigName */
    /* [CELLWATCHES] */
    /* [IGNOREECS] */
    /* [SMARTTAGS] */
    /* [BrtDrawing] */
    /* [BrtLegacyDrawing] */
    /* [BrtLegacyDrawingHF] */
    /* [BrtBkHim] */
    /* [OLEOBJECTS] */
    /* [ACTIVEXCONTROLS] */
    /* [WEBPUBITEMS] */
    /* [LISTPARTS] */
    /* FRTWORKSHEET */
    write_record(ba, "BrtEndSheet");
    return ba.end();
}
/* 18.2.28 (CT_WorkbookProtection) Defaults */
var WBPropsDef = [
    ['allowRefreshQuery', '0'],
    ['autoCompressPictures', '1'],
    ['backupFile', '0'],
    ['checkCompatibility', '0'],
    ['codeName', ''],
    ['date1904', '0'],
    ['dateCompatibility', '1'],
    //['defaultThemeVersion', '0'],
    ['filterPrivacy', '0'],
    ['hidePivotFieldList', '0'],
    ['promptedSolutions', '0'],
    ['publishItems', '0'],
    ['refreshAllConnections', false],
    ['saveExternalLinkValues', '1'],
    ['showBorderUnselectedTables', '1'],
    ['showInkAnnotation', '1'],
    ['showObjects', 'all'],
    ['showPivotChartFilter', '0']
    //['updateLinks', 'userSet']
];

/* 18.2.30 (CT_BookView) Defaults */
var WBViewDef = [
    ['activeTab', '0'],
    ['autoFilterDateGrouping', '1'],
    ['firstSheet', '0'],
    ['minimized', '0'],
    ['showHorizontalScroll', '1'],
    ['showSheetTabs', '1'],
    ['showVerticalScroll', '1'],
    ['tabRatio', '600'],
    ['visibility', 'visible']
    //window{Height,Width}, {x,y}Window
];

/* 18.2.19 (CT_Sheet) Defaults */
var SheetDef = [
    ['state', 'visible']
];

/* 18.2.2  (CT_CalcPr) Defaults */
var CalcPrDef = [
    ['calcCompleted', 'true'],
    ['calcMode', 'auto'],
    ['calcOnSave', 'true'],
    ['concurrentCalc', 'true'],
    ['fullCalcOnLoad', 'false'],
    ['fullPrecision', 'true'],
    ['iterate', 'false'],
    ['iterateCount', '100'],
    ['iterateDelta', '0.001'],
    ['refMode', 'A1']
];

/* 18.2.3 (CT_CustomWorkbookView) Defaults */
var CustomWBViewDef = [
    ['autoUpdate', 'false'],
    ['changesSavedWin', 'false'],
    ['includeHiddenRowCol', 'true'],
    ['includePrintSettings', 'true'],
    ['maximized', 'false'],
    ['minimized', 'false'],
    ['onlySync', 'false'],
    ['personalView', 'false'],
    ['showComments', 'commIndicator'],
    ['showFormulaBar', 'true'],
    ['showHorizontalScroll', 'true'],
    ['showObjects', 'all'],
    ['showSheetTabs', 'true'],
    ['showStatusbar', 'true'],
    ['showVerticalScroll', 'true'],
    ['tabRatio', '600'],
    ['xWindow', '0'],
    ['yWindow', '0']
];

function push_defaults_array(target, defaults) {
    for(var j = 0; j != target.length; ++j) { var w = target[j];
        for(var i=0; i != defaults.length; ++i) { var z = defaults[i];
            if(w[z[0]] == null) w[z[0]] = z[1];
        }
    }
}
function push_defaults(target, defaults) {
    for(var i = 0; i != defaults.length; ++i) { var z = defaults[i];
        if(target[z[0]] == null) target[z[0]] = z[1];
    }
}

function parse_wb_defaults(wb) {
    push_defaults(wb.WBProps, WBPropsDef);
    push_defaults(wb.CalcPr, CalcPrDef);

    push_defaults_array(wb.WBView, WBViewDef);
    push_defaults_array(wb.Sheets, SheetDef);

    _ssfopts.date1904 = parsexmlbool(wb.WBProps.date1904, 'date1904');
}
/* 18.2 Workbook */
var wbnsregex = /<\w+:workbook/;
function parse_wb_xml(data, opts) {
    var wb = { AppVersion:{}, WBProps:{}, WBView:[], Sheets:[], CalcPr:{}, xmlns: "" };
    var pass = false, xmlns = "xmlns";
    data.match(tagregex).forEach(function xml_wb(x) {
        var y = parsexmltag(x);
        switch(strip_ns(y[0])) {
            case '<?xml': break;

            /* 18.2.27 workbook CT_Workbook 1 */
            case '<workbook':
                if(x.match(wbnsregex)) xmlns = "xmlns" + x.match(/<(\w+):/)[1];
                wb.xmlns = y[xmlns];
                break;
            case '</workbook>': break;

            /* 18.2.13 fileVersion CT_FileVersion ? */
            case '<fileVersion': delete y[0]; wb.AppVersion = y; break;
            case '<fileVersion/>': break;

            /* 18.2.12 fileSharing CT_FileSharing ? */
            case '<fileSharing': case '<fileSharing/>': break;

            /* 18.2.28 workbookPr CT_WorkbookPr ? */
            case '<workbookPr': delete y[0]; wb.WBProps = y; break;
            case '<workbookPr/>': delete y[0]; wb.WBProps = y; break;

            /* 18.2.29 workbookProtection CT_WorkbookProtection ? */
            case '<workbookProtection': break;
            case '<workbookProtection/>': break;

            /* 18.2.1  bookViews CT_BookViews ? */
            case '<bookViews>': case '</bookViews>': break;
            /* 18.2.30   workbookView CT_BookView + */
            case '<workbookView': delete y[0]; wb.WBView.push(y); break;

            /* 18.2.20 sheets CT_Sheets 1 */
            case '<sheets>': case '</sheets>': break; // aggregate sheet
            /* 18.2.19   sheet CT_Sheet + */
            case '<sheet': delete y[0]; y.name = utf8read(y.name); wb.Sheets.push(y); break;

            /* 18.2.15 functionGroups CT_FunctionGroups ? */
            case '<functionGroups': case '<functionGroups/>': break;
            /* 18.2.14   functionGroup CT_FunctionGroup + */
            case '<functionGroup': break;

            /* 18.2.9  externalReferences CT_ExternalReferences ? */
            case '<externalReferences': case '</externalReferences>': case '<externalReferences>': break;
            /* 18.2.8    externalReference CT_ExternalReference + */
            case '<externalReference': break;

            /* 18.2.6  definedNames CT_DefinedNames ? */
            case '<definedNames/>': break;
            case '<definedNames>': case '<definedNames': pass=true; break;
            case '</definedNames>': pass=false; break;
            /* 18.2.5    definedName CT_DefinedName + */
            case '<definedName': case '<definedName/>': case '</definedName>': break;

            /* 18.2.2  calcPr CT_CalcPr ? */
            case '<calcPr': delete y[0]; wb.CalcPr = y; break;
            case '<calcPr/>': delete y[0]; wb.CalcPr = y; break;

            /* 18.2.16 oleSize CT_OleSize ? (ref required) */
            case '<oleSize': break;

            /* 18.2.4  customWorkbookViews CT_CustomWorkbookViews ? */
            case '<customWorkbookViews>': case '</customWorkbookViews>': case '<customWorkbookViews': break;
            /* 18.2.3    customWorkbookView CT_CustomWorkbookView + */
            case '<customWorkbookView': case '</customWorkbookView>': break;

            /* 18.2.18 pivotCaches CT_PivotCaches ? */
            case '<pivotCaches>': case '</pivotCaches>': case '<pivotCaches': break;
            /* 18.2.17 pivotCache CT_PivotCache ? */
            case '<pivotCache': break;

            /* 18.2.21 smartTagPr CT_SmartTagPr ? */
            case '<smartTagPr': case '<smartTagPr/>': break;

            /* 18.2.23 smartTagTypes CT_SmartTagTypes ? */
            case '<smartTagTypes': case '<smartTagTypes>': case '</smartTagTypes>': break;
            /* 18.2.22   smartTagType CT_SmartTagType ? */
            case '<smartTagType': break;

            /* 18.2.24 webPublishing CT_WebPublishing ? */
            case '<webPublishing': case '<webPublishing/>': break;

            /* 18.2.11 fileRecoveryPr CT_FileRecoveryPr ? */
            case '<fileRecoveryPr': case '<fileRecoveryPr/>': break;

            /* 18.2.26 webPublishObjects CT_WebPublishObjects ? */
            case '<webPublishObjects>': case '<webPublishObjects': case '</webPublishObjects>': break;
            /* 18.2.25 webPublishObject CT_WebPublishObject ? */
            case '<webPublishObject': break;

            /* 18.2.10 extLst CT_ExtensionList ? */
            case '<extLst>': case '</extLst>': case '<extLst/>': break;
            /* 18.2.7    ext CT_Extension + */
            case '<ext': pass=true; break; //TODO: check with versions of excel
            case '</ext>': pass=false; break;

            /* Others */
            case '<ArchID': break;
            case '<AlternateContent': pass=true; break;
            case '</AlternateContent>': pass=false; break;

            default: if(!pass && opts.WTF) throw 'unrecognized ' + y[0] + ' in workbook';
        }
    });
    if(XMLNS.main.indexOf(wb.xmlns) === -1) throw new Error("Unknown Namespace: " + wb.xmlns);

    parse_wb_defaults(wb);

    return wb;
}

var WB_XML_ROOT = writextag('workbook', null, {
    'xmlns': XMLNS.main[0],
    //'xmlns:mx': XMLNS.mx,
    //'xmlns:s': XMLNS.main[0],
    'xmlns:r': XMLNS.r
});

function safe1904(wb) {
    /* TODO: store date1904 somewhere else */
    try { return parsexmlbool(wb.Workbook.WBProps.date1904) ? "true" : "false"; } catch(e) { return "false"; }
}

function write_wb_xml(wb, opts) {
    var o = [XML_HEADER];
    o[o.length] = WB_XML_ROOT;
    o[o.length] = (writextag('workbookPr', null, {date1904:safe1904(wb)}));
    o[o.length] = "<sheets>";
    for(var i = 0; i != wb.SheetNames.length; ++i)
        o[o.length] = (writextag('sheet',null,{name:wb.SheetNames[i].substr(0,31), sheetId:""+(i+1), "r:id":"rId"+(i+1)}));
    o[o.length] = "</sheets>";
    if(o.length>2){ o[o.length] = '</workbook>'; o[1]=o[1].replace("/>",">"); }
    return o.join("");
}
/* [MS-XLSB] 2.4.301 BrtBundleSh */
function parse_BrtBundleSh(data, length) {
    var z = {};
    z.hsState = data.read_shift(4); //ST_SheetState
    z.iTabID = data.read_shift(4);
    z.strRelID = parse_RelID(data,length-8);
    z.name = parse_XLWideString(data);
    return z;
}
function write_BrtBundleSh(data, o) {
    if(!o) o = new_buf(127);
    o.write_shift(4, data.hsState);
    o.write_shift(4, data.iTabID);
    write_RelID(data.strRelID, o);
    write_XLWideString(data.name.substr(0,31), o);
    return o;
}

/* [MS-XLSB] 2.4.807 BrtWbProp */
function parse_BrtWbProp(data, length) {
    data.read_shift(4);
    var dwThemeVersion = data.read_shift(4);
    var strName = (length > 8) ? parse_XLWideString(data) : "";
    return [dwThemeVersion, strName];
}
function write_BrtWbProp(data, o) {
    if(!o) o = new_buf(8);
    o.write_shift(4, 0);
    o.write_shift(4, 0);
    return o;
}

function parse_BrtFRTArchID$(data, length) {
    var o = {};
    data.read_shift(4);
    o.ArchID = data.read_shift(4);
    data.l += length - 8;
    return o;
}

/* [MS-XLSB] 2.1.7.60 Workbook */
function parse_wb_bin(data, opts) {
    var wb = { AppVersion:{}, WBProps:{}, WBView:[], Sheets:[], CalcPr:{}, xmlns: "" };
    var pass = false, z;

    recordhopper(data, function hopper_wb(val, R) {
        switch(R.n) {
            case 'BrtBundleSh': wb.Sheets.push(val); break;

            case 'BrtBeginBook': break;
            case 'BrtFileVersion': break;
            case 'BrtWbProp': break;
            case 'BrtACBegin': break;
            case 'BrtAbsPath15': break;
            case 'BrtACEnd': break;
            case 'BrtWbFactoid': break;
            /*case 'BrtBookProtectionIso': break;*/
            case 'BrtBookProtection': break;
            case 'BrtBeginBookViews': break;
            case 'BrtBookView': break;
            case 'BrtEndBookViews': break;
            case 'BrtBeginBundleShs': break;
            case 'BrtEndBundleShs': break;
            case 'BrtBeginFnGroup': break;
            case 'BrtEndFnGroup': break;
            case 'BrtBeginExternals': break;
            case 'BrtSupSelf': break;
            case 'BrtSupBookSrc': break;
            case 'BrtExternSheet': break;
            case 'BrtEndExternals': break;
            case 'BrtName': break;
            case 'BrtCalcProp': break;
            case 'BrtUserBookView': break;
            case 'BrtBeginPivotCacheIDs': break;
            case 'BrtBeginPivotCacheID': break;
            case 'BrtEndPivotCacheID': break;
            case 'BrtEndPivotCacheIDs': break;
            case 'BrtWebOpt': break;
            case 'BrtFileRecover': break;
            case 'BrtFileSharing': break;
            /*case 'BrtBeginWebPubItems': break;
            case 'BrtBeginWebPubItem': break;
            case 'BrtEndWebPubItem': break;
            case 'BrtEndWebPubItems': break;*/

            /* Smart Tags */
            case 'BrtBeginSmartTagTypes': break;
            case 'BrtSmartTagType': break;
            case 'BrtEndSmartTagTypes': break;

            case 'BrtFRTBegin': pass = true; break;
            case 'BrtFRTArchID$': break;
            case 'BrtWorkBookPr15': break;
            case 'BrtFRTEnd': pass = false; break;
            case 'BrtEndBook': break;
            default: if(!pass || opts.WTF) throw new Error("Unexpected record " + R.n);
        }
    });

    parse_wb_defaults(wb);

    return wb;
}

/* [MS-XLSB] 2.1.7.60 Workbook */
function write_BUNDLESHS(ba, wb, opts) {
    write_record(ba, "BrtBeginBundleShs");
    for(var idx = 0; idx != wb.SheetNames.length; ++idx) {
        var d = { hsState: 0, iTabID: idx+1, strRelID: 'rId' + (idx+1), name: wb.SheetNames[idx] };
        write_record(ba, "BrtBundleSh", write_BrtBundleSh(d));
    }
    write_record(ba, "BrtEndBundleShs");
}

/* [MS-XLSB] 2.4.643 BrtFileVersion */
function write_BrtFileVersion(data, o) {
    if(!o) o = new_buf(127);
    for(var i = 0; i != 4; ++i) o.write_shift(4, 0);
    write_XLWideString("SheetJS", o);
    write_XLWideString(XLSX.version, o);
    write_XLWideString(XLSX.version, o);
    write_XLWideString("7262", o);
    o.length = o.l;
    return o;
}

/* [MS-XLSB] 2.1.7.60 Workbook */
function write_BOOKVIEWS(ba, wb, opts) {
    write_record(ba, "BrtBeginBookViews");
    /* 1*(BrtBookView *FRT) */
    write_record(ba, "BrtEndBookViews");
}

/* [MS-XLSB] 2.4.302 BrtCalcProp */
function write_BrtCalcProp(data, o) {
    if(!o) o = new_buf(26);
    o.write_shift(4,0); /* force recalc */
    o.write_shift(4,1);
    o.write_shift(4,0);
    write_Xnum(0, o);
    o.write_shift(-4, 1023);
    o.write_shift(1, 0x33);
    o.write_shift(1, 0x00);
    return o;
}

function write_BrtFileRecover(data, o) {
    if(!o) o = new_buf(1);
    o.write_shift(1,0);
    return o;
}

/* [MS-XLSB] 2.1.7.60 Workbook */
function write_wb_bin(wb, opts) {
    var ba = buf_array();
    write_record(ba, "BrtBeginBook");
    write_record(ba, "BrtFileVersion", write_BrtFileVersion());
    /* [[BrtFileSharingIso] BrtFileSharing] */
    write_record(ba, "BrtWbProp", write_BrtWbProp());
    /* [ACABSPATH] */
    /* [[BrtBookProtectionIso] BrtBookProtection] */
    write_BOOKVIEWS(ba, wb, opts);
    write_BUNDLESHS(ba, wb, opts);
    /* [FNGROUP] */
    /* [EXTERNALS] */
    /* *BrtName */
    write_record(ba, "BrtCalcProp", write_BrtCalcProp());
    /* [BrtOleSize] */
    /* *(BrtUserBookView *FRT) */
    /* [PIVOTCACHEIDS] */
    /* [BrtWbFactoid] */
    /* [SMARTTAGTYPES] */
    /* [BrtWebOpt] */
    write_record(ba, "BrtFileRecover", write_BrtFileRecover());
    /* [WEBPUBITEMS] */
    /* [CRERRS] */
    /* FRTWORKBOOK */
    write_record(ba, "BrtEndBook");

    return ba.end();
}
function parse_wb(data, name, opts) {
    return (name.substr(-4)===".bin" ? parse_wb_bin : parse_wb_xml)(data, opts);
}

function parse_ws(data, name, opts, rels) {
    return (name.substr(-4)===".bin" ? parse_ws_bin : parse_ws_xml)(data, opts, rels);
}

function parse_sty(data, name, opts) {
    return (name.substr(-4)===".bin" ? parse_sty_bin : parse_sty_xml)(data, opts);
}

function parse_theme(data, name, opts) {
    return parse_theme_xml(data, opts);
}

function parse_sst(data, name, opts) {
    return (name.substr(-4)===".bin" ? parse_sst_bin : parse_sst_xml)(data, opts);
}

function parse_cmnt(data, name, opts) {
    return (name.substr(-4)===".bin" ? parse_comments_bin : parse_comments_xml)(data, opts);
}

function parse_cc(data, name, opts) {
    return (name.substr(-4)===".bin" ? parse_cc_bin : parse_cc_xml)(data, opts);
}

function write_wb(wb, name, opts) {
    return (name.substr(-4)===".bin" ? write_wb_bin : write_wb_xml)(wb, opts);
}

function write_ws(data, name, opts, wb) {
    return (name.substr(-4)===".bin" ? write_ws_bin : write_ws_xml)(data, opts, wb);
}

function write_sty(data, name, opts) {
    return (name.substr(-4)===".bin" ? write_sty_bin : write_sty_xml)(data, opts);
}

function write_sst(data, name, opts) {
    return (name.substr(-4)===".bin" ? write_sst_bin : write_sst_xml)(data, opts);
}
/*
function write_cmnt(data, name, opts) {
    return (name.substr(-4)===".bin" ? write_comments_bin : write_comments_xml)(data, opts);
}

function write_cc(data, name, opts) {
    return (name.substr(-4)===".bin" ? write_cc_bin : write_cc_xml)(data, opts);
}
*/
var attregexg2=/([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g;
var attregex2=/([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
var _chr = function(c) { return String.fromCharCode(c); };
function xlml_parsexmltag(tag, skip_root) {
    var words = tag.split(/\s+/);
    var z = []; if(!skip_root) z[0] = words[0];
    if(words.length === 1) return z;
    var m = tag.match(attregexg2), y, j, w, i;
    if(m) for(i = 0; i != m.length; ++i) {
        y = m[i].match(attregex2);
        if((j=y[1].indexOf(":")) === -1) z[y[1]] = y[2].substr(1,y[2].length-2);
        else {
            if(y[1].substr(0,6) === "xmlns:") w = "xmlns"+y[1].substr(6);
            else w = y[1].substr(j+1);
            z[w] = y[2].substr(1,y[2].length-2);
        }
    }
    return z;
}
function xlml_parsexmltagobj(tag) {
    var words = tag.split(/\s+/);
    var z = {};
    if(words.length === 1) return z;
    var m = tag.match(attregexg2), y, j, w, i;
    if(m) for(i = 0; i != m.length; ++i) {
        y = m[i].match(attregex2);
        if((j=y[1].indexOf(":")) === -1) z[y[1]] = y[2].substr(1,y[2].length-2);
        else {
            if(y[1].substr(0,6) === "xmlns:") w = "xmlns"+y[1].substr(6);
            else w = y[1].substr(j+1);
            z[w] = y[2].substr(1,y[2].length-2);
        }
    }
    return z;
}

// ----

function xlml_format(format, value) {
    var fmt = XLMLFormatMap[format] || unescapexml(format);
    if(fmt === "General") return SSF._general(value);
    return SSF.format(fmt, value);
}

function xlml_set_custprop(Custprops, Rn, cp, val) {
    switch((cp[0].match(/dt:dt="([\w.]+)"/)||["",""])[1]) {
        case "boolean": val = parsexmlbool(val); break;
        case "i2": case "int": val = parseInt(val, 10); break;
        case "r4": case "float": val = parseFloat(val); break;
        case "date": case "dateTime.tz": val = new Date(val); break;
        case "i8": case "string": case "fixed": case "uuid": case "bin.base64": break;
        default: throw "bad custprop:" + cp[0];
    }
    Custprops[unescapexml(Rn[3])] = val;
}

function safe_format_xlml(cell, nf, o) {
    try {
        if(cell.t === 'e') { cell.w = cell.w || BErr[cell.v]; }
        else if(nf === "General") {
            if(cell.t === 'n') {
                if((cell.v|0) === cell.v) cell.w = SSF._general_int(cell.v);
                else cell.w = SSF._general_num(cell.v);
            }
            else cell.w = SSF._general(cell.v);
        }
        else cell.w = xlml_format(nf||"General", cell.v);
        if(o.cellNF) cell.z = XLMLFormatMap[nf]||nf||"General";
    } catch(e) { if(o.WTF) throw e; }
}

function process_style_xlml(styles, stag, opts) {
    if(opts.cellStyles) {
        if(stag.Interior) {
            var I = stag.Interior;
            if(I.Pattern) I.patternType = XLMLPatternTypeMap[I.Pattern] || I.Pattern;
        }
    }
    styles[stag.ID] = stag;
}

/* TODO: there must exist some form of OSP-blessed spec */
function parse_xlml_data(xml, ss, data, cell, base, styles, csty, row, o) {
    var nf = "General", sid = cell.StyleID, S = {}; o = o || {};
    var interiors = [];
    if(sid === undefined && row) sid = row.StyleID;
    if(sid === undefined && csty) sid = csty.StyleID;
    while(styles[sid] !== undefined) {
        if(styles[sid].nf) nf = styles[sid].nf;
        if(styles[sid].Interior) interiors.push(styles[sid].Interior);
        if(!styles[sid].Parent) break;
        sid = styles[sid].Parent;
    }
    switch(data.Type) {
        case 'Boolean':
            cell.t = 'b';
            cell.v = parsexmlbool(xml);
            break;
        case 'String':
            cell.t = 's'; cell.r = xlml_fixstr(unescapexml(xml));
            cell.v = xml.indexOf("<") > -1 ? ss : cell.r;
            break;
        case 'DateTime':
            cell.v = (Date.parse(xml) - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
            if(cell.v !== cell.v) cell.v = unescapexml(xml);
            else if(cell.v >= 1 && cell.v<60) cell.v = cell.v -1;
            if(!nf || nf == "General") nf = "yyyy-mm-dd";
            /* falls through */
        case 'Number':
            if(cell.v === undefined) cell.v=+xml;
            if(!cell.t) cell.t = 'n';
            break;
        case 'Error': cell.t = 'e'; cell.v = RBErr[xml]; cell.w = xml; break;
        default: cell.t = 's'; cell.v = xlml_fixstr(ss); break;
    }
    safe_format_xlml(cell, nf, o);
    if(o.cellFormula != null && cell.Formula) {
        cell.f = rc_to_a1(unescapexml(cell.Formula), base);
        cell.Formula = undefined;
    }
    if(o.cellStyles) {
        interiors.forEach(function(x) {
            if(!S.patternType && x.patternType) S.patternType = x.patternType;
        });
        cell.s = S;
    }
    cell.ixfe = cell.StyleID !== undefined ? cell.StyleID : 'Default';
}

function xlml_clean_comment(comment) {
    comment.t = comment.v;
    comment.v = comment.w = comment.ixfe = undefined;
}

function xlml_normalize(d) {
    if(has_buf && Buffer.isBuffer(d)) return d.toString('utf8');
    if(typeof d === 'string') return d;
    throw "badf";
}

/* TODO: Everything */
var xlmlregex = /<(\/?)([a-z0-9]*:|)(\w+)[^>]*>/mg;
function parse_xlml_xml(d, opts) {
    var str = xlml_normalize(d);
    var Rn;
    var state = [], tmp;
    var sheets = {}, sheetnames = [], cursheet = {}, sheetname = "";
    var table = {}, cell = {}, row = {}, dtag, didx;
    var c = 0, r = 0;
    var refguess = {s: {r:1000000, c:1000000}, e: {r:0, c:0} };
    var styles = {}, stag = {};
    var ss = "", fidx = 0;
    var mergecells = [];
    var Props = {}, Custprops = {}, pidx = 0, cp = {};
    var comments = [], comment = {};
    var cstys = [], csty;
    xlmlregex.lastIndex = 0;
    while((Rn = xlmlregex.exec(str))) switch(Rn[3]) {
        case 'Data':
            if(state[state.length-1][1]) break;
            if(Rn[1]==='/') parse_xlml_data(str.slice(didx, Rn.index), ss, dtag, state[state.length-1][0]=="Comment"?comment:cell, {c:c,r:r}, styles, cstys[c], row, opts);
            else { ss = ""; dtag = xlml_parsexmltag(Rn[0]); didx = Rn.index + Rn[0].length; }
            break;
        case 'Cell':
            if(Rn[1]==='/'){
                if(comments.length > 0) cell.c = comments;
                if((!opts.sheetRows || opts.sheetRows > r) && cell.v !== undefined) cursheet[encode_col(c) + encode_row(r)] = cell;
                if(cell.HRef) {
                    cell.l = {Target:cell.HRef, tooltip:cell.HRefScreenTip};
                    cell.HRef = cell.HRefScreenTip = undefined;
                }
                if(cell.MergeAcross || cell.MergeDown) {
                    var cc = c + (parseInt(cell.MergeAcross,10)|0);
                    var rr = r + (parseInt(cell.MergeDown,10)|0);
                    mergecells.push({s:{c:c,r:r},e:{c:cc,r:rr}});
                }
                ++c;
                if(cell.MergeAcross) c += +cell.MergeAcross;
            } else {
                cell = xlml_parsexmltagobj(Rn[0]);
                if(cell.Index) c = +cell.Index - 1;
                if(c < refguess.s.c) refguess.s.c = c;
                if(c > refguess.e.c) refguess.e.c = c;
                if(Rn[0].substr(-2) === "/>") ++c;
                comments = [];
            }
            break;
        case 'Row':
            if(Rn[1]==='/' || Rn[0].substr(-2) === "/>") {
                if(r < refguess.s.r) refguess.s.r = r;
                if(r > refguess.e.r) refguess.e.r = r;
                if(Rn[0].substr(-2) === "/>") {
                    row = xlml_parsexmltag(Rn[0]);
                    if(row.Index) r = +row.Index - 1;
                }
                c = 0; ++r;
            } else {
                row = xlml_parsexmltag(Rn[0]);
                if(row.Index) r = +row.Index - 1;
            }
            break;
        case 'Worksheet': /* TODO: read range from FullRows/FullColumns */
            if(Rn[1]==='/'){
                if((tmp=state.pop())[0]!==Rn[3]) throw "Bad state: "+tmp;
                sheetnames.push(sheetname);
                if(refguess.s.r <= refguess.e.r && refguess.s.c <= refguess.e.c) cursheet["!ref"] = encode_range(refguess);
                if(mergecells.length) cursheet["!merges"] = mergecells;
                sheets[sheetname] = cursheet;
            } else {
                refguess = {s: {r:1000000, c:1000000}, e: {r:0, c:0} };
                r = c = 0;
                state.push([Rn[3], false]);
                tmp = xlml_parsexmltag(Rn[0]);
                sheetname = tmp.Name;
                cursheet = {};
                mergecells = [];
            }
            break;
        case 'Table':
            if(Rn[1]==='/'){if((tmp=state.pop())[0]!==Rn[3]) throw "Bad state: "+tmp;}
            else if(Rn[0].slice(-2) == "/>") break;
            else {
                table = xlml_parsexmltag(Rn[0]);
                state.push([Rn[3], false]);
                cstys = [];
            }
            break;

        case 'Style':
            if(Rn[1]==='/') process_style_xlml(styles, stag, opts);
            else stag = xlml_parsexmltag(Rn[0]);
            break;

        case 'NumberFormat':
            stag.nf = xlml_parsexmltag(Rn[0]).Format || "General";
            break;

        case 'Column':
            if(state[state.length-1][0] !== 'Table') break;
            csty = xlml_parsexmltag(Rn[0]);
            cstys[(csty.Index-1||cstys.length)] = csty;
            for(var i = 0; i < +csty.Span; ++i) cstys[cstys.length] = csty;
            break;

        case 'NamedRange': break;
        case 'NamedCell': break;
        case 'B': break;
        case 'I': break;
        case 'U': break;
        case 'S': break;
        case 'Sub': break;
        case 'Sup': break;
        case 'Span': break;
        case 'Border': break;
        case 'Alignment': break;
        case 'Borders': break;
        case 'Font':
            if(Rn[0].substr(-2) === "/>") break;
            else if(Rn[1]==="/") ss += str.slice(fidx, Rn.index);
            else fidx = Rn.index + Rn[0].length;
            break;
        case 'Interior':
            if(!opts.cellStyles) break;
            stag.Interior = xlml_parsexmltag(Rn[0]);
            break;
        case 'Protection': break;

        case 'Author':
        case 'Title':
        case 'Description':
        case 'Created':
        case 'Keywords':
        case 'Subject':
        case 'Category':
        case 'Company':
        case 'LastAuthor':
        case 'LastSaved':
        case 'LastPrinted':
        case 'Version':
        case 'Revision':
        case 'TotalTime':
        case 'HyperlinkBase':
        case 'Manager':
            if(Rn[0].substr(-2) === "/>") break;
            else if(Rn[1]==="/") xlml_set_prop(Props, Rn[3], str.slice(pidx, Rn.index));
            else pidx = Rn.index + Rn[0].length;
            break;
        case 'Paragraphs': break;

        case 'Styles':
        case 'Workbook':
            if(Rn[1]==='/'){if((tmp=state.pop())[0]!==Rn[3]) throw "Bad state: "+tmp;}
            else state.push([Rn[3], false]);
            break;

        case 'Comment':
            if(Rn[1]==='/'){
                if((tmp=state.pop())[0]!==Rn[3]) throw "Bad state: "+tmp;
                xlml_clean_comment(comment);
                comments.push(comment);
            } else {
                state.push([Rn[3], false]);
                tmp = xlml_parsexmltag(Rn[0]);
                comment = {a:tmp.Author};
            }
            break;

        case 'Name': break;

        case 'ComponentOptions':
        case 'DocumentProperties':
        case 'CustomDocumentProperties':
        case 'OfficeDocumentSettings':
        case 'PivotTable':
        case 'PivotCache':
        case 'Names':
        case 'MapInfo':
        case 'PageBreaks':
        case 'QueryTable':
        case 'DataValidation':
        case 'AutoFilter':
        case 'Sorting':
        case 'Schema':
        case 'data':
        case 'ConditionalFormatting':
        case 'SmartTagType':
        case 'SmartTags':
        case 'ExcelWorkbook':
        case 'WorkbookOptions':
        case 'WorksheetOptions':
            if(Rn[1]==='/'){if((tmp=state.pop())[0]!==Rn[3]) throw "Bad state: "+tmp;}
            else if(Rn[0].charAt(Rn[0].length-2) !== '/') state.push([Rn[3], true]);
            break;

        default:
            var seen = true;
            switch(state[state.length-1][0]) {
                /* OfficeDocumentSettings */
                case 'OfficeDocumentSettings': switch(Rn[3]) {
                    case 'AllowPNG': break;
                    case 'RemovePersonalInformation': break;
                    case 'DownloadComponents': break;
                    case 'LocationOfComponents': break;
                    case 'Colors': break;
                    case 'Color': break;
                    case 'Index': break;
                    case 'RGB': break;
                    case 'PixelsPerInch': break;
                    case 'TargetScreenSize': break;
                    case 'ReadOnlyRecommended': break;
                    default: seen = false;
                } break;

                /* ComponentOptions */
                case 'ComponentOptions': switch(Rn[3]) {
                    case 'Toolbar': break;
                    case 'HideOfficeLogo': break;
                    case 'SpreadsheetAutoFit': break;
                    case 'Label': break;
                    case 'Caption': break;
                    case 'MaxHeight': break;
                    case 'MaxWidth': break;
                    case 'NextSheetNumber': break;
                    default: seen = false;
                } break;

                /* ExcelWorkbook */
                case 'ExcelWorkbook': switch(Rn[3]) {
                    case 'WindowHeight': break;
                    case 'WindowWidth': break;
                    case 'WindowTopX': break;
                    case 'WindowTopY': break;
                    case 'TabRatio': break;
                    case 'ProtectStructure': break;
                    case 'ProtectWindows': break;
                    case 'ActiveSheet': break;
                    case 'DisplayInkNotes': break;
                    case 'FirstVisibleSheet': break;
                    case 'SupBook': break;
                    case 'SheetName': break;
                    case 'SheetIndex': break;
                    case 'SheetIndexFirst': break;
                    case 'SheetIndexLast': break;
                    case 'Dll': break;
                    case 'AcceptLabelsInFormulas': break;
                    case 'DoNotSaveLinkValues': break;
                    case 'Date1904': break;
                    case 'Iteration': break;
                    case 'MaxIterations': break;
                    case 'MaxChange': break;
                    case 'Path': break;
                    case 'Xct': break;
                    case 'Count': break;
                    case 'SelectedSheets': break;
                    case 'Calculation': break;
                    case 'Uncalced': break;
                    case 'StartupPrompt': break;
                    case 'Crn': break;
                    case 'ExternName': break;
                    case 'Formula': break;
                    case 'ColFirst': break;
                    case 'ColLast': break;
                    case 'WantAdvise': break;
                    case 'Boolean': break;
                    case 'Error': break;
                    case 'Text': break;
                    case 'OLE': break;
                    case 'NoAutoRecover': break;
                    case 'PublishObjects': break;
                    case 'DoNotCalculateBeforeSave': break;
                    case 'Number': break;
                    case 'RefModeR1C1': break;
                    case 'EmbedSaveSmartTags': break;
                    default: seen = false;
                } break;

                /* WorkbookOptions */
                case 'WorkbookOptions': switch(Rn[3]) {
                    case 'OWCVersion': break;
                    case 'Height': break;
                    case 'Width': break;
                    default: seen = false;
                } break;

                /* WorksheetOptions */
                case 'WorksheetOptions': switch(Rn[3]) {
                    case 'Unsynced': break;
                    case 'Visible': break;
                    case 'Print': break;
                    case 'Panes': break;
                    case 'Scale': break;
                    case 'Pane': break;
                    case 'Number': break;
                    case 'Layout': break;
                    case 'Header': break;
                    case 'Footer': break;
                    case 'PageSetup': break;
                    case 'PageMargins': break;
                    case 'Selected': break;
                    case 'ProtectObjects': break;
                    case 'EnableSelection': break;
                    case 'ProtectScenarios': break;
                    case 'ValidPrinterInfo': break;
                    case 'HorizontalResolution': break;
                    case 'VerticalResolution': break;
                    case 'NumberofCopies': break;
                    case 'ActiveRow': break;
                    case 'ActiveCol': break;
                    case 'ActivePane': break;
                    case 'TopRowVisible': break;
                    case 'TopRowBottomPane': break;
                    case 'LeftColumnVisible': break;
                    case 'LeftColumnRightPane': break;
                    case 'FitToPage': break;
                    case 'RangeSelection': break;
                    case 'PaperSizeIndex': break;
                    case 'PageLayoutZoom': break;
                    case 'PageBreakZoom': break;
                    case 'FilterOn': break;
                    case 'DoNotDisplayGridlines': break;
                    case 'SplitHorizontal': break;
                    case 'SplitVertical': break;
                    case 'FreezePanes': break;
                    case 'FrozenNoSplit': break;
                    case 'FitWidth': break;
                    case 'FitHeight': break;
                    case 'CommentsLayout': break;
                    case 'Zoom': break;
                    case 'LeftToRight': break;
                    case 'Gridlines': break;
                    case 'AllowSort': break;
                    case 'AllowFilter': break;
                    case 'AllowInsertRows': break;
                    case 'AllowDeleteRows': break;
                    case 'AllowInsertCols': break;
                    case 'AllowDeleteCols': break;
                    case 'AllowInsertHyperlinks': break;
                    case 'AllowFormatCells': break;
                    case 'AllowSizeCols': break;
                    case 'AllowSizeRows': break;
                    case 'NoSummaryRowsBelowDetail': break;
                    case 'TabColorIndex': break;
                    case 'DoNotDisplayHeadings': break;
                    case 'ShowPageLayoutZoom': break;
                    case 'NoSummaryColumnsRightDetail': break;
                    case 'BlackAndWhite': break;
                    case 'DoNotDisplayZeros': break;
                    case 'DisplayPageBreak': break;
                    case 'RowColHeadings': break;
                    case 'DoNotDisplayOutline': break;
                    case 'NoOrientation': break;
                    case 'AllowUsePivotTables': break;
                    case 'ZeroHeight': break;
                    case 'ViewableRange': break;
                    case 'Selection': break;
                    case 'ProtectContents': break;
                    default: seen = false;
                } break;

                /* PivotTable */
                case 'PivotTable': case 'PivotCache': switch(Rn[3]) {
                    case 'ImmediateItemsOnDrop': break;
                    case 'ShowPageMultipleItemLabel': break;
                    case 'CompactRowIndent': break;
                    case 'Location': break;
                    case 'PivotField': break;
                    case 'Orientation': break;
                    case 'LayoutForm': break;
                    case 'LayoutSubtotalLocation': break;
                    case 'LayoutCompactRow': break;
                    case 'Position': break;
                    case 'PivotItem': break;
                    case 'DataType': break;
                    case 'DataField': break;
                    case 'SourceName': break;
                    case 'ParentField': break;
                    case 'PTLineItems': break;
                    case 'PTLineItem': break;
                    case 'CountOfSameItems': break;
                    case 'Item': break;
                    case 'ItemType': break;
                    case 'PTSource': break;
                    case 'CacheIndex': break;
                    case 'ConsolidationReference': break;
                    case 'FileName': break;
                    case 'Reference': break;
                    case 'NoColumnGrand': break;
                    case 'NoRowGrand': break;
                    case 'BlankLineAfterItems': break;
                    case 'Hidden': break;
                    case 'Subtotal': break;
                    case 'BaseField': break;
                    case 'MapChildItems': break;
                    case 'Function': break;
                    case 'RefreshOnFileOpen': break;
                    case 'PrintSetTitles': break;
                    case 'MergeLabels': break;
                    case 'DefaultVersion': break;
                    case 'RefreshName': break;
                    case 'RefreshDate': break;
                    case 'RefreshDateCopy': break;
                    case 'VersionLastRefresh': break;
                    case 'VersionLastUpdate': break;
                    case 'VersionUpdateableMin': break;
                    case 'VersionRefreshableMin': break;
                    case 'Calculation': break;
                    default: seen = false;
                } break;

                /* PageBreaks */
                case 'PageBreaks': switch(Rn[3]) {
                    case 'ColBreaks': break;
                    case 'ColBreak': break;
                    case 'RowBreaks': break;
                    case 'RowBreak': break;
                    case 'ColStart': break;
                    case 'ColEnd': break;
                    case 'RowEnd': break;
                    default: seen = false;
                } break;

                /* AutoFilter */
                case 'AutoFilter': switch(Rn[3]) {
                    case 'AutoFilterColumn': break;
                    case 'AutoFilterCondition': break;
                    case 'AutoFilterAnd': break;
                    case 'AutoFilterOr': break;
                    default: seen = false;
                } break;

                /* QueryTable */
                case 'QueryTable': switch(Rn[3]) {
                    case 'Id': break;
                    case 'AutoFormatFont': break;
                    case 'AutoFormatPattern': break;
                    case 'QuerySource': break;
                    case 'QueryType': break;
                    case 'EnableRedirections': break;
                    case 'RefreshedInXl9': break;
                    case 'URLString': break;
                    case 'HTMLTables': break;
                    case 'Connection': break;
                    case 'CommandText': break;
                    case 'RefreshInfo': break;
                    case 'NoTitles': break;
                    case 'NextId': break;
                    case 'ColumnInfo': break;
                    case 'OverwriteCells': break;
                    case 'DoNotPromptForFile': break;
                    case 'TextWizardSettings': break;
                    case 'Source': break;
                    case 'Number': break;
                    case 'Decimal': break;
                    case 'ThousandSeparator': break;
                    case 'TrailingMinusNumbers': break;
                    case 'FormatSettings': break;
                    case 'FieldType': break;
                    case 'Delimiters': break;
                    case 'Tab': break;
                    case 'Comma': break;
                    case 'AutoFormatName': break;
                    case 'VersionLastEdit': break;
                    case 'VersionLastRefresh': break;
                    default: seen = false;
                } break;

                /* Sorting */
                case 'Sorting':
                /* ConditionalFormatting */
                case 'ConditionalFormatting':
                /* DataValidation */
                case 'DataValidation': switch(Rn[3]) {
                    case 'Range': break;
                    case 'Type': break;
                    case 'Min': break;
                    case 'Max': break;
                    case 'Sort': break;
                    case 'Descending': break;
                    case 'Order': break;
                    case 'CaseSensitive': break;
                    case 'Value': break;
                    case 'ErrorStyle': break;
                    case 'ErrorMessage': break;
                    case 'ErrorTitle': break;
                    case 'CellRangeList': break;
                    case 'InputMessage': break;
                    case 'InputTitle': break;
                    case 'ComboHide': break;
                    case 'InputHide': break;
                    case 'Condition': break;
                    case 'Qualifier': break;
                    case 'UseBlank': break;
                    case 'Value1': break;
                    case 'Value2': break;
                    case 'Format': break;
                    default: seen = false;
                } break;

                /* MapInfo (schema) */
                case 'MapInfo': case 'Schema': case 'data': switch(Rn[3]) {
                    case 'Map': break;
                    case 'Entry': break;
                    case 'Range': break;
                    case 'XPath': break;
                    case 'Field': break;
                    case 'XSDType': break;
                    case 'FilterOn': break;
                    case 'Aggregate': break;
                    case 'ElementType': break;
                    case 'AttributeType': break;
                /* These are from xsd (XML Schema Definition) */
                    case 'schema':
                    case 'element':
                    case 'complexType':
                    case 'datatype':
                    case 'all':
                    case 'attribute':
                    case 'extends': break;

                    case 'row': break;
                    default: seen = false;
                } break;

                /* SmartTags (can be anything) */
                case 'SmartTags': break;

                default: seen = false; break;
            }
            if(seen) break;
            /* CustomDocumentProperties */
            if(!state[state.length-1][1]) throw 'Unrecognized tag: ' + Rn[3] + "|" + state.join("|");
            if(state[state.length-1][0]==='CustomDocumentProperties') {
                if(Rn[0].substr(-2) === "/>") break;
                else if(Rn[1]==="/") xlml_set_custprop(Custprops, Rn, cp, str.slice(pidx, Rn.index));
                else { cp = Rn; pidx = Rn.index + Rn[0].length; }
                break;
            }
            if(opts.WTF) throw 'Unrecognized tag: ' + Rn[3] + "|" + state.join("|");
    }
    var out = {};
    if(!opts.bookSheets && !opts.bookProps) out.Sheets = sheets;
    out.SheetNames = sheetnames;
    out.SSF = SSF.get_table();
    out.Props = Props;
    out.Custprops = Custprops;
    return out;
}

function parse_xlml(data, opts) {
    fix_read_opts(opts=opts||{});
    switch(opts.type||"base64") {
        case "base64": return parse_xlml_xml(Base64.decode(data), opts);
        case "binary": case "buffer": case "file": return parse_xlml_xml(data, opts);
        case "array": return parse_xlml_xml(data.map(_chr).join(""), opts);
    }
}

function write_xlml(wb, opts) { }

/* [MS-OLEDS] 2.3.8 CompObjStream */
function parse_compobj(obj) {
    var v = {};
    var o = obj.content;

    /* [MS-OLEDS] 2.3.7 CompObjHeader -- All fields MUST be ignored */
    var l = 28, m;
    m = __lpstr(o, l);
    l += 4 + __readUInt32LE(o,l);
    v.UserType = m;

    /* [MS-OLEDS] 2.3.1 ClipboardFormatOrAnsiString */
    m = __readUInt32LE(o,l); l+= 4;
    switch(m) {
        case 0x00000000: break;
        case 0xffffffff: case 0xfffffffe: l+=4; break;
        default:
            if(m > 0x190) throw new Error("Unsupported Clipboard: " + m.toString(16));
            l += m;
    }

    m = __lpstr(o, l); l += m.length === 0 ? 0 : 5 + m.length; v.Reserved1 = m;

    if((m = __readUInt32LE(o,l)) !== 0x71b2e9f4) return v;
    throw "Unsupported Unicode Extension";
}

/* 2.4.58 Continue logic */
function slurp(R, blob, length, opts) {
    var l = length;
    var bufs = [];
    var d = blob.slice(blob.l,blob.l+l);
    if(opts && opts.enc && opts.enc.insitu_decrypt) switch(R.n) {
    case 'BOF': case 'FilePass': case 'FileLock': case 'InterfaceHdr': case 'RRDInfo': case 'RRDHead': case 'UsrExcl': break;
    default:
        if(d.length === 0) break;
        opts.enc.insitu_decrypt(d);
    }
    bufs.push(d);
    blob.l += l;
    var next = (XLSRecordEnum[__readUInt16LE(blob,blob.l)]);
    while(next != null && next.n === 'Continue') {
        l = __readUInt16LE(blob,blob.l+2);
        bufs.push(blob.slice(blob.l+4,blob.l+4+l));
        blob.l += 4+l;
        next = (XLSRecordEnum[__readUInt16LE(blob, blob.l)]);
    }
    var b = bconcat(bufs);
    prep_blob(b, 0);
    var ll = 0; b.lens = [];
    for(var j = 0; j < bufs.length; ++j) { b.lens.push(ll); ll += bufs[j].length; }
    return R.f(b, b.length, opts);
}

function safe_format_xf(p, opts, date1904) {
    if(!p.XF) return;
    try {
        var fmtid = p.XF.ifmt||0;
        if(p.t === 'e') { p.w = p.w || BErr[p.v]; }
        else if(fmtid === 0) {
            if(p.t === 'n') {
                if((p.v|0) === p.v) p.w = SSF._general_int(p.v);
                else p.w = SSF._general_num(p.v);
            }
            else p.w = SSF._general(p.v);
        }
        else p.w = SSF.format(fmtid,p.v, {date1904:date1904||false});
        if(opts.cellNF) p.z = SSF._table[fmtid];
    } catch(e) { if(opts.WTF) throw e; }
}

function make_cell(val, ixfe, t) {
    return {v:val, ixfe:ixfe, t:t};
}

// 2.3.2
function parse_workbook(blob, options) {
    var wb = {opts:{}};
    var Sheets = {};
    var out = {};
    var Directory = {};
    var found_sheet = false;
    var range = {};
    var last_formula = null;
    var sst = [];
    var cur_sheet = "";
    var Preamble = {};
    var lastcell, last_cell, cc, cmnt, rng, rngC, rngR;
    var shared_formulae = {};
    var array_formulae = []; /* TODO: something more clever */
    var temp_val;
    var country;
    var cell_valid = true;
    var XFs = []; /* XF records */
    var palette = [];
    var get_rgb = function getrgb(icv) {
        if(icv < 8) return XLSIcv[icv];
        if(icv < 64) return palette[icv-8] || XLSIcv[icv];
        return XLSIcv[icv];
    };
    var process_cell_style = function pcs(cell, line) {
        var xfd = line.XF.data;
        if(!xfd || !xfd.patternType) return;
        line.s = {};
        line.s.patternType = xfd.patternType;
        var t;
        if((t = rgb2Hex(get_rgb(xfd.icvFore)))) { line.s.fgColor = {rgb:t}; }
        if((t = rgb2Hex(get_rgb(xfd.icvBack)))) { line.s.bgColor = {rgb:t}; }
    };
    var addcell = function addcell(cell, line, options) {
        if(!cell_valid) return;
        if(options.cellStyles && line.XF && line.XF.data) process_cell_style(cell, line);
        lastcell = cell;
        last_cell = encode_cell(cell);
        if(range.s) {
            if(cell.r < range.s.r) range.s.r = cell.r;
            if(cell.c < range.s.c) range.s.c = cell.c;
        }
        if(range.e) {
            if(cell.r + 1 > range.e.r) range.e.r = cell.r + 1;
            if(cell.c + 1 > range.e.c) range.e.c = cell.c + 1;
        }
        if(options.sheetRows && lastcell.r >= options.sheetRows) cell_valid = false;
        else out[last_cell] = line;
    };
    var opts = {
        enc: false, // encrypted
        sbcch: 0, // cch in the preceding SupBook
        snames: [], // sheetnames
        sharedf: shared_formulae, // shared formulae by address
        arrayf: array_formulae, // array formulae array
        rrtabid: [], // RRTabId
        lastuser: "", // Last User from WriteAccess
        biff: 8, // BIFF version
        codepage: 0, // CP from CodePage record
        winlocked: 0, // fLockWn from WinProtect
        wtf: false
    };
    if(options.password) opts.password = options.password;
    var mergecells = [];
    var objects = [];
    var supbooks = [[]]; // 1-indexed, will hold extern names
    var sbc = 0, sbci = 0, sbcli = 0;
    supbooks.SheetNames = opts.snames;
    supbooks.sharedf = opts.sharedf;
    supbooks.arrayf = opts.arrayf;
    var last_Rn = '';
    var file_depth = 0; /* TODO: make a real stack */

    /* explicit override for some broken writers */
    opts.codepage = 1200;
    set_cp(1200);

    while(blob.l < blob.length - 1) {
        var s = blob.l;
        var RecordType = blob.read_shift(2);
        if(RecordType === 0 && last_Rn === 'EOF') break;
        var length = (blob.l === blob.length ? 0 : blob.read_shift(2)), y;
        var R = XLSRecordEnum[RecordType];
        if(R && R.f) {
            if(options.bookSheets) {
                if(last_Rn === 'BoundSheet8' && R.n !== 'BoundSheet8') break;
            }
            last_Rn = R.n;
            if(R.r === 2 || R.r == 12) {
                var rt = blob.read_shift(2); length -= 2;
                if(!opts.enc && rt !== RecordType) throw "rt mismatch";
                if(R.r == 12){ blob.l += 10; length -= 10; } // skip FRT
            }
            //console.error(R,blob.l,length,blob.length);
            var val;
            if(R.n === 'EOF') val = R.f(blob, length, opts);
            else val = slurp(R, blob, length, opts);
            var Rn = R.n;
            /* BIFF5 overrides */
            if(opts.biff === 5 || opts.biff === 2) switch(Rn) {
                case 'Lbl': Rn = 'Label'; break;
            }
            /* nested switch statements to workaround V8 128 limit */
            switch(Rn) {
                /* Workbook Options */
                case 'Date1904': wb.opts.Date1904 = val; break;
                case 'WriteProtect': wb.opts.WriteProtect = true; break;
                case 'FilePass':
                    if(!opts.enc) blob.l = 0;
                    opts.enc = val;
                    if(opts.WTF) console.error(val);
                    if(!options.password) throw new Error("File is password-protected");
                    if(val.Type !== 0) throw new Error("Encryption scheme unsupported");
                    if(!val.valid) throw new Error("Password is incorrect");
                    break;
                case 'WriteAccess': opts.lastuser = val; break;
                case 'FileSharing': break; //TODO
                case 'CodePage':
                    /* overrides based on test cases */
                    if(val === 0x5212) val = 1200;
                    else if(val === 0x8001) val = 1252;
                    opts.codepage = val;
                    set_cp(val);
                    break;
                case 'RRTabId': opts.rrtabid = val; break;
                case 'WinProtect': opts.winlocked = val; break;
                case 'Template': break; // TODO
                case 'RefreshAll': wb.opts.RefreshAll = val; break;
                case 'BookBool': break; // TODO
                case 'UsesELFs': /* if(val) console.error("Unsupported ELFs"); */ break;
                case 'MTRSettings': {
                    if(val[0] && val[1]) throw "Unsupported threads: " + val;
                } break; // TODO: actually support threads
                case 'CalcCount': wb.opts.CalcCount = val; break;
                case 'CalcDelta': wb.opts.CalcDelta = val; break;
                case 'CalcIter': wb.opts.CalcIter = val; break;
                case 'CalcMode': wb.opts.CalcMode = val; break;
                case 'CalcPrecision': wb.opts.CalcPrecision = val; break;
                case 'CalcSaveRecalc': wb.opts.CalcSaveRecalc = val; break;
                case 'CalcRefMode': opts.CalcRefMode = val; break; // TODO: implement R1C1
                case 'Uncalced': break;
                case 'ForceFullCalculation': wb.opts.FullCalc = val; break;
                case 'WsBool': break; // TODO
                case 'XF': XFs.push(val); break;
                case 'ExtSST': break; // TODO
                case 'BookExt': break; // TODO
                case 'RichTextStream': break;
                case 'BkHim': break;

                case 'SupBook': supbooks[++sbc] = [val]; sbci = 0; break;
                case 'ExternName': supbooks[sbc][++sbci] = val; break;
                case 'Index': break; // TODO
                case 'Lbl': supbooks[0][++sbcli] = val; break;
                case 'ExternSheet': supbooks[sbc] = supbooks[sbc].concat(val); sbci += val.length; break;

                case 'Protect': out["!protect"] = val; break; /* for sheet or book */
                case 'Password': if(val !== 0 && opts.WTF) console.error("Password verifier: " + val); break;
                case 'Prot4Rev': case 'Prot4RevPass': break; /*TODO: Revision Control*/

                case 'BoundSheet8': {
                    Directory[val.pos] = val;
                    opts.snames.push(val.name);
                } break;
                case 'EOF': {
                    if(--file_depth) break;
                    if(range.e) {
                        out["!range"] = range;
                        if(range.e.r > 0 && range.e.c > 0) {
                            range.e.r--; range.e.c--;
                            out["!ref"] = encode_range(range);
                            range.e.r++; range.e.c++;
                        }
                        if(mergecells.length > 0) out["!merges"] = mergecells;
                        if(objects.length > 0) out["!objects"] = objects;
                    }
                    if(cur_sheet === "") Preamble = out; else Sheets[cur_sheet] = out;
                    out = {};
                } break;
                case 'BOF': {
                    if(opts.biff !== 8);
                    else if(val.BIFFVer === 0x0500) opts.biff = 5;
                    else if(val.BIFFVer === 0x0002) opts.biff = 2;
                    else if(val.BIFFVer === 0x0007) opts.biff = 2;
                    if(file_depth++) break;
                    cell_valid = true;
                    out = {};
                    if(opts.biff === 2) {
                        if(cur_sheet === "") cur_sheet = "Sheet1";
                        range = {s:{r:0,c:0},e:{r:0,c:0}};
                    }
                    else cur_sheet = (Directory[s] || {name:""}).name;
                    mergecells = [];
                    objects = [];
                } break;
                case 'Number': case 'BIFF2NUM': {
                    temp_val = {ixfe: val.ixfe, XF: XFs[val.ixfe], v:val.val, t:'n'};
                    if(temp_val.XF) safe_format_xf(temp_val, options, wb.opts.Date1904);
                    addcell({c:val.c, r:val.r}, temp_val, options);
                } break;
                case 'BoolErr': {
                    temp_val = {ixfe: val.ixfe, XF: XFs[val.ixfe], v:val.val, t:val.t};
                    if(temp_val.XF) safe_format_xf(temp_val, options, wb.opts.Date1904);
                    addcell({c:val.c, r:val.r}, temp_val, options);
                } break;
                case 'RK': {
                    temp_val = {ixfe: val.ixfe, XF: XFs[val.ixfe], v:val.rknum, t:'n'};
                    if(temp_val.XF) safe_format_xf(temp_val, options, wb.opts.Date1904);
                    addcell({c:val.c, r:val.r}, temp_val, options);
                } break;
                case 'MulRk': {
                    for(var j = val.c; j <= val.C; ++j) {
                        var ixfe = val.rkrec[j-val.c][0];
                        temp_val= {ixfe:ixfe, XF:XFs[ixfe], v:val.rkrec[j-val.c][1], t:'n'};
                        if(temp_val.XF) safe_format_xf(temp_val, options, wb.opts.Date1904);
                        addcell({c:j, r:val.r}, temp_val, options);
                    }
                } break;
                case 'Formula': {
                    switch(val.val) {
                        case 'String': last_formula = val; break;
                        case 'Array Formula': throw "Array Formula unsupported";
                        default:
                            temp_val = {v:val.val, ixfe:val.cell.ixfe, t:val.tt};
                            temp_val.XF = XFs[temp_val.ixfe];
                            if(options.cellFormula) temp_val.f = "="+stringify_formula(val.formula,range,val.cell,supbooks, opts);
                            if(temp_val.XF) safe_format_xf(temp_val, options, wb.opts.Date1904);
                            addcell(val.cell, temp_val, options);
                            last_formula = val;
                    }
                } break;
                case 'String': {
                    if(last_formula) {
                        last_formula.val = val;
                        temp_val = {v:last_formula.val, ixfe:last_formula.cell.ixfe, t:'s'};
                        temp_val.XF = XFs[temp_val.ixfe];
                        if(options.cellFormula) temp_val.f = "="+stringify_formula(last_formula.formula, range, last_formula.cell, supbooks, opts);
                        if(temp_val.XF) safe_format_xf(temp_val, options, wb.opts.Date1904);
                        addcell(last_formula.cell, temp_val, options);
                        last_formula = null;
                    }
                } break;
                case 'Array': {
                    array_formulae.push(val);
                } break;
                case 'ShrFmla': {
                    if(!cell_valid) break;
                    //if(options.cellFormula) out[last_cell].f = stringify_formula(val[0], range, lastcell, supbooks, opts);
                    /* TODO: capture range */
                    shared_formulae[encode_cell(last_formula.cell)]= val[0];
                } break;
                case 'LabelSst':
                    //temp_val={v:sst[val.isst].t, ixfe:val.ixfe, t:'s'};
                    temp_val=make_cell(sst[val.isst].t, val.ixfe, 's');
                    temp_val.XF = XFs[temp_val.ixfe];
                    if(temp_val.XF) safe_format_xf(temp_val, options, wb.opts.Date1904);
                    addcell({c:val.c, r:val.r}, temp_val, options);
                    break;
                case 'Label': case 'BIFF2STR':
                    /* Some writers erroneously write Label */
                    temp_val=make_cell(val.val, val.ixfe, 's');
                    temp_val.XF = XFs[temp_val.ixfe];
                    if(temp_val.XF) safe_format_xf(temp_val, options, wb.opts.Date1904);
                    addcell({c:val.c, r:val.r}, temp_val, options);
                    break;
                case 'Dimensions': {
                    if(file_depth === 1) range = val; /* TODO: stack */
                } break;
                case 'SST': {
                    sst = val;
                } break;
                case 'Format': { /* val = [id, fmt] */
                    SSF.load(val[1], val[0]);
                } break;

                case 'MergeCells': mergecells = mergecells.concat(val); break;

                case 'Obj': objects[val.cmo[0]] = opts.lastobj = val; break;
                case 'TxO': opts.lastobj.TxO = val; break;

                case 'HLink': {
                    for(rngR = val[0].s.r; rngR <= val[0].e.r; ++rngR)
                        for(rngC = val[0].s.c; rngC <= val[0].e.c; ++rngC)
                            if(out[encode_cell({c:rngC,r:rngR})])
                                out[encode_cell({c:rngC,r:rngR})].l = val[1];
                } break;
                case 'HLinkTooltip': {
                    for(rngR = val[0].s.r; rngR <= val[0].e.r; ++rngR)
                        for(rngC = val[0].s.c; rngC <= val[0].e.c; ++rngC)
                            if(out[encode_cell({c:rngC,r:rngR})])
                                out[encode_cell({c:rngC,r:rngR})].l.tooltip = val[1];
                } break;

                /* Comments */
                case 'Note': {
                    if(opts.biff <= 5 && opts.biff >= 2) break; /* TODO: BIFF5 */
                    cc = out[encode_cell(val[0])];
                    var noteobj = objects[val[2]];
                    if(!cc) break;
                    if(!cc.c) cc.c = [];
                    cmnt = {a:val[1],t:noteobj.TxO.t};
                    cc.c.push(cmnt);
                } break;

                default: switch(R.n) { /* nested */
                case 'ClrtClient': break;
                case 'XFExt': update_xfext(XFs[val.ixfe], val.ext); break;

                case 'NameCmt': break;
                case 'Header': break; // TODO
                case 'Footer': break; // TODO
                case 'HCenter': break; // TODO
                case 'VCenter': break; // TODO
                case 'Pls': break; // TODO
                case 'Setup': break; // TODO
                case 'DefColWidth': break; // TODO
                case 'GCW': break;
                case 'LHRecord': break;
                case 'ColInfo': break; // TODO
                case 'Row': break; // TODO
                case 'DBCell': break; // TODO
                case 'MulBlank': break; // TODO
                case 'EntExU2': break; // TODO
                case 'SxView': break; // TODO
                case 'Sxvd': break; // TODO
                case 'SXVI': break; // TODO
                case 'SXVDEx': break; // TODO
                case 'SxIvd': break; // TODO
                case 'SXDI': break; // TODO
                case 'SXLI': break; // TODO
                case 'SXEx': break; // TODO
                case 'QsiSXTag': break; // TODO
                case 'Selection': break;
                case 'Feat': break;
                case 'FeatHdr': case 'FeatHdr11': break;
                case 'Feature11': case 'Feature12': case 'List12': break;
                case 'Blank': break;
                case 'Country': country = val; break;
                case 'RecalcId': break;
                case 'DefaultRowHeight': case 'DxGCol': break; // TODO: htmlify
                case 'Fbi': case 'Fbi2': case 'GelFrame': break;
                case 'Font': break; // TODO
                case 'XFCRC': break; // TODO
                case 'Style': break; // TODO
                case 'StyleExt': break; // TODO
                case 'Palette': palette = val; break; // TODO
                case 'Theme': break; // TODO
                /* Protection */
                case 'ScenarioProtect': break;
                case 'ObjProtect': break;

                /* Conditional Formatting */
                case 'CondFmt12': break;

                /* Table */
                case 'Table': break; // TODO
                case 'TableStyles': break; // TODO
                case 'TableStyle': break; // TODO
                case 'TableStyleElement': break; // TODO

                /* PivotTable */
                case 'SXStreamID': break; // TODO
                case 'SXVS': break; // TODO
                case 'DConRef': break; // TODO
                case 'SXAddl': break; // TODO
                case 'DConBin': break; // TODO
                case 'DConName': break; // TODO
                case 'SXPI': break; // TODO
                case 'SxFormat': break; // TODO
                case 'SxSelect': break; // TODO
                case 'SxRule': break; // TODO
                case 'SxFilt': break; // TODO
                case 'SxItm': break; // TODO
                case 'SxDXF': break; // TODO

                /* Scenario Manager */
                case 'ScenMan': break;

                /* Data Consolidation */
                case 'DCon': break;

                /* Watched Cell */
                case 'CellWatch': break;

                /* Print Settings */
                case 'PrintRowCol': break;
                case 'PrintGrid': break;
                case 'PrintSize': break;

                case 'XCT': break;
                case 'CRN': break;

                case 'Scl': {
                    //console.log("Zoom Level:", val[0]/val[1],val);
                } break;
                case 'SheetExt': {

                } break;
                case 'SheetExtOptional': {

                } break;

                /* VBA */
                case 'ObNoMacros': {

                } break;
                case 'ObProj': {

                } break;
                case 'CodeName': {

                } break;
                case 'GUIDTypeLib': {

                } break;

                case 'WOpt': break; // TODO: WTF?
                case 'PhoneticInfo': break;

                case 'OleObjectSize': break;

                /* Differential Formatting */
                case 'DXF': case 'DXFN': case 'DXFN12': case 'DXFN12List': case 'DXFN12NoCB': break;

                /* Data Validation */
                case 'Dv': case 'DVal': break;

                /* Data Series */
                case 'BRAI': case 'Series': case 'SeriesText': break;

                /* Data Connection */
                case 'DConn': break;
                case 'DbOrParamQry': break;
                case 'DBQueryExt': break;

                /* Formatting */
                case 'IFmtRecord': break;
                case 'CondFmt': case 'CF': case 'CF12': case 'CFEx': break;

                /* Explicitly Ignored */
                case 'Excel9File': break;
                case 'Units': break;
                case 'InterfaceHdr': case 'Mms': case 'InterfaceEnd': case 'DSF': case 'BuiltInFnGroupCount':
                /* View Stuff */
                case 'Window1': case 'Window2': case 'HideObj': case 'GridSet': case 'Guts':
                case 'UserBView': case 'UserSViewBegin': case 'UserSViewEnd':
                case 'Pane': break;
                default: switch(R.n) { /* nested */
                /* Chart */
                case 'Dat':
                case 'Begin': case 'End':
                case 'StartBlock': case 'EndBlock':
                case 'Frame': case 'Area':
                case 'Axis': case 'AxisLine': case 'Tick': break;
                case 'AxesUsed':
                case 'CrtLayout12': case 'CrtLayout12A': case 'CrtLink': case 'CrtLine': case 'CrtMlFrt': case 'CrtMlFrtContinue': break;
                case 'LineFormat': case 'AreaFormat':
                case 'Chart': case 'Chart3d': case 'Chart3DBarShape': case 'ChartFormat': case 'ChartFrtInfo': break;
                case 'PlotArea': case 'PlotGrowth': break;
                case 'SeriesList': case 'SerParent': case 'SerAuxTrend': break;
                case 'DataFormat': case 'SerToCrt': case 'FontX': break;
                case 'CatSerRange': case 'AxcExt': case 'SerFmt': break;
                case 'ShtProps': break;
                case 'DefaultText': case 'Text': case 'CatLab': break;
                case 'DataLabExtContents': break;
                case 'Legend': case 'LegendException': break;
                case 'Pie': case 'Scatter': break;
                case 'PieFormat': case 'MarkerFormat': break;
                case 'StartObject': case 'EndObject': break;
                case 'AlRuns': case 'ObjectLink': break;
                case 'SIIndex': break;
                case 'AttachedLabel': case 'YMult': break;

                /* Chart Group */
                case 'Line': case 'Bar': break;
                case 'Surf': break;

                /* Axis Group */
                case 'AxisParent': break;
                case 'Pos': break;
                case 'ValueRange': break;

                /* Pivot Chart */
                case 'SXViewEx9': break; // TODO
                case 'SXViewLink': break;
                case 'PivotChartBits': break;
                case 'SBaseRef': break;
                case 'TextPropsStream': break;

                /* Chart Misc */
                case 'LnExt': break;
                case 'MkrExt': break;
                case 'CrtCoopt': break;

                /* Query Table */
                case 'Qsi': case 'Qsif': case 'Qsir': case 'QsiSXTag': break;
                case 'TxtQry': break;

                /* Filter */
                case 'FilterMode': break;
                case 'AutoFilter': case 'AutoFilterInfo': break;
                case 'AutoFilter12': break;
                case 'DropDownObjIds': break;
                case 'Sort': break;
                case 'SortData': break;

                /* Drawing */
                case 'ShapePropsStream': break;
                case 'MsoDrawing': case 'MsoDrawingGroup': case 'MsoDrawingSelection': break;
                case 'ImData': break;
                /* Pub Stuff */
                case 'WebPub': case 'AutoWebPub':

                /* Print Stuff */
                case 'RightMargin': case 'LeftMargin': case 'TopMargin': case 'BottomMargin':
                case 'HeaderFooter': case 'HFPicture': case 'PLV':
                case 'HorizontalPageBreaks': case 'VerticalPageBreaks':
                /* Behavioral */
                case 'Backup': case 'CompressPictures': case 'Compat12': break;

                /* Should not Happen */
                case 'Continue': case 'ContinueFrt12': break;

                /* Future Records */
                case 'FrtFontList': case 'FrtWrapper': break;

                /* BIFF5 records */
                case 'ExternCount': break;
                case 'RString': break;
                case 'TabIdConf': case 'Radar': case 'RadarArea': case 'DropBar': case 'Intl': case 'CoordList': case 'SerAuxErrBar': break;

                default: switch(R.n) { /* nested */
                /* Miscellaneous */
                case 'SCENARIO': case 'DConBin': case 'PicF': case 'DataLabExt':
                case 'Lel': case 'BopPop': case 'BopPopCustom': case 'RealTimeData':
                case 'Name': break;
                default: if(options.WTF) throw 'Unrecognized Record ' + R.n;
            }}}}
        } else blob.l += length;
    }
    var sheetnamesraw = opts.biff === 2 ? ['Sheet1'] : Object.keys(Directory).sort(function(a,b) { return Number(a) - Number(b); }).map(function(x){return Directory[x].name;});
    var sheetnames = sheetnamesraw.slice();
    wb.Directory=sheetnamesraw;
    wb.SheetNames=sheetnamesraw;
    if(!options.bookSheets) wb.Sheets=Sheets;
    wb.Preamble=Preamble;
    wb.Strings = sst;
    wb.SSF = SSF.get_table();
    if(opts.enc) wb.Encryption = opts.enc;
    wb.Metadata = {};
    if(country !== undefined) wb.Metadata.Country = country;
    return wb;
}

function parse_xlscfb(cfb, options) {
if(!options) options = {};
fix_read_opts(options);
reset_cp();
var CompObj, Summary, Workbook;
if(cfb.find) {
    CompObj = cfb.find('!CompObj');
    Summary = cfb.find('!SummaryInformation');
    Workbook = cfb.find('/Workbook');
} else {
    prep_blob(cfb, 0);
    Workbook = {content: cfb};
}

if(!Workbook) Workbook = cfb.find('/Book');
var CompObjP, SummaryP, WorkbookP;

if(CompObj) CompObjP = parse_compobj(CompObj);
if(options.bookProps && !options.bookSheets) WorkbookP = {};
else {
    if(Workbook) WorkbookP = parse_workbook(Workbook.content, options, !!Workbook.find);
    else throw new Error("Cannot find Workbook stream");
}

if(cfb.find) parse_props(cfb);

var props = {};
for(var y in cfb.Summary) props[y] = cfb.Summary[y];
for(y in cfb.DocSummary) props[y] = cfb.DocSummary[y];
WorkbookP.Props = WorkbookP.Custprops = props; /* TODO: split up properties */
if(options.bookFiles) WorkbookP.cfb = cfb;
WorkbookP.CompObjP = CompObjP;
return WorkbookP;
}

/* TODO: WTF */
function parse_props(cfb) {
    /* [MS-OSHARED] 2.3.3.2.2 Document Summary Information Property Set */
    var DSI = cfb.find('!DocumentSummaryInformation');
    if(DSI) try { cfb.DocSummary = parse_PropertySetStream(DSI, DocSummaryPIDDSI); } catch(e) {}

    /* [MS-OSHARED] 2.3.3.2.1 Summary Information Property Set*/
    var SI = cfb.find('!SummaryInformation');
    if(SI) try { cfb.Summary = parse_PropertySetStream(SI, SummaryPIDSI); } catch(e) {}
}

/* [MS-XLSB] 2.3 Record Enumeration */
var XLSBRecordEnum = {
    0x0000: { n:"BrtRowHdr", f:parse_BrtRowHdr },
    0x0001: { n:"BrtCellBlank", f:parse_BrtCellBlank },
    0x0002: { n:"BrtCellRk", f:parse_BrtCellRk },
    0x0003: { n:"BrtCellError", f:parse_BrtCellError },
    0x0004: { n:"BrtCellBool", f:parse_BrtCellBool },
    0x0005: { n:"BrtCellReal", f:parse_BrtCellReal },
    0x0006: { n:"BrtCellSt", f:parse_BrtCellSt },
    0x0007: { n:"BrtCellIsst", f:parse_BrtCellIsst },
    0x0008: { n:"BrtFmlaString", f:parse_BrtFmlaString },
    0x0009: { n:"BrtFmlaNum", f:parse_BrtFmlaNum },
    0x000A: { n:"BrtFmlaBool", f:parse_BrtFmlaBool },
    0x000B: { n:"BrtFmlaError", f:parse_BrtFmlaError },
    0x0010: { n:"BrtFRTArchID$", f:parse_BrtFRTArchID$ },
    0x0013: { n:"BrtSSTItem", f:parse_RichStr },
    0x0014: { n:"BrtPCDIMissing", f:parsenoop },
    0x0015: { n:"BrtPCDINumber", f:parsenoop },
    0x0016: { n:"BrtPCDIBoolean", f:parsenoop },
    0x0017: { n:"BrtPCDIError", f:parsenoop },
    0x0018: { n:"BrtPCDIString", f:parsenoop },
    0x0019: { n:"BrtPCDIDatetime", f:parsenoop },
    0x001A: { n:"BrtPCDIIndex", f:parsenoop },
    0x001B: { n:"BrtPCDIAMissing", f:parsenoop },
    0x001C: { n:"BrtPCDIANumber", f:parsenoop },
    0x001D: { n:"BrtPCDIABoolean", f:parsenoop },
    0x001E: { n:"BrtPCDIAError", f:parsenoop },
    0x001F: { n:"BrtPCDIAString", f:parsenoop },
    0x0020: { n:"BrtPCDIADatetime", f:parsenoop },
    0x0021: { n:"BrtPCRRecord", f:parsenoop },
    0x0022: { n:"BrtPCRRecordDt", f:parsenoop },
    0x0023: { n:"BrtFRTBegin", f:parsenoop },
    0x0024: { n:"BrtFRTEnd", f:parsenoop },
    0x0025: { n:"BrtACBegin", f:parsenoop },
    0x0026: { n:"BrtACEnd", f:parsenoop },
    0x0027: { n:"BrtName", f:parsenoop },
    0x0028: { n:"BrtIndexRowBlock", f:parsenoop },
    0x002A: { n:"BrtIndexBlock", f:parsenoop },
    0x002B: { n:"BrtFont", f:parse_BrtFont },
    0x002C: { n:"BrtFmt", f:parse_BrtFmt },
    0x002D: { n:"BrtFill", f:parsenoop },
    0x002E: { n:"BrtBorder", f:parsenoop },
    0x002F: { n:"BrtXF", f:parse_BrtXF },
    0x0030: { n:"BrtStyle", f:parsenoop },
    0x0031: { n:"BrtCellMeta", f:parsenoop },
    0x0032: { n:"BrtValueMeta", f:parsenoop },
    0x0033: { n:"BrtMdb", f:parsenoop },
    0x0034: { n:"BrtBeginFmd", f:parsenoop },
    0x0035: { n:"BrtEndFmd", f:parsenoop },
    0x0036: { n:"BrtBeginMdx", f:parsenoop },
    0x0037: { n:"BrtEndMdx", f:parsenoop },
    0x0038: { n:"BrtBeginMdxTuple", f:parsenoop },
    0x0039: { n:"BrtEndMdxTuple", f:parsenoop },
    0x003A: { n:"BrtMdxMbrIstr", f:parsenoop },
    0x003B: { n:"BrtStr", f:parsenoop },
    0x003C: { n:"BrtColInfo", f:parsenoop },
    0x003E: { n:"BrtCellRString", f:parsenoop },
    0x003F: { n:"BrtCalcChainItem$", f:parse_BrtCalcChainItem$ },
    0x0040: { n:"BrtDVal", f:parsenoop },
    0x0041: { n:"BrtSxvcellNum", f:parsenoop },
    0x0042: { n:"BrtSxvcellStr", f:parsenoop },
    0x0043: { n:"BrtSxvcellBool", f:parsenoop },
    0x0044: { n:"BrtSxvcellErr", f:parsenoop },
    0x0045: { n:"BrtSxvcellDate", f:parsenoop },
    0x0046: { n:"BrtSxvcellNil", f:parsenoop },
    0x0080: { n:"BrtFileVersion", f:parsenoop },
    0x0081: { n:"BrtBeginSheet", f:parsenoop },
    0x0082: { n:"BrtEndSheet", f:parsenoop },
    0x0083: { n:"BrtBeginBook", f:parsenoop, p:0 },
    0x0084: { n:"BrtEndBook", f:parsenoop },
    0x0085: { n:"BrtBeginWsViews", f:parsenoop },
    0x0086: { n:"BrtEndWsViews", f:parsenoop },
    0x0087: { n:"BrtBeginBookViews", f:parsenoop },
    0x0088: { n:"BrtEndBookViews", f:parsenoop },
    0x0089: { n:"BrtBeginWsView", f:parsenoop },
    0x008A: { n:"BrtEndWsView", f:parsenoop },
    0x008B: { n:"BrtBeginCsViews", f:parsenoop },
    0x008C: { n:"BrtEndCsViews", f:parsenoop },
    0x008D: { n:"BrtBeginCsView", f:parsenoop },
    0x008E: { n:"BrtEndCsView", f:parsenoop },
    0x008F: { n:"BrtBeginBundleShs", f:parsenoop },
    0x0090: { n:"BrtEndBundleShs", f:parsenoop },
    0x0091: { n:"BrtBeginSheetData", f:parsenoop },
    0x0092: { n:"BrtEndSheetData", f:parsenoop },
    0x0093: { n:"BrtWsProp", f:parse_BrtWsProp },
    0x0094: { n:"BrtWsDim", f:parse_BrtWsDim, p:16 },
    0x0097: { n:"BrtPane", f:parsenoop },
    0x0098: { n:"BrtSel", f:parsenoop },
    0x0099: { n:"BrtWbProp", f:parse_BrtWbProp },
    0x009A: { n:"BrtWbFactoid", f:parsenoop },
    0x009B: { n:"BrtFileRecover", f:parsenoop },
    0x009C: { n:"BrtBundleSh", f:parse_BrtBundleSh },
    0x009D: { n:"BrtCalcProp", f:parsenoop },
    0x009E: { n:"BrtBookView", f:parsenoop },
    0x009F: { n:"BrtBeginSst", f:parse_BrtBeginSst },
    0x00A0: { n:"BrtEndSst", f:parsenoop },
    0x00A1: { n:"BrtBeginAFilter", f:parsenoop },
    0x00A2: { n:"BrtEndAFilter", f:parsenoop },
    0x00A3: { n:"BrtBeginFilterColumn", f:parsenoop },
    0x00A4: { n:"BrtEndFilterColumn", f:parsenoop },
    0x00A5: { n:"BrtBeginFilters", f:parsenoop },
    0x00A6: { n:"BrtEndFilters", f:parsenoop },
    0x00A7: { n:"BrtFilter", f:parsenoop },
    0x00A8: { n:"BrtColorFilter", f:parsenoop },
    0x00A9: { n:"BrtIconFilter", f:parsenoop },
    0x00AA: { n:"BrtTop10Filter", f:parsenoop },
    0x00AB: { n:"BrtDynamicFilter", f:parsenoop },
    0x00AC: { n:"BrtBeginCustomFilters", f:parsenoop },
    0x00AD: { n:"BrtEndCustomFilters", f:parsenoop },
    0x00AE: { n:"BrtCustomFilter", f:parsenoop },
    0x00AF: { n:"BrtAFilterDateGroupItem", f:parsenoop },
    0x00B0: { n:"BrtMergeCell", f:parse_BrtMergeCell },
    0x00B1: { n:"BrtBeginMergeCells", f:parsenoop },
    0x00B2: { n:"BrtEndMergeCells", f:parsenoop },
    0x00B3: { n:"BrtBeginPivotCacheDef", f:parsenoop },
    0x00B4: { n:"BrtEndPivotCacheDef", f:parsenoop },
    0x00B5: { n:"BrtBeginPCDFields", f:parsenoop },
    0x00B6: { n:"BrtEndPCDFields", f:parsenoop },
    0x00B7: { n:"BrtBeginPCDField", f:parsenoop },
    0x00B8: { n:"BrtEndPCDField", f:parsenoop },
    0x00B9: { n:"BrtBeginPCDSource", f:parsenoop },
    0x00BA: { n:"BrtEndPCDSource", f:parsenoop },
    0x00BB: { n:"BrtBeginPCDSRange", f:parsenoop },
    0x00BC: { n:"BrtEndPCDSRange", f:parsenoop },
    0x00BD: { n:"BrtBeginPCDFAtbl", f:parsenoop },
    0x00BE: { n:"BrtEndPCDFAtbl", f:parsenoop },
    0x00BF: { n:"BrtBeginPCDIRun", f:parsenoop },
    0x00C0: { n:"BrtEndPCDIRun", f:parsenoop },
    0x00C1: { n:"BrtBeginPivotCacheRecords", f:parsenoop },
    0x00C2: { n:"BrtEndPivotCacheRecords", f:parsenoop },
    0x00C3: { n:"BrtBeginPCDHierarchies", f:parsenoop },
    0x00C4: { n:"BrtEndPCDHierarchies", f:parsenoop },
    0x00C5: { n:"BrtBeginPCDHierarchy", f:parsenoop },
    0x00C6: { n:"BrtEndPCDHierarchy", f:parsenoop },
    0x00C7: { n:"BrtBeginPCDHFieldsUsage", f:parsenoop },
    0x00C8: { n:"BrtEndPCDHFieldsUsage", f:parsenoop },
    0x00C9: { n:"BrtBeginExtConnection", f:parsenoop },
    0x00CA: { n:"BrtEndExtConnection", f:parsenoop },
    0x00CB: { n:"BrtBeginECDbProps", f:parsenoop },
    0x00CC: { n:"BrtEndECDbProps", f:parsenoop },
    0x00CD: { n:"BrtBeginECOlapProps", f:parsenoop },
    0x00CE: { n:"BrtEndECOlapProps", f:parsenoop },
    0x00CF: { n:"BrtBeginPCDSConsol", f:parsenoop },
    0x00D0: { n:"BrtEndPCDSConsol", f:parsenoop },
    0x00D1: { n:"BrtBeginPCDSCPages", f:parsenoop },
    0x00D2: { n:"BrtEndPCDSCPages", f:parsenoop },
    0x00D3: { n:"BrtBeginPCDSCPage", f:parsenoop },
    0x00D4: { n:"BrtEndPCDSCPage", f:parsenoop },
    0x00D5: { n:"BrtBeginPCDSCPItem", f:parsenoop },
    0x00D6: { n:"BrtEndPCDSCPItem", f:parsenoop },
    0x00D7: { n:"BrtBeginPCDSCSets", f:parsenoop },
    0x00D8: { n:"BrtEndPCDSCSets", f:parsenoop },
    0x00D9: { n:"BrtBeginPCDSCSet", f:parsenoop },
    0x00DA: { n:"BrtEndPCDSCSet", f:parsenoop },
    0x00DB: { n:"BrtBeginPCDFGroup", f:parsenoop },
    0x00DC: { n:"BrtEndPCDFGroup", f:parsenoop },
    0x00DD: { n:"BrtBeginPCDFGItems", f:parsenoop },
    0x00DE: { n:"BrtEndPCDFGItems", f:parsenoop },
    0x00DF: { n:"BrtBeginPCDFGRange", f:parsenoop },
    0x00E0: { n:"BrtEndPCDFGRange", f:parsenoop },
    0x00E1: { n:"BrtBeginPCDFGDiscrete", f:parsenoop },
    0x00E2: { n:"BrtEndPCDFGDiscrete", f:parsenoop },
    0x00E3: { n:"BrtBeginPCDSDTupleCache", f:parsenoop },
    0x00E4: { n:"BrtEndPCDSDTupleCache", f:parsenoop },
    0x00E5: { n:"BrtBeginPCDSDTCEntries", f:parsenoop },
    0x00E6: { n:"BrtEndPCDSDTCEntries", f:parsenoop },
    0x00E7: { n:"BrtBeginPCDSDTCEMembers", f:parsenoop },
    0x00E8: { n:"BrtEndPCDSDTCEMembers", f:parsenoop },
    0x00E9: { n:"BrtBeginPCDSDTCEMember", f:parsenoop },
    0x00EA: { n:"BrtEndPCDSDTCEMember", f:parsenoop },
    0x00EB: { n:"BrtBeginPCDSDTCQueries", f:parsenoop },
    0x00EC: { n:"BrtEndPCDSDTCQueries", f:parsenoop },
    0x00ED: { n:"BrtBeginPCDSDTCQuery", f:parsenoop },
    0x00EE: { n:"BrtEndPCDSDTCQuery", f:parsenoop },
    0x00EF: { n:"BrtBeginPCDSDTCSets", f:parsenoop },
    0x00F0: { n:"BrtEndPCDSDTCSets", f:parsenoop },
    0x00F1: { n:"BrtBeginPCDSDTCSet", f:parsenoop },
    0x00F2: { n:"BrtEndPCDSDTCSet", f:parsenoop },
    0x00F3: { n:"BrtBeginPCDCalcItems", f:parsenoop },
    0x00F4: { n:"BrtEndPCDCalcItems", f:parsenoop },
    0x00F5: { n:"BrtBeginPCDCalcItem", f:parsenoop },
    0x00F6: { n:"BrtEndPCDCalcItem", f:parsenoop },
    0x00F7: { n:"BrtBeginPRule", f:parsenoop },
    0x00F8: { n:"BrtEndPRule", f:parsenoop },
    0x00F9: { n:"BrtBeginPRFilters", f:parsenoop },
    0x00FA: { n:"BrtEndPRFilters", f:parsenoop },
    0x00FB: { n:"BrtBeginPRFilter", f:parsenoop },
    0x00FC: { n:"BrtEndPRFilter", f:parsenoop },
    0x00FD: { n:"BrtBeginPNames", f:parsenoop },
    0x00FE: { n:"BrtEndPNames", f:parsenoop },
    0x00FF: { n:"BrtBeginPName", f:parsenoop },
    0x0100: { n:"BrtEndPName", f:parsenoop },
    0x0101: { n:"BrtBeginPNPairs", f:parsenoop },
    0x0102: { n:"BrtEndPNPairs", f:parsenoop },
    0x0103: { n:"BrtBeginPNPair", f:parsenoop },
    0x0104: { n:"BrtEndPNPair", f:parsenoop },
    0x0105: { n:"BrtBeginECWebProps", f:parsenoop },
    0x0106: { n:"BrtEndECWebProps", f:parsenoop },
    0x0107: { n:"BrtBeginEcWpTables", f:parsenoop },
    0x0108: { n:"BrtEndECWPTables", f:parsenoop },
    0x0109: { n:"BrtBeginECParams", f:parsenoop },
    0x010A: { n:"BrtEndECParams", f:parsenoop },
    0x010B: { n:"BrtBeginECParam", f:parsenoop },
    0x010C: { n:"BrtEndECParam", f:parsenoop },
    0x010D: { n:"BrtBeginPCDKPIs", f:parsenoop },
    0x010E: { n:"BrtEndPCDKPIs", f:parsenoop },
    0x010F: { n:"BrtBeginPCDKPI", f:parsenoop },
    0x0110: { n:"BrtEndPCDKPI", f:parsenoop },
    0x0111: { n:"BrtBeginDims", f:parsenoop },
    0x0112: { n:"BrtEndDims", f:parsenoop },
    0x0113: { n:"BrtBeginDim", f:parsenoop },
    0x0114: { n:"BrtEndDim", f:parsenoop },
    0x0115: { n:"BrtIndexPartEnd", f:parsenoop },
    0x0116: { n:"BrtBeginStyleSheet", f:parsenoop },
    0x0117: { n:"BrtEndStyleSheet", f:parsenoop },
    0x0118: { n:"BrtBeginSXView", f:parsenoop },
    0x0119: { n:"BrtEndSXVI", f:parsenoop },
    0x011A: { n:"BrtBeginSXVI", f:parsenoop },
    0x011B: { n:"BrtBeginSXVIs", f:parsenoop },
    0x011C: { n:"BrtEndSXVIs", f:parsenoop },
    0x011D: { n:"BrtBeginSXVD", f:parsenoop },
    0x011E: { n:"BrtEndSXVD", f:parsenoop },
    0x011F: { n:"BrtBeginSXVDs", f:parsenoop },
    0x0120: { n:"BrtEndSXVDs", f:parsenoop },
    0x0121: { n:"BrtBeginSXPI", f:parsenoop },
    0x0122: { n:"BrtEndSXPI", f:parsenoop },
    0x0123: { n:"BrtBeginSXPIs", f:parsenoop },
    0x0124: { n:"BrtEndSXPIs", f:parsenoop },
    0x0125: { n:"BrtBeginSXDI", f:parsenoop },
    0x0126: { n:"BrtEndSXDI", f:parsenoop },
    0x0127: { n:"BrtBeginSXDIs", f:parsenoop },
    0x0128: { n:"BrtEndSXDIs", f:parsenoop },
    0x0129: { n:"BrtBeginSXLI", f:parsenoop },
    0x012A: { n:"BrtEndSXLI", f:parsenoop },
    0x012B: { n:"BrtBeginSXLIRws", f:parsenoop },
    0x012C: { n:"BrtEndSXLIRws", f:parsenoop },
    0x012D: { n:"BrtBeginSXLICols", f:parsenoop },
    0x012E: { n:"BrtEndSXLICols", f:parsenoop },
    0x012F: { n:"BrtBeginSXFormat", f:parsenoop },
    0x0130: { n:"BrtEndSXFormat", f:parsenoop },
    0x0131: { n:"BrtBeginSXFormats", f:parsenoop },
    0x0132: { n:"BrtEndSxFormats", f:parsenoop },
    0x0133: { n:"BrtBeginSxSelect", f:parsenoop },
    0x0134: { n:"BrtEndSxSelect", f:parsenoop },
    0x0135: { n:"BrtBeginISXVDRws", f:parsenoop },
    0x0136: { n:"BrtEndISXVDRws", f:parsenoop },
    0x0137: { n:"BrtBeginISXVDCols", f:parsenoop },
    0x0138: { n:"BrtEndISXVDCols", f:parsenoop },
    0x0139: { n:"BrtEndSXLocation", f:parsenoop },
    0x013A: { n:"BrtBeginSXLocation", f:parsenoop },
    0x013B: { n:"BrtEndSXView", f:parsenoop },
    0x013C: { n:"BrtBeginSXTHs", f:parsenoop },
    0x013D: { n:"BrtEndSXTHs", f:parsenoop },
    0x013E: { n:"BrtBeginSXTH", f:parsenoop },
    0x013F: { n:"BrtEndSXTH", f:parsenoop },
    0x0140: { n:"BrtBeginISXTHRws", f:parsenoop },
    0x0141: { n:"BrtEndISXTHRws", f:parsenoop },
    0x0142: { n:"BrtBeginISXTHCols", f:parsenoop },
    0x0143: { n:"BrtEndISXTHCols", f:parsenoop },
    0x0144: { n:"BrtBeginSXTDMPS", f:parsenoop },
    0x0145: { n:"BrtEndSXTDMPs", f:parsenoop },
    0x0146: { n:"BrtBeginSXTDMP", f:parsenoop },
    0x0147: { n:"BrtEndSXTDMP", f:parsenoop },
    0x0148: { n:"BrtBeginSXTHItems", f:parsenoop },
    0x0149: { n:"BrtEndSXTHItems", f:parsenoop },
    0x014A: { n:"BrtBeginSXTHItem", f:parsenoop },
    0x014B: { n:"BrtEndSXTHItem", f:parsenoop },
    0x014C: { n:"BrtBeginMetadata", f:parsenoop },
    0x014D: { n:"BrtEndMetadata", f:parsenoop },
    0x014E: { n:"BrtBeginEsmdtinfo", f:parsenoop },
    0x014F: { n:"BrtMdtinfo", f:parsenoop },
    0x0150: { n:"BrtEndEsmdtinfo", f:parsenoop },
    0x0151: { n:"BrtBeginEsmdb", f:parsenoop },
    0x0152: { n:"BrtEndEsmdb", f:parsenoop },
    0x0153: { n:"BrtBeginEsfmd", f:parsenoop },
    0x0154: { n:"BrtEndEsfmd", f:parsenoop },
    0x0155: { n:"BrtBeginSingleCells", f:parsenoop },
    0x0156: { n:"BrtEndSingleCells", f:parsenoop },
    0x0157: { n:"BrtBeginList", f:parsenoop },
    0x0158: { n:"BrtEndList", f:parsenoop },
    0x0159: { n:"BrtBeginListCols", f:parsenoop },
    0x015A: { n:"BrtEndListCols", f:parsenoop },
    0x015B: { n:"BrtBeginListCol", f:parsenoop },
    0x015C: { n:"BrtEndListCol", f:parsenoop },
    0x015D: { n:"BrtBeginListXmlCPr", f:parsenoop },
    0x015E: { n:"BrtEndListXmlCPr", f:parsenoop },
    0x015F: { n:"BrtListCCFmla", f:parsenoop },
    0x0160: { n:"BrtListTrFmla", f:parsenoop },
    0x0161: { n:"BrtBeginExternals", f:parsenoop },
    0x0162: { n:"BrtEndExternals", f:parsenoop },
    0x0163: { n:"BrtSupBookSrc", f:parsenoop },
    0x0165: { n:"BrtSupSelf", f:parsenoop },
    0x0166: { n:"BrtSupSame", f:parsenoop },
    0x0167: { n:"BrtSupTabs", f:parsenoop },
    0x0168: { n:"BrtBeginSupBook", f:parsenoop },
    0x0169: { n:"BrtPlaceholderName", f:parsenoop },
    0x016A: { n:"BrtExternSheet", f:parsenoop },
    0x016B: { n:"BrtExternTableStart", f:parsenoop },
    0x016C: { n:"BrtExternTableEnd", f:parsenoop },
    0x016E: { n:"BrtExternRowHdr", f:parsenoop },
    0x016F: { n:"BrtExternCellBlank", f:parsenoop },
    0x0170: { n:"BrtExternCellReal", f:parsenoop },
    0x0171: { n:"BrtExternCellBool", f:parsenoop },
    0x0172: { n:"BrtExternCellError", f:parsenoop },
    0x0173: { n:"BrtExternCellString", f:parsenoop },
    0x0174: { n:"BrtBeginEsmdx", f:parsenoop },
    0x0175: { n:"BrtEndEsmdx", f:parsenoop },
    0x0176: { n:"BrtBeginMdxSet", f:parsenoop },
    0x0177: { n:"BrtEndMdxSet", f:parsenoop },
    0x0178: { n:"BrtBeginMdxMbrProp", f:parsenoop },
    0x0179: { n:"BrtEndMdxMbrProp", f:parsenoop },
    0x017A: { n:"BrtBeginMdxKPI", f:parsenoop },
    0x017B: { n:"BrtEndMdxKPI", f:parsenoop },
    0x017C: { n:"BrtBeginEsstr", f:parsenoop },
    0x017D: { n:"BrtEndEsstr", f:parsenoop },
    0x017E: { n:"BrtBeginPRFItem", f:parsenoop },
    0x017F: { n:"BrtEndPRFItem", f:parsenoop },
    0x0180: { n:"BrtBeginPivotCacheIDs", f:parsenoop },
    0x0181: { n:"BrtEndPivotCacheIDs", f:parsenoop },
    0x0182: { n:"BrtBeginPivotCacheID", f:parsenoop },
    0x0183: { n:"BrtEndPivotCacheID", f:parsenoop },
    0x0184: { n:"BrtBeginISXVIs", f:parsenoop },
    0x0185: { n:"BrtEndISXVIs", f:parsenoop },
    0x0186: { n:"BrtBeginColInfos", f:parsenoop },
    0x0187: { n:"BrtEndColInfos", f:parsenoop },
    0x0188: { n:"BrtBeginRwBrk", f:parsenoop },
    0x0189: { n:"BrtEndRwBrk", f:parsenoop },
    0x018A: { n:"BrtBeginColBrk", f:parsenoop },
    0x018B: { n:"BrtEndColBrk", f:parsenoop },
    0x018C: { n:"BrtBrk", f:parsenoop },
    0x018D: { n:"BrtUserBookView", f:parsenoop },
    0x018E: { n:"BrtInfo", f:parsenoop },
    0x018F: { n:"BrtCUsr", f:parsenoop },
    0x0190: { n:"BrtUsr", f:parsenoop },
    0x0191: { n:"BrtBeginUsers", f:parsenoop },
    0x0193: { n:"BrtEOF", f:parsenoop },
    0x0194: { n:"BrtUCR", f:parsenoop },
    0x0195: { n:"BrtRRInsDel", f:parsenoop },
    0x0196: { n:"BrtRREndInsDel", f:parsenoop },
    0x0197: { n:"BrtRRMove", f:parsenoop },
    0x0198: { n:"BrtRREndMove", f:parsenoop },
    0x0199: { n:"BrtRRChgCell", f:parsenoop },
    0x019A: { n:"BrtRREndChgCell", f:parsenoop },
    0x019B: { n:"BrtRRHeader", f:parsenoop },
    0x019C: { n:"BrtRRUserView", f:parsenoop },
    0x019D: { n:"BrtRRRenSheet", f:parsenoop },
    0x019E: { n:"BrtRRInsertSh", f:parsenoop },
    0x019F: { n:"BrtRRDefName", f:parsenoop },
    0x01A0: { n:"BrtRRNote", f:parsenoop },
    0x01A1: { n:"BrtRRConflict", f:parsenoop },
    0x01A2: { n:"BrtRRTQSIF", f:parsenoop },
    0x01A3: { n:"BrtRRFormat", f:parsenoop },
    0x01A4: { n:"BrtRREndFormat", f:parsenoop },
    0x01A5: { n:"BrtRRAutoFmt", f:parsenoop },
    0x01A6: { n:"BrtBeginUserShViews", f:parsenoop },
    0x01A7: { n:"BrtBeginUserShView", f:parsenoop },
    0x01A8: { n:"BrtEndUserShView", f:parsenoop },
    0x01A9: { n:"BrtEndUserShViews", f:parsenoop },
    0x01AA: { n:"BrtArrFmla", f:parsenoop },
    0x01AB: { n:"BrtShrFmla", f:parsenoop },
    0x01AC: { n:"BrtTable", f:parsenoop },
    0x01AD: { n:"BrtBeginExtConnections", f:parsenoop },
    0x01AE: { n:"BrtEndExtConnections", f:parsenoop },
    0x01AF: { n:"BrtBeginPCDCalcMems", f:parsenoop },
    0x01B0: { n:"BrtEndPCDCalcMems", f:parsenoop },
    0x01B1: { n:"BrtBeginPCDCalcMem", f:parsenoop },
    0x01B2: { n:"BrtEndPCDCalcMem", f:parsenoop },
    0x01B3: { n:"BrtBeginPCDHGLevels", f:parsenoop },
    0x01B4: { n:"BrtEndPCDHGLevels", f:parsenoop },
    0x01B5: { n:"BrtBeginPCDHGLevel", f:parsenoop },
    0x01B6: { n:"BrtEndPCDHGLevel", f:parsenoop },
    0x01B7: { n:"BrtBeginPCDHGLGroups", f:parsenoop },
    0x01B8: { n:"BrtEndPCDHGLGroups", f:parsenoop },
    0x01B9: { n:"BrtBeginPCDHGLGroup", f:parsenoop },
    0x01BA: { n:"BrtEndPCDHGLGroup", f:parsenoop },
    0x01BB: { n:"BrtBeginPCDHGLGMembers", f:parsenoop },
    0x01BC: { n:"BrtEndPCDHGLGMembers", f:parsenoop },
    0x01BD: { n:"BrtBeginPCDHGLGMember", f:parsenoop },
    0x01BE: { n:"BrtEndPCDHGLGMember", f:parsenoop },
    0x01BF: { n:"BrtBeginQSI", f:parsenoop },
    0x01C0: { n:"BrtEndQSI", f:parsenoop },
    0x01C1: { n:"BrtBeginQSIR", f:parsenoop },
    0x01C2: { n:"BrtEndQSIR", f:parsenoop },
    0x01C3: { n:"BrtBeginDeletedNames", f:parsenoop },
    0x01C4: { n:"BrtEndDeletedNames", f:parsenoop },
    0x01C5: { n:"BrtBeginDeletedName", f:parsenoop },
    0x01C6: { n:"BrtEndDeletedName", f:parsenoop },
    0x01C7: { n:"BrtBeginQSIFs", f:parsenoop },
    0x01C8: { n:"BrtEndQSIFs", f:parsenoop },
    0x01C9: { n:"BrtBeginQSIF", f:parsenoop },
    0x01CA: { n:"BrtEndQSIF", f:parsenoop },
    0x01CB: { n:"BrtBeginAutoSortScope", f:parsenoop },
    0x01CC: { n:"BrtEndAutoSortScope", f:parsenoop },
    0x01CD: { n:"BrtBeginConditionalFormatting", f:parsenoop },
    0x01CE: { n:"BrtEndConditionalFormatting", f:parsenoop },
    0x01CF: { n:"BrtBeginCFRule", f:parsenoop },
    0x01D0: { n:"BrtEndCFRule", f:parsenoop },
    0x01D1: { n:"BrtBeginIconSet", f:parsenoop },
    0x01D2: { n:"BrtEndIconSet", f:parsenoop },
    0x01D3: { n:"BrtBeginDatabar", f:parsenoop },
    0x01D4: { n:"BrtEndDatabar", f:parsenoop },
    0x01D5: { n:"BrtBeginColorScale", f:parsenoop },
    0x01D6: { n:"BrtEndColorScale", f:parsenoop },
    0x01D7: { n:"BrtCFVO", f:parsenoop },
    0x01D8: { n:"BrtExternValueMeta", f:parsenoop },
    0x01D9: { n:"BrtBeginColorPalette", f:parsenoop },
    0x01DA: { n:"BrtEndColorPalette", f:parsenoop },
    0x01DB: { n:"BrtIndexedColor", f:parsenoop },
    0x01DC: { n:"BrtMargins", f:parsenoop },
    0x01DD: { n:"BrtPrintOptions", f:parsenoop },
    0x01DE: { n:"BrtPageSetup", f:parsenoop },
    0x01DF: { n:"BrtBeginHeaderFooter", f:parsenoop },
    0x01E0: { n:"BrtEndHeaderFooter", f:parsenoop },
    0x01E1: { n:"BrtBeginSXCrtFormat", f:parsenoop },
    0x01E2: { n:"BrtEndSXCrtFormat", f:parsenoop },
    0x01E3: { n:"BrtBeginSXCrtFormats", f:parsenoop },
    0x01E4: { n:"BrtEndSXCrtFormats", f:parsenoop },
    0x01E5: { n:"BrtWsFmtInfo", f:parsenoop },
    0x01E6: { n:"BrtBeginMgs", f:parsenoop },
    0x01E7: { n:"BrtEndMGs", f:parsenoop },
    0x01E8: { n:"BrtBeginMGMaps", f:parsenoop },
    0x01E9: { n:"BrtEndMGMaps", f:parsenoop },
    0x01EA: { n:"BrtBeginMG", f:parsenoop },
    0x01EB: { n:"BrtEndMG", f:parsenoop },
    0x01EC: { n:"BrtBeginMap", f:parsenoop },
    0x01ED: { n:"BrtEndMap", f:parsenoop },
    0x01EE: { n:"BrtHLink", f:parse_BrtHLink },
    0x01EF: { n:"BrtBeginDCon", f:parsenoop },
    0x01F0: { n:"BrtEndDCon", f:parsenoop },
    0x01F1: { n:"BrtBeginDRefs", f:parsenoop },
    0x01F2: { n:"BrtEndDRefs", f:parsenoop },
    0x01F3: { n:"BrtDRef", f:parsenoop },
    0x01F4: { n:"BrtBeginScenMan", f:parsenoop },
    0x01F5: { n:"BrtEndScenMan", f:parsenoop },
    0x01F6: { n:"BrtBeginSct", f:parsenoop },
    0x01F7: { n:"BrtEndSct", f:parsenoop },
    0x01F8: { n:"BrtSlc", f:parsenoop },
    0x01F9: { n:"BrtBeginDXFs", f:parsenoop },
    0x01FA: { n:"BrtEndDXFs", f:parsenoop },
    0x01FB: { n:"BrtDXF", f:parsenoop },
    0x01FC: { n:"BrtBeginTableStyles", f:parsenoop },
    0x01FD: { n:"BrtEndTableStyles", f:parsenoop },
    0x01FE: { n:"BrtBeginTableStyle", f:parsenoop },
    0x01FF: { n:"BrtEndTableStyle", f:parsenoop },
    0x0200: { n:"BrtTableStyleElement", f:parsenoop },
    0x0201: { n:"BrtTableStyleClient", f:parsenoop },
    0x0202: { n:"BrtBeginVolDeps", f:parsenoop },
    0x0203: { n:"BrtEndVolDeps", f:parsenoop },
    0x0204: { n:"BrtBeginVolType", f:parsenoop },
    0x0205: { n:"BrtEndVolType", f:parsenoop },
    0x0206: { n:"BrtBeginVolMain", f:parsenoop },
    0x0207: { n:"BrtEndVolMain", f:parsenoop },
    0x0208: { n:"BrtBeginVolTopic", f:parsenoop },
    0x0209: { n:"BrtEndVolTopic", f:parsenoop },
    0x020A: { n:"BrtVolSubtopic", f:parsenoop },
    0x020B: { n:"BrtVolRef", f:parsenoop },
    0x020C: { n:"BrtVolNum", f:parsenoop },
    0x020D: { n:"BrtVolErr", f:parsenoop },
    0x020E: { n:"BrtVolStr", f:parsenoop },
    0x020F: { n:"BrtVolBool", f:parsenoop },
    0x0210: { n:"BrtBeginCalcChain$", f:parsenoop },
    0x0211: { n:"BrtEndCalcChain$", f:parsenoop },
    0x0212: { n:"BrtBeginSortState", f:parsenoop },
    0x0213: { n:"BrtEndSortState", f:parsenoop },
    0x0214: { n:"BrtBeginSortCond", f:parsenoop },
    0x0215: { n:"BrtEndSortCond", f:parsenoop },
    0x0216: { n:"BrtBookProtection", f:parsenoop },
    0x0217: { n:"BrtSheetProtection", f:parsenoop },
    0x0218: { n:"BrtRangeProtection", f:parsenoop },
    0x0219: { n:"BrtPhoneticInfo", f:parsenoop },
    0x021A: { n:"BrtBeginECTxtWiz", f:parsenoop },
    0x021B: { n:"BrtEndECTxtWiz", f:parsenoop },
    0x021C: { n:"BrtBeginECTWFldInfoLst", f:parsenoop },
    0x021D: { n:"BrtEndECTWFldInfoLst", f:parsenoop },
    0x021E: { n:"BrtBeginECTwFldInfo", f:parsenoop },
    0x0224: { n:"BrtFileSharing", f:parsenoop },
    0x0225: { n:"BrtOleSize", f:parsenoop },
    0x0226: { n:"BrtDrawing", f:parsenoop },
    0x0227: { n:"BrtLegacyDrawing", f:parsenoop },
    0x0228: { n:"BrtLegacyDrawingHF", f:parsenoop },
    0x0229: { n:"BrtWebOpt", f:parsenoop },
    0x022A: { n:"BrtBeginWebPubItems", f:parsenoop },
    0x022B: { n:"BrtEndWebPubItems", f:parsenoop },
    0x022C: { n:"BrtBeginWebPubItem", f:parsenoop },
    0x022D: { n:"BrtEndWebPubItem", f:parsenoop },
    0x022E: { n:"BrtBeginSXCondFmt", f:parsenoop },
    0x022F: { n:"BrtEndSXCondFmt", f:parsenoop },
    0x0230: { n:"BrtBeginSXCondFmts", f:parsenoop },
    0x0231: { n:"BrtEndSXCondFmts", f:parsenoop },
    0x0232: { n:"BrtBkHim", f:parsenoop },
    0x0234: { n:"BrtColor", f:parsenoop },
    0x0235: { n:"BrtBeginIndexedColors", f:parsenoop },
    0x0236: { n:"BrtEndIndexedColors", f:parsenoop },
    0x0239: { n:"BrtBeginMRUColors", f:parsenoop },
    0x023A: { n:"BrtEndMRUColors", f:parsenoop },
    0x023C: { n:"BrtMRUColor", f:parsenoop },
    0x023D: { n:"BrtBeginDVals", f:parsenoop },
    0x023E: { n:"BrtEndDVals", f:parsenoop },
    0x0241: { n:"BrtSupNameStart", f:parsenoop },
    0x0242: { n:"BrtSupNameValueStart", f:parsenoop },
    0x0243: { n:"BrtSupNameValueEnd", f:parsenoop },
    0x0244: { n:"BrtSupNameNum", f:parsenoop },
    0x0245: { n:"BrtSupNameErr", f:parsenoop },
    0x0246: { n:"BrtSupNameSt", f:parsenoop },
    0x0247: { n:"BrtSupNameNil", f:parsenoop },
    0x0248: { n:"BrtSupNameBool", f:parsenoop },
    0x0249: { n:"BrtSupNameFmla", f:parsenoop },
    0x024A: { n:"BrtSupNameBits", f:parsenoop },
    0x024B: { n:"BrtSupNameEnd", f:parsenoop },
    0x024C: { n:"BrtEndSupBook", f:parsenoop },
    0x024D: { n:"BrtCellSmartTagProperty", f:parsenoop },
    0x024E: { n:"BrtBeginCellSmartTag", f:parsenoop },
    0x024F: { n:"BrtEndCellSmartTag", f:parsenoop },
    0x0250: { n:"BrtBeginCellSmartTags", f:parsenoop },
    0x0251: { n:"BrtEndCellSmartTags", f:parsenoop },
    0x0252: { n:"BrtBeginSmartTags", f:parsenoop },
    0x0253: { n:"BrtEndSmartTags", f:parsenoop },
    0x0254: { n:"BrtSmartTagType", f:parsenoop },
    0x0255: { n:"BrtBeginSmartTagTypes", f:parsenoop },
    0x0256: { n:"BrtEndSmartTagTypes", f:parsenoop },
    0x0257: { n:"BrtBeginSXFilters", f:parsenoop },
    0x0258: { n:"BrtEndSXFilters", f:parsenoop },
    0x0259: { n:"BrtBeginSXFILTER", f:parsenoop },
    0x025A: { n:"BrtEndSXFilter", f:parsenoop },
    0x025B: { n:"BrtBeginFills", f:parsenoop },
    0x025C: { n:"BrtEndFills", f:parsenoop },
    0x025D: { n:"BrtBeginCellWatches", f:parsenoop },
    0x025E: { n:"BrtEndCellWatches", f:parsenoop },
    0x025F: { n:"BrtCellWatch", f:parsenoop },
    0x0260: { n:"BrtBeginCRErrs", f:parsenoop },
    0x0261: { n:"BrtEndCRErrs", f:parsenoop },
    0x0262: { n:"BrtCrashRecErr", f:parsenoop },
    0x0263: { n:"BrtBeginFonts", f:parsenoop },
    0x0264: { n:"BrtEndFonts", f:parsenoop },
    0x0265: { n:"BrtBeginBorders", f:parsenoop },
    0x0266: { n:"BrtEndBorders", f:parsenoop },
    0x0267: { n:"BrtBeginFmts", f:parsenoop },
    0x0268: { n:"BrtEndFmts", f:parsenoop },
    0x0269: { n:"BrtBeginCellXFs", f:parsenoop },
    0x026A: { n:"BrtEndCellXFs", f:parsenoop },
    0x026B: { n:"BrtBeginStyles", f:parsenoop },
    0x026C: { n:"BrtEndStyles", f:parsenoop },
    0x0271: { n:"BrtBigName", f:parsenoop },
    0x0272: { n:"BrtBeginCellStyleXFs", f:parsenoop },
    0x0273: { n:"BrtEndCellStyleXFs", f:parsenoop },
    0x0274: { n:"BrtBeginComments", f:parsenoop },
    0x0275: { n:"BrtEndComments", f:parsenoop },
    0x0276: { n:"BrtBeginCommentAuthors", f:parsenoop },
    0x0277: { n:"BrtEndCommentAuthors", f:parsenoop },
    0x0278: { n:"BrtCommentAuthor", f:parse_BrtCommentAuthor },
    0x0279: { n:"BrtBeginCommentList", f:parsenoop },
    0x027A: { n:"BrtEndCommentList", f:parsenoop },
    0x027B: { n:"BrtBeginComment", f:parse_BrtBeginComment},
    0x027C: { n:"BrtEndComment", f:parsenoop },
    0x027D: { n:"BrtCommentText", f:parse_BrtCommentText },
    0x027E: { n:"BrtBeginOleObjects", f:parsenoop },
    0x027F: { n:"BrtOleObject", f:parsenoop },
    0x0280: { n:"BrtEndOleObjects", f:parsenoop },
    0x0281: { n:"BrtBeginSxrules", f:parsenoop },
    0x0282: { n:"BrtEndSxRules", f:parsenoop },
    0x0283: { n:"BrtBeginActiveXControls", f:parsenoop },
    0x0284: { n:"BrtActiveX", f:parsenoop },
    0x0285: { n:"BrtEndActiveXControls", f:parsenoop },
    0x0286: { n:"BrtBeginPCDSDTCEMembersSortBy", f:parsenoop },
    0x0288: { n:"BrtBeginCellIgnoreECs", f:parsenoop },
    0x0289: { n:"BrtCellIgnoreEC", f:parsenoop },
    0x028A: { n:"BrtEndCellIgnoreECs", f:parsenoop },
    0x028B: { n:"BrtCsProp", f:parsenoop },
    0x028C: { n:"BrtCsPageSetup", f:parsenoop },
    0x028D: { n:"BrtBeginUserCsViews", f:parsenoop },
    0x028E: { n:"BrtEndUserCsViews", f:parsenoop },
    0x028F: { n:"BrtBeginUserCsView", f:parsenoop },
    0x0290: { n:"BrtEndUserCsView", f:parsenoop },
    0x0291: { n:"BrtBeginPcdSFCIEntries", f:parsenoop },
    0x0292: { n:"BrtEndPCDSFCIEntries", f:parsenoop },
    0x0293: { n:"BrtPCDSFCIEntry", f:parsenoop },
    0x0294: { n:"BrtBeginListParts", f:parsenoop },
    0x0295: { n:"BrtListPart", f:parsenoop },
    0x0296: { n:"BrtEndListParts", f:parsenoop },
    0x0297: { n:"BrtSheetCalcProp", f:parsenoop },
    0x0298: { n:"BrtBeginFnGroup", f:parsenoop },
    0x0299: { n:"BrtFnGroup", f:parsenoop },
    0x029A: { n:"BrtEndFnGroup", f:parsenoop },
    0x029B: { n:"BrtSupAddin", f:parsenoop },
    0x029C: { n:"BrtSXTDMPOrder", f:parsenoop },
    0x029D: { n:"BrtCsProtection", f:parsenoop },
    0x029F: { n:"BrtBeginWsSortMap", f:parsenoop },
    0x02A0: { n:"BrtEndWsSortMap", f:parsenoop },
    0x02A1: { n:"BrtBeginRRSort", f:parsenoop },
    0x02A2: { n:"BrtEndRRSort", f:parsenoop },
    0x02A3: { n:"BrtRRSortItem", f:parsenoop },
    0x02A4: { n:"BrtFileSharingIso", f:parsenoop },
    0x02A5: { n:"BrtBookProtectionIso", f:parsenoop },
    0x02A6: { n:"BrtSheetProtectionIso", f:parsenoop },
    0x02A7: { n:"BrtCsProtectionIso", f:parsenoop },
    0x02A8: { n:"BrtRangeProtectionIso", f:parsenoop },
    0x0400: { n:"BrtRwDescent", f:parsenoop },
    0x0401: { n:"BrtKnownFonts", f:parsenoop },
    0x0402: { n:"BrtBeginSXTupleSet", f:parsenoop },
    0x0403: { n:"BrtEndSXTupleSet", f:parsenoop },
    0x0404: { n:"BrtBeginSXTupleSetHeader", f:parsenoop },
    0x0405: { n:"BrtEndSXTupleSetHeader", f:parsenoop },
    0x0406: { n:"BrtSXTupleSetHeaderItem", f:parsenoop },
    0x0407: { n:"BrtBeginSXTupleSetData", f:parsenoop },
    0x0408: { n:"BrtEndSXTupleSetData", f:parsenoop },
    0x0409: { n:"BrtBeginSXTupleSetRow", f:parsenoop },
    0x040A: { n:"BrtEndSXTupleSetRow", f:parsenoop },
    0x040B: { n:"BrtSXTupleSetRowItem", f:parsenoop },
    0x040C: { n:"BrtNameExt", f:parsenoop },
    0x040D: { n:"BrtPCDH14", f:parsenoop },
    0x040E: { n:"BrtBeginPCDCalcMem14", f:parsenoop },
    0x040F: { n:"BrtEndPCDCalcMem14", f:parsenoop },
    0x0410: { n:"BrtSXTH14", f:parsenoop },
    0x0411: { n:"BrtBeginSparklineGroup", f:parsenoop },
    0x0412: { n:"BrtEndSparklineGroup", f:parsenoop },
    0x0413: { n:"BrtSparkline", f:parsenoop },
    0x0414: { n:"BrtSXDI14", f:parsenoop },
    0x0415: { n:"BrtWsFmtInfoEx14", f:parsenoop },
    0x0416: { n:"BrtBeginConditionalFormatting14", f:parsenoop },
    0x0417: { n:"BrtEndConditionalFormatting14", f:parsenoop },
    0x0418: { n:"BrtBeginCFRule14", f:parsenoop },
    0x0419: { n:"BrtEndCFRule14", f:parsenoop },
    0x041A: { n:"BrtCFVO14", f:parsenoop },
    0x041B: { n:"BrtBeginDatabar14", f:parsenoop },
    0x041C: { n:"BrtBeginIconSet14", f:parsenoop },
    0x041D: { n:"BrtDVal14", f:parsenoop },
    0x041E: { n:"BrtBeginDVals14", f:parsenoop },
    0x041F: { n:"BrtColor14", f:parsenoop },
    0x0420: { n:"BrtBeginSparklines", f:parsenoop },
    0x0421: { n:"BrtEndSparklines", f:parsenoop },
    0x0422: { n:"BrtBeginSparklineGroups", f:parsenoop },
    0x0423: { n:"BrtEndSparklineGroups", f:parsenoop },
    0x0425: { n:"BrtSXVD14", f:parsenoop },
    0x0426: { n:"BrtBeginSxview14", f:parsenoop },
    0x0427: { n:"BrtEndSxview14", f:parsenoop },
    0x042A: { n:"BrtBeginPCD14", f:parsenoop },
    0x042B: { n:"BrtEndPCD14", f:parsenoop },
    0x042C: { n:"BrtBeginExtConn14", f:parsenoop },
    0x042D: { n:"BrtEndExtConn14", f:parsenoop },
    0x042E: { n:"BrtBeginSlicerCacheIDs", f:parsenoop },
    0x042F: { n:"BrtEndSlicerCacheIDs", f:parsenoop },
    0x0430: { n:"BrtBeginSlicerCacheID", f:parsenoop },
    0x0431: { n:"BrtEndSlicerCacheID", f:parsenoop },
    0x0433: { n:"BrtBeginSlicerCache", f:parsenoop },
    0x0434: { n:"BrtEndSlicerCache", f:parsenoop },
    0x0435: { n:"BrtBeginSlicerCacheDef", f:parsenoop },
    0x0436: { n:"BrtEndSlicerCacheDef", f:parsenoop },
    0x0437: { n:"BrtBeginSlicersEx", f:parsenoop },
    0x0438: { n:"BrtEndSlicersEx", f:parsenoop },
    0x0439: { n:"BrtBeginSlicerEx", f:parsenoop },
    0x043A: { n:"BrtEndSlicerEx", f:parsenoop },
    0x043B: { n:"BrtBeginSlicer", f:parsenoop },
    0x043C: { n:"BrtEndSlicer", f:parsenoop },
    0x043D: { n:"BrtSlicerCachePivotTables", f:parsenoop },
    0x043E: { n:"BrtBeginSlicerCacheOlapImpl", f:parsenoop },
    0x043F: { n:"BrtEndSlicerCacheOlapImpl", f:parsenoop },
    0x0440: { n:"BrtBeginSlicerCacheLevelsData", f:parsenoop },
    0x0441: { n:"BrtEndSlicerCacheLevelsData", f:parsenoop },
    0x0442: { n:"BrtBeginSlicerCacheLevelData", f:parsenoop },
    0x0443: { n:"BrtEndSlicerCacheLevelData", f:parsenoop },
    0x0444: { n:"BrtBeginSlicerCacheSiRanges", f:parsenoop },
    0x0445: { n:"BrtEndSlicerCacheSiRanges", f:parsenoop },
    0x0446: { n:"BrtBeginSlicerCacheSiRange", f:parsenoop },
    0x0447: { n:"BrtEndSlicerCacheSiRange", f:parsenoop },
    0x0448: { n:"BrtSlicerCacheOlapItem", f:parsenoop },
    0x0449: { n:"BrtBeginSlicerCacheSelections", f:parsenoop },
    0x044A: { n:"BrtSlicerCacheSelection", f:parsenoop },
    0x044B: { n:"BrtEndSlicerCacheSelections", f:parsenoop },
    0x044C: { n:"BrtBeginSlicerCacheNative", f:parsenoop },
    0x044D: { n:"BrtEndSlicerCacheNative", f:parsenoop },
    0x044E: { n:"BrtSlicerCacheNativeItem", f:parsenoop },
    0x044F: { n:"BrtRangeProtection14", f:parsenoop },
    0x0450: { n:"BrtRangeProtectionIso14", f:parsenoop },
    0x0451: { n:"BrtCellIgnoreEC14", f:parsenoop },
    0x0457: { n:"BrtList14", f:parsenoop },
    0x0458: { n:"BrtCFIcon", f:parsenoop },
    0x0459: { n:"BrtBeginSlicerCachesPivotCacheIDs", f:parsenoop },
    0x045A: { n:"BrtEndSlicerCachesPivotCacheIDs", f:parsenoop },
    0x045B: { n:"BrtBeginSlicers", f:parsenoop },
    0x045C: { n:"BrtEndSlicers", f:parsenoop },
    0x045D: { n:"BrtWbProp14", f:parsenoop },
    0x045E: { n:"BrtBeginSXEdit", f:parsenoop },
    0x045F: { n:"BrtEndSXEdit", f:parsenoop },
    0x0460: { n:"BrtBeginSXEdits", f:parsenoop },
    0x0461: { n:"BrtEndSXEdits", f:parsenoop },
    0x0462: { n:"BrtBeginSXChange", f:parsenoop },
    0x0463: { n:"BrtEndSXChange", f:parsenoop },
    0x0464: { n:"BrtBeginSXChanges", f:parsenoop },
    0x0465: { n:"BrtEndSXChanges", f:parsenoop },
    0x0466: { n:"BrtSXTupleItems", f:parsenoop },
    0x0468: { n:"BrtBeginSlicerStyle", f:parsenoop },
    0x0469: { n:"BrtEndSlicerStyle", f:parsenoop },
    0x046A: { n:"BrtSlicerStyleElement", f:parsenoop },
    0x046B: { n:"BrtBeginStyleSheetExt14", f:parsenoop },
    0x046C: { n:"BrtEndStyleSheetExt14", f:parsenoop },
    0x046D: { n:"BrtBeginSlicerCachesPivotCacheID", f:parsenoop },
    0x046E: { n:"BrtEndSlicerCachesPivotCacheID", f:parsenoop },
    0x046F: { n:"BrtBeginConditionalFormattings", f:parsenoop },
    0x0470: { n:"BrtEndConditionalFormattings", f:parsenoop },
    0x0471: { n:"BrtBeginPCDCalcMemExt", f:parsenoop },
    0x0472: { n:"BrtEndPCDCalcMemExt", f:parsenoop },
    0x0473: { n:"BrtBeginPCDCalcMemsExt", f:parsenoop },
    0x0474: { n:"BrtEndPCDCalcMemsExt", f:parsenoop },
    0x0475: { n:"BrtPCDField14", f:parsenoop },
    0x0476: { n:"BrtBeginSlicerStyles", f:parsenoop },
    0x0477: { n:"BrtEndSlicerStyles", f:parsenoop },
    0x0478: { n:"BrtBeginSlicerStyleElements", f:parsenoop },
    0x0479: { n:"BrtEndSlicerStyleElements", f:parsenoop },
    0x047A: { n:"BrtCFRuleExt", f:parsenoop },
    0x047B: { n:"BrtBeginSXCondFmt14", f:parsenoop },
    0x047C: { n:"BrtEndSXCondFmt14", f:parsenoop },
    0x047D: { n:"BrtBeginSXCondFmts14", f:parsenoop },
    0x047E: { n:"BrtEndSXCondFmts14", f:parsenoop },
    0x0480: { n:"BrtBeginSortCond14", f:parsenoop },
    0x0481: { n:"BrtEndSortCond14", f:parsenoop },
    0x0482: { n:"BrtEndDVals14", f:parsenoop },
    0x0483: { n:"BrtEndIconSet14", f:parsenoop },
    0x0484: { n:"BrtEndDatabar14", f:parsenoop },
    0x0485: { n:"BrtBeginColorScale14", f:parsenoop },
    0x0486: { n:"BrtEndColorScale14", f:parsenoop },
    0x0487: { n:"BrtBeginSxrules14", f:parsenoop },
    0x0488: { n:"BrtEndSxrules14", f:parsenoop },
    0x0489: { n:"BrtBeginPRule14", f:parsenoop },
    0x048A: { n:"BrtEndPRule14", f:parsenoop },
    0x048B: { n:"BrtBeginPRFilters14", f:parsenoop },
    0x048C: { n:"BrtEndPRFilters14", f:parsenoop },
    0x048D: { n:"BrtBeginPRFilter14", f:parsenoop },
    0x048E: { n:"BrtEndPRFilter14", f:parsenoop },
    0x048F: { n:"BrtBeginPRFItem14", f:parsenoop },
    0x0490: { n:"BrtEndPRFItem14", f:parsenoop },
    0x0491: { n:"BrtBeginCellIgnoreECs14", f:parsenoop },
    0x0492: { n:"BrtEndCellIgnoreECs14", f:parsenoop },
    0x0493: { n:"BrtDxf14", f:parsenoop },
    0x0494: { n:"BrtBeginDxF14s", f:parsenoop },
    0x0495: { n:"BrtEndDxf14s", f:parsenoop },
    0x0499: { n:"BrtFilter14", f:parsenoop },
    0x049A: { n:"BrtBeginCustomFilters14", f:parsenoop },
    0x049C: { n:"BrtCustomFilter14", f:parsenoop },
    0x049D: { n:"BrtIconFilter14", f:parsenoop },
    0x049E: { n:"BrtPivotCacheConnectionName", f:parsenoop },
    0x0800: { n:"BrtBeginDecoupledPivotCacheIDs", f:parsenoop },
    0x0801: { n:"BrtEndDecoupledPivotCacheIDs", f:parsenoop },
    0x0802: { n:"BrtDecoupledPivotCacheID", f:parsenoop },
    0x0803: { n:"BrtBeginPivotTableRefs", f:parsenoop },
    0x0804: { n:"BrtEndPivotTableRefs", f:parsenoop },
    0x0805: { n:"BrtPivotTableRef", f:parsenoop },
    0x0806: { n:"BrtSlicerCacheBookPivotTables", f:parsenoop },
    0x0807: { n:"BrtBeginSxvcells", f:parsenoop },
    0x0808: { n:"BrtEndSxvcells", f:parsenoop },
    0x0809: { n:"BrtBeginSxRow", f:parsenoop },
    0x080A: { n:"BrtEndSxRow", f:parsenoop },
    0x080C: { n:"BrtPcdCalcMem15", f:parsenoop },
    0x0813: { n:"BrtQsi15", f:parsenoop },
    0x0814: { n:"BrtBeginWebExtensions", f:parsenoop },
    0x0815: { n:"BrtEndWebExtensions", f:parsenoop },
    0x0816: { n:"BrtWebExtension", f:parsenoop },
    0x0817: { n:"BrtAbsPath15", f:parsenoop },
    0x0818: { n:"BrtBeginPivotTableUISettings", f:parsenoop },
    0x0819: { n:"BrtEndPivotTableUISettings", f:parsenoop },
    0x081B: { n:"BrtTableSlicerCacheIDs", f:parsenoop },
    0x081C: { n:"BrtTableSlicerCacheID", f:parsenoop },
    0x081D: { n:"BrtBeginTableSlicerCache", f:parsenoop },
    0x081E: { n:"BrtEndTableSlicerCache", f:parsenoop },
    0x081F: { n:"BrtSxFilter15", f:parsenoop },
    0x0820: { n:"BrtBeginTimelineCachePivotCacheIDs", f:parsenoop },
    0x0821: { n:"BrtEndTimelineCachePivotCacheIDs", f:parsenoop },
    0x0822: { n:"BrtTimelineCachePivotCacheID", f:parsenoop },
    0x0823: { n:"BrtBeginTimelineCacheIDs", f:parsenoop },
    0x0824: { n:"BrtEndTimelineCacheIDs", f:parsenoop },
    0x0825: { n:"BrtBeginTimelineCacheID", f:parsenoop },
    0x0826: { n:"BrtEndTimelineCacheID", f:parsenoop },
    0x0827: { n:"BrtBeginTimelinesEx", f:parsenoop },
    0x0828: { n:"BrtEndTimelinesEx", f:parsenoop },
    0x0829: { n:"BrtBeginTimelineEx", f:parsenoop },
    0x082A: { n:"BrtEndTimelineEx", f:parsenoop },
    0x082B: { n:"BrtWorkBookPr15", f:parsenoop },
    0x082C: { n:"BrtPCDH15", f:parsenoop },
    0x082D: { n:"BrtBeginTimelineStyle", f:parsenoop },
    0x082E: { n:"BrtEndTimelineStyle", f:parsenoop },
    0x082F: { n:"BrtTimelineStyleElement", f:parsenoop },
    0x0830: { n:"BrtBeginTimelineStylesheetExt15", f:parsenoop },
    0x0831: { n:"BrtEndTimelineStylesheetExt15", f:parsenoop },
    0x0832: { n:"BrtBeginTimelineStyles", f:parsenoop },
    0x0833: { n:"BrtEndTimelineStyles", f:parsenoop },
    0x0834: { n:"BrtBeginTimelineStyleElements", f:parsenoop },
    0x0835: { n:"BrtEndTimelineStyleElements", f:parsenoop },
    0x0836: { n:"BrtDxf15", f:parsenoop },
    0x0837: { n:"BrtBeginDxfs15", f:parsenoop },
    0x0838: { n:"brtEndDxfs15", f:parsenoop },
    0x0839: { n:"BrtSlicerCacheHideItemsWithNoData", f:parsenoop },
    0x083A: { n:"BrtBeginItemUniqueNames", f:parsenoop },
    0x083B: { n:"BrtEndItemUniqueNames", f:parsenoop },
    0x083C: { n:"BrtItemUniqueName", f:parsenoop },
    0x083D: { n:"BrtBeginExtConn15", f:parsenoop },
    0x083E: { n:"BrtEndExtConn15", f:parsenoop },
    0x083F: { n:"BrtBeginOledbPr15", f:parsenoop },
    0x0840: { n:"BrtEndOledbPr15", f:parsenoop },
    0x0841: { n:"BrtBeginDataFeedPr15", f:parsenoop },
    0x0842: { n:"BrtEndDataFeedPr15", f:parsenoop },
    0x0843: { n:"BrtTextPr15", f:parsenoop },
    0x0844: { n:"BrtRangePr15", f:parsenoop },
    0x0845: { n:"BrtDbCommand15", f:parsenoop },
    0x0846: { n:"BrtBeginDbTables15", f:parsenoop },
    0x0847: { n:"BrtEndDbTables15", f:parsenoop },
    0x0848: { n:"BrtDbTable15", f:parsenoop },
    0x0849: { n:"BrtBeginDataModel", f:parsenoop },
    0x084A: { n:"BrtEndDataModel", f:parsenoop },
    0x084B: { n:"BrtBeginModelTables", f:parsenoop },
    0x084C: { n:"BrtEndModelTables", f:parsenoop },
    0x084D: { n:"BrtModelTable", f:parsenoop },
    0x084E: { n:"BrtBeginModelRelationships", f:parsenoop },
    0x084F: { n:"BrtEndModelRelationships", f:parsenoop },
    0x0850: { n:"BrtModelRelationship", f:parsenoop },
    0x0851: { n:"BrtBeginECTxtWiz15", f:parsenoop },
    0x0852: { n:"BrtEndECTxtWiz15", f:parsenoop },
    0x0853: { n:"BrtBeginECTWFldInfoLst15", f:parsenoop },
    0x0854: { n:"BrtEndECTWFldInfoLst15", f:parsenoop },
    0x0855: { n:"BrtBeginECTWFldInfo15", f:parsenoop },
    0x0856: { n:"BrtFieldListActiveItem", f:parsenoop },
    0x0857: { n:"BrtPivotCacheIdVersion", f:parsenoop },
    0x0858: { n:"BrtSXDI15", f:parsenoop },
    0xFFFF: { n:"", f:parsenoop }
};

var evert_RE = evert_key(XLSBRecordEnum, 'n');

/* [MS-XLS] 2.3 Record Enumeration */
var XLSRecordEnum = {
    0x0003: { n:"BIFF2NUM", f:parse_BIFF2NUM },
    0x0004: { n:"BIFF2STR", f:parse_BIFF2STR },
    0x0006: { n:"Formula", f:parse_Formula },
    0x0009: { n:'BOF', f:parse_BOF },
    0x000a: { n:'EOF', f:parse_EOF },
    0x000c: { n:"CalcCount", f:parse_CalcCount },
    0x000d: { n:"CalcMode", f:parse_CalcMode },
    0x000e: { n:"CalcPrecision", f:parse_CalcPrecision },
    0x000f: { n:"CalcRefMode", f:parse_CalcRefMode },
    0x0010: { n:"CalcDelta", f:parse_CalcDelta },
    0x0011: { n:"CalcIter", f:parse_CalcIter },
    0x0012: { n:"Protect", f:parse_Protect },
    0x0013: { n:"Password", f:parse_Password },
    0x0014: { n:"Header", f:parse_Header },
    0x0015: { n:"Footer", f:parse_Footer },
    0x0017: { n:"ExternSheet", f:parse_ExternSheet },
    0x0018: { n:"Lbl", f:parse_Lbl },
    0x0019: { n:"WinProtect", f:parse_WinProtect },
    0x001a: { n:"VerticalPageBreaks", f:parse_VerticalPageBreaks },
    0x001b: { n:"HorizontalPageBreaks", f:parse_HorizontalPageBreaks },
    0x001c: { n:"Note", f:parse_Note },
    0x001d: { n:"Selection", f:parse_Selection },
    0x0022: { n:"Date1904", f:parse_Date1904 },
    0x0023: { n:"ExternName", f:parse_ExternName },
    0x0026: { n:"LeftMargin", f:parse_LeftMargin },
    0x0027: { n:"RightMargin", f:parse_RightMargin },
    0x0028: { n:"TopMargin", f:parse_TopMargin },
    0x0029: { n:"BottomMargin", f:parse_BottomMargin },
    0x002a: { n:"PrintRowCol", f:parse_PrintRowCol },
    0x002b: { n:"PrintGrid", f:parse_PrintGrid },
    0x002f: { n:"FilePass", f:parse_FilePass },
    0x0031: { n:"Font", f:parse_Font },
    0x0033: { n:"PrintSize", f:parse_PrintSize },
    0x003c: { n:"Continue", f:parse_Continue },
    0x003d: { n:"Window1", f:parse_Window1 },
    0x0040: { n:"Backup", f:parse_Backup },
    0x0041: { n:"Pane", f:parse_Pane },
    0x0042: { n:'CodePage', f:parse_CodePage },
    0x004d: { n:"Pls", f:parse_Pls },
    0x0050: { n:"DCon", f:parse_DCon },
    0x0051: { n:"DConRef", f:parse_DConRef },
    0x0052: { n:"DConName", f:parse_DConName },
    0x0055: { n:"DefColWidth", f:parse_DefColWidth },
    0x0059: { n:"XCT", f:parse_XCT },
    0x005a: { n:"CRN", f:parse_CRN },
    0x005b: { n:"FileSharing", f:parse_FileSharing },
    0x005c: { n:'WriteAccess', f:parse_WriteAccess },
    0x005d: { n:"Obj", f:parse_Obj },
    0x005e: { n:"Uncalced", f:parse_Uncalced },
    0x005f: { n:"CalcSaveRecalc", f:parse_CalcSaveRecalc },
    0x0060: { n:"Template", f:parse_Template },
    0x0061: { n:"Intl", f:parse_Intl },
    0x0063: { n:"ObjProtect", f:parse_ObjProtect },
    0x007d: { n:"ColInfo", f:parse_ColInfo },
    0x0080: { n:"Guts", f:parse_Guts },
    0x0081: { n:"WsBool", f:parse_WsBool },
    0x0082: { n:"GridSet", f:parse_GridSet },
    0x0083: { n:"HCenter", f:parse_HCenter },
    0x0084: { n:"VCenter", f:parse_VCenter },
    0x0085: { n:'BoundSheet8', f:parse_BoundSheet8 },
    0x0086: { n:"WriteProtect", f:parse_WriteProtect },
    0x008c: { n:"Country", f:parse_Country },
    0x008d: { n:"HideObj", f:parse_HideObj },
    0x0090: { n:"Sort", f:parse_Sort },
    0x0092: { n:"Palette", f:parse_Palette },
    0x0097: { n:"Sync", f:parse_Sync },
    0x0098: { n:"LPr", f:parse_LPr },
    0x0099: { n:"DxGCol", f:parse_DxGCol },
    0x009a: { n:"FnGroupName", f:parse_FnGroupName },
    0x009b: { n:"FilterMode", f:parse_FilterMode },
    0x009c: { n:"BuiltInFnGroupCount", f:parse_BuiltInFnGroupCount },
    0x009d: { n:"AutoFilterInfo", f:parse_AutoFilterInfo },
    0x009e: { n:"AutoFilter", f:parse_AutoFilter },
    0x00a0: { n:"Scl", f:parse_Scl },
    0x00a1: { n:"Setup", f:parse_Setup },
    0x00ae: { n:"ScenMan", f:parse_ScenMan },
    0x00af: { n:"SCENARIO", f:parse_SCENARIO },
    0x00b0: { n:"SxView", f:parse_SxView },
    0x00b1: { n:"Sxvd", f:parse_Sxvd },
    0x00b2: { n:"SXVI", f:parse_SXVI },
    0x00b4: { n:"SxIvd", f:parse_SxIvd },
    0x00b5: { n:"SXLI", f:parse_SXLI },
    0x00b6: { n:"SXPI", f:parse_SXPI },
    0x00b8: { n:"DocRoute", f:parse_DocRoute },
    0x00b9: { n:"RecipName", f:parse_RecipName },
    0x00bd: { n:"MulRk", f:parse_MulRk },
    0x00be: { n:"MulBlank", f:parse_MulBlank },
    0x00c1: { n:'Mms', f:parse_Mms },
    0x00c5: { n:"SXDI", f:parse_SXDI },
    0x00c6: { n:"SXDB", f:parse_SXDB },
    0x00c7: { n:"SXFDB", f:parse_SXFDB },
    0x00c8: { n:"SXDBB", f:parse_SXDBB },
    0x00c9: { n:"SXNum", f:parse_SXNum },
    0x00ca: { n:"SxBool", f:parse_SxBool },
    0x00cb: { n:"SxErr", f:parse_SxErr },
    0x00cc: { n:"SXInt", f:parse_SXInt },
    0x00cd: { n:"SXString", f:parse_SXString },
    0x00ce: { n:"SXDtr", f:parse_SXDtr },
    0x00cf: { n:"SxNil", f:parse_SxNil },
    0x00d0: { n:"SXTbl", f:parse_SXTbl },
    0x00d1: { n:"SXTBRGIITM", f:parse_SXTBRGIITM },
    0x00d2: { n:"SxTbpg", f:parse_SxTbpg },
    0x00d3: { n:"ObProj", f:parse_ObProj },
    0x00d5: { n:"SXStreamID", f:parse_SXStreamID },
    0x00d7: { n:"DBCell", f:parse_DBCell },
    0x00d8: { n:"SXRng", f:parse_SXRng },
    0x00d9: { n:"SxIsxoper", f:parse_SxIsxoper },
    0x00da: { n:"BookBool", f:parse_BookBool },
    0x00dc: { n:"DbOrParamQry", f:parse_DbOrParamQry },
    0x00dd: { n:"ScenarioProtect", f:parse_ScenarioProtect },
    0x00de: { n:"OleObjectSize", f:parse_OleObjectSize },
    0x00e0: { n:"XF", f:parse_XF },
    0x00e1: { n:'InterfaceHdr', f:parse_InterfaceHdr },
    0x00e2: { n:'InterfaceEnd', f:parse_InterfaceEnd },
    0x00e3: { n:"SXVS", f:parse_SXVS },
    0x00e5: { n:"MergeCells", f:parse_MergeCells },
    0x00e9: { n:"BkHim", f:parse_BkHim },
    0x00eb: { n:"MsoDrawingGroup", f:parse_MsoDrawingGroup },
    0x00ec: { n:"MsoDrawing", f:parse_MsoDrawing },
    0x00ed: { n:"MsoDrawingSelection", f:parse_MsoDrawingSelection },
    0x00ef: { n:"PhoneticInfo", f:parse_PhoneticInfo },
    0x00f0: { n:"SxRule", f:parse_SxRule },
    0x00f1: { n:"SXEx", f:parse_SXEx },
    0x00f2: { n:"SxFilt", f:parse_SxFilt },
    0x00f4: { n:"SxDXF", f:parse_SxDXF },
    0x00f5: { n:"SxItm", f:parse_SxItm },
    0x00f6: { n:"SxName", f:parse_SxName },
    0x00f7: { n:"SxSelect", f:parse_SxSelect },
    0x00f8: { n:"SXPair", f:parse_SXPair },
    0x00f9: { n:"SxFmla", f:parse_SxFmla },
    0x00fb: { n:"SxFormat", f:parse_SxFormat },
    0x00fc: { n:"SST", f:parse_SST },
    0x00fd: { n:"LabelSst", f:parse_LabelSst },
    0x00ff: { n:"ExtSST", f:parse_ExtSST },
    0x0100: { n:"SXVDEx", f:parse_SXVDEx },
    0x0103: { n:"SXFormula", f:parse_SXFormula },
    0x0122: { n:"SXDBEx", f:parse_SXDBEx },
    0x0137: { n:"RRDInsDel", f:parse_RRDInsDel },
    0x0138: { n:"RRDHead", f:parse_RRDHead },
    0x013b: { n:"RRDChgCell", f:parse_RRDChgCell },
    0x013d: { n:"RRTabId", f:parse_RRTabId },
    0x013e: { n:"RRDRenSheet", f:parse_RRDRenSheet },
    0x013f: { n:"RRSort", f:parse_RRSort },
    0x0140: { n:"RRDMove", f:parse_RRDMove },
    0x014a: { n:"RRFormat", f:parse_RRFormat },
    0x014b: { n:"RRAutoFmt", f:parse_RRAutoFmt },
    0x014d: { n:"RRInsertSh", f:parse_RRInsertSh },
    0x014e: { n:"RRDMoveBegin", f:parse_RRDMoveBegin },
    0x014f: { n:"RRDMoveEnd", f:parse_RRDMoveEnd },
    0x0150: { n:"RRDInsDelBegin", f:parse_RRDInsDelBegin },
    0x0151: { n:"RRDInsDelEnd", f:parse_RRDInsDelEnd },
    0x0152: { n:"RRDConflict", f:parse_RRDConflict },
    0x0153: { n:"RRDDefName", f:parse_RRDDefName },
    0x0154: { n:"RRDRstEtxp", f:parse_RRDRstEtxp },
    0x015f: { n:"LRng", f:parse_LRng },
    0x0160: { n:"UsesELFs", f:parse_UsesELFs },
    0x0161: { n:"DSF", f:parse_DSF },
    0x0191: { n:"CUsr", f:parse_CUsr },
    0x0192: { n:"CbUsr", f:parse_CbUsr },
    0x0193: { n:"UsrInfo", f:parse_UsrInfo },
    0x0194: { n:"UsrExcl", f:parse_UsrExcl },
    0x0195: { n:"FileLock", f:parse_FileLock },
    0x0196: { n:"RRDInfo", f:parse_RRDInfo },
    0x0197: { n:"BCUsrs", f:parse_BCUsrs },
    0x0198: { n:"UsrChk", f:parse_UsrChk },
    0x01a9: { n:"UserBView", f:parse_UserBView },
    0x01aa: { n:"UserSViewBegin", f:parse_UserSViewBegin },
    0x01ab: { n:"UserSViewEnd", f:parse_UserSViewEnd },
    0x01ac: { n:"RRDUserView", f:parse_RRDUserView },
    0x01ad: { n:"Qsi", f:parse_Qsi },
    0x01ae: { n:"SupBook", f:parse_SupBook },
    0x01af: { n:"Prot4Rev", f:parse_Prot4Rev },
    0x01b0: { n:"CondFmt", f:parse_CondFmt },
    0x01b1: { n:"CF", f:parse_CF },
    0x01b2: { n:"DVal", f:parse_DVal },
    0x01b5: { n:"DConBin", f:parse_DConBin },
    0x01b6: { n:"TxO", f:parse_TxO },
    0x01b7: { n:"RefreshAll", f:parse_RefreshAll },
    0x01b8: { n:"HLink", f:parse_HLink },
    0x01b9: { n:"Lel", f:parse_Lel },
    0x01ba: { n:"CodeName", f:parse_XLSCodeName },
    0x01bb: { n:"SXFDBType", f:parse_SXFDBType },
    0x01bc: { n:"Prot4RevPass", f:parse_Prot4RevPass },
    0x01bd: { n:"ObNoMacros", f:parse_ObNoMacros },
    0x01be: { n:"Dv", f:parse_Dv },
    0x01c0: { n:"Excel9File", f:parse_Excel9File },
    0x01c1: { n:"RecalcId", f:parse_RecalcId, r:2},
    0x01c2: { n:"EntExU2", f:parse_EntExU2 },
    0x0200: { n:"Dimensions", f:parse_Dimensions },
    0x0201: { n:"Blank", f:parse_Blank },
    0x0203: { n:"Number", f:parse_Number },
    0x0204: { n:"Label", f:parse_Label },
    0x0205: { n:"BoolErr", f:parse_BoolErr },
    0x0207: { n:"String", f:parse_String },
    0x0208: { n:'Row', f:parse_Row },
    0x020b: { n:"Index", f:parse_Index },
    0x0221: { n:"Array", f:parse_Array },
    0x0225: { n:"DefaultRowHeight", f:parse_DefaultRowHeight },
    0x0236: { n:"Table", f:parse_Table },
    0x023e: { n:"Window2", f:parse_Window2 },
    0x027e: { n:"RK", f:parse_RK },
    0x0293: { n:"Style", f:parse_Style },
    0x0418: { n:"BigName", f:parse_BigName },
    0x041e: { n:"Format", f:parse_Format },
    0x043c: { n:"ContinueBigName", f:parse_ContinueBigName },
    0x04bc: { n:"ShrFmla", f:parse_ShrFmla },
    0x0800: { n:"HLinkTooltip", f:parse_HLinkTooltip },
    0x0801: { n:"WebPub", f:parse_WebPub },
    0x0802: { n:"QsiSXTag", f:parse_QsiSXTag },
    0x0803: { n:"DBQueryExt", f:parse_DBQueryExt },
    0x0804: { n:"ExtString", f:parse_ExtString },
    0x0805: { n:"TxtQry", f:parse_TxtQry },
    0x0806: { n:"Qsir", f:parse_Qsir },
    0x0807: { n:"Qsif", f:parse_Qsif },
    0x0808: { n:"RRDTQSIF", f:parse_RRDTQSIF },
    0x0809: { n:'BOF', f:parse_BOF },
    0x080a: { n:"OleDbConn", f:parse_OleDbConn },
    0x080b: { n:"WOpt", f:parse_WOpt },
    0x080c: { n:"SXViewEx", f:parse_SXViewEx },
    0x080d: { n:"SXTH", f:parse_SXTH },
    0x080e: { n:"SXPIEx", f:parse_SXPIEx },
    0x080f: { n:"SXVDTEx", f:parse_SXVDTEx },
    0x0810: { n:"SXViewEx9", f:parse_SXViewEx9 },
    0x0812: { n:"ContinueFrt", f:parse_ContinueFrt },
    0x0813: { n:"RealTimeData", f:parse_RealTimeData },
    0x0850: { n:"ChartFrtInfo", f:parse_ChartFrtInfo },
    0x0851: { n:"FrtWrapper", f:parse_FrtWrapper },
    0x0852: { n:"StartBlock", f:parse_StartBlock },
    0x0853: { n:"EndBlock", f:parse_EndBlock },
    0x0854: { n:"StartObject", f:parse_StartObject },
    0x0855: { n:"EndObject", f:parse_EndObject },
    0x0856: { n:"CatLab", f:parse_CatLab },
    0x0857: { n:"YMult", f:parse_YMult },
    0x0858: { n:"SXViewLink", f:parse_SXViewLink },
    0x0859: { n:"PivotChartBits", f:parse_PivotChartBits },
    0x085a: { n:"FrtFontList", f:parse_FrtFontList },
    0x0862: { n:"SheetExt", f:parse_SheetExt },
    0x0863: { n:"BookExt", f:parse_BookExt, r:12},
    0x0864: { n:"SXAddl", f:parse_SXAddl },
    0x0865: { n:"CrErr", f:parse_CrErr },
    0x0866: { n:"HFPicture", f:parse_HFPicture },
    0x0867: { n:'FeatHdr', f:parse_FeatHdr },
    0x0868: { n:"Feat", f:parse_Feat },
    0x086a: { n:"DataLabExt", f:parse_DataLabExt },
    0x086b: { n:"DataLabExtContents", f:parse_DataLabExtContents },
    0x086c: { n:"CellWatch", f:parse_CellWatch },
    0x0871: { n:"FeatHdr11", f:parse_FeatHdr11 },
    0x0872: { n:"Feature11", f:parse_Feature11 },
    0x0874: { n:"DropDownObjIds", f:parse_DropDownObjIds },
    0x0875: { n:"ContinueFrt11", f:parse_ContinueFrt11 },
    0x0876: { n:"DConn", f:parse_DConn },
    0x0877: { n:"List12", f:parse_List12 },
    0x0878: { n:"Feature12", f:parse_Feature12 },
    0x0879: { n:"CondFmt12", f:parse_CondFmt12 },
    0x087a: { n:"CF12", f:parse_CF12 },
    0x087b: { n:"CFEx", f:parse_CFEx },
    0x087c: { n:"XFCRC", f:parse_XFCRC, r:12 },
    0x087d: { n:"XFExt", f:parse_XFExt, r:12 },
    0x087e: { n:"AutoFilter12", f:parse_AutoFilter12 },
    0x087f: { n:"ContinueFrt12", f:parse_ContinueFrt12 },
    0x0884: { n:"MDTInfo", f:parse_MDTInfo },
    0x0885: { n:"MDXStr", f:parse_MDXStr },
    0x0886: { n:"MDXTuple", f:parse_MDXTuple },
    0x0887: { n:"MDXSet", f:parse_MDXSet },
    0x0888: { n:"MDXProp", f:parse_MDXProp },
    0x0889: { n:"MDXKPI", f:parse_MDXKPI },
    0x088a: { n:"MDB", f:parse_MDB },
    0x088b: { n:"PLV", f:parse_PLV },
    0x088c: { n:"Compat12", f:parse_Compat12, r:12 },
    0x088d: { n:"DXF", f:parse_DXF },
    0x088e: { n:"TableStyles", f:parse_TableStyles, r:12 },
    0x088f: { n:"TableStyle", f:parse_TableStyle },
    0x0890: { n:"TableStyleElement", f:parse_TableStyleElement },
    0x0892: { n:"StyleExt", f:parse_StyleExt },
    0x0893: { n:"NamePublish", f:parse_NamePublish },
    0x0894: { n:"NameCmt", f:parse_NameCmt },
    0x0895: { n:"SortData", f:parse_SortData },
    0x0896: { n:"Theme", f:parse_Theme, r:12 },
    0x0897: { n:"GUIDTypeLib", f:parse_GUIDTypeLib },
    0x0898: { n:"FnGrp12", f:parse_FnGrp12 },
    0x0899: { n:"NameFnGrp12", f:parse_NameFnGrp12 },
    0x089a: { n:"MTRSettings", f:parse_MTRSettings, r:12 },
    0x089b: { n:"CompressPictures", f:parse_CompressPictures },
    0x089c: { n:"HeaderFooter", f:parse_HeaderFooter },
    0x089d: { n:"CrtLayout12", f:parse_CrtLayout12 },
    0x089e: { n:"CrtMlFrt", f:parse_CrtMlFrt },
    0x089f: { n:"CrtMlFrtContinue", f:parse_CrtMlFrtContinue },
    0x08a3: { n:"ForceFullCalculation", f:parse_ForceFullCalculation },
    0x08a4: { n:"ShapePropsStream", f:parse_ShapePropsStream },
    0x08a5: { n:"TextPropsStream", f:parse_TextPropsStream },
    0x08a6: { n:"RichTextStream", f:parse_RichTextStream },
    0x08a7: { n:"CrtLayout12A", f:parse_CrtLayout12A },
    0x1001: { n:"Units", f:parse_Units },
    0x1002: { n:"Chart", f:parse_Chart },
    0x1003: { n:"Series", f:parse_Series },
    0x1006: { n:"DataFormat", f:parse_DataFormat },
    0x1007: { n:"LineFormat", f:parse_LineFormat },
    0x1009: { n:"MarkerFormat", f:parse_MarkerFormat },
    0x100a: { n:"AreaFormat", f:parse_AreaFormat },
    0x100b: { n:"PieFormat", f:parse_PieFormat },
    0x100c: { n:"AttachedLabel", f:parse_AttachedLabel },
    0x100d: { n:"SeriesText", f:parse_SeriesText },
    0x1014: { n:"ChartFormat", f:parse_ChartFormat },
    0x1015: { n:"Legend", f:parse_Legend },
    0x1016: { n:"SeriesList", f:parse_SeriesList },
    0x1017: { n:"Bar", f:parse_Bar },
    0x1018: { n:"Line", f:parse_Line },
    0x1019: { n:"Pie", f:parse_Pie },
    0x101a: { n:"Area", f:parse_Area },
    0x101b: { n:"Scatter", f:parse_Scatter },
    0x101c: { n:"CrtLine", f:parse_CrtLine },
    0x101d: { n:"Axis", f:parse_Axis },
    0x101e: { n:"Tick", f:parse_Tick },
    0x101f: { n:"ValueRange", f:parse_ValueRange },
    0x1020: { n:"CatSerRange", f:parse_CatSerRange },
    0x1021: { n:"AxisLine", f:parse_AxisLine },
    0x1022: { n:"CrtLink", f:parse_CrtLink },
    0x1024: { n:"DefaultText", f:parse_DefaultText },
    0x1025: { n:"Text", f:parse_Text },
    0x1026: { n:"FontX", f:parse_FontX },
    0x1027: { n:"ObjectLink", f:parse_ObjectLink },
    0x1032: { n:"Frame", f:parse_Frame },
    0x1033: { n:"Begin", f:parse_Begin },
    0x1034: { n:"End", f:parse_End },
    0x1035: { n:"PlotArea", f:parse_PlotArea },
    0x103a: { n:"Chart3d", f:parse_Chart3d },
    0x103c: { n:"PicF", f:parse_PicF },
    0x103d: { n:"DropBar", f:parse_DropBar },
    0x103e: { n:"Radar", f:parse_Radar },
    0x103f: { n:"Surf", f:parse_Surf },
    0x1040: { n:"RadarArea", f:parse_RadarArea },
    0x1041: { n:"AxisParent", f:parse_AxisParent },
    0x1043: { n:"LegendException", f:parse_LegendException },
    0x1044: { n:"ShtProps", f:parse_ShtProps },
    0x1045: { n:"SerToCrt", f:parse_SerToCrt },
    0x1046: { n:"AxesUsed", f:parse_AxesUsed },
    0x1048: { n:"SBaseRef", f:parse_SBaseRef },
    0x104a: { n:"SerParent", f:parse_SerParent },
    0x104b: { n:"SerAuxTrend", f:parse_SerAuxTrend },
    0x104e: { n:"IFmtRecord", f:parse_IFmtRecord },
    0x104f: { n:"Pos", f:parse_Pos },
    0x1050: { n:"AlRuns", f:parse_AlRuns },
    0x1051: { n:"BRAI", f:parse_BRAI },
    0x105b: { n:"SerAuxErrBar", f:parse_SerAuxErrBar },
    0x105c: { n:"ClrtClient", f:parse_ClrtClient },
    0x105d: { n:"SerFmt", f:parse_SerFmt },
    0x105f: { n:"Chart3DBarShape", f:parse_Chart3DBarShape },
    0x1060: { n:"Fbi", f:parse_Fbi },
    0x1061: { n:"BopPop", f:parse_BopPop },
    0x1062: { n:"AxcExt", f:parse_AxcExt },
    0x1063: { n:"Dat", f:parse_Dat },
    0x1064: { n:"PlotGrowth", f:parse_PlotGrowth },
    0x1065: { n:"SIIndex", f:parse_SIIndex },
    0x1066: { n:"GelFrame", f:parse_GelFrame },
    0x1067: { n:"BopPopCustom", f:parse_BopPopCustom },
    0x1068: { n:"Fbi2", f:parse_Fbi2 },

    /* These are specified in an older version of the spec */
    0x0016: { n:"ExternCount", f:parsenoop },
    0x007e: { n:"RK", f:parsenoop }, /* Not necessarily same as 0x027e */
    0x007f: { n:"ImData", f:parsenoop },
    0x0087: { n:"Addin", f:parsenoop },
    0x0088: { n:"Edg", f:parsenoop },
    0x0089: { n:"Pub", f:parsenoop },
    0x0091: { n:"Sub", f:parsenoop },
    0x0094: { n:"LHRecord", f:parsenoop },
    0x0095: { n:"LHNGraph", f:parsenoop },
    0x0096: { n:"Sound", f:parsenoop },
    0x00a9: { n:"CoordList", f:parsenoop },
    0x00ab: { n:"GCW", f:parsenoop },
    0x00bc: { n:"ShrFmla", f:parsenoop }, /* Not necessarily same as 0x04bc */
    0x00c2: { n:"AddMenu", f:parsenoop },
    0x00c3: { n:"DelMenu", f:parsenoop },
    0x00d6: { n:"RString", f:parsenoop },
    0x00df: { n:"UDDesc", f:parsenoop },
    0x00ea: { n:"TabIdConf", f:parsenoop },
    0x0162: { n:"XL5Modify", f:parsenoop },
    0x01a5: { n:"FileSharing2", f:parsenoop },
    0x0218: { n:"Name", f:parsenoop },
    0x0223: { n:"ExternName", f:parse_ExternName },
    0x0231: { n:"Font", f:parsenoop },
    0x0406: { n:"Formula", f:parse_Formula },
    0x086d: { n:"FeatInfo", f:parsenoop },
    0x0873: { n:"FeatInfo11", f:parsenoop },
    0x0881: { n:"SXAddl12", f:parsenoop },
    0x08c0: { n:"AutoWebPub", f:parsenoop },
    0x08c1: { n:"ListObj", f:parsenoop },
    0x08c2: { n:"ListField", f:parsenoop },
    0x08c3: { n:"ListDV", f:parsenoop },
    0x08c4: { n:"ListCondFmt", f:parsenoop },
    0x08c5: { n:"ListCF", f:parsenoop },
    0x08c6: { n:"FMQry", f:parsenoop },
    0x08c7: { n:"FMSQry", f:parsenoop },
    0x08c8: { n:"PLV", f:parsenoop }, /* supposedly PLV for Excel 11 */
    0x08c9: { n:"LnExt", f:parsenoop },
    0x08ca: { n:"MkrExt", f:parsenoop },
    0x08cb: { n:"CrtCoopt", f:parsenoop },

    0x0000: {}
};


/* Helper function to call out to ODS parser */
function parse_ods(zip, opts) {
    if(typeof module !== "undefined" && typeof require !== 'undefined' && typeof ODS === 'undefined') ODS = require('./od' + 's');
    if(typeof ODS === 'undefined' || !ODS.parse_ods) throw new Error("Unsupported ODS");
    return ODS.parse_ods(zip, opts);
}
function fix_opts_func(defaults) {
    return function fix_opts(opts) {
        for(var i = 0; i != defaults.length; ++i) {
            var d = defaults[i];
            if(opts[d[0]] === undefined) opts[d[0]] = d[1];
            if(d[2] === 'n') opts[d[0]] = Number(opts[d[0]]);
        }
    };
}

var fix_read_opts = fix_opts_func([
    ['cellNF', false], /* emit cell number format string as .z */
    ['cellHTML', true], /* emit html string as .h */
    ['cellFormula', true], /* emit formulae as .f */
    ['cellStyles', false], /* emits style/theme as .s */
    ['cellDates', false], /* emit date cells with type `d` */

    ['sheetStubs', false], /* emit empty cells */
    ['sheetRows', 0, 'n'], /* read n rows (0 = read all rows) */

    ['bookDeps', false], /* parse calculation chains */
    ['bookSheets', false], /* only try to get sheet names (no Sheets) */
    ['bookProps', false], /* only try to get properties (no Sheets) */
    ['bookFiles', false], /* include raw file structure (keys, files, cfb) */
    ['bookVBA', false], /* include vba raw data (vbaraw) */

    ['password',''], /* password */
    ['WTF', false] /* WTF mode (throws errors) */
]);


var fix_write_opts = fix_opts_func([
    ['cellDates', false], /* write date cells with type `d` */

    ['bookSST', false], /* Generate Shared String Table */

    ['bookType', 'xlsx'], /* Type of workbook (xlsx/m/b) */

    ['WTF', false] /* WTF mode (throws errors) */
]);
function safe_parse_wbrels(wbrels, sheets) {
    if(!wbrels) return 0;
    try {
        wbrels = sheets.map(function pwbr(w) { return [w.name, wbrels['!id'][w.id].Target]; });
    } catch(e) { return null; }
    return !wbrels || wbrels.length === 0 ? null : wbrels;
}

function safe_parse_ws(zip, path, relsPath, sheet, sheetRels, sheets, opts) {
    try {
        sheetRels[sheet]=parse_rels(getzipdata(zip, relsPath, true), path);
        sheets[sheet]=parse_ws(getzipdata(zip, path),path,opts,sheetRels[sheet]);
    } catch(e) { if(opts.WTF) throw e; }
}

var nodirs = function nodirs(x){return x.substr(-1) != '/';};
function parse_zip(zip, opts) {
    make_ssf(SSF);
    opts = opts || {};
    fix_read_opts(opts);
    reset_cp();

    /* OpenDocument Part 3 Section 2.2.1 OpenDocument Package */
    if(safegetzipfile(zip, 'META-INF/manifest.xml')) return parse_ods(zip, opts);

    var entries = keys(zip.files).filter(nodirs).sort();
    var dir = parse_ct(getzipdata(zip, '[Content_Types].xml'), opts);
    var xlsb = false;
    var sheets, binname;
    if(dir.workbooks.length === 0) {
        binname = "xl/workbook.xml";
        if(getzipdata(zip,binname, true)) dir.workbooks.push(binname);
    }
    if(dir.workbooks.length === 0) {
        binname = "xl/workbook.bin";
        if(!getzipfile(zip,binname,true)) throw new Error("Could not find workbook");
        dir.workbooks.push(binname);
        xlsb = true;
    }
    if(dir.workbooks[0].substr(-3) == "bin") xlsb = true;
    if(xlsb) set_cp(1200);

    if(!opts.bookSheets && !opts.bookProps) {
        strs = [];
        if(dir.sst) strs=parse_sst(getzipdata(zip, dir.sst.replace(/^\//,'')), dir.sst, opts);

        styles = {};
        if(dir.style) styles = parse_sty(getzipdata(zip, dir.style.replace(/^\//,'')),dir.style, opts);

        themes = {};
        if(opts.cellStyles && dir.themes.length) themes = parse_theme(getzipdata(zip, dir.themes[0].replace(/^\//,''), true),dir.themes[0], opts);
    }

    var wb = parse_wb(getzipdata(zip, dir.workbooks[0].replace(/^\//,'')), dir.workbooks[0], opts);

    var props = {}, propdata = "";

    if(dir.coreprops.length !== 0) {
        propdata = getzipdata(zip, dir.coreprops[0].replace(/^\//,''), true);
        if(propdata) props = parse_core_props(propdata);
        if(dir.extprops.length !== 0) {
            propdata = getzipdata(zip, dir.extprops[0].replace(/^\//,''), true);
            if(propdata) parse_ext_props(propdata, props);
        }
    }

    var custprops = {};
    if(!opts.bookSheets || opts.bookProps) {
        if (dir.custprops.length !== 0) {
            propdata = getzipdata(zip, dir.custprops[0].replace(/^\//,''), true);
            if(propdata) custprops = parse_cust_props(propdata, opts);
        }
    }

    var out = {};
    if(opts.bookSheets || opts.bookProps) {
        if(props.Worksheets && props.SheetNames.length > 0) sheets=props.SheetNames;
        else if(wb.Sheets) sheets = wb.Sheets.map(function pluck(x){ return x.name; });
        if(opts.bookProps) { out.Props = props; out.Custprops = custprops; }
        if(typeof sheets !== 'undefined') out.SheetNames = sheets;
        if(opts.bookSheets ? out.SheetNames : opts.bookProps) return out;
    }
    sheets = {};

    var deps = {};
    if(opts.bookDeps && dir.calcchain) deps=parse_cc(getzipdata(zip, dir.calcchain.replace(/^\//,'')),dir.calcchain,opts);

    var i=0;
    var sheetRels = {};
    var path, relsPath;
    if(!props.Worksheets) {
        var wbsheets = wb.Sheets;
        props.Worksheets = wbsheets.length;
        props.SheetNames = [];
        for(var j = 0; j != wbsheets.length; ++j) {
            props.SheetNames[j] = wbsheets[j].name;
        }
    }

    var wbext = xlsb ? "bin" : "xml";
    var wbrelsfile = 'xl/_rels/workbook.' + wbext + '.rels';
    var wbrels = parse_rels(getzipdata(zip, wbrelsfile, true), wbrelsfile);
    if(wbrels) wbrels = safe_parse_wbrels(wbrels, wb.Sheets);
    /* Numbers iOS hack */
    var nmode = (getzipdata(zip,"xl/worksheets/sheet.xml",true))?1:0;
    for(i = 0; i != props.Worksheets; ++i) {
        if(wbrels) path = 'xl/' + (wbrels[i][1]).replace(/[\/]?xl\//, "");
        else {
            path = 'xl/worksheets/sheet'+(i+1-nmode)+"." + wbext;
            path = path.replace(/sheet0\./,"sheet.");
        }
        relsPath = path.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels");
        safe_parse_ws(zip, path, relsPath, props.SheetNames[i], sheetRels, sheets, opts);
    }

    if(dir.comments) parse_comments(zip, dir.comments, sheets, sheetRels, opts);

    out = {
        Directory: dir,
        Workbook: wb,
        Props: props,
        Custprops: custprops,
        Deps: deps,
        Sheets: sheets,
        SheetNames: props.SheetNames,
        Strings: strs,
        Styles: styles,
        Themes: themes,
        SSF: SSF.get_table()
    };
    if(opts.bookFiles) {
        out.keys = entries;
        out.files = zip.files;
    }
    if(opts.bookVBA) {
        if(dir.vba.length > 0) out.vbaraw = getzipdata(zip,dir.vba[0],true);
        else if(dir.defaults.bin === 'application/vnd.ms-office.vbaProject') out.vbaraw = getzipdata(zip,'xl/vbaProject.bin',true);
    }
    return out;
}
function add_rels(rels, rId, f, type, relobj) {
    if(!relobj) relobj = {};
    if(!rels['!id']) rels['!id'] = {};
    relobj.Id = 'rId' + rId;
    relobj.Type = type;
    relobj.Target = f;
    if(rels['!id'][relobj.Id]) throw new Error("Cannot rewrite rId " + rId);
    rels['!id'][relobj.Id] = relobj;
    rels[('/' + relobj.Target).replace("//","/")] = relobj;
}

function write_zip(wb, opts) {
    if(wb && !wb.SSF) {
        wb.SSF = SSF.get_table();
    }
    if(wb && wb.SSF) {
        make_ssf(SSF); SSF.load_table(wb.SSF);
        opts.revssf = evert_num(wb.SSF); opts.revssf[wb.SSF[65535]] = 0;
    }
    opts.rels = {}; opts.wbrels = {};
    opts.Strings = []; opts.Strings.Count = 0; opts.Strings.Unique = 0;
    var wbext = opts.bookType == "xlsb" ? "bin" : "xml";
    var ct = { workbooks: [], sheets: [], calcchains: [], themes: [], styles: [],
        coreprops: [], extprops: [], custprops: [], strs:[], comments: [], vba: [],
        TODO:[], rels:[], xmlns: "" };
    fix_write_opts(opts = opts || {});
    var zip = new jszip();
    var f = "", rId = 0;

    opts.cellXfs = [];
    get_cell_style(opts.cellXfs, {}, {revssf:{"General":0}});

    f = "docProps/core.xml";
    zip.file(f, write_core_props(wb.Props, opts));
    ct.coreprops.push(f);
    add_rels(opts.rels, 2, f, RELS.CORE_PROPS);

    f = "docProps/app.xml";
    if(!wb.Props) wb.Props = {};
    wb.Props.SheetNames = wb.SheetNames;
    wb.Props.Worksheets = wb.SheetNames.length;
    zip.file(f, write_ext_props(wb.Props, opts));
    ct.extprops.push(f);
    add_rels(opts.rels, 3, f, RELS.EXT_PROPS);

    if(wb.Custprops !== wb.Props && keys(wb.Custprops||{}).length > 0) {
        f = "docProps/custom.xml";
        zip.file(f, write_cust_props(wb.Custprops, opts));
        ct.custprops.push(f);
        add_rels(opts.rels, 4, f, RELS.CUST_PROPS);
    }

    f = "xl/workbook." + wbext;
    zip.file(f, write_wb(wb, f, opts));
    ct.workbooks.push(f);
    add_rels(opts.rels, 1, f, RELS.WB);

    for(rId=1;rId <= wb.SheetNames.length; ++rId) {
        f = "xl/worksheets/sheet" + rId + "." + wbext;
        zip.file(f, write_ws(rId-1, f, opts, wb));
        ct.sheets.push(f);
        add_rels(opts.wbrels, rId, "worksheets/sheet" + rId + "." + wbext, RELS.WS);
    }

    if(opts.Strings != null && opts.Strings.length > 0) {
        f = "xl/sharedStrings." + wbext;
        zip.file(f, write_sst(opts.Strings, f, opts));
        ct.strs.push(f);
        add_rels(opts.wbrels, ++rId, "sharedStrings." + wbext, RELS.SST);
    }

    /* TODO: something more intelligent with themes */

    f = "xl/theme/theme1.xml";
    zip.file(f, write_theme());
    ct.themes.push(f);
    add_rels(opts.wbrels, ++rId, "theme/theme1.xml", RELS.THEME);

    /* TODO: something more intelligent with styles */

    f = "xl/styles." + wbext;
    zip.file(f, write_sty(wb, f, opts));
    ct.styles.push(f);
    add_rels(opts.wbrels, ++rId, "styles." + wbext, RELS.STY);

    zip.file("[Content_Types].xml", write_ct(ct, opts));
    zip.file('_rels/.rels', write_rels(opts.rels));
    zip.file('xl/_rels/workbook.' + wbext + '.rels', write_rels(opts.wbrels));
    return zip;
}
function firstbyte(f,o) {
    switch((o||{}).type || "base64") {
        case 'buffer': return f[0];
        case 'base64': return Base64.decode(f.substr(0,12)).charCodeAt(0);
        case 'binary': return f.charCodeAt(0);
        case 'array': return f[0];
        default: throw new Error("Unrecognized type " + o.type);
    }
}

function read_zip(data, opts) {
    var zip, d = data;
    var o = opts||{};
    if(!o.type) o.type = (has_buf && Buffer.isBuffer(data)) ? "buffer" : "base64";
    switch(o.type) {
        case "base64": zip = new jszip(d, { base64:true }); break;
        case "binary": case "array": zip = new jszip(d, { base64:false }); break;
        case "buffer": zip = new jszip(d); break;
        case "file": zip=new jszip(d=_fs.readFileSync(data)); break;
        default: throw new Error("Unrecognized type " + o.type);
    }
    return parse_zip(zip, o);
}

function readSync(data, opts) {
    var zip, d = data, isfile = false, n;
    var o = opts||{};
    if(!o.type) o.type = (has_buf && Buffer.isBuffer(data)) ? "buffer" : "base64";
    if(o.type == "file") { isfile = true; o.type = "buffer"; d = _fs.readFileSync(data); }
    switch((n = firstbyte(d, o))) {
        case 0xD0:
            if(isfile) o.type = "file";
            return parse_xlscfb(CFB.read(data, o), o);
        case 0x09: return parse_xlscfb(s2a(o.type === 'base64' ? Base64.decode(data) : data), o);
        case 0x3C: return parse_xlml(d, o);
        case 0x50:
            if(isfile) o.type = "file";
            return read_zip(data, opts);
        default: throw new Error("Unsupported file " + n);
    }
}

function readFileSync(data, opts) {
    var o = opts||{}; o.type = 'file';
    return readSync(data, o);
}
function write_zip_type(wb, opts) {
    var o = opts||{};
    var z = write_zip(wb, o);
    switch(o.type) {
        case "base64": return z.generate({type:"base64"});
        case "binary": return z.generate({type:"string"});
        case "buffer": return z.generate({type:"nodebuffer"});
        case "file": return _fs.writeFileSync(o.file, z.generate({type:"nodebuffer"}));
        default: throw new Error("Unrecognized type " + o.type);
    }
}

function writeSync(wb, opts) {
    var o = opts||{};
    switch(o.bookType) {
        case 'xml': return write_xlml(wb, o);
        default: return write_zip_type(wb, o);
    }
}

function writeFileSync(wb, filename, opts) {
    var o = opts||{}; o.type = 'file';
    o.file = filename;
    switch(o.file.substr(-5).toLowerCase()) {
        case '.xlsx': o.bookType = 'xlsx'; break;
        case '.xlsm': o.bookType = 'xlsm'; break;
        case '.xlsb': o.bookType = 'xlsb'; break;
    default: switch(o.file.substr(-4).toLowerCase()) {
        case '.xls': o.bookType = 'xls'; break;
        case '.xml': o.bookType = 'xml'; break;
    }}
    return writeSync(wb, o);
}

function decode_row(rowstr) { return parseInt(unfix_row(rowstr),10) - 1; }
function encode_row(row) { return "" + (row + 1); }
function fix_row(cstr) { return cstr.replace(/([A-Z]|^)(\d+)$/,"$1$$$2"); }
function unfix_row(cstr) { return cstr.replace(/\$(\d+)$/,"$1"); }

function decode_col(colstr) { var c = unfix_col(colstr), d = 0, i = 0; for(; i !== c.length; ++i) d = 26*d + c.charCodeAt(i) - 64; return d - 1; }
function encode_col(col) { var s=""; for(++col; col; col=Math.floor((col-1)/26)) s = String.fromCharCode(((col-1)%26) + 65) + s; return s; }
function fix_col(cstr) { return cstr.replace(/^([A-Z])/,"$$$1"); }
function unfix_col(cstr) { return cstr.replace(/^\$([A-Z])/,"$1"); }

function split_cell(cstr) { return cstr.replace(/(\$?[A-Z]*)(\$?\d*)/,"$1,$2").split(","); }
function decode_cell(cstr) { var splt = split_cell(cstr); return { c:decode_col(splt[0]), r:decode_row(splt[1]) }; }
function encode_cell(cell) { return encode_col(cell.c) + encode_row(cell.r); }
function fix_cell(cstr) { return fix_col(fix_row(cstr)); }
function unfix_cell(cstr) { return unfix_col(unfix_row(cstr)); }
function decode_range(range) { var x =range.split(":").map(decode_cell); return {s:x[0],e:x[x.length-1]}; }
function encode_range(cs,ce) {
    if(ce === undefined || typeof ce === 'number') return encode_range(cs.s, cs.e);
    if(typeof cs !== 'string') cs = encode_cell(cs); if(typeof ce !== 'string') ce = encode_cell(ce);
    return cs == ce ? cs : cs + ":" + ce;
}

function safe_decode_range(range) {
    var o = {s:{c:0,r:0},e:{c:0,r:0}};
    var idx = 0, i = 0, cc = 0;
    var len = range.length;
    for(idx = 0; i < len; ++i) {
        if((cc=range.charCodeAt(i)-64) < 1 || cc > 26) break;
        idx = 26*idx + cc;
    }
    o.s.c = --idx;

    for(idx = 0; i < len; ++i) {
        if((cc=range.charCodeAt(i)-48) < 0 || cc > 9) break;
        idx = 10*idx + cc;
    }
    o.s.r = --idx;

    if(i === len || range.charCodeAt(++i) === 58) { o.e.c=o.s.c; o.e.r=o.s.r; return o; }

    for(idx = 0; i != len; ++i) {
        if((cc=range.charCodeAt(i)-64) < 1 || cc > 26) break;
        idx = 26*idx + cc;
    }
    o.e.c = --idx;

    for(idx = 0; i != len; ++i) {
        if((cc=range.charCodeAt(i)-48) < 0 || cc > 9) break;
        idx = 10*idx + cc;
    }
    o.e.r = --idx;
    return o;
}

function safe_format_cell(cell, v) {
    if(cell.z !== undefined) try { return (cell.w = SSF.format(cell.z, v)); } catch(e) { }
    if(!cell.XF) return v;
    try { return (cell.w = SSF.format(cell.XF.ifmt||0, v)); } catch(e) { return ''+v; }
}

function format_cell(cell, v) {
    if(cell == null || cell.t == null) return "";
    if(cell.w !== undefined) return cell.w;
    if(v === undefined) return safe_format_cell(cell, cell.v);
    return safe_format_cell(cell, v);
}

function sheet_to_json(sheet, opts){
    var val, row, range, header = 0, offset = 1, r, hdr = [], isempty, R, C, v;
    var o = opts != null ? opts : {};
    var raw = o.raw;
    if(sheet == null || sheet["!ref"] == null) return [];
    range = o.range !== undefined ? o.range : sheet["!ref"];
    if(o.header === 1) header = 1;
    else if(o.header === "A") header = 2;
    else if(Array.isArray(o.header)) header = 3;
    switch(typeof range) {
        case 'string': r = safe_decode_range(range); break;
        case 'number': r = safe_decode_range(sheet["!ref"]); r.s.r = range; break;
        default: r = range;
    }
    if(header > 0) offset = 0;
    var rr = encode_row(r.s.r);
    var cols = new Array(r.e.c-r.s.c+1);
    var out = new Array(r.e.r-r.s.r-offset+1);
    var outi = 0;
    for(C = r.s.c; C <= r.e.c; ++C) {
        cols[C] = encode_col(C);
        val = sheet[cols[C] + rr];
        switch(header) {
            case 1: hdr[C] = C; break;
            case 2: hdr[C] = cols[C]; break;
            case 3: hdr[C] = o.header[C - r.s.c]; break;
            default:
                if(val === undefined) continue;
                hdr[C] = format_cell(val);
        }
    }

    for (R = r.s.r + offset; R <= r.e.r; ++R) {
        rr = encode_row(R);
        isempty = true;
        if(header === 1) row = [];
        else {
            row = {};
            if(Object.defineProperty) Object.defineProperty(row, '__rowNum__', {value:R, enumerable:false});
            else row.__rowNum__ = R;
        }
        for (C = r.s.c; C <= r.e.c; ++C) {
            val = sheet[cols[C] + rr];
            if(val === undefined || val.t === undefined) continue;
            v = val.v;
            switch(val.t){
                case 'e': continue;
                case 's': break;
                case 'b': case 'n': break;
                default: throw 'unrecognized type ' + val.t;
            }
            if(v !== undefined) {
                row[hdr[C]] = raw ? v : format_cell(val,v);
                isempty = false;
            }
        }
        if(isempty === false || header === 1) out[outi++] = row;
    }
    out.length = outi;
    return out;
}

function sheet_to_row_object_array(sheet, opts) { return sheet_to_json(sheet, opts != null ? opts : {}); }

function sheet_to_csv(sheet, opts) {
    var out = "", txt = "", qreg = /"/g;
    var o = opts == null ? {} : opts;
    if(sheet == null || sheet["!ref"] == null) return "";
    var r = safe_decode_range(sheet["!ref"]);
    var FS = o.FS !== undefined ? o.FS : ",", fs = FS.charCodeAt(0);
    var RS = o.RS !== undefined ? o.RS : "\n", rs = RS.charCodeAt(0);
    var row = "", rr = "", cols = [];
    var i = 0, cc = 0, val;
    var R = 0, C = 0;
    for(C = r.s.c; C <= r.e.c; ++C) cols[C] = encode_col(C);
    for(R = r.s.r; R <= r.e.r; ++R) {
        row = "";
        rr = encode_row(R);
        for(C = r.s.c; C <= r.e.c; ++C) {
            val = sheet[cols[C] + rr];
            txt = val !== undefined ? ''+format_cell(val) : "";
            for(i = 0, cc = 0; i !== txt.length; ++i) if((cc = txt.charCodeAt(i)) === fs || cc === rs || cc === 34) {
                txt = "\"" + txt.replace(qreg, '""') + "\""; break; }
            row += (C === r.s.c ? "" : FS) + txt;
        }
        out += row + RS;
    }
    return out;
}
var make_csv = sheet_to_csv;

function sheet_to_formulae(sheet) {
    var cmds, y = "", x, val="";
    if(sheet == null || sheet["!ref"] == null) return "";
    var r = safe_decode_range(sheet['!ref']), rr = "", cols = [], C;
    cmds = new Array((r.e.r-r.s.r+1)*(r.e.c-r.s.c+1));
    var i = 0;
    for(C = r.s.c; C <= r.e.c; ++C) cols[C] = encode_col(C);
    for(var R = r.s.r; R <= r.e.r; ++R) {
        rr = encode_row(R);
        for(C = r.s.c; C <= r.e.c; ++C) {
            y = cols[C] + rr;
            x = sheet[y];
            val = "";
            if(x === undefined) continue;
            if(x.f != null) val = x.f;
            else if(x.w !== undefined) val = "'" + x.w;
            else if(x.v === undefined) continue;
            else val = ""+x.v;
            cmds[i++] = y + "=" + val;
        }
    }
    cmds.length = i;
    return cmds;
}

var utils = {
    encode_col: encode_col,
    encode_row: encode_row,
    encode_cell: encode_cell,
    encode_range: encode_range,
    decode_col: decode_col,
    decode_row: decode_row,
    split_cell: split_cell,
    decode_cell: decode_cell,
    decode_range: decode_range,
    format_cell: format_cell,
    get_formulae: sheet_to_formulae,
    make_csv: sheet_to_csv,
    make_json: sheet_to_json,
    make_formulae: sheet_to_formulae,
    sheet_to_csv: sheet_to_csv,
    sheet_to_json: sheet_to_json,
    sheet_to_formulae: sheet_to_formulae,
    sheet_to_row_object_array: sheet_to_row_object_array
};
XLSX.parse_xlscfb = parse_xlscfb;
XLSX.parse_zip = parse_zip;
XLSX.read = readSync; //xlsread
XLSX.readFile = readFileSync; //readFile
XLSX.readFileSync = readFileSync;
XLSX.write = writeSync;
XLSX.writeFile = writeFileSync;
XLSX.writeFileSync = writeFileSync;
XLSX.utils = utils;
XLSX.CFB = CFB;
XLSX.SSF = SSF;
})(typeof exports !== 'undefined' ? exports : XLSX);
var XLS = XLSX;


 /* TAPS specific JS */
var X = XLSX;

function to_csv(workbook) {
    var result = [];
    workbook.SheetNames.forEach(function(sheetName) {
        var csv = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);
        if(csv.length > 0){
            result.push("SHEET: " + sheetName);
            result.push("");
            result.push(csv);
        }
    });
    return result.join("\n");
}

function to_json(workbook) {
    var result = {};
    workbook.SheetNames.forEach(function(sheetName) {
        var headers = [];
        var sheet = workbook.Sheets[sheetName];
        var range = XLSX.utils.decode_range(sheet['!ref']);
        var C, R = range.s.r;
        /* start in the first row */
        /* walk every column in the range */
        for (C = range.s.c; C <= range.e.c; ++C) {
            var cell = sheet[XLSX.utils.encode_cell({c: C, r: R})];
            /* find the cell in the first row */

            var hdr = "UNKNOWN " + C; // <-- replace with your desired default
            if (cell && cell.t) {
                hdr = XLSX.utils.format_cell(cell);
            }
            headers.push(hdr);
        }

        var roa = X.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        if(roa.length > 0){
            result[sheetName] = roa;
        }
    });
    return result;
}

function process_wb(wb) {
    var output = to_json(wb);
    $('.start#grid').columns({
        data: output['Customer Status']
    });
}

var url = "data/Taps Tracker.xlsx";

var oReq;
if(window.XMLHttpRequest) oReq = new XMLHttpRequest();
else if(window.ActiveXObject) oReq = new ActiveXObject('MSXML2.XMLHTTP.3.0');
else throw "XHR unavailable for your browser";

oReq.open("GET", url, true);

if(typeof Uint8Array !== 'undefined') {
    oReq.responseType = "arraybuffer";
    oReq.onload = function(e) {
        if(typeof console !== 'undefined') console.log("onload", new Date());
        var arraybuffer = oReq.response;
        var data = new Uint8Array(arraybuffer);
        var arr = new Array();
        for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var wb = XLSX.read(arr.join(""), {type:"binary"});
        process_wb(wb);
    };
} else {
    oReq.setRequestHeader("Accept-Charset", "x-user-defined");  
    oReq.onreadystatechange = function() { if(oReq.readyState == 4 && oReq.status == 200) {
        var ff = convertResponseBodyToText(oReq.responseBody);
        if(typeof console !== 'undefined') console.log("onload", new Date());
        var wb = XLSX.read(ff, {type:"binary"});
        process_wb(wb);
    } };
}

oReq.send();

$(document).ready(function() {
    $('body').on('keyup', function(e) {
        if ($('#tapSearch').is(':focus')) {
            $('.start .ui-table-search').val($('#tapSearch').val());
        }
    });

    $('#tapSearchSubmit').on('click', function(e) {
        e.preventDefault();
        $('.start .ui-table-search').trigger(jQuery.Event('keyup', {which: 13}));
        $('.lookup').fadeOut(100, function () {
            $('.start').fadeIn(250);
        });
    });

    $('#home').on('click', function(e) {
        e.preventDefault();
        $('.start').fadeOut(100, function () {
            $('.lookup').fadeIn(250);
        });
    });
} );