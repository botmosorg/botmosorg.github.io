var RV=Object.create;var{defineProperty:rZ,getPrototypeOf:EV,getOwnPropertyNames:OV}=Object;var jV=Object.prototype.hasOwnProperty;var CZ=(Q,z,Y)=>{Y=Q!=null?RV(EV(Q)):{};const P=z||!Q||!Q.__esModule?rZ(Y,"default",{value:Q,enumerable:!0}):Y;for(let D of OV(Q))if(!jV.call(P,D))rZ(P,D,{get:()=>Q[D],enumerable:!0});return P};var CV=(Q,z)=>()=>(z||Q((z={exports:{}}).exports,z),z.exports);var $Z=CV((zZ,YJ)=>{var H0=function(Q){if(Q===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Q},Q0=function(Q,z){Q.prototype=Object.create(z.prototype),Q.prototype.constructor=Q,Q.__proto__=z};(function(Q,z){typeof zZ==="object"&&typeof YJ!=="undefined"?z(zZ):typeof define==="function"&&define.amd?define(["exports"],z):z(Q.ROT={})})(zZ,function(Q){var z=0.00000000023283064365386964,Y=function(){function X(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var G=X.prototype;return G.getSeed=function $(){return this._seed},G.setSeed=function $(K){return K=K<1?1/K:K,this._seed=K,this._s0=(K>>>0)*z,K=K*69069+1>>>0,this._s1=K*z,K=K*69069+1>>>0,this._s2=K*z,this._c=1,this},G.getUniform=function $(){var K=2091639*this._s0+this._c*z;return this._s0=this._s1,this._s1=this._s2,this._c=K|0,this._s2=K-this._c,this._s2},G.getUniformInt=function $(K,Z){var J=Math.max(K,Z),V=Math.min(K,Z);return Math.floor(this.getUniform()*(J-V+1))+V},G.getNormal=function $(K,Z){if(K===void 0)K=0;if(Z===void 0)Z=1;var J,V,U;do J=2*this.getUniform()-1,V=2*this.getUniform()-1,U=J*J+V*V;while(U>1||U==0);var q=J*Math.sqrt(-2*Math.log(U)/U);return K+q*Z},G.getPercentage=function $(){return 1+Math.floor(this.getUniform()*100)},G.getItem=function $(K){if(!K.length)return null;return K[Math.floor(this.getUniform()*K.length)]},G.shuffle=function $(K){var Z=[],J=K.slice();while(J.length){var V=J.indexOf(this.getItem(J));Z.push(J.splice(V,1)[0])}return Z},G.getWeightedValue=function $(K){var Z=0;for(var J in K)Z+=K[J];var V=this.getUniform()*Z,U,q=0;for(U in K)if(q+=K[U],V<q)return U;return U},G.getState=function $(){return[this._s0,this._s1,this._s2,this._c]},G.setState=function $(K){return this._s0=K[0],this._s1=K[1],this._s2=K[2],this._c=K[3],this},G.clone=function $(){var K=new X;return K.setState(this.getState())},X}(),P=new Y().setSeed(Date.now()),D=function(){function X(){}var G=X.prototype;return G.getContainer=function $(){return null},G.setOptions=function $(K){this._options=K},X}(),O=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._ctx=document.createElement("canvas").getContext("2d"),K}var $=G.prototype;return $.schedule=function K(Z){requestAnimationFrame(Z)},$.getContainer=function K(){return this._ctx.canvas},$.setOptions=function K(Z){X.prototype.setOptions.call(this,Z);var J=Z.fontStyle?Z.fontStyle+" ":"",V=J+" "+Z.fontSize+"px "+Z.fontFamily;this._ctx.font=V,this._updateSize(),this._ctx.font=V,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},$.clear=function K(){this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height)},$.eventToPosition=function K(Z,J){var V=this._ctx.canvas,U=V.getBoundingClientRect();if(Z-=U.left,J-=U.top,Z*=V.width/U.width,J*=V.height/U.height,Z<0||J<0||Z>=V.width||J>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,J)},G}(D);function A(X,G){return(X%G+G)%G}function b(X,G,$){if(G===void 0)G=0;if($===void 0)$=1;if(X<G)return G;if(X>$)return $;return X}function N(X){return X.charAt(0).toUpperCase()+X.substring(1)}function f(X){for(var G=arguments.length,$=new Array(G>1?G-1:0),K=1;K<G;K++)$[K-1]=arguments[K];var Z=f.map,J=function V(U,q,L,B){if(X.charAt(B-1)=="%")return U.substring(1);if(!$.length)return U;var H=$[0],w=q||L,W=w.split(","),M=W.shift()||"",R=Z[M.toLowerCase()];if(!R)return U;H=$.shift();var E=H[R].apply(H,W),I=M.charAt(0);if(I!=I.toLowerCase())E=N(E);return E};return X.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,J)}f.map={s:"toString"};var h=Object.freeze({mod:A,clamp:b,capitalize:N,format:f}),s=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._spacingX=0,K._spacingY=0,K._hexSize=0,K}var $=G.prototype;return $.draw=function K(Z,J){var V=Z[0],U=Z[1],q=Z[2],L=Z[3],B=Z[4],H=[(V+1)*this._spacingX,U*this._spacingY+this._hexSize];if(this._options.transpose)H.reverse();if(J)this._ctx.fillStyle=B,this._fill(H[0],H[1]);if(!q)return;this._ctx.fillStyle=L;var w=[].concat(q);for(var W=0;W<w.length;W++)this._ctx.fillText(w[W],H[0],Math.ceil(H[1]))},$.computeSize=function K(Z,J){if(this._options.transpose)Z+=J,J=Z-J,Z-=J;var V=Math.floor(Z/this._spacingX)-1,U=Math.floor((J-2*this._hexSize)/this._spacingY+1);return[V,U]},$.computeFontSize=function K(Z,J){if(this._options.transpose)Z+=J,J=Z-J,Z-=J;var V=2*Z/((this._options.width+1)*Math.sqrt(3))-1,U=J/(2+1.5*(this._options.height-1)),q=Math.min(V,U),L=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var B=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=L;var H=B/100;q=Math.floor(q)+1;var w=2*q/(this._options.spacing*(1+H/Math.sqrt(3)));return Math.ceil(w)-1},$._normalizedEventToPosition=function K(Z,J){var V;if(this._options.transpose)Z+=J,J=Z-J,Z-=J,V=this._ctx.canvas.width;else V=this._ctx.canvas.height;var U=V/this._options.height;if(J=Math.floor(J/U),A(J,2))Z-=this._spacingX,Z=1+2*Math.floor(Z/(2*this._spacingX));else Z=2*Math.floor(Z/(2*this._spacingX));return[Z,J]},$._fill=function K(Z,J){var V=this._hexSize,U=this._options.border,q=this._ctx;if(q.beginPath(),this._options.transpose)q.moveTo(Z-V+U,J),q.lineTo(Z-V/2+U,J+this._spacingX-U),q.lineTo(Z+V/2-U,J+this._spacingX-U),q.lineTo(Z+V-U,J),q.lineTo(Z+V/2-U,J-this._spacingX+U),q.lineTo(Z-V/2+U,J-this._spacingX+U),q.lineTo(Z-V+U,J);else q.moveTo(Z,J-V+U),q.lineTo(Z+this._spacingX-U,J-V/2+U),q.lineTo(Z+this._spacingX-U,J+V/2-U),q.lineTo(Z,J+V-U),q.lineTo(Z-this._spacingX+U,J+V/2-U),q.lineTo(Z-this._spacingX+U,J-V/2+U),q.lineTo(Z,J-V+U);q.fill()},$._updateSize=function K(){var Z=this._options,J=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(Z.spacing*(Z.fontSize+J/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var V,U;if(Z.transpose)V="height",U="width";else V="width",U="height";this._ctx.canvas[V]=Math.ceil((Z.width+1)*this._spacingX),this._ctx.canvas[U]=Math.ceil((Z.height-1)*this._spacingY+2*this._hexSize)},G}(O),m=function(){var X=function(G){Q0($,G);function $(){var Z=G.call(this)||this;return Z._spacingX=0,Z._spacingY=0,Z._canvasCache={},Z}var K=$.prototype;return K.setOptions=function Z(J){G.prototype.setOptions.call(this,J),this._canvasCache={}},K.draw=function Z(J,V){if($.cache)this._drawWithCache(J);else this._drawNoCache(J,V)},K._drawWithCache=function Z(J){var V=J[0],U=J[1],q=J[2],L=J[3],B=J[4],H=""+q+L+B,w;if(H in this._canvasCache)w=this._canvasCache[H];else{var W=this._options.border;w=document.createElement("canvas");var M=w.getContext("2d");if(w.width=this._spacingX,w.height=this._spacingY,M.fillStyle=B,M.fillRect(W,W,w.width-W,w.height-W),q){M.fillStyle=L,M.font=this._ctx.font,M.textAlign="center",M.textBaseline="middle";var R=[].concat(q);for(var E=0;E<R.length;E++)M.fillText(R[E],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[H]=w}this._ctx.drawImage(w,V*this._spacingX,U*this._spacingY)},K._drawNoCache=function Z(J,V){var U=J[0],q=J[1],L=J[2],B=J[3],H=J[4];if(V){var w=this._options.border;this._ctx.fillStyle=H,this._ctx.fillRect(U*this._spacingX+w,q*this._spacingY+w,this._spacingX-w,this._spacingY-w)}if(!L)return;this._ctx.fillStyle=B;var W=[].concat(L);for(var M=0;M<W.length;M++)this._ctx.fillText(W[M],(U+0.5)*this._spacingX,Math.ceil((q+0.5)*this._spacingY))},K.computeSize=function Z(J,V){var U=Math.floor(J/this._spacingX),q=Math.floor(V/this._spacingY);return[U,q]},K.computeFontSize=function Z(J,V){var U=Math.floor(J/this._options.width),q=Math.floor(V/this._options.height),L=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var B=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=L;var H=B/100,w=H*q/U;if(w>1)q=Math.floor(q/w);return Math.floor(q/this._options.spacing)},K._normalizedEventToPosition=function Z(J,V){return[Math.floor(J/this._spacingX),Math.floor(V/this._spacingY)]},K._updateSize=function Z(){var J=this._options,V=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(J.spacing*V),this._spacingY=Math.ceil(J.spacing*J.fontSize),J.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=J.width*this._spacingX,this._ctx.canvas.height=J.height*this._spacingY},$}(O);return X.cache=!1,X}(),t=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._colorCanvas=document.createElement("canvas"),K}var $=G.prototype;return $.draw=function K(Z,J){var V=Z[0],U=Z[1],q=Z[2],L=Z[3],B=Z[4],H=this._options.tileWidth,w=this._options.tileHeight;if(J)if(this._options.tileColorize)this._ctx.clearRect(V*H,U*w,H,w);else this._ctx.fillStyle=B,this._ctx.fillRect(V*H,U*w,H,w);if(!q)return;var W=[].concat(q),M=[].concat(L),R=[].concat(B);for(var E=0;E<W.length;E++){var I=this._options.tileMap[W[E]];if(!I)throw new Error("Char \""+W[E]+"\" not found in tileMap");if(this._options.tileColorize){var u=this._colorCanvas,x=u.getContext("2d");x.globalCompositeOperation="source-over",x.clearRect(0,0,H,w);var _=M[E],e=R[E];if(x.drawImage(this._options.tileSet,I[0],I[1],H,w,0,0,H,w),_!="transparent")x.fillStyle=_,x.globalCompositeOperation="source-atop",x.fillRect(0,0,H,w);if(e!="transparent")x.fillStyle=e,x.globalCompositeOperation="destination-over",x.fillRect(0,0,H,w);this._ctx.drawImage(u,V*H,U*w,H,w)}else this._ctx.drawImage(this._options.tileSet,I[0],I[1],H,w,V*H,U*w,H,w)}},$.computeSize=function K(Z,J){var V=Math.floor(Z/this._options.tileWidth),U=Math.floor(J/this._options.tileHeight);return[V,U]},$.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},$._normalizedEventToPosition=function K(Z,J){return[Math.floor(Z/this._options.tileWidth),Math.floor(J/this._options.tileHeight)]},$._updateSize=function K(){var Z=this._options;this._ctx.canvas.width=Z.width*Z.tileWidth,this._ctx.canvas.height=Z.height*Z.tileHeight,this._colorCanvas.width=Z.tileWidth,this._colorCanvas.height=Z.tileHeight},G}(O);function l(X){var G,$;if(X in j)G=j[X];else{if(X.charAt(0)=="#"){var K=X.match(/[0-9a-f]/gi)||[],Z=K.map(function(V){return parseInt(V,16)});if(Z.length==3)G=Z.map(function(V){return V*17});else{for(var J=0;J<3;J++)Z[J+1]+=16*Z[J],Z.splice(J,1);G=Z}}else if($=X.match(/rgb\(([0-9, ]+)\)/i))G=$[1].split(/\s*,\s*/).map(function(V){return parseInt(V)});else G=[0,0,0];j[X]=G}return G.slice()}function y(X){var G=X.slice();for(var $=arguments.length,K=new Array($>1?$-1:0),Z=1;Z<$;Z++)K[Z-1]=arguments[Z];for(var J=0;J<3;J++)for(var V=0;V<K.length;V++)G[J]+=K[V][J];return G}function c(X){for(var G=arguments.length,$=new Array(G>1?G-1:0),K=1;K<G;K++)$[K-1]=arguments[K];for(var Z=0;Z<3;Z++)for(var J=0;J<$.length;J++)X[Z]+=$[J][Z];return X}function $0(X){var G=X.slice();for(var $=arguments.length,K=new Array($>1?$-1:0),Z=1;Z<$;Z++)K[Z-1]=arguments[Z];for(var J=0;J<3;J++){for(var V=0;V<K.length;V++)G[J]*=K[V][J]/255;G[J]=Math.round(G[J])}return G}function G0(X){for(var G=arguments.length,$=new Array(G>1?G-1:0),K=1;K<G;K++)$[K-1]=arguments[K];for(var Z=0;Z<3;Z++){for(var J=0;J<$.length;J++)X[Z]*=$[J][Z]/255;X[Z]=Math.round(X[Z])}return X}function P0(X,G,$){if($===void 0)$=0.5;var K=X.slice();for(var Z=0;Z<3;Z++)K[Z]=Math.round(K[Z]+$*(G[Z]-X[Z]));return K}var F0=P0;function C(X,G,$){if($===void 0)$=0.5;var K=g(X),Z=g(G);for(var J=0;J<3;J++)K[J]+=$*(Z[J]-K[J]);return o(K)}var k=C;function T(X,G){if(!(G instanceof Array))G=Math.round(P.getNormal(0,G));var $=X.slice();for(var K=0;K<3;K++)$[K]+=G instanceof Array?Math.round(P.getNormal(0,G[K])):G;return $}function g(X){var G=X[0]/255,$=X[1]/255,K=X[2]/255,Z=Math.max(G,$,K),J=Math.min(G,$,K),V=0,U,q=(Z+J)/2;if(Z==J)U=0;else{var L=Z-J;switch(U=q>0.5?L/(2-Z-J):L/(Z+J),Z){case G:V=($-K)/L+($<K?6:0);break;case $:V=(K-G)/L+2;break;case K:V=(G-$)/L+4;break}V/=6}return[V,U,q]}function a(X,G,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return X+(G-X)*6*$;if($<0.5)return G;if($<0.6666666666666666)return X+(G-X)*(0.6666666666666666-$)*6;return X}function o(X){var G=X[2];if(X[1]==0)return G=Math.round(G*255),[G,G,G];else{var $=X[1],K=G<0.5?G*(1+$):G+$-G*$,Z=2*G-K,J=a(Z,K,X[0]+0.3333333333333333),V=a(Z,K,X[0]),U=a(Z,K,X[0]-0.3333333333333333);return[Math.round(J*255),Math.round(V*255),Math.round(U*255)]}}function S(X){var G=X.map(function($){return b($,0,255)});return"rgb("+G.join(",")+")"}function v(X){var G=X.map(function($){return b($,0,255).toString(16).padStart(2,"0")});return"#"+G.join("")}var j={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},n=Object.freeze({fromString:l,add:y,add_:c,multiply:$0,multiply_:G0,interpolate:P0,lerp:F0,interpolateHSL:C,lerpHSL:k,randomize:T,rgb2hsl:g,hsl2rgb:o,toRGB:S,toHex:v}),i=function(X){Q0(G,X);function G(){var K=X.call(this)||this;K._uniforms={};try{K._gl=K._initWebGL()}catch(Z){alert(Z.message)}return K}G.isSupported=function K(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var $=G.prototype;return $.schedule=function K(Z){requestAnimationFrame(Z)},$.getContainer=function K(){return this._gl.canvas},$.setOptions=function K(Z){var J=this;X.prototype.setOptions.call(this,Z),this._updateSize();var V=this._options.tileSet;if(V&&"complete"in V&&!V.complete)V.addEventListener("load",function(){return J._updateTexture(V)});else this._updateTexture(V)},$.draw=function K(Z,J){var V=this._gl,U=this._options,q=Z[0],L=Z[1],B=Z[2],H=Z[3],w=Z[4],W=V.canvas.height-(L+1)*U.tileHeight;if(V.scissor(q*U.tileWidth,W,U.tileWidth,U.tileHeight),J){if(U.tileColorize)V.clearColor(0,0,0,0);else V.clearColor.apply(V,x0(w));V.clear(V.COLOR_BUFFER_BIT)}if(!B)return;var M=[].concat(B),R=[].concat(w),E=[].concat(H);V.uniform2fv(this._uniforms.targetPosRel,[q,L]);for(var I=0;I<M.length;I++){var u=this._options.tileMap[M[I]];if(!u)throw new Error("Char \""+M[I]+"\" not found in tileMap");if(V.uniform1f(this._uniforms.colorize,U.tileColorize?1:0),V.uniform2fv(this._uniforms.tilesetPosAbs,u),U.tileColorize)V.uniform4fv(this._uniforms.tint,x0(E[I])),V.uniform4fv(this._uniforms.bg,x0(R[I]));V.drawArrays(V.TRIANGLE_STRIP,0,4)}},$.clear=function K(){var Z=this._gl;Z.clearColor.apply(Z,x0(this._options.bg)),Z.scissor(0,0,Z.canvas.width,Z.canvas.height),Z.clear(Z.COLOR_BUFFER_BIT)},$.computeSize=function K(Z,J){var V=Math.floor(Z/this._options.tileWidth),U=Math.floor(J/this._options.tileHeight);return[V,U]},$.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},$.eventToPosition=function K(Z,J){var V=this._gl.canvas,U=V.getBoundingClientRect();if(Z-=U.left,J-=U.top,Z*=V.width/U.width,J*=V.height/U.height,Z<0||J<0||Z>=V.width||J>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,J)},$._initWebGL=function K(){var Z=this,J=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=J;var V=j0(J,w0,z0);return J.useProgram(V),B0(J),V0.forEach(function(U){return Z._uniforms[U]=J.getUniformLocation(V,U)}),this._program=V,J.enable(J.BLEND),J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA),J.enable(J.SCISSOR_TEST),J},$._normalizedEventToPosition=function K(Z,J){return[Math.floor(Z/this._options.tileWidth),Math.floor(J/this._options.tileHeight)]},$._updateSize=function K(){var Z=this._gl,J=this._options,V=[J.width*J.tileWidth,J.height*J.tileHeight];Z.canvas.width=V[0],Z.canvas.height=V[1],Z.viewport(0,0,V[0],V[1]),Z.uniform2fv(this._uniforms.tileSize,[J.tileWidth,J.tileHeight]),Z.uniform2fv(this._uniforms.targetSize,V)},$._updateTexture=function K(Z){_0(this._gl,Z)},G}(D),V0=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],w0="\n#version 300 es\n\nin vec2 tilePosRel;\nout vec2 tilesetPosPx;\n\nuniform vec2 tilesetPosAbs;\nuniform vec2 tileSize;\nuniform vec2 targetSize;\nuniform vec2 targetPosRel;\n\nvoid main() {\n\tvec2 targetPosPx = (targetPosRel + tilePosRel) * tileSize;\n\tvec2 targetPosNdc = ((targetPosPx / targetSize)-0.5)*2.0;\n\ttargetPosNdc.y *= -1.0;\n\n\tgl_Position = vec4(targetPosNdc, 0.0, 1.0);\n\ttilesetPosPx = tilesetPosAbs + tilePosRel * tileSize;\n}".trim(),z0="\n#version 300 es\nprecision highp float;\n\nin vec2 tilesetPosPx;\nout vec4 fragColor;\nuniform sampler2D image;\nuniform bool colorize;\nuniform vec4 bg;\nuniform vec4 tint;\n\nvoid main() {\n\tfragColor = vec4(0, 0, 0, 1);\n\n\tvec4 texel = texelFetch(image, ivec2(tilesetPosPx), 0);\n\n\tif (colorize) {\n\t\ttexel.rgb = tint.a * tint.rgb + (1.0-tint.a) * texel.rgb;\n\t\tfragColor.rgb = texel.a*texel.rgb + (1.0-texel.a)*bg.rgb;\n\t\tfragColor.a = texel.a + (1.0-texel.a)*bg.a;\n\t} else {\n\t\tfragColor = texel;\n\t}\n}".trim();function j0(X,G,$){var K=X.createShader(X.VERTEX_SHADER);if(X.shaderSource(K,G),X.compileShader(K),!X.getShaderParameter(K,X.COMPILE_STATUS))throw new Error(X.getShaderInfoLog(K)||"");var Z=X.createShader(X.FRAGMENT_SHADER);if(X.shaderSource(Z,$),X.compileShader(Z),!X.getShaderParameter(Z,X.COMPILE_STATUS))throw new Error(X.getShaderInfoLog(Z)||"");var J=X.createProgram();if(X.attachShader(J,K),X.attachShader(J,Z),X.linkProgram(J),!X.getProgramParameter(J,X.LINK_STATUS))throw new Error(X.getProgramInfoLog(J)||"");return J}function B0(X){var G=new Float32Array([0,0,1,0,0,1,1,1]),$=X.createBuffer();X.bindBuffer(X.ARRAY_BUFFER,$),X.bufferData(X.ARRAY_BUFFER,G,X.STATIC_DRAW),X.enableVertexAttribArray(0),X.vertexAttribPointer(0,2,X.FLOAT,!1,0,0)}function _0(X,G){var $=X.createTexture();return X.bindTexture(X.TEXTURE_2D,$),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_MAG_FILTER,X.NEAREST),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_MIN_FILTER,X.NEAREST),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_WRAP_S,X.REPEAT),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_WRAP_T,X.REPEAT),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,0),X.texImage2D(X.TEXTURE_2D,0,X.RGBA,X.RGBA,X.UNSIGNED_BYTE,G),$}var N0={};function x0(X){if(!(X in N0)){var G;if(X=="transparent")G=[0,0,0,0];else if(X.indexOf("rgba")>-1){G=(X.match(/[\d.]+/g)||[]).map(Number);for(var $=0;$<3;$++)G[$]=G[$]/255}else G=l(X).map(function(K){return K/255}),G.push(1);N0[X]=G}return N0[X]}function kJ(X){return"\x1B[0;48;5;"+YZ(X)+"m\x1B[2J"}function uJ(X,G){return"\x1B[0;38;5;"+YZ(X)+";48;5;"+YZ(G)+"m"}function TJ(X,G){return"\x1B["+(G+1)+";"+(X+1)+"H"}function YZ(X){var G=256,$=6,K=$/G,Z=l(X),J=Math.floor(Z[0]*K),V=Math.floor(Z[1]*K),U=Math.floor(Z[2]*K);return J*36+V*6+U*1+16}var gZ=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._offset=[0,0],K._cursor=[-1,-1],K._lastColor="",K}var $=G.prototype;return $.schedule=function K(Z){setTimeout(Z,16.666666666666668)},$.setOptions=function K(Z){X.prototype.setOptions.call(this,Z);var J=[Z.width,Z.height],V=this.computeSize();this._offset=V.map(function(U,q){return Math.floor((U-J[q])/2)})},$.clear=function K(){process.stdout.write(kJ(this._options.bg))},$.draw=function K(Z,J){var V=Z[0],U=Z[1],q=Z[2],L=Z[3],B=Z[4],H=this._offset[0]+V,w=this._offset[1]+U,W=this.computeSize();if(H<0||H>=W[0])return;if(w<0||w>=W[1])return;if(H!==this._cursor[0]||w!==this._cursor[1])process.stdout.write(TJ(H,w)),this._cursor[0]=H,this._cursor[1]=w;if(J){if(!q)q=" "}if(!q)return;var M=uJ(L,B);if(M!==this._lastColor)process.stdout.write(M),this._lastColor=M;if(q!="\t"){var R=[].concat(q);process.stdout.write(R[0])}if(this._cursor[0]++,this._cursor[0]>=W[0])this._cursor[0]=0,this._cursor[1]++},$.computeFontSize=function K(){throw new Error("Terminal backend has no notion of font size")},$.eventToPosition=function K(Z,J){return[Z,J]},$.computeSize=function K(){return[process.stdout.columns,process.stdout.rows]},G}(D),gJ=/%([bc]){([^}]*)}/g,f0=0,b0=1,HZ=2,PZ=3;function hJ(X,G){var $={width:0,height:1},K=FZ(X,G),Z=0;for(var J=0;J<K.length;J++){var V=K[J];switch(V.type){case f0:Z+=V.value.length;break;case b0:$.height++,$.width=Math.max($.width,Z),Z=0;break}}return $.width=Math.max($.width,Z),$}function FZ(X,G){var $=[],K=0;X.replace(gJ,function(J,V,U,q){var L=X.substring(K,q);if(L.length)$.push({type:f0,value:L});return $.push({type:V=="c"?HZ:PZ,value:U.trim()}),K=q+J.length,""});var Z=X.substring(K);if(Z.length)$.push({type:f0,value:Z});return xJ($,G)}function xJ(X,G){if(!G)G=Infinity;var $=0,K=0,Z=-1;while($<X.length){var J=X[$];if(J.type==b0)K=0,Z=-1;if(J.type!=f0){$++;continue}while(K==0&&J.value.charAt(0)==" ")J.value=J.value.substring(1);var V=J.value.indexOf("\n");if(V!=-1){J.value=s0(X,$,V,!0);var U=J.value.split("");while(U.length&&U[U.length-1]==" ")U.pop();J.value=U.join("")}if(!J.value.length){X.splice($,1);continue}if(K+J.value.length>G){var q=-1;while(!0){var L=J.value.indexOf(" ",q+1);if(L==-1)break;if(K+L>G)break;q=L}if(q!=-1)J.value=s0(X,$,q,!0);else if(Z!=-1){var B=X[Z],H=B.value.lastIndexOf(" ");B.value=s0(X,Z,H,!0),$=Z}else J.value=s0(X,$,G-K,!1)}else if(K+=J.value.length,J.value.indexOf(" ")!=-1)Z=$;$++}X.push({type:b0});var w=null;for(var W=0;W<X.length;W++){var M=X[W];switch(M.type){case f0:w=M;break;case b0:if(w){var R=w.value.split("");while(R.length&&R[R.length-1]==" ")R.pop();w.value=R.join("")}w=null;break}}return X.pop(),X}function s0(X,G,$,K){var Z={type:b0},J={type:f0,value:X[G].value.substring($+(K?1:0))};return X.splice(G+1,0,Z,J),X[G].value.substring(0,$)}var mJ=Object.freeze({TYPE_TEXT:f0,TYPE_NEWLINE:b0,TYPE_FG:HZ,TYPE_BG:PZ,measure:hJ,tokenize:FZ}),wZ=80,DZ=25,X0={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},_J={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},yJ={hex:s,rect:m,tile:t,"tile-gl":i,term:gZ},pJ={width:wZ,height:DZ,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},cJ=function(){var X=function(){function G(K){if(K===void 0)K={};this._data={},this._dirty=!1,this._options={},K=Object.assign({},pJ,K),this.setOptions(K),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var $=G.prototype;return $.DEBUG=function K(Z,J,V){var U=[this._options.bg,this._options.fg];this.draw(Z,J,null,null,U[V%U.length])},$.clear=function K(){this._data={},this._dirty=!0},$.setOptions=function K(Z){if(Object.assign(this._options,Z),Z.width||Z.height||Z.fontSize||Z.fontFamily||Z.spacing||Z.layout){if(Z.layout){var J=yJ[Z.layout];this._backend=new J}this._backend.setOptions(this._options),this._dirty=!0}return this},$.getOptions=function K(){return this._options},$.getContainer=function K(){return this._backend.getContainer()},$.computeSize=function K(Z,J){return this._backend.computeSize(Z,J)},$.computeFontSize=function K(Z,J){return this._backend.computeFontSize(Z,J)},$.computeTileSize=function K(Z,J){var V=Math.floor(Z/this._options.width),U=Math.floor(J/this._options.height);return[V,U]},$.eventToPosition=function K(Z){var J,V;if("touches"in Z)J=Z.touches[0].clientX,V=Z.touches[0].clientY;else J=Z.clientX,V=Z.clientY;return this._backend.eventToPosition(J,V)},$.draw=function K(Z,J,V,U,q){if(!U)U=this._options.fg;if(!q)q=this._options.bg;var L=Z+","+J;if(this._data[L]=[Z,J,V,U,q],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[L]=!0},$.drawOver=function K(Z,J,V,U,q){var L=Z+","+J,B=this._data[L];if(B)B[2]=V||B[2],B[3]=U||B[3],B[4]=q||B[4];else this.draw(Z,J,V,U,q)},$.drawText=function K(Z,J,V,U){var q=null,L=null,B=Z,H=J,w=1;if(!U)U=this._options.width-Z;var W=FZ(V,U);while(W.length){var M=W.shift();switch(M.type){case f0:var R=!1,E=!1,I=!1,u=!1;for(var x=0;x<M.value.length;x++){var _=M.value.charCodeAt(x),e=M.value.charAt(x);if(this._options.layout==="term"){var r=_>>8,U0=r===17||r>=46&&r<=159||r>=172&&r<=215||_>=43360&&_<=43391;if(U0){this.draw(B+0,H,e,q,L),this.draw(B+1,H,"\t",q,L),B+=2;continue}}if(I=_>65280&&_<65377||_>65500&&_<65512||_>65518,R=e.charCodeAt(0)==32||e.charCodeAt(0)==12288,u&&!I&&!R)B++;if(I&&!E)B++;this.draw(B++,H,e,q,L),E=R,u=I}break;case HZ:q=M.value||null;break;case PZ:L=M.value||null;break;case b0:B=Z,H++,w++;break}}return w},$._tick=function K(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var Z in this._data)this._draw(Z,!1)}else for(var J in this._dirty)this._draw(J,!0);this._dirty=!1},$._draw=function K(Z,J){var V=this._data[Z];if(V[4]!=this._options.bg)J=!0;this._backend.draw(V,J)},G}();return X.Rect=m,X.Hex=s,X.Tile=t,X.TileGL=i,X.Term=gZ,X}(),dJ=function(){function X($){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,$),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var K=0;K<this._options.order;K++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var G=X.prototype;return G.clear=function $(){this._data={},this._priorValues={}},G.generate=function $(){var K=[this._sample(this._prefix)];while(K[K.length-1]!=this._boundary)K.push(this._sample(K));return this._join(K.slice(0,-1))},G.observe=function $(K){var Z=this._split(K);for(var J=0;J<Z.length;J++)this._priorValues[Z[J]]=this._options.prior;Z=this._prefix.concat(Z).concat(this._suffix);for(var V=this._options.order;V<Z.length;V++){var U=Z.slice(V-this._options.order,V),q=Z[V];for(var L=0;L<U.length;L++){var B=U.slice(L);this._observeEvent(B,q)}}},G.getStats=function $(){var K=[],Z=Object.keys(this._priorValues).length;Z--,K.push("distinct samples: "+Z);var J=Object.keys(this._data).length,V=0;for(var U in this._data)V+=Object.keys(this._data[U]).length;return K.push("dictionary size (contexts): "+J),K.push("dictionary size (events): "+V),K.join(", ")},G._split=function $(K){return K.split(this._options.words?/\s+/:"")},G._join=function $(K){return K.join(this._options.words?" ":"")},G._observeEvent=function $(K,Z){var J=this._join(K);if(!(J in this._data))this._data[J]={};var V=this._data[J];if(!(Z in V))V[Z]=0;V[Z]++},G._sample=function $(K){K=this._backoff(K);var Z=this._join(K),J=this._data[Z],V={};if(this._options.prior){for(var U in this._priorValues)V[U]=this._priorValues[U];for(var q in J)V[q]+=J[q]}else V=J;return P.getWeightedValue(V)},G._backoff=function $(K){if(K.length>this._options.order)K=K.slice(-this._options.order);else if(K.length<this._options.order)K=this._prefix.slice(0,this._options.order-K.length).concat(K);while(!(this._join(K)in this._data)&&K.length>0)K=K.slice(1);return K},X}(),hZ=function(){function X(){this.heap=[],this.timestamp=0}var G=X.prototype;return G.lessThan=function $(K,Z){return K.key==Z.key?K.timestamp<Z.timestamp:K.key<Z.key},G.shift=function $(K){this.heap=this.heap.map(function(Z){var{key:J,value:V,timestamp:U}=Z;return{key:J+K,value:V,timestamp:U}})},G.len=function $(){return this.heap.length},G.push=function $(K,Z){this.timestamp+=1;var J=this.len();this.heap.push({value:K,timestamp:this.timestamp,key:Z}),this.updateUp(J)},G.pop=function $(){if(this.len()==0)throw new Error("no element to pop");var K=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return K},G.find=function $(K){for(var Z=0;Z<this.len();Z++)if(K==this.heap[Z].value)return this.heap[Z];return null},G.remove=function $(K){var Z=null;for(var J=0;J<this.len();J++)if(K==this.heap[J].value)Z=J;if(Z===null)return!1;if(this.len()>1){var V=this.heap.pop();if(V.value!=K)this.heap[Z]=V,this.updateDown(Z);return!0}else this.heap.pop();return!0},G.parentNode=function $(K){return Math.floor((K-1)/2)},G.leftChildNode=function $(K){return 2*K+1},G.rightChildNode=function $(K){return 2*K+2},G.existNode=function $(K){return K>=0&&K<this.heap.length},G.swap=function $(K,Z){var J=this.heap[K];this.heap[K]=this.heap[Z],this.heap[Z]=J},G.minNode=function $(K){var Z=K.filter(this.existNode.bind(this)),J=Z[0];for(var q=Z,V=Array.isArray(q),U=0,q=V?q:q[Symbol.iterator]();;){var L;if(V){if(U>=q.length)break;L=q[U++]}else{if(U=q.next(),U.done)break;L=U.value}var B=L;if(this.lessThan(this.heap[B],this.heap[J]))J=B}return J},G.updateUp=function $(K){if(K==0)return;var Z=this.parentNode(K);if(this.existNode(Z)&&this.lessThan(this.heap[K],this.heap[Z]))this.swap(K,Z),this.updateUp(Z)},G.updateDown=function $(K){var Z=this.leftChildNode(K),J=this.rightChildNode(K);if(!this.existNode(Z))return;var V=this.minNode([K,Z,J]);if(V!=K)this.swap(K,V),this.updateDown(V)},G.debugPrint=function $(){console.log(this.heap)},X}(),xZ=function(){function X(){this._time=0,this._events=new hZ}var G=X.prototype;return G.getTime=function $(){return this._time},G.clear=function $(){return this._events=new hZ,this},G.add=function $(K,Z){this._events.push(K,Z)},G.get=function $(){if(!this._events.len())return null;var K=this._events.pop(),Z=K.key,J=K.value;if(Z>0)this._time+=Z,this._events.shift(-Z);return J},G.getEventTime=function $(K){var Z=this._events.find(K);if(Z){var J=Z.key;return J}return},G.remove=function $(K){return this._events.remove(K)},X}(),MZ=function(){function X(){this._queue=new xZ,this._repeat=[],this._current=null}var G=X.prototype;return G.getTime=function $(){return this._queue.getTime()},G.add=function $(K,Z){if(Z)this._repeat.push(K);return this},G.getTimeOf=function $(K){return this._queue.getEventTime(K)},G.clear=function $(){return this._queue.clear(),this._repeat=[],this._current=null,this},G.remove=function $(K){var Z=this._queue.remove(K),J=this._repeat.indexOf(K);if(J!=-1)this._repeat.splice(J,1);if(this._current==K)this._current=null;return Z},G.next=function $(){return this._current=this._queue.get(),this._current},X}(),lJ=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.add=function K(Z,J){return this._queue.add(Z,0),X.prototype.add.call(this,Z,J)},$.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return X.prototype.next.call(this)},G}(MZ),nJ=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.add=function K(Z,J,V){return this._queue.add(Z,V!==void 0?V:1/Z.getSpeed()),X.prototype.add.call(this,Z,J)},$.next=function K(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return X.prototype.next.call(this)},G}(MZ),rJ=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._defaultDuration=1,K._duration=K._defaultDuration,K}var $=G.prototype;return $.add=function K(Z,J,V){return this._queue.add(Z,V||this._defaultDuration),X.prototype.add.call(this,Z,J)},$.clear=function K(){return this._duration=this._defaultDuration,X.prototype.clear.call(this)},$.remove=function K(Z){if(Z==this._current)this._duration=this._defaultDuration;return X.prototype.remove.call(this,Z)},$.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return X.prototype.next.call(this)},$.setDuration=function K(Z){if(this._current)this._duration=Z;return this},G}(MZ),sJ={Simple:lJ,Speed:nJ,Action:rJ},WZ=function(){function X($,K){if(K===void 0)K={};this._lightPasses=$,this._options=Object.assign({topology:8},K)}var G=X.prototype;return G._getCircle=function $(K,Z,J){var V=[],U,q,L;switch(this._options.topology){case 4:q=1,L=[0,1],U=[X0[8][7],X0[8][1],X0[8][3],X0[8][5]];break;case 6:U=X0[6],q=1,L=[-1,1];break;case 8:U=X0[4],q=2,L=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var B=K+L[0]*J,H=Z+L[1]*J;for(var w=0;w<U.length;w++)for(var W=0;W<J*q;W++)V.push([B,H]),B+=U[w][0],H+=U[w][1];return V},X}(),oJ=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.compute=function K(Z,J,V,U){if(U(Z,J,0,1),!this._lightPasses(Z,J))return;var q=[],L,B,H,w,W;for(var M=1;M<=V;M++){var R=this._getCircle(Z,J,M),E=360/R.length;for(var I=0;I<R.length;I++){if(H=R[I][0],w=R[I][1],L=E*(I-0.5),B=L+E,W=!this._lightPasses(H,w),this._visibleCoords(Math.floor(L),Math.ceil(B),W,q))U(H,w,M,1);if(q.length==2&&q[0]==0&&q[1]==360)return}}},$._visibleCoords=function K(Z,J,V,U){if(Z<0){var q=this._visibleCoords(0,J,V,U),L=this._visibleCoords(360+Z,360,V,U);return q||L}var B=0;while(B<U.length&&U[B]<Z)B++;if(B==U.length){if(V)U.push(Z,J);return!0}var H=0;if(B%2){while(B<U.length&&U[B]<J)B++,H++;if(H==0)return!1;if(V)if(H%2)U.splice(B-H,H,J);else U.splice(B-H,H);return!0}else{while(B<U.length&&U[B]<J)B++,H++;if(Z==U[B-H]&&H==1)return!1;if(V)if(H%2)U.splice(B-H,H,Z);else U.splice(B-H,H,Z,J);return!0}},G}(WZ),aJ=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.compute=function K(Z,J,V,U){if(U(Z,J,0,1),!this._lightPasses(Z,J))return;var q=[],L,B,H,w,W,M;for(var R=1;R<=V;R++){var E=this._getCircle(Z,J,R),I=E.length;for(var u=0;u<I;u++){if(L=E[u][0],B=E[u][1],w=[u?2*u-1:2*I-1,2*I],W=[2*u+1,2*I],H=!this._lightPasses(L,B),M=this._checkVisibility(w,W,H,q),M)U(L,B,R,M);if(q.length==2&&q[0][0]==0&&q[1][0]==q[1][1])return}}},$._checkVisibility=function K(Z,J,V,U){if(Z[0]>J[0]){var q=this._checkVisibility(Z,[Z[1],Z[1]],V,U),L=this._checkVisibility([0,1],J,V,U);return(q+L)/2}var B=0,H=!1;while(B<U.length){var w=U[B],W=w[0]*Z[1]-Z[0]*w[1];if(W>=0){if(W==0&&!(B%2))H=!0;break}B++}var M=U.length,R=!1;while(M--){var E=U[M],I=J[0]*E[1]-E[0]*J[1];if(I>=0){if(I==0&&M%2)R=!0;break}}var u=!0;if(B==M&&(H||R))u=!1;else if(H&&R&&B+1==M&&M%2)u=!1;else if(B>M&&B%2)u=!1;if(!u)return 0;var x,_=M-B+1;if(_%2)if(B%2){var e=U[B];if(x=(J[0]*e[1]-e[0]*J[1])/(e[1]*J[1]),V)U.splice(B,_,J)}else{var r=U[M];if(x=(r[0]*Z[1]-Z[0]*r[1])/(Z[1]*r[1]),V)U.splice(B,_,Z)}else if(B%2){var U0=U[B],L0=U[M];if(x=(L0[0]*U0[1]-U0[0]*L0[1])/(U0[1]*L0[1]),V)U.splice(B,_)}else{if(V)U.splice(B,_,Z,J);return 1}var C0=(J[0]*Z[1]-Z[0]*J[1])/(Z[1]*J[1]);return x/C0},G}(WZ),I0=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],iJ=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.compute=function K(Z,J,V,U){U(Z,J,0,1);for(var q=0;q<I0.length;q++)this._renderOctant(Z,J,I0[q],V,U)},$.compute180=function K(Z,J,V,U,q){q(Z,J,0,1);var L=(U-1+8)%8,B=(U-2+8)%8,H=(U+1+8)%8;this._renderOctant(Z,J,I0[B],V,q),this._renderOctant(Z,J,I0[L],V,q),this._renderOctant(Z,J,I0[U],V,q),this._renderOctant(Z,J,I0[H],V,q)},$.compute90=function K(Z,J,V,U,q){q(Z,J,0,1);var L=(U-1+8)%8;this._renderOctant(Z,J,I0[U],V,q),this._renderOctant(Z,J,I0[L],V,q)},$._renderOctant=function K(Z,J,V,U,q){this._castVisibility(Z,J,1,1,0,U+1,V[0],V[1],V[2],V[3],q)},$._castVisibility=function K(Z,J,V,U,q,L,B,H,w,W,M){if(U<q)return;for(var R=V;R<=L;R++){var E=-R-1,I=-R,u=!1,x=0;while(E<=0){E+=1;var _=Z+E*B+I*H,e=J+E*w+I*W,r=(E-0.5)/(I+0.5),U0=(E+0.5)/(I-0.5);if(U0>U)continue;if(r<q)break;if(E*E+I*I<L*L)M(_,e,R,1);if(!u){if(!this._lightPasses(_,e)&&R<L)u=!0,this._castVisibility(Z,J,R+1,U,r,L,B,H,w,W,M),x=U0}else{if(!this._lightPasses(_,e)){x=U0;continue}u=!1,U=x}}if(u)break}},G}(WZ),eJ={DiscreteShadowcasting:oJ,PreciseShadowcasting:aJ,RecursiveShadowcasting:iJ},k0=function(){function X($,K){if($===void 0)$=wZ;if(K===void 0)K=DZ;this._width=$,this._height=K}var G=X.prototype;return G._fillMap=function $(K){var Z=[];for(var J=0;J<this._width;J++){Z.push([]);for(var V=0;V<this._height;V++)Z[J].push(K)}return Z},X}(),tJ=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.create=function K(Z){var J=this._width-1,V=this._height-1;for(var U=0;U<=J;U++)for(var q=0;q<=V;q++){var L=U&&q&&U<J&&q<V;Z(U,q,L?0:1)}return this},G}(k0),mZ=function(X){Q0(G,X);function G(K,Z){var J=X.call(this,K,Z)||this;return J._rooms=[],J._corridors=[],J}var $=G.prototype;return $.getRooms=function K(){return this._rooms},$.getCorridors=function K(){return this._corridors},G}(k0),_Z=function X(){},o0=function(X){Q0(G,X);function G(K,Z,J,V,U,q){var L=X.call(this)||this;if(L._x1=K,L._y1=Z,L._x2=J,L._y2=V,L._doors={},U!==void 0&&q!==void 0)L.addDoor(U,q);return L}G.createRandomAt=function K(Z,J,V,U,q){var L=q.roomWidth[0],B=q.roomWidth[1],H=P.getUniformInt(L,B);L=q.roomHeight[0],B=q.roomHeight[1];var w=P.getUniformInt(L,B);if(V==1){var W=J-Math.floor(P.getUniform()*w);return new this(Z+1,W,Z+H,W+w-1,Z,J)}if(V==-1){var M=J-Math.floor(P.getUniform()*w);return new this(Z-H,M,Z-1,M+w-1,Z,J)}if(U==1){var R=Z-Math.floor(P.getUniform()*H);return new this(R,J+1,R+H-1,J+w,Z,J)}if(U==-1){var E=Z-Math.floor(P.getUniform()*H);return new this(E,J-w,E+H-1,J-1,Z,J)}throw new Error("dx or dy must be 1 or -1")},G.createRandomCenter=function K(Z,J,V){var U=V.roomWidth[0],q=V.roomWidth[1],L=P.getUniformInt(U,q);U=V.roomHeight[0],q=V.roomHeight[1];var B=P.getUniformInt(U,q),H=Z-Math.floor(P.getUniform()*L),w=J-Math.floor(P.getUniform()*B),W=H+L-1,M=w+B-1;return new this(H,w,W,M)},G.createRandom=function K(Z,J,V){var U=V.roomWidth[0],q=V.roomWidth[1],L=P.getUniformInt(U,q);U=V.roomHeight[0],q=V.roomHeight[1];var B=P.getUniformInt(U,q),H=Z-L-1,w=J-B-1,W=1+Math.floor(P.getUniform()*H),M=1+Math.floor(P.getUniform()*w),R=W+L-1,E=M+B-1;return new this(W,M,R,E)};var $=G.prototype;return $.addDoor=function K(Z,J){return this._doors[Z+","+J]=1,this},$.getDoors=function K(Z){for(var J in this._doors){var V=J.split(",");Z(parseInt(V[0]),parseInt(V[1]))}return this},$.clearDoors=function K(){return this._doors={},this},$.addDoors=function K(Z){var J=this._x1-1,V=this._x2+1,U=this._y1-1,q=this._y2+1;for(var L=J;L<=V;L++)for(var B=U;B<=q;B++){if(L!=J&&L!=V&&B!=U&&B!=q)continue;if(Z(L,B))continue;this.addDoor(L,B)}return this},$.debug=function K(){console.log("room",this._x1,this._y1,this._x2,this._y2)},$.isValid=function K(Z,J){var V=this._x1-1,U=this._x2+1,q=this._y1-1,L=this._y2+1;for(var B=V;B<=U;B++)for(var H=q;H<=L;H++)if(B==V||B==U||H==q||H==L){if(!Z(B,H))return!1}else if(!J(B,H))return!1;return!0},$.create=function K(Z){var J=this._x1-1,V=this._x2+1,U=this._y1-1,q=this._y2+1,L=0;for(var B=J;B<=V;B++)for(var H=U;H<=q;H++){if(B+","+H in this._doors)L=2;else if(B==J||B==V||H==U||H==q)L=1;else L=0;Z(B,H,L)}},$.getCenter=function K(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},$.getLeft=function K(){return this._x1},$.getRight=function K(){return this._x2},$.getTop=function K(){return this._y1},$.getBottom=function K(){return this._y2},G}(_Z),RZ=function(X){Q0(G,X);function G(K,Z,J,V){var U=X.call(this)||this;return U._startX=K,U._startY=Z,U._endX=J,U._endY=V,U._endsWithAWall=!0,U}G.createRandomAt=function K(Z,J,V,U,q){var L=q.corridorLength[0],B=q.corridorLength[1],H=P.getUniformInt(L,B);return new this(Z,J,Z+V*H,J+U*H)};var $=G.prototype;return $.debug=function K(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},$.isValid=function K(Z,J){var V=this._startX,U=this._startY,q=this._endX-V,L=this._endY-U,B=1+Math.max(Math.abs(q),Math.abs(L));if(q)q=q/Math.abs(q);if(L)L=L/Math.abs(L);var H=L,w=-q,W=!0;for(var M=0;M<B;M++){var R=V+M*q,E=U+M*L;if(!J(R,E))W=!1;if(!Z(R+H,E+w))W=!1;if(!Z(R-H,E-w))W=!1;if(!W){B=M,this._endX=R-q,this._endY=E-L;break}}if(B==0)return!1;if(B==1&&Z(this._endX+q,this._endY+L))return!1;var I=!Z(this._endX+q+H,this._endY+L+w),u=!Z(this._endX+q-H,this._endY+L-w);if(this._endsWithAWall=Z(this._endX+q,this._endY+L),(I||u)&&this._endsWithAWall)return!1;return!0},$.create=function K(Z){var J=this._startX,V=this._startY,U=this._endX-J,q=this._endY-V,L=1+Math.max(Math.abs(U),Math.abs(q));if(U)U=U/Math.abs(U);if(q)q=q/Math.abs(q);for(var B=0;B<L;B++){var H=J+B*U,w=V+B*q;Z(H,w,0)}return!0},$.createPriorityWalls=function K(Z){if(!this._endsWithAWall)return;var J=this._startX,V=this._startY,U=this._endX-J,q=this._endY-V;if(U)U=U/Math.abs(U);if(q)q=q/Math.abs(q);var L=q,B=-U;Z(this._endX+U,this._endY+q),Z(this._endX+L,this._endY+B),Z(this._endX-L,this._endY-B)},G}(_Z),ZV=function(X){Q0(G,X);function G(K,Z,J){var V=X.call(this,K,Z)||this;return V._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(V._options,J),V._map=[],V._dug=0,V._roomAttempts=20,V._corridorAttempts=20,V._connected=[],V._unconnected=[],V._digCallback=V._digCallback.bind(H0(H0(V))),V._canBeDugCallback=V._canBeDugCallback.bind(H0(H0(V))),V._isWallCallback=V._isWallCallback.bind(H0(H0(V))),V}var $=G.prototype;return $.create=function K(Z){var J=Date.now();while(!0){var V=Date.now();if(V-J>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(Z)for(var U=0;U<this._width;U++)for(var q=0;q<this._height;q++)Z(U,q,this._map[U][q]);return this},$._generateRooms=function K(){var Z=this._width-2,J=this._height-2,V;do if(V=this._generateRoom(),this._dug/(Z*J)>this._options.roomDugPercentage)break;while(V)},$._generateRoom=function K(){var Z=0;while(Z<this._roomAttempts){Z++;var J=o0.createRandom(this._width,this._height,this._options);if(!J.isValid(this._isWallCallback,this._canBeDugCallback))continue;return J.create(this._digCallback),this._rooms.push(J),J}return null},$._generateCorridors=function K(){var Z=0;while(Z<this._corridorAttempts){Z++,this._corridors=[],this._map=this._fillMap(1);for(var J=0;J<this._rooms.length;J++){var V=this._rooms[J];V.clearDoors(),V.create(this._digCallback)}if(this._unconnected=P.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var U=P.getItem(this._connected);if(!U)break;var q=this._closestRoom(this._unconnected,U);if(!q)break;var L=this._closestRoom(this._connected,q);if(!L)break;var B=this._connectRooms(q,L);if(!B)break;if(!this._unconnected.length)return!0}}return!1},$._closestRoom=function K(Z,J){var V=Infinity,U=J.getCenter(),q=null;for(var L=0;L<Z.length;L++){var B=Z[L],H=B.getCenter(),w=H[0]-U[0],W=H[1]-U[1],M=w*w+W*W;if(M<V)V=M,q=B}return q},$._connectRooms=function K(Z,J){var V=Z.getCenter(),U=J.getCenter(),q=U[0]-V[0],L=U[1]-V[1],B,H,w,W,M,R,E;if(Math.abs(q)<Math.abs(L))w=L>0?2:0,W=(w+2)%4,M=J.getLeft(),R=J.getRight(),E=0;else w=q>0?1:3,W=(w+2)%4,M=J.getTop(),R=J.getBottom(),E=1;if(B=this._placeInWall(Z,w),!B)return!1;if(B[E]>=M&&B[E]<=R){H=B.slice();var I=0;switch(W){case 0:I=J.getTop()-1;break;case 1:I=J.getRight()+1;break;case 2:I=J.getBottom()+1;break;case 3:I=J.getLeft()-1;break}H[(E+1)%2]=I,this._digLine([B,H])}else if(B[E]<M-1||B[E]>R+1){var u=B[E]-U[E],x=0;switch(W){case 0:case 1:x=u<0?3:1;break;case 2:case 3:x=u<0?1:3;break}if(W=(W+x)%4,H=this._placeInWall(J,W),!H)return!1;var _=[0,0];_[E]=B[E];var e=(E+1)%2;_[e]=H[e],this._digLine([B,_,H])}else{var r=(E+1)%2;if(H=this._placeInWall(J,W),!H)return!1;var U0=Math.round((H[r]+B[r])/2),L0=[0,0],C0=[0,0];L0[E]=B[E],L0[r]=U0,C0[E]=H[E],C0[r]=U0,this._digLine([B,L0,C0,H])}if(Z.addDoor(B[0],B[1]),J.addDoor(H[0],H[1]),E=this._unconnected.indexOf(Z),E!=-1)this._unconnected.splice(E,1),this._connected.push(Z);if(E=this._unconnected.indexOf(J),E!=-1)this._unconnected.splice(E,1),this._connected.push(J);return!0},$._placeInWall=function K(Z,J){var V=[0,0],U=[0,0],q=0;switch(J){case 0:U=[1,0],V=[Z.getLeft(),Z.getTop()-1],q=Z.getRight()-Z.getLeft()+1;break;case 1:U=[0,1],V=[Z.getRight()+1,Z.getTop()],q=Z.getBottom()-Z.getTop()+1;break;case 2:U=[1,0],V=[Z.getLeft(),Z.getBottom()+1],q=Z.getRight()-Z.getLeft()+1;break;case 3:U=[0,1],V=[Z.getLeft()-1,Z.getTop()],q=Z.getBottom()-Z.getTop()+1;break}var L=[],B=-2;for(var H=0;H<q;H++){var w=V[0]+H*U[0],W=V[1]+H*U[1];L.push(null);var M=this._map[w][W]==1;if(M){if(B!=H-1)L[H]=[w,W]}else if(B=H,H)L[H-1]=null}for(var R=L.length-1;R>=0;R--)if(!L[R])L.splice(R,1);return L.length?P.getItem(L):null},$._digLine=function K(Z){for(var J=1;J<Z.length;J++){var V=Z[J-1],U=Z[J],q=new RZ(V[0],V[1],U[0],U[1]);q.create(this._digCallback),this._corridors.push(q)}},$._digCallback=function K(Z,J,V){if(this._map[Z][J]=V,V==0)this._dug++},$._isWallCallback=function K(Z,J){if(Z<0||J<0||Z>=this._width||J>=this._height)return!1;return this._map[Z][J]==1},$._canBeDugCallback=function K(Z,J){if(Z<1||J<1||Z+1>=this._width||J+1>=this._height)return!1;return this._map[Z][J]==1},G}(mZ),JV=function(X){Q0(G,X);function G(K,Z,J){var V;if(J===void 0)J={};return V=X.call(this,K,Z)||this,V._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},V.setOptions(J),V._dirs=X0[V._options.topology],V._map=V._fillMap(0),V}var $=G.prototype;return $.randomize=function K(Z){for(var J=0;J<this._width;J++)for(var V=0;V<this._height;V++)this._map[J][V]=P.getUniform()<Z?1:0;return this},$.setOptions=function K(Z){Object.assign(this._options,Z)},$.set=function K(Z,J,V){this._map[Z][J]=V},$.create=function K(Z){var J=this._fillMap(0),V=this._options.born,U=this._options.survive;for(var q=0;q<this._height;q++){var L=1,B=0;if(this._options.topology==6)L=2,B=q%2;for(var H=B;H<this._width;H+=L){var w=this._map[H][q],W=this._getNeighbors(H,q);if(w&&U.indexOf(W)!=-1)J[H][q]=1;else if(!w&&V.indexOf(W)!=-1)J[H][q]=1}}this._map=J,Z&&this._serviceCallback(Z)},$._serviceCallback=function K(Z){for(var J=0;J<this._height;J++){var V=1,U=0;if(this._options.topology==6)V=2,U=J%2;for(var q=U;q<this._width;q+=V)Z(q,J,this._map[q][J])}},$._getNeighbors=function K(Z,J){var V=0;for(var U=0;U<this._dirs.length;U++){var q=this._dirs[U],L=Z+q[0],B=J+q[1];if(L<0||L>=this._width||B<0||B>=this._height)continue;V+=this._map[L][B]==1?1:0}return V},$.connect=function K(Z,J,V){if(!J)J=0;var U=[],q={},L=1,B=[0,0];if(this._options.topology==6)L=2,B=[0,1];for(var H=0;H<this._height;H++)for(var w=B[H%2];w<this._width;w+=L)if(this._freeSpace(w,H,J)){var W=[w,H];q[this._pointKey(W)]=W,U.push([w,H])}var M=U[P.getUniformInt(0,U.length-1)],R=this._pointKey(M),E={};E[R]=M,delete q[R],this._findConnected(E,q,[M],!1,J);while(Object.keys(q).length>0){var I=this._getFromTo(E,q),u=I[0],x=I[1],_={};_[this._pointKey(u)]=u,this._findConnected(_,q,[u],!0,J);var e=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;e.call(this,x,u,E,q,J,V);for(var r in _){var U0=_[r];this._map[U0[0]][U0[1]]=J,E[r]=U0,delete q[r]}}Z&&this._serviceCallback(Z)},$._getFromTo=function K(Z,J){var V=[0,0],U=[0,0],q,L=Object.keys(Z),B=Object.keys(J);for(var H=0;H<5;H++){if(L.length<B.length){var w=L;U=Z[w[P.getUniformInt(0,w.length-1)]],V=this._getClosest(U,J)}else{var W=B;V=J[W[P.getUniformInt(0,W.length-1)]],U=this._getClosest(V,Z)}if(q=(V[0]-U[0])*(V[0]-U[0])+(V[1]-U[1])*(V[1]-U[1]),q<64)break}return[V,U]},$._getClosest=function K(Z,J){var V=null,U=null;for(var q in J){var L=J[q],B=(L[0]-Z[0])*(L[0]-Z[0])+(L[1]-Z[1])*(L[1]-Z[1]);if(U==null||B<U)U=B,V=L}return V},$._findConnected=function K(Z,J,V,U,q){while(V.length>0){var L=V.splice(0,1)[0],B=void 0;if(this._options.topology==6)B=[[L[0]+2,L[1]],[L[0]+1,L[1]-1],[L[0]-1,L[1]-1],[L[0]-2,L[1]],[L[0]-1,L[1]+1],[L[0]+1,L[1]+1]];else B=[[L[0]+1,L[1]],[L[0]-1,L[1]],[L[0],L[1]+1],[L[0],L[1]-1]];for(var H=0;H<B.length;H++){var w=this._pointKey(B[H]);if(Z[w]==null&&this._freeSpace(B[H][0],B[H][1],q)){if(Z[w]=B[H],!U)delete J[w];V.push(B[H])}}}},$._tunnelToConnected=function K(Z,J,V,U,q,L){var B,H;if(J[0]<Z[0])B=J,H=Z;else B=Z,H=J;for(var w=B[0];w<=H[0];w++){this._map[w][B[1]]=q;var W=[w,B[1]],M=this._pointKey(W);V[M]=W,delete U[M]}if(L&&B[0]<H[0])L(B,[H[0],B[1]]);var R=H[0];if(J[1]<Z[1])B=J,H=Z;else B=Z,H=J;for(var E=B[1];E<H[1];E++){this._map[R][E]=q;var I=[R,E],u=this._pointKey(I);V[u]=I,delete U[u]}if(L&&B[1]<H[1])L([H[0],B[1]],[H[0],H[1]])},$._tunnelToConnected6=function K(Z,J,V,U,q,L){var B,H;if(J[0]<Z[0])B=J,H=Z;else B=Z,H=J;var w=B[0],W=B[1];while(!(w==H[0]&&W==H[1])){var M=2;if(W<H[1])W++,M=1;else if(W>H[1])W--,M=1;if(w<H[0])w+=M;else if(w>H[0])w-=M;else if(H[1]%2)w-=M;else w+=M;this._map[w][W]=q;var R=[w,W],E=this._pointKey(R);V[E]=R,delete U[E]}if(L)L(J,Z)},$._freeSpace=function K(Z,J,V){return Z>=0&&Z<this._width&&J>=0&&J<this._height&&this._map[Z][J]==V},$._pointKey=function K(Z){return Z[0]+"."+Z[1]},G}(k0),VV={room:o0,corridor:RZ},QV=function(X){Q0(G,X);function G(K,Z,J){var V;if(J===void 0)J={};return V=X.call(this,K,Z)||this,V._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},J),V._features={room:4,corridor:4},V._map=[],V._featureAttempts=20,V._walls={},V._dug=0,V._digCallback=V._digCallback.bind(H0(H0(V))),V._canBeDugCallback=V._canBeDugCallback.bind(H0(H0(V))),V._isWallCallback=V._isWallCallback.bind(H0(H0(V))),V._priorityWallCallback=V._priorityWallCallback.bind(H0(H0(V))),V}var $=G.prototype;return $.create=function K(Z){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var J=(this._width-2)*(this._height-2);this._firstRoom();var V=Date.now(),U;do{U=0;var q=Date.now();if(q-V>this._options.timeLimit)break;var L=this._findWall();if(!L)break;var B=L.split(","),H=parseInt(B[0]),w=parseInt(B[1]),W=this._getDiggingDirection(H,w);if(!W)continue;var M=0;do if(M++,this._tryFeature(H,w,W[0],W[1])){this._removeSurroundingWalls(H,w),this._removeSurroundingWalls(H-W[0],w-W[1]);break}while(M<this._featureAttempts);for(var R in this._walls)if(this._walls[R]>1)U++}while(this._dug/J<this._options.dugPercentage||U);if(this._addDoors(),Z)for(var E=0;E<this._width;E++)for(var I=0;I<this._height;I++)Z(E,I,this._map[E][I]);return this._walls={},this._map=[],this},$._digCallback=function K(Z,J,V){if(V==0||V==2)this._map[Z][J]=0,this._dug++;else this._walls[Z+","+J]=1},$._isWallCallback=function K(Z,J){if(Z<0||J<0||Z>=this._width||J>=this._height)return!1;return this._map[Z][J]==1},$._canBeDugCallback=function K(Z,J){if(Z<1||J<1||Z+1>=this._width||J+1>=this._height)return!1;return this._map[Z][J]==1},$._priorityWallCallback=function K(Z,J){this._walls[Z+","+J]=2},$._firstRoom=function K(){var Z=Math.floor(this._width/2),J=Math.floor(this._height/2),V=o0.createRandomCenter(Z,J,this._options);this._rooms.push(V),V.create(this._digCallback)},$._findWall=function K(){var Z=[],J=[];for(var V in this._walls){var U=this._walls[V];if(U==2)J.push(V);else Z.push(V)}var q=J.length?J:Z;if(!q.length)return null;var L=P.getItem(q.sort());return delete this._walls[L],L},$._tryFeature=function K(Z,J,V,U){var q=P.getWeightedValue(this._features),L=VV[q],B=L.createRandomAt(Z,J,V,U,this._options);if(!B.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(B.create(this._digCallback),B instanceof o0)this._rooms.push(B);if(B instanceof RZ)B.createPriorityWalls(this._priorityWallCallback),this._corridors.push(B);return!0},$._removeSurroundingWalls=function K(Z,J){var V=X0[4];for(var U=0;U<V.length;U++){var q=V[U],L=Z+q[0],B=J+q[1];delete this._walls[L+","+B],L=Z+2*q[0],B=J+2*q[1],delete this._walls[L+","+B]}},$._getDiggingDirection=function K(Z,J){if(Z<=0||J<=0||Z>=this._width-1||J>=this._height-1)return null;var V=null,U=X0[4];for(var q=0;q<U.length;q++){var L=U[q],B=Z+L[0],H=J+L[1];if(!this._map[B][H]){if(V)return null;V=L}}if(!V)return null;return[-V[0],-V[1]]},$._addDoors=function K(){var Z=this._map;function J(q,L){return Z[q][L]==1}for(var V=0;V<this._rooms.length;V++){var U=this._rooms[V];U.clearDoors(),U.addDoors(J)}},G}(mZ);function yZ(X,G,$){$[G[X+1]]=$[X],G[$[X]]=G[X+1],$[X]=X+1,G[X+1]=X}function pZ(X,G,$){$[G[X]]=$[X],G[$[X]]=G[X],$[X]=X,G[X]=X}var KV=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var $=G.prototype;return $.create=function K(Z){var J=this._fillMap(1),V=Math.ceil((this._width-2)/2),U=0.375,q=[],L=[];for(var B=0;B<V;B++)q.push(B),L.push(B);q.push(V-1);var H;for(H=1;H+3<this._height;H+=2)for(var w=0;w<V;w++){var W=2*w+1,M=H;if(J[W][M]=0,w!=q[w+1]&&P.getUniform()>U)yZ(w,q,L),J[W+1][M]=0;if(w!=q[w]&&P.getUniform()>U)pZ(w,q,L);else J[W][M+1]=0}for(var R=0;R<V;R++){var E=2*R+1,I=H;if(J[E][I]=0,R!=q[R+1]&&(R==q[R]||P.getUniform()>U))yZ(R,q,L),J[E+1][I]=0;pZ(R,q,L)}for(var u=0;u<this._width;u++)for(var x=0;x<this._height;x++)Z(u,x,J[u][x]);return this},G}(k0),UV=function(X){Q0(G,X);function G(){var K=X.apply(this,arguments)||this;return K._stack=[],K._map=[],K}var $=G.prototype;return $.create=function K(Z){var J=this._width,V=this._height;this._map=[];for(var U=0;U<J;U++){this._map.push([]);for(var q=0;q<V;q++){var L=U==0||q==0||U+1==J||q+1==V;this._map[U].push(L?1:0)}}this._stack=[[1,1,J-2,V-2]],this._process();for(var B=0;B<J;B++)for(var H=0;H<V;H++)Z(B,H,this._map[B][H]);return this._map=[],this},$._process=function K(){while(this._stack.length){var Z=this._stack.shift();this._partitionRoom(Z)}},$._partitionRoom=function K(Z){var J=[],V=[];for(var U=Z[0]+1;U<Z[2];U++){var q=this._map[U][Z[1]-1],L=this._map[U][Z[3]+1];if(q&&L&&!(U%2))J.push(U)}for(var B=Z[1]+1;B<Z[3];B++){var H=this._map[Z[0]-1][B],w=this._map[Z[2]+1][B];if(H&&w&&!(B%2))V.push(B)}if(!J.length||!V.length)return;var W=P.getItem(J),M=P.getItem(V);this._map[W][M]=1;var R=[],E=[];R.push(E);for(var I=Z[0];I<W;I++)if(this._map[I][M]=1,I%2)E.push([I,M]);E=[],R.push(E);for(var u=W+1;u<=Z[2];u++)if(this._map[u][M]=1,u%2)E.push([u,M]);E=[],R.push(E);for(var x=Z[1];x<M;x++)if(this._map[W][x]=1,x%2)E.push([W,x]);E=[],R.push(E);for(var _=M+1;_<=Z[3];_++)if(this._map[W][_]=1,_%2)E.push([W,_]);var e=P.getItem(R);for(var r=0;r<R.length;r++){var U0=R[r];if(U0==e)continue;var L0=P.getItem(U0);this._map[L0[0]][L0[1]]=0}this._stack.push([Z[0],Z[1],W-1,M-1]),this._stack.push([W+1,Z[1],Z[2],M-1]),this._stack.push([Z[0],M+1,W-1,Z[3]]),this._stack.push([W+1,M+1,Z[2],Z[3]])},G}(k0),qV=function(X){Q0(G,X);function G(K,Z,J){var V;if(J===void 0)J=0;return V=X.call(this,K,Z)||this,V._regularity=J,V._map=[],V}var $=G.prototype;return $.create=function K(Z){var J=this._width,V=this._height,U=this._fillMap(1);J-=J%2?1:2,V-=V%2?1:2;var q=0,L=0,B=0,H=0,w=0,W=!1,M=[[0,0],[0,0],[0,0],[0,0]];do{if(q=1+2*Math.floor(P.getUniform()*(J-1)/2),L=1+2*Math.floor(P.getUniform()*(V-1)/2),!w)U[q][L]=0;if(!U[q][L]){this._randomize(M);do{if(Math.floor(P.getUniform()*(this._regularity+1))==0)this._randomize(M);W=!0;for(var R=0;R<4;R++)if(B=q+M[R][0]*2,H=L+M[R][1]*2,this._isFree(U,B,H,J,V)){U[B][H]=0,U[q+M[R][0]][L+M[R][1]]=0,q=B,L=H,W=!1,w++;break}}while(!W)}}while(w+1<J*V/4);for(var E=0;E<this._width;E++)for(var I=0;I<this._height;I++)Z(E,I,U[E][I]);return this._map=[],this},$._randomize=function K(Z){for(var J=0;J<4;J++)Z[J][0]=0,Z[J][1]=0;switch(Math.floor(P.getUniform()*4)){case 0:Z[0][0]=-1,Z[1][0]=1,Z[2][1]=-1,Z[3][1]=1;break;case 1:Z[3][0]=-1,Z[2][0]=1,Z[1][1]=-1,Z[0][1]=1;break;case 2:Z[2][0]=-1,Z[3][0]=1,Z[0][1]=-1,Z[1][1]=1;break;case 3:Z[1][0]=-1,Z[0][0]=1,Z[3][1]=-1,Z[2][1]=1;break}},$._isFree=function K(Z,J,V,U,q){if(J<1||V<1||J>=U||V>=q)return!1;return Z[J][V]},G}(k0),zV=function(X){Q0(G,X);function G(K,Z,J){var V=X.call(this,K,Z)||this;if(V.map=[],V.rooms=[],V.connectedCells=[],J=Object.assign({cellWidth:3,cellHeight:3},J),!J.hasOwnProperty("roomWidth"))J.roomWidth=V._calculateRoomSize(V._width,J.cellWidth);if(!J.hasOwnProperty("roomHeight"))J.roomHeight=V._calculateRoomSize(V._height,J.cellHeight);return V._options=J,V}var $=G.prototype;return $.create=function K(Z){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),Z)for(var J=0;J<this._width;J++)for(var V=0;V<this._height;V++)Z(J,V,this.map[J][V]);return this},$._calculateRoomSize=function K(Z,J){var V=Math.floor(Z/J*0.8),U=Math.floor(Z/J*0.25);if(U<2)U=2;if(V<2)V=2;return[U,V]},$._initRooms=function K(){for(var Z=0;Z<this._options.cellWidth;Z++){this.rooms.push([]);for(var J=0;J<this._options.cellHeight;J++)this.rooms[Z].push({x:0,y:0,width:0,height:0,connections:[],cellx:Z,celly:J})}},$._connectRooms=function K(){var Z=P.getUniformInt(0,this._options.cellWidth-1),J=P.getUniformInt(0,this._options.cellHeight-1),V,U,q,L=!1,B,H,w;do{w=[0,2,4,6],w=P.shuffle(w);do{if(L=!1,V=w.pop(),U=Z+X0[8][V][0],q=J+X0[8][V][1],U<0||U>=this._options.cellWidth)continue;if(q<0||q>=this._options.cellHeight)continue;if(B=this.rooms[Z][J],B.connections.length>0){if(B.connections[0][0]==U&&B.connections[0][1]==q)break}if(H=this.rooms[U][q],H.connections.length==0)H.connections.push([Z,J]),this.connectedCells.push([U,q]),Z=U,J=q,L=!0}while(w.length>0&&L==!1)}while(w.length>0)},$._connectUnconnectedRooms=function K(){var Z=this._options.cellWidth,J=this._options.cellHeight;this.connectedCells=P.shuffle(this.connectedCells);var V,U,q;for(var L=0;L<this._options.cellWidth;L++)for(var B=0;B<this._options.cellHeight;B++)if(V=this.rooms[L][B],V.connections.length==0){var H=[0,2,4,6];H=P.shuffle(H),q=!1;do{var w=H.pop(),W=L+X0[8][w][0],M=B+X0[8][w][1];if(W<0||W>=Z||M<0||M>=J)continue;if(U=this.rooms[W][M],q=!0,U.connections.length==0)break;for(var R=0;R<U.connections.length;R++)if(U.connections[R][0]==L&&U.connections[R][1]==B){q=!1;break}if(q)break}while(H.length);if(q)V.connections.push([U.cellx,U.celly]);else console.log("-- Unable to connect room.")}},$._createRandomRoomConnections=function K(){},$._createRooms=function K(){var Z=this._width,J=this._height,V=this._options.cellWidth,U=this._options.cellHeight,q=Math.floor(this._width/V),L=Math.floor(this._height/U),B,H,w=this._options.roomWidth,W=this._options.roomHeight,M,R,E;for(var I=0;I<V;I++)for(var u=0;u<U;u++){if(M=q*I,R=L*u,M==0)M=1;if(R==0)R=1;if(B=P.getUniformInt(w[0],w[1]),H=P.getUniformInt(W[0],W[1]),u>0){E=this.rooms[I][u-1];while(R-(E.y+E.height)<3)R++}if(I>0){E=this.rooms[I-1][u];while(M-(E.x+E.width)<3)M++}var x=Math.round(P.getUniformInt(0,q-B)/2),_=Math.round(P.getUniformInt(0,L-H)/2);while(M+x+B>=Z)if(x)x--;else B--;while(R+_+H>=J)if(_)_--;else H--;M=M+x,R=R+_,this.rooms[I][u].x=M,this.rooms[I][u].y=R,this.rooms[I][u].width=B,this.rooms[I][u].height=H;for(var e=M;e<M+B;e++)for(var r=R;r<R+H;r++)this.map[e][r]=0}},$._getWallPosition=function K(Z,J){var V,U,q;if(J==1||J==3){if(V=P.getUniformInt(Z.x+1,Z.x+Z.width-2),J==1)U=Z.y-2,q=U+1;else U=Z.y+Z.height+1,q=U-1;this.map[V][q]=0}else{if(U=P.getUniformInt(Z.y+1,Z.y+Z.height-2),J==2)V=Z.x+Z.width+1,q=V-1;else V=Z.x-2,q=V+1;this.map[q][U]=0}return[V,U]},$._drawCorridor=function K(Z,J){var V=J[0]-Z[0],U=J[1]-Z[1],q=Z[0],L=Z[1],B,H,w,W,M=[],R=Math.abs(V),E=Math.abs(U),I=P.getUniform(),u=I,x=1-I;if(H=V>0?2:6,w=U>0?4:0,R<E)B=Math.ceil(E*u),M.push([w,B]),M.push([H,R]),B=Math.floor(E*x),M.push([w,B]);else B=Math.ceil(R*u),M.push([H,B]),M.push([w,E]),B=Math.floor(R*x),M.push([H,B]);this.map[q][L]=0;while(M.length>0){W=M.pop();while(W[1]>0)q+=X0[8][W[0]][0],L+=X0[8][W[0]][1],this.map[q][L]=0,W[1]=W[1]-1}},$._createCorridors=function K(){var Z=this._options.cellWidth,J=this._options.cellHeight,V,U,q,L,B;for(var H=0;H<Z;H++)for(var w=0;w<J;w++){V=this.rooms[H][w];for(var W=0;W<V.connections.length;W++){if(U=V.connections[W],q=this.rooms[U[0]][U[1]],q.cellx>V.cellx)L=2,B=4;else if(q.cellx<V.cellx)L=4,B=2;else if(q.celly>V.celly)L=3,B=1;else L=1,B=3;this._drawCorridor(this._getWallPosition(V,L),this._getWallPosition(q,B))}}},G}(k0),$V={Arena:tJ,Uniform:ZV,Cellular:JV,Digger:QV,EllerMaze:KV,DividedMaze:UV,IceyMaze:qV,Rogue:zV},XV=function X(){},GV=0.5*(Math.sqrt(3)-1),y0=(3-Math.sqrt(3))/6,BV=function(X){Q0(G,X);function G(K){var Z;if(K===void 0)K=256;Z=X.call(this)||this,Z._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var J=[];for(var V=0;V<K;V++)J.push(V);J=P.shuffle(J),Z._perms=[],Z._indexes=[];for(var U=0;U<2*K;U++)Z._perms.push(J[U%K]),Z._indexes.push(Z._perms[U]%Z._gradients.length);return Z}var $=G.prototype;return $.get=function K(Z,J){var V=this._perms,U=this._indexes,q=V.length/2,L=0,B=0,H=0,w,W=(Z+J)*GV,M=Math.floor(Z+W),R=Math.floor(J+W),E=(M+R)*y0,I=M-E,u=R-E,x=Z-I,_=J-u,e,r;if(x>_)e=1,r=0;else e=0,r=1;var U0=x-e+y0,L0=_-r+y0,C0=x-1+2*y0,EZ=_-1+2*y0,OZ=A(M,q),jZ=A(R,q),p0=0.5-x*x-_*_;if(p0>=0){p0*=p0,w=U[OZ+V[jZ]];var dZ=this._gradients[w];L=p0*p0*(dZ[0]*x+dZ[1]*_)}var c0=0.5-U0*U0-L0*L0;if(c0>=0){c0*=c0,w=U[OZ+e+V[jZ+r]];var lZ=this._gradients[w];B=c0*c0*(lZ[0]*U0+lZ[1]*L0)}var d0=0.5-C0*C0-EZ*EZ;if(d0>=0){d0*=d0,w=U[OZ+1+V[jZ+1]];var nZ=this._gradients[w];H=d0*d0*(nZ[0]*C0+nZ[1]*EZ)}return 70*(L+B+H)},G}(XV),LV={Simplex:BV},cZ=function(){function X($,K,Z,J){if(J===void 0)J={};if(this._toX=$,this._toY=K,this._passableCallback=Z,this._options=Object.assign({topology:8},J),this._dirs=X0[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var G=X.prototype;return G._getNeighbors=function $(K,Z){var J=[];for(var V=0;V<this._dirs.length;V++){var U=this._dirs[V],q=K+U[0],L=Z+U[1];if(!this._passableCallback(q,L))continue;J.push([q,L])}return J},X}(),YV=function(X){Q0(G,X);function G(K,Z,J,V){var U=X.call(this,K,Z,J,V)||this;return U._computed={},U._todo=[],U._add(K,Z,null),U}var $=G.prototype;return $.compute=function K(Z,J,V){var U=Z+","+J;if(!(U in this._computed))this._compute(Z,J);if(!(U in this._computed))return;var q=this._computed[U];while(q)V(q.x,q.y),q=q.prev},$._compute=function K(Z,J){while(this._todo.length){var V=this._todo.shift();if(V.x==Z&&V.y==J)return;var U=this._getNeighbors(V.x,V.y);for(var q=0;q<U.length;q++){var L=U[q],B=L[0],H=L[1],w=B+","+H;if(w in this._computed)continue;this._add(B,H,V)}}},$._add=function K(Z,J,V){var U={x:Z,y:J,prev:V};this._computed[Z+","+J]=U,this._todo.push(U)},G}(cZ),HV=function(X){Q0(G,X);function G(K,Z,J,V){var U;if(V===void 0)V={};return U=X.call(this,K,Z,J,V)||this,U._todo=[],U._done={},U}var $=G.prototype;return $.compute=function K(Z,J,V){this._todo=[],this._done={},this._fromX=Z,this._fromY=J,this._add(this._toX,this._toY,null);while(this._todo.length){var U=this._todo.shift(),q=U.x+","+U.y;if(q in this._done)continue;if(this._done[q]=U,U.x==Z&&U.y==J)break;var L=this._getNeighbors(U.x,U.y);for(var B=0;B<L.length;B++){var H=L[B],w=H[0],W=H[1],M=w+","+W;if(M in this._done)continue;this._add(w,W,U)}}var R=this._done[Z+","+J];if(!R)return;while(R)V(R.x,R.y),R=R.prev},$._add=function K(Z,J,V){var U=this._distance(Z,J),q={x:Z,y:J,prev:V,g:V?V.g+1:0,h:U},L=q.g+q.h;for(var B=0;B<this._todo.length;B++){var H=this._todo[B],w=H.g+H.h;if(L<w||L==w&&U<H.h){this._todo.splice(B,0,q);return}}this._todo.push(q)},$._distance=function K(Z,J){switch(this._options.topology){case 4:return Math.abs(Z-this._fromX)+Math.abs(J-this._fromY);case 6:var V=Math.abs(Z-this._fromX),U=Math.abs(J-this._fromY);return U+Math.max(0,(V-U)/2);case 8:return Math.max(Math.abs(Z-this._fromX),Math.abs(J-this._fromY))}},G}(cZ),PV={Dijkstra:YV,AStar:HV},FV=function(){function X($){this._scheduler=$,this._lock=1}var G=X.prototype;return G.start=function $(){return this.unlock()},G.lock=function $(){return this._lock++,this},G.unlock=function $(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var K=this._scheduler.next();if(!K)return this.lock();var Z=K.act();if(Z&&Z.then)this.lock(),Z.then(this.unlock.bind(this))}return this},X}(),wV=function(){function X($,K){if(K===void 0)K={};this._reflectivityCallback=$,this._options={},K=Object.assign({passes:1,emissionThreshold:100,range:10},K),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(K)}var G=X.prototype;return G.setOptions=function $(K){if(Object.assign(this._options,K),K&&K.range)this.reset();return this},G.setFOV=function $(K){return this._fov=K,this._fovCache={},this},G.setLight=function $(K,Z,J){var V=K+","+Z;if(J)this._lights[V]=typeof J=="string"?l(J):J;else delete this._lights[V];return this},G.clearLights=function $(){this._lights={}},G.reset=function $(){return this._reflectivityCache={},this._fovCache={},this},G.compute=function $(K){var Z={},J={},V={};for(var U in this._lights){var q=this._lights[U];J[U]=[0,0,0],c(J[U],q)}for(var L=0;L<this._options.passes;L++){if(this._emitLight(J,V,Z),L+1==this._options.passes)continue;J=this._computeEmitters(V,Z)}for(var B in V){var H=B.split(","),w=parseInt(H[0]),W=parseInt(H[1]);K(w,W,V[B])}return this},G._emitLight=function $(K,Z,J){for(var V in K){var U=V.split(","),q=parseInt(U[0]),L=parseInt(U[1]);this._emitLightFromCell(q,L,K[V],Z),J[V]=1}return this},G._computeEmitters=function $(K,Z){var J={};for(var V in K){if(V in Z)continue;var U=K[V],q=void 0;if(V in this._reflectivityCache)q=this._reflectivityCache[V];else{var L=V.split(","),B=parseInt(L[0]),H=parseInt(L[1]);q=this._reflectivityCallback(B,H),this._reflectivityCache[V]=q}if(q==0)continue;var w=[0,0,0],W=0;for(var M=0;M<3;M++){var R=Math.round(U[M]*q);w[M]=R,W+=R}if(W>this._options.emissionThreshold)J[V]=w}return J},G._emitLightFromCell=function $(K,Z,J,V){var U=K+","+Z,q;if(U in this._fovCache)q=this._fovCache[U];else q=this._updateFOV(K,Z);for(var L in q){var B=q[L],H=void 0;if(L in V)H=V[L];else H=[0,0,0],V[L]=H;for(var w=0;w<3;w++)H[w]+=Math.round(J[w]*B)}return this},G._updateFOV=function $(K,Z){var J=K+","+Z,V={};this._fovCache[J]=V;var U=this._options.range;function q(L,B,H,w){var W=L+","+B,M=w*(1-H/U);if(M==0)return;V[W]=M}return this._fov.compute(K,Z,U,q.bind(this)),V},X}(),DV=h,MV=n,WV=mJ;Q.Util=DV,Q.Color=MV,Q.Text=WV,Q.RNG=P,Q.Display=cJ,Q.StringGenerator=dJ,Q.EventQueue=xZ,Q.Scheduler=sJ,Q.FOV=eJ,Q.Map=$V,Q.Noise=LV,Q.Path=PV,Q.Engine=FV,Q.Lighting=wV,Q.DEFAULT_WIDTH=wZ,Q.DEFAULT_HEIGHT=DZ,Q.DIRS=X0,Q.KEYS=_J,Object.defineProperty(Q,"__esModule",{value:!0})})});var AV=typeof window!=="undefined"?window.innerWidth:0,vV=typeof window!=="undefined"?window.innerHeight:0,Z0={cameraWidth:Math.floor(AV/18),cameraHeight:Math.floor(vV/18),debug:!0,fontSize:18,highlightEnemy:!0,showGrid:!0,showUI:!0,zoom:1},AZ={WIDTH:1024,HEIGHT:1024},Y0={width:Math.floor(Z0.cameraWidth*(1/Z0.zoom)),height:Math.floor(Z0.cameraHeight*(1/Z0.zoom)),bg:"transparent",fontSize:Math.floor(Z0.fontSize*Z0.zoom),forceSquareRatio:!0};function sZ(Q){if(Z0.debug)console.log(Q)}var vZ=[];class a0{name;description;constructor(Q,z){this.name=Q,this.description=z}}class i0{name;description;constructor(Q,z){this.name=Q,this.description=z}}class R0{key;description;constructor(Q,z){this.key=Q,this.description=z}}class oZ{name;description;constructor(Q,z){this.name=Q,this.description=z}}class m0{name;description;color;constructor(Q,z,Y){this.name=Q,this.description=z,this.color=Y}}class W0{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(Q,z,Y,P="cyberyellow",D=0,O=0,A=0,b=0,N=0,f=[]){this.name=Q,this.description=z,this.icon=Y,this.color=P,this.energyDelta=D,this.matter=O,this.gold=A,this.damage=b,this.energyCost=N,this.effects=f}}class E0{name;description;icon;color;energyMax;unlockCondition;constructor(Q,z,Y,P=100){this.name=Q,this.description=z,this.icon=Y,this.energyMax=P,this.color="white",this.unlockCondition=null}}class J0{name;description;icon;fg;bg;energyDelta;constructor(Q,z,Y=null,P="white",D="black",O=0){this.name=Q,this.description=z,this.icon=Y,this.fg=P,this.bg=D,this.energyDelta=O}}var F={actions:{Enter:new a0("Enter","Enter a portal or plant atmosphere"),Launch:new a0("Launch","Launch into space"),Wait:new a0("Wait","Wait one turn in place")},ais:{aggrorange:new i0("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new i0("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new i0("guardian","Idles at a position and only fights back if engaged")},colors:{black:"#000",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",brown:"brown",gray:"#777",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new R0("N","Move/interact/combat north"),E:new R0("E","Move/interact/combat east"),S:new R0("S","Move/interact/combat south"),W:new R0("W","Move/interact/combat west"),A:new R0("A","Primary action, confirm"),B:new R0("B","Take a break, cancel"),"1":new R0("1","Secondary action, first quick slot"),"2":new R0("2","Tertiary action, second quick slot"),M:new R0("M","Menu")},effects:{WallCrusher:new oZ("Wall Crusher","Tears down weak walls")},entities:{movableboulder:new E0("movableboulder","A movable rock","o",2),movablebox:new E0("movablebox","A movable box","x",2),Spirit:new E0("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new E0("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new E0("WorkBot","Basic factory worker","B"),Cleaner:new E0("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new E0("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Valkyrie:new E0("Valkyrie","Airbourne war logistics","V",160),Pioneer:new E0("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200)},factions:{Equipment:new m0("Equipment","For boxes etc.","gray"),Spirits:new m0("Spirits","Default player faction","white"),Pyrates:new m0("Pyrates","Default enemy faction","cybermagenta"),Gaia:new m0("Gaia","For rocks etc.","brown"),Guardians:new m0("Guardians","Bot station guardians","cybercyan")},items:{battery:new W0("Battery","Increases maximum energy","b","cyberyellow",10),energy:new W0("Energy","Energy pack","e","cyberyellow",10),gold:new W0("Gold","Precious shiny!","g","cyberyellow",0,0,1),goo:new W0("Goo","A minor matter source","g","gray",0,1),junk:new W0("Junk","Broken bot","%","gray",0,1),matter:new W0("Matter","A pile of stuff","m","gray",0,100),broom:new W0("Broom","Sweeps the floor","i","cyberyellow",0,0,0,-10,-1),hammer:new W0("Hammer","Tears down weak walls","i","cyberyellow",0,0,0,-15,-2,["Wall Crusher"]),shocker:new W0("Shocker","Injects Bots with new energy, basic AeroBot tool","i","cyberyellow",0,0,0,10,-1),wrench:new W0("Wrench","Basic WorkBot tool","i","cyberyellow",0,0,0,-10,-1)},maps:{bot_bar:`!
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
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired PioneerBot, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:Z0.showGrid?new J0("void","Just nothing here",".","gray"):new J0("void","Just nothing here"),voidtrue:new J0("voidtrue","Really nothing here and you shouldn't get there ever!"),voidhidden:new J0("voidhidden","Looks like a wall, but isn't!","#","gray","black"),water:new J0("water","Rust and other dangers await","~","cybercyan","cyberblue",-2),rock:new J0("rock","Hidden treasures may await","^","white","gray"),tree:new J0("tree","Lots of trees make a forest","t","brown","black"),wall:new J0("wall","A strong wall","#","gray","black"),wallstatue:new J0("wallstatue","A small statue","s","gray","black"),wallweak:new J0("wallweak","A weakened wall","+","gray","black"),chargepad:new J0("chargepad","Recharges energy and health","=","cyberyellow","black",2),movenorth:new J0("movenorth","Moves you north","^","cyberyellow"),moveeast:new J0("moveeast","Moves you east",">","cyberyellow"),movesouth:new J0("movesouth","Moves you south","v","cyberyellow"),movewest:new J0("movewest","Moves you west","<","cyberyellow"),portal:new J0("portal","Gateway to another map","O","cyberyellow","gray"),portalclosed:new J0("portalclosed","Closed gateway to another map","O","black","gray"),portalhidden:new J0("portalhidden","Hidden gateway to another map","#","gray","black"),portalstartworkbot:new J0("portalstartworkbot","Start playing as a WorkBot","B","white"),portalstartaerobot:new J0("portalstartaerobot","Start playing as a AeroBot","A","white"),"_portalstart?":new J0("_portalstart?","Not unlocked, yet!","?","white"),spacerock:new J0("spacerock","Mountains as seen from space, non-blocking!","^","white","gray"),spacetree:new J0("spacetree","Forest as seen from space","","brown","brown"),spacewater:new J0("spacewater","Water as seen from space, not dangerous!","~","cybercyan","cyberblue"),spacevoid:new J0("spacevoid","Void/ground as seen from space","","gray","gray"),spacevoidstarwhite:new J0("spacevoidstarwhite","Space with a white background star",".","white"),spacevoidstaryellow:new J0("spacevoidstaryellow","Space with a yellow background star",".","cyberyellow"),sun:new J0("sun","It's hot, really hot!","","cyberyellow","cyberyellow",-100)}};function d(Q,z,Y,P,D=0,O=0,A={}){const b={id:z,type:Y,mapId:P,x:D,y:O,energy:10,energyMax:10,gold:0,matter:0,options:A};return Q=t0(Q,b,Y),Q.entities[b.id]=b,Q}function NZ(Q,z,Y,P){return d(Q,"boulder,"+z+","+Y+","+P,F.entities.movableboulder,z,Y,P,{faction:F.factions.Gaia})}function fZ(Q,z,Y,P){return d(Q,"box,"+z+","+Y+","+P,F.entities.movablebox,z,Y,P,{faction:F.factions.Equipment})}function e0(Q,z){return Q.entities[z]=void 0,delete Q.entities[z],Q.tools[z]=void 0,Q}function u0(Q,z){let Y=Object.keys(Q.entities),P=[];for(let D=0;D<Y.length;D++){let O=Q.entities[Y[D]];if(O.mapId===z)P.push(O)}return P}function aZ(Q,z,Y,P){let D=u0(Q,z).filter((O)=>O.x===Y&&O.y===P);if(D.length>0)return D[0];return null}function t0(Q,z,Y){if(z.type=Y,z.energy=Y.energyMax,z.energyMax=Y.energyMax,z.gold=0,z.matter=0,!O0(z))Q.tools[z.id]=void 0;return Q}function iZ(Q,z,Y){if(z.options.faction===Y.options.faction);else{const P=z.id,D=Y.id;Q._combatQueue.push({entityId:P,otherEntityId:D})}return Q}function O0(Q){return Q.type===F.entities.movableboulder||Q.type===F.entities.movablebox}function ZZ(Q,z){const Y={A:F.actions.Wait,B:F.actions.Wait};if(Q.lastSpacePositionByEntity[z.id])Y.A=F.actions.Launch;const D=Q.maps[z.mapId].getTile(z.x,z.y);if(!!D.options.mapId&&"x"in D.options&&"y"in D.options)Y.A=F.actions.Enter;return Y}function eZ(Q,z,Y){const P=Q._eventSubscribers[z];if(P)for(let D=0;D<P.length;D++){const O=P[D];Q=O(Q,Y)}return Q}function IZ(Q,z,Y){if(z in Q._eventSubscribers);else Q._eventSubscribers[z]=[];return Q._eventSubscribers[z].push(Y),Q}function K0(Q,z,Y,P=0,D=0){const A={id:VZ(Y,P,D),type:z,mapId:Y,x:P,y:D,energy:z.energyDelta,gold:z.gold,matter:z.matter};return Q.items[A.id]=A,Q}function tZ(Q,z,Y,P=0,D=0){const O=F.items.junk,b={id:VZ(Y,P,D),type:O,mapId:Y,x:P,y:D,energy:O.energyDelta,gold:O.gold,matter:z};return Q.items[b.id]=b,Q}function JZ(Q,z,Y,P=0,D=0,O,A){const N={id:VZ(Y,P,D),type:z,mapId:Y,x:P,y:D,energy:z.energyDelta,gold:O,matter:A};return Q.items[N.id]=N,Q}var VZ=function(Q,z,Y){return"item,"+Q+","+z+","+Y};function SZ(Q,z){return Q.items[z]=void 0,delete Q.items[z],Q}function QZ(Q,z){let Y=Object.keys(Q.items),P=[];for(let D=0;D<Y.length;D++){let O=Q.items[Y[D]];if(O.mapId===z)P.push(O)}return P}function ZJ(Q,z,Y,P){let D=VZ(z,Y,P);if(D in Q.items)return Q.items[D];return null}function l0(Q,z){return Q.tools[z]}function JJ(Q,z,Y){if(O0(z))return Q;if(!fV(z,Y))return Q;if(NV(Y))Q=bZ(Q,z.id,Y.type);else{if(Y.type===F.items.battery)z.energyMax+=Y.energy;Q._energyQueue.push({entityId:z.id,energyDelta:Y.energy})}return z.gold+=Y.gold,z.matter+=Y.matter,SZ(Q,Y.id),Q}function bZ(Q,z,Y){let P={type:Y};return Q.tools[z]=P,Q}var NV=function(Q){return Q.type.energyCost<0},fV=function(Q,z){return Q.gold+z.gold>=0&&Q.matter+z.matter>=0};function VJ(Q,z,Y,P,D){let O=new IV.js;O.setGrid(Q),O.setAcceptableTiles([0]),O.enableSync();let A=null;return O.findPath(z,Y,P,D,function(b){A=b}),O.calculate(),A}/*!
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
 */var IV=function(Q){var z={};function Y(P){if(z[P])return z[P].exports;var D=z[P]={i:P,l:!1,exports:{}};return Q[P].call(D.exports,D,D.exports,Y),D.l=!0,D.exports}return Y.m=Q,Y.c=z,Y.d=function(P,D,O){Y.o(P,D)||Object.defineProperty(P,D,{enumerable:!0,get:O})},Y.r=function(P){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(P,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(P,"__esModule",{value:!0})},Y.t=function(P,D){if(1&D&&(P=Y(P)),8&D)return P;if(4&D&&typeof P=="object"&&P&&P.__esModule)return P;var O=Object.create(null);if(Y.r(O),Object.defineProperty(O,"default",{enumerable:!0,value:P}),2&D&&typeof P!="string")for(var A in P)Y.d(O,A,function(b){return P[b]}.bind(null,A));return O},Y.n=function(P){var D=P&&P.__esModule?function(){return P.default}:function(){return P};return Y.d(D,"a",D),D},Y.o=function(P,D){return Object.prototype.hasOwnProperty.call(P,D)},Y.p="/bin/",Y(Y.s=0)}([function(Q,z,Y){var P={},D=Y(1),O=Y(2),A=Y(3);Q.exports=P;var b=1;P.js=function(){var N,f,h,s=!1,m={},t={},l={},y={},c=!0,$0={},G0=[],P0=Number.MAX_VALUE,F0=!1;this.setAcceptableTiles=function(S){S instanceof Array?h=S:!isNaN(parseFloat(S))&&isFinite(S)&&(h=[S])},this.enableSync=function(){s=!0},this.disableSync=function(){s=!1},this.enableDiagonals=function(){F0=!0},this.disableDiagonals=function(){F0=!1},this.setGrid=function(S){N=S;for(var v=0;v<N.length;v++)for(var j=0;j<N[0].length;j++)t[N[v][j]]||(t[N[v][j]]=1)},this.setTileCost=function(S,v){t[S]=v},this.setAdditionalPointCost=function(S,v,j){l[v]===void 0&&(l[v]={}),l[v][S]=j},this.removeAdditionalPointCost=function(S,v){l[v]!==void 0&&delete l[v][S]},this.removeAllAdditionalPointCosts=function(){l={}},this.setDirectionalCondition=function(S,v,j){y[v]===void 0&&(y[v]={}),y[v][S]=j},this.removeAllDirectionalConditions=function(){y={}},this.setIterationsPerCalculation=function(S){P0=S},this.avoidAdditionalPoint=function(S,v){m[v]===void 0&&(m[v]={}),m[v][S]=1},this.stopAvoidingAdditionalPoint=function(S,v){m[v]!==void 0&&delete m[v][S]},this.enableCornerCutting=function(){c=!0},this.disableCornerCutting=function(){c=!1},this.stopAvoidingAllAdditionalPoints=function(){m={}},this.findPath=function(S,v,j,n,i){var V0=function(N0){s?i(N0):setTimeout(function(){i(N0)})};if(h===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(N===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(S<0||v<0||j<0||n<0||S>N[0].length-1||v>N.length-1||j>N[0].length-1||n>N.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(S!==j||v!==n){for(var w0=N[n][j],z0=!1,j0=0;j0<h.length;j0++)if(w0===h[j0]){z0=!0;break}if(z0!==!1){var B0=new D;B0.openList=new A(function(N0,x0){return N0.bestGuessDistance()-x0.bestGuessDistance()}),B0.isDoneCalculating=!1,B0.nodeHash={},B0.startX=S,B0.startY=v,B0.endX=j,B0.endY=n,B0.callback=V0,B0.openList.push(a(B0,B0.startX,B0.startY,null,1));var _0=b++;return $0[_0]=B0,G0.push(_0),_0}V0(null)}else V0([])},this.cancelPath=function(S){return S in $0&&(delete $0[S],!0)},this.calculate=function(){if(G0.length!==0&&N!==void 0&&h!==void 0)for(f=0;f<P0;f++){if(G0.length===0)return;s&&(f=0);var S=G0[0],v=$0[S];if(v!==void 0)if(v.openList.size()!==0){var j=v.openList.pop();if(v.endX!==j.x||v.endY!==j.y)j.list=0,j.y>0&&C(v,j,0,-1,1*g(j.x,j.y-1)),j.x<N[0].length-1&&C(v,j,1,0,1*g(j.x+1,j.y)),j.y<N.length-1&&C(v,j,0,1,1*g(j.x,j.y+1)),j.x>0&&C(v,j,-1,0,1*g(j.x-1,j.y)),F0&&(j.x>0&&j.y>0&&(c||k(N,h,j.x,j.y-1,j)&&k(N,h,j.x-1,j.y,j))&&C(v,j,-1,-1,1.4*g(j.x-1,j.y-1)),j.x<N[0].length-1&&j.y<N.length-1&&(c||k(N,h,j.x,j.y+1,j)&&k(N,h,j.x+1,j.y,j))&&C(v,j,1,1,1.4*g(j.x+1,j.y+1)),j.x<N[0].length-1&&j.y>0&&(c||k(N,h,j.x,j.y-1,j)&&k(N,h,j.x+1,j.y,j))&&C(v,j,1,-1,1.4*g(j.x+1,j.y-1)),j.x>0&&j.y<N.length-1&&(c||k(N,h,j.x,j.y+1,j)&&k(N,h,j.x-1,j.y,j))&&C(v,j,-1,1,1.4*g(j.x-1,j.y+1)));else{var n=[];n.push({x:j.x,y:j.y});for(var i=j.parent;i!=null;)n.push({x:i.x,y:i.y}),i=i.parent;n.reverse();var V0=n;v.callback(V0),delete $0[S],G0.shift()}}else v.callback(null),delete $0[S],G0.shift();else G0.shift()}};var C=function(S,v,j,n,i){var V0=v.x+j,w0=v.y+n;if((m[w0]===void 0||m[w0][V0]===void 0)&&k(N,h,V0,w0,v)){var z0=a(S,V0,w0,v,i);z0.list===void 0?(z0.list=1,S.openList.push(z0)):v.costSoFar+i<z0.costSoFar&&(z0.costSoFar=v.costSoFar+i,z0.parent=v,S.openList.updateItem(z0))}},k=function(S,v,j,n,i){var V0=y[n]&&y[n][j];if(V0){var w0=T(i.x-j,i.y-n);if(!function(){for(var j0=0;j0<V0.length;j0++)if(V0[j0]===w0)return!0;return!1}())return!1}for(var z0=0;z0<v.length;z0++)if(S[n][j]===v[z0])return!0;return!1},T=function(S,v){if(S===0&&v===-1)return P.TOP;if(S===1&&v===-1)return P.TOP_RIGHT;if(S===1&&v===0)return P.RIGHT;if(S===1&&v===1)return P.BOTTOM_RIGHT;if(S===0&&v===1)return P.BOTTOM;if(S===-1&&v===1)return P.BOTTOM_LEFT;if(S===-1&&v===0)return P.LEFT;if(S===-1&&v===-1)return P.TOP_LEFT;throw new Error("These differences are not valid: "+S+", "+v)},g=function(S,v){return l[v]&&l[v][S]||t[N[v][S]]},a=function(S,v,j,n,i){if(S.nodeHash[j]!==void 0){if(S.nodeHash[j][v]!==void 0)return S.nodeHash[j][v]}else S.nodeHash[j]={};var V0=o(v,j,S.endX,S.endY);if(n!==null)var w0=n.costSoFar+i;else w0=0;var z0=new O(n,v,j,w0,V0);return S.nodeHash[j][v]=z0,z0},o=function(S,v,j,n){var i,V0;return F0?(i=Math.abs(S-j))<(V0=Math.abs(v-n))?1.4*i+V0:1.4*V0+i:(i=Math.abs(S-j))+(V0=Math.abs(v-n))}},P.TOP="TOP",P.TOP_RIGHT="TOP_RIGHT",P.RIGHT="RIGHT",P.BOTTOM_RIGHT="BOTTOM_RIGHT",P.BOTTOM="BOTTOM",P.BOTTOM_LEFT="BOTTOM_LEFT",P.LEFT="LEFT",P.TOP_LEFT="TOP_LEFT"},function(Q,z){Q.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(Q,z){Q.exports=function(Y,P,D,O,A){this.parent=Y,this.x=P,this.y=D,this.costSoFar=O,this.simpleDistanceToTarget=A,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(Q,z,Y){Q.exports=Y(4)},function(Q,z,Y){var P,D,O;(function(){var A,b,N,f,h,s,m,t,l,y,c,$0,G0,P0,F0;N=Math.floor,y=Math.min,b=function(C,k){return C<k?-1:C>k?1:0},l=function(C,k,T,g,a){var o;if(T==null&&(T=0),a==null&&(a=b),T<0)throw new Error("lo must be non-negative");for(g==null&&(g=C.length);T<g;)a(k,C[o=N((T+g)/2)])<0?g=o:T=o+1;return[].splice.apply(C,[T,T-T].concat(k)),k},s=function(C,k,T){return T==null&&(T=b),C.push(k),P0(C,0,C.length-1,T)},h=function(C,k){var T,g;return k==null&&(k=b),T=C.pop(),C.length?(g=C[0],C[0]=T,F0(C,0,k)):g=T,g},t=function(C,k,T){var g;return T==null&&(T=b),g=C[0],C[0]=k,F0(C,0,T),g},m=function(C,k,T){var g;return T==null&&(T=b),C.length&&T(C[0],k)<0&&(k=(g=[C[0],k])[0],C[0]=g[1],F0(C,0,T)),k},f=function(C,k){var T,g,a,o,S,v;for(k==null&&(k=b),S=[],g=0,a=(o=function(){v=[];for(var j=0,n=N(C.length/2);0<=n?j<n:j>n;0<=n?j++:j--)v.push(j);return v}.apply(this).reverse()).length;g<a;g++)T=o[g],S.push(F0(C,T,k));return S},G0=function(C,k,T){var g;if(T==null&&(T=b),(g=C.indexOf(k))!==-1)return P0(C,0,g,T),F0(C,g,T)},c=function(C,k,T){var g,a,o,S,v;if(T==null&&(T=b),!(a=C.slice(0,k)).length)return a;for(f(a,T),o=0,S=(v=C.slice(k)).length;o<S;o++)g=v[o],m(a,g,T);return a.sort(T).reverse()},$0=function(C,k,T){var g,a,o,S,v,j,n,i,V0;if(T==null&&(T=b),10*k<=C.length){if(!(o=C.slice(0,k).sort(T)).length)return o;for(a=o[o.length-1],S=0,j=(n=C.slice(k)).length;S<j;S++)T(g=n[S],a)<0&&(l(o,g,0,null,T),o.pop(),a=o[o.length-1]);return o}for(f(C,T),V0=[],v=0,i=y(k,C.length);0<=i?v<i:v>i;0<=i?++v:--v)V0.push(h(C,T));return V0},P0=function(C,k,T,g){var a,o,S;for(g==null&&(g=b),a=C[T];T>k&&g(a,o=C[S=T-1>>1])<0;)C[T]=o,T=S;return C[T]=a},F0=function(C,k,T){var g,a,o,S,v;for(T==null&&(T=b),a=C.length,v=k,o=C[k],g=2*k+1;g<a;)(S=g+1)<a&&!(T(C[g],C[S])<0)&&(g=S),C[k]=C[g],g=2*(k=g)+1;return C[k]=o,P0(C,v,k,T)},A=function(){function C(k){this.cmp=k!=null?k:b,this.nodes=[]}return C.push=s,C.pop=h,C.replace=t,C.pushpop=m,C.heapify=f,C.updateItem=G0,C.nlargest=c,C.nsmallest=$0,C.prototype.push=function(k){return s(this.nodes,k,this.cmp)},C.prototype.pop=function(){return h(this.nodes,this.cmp)},C.prototype.peek=function(){return this.nodes[0]},C.prototype.contains=function(k){return this.nodes.indexOf(k)!==-1},C.prototype.replace=function(k){return t(this.nodes,k,this.cmp)},C.prototype.pushpop=function(k){return m(this.nodes,k,this.cmp)},C.prototype.heapify=function(){return f(this.nodes,this.cmp)},C.prototype.updateItem=function(k){return G0(this.nodes,k,this.cmp)},C.prototype.clear=function(){return this.nodes=[]},C.prototype.empty=function(){return this.nodes.length===0},C.prototype.size=function(){return this.nodes.length},C.prototype.clone=function(){var k;return(k=new C).nodes=this.nodes.slice(0),k},C.prototype.toArray=function(){return this.nodes.slice(0)},C.prototype.insert=C.prototype.push,C.prototype.top=C.prototype.peek,C.prototype.front=C.prototype.peek,C.prototype.has=C.prototype.contains,C.prototype.copy=C.prototype.clone,C}(),D=[],(O=typeof(P=function(){return A})=="function"?P.apply(z,D):P)===void 0||(Q.exports=O)}).call(this)}]);function A0(){return"player"}function QJ(Q,z,Y,P){return Math.abs(Q-Y)+Math.abs(z-P)}function KJ(Q){return[...Array(Q).keys()]}function UJ(Q){let z=SV(Q);for(let P=0;P<z.length;P++){let D=z[P];if(!Q._AIs.hasOwnProperty(D))Q._AIs[D]=bV(Q,D,Q.entities[D].options.ai)}let Y=Q.entities[A0()];for(let P=0;P<z.length;P++){let D=z[P],O=Q.entities[D],A=Q._AIs[D],b=QJ(Y.x,Y.y,O.x,O.y);if(Y.options.faction!==O.options.faction&&b<=A.aggroRange){let N=Q.maps[Q.currentMapId].asMovementMap(),f=VJ(N,O.x,O.y,Y.x,Y.y);if(f){if(f=f.slice(1),f.length>b)f=null}A.path=f}}for(let P=0;P<z.length;P++){const D=z[P],O=Q.entities[D],A=Q._AIs[D];if(A.path){const b=A.path[0],N=b.x-O.x,f=b.y-O.y;Q=D0(Q,O,N,f)}}return Q}var SV=function(Q){let z=u0(Q,Q.currentMapId),Y=[];for(let P=0;P<z.length;P++){let D=z[P];if(!D.id.startsWith("player")&&!!D.options.ai)Y.push(D.id)}return Y},bV=function(Q,z,Y){let P=Q.entities[z],D=8;switch(Y){case F.ais.aggrorange:D=8;break;case F.ais.aggrorangeshort:D=2;break;case F.ais.guardian:D=1;break;default:}return{entityId:z,type:Y,aggroRange:D,startMap:P.mapId,startX:P.x,startY:P.y,path:null}};function KZ(Q,z){return Q._AIs[z]=void 0,delete Q._AIs[z],Q}function T0(Q,z={}){return{type:Q,options:z}}function qJ(Q){return Q.type.name.startsWith("space")}function zJ(Q,z){const Y=QZ(Q,z);for(let D=0;D<Y.length;D++){const O=Y[D];Q=SZ(Q,O.id)}const P=u0(Q,z);for(let D=0;D<P.length;D++){const O=P[D];Q=e0(Q,O.id),Q=KZ(Q,O.id)}return Q.maps[z]=void 0,delete Q.maps[z],Q}function qZ(Q){let z=Q.split(/\r?\n/),Y=Q[0],P="",D=0,O=0,A={},b=[];for(let N=0;N<z.length;N++){let f=z[N];if(f.startsWith(Y)){if(f.startsWith(Y+"!id"))P=f.slice(5);else if(f.startsWith(Y+"!size")){let h=f.split(" ").slice(1);D=Number(h[0]),O=Number(h[1])}else if(f.startsWith(Y+"!")){let h=f[2],s=f.slice(4);A[h]=s}}else for(let h=0;h<f.length;h++){let s=f[h],m=A[s];if(!m&&Z0.debug)console.log("DEBUG Broken map: "+P);let t=m.split(" "),l={};if(m.startsWith("portal ")||m.startsWith("portalhidden ")||m.startsWith("portalstart"))m=t[0],l.mapId=t[1],l.x=Number(t[2]),l.y=Number(t[3]);if(m.startsWith("wall ")&&t.length>=2)m="wall",l.sign=t[1];b.push(T0(F.tiles[m],l))}}return new g0(P,D,O,b)}var UZ={width:16,height:16},kZ=UZ;class g0{id;widthTiles;heightTiles;_tiles;_cacheMovementMap;constructor(Q,z,Y,P=[]){this.id=Q,this.widthTiles=z,this.heightTiles=Y,this._tiles=P,this._cacheMovementMap=null}getTile(Q,z){if(Q>=0&&Q<this.widthTiles&&z>=0&&z<this.heightTiles){let Y=z*this.widthTiles+Q;return this._tiles[Y]}return{}}setTile(Q,z,Y,P={}){this._cacheMovementMap=null;let D=z*this.widthTiles+Q;this._tiles[D]=T0(Y,P)}pasteOnto(Q,z=0,Y=0){for(let P=0;P<Q.heightTiles;P++)for(let D=0;D<Q.widthTiles;D++){const O=Q.getTile(D,P);if(O.type!==F.tiles.voidtrue)this.setTile(D+z,P+Y,O.type,O.options)}}circular(){let Q=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let z=-Q;z<=Q;z++)for(let Y=-Q;Y<=Q;Y++)if(Y*Y+z*z>=Q*Q)this.setTile(Y+Q-1,z+Q-1,F.tiles.voidtrue);return this}sample(Q,z){const Y=Math.floor(this.widthTiles/Q),P=Math.floor(this.heightTiles/z),D=[];for(let O=0;O<z;O++)for(let A=0;A<Q;A++){const b={};for(let t=0;t<P;t++)for(let l=0;l<Y;l++){const y=this.getTile(A*Y+l,O*P+t);if(b[y.type.name])b[y.type.name]+=1;else b[y.type.name]=1}let N="",f=0;for(let[t,l]of Object.entries(b))if(l>f)N=t,f=l;const h="space"+N,s=F.tiles[h]||F.tiles.spacevoid,m={mapId:this.id,x:A*Y,y:O*P};D.push(T0(s,m))}return new g0("__sampled_"+Q+"_"+z+"_"+this.id,Q,z,D)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let Q=new Array(this.heightTiles);for(let z=0;z<this.heightTiles;z++){Q[z]=new Array(this.widthTiles);for(let Y=0;Y<this.widthTiles;Y++){let P=z*this.widthTiles+Y,O=this._tiles[P].type;if(Q[z][Y]=0,O===F.tiles.rock||O===F.tiles.portalclosed||O.name.startsWith("wall"))Q[z][Y]=1}}return this._cacheMovementMap=Q,Q}}function XJ(Q,z,Y){switch(Y){case F.commands.N:Q=D0(Q,z,0,-1);break;case F.commands.W:Q=D0(Q,z,-1,0);break;case F.commands.S:Q=D0(Q,z,0,1);break;case F.commands.E:Q=D0(Q,z,1,0);break;case F.commands.A:Q=$J(Q,z,F.commands.A);break;case F.commands.B:Q=$J(Q,z,F.commands.B);break;default:}return Q}function D0(Q,z,Y,P,D=0){const O=Q.maps[z.mapId],A=aZ(Q,O.id,z.x+Y,z.y+P),b=Q.tools[z.id];if(A)if(O0(A)){if(!O0(z)&&D<1)Q=D0(Q,A,Y,P,D++),Q=D0(Q,z,Y,P,D++)}else Q=iZ(Q,z,A);else if(TV(O,z,Y,P))Q=kV(Q,O,z,Y,P),Q._energyQueue.push({entityId:z.id,energyDelta:-1*D});else if(gV(O,z,b,Y,P))O.setTile(z.x+Y,z.y+P,F.tiles.void),Q._energyQueue.push({entityId:z.id,energyDelta:b.type.energyCost});return Q}function $J(Q,z,Y){switch(ZZ(Q,z)[Y.key]){case F.actions.Enter:const A=Q.maps[z.mapId].getTile(z.x,z.y);Q=GJ(Q,z,A);break;case F.actions.Launch:Q=uV(Q,z);case F.actions.Wait:break;default:}return Q}var kV=function(Q,z,Y,P,D){Y.x+=P,Y.y+=D;let O=ZJ(Q,Y.mapId,Y.x,Y.y);if(O)Q=JJ(Q,Y,O);let A=z.getTile(Y.x,Y.y);if(A.type.name.startsWith("portal"))Q=GJ(Q,Y,A);if(A.type.name.startsWith("move"))switch(A.type.name){case"movenorth":Q=D0(Q,Y,0,-1);break;case"moveeast":Q=D0(Q,Y,1,0);break;case"movesouth":Q=D0(Q,Y,0,1);break;case"movewest":Q=D0(Q,Y,-1,0);break;default:}return Q},GJ=function(Q,z,Y){if(z.id.startsWith("player"))Q.currentMapId=Y.options.mapId;if(qJ(Y))Q.lastSpacePositionByEntity[z.id]={mapId:z.mapId,x:z.x,y:z.y};const P={entityId:z.id,oldMapId:z.mapId,oldX:z.x,oldY:z.y,oldTileType:Y.type,newMapId:Y.options.mapId,newX:Y.options.x,newY:Y.options.y};return z.mapId=Y.options.mapId,z.x=Y.options.x,z.y=Y.options.y,Q=eZ(Q,"entitymap.updated.event",P),Q},uV=function(Q,z){if(Q.lastSpacePositionByEntity[z.id]){if(z.id.startsWith("player"))Q.currentMapId=Q.lastSpacePositionByEntity[z.id].mapId;z.mapId=Q.lastSpacePositionByEntity[z.id].mapId,z.x=Q.lastSpacePositionByEntity[z.id].x,z.y=Q.lastSpacePositionByEntity[z.id].y,Q.lastSpacePositionByEntity[z.id]=void 0,delete Q.lastSpacePositionByEntity[z.id]}return Q};function BJ(Q){for(let z in Q.entities){let Y=Q.entities[z],D=Q.maps[Y.mapId].getTile(Y.x,Y.y);Q._energyQueue.push({entityId:z,energyDelta:D.type.energyDelta})}return Q}function LJ(Q,z){const Y=Q.entities[z.entityId];switch(z.oldTileType){case F.tiles.portalstartaerobot:Q=t0(Q,Y,F.entities.AeroBot);break;case F.tiles.portalstartworkbot:Q=t0(Q,Y,F.entities.WorkBot);break;default:}return Q}var TV=function(Q,z,Y,P){let D=z.x+Y,O=z.y+P,A=Q.getTile(D,O).type;return D>=0&&D<Q.widthTiles&&O>=0&&O<Q.heightTiles&&A!==F.tiles.rock&&A!==F.tiles.portalclosed&&!A.name.startsWith("wall")},gV=function(Q,z,Y,P,D){const O=z.x+P,A=z.y+D,b=Q.getTile(O,A).type;if(Y)return Y.type.effects.includes(F.effects.WallCrusher.name)&&b===F.tiles.wallweak;return!1};var HJ=CZ($Z(),1);class n0{seed;_rotRng;constructor(Q=1337){this.seed=Q,this._rotRng=HJ.RNG.clone(),this._rotRng.setSeed(Q)}getPercentage(){return this._rotRng.getPercentage()}getItem(Q){return this._rotRng.getItem(Q)}}var GZ=CZ($Z(),1);function FJ(Q,z=XZ){GZ.RNG.setSeed(z);let Y=new GZ.Noise.Simplex;const P=UZ.width*kZ.width,D=UZ.height*kZ.height;let O=[];for(let N=0;N<D;N++)for(let f=0;f<P;f++){let h=Y.get(f/PJ,N/PJ),s;if(h<=-0.5)s=F.tiles.water;else if(h<=0)s=F.tiles.void;else if(h<0.5)s=F.tiles.tree;else s=F.tiles.rock;O.push(T0(s))}const A="simplex="+z;let b=new g0(A,P,D,O);if(Q.maps[A]=b,z===1337)Q=d(Q,"batteryvalkyrie0",F.entities.Valkyrie,"simplex="+XZ,130,127,{faction:F.factions.Spirits}),Q=d(Q,"batteryvalkyrie1",F.entities.Valkyrie,"simplex="+XZ,124,127,{faction:F.factions.Spirits}),Q=K0(Q,F.items.battery,"simplex="+XZ,127,130);else{const N=new n0(z);for(let f=0;f<D;f++)for(let h=0;h<P;h++){const s=b.getTile(h,f);if(N.getPercentage()<=1&&(s.type===F.tiles.void||s.type===F.tiles.tree))switch(N.getItem(["pioneer","deviant","junk","matter"])){case"deviant":Q=d(Q,b.id+"_deviant_"+h+"_"+f,F.entities.Deviant,b.id,h,f,{faction:F.factions.Pyrates,ai:F.ais.aggrorange});break;case"pioneer":Q=d(Q,b.id+"_pioneer_"+h+"_"+f,F.entities.Pioneer,b.id,h,f,{faction:F.factions.Pyrates,ai:F.ais.aggrorange});break;case"junk":Q=K0(Q,F.items.junk,A,h,f);break;case"matter":Q=K0(Q,F.items.matter,A,h,f);break}}}return Q}var XZ=1337,PJ=55;function DJ(Q,z=hV){let Y=wJ(1024,1024,F.tiles.void);Y.id="solarsystem="+z,Q.maps[Y.id]=Y;const P=new n0(z),D=P.getItem([2,3,4,5,6,7,8,9,10,11,12]);let O=128,A=512-O;const b=Math.floor(A/D);Y=xV(Y,P);let N=wJ(128,128,F.tiles.voidtrue);mV(N,63,63,62,F.tiles.sun),_V(N,63,63,F.tiles.sun),Y.pasteOnto(N,448,448);for(let f=O;f<512;f+=b){let h=P.getItem([-1,1])*P.getItem(KJ(f)),s=P.getItem([-1,1])*Math.floor(Math.sqrt(f*f-h*h));h+=512,s+=512;const m=P.getItem([16,24,32]),t=Math.floor(m/2)-1;Q=FJ(Q,z);const l=Q.maps["simplex="+z].sample(m,m).circular();Y.pasteOnto(l,h-(t+1),s-(t+1)),z++}return Y.setTile(584,401,F.tiles.portal,{mapId:"bot_elevator",x:11,y:47}),Y.setTile(584,400,F.tiles.wall),Y.setTile(583,400,F.tiles.wall),Y.setTile(585,400,F.tiles.wall),Y.setTile(584,399,F.tiles.wall),Y.setTile(583,399,F.tiles.wall),Y.setTile(585,399,F.tiles.wall),Y.setTile(584,398,F.tiles.wall),Y.setTile(583,398,F.tiles.wall),Y.setTile(585,398,F.tiles.wall),Q}var wJ=function(Q,z,Y){const P=[];for(let A=0;A<Q*z;A++)P.push(T0(Y));return new g0("__temp",Q,z,P)},xV=function(Q,z){for(let Y=0;Y<Q.heightTiles;Y++)for(let P=0;P<Q.widthTiles;P++)if(z.getPercentage()<=1)Q.setTile(P,Y,z.getItem([F.tiles.spacevoidstarwhite,F.tiles.spacevoidstaryellow]));return Q},mV=function(Q,z,Y,P,D){let O=1-P,A=1,b=-2*P,N=0,f=P;Q.setTile(z,Y+P,D),Q.setTile(z,Y-P,D),Q.setTile(z+P,Y,D),Q.setTile(z-P,Y,D);while(N<f){if(O>=0)f-=1,b+=2,O+=b;N+=1,A+=2,O+=A,Q.setTile(z+N,Y+f,D),Q.setTile(z-N,Y+f,D),Q.setTile(z+N,Y-f,D),Q.setTile(z-N,Y-f,D),Q.setTile(z+f,Y+N,D),Q.setTile(z-f,Y+N,D),Q.setTile(z+f,Y-N,D),Q.setTile(z-f,Y-N,D)}return Q},_V=function(Q,z,Y,P){const{widthTiles:D,heightTiles:O}=Q,A=[];A.push({x:z,y:Y});let b=void 0;while(typeof(b=A.shift())!=="undefined"){let N=b,f=b;if(b.x+1<D)f={x:b.x+1,y:b.y};while(Q.getTile(N.x,N.y).type!==P){if(Q.setTile(N.x,N.y,P),N.y+1<O){if(Q.getTile(N.x,N.y+1).type!==P)A.push({x:N.x,y:N.y+1})}if(N.y-1>=0){if(Q.getTile(N.x,N.y-1).type!==P)A.push({x:N.x,y:N.y-1})}if(N.x-1>=0)N.x-=1;else break}while(Q.getTile(f.x,f.y).type!==P){if(Q.setTile(f.x,f.y,P),f.y+1<O){if(Q.getTile(f.x,f.y+1).type!==P)A.push({x:f.x,y:f.y+1})}if(f.y-1>=0){if(Q.getTile(f.x,f.y-1).type!==P)A.push({x:f.x,y:f.y-1})}if(f.x+1<D)f.x+=1;else break}}return Q},hV=1337;function MJ(Q,z){if(z?.oldMapId?.startsWith("shop_instance")){Q=zJ(Q,z.oldMapId);const Y=Q.maps[z.newMapId],P=Y.getTile(z.newX,z.newY);Y.setTile(z.newX,z.newY,P.type,{mapId:"shop_instance",x:z.oldX,y:z.oldY})}if(z?.newMapId?.startsWith("shop_instance")){const Y=qZ(yV);Y.id+="_"+z.oldMapId+"_"+z.entityId,Y.setTile(z.newX,z.newY,F.tiles.portal,{mapId:z.oldMapId,x:z.oldX,y:z.oldY}),Q.maps[z.oldMapId].setTile(z.oldX,z.oldY,z.oldTileType,{mapId:Y.id,x:z.newX,y:z.newY});const D=Q.entities[z.entityId];if(D.id.startsWith("player"))Q.currentMapId=Y.id;D.mapId=Y.id,D.x=z.newX,D.Y=z.newY,Q.maps[Y.id]=Y,Q=JZ(Q,F.items.hammer,Y.id,4,4,0,-200),Q=JZ(Q,F.items.battery,Y.id,4,6,0,-200),Q=JZ(Q,F.items.gold,Y.id,4,8,0,-1e4),Q=d(Q,Y.id+"_shopkeeper",F.entities.AeroBot,Y.id,6,2,{faction:D.options.faction}),Q=d(Q,Y.id+"_shopper",F.entities.WorkBot,Y.id,1,12,{faction:D.options.faction})}return Q}var yV=`!
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
`;function WJ(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!1,actionLog:[],currentMapId:"",entities:{},items:{},lastSpacePositionByEntity:{},maps:{},tools:{}}}function RJ(Q){let z=void 0;while(typeof(z=Q._combatQueue.shift())!=="undefined"){let Y=-1,P=-5;const D=l0(Q,z.entityId);if(D)Y=D.type.energyCost,P=-1*Math.abs(D.type.damage);Q._energyQueue.push({entityId:z.entityId,energyDelta:Y}),Q._energyQueue.push({entityId:z.otherEntityId,energyDelta:P})}return Q}function EJ(Q){let z=void 0;while(typeof(z=Q._energyQueue.shift())!=="undefined"){let Y=Q.entities[z.entityId];if(Y.energy=Math.min(Y.energy+z.energyDelta,Y.energyMax),Y.energy<=0){if(Q._despawnQueue.push(Y.id),!O0(Y)){const P=Math.max(1,Math.floor(Y.energyMax/3));Q=tZ(Q,P,Y.mapId,Y.x,Y.y)}}}return Q}function OJ(Q){let z=void 0;while(typeof(z=Q._despawnQueue.shift())!=="undefined")Q=e0(Q,z),Q=KZ(Q,z);return Q}function jJ(Q){return Q}function CJ(Q){return Q=UJ(Q),Q=RJ(Q),Q=BJ(Q),Q=EJ(Q),Q=OJ(Q),Q=jJ(Q),Q}class BZ{state;constructor(){}init(){this.state=WJ(),this.state=IZ(this.state,"entitymap.updated.event",LJ),this.state=IZ(this.state,"entitymap.updated.event",MJ),this.state=DJ(this.state);for(let Q in F.maps)this.state.maps[Q]=qZ(F.maps[Q]);this.state=d(this.state,"manual0",F.entities.Spirit,"manual",4,26,{faction:F.factions.Spirits}),this.state=d(this.state,"manual1",F.entities.AeroBot,"manual",4,27,{faction:F.factions.Spirits}),this.state=d(this.state,"manual2",F.entities.WorkBot,"manual",4,28,{faction:F.factions.Spirits}),this.state=d(this.state,"manual3",F.entities.Cleaner,"manual",4,29,{faction:F.factions.Spirits}),this.state=d(this.state,"manual4",F.entities.Pioneer,"manual",4,30,{faction:F.factions.Spirits}),this.state=d(this.state,"manual5",F.entities.Spirit,"manual",54,36,{faction:F.factions.Pyrates,ai:F.ais.aggrorange}),this.state=K0(this.state,F.items.junk,"manual",4,36),this.state=K0(this.state,F.items.goo,"manual",12,36),this.state=K0(this.state,F.items.matter,"manual",4,37),this.state=K0(this.state,F.items.gold,"manual",4,38),this.state=K0(this.state,F.items.energy,"manual",4,39),this.state=K0(this.state,F.items.battery,"manual",4,40),this.state=K0(this.state,F.items.wrench,"manual",4,41),this.state=d(this.state,"pioneerguardian0",F.entities.Pioneer,"bot_station",8,3,{faction:F.factions.Guardians,ai:F.ais.aggrorangeshort}),this.state=bZ(this.state,"pioneerguardian0",F.items.hammer),this.state=d(this.state,"cleanerguardian0",F.entities.Cleaner,"bot_station",10,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian1",F.entities.Cleaner,"bot_station",12,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian2",F.entities.Cleaner,"bot_station",14,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian3",F.entities.Cleaner,"bot_station",16,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian4",F.entities.Cleaner,"bot_station",18,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian5",F.entities.Cleaner,"bot_station",20,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian6",F.entities.Cleaner,"bot_station",22,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian7",F.entities.Cleaner,"bot_station",24,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian8",F.entities.Cleaner,"bot_station",26,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian9",F.entities.Cleaner,"bot_station",28,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerjailer0",F.entities.Cleaner,"bot_prison",18,11,{faction:F.factions.Guardians,ai:F.ais.aggrorange}),this.state=d(this.state,"cleanerjailer1",F.entities.Cleaner,"bot_prison",17,2,{faction:F.factions.Guardians,ai:F.ais.aggrorange}),this.state=d(this.state,"cleanerjailer2",F.entities.Cleaner,"bot_prison",24,5,{faction:F.factions.Guardians,ai:F.ais.aggrorange}),this.state=d(this.state,"cleanerjailer3",F.entities.Cleaner,"bot_prison",29,24,{faction:F.factions.Guardians,ai:F.ais.aggrorangeshort}),this.state=d(this.state,"prisoner0",F.entities.AeroBot,"bot_prison",34,22,{faction:F.factions.Spirits}),this.state=d(this.state,"prisoner1",F.entities.WorkBot,"bot_prison",9,22,{faction:F.factions.Spirits}),this.state=K0(this.state,F.items.broom,"bot_prison",28,1),this.state=K0(this.state,F.items.battery,"bot_prison",43,30),this.state=K0(this.state,F.items.matter,"bot_prison",9,30),this.state=K0(this.state,F.items.battery,"bot_dormitory",13,8),this.state=K0(this.state,F.items.junk,"bot_dormitory_hidden",1,2),this.state=K0(this.state,F.items.battery,"bot_dormitory_hidden",2,2),this.state=K0(this.state,F.items.shocker,"bot_bar",10,11),this.state=K0(this.state,F.items.hammer,"bot_elevator",12,3),this.state=K0(this.state,F.items.wrench,"bot_factory",45,19),this.state=K0(this.state,F.items.battery,"bot_factory",4,13);for(let Q=2;Q<=8;Q++)for(let z=2;z<=8;z++)this.state=K0(this.state,F.items.junk,"bot_factory",z,Q);this.state=fZ(this.state,"bot_bar",14,3),this.state=fZ(this.state,"bot_bar",14,12),this.state=NZ(this.state,"playground",9,9),this.state=NZ(this.state,"playground",10,9);for(let Q=1;Q<=18;Q++)this.state=K0(this.state,F.items.battery,"playground",Q,18);return this.state.currentMapId="botmos_hull_selection",this.state=d(this.state,A0(),F.entities.Spirit,this.state.currentMapId,9,5,{faction:F.factions.Spirits}),this.state}update(Q){let z=this.state.entities[A0()];if(z){if(Q){if(Q===F.commands.M)this.state._menuOpen=!this.state._menuOpen;else this.state=XJ(this.state,z,Q),this.state=CJ(this.state);this.state.actionLog.push(Q.key)}}else sZ("Game over! "+this.state.actionLog.length+" Turns: "+this.state.actionLog.join("")),this.state.currentMapId="botmos_hull_selection",this.state=d(this.state,A0(),F.entities.Spirit,this.state.currentMapId,9,5,{faction:F.factions.Spirits});return this.state}play(Q){for(let z=0;z<Q.length;z++){const Y=Q[z];this.update(F.commands[Y])}return this.state}}var v0=function(Q){const z=Date.now();if(TZ!==void 0&&z-AJ>=80)AJ=z,TZ(Q)},q0=function(Q){Q.preventDefault(),Q.stopPropagation()},pV=function(){let Q=null;if(p.right)Q=F.commands.E;if(p.left)Q=F.commands.W;if(p.down)Q=F.commands.S;if(p.up)Q=F.commands.N;if(p.up&&p.right){if(Q===F.commands.N&&r0===F.commands.N)Q=F.commands.E}if(p.up&&p.left){if(Q===F.commands.N&&r0===F.commands.N)Q=F.commands.W}if(p.down&&p.right){if(Q===F.commands.S&&r0===F.commands.S)Q=F.commands.E}if(p.down&&p.left){if(Q===F.commands.S&&r0===F.commands.S)Q=F.commands.W}if(p.a)Q=F.commands.A;if(p.b)Q=F.commands.B;if(p.menu)Q=F.commands.M;if(r0=Q,Q!==null)uZ.push(Q)},vJ=function(){pV();let Q=uZ.shift()||null;return uZ=[],Q};function fJ(Q){TZ=Q}var p={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1},uZ=[],TZ=void 0,AJ=0;document.body.addEventListener("keydown",function(Q){if(Q.defaultPrevented)return;switch(Q.key){case"w":case"ArrowUp":p.up=!0,q0(Q);break;case"a":case"ArrowLeft":p.left=!0,q0(Q);break;case"s":case"ArrowDown":p.down=!0,q0(Q);break;case"d":case"ArrowRight":p.right=!0,q0(Q);break;case"x":p.a=!0,q0(Q);break;case" ":case"y":case"z":p.b=!0,q0(Q);break;case"m":p.menu=!0,q0(Q);break;default:}v0(vJ())});document.body.addEventListener("keyup",function(Q){if(Q.defaultPrevented)return;switch(Q.key){case"w":case"ArrowUp":p.up=!1,q0(Q);break;case"a":case"ArrowLeft":p.left=!1,q0(Q);break;case"s":case"ArrowDown":p.down=!1,q0(Q);break;case"d":case"ArrowRight":p.right=!1,q0(Q);break;case"x":p.a=!1,q0(Q);break;case" ":case"y":case"z":p.b=!1,q0(Q);break;case"m":p.menu=!1,q0(Q);break;default:}});document.body.addEventListener("click",function(Q){const{clientX:z,clientY:Y}=Q,D=document.body.clientWidth/3,A=document.body.clientHeight/3;if(z>=D&&z<2*D&&Y<A)v0(F.commands.N),q0(Q);else if(z<D&&Y<A)v0(F.commands.B),q0(Q);else if(z>=2*D&&Y<A)v0(F.commands.A),q0(Q);else if(z<D&&Y>=A&&Y<2*A)v0(F.commands.W),q0(Q);else if(z>=2*D&&Y>=A&&Y<2*A)v0(F.commands.E),q0(Q);else if(z>=D&&z<2*D&&Y>=2*A)v0(F.commands.S),q0(Q);else if(z>=D&&z<2*D&&Y>=A&&Y<2*A)v0(F.commands.M),q0(Q)});var r0=null,NJ=void 0;window.addEventListener("gamepadconnected",(Q)=>{NJ=setInterval(function(){let z=navigator.getGamepads()[Q.gamepad?.index];if(p.right=z.buttons[15].pressed,p.left=z.buttons[14].pressed,p.down=z.buttons[13].pressed,p.up=z.buttons[12].pressed,p.a=z.buttons[0].pressed||z.buttons[2].pressed,p.b=z.buttons[1].pressed||z.buttons[3].pressed,p.menu=z.buttons[9].pressed,p.right||p.left||p.down||p.up||p.a||p.b||p.menu)v0(vJ())},100)});window.addEventListener("gamepaddisconnected",(Q)=>{clearInterval(NJ)});var SJ=CZ($Z(),1);var LZ=function(Q){return F.colors[Q]},cV=function(Q,z){let Y=Q.currentMapId,P=Q.maps[Y];for(var D=0;D<z.height;D++)for(var O=0;O<z.width;O++){var A=P.getTile(z.x+O,z.y+D),b=F.colors.black,N=F.colors.white,f="";if(!!A&&!!A.type)b=LZ(A.type.bg),N=LZ(A.type.fg),f=A.options.sign||A.type.icon;S0.draw(O,D,f,N,b)}const h=QZ(Q,Y);for(let y=0;y<h.length;y++){let c=h[y];S0.drawOver(c.x-z.x,c.y-z.y,c.type.icon,LZ(c.type.color))}const s=A0(),m=Q.entities[s],t=((m||{}).options||{}).faction||void 0,l=u0(Q,Y);for(let y=0;y<l.length;y++){const c=l[y];let $0=t===c.options.faction?F.colors.white:LZ(c.options.faction.color);if(Z0.highlightEnemy&&!O0(c))$0=t===c.options.faction?F.colors.cybergreen:F.colors.cybermagenta;if(c===m)$0=F.colors.white;S0.drawOver(c.x-z.x,c.y-z.y,c.type.icon,$0)}if(!!m&&Z0.showUI){let y="";const c=l0(Q,s);if(c)y+=c.type.name+" ";const $0=ZZ(Q,m);let G0=m.type.icon+" "+m.energy+"/"+m.energyMax+" "+y+"X:"+$0.A.name+" Y:"+$0.B.name,P0=Y0.height-1;if(m.y-z.y>=Y0.height-3)P0=0;S0.drawText(0,P0,"%c{white}%b{black}"+G0,z.width)}if(Q._menuOpen){const y=[];if(y.push("BotMos Menu"),y.push(""),m){y.push("Hull: "+m.type.icon+" ("+m.type.name+")"),y.push("Energy: "+m.energy+"/"+m.energyMax),y.push("Gold: "+m.gold),y.push("Matter: "+m.matter);const c=l0(Q,s);if(c)y.push("Tool: "+c.type.name);if(Z0.debug)y.push("DEBUG Position: "+m.x+","+m.y),y.push("DEBUG Map: "+m.mapId)}for(let c=0;c<y.length;c++)S0.drawText(0,c,"%c{#74ee15}%b{black}"+y[c],z.width)}for(let y=0;y<vZ.length;y++){let c=vZ[y];S0.drawText(0,y,"%c{green}%b{black}"+c,z.width)}};async function h0(Q){const z=Q.entities[A0()],Y=z?z:IJ,P=dV(Y);cV(Q,P),IJ=Y}async function bJ(Q){S0.setOptions(Q)}var dV=function(Q){return{x:Math.min(Math.max(0,Q.x-Math.floor(Y0.width/2)),AZ.WIDTH-Y0.width),y:Math.min(Math.max(0,Q.y-Math.floor(Y0.height/2)),AZ.HEIGHT-Y0.height),width:Y0.width,height:Y0.height}},S0=new SJ.Display(Y0);document.body.appendChild(S0.getContainer());var IJ={x:0,y:0};var M0=new BZ;window.onload=function(){h0(M0.init())};window.onresize=function(){const Q=typeof window!=="undefined"?window.innerWidth:0,z=typeof window!=="undefined"?window.innerHeight:0;Z0.cameraWidth=Math.floor(Q/Z0.fontSize),Z0.cameraHeight=Math.floor(z/Z0.fontSize),Y0.width=Math.floor(Z0.cameraWidth*(1/Z0.zoom)),Y0.height=Math.floor(Z0.cameraHeight*(1/Z0.zoom)),bJ(Y0),h0(M0.state)};fJ(function(Q){h0(M0.update(Q))});if(!window.BMActionLog)window.BMActionLog=function(){return M0.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(Q){h0(M0.play(Q))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){Z0.debug=!Z0.debug,h0(M0.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){Z0.showUI=!Z0.showUI,h0(M0.state)};if(Z0.debug){if(!window.BMDebugState)window.BMDebugState=function(){return M0.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){const Q=Object.keys(M0.state.maps).length,z=Object.keys(M0.state.entities).length,Y=Object.keys(M0.state.items).length,P=Object.keys(M0.state.tools).length;return`Maps: ${Q}, Entities: ${z}, Items: ${Y}, Tools: ${P}`}}window.focus();
