var MZ=Object.create;var{defineProperty:rJ,getPrototypeOf:OZ,getOwnPropertyNames:EZ}=Object;var jZ=Object.prototype.hasOwnProperty;var CJ=(Q,z,Y)=>{Y=Q!=null?MZ(OZ(Q)):{};const H=z||!Q||!Q.__esModule?rJ(Y,"default",{value:Q,enumerable:!0}):Y;for(let D of EZ(Q))if(!jZ.call(H,D))rJ(H,D,{get:()=>Q[D],enumerable:!0});return H};var CZ=(Q,z)=>()=>(z||Q((z={exports:{}}).exports,z),z.exports);var XJ=CZ(($J,YV)=>{var P0=function(Q){if(Q===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Q},Q0=function(Q,z){Q.prototype=Object.create(z.prototype),Q.prototype.constructor=Q,Q.__proto__=z};(function(Q,z){typeof $J==="object"&&typeof YV!=="undefined"?z($J):typeof define==="function"&&define.amd?define(["exports"],z):z(Q.ROT={})})($J,function(Q){var z=0.00000000023283064365386964,Y=function(){function X(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var G=X.prototype;return G.getSeed=function $(){return this._seed},G.setSeed=function $(K){return K=K<1?1/K:K,this._seed=K,this._s0=(K>>>0)*z,K=K*69069+1>>>0,this._s1=K*z,K=K*69069+1>>>0,this._s2=K*z,this._c=1,this},G.getUniform=function $(){var K=2091639*this._s0+this._c*z;return this._s0=this._s1,this._s1=this._s2,this._c=K|0,this._s2=K-this._c,this._s2},G.getUniformInt=function $(K,J){var V=Math.max(K,J),Z=Math.min(K,J);return Math.floor(this.getUniform()*(V-Z+1))+Z},G.getNormal=function $(K,J){if(K===void 0)K=0;if(J===void 0)J=1;var V,Z,U;do V=2*this.getUniform()-1,Z=2*this.getUniform()-1,U=V*V+Z*Z;while(U>1||U==0);var q=V*Math.sqrt(-2*Math.log(U)/U);return K+q*J},G.getPercentage=function $(){return 1+Math.floor(this.getUniform()*100)},G.getItem=function $(K){if(!K.length)return null;return K[Math.floor(this.getUniform()*K.length)]},G.shuffle=function $(K){var J=[],V=K.slice();while(V.length){var Z=V.indexOf(this.getItem(V));J.push(V.splice(Z,1)[0])}return J},G.getWeightedValue=function $(K){var J=0;for(var V in K)J+=K[V];var Z=this.getUniform()*J,U,q=0;for(U in K)if(q+=K[U],Z<q)return U;return U},G.getState=function $(){return[this._s0,this._s1,this._s2,this._c]},G.setState=function $(K){return this._s0=K[0],this._s1=K[1],this._s2=K[2],this._c=K[3],this},G.clone=function $(){var K=new X;return K.setState(this.getState())},X}(),H=new Y().setSeed(Date.now()),D=function(){function X(){}var G=X.prototype;return G.getContainer=function $(){return null},G.setOptions=function $(K){this._options=K},X}(),E=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._ctx=document.createElement("canvas").getContext("2d"),K}var $=G.prototype;return $.schedule=function K(J){requestAnimationFrame(J)},$.getContainer=function K(){return this._ctx.canvas},$.setOptions=function K(J){X.prototype.setOptions.call(this,J);var V=J.fontStyle?J.fontStyle+" ":"",Z=V+" "+J.fontSize+"px "+J.fontFamily;this._ctx.font=Z,this._updateSize(),this._ctx.font=Z,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},$.clear=function K(){this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height)},$.eventToPosition=function K(J,V){var Z=this._ctx.canvas,U=Z.getBoundingClientRect();if(J-=U.left,V-=U.top,J*=Z.width/U.width,V*=Z.height/U.height,J<0||V<0||J>=Z.width||V>=Z.height)return[-1,-1];return this._normalizedEventToPosition(J,V)},G}(D);function A(X,G){return(X%G+G)%G}function b(X,G,$){if(G===void 0)G=0;if($===void 0)$=1;if(X<G)return G;if(X>$)return $;return X}function N(X){return X.charAt(0).toUpperCase()+X.substring(1)}function I(X){for(var G=arguments.length,$=new Array(G>1?G-1:0),K=1;K<G;K++)$[K-1]=arguments[K];var J=I.map,V=function Z(U,q,L,B){if(X.charAt(B-1)=="%")return U.substring(1);if(!$.length)return U;var P=$[0],w=q||L,R=w.split(","),W=R.shift()||"",M=J[W.toLowerCase()];if(!M)return U;P=$.shift();var O=P[M].apply(P,R),f=W.charAt(0);if(f!=f.toLowerCase())O=N(O);return O};return X.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,V)}I.map={s:"toString"};var x=Object.freeze({mod:A,clamp:b,capitalize:N,format:I}),s=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._spacingX=0,K._spacingY=0,K._hexSize=0,K}var $=G.prototype;return $.draw=function K(J,V){var Z=J[0],U=J[1],q=J[2],L=J[3],B=J[4],P=[(Z+1)*this._spacingX,U*this._spacingY+this._hexSize];if(this._options.transpose)P.reverse();if(V)this._ctx.fillStyle=B,this._fill(P[0],P[1]);if(!q)return;this._ctx.fillStyle=L;var w=[].concat(q);for(var R=0;R<w.length;R++)this._ctx.fillText(w[R],P[0],Math.ceil(P[1]))},$.computeSize=function K(J,V){if(this._options.transpose)J+=V,V=J-V,J-=V;var Z=Math.floor(J/this._spacingX)-1,U=Math.floor((V-2*this._hexSize)/this._spacingY+1);return[Z,U]},$.computeFontSize=function K(J,V){if(this._options.transpose)J+=V,V=J-V,J-=V;var Z=2*J/((this._options.width+1)*Math.sqrt(3))-1,U=V/(2+1.5*(this._options.height-1)),q=Math.min(Z,U),L=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var B=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=L;var P=B/100;q=Math.floor(q)+1;var w=2*q/(this._options.spacing*(1+P/Math.sqrt(3)));return Math.ceil(w)-1},$._normalizedEventToPosition=function K(J,V){var Z;if(this._options.transpose)J+=V,V=J-V,J-=V,Z=this._ctx.canvas.width;else Z=this._ctx.canvas.height;var U=Z/this._options.height;if(V=Math.floor(V/U),A(V,2))J-=this._spacingX,J=1+2*Math.floor(J/(2*this._spacingX));else J=2*Math.floor(J/(2*this._spacingX));return[J,V]},$._fill=function K(J,V){var Z=this._hexSize,U=this._options.border,q=this._ctx;if(q.beginPath(),this._options.transpose)q.moveTo(J-Z+U,V),q.lineTo(J-Z/2+U,V+this._spacingX-U),q.lineTo(J+Z/2-U,V+this._spacingX-U),q.lineTo(J+Z-U,V),q.lineTo(J+Z/2-U,V-this._spacingX+U),q.lineTo(J-Z/2+U,V-this._spacingX+U),q.lineTo(J-Z+U,V);else q.moveTo(J,V-Z+U),q.lineTo(J+this._spacingX-U,V-Z/2+U),q.lineTo(J+this._spacingX-U,V+Z/2-U),q.lineTo(J,V+Z-U),q.lineTo(J-this._spacingX+U,V+Z/2-U),q.lineTo(J-this._spacingX+U,V-Z/2+U),q.lineTo(J,V-Z+U);q.fill()},$._updateSize=function K(){var J=this._options,V=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(J.spacing*(J.fontSize+V/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var Z,U;if(J.transpose)Z="height",U="width";else Z="width",U="height";this._ctx.canvas[Z]=Math.ceil((J.width+1)*this._spacingX),this._ctx.canvas[U]=Math.ceil((J.height-1)*this._spacingY+2*this._hexSize)},G}(E),m=function(){var X=function(G){Q0($,G);function $(){var J=G.call(this)||this;return J._spacingX=0,J._spacingY=0,J._canvasCache={},J}var K=$.prototype;return K.setOptions=function J(V){G.prototype.setOptions.call(this,V),this._canvasCache={}},K.draw=function J(V,Z){if($.cache)this._drawWithCache(V);else this._drawNoCache(V,Z)},K._drawWithCache=function J(V){var Z=V[0],U=V[1],q=V[2],L=V[3],B=V[4],P=""+q+L+B,w;if(P in this._canvasCache)w=this._canvasCache[P];else{var R=this._options.border;w=document.createElement("canvas");var W=w.getContext("2d");if(w.width=this._spacingX,w.height=this._spacingY,W.fillStyle=B,W.fillRect(R,R,w.width-R,w.height-R),q){W.fillStyle=L,W.font=this._ctx.font,W.textAlign="center",W.textBaseline="middle";var M=[].concat(q);for(var O=0;O<M.length;O++)W.fillText(M[O],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[P]=w}this._ctx.drawImage(w,Z*this._spacingX,U*this._spacingY)},K._drawNoCache=function J(V,Z){var U=V[0],q=V[1],L=V[2],B=V[3],P=V[4];if(Z){var w=this._options.border;this._ctx.fillStyle=P,this._ctx.fillRect(U*this._spacingX+w,q*this._spacingY+w,this._spacingX-w,this._spacingY-w)}if(!L)return;this._ctx.fillStyle=B;var R=[].concat(L);for(var W=0;W<R.length;W++)this._ctx.fillText(R[W],(U+0.5)*this._spacingX,Math.ceil((q+0.5)*this._spacingY))},K.computeSize=function J(V,Z){var U=Math.floor(V/this._spacingX),q=Math.floor(Z/this._spacingY);return[U,q]},K.computeFontSize=function J(V,Z){var U=Math.floor(V/this._options.width),q=Math.floor(Z/this._options.height),L=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var B=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=L;var P=B/100,w=P*q/U;if(w>1)q=Math.floor(q/w);return Math.floor(q/this._options.spacing)},K._normalizedEventToPosition=function J(V,Z){return[Math.floor(V/this._spacingX),Math.floor(Z/this._spacingY)]},K._updateSize=function J(){var V=this._options,Z=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(V.spacing*Z),this._spacingY=Math.ceil(V.spacing*V.fontSize),V.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=V.width*this._spacingX,this._ctx.canvas.height=V.height*this._spacingY},$}(E);return X.cache=!1,X}(),t=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._colorCanvas=document.createElement("canvas"),K}var $=G.prototype;return $.draw=function K(J,V){var Z=J[0],U=J[1],q=J[2],L=J[3],B=J[4],P=this._options.tileWidth,w=this._options.tileHeight;if(V)if(this._options.tileColorize)this._ctx.clearRect(Z*P,U*w,P,w);else this._ctx.fillStyle=B,this._ctx.fillRect(Z*P,U*w,P,w);if(!q)return;var R=[].concat(q),W=[].concat(L),M=[].concat(B);for(var O=0;O<R.length;O++){var f=this._options.tileMap[R[O]];if(!f)throw new Error("Char \""+R[O]+"\" not found in tileMap");if(this._options.tileColorize){var u=this._colorCanvas,h=u.getContext("2d");h.globalCompositeOperation="source-over",h.clearRect(0,0,P,w);var _=W[O],e=M[O];if(h.drawImage(this._options.tileSet,f[0],f[1],P,w,0,0,P,w),_!="transparent")h.fillStyle=_,h.globalCompositeOperation="source-atop",h.fillRect(0,0,P,w);if(e!="transparent")h.fillStyle=e,h.globalCompositeOperation="destination-over",h.fillRect(0,0,P,w);this._ctx.drawImage(u,Z*P,U*w,P,w)}else this._ctx.drawImage(this._options.tileSet,f[0],f[1],P,w,Z*P,U*w,P,w)}},$.computeSize=function K(J,V){var Z=Math.floor(J/this._options.tileWidth),U=Math.floor(V/this._options.tileHeight);return[Z,U]},$.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},$._normalizedEventToPosition=function K(J,V){return[Math.floor(J/this._options.tileWidth),Math.floor(V/this._options.tileHeight)]},$._updateSize=function K(){var J=this._options;this._ctx.canvas.width=J.width*J.tileWidth,this._ctx.canvas.height=J.height*J.tileHeight,this._colorCanvas.width=J.tileWidth,this._colorCanvas.height=J.tileHeight},G}(E);function l(X){var G,$;if(X in j)G=j[X];else{if(X.charAt(0)=="#"){var K=X.match(/[0-9a-f]/gi)||[],J=K.map(function(Z){return parseInt(Z,16)});if(J.length==3)G=J.map(function(Z){return Z*17});else{for(var V=0;V<3;V++)J[V+1]+=16*J[V],J.splice(V,1);G=J}}else if($=X.match(/rgb\(([0-9, ]+)\)/i))G=$[1].split(/\s*,\s*/).map(function(Z){return parseInt(Z)});else G=[0,0,0];j[X]=G}return G.slice()}function y(X){var G=X.slice();for(var $=arguments.length,K=new Array($>1?$-1:0),J=1;J<$;J++)K[J-1]=arguments[J];for(var V=0;V<3;V++)for(var Z=0;Z<K.length;Z++)G[V]+=K[Z][V];return G}function c(X){for(var G=arguments.length,$=new Array(G>1?G-1:0),K=1;K<G;K++)$[K-1]=arguments[K];for(var J=0;J<3;J++)for(var V=0;V<$.length;V++)X[J]+=$[V][J];return X}function $0(X){var G=X.slice();for(var $=arguments.length,K=new Array($>1?$-1:0),J=1;J<$;J++)K[J-1]=arguments[J];for(var V=0;V<3;V++){for(var Z=0;Z<K.length;Z++)G[V]*=K[Z][V]/255;G[V]=Math.round(G[V])}return G}function G0(X){for(var G=arguments.length,$=new Array(G>1?G-1:0),K=1;K<G;K++)$[K-1]=arguments[K];for(var J=0;J<3;J++){for(var V=0;V<$.length;V++)X[J]*=$[V][J]/255;X[J]=Math.round(X[J])}return X}function H0(X,G,$){if($===void 0)$=0.5;var K=X.slice();for(var J=0;J<3;J++)K[J]=Math.round(K[J]+$*(G[J]-X[J]));return K}var F0=H0;function C(X,G,$){if($===void 0)$=0.5;var K=g(X),J=g(G);for(var V=0;V<3;V++)K[V]+=$*(J[V]-K[V]);return o(K)}var k=C;function T(X,G){if(!(G instanceof Array))G=Math.round(H.getNormal(0,G));var $=X.slice();for(var K=0;K<3;K++)$[K]+=G instanceof Array?Math.round(H.getNormal(0,G[K])):G;return $}function g(X){var G=X[0]/255,$=X[1]/255,K=X[2]/255,J=Math.max(G,$,K),V=Math.min(G,$,K),Z=0,U,q=(J+V)/2;if(J==V)U=0;else{var L=J-V;switch(U=q>0.5?L/(2-J-V):L/(J+V),J){case G:Z=($-K)/L+($<K?6:0);break;case $:Z=(K-G)/L+2;break;case K:Z=(G-$)/L+4;break}Z/=6}return[Z,U,q]}function a(X,G,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return X+(G-X)*6*$;if($<0.5)return G;if($<0.6666666666666666)return X+(G-X)*(0.6666666666666666-$)*6;return X}function o(X){var G=X[2];if(X[1]==0)return G=Math.round(G*255),[G,G,G];else{var $=X[1],K=G<0.5?G*(1+$):G+$-G*$,J=2*G-K,V=a(J,K,X[0]+0.3333333333333333),Z=a(J,K,X[0]),U=a(J,K,X[0]-0.3333333333333333);return[Math.round(V*255),Math.round(Z*255),Math.round(U*255)]}}function S(X){var G=X.map(function($){return b($,0,255)});return"rgb("+G.join(",")+")"}function v(X){var G=X.map(function($){return b($,0,255).toString(16).padStart(2,"0")});return"#"+G.join("")}var j={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},n=Object.freeze({fromString:l,add:y,add_:c,multiply:$0,multiply_:G0,interpolate:H0,lerp:F0,interpolateHSL:C,lerpHSL:k,randomize:T,rgb2hsl:g,hsl2rgb:o,toRGB:S,toHex:v}),i=function(X){Q0(G,X);function G(){var K=X.call(this)||this;K._uniforms={};try{K._gl=K._initWebGL()}catch(J){alert(J.message)}return K}G.isSupported=function K(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var $=G.prototype;return $.schedule=function K(J){requestAnimationFrame(J)},$.getContainer=function K(){return this._gl.canvas},$.setOptions=function K(J){var V=this;X.prototype.setOptions.call(this,J),this._updateSize();var Z=this._options.tileSet;if(Z&&"complete"in Z&&!Z.complete)Z.addEventListener("load",function(){return V._updateTexture(Z)});else this._updateTexture(Z)},$.draw=function K(J,V){var Z=this._gl,U=this._options,q=J[0],L=J[1],B=J[2],P=J[3],w=J[4],R=Z.canvas.height-(L+1)*U.tileHeight;if(Z.scissor(q*U.tileWidth,R,U.tileWidth,U.tileHeight),V){if(U.tileColorize)Z.clearColor(0,0,0,0);else Z.clearColor.apply(Z,x0(w));Z.clear(Z.COLOR_BUFFER_BIT)}if(!B)return;var W=[].concat(B),M=[].concat(w),O=[].concat(P);Z.uniform2fv(this._uniforms.targetPosRel,[q,L]);for(var f=0;f<W.length;f++){var u=this._options.tileMap[W[f]];if(!u)throw new Error("Char \""+W[f]+"\" not found in tileMap");if(Z.uniform1f(this._uniforms.colorize,U.tileColorize?1:0),Z.uniform2fv(this._uniforms.tilesetPosAbs,u),U.tileColorize)Z.uniform4fv(this._uniforms.tint,x0(O[f])),Z.uniform4fv(this._uniforms.bg,x0(M[f]));Z.drawArrays(Z.TRIANGLE_STRIP,0,4)}},$.clear=function K(){var J=this._gl;J.clearColor.apply(J,x0(this._options.bg)),J.scissor(0,0,J.canvas.width,J.canvas.height),J.clear(J.COLOR_BUFFER_BIT)},$.computeSize=function K(J,V){var Z=Math.floor(J/this._options.tileWidth),U=Math.floor(V/this._options.tileHeight);return[Z,U]},$.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},$.eventToPosition=function K(J,V){var Z=this._gl.canvas,U=Z.getBoundingClientRect();if(J-=U.left,V-=U.top,J*=Z.width/U.width,V*=Z.height/U.height,J<0||V<0||J>=Z.width||V>=Z.height)return[-1,-1];return this._normalizedEventToPosition(J,V)},$._initWebGL=function K(){var J=this,V=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=V;var Z=E0(V,w0,z0);return V.useProgram(Z),B0(V),Z0.forEach(function(U){return J._uniforms[U]=V.getUniformLocation(Z,U)}),this._program=Z,V.enable(V.BLEND),V.blendFuncSeparate(V.SRC_ALPHA,V.ONE_MINUS_SRC_ALPHA,V.ONE,V.ONE_MINUS_SRC_ALPHA),V.enable(V.SCISSOR_TEST),V},$._normalizedEventToPosition=function K(J,V){return[Math.floor(J/this._options.tileWidth),Math.floor(V/this._options.tileHeight)]},$._updateSize=function K(){var J=this._gl,V=this._options,Z=[V.width*V.tileWidth,V.height*V.tileHeight];J.canvas.width=Z[0],J.canvas.height=Z[1],J.viewport(0,0,Z[0],Z[1]),J.uniform2fv(this._uniforms.tileSize,[V.tileWidth,V.tileHeight]),J.uniform2fv(this._uniforms.targetSize,Z)},$._updateTexture=function K(J){_0(this._gl,J)},G}(D),Z0=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],w0="\n#version 300 es\n\nin vec2 tilePosRel;\nout vec2 tilesetPosPx;\n\nuniform vec2 tilesetPosAbs;\nuniform vec2 tileSize;\nuniform vec2 targetSize;\nuniform vec2 targetPosRel;\n\nvoid main() {\n\tvec2 targetPosPx = (targetPosRel + tilePosRel) * tileSize;\n\tvec2 targetPosNdc = ((targetPosPx / targetSize)-0.5)*2.0;\n\ttargetPosNdc.y *= -1.0;\n\n\tgl_Position = vec4(targetPosNdc, 0.0, 1.0);\n\ttilesetPosPx = tilesetPosAbs + tilePosRel * tileSize;\n}".trim(),z0="\n#version 300 es\nprecision highp float;\n\nin vec2 tilesetPosPx;\nout vec4 fragColor;\nuniform sampler2D image;\nuniform bool colorize;\nuniform vec4 bg;\nuniform vec4 tint;\n\nvoid main() {\n\tfragColor = vec4(0, 0, 0, 1);\n\n\tvec4 texel = texelFetch(image, ivec2(tilesetPosPx), 0);\n\n\tif (colorize) {\n\t\ttexel.rgb = tint.a * tint.rgb + (1.0-tint.a) * texel.rgb;\n\t\tfragColor.rgb = texel.a*texel.rgb + (1.0-texel.a)*bg.rgb;\n\t\tfragColor.a = texel.a + (1.0-texel.a)*bg.a;\n\t} else {\n\t\tfragColor = texel;\n\t}\n}".trim();function E0(X,G,$){var K=X.createShader(X.VERTEX_SHADER);if(X.shaderSource(K,G),X.compileShader(K),!X.getShaderParameter(K,X.COMPILE_STATUS))throw new Error(X.getShaderInfoLog(K)||"");var J=X.createShader(X.FRAGMENT_SHADER);if(X.shaderSource(J,$),X.compileShader(J),!X.getShaderParameter(J,X.COMPILE_STATUS))throw new Error(X.getShaderInfoLog(J)||"");var V=X.createProgram();if(X.attachShader(V,K),X.attachShader(V,J),X.linkProgram(V),!X.getProgramParameter(V,X.LINK_STATUS))throw new Error(X.getProgramInfoLog(V)||"");return V}function B0(X){var G=new Float32Array([0,0,1,0,0,1,1,1]),$=X.createBuffer();X.bindBuffer(X.ARRAY_BUFFER,$),X.bufferData(X.ARRAY_BUFFER,G,X.STATIC_DRAW),X.enableVertexAttribArray(0),X.vertexAttribPointer(0,2,X.FLOAT,!1,0,0)}function _0(X,G){var $=X.createTexture();return X.bindTexture(X.TEXTURE_2D,$),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_MAG_FILTER,X.NEAREST),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_MIN_FILTER,X.NEAREST),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_WRAP_S,X.REPEAT),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_WRAP_T,X.REPEAT),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,0),X.texImage2D(X.TEXTURE_2D,0,X.RGBA,X.RGBA,X.UNSIGNED_BYTE,G),$}var v0={};function x0(X){if(!(X in v0)){var G;if(X=="transparent")G=[0,0,0,0];else if(X.indexOf("rgba")>-1){G=(X.match(/[\d.]+/g)||[]).map(Number);for(var $=0;$<3;$++)G[$]=G[$]/255}else G=l(X).map(function(K){return K/255}),G.push(1);v0[X]=G}return v0[X]}function kV(X){return"\x1B[0;48;5;"+YJ(X)+"m\x1B[2J"}function uV(X,G){return"\x1B[0;38;5;"+YJ(X)+";48;5;"+YJ(G)+"m"}function TV(X,G){return"\x1B["+(G+1)+";"+(X+1)+"H"}function YJ(X){var G=256,$=6,K=$/G,J=l(X),V=Math.floor(J[0]*K),Z=Math.floor(J[1]*K),U=Math.floor(J[2]*K);return V*36+Z*6+U*1+16}var gJ=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._offset=[0,0],K._cursor=[-1,-1],K._lastColor="",K}var $=G.prototype;return $.schedule=function K(J){setTimeout(J,16.666666666666668)},$.setOptions=function K(J){X.prototype.setOptions.call(this,J);var V=[J.width,J.height],Z=this.computeSize();this._offset=Z.map(function(U,q){return Math.floor((U-V[q])/2)})},$.clear=function K(){process.stdout.write(kV(this._options.bg))},$.draw=function K(J,V){var Z=J[0],U=J[1],q=J[2],L=J[3],B=J[4],P=this._offset[0]+Z,w=this._offset[1]+U,R=this.computeSize();if(P<0||P>=R[0])return;if(w<0||w>=R[1])return;if(P!==this._cursor[0]||w!==this._cursor[1])process.stdout.write(TV(P,w)),this._cursor[0]=P,this._cursor[1]=w;if(V){if(!q)q=" "}if(!q)return;var W=uV(L,B);if(W!==this._lastColor)process.stdout.write(W),this._lastColor=W;if(q!="\t"){var M=[].concat(q);process.stdout.write(M[0])}if(this._cursor[0]++,this._cursor[0]>=R[0])this._cursor[0]=0,this._cursor[1]++},$.computeFontSize=function K(){throw new Error("Terminal backend has no notion of font size")},$.eventToPosition=function K(J,V){return[J,V]},$.computeSize=function K(){return[process.stdout.columns,process.stdout.rows]},G}(D),gV=/%([bc]){([^}]*)}/g,N0=0,b0=1,PJ=2,HJ=3;function hV(X,G){var $={width:0,height:1},K=FJ(X,G),J=0;for(var V=0;V<K.length;V++){var Z=K[V];switch(Z.type){case N0:J+=Z.value.length;break;case b0:$.height++,$.width=Math.max($.width,J),J=0;break}}return $.width=Math.max($.width,J),$}function FJ(X,G){var $=[],K=0;X.replace(gV,function(V,Z,U,q){var L=X.substring(K,q);if(L.length)$.push({type:N0,value:L});return $.push({type:Z=="c"?PJ:HJ,value:U.trim()}),K=q+V.length,""});var J=X.substring(K);if(J.length)$.push({type:N0,value:J});return xV($,G)}function xV(X,G){if(!G)G=Infinity;var $=0,K=0,J=-1;while($<X.length){var V=X[$];if(V.type==b0)K=0,J=-1;if(V.type!=N0){$++;continue}while(K==0&&V.value.charAt(0)==" ")V.value=V.value.substring(1);var Z=V.value.indexOf("\n");if(Z!=-1){V.value=o0(X,$,Z,!0);var U=V.value.split("");while(U.length&&U[U.length-1]==" ")U.pop();V.value=U.join("")}if(!V.value.length){X.splice($,1);continue}if(K+V.value.length>G){var q=-1;while(!0){var L=V.value.indexOf(" ",q+1);if(L==-1)break;if(K+L>G)break;q=L}if(q!=-1)V.value=o0(X,$,q,!0);else if(J!=-1){var B=X[J],P=B.value.lastIndexOf(" ");B.value=o0(X,J,P,!0),$=J}else V.value=o0(X,$,G-K,!1)}else if(K+=V.value.length,V.value.indexOf(" ")!=-1)J=$;$++}X.push({type:b0});var w=null;for(var R=0;R<X.length;R++){var W=X[R];switch(W.type){case N0:w=W;break;case b0:if(w){var M=w.value.split("");while(M.length&&M[M.length-1]==" ")M.pop();w.value=M.join("")}w=null;break}}return X.pop(),X}function o0(X,G,$,K){var J={type:b0},V={type:N0,value:X[G].value.substring($+(K?1:0))};return X.splice(G+1,0,J,V),X[G].value.substring(0,$)}var mV=Object.freeze({TYPE_TEXT:N0,TYPE_NEWLINE:b0,TYPE_FG:PJ,TYPE_BG:HJ,measure:hV,tokenize:FJ}),wJ=80,DJ=25,X0={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},_V={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},yV={hex:s,rect:m,tile:t,"tile-gl":i,term:gJ},pV={width:wJ,height:DJ,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},cV=function(){var X=function(){function G(K){if(K===void 0)K={};this._data={},this._dirty=!1,this._options={},K=Object.assign({},pV,K),this.setOptions(K),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var $=G.prototype;return $.DEBUG=function K(J,V,Z){var U=[this._options.bg,this._options.fg];this.draw(J,V,null,null,U[Z%U.length])},$.clear=function K(){this._data={},this._dirty=!0},$.setOptions=function K(J){if(Object.assign(this._options,J),J.width||J.height||J.fontSize||J.fontFamily||J.spacing||J.layout){if(J.layout){var V=yV[J.layout];this._backend=new V}this._backend.setOptions(this._options),this._dirty=!0}return this},$.getOptions=function K(){return this._options},$.getContainer=function K(){return this._backend.getContainer()},$.computeSize=function K(J,V){return this._backend.computeSize(J,V)},$.computeFontSize=function K(J,V){return this._backend.computeFontSize(J,V)},$.computeTileSize=function K(J,V){var Z=Math.floor(J/this._options.width),U=Math.floor(V/this._options.height);return[Z,U]},$.eventToPosition=function K(J){var V,Z;if("touches"in J)V=J.touches[0].clientX,Z=J.touches[0].clientY;else V=J.clientX,Z=J.clientY;return this._backend.eventToPosition(V,Z)},$.draw=function K(J,V,Z,U,q){if(!U)U=this._options.fg;if(!q)q=this._options.bg;var L=J+","+V;if(this._data[L]=[J,V,Z,U,q],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[L]=!0},$.drawOver=function K(J,V,Z,U,q){var L=J+","+V,B=this._data[L];if(B)B[2]=Z||B[2],B[3]=U||B[3],B[4]=q||B[4];else this.draw(J,V,Z,U,q)},$.drawText=function K(J,V,Z,U){var q=null,L=null,B=J,P=V,w=1;if(!U)U=this._options.width-J;var R=FJ(Z,U);while(R.length){var W=R.shift();switch(W.type){case N0:var M=!1,O=!1,f=!1,u=!1;for(var h=0;h<W.value.length;h++){var _=W.value.charCodeAt(h),e=W.value.charAt(h);if(this._options.layout==="term"){var r=_>>8,U0=r===17||r>=46&&r<=159||r>=172&&r<=215||_>=43360&&_<=43391;if(U0){this.draw(B+0,P,e,q,L),this.draw(B+1,P,"\t",q,L),B+=2;continue}}if(f=_>65280&&_<65377||_>65500&&_<65512||_>65518,M=e.charCodeAt(0)==32||e.charCodeAt(0)==12288,u&&!f&&!M)B++;if(f&&!O)B++;this.draw(B++,P,e,q,L),O=M,u=f}break;case PJ:q=W.value||null;break;case HJ:L=W.value||null;break;case b0:B=J,P++,w++;break}}return w},$._tick=function K(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var J in this._data)this._draw(J,!1)}else for(var V in this._dirty)this._draw(V,!0);this._dirty=!1},$._draw=function K(J,V){var Z=this._data[J];if(Z[4]!=this._options.bg)V=!0;this._backend.draw(Z,V)},G}();return X.Rect=m,X.Hex=s,X.Tile=t,X.TileGL=i,X.Term=gJ,X}(),dV=function(){function X($){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,$),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var K=0;K<this._options.order;K++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var G=X.prototype;return G.clear=function $(){this._data={},this._priorValues={}},G.generate=function $(){var K=[this._sample(this._prefix)];while(K[K.length-1]!=this._boundary)K.push(this._sample(K));return this._join(K.slice(0,-1))},G.observe=function $(K){var J=this._split(K);for(var V=0;V<J.length;V++)this._priorValues[J[V]]=this._options.prior;J=this._prefix.concat(J).concat(this._suffix);for(var Z=this._options.order;Z<J.length;Z++){var U=J.slice(Z-this._options.order,Z),q=J[Z];for(var L=0;L<U.length;L++){var B=U.slice(L);this._observeEvent(B,q)}}},G.getStats=function $(){var K=[],J=Object.keys(this._priorValues).length;J--,K.push("distinct samples: "+J);var V=Object.keys(this._data).length,Z=0;for(var U in this._data)Z+=Object.keys(this._data[U]).length;return K.push("dictionary size (contexts): "+V),K.push("dictionary size (events): "+Z),K.join(", ")},G._split=function $(K){return K.split(this._options.words?/\s+/:"")},G._join=function $(K){return K.join(this._options.words?" ":"")},G._observeEvent=function $(K,J){var V=this._join(K);if(!(V in this._data))this._data[V]={};var Z=this._data[V];if(!(J in Z))Z[J]=0;Z[J]++},G._sample=function $(K){K=this._backoff(K);var J=this._join(K),V=this._data[J],Z={};if(this._options.prior){for(var U in this._priorValues)Z[U]=this._priorValues[U];for(var q in V)Z[q]+=V[q]}else Z=V;return H.getWeightedValue(Z)},G._backoff=function $(K){if(K.length>this._options.order)K=K.slice(-this._options.order);else if(K.length<this._options.order)K=this._prefix.slice(0,this._options.order-K.length).concat(K);while(!(this._join(K)in this._data)&&K.length>0)K=K.slice(1);return K},X}(),hJ=function(){function X(){this.heap=[],this.timestamp=0}var G=X.prototype;return G.lessThan=function $(K,J){return K.key==J.key?K.timestamp<J.timestamp:K.key<J.key},G.shift=function $(K){this.heap=this.heap.map(function(J){var{key:V,value:Z,timestamp:U}=J;return{key:V+K,value:Z,timestamp:U}})},G.len=function $(){return this.heap.length},G.push=function $(K,J){this.timestamp+=1;var V=this.len();this.heap.push({value:K,timestamp:this.timestamp,key:J}),this.updateUp(V)},G.pop=function $(){if(this.len()==0)throw new Error("no element to pop");var K=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return K},G.find=function $(K){for(var J=0;J<this.len();J++)if(K==this.heap[J].value)return this.heap[J];return null},G.remove=function $(K){var J=null;for(var V=0;V<this.len();V++)if(K==this.heap[V].value)J=V;if(J===null)return!1;if(this.len()>1){var Z=this.heap.pop();if(Z.value!=K)this.heap[J]=Z,this.updateDown(J);return!0}else this.heap.pop();return!0},G.parentNode=function $(K){return Math.floor((K-1)/2)},G.leftChildNode=function $(K){return 2*K+1},G.rightChildNode=function $(K){return 2*K+2},G.existNode=function $(K){return K>=0&&K<this.heap.length},G.swap=function $(K,J){var V=this.heap[K];this.heap[K]=this.heap[J],this.heap[J]=V},G.minNode=function $(K){var J=K.filter(this.existNode.bind(this)),V=J[0];for(var q=J,Z=Array.isArray(q),U=0,q=Z?q:q[Symbol.iterator]();;){var L;if(Z){if(U>=q.length)break;L=q[U++]}else{if(U=q.next(),U.done)break;L=U.value}var B=L;if(this.lessThan(this.heap[B],this.heap[V]))V=B}return V},G.updateUp=function $(K){if(K==0)return;var J=this.parentNode(K);if(this.existNode(J)&&this.lessThan(this.heap[K],this.heap[J]))this.swap(K,J),this.updateUp(J)},G.updateDown=function $(K){var J=this.leftChildNode(K),V=this.rightChildNode(K);if(!this.existNode(J))return;var Z=this.minNode([K,J,V]);if(Z!=K)this.swap(K,Z),this.updateDown(Z)},G.debugPrint=function $(){console.log(this.heap)},X}(),xJ=function(){function X(){this._time=0,this._events=new hJ}var G=X.prototype;return G.getTime=function $(){return this._time},G.clear=function $(){return this._events=new hJ,this},G.add=function $(K,J){this._events.push(K,J)},G.get=function $(){if(!this._events.len())return null;var K=this._events.pop(),J=K.key,V=K.value;if(J>0)this._time+=J,this._events.shift(-J);return V},G.getEventTime=function $(K){var J=this._events.find(K);if(J){var V=J.key;return V}return},G.remove=function $(K){return this._events.remove(K)},X}(),WJ=function(){function X(){this._queue=new xJ,this._repeat=[],this._current=null}var G=X.prototype;return G.getTime=function $(){return this._queue.getTime()},G.add=function $(K,J){if(J)this._repeat.push(K);return this},G.getTimeOf=function $(K){return this._queue.getEventTime(K)},G.clear=function $(){return this._queue.clear(),this._repeat=[],this._current=null,this},G.remove=function $(K){var J=this._queue.remove(K),V=this._repeat.indexOf(K);if(V!=-1)this._repeat.splice(V,1);if(this._current==K)this._current=null;return J},G.next=function $(){return this._current=this._queue.get(),this._current},X}(),lV=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.add=function K(J,V){return this._queue.add(J,0),X.prototype.add.call(this,J,V)},$.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return X.prototype.next.call(this)},G}(WJ),nV=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.add=function K(J,V,Z){return this._queue.add(J,Z!==void 0?Z:1/J.getSpeed()),X.prototype.add.call(this,J,V)},$.next=function K(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return X.prototype.next.call(this)},G}(WJ),rV=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._defaultDuration=1,K._duration=K._defaultDuration,K}var $=G.prototype;return $.add=function K(J,V,Z){return this._queue.add(J,Z||this._defaultDuration),X.prototype.add.call(this,J,V)},$.clear=function K(){return this._duration=this._defaultDuration,X.prototype.clear.call(this)},$.remove=function K(J){if(J==this._current)this._duration=this._defaultDuration;return X.prototype.remove.call(this,J)},$.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return X.prototype.next.call(this)},$.setDuration=function K(J){if(this._current)this._duration=J;return this},G}(WJ),sV={Simple:lV,Speed:nV,Action:rV},RJ=function(){function X($,K){if(K===void 0)K={};this._lightPasses=$,this._options=Object.assign({topology:8},K)}var G=X.prototype;return G._getCircle=function $(K,J,V){var Z=[],U,q,L;switch(this._options.topology){case 4:q=1,L=[0,1],U=[X0[8][7],X0[8][1],X0[8][3],X0[8][5]];break;case 6:U=X0[6],q=1,L=[-1,1];break;case 8:U=X0[4],q=2,L=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var B=K+L[0]*V,P=J+L[1]*V;for(var w=0;w<U.length;w++)for(var R=0;R<V*q;R++)Z.push([B,P]),B+=U[w][0],P+=U[w][1];return Z},X}(),oV=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.compute=function K(J,V,Z,U){if(U(J,V,0,1),!this._lightPasses(J,V))return;var q=[],L,B,P,w,R;for(var W=1;W<=Z;W++){var M=this._getCircle(J,V,W),O=360/M.length;for(var f=0;f<M.length;f++){if(P=M[f][0],w=M[f][1],L=O*(f-0.5),B=L+O,R=!this._lightPasses(P,w),this._visibleCoords(Math.floor(L),Math.ceil(B),R,q))U(P,w,W,1);if(q.length==2&&q[0]==0&&q[1]==360)return}}},$._visibleCoords=function K(J,V,Z,U){if(J<0){var q=this._visibleCoords(0,V,Z,U),L=this._visibleCoords(360+J,360,Z,U);return q||L}var B=0;while(B<U.length&&U[B]<J)B++;if(B==U.length){if(Z)U.push(J,V);return!0}var P=0;if(B%2){while(B<U.length&&U[B]<V)B++,P++;if(P==0)return!1;if(Z)if(P%2)U.splice(B-P,P,V);else U.splice(B-P,P);return!0}else{while(B<U.length&&U[B]<V)B++,P++;if(J==U[B-P]&&P==1)return!1;if(Z)if(P%2)U.splice(B-P,P,J);else U.splice(B-P,P,J,V);return!0}},G}(RJ),aV=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.compute=function K(J,V,Z,U){if(U(J,V,0,1),!this._lightPasses(J,V))return;var q=[],L,B,P,w,R,W;for(var M=1;M<=Z;M++){var O=this._getCircle(J,V,M),f=O.length;for(var u=0;u<f;u++){if(L=O[u][0],B=O[u][1],w=[u?2*u-1:2*f-1,2*f],R=[2*u+1,2*f],P=!this._lightPasses(L,B),W=this._checkVisibility(w,R,P,q),W)U(L,B,M,W);if(q.length==2&&q[0][0]==0&&q[1][0]==q[1][1])return}}},$._checkVisibility=function K(J,V,Z,U){if(J[0]>V[0]){var q=this._checkVisibility(J,[J[1],J[1]],Z,U),L=this._checkVisibility([0,1],V,Z,U);return(q+L)/2}var B=0,P=!1;while(B<U.length){var w=U[B],R=w[0]*J[1]-J[0]*w[1];if(R>=0){if(R==0&&!(B%2))P=!0;break}B++}var W=U.length,M=!1;while(W--){var O=U[W],f=V[0]*O[1]-O[0]*V[1];if(f>=0){if(f==0&&W%2)M=!0;break}}var u=!0;if(B==W&&(P||M))u=!1;else if(P&&M&&B+1==W&&W%2)u=!1;else if(B>W&&B%2)u=!1;if(!u)return 0;var h,_=W-B+1;if(_%2)if(B%2){var e=U[B];if(h=(V[0]*e[1]-e[0]*V[1])/(e[1]*V[1]),Z)U.splice(B,_,V)}else{var r=U[W];if(h=(r[0]*J[1]-J[0]*r[1])/(J[1]*r[1]),Z)U.splice(B,_,J)}else if(B%2){var U0=U[B],L0=U[W];if(h=(L0[0]*U0[1]-U0[0]*L0[1])/(U0[1]*L0[1]),Z)U.splice(B,_)}else{if(Z)U.splice(B,_,J,V);return 1}var j0=(V[0]*J[1]-J[0]*V[1])/(J[1]*V[1]);return h/j0},G}(RJ),f0=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],iV=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.compute=function K(J,V,Z,U){U(J,V,0,1);for(var q=0;q<f0.length;q++)this._renderOctant(J,V,f0[q],Z,U)},$.compute180=function K(J,V,Z,U,q){q(J,V,0,1);var L=(U-1+8)%8,B=(U-2+8)%8,P=(U+1+8)%8;this._renderOctant(J,V,f0[B],Z,q),this._renderOctant(J,V,f0[L],Z,q),this._renderOctant(J,V,f0[U],Z,q),this._renderOctant(J,V,f0[P],Z,q)},$.compute90=function K(J,V,Z,U,q){q(J,V,0,1);var L=(U-1+8)%8;this._renderOctant(J,V,f0[U],Z,q),this._renderOctant(J,V,f0[L],Z,q)},$._renderOctant=function K(J,V,Z,U,q){this._castVisibility(J,V,1,1,0,U+1,Z[0],Z[1],Z[2],Z[3],q)},$._castVisibility=function K(J,V,Z,U,q,L,B,P,w,R,W){if(U<q)return;for(var M=Z;M<=L;M++){var O=-M-1,f=-M,u=!1,h=0;while(O<=0){O+=1;var _=J+O*B+f*P,e=V+O*w+f*R,r=(O-0.5)/(f+0.5),U0=(O+0.5)/(f-0.5);if(U0>U)continue;if(r<q)break;if(O*O+f*f<L*L)W(_,e,M,1);if(!u){if(!this._lightPasses(_,e)&&M<L)u=!0,this._castVisibility(J,V,M+1,U,r,L,B,P,w,R,W),h=U0}else{if(!this._lightPasses(_,e)){h=U0;continue}u=!1,U=h}}if(u)break}},G}(RJ),eV={DiscreteShadowcasting:oV,PreciseShadowcasting:aV,RecursiveShadowcasting:iV},k0=function(){function X($,K){if($===void 0)$=wJ;if(K===void 0)K=DJ;this._width=$,this._height=K}var G=X.prototype;return G._fillMap=function $(K){var J=[];for(var V=0;V<this._width;V++){J.push([]);for(var Z=0;Z<this._height;Z++)J[V].push(K)}return J},X}(),tV=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.create=function K(J){var V=this._width-1,Z=this._height-1;for(var U=0;U<=V;U++)for(var q=0;q<=Z;q++){var L=U&&q&&U<V&&q<Z;J(U,q,L?0:1)}return this},G}(k0),mJ=function(X){Q0(G,X);function G(K,J){var V=X.call(this,K,J)||this;return V._rooms=[],V._corridors=[],V}var $=G.prototype;return $.getRooms=function K(){return this._rooms},$.getCorridors=function K(){return this._corridors},G}(k0),_J=function X(){},a0=function(X){Q0(G,X);function G(K,J,V,Z,U,q){var L=X.call(this)||this;if(L._x1=K,L._y1=J,L._x2=V,L._y2=Z,L._doors={},U!==void 0&&q!==void 0)L.addDoor(U,q);return L}G.createRandomAt=function K(J,V,Z,U,q){var L=q.roomWidth[0],B=q.roomWidth[1],P=H.getUniformInt(L,B);L=q.roomHeight[0],B=q.roomHeight[1];var w=H.getUniformInt(L,B);if(Z==1){var R=V-Math.floor(H.getUniform()*w);return new this(J+1,R,J+P,R+w-1,J,V)}if(Z==-1){var W=V-Math.floor(H.getUniform()*w);return new this(J-P,W,J-1,W+w-1,J,V)}if(U==1){var M=J-Math.floor(H.getUniform()*P);return new this(M,V+1,M+P-1,V+w,J,V)}if(U==-1){var O=J-Math.floor(H.getUniform()*P);return new this(O,V-w,O+P-1,V-1,J,V)}throw new Error("dx or dy must be 1 or -1")},G.createRandomCenter=function K(J,V,Z){var U=Z.roomWidth[0],q=Z.roomWidth[1],L=H.getUniformInt(U,q);U=Z.roomHeight[0],q=Z.roomHeight[1];var B=H.getUniformInt(U,q),P=J-Math.floor(H.getUniform()*L),w=V-Math.floor(H.getUniform()*B),R=P+L-1,W=w+B-1;return new this(P,w,R,W)},G.createRandom=function K(J,V,Z){var U=Z.roomWidth[0],q=Z.roomWidth[1],L=H.getUniformInt(U,q);U=Z.roomHeight[0],q=Z.roomHeight[1];var B=H.getUniformInt(U,q),P=J-L-1,w=V-B-1,R=1+Math.floor(H.getUniform()*P),W=1+Math.floor(H.getUniform()*w),M=R+L-1,O=W+B-1;return new this(R,W,M,O)};var $=G.prototype;return $.addDoor=function K(J,V){return this._doors[J+","+V]=1,this},$.getDoors=function K(J){for(var V in this._doors){var Z=V.split(",");J(parseInt(Z[0]),parseInt(Z[1]))}return this},$.clearDoors=function K(){return this._doors={},this},$.addDoors=function K(J){var V=this._x1-1,Z=this._x2+1,U=this._y1-1,q=this._y2+1;for(var L=V;L<=Z;L++)for(var B=U;B<=q;B++){if(L!=V&&L!=Z&&B!=U&&B!=q)continue;if(J(L,B))continue;this.addDoor(L,B)}return this},$.debug=function K(){console.log("room",this._x1,this._y1,this._x2,this._y2)},$.isValid=function K(J,V){var Z=this._x1-1,U=this._x2+1,q=this._y1-1,L=this._y2+1;for(var B=Z;B<=U;B++)for(var P=q;P<=L;P++)if(B==Z||B==U||P==q||P==L){if(!J(B,P))return!1}else if(!V(B,P))return!1;return!0},$.create=function K(J){var V=this._x1-1,Z=this._x2+1,U=this._y1-1,q=this._y2+1,L=0;for(var B=V;B<=Z;B++)for(var P=U;P<=q;P++){if(B+","+P in this._doors)L=2;else if(B==V||B==Z||P==U||P==q)L=1;else L=0;J(B,P,L)}},$.getCenter=function K(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},$.getLeft=function K(){return this._x1},$.getRight=function K(){return this._x2},$.getTop=function K(){return this._y1},$.getBottom=function K(){return this._y2},G}(_J),MJ=function(X){Q0(G,X);function G(K,J,V,Z){var U=X.call(this)||this;return U._startX=K,U._startY=J,U._endX=V,U._endY=Z,U._endsWithAWall=!0,U}G.createRandomAt=function K(J,V,Z,U,q){var L=q.corridorLength[0],B=q.corridorLength[1],P=H.getUniformInt(L,B);return new this(J,V,J+Z*P,V+U*P)};var $=G.prototype;return $.debug=function K(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},$.isValid=function K(J,V){var Z=this._startX,U=this._startY,q=this._endX-Z,L=this._endY-U,B=1+Math.max(Math.abs(q),Math.abs(L));if(q)q=q/Math.abs(q);if(L)L=L/Math.abs(L);var P=L,w=-q,R=!0;for(var W=0;W<B;W++){var M=Z+W*q,O=U+W*L;if(!V(M,O))R=!1;if(!J(M+P,O+w))R=!1;if(!J(M-P,O-w))R=!1;if(!R){B=W,this._endX=M-q,this._endY=O-L;break}}if(B==0)return!1;if(B==1&&J(this._endX+q,this._endY+L))return!1;var f=!J(this._endX+q+P,this._endY+L+w),u=!J(this._endX+q-P,this._endY+L-w);if(this._endsWithAWall=J(this._endX+q,this._endY+L),(f||u)&&this._endsWithAWall)return!1;return!0},$.create=function K(J){var V=this._startX,Z=this._startY,U=this._endX-V,q=this._endY-Z,L=1+Math.max(Math.abs(U),Math.abs(q));if(U)U=U/Math.abs(U);if(q)q=q/Math.abs(q);for(var B=0;B<L;B++){var P=V+B*U,w=Z+B*q;J(P,w,0)}return!0},$.createPriorityWalls=function K(J){if(!this._endsWithAWall)return;var V=this._startX,Z=this._startY,U=this._endX-V,q=this._endY-Z;if(U)U=U/Math.abs(U);if(q)q=q/Math.abs(q);var L=q,B=-U;J(this._endX+U,this._endY+q),J(this._endX+L,this._endY+B),J(this._endX-L,this._endY-B)},G}(_J),JZ=function(X){Q0(G,X);function G(K,J,V){var Z=X.call(this,K,J)||this;return Z._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(Z._options,V),Z._map=[],Z._dug=0,Z._roomAttempts=20,Z._corridorAttempts=20,Z._connected=[],Z._unconnected=[],Z._digCallback=Z._digCallback.bind(P0(P0(Z))),Z._canBeDugCallback=Z._canBeDugCallback.bind(P0(P0(Z))),Z._isWallCallback=Z._isWallCallback.bind(P0(P0(Z))),Z}var $=G.prototype;return $.create=function K(J){var V=Date.now();while(!0){var Z=Date.now();if(Z-V>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(J)for(var U=0;U<this._width;U++)for(var q=0;q<this._height;q++)J(U,q,this._map[U][q]);return this},$._generateRooms=function K(){var J=this._width-2,V=this._height-2,Z;do if(Z=this._generateRoom(),this._dug/(J*V)>this._options.roomDugPercentage)break;while(Z)},$._generateRoom=function K(){var J=0;while(J<this._roomAttempts){J++;var V=a0.createRandom(this._width,this._height,this._options);if(!V.isValid(this._isWallCallback,this._canBeDugCallback))continue;return V.create(this._digCallback),this._rooms.push(V),V}return null},$._generateCorridors=function K(){var J=0;while(J<this._corridorAttempts){J++,this._corridors=[],this._map=this._fillMap(1);for(var V=0;V<this._rooms.length;V++){var Z=this._rooms[V];Z.clearDoors(),Z.create(this._digCallback)}if(this._unconnected=H.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var U=H.getItem(this._connected);if(!U)break;var q=this._closestRoom(this._unconnected,U);if(!q)break;var L=this._closestRoom(this._connected,q);if(!L)break;var B=this._connectRooms(q,L);if(!B)break;if(!this._unconnected.length)return!0}}return!1},$._closestRoom=function K(J,V){var Z=Infinity,U=V.getCenter(),q=null;for(var L=0;L<J.length;L++){var B=J[L],P=B.getCenter(),w=P[0]-U[0],R=P[1]-U[1],W=w*w+R*R;if(W<Z)Z=W,q=B}return q},$._connectRooms=function K(J,V){var Z=J.getCenter(),U=V.getCenter(),q=U[0]-Z[0],L=U[1]-Z[1],B,P,w,R,W,M,O;if(Math.abs(q)<Math.abs(L))w=L>0?2:0,R=(w+2)%4,W=V.getLeft(),M=V.getRight(),O=0;else w=q>0?1:3,R=(w+2)%4,W=V.getTop(),M=V.getBottom(),O=1;if(B=this._placeInWall(J,w),!B)return!1;if(B[O]>=W&&B[O]<=M){P=B.slice();var f=0;switch(R){case 0:f=V.getTop()-1;break;case 1:f=V.getRight()+1;break;case 2:f=V.getBottom()+1;break;case 3:f=V.getLeft()-1;break}P[(O+1)%2]=f,this._digLine([B,P])}else if(B[O]<W-1||B[O]>M+1){var u=B[O]-U[O],h=0;switch(R){case 0:case 1:h=u<0?3:1;break;case 2:case 3:h=u<0?1:3;break}if(R=(R+h)%4,P=this._placeInWall(V,R),!P)return!1;var _=[0,0];_[O]=B[O];var e=(O+1)%2;_[e]=P[e],this._digLine([B,_,P])}else{var r=(O+1)%2;if(P=this._placeInWall(V,R),!P)return!1;var U0=Math.round((P[r]+B[r])/2),L0=[0,0],j0=[0,0];L0[O]=B[O],L0[r]=U0,j0[O]=P[O],j0[r]=U0,this._digLine([B,L0,j0,P])}if(J.addDoor(B[0],B[1]),V.addDoor(P[0],P[1]),O=this._unconnected.indexOf(J),O!=-1)this._unconnected.splice(O,1),this._connected.push(J);if(O=this._unconnected.indexOf(V),O!=-1)this._unconnected.splice(O,1),this._connected.push(V);return!0},$._placeInWall=function K(J,V){var Z=[0,0],U=[0,0],q=0;switch(V){case 0:U=[1,0],Z=[J.getLeft(),J.getTop()-1],q=J.getRight()-J.getLeft()+1;break;case 1:U=[0,1],Z=[J.getRight()+1,J.getTop()],q=J.getBottom()-J.getTop()+1;break;case 2:U=[1,0],Z=[J.getLeft(),J.getBottom()+1],q=J.getRight()-J.getLeft()+1;break;case 3:U=[0,1],Z=[J.getLeft()-1,J.getTop()],q=J.getBottom()-J.getTop()+1;break}var L=[],B=-2;for(var P=0;P<q;P++){var w=Z[0]+P*U[0],R=Z[1]+P*U[1];L.push(null);var W=this._map[w][R]==1;if(W){if(B!=P-1)L[P]=[w,R]}else if(B=P,P)L[P-1]=null}for(var M=L.length-1;M>=0;M--)if(!L[M])L.splice(M,1);return L.length?H.getItem(L):null},$._digLine=function K(J){for(var V=1;V<J.length;V++){var Z=J[V-1],U=J[V],q=new MJ(Z[0],Z[1],U[0],U[1]);q.create(this._digCallback),this._corridors.push(q)}},$._digCallback=function K(J,V,Z){if(this._map[J][V]=Z,Z==0)this._dug++},$._isWallCallback=function K(J,V){if(J<0||V<0||J>=this._width||V>=this._height)return!1;return this._map[J][V]==1},$._canBeDugCallback=function K(J,V){if(J<1||V<1||J+1>=this._width||V+1>=this._height)return!1;return this._map[J][V]==1},G}(mJ),VZ=function(X){Q0(G,X);function G(K,J,V){var Z;if(V===void 0)V={};return Z=X.call(this,K,J)||this,Z._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},Z.setOptions(V),Z._dirs=X0[Z._options.topology],Z._map=Z._fillMap(0),Z}var $=G.prototype;return $.randomize=function K(J){for(var V=0;V<this._width;V++)for(var Z=0;Z<this._height;Z++)this._map[V][Z]=H.getUniform()<J?1:0;return this},$.setOptions=function K(J){Object.assign(this._options,J)},$.set=function K(J,V,Z){this._map[J][V]=Z},$.create=function K(J){var V=this._fillMap(0),Z=this._options.born,U=this._options.survive;for(var q=0;q<this._height;q++){var L=1,B=0;if(this._options.topology==6)L=2,B=q%2;for(var P=B;P<this._width;P+=L){var w=this._map[P][q],R=this._getNeighbors(P,q);if(w&&U.indexOf(R)!=-1)V[P][q]=1;else if(!w&&Z.indexOf(R)!=-1)V[P][q]=1}}this._map=V,J&&this._serviceCallback(J)},$._serviceCallback=function K(J){for(var V=0;V<this._height;V++){var Z=1,U=0;if(this._options.topology==6)Z=2,U=V%2;for(var q=U;q<this._width;q+=Z)J(q,V,this._map[q][V])}},$._getNeighbors=function K(J,V){var Z=0;for(var U=0;U<this._dirs.length;U++){var q=this._dirs[U],L=J+q[0],B=V+q[1];if(L<0||L>=this._width||B<0||B>=this._height)continue;Z+=this._map[L][B]==1?1:0}return Z},$.connect=function K(J,V,Z){if(!V)V=0;var U=[],q={},L=1,B=[0,0];if(this._options.topology==6)L=2,B=[0,1];for(var P=0;P<this._height;P++)for(var w=B[P%2];w<this._width;w+=L)if(this._freeSpace(w,P,V)){var R=[w,P];q[this._pointKey(R)]=R,U.push([w,P])}var W=U[H.getUniformInt(0,U.length-1)],M=this._pointKey(W),O={};O[M]=W,delete q[M],this._findConnected(O,q,[W],!1,V);while(Object.keys(q).length>0){var f=this._getFromTo(O,q),u=f[0],h=f[1],_={};_[this._pointKey(u)]=u,this._findConnected(_,q,[u],!0,V);var e=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;e.call(this,h,u,O,q,V,Z);for(var r in _){var U0=_[r];this._map[U0[0]][U0[1]]=V,O[r]=U0,delete q[r]}}J&&this._serviceCallback(J)},$._getFromTo=function K(J,V){var Z=[0,0],U=[0,0],q,L=Object.keys(J),B=Object.keys(V);for(var P=0;P<5;P++){if(L.length<B.length){var w=L;U=J[w[H.getUniformInt(0,w.length-1)]],Z=this._getClosest(U,V)}else{var R=B;Z=V[R[H.getUniformInt(0,R.length-1)]],U=this._getClosest(Z,J)}if(q=(Z[0]-U[0])*(Z[0]-U[0])+(Z[1]-U[1])*(Z[1]-U[1]),q<64)break}return[Z,U]},$._getClosest=function K(J,V){var Z=null,U=null;for(var q in V){var L=V[q],B=(L[0]-J[0])*(L[0]-J[0])+(L[1]-J[1])*(L[1]-J[1]);if(U==null||B<U)U=B,Z=L}return Z},$._findConnected=function K(J,V,Z,U,q){while(Z.length>0){var L=Z.splice(0,1)[0],B=void 0;if(this._options.topology==6)B=[[L[0]+2,L[1]],[L[0]+1,L[1]-1],[L[0]-1,L[1]-1],[L[0]-2,L[1]],[L[0]-1,L[1]+1],[L[0]+1,L[1]+1]];else B=[[L[0]+1,L[1]],[L[0]-1,L[1]],[L[0],L[1]+1],[L[0],L[1]-1]];for(var P=0;P<B.length;P++){var w=this._pointKey(B[P]);if(J[w]==null&&this._freeSpace(B[P][0],B[P][1],q)){if(J[w]=B[P],!U)delete V[w];Z.push(B[P])}}}},$._tunnelToConnected=function K(J,V,Z,U,q,L){var B,P;if(V[0]<J[0])B=V,P=J;else B=J,P=V;for(var w=B[0];w<=P[0];w++){this._map[w][B[1]]=q;var R=[w,B[1]],W=this._pointKey(R);Z[W]=R,delete U[W]}if(L&&B[0]<P[0])L(B,[P[0],B[1]]);var M=P[0];if(V[1]<J[1])B=V,P=J;else B=J,P=V;for(var O=B[1];O<P[1];O++){this._map[M][O]=q;var f=[M,O],u=this._pointKey(f);Z[u]=f,delete U[u]}if(L&&B[1]<P[1])L([P[0],B[1]],[P[0],P[1]])},$._tunnelToConnected6=function K(J,V,Z,U,q,L){var B,P;if(V[0]<J[0])B=V,P=J;else B=J,P=V;var w=B[0],R=B[1];while(!(w==P[0]&&R==P[1])){var W=2;if(R<P[1])R++,W=1;else if(R>P[1])R--,W=1;if(w<P[0])w+=W;else if(w>P[0])w-=W;else if(P[1]%2)w-=W;else w+=W;this._map[w][R]=q;var M=[w,R],O=this._pointKey(M);Z[O]=M,delete U[O]}if(L)L(V,J)},$._freeSpace=function K(J,V,Z){return J>=0&&J<this._width&&V>=0&&V<this._height&&this._map[J][V]==Z},$._pointKey=function K(J){return J[0]+"."+J[1]},G}(k0),ZZ={room:a0,corridor:MJ},QZ=function(X){Q0(G,X);function G(K,J,V){var Z;if(V===void 0)V={};return Z=X.call(this,K,J)||this,Z._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},V),Z._features={room:4,corridor:4},Z._map=[],Z._featureAttempts=20,Z._walls={},Z._dug=0,Z._digCallback=Z._digCallback.bind(P0(P0(Z))),Z._canBeDugCallback=Z._canBeDugCallback.bind(P0(P0(Z))),Z._isWallCallback=Z._isWallCallback.bind(P0(P0(Z))),Z._priorityWallCallback=Z._priorityWallCallback.bind(P0(P0(Z))),Z}var $=G.prototype;return $.create=function K(J){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var V=(this._width-2)*(this._height-2);this._firstRoom();var Z=Date.now(),U;do{U=0;var q=Date.now();if(q-Z>this._options.timeLimit)break;var L=this._findWall();if(!L)break;var B=L.split(","),P=parseInt(B[0]),w=parseInt(B[1]),R=this._getDiggingDirection(P,w);if(!R)continue;var W=0;do if(W++,this._tryFeature(P,w,R[0],R[1])){this._removeSurroundingWalls(P,w),this._removeSurroundingWalls(P-R[0],w-R[1]);break}while(W<this._featureAttempts);for(var M in this._walls)if(this._walls[M]>1)U++}while(this._dug/V<this._options.dugPercentage||U);if(this._addDoors(),J)for(var O=0;O<this._width;O++)for(var f=0;f<this._height;f++)J(O,f,this._map[O][f]);return this._walls={},this._map=[],this},$._digCallback=function K(J,V,Z){if(Z==0||Z==2)this._map[J][V]=0,this._dug++;else this._walls[J+","+V]=1},$._isWallCallback=function K(J,V){if(J<0||V<0||J>=this._width||V>=this._height)return!1;return this._map[J][V]==1},$._canBeDugCallback=function K(J,V){if(J<1||V<1||J+1>=this._width||V+1>=this._height)return!1;return this._map[J][V]==1},$._priorityWallCallback=function K(J,V){this._walls[J+","+V]=2},$._firstRoom=function K(){var J=Math.floor(this._width/2),V=Math.floor(this._height/2),Z=a0.createRandomCenter(J,V,this._options);this._rooms.push(Z),Z.create(this._digCallback)},$._findWall=function K(){var J=[],V=[];for(var Z in this._walls){var U=this._walls[Z];if(U==2)V.push(Z);else J.push(Z)}var q=V.length?V:J;if(!q.length)return null;var L=H.getItem(q.sort());return delete this._walls[L],L},$._tryFeature=function K(J,V,Z,U){var q=H.getWeightedValue(this._features),L=ZZ[q],B=L.createRandomAt(J,V,Z,U,this._options);if(!B.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(B.create(this._digCallback),B instanceof a0)this._rooms.push(B);if(B instanceof MJ)B.createPriorityWalls(this._priorityWallCallback),this._corridors.push(B);return!0},$._removeSurroundingWalls=function K(J,V){var Z=X0[4];for(var U=0;U<Z.length;U++){var q=Z[U],L=J+q[0],B=V+q[1];delete this._walls[L+","+B],L=J+2*q[0],B=V+2*q[1],delete this._walls[L+","+B]}},$._getDiggingDirection=function K(J,V){if(J<=0||V<=0||J>=this._width-1||V>=this._height-1)return null;var Z=null,U=X0[4];for(var q=0;q<U.length;q++){var L=U[q],B=J+L[0],P=V+L[1];if(!this._map[B][P]){if(Z)return null;Z=L}}if(!Z)return null;return[-Z[0],-Z[1]]},$._addDoors=function K(){var J=this._map;function V(q,L){return J[q][L]==1}for(var Z=0;Z<this._rooms.length;Z++){var U=this._rooms[Z];U.clearDoors(),U.addDoors(V)}},G}(mJ);function yJ(X,G,$){$[G[X+1]]=$[X],G[$[X]]=G[X+1],$[X]=X+1,G[X+1]=X}function pJ(X,G,$){$[G[X]]=$[X],G[$[X]]=G[X],$[X]=X,G[X]=X}var KZ=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.create=function K(J){var V=this._fillMap(1),Z=Math.ceil((this._width-2)/2),U=0.375,q=[],L=[];for(var B=0;B<Z;B++)q.push(B),L.push(B);q.push(Z-1);var P;for(P=1;P+3<this._height;P+=2)for(var w=0;w<Z;w++){var R=2*w+1,W=P;if(V[R][W]=0,w!=q[w+1]&&H.getUniform()>U)yJ(w,q,L),V[R+1][W]=0;if(w!=q[w]&&H.getUniform()>U)pJ(w,q,L);else V[R][W+1]=0}for(var M=0;M<Z;M++){var O=2*M+1,f=P;if(V[O][f]=0,M!=q[M+1]&&(M==q[M]||H.getUniform()>U))yJ(M,q,L),V[O+1][f]=0;pJ(M,q,L)}for(var u=0;u<this._width;u++)for(var h=0;h<this._height;h++)J(u,h,V[u][h]);return this},G}(k0),UZ=function(X){Q0(G,X);function G(){var K=X.apply(this,arguments)||this;return K._stack=[],K._map=[],K}var $=G.prototype;return $.create=function K(J){var V=this._width,Z=this._height;this._map=[];for(var U=0;U<V;U++){this._map.push([]);for(var q=0;q<Z;q++){var L=U==0||q==0||U+1==V||q+1==Z;this._map[U].push(L?1:0)}}this._stack=[[1,1,V-2,Z-2]],this._process();for(var B=0;B<V;B++)for(var P=0;P<Z;P++)J(B,P,this._map[B][P]);return this._map=[],this},$._process=function K(){while(this._stack.length){var J=this._stack.shift();this._partitionRoom(J)}},$._partitionRoom=function K(J){var V=[],Z=[];for(var U=J[0]+1;U<J[2];U++){var q=this._map[U][J[1]-1],L=this._map[U][J[3]+1];if(q&&L&&!(U%2))V.push(U)}for(var B=J[1]+1;B<J[3];B++){var P=this._map[J[0]-1][B],w=this._map[J[2]+1][B];if(P&&w&&!(B%2))Z.push(B)}if(!V.length||!Z.length)return;var R=H.getItem(V),W=H.getItem(Z);this._map[R][W]=1;var M=[],O=[];M.push(O);for(var f=J[0];f<R;f++)if(this._map[f][W]=1,f%2)O.push([f,W]);O=[],M.push(O);for(var u=R+1;u<=J[2];u++)if(this._map[u][W]=1,u%2)O.push([u,W]);O=[],M.push(O);for(var h=J[1];h<W;h++)if(this._map[R][h]=1,h%2)O.push([R,h]);O=[],M.push(O);for(var _=W+1;_<=J[3];_++)if(this._map[R][_]=1,_%2)O.push([R,_]);var e=H.getItem(M);for(var r=0;r<M.length;r++){var U0=M[r];if(U0==e)continue;var L0=H.getItem(U0);this._map[L0[0]][L0[1]]=0}this._stack.push([J[0],J[1],R-1,W-1]),this._stack.push([R+1,J[1],J[2],W-1]),this._stack.push([J[0],W+1,R-1,J[3]]),this._stack.push([R+1,W+1,J[2],J[3]])},G}(k0),qZ=function(X){Q0(G,X);function G(K,J,V){var Z;if(V===void 0)V=0;return Z=X.call(this,K,J)||this,Z._regularity=V,Z._map=[],Z}var $=G.prototype;return $.create=function K(J){var V=this._width,Z=this._height,U=this._fillMap(1);V-=V%2?1:2,Z-=Z%2?1:2;var q=0,L=0,B=0,P=0,w=0,R=!1,W=[[0,0],[0,0],[0,0],[0,0]];do{if(q=1+2*Math.floor(H.getUniform()*(V-1)/2),L=1+2*Math.floor(H.getUniform()*(Z-1)/2),!w)U[q][L]=0;if(!U[q][L]){this._randomize(W);do{if(Math.floor(H.getUniform()*(this._regularity+1))==0)this._randomize(W);R=!0;for(var M=0;M<4;M++)if(B=q+W[M][0]*2,P=L+W[M][1]*2,this._isFree(U,B,P,V,Z)){U[B][P]=0,U[q+W[M][0]][L+W[M][1]]=0,q=B,L=P,R=!1,w++;break}}while(!R)}}while(w+1<V*Z/4);for(var O=0;O<this._width;O++)for(var f=0;f<this._height;f++)J(O,f,U[O][f]);return this._map=[],this},$._randomize=function K(J){for(var V=0;V<4;V++)J[V][0]=0,J[V][1]=0;switch(Math.floor(H.getUniform()*4)){case 0:J[0][0]=-1,J[1][0]=1,J[2][1]=-1,J[3][1]=1;break;case 1:J[3][0]=-1,J[2][0]=1,J[1][1]=-1,J[0][1]=1;break;case 2:J[2][0]=-1,J[3][0]=1,J[0][1]=-1,J[1][1]=1;break;case 3:J[1][0]=-1,J[0][0]=1,J[3][1]=-1,J[2][1]=1;break}},$._isFree=function K(J,V,Z,U,q){if(V<1||Z<1||V>=U||Z>=q)return!1;return J[V][Z]},G}(k0),zZ=function(X){Q0(G,X);function G(K,J,V){var Z=X.call(this,K,J)||this;if(Z.map=[],Z.rooms=[],Z.connectedCells=[],V=Object.assign({cellWidth:3,cellHeight:3},V),!V.hasOwnProperty("roomWidth"))V.roomWidth=Z._calculateRoomSize(Z._width,V.cellWidth);if(!V.hasOwnProperty("roomHeight"))V.roomHeight=Z._calculateRoomSize(Z._height,V.cellHeight);return Z._options=V,Z}var $=G.prototype;return $.create=function K(J){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),J)for(var V=0;V<this._width;V++)for(var Z=0;Z<this._height;Z++)J(V,Z,this.map[V][Z]);return this},$._calculateRoomSize=function K(J,V){var Z=Math.floor(J/V*0.8),U=Math.floor(J/V*0.25);if(U<2)U=2;if(Z<2)Z=2;return[U,Z]},$._initRooms=function K(){for(var J=0;J<this._options.cellWidth;J++){this.rooms.push([]);for(var V=0;V<this._options.cellHeight;V++)this.rooms[J].push({x:0,y:0,width:0,height:0,connections:[],cellx:J,celly:V})}},$._connectRooms=function K(){var J=H.getUniformInt(0,this._options.cellWidth-1),V=H.getUniformInt(0,this._options.cellHeight-1),Z,U,q,L=!1,B,P,w;do{w=[0,2,4,6],w=H.shuffle(w);do{if(L=!1,Z=w.pop(),U=J+X0[8][Z][0],q=V+X0[8][Z][1],U<0||U>=this._options.cellWidth)continue;if(q<0||q>=this._options.cellHeight)continue;if(B=this.rooms[J][V],B.connections.length>0){if(B.connections[0][0]==U&&B.connections[0][1]==q)break}if(P=this.rooms[U][q],P.connections.length==0)P.connections.push([J,V]),this.connectedCells.push([U,q]),J=U,V=q,L=!0}while(w.length>0&&L==!1)}while(w.length>0)},$._connectUnconnectedRooms=function K(){var J=this._options.cellWidth,V=this._options.cellHeight;this.connectedCells=H.shuffle(this.connectedCells);var Z,U,q;for(var L=0;L<this._options.cellWidth;L++)for(var B=0;B<this._options.cellHeight;B++)if(Z=this.rooms[L][B],Z.connections.length==0){var P=[0,2,4,6];P=H.shuffle(P),q=!1;do{var w=P.pop(),R=L+X0[8][w][0],W=B+X0[8][w][1];if(R<0||R>=J||W<0||W>=V)continue;if(U=this.rooms[R][W],q=!0,U.connections.length==0)break;for(var M=0;M<U.connections.length;M++)if(U.connections[M][0]==L&&U.connections[M][1]==B){q=!1;break}if(q)break}while(P.length);if(q)Z.connections.push([U.cellx,U.celly]);else console.log("-- Unable to connect room.")}},$._createRandomRoomConnections=function K(){},$._createRooms=function K(){var J=this._width,V=this._height,Z=this._options.cellWidth,U=this._options.cellHeight,q=Math.floor(this._width/Z),L=Math.floor(this._height/U),B,P,w=this._options.roomWidth,R=this._options.roomHeight,W,M,O;for(var f=0;f<Z;f++)for(var u=0;u<U;u++){if(W=q*f,M=L*u,W==0)W=1;if(M==0)M=1;if(B=H.getUniformInt(w[0],w[1]),P=H.getUniformInt(R[0],R[1]),u>0){O=this.rooms[f][u-1];while(M-(O.y+O.height)<3)M++}if(f>0){O=this.rooms[f-1][u];while(W-(O.x+O.width)<3)W++}var h=Math.round(H.getUniformInt(0,q-B)/2),_=Math.round(H.getUniformInt(0,L-P)/2);while(W+h+B>=J)if(h)h--;else B--;while(M+_+P>=V)if(_)_--;else P--;W=W+h,M=M+_,this.rooms[f][u].x=W,this.rooms[f][u].y=M,this.rooms[f][u].width=B,this.rooms[f][u].height=P;for(var e=W;e<W+B;e++)for(var r=M;r<M+P;r++)this.map[e][r]=0}},$._getWallPosition=function K(J,V){var Z,U,q;if(V==1||V==3){if(Z=H.getUniformInt(J.x+1,J.x+J.width-2),V==1)U=J.y-2,q=U+1;else U=J.y+J.height+1,q=U-1;this.map[Z][q]=0}else{if(U=H.getUniformInt(J.y+1,J.y+J.height-2),V==2)Z=J.x+J.width+1,q=Z-1;else Z=J.x-2,q=Z+1;this.map[q][U]=0}return[Z,U]},$._drawCorridor=function K(J,V){var Z=V[0]-J[0],U=V[1]-J[1],q=J[0],L=J[1],B,P,w,R,W=[],M=Math.abs(Z),O=Math.abs(U),f=H.getUniform(),u=f,h=1-f;if(P=Z>0?2:6,w=U>0?4:0,M<O)B=Math.ceil(O*u),W.push([w,B]),W.push([P,M]),B=Math.floor(O*h),W.push([w,B]);else B=Math.ceil(M*u),W.push([P,B]),W.push([w,O]),B=Math.floor(M*h),W.push([P,B]);this.map[q][L]=0;while(W.length>0){R=W.pop();while(R[1]>0)q+=X0[8][R[0]][0],L+=X0[8][R[0]][1],this.map[q][L]=0,R[1]=R[1]-1}},$._createCorridors=function K(){var J=this._options.cellWidth,V=this._options.cellHeight,Z,U,q,L,B;for(var P=0;P<J;P++)for(var w=0;w<V;w++){Z=this.rooms[P][w];for(var R=0;R<Z.connections.length;R++){if(U=Z.connections[R],q=this.rooms[U[0]][U[1]],q.cellx>Z.cellx)L=2,B=4;else if(q.cellx<Z.cellx)L=4,B=2;else if(q.celly>Z.celly)L=3,B=1;else L=1,B=3;this._drawCorridor(this._getWallPosition(Z,L),this._getWallPosition(q,B))}}},G}(k0),$Z={Arena:tV,Uniform:JZ,Cellular:VZ,Digger:QZ,EllerMaze:KZ,DividedMaze:UZ,IceyMaze:qZ,Rogue:zZ},XZ=function X(){},GZ=0.5*(Math.sqrt(3)-1),y0=(3-Math.sqrt(3))/6,BZ=function(X){Q0(G,X);function G(K){var J;if(K===void 0)K=256;J=X.call(this)||this,J._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var V=[];for(var Z=0;Z<K;Z++)V.push(Z);V=H.shuffle(V),J._perms=[],J._indexes=[];for(var U=0;U<2*K;U++)J._perms.push(V[U%K]),J._indexes.push(J._perms[U]%J._gradients.length);return J}var $=G.prototype;return $.get=function K(J,V){var Z=this._perms,U=this._indexes,q=Z.length/2,L=0,B=0,P=0,w,R=(J+V)*GZ,W=Math.floor(J+R),M=Math.floor(V+R),O=(W+M)*y0,f=W-O,u=M-O,h=J-f,_=V-u,e,r;if(h>_)e=1,r=0;else e=0,r=1;var U0=h-e+y0,L0=_-r+y0,j0=h-1+2*y0,OJ=_-1+2*y0,EJ=A(W,q),jJ=A(M,q),p0=0.5-h*h-_*_;if(p0>=0){p0*=p0,w=U[EJ+Z[jJ]];var dJ=this._gradients[w];L=p0*p0*(dJ[0]*h+dJ[1]*_)}var c0=0.5-U0*U0-L0*L0;if(c0>=0){c0*=c0,w=U[EJ+e+Z[jJ+r]];var lJ=this._gradients[w];B=c0*c0*(lJ[0]*U0+lJ[1]*L0)}var d0=0.5-j0*j0-OJ*OJ;if(d0>=0){d0*=d0,w=U[EJ+1+Z[jJ+1]];var nJ=this._gradients[w];P=d0*d0*(nJ[0]*j0+nJ[1]*OJ)}return 70*(L+B+P)},G}(XZ),LZ={Simplex:BZ},cJ=function(){function X($,K,J,V){if(V===void 0)V={};if(this._toX=$,this._toY=K,this._passableCallback=J,this._options=Object.assign({topology:8},V),this._dirs=X0[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var G=X.prototype;return G._getNeighbors=function $(K,J){var V=[];for(var Z=0;Z<this._dirs.length;Z++){var U=this._dirs[Z],q=K+U[0],L=J+U[1];if(!this._passableCallback(q,L))continue;V.push([q,L])}return V},X}(),YZ=function(X){Q0(G,X);function G(K,J,V,Z){var U=X.call(this,K,J,V,Z)||this;return U._computed={},U._todo=[],U._add(K,J,null),U}var $=G.prototype;return $.compute=function K(J,V,Z){var U=J+","+V;if(!(U in this._computed))this._compute(J,V);if(!(U in this._computed))return;var q=this._computed[U];while(q)Z(q.x,q.y),q=q.prev},$._compute=function K(J,V){while(this._todo.length){var Z=this._todo.shift();if(Z.x==J&&Z.y==V)return;var U=this._getNeighbors(Z.x,Z.y);for(var q=0;q<U.length;q++){var L=U[q],B=L[0],P=L[1],w=B+","+P;if(w in this._computed)continue;this._add(B,P,Z)}}},$._add=function K(J,V,Z){var U={x:J,y:V,prev:Z};this._computed[J+","+V]=U,this._todo.push(U)},G}(cJ),PZ=function(X){Q0(G,X);function G(K,J,V,Z){var U;if(Z===void 0)Z={};return U=X.call(this,K,J,V,Z)||this,U._todo=[],U._done={},U}var $=G.prototype;return $.compute=function K(J,V,Z){this._todo=[],this._done={},this._fromX=J,this._fromY=V,this._add(this._toX,this._toY,null);while(this._todo.length){var U=this._todo.shift(),q=U.x+","+U.y;if(q in this._done)continue;if(this._done[q]=U,U.x==J&&U.y==V)break;var L=this._getNeighbors(U.x,U.y);for(var B=0;B<L.length;B++){var P=L[B],w=P[0],R=P[1],W=w+","+R;if(W in this._done)continue;this._add(w,R,U)}}var M=this._done[J+","+V];if(!M)return;while(M)Z(M.x,M.y),M=M.prev},$._add=function K(J,V,Z){var U=this._distance(J,V),q={x:J,y:V,prev:Z,g:Z?Z.g+1:0,h:U},L=q.g+q.h;for(var B=0;B<this._todo.length;B++){var P=this._todo[B],w=P.g+P.h;if(L<w||L==w&&U<P.h){this._todo.splice(B,0,q);return}}this._todo.push(q)},$._distance=function K(J,V){switch(this._options.topology){case 4:return Math.abs(J-this._fromX)+Math.abs(V-this._fromY);case 6:var Z=Math.abs(J-this._fromX),U=Math.abs(V-this._fromY);return U+Math.max(0,(Z-U)/2);case 8:return Math.max(Math.abs(J-this._fromX),Math.abs(V-this._fromY))}},G}(cJ),HZ={Dijkstra:YZ,AStar:PZ},FZ=function(){function X($){this._scheduler=$,this._lock=1}var G=X.prototype;return G.start=function $(){return this.unlock()},G.lock=function $(){return this._lock++,this},G.unlock=function $(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var K=this._scheduler.next();if(!K)return this.lock();var J=K.act();if(J&&J.then)this.lock(),J.then(this.unlock.bind(this))}return this},X}(),wZ=function(){function X($,K){if(K===void 0)K={};this._reflectivityCallback=$,this._options={},K=Object.assign({passes:1,emissionThreshold:100,range:10},K),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(K)}var G=X.prototype;return G.setOptions=function $(K){if(Object.assign(this._options,K),K&&K.range)this.reset();return this},G.setFOV=function $(K){return this._fov=K,this._fovCache={},this},G.setLight=function $(K,J,V){var Z=K+","+J;if(V)this._lights[Z]=typeof V=="string"?l(V):V;else delete this._lights[Z];return this},G.clearLights=function $(){this._lights={}},G.reset=function $(){return this._reflectivityCache={},this._fovCache={},this},G.compute=function $(K){var J={},V={},Z={};for(var U in this._lights){var q=this._lights[U];V[U]=[0,0,0],c(V[U],q)}for(var L=0;L<this._options.passes;L++){if(this._emitLight(V,Z,J),L+1==this._options.passes)continue;V=this._computeEmitters(Z,J)}for(var B in Z){var P=B.split(","),w=parseInt(P[0]),R=parseInt(P[1]);K(w,R,Z[B])}return this},G._emitLight=function $(K,J,V){for(var Z in K){var U=Z.split(","),q=parseInt(U[0]),L=parseInt(U[1]);this._emitLightFromCell(q,L,K[Z],J),V[Z]=1}return this},G._computeEmitters=function $(K,J){var V={};for(var Z in K){if(Z in J)continue;var U=K[Z],q=void 0;if(Z in this._reflectivityCache)q=this._reflectivityCache[Z];else{var L=Z.split(","),B=parseInt(L[0]),P=parseInt(L[1]);q=this._reflectivityCallback(B,P),this._reflectivityCache[Z]=q}if(q==0)continue;var w=[0,0,0],R=0;for(var W=0;W<3;W++){var M=Math.round(U[W]*q);w[W]=M,R+=M}if(R>this._options.emissionThreshold)V[Z]=w}return V},G._emitLightFromCell=function $(K,J,V,Z){var U=K+","+J,q;if(U in this._fovCache)q=this._fovCache[U];else q=this._updateFOV(K,J);for(var L in q){var B=q[L],P=void 0;if(L in Z)P=Z[L];else P=[0,0,0],Z[L]=P;for(var w=0;w<3;w++)P[w]+=Math.round(V[w]*B)}return this},G._updateFOV=function $(K,J){var V=K+","+J,Z={};this._fovCache[V]=Z;var U=this._options.range;function q(L,B,P,w){var R=L+","+B,W=w*(1-P/U);if(W==0)return;Z[R]=W}return this._fov.compute(K,J,U,q.bind(this)),Z},X}(),DZ=x,WZ=n,RZ=mV;Q.Util=DZ,Q.Color=WZ,Q.Text=RZ,Q.RNG=H,Q.Display=cV,Q.StringGenerator=dV,Q.EventQueue=xJ,Q.Scheduler=sV,Q.FOV=eV,Q.Map=$Z,Q.Noise=LZ,Q.Path=HZ,Q.Engine=FZ,Q.Lighting=wZ,Q.DEFAULT_WIDTH=wJ,Q.DEFAULT_HEIGHT=DJ,Q.DIRS=X0,Q.KEYS=_V,Object.defineProperty(Q,"__esModule",{value:!0})})});var AZ=typeof window!=="undefined"?window.innerWidth:0,vZ=typeof window!=="undefined"?window.innerHeight:0,J0={cameraWidth:Math.floor(AZ/18),cameraHeight:Math.floor(vZ/18),debug:!0,fontSize:18,highlightEnemy:!0,showGrid:!0,showUI:!0,zoom:1},AJ={WIDTH:1024,HEIGHT:1024},Y0={width:Math.floor(J0.cameraWidth*(1/J0.zoom)),height:Math.floor(J0.cameraHeight*(1/J0.zoom)),bg:"transparent",fontSize:Math.floor(J0.fontSize*J0.zoom),forceSquareRatio:!0};function sJ(Q){if(J0.debug)console.log(Q)}var vJ=[];class i0{name;description;constructor(Q,z){this.name=Q,this.description=z}}class e0{name;description;constructor(Q,z){this.name=Q,this.description=z}}class M0{key;description;constructor(Q,z){this.key=Q,this.description=z}}class oJ{name;description;constructor(Q,z){this.name=Q,this.description=z}}class m0{name;description;color;constructor(Q,z,Y){this.name=Q,this.description=z,this.color=Y}}class R0{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(Q,z,Y,H="cyberyellow",D=0,E=0,A=0,b=0,N=0,I=[]){this.name=Q,this.description=z,this.icon=Y,this.color=H,this.energyDelta=D,this.matter=E,this.gold=A,this.damage=b,this.energyCost=N,this.effects=I}}class I0{name;description;icon;color;energyMax;unlockCondition;constructor(Q,z,Y,H=100){this.name=Q,this.description=z,this.icon=Y,this.energyMax=H,this.color="white",this.unlockCondition=null}}class V0{name;description;icon;fg;bg;energyDelta;constructor(Q,z,Y=null,H="white",D="black",E=0){this.name=Q,this.description=z,this.icon=Y,this.fg=H,this.bg=D,this.energyDelta=E}}var F={actions:{Enter:new i0("Enter","Enter a portal or plant atmosphere"),Launch:new i0("Launch","Launch into space"),Wait:new i0("Wait","Wait one turn in place")},ais:{aggrorange:new e0("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new e0("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new e0("guardian","Idles at a position and only fights back if engaged")},colors:{black:"#000",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",brown:"brown",gray:"#777",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new M0("N","Move/interact/combat north"),E:new M0("E","Move/interact/combat east"),S:new M0("S","Move/interact/combat south"),W:new M0("W","Move/interact/combat west"),A:new M0("A","Primary action, confirm"),B:new M0("B","Take a break, cancel"),"1":new M0("1","Secondary action, first quick slot"),"2":new M0("2","Tertiary action, second quick slot"),M:new M0("M","Menu")},effects:{WallCrusher:new oJ("Wall Crusher","Tears down weak walls")},entities:{movableboulder:new I0("movableboulder","A movable rock","o",2),movablebox:new I0("movablebox","A movable box","x",2),Spirit:new I0("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new I0("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new I0("WorkBot","Basic factory worker","B"),Cleaner:new I0("Cleaner","Advanced bot purging malfunctioning bots","C",50),Pioneer:new I0("Pioneer","Absolute slayer bots, needs to play as WorkBot first, brotherhood of ultimate warriors","W",200)},factions:{Equipment:new m0("Equipment","For boxes etc.","gray"),Spirits:new m0("Spirits","Default player faction","white"),Pyrates:new m0("Pyrates","Default enemy faction","cybermagenta"),Gaia:new m0("Gaia","For rocks etc.","brown"),Guardians:new m0("Guardians","Bot station guardians","cybercyan")},items:{battery:new R0("Battery","Increases maximum energy","b","cyberyellow",10),energy:new R0("Energy","Energy pack","e","cyberyellow",10),gold:new R0("Gold","Precious shiny!","g","cyberyellow",0,0,1),goo:new R0("Goo","A minor matter source","g","gray",0,1),junk:new R0("Junk","Broken bot","%","gray",0,1),matter:new R0("Matter","A pile of stuff","m","gray",0,100),broom:new R0("Broom","Sweeps the floor","i","cyberyellow",0,0,0,-10,-1),hammer:new R0("Hammer","Tears down weak walls","i","cyberyellow",0,0,0,-15,-2,["Wall Crusher"]),shocker:new R0("Shocker","Injects Bots with new energy, basic AeroBot tool","i","cyberyellow",0,0,0,10,-1),wrench:new R0("Wrench","Basic WorkBot tool","i","cyberyellow",0,0,0,-10,-1)},maps:{bot_bar:`!
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
#...C###.++..............####..#
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
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired PioneerBot, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:J0.showGrid?new V0("void","Just nothing here",".","gray"):new V0("void","Just nothing here"),voidtrue:new V0("voidtrue","Really nothing here and you shouldn't get there ever!"),voidhidden:new V0("voidhidden","Looks like a wall, but isn't!","#","gray","black"),water:new V0("water","Rust and other dangers await","~","cybercyan","cyberblue",-2),rock:new V0("rock","Hidden treasures may await","^","white","gray"),tree:new V0("tree","Lots of trees make a forest","t","brown","black"),wall:new V0("wall","A strong wall","#","gray","black"),wallstatue:new V0("wallstatue","A small statue","s","gray","black"),wallweak:new V0("wallweak","A weakened wall","+","gray","black"),chargepad:new V0("chargepad","Recharges energy and health","=","cyberyellow","black",2),movenorth:new V0("movenorth","Moves you north","^","cyberyellow"),moveeast:new V0("moveeast","Moves you east",">","cyberyellow"),movesouth:new V0("movesouth","Moves you south","v","cyberyellow"),movewest:new V0("movewest","Moves you west","<","cyberyellow"),portal:new V0("portal","Gateway to another map","O","cyberyellow","gray"),portalclosed:new V0("portalclosed","Closed gateway to another map","O","black","gray"),portalhidden:new V0("portalhidden","Hidden gateway to another map","#","gray","black"),portalstartworkbot:new V0("portalstartworkbot","Start playing as a WorkBot","B","white"),portalstartaerobot:new V0("portalstartaerobot","Start playing as a AeroBot","A","white"),"_portalstart?":new V0("_portalstart?","Not unlocked, yet!","?","white"),spacerock:new V0("spacerock","Mountains as seen from space, non-blocking!","^","white","gray"),spacetree:new V0("spacetree","Forest as seen from space","","brown","brown"),spacewater:new V0("spacewater","Water as seen from space, not dangerous!","~","cybercyan","cyberblue"),spacevoid:new V0("spacevoid","Void/ground as seen from space","","gray","gray"),spacevoidstarwhite:new V0("spacevoidstarwhite","Space with a white background star",".","white"),spacevoidstaryellow:new V0("spacevoidstaryellow","Space with a yellow background star",".","cyberyellow"),sun:new V0("sun","It's hot, really hot!","","cyberyellow","cyberyellow",-100)}};function d(Q,z,Y,H,D=0,E=0,A={}){const b={id:z,type:Y,mapId:H,x:D,y:E,energy:10,energyMax:10,gold:0,matter:0,options:A};return Q=JJ(Q,b,Y),Q.entities[b.id]=b,Q}function NJ(Q,z,Y,H){return d(Q,"boulder,"+z+","+Y+","+H,F.entities.movableboulder,z,Y,H,{faction:F.factions.Gaia})}function fJ(Q,z,Y,H){return d(Q,"box,"+z+","+Y+","+H,F.entities.movablebox,z,Y,H,{faction:F.factions.Equipment})}function t0(Q,z){return Q.entities[z]=void 0,delete Q.entities[z],Q.tools[z]=void 0,Q}function u0(Q,z){let Y=Object.keys(Q.entities),H=[];for(let D=0;D<Y.length;D++){let E=Q.entities[Y[D]];if(E.mapId===z)H.push(E)}return H}function aJ(Q,z,Y,H){let D=u0(Q,z).filter((E)=>E.x===Y&&E.y===H);if(D.length>0)return D[0];return null}function JJ(Q,z,Y){if(z.type=Y,z.energy=Y.energyMax,z.energyMax=Y.energyMax,z.gold=0,z.matter=0,!O0(z))Q.tools[z.id]=void 0;return Q}function iJ(Q,z,Y){if(z.options.faction===Y.options.faction);else{const H=z.id,D=Y.id;Q._combatQueue.push({entityId:H,otherEntityId:D})}return Q}function O0(Q){return Q.type===F.entities.movableboulder||Q.type===F.entities.movablebox}function VJ(Q,z){const Y={A:F.actions.Wait,B:F.actions.Wait};if(Q.lastSpacePositionByEntity[z.id])Y.A=F.actions.Launch;const D=Q.maps[z.mapId].getTile(z.x,z.y);if(!!D.options.mapId&&"x"in D.options&&"y"in D.options)Y.A=F.actions.Enter;return Y}function eJ(Q,z,Y){const H=Q._eventSubscribers[z];if(H)for(let D=0;D<H.length;D++){const E=H[D];Q=E(Q,Y)}return Q}function IJ(Q,z,Y){if(z in Q._eventSubscribers);else Q._eventSubscribers[z]=[];return Q._eventSubscribers[z].push(Y),Q}function K0(Q,z,Y,H=0,D=0){const A={id:QJ(Y,H,D),type:z,mapId:Y,x:H,y:D,energy:z.energyDelta,gold:z.gold,matter:z.matter};return Q.items[A.id]=A,Q}function tJ(Q,z,Y,H=0,D=0){const E=F.items.junk,b={id:QJ(Y,H,D),type:E,mapId:Y,x:H,y:D,energy:E.energyDelta,gold:E.gold,matter:z};return Q.items[b.id]=b,Q}function ZJ(Q,z,Y,H=0,D=0,E,A){const N={id:QJ(Y,H,D),type:z,mapId:Y,x:H,y:D,energy:z.energyDelta,gold:E,matter:A};return Q.items[N.id]=N,Q}var QJ=function(Q,z,Y){return"item,"+Q+","+z+","+Y};function SJ(Q,z){return Q.items[z]=void 0,delete Q.items[z],Q}function KJ(Q,z){let Y=Object.keys(Q.items),H=[];for(let D=0;D<Y.length;D++){let E=Q.items[Y[D]];if(E.mapId===z)H.push(E)}return H}function JV(Q,z,Y,H){let D=QJ(z,Y,H);if(D in Q.items)return Q.items[D];return null}function l0(Q,z){return Q.tools[z]}function VV(Q,z,Y){if(O0(z))return Q;if(!fZ(z,Y))return Q;if(NZ(Y))Q=bJ(Q,z.id,Y.type);else{if(Y.type===F.items.battery)z.energyMax+=Y.energy;Q._energyQueue.push({entityId:z.id,energyDelta:Y.energy})}return z.gold+=Y.gold,z.matter+=Y.matter,SJ(Q,Y.id),Q}function bJ(Q,z,Y){let H={type:Y};return Q.tools[z]=H,Q}var NZ=function(Q){return Q.type.energyCost<0},fZ=function(Q,z){return Q.gold+z.gold>=0&&Q.matter+z.matter>=0};function ZV(Q,z,Y,H,D){let E=new IZ.js;E.setGrid(Q),E.setAcceptableTiles([0]),E.enableSync();let A=null;return E.findPath(z,Y,H,D,function(b){A=b}),E.calculate(),A}/*!
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
 */var IZ=function(Q){var z={};function Y(H){if(z[H])return z[H].exports;var D=z[H]={i:H,l:!1,exports:{}};return Q[H].call(D.exports,D,D.exports,Y),D.l=!0,D.exports}return Y.m=Q,Y.c=z,Y.d=function(H,D,E){Y.o(H,D)||Object.defineProperty(H,D,{enumerable:!0,get:E})},Y.r=function(H){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(H,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(H,"__esModule",{value:!0})},Y.t=function(H,D){if(1&D&&(H=Y(H)),8&D)return H;if(4&D&&typeof H=="object"&&H&&H.__esModule)return H;var E=Object.create(null);if(Y.r(E),Object.defineProperty(E,"default",{enumerable:!0,value:H}),2&D&&typeof H!="string")for(var A in H)Y.d(E,A,function(b){return H[b]}.bind(null,A));return E},Y.n=function(H){var D=H&&H.__esModule?function(){return H.default}:function(){return H};return Y.d(D,"a",D),D},Y.o=function(H,D){return Object.prototype.hasOwnProperty.call(H,D)},Y.p="/bin/",Y(Y.s=0)}([function(Q,z,Y){var H={},D=Y(1),E=Y(2),A=Y(3);Q.exports=H;var b=1;H.js=function(){var N,I,x,s=!1,m={},t={},l={},y={},c=!0,$0={},G0=[],H0=Number.MAX_VALUE,F0=!1;this.setAcceptableTiles=function(S){S instanceof Array?x=S:!isNaN(parseFloat(S))&&isFinite(S)&&(x=[S])},this.enableSync=function(){s=!0},this.disableSync=function(){s=!1},this.enableDiagonals=function(){F0=!0},this.disableDiagonals=function(){F0=!1},this.setGrid=function(S){N=S;for(var v=0;v<N.length;v++)for(var j=0;j<N[0].length;j++)t[N[v][j]]||(t[N[v][j]]=1)},this.setTileCost=function(S,v){t[S]=v},this.setAdditionalPointCost=function(S,v,j){l[v]===void 0&&(l[v]={}),l[v][S]=j},this.removeAdditionalPointCost=function(S,v){l[v]!==void 0&&delete l[v][S]},this.removeAllAdditionalPointCosts=function(){l={}},this.setDirectionalCondition=function(S,v,j){y[v]===void 0&&(y[v]={}),y[v][S]=j},this.removeAllDirectionalConditions=function(){y={}},this.setIterationsPerCalculation=function(S){H0=S},this.avoidAdditionalPoint=function(S,v){m[v]===void 0&&(m[v]={}),m[v][S]=1},this.stopAvoidingAdditionalPoint=function(S,v){m[v]!==void 0&&delete m[v][S]},this.enableCornerCutting=function(){c=!0},this.disableCornerCutting=function(){c=!1},this.stopAvoidingAllAdditionalPoints=function(){m={}},this.findPath=function(S,v,j,n,i){var Z0=function(v0){s?i(v0):setTimeout(function(){i(v0)})};if(x===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(N===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(S<0||v<0||j<0||n<0||S>N[0].length-1||v>N.length-1||j>N[0].length-1||n>N.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(S!==j||v!==n){for(var w0=N[n][j],z0=!1,E0=0;E0<x.length;E0++)if(w0===x[E0]){z0=!0;break}if(z0!==!1){var B0=new D;B0.openList=new A(function(v0,x0){return v0.bestGuessDistance()-x0.bestGuessDistance()}),B0.isDoneCalculating=!1,B0.nodeHash={},B0.startX=S,B0.startY=v,B0.endX=j,B0.endY=n,B0.callback=Z0,B0.openList.push(a(B0,B0.startX,B0.startY,null,1));var _0=b++;return $0[_0]=B0,G0.push(_0),_0}Z0(null)}else Z0([])},this.cancelPath=function(S){return S in $0&&(delete $0[S],!0)},this.calculate=function(){if(G0.length!==0&&N!==void 0&&x!==void 0)for(I=0;I<H0;I++){if(G0.length===0)return;s&&(I=0);var S=G0[0],v=$0[S];if(v!==void 0)if(v.openList.size()!==0){var j=v.openList.pop();if(v.endX!==j.x||v.endY!==j.y)j.list=0,j.y>0&&C(v,j,0,-1,1*g(j.x,j.y-1)),j.x<N[0].length-1&&C(v,j,1,0,1*g(j.x+1,j.y)),j.y<N.length-1&&C(v,j,0,1,1*g(j.x,j.y+1)),j.x>0&&C(v,j,-1,0,1*g(j.x-1,j.y)),F0&&(j.x>0&&j.y>0&&(c||k(N,x,j.x,j.y-1,j)&&k(N,x,j.x-1,j.y,j))&&C(v,j,-1,-1,1.4*g(j.x-1,j.y-1)),j.x<N[0].length-1&&j.y<N.length-1&&(c||k(N,x,j.x,j.y+1,j)&&k(N,x,j.x+1,j.y,j))&&C(v,j,1,1,1.4*g(j.x+1,j.y+1)),j.x<N[0].length-1&&j.y>0&&(c||k(N,x,j.x,j.y-1,j)&&k(N,x,j.x+1,j.y,j))&&C(v,j,1,-1,1.4*g(j.x+1,j.y-1)),j.x>0&&j.y<N.length-1&&(c||k(N,x,j.x,j.y+1,j)&&k(N,x,j.x-1,j.y,j))&&C(v,j,-1,1,1.4*g(j.x-1,j.y+1)));else{var n=[];n.push({x:j.x,y:j.y});for(var i=j.parent;i!=null;)n.push({x:i.x,y:i.y}),i=i.parent;n.reverse();var Z0=n;v.callback(Z0),delete $0[S],G0.shift()}}else v.callback(null),delete $0[S],G0.shift();else G0.shift()}};var C=function(S,v,j,n,i){var Z0=v.x+j,w0=v.y+n;if((m[w0]===void 0||m[w0][Z0]===void 0)&&k(N,x,Z0,w0,v)){var z0=a(S,Z0,w0,v,i);z0.list===void 0?(z0.list=1,S.openList.push(z0)):v.costSoFar+i<z0.costSoFar&&(z0.costSoFar=v.costSoFar+i,z0.parent=v,S.openList.updateItem(z0))}},k=function(S,v,j,n,i){var Z0=y[n]&&y[n][j];if(Z0){var w0=T(i.x-j,i.y-n);if(!function(){for(var E0=0;E0<Z0.length;E0++)if(Z0[E0]===w0)return!0;return!1}())return!1}for(var z0=0;z0<v.length;z0++)if(S[n][j]===v[z0])return!0;return!1},T=function(S,v){if(S===0&&v===-1)return H.TOP;if(S===1&&v===-1)return H.TOP_RIGHT;if(S===1&&v===0)return H.RIGHT;if(S===1&&v===1)return H.BOTTOM_RIGHT;if(S===0&&v===1)return H.BOTTOM;if(S===-1&&v===1)return H.BOTTOM_LEFT;if(S===-1&&v===0)return H.LEFT;if(S===-1&&v===-1)return H.TOP_LEFT;throw new Error("These differences are not valid: "+S+", "+v)},g=function(S,v){return l[v]&&l[v][S]||t[N[v][S]]},a=function(S,v,j,n,i){if(S.nodeHash[j]!==void 0){if(S.nodeHash[j][v]!==void 0)return S.nodeHash[j][v]}else S.nodeHash[j]={};var Z0=o(v,j,S.endX,S.endY);if(n!==null)var w0=n.costSoFar+i;else w0=0;var z0=new E(n,v,j,w0,Z0);return S.nodeHash[j][v]=z0,z0},o=function(S,v,j,n){var i,Z0;return F0?(i=Math.abs(S-j))<(Z0=Math.abs(v-n))?1.4*i+Z0:1.4*Z0+i:(i=Math.abs(S-j))+(Z0=Math.abs(v-n))}},H.TOP="TOP",H.TOP_RIGHT="TOP_RIGHT",H.RIGHT="RIGHT",H.BOTTOM_RIGHT="BOTTOM_RIGHT",H.BOTTOM="BOTTOM",H.BOTTOM_LEFT="BOTTOM_LEFT",H.LEFT="LEFT",H.TOP_LEFT="TOP_LEFT"},function(Q,z){Q.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(Q,z){Q.exports=function(Y,H,D,E,A){this.parent=Y,this.x=H,this.y=D,this.costSoFar=E,this.simpleDistanceToTarget=A,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(Q,z,Y){Q.exports=Y(4)},function(Q,z,Y){var H,D,E;(function(){var A,b,N,I,x,s,m,t,l,y,c,$0,G0,H0,F0;N=Math.floor,y=Math.min,b=function(C,k){return C<k?-1:C>k?1:0},l=function(C,k,T,g,a){var o;if(T==null&&(T=0),a==null&&(a=b),T<0)throw new Error("lo must be non-negative");for(g==null&&(g=C.length);T<g;)a(k,C[o=N((T+g)/2)])<0?g=o:T=o+1;return[].splice.apply(C,[T,T-T].concat(k)),k},s=function(C,k,T){return T==null&&(T=b),C.push(k),H0(C,0,C.length-1,T)},x=function(C,k){var T,g;return k==null&&(k=b),T=C.pop(),C.length?(g=C[0],C[0]=T,F0(C,0,k)):g=T,g},t=function(C,k,T){var g;return T==null&&(T=b),g=C[0],C[0]=k,F0(C,0,T),g},m=function(C,k,T){var g;return T==null&&(T=b),C.length&&T(C[0],k)<0&&(k=(g=[C[0],k])[0],C[0]=g[1],F0(C,0,T)),k},I=function(C,k){var T,g,a,o,S,v;for(k==null&&(k=b),S=[],g=0,a=(o=function(){v=[];for(var j=0,n=N(C.length/2);0<=n?j<n:j>n;0<=n?j++:j--)v.push(j);return v}.apply(this).reverse()).length;g<a;g++)T=o[g],S.push(F0(C,T,k));return S},G0=function(C,k,T){var g;if(T==null&&(T=b),(g=C.indexOf(k))!==-1)return H0(C,0,g,T),F0(C,g,T)},c=function(C,k,T){var g,a,o,S,v;if(T==null&&(T=b),!(a=C.slice(0,k)).length)return a;for(I(a,T),o=0,S=(v=C.slice(k)).length;o<S;o++)g=v[o],m(a,g,T);return a.sort(T).reverse()},$0=function(C,k,T){var g,a,o,S,v,j,n,i,Z0;if(T==null&&(T=b),10*k<=C.length){if(!(o=C.slice(0,k).sort(T)).length)return o;for(a=o[o.length-1],S=0,j=(n=C.slice(k)).length;S<j;S++)T(g=n[S],a)<0&&(l(o,g,0,null,T),o.pop(),a=o[o.length-1]);return o}for(I(C,T),Z0=[],v=0,i=y(k,C.length);0<=i?v<i:v>i;0<=i?++v:--v)Z0.push(x(C,T));return Z0},H0=function(C,k,T,g){var a,o,S;for(g==null&&(g=b),a=C[T];T>k&&g(a,o=C[S=T-1>>1])<0;)C[T]=o,T=S;return C[T]=a},F0=function(C,k,T){var g,a,o,S,v;for(T==null&&(T=b),a=C.length,v=k,o=C[k],g=2*k+1;g<a;)(S=g+1)<a&&!(T(C[g],C[S])<0)&&(g=S),C[k]=C[g],g=2*(k=g)+1;return C[k]=o,H0(C,v,k,T)},A=function(){function C(k){this.cmp=k!=null?k:b,this.nodes=[]}return C.push=s,C.pop=x,C.replace=t,C.pushpop=m,C.heapify=I,C.updateItem=G0,C.nlargest=c,C.nsmallest=$0,C.prototype.push=function(k){return s(this.nodes,k,this.cmp)},C.prototype.pop=function(){return x(this.nodes,this.cmp)},C.prototype.peek=function(){return this.nodes[0]},C.prototype.contains=function(k){return this.nodes.indexOf(k)!==-1},C.prototype.replace=function(k){return t(this.nodes,k,this.cmp)},C.prototype.pushpop=function(k){return m(this.nodes,k,this.cmp)},C.prototype.heapify=function(){return I(this.nodes,this.cmp)},C.prototype.updateItem=function(k){return G0(this.nodes,k,this.cmp)},C.prototype.clear=function(){return this.nodes=[]},C.prototype.empty=function(){return this.nodes.length===0},C.prototype.size=function(){return this.nodes.length},C.prototype.clone=function(){var k;return(k=new C).nodes=this.nodes.slice(0),k},C.prototype.toArray=function(){return this.nodes.slice(0)},C.prototype.insert=C.prototype.push,C.prototype.top=C.prototype.peek,C.prototype.front=C.prototype.peek,C.prototype.has=C.prototype.contains,C.prototype.copy=C.prototype.clone,C}(),D=[],(E=typeof(H=function(){return A})=="function"?H.apply(z,D):H)===void 0||(Q.exports=E)}).call(this)}]);function C0(){return"player"}function QV(Q,z,Y,H){return Math.abs(Q-Y)+Math.abs(z-H)}function KV(Q){return[...Array(Q).keys()]}function UV(Q){let z=SZ(Q);for(let H=0;H<z.length;H++){let D=z[H];if(!Q._AIs.hasOwnProperty(D))Q._AIs[D]=bZ(Q,D,Q.entities[D].options.ai)}let Y=Q.entities[C0()];for(let H=0;H<z.length;H++){let D=z[H],E=Q.entities[D],A=Q._AIs[D],b=QV(Y.x,Y.y,E.x,E.y);if(Y.options.faction!==E.options.faction&&b<=A.aggroRange){let N=Q.maps[Q.currentMapId].asMovementMap(),I=ZV(N,E.x,E.y,Y.x,Y.y);if(I){if(I=I.slice(1),I.length>b)I=null}A.path=I}}for(let H=0;H<z.length;H++){const D=z[H],E=Q.entities[D],A=Q._AIs[D];if(A.path){const b=A.path[0],N=b.x-E.x,I=b.y-E.y;Q=D0(Q,E,N,I)}}return Q}var SZ=function(Q){let z=u0(Q,Q.currentMapId),Y=[];for(let H=0;H<z.length;H++){let D=z[H];if(!D.id.startsWith("player")&&!!D.options.ai)Y.push(D.id)}return Y},bZ=function(Q,z,Y){let H=Q.entities[z],D=8;switch(Y){case F.ais.aggrorange:D=8;break;case F.ais.aggrorangeshort:D=2;break;case F.ais.guardian:D=1;break;default:}return{entityId:z,type:Y,aggroRange:D,startMap:H.mapId,startX:H.x,startY:H.y,path:null}};function UJ(Q,z){return Q._AIs[z]=void 0,delete Q._AIs[z],Q}function T0(Q,z={}){return{type:Q,options:z}}function qV(Q){return Q.type.name.startsWith("space")}function zV(Q,z){const Y=KJ(Q,z);for(let D=0;D<Y.length;D++){const E=Y[D];Q=SJ(Q,E.id)}const H=u0(Q,z);for(let D=0;D<H.length;D++){const E=H[D];Q=t0(Q,E.id),Q=UJ(Q,E.id)}return Q.maps[z]=void 0,delete Q.maps[z],Q}function zJ(Q){let z=Q.split(/\r?\n/),Y=Q[0],H="",D=0,E=0,A={},b=[];for(let N=0;N<z.length;N++){let I=z[N];if(I.startsWith(Y)){if(I.startsWith(Y+"!id"))H=I.slice(5);else if(I.startsWith(Y+"!size")){let x=I.split(" ").slice(1);D=Number(x[0]),E=Number(x[1])}else if(I.startsWith(Y+"!")){let x=I[2],s=I.slice(4);A[x]=s}}else for(let x=0;x<I.length;x++){let s=I[x],m=A[s];if(!m&&J0.debug)console.log("DEBUG Broken map: "+H);let t=m.split(" "),l={};if(m.startsWith("portal ")||m.startsWith("portalhidden ")||m.startsWith("portalstart"))m=t[0],l.mapId=t[1],l.x=Number(t[2]),l.y=Number(t[3]);if(m.startsWith("wall ")&&t.length>=2)m="wall",l.sign=t[1];b.push(T0(F.tiles[m],l))}}return new g0(H,D,E,b)}var qJ={width:16,height:16},kJ=qJ;class g0{id;widthTiles;heightTiles;_tiles;_cacheMovementMap;constructor(Q,z,Y,H=[]){this.id=Q,this.widthTiles=z,this.heightTiles=Y,this._tiles=H,this._cacheMovementMap=null}getTile(Q,z){if(Q>=0&&Q<this.widthTiles&&z>=0&&z<this.heightTiles){let Y=z*this.widthTiles+Q;return this._tiles[Y]}return{}}setTile(Q,z,Y,H={}){this._cacheMovementMap=null;let D=z*this.widthTiles+Q;this._tiles[D]=T0(Y,H)}pasteOnto(Q,z=0,Y=0){for(let H=0;H<Q.heightTiles;H++)for(let D=0;D<Q.widthTiles;D++){const E=Q.getTile(D,H);if(E.type!==F.tiles.voidtrue)this.setTile(D+z,H+Y,E.type,E.options)}}circular(){let Q=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let z=-Q;z<=Q;z++)for(let Y=-Q;Y<=Q;Y++)if(Y*Y+z*z>=Q*Q)this.setTile(Y+Q-1,z+Q-1,F.tiles.voidtrue);return this}sample(Q,z){const Y=Math.floor(this.widthTiles/Q),H=Math.floor(this.heightTiles/z),D=[];for(let E=0;E<z;E++)for(let A=0;A<Q;A++){const b={};for(let t=0;t<H;t++)for(let l=0;l<Y;l++){const y=this.getTile(A*Y+l,E*H+t);if(b[y.type.name])b[y.type.name]+=1;else b[y.type.name]=1}let N="",I=0;for(let[t,l]of Object.entries(b))if(l>I)N=t,I=l;const x="space"+N,s=F.tiles[x]||F.tiles.spacevoid,m={mapId:this.id,x:A*Y,y:E*H};D.push(T0(s,m))}return new g0("__sampled_"+Q+"_"+z+"_"+this.id,Q,z,D)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let Q=new Array(this.heightTiles);for(let z=0;z<this.heightTiles;z++){Q[z]=new Array(this.widthTiles);for(let Y=0;Y<this.widthTiles;Y++){let H=z*this.widthTiles+Y,E=this._tiles[H].type;if(Q[z][Y]=0,E===F.tiles.rock||E===F.tiles.portalclosed||E.name.startsWith("wall"))Q[z][Y]=1}}return this._cacheMovementMap=Q,Q}}function XV(Q,z,Y){switch(Y){case F.commands.N:Q=D0(Q,z,0,-1);break;case F.commands.W:Q=D0(Q,z,-1,0);break;case F.commands.S:Q=D0(Q,z,0,1);break;case F.commands.E:Q=D0(Q,z,1,0);break;case F.commands.A:Q=$V(Q,z,F.commands.A);break;case F.commands.B:Q=$V(Q,z,F.commands.B);break;default:}return Q}function D0(Q,z,Y,H,D=0){const E=Q.maps[z.mapId],A=aJ(Q,E.id,z.x+Y,z.y+H),b=Q.tools[z.id];if(A)if(O0(A)){if(!O0(z)&&D<1)Q=D0(Q,A,Y,H,D++),Q=D0(Q,z,Y,H,D++)}else Q=iJ(Q,z,A);else if(TZ(E,z,Y,H))Q=kZ(Q,E,z,Y,H),Q._energyQueue.push({entityId:z.id,energyDelta:-1*D});else if(gZ(E,z,b,Y,H))E.setTile(z.x+Y,z.y+H,F.tiles.void),Q._energyQueue.push({entityId:z.id,energyDelta:b.type.energyCost});return Q}function $V(Q,z,Y){switch(VJ(Q,z)[Y.key]){case F.actions.Enter:const A=Q.maps[z.mapId].getTile(z.x,z.y);Q=GV(Q,z,A);break;case F.actions.Launch:Q=uZ(Q,z);case F.actions.Wait:break;default:}return Q}var kZ=function(Q,z,Y,H,D){Y.x+=H,Y.y+=D;let E=JV(Q,Y.mapId,Y.x,Y.y);if(E)Q=VV(Q,Y,E);let A=z.getTile(Y.x,Y.y);if(A.type.name.startsWith("portal"))Q=GV(Q,Y,A);if(A.type.name.startsWith("move"))switch(A.type.name){case"movenorth":Q=D0(Q,Y,0,-1);break;case"moveeast":Q=D0(Q,Y,1,0);break;case"movesouth":Q=D0(Q,Y,0,1);break;case"movewest":Q=D0(Q,Y,-1,0);break;default:}return Q},GV=function(Q,z,Y){if(z.id.startsWith("player"))Q.currentMapId=Y.options.mapId;if(qV(Y))Q.lastSpacePositionByEntity[z.id]={mapId:z.mapId,x:z.x,y:z.y};const H={entityId:z.id,oldMapId:z.mapId,oldX:z.x,oldY:z.y,oldTileType:Y.type,newMapId:Y.options.mapId,newX:Y.options.x,newY:Y.options.y};return z.mapId=Y.options.mapId,z.x=Y.options.x,z.y=Y.options.y,Q=eJ(Q,"entitymap.updated.event",H),Q},uZ=function(Q,z){if(Q.lastSpacePositionByEntity[z.id]){if(z.id.startsWith("player"))Q.currentMapId=Q.lastSpacePositionByEntity[z.id].mapId;z.mapId=Q.lastSpacePositionByEntity[z.id].mapId,z.x=Q.lastSpacePositionByEntity[z.id].x,z.y=Q.lastSpacePositionByEntity[z.id].y,Q.lastSpacePositionByEntity[z.id]=void 0,delete Q.lastSpacePositionByEntity[z.id]}return Q};function BV(Q){for(let z in Q.entities){let Y=Q.entities[z],D=Q.maps[Y.mapId].getTile(Y.x,Y.y);Q._energyQueue.push({entityId:z,energyDelta:D.type.energyDelta})}return Q}function LV(Q,z){const Y=Q.entities[z.entityId];switch(z.oldTileType){case F.tiles.portalstartaerobot:Q=JJ(Q,Y,F.entities.AeroBot);break;case F.tiles.portalstartworkbot:Q=JJ(Q,Y,F.entities.WorkBot);break;default:}return Q}var TZ=function(Q,z,Y,H){let D=z.x+Y,E=z.y+H,A=Q.getTile(D,E).type;return D>=0&&D<Q.widthTiles&&E>=0&&E<Q.heightTiles&&A!==F.tiles.rock&&A!==F.tiles.portalclosed&&!A.name.startsWith("wall")},gZ=function(Q,z,Y,H,D){const E=z.x+H,A=z.y+D,b=Q.getTile(E,A).type;if(Y)return Y.type.effects.includes(F.effects.WallCrusher.name)&&b===F.tiles.wallweak;return!1};var PV=CJ(XJ(),1);class n0{seed;_rotRng;constructor(Q=1337){this.seed=Q,this._rotRng=PV.RNG.clone(),this._rotRng.setSeed(Q)}getPercentage(){return this._rotRng.getPercentage()}getItem(Q){return this._rotRng.getItem(Q)}}var r0=CJ(XJ(),1);function FV(Q,z=GJ){r0.RNG.setSeed(z);let Y=new r0.Noise.Simplex;const H=qJ.width*kJ.width,D=qJ.height*kJ.height;let E=[];for(let N=0;N<D;N++)for(let I=0;I<H;I++){let x=Y.get(I/HV,N/HV),s;if(x<=-0.5)s=F.tiles.water;else if(x<=0)s=F.tiles.void;else if(x<0.5)s=F.tiles.tree;else s=F.tiles.rock;E.push(T0(s))}const A="simplex="+z;let b=new g0(A,H,D,E);if(Q.maps[A]=b,z===1337)Q=d(Q,"npc0",F.entities.Pioneer,"simplex="+GJ,130,127,{faction:F.factions.Spirits}),Q=d(Q,"npc1",F.entities.Pioneer,"simplex="+GJ,124,127,{faction:F.factions.Spirits}),Q=K0(Q,F.items.battery,"simplex="+GJ,127,130);else{const N=new n0(z);for(let I=0;I<D;I++)for(let x=0;x<H;x++){const s=b.getTile(x,I);if(N.getPercentage()<=1&&(s.type===F.tiles.void||s.type===F.tiles.tree))switch(N.getItem(["pioneer","junk","matter"])){case"pioneer":Q=d(Q,b.id+"_pioneer_"+x+"_"+I,F.entities.Pioneer,b.id,x,I,{faction:F.factions.Pyrates,ai:F.ais.aggrorange});break;case"junk":Q=K0(Q,F.items.junk,A,x,I);break;case"matter":Q=K0(Q,F.items.matter,A,x,I);break}}}return Q}var GJ=1337,HV=55;function DV(Q,z=hZ){let Y=wV(1024,1024,F.tiles.void);Y.id="solarsystem="+z,Q.maps[Y.id]=Y;const H=new n0(z),D=H.getItem([2,3,4,5,6,7,8,9,10,11,12]);let E=128,A=512-E;const b=Math.floor(A/D);Y=xZ(Y,H);let N=wV(128,128,F.tiles.voidtrue);mZ(N,63,63,62,F.tiles.sun),_Z(N,63,63,F.tiles.sun),Y.pasteOnto(N,448,448);for(let I=E;I<512;I+=b){let x=H.getItem([-1,1])*H.getItem(KV(I)),s=H.getItem([-1,1])*Math.floor(Math.sqrt(I*I-x*x));x+=512,s+=512;const m=H.getItem([16,24,32]),t=Math.floor(m/2)-1;Q=FV(Q,z);const l=Q.maps["simplex="+z].sample(m,m).circular();Y.pasteOnto(l,x-(t+1),s-(t+1)),z++}return Y.setTile(584,401,F.tiles.portal,{mapId:"bot_elevator",x:11,y:47}),Y.setTile(584,400,F.tiles.wall),Y.setTile(583,400,F.tiles.wall),Y.setTile(585,400,F.tiles.wall),Y.setTile(584,399,F.tiles.wall),Y.setTile(583,399,F.tiles.wall),Y.setTile(585,399,F.tiles.wall),Y.setTile(584,398,F.tiles.wall),Y.setTile(583,398,F.tiles.wall),Y.setTile(585,398,F.tiles.wall),Q}var wV=function(Q,z,Y){const H=[];for(let A=0;A<Q*z;A++)H.push(T0(Y));return new g0("__temp",Q,z,H)},xZ=function(Q,z){for(let Y=0;Y<Q.heightTiles;Y++)for(let H=0;H<Q.widthTiles;H++)if(z.getPercentage()<=1)Q.setTile(H,Y,z.getItem([F.tiles.spacevoidstarwhite,F.tiles.spacevoidstaryellow]));return Q},mZ=function(Q,z,Y,H,D){let E=1-H,A=1,b=-2*H,N=0,I=H;Q.setTile(z,Y+H,D),Q.setTile(z,Y-H,D),Q.setTile(z+H,Y,D),Q.setTile(z-H,Y,D);while(N<I){if(E>=0)I-=1,b+=2,E+=b;N+=1,A+=2,E+=A,Q.setTile(z+N,Y+I,D),Q.setTile(z-N,Y+I,D),Q.setTile(z+N,Y-I,D),Q.setTile(z-N,Y-I,D),Q.setTile(z+I,Y+N,D),Q.setTile(z-I,Y+N,D),Q.setTile(z+I,Y-N,D),Q.setTile(z-I,Y-N,D)}return Q},_Z=function(Q,z,Y,H){const{widthTiles:D,heightTiles:E}=Q,A=[];A.push({x:z,y:Y});let b=void 0;while(typeof(b=A.shift())!=="undefined"){let N=b,I=b;if(b.x+1<D)I={x:b.x+1,y:b.y};while(Q.getTile(N.x,N.y).type!==H){if(Q.setTile(N.x,N.y,H),N.y+1<E){if(Q.getTile(N.x,N.y+1).type!==H)A.push({x:N.x,y:N.y+1})}if(N.y-1>=0){if(Q.getTile(N.x,N.y-1).type!==H)A.push({x:N.x,y:N.y-1})}if(N.x-1>=0)N.x-=1;else break}while(Q.getTile(I.x,I.y).type!==H){if(Q.setTile(I.x,I.y,H),I.y+1<E){if(Q.getTile(I.x,I.y+1).type!==H)A.push({x:I.x,y:I.y+1})}if(I.y-1>=0){if(Q.getTile(I.x,I.y-1).type!==H)A.push({x:I.x,y:I.y-1})}if(I.x+1<D)I.x+=1;else break}}return Q},hZ=1337;function WV(Q,z){if(z?.oldMapId?.startsWith("shop_instance")){Q=zV(Q,z.oldMapId);const Y=Q.maps[z.newMapId],H=Y.getTile(z.newX,z.newY);Y.setTile(z.newX,z.newY,H.type,{mapId:"shop_instance",x:z.oldX,y:z.oldY})}if(z?.newMapId?.startsWith("shop_instance")){const Y=zJ(yZ);Y.id+="_"+z.oldMapId+"_"+z.entityId,Y.setTile(z.newX,z.newY,F.tiles.portal,{mapId:z.oldMapId,x:z.oldX,y:z.oldY}),Q.maps[z.oldMapId].setTile(z.oldX,z.oldY,z.oldTileType,{mapId:Y.id,x:z.newX,y:z.newY});const D=Q.entities[z.entityId];if(D.id.startsWith("player"))Q.currentMapId=Y.id;D.mapId=Y.id,D.x=z.newX,D.Y=z.newY,Q.maps[Y.id]=Y,Q=ZJ(Q,F.items.hammer,Y.id,4,4,0,-200),Q=ZJ(Q,F.items.battery,Y.id,4,6,0,-200),Q=ZJ(Q,F.items.gold,Y.id,4,8,0,-1e4),Q=d(Q,Y.id+"_shopkeeper",F.entities.AeroBot,Y.id,6,2,{faction:D.options.faction}),Q=d(Q,Y.id+"_shopper",F.entities.WorkBot,Y.id,1,12,{faction:D.options.faction})}return Q}var yZ=`!
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
`;function RV(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!1,actionLog:[],currentMapId:"",entities:{},items:{},lastSpacePositionByEntity:{},maps:{},tools:{}}}function MV(Q){let z=void 0;while(typeof(z=Q._combatQueue.shift())!=="undefined"){let Y=-1,H=-5;const D=l0(Q,z.entityId);if(D)Y=D.type.energyCost,H=-1*Math.abs(D.type.damage);Q._energyQueue.push({entityId:z.entityId,energyDelta:Y}),Q._energyQueue.push({entityId:z.otherEntityId,energyDelta:H})}return Q}function OV(Q){let z=void 0;while(typeof(z=Q._energyQueue.shift())!=="undefined"){let Y=Q.entities[z.entityId];if(Y.energy=Math.min(Y.energy+z.energyDelta,Y.energyMax),Y.energy<=0){if(Q._despawnQueue.push(Y.id),!O0(Y)){const H=Math.max(1,Math.floor(Y.energyMax/3));Q=tJ(Q,H,Y.mapId,Y.x,Y.y)}}}return Q}function EV(Q){let z=void 0;while(typeof(z=Q._despawnQueue.shift())!=="undefined")Q=t0(Q,z),Q=UJ(Q,z);return Q}function jV(Q){return Q}function CV(Q){return Q=UV(Q),Q=MV(Q),Q=BV(Q),Q=OV(Q),Q=EV(Q),Q=jV(Q),Q}class BJ{state;constructor(){}init(){this.state=RV(),this.state=IJ(this.state,"entitymap.updated.event",LV),this.state=IJ(this.state,"entitymap.updated.event",WV),this.state=DV(this.state);for(let Q in F.maps)this.state.maps[Q]=zJ(F.maps[Q]);this.state=d(this.state,"manual0",F.entities.Spirit,"manual",4,26,{faction:F.factions.Spirits}),this.state=d(this.state,"manual1",F.entities.AeroBot,"manual",4,27,{faction:F.factions.Spirits}),this.state=d(this.state,"manual2",F.entities.WorkBot,"manual",4,28,{faction:F.factions.Spirits}),this.state=d(this.state,"manual3",F.entities.Cleaner,"manual",4,29,{faction:F.factions.Spirits}),this.state=d(this.state,"manual4",F.entities.Pioneer,"manual",4,30,{faction:F.factions.Spirits}),this.state=d(this.state,"manual5",F.entities.Spirit,"manual",54,36,{faction:F.factions.Pyrates,ai:F.ais.aggrorange}),this.state=K0(this.state,F.items.junk,"manual",4,36),this.state=K0(this.state,F.items.goo,"manual",12,36),this.state=K0(this.state,F.items.matter,"manual",4,37),this.state=K0(this.state,F.items.gold,"manual",4,38),this.state=K0(this.state,F.items.energy,"manual",4,39),this.state=K0(this.state,F.items.battery,"manual",4,40),this.state=K0(this.state,F.items.wrench,"manual",4,41),this.state=d(this.state,"pioneerguardian0",F.entities.Pioneer,"bot_station",8,3,{faction:F.factions.Guardians,ai:F.ais.aggrorangeshort}),this.state=bJ(this.state,"pioneerguardian0",F.items.hammer),this.state=d(this.state,"cleanerguardian0",F.entities.Cleaner,"bot_station",10,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian1",F.entities.Cleaner,"bot_station",12,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian2",F.entities.Cleaner,"bot_station",14,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian3",F.entities.Cleaner,"bot_station",16,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian4",F.entities.Cleaner,"bot_station",18,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian5",F.entities.Cleaner,"bot_station",20,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian6",F.entities.Cleaner,"bot_station",22,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian7",F.entities.Cleaner,"bot_station",24,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian8",F.entities.Cleaner,"bot_station",26,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian9",F.entities.Cleaner,"bot_station",28,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerjailer0",F.entities.Cleaner,"bot_prison",18,11,{faction:F.factions.Guardians,ai:F.ais.aggrorange}),this.state=d(this.state,"cleanerjailer1",F.entities.Cleaner,"bot_prison",17,2,{faction:F.factions.Guardians,ai:F.ais.aggrorange}),this.state=d(this.state,"cleanerjailer2",F.entities.Cleaner,"bot_prison",24,5,{faction:F.factions.Guardians,ai:F.ais.aggrorange}),this.state=d(this.state,"cleanerjailer3",F.entities.Cleaner,"bot_prison",29,24,{faction:F.factions.Guardians,ai:F.ais.aggrorangeshort}),this.state=d(this.state,"prisoner0",F.entities.AeroBot,"bot_prison",34,22,{faction:F.factions.Spirits}),this.state=d(this.state,"prisoner1",F.entities.WorkBot,"bot_prison",9,22,{faction:F.factions.Spirits}),this.state=K0(this.state,F.items.broom,"bot_prison",28,1),this.state=K0(this.state,F.items.battery,"bot_prison",43,30),this.state=K0(this.state,F.items.matter,"bot_prison",9,30),this.state=K0(this.state,F.items.battery,"bot_dormitory",13,8),this.state=K0(this.state,F.items.junk,"bot_dormitory_hidden",1,2),this.state=K0(this.state,F.items.battery,"bot_dormitory_hidden",2,2),this.state=K0(this.state,F.items.shocker,"bot_bar",10,11),this.state=K0(this.state,F.items.hammer,"bot_elevator",12,3),this.state=K0(this.state,F.items.wrench,"bot_factory",45,19),this.state=K0(this.state,F.items.battery,"bot_factory",4,13);for(let Q=2;Q<=8;Q++)for(let z=2;z<=8;z++)this.state=K0(this.state,F.items.junk,"bot_factory",z,Q);this.state=fJ(this.state,"bot_bar",14,3),this.state=fJ(this.state,"bot_bar",14,12),this.state=NJ(this.state,"playground",9,9),this.state=NJ(this.state,"playground",10,9);for(let Q=1;Q<=18;Q++)this.state=K0(this.state,F.items.battery,"playground",Q,18);return this.state.currentMapId="botmos_hull_selection",this.state=d(this.state,C0(),F.entities.Spirit,this.state.currentMapId,9,5,{faction:F.factions.Spirits}),this.state}update(Q){let z=this.state.entities[C0()];if(z){if(Q){if(Q===F.commands.M)this.state._menuOpen=!this.state._menuOpen;else this.state=XV(this.state,z,Q),this.state=CV(this.state);this.state.actionLog.push(Q.key)}}else sJ("Game over! "+this.state.actionLog.length+" Turns: "+this.state.actionLog.join("")),this.state.currentMapId="botmos_hull_selection",this.state=d(this.state,C0(),F.entities.Spirit,this.state.currentMapId,9,5,{faction:F.factions.Spirits});return this.state}play(Q){for(let z=0;z<Q.length;z++){const Y=Q[z];this.update(F.commands[Y])}return this.state}}var A0=function(Q){const z=Date.now();if(TJ!==void 0&&z-AV>=80)AV=z,TJ(Q)},q0=function(Q){Q.preventDefault(),Q.stopPropagation()},pZ=function(){let Q=null;if(p.right)Q=F.commands.E;if(p.left)Q=F.commands.W;if(p.down)Q=F.commands.S;if(p.up)Q=F.commands.N;if(p.up&&p.right){if(Q===F.commands.N&&s0===F.commands.N)Q=F.commands.E}if(p.up&&p.left){if(Q===F.commands.N&&s0===F.commands.N)Q=F.commands.W}if(p.down&&p.right){if(Q===F.commands.S&&s0===F.commands.S)Q=F.commands.E}if(p.down&&p.left){if(Q===F.commands.S&&s0===F.commands.S)Q=F.commands.W}if(p.a)Q=F.commands.A;if(p.b)Q=F.commands.B;if(p.menu)Q=F.commands.M;if(s0=Q,Q!==null)uJ.push(Q)},vV=function(){pZ();let Q=uJ.shift()||null;return uJ=[],Q};function fV(Q){TJ=Q}var p={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1},uJ=[],TJ=void 0,AV=0;document.body.addEventListener("keydown",function(Q){if(Q.defaultPrevented)return;switch(Q.key){case"w":case"ArrowUp":p.up=!0,q0(Q);break;case"a":case"ArrowLeft":p.left=!0,q0(Q);break;case"s":case"ArrowDown":p.down=!0,q0(Q);break;case"d":case"ArrowRight":p.right=!0,q0(Q);break;case"x":p.a=!0,q0(Q);break;case" ":case"y":case"z":p.b=!0,q0(Q);break;case"m":p.menu=!0,q0(Q);break;default:}A0(vV())});document.body.addEventListener("keyup",function(Q){if(Q.defaultPrevented)return;switch(Q.key){case"w":case"ArrowUp":p.up=!1,q0(Q);break;case"a":case"ArrowLeft":p.left=!1,q0(Q);break;case"s":case"ArrowDown":p.down=!1,q0(Q);break;case"d":case"ArrowRight":p.right=!1,q0(Q);break;case"x":p.a=!1,q0(Q);break;case" ":case"y":case"z":p.b=!1,q0(Q);break;case"m":p.menu=!1,q0(Q);break;default:}});document.body.addEventListener("click",function(Q){const{clientX:z,clientY:Y}=Q,D=document.body.clientWidth/3,A=document.body.clientHeight/3;if(z>=D&&z<2*D&&Y<A)A0(F.commands.N),q0(Q);else if(z<D&&Y<A)A0(F.commands.B),q0(Q);else if(z>=2*D&&Y<A)A0(F.commands.A),q0(Q);else if(z<D&&Y>=A&&Y<2*A)A0(F.commands.W),q0(Q);else if(z>=2*D&&Y>=A&&Y<2*A)A0(F.commands.E),q0(Q);else if(z>=D&&z<2*D&&Y>=2*A)A0(F.commands.S),q0(Q);else if(z>=D&&z<2*D&&Y>=A&&Y<2*A)A0(F.commands.M),q0(Q)});var s0=null,NV=void 0;window.addEventListener("gamepadconnected",(Q)=>{NV=setInterval(function(){let z=navigator.getGamepads()[Q.gamepad?.index];if(p.right=z.buttons[15].pressed,p.left=z.buttons[14].pressed,p.down=z.buttons[13].pressed,p.up=z.buttons[12].pressed,p.a=z.buttons[0].pressed||z.buttons[2].pressed,p.b=z.buttons[1].pressed||z.buttons[3].pressed,p.menu=z.buttons[9].pressed,p.right||p.left||p.down||p.up||p.a||p.b||p.menu)A0(vV())},100)});window.addEventListener("gamepaddisconnected",(Q)=>{clearInterval(NV)});var SV=CJ(XJ(),1);var LJ=function(Q){return F.colors[Q]},cZ=function(Q,z){let Y=Q.currentMapId,H=Q.maps[Y];for(var D=0;D<z.height;D++)for(var E=0;E<z.width;E++){var A=H.getTile(z.x+E,z.y+D),b=F.colors.black,N=F.colors.white,I="";if(!!A&&!!A.type)b=LJ(A.type.bg),N=LJ(A.type.fg),I=A.options.sign||A.type.icon;S0.draw(E,D,I,N,b)}const x=KJ(Q,Y);for(let y=0;y<x.length;y++){let c=x[y];S0.drawOver(c.x-z.x,c.y-z.y,c.type.icon,LJ(c.type.color))}const s=C0(),m=Q.entities[s],t=((m||{}).options||{}).faction||void 0,l=u0(Q,Y);for(let y=0;y<l.length;y++){const c=l[y];let $0=t===c.options.faction?F.colors.white:LJ(c.options.faction.color);if(J0.highlightEnemy&&!O0(c))$0=t===c.options.faction?F.colors.cybergreen:F.colors.cybermagenta;if(c===m)$0=F.colors.white;S0.drawOver(c.x-z.x,c.y-z.y,c.type.icon,$0)}if(!!m&&J0.showUI){let y="";const c=l0(Q,s);if(c)y+=c.type.name+" ";const $0=VJ(Q,m);let G0=m.type.icon+" "+m.energy+"/"+m.energyMax+" "+y+"X:"+$0.A.name+" Y:"+$0.B.name,H0=Y0.height-1;if(m.y-z.y>=Y0.height-3)H0=0;S0.drawText(0,H0,"%c{white}%b{black}"+G0,z.width)}if(Q._menuOpen){const y=[];if(y.push("BotMos Menu"),y.push(""),m){y.push("Hull: "+m.type.icon+" ("+m.type.name+")"),y.push("Energy: "+m.energy+"/"+m.energyMax),y.push("Gold: "+m.gold),y.push("Matter: "+m.matter);const c=l0(Q,s);if(c)y.push("Tool: "+c.type.name);if(J0.debug)y.push("DEBUG Position: "+m.x+","+m.y),y.push("DEBUG Map: "+m.mapId)}for(let c=0;c<y.length;c++)S0.drawText(0,c,"%c{#74ee15}%b{black}"+y[c],z.width)}for(let y=0;y<vJ.length;y++){let c=vJ[y];S0.drawText(0,y,"%c{green}%b{black}"+c,z.width)}};async function h0(Q){const z=Q.entities[C0()],Y=z?z:IV,H=dZ(Y);cZ(Q,H),IV=Y}async function bV(Q){S0.setOptions(Q)}var dZ=function(Q){return{x:Math.min(Math.max(0,Q.x-Math.floor(Y0.width/2)),AJ.WIDTH-Y0.width),y:Math.min(Math.max(0,Q.y-Math.floor(Y0.height/2)),AJ.HEIGHT-Y0.height),width:Y0.width,height:Y0.height}},S0=new SV.Display(Y0);document.body.appendChild(S0.getContainer());var IV={x:0,y:0};var W0=new BJ;window.onload=function(){h0(W0.init())};window.onresize=function(){const Q=typeof window!=="undefined"?window.innerWidth:0,z=typeof window!=="undefined"?window.innerHeight:0;J0.cameraWidth=Math.floor(Q/J0.fontSize),J0.cameraHeight=Math.floor(z/J0.fontSize),Y0.width=Math.floor(J0.cameraWidth*(1/J0.zoom)),Y0.height=Math.floor(J0.cameraHeight*(1/J0.zoom)),bV(Y0),h0(W0.state)};fV(function(Q){h0(W0.update(Q))});if(!window.BMActionLog)window.BMActionLog=function(){return W0.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(Q){h0(W0.play(Q))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){J0.debug=!J0.debug,h0(W0.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){J0.showUI=!J0.showUI,h0(W0.state)};if(J0.debug){if(!window.BMDebugState)window.BMDebugState=function(){return W0.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){const Q=Object.keys(W0.state.maps).length,z=Object.keys(W0.state.entities).length,Y=Object.keys(W0.state.items).length,H=Object.keys(W0.state.tools).length;return`Maps: ${Q}, Entities: ${z}, Items: ${Y}, Tools: ${H}`}}window.focus();
