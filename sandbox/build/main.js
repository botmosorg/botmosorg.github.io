var RV=Object.create;var{defineProperty:oZ,getPrototypeOf:EV,getOwnPropertyNames:OV}=Object;var jV=Object.prototype.hasOwnProperty;var AZ=(Q,q,Y)=>{Y=Q!=null?RV(EV(Q)):{};const H=q||!Q||!Q.__esModule?oZ(Y,"default",{value:Q,enumerable:!0}):Y;for(let D of OV(Q))if(!jV.call(H,D))oZ(H,D,{get:()=>Q[D],enumerable:!0});return H};var CV=(Q,q)=>()=>(q||Q((q={exports:{}}).exports,q),q.exports);var XZ=CV(($Z,YJ)=>{var F0=function(Q){if(Q===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Q},Q0=function(Q,q){Q.prototype=Object.create(q.prototype),Q.prototype.constructor=Q,Q.__proto__=q};(function(Q,q){typeof $Z==="object"&&typeof YJ!=="undefined"?q($Z):typeof define==="function"&&define.amd?define(["exports"],q):q(Q.ROT={})})($Z,function(Q){var q=0.00000000023283064365386964,Y=function(){function X(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var G=X.prototype;return G.getSeed=function $(){return this._seed},G.setSeed=function $(K){return K=K<1?1/K:K,this._seed=K,this._s0=(K>>>0)*q,K=K*69069+1>>>0,this._s1=K*q,K=K*69069+1>>>0,this._s2=K*q,this._c=1,this},G.getUniform=function $(){var K=2091639*this._s0+this._c*q;return this._s0=this._s1,this._s1=this._s2,this._c=K|0,this._s2=K-this._c,this._s2},G.getUniformInt=function $(K,Z){var J=Math.max(K,Z),V=Math.min(K,Z);return Math.floor(this.getUniform()*(J-V+1))+V},G.getNormal=function $(K,Z){if(K===void 0)K=0;if(Z===void 0)Z=1;var J,V,U;do J=2*this.getUniform()-1,V=2*this.getUniform()-1,U=J*J+V*V;while(U>1||U==0);var z=J*Math.sqrt(-2*Math.log(U)/U);return K+z*Z},G.getPercentage=function $(){return 1+Math.floor(this.getUniform()*100)},G.getItem=function $(K){if(!K.length)return null;return K[Math.floor(this.getUniform()*K.length)]},G.shuffle=function $(K){var Z=[],J=K.slice();while(J.length){var V=J.indexOf(this.getItem(J));Z.push(J.splice(V,1)[0])}return Z},G.getWeightedValue=function $(K){var Z=0;for(var J in K)Z+=K[J];var V=this.getUniform()*Z,U,z=0;for(U in K)if(z+=K[U],V<z)return U;return U},G.getState=function $(){return[this._s0,this._s1,this._s2,this._c]},G.setState=function $(K){return this._s0=K[0],this._s1=K[1],this._s2=K[2],this._c=K[3],this},G.clone=function $(){var K=new X;return K.setState(this.getState())},X}(),H=new Y().setSeed(Date.now()),D=function(){function X(){}var G=X.prototype;return G.getContainer=function $(){return null},G.setOptions=function $(K){this._options=K},X}(),O=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._ctx=document.createElement("canvas").getContext("2d"),K}var $=G.prototype;return $.schedule=function K(Z){requestAnimationFrame(Z)},$.getContainer=function K(){return this._ctx.canvas},$.setOptions=function K(Z){X.prototype.setOptions.call(this,Z);var J=Z.fontStyle?Z.fontStyle+" ":"",V=J+" "+Z.fontSize+"px "+Z.fontFamily;this._ctx.font=V,this._updateSize(),this._ctx.font=V,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},$.clear=function K(){this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height)},$.eventToPosition=function K(Z,J){var V=this._ctx.canvas,U=V.getBoundingClientRect();if(Z-=U.left,J-=U.top,Z*=V.width/U.width,J*=V.height/U.height,Z<0||J<0||Z>=V.width||J>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,J)},G}(D);function A(X,G){return(X%G+G)%G}function b(X,G,$){if(G===void 0)G=0;if($===void 0)$=1;if(X<G)return G;if(X>$)return $;return X}function N(X){return X.charAt(0).toUpperCase()+X.substring(1)}function I(X){for(var G=arguments.length,$=new Array(G>1?G-1:0),K=1;K<G;K++)$[K-1]=arguments[K];var Z=I.map,J=function V(U,z,L,B){if(X.charAt(B-1)=="%")return U.substring(1);if(!$.length)return U;var P=$[0],w=z||L,M=w.split(","),W=M.shift()||"",R=Z[W.toLowerCase()];if(!R)return U;P=$.shift();var E=P[R].apply(P,M),f=W.charAt(0);if(f!=f.toLowerCase())E=N(E);return E};return X.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,J)}I.map={s:"toString"};var m=Object.freeze({mod:A,clamp:b,capitalize:N,format:I}),o=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._spacingX=0,K._spacingY=0,K._hexSize=0,K}var $=G.prototype;return $.draw=function K(Z,J){var V=Z[0],U=Z[1],z=Z[2],L=Z[3],B=Z[4],P=[(V+1)*this._spacingX,U*this._spacingY+this._hexSize];if(this._options.transpose)P.reverse();if(J)this._ctx.fillStyle=B,this._fill(P[0],P[1]);if(!z)return;this._ctx.fillStyle=L;var w=[].concat(z);for(var M=0;M<w.length;M++)this._ctx.fillText(w[M],P[0],Math.ceil(P[1]))},$.computeSize=function K(Z,J){if(this._options.transpose)Z+=J,J=Z-J,Z-=J;var V=Math.floor(Z/this._spacingX)-1,U=Math.floor((J-2*this._hexSize)/this._spacingY+1);return[V,U]},$.computeFontSize=function K(Z,J){if(this._options.transpose)Z+=J,J=Z-J,Z-=J;var V=2*Z/((this._options.width+1)*Math.sqrt(3))-1,U=J/(2+1.5*(this._options.height-1)),z=Math.min(V,U),L=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var B=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=L;var P=B/100;z=Math.floor(z)+1;var w=2*z/(this._options.spacing*(1+P/Math.sqrt(3)));return Math.ceil(w)-1},$._normalizedEventToPosition=function K(Z,J){var V;if(this._options.transpose)Z+=J,J=Z-J,Z-=J,V=this._ctx.canvas.width;else V=this._ctx.canvas.height;var U=V/this._options.height;if(J=Math.floor(J/U),A(J,2))Z-=this._spacingX,Z=1+2*Math.floor(Z/(2*this._spacingX));else Z=2*Math.floor(Z/(2*this._spacingX));return[Z,J]},$._fill=function K(Z,J){var V=this._hexSize,U=this._options.border,z=this._ctx;if(z.beginPath(),this._options.transpose)z.moveTo(Z-V+U,J),z.lineTo(Z-V/2+U,J+this._spacingX-U),z.lineTo(Z+V/2-U,J+this._spacingX-U),z.lineTo(Z+V-U,J),z.lineTo(Z+V/2-U,J-this._spacingX+U),z.lineTo(Z-V/2+U,J-this._spacingX+U),z.lineTo(Z-V+U,J);else z.moveTo(Z,J-V+U),z.lineTo(Z+this._spacingX-U,J-V/2+U),z.lineTo(Z+this._spacingX-U,J+V/2-U),z.lineTo(Z,J+V-U),z.lineTo(Z-this._spacingX+U,J+V/2-U),z.lineTo(Z-this._spacingX+U,J-V/2+U),z.lineTo(Z,J-V+U);z.fill()},$._updateSize=function K(){var Z=this._options,J=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(Z.spacing*(Z.fontSize+J/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var V,U;if(Z.transpose)V="height",U="width";else V="width",U="height";this._ctx.canvas[V]=Math.ceil((Z.width+1)*this._spacingX),this._ctx.canvas[U]=Math.ceil((Z.height-1)*this._spacingY+2*this._hexSize)},G}(O),h=function(){var X=function(G){Q0($,G);function $(){var Z=G.call(this)||this;return Z._spacingX=0,Z._spacingY=0,Z._canvasCache={},Z}var K=$.prototype;return K.setOptions=function Z(J){G.prototype.setOptions.call(this,J),this._canvasCache={}},K.draw=function Z(J,V){if($.cache)this._drawWithCache(J);else this._drawNoCache(J,V)},K._drawWithCache=function Z(J){var V=J[0],U=J[1],z=J[2],L=J[3],B=J[4],P=""+z+L+B,w;if(P in this._canvasCache)w=this._canvasCache[P];else{var M=this._options.border;w=document.createElement("canvas");var W=w.getContext("2d");if(w.width=this._spacingX,w.height=this._spacingY,W.fillStyle=B,W.fillRect(M,M,w.width-M,w.height-M),z){W.fillStyle=L,W.font=this._ctx.font,W.textAlign="center",W.textBaseline="middle";var R=[].concat(z);for(var E=0;E<R.length;E++)W.fillText(R[E],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[P]=w}this._ctx.drawImage(w,V*this._spacingX,U*this._spacingY)},K._drawNoCache=function Z(J,V){var U=J[0],z=J[1],L=J[2],B=J[3],P=J[4];if(V){var w=this._options.border;this._ctx.fillStyle=P,this._ctx.fillRect(U*this._spacingX+w,z*this._spacingY+w,this._spacingX-w,this._spacingY-w)}if(!L)return;this._ctx.fillStyle=B;var M=[].concat(L);for(var W=0;W<M.length;W++)this._ctx.fillText(M[W],(U+0.5)*this._spacingX,Math.ceil((z+0.5)*this._spacingY))},K.computeSize=function Z(J,V){var U=Math.floor(J/this._spacingX),z=Math.floor(V/this._spacingY);return[U,z]},K.computeFontSize=function Z(J,V){var U=Math.floor(J/this._options.width),z=Math.floor(V/this._options.height),L=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var B=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=L;var P=B/100,w=P*z/U;if(w>1)z=Math.floor(z/w);return Math.floor(z/this._options.spacing)},K._normalizedEventToPosition=function Z(J,V){return[Math.floor(J/this._spacingX),Math.floor(V/this._spacingY)]},K._updateSize=function Z(){var J=this._options,V=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(J.spacing*V),this._spacingY=Math.ceil(J.spacing*J.fontSize),J.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=J.width*this._spacingX,this._ctx.canvas.height=J.height*this._spacingY},$}(O);return X.cache=!1,X}(),s=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._colorCanvas=document.createElement("canvas"),K}var $=G.prototype;return $.draw=function K(Z,J){var V=Z[0],U=Z[1],z=Z[2],L=Z[3],B=Z[4],P=this._options.tileWidth,w=this._options.tileHeight;if(J)if(this._options.tileColorize)this._ctx.clearRect(V*P,U*w,P,w);else this._ctx.fillStyle=B,this._ctx.fillRect(V*P,U*w,P,w);if(!z)return;var M=[].concat(z),W=[].concat(L),R=[].concat(B);for(var E=0;E<M.length;E++){var f=this._options.tileMap[M[E]];if(!f)throw new Error("Char \""+M[E]+"\" not found in tileMap");if(this._options.tileColorize){var u=this._colorCanvas,x=u.getContext("2d");x.globalCompositeOperation="source-over",x.clearRect(0,0,P,w);var _=W[E],t=R[E];if(x.drawImage(this._options.tileSet,f[0],f[1],P,w,0,0,P,w),_!="transparent")x.fillStyle=_,x.globalCompositeOperation="source-atop",x.fillRect(0,0,P,w);if(t!="transparent")x.fillStyle=t,x.globalCompositeOperation="destination-over",x.fillRect(0,0,P,w);this._ctx.drawImage(u,V*P,U*w,P,w)}else this._ctx.drawImage(this._options.tileSet,f[0],f[1],P,w,V*P,U*w,P,w)}},$.computeSize=function K(Z,J){var V=Math.floor(Z/this._options.tileWidth),U=Math.floor(J/this._options.tileHeight);return[V,U]},$.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},$._normalizedEventToPosition=function K(Z,J){return[Math.floor(Z/this._options.tileWidth),Math.floor(J/this._options.tileHeight)]},$._updateSize=function K(){var Z=this._options;this._ctx.canvas.width=Z.width*Z.tileWidth,this._ctx.canvas.height=Z.height*Z.tileHeight,this._colorCanvas.width=Z.tileWidth,this._colorCanvas.height=Z.tileHeight},G}(O);function d(X){var G,$;if(X in j)G=j[X];else{if(X.charAt(0)=="#"){var K=X.match(/[0-9a-f]/gi)||[],Z=K.map(function(V){return parseInt(V,16)});if(Z.length==3)G=Z.map(function(V){return V*17});else{for(var J=0;J<3;J++)Z[J+1]+=16*Z[J],Z.splice(J,1);G=Z}}else if($=X.match(/rgb\(([0-9, ]+)\)/i))G=$[1].split(/\s*,\s*/).map(function(V){return parseInt(V)});else G=[0,0,0];j[X]=G}return G.slice()}function y(X){var G=X.slice();for(var $=arguments.length,K=new Array($>1?$-1:0),Z=1;Z<$;Z++)K[Z-1]=arguments[Z];for(var J=0;J<3;J++)for(var V=0;V<K.length;V++)G[J]+=K[V][J];return G}function c(X){for(var G=arguments.length,$=new Array(G>1?G-1:0),K=1;K<G;K++)$[K-1]=arguments[K];for(var Z=0;Z<3;Z++)for(var J=0;J<$.length;J++)X[Z]+=$[J][Z];return X}function U0(X){var G=X.slice();for(var $=arguments.length,K=new Array($>1?$-1:0),Z=1;Z<$;Z++)K[Z-1]=arguments[Z];for(var J=0;J<3;J++){for(var V=0;V<K.length;V++)G[J]*=K[V][J]/255;G[J]=Math.round(G[J])}return G}function $0(X){for(var G=arguments.length,$=new Array(G>1?G-1:0),K=1;K<G;K++)$[K-1]=arguments[K];for(var Z=0;Z<3;Z++){for(var J=0;J<$.length;J++)X[Z]*=$[J][Z]/255;X[Z]=Math.round(X[Z])}return X}function G0(X,G,$){if($===void 0)$=0.5;var K=X.slice();for(var Z=0;Z<3;Z++)K[Z]=Math.round(K[Z]+$*(G[Z]-X[Z]));return K}var L0=G0;function C(X,G,$){if($===void 0)$=0.5;var K=g(X),Z=g(G);for(var J=0;J<3;J++)K[J]+=$*(Z[J]-K[J]);return a(K)}var k=C;function T(X,G){if(!(G instanceof Array))G=Math.round(H.getNormal(0,G));var $=X.slice();for(var K=0;K<3;K++)$[K]+=G instanceof Array?Math.round(H.getNormal(0,G[K])):G;return $}function g(X){var G=X[0]/255,$=X[1]/255,K=X[2]/255,Z=Math.max(G,$,K),J=Math.min(G,$,K),V=0,U,z=(Z+J)/2;if(Z==J)U=0;else{var L=Z-J;switch(U=z>0.5?L/(2-Z-J):L/(Z+J),Z){case G:V=($-K)/L+($<K?6:0);break;case $:V=(K-G)/L+2;break;case K:V=(G-$)/L+4;break}V/=6}return[V,U,z]}function i(X,G,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return X+(G-X)*6*$;if($<0.5)return G;if($<0.6666666666666666)return X+(G-X)*(0.6666666666666666-$)*6;return X}function a(X){var G=X[2];if(X[1]==0)return G=Math.round(G*255),[G,G,G];else{var $=X[1],K=G<0.5?G*(1+$):G+$-G*$,Z=2*G-K,J=i(Z,K,X[0]+0.3333333333333333),V=i(Z,K,X[0]),U=i(Z,K,X[0]-0.3333333333333333);return[Math.round(J*255),Math.round(V*255),Math.round(U*255)]}}function S(X){var G=X.map(function($){return b($,0,255)});return"rgb("+G.join(",")+")"}function v(X){var G=X.map(function($){return b($,0,255).toString(16).padStart(2,"0")});return"#"+G.join("")}var j={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},n=Object.freeze({fromString:d,add:y,add_:c,multiply:U0,multiply_:$0,interpolate:G0,lerp:L0,interpolateHSL:C,lerpHSL:k,randomize:T,rgb2hsl:g,hsl2rgb:a,toRGB:S,toHex:v}),e=function(X){Q0(G,X);function G(){var K=X.call(this)||this;K._uniforms={};try{K._gl=K._initWebGL()}catch(Z){alert(Z.message)}return K}G.isSupported=function K(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var $=G.prototype;return $.schedule=function K(Z){requestAnimationFrame(Z)},$.getContainer=function K(){return this._gl.canvas},$.setOptions=function K(Z){var J=this;X.prototype.setOptions.call(this,Z),this._updateSize();var V=this._options.tileSet;if(V&&"complete"in V&&!V.complete)V.addEventListener("load",function(){return J._updateTexture(V)});else this._updateTexture(V)},$.draw=function K(Z,J){var V=this._gl,U=this._options,z=Z[0],L=Z[1],B=Z[2],P=Z[3],w=Z[4],M=V.canvas.height-(L+1)*U.tileHeight;if(V.scissor(z*U.tileWidth,M,U.tileWidth,U.tileHeight),J){if(U.tileColorize)V.clearColor(0,0,0,0);else V.clearColor.apply(V,m0(w));V.clear(V.COLOR_BUFFER_BIT)}if(!B)return;var W=[].concat(B),R=[].concat(w),E=[].concat(P);V.uniform2fv(this._uniforms.targetPosRel,[z,L]);for(var f=0;f<W.length;f++){var u=this._options.tileMap[W[f]];if(!u)throw new Error("Char \""+W[f]+"\" not found in tileMap");if(V.uniform1f(this._uniforms.colorize,U.tileColorize?1:0),V.uniform2fv(this._uniforms.tilesetPosAbs,u),U.tileColorize)V.uniform4fv(this._uniforms.tint,m0(E[f])),V.uniform4fv(this._uniforms.bg,m0(R[f]));V.drawArrays(V.TRIANGLE_STRIP,0,4)}},$.clear=function K(){var Z=this._gl;Z.clearColor.apply(Z,m0(this._options.bg)),Z.scissor(0,0,Z.canvas.width,Z.canvas.height),Z.clear(Z.COLOR_BUFFER_BIT)},$.computeSize=function K(Z,J){var V=Math.floor(Z/this._options.tileWidth),U=Math.floor(J/this._options.tileHeight);return[V,U]},$.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},$.eventToPosition=function K(Z,J){var V=this._gl.canvas,U=V.getBoundingClientRect();if(Z-=U.left,J-=U.top,Z*=V.width/U.width,J*=V.height/U.height,Z<0||J<0||Z>=V.width||J>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,J)},$._initWebGL=function K(){var Z=this,J=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=J;var V=j0(J,w0,X0);return J.useProgram(V),Y0(J),V0.forEach(function(U){return Z._uniforms[U]=J.getUniformLocation(V,U)}),this._program=V,J.enable(J.BLEND),J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA),J.enable(J.SCISSOR_TEST),J},$._normalizedEventToPosition=function K(Z,J){return[Math.floor(Z/this._options.tileWidth),Math.floor(J/this._options.tileHeight)]},$._updateSize=function K(){var Z=this._gl,J=this._options,V=[J.width*J.tileWidth,J.height*J.tileHeight];Z.canvas.width=V[0],Z.canvas.height=V[1],Z.viewport(0,0,V[0],V[1]),Z.uniform2fv(this._uniforms.tileSize,[J.tileWidth,J.tileHeight]),Z.uniform2fv(this._uniforms.targetSize,V)},$._updateTexture=function K(Z){p0(this._gl,Z)},G}(D),V0=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],w0="\n#version 300 es\n\nin vec2 tilePosRel;\nout vec2 tilesetPosPx;\n\nuniform vec2 tilesetPosAbs;\nuniform vec2 tileSize;\nuniform vec2 targetSize;\nuniform vec2 targetPosRel;\n\nvoid main() {\n\tvec2 targetPosPx = (targetPosRel + tilePosRel) * tileSize;\n\tvec2 targetPosNdc = ((targetPosPx / targetSize)-0.5)*2.0;\n\ttargetPosNdc.y *= -1.0;\n\n\tgl_Position = vec4(targetPosNdc, 0.0, 1.0);\n\ttilesetPosPx = tilesetPosAbs + tilePosRel * tileSize;\n}".trim(),X0="\n#version 300 es\nprecision highp float;\n\nin vec2 tilesetPosPx;\nout vec4 fragColor;\nuniform sampler2D image;\nuniform bool colorize;\nuniform vec4 bg;\nuniform vec4 tint;\n\nvoid main() {\n\tfragColor = vec4(0, 0, 0, 1);\n\n\tvec4 texel = texelFetch(image, ivec2(tilesetPosPx), 0);\n\n\tif (colorize) {\n\t\ttexel.rgb = tint.a * tint.rgb + (1.0-tint.a) * texel.rgb;\n\t\tfragColor.rgb = texel.a*texel.rgb + (1.0-texel.a)*bg.rgb;\n\t\tfragColor.a = texel.a + (1.0-texel.a)*bg.a;\n\t} else {\n\t\tfragColor = texel;\n\t}\n}".trim();function j0(X,G,$){var K=X.createShader(X.VERTEX_SHADER);if(X.shaderSource(K,G),X.compileShader(K),!X.getShaderParameter(K,X.COMPILE_STATUS))throw new Error(X.getShaderInfoLog(K)||"");var Z=X.createShader(X.FRAGMENT_SHADER);if(X.shaderSource(Z,$),X.compileShader(Z),!X.getShaderParameter(Z,X.COMPILE_STATUS))throw new Error(X.getShaderInfoLog(Z)||"");var J=X.createProgram();if(X.attachShader(J,K),X.attachShader(J,Z),X.linkProgram(J),!X.getProgramParameter(J,X.LINK_STATUS))throw new Error(X.getProgramInfoLog(J)||"");return J}function Y0(X){var G=new Float32Array([0,0,1,0,0,1,1,1]),$=X.createBuffer();X.bindBuffer(X.ARRAY_BUFFER,$),X.bufferData(X.ARRAY_BUFFER,G,X.STATIC_DRAW),X.enableVertexAttribArray(0),X.vertexAttribPointer(0,2,X.FLOAT,!1,0,0)}function p0(X,G){var $=X.createTexture();return X.bindTexture(X.TEXTURE_2D,$),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_MAG_FILTER,X.NEAREST),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_MIN_FILTER,X.NEAREST),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_WRAP_S,X.REPEAT),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_WRAP_T,X.REPEAT),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,0),X.texImage2D(X.TEXTURE_2D,0,X.RGBA,X.RGBA,X.UNSIGNED_BYTE,G),$}var N0={};function m0(X){if(!(X in N0)){var G;if(X=="transparent")G=[0,0,0,0];else if(X.indexOf("rgba")>-1){G=(X.match(/[\d.]+/g)||[]).map(Number);for(var $=0;$<3;$++)G[$]=G[$]/255}else G=d(X).map(function(K){return K/255}),G.push(1);N0[X]=G}return N0[X]}function kJ(X){return"\x1B[0;48;5;"+HZ(X)+"m\x1B[2J"}function uJ(X,G){return"\x1B[0;38;5;"+HZ(X)+";48;5;"+HZ(G)+"m"}function TJ(X,G){return"\x1B["+(G+1)+";"+(X+1)+"H"}function HZ(X){var G=256,$=6,K=$/G,Z=d(X),J=Math.floor(Z[0]*K),V=Math.floor(Z[1]*K),U=Math.floor(Z[2]*K);return J*36+V*6+U*1+16}var xZ=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._offset=[0,0],K._cursor=[-1,-1],K._lastColor="",K}var $=G.prototype;return $.schedule=function K(Z){setTimeout(Z,16.666666666666668)},$.setOptions=function K(Z){X.prototype.setOptions.call(this,Z);var J=[Z.width,Z.height],V=this.computeSize();this._offset=V.map(function(U,z){return Math.floor((U-J[z])/2)})},$.clear=function K(){process.stdout.write(kJ(this._options.bg))},$.draw=function K(Z,J){var V=Z[0],U=Z[1],z=Z[2],L=Z[3],B=Z[4],P=this._offset[0]+V,w=this._offset[1]+U,M=this.computeSize();if(P<0||P>=M[0])return;if(w<0||w>=M[1])return;if(P!==this._cursor[0]||w!==this._cursor[1])process.stdout.write(TJ(P,w)),this._cursor[0]=P,this._cursor[1]=w;if(J){if(!z)z=" "}if(!z)return;var W=uJ(L,B);if(W!==this._lastColor)process.stdout.write(W),this._lastColor=W;if(z!="\t"){var R=[].concat(z);process.stdout.write(R[0])}if(this._cursor[0]++,this._cursor[0]>=M[0])this._cursor[0]=0,this._cursor[1]++},$.computeFontSize=function K(){throw new Error("Terminal backend has no notion of font size")},$.eventToPosition=function K(Z,J){return[Z,J]},$.computeSize=function K(){return[process.stdout.columns,process.stdout.rows]},G}(D),gJ=/%([bc]){([^}]*)}/g,f0=0,b0=1,PZ=2,FZ=3;function hJ(X,G){var $={width:0,height:1},K=wZ(X,G),Z=0;for(var J=0;J<K.length;J++){var V=K[J];switch(V.type){case f0:Z+=V.value.length;break;case b0:$.height++,$.width=Math.max($.width,Z),Z=0;break}}return $.width=Math.max($.width,Z),$}function wZ(X,G){var $=[],K=0;X.replace(gJ,function(J,V,U,z){var L=X.substring(K,z);if(L.length)$.push({type:f0,value:L});return $.push({type:V=="c"?PZ:FZ,value:U.trim()}),K=z+J.length,""});var Z=X.substring(K);if(Z.length)$.push({type:f0,value:Z});return xJ($,G)}function xJ(X,G){if(!G)G=Infinity;var $=0,K=0,Z=-1;while($<X.length){var J=X[$];if(J.type==b0)K=0,Z=-1;if(J.type!=f0){$++;continue}while(K==0&&J.value.charAt(0)==" ")J.value=J.value.substring(1);var V=J.value.indexOf("\n");if(V!=-1){J.value=o0(X,$,V,!0);var U=J.value.split("");while(U.length&&U[U.length-1]==" ")U.pop();J.value=U.join("")}if(!J.value.length){X.splice($,1);continue}if(K+J.value.length>G){var z=-1;while(!0){var L=J.value.indexOf(" ",z+1);if(L==-1)break;if(K+L>G)break;z=L}if(z!=-1)J.value=o0(X,$,z,!0);else if(Z!=-1){var B=X[Z],P=B.value.lastIndexOf(" ");B.value=o0(X,Z,P,!0),$=Z}else J.value=o0(X,$,G-K,!1)}else if(K+=J.value.length,J.value.indexOf(" ")!=-1)Z=$;$++}X.push({type:b0});var w=null;for(var M=0;M<X.length;M++){var W=X[M];switch(W.type){case f0:w=W;break;case b0:if(w){var R=w.value.split("");while(R.length&&R[R.length-1]==" ")R.pop();w.value=R.join("")}w=null;break}}return X.pop(),X}function o0(X,G,$,K){var Z={type:b0},J={type:f0,value:X[G].value.substring($+(K?1:0))};return X.splice(G+1,0,Z,J),X[G].value.substring(0,$)}var mJ=Object.freeze({TYPE_TEXT:f0,TYPE_NEWLINE:b0,TYPE_FG:PZ,TYPE_BG:FZ,measure:hJ,tokenize:wZ}),DZ=80,WZ=25,B0={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},_J={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},yJ={hex:o,rect:h,tile:s,"tile-gl":e,term:xZ},pJ={width:DZ,height:WZ,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},cJ=function(){var X=function(){function G(K){if(K===void 0)K={};this._data={},this._dirty=!1,this._options={},K=Object.assign({},pJ,K),this.setOptions(K),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var $=G.prototype;return $.DEBUG=function K(Z,J,V){var U=[this._options.bg,this._options.fg];this.draw(Z,J,null,null,U[V%U.length])},$.clear=function K(){this._data={},this._dirty=!0},$.setOptions=function K(Z){if(Object.assign(this._options,Z),Z.width||Z.height||Z.fontSize||Z.fontFamily||Z.spacing||Z.layout){if(Z.layout){var J=yJ[Z.layout];this._backend=new J}this._backend.setOptions(this._options),this._dirty=!0}return this},$.getOptions=function K(){return this._options},$.getContainer=function K(){return this._backend.getContainer()},$.computeSize=function K(Z,J){return this._backend.computeSize(Z,J)},$.computeFontSize=function K(Z,J){return this._backend.computeFontSize(Z,J)},$.computeTileSize=function K(Z,J){var V=Math.floor(Z/this._options.width),U=Math.floor(J/this._options.height);return[V,U]},$.eventToPosition=function K(Z){var J,V;if("touches"in Z)J=Z.touches[0].clientX,V=Z.touches[0].clientY;else J=Z.clientX,V=Z.clientY;return this._backend.eventToPosition(J,V)},$.draw=function K(Z,J,V,U,z){if(!U)U=this._options.fg;if(!z)z=this._options.bg;var L=Z+","+J;if(this._data[L]=[Z,J,V,U,z],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[L]=!0},$.drawOver=function K(Z,J,V,U,z){var L=Z+","+J,B=this._data[L];if(B)B[2]=V||B[2],B[3]=U||B[3],B[4]=z||B[4];else this.draw(Z,J,V,U,z)},$.drawText=function K(Z,J,V,U){var z=null,L=null,B=Z,P=J,w=1;if(!U)U=this._options.width-Z;var M=wZ(V,U);while(M.length){var W=M.shift();switch(W.type){case f0:var R=!1,E=!1,f=!1,u=!1;for(var x=0;x<W.value.length;x++){var _=W.value.charCodeAt(x),t=W.value.charAt(x);if(this._options.layout==="term"){var r=_>>8,q0=r===17||r>=46&&r<=159||r>=172&&r<=215||_>=43360&&_<=43391;if(q0){this.draw(B+0,P,t,z,L),this.draw(B+1,P,"\t",z,L),B+=2;continue}}if(f=_>65280&&_<65377||_>65500&&_<65512||_>65518,R=t.charCodeAt(0)==32||t.charCodeAt(0)==12288,u&&!f&&!R)B++;if(f&&!E)B++;this.draw(B++,P,t,z,L),E=R,u=f}break;case PZ:z=W.value||null;break;case FZ:L=W.value||null;break;case b0:B=Z,P++,w++;break}}return w},$._tick=function K(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var Z in this._data)this._draw(Z,!1)}else for(var J in this._dirty)this._draw(J,!0);this._dirty=!1},$._draw=function K(Z,J){var V=this._data[Z];if(V[4]!=this._options.bg)J=!0;this._backend.draw(V,J)},G}();return X.Rect=h,X.Hex=o,X.Tile=s,X.TileGL=e,X.Term=xZ,X}(),dJ=function(){function X($){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,$),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var K=0;K<this._options.order;K++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var G=X.prototype;return G.clear=function $(){this._data={},this._priorValues={}},G.generate=function $(){var K=[this._sample(this._prefix)];while(K[K.length-1]!=this._boundary)K.push(this._sample(K));return this._join(K.slice(0,-1))},G.observe=function $(K){var Z=this._split(K);for(var J=0;J<Z.length;J++)this._priorValues[Z[J]]=this._options.prior;Z=this._prefix.concat(Z).concat(this._suffix);for(var V=this._options.order;V<Z.length;V++){var U=Z.slice(V-this._options.order,V),z=Z[V];for(var L=0;L<U.length;L++){var B=U.slice(L);this._observeEvent(B,z)}}},G.getStats=function $(){var K=[],Z=Object.keys(this._priorValues).length;Z--,K.push("distinct samples: "+Z);var J=Object.keys(this._data).length,V=0;for(var U in this._data)V+=Object.keys(this._data[U]).length;return K.push("dictionary size (contexts): "+J),K.push("dictionary size (events): "+V),K.join(", ")},G._split=function $(K){return K.split(this._options.words?/\s+/:"")},G._join=function $(K){return K.join(this._options.words?" ":"")},G._observeEvent=function $(K,Z){var J=this._join(K);if(!(J in this._data))this._data[J]={};var V=this._data[J];if(!(Z in V))V[Z]=0;V[Z]++},G._sample=function $(K){K=this._backoff(K);var Z=this._join(K),J=this._data[Z],V={};if(this._options.prior){for(var U in this._priorValues)V[U]=this._priorValues[U];for(var z in J)V[z]+=J[z]}else V=J;return H.getWeightedValue(V)},G._backoff=function $(K){if(K.length>this._options.order)K=K.slice(-this._options.order);else if(K.length<this._options.order)K=this._prefix.slice(0,this._options.order-K.length).concat(K);while(!(this._join(K)in this._data)&&K.length>0)K=K.slice(1);return K},X}(),mZ=function(){function X(){this.heap=[],this.timestamp=0}var G=X.prototype;return G.lessThan=function $(K,Z){return K.key==Z.key?K.timestamp<Z.timestamp:K.key<Z.key},G.shift=function $(K){this.heap=this.heap.map(function(Z){var{key:J,value:V,timestamp:U}=Z;return{key:J+K,value:V,timestamp:U}})},G.len=function $(){return this.heap.length},G.push=function $(K,Z){this.timestamp+=1;var J=this.len();this.heap.push({value:K,timestamp:this.timestamp,key:Z}),this.updateUp(J)},G.pop=function $(){if(this.len()==0)throw new Error("no element to pop");var K=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return K},G.find=function $(K){for(var Z=0;Z<this.len();Z++)if(K==this.heap[Z].value)return this.heap[Z];return null},G.remove=function $(K){var Z=null;for(var J=0;J<this.len();J++)if(K==this.heap[J].value)Z=J;if(Z===null)return!1;if(this.len()>1){var V=this.heap.pop();if(V.value!=K)this.heap[Z]=V,this.updateDown(Z);return!0}else this.heap.pop();return!0},G.parentNode=function $(K){return Math.floor((K-1)/2)},G.leftChildNode=function $(K){return 2*K+1},G.rightChildNode=function $(K){return 2*K+2},G.existNode=function $(K){return K>=0&&K<this.heap.length},G.swap=function $(K,Z){var J=this.heap[K];this.heap[K]=this.heap[Z],this.heap[Z]=J},G.minNode=function $(K){var Z=K.filter(this.existNode.bind(this)),J=Z[0];for(var z=Z,V=Array.isArray(z),U=0,z=V?z:z[Symbol.iterator]();;){var L;if(V){if(U>=z.length)break;L=z[U++]}else{if(U=z.next(),U.done)break;L=U.value}var B=L;if(this.lessThan(this.heap[B],this.heap[J]))J=B}return J},G.updateUp=function $(K){if(K==0)return;var Z=this.parentNode(K);if(this.existNode(Z)&&this.lessThan(this.heap[K],this.heap[Z]))this.swap(K,Z),this.updateUp(Z)},G.updateDown=function $(K){var Z=this.leftChildNode(K),J=this.rightChildNode(K);if(!this.existNode(Z))return;var V=this.minNode([K,Z,J]);if(V!=K)this.swap(K,V),this.updateDown(V)},G.debugPrint=function $(){console.log(this.heap)},X}(),_Z=function(){function X(){this._time=0,this._events=new mZ}var G=X.prototype;return G.getTime=function $(){return this._time},G.clear=function $(){return this._events=new mZ,this},G.add=function $(K,Z){this._events.push(K,Z)},G.get=function $(){if(!this._events.len())return null;var K=this._events.pop(),Z=K.key,J=K.value;if(Z>0)this._time+=Z,this._events.shift(-Z);return J},G.getEventTime=function $(K){var Z=this._events.find(K);if(Z){var J=Z.key;return J}return},G.remove=function $(K){return this._events.remove(K)},X}(),MZ=function(){function X(){this._queue=new _Z,this._repeat=[],this._current=null}var G=X.prototype;return G.getTime=function $(){return this._queue.getTime()},G.add=function $(K,Z){if(Z)this._repeat.push(K);return this},G.getTimeOf=function $(K){return this._queue.getEventTime(K)},G.clear=function $(){return this._queue.clear(),this._repeat=[],this._current=null,this},G.remove=function $(K){var Z=this._queue.remove(K),J=this._repeat.indexOf(K);if(J!=-1)this._repeat.splice(J,1);if(this._current==K)this._current=null;return Z},G.next=function $(){return this._current=this._queue.get(),this._current},X}(),lJ=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.add=function K(Z,J){return this._queue.add(Z,0),X.prototype.add.call(this,Z,J)},$.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return X.prototype.next.call(this)},G}(MZ),nJ=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.add=function K(Z,J,V){return this._queue.add(Z,V!==void 0?V:1/Z.getSpeed()),X.prototype.add.call(this,Z,J)},$.next=function K(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return X.prototype.next.call(this)},G}(MZ),rJ=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._defaultDuration=1,K._duration=K._defaultDuration,K}var $=G.prototype;return $.add=function K(Z,J,V){return this._queue.add(Z,V||this._defaultDuration),X.prototype.add.call(this,Z,J)},$.clear=function K(){return this._duration=this._defaultDuration,X.prototype.clear.call(this)},$.remove=function K(Z){if(Z==this._current)this._duration=this._defaultDuration;return X.prototype.remove.call(this,Z)},$.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return X.prototype.next.call(this)},$.setDuration=function K(Z){if(this._current)this._duration=Z;return this},G}(MZ),sJ={Simple:lJ,Speed:nJ,Action:rJ},RZ=function(){function X($,K){if(K===void 0)K={};this._lightPasses=$,this._options=Object.assign({topology:8},K)}var G=X.prototype;return G._getCircle=function $(K,Z,J){var V=[],U,z,L;switch(this._options.topology){case 4:z=1,L=[0,1],U=[B0[8][7],B0[8][1],B0[8][3],B0[8][5]];break;case 6:U=B0[6],z=1,L=[-1,1];break;case 8:U=B0[4],z=2,L=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var B=K+L[0]*J,P=Z+L[1]*J;for(var w=0;w<U.length;w++)for(var M=0;M<J*z;M++)V.push([B,P]),B+=U[w][0],P+=U[w][1];return V},X}(),oJ=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.compute=function K(Z,J,V,U){if(U(Z,J,0,1),!this._lightPasses(Z,J))return;var z=[],L,B,P,w,M;for(var W=1;W<=V;W++){var R=this._getCircle(Z,J,W),E=360/R.length;for(var f=0;f<R.length;f++){if(P=R[f][0],w=R[f][1],L=E*(f-0.5),B=L+E,M=!this._lightPasses(P,w),this._visibleCoords(Math.floor(L),Math.ceil(B),M,z))U(P,w,W,1);if(z.length==2&&z[0]==0&&z[1]==360)return}}},$._visibleCoords=function K(Z,J,V,U){if(Z<0){var z=this._visibleCoords(0,J,V,U),L=this._visibleCoords(360+Z,360,V,U);return z||L}var B=0;while(B<U.length&&U[B]<Z)B++;if(B==U.length){if(V)U.push(Z,J);return!0}var P=0;if(B%2){while(B<U.length&&U[B]<J)B++,P++;if(P==0)return!1;if(V)if(P%2)U.splice(B-P,P,J);else U.splice(B-P,P);return!0}else{while(B<U.length&&U[B]<J)B++,P++;if(Z==U[B-P]&&P==1)return!1;if(V)if(P%2)U.splice(B-P,P,Z);else U.splice(B-P,P,Z,J);return!0}},G}(RZ),aJ=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.compute=function K(Z,J,V,U){if(U(Z,J,0,1),!this._lightPasses(Z,J))return;var z=[],L,B,P,w,M,W;for(var R=1;R<=V;R++){var E=this._getCircle(Z,J,R),f=E.length;for(var u=0;u<f;u++){if(L=E[u][0],B=E[u][1],w=[u?2*u-1:2*f-1,2*f],M=[2*u+1,2*f],P=!this._lightPasses(L,B),W=this._checkVisibility(w,M,P,z),W)U(L,B,R,W);if(z.length==2&&z[0][0]==0&&z[1][0]==z[1][1])return}}},$._checkVisibility=function K(Z,J,V,U){if(Z[0]>J[0]){var z=this._checkVisibility(Z,[Z[1],Z[1]],V,U),L=this._checkVisibility([0,1],J,V,U);return(z+L)/2}var B=0,P=!1;while(B<U.length){var w=U[B],M=w[0]*Z[1]-Z[0]*w[1];if(M>=0){if(M==0&&!(B%2))P=!0;break}B++}var W=U.length,R=!1;while(W--){var E=U[W],f=J[0]*E[1]-E[0]*J[1];if(f>=0){if(f==0&&W%2)R=!0;break}}var u=!0;if(B==W&&(P||R))u=!1;else if(P&&R&&B+1==W&&W%2)u=!1;else if(B>W&&B%2)u=!1;if(!u)return 0;var x,_=W-B+1;if(_%2)if(B%2){var t=U[B];if(x=(J[0]*t[1]-t[0]*J[1])/(t[1]*J[1]),V)U.splice(B,_,J)}else{var r=U[W];if(x=(r[0]*Z[1]-Z[0]*r[1])/(Z[1]*r[1]),V)U.splice(B,_,Z)}else if(B%2){var q0=U[B],H0=U[W];if(x=(H0[0]*q0[1]-q0[0]*H0[1])/(q0[1]*H0[1]),V)U.splice(B,_)}else{if(V)U.splice(B,_,Z,J);return 1}var C0=(J[0]*Z[1]-Z[0]*J[1])/(Z[1]*J[1]);return x/C0},G}(RZ),I0=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],iJ=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.compute=function K(Z,J,V,U){U(Z,J,0,1);for(var z=0;z<I0.length;z++)this._renderOctant(Z,J,I0[z],V,U)},$.compute180=function K(Z,J,V,U,z){z(Z,J,0,1);var L=(U-1+8)%8,B=(U-2+8)%8,P=(U+1+8)%8;this._renderOctant(Z,J,I0[B],V,z),this._renderOctant(Z,J,I0[L],V,z),this._renderOctant(Z,J,I0[U],V,z),this._renderOctant(Z,J,I0[P],V,z)},$.compute90=function K(Z,J,V,U,z){z(Z,J,0,1);var L=(U-1+8)%8;this._renderOctant(Z,J,I0[U],V,z),this._renderOctant(Z,J,I0[L],V,z)},$._renderOctant=function K(Z,J,V,U,z){this._castVisibility(Z,J,1,1,0,U+1,V[0],V[1],V[2],V[3],z)},$._castVisibility=function K(Z,J,V,U,z,L,B,P,w,M,W){if(U<z)return;for(var R=V;R<=L;R++){var E=-R-1,f=-R,u=!1,x=0;while(E<=0){E+=1;var _=Z+E*B+f*P,t=J+E*w+f*M,r=(E-0.5)/(f+0.5),q0=(E+0.5)/(f-0.5);if(q0>U)continue;if(r<z)break;if(E*E+f*f<L*L)W(_,t,R,1);if(!u){if(!this._lightPasses(_,t)&&R<L)u=!0,this._castVisibility(Z,J,R+1,U,r,L,B,P,w,M,W),x=q0}else{if(!this._lightPasses(_,t)){x=q0;continue}u=!1,U=x}}if(u)break}},G}(RZ),eJ={DiscreteShadowcasting:oJ,PreciseShadowcasting:aJ,RecursiveShadowcasting:iJ},k0=function(){function X($,K){if($===void 0)$=DZ;if(K===void 0)K=WZ;this._width=$,this._height=K}var G=X.prototype;return G._fillMap=function $(K){var Z=[];for(var J=0;J<this._width;J++){Z.push([]);for(var V=0;V<this._height;V++)Z[J].push(K)}return Z},X}(),tJ=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.create=function K(Z){var J=this._width-1,V=this._height-1;for(var U=0;U<=J;U++)for(var z=0;z<=V;z++){var L=U&&z&&U<J&&z<V;Z(U,z,L?0:1)}return this},G}(k0),yZ=function(X){Q0(G,X);function G(K,Z){var J=X.call(this,K,Z)||this;return J._rooms=[],J._corridors=[],J}var $=G.prototype;return $.getRooms=function K(){return this._rooms},$.getCorridors=function K(){return this._corridors},G}(k0),pZ=function X(){},a0=function(X){Q0(G,X);function G(K,Z,J,V,U,z){var L=X.call(this)||this;if(L._x1=K,L._y1=Z,L._x2=J,L._y2=V,L._doors={},U!==void 0&&z!==void 0)L.addDoor(U,z);return L}G.createRandomAt=function K(Z,J,V,U,z){var L=z.roomWidth[0],B=z.roomWidth[1],P=H.getUniformInt(L,B);L=z.roomHeight[0],B=z.roomHeight[1];var w=H.getUniformInt(L,B);if(V==1){var M=J-Math.floor(H.getUniform()*w);return new this(Z+1,M,Z+P,M+w-1,Z,J)}if(V==-1){var W=J-Math.floor(H.getUniform()*w);return new this(Z-P,W,Z-1,W+w-1,Z,J)}if(U==1){var R=Z-Math.floor(H.getUniform()*P);return new this(R,J+1,R+P-1,J+w,Z,J)}if(U==-1){var E=Z-Math.floor(H.getUniform()*P);return new this(E,J-w,E+P-1,J-1,Z,J)}throw new Error("dx or dy must be 1 or -1")},G.createRandomCenter=function K(Z,J,V){var U=V.roomWidth[0],z=V.roomWidth[1],L=H.getUniformInt(U,z);U=V.roomHeight[0],z=V.roomHeight[1];var B=H.getUniformInt(U,z),P=Z-Math.floor(H.getUniform()*L),w=J-Math.floor(H.getUniform()*B),M=P+L-1,W=w+B-1;return new this(P,w,M,W)},G.createRandom=function K(Z,J,V){var U=V.roomWidth[0],z=V.roomWidth[1],L=H.getUniformInt(U,z);U=V.roomHeight[0],z=V.roomHeight[1];var B=H.getUniformInt(U,z),P=Z-L-1,w=J-B-1,M=1+Math.floor(H.getUniform()*P),W=1+Math.floor(H.getUniform()*w),R=M+L-1,E=W+B-1;return new this(M,W,R,E)};var $=G.prototype;return $.addDoor=function K(Z,J){return this._doors[Z+","+J]=1,this},$.getDoors=function K(Z){for(var J in this._doors){var V=J.split(",");Z(parseInt(V[0]),parseInt(V[1]))}return this},$.clearDoors=function K(){return this._doors={},this},$.addDoors=function K(Z){var J=this._x1-1,V=this._x2+1,U=this._y1-1,z=this._y2+1;for(var L=J;L<=V;L++)for(var B=U;B<=z;B++){if(L!=J&&L!=V&&B!=U&&B!=z)continue;if(Z(L,B))continue;this.addDoor(L,B)}return this},$.debug=function K(){console.log("room",this._x1,this._y1,this._x2,this._y2)},$.isValid=function K(Z,J){var V=this._x1-1,U=this._x2+1,z=this._y1-1,L=this._y2+1;for(var B=V;B<=U;B++)for(var P=z;P<=L;P++)if(B==V||B==U||P==z||P==L){if(!Z(B,P))return!1}else if(!J(B,P))return!1;return!0},$.create=function K(Z){var J=this._x1-1,V=this._x2+1,U=this._y1-1,z=this._y2+1,L=0;for(var B=J;B<=V;B++)for(var P=U;P<=z;P++){if(B+","+P in this._doors)L=2;else if(B==J||B==V||P==U||P==z)L=1;else L=0;Z(B,P,L)}},$.getCenter=function K(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},$.getLeft=function K(){return this._x1},$.getRight=function K(){return this._x2},$.getTop=function K(){return this._y1},$.getBottom=function K(){return this._y2},G}(pZ),EZ=function(X){Q0(G,X);function G(K,Z,J,V){var U=X.call(this)||this;return U._startX=K,U._startY=Z,U._endX=J,U._endY=V,U._endsWithAWall=!0,U}G.createRandomAt=function K(Z,J,V,U,z){var L=z.corridorLength[0],B=z.corridorLength[1],P=H.getUniformInt(L,B);return new this(Z,J,Z+V*P,J+U*P)};var $=G.prototype;return $.debug=function K(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},$.isValid=function K(Z,J){var V=this._startX,U=this._startY,z=this._endX-V,L=this._endY-U,B=1+Math.max(Math.abs(z),Math.abs(L));if(z)z=z/Math.abs(z);if(L)L=L/Math.abs(L);var P=L,w=-z,M=!0;for(var W=0;W<B;W++){var R=V+W*z,E=U+W*L;if(!J(R,E))M=!1;if(!Z(R+P,E+w))M=!1;if(!Z(R-P,E-w))M=!1;if(!M){B=W,this._endX=R-z,this._endY=E-L;break}}if(B==0)return!1;if(B==1&&Z(this._endX+z,this._endY+L))return!1;var f=!Z(this._endX+z+P,this._endY+L+w),u=!Z(this._endX+z-P,this._endY+L-w);if(this._endsWithAWall=Z(this._endX+z,this._endY+L),(f||u)&&this._endsWithAWall)return!1;return!0},$.create=function K(Z){var J=this._startX,V=this._startY,U=this._endX-J,z=this._endY-V,L=1+Math.max(Math.abs(U),Math.abs(z));if(U)U=U/Math.abs(U);if(z)z=z/Math.abs(z);for(var B=0;B<L;B++){var P=J+B*U,w=V+B*z;Z(P,w,0)}return!0},$.createPriorityWalls=function K(Z){if(!this._endsWithAWall)return;var J=this._startX,V=this._startY,U=this._endX-J,z=this._endY-V;if(U)U=U/Math.abs(U);if(z)z=z/Math.abs(z);var L=z,B=-U;Z(this._endX+U,this._endY+z),Z(this._endX+L,this._endY+B),Z(this._endX-L,this._endY-B)},G}(pZ),ZV=function(X){Q0(G,X);function G(K,Z,J){var V=X.call(this,K,Z)||this;return V._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(V._options,J),V._map=[],V._dug=0,V._roomAttempts=20,V._corridorAttempts=20,V._connected=[],V._unconnected=[],V._digCallback=V._digCallback.bind(F0(F0(V))),V._canBeDugCallback=V._canBeDugCallback.bind(F0(F0(V))),V._isWallCallback=V._isWallCallback.bind(F0(F0(V))),V}var $=G.prototype;return $.create=function K(Z){var J=Date.now();while(!0){var V=Date.now();if(V-J>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(Z)for(var U=0;U<this._width;U++)for(var z=0;z<this._height;z++)Z(U,z,this._map[U][z]);return this},$._generateRooms=function K(){var Z=this._width-2,J=this._height-2,V;do if(V=this._generateRoom(),this._dug/(Z*J)>this._options.roomDugPercentage)break;while(V)},$._generateRoom=function K(){var Z=0;while(Z<this._roomAttempts){Z++;var J=a0.createRandom(this._width,this._height,this._options);if(!J.isValid(this._isWallCallback,this._canBeDugCallback))continue;return J.create(this._digCallback),this._rooms.push(J),J}return null},$._generateCorridors=function K(){var Z=0;while(Z<this._corridorAttempts){Z++,this._corridors=[],this._map=this._fillMap(1);for(var J=0;J<this._rooms.length;J++){var V=this._rooms[J];V.clearDoors(),V.create(this._digCallback)}if(this._unconnected=H.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var U=H.getItem(this._connected);if(!U)break;var z=this._closestRoom(this._unconnected,U);if(!z)break;var L=this._closestRoom(this._connected,z);if(!L)break;var B=this._connectRooms(z,L);if(!B)break;if(!this._unconnected.length)return!0}}return!1},$._closestRoom=function K(Z,J){var V=Infinity,U=J.getCenter(),z=null;for(var L=0;L<Z.length;L++){var B=Z[L],P=B.getCenter(),w=P[0]-U[0],M=P[1]-U[1],W=w*w+M*M;if(W<V)V=W,z=B}return z},$._connectRooms=function K(Z,J){var V=Z.getCenter(),U=J.getCenter(),z=U[0]-V[0],L=U[1]-V[1],B,P,w,M,W,R,E;if(Math.abs(z)<Math.abs(L))w=L>0?2:0,M=(w+2)%4,W=J.getLeft(),R=J.getRight(),E=0;else w=z>0?1:3,M=(w+2)%4,W=J.getTop(),R=J.getBottom(),E=1;if(B=this._placeInWall(Z,w),!B)return!1;if(B[E]>=W&&B[E]<=R){P=B.slice();var f=0;switch(M){case 0:f=J.getTop()-1;break;case 1:f=J.getRight()+1;break;case 2:f=J.getBottom()+1;break;case 3:f=J.getLeft()-1;break}P[(E+1)%2]=f,this._digLine([B,P])}else if(B[E]<W-1||B[E]>R+1){var u=B[E]-U[E],x=0;switch(M){case 0:case 1:x=u<0?3:1;break;case 2:case 3:x=u<0?1:3;break}if(M=(M+x)%4,P=this._placeInWall(J,M),!P)return!1;var _=[0,0];_[E]=B[E];var t=(E+1)%2;_[t]=P[t],this._digLine([B,_,P])}else{var r=(E+1)%2;if(P=this._placeInWall(J,M),!P)return!1;var q0=Math.round((P[r]+B[r])/2),H0=[0,0],C0=[0,0];H0[E]=B[E],H0[r]=q0,C0[E]=P[E],C0[r]=q0,this._digLine([B,H0,C0,P])}if(Z.addDoor(B[0],B[1]),J.addDoor(P[0],P[1]),E=this._unconnected.indexOf(Z),E!=-1)this._unconnected.splice(E,1),this._connected.push(Z);if(E=this._unconnected.indexOf(J),E!=-1)this._unconnected.splice(E,1),this._connected.push(J);return!0},$._placeInWall=function K(Z,J){var V=[0,0],U=[0,0],z=0;switch(J){case 0:U=[1,0],V=[Z.getLeft(),Z.getTop()-1],z=Z.getRight()-Z.getLeft()+1;break;case 1:U=[0,1],V=[Z.getRight()+1,Z.getTop()],z=Z.getBottom()-Z.getTop()+1;break;case 2:U=[1,0],V=[Z.getLeft(),Z.getBottom()+1],z=Z.getRight()-Z.getLeft()+1;break;case 3:U=[0,1],V=[Z.getLeft()-1,Z.getTop()],z=Z.getBottom()-Z.getTop()+1;break}var L=[],B=-2;for(var P=0;P<z;P++){var w=V[0]+P*U[0],M=V[1]+P*U[1];L.push(null);var W=this._map[w][M]==1;if(W){if(B!=P-1)L[P]=[w,M]}else if(B=P,P)L[P-1]=null}for(var R=L.length-1;R>=0;R--)if(!L[R])L.splice(R,1);return L.length?H.getItem(L):null},$._digLine=function K(Z){for(var J=1;J<Z.length;J++){var V=Z[J-1],U=Z[J],z=new EZ(V[0],V[1],U[0],U[1]);z.create(this._digCallback),this._corridors.push(z)}},$._digCallback=function K(Z,J,V){if(this._map[Z][J]=V,V==0)this._dug++},$._isWallCallback=function K(Z,J){if(Z<0||J<0||Z>=this._width||J>=this._height)return!1;return this._map[Z][J]==1},$._canBeDugCallback=function K(Z,J){if(Z<1||J<1||Z+1>=this._width||J+1>=this._height)return!1;return this._map[Z][J]==1},G}(yZ),JV=function(X){Q0(G,X);function G(K,Z,J){var V;if(J===void 0)J={};return V=X.call(this,K,Z)||this,V._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},V.setOptions(J),V._dirs=B0[V._options.topology],V._map=V._fillMap(0),V}var $=G.prototype;return $.randomize=function K(Z){for(var J=0;J<this._width;J++)for(var V=0;V<this._height;V++)this._map[J][V]=H.getUniform()<Z?1:0;return this},$.setOptions=function K(Z){Object.assign(this._options,Z)},$.set=function K(Z,J,V){this._map[Z][J]=V},$.create=function K(Z){var J=this._fillMap(0),V=this._options.born,U=this._options.survive;for(var z=0;z<this._height;z++){var L=1,B=0;if(this._options.topology==6)L=2,B=z%2;for(var P=B;P<this._width;P+=L){var w=this._map[P][z],M=this._getNeighbors(P,z);if(w&&U.indexOf(M)!=-1)J[P][z]=1;else if(!w&&V.indexOf(M)!=-1)J[P][z]=1}}this._map=J,Z&&this._serviceCallback(Z)},$._serviceCallback=function K(Z){for(var J=0;J<this._height;J++){var V=1,U=0;if(this._options.topology==6)V=2,U=J%2;for(var z=U;z<this._width;z+=V)Z(z,J,this._map[z][J])}},$._getNeighbors=function K(Z,J){var V=0;for(var U=0;U<this._dirs.length;U++){var z=this._dirs[U],L=Z+z[0],B=J+z[1];if(L<0||L>=this._width||B<0||B>=this._height)continue;V+=this._map[L][B]==1?1:0}return V},$.connect=function K(Z,J,V){if(!J)J=0;var U=[],z={},L=1,B=[0,0];if(this._options.topology==6)L=2,B=[0,1];for(var P=0;P<this._height;P++)for(var w=B[P%2];w<this._width;w+=L)if(this._freeSpace(w,P,J)){var M=[w,P];z[this._pointKey(M)]=M,U.push([w,P])}var W=U[H.getUniformInt(0,U.length-1)],R=this._pointKey(W),E={};E[R]=W,delete z[R],this._findConnected(E,z,[W],!1,J);while(Object.keys(z).length>0){var f=this._getFromTo(E,z),u=f[0],x=f[1],_={};_[this._pointKey(u)]=u,this._findConnected(_,z,[u],!0,J);var t=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;t.call(this,x,u,E,z,J,V);for(var r in _){var q0=_[r];this._map[q0[0]][q0[1]]=J,E[r]=q0,delete z[r]}}Z&&this._serviceCallback(Z)},$._getFromTo=function K(Z,J){var V=[0,0],U=[0,0],z,L=Object.keys(Z),B=Object.keys(J);for(var P=0;P<5;P++){if(L.length<B.length){var w=L;U=Z[w[H.getUniformInt(0,w.length-1)]],V=this._getClosest(U,J)}else{var M=B;V=J[M[H.getUniformInt(0,M.length-1)]],U=this._getClosest(V,Z)}if(z=(V[0]-U[0])*(V[0]-U[0])+(V[1]-U[1])*(V[1]-U[1]),z<64)break}return[V,U]},$._getClosest=function K(Z,J){var V=null,U=null;for(var z in J){var L=J[z],B=(L[0]-Z[0])*(L[0]-Z[0])+(L[1]-Z[1])*(L[1]-Z[1]);if(U==null||B<U)U=B,V=L}return V},$._findConnected=function K(Z,J,V,U,z){while(V.length>0){var L=V.splice(0,1)[0],B=void 0;if(this._options.topology==6)B=[[L[0]+2,L[1]],[L[0]+1,L[1]-1],[L[0]-1,L[1]-1],[L[0]-2,L[1]],[L[0]-1,L[1]+1],[L[0]+1,L[1]+1]];else B=[[L[0]+1,L[1]],[L[0]-1,L[1]],[L[0],L[1]+1],[L[0],L[1]-1]];for(var P=0;P<B.length;P++){var w=this._pointKey(B[P]);if(Z[w]==null&&this._freeSpace(B[P][0],B[P][1],z)){if(Z[w]=B[P],!U)delete J[w];V.push(B[P])}}}},$._tunnelToConnected=function K(Z,J,V,U,z,L){var B,P;if(J[0]<Z[0])B=J,P=Z;else B=Z,P=J;for(var w=B[0];w<=P[0];w++){this._map[w][B[1]]=z;var M=[w,B[1]],W=this._pointKey(M);V[W]=M,delete U[W]}if(L&&B[0]<P[0])L(B,[P[0],B[1]]);var R=P[0];if(J[1]<Z[1])B=J,P=Z;else B=Z,P=J;for(var E=B[1];E<P[1];E++){this._map[R][E]=z;var f=[R,E],u=this._pointKey(f);V[u]=f,delete U[u]}if(L&&B[1]<P[1])L([P[0],B[1]],[P[0],P[1]])},$._tunnelToConnected6=function K(Z,J,V,U,z,L){var B,P;if(J[0]<Z[0])B=J,P=Z;else B=Z,P=J;var w=B[0],M=B[1];while(!(w==P[0]&&M==P[1])){var W=2;if(M<P[1])M++,W=1;else if(M>P[1])M--,W=1;if(w<P[0])w+=W;else if(w>P[0])w-=W;else if(P[1]%2)w-=W;else w+=W;this._map[w][M]=z;var R=[w,M],E=this._pointKey(R);V[E]=R,delete U[E]}if(L)L(J,Z)},$._freeSpace=function K(Z,J,V){return Z>=0&&Z<this._width&&J>=0&&J<this._height&&this._map[Z][J]==V},$._pointKey=function K(Z){return Z[0]+"."+Z[1]},G}(k0),VV={room:a0,corridor:EZ},QV=function(X){Q0(G,X);function G(K,Z,J){var V;if(J===void 0)J={};return V=X.call(this,K,Z)||this,V._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},J),V._features={room:4,corridor:4},V._map=[],V._featureAttempts=20,V._walls={},V._dug=0,V._digCallback=V._digCallback.bind(F0(F0(V))),V._canBeDugCallback=V._canBeDugCallback.bind(F0(F0(V))),V._isWallCallback=V._isWallCallback.bind(F0(F0(V))),V._priorityWallCallback=V._priorityWallCallback.bind(F0(F0(V))),V}var $=G.prototype;return $.create=function K(Z){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var J=(this._width-2)*(this._height-2);this._firstRoom();var V=Date.now(),U;do{U=0;var z=Date.now();if(z-V>this._options.timeLimit)break;var L=this._findWall();if(!L)break;var B=L.split(","),P=parseInt(B[0]),w=parseInt(B[1]),M=this._getDiggingDirection(P,w);if(!M)continue;var W=0;do if(W++,this._tryFeature(P,w,M[0],M[1])){this._removeSurroundingWalls(P,w),this._removeSurroundingWalls(P-M[0],w-M[1]);break}while(W<this._featureAttempts);for(var R in this._walls)if(this._walls[R]>1)U++}while(this._dug/J<this._options.dugPercentage||U);if(this._addDoors(),Z)for(var E=0;E<this._width;E++)for(var f=0;f<this._height;f++)Z(E,f,this._map[E][f]);return this._walls={},this._map=[],this},$._digCallback=function K(Z,J,V){if(V==0||V==2)this._map[Z][J]=0,this._dug++;else this._walls[Z+","+J]=1},$._isWallCallback=function K(Z,J){if(Z<0||J<0||Z>=this._width||J>=this._height)return!1;return this._map[Z][J]==1},$._canBeDugCallback=function K(Z,J){if(Z<1||J<1||Z+1>=this._width||J+1>=this._height)return!1;return this._map[Z][J]==1},$._priorityWallCallback=function K(Z,J){this._walls[Z+","+J]=2},$._firstRoom=function K(){var Z=Math.floor(this._width/2),J=Math.floor(this._height/2),V=a0.createRandomCenter(Z,J,this._options);this._rooms.push(V),V.create(this._digCallback)},$._findWall=function K(){var Z=[],J=[];for(var V in this._walls){var U=this._walls[V];if(U==2)J.push(V);else Z.push(V)}var z=J.length?J:Z;if(!z.length)return null;var L=H.getItem(z.sort());return delete this._walls[L],L},$._tryFeature=function K(Z,J,V,U){var z=H.getWeightedValue(this._features),L=VV[z],B=L.createRandomAt(Z,J,V,U,this._options);if(!B.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(B.create(this._digCallback),B instanceof a0)this._rooms.push(B);if(B instanceof EZ)B.createPriorityWalls(this._priorityWallCallback),this._corridors.push(B);return!0},$._removeSurroundingWalls=function K(Z,J){var V=B0[4];for(var U=0;U<V.length;U++){var z=V[U],L=Z+z[0],B=J+z[1];delete this._walls[L+","+B],L=Z+2*z[0],B=J+2*z[1],delete this._walls[L+","+B]}},$._getDiggingDirection=function K(Z,J){if(Z<=0||J<=0||Z>=this._width-1||J>=this._height-1)return null;var V=null,U=B0[4];for(var z=0;z<U.length;z++){var L=U[z],B=Z+L[0],P=J+L[1];if(!this._map[B][P]){if(V)return null;V=L}}if(!V)return null;return[-V[0],-V[1]]},$._addDoors=function K(){var Z=this._map;function J(z,L){return Z[z][L]==1}for(var V=0;V<this._rooms.length;V++){var U=this._rooms[V];U.clearDoors(),U.addDoors(J)}},G}(yZ);function cZ(X,G,$){$[G[X+1]]=$[X],G[$[X]]=G[X+1],$[X]=X+1,G[X+1]=X}function dZ(X,G,$){$[G[X]]=$[X],G[$[X]]=G[X],$[X]=X,G[X]=X}var KV=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.create=function K(Z){var J=this._fillMap(1),V=Math.ceil((this._width-2)/2),U=0.375,z=[],L=[];for(var B=0;B<V;B++)z.push(B),L.push(B);z.push(V-1);var P;for(P=1;P+3<this._height;P+=2)for(var w=0;w<V;w++){var M=2*w+1,W=P;if(J[M][W]=0,w!=z[w+1]&&H.getUniform()>U)cZ(w,z,L),J[M+1][W]=0;if(w!=z[w]&&H.getUniform()>U)dZ(w,z,L);else J[M][W+1]=0}for(var R=0;R<V;R++){var E=2*R+1,f=P;if(J[E][f]=0,R!=z[R+1]&&(R==z[R]||H.getUniform()>U))cZ(R,z,L),J[E+1][f]=0;dZ(R,z,L)}for(var u=0;u<this._width;u++)for(var x=0;x<this._height;x++)Z(u,x,J[u][x]);return this},G}(k0),UV=function(X){Q0(G,X);function G(){var K=X.apply(this,arguments)||this;return K._stack=[],K._map=[],K}var $=G.prototype;return $.create=function K(Z){var J=this._width,V=this._height;this._map=[];for(var U=0;U<J;U++){this._map.push([]);for(var z=0;z<V;z++){var L=U==0||z==0||U+1==J||z+1==V;this._map[U].push(L?1:0)}}this._stack=[[1,1,J-2,V-2]],this._process();for(var B=0;B<J;B++)for(var P=0;P<V;P++)Z(B,P,this._map[B][P]);return this._map=[],this},$._process=function K(){while(this._stack.length){var Z=this._stack.shift();this._partitionRoom(Z)}},$._partitionRoom=function K(Z){var J=[],V=[];for(var U=Z[0]+1;U<Z[2];U++){var z=this._map[U][Z[1]-1],L=this._map[U][Z[3]+1];if(z&&L&&!(U%2))J.push(U)}for(var B=Z[1]+1;B<Z[3];B++){var P=this._map[Z[0]-1][B],w=this._map[Z[2]+1][B];if(P&&w&&!(B%2))V.push(B)}if(!J.length||!V.length)return;var M=H.getItem(J),W=H.getItem(V);this._map[M][W]=1;var R=[],E=[];R.push(E);for(var f=Z[0];f<M;f++)if(this._map[f][W]=1,f%2)E.push([f,W]);E=[],R.push(E);for(var u=M+1;u<=Z[2];u++)if(this._map[u][W]=1,u%2)E.push([u,W]);E=[],R.push(E);for(var x=Z[1];x<W;x++)if(this._map[M][x]=1,x%2)E.push([M,x]);E=[],R.push(E);for(var _=W+1;_<=Z[3];_++)if(this._map[M][_]=1,_%2)E.push([M,_]);var t=H.getItem(R);for(var r=0;r<R.length;r++){var q0=R[r];if(q0==t)continue;var H0=H.getItem(q0);this._map[H0[0]][H0[1]]=0}this._stack.push([Z[0],Z[1],M-1,W-1]),this._stack.push([M+1,Z[1],Z[2],W-1]),this._stack.push([Z[0],W+1,M-1,Z[3]]),this._stack.push([M+1,W+1,Z[2],Z[3]])},G}(k0),qV=function(X){Q0(G,X);function G(K,Z,J){var V;if(J===void 0)J=0;return V=X.call(this,K,Z)||this,V._regularity=J,V._map=[],V}var $=G.prototype;return $.create=function K(Z){var J=this._width,V=this._height,U=this._fillMap(1);J-=J%2?1:2,V-=V%2?1:2;var z=0,L=0,B=0,P=0,w=0,M=!1,W=[[0,0],[0,0],[0,0],[0,0]];do{if(z=1+2*Math.floor(H.getUniform()*(J-1)/2),L=1+2*Math.floor(H.getUniform()*(V-1)/2),!w)U[z][L]=0;if(!U[z][L]){this._randomize(W);do{if(Math.floor(H.getUniform()*(this._regularity+1))==0)this._randomize(W);M=!0;for(var R=0;R<4;R++)if(B=z+W[R][0]*2,P=L+W[R][1]*2,this._isFree(U,B,P,J,V)){U[B][P]=0,U[z+W[R][0]][L+W[R][1]]=0,z=B,L=P,M=!1,w++;break}}while(!M)}}while(w+1<J*V/4);for(var E=0;E<this._width;E++)for(var f=0;f<this._height;f++)Z(E,f,U[E][f]);return this._map=[],this},$._randomize=function K(Z){for(var J=0;J<4;J++)Z[J][0]=0,Z[J][1]=0;switch(Math.floor(H.getUniform()*4)){case 0:Z[0][0]=-1,Z[1][0]=1,Z[2][1]=-1,Z[3][1]=1;break;case 1:Z[3][0]=-1,Z[2][0]=1,Z[1][1]=-1,Z[0][1]=1;break;case 2:Z[2][0]=-1,Z[3][0]=1,Z[0][1]=-1,Z[1][1]=1;break;case 3:Z[1][0]=-1,Z[0][0]=1,Z[3][1]=-1,Z[2][1]=1;break}},$._isFree=function K(Z,J,V,U,z){if(J<1||V<1||J>=U||V>=z)return!1;return Z[J][V]},G}(k0),zV=function(X){Q0(G,X);function G(K,Z,J){var V=X.call(this,K,Z)||this;if(V.map=[],V.rooms=[],V.connectedCells=[],J=Object.assign({cellWidth:3,cellHeight:3},J),!J.hasOwnProperty("roomWidth"))J.roomWidth=V._calculateRoomSize(V._width,J.cellWidth);if(!J.hasOwnProperty("roomHeight"))J.roomHeight=V._calculateRoomSize(V._height,J.cellHeight);return V._options=J,V}var $=G.prototype;return $.create=function K(Z){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),Z)for(var J=0;J<this._width;J++)for(var V=0;V<this._height;V++)Z(J,V,this.map[J][V]);return this},$._calculateRoomSize=function K(Z,J){var V=Math.floor(Z/J*0.8),U=Math.floor(Z/J*0.25);if(U<2)U=2;if(V<2)V=2;return[U,V]},$._initRooms=function K(){for(var Z=0;Z<this._options.cellWidth;Z++){this.rooms.push([]);for(var J=0;J<this._options.cellHeight;J++)this.rooms[Z].push({x:0,y:0,width:0,height:0,connections:[],cellx:Z,celly:J})}},$._connectRooms=function K(){var Z=H.getUniformInt(0,this._options.cellWidth-1),J=H.getUniformInt(0,this._options.cellHeight-1),V,U,z,L=!1,B,P,w;do{w=[0,2,4,6],w=H.shuffle(w);do{if(L=!1,V=w.pop(),U=Z+B0[8][V][0],z=J+B0[8][V][1],U<0||U>=this._options.cellWidth)continue;if(z<0||z>=this._options.cellHeight)continue;if(B=this.rooms[Z][J],B.connections.length>0){if(B.connections[0][0]==U&&B.connections[0][1]==z)break}if(P=this.rooms[U][z],P.connections.length==0)P.connections.push([Z,J]),this.connectedCells.push([U,z]),Z=U,J=z,L=!0}while(w.length>0&&L==!1)}while(w.length>0)},$._connectUnconnectedRooms=function K(){var Z=this._options.cellWidth,J=this._options.cellHeight;this.connectedCells=H.shuffle(this.connectedCells);var V,U,z;for(var L=0;L<this._options.cellWidth;L++)for(var B=0;B<this._options.cellHeight;B++)if(V=this.rooms[L][B],V.connections.length==0){var P=[0,2,4,6];P=H.shuffle(P),z=!1;do{var w=P.pop(),M=L+B0[8][w][0],W=B+B0[8][w][1];if(M<0||M>=Z||W<0||W>=J)continue;if(U=this.rooms[M][W],z=!0,U.connections.length==0)break;for(var R=0;R<U.connections.length;R++)if(U.connections[R][0]==L&&U.connections[R][1]==B){z=!1;break}if(z)break}while(P.length);if(z)V.connections.push([U.cellx,U.celly]);else console.log("-- Unable to connect room.")}},$._createRandomRoomConnections=function K(){},$._createRooms=function K(){var Z=this._width,J=this._height,V=this._options.cellWidth,U=this._options.cellHeight,z=Math.floor(this._width/V),L=Math.floor(this._height/U),B,P,w=this._options.roomWidth,M=this._options.roomHeight,W,R,E;for(var f=0;f<V;f++)for(var u=0;u<U;u++){if(W=z*f,R=L*u,W==0)W=1;if(R==0)R=1;if(B=H.getUniformInt(w[0],w[1]),P=H.getUniformInt(M[0],M[1]),u>0){E=this.rooms[f][u-1];while(R-(E.y+E.height)<3)R++}if(f>0){E=this.rooms[f-1][u];while(W-(E.x+E.width)<3)W++}var x=Math.round(H.getUniformInt(0,z-B)/2),_=Math.round(H.getUniformInt(0,L-P)/2);while(W+x+B>=Z)if(x)x--;else B--;while(R+_+P>=J)if(_)_--;else P--;W=W+x,R=R+_,this.rooms[f][u].x=W,this.rooms[f][u].y=R,this.rooms[f][u].width=B,this.rooms[f][u].height=P;for(var t=W;t<W+B;t++)for(var r=R;r<R+P;r++)this.map[t][r]=0}},$._getWallPosition=function K(Z,J){var V,U,z;if(J==1||J==3){if(V=H.getUniformInt(Z.x+1,Z.x+Z.width-2),J==1)U=Z.y-2,z=U+1;else U=Z.y+Z.height+1,z=U-1;this.map[V][z]=0}else{if(U=H.getUniformInt(Z.y+1,Z.y+Z.height-2),J==2)V=Z.x+Z.width+1,z=V-1;else V=Z.x-2,z=V+1;this.map[z][U]=0}return[V,U]},$._drawCorridor=function K(Z,J){var V=J[0]-Z[0],U=J[1]-Z[1],z=Z[0],L=Z[1],B,P,w,M,W=[],R=Math.abs(V),E=Math.abs(U),f=H.getUniform(),u=f,x=1-f;if(P=V>0?2:6,w=U>0?4:0,R<E)B=Math.ceil(E*u),W.push([w,B]),W.push([P,R]),B=Math.floor(E*x),W.push([w,B]);else B=Math.ceil(R*u),W.push([P,B]),W.push([w,E]),B=Math.floor(R*x),W.push([P,B]);this.map[z][L]=0;while(W.length>0){M=W.pop();while(M[1]>0)z+=B0[8][M[0]][0],L+=B0[8][M[0]][1],this.map[z][L]=0,M[1]=M[1]-1}},$._createCorridors=function K(){var Z=this._options.cellWidth,J=this._options.cellHeight,V,U,z,L,B;for(var P=0;P<Z;P++)for(var w=0;w<J;w++){V=this.rooms[P][w];for(var M=0;M<V.connections.length;M++){if(U=V.connections[M],z=this.rooms[U[0]][U[1]],z.cellx>V.cellx)L=2,B=4;else if(z.cellx<V.cellx)L=4,B=2;else if(z.celly>V.celly)L=3,B=1;else L=1,B=3;this._drawCorridor(this._getWallPosition(V,L),this._getWallPosition(z,B))}}},G}(k0),$V={Arena:tJ,Uniform:ZV,Cellular:JV,Digger:QV,EllerMaze:KV,DividedMaze:UV,IceyMaze:qV,Rogue:zV},XV=function X(){},GV=0.5*(Math.sqrt(3)-1),c0=(3-Math.sqrt(3))/6,BV=function(X){Q0(G,X);function G(K){var Z;if(K===void 0)K=256;Z=X.call(this)||this,Z._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var J=[];for(var V=0;V<K;V++)J.push(V);J=H.shuffle(J),Z._perms=[],Z._indexes=[];for(var U=0;U<2*K;U++)Z._perms.push(J[U%K]),Z._indexes.push(Z._perms[U]%Z._gradients.length);return Z}var $=G.prototype;return $.get=function K(Z,J){var V=this._perms,U=this._indexes,z=V.length/2,L=0,B=0,P=0,w,M=(Z+J)*GV,W=Math.floor(Z+M),R=Math.floor(J+M),E=(W+R)*c0,f=W-E,u=R-E,x=Z-f,_=J-u,t,r;if(x>_)t=1,r=0;else t=0,r=1;var q0=x-t+c0,H0=_-r+c0,C0=x-1+2*c0,OZ=_-1+2*c0,jZ=A(W,z),CZ=A(R,z),d0=0.5-x*x-_*_;if(d0>=0){d0*=d0,w=U[jZ+V[CZ]];var nZ=this._gradients[w];L=d0*d0*(nZ[0]*x+nZ[1]*_)}var l0=0.5-q0*q0-H0*H0;if(l0>=0){l0*=l0,w=U[jZ+t+V[CZ+r]];var rZ=this._gradients[w];B=l0*l0*(rZ[0]*q0+rZ[1]*H0)}var n0=0.5-C0*C0-OZ*OZ;if(n0>=0){n0*=n0,w=U[jZ+1+V[CZ+1]];var sZ=this._gradients[w];P=n0*n0*(sZ[0]*C0+sZ[1]*OZ)}return 70*(L+B+P)},G}(XV),LV={Simplex:BV},lZ=function(){function X($,K,Z,J){if(J===void 0)J={};if(this._toX=$,this._toY=K,this._passableCallback=Z,this._options=Object.assign({topology:8},J),this._dirs=B0[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var G=X.prototype;return G._getNeighbors=function $(K,Z){var J=[];for(var V=0;V<this._dirs.length;V++){var U=this._dirs[V],z=K+U[0],L=Z+U[1];if(!this._passableCallback(z,L))continue;J.push([z,L])}return J},X}(),YV=function(X){Q0(G,X);function G(K,Z,J,V){var U=X.call(this,K,Z,J,V)||this;return U._computed={},U._todo=[],U._add(K,Z,null),U}var $=G.prototype;return $.compute=function K(Z,J,V){var U=Z+","+J;if(!(U in this._computed))this._compute(Z,J);if(!(U in this._computed))return;var z=this._computed[U];while(z)V(z.x,z.y),z=z.prev},$._compute=function K(Z,J){while(this._todo.length){var V=this._todo.shift();if(V.x==Z&&V.y==J)return;var U=this._getNeighbors(V.x,V.y);for(var z=0;z<U.length;z++){var L=U[z],B=L[0],P=L[1],w=B+","+P;if(w in this._computed)continue;this._add(B,P,V)}}},$._add=function K(Z,J,V){var U={x:Z,y:J,prev:V};this._computed[Z+","+J]=U,this._todo.push(U)},G}(lZ),HV=function(X){Q0(G,X);function G(K,Z,J,V){var U;if(V===void 0)V={};return U=X.call(this,K,Z,J,V)||this,U._todo=[],U._done={},U}var $=G.prototype;return $.compute=function K(Z,J,V){this._todo=[],this._done={},this._fromX=Z,this._fromY=J,this._add(this._toX,this._toY,null);while(this._todo.length){var U=this._todo.shift(),z=U.x+","+U.y;if(z in this._done)continue;if(this._done[z]=U,U.x==Z&&U.y==J)break;var L=this._getNeighbors(U.x,U.y);for(var B=0;B<L.length;B++){var P=L[B],w=P[0],M=P[1],W=w+","+M;if(W in this._done)continue;this._add(w,M,U)}}var R=this._done[Z+","+J];if(!R)return;while(R)V(R.x,R.y),R=R.prev},$._add=function K(Z,J,V){var U=this._distance(Z,J),z={x:Z,y:J,prev:V,g:V?V.g+1:0,h:U},L=z.g+z.h;for(var B=0;B<this._todo.length;B++){var P=this._todo[B],w=P.g+P.h;if(L<w||L==w&&U<P.h){this._todo.splice(B,0,z);return}}this._todo.push(z)},$._distance=function K(Z,J){switch(this._options.topology){case 4:return Math.abs(Z-this._fromX)+Math.abs(J-this._fromY);case 6:var V=Math.abs(Z-this._fromX),U=Math.abs(J-this._fromY);return U+Math.max(0,(V-U)/2);case 8:return Math.max(Math.abs(Z-this._fromX),Math.abs(J-this._fromY))}},G}(lZ),PV={Dijkstra:YV,AStar:HV},FV=function(){function X($){this._scheduler=$,this._lock=1}var G=X.prototype;return G.start=function $(){return this.unlock()},G.lock=function $(){return this._lock++,this},G.unlock=function $(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var K=this._scheduler.next();if(!K)return this.lock();var Z=K.act();if(Z&&Z.then)this.lock(),Z.then(this.unlock.bind(this))}return this},X}(),wV=function(){function X($,K){if(K===void 0)K={};this._reflectivityCallback=$,this._options={},K=Object.assign({passes:1,emissionThreshold:100,range:10},K),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(K)}var G=X.prototype;return G.setOptions=function $(K){if(Object.assign(this._options,K),K&&K.range)this.reset();return this},G.setFOV=function $(K){return this._fov=K,this._fovCache={},this},G.setLight=function $(K,Z,J){var V=K+","+Z;if(J)this._lights[V]=typeof J=="string"?d(J):J;else delete this._lights[V];return this},G.clearLights=function $(){this._lights={}},G.reset=function $(){return this._reflectivityCache={},this._fovCache={},this},G.compute=function $(K){var Z={},J={},V={};for(var U in this._lights){var z=this._lights[U];J[U]=[0,0,0],c(J[U],z)}for(var L=0;L<this._options.passes;L++){if(this._emitLight(J,V,Z),L+1==this._options.passes)continue;J=this._computeEmitters(V,Z)}for(var B in V){var P=B.split(","),w=parseInt(P[0]),M=parseInt(P[1]);K(w,M,V[B])}return this},G._emitLight=function $(K,Z,J){for(var V in K){var U=V.split(","),z=parseInt(U[0]),L=parseInt(U[1]);this._emitLightFromCell(z,L,K[V],Z),J[V]=1}return this},G._computeEmitters=function $(K,Z){var J={};for(var V in K){if(V in Z)continue;var U=K[V],z=void 0;if(V in this._reflectivityCache)z=this._reflectivityCache[V];else{var L=V.split(","),B=parseInt(L[0]),P=parseInt(L[1]);z=this._reflectivityCallback(B,P),this._reflectivityCache[V]=z}if(z==0)continue;var w=[0,0,0],M=0;for(var W=0;W<3;W++){var R=Math.round(U[W]*z);w[W]=R,M+=R}if(M>this._options.emissionThreshold)J[V]=w}return J},G._emitLightFromCell=function $(K,Z,J,V){var U=K+","+Z,z;if(U in this._fovCache)z=this._fovCache[U];else z=this._updateFOV(K,Z);for(var L in z){var B=z[L],P=void 0;if(L in V)P=V[L];else P=[0,0,0],V[L]=P;for(var w=0;w<3;w++)P[w]+=Math.round(J[w]*B)}return this},G._updateFOV=function $(K,Z){var J=K+","+Z,V={};this._fovCache[J]=V;var U=this._options.range;function z(L,B,P,w){var M=L+","+B,W=w*(1-P/U);if(W==0)return;V[M]=W}return this._fov.compute(K,Z,U,z.bind(this)),V},X}(),DV=m,WV=n,MV=mJ;Q.Util=DV,Q.Color=WV,Q.Text=MV,Q.RNG=H,Q.Display=cJ,Q.StringGenerator=dJ,Q.EventQueue=_Z,Q.Scheduler=sJ,Q.FOV=eJ,Q.Map=$V,Q.Noise=LV,Q.Path=PV,Q.Engine=FV,Q.Lighting=wV,Q.DEFAULT_WIDTH=DZ,Q.DEFAULT_HEIGHT=WZ,Q.DIRS=B0,Q.KEYS=_J,Object.defineProperty(Q,"__esModule",{value:!0})})});var AV=typeof window!=="undefined"?window.innerWidth:0,vV=typeof window!=="undefined"?window.innerHeight:0,Z0={cameraWidth:Math.floor(AV/18),cameraHeight:Math.floor(vV/18),debug:!0,fontSize:18,highlightEnemy:!0,showGrid:!0,showUI:!0,zoom:1},vZ={WIDTH:1024,HEIGHT:1024},P0={width:Math.floor(Z0.cameraWidth*(1/Z0.zoom)),height:Math.floor(Z0.cameraHeight*(1/Z0.zoom)),bg:"transparent",fontSize:Math.floor(Z0.fontSize*Z0.zoom),forceSquareRatio:!0};function aZ(Q){if(Z0.debug)console.log(Q)}var NZ=[];class i0{name;description;energyDelta;constructor(Q,q,Y=0){this.name=Q,this.description=q,this.energyDelta=Y}}class e0{name;description;constructor(Q,q){this.name=Q,this.description=q}}class R0{key;description;constructor(Q,q){this.key=Q,this.description=q}}class iZ{name;description;constructor(Q,q){this.name=Q,this.description=q}}class _0{name;description;color;constructor(Q,q,Y){this.name=Q,this.description=q,this.color=Y}}class M0{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(Q,q,Y,H="cyberyellow",D=0,O=0,A=0,b=0,N=0,I=[]){this.name=Q,this.description=q,this.icon=Y,this.color=H,this.energyDelta=D,this.matter=O,this.gold=A,this.damage=b,this.energyCost=N,this.effects=I}}class E0{name;description;icon;color;energyMax;unlockCondition;constructor(Q,q,Y,H=100){this.name=Q,this.description=q,this.icon=Y,this.energyMax=H,this.color="white",this.unlockCondition=null}}class J0{name;description;icon;fg;bg;energyDelta;constructor(Q,q,Y=null,H="white",D="black",O=0){this.name=Q,this.description=q,this.icon=Y,this.fg=H,this.bg=D,this.energyDelta=O}}var F={actions:{Enter:new i0("Enter","Enter a portal or plant atmosphere"),Launch:new i0("Launch","Launch into space",-10),Wait:new i0("Wait","Wait one turn in place")},ais:{aggrorange:new e0("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new e0("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new e0("guardian","Idles at a position and only fights back if engaged")},colors:{black:"#000",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",brown:"brown",gray:"#777",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new R0("N","Move/interact/combat north"),E:new R0("E","Move/interact/combat east"),S:new R0("S","Move/interact/combat south"),W:new R0("W","Move/interact/combat west"),A:new R0("A","Primary action, confirm"),B:new R0("B","Take a break, cancel"),"1":new R0("1","Secondary action, first quick slot"),"2":new R0("2","Tertiary action, second quick slot"),M:new R0("M","Menu")},effects:{WallCrusher:new iZ("Wall Crusher","Tears down weak walls")},entities:{movableboulder:new E0("movableboulder","A movable rock","o",2),movablebox:new E0("movablebox","A movable box","x",2),Spirit:new E0("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new E0("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new E0("WorkBot","Basic factory worker","B"),Cleaner:new E0("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new E0("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Valkyrie:new E0("Valkyrie","Airbourne war logistics","V",160),Pioneer:new E0("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200)},factions:{Equipment:new _0("Equipment","For boxes etc.","gray"),Spirits:new _0("Spirits","Default player faction","white"),Pyrates:new _0("Pyrates","Default enemy faction","cybermagenta"),Gaia:new _0("Gaia","For rocks etc.","brown"),Guardians:new _0("Guardians","Bot station guardians","cybercyan")},items:{battery:new M0("Battery","Increases maximum energy","b","cyberyellow",10),energy:new M0("Energy","Energy pack","e","cyberyellow",10),gold:new M0("Gold","Precious shiny!","g","cyberyellow",0,0,1),goo:new M0("Goo","A minor matter source","g","gray",0,1),junk:new M0("Junk","Broken bot","%","gray",0,1),matter:new M0("Matter","A pile of stuff","m","gray",0,100),broom:new M0("Broom","Sweeps the floor","i","cyberyellow",0,0,0,-10,-1),hammer:new M0("Hammer","Tears down weak walls","i","cyberyellow",0,0,0,-15,-2,["Wall Crusher"]),shocker:new M0("Shocker","Injects Bots with new energy, basic AeroBot tool","i","cyberyellow",0,0,0,10,-1),wrench:new M0("Wrench","Basic WorkBot tool","i","cyberyellow",0,0,0,-10,-1)},maps:{bot_bar:`!
!!id bot_bar
!!size 16 16
!!. void
!!~ water
!!# wall
!!s wallstatue
!!+ wallweak
!!= chargepad
!!O portal bot_station 23 16
################
#..............#
#..............#
#.....=..+++++.#
#s....=..+~....#
O.....=..+.....#
#s.====..+.....#
#..=.....+.....#
#..=.....+.....#
#..====..+.....#
#.....=..+.....#
#.....=..+.....#
#.....=..+++++.#
#..............#
#~............~#
################
`,bot_dormitory:`!
!!id bot_dormitory
!!size 32 32
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
!!# wall
!!+ wallweak
!!~ water
!!. void
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!O portal bot_station 4 28
!!P portal bot_station 13 25
!!h portal bot_station 5 21
##########h#####################################
#~.....................+~......................#
#.........vv...........+.......................#
#......................+.......................#
#.........vv...........+.......................#
#......................+.......................#
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
#..............................................#
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
!!. void
!!~ water
!!# wall
!!+ wallweak
!!= chargepad
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
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
################################
#...########################...#
#.......################.......#
#...........########...........#
#...####.++....CC........####..#
#...####.++..............####..#
#...e###.++..............####..#
#...####.++..............#A##..#
#........++....................#
#+++++++++.....................#
#+++++++++.+.+.+.+.+.+.+.+.+.++#
#~............................~#
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
################################
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
!!, wall ,
!!/ wall /
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
#^|...........................................................................^#
#^............................................................................^#
#^|...........................................................................^#
#^..>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.^#
#^|...........................................................................^#
#^............................................................................^#
################################################################################
`,manual:`!
!!id manual
!!size 80 54
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
!!/ wall /
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
!!size 20 20
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
#........~.........#
#..................#
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
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired PioneerBot, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:Z0.showGrid?new J0("void","Just nothing here",".","gray"):new J0("void","Just nothing here"),voidtrue:new J0("voidtrue","Really nothing here and you shouldn't get there ever!"),voidhidden:new J0("voidhidden","Looks like a wall, but isn't!","#","gray","black"),water:new J0("water","Rust and other dangers await","~","cybercyan","cyberblue",-2),rock:new J0("rock","Hidden treasures may await","^","white","gray"),tree:new J0("tree","Lots of trees make a forest","t","brown","black"),wall:new J0("wall","A strong wall","#","gray","black"),wallstatue:new J0("wallstatue","A small statue","s","gray","black"),wallweak:new J0("wallweak","A weakened wall","+","gray","black"),chargepad:new J0("chargepad","Recharges energy and health","=","cyberyellow","black",2),movenorth:new J0("movenorth","Moves you north","^","cyberyellow"),moveeast:new J0("moveeast","Moves you east",">","cyberyellow"),movesouth:new J0("movesouth","Moves you south","v","cyberyellow"),movewest:new J0("movewest","Moves you west","<","cyberyellow"),portal:new J0("portal","Gateway to another map","O","cyberyellow","gray"),portalclosed:new J0("portalclosed","Closed gateway to another map","O","black","gray"),portalhidden:new J0("portalhidden","Hidden gateway to another map","#","gray","black"),portallauncher:new J0("portallauncher","Launches into space","O","cyberyellow","gray"),portalstartworkbot:new J0("portalstartworkbot","Start playing as a WorkBot","B","white"),portalstartaerobot:new J0("portalstartaerobot","Start playing as a AeroBot","A","white"),"_portalstart?":new J0("_portalstart?","Not unlocked, yet!","?","white"),spacerock:new J0("spacerock","Mountains as seen from space, non-blocking!","^","white","gray"),spacetree:new J0("spacetree","Forest as seen from space","","brown","brown"),spacewater:new J0("spacewater","Water as seen from space, not dangerous!","~","cybercyan","cyberblue"),spacevoid:new J0("spacevoid","Void/ground as seen from space","","gray","gray"),spacevoidstarwhite:new J0("spacevoidstarwhite","Space with a white background star",".","white"),spacevoidstaryellow:new J0("spacevoidstaryellow","Space with a yellow background star",".","cyberyellow"),sun:new J0("sun","It's hot, really hot!","","cyberyellow","cyberyellow",-100)}};function l(Q,q,Y,H,D=0,O=0,A={}){const b={id:q,type:Y,mapId:H,x:D,y:O,energy:10,energyMax:10,gold:0,matter:0,options:A};return Q=ZZ(Q,b,Y),Q.entities[b.id]=b,Q}function fZ(Q,q,Y,H){return l(Q,"boulder,"+q+","+Y+","+H,F.entities.movableboulder,q,Y,H,{faction:F.factions.Gaia})}function IZ(Q,q,Y,H){return l(Q,"box,"+q+","+Y+","+H,F.entities.movablebox,q,Y,H,{faction:F.factions.Equipment})}function t0(Q,q){return Q.entities[q]=void 0,delete Q.entities[q],Q.tools[q]=void 0,Q}function u0(Q,q){let Y=Object.keys(Q.entities),H=[];for(let D=0;D<Y.length;D++){let O=Q.entities[Y[D]];if(O.mapId===q)H.push(O)}return H}function eZ(Q,q,Y,H){let D=u0(Q,q).filter((O)=>O.x===Y&&O.y===H);if(D.length>0)return D[0];return null}function ZZ(Q,q,Y){if(q.type=Y,q.energy=Y.energyMax,q.energyMax=Y.energyMax,q.gold=0,q.matter=0,!O0(q))Q.tools[q.id]=void 0;return Q}function tZ(Q,q,Y){if(q.options.faction===Y.options.faction);else{const H=q.id,D=Y.id;Q._combatQueue.push({entityId:H,otherEntityId:D})}return Q}function O0(Q){return Q.type===F.entities.movableboulder||Q.type===F.entities.movablebox}function JZ(Q,q){const Y={A:F.actions.Wait,B:F.actions.Wait};if(!!Q.lastSpacePositionByEntity[q.id]&&q.energy>Math.abs(F.actions.Launch.energyDelta))Y.A=F.actions.Launch;const D=Q.maps[q.mapId].getTile(q.x,q.y);if(!!D.options.mapId&&"x"in D.options&&"y"in D.options)Y.A=F.actions.Enter;return Y}function SZ(Q,q,Y){const H=Q._eventSubscribers[q];if(H)for(let D=0;D<H.length;D++){const O=H[D];Q=O(Q,Y)}return Q}function bZ(Q,q,Y){if(q in Q._eventSubscribers);else Q._eventSubscribers[q]=[];return Q._eventSubscribers[q].push(Y),Q}function K0(Q,q,Y,H=0,D=0){const A={id:QZ(Y,H,D),type:q,mapId:Y,x:H,y:D,energy:q.energyDelta,gold:q.gold,matter:q.matter};return Q.items[A.id]=A,Q}function ZJ(Q,q,Y,H=0,D=0){const O=F.items.junk,b={id:QZ(Y,H,D),type:O,mapId:Y,x:H,y:D,energy:O.energyDelta,gold:O.gold,matter:q};return Q.items[b.id]=b,Q}function VZ(Q,q,Y,H=0,D=0,O,A){const N={id:QZ(Y,H,D),type:q,mapId:Y,x:H,y:D,energy:q.energyDelta,gold:O,matter:A};return Q.items[N.id]=N,Q}var QZ=function(Q,q,Y){return"item,"+Q+","+q+","+Y};function kZ(Q,q){return Q.items[q]=void 0,delete Q.items[q],Q}function KZ(Q,q){let Y=Object.keys(Q.items),H=[];for(let D=0;D<Y.length;D++){let O=Q.items[Y[D]];if(O.mapId===q)H.push(O)}return H}function JJ(Q,q,Y,H){let D=QZ(q,Y,H);if(D in Q.items)return Q.items[D];return null}function r0(Q,q){return Q.tools[q]}function VJ(Q,q,Y){if(O0(q))return Q;if(!fV(q,Y))return Q;if(NV(Y))Q=uZ(Q,q.id,Y.type);else{if(Y.type===F.items.battery)q.energyMax+=Y.energy;Q._energyQueue.push({entityId:q.id,energyDelta:Y.energy})}return q.gold+=Y.gold,q.matter+=Y.matter,kZ(Q,Y.id),Q}function uZ(Q,q,Y){let H={type:Y};return Q.tools[q]=H,Q}var NV=function(Q){return Q.type.energyCost<0},fV=function(Q,q){return Q.gold+q.gold>=0&&Q.matter+q.matter>=0};function QJ(Q,q,Y,H,D){let O=new IV.js;O.setGrid(Q),O.setAcceptableTiles([0]),O.enableSync();let A=null;return O.findPath(q,Y,H,D,function(b){A=b}),O.calculate(),A}/*!
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
 */var IV=function(Q){var q={};function Y(H){if(q[H])return q[H].exports;var D=q[H]={i:H,l:!1,exports:{}};return Q[H].call(D.exports,D,D.exports,Y),D.l=!0,D.exports}return Y.m=Q,Y.c=q,Y.d=function(H,D,O){Y.o(H,D)||Object.defineProperty(H,D,{enumerable:!0,get:O})},Y.r=function(H){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(H,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(H,"__esModule",{value:!0})},Y.t=function(H,D){if(1&D&&(H=Y(H)),8&D)return H;if(4&D&&typeof H=="object"&&H&&H.__esModule)return H;var O=Object.create(null);if(Y.r(O),Object.defineProperty(O,"default",{enumerable:!0,value:H}),2&D&&typeof H!="string")for(var A in H)Y.d(O,A,function(b){return H[b]}.bind(null,A));return O},Y.n=function(H){var D=H&&H.__esModule?function(){return H.default}:function(){return H};return Y.d(D,"a",D),D},Y.o=function(H,D){return Object.prototype.hasOwnProperty.call(H,D)},Y.p="/bin/",Y(Y.s=0)}([function(Q,q,Y){var H={},D=Y(1),O=Y(2),A=Y(3);Q.exports=H;var b=1;H.js=function(){var N,I,m,o=!1,h={},s={},d={},y={},c=!0,U0={},$0=[],G0=Number.MAX_VALUE,L0=!1;this.setAcceptableTiles=function(S){S instanceof Array?m=S:!isNaN(parseFloat(S))&&isFinite(S)&&(m=[S])},this.enableSync=function(){o=!0},this.disableSync=function(){o=!1},this.enableDiagonals=function(){L0=!0},this.disableDiagonals=function(){L0=!1},this.setGrid=function(S){N=S;for(var v=0;v<N.length;v++)for(var j=0;j<N[0].length;j++)s[N[v][j]]||(s[N[v][j]]=1)},this.setTileCost=function(S,v){s[S]=v},this.setAdditionalPointCost=function(S,v,j){d[v]===void 0&&(d[v]={}),d[v][S]=j},this.removeAdditionalPointCost=function(S,v){d[v]!==void 0&&delete d[v][S]},this.removeAllAdditionalPointCosts=function(){d={}},this.setDirectionalCondition=function(S,v,j){y[v]===void 0&&(y[v]={}),y[v][S]=j},this.removeAllDirectionalConditions=function(){y={}},this.setIterationsPerCalculation=function(S){G0=S},this.avoidAdditionalPoint=function(S,v){h[v]===void 0&&(h[v]={}),h[v][S]=1},this.stopAvoidingAdditionalPoint=function(S,v){h[v]!==void 0&&delete h[v][S]},this.enableCornerCutting=function(){c=!0},this.disableCornerCutting=function(){c=!1},this.stopAvoidingAllAdditionalPoints=function(){h={}},this.findPath=function(S,v,j,n,e){var V0=function(N0){o?e(N0):setTimeout(function(){e(N0)})};if(m===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(N===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(S<0||v<0||j<0||n<0||S>N[0].length-1||v>N.length-1||j>N[0].length-1||n>N.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(S!==j||v!==n){for(var w0=N[n][j],X0=!1,j0=0;j0<m.length;j0++)if(w0===m[j0]){X0=!0;break}if(X0!==!1){var Y0=new D;Y0.openList=new A(function(N0,m0){return N0.bestGuessDistance()-m0.bestGuessDistance()}),Y0.isDoneCalculating=!1,Y0.nodeHash={},Y0.startX=S,Y0.startY=v,Y0.endX=j,Y0.endY=n,Y0.callback=V0,Y0.openList.push(i(Y0,Y0.startX,Y0.startY,null,1));var p0=b++;return U0[p0]=Y0,$0.push(p0),p0}V0(null)}else V0([])},this.cancelPath=function(S){return S in U0&&(delete U0[S],!0)},this.calculate=function(){if($0.length!==0&&N!==void 0&&m!==void 0)for(I=0;I<G0;I++){if($0.length===0)return;o&&(I=0);var S=$0[0],v=U0[S];if(v!==void 0)if(v.openList.size()!==0){var j=v.openList.pop();if(v.endX!==j.x||v.endY!==j.y)j.list=0,j.y>0&&C(v,j,0,-1,1*g(j.x,j.y-1)),j.x<N[0].length-1&&C(v,j,1,0,1*g(j.x+1,j.y)),j.y<N.length-1&&C(v,j,0,1,1*g(j.x,j.y+1)),j.x>0&&C(v,j,-1,0,1*g(j.x-1,j.y)),L0&&(j.x>0&&j.y>0&&(c||k(N,m,j.x,j.y-1,j)&&k(N,m,j.x-1,j.y,j))&&C(v,j,-1,-1,1.4*g(j.x-1,j.y-1)),j.x<N[0].length-1&&j.y<N.length-1&&(c||k(N,m,j.x,j.y+1,j)&&k(N,m,j.x+1,j.y,j))&&C(v,j,1,1,1.4*g(j.x+1,j.y+1)),j.x<N[0].length-1&&j.y>0&&(c||k(N,m,j.x,j.y-1,j)&&k(N,m,j.x+1,j.y,j))&&C(v,j,1,-1,1.4*g(j.x+1,j.y-1)),j.x>0&&j.y<N.length-1&&(c||k(N,m,j.x,j.y+1,j)&&k(N,m,j.x-1,j.y,j))&&C(v,j,-1,1,1.4*g(j.x-1,j.y+1)));else{var n=[];n.push({x:j.x,y:j.y});for(var e=j.parent;e!=null;)n.push({x:e.x,y:e.y}),e=e.parent;n.reverse();var V0=n;v.callback(V0),delete U0[S],$0.shift()}}else v.callback(null),delete U0[S],$0.shift();else $0.shift()}};var C=function(S,v,j,n,e){var V0=v.x+j,w0=v.y+n;if((h[w0]===void 0||h[w0][V0]===void 0)&&k(N,m,V0,w0,v)){var X0=i(S,V0,w0,v,e);X0.list===void 0?(X0.list=1,S.openList.push(X0)):v.costSoFar+e<X0.costSoFar&&(X0.costSoFar=v.costSoFar+e,X0.parent=v,S.openList.updateItem(X0))}},k=function(S,v,j,n,e){var V0=y[n]&&y[n][j];if(V0){var w0=T(e.x-j,e.y-n);if(!function(){for(var j0=0;j0<V0.length;j0++)if(V0[j0]===w0)return!0;return!1}())return!1}for(var X0=0;X0<v.length;X0++)if(S[n][j]===v[X0])return!0;return!1},T=function(S,v){if(S===0&&v===-1)return H.TOP;if(S===1&&v===-1)return H.TOP_RIGHT;if(S===1&&v===0)return H.RIGHT;if(S===1&&v===1)return H.BOTTOM_RIGHT;if(S===0&&v===1)return H.BOTTOM;if(S===-1&&v===1)return H.BOTTOM_LEFT;if(S===-1&&v===0)return H.LEFT;if(S===-1&&v===-1)return H.TOP_LEFT;throw new Error("These differences are not valid: "+S+", "+v)},g=function(S,v){return d[v]&&d[v][S]||s[N[v][S]]},i=function(S,v,j,n,e){if(S.nodeHash[j]!==void 0){if(S.nodeHash[j][v]!==void 0)return S.nodeHash[j][v]}else S.nodeHash[j]={};var V0=a(v,j,S.endX,S.endY);if(n!==null)var w0=n.costSoFar+e;else w0=0;var X0=new O(n,v,j,w0,V0);return S.nodeHash[j][v]=X0,X0},a=function(S,v,j,n){var e,V0;return L0?(e=Math.abs(S-j))<(V0=Math.abs(v-n))?1.4*e+V0:1.4*V0+e:(e=Math.abs(S-j))+(V0=Math.abs(v-n))}},H.TOP="TOP",H.TOP_RIGHT="TOP_RIGHT",H.RIGHT="RIGHT",H.BOTTOM_RIGHT="BOTTOM_RIGHT",H.BOTTOM="BOTTOM",H.BOTTOM_LEFT="BOTTOM_LEFT",H.LEFT="LEFT",H.TOP_LEFT="TOP_LEFT"},function(Q,q){Q.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(Q,q){Q.exports=function(Y,H,D,O,A){this.parent=Y,this.x=H,this.y=D,this.costSoFar=O,this.simpleDistanceToTarget=A,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(Q,q,Y){Q.exports=Y(4)},function(Q,q,Y){var H,D,O;(function(){var A,b,N,I,m,o,h,s,d,y,c,U0,$0,G0,L0;N=Math.floor,y=Math.min,b=function(C,k){return C<k?-1:C>k?1:0},d=function(C,k,T,g,i){var a;if(T==null&&(T=0),i==null&&(i=b),T<0)throw new Error("lo must be non-negative");for(g==null&&(g=C.length);T<g;)i(k,C[a=N((T+g)/2)])<0?g=a:T=a+1;return[].splice.apply(C,[T,T-T].concat(k)),k},o=function(C,k,T){return T==null&&(T=b),C.push(k),G0(C,0,C.length-1,T)},m=function(C,k){var T,g;return k==null&&(k=b),T=C.pop(),C.length?(g=C[0],C[0]=T,L0(C,0,k)):g=T,g},s=function(C,k,T){var g;return T==null&&(T=b),g=C[0],C[0]=k,L0(C,0,T),g},h=function(C,k,T){var g;return T==null&&(T=b),C.length&&T(C[0],k)<0&&(k=(g=[C[0],k])[0],C[0]=g[1],L0(C,0,T)),k},I=function(C,k){var T,g,i,a,S,v;for(k==null&&(k=b),S=[],g=0,i=(a=function(){v=[];for(var j=0,n=N(C.length/2);0<=n?j<n:j>n;0<=n?j++:j--)v.push(j);return v}.apply(this).reverse()).length;g<i;g++)T=a[g],S.push(L0(C,T,k));return S},$0=function(C,k,T){var g;if(T==null&&(T=b),(g=C.indexOf(k))!==-1)return G0(C,0,g,T),L0(C,g,T)},c=function(C,k,T){var g,i,a,S,v;if(T==null&&(T=b),!(i=C.slice(0,k)).length)return i;for(I(i,T),a=0,S=(v=C.slice(k)).length;a<S;a++)g=v[a],h(i,g,T);return i.sort(T).reverse()},U0=function(C,k,T){var g,i,a,S,v,j,n,e,V0;if(T==null&&(T=b),10*k<=C.length){if(!(a=C.slice(0,k).sort(T)).length)return a;for(i=a[a.length-1],S=0,j=(n=C.slice(k)).length;S<j;S++)T(g=n[S],i)<0&&(d(a,g,0,null,T),a.pop(),i=a[a.length-1]);return a}for(I(C,T),V0=[],v=0,e=y(k,C.length);0<=e?v<e:v>e;0<=e?++v:--v)V0.push(m(C,T));return V0},G0=function(C,k,T,g){var i,a,S;for(g==null&&(g=b),i=C[T];T>k&&g(i,a=C[S=T-1>>1])<0;)C[T]=a,T=S;return C[T]=i},L0=function(C,k,T){var g,i,a,S,v;for(T==null&&(T=b),i=C.length,v=k,a=C[k],g=2*k+1;g<i;)(S=g+1)<i&&!(T(C[g],C[S])<0)&&(g=S),C[k]=C[g],g=2*(k=g)+1;return C[k]=a,G0(C,v,k,T)},A=function(){function C(k){this.cmp=k!=null?k:b,this.nodes=[]}return C.push=o,C.pop=m,C.replace=s,C.pushpop=h,C.heapify=I,C.updateItem=$0,C.nlargest=c,C.nsmallest=U0,C.prototype.push=function(k){return o(this.nodes,k,this.cmp)},C.prototype.pop=function(){return m(this.nodes,this.cmp)},C.prototype.peek=function(){return this.nodes[0]},C.prototype.contains=function(k){return this.nodes.indexOf(k)!==-1},C.prototype.replace=function(k){return s(this.nodes,k,this.cmp)},C.prototype.pushpop=function(k){return h(this.nodes,k,this.cmp)},C.prototype.heapify=function(){return I(this.nodes,this.cmp)},C.prototype.updateItem=function(k){return $0(this.nodes,k,this.cmp)},C.prototype.clear=function(){return this.nodes=[]},C.prototype.empty=function(){return this.nodes.length===0},C.prototype.size=function(){return this.nodes.length},C.prototype.clone=function(){var k;return(k=new C).nodes=this.nodes.slice(0),k},C.prototype.toArray=function(){return this.nodes.slice(0)},C.prototype.insert=C.prototype.push,C.prototype.top=C.prototype.peek,C.prototype.front=C.prototype.peek,C.prototype.has=C.prototype.contains,C.prototype.copy=C.prototype.clone,C}(),D=[],(O=typeof(H=function(){return A})=="function"?H.apply(q,D):H)===void 0||(Q.exports=O)}).call(this)}]);function A0(){return"player"}function KJ(Q,q,Y,H){return Math.abs(Q-Y)+Math.abs(q-H)}function UZ(Q){return[...Array(Q).keys()]}function UJ(Q){let q=SV(Q);for(let H=0;H<q.length;H++){let D=q[H];if(!Q._AIs.hasOwnProperty(D))Q._AIs[D]=bV(Q,D,Q.entities[D].options.ai)}let Y=Q.entities[A0()];for(let H=0;H<q.length;H++){let D=q[H],O=Q.entities[D],A=Q._AIs[D],b=KJ(Y.x,Y.y,O.x,O.y);if(Y.options.faction!==O.options.faction&&b<=A.aggroRange){let N=Q.maps[Q.currentMapId].asMovementMap(),I=QJ(N,O.x,O.y,Y.x,Y.y);if(I){if(I=I.slice(1),I.length>b)I=null}A.path=I}}for(let H=0;H<q.length;H++){const D=q[H],O=Q.entities[D],A=Q._AIs[D];if(A.path){const b=A.path[0],N=b.x-O.x,I=b.y-O.y;Q=D0(Q,O,N,I)}}return Q}var SV=function(Q){let q=u0(Q,Q.currentMapId),Y=[];for(let H=0;H<q.length;H++){let D=q[H];if(!D.id.startsWith("player")&&!!D.options.ai)Y.push(D.id)}return Y},bV=function(Q,q,Y){let H=Q.entities[q],D=8;switch(Y){case F.ais.aggrorange:D=8;break;case F.ais.aggrorangeshort:D=2;break;case F.ais.guardian:D=1;break;default:}return{entityId:q,type:Y,aggroRange:D,startMap:H.mapId,startX:H.x,startY:H.y,path:null}};function qZ(Q,q){return Q._AIs[q]=void 0,delete Q._AIs[q],Q}function T0(Q,q={}){return{type:Q,options:q}}function qJ(Q){return Q.type.name.startsWith("space")}function zJ(Q,q){const Y=KZ(Q,q);for(let D=0;D<Y.length;D++){const O=Y[D];Q=kZ(Q,O.id)}const H=u0(Q,q);for(let D=0;D<H.length;D++){const O=H[D];Q=t0(Q,O.id),Q=qZ(Q,O.id)}return Q.maps[q]=void 0,delete Q.maps[q],Q}function h0(Q){let q=Q.split(/\r?\n/),Y=Q[0],H="",D=0,O=0,A={},b=[];for(let N=0;N<q.length;N++){let I=q[N];if(I.startsWith(Y)){if(I.startsWith(Y+"!id"))H=I.slice(5);else if(I.startsWith(Y+"!size")){let m=I.split(" ").slice(1);D=Number(m[0]),O=Number(m[1])}else if(I.startsWith(Y+"!")){let m=I[2],o=I.slice(4);A[m]=o}}else for(let m=0;m<I.length;m++){let o=I[m],h=A[o];if(!h&&Z0.debug)console.log("DEBUG Broken map: "+H);let s=h.split(" "),d={};if(h.startsWith("portal ")||h.startsWith("portalhidden ")||h.startsWith("portallauncher ")||h.startsWith("portalstart"))h=s[0],d.mapId=s[1],d.x=Number(s[2]),d.y=Number(s[3]);if(h.startsWith("wall ")&&s.length>=2)h="wall",d.sign=s[1];b.push(T0(F.tiles[h],d))}}return new g0(H,D,O,b)}var zZ={width:16,height:16},TZ=zZ;class g0{id;widthTiles;heightTiles;_tiles;_cacheMovementMap;constructor(Q,q,Y,H=[]){this.id=Q,this.widthTiles=q,this.heightTiles=Y,this._tiles=H,this._cacheMovementMap=null}getTile(Q,q){if(Q>=0&&Q<this.widthTiles&&q>=0&&q<this.heightTiles){let Y=q*this.widthTiles+Q;return this._tiles[Y]}return{}}setTile(Q,q,Y,H={}){this._cacheMovementMap=null;let D=q*this.widthTiles+Q;this._tiles[D]=T0(Y,H)}pasteOnto(Q,q=0,Y=0){for(let H=0;H<Q.heightTiles;H++)for(let D=0;D<Q.widthTiles;D++){const O=Q.getTile(D,H);if(O.type!==F.tiles.voidtrue)this.setTile(D+q,H+Y,O.type,O.options)}return this}circular(){let Q=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let q=-Q;q<=Q;q++)for(let Y=-Q;Y<=Q;Y++)if(Y*Y+q*q>=Q*Q)this.setTile(Y+Q-1,q+Q-1,F.tiles.voidtrue);return this}sample(Q,q){const Y=Math.floor(this.widthTiles/Q),H=Math.floor(this.heightTiles/q),D=[];for(let O=0;O<q;O++)for(let A=0;A<Q;A++){const b={};for(let s=0;s<H;s++)for(let d=0;d<Y;d++){const y=this.getTile(A*Y+d,O*H+s);if(b[y.type.name])b[y.type.name]+=1;else b[y.type.name]=1}let N="",I=0;for(let[s,d]of Object.entries(b))if(d>I)N=s,I=d;const m="space"+N,o=F.tiles[m]||F.tiles.spacevoid,h={mapId:this.id,x:A*Y,y:O*H};D.push(T0(o,h))}return new g0("__sampled_"+Q+"_"+q+"_"+this.id,Q,q,D)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let Q=new Array(this.heightTiles);for(let q=0;q<this.heightTiles;q++){Q[q]=new Array(this.widthTiles);for(let Y=0;Y<this.widthTiles;Y++){let H=q*this.widthTiles+Y,O=this._tiles[H].type;if(Q[q][Y]=0,O===F.tiles.rock||O===F.tiles.portalclosed||O.name.startsWith("wall"))Q[q][Y]=1}}return this._cacheMovementMap=Q,Q}}function XJ(Q,q,Y){switch(Y){case F.commands.N:Q=D0(Q,q,0,-1);break;case F.commands.W:Q=D0(Q,q,-1,0);break;case F.commands.S:Q=D0(Q,q,0,1);break;case F.commands.E:Q=D0(Q,q,1,0);break;case F.commands.A:Q=$J(Q,q,F.commands.A);break;case F.commands.B:Q=$J(Q,q,F.commands.B);break;default:}return Q}function D0(Q,q,Y,H,D=0){const O=Q.maps[q.mapId],A=eZ(Q,O.id,q.x+Y,q.y+H),b=Q.tools[q.id];if(A)if(O0(A)){if(!O0(q)&&D<1)Q=D0(Q,A,Y,H,D++),Q=D0(Q,q,Y,H,D++)}else Q=tZ(Q,q,A);else if(TV(O,q,Y,H))Q=kV(Q,O,q,Y,H),Q._energyQueue.push({entityId:q.id,energyDelta:-1*D});else if(gV(O,q,b,Y,H))O.setTile(q.x+Y,q.y+H,F.tiles.void),Q._energyQueue.push({entityId:q.id,energyDelta:b.type.energyCost});return Q}function $J(Q,q,Y){const D=JZ(Q,q)[Y.key],A=Q.maps[q.mapId].getTile(q.x,q.y);switch(D){case F.actions.Enter:Q=GJ(Q,q,A);break;case F.actions.Launch:Q=uV(Q,q,A);case F.actions.Wait:break;default:}return Q}var kV=function(Q,q,Y,H,D){Y.x+=H,Y.y+=D;let O=JJ(Q,Y.mapId,Y.x,Y.y);if(O)Q=VJ(Q,Y,O);let A=q.getTile(Y.x,Y.y);if(A.type.name.startsWith("portal"))Q=GJ(Q,Y,A);if(A.type.name.startsWith("move"))switch(A.type.name){case"movenorth":Q=D0(Q,Y,0,-1);break;case"moveeast":Q=D0(Q,Y,1,0);break;case"movesouth":Q=D0(Q,Y,0,1);break;case"movewest":Q=D0(Q,Y,-1,0);break;default:}return Q},GJ=function(Q,q,Y){if(q.id.startsWith("player"))Q.currentMapId=Y.options.mapId;if(qJ(Y))Q.lastSpacePositionByEntity[q.id]={mapId:q.mapId,x:q.x,y:q.y};else Q.lastSpacePositionByEntity[q.id]=void 0,delete Q.lastSpacePositionByEntity[q.id];const H={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:Y.type,newMapId:Y.options.mapId,newX:Y.options.x,newY:Y.options.y};return q.mapId=Y.options.mapId,q.x=Y.options.x,q.y=Y.options.y,Q=SZ(Q,"entitymap.updated.event",H),Q},uV=function(Q,q,Y){if(Q.lastSpacePositionByEntity[q.id]){if(q.id.startsWith("player"))Q.currentMapId=Q.lastSpacePositionByEntity[q.id].mapId;const H={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:Y.type,newMapId:Q.lastSpacePositionByEntity[q.id].mapId,newX:Q.lastSpacePositionByEntity[q.id].x,newY:Q.lastSpacePositionByEntity[q.id].y};q.mapId=H.newMapId,q.x=H.newX,q.y=H.newY,Q._energyQueue.push({entityId:q.id,energyDelta:F.actions.Launch.energyDelta}),Q.lastSpacePositionByEntity[q.id]=void 0,delete Q.lastSpacePositionByEntity[q.id],Q=SZ(Q,"entitymap.updated.event",H)}return Q};function BJ(Q){for(let q in Q.entities){let Y=Q.entities[q],D=Q.maps[Y.mapId].getTile(Y.x,Y.y);Q._energyQueue.push({entityId:q,energyDelta:D.type.energyDelta})}return Q}function LJ(Q,q){const Y=Q.entities[q.entityId];switch(q.oldTileType){case F.tiles.portalstartaerobot:Q=ZZ(Q,Y,F.entities.AeroBot);break;case F.tiles.portalstartworkbot:Q=ZZ(Q,Y,F.entities.WorkBot);break;default:}return Q}var TV=function(Q,q,Y,H){let D=q.x+Y,O=q.y+H,A=Q.getTile(D,O).type;return D>=0&&D<Q.widthTiles&&O>=0&&O<Q.heightTiles&&A!==F.tiles.rock&&A!==F.tiles.portalclosed&&!A.name.startsWith("wall")},gV=function(Q,q,Y,H,D){const O=q.x+H,A=q.y+D,b=Q.getTile(O,A).type;if(Y)return Y.type.effects.includes(F.effects.WallCrusher.name)&&b===F.tiles.wallweak;return!1};var HJ=AZ(XZ(),1);class y0{seed;_rotRng;constructor(Q=1337){this.seed=Q,this._rotRng=HJ.RNG.clone(),this._rotRng.setSeed(Q)}getPercentage(){return this._rotRng.getPercentage()}getItem(Q){return this._rotRng.getItem(Q)}}var BZ=AZ(XZ(),1);function FJ(Q,q=GZ){BZ.RNG.setSeed(q);let Y=new BZ.Noise.Simplex;const H=zZ.width*TZ.width,D=zZ.height*TZ.height;let O=[];for(let N=0;N<D;N++)for(let I=0;I<H;I++){let m=Y.get(I/PJ,N/PJ),o;if(m<=-0.5)o=F.tiles.water;else if(m<=0)o=F.tiles.void;else if(m<0.5)o=F.tiles.tree;else o=F.tiles.rock;O.push(T0(o))}const A="simplex="+q;let b=new g0(A,H,D,O);if(Q.maps[A]=b,q===1337)Q=l(Q,"batteryvalkyrie0",F.entities.Valkyrie,"simplex="+GZ,130,127,{faction:F.factions.Spirits}),Q=l(Q,"batteryvalkyrie1",F.entities.Valkyrie,"simplex="+GZ,124,127,{faction:F.factions.Spirits}),Q=K0(Q,F.items.battery,"simplex="+GZ,127,130);else{const N=new y0(q);for(let I=0;I<D;I++)for(let m=0;m<H;m++){const o=b.getTile(m,I);if(N.getPercentage()<=1&&(o.type===F.tiles.void||o.type===F.tiles.tree))switch(N.getItem(["pioneer","deviant","junk","matter","junk","matter"])){case"deviant":Q=l(Q,b.id+"_deviant_"+m+"_"+I,F.entities.Deviant,b.id,m,I,{faction:F.factions.Pyrates,ai:F.ais.aggrorange});break;case"pioneer":Q=l(Q,b.id+"_pioneer_"+m+"_"+I,F.entities.Pioneer,b.id,m,I,{faction:F.factions.Pyrates,ai:F.ais.aggrorange});break;case"junk":Q=K0(Q,F.items.junk,A,m,I);break;case"matter":Q=K0(Q,F.items.matter,A,m,I);break}}}return Q}var GZ=1337,PJ=55;function DJ(Q,q=hV){let Y=wJ(1024,1024,F.tiles.void);Y.id="solarsystem="+q,Q.maps[Y.id]=Y;const H=new y0(q),D=new y0(q),O=H.getItem([2,3,4,5,6,7,8,9,10,11,12]);let A=128,b=512-A;const N=Math.floor(b/O);Y=xV(Y,H);let I=wJ(128,128,F.tiles.voidtrue);mV(I,63,63,62,F.tiles.sun),_V(I,63,63,F.tiles.sun),Y.pasteOnto(I,448,448);for(let h=A;h<512;h+=N){let s=H.getItem([-1,1])*H.getItem(UZ(h)),d=H.getItem([-1,1])*Math.floor(Math.sqrt(h*h-s*s));s+=512,d+=512;const y=H.getItem([16,24,32]),c=Math.floor(y/2)-1;Q=FJ(Q,q);const U0=Q.maps["simplex="+q];let $0=F.map_snippets.launcher;$0=$0.replace("!!O portallauncher space 0 0",`!!O portallauncher ${Y.id} ${s} ${d}`);const G0=h0($0),L0=D.getItem(UZ(U0.widthTiles-G0.widthTiles)),C=D.getItem(UZ(U0.heightTiles-G0.heightTiles));U0.pasteOnto(G0,L0,C);const k=U0.sample(y,y).circular();Y.pasteOnto(k,s-(c+1),d-(c+1)),q++}let m=F.map_snippets.space_bot_station;m=m.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");const o=h0(m);return Y.pasteOnto(o,583,398),Q}var wJ=function(Q,q,Y){const H=[];for(let A=0;A<Q*q;A++)H.push(T0(Y));return new g0("__temp",Q,q,H)},xV=function(Q,q){for(let Y=0;Y<Q.heightTiles;Y++)for(let H=0;H<Q.widthTiles;H++)if(q.getPercentage()<=1)Q.setTile(H,Y,q.getItem([F.tiles.spacevoidstarwhite,F.tiles.spacevoidstaryellow]));return Q},mV=function(Q,q,Y,H,D){let O=1-H,A=1,b=-2*H,N=0,I=H;Q.setTile(q,Y+H,D),Q.setTile(q,Y-H,D),Q.setTile(q+H,Y,D),Q.setTile(q-H,Y,D);while(N<I){if(O>=0)I-=1,b+=2,O+=b;N+=1,A+=2,O+=A,Q.setTile(q+N,Y+I,D),Q.setTile(q-N,Y+I,D),Q.setTile(q+N,Y-I,D),Q.setTile(q-N,Y-I,D),Q.setTile(q+I,Y+N,D),Q.setTile(q-I,Y+N,D),Q.setTile(q+I,Y-N,D),Q.setTile(q-I,Y-N,D)}return Q},_V=function(Q,q,Y,H){const{widthTiles:D,heightTiles:O}=Q,A=[];A.push({x:q,y:Y});let b=void 0;while(typeof(b=A.shift())!=="undefined"){let N=b,I=b;if(b.x+1<D)I={x:b.x+1,y:b.y};while(Q.getTile(N.x,N.y).type!==H){if(Q.setTile(N.x,N.y,H),N.y+1<O){if(Q.getTile(N.x,N.y+1).type!==H)A.push({x:N.x,y:N.y+1})}if(N.y-1>=0){if(Q.getTile(N.x,N.y-1).type!==H)A.push({x:N.x,y:N.y-1})}if(N.x-1>=0)N.x-=1;else break}while(Q.getTile(I.x,I.y).type!==H){if(Q.setTile(I.x,I.y,H),I.y+1<O){if(Q.getTile(I.x,I.y+1).type!==H)A.push({x:I.x,y:I.y+1})}if(I.y-1>=0){if(Q.getTile(I.x,I.y-1).type!==H)A.push({x:I.x,y:I.y-1})}if(I.x+1<D)I.x+=1;else break}}return Q},hV=1337;function WJ(Q,q){if(q?.oldMapId?.startsWith("shop_instance")){Q=zJ(Q,q.oldMapId);const Y=Q.maps[q.newMapId],H=Y.getTile(q.newX,q.newY);Y.setTile(q.newX,q.newY,H.type,{mapId:"shop_instance",x:q.oldX,y:q.oldY})}if(q?.newMapId?.startsWith("shop_instance")){const Y=h0(yV);Y.id+="_"+q.oldMapId+"_"+q.entityId,Y.setTile(q.newX,q.newY,F.tiles.portal,{mapId:q.oldMapId,x:q.oldX,y:q.oldY}),Q.maps[q.oldMapId].setTile(q.oldX,q.oldY,q.oldTileType,{mapId:Y.id,x:q.newX,y:q.newY});const D=Q.entities[q.entityId];if(D.id.startsWith("player"))Q.currentMapId=Y.id;D.mapId=Y.id,D.x=q.newX,D.Y=q.newY,Q.maps[Y.id]=Y,Q=VZ(Q,F.items.hammer,Y.id,4,4,0,-200),Q=VZ(Q,F.items.battery,Y.id,4,6,0,-200),Q=VZ(Q,F.items.gold,Y.id,4,8,0,-1e4),Q=l(Q,Y.id+"_shopkeeper",F.entities.AeroBot,Y.id,6,2,{faction:D.options.faction}),Q=l(Q,Y.id+"_shopper",F.entities.WorkBot,Y.id,1,12,{faction:D.options.faction})}return Q}var yV=`!
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
#.....Battery..200M............................#
#..............................................#
#.....Gold.....10000M..........................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#..............................................#
#-............................................;#
################################################
`;function MJ(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!1,actionLog:[],currentMapId:"",entities:{},items:{},lastSpacePositionByEntity:{},maps:{},tools:{}}}function RJ(Q){let q=void 0;while(typeof(q=Q._combatQueue.shift())!=="undefined"){let Y=-1,H=-5;const D=r0(Q,q.entityId);if(D)Y=D.type.energyCost,H=-1*Math.abs(D.type.damage);Q._energyQueue.push({entityId:q.entityId,energyDelta:Y}),Q._energyQueue.push({entityId:q.otherEntityId,energyDelta:H})}return Q}function EJ(Q){let q=void 0;while(typeof(q=Q._energyQueue.shift())!=="undefined"){let Y=Q.entities[q.entityId];if(Y.energy=Math.min(Y.energy+q.energyDelta,Y.energyMax),Y.energy<=0){if(Q._despawnQueue.push(Y.id),!O0(Y)){const H=Math.max(1,Math.floor(Y.energyMax/3));Q=ZJ(Q,H,Y.mapId,Y.x,Y.y)}}}return Q}function OJ(Q){let q=void 0;while(typeof(q=Q._despawnQueue.shift())!=="undefined")Q=t0(Q,q),Q=qZ(Q,q);return Q}function jJ(Q){return Q}function CJ(Q){return Q=UJ(Q),Q=RJ(Q),Q=BJ(Q),Q=EJ(Q),Q=OJ(Q),Q=jJ(Q),Q}class LZ{state;constructor(){}init(){this.state=MJ(),this.state=bZ(this.state,"entitymap.updated.event",LJ),this.state=bZ(this.state,"entitymap.updated.event",WJ),this.state=DJ(this.state);for(let Q in F.maps)this.state.maps[Q]=h0(F.maps[Q]);this.state=l(this.state,"manual0",F.entities.Spirit,"manual",4,26,{faction:F.factions.Spirits}),this.state=l(this.state,"manual1",F.entities.AeroBot,"manual",4,27,{faction:F.factions.Spirits}),this.state=l(this.state,"manual2",F.entities.WorkBot,"manual",4,28,{faction:F.factions.Spirits}),this.state=l(this.state,"manual3",F.entities.Cleaner,"manual",4,29,{faction:F.factions.Spirits}),this.state=l(this.state,"manual4",F.entities.Pioneer,"manual",4,30,{faction:F.factions.Spirits}),this.state=l(this.state,"manual5",F.entities.Spirit,"manual",54,36,{faction:F.factions.Pyrates,ai:F.ais.aggrorange}),this.state=K0(this.state,F.items.junk,"manual",4,36),this.state=K0(this.state,F.items.goo,"manual",12,36),this.state=K0(this.state,F.items.matter,"manual",4,37),this.state=K0(this.state,F.items.gold,"manual",4,38),this.state=K0(this.state,F.items.energy,"manual",4,39),this.state=K0(this.state,F.items.battery,"manual",4,40),this.state=K0(this.state,F.items.wrench,"manual",4,41),this.state=l(this.state,"pioneerguardian0",F.entities.Pioneer,"bot_station",8,3,{faction:F.factions.Guardians,ai:F.ais.aggrorangeshort}),this.state=uZ(this.state,"pioneerguardian0",F.items.hammer),this.state=l(this.state,"cleanerguardian0",F.entities.Cleaner,"bot_station",10,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=l(this.state,"cleanerguardian1",F.entities.Cleaner,"bot_station",12,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=l(this.state,"cleanerguardian2",F.entities.Cleaner,"bot_station",14,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=l(this.state,"cleanerguardian3",F.entities.Cleaner,"bot_station",16,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=l(this.state,"cleanerguardian4",F.entities.Cleaner,"bot_station",18,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=l(this.state,"cleanerguardian5",F.entities.Cleaner,"bot_station",20,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=l(this.state,"cleanerguardian6",F.entities.Cleaner,"bot_station",22,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=l(this.state,"cleanerguardian7",F.entities.Cleaner,"bot_station",24,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=l(this.state,"cleanerguardian8",F.entities.Cleaner,"bot_station",26,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=l(this.state,"cleanerguardian9",F.entities.Cleaner,"bot_station",28,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=l(this.state,"cleanerjailer0",F.entities.Cleaner,"bot_prison",18,11,{faction:F.factions.Guardians,ai:F.ais.aggrorange}),this.state=l(this.state,"cleanerjailer1",F.entities.Cleaner,"bot_prison",17,2,{faction:F.factions.Guardians,ai:F.ais.aggrorange}),this.state=l(this.state,"cleanerjailer2",F.entities.Cleaner,"bot_prison",24,5,{faction:F.factions.Guardians,ai:F.ais.aggrorange}),this.state=l(this.state,"cleanerjailer3",F.entities.Cleaner,"bot_prison",29,24,{faction:F.factions.Guardians,ai:F.ais.aggrorangeshort}),this.state=l(this.state,"prisoner0",F.entities.AeroBot,"bot_prison",34,22,{faction:F.factions.Spirits}),this.state=l(this.state,"prisoner1",F.entities.WorkBot,"bot_prison",9,22,{faction:F.factions.Spirits}),this.state=K0(this.state,F.items.broom,"bot_prison",28,1),this.state=K0(this.state,F.items.battery,"bot_prison",43,30),this.state=K0(this.state,F.items.matter,"bot_prison",9,30),this.state=K0(this.state,F.items.battery,"bot_dormitory",13,8),this.state=K0(this.state,F.items.junk,"bot_dormitory_hidden",1,2),this.state=K0(this.state,F.items.battery,"bot_dormitory_hidden",2,2),this.state=K0(this.state,F.items.shocker,"bot_bar",10,11),this.state=K0(this.state,F.items.hammer,"bot_elevator",12,3),this.state=K0(this.state,F.items.wrench,"bot_factory",45,19),this.state=K0(this.state,F.items.battery,"bot_factory",4,13);for(let Q=2;Q<=8;Q++)for(let q=2;q<=8;q++)this.state=K0(this.state,F.items.junk,"bot_factory",q,Q);this.state=IZ(this.state,"bot_bar",14,3),this.state=IZ(this.state,"bot_bar",14,12),this.state=fZ(this.state,"playground",9,9),this.state=fZ(this.state,"playground",10,9);for(let Q=1;Q<=18;Q++)this.state=K0(this.state,F.items.battery,"playground",Q,18);return this.state.currentMapId="botmos_hull_selection",this.state=l(this.state,A0(),F.entities.Spirit,this.state.currentMapId,9,5,{faction:F.factions.Spirits}),this.state}update(Q){let q=this.state.entities[A0()];if(q){if(Q){if(Q===F.commands.M)this.state._menuOpen=!this.state._menuOpen;else this.state=XJ(this.state,q,Q),this.state=CJ(this.state);this.state.actionLog.push(Q.key)}}else aZ("Game over! "+this.state.actionLog.length+" Turns: "+this.state.actionLog.join("")),this.state.currentMapId="botmos_hull_selection",this.state=l(this.state,A0(),F.entities.Spirit,this.state.currentMapId,9,5,{faction:F.factions.Spirits});return this.state}play(Q){for(let q=0;q<Q.length;q++){const Y=Q[q];this.update(F.commands[Y])}return this.state}}var v0=function(Q){const q=Date.now();if(hZ!==void 0&&q-AJ>=80)AJ=q,hZ(Q)},z0=function(Q){Q.preventDefault(),Q.stopPropagation()},pV=function(){let Q=null;if(p.right)Q=F.commands.E;if(p.left)Q=F.commands.W;if(p.down)Q=F.commands.S;if(p.up)Q=F.commands.N;if(p.up&&p.right){if(Q===F.commands.N&&s0===F.commands.N)Q=F.commands.E}if(p.up&&p.left){if(Q===F.commands.N&&s0===F.commands.N)Q=F.commands.W}if(p.down&&p.right){if(Q===F.commands.S&&s0===F.commands.S)Q=F.commands.E}if(p.down&&p.left){if(Q===F.commands.S&&s0===F.commands.S)Q=F.commands.W}if(p.a)Q=F.commands.A;if(p.b)Q=F.commands.B;if(p.menu)Q=F.commands.M;if(s0=Q,Q!==null)gZ.push(Q)},vJ=function(){pV();let Q=gZ.shift()||null;return gZ=[],Q};function fJ(Q){hZ=Q}var p={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1},gZ=[],hZ=void 0,AJ=0;document.body.addEventListener("keydown",function(Q){if(Q.defaultPrevented)return;switch(Q.key){case"w":case"ArrowUp":p.up=!0,z0(Q);break;case"a":case"ArrowLeft":p.left=!0,z0(Q);break;case"s":case"ArrowDown":p.down=!0,z0(Q);break;case"d":case"ArrowRight":p.right=!0,z0(Q);break;case"x":p.a=!0,z0(Q);break;case" ":case"y":case"z":p.b=!0,z0(Q);break;case"m":p.menu=!0,z0(Q);break;default:}v0(vJ())});document.body.addEventListener("keyup",function(Q){if(Q.defaultPrevented)return;switch(Q.key){case"w":case"ArrowUp":p.up=!1,z0(Q);break;case"a":case"ArrowLeft":p.left=!1,z0(Q);break;case"s":case"ArrowDown":p.down=!1,z0(Q);break;case"d":case"ArrowRight":p.right=!1,z0(Q);break;case"x":p.a=!1,z0(Q);break;case" ":case"y":case"z":p.b=!1,z0(Q);break;case"m":p.menu=!1,z0(Q);break;default:}});document.body.addEventListener("click",function(Q){const{clientX:q,clientY:Y}=Q,D=document.body.clientWidth/3,A=document.body.clientHeight/3;if(q>=D&&q<2*D&&Y<A)v0(F.commands.N),z0(Q);else if(q<D&&Y<A)v0(F.commands.B),z0(Q);else if(q>=2*D&&Y<A)v0(F.commands.A),z0(Q);else if(q<D&&Y>=A&&Y<2*A)v0(F.commands.W),z0(Q);else if(q>=2*D&&Y>=A&&Y<2*A)v0(F.commands.E),z0(Q);else if(q>=D&&q<2*D&&Y>=2*A)v0(F.commands.S),z0(Q);else if(q>=D&&q<2*D&&Y>=A&&Y<2*A)v0(F.commands.M),z0(Q)});var s0=null,NJ=void 0;window.addEventListener("gamepadconnected",(Q)=>{NJ=setInterval(function(){let q=navigator.getGamepads()[Q.gamepad?.index];if(p.right=q.buttons[15].pressed,p.left=q.buttons[14].pressed,p.down=q.buttons[13].pressed,p.up=q.buttons[12].pressed,p.a=q.buttons[0].pressed||q.buttons[2].pressed,p.b=q.buttons[1].pressed||q.buttons[3].pressed,p.menu=q.buttons[9].pressed,p.right||p.left||p.down||p.up||p.a||p.b||p.menu)v0(vJ())},100)});window.addEventListener("gamepaddisconnected",(Q)=>{clearInterval(NJ)});var SJ=AZ(XZ(),1);var YZ=function(Q){return F.colors[Q]},cV=function(Q,q){let Y=Q.currentMapId,H=Q.maps[Y];for(var D=0;D<q.height;D++)for(var O=0;O<q.width;O++){var A=H.getTile(q.x+O,q.y+D),b=F.colors.black,N=F.colors.white,I="";if(!!A&&!!A.type)b=YZ(A.type.bg),N=YZ(A.type.fg),I=A.options.sign||A.type.icon;S0.draw(O,D,I,N,b)}const m=KZ(Q,Y);for(let y=0;y<m.length;y++){let c=m[y];S0.drawOver(c.x-q.x,c.y-q.y,c.type.icon,YZ(c.type.color))}const o=A0(),h=Q.entities[o],s=((h||{}).options||{}).faction||void 0,d=u0(Q,Y);for(let y=0;y<d.length;y++){const c=d[y];let U0=s===c.options.faction?F.colors.white:YZ(c.options.faction.color);if(Z0.highlightEnemy&&!O0(c))U0=s===c.options.faction?F.colors.cybergreen:F.colors.cybermagenta;if(c===h)U0=F.colors.white;S0.drawOver(c.x-q.x,c.y-q.y,c.type.icon,U0)}if(!!h&&Z0.showUI){let y="";const c=r0(Q,o);if(c)y+=c.type.name+" ";const U0=JZ(Q,h);let $0=h.type.icon+" "+h.energy+"/"+h.energyMax+" "+y+"X:"+U0.A.name+" Y:"+U0.B.name,G0=P0.height-1;if(h.y-q.y>=P0.height-3)G0=0;S0.drawText(0,G0,"%c{white}%b{black}"+$0,q.width)}if(Q._menuOpen){const y=[];if(y.push("BotMos Menu"),y.push(""),h){y.push("Hull: "+h.type.icon+" ("+h.type.name+")"),y.push("Energy: "+h.energy+"/"+h.energyMax),y.push("Gold: "+h.gold),y.push("Matter: "+h.matter);const c=r0(Q,o);if(c)y.push("Tool: "+c.type.name);if(Z0.debug)y.push("DEBUG Position: "+h.x+","+h.y),y.push("DEBUG Map: "+h.mapId)}for(let c=0;c<y.length;c++)S0.drawText(0,c,"%c{#74ee15}%b{black}"+y[c],q.width)}for(let y=0;y<NZ.length;y++){let c=NZ[y];S0.drawText(0,y,"%c{green}%b{black}"+c,q.width)}};async function x0(Q){const q=Q.entities[A0()],Y=q?q:IJ,H=dV(Y);cV(Q,H),IJ=Y}async function bJ(Q){S0.setOptions(Q)}var dV=function(Q){return{x:Math.min(Math.max(0,Q.x-Math.floor(P0.width/2)),vZ.WIDTH-P0.width),y:Math.min(Math.max(0,Q.y-Math.floor(P0.height/2)),vZ.HEIGHT-P0.height),width:P0.width,height:P0.height}},S0=new SJ.Display(P0);document.body.appendChild(S0.getContainer());var IJ={x:0,y:0};var W0=new LZ;window.onload=function(){x0(W0.init())};window.onresize=function(){const Q=typeof window!=="undefined"?window.innerWidth:0,q=typeof window!=="undefined"?window.innerHeight:0;Z0.cameraWidth=Math.floor(Q/Z0.fontSize),Z0.cameraHeight=Math.floor(q/Z0.fontSize),P0.width=Math.floor(Z0.cameraWidth*(1/Z0.zoom)),P0.height=Math.floor(Z0.cameraHeight*(1/Z0.zoom)),bJ(P0),x0(W0.state)};fJ(function(Q){x0(W0.update(Q))});if(!window.BMActionLog)window.BMActionLog=function(){return W0.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(Q){x0(W0.play(Q))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){Z0.debug=!Z0.debug,x0(W0.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){Z0.showUI=!Z0.showUI,x0(W0.state)};if(Z0.debug){if(!window.BMDebugState)window.BMDebugState=function(){return W0.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){const Q=Object.keys(W0.state.maps).length,q=Object.keys(W0.state.entities).length,Y=Object.keys(W0.state.items).length,H=Object.keys(W0.state.tools).length;return`Maps: ${Q}, Entities: ${q}, Items: ${Y}, Tools: ${H}`}}window.focus();
