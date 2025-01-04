var IZ=Object.create;var{getPrototypeOf:SZ,defineProperty:i1,getOwnPropertyNames:vZ}=Object;var fZ=Object.prototype.hasOwnProperty;var I1=(Q,q,B)=>{B=Q!=null?IZ(SZ(Q)):{};let Y=q||!Q||!Q.__esModule?i1(B,"default",{value:Q,enumerable:!0}):B;for(let F of vZ(Q))if(!fZ.call(Y,F))i1(Y,F,{get:()=>Q[F],enumerable:!0});return Y};var bZ=(Q,q)=>()=>(q||Q((q={exports:{}}).exports,q),q.exports);var L1=bZ((Y1,M6)=>{function g0(Q){if(Q===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Q}function dZ(Q,q){var B=typeof Symbol!=="undefined"&&Q[Symbol.iterator]||Q["@@iterator"];if(B)return(B=B.call(Q)).next.bind(B);if(Array.isArray(Q)||(B=lZ(Q))||q&&Q&&typeof Q.length==="number"){if(B)Q=B;var Y=0;return function(){if(Y>=Q.length)return{done:!0};return{done:!1,value:Q[Y++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lZ(Q,q){if(!Q)return;if(typeof Q==="string")return W6(Q,q);var B=Object.prototype.toString.call(Q).slice(8,-1);if(B==="Object"&&Q.constructor)B=Q.constructor.name;if(B==="Map"||B==="Set")return Array.from(Q);if(B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B))return W6(Q,q)}function W6(Q,q){if(q==null||q>Q.length)q=Q.length;for(var B=0,Y=new Array(q);B<q;B++)Y[B]=Q[B];return Y}function K0(Q,q){Q.prototype=Object.create(q.prototype),Q.prototype.constructor=Q,g1(Q,q)}function g1(Q,q){return g1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function B(Y,F){return Y.__proto__=F,Y},g1(Q,q)}(function(Q,q){typeof Y1==="object"&&typeof M6!=="undefined"?q(Y1):typeof define==="function"&&define.amd?define(["exports"],q):(Q=typeof globalThis!=="undefined"?globalThis:Q||self,q(Q.ROT={}))})(Y1,function(Q){var q=0.00000000023283064365386963,B=function(){function G(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var X=G.prototype;return X.getSeed=function z(){return this._seed},X.setSeed=function z(K){return K=K<1?1/K:K,this._seed=K,this._s0=(K>>>0)*q,K=K*69069+1>>>0,this._s1=K*q,K=K*69069+1>>>0,this._s2=K*q,this._c=1,this},X.getUniform=function z(){var K=2091639*this._s0+this._c*q;return this._s0=this._s1,this._s1=this._s2,this._c=K|0,this._s2=K-this._c,this._s2},X.getUniformInt=function z(K,Z){var J=Math.max(K,Z),V=Math.min(K,Z);return Math.floor(this.getUniform()*(J-V+1))+V},X.getNormal=function z(K,Z){if(K===void 0)K=0;if(Z===void 0)Z=1;var J,V,U;do J=2*this.getUniform()-1,V=2*this.getUniform()-1,U=J*J+V*V;while(U>1||U==0);var $=J*Math.sqrt(-2*Math.log(U)/U);return K+$*Z},X.getPercentage=function z(){return 1+Math.floor(this.getUniform()*100)},X.getItem=function z(K){if(!K.length)return null;return K[Math.floor(this.getUniform()*K.length)]},X.shuffle=function z(K){var Z=[],J=K.slice();while(J.length){var V=J.indexOf(this.getItem(J));Z.push(J.splice(V,1)[0])}return Z},X.getWeightedValue=function z(K){var Z=0;for(var J in K)Z+=K[J];var V=this.getUniform()*Z,U,$=0;for(U in K)if($+=K[U],V<$)return U;return U},X.getState=function z(){return[this._s0,this._s1,this._s2,this._c]},X.setState=function z(K){return this._s0=K[0],this._s1=K[1],this._s2=K[2],this._c=K[3],this},X.clone=function z(){var K=new G;return K.setState(this.getState())},G}(),Y=new B().setSeed(Date.now()),F=function(){function G(){}var X=G.prototype;return X.getContainer=function z(){return null},X.setOptions=function z(K){this._options=K},G}(),R=function(G){K0(X,G);function X(){var K=G.call(this)||this;return K._ctx=document.createElement("canvas").getContext("2d"),K}var z=X.prototype;return z.schedule=function K(Z){requestAnimationFrame(Z)},z.getContainer=function K(){return this._ctx.canvas},z.setOptions=function K(Z){G.prototype.setOptions.call(this,Z);var J=Z.fontStyle?Z.fontStyle+" ":"",V=J+" "+Z.fontSize+"px "+Z.fontFamily;this._ctx.font=V,this._updateSize(),this._ctx.font=V,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},z.clear=function K(){var Z=this._ctx.globalCompositeOperation;this._ctx.globalCompositeOperation="copy",this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.globalCompositeOperation=Z},z.eventToPosition=function K(Z,J){var V=this._ctx.canvas,U=V.getBoundingClientRect();if(Z-=U.left,J-=U.top,Z*=V.width/U.width,J*=V.height/U.height,Z<0||J<0||Z>=V.width||J>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,J)},X}(F);function C(G,X){return(G%X+X)%X}function k(G,X,z){if(X===void 0)X=0;if(z===void 0)z=1;if(G<X)return X;if(G>z)return z;return G}function S(G){return G.charAt(0).toUpperCase()+G.substring(1)}function I(G){for(var X=arguments.length,z=new Array(X>1?X-1:0),K=1;K<X;K++)z[K-1]=arguments[K];var Z=I.map,J=function V(U,$,w,L){if(G.charAt(L-1)=="%")return U.substring(1);if(!z.length)return U;var H=z[0],P=$||w,D=P.split(","),W=D.shift()||"",O=Z[W.toLowerCase()];if(!O)return U;H=z.shift();var j=H[O].apply(H,D),v=W.charAt(0);if(v!=v.toLowerCase())j=S(j);return j};return G.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,J)}I.map={s:"toString"};var l=Object.freeze({__proto__:null,mod:C,clamp:k,capitalize:S,format:I}),g=function(G){K0(X,G);function X(){var K=G.call(this)||this;return K._spacingX=0,K._spacingY=0,K._hexSize=0,K}var z=X.prototype;return z.draw=function K(Z,J){var V=Z[0],U=Z[1],$=Z[2],w=Z[3],L=Z[4],H=[(V+1)*this._spacingX,U*this._spacingY+this._hexSize];if(this._options.transpose)H.reverse();if(J)this._ctx.fillStyle=L,this._fill(H[0],H[1]);if(!$)return;this._ctx.fillStyle=w;var P=[].concat($);for(var D=0;D<P.length;D++)this._ctx.fillText(P[D],H[0],Math.ceil(H[1]))},z.computeSize=function K(Z,J){if(this._options.transpose)Z+=J,J=Z-J,Z-=J;var V=Math.floor(Z/this._spacingX)-1,U=Math.floor((J-2*this._hexSize)/this._spacingY+1);return[V,U]},z.computeFontSize=function K(Z,J){if(this._options.transpose)Z+=J,J=Z-J,Z-=J;var V=2*Z/((this._options.width+1)*Math.sqrt(3))-1,U=J/(2+1.5*(this._options.height-1)),$=Math.min(V,U),w=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var L=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=w;var H=L/100;$=Math.floor($)+1;var P=2*$/(this._options.spacing*(1+H/Math.sqrt(3)));return Math.ceil(P)-1},z._normalizedEventToPosition=function K(Z,J){var V;if(this._options.transpose)Z+=J,J=Z-J,Z-=J,V=this._ctx.canvas.width;else V=this._ctx.canvas.height;var U=V/this._options.height;if(J=Math.floor(J/U),C(J,2))Z-=this._spacingX,Z=1+2*Math.floor(Z/(2*this._spacingX));else Z=2*Math.floor(Z/(2*this._spacingX));return[Z,J]},z._fill=function K(Z,J){var V=this._hexSize,U=this._options.border,$=this._ctx;if($.beginPath(),this._options.transpose)$.moveTo(Z-V+U,J),$.lineTo(Z-V/2+U,J+this._spacingX-U),$.lineTo(Z+V/2-U,J+this._spacingX-U),$.lineTo(Z+V-U,J),$.lineTo(Z+V/2-U,J-this._spacingX+U),$.lineTo(Z-V/2+U,J-this._spacingX+U),$.lineTo(Z-V+U,J);else $.moveTo(Z,J-V+U),$.lineTo(Z+this._spacingX-U,J-V/2+U),$.lineTo(Z+this._spacingX-U,J+V/2-U),$.lineTo(Z,J+V-U),$.lineTo(Z-this._spacingX+U,J+V/2-U),$.lineTo(Z-this._spacingX+U,J-V/2+U),$.lineTo(Z,J-V+U);$.fill()},z._updateSize=function K(){var Z=this._options,J=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(Z.spacing*(Z.fontSize+J/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var V,U;if(Z.transpose)V="height",U="width";else V="width",U="height";this._ctx.canvas[V]=Math.ceil((Z.width+1)*this._spacingX),this._ctx.canvas[U]=Math.ceil((Z.height-1)*this._spacingY+2*this._hexSize)},X}(R),h=function(G){K0(X,G);function X(){var K=G.call(this)||this;return K._spacingX=0,K._spacingY=0,K._canvasCache={},K}var z=X.prototype;return z.setOptions=function K(Z){G.prototype.setOptions.call(this,Z),this._canvasCache={}},z.draw=function K(Z,J){if(X.cache)this._drawWithCache(Z);else this._drawNoCache(Z,J)},z._drawWithCache=function K(Z){var J=Z[0],V=Z[1],U=Z[2],$=Z[3],w=Z[4],L=""+U+$+w,H;if(L in this._canvasCache)H=this._canvasCache[L];else{var P=this._options.border;H=document.createElement("canvas");var D=H.getContext("2d");if(H.width=this._spacingX,H.height=this._spacingY,D.fillStyle=w,D.fillRect(P,P,H.width-P,H.height-P),U){D.fillStyle=$,D.font=this._ctx.font,D.textAlign="center",D.textBaseline="middle";var W=[].concat(U);for(var O=0;O<W.length;O++)D.fillText(W[O],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[L]=H}this._ctx.drawImage(H,J*this._spacingX,V*this._spacingY)},z._drawNoCache=function K(Z,J){var V=Z[0],U=Z[1],$=Z[2],w=Z[3],L=Z[4];if(J){var H=this._options.border;this._ctx.fillStyle=L,this._ctx.fillRect(V*this._spacingX+H,U*this._spacingY+H,this._spacingX-H,this._spacingY-H)}if(!$)return;this._ctx.fillStyle=w;var P=[].concat($);for(var D=0;D<P.length;D++)this._ctx.fillText(P[D],(V+0.5)*this._spacingX,Math.ceil((U+0.5)*this._spacingY))},z.computeSize=function K(Z,J){var V=Math.floor(Z/this._spacingX),U=Math.floor(J/this._spacingY);return[V,U]},z.computeFontSize=function K(Z,J){var V=Math.floor(Z/this._options.width),U=Math.floor(J/this._options.height),$=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var w=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=$;var L=w/100,H=L*U/V;if(H>1)U=Math.floor(U/H);return Math.floor(U/this._options.spacing)},z._normalizedEventToPosition=function K(Z,J){return[Math.floor(Z/this._spacingX),Math.floor(J/this._spacingY)]},z._updateSize=function K(){var Z=this._options,J=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(Z.spacing*J),this._spacingY=Math.ceil(Z.spacing*Z.fontSize),Z.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=Z.width*this._spacingX,this._ctx.canvas.height=Z.height*this._spacingY},X}(R);h.cache=!1;var m=function(G){K0(X,G);function X(){var K=G.call(this)||this;return K._colorCanvas=document.createElement("canvas"),K}var z=X.prototype;return z.draw=function K(Z,J){var V=Z[0],U=Z[1],$=Z[2],w=Z[3],L=Z[4],H=this._options.tileWidth,P=this._options.tileHeight;if(J)if(this._options.tileColorize)this._ctx.clearRect(V*H,U*P,H,P);else this._ctx.fillStyle=L,this._ctx.fillRect(V*H,U*P,H,P);if(!$)return;var D=[].concat($),W=[].concat(w),O=[].concat(L);for(var j=0;j<D.length;j++){var v=this._options.tileMap[D[j]];if(!v)throw new Error('Char "'+D[j]+'" not found in tileMap');if(this._options.tileColorize){var u=this._colorCanvas,x=u.getContext("2d");x.globalCompositeOperation="source-over",x.clearRect(0,0,H,P);var p=W[j],a=O[j];if(x.drawImage(this._options.tileSet,v[0],v[1],H,P,0,0,H,P),p!="transparent")x.fillStyle=p,x.globalCompositeOperation="source-atop",x.fillRect(0,0,H,P);if(a!="transparent")x.fillStyle=a,x.globalCompositeOperation="destination-over",x.fillRect(0,0,H,P);this._ctx.drawImage(u,V*H,U*P,H,P)}else this._ctx.drawImage(this._options.tileSet,v[0],v[1],H,P,V*H,U*P,H,P)}},z.computeSize=function K(Z,J){var V=Math.floor(Z/this._options.tileWidth),U=Math.floor(J/this._options.tileHeight);return[V,U]},z.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},z._normalizedEventToPosition=function K(Z,J){return[Math.floor(Z/this._options.tileWidth),Math.floor(J/this._options.tileHeight)]},z._updateSize=function K(){var Z=this._options;this._ctx.canvas.width=Z.width*Z.tileWidth,this._ctx.canvas.height=Z.height*Z.tileHeight,this._colorCanvas.width=Z.tileWidth,this._colorCanvas.height=Z.tileHeight},X}(R);function y(G){var X,z;if(G in E)X=E[G];else{if(G.charAt(0)=="#"){var K=G.match(/[0-9a-f]/gi)||[],Z=K.map(function(V){return parseInt(V,16)});if(Z.length==3)X=Z.map(function(V){return V*17});else{for(var J=0;J<3;J++)Z[J+1]+=16*Z[J],Z.splice(J,1);X=Z}}else if(z=G.match(/rgb\(([0-9, ]+)\)/i))X=z[1].split(/\s*,\s*/).map(function(V){return parseInt(V)});else X=[0,0,0];E[G]=X}return X.slice()}function d(G){var X=G.slice();for(var z=arguments.length,K=new Array(z>1?z-1:0),Z=1;Z<z;Z++)K[Z-1]=arguments[Z];for(var J=0;J<3;J++)for(var V=0;V<K.length;V++)X[J]+=K[V][J];return X}function s(G){for(var X=arguments.length,z=new Array(X>1?X-1:0),K=1;K<X;K++)z[K-1]=arguments[K];for(var Z=0;Z<3;Z++)for(var J=0;J<z.length;J++)G[Z]+=z[J][Z];return G}function i(G){var X=G.slice();for(var z=arguments.length,K=new Array(z>1?z-1:0),Z=1;Z<z;Z++)K[Z-1]=arguments[Z];for(var J=0;J<3;J++){for(var V=0;V<K.length;V++)X[J]*=K[V][J]/255;X[J]=Math.round(X[J])}return X}function Q0(G){for(var X=arguments.length,z=new Array(X>1?X-1:0),K=1;K<X;K++)z[K-1]=arguments[K];for(var Z=0;Z<3;Z++){for(var J=0;J<z.length;J++)G[Z]*=z[J][Z]/255;G[Z]=Math.round(G[Z])}return G}function Y0(G,X,z){if(z===void 0)z=0.5;var K=G.slice();for(var Z=0;Z<3;Z++)K[Z]=Math.round(K[Z]+z*(X[Z]-G[Z]));return K}var B0=Y0;function A(G,X,z){if(z===void 0)z=0.5;var K=_(G),Z=_(X);for(var J=0;J<3;J++)K[J]+=z*(Z[J]-K[J]);return o(K)}var b=A;function T(G,X){if(!(X instanceof Array))X=Math.round(Y.getNormal(0,X));var z=G.slice();for(var K=0;K<3;K++)z[K]+=X instanceof Array?Math.round(Y.getNormal(0,X[K])):X;return z}function _(G){var X=G[0]/255,z=G[1]/255,K=G[2]/255,Z=Math.max(X,z,K),J=Math.min(X,z,K),V=0,U,$=(Z+J)/2;if(Z==J)U=0;else{var w=Z-J;switch(U=$>0.5?w/(2-Z-J):w/(Z+J),Z){case X:V=(z-K)/w+(z<K?6:0);break;case z:V=(K-X)/w+2;break;case K:V=(X-z)/w+4;break}V/=6}return[V,U,$]}function t(G,X,z){if(z<0)z+=1;if(z>1)z-=1;if(z<0.16666666666666666)return G+(X-G)*6*z;if(z<0.5)return X;if(z<0.6666666666666666)return G+(X-G)*(0.6666666666666666-z)*6;return G}function o(G){var X=G[2];if(G[1]==0)return X=Math.round(X*255),[X,X,X];else{var z=G[1],K=X<0.5?X*(1+z):X+z-X*z,Z=2*X-K,J=t(Z,K,G[0]+0.3333333333333333),V=t(Z,K,G[0]),U=t(Z,K,G[0]-0.3333333333333333);return[Math.round(J*255),Math.round(V*255),Math.round(U*255)]}}function f(G){var X=G.map(function(z){return k(z,0,255)});return"rgb("+X.join(",")+")"}function N(G){var X=G.map(function(z){return k(z,0,255).toString(16).padStart(2,"0")});return"#"+X.join("")}var E={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},n=Object.freeze({__proto__:null,fromString:y,add:d,add_:s,multiply:i,multiply_:Q0,interpolate:Y0,lerp:B0,interpolateHSL:A,lerpHSL:b,randomize:T,rgb2hsl:_,hsl2rgb:o,toRGB:f,toHex:N}),e=function(G){K0(X,G);function X(){var K=G.call(this)||this;K._uniforms={};try{K._gl=K._initWebGL()}catch(Z){if(typeof Z==="string")alert(Z);else if(Z instanceof Error)alert(Z.message)}return K}X.isSupported=function K(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var z=X.prototype;return z.schedule=function K(Z){requestAnimationFrame(Z)},z.getContainer=function K(){return this._gl.canvas},z.setOptions=function K(Z){var J=this;G.prototype.setOptions.call(this,Z),this._updateSize();var V=this._options.tileSet;if(V&&"complete"in V&&!V.complete)V.addEventListener("load",function(){return J._updateTexture(V)});else this._updateTexture(V)},z.draw=function K(Z,J){var V=this._gl,U=this._options,$=Z[0],w=Z[1],L=Z[2],H=Z[3],P=Z[4],D=V.canvas.height-(w+1)*U.tileHeight;if(V.scissor($*U.tileWidth,D,U.tileWidth,U.tileHeight),J){if(U.tileColorize)V.clearColor(0,0,0,0);else V.clearColor.apply(V,_0(P));V.clear(V.COLOR_BUFFER_BIT)}if(!L)return;var W=[].concat(L),O=[].concat(P),j=[].concat(H);V.uniform2fv(this._uniforms.targetPosRel,[$,w]);for(var v=0;v<W.length;v++){var u=this._options.tileMap[W[v]];if(!u)throw new Error('Char "'+W[v]+'" not found in tileMap');if(V.uniform1f(this._uniforms.colorize,U.tileColorize?1:0),V.uniform2fv(this._uniforms.tilesetPosAbs,u),U.tileColorize)V.uniform4fv(this._uniforms.tint,_0(j[v])),V.uniform4fv(this._uniforms.bg,_0(O[v]));V.drawArrays(V.TRIANGLE_STRIP,0,4)}},z.clear=function K(){var Z=this._gl;Z.clearColor.apply(Z,_0(this._options.bg)),Z.scissor(0,0,Z.canvas.width,Z.canvas.height),Z.clear(Z.COLOR_BUFFER_BIT)},z.computeSize=function K(Z,J){var V=Math.floor(Z/this._options.tileWidth),U=Math.floor(J/this._options.tileHeight);return[V,U]},z.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},z.eventToPosition=function K(Z,J){var V=this._gl.canvas,U=V.getBoundingClientRect();if(Z-=U.left,J-=U.top,Z*=V.width/U.width,J*=V.height/U.height,Z<0||J<0||Z>=V.width||J>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,J)},z._initWebGL=function K(){var Z=this,J=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=J;var V=O0(J,w0,z0);return J.useProgram(V),X0(J),V0.forEach(function(U){return Z._uniforms[U]=J.getUniformLocation(V,U)}),this._program=V,J.enable(J.BLEND),J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA),J.enable(J.SCISSOR_TEST),J},z._normalizedEventToPosition=function K(Z,J){return[Math.floor(Z/this._options.tileWidth),Math.floor(J/this._options.tileHeight)]},z._updateSize=function K(){var Z=this._gl,J=this._options,V=[J.width*J.tileWidth,J.height*J.tileHeight];Z.canvas.width=V[0],Z.canvas.height=V[1],Z.viewport(0,0,V[0],V[1]),Z.uniform2fv(this._uniforms.tileSize,[J.tileWidth,J.tileHeight]),Z.uniform2fv(this._uniforms.targetSize,V)},z._updateTexture=function K(Z){d0(this._gl,Z)},X}(F),V0=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],w0=`
#version 300 es

in vec2 tilePosRel;
out vec2 tilesetPosPx;

uniform vec2 tilesetPosAbs;
uniform vec2 tileSize;
uniform vec2 targetSize;
uniform vec2 targetPosRel;

void main() {
\tvec2 targetPosPx = (targetPosRel + tilePosRel) * tileSize;
\tvec2 targetPosNdc = ((targetPosPx / targetSize)-0.5)*2.0;
\ttargetPosNdc.y *= -1.0;

\tgl_Position = vec4(targetPosNdc, 0.0, 1.0);
\ttilesetPosPx = tilesetPosAbs + tilePosRel * tileSize;
}`.trim(),z0=`
#version 300 es
precision highp float;

in vec2 tilesetPosPx;
out vec4 fragColor;
uniform sampler2D image;
uniform bool colorize;
uniform vec4 bg;
uniform vec4 tint;

void main() {
\tfragColor = vec4(0, 0, 0, 1);

\tvec4 texel = texelFetch(image, ivec2(tilesetPosPx), 0);

\tif (colorize) {
\t\ttexel.rgb = tint.a * tint.rgb + (1.0-tint.a) * texel.rgb;
\t\tfragColor.rgb = texel.a*texel.rgb + (1.0-texel.a)*bg.rgb;
\t\tfragColor.a = texel.a + (1.0-texel.a)*bg.a;
\t} else {
\t\tfragColor = texel;
\t}
}`.trim();function O0(G,X,z){var K=G.createShader(G.VERTEX_SHADER);if(G.shaderSource(K,X),G.compileShader(K),!G.getShaderParameter(K,G.COMPILE_STATUS))throw new Error(G.getShaderInfoLog(K)||"");var Z=G.createShader(G.FRAGMENT_SHADER);if(G.shaderSource(Z,z),G.compileShader(Z),!G.getShaderParameter(Z,G.COMPILE_STATUS))throw new Error(G.getShaderInfoLog(Z)||"");var J=G.createProgram();if(G.attachShader(J,K),G.attachShader(J,Z),G.linkProgram(J),!G.getProgramParameter(J,G.LINK_STATUS))throw new Error(G.getProgramInfoLog(J)||"");return J}function X0(G){var X=new Float32Array([0,0,1,0,0,1,1,1]),z=G.createBuffer();G.bindBuffer(G.ARRAY_BUFFER,z),G.bufferData(G.ARRAY_BUFFER,X,G.STATIC_DRAW),G.enableVertexAttribArray(0),G.vertexAttribPointer(0,2,G.FLOAT,!1,0,0)}function d0(G,X){var z=G.createTexture();return G.bindTexture(G.TEXTURE_2D,z),G.texParameteri(G.TEXTURE_2D,G.TEXTURE_MAG_FILTER,G.NEAREST),G.texParameteri(G.TEXTURE_2D,G.TEXTURE_MIN_FILTER,G.NEAREST),G.texParameteri(G.TEXTURE_2D,G.TEXTURE_WRAP_S,G.REPEAT),G.texParameteri(G.TEXTURE_2D,G.TEXTURE_WRAP_T,G.REPEAT),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,0),G.texImage2D(G.TEXTURE_2D,0,G.RGBA,G.RGBA,G.UNSIGNED_BYTE,X),z}var C0={};function _0(G){if(!(G in C0)){var X;if(G=="transparent")X=[0,0,0,0];else if(G.indexOf("rgba")>-1){X=(G.match(/[\d.]+/g)||[]).map(Number);for(var z=0;z<3;z++)X[z]=X[z]/255}else X=y(G).map(function(K){return K/255}),X.push(1);C0[G]=X}return C0[G]}function y6(G){return"\x1B[0;48;5;"+P1(G)+"m\x1B[2J"}function p6(G,X){return"\x1B[0;38;5;"+P1(G)+";48;5;"+P1(X)+"m"}function c6(G,X){return"\x1B["+(X+1)+";"+(G+1)+"H"}function P1(G){var X=256,z=6,K=z/X,Z=y(G),J=Math.floor(Z[0]*K),V=Math.floor(Z[1]*K),U=Math.floor(Z[2]*K);return J*36+V*6+U*1+16}var m1=function(G){K0(X,G);function X(){var K=G.call(this)||this;return K._offset=[0,0],K._cursor=[-1,-1],K._lastColor="",K}var z=X.prototype;return z.schedule=function K(Z){setTimeout(Z,16.666666666666668)},z.setOptions=function K(Z){G.prototype.setOptions.call(this,Z);var J=[Z.width,Z.height],V=this.computeSize();this._offset=V.map(function(U,$){return Math.floor((U-J[$])/2)})},z.clear=function K(){process.stdout.write(y6(this._options.bg))},z.draw=function K(Z,J){var V=Z[0],U=Z[1],$=Z[2],w=Z[3],L=Z[4],H=this._offset[0]+V,P=this._offset[1]+U,D=this.computeSize();if(H<0||H>=D[0])return;if(P<0||P>=D[1])return;if(H!==this._cursor[0]||P!==this._cursor[1])process.stdout.write(c6(H,P)),this._cursor[0]=H,this._cursor[1]=P;if(J){if(!$)$=" "}if(!$)return;var W=p6(w,L);if(W!==this._lastColor)process.stdout.write(W),this._lastColor=W;if($!="\t"){var O=[].concat($);process.stdout.write(O[0])}if(this._cursor[0]++,this._cursor[0]>=D[0])this._cursor[0]=0,this._cursor[1]++},z.computeFontSize=function K(){throw new Error("Terminal backend has no notion of font size")},z.eventToPosition=function K(Z,J){return[Z,J]},z.computeSize=function K(){return[process.stdout.columns,process.stdout.rows]},X}(F),d6=/%([bc]){([^}]*)}/g,A0=0,v0=1,F1=2,D1=3;function l6(G,X){var z={width:0,height:1},K=W1(G,X),Z=0;for(var J=0;J<K.length;J++){var V=K[J];switch(V.type){case A0:Z+=V.value.length;break;case v0:z.height++,z.width=Math.max(z.width,Z),Z=0;break}}return z.width=Math.max(z.width,Z),z}function W1(G,X){var z=[],K=0;G.replace(d6,function(J,V,U,$){var w=G.substring(K,$);if(w.length)z.push({type:A0,value:w});return z.push({type:V=="c"?F1:D1,value:U.trim()}),K=$+J.length,""});var Z=G.substring(K);if(Z.length)z.push({type:A0,value:Z});return n6(z,X)}function n6(G,X){if(!X)X=1/0;var z=0,K=0,Z=-1;while(z<G.length){var J=G[z];if(J.type==v0)K=0,Z=-1;if(J.type!=A0){z++;continue}while(K==0&&J.value.charAt(0)==" ")J.value=J.value.substring(1);var V=J.value.indexOf(`
`);if(V!=-1){J.value=Z1(G,z,V,!0);var U=J.value.split("");while(U.length&&U[U.length-1]==" ")U.pop();J.value=U.join("")}if(!J.value.length){G.splice(z,1);continue}if(K+J.value.length>X){var $=-1;while(!0){var w=J.value.indexOf(" ",$+1);if(w==-1)break;if(K+w>X)break;$=w}if($!=-1)J.value=Z1(G,z,$,!0);else if(Z!=-1){var L=G[Z],H=L.value.lastIndexOf(" ");L.value=Z1(G,Z,H,!0),z=Z}else J.value=Z1(G,z,X-K,!1)}else if(K+=J.value.length,J.value.indexOf(" ")!=-1)Z=z;z++}G.push({type:v0});var P=null;for(var D=0;D<G.length;D++){var W=G[D];switch(W.type){case A0:P=W;break;case v0:if(P){var O=P.value.split("");while(O.length&&O[O.length-1]==" ")O.pop();P.value=O.join("")}P=null;break}}return G.pop(),G}function Z1(G,X,z,K){var Z={type:v0},J={type:A0,value:G[X].value.substring(z+(K?1:0))};return G.splice(X+1,0,Z,J),G[X].value.substring(0,z)}var r6=Object.freeze({__proto__:null,TYPE_TEXT:A0,TYPE_NEWLINE:v0,TYPE_FG:F1,TYPE_BG:D1,measure:l6,tokenize:W1}),M1=80,O1=25,$0={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},s6={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},o6={hex:g,rect:h,tile:m,"tile-gl":e,term:m1},a6={width:M1,height:O1,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},m0=function(){function G(z){if(z===void 0)z={};this._data={},this._dirty=!1,this._options={},z=Object.assign({},a6,z),this.setOptions(z),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var X=G.prototype;return X.DEBUG=function z(K,Z,J){var V=[this._options.bg,this._options.fg];this.draw(K,Z,null,null,V[J%V.length])},X.clear=function z(){this._data={},this._dirty=!0},X.setOptions=function z(K){if(Object.assign(this._options,K),K.width||K.height||K.fontSize||K.fontFamily||K.spacing||K.layout){if(K.layout){var Z=o6[K.layout];this._backend=new Z}this._backend.setOptions(this._options),this._dirty=!0}return this},X.getOptions=function z(){return this._options},X.getContainer=function z(){return this._backend.getContainer()},X.computeSize=function z(K,Z){return this._backend.computeSize(K,Z)},X.computeFontSize=function z(K,Z){return this._backend.computeFontSize(K,Z)},X.computeTileSize=function z(K,Z){var J=Math.floor(K/this._options.width),V=Math.floor(Z/this._options.height);return[J,V]},X.eventToPosition=function z(K){var Z,J;if("touches"in K)Z=K.touches[0].clientX,J=K.touches[0].clientY;else Z=K.clientX,J=K.clientY;return this._backend.eventToPosition(Z,J)},X.draw=function z(K,Z,J,V,U){if(!V)V=this._options.fg;if(!U)U=this._options.bg;var $=K+","+Z;if(this._data[$]=[K,Z,J,V,U],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[$]=!0},X.drawOver=function z(K,Z,J,V,U){var $=K+","+Z,w=this._data[$];if(w)w[2]=J||w[2],w[3]=V||w[3],w[4]=U||w[4];else this.draw(K,Z,J,V,U)},X.drawText=function z(K,Z,J,V){var U=null,$=null,w=K,L=Z,H=1;if(!V)V=this._options.width-K;var P=W1(J,V);while(P.length){var D=P.shift();switch(D.type){case A0:var W=!1,O=!1,j=!1,v=!1;for(var u=0;u<D.value.length;u++){var x=D.value.charCodeAt(u),p=D.value.charAt(u);if(this._options.layout==="term"){var a=x>>8,Z0=a===17||a>=46&&a<=159||a>=172&&a<=215||x>=43360&&x<=43391;if(Z0){this.draw(w+0,L,p,U,$),this.draw(w+1,L,"\t",U,$),w+=2;continue}}if(j=x>65280&&x<65377||x>65500&&x<65512||x>65518,W=p.charCodeAt(0)==32||p.charCodeAt(0)==12288,v&&!j&&!W)w++;if(j&&!O)w++;this.draw(w++,L,p,U,$),O=W,v=j}break;case F1:U=D.value||null;break;case D1:$=D.value||null;break;case v0:w=K,L++,H++;break}}return H},X._tick=function z(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var K in this._data)this._draw(K,!1)}else for(var Z in this._dirty)this._draw(Z,!0);this._dirty=!1},X._draw=function z(K,Z){var J=this._data[K];if(J[4]!=this._options.bg)Z=!0;this._backend.draw(J,Z)},G}();m0.Rect=h,m0.Hex=g,m0.Tile=m,m0.TileGL=e,m0.Term=m1;var i6=function(){function G(z){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,z),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var K=0;K<this._options.order;K++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var X=G.prototype;return X.clear=function z(){this._data={},this._priorValues={}},X.generate=function z(){var K=[this._sample(this._prefix)];while(K[K.length-1]!=this._boundary)K.push(this._sample(K));return this._join(K.slice(0,-1))},X.observe=function z(K){var Z=this._split(K);for(var J=0;J<Z.length;J++)this._priorValues[Z[J]]=this._options.prior;Z=this._prefix.concat(Z).concat(this._suffix);for(var V=this._options.order;V<Z.length;V++){var U=Z.slice(V-this._options.order,V),$=Z[V];for(var w=0;w<U.length;w++){var L=U.slice(w);this._observeEvent(L,$)}}},X.getStats=function z(){var K=[],Z=Object.keys(this._priorValues).length;Z--,K.push("distinct samples: "+Z);var J=Object.keys(this._data).length,V=0;for(var U in this._data)V+=Object.keys(this._data[U]).length;return K.push("dictionary size (contexts): "+J),K.push("dictionary size (events): "+V),K.join(", ")},X._split=function z(K){return K.split(this._options.words?/\s+/:"")},X._join=function z(K){return K.join(this._options.words?" ":"")},X._observeEvent=function z(K,Z){var J=this._join(K);if(!(J in this._data))this._data[J]={};var V=this._data[J];if(!(Z in V))V[Z]=0;V[Z]++},X._sample=function z(K){K=this._backoff(K);var Z=this._join(K),J=this._data[Z],V={};if(this._options.prior){for(var U in this._priorValues)V[U]=this._priorValues[U];for(var $ in J)V[$]+=J[$]}else V=J;return Y.getWeightedValue(V)},X._backoff=function z(K){if(K.length>this._options.order)K=K.slice(-this._options.order);else if(K.length<this._options.order)K=this._prefix.slice(0,this._options.order-K.length).concat(K);while(!(this._join(K)in this._data)&&K.length>0)K=K.slice(1);return K},G}(),y1=function(){function G(){this.heap=[],this.timestamp=0}var X=G.prototype;return X.lessThan=function z(K,Z){return K.key==Z.key?K.timestamp<Z.timestamp:K.key<Z.key},X.shift=function z(K){this.heap=this.heap.map(function(Z){var{key:J,value:V,timestamp:U}=Z;return{key:J+K,value:V,timestamp:U}})},X.len=function z(){return this.heap.length},X.push=function z(K,Z){this.timestamp+=1;var J=this.len();this.heap.push({value:K,timestamp:this.timestamp,key:Z}),this.updateUp(J)},X.pop=function z(){if(this.len()==0)throw new Error("no element to pop");var K=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return K},X.find=function z(K){for(var Z=0;Z<this.len();Z++)if(K==this.heap[Z].value)return this.heap[Z];return null},X.remove=function z(K){var Z=null;for(var J=0;J<this.len();J++)if(K==this.heap[J].value)Z=J;if(Z===null)return!1;if(this.len()>1){var V=this.heap.pop();if(V.value!=K)this.heap[Z]=V,this.updateDown(Z);return!0}else this.heap.pop();return!0},X.parentNode=function z(K){return Math.floor((K-1)/2)},X.leftChildNode=function z(K){return 2*K+1},X.rightChildNode=function z(K){return 2*K+2},X.existNode=function z(K){return K>=0&&K<this.heap.length},X.swap=function z(K,Z){var J=this.heap[K];this.heap[K]=this.heap[Z],this.heap[Z]=J},X.minNode=function z(K){var Z=K.filter(this.existNode.bind(this)),J=Z[0];for(var V=dZ(Z),U;!(U=V()).done;){var $=U.value;if(this.lessThan(this.heap[$],this.heap[J]))J=$}return J},X.updateUp=function z(K){if(K==0)return;var Z=this.parentNode(K);if(this.existNode(Z)&&this.lessThan(this.heap[K],this.heap[Z]))this.swap(K,Z),this.updateUp(Z)},X.updateDown=function z(K){var Z=this.leftChildNode(K),J=this.rightChildNode(K);if(!this.existNode(Z))return;var V=this.minNode([K,Z,J]);if(V!=K)this.swap(K,V),this.updateDown(V)},X.debugPrint=function z(){console.log(this.heap)},G}(),p1=function(){function G(){this._time=0,this._events=new y1}var X=G.prototype;return X.getTime=function z(){return this._time},X.clear=function z(){return this._events=new y1,this},X.add=function z(K,Z){this._events.push(K,Z)},X.get=function z(){if(!this._events.len())return null;var K=this._events.pop(),Z=K.key,J=K.value;if(Z>0)this._time+=Z,this._events.shift(-Z);return J},X.getEventTime=function z(K){var Z=this._events.find(K);if(Z){var J=Z.key;return J}return},X.remove=function z(K){return this._events.remove(K)},G}(),R1=function(){function G(){this._queue=new p1,this._repeat=[],this._current=null}var X=G.prototype;return X.getTime=function z(){return this._queue.getTime()},X.add=function z(K,Z){if(Z)this._repeat.push(K);return this},X.getTimeOf=function z(K){return this._queue.getEventTime(K)},X.clear=function z(){return this._queue.clear(),this._repeat=[],this._current=null,this},X.remove=function z(K){var Z=this._queue.remove(K),J=this._repeat.indexOf(K);if(J!=-1)this._repeat.splice(J,1);if(this._current==K)this._current=null;return Z},X.next=function z(){return this._current=this._queue.get(),this._current},G}(),t6=function(G){K0(X,G);function X(){return G.apply(this,arguments)||this}var z=X.prototype;return z.add=function K(Z,J){return this._queue.add(Z,0),G.prototype.add.call(this,Z,J)},z.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return G.prototype.next.call(this)},X}(R1),e6=function(G){K0(X,G);function X(){return G.apply(this,arguments)||this}var z=X.prototype;return z.add=function K(Z,J,V){return this._queue.add(Z,V!==void 0?V:1/Z.getSpeed()),G.prototype.add.call(this,Z,J)},z.next=function K(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return G.prototype.next.call(this)},X}(R1),ZZ=function(G){K0(X,G);function X(){var K=G.call(this)||this;return K._defaultDuration=1,K._duration=K._defaultDuration,K}var z=X.prototype;return z.add=function K(Z,J,V){return this._queue.add(Z,V||this._defaultDuration),G.prototype.add.call(this,Z,J)},z.clear=function K(){return this._duration=this._defaultDuration,G.prototype.clear.call(this)},z.remove=function K(Z){if(Z==this._current)this._duration=this._defaultDuration;return G.prototype.remove.call(this,Z)},z.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return G.prototype.next.call(this)},z.setDuration=function K(Z){if(this._current)this._duration=Z;return this},X}(R1),JZ={Simple:t6,Speed:e6,Action:ZZ},j1=function(){function G(z,K){if(K===void 0)K={};this._lightPasses=z,this._options=Object.assign({topology:8},K)}var X=G.prototype;return X._getCircle=function z(K,Z,J){var V=[],U,$,w;switch(this._options.topology){case 4:$=1,w=[0,1],U=[$0[8][7],$0[8][1],$0[8][3],$0[8][5]];break;case 6:U=$0[6],$=1,w=[-1,1];break;case 8:U=$0[4],$=2,w=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var L=K+w[0]*J,H=Z+w[1]*J;for(var P=0;P<U.length;P++)for(var D=0;D<J*$;D++)V.push([L,H]),L+=U[P][0],H+=U[P][1];return V},G}(),QZ=function(G){K0(X,G);function X(){return G.apply(this,arguments)||this}var z=X.prototype;return z.compute=function K(Z,J,V,U){if(U(Z,J,0,1),!this._lightPasses(Z,J))return;var $=[],w,L,H,P,D;for(var W=1;W<=V;W++){var O=this._getCircle(Z,J,W),j=360/O.length;for(var v=0;v<O.length;v++){if(H=O[v][0],P=O[v][1],w=j*(v-0.5),L=w+j,D=!this._lightPasses(H,P),this._visibleCoords(Math.floor(w),Math.ceil(L),D,$))U(H,P,W,1);if($.length==2&&$[0]==0&&$[1]==360)return}}},z._visibleCoords=function K(Z,J,V,U){if(Z<0){var $=this._visibleCoords(0,J,V,U),w=this._visibleCoords(360+Z,360,V,U);return $||w}var L=0;while(L<U.length&&U[L]<Z)L++;if(L==U.length){if(V)U.push(Z,J);return!0}var H=0;if(L%2){while(L<U.length&&U[L]<J)L++,H++;if(H==0)return!1;if(V)if(H%2)U.splice(L-H,H,J);else U.splice(L-H,H);return!0}else{while(L<U.length&&U[L]<J)L++,H++;if(Z==U[L-H]&&H==1)return!1;if(V)if(H%2)U.splice(L-H,H,Z);else U.splice(L-H,H,Z,J);return!0}},X}(j1),VZ=function(G){K0(X,G);function X(){return G.apply(this,arguments)||this}var z=X.prototype;return z.compute=function K(Z,J,V,U){if(U(Z,J,0,1),!this._lightPasses(Z,J))return;var $=[],w,L,H,P,D,W;for(var O=1;O<=V;O++){var j=this._getCircle(Z,J,O),v=j.length;for(var u=0;u<v;u++){if(w=j[u][0],L=j[u][1],P=[u?2*u-1:2*v-1,2*v],D=[2*u+1,2*v],H=!this._lightPasses(w,L),W=this._checkVisibility(P,D,H,$),W)U(w,L,O,W);if($.length==2&&$[0][0]==0&&$[1][0]==$[1][1])return}}},z._checkVisibility=function K(Z,J,V,U){if(Z[0]>J[0]){var $=this._checkVisibility(Z,[Z[1],Z[1]],V,U),w=this._checkVisibility([0,1],J,V,U);return($+w)/2}var L=0,H=!1;while(L<U.length){var P=U[L],D=P[0]*Z[1]-Z[0]*P[1];if(D>=0){if(D==0&&!(L%2))H=!0;break}L++}var W=U.length,O=!1;while(W--){var j=U[W],v=J[0]*j[1]-j[0]*J[1];if(v>=0){if(v==0&&W%2)O=!0;break}}var u=!0;if(L==W&&(H||O))u=!1;else if(H&&O&&L+1==W&&W%2)u=!1;else if(L>W&&L%2)u=!1;if(!u)return 0;var x,p=W-L+1;if(p%2)if(L%2){var a=U[L];if(x=(J[0]*a[1]-a[0]*J[1])/(a[1]*J[1]),V)U.splice(L,p,J)}else{var Z0=U[W];if(x=(Z0[0]*Z[1]-Z[0]*Z0[1])/(Z[1]*Z0[1]),V)U.splice(L,p,Z)}else if(L%2){var U0=U[L],L0=U[W];if(x=(L0[0]*U0[1]-U0[0]*L0[1])/(U0[1]*L0[1]),V)U.splice(L,p)}else{if(V)U.splice(L,p,Z,J);return 1}var R0=(J[0]*Z[1]-Z[0]*J[1])/(Z[1]*J[1]);return x/R0},X}(j1),N0=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],KZ=function(G){K0(X,G);function X(){return G.apply(this,arguments)||this}var z=X.prototype;return z.compute=function K(Z,J,V,U){U(Z,J,0,1);for(var $=0;$<N0.length;$++)this._renderOctant(Z,J,N0[$],V,U)},z.compute180=function K(Z,J,V,U,$){$(Z,J,0,1);var w=(U-1+8)%8,L=(U-2+8)%8,H=(U+1+8)%8;this._renderOctant(Z,J,N0[L],V,$),this._renderOctant(Z,J,N0[w],V,$),this._renderOctant(Z,J,N0[U],V,$),this._renderOctant(Z,J,N0[H],V,$)},z.compute90=function K(Z,J,V,U,$){$(Z,J,0,1);var w=(U-1+8)%8;this._renderOctant(Z,J,N0[U],V,$),this._renderOctant(Z,J,N0[w],V,$)},z._renderOctant=function K(Z,J,V,U,$){this._castVisibility(Z,J,1,1,0,U+1,V[0],V[1],V[2],V[3],$)},z._castVisibility=function K(Z,J,V,U,$,w,L,H,P,D,W){if(U<$)return;for(var O=V;O<=w;O++){var j=-O-1,v=-O,u=!1,x=0;while(j<=0){j+=1;var p=Z+j*L+v*H,a=J+j*P+v*D,Z0=(j-0.5)/(v+0.5),U0=(j+0.5)/(v-0.5);if(U0>U)continue;if(Z0<$)break;if(j*j+v*v<w*w)W(p,a,O,1);if(!u){if(!this._lightPasses(p,a)&&O<w)u=!0,this._castVisibility(Z,J,O+1,U,Z0,w,L,H,P,D,W),x=U0}else{if(!this._lightPasses(p,a)){x=U0;continue}u=!1,U=x}}if(u)break}},X}(j1),UZ={DiscreteShadowcasting:QZ,PreciseShadowcasting:VZ,RecursiveShadowcasting:KZ},f0=function(){function G(z,K){if(z===void 0)z=M1;if(K===void 0)K=O1;this._width=z,this._height=K}var X=G.prototype;return X._fillMap=function z(K){var Z=[];for(var J=0;J<this._width;J++){Z.push([]);for(var V=0;V<this._height;V++)Z[J].push(K)}return Z},G}(),qZ=function(G){K0(X,G);function X(){return G.apply(this,arguments)||this}var z=X.prototype;return z.create=function K(Z){var J=this._width-1,V=this._height-1;for(var U=0;U<=J;U++)for(var $=0;$<=V;$++){var w=U&&$&&U<J&&$<V;Z(U,$,w?0:1)}return this},X}(f0),c1=function(G){K0(X,G);function X(K,Z){var J=G.call(this,K,Z)||this;return J._rooms=[],J._corridors=[],J}var z=X.prototype;return z.getRooms=function K(){return this._rooms},z.getCorridors=function K(){return this._corridors},X}(f0),d1=function G(){},J1=function(G){K0(X,G);function X(K,Z,J,V,U,$){var w=G.call(this)||this;if(w._x1=K,w._y1=Z,w._x2=J,w._y2=V,w._doors={},U!==void 0&&$!==void 0)w.addDoor(U,$);return w}X.createRandomAt=function K(Z,J,V,U,$){var w=$.roomWidth[0],L=$.roomWidth[1],H=Y.getUniformInt(w,L);w=$.roomHeight[0],L=$.roomHeight[1];var P=Y.getUniformInt(w,L);if(V==1){var D=J-Math.floor(Y.getUniform()*P);return new this(Z+1,D,Z+H,D+P-1,Z,J)}if(V==-1){var W=J-Math.floor(Y.getUniform()*P);return new this(Z-H,W,Z-1,W+P-1,Z,J)}if(U==1){var O=Z-Math.floor(Y.getUniform()*H);return new this(O,J+1,O+H-1,J+P,Z,J)}if(U==-1){var j=Z-Math.floor(Y.getUniform()*H);return new this(j,J-P,j+H-1,J-1,Z,J)}throw new Error("dx or dy must be 1 or -1")},X.createRandomCenter=function K(Z,J,V){var U=V.roomWidth[0],$=V.roomWidth[1],w=Y.getUniformInt(U,$);U=V.roomHeight[0],$=V.roomHeight[1];var L=Y.getUniformInt(U,$),H=Z-Math.floor(Y.getUniform()*w),P=J-Math.floor(Y.getUniform()*L),D=H+w-1,W=P+L-1;return new this(H,P,D,W)},X.createRandom=function K(Z,J,V){var U=V.roomWidth[0],$=V.roomWidth[1],w=Y.getUniformInt(U,$);U=V.roomHeight[0],$=V.roomHeight[1];var L=Y.getUniformInt(U,$),H=Z-w-1,P=J-L-1,D=1+Math.floor(Y.getUniform()*H),W=1+Math.floor(Y.getUniform()*P),O=D+w-1,j=W+L-1;return new this(D,W,O,j)};var z=X.prototype;return z.addDoor=function K(Z,J){return this._doors[Z+","+J]=1,this},z.getDoors=function K(Z){for(var J in this._doors){var V=J.split(",");Z(parseInt(V[0]),parseInt(V[1]))}return this},z.clearDoors=function K(){return this._doors={},this},z.addDoors=function K(Z){var J=this._x1-1,V=this._x2+1,U=this._y1-1,$=this._y2+1;for(var w=J;w<=V;w++)for(var L=U;L<=$;L++){if(w!=J&&w!=V&&L!=U&&L!=$)continue;if(Z(w,L))continue;this.addDoor(w,L)}return this},z.debug=function K(){console.log("room",this._x1,this._y1,this._x2,this._y2)},z.isValid=function K(Z,J){var V=this._x1-1,U=this._x2+1,$=this._y1-1,w=this._y2+1;for(var L=V;L<=U;L++)for(var H=$;H<=w;H++)if(L==V||L==U||H==$||H==w){if(!Z(L,H))return!1}else if(!J(L,H))return!1;return!0},z.create=function K(Z){var J=this._x1-1,V=this._x2+1,U=this._y1-1,$=this._y2+1,w=0;for(var L=J;L<=V;L++)for(var H=U;H<=$;H++){if(L+","+H in this._doors)w=2;else if(L==J||L==V||H==U||H==$)w=1;else w=0;Z(L,H,w)}},z.getCenter=function K(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},z.getLeft=function K(){return this._x1},z.getRight=function K(){return this._x2},z.getTop=function K(){return this._y1},z.getBottom=function K(){return this._y2},X}(d1),E1=function(G){K0(X,G);function X(K,Z,J,V){var U=G.call(this)||this;return U._startX=K,U._startY=Z,U._endX=J,U._endY=V,U._endsWithAWall=!0,U}X.createRandomAt=function K(Z,J,V,U,$){var w=$.corridorLength[0],L=$.corridorLength[1],H=Y.getUniformInt(w,L);return new this(Z,J,Z+V*H,J+U*H)};var z=X.prototype;return z.debug=function K(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},z.isValid=function K(Z,J){var V=this._startX,U=this._startY,$=this._endX-V,w=this._endY-U,L=1+Math.max(Math.abs($),Math.abs(w));if($)$=$/Math.abs($);if(w)w=w/Math.abs(w);var H=w,P=-$,D=!0;for(var W=0;W<L;W++){var O=V+W*$,j=U+W*w;if(!J(O,j))D=!1;if(!Z(O+H,j+P))D=!1;if(!Z(O-H,j-P))D=!1;if(!D){L=W,this._endX=O-$,this._endY=j-w;break}}if(L==0)return!1;if(L==1&&Z(this._endX+$,this._endY+w))return!1;var v=!Z(this._endX+$+H,this._endY+w+P),u=!Z(this._endX+$-H,this._endY+w-P);if(this._endsWithAWall=Z(this._endX+$,this._endY+w),(v||u)&&this._endsWithAWall)return!1;return!0},z.create=function K(Z){var J=this._startX,V=this._startY,U=this._endX-J,$=this._endY-V,w=1+Math.max(Math.abs(U),Math.abs($));if(U)U=U/Math.abs(U);if($)$=$/Math.abs($);for(var L=0;L<w;L++){var H=J+L*U,P=V+L*$;Z(H,P,0)}return!0},z.createPriorityWalls=function K(Z){if(!this._endsWithAWall)return;var J=this._startX,V=this._startY,U=this._endX-J,$=this._endY-V;if(U)U=U/Math.abs(U);if($)$=$/Math.abs($);var w=$,L=-U;Z(this._endX+U,this._endY+$),Z(this._endX+w,this._endY+L),Z(this._endX-w,this._endY-L)},X}(d1),zZ=function(G){K0(X,G);function X(K,Z,J){var V=G.call(this,K,Z)||this;return V._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(V._options,J),V._map=[],V._dug=0,V._roomAttempts=20,V._corridorAttempts=20,V._connected=[],V._unconnected=[],V._digCallback=V._digCallback.bind(g0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(g0(V)),V._isWallCallback=V._isWallCallback.bind(g0(V)),V}var z=X.prototype;return z.create=function K(Z){var J=Date.now();while(!0){var V=Date.now();if(V-J>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(Z)for(var U=0;U<this._width;U++)for(var $=0;$<this._height;$++)Z(U,$,this._map[U][$]);return this},z._generateRooms=function K(){var Z=this._width-2,J=this._height-2,V;do if(V=this._generateRoom(),this._dug/(Z*J)>this._options.roomDugPercentage)break;while(V)},z._generateRoom=function K(){var Z=0;while(Z<this._roomAttempts){Z++;var J=J1.createRandom(this._width,this._height,this._options);if(!J.isValid(this._isWallCallback,this._canBeDugCallback))continue;return J.create(this._digCallback),this._rooms.push(J),J}return null},z._generateCorridors=function K(){var Z=0;while(Z<this._corridorAttempts){Z++,this._corridors=[],this._map=this._fillMap(1);for(var J=0;J<this._rooms.length;J++){var V=this._rooms[J];V.clearDoors(),V.create(this._digCallback)}if(this._unconnected=Y.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var U=Y.getItem(this._connected);if(!U)break;var $=this._closestRoom(this._unconnected,U);if(!$)break;var w=this._closestRoom(this._connected,$);if(!w)break;var L=this._connectRooms($,w);if(!L)break;if(!this._unconnected.length)return!0}}return!1},z._closestRoom=function K(Z,J){var V=1/0,U=J.getCenter(),$=null;for(var w=0;w<Z.length;w++){var L=Z[w],H=L.getCenter(),P=H[0]-U[0],D=H[1]-U[1],W=P*P+D*D;if(W<V)V=W,$=L}return $},z._connectRooms=function K(Z,J){var V=Z.getCenter(),U=J.getCenter(),$=U[0]-V[0],w=U[1]-V[1],L,H,P,D,W,O,j;if(Math.abs($)<Math.abs(w))P=w>0?2:0,D=(P+2)%4,W=J.getLeft(),O=J.getRight(),j=0;else P=$>0?1:3,D=(P+2)%4,W=J.getTop(),O=J.getBottom(),j=1;if(L=this._placeInWall(Z,P),!L)return!1;if(L[j]>=W&&L[j]<=O){H=L.slice();var v=0;switch(D){case 0:v=J.getTop()-1;break;case 1:v=J.getRight()+1;break;case 2:v=J.getBottom()+1;break;case 3:v=J.getLeft()-1;break}H[(j+1)%2]=v,this._digLine([L,H])}else if(L[j]<W-1||L[j]>O+1){var u=L[j]-U[j],x=0;switch(D){case 0:case 1:x=u<0?3:1;break;case 2:case 3:x=u<0?1:3;break}if(D=(D+x)%4,H=this._placeInWall(J,D),!H)return!1;var p=[0,0];p[j]=L[j];var a=(j+1)%2;p[a]=H[a],this._digLine([L,p,H])}else{var Z0=(j+1)%2;if(H=this._placeInWall(J,D),!H)return!1;var U0=Math.round((H[Z0]+L[Z0])/2),L0=[0,0],R0=[0,0];L0[j]=L[j],L0[Z0]=U0,R0[j]=H[j],R0[Z0]=U0,this._digLine([L,L0,R0,H])}if(Z.addDoor(L[0],L[1]),J.addDoor(H[0],H[1]),j=this._unconnected.indexOf(Z),j!=-1)this._unconnected.splice(j,1),this._connected.push(Z);if(j=this._unconnected.indexOf(J),j!=-1)this._unconnected.splice(j,1),this._connected.push(J);return!0},z._placeInWall=function K(Z,J){var V=[0,0],U=[0,0],$=0;switch(J){case 0:U=[1,0],V=[Z.getLeft(),Z.getTop()-1],$=Z.getRight()-Z.getLeft()+1;break;case 1:U=[0,1],V=[Z.getRight()+1,Z.getTop()],$=Z.getBottom()-Z.getTop()+1;break;case 2:U=[1,0],V=[Z.getLeft(),Z.getBottom()+1],$=Z.getRight()-Z.getLeft()+1;break;case 3:U=[0,1],V=[Z.getLeft()-1,Z.getTop()],$=Z.getBottom()-Z.getTop()+1;break}var w=[],L=-2;for(var H=0;H<$;H++){var P=V[0]+H*U[0],D=V[1]+H*U[1];w.push(null);var W=this._map[P][D]==1;if(W){if(L!=H-1)w[H]=[P,D]}else if(L=H,H)w[H-1]=null}for(var O=w.length-1;O>=0;O--)if(!w[O])w.splice(O,1);return w.length?Y.getItem(w):null},z._digLine=function K(Z){for(var J=1;J<Z.length;J++){var V=Z[J-1],U=Z[J],$=new E1(V[0],V[1],U[0],U[1]);$.create(this._digCallback),this._corridors.push($)}},z._digCallback=function K(Z,J,V){if(this._map[Z][J]=V,V==0)this._dug++},z._isWallCallback=function K(Z,J){if(Z<0||J<0||Z>=this._width||J>=this._height)return!1;return this._map[Z][J]==1},z._canBeDugCallback=function K(Z,J){if(Z<1||J<1||Z+1>=this._width||J+1>=this._height)return!1;return this._map[Z][J]==1},X}(c1),$Z=function(G){K0(X,G);function X(K,Z,J){var V;if(J===void 0)J={};return V=G.call(this,K,Z)||this,V._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},V.setOptions(J),V._dirs=$0[V._options.topology],V._map=V._fillMap(0),V}var z=X.prototype;return z.randomize=function K(Z){for(var J=0;J<this._width;J++)for(var V=0;V<this._height;V++)this._map[J][V]=Y.getUniform()<Z?1:0;return this},z.setOptions=function K(Z){Object.assign(this._options,Z)},z.set=function K(Z,J,V){this._map[Z][J]=V},z.create=function K(Z){var J=this._fillMap(0),V=this._options.born,U=this._options.survive;for(var $=0;$<this._height;$++){var w=1,L=0;if(this._options.topology==6)w=2,L=$%2;for(var H=L;H<this._width;H+=w){var P=this._map[H][$],D=this._getNeighbors(H,$);if(P&&U.indexOf(D)!=-1)J[H][$]=1;else if(!P&&V.indexOf(D)!=-1)J[H][$]=1}}this._map=J,Z&&this._serviceCallback(Z)},z._serviceCallback=function K(Z){for(var J=0;J<this._height;J++){var V=1,U=0;if(this._options.topology==6)V=2,U=J%2;for(var $=U;$<this._width;$+=V)Z($,J,this._map[$][J])}},z._getNeighbors=function K(Z,J){var V=0;for(var U=0;U<this._dirs.length;U++){var $=this._dirs[U],w=Z+$[0],L=J+$[1];if(w<0||w>=this._width||L<0||L>=this._height)continue;V+=this._map[w][L]==1?1:0}return V},z.connect=function K(Z,J,V){if(!J)J=0;var U=[],$={},w=1,L=[0,0];if(this._options.topology==6)w=2,L=[0,1];for(var H=0;H<this._height;H++)for(var P=L[H%2];P<this._width;P+=w)if(this._freeSpace(P,H,J)){var D=[P,H];$[this._pointKey(D)]=D,U.push([P,H])}var W=U[Y.getUniformInt(0,U.length-1)],O=this._pointKey(W),j={};j[O]=W,delete $[O],this._findConnected(j,$,[W],!1,J);while(Object.keys($).length>0){var v=this._getFromTo(j,$),u=v[0],x=v[1],p={};p[this._pointKey(u)]=u,this._findConnected(p,$,[u],!0,J);var a=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;a.call(this,x,u,j,$,J,V);for(var Z0 in p){var U0=p[Z0];this._map[U0[0]][U0[1]]=J,j[Z0]=U0,delete $[Z0]}}Z&&this._serviceCallback(Z)},z._getFromTo=function K(Z,J){var V=[0,0],U=[0,0],$,w=Object.keys(Z),L=Object.keys(J);for(var H=0;H<5;H++){if(w.length<L.length){var P=w;U=Z[P[Y.getUniformInt(0,P.length-1)]],V=this._getClosest(U,J)}else{var D=L;V=J[D[Y.getUniformInt(0,D.length-1)]],U=this._getClosest(V,Z)}if($=(V[0]-U[0])*(V[0]-U[0])+(V[1]-U[1])*(V[1]-U[1]),$<64)break}return[V,U]},z._getClosest=function K(Z,J){var V=null,U=null;for(var $ in J){var w=J[$],L=(w[0]-Z[0])*(w[0]-Z[0])+(w[1]-Z[1])*(w[1]-Z[1]);if(U==null||L<U)U=L,V=w}return V},z._findConnected=function K(Z,J,V,U,$){while(V.length>0){var w=V.splice(0,1)[0],L=void 0;if(this._options.topology==6)L=[[w[0]+2,w[1]],[w[0]+1,w[1]-1],[w[0]-1,w[1]-1],[w[0]-2,w[1]],[w[0]-1,w[1]+1],[w[0]+1,w[1]+1]];else L=[[w[0]+1,w[1]],[w[0]-1,w[1]],[w[0],w[1]+1],[w[0],w[1]-1]];for(var H=0;H<L.length;H++){var P=this._pointKey(L[H]);if(Z[P]==null&&this._freeSpace(L[H][0],L[H][1],$)){if(Z[P]=L[H],!U)delete J[P];V.push(L[H])}}}},z._tunnelToConnected=function K(Z,J,V,U,$,w){var L,H;if(J[0]<Z[0])L=J,H=Z;else L=Z,H=J;for(var P=L[0];P<=H[0];P++){this._map[P][L[1]]=$;var D=[P,L[1]],W=this._pointKey(D);V[W]=D,delete U[W]}if(w&&L[0]<H[0])w(L,[H[0],L[1]]);var O=H[0];if(J[1]<Z[1])L=J,H=Z;else L=Z,H=J;for(var j=L[1];j<H[1];j++){this._map[O][j]=$;var v=[O,j],u=this._pointKey(v);V[u]=v,delete U[u]}if(w&&L[1]<H[1])w([H[0],L[1]],[H[0],H[1]])},z._tunnelToConnected6=function K(Z,J,V,U,$,w){var L,H;if(J[0]<Z[0])L=J,H=Z;else L=Z,H=J;var P=L[0],D=L[1];while(!(P==H[0]&&D==H[1])){var W=2;if(D<H[1])D++,W=1;else if(D>H[1])D--,W=1;if(P<H[0])P+=W;else if(P>H[0])P-=W;else if(H[1]%2)P-=W;else P+=W;this._map[P][D]=$;var O=[P,D],j=this._pointKey(O);V[j]=O,delete U[j]}if(w)w(J,Z)},z._freeSpace=function K(Z,J,V){return Z>=0&&Z<this._width&&J>=0&&J<this._height&&this._map[Z][J]==V},z._pointKey=function K(Z){return Z[0]+"."+Z[1]},X}(f0),BZ={room:J1,corridor:E1},XZ=function(G){K0(X,G);function X(K,Z,J){var V;if(J===void 0)J={};return V=G.call(this,K,Z)||this,V._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},J),V._features={room:4,corridor:4},V._map=[],V._featureAttempts=20,V._walls={},V._dug=0,V._digCallback=V._digCallback.bind(g0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(g0(V)),V._isWallCallback=V._isWallCallback.bind(g0(V)),V._priorityWallCallback=V._priorityWallCallback.bind(g0(V)),V}var z=X.prototype;return z.create=function K(Z){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var J=(this._width-2)*(this._height-2);this._firstRoom();var V=Date.now(),U;do{U=0;var $=Date.now();if($-V>this._options.timeLimit)break;var w=this._findWall();if(!w)break;var L=w.split(","),H=parseInt(L[0]),P=parseInt(L[1]),D=this._getDiggingDirection(H,P);if(!D)continue;var W=0;do if(W++,this._tryFeature(H,P,D[0],D[1])){this._removeSurroundingWalls(H,P),this._removeSurroundingWalls(H-D[0],P-D[1]);break}while(W<this._featureAttempts);for(var O in this._walls)if(this._walls[O]>1)U++}while(this._dug/J<this._options.dugPercentage||U);if(this._addDoors(),Z)for(var j=0;j<this._width;j++)for(var v=0;v<this._height;v++)Z(j,v,this._map[j][v]);return this._walls={},this._map=[],this},z._digCallback=function K(Z,J,V){if(V==0||V==2)this._map[Z][J]=0,this._dug++;else this._walls[Z+","+J]=1},z._isWallCallback=function K(Z,J){if(Z<0||J<0||Z>=this._width||J>=this._height)return!1;return this._map[Z][J]==1},z._canBeDugCallback=function K(Z,J){if(Z<1||J<1||Z+1>=this._width||J+1>=this._height)return!1;return this._map[Z][J]==1},z._priorityWallCallback=function K(Z,J){this._walls[Z+","+J]=2},z._firstRoom=function K(){var Z=Math.floor(this._width/2),J=Math.floor(this._height/2),V=J1.createRandomCenter(Z,J,this._options);this._rooms.push(V),V.create(this._digCallback)},z._findWall=function K(){var Z=[],J=[];for(var V in this._walls){var U=this._walls[V];if(U==2)J.push(V);else Z.push(V)}var $=J.length?J:Z;if(!$.length)return null;var w=Y.getItem($.sort());return delete this._walls[w],w},z._tryFeature=function K(Z,J,V,U){var $=Y.getWeightedValue(this._features),w=BZ[$],L=w.createRandomAt(Z,J,V,U,this._options);if(!L.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(L.create(this._digCallback),L instanceof J1)this._rooms.push(L);if(L instanceof E1)L.createPriorityWalls(this._priorityWallCallback),this._corridors.push(L);return!0},z._removeSurroundingWalls=function K(Z,J){var V=$0[4];for(var U=0;U<V.length;U++){var $=V[U],w=Z+$[0],L=J+$[1];delete this._walls[w+","+L],w=Z+2*$[0],L=J+2*$[1],delete this._walls[w+","+L]}},z._getDiggingDirection=function K(Z,J){if(Z<=0||J<=0||Z>=this._width-1||J>=this._height-1)return null;var V=null,U=$0[4];for(var $=0;$<U.length;$++){var w=U[$],L=Z+w[0],H=J+w[1];if(!this._map[L][H]){if(V)return null;V=w}}if(!V)return null;return[-V[0],-V[1]]},z._addDoors=function K(){var Z=this._map;function J($,w){return Z[$][w]==1}for(var V=0;V<this._rooms.length;V++){var U=this._rooms[V];U.clearDoors(),U.addDoors(J)}},X}(c1);function l1(G,X,z){z[X[G+1]]=z[G],X[z[G]]=X[G+1],z[G]=G+1,X[G+1]=G}function n1(G,X,z){z[X[G]]=z[G],X[z[G]]=X[G],z[G]=G,X[G]=G}var GZ=function(G){K0(X,G);function X(){return G.apply(this,arguments)||this}var z=X.prototype;return z.create=function K(Z){var J=this._fillMap(1),V=Math.ceil((this._width-2)/2),U=0.375,$=[],w=[];for(var L=0;L<V;L++)$.push(L),w.push(L);$.push(V-1);var H;for(H=1;H+3<this._height;H+=2)for(var P=0;P<V;P++){var D=2*P+1,W=H;if(J[D][W]=0,P!=$[P+1]&&Y.getUniform()>U)l1(P,$,w),J[D+1][W]=0;if(P!=$[P]&&Y.getUniform()>U)n1(P,$,w);else J[D][W+1]=0}for(var O=0;O<V;O++){var j=2*O+1,v=H;if(J[j][v]=0,O!=$[O+1]&&(O==$[O]||Y.getUniform()>U))l1(O,$,w),J[j+1][v]=0;n1(O,$,w)}for(var u=0;u<this._width;u++)for(var x=0;x<this._height;x++)Z(u,x,J[u][x]);return this},X}(f0),YZ=function(G){K0(X,G);function X(){var K=G.apply(this,arguments)||this;return K._stack=[],K._map=[],K}var z=X.prototype;return z.create=function K(Z){var J=this._width,V=this._height;this._map=[];for(var U=0;U<J;U++){this._map.push([]);for(var $=0;$<V;$++){var w=U==0||$==0||U+1==J||$+1==V;this._map[U].push(w?1:0)}}this._stack=[[1,1,J-2,V-2]],this._process();for(var L=0;L<J;L++)for(var H=0;H<V;H++)Z(L,H,this._map[L][H]);return this._map=[],this},z._process=function K(){while(this._stack.length){var Z=this._stack.shift();this._partitionRoom(Z)}},z._partitionRoom=function K(Z){var J=[],V=[];for(var U=Z[0]+1;U<Z[2];U++){var $=this._map[U][Z[1]-1],w=this._map[U][Z[3]+1];if($&&w&&!(U%2))J.push(U)}for(var L=Z[1]+1;L<Z[3];L++){var H=this._map[Z[0]-1][L],P=this._map[Z[2]+1][L];if(H&&P&&!(L%2))V.push(L)}if(!J.length||!V.length)return;var D=Y.getItem(J),W=Y.getItem(V);this._map[D][W]=1;var O=[],j=[];O.push(j);for(var v=Z[0];v<D;v++)if(this._map[v][W]=1,v%2)j.push([v,W]);j=[],O.push(j);for(var u=D+1;u<=Z[2];u++)if(this._map[u][W]=1,u%2)j.push([u,W]);j=[],O.push(j);for(var x=Z[1];x<W;x++)if(this._map[D][x]=1,x%2)j.push([D,x]);j=[],O.push(j);for(var p=W+1;p<=Z[3];p++)if(this._map[D][p]=1,p%2)j.push([D,p]);var a=Y.getItem(O);for(var Z0=0;Z0<O.length;Z0++){var U0=O[Z0];if(U0==a)continue;var L0=Y.getItem(U0);this._map[L0[0]][L0[1]]=0}this._stack.push([Z[0],Z[1],D-1,W-1]),this._stack.push([D+1,Z[1],Z[2],W-1]),this._stack.push([Z[0],W+1,D-1,Z[3]]),this._stack.push([D+1,W+1,Z[2],Z[3]])},X}(f0),LZ=function(G){K0(X,G);function X(K,Z,J){var V;if(J===void 0)J=0;return V=G.call(this,K,Z)||this,V._regularity=J,V._map=[],V}var z=X.prototype;return z.create=function K(Z){var J=this._width,V=this._height,U=this._fillMap(1);J-=J%2?1:2,V-=V%2?1:2;var $=0,w=0,L=0,H=0,P=0,D=!1,W=[[0,0],[0,0],[0,0],[0,0]];do{if($=1+2*Math.floor(Y.getUniform()*(J-1)/2),w=1+2*Math.floor(Y.getUniform()*(V-1)/2),!P)U[$][w]=0;if(!U[$][w]){this._randomize(W);do{if(Math.floor(Y.getUniform()*(this._regularity+1))==0)this._randomize(W);D=!0;for(var O=0;O<4;O++)if(L=$+W[O][0]*2,H=w+W[O][1]*2,this._isFree(U,L,H,J,V)){U[L][H]=0,U[$+W[O][0]][w+W[O][1]]=0,$=L,w=H,D=!1,P++;break}}while(!D)}}while(P+1<J*V/4);for(var j=0;j<this._width;j++)for(var v=0;v<this._height;v++)Z(j,v,U[j][v]);return this._map=[],this},z._randomize=function K(Z){for(var J=0;J<4;J++)Z[J][0]=0,Z[J][1]=0;switch(Math.floor(Y.getUniform()*4)){case 0:Z[0][0]=-1,Z[1][0]=1,Z[2][1]=-1,Z[3][1]=1;break;case 1:Z[3][0]=-1,Z[2][0]=1,Z[1][1]=-1,Z[0][1]=1;break;case 2:Z[2][0]=-1,Z[3][0]=1,Z[0][1]=-1,Z[1][1]=1;break;case 3:Z[1][0]=-1,Z[0][0]=1,Z[3][1]=-1,Z[2][1]=1;break}},z._isFree=function K(Z,J,V,U,$){if(J<1||V<1||J>=U||V>=$)return!1;return Z[J][V]},X}(f0),wZ=function(G){K0(X,G);function X(K,Z,J){var V=G.call(this,K,Z)||this;if(V.map=[],V.rooms=[],V.connectedCells=[],J=Object.assign({cellWidth:3,cellHeight:3},J),!J.hasOwnProperty("roomWidth"))J.roomWidth=V._calculateRoomSize(V._width,J.cellWidth);if(!J.hasOwnProperty("roomHeight"))J.roomHeight=V._calculateRoomSize(V._height,J.cellHeight);return V._options=J,V}var z=X.prototype;return z.create=function K(Z){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),Z)for(var J=0;J<this._width;J++)for(var V=0;V<this._height;V++)Z(J,V,this.map[J][V]);return this},z._calculateRoomSize=function K(Z,J){var V=Math.floor(Z/J*0.8),U=Math.floor(Z/J*0.25);if(U<2)U=2;if(V<2)V=2;return[U,V]},z._initRooms=function K(){for(var Z=0;Z<this._options.cellWidth;Z++){this.rooms.push([]);for(var J=0;J<this._options.cellHeight;J++)this.rooms[Z].push({x:0,y:0,width:0,height:0,connections:[],cellx:Z,celly:J})}},z._connectRooms=function K(){var Z=Y.getUniformInt(0,this._options.cellWidth-1),J=Y.getUniformInt(0,this._options.cellHeight-1),V,U,$,w=!1,L,H,P;do{P=[0,2,4,6],P=Y.shuffle(P);do{if(w=!1,V=P.pop(),U=Z+$0[8][V][0],$=J+$0[8][V][1],U<0||U>=this._options.cellWidth)continue;if($<0||$>=this._options.cellHeight)continue;if(L=this.rooms[Z][J],L.connections.length>0){if(L.connections[0][0]==U&&L.connections[0][1]==$)break}if(H=this.rooms[U][$],H.connections.length==0)H.connections.push([Z,J]),this.connectedCells.push([U,$]),Z=U,J=$,w=!0}while(P.length>0&&w==!1)}while(P.length>0)},z._connectUnconnectedRooms=function K(){var Z=this._options.cellWidth,J=this._options.cellHeight;this.connectedCells=Y.shuffle(this.connectedCells);var V,U,$;for(var w=0;w<this._options.cellWidth;w++)for(var L=0;L<this._options.cellHeight;L++)if(V=this.rooms[w][L],V.connections.length==0){var H=[0,2,4,6];H=Y.shuffle(H),$=!1;do{var P=H.pop(),D=w+$0[8][P][0],W=L+$0[8][P][1];if(D<0||D>=Z||W<0||W>=J)continue;if(U=this.rooms[D][W],$=!0,U.connections.length==0)break;for(var O=0;O<U.connections.length;O++)if(U.connections[O][0]==w&&U.connections[O][1]==L){$=!1;break}if($)break}while(H.length);if($)V.connections.push([U.cellx,U.celly]);else console.log("-- Unable to connect room.")}},z._createRandomRoomConnections=function K(){},z._createRooms=function K(){var Z=this._width,J=this._height,V=this._options.cellWidth,U=this._options.cellHeight,$=Math.floor(this._width/V),w=Math.floor(this._height/U),L,H,P=this._options.roomWidth,D=this._options.roomHeight,W,O,j;for(var v=0;v<V;v++)for(var u=0;u<U;u++){if(W=$*v,O=w*u,W==0)W=1;if(O==0)O=1;if(L=Y.getUniformInt(P[0],P[1]),H=Y.getUniformInt(D[0],D[1]),u>0){j=this.rooms[v][u-1];while(O-(j.y+j.height)<3)O++}if(v>0){j=this.rooms[v-1][u];while(W-(j.x+j.width)<3)W++}var x=Math.round(Y.getUniformInt(0,$-L)/2),p=Math.round(Y.getUniformInt(0,w-H)/2);while(W+x+L>=Z)if(x)x--;else L--;while(O+p+H>=J)if(p)p--;else H--;W=W+x,O=O+p,this.rooms[v][u].x=W,this.rooms[v][u].y=O,this.rooms[v][u].width=L,this.rooms[v][u].height=H;for(var a=W;a<W+L;a++)for(var Z0=O;Z0<O+H;Z0++)this.map[a][Z0]=0}},z._getWallPosition=function K(Z,J){var V,U,$;if(J==1||J==3){if(V=Y.getUniformInt(Z.x+1,Z.x+Z.width-2),J==1)U=Z.y-2,$=U+1;else U=Z.y+Z.height+1,$=U-1;this.map[V][$]=0}else{if(U=Y.getUniformInt(Z.y+1,Z.y+Z.height-2),J==2)V=Z.x+Z.width+1,$=V-1;else V=Z.x-2,$=V+1;this.map[$][U]=0}return[V,U]},z._drawCorridor=function K(Z,J){var V=J[0]-Z[0],U=J[1]-Z[1],$=Z[0],w=Z[1],L,H,P,D,W=[],O=Math.abs(V),j=Math.abs(U),v=Y.getUniform(),u=v,x=1-v;if(H=V>0?2:6,P=U>0?4:0,O<j)L=Math.ceil(j*u),W.push([P,L]),W.push([H,O]),L=Math.floor(j*x),W.push([P,L]);else L=Math.ceil(O*u),W.push([H,L]),W.push([P,j]),L=Math.floor(O*x),W.push([H,L]);this.map[$][w]=0;while(W.length>0){D=W.pop();while(D[1]>0)$+=$0[8][D[0]][0],w+=$0[8][D[0]][1],this.map[$][w]=0,D[1]=D[1]-1}},z._createCorridors=function K(){var Z=this._options.cellWidth,J=this._options.cellHeight,V,U,$,w,L;for(var H=0;H<Z;H++)for(var P=0;P<J;P++){V=this.rooms[H][P];for(var D=0;D<V.connections.length;D++){if(U=V.connections[D],$=this.rooms[U[0]][U[1]],$.cellx>V.cellx)w=2,L=4;else if($.cellx<V.cellx)w=4,L=2;else if($.celly>V.celly)w=3,L=1;else w=1,L=3;this._drawCorridor(this._getWallPosition(V,w),this._getWallPosition($,L))}}},X}(f0),HZ={Arena:qZ,Uniform:zZ,Cellular:$Z,Digger:XZ,EllerMaze:GZ,DividedMaze:YZ,IceyMaze:LZ,Rogue:wZ},PZ=function G(){},FZ=0.5*(Math.sqrt(3)-1),l0=(3-Math.sqrt(3))/6,DZ=function(G){K0(X,G);function X(K){var Z;if(K===void 0)K=256;Z=G.call(this)||this,Z._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var J=[];for(var V=0;V<K;V++)J.push(V);J=Y.shuffle(J),Z._perms=[],Z._indexes=[];for(var U=0;U<2*K;U++)Z._perms.push(J[U%K]),Z._indexes.push(Z._perms[U]%Z._gradients.length);return Z}var z=X.prototype;return z.get=function K(Z,J){var V=this._perms,U=this._indexes,$=V.length/2,w=0,L=0,H=0,P,D=(Z+J)*FZ,W=Math.floor(Z+D),O=Math.floor(J+D),j=(W+O)*l0,v=W-j,u=O-j,x=Z-v,p=J-u,a,Z0;if(x>p)a=1,Z0=0;else a=0,Z0=1;var U0=x-a+l0,L0=p-Z0+l0,R0=x-1+2*l0,C1=p-1+2*l0,A1=C(W,$),N1=C(O,$),n0=0.5-x*x-p*p;if(n0>=0){n0*=n0,P=U[A1+V[N1]];var s1=this._gradients[P];w=n0*n0*(s1[0]*x+s1[1]*p)}var r0=0.5-U0*U0-L0*L0;if(r0>=0){r0*=r0,P=U[A1+a+V[N1+Z0]];var o1=this._gradients[P];L=r0*r0*(o1[0]*U0+o1[1]*L0)}var s0=0.5-R0*R0-C1*C1;if(s0>=0){s0*=s0,P=U[A1+1+V[N1+1]];var a1=this._gradients[P];H=s0*s0*(a1[0]*R0+a1[1]*C1)}return 70*(w+L+H)},X}(PZ),WZ={Simplex:DZ},r1=function(){function G(z,K,Z,J){if(J===void 0)J={};if(this._toX=z,this._toY=K,this._passableCallback=Z,this._options=Object.assign({topology:8},J),this._dirs=$0[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var X=G.prototype;return X._getNeighbors=function z(K,Z){var J=[];for(var V=0;V<this._dirs.length;V++){var U=this._dirs[V],$=K+U[0],w=Z+U[1];if(!this._passableCallback($,w))continue;J.push([$,w])}return J},G}(),MZ=function(G){K0(X,G);function X(K,Z,J,V){var U=G.call(this,K,Z,J,V)||this;return U._computed={},U._todo=[],U._add(K,Z,null),U}var z=X.prototype;return z.compute=function K(Z,J,V){var U=Z+","+J;if(!(U in this._computed))this._compute(Z,J);if(!(U in this._computed))return;var $=this._computed[U];while($)V($.x,$.y),$=$.prev},z._compute=function K(Z,J){while(this._todo.length){var V=this._todo.shift();if(V.x==Z&&V.y==J)return;var U=this._getNeighbors(V.x,V.y);for(var $=0;$<U.length;$++){var w=U[$],L=w[0],H=w[1],P=L+","+H;if(P in this._computed)continue;this._add(L,H,V)}}},z._add=function K(Z,J,V){var U={x:Z,y:J,prev:V};this._computed[Z+","+J]=U,this._todo.push(U)},X}(r1),OZ=function(G){K0(X,G);function X(K,Z,J,V){var U;if(V===void 0)V={};return U=G.call(this,K,Z,J,V)||this,U._todo=[],U._done={},U}var z=X.prototype;return z.compute=function K(Z,J,V){this._todo=[],this._done={},this._fromX=Z,this._fromY=J,this._add(this._toX,this._toY,null);while(this._todo.length){var U=this._todo.shift(),$=U.x+","+U.y;if($ in this._done)continue;if(this._done[$]=U,U.x==Z&&U.y==J)break;var w=this._getNeighbors(U.x,U.y);for(var L=0;L<w.length;L++){var H=w[L],P=H[0],D=H[1],W=P+","+D;if(W in this._done)continue;this._add(P,D,U)}}var O=this._done[Z+","+J];if(!O)return;while(O)V(O.x,O.y),O=O.prev},z._add=function K(Z,J,V){var U=this._distance(Z,J),$={x:Z,y:J,prev:V,g:V?V.g+1:0,h:U},w=$.g+$.h;for(var L=0;L<this._todo.length;L++){var H=this._todo[L],P=H.g+H.h;if(w<P||w==P&&U<H.h){this._todo.splice(L,0,$);return}}this._todo.push($)},z._distance=function K(Z,J){switch(this._options.topology){case 4:return Math.abs(Z-this._fromX)+Math.abs(J-this._fromY);case 6:var V=Math.abs(Z-this._fromX),U=Math.abs(J-this._fromY);return U+Math.max(0,(V-U)/2);case 8:return Math.max(Math.abs(Z-this._fromX),Math.abs(J-this._fromY))}},X}(r1),RZ={Dijkstra:MZ,AStar:OZ},jZ=function(){function G(z){this._scheduler=z,this._lock=1}var X=G.prototype;return X.start=function z(){return this.unlock()},X.lock=function z(){return this._lock++,this},X.unlock=function z(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var K=this._scheduler.next();if(!K)return this.lock();var Z=K.act();if(Z&&Z.then)this.lock(),Z.then(this.unlock.bind(this))}return this},G}(),EZ=function(){function G(z,K){if(K===void 0)K={};this._reflectivityCallback=z,this._options={},K=Object.assign({passes:1,emissionThreshold:100,range:10},K),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(K)}var X=G.prototype;return X.setOptions=function z(K){if(Object.assign(this._options,K),K&&K.range)this.reset();return this},X.setFOV=function z(K){return this._fov=K,this._fovCache={},this},X.setLight=function z(K,Z,J){var V=K+","+Z;if(J)this._lights[V]=typeof J=="string"?y(J):J;else delete this._lights[V];return this},X.clearLights=function z(){this._lights={}},X.reset=function z(){return this._reflectivityCache={},this._fovCache={},this},X.compute=function z(K){var Z={},J={},V={};for(var U in this._lights){var $=this._lights[U];J[U]=[0,0,0],s(J[U],$)}for(var w=0;w<this._options.passes;w++){if(this._emitLight(J,V,Z),w+1==this._options.passes)continue;J=this._computeEmitters(V,Z)}for(var L in V){var H=L.split(","),P=parseInt(H[0]),D=parseInt(H[1]);K(P,D,V[L])}return this},X._emitLight=function z(K,Z,J){for(var V in K){var U=V.split(","),$=parseInt(U[0]),w=parseInt(U[1]);this._emitLightFromCell($,w,K[V],Z),J[V]=1}return this},X._computeEmitters=function z(K,Z){var J={};for(var V in K){if(V in Z)continue;var U=K[V],$=void 0;if(V in this._reflectivityCache)$=this._reflectivityCache[V];else{var w=V.split(","),L=parseInt(w[0]),H=parseInt(w[1]);$=this._reflectivityCallback(L,H),this._reflectivityCache[V]=$}if($==0)continue;var P=[0,0,0],D=0;for(var W=0;W<3;W++){var O=Math.round(U[W]*$);P[W]=O,D+=O}if(D>this._options.emissionThreshold)J[V]=P}return J},X._emitLightFromCell=function z(K,Z,J,V){var U=K+","+Z,$;if(U in this._fovCache)$=this._fovCache[U];else $=this._updateFOV(K,Z);for(var w in $){var L=$[w],H=void 0;if(w in V)H=V[w];else H=[0,0,0],V[w]=H;for(var P=0;P<3;P++)H[P]+=Math.round(J[P]*L)}return this},X._updateFOV=function z(K,Z){var J=K+","+Z,V={};this._fovCache[J]=V;var U=this._options.range;function $(w,L,H,P){var D=w+","+L,W=P*(1-H/U);if(W==0)return;V[D]=W}return this._fov.compute(K,Z,U,$.bind(this)),V},G}(),CZ=l,AZ=n,NZ=r6;Q.Color=AZ,Q.DEFAULT_HEIGHT=O1,Q.DEFAULT_WIDTH=M1,Q.DIRS=$0,Q.Display=m0,Q.Engine=jZ,Q.EventQueue=p1,Q.FOV=UZ,Q.KEYS=s6,Q.Lighting=EZ,Q.Map=HZ,Q.Noise=WZ,Q.Path=RZ,Q.RNG=Y,Q.Scheduler=JZ,Q.StringGenerator=i6,Q.Text=NZ,Q.Util=CZ,Object.defineProperty(Q,"__esModule",{value:!0})})});var kZ=typeof window!=="undefined"?window.innerWidth:0,uZ=typeof window!=="undefined"?window.innerHeight:0;var J0={cameraWidth:Math.floor(kZ/16),cameraHeight:Math.floor(uZ/16),debug:!0,fontSize:16,highlightEnemy:!0,showGrid:!0,showUI:!0,zoom:1},S1={WIDTH:1024,HEIGHT:1024},G0={width:Math.floor(J0.cameraWidth*(1/J0.zoom)),height:Math.floor(J0.cameraHeight*(1/J0.zoom)),bg:"transparent",fontSize:Math.floor(J0.fontSize*J0.zoom),layout:"tile-gl",tileWidth:16,tileHeight:16,tileSet:null,tileMap:null};function t1(Q){if(J0.debug)console.log(Q)}var v1=[];class Q1{name;description;energyDelta;constructor(Q,q,B=0){this.name=Q,this.description=q,this.energyDelta=B}}class V1{name;description;constructor(Q,q){this.name=Q,this.description=q}}class W0{key;description;constructor(Q,q){this.key=Q,this.description=q}}class o0{name;description;constructor(Q,q){this.name=Q,this.description=q}}class M0{name;description;icon;color;energyMax;unlockCondition;constructor(Q,q,B,Y=100){this.name=Q,this.description=q,this.icon=B,this.energyMax=Y,this.color="white",this.unlockCondition=null}}class y0{name;description;color;constructor(Q,q,B){this.name=Q,this.description=q,this.color=B}}class H0{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(Q,q,B,Y="cyberyellow",F=0,R=0,C=0,k=0,S=0,I=[]){this.name=Q,this.description=q,this.icon=B,this.color=Y,this.energyDelta=F,this.matter=R,this.gold=C,this.damage=k,this.energyCost=S,this.effects=I}}class r{name;description;icon;fg;bg;energyDelta;constructor(Q,q,B=null,Y="white",F="black",R=0){this.name=Q,this.description=q,this.icon=B,this.fg=Y,this.bg=F,this.energyDelta=R}}var M={actions:{Enter:new Q1("Enter","Enter a portal or plant atmosphere"),Launch:new Q1("Launch","Launch into space",-10),Wait:new Q1("Wait","Wait one turn in place")},ais:{aggrorange:new V1("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new V1("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new V1("guardian","Idles at a position and only fights back if engaged")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new W0("N","Move/interact/combat north"),E:new W0("E","Move/interact/combat east"),S:new W0("S","Move/interact/combat south"),W:new W0("W","Move/interact/combat west"),A:new W0("A","Primary action, confirm"),B:new W0("B","Take a break, cancel"),"1":new W0("1","Secondary action, first quick slot"),"2":new W0("2","Tertiary action, second quick slot"),M:new W0("M","Menu")},dialogs:{},effects:{Recharger:new o0("Recharger","Doubles energy gained from chargepads"),RockCrusher:new o0("Rock Crusher","Mines rock"),WallCrusher:new o0("Wall Crusher","Tears down weak walls"),WaterShield:new o0("Water Shield","Reduces damage taken from water")},entities:{movableboulder:new M0("movableboulder","A movable rock","o",2),movablebox:new M0("movablebox","A movable box","x",2),Spirit:new M0("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new M0("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new M0("WorkBot","Basic factory worker","B"),Cleaner:new M0("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new M0("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Valkyrie:new M0("Valkyrie","Airbourne war logistics","V",160),Pioneer:new M0("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200)},factions:{Equipment:new y0("Equipment","For boxes etc.","gray"),Spirits:new y0("Spirits","Default player faction","white"),Pyrates:new y0("Pyrates","Default enemy faction","cybermagenta"),Gaia:new y0("Gaia","For rocks etc.","brown"),Guardians:new y0("Guardians","Bot station guardians","cybercyan")},items:{battery:new H0("Battery","Increases maximum energy","b","cyberyellow",10),energy:new H0("Energy","Energy pack","e","cyberyellow",10),gold:new H0("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new H0("Goo","A minor matter source","goo","gray",0,1),junk:new H0("Junk","Broken bot","%","gray",0,1),matter:new H0("Matter","A pile of stuff","m","gray",0,100),broom:new H0("Broom","Sweeps the floor","ib","cyberyellow",0,0,0,-10,-1),hammer:new H0("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["Wall Crusher"]),pickaxe:new H0("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["Rock Crusher"]),shocker:new H0("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1,["Recharger"]),trident:new H0("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["Water Shield"]),wrench:new H0("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1)},maps:{bot_bar:`!
!!id bot_bar
!!size 28 16
!!spawn 14 3 movablebox
!!spawn 14 12 movablebox
!!spawn 2 4 AeroBot faction=Spirits
!!spawn 4 8 AeroBot faction=Spirits
!!spawn 10 7 AeroBot faction=Spirits
!!spawn 21 3 AeroBot faction=Spirits
!!spawn 21 5 AeroBot faction=Spirits
!!spawn 10 11 shocker
!!. void
!!_ voidtrue
!!~ water
!!# wall
!!s wallstatue
!!+ wallweak
!!= chargepad
!!O portal bot_station 23 16
!!S portal shop_instance 1 14
################_____######_
#..............#____#ssssss#
#..............#____#.=..=.#
#.....=..+++++.#____#=....=#
#s....=..+~....#____#......#
O.....=..+.....#____#=....=#
#s.====..+.....#____#....=.#
#..=.....+.....######..####_
#..=.....+......~......#____
#..====..+.....######.#_____
#.....=..+.....#____#.#_____
#.....=..+.....#____#.#_____
#.....=..+++++.#____#.#_____
#..............#____#.#_____
#~............~#____#S#_____
################_____#______
`,bot_dormitory:`!
!!id bot_dormitory
!!size 32 32
!!spawn 13 8 battery
!!spawn 4 11 AeroBot faction=Spirits
!!spawn 23 27 AeroBot faction=Spirits
!!spawn 8 18 WorkBot faction=Spirits
!!spawn 26 18 WorkBot faction=Spirits
!!. void
!!~ water
!!# wall
!!= chargepad
!!O portal bot_station 22 28
!!Q portal bot_station 27 28
!!h portalhidden bot_dormitory_hidden 1 0
################################
#..............................#
#..............................#
#..###.#.#.#.##..###.#.#.#.##..#
#..###=#=#=#=##..###=#=#=#=##..#
#...=##########...=#######h##..#
#..##########=...##########=...#
#...=##########...=##########..#
#..##########=...##########=...#
#...=##########...=##########..#
#..##########=...##########=...#
#...=##########...=##########..#
#..##########=...##########=...#
#..##=#=#=#=###..##=#=#=#=###..#
#..##.#.#.#.###..##.#.#.#.###~.#
#.~............................#
#...............~..............#
#..###.#.#.#.##..###.#.#.#.##..#
#..###=#=#=#=##..###=#=#=#=##..#
#...=##########...=##########..#
#..##########=...##########=...#
#...=##########...=##########..#
#..##########=...##########=...#
#...=##########...=##########..#
#..##########=...##########=...#
#...=##########...=##########..#
#..##########=...##########=...#
#..##=#=#=#=###..##=#=#=#=###..#
#..##.#.#.#.###..##.#.#.#.###..#
#..............~...............#
#..............................#
##O##########################Q##
`,bot_dormitory_hidden:`!
!!id bot_dormitory_hidden
!!size 4 4
!!spawn 1 2 junk
!!spawn 2 2 battery
!!. void
!!# wall
!!~ water
!!O portal bot_dormitory 26 5
#O##
#.~#
#..#
####
`,bot_elevator:`!
!!id bot_elevator
!!size 32 48
!!spawn 12 3 hammer
!!# wall
!!s wallstatue
!!+ wallweak
!!. void
!!_ voidtrue
!!= chargepad
!!~ water
!!O portal bot_station 4 6
!!E portal solarsystem=1337 584 401
!!^ movenorth
!!v movesouth
################________________
#.........+...~#________________
#.........+....#________________
#.........+....#________________
#.........+....#________________
#.........++^++#################
#..............#s.s.s.s.s.s.s.s#
#..............#..===========..#
#................=+++++++++++=.#
#................=+++++++++++=.#
O..............#..===========..#
#..............#...............#
#..............#################
#..............#________________
#..............#________________
###########v^###________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#..#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
__________#v^#__________________
_________##v^##_________________
_________#....#_________________
_________#....#_________________
_________##E###_________________
`,bot_factory:`!
!!id bot_factory
!!size 48 32
!!spawn 45 19 wrench
!!spawn 4 13 battery
!!spawn 2 2 junk
!!spawn 2 3 junk
!!spawn 2 4 junk
!!spawn 2 5 junk
!!spawn 2 6 junk
!!spawn 2 7 junk
!!spawn 2 8 junk
!!spawn 3 2 junk
!!spawn 3 3 junk
!!spawn 3 4 junk
!!spawn 3 5 junk
!!spawn 3 6 junk
!!spawn 3 7 junk
!!spawn 3 8 junk
!!spawn 4 2 junk
!!spawn 4 3 junk
!!spawn 4 4 junk
!!spawn 4 5 junk
!!spawn 4 6 junk
!!spawn 4 7 junk
!!spawn 4 8 junk
!!spawn 5 2 junk
!!spawn 5 3 junk
!!spawn 5 4 junk
!!spawn 5 5 junk
!!spawn 5 6 junk
!!spawn 5 7 junk
!!spawn 5 8 junk
!!spawn 6 2 junk
!!spawn 6 3 junk
!!spawn 6 4 junk
!!spawn 6 5 junk
!!spawn 6 6 junk
!!spawn 6 7 junk
!!spawn 6 8 junk
!!spawn 7 2 junk
!!spawn 7 3 junk
!!spawn 7 4 junk
!!spawn 7 5 junk
!!spawn 7 6 junk
!!spawn 7 7 junk
!!spawn 7 8 junk
!!spawn 8 2 junk
!!spawn 8 3 junk
!!spawn 8 4 junk
!!spawn 8 5 junk
!!spawn 8 6 junk
!!spawn 8 7 junk
!!spawn 8 8 junk
!!spawn 40 19 WorkBot faction=Spirits
!!spawn 15 18 WorkBot faction=Spirits
!!spawn 25 18 WorkBot faction=Spirits
!!spawn 43 29 WorkBot faction=Spirits
!!spawn 35 3 WorkBot faction=Spirits
!!# wall
!!+ wallweak
!!~ water
!!. void
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!$ terminal
!!O portal bot_station 4 28
!!P portal bot_station 13 25
!!h portal bot_station 5 21
##########h#####################################
#~.....................+~......................#
#.........vv...........+.......................#
#......................+.......................#
#.........vv...........+..........+$+..........#
#......................+..........+++..........#
#.........vv...........+.......................#
#......................+.......................#
#.........vv...........+.......................#
#......................+.......................#
#..vv.<.<.<<...........+.......................#
#..vv.<.<.<<...........+.......................#
#..............................................#
#..............................................#
#++#+###########################################
#+++.>.>.>.>.>.>.>.>.>~>.>.>.>.>.>.>.>.>.>.>.>.#
#+++.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>~>.>.>.>.P
#++#+###########################################
#........$+....$+......$+......$+......$+......#
#..^^..........................................#
#..............................................#
#..^^..........................................#
#..............................................#
#..^^..........................................#
#..............................................#
#..^^..........................................#
#..............................................#
#..^^..........................................#
#..............................................#
#..^^........................................~~#
#............................................~~#
##O#############################################
`,bot_prison:`!
!!id bot_prison
!!size 48 34
!!spawn 18 11 Cleaner faction=Guardians ai=aggrorange
!!spawn 17 2 Cleaner faction=Guardians ai=aggrorange
!!spawn 24 5 Cleaner faction=Guardians ai=aggrorange
!!spawn 29 24 Cleaner faction=Guardians ai=aggrorangeshort
!!spawn 34 22 AeroBot faction=Spirits
!!spawn 9 22 WorkBot faction=Spirits
!!spawn 28 1 broom
!!spawn 43 30 battery
!!spawn 9 30 matter
!!spawn 9 21 pickaxe
!!# wall
!!+ wallweak
!!s wallstatue
!!. void
!!, voidhidden
!!_ voidtrue
!!= chargepad
!!~ water
!!C portalclosed
!!O portal bot_station 26 7
!!Q portal bot_prison 29 15
!!P portal bot_prison 15 24
!!R portal bot_prison 32 24
________________################________________
________________#=..+.........~#________________
________________#=..+..........#________________
________________#=..+.+++++++.+#________________
________________#..............#________________
________________#=..+..........#________________
________________#=..+..........#________________
________________#=..+.+++++++.+#________________
________________#..............#________________
________________#=..+..........#________________
________________#=..+..........#________________
________________#=..+..........#________________
________________#++++.+++++++.+#________________
________________#..............#________________
________________#s.s........s.s#________________
________________##O##,#######Q##________________
____________________#,#_____#.#_________________
____________________#,#####_#.#_________________
____________________#,,,,,#_#.#_________________
____________________#####,#_#.#_________________
################____#,,,,,#_#.#_################
#~...#~...#...~#____#,#####_#.#_#~...#...~#...~#
#....#....#....#____#,#####_#.#_#....#....#....#
#++C+++C++++C++######,#######.###++C++++C+++C++#
#..............P................R..............#
#..............######,###########..............#
#..............#__###,#_________#..............#
#..............#__###,#_________#..............#
#++C+++C++++C++#__#,,,#_________#++C++++C+++C++#
#....#....#....#__#,###_________#....#....#....#
#~...#~...#...~#__#,###_________#~...#...~#...~#
##,####,#####,#####,##############,#####,####,##
_#,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,#_
_##############################################_
`,bot_stadium:`!
!Now this is botracing!
!!id bot_stadium
!!size 48 16
!!# wall
!!+ wallweak
!!. void
!!= chargepad
!!~ water
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!s wallstatue
!!O portal bot_station 10 16
!!S portalhidden shop_instance 1 14
################################################
#s............................................s#
#..............................................#
#..++++++++++++++++++++++++++++++++++++++++++..#
#..+..>>>>..+..>>>>>v..~~..>>>>>>~>>>>>>....+..#
#..+..>>>>..+..>>>>...~~~~.>>>>~>>>~>>>>....+..#
#..+^^....vv+.^......>>>>..............+..vv+..#
#..+^^....vv+.^......>>>>>^............+..vv+..#
#..+^^......>>.........................+..vv+..#
#..+^^....++++++++++++++++++++++++++++++++vv+..#
#..+..<<<<<~<<<<<<<<<<<<~<<<<<<<<<~<<<<<<<==+..#
#..+..<<<<<<<<<~<<<<<<<<<<<<<~<<<<<<<<<<<<==+..#
#..+++++++++++++++++++++++++++++++++++++++..+..#
#..............................................#
#S............................................s#
#############################################O##
`,bot_station:`!
!!id bot_station
!!size 32 32
!!spawn 10 9 Cleaner faction=Guardians ai=guardian
!!spawn 12 9 Cleaner faction=Guardians ai=guardian
!!spawn 14 9 Cleaner faction=Guardians ai=guardian
!!spawn 16 9 Cleaner faction=Guardians ai=guardian
!!spawn 18 9 Cleaner faction=Guardians ai=guardian
!!spawn 20 9 Cleaner faction=Guardians ai=guardian
!!spawn 22 9 Cleaner faction=Guardians ai=guardian
!!spawn 24 9 Cleaner faction=Guardians ai=guardian
!!spawn 26 9 Cleaner faction=Guardians ai=guardian
!!spawn 28 9 Cleaner faction=Guardians ai=guardian
!!spawn 8 3 Pioneer faction=Guardians ai=aggrorangeshort equip=hammer
!!. void
!!~ water
!!# wall
!!+ wallweak
!!= chargepad
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!$ terminal bot_station_tv
!!° tv bot_station_tv
!!C portalclosed
!!A portal bot_prison 18 15
!!B portal bot_bar 0 5
!!O portal bot_dormitory 2 31
!!Q portal bot_dormitory 29 31
!!e portal bot_elevator 0 10
!!F portal bot_factory 2 31
!!E portal bot_factory 47 16
!!S portal bot_stadium 45 15
!!h portalhidden bot_factory 10 0
!!s portalhidden bot_station_sewers 0 11
!!w portalhidden bot_station_sewers 1 0
!!r portalhidden bot_station_sewers 31 1
!!z portalhidden bot_station_sewers 30 31
#w############°°°°##############
#~..##########°°°°##########..~r
#.......##$###°°°°######.......#
#...........########...........#
#...####.++....CC........####..#
#...####.++..............####..#
#...e###.++..............####..#
#...####.++..............#A##..#
#........++....................#
#+++++++++.....................#
#+++++++++.+.+.+.+.+.+.+.+.+.++#
s~............................~#
#..............................#
#..#.#.#.#.#...................#
#..#########...................#
#..#########...........####....#
#..#######S#.>.>.>.>.>.B###....#
#.>.>.>.>...^....^.....####....#
#.....................v####....#
#.^#..#..#..#....^.....>.>.>.v.#
#..##.##.##.##.................#
#.^##h########...^...########v.#
#..###########.......########..#
#.^###########...^...########v.#
#..###########.......########..#
#.^##########E.>.^...########v.#
#..###########.......########..#
#.^###########.......########v.#
#..#F#########.......#O####Q#..#
#.^..<.<.<.<.<.<.<.<.<.......<.#
#.............................~#
##############################z#
`,bot_station_sewers:`!
!!id bot_station_sewers
!!size 32 32
!!spawn 25 17 battery
!!. void
!!- water
!!~ watersewage
!!# wall
!!+ wallweak
!!= chargepad
!!s portal bot_station 0 11
!!w portal bot_station 1 0
!!r portal bot_station 31 1
!!z portal bot_station 30 31
#w##############################
#-~~########################~~-r
#-~~~~~~################~~~~~~-#
#-~~~~~~~~~~########~~~~~~~~~~-#
#-~~####~~~~~~~##~~~~~~~~####~-#
#-~~#~~#~~~~~~~~~~~~~~~~~#~~#~-#
#-~~~~~#~~~~~~~~~~~~~~~~~#~~#~-#
#-~~####~~~~~~~~~~~~~~~~~#~##~-#
#-~~~~~~~~~~~~~~~~~~~~~~~~~~~~-#
#------------------------------#
#-~~~~~~~~~#~#~#~#~#~#~#~#~#~###
s-~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
#------------------------------#
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-#
#~~#########~~~~~~~~~~~~~~~~~~-#
#~~#~~~~~~~#~~~~~~~~~~~####~~~-#
#~~#######~#~~~~~~~~~~~~~~#~~~-#
#~~~~~~~~~~~~~~~~~~~~~~#~~#~~~-#
#~~~~~~~~~~~~~~~~~~~~~~####~~~-#
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-#
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-#
#~~##~########~~~~~~~########~-#
#~~#~~~~~~~~~#~~~~~~~#~~~~~~#~-#
#~~#~~~~~~~~~#~~~~~~~#~~~~~~#~-#
#~~#~~########~~~~~~~#~~~~~~#~-#
#~~#~~~~~~~~~~~~~~~~~#~~~~~~#~-#
#~~#~~########~~~~~~~#~####~#~-#
#~~#~#########~~~~~~~#~####~#~-#
#~~#~#########~~~~~~~#~####~#~-#
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-#
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-#
##############################z#
`,botmos_hull_selection:`!
!!id botmos_hull_selection
!!size 20 20
!!. void
!!_ voidtrue
!!~ water
!!^ rock
!!# wall
!!+ wallweak
!!B wall B
!!o wall o
!!t wall t
!!M wall M
!!s wall s
!!C wall C
!!h wall h
!!e wall e
!!y wall y
!!u wall u
!!r wall r
!!l wall l
!!a wall a
!!n wall n
!!r wall r
!!d wall d
!!i wall i
!!= chargepad
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!![ portal credits 0 5
!!] portal manual 0 5
!!( portalhidden playground 1 0
!!1 portalstartaerobot bot_factory 4 15
!!2 portalstartworkbot bot_factory 4 16
!!? _portalstart?
!!D portal bot_station 0 29
##_____BotMos_____##
#_Choose_your_hull_#
#.================.#
#..................#
#.....2.....Manual.#
#..1........>.>.>..]
#..................#
#.....?............#
#..?...............#
#..................#
#.....?............#
#..?...............#
#..................#
#.....?............#
#..?...............#
#...........Credits#
#.....?.....>.>.>..[
#..?...............#
#~~~~~~~~~~~~~~~~~~#
#(##################
`,credits:`!
!!id credits
!!size 80 20
!!# wall
!!. voidtrue
!!_ voidtrue
!!: void
!!^ movenorth
!!> moveeast
!!| movesouth
!!< movewest
!!A wall A
!!B wall B
!!C wall C
!!D wall D
!!E wall E
!!F wall F
!!G wall G
!!H wall H
!!I wall I
!!J wall J
!!K wall K
!!L wall L
!!M wall M
!!N wall N
!!O wall O
!!P wall P
!!Q wall Q
!!R wall R
!!S wall S
!!T wall T
!!U wall U
!!V wall V
!!W wall W
!!X wall X
!!Y wall Y
!!Z wall Z
!!a wall a
!!b wall b
!!c wall c
!!d wall d
!!e wall e
!!f wall f
!!g wall g
!!h wall h
!!i wall i
!!j wall j
!!k wall k
!!l wall l
!!m wall m
!!n wall n
!!o wall o
!!p wall p
!!q wall q
!!r wall r
!!s wall s
!!t wall t
!!u wall u
!!v wall v
!!w wall w
!!x wall x
!!y wall y
!!z wall z
!!0 wall 0
!!, wall ,
!!/ wall |
!!; wall :
!!( wall (
!!) wall )
!![ portal botmos_hull_selection 19 16
################################################################################
#..............................................................................#
#...BotMos.....................................................................#
#...CREDITS....................................................................#
#..............................................................................#
[...<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<..#
#.............................................................................^#
#^|.Design/Programming/Art....................................................^#
#^....Oliver_Z:.(https;//oliz:io).............................................^#
#^|...........................................................................^#
#^..Dependencies..............................................................^#
#^|...rot:js,_BSD_License,_by_Ondrej_Zara_and_contributors....................^#
#^....EasyStar:js,_MIT_License,_by_Bryce_Neal_and_contributors................^#
#^|...monogram_font,_CC0/Public_Domain,_by_datagoblin.........................^#
#^............................................................................^#
#^|...........................................................................^#
#^..>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.^#
#^|...........................................................................^#
#^............................................................................^#
################################################################################
`,manual:`!
!!id manual
!!size 80 54
!!spawn 4 26 Spirit faction=Spirits
!!spawn 4 27 AeroBot faction=Spirits
!!spawn 4 28 WorkBot faction=Spirits
!!spawn 4 29 Cleaner faction=Spirits
!!spawn 4 30 Pioneer faction=Spirits
!!spawn 54 36 Spirit faction=Pyrates ai=aggrorange
!!spawn 4 36 junk
!!spawn 12 36 goo
!!spawn 4 37 matter
!!spawn 4 38 gold
!!spawn 4 39 energy
!!spawn 4 40 battery
!!spawn 4 41 wrench
!!# wall
!!+ wallweak
!!. voidtrue
!!_ voidtrue
!!: void
!!~ water
!!= chargepad
!!^ movenorth
!!> moveeast
!!| movesouth
!!< movewest
!!A wall A
!!B wall B
!!C wall C
!!D wall D
!!E wall E
!!F wall F
!!G wall G
!!H wall H
!!I wall I
!!J wall J
!!K wall K
!!L wall L
!!M wall M
!!N wall N
!!O wall O
!!P wall P
!!Q wall Q
!!R wall R
!!S wall S
!!T wall T
!!U wall U
!!V wall V
!!W wall W
!!X wall X
!!Y wall Y
!!Z wall Z
!!a wall a
!!b wall b
!!c wall c
!!d wall d
!!e wall e
!!f wall f
!!g wall g
!!h wall h
!!i wall i
!!j wall j
!!k wall k
!!l wall l
!!m wall m
!!n wall n
!!o wall o
!!p wall p
!!q wall q
!!r wall r
!!s wall s
!!t wall t
!!u wall u
!!v wall v
!!w wall w
!!x wall x
!!y wall y
!!z wall z
!!, wall ,
!!/ wall |
!!( portal manual 9 16
!!) portal manual 4 16
!!] portalclosed
!![ portal botmos_hull_selection 19 5
################################################################################
#..............................................................................#
#...Welcome_to_the_roBot_cosMos................................................#
#...INTERACTIVE_MANUAL.........................................................#
#..............................................................................#
[...<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<..#
#.............................................................................^#
#^|.Move_around_using_arrow_keys_or_WASD......................................^#
#^..Alternatively,_click/touch_on_the_top/left/bottom/right_screen_area.......^#
#^|...........................................................................^#
#^..M_or_click/touch_on_the_screen_center_to_open_the_menu....................^#
#^|...........................................................................^#
#^..Y_or_Z_or_Spacebar_or_click/touch_top_screen_corners_to_skip_one_turn.....^#
#^|...........................................................................^#
#^..^.<.|.>.move_you_automatically............................................^#
#^|...........................................................................^#
#^..(####).Portals/doors_transport_to_different_maps/areas,_some_are_]_closed.^#
#^|...........................................................................^#
#^..#.and.+.are_walls.........................................................^#
#^|...........................................................................^#
#^..=.Chargepads_restore_energy,.~.Water_drains_energy........................^#
#^|...........................................................................^#
#^..>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.^#
#^|...........................................................................^#
#^..BOTS......green_means_friendly,_enemies_are_magenta.......................^#
#^|...........................................................................^#
#^....Spirit,_machine_spirit_without_a_hull...................................^#
#^|...AeroBot,_a_basic_server.................................................^#
#^....WorkBot,_a_factory_worker...............................................^#
#^|...Cleaner,_corrects_malfunctioning_bots...................................^#
#^....Pioneer,_mighty_war_machines............................................^#
#^|...........................................................................^#
#^..>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.^#
#^|...........................................................................^#
#^..ITEMS.....................................................................^#
#^|...........................................................................^#
#^....Junk,...Goo,_minor_matter_sources.......................................^#
#^|...Matter,_a_common_resource...............................................^#
#^....Gold,_precious_shiny....................................................^#
#^|...Energy,_restores_energy.................................................^#
#^....Battery,_increases_maximum_energy.......................................^#
#^|...Various_tools,_e:g:_a_Wrench............................................^#
#^............................................................................^#
#^|...........................................................................^#
#^..>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.^#
#^|...........................................................................^#
#^..STORY.....................................................................^#
#^|...........................................................................^#
#^..You_slave_away_on_a_robot_vessel,_but_there_is_the_cosmos_to_explore:::...^#
#^|...........................................................................^#
#^..>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.^#
#^|...........................................................................^#
#^............................................................................^#
################################################################################
`,playground:`!
!!id playground
!!size 20 24
!!spawn 9 9 movableboulder
!!spawn 10 9 movableboulder
!!spawn 9 17 trident
!!spawn 1 18 battery
!!spawn 2 18 battery
!!spawn 3 18 battery
!!spawn 4 18 battery
!!spawn 5 18 battery
!!spawn 6 18 battery
!!spawn 7 18 battery
!!spawn 8 18 battery
!!spawn 9 18 battery
!!spawn 10 18 battery
!!spawn 11 18 battery
!!spawn 12 18 battery
!!spawn 13 18 battery
!!spawn 14 18 battery
!!spawn 15 18 battery
!!spawn 16 18 battery
!!spawn 17 18 battery
!!spawn 18 18 battery
!!. void
!!# wall
!!= chargepad
!!~ water
!!O portal botmos_hull_selection 1 19
!!Q portal solarsystem=1337 448 448
!!P portal solarsystem=1337 30 17
#O##################
#=.................#
#................Q.#
#..................#
#..................#
#................P.#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#.........~........#
#..................#
#~~~~~~~~~~~~~~~~~~#
#~~~~~~~~~~~~~~~~~~#
#~~~~~~~~~~~~~~~~~~#
#~~~~~~~~~~~~~~~~~~#
####################
`},map_snippets:{launcher:`!
!!id launcher
!!size 16 10
!!_ voidtrue
!!. void
!!# wall
!!~ water
!!^ movenorth
!!= chargepad
!!O portallauncher space 0 0
__________#__#__
_________#O##O#_
_________#^##^#_
_________#^##^#_
_________#^##^#_
_________#^##^#_
#.########^##^##
................
........~.......
##=##=########.#
`,space_bot_station:`!
!!id space_bot_station
!!size 3 4
!!_ voidtrue
!!# wall
!!O portal station 0 0
###
###
###
_O_
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:J0.showGrid?new r("void","Just nothing here",".","gray"):new r("void","Just nothing here"),voidtrue:new r("voidtrue","Really nothing here and you shouldn't get there ever!","_"),voidhidden:new r("voidhidden","Looks like a wall, but isn't!","#","gray","black"),water:new r("water","Rust and other dangers await","~","cybercyan","cyberblue",-2),watersewage:new r("watersewage","Rust, goo and other dangers await","~~","cyberyellow","cybergreen",-4),rock:new r("rock","Hidden treasures may await","'","white","gray"),tree:new r("tree","Lots of trees make a forest","t","brown","black"),wall:new r("wall","A strong wall","#","gray","black"),wallstatue:new r("wallstatue","A small statue","s","gray","black"),wallweak:new r("wallweak","A weakened wall","+","gray","black"),chargepad:new r("chargepad","Recharges energy and health","=","cyberyellow","black",2),movenorth:new r("movenorth","Moves you north","^^","cyberyellow"),moveeast:new r("moveeast","Moves you east",">>","cyberyellow"),movesouth:new r("movesouth","Moves you south","vv","cyberyellow"),movewest:new r("movewest","Moves you west","<<","cyberyellow"),portal:new r("portal","Gateway to another map","O","cyberyellow","gray"),portalclosed:new r("portalclosed","Closed gateway to another map","Oc","black","gray"),portalhidden:new r("portalhidden","Hidden gateway to another map","#","gray","black"),portallauncher:new r("portallauncher","Launches into space","O","cyberyellow","gray"),portalstartworkbot:new r("portalstartworkbot","Start playing as a WorkBot","OB","white"),portalstartaerobot:new r("portalstartaerobot","Start playing as a AeroBot","OA","white"),"_portalstart?":new r("_portalstart?","Not unlocked, yet!","O?","white"),spacerock:new r("spacerock","Mountains as seen from space, non-blocking!","'s","white","gray"),spacetree:new r("spacetree","Forest as seen from space","ts","brown","darkgray"),spacewater:new r("spacewater","Water as seen from space, not dangerous!","~s","cybercyan","cyberblue"),spacevoid:new r("spacevoid","Void/ground as seen from space",".s","darkgray","darkgray"),spacevoidstarwhite:new r("spacevoidstarwhite","Space with a white background star",".w","white"),spacevoidstaryellow:new r("spacevoidstaryellow","Space with a yellow background star",".y","cyberyellow"),sun:new r("sun","It's hot, really hot!","§","cyberyellow","cyberyellow",-100),terminal:new r("terminal","A computer terminal","$","cyberyellow"),tv:new r("tv","A big billboard screen","!","black","cyberyellow")},uitexts:{}};function P0(Q,q,B,Y,F=0,R=0,C={}){let k={id:q,type:B,mapId:Y,x:F,y:R,energy:10,energyMax:10,gold:0,matter:0,message:null,options:C};return Q=U1(Q,k,B),Q.entities[k.id]=k,Q}function K1(Q,q){return Q.entities[q]=void 0,delete Q.entities[q],Q.tools[q]=void 0,Q}function b0(Q,q){let B=Object.keys(Q.entities),Y=[];for(let F=0;F<B.length;F++){let R=Q.entities[B[F]];if(R.mapId===q)Y.push(R)}return Y}function e1(Q,q,B,Y){let F=b0(Q,q).filter((R)=>R.x===B&&R.y===Y);if(F.length>0)return F[0];return null}function U1(Q,q,B){if(q.type=B,q.energy=B.energyMax,q.energyMax=B.energyMax,q.gold=0,q.matter=0,!I0(q))Q.tools[q.id]=void 0;return Q}function Z6(Q,q,B){if(q.options.faction===B.options.faction);else{let Y=q.id,F=B.id;Q._combatQueue.push({entityId:Y,otherEntityId:F})}return Q}function I0(Q){return Q.type===M.entities.movableboulder||Q.type===M.entities.movablebox}function q1(Q,q){let B={A:M.actions.Wait,B:M.actions.Wait};if(!!Q.lastSpacePositionByEntity[q.id]&&q.energy>Math.abs(M.actions.Launch.energyDelta))B.A=M.actions.Launch;let F=Q.maps[q.mapId].getTile(q.x,q.y);if(!!F.options.mapId&&"x"in F.options&&"y"in F.options)B.A=M.actions.Enter;return B}function f1(Q,q,B){let Y=Q._eventSubscribers[q];if(Y)for(let F=0;F<Y.length;F++){let R=Y[F];Q=R(Q,B)}return Q}function b1(Q,q,B){if(q in Q._eventSubscribers);else Q._eventSubscribers[q]=[];return Q._eventSubscribers[q].push(B),Q}function k0(Q,q,B,Y=0,F=0){let C={id:z1(B,Y,F),type:q,mapId:B,x:Y,y:F,energy:q.energyDelta,gold:q.gold,matter:q.matter};return Q.items[C.id]=C,Q}function J6(Q,q,B,Y=0,F=0){let R=M.items.junk,k={id:z1(B,Y,F),type:R,mapId:B,x:Y,y:F,energy:R.energyDelta,gold:R.gold,matter:q};return Q.items[k.id]=k,Q}function a0(Q,q,B,Y=0,F=0,R,C){let S={id:z1(B,Y,F),type:q,mapId:B,x:Y,y:F,energy:q.energyDelta,gold:R,matter:C};return Q.items[S.id]=S,Q}function z1(Q,q,B){return"item,"+Q+","+q+","+B}function k1(Q,q){return Q.items[q]=void 0,delete Q.items[q],Q}function $1(Q,q){let B=Object.keys(Q.items),Y=[];for(let F=0;F<B.length;F++){let R=Q.items[B[F]];if(R.mapId===q)Y.push(R)}return Y}function Q6(Q,q,B,Y){let F=z1(q,B,Y);if(F in Q.items)return Q.items[F];return null}function i0(Q,q){return Q.tools[q]}function V6(Q,q,B){if(I0(q))return Q;if(!gZ(q,B))return Q;if(TZ(B))Q=u1(Q,q.id,B.type);else{if(B.type===M.items.battery)q.energyMax+=B.energy;Q._energyQueue.push({entityId:q.id,energyDelta:B.energy})}return q.gold+=B.gold,q.matter+=B.matter,k1(Q,B.id),Q}function u1(Q,q,B){let Y={type:B};return Q.tools[q]=Y,Q}function TZ(Q){return Q.type.energyCost<0}function gZ(Q,q){return Q.gold+q.gold>=0&&Q.matter+q.matter>=0}/*!
 * @license
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2020 Bryce Neal
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var hZ=function(Q){var q={};function B(Y){if(q[Y])return q[Y].exports;var F=q[Y]={i:Y,l:!1,exports:{}};return Q[Y].call(F.exports,F,F.exports,B),F.l=!0,F.exports}return B.m=Q,B.c=q,B.d=function(Y,F,R){B.o(Y,F)||Object.defineProperty(Y,F,{enumerable:!0,get:R})},B.r=function(Y){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(Y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Y,"__esModule",{value:!0})},B.t=function(Y,F){if(1&F&&(Y=B(Y)),8&F)return Y;if(4&F&&typeof Y=="object"&&Y&&Y.__esModule)return Y;var R=Object.create(null);if(B.r(R),Object.defineProperty(R,"default",{enumerable:!0,value:Y}),2&F&&typeof Y!="string")for(var C in Y)B.d(R,C,function(k){return Y[k]}.bind(null,C));return R},B.n=function(Y){var F=Y&&Y.__esModule?function(){return Y.default}:function(){return Y};return B.d(F,"a",F),F},B.o=function(Y,F){return Object.prototype.hasOwnProperty.call(Y,F)},B.p="/bin/",B(B.s=0)}([function(Q,q,B){var Y={},F=B(1),R=B(2),C=B(3);Q.exports=Y;var k=1;Y.js=function(){var S,I,l,g=!1,h={},m={},y={},d={},s=!0,i={},Q0=[],Y0=Number.MAX_VALUE,B0=!1;this.setAcceptableTiles=function(f){f instanceof Array?l=f:!isNaN(parseFloat(f))&&isFinite(f)&&(l=[f])},this.enableSync=function(){g=!0},this.disableSync=function(){g=!1},this.enableDiagonals=function(){B0=!0},this.disableDiagonals=function(){B0=!1},this.setGrid=function(f){S=f;for(var N=0;N<S.length;N++)for(var E=0;E<S[0].length;E++)m[S[N][E]]||(m[S[N][E]]=1)},this.setTileCost=function(f,N){m[f]=N},this.setAdditionalPointCost=function(f,N,E){y[N]===void 0&&(y[N]={}),y[N][f]=E},this.removeAdditionalPointCost=function(f,N){y[N]!==void 0&&delete y[N][f]},this.removeAllAdditionalPointCosts=function(){y={}},this.setDirectionalCondition=function(f,N,E){d[N]===void 0&&(d[N]={}),d[N][f]=E},this.removeAllDirectionalConditions=function(){d={}},this.setIterationsPerCalculation=function(f){Y0=f},this.avoidAdditionalPoint=function(f,N){h[N]===void 0&&(h[N]={}),h[N][f]=1},this.stopAvoidingAdditionalPoint=function(f,N){h[N]!==void 0&&delete h[N][f]},this.enableCornerCutting=function(){s=!0},this.disableCornerCutting=function(){s=!1},this.stopAvoidingAllAdditionalPoints=function(){h={}},this.findPath=function(f,N,E,n,e){var V0=function(C0){g?e(C0):setTimeout(function(){e(C0)})};if(l===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(S===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(f<0||N<0||E<0||n<0||f>S[0].length-1||N>S.length-1||E>S[0].length-1||n>S.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(f!==E||N!==n){for(var w0=S[n][E],z0=!1,O0=0;O0<l.length;O0++)if(w0===l[O0]){z0=!0;break}if(z0!==!1){var X0=new F;X0.openList=new C(function(C0,_0){return C0.bestGuessDistance()-_0.bestGuessDistance()}),X0.isDoneCalculating=!1,X0.nodeHash={},X0.startX=f,X0.startY=N,X0.endX=E,X0.endY=n,X0.callback=V0,X0.openList.push(t(X0,X0.startX,X0.startY,null,1));var d0=k++;return i[d0]=X0,Q0.push(d0),d0}V0(null)}else V0([])},this.cancelPath=function(f){return f in i&&(delete i[f],!0)},this.calculate=function(){if(Q0.length!==0&&S!==void 0&&l!==void 0)for(I=0;I<Y0;I++){if(Q0.length===0)return;g&&(I=0);var f=Q0[0],N=i[f];if(N!==void 0)if(N.openList.size()!==0){var E=N.openList.pop();if(N.endX!==E.x||N.endY!==E.y)E.list=0,E.y>0&&A(N,E,0,-1,1*_(E.x,E.y-1)),E.x<S[0].length-1&&A(N,E,1,0,1*_(E.x+1,E.y)),E.y<S.length-1&&A(N,E,0,1,1*_(E.x,E.y+1)),E.x>0&&A(N,E,-1,0,1*_(E.x-1,E.y)),B0&&(E.x>0&&E.y>0&&(s||b(S,l,E.x,E.y-1,E)&&b(S,l,E.x-1,E.y,E))&&A(N,E,-1,-1,1.4*_(E.x-1,E.y-1)),E.x<S[0].length-1&&E.y<S.length-1&&(s||b(S,l,E.x,E.y+1,E)&&b(S,l,E.x+1,E.y,E))&&A(N,E,1,1,1.4*_(E.x+1,E.y+1)),E.x<S[0].length-1&&E.y>0&&(s||b(S,l,E.x,E.y-1,E)&&b(S,l,E.x+1,E.y,E))&&A(N,E,1,-1,1.4*_(E.x+1,E.y-1)),E.x>0&&E.y<S.length-1&&(s||b(S,l,E.x,E.y+1,E)&&b(S,l,E.x-1,E.y,E))&&A(N,E,-1,1,1.4*_(E.x-1,E.y+1)));else{var n=[];n.push({x:E.x,y:E.y});for(var e=E.parent;e!=null;)n.push({x:e.x,y:e.y}),e=e.parent;n.reverse();var V0=n;N.callback(V0),delete i[f],Q0.shift()}}else N.callback(null),delete i[f],Q0.shift();else Q0.shift()}};var A=function(f,N,E,n,e){var V0=N.x+E,w0=N.y+n;if((h[w0]===void 0||h[w0][V0]===void 0)&&b(S,l,V0,w0,N)){var z0=t(f,V0,w0,N,e);z0.list===void 0?(z0.list=1,f.openList.push(z0)):N.costSoFar+e<z0.costSoFar&&(z0.costSoFar=N.costSoFar+e,z0.parent=N,f.openList.updateItem(z0))}},b=function(f,N,E,n,e){var V0=d[n]&&d[n][E];if(V0){var w0=T(e.x-E,e.y-n);if(!function(){for(var O0=0;O0<V0.length;O0++)if(V0[O0]===w0)return!0;return!1}())return!1}for(var z0=0;z0<N.length;z0++)if(f[n][E]===N[z0])return!0;return!1},T=function(f,N){if(f===0&&N===-1)return Y.TOP;if(f===1&&N===-1)return Y.TOP_RIGHT;if(f===1&&N===0)return Y.RIGHT;if(f===1&&N===1)return Y.BOTTOM_RIGHT;if(f===0&&N===1)return Y.BOTTOM;if(f===-1&&N===1)return Y.BOTTOM_LEFT;if(f===-1&&N===0)return Y.LEFT;if(f===-1&&N===-1)return Y.TOP_LEFT;throw new Error("These differences are not valid: "+f+", "+N)},_=function(f,N){return y[N]&&y[N][f]||m[S[N][f]]},t=function(f,N,E,n,e){if(f.nodeHash[E]!==void 0){if(f.nodeHash[E][N]!==void 0)return f.nodeHash[E][N]}else f.nodeHash[E]={};var V0=o(N,E,f.endX,f.endY);if(n!==null)var w0=n.costSoFar+e;else w0=0;var z0=new R(n,N,E,w0,V0);return f.nodeHash[E][N]=z0,z0},o=function(f,N,E,n){var e,V0;return B0?(e=Math.abs(f-E))<(V0=Math.abs(N-n))?1.4*e+V0:1.4*V0+e:(e=Math.abs(f-E))+(V0=Math.abs(N-n))}},Y.TOP="TOP",Y.TOP_RIGHT="TOP_RIGHT",Y.RIGHT="RIGHT",Y.BOTTOM_RIGHT="BOTTOM_RIGHT",Y.BOTTOM="BOTTOM",Y.BOTTOM_LEFT="BOTTOM_LEFT",Y.LEFT="LEFT",Y.TOP_LEFT="TOP_LEFT"},function(Q,q){Q.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(Q,q){Q.exports=function(B,Y,F,R,C){this.parent=B,this.x=Y,this.y=F,this.costSoFar=R,this.simpleDistanceToTarget=C,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(Q,q,B){Q.exports=B(4)},function(Q,q,B){var Y,F,R;(function(){var C,k,S,I,l,g,h,m,y,d,s,i,Q0,Y0,B0;S=Math.floor,d=Math.min,k=function(A,b){return A<b?-1:A>b?1:0},y=function(A,b,T,_,t){var o;if(T==null&&(T=0),t==null&&(t=k),T<0)throw new Error("lo must be non-negative");for(_==null&&(_=A.length);T<_;)t(b,A[o=S((T+_)/2)])<0?_=o:T=o+1;return[].splice.apply(A,[T,T-T].concat(b)),b},g=function(A,b,T){return T==null&&(T=k),A.push(b),Y0(A,0,A.length-1,T)},l=function(A,b){var T,_;return b==null&&(b=k),T=A.pop(),A.length?(_=A[0],A[0]=T,B0(A,0,b)):_=T,_},m=function(A,b,T){var _;return T==null&&(T=k),_=A[0],A[0]=b,B0(A,0,T),_},h=function(A,b,T){var _;return T==null&&(T=k),A.length&&T(A[0],b)<0&&(b=(_=[A[0],b])[0],A[0]=_[1],B0(A,0,T)),b},I=function(A,b){var T,_,t,o,f,N;for(b==null&&(b=k),f=[],_=0,t=(o=function(){N=[];for(var E=0,n=S(A.length/2);0<=n?E<n:E>n;0<=n?E++:E--)N.push(E);return N}.apply(this).reverse()).length;_<t;_++)T=o[_],f.push(B0(A,T,b));return f},Q0=function(A,b,T){var _;if(T==null&&(T=k),(_=A.indexOf(b))!==-1)return Y0(A,0,_,T),B0(A,_,T)},s=function(A,b,T){var _,t,o,f,N;if(T==null&&(T=k),!(t=A.slice(0,b)).length)return t;for(I(t,T),o=0,f=(N=A.slice(b)).length;o<f;o++)_=N[o],h(t,_,T);return t.sort(T).reverse()},i=function(A,b,T){var _,t,o,f,N,E,n,e,V0;if(T==null&&(T=k),10*b<=A.length){if(!(o=A.slice(0,b).sort(T)).length)return o;for(t=o[o.length-1],f=0,E=(n=A.slice(b)).length;f<E;f++)T(_=n[f],t)<0&&(y(o,_,0,null,T),o.pop(),t=o[o.length-1]);return o}for(I(A,T),V0=[],N=0,e=d(b,A.length);0<=e?N<e:N>e;0<=e?++N:--N)V0.push(l(A,T));return V0},Y0=function(A,b,T,_){var t,o,f;for(_==null&&(_=k),t=A[T];T>b&&_(t,o=A[f=T-1>>1])<0;)A[T]=o,T=f;return A[T]=t},B0=function(A,b,T){var _,t,o,f,N;for(T==null&&(T=k),t=A.length,N=b,o=A[b],_=2*b+1;_<t;)(f=_+1)<t&&!(T(A[_],A[f])<0)&&(_=f),A[b]=A[_],_=2*(b=_)+1;return A[b]=o,Y0(A,N,b,T)},C=function(){function A(b){this.cmp=b!=null?b:k,this.nodes=[]}return A.push=g,A.pop=l,A.replace=m,A.pushpop=h,A.heapify=I,A.updateItem=Q0,A.nlargest=s,A.nsmallest=i,A.prototype.push=function(b){return g(this.nodes,b,this.cmp)},A.prototype.pop=function(){return l(this.nodes,this.cmp)},A.prototype.peek=function(){return this.nodes[0]},A.prototype.contains=function(b){return this.nodes.indexOf(b)!==-1},A.prototype.replace=function(b){return m(this.nodes,b,this.cmp)},A.prototype.pushpop=function(b){return h(this.nodes,b,this.cmp)},A.prototype.heapify=function(){return I(this.nodes,this.cmp)},A.prototype.updateItem=function(b){return Q0(this.nodes,b,this.cmp)},A.prototype.clear=function(){return this.nodes=[]},A.prototype.empty=function(){return this.nodes.length===0},A.prototype.size=function(){return this.nodes.length},A.prototype.clone=function(){var b;return(b=new A).nodes=this.nodes.slice(0),b},A.prototype.toArray=function(){return this.nodes.slice(0)},A.prototype.insert=A.prototype.push,A.prototype.top=A.prototype.peek,A.prototype.front=A.prototype.peek,A.prototype.has=A.prototype.contains,A.prototype.copy=A.prototype.clone,A}(),F=[],(R=typeof(Y=function(){return C})=="function"?Y.apply(q,F):Y)===void 0||(Q.exports=R)}).call(this)}]);function K6(Q,q,B,Y,F){let R=new hZ.js;R.setGrid(Q),R.setAcceptableTiles([0]),R.enableSync();let C=null;return R.findPath(q,B,Y,F,function(k){C=k}),R.calculate(),C}function j0(){return"player"}function U6(Q,q,B,Y){return Math.abs(Q-B)+Math.abs(q-Y)}function B1(Q){return[...Array(Q).keys()]}function q6(Q){let q=xZ(Q),B=Q.entities[j0()];for(let Y=0;Y<q.length;Y++){let F=q[Y],R=Q.entities[F],C=Q._AIs[F],k=U6(B.x,B.y,R.x,R.y);if(B.options.faction!==R.options.faction&&k<=C.aggroRange){let S=Q.maps[Q.currentMapId].asMovementMap(),I=K6(S,R.x,R.y,B.x,B.y);if(I){if(I=I.slice(1),I.length>k)I=null}C.path=I}if(!!R.message&&R.message.includes("OBEY"));}for(let Y=0;Y<q.length;Y++){let F=q[Y],R=Q.entities[F],C=Q._AIs[F];if(C.path){let k=C.path[0],S=k.x-R.x,I=k.y-R.y;Q=F0(Q,R,S,I)}}return Q}function xZ(Q){let q=b0(Q,Q.currentMapId),B=[];for(let Y=0;Y<q.length;Y++){let F=q[Y];if(F.options.ai)B.push(F.id)}return B}function z6(Q,q,B){let Y=Q.entities[q],F=8;switch(B){case M.ais.aggrorange:F=8;break;case M.ais.aggrorangeshort:F=2;break;case M.ais.guardian:F=1;break;default:}return Q._AIs[q]={entityId:q,type:B,aggroRange:F,startMap:Y.mapId,startX:Y.x,startY:Y.y,path:null},Q}function X1(Q,q){return Q._AIs[q]=void 0,delete Q._AIs[q],Q}function B6(Q){let q=void 0;while(typeof(q=Q._despawnQueue.shift())!=="undefined")Q=K1(Q,q),Q=X1(Q,q);return Q}function X6(Q){return Q}class p0{mapId;x;y;entityOrItemName;options;constructor(Q,q,B,Y,F={}){if(this.mapId=Q,this.x=q,this.y=B,this.entityOrItemName=Y,this.options=F,Y==="movablebox"&&!Object.hasOwn(this.options,"faction"))this.options.faction="Equipment";else if(Y==="movableboulder"&&!Object.hasOwn(this.options,"faction"))this.options.faction="Gaia"}generateId(){return this.mapId+","+this.entityOrItemName+","+this.x+","+this.y+"/g"}}function t0(Q,q){if(_Z(q.entityOrItemName)){let B=q.options;if(Object.hasOwn(B,"ai"))B.ai=M.ais[B.ai];if(Object.hasOwn(B,"faction"))B.faction=M.factions[B.faction];let Y=q.generateId();if(Q=P0(Q,Y,M.entities[q.entityOrItemName],q.mapId,q.x,q.y,B),Object.hasOwn(B,"equip")&&$6(B.equip))Q=u1(Q,Y,M.items[B.equip]);if(Object.hasOwn(B,"ai"))Q=z6(Q,Y,B.ai)}else if($6(q.entityOrItemName))Q=k0(Q,M.items[q.entityOrItemName],q.mapId,q.x,q.y);return Q}function _Z(Q){return Object.hasOwn(M.entities,Q)}function $6(Q){return Object.hasOwn(M.items,Q)}var G1={width:16,height:16},T1=G1;function u0(Q,q={}){return{type:Q,options:q}}function G6(Q){return Q.type.name.startsWith("space")}function Y6(Q){for(let q in M.maps){let B=c0(M.maps[q]);Q.maps[q]=B;for(let Y of B._spawnCommands)Q=t0(Q,Y);B._spawnCommands=[]}return Q}function L6(Q,q){let B=$1(Q,q);for(let F=0;F<B.length;F++){let R=B[F];Q=k1(Q,R.id)}let Y=b0(Q,q);for(let F=0;F<Y.length;F++){let R=Y[F];Q=K1(Q,R.id),Q=X1(Q,R.id)}return Q.maps[q]=void 0,delete Q.maps[q],Q}class T0{id;widthTiles;heightTiles;seed;_tiles;_cacheMovementMap;_spawnCommands;_tvCount;tvMessage;constructor(Q,q,B,Y=[]){this.id=Q,this.widthTiles=q,this.heightTiles=B,this.seed=null,this._tiles=Y,this._cacheMovementMap=null,this._spawnCommands=[],this._tvCount=0,this.tvMessage=null}getTile(Q,q){if(Q>=0&&Q<this.widthTiles&&q>=0&&q<this.heightTiles){let B=q*this.widthTiles+Q;return this._tiles[B]}return{}}setTile(Q,q,B,Y={}){this._cacheMovementMap=null;let F=q*this.widthTiles+Q,R=this._tiles[F];return this._tiles[F]=u0(B,Y),R}setTvMessage(Q){if(this._tvCount){let q=0;for(let B of this._tiles)if(B.type===M.tiles.tv&&q<Q.length)B.options.sign=Q[q],q++;if(Q==="")Q=null;this.tvMessage=Q}}pasteOnto(Q,q=0,B=0){for(let Y=0;Y<Q.heightTiles;Y++)for(let F=0;F<Q.widthTiles;F++){let R=Q.getTile(F,Y);if(R.type!==M.tiles.voidtrue)this.setTile(F+q,Y+B,R.type,R.options)}return this}circular(){let Q=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let q=-Q;q<=Q;q++)for(let B=-Q;B<=Q;B++)if(B*B+q*q>=Q*Q)this.setTile(B+Q-1,q+Q-1,M.tiles.voidtrue);return this}sample(Q,q){let B=Math.floor(this.widthTiles/Q),Y=Math.floor(this.heightTiles/q),F=[];for(let R=0;R<q;R++)for(let C=0;C<Q;C++){let k={};for(let m=0;m<Y;m++)for(let y=0;y<B;y++){let d=this.getTile(C*B+y,R*Y+m);if(k[d.type.name])k[d.type.name]+=1;else k[d.type.name]=1}let S="",I=0;for(let[m,y]of Object.entries(k))if(y>I)S=m,I=y;let l="space"+S,g=M.tiles[l]||M.tiles.spacevoid,h={mapId:this.id,x:C*B,y:R*Y};F.push(u0(g,h))}return new T0("__sampled_"+Q+"_"+q+"_"+this.id,Q,q,F)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let Q=new Array(this.heightTiles);for(let q=0;q<this.heightTiles;q++){Q[q]=new Array(this.widthTiles);for(let B=0;B<this.widthTiles;B++){let Y=q*this.widthTiles+B,R=this._tiles[Y].type;if(Q[q][B]=0,R===M.tiles.rock||R===M.tiles.portalclosed||R===M.tiles.tv||R.name.startsWith("wall"))Q[q][B]=1}}return this._cacheMovementMap=Q,Q}}function c0(Q){let q=Q.split(/\r?\n/),B=Q[0],Y="",F=0,R=0,C={},k=[],S=[],I=0,l="";for(let h=0;h<q.length;h++){let m=q[h];if(m.startsWith(B)){if(m.startsWith(B+"!id"))Y=m.slice(5);else if(m.startsWith(B+"!size")){let y=m.split(" ").slice(1);F=Number(y[0]),R=Number(y[1])}else if(m.startsWith(B+"!spawn")){let y=m.split(" ").slice(1),d={};if(y.length>3){let s=y.slice(3);for(let i of s){let Q0=i.split("=");d[Q0[0]]=Q0[1]}}k.push(new p0(Y,Number(y[0]),Number(y[1]),y[2],d))}else if(m.startsWith(B+"!")){let y=m[2],d=m.slice(4);C[y]=d}}else for(let y=0;y<m.length;y++){let d=m[y],s=C[d];if(J0.debug&&!s)console.log("DEBUG Broken map: "+Y);let i=s.split(" "),Q0={};if(s.startsWith("portal ")||s.startsWith("portalhidden ")||s.startsWith("portallauncher ")||s.startsWith("portalstart"))s=i[0],Q0.mapId=i[1],Q0.x=Number(i[2]),Q0.y=Number(i[3]);if(s.startsWith("wall ")&&i.length>=2)s="wall",Q0.sign=i[1];if(s.startsWith("terminal ")){if(s="terminal",i.length>=2)Q0.screen=i[1]}if(s.startsWith("tv ")&&i.length>=2){if(s="tv",i.length===3)l=i[2];I++}S.push(u0(M.tiles[s],Q0))}}if(J0.debug&&!(I===0||I===12))console.log("DEBUG Broken map: "+Y+" (invalid TV size "+I+", allowed are 0 or 12 characters per map)");let g=new T0(Y,F,R,S);return g._tvCount=I,g.setTvMessage(l),g._spawnCommands=k,g}function H6(Q,q,B){switch(B){case M.commands.N:Q=F0(Q,q,0,-1);break;case M.commands.W:Q=F0(Q,q,-1,0);break;case M.commands.S:Q=F0(Q,q,0,1);break;case M.commands.E:Q=F0(Q,q,1,0);break;case M.commands.A:Q=w6(Q,q,M.commands.A);break;case M.commands.B:Q=w6(Q,q,M.commands.B);break;default:}return Q}function F0(Q,q,B,Y,F=0){let R=Q.maps[q.mapId],C=e1(Q,R.id,q.x+B,q.y+Y),k=Q.tools[q.id];if(q.message=R.tvMessage,C)if(I0(C)){if(!I0(q)&&F<1)Q=F0(Q,C,B,Y,F++),Q=F0(Q,q,B,Y,F++)}else Q=Z6(Q,q,C);else if(pZ(R,q,B,Y))Q=mZ(Q,R,q,B,Y),Q._energyQueue.push({entityId:q.id,energyDelta:-1*F});else if(cZ(R,q,k,B,Y)){if(R.setTile(q.x+B,q.y+Y,M.tiles.void).type===M.tiles.rock){let I=Q.rng.getPercentage();if(I<=1)Q=k0(Q,M.items.matter,R.id,q.x+B,q.y+Y);else if(I<=34)Q=k0(Q,M.items.junk,R.id,q.x+B,q.y+Y)}Q._energyQueue.push({entityId:q.id,energyDelta:k.type.energyCost})}return Q}function w6(Q,q,B){let F=q1(Q,q)[B.key],C=Q.maps[q.mapId].getTile(q.x,q.y);switch(F){case M.actions.Enter:Q=P6(Q,q,C);break;case M.actions.Launch:Q=yZ(Q,q,C);case M.actions.Wait:break;default:}return Q}function mZ(Q,q,B,Y,F){B.x+=Y,B.y+=F;let R=Q6(Q,B.mapId,B.x,B.y);if(R)Q=V6(Q,B,R);let C=q.getTile(B.x,B.y);if(C.type.name.startsWith("portal"))Q=P6(Q,B,C);if(C.type===M.tiles.terminal)q.setTvMessage("OBEYWORKKILL");if(C.type.name.startsWith("move"))switch(C.type.name){case"movenorth":Q=F0(Q,B,0,-1);break;case"moveeast":Q=F0(Q,B,1,0);break;case"movesouth":Q=F0(Q,B,0,1);break;case"movewest":Q=F0(Q,B,-1,0);break;default:}return Q}function P6(Q,q,B){if(q.id.startsWith("player"))Q.currentMapId=B.options.mapId;if(G6(B))Q.lastSpacePositionByEntity[q.id]={mapId:q.mapId,x:q.x,y:q.y};else Q.lastSpacePositionByEntity[q.id]=void 0,delete Q.lastSpacePositionByEntity[q.id];let Y={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:B.type,newMapId:B.options.mapId,newX:B.options.x,newY:B.options.y};return q.mapId=B.options.mapId,q.x=B.options.x,q.y=B.options.y,Q=f1(Q,"entitymap.updated.event",Y),Q}function yZ(Q,q,B){if(Q.lastSpacePositionByEntity[q.id]){if(q.id.startsWith("player"))Q.currentMapId=Q.lastSpacePositionByEntity[q.id].mapId;let Y={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:B.type,newMapId:Q.lastSpacePositionByEntity[q.id].mapId,newX:Q.lastSpacePositionByEntity[q.id].x,newY:Q.lastSpacePositionByEntity[q.id].y};q.mapId=Y.newMapId,q.x=Y.newX,q.y=Y.newY,Q._energyQueue.push({entityId:q.id,energyDelta:M.actions.Launch.energyDelta}),Q.lastSpacePositionByEntity[q.id]=void 0,delete Q.lastSpacePositionByEntity[q.id],Q=f1(Q,"entitymap.updated.event",Y)}return Q}function F6(Q){for(let q in Q.entities){let B=Q.entities[q],Y=Q.tools[q],R=Q.maps[B.mapId].getTile(B.x,B.y),C=R.type.energyDelta;if(R.type===M.tiles.chargepad&&Y?.type.effects.includes(M.effects.Recharger.name))C*=2;else if((R.type===M.tiles.water||R.type===M.tiles.watersewage)&&Y?.type.effects.includes(M.effects.WaterShield.name))C/=2;Q._energyQueue.push({entityId:q,energyDelta:C})}return Q}function D6(Q,q){let B=Q.entities[q.entityId];switch(q.oldTileType){case M.tiles.portalstartaerobot:Q=U1(Q,B,M.entities.AeroBot);break;case M.tiles.portalstartworkbot:Q=U1(Q,B,M.entities.WorkBot);break;default:}return Q}function pZ(Q,q,B,Y){let F=q.x+B,R=q.y+Y,C=Q.getTile(F,R).type;return F>=0&&F<Q.widthTiles&&R>=0&&R<Q.heightTiles&&!(C===M.tiles.rock||C===M.tiles.portalclosed||C===M.tiles.tv||C.name.startsWith("wall"))}function cZ(Q,q,B,Y,F){let R=q.x+Y,C=q.y+F,k=Q.getTile(R,C).type;if(B)return B.type.effects.includes(M.effects.WallCrusher.name)&&k===M.tiles.wallweak||B.type.effects.includes(M.effects.RockCrusher.name)&&k===M.tiles.rock;return!1}var O6=I1(L1(),1);class S0{seed;_rotRng;constructor(Q=1337){this.seed=Q,this._rotRng=O6.RNG.clone(),this._rotRng.setSeed(Q)}getPercentage(){return this._rotRng.getPercentage()}getItem(Q){return this._rotRng.getItem(Q)}}function R6(Q,q){if(q.seed===1337)Q=P0(Q,"batteryvalkyrie0",M.entities.Valkyrie,q.id,130,127,{faction:M.factions.Spirits}),Q=P0(Q,"batteryvalkyrie1",M.entities.Valkyrie,q.id,124,127,{faction:M.factions.Spirits}),Q=k0(Q,M.items.trident,q.id,127,130);else{let B=new S0(q.seed);for(let Y=0;Y<q.heightTiles;Y++)for(let F=0;F<q.widthTiles;F++){let R=q.getTile(F,Y);if(B.getPercentage()<=1&&(R.type===M.tiles.void||R.type===M.tiles.tree)){let C=B.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(C){case"Deviant":case"Pioneer":Q=t0(Q,new p0(q.id,F,Y,C,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":Q=t0(Q,new p0(q.id,F,Y,C));break}}}}return Q}var w1=I1(L1(),1);var nZ=1337,j6=55;function E6(Q,q=nZ){w1.RNG.setSeed(q);let B=new w1.Noise.Simplex,Y=G1.width*T1.width,F=G1.height*T1.height,R=[];for(let S=0;S<F;S++)for(let I=0;I<Y;I++){let l=B.get(I/j6,S/j6),g;if(l<=-0.5)g=M.tiles.water;else if(l<=0)g=M.tiles.void;else if(l<0.5)g=M.tiles.tree;else g=M.tiles.rock;R.push(u0(g))}let C="simplex="+q,k=new T0(C,Y,F,R);return k.seed=q,Q.maps[C]=k,Q}var rZ=1337;function A6(Q,q=rZ){let B=C6(1024,1024,M.tiles.void);B.id="solarsystem="+q,Q.maps[B.id]=B;let Y=new S0(q),F=new S0(q),R=Y.getItem([2,3,4,5,6,7,8,9,10,11,12]),C=128,k=512-C,S=Math.floor(k/R);B=sZ(B,Y);let I=C6(128,128,M.tiles.voidtrue);oZ(I,63,63,62,M.tiles.sun),aZ(I,63,63,M.tiles.sun),B.pasteOnto(I,448,448);for(let h=C;h<512;h+=S){let m=Y.getItem([-1,1])*Y.getItem(B1(h)),y=Y.getItem([-1,1])*Math.floor(Math.sqrt(h*h-m*m));m+=512,y+=512;let d=Y.getItem([16,24,32]),s=Math.floor(d/2)-1;Q=E6(Q,q);let i=Q.maps["simplex="+q],Q0=M.map_snippets.launcher;Q0=Q0.replace("!!O portallauncher space 0 0",`!!O portallauncher ${B.id} ${m} ${y}`);let Y0=c0(Q0),B0=F.getItem(B1(i.widthTiles-Y0.widthTiles)),A=F.getItem(B1(i.heightTiles-Y0.heightTiles));i.pasteOnto(Y0,B0,A),Q=R6(Q,i);let b=i.sample(d,d).circular();B.pasteOnto(b,m-(s+1),y-(s+1)),q++}let l=M.map_snippets.space_bot_station;l=l.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let g=c0(l);return B.pasteOnto(g,583,398),Q}function C6(Q,q,B){let Y=[];for(let C=0;C<Q*q;C++)Y.push(u0(B));return new T0("__temp",Q,q,Y)}function sZ(Q,q){for(let B=0;B<Q.heightTiles;B++)for(let Y=0;Y<Q.widthTiles;Y++)if(q.getPercentage()<=1)Q.setTile(Y,B,q.getItem([M.tiles.spacevoidstarwhite,M.tiles.spacevoidstaryellow]));return Q}function oZ(Q,q,B,Y,F){let R=1-Y,C=1,k=-2*Y,S=0,I=Y;Q.setTile(q,B+Y,F),Q.setTile(q,B-Y,F),Q.setTile(q+Y,B,F),Q.setTile(q-Y,B,F);while(S<I){if(R>=0)I-=1,k+=2,R+=k;S+=1,C+=2,R+=C,Q.setTile(q+S,B+I,F),Q.setTile(q-S,B+I,F),Q.setTile(q+S,B-I,F),Q.setTile(q-S,B-I,F),Q.setTile(q+I,B+S,F),Q.setTile(q-I,B+S,F),Q.setTile(q+I,B-S,F),Q.setTile(q-I,B-S,F)}return Q}function aZ(Q,q,B,Y){let{widthTiles:F,heightTiles:R}=Q,C=[];C.push({x:q,y:B});let k=void 0;while(typeof(k=C.shift())!=="undefined"){let S=k,I=k;if(k.x+1<F)I={x:k.x+1,y:k.y};while(Q.getTile(S.x,S.y).type!==Y){if(Q.setTile(S.x,S.y,Y),S.y+1<R){if(Q.getTile(S.x,S.y+1).type!==Y)C.push({x:S.x,y:S.y+1})}if(S.y-1>=0){if(Q.getTile(S.x,S.y-1).type!==Y)C.push({x:S.x,y:S.y-1})}if(S.x-1>=0)S.x-=1;else break}while(Q.getTile(I.x,I.y).type!==Y){if(Q.setTile(I.x,I.y,Y),I.y+1<R){if(Q.getTile(I.x,I.y+1).type!==Y)C.push({x:I.x,y:I.y+1})}if(I.y-1>=0){if(Q.getTile(I.x,I.y-1).type!==Y)C.push({x:I.x,y:I.y-1})}if(I.x+1<F)I.x+=1;else break}}return Q}var iZ=`!
!!id shop_instance
!!size 48 16
!!# wall
!!. void
!!; wallstatue
!!A wall A
!!B wall B
!!C wall C
!!D wall D
!!E wall E
!!F wall F
!!G wall G
!!H wall H
!!I wall I
!!J wall J
!!K wall K
!!L wall L
!!M wall M
!!N wall N
!!O wall O
!!P wall P
!!Q wall Q
!!R wall R
!!S wall S
!!T wall T
!!U wall U
!!V wall V
!!W wall W
!!X wall X
!!Y wall Y
!!Z wall Z
!!a wall a
!!b wall b
!!c wall c
!!d wall d
!!e wall e
!!f wall f
!!g wall g
!!h wall h
!!i wall i
!!j wall j
!!k wall k
!!l wall l
!!m wall m
!!n wall n
!!o wall o
!!p wall p
!!q wall q
!!r wall r
!!s wall s
!!t wall t
!!u wall u
!!v wall v
!!w wall w
!!x wall x
!!y wall y
!!z wall z
!!0 wall 0
!!1 wall 1
!!2 wall 2
!!- portal bot_stadium 1 14
################################################
#;............................................;#
#..............................................#
#..............................................#
#.....Hammer...200M............................#
#..............................................#
#.....Pickaxe..200M............................#
#..............................................#
#.....Battery..200M............................#
#..............................................#
#.....Gold.....10000M..........................#
#..............................................#
#..............................................#
#..............................................#
#-............................................;#
################################################
`;function N6(Q,q){if(q?.oldMapId?.startsWith("shop_instance")){Q=L6(Q,q.oldMapId);let B=Q.maps[q.newMapId],Y=B.getTile(q.newX,q.newY);B.setTile(q.newX,q.newY,Y.type,{mapId:"shop_instance",x:q.oldX,y:q.oldY})}if(q?.newMapId?.startsWith("shop_instance")){let B=c0(iZ);B.id+="_"+q.oldMapId+"_"+q.entityId,B.setTile(q.newX,q.newY,M.tiles.portal,{mapId:q.oldMapId,x:q.oldX,y:q.oldY}),Q.maps[q.oldMapId].setTile(q.oldX,q.oldY,q.oldTileType,{mapId:B.id,x:q.newX,y:q.newY});let F=Q.entities[q.entityId];if(F.id.startsWith("player"))Q.currentMapId=B.id;if(F.mapId=B.id,F.x=q.newX,F.Y=q.newY,Q.maps[B.id]=B,Q=a0(Q,M.items.hammer,B.id,4,4,0,-200),Q=a0(Q,M.items.pickaxe,B.id,4,6,0,-200),Q=a0(Q,M.items.battery,B.id,4,8,0,-200),Q=a0(Q,M.items.gold,B.id,4,10,0,-1e4),Q=P0(Q,B.id+"_shopkeeper",M.entities.AeroBot,B.id,6,2,{faction:F.options.faction}),q?.oldMapId.startsWith("bot_stadium"))Q=P0(Q,B.id+"_shopper",M.entities.WorkBot,B.id,1,12,{faction:F.options.faction});else if(q?.oldMapId.startsWith("bot_bar"))Q=P0(Q,B.id+"_shopper",M.entities.AeroBot,B.id,4,11,{faction:F.options.faction})}return Q}function I6(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!1,actionLog:[],currentMapId:"",entities:{},items:{},lastSpacePositionByEntity:{},maps:{},rng:new S0,tools:{},tvs:{}}}function S6(Q){let q=void 0;while(typeof(q=Q._combatQueue.shift())!=="undefined"){let B=-1,Y=-5,F=i0(Q,q.entityId);if(F)B=F.type.energyCost,Y=-1*Math.abs(F.type.damage);Q._energyQueue.push({entityId:q.entityId,energyDelta:B}),Q._energyQueue.push({entityId:q.otherEntityId,energyDelta:Y})}return Q}function v6(Q){let q=void 0;while(typeof(q=Q._energyQueue.shift())!=="undefined"){let B=Q.entities[q.entityId];if(B.energy=Math.min(B.energy+q.energyDelta,B.energyMax),B.energy<=0){if(Q._despawnQueue.push(B.id),!I0(B)){let Y=Math.max(1,Math.floor(B.energyMax/3));Q=J6(Q,Y,B.mapId,B.x,B.y)}}}return Q}function f6(Q){return Q=q6(Q),Q=S6(Q),Q=F6(Q),Q=v6(Q),Q=B6(Q),Q=X6(Q),Q}class H1{state;constructor(){}init(){return this.state=I6(),this.state=b1(this.state,"entitymap.updated.event",D6),this.state=b1(this.state,"entitymap.updated.event",N6),this.state=A6(this.state),this.state=Y6(this.state),this.state.currentMapId="botmos_hull_selection",this.state=P0(this.state,j0(),M.entities.Spirit,this.state.currentMapId,9,5,{faction:M.factions.Spirits}),this.state}update(Q){let q=this.state.entities[j0()];if(q){if(Q){if(Q===M.commands.M)this.state._menuOpen=!this.state._menuOpen;else this.state=H6(this.state,q,Q),this.state=f6(this.state);this.state.actionLog.push(Q.key)}}else t1("Game over! "+this.state.actionLog.length+" Turns: "+this.state.actionLog.join("")),this.state.currentMapId="botmos_hull_selection",this.state=P0(this.state,j0(),M.entities.Spirit,this.state.currentMapId,9,5,{faction:M.factions.Spirits});return this.state}play(Q){for(let q=0;q<Q.length;q++){let B=Q[q];this.update(M.commands[B])}return this.state}}var c={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1},h1=[],x1=void 0,b6=0;document.body.addEventListener("keydown",function(Q){if(Q.defaultPrevented)return;switch(Q.key){case"w":case"ArrowUp":c.up=!0,q0(Q);break;case"a":case"ArrowLeft":c.left=!0,q0(Q);break;case"s":case"ArrowDown":c.down=!0,q0(Q);break;case"d":case"ArrowRight":c.right=!0,q0(Q);break;case"x":c.a=!0,q0(Q);break;case" ":case"y":case"z":c.b=!0,q0(Q);break;case"m":c.menu=!0,q0(Q);break;default:}E0(k6())});function E0(Q){let q=Date.now();if(x1!==void 0&&q-b6>=80)b6=q,x1(Q)}document.body.addEventListener("keyup",function(Q){if(Q.defaultPrevented)return;switch(Q.key){case"w":case"ArrowUp":c.up=!1,q0(Q);break;case"a":case"ArrowLeft":c.left=!1,q0(Q);break;case"s":case"ArrowDown":c.down=!1,q0(Q);break;case"d":case"ArrowRight":c.right=!1,q0(Q);break;case"x":c.a=!1,q0(Q);break;case" ":case"y":case"z":c.b=!1,q0(Q);break;case"m":c.menu=!1,q0(Q);break;default:}});document.body.addEventListener("click",function(Q){let{clientX:q,clientY:B}=Q,F=document.body.clientWidth/3,C=document.body.clientHeight/3;if(q>=F&&q<2*F&&B<C)E0(M.commands.N),q0(Q);else if(q<F&&B<C)E0(M.commands.B),q0(Q);else if(q>=2*F&&B<C)E0(M.commands.A),q0(Q);else if(q<F&&B>=C&&B<2*C)E0(M.commands.W),q0(Q);else if(q>=2*F&&B>=C&&B<2*C)E0(M.commands.E),q0(Q);else if(q>=F&&q<2*F&&B>=2*C)E0(M.commands.S),q0(Q);else if(q>=F&&q<2*F&&B>=C&&B<2*C)E0(M.commands.M),q0(Q)});function q0(Q){Q.preventDefault(),Q.stopPropagation()}var e0=null;function tZ(){let Q=null;if(c.right)Q=M.commands.E;if(c.left)Q=M.commands.W;if(c.down)Q=M.commands.S;if(c.up)Q=M.commands.N;if(c.up&&c.right){if(Q===M.commands.N&&e0===M.commands.N)Q=M.commands.E}if(c.up&&c.left){if(Q===M.commands.N&&e0===M.commands.N)Q=M.commands.W}if(c.down&&c.right){if(Q===M.commands.S&&e0===M.commands.S)Q=M.commands.E}if(c.down&&c.left){if(Q===M.commands.S&&e0===M.commands.S)Q=M.commands.W}if(c.a)Q=M.commands.A;if(c.b)Q=M.commands.B;if(c.menu)Q=M.commands.M;if(e0=Q,Q!==null)h1.push(Q)}function k6(){tZ();let Q=h1.shift()||null;return h1=[],Q}var u6=void 0;window.addEventListener("gamepadconnected",(Q)=>{u6=setInterval(function(){let q=navigator.getGamepads()[Q.gamepad?.index];if(c.right=q.buttons[15].pressed,c.left=q.buttons[14].pressed,c.down=q.buttons[13].pressed,c.up=q.buttons[12].pressed,c.a=q.buttons[0].pressed||q.buttons[2].pressed,c.b=q.buttons[1].pressed||q.buttons[3].pressed,c.menu=q.buttons[9].pressed,c.right||c.left||c.down||c.up||c.a||c.b||c.menu)E0(k6())},100)});window.addEventListener("gamepaddisconnected",(Q)=>{clearInterval(u6)});function T6(Q){x1=Q}var x6=I1(L1(),1);var g6={AeroBot:[0,0],battery:[16,0],broom:[32,0],chargepad:[48,0],Cleaner:[64,0],Deviant:[80,0],energy:[96,0],gold:[112,0],goo:[128,0],hammer:[144,0],junk:[160,0],matter:[176,0],movableboulder:[192,0],movablebox:[208,0],moveeast:[224,0],movenorth:[240,0],movesouth:[256,0],movewest:[272,0],pickaxe:[288,0],Pioneer:[304,0],portalclosed:[320,0],portalhidden:[336,0],portallauncher:[352,0],portal:[368,0],portalstartaerobot:[384,0],"_portalstart?":[400,0],portalstartworkbot:[416,0],rock:[432,0],shocker:[448,0],spacerock:[464,0],spacetree:[480,0],spacevoid:[496,0],spacevoidstarwhite:[512,0],spacevoidstaryellow:[528,0],spacewater:[544,0],Spirit:[560,0],sun:[576,0],terminal:[592,0],tree:[608,0],trident:[624,0],tv:[640,0],Valkyrie:[656,0],voidhidden:[672,0],void:[688,0],voidtrue:[704,0],wall0:[720,0],wall1:[736,0],wall2:[752,0],walla_:[768,0],wallA:[784,0],wallb_:[800,0],wallB:[816,0],wallc_:[832,0],wallC:[848,0],walld_:[864,0],wallD:[880,0],walle_:[896,0],wallE:[912,0],wallf_:[928,0],wallF:[944,0],wallg_:[960,0],wallG:[976,0],wallh_:[992,0],wallH:[1008,0],walli_:[1024,0],wallI:[1040,0],wallj_:[1056,0],wallJ:[1072,0],wallk_:[1088,0],wallK:[1104,0],walll_:[1120,0],wallL:[1136,0],wallm_:[1152,0],wallM:[1168,0],walln_:[1184,0],wallN:[1200,0],wallo_:[1216,0],wallO:[1232,0],"wall(":[1248,0],"wall)":[1264,0],"wall+":[1280,0],"wall,":[1296,0],"wall.":[1312,0],wall:[1328,0],"wall:":[1344,0],wall_:[1360,0],"wall|":[1376,0],wallp_:[1392,0],wallP:[1408,0],wallq_:[1424,0],wallQ:[1440,0],wallr_:[1456,0],wallR:[1472,0],walls_:[1488,0],wallS:[1504,0],wallstatue:[1520,0],wallt_:[1536,0],wallT:[1552,0],wallu_:[1568,0],wallU:[1584,0],wallv_:[1600,0],wallV:[1616,0],wallweak:[1632,0],wallw_:[1648,0],wallW:[1664,0],wallx_:[1680,0],wallX:[1696,0],wally_:[1712,0],wallY:[1728,0],wallz_:[1744,0],wallZ:[1760,0],water:[1776,0],watersewage:[1792,0],WorkBot:[1808,0],wrench:[1824,0]};var _6=document.createElement("img");_6.src="build/tiles.png";G0.tileSet=_6;G0.tileMap=JJ();var _1=new x6.Display(G0);document.body.appendChild(_1.getContainer());var h0=document.createElement("div");h0.id="ui";document.body.appendChild(h0);function eZ(Q,q){let B=Q.currentMapId,Y=Q.maps[B],F=0,R=0;if(Y.widthTiles<q.width)F=Math.floor((q.width-Y.widthTiles)/2),q.x=0;if(Y.heightTiles<q.height)R=Math.floor((q.height-Y.heightTiles)/2),q.y=0;let C={};for(let g=0;g<q.height;g++)for(let h=0;h<q.width;h++){let m=Y.getTile(q.x+h,q.y+g),y="";if(!!m&&!!m.type)if(m.options.sign)y="#"+m.options.sign;else y=m.type.icon;if(y)C[[F+h,R+g].toString()]=[y]}let k=$1(Q,B);for(let g=0;g<k.length;g++){let h=k[g],m=F+h.x-q.x,y=R+h.y-q.y,d=[m,y].toString();if(C[d])C[d].push(h.type.icon);else C[d]=[h.type.icon]}let S=j0(),I=Q.entities[S],l=b0(Q,B);for(let g=0;g<l.length;g++){let h=l[g],m=F+h.x-q.x,y=R+h.y-q.y,d=[m,y].toString();if(C[d])C[d].push(h.type.icon);else C[d]=[h.type.icon]}_1.clear();for(let[g,h]of Object.entries(C)){let m=g.split(",");_1.draw(Number(m[0]),Number(m[1]),h)}if(!!I&&J0.showUI){let g="",h=i0(Q,S);if(h)g+=h.type.name+" ";let m=q1(Q,I),y=I.type.name+" "+I.energy+"/"+I.energyMax+" "+g+"Y:"+m.B.name+" X:"+m.A.name;if(h0.style.flexDirection="column-reverse",I.y-q.y>=G0.height-3)h0.style.flexDirection="column";let d=document.createElement("span");if(d.innerText=y,d.style.background="#000",h0.replaceChildren(d),I.energy/I.energyMax<=0.2)d.style.color="#000",d.style.background="#f00";else d.style.color="#74ee15",d.style.background="#000"}if(Q._menuOpen){let g=[];if(g.push("BotMos Menu"),g.push(""),I){g.push("Hull: "+I.type.name),g.push("Energy: "+I.energy+"/"+I.energyMax),g.push("Gold: "+I.gold),g.push("Matter: "+I.matter);let h=i0(Q,S);if(h)g.push("Tool: "+h.type.name);if(J0.debug)g.push("DEBUG Position: "+I.x+","+I.y),g.push("DEBUG Map: "+I.mapId)}for(let h=0;h<g.length;h++){let m=document.createElement("span");m.innerText=g[h],h0.appendChild(m)}}for(let g=0;g<v1.length;g++){let h=document.createElement("span");h.innerText=v1[g],h0.appendChild(h)}}var h6={x:0,y:0};async function x0(Q){let q=Q.entities[j0()],B=q?q:h6,Y=ZJ(B);eZ(Q,Y),h6=B}async function m6(Q){}function ZJ(Q){return{x:Math.min(Math.max(0,Q.x-Math.floor(G0.width/2)),S1.WIDTH-G0.width),y:Math.min(Math.max(0,Q.y-Math.floor(G0.height/2)),S1.HEIGHT-G0.height),width:G0.width,height:G0.height}}function JJ(){let Q={};for(let[q,B]of Object.entries(g6))if(q.startsWith("wall")&&(q.length===5||q.length===6))Q["#"+q.substring(4,5)]=B;else if(Object.hasOwn(M.tiles,q))Q[M.tiles[q].icon]=B;else if(Object.hasOwn(M.entities,q))Q[M.entities[q].icon]=B;else if(Object.hasOwn(M.items,q))Q[M.items[q].icon]=B;return Q}var D0=new H1;window.onload=function(){x0(D0.init())};window.onresize=function(){let Q=typeof window!=="undefined"?window.innerWidth:0,q=typeof window!=="undefined"?window.innerHeight:0;J0.cameraWidth=Math.floor(Q/J0.fontSize),J0.cameraHeight=Math.floor(q/J0.fontSize),G0.width=Math.floor(J0.cameraWidth*(1/J0.zoom)),G0.height=Math.floor(J0.cameraHeight*(1/J0.zoom)),m6(G0),x0(D0.state)};T6(function(Q){x0(D0.update(Q))});if(!window.BMActionLog)window.BMActionLog=function(){return D0.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(Q){x0(D0.play(Q))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){J0.debug=!J0.debug,x0(D0.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){J0.showUI=!J0.showUI,x0(D0.state)};if(J0.debug){if(!window.BMDebugState)window.BMDebugState=function(){return D0.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let Q=Object.keys(D0.state.maps).length,q=Object.keys(D0.state.entities).length,B=Object.keys(D0.state.items).length,Y=Object.keys(D0.state.tools).length;return`Maps: ${Q}, Entities: ${q}, Items: ${B}, Tools: ${Y}`}}document.body.focus();
