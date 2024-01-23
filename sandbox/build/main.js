var MZ=Object.create;var{defineProperty:rJ,getPrototypeOf:OZ,getOwnPropertyNames:EZ}=Object;var jZ=Object.prototype.hasOwnProperty;var CJ=(Q,$,Y)=>{Y=Q!=null?MZ(OZ(Q)):{};const H=$||!Q||!Q.__esModule?rJ(Y,"default",{value:Q,enumerable:!0}):Y;for(let D of EZ(Q))if(!jZ.call(H,D))rJ(H,D,{get:()=>Q[D],enumerable:!0});return H};var CZ=(Q,$)=>()=>($||Q(($={exports:{}}).exports,$),$.exports);var XJ=CZ(($J,YV)=>{var P0=function(Q){if(Q===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return Q},Q0=function(Q,$){Q.prototype=Object.create($.prototype),Q.prototype.constructor=Q,Q.__proto__=$};(function(Q,$){typeof $J==="object"&&typeof YV!=="undefined"?$($J):typeof define==="function"&&define.amd?define(["exports"],$):$(Q.ROT={})})($J,function(Q){var $=0.00000000023283064365386964,Y=function(){function X(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var G=X.prototype;return G.getSeed=function z(){return this._seed},G.setSeed=function z(K){return K=K<1?1/K:K,this._seed=K,this._s0=(K>>>0)*$,K=K*69069+1>>>0,this._s1=K*$,K=K*69069+1>>>0,this._s2=K*$,this._c=1,this},G.getUniform=function z(){var K=2091639*this._s0+this._c*$;return this._s0=this._s1,this._s1=this._s2,this._c=K|0,this._s2=K-this._c,this._s2},G.getUniformInt=function z(K,J){var V=Math.max(K,J),Z=Math.min(K,J);return Math.floor(this.getUniform()*(V-Z+1))+Z},G.getNormal=function z(K,J){if(K===void 0)K=0;if(J===void 0)J=1;var V,Z,U;do V=2*this.getUniform()-1,Z=2*this.getUniform()-1,U=V*V+Z*Z;while(U>1||U==0);var q=V*Math.sqrt(-2*Math.log(U)/U);return K+q*J},G.getPercentage=function z(){return 1+Math.floor(this.getUniform()*100)},G.getItem=function z(K){if(!K.length)return null;return K[Math.floor(this.getUniform()*K.length)]},G.shuffle=function z(K){var J=[],V=K.slice();while(V.length){var Z=V.indexOf(this.getItem(V));J.push(V.splice(Z,1)[0])}return J},G.getWeightedValue=function z(K){var J=0;for(var V in K)J+=K[V];var Z=this.getUniform()*J,U,q=0;for(U in K)if(q+=K[U],Z<q)return U;return U},G.getState=function z(){return[this._s0,this._s1,this._s2,this._c]},G.setState=function z(K){return this._s0=K[0],this._s1=K[1],this._s2=K[2],this._c=K[3],this},G.clone=function z(){var K=new X;return K.setState(this.getState())},X}(),H=new Y().setSeed(Date.now()),D=function(){function X(){}var G=X.prototype;return G.getContainer=function z(){return null},G.setOptions=function z(K){this._options=K},X}(),E=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._ctx=document.createElement("canvas").getContext("2d"),K}var z=G.prototype;return z.schedule=function K(J){requestAnimationFrame(J)},z.getContainer=function K(){return this._ctx.canvas},z.setOptions=function K(J){X.prototype.setOptions.call(this,J);var V=J.fontStyle?J.fontStyle+" ":"",Z=V+" "+J.fontSize+"px "+J.fontFamily;this._ctx.font=Z,this._updateSize(),this._ctx.font=Z,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},z.clear=function K(){this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height)},z.eventToPosition=function K(J,V){var Z=this._ctx.canvas,U=Z.getBoundingClientRect();if(J-=U.left,V-=U.top,J*=Z.width/U.width,V*=Z.height/U.height,J<0||V<0||J>=Z.width||V>=Z.height)return[-1,-1];return this._normalizedEventToPosition(J,V)},G}(D);function v(X,G){return(X%G+G)%G}function b(X,G,z){if(G===void 0)G=0;if(z===void 0)z=1;if(X<G)return G;if(X>z)return z;return X}function N(X){return X.charAt(0).toUpperCase()+X.substring(1)}function I(X){for(var G=arguments.length,z=new Array(G>1?G-1:0),K=1;K<G;K++)z[K-1]=arguments[K];var J=I.map,V=function Z(U,q,L,B){if(X.charAt(B-1)=="%")return U.substring(1);if(!z.length)return U;var P=z[0],F=q||L,R=F.split(","),W=R.shift()||"",M=J[W.toLowerCase()];if(!M)return U;P=z.shift();var O=P[M].apply(P,R),f=W.charAt(0);if(f!=f.toLowerCase())O=N(O);return O};return X.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,V)}I.map={s:"toString"};var x=Object.freeze({mod:v,clamp:b,capitalize:N,format:I}),r=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._spacingX=0,K._spacingY=0,K._hexSize=0,K}var z=G.prototype;return z.draw=function K(J,V){var Z=J[0],U=J[1],q=J[2],L=J[3],B=J[4],P=[(Z+1)*this._spacingX,U*this._spacingY+this._hexSize];if(this._options.transpose)P.reverse();if(V)this._ctx.fillStyle=B,this._fill(P[0],P[1]);if(!q)return;this._ctx.fillStyle=L;var F=[].concat(q);for(var R=0;R<F.length;R++)this._ctx.fillText(F[R],P[0],Math.ceil(P[1]))},z.computeSize=function K(J,V){if(this._options.transpose)J+=V,V=J-V,J-=V;var Z=Math.floor(J/this._spacingX)-1,U=Math.floor((V-2*this._hexSize)/this._spacingY+1);return[Z,U]},z.computeFontSize=function K(J,V){if(this._options.transpose)J+=V,V=J-V,J-=V;var Z=2*J/((this._options.width+1)*Math.sqrt(3))-1,U=V/(2+1.5*(this._options.height-1)),q=Math.min(Z,U),L=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var B=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=L;var P=B/100;q=Math.floor(q)+1;var F=2*q/(this._options.spacing*(1+P/Math.sqrt(3)));return Math.ceil(F)-1},z._normalizedEventToPosition=function K(J,V){var Z;if(this._options.transpose)J+=V,V=J-V,J-=V,Z=this._ctx.canvas.width;else Z=this._ctx.canvas.height;var U=Z/this._options.height;if(V=Math.floor(V/U),v(V,2))J-=this._spacingX,J=1+2*Math.floor(J/(2*this._spacingX));else J=2*Math.floor(J/(2*this._spacingX));return[J,V]},z._fill=function K(J,V){var Z=this._hexSize,U=this._options.border,q=this._ctx;if(q.beginPath(),this._options.transpose)q.moveTo(J-Z+U,V),q.lineTo(J-Z/2+U,V+this._spacingX-U),q.lineTo(J+Z/2-U,V+this._spacingX-U),q.lineTo(J+Z-U,V),q.lineTo(J+Z/2-U,V-this._spacingX+U),q.lineTo(J-Z/2+U,V-this._spacingX+U),q.lineTo(J-Z+U,V);else q.moveTo(J,V-Z+U),q.lineTo(J+this._spacingX-U,V-Z/2+U),q.lineTo(J+this._spacingX-U,V+Z/2-U),q.lineTo(J,V+Z-U),q.lineTo(J-this._spacingX+U,V+Z/2-U),q.lineTo(J-this._spacingX+U,V-Z/2+U),q.lineTo(J,V-Z+U);q.fill()},z._updateSize=function K(){var J=this._options,V=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(J.spacing*(J.fontSize+V/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var Z,U;if(J.transpose)Z="height",U="width";else Z="width",U="height";this._ctx.canvas[Z]=Math.ceil((J.width+1)*this._spacingX),this._ctx.canvas[U]=Math.ceil((J.height-1)*this._spacingY+2*this._hexSize)},G}(E),m=function(){var X=function(G){Q0(z,G);function z(){var J=G.call(this)||this;return J._spacingX=0,J._spacingY=0,J._canvasCache={},J}var K=z.prototype;return K.setOptions=function J(V){G.prototype.setOptions.call(this,V),this._canvasCache={}},K.draw=function J(V,Z){if(z.cache)this._drawWithCache(V);else this._drawNoCache(V,Z)},K._drawWithCache=function J(V){var Z=V[0],U=V[1],q=V[2],L=V[3],B=V[4],P=""+q+L+B,F;if(P in this._canvasCache)F=this._canvasCache[P];else{var R=this._options.border;F=document.createElement("canvas");var W=F.getContext("2d");if(F.width=this._spacingX,F.height=this._spacingY,W.fillStyle=B,W.fillRect(R,R,F.width-R,F.height-R),q){W.fillStyle=L,W.font=this._ctx.font,W.textAlign="center",W.textBaseline="middle";var M=[].concat(q);for(var O=0;O<M.length;O++)W.fillText(M[O],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[P]=F}this._ctx.drawImage(F,Z*this._spacingX,U*this._spacingY)},K._drawNoCache=function J(V,Z){var U=V[0],q=V[1],L=V[2],B=V[3],P=V[4];if(Z){var F=this._options.border;this._ctx.fillStyle=P,this._ctx.fillRect(U*this._spacingX+F,q*this._spacingY+F,this._spacingX-F,this._spacingY-F)}if(!L)return;this._ctx.fillStyle=B;var R=[].concat(L);for(var W=0;W<R.length;W++)this._ctx.fillText(R[W],(U+0.5)*this._spacingX,Math.ceil((q+0.5)*this._spacingY))},K.computeSize=function J(V,Z){var U=Math.floor(V/this._spacingX),q=Math.floor(Z/this._spacingY);return[U,q]},K.computeFontSize=function J(V,Z){var U=Math.floor(V/this._options.width),q=Math.floor(Z/this._options.height),L=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var B=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=L;var P=B/100,F=P*q/U;if(F>1)q=Math.floor(q/F);return Math.floor(q/this._options.spacing)},K._normalizedEventToPosition=function J(V,Z){return[Math.floor(V/this._spacingX),Math.floor(Z/this._spacingY)]},K._updateSize=function J(){var V=this._options,Z=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(V.spacing*Z),this._spacingY=Math.ceil(V.spacing*V.fontSize),V.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=V.width*this._spacingX,this._ctx.canvas.height=V.height*this._spacingY},z}(E);return X.cache=!1,X}(),e=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._colorCanvas=document.createElement("canvas"),K}var z=G.prototype;return z.draw=function K(J,V){var Z=J[0],U=J[1],q=J[2],L=J[3],B=J[4],P=this._options.tileWidth,F=this._options.tileHeight;if(V)if(this._options.tileColorize)this._ctx.clearRect(Z*P,U*F,P,F);else this._ctx.fillStyle=B,this._ctx.fillRect(Z*P,U*F,P,F);if(!q)return;var R=[].concat(q),W=[].concat(L),M=[].concat(B);for(var O=0;O<R.length;O++){var f=this._options.tileMap[R[O]];if(!f)throw new Error("Char \""+R[O]+"\" not found in tileMap");if(this._options.tileColorize){var u=this._colorCanvas,h=u.getContext("2d");h.globalCompositeOperation="source-over",h.clearRect(0,0,P,F);var _=W[O],i=M[O];if(h.drawImage(this._options.tileSet,f[0],f[1],P,F,0,0,P,F),_!="transparent")h.fillStyle=_,h.globalCompositeOperation="source-atop",h.fillRect(0,0,P,F);if(i!="transparent")h.fillStyle=i,h.globalCompositeOperation="destination-over",h.fillRect(0,0,P,F);this._ctx.drawImage(u,Z*P,U*F,P,F)}else this._ctx.drawImage(this._options.tileSet,f[0],f[1],P,F,Z*P,U*F,P,F)}},z.computeSize=function K(J,V){var Z=Math.floor(J/this._options.tileWidth),U=Math.floor(V/this._options.tileHeight);return[Z,U]},z.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},z._normalizedEventToPosition=function K(J,V){return[Math.floor(J/this._options.tileWidth),Math.floor(V/this._options.tileHeight)]},z._updateSize=function K(){var J=this._options;this._ctx.canvas.width=J.width*J.tileWidth,this._ctx.canvas.height=J.height*J.tileHeight,this._colorCanvas.width=J.tileWidth,this._colorCanvas.height=J.tileHeight},G}(E);function d(X){var G,z;if(X in j)G=j[X];else{if(X.charAt(0)=="#"){var K=X.match(/[0-9a-f]/gi)||[],J=K.map(function(Z){return parseInt(Z,16)});if(J.length==3)G=J.map(function(Z){return Z*17});else{for(var V=0;V<3;V++)J[V+1]+=16*J[V],J.splice(V,1);G=J}}else if(z=X.match(/rgb\(([0-9, ]+)\)/i))G=z[1].split(/\s*,\s*/).map(function(Z){return parseInt(Z)});else G=[0,0,0];j[X]=G}return G.slice()}function y(X){var G=X.slice();for(var z=arguments.length,K=new Array(z>1?z-1:0),J=1;J<z;J++)K[J-1]=arguments[J];for(var V=0;V<3;V++)for(var Z=0;Z<K.length;Z++)G[V]+=K[Z][V];return G}function c(X){for(var G=arguments.length,z=new Array(G>1?G-1:0),K=1;K<G;K++)z[K-1]=arguments[K];for(var J=0;J<3;J++)for(var V=0;V<z.length;V++)X[J]+=z[V][J];return X}function $0(X){var G=X.slice();for(var z=arguments.length,K=new Array(z>1?z-1:0),J=1;J<z;J++)K[J-1]=arguments[J];for(var V=0;V<3;V++){for(var Z=0;Z<K.length;Z++)G[V]*=K[Z][V]/255;G[V]=Math.round(G[V])}return G}function G0(X){for(var G=arguments.length,z=new Array(G>1?G-1:0),K=1;K<G;K++)z[K-1]=arguments[K];for(var J=0;J<3;J++){for(var V=0;V<z.length;V++)X[J]*=z[V][J]/255;X[J]=Math.round(X[J])}return X}function H0(X,G,z){if(z===void 0)z=0.5;var K=X.slice();for(var J=0;J<3;J++)K[J]=Math.round(K[J]+z*(G[J]-X[J]));return K}var F0=H0;function C(X,G,z){if(z===void 0)z=0.5;var K=g(X),J=g(G);for(var V=0;V<3;V++)K[V]+=z*(J[V]-K[V]);return s(K)}var k=C;function T(X,G){if(!(G instanceof Array))G=Math.round(H.getNormal(0,G));var z=X.slice();for(var K=0;K<3;K++)z[K]+=G instanceof Array?Math.round(H.getNormal(0,G[K])):G;return z}function g(X){var G=X[0]/255,z=X[1]/255,K=X[2]/255,J=Math.max(G,z,K),V=Math.min(G,z,K),Z=0,U,q=(J+V)/2;if(J==V)U=0;else{var L=J-V;switch(U=q>0.5?L/(2-J-V):L/(J+V),J){case G:Z=(z-K)/L+(z<K?6:0);break;case z:Z=(K-G)/L+2;break;case K:Z=(G-z)/L+4;break}Z/=6}return[Z,U,q]}function o(X,G,z){if(z<0)z+=1;if(z>1)z-=1;if(z<0.16666666666666666)return X+(G-X)*6*z;if(z<0.5)return G;if(z<0.6666666666666666)return X+(G-X)*(0.6666666666666666-z)*6;return X}function s(X){var G=X[2];if(X[1]==0)return G=Math.round(G*255),[G,G,G];else{var z=X[1],K=G<0.5?G*(1+z):G+z-G*z,J=2*G-K,V=o(J,K,X[0]+0.3333333333333333),Z=o(J,K,X[0]),U=o(J,K,X[0]-0.3333333333333333);return[Math.round(V*255),Math.round(Z*255),Math.round(U*255)]}}function S(X){var G=X.map(function(z){return b(z,0,255)});return"rgb("+G.join(",")+")"}function A(X){var G=X.map(function(z){return b(z,0,255).toString(16).padStart(2,"0")});return"#"+G.join("")}var j={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},l=Object.freeze({fromString:d,add:y,add_:c,multiply:$0,multiply_:G0,interpolate:H0,lerp:F0,interpolateHSL:C,lerpHSL:k,randomize:T,rgb2hsl:g,hsl2rgb:s,toRGB:S,toHex:A}),a=function(X){Q0(G,X);function G(){var K=X.call(this)||this;K._uniforms={};try{K._gl=K._initWebGL()}catch(J){alert(J.message)}return K}G.isSupported=function K(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var z=G.prototype;return z.schedule=function K(J){requestAnimationFrame(J)},z.getContainer=function K(){return this._gl.canvas},z.setOptions=function K(J){var V=this;X.prototype.setOptions.call(this,J),this._updateSize();var Z=this._options.tileSet;if(Z&&"complete"in Z&&!Z.complete)Z.addEventListener("load",function(){return V._updateTexture(Z)});else this._updateTexture(Z)},z.draw=function K(J,V){var Z=this._gl,U=this._options,q=J[0],L=J[1],B=J[2],P=J[3],F=J[4],R=Z.canvas.height-(L+1)*U.tileHeight;if(Z.scissor(q*U.tileWidth,R,U.tileWidth,U.tileHeight),V){if(U.tileColorize)Z.clearColor(0,0,0,0);else Z.clearColor.apply(Z,x0(F));Z.clear(Z.COLOR_BUFFER_BIT)}if(!B)return;var W=[].concat(B),M=[].concat(F),O=[].concat(P);Z.uniform2fv(this._uniforms.targetPosRel,[q,L]);for(var f=0;f<W.length;f++){var u=this._options.tileMap[W[f]];if(!u)throw new Error("Char \""+W[f]+"\" not found in tileMap");if(Z.uniform1f(this._uniforms.colorize,U.tileColorize?1:0),Z.uniform2fv(this._uniforms.tilesetPosAbs,u),U.tileColorize)Z.uniform4fv(this._uniforms.tint,x0(O[f])),Z.uniform4fv(this._uniforms.bg,x0(M[f]));Z.drawArrays(Z.TRIANGLE_STRIP,0,4)}},z.clear=function K(){var J=this._gl;J.clearColor.apply(J,x0(this._options.bg)),J.scissor(0,0,J.canvas.width,J.canvas.height),J.clear(J.COLOR_BUFFER_BIT)},z.computeSize=function K(J,V){var Z=Math.floor(J/this._options.tileWidth),U=Math.floor(V/this._options.tileHeight);return[Z,U]},z.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},z.eventToPosition=function K(J,V){var Z=this._gl.canvas,U=Z.getBoundingClientRect();if(J-=U.left,V-=U.top,J*=Z.width/U.width,V*=Z.height/U.height,J<0||V<0||J>=Z.width||V>=Z.height)return[-1,-1];return this._normalizedEventToPosition(J,V)},z._initWebGL=function K(){var J=this,V=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=V;var Z=O0(V,w0,z0);return V.useProgram(Z),B0(V),Z0.forEach(function(U){return J._uniforms[U]=V.getUniformLocation(Z,U)}),this._program=Z,V.enable(V.BLEND),V.blendFuncSeparate(V.SRC_ALPHA,V.ONE_MINUS_SRC_ALPHA,V.ONE,V.ONE_MINUS_SRC_ALPHA),V.enable(V.SCISSOR_TEST),V},z._normalizedEventToPosition=function K(J,V){return[Math.floor(J/this._options.tileWidth),Math.floor(V/this._options.tileHeight)]},z._updateSize=function K(){var J=this._gl,V=this._options,Z=[V.width*V.tileWidth,V.height*V.tileHeight];J.canvas.width=Z[0],J.canvas.height=Z[1],J.viewport(0,0,Z[0],Z[1]),J.uniform2fv(this._uniforms.tileSize,[V.tileWidth,V.tileHeight]),J.uniform2fv(this._uniforms.targetSize,Z)},z._updateTexture=function K(J){_0(this._gl,J)},G}(D),Z0=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],w0="\n#version 300 es\n\nin vec2 tilePosRel;\nout vec2 tilesetPosPx;\n\nuniform vec2 tilesetPosAbs;\nuniform vec2 tileSize;\nuniform vec2 targetSize;\nuniform vec2 targetPosRel;\n\nvoid main() {\n\tvec2 targetPosPx = (targetPosRel + tilePosRel) * tileSize;\n\tvec2 targetPosNdc = ((targetPosPx / targetSize)-0.5)*2.0;\n\ttargetPosNdc.y *= -1.0;\n\n\tgl_Position = vec4(targetPosNdc, 0.0, 1.0);\n\ttilesetPosPx = tilesetPosAbs + tilePosRel * tileSize;\n}".trim(),z0="\n#version 300 es\nprecision highp float;\n\nin vec2 tilesetPosPx;\nout vec4 fragColor;\nuniform sampler2D image;\nuniform bool colorize;\nuniform vec4 bg;\nuniform vec4 tint;\n\nvoid main() {\n\tfragColor = vec4(0, 0, 0, 1);\n\n\tvec4 texel = texelFetch(image, ivec2(tilesetPosPx), 0);\n\n\tif (colorize) {\n\t\ttexel.rgb = tint.a * tint.rgb + (1.0-tint.a) * texel.rgb;\n\t\tfragColor.rgb = texel.a*texel.rgb + (1.0-texel.a)*bg.rgb;\n\t\tfragColor.a = texel.a + (1.0-texel.a)*bg.a;\n\t} else {\n\t\tfragColor = texel;\n\t}\n}".trim();function O0(X,G,z){var K=X.createShader(X.VERTEX_SHADER);if(X.shaderSource(K,G),X.compileShader(K),!X.getShaderParameter(K,X.COMPILE_STATUS))throw new Error(X.getShaderInfoLog(K)||"");var J=X.createShader(X.FRAGMENT_SHADER);if(X.shaderSource(J,z),X.compileShader(J),!X.getShaderParameter(J,X.COMPILE_STATUS))throw new Error(X.getShaderInfoLog(J)||"");var V=X.createProgram();if(X.attachShader(V,K),X.attachShader(V,J),X.linkProgram(V),!X.getProgramParameter(V,X.LINK_STATUS))throw new Error(X.getProgramInfoLog(V)||"");return V}function B0(X){var G=new Float32Array([0,0,1,0,0,1,1,1]),z=X.createBuffer();X.bindBuffer(X.ARRAY_BUFFER,z),X.bufferData(X.ARRAY_BUFFER,G,X.STATIC_DRAW),X.enableVertexAttribArray(0),X.vertexAttribPointer(0,2,X.FLOAT,!1,0,0)}function _0(X,G){var z=X.createTexture();return X.bindTexture(X.TEXTURE_2D,z),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_MAG_FILTER,X.NEAREST),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_MIN_FILTER,X.NEAREST),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_WRAP_S,X.REPEAT),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_WRAP_T,X.REPEAT),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,0),X.texImage2D(X.TEXTURE_2D,0,X.RGBA,X.RGBA,X.UNSIGNED_BYTE,G),z}var v0={};function x0(X){if(!(X in v0)){var G;if(X=="transparent")G=[0,0,0,0];else if(X.indexOf("rgba")>-1){G=(X.match(/[\d.]+/g)||[]).map(Number);for(var z=0;z<3;z++)G[z]=G[z]/255}else G=d(X).map(function(K){return K/255}),G.push(1);v0[X]=G}return v0[X]}function kV(X){return"\x1B[0;48;5;"+YJ(X)+"m\x1B[2J"}function uV(X,G){return"\x1B[0;38;5;"+YJ(X)+";48;5;"+YJ(G)+"m"}function TV(X,G){return"\x1B["+(G+1)+";"+(X+1)+"H"}function YJ(X){var G=256,z=6,K=z/G,J=d(X),V=Math.floor(J[0]*K),Z=Math.floor(J[1]*K),U=Math.floor(J[2]*K);return V*36+Z*6+U*1+16}var gJ=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._offset=[0,0],K._cursor=[-1,-1],K._lastColor="",K}var z=G.prototype;return z.schedule=function K(J){setTimeout(J,16.666666666666668)},z.setOptions=function K(J){X.prototype.setOptions.call(this,J);var V=[J.width,J.height],Z=this.computeSize();this._offset=Z.map(function(U,q){return Math.floor((U-V[q])/2)})},z.clear=function K(){process.stdout.write(kV(this._options.bg))},z.draw=function K(J,V){var Z=J[0],U=J[1],q=J[2],L=J[3],B=J[4],P=this._offset[0]+Z,F=this._offset[1]+U,R=this.computeSize();if(P<0||P>=R[0])return;if(F<0||F>=R[1])return;if(P!==this._cursor[0]||F!==this._cursor[1])process.stdout.write(TV(P,F)),this._cursor[0]=P,this._cursor[1]=F;if(V){if(!q)q=" "}if(!q)return;var W=uV(L,B);if(W!==this._lastColor)process.stdout.write(W),this._lastColor=W;if(q!="\t"){var M=[].concat(q);process.stdout.write(M[0])}if(this._cursor[0]++,this._cursor[0]>=R[0])this._cursor[0]=0,this._cursor[1]++},z.computeFontSize=function K(){throw new Error("Terminal backend has no notion of font size")},z.eventToPosition=function K(J,V){return[J,V]},z.computeSize=function K(){return[process.stdout.columns,process.stdout.rows]},G}(D),gV=/%([bc]){([^}]*)}/g,A0=0,S0=1,PJ=2,HJ=3;function hV(X,G){var z={width:0,height:1},K=FJ(X,G),J=0;for(var V=0;V<K.length;V++){var Z=K[V];switch(Z.type){case A0:J+=Z.value.length;break;case S0:z.height++,z.width=Math.max(z.width,J),J=0;break}}return z.width=Math.max(z.width,J),z}function FJ(X,G){var z=[],K=0;X.replace(gV,function(V,Z,U,q){var L=X.substring(K,q);if(L.length)z.push({type:A0,value:L});return z.push({type:Z=="c"?PJ:HJ,value:U.trim()}),K=q+V.length,""});var J=X.substring(K);if(J.length)z.push({type:A0,value:J});return xV(z,G)}function xV(X,G){if(!G)G=Infinity;var z=0,K=0,J=-1;while(z<X.length){var V=X[z];if(V.type==S0)K=0,J=-1;if(V.type!=A0){z++;continue}while(K==0&&V.value.charAt(0)==" ")V.value=V.value.substring(1);var Z=V.value.indexOf("\n");if(Z!=-1){V.value=o0(X,z,Z,!0);var U=V.value.split("");while(U.length&&U[U.length-1]==" ")U.pop();V.value=U.join("")}if(!V.value.length){X.splice(z,1);continue}if(K+V.value.length>G){var q=-1;while(!0){var L=V.value.indexOf(" ",q+1);if(L==-1)break;if(K+L>G)break;q=L}if(q!=-1)V.value=o0(X,z,q,!0);else if(J!=-1){var B=X[J],P=B.value.lastIndexOf(" ");B.value=o0(X,J,P,!0),z=J}else V.value=o0(X,z,G-K,!1)}else if(K+=V.value.length,V.value.indexOf(" ")!=-1)J=z;z++}X.push({type:S0});var F=null;for(var R=0;R<X.length;R++){var W=X[R];switch(W.type){case A0:F=W;break;case S0:if(F){var M=F.value.split("");while(M.length&&M[M.length-1]==" ")M.pop();F.value=M.join("")}F=null;break}}return X.pop(),X}function o0(X,G,z,K){var J={type:S0},V={type:A0,value:X[G].value.substring(z+(K?1:0))};return X.splice(G+1,0,J,V),X[G].value.substring(0,z)}var mV=Object.freeze({TYPE_TEXT:A0,TYPE_NEWLINE:S0,TYPE_FG:PJ,TYPE_BG:HJ,measure:hV,tokenize:FJ}),wJ=80,DJ=25,X0={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},_V={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},yV={hex:r,rect:m,tile:e,"tile-gl":a,term:gJ},pV={width:wJ,height:DJ,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},cV=function(){var X=function(){function G(K){if(K===void 0)K={};this._data={},this._dirty=!1,this._options={},K=Object.assign({},pV,K),this.setOptions(K),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var z=G.prototype;return z.DEBUG=function K(J,V,Z){var U=[this._options.bg,this._options.fg];this.draw(J,V,null,null,U[Z%U.length])},z.clear=function K(){this._data={},this._dirty=!0},z.setOptions=function K(J){if(Object.assign(this._options,J),J.width||J.height||J.fontSize||J.fontFamily||J.spacing||J.layout){if(J.layout){var V=yV[J.layout];this._backend=new V}this._backend.setOptions(this._options),this._dirty=!0}return this},z.getOptions=function K(){return this._options},z.getContainer=function K(){return this._backend.getContainer()},z.computeSize=function K(J,V){return this._backend.computeSize(J,V)},z.computeFontSize=function K(J,V){return this._backend.computeFontSize(J,V)},z.computeTileSize=function K(J,V){var Z=Math.floor(J/this._options.width),U=Math.floor(V/this._options.height);return[Z,U]},z.eventToPosition=function K(J){var V,Z;if("touches"in J)V=J.touches[0].clientX,Z=J.touches[0].clientY;else V=J.clientX,Z=J.clientY;return this._backend.eventToPosition(V,Z)},z.draw=function K(J,V,Z,U,q){if(!U)U=this._options.fg;if(!q)q=this._options.bg;var L=J+","+V;if(this._data[L]=[J,V,Z,U,q],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[L]=!0},z.drawOver=function K(J,V,Z,U,q){var L=J+","+V,B=this._data[L];if(B)B[2]=Z||B[2],B[3]=U||B[3],B[4]=q||B[4];else this.draw(J,V,Z,U,q)},z.drawText=function K(J,V,Z,U){var q=null,L=null,B=J,P=V,F=1;if(!U)U=this._options.width-J;var R=FJ(Z,U);while(R.length){var W=R.shift();switch(W.type){case A0:var M=!1,O=!1,f=!1,u=!1;for(var h=0;h<W.value.length;h++){var _=W.value.charCodeAt(h),i=W.value.charAt(h);if(this._options.layout==="term"){var n=_>>8,K0=n===17||n>=46&&n<=159||n>=172&&n<=215||_>=43360&&_<=43391;if(K0){this.draw(B+0,P,i,q,L),this.draw(B+1,P,"\t",q,L),B+=2;continue}}if(f=_>65280&&_<65377||_>65500&&_<65512||_>65518,M=i.charCodeAt(0)==32||i.charCodeAt(0)==12288,u&&!f&&!M)B++;if(f&&!O)B++;this.draw(B++,P,i,q,L),O=M,u=f}break;case PJ:q=W.value||null;break;case HJ:L=W.value||null;break;case S0:B=J,P++,F++;break}}return F},z._tick=function K(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var J in this._data)this._draw(J,!1)}else for(var V in this._dirty)this._draw(V,!0);this._dirty=!1},z._draw=function K(J,V){var Z=this._data[J];if(Z[4]!=this._options.bg)V=!0;this._backend.draw(Z,V)},G}();return X.Rect=m,X.Hex=r,X.Tile=e,X.TileGL=a,X.Term=gJ,X}(),dV=function(){function X(z){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,z),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var K=0;K<this._options.order;K++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var G=X.prototype;return G.clear=function z(){this._data={},this._priorValues={}},G.generate=function z(){var K=[this._sample(this._prefix)];while(K[K.length-1]!=this._boundary)K.push(this._sample(K));return this._join(K.slice(0,-1))},G.observe=function z(K){var J=this._split(K);for(var V=0;V<J.length;V++)this._priorValues[J[V]]=this._options.prior;J=this._prefix.concat(J).concat(this._suffix);for(var Z=this._options.order;Z<J.length;Z++){var U=J.slice(Z-this._options.order,Z),q=J[Z];for(var L=0;L<U.length;L++){var B=U.slice(L);this._observeEvent(B,q)}}},G.getStats=function z(){var K=[],J=Object.keys(this._priorValues).length;J--,K.push("distinct samples: "+J);var V=Object.keys(this._data).length,Z=0;for(var U in this._data)Z+=Object.keys(this._data[U]).length;return K.push("dictionary size (contexts): "+V),K.push("dictionary size (events): "+Z),K.join(", ")},G._split=function z(K){return K.split(this._options.words?/\s+/:"")},G._join=function z(K){return K.join(this._options.words?" ":"")},G._observeEvent=function z(K,J){var V=this._join(K);if(!(V in this._data))this._data[V]={};var Z=this._data[V];if(!(J in Z))Z[J]=0;Z[J]++},G._sample=function z(K){K=this._backoff(K);var J=this._join(K),V=this._data[J],Z={};if(this._options.prior){for(var U in this._priorValues)Z[U]=this._priorValues[U];for(var q in V)Z[q]+=V[q]}else Z=V;return H.getWeightedValue(Z)},G._backoff=function z(K){if(K.length>this._options.order)K=K.slice(-this._options.order);else if(K.length<this._options.order)K=this._prefix.slice(0,this._options.order-K.length).concat(K);while(!(this._join(K)in this._data)&&K.length>0)K=K.slice(1);return K},X}(),hJ=function(){function X(){this.heap=[],this.timestamp=0}var G=X.prototype;return G.lessThan=function z(K,J){return K.key==J.key?K.timestamp<J.timestamp:K.key<J.key},G.shift=function z(K){this.heap=this.heap.map(function(J){var{key:V,value:Z,timestamp:U}=J;return{key:V+K,value:Z,timestamp:U}})},G.len=function z(){return this.heap.length},G.push=function z(K,J){this.timestamp+=1;var V=this.len();this.heap.push({value:K,timestamp:this.timestamp,key:J}),this.updateUp(V)},G.pop=function z(){if(this.len()==0)throw new Error("no element to pop");var K=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return K},G.find=function z(K){for(var J=0;J<this.len();J++)if(K==this.heap[J].value)return this.heap[J];return null},G.remove=function z(K){var J=null;for(var V=0;V<this.len();V++)if(K==this.heap[V].value)J=V;if(J===null)return!1;if(this.len()>1){var Z=this.heap.pop();if(Z.value!=K)this.heap[J]=Z,this.updateDown(J);return!0}else this.heap.pop();return!0},G.parentNode=function z(K){return Math.floor((K-1)/2)},G.leftChildNode=function z(K){return 2*K+1},G.rightChildNode=function z(K){return 2*K+2},G.existNode=function z(K){return K>=0&&K<this.heap.length},G.swap=function z(K,J){var V=this.heap[K];this.heap[K]=this.heap[J],this.heap[J]=V},G.minNode=function z(K){var J=K.filter(this.existNode.bind(this)),V=J[0];for(var q=J,Z=Array.isArray(q),U=0,q=Z?q:q[Symbol.iterator]();;){var L;if(Z){if(U>=q.length)break;L=q[U++]}else{if(U=q.next(),U.done)break;L=U.value}var B=L;if(this.lessThan(this.heap[B],this.heap[V]))V=B}return V},G.updateUp=function z(K){if(K==0)return;var J=this.parentNode(K);if(this.existNode(J)&&this.lessThan(this.heap[K],this.heap[J]))this.swap(K,J),this.updateUp(J)},G.updateDown=function z(K){var J=this.leftChildNode(K),V=this.rightChildNode(K);if(!this.existNode(J))return;var Z=this.minNode([K,J,V]);if(Z!=K)this.swap(K,Z),this.updateDown(Z)},G.debugPrint=function z(){console.log(this.heap)},X}(),xJ=function(){function X(){this._time=0,this._events=new hJ}var G=X.prototype;return G.getTime=function z(){return this._time},G.clear=function z(){return this._events=new hJ,this},G.add=function z(K,J){this._events.push(K,J)},G.get=function z(){if(!this._events.len())return null;var K=this._events.pop(),J=K.key,V=K.value;if(J>0)this._time+=J,this._events.shift(-J);return V},G.getEventTime=function z(K){var J=this._events.find(K);if(J){var V=J.key;return V}return},G.remove=function z(K){return this._events.remove(K)},X}(),WJ=function(){function X(){this._queue=new xJ,this._repeat=[],this._current=null}var G=X.prototype;return G.getTime=function z(){return this._queue.getTime()},G.add=function z(K,J){if(J)this._repeat.push(K);return this},G.getTimeOf=function z(K){return this._queue.getEventTime(K)},G.clear=function z(){return this._queue.clear(),this._repeat=[],this._current=null,this},G.remove=function z(K){var J=this._queue.remove(K),V=this._repeat.indexOf(K);if(V!=-1)this._repeat.splice(V,1);if(this._current==K)this._current=null;return J},G.next=function z(){return this._current=this._queue.get(),this._current},X}(),lV=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var z=G.prototype;return z.add=function K(J,V){return this._queue.add(J,0),X.prototype.add.call(this,J,V)},z.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return X.prototype.next.call(this)},G}(WJ),nV=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var z=G.prototype;return z.add=function K(J,V,Z){return this._queue.add(J,Z!==void 0?Z:1/J.getSpeed()),X.prototype.add.call(this,J,V)},z.next=function K(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return X.prototype.next.call(this)},G}(WJ),rV=function(X){Q0(G,X);function G(){var K=X.call(this)||this;return K._defaultDuration=1,K._duration=K._defaultDuration,K}var z=G.prototype;return z.add=function K(J,V,Z){return this._queue.add(J,Z||this._defaultDuration),X.prototype.add.call(this,J,V)},z.clear=function K(){return this._duration=this._defaultDuration,X.prototype.clear.call(this)},z.remove=function K(J){if(J==this._current)this._duration=this._defaultDuration;return X.prototype.remove.call(this,J)},z.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return X.prototype.next.call(this)},z.setDuration=function K(J){if(this._current)this._duration=J;return this},G}(WJ),sV={Simple:lV,Speed:nV,Action:rV},RJ=function(){function X(z,K){if(K===void 0)K={};this._lightPasses=z,this._options=Object.assign({topology:8},K)}var G=X.prototype;return G._getCircle=function z(K,J,V){var Z=[],U,q,L;switch(this._options.topology){case 4:q=1,L=[0,1],U=[X0[8][7],X0[8][1],X0[8][3],X0[8][5]];break;case 6:U=X0[6],q=1,L=[-1,1];break;case 8:U=X0[4],q=2,L=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var B=K+L[0]*V,P=J+L[1]*V;for(var F=0;F<U.length;F++)for(var R=0;R<V*q;R++)Z.push([B,P]),B+=U[F][0],P+=U[F][1];return Z},X}(),oV=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var z=G.prototype;return z.compute=function K(J,V,Z,U){if(U(J,V,0,1),!this._lightPasses(J,V))return;var q=[],L,B,P,F,R;for(var W=1;W<=Z;W++){var M=this._getCircle(J,V,W),O=360/M.length;for(var f=0;f<M.length;f++){if(P=M[f][0],F=M[f][1],L=O*(f-0.5),B=L+O,R=!this._lightPasses(P,F),this._visibleCoords(Math.floor(L),Math.ceil(B),R,q))U(P,F,W,1);if(q.length==2&&q[0]==0&&q[1]==360)return}}},z._visibleCoords=function K(J,V,Z,U){if(J<0){var q=this._visibleCoords(0,V,Z,U),L=this._visibleCoords(360+J,360,Z,U);return q||L}var B=0;while(B<U.length&&U[B]<J)B++;if(B==U.length){if(Z)U.push(J,V);return!0}var P=0;if(B%2){while(B<U.length&&U[B]<V)B++,P++;if(P==0)return!1;if(Z)if(P%2)U.splice(B-P,P,V);else U.splice(B-P,P);return!0}else{while(B<U.length&&U[B]<V)B++,P++;if(J==U[B-P]&&P==1)return!1;if(Z)if(P%2)U.splice(B-P,P,J);else U.splice(B-P,P,J,V);return!0}},G}(RJ),aV=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var z=G.prototype;return z.compute=function K(J,V,Z,U){if(U(J,V,0,1),!this._lightPasses(J,V))return;var q=[],L,B,P,F,R,W;for(var M=1;M<=Z;M++){var O=this._getCircle(J,V,M),f=O.length;for(var u=0;u<f;u++){if(L=O[u][0],B=O[u][1],F=[u?2*u-1:2*f-1,2*f],R=[2*u+1,2*f],P=!this._lightPasses(L,B),W=this._checkVisibility(F,R,P,q),W)U(L,B,M,W);if(q.length==2&&q[0][0]==0&&q[1][0]==q[1][1])return}}},z._checkVisibility=function K(J,V,Z,U){if(J[0]>V[0]){var q=this._checkVisibility(J,[J[1],J[1]],Z,U),L=this._checkVisibility([0,1],V,Z,U);return(q+L)/2}var B=0,P=!1;while(B<U.length){var F=U[B],R=F[0]*J[1]-J[0]*F[1];if(R>=0){if(R==0&&!(B%2))P=!0;break}B++}var W=U.length,M=!1;while(W--){var O=U[W],f=V[0]*O[1]-O[0]*V[1];if(f>=0){if(f==0&&W%2)M=!0;break}}var u=!0;if(B==W&&(P||M))u=!1;else if(P&&M&&B+1==W&&W%2)u=!1;else if(B>W&&B%2)u=!1;if(!u)return 0;var h,_=W-B+1;if(_%2)if(B%2){var i=U[B];if(h=(V[0]*i[1]-i[0]*V[1])/(i[1]*V[1]),Z)U.splice(B,_,V)}else{var n=U[W];if(h=(n[0]*J[1]-J[0]*n[1])/(J[1]*n[1]),Z)U.splice(B,_,J)}else if(B%2){var K0=U[B],L0=U[W];if(h=(L0[0]*K0[1]-K0[0]*L0[1])/(K0[1]*L0[1]),Z)U.splice(B,_)}else{if(Z)U.splice(B,_,J,V);return 1}var E0=(V[0]*J[1]-J[0]*V[1])/(J[1]*V[1]);return h/E0},G}(RJ),N0=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],iV=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var z=G.prototype;return z.compute=function K(J,V,Z,U){U(J,V,0,1);for(var q=0;q<N0.length;q++)this._renderOctant(J,V,N0[q],Z,U)},z.compute180=function K(J,V,Z,U,q){q(J,V,0,1);var L=(U-1+8)%8,B=(U-2+8)%8,P=(U+1+8)%8;this._renderOctant(J,V,N0[B],Z,q),this._renderOctant(J,V,N0[L],Z,q),this._renderOctant(J,V,N0[U],Z,q),this._renderOctant(J,V,N0[P],Z,q)},z.compute90=function K(J,V,Z,U,q){q(J,V,0,1);var L=(U-1+8)%8;this._renderOctant(J,V,N0[U],Z,q),this._renderOctant(J,V,N0[L],Z,q)},z._renderOctant=function K(J,V,Z,U,q){this._castVisibility(J,V,1,1,0,U+1,Z[0],Z[1],Z[2],Z[3],q)},z._castVisibility=function K(J,V,Z,U,q,L,B,P,F,R,W){if(U<q)return;for(var M=Z;M<=L;M++){var O=-M-1,f=-M,u=!1,h=0;while(O<=0){O+=1;var _=J+O*B+f*P,i=V+O*F+f*R,n=(O-0.5)/(f+0.5),K0=(O+0.5)/(f-0.5);if(K0>U)continue;if(n<q)break;if(O*O+f*f<L*L)W(_,i,M,1);if(!u){if(!this._lightPasses(_,i)&&M<L)u=!0,this._castVisibility(J,V,M+1,U,n,L,B,P,F,R,W),h=K0}else{if(!this._lightPasses(_,i)){h=K0;continue}u=!1,U=h}}if(u)break}},G}(RJ),eV={DiscreteShadowcasting:oV,PreciseShadowcasting:aV,RecursiveShadowcasting:iV},b0=function(){function X(z,K){if(z===void 0)z=wJ;if(K===void 0)K=DJ;this._width=z,this._height=K}var G=X.prototype;return G._fillMap=function z(K){var J=[];for(var V=0;V<this._width;V++){J.push([]);for(var Z=0;Z<this._height;Z++)J[V].push(K)}return J},X}(),tV=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var z=G.prototype;return z.create=function K(J){var V=this._width-1,Z=this._height-1;for(var U=0;U<=V;U++)for(var q=0;q<=Z;q++){var L=U&&q&&U<V&&q<Z;J(U,q,L?0:1)}return this},G}(b0),mJ=function(X){Q0(G,X);function G(K,J){var V=X.call(this,K,J)||this;return V._rooms=[],V._corridors=[],V}var z=G.prototype;return z.getRooms=function K(){return this._rooms},z.getCorridors=function K(){return this._corridors},G}(b0),_J=function X(){},a0=function(X){Q0(G,X);function G(K,J,V,Z,U,q){var L=X.call(this)||this;if(L._x1=K,L._y1=J,L._x2=V,L._y2=Z,L._doors={},U!==void 0&&q!==void 0)L.addDoor(U,q);return L}G.createRandomAt=function K(J,V,Z,U,q){var L=q.roomWidth[0],B=q.roomWidth[1],P=H.getUniformInt(L,B);L=q.roomHeight[0],B=q.roomHeight[1];var F=H.getUniformInt(L,B);if(Z==1){var R=V-Math.floor(H.getUniform()*F);return new this(J+1,R,J+P,R+F-1,J,V)}if(Z==-1){var W=V-Math.floor(H.getUniform()*F);return new this(J-P,W,J-1,W+F-1,J,V)}if(U==1){var M=J-Math.floor(H.getUniform()*P);return new this(M,V+1,M+P-1,V+F,J,V)}if(U==-1){var O=J-Math.floor(H.getUniform()*P);return new this(O,V-F,O+P-1,V-1,J,V)}throw new Error("dx or dy must be 1 or -1")},G.createRandomCenter=function K(J,V,Z){var U=Z.roomWidth[0],q=Z.roomWidth[1],L=H.getUniformInt(U,q);U=Z.roomHeight[0],q=Z.roomHeight[1];var B=H.getUniformInt(U,q),P=J-Math.floor(H.getUniform()*L),F=V-Math.floor(H.getUniform()*B),R=P+L-1,W=F+B-1;return new this(P,F,R,W)},G.createRandom=function K(J,V,Z){var U=Z.roomWidth[0],q=Z.roomWidth[1],L=H.getUniformInt(U,q);U=Z.roomHeight[0],q=Z.roomHeight[1];var B=H.getUniformInt(U,q),P=J-L-1,F=V-B-1,R=1+Math.floor(H.getUniform()*P),W=1+Math.floor(H.getUniform()*F),M=R+L-1,O=W+B-1;return new this(R,W,M,O)};var z=G.prototype;return z.addDoor=function K(J,V){return this._doors[J+","+V]=1,this},z.getDoors=function K(J){for(var V in this._doors){var Z=V.split(",");J(parseInt(Z[0]),parseInt(Z[1]))}return this},z.clearDoors=function K(){return this._doors={},this},z.addDoors=function K(J){var V=this._x1-1,Z=this._x2+1,U=this._y1-1,q=this._y2+1;for(var L=V;L<=Z;L++)for(var B=U;B<=q;B++){if(L!=V&&L!=Z&&B!=U&&B!=q)continue;if(J(L,B))continue;this.addDoor(L,B)}return this},z.debug=function K(){console.log("room",this._x1,this._y1,this._x2,this._y2)},z.isValid=function K(J,V){var Z=this._x1-1,U=this._x2+1,q=this._y1-1,L=this._y2+1;for(var B=Z;B<=U;B++)for(var P=q;P<=L;P++)if(B==Z||B==U||P==q||P==L){if(!J(B,P))return!1}else if(!V(B,P))return!1;return!0},z.create=function K(J){var V=this._x1-1,Z=this._x2+1,U=this._y1-1,q=this._y2+1,L=0;for(var B=V;B<=Z;B++)for(var P=U;P<=q;P++){if(B+","+P in this._doors)L=2;else if(B==V||B==Z||P==U||P==q)L=1;else L=0;J(B,P,L)}},z.getCenter=function K(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},z.getLeft=function K(){return this._x1},z.getRight=function K(){return this._x2},z.getTop=function K(){return this._y1},z.getBottom=function K(){return this._y2},G}(_J),MJ=function(X){Q0(G,X);function G(K,J,V,Z){var U=X.call(this)||this;return U._startX=K,U._startY=J,U._endX=V,U._endY=Z,U._endsWithAWall=!0,U}G.createRandomAt=function K(J,V,Z,U,q){var L=q.corridorLength[0],B=q.corridorLength[1],P=H.getUniformInt(L,B);return new this(J,V,J+Z*P,V+U*P)};var z=G.prototype;return z.debug=function K(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},z.isValid=function K(J,V){var Z=this._startX,U=this._startY,q=this._endX-Z,L=this._endY-U,B=1+Math.max(Math.abs(q),Math.abs(L));if(q)q=q/Math.abs(q);if(L)L=L/Math.abs(L);var P=L,F=-q,R=!0;for(var W=0;W<B;W++){var M=Z+W*q,O=U+W*L;if(!V(M,O))R=!1;if(!J(M+P,O+F))R=!1;if(!J(M-P,O-F))R=!1;if(!R){B=W,this._endX=M-q,this._endY=O-L;break}}if(B==0)return!1;if(B==1&&J(this._endX+q,this._endY+L))return!1;var f=!J(this._endX+q+P,this._endY+L+F),u=!J(this._endX+q-P,this._endY+L-F);if(this._endsWithAWall=J(this._endX+q,this._endY+L),(f||u)&&this._endsWithAWall)return!1;return!0},z.create=function K(J){var V=this._startX,Z=this._startY,U=this._endX-V,q=this._endY-Z,L=1+Math.max(Math.abs(U),Math.abs(q));if(U)U=U/Math.abs(U);if(q)q=q/Math.abs(q);for(var B=0;B<L;B++){var P=V+B*U,F=Z+B*q;J(P,F,0)}return!0},z.createPriorityWalls=function K(J){if(!this._endsWithAWall)return;var V=this._startX,Z=this._startY,U=this._endX-V,q=this._endY-Z;if(U)U=U/Math.abs(U);if(q)q=q/Math.abs(q);var L=q,B=-U;J(this._endX+U,this._endY+q),J(this._endX+L,this._endY+B),J(this._endX-L,this._endY-B)},G}(_J),JZ=function(X){Q0(G,X);function G(K,J,V){var Z=X.call(this,K,J)||this;return Z._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(Z._options,V),Z._map=[],Z._dug=0,Z._roomAttempts=20,Z._corridorAttempts=20,Z._connected=[],Z._unconnected=[],Z._digCallback=Z._digCallback.bind(P0(P0(Z))),Z._canBeDugCallback=Z._canBeDugCallback.bind(P0(P0(Z))),Z._isWallCallback=Z._isWallCallback.bind(P0(P0(Z))),Z}var z=G.prototype;return z.create=function K(J){var V=Date.now();while(!0){var Z=Date.now();if(Z-V>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(J)for(var U=0;U<this._width;U++)for(var q=0;q<this._height;q++)J(U,q,this._map[U][q]);return this},z._generateRooms=function K(){var J=this._width-2,V=this._height-2,Z;do if(Z=this._generateRoom(),this._dug/(J*V)>this._options.roomDugPercentage)break;while(Z)},z._generateRoom=function K(){var J=0;while(J<this._roomAttempts){J++;var V=a0.createRandom(this._width,this._height,this._options);if(!V.isValid(this._isWallCallback,this._canBeDugCallback))continue;return V.create(this._digCallback),this._rooms.push(V),V}return null},z._generateCorridors=function K(){var J=0;while(J<this._corridorAttempts){J++,this._corridors=[],this._map=this._fillMap(1);for(var V=0;V<this._rooms.length;V++){var Z=this._rooms[V];Z.clearDoors(),Z.create(this._digCallback)}if(this._unconnected=H.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var U=H.getItem(this._connected);if(!U)break;var q=this._closestRoom(this._unconnected,U);if(!q)break;var L=this._closestRoom(this._connected,q);if(!L)break;var B=this._connectRooms(q,L);if(!B)break;if(!this._unconnected.length)return!0}}return!1},z._closestRoom=function K(J,V){var Z=Infinity,U=V.getCenter(),q=null;for(var L=0;L<J.length;L++){var B=J[L],P=B.getCenter(),F=P[0]-U[0],R=P[1]-U[1],W=F*F+R*R;if(W<Z)Z=W,q=B}return q},z._connectRooms=function K(J,V){var Z=J.getCenter(),U=V.getCenter(),q=U[0]-Z[0],L=U[1]-Z[1],B,P,F,R,W,M,O;if(Math.abs(q)<Math.abs(L))F=L>0?2:0,R=(F+2)%4,W=V.getLeft(),M=V.getRight(),O=0;else F=q>0?1:3,R=(F+2)%4,W=V.getTop(),M=V.getBottom(),O=1;if(B=this._placeInWall(J,F),!B)return!1;if(B[O]>=W&&B[O]<=M){P=B.slice();var f=0;switch(R){case 0:f=V.getTop()-1;break;case 1:f=V.getRight()+1;break;case 2:f=V.getBottom()+1;break;case 3:f=V.getLeft()-1;break}P[(O+1)%2]=f,this._digLine([B,P])}else if(B[O]<W-1||B[O]>M+1){var u=B[O]-U[O],h=0;switch(R){case 0:case 1:h=u<0?3:1;break;case 2:case 3:h=u<0?1:3;break}if(R=(R+h)%4,P=this._placeInWall(V,R),!P)return!1;var _=[0,0];_[O]=B[O];var i=(O+1)%2;_[i]=P[i],this._digLine([B,_,P])}else{var n=(O+1)%2;if(P=this._placeInWall(V,R),!P)return!1;var K0=Math.round((P[n]+B[n])/2),L0=[0,0],E0=[0,0];L0[O]=B[O],L0[n]=K0,E0[O]=P[O],E0[n]=K0,this._digLine([B,L0,E0,P])}if(J.addDoor(B[0],B[1]),V.addDoor(P[0],P[1]),O=this._unconnected.indexOf(J),O!=-1)this._unconnected.splice(O,1),this._connected.push(J);if(O=this._unconnected.indexOf(V),O!=-1)this._unconnected.splice(O,1),this._connected.push(V);return!0},z._placeInWall=function K(J,V){var Z=[0,0],U=[0,0],q=0;switch(V){case 0:U=[1,0],Z=[J.getLeft(),J.getTop()-1],q=J.getRight()-J.getLeft()+1;break;case 1:U=[0,1],Z=[J.getRight()+1,J.getTop()],q=J.getBottom()-J.getTop()+1;break;case 2:U=[1,0],Z=[J.getLeft(),J.getBottom()+1],q=J.getRight()-J.getLeft()+1;break;case 3:U=[0,1],Z=[J.getLeft()-1,J.getTop()],q=J.getBottom()-J.getTop()+1;break}var L=[],B=-2;for(var P=0;P<q;P++){var F=Z[0]+P*U[0],R=Z[1]+P*U[1];L.push(null);var W=this._map[F][R]==1;if(W){if(B!=P-1)L[P]=[F,R]}else if(B=P,P)L[P-1]=null}for(var M=L.length-1;M>=0;M--)if(!L[M])L.splice(M,1);return L.length?H.getItem(L):null},z._digLine=function K(J){for(var V=1;V<J.length;V++){var Z=J[V-1],U=J[V],q=new MJ(Z[0],Z[1],U[0],U[1]);q.create(this._digCallback),this._corridors.push(q)}},z._digCallback=function K(J,V,Z){if(this._map[J][V]=Z,Z==0)this._dug++},z._isWallCallback=function K(J,V){if(J<0||V<0||J>=this._width||V>=this._height)return!1;return this._map[J][V]==1},z._canBeDugCallback=function K(J,V){if(J<1||V<1||J+1>=this._width||V+1>=this._height)return!1;return this._map[J][V]==1},G}(mJ),VZ=function(X){Q0(G,X);function G(K,J,V){var Z;if(V===void 0)V={};return Z=X.call(this,K,J)||this,Z._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},Z.setOptions(V),Z._dirs=X0[Z._options.topology],Z._map=Z._fillMap(0),Z}var z=G.prototype;return z.randomize=function K(J){for(var V=0;V<this._width;V++)for(var Z=0;Z<this._height;Z++)this._map[V][Z]=H.getUniform()<J?1:0;return this},z.setOptions=function K(J){Object.assign(this._options,J)},z.set=function K(J,V,Z){this._map[J][V]=Z},z.create=function K(J){var V=this._fillMap(0),Z=this._options.born,U=this._options.survive;for(var q=0;q<this._height;q++){var L=1,B=0;if(this._options.topology==6)L=2,B=q%2;for(var P=B;P<this._width;P+=L){var F=this._map[P][q],R=this._getNeighbors(P,q);if(F&&U.indexOf(R)!=-1)V[P][q]=1;else if(!F&&Z.indexOf(R)!=-1)V[P][q]=1}}this._map=V,J&&this._serviceCallback(J)},z._serviceCallback=function K(J){for(var V=0;V<this._height;V++){var Z=1,U=0;if(this._options.topology==6)Z=2,U=V%2;for(var q=U;q<this._width;q+=Z)J(q,V,this._map[q][V])}},z._getNeighbors=function K(J,V){var Z=0;for(var U=0;U<this._dirs.length;U++){var q=this._dirs[U],L=J+q[0],B=V+q[1];if(L<0||L>=this._width||B<0||B>=this._height)continue;Z+=this._map[L][B]==1?1:0}return Z},z.connect=function K(J,V,Z){if(!V)V=0;var U=[],q={},L=1,B=[0,0];if(this._options.topology==6)L=2,B=[0,1];for(var P=0;P<this._height;P++)for(var F=B[P%2];F<this._width;F+=L)if(this._freeSpace(F,P,V)){var R=[F,P];q[this._pointKey(R)]=R,U.push([F,P])}var W=U[H.getUniformInt(0,U.length-1)],M=this._pointKey(W),O={};O[M]=W,delete q[M],this._findConnected(O,q,[W],!1,V);while(Object.keys(q).length>0){var f=this._getFromTo(O,q),u=f[0],h=f[1],_={};_[this._pointKey(u)]=u,this._findConnected(_,q,[u],!0,V);var i=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;i.call(this,h,u,O,q,V,Z);for(var n in _){var K0=_[n];this._map[K0[0]][K0[1]]=V,O[n]=K0,delete q[n]}}J&&this._serviceCallback(J)},z._getFromTo=function K(J,V){var Z=[0,0],U=[0,0],q,L=Object.keys(J),B=Object.keys(V);for(var P=0;P<5;P++){if(L.length<B.length){var F=L;U=J[F[H.getUniformInt(0,F.length-1)]],Z=this._getClosest(U,V)}else{var R=B;Z=V[R[H.getUniformInt(0,R.length-1)]],U=this._getClosest(Z,J)}if(q=(Z[0]-U[0])*(Z[0]-U[0])+(Z[1]-U[1])*(Z[1]-U[1]),q<64)break}return[Z,U]},z._getClosest=function K(J,V){var Z=null,U=null;for(var q in V){var L=V[q],B=(L[0]-J[0])*(L[0]-J[0])+(L[1]-J[1])*(L[1]-J[1]);if(U==null||B<U)U=B,Z=L}return Z},z._findConnected=function K(J,V,Z,U,q){while(Z.length>0){var L=Z.splice(0,1)[0],B=void 0;if(this._options.topology==6)B=[[L[0]+2,L[1]],[L[0]+1,L[1]-1],[L[0]-1,L[1]-1],[L[0]-2,L[1]],[L[0]-1,L[1]+1],[L[0]+1,L[1]+1]];else B=[[L[0]+1,L[1]],[L[0]-1,L[1]],[L[0],L[1]+1],[L[0],L[1]-1]];for(var P=0;P<B.length;P++){var F=this._pointKey(B[P]);if(J[F]==null&&this._freeSpace(B[P][0],B[P][1],q)){if(J[F]=B[P],!U)delete V[F];Z.push(B[P])}}}},z._tunnelToConnected=function K(J,V,Z,U,q,L){var B,P;if(V[0]<J[0])B=V,P=J;else B=J,P=V;for(var F=B[0];F<=P[0];F++){this._map[F][B[1]]=q;var R=[F,B[1]],W=this._pointKey(R);Z[W]=R,delete U[W]}if(L&&B[0]<P[0])L(B,[P[0],B[1]]);var M=P[0];if(V[1]<J[1])B=V,P=J;else B=J,P=V;for(var O=B[1];O<P[1];O++){this._map[M][O]=q;var f=[M,O],u=this._pointKey(f);Z[u]=f,delete U[u]}if(L&&B[1]<P[1])L([P[0],B[1]],[P[0],P[1]])},z._tunnelToConnected6=function K(J,V,Z,U,q,L){var B,P;if(V[0]<J[0])B=V,P=J;else B=J,P=V;var F=B[0],R=B[1];while(!(F==P[0]&&R==P[1])){var W=2;if(R<P[1])R++,W=1;else if(R>P[1])R--,W=1;if(F<P[0])F+=W;else if(F>P[0])F-=W;else if(P[1]%2)F-=W;else F+=W;this._map[F][R]=q;var M=[F,R],O=this._pointKey(M);Z[O]=M,delete U[O]}if(L)L(V,J)},z._freeSpace=function K(J,V,Z){return J>=0&&J<this._width&&V>=0&&V<this._height&&this._map[J][V]==Z},z._pointKey=function K(J){return J[0]+"."+J[1]},G}(b0),ZZ={room:a0,corridor:MJ},QZ=function(X){Q0(G,X);function G(K,J,V){var Z;if(V===void 0)V={};return Z=X.call(this,K,J)||this,Z._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},V),Z._features={room:4,corridor:4},Z._map=[],Z._featureAttempts=20,Z._walls={},Z._dug=0,Z._digCallback=Z._digCallback.bind(P0(P0(Z))),Z._canBeDugCallback=Z._canBeDugCallback.bind(P0(P0(Z))),Z._isWallCallback=Z._isWallCallback.bind(P0(P0(Z))),Z._priorityWallCallback=Z._priorityWallCallback.bind(P0(P0(Z))),Z}var z=G.prototype;return z.create=function K(J){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var V=(this._width-2)*(this._height-2);this._firstRoom();var Z=Date.now(),U;do{U=0;var q=Date.now();if(q-Z>this._options.timeLimit)break;var L=this._findWall();if(!L)break;var B=L.split(","),P=parseInt(B[0]),F=parseInt(B[1]),R=this._getDiggingDirection(P,F);if(!R)continue;var W=0;do if(W++,this._tryFeature(P,F,R[0],R[1])){this._removeSurroundingWalls(P,F),this._removeSurroundingWalls(P-R[0],F-R[1]);break}while(W<this._featureAttempts);for(var M in this._walls)if(this._walls[M]>1)U++}while(this._dug/V<this._options.dugPercentage||U);if(this._addDoors(),J)for(var O=0;O<this._width;O++)for(var f=0;f<this._height;f++)J(O,f,this._map[O][f]);return this._walls={},this._map=[],this},z._digCallback=function K(J,V,Z){if(Z==0||Z==2)this._map[J][V]=0,this._dug++;else this._walls[J+","+V]=1},z._isWallCallback=function K(J,V){if(J<0||V<0||J>=this._width||V>=this._height)return!1;return this._map[J][V]==1},z._canBeDugCallback=function K(J,V){if(J<1||V<1||J+1>=this._width||V+1>=this._height)return!1;return this._map[J][V]==1},z._priorityWallCallback=function K(J,V){this._walls[J+","+V]=2},z._firstRoom=function K(){var J=Math.floor(this._width/2),V=Math.floor(this._height/2),Z=a0.createRandomCenter(J,V,this._options);this._rooms.push(Z),Z.create(this._digCallback)},z._findWall=function K(){var J=[],V=[];for(var Z in this._walls){var U=this._walls[Z];if(U==2)V.push(Z);else J.push(Z)}var q=V.length?V:J;if(!q.length)return null;var L=H.getItem(q.sort());return delete this._walls[L],L},z._tryFeature=function K(J,V,Z,U){var q=H.getWeightedValue(this._features),L=ZZ[q],B=L.createRandomAt(J,V,Z,U,this._options);if(!B.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(B.create(this._digCallback),B instanceof a0)this._rooms.push(B);if(B instanceof MJ)B.createPriorityWalls(this._priorityWallCallback),this._corridors.push(B);return!0},z._removeSurroundingWalls=function K(J,V){var Z=X0[4];for(var U=0;U<Z.length;U++){var q=Z[U],L=J+q[0],B=V+q[1];delete this._walls[L+","+B],L=J+2*q[0],B=V+2*q[1],delete this._walls[L+","+B]}},z._getDiggingDirection=function K(J,V){if(J<=0||V<=0||J>=this._width-1||V>=this._height-1)return null;var Z=null,U=X0[4];for(var q=0;q<U.length;q++){var L=U[q],B=J+L[0],P=V+L[1];if(!this._map[B][P]){if(Z)return null;Z=L}}if(!Z)return null;return[-Z[0],-Z[1]]},z._addDoors=function K(){var J=this._map;function V(q,L){return J[q][L]==1}for(var Z=0;Z<this._rooms.length;Z++){var U=this._rooms[Z];U.clearDoors(),U.addDoors(V)}},G}(mJ);function yJ(X,G,z){z[G[X+1]]=z[X],G[z[X]]=G[X+1],z[X]=X+1,G[X+1]=X}function pJ(X,G,z){z[G[X]]=z[X],G[z[X]]=G[X],z[X]=X,G[X]=X}var KZ=function(X){Q0(G,X);function G(){return X.apply(this,arguments)||this}var z=G.prototype;return z.create=function K(J){var V=this._fillMap(1),Z=Math.ceil((this._width-2)/2),U=0.375,q=[],L=[];for(var B=0;B<Z;B++)q.push(B),L.push(B);q.push(Z-1);var P;for(P=1;P+3<this._height;P+=2)for(var F=0;F<Z;F++){var R=2*F+1,W=P;if(V[R][W]=0,F!=q[F+1]&&H.getUniform()>U)yJ(F,q,L),V[R+1][W]=0;if(F!=q[F]&&H.getUniform()>U)pJ(F,q,L);else V[R][W+1]=0}for(var M=0;M<Z;M++){var O=2*M+1,f=P;if(V[O][f]=0,M!=q[M+1]&&(M==q[M]||H.getUniform()>U))yJ(M,q,L),V[O+1][f]=0;pJ(M,q,L)}for(var u=0;u<this._width;u++)for(var h=0;h<this._height;h++)J(u,h,V[u][h]);return this},G}(b0),UZ=function(X){Q0(G,X);function G(){var K=X.apply(this,arguments)||this;return K._stack=[],K._map=[],K}var z=G.prototype;return z.create=function K(J){var V=this._width,Z=this._height;this._map=[];for(var U=0;U<V;U++){this._map.push([]);for(var q=0;q<Z;q++){var L=U==0||q==0||U+1==V||q+1==Z;this._map[U].push(L?1:0)}}this._stack=[[1,1,V-2,Z-2]],this._process();for(var B=0;B<V;B++)for(var P=0;P<Z;P++)J(B,P,this._map[B][P]);return this._map=[],this},z._process=function K(){while(this._stack.length){var J=this._stack.shift();this._partitionRoom(J)}},z._partitionRoom=function K(J){var V=[],Z=[];for(var U=J[0]+1;U<J[2];U++){var q=this._map[U][J[1]-1],L=this._map[U][J[3]+1];if(q&&L&&!(U%2))V.push(U)}for(var B=J[1]+1;B<J[3];B++){var P=this._map[J[0]-1][B],F=this._map[J[2]+1][B];if(P&&F&&!(B%2))Z.push(B)}if(!V.length||!Z.length)return;var R=H.getItem(V),W=H.getItem(Z);this._map[R][W]=1;var M=[],O=[];M.push(O);for(var f=J[0];f<R;f++)if(this._map[f][W]=1,f%2)O.push([f,W]);O=[],M.push(O);for(var u=R+1;u<=J[2];u++)if(this._map[u][W]=1,u%2)O.push([u,W]);O=[],M.push(O);for(var h=J[1];h<W;h++)if(this._map[R][h]=1,h%2)O.push([R,h]);O=[],M.push(O);for(var _=W+1;_<=J[3];_++)if(this._map[R][_]=1,_%2)O.push([R,_]);var i=H.getItem(M);for(var n=0;n<M.length;n++){var K0=M[n];if(K0==i)continue;var L0=H.getItem(K0);this._map[L0[0]][L0[1]]=0}this._stack.push([J[0],J[1],R-1,W-1]),this._stack.push([R+1,J[1],J[2],W-1]),this._stack.push([J[0],W+1,R-1,J[3]]),this._stack.push([R+1,W+1,J[2],J[3]])},G}(b0),qZ=function(X){Q0(G,X);function G(K,J,V){var Z;if(V===void 0)V=0;return Z=X.call(this,K,J)||this,Z._regularity=V,Z._map=[],Z}var z=G.prototype;return z.create=function K(J){var V=this._width,Z=this._height,U=this._fillMap(1);V-=V%2?1:2,Z-=Z%2?1:2;var q=0,L=0,B=0,P=0,F=0,R=!1,W=[[0,0],[0,0],[0,0],[0,0]];do{if(q=1+2*Math.floor(H.getUniform()*(V-1)/2),L=1+2*Math.floor(H.getUniform()*(Z-1)/2),!F)U[q][L]=0;if(!U[q][L]){this._randomize(W);do{if(Math.floor(H.getUniform()*(this._regularity+1))==0)this._randomize(W);R=!0;for(var M=0;M<4;M++)if(B=q+W[M][0]*2,P=L+W[M][1]*2,this._isFree(U,B,P,V,Z)){U[B][P]=0,U[q+W[M][0]][L+W[M][1]]=0,q=B,L=P,R=!1,F++;break}}while(!R)}}while(F+1<V*Z/4);for(var O=0;O<this._width;O++)for(var f=0;f<this._height;f++)J(O,f,U[O][f]);return this._map=[],this},z._randomize=function K(J){for(var V=0;V<4;V++)J[V][0]=0,J[V][1]=0;switch(Math.floor(H.getUniform()*4)){case 0:J[0][0]=-1,J[1][0]=1,J[2][1]=-1,J[3][1]=1;break;case 1:J[3][0]=-1,J[2][0]=1,J[1][1]=-1,J[0][1]=1;break;case 2:J[2][0]=-1,J[3][0]=1,J[0][1]=-1,J[1][1]=1;break;case 3:J[1][0]=-1,J[0][0]=1,J[3][1]=-1,J[2][1]=1;break}},z._isFree=function K(J,V,Z,U,q){if(V<1||Z<1||V>=U||Z>=q)return!1;return J[V][Z]},G}(b0),zZ=function(X){Q0(G,X);function G(K,J,V){var Z=X.call(this,K,J)||this;if(Z.map=[],Z.rooms=[],Z.connectedCells=[],V=Object.assign({cellWidth:3,cellHeight:3},V),!V.hasOwnProperty("roomWidth"))V.roomWidth=Z._calculateRoomSize(Z._width,V.cellWidth);if(!V.hasOwnProperty("roomHeight"))V.roomHeight=Z._calculateRoomSize(Z._height,V.cellHeight);return Z._options=V,Z}var z=G.prototype;return z.create=function K(J){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),J)for(var V=0;V<this._width;V++)for(var Z=0;Z<this._height;Z++)J(V,Z,this.map[V][Z]);return this},z._calculateRoomSize=function K(J,V){var Z=Math.floor(J/V*0.8),U=Math.floor(J/V*0.25);if(U<2)U=2;if(Z<2)Z=2;return[U,Z]},z._initRooms=function K(){for(var J=0;J<this._options.cellWidth;J++){this.rooms.push([]);for(var V=0;V<this._options.cellHeight;V++)this.rooms[J].push({x:0,y:0,width:0,height:0,connections:[],cellx:J,celly:V})}},z._connectRooms=function K(){var J=H.getUniformInt(0,this._options.cellWidth-1),V=H.getUniformInt(0,this._options.cellHeight-1),Z,U,q,L=!1,B,P,F;do{F=[0,2,4,6],F=H.shuffle(F);do{if(L=!1,Z=F.pop(),U=J+X0[8][Z][0],q=V+X0[8][Z][1],U<0||U>=this._options.cellWidth)continue;if(q<0||q>=this._options.cellHeight)continue;if(B=this.rooms[J][V],B.connections.length>0){if(B.connections[0][0]==U&&B.connections[0][1]==q)break}if(P=this.rooms[U][q],P.connections.length==0)P.connections.push([J,V]),this.connectedCells.push([U,q]),J=U,V=q,L=!0}while(F.length>0&&L==!1)}while(F.length>0)},z._connectUnconnectedRooms=function K(){var J=this._options.cellWidth,V=this._options.cellHeight;this.connectedCells=H.shuffle(this.connectedCells);var Z,U,q;for(var L=0;L<this._options.cellWidth;L++)for(var B=0;B<this._options.cellHeight;B++)if(Z=this.rooms[L][B],Z.connections.length==0){var P=[0,2,4,6];P=H.shuffle(P),q=!1;do{var F=P.pop(),R=L+X0[8][F][0],W=B+X0[8][F][1];if(R<0||R>=J||W<0||W>=V)continue;if(U=this.rooms[R][W],q=!0,U.connections.length==0)break;for(var M=0;M<U.connections.length;M++)if(U.connections[M][0]==L&&U.connections[M][1]==B){q=!1;break}if(q)break}while(P.length);if(q)Z.connections.push([U.cellx,U.celly]);else console.log("-- Unable to connect room.")}},z._createRandomRoomConnections=function K(){},z._createRooms=function K(){var J=this._width,V=this._height,Z=this._options.cellWidth,U=this._options.cellHeight,q=Math.floor(this._width/Z),L=Math.floor(this._height/U),B,P,F=this._options.roomWidth,R=this._options.roomHeight,W,M,O;for(var f=0;f<Z;f++)for(var u=0;u<U;u++){if(W=q*f,M=L*u,W==0)W=1;if(M==0)M=1;if(B=H.getUniformInt(F[0],F[1]),P=H.getUniformInt(R[0],R[1]),u>0){O=this.rooms[f][u-1];while(M-(O.y+O.height)<3)M++}if(f>0){O=this.rooms[f-1][u];while(W-(O.x+O.width)<3)W++}var h=Math.round(H.getUniformInt(0,q-B)/2),_=Math.round(H.getUniformInt(0,L-P)/2);while(W+h+B>=J)if(h)h--;else B--;while(M+_+P>=V)if(_)_--;else P--;W=W+h,M=M+_,this.rooms[f][u].x=W,this.rooms[f][u].y=M,this.rooms[f][u].width=B,this.rooms[f][u].height=P;for(var i=W;i<W+B;i++)for(var n=M;n<M+P;n++)this.map[i][n]=0}},z._getWallPosition=function K(J,V){var Z,U,q;if(V==1||V==3){if(Z=H.getUniformInt(J.x+1,J.x+J.width-2),V==1)U=J.y-2,q=U+1;else U=J.y+J.height+1,q=U-1;this.map[Z][q]=0}else{if(U=H.getUniformInt(J.y+1,J.y+J.height-2),V==2)Z=J.x+J.width+1,q=Z-1;else Z=J.x-2,q=Z+1;this.map[q][U]=0}return[Z,U]},z._drawCorridor=function K(J,V){var Z=V[0]-J[0],U=V[1]-J[1],q=J[0],L=J[1],B,P,F,R,W=[],M=Math.abs(Z),O=Math.abs(U),f=H.getUniform(),u=f,h=1-f;if(P=Z>0?2:6,F=U>0?4:0,M<O)B=Math.ceil(O*u),W.push([F,B]),W.push([P,M]),B=Math.floor(O*h),W.push([F,B]);else B=Math.ceil(M*u),W.push([P,B]),W.push([F,O]),B=Math.floor(M*h),W.push([P,B]);this.map[q][L]=0;while(W.length>0){R=W.pop();while(R[1]>0)q+=X0[8][R[0]][0],L+=X0[8][R[0]][1],this.map[q][L]=0,R[1]=R[1]-1}},z._createCorridors=function K(){var J=this._options.cellWidth,V=this._options.cellHeight,Z,U,q,L,B;for(var P=0;P<J;P++)for(var F=0;F<V;F++){Z=this.rooms[P][F];for(var R=0;R<Z.connections.length;R++){if(U=Z.connections[R],q=this.rooms[U[0]][U[1]],q.cellx>Z.cellx)L=2,B=4;else if(q.cellx<Z.cellx)L=4,B=2;else if(q.celly>Z.celly)L=3,B=1;else L=1,B=3;this._drawCorridor(this._getWallPosition(Z,L),this._getWallPosition(q,B))}}},G}(b0),$Z={Arena:tV,Uniform:JZ,Cellular:VZ,Digger:QZ,EllerMaze:KZ,DividedMaze:UZ,IceyMaze:qZ,Rogue:zZ},XZ=function X(){},GZ=0.5*(Math.sqrt(3)-1),y0=(3-Math.sqrt(3))/6,BZ=function(X){Q0(G,X);function G(K){var J;if(K===void 0)K=256;J=X.call(this)||this,J._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var V=[];for(var Z=0;Z<K;Z++)V.push(Z);V=H.shuffle(V),J._perms=[],J._indexes=[];for(var U=0;U<2*K;U++)J._perms.push(V[U%K]),J._indexes.push(J._perms[U]%J._gradients.length);return J}var z=G.prototype;return z.get=function K(J,V){var Z=this._perms,U=this._indexes,q=Z.length/2,L=0,B=0,P=0,F,R=(J+V)*GZ,W=Math.floor(J+R),M=Math.floor(V+R),O=(W+M)*y0,f=W-O,u=M-O,h=J-f,_=V-u,i,n;if(h>_)i=1,n=0;else i=0,n=1;var K0=h-i+y0,L0=_-n+y0,E0=h-1+2*y0,OJ=_-1+2*y0,EJ=v(W,q),jJ=v(M,q),p0=0.5-h*h-_*_;if(p0>=0){p0*=p0,F=U[EJ+Z[jJ]];var dJ=this._gradients[F];L=p0*p0*(dJ[0]*h+dJ[1]*_)}var c0=0.5-K0*K0-L0*L0;if(c0>=0){c0*=c0,F=U[EJ+i+Z[jJ+n]];var lJ=this._gradients[F];B=c0*c0*(lJ[0]*K0+lJ[1]*L0)}var d0=0.5-E0*E0-OJ*OJ;if(d0>=0){d0*=d0,F=U[EJ+1+Z[jJ+1]];var nJ=this._gradients[F];P=d0*d0*(nJ[0]*E0+nJ[1]*OJ)}return 70*(L+B+P)},G}(XZ),LZ={Simplex:BZ},cJ=function(){function X(z,K,J,V){if(V===void 0)V={};if(this._toX=z,this._toY=K,this._passableCallback=J,this._options=Object.assign({topology:8},V),this._dirs=X0[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var G=X.prototype;return G._getNeighbors=function z(K,J){var V=[];for(var Z=0;Z<this._dirs.length;Z++){var U=this._dirs[Z],q=K+U[0],L=J+U[1];if(!this._passableCallback(q,L))continue;V.push([q,L])}return V},X}(),YZ=function(X){Q0(G,X);function G(K,J,V,Z){var U=X.call(this,K,J,V,Z)||this;return U._computed={},U._todo=[],U._add(K,J,null),U}var z=G.prototype;return z.compute=function K(J,V,Z){var U=J+","+V;if(!(U in this._computed))this._compute(J,V);if(!(U in this._computed))return;var q=this._computed[U];while(q)Z(q.x,q.y),q=q.prev},z._compute=function K(J,V){while(this._todo.length){var Z=this._todo.shift();if(Z.x==J&&Z.y==V)return;var U=this._getNeighbors(Z.x,Z.y);for(var q=0;q<U.length;q++){var L=U[q],B=L[0],P=L[1],F=B+","+P;if(F in this._computed)continue;this._add(B,P,Z)}}},z._add=function K(J,V,Z){var U={x:J,y:V,prev:Z};this._computed[J+","+V]=U,this._todo.push(U)},G}(cJ),PZ=function(X){Q0(G,X);function G(K,J,V,Z){var U;if(Z===void 0)Z={};return U=X.call(this,K,J,V,Z)||this,U._todo=[],U._done={},U}var z=G.prototype;return z.compute=function K(J,V,Z){this._todo=[],this._done={},this._fromX=J,this._fromY=V,this._add(this._toX,this._toY,null);while(this._todo.length){var U=this._todo.shift(),q=U.x+","+U.y;if(q in this._done)continue;if(this._done[q]=U,U.x==J&&U.y==V)break;var L=this._getNeighbors(U.x,U.y);for(var B=0;B<L.length;B++){var P=L[B],F=P[0],R=P[1],W=F+","+R;if(W in this._done)continue;this._add(F,R,U)}}var M=this._done[J+","+V];if(!M)return;while(M)Z(M.x,M.y),M=M.prev},z._add=function K(J,V,Z){var U=this._distance(J,V),q={x:J,y:V,prev:Z,g:Z?Z.g+1:0,h:U},L=q.g+q.h;for(var B=0;B<this._todo.length;B++){var P=this._todo[B],F=P.g+P.h;if(L<F||L==F&&U<P.h){this._todo.splice(B,0,q);return}}this._todo.push(q)},z._distance=function K(J,V){switch(this._options.topology){case 4:return Math.abs(J-this._fromX)+Math.abs(V-this._fromY);case 6:var Z=Math.abs(J-this._fromX),U=Math.abs(V-this._fromY);return U+Math.max(0,(Z-U)/2);case 8:return Math.max(Math.abs(J-this._fromX),Math.abs(V-this._fromY))}},G}(cJ),HZ={Dijkstra:YZ,AStar:PZ},FZ=function(){function X(z){this._scheduler=z,this._lock=1}var G=X.prototype;return G.start=function z(){return this.unlock()},G.lock=function z(){return this._lock++,this},G.unlock=function z(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var K=this._scheduler.next();if(!K)return this.lock();var J=K.act();if(J&&J.then)this.lock(),J.then(this.unlock.bind(this))}return this},X}(),wZ=function(){function X(z,K){if(K===void 0)K={};this._reflectivityCallback=z,this._options={},K=Object.assign({passes:1,emissionThreshold:100,range:10},K),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(K)}var G=X.prototype;return G.setOptions=function z(K){if(Object.assign(this._options,K),K&&K.range)this.reset();return this},G.setFOV=function z(K){return this._fov=K,this._fovCache={},this},G.setLight=function z(K,J,V){var Z=K+","+J;if(V)this._lights[Z]=typeof V=="string"?d(V):V;else delete this._lights[Z];return this},G.clearLights=function z(){this._lights={}},G.reset=function z(){return this._reflectivityCache={},this._fovCache={},this},G.compute=function z(K){var J={},V={},Z={};for(var U in this._lights){var q=this._lights[U];V[U]=[0,0,0],c(V[U],q)}for(var L=0;L<this._options.passes;L++){if(this._emitLight(V,Z,J),L+1==this._options.passes)continue;V=this._computeEmitters(Z,J)}for(var B in Z){var P=B.split(","),F=parseInt(P[0]),R=parseInt(P[1]);K(F,R,Z[B])}return this},G._emitLight=function z(K,J,V){for(var Z in K){var U=Z.split(","),q=parseInt(U[0]),L=parseInt(U[1]);this._emitLightFromCell(q,L,K[Z],J),V[Z]=1}return this},G._computeEmitters=function z(K,J){var V={};for(var Z in K){if(Z in J)continue;var U=K[Z],q=void 0;if(Z in this._reflectivityCache)q=this._reflectivityCache[Z];else{var L=Z.split(","),B=parseInt(L[0]),P=parseInt(L[1]);q=this._reflectivityCallback(B,P),this._reflectivityCache[Z]=q}if(q==0)continue;var F=[0,0,0],R=0;for(var W=0;W<3;W++){var M=Math.round(U[W]*q);F[W]=M,R+=M}if(R>this._options.emissionThreshold)V[Z]=F}return V},G._emitLightFromCell=function z(K,J,V,Z){var U=K+","+J,q;if(U in this._fovCache)q=this._fovCache[U];else q=this._updateFOV(K,J);for(var L in q){var B=q[L],P=void 0;if(L in Z)P=Z[L];else P=[0,0,0],Z[L]=P;for(var F=0;F<3;F++)P[F]+=Math.round(V[F]*B)}return this},G._updateFOV=function z(K,J){var V=K+","+J,Z={};this._fovCache[V]=Z;var U=this._options.range;function q(L,B,P,F){var R=L+","+B,W=F*(1-P/U);if(W==0)return;Z[R]=W}return this._fov.compute(K,J,U,q.bind(this)),Z},X}(),DZ=x,WZ=l,RZ=mV;Q.Util=DZ,Q.Color=WZ,Q.Text=RZ,Q.RNG=H,Q.Display=cV,Q.StringGenerator=dV,Q.EventQueue=xJ,Q.Scheduler=sV,Q.FOV=eV,Q.Map=$Z,Q.Noise=LZ,Q.Path=HZ,Q.Engine=FZ,Q.Lighting=wZ,Q.DEFAULT_WIDTH=wJ,Q.DEFAULT_HEIGHT=DJ,Q.DIRS=X0,Q.KEYS=_V,Object.defineProperty(Q,"__esModule",{value:!0})})});var vZ=typeof window!=="undefined"?window.innerWidth:0,AZ=typeof window!=="undefined"?window.innerHeight:0,t={cameraWidth:Math.floor(vZ/18),cameraHeight:Math.floor(AZ/18),debug:!0,fontSize:18,highlightEnemy:!0,showGrid:!0,showUI:!0,zoom:1},vJ={WIDTH:1024,HEIGHT:1024},Y0={width:Math.floor(t.cameraWidth*(1/t.zoom)),height:Math.floor(t.cameraHeight*(1/t.zoom)),bg:"transparent",fontSize:Math.floor(t.fontSize*t.zoom),forceSquareRatio:!0};function sJ(Q){if(t.debug)console.log(Q)}var AJ=[];class i0{name;description;constructor(Q,$){this.name=Q,this.description=$}}class e0{name;description;constructor(Q,$){this.name=Q,this.description=$}}class W0{key;description;constructor(Q,$){this.key=Q,this.description=$}}class oJ{name;description;constructor(Q,$){this.name=Q,this.description=$}}class m0{name;description;color;constructor(Q,$,Y){this.name=Q,this.description=$,this.color=Y}}class R0{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(Q,$,Y,H="cyberyellow",D=0,E=0,v=0,b=0,N=0,I=[]){this.name=Q,this.description=$,this.icon=Y,this.color=H,this.energyDelta=D,this.matter=E,this.gold=v,this.damage=b,this.energyCost=N,this.effects=I}}class f0{name;description;icon;color;energyMax;unlockCondition;constructor(Q,$,Y,H=100){this.name=Q,this.description=$,this.icon=Y,this.energyMax=H,this.color="white",this.unlockCondition=null}}class V0{name;description;icon;fg;bg;energyDelta;constructor(Q,$,Y=null,H="white",D="black",E=0){this.name=Q,this.description=$,this.icon=Y,this.fg=H,this.bg=D,this.energyDelta=E}}var w={actions:{Enter:new i0("Enter","Enter a portal or plant atmosphere"),Launch:new i0("Launch","Launch into space"),Wait:new i0("Wait","Wait one turn in place")},ais:{aggrorange:new e0("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new e0("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new e0("guardian","Idles at a position and only fights back if engaged")},colors:{black:"#000",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",brown:"brown",gray:"#777",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new W0("N","Move/interact/combat north"),E:new W0("E","Move/interact/combat east"),S:new W0("S","Move/interact/combat south"),W:new W0("W","Move/interact/combat west"),A:new W0("A","Primary action, confirm"),B:new W0("B","Take a break, cancel"),"1":new W0("1","Secondary action, first quick slot"),"2":new W0("2","Tertiary action, second quick slot"),M:new W0("M","Menu")},effects:{WallCrusher:new oJ("Wall Crusher","Tears down weak walls")},entities:{movableboulder:new f0("movableboulder","A movable rock","o",2),movablebox:new f0("movablebox","A movable box","x",2),Spirit:new f0("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new f0("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new f0("WorkBot","Basic factory worker","B"),Cleaner:new f0("Cleaner","Advanced bot purging malfunctioning bots","C",50),Pioneer:new f0("Pioneer","Absolute slayer bots, needs to play as WorkBot first, brotherhood of ultimate warriors","W",200)},factions:{Equipment:new m0("Equipment","For boxes etc.","gray"),Spirits:new m0("Spirits","Default player faction","white"),Pyrates:new m0("Pyrates","Default enemy faction","cybermagenta"),Gaia:new m0("Gaia","For rocks etc.","brown"),Guardians:new m0("Guardians","Bot station guardians","cybercyan")},items:{battery:new R0("Battery","Increases maximum energy","b","cyberyellow",10),energy:new R0("Energy","Energy pack","e","cyberyellow",10),gold:new R0("Gold","Precious shiny!","g","cyberyellow",0,0,1),goo:new R0("Goo","A minor matter source","g","gray",0,1),junk:new R0("Junk","Broken bot","%","gray",0,1),matter:new R0("Matter","A pile of stuff","m","gray",0,100),hammer:new R0("Hammer","Tears down weak walls","i","cyberyellow",0,0,0,-15,-2,["Wall Crusher"]),wrench:new R0("Wrench","Basic WorkBot tool","i","cyberyellow",0,0,0,-10,-1),shocker:new R0("Shocker","Injects Bots with new energy, basic AeroBot tool","i","cyberyellow",0,0,0,10,-1)},maps:{bot_bar:`!
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
!!size 16 16
!!# wall
!!+ wallweak
!!. void
!!O portal bot_station 26 7
################
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
#..............#
##O#############
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
!!A portal bot_prison 2 15
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
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired PioneerBot, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:t.showGrid?new V0("void","Just nothing here",".","gray"):new V0("void","Just nothing here"),voidtrue:new V0("voidtrue","Really nothing here and you shouldn't get there ever!"),water:new V0("water","Rust and other dangers await","~","cybercyan","cyberblue",-2),rock:new V0("rock","Hidden treasures may await","^","white","gray"),tree:new V0("tree","Lots of trees make a forest","t","brown","black"),wall:new V0("wall","A strong wall","#","gray","black"),wallstatue:new V0("wallstatue","A small statue","s","gray","black"),wallweak:new V0("wallweak","A weakened wall","+","gray","black"),chargepad:new V0("chargepad","Recharges energy and health","=","cyberyellow","black",2),movenorth:new V0("movenorth","Moves you north","^","cyberyellow"),moveeast:new V0("moveeast","Moves you east",">","cyberyellow"),movesouth:new V0("movesouth","Moves you south","v","cyberyellow"),movewest:new V0("movewest","Moves you west","<","cyberyellow"),portal:new V0("portal","Gateway to another map","O","cyberyellow","gray"),portalclosed:new V0("portalclosed","Closed gateway to another map","O","black","gray"),portalhidden:new V0("portalhidden","Hidden gateway to another map","#","gray","black"),portalstartworkbot:new V0("portalstartworkbot","Start playing as a WorkBot","B","white"),portalstartaerobot:new V0("portalstartaerobot","Start playing as a AeroBot","A","white"),"_portalstart?":new V0("_portalstart?","Not unlocked, yet!","?","white"),spacerock:new V0("spacerock","Mountains as seen from space, non-blocking!","^","white","gray"),spacetree:new V0("spacetree","Forest as seen from space","","brown","brown"),spacewater:new V0("spacewater","Water as seen from space, not dangerous!","~","cybercyan","cyberblue"),spacevoid:new V0("spacevoid","Void/ground as seen from space","","gray","gray"),spacevoidstarwhite:new V0("spacevoidstarwhite","Space with a white background star",".","white"),spacevoidstaryellow:new V0("spacevoidstaryellow","Space with a yellow background star",".","cyberyellow"),sun:new V0("sun","It's hot, really hot!","","cyberyellow","cyberyellow",-100)}};function J0(Q,$,Y,H,D=0,E=0,v={}){const b={id:$,type:Y,mapId:H,x:D,y:E,energy:10,energyMax:10,gold:0,matter:0,options:v};return Q=JJ(Q,b,Y),Q.entities[b.id]=b,Q}function NJ(Q,$,Y,H){return J0(Q,"boulder,"+$+","+Y+","+H,w.entities.movableboulder,$,Y,H,{faction:w.factions.Gaia})}function fJ(Q,$,Y,H){return J0(Q,"box,"+$+","+Y+","+H,w.entities.movablebox,$,Y,H,{faction:w.factions.Equipment})}function t0(Q,$){return Q.entities[$]=void 0,delete Q.entities[$],Q.tools[$]=void 0,Q}function k0(Q,$){let Y=Object.keys(Q.entities),H=[];for(let D=0;D<Y.length;D++){let E=Q.entities[Y[D]];if(E.mapId===$)H.push(E)}return H}function aJ(Q,$,Y,H){let D=k0(Q,$).filter((E)=>E.x===Y&&E.y===H);if(D.length>0)return D[0];return null}function JJ(Q,$,Y){if($.type=Y,$.energy=Y.energyMax,$.energyMax=Y.energyMax,$.gold=0,$.matter=0,!M0($))Q.tools[$.id]=void 0;return Q}function iJ(Q,$,Y){if($.options.faction===Y.options.faction);else{const H=$.id,D=Y.id;Q._combatQueue.push({entityId:H,otherEntityId:D})}return Q}function M0(Q){return Q.type===w.entities.movableboulder||Q.type===w.entities.movablebox}function VJ(Q,$){const Y={A:w.actions.Wait,B:w.actions.Wait};if(Q.lastSpacePositionByEntity[$.id])Y.A=w.actions.Launch;const D=Q.maps[$.mapId].getTile($.x,$.y);if(!!D.options.mapId&&"x"in D.options&&"y"in D.options)Y.A=w.actions.Enter;return Y}function eJ(Q,$,Y){const H=Q._eventSubscribers[$];if(H)for(let D=0;D<H.length;D++){const E=H[D];Q=E(Q,Y)}return Q}function IJ(Q,$,Y){if($ in Q._eventSubscribers);else Q._eventSubscribers[$]=[];return Q._eventSubscribers[$].push(Y),Q}function U0(Q,$,Y,H=0,D=0){const v={id:QJ(Y,H,D),type:$,mapId:Y,x:H,y:D,energy:$.energyDelta,gold:$.gold,matter:$.matter};return Q.items[v.id]=v,Q}function tJ(Q,$,Y,H=0,D=0){const E=w.items.junk,b={id:QJ(Y,H,D),type:E,mapId:Y,x:H,y:D,energy:E.energyDelta,gold:E.gold,matter:$};return Q.items[b.id]=b,Q}function ZJ(Q,$,Y,H=0,D=0,E,v){const N={id:QJ(Y,H,D),type:$,mapId:Y,x:H,y:D,energy:$.energyDelta,gold:E,matter:v};return Q.items[N.id]=N,Q}var QJ=function(Q,$,Y){return"item,"+Q+","+$+","+Y};function SJ(Q,$){return Q.items[$]=void 0,delete Q.items[$],Q}function KJ(Q,$){let Y=Object.keys(Q.items),H=[];for(let D=0;D<Y.length;D++){let E=Q.items[Y[D]];if(E.mapId===$)H.push(E)}return H}function JV(Q,$,Y,H){let D=QJ($,Y,H);if(D in Q.items)return Q.items[D];return null}function l0(Q,$){return Q.tools[$]}function VV(Q,$,Y){if(M0($))return Q;if(!fZ($,Y))return Q;if(NZ(Y))Q=bJ(Q,$.id,Y.type);else{if(Y.type===w.items.battery)$.energyMax+=Y.energy;Q._energyQueue.push({entityId:$.id,energyDelta:Y.energy})}return $.gold+=Y.gold,$.matter+=Y.matter,SJ(Q,Y.id),Q}function bJ(Q,$,Y){let H={type:Y};return Q.tools[$]=H,Q}var NZ=function(Q){return Q.type.energyCost<0},fZ=function(Q,$){return Q.gold+$.gold>=0&&Q.matter+$.matter>=0};function ZV(Q,$,Y,H,D){let E=new IZ.js;E.setGrid(Q),E.setAcceptableTiles([0]),E.enableSync();let v=null;return E.findPath($,Y,H,D,function(b){v=b}),E.calculate(),v}/*!
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
 */var IZ=function(Q){var $={};function Y(H){if($[H])return $[H].exports;var D=$[H]={i:H,l:!1,exports:{}};return Q[H].call(D.exports,D,D.exports,Y),D.l=!0,D.exports}return Y.m=Q,Y.c=$,Y.d=function(H,D,E){Y.o(H,D)||Object.defineProperty(H,D,{enumerable:!0,get:E})},Y.r=function(H){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(H,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(H,"__esModule",{value:!0})},Y.t=function(H,D){if(1&D&&(H=Y(H)),8&D)return H;if(4&D&&typeof H=="object"&&H&&H.__esModule)return H;var E=Object.create(null);if(Y.r(E),Object.defineProperty(E,"default",{enumerable:!0,value:H}),2&D&&typeof H!="string")for(var v in H)Y.d(E,v,function(b){return H[b]}.bind(null,v));return E},Y.n=function(H){var D=H&&H.__esModule?function(){return H.default}:function(){return H};return Y.d(D,"a",D),D},Y.o=function(H,D){return Object.prototype.hasOwnProperty.call(H,D)},Y.p="/bin/",Y(Y.s=0)}([function(Q,$,Y){var H={},D=Y(1),E=Y(2),v=Y(3);Q.exports=H;var b=1;H.js=function(){var N,I,x,r=!1,m={},e={},d={},y={},c=!0,$0={},G0=[],H0=Number.MAX_VALUE,F0=!1;this.setAcceptableTiles=function(S){S instanceof Array?x=S:!isNaN(parseFloat(S))&&isFinite(S)&&(x=[S])},this.enableSync=function(){r=!0},this.disableSync=function(){r=!1},this.enableDiagonals=function(){F0=!0},this.disableDiagonals=function(){F0=!1},this.setGrid=function(S){N=S;for(var A=0;A<N.length;A++)for(var j=0;j<N[0].length;j++)e[N[A][j]]||(e[N[A][j]]=1)},this.setTileCost=function(S,A){e[S]=A},this.setAdditionalPointCost=function(S,A,j){d[A]===void 0&&(d[A]={}),d[A][S]=j},this.removeAdditionalPointCost=function(S,A){d[A]!==void 0&&delete d[A][S]},this.removeAllAdditionalPointCosts=function(){d={}},this.setDirectionalCondition=function(S,A,j){y[A]===void 0&&(y[A]={}),y[A][S]=j},this.removeAllDirectionalConditions=function(){y={}},this.setIterationsPerCalculation=function(S){H0=S},this.avoidAdditionalPoint=function(S,A){m[A]===void 0&&(m[A]={}),m[A][S]=1},this.stopAvoidingAdditionalPoint=function(S,A){m[A]!==void 0&&delete m[A][S]},this.enableCornerCutting=function(){c=!0},this.disableCornerCutting=function(){c=!1},this.stopAvoidingAllAdditionalPoints=function(){m={}},this.findPath=function(S,A,j,l,a){var Z0=function(v0){r?a(v0):setTimeout(function(){a(v0)})};if(x===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(N===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(S<0||A<0||j<0||l<0||S>N[0].length-1||A>N.length-1||j>N[0].length-1||l>N.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(S!==j||A!==l){for(var w0=N[l][j],z0=!1,O0=0;O0<x.length;O0++)if(w0===x[O0]){z0=!0;break}if(z0!==!1){var B0=new D;B0.openList=new v(function(v0,x0){return v0.bestGuessDistance()-x0.bestGuessDistance()}),B0.isDoneCalculating=!1,B0.nodeHash={},B0.startX=S,B0.startY=A,B0.endX=j,B0.endY=l,B0.callback=Z0,B0.openList.push(o(B0,B0.startX,B0.startY,null,1));var _0=b++;return $0[_0]=B0,G0.push(_0),_0}Z0(null)}else Z0([])},this.cancelPath=function(S){return S in $0&&(delete $0[S],!0)},this.calculate=function(){if(G0.length!==0&&N!==void 0&&x!==void 0)for(I=0;I<H0;I++){if(G0.length===0)return;r&&(I=0);var S=G0[0],A=$0[S];if(A!==void 0)if(A.openList.size()!==0){var j=A.openList.pop();if(A.endX!==j.x||A.endY!==j.y)j.list=0,j.y>0&&C(A,j,0,-1,1*g(j.x,j.y-1)),j.x<N[0].length-1&&C(A,j,1,0,1*g(j.x+1,j.y)),j.y<N.length-1&&C(A,j,0,1,1*g(j.x,j.y+1)),j.x>0&&C(A,j,-1,0,1*g(j.x-1,j.y)),F0&&(j.x>0&&j.y>0&&(c||k(N,x,j.x,j.y-1,j)&&k(N,x,j.x-1,j.y,j))&&C(A,j,-1,-1,1.4*g(j.x-1,j.y-1)),j.x<N[0].length-1&&j.y<N.length-1&&(c||k(N,x,j.x,j.y+1,j)&&k(N,x,j.x+1,j.y,j))&&C(A,j,1,1,1.4*g(j.x+1,j.y+1)),j.x<N[0].length-1&&j.y>0&&(c||k(N,x,j.x,j.y-1,j)&&k(N,x,j.x+1,j.y,j))&&C(A,j,1,-1,1.4*g(j.x+1,j.y-1)),j.x>0&&j.y<N.length-1&&(c||k(N,x,j.x,j.y+1,j)&&k(N,x,j.x-1,j.y,j))&&C(A,j,-1,1,1.4*g(j.x-1,j.y+1)));else{var l=[];l.push({x:j.x,y:j.y});for(var a=j.parent;a!=null;)l.push({x:a.x,y:a.y}),a=a.parent;l.reverse();var Z0=l;A.callback(Z0),delete $0[S],G0.shift()}}else A.callback(null),delete $0[S],G0.shift();else G0.shift()}};var C=function(S,A,j,l,a){var Z0=A.x+j,w0=A.y+l;if((m[w0]===void 0||m[w0][Z0]===void 0)&&k(N,x,Z0,w0,A)){var z0=o(S,Z0,w0,A,a);z0.list===void 0?(z0.list=1,S.openList.push(z0)):A.costSoFar+a<z0.costSoFar&&(z0.costSoFar=A.costSoFar+a,z0.parent=A,S.openList.updateItem(z0))}},k=function(S,A,j,l,a){var Z0=y[l]&&y[l][j];if(Z0){var w0=T(a.x-j,a.y-l);if(!function(){for(var O0=0;O0<Z0.length;O0++)if(Z0[O0]===w0)return!0;return!1}())return!1}for(var z0=0;z0<A.length;z0++)if(S[l][j]===A[z0])return!0;return!1},T=function(S,A){if(S===0&&A===-1)return H.TOP;if(S===1&&A===-1)return H.TOP_RIGHT;if(S===1&&A===0)return H.RIGHT;if(S===1&&A===1)return H.BOTTOM_RIGHT;if(S===0&&A===1)return H.BOTTOM;if(S===-1&&A===1)return H.BOTTOM_LEFT;if(S===-1&&A===0)return H.LEFT;if(S===-1&&A===-1)return H.TOP_LEFT;throw new Error("These differences are not valid: "+S+", "+A)},g=function(S,A){return d[A]&&d[A][S]||e[N[A][S]]},o=function(S,A,j,l,a){if(S.nodeHash[j]!==void 0){if(S.nodeHash[j][A]!==void 0)return S.nodeHash[j][A]}else S.nodeHash[j]={};var Z0=s(A,j,S.endX,S.endY);if(l!==null)var w0=l.costSoFar+a;else w0=0;var z0=new E(l,A,j,w0,Z0);return S.nodeHash[j][A]=z0,z0},s=function(S,A,j,l){var a,Z0;return F0?(a=Math.abs(S-j))<(Z0=Math.abs(A-l))?1.4*a+Z0:1.4*Z0+a:(a=Math.abs(S-j))+(Z0=Math.abs(A-l))}},H.TOP="TOP",H.TOP_RIGHT="TOP_RIGHT",H.RIGHT="RIGHT",H.BOTTOM_RIGHT="BOTTOM_RIGHT",H.BOTTOM="BOTTOM",H.BOTTOM_LEFT="BOTTOM_LEFT",H.LEFT="LEFT",H.TOP_LEFT="TOP_LEFT"},function(Q,$){Q.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(Q,$){Q.exports=function(Y,H,D,E,v){this.parent=Y,this.x=H,this.y=D,this.costSoFar=E,this.simpleDistanceToTarget=v,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(Q,$,Y){Q.exports=Y(4)},function(Q,$,Y){var H,D,E;(function(){var v,b,N,I,x,r,m,e,d,y,c,$0,G0,H0,F0;N=Math.floor,y=Math.min,b=function(C,k){return C<k?-1:C>k?1:0},d=function(C,k,T,g,o){var s;if(T==null&&(T=0),o==null&&(o=b),T<0)throw new Error("lo must be non-negative");for(g==null&&(g=C.length);T<g;)o(k,C[s=N((T+g)/2)])<0?g=s:T=s+1;return[].splice.apply(C,[T,T-T].concat(k)),k},r=function(C,k,T){return T==null&&(T=b),C.push(k),H0(C,0,C.length-1,T)},x=function(C,k){var T,g;return k==null&&(k=b),T=C.pop(),C.length?(g=C[0],C[0]=T,F0(C,0,k)):g=T,g},e=function(C,k,T){var g;return T==null&&(T=b),g=C[0],C[0]=k,F0(C,0,T),g},m=function(C,k,T){var g;return T==null&&(T=b),C.length&&T(C[0],k)<0&&(k=(g=[C[0],k])[0],C[0]=g[1],F0(C,0,T)),k},I=function(C,k){var T,g,o,s,S,A;for(k==null&&(k=b),S=[],g=0,o=(s=function(){A=[];for(var j=0,l=N(C.length/2);0<=l?j<l:j>l;0<=l?j++:j--)A.push(j);return A}.apply(this).reverse()).length;g<o;g++)T=s[g],S.push(F0(C,T,k));return S},G0=function(C,k,T){var g;if(T==null&&(T=b),(g=C.indexOf(k))!==-1)return H0(C,0,g,T),F0(C,g,T)},c=function(C,k,T){var g,o,s,S,A;if(T==null&&(T=b),!(o=C.slice(0,k)).length)return o;for(I(o,T),s=0,S=(A=C.slice(k)).length;s<S;s++)g=A[s],m(o,g,T);return o.sort(T).reverse()},$0=function(C,k,T){var g,o,s,S,A,j,l,a,Z0;if(T==null&&(T=b),10*k<=C.length){if(!(s=C.slice(0,k).sort(T)).length)return s;for(o=s[s.length-1],S=0,j=(l=C.slice(k)).length;S<j;S++)T(g=l[S],o)<0&&(d(s,g,0,null,T),s.pop(),o=s[s.length-1]);return s}for(I(C,T),Z0=[],A=0,a=y(k,C.length);0<=a?A<a:A>a;0<=a?++A:--A)Z0.push(x(C,T));return Z0},H0=function(C,k,T,g){var o,s,S;for(g==null&&(g=b),o=C[T];T>k&&g(o,s=C[S=T-1>>1])<0;)C[T]=s,T=S;return C[T]=o},F0=function(C,k,T){var g,o,s,S,A;for(T==null&&(T=b),o=C.length,A=k,s=C[k],g=2*k+1;g<o;)(S=g+1)<o&&!(T(C[g],C[S])<0)&&(g=S),C[k]=C[g],g=2*(k=g)+1;return C[k]=s,H0(C,A,k,T)},v=function(){function C(k){this.cmp=k!=null?k:b,this.nodes=[]}return C.push=r,C.pop=x,C.replace=e,C.pushpop=m,C.heapify=I,C.updateItem=G0,C.nlargest=c,C.nsmallest=$0,C.prototype.push=function(k){return r(this.nodes,k,this.cmp)},C.prototype.pop=function(){return x(this.nodes,this.cmp)},C.prototype.peek=function(){return this.nodes[0]},C.prototype.contains=function(k){return this.nodes.indexOf(k)!==-1},C.prototype.replace=function(k){return e(this.nodes,k,this.cmp)},C.prototype.pushpop=function(k){return m(this.nodes,k,this.cmp)},C.prototype.heapify=function(){return I(this.nodes,this.cmp)},C.prototype.updateItem=function(k){return G0(this.nodes,k,this.cmp)},C.prototype.clear=function(){return this.nodes=[]},C.prototype.empty=function(){return this.nodes.length===0},C.prototype.size=function(){return this.nodes.length},C.prototype.clone=function(){var k;return(k=new C).nodes=this.nodes.slice(0),k},C.prototype.toArray=function(){return this.nodes.slice(0)},C.prototype.insert=C.prototype.push,C.prototype.top=C.prototype.peek,C.prototype.front=C.prototype.peek,C.prototype.has=C.prototype.contains,C.prototype.copy=C.prototype.clone,C}(),D=[],(E=typeof(H=function(){return v})=="function"?H.apply($,D):H)===void 0||(Q.exports=E)}).call(this)}]);function j0(){return"player"}function QV(Q,$,Y,H){return Math.abs(Q-Y)+Math.abs($-H)}function KV(Q){return[...Array(Q).keys()]}function UV(Q){let $=SZ(Q);for(let H=0;H<$.length;H++){let D=$[H];if(!Q._AIs.hasOwnProperty(D))Q._AIs[D]=bZ(Q,D,Q.entities[D].options.ai)}let Y=Q.entities[j0()];for(let H=0;H<$.length;H++){let D=$[H],E=Q.entities[D],v=Q._AIs[D],b=QV(Y.x,Y.y,E.x,E.y);if(Y.options.faction!==E.options.faction&&b<=v.aggroRange){let N=Q.maps[Q.currentMapId].asMovementMap(),I=ZV(N,E.x,E.y,Y.x,Y.y);if(I)I=I.slice(1);v.path=I}}for(let H=0;H<$.length;H++){const D=$[H],E=Q.entities[D],v=Q._AIs[D];if(v.path){const b=v.path[0],N=b.x-E.x,I=b.y-E.y;Q=D0(Q,E,N,I)}}return Q}var SZ=function(Q){let $=k0(Q,Q.currentMapId),Y=[];for(let H=0;H<$.length;H++){let D=$[H];if(!D.id.startsWith("player")&&!!D.options.ai)Y.push(D.id)}return Y},bZ=function(Q,$,Y){let H=Q.entities[$],D=8;switch(Y){case w.ais.aggrorange:D=8;break;case w.ais.aggrorangeshort:D=2;break;case w.ais.guardian:D=1;break;default:}return{entityId:$,type:Y,aggroRange:D,startMap:H.mapId,startX:H.x,startY:H.y,path:null}};function UJ(Q,$){return Q._AIs[$]=void 0,delete Q._AIs[$],Q}function u0(Q,$={}){return{type:Q,options:$}}function qV(Q){return Q.type.name.startsWith("space")}function zV(Q,$){const Y=KJ(Q,$);for(let D=0;D<Y.length;D++){const E=Y[D];Q=SJ(Q,E.id)}const H=k0(Q,$);for(let D=0;D<H.length;D++){const E=H[D];Q=t0(Q,E.id),Q=UJ(Q,E.id)}return Q.maps[$]=void 0,delete Q.maps[$],Q}function zJ(Q){let $=Q.split(/\r?\n/),Y=Q[0],H="",D=0,E=0,v={},b=[];for(let N=0;N<$.length;N++){let I=$[N];if(I.startsWith(Y)){if(I.startsWith(Y+"!id"))H=I.slice(5);else if(I.startsWith(Y+"!size")){let x=I.split(" ").slice(1);D=Number(x[0]),E=Number(x[1])}else if(I.startsWith(Y+"!")){let x=I[2],r=I.slice(4);v[x]=r}}else for(let x=0;x<I.length;x++){let r=I[x],m=v[r];if(!m&&t.debug)console.log("DEBUG Broken map: "+H);let e=m.split(" "),d={};if(m.startsWith("portal ")||m.startsWith("portalhidden ")||m.startsWith("portalstart"))m=e[0],d.mapId=e[1],d.x=Number(e[2]),d.y=Number(e[3]);if(m.startsWith("wall ")&&e.length>=2)m="wall",d.sign=e[1];b.push(u0(w.tiles[m],d))}}return new T0(H,D,E,b)}var qJ={width:16,height:16},kJ=qJ;class T0{id;widthTiles;heightTiles;_tiles;_cacheMovementMap;constructor(Q,$,Y,H=[]){this.id=Q,this.widthTiles=$,this.heightTiles=Y,this._tiles=H,this._cacheMovementMap=null}getTile(Q,$){if(Q>=0&&Q<this.widthTiles&&$>=0&&$<this.heightTiles){let Y=$*this.widthTiles+Q;return this._tiles[Y]}return{}}setTile(Q,$,Y,H={}){this._cacheMovementMap=null;let D=$*this.widthTiles+Q;this._tiles[D]=u0(Y,H)}pasteOnto(Q,$=0,Y=0){for(let H=0;H<Q.heightTiles;H++)for(let D=0;D<Q.widthTiles;D++){const E=Q.getTile(D,H);if(E.type!==w.tiles.voidtrue)this.setTile(D+$,H+Y,E.type,E.options)}}circular(){let Q=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let $=-Q;$<=Q;$++)for(let Y=-Q;Y<=Q;Y++)if(Y*Y+$*$>=Q*Q)this.setTile(Y+Q-1,$+Q-1,w.tiles.voidtrue);return this}sample(Q,$){const Y=Math.floor(this.widthTiles/Q),H=Math.floor(this.heightTiles/$),D=[];for(let E=0;E<$;E++)for(let v=0;v<Q;v++){const b={};for(let e=0;e<H;e++)for(let d=0;d<Y;d++){const y=this.getTile(v*Y+d,E*H+e);if(b[y.type.name])b[y.type.name]+=1;else b[y.type.name]=1}let N="",I=0;for(let[e,d]of Object.entries(b))if(d>I)N=e,I=d;const x="space"+N,r=w.tiles[x]||w.tiles.spacevoid,m={mapId:this.id,x:v*Y,y:E*H};D.push(u0(r,m))}return new T0("__sampled_"+Q+"_"+$+"_"+this.id,Q,$,D)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let Q=new Array(this.heightTiles);for(let $=0;$<this.heightTiles;$++){Q[$]=new Array(this.widthTiles);for(let Y=0;Y<this.widthTiles;Y++){let H=$*this.widthTiles+Y,E=this._tiles[H].type;if(Q[$][Y]=0,E===w.tiles.rock||E===w.tiles.portalclosed||E.name.startsWith("wall"))Q[$][Y]=1}}return this._cacheMovementMap=Q,Q}}function XV(Q,$,Y){switch(Y){case w.commands.N:Q=D0(Q,$,0,-1);break;case w.commands.W:Q=D0(Q,$,-1,0);break;case w.commands.S:Q=D0(Q,$,0,1);break;case w.commands.E:Q=D0(Q,$,1,0);break;case w.commands.A:Q=$V(Q,$,w.commands.A);break;case w.commands.B:Q=$V(Q,$,w.commands.B);break;default:}return Q}function D0(Q,$,Y,H,D=0){const E=Q.maps[$.mapId],v=aJ(Q,E.id,$.x+Y,$.y+H),b=Q.tools[$.id];if(v)if(M0(v)){if(!M0($)&&D<1)Q=D0(Q,v,Y,H,D++),Q=D0(Q,$,Y,H,D++)}else Q=iJ(Q,$,v);else if(TZ(E,$,Y,H))Q=kZ(Q,E,$,Y,H),Q._energyQueue.push({entityId:$.id,energyDelta:-1*D});else if(gZ(E,$,b,Y,H))E.setTile($.x+Y,$.y+H,w.tiles.void),Q._energyQueue.push({entityId:$.id,energyDelta:b.type.energyCost});return Q}function $V(Q,$,Y){switch(VJ(Q,$)[Y.key]){case w.actions.Enter:const v=Q.maps[$.mapId].getTile($.x,$.y);Q=GV(Q,$,v);break;case w.actions.Launch:Q=uZ(Q,$);case w.actions.Wait:break;default:}return Q}var kZ=function(Q,$,Y,H,D){Y.x+=H,Y.y+=D;let E=JV(Q,Y.mapId,Y.x,Y.y);if(E)Q=VV(Q,Y,E);let v=$.getTile(Y.x,Y.y);if(v.type.name.startsWith("portal"))Q=GV(Q,Y,v);if(v.type.name.startsWith("move"))switch(v.type.name){case"movenorth":Q=D0(Q,Y,0,-1);break;case"moveeast":Q=D0(Q,Y,1,0);break;case"movesouth":Q=D0(Q,Y,0,1);break;case"movewest":Q=D0(Q,Y,-1,0);break;default:}return Q},GV=function(Q,$,Y){if($.id.startsWith("player"))Q.currentMapId=Y.options.mapId;if(qV(Y))Q.lastSpacePositionByEntity[$.id]={mapId:$.mapId,x:$.x,y:$.y};const H={entityId:$.id,oldMapId:$.mapId,oldX:$.x,oldY:$.y,oldTileType:Y.type,newMapId:Y.options.mapId,newX:Y.options.x,newY:Y.options.y};return $.mapId=Y.options.mapId,$.x=Y.options.x,$.y=Y.options.y,Q=eJ(Q,"entitymap.updated.event",H),Q},uZ=function(Q,$){if(Q.lastSpacePositionByEntity[$.id]){if($.id.startsWith("player"))Q.currentMapId=Q.lastSpacePositionByEntity[$.id].mapId;$.mapId=Q.lastSpacePositionByEntity[$.id].mapId,$.x=Q.lastSpacePositionByEntity[$.id].x,$.y=Q.lastSpacePositionByEntity[$.id].y,Q.lastSpacePositionByEntity[$.id]=void 0,delete Q.lastSpacePositionByEntity[$.id]}return Q};function BV(Q){for(let $ in Q.entities){let Y=Q.entities[$],D=Q.maps[Y.mapId].getTile(Y.x,Y.y);Q._energyQueue.push({entityId:$,energyDelta:D.type.energyDelta})}return Q}function LV(Q,$){const Y=Q.entities[$.entityId];switch($.oldTileType){case w.tiles.portalstartaerobot:Q=JJ(Q,Y,w.entities.AeroBot);break;case w.tiles.portalstartworkbot:Q=JJ(Q,Y,w.entities.WorkBot);break;default:}return Q}var TZ=function(Q,$,Y,H){let D=$.x+Y,E=$.y+H,v=Q.getTile(D,E).type;return D>=0&&D<Q.widthTiles&&E>=0&&E<Q.heightTiles&&v!==w.tiles.rock&&v!==w.tiles.portalclosed&&!v.name.startsWith("wall")},gZ=function(Q,$,Y,H,D){const E=$.x+H,v=$.y+D,b=Q.getTile(E,v).type;if(Y)return Y.type.effects.includes(w.effects.WallCrusher.name)&&b===w.tiles.wallweak;return!1};var PV=CJ(XJ(),1);class n0{seed;_rotRng;constructor(Q=1337){this.seed=Q,this._rotRng=PV.RNG.clone(),this._rotRng.setSeed(Q)}getPercentage(){return this._rotRng.getPercentage()}getItem(Q){return this._rotRng.getItem(Q)}}var r0=CJ(XJ(),1);function FV(Q,$=GJ){r0.RNG.setSeed($);let Y=new r0.Noise.Simplex;const H=qJ.width*kJ.width,D=qJ.height*kJ.height;let E=[];for(let N=0;N<D;N++)for(let I=0;I<H;I++){let x=Y.get(I/HV,N/HV),r;if(x<=-0.5)r=w.tiles.water;else if(x<=0)r=w.tiles.void;else if(x<0.5)r=w.tiles.tree;else r=w.tiles.rock;E.push(u0(r))}const v="simplex="+$;let b=new T0(v,H,D,E);if(Q.maps[v]=b,$===1337)Q=J0(Q,"npc0",w.entities.Pioneer,"simplex="+GJ,130,127,{faction:w.factions.Spirits}),Q=J0(Q,"npc1",w.entities.Pioneer,"simplex="+GJ,124,127,{faction:w.factions.Spirits}),Q=U0(Q,w.items.battery,"simplex="+GJ,127,130);else{const N=new n0($);for(let I=0;I<D;I++)for(let x=0;x<H;x++){const r=b.getTile(x,I);if(N.getPercentage()<=1&&(r.type===w.tiles.void||r.type===w.tiles.tree))switch(N.getItem(["pioneer","junk","matter"])){case"pioneer":Q=J0(Q,b.id+"_pioneer_"+x+"_"+I,w.entities.Pioneer,b.id,x,I,{faction:w.factions.Pyrates,ai:w.ais.aggrorange});break;case"junk":Q=U0(Q,w.items.junk,v,x,I);break;case"matter":Q=U0(Q,w.items.matter,v,x,I);break}}}return Q}var GJ=1337,HV=55;function DV(Q,$=hZ){let Y=wV(1024,1024,w.tiles.void);Y.id="solarsystem="+$,Q.maps[Y.id]=Y;const H=new n0($),D=H.getItem([2,3,4,5,6,7,8,9,10,11,12]);let E=128,v=512-E;const b=Math.floor(v/D);Y=xZ(Y,H);let N=wV(128,128,w.tiles.voidtrue);mZ(N,63,63,62,w.tiles.sun),_Z(N,63,63,w.tiles.sun),Y.pasteOnto(N,448,448);for(let I=E;I<512;I+=b){let x=H.getItem([-1,1])*H.getItem(KV(I)),r=H.getItem([-1,1])*Math.floor(Math.sqrt(I*I-x*x));x+=512,r+=512;const m=H.getItem([16,24,32]),e=Math.floor(m/2)-1;Q=FV(Q,$);const d=Q.maps["simplex="+$].sample(m,m).circular();Y.pasteOnto(d,x-(e+1),r-(e+1)),$++}return Y.setTile(584,401,w.tiles.portal,{mapId:"bot_elevator",x:11,y:47}),Y.setTile(584,400,w.tiles.wall),Y.setTile(583,400,w.tiles.wall),Y.setTile(585,400,w.tiles.wall),Y.setTile(584,399,w.tiles.wall),Y.setTile(583,399,w.tiles.wall),Y.setTile(585,399,w.tiles.wall),Y.setTile(584,398,w.tiles.wall),Y.setTile(583,398,w.tiles.wall),Y.setTile(585,398,w.tiles.wall),Q}var wV=function(Q,$,Y){const H=[];for(let v=0;v<Q*$;v++)H.push(u0(Y));return new T0("__temp",Q,$,H)},xZ=function(Q,$){for(let Y=0;Y<Q.heightTiles;Y++)for(let H=0;H<Q.widthTiles;H++)if($.getPercentage()<=1)Q.setTile(H,Y,$.getItem([w.tiles.spacevoidstarwhite,w.tiles.spacevoidstaryellow]));return Q},mZ=function(Q,$,Y,H,D){let E=1-H,v=1,b=-2*H,N=0,I=H;Q.setTile($,Y+H,D),Q.setTile($,Y-H,D),Q.setTile($+H,Y,D),Q.setTile($-H,Y,D);while(N<I){if(E>=0)I-=1,b+=2,E+=b;N+=1,v+=2,E+=v,Q.setTile($+N,Y+I,D),Q.setTile($-N,Y+I,D),Q.setTile($+N,Y-I,D),Q.setTile($-N,Y-I,D),Q.setTile($+I,Y+N,D),Q.setTile($-I,Y+N,D),Q.setTile($+I,Y-N,D),Q.setTile($-I,Y-N,D)}return Q},_Z=function(Q,$,Y,H){const{widthTiles:D,heightTiles:E}=Q,v=[];v.push({x:$,y:Y});let b=void 0;while(typeof(b=v.shift())!=="undefined"){let N=b,I=b;if(b.x+1<D)I={x:b.x+1,y:b.y};while(Q.getTile(N.x,N.y).type!==H){if(Q.setTile(N.x,N.y,H),N.y+1<E){if(Q.getTile(N.x,N.y+1).type!==H)v.push({x:N.x,y:N.y+1})}if(N.y-1>=0){if(Q.getTile(N.x,N.y-1).type!==H)v.push({x:N.x,y:N.y-1})}if(N.x-1>=0)N.x-=1;else break}while(Q.getTile(I.x,I.y).type!==H){if(Q.setTile(I.x,I.y,H),I.y+1<E){if(Q.getTile(I.x,I.y+1).type!==H)v.push({x:I.x,y:I.y+1})}if(I.y-1>=0){if(Q.getTile(I.x,I.y-1).type!==H)v.push({x:I.x,y:I.y-1})}if(I.x+1<D)I.x+=1;else break}}return Q},hZ=1337;function WV(Q,$){if($?.oldMapId?.startsWith("shop_instance")){Q=zV(Q,$.oldMapId);const Y=Q.maps[$.newMapId],H=Y.getTile($.newX,$.newY);Y.setTile($.newX,$.newY,H.type,{mapId:"shop_instance",x:$.oldX,y:$.oldY})}if($?.newMapId?.startsWith("shop_instance")){const Y=zJ(yZ);Y.id+="_"+$.oldMapId+"_"+$.entityId,Y.setTile($.newX,$.newY,w.tiles.portal,{mapId:$.oldMapId,x:$.oldX,y:$.oldY}),Q.maps[$.oldMapId].setTile($.oldX,$.oldY,$.oldTileType,{mapId:Y.id,x:$.newX,y:$.newY});const D=Q.entities[$.entityId];if(D.id.startsWith("player"))Q.currentMapId=Y.id;D.mapId=Y.id,D.x=$.newX,D.Y=$.newY,Q.maps[Y.id]=Y,Q=ZJ(Q,w.items.hammer,Y.id,4,4,0,-200),Q=ZJ(Q,w.items.battery,Y.id,4,6,0,-200),Q=ZJ(Q,w.items.gold,Y.id,4,8,0,-1e4),Q=J0(Q,Y.id+"_shopkeeper",w.entities.AeroBot,Y.id,6,2,{faction:D.options.faction}),Q=J0(Q,Y.id+"_shopper",w.entities.WorkBot,Y.id,1,12,{faction:D.options.faction})}return Q}var yZ=`!
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
`;function RV(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!1,actionLog:[],currentMapId:"",entities:{},items:{},lastSpacePositionByEntity:{},maps:{},tools:{}}}function MV(Q){let $=void 0;while(typeof($=Q._combatQueue.shift())!=="undefined"){let Y=-1,H=-5;const D=l0(Q,$.entityId);if(D)Y=D.type.energyCost,H=-1*Math.abs(D.type.damage);Q._energyQueue.push({entityId:$.entityId,energyDelta:Y}),Q._energyQueue.push({entityId:$.otherEntityId,energyDelta:H})}return Q}function OV(Q){let $=void 0;while(typeof($=Q._energyQueue.shift())!=="undefined"){let Y=Q.entities[$.entityId];if(Y.energy=Math.min(Y.energy+$.energyDelta,Y.energyMax),Y.energy<=0){if(Q._despawnQueue.push(Y.id),!M0(Y)){const H=Math.max(1,Math.floor(Y.energyMax/3));Q=tJ(Q,H,Y.mapId,Y.x,Y.y)}}}return Q}function EV(Q){let $=void 0;while(typeof($=Q._despawnQueue.shift())!=="undefined")Q=t0(Q,$),Q=UJ(Q,$);return Q}function jV(Q){return Q}function CV(Q){return Q=UV(Q),Q=MV(Q),Q=BV(Q),Q=OV(Q),Q=EV(Q),Q=jV(Q),Q}class BJ{state;constructor(){}init(){this.state=RV(),this.state=IJ(this.state,"entitymap.updated.event",LV),this.state=IJ(this.state,"entitymap.updated.event",WV),this.state=DV(this.state);for(let Q in w.maps)this.state.maps[Q]=zJ(w.maps[Q]);this.state=J0(this.state,"manual0",w.entities.Spirit,"manual",4,26,{faction:w.factions.Spirits}),this.state=J0(this.state,"manual1",w.entities.AeroBot,"manual",4,27,{faction:w.factions.Spirits}),this.state=J0(this.state,"manual2",w.entities.WorkBot,"manual",4,28,{faction:w.factions.Spirits}),this.state=J0(this.state,"manual3",w.entities.Cleaner,"manual",4,29,{faction:w.factions.Spirits}),this.state=J0(this.state,"manual4",w.entities.Pioneer,"manual",4,30,{faction:w.factions.Spirits}),this.state=J0(this.state,"manual5",w.entities.Spirit,"manual",54,36,{faction:w.factions.Pyrates,ai:w.ais.aggrorange}),this.state=U0(this.state,w.items.junk,"manual",4,36),this.state=U0(this.state,w.items.goo,"manual",12,36),this.state=U0(this.state,w.items.matter,"manual",4,37),this.state=U0(this.state,w.items.gold,"manual",4,38),this.state=U0(this.state,w.items.energy,"manual",4,39),this.state=U0(this.state,w.items.battery,"manual",4,40),this.state=U0(this.state,w.items.wrench,"manual",4,41),this.state=J0(this.state,"pioneerguardian0",w.entities.Pioneer,"bot_station",8,3,{faction:w.factions.Guardians,ai:w.ais.aggrorangeshort}),this.state=bJ(this.state,"pioneerguardian0",w.items.hammer),this.state=J0(this.state,"cleanerguardian0",w.entities.Cleaner,"bot_station",10,9,{faction:w.factions.Guardians,ai:w.ais.guardian}),this.state=J0(this.state,"cleanerguardian1",w.entities.Cleaner,"bot_station",12,9,{faction:w.factions.Guardians,ai:w.ais.guardian}),this.state=J0(this.state,"cleanerguardian2",w.entities.Cleaner,"bot_station",14,9,{faction:w.factions.Guardians,ai:w.ais.guardian}),this.state=J0(this.state,"cleanerguardian3",w.entities.Cleaner,"bot_station",16,9,{faction:w.factions.Guardians,ai:w.ais.guardian}),this.state=J0(this.state,"cleanerguardian4",w.entities.Cleaner,"bot_station",18,9,{faction:w.factions.Guardians,ai:w.ais.guardian}),this.state=J0(this.state,"cleanerguardian5",w.entities.Cleaner,"bot_station",20,9,{faction:w.factions.Guardians,ai:w.ais.guardian}),this.state=J0(this.state,"cleanerguardian6",w.entities.Cleaner,"bot_station",22,9,{faction:w.factions.Guardians,ai:w.ais.guardian}),this.state=J0(this.state,"cleanerguardian7",w.entities.Cleaner,"bot_station",24,9,{faction:w.factions.Guardians,ai:w.ais.guardian}),this.state=J0(this.state,"cleanerguardian8",w.entities.Cleaner,"bot_station",26,9,{faction:w.factions.Guardians,ai:w.ais.guardian}),this.state=J0(this.state,"cleanerguardian9",w.entities.Cleaner,"bot_station",28,9,{faction:w.factions.Guardians,ai:w.ais.guardian}),this.state=U0(this.state,w.items.battery,"bot_dormitory",13,8),this.state=U0(this.state,w.items.junk,"bot_dormitory_hidden",1,2),this.state=U0(this.state,w.items.battery,"bot_dormitory_hidden",2,2),this.state=U0(this.state,w.items.shocker,"bot_bar",10,11),this.state=U0(this.state,w.items.hammer,"bot_elevator",12,3),this.state=U0(this.state,w.items.wrench,"bot_factory",45,19),this.state=U0(this.state,w.items.battery,"bot_factory",4,13);for(let Q=2;Q<=8;Q++)for(let $=2;$<=8;$++)this.state=U0(this.state,w.items.junk,"bot_factory",$,Q);this.state=fJ(this.state,"bot_bar",14,3),this.state=fJ(this.state,"bot_bar",14,12),this.state=NJ(this.state,"playground",9,9),this.state=NJ(this.state,"playground",10,9);for(let Q=1;Q<=18;Q++)this.state=U0(this.state,w.items.battery,"playground",Q,18);return this.state.currentMapId="botmos_hull_selection",this.state=J0(this.state,j0(),w.entities.Spirit,this.state.currentMapId,9,5,{faction:w.factions.Spirits}),this.state}update(Q){let $=this.state.entities[j0()];if($){if(Q){if(Q===w.commands.M)this.state._menuOpen=!this.state._menuOpen;else this.state=XV(this.state,$,Q),this.state=CV(this.state);this.state.actionLog.push(Q.key)}}else sJ("Game over! "+this.state.actionLog.length+" Turns: "+this.state.actionLog.join("")),this.state.currentMapId="botmos_hull_selection",this.state=J0(this.state,j0(),w.entities.Spirit,this.state.currentMapId,9,5,{faction:w.factions.Spirits});return this.state}play(Q){for(let $=0;$<Q.length;$++){const Y=Q[$];this.update(w.commands[Y])}return this.state}}var C0=function(Q){const $=Date.now();if(TJ!==void 0&&$-vV>=80)vV=$,TJ(Q)},q0=function(Q){Q.preventDefault(),Q.stopPropagation()},pZ=function(){let Q=null;if(p.right)Q=w.commands.E;if(p.left)Q=w.commands.W;if(p.down)Q=w.commands.S;if(p.up)Q=w.commands.N;if(p.up&&p.right){if(Q===w.commands.N&&s0===w.commands.N)Q=w.commands.E}if(p.up&&p.left){if(Q===w.commands.N&&s0===w.commands.N)Q=w.commands.W}if(p.down&&p.right){if(Q===w.commands.S&&s0===w.commands.S)Q=w.commands.E}if(p.down&&p.left){if(Q===w.commands.S&&s0===w.commands.S)Q=w.commands.W}if(p.a)Q=w.commands.A;if(p.b)Q=w.commands.B;if(p.menu)Q=w.commands.M;if(s0=Q,Q!==null)uJ.push(Q)},AV=function(){pZ();let Q=uJ.shift()||null;return uJ=[],Q};function fV(Q){TJ=Q}var p={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1},uJ=[],TJ=void 0,vV=0;document.body.addEventListener("keydown",function(Q){if(Q.defaultPrevented)return;switch(Q.key){case"w":case"ArrowUp":p.up=!0,q0(Q);break;case"a":case"ArrowLeft":p.left=!0,q0(Q);break;case"s":case"ArrowDown":p.down=!0,q0(Q);break;case"d":case"ArrowRight":p.right=!0,q0(Q);break;case"x":p.a=!0,q0(Q);break;case" ":case"y":case"z":p.b=!0,q0(Q);break;case"m":p.menu=!0,q0(Q);break;default:}C0(AV())});document.body.addEventListener("keyup",function(Q){if(Q.defaultPrevented)return;switch(Q.key){case"w":case"ArrowUp":p.up=!1,q0(Q);break;case"a":case"ArrowLeft":p.left=!1,q0(Q);break;case"s":case"ArrowDown":p.down=!1,q0(Q);break;case"d":case"ArrowRight":p.right=!1,q0(Q);break;case"x":p.a=!1,q0(Q);break;case" ":case"y":case"z":p.b=!1,q0(Q);break;case"m":p.menu=!1,q0(Q);break;default:}});document.body.addEventListener("click",function(Q){const{clientX:$,clientY:Y}=Q,D=document.body.clientWidth/3,v=document.body.clientHeight/3;if($>=D&&$<2*D&&Y<v)C0(w.commands.N),q0(Q);else if($<D&&Y<v)C0(w.commands.B),q0(Q);else if($>=2*D&&Y<v)C0(w.commands.A),q0(Q);else if($<D&&Y>=v&&Y<2*v)C0(w.commands.W),q0(Q);else if($>=2*D&&Y>=v&&Y<2*v)C0(w.commands.E),q0(Q);else if($>=D&&$<2*D&&Y>=2*v)C0(w.commands.S),q0(Q);else if($>=D&&$<2*D&&Y>=v&&Y<2*v)C0(w.commands.M),q0(Q)});var s0=null,NV=void 0;window.addEventListener("gamepadconnected",(Q)=>{NV=setInterval(function(){let $=navigator.getGamepads()[Q.gamepad?.index];if(p.right=$.buttons[15].pressed,p.left=$.buttons[14].pressed,p.down=$.buttons[13].pressed,p.up=$.buttons[12].pressed,p.a=$.buttons[0].pressed||$.buttons[2].pressed,p.b=$.buttons[1].pressed||$.buttons[3].pressed,p.menu=$.buttons[9].pressed,p.right||p.left||p.down||p.up||p.a||p.b||p.menu)C0(AV())},100)});window.addEventListener("gamepaddisconnected",(Q)=>{clearInterval(NV)});var SV=CJ(XJ(),1);var LJ=function(Q){return w.colors[Q]},cZ=function(Q,$){let Y=Q.currentMapId,H=Q.maps[Y];for(var D=0;D<$.height;D++)for(var E=0;E<$.width;E++){var v=H.getTile($.x+E,$.y+D),b=w.colors.black,N=w.colors.white,I="";if(!!v&&!!v.type)b=LJ(v.type.bg),N=LJ(v.type.fg),I=v.options.sign||v.type.icon;I0.draw(E,D,I,N,b)}const x=KJ(Q,Y);for(let y=0;y<x.length;y++){let c=x[y];I0.drawOver(c.x-$.x,c.y-$.y,c.type.icon,LJ(c.type.color))}const r=j0(),m=Q.entities[r],e=((m||{}).options||{}).faction||void 0,d=k0(Q,Y);for(let y=0;y<d.length;y++){const c=d[y];let $0=e===c.options.faction?w.colors.white:LJ(c.options.faction.color);if(t.highlightEnemy&&!M0(c))$0=e===c.options.faction?w.colors.cybergreen:w.colors.cybermagenta;if(c===m)$0=w.colors.white;I0.drawOver(c.x-$.x,c.y-$.y,c.type.icon,$0)}if(!!m&&t.showUI){let y="";const c=l0(Q,r);if(c)y+=c.type.name+" ";const $0=VJ(Q,m);let G0=m.type.icon+" "+m.energy+"/"+m.energyMax+" "+y+"X:"+$0.A.name+" Y:"+$0.B.name,H0=Y0.height-1;if(m.y-$.y>=Y0.height-3)H0=0;I0.drawText(0,H0,"%c{white}%b{black}"+G0,$.width)}if(Q._menuOpen){const y=[];if(y.push("BotMos Menu"),y.push(""),m){y.push("Hull: "+m.type.icon+" ("+m.type.name+")"),y.push("Energy: "+m.energy+"/"+m.energyMax),y.push("Gold: "+m.gold),y.push("Matter: "+m.matter);const c=l0(Q,r);if(c)y.push("Tool: "+c.type.name);if(t.debug)y.push("DEBUG Position: "+m.x+","+m.y),y.push("DEBUG Map: "+m.mapId)}for(let c=0;c<y.length;c++)I0.drawText(0,c,"%c{#74ee15}%b{black}"+y[c],$.width)}for(let y=0;y<AJ.length;y++){let c=AJ[y];I0.drawText(0,y,"%c{green}%b{black}"+c,$.width)}};async function g0(Q){const $=Q.entities[j0()],Y=$?$:IV,H=dZ(Y);cZ(Q,H),IV=Y}async function bV(Q){I0.setOptions(Q)}var dZ=function(Q){return{x:Math.min(Math.max(0,Q.x-Math.floor(Y0.width/2)),vJ.WIDTH-Y0.width),y:Math.min(Math.max(0,Q.y-Math.floor(Y0.height/2)),vJ.HEIGHT-Y0.height),width:Y0.width,height:Y0.height}},I0=new SV.Display(Y0);document.body.appendChild(I0.getContainer());var IV={x:0,y:0};var h0=new BJ;window.onload=function(){g0(h0.init())};window.onresize=function(){const Q=typeof window!=="undefined"?window.innerWidth:0,$=typeof window!=="undefined"?window.innerHeight:0;t.cameraWidth=Math.floor(Q/t.fontSize),t.cameraHeight=Math.floor($/t.fontSize),Y0.width=Math.floor(t.cameraWidth*(1/t.zoom)),Y0.height=Math.floor(t.cameraHeight*(1/t.zoom)),bV(Y0),g0(h0.state)};fV(function(Q){g0(h0.update(Q))});if(!window.BMActionLog)window.BMActionLog=function(){return h0.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(Q){g0(h0.play(Q))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){t.debug=!t.debug,g0(h0.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){t.showUI=!t.showUI,g0(h0.state)};window.focus();
