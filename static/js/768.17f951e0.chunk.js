(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[768],{768:(e,t,n)=>{"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{RL:()=>gn});var o=n(184),s=n(791);var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};Object.create;function a(e,t,n){if(n||2===arguments.length)for(var r,o=0,s=t.length;o<s;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;var c=n(613),u=n.n(c),l="-ms-",p="-moz-",d="-webkit-",f="comm",h="rule",v="decl",g="@import",m="@keyframes",S="@layer",y=Math.abs,_=String.fromCharCode,E=Object.assign;function b(e){return e.trim()}function O(e,t){return(e=t.exec(e))?e[0]:e}function C(e,t,n){return e.replace(t,n)}function w(e,t,n){return e.indexOf(t,n)}function T(e,t){return 0|e.charCodeAt(t)}function R(e,t,n){return e.slice(t,n)}function P(e){return e.length}function k(e){return e.length}function x(e,t){return t.push(e),e}function A(e,t){return e.filter((function(e){return!O(e,t)}))}var I=1,D=1,N=0,W=0,$=0,j="";function F(e,t,n,r,o,s,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:s,line:I,column:D,length:i,return:"",siblings:a}}function H(e,t){return E(F("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function L(e){for(;e.root;)e=H(e.root,{children:[e]});x(e,e.siblings)}function B(){return $=W>0?T(j,--W):0,D--,10===$&&(D=1,I--),$}function K(){return $=W<N?T(j,W++):0,D++,10===$&&(D=1,I++),$}function U(){return T(j,W)}function z(){return W}function M(e,t){return R(j,e,t)}function G(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function V(e){return I=D=1,N=P(j=e),W=0,[]}function Y(e){return j="",e}function q(e){return b(M(W-1,Q(91===e?e+2:40===e?e+1:e)))}function Z(e){for(;($=U())&&$<33;)K();return G(e)>2||G($)>3?"":" "}function J(e,t){for(;--t&&K()&&!($<48||$>102||$>57&&$<65||$>70&&$<97););return M(e,z()+(t<6&&32==U()&&32==K()))}function Q(e){for(;K();)switch($){case e:return W;case 34:case 39:34!==e&&39!==e&&Q($);break;case 40:41===e&&Q(e);break;case 92:K()}return W}function X(e,t){for(;K()&&e+$!==57&&(e+$!==84||47!==U()););return"/*"+M(t,W-1)+"*"+_(47===e?e:K())}function ee(e){for(;!G(U());)K();return M(e,W)}function te(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ne(e,t,n,r){switch(e.type){case S:if(e.children.length)break;case g:case v:return e.return=e.return||e.value;case f:return"";case m:return e.return=e.value+"{"+te(e.children,r)+"}";case h:if(!P(e.value=e.props.join(",")))return""}return P(n=te(e.children,r))?e.return=e.value+"{"+n+"}":""}function re(e,t,n){switch(function(e,t){return 45^T(e,0)?(((t<<2^T(e,0))<<2^T(e,1))<<2^T(e,2))<<2^T(e,3):0}(e,t)){case 5103:return d+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+e+e;case 4789:return p+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return d+e+p+e+l+e+e;case 5936:switch(T(e,t+11)){case 114:return d+e+l+C(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return d+e+l+C(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return d+e+l+C(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return d+e+l+e+e;case 6165:return d+e+l+"flex-"+e+e;case 5187:return d+e+C(e,/(\w+).+(:[^]+)/,d+"box-$1$2"+l+"flex-$1$2")+e;case 5443:return d+e+l+"flex-item-"+C(e,/flex-|-self/g,"")+(O(e,/flex-|baseline/)?"":l+"grid-row-"+C(e,/flex-|-self/g,""))+e;case 4675:return d+e+l+"flex-line-pack"+C(e,/align-content|flex-|-self/g,"")+e;case 5548:return d+e+l+C(e,"shrink","negative")+e;case 5292:return d+e+l+C(e,"basis","preferred-size")+e;case 6060:return d+"box-"+C(e,"-grow","")+d+e+l+C(e,"grow","positive")+e;case 4554:return d+C(e,/([^-])(transform)/g,"$1"+d+"$2")+e;case 6187:return C(C(C(e,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),e,"")+e;case 5495:case 3959:return C(e,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return C(C(e,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+l+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+e+e;case 4200:if(!O(e,/flex-|baseline/))return l+"grid-column-align"+R(e,t)+e;break;case 2592:case 3360:return l+C(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,O(e.props,/grid-\w+-end/)}))?~w(e+(n=n[t].value),"span",0)?e:l+C(e,"-start","")+e+l+"grid-row-span:"+(~w(n,"span",0)?O(n,/\d+/):+O(n,/\d+/)-+O(e,/\d+/))+";":l+C(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return O(e.props,/grid-\w+-start/)}))?e:l+C(C(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return C(e,/(.+)-inline(.+)/,d+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(P(e)-1-t>6)switch(T(e,t+1)){case 109:if(45!==T(e,t+4))break;case 102:return C(e,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+p+(108==T(e,t+3)?"$3":"$2-$3"))+e;case 115:return~w(e,"stretch",0)?re(C(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return C(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,s,i,a){return l+n+":"+r+a+(o?l+n+"-span:"+(s?i:+i-+r)+a:"")+e}));case 4949:if(121===T(e,t+6))return C(e,":",":"+d)+e;break;case 6444:switch(T(e,45===T(e,14)?18:11)){case 120:return C(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+d+(45===T(e,14)?"inline-":"")+"box$3$1"+d+"$2$3$1"+l+"$2box$3")+e;case 100:return C(e,":",":"+l)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return C(e,"scroll-","scroll-snap-")+e}return e}function oe(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case v:return void(e.return=re(e.value,e.length,n));case m:return te([H(e,{value:C(e.value,"@","@"+d)})],r);case h:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(O(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":L(H(e,{props:[C(t,/:(read-\w+)/,":"+p+"$1")]})),L(H(e,{props:[t]})),E(e,{props:A(n,r)});break;case"::placeholder":L(H(e,{props:[C(t,/:(plac\w+)/,":"+d+"input-$1")]})),L(H(e,{props:[C(t,/:(plac\w+)/,":"+p+"$1")]})),L(H(e,{props:[C(t,/:(plac\w+)/,l+"input-$1")]})),L(H(e,{props:[t]})),E(e,{props:A(n,r)})}return""}))}}function se(e){return Y(ie("",null,null,null,[""],e=V(e),0,[0],e))}function ie(e,t,n,r,o,s,i,a,c){for(var u=0,l=0,p=i,d=0,f=0,h=0,v=1,g=1,m=1,S=0,E="",b=o,O=s,R=r,k=E;g;)switch(h=S,S=K()){case 40:if(108!=h&&58==T(k,p-1)){-1!=w(k+=C(q(S),"&","&\f"),"&\f",y(u?a[u-1]:0))&&(m=-1);break}case 34:case 39:case 91:k+=q(S);break;case 9:case 10:case 13:case 32:k+=Z(h);break;case 92:k+=J(z()-1,7);continue;case 47:switch(U()){case 42:case 47:x(ce(X(K(),z()),t,n,c),c);break;default:k+="/"}break;case 123*v:a[u++]=P(k)*m;case 125*v:case 59:case 0:switch(S){case 0:case 125:g=0;case 59+l:-1==m&&(k=C(k,/\f/g,"")),f>0&&P(k)-p&&x(f>32?ue(k+";",r,n,p-1,c):ue(C(k," ","")+";",r,n,p-2,c),c);break;case 59:k+=";";default:if(x(R=ae(k,t,n,u,l,o,a,E,b=[],O=[],p,s),s),123===S)if(0===l)ie(k,t,R,R,b,s,p,a,O);else switch(99===d&&110===T(k,3)?100:d){case 100:case 108:case 109:case 115:ie(e,R,R,r&&x(ae(e,R,R,0,0,o,a,E,o,b=[],p,O),O),o,O,p,a,r?b:O);break;default:ie(k,R,R,R,[""],O,0,a,O)}}u=l=f=0,v=m=1,E=k="",p=i;break;case 58:p=1+P(k),f=h;default:if(v<1)if(123==S)--v;else if(125==S&&0==v++&&125==B())continue;switch(k+=_(S),S*v){case 38:m=l>0?1:(k+="\f",-1);break;case 44:a[u++]=(P(k)-1)*m,m=1;break;case 64:45===U()&&(k+=q(K())),d=U(),l=p=P(E=k+=ee(z())),S++;break;case 45:45===h&&2==P(k)&&(v=0)}}return s}function ae(e,t,n,r,o,s,i,a,c,u,l,p){for(var d=o-1,f=0===o?s:[""],v=k(f),g=0,m=0,S=0;g<r;++g)for(var _=0,E=R(e,d+1,d=y(m=i[g])),O=e;_<v;++_)(O=b(m>0?f[_]+" "+E:C(E,/&\f/g,f[_])))&&(c[S++]=O);return F(e,t,n,0===o?h:a,c,u,l,p)}function ce(e,t,n,r){return F(e,t,n,f,_($),R(e,2,-2),0,r)}function ue(e,t,n,r,o){return F(e,t,n,v,R(e,0,r),R(e,r+1,-1),r,o)}const le={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var pe="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Books-Reading",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/Books-Reading",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/Books-Reading",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",de="active",fe="data-styled-version",he="6.1.6",ve="/*!sc*/\n",ge="undefined"!=typeof window&&"HTMLElement"in window,me=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Books-Reading",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Books-Reading",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/Books-Reading",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/Books-Reading",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/Books-Reading",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Books-Reading",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/Books-Reading",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/Books-Reading",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/Books-Reading",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/Books-Reading",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Se=(new Set,Object.freeze([])),ye=Object.freeze({});function _e(e,t,n){return void 0===n&&(n=ye),e.theme!==n.theme&&e.theme||t||n.theme}var Ee=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Oe=/(^-|-$)/g;function Ce(e){return e.replace(be,"-").replace(Oe,"")}var we=/(a)(d)/gi,Te=52,Re=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pe(e){var t,n="";for(t=Math.abs(e);t>Te;t=t/Te|0)n=Re(t%Te)+n;return(Re(t%Te)+n).replace(we,"$1-$2")}var ke,xe=5381,Ae=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ie=function(e){return Ae(xe,e)};function De(e){return Pe(Ie(e)>>>0)}function Ne(e){return e.displayName||e.name||"Component"}function We(e){return"string"==typeof e&&!0}var $e="function"==typeof Symbol&&Symbol.for,je=$e?Symbol.for("react.memo"):60115,Fe=$e?Symbol.for("react.forward_ref"):60112,He={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Le={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Be={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ke=((ke={})[Fe]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ke[je]=Be,ke);function Ue(e){return("type"in(t=e)&&t.type.$$typeof)===je?Be:"$$typeof"in e?Ke[e.$$typeof]:He;var t}var ze=Object.defineProperty,Me=Object.getOwnPropertyNames,Ge=Object.getOwnPropertySymbols,Ve=Object.getOwnPropertyDescriptor,Ye=Object.getPrototypeOf,qe=Object.prototype;function Ze(e,t,n){if("string"!=typeof t){if(qe){var r=Ye(t);r&&r!==qe&&Ze(e,r,n)}var o=Me(t);Ge&&(o=o.concat(Ge(t)));for(var s=Ue(e),i=Ue(t),a=0;a<o.length;++a){var c=o[a];if(!(c in Le||n&&n[c]||i&&c in i||s&&c in s)){var u=Ve(t,c);try{ze(e,c,u)}catch(e){}}}}return e}function Je(e){return"function"==typeof e}function Qe(e){return"object"==typeof e&&"styledComponentId"in e}function Xe(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function et(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function tt(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function nt(e,t,n){if(void 0===n&&(n=!1),!n&&!tt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=nt(e[r],t[r]);else if(tt(t))for(var r in t)e[r]=nt(e[r],t[r]);return e}function rt(e,t){Object.defineProperty(e,"toString",{value:t})}function ot(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var st=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw ot(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=(s=0,t.length);s<a;s++)this.tag.insertRule(i,t[s])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+="".concat(this.tag.getRule(s)).concat(ve);return t},e}(),it=new Map,at=new Map,ct=1,ut=function(e){if(it.has(e))return it.get(e);for(;at.has(ct);)ct++;var t=ct++;return it.set(e,t),at.set(t,e),t},lt=function(e,t){ct=t+1,it.set(e,t),at.set(t,e)},pt="style[".concat(pe,"][").concat(fe,'="').concat(he,'"]'),dt=new RegExp("^".concat(pe,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ft=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},ht=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(ve),o=[],s=0,i=r.length;s<i;s++){var a=r[s].trim();if(a){var c=a.match(dt);if(c){var u=0|parseInt(c[1],10),l=c[2];0!==u&&(lt(l,u),ft(e,l,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}};function vt(){return n.nc}var gt=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(pe,"]")));return t[t.length-1]}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(pe,de),r.setAttribute(fe,he);var i=vt();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},mt=function(){function e(e){this.element=gt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw ot(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),St=function(){function e(e){this.element=gt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),yt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),_t=ge,Et={isServer:!ge,useCSSOMInjection:!me},bt=function(){function e(e,t,n){void 0===e&&(e=ye),void 0===t&&(t={});var r=this;this.options=i(i({},Et),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&ge&&_t&&(_t=!1,function(e){for(var t=document.querySelectorAll(pt),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(pe)!==de&&(ht(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),rt(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return at.get(e)}(n);if(void 0===o)return"continue";var s=e.names.get(o),i=t.getGroup(n);if(void 0===s||0===i.length)return"continue";var a="".concat(pe,".g").concat(n,'[id="').concat(o,'"]'),c="";void 0!==s&&s.forEach((function(e){e.length>0&&(c+="".concat(e,","))})),r+="".concat(i).concat(a,'{content:"').concat(c,'"}').concat(ve)},s=0;s<n;s++)o(s);return r}(r)}))}return e.registerId=function(e){return ut(e)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(i(i({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new yt(n):t?new mt(n):new St(n)}(this.options),new st(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(ut(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(ut(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(ut(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ot=/&/g,Ct=/^\s*\/\/.*$/gm;function wt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=wt(e.children,t)),e}))}function Tt(e){var t,n,r,o=void 0===e?ye:e,s=o.options,i=void 0===s?ye:s,a=o.plugins,c=void 0===a?Se:a,u=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},l=c.slice();l.push((function(e){e.type===h&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Ot,n).replace(r,u))})),i.prefix&&l.push(oe),l.push(ne);var p=function(e,o,s,a){void 0===o&&(o=""),void 0===s&&(s=""),void 0===a&&(a="&"),t=a,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(Ct,""),u=se(s||o?"".concat(s," ").concat(o," { ").concat(c," }"):c);i.namespace&&(u=wt(u,i.namespace));var p,d=[];return te(u,function(e){var t=k(e);return function(n,r,o,s){for(var i="",a=0;a<t;a++)i+=e[a](n,r,o,s)||"";return i}}(l.concat((p=function(e){return d.push(e)},function(e){e.root||(e=e.return)&&p(e)})))),d};return p.hash=c.length?c.reduce((function(e,t){return t.name||ot(15),Ae(e,t.name)}),xe).toString():"",p}var Rt=new bt,Pt=Tt(),kt=s.createContext({shouldForwardProp:void 0,styleSheet:Rt,stylis:Pt}),xt=(kt.Consumer,s.createContext(void 0));function At(){return(0,s.useContext)(kt)}function It(e){var t=(0,s.useState)(e.stylisPlugins),n=t[0],r=t[1],o=At().styleSheet,i=(0,s.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),a=(0,s.useMemo)((function(){return Tt({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})}),[e.enableVendorPrefixes,e.namespace,n]);(0,s.useEffect)((function(){u()(n,e.stylisPlugins)||r(e.stylisPlugins)}),[e.stylisPlugins]);var c=(0,s.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:a}}),[e.shouldForwardProp,i,a]);return s.createElement(kt.Provider,{value:c},s.createElement(xt.Provider,{value:a},e.children))}var Dt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Pt);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,rt(this,(function(){throw ot(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Pt),this.name+e.hash},e}(),Nt=function(e){return e>="A"&&e<="Z"};function Wt(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Nt(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var $t=function(e){return null==e||!1===e||""===e},jt=function(e){var t,n,r=[];for(var o in e){var s=e[o];e.hasOwnProperty(o)&&!$t(s)&&(Array.isArray(s)&&s.isCss||Je(s)?r.push("".concat(Wt(o),":"),s,";"):tt(s)?r.push.apply(r,a(a(["".concat(o," {")],jt(s),!1),["}"],!1)):r.push("".concat(Wt(o),": ").concat((t=o,null==(n=s)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in le||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ft(e,t,n,r){return $t(e)?[]:Qe(e)?[".".concat(e.styledComponentId)]:Je(e)?!Je(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Ft(e(t),t,n,r):e instanceof Dt?n?(e.inject(n,r),[e.getName(r)]):[e]:tt(e)?jt(e):Array.isArray(e)?Array.prototype.concat.apply(Se,e.map((function(e){return Ft(e,t,n,r)}))):[e.toString()];var o}function Ht(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Je(n)&&!Qe(n))return!1}return!0}var Lt=Ie(he),Bt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Ht(e),this.componentId=t,this.baseHash=Ae(Lt,t),this.baseStyle=n,bt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Xe(r,this.staticRulesId);else{var o=et(Ft(this.rules,e,t,n)),s=Pe(Ae(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,s)){var i=n(o,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,i)}r=Xe(r,s),this.staticRulesId=s}else{for(var a=Ae(this.baseHash,n.hash),c="",u=0;u<this.rules.length;u++){var l=this.rules[u];if("string"==typeof l)c+=l;else if(l){var p=et(Ft(l,e,t,n));a=Ae(a,p+u),c+=p}}if(c){var d=Pe(a>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,n(c,".".concat(d),void 0,this.componentId)),r=Xe(r,d)}}return r},e}(),Kt=s.createContext(void 0);Kt.Consumer;var Ut={};new Set;function zt(e,t,n){var r=Qe(e),o=e,a=!We(e),c=t.attrs,u=void 0===c?Se:c,l=t.componentId,p=void 0===l?function(e,t){var n="string"!=typeof e?"sc":Ce(e);Ut[n]=(Ut[n]||0)+1;var r="".concat(n,"-").concat(De(he+n+Ut[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):l,d=t.displayName,f=void 0===d?function(e){return We(e)?"styled.".concat(e):"Styled(".concat(Ne(e),")")}(e):d,h=t.displayName&&t.componentId?"".concat(Ce(t.displayName),"-").concat(t.componentId):t.componentId||p,v=r&&o.attrs?o.attrs.concat(u).filter(Boolean):u,g=t.shouldForwardProp;if(r&&o.shouldForwardProp){var m=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;g=function(e,t){return m(e,t)&&S(e,t)}}else g=m}var y=new Bt(n,h,r?o.componentStyle:void 0);function _(e,t){return function(e,t,n){var r=e.attrs,o=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,u=e.styledComponentId,l=e.target,p=s.useContext(Kt),d=At(),f=e.shouldForwardProp||d.shouldForwardProp,h=_e(t,p,a)||ye,v=function(e,t,n){for(var r,o=i(i({},t),{className:void 0,theme:n}),s=0;s<e.length;s+=1){var a=Je(r=e[s])?r(o):r;for(var c in a)o[c]="className"===c?Xe(o[c],a[c]):"style"===c?i(i({},o[c]),a[c]):a[c]}return t.className&&(o.className=Xe(o.className,t.className)),o}(r,t,h),g=v.as||l,m={};for(var S in v)void 0===v[S]||"$"===S[0]||"as"===S||"theme"===S&&v.theme===h||("forwardedAs"===S?m.as=v.forwardedAs:f&&!f(S,g)||(m[S]=v[S]));var y=function(e,t){var n=At();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,v),_=Xe(c,u);return y&&(_+=" "+y),v.className&&(_+=" "+v.className),m[We(g)&&!Ee.has(g)?"class":"className"]=_,m.ref=n,(0,s.createElement)(g,m)}(E,e,t)}_.displayName=f;var E=s.forwardRef(_);return E.attrs=v,E.componentStyle=y,E.displayName=f,E.shouldForwardProp=g,E.foldedComponentIds=r?Xe(o.foldedComponentIds,o.styledComponentId):"",E.styledComponentId=h,E.target=r?o.target:e,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=r?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)nt(e,o[r],!0);return e}({},o.defaultProps,e):e}}),rt(E,(function(){return".".concat(E.styledComponentId)})),a&&Ze(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function Mt(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Gt=function(e){return Object.assign(e,{isCss:!0})};function Vt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Je(e)||tt(e))return Gt(Ft(Mt(Se,a([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Ft(r):Gt(Ft(Mt(r,t)))}function Yt(e,t,n){if(void 0===n&&(n=ye),!t)throw ot(1,t);var r=function(r){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Vt.apply(void 0,a([r],o,!1)))};return r.attrs=function(r){return Yt(e,t,i(i({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Yt(e,t,i(i({},n),r))},r}var qt=function(e){return Yt(zt,e)},Zt=qt;Ee.forEach((function(e){Zt[e]=qt(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ht(e),bt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(et(Ft(this.rules,t,n,r)),""),s=this.componentId+e;n.insertRules(s,s,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&bt.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function Jt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=et(Vt.apply(void 0,a([e],t,!1))),o=De(r);return new Dt(o,r)}var Qt,Xt,en,tn,nn,rn,on,sn,an;(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=vt(),r=et([n&&'nonce="'.concat(n,'"'),"".concat(pe,'="true"'),"".concat(fe,'="').concat(he,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw ot(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw ot(2);var n=((t={})[pe]="",t[fe]=he,t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),r=vt();return r&&(n.nonce=r),[s.createElement("style",i({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new bt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw ot(2);return s.createElement(It,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw ot(3)}})(),"__sc-".concat(pe,"__");const cn="#4fa94d",un={"aria-busy":!0,role:"progressbar"},ln=Zt.div(Qt||(Qt=r(["\n  display: ",";\n"])),(e=>e.$visible?"flex":"none")),pn="http://www.w3.org/2000/svg",dn=242.776657104492,fn=Jt(Xt||(Xt=r(["\n12.5% {\n  stroke-dasharray: ","px, ","px;\n  stroke-dashoffset: -","px;\n}\n43.75% {\n  stroke-dasharray: ","px, ","px;\n  stroke-dashoffset: -","px;\n}\n100% {\n  stroke-dasharray: ","px, ","px;\n  stroke-dashoffset: -","px;\n}\n"])),33.98873199462888,dn,26.70543228149412,84.97182998657219,dn,84.97182998657219,2.42776657104492,dn,240.34889053344708),hn=(Zt.path(en||(en=r(["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"])),2.42776657104492,dn,fn,1.6),Jt(tn||(tn=r(["\nto {\n   transform: rotate(360deg);\n }\n"])))),vn=(Zt.svg(nn||(nn=r(["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: 0.75s;\n"])),hn),Zt.polyline(rn||(rn=r(["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])),(e=>e.width)),Jt(on||(on=r(["\nto {\n   stroke-dashoffset: 136;\n }\n"])))),gn=(Zt.polygon(sn||(sn=r(["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])),vn),Zt.svg(an||(an=r(["\n  transform-origin: 50% 65%;\n"]))),e=>{let{height:t=80,width:n=80,radius:r=48,color:s=cn,ariaLabel:i="watch-loading",wrapperStyle:a,wrapperClass:c,visible:u=!0}=e;return(0,o.jsx)(ln,{style:a,$visible:u,className:c,"data-testid":"watch-loading","aria-label":i,...un,children:(0,o.jsxs)("svg",{width:n,height:t,version:"1.1",id:"L2",xmlns:pn,x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve","data-testid":"watch-svg",children:[(0,o.jsx)("circle",{fill:"none",stroke:s,strokeWidth:"4",strokeMiterlimit:"10",cx:"50",cy:"50",r:r}),(0,o.jsx)("line",{fill:"none",strokeLinecap:"round",stroke:s,strokeWidth:"4",strokeMiterlimit:"10",x1:"50",y1:"50",x2:"85",y2:"50.5",children:(0,o.jsx)("animateTransform",{attributeName:"transform",dur:"2s",type:"rotate",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})}),(0,o.jsx)("line",{fill:"none",strokeLinecap:"round",stroke:s,strokeWidth:"4",strokeMiterlimit:"10",x1:"50",y1:"50",x2:"49.5",y2:"74",children:(0,o.jsx)("animateTransform",{attributeName:"transform",dur:"15s",type:"rotate",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})]})})})},613:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var s=Object.keys(e),i=Object.keys(t);if(s.length!==i.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),c=0;c<s.length;c++){var u=s[c];if(!a(u))return!1;var l=e[u],p=t[u];if(!1===(o=n?n.call(r,l,p,u):void 0)||void 0===o&&l!==p)return!1}return!0}}}]);
//# sourceMappingURL=768.17f951e0.chunk.js.map