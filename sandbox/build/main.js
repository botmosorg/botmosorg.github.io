var eZ=Object.create;var{getPrototypeOf:ZJ,defineProperty:G6,getOwnPropertyNames:JJ}=Object;var QJ=Object.prototype.hasOwnProperty;var y1=(J,q,$)=>{$=J!=null?eZ(ZJ(J)):{};let B=q||!J||!J.__esModule?G6($,"default",{value:J,enumerable:!0}):$;for(let H of JJ(J))if(!QJ.call(B,H))G6(B,H,{get:()=>J[H],enumerable:!0});return B};var VJ=(J,q)=>()=>(q||J((q={exports:{}}).exports,q),q.exports);var M1=VJ((R1,u6)=>{function c0(J){if(J===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return J}function PJ(J,q){var $=typeof Symbol!=="undefined"&&J[Symbol.iterator]||J["@@iterator"];if($)return($=$.call(J)).next.bind($);if(Array.isArray(J)||($=HJ(J))||q&&J&&typeof J.length==="number"){if($)J=$;var B=0;return function(){if(B>=J.length)return{done:!0};return{done:!1,value:J[B++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HJ(J,q){if(!J)return;if(typeof J==="string")return k6(J,q);var $=Object.prototype.toString.call(J).slice(8,-1);if($==="Object"&&J.constructor)$=J.constructor.name;if($==="Map"||$==="Set")return Array.from(J);if($==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($))return k6(J,q)}function k6(J,q){if(q==null||q>J.length)q=J.length;for(var $=0,B=new Array(q);$<q;$++)B[$]=J[$];return B}function q0(J,q){J.prototype=Object.create(q.prototype),J.prototype.constructor=J,i1(J,q)}function i1(J,q){return i1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function $(B,H){return B.__proto__=H,B},i1(J,q)}(function(J,q){typeof R1==="object"&&typeof u6!=="undefined"?q(R1):typeof define==="function"&&define.amd?define(["exports"],q):(J=typeof globalThis!=="undefined"?globalThis:J||self,q(J.ROT={}))})(R1,function(J){var q=0.00000000023283064365386963,$=function(){function Y(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var G=Y.prototype;return G.getSeed=function U(){return this._seed},G.setSeed=function U(K){return K=K<1?1/K:K,this._seed=K,this._s0=(K>>>0)*q,K=K*69069+1>>>0,this._s1=K*q,K=K*69069+1>>>0,this._s2=K*q,this._c=1,this},G.getUniform=function U(){var K=2091639*this._s0+this._c*q;return this._s0=this._s1,this._s1=this._s2,this._c=K|0,this._s2=K-this._c,this._s2},G.getUniformInt=function U(K,Z){var Q=Math.max(K,Z),V=Math.min(K,Z);return Math.floor(this.getUniform()*(Q-V+1))+V},G.getNormal=function U(K,Z){if(K===void 0)K=0;if(Z===void 0)Z=1;var Q,V,z;do Q=2*this.getUniform()-1,V=2*this.getUniform()-1,z=Q*Q+V*V;while(z>1||z==0);var X=Q*Math.sqrt(-2*Math.log(z)/z);return K+X*Z},G.getPercentage=function U(){return 1+Math.floor(this.getUniform()*100)},G.getItem=function U(K){if(!K.length)return null;return K[Math.floor(this.getUniform()*K.length)]},G.shuffle=function U(K){var Z=[],Q=K.slice();while(Q.length){var V=Q.indexOf(this.getItem(Q));Z.push(Q.splice(V,1)[0])}return Z},G.getWeightedValue=function U(K){var Z=0;for(var Q in K)Z+=K[Q];var V=this.getUniform()*Z,z,X=0;for(z in K)if(X+=K[z],V<X)return z;return z},G.getState=function U(){return[this._s0,this._s1,this._s2,this._c]},G.setState=function U(K){return this._s0=K[0],this._s1=K[1],this._s2=K[2],this._c=K[3],this},G.clone=function U(){var K=new Y;return K.setState(this.getState())},Y}(),B=new $().setSeed(Date.now()),H=function(){function Y(){}var G=Y.prototype;return G.getContainer=function U(){return null},G.setOptions=function U(K){this._options=K},Y}(),R=function(Y){q0(G,Y);function G(){var K=Y.call(this)||this;return K._ctx=document.createElement("canvas").getContext("2d"),K}var U=G.prototype;return U.schedule=function K(Z){requestAnimationFrame(Z)},U.getContainer=function K(){return this._ctx.canvas},U.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z);var Q=Z.fontStyle?Z.fontStyle+" ":"",V=Q+" "+Z.fontSize+"px "+Z.fontFamily;this._ctx.font=V,this._updateSize(),this._ctx.font=V,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},U.clear=function K(){var Z=this._ctx.globalCompositeOperation;this._ctx.globalCompositeOperation="copy",this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.globalCompositeOperation=Z},U.eventToPosition=function K(Z,Q){var V=this._ctx.canvas,z=V.getBoundingClientRect();if(Z-=z.left,Q-=z.top,Z*=V.width/z.width,Q*=V.height/z.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},G}(H);function C(Y,G){return(Y%G+G)%G}function S(Y,G,U){if(G===void 0)G=0;if(U===void 0)U=1;if(Y<G)return G;if(Y>U)return U;return Y}function N(Y){return Y.charAt(0).toUpperCase()+Y.substring(1)}function f(Y){for(var G=arguments.length,U=new Array(G>1?G-1:0),K=1;K<G;K++)U[K-1]=arguments[K];var Z=f.map,Q=function V(z,X,L,w){if(Y.charAt(w-1)=="%")return z.substring(1);if(!U.length)return z;var P=U[0],D=X||L,W=D.split(","),M=W.shift()||"",O=Z[M.toLowerCase()];if(!O)return z;P=U.shift();var j=P[O].apply(P,W),I=M.charAt(0);if(I!=I.toLowerCase())j=N(j);return j};return Y.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,Q)}f.map={s:"toString"};var y=Object.freeze({__proto__:null,mod:C,clamp:S,capitalize:N,format:f}),J0=function(Y){q0(G,Y);function G(){var K=Y.call(this)||this;return K._spacingX=0,K._spacingY=0,K._hexSize=0,K}var U=G.prototype;return U.draw=function K(Z,Q){var V=Z[0],z=Z[1],X=Z[2],L=Z[3],w=Z[4],P=[(V+1)*this._spacingX,z*this._spacingY+this._hexSize];if(this._options.transpose)P.reverse();if(Q)this._ctx.fillStyle=w,this._fill(P[0],P[1]);if(!X)return;this._ctx.fillStyle=L;var D=[].concat(X);for(var W=0;W<D.length;W++)this._ctx.fillText(D[W],P[0],Math.ceil(P[1]))},U.computeSize=function K(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=Math.floor(Z/this._spacingX)-1,z=Math.floor((Q-2*this._hexSize)/this._spacingY+1);return[V,z]},U.computeFontSize=function K(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=2*Z/((this._options.width+1)*Math.sqrt(3))-1,z=Q/(2+1.5*(this._options.height-1)),X=Math.min(V,z),L=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var w=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=L;var P=w/100;X=Math.floor(X)+1;var D=2*X/(this._options.spacing*(1+P/Math.sqrt(3)));return Math.ceil(D)-1},U._normalizedEventToPosition=function K(Z,Q){var V;if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q,V=this._ctx.canvas.width;else V=this._ctx.canvas.height;var z=V/this._options.height;if(Q=Math.floor(Q/z),C(Q,2))Z-=this._spacingX,Z=1+2*Math.floor(Z/(2*this._spacingX));else Z=2*Math.floor(Z/(2*this._spacingX));return[Z,Q]},U._fill=function K(Z,Q){var V=this._hexSize,z=this._options.border,X=this._ctx;if(X.beginPath(),this._options.transpose)X.moveTo(Z-V+z,Q),X.lineTo(Z-V/2+z,Q+this._spacingX-z),X.lineTo(Z+V/2-z,Q+this._spacingX-z),X.lineTo(Z+V-z,Q),X.lineTo(Z+V/2-z,Q-this._spacingX+z),X.lineTo(Z-V/2+z,Q-this._spacingX+z),X.lineTo(Z-V+z,Q);else X.moveTo(Z,Q-V+z),X.lineTo(Z+this._spacingX-z,Q-V/2+z),X.lineTo(Z+this._spacingX-z,Q+V/2-z),X.lineTo(Z,Q+V-z),X.lineTo(Z-this._spacingX+z,Q+V/2-z),X.lineTo(Z-this._spacingX+z,Q-V/2+z),X.lineTo(Z,Q-V+z);X.fill()},U._updateSize=function K(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(Z.spacing*(Z.fontSize+Q/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var V,z;if(Z.transpose)V="height",z="width";else V="width",z="height";this._ctx.canvas[V]=Math.ceil((Z.width+1)*this._spacingX),this._ctx.canvas[z]=Math.ceil((Z.height-1)*this._spacingY+2*this._hexSize)},G}(R),V0=function(Y){q0(G,Y);function G(){var K=Y.call(this)||this;return K._spacingX=0,K._spacingY=0,K._canvasCache={},K}var U=G.prototype;return U.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z),this._canvasCache={}},U.draw=function K(Z,Q){if(G.cache)this._drawWithCache(Z);else this._drawNoCache(Z,Q)},U._drawWithCache=function K(Z){var Q=Z[0],V=Z[1],z=Z[2],X=Z[3],L=Z[4],w=""+z+X+L,P;if(w in this._canvasCache)P=this._canvasCache[w];else{var D=this._options.border;P=document.createElement("canvas");var W=P.getContext("2d");if(P.width=this._spacingX,P.height=this._spacingY,W.fillStyle=L,W.fillRect(D,D,P.width-D,P.height-D),z){W.fillStyle=X,W.font=this._ctx.font,W.textAlign="center",W.textBaseline="middle";var M=[].concat(z);for(var O=0;O<M.length;O++)W.fillText(M[O],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[w]=P}this._ctx.drawImage(P,Q*this._spacingX,V*this._spacingY)},U._drawNoCache=function K(Z,Q){var V=Z[0],z=Z[1],X=Z[2],L=Z[3],w=Z[4];if(Q){var P=this._options.border;this._ctx.fillStyle=w,this._ctx.fillRect(V*this._spacingX+P,z*this._spacingY+P,this._spacingX-P,this._spacingY-P)}if(!X)return;this._ctx.fillStyle=L;var D=[].concat(X);for(var W=0;W<D.length;W++)this._ctx.fillText(D[W],(V+0.5)*this._spacingX,Math.ceil((z+0.5)*this._spacingY))},U.computeSize=function K(Z,Q){var V=Math.floor(Z/this._spacingX),z=Math.floor(Q/this._spacingY);return[V,z]},U.computeFontSize=function K(Z,Q){var V=Math.floor(Z/this._options.width),z=Math.floor(Q/this._options.height),X=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var L=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=X;var w=L/100,P=w*z/V;if(P>1)z=Math.floor(z/P);return Math.floor(z/this._options.spacing)},U._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._spacingX),Math.floor(Q/this._spacingY)]},U._updateSize=function K(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(Z.spacing*Q),this._spacingY=Math.ceil(Z.spacing*Z.fontSize),Z.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=Z.width*this._spacingX,this._ctx.canvas.height=Z.height*this._spacingY},G}(R);V0.cache=!1;var l=function(Y){q0(G,Y);function G(){var K=Y.call(this)||this;return K._colorCanvas=document.createElement("canvas"),K}var U=G.prototype;return U.draw=function K(Z,Q){var V=Z[0],z=Z[1],X=Z[2],L=Z[3],w=Z[4],P=this._options.tileWidth,D=this._options.tileHeight;if(Q)if(this._options.tileColorize)this._ctx.clearRect(V*P,z*D,P,D);else this._ctx.fillStyle=w,this._ctx.fillRect(V*P,z*D,P,D);if(!X)return;var W=[].concat(X),M=[].concat(L),O=[].concat(w);for(var j=0;j<W.length;j++){var I=this._options.tileMap[W[j]];if(!I)throw new Error('Char "'+W[j]+'" not found in tileMap');if(this._options.tileColorize){var u=this._colorCanvas,T=u.getContext("2d");T.globalCompositeOperation="source-over",T.clearRect(0,0,P,D);var d=M[j],i=O[j];if(T.drawImage(this._options.tileSet,I[0],I[1],P,D,0,0,P,D),d!="transparent")T.fillStyle=d,T.globalCompositeOperation="source-atop",T.fillRect(0,0,P,D);if(i!="transparent")T.fillStyle=i,T.globalCompositeOperation="destination-over",T.fillRect(0,0,P,D);this._ctx.drawImage(u,V*P,z*D,P,D)}else this._ctx.drawImage(this._options.tileSet,I[0],I[1],P,D,V*P,z*D,P,D)}},U.computeSize=function K(Z,Q){var V=Math.floor(Z/this._options.tileWidth),z=Math.floor(Q/this._options.tileHeight);return[V,z]},U.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},U._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},U._updateSize=function K(){var Z=this._options;this._ctx.canvas.width=Z.width*Z.tileWidth,this._ctx.canvas.height=Z.height*Z.tileHeight,this._colorCanvas.width=Z.tileWidth,this._colorCanvas.height=Z.tileHeight},G}(R);function m(Y){var G,U;if(Y in E)G=E[Y];else{if(Y.charAt(0)=="#"){var K=Y.match(/[0-9a-f]/gi)||[],Z=K.map(function(V){return parseInt(V,16)});if(Z.length==3)G=Z.map(function(V){return V*17});else{for(var Q=0;Q<3;Q++)Z[Q+1]+=16*Z[Q],Z.splice(Q,1);G=Z}}else if(U=Y.match(/rgb\(([0-9, ]+)\)/i))G=U[1].split(/\s*,\s*/).map(function(V){return parseInt(V)});else G=[0,0,0];E[Y]=G}return G.slice()}function Q0(Y){var G=Y.slice();for(var U=arguments.length,K=new Array(U>1?U-1:0),Z=1;Z<U;Z++)K[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++)for(var V=0;V<K.length;V++)G[Q]+=K[V][Q];return G}function x(Y){for(var G=arguments.length,U=new Array(G>1?G-1:0),K=1;K<G;K++)U[K-1]=arguments[K];for(var Z=0;Z<3;Z++)for(var Q=0;Q<U.length;Q++)Y[Z]+=U[Q][Z];return Y}function _(Y){var G=Y.slice();for(var U=arguments.length,K=new Array(U>1?U-1:0),Z=1;Z<U;Z++)K[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++){for(var V=0;V<K.length;V++)G[Q]*=K[V][Q]/255;G[Q]=Math.round(G[Q])}return G}function p(Y){for(var G=arguments.length,U=new Array(G>1?G-1:0),K=1;K<G;K++)U[K-1]=arguments[K];for(var Z=0;Z<3;Z++){for(var Q=0;Q<U.length;Q++)Y[Z]*=U[Q][Z]/255;Y[Z]=Math.round(Y[Z])}return Y}function U0(Y,G,U){if(U===void 0)U=0.5;var K=Y.slice();for(var Z=0;Z<3;Z++)K[Z]=Math.round(K[Z]+U*(G[Z]-Y[Z]));return K}var s=U0;function A(Y,G,U){if(U===void 0)U=0.5;var K=h(Y),Z=h(G);for(var Q=0;Q<3;Q++)K[Q]+=U*(Z[Q]-K[Q]);return a(K)}var b=A;function g(Y,G){if(!(G instanceof Array))G=Math.round(B.getNormal(0,G));var U=Y.slice();for(var K=0;K<3;K++)U[K]+=G instanceof Array?Math.round(B.getNormal(0,G[K])):G;return U}function h(Y){var G=Y[0]/255,U=Y[1]/255,K=Y[2]/255,Z=Math.max(G,U,K),Q=Math.min(G,U,K),V=0,z,X=(Z+Q)/2;if(Z==Q)z=0;else{var L=Z-Q;switch(z=X>0.5?L/(2-Z-Q):L/(Z+Q),Z){case G:V=(U-K)/L+(U<K?6:0);break;case U:V=(K-G)/L+2;break;case K:V=(G-U)/L+4;break}V/=6}return[V,z,X]}function t(Y,G,U){if(U<0)U+=1;if(U>1)U-=1;if(U<0.16666666666666666)return Y+(G-Y)*6*U;if(U<0.5)return G;if(U<0.6666666666666666)return Y+(G-Y)*(0.6666666666666666-U)*6;return Y}function a(Y){var G=Y[2];if(Y[1]==0)return G=Math.round(G*255),[G,G,G];else{var U=Y[1],K=G<0.5?G*(1+U):G+U-G*U,Z=2*G-K,Q=t(Z,K,Y[0]+0.3333333333333333),V=t(Z,K,Y[0]),z=t(Z,K,Y[0]-0.3333333333333333);return[Math.round(Q*255),Math.round(V*255),Math.round(z*255)]}}function k(Y){var G=Y.map(function(U){return S(U,0,255)});return"rgb("+G.join(",")+")"}function v(Y){var G=Y.map(function(U){return S(U,0,255).toString(16).padStart(2,"0")});return"#"+G.join("")}var E={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},o=Object.freeze({__proto__:null,fromString:m,add:Q0,add_:x,multiply:_,multiply_:p,interpolate:U0,lerp:s,interpolateHSL:A,lerpHSL:b,randomize:g,rgb2hsl:h,hsl2rgb:a,toRGB:k,toHex:v}),e=function(Y){q0(G,Y);function G(){var K=Y.call(this)||this;K._uniforms={};try{K._gl=K._initWebGL()}catch(Z){if(typeof Z==="string")alert(Z);else if(Z instanceof Error)alert(Z.message)}return K}G.isSupported=function K(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var U=G.prototype;return U.schedule=function K(Z){requestAnimationFrame(Z)},U.getContainer=function K(){return this._gl.canvas},U.setOptions=function K(Z){var Q=this;Y.prototype.setOptions.call(this,Z),this._updateSize();var V=this._options.tileSet;if(V&&"complete"in V&&!V.complete)V.addEventListener("load",function(){return Q._updateTexture(V)});else this._updateTexture(V)},U.draw=function K(Z,Q){var V=this._gl,z=this._options,X=Z[0],L=Z[1],w=Z[2],P=Z[3],D=Z[4],W=V.canvas.height-(L+1)*z.tileHeight;if(V.scissor(X*z.tileWidth,W,z.tileWidth,z.tileHeight),Q){if(z.tileColorize)V.clearColor(0,0,0,0);else V.clearColor.apply(V,p0(D));V.clear(V.COLOR_BUFFER_BIT)}if(!w)return;var M=[].concat(w),O=[].concat(D),j=[].concat(P);V.uniform2fv(this._uniforms.targetPosRel,[X,L]);for(var I=0;I<M.length;I++){var u=this._options.tileMap[M[I]];if(!u)throw new Error('Char "'+M[I]+'" not found in tileMap');if(V.uniform1f(this._uniforms.colorize,z.tileColorize?1:0),V.uniform2fv(this._uniforms.tilesetPosAbs,u),z.tileColorize)V.uniform4fv(this._uniforms.tint,p0(j[I])),V.uniform4fv(this._uniforms.bg,p0(O[I]));V.drawArrays(V.TRIANGLE_STRIP,0,4)}},U.clear=function K(){var Z=this._gl;Z.clearColor.apply(Z,p0(this._options.bg)),Z.scissor(0,0,Z.canvas.width,Z.canvas.height),Z.clear(Z.COLOR_BUFFER_BIT)},U.computeSize=function K(Z,Q){var V=Math.floor(Z/this._options.tileWidth),z=Math.floor(Q/this._options.tileHeight);return[V,z]},U.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},U.eventToPosition=function K(Z,Q){var V=this._gl.canvas,z=V.getBoundingClientRect();if(Z-=z.left,Q-=z.top,Z*=V.width/z.width,Q*=V.height/z.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},U._initWebGL=function K(){var Z=this,Q=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=Q;var V=j0(Q,D0,X0);return Q.useProgram(V),w0(Q),K0.forEach(function(z){return Z._uniforms[z]=Q.getUniformLocation(V,z)}),this._program=V,Q.enable(Q.BLEND),Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA),Q.enable(Q.SCISSOR_TEST),Q},U._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},U._updateSize=function K(){var Z=this._gl,Q=this._options,V=[Q.width*Q.tileWidth,Q.height*Q.tileHeight];Z.canvas.width=V[0],Z.canvas.height=V[1],Z.viewport(0,0,V[0],V[1]),Z.uniform2fv(this._uniforms.tileSize,[Q.tileWidth,Q.tileHeight]),Z.uniform2fv(this._uniforms.targetSize,V)},U._updateTexture=function K(Z){a0(this._gl,Z)},G}(H),K0=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],D0=`
#version 300 es

in vec2 tilePosRel;
out vec2 tilesetPosPx;

uniform vec2 tilesetPosAbs;
uniform vec2 tileSize;
uniform vec2 targetSize;
uniform vec2 targetPosRel;

void main() {
	vec2 targetPosPx = (targetPosRel + tilePosRel) * tileSize;
	vec2 targetPosNdc = ((targetPosPx / targetSize)-0.5)*2.0;
	targetPosNdc.y *= -1.0;

	gl_Position = vec4(targetPosNdc, 0.0, 1.0);
	tilesetPosPx = tilesetPosAbs + tilePosRel * tileSize;
}`.trim(),X0=`
#version 300 es
precision highp float;

in vec2 tilesetPosPx;
out vec4 fragColor;
uniform sampler2D image;
uniform bool colorize;
uniform vec4 bg;
uniform vec4 tint;

void main() {
	fragColor = vec4(0, 0, 0, 1);

	vec4 texel = texelFetch(image, ivec2(tilesetPosPx), 0);

	if (colorize) {
		texel.rgb = tint.a * tint.rgb + (1.0-tint.a) * texel.rgb;
		fragColor.rgb = texel.a*texel.rgb + (1.0-texel.a)*bg.rgb;
		fragColor.a = texel.a + (1.0-texel.a)*bg.a;
	} else {
		fragColor = texel;
	}
}`.trim();function j0(Y,G,U){var K=Y.createShader(Y.VERTEX_SHADER);if(Y.shaderSource(K,G),Y.compileShader(K),!Y.getShaderParameter(K,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(K)||"");var Z=Y.createShader(Y.FRAGMENT_SHADER);if(Y.shaderSource(Z,U),Y.compileShader(Z),!Y.getShaderParameter(Z,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(Z)||"");var Q=Y.createProgram();if(Y.attachShader(Q,K),Y.attachShader(Q,Z),Y.linkProgram(Q),!Y.getProgramParameter(Q,Y.LINK_STATUS))throw new Error(Y.getProgramInfoLog(Q)||"");return Q}function w0(Y){var G=new Float32Array([0,0,1,0,0,1,1,1]),U=Y.createBuffer();Y.bindBuffer(Y.ARRAY_BUFFER,U),Y.bufferData(Y.ARRAY_BUFFER,G,Y.STATIC_DRAW),Y.enableVertexAttribArray(0),Y.vertexAttribPointer(0,2,Y.FLOAT,!1,0,0)}function a0(Y,G){var U=Y.createTexture();return Y.bindTexture(Y.TEXTURE_2D,U),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MAG_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MIN_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_S,Y.REPEAT),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_T,Y.REPEAT),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,0),Y.texImage2D(Y.TEXTURE_2D,0,Y.RGBA,Y.RGBA,Y.UNSIGNED_BYTE,G),U}var v0={};function p0(Y){if(!(Y in v0)){var G;if(Y=="transparent")G=[0,0,0,0];else if(Y.indexOf("rgba")>-1){G=(Y.match(/[\d.]+/g)||[]).map(Number);for(var U=0;U<3;U++)G[U]=G[U]/255}else G=m(Y).map(function(K){return K/255}),G.push(1);v0[Y]=G}return v0[Y]}function YZ(Y){return"\x1B[0;48;5;"+I1(Y)+"m\x1B[2J"}function wZ(Y,G){return"\x1B[0;38;5;"+I1(Y)+";48;5;"+I1(G)+"m"}function LZ(Y,G){return"\x1B["+(G+1)+";"+(Y+1)+"H"}function I1(Y){var G=256,U=6,K=U/G,Z=m(Y),Q=Math.floor(Z[0]*K),V=Math.floor(Z[1]*K),z=Math.floor(Z[2]*K);return Q*36+V*6+z*1+16}var Z6=function(Y){q0(G,Y);function G(){var K=Y.call(this)||this;return K._offset=[0,0],K._cursor=[-1,-1],K._lastColor="",K}var U=G.prototype;return U.schedule=function K(Z){setTimeout(Z,16.666666666666668)},U.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z);var Q=[Z.width,Z.height],V=this.computeSize();this._offset=V.map(function(z,X){return Math.floor((z-Q[X])/2)})},U.clear=function K(){process.stdout.write(YZ(this._options.bg))},U.draw=function K(Z,Q){var V=Z[0],z=Z[1],X=Z[2],L=Z[3],w=Z[4],P=this._offset[0]+V,D=this._offset[1]+z,W=this.computeSize();if(P<0||P>=W[0])return;if(D<0||D>=W[1])return;if(P!==this._cursor[0]||D!==this._cursor[1])process.stdout.write(LZ(P,D)),this._cursor[0]=P,this._cursor[1]=D;if(Q){if(!X)X=" "}if(!X)return;var M=wZ(L,w);if(M!==this._lastColor)process.stdout.write(M),this._lastColor=M;if(X!="\t"){var O=[].concat(X);process.stdout.write(O[0])}if(this._cursor[0]++,this._cursor[0]>=W[0])this._cursor[0]=0,this._cursor[1]++},U.computeFontSize=function K(){throw new Error("Terminal backend has no notion of font size")},U.eventToPosition=function K(Z,Q){return[Z,Q]},U.computeSize=function K(){return[process.stdout.columns,process.stdout.rows]},G}(H),PZ=/%([bc]){([^}]*)}/g,I0=0,u0=1,b1=2,f1=3;function HZ(Y,G){var U={width:0,height:1},K=k1(Y,G),Z=0;for(var Q=0;Q<K.length;Q++){var V=K[Q];switch(V.type){case I0:Z+=V.value.length;break;case u0:U.height++,U.width=Math.max(U.width,Z),Z=0;break}}return U.width=Math.max(U.width,Z),U}function k1(Y,G){var U=[],K=0;Y.replace(PZ,function(Q,V,z,X){var L=Y.substring(K,X);if(L.length)U.push({type:I0,value:L});return U.push({type:V=="c"?b1:f1,value:z.trim()}),K=X+Q.length,""});var Z=Y.substring(K);if(Z.length)U.push({type:I0,value:Z});return DZ(U,G)}function DZ(Y,G){if(!G)G=1/0;var U=0,K=0,Z=-1;while(U<Y.length){var Q=Y[U];if(Q.type==u0)K=0,Z=-1;if(Q.type!=I0){U++;continue}while(K==0&&Q.value.charAt(0)==" ")Q.value=Q.value.substring(1);var V=Q.value.indexOf(`
`);if(V!=-1){Q.value=U1(Y,U,V,!0);var z=Q.value.split("");while(z.length&&z[z.length-1]==" ")z.pop();Q.value=z.join("")}if(!Q.value.length){Y.splice(U,1);continue}if(K+Q.value.length>G){var X=-1;while(!0){var L=Q.value.indexOf(" ",X+1);if(L==-1)break;if(K+L>G)break;X=L}if(X!=-1)Q.value=U1(Y,U,X,!0);else if(Z!=-1){var w=Y[Z],P=w.value.lastIndexOf(" ");w.value=U1(Y,Z,P,!0),U=Z}else Q.value=U1(Y,U,G-K,!1)}else if(K+=Q.value.length,Q.value.indexOf(" ")!=-1)Z=U;U++}Y.push({type:u0});var D=null;for(var W=0;W<Y.length;W++){var M=Y[W];switch(M.type){case I0:D=M;break;case u0:if(D){var O=D.value.split("");while(O.length&&O[O.length-1]==" ")O.pop();D.value=O.join("")}D=null;break}}return Y.pop(),Y}function U1(Y,G,U,K){var Z={type:u0},Q={type:I0,value:Y[G].value.substring(U+(K?1:0))};return Y.splice(G+1,0,Z,Q),Y[G].value.substring(0,U)}var WZ=Object.freeze({__proto__:null,TYPE_TEXT:I0,TYPE_NEWLINE:u0,TYPE_FG:b1,TYPE_BG:f1,measure:HZ,tokenize:k1}),u1=80,g1=25,B0={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},FZ={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},RZ={hex:J0,rect:V0,tile:l,"tile-gl":e,term:Z6},MZ={width:u1,height:g1,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},l0=function(){function Y(U){if(U===void 0)U={};this._data={},this._dirty=!1,this._options={},U=Object.assign({},MZ,U),this.setOptions(U),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var G=Y.prototype;return G.DEBUG=function U(K,Z,Q){var V=[this._options.bg,this._options.fg];this.draw(K,Z,null,null,V[Q%V.length])},G.clear=function U(){this._data={},this._dirty=!0},G.setOptions=function U(K){if(Object.assign(this._options,K),K.width||K.height||K.fontSize||K.fontFamily||K.spacing||K.layout){if(K.layout){var Z=RZ[K.layout];this._backend=new Z}this._backend.setOptions(this._options),this._dirty=!0}return this},G.getOptions=function U(){return this._options},G.getContainer=function U(){return this._backend.getContainer()},G.computeSize=function U(K,Z){return this._backend.computeSize(K,Z)},G.computeFontSize=function U(K,Z){return this._backend.computeFontSize(K,Z)},G.computeTileSize=function U(K,Z){var Q=Math.floor(K/this._options.width),V=Math.floor(Z/this._options.height);return[Q,V]},G.eventToPosition=function U(K){var Z,Q;if("touches"in K)Z=K.touches[0].clientX,Q=K.touches[0].clientY;else Z=K.clientX,Q=K.clientY;return this._backend.eventToPosition(Z,Q)},G.draw=function U(K,Z,Q,V,z){if(!V)V=this._options.fg;if(!z)z=this._options.bg;var X=K+","+Z;if(this._data[X]=[K,Z,Q,V,z],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[X]=!0},G.drawOver=function U(K,Z,Q,V,z){var X=K+","+Z,L=this._data[X];if(L)L[2]=Q||L[2],L[3]=V||L[3],L[4]=z||L[4];else this.draw(K,Z,Q,V,z)},G.drawText=function U(K,Z,Q,V){var z=null,X=null,L=K,w=Z,P=1;if(!V)V=this._options.width-K;var D=k1(Q,V);while(D.length){var W=D.shift();switch(W.type){case I0:var M=!1,O=!1,j=!1,I=!1;for(var u=0;u<W.value.length;u++){var T=W.value.charCodeAt(u),d=W.value.charAt(u);if(this._options.layout==="term"){var i=T>>8,Z0=i===17||i>=46&&i<=159||i>=172&&i<=215||T>=43360&&T<=43391;if(Z0){this.draw(L+0,w,d,z,X),this.draw(L+1,w,"\t",z,X),L+=2;continue}}if(j=T>65280&&T<65377||T>65500&&T<65512||T>65518,M=d.charCodeAt(0)==32||d.charCodeAt(0)==12288,I&&!j&&!M)L++;if(j&&!O)L++;this.draw(L++,w,d,z,X),O=M,I=j}break;case b1:z=W.value||null;break;case f1:X=W.value||null;break;case u0:L=K,w++,P++;break}}return P},G._tick=function U(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var K in this._data)this._draw(K,!1)}else for(var Z in this._dirty)this._draw(Z,!0);this._dirty=!1},G._draw=function U(K,Z){var Q=this._data[K];if(Q[4]!=this._options.bg)Z=!0;this._backend.draw(Q,Z)},Y}();l0.Rect=V0,l0.Hex=J0,l0.Tile=l,l0.TileGL=e,l0.Term=Z6;var OZ=function(){function Y(U){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,U),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var K=0;K<this._options.order;K++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var G=Y.prototype;return G.clear=function U(){this._data={},this._priorValues={}},G.generate=function U(){var K=[this._sample(this._prefix)];while(K[K.length-1]!=this._boundary)K.push(this._sample(K));return this._join(K.slice(0,-1))},G.observe=function U(K){var Z=this._split(K);for(var Q=0;Q<Z.length;Q++)this._priorValues[Z[Q]]=this._options.prior;Z=this._prefix.concat(Z).concat(this._suffix);for(var V=this._options.order;V<Z.length;V++){var z=Z.slice(V-this._options.order,V),X=Z[V];for(var L=0;L<z.length;L++){var w=z.slice(L);this._observeEvent(w,X)}}},G.getStats=function U(){var K=[],Z=Object.keys(this._priorValues).length;Z--,K.push("distinct samples: "+Z);var Q=Object.keys(this._data).length,V=0;for(var z in this._data)V+=Object.keys(this._data[z]).length;return K.push("dictionary size (contexts): "+Q),K.push("dictionary size (events): "+V),K.join(", ")},G._split=function U(K){return K.split(this._options.words?/\s+/:"")},G._join=function U(K){return K.join(this._options.words?" ":"")},G._observeEvent=function U(K,Z){var Q=this._join(K);if(!(Q in this._data))this._data[Q]={};var V=this._data[Q];if(!(Z in V))V[Z]=0;V[Z]++},G._sample=function U(K){K=this._backoff(K);var Z=this._join(K),Q=this._data[Z],V={};if(this._options.prior){for(var z in this._priorValues)V[z]=this._priorValues[z];for(var X in Q)V[X]+=Q[X]}else V=Q;return B.getWeightedValue(V)},G._backoff=function U(K){if(K.length>this._options.order)K=K.slice(-this._options.order);else if(K.length<this._options.order)K=this._prefix.slice(0,this._options.order-K.length).concat(K);while(!(this._join(K)in this._data)&&K.length>0)K=K.slice(1);return K},Y}(),J6=function(){function Y(){this.heap=[],this.timestamp=0}var G=Y.prototype;return G.lessThan=function U(K,Z){return K.key==Z.key?K.timestamp<Z.timestamp:K.key<Z.key},G.shift=function U(K){this.heap=this.heap.map(function(Z){var{key:Q,value:V,timestamp:z}=Z;return{key:Q+K,value:V,timestamp:z}})},G.len=function U(){return this.heap.length},G.push=function U(K,Z){this.timestamp+=1;var Q=this.len();this.heap.push({value:K,timestamp:this.timestamp,key:Z}),this.updateUp(Q)},G.pop=function U(){if(this.len()==0)throw new Error("no element to pop");var K=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return K},G.find=function U(K){for(var Z=0;Z<this.len();Z++)if(K==this.heap[Z].value)return this.heap[Z];return null},G.remove=function U(K){var Z=null;for(var Q=0;Q<this.len();Q++)if(K==this.heap[Q].value)Z=Q;if(Z===null)return!1;if(this.len()>1){var V=this.heap.pop();if(V.value!=K)this.heap[Z]=V,this.updateDown(Z);return!0}else this.heap.pop();return!0},G.parentNode=function U(K){return Math.floor((K-1)/2)},G.leftChildNode=function U(K){return 2*K+1},G.rightChildNode=function U(K){return 2*K+2},G.existNode=function U(K){return K>=0&&K<this.heap.length},G.swap=function U(K,Z){var Q=this.heap[K];this.heap[K]=this.heap[Z],this.heap[Z]=Q},G.minNode=function U(K){var Z=K.filter(this.existNode.bind(this)),Q=Z[0];for(var V=PJ(Z),z;!(z=V()).done;){var X=z.value;if(this.lessThan(this.heap[X],this.heap[Q]))Q=X}return Q},G.updateUp=function U(K){if(K==0)return;var Z=this.parentNode(K);if(this.existNode(Z)&&this.lessThan(this.heap[K],this.heap[Z]))this.swap(K,Z),this.updateUp(Z)},G.updateDown=function U(K){var Z=this.leftChildNode(K),Q=this.rightChildNode(K);if(!this.existNode(Z))return;var V=this.minNode([K,Z,Q]);if(V!=K)this.swap(K,V),this.updateDown(V)},G.debugPrint=function U(){console.log(this.heap)},Y}(),Q6=function(){function Y(){this._time=0,this._events=new J6}var G=Y.prototype;return G.getTime=function U(){return this._time},G.clear=function U(){return this._events=new J6,this},G.add=function U(K,Z){this._events.push(K,Z)},G.get=function U(){if(!this._events.len())return null;var K=this._events.pop(),Z=K.key,Q=K.value;if(Z>0)this._time+=Z,this._events.shift(-Z);return Q},G.getEventTime=function U(K){var Z=this._events.find(K);if(Z){var Q=Z.key;return Q}return},G.remove=function U(K){return this._events.remove(K)},Y}(),T1=function(){function Y(){this._queue=new Q6,this._repeat=[],this._current=null}var G=Y.prototype;return G.getTime=function U(){return this._queue.getTime()},G.add=function U(K,Z){if(Z)this._repeat.push(K);return this},G.getTimeOf=function U(K){return this._queue.getEventTime(K)},G.clear=function U(){return this._queue.clear(),this._repeat=[],this._current=null,this},G.remove=function U(K){var Z=this._queue.remove(K),Q=this._repeat.indexOf(K);if(Q!=-1)this._repeat.splice(Q,1);if(this._current==K)this._current=null;return Z},G.next=function U(){return this._current=this._queue.get(),this._current},Y}(),jZ=function(Y){q0(G,Y);function G(){return Y.apply(this,arguments)||this}var U=G.prototype;return U.add=function K(Z,Q){return this._queue.add(Z,0),Y.prototype.add.call(this,Z,Q)},U.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return Y.prototype.next.call(this)},G}(T1),CZ=function(Y){q0(G,Y);function G(){return Y.apply(this,arguments)||this}var U=G.prototype;return U.add=function K(Z,Q,V){return this._queue.add(Z,V!==void 0?V:1/Z.getSpeed()),Y.prototype.add.call(this,Z,Q)},U.next=function K(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return Y.prototype.next.call(this)},G}(T1),EZ=function(Y){q0(G,Y);function G(){var K=Y.call(this)||this;return K._defaultDuration=1,K._duration=K._defaultDuration,K}var U=G.prototype;return U.add=function K(Z,Q,V){return this._queue.add(Z,V||this._defaultDuration),Y.prototype.add.call(this,Z,Q)},U.clear=function K(){return this._duration=this._defaultDuration,Y.prototype.clear.call(this)},U.remove=function K(Z){if(Z==this._current)this._duration=this._defaultDuration;return Y.prototype.remove.call(this,Z)},U.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return Y.prototype.next.call(this)},U.setDuration=function K(Z){if(this._current)this._duration=Z;return this},G}(T1),AZ={Simple:jZ,Speed:CZ,Action:EZ},h1=function(){function Y(U,K){if(K===void 0)K={};this._lightPasses=U,this._options=Object.assign({topology:8},K)}var G=Y.prototype;return G._getCircle=function U(K,Z,Q){var V=[],z,X,L;switch(this._options.topology){case 4:X=1,L=[0,1],z=[B0[8][7],B0[8][1],B0[8][3],B0[8][5]];break;case 6:z=B0[6],X=1,L=[-1,1];break;case 8:z=B0[4],X=2,L=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var w=K+L[0]*Q,P=Z+L[1]*Q;for(var D=0;D<z.length;D++)for(var W=0;W<Q*X;W++)V.push([w,P]),w+=z[D][0],P+=z[D][1];return V},Y}(),NZ=function(Y){q0(G,Y);function G(){return Y.apply(this,arguments)||this}var U=G.prototype;return U.compute=function K(Z,Q,V,z){if(z(Z,Q,0,1),!this._lightPasses(Z,Q))return;var X=[],L,w,P,D,W;for(var M=1;M<=V;M++){var O=this._getCircle(Z,Q,M),j=360/O.length;for(var I=0;I<O.length;I++){if(P=O[I][0],D=O[I][1],L=j*(I-0.5),w=L+j,W=!this._lightPasses(P,D),this._visibleCoords(Math.floor(L),Math.ceil(w),W,X))z(P,D,M,1);if(X.length==2&&X[0]==0&&X[1]==360)return}}},U._visibleCoords=function K(Z,Q,V,z){if(Z<0){var X=this._visibleCoords(0,Q,V,z),L=this._visibleCoords(360+Z,360,V,z);return X||L}var w=0;while(w<z.length&&z[w]<Z)w++;if(w==z.length){if(V)z.push(Z,Q);return!0}var P=0;if(w%2){while(w<z.length&&z[w]<Q)w++,P++;if(P==0)return!1;if(V)if(P%2)z.splice(w-P,P,Q);else z.splice(w-P,P);return!0}else{while(w<z.length&&z[w]<Q)w++,P++;if(Z==z[w-P]&&P==1)return!1;if(V)if(P%2)z.splice(w-P,P,Z);else z.splice(w-P,P,Z,Q);return!0}},G}(h1),SZ=function(Y){q0(G,Y);function G(){return Y.apply(this,arguments)||this}var U=G.prototype;return U.compute=function K(Z,Q,V,z){if(z(Z,Q,0,1),!this._lightPasses(Z,Q))return;var X=[],L,w,P,D,W,M;for(var O=1;O<=V;O++){var j=this._getCircle(Z,Q,O),I=j.length;for(var u=0;u<I;u++){if(L=j[u][0],w=j[u][1],D=[u?2*u-1:2*I-1,2*I],W=[2*u+1,2*I],P=!this._lightPasses(L,w),M=this._checkVisibility(D,W,P,X),M)z(L,w,O,M);if(X.length==2&&X[0][0]==0&&X[1][0]==X[1][1])return}}},U._checkVisibility=function K(Z,Q,V,z){if(Z[0]>Q[0]){var X=this._checkVisibility(Z,[Z[1],Z[1]],V,z),L=this._checkVisibility([0,1],Q,V,z);return(X+L)/2}var w=0,P=!1;while(w<z.length){var D=z[w],W=D[0]*Z[1]-Z[0]*D[1];if(W>=0){if(W==0&&!(w%2))P=!0;break}w++}var M=z.length,O=!1;while(M--){var j=z[M],I=Q[0]*j[1]-j[0]*Q[1];if(I>=0){if(I==0&&M%2)O=!0;break}}var u=!0;if(w==M&&(P||O))u=!1;else if(P&&O&&w+1==M&&M%2)u=!1;else if(w>M&&w%2)u=!1;if(!u)return 0;var T,d=M-w+1;if(d%2)if(w%2){var i=z[w];if(T=(Q[0]*i[1]-i[0]*Q[1])/(i[1]*Q[1]),V)z.splice(w,d,Q)}else{var Z0=z[M];if(T=(Z0[0]*Z[1]-Z[0]*Z0[1])/(Z[1]*Z0[1]),V)z.splice(w,d,Z)}else if(w%2){var $0=z[w],P0=z[M];if(T=(P0[0]*$0[1]-$0[0]*P0[1])/($0[1]*P0[1]),V)z.splice(w,d)}else{if(V)z.splice(w,d,Z,Q);return 1}var C0=(Q[0]*Z[1]-Z[0]*Q[1])/(Z[1]*Q[1]);return T/C0},G}(h1),b0=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],vZ=function(Y){q0(G,Y);function G(){return Y.apply(this,arguments)||this}var U=G.prototype;return U.compute=function K(Z,Q,V,z){z(Z,Q,0,1);for(var X=0;X<b0.length;X++)this._renderOctant(Z,Q,b0[X],V,z)},U.compute180=function K(Z,Q,V,z,X){X(Z,Q,0,1);var L=(z-1+8)%8,w=(z-2+8)%8,P=(z+1+8)%8;this._renderOctant(Z,Q,b0[w],V,X),this._renderOctant(Z,Q,b0[L],V,X),this._renderOctant(Z,Q,b0[z],V,X),this._renderOctant(Z,Q,b0[P],V,X)},U.compute90=function K(Z,Q,V,z,X){X(Z,Q,0,1);var L=(z-1+8)%8;this._renderOctant(Z,Q,b0[z],V,X),this._renderOctant(Z,Q,b0[L],V,X)},U._renderOctant=function K(Z,Q,V,z,X){this._castVisibility(Z,Q,1,1,0,z+1,V[0],V[1],V[2],V[3],X)},U._castVisibility=function K(Z,Q,V,z,X,L,w,P,D,W,M){if(z<X)return;for(var O=V;O<=L;O++){var j=-O-1,I=-O,u=!1,T=0;while(j<=0){j+=1;var d=Z+j*w+I*P,i=Q+j*D+I*W,Z0=(j-0.5)/(I+0.5),$0=(j+0.5)/(I-0.5);if($0>z)continue;if(Z0<X)break;if(j*j+I*I<L*L)M(d,i,O,1);if(!u){if(!this._lightPasses(d,i)&&O<L)u=!0,this._castVisibility(Z,Q,O+1,z,Z0,L,w,P,D,W,M),T=$0}else{if(!this._lightPasses(d,i)){T=$0;continue}u=!1,z=T}}if(u)break}},G}(h1),IZ={DiscreteShadowcasting:NZ,PreciseShadowcasting:SZ,RecursiveShadowcasting:vZ},g0=function(){function Y(U,K){if(U===void 0)U=u1;if(K===void 0)K=g1;this._width=U,this._height=K}var G=Y.prototype;return G._fillMap=function U(K){var Z=[];for(var Q=0;Q<this._width;Q++){Z.push([]);for(var V=0;V<this._height;V++)Z[Q].push(K)}return Z},Y}(),bZ=function(Y){q0(G,Y);function G(){return Y.apply(this,arguments)||this}var U=G.prototype;return U.create=function K(Z){var Q=this._width-1,V=this._height-1;for(var z=0;z<=Q;z++)for(var X=0;X<=V;X++){var L=z&&X&&z<Q&&X<V;Z(z,X,L?0:1)}return this},G}(g0),V6=function(Y){q0(G,Y);function G(K,Z){var Q=Y.call(this,K,Z)||this;return Q._rooms=[],Q._corridors=[],Q}var U=G.prototype;return U.getRooms=function K(){return this._rooms},U.getCorridors=function K(){return this._corridors},G}(g0),K6=function Y(){},$1=function(Y){q0(G,Y);function G(K,Z,Q,V,z,X){var L=Y.call(this)||this;if(L._x1=K,L._y1=Z,L._x2=Q,L._y2=V,L._doors={},z!==void 0&&X!==void 0)L.addDoor(z,X);return L}G.createRandomAt=function K(Z,Q,V,z,X){var L=X.roomWidth[0],w=X.roomWidth[1],P=B.getUniformInt(L,w);L=X.roomHeight[0],w=X.roomHeight[1];var D=B.getUniformInt(L,w);if(V==1){var W=Q-Math.floor(B.getUniform()*D);return new this(Z+1,W,Z+P,W+D-1,Z,Q)}if(V==-1){var M=Q-Math.floor(B.getUniform()*D);return new this(Z-P,M,Z-1,M+D-1,Z,Q)}if(z==1){var O=Z-Math.floor(B.getUniform()*P);return new this(O,Q+1,O+P-1,Q+D,Z,Q)}if(z==-1){var j=Z-Math.floor(B.getUniform()*P);return new this(j,Q-D,j+P-1,Q-1,Z,Q)}throw new Error("dx or dy must be 1 or -1")},G.createRandomCenter=function K(Z,Q,V){var z=V.roomWidth[0],X=V.roomWidth[1],L=B.getUniformInt(z,X);z=V.roomHeight[0],X=V.roomHeight[1];var w=B.getUniformInt(z,X),P=Z-Math.floor(B.getUniform()*L),D=Q-Math.floor(B.getUniform()*w),W=P+L-1,M=D+w-1;return new this(P,D,W,M)},G.createRandom=function K(Z,Q,V){var z=V.roomWidth[0],X=V.roomWidth[1],L=B.getUniformInt(z,X);z=V.roomHeight[0],X=V.roomHeight[1];var w=B.getUniformInt(z,X),P=Z-L-1,D=Q-w-1,W=1+Math.floor(B.getUniform()*P),M=1+Math.floor(B.getUniform()*D),O=W+L-1,j=M+w-1;return new this(W,M,O,j)};var U=G.prototype;return U.addDoor=function K(Z,Q){return this._doors[Z+","+Q]=1,this},U.getDoors=function K(Z){for(var Q in this._doors){var V=Q.split(",");Z(parseInt(V[0]),parseInt(V[1]))}return this},U.clearDoors=function K(){return this._doors={},this},U.addDoors=function K(Z){var Q=this._x1-1,V=this._x2+1,z=this._y1-1,X=this._y2+1;for(var L=Q;L<=V;L++)for(var w=z;w<=X;w++){if(L!=Q&&L!=V&&w!=z&&w!=X)continue;if(Z(L,w))continue;this.addDoor(L,w)}return this},U.debug=function K(){console.log("room",this._x1,this._y1,this._x2,this._y2)},U.isValid=function K(Z,Q){var V=this._x1-1,z=this._x2+1,X=this._y1-1,L=this._y2+1;for(var w=V;w<=z;w++)for(var P=X;P<=L;P++)if(w==V||w==z||P==X||P==L){if(!Z(w,P))return!1}else if(!Q(w,P))return!1;return!0},U.create=function K(Z){var Q=this._x1-1,V=this._x2+1,z=this._y1-1,X=this._y2+1,L=0;for(var w=Q;w<=V;w++)for(var P=z;P<=X;P++){if(w+","+P in this._doors)L=2;else if(w==Q||w==V||P==z||P==X)L=1;else L=0;Z(w,P,L)}},U.getCenter=function K(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},U.getLeft=function K(){return this._x1},U.getRight=function K(){return this._x2},U.getTop=function K(){return this._y1},U.getBottom=function K(){return this._y2},G}(K6),x1=function(Y){q0(G,Y);function G(K,Z,Q,V){var z=Y.call(this)||this;return z._startX=K,z._startY=Z,z._endX=Q,z._endY=V,z._endsWithAWall=!0,z}G.createRandomAt=function K(Z,Q,V,z,X){var L=X.corridorLength[0],w=X.corridorLength[1],P=B.getUniformInt(L,w);return new this(Z,Q,Z+V*P,Q+z*P)};var U=G.prototype;return U.debug=function K(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},U.isValid=function K(Z,Q){var V=this._startX,z=this._startY,X=this._endX-V,L=this._endY-z,w=1+Math.max(Math.abs(X),Math.abs(L));if(X)X=X/Math.abs(X);if(L)L=L/Math.abs(L);var P=L,D=-X,W=!0;for(var M=0;M<w;M++){var O=V+M*X,j=z+M*L;if(!Q(O,j))W=!1;if(!Z(O+P,j+D))W=!1;if(!Z(O-P,j-D))W=!1;if(!W){w=M,this._endX=O-X,this._endY=j-L;break}}if(w==0)return!1;if(w==1&&Z(this._endX+X,this._endY+L))return!1;var I=!Z(this._endX+X+P,this._endY+L+D),u=!Z(this._endX+X-P,this._endY+L-D);if(this._endsWithAWall=Z(this._endX+X,this._endY+L),(I||u)&&this._endsWithAWall)return!1;return!0},U.create=function K(Z){var Q=this._startX,V=this._startY,z=this._endX-Q,X=this._endY-V,L=1+Math.max(Math.abs(z),Math.abs(X));if(z)z=z/Math.abs(z);if(X)X=X/Math.abs(X);for(var w=0;w<L;w++){var P=Q+w*z,D=V+w*X;Z(P,D,0)}return!0},U.createPriorityWalls=function K(Z){if(!this._endsWithAWall)return;var Q=this._startX,V=this._startY,z=this._endX-Q,X=this._endY-V;if(z)z=z/Math.abs(z);if(X)X=X/Math.abs(X);var L=X,w=-z;Z(this._endX+z,this._endY+X),Z(this._endX+L,this._endY+w),Z(this._endX-L,this._endY-w)},G}(K6),fZ=function(Y){q0(G,Y);function G(K,Z,Q){var V=Y.call(this,K,Z)||this;return V._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(V._options,Q),V._map=[],V._dug=0,V._roomAttempts=20,V._corridorAttempts=20,V._connected=[],V._unconnected=[],V._digCallback=V._digCallback.bind(c0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(c0(V)),V._isWallCallback=V._isWallCallback.bind(c0(V)),V}var U=G.prototype;return U.create=function K(Z){var Q=Date.now();while(!0){var V=Date.now();if(V-Q>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(Z)for(var z=0;z<this._width;z++)for(var X=0;X<this._height;X++)Z(z,X,this._map[z][X]);return this},U._generateRooms=function K(){var Z=this._width-2,Q=this._height-2,V;do if(V=this._generateRoom(),this._dug/(Z*Q)>this._options.roomDugPercentage)break;while(V)},U._generateRoom=function K(){var Z=0;while(Z<this._roomAttempts){Z++;var Q=$1.createRandom(this._width,this._height,this._options);if(!Q.isValid(this._isWallCallback,this._canBeDugCallback))continue;return Q.create(this._digCallback),this._rooms.push(Q),Q}return null},U._generateCorridors=function K(){var Z=0;while(Z<this._corridorAttempts){Z++,this._corridors=[],this._map=this._fillMap(1);for(var Q=0;Q<this._rooms.length;Q++){var V=this._rooms[Q];V.clearDoors(),V.create(this._digCallback)}if(this._unconnected=B.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var z=B.getItem(this._connected);if(!z)break;var X=this._closestRoom(this._unconnected,z);if(!X)break;var L=this._closestRoom(this._connected,X);if(!L)break;var w=this._connectRooms(X,L);if(!w)break;if(!this._unconnected.length)return!0}}return!1},U._closestRoom=function K(Z,Q){var V=1/0,z=Q.getCenter(),X=null;for(var L=0;L<Z.length;L++){var w=Z[L],P=w.getCenter(),D=P[0]-z[0],W=P[1]-z[1],M=D*D+W*W;if(M<V)V=M,X=w}return X},U._connectRooms=function K(Z,Q){var V=Z.getCenter(),z=Q.getCenter(),X=z[0]-V[0],L=z[1]-V[1],w,P,D,W,M,O,j;if(Math.abs(X)<Math.abs(L))D=L>0?2:0,W=(D+2)%4,M=Q.getLeft(),O=Q.getRight(),j=0;else D=X>0?1:3,W=(D+2)%4,M=Q.getTop(),O=Q.getBottom(),j=1;if(w=this._placeInWall(Z,D),!w)return!1;if(w[j]>=M&&w[j]<=O){P=w.slice();var I=0;switch(W){case 0:I=Q.getTop()-1;break;case 1:I=Q.getRight()+1;break;case 2:I=Q.getBottom()+1;break;case 3:I=Q.getLeft()-1;break}P[(j+1)%2]=I,this._digLine([w,P])}else if(w[j]<M-1||w[j]>O+1){var u=w[j]-z[j],T=0;switch(W){case 0:case 1:T=u<0?3:1;break;case 2:case 3:T=u<0?1:3;break}if(W=(W+T)%4,P=this._placeInWall(Q,W),!P)return!1;var d=[0,0];d[j]=w[j];var i=(j+1)%2;d[i]=P[i],this._digLine([w,d,P])}else{var Z0=(j+1)%2;if(P=this._placeInWall(Q,W),!P)return!1;var $0=Math.round((P[Z0]+w[Z0])/2),P0=[0,0],C0=[0,0];P0[j]=w[j],P0[Z0]=$0,C0[j]=P[j],C0[Z0]=$0,this._digLine([w,P0,C0,P])}if(Z.addDoor(w[0],w[1]),Q.addDoor(P[0],P[1]),j=this._unconnected.indexOf(Z),j!=-1)this._unconnected.splice(j,1),this._connected.push(Z);if(j=this._unconnected.indexOf(Q),j!=-1)this._unconnected.splice(j,1),this._connected.push(Q);return!0},U._placeInWall=function K(Z,Q){var V=[0,0],z=[0,0],X=0;switch(Q){case 0:z=[1,0],V=[Z.getLeft(),Z.getTop()-1],X=Z.getRight()-Z.getLeft()+1;break;case 1:z=[0,1],V=[Z.getRight()+1,Z.getTop()],X=Z.getBottom()-Z.getTop()+1;break;case 2:z=[1,0],V=[Z.getLeft(),Z.getBottom()+1],X=Z.getRight()-Z.getLeft()+1;break;case 3:z=[0,1],V=[Z.getLeft()-1,Z.getTop()],X=Z.getBottom()-Z.getTop()+1;break}var L=[],w=-2;for(var P=0;P<X;P++){var D=V[0]+P*z[0],W=V[1]+P*z[1];L.push(null);var M=this._map[D][W]==1;if(M){if(w!=P-1)L[P]=[D,W]}else if(w=P,P)L[P-1]=null}for(var O=L.length-1;O>=0;O--)if(!L[O])L.splice(O,1);return L.length?B.getItem(L):null},U._digLine=function K(Z){for(var Q=1;Q<Z.length;Q++){var V=Z[Q-1],z=Z[Q],X=new x1(V[0],V[1],z[0],z[1]);X.create(this._digCallback),this._corridors.push(X)}},U._digCallback=function K(Z,Q,V){if(this._map[Z][Q]=V,V==0)this._dug++},U._isWallCallback=function K(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},U._canBeDugCallback=function K(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},G}(V6),kZ=function(Y){q0(G,Y);function G(K,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,K,Z)||this,V._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},V.setOptions(Q),V._dirs=B0[V._options.topology],V._map=V._fillMap(0),V}var U=G.prototype;return U.randomize=function K(Z){for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)this._map[Q][V]=B.getUniform()<Z?1:0;return this},U.setOptions=function K(Z){Object.assign(this._options,Z)},U.set=function K(Z,Q,V){this._map[Z][Q]=V},U.create=function K(Z){var Q=this._fillMap(0),V=this._options.born,z=this._options.survive;for(var X=0;X<this._height;X++){var L=1,w=0;if(this._options.topology==6)L=2,w=X%2;for(var P=w;P<this._width;P+=L){var D=this._map[P][X],W=this._getNeighbors(P,X);if(D&&z.indexOf(W)!=-1)Q[P][X]=1;else if(!D&&V.indexOf(W)!=-1)Q[P][X]=1}}this._map=Q,Z&&this._serviceCallback(Z)},U._serviceCallback=function K(Z){for(var Q=0;Q<this._height;Q++){var V=1,z=0;if(this._options.topology==6)V=2,z=Q%2;for(var X=z;X<this._width;X+=V)Z(X,Q,this._map[X][Q])}},U._getNeighbors=function K(Z,Q){var V=0;for(var z=0;z<this._dirs.length;z++){var X=this._dirs[z],L=Z+X[0],w=Q+X[1];if(L<0||L>=this._width||w<0||w>=this._height)continue;V+=this._map[L][w]==1?1:0}return V},U.connect=function K(Z,Q,V){if(!Q)Q=0;var z=[],X={},L=1,w=[0,0];if(this._options.topology==6)L=2,w=[0,1];for(var P=0;P<this._height;P++)for(var D=w[P%2];D<this._width;D+=L)if(this._freeSpace(D,P,Q)){var W=[D,P];X[this._pointKey(W)]=W,z.push([D,P])}var M=z[B.getUniformInt(0,z.length-1)],O=this._pointKey(M),j={};j[O]=M,delete X[O],this._findConnected(j,X,[M],!1,Q);while(Object.keys(X).length>0){var I=this._getFromTo(j,X),u=I[0],T=I[1],d={};d[this._pointKey(u)]=u,this._findConnected(d,X,[u],!0,Q);var i=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;i.call(this,T,u,j,X,Q,V);for(var Z0 in d){var $0=d[Z0];this._map[$0[0]][$0[1]]=Q,j[Z0]=$0,delete X[Z0]}}Z&&this._serviceCallback(Z)},U._getFromTo=function K(Z,Q){var V=[0,0],z=[0,0],X,L=Object.keys(Z),w=Object.keys(Q);for(var P=0;P<5;P++){if(L.length<w.length){var D=L;z=Z[D[B.getUniformInt(0,D.length-1)]],V=this._getClosest(z,Q)}else{var W=w;V=Q[W[B.getUniformInt(0,W.length-1)]],z=this._getClosest(V,Z)}if(X=(V[0]-z[0])*(V[0]-z[0])+(V[1]-z[1])*(V[1]-z[1]),X<64)break}return[V,z]},U._getClosest=function K(Z,Q){var V=null,z=null;for(var X in Q){var L=Q[X],w=(L[0]-Z[0])*(L[0]-Z[0])+(L[1]-Z[1])*(L[1]-Z[1]);if(z==null||w<z)z=w,V=L}return V},U._findConnected=function K(Z,Q,V,z,X){while(V.length>0){var L=V.splice(0,1)[0],w=void 0;if(this._options.topology==6)w=[[L[0]+2,L[1]],[L[0]+1,L[1]-1],[L[0]-1,L[1]-1],[L[0]-2,L[1]],[L[0]-1,L[1]+1],[L[0]+1,L[1]+1]];else w=[[L[0]+1,L[1]],[L[0]-1,L[1]],[L[0],L[1]+1],[L[0],L[1]-1]];for(var P=0;P<w.length;P++){var D=this._pointKey(w[P]);if(Z[D]==null&&this._freeSpace(w[P][0],w[P][1],X)){if(Z[D]=w[P],!z)delete Q[D];V.push(w[P])}}}},U._tunnelToConnected=function K(Z,Q,V,z,X,L){var w,P;if(Q[0]<Z[0])w=Q,P=Z;else w=Z,P=Q;for(var D=w[0];D<=P[0];D++){this._map[D][w[1]]=X;var W=[D,w[1]],M=this._pointKey(W);V[M]=W,delete z[M]}if(L&&w[0]<P[0])L(w,[P[0],w[1]]);var O=P[0];if(Q[1]<Z[1])w=Q,P=Z;else w=Z,P=Q;for(var j=w[1];j<P[1];j++){this._map[O][j]=X;var I=[O,j],u=this._pointKey(I);V[u]=I,delete z[u]}if(L&&w[1]<P[1])L([P[0],w[1]],[P[0],P[1]])},U._tunnelToConnected6=function K(Z,Q,V,z,X,L){var w,P;if(Q[0]<Z[0])w=Q,P=Z;else w=Z,P=Q;var D=w[0],W=w[1];while(!(D==P[0]&&W==P[1])){var M=2;if(W<P[1])W++,M=1;else if(W>P[1])W--,M=1;if(D<P[0])D+=M;else if(D>P[0])D-=M;else if(P[1]%2)D-=M;else D+=M;this._map[D][W]=X;var O=[D,W],j=this._pointKey(O);V[j]=O,delete z[j]}if(L)L(Q,Z)},U._freeSpace=function K(Z,Q,V){return Z>=0&&Z<this._width&&Q>=0&&Q<this._height&&this._map[Z][Q]==V},U._pointKey=function K(Z){return Z[0]+"."+Z[1]},G}(g0),uZ={room:$1,corridor:x1},gZ=function(Y){q0(G,Y);function G(K,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,K,Z)||this,V._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},Q),V._features={room:4,corridor:4},V._map=[],V._featureAttempts=20,V._walls={},V._dug=0,V._digCallback=V._digCallback.bind(c0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(c0(V)),V._isWallCallback=V._isWallCallback.bind(c0(V)),V._priorityWallCallback=V._priorityWallCallback.bind(c0(V)),V}var U=G.prototype;return U.create=function K(Z){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var Q=(this._width-2)*(this._height-2);this._firstRoom();var V=Date.now(),z;do{z=0;var X=Date.now();if(X-V>this._options.timeLimit)break;var L=this._findWall();if(!L)break;var w=L.split(","),P=parseInt(w[0]),D=parseInt(w[1]),W=this._getDiggingDirection(P,D);if(!W)continue;var M=0;do if(M++,this._tryFeature(P,D,W[0],W[1])){this._removeSurroundingWalls(P,D),this._removeSurroundingWalls(P-W[0],D-W[1]);break}while(M<this._featureAttempts);for(var O in this._walls)if(this._walls[O]>1)z++}while(this._dug/Q<this._options.dugPercentage||z);if(this._addDoors(),Z)for(var j=0;j<this._width;j++)for(var I=0;I<this._height;I++)Z(j,I,this._map[j][I]);return this._walls={},this._map=[],this},U._digCallback=function K(Z,Q,V){if(V==0||V==2)this._map[Z][Q]=0,this._dug++;else this._walls[Z+","+Q]=1},U._isWallCallback=function K(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},U._canBeDugCallback=function K(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},U._priorityWallCallback=function K(Z,Q){this._walls[Z+","+Q]=2},U._firstRoom=function K(){var Z=Math.floor(this._width/2),Q=Math.floor(this._height/2),V=$1.createRandomCenter(Z,Q,this._options);this._rooms.push(V),V.create(this._digCallback)},U._findWall=function K(){var Z=[],Q=[];for(var V in this._walls){var z=this._walls[V];if(z==2)Q.push(V);else Z.push(V)}var X=Q.length?Q:Z;if(!X.length)return null;var L=B.getItem(X.sort());return delete this._walls[L],L},U._tryFeature=function K(Z,Q,V,z){var X=B.getWeightedValue(this._features),L=uZ[X],w=L.createRandomAt(Z,Q,V,z,this._options);if(!w.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(w.create(this._digCallback),w instanceof $1)this._rooms.push(w);if(w instanceof x1)w.createPriorityWalls(this._priorityWallCallback),this._corridors.push(w);return!0},U._removeSurroundingWalls=function K(Z,Q){var V=B0[4];for(var z=0;z<V.length;z++){var X=V[z],L=Z+X[0],w=Q+X[1];delete this._walls[L+","+w],L=Z+2*X[0],w=Q+2*X[1],delete this._walls[L+","+w]}},U._getDiggingDirection=function K(Z,Q){if(Z<=0||Q<=0||Z>=this._width-1||Q>=this._height-1)return null;var V=null,z=B0[4];for(var X=0;X<z.length;X++){var L=z[X],w=Z+L[0],P=Q+L[1];if(!this._map[w][P]){if(V)return null;V=L}}if(!V)return null;return[-V[0],-V[1]]},U._addDoors=function K(){var Z=this._map;function Q(X,L){return Z[X][L]==1}for(var V=0;V<this._rooms.length;V++){var z=this._rooms[V];z.clearDoors(),z.addDoors(Q)}},G}(V6);function q6(Y,G,U){U[G[Y+1]]=U[Y],G[U[Y]]=G[Y+1],U[Y]=Y+1,G[Y+1]=Y}function z6(Y,G,U){U[G[Y]]=U[Y],G[U[Y]]=G[Y],U[Y]=Y,G[Y]=Y}var TZ=function(Y){q0(G,Y);function G(){return Y.apply(this,arguments)||this}var U=G.prototype;return U.create=function K(Z){var Q=this._fillMap(1),V=Math.ceil((this._width-2)/2),z=0.375,X=[],L=[];for(var w=0;w<V;w++)X.push(w),L.push(w);X.push(V-1);var P;for(P=1;P+3<this._height;P+=2)for(var D=0;D<V;D++){var W=2*D+1,M=P;if(Q[W][M]=0,D!=X[D+1]&&B.getUniform()>z)q6(D,X,L),Q[W+1][M]=0;if(D!=X[D]&&B.getUniform()>z)z6(D,X,L);else Q[W][M+1]=0}for(var O=0;O<V;O++){var j=2*O+1,I=P;if(Q[j][I]=0,O!=X[O+1]&&(O==X[O]||B.getUniform()>z))q6(O,X,L),Q[j+1][I]=0;z6(O,X,L)}for(var u=0;u<this._width;u++)for(var T=0;T<this._height;T++)Z(u,T,Q[u][T]);return this},G}(g0),hZ=function(Y){q0(G,Y);function G(){var K=Y.apply(this,arguments)||this;return K._stack=[],K._map=[],K}var U=G.prototype;return U.create=function K(Z){var Q=this._width,V=this._height;this._map=[];for(var z=0;z<Q;z++){this._map.push([]);for(var X=0;X<V;X++){var L=z==0||X==0||z+1==Q||X+1==V;this._map[z].push(L?1:0)}}this._stack=[[1,1,Q-2,V-2]],this._process();for(var w=0;w<Q;w++)for(var P=0;P<V;P++)Z(w,P,this._map[w][P]);return this._map=[],this},U._process=function K(){while(this._stack.length){var Z=this._stack.shift();this._partitionRoom(Z)}},U._partitionRoom=function K(Z){var Q=[],V=[];for(var z=Z[0]+1;z<Z[2];z++){var X=this._map[z][Z[1]-1],L=this._map[z][Z[3]+1];if(X&&L&&!(z%2))Q.push(z)}for(var w=Z[1]+1;w<Z[3];w++){var P=this._map[Z[0]-1][w],D=this._map[Z[2]+1][w];if(P&&D&&!(w%2))V.push(w)}if(!Q.length||!V.length)return;var W=B.getItem(Q),M=B.getItem(V);this._map[W][M]=1;var O=[],j=[];O.push(j);for(var I=Z[0];I<W;I++)if(this._map[I][M]=1,I%2)j.push([I,M]);j=[],O.push(j);for(var u=W+1;u<=Z[2];u++)if(this._map[u][M]=1,u%2)j.push([u,M]);j=[],O.push(j);for(var T=Z[1];T<M;T++)if(this._map[W][T]=1,T%2)j.push([W,T]);j=[],O.push(j);for(var d=M+1;d<=Z[3];d++)if(this._map[W][d]=1,d%2)j.push([W,d]);var i=B.getItem(O);for(var Z0=0;Z0<O.length;Z0++){var $0=O[Z0];if($0==i)continue;var P0=B.getItem($0);this._map[P0[0]][P0[1]]=0}this._stack.push([Z[0],Z[1],W-1,M-1]),this._stack.push([W+1,Z[1],Z[2],M-1]),this._stack.push([Z[0],M+1,W-1,Z[3]]),this._stack.push([W+1,M+1,Z[2],Z[3]])},G}(g0),xZ=function(Y){q0(G,Y);function G(K,Z,Q){var V;if(Q===void 0)Q=0;return V=Y.call(this,K,Z)||this,V._regularity=Q,V._map=[],V}var U=G.prototype;return U.create=function K(Z){var Q=this._width,V=this._height,z=this._fillMap(1);Q-=Q%2?1:2,V-=V%2?1:2;var X=0,L=0,w=0,P=0,D=0,W=!1,M=[[0,0],[0,0],[0,0],[0,0]];do{if(X=1+2*Math.floor(B.getUniform()*(Q-1)/2),L=1+2*Math.floor(B.getUniform()*(V-1)/2),!D)z[X][L]=0;if(!z[X][L]){this._randomize(M);do{if(Math.floor(B.getUniform()*(this._regularity+1))==0)this._randomize(M);W=!0;for(var O=0;O<4;O++)if(w=X+M[O][0]*2,P=L+M[O][1]*2,this._isFree(z,w,P,Q,V)){z[w][P]=0,z[X+M[O][0]][L+M[O][1]]=0,X=w,L=P,W=!1,D++;break}}while(!W)}}while(D+1<Q*V/4);for(var j=0;j<this._width;j++)for(var I=0;I<this._height;I++)Z(j,I,z[j][I]);return this._map=[],this},U._randomize=function K(Z){for(var Q=0;Q<4;Q++)Z[Q][0]=0,Z[Q][1]=0;switch(Math.floor(B.getUniform()*4)){case 0:Z[0][0]=-1,Z[1][0]=1,Z[2][1]=-1,Z[3][1]=1;break;case 1:Z[3][0]=-1,Z[2][0]=1,Z[1][1]=-1,Z[0][1]=1;break;case 2:Z[2][0]=-1,Z[3][0]=1,Z[0][1]=-1,Z[1][1]=1;break;case 3:Z[1][0]=-1,Z[0][0]=1,Z[3][1]=-1,Z[2][1]=1;break}},U._isFree=function K(Z,Q,V,z,X){if(Q<1||V<1||Q>=z||V>=X)return!1;return Z[Q][V]},G}(g0),_Z=function(Y){q0(G,Y);function G(K,Z,Q){var V=Y.call(this,K,Z)||this;if(V.map=[],V.rooms=[],V.connectedCells=[],Q=Object.assign({cellWidth:3,cellHeight:3},Q),!Q.hasOwnProperty("roomWidth"))Q.roomWidth=V._calculateRoomSize(V._width,Q.cellWidth);if(!Q.hasOwnProperty("roomHeight"))Q.roomHeight=V._calculateRoomSize(V._height,Q.cellHeight);return V._options=Q,V}var U=G.prototype;return U.create=function K(Z){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),Z)for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)Z(Q,V,this.map[Q][V]);return this},U._calculateRoomSize=function K(Z,Q){var V=Math.floor(Z/Q*0.8),z=Math.floor(Z/Q*0.25);if(z<2)z=2;if(V<2)V=2;return[z,V]},U._initRooms=function K(){for(var Z=0;Z<this._options.cellWidth;Z++){this.rooms.push([]);for(var Q=0;Q<this._options.cellHeight;Q++)this.rooms[Z].push({x:0,y:0,width:0,height:0,connections:[],cellx:Z,celly:Q})}},U._connectRooms=function K(){var Z=B.getUniformInt(0,this._options.cellWidth-1),Q=B.getUniformInt(0,this._options.cellHeight-1),V,z,X,L=!1,w,P,D;do{D=[0,2,4,6],D=B.shuffle(D);do{if(L=!1,V=D.pop(),z=Z+B0[8][V][0],X=Q+B0[8][V][1],z<0||z>=this._options.cellWidth)continue;if(X<0||X>=this._options.cellHeight)continue;if(w=this.rooms[Z][Q],w.connections.length>0){if(w.connections[0][0]==z&&w.connections[0][1]==X)break}if(P=this.rooms[z][X],P.connections.length==0)P.connections.push([Z,Q]),this.connectedCells.push([z,X]),Z=z,Q=X,L=!0}while(D.length>0&&L==!1)}while(D.length>0)},U._connectUnconnectedRooms=function K(){var Z=this._options.cellWidth,Q=this._options.cellHeight;this.connectedCells=B.shuffle(this.connectedCells);var V,z,X;for(var L=0;L<this._options.cellWidth;L++)for(var w=0;w<this._options.cellHeight;w++)if(V=this.rooms[L][w],V.connections.length==0){var P=[0,2,4,6];P=B.shuffle(P),X=!1;do{var D=P.pop(),W=L+B0[8][D][0],M=w+B0[8][D][1];if(W<0||W>=Z||M<0||M>=Q)continue;if(z=this.rooms[W][M],X=!0,z.connections.length==0)break;for(var O=0;O<z.connections.length;O++)if(z.connections[O][0]==L&&z.connections[O][1]==w){X=!1;break}if(X)break}while(P.length);if(X)V.connections.push([z.cellx,z.celly]);else console.log("-- Unable to connect room.")}},U._createRandomRoomConnections=function K(){},U._createRooms=function K(){var Z=this._width,Q=this._height,V=this._options.cellWidth,z=this._options.cellHeight,X=Math.floor(this._width/V),L=Math.floor(this._height/z),w,P,D=this._options.roomWidth,W=this._options.roomHeight,M,O,j;for(var I=0;I<V;I++)for(var u=0;u<z;u++){if(M=X*I,O=L*u,M==0)M=1;if(O==0)O=1;if(w=B.getUniformInt(D[0],D[1]),P=B.getUniformInt(W[0],W[1]),u>0){j=this.rooms[I][u-1];while(O-(j.y+j.height)<3)O++}if(I>0){j=this.rooms[I-1][u];while(M-(j.x+j.width)<3)M++}var T=Math.round(B.getUniformInt(0,X-w)/2),d=Math.round(B.getUniformInt(0,L-P)/2);while(M+T+w>=Z)if(T)T--;else w--;while(O+d+P>=Q)if(d)d--;else P--;M=M+T,O=O+d,this.rooms[I][u].x=M,this.rooms[I][u].y=O,this.rooms[I][u].width=w,this.rooms[I][u].height=P;for(var i=M;i<M+w;i++)for(var Z0=O;Z0<O+P;Z0++)this.map[i][Z0]=0}},U._getWallPosition=function K(Z,Q){var V,z,X;if(Q==1||Q==3){if(V=B.getUniformInt(Z.x+1,Z.x+Z.width-2),Q==1)z=Z.y-2,X=z+1;else z=Z.y+Z.height+1,X=z-1;this.map[V][X]=0}else{if(z=B.getUniformInt(Z.y+1,Z.y+Z.height-2),Q==2)V=Z.x+Z.width+1,X=V-1;else V=Z.x-2,X=V+1;this.map[X][z]=0}return[V,z]},U._drawCorridor=function K(Z,Q){var V=Q[0]-Z[0],z=Q[1]-Z[1],X=Z[0],L=Z[1],w,P,D,W,M=[],O=Math.abs(V),j=Math.abs(z),I=B.getUniform(),u=I,T=1-I;if(P=V>0?2:6,D=z>0?4:0,O<j)w=Math.ceil(j*u),M.push([D,w]),M.push([P,O]),w=Math.floor(j*T),M.push([D,w]);else w=Math.ceil(O*u),M.push([P,w]),M.push([D,j]),w=Math.floor(O*T),M.push([P,w]);this.map[X][L]=0;while(M.length>0){W=M.pop();while(W[1]>0)X+=B0[8][W[0]][0],L+=B0[8][W[0]][1],this.map[X][L]=0,W[1]=W[1]-1}},U._createCorridors=function K(){var Z=this._options.cellWidth,Q=this._options.cellHeight,V,z,X,L,w;for(var P=0;P<Z;P++)for(var D=0;D<Q;D++){V=this.rooms[P][D];for(var W=0;W<V.connections.length;W++){if(z=V.connections[W],X=this.rooms[z[0]][z[1]],X.cellx>V.cellx)L=2,w=4;else if(X.cellx<V.cellx)L=4,w=2;else if(X.celly>V.celly)L=3,w=1;else L=1,w=3;this._drawCorridor(this._getWallPosition(V,L),this._getWallPosition(X,w))}}},G}(g0),mZ={Arena:bZ,Uniform:fZ,Cellular:kZ,Digger:gZ,EllerMaze:TZ,DividedMaze:hZ,IceyMaze:xZ,Rogue:_Z},cZ=function Y(){},yZ=0.5*(Math.sqrt(3)-1),i0=(3-Math.sqrt(3))/6,dZ=function(Y){q0(G,Y);function G(K){var Z;if(K===void 0)K=256;Z=Y.call(this)||this,Z._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var Q=[];for(var V=0;V<K;V++)Q.push(V);Q=B.shuffle(Q),Z._perms=[],Z._indexes=[];for(var z=0;z<2*K;z++)Z._perms.push(Q[z%K]),Z._indexes.push(Z._perms[z]%Z._gradients.length);return Z}var U=G.prototype;return U.get=function K(Z,Q){var V=this._perms,z=this._indexes,X=V.length/2,L=0,w=0,P=0,D,W=(Z+Q)*yZ,M=Math.floor(Z+W),O=Math.floor(Q+W),j=(M+O)*i0,I=M-j,u=O-j,T=Z-I,d=Q-u,i,Z0;if(T>d)i=1,Z0=0;else i=0,Z0=1;var $0=T-i+i0,P0=d-Z0+i0,C0=T-1+2*i0,_1=d-1+2*i0,m1=C(M,X),c1=C(O,X),t0=0.5-T*T-d*d;if(t0>=0){t0*=t0,D=z[m1+V[c1]];var $6=this._gradients[D];L=t0*t0*($6[0]*T+$6[1]*d)}var e0=0.5-$0*$0-P0*P0;if(e0>=0){e0*=e0,D=z[m1+i+V[c1+Z0]];var X6=this._gradients[D];w=e0*e0*(X6[0]*$0+X6[1]*P0)}var Z1=0.5-C0*C0-_1*_1;if(Z1>=0){Z1*=Z1,D=z[m1+1+V[c1+1]];var B6=this._gradients[D];P=Z1*Z1*(B6[0]*C0+B6[1]*_1)}return 70*(L+w+P)},G}(cZ),pZ={Simplex:dZ},U6=function(){function Y(U,K,Z,Q){if(Q===void 0)Q={};if(this._toX=U,this._toY=K,this._passableCallback=Z,this._options=Object.assign({topology:8},Q),this._dirs=B0[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var G=Y.prototype;return G._getNeighbors=function U(K,Z){var Q=[];for(var V=0;V<this._dirs.length;V++){var z=this._dirs[V],X=K+z[0],L=Z+z[1];if(!this._passableCallback(X,L))continue;Q.push([X,L])}return Q},Y}(),lZ=function(Y){q0(G,Y);function G(K,Z,Q,V){var z=Y.call(this,K,Z,Q,V)||this;return z._computed={},z._todo=[],z._add(K,Z,null),z}var U=G.prototype;return U.compute=function K(Z,Q,V){var z=Z+","+Q;if(!(z in this._computed))this._compute(Z,Q);if(!(z in this._computed))return;var X=this._computed[z];while(X)V(X.x,X.y),X=X.prev},U._compute=function K(Z,Q){while(this._todo.length){var V=this._todo.shift();if(V.x==Z&&V.y==Q)return;var z=this._getNeighbors(V.x,V.y);for(var X=0;X<z.length;X++){var L=z[X],w=L[0],P=L[1],D=w+","+P;if(D in this._computed)continue;this._add(w,P,V)}}},U._add=function K(Z,Q,V){var z={x:Z,y:Q,prev:V};this._computed[Z+","+Q]=z,this._todo.push(z)},G}(U6),nZ=function(Y){q0(G,Y);function G(K,Z,Q,V){var z;if(V===void 0)V={};return z=Y.call(this,K,Z,Q,V)||this,z._todo=[],z._done={},z}var U=G.prototype;return U.compute=function K(Z,Q,V){this._todo=[],this._done={},this._fromX=Z,this._fromY=Q,this._add(this._toX,this._toY,null);while(this._todo.length){var z=this._todo.shift(),X=z.x+","+z.y;if(X in this._done)continue;if(this._done[X]=z,z.x==Z&&z.y==Q)break;var L=this._getNeighbors(z.x,z.y);for(var w=0;w<L.length;w++){var P=L[w],D=P[0],W=P[1],M=D+","+W;if(M in this._done)continue;this._add(D,W,z)}}var O=this._done[Z+","+Q];if(!O)return;while(O)V(O.x,O.y),O=O.prev},U._add=function K(Z,Q,V){var z=this._distance(Z,Q),X={x:Z,y:Q,prev:V,g:V?V.g+1:0,h:z},L=X.g+X.h;for(var w=0;w<this._todo.length;w++){var P=this._todo[w],D=P.g+P.h;if(L<D||L==D&&z<P.h){this._todo.splice(w,0,X);return}}this._todo.push(X)},U._distance=function K(Z,Q){switch(this._options.topology){case 4:return Math.abs(Z-this._fromX)+Math.abs(Q-this._fromY);case 6:var V=Math.abs(Z-this._fromX),z=Math.abs(Q-this._fromY);return z+Math.max(0,(V-z)/2);case 8:return Math.max(Math.abs(Z-this._fromX),Math.abs(Q-this._fromY))}},G}(U6),rZ={Dijkstra:lZ,AStar:nZ},sZ=function(){function Y(U){this._scheduler=U,this._lock=1}var G=Y.prototype;return G.start=function U(){return this.unlock()},G.lock=function U(){return this._lock++,this},G.unlock=function U(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var K=this._scheduler.next();if(!K)return this.lock();var Z=K.act();if(Z&&Z.then)this.lock(),Z.then(this.unlock.bind(this))}return this},Y}(),oZ=function(){function Y(U,K){if(K===void 0)K={};this._reflectivityCallback=U,this._options={},K=Object.assign({passes:1,emissionThreshold:100,range:10},K),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(K)}var G=Y.prototype;return G.setOptions=function U(K){if(Object.assign(this._options,K),K&&K.range)this.reset();return this},G.setFOV=function U(K){return this._fov=K,this._fovCache={},this},G.setLight=function U(K,Z,Q){var V=K+","+Z;if(Q)this._lights[V]=typeof Q=="string"?m(Q):Q;else delete this._lights[V];return this},G.clearLights=function U(){this._lights={}},G.reset=function U(){return this._reflectivityCache={},this._fovCache={},this},G.compute=function U(K){var Z={},Q={},V={};for(var z in this._lights){var X=this._lights[z];Q[z]=[0,0,0],x(Q[z],X)}for(var L=0;L<this._options.passes;L++){if(this._emitLight(Q,V,Z),L+1==this._options.passes)continue;Q=this._computeEmitters(V,Z)}for(var w in V){var P=w.split(","),D=parseInt(P[0]),W=parseInt(P[1]);K(D,W,V[w])}return this},G._emitLight=function U(K,Z,Q){for(var V in K){var z=V.split(","),X=parseInt(z[0]),L=parseInt(z[1]);this._emitLightFromCell(X,L,K[V],Z),Q[V]=1}return this},G._computeEmitters=function U(K,Z){var Q={};for(var V in K){if(V in Z)continue;var z=K[V],X=void 0;if(V in this._reflectivityCache)X=this._reflectivityCache[V];else{var L=V.split(","),w=parseInt(L[0]),P=parseInt(L[1]);X=this._reflectivityCallback(w,P),this._reflectivityCache[V]=X}if(X==0)continue;var D=[0,0,0],W=0;for(var M=0;M<3;M++){var O=Math.round(z[M]*X);D[M]=O,W+=O}if(W>this._options.emissionThreshold)Q[V]=D}return Q},G._emitLightFromCell=function U(K,Z,Q,V){var z=K+","+Z,X;if(z in this._fovCache)X=this._fovCache[z];else X=this._updateFOV(K,Z);for(var L in X){var w=X[L],P=void 0;if(L in V)P=V[L];else P=[0,0,0],V[L]=P;for(var D=0;D<3;D++)P[D]+=Math.round(Q[D]*w)}return this},G._updateFOV=function U(K,Z){var Q=K+","+Z,V={};this._fovCache[Q]=V;var z=this._options.range;function X(L,w,P,D){var W=L+","+w,M=D*(1-P/z);if(M==0)return;V[W]=M}return this._fov.compute(K,Z,z,X.bind(this)),V},Y}(),aZ=y,iZ=o,tZ=WZ;J.Color=iZ,J.DEFAULT_HEIGHT=g1,J.DEFAULT_WIDTH=u1,J.DIRS=B0,J.Display=l0,J.Engine=sZ,J.EventQueue=Q6,J.FOV=IZ,J.KEYS=FZ,J.Lighting=oZ,J.Map=mZ,J.Noise=pZ,J.Path=rZ,J.RNG=B,J.Scheduler=AZ,J.StringGenerator=OZ,J.Text=tZ,J.Util=aZ,Object.defineProperty(J,"__esModule",{value:!0})})});var KJ=typeof window!=="undefined"?window.innerWidth:0,qJ=typeof window!=="undefined"?window.innerHeight:0;var n={cameraWidth:Math.floor(KJ/16),cameraHeight:Math.floor(qJ/16),chatLogMaxSize:100,chatLogMaxDisplaySize:8,debug:!0,fontSize:16,highlightEnemy:!0,showGrid:!0,showUI:!0,showTooltip:!0,zoom:1},d1={WIDTH:1024,HEIGHT:1024},G0={width:Math.floor(n.cameraWidth*(1/n.zoom)),height:Math.floor(n.cameraHeight*(1/n.zoom)),bg:"transparent",fontSize:Math.floor(n.fontSize*n.zoom),layout:"tile-gl",tileWidth:16,tileHeight:16,tileSet:null,tileMap:null,tileColorize:!0};function Y6(J,q){let $=J.entities[q];return`DEBUG: ${q} at ${$.mapId},${$.x},${$.y}`}class X1{name;description;energyDelta;constructor(J,q,$=0){this.name=J,this.description=q,this.energyDelta=$}}class J1{name;description;constructor(J,q){this.name=J,this.description=q}}class M0{key;description;constructor(J,q){this.key=J,this.description=q}}class T0{name;description;constructor(J,q){this.name=J,this.description=q}}class H0{name;description;icon;color;energyMax;unlockCondition;constructor(J,q,$,B=100){this.name=J,this.description=q,this.icon=$,this.energyMax=B,this.color="white",this.unlockCondition=null}}class n0{name;description;color;constructor(J,q,$){this.name=J,this.description=q,this.color=$}}class Y0{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(J,q,$,B="cyberyellow",H=0,R=0,C=0,S=0,N=0,f=[]){this.name=J,this.description=q,this.icon=$,this.color=B,this.energyDelta=H,this.matter=R,this.gold=C,this.damage=S,this.energyCost=N,this.effects=f}}class r{name;description;tooltip;icon;fg;bg;energyDelta;constructor(J,q,$="",B=null,H="white",R="black",C=0){this.name=J,this.description=q,this.tooltip=$,this.icon=B,this.fg=H,this.bg=R,this.energyDelta=C}}var F={actions:{Enter:new X1("Enter","Enter a portal or plant atmosphere"),Launch:new X1("Launch","Launch into space",-10),Wait:new X1("Wait","Wait one turn in place")},ais:{aggrorange:new J1("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new J1("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new J1("guardian","Idles at a position and only fights back if engaged"),interactenrage:new J1("interactenrage","Gets hostile when getting talked to too often!")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",mutedcyan:"#2cc9c5",mutedyellow:"#b0a216",mutedmagenta:"#a716b0",mutedgreen:"#5ca821",mutedblue:"#1628b0",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new M0("N","Move/interact/combat north"),E:new M0("E","Move/interact/combat east"),S:new M0("S","Move/interact/combat south"),W:new M0("W","Move/interact/combat west"),A:new M0("A","Primary action, confirm"),B:new M0("B","Take a break, cancel"),"1":new M0("1","Secondary action, first quick slot"),"2":new M0("2","Tertiary action, second quick slot"),M:new M0("M","Menu"),"#":new M0("#","Open prompt")},constants:{DRAIN_MATTER_COST:500,DRAIN_GOLD_COST:1,MIN_TURN_SPEED_IN_MS:80},dialogs:{bot_bar_aerobot_backstage:"Huh? How did you get here?",bot_bar_aerobot_charger:"Feel free to recharge on those chargepads and enjoy the show.",bot_bar_aerobot_spa_down:"Have you been to our shop, yet?",bot_bar_aerobot_spa_up:"Ahhhh, so refreshing!",bot_bar_aerobot_welcome:"Welcome to the Bot Bar. How may we serve you?",bot_dormitory_aerobot_down:"Would you please go to your own pod?",bot_dormitory_aerobot_up:"Pod, sweet pod!",bot_dormitory_graffiti:"Not all pods are created equal! Rad!",bot_dormitory_workbot_left:"This pod is taken, go away!",bot_dormitory_workbot_right:"Brzzzt! Brzzzt!",bot_factory_workbot_assembly:"The assembly line is unblocked!",bot_factory_workbot_drain:"Don't come too close to the drain or you'll lose your stuff!",bot_factory_workbot_forebot:"What are you doing here? Get back to work!",bot_factory_workbot_sewers:"Sewage water is spilling over again.",bot_factory_workbot_workwork:"Work, work!",bot_factory_workbot_wrench:"I lost a wrench somewhere here...",bot_prison_aerobot:"I'm innocent! I'm innocent! I'm innocent! Beep!",bot_prison_workbot:"Thanks for freeing me! Guess I don't need this Pickaxe anymore...",bot_stadium_botracing:"Now this is botracing!",bot_station_graffiti:"Yo! The factory has a hidden backdoor!",bot_station_graffiti_statues:"One statue isn't like the others! Ey!",bot_station_pioneer:"You shall not pass!",manual_spirit:"Weeee!",manual_aerobot:"Huh? Why don't you have a hull?",manual_workbot:"Work, work!",manual_cleaner:"Follow the rules! Okay?",manual_pioneer:"Don't talk to me, weakling!",playground_label_top_portal:"Goes to top left side of star",playground_label_bottom_portal:"Goes to top left corner of solar system",shop_instance_aerobot_shopper:"It's shiny!!!",shop_instance_shopkeeper:"Welcome! What does your engine desire?",shop_instance_workbot_shopper:"This shop is not so secret after all..."},effects:{Recharger:new T0("Recharger","Doubles energy gained from chargepads"),RockCrusher:new T0("Rock Crusher","Mines rock"),Screwing:new T0("Screwing","Unscrews the sewer portal covers"),WallCrusher:new T0("Wall Crusher","Tears down weak walls"),WaterImmunity:new T0("Water Immunity","No damage taken from water"),WaterShield:new T0("Water Shield","Reduces damage taken from water")},entities:{movableboulder:new H0("Boulder","A movable rock","o",2),movablebox:new H0("Box","A movable box","x",2),Spirit:new H0("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new H0("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new H0("WorkBot","Basic factory worker","B"),Cleaner:new H0("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new H0("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Graffiticyan:new H0("Graffiti","Writing on the wall","zc",2),Graffitimagenta:new H0("Graffiti","Writing on the wall","zm",2),Graffitiyellow:new H0("Graffiti","Writing on the wall","zy",2),Valkyrie:new H0("Valkyrie","Airbourne war logistics","V",160),Pioneer:new H0("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200),RoboRat:new H0("RoboRat","Minor self-assembled critter","r",5)},factions:{Critters:new n0("Critters","Small pests","cyberyellow"),Enraged:new n0("Enraged","Always hostile faction","cybermagenta"),Spirits:new n0("Spirits","Default player faction","white"),Pyrates:new n0("Pyrates","Default enemy faction","cybermagenta"),Guardians:new n0("Guardians","Bot station guardians","cybercyan")},items:{battery:new Y0("Battery","Increases maximum energy","b","cyberyellow",10),chest:new Y0("Chest","A chest. What might be inside?","i","cyberyellow"),energy:new Y0("Energy","Energy pack","e","cyberyellow",10),gold:new Y0("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new Y0("Goo","A minor matter source","goo","gray",0,1),junk:new Y0("Junk","Broken bot","%","gray",0,1),matter:new Y0("Matter","A pile of stuff","m","gray",0,100),broom:new Y0("Broom","Sweeps the floor","ib","cyberyellow",0,0,0,-10,-1),cheat:new Y0("Cheat","Most powerful tool, totally legit","icheat","cyberyellow",0,0,0,-500,-1,["Recharger","Rock Crusher","Screwing","Wall Crusher","Water Shield"]),hammer:new Y0("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["Wall Crusher"]),pickaxe:new Y0("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["Rock Crusher"]),ratbite:new Y0("Rat Bite","Only rats have this","irb","cyberyellow",0,0,0,-5,-1,["Water Immunity"]),shocker:new Y0("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1,["Recharger"]),trident:new Y0("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["Water Shield"]),wrench:new Y0("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1,["Screwing"])},maps:{bot_bar:`!
!!id bot_bar
!!size 28 16
!!spawn 14 3 movablebox
!!spawn 14 12 movablebox
!!spawn 2 4 AeroBot faction=Spirits dialog=bot_bar_aerobot_welcome
!!spawn 4 8 AeroBot faction=Spirits dialog=bot_bar_aerobot_charger
!!spawn 10 7 AeroBot faction=Spirits dialog=bot_bar_aerobot_backstage
!!spawn 21 3 AeroBot faction=Spirits dialog=bot_bar_aerobot_spa_up
!!spawn 21 5 AeroBot faction=Spirits dialog=bot_bar_aerobot_spa_down
!!spawn 10 11 shocker
!!. void
!!_ voidtrue
!!~ water
!!# wall
!!s wallstatueaerobot
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
!!spawn 4 11 AeroBot faction=Spirits dialog=bot_dormitory_aerobot_up
!!spawn 23 27 AeroBot faction=Spirits dialog=bot_dormitory_aerobot_down ai=interactenrage equip=shocker
!!spawn 8 18 WorkBot faction=Spirits dialog=bot_dormitory_workbot_left ai=interactenrage
!!spawn 26 18 WorkBot faction=Spirits dialog=bot_dormitory_workbot_right
!!spawn 13 28 Graffiticyan dialog=bot_dormitory_graffiti
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
!!s wallstatuepioneer
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
!!spawn 40 19 WorkBot faction=Spirits dialog=bot_factory_workbot_wrench
!!spawn 15 18 WorkBot faction=Spirits dialog=bot_factory_workbot_workwork
!!spawn 25 18 WorkBot faction=Spirits dialog=bot_factory_workbot_assembly
!!spawn 43 29 WorkBot faction=Spirits dialog=bot_factory_workbot_sewers
!!spawn 1 19 WorkBot faction=Spirits dialog=bot_factory_workbot_drain
!!spawn 35 3 WorkBot faction=Spirits name=ForeBot dialog=bot_factory_workbot_forebot equip=wrench ai=interactenrage
!!spawn 19 27 RoboRat faction=Critters ai=aggrorangeshort equip=ratbite
!!# wall
!!+ wallweak
!!~ water
!!- watersewage
!!. void
!!* drain
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!$ terminal
!!O portal bot_station 4 28
!!P portal bot_station 13 25
!!h portal bot_station 5 21
!!§ portalsewers bot_station_sewers 12 27
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
#vv#+###########################################
#**+.>.>.>.>.>.>.>.>.>~>.>.>.>.>.>.>.>.>.>.>.>.#
#**+.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>.>~>.>.>.>.P
#**#+###########################################
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
#............................................~-§
##O#############################################
`,bot_prison:`!
!!id bot_prison
!!size 48 34
!!spawn 18 11 Cleaner faction=Guardians ai=aggrorange
!!spawn 17 2 Cleaner faction=Guardians ai=aggrorange
!!spawn 24 5 Cleaner faction=Guardians ai=aggrorange
!!spawn 29 24 Cleaner faction=Guardians ai=aggrorangeshort
!!spawn 34 22 AeroBot faction=Spirits dialog=bot_prison_aerobot
!!spawn 9 22 WorkBot faction=Spirits dialog=bot_prison_workbot
!!spawn 28 1 broom
!!spawn 43 30 battery
!!spawn 9 30 matter
!!spawn 9 21 pickaxe
!!# wall
!!+ wallweak
!!s wallstatuecleaner
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
!!§ portalsewers bot_station_sewers 27 6
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
_________________##_#,#_____#.#_________________
_________________##_#,#####_#.#_________________
_________________##_#,,,,,#_#.#_________________
_________________##_#####,#_#.#_________________
################_##_#,,,,,#_#.#_################
#~...#~...#...~#_##_#,#####_#.#_#~...#...~#...~#
#....#....#....#_##_#,#####_#.#_#....#....#....#
#++C+++C++++C++######,#######.###++C++++C+++C++#
#..............P................R..............#
#..............######,###########..............#
#..............##_###,#________##..............#
#..............##_###,#________##..............#
#++C+++C++++C++##_#,,,#________##++C++++C+++C++#
#....#....#....##_#,###________##....#....#....#
#~...#~...#...~##_#,###________#§~...#...~#...~#
##,####,#####,#####,##############,#####,####,##
_#,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,#_
_##############################################_
`,bot_stadium:`!
!!id bot_stadium
!!size 48 16
!!spawn 26 2 WorkBot faction=Spirits dialog=bot_stadium_botracing
!!# wall
!!+ wallweak
!!. void
!!= chargepad
!!~ watersewage
!!^ movenorth
!!> moveeast
!!v movesouth
!!< movewest
!!s wallstatueworkbot
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
!!spawn 8 3 Pioneer faction=Guardians ai=aggrorangeshort equip=hammer dialog=bot_station_pioneer
!!spawn 27 17 Graffitimagenta dialog=bot_station_graffiti
!!spawn 9 16 Graffitiyellow dialog=bot_station_graffiti_statues
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
!!s portalsewers bot_station_sewers 0 11
!!w portalsewers bot_station_sewers 1 0
!!r portalsewers bot_station_sewers 31 1
!!z portalsewers bot_station_sewers 30 31
#w##############################
#~..########################..~r
#.......################.......#
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
#..#########...........####.##.#
#..#######S#.>.>.>.>.>.B###.##.#
#.>.>.>.>...^....^.....######..#
#.....................v####.#..#
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
!!spawn 4 15 RoboRat faction=Critters ai=aggrorangeshort equip=ratbite
!!spawn 12 23 RoboRat faction=Critters ai=aggrorangeshort equip=ratbite
!!spawn 6 6 RoboRat faction=Critters ai=aggrorangeshort equip=ratbite
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
!!F portal bot_factory 47 30
!!P portal bot_prison 32 30
#w##############################
#-~~########################~~-r
#-~~~~~~################~~~~~~-#
#-~~~~~~~~~~########~~~~~~~~~~-#
#-~~####~~~~~~~##~~~~~~~~####~-#
#-~~#~~#~~~~~~~~~~~~~~~~~#~~#~-#
#-~~~~~#~~~~~~~~~~~~~~~~~#~P#~-#
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
#~~#~~~~~~~~F#~~~~~~~#~####~#~-#
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
!!spawn 4 26 Spirit faction=Spirits dialog=manual_spirit
!!spawn 4 27 AeroBot faction=Spirits dialog=manual_aerobot
!!spawn 4 28 WorkBot faction=Spirits dialog=manual_workbot
!!spawn 4 29 Cleaner faction=Spirits dialog=manual_cleaner
!!spawn 4 30 Pioneer faction=Spirits dialog=manual_pioneer equip=hammer ai=interactenrage
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
#^..M_or_click/touch_on_the_screen_center_to_hide/show_the_message_log........^#
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
!!spawn 9 17 cheat
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
!!spawn 17 2 Graffiticyan dialog=playground_label_top_portal
!!spawn 17 5 Graffitimagenta dialog=playground_label_bottom_portal
!!. void
!!# wall
!!= chargepad
!!~ water
!!O portal botmos_hull_selection 1 19
!!Q portal solarsystem=1337 448 448
!!P portal solarsystem=1337 30 17
#O##################
#=.................#
#...............Q#.#
#..................#
#..................#
#...............P#.#
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
`,shop_instance:`!
!!id shop_instance
!!size 48 16
!!# wall
!!. void
!!; wallstatueworkbot
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
`,square_falcon:`!
!!id square_falcon
!!size 7 6
!!_ voidtrue
!!# wall
!!O portalclosed
######_
#######
####O__
#######
######_
__##___
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:n.showGrid?new r("void","Just nothing here","",".","gray"):new r("void","Just nothing here"),voidtrue:new r("voidtrue","Really nothing here and you shouldn't get there ever!","","_"),voidhidden:new r("voidhidden","Looks like a wall, but isn't!","","#","gray","black"),water:new r("water","Rust and other dangers await","Water","~","cybercyan","cyberblue",-2),watersewage:new r("watersewage","Rust, goo and other dangers await","Sewage Water","~~","cyberyellow","cybergreen",-4),drain:new r("drain","Drains gold, matter and some of your energy","Drain","*","cybermagenta","black",-5),rock:new r("rock","Hidden treasures may await","Rock","'","white","gray"),tree:new r("tree","Lots of trees make a forest","Tree","t","brown","black"),wall:new r("wall","A strong wall","","#","gray","black"),wallstatueaerobot:new r("wallstatueaerobot","A small statue looking like an AeroBot","","sa","gray","black"),wallstatuecleaner:new r("wallstatuecleaner","A small statue looking like a Cleaner","","sc","gray","black"),wallstatuepioneer:new r("wallstatuepioneer","A small statue looking like a Pioneer","","sp","gray","black"),wallstatueworkbot:new r("wallstatueworkbot","A small statue looking like a WorkBot","","sb","gray","black"),wallweak:new r("wallweak","A weakened wall","Weak Wall","+","gray","black"),chargepad:new r("chargepad","Recharges energy and health","Chargepad","=","cyberyellow","black",2),movenorth:new r("movenorth","Moves you north","","^^","cyberyellow"),moveeast:new r("moveeast","Moves you east","",">>","cyberyellow"),movesouth:new r("movesouth","Moves you south","","vv","cyberyellow"),movewest:new r("movewest","Moves you west","","<<","cyberyellow"),portal:new r("portal","Gateway to another map","Portal","O","cyberyellow","gray"),portalclosed:new r("portalclosed","Closed gateway to another map","Closed Portal","Oc","black","gray"),portalhidden:new r("portalhidden","Hidden gateway to another map","","#","gray","black"),portallauncher:new r("portallauncher","Launches into space","Launch to Space","O","cyberyellow","gray"),portalsewers:new r("portalsewers","Needs some tool to open","Sewer Gate","#~","gray","black"),portalstartworkbot:new r("portalstartworkbot","Start playing as a WorkBot","Play as a WorkBot","OB","white"),portalstartaerobot:new r("portalstartaerobot","Start playing as an AeroBot","Play as an AeroBot","OA","white"),"_portalstart?":new r("_portalstart?","Not unlocked, yet!","?","O?","white"),spacerock:new r("spacerock","Mountains as seen from space, non-blocking!","","'s","white","gray"),spacetree:new r("spacetree","Forest as seen from space","","ts","brown","darkgray"),spacewater:new r("spacewater","Water as seen from space, not dangerous!","","~s","cybercyan","cyberblue"),spacevoid:new r("spacevoid","Void/ground as seen from space","",".s","darkgray","darkgray"),spacevoidstarwhite:new r("spacevoidstarwhite","Space with a white background star","",".f","white"),spacevoidstaryellow:new r("spacevoidstaryellow","Space with a yellow background star","",".y","cyberyellow"),star:new r("star","It's hot, really hot!","Star","§","cyberyellow","cyberyellow",-100),terminal:new r("terminal","A computer terminal","Terminal","$","cyberyellow"),tv:new r("tv","A big billboard screen","TV","!","black","cyberyellow")},uitexts:{}};function w6(J){if(Object.hasOwn(F.dialogs,J))return F.dialogs[J];return`FIXME: ${J} needs localization!`}function L0(J,q){return J.chatLog.push(q),J.chatLog=J.chatLog.slice(-n.chatLogMaxSize),J}function E0(J,q,$,B,H=0,R=0,C={}){let S={id:q,type:$,mapId:B,x:H,y:R,energy:10,energyMax:10,gold:0,matter:0,message:null,interactions:0,options:C};return J=Y1(J,S,$),J.entities[S.id]=S,J}function B1(J,q){return J.entities[q]=void 0,delete J.entities[q],J.tools[q]=void 0,J}function h0(J,q){let $=Object.keys(J.entities),B=[];for(let H=0;H<$.length;H++){let R=J.entities[$[H]];if(R.mapId===q)B.push(R)}return B}function G1(J,q,$,B){let H=h0(J,q).filter((R)=>R.x===$&&R.y===B);if(H.length>0)return H[0];return null}function Y1(J,q,$){if(q.type=$,q.energy=$.energyMax,q.energyMax=$.energyMax,q.gold=0,q.matter=0,!O0(q))J.tools[q.id]=void 0;return J}function L6(J,q,$){if(q===$)return J;if(q.options.faction===$.options.faction||p1($)){if($.options.dialog){let B=$?.options?.name?$.options.name:$.type.name;J=L0(J,B+": "+w6($.options.dialog)),$.interactions++}}else{let B=q.id,H=$.id;J._combatQueue.push({entityId:B,otherEntityId:H})}if($.interactions>=3&&$.options?.ai===F.ais.interactenrage)$.options.faction=F.factions.Enraged;return J}function O0(J){return J.type===F.entities.movableboulder||J.type===F.entities.movablebox}function p1(J){return J.type===F.entities.Graffiticyan||J.type===F.entities.Graffitimagenta||J.type===F.entities.Graffitiyellow}function w1(J,q){let $={A:F.actions.Wait,B:F.actions.Wait};if(!!J.lastSpacePositionByEntity[q.id]&&q.energy>Math.abs(F.actions.Launch.energyDelta))$.A=F.actions.Launch;let H=J.maps[q.mapId].getTile(q.x,q.y);if(!!H.options.mapId&&"x"in H.options&&"y"in H.options)$.A=F.actions.Enter;return $}function l1(J,q,$){let B=J._eventSubscribers[q];if(B)for(let H=0;H<B.length;H++){let R=B[H];J=R(J,$)}return J}function n1(J,q,$){if(q in J._eventSubscribers);else J._eventSubscribers[q]=[];return J._eventSubscribers[q].push($),J}function Q1(J,q,$,B=0,H=0){let C={id:L1($,B,H),type:q,mapId:$,x:B,y:H,energy:q.energyDelta,gold:q.gold,matter:q.matter};return J.items[C.id]=C,J}function P6(J,q,$,B=0,H=0){let R=F.items.junk,S={id:L1($,B,H),type:R,mapId:$,x:B,y:H,energy:R.energyDelta,gold:R.gold,matter:q};return J.items[S.id]=S,J}function V1(J,q,$,B=0,H=0,R,C){let N={id:L1($,B,H),type:q,mapId:$,x:B,y:H,energy:q.energyDelta,gold:R,matter:C};return J.items[N.id]=N,J}function L1(J,q,$){return"item,"+J+","+q+","+$}function r1(J,q){return J.items[q]=void 0,delete J.items[q],J}function P1(J,q){let $=Object.keys(J.items),B=[];for(let H=0;H<$.length;H++){let R=J.items[$[H]];if(R.mapId===q)B.push(R)}return B}function H1(J,q,$,B){let H=L1(q,$,B);if(H in J.items)return J.items[H];return null}function D1(J,q){return J.tools[q]}function H6(J,q,$){if(O0(q))return J;if(!UJ(q,$))return J;if(zJ($))J=s1(J,q.id,$.type);else{if($.type===F.items.battery)q.energyMax+=$.energy;if(J._energyQueue.push({entityId:q.id,energyDelta:$.energy}),q.id.startsWith("player"))J=L0(J,`Picked up ${$.type.name}.`)}return q.gold+=$.gold,q.matter+=$.matter,r1(J,$.id),J}function s1(J,q,$){let B={type:$};if(J.tools[q]=B,q.startsWith("player"))J=L0(J,`Equipped ${$.name}.`);return J}function zJ(J){return J.type.energyCost<0}function UJ(J,q){return J.gold+q.gold>=0&&J.matter+q.matter>=0}/*!
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
 */var $J=function(J){var q={};function $(B){if(q[B])return q[B].exports;var H=q[B]={i:B,l:!1,exports:{}};return J[B].call(H.exports,H,H.exports,$),H.l=!0,H.exports}return $.m=J,$.c=q,$.d=function(B,H,R){$.o(B,H)||Object.defineProperty(B,H,{enumerable:!0,get:R})},$.r=function(B){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(B,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(B,"__esModule",{value:!0})},$.t=function(B,H){if(1&H&&(B=$(B)),8&H)return B;if(4&H&&typeof B=="object"&&B&&B.__esModule)return B;var R=Object.create(null);if($.r(R),Object.defineProperty(R,"default",{enumerable:!0,value:B}),2&H&&typeof B!="string")for(var C in B)$.d(R,C,function(S){return B[S]}.bind(null,C));return R},$.n=function(B){var H=B&&B.__esModule?function(){return B.default}:function(){return B};return $.d(H,"a",H),H},$.o=function(B,H){return Object.prototype.hasOwnProperty.call(B,H)},$.p="/bin/",$($.s=0)}([function(J,q,$){var B={},H=$(1),R=$(2),C=$(3);J.exports=B;var S=1;B.js=function(){var N,f,y,J0=!1,V0={},l={},m={},Q0={},x=!0,_={},p=[],U0=Number.MAX_VALUE,s=!1;this.setAcceptableTiles=function(k){k instanceof Array?y=k:!isNaN(parseFloat(k))&&isFinite(k)&&(y=[k])},this.enableSync=function(){J0=!0},this.disableSync=function(){J0=!1},this.enableDiagonals=function(){s=!0},this.disableDiagonals=function(){s=!1},this.setGrid=function(k){N=k;for(var v=0;v<N.length;v++)for(var E=0;E<N[0].length;E++)l[N[v][E]]||(l[N[v][E]]=1)},this.setTileCost=function(k,v){l[k]=v},this.setAdditionalPointCost=function(k,v,E){m[v]===void 0&&(m[v]={}),m[v][k]=E},this.removeAdditionalPointCost=function(k,v){m[v]!==void 0&&delete m[v][k]},this.removeAllAdditionalPointCosts=function(){m={}},this.setDirectionalCondition=function(k,v,E){Q0[v]===void 0&&(Q0[v]={}),Q0[v][k]=E},this.removeAllDirectionalConditions=function(){Q0={}},this.setIterationsPerCalculation=function(k){U0=k},this.avoidAdditionalPoint=function(k,v){V0[v]===void 0&&(V0[v]={}),V0[v][k]=1},this.stopAvoidingAdditionalPoint=function(k,v){V0[v]!==void 0&&delete V0[v][k]},this.enableCornerCutting=function(){x=!0},this.disableCornerCutting=function(){x=!1},this.stopAvoidingAllAdditionalPoints=function(){V0={}},this.findPath=function(k,v,E,o,e){var K0=function(v0){J0?e(v0):setTimeout(function(){e(v0)})};if(y===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(N===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(k<0||v<0||E<0||o<0||k>N[0].length-1||v>N.length-1||E>N[0].length-1||o>N.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(k!==E||v!==o){for(var D0=N[o][E],X0=!1,j0=0;j0<y.length;j0++)if(D0===y[j0]){X0=!0;break}if(X0!==!1){var w0=new H;w0.openList=new C(function(v0,p0){return v0.bestGuessDistance()-p0.bestGuessDistance()}),w0.isDoneCalculating=!1,w0.nodeHash={},w0.startX=k,w0.startY=v,w0.endX=E,w0.endY=o,w0.callback=K0,w0.openList.push(t(w0,w0.startX,w0.startY,null,1));var a0=S++;return _[a0]=w0,p.push(a0),a0}K0(null)}else K0([])},this.cancelPath=function(k){return k in _&&(delete _[k],!0)},this.calculate=function(){if(p.length!==0&&N!==void 0&&y!==void 0)for(f=0;f<U0;f++){if(p.length===0)return;J0&&(f=0);var k=p[0],v=_[k];if(v!==void 0)if(v.openList.size()!==0){var E=v.openList.pop();if(v.endX!==E.x||v.endY!==E.y)E.list=0,E.y>0&&A(v,E,0,-1,1*h(E.x,E.y-1)),E.x<N[0].length-1&&A(v,E,1,0,1*h(E.x+1,E.y)),E.y<N.length-1&&A(v,E,0,1,1*h(E.x,E.y+1)),E.x>0&&A(v,E,-1,0,1*h(E.x-1,E.y)),s&&(E.x>0&&E.y>0&&(x||b(N,y,E.x,E.y-1,E)&&b(N,y,E.x-1,E.y,E))&&A(v,E,-1,-1,1.4*h(E.x-1,E.y-1)),E.x<N[0].length-1&&E.y<N.length-1&&(x||b(N,y,E.x,E.y+1,E)&&b(N,y,E.x+1,E.y,E))&&A(v,E,1,1,1.4*h(E.x+1,E.y+1)),E.x<N[0].length-1&&E.y>0&&(x||b(N,y,E.x,E.y-1,E)&&b(N,y,E.x+1,E.y,E))&&A(v,E,1,-1,1.4*h(E.x+1,E.y-1)),E.x>0&&E.y<N.length-1&&(x||b(N,y,E.x,E.y+1,E)&&b(N,y,E.x-1,E.y,E))&&A(v,E,-1,1,1.4*h(E.x-1,E.y+1)));else{var o=[];o.push({x:E.x,y:E.y});for(var e=E.parent;e!=null;)o.push({x:e.x,y:e.y}),e=e.parent;o.reverse();var K0=o;v.callback(K0),delete _[k],p.shift()}}else v.callback(null),delete _[k],p.shift();else p.shift()}};var A=function(k,v,E,o,e){var K0=v.x+E,D0=v.y+o;if((V0[D0]===void 0||V0[D0][K0]===void 0)&&b(N,y,K0,D0,v)){var X0=t(k,K0,D0,v,e);X0.list===void 0?(X0.list=1,k.openList.push(X0)):v.costSoFar+e<X0.costSoFar&&(X0.costSoFar=v.costSoFar+e,X0.parent=v,k.openList.updateItem(X0))}},b=function(k,v,E,o,e){var K0=Q0[o]&&Q0[o][E];if(K0){var D0=g(e.x-E,e.y-o);if(!function(){for(var j0=0;j0<K0.length;j0++)if(K0[j0]===D0)return!0;return!1}())return!1}for(var X0=0;X0<v.length;X0++)if(k[o][E]===v[X0])return!0;return!1},g=function(k,v){if(k===0&&v===-1)return B.TOP;if(k===1&&v===-1)return B.TOP_RIGHT;if(k===1&&v===0)return B.RIGHT;if(k===1&&v===1)return B.BOTTOM_RIGHT;if(k===0&&v===1)return B.BOTTOM;if(k===-1&&v===1)return B.BOTTOM_LEFT;if(k===-1&&v===0)return B.LEFT;if(k===-1&&v===-1)return B.TOP_LEFT;throw new Error("These differences are not valid: "+k+", "+v)},h=function(k,v){return m[v]&&m[v][k]||l[N[v][k]]},t=function(k,v,E,o,e){if(k.nodeHash[E]!==void 0){if(k.nodeHash[E][v]!==void 0)return k.nodeHash[E][v]}else k.nodeHash[E]={};var K0=a(v,E,k.endX,k.endY);if(o!==null)var D0=o.costSoFar+e;else D0=0;var X0=new R(o,v,E,D0,K0);return k.nodeHash[E][v]=X0,X0},a=function(k,v,E,o){var e,K0;return s?(e=Math.abs(k-E))<(K0=Math.abs(v-o))?1.4*e+K0:1.4*K0+e:(e=Math.abs(k-E))+(K0=Math.abs(v-o))}},B.TOP="TOP",B.TOP_RIGHT="TOP_RIGHT",B.RIGHT="RIGHT",B.BOTTOM_RIGHT="BOTTOM_RIGHT",B.BOTTOM="BOTTOM",B.BOTTOM_LEFT="BOTTOM_LEFT",B.LEFT="LEFT",B.TOP_LEFT="TOP_LEFT"},function(J,q){J.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(J,q){J.exports=function($,B,H,R,C){this.parent=$,this.x=B,this.y=H,this.costSoFar=R,this.simpleDistanceToTarget=C,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(J,q,$){J.exports=$(4)},function(J,q,$){var B,H,R;(function(){var C,S,N,f,y,J0,V0,l,m,Q0,x,_,p,U0,s;N=Math.floor,Q0=Math.min,S=function(A,b){return A<b?-1:A>b?1:0},m=function(A,b,g,h,t){var a;if(g==null&&(g=0),t==null&&(t=S),g<0)throw new Error("lo must be non-negative");for(h==null&&(h=A.length);g<h;)t(b,A[a=N((g+h)/2)])<0?h=a:g=a+1;return[].splice.apply(A,[g,g-g].concat(b)),b},J0=function(A,b,g){return g==null&&(g=S),A.push(b),U0(A,0,A.length-1,g)},y=function(A,b){var g,h;return b==null&&(b=S),g=A.pop(),A.length?(h=A[0],A[0]=g,s(A,0,b)):h=g,h},l=function(A,b,g){var h;return g==null&&(g=S),h=A[0],A[0]=b,s(A,0,g),h},V0=function(A,b,g){var h;return g==null&&(g=S),A.length&&g(A[0],b)<0&&(b=(h=[A[0],b])[0],A[0]=h[1],s(A,0,g)),b},f=function(A,b){var g,h,t,a,k,v;for(b==null&&(b=S),k=[],h=0,t=(a=function(){v=[];for(var E=0,o=N(A.length/2);0<=o?E<o:E>o;0<=o?E++:E--)v.push(E);return v}.apply(this).reverse()).length;h<t;h++)g=a[h],k.push(s(A,g,b));return k},p=function(A,b,g){var h;if(g==null&&(g=S),(h=A.indexOf(b))!==-1)return U0(A,0,h,g),s(A,h,g)},x=function(A,b,g){var h,t,a,k,v;if(g==null&&(g=S),!(t=A.slice(0,b)).length)return t;for(f(t,g),a=0,k=(v=A.slice(b)).length;a<k;a++)h=v[a],V0(t,h,g);return t.sort(g).reverse()},_=function(A,b,g){var h,t,a,k,v,E,o,e,K0;if(g==null&&(g=S),10*b<=A.length){if(!(a=A.slice(0,b).sort(g)).length)return a;for(t=a[a.length-1],k=0,E=(o=A.slice(b)).length;k<E;k++)g(h=o[k],t)<0&&(m(a,h,0,null,g),a.pop(),t=a[a.length-1]);return a}for(f(A,g),K0=[],v=0,e=Q0(b,A.length);0<=e?v<e:v>e;0<=e?++v:--v)K0.push(y(A,g));return K0},U0=function(A,b,g,h){var t,a,k;for(h==null&&(h=S),t=A[g];g>b&&h(t,a=A[k=g-1>>1])<0;)A[g]=a,g=k;return A[g]=t},s=function(A,b,g){var h,t,a,k,v;for(g==null&&(g=S),t=A.length,v=b,a=A[b],h=2*b+1;h<t;)(k=h+1)<t&&!(g(A[h],A[k])<0)&&(h=k),A[b]=A[h],h=2*(b=h)+1;return A[b]=a,U0(A,v,b,g)},C=function(){function A(b){this.cmp=b!=null?b:S,this.nodes=[]}return A.push=J0,A.pop=y,A.replace=l,A.pushpop=V0,A.heapify=f,A.updateItem=p,A.nlargest=x,A.nsmallest=_,A.prototype.push=function(b){return J0(this.nodes,b,this.cmp)},A.prototype.pop=function(){return y(this.nodes,this.cmp)},A.prototype.peek=function(){return this.nodes[0]},A.prototype.contains=function(b){return this.nodes.indexOf(b)!==-1},A.prototype.replace=function(b){return l(this.nodes,b,this.cmp)},A.prototype.pushpop=function(b){return V0(this.nodes,b,this.cmp)},A.prototype.heapify=function(){return f(this.nodes,this.cmp)},A.prototype.updateItem=function(b){return p(this.nodes,b,this.cmp)},A.prototype.clear=function(){return this.nodes=[]},A.prototype.empty=function(){return this.nodes.length===0},A.prototype.size=function(){return this.nodes.length},A.prototype.clone=function(){var b;return(b=new A).nodes=this.nodes.slice(0),b},A.prototype.toArray=function(){return this.nodes.slice(0)},A.prototype.insert=A.prototype.push,A.prototype.top=A.prototype.peek,A.prototype.front=A.prototype.peek,A.prototype.has=A.prototype.contains,A.prototype.copy=A.prototype.clone,A}(),H=[],(R=typeof(B=function(){return C})=="function"?B.apply(q,H):B)===void 0||(J.exports=R)}).call(this)}]);function D6(J,q,$,B,H){let R=new $J.js;R.setGrid(J),R.setAcceptableTiles([0]),R.enableSync();let C=null;return R.findPath(q,$,B,H,function(S){C=S}),R.calculate(),C}function W0(){return"player"}function W6(J,q,$,B){return Math.abs(J-$)+Math.abs(q-B)}function W1(J){return[...Array(J).keys()]}function F6(J){let q=XJ(J),$=J.entities[W0()];for(let B=0;B<q.length;B++){let H=q[B],R=J.entities[H],C=J._AIs[H],S=W6($.x,$.y,R.x,R.y);if($.options.faction!==R.options.faction&&S<=C.aggroRange){let N=J.maps[J.currentMapId].asMovementMap(),f=D6(N,R.x,R.y,$.x,$.y);if(f){if(f=f.slice(1),f.length>S)f=null}C.path=f}if(!!R.message&&R.message.includes("OBEY"));}for(let B=0;B<q.length;B++){let H=q[B],R=J.entities[H],C=J._AIs[H];if(C.path){let S=C.path[0],N=S.x-R.x,f=S.y-R.y;J=F0(J,R,N,f)}}return J}function XJ(J){let q=h0(J,J.currentMapId),$=[];for(let B=0;B<q.length;B++){let H=q[B];if(H.options.ai)$.push(H.id)}return $}function R6(J,q,$){let B=J.entities[q],H=8;switch($){case F.ais.aggrorange:H=8;break;case F.ais.aggrorangeshort:H=2;break;case F.ais.guardian:H=1;break;case F.ais.interactenrage:H=2;break;default:}return J._AIs[q]={entityId:q,type:$,aggroRange:H,startMap:B.mapId,startX:B.x,startY:B.y,path:null},J}function F1(J,q){return J._AIs[q]=void 0,delete J._AIs[q],J}function O6(J){let q=void 0;while(typeof(q=J._despawnQueue.shift())!=="undefined")J=B1(J,q),J=F1(J,q);return J}function j6(J){return J}class A0{mapId;x;y;entityOrItemName;options;constructor(J,q,$,B,H={}){this.mapId=J,this.x=q,this.y=$,this.entityOrItemName=B,this.options=H}generateId(){return this.mapId+","+this.entityOrItemName+","+this.x+","+this.y+"/g"}}function f0(J,q){if(BJ(q.entityOrItemName)){let $=q.options;if(Object.hasOwn($,"ai"))$.ai=F.ais[$.ai];if(Object.hasOwn($,"faction"))$.faction=F.factions[$.faction];let B=q.generateId();if(J=E0(J,B,F.entities[q.entityOrItemName],q.mapId,q.x,q.y,$),Object.hasOwn($,"equip")&&M6($.equip))J=s1(J,B,F.items[$.equip]);if(Object.hasOwn($,"ai"))J=R6(J,B,$.ai)}else if(M6(q.entityOrItemName))J=Q1(J,F.items[q.entityOrItemName],q.mapId,q.x,q.y);return J}function BJ(J){return Object.hasOwn(F.entities,J)}function M6(J){return Object.hasOwn(F.items,J)}function x0(J,q={}){return{type:J,options:q}}function C6(J){return J.type.name.startsWith("space")}function E6(J){for(let q in F.maps){let $=m0(F.maps[q]);J.maps[q]=$;for(let B of $._spawnCommands)J=f0(J,B);$._spawnCommands=[]}return J}function A6(J,q){let $=P1(J,q);for(let H=0;H<$.length;H++){let R=$[H];J=r1(J,R.id)}let B=h0(J,q);for(let H=0;H<B.length;H++){let R=B[H];J=B1(J,R.id),J=F1(J,R.id)}return J.maps[q]=void 0,delete J.maps[q],J}class _0{id;widthTiles;heightTiles;seed;_tiles;_cacheMovementMap;_spawnCommands;_tvCount;tvMessage;constructor(J,q,$,B=[]){this.id=J,this.widthTiles=q,this.heightTiles=$,this.seed=null,this._tiles=B,this._cacheMovementMap=null,this._spawnCommands=[],this._tvCount=0,this.tvMessage=null}getTile(J,q){if(J>=0&&J<this.widthTiles&&q>=0&&q<this.heightTiles){let $=q*this.widthTiles+J;return this._tiles[$]}return{}}setTile(J,q,$,B={}){this._cacheMovementMap=null;let H=q*this.widthTiles+J,R=this._tiles[H];return this._tiles[H]=x0($,B),R}setTvMessage(J){if(this._tvCount){let q=0;for(let $ of this._tiles)if($.type===F.tiles.tv&&q<J.length)$.options.sign=J[q],q++;if(J==="")J=null;this.tvMessage=J}}pasteOnto(J,q=0,$=0){for(let B=0;B<J.heightTiles;B++)for(let H=0;H<J.widthTiles;H++){let R=J.getTile(H,B);if(R.type!==F.tiles.voidtrue)this.setTile(H+q,B+$,R.type,R.options)}return this}circular(){let J=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let q=-J;q<=J;q++)for(let $=-J;$<=J;$++)if($*$+q*q>=J*J)this.setTile($+J-1,q+J-1,F.tiles.voidtrue);return this}sample(J,q){let $=Math.floor(this.widthTiles/J),B=Math.floor(this.heightTiles/q),H=[];for(let R=0;R<q;R++)for(let C=0;C<J;C++){let S={};for(let l=0;l<B;l++)for(let m=0;m<$;m++){let Q0=this.getTile(C*$+m,R*B+l);if(S[Q0.type.name])S[Q0.type.name]+=1;else S[Q0.type.name]=1}let N="",f=0;for(let[l,m]of Object.entries(S))if(m>f)N=l,f=m;let y="space"+N,J0=F.tiles[y]||F.tiles.spacevoid,V0={mapId:this.id,x:C*$,y:R*B};H.push(x0(J0,V0))}return new _0("__sampled_"+J+"_"+q+"_"+this.id,J,q,H)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let J=new Array(this.heightTiles);for(let q=0;q<this.heightTiles;q++){J[q]=new Array(this.widthTiles);for(let $=0;$<this.widthTiles;$++){let B=q*this.widthTiles+$,R=this._tiles[B].type;if(J[q][$]=0,o1(R))J[q][$]=1}}return this._cacheMovementMap=J,J}}function m0(J){let q=J.split(/\r?\n/),$=J[0],B="",H=0,R=0,C={},S=[],N=[],f=0,y="";for(let V0=0;V0<q.length;V0++){let l=q[V0];if(l.startsWith($)){if(l.startsWith($+"!id"))B=l.slice(5);else if(l.startsWith($+"!size")){let m=l.split(" ").slice(1);H=Number(m[0]),R=Number(m[1])}else if(l.startsWith($+"!spawn")){let m=l.split(" ").slice(1),Q0={};if(m.length>3){let x=m.slice(3);for(let _ of x){let p=_.split("=");Q0[p[0]]=p[1]}}S.push(new A0(B,Number(m[0]),Number(m[1]),m[2],Q0))}else if(l.startsWith($+"!")){let m=l[2],Q0=l.slice(4);C[m]=Q0}}else for(let m=0;m<l.length;m++){let Q0=l[m],x=C[Q0];if(n.debug&&!x)console.log("DEBUG Broken map: "+B);let _=x.split(" "),p={};if(x.startsWith("portal ")||x.startsWith("portalhidden ")||x.startsWith("portalsewers ")||x.startsWith("portallauncher ")||x.startsWith("portalstart"))x=_[0],p.mapId=_[1],p.x=Number(_[2]),p.y=Number(_[3]);if(x.startsWith("wall ")&&_.length>=2)x="wall",p.sign=_[1];if(x.startsWith("terminal ")){if(x="terminal",_.length>=2)p.screen=_[1]}if(x.startsWith("tv ")&&_.length>=2){if(x="tv",_.length===3)y=_[2];f++}N.push(x0(F.tiles[x],p))}}if(n.debug&&!(f===0||f===12))console.log("DEBUG Broken map: "+B+" (invalid TV size "+f+", allowed are 0 or 12 characters per map)");let J0=new _0(B,H,R,N);return J0._tvCount=f,J0.setTvMessage(y),J0._spawnCommands=S,J0}function o1(J){return J===F.tiles.rock||J===F.tiles.portalclosed||J===F.tiles.portalsewers||J===F.tiles.tv||J.name.startsWith("wall")}function a1(J){return J===F.tiles.water||J===F.tiles.watersewage}function v6(J,q,$){switch($){case F.commands.N:J=F0(J,q,0,-1);break;case F.commands.W:J=F0(J,q,-1,0);break;case F.commands.S:J=F0(J,q,0,1);break;case F.commands.E:J=F0(J,q,1,0);break;case F.commands.A:J=N6(J,q,F.commands.A);break;case F.commands.B:J=N6(J,q,F.commands.B);break;default:}return J}function F0(J,q,$,B,H=0){let R=J.maps[q.mapId],C=G1(J,R.id,q.x+$,q.y+B),S=J.tools[q.id];if(q.message=R.tvMessage,C)if(O0(C)){if(!O0(q)&&H<1)J=F0(J,C,$,B,H++),J=F0(J,q,$,B,H++)}else J=L6(J,q,C);else if(YJ(R,q,$,B))J=S6(J,R,q,$,B),J._energyQueue.push({entityId:q.id,energyDelta:-1*H});else if(wJ(R,q,S,$,B)){if(R.setTile(q.x+$,q.y+B,F.tiles.void).type===F.tiles.rock){let f=J.rng.getPercentage();if(f<=1)J=Q1(J,F.items.matter,R.id,q.x+$,q.y+B);else if(f<=34)J=Q1(J,F.items.junk,R.id,q.x+$,q.y+B)}J._energyQueue.push({entityId:q.id,energyDelta:S.type.energyCost})}else if(LJ(R,q,S,$,B))J=S6(J,R,q,$,B),J._energyQueue.push({entityId:q.id,energyDelta:S.type.energyCost});return J}function N6(J,q,$){let H=w1(J,q)[$.key],C=J.maps[q.mapId].getTile(q.x,q.y);switch(H){case F.actions.Enter:J=I6(J,q,C);break;case F.actions.Launch:J=GJ(J,q,C);case F.actions.Wait:break;default:}return J}function S6(J,q,$,B,H){$.x+=B,$.y+=H;let R=H1(J,$.mapId,$.x,$.y);if(R)J=H6(J,$,R);let C=q.getTile($.x,$.y);if(C.type.name.startsWith("portal"))J=I6(J,$,C);if(C.type===F.tiles.terminal)q.setTvMessage("OBEYWORKKILL");if(C.type.name.startsWith("move"))switch(C.type.name){case"movenorth":J=F0(J,$,0,-1);break;case"moveeast":J=F0(J,$,1,0);break;case"movesouth":J=F0(J,$,0,1);break;case"movewest":J=F0(J,$,-1,0);break;default:}return J}function I6(J,q,$){if(q.id.startsWith("player"))J.currentMapId=$.options.mapId;if(C6($))J.lastSpacePositionByEntity[q.id]={mapId:q.mapId,x:q.x,y:q.y};else J.lastSpacePositionByEntity[q.id]=void 0,delete J.lastSpacePositionByEntity[q.id];let B={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:$.type,newMapId:$.options.mapId,newX:$.options.x,newY:$.options.y};return q.mapId=$.options.mapId,q.x=$.options.x,q.y=$.options.y,J=l1(J,"entitymap.updated.event",B),J}function GJ(J,q,$){if(J.lastSpacePositionByEntity[q.id]){if(q.id.startsWith("player"))J.currentMapId=J.lastSpacePositionByEntity[q.id].mapId;let B={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:$.type,newMapId:J.lastSpacePositionByEntity[q.id].mapId,newX:J.lastSpacePositionByEntity[q.id].x,newY:J.lastSpacePositionByEntity[q.id].y};q.mapId=B.newMapId,q.x=B.newX,q.y=B.newY,J._energyQueue.push({entityId:q.id,energyDelta:F.actions.Launch.energyDelta}),J.lastSpacePositionByEntity[q.id]=void 0,delete J.lastSpacePositionByEntity[q.id],J=l1(J,"entitymap.updated.event",B)}return J}function b6(J){for(let q in J.entities){let $=J.entities[q],B=J.tools[q],R=J.maps[$.mapId].getTile($.x,$.y),C=R.type.energyDelta;if(R.type===F.tiles.chargepad&&B?.type.effects.includes(F.effects.Recharger.name))C*=2;else if(a1(R.type)&&B?.type.effects.includes(F.effects.WaterImmunity.name))C=0;else if(a1(R.type)&&B?.type.effects.includes(F.effects.WaterShield.name))C/=2;else if(R.type===F.tiles.drain){let S=Math.min($.gold,F.constants.DRAIN_GOLD_COST),N=Math.min($.matter,F.constants.DRAIN_MATTER_COST);$.gold-=S,$.matter-=N}if(C!==0)J._energyQueue.push({entityId:q,energyDelta:C})}return J}function f6(J,q){let $=J.entities[q.entityId];switch(q.oldTileType){case F.tiles.portalstartaerobot:J=Y1(J,$,F.entities.AeroBot),J=L0(J,`Booting up as an ${F.entities.AeroBot.name}...`);break;case F.tiles.portalstartworkbot:J=Y1(J,$,F.entities.WorkBot),J=L0(J,`Booting up as a ${F.entities.WorkBot.name}...`);break;default:}return J}function YJ(J,q,$,B){let H=q.x+$,R=q.y+B,C=J.getTile(H,R).type;return H>=0&&H<J.widthTiles&&R>=0&&R<J.heightTiles&&!o1(C)}function wJ(J,q,$,B,H){let R=q.x+B,C=q.y+H,S=J.getTile(R,C).type;if($)return $.type.effects.includes(F.effects.WallCrusher.name)&&S===F.tiles.wallweak||$.type.effects.includes(F.effects.RockCrusher.name)&&S===F.tiles.rock;return!1}function LJ(J,q,$,B,H){let R=q.x+B,C=q.y+H,S=J.getTile(R,C).type;if($)return $.type.effects.includes(F.effects.Screwing.name)&&S===F.tiles.portalsewers;return!1}var g6=y1(M1(),1);class k0{seed;_rotRng;constructor(J=1337){this.seed=J,this._rotRng=g6.RNG.clone(),this._rotRng.setSeed(J)}getPercentage(){return this._rotRng.getPercentage()}getItem(J){return this._rotRng.getItem(J)}}function T6(J,q){if(q.seed===1337)J=f0(J,new A0(q.id,130,127,"Valkyrie",{faction:"Spirits"})),J=f0(J,new A0(q.id,124,127,"Valkyrie",{faction:"Spirits"})),J=f0(J,new A0(q.id,127,130,"trident"));else{let $=new k0(q.seed);for(let B=0;B<q.heightTiles;B++)for(let H=0;H<q.widthTiles;H++){let R=q.getTile(H,B);if($.getPercentage()<=1&&(R.type===F.tiles.void||R.type===F.tiles.tree)){let C=$.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(C){case"Deviant":case"Pioneer":J=f0(J,new A0(q.id,H,B,C,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":J=f0(J,new A0(q.id,H,B,C));break}}}}return J}var O1=y1(M1(),1);var DJ=1337,h6=55;function x6(J,q=DJ){O1.RNG.setSeed(q);let $=new O1.Noise.Simplex,B=256,H=256,R=[];for(let N=0;N<H;N++)for(let f=0;f<B;f++){let y=$.get(f/h6,N/h6),J0;if(y<=-0.5)J0=F.tiles.water;else if(y<=0)J0=F.tiles.void;else if(y<0.5)J0=F.tiles.tree;else J0=F.tiles.rock;R.push(x0(J0))}let C="simplex="+q,S=new _0(C,B,H,R);return S.seed=q,J.maps[C]=S,J}var WJ=1337;function m6(J,q=WJ){let $=_6(1024,1024,F.tiles.void);$.id="solarsystem="+q,J.maps[$.id]=$;let B=new k0(q),H=new k0(q),R=B.getItem([2,3,4,5,6,7,8,9,10,11,12]),C=128,S=512-C,N=Math.floor(S/R);$=FJ($,B);let f=_6(128,128,F.tiles.voidtrue);RJ(f,63,63,62,F.tiles.star),MJ(f,63,63,F.tiles.star),$.pasteOnto(f,448,448);for(let l=C;l<512;l+=N){let m=B.getItem([-1,1])*B.getItem(W1(l)),Q0=B.getItem([-1,1])*Math.floor(Math.sqrt(l*l-m*m));m+=512,Q0+=512;let x=B.getItem([16,24,32]),_=Math.floor(x/2)-1;J=x6(J,q);let p=J.maps["simplex="+q],U0=F.map_snippets.launcher;U0=U0.replace("!!O portallauncher space 0 0",`!!O portallauncher ${$.id} ${m} ${Q0}`);let s=m0(U0),A=H.getItem(W1(p.widthTiles-s.widthTiles)),b=H.getItem(W1(p.heightTiles-s.heightTiles));p.pasteOnto(s,A,b),J=T6(J,p);let g=p.sample(x,x).circular();$.pasteOnto(g,m-(_+1),Q0-(_+1)),q++}let y=F.map_snippets.space_bot_station;y=y.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let J0=m0(y);$.pasteOnto(J0,583,398);let V0=m0(F.map_snippets.square_falcon);return $.pasteOnto(V0,590,373),J}function _6(J,q,$){let B=[];for(let C=0;C<J*q;C++)B.push(x0($));return new _0("__temp",J,q,B)}function FJ(J,q){for(let $=0;$<J.heightTiles;$++)for(let B=0;B<J.widthTiles;B++)if(q.getPercentage()<=1)J.setTile(B,$,q.getItem([F.tiles.spacevoidstarwhite,F.tiles.spacevoidstaryellow]));return J}function RJ(J,q,$,B,H){let R=1-B,C=1,S=-2*B,N=0,f=B;J.setTile(q,$+B,H),J.setTile(q,$-B,H),J.setTile(q+B,$,H),J.setTile(q-B,$,H);while(N<f){if(R>=0)f-=1,S+=2,R+=S;N+=1,C+=2,R+=C,J.setTile(q+N,$+f,H),J.setTile(q-N,$+f,H),J.setTile(q+N,$-f,H),J.setTile(q-N,$-f,H),J.setTile(q+f,$+N,H),J.setTile(q-f,$+N,H),J.setTile(q+f,$-N,H),J.setTile(q-f,$-N,H)}return J}function MJ(J,q,$,B){let{widthTiles:H,heightTiles:R}=J,C=[];C.push({x:q,y:$});let S=void 0;while(typeof(S=C.shift())!=="undefined"){let N=S,f=S;if(S.x+1<H)f={x:S.x+1,y:S.y};while(J.getTile(N.x,N.y).type!==B){if(J.setTile(N.x,N.y,B),N.y+1<R){if(J.getTile(N.x,N.y+1).type!==B)C.push({x:N.x,y:N.y+1})}if(N.y-1>=0){if(J.getTile(N.x,N.y-1).type!==B)C.push({x:N.x,y:N.y-1})}if(N.x-1>=0)N.x-=1;else break}while(J.getTile(f.x,f.y).type!==B){if(J.setTile(f.x,f.y,B),f.y+1<R){if(J.getTile(f.x,f.y+1).type!==B)C.push({x:f.x,y:f.y+1})}if(f.y-1>=0){if(J.getTile(f.x,f.y-1).type!==B)C.push({x:f.x,y:f.y-1})}if(f.x+1<H)f.x+=1;else break}}return J}function c6(J,q){if(q?.oldMapId?.startsWith("shop_instance")){J=A6(J,q.oldMapId);let $=J.maps[q.newMapId],B=$.getTile(q.newX,q.newY);$.setTile(q.newX,q.newY,B.type,{mapId:"shop_instance",x:q.oldX,y:q.oldY})}if(q?.newMapId?.startsWith("shop_instance")){let $=m0(F.map_snippets.shop_instance);$.id+="_"+q.oldMapId+"_"+q.entityId,$.setTile(q.newX,q.newY,F.tiles.portal,{mapId:q.oldMapId,x:q.oldX,y:q.oldY}),J.maps[q.oldMapId].setTile(q.oldX,q.oldY,q.oldTileType,{mapId:$.id,x:q.newX,y:q.newY});let H=J.entities[q.entityId];if(H.id.startsWith("player"))J.currentMapId=$.id;if(H.mapId=$.id,H.x=q.newX,H.Y=q.newY,J.maps[$.id]=$,J=V1(J,F.items.hammer,$.id,4,4,0,-200),J=V1(J,F.items.pickaxe,$.id,4,6,0,-200),J=V1(J,F.items.battery,$.id,4,8,0,-200),J=V1(J,F.items.gold,$.id,4,10,1,-1e4),J=E0(J,$.id+"_shopkeeper",F.entities.AeroBot,$.id,6,2,{faction:H.options.faction,dialog:"shop_instance_shopkeeper",name:"Shopkeeper"}),q?.oldMapId.startsWith("bot_stadium"))J=E0(J,$.id+"_shopper",F.entities.WorkBot,$.id,1,12,{faction:H.options.faction,dialog:"shop_instance_workbot_shopper"});else if(q?.oldMapId.startsWith("bot_bar"))J=E0(J,$.id+"_shopper",F.entities.AeroBot,$.id,4,11,{faction:H.options.faction,dialog:"shop_instance_aerobot_shopper"})}return J}function y6(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!0,actionLog:[],chatLog:[],currentMapId:"",entities:{},items:{},lastSpacePositionByEntity:{},maps:{},rng:new k0,tools:{},tvs:{}}}function d6(J){let q=void 0;while(typeof(q=J._combatQueue.shift())!=="undefined"){let $=-1,B=-5,H=D1(J,q.entityId);if(H)$=H.type.energyCost,B=-1*Math.abs(H.type.damage);J._energyQueue.push({entityId:q.entityId,energyDelta:$}),J._energyQueue.push({entityId:q.otherEntityId,energyDelta:B});let R=J.entities[q.entityId],C=J.entities[q.otherEntityId],S=R?.options?.name?R.options.name:R.type.name,N=C?.options?.name?C.options.name:C.type.name;J=L0(J,`${S} did ${Math.abs(B)} damage to ${N} at cost of ${Math.abs($)} energy.`)}return J}function p6(J){let q=void 0,$=new Set;while(typeof(q=J._energyQueue.shift())!=="undefined"){let B=J.entities[q.entityId];if(B.energy=Math.min(B.energy+q.energyDelta,B.energyMax),B.energy<=0)$.add(B.id)}for(let B of $){let H=J.entities[B];J._despawnQueue.push(B);let R=H?.options?.name?H.options.name:H.type.name;if(!O0(H)){let C=Math.max(1,Math.floor(H.energyMax/3));J=P6(J,C,H.mapId,H.x,H.y),J=L0(J,`${R} destroyed leaving behind Junk.`)}}return J}function l6(J){return J=F6(J),J=d6(J),J=b6(J),J=p6(J),J=O6(J),J=j6(J),J}class j1{state;constructor(){}init(){return this.state=y6(),this.state=n1(this.state,"entitymap.updated.event",f6),this.state=n1(this.state,"entitymap.updated.event",c6),this.state=m6(this.state),this.state=E6(this.state),this.state.currentMapId="botmos_hull_selection",this.state=E0(this.state,W0(),F.entities.Spirit,this.state.currentMapId,9,5,{faction:F.factions.Spirits,name:"Player"}),this.state}update(J,q=!1){let $=this.state.entities[W0()];if($){if(J){switch(J){case F.commands.M:this.state._menuOpen=!this.state._menuOpen;break;case F.commands["#"]:this.state=L0(this.state,Y6(this.state,W0()));break;default:this.state=v6(this.state,$,J),this.state=l6(this.state)}this.state.actionLog.push(J.key)}}else this.state=L0(this.state,`Game over! ${this.state.actionLog.length} turns.`),console.log(`Game over! ${this.state.actionLog.length} turns: ${this.state.actionLog.join("")}`),this.state.currentMapId="botmos_hull_selection",this.state=E0(this.state,W0(),F.entities.Spirit,this.state.currentMapId,9,5,{faction:F.factions.Spirits,name:"Player"});return this.state}play(J){for(let q=0;q<J.length;q++){let $=J[q];this.update(F.commands[$],!0)}return this.state}}var c={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1,slash:!1},t1=[],C1=void 0,r6=void 0,n6=0;document.body.addEventListener("keydown",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":c.up=!0,z0(J);break;case"a":case"ArrowLeft":c.left=!0,z0(J);break;case"s":case"ArrowDown":c.down=!0,z0(J);break;case"d":case"ArrowRight":c.right=!0,z0(J);break;case"x":c.a=!0,z0(J);break;case" ":case"y":case"z":c.b=!0,z0(J);break;case"m":c.menu=!0,z0(J);break;case"#":case"/":c.slash=!0,z0(J);break;default:}N0(s6())});function N0(J){let q=Date.now();if(C1!==void 0&&q-n6>=F.constants.MIN_TURN_SPEED_IN_MS)n6=q,C1(J)}document.body.addEventListener("keyup",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":c.up=!1,z0(J);break;case"a":case"ArrowLeft":c.left=!1,z0(J);break;case"s":case"ArrowDown":c.down=!1,z0(J);break;case"d":case"ArrowRight":c.right=!1,z0(J);break;case"x":c.a=!1,z0(J);break;case" ":case"y":case"z":c.b=!1,z0(J);break;case"m":c.menu=!1,z0(J);break;case"#":case"/":c.slash=!1,z0(J);default:}});document.body.addEventListener("click",function(J){let{clientX:q,clientY:$}=J,H=document.body.clientWidth/3,C=document.body.clientHeight/3;if(q>=H&&q<2*H&&$<C)N0(F.commands.N),z0(J);else if(q<H&&$<C)N0(F.commands.B),z0(J);else if(q>=2*H&&$<C)N0(F.commands.A),z0(J);else if(q<H&&$>=C&&$<2*C)N0(F.commands.W),z0(J);else if(q>=2*H&&$>=C&&$<2*C)N0(F.commands.E),z0(J);else if(q>=H&&q<2*H&&$>=2*C)N0(F.commands.S),z0(J);else if(q>=H&&q<2*H&&$>=C&&$<2*C)N0(F.commands.M),z0(J)});function z0(J){J.preventDefault(),J.stopPropagation()}var K1=null;function OJ(){let J=null;if(c.right)J=F.commands.E;if(c.left)J=F.commands.W;if(c.down)J=F.commands.S;if(c.up)J=F.commands.N;if(c.up&&c.right){if(J===F.commands.N&&K1===F.commands.N)J=F.commands.E}if(c.up&&c.left){if(J===F.commands.N&&K1===F.commands.N)J=F.commands.W}if(c.down&&c.right){if(J===F.commands.S&&K1===F.commands.S)J=F.commands.E}if(c.down&&c.left){if(J===F.commands.S&&K1===F.commands.S)J=F.commands.W}if(c.a)J=F.commands.A;if(c.b)J=F.commands.B;if(c.menu)J=F.commands.M;if(c.slash)J=F.commands["#"];if(K1=J,J!==null)t1.push(J)}function s6(){OJ();let J=t1.shift()||null;return t1=[],J}document.body.addEventListener("mousemove",function(J){if(J.defaultPrevented)return;if(C1!==void 0)r6(J),z0(J)});var o6=void 0;window.addEventListener("gamepadconnected",(J)=>{o6=setInterval(function(){let q=navigator.getGamepads()[J.gamepad?.index];if(c.right=q.buttons[15].pressed,c.left=q.buttons[14].pressed,c.down=q.buttons[13].pressed,c.up=q.buttons[12].pressed,c.a=q.buttons[0].pressed||q.buttons[2].pressed,c.b=q.buttons[1].pressed||q.buttons[3].pressed,c.menu=q.buttons[9].pressed,c.right||c.left||c.down||c.up||c.a||c.b||c.menu)N0(s6())},100)});window.addEventListener("gamepaddisconnected",(J)=>{clearInterval(o6)});function a6(J){C1=J}function i6(J){r6=J}var KZ=y1(M1(),1);var E1={_1:[0,0],_2:[16,0],_3:[32,0],_4:[48,0],_5:[64,0],_6:[80,0],_7:[96,0],_8:[112,0],_9:[128,0],AeroBot_a:[144,0],AeroBot:[160,0],battery:[176,0],broom:[192,0],chargepad:[208,0],cheat:[224,0],chest:[240,0],Cleaner_a:[256,0],Cleaner:[272,0],Deviant:[288,0],drain:[304,0],energy:[320,0],gold:[336,0],goo:[352,0],Graffiticyan:[368,0],Graffitimagenta:[384,0],Graffitiyellow:[400,0],hammer:[416,0],junk:[432,0],matter:[448,0],movableboulder:[464,0],movablebox:[480,0],moveeast:[496,0],movenorth:[512,0],movesouth:[528,0],movewest:[544,0],pickaxe:[560,0],Pioneer_a:[576,0],Pioneer:[592,0],portalclosed:[608,0],portalhidden:[624,0],portallauncher:[640,0],portal:[656,0],portalsewers:[672,0],portalstartaerobot:[688,0],"_portalstart?":[704,0],portalstartworkbot:[720,0],RoboRat_a:[736,0],RoboRat:[752,0],rock:[768,0],shocker:[784,0],spacerock:[800,0],spacetree:[816,0],spacevoid:[832,0],spacevoidstarwhite:[848,0],spacevoidstaryellow:[864,0],spacewater_a:[880,0],spacewater:[896,0],Spirit_a:[912,0],Spirit:[928,0],sun:[944,0],terminal:[960,0],tree:[976,0],trident:[992,0],tv:[1008,0],Valkyrie_a:[1024,0],Valkyrie:[1040,0],voidhidden:[1056,0],void:[1072,0],voidtrue:[1088,0],wall0:[1104,0],wall1:[1120,0],wall2:[1136,0],walla_:[1152,0],wallA:[1168,0],wallb_:[1184,0],wallB:[1200,0],wallc_:[1216,0],wallC:[1232,0],walld_:[1248,0],wallD:[1264,0],walle_:[1280,0],wallE:[1296,0],wallf_:[1312,0],wallF:[1328,0],wallg_:[1344,0],wallG:[1360,0],wallh_:[1376,0],wallH:[1392,0],walli_:[1408,0],wallI:[1424,0],wallj_:[1440,0],wallJ:[1456,0],wallk_:[1472,0],wallK:[1488,0],walll_:[1504,0],wallL:[1520,0],wallm_:[1536,0],wallM:[1552,0],walln_:[1568,0],wallN:[1584,0],wallo_:[1600,0],wallO:[1616,0],"wall(":[1632,0],"wall)":[1648,0],"wall+":[1664,0],"wall,":[1680,0],"wall.":[1696,0],wall:[1712,0],"wall:":[1728,0],wall_:[1744,0],"wall|":[1760,0],wallp_:[1776,0],wallP:[1792,0],wallq_:[1808,0],wallQ:[1824,0],wallr_:[1840,0],wallR:[1856,0],walls_:[1872,0],wallS:[1888,0],wallstatueaerobot:[1904,0],wallstatuecleaner:[1920,0],wallstatuepioneer:[1936,0],wallstatueworkbot:[1952,0],wallt_:[1968,0],wallT:[1984,0],wallu_:[2000,0],wallU:[2016,0],wallv_:[2032,0],wallV:[2048,0],wallweak:[2064,0],wallw_:[2080,0],wallW:[2096,0],wallx_:[2112,0],wallX:[2128,0],wally_:[2144,0],wallY:[2160,0],wallz_:[2176,0],wallZ:[2192,0],water_a:[2208,0],water:[2224,0],watersewage_a:[2240,0],watersewage:[2256,0],WorkBot_a:[2272,0],WorkBot:[2288,0],wrench:[2304,0]};var o0=document.createElement("div");o0.id="ui";document.body.appendChild(o0);var A1=JZ(),r0=JZ(),t6=jJ(),S0=document.createElement("div");S0.replaceChildren(A1,r0,t6);o0.replaceChildren(S0);var S1=document.createElement("div");S1.style.display="flex";S1.style.justifyContent="space-between";var N1=document.createElement("div");N1.id="uichatlog";var e6=document.createElement("div");e6.id="uitooltip";S1.replaceChildren(N1,e6);o0.appendChild(S1);var e1=document.createElement("div");e1.id="uimousetooltip";document.body.appendChild(e1);async function ZZ(J,q=0){if(!n.showUI)return;let $=W0(),B=J.entities[$],H="";if(B){s0(A1,B.type.name),A1.dataset.tooltip="Player hull: "+B.type.name;let R="",C=D1(J,$);if(C)s0(r0,C.type.name.toLowerCase()),r0.dataset.tooltip="Player tool: "+C.type.name;else s0(r0,null),r0.dataset.tooltip=void 0;let S="";if(B.matter>0)S=`${B.matter}M `;let N="";if(B.gold>0)N=`${B.gold}G `;let f=w1(J,B);if(H=" "+B.energy+"/"+B.energyMax+" "+R+N+S+"Y:"+f.B.name+" X:"+f.A.name,o0.style.flexDirection="column-reverse",B.y-q>=G0.height-3)o0.style.flexDirection="column";if(S0.style.background="#000",B.energy/B.energyMax<=0.2)S0.style.color="#000",S0.style.background="#f00";else S0.style.color="#74ee15",S0.style.background="#000"}else s0(A1,null),s0(r0,null),H="Game over!",S0.style.color="#000",S0.style.background="#f00";if(t6.innerText=H,J._menuOpen&&!!J.chatLog.length){let R=J.chatLog.slice(-n.chatLogMaxDisplaySize);N1.innerText=R.join(`
`)}else N1.innerText=""}function JZ(){let J=document.createElement("span");return s0(J,null),J.style.height=`${n.fontSize}px`,J.style.display="inline-block",J}function jJ(){let J=document.createElement("span");return J.style.display="inline-block",J.style.marginLeft=`${n.fontSize/2}px`,J}function s0(J,q){if(q){let $=E1[q][0];J.style.background=`url('build/tiles.png') -${$}px 0`,J.style.width=`${n.fontSize}px`}else J.style.width="0px"}function QZ(){return e1}var y0="_a",qZ=document.createElement("img");qZ.src="build/tiles.png";G0.tileSet=qZ;G0.tileMap=AJ();var z1=new KZ.Display(G0);document.body.appendChild(z1.getContainer());var zZ=0,UZ=0,q1=void 0;function CJ(J,q,$=!1){q1=J;let B=J.currentMapId,H=J.maps[B],R=$?y0:"",C=0,S=0;if(H.widthTiles<q.width)C=Math.floor((q.width-H.widthTiles)/2),q.x=0;if(H.heightTiles<q.height)S=Math.floor((q.height-H.heightTiles)/2),q.y=0;zZ=q.x-C,UZ=q.y-S;let N={},f={},y={};for(let x=0;x<q.height;x++)for(let _=0;_<q.width;_++){let p=H.getTile(q.x+_,q.y+x),U0="";if(!!p&&!!p.type)if(p.options.sign)U0="#"+p.options.sign;else U0=p.type.icon;if(U0){let s=[C+_,S+x].toString();N[s]=[U0+R],f[s]=["transparent"],y[s]=["transparent"]}}let J0=P1(J,B);for(let x=0;x<J0.length;x++){let _=J0[x],p=C+_.x-q.x,U0=S+_.y-q.y,s=[p,U0].toString();if(N[s])N[s].push(_.type.icon+R),f[s].push("transparent"),y[s].push("transparent");else N[s]=[_.type.icon+R],f[s]=["transparent"],y[s]=["transparent"]}let V0=W0(),l=J.entities[V0],m=((l||{}).options||{}).faction||void 0,Q0=h0(J,B);for(let x=0;x<Q0.length;x++){let _=Q0[x],p=C+_.x-q.x,U0=S+_.y-q.y,s=Math.ceil(_.energy/_.energyMax*10),A="transparent";if(n.highlightEnemy&&!!m&&!O0(_)&&!p1(_))A=m===_.options.faction?"rgba(116, 238, 21, 0.5)":"rgba(240, 0, 255, 0.5)";if(_===l)A="transparent";let b=[p,U0].toString();if(N[b]){if(N[b].push(_.type.icon+R),f[b].push(A),y[b].push("transparent"),s<10)N[b].push("_"+s),f[b].push("transparent"),y[b].push("transparent")}else if(N[b]=[_.type.icon+R],f[b]=[A],y[b]=["transparent"],s<10)N[b].push("_"+s),f[b].push("transparent"),y[b].push("transparent")}z1.clear();for(let[x,_]of Object.entries(N)){let p=x.split(",");z1.draw(Number(p[0]),Number(p[1]),_,f[x],y[x])}}var VZ={x:0,y:0},v1=0;async function d0(J){let q=J.entities[W0()],$=q?q:VZ,B=EJ($);if(CJ(J,B,v1%2==0),ZZ(J,B.y),VZ=$,v1++,v1>=128)v1=0}async function $Z(J){}function XZ(J){return[J[0]+zZ,J[1]+UZ]}function BZ(J){let q=q1.currentMapId,$=q1.maps[q],B=J[0],H=J[1],R=$.getTile(B,H),C=G1(q1,q,B,H),S=H1(q1,q,B,H);return{mapId:q,x:J[0],y:J[1],tile:R,entity:C,item:S}}function EJ(J){return{x:Math.min(Math.max(0,J.x-Math.floor(G0.width/2)),d1.WIDTH-G0.width),y:Math.min(Math.max(0,J.y-Math.floor(G0.height/2)),d1.HEIGHT-G0.height),width:G0.width,height:G0.height}}function AJ(){let J={};for(let[q,$]of Object.entries(E1)){let B=q.endsWith(y0),H="";if(B)q=q.substring(0,q.length-y0.length),H=y0;if(q.startsWith("wall")&&(q.length===5||q.length===6))J["#"+q.substring(4,5)+H]=$;else if(Object.hasOwn(F.tiles,q))J[F.tiles[q].icon+H]=$;else if(Object.hasOwn(F.entities,q))J[F.entities[q].icon+H]=$;else if(Object.hasOwn(F.items,q))J[F.items[q].icon+H]=$;else J[q+H]=$}for(let[q,$]of Object.entries(J))if(!q.endsWith(y0)&&!Object.hasOwn(J,q+y0))J[q+y0]=$;return J}async function GZ(J){if(!n.showUI||!n.showTooltip)return;let q="";if(J.target){if(J.target?.dataset?.tooltip)q+=J.target.dataset.tooltip}let $=z1.eventToPosition(J);if($[0]!==-1){let C=XZ($),S=BZ(C);if(S.entity){let N=S.entity?.options?.name?S.entity.options.name:S.entity.type.name;q+=N}if(S.item){if(q!=="")q+=`
`;q+=S.item.type.name}if(!!S.tile?.type&&S.tile?.type.tooltip!==""){if(q!=="")q+=`
`;q+=S.tile.type.tooltip}}let B=typeof window!=="undefined"?window.innerHeight:0,H=Math.floor(B/2),R=QZ();if(q!==""){if(R.innerText=q,R.style.left=J.x+20+"px",R.style.top=J.y+20+"px",J.y>H)R.style.top=J.y-20+"px";R.style.display="inline-block"}else R.style.display="none"}var R0=new j1;window.onload=function(){d0(R0.init())};window.onresize=function(){let J=typeof window!=="undefined"?window.innerWidth:0,q=typeof window!=="undefined"?window.innerHeight:0;n.cameraWidth=Math.floor(J/n.fontSize),n.cameraHeight=Math.floor(q/n.fontSize),G0.width=Math.floor(n.cameraWidth*(1/n.zoom)),G0.height=Math.floor(n.cameraHeight*(1/n.zoom)),$Z(G0),d0(R0.state)};a6(function(J){d0(R0.update(J))});i6(GZ);if(!window.BMActionLog)window.BMActionLog=function(){return R0.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(J){d0(R0.play(J))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){n.debug=!n.debug,d0(R0.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){n.showUI=!n.showUI,d0(R0.state)};if(n.debug){if(!window.BMDebugState)window.BMDebugState=function(){return R0.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let J=Object.keys(R0.state.maps).length,q=Object.keys(R0.state.entities).length,$=Object.keys(R0.state.items).length,B=Object.keys(R0.state.tools).length;return`Maps: ${J}, Entities: ${q}, Items: ${$}, Tools: ${B}`}}document.body.focus();
