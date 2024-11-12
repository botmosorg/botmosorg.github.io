var WJ=Object.create;var{getPrototypeOf:EJ,defineProperty:oQ,getOwnPropertyNames:RJ}=Object;var jJ=Object.prototype.hasOwnProperty;var NQ=(J,q,G)=>{G=J!=null?WJ(EJ(J)):{};let H=q||!J||!J.__esModule?oQ(G,"default",{value:J,enumerable:!0}):G;for(let D of RJ(J))if(!jJ.call(H,D))oQ(H,D,{get:()=>J[D],enumerable:!0});return H};var CJ=(J,q)=>()=>(q||J((q={exports:{}}).exports,q),q.exports);var XQ=CJ((BQ,GZ)=>{function F0(J){if(J===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return J}function U0(J,q){J.prototype=Object.create(q.prototype),J.prototype.constructor=J,J.__proto__=q}(function(J,q){typeof BQ==="object"&&typeof GZ!=="undefined"?q(BQ):typeof define==="function"&&define.amd?define(["exports"],q):q(J.ROT={})})(BQ,function(J){var q=0.00000000023283064365386963,G=function(){function B(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var X=B.prototype;return X.getSeed=function z(){return this._seed},X.setSeed=function z(U){return U=U<1?1/U:U,this._seed=U,this._s0=(U>>>0)*q,U=U*69069+1>>>0,this._s1=U*q,U=U*69069+1>>>0,this._s2=U*q,this._c=1,this},X.getUniform=function z(){var U=2091639*this._s0+this._c*q;return this._s0=this._s1,this._s1=this._s2,this._c=U|0,this._s2=U-this._c,this._s2},X.getUniformInt=function z(U,Q){var Z=Math.max(U,Q),V=Math.min(U,Q);return Math.floor(this.getUniform()*(Z-V+1))+V},X.getNormal=function z(U,Q){if(U===void 0)U=0;if(Q===void 0)Q=1;var Z,V,K;do Z=2*this.getUniform()-1,V=2*this.getUniform()-1,K=Z*Z+V*V;while(K>1||K==0);var $=Z*Math.sqrt(-2*Math.log(K)/K);return U+$*Q},X.getPercentage=function z(){return 1+Math.floor(this.getUniform()*100)},X.getItem=function z(U){if(!U.length)return null;return U[Math.floor(this.getUniform()*U.length)]},X.shuffle=function z(U){var Q=[],Z=U.slice();while(Z.length){var V=Z.indexOf(this.getItem(Z));Q.push(Z.splice(V,1)[0])}return Q},X.getWeightedValue=function z(U){var Q=0;for(var Z in U)Q+=U[Z];var V=this.getUniform()*Q,K,$=0;for(K in U)if($+=U[K],V<$)return K;return K},X.getState=function z(){return[this._s0,this._s1,this._s2,this._c]},X.setState=function z(U){return this._s0=U[0],this._s1=U[1],this._s2=U[2],this._c=U[3],this},X.clone=function z(){var U=new B;return U.setState(this.getState())},B}(),H=new G().setSeed(Date.now()),D=function(){function B(){}var X=B.prototype;return X.getContainer=function z(){return null},X.setOptions=function z(U){this._options=U},B}(),R=function(B){U0(X,B);function X(){var U=B.call(this)||this;return U._ctx=document.createElement("canvas").getContext("2d"),U}var z=X.prototype;return z.schedule=function U(Q){requestAnimationFrame(Q)},z.getContainer=function U(){return this._ctx.canvas},z.setOptions=function U(Q){B.prototype.setOptions.call(this,Q);var Z=Q.fontStyle?Q.fontStyle+" ":"",V=Z+" "+Q.fontSize+"px "+Q.fontFamily;this._ctx.font=V,this._updateSize(),this._ctx.font=V,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},z.clear=function U(){this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height)},z.eventToPosition=function U(Q,Z){var V=this._ctx.canvas,K=V.getBoundingClientRect();if(Q-=K.left,Z-=K.top,Q*=V.width/K.width,Z*=V.height/K.height,Q<0||Z<0||Q>=V.width||Z>=V.height)return[-1,-1];return this._normalizedEventToPosition(Q,Z)},X}(D);function N(B,X){return(B%X+X)%X}function u(B,X,z){if(X===void 0)X=0;if(z===void 0)z=1;if(B<X)return X;if(B>z)return z;return B}function A(B){return B.charAt(0).toUpperCase()+B.substring(1)}function b(B){for(var X=arguments.length,z=new Array(X>1?X-1:0),U=1;U<X;U++)z[U-1]=arguments[U];var Q=b.map,Z=function V(K,$,Y,L){if(B.charAt(L-1)=="%")return K.substring(1);if(!z.length)return K;var P=z[0],w=$||Y,M=w.split(","),O=M.shift()||"",W=Q[O.toLowerCase()];if(!W)return K;P=z.shift();var E=P[W].apply(P,M),S=O.charAt(0);if(S!=S.toLowerCase())E=A(E);return E};return B.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,Z)}b.map={s:"toString"};var l=Object.freeze({mod:N,clamp:u,capitalize:A,format:b}),n=function(B){U0(X,B);function X(){var U=B.call(this)||this;return U._spacingX=0,U._spacingY=0,U._hexSize=0,U}var z=X.prototype;return z.draw=function U(Q,Z){var V=Q[0],K=Q[1],$=Q[2],Y=Q[3],L=Q[4],P=[(V+1)*this._spacingX,K*this._spacingY+this._hexSize];if(this._options.transpose)P.reverse();if(Z)this._ctx.fillStyle=L,this._fill(P[0],P[1]);if(!$)return;this._ctx.fillStyle=Y;var w=[].concat($);for(var M=0;M<w.length;M++)this._ctx.fillText(w[M],P[0],Math.ceil(P[1]))},z.computeSize=function U(Q,Z){if(this._options.transpose)Q+=Z,Z=Q-Z,Q-=Z;var V=Math.floor(Q/this._spacingX)-1,K=Math.floor((Z-2*this._hexSize)/this._spacingY+1);return[V,K]},z.computeFontSize=function U(Q,Z){if(this._options.transpose)Q+=Z,Z=Q-Z,Q-=Z;var V=2*Q/((this._options.width+1)*Math.sqrt(3))-1,K=Z/(2+1.5*(this._options.height-1)),$=Math.min(V,K),Y=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var L=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=Y;var P=L/100;$=Math.floor($)+1;var w=2*$/(this._options.spacing*(1+P/Math.sqrt(3)));return Math.ceil(w)-1},z._normalizedEventToPosition=function U(Q,Z){var V;if(this._options.transpose)Q+=Z,Z=Q-Z,Q-=Z,V=this._ctx.canvas.width;else V=this._ctx.canvas.height;var K=V/this._options.height;if(Z=Math.floor(Z/K),N(Z,2))Q-=this._spacingX,Q=1+2*Math.floor(Q/(2*this._spacingX));else Q=2*Math.floor(Q/(2*this._spacingX));return[Q,Z]},z._fill=function U(Q,Z){var V=this._hexSize,K=this._options.border,$=this._ctx;if($.beginPath(),this._options.transpose)$.moveTo(Q-V+K,Z),$.lineTo(Q-V/2+K,Z+this._spacingX-K),$.lineTo(Q+V/2-K,Z+this._spacingX-K),$.lineTo(Q+V-K,Z),$.lineTo(Q+V/2-K,Z-this._spacingX+K),$.lineTo(Q-V/2+K,Z-this._spacingX+K),$.lineTo(Q-V+K,Z);else $.moveTo(Q,Z-V+K),$.lineTo(Q+this._spacingX-K,Z-V/2+K),$.lineTo(Q+this._spacingX-K,Z+V/2-K),$.lineTo(Q,Z+V-K),$.lineTo(Q-this._spacingX+K,Z+V/2-K),$.lineTo(Q-this._spacingX+K,Z-V/2+K),$.lineTo(Q,Z-V+K);$.fill()},z._updateSize=function U(){var Q=this._options,Z=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(Q.spacing*(Q.fontSize+Z/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var V,K;if(Q.transpose)V="height",K="width";else V="width",K="height";this._ctx.canvas[V]=Math.ceil((Q.width+1)*this._spacingX),this._ctx.canvas[K]=Math.ceil((Q.height-1)*this._spacingY+2*this._hexSize)},X}(R),m=function(){var B=function(X){U0(z,X);function z(){var Q=X.call(this)||this;return Q._spacingX=0,Q._spacingY=0,Q._canvasCache={},Q}var U=z.prototype;return U.setOptions=function Q(Z){X.prototype.setOptions.call(this,Z),this._canvasCache={}},U.draw=function Q(Z,V){if(z.cache)this._drawWithCache(Z);else this._drawNoCache(Z,V)},U._drawWithCache=function Q(Z){var V=Z[0],K=Z[1],$=Z[2],Y=Z[3],L=Z[4],P=""+$+Y+L,w;if(P in this._canvasCache)w=this._canvasCache[P];else{var M=this._options.border;w=document.createElement("canvas");var O=w.getContext("2d");if(w.width=this._spacingX,w.height=this._spacingY,O.fillStyle=L,O.fillRect(M,M,w.width-M,w.height-M),$){O.fillStyle=Y,O.font=this._ctx.font,O.textAlign="center",O.textBaseline="middle";var W=[].concat($);for(var E=0;E<W.length;E++)O.fillText(W[E],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[P]=w}this._ctx.drawImage(w,V*this._spacingX,K*this._spacingY)},U._drawNoCache=function Q(Z,V){var K=Z[0],$=Z[1],Y=Z[2],L=Z[3],P=Z[4];if(V){var w=this._options.border;this._ctx.fillStyle=P,this._ctx.fillRect(K*this._spacingX+w,$*this._spacingY+w,this._spacingX-w,this._spacingY-w)}if(!Y)return;this._ctx.fillStyle=L;var M=[].concat(Y);for(var O=0;O<M.length;O++)this._ctx.fillText(M[O],(K+0.5)*this._spacingX,Math.ceil(($+0.5)*this._spacingY))},U.computeSize=function Q(Z,V){var K=Math.floor(Z/this._spacingX),$=Math.floor(V/this._spacingY);return[K,$]},U.computeFontSize=function Q(Z,V){var K=Math.floor(Z/this._options.width),$=Math.floor(V/this._options.height),Y=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var L=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=Y;var P=L/100,w=P*$/K;if(w>1)$=Math.floor($/w);return Math.floor($/this._options.spacing)},U._normalizedEventToPosition=function Q(Z,V){return[Math.floor(Z/this._spacingX),Math.floor(V/this._spacingY)]},U._updateSize=function Q(){var Z=this._options,V=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(Z.spacing*V),this._spacingY=Math.ceil(Z.spacing*Z.fontSize),Z.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=Z.width*this._spacingX,this._ctx.canvas.height=Z.height*this._spacingY},z}(R);return B.cache=!1,B}(),Z0=function(B){U0(X,B);function X(){var U=B.call(this)||this;return U._colorCanvas=document.createElement("canvas"),U}var z=X.prototype;return z.draw=function U(Q,Z){var V=Q[0],K=Q[1],$=Q[2],Y=Q[3],L=Q[4],P=this._options.tileWidth,w=this._options.tileHeight;if(Z)if(this._options.tileColorize)this._ctx.clearRect(V*P,K*w,P,w);else this._ctx.fillStyle=L,this._ctx.fillRect(V*P,K*w,P,w);if(!$)return;var M=[].concat($),O=[].concat(Y),W=[].concat(L);for(var E=0;E<M.length;E++){var S=this._options.tileMap[M[E]];if(!S)throw new Error("Char \""+M[E]+"\" not found in tileMap");if(this._options.tileColorize){var k=this._colorCanvas,x=k.getContext("2d");x.globalCompositeOperation="source-over",x.clearRect(0,0,P,w);var y=O[E],t=W[E];if(x.drawImage(this._options.tileSet,S[0],S[1],P,w,0,0,P,w),y!="transparent")x.fillStyle=y,x.globalCompositeOperation="source-atop",x.fillRect(0,0,P,w);if(t!="transparent")x.fillStyle=t,x.globalCompositeOperation="destination-over",x.fillRect(0,0,P,w);this._ctx.drawImage(k,V*P,K*w,P,w)}else this._ctx.drawImage(this._options.tileSet,S[0],S[1],P,w,V*P,K*w,P,w)}},z.computeSize=function U(Q,Z){var V=Math.floor(Q/this._options.tileWidth),K=Math.floor(Z/this._options.tileHeight);return[V,K]},z.computeFontSize=function U(){throw new Error("Tile backend does not understand font size")},z._normalizedEventToPosition=function U(Q,Z){return[Math.floor(Q/this._options.tileWidth),Math.floor(Z/this._options.tileHeight)]},z._updateSize=function U(){var Q=this._options;this._ctx.canvas.width=Q.width*Q.tileWidth,this._ctx.canvas.height=Q.height*Q.tileHeight,this._colorCanvas.width=Q.tileWidth,this._colorCanvas.height=Q.tileHeight},X}(R);function p(B){var X,z;if(B in j)X=j[B];else{if(B.charAt(0)=="#"){var U=B.match(/[0-9a-f]/gi)||[],Q=U.map(function(V){return parseInt(V,16)});if(Q.length==3)X=Q.map(function(V){return V*17});else{for(var Z=0;Z<3;Z++)Q[Z+1]+=16*Q[Z],Q.splice(Z,1);X=Q}}else if(z=B.match(/rgb\(([0-9, ]+)\)/i))X=z[1].split(/\s*,\s*/).map(function(V){return parseInt(V)});else X=[0,0,0];j[B]=X}return X.slice()}function g(B){var X=B.slice();for(var z=arguments.length,U=new Array(z>1?z-1:0),Q=1;Q<z;Q++)U[Q-1]=arguments[Q];for(var Z=0;Z<3;Z++)for(var V=0;V<U.length;V++)X[Z]+=U[V][Z];return X}function _(B){for(var X=arguments.length,z=new Array(X>1?X-1:0),U=1;U<X;U++)z[U-1]=arguments[U];for(var Q=0;Q<3;Q++)for(var Z=0;Z<z.length;Z++)B[Q]+=z[Z][Q];return B}function K0(B){var X=B.slice();for(var z=arguments.length,U=new Array(z>1?z-1:0),Q=1;Q<z;Q++)U[Q-1]=arguments[Q];for(var Z=0;Z<3;Z++){for(var V=0;V<U.length;V++)X[Z]*=U[V][Z]/255;X[Z]=Math.round(X[Z])}return X}function z0(B){for(var X=arguments.length,z=new Array(X>1?X-1:0),U=1;U<X;U++)z[U-1]=arguments[U];for(var Q=0;Q<3;Q++){for(var Z=0;Z<z.length;Z++)B[Q]*=z[Z][Q]/255;B[Q]=Math.round(B[Q])}return B}function X0(B,X,z){if(z===void 0)z=0.5;var U=B.slice();for(var Q=0;Q<3;Q++)U[Q]=Math.round(U[Q]+z*(X[Q]-B[Q]));return U}var G0=X0;function C(B,X,z){if(z===void 0)z=0.5;var U=h(B),Q=h(X);for(var Z=0;Z<3;Z++)U[Z]+=z*(Q[Z]-U[Z]);return o(U)}var v=C;function T(B,X){if(!(X instanceof Array))X=Math.round(H.getNormal(0,X));var z=B.slice();for(var U=0;U<3;U++)z[U]+=X instanceof Array?Math.round(H.getNormal(0,X[U])):X;return z}function h(B){var X=B[0]/255,z=B[1]/255,U=B[2]/255,Q=Math.max(X,z,U),Z=Math.min(X,z,U),V=0,K,$=(Q+Z)/2;if(Q==Z)K=0;else{var Y=Q-Z;switch(K=$>0.5?Y/(2-Q-Z):Y/(Q+Z),Q){case X:V=(z-U)/Y+(z<U?6:0);break;case z:V=(U-X)/Y+2;break;case U:V=(X-z)/Y+4;break}V/=6}return[V,K,$]}function a(B,X,z){if(z<0)z+=1;if(z>1)z-=1;if(z<0.16666666666666666)return B+(X-B)*6*z;if(z<0.5)return X;if(z<0.6666666666666666)return B+(X-B)*(0.6666666666666666-z)*6;return B}function o(B){var X=B[2];if(B[1]==0)return X=Math.round(X*255),[X,X,X];else{var z=B[1],U=X<0.5?X*(1+z):X+z-X*z,Q=2*X-U,Z=a(Q,U,B[0]+0.3333333333333333),V=a(Q,U,B[0]),K=a(Q,U,B[0]-0.3333333333333333);return[Math.round(Z*255),Math.round(V*255),Math.round(K*255)]}}function f(B){var X=B.map(function(z){return u(z,0,255)});return"rgb("+X.join(",")+")"}function I(B){var X=B.map(function(z){return u(z,0,255).toString(16).padStart(2,"0")});return"#"+X.join("")}var j={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},r=Object.freeze({fromString:p,add:g,add_:_,multiply:K0,multiply_:z0,interpolate:X0,lerp:G0,interpolateHSL:C,lerpHSL:v,randomize:T,rgb2hsl:h,hsl2rgb:o,toRGB:f,toHex:I}),i=function(B){U0(X,B);function X(){var U=B.call(this)||this;U._uniforms={};try{U._gl=U._initWebGL()}catch(Q){alert(Q.message)}return U}X.isSupported=function U(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var z=X.prototype;return z.schedule=function U(Q){requestAnimationFrame(Q)},z.getContainer=function U(){return this._gl.canvas},z.setOptions=function U(Q){var Z=this;B.prototype.setOptions.call(this,Q),this._updateSize();var V=this._options.tileSet;if(V&&"complete"in V&&!V.complete)V.addEventListener("load",function(){return Z._updateTexture(V)});else this._updateTexture(V)},z.draw=function U(Q,Z){var V=this._gl,K=this._options,$=Q[0],Y=Q[1],L=Q[2],P=Q[3],w=Q[4],M=V.canvas.height-(Y+1)*K.tileHeight;if(V.scissor($*K.tileWidth,M,K.tileWidth,K.tileHeight),Z){if(K.tileColorize)V.clearColor(0,0,0,0);else V.clearColor.apply(V,_0(w));V.clear(V.COLOR_BUFFER_BIT)}if(!L)return;var O=[].concat(L),W=[].concat(w),E=[].concat(P);V.uniform2fv(this._uniforms.targetPosRel,[$,Y]);for(var S=0;S<O.length;S++){var k=this._options.tileMap[O[S]];if(!k)throw new Error("Char \""+O[S]+"\" not found in tileMap");if(V.uniform1f(this._uniforms.colorize,K.tileColorize?1:0),V.uniform2fv(this._uniforms.tilesetPosAbs,k),K.tileColorize)V.uniform4fv(this._uniforms.tint,_0(E[S])),V.uniform4fv(this._uniforms.bg,_0(W[S]));V.drawArrays(V.TRIANGLE_STRIP,0,4)}},z.clear=function U(){var Q=this._gl;Q.clearColor.apply(Q,_0(this._options.bg)),Q.scissor(0,0,Q.canvas.width,Q.canvas.height),Q.clear(Q.COLOR_BUFFER_BIT)},z.computeSize=function U(Q,Z){var V=Math.floor(Q/this._options.tileWidth),K=Math.floor(Z/this._options.tileHeight);return[V,K]},z.computeFontSize=function U(){throw new Error("Tile backend does not understand font size")},z.eventToPosition=function U(Q,Z){var V=this._gl.canvas,K=V.getBoundingClientRect();if(Q-=K.left,Z-=K.top,Q*=V.width/K.width,Z*=V.height/K.height,Q<0||Z<0||Q>=V.width||Z>=V.height)return[-1,-1];return this._normalizedEventToPosition(Q,Z)},z._initWebGL=function U(){var Q=this,Z=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=Z;var V=j0(Z,w0,B0);return Z.useProgram(V),Y0(Z),V0.forEach(function(K){return Q._uniforms[K]=Z.getUniformLocation(V,K)}),this._program=V,Z.enable(Z.BLEND),Z.blendFuncSeparate(Z.SRC_ALPHA,Z.ONE_MINUS_SRC_ALPHA,Z.ONE,Z.ONE_MINUS_SRC_ALPHA),Z.enable(Z.SCISSOR_TEST),Z},z._normalizedEventToPosition=function U(Q,Z){return[Math.floor(Q/this._options.tileWidth),Math.floor(Z/this._options.tileHeight)]},z._updateSize=function U(){var Q=this._gl,Z=this._options,V=[Z.width*Z.tileWidth,Z.height*Z.tileHeight];Q.canvas.width=V[0],Q.canvas.height=V[1],Q.viewport(0,0,V[0],V[1]),Q.uniform2fv(this._uniforms.tileSize,[Z.tileWidth,Z.tileHeight]),Q.uniform2fv(this._uniforms.targetSize,V)},z._updateTexture=function U(Q){p0(this._gl,Q)},X}(D),V0=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],w0="\n#version 300 es\n\nin vec2 tilePosRel;\nout vec2 tilesetPosPx;\n\nuniform vec2 tilesetPosAbs;\nuniform vec2 tileSize;\nuniform vec2 targetSize;\nuniform vec2 targetPosRel;\n\nvoid main() {\n\tvec2 targetPosPx = (targetPosRel + tilePosRel) * tileSize;\n\tvec2 targetPosNdc = ((targetPosPx / targetSize)-0.5)*2.0;\n\ttargetPosNdc.y *= -1.0;\n\n\tgl_Position = vec4(targetPosNdc, 0.0, 1.0);\n\ttilesetPosPx = tilesetPosAbs + tilePosRel * tileSize;\n}".trim(),B0="\n#version 300 es\nprecision highp float;\n\nin vec2 tilesetPosPx;\nout vec4 fragColor;\nuniform sampler2D image;\nuniform bool colorize;\nuniform vec4 bg;\nuniform vec4 tint;\n\nvoid main() {\n\tfragColor = vec4(0, 0, 0, 1);\n\n\tvec4 texel = texelFetch(image, ivec2(tilesetPosPx), 0);\n\n\tif (colorize) {\n\t\ttexel.rgb = tint.a * tint.rgb + (1.0-tint.a) * texel.rgb;\n\t\tfragColor.rgb = texel.a*texel.rgb + (1.0-texel.a)*bg.rgb;\n\t\tfragColor.a = texel.a + (1.0-texel.a)*bg.a;\n\t} else {\n\t\tfragColor = texel;\n\t}\n}".trim();function j0(B,X,z){var U=B.createShader(B.VERTEX_SHADER);if(B.shaderSource(U,X),B.compileShader(U),!B.getShaderParameter(U,B.COMPILE_STATUS))throw new Error(B.getShaderInfoLog(U)||"");var Q=B.createShader(B.FRAGMENT_SHADER);if(B.shaderSource(Q,z),B.compileShader(Q),!B.getShaderParameter(Q,B.COMPILE_STATUS))throw new Error(B.getShaderInfoLog(Q)||"");var Z=B.createProgram();if(B.attachShader(Z,U),B.attachShader(Z,Q),B.linkProgram(Z),!B.getProgramParameter(Z,B.LINK_STATUS))throw new Error(B.getProgramInfoLog(Z)||"");return Z}function Y0(B){var X=new Float32Array([0,0,1,0,0,1,1,1]),z=B.createBuffer();B.bindBuffer(B.ARRAY_BUFFER,z),B.bufferData(B.ARRAY_BUFFER,X,B.STATIC_DRAW),B.enableVertexAttribArray(0),B.vertexAttribPointer(0,2,B.FLOAT,!1,0,0)}function p0(B,X){var z=B.createTexture();return B.bindTexture(B.TEXTURE_2D,z),B.texParameteri(B.TEXTURE_2D,B.TEXTURE_MAG_FILTER,B.NEAREST),B.texParameteri(B.TEXTURE_2D,B.TEXTURE_MIN_FILTER,B.NEAREST),B.texParameteri(B.TEXTURE_2D,B.TEXTURE_WRAP_S,B.REPEAT),B.texParameteri(B.TEXTURE_2D,B.TEXTURE_WRAP_T,B.REPEAT),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,0),B.texImage2D(B.TEXTURE_2D,0,B.RGBA,B.RGBA,B.UNSIGNED_BYTE,X),z}var A0={};function _0(B){if(!(B in A0)){var X;if(B=="transparent")X=[0,0,0,0];else if(B.indexOf("rgba")>-1){X=(B.match(/[\d.]+/g)||[]).map(Number);for(var z=0;z<3;z++)X[z]=X[z]/255}else X=p(B).map(function(U){return U/255}),X.push(1);A0[B]=X}return A0[B]}function uZ(B){return"\x1B[0;48;5;"+HQ(B)+"m\x1B[2J"}function kZ(B,X){return"\x1B[0;38;5;"+HQ(B)+";48;5;"+HQ(X)+"m"}function TZ(B,X){return"\x1B["+(X+1)+";"+(B+1)+"H"}function HQ(B){var X=256,z=6,U=z/X,Q=p(B),Z=Math.floor(Q[0]*U),V=Math.floor(Q[1]*U),K=Math.floor(Q[2]*U);return Z*36+V*6+K*1+16}var xQ=function(B){U0(X,B);function X(){var U=B.call(this)||this;return U._offset=[0,0],U._cursor=[-1,-1],U._lastColor="",U}var z=X.prototype;return z.schedule=function U(Q){setTimeout(Q,16.666666666666668)},z.setOptions=function U(Q){B.prototype.setOptions.call(this,Q);var Z=[Q.width,Q.height],V=this.computeSize();this._offset=V.map(function(K,$){return Math.floor((K-Z[$])/2)})},z.clear=function U(){process.stdout.write(uZ(this._options.bg))},z.draw=function U(Q,Z){var V=Q[0],K=Q[1],$=Q[2],Y=Q[3],L=Q[4],P=this._offset[0]+V,w=this._offset[1]+K,M=this.computeSize();if(P<0||P>=M[0])return;if(w<0||w>=M[1])return;if(P!==this._cursor[0]||w!==this._cursor[1])process.stdout.write(TZ(P,w)),this._cursor[0]=P,this._cursor[1]=w;if(Z){if(!$)$=" "}if(!$)return;var O=kZ(Y,L);if(O!==this._lastColor)process.stdout.write(O),this._lastColor=O;if($!="\t"){var W=[].concat($);process.stdout.write(W[0])}if(this._cursor[0]++,this._cursor[0]>=M[0])this._cursor[0]=0,this._cursor[1]++},z.computeFontSize=function U(){throw new Error("Terminal backend has no notion of font size")},z.eventToPosition=function U(Q,Z){return[Q,Z]},z.computeSize=function U(){return[process.stdout.columns,process.stdout.rows]},X}(D),gZ=/%([bc]){([^}]*)}/g,S0=0,u0=1,PQ=2,FQ=3;function hZ(B,X){var z={width:0,height:1},U=wQ(B,X),Q=0;for(var Z=0;Z<U.length;Z++){var V=U[Z];switch(V.type){case S0:Q+=V.value.length;break;case u0:z.height++,z.width=Math.max(z.width,Q),Q=0;break}}return z.width=Math.max(z.width,Q),z}function wQ(B,X){var z=[],U=0;B.replace(gZ,function(Z,V,K,$){var Y=B.substring(U,$);if(Y.length)z.push({type:S0,value:Y});return z.push({type:V=="c"?PQ:FQ,value:K.trim()}),U=$+Z.length,""});var Q=B.substring(U);if(Q.length)z.push({type:S0,value:Q});return xZ(z,X)}function xZ(B,X){if(!X)X=1/0;var z=0,U=0,Q=-1;while(z<B.length){var Z=B[z];if(Z.type==u0)U=0,Q=-1;if(Z.type!=S0){z++;continue}while(U==0&&Z.value.charAt(0)==" ")Z.value=Z.value.substring(1);var V=Z.value.indexOf("\n");if(V!=-1){Z.value=a0(B,z,V,!0);var K=Z.value.split("");while(K.length&&K[K.length-1]==" ")K.pop();Z.value=K.join("")}if(!Z.value.length){B.splice(z,1);continue}if(U+Z.value.length>X){var $=-1;while(!0){var Y=Z.value.indexOf(" ",$+1);if(Y==-1)break;if(U+Y>X)break;$=Y}if($!=-1)Z.value=a0(B,z,$,!0);else if(Q!=-1){var L=B[Q],P=L.value.lastIndexOf(" ");L.value=a0(B,Q,P,!0),z=Q}else Z.value=a0(B,z,X-U,!1)}else if(U+=Z.value.length,Z.value.indexOf(" ")!=-1)Q=z;z++}B.push({type:u0});var w=null;for(var M=0;M<B.length;M++){var O=B[M];switch(O.type){case S0:w=O;break;case u0:if(w){var W=w.value.split("");while(W.length&&W[W.length-1]==" ")W.pop();w.value=W.join("")}w=null;break}}return B.pop(),B}function a0(B,X,z,U){var Q={type:u0},Z={type:S0,value:B[X].value.substring(z+(U?1:0))};return B.splice(X+1,0,Q,Z),B[X].value.substring(0,z)}var mZ=Object.freeze({TYPE_TEXT:S0,TYPE_NEWLINE:u0,TYPE_FG:PQ,TYPE_BG:FQ,measure:hZ,tokenize:wQ}),DQ=80,OQ=25,L0={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},_Z={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},yZ={hex:n,rect:m,tile:Z0,"tile-gl":i,term:xQ},pZ={width:DQ,height:OQ,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},cZ=function(){var B=function(){function X(U){if(U===void 0)U={};this._data={},this._dirty=!1,this._options={},U=Object.assign({},pZ,U),this.setOptions(U),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var z=X.prototype;return z.DEBUG=function U(Q,Z,V){var K=[this._options.bg,this._options.fg];this.draw(Q,Z,null,null,K[V%K.length])},z.clear=function U(){this._data={},this._dirty=!0},z.setOptions=function U(Q){if(Object.assign(this._options,Q),Q.width||Q.height||Q.fontSize||Q.fontFamily||Q.spacing||Q.layout){if(Q.layout){var Z=yZ[Q.layout];this._backend=new Z}this._backend.setOptions(this._options),this._dirty=!0}return this},z.getOptions=function U(){return this._options},z.getContainer=function U(){return this._backend.getContainer()},z.computeSize=function U(Q,Z){return this._backend.computeSize(Q,Z)},z.computeFontSize=function U(Q,Z){return this._backend.computeFontSize(Q,Z)},z.computeTileSize=function U(Q,Z){var V=Math.floor(Q/this._options.width),K=Math.floor(Z/this._options.height);return[V,K]},z.eventToPosition=function U(Q){var Z,V;if("touches"in Q)Z=Q.touches[0].clientX,V=Q.touches[0].clientY;else Z=Q.clientX,V=Q.clientY;return this._backend.eventToPosition(Z,V)},z.draw=function U(Q,Z,V,K,$){if(!K)K=this._options.fg;if(!$)$=this._options.bg;var Y=Q+","+Z;if(this._data[Y]=[Q,Z,V,K,$],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[Y]=!0},z.drawOver=function U(Q,Z,V,K,$){var Y=Q+","+Z,L=this._data[Y];if(L)L[2]=V||L[2],L[3]=K||L[3],L[4]=$||L[4];else this.draw(Q,Z,V,K,$)},z.drawText=function U(Q,Z,V,K){var $=null,Y=null,L=Q,P=Z,w=1;if(!K)K=this._options.width-Q;var M=wQ(V,K);while(M.length){var O=M.shift();switch(O.type){case S0:var W=!1,E=!1,S=!1,k=!1;for(var x=0;x<O.value.length;x++){var y=O.value.charCodeAt(x),t=O.value.charAt(x);if(this._options.layout==="term"){var s=y>>8,q0=s===17||s>=46&&s<=159||s>=172&&s<=215||y>=43360&&y<=43391;if(q0){this.draw(L+0,P,t,$,Y),this.draw(L+1,P,"\t",$,Y),L+=2;continue}}if(S=y>65280&&y<65377||y>65500&&y<65512||y>65518,W=t.charCodeAt(0)==32||t.charCodeAt(0)==12288,k&&!S&&!W)L++;if(S&&!E)L++;this.draw(L++,P,t,$,Y),E=W,k=S}break;case PQ:$=O.value||null;break;case FQ:Y=O.value||null;break;case u0:L=Q,P++,w++;break}}return w},z._tick=function U(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var Q in this._data)this._draw(Q,!1)}else for(var Z in this._dirty)this._draw(Z,!0);this._dirty=!1},z._draw=function U(Q,Z){var V=this._data[Q];if(V[4]!=this._options.bg)Z=!0;this._backend.draw(V,Z)},X}();return B.Rect=m,B.Hex=n,B.Tile=Z0,B.TileGL=i,B.Term=xQ,B}(),dZ=function(){function B(z){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,z),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var U=0;U<this._options.order;U++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var X=B.prototype;return X.clear=function z(){this._data={},this._priorValues={}},X.generate=function z(){var U=[this._sample(this._prefix)];while(U[U.length-1]!=this._boundary)U.push(this._sample(U));return this._join(U.slice(0,-1))},X.observe=function z(U){var Q=this._split(U);for(var Z=0;Z<Q.length;Z++)this._priorValues[Q[Z]]=this._options.prior;Q=this._prefix.concat(Q).concat(this._suffix);for(var V=this._options.order;V<Q.length;V++){var K=Q.slice(V-this._options.order,V),$=Q[V];for(var Y=0;Y<K.length;Y++){var L=K.slice(Y);this._observeEvent(L,$)}}},X.getStats=function z(){var U=[],Q=Object.keys(this._priorValues).length;Q--,U.push("distinct samples: "+Q);var Z=Object.keys(this._data).length,V=0;for(var K in this._data)V+=Object.keys(this._data[K]).length;return U.push("dictionary size (contexts): "+Z),U.push("dictionary size (events): "+V),U.join(", ")},X._split=function z(U){return U.split(this._options.words?/\s+/:"")},X._join=function z(U){return U.join(this._options.words?" ":"")},X._observeEvent=function z(U,Q){var Z=this._join(U);if(!(Z in this._data))this._data[Z]={};var V=this._data[Z];if(!(Q in V))V[Q]=0;V[Q]++},X._sample=function z(U){U=this._backoff(U);var Q=this._join(U),Z=this._data[Q],V={};if(this._options.prior){for(var K in this._priorValues)V[K]=this._priorValues[K];for(var $ in Z)V[$]+=Z[$]}else V=Z;return H.getWeightedValue(V)},X._backoff=function z(U){if(U.length>this._options.order)U=U.slice(-this._options.order);else if(U.length<this._options.order)U=this._prefix.slice(0,this._options.order-U.length).concat(U);while(!(this._join(U)in this._data)&&U.length>0)U=U.slice(1);return U},B}(),mQ=function(){function B(){this.heap=[],this.timestamp=0}var X=B.prototype;return X.lessThan=function z(U,Q){return U.key==Q.key?U.timestamp<Q.timestamp:U.key<Q.key},X.shift=function z(U){this.heap=this.heap.map(function(Q){var{key:Z,value:V,timestamp:K}=Q;return{key:Z+U,value:V,timestamp:K}})},X.len=function z(){return this.heap.length},X.push=function z(U,Q){this.timestamp+=1;var Z=this.len();this.heap.push({value:U,timestamp:this.timestamp,key:Q}),this.updateUp(Z)},X.pop=function z(){if(this.len()==0)throw new Error("no element to pop");var U=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return U},X.find=function z(U){for(var Q=0;Q<this.len();Q++)if(U==this.heap[Q].value)return this.heap[Q];return null},X.remove=function z(U){var Q=null;for(var Z=0;Z<this.len();Z++)if(U==this.heap[Z].value)Q=Z;if(Q===null)return!1;if(this.len()>1){var V=this.heap.pop();if(V.value!=U)this.heap[Q]=V,this.updateDown(Q);return!0}else this.heap.pop();return!0},X.parentNode=function z(U){return Math.floor((U-1)/2)},X.leftChildNode=function z(U){return 2*U+1},X.rightChildNode=function z(U){return 2*U+2},X.existNode=function z(U){return U>=0&&U<this.heap.length},X.swap=function z(U,Q){var Z=this.heap[U];this.heap[U]=this.heap[Q],this.heap[Q]=Z},X.minNode=function z(U){var Q=U.filter(this.existNode.bind(this)),Z=Q[0];for(var $=Q,V=Array.isArray($),K=0,$=V?$:$[Symbol.iterator]();;){var Y;if(V){if(K>=$.length)break;Y=$[K++]}else{if(K=$.next(),K.done)break;Y=K.value}var L=Y;if(this.lessThan(this.heap[L],this.heap[Z]))Z=L}return Z},X.updateUp=function z(U){if(U==0)return;var Q=this.parentNode(U);if(this.existNode(Q)&&this.lessThan(this.heap[U],this.heap[Q]))this.swap(U,Q),this.updateUp(Q)},X.updateDown=function z(U){var Q=this.leftChildNode(U),Z=this.rightChildNode(U);if(!this.existNode(Q))return;var V=this.minNode([U,Q,Z]);if(V!=U)this.swap(U,V),this.updateDown(V)},X.debugPrint=function z(){console.log(this.heap)},B}(),_Q=function(){function B(){this._time=0,this._events=new mQ}var X=B.prototype;return X.getTime=function z(){return this._time},X.clear=function z(){return this._events=new mQ,this},X.add=function z(U,Q){this._events.push(U,Q)},X.get=function z(){if(!this._events.len())return null;var U=this._events.pop(),Q=U.key,Z=U.value;if(Q>0)this._time+=Q,this._events.shift(-Q);return Z},X.getEventTime=function z(U){var Q=this._events.find(U);if(Q){var Z=Q.key;return Z}return},X.remove=function z(U){return this._events.remove(U)},B}(),MQ=function(){function B(){this._queue=new _Q,this._repeat=[],this._current=null}var X=B.prototype;return X.getTime=function z(){return this._queue.getTime()},X.add=function z(U,Q){if(Q)this._repeat.push(U);return this},X.getTimeOf=function z(U){return this._queue.getEventTime(U)},X.clear=function z(){return this._queue.clear(),this._repeat=[],this._current=null,this},X.remove=function z(U){var Q=this._queue.remove(U),Z=this._repeat.indexOf(U);if(Z!=-1)this._repeat.splice(Z,1);if(this._current==U)this._current=null;return Q},X.next=function z(){return this._current=this._queue.get(),this._current},B}(),lZ=function(B){U0(X,B);function X(){return B.apply(this,arguments)||this}var z=X.prototype;return z.add=function U(Q,Z){return this._queue.add(Q,0),B.prototype.add.call(this,Q,Z)},z.next=function U(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return B.prototype.next.call(this)},X}(MQ),nZ=function(B){U0(X,B);function X(){return B.apply(this,arguments)||this}var z=X.prototype;return z.add=function U(Q,Z,V){return this._queue.add(Q,V!==void 0?V:1/Q.getSpeed()),B.prototype.add.call(this,Q,Z)},z.next=function U(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return B.prototype.next.call(this)},X}(MQ),rZ=function(B){U0(X,B);function X(){var U=B.call(this)||this;return U._defaultDuration=1,U._duration=U._defaultDuration,U}var z=X.prototype;return z.add=function U(Q,Z,V){return this._queue.add(Q,V||this._defaultDuration),B.prototype.add.call(this,Q,Z)},z.clear=function U(){return this._duration=this._defaultDuration,B.prototype.clear.call(this)},z.remove=function U(Q){if(Q==this._current)this._duration=this._defaultDuration;return B.prototype.remove.call(this,Q)},z.next=function U(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return B.prototype.next.call(this)},z.setDuration=function U(Q){if(this._current)this._duration=Q;return this},X}(MQ),sZ={Simple:lZ,Speed:nZ,Action:rZ},WQ=function(){function B(z,U){if(U===void 0)U={};this._lightPasses=z,this._options=Object.assign({topology:8},U)}var X=B.prototype;return X._getCircle=function z(U,Q,Z){var V=[],K,$,Y;switch(this._options.topology){case 4:$=1,Y=[0,1],K=[L0[8][7],L0[8][1],L0[8][3],L0[8][5]];break;case 6:K=L0[6],$=1,Y=[-1,1];break;case 8:K=L0[4],$=2,Y=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var L=U+Y[0]*Z,P=Q+Y[1]*Z;for(var w=0;w<K.length;w++)for(var M=0;M<Z*$;M++)V.push([L,P]),L+=K[w][0],P+=K[w][1];return V},B}(),oZ=function(B){U0(X,B);function X(){return B.apply(this,arguments)||this}var z=X.prototype;return z.compute=function U(Q,Z,V,K){if(K(Q,Z,0,1),!this._lightPasses(Q,Z))return;var $=[],Y,L,P,w,M;for(var O=1;O<=V;O++){var W=this._getCircle(Q,Z,O),E=360/W.length;for(var S=0;S<W.length;S++){if(P=W[S][0],w=W[S][1],Y=E*(S-0.5),L=Y+E,M=!this._lightPasses(P,w),this._visibleCoords(Math.floor(Y),Math.ceil(L),M,$))K(P,w,O,1);if($.length==2&&$[0]==0&&$[1]==360)return}}},z._visibleCoords=function U(Q,Z,V,K){if(Q<0){var $=this._visibleCoords(0,Z,V,K),Y=this._visibleCoords(360+Q,360,V,K);return $||Y}var L=0;while(L<K.length&&K[L]<Q)L++;if(L==K.length){if(V)K.push(Q,Z);return!0}var P=0;if(L%2){while(L<K.length&&K[L]<Z)L++,P++;if(P==0)return!1;if(V)if(P%2)K.splice(L-P,P,Z);else K.splice(L-P,P);return!0}else{while(L<K.length&&K[L]<Z)L++,P++;if(Q==K[L-P]&&P==1)return!1;if(V)if(P%2)K.splice(L-P,P,Q);else K.splice(L-P,P,Q,Z);return!0}},X}(WQ),aZ=function(B){U0(X,B);function X(){return B.apply(this,arguments)||this}var z=X.prototype;return z.compute=function U(Q,Z,V,K){if(K(Q,Z,0,1),!this._lightPasses(Q,Z))return;var $=[],Y,L,P,w,M,O;for(var W=1;W<=V;W++){var E=this._getCircle(Q,Z,W),S=E.length;for(var k=0;k<S;k++){if(Y=E[k][0],L=E[k][1],w=[k?2*k-1:2*S-1,2*S],M=[2*k+1,2*S],P=!this._lightPasses(Y,L),O=this._checkVisibility(w,M,P,$),O)K(Y,L,W,O);if($.length==2&&$[0][0]==0&&$[1][0]==$[1][1])return}}},z._checkVisibility=function U(Q,Z,V,K){if(Q[0]>Z[0]){var $=this._checkVisibility(Q,[Q[1],Q[1]],V,K),Y=this._checkVisibility([0,1],Z,V,K);return($+Y)/2}var L=0,P=!1;while(L<K.length){var w=K[L],M=w[0]*Q[1]-Q[0]*w[1];if(M>=0){if(M==0&&!(L%2))P=!0;break}L++}var O=K.length,W=!1;while(O--){var E=K[O],S=Z[0]*E[1]-E[0]*Z[1];if(S>=0){if(S==0&&O%2)W=!0;break}}var k=!0;if(L==O&&(P||W))k=!1;else if(P&&W&&L+1==O&&O%2)k=!1;else if(L>O&&L%2)k=!1;if(!k)return 0;var x,y=O-L+1;if(y%2)if(L%2){var t=K[L];if(x=(Z[0]*t[1]-t[0]*Z[1])/(t[1]*Z[1]),V)K.splice(L,y,Z)}else{var s=K[O];if(x=(s[0]*Q[1]-Q[0]*s[1])/(Q[1]*s[1]),V)K.splice(L,y,Q)}else if(L%2){var q0=K[L],H0=K[O];if(x=(H0[0]*q0[1]-q0[0]*H0[1])/(q0[1]*H0[1]),V)K.splice(L,y)}else{if(V)K.splice(L,y,Q,Z);return 1}var C0=(Z[0]*Q[1]-Q[0]*Z[1])/(Q[1]*Z[1]);return x/C0},X}(WQ),f0=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],iZ=function(B){U0(X,B);function X(){return B.apply(this,arguments)||this}var z=X.prototype;return z.compute=function U(Q,Z,V,K){K(Q,Z,0,1);for(var $=0;$<f0.length;$++)this._renderOctant(Q,Z,f0[$],V,K)},z.compute180=function U(Q,Z,V,K,$){$(Q,Z,0,1);var Y=(K-1+8)%8,L=(K-2+8)%8,P=(K+1+8)%8;this._renderOctant(Q,Z,f0[L],V,$),this._renderOctant(Q,Z,f0[Y],V,$),this._renderOctant(Q,Z,f0[K],V,$),this._renderOctant(Q,Z,f0[P],V,$)},z.compute90=function U(Q,Z,V,K,$){$(Q,Z,0,1);var Y=(K-1+8)%8;this._renderOctant(Q,Z,f0[K],V,$),this._renderOctant(Q,Z,f0[Y],V,$)},z._renderOctant=function U(Q,Z,V,K,$){this._castVisibility(Q,Z,1,1,0,K+1,V[0],V[1],V[2],V[3],$)},z._castVisibility=function U(Q,Z,V,K,$,Y,L,P,w,M,O){if(K<$)return;for(var W=V;W<=Y;W++){var E=-W-1,S=-W,k=!1,x=0;while(E<=0){E+=1;var y=Q+E*L+S*P,t=Z+E*w+S*M,s=(E-0.5)/(S+0.5),q0=(E+0.5)/(S-0.5);if(q0>K)continue;if(s<$)break;if(E*E+S*S<Y*Y)O(y,t,W,1);if(!k){if(!this._lightPasses(y,t)&&W<Y)k=!0,this._castVisibility(Q,Z,W+1,K,s,Y,L,P,w,M,O),x=q0}else{if(!this._lightPasses(y,t)){x=q0;continue}k=!1,K=x}}if(k)break}},X}(WQ),tZ={DiscreteShadowcasting:oZ,PreciseShadowcasting:aZ,RecursiveShadowcasting:iZ},k0=function(){function B(z,U){if(z===void 0)z=DQ;if(U===void 0)U=OQ;this._width=z,this._height=U}var X=B.prototype;return X._fillMap=function z(U){var Q=[];for(var Z=0;Z<this._width;Z++){Q.push([]);for(var V=0;V<this._height;V++)Q[Z].push(U)}return Q},B}(),eZ=function(B){U0(X,B);function X(){return B.apply(this,arguments)||this}var z=X.prototype;return z.create=function U(Q){var Z=this._width-1,V=this._height-1;for(var K=0;K<=Z;K++)for(var $=0;$<=V;$++){var Y=K&&$&&K<Z&&$<V;Q(K,$,Y?0:1)}return this},X}(k0),yQ=function(B){U0(X,B);function X(U,Q){var Z=B.call(this,U,Q)||this;return Z._rooms=[],Z._corridors=[],Z}var z=X.prototype;return z.getRooms=function U(){return this._rooms},z.getCorridors=function U(){return this._corridors},X}(k0),pQ=function B(){},i0=function(B){U0(X,B);function X(U,Q,Z,V,K,$){var Y=B.call(this)||this;if(Y._x1=U,Y._y1=Q,Y._x2=Z,Y._y2=V,Y._doors={},K!==void 0&&$!==void 0)Y.addDoor(K,$);return Y}X.createRandomAt=function U(Q,Z,V,K,$){var Y=$.roomWidth[0],L=$.roomWidth[1],P=H.getUniformInt(Y,L);Y=$.roomHeight[0],L=$.roomHeight[1];var w=H.getUniformInt(Y,L);if(V==1){var M=Z-Math.floor(H.getUniform()*w);return new this(Q+1,M,Q+P,M+w-1,Q,Z)}if(V==-1){var O=Z-Math.floor(H.getUniform()*w);return new this(Q-P,O,Q-1,O+w-1,Q,Z)}if(K==1){var W=Q-Math.floor(H.getUniform()*P);return new this(W,Z+1,W+P-1,Z+w,Q,Z)}if(K==-1){var E=Q-Math.floor(H.getUniform()*P);return new this(E,Z-w,E+P-1,Z-1,Q,Z)}throw new Error("dx or dy must be 1 or -1")},X.createRandomCenter=function U(Q,Z,V){var K=V.roomWidth[0],$=V.roomWidth[1],Y=H.getUniformInt(K,$);K=V.roomHeight[0],$=V.roomHeight[1];var L=H.getUniformInt(K,$),P=Q-Math.floor(H.getUniform()*Y),w=Z-Math.floor(H.getUniform()*L),M=P+Y-1,O=w+L-1;return new this(P,w,M,O)},X.createRandom=function U(Q,Z,V){var K=V.roomWidth[0],$=V.roomWidth[1],Y=H.getUniformInt(K,$);K=V.roomHeight[0],$=V.roomHeight[1];var L=H.getUniformInt(K,$),P=Q-Y-1,w=Z-L-1,M=1+Math.floor(H.getUniform()*P),O=1+Math.floor(H.getUniform()*w),W=M+Y-1,E=O+L-1;return new this(M,O,W,E)};var z=X.prototype;return z.addDoor=function U(Q,Z){return this._doors[Q+","+Z]=1,this},z.getDoors=function U(Q){for(var Z in this._doors){var V=Z.split(",");Q(parseInt(V[0]),parseInt(V[1]))}return this},z.clearDoors=function U(){return this._doors={},this},z.addDoors=function U(Q){var Z=this._x1-1,V=this._x2+1,K=this._y1-1,$=this._y2+1;for(var Y=Z;Y<=V;Y++)for(var L=K;L<=$;L++){if(Y!=Z&&Y!=V&&L!=K&&L!=$)continue;if(Q(Y,L))continue;this.addDoor(Y,L)}return this},z.debug=function U(){console.log("room",this._x1,this._y1,this._x2,this._y2)},z.isValid=function U(Q,Z){var V=this._x1-1,K=this._x2+1,$=this._y1-1,Y=this._y2+1;for(var L=V;L<=K;L++)for(var P=$;P<=Y;P++)if(L==V||L==K||P==$||P==Y){if(!Q(L,P))return!1}else if(!Z(L,P))return!1;return!0},z.create=function U(Q){var Z=this._x1-1,V=this._x2+1,K=this._y1-1,$=this._y2+1,Y=0;for(var L=Z;L<=V;L++)for(var P=K;P<=$;P++){if(L+","+P in this._doors)Y=2;else if(L==Z||L==V||P==K||P==$)Y=1;else Y=0;Q(L,P,Y)}},z.getCenter=function U(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},z.getLeft=function U(){return this._x1},z.getRight=function U(){return this._x2},z.getTop=function U(){return this._y1},z.getBottom=function U(){return this._y2},X}(pQ),EQ=function(B){U0(X,B);function X(U,Q,Z,V){var K=B.call(this)||this;return K._startX=U,K._startY=Q,K._endX=Z,K._endY=V,K._endsWithAWall=!0,K}X.createRandomAt=function U(Q,Z,V,K,$){var Y=$.corridorLength[0],L=$.corridorLength[1],P=H.getUniformInt(Y,L);return new this(Q,Z,Q+V*P,Z+K*P)};var z=X.prototype;return z.debug=function U(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},z.isValid=function U(Q,Z){var V=this._startX,K=this._startY,$=this._endX-V,Y=this._endY-K,L=1+Math.max(Math.abs($),Math.abs(Y));if($)$=$/Math.abs($);if(Y)Y=Y/Math.abs(Y);var P=Y,w=-$,M=!0;for(var O=0;O<L;O++){var W=V+O*$,E=K+O*Y;if(!Z(W,E))M=!1;if(!Q(W+P,E+w))M=!1;if(!Q(W-P,E-w))M=!1;if(!M){L=O,this._endX=W-$,this._endY=E-Y;break}}if(L==0)return!1;if(L==1&&Q(this._endX+$,this._endY+Y))return!1;var S=!Q(this._endX+$+P,this._endY+Y+w),k=!Q(this._endX+$-P,this._endY+Y-w);if(this._endsWithAWall=Q(this._endX+$,this._endY+Y),(S||k)&&this._endsWithAWall)return!1;return!0},z.create=function U(Q){var Z=this._startX,V=this._startY,K=this._endX-Z,$=this._endY-V,Y=1+Math.max(Math.abs(K),Math.abs($));if(K)K=K/Math.abs(K);if($)$=$/Math.abs($);for(var L=0;L<Y;L++){var P=Z+L*K,w=V+L*$;Q(P,w,0)}return!0},z.createPriorityWalls=function U(Q){if(!this._endsWithAWall)return;var Z=this._startX,V=this._startY,K=this._endX-Z,$=this._endY-V;if(K)K=K/Math.abs(K);if($)$=$/Math.abs($);var Y=$,L=-K;Q(this._endX+K,this._endY+$),Q(this._endX+Y,this._endY+L),Q(this._endX-Y,this._endY-L)},X}(pQ),QJ=function(B){U0(X,B);function X(U,Q,Z){var V=B.call(this,U,Q)||this;return V._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(V._options,Z),V._map=[],V._dug=0,V._roomAttempts=20,V._corridorAttempts=20,V._connected=[],V._unconnected=[],V._digCallback=V._digCallback.bind(F0(F0(V))),V._canBeDugCallback=V._canBeDugCallback.bind(F0(F0(V))),V._isWallCallback=V._isWallCallback.bind(F0(F0(V))),V}var z=X.prototype;return z.create=function U(Q){var Z=Date.now();while(!0){var V=Date.now();if(V-Z>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(Q)for(var K=0;K<this._width;K++)for(var $=0;$<this._height;$++)Q(K,$,this._map[K][$]);return this},z._generateRooms=function U(){var Q=this._width-2,Z=this._height-2,V;do if(V=this._generateRoom(),this._dug/(Q*Z)>this._options.roomDugPercentage)break;while(V)},z._generateRoom=function U(){var Q=0;while(Q<this._roomAttempts){Q++;var Z=i0.createRandom(this._width,this._height,this._options);if(!Z.isValid(this._isWallCallback,this._canBeDugCallback))continue;return Z.create(this._digCallback),this._rooms.push(Z),Z}return null},z._generateCorridors=function U(){var Q=0;while(Q<this._corridorAttempts){Q++,this._corridors=[],this._map=this._fillMap(1);for(var Z=0;Z<this._rooms.length;Z++){var V=this._rooms[Z];V.clearDoors(),V.create(this._digCallback)}if(this._unconnected=H.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var K=H.getItem(this._connected);if(!K)break;var $=this._closestRoom(this._unconnected,K);if(!$)break;var Y=this._closestRoom(this._connected,$);if(!Y)break;var L=this._connectRooms($,Y);if(!L)break;if(!this._unconnected.length)return!0}}return!1},z._closestRoom=function U(Q,Z){var V=1/0,K=Z.getCenter(),$=null;for(var Y=0;Y<Q.length;Y++){var L=Q[Y],P=L.getCenter(),w=P[0]-K[0],M=P[1]-K[1],O=w*w+M*M;if(O<V)V=O,$=L}return $},z._connectRooms=function U(Q,Z){var V=Q.getCenter(),K=Z.getCenter(),$=K[0]-V[0],Y=K[1]-V[1],L,P,w,M,O,W,E;if(Math.abs($)<Math.abs(Y))w=Y>0?2:0,M=(w+2)%4,O=Z.getLeft(),W=Z.getRight(),E=0;else w=$>0?1:3,M=(w+2)%4,O=Z.getTop(),W=Z.getBottom(),E=1;if(L=this._placeInWall(Q,w),!L)return!1;if(L[E]>=O&&L[E]<=W){P=L.slice();var S=0;switch(M){case 0:S=Z.getTop()-1;break;case 1:S=Z.getRight()+1;break;case 2:S=Z.getBottom()+1;break;case 3:S=Z.getLeft()-1;break}P[(E+1)%2]=S,this._digLine([L,P])}else if(L[E]<O-1||L[E]>W+1){var k=L[E]-K[E],x=0;switch(M){case 0:case 1:x=k<0?3:1;break;case 2:case 3:x=k<0?1:3;break}if(M=(M+x)%4,P=this._placeInWall(Z,M),!P)return!1;var y=[0,0];y[E]=L[E];var t=(E+1)%2;y[t]=P[t],this._digLine([L,y,P])}else{var s=(E+1)%2;if(P=this._placeInWall(Z,M),!P)return!1;var q0=Math.round((P[s]+L[s])/2),H0=[0,0],C0=[0,0];H0[E]=L[E],H0[s]=q0,C0[E]=P[E],C0[s]=q0,this._digLine([L,H0,C0,P])}if(Q.addDoor(L[0],L[1]),Z.addDoor(P[0],P[1]),E=this._unconnected.indexOf(Q),E!=-1)this._unconnected.splice(E,1),this._connected.push(Q);if(E=this._unconnected.indexOf(Z),E!=-1)this._unconnected.splice(E,1),this._connected.push(Z);return!0},z._placeInWall=function U(Q,Z){var V=[0,0],K=[0,0],$=0;switch(Z){case 0:K=[1,0],V=[Q.getLeft(),Q.getTop()-1],$=Q.getRight()-Q.getLeft()+1;break;case 1:K=[0,1],V=[Q.getRight()+1,Q.getTop()],$=Q.getBottom()-Q.getTop()+1;break;case 2:K=[1,0],V=[Q.getLeft(),Q.getBottom()+1],$=Q.getRight()-Q.getLeft()+1;break;case 3:K=[0,1],V=[Q.getLeft()-1,Q.getTop()],$=Q.getBottom()-Q.getTop()+1;break}var Y=[],L=-2;for(var P=0;P<$;P++){var w=V[0]+P*K[0],M=V[1]+P*K[1];Y.push(null);var O=this._map[w][M]==1;if(O){if(L!=P-1)Y[P]=[w,M]}else if(L=P,P)Y[P-1]=null}for(var W=Y.length-1;W>=0;W--)if(!Y[W])Y.splice(W,1);return Y.length?H.getItem(Y):null},z._digLine=function U(Q){for(var Z=1;Z<Q.length;Z++){var V=Q[Z-1],K=Q[Z],$=new EQ(V[0],V[1],K[0],K[1]);$.create(this._digCallback),this._corridors.push($)}},z._digCallback=function U(Q,Z,V){if(this._map[Q][Z]=V,V==0)this._dug++},z._isWallCallback=function U(Q,Z){if(Q<0||Z<0||Q>=this._width||Z>=this._height)return!1;return this._map[Q][Z]==1},z._canBeDugCallback=function U(Q,Z){if(Q<1||Z<1||Q+1>=this._width||Z+1>=this._height)return!1;return this._map[Q][Z]==1},X}(yQ),ZJ=function(B){U0(X,B);function X(U,Q,Z){var V;if(Z===void 0)Z={};return V=B.call(this,U,Q)||this,V._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},V.setOptions(Z),V._dirs=L0[V._options.topology],V._map=V._fillMap(0),V}var z=X.prototype;return z.randomize=function U(Q){for(var Z=0;Z<this._width;Z++)for(var V=0;V<this._height;V++)this._map[Z][V]=H.getUniform()<Q?1:0;return this},z.setOptions=function U(Q){Object.assign(this._options,Q)},z.set=function U(Q,Z,V){this._map[Q][Z]=V},z.create=function U(Q){var Z=this._fillMap(0),V=this._options.born,K=this._options.survive;for(var $=0;$<this._height;$++){var Y=1,L=0;if(this._options.topology==6)Y=2,L=$%2;for(var P=L;P<this._width;P+=Y){var w=this._map[P][$],M=this._getNeighbors(P,$);if(w&&K.indexOf(M)!=-1)Z[P][$]=1;else if(!w&&V.indexOf(M)!=-1)Z[P][$]=1}}this._map=Z,Q&&this._serviceCallback(Q)},z._serviceCallback=function U(Q){for(var Z=0;Z<this._height;Z++){var V=1,K=0;if(this._options.topology==6)V=2,K=Z%2;for(var $=K;$<this._width;$+=V)Q($,Z,this._map[$][Z])}},z._getNeighbors=function U(Q,Z){var V=0;for(var K=0;K<this._dirs.length;K++){var $=this._dirs[K],Y=Q+$[0],L=Z+$[1];if(Y<0||Y>=this._width||L<0||L>=this._height)continue;V+=this._map[Y][L]==1?1:0}return V},z.connect=function U(Q,Z,V){if(!Z)Z=0;var K=[],$={},Y=1,L=[0,0];if(this._options.topology==6)Y=2,L=[0,1];for(var P=0;P<this._height;P++)for(var w=L[P%2];w<this._width;w+=Y)if(this._freeSpace(w,P,Z)){var M=[w,P];$[this._pointKey(M)]=M,K.push([w,P])}var O=K[H.getUniformInt(0,K.length-1)],W=this._pointKey(O),E={};E[W]=O,delete $[W],this._findConnected(E,$,[O],!1,Z);while(Object.keys($).length>0){var S=this._getFromTo(E,$),k=S[0],x=S[1],y={};y[this._pointKey(k)]=k,this._findConnected(y,$,[k],!0,Z);var t=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;t.call(this,x,k,E,$,Z,V);for(var s in y){var q0=y[s];this._map[q0[0]][q0[1]]=Z,E[s]=q0,delete $[s]}}Q&&this._serviceCallback(Q)},z._getFromTo=function U(Q,Z){var V=[0,0],K=[0,0],$,Y=Object.keys(Q),L=Object.keys(Z);for(var P=0;P<5;P++){if(Y.length<L.length){var w=Y;K=Q[w[H.getUniformInt(0,w.length-1)]],V=this._getClosest(K,Z)}else{var M=L;V=Z[M[H.getUniformInt(0,M.length-1)]],K=this._getClosest(V,Q)}if($=(V[0]-K[0])*(V[0]-K[0])+(V[1]-K[1])*(V[1]-K[1]),$<64)break}return[V,K]},z._getClosest=function U(Q,Z){var V=null,K=null;for(var $ in Z){var Y=Z[$],L=(Y[0]-Q[0])*(Y[0]-Q[0])+(Y[1]-Q[1])*(Y[1]-Q[1]);if(K==null||L<K)K=L,V=Y}return V},z._findConnected=function U(Q,Z,V,K,$){while(V.length>0){var Y=V.splice(0,1)[0],L=void 0;if(this._options.topology==6)L=[[Y[0]+2,Y[1]],[Y[0]+1,Y[1]-1],[Y[0]-1,Y[1]-1],[Y[0]-2,Y[1]],[Y[0]-1,Y[1]+1],[Y[0]+1,Y[1]+1]];else L=[[Y[0]+1,Y[1]],[Y[0]-1,Y[1]],[Y[0],Y[1]+1],[Y[0],Y[1]-1]];for(var P=0;P<L.length;P++){var w=this._pointKey(L[P]);if(Q[w]==null&&this._freeSpace(L[P][0],L[P][1],$)){if(Q[w]=L[P],!K)delete Z[w];V.push(L[P])}}}},z._tunnelToConnected=function U(Q,Z,V,K,$,Y){var L,P;if(Z[0]<Q[0])L=Z,P=Q;else L=Q,P=Z;for(var w=L[0];w<=P[0];w++){this._map[w][L[1]]=$;var M=[w,L[1]],O=this._pointKey(M);V[O]=M,delete K[O]}if(Y&&L[0]<P[0])Y(L,[P[0],L[1]]);var W=P[0];if(Z[1]<Q[1])L=Z,P=Q;else L=Q,P=Z;for(var E=L[1];E<P[1];E++){this._map[W][E]=$;var S=[W,E],k=this._pointKey(S);V[k]=S,delete K[k]}if(Y&&L[1]<P[1])Y([P[0],L[1]],[P[0],P[1]])},z._tunnelToConnected6=function U(Q,Z,V,K,$,Y){var L,P;if(Z[0]<Q[0])L=Z,P=Q;else L=Q,P=Z;var w=L[0],M=L[1];while(!(w==P[0]&&M==P[1])){var O=2;if(M<P[1])M++,O=1;else if(M>P[1])M--,O=1;if(w<P[0])w+=O;else if(w>P[0])w-=O;else if(P[1]%2)w-=O;else w+=O;this._map[w][M]=$;var W=[w,M],E=this._pointKey(W);V[E]=W,delete K[E]}if(Y)Y(Z,Q)},z._freeSpace=function U(Q,Z,V){return Q>=0&&Q<this._width&&Z>=0&&Z<this._height&&this._map[Q][Z]==V},z._pointKey=function U(Q){return Q[0]+"."+Q[1]},X}(k0),JJ={room:i0,corridor:EQ},VJ=function(B){U0(X,B);function X(U,Q,Z){var V;if(Z===void 0)Z={};return V=B.call(this,U,Q)||this,V._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},Z),V._features={room:4,corridor:4},V._map=[],V._featureAttempts=20,V._walls={},V._dug=0,V._digCallback=V._digCallback.bind(F0(F0(V))),V._canBeDugCallback=V._canBeDugCallback.bind(F0(F0(V))),V._isWallCallback=V._isWallCallback.bind(F0(F0(V))),V._priorityWallCallback=V._priorityWallCallback.bind(F0(F0(V))),V}var z=X.prototype;return z.create=function U(Q){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var Z=(this._width-2)*(this._height-2);this._firstRoom();var V=Date.now(),K;do{K=0;var $=Date.now();if($-V>this._options.timeLimit)break;var Y=this._findWall();if(!Y)break;var L=Y.split(","),P=parseInt(L[0]),w=parseInt(L[1]),M=this._getDiggingDirection(P,w);if(!M)continue;var O=0;do if(O++,this._tryFeature(P,w,M[0],M[1])){this._removeSurroundingWalls(P,w),this._removeSurroundingWalls(P-M[0],w-M[1]);break}while(O<this._featureAttempts);for(var W in this._walls)if(this._walls[W]>1)K++}while(this._dug/Z<this._options.dugPercentage||K);if(this._addDoors(),Q)for(var E=0;E<this._width;E++)for(var S=0;S<this._height;S++)Q(E,S,this._map[E][S]);return this._walls={},this._map=[],this},z._digCallback=function U(Q,Z,V){if(V==0||V==2)this._map[Q][Z]=0,this._dug++;else this._walls[Q+","+Z]=1},z._isWallCallback=function U(Q,Z){if(Q<0||Z<0||Q>=this._width||Z>=this._height)return!1;return this._map[Q][Z]==1},z._canBeDugCallback=function U(Q,Z){if(Q<1||Z<1||Q+1>=this._width||Z+1>=this._height)return!1;return this._map[Q][Z]==1},z._priorityWallCallback=function U(Q,Z){this._walls[Q+","+Z]=2},z._firstRoom=function U(){var Q=Math.floor(this._width/2),Z=Math.floor(this._height/2),V=i0.createRandomCenter(Q,Z,this._options);this._rooms.push(V),V.create(this._digCallback)},z._findWall=function U(){var Q=[],Z=[];for(var V in this._walls){var K=this._walls[V];if(K==2)Z.push(V);else Q.push(V)}var $=Z.length?Z:Q;if(!$.length)return null;var Y=H.getItem($.sort());return delete this._walls[Y],Y},z._tryFeature=function U(Q,Z,V,K){var $=H.getWeightedValue(this._features),Y=JJ[$],L=Y.createRandomAt(Q,Z,V,K,this._options);if(!L.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(L.create(this._digCallback),L instanceof i0)this._rooms.push(L);if(L instanceof EQ)L.createPriorityWalls(this._priorityWallCallback),this._corridors.push(L);return!0},z._removeSurroundingWalls=function U(Q,Z){var V=L0[4];for(var K=0;K<V.length;K++){var $=V[K],Y=Q+$[0],L=Z+$[1];delete this._walls[Y+","+L],Y=Q+2*$[0],L=Z+2*$[1],delete this._walls[Y+","+L]}},z._getDiggingDirection=function U(Q,Z){if(Q<=0||Z<=0||Q>=this._width-1||Z>=this._height-1)return null;var V=null,K=L0[4];for(var $=0;$<K.length;$++){var Y=K[$],L=Q+Y[0],P=Z+Y[1];if(!this._map[L][P]){if(V)return null;V=Y}}if(!V)return null;return[-V[0],-V[1]]},z._addDoors=function U(){var Q=this._map;function Z($,Y){return Q[$][Y]==1}for(var V=0;V<this._rooms.length;V++){var K=this._rooms[V];K.clearDoors(),K.addDoors(Z)}},X}(yQ);function cQ(B,X,z){z[X[B+1]]=z[B],X[z[B]]=X[B+1],z[B]=B+1,X[B+1]=B}function dQ(B,X,z){z[X[B]]=z[B],X[z[B]]=X[B],z[B]=B,X[B]=B}var UJ=function(B){U0(X,B);function X(){return B.apply(this,arguments)||this}var z=X.prototype;return z.create=function U(Q){var Z=this._fillMap(1),V=Math.ceil((this._width-2)/2),K=0.375,$=[],Y=[];for(var L=0;L<V;L++)$.push(L),Y.push(L);$.push(V-1);var P;for(P=1;P+3<this._height;P+=2)for(var w=0;w<V;w++){var M=2*w+1,O=P;if(Z[M][O]=0,w!=$[w+1]&&H.getUniform()>K)cQ(w,$,Y),Z[M+1][O]=0;if(w!=$[w]&&H.getUniform()>K)dQ(w,$,Y);else Z[M][O+1]=0}for(var W=0;W<V;W++){var E=2*W+1,S=P;if(Z[E][S]=0,W!=$[W+1]&&(W==$[W]||H.getUniform()>K))cQ(W,$,Y),Z[E+1][S]=0;dQ(W,$,Y)}for(var k=0;k<this._width;k++)for(var x=0;x<this._height;x++)Q(k,x,Z[k][x]);return this},X}(k0),KJ=function(B){U0(X,B);function X(){var U=B.apply(this,arguments)||this;return U._stack=[],U._map=[],U}var z=X.prototype;return z.create=function U(Q){var Z=this._width,V=this._height;this._map=[];for(var K=0;K<Z;K++){this._map.push([]);for(var $=0;$<V;$++){var Y=K==0||$==0||K+1==Z||$+1==V;this._map[K].push(Y?1:0)}}this._stack=[[1,1,Z-2,V-2]],this._process();for(var L=0;L<Z;L++)for(var P=0;P<V;P++)Q(L,P,this._map[L][P]);return this._map=[],this},z._process=function U(){while(this._stack.length){var Q=this._stack.shift();this._partitionRoom(Q)}},z._partitionRoom=function U(Q){var Z=[],V=[];for(var K=Q[0]+1;K<Q[2];K++){var $=this._map[K][Q[1]-1],Y=this._map[K][Q[3]+1];if($&&Y&&!(K%2))Z.push(K)}for(var L=Q[1]+1;L<Q[3];L++){var P=this._map[Q[0]-1][L],w=this._map[Q[2]+1][L];if(P&&w&&!(L%2))V.push(L)}if(!Z.length||!V.length)return;var M=H.getItem(Z),O=H.getItem(V);this._map[M][O]=1;var W=[],E=[];W.push(E);for(var S=Q[0];S<M;S++)if(this._map[S][O]=1,S%2)E.push([S,O]);E=[],W.push(E);for(var k=M+1;k<=Q[2];k++)if(this._map[k][O]=1,k%2)E.push([k,O]);E=[],W.push(E);for(var x=Q[1];x<O;x++)if(this._map[M][x]=1,x%2)E.push([M,x]);E=[],W.push(E);for(var y=O+1;y<=Q[3];y++)if(this._map[M][y]=1,y%2)E.push([M,y]);var t=H.getItem(W);for(var s=0;s<W.length;s++){var q0=W[s];if(q0==t)continue;var H0=H.getItem(q0);this._map[H0[0]][H0[1]]=0}this._stack.push([Q[0],Q[1],M-1,O-1]),this._stack.push([M+1,Q[1],Q[2],O-1]),this._stack.push([Q[0],O+1,M-1,Q[3]]),this._stack.push([M+1,O+1,Q[2],Q[3]])},X}(k0),qJ=function(B){U0(X,B);function X(U,Q,Z){var V;if(Z===void 0)Z=0;return V=B.call(this,U,Q)||this,V._regularity=Z,V._map=[],V}var z=X.prototype;return z.create=function U(Q){var Z=this._width,V=this._height,K=this._fillMap(1);Z-=Z%2?1:2,V-=V%2?1:2;var $=0,Y=0,L=0,P=0,w=0,M=!1,O=[[0,0],[0,0],[0,0],[0,0]];do{if($=1+2*Math.floor(H.getUniform()*(Z-1)/2),Y=1+2*Math.floor(H.getUniform()*(V-1)/2),!w)K[$][Y]=0;if(!K[$][Y]){this._randomize(O);do{if(Math.floor(H.getUniform()*(this._regularity+1))==0)this._randomize(O);M=!0;for(var W=0;W<4;W++)if(L=$+O[W][0]*2,P=Y+O[W][1]*2,this._isFree(K,L,P,Z,V)){K[L][P]=0,K[$+O[W][0]][Y+O[W][1]]=0,$=L,Y=P,M=!1,w++;break}}while(!M)}}while(w+1<Z*V/4);for(var E=0;E<this._width;E++)for(var S=0;S<this._height;S++)Q(E,S,K[E][S]);return this._map=[],this},z._randomize=function U(Q){for(var Z=0;Z<4;Z++)Q[Z][0]=0,Q[Z][1]=0;switch(Math.floor(H.getUniform()*4)){case 0:Q[0][0]=-1,Q[1][0]=1,Q[2][1]=-1,Q[3][1]=1;break;case 1:Q[3][0]=-1,Q[2][0]=1,Q[1][1]=-1,Q[0][1]=1;break;case 2:Q[2][0]=-1,Q[3][0]=1,Q[0][1]=-1,Q[1][1]=1;break;case 3:Q[1][0]=-1,Q[0][0]=1,Q[3][1]=-1,Q[2][1]=1;break}},z._isFree=function U(Q,Z,V,K,$){if(Z<1||V<1||Z>=K||V>=$)return!1;return Q[Z][V]},X}(k0),$J=function(B){U0(X,B);function X(U,Q,Z){var V=B.call(this,U,Q)||this;if(V.map=[],V.rooms=[],V.connectedCells=[],Z=Object.assign({cellWidth:3,cellHeight:3},Z),!Z.hasOwnProperty("roomWidth"))Z.roomWidth=V._calculateRoomSize(V._width,Z.cellWidth);if(!Z.hasOwnProperty("roomHeight"))Z.roomHeight=V._calculateRoomSize(V._height,Z.cellHeight);return V._options=Z,V}var z=X.prototype;return z.create=function U(Q){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),Q)for(var Z=0;Z<this._width;Z++)for(var V=0;V<this._height;V++)Q(Z,V,this.map[Z][V]);return this},z._calculateRoomSize=function U(Q,Z){var V=Math.floor(Q/Z*0.8),K=Math.floor(Q/Z*0.25);if(K<2)K=2;if(V<2)V=2;return[K,V]},z._initRooms=function U(){for(var Q=0;Q<this._options.cellWidth;Q++){this.rooms.push([]);for(var Z=0;Z<this._options.cellHeight;Z++)this.rooms[Q].push({x:0,y:0,width:0,height:0,connections:[],cellx:Q,celly:Z})}},z._connectRooms=function U(){var Q=H.getUniformInt(0,this._options.cellWidth-1),Z=H.getUniformInt(0,this._options.cellHeight-1),V,K,$,Y=!1,L,P,w;do{w=[0,2,4,6],w=H.shuffle(w);do{if(Y=!1,V=w.pop(),K=Q+L0[8][V][0],$=Z+L0[8][V][1],K<0||K>=this._options.cellWidth)continue;if($<0||$>=this._options.cellHeight)continue;if(L=this.rooms[Q][Z],L.connections.length>0){if(L.connections[0][0]==K&&L.connections[0][1]==$)break}if(P=this.rooms[K][$],P.connections.length==0)P.connections.push([Q,Z]),this.connectedCells.push([K,$]),Q=K,Z=$,Y=!0}while(w.length>0&&Y==!1)}while(w.length>0)},z._connectUnconnectedRooms=function U(){var Q=this._options.cellWidth,Z=this._options.cellHeight;this.connectedCells=H.shuffle(this.connectedCells);var V,K,$;for(var Y=0;Y<this._options.cellWidth;Y++)for(var L=0;L<this._options.cellHeight;L++)if(V=this.rooms[Y][L],V.connections.length==0){var P=[0,2,4,6];P=H.shuffle(P),$=!1;do{var w=P.pop(),M=Y+L0[8][w][0],O=L+L0[8][w][1];if(M<0||M>=Q||O<0||O>=Z)continue;if(K=this.rooms[M][O],$=!0,K.connections.length==0)break;for(var W=0;W<K.connections.length;W++)if(K.connections[W][0]==Y&&K.connections[W][1]==L){$=!1;break}if($)break}while(P.length);if($)V.connections.push([K.cellx,K.celly]);else console.log("-- Unable to connect room.")}},z._createRandomRoomConnections=function U(){},z._createRooms=function U(){var Q=this._width,Z=this._height,V=this._options.cellWidth,K=this._options.cellHeight,$=Math.floor(this._width/V),Y=Math.floor(this._height/K),L,P,w=this._options.roomWidth,M=this._options.roomHeight,O,W,E;for(var S=0;S<V;S++)for(var k=0;k<K;k++){if(O=$*S,W=Y*k,O==0)O=1;if(W==0)W=1;if(L=H.getUniformInt(w[0],w[1]),P=H.getUniformInt(M[0],M[1]),k>0){E=this.rooms[S][k-1];while(W-(E.y+E.height)<3)W++}if(S>0){E=this.rooms[S-1][k];while(O-(E.x+E.width)<3)O++}var x=Math.round(H.getUniformInt(0,$-L)/2),y=Math.round(H.getUniformInt(0,Y-P)/2);while(O+x+L>=Q)if(x)x--;else L--;while(W+y+P>=Z)if(y)y--;else P--;O=O+x,W=W+y,this.rooms[S][k].x=O,this.rooms[S][k].y=W,this.rooms[S][k].width=L,this.rooms[S][k].height=P;for(var t=O;t<O+L;t++)for(var s=W;s<W+P;s++)this.map[t][s]=0}},z._getWallPosition=function U(Q,Z){var V,K,$;if(Z==1||Z==3){if(V=H.getUniformInt(Q.x+1,Q.x+Q.width-2),Z==1)K=Q.y-2,$=K+1;else K=Q.y+Q.height+1,$=K-1;this.map[V][$]=0}else{if(K=H.getUniformInt(Q.y+1,Q.y+Q.height-2),Z==2)V=Q.x+Q.width+1,$=V-1;else V=Q.x-2,$=V+1;this.map[$][K]=0}return[V,K]},z._drawCorridor=function U(Q,Z){var V=Z[0]-Q[0],K=Z[1]-Q[1],$=Q[0],Y=Q[1],L,P,w,M,O=[],W=Math.abs(V),E=Math.abs(K),S=H.getUniform(),k=S,x=1-S;if(P=V>0?2:6,w=K>0?4:0,W<E)L=Math.ceil(E*k),O.push([w,L]),O.push([P,W]),L=Math.floor(E*x),O.push([w,L]);else L=Math.ceil(W*k),O.push([P,L]),O.push([w,E]),L=Math.floor(W*x),O.push([P,L]);this.map[$][Y]=0;while(O.length>0){M=O.pop();while(M[1]>0)$+=L0[8][M[0]][0],Y+=L0[8][M[0]][1],this.map[$][Y]=0,M[1]=M[1]-1}},z._createCorridors=function U(){var Q=this._options.cellWidth,Z=this._options.cellHeight,V,K,$,Y,L;for(var P=0;P<Q;P++)for(var w=0;w<Z;w++){V=this.rooms[P][w];for(var M=0;M<V.connections.length;M++){if(K=V.connections[M],$=this.rooms[K[0]][K[1]],$.cellx>V.cellx)Y=2,L=4;else if($.cellx<V.cellx)Y=4,L=2;else if($.celly>V.celly)Y=3,L=1;else Y=1,L=3;this._drawCorridor(this._getWallPosition(V,Y),this._getWallPosition($,L))}}},X}(k0),zJ={Arena:eZ,Uniform:QJ,Cellular:ZJ,Digger:VJ,EllerMaze:UJ,DividedMaze:KJ,IceyMaze:qJ,Rogue:$J},BJ=function B(){},XJ=0.5*(Math.sqrt(3)-1),c0=(3-Math.sqrt(3))/6,LJ=function(B){U0(X,B);function X(U){var Q;if(U===void 0)U=256;Q=B.call(this)||this,Q._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var Z=[];for(var V=0;V<U;V++)Z.push(V);Z=H.shuffle(Z),Q._perms=[],Q._indexes=[];for(var K=0;K<2*U;K++)Q._perms.push(Z[K%U]),Q._indexes.push(Q._perms[K]%Q._gradients.length);return Q}var z=X.prototype;return z.get=function U(Q,Z){var V=this._perms,K=this._indexes,$=V.length/2,Y=0,L=0,P=0,w,M=(Q+Z)*XJ,O=Math.floor(Q+M),W=Math.floor(Z+M),E=(O+W)*c0,S=O-E,k=W-E,x=Q-S,y=Z-k,t,s;if(x>y)t=1,s=0;else t=0,s=1;var q0=x-t+c0,H0=y-s+c0,C0=x-1+2*c0,RQ=y-1+2*c0,jQ=N(O,$),CQ=N(W,$),d0=0.5-x*x-y*y;if(d0>=0){d0*=d0,w=K[jQ+V[CQ]];var nQ=this._gradients[w];Y=d0*d0*(nQ[0]*x+nQ[1]*y)}var l0=0.5-q0*q0-H0*H0;if(l0>=0){l0*=l0,w=K[jQ+t+V[CQ+s]];var rQ=this._gradients[w];L=l0*l0*(rQ[0]*q0+rQ[1]*H0)}var n0=0.5-C0*C0-RQ*RQ;if(n0>=0){n0*=n0,w=K[jQ+1+V[CQ+1]];var sQ=this._gradients[w];P=n0*n0*(sQ[0]*C0+sQ[1]*RQ)}return 70*(Y+L+P)},X}(BJ),GJ={Simplex:LJ},lQ=function(){function B(z,U,Q,Z){if(Z===void 0)Z={};if(this._toX=z,this._toY=U,this._passableCallback=Q,this._options=Object.assign({topology:8},Z),this._dirs=L0[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var X=B.prototype;return X._getNeighbors=function z(U,Q){var Z=[];for(var V=0;V<this._dirs.length;V++){var K=this._dirs[V],$=U+K[0],Y=Q+K[1];if(!this._passableCallback($,Y))continue;Z.push([$,Y])}return Z},B}(),YJ=function(B){U0(X,B);function X(U,Q,Z,V){var K=B.call(this,U,Q,Z,V)||this;return K._computed={},K._todo=[],K._add(U,Q,null),K}var z=X.prototype;return z.compute=function U(Q,Z,V){var K=Q+","+Z;if(!(K in this._computed))this._compute(Q,Z);if(!(K in this._computed))return;var $=this._computed[K];while($)V($.x,$.y),$=$.prev},z._compute=function U(Q,Z){while(this._todo.length){var V=this._todo.shift();if(V.x==Q&&V.y==Z)return;var K=this._getNeighbors(V.x,V.y);for(var $=0;$<K.length;$++){var Y=K[$],L=Y[0],P=Y[1],w=L+","+P;if(w in this._computed)continue;this._add(L,P,V)}}},z._add=function U(Q,Z,V){var K={x:Q,y:Z,prev:V};this._computed[Q+","+Z]=K,this._todo.push(K)},X}(lQ),HJ=function(B){U0(X,B);function X(U,Q,Z,V){var K;if(V===void 0)V={};return K=B.call(this,U,Q,Z,V)||this,K._todo=[],K._done={},K}var z=X.prototype;return z.compute=function U(Q,Z,V){this._todo=[],this._done={},this._fromX=Q,this._fromY=Z,this._add(this._toX,this._toY,null);while(this._todo.length){var K=this._todo.shift(),$=K.x+","+K.y;if($ in this._done)continue;if(this._done[$]=K,K.x==Q&&K.y==Z)break;var Y=this._getNeighbors(K.x,K.y);for(var L=0;L<Y.length;L++){var P=Y[L],w=P[0],M=P[1],O=w+","+M;if(O in this._done)continue;this._add(w,M,K)}}var W=this._done[Q+","+Z];if(!W)return;while(W)V(W.x,W.y),W=W.prev},z._add=function U(Q,Z,V){var K=this._distance(Q,Z),$={x:Q,y:Z,prev:V,g:V?V.g+1:0,h:K},Y=$.g+$.h;for(var L=0;L<this._todo.length;L++){var P=this._todo[L],w=P.g+P.h;if(Y<w||Y==w&&K<P.h){this._todo.splice(L,0,$);return}}this._todo.push($)},z._distance=function U(Q,Z){switch(this._options.topology){case 4:return Math.abs(Q-this._fromX)+Math.abs(Z-this._fromY);case 6:var V=Math.abs(Q-this._fromX),K=Math.abs(Z-this._fromY);return K+Math.max(0,(V-K)/2);case 8:return Math.max(Math.abs(Q-this._fromX),Math.abs(Z-this._fromY))}},X}(lQ),PJ={Dijkstra:YJ,AStar:HJ},FJ=function(){function B(z){this._scheduler=z,this._lock=1}var X=B.prototype;return X.start=function z(){return this.unlock()},X.lock=function z(){return this._lock++,this},X.unlock=function z(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var U=this._scheduler.next();if(!U)return this.lock();var Q=U.act();if(Q&&Q.then)this.lock(),Q.then(this.unlock.bind(this))}return this},B}(),wJ=function(){function B(z,U){if(U===void 0)U={};this._reflectivityCallback=z,this._options={},U=Object.assign({passes:1,emissionThreshold:100,range:10},U),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(U)}var X=B.prototype;return X.setOptions=function z(U){if(Object.assign(this._options,U),U&&U.range)this.reset();return this},X.setFOV=function z(U){return this._fov=U,this._fovCache={},this},X.setLight=function z(U,Q,Z){var V=U+","+Q;if(Z)this._lights[V]=typeof Z=="string"?p(Z):Z;else delete this._lights[V];return this},X.clearLights=function z(){this._lights={}},X.reset=function z(){return this._reflectivityCache={},this._fovCache={},this},X.compute=function z(U){var Q={},Z={},V={};for(var K in this._lights){var $=this._lights[K];Z[K]=[0,0,0],_(Z[K],$)}for(var Y=0;Y<this._options.passes;Y++){if(this._emitLight(Z,V,Q),Y+1==this._options.passes)continue;Z=this._computeEmitters(V,Q)}for(var L in V){var P=L.split(","),w=parseInt(P[0]),M=parseInt(P[1]);U(w,M,V[L])}return this},X._emitLight=function z(U,Q,Z){for(var V in U){var K=V.split(","),$=parseInt(K[0]),Y=parseInt(K[1]);this._emitLightFromCell($,Y,U[V],Q),Z[V]=1}return this},X._computeEmitters=function z(U,Q){var Z={};for(var V in U){if(V in Q)continue;var K=U[V],$=void 0;if(V in this._reflectivityCache)$=this._reflectivityCache[V];else{var Y=V.split(","),L=parseInt(Y[0]),P=parseInt(Y[1]);$=this._reflectivityCallback(L,P),this._reflectivityCache[V]=$}if($==0)continue;var w=[0,0,0],M=0;for(var O=0;O<3;O++){var W=Math.round(K[O]*$);w[O]=W,M+=W}if(M>this._options.emissionThreshold)Z[V]=w}return Z},X._emitLightFromCell=function z(U,Q,Z,V){var K=U+","+Q,$;if(K in this._fovCache)$=this._fovCache[K];else $=this._updateFOV(U,Q);for(var Y in $){var L=$[Y],P=void 0;if(Y in V)P=V[Y];else P=[0,0,0],V[Y]=P;for(var w=0;w<3;w++)P[w]+=Math.round(Z[w]*L)}return this},X._updateFOV=function z(U,Q){var Z=U+","+Q,V={};this._fovCache[Z]=V;var K=this._options.range;function $(Y,L,P,w){var M=Y+","+L,O=w*(1-P/K);if(O==0)return;V[M]=O}return this._fov.compute(U,Q,K,$.bind(this)),V},B}(),DJ=l,OJ=r,MJ=mZ;J.Util=DJ,J.Color=OJ,J.Text=MJ,J.RNG=H,J.Display=cZ,J.StringGenerator=dZ,J.EventQueue=_Q,J.Scheduler=sZ,J.FOV=tZ,J.Map=zJ,J.Noise=GJ,J.Path=PJ,J.Engine=FJ,J.Lighting=wJ,J.DEFAULT_WIDTH=DQ,J.DEFAULT_HEIGHT=OQ,J.DIRS=L0,J.KEYS=_Z,Object.defineProperty(J,"__esModule",{value:!0})})});var NJ=typeof window!=="undefined"?window.innerWidth:0,IJ=typeof window!=="undefined"?window.innerHeight:0,e={cameraWidth:Math.floor(NJ/18),cameraHeight:Math.floor(IJ/18),debug:!0,fontSize:18,highlightEnemy:!0,showGrid:!0,showUI:!0,zoom:1},IQ={WIDTH:1024,HEIGHT:1024},P0={width:Math.floor(e.cameraWidth*(1/e.zoom)),height:Math.floor(e.cameraHeight*(1/e.zoom)),bg:"transparent",fontSize:Math.floor(e.fontSize*e.zoom),forceSquareRatio:!0};function aQ(J){if(e.debug)console.log(J)}var AQ=[];class t0{name;description;energyDelta;constructor(J,q,G=0){this.name=J,this.description=q,this.energyDelta=G}}class e0{name;description;constructor(J,q){this.name=J,this.description=q}}class W0{key;description;constructor(J,q){this.key=J,this.description=q}}class QQ{name;description;constructor(J,q){this.name=J,this.description=q}}class y0{name;description;color;constructor(J,q,G){this.name=J,this.description=q,this.color=G}}class D0{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(J,q,G,H="cyberyellow",D=0,R=0,N=0,u=0,A=0,b=[]){this.name=J,this.description=q,this.icon=G,this.color=H,this.energyDelta=D,this.matter=R,this.gold=N,this.damage=u,this.energyCost=A,this.effects=b}}class E0{name;description;icon;color;energyMax;unlockCondition;constructor(J,q,G,H=100){this.name=J,this.description=q,this.icon=G,this.energyMax=H,this.color="white",this.unlockCondition=null}}class Q0{name;description;icon;fg;bg;energyDelta;constructor(J,q,G=null,H="white",D="black",R=0){this.name=J,this.description=q,this.icon=G,this.fg=H,this.bg=D,this.energyDelta=R}}var F={actions:{Enter:new t0("Enter","Enter a portal or plant atmosphere"),Launch:new t0("Launch","Launch into space",-10),Wait:new t0("Wait","Wait one turn in place")},ais:{aggrorange:new e0("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new e0("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new e0("guardian","Idles at a position and only fights back if engaged")},colors:{black:"#000",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",brown:"brown",gray:"#777",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new W0("N","Move/interact/combat north"),E:new W0("E","Move/interact/combat east"),S:new W0("S","Move/interact/combat south"),W:new W0("W","Move/interact/combat west"),A:new W0("A","Primary action, confirm"),B:new W0("B","Take a break, cancel"),"1":new W0("1","Secondary action, first quick slot"),"2":new W0("2","Tertiary action, second quick slot"),M:new W0("M","Menu")},effects:{RockCrusher:new QQ("Rock Crusher","Mines rock"),WallCrusher:new QQ("Wall Crusher","Tears down weak walls"),WaterShield:new QQ("Water Shield","Reduces damage taken from water")},entities:{movableboulder:new E0("movableboulder","A movable rock","o",2),movablebox:new E0("movablebox","A movable box","x",2),Spirit:new E0("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new E0("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new E0("WorkBot","Basic factory worker","B"),Cleaner:new E0("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new E0("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Valkyrie:new E0("Valkyrie","Airbourne war logistics","V",160),Pioneer:new E0("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200)},factions:{Equipment:new y0("Equipment","For boxes etc.","gray"),Spirits:new y0("Spirits","Default player faction","white"),Pyrates:new y0("Pyrates","Default enemy faction","cybermagenta"),Gaia:new y0("Gaia","For rocks etc.","brown"),Guardians:new y0("Guardians","Bot station guardians","cybercyan")},items:{battery:new D0("Battery","Increases maximum energy","b","cyberyellow",10),energy:new D0("Energy","Energy pack","e","cyberyellow",10),gold:new D0("Gold","Precious shiny!","g","cyberyellow",0,0,1),goo:new D0("Goo","A minor matter source","g","gray",0,1),junk:new D0("Junk","Broken bot","%","gray",0,1),matter:new D0("Matter","A pile of stuff","m","gray",0,100),broom:new D0("Broom","Sweeps the floor","i","cyberyellow",0,0,0,-10,-1),hammer:new D0("Hammer","Tears down weak walls","i","cyberyellow",0,0,0,-15,-2,["Wall Crusher"]),pickaxe:new D0("Pickaxe","Mines rock","i","cyberyellow",0,0,0,-13,-2,["Rock Crusher"]),shocker:new D0("Shocker","Injects Bots with new energy, basic AeroBot tool","i","cyberyellow",0,0,0,10,-1),trident:new D0("Trident","Traverse water with less energy cost","i","cyberyellow",0,0,0,-20,-3,["Water Shield"]),wrench:new D0("Wrench","Basic WorkBot tool","i","cyberyellow",0,0,0,-10,-1)},maps:{bot_bar:`!
!!id bot_bar
!!size 28 16
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
!!\xB0 tv bot_station_tv OBEYWORKKILL
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
##############\xB0\xB0\xB0\xB0##############
#...##########\xB0\xB0\xB0\xB0##########...#
#.......######\xB0\xB0\xB0\xB0######.......#
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
!!size 20 24
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
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired PioneerBot, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:e.showGrid?new Q0("void","Just nothing here",".","gray"):new Q0("void","Just nothing here"),voidtrue:new Q0("voidtrue","Really nothing here and you shouldn't get there ever!"),voidhidden:new Q0("voidhidden","Looks like a wall, but isn't!","#","gray","black"),water:new Q0("water","Rust and other dangers await","~","cybercyan","cyberblue",-2),rock:new Q0("rock","Hidden treasures may await","^","white","gray"),tree:new Q0("tree","Lots of trees make a forest","t","brown","black"),wall:new Q0("wall","A strong wall","#","gray","black"),wallstatue:new Q0("wallstatue","A small statue","s","gray","black"),wallweak:new Q0("wallweak","A weakened wall","+","gray","black"),chargepad:new Q0("chargepad","Recharges energy and health","=","cyberyellow","black",2),movenorth:new Q0("movenorth","Moves you north","^","cyberyellow"),moveeast:new Q0("moveeast","Moves you east",">","cyberyellow"),movesouth:new Q0("movesouth","Moves you south","v","cyberyellow"),movewest:new Q0("movewest","Moves you west","<","cyberyellow"),portal:new Q0("portal","Gateway to another map","O","cyberyellow","gray"),portalclosed:new Q0("portalclosed","Closed gateway to another map","O","black","gray"),portalhidden:new Q0("portalhidden","Hidden gateway to another map","#","gray","black"),portallauncher:new Q0("portallauncher","Launches into space","O","cyberyellow","gray"),portalstartworkbot:new Q0("portalstartworkbot","Start playing as a WorkBot","B","white"),portalstartaerobot:new Q0("portalstartaerobot","Start playing as a AeroBot","A","white"),"_portalstart?":new Q0("_portalstart?","Not unlocked, yet!","?","white"),spacerock:new Q0("spacerock","Mountains as seen from space, non-blocking!","^","white","gray"),spacetree:new Q0("spacetree","Forest as seen from space","","brown","brown"),spacewater:new Q0("spacewater","Water as seen from space, not dangerous!","~","cybercyan","cyberblue"),spacevoid:new Q0("spacevoid","Void/ground as seen from space","","gray","gray"),spacevoidstarwhite:new Q0("spacevoidstarwhite","Space with a white background star",".","white"),spacevoidstaryellow:new Q0("spacevoidstaryellow","Space with a yellow background star",".","cyberyellow"),sun:new Q0("sun","It's hot, really hot!","","cyberyellow","cyberyellow",-100),tv:new Q0("tv","A big billboard screen","","black","cyberyellow")}};function d(J,q,G,H,D=0,R=0,N={}){let u={id:q,type:G,mapId:H,x:D,y:R,energy:10,energyMax:10,gold:0,matter:0,options:N};return J=JQ(J,u,G),J.entities[u.id]=u,J}function SQ(J,q,G,H){return d(J,"boulder,"+q+","+G+","+H,F.entities.movableboulder,q,G,H,{faction:F.factions.Gaia})}function fQ(J,q,G,H){return d(J,"box,"+q+","+G+","+H,F.entities.movablebox,q,G,H,{faction:F.factions.Equipment})}function ZQ(J,q){return J.entities[q]=void 0,delete J.entities[q],J.tools[q]=void 0,J}function T0(J,q){let G=Object.keys(J.entities),H=[];for(let D=0;D<G.length;D++){let R=J.entities[G[D]];if(R.mapId===q)H.push(R)}return H}function iQ(J,q,G,H){let D=T0(J,q).filter((R)=>R.x===G&&R.y===H);if(D.length>0)return D[0];return null}function JQ(J,q,G){if(q.type=G,q.energy=G.energyMax,q.energyMax=G.energyMax,q.gold=0,q.matter=0,!R0(q))J.tools[q.id]=void 0;return J}function tQ(J,q,G){if(q.options.faction===G.options.faction);else{let H=q.id,D=G.id;J._combatQueue.push({entityId:H,otherEntityId:D})}return J}function R0(J){return J.type===F.entities.movableboulder||J.type===F.entities.movablebox}function VQ(J,q){let G={A:F.actions.Wait,B:F.actions.Wait};if(!!J.lastSpacePositionByEntity[q.id]&&q.energy>Math.abs(F.actions.Launch.energyDelta))G.A=F.actions.Launch;let D=J.maps[q.mapId].getTile(q.x,q.y);if(!!D.options.mapId&&"x"in D.options&&"y"in D.options)G.A=F.actions.Enter;return G}function bQ(J,q,G){let H=J._eventSubscribers[q];if(H)for(let D=0;D<H.length;D++){let R=H[D];J=R(J,G)}return J}function vQ(J,q,G){if(q in J._eventSubscribers);else J._eventSubscribers[q]=[];return J._eventSubscribers[q].push(G),J}function J0(J,q,G,H=0,D=0){let N={id:UQ(G,H,D),type:q,mapId:G,x:H,y:D,energy:q.energyDelta,gold:q.gold,matter:q.matter};return J.items[N.id]=N,J}function eQ(J,q,G,H=0,D=0){let R=F.items.junk,u={id:UQ(G,H,D),type:R,mapId:G,x:H,y:D,energy:R.energyDelta,gold:R.gold,matter:q};return J.items[u.id]=u,J}function r0(J,q,G,H=0,D=0,R,N){let A={id:UQ(G,H,D),type:q,mapId:G,x:H,y:D,energy:q.energyDelta,gold:R,matter:N};return J.items[A.id]=A,J}function UQ(J,q,G){return"item,"+J+","+q+","+G}function uQ(J,q){return J.items[q]=void 0,delete J.items[q],J}function KQ(J,q){let G=Object.keys(J.items),H=[];for(let D=0;D<G.length;D++){let R=J.items[G[D]];if(R.mapId===q)H.push(R)}return H}function QZ(J,q,G,H){let D=UQ(q,G,H);if(D in J.items)return J.items[D];return null}function s0(J,q){return J.tools[q]}function ZZ(J,q,G){if(R0(q))return J;if(!SJ(q,G))return J;if(AJ(G))J=kQ(J,q.id,G.type);else{if(G.type===F.items.battery)q.energyMax+=G.energy;J._energyQueue.push({entityId:q.id,energyDelta:G.energy})}return q.gold+=G.gold,q.matter+=G.matter,uQ(J,G.id),J}function kQ(J,q,G){let H={type:G};return J.tools[q]=H,J}function AJ(J){return J.type.energyCost<0}function SJ(J,q){return J.gold+q.gold>=0&&J.matter+q.matter>=0}/*!
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
 */var fJ=function(J){var q={};function G(H){if(q[H])return q[H].exports;var D=q[H]={i:H,l:!1,exports:{}};return J[H].call(D.exports,D,D.exports,G),D.l=!0,D.exports}return G.m=J,G.c=q,G.d=function(H,D,R){G.o(H,D)||Object.defineProperty(H,D,{enumerable:!0,get:R})},G.r=function(H){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(H,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(H,"__esModule",{value:!0})},G.t=function(H,D){if(1&D&&(H=G(H)),8&D)return H;if(4&D&&typeof H=="object"&&H&&H.__esModule)return H;var R=Object.create(null);if(G.r(R),Object.defineProperty(R,"default",{enumerable:!0,value:H}),2&D&&typeof H!="string")for(var N in H)G.d(R,N,function(u){return H[u]}.bind(null,N));return R},G.n=function(H){var D=H&&H.__esModule?function(){return H.default}:function(){return H};return G.d(D,"a",D),D},G.o=function(H,D){return Object.prototype.hasOwnProperty.call(H,D)},G.p="/bin/",G(G.s=0)}([function(J,q,G){var H={},D=G(1),R=G(2),N=G(3);J.exports=H;var u=1;H.js=function(){var A,b,l,n=!1,m={},Z0={},p={},g={},_=!0,K0={},z0=[],X0=Number.MAX_VALUE,G0=!1;this.setAcceptableTiles=function(f){f instanceof Array?l=f:!isNaN(parseFloat(f))&&isFinite(f)&&(l=[f])},this.enableSync=function(){n=!0},this.disableSync=function(){n=!1},this.enableDiagonals=function(){G0=!0},this.disableDiagonals=function(){G0=!1},this.setGrid=function(f){A=f;for(var I=0;I<A.length;I++)for(var j=0;j<A[0].length;j++)Z0[A[I][j]]||(Z0[A[I][j]]=1)},this.setTileCost=function(f,I){Z0[f]=I},this.setAdditionalPointCost=function(f,I,j){p[I]===void 0&&(p[I]={}),p[I][f]=j},this.removeAdditionalPointCost=function(f,I){p[I]!==void 0&&delete p[I][f]},this.removeAllAdditionalPointCosts=function(){p={}},this.setDirectionalCondition=function(f,I,j){g[I]===void 0&&(g[I]={}),g[I][f]=j},this.removeAllDirectionalConditions=function(){g={}},this.setIterationsPerCalculation=function(f){X0=f},this.avoidAdditionalPoint=function(f,I){m[I]===void 0&&(m[I]={}),m[I][f]=1},this.stopAvoidingAdditionalPoint=function(f,I){m[I]!==void 0&&delete m[I][f]},this.enableCornerCutting=function(){_=!0},this.disableCornerCutting=function(){_=!1},this.stopAvoidingAllAdditionalPoints=function(){m={}},this.findPath=function(f,I,j,r,i){var V0=function(A0){n?i(A0):setTimeout(function(){i(A0)})};if(l===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(A===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(f<0||I<0||j<0||r<0||f>A[0].length-1||I>A.length-1||j>A[0].length-1||r>A.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(f!==j||I!==r){for(var w0=A[r][j],B0=!1,j0=0;j0<l.length;j0++)if(w0===l[j0]){B0=!0;break}if(B0!==!1){var Y0=new D;Y0.openList=new N(function(A0,_0){return A0.bestGuessDistance()-_0.bestGuessDistance()}),Y0.isDoneCalculating=!1,Y0.nodeHash={},Y0.startX=f,Y0.startY=I,Y0.endX=j,Y0.endY=r,Y0.callback=V0,Y0.openList.push(a(Y0,Y0.startX,Y0.startY,null,1));var p0=u++;return K0[p0]=Y0,z0.push(p0),p0}V0(null)}else V0([])},this.cancelPath=function(f){return f in K0&&(delete K0[f],!0)},this.calculate=function(){if(z0.length!==0&&A!==void 0&&l!==void 0)for(b=0;b<X0;b++){if(z0.length===0)return;n&&(b=0);var f=z0[0],I=K0[f];if(I!==void 0)if(I.openList.size()!==0){var j=I.openList.pop();if(I.endX!==j.x||I.endY!==j.y)j.list=0,j.y>0&&C(I,j,0,-1,1*h(j.x,j.y-1)),j.x<A[0].length-1&&C(I,j,1,0,1*h(j.x+1,j.y)),j.y<A.length-1&&C(I,j,0,1,1*h(j.x,j.y+1)),j.x>0&&C(I,j,-1,0,1*h(j.x-1,j.y)),G0&&(j.x>0&&j.y>0&&(_||v(A,l,j.x,j.y-1,j)&&v(A,l,j.x-1,j.y,j))&&C(I,j,-1,-1,1.4*h(j.x-1,j.y-1)),j.x<A[0].length-1&&j.y<A.length-1&&(_||v(A,l,j.x,j.y+1,j)&&v(A,l,j.x+1,j.y,j))&&C(I,j,1,1,1.4*h(j.x+1,j.y+1)),j.x<A[0].length-1&&j.y>0&&(_||v(A,l,j.x,j.y-1,j)&&v(A,l,j.x+1,j.y,j))&&C(I,j,1,-1,1.4*h(j.x+1,j.y-1)),j.x>0&&j.y<A.length-1&&(_||v(A,l,j.x,j.y+1,j)&&v(A,l,j.x-1,j.y,j))&&C(I,j,-1,1,1.4*h(j.x-1,j.y+1)));else{var r=[];r.push({x:j.x,y:j.y});for(var i=j.parent;i!=null;)r.push({x:i.x,y:i.y}),i=i.parent;r.reverse();var V0=r;I.callback(V0),delete K0[f],z0.shift()}}else I.callback(null),delete K0[f],z0.shift();else z0.shift()}};var C=function(f,I,j,r,i){var V0=I.x+j,w0=I.y+r;if((m[w0]===void 0||m[w0][V0]===void 0)&&v(A,l,V0,w0,I)){var B0=a(f,V0,w0,I,i);B0.list===void 0?(B0.list=1,f.openList.push(B0)):I.costSoFar+i<B0.costSoFar&&(B0.costSoFar=I.costSoFar+i,B0.parent=I,f.openList.updateItem(B0))}},v=function(f,I,j,r,i){var V0=g[r]&&g[r][j];if(V0){var w0=T(i.x-j,i.y-r);if(!function(){for(var j0=0;j0<V0.length;j0++)if(V0[j0]===w0)return!0;return!1}())return!1}for(var B0=0;B0<I.length;B0++)if(f[r][j]===I[B0])return!0;return!1},T=function(f,I){if(f===0&&I===-1)return H.TOP;if(f===1&&I===-1)return H.TOP_RIGHT;if(f===1&&I===0)return H.RIGHT;if(f===1&&I===1)return H.BOTTOM_RIGHT;if(f===0&&I===1)return H.BOTTOM;if(f===-1&&I===1)return H.BOTTOM_LEFT;if(f===-1&&I===0)return H.LEFT;if(f===-1&&I===-1)return H.TOP_LEFT;throw new Error("These differences are not valid: "+f+", "+I)},h=function(f,I){return p[I]&&p[I][f]||Z0[A[I][f]]},a=function(f,I,j,r,i){if(f.nodeHash[j]!==void 0){if(f.nodeHash[j][I]!==void 0)return f.nodeHash[j][I]}else f.nodeHash[j]={};var V0=o(I,j,f.endX,f.endY);if(r!==null)var w0=r.costSoFar+i;else w0=0;var B0=new R(r,I,j,w0,V0);return f.nodeHash[j][I]=B0,B0},o=function(f,I,j,r){var i,V0;return G0?(i=Math.abs(f-j))<(V0=Math.abs(I-r))?1.4*i+V0:1.4*V0+i:(i=Math.abs(f-j))+(V0=Math.abs(I-r))}},H.TOP="TOP",H.TOP_RIGHT="TOP_RIGHT",H.RIGHT="RIGHT",H.BOTTOM_RIGHT="BOTTOM_RIGHT",H.BOTTOM="BOTTOM",H.BOTTOM_LEFT="BOTTOM_LEFT",H.LEFT="LEFT",H.TOP_LEFT="TOP_LEFT"},function(J,q){J.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(J,q){J.exports=function(G,H,D,R,N){this.parent=G,this.x=H,this.y=D,this.costSoFar=R,this.simpleDistanceToTarget=N,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(J,q,G){J.exports=G(4)},function(J,q,G){var H,D,R;(function(){var N,u,A,b,l,n,m,Z0,p,g,_,K0,z0,X0,G0;A=Math.floor,g=Math.min,u=function(C,v){return C<v?-1:C>v?1:0},p=function(C,v,T,h,a){var o;if(T==null&&(T=0),a==null&&(a=u),T<0)throw new Error("lo must be non-negative");for(h==null&&(h=C.length);T<h;)a(v,C[o=A((T+h)/2)])<0?h=o:T=o+1;return[].splice.apply(C,[T,T-T].concat(v)),v},n=function(C,v,T){return T==null&&(T=u),C.push(v),X0(C,0,C.length-1,T)},l=function(C,v){var T,h;return v==null&&(v=u),T=C.pop(),C.length?(h=C[0],C[0]=T,G0(C,0,v)):h=T,h},Z0=function(C,v,T){var h;return T==null&&(T=u),h=C[0],C[0]=v,G0(C,0,T),h},m=function(C,v,T){var h;return T==null&&(T=u),C.length&&T(C[0],v)<0&&(v=(h=[C[0],v])[0],C[0]=h[1],G0(C,0,T)),v},b=function(C,v){var T,h,a,o,f,I;for(v==null&&(v=u),f=[],h=0,a=(o=function(){I=[];for(var j=0,r=A(C.length/2);0<=r?j<r:j>r;0<=r?j++:j--)I.push(j);return I}.apply(this).reverse()).length;h<a;h++)T=o[h],f.push(G0(C,T,v));return f},z0=function(C,v,T){var h;if(T==null&&(T=u),(h=C.indexOf(v))!==-1)return X0(C,0,h,T),G0(C,h,T)},_=function(C,v,T){var h,a,o,f,I;if(T==null&&(T=u),!(a=C.slice(0,v)).length)return a;for(b(a,T),o=0,f=(I=C.slice(v)).length;o<f;o++)h=I[o],m(a,h,T);return a.sort(T).reverse()},K0=function(C,v,T){var h,a,o,f,I,j,r,i,V0;if(T==null&&(T=u),10*v<=C.length){if(!(o=C.slice(0,v).sort(T)).length)return o;for(a=o[o.length-1],f=0,j=(r=C.slice(v)).length;f<j;f++)T(h=r[f],a)<0&&(p(o,h,0,null,T),o.pop(),a=o[o.length-1]);return o}for(b(C,T),V0=[],I=0,i=g(v,C.length);0<=i?I<i:I>i;0<=i?++I:--I)V0.push(l(C,T));return V0},X0=function(C,v,T,h){var a,o,f;for(h==null&&(h=u),a=C[T];T>v&&h(a,o=C[f=T-1>>1])<0;)C[T]=o,T=f;return C[T]=a},G0=function(C,v,T){var h,a,o,f,I;for(T==null&&(T=u),a=C.length,I=v,o=C[v],h=2*v+1;h<a;)(f=h+1)<a&&!(T(C[h],C[f])<0)&&(h=f),C[v]=C[h],h=2*(v=h)+1;return C[v]=o,X0(C,I,v,T)},N=function(){function C(v){this.cmp=v!=null?v:u,this.nodes=[]}return C.push=n,C.pop=l,C.replace=Z0,C.pushpop=m,C.heapify=b,C.updateItem=z0,C.nlargest=_,C.nsmallest=K0,C.prototype.push=function(v){return n(this.nodes,v,this.cmp)},C.prototype.pop=function(){return l(this.nodes,this.cmp)},C.prototype.peek=function(){return this.nodes[0]},C.prototype.contains=function(v){return this.nodes.indexOf(v)!==-1},C.prototype.replace=function(v){return Z0(this.nodes,v,this.cmp)},C.prototype.pushpop=function(v){return m(this.nodes,v,this.cmp)},C.prototype.heapify=function(){return b(this.nodes,this.cmp)},C.prototype.updateItem=function(v){return z0(this.nodes,v,this.cmp)},C.prototype.clear=function(){return this.nodes=[]},C.prototype.empty=function(){return this.nodes.length===0},C.prototype.size=function(){return this.nodes.length},C.prototype.clone=function(){var v;return(v=new C).nodes=this.nodes.slice(0),v},C.prototype.toArray=function(){return this.nodes.slice(0)},C.prototype.insert=C.prototype.push,C.prototype.top=C.prototype.peek,C.prototype.front=C.prototype.peek,C.prototype.has=C.prototype.contains,C.prototype.copy=C.prototype.clone,C}(),D=[],(R=typeof(H=function(){return N})=="function"?H.apply(q,D):H)===void 0||(J.exports=R)}).call(this)}]);function JZ(J,q,G,H,D){let R=new fJ.js;R.setGrid(J),R.setAcceptableTiles([0]),R.enableSync();let N=null;return R.findPath(q,G,H,D,function(u){N=u}),R.calculate(),N}function N0(){return"player"}function VZ(J,q,G,H){return Math.abs(J-G)+Math.abs(q-H)}function qQ(J){return[...Array(J).keys()]}function UZ(J){let q=bJ(J);for(let H=0;H<q.length;H++){let D=q[H];if(!J._AIs.hasOwnProperty(D))J._AIs[D]=vJ(J,D,J.entities[D].options.ai)}let G=J.entities[N0()];for(let H=0;H<q.length;H++){let D=q[H],R=J.entities[D],N=J._AIs[D],u=VZ(G.x,G.y,R.x,R.y);if(G.options.faction!==R.options.faction&&u<=N.aggroRange){let A=J.maps[J.currentMapId].asMovementMap(),b=JZ(A,R.x,R.y,G.x,G.y);if(b){if(b=b.slice(1),b.length>u)b=null}N.path=b}}for(let H=0;H<q.length;H++){let D=q[H],R=J.entities[D],N=J._AIs[D];if(N.path){let u=N.path[0],A=u.x-R.x,b=u.y-R.y;J=O0(J,R,A,b)}}return J}function bJ(J){let q=T0(J,J.currentMapId),G=[];for(let H=0;H<q.length;H++){let D=q[H];if(!D.id.startsWith("player")&&!!D.options.ai)G.push(D.id)}return G}function vJ(J,q,G){let H=J.entities[q],D=8;switch(G){case F.ais.aggrorange:D=8;break;case F.ais.aggrorangeshort:D=2;break;case F.ais.guardian:D=1;break;default:}return{entityId:q,type:G,aggroRange:D,startMap:H.mapId,startX:H.x,startY:H.y,path:null}}function $Q(J,q){return J._AIs[q]=void 0,delete J._AIs[q],J}var zQ={width:16,height:16},TQ=zQ;function g0(J,q={}){return{type:J,options:q}}function KZ(J){return J.type.name.startsWith("space")}function qZ(J,q){let G=KQ(J,q);for(let D=0;D<G.length;D++){let R=G[D];J=uQ(J,R.id)}let H=T0(J,q);for(let D=0;D<H.length;D++){let R=H[D];J=ZQ(J,R.id),J=$Q(J,R.id)}return J.maps[q]=void 0,delete J.maps[q],J}class h0{id;widthTiles;heightTiles;seed;_tiles;_cacheMovementMap;_tvCount;constructor(J,q,G,H=[]){this.id=J,this.widthTiles=q,this.heightTiles=G,this.seed=null,this._tiles=H,this._cacheMovementMap=null,this._tvCount=0}getTile(J,q){if(J>=0&&J<this.widthTiles&&q>=0&&q<this.heightTiles){let G=q*this.widthTiles+J;return this._tiles[G]}return{}}setTile(J,q,G,H={}){this._cacheMovementMap=null;let D=q*this.widthTiles+J,R=this._tiles[D];return this._tiles[D]=g0(G,H),R}setTvMessage(J){if(this._tvCount){let q=0;for(let G of this._tiles)if(G.type===F.tiles.tv&&q<J.length)G.options.sign=J[q],q++}}pasteOnto(J,q=0,G=0){for(let H=0;H<J.heightTiles;H++)for(let D=0;D<J.widthTiles;D++){let R=J.getTile(D,H);if(R.type!==F.tiles.voidtrue)this.setTile(D+q,H+G,R.type,R.options)}return this}circular(){let J=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let q=-J;q<=J;q++)for(let G=-J;G<=J;G++)if(G*G+q*q>=J*J)this.setTile(G+J-1,q+J-1,F.tiles.voidtrue);return this}sample(J,q){let G=Math.floor(this.widthTiles/J),H=Math.floor(this.heightTiles/q),D=[];for(let R=0;R<q;R++)for(let N=0;N<J;N++){let u={};for(let Z0=0;Z0<H;Z0++)for(let p=0;p<G;p++){let g=this.getTile(N*G+p,R*H+Z0);if(u[g.type.name])u[g.type.name]+=1;else u[g.type.name]=1}let A="",b=0;for(let[Z0,p]of Object.entries(u))if(p>b)A=Z0,b=p;let l="space"+A,n=F.tiles[l]||F.tiles.spacevoid,m={mapId:this.id,x:N*G,y:R*H};D.push(g0(n,m))}return new h0("__sampled_"+J+"_"+q+"_"+this.id,J,q,D)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let J=new Array(this.heightTiles);for(let q=0;q<this.heightTiles;q++){J[q]=new Array(this.widthTiles);for(let G=0;G<this.widthTiles;G++){let H=q*this.widthTiles+G,R=this._tiles[H].type;if(J[q][G]=0,R===F.tiles.rock||R===F.tiles.portalclosed||R===F.tiles.tv||R.name.startsWith("wall"))J[q][G]=1}}return this._cacheMovementMap=J,J}}function x0(J){let q=J.split(/\r?\n/),G=J[0],H="",D=0,R=0,N={},u=[],A=0;for(let l=0;l<q.length;l++){let n=q[l];if(n.startsWith(G)){if(n.startsWith(G+"!id"))H=n.slice(5);else if(n.startsWith(G+"!size")){let m=n.split(" ").slice(1);D=Number(m[0]),R=Number(m[1])}else if(n.startsWith(G+"!")){let m=n[2],Z0=n.slice(4);N[m]=Z0}}else for(let m=0;m<n.length;m++){let Z0=n[m],p=N[Z0];if(e.debug&&!p)console.log("DEBUG Broken map: "+H);let g=p.split(" "),_={};if(p.startsWith("portal ")||p.startsWith("portalhidden ")||p.startsWith("portallauncher ")||p.startsWith("portalstart"))p=g[0],_.mapId=g[1],_.x=Number(g[2]),_.y=Number(g[3]);if(p.startsWith("wall ")&&g.length>=2)p="wall",_.sign=g[1];if(p.startsWith("tv ")&&g.length>=2){if(p="tv",_.tvScreen=A,g.length===3)_.sign=g[2][A];A++}u.push(g0(F.tiles[p],_))}}if(e.debug&&!(A===0||A===12))console.log("DEBUG Broken map: "+H+" (invalid TV size "+A+", allowed are 0 or 12 characters per map)");let b=new h0(H,D,R,u);return b._tvCount=A,b}function zZ(J,q,G){switch(G){case F.commands.N:J=O0(J,q,0,-1);break;case F.commands.W:J=O0(J,q,-1,0);break;case F.commands.S:J=O0(J,q,0,1);break;case F.commands.E:J=O0(J,q,1,0);break;case F.commands.A:J=$Z(J,q,F.commands.A);break;case F.commands.B:J=$Z(J,q,F.commands.B);break;default:}return J}function O0(J,q,G,H,D=0){let R=J.maps[q.mapId],N=iQ(J,R.id,q.x+G,q.y+H),u=J.tools[q.id];if(N)if(R0(N)){if(!R0(q)&&D<1)J=O0(J,N,G,H,D++),J=O0(J,q,G,H,D++)}else J=tQ(J,q,N);else if(TJ(R,q,G,H))J=uJ(J,R,q,G,H),J._energyQueue.push({entityId:q.id,energyDelta:-1*D});else if(gJ(R,q,u,G,H)){if(R.setTile(q.x+G,q.y+H,F.tiles.void).type===F.tiles.rock){let b=J.rng.getPercentage();if(b<=1)J=J0(J,F.items.matter,R.id,q.x+G,q.y+H);else if(b<=34)J=J0(J,F.items.junk,R.id,q.x+G,q.y+H)}J._energyQueue.push({entityId:q.id,energyDelta:u.type.energyCost})}return J}function $Z(J,q,G){let D=VQ(J,q)[G.key],N=J.maps[q.mapId].getTile(q.x,q.y);switch(D){case F.actions.Enter:J=BZ(J,q,N);break;case F.actions.Launch:J=kJ(J,q,N);case F.actions.Wait:break;default:}return J}function uJ(J,q,G,H,D){G.x+=H,G.y+=D;let R=QZ(J,G.mapId,G.x,G.y);if(R)J=ZZ(J,G,R);let N=q.getTile(G.x,G.y);if(N.type.name.startsWith("portal"))J=BZ(J,G,N);if(N.type.name.startsWith("move"))switch(N.type.name){case"movenorth":J=O0(J,G,0,-1);break;case"moveeast":J=O0(J,G,1,0);break;case"movesouth":J=O0(J,G,0,1);break;case"movewest":J=O0(J,G,-1,0);break;default:}return J}function BZ(J,q,G){if(q.id.startsWith("player"))J.currentMapId=G.options.mapId;if(KZ(G))J.lastSpacePositionByEntity[q.id]={mapId:q.mapId,x:q.x,y:q.y};else J.lastSpacePositionByEntity[q.id]=void 0,delete J.lastSpacePositionByEntity[q.id];let H={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:G.type,newMapId:G.options.mapId,newX:G.options.x,newY:G.options.y};return q.mapId=G.options.mapId,q.x=G.options.x,q.y=G.options.y,J=bQ(J,"entitymap.updated.event",H),J}function kJ(J,q,G){if(J.lastSpacePositionByEntity[q.id]){if(q.id.startsWith("player"))J.currentMapId=J.lastSpacePositionByEntity[q.id].mapId;let H={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:G.type,newMapId:J.lastSpacePositionByEntity[q.id].mapId,newX:J.lastSpacePositionByEntity[q.id].x,newY:J.lastSpacePositionByEntity[q.id].y};q.mapId=H.newMapId,q.x=H.newX,q.y=H.newY,J._energyQueue.push({entityId:q.id,energyDelta:F.actions.Launch.energyDelta}),J.lastSpacePositionByEntity[q.id]=void 0,delete J.lastSpacePositionByEntity[q.id],J=bQ(J,"entitymap.updated.event",H)}return J}function XZ(J){for(let q in J.entities){let G=J.entities[q],H=J.tools[q],R=J.maps[G.mapId].getTile(G.x,G.y),N=R.type.energyDelta;if(R.type===F.tiles.water&&H?.type.effects.includes(F.effects.WaterShield.name))N/=2;J._energyQueue.push({entityId:q,energyDelta:N})}return J}function LZ(J,q){let G=J.entities[q.entityId];switch(q.oldTileType){case F.tiles.portalstartaerobot:J=JQ(J,G,F.entities.AeroBot);break;case F.tiles.portalstartworkbot:J=JQ(J,G,F.entities.WorkBot);break;default:}return J}function TJ(J,q,G,H){let D=q.x+G,R=q.y+H,N=J.getTile(D,R).type;return D>=0&&D<J.widthTiles&&R>=0&&R<J.heightTiles&&N!==F.tiles.rock&&N!==F.tiles.portalclosed&&!N.name.startsWith("wall")}function gJ(J,q,G,H,D){let R=q.x+H,N=q.y+D,u=J.getTile(R,N).type;if(G)return G.type.effects.includes(F.effects.WallCrusher.name)&&u===F.tiles.wallweak||G.type.effects.includes(F.effects.RockCrusher.name)&&u===F.tiles.rock;return!1}var YZ=NQ(XQ(),1);class b0{seed;_rotRng;constructor(J=1337){this.seed=J,this._rotRng=YZ.RNG.clone(),this._rotRng.setSeed(J)}getPercentage(){return this._rotRng.getPercentage()}getItem(J){return this._rotRng.getItem(J)}}function HZ(J,q){if(q.seed===1337)J=d(J,"batteryvalkyrie0",F.entities.Valkyrie,q.id,130,127,{faction:F.factions.Spirits}),J=d(J,"batteryvalkyrie1",F.entities.Valkyrie,q.id,124,127,{faction:F.factions.Spirits}),J=J0(J,F.items.trident,q.id,127,130);else{let G=new b0(q.seed);for(let H=0;H<q.heightTiles;H++)for(let D=0;D<q.widthTiles;D++){let R=q.getTile(D,H);if(G.getPercentage()<=1&&(R.type===F.tiles.void||R.type===F.tiles.tree))switch(G.getItem(["pioneer","deviant","junk","matter","junk","matter"])){case"deviant":J=d(J,q.id+"_deviant_"+D+"_"+H,F.entities.Deviant,q.id,D,H,{faction:F.factions.Pyrates,ai:F.ais.aggrorange});break;case"pioneer":J=d(J,q.id+"_pioneer_"+D+"_"+H,F.entities.Pioneer,q.id,D,H,{faction:F.factions.Pyrates,ai:F.ais.aggrorange});break;case"junk":J=J0(J,F.items.junk,q.id,D,H);break;case"matter":J=J0(J,F.items.matter,q.id,D,H);break}}}return J}var LQ=NQ(XQ(),1);var hJ=1337,PZ=55;function FZ(J,q=hJ){LQ.RNG.setSeed(q);let G=new LQ.Noise.Simplex,H=zQ.width*TQ.width,D=zQ.height*TQ.height,R=[];for(let A=0;A<D;A++)for(let b=0;b<H;b++){let l=G.get(b/PZ,A/PZ),n;if(l<=-0.5)n=F.tiles.water;else if(l<=0)n=F.tiles.void;else if(l<0.5)n=F.tiles.tree;else n=F.tiles.rock;R.push(g0(n))}let N="simplex="+q,u=new h0(N,H,D,R);return u.seed=q,J.maps[N]=u,J}var xJ=1337;function DZ(J,q=xJ){let G=wZ(1024,1024,F.tiles.void);G.id="solarsystem="+q,J.maps[G.id]=G;let H=new b0(q),D=new b0(q),R=H.getItem([2,3,4,5,6,7,8,9,10,11,12]),N=128,u=512-N,A=Math.floor(u/R);G=mJ(G,H);let b=wZ(128,128,F.tiles.voidtrue);_J(b,63,63,62,F.tiles.sun),yJ(b,63,63,F.tiles.sun),G.pasteOnto(b,448,448);for(let m=N;m<512;m+=A){let Z0=H.getItem([-1,1])*H.getItem(qQ(m)),p=H.getItem([-1,1])*Math.floor(Math.sqrt(m*m-Z0*Z0));Z0+=512,p+=512;let g=H.getItem([16,24,32]),_=Math.floor(g/2)-1;J=FZ(J,q);let K0=J.maps["simplex="+q],z0=F.map_snippets.launcher;z0=z0.replace("!!O portallauncher space 0 0",`!!O portallauncher ${G.id} ${Z0} ${p}`);let X0=x0(z0),G0=D.getItem(qQ(K0.widthTiles-X0.widthTiles)),C=D.getItem(qQ(K0.heightTiles-X0.heightTiles));K0.pasteOnto(X0,G0,C),J=HZ(J,K0);let v=K0.sample(g,g).circular();G.pasteOnto(v,Z0-(_+1),p-(_+1)),q++}let l=F.map_snippets.space_bot_station;l=l.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let n=x0(l);return G.pasteOnto(n,583,398),J}function wZ(J,q,G){let H=[];for(let N=0;N<J*q;N++)H.push(g0(G));return new h0("__temp",J,q,H)}function mJ(J,q){for(let G=0;G<J.heightTiles;G++)for(let H=0;H<J.widthTiles;H++)if(q.getPercentage()<=1)J.setTile(H,G,q.getItem([F.tiles.spacevoidstarwhite,F.tiles.spacevoidstaryellow]));return J}function _J(J,q,G,H,D){let R=1-H,N=1,u=-2*H,A=0,b=H;J.setTile(q,G+H,D),J.setTile(q,G-H,D),J.setTile(q+H,G,D),J.setTile(q-H,G,D);while(A<b){if(R>=0)b-=1,u+=2,R+=u;A+=1,N+=2,R+=N,J.setTile(q+A,G+b,D),J.setTile(q-A,G+b,D),J.setTile(q+A,G-b,D),J.setTile(q-A,G-b,D),J.setTile(q+b,G+A,D),J.setTile(q-b,G+A,D),J.setTile(q+b,G-A,D),J.setTile(q-b,G-A,D)}return J}function yJ(J,q,G,H){let{widthTiles:D,heightTiles:R}=J,N=[];N.push({x:q,y:G});let u=void 0;while(typeof(u=N.shift())!=="undefined"){let A=u,b=u;if(u.x+1<D)b={x:u.x+1,y:u.y};while(J.getTile(A.x,A.y).type!==H){if(J.setTile(A.x,A.y,H),A.y+1<R){if(J.getTile(A.x,A.y+1).type!==H)N.push({x:A.x,y:A.y+1})}if(A.y-1>=0){if(J.getTile(A.x,A.y-1).type!==H)N.push({x:A.x,y:A.y-1})}if(A.x-1>=0)A.x-=1;else break}while(J.getTile(b.x,b.y).type!==H){if(J.setTile(b.x,b.y,H),b.y+1<R){if(J.getTile(b.x,b.y+1).type!==H)N.push({x:b.x,y:b.y+1})}if(b.y-1>=0){if(J.getTile(b.x,b.y-1).type!==H)N.push({x:b.x,y:b.y-1})}if(b.x+1<D)b.x+=1;else break}}return J}var pJ=`!
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
`;function OZ(J,q){if(q?.oldMapId?.startsWith("shop_instance")){J=qZ(J,q.oldMapId);let G=J.maps[q.newMapId],H=G.getTile(q.newX,q.newY);G.setTile(q.newX,q.newY,H.type,{mapId:"shop_instance",x:q.oldX,y:q.oldY})}if(q?.newMapId?.startsWith("shop_instance")){let G=x0(pJ);G.id+="_"+q.oldMapId+"_"+q.entityId,G.setTile(q.newX,q.newY,F.tiles.portal,{mapId:q.oldMapId,x:q.oldX,y:q.oldY}),J.maps[q.oldMapId].setTile(q.oldX,q.oldY,q.oldTileType,{mapId:G.id,x:q.newX,y:q.newY});let D=J.entities[q.entityId];if(D.id.startsWith("player"))J.currentMapId=G.id;if(D.mapId=G.id,D.x=q.newX,D.Y=q.newY,J.maps[G.id]=G,J=r0(J,F.items.hammer,G.id,4,4,0,-200),J=r0(J,F.items.pickaxe,G.id,4,6,0,-200),J=r0(J,F.items.battery,G.id,4,8,0,-200),J=r0(J,F.items.gold,G.id,4,10,0,-1e4),J=d(J,G.id+"_shopkeeper",F.entities.AeroBot,G.id,6,2,{faction:D.options.faction}),q?.oldMapId.startsWith("bot_stadium"))J=d(J,G.id+"_shopper",F.entities.WorkBot,G.id,1,12,{faction:D.options.faction});else if(q?.oldMapId.startsWith("bot_bar"))J=d(J,G.id+"_shopper",F.entities.AeroBot,G.id,4,11,{faction:D.options.faction})}return J}function MZ(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!1,actionLog:[],currentMapId:"",entities:{},items:{},lastSpacePositionByEntity:{},maps:{},rng:new b0,tools:{},tvs:{}}}function WZ(J){let q=void 0;while(typeof(q=J._combatQueue.shift())!=="undefined"){let G=-1,H=-5,D=s0(J,q.entityId);if(D)G=D.type.energyCost,H=-1*Math.abs(D.type.damage);J._energyQueue.push({entityId:q.entityId,energyDelta:G}),J._energyQueue.push({entityId:q.otherEntityId,energyDelta:H})}return J}function EZ(J){let q=void 0;while(typeof(q=J._energyQueue.shift())!=="undefined"){let G=J.entities[q.entityId];if(G.energy=Math.min(G.energy+q.energyDelta,G.energyMax),G.energy<=0){if(J._despawnQueue.push(G.id),!R0(G)){let H=Math.max(1,Math.floor(G.energyMax/3));J=eQ(J,H,G.mapId,G.x,G.y)}}}return J}function RZ(J){let q=void 0;while(typeof(q=J._despawnQueue.shift())!=="undefined")J=ZQ(J,q),J=$Q(J,q);return J}function jZ(J){return J}function CZ(J){return J=UZ(J),J=WZ(J),J=XZ(J),J=EZ(J),J=RZ(J),J=jZ(J),J}class GQ{state;constructor(){}init(){this.state=MZ(),this.state=vQ(this.state,"entitymap.updated.event",LZ),this.state=vQ(this.state,"entitymap.updated.event",OZ),this.state=DZ(this.state);for(let J in F.maps)this.state.maps[J]=x0(F.maps[J]);this.state=d(this.state,"manual0",F.entities.Spirit,"manual",4,26,{faction:F.factions.Spirits}),this.state=d(this.state,"manual1",F.entities.AeroBot,"manual",4,27,{faction:F.factions.Spirits}),this.state=d(this.state,"manual2",F.entities.WorkBot,"manual",4,28,{faction:F.factions.Spirits}),this.state=d(this.state,"manual3",F.entities.Cleaner,"manual",4,29,{faction:F.factions.Spirits}),this.state=d(this.state,"manual4",F.entities.Pioneer,"manual",4,30,{faction:F.factions.Spirits}),this.state=d(this.state,"manual5",F.entities.Spirit,"manual",54,36,{faction:F.factions.Pyrates,ai:F.ais.aggrorange}),this.state=J0(this.state,F.items.junk,"manual",4,36),this.state=J0(this.state,F.items.goo,"manual",12,36),this.state=J0(this.state,F.items.matter,"manual",4,37),this.state=J0(this.state,F.items.gold,"manual",4,38),this.state=J0(this.state,F.items.energy,"manual",4,39),this.state=J0(this.state,F.items.battery,"manual",4,40),this.state=J0(this.state,F.items.wrench,"manual",4,41),this.state=d(this.state,"pioneerguardian0",F.entities.Pioneer,"bot_station",8,3,{faction:F.factions.Guardians,ai:F.ais.aggrorangeshort}),this.state=kQ(this.state,"pioneerguardian0",F.items.hammer),this.state=d(this.state,"cleanerguardian0",F.entities.Cleaner,"bot_station",10,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian1",F.entities.Cleaner,"bot_station",12,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian2",F.entities.Cleaner,"bot_station",14,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian3",F.entities.Cleaner,"bot_station",16,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian4",F.entities.Cleaner,"bot_station",18,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian5",F.entities.Cleaner,"bot_station",20,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian6",F.entities.Cleaner,"bot_station",22,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian7",F.entities.Cleaner,"bot_station",24,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian8",F.entities.Cleaner,"bot_station",26,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=d(this.state,"cleanerguardian9",F.entities.Cleaner,"bot_station",28,9,{faction:F.factions.Guardians,ai:F.ais.guardian}),this.state=fQ(this.state,"bot_bar",14,3),this.state=fQ(this.state,"bot_bar",14,12),this.state=d(this.state,"hostess0",F.entities.AeroBot,"bot_bar",2,4,{faction:F.factions.Spirits}),this.state=d(this.state,"hostess1",F.entities.AeroBot,"bot_bar",4,8,{faction:F.factions.Spirits}),this.state=d(this.state,"hostess2",F.entities.AeroBot,"bot_bar",10,7,{faction:F.factions.Spirits}),this.state=d(this.state,"hostess3",F.entities.AeroBot,"bot_bar",21,3,{faction:F.factions.Spirits}),this.state=d(this.state,"hostess4",F.entities.AeroBot,"bot_bar",21,5,{faction:F.factions.Spirits}),this.state=d(this.state,"cleanerjailer0",F.entities.Cleaner,"bot_prison",18,11,{faction:F.factions.Guardians,ai:F.ais.aggrorange}),this.state=d(this.state,"cleanerjailer1",F.entities.Cleaner,"bot_prison",17,2,{faction:F.factions.Guardians,ai:F.ais.aggrorange}),this.state=d(this.state,"cleanerjailer2",F.entities.Cleaner,"bot_prison",24,5,{faction:F.factions.Guardians,ai:F.ais.aggrorange}),this.state=d(this.state,"cleanerjailer3",F.entities.Cleaner,"bot_prison",29,24,{faction:F.factions.Guardians,ai:F.ais.aggrorangeshort}),this.state=d(this.state,"prisoner0",F.entities.AeroBot,"bot_prison",34,22,{faction:F.factions.Spirits}),this.state=d(this.state,"prisoner1",F.entities.WorkBot,"bot_prison",9,22,{faction:F.factions.Spirits}),this.state=J0(this.state,F.items.broom,"bot_prison",28,1),this.state=J0(this.state,F.items.battery,"bot_prison",43,30),this.state=J0(this.state,F.items.matter,"bot_prison",9,30),this.state=J0(this.state,F.items.pickaxe,"bot_prison",9,21),this.state=J0(this.state,F.items.battery,"bot_dormitory",13,8),this.state=J0(this.state,F.items.junk,"bot_dormitory_hidden",1,2),this.state=J0(this.state,F.items.battery,"bot_dormitory_hidden",2,2),this.state=J0(this.state,F.items.shocker,"bot_bar",10,11),this.state=J0(this.state,F.items.hammer,"bot_elevator",12,3),this.state=J0(this.state,F.items.wrench,"bot_factory",45,19),this.state=J0(this.state,F.items.battery,"bot_factory",4,13);for(let J=2;J<=8;J++)for(let q=2;q<=8;q++)this.state=J0(this.state,F.items.junk,"bot_factory",q,J);this.state=SQ(this.state,"playground",9,9),this.state=SQ(this.state,"playground",10,9),this.state=J0(this.state,F.items.trident,"playground",9,17);for(let J=1;J<=18;J++)this.state=J0(this.state,F.items.battery,"playground",J,18);return this.state.currentMapId="botmos_hull_selection",this.state=d(this.state,N0(),F.entities.Spirit,this.state.currentMapId,9,5,{faction:F.factions.Spirits}),this.state}update(J){let q=this.state.entities[N0()];if(q){if(J){if(J===F.commands.M)this.state._menuOpen=!this.state._menuOpen;else this.state=zZ(this.state,q,J),this.state=CZ(this.state);this.state.actionLog.push(J.key)}}else aQ("Game over! "+this.state.actionLog.length+" Turns: "+this.state.actionLog.join("")),this.state.currentMapId="botmos_hull_selection",this.state=d(this.state,N0(),F.entities.Spirit,this.state.currentMapId,9,5,{faction:F.factions.Spirits});return this.state}play(J){for(let q=0;q<J.length;q++){let G=J[q];this.update(F.commands[G])}return this.state}}var c={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1},gQ=[],hQ=void 0,NZ=0;document.body.addEventListener("keydown",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":c.up=!0,$0(J);break;case"a":case"ArrowLeft":c.left=!0,$0(J);break;case"s":case"ArrowDown":c.down=!0,$0(J);break;case"d":case"ArrowRight":c.right=!0,$0(J);break;case"x":c.a=!0,$0(J);break;case" ":case"y":case"z":c.b=!0,$0(J);break;case"m":c.menu=!0,$0(J);break;default:}I0(IZ())});function I0(J){let q=Date.now();if(hQ!==void 0&&q-NZ>=80)NZ=q,hQ(J)}document.body.addEventListener("keyup",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":c.up=!1,$0(J);break;case"a":case"ArrowLeft":c.left=!1,$0(J);break;case"s":case"ArrowDown":c.down=!1,$0(J);break;case"d":case"ArrowRight":c.right=!1,$0(J);break;case"x":c.a=!1,$0(J);break;case" ":case"y":case"z":c.b=!1,$0(J);break;case"m":c.menu=!1,$0(J);break;default:}});document.body.addEventListener("click",function(J){let{clientX:q,clientY:G}=J,D=document.body.clientWidth/3,N=document.body.clientHeight/3;if(q>=D&&q<2*D&&G<N)I0(F.commands.N),$0(J);else if(q<D&&G<N)I0(F.commands.B),$0(J);else if(q>=2*D&&G<N)I0(F.commands.A),$0(J);else if(q<D&&G>=N&&G<2*N)I0(F.commands.W),$0(J);else if(q>=2*D&&G>=N&&G<2*N)I0(F.commands.E),$0(J);else if(q>=D&&q<2*D&&G>=2*N)I0(F.commands.S),$0(J);else if(q>=D&&q<2*D&&G>=N&&G<2*N)I0(F.commands.M),$0(J)});function $0(J){J.preventDefault(),J.stopPropagation()}var o0=null;function cJ(){let J=null;if(c.right)J=F.commands.E;if(c.left)J=F.commands.W;if(c.down)J=F.commands.S;if(c.up)J=F.commands.N;if(c.up&&c.right){if(J===F.commands.N&&o0===F.commands.N)J=F.commands.E}if(c.up&&c.left){if(J===F.commands.N&&o0===F.commands.N)J=F.commands.W}if(c.down&&c.right){if(J===F.commands.S&&o0===F.commands.S)J=F.commands.E}if(c.down&&c.left){if(J===F.commands.S&&o0===F.commands.S)J=F.commands.W}if(c.a)J=F.commands.A;if(c.b)J=F.commands.B;if(c.menu)J=F.commands.M;if(o0=J,J!==null)gQ.push(J)}function IZ(){cJ();let J=gQ.shift()||null;return gQ=[],J}var AZ=void 0;window.addEventListener("gamepadconnected",(J)=>{AZ=setInterval(function(){let q=navigator.getGamepads()[J.gamepad?.index];if(c.right=q.buttons[15].pressed,c.left=q.buttons[14].pressed,c.down=q.buttons[13].pressed,c.up=q.buttons[12].pressed,c.a=q.buttons[0].pressed||q.buttons[2].pressed,c.b=q.buttons[1].pressed||q.buttons[3].pressed,c.menu=q.buttons[9].pressed,c.right||c.left||c.down||c.up||c.a||c.b||c.menu)I0(IZ())},100)});window.addEventListener("gamepaddisconnected",(J)=>{clearInterval(AZ)});function SZ(J){hQ=J}var bZ=NQ(XQ(),1);var v0=new bZ.Display(P0);document.body.appendChild(v0.getContainer());function YQ(J){return F.colors[J]}function dJ(J,q){let G=J.currentMapId,H=J.maps[G];for(var D=0;D<q.height;D++)for(var R=0;R<q.width;R++){var N=H.getTile(q.x+R,q.y+D),u=F.colors.black,A=F.colors.white,b="";if(!!N&&!!N.type)u=YQ(N.type.bg),A=YQ(N.type.fg),b=N.options.sign||N.type.icon;v0.draw(R,D,b,A,u)}let l=KQ(J,G);for(let g=0;g<l.length;g++){let _=l[g];v0.drawOver(_.x-q.x,_.y-q.y,_.type.icon,YQ(_.type.color))}let n=N0(),m=J.entities[n],Z0=((m||{}).options||{}).faction||void 0,p=T0(J,G);for(let g=0;g<p.length;g++){let _=p[g],K0=Z0===_.options.faction?F.colors.white:YQ(_.options.faction.color);if(e.highlightEnemy&&!R0(_))K0=Z0===_.options.faction?F.colors.cybergreen:F.colors.cybermagenta;if(_===m)K0=F.colors.white;v0.drawOver(_.x-q.x,_.y-q.y,_.type.icon,K0)}if(!!m&&e.showUI){let g="",_=s0(J,n);if(_)g+=_.type.name+" ";let K0=VQ(J,m),z0=m.type.icon+" "+m.energy+"/"+m.energyMax+" "+g+"X:"+K0.A.name+" Y:"+K0.B.name,X0=P0.height-1;if(m.y-q.y>=P0.height-3)X0=0;v0.drawText(0,X0,"%c{white}%b{black}"+z0,q.width)}if(J._menuOpen){let g=[];if(g.push("BotMos Menu"),g.push(""),m){g.push("Hull: "+m.type.icon+" ("+m.type.name+")"),g.push("Energy: "+m.energy+"/"+m.energyMax),g.push("Gold: "+m.gold),g.push("Matter: "+m.matter);let _=s0(J,n);if(_)g.push("Tool: "+_.type.name);if(e.debug)g.push("DEBUG Position: "+m.x+","+m.y),g.push("DEBUG Map: "+m.mapId)}for(let _=0;_<g.length;_++)v0.drawText(0,_,"%c{#74ee15}%b{black}"+g[_],q.width)}for(let g=0;g<AQ.length;g++){let _=AQ[g];v0.drawText(0,g,"%c{green}%b{black}"+_,q.width)}}var fZ={x:0,y:0};async function m0(J){let q=J.entities[N0()],G=q?q:fZ,H=lJ(G);dJ(J,H),fZ=G}async function vZ(J){v0.setOptions(J)}function lJ(J){return{x:Math.min(Math.max(0,J.x-Math.floor(P0.width/2)),IQ.WIDTH-P0.width),y:Math.min(Math.max(0,J.y-Math.floor(P0.height/2)),IQ.HEIGHT-P0.height),width:P0.width,height:P0.height}}var M0=new GQ;window.onload=function(){m0(M0.init())};window.onresize=function(){let J=typeof window!=="undefined"?window.innerWidth:0,q=typeof window!=="undefined"?window.innerHeight:0;e.cameraWidth=Math.floor(J/e.fontSize),e.cameraHeight=Math.floor(q/e.fontSize),P0.width=Math.floor(e.cameraWidth*(1/e.zoom)),P0.height=Math.floor(e.cameraHeight*(1/e.zoom)),vZ(P0),m0(M0.state)};SZ(function(J){m0(M0.update(J))});if(!window.BMActionLog)window.BMActionLog=function(){return M0.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(J){m0(M0.play(J))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){e.debug=!e.debug,m0(M0.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){e.showUI=!e.showUI,m0(M0.state)};if(e.debug){if(!window.BMDebugState)window.BMDebugState=function(){return M0.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let J=Object.keys(M0.state.maps).length,q=Object.keys(M0.state.entities).length,G=Object.keys(M0.state.items).length,H=Object.keys(M0.state.tools).length;return`Maps: ${J}, Entities: ${q}, Items: ${G}, Tools: ${H}`}}window.focus();
