var xZ=Object.create;var{getPrototypeOf:_Z,defineProperty:V6,getOwnPropertyNames:mZ}=Object;var yZ=Object.prototype.hasOwnProperty;var u1=(J,z,X)=>{X=J!=null?xZ(_Z(J)):{};let B=z||!J||!J.__esModule?V6(X,"default",{value:J,enumerable:!0}):X;for(let P of mZ(J))if(!yZ.call(B,P))V6(B,P,{get:()=>J[P],enumerable:!0});return B};var pZ=(J,z)=>()=>(z||J((z={exports:{}}).exports,z),z.exports);var P1=pZ((H1,S6)=>{function x0(J){if(J===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return J}function ZJ(J,z){var X=typeof Symbol!=="undefined"&&J[Symbol.iterator]||J["@@iterator"];if(X)return(X=X.call(J)).next.bind(X);if(Array.isArray(J)||(X=JJ(J))||z&&J&&typeof J.length==="number"){if(X)J=X;var B=0;return function(){if(B>=J.length)return{done:!0};return{done:!1,value:J[B++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JJ(J,z){if(!J)return;if(typeof J==="string")return N6(J,z);var X=Object.prototype.toString.call(J).slice(8,-1);if(X==="Object"&&J.constructor)X=J.constructor.name;if(X==="Map"||X==="Set")return Array.from(J);if(X==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(X))return N6(J,z)}function N6(J,z){if(z==null||z>J.length)z=J.length;for(var X=0,B=new Array(z);X<z;X++)B[X]=J[X];return B}function K0(J,z){J.prototype=Object.create(z.prototype),J.prototype.constructor=J,y1(J,z)}function y1(J,z){return y1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function X(B,P){return B.__proto__=P,B},y1(J,z)}(function(J,z){typeof H1==="object"&&typeof S6!=="undefined"?z(H1):typeof define==="function"&&define.amd?define(["exports"],z):(J=typeof globalThis!=="undefined"?globalThis:J||self,z(J.ROT={}))})(H1,function(J){var z=0.00000000023283064365386963,X=function(){function Y(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var G=Y.prototype;return G.getSeed=function U(){return this._seed},G.setSeed=function U(K){return K=K<1?1/K:K,this._seed=K,this._s0=(K>>>0)*z,K=K*69069+1>>>0,this._s1=K*z,K=K*69069+1>>>0,this._s2=K*z,this._c=1,this},G.getUniform=function U(){var K=2091639*this._s0+this._c*z;return this._s0=this._s1,this._s1=this._s2,this._c=K|0,this._s2=K-this._c,this._s2},G.getUniformInt=function U(K,Z){var Q=Math.max(K,Z),V=Math.min(K,Z);return Math.floor(this.getUniform()*(Q-V+1))+V},G.getNormal=function U(K,Z){if(K===void 0)K=0;if(Z===void 0)Z=1;var Q,V,q;do Q=2*this.getUniform()-1,V=2*this.getUniform()-1,q=Q*Q+V*V;while(q>1||q==0);var $=Q*Math.sqrt(-2*Math.log(q)/q);return K+$*Z},G.getPercentage=function U(){return 1+Math.floor(this.getUniform()*100)},G.getItem=function U(K){if(!K.length)return null;return K[Math.floor(this.getUniform()*K.length)]},G.shuffle=function U(K){var Z=[],Q=K.slice();while(Q.length){var V=Q.indexOf(this.getItem(Q));Z.push(Q.splice(V,1)[0])}return Z},G.getWeightedValue=function U(K){var Z=0;for(var Q in K)Z+=K[Q];var V=this.getUniform()*Z,q,$=0;for(q in K)if($+=K[q],V<$)return q;return q},G.getState=function U(){return[this._s0,this._s1,this._s2,this._c]},G.setState=function U(K){return this._s0=K[0],this._s1=K[1],this._s2=K[2],this._c=K[3],this},G.clone=function U(){var K=new Y;return K.setState(this.getState())},Y}(),B=new X().setSeed(Date.now()),P=function(){function Y(){}var G=Y.prototype;return G.getContainer=function U(){return null},G.setOptions=function U(K){this._options=K},Y}(),M=function(Y){K0(G,Y);function G(){var K=Y.call(this)||this;return K._ctx=document.createElement("canvas").getContext("2d"),K}var U=G.prototype;return U.schedule=function K(Z){requestAnimationFrame(Z)},U.getContainer=function K(){return this._ctx.canvas},U.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z);var Q=Z.fontStyle?Z.fontStyle+" ":"",V=Q+" "+Z.fontSize+"px "+Z.fontFamily;this._ctx.font=V,this._updateSize(),this._ctx.font=V,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},U.clear=function K(){var Z=this._ctx.globalCompositeOperation;this._ctx.globalCompositeOperation="copy",this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.globalCompositeOperation=Z},U.eventToPosition=function K(Z,Q){var V=this._ctx.canvas,q=V.getBoundingClientRect();if(Z-=q.left,Q-=q.top,Z*=V.width/q.width,Q*=V.height/q.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},G}(P);function C(Y,G){return(Y%G+G)%G}function I(Y,G,U){if(G===void 0)G=0;if(U===void 0)U=1;if(Y<G)return G;if(Y>U)return U;return Y}function N(Y){return Y.charAt(0).toUpperCase()+Y.substring(1)}function b(Y){for(var G=arguments.length,U=new Array(G>1?G-1:0),K=1;K<G;K++)U[K-1]=arguments[K];var Z=b.map,Q=function V(q,$,L,w){if(Y.charAt(w-1)=="%")return q.substring(1);if(!U.length)return q;var H=U[0],F=$||L,D=F.split(","),R=D.shift()||"",O=Z[R.toLowerCase()];if(!O)return q;H=U.shift();var j=H[O].apply(H,D),v=R.charAt(0);if(v!=v.toLowerCase())j=N(j);return j};return Y.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,Q)}b.map={s:"toString"};var n=Object.freeze({__proto__:null,mod:C,clamp:I,capitalize:N,format:b}),Q0=function(Y){K0(G,Y);function G(){var K=Y.call(this)||this;return K._spacingX=0,K._spacingY=0,K._hexSize=0,K}var U=G.prototype;return U.draw=function K(Z,Q){var V=Z[0],q=Z[1],$=Z[2],L=Z[3],w=Z[4],H=[(V+1)*this._spacingX,q*this._spacingY+this._hexSize];if(this._options.transpose)H.reverse();if(Q)this._ctx.fillStyle=w,this._fill(H[0],H[1]);if(!$)return;this._ctx.fillStyle=L;var F=[].concat($);for(var D=0;D<F.length;D++)this._ctx.fillText(F[D],H[0],Math.ceil(H[1]))},U.computeSize=function K(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=Math.floor(Z/this._spacingX)-1,q=Math.floor((Q-2*this._hexSize)/this._spacingY+1);return[V,q]},U.computeFontSize=function K(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=2*Z/((this._options.width+1)*Math.sqrt(3))-1,q=Q/(2+1.5*(this._options.height-1)),$=Math.min(V,q),L=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var w=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=L;var H=w/100;$=Math.floor($)+1;var F=2*$/(this._options.spacing*(1+H/Math.sqrt(3)));return Math.ceil(F)-1},U._normalizedEventToPosition=function K(Z,Q){var V;if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q,V=this._ctx.canvas.width;else V=this._ctx.canvas.height;var q=V/this._options.height;if(Q=Math.floor(Q/q),C(Q,2))Z-=this._spacingX,Z=1+2*Math.floor(Z/(2*this._spacingX));else Z=2*Math.floor(Z/(2*this._spacingX));return[Z,Q]},U._fill=function K(Z,Q){var V=this._hexSize,q=this._options.border,$=this._ctx;if($.beginPath(),this._options.transpose)$.moveTo(Z-V+q,Q),$.lineTo(Z-V/2+q,Q+this._spacingX-q),$.lineTo(Z+V/2-q,Q+this._spacingX-q),$.lineTo(Z+V-q,Q),$.lineTo(Z+V/2-q,Q-this._spacingX+q),$.lineTo(Z-V/2+q,Q-this._spacingX+q),$.lineTo(Z-V+q,Q);else $.moveTo(Z,Q-V+q),$.lineTo(Z+this._spacingX-q,Q-V/2+q),$.lineTo(Z+this._spacingX-q,Q+V/2-q),$.lineTo(Z,Q+V-q),$.lineTo(Z-this._spacingX+q,Q+V/2-q),$.lineTo(Z-this._spacingX+q,Q-V/2+q),$.lineTo(Z,Q-V+q);$.fill()},U._updateSize=function K(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(Z.spacing*(Z.fontSize+Q/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var V,q;if(Z.transpose)V="height",q="width";else V="width",q="height";this._ctx.canvas[V]=Math.ceil((Z.width+1)*this._spacingX),this._ctx.canvas[q]=Math.ceil((Z.height-1)*this._spacingY+2*this._hexSize)},G}(M),a=function(Y){K0(G,Y);function G(){var K=Y.call(this)||this;return K._spacingX=0,K._spacingY=0,K._canvasCache={},K}var U=G.prototype;return U.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z),this._canvasCache={}},U.draw=function K(Z,Q){if(G.cache)this._drawWithCache(Z);else this._drawNoCache(Z,Q)},U._drawWithCache=function K(Z){var Q=Z[0],V=Z[1],q=Z[2],$=Z[3],L=Z[4],w=""+q+$+L,H;if(w in this._canvasCache)H=this._canvasCache[w];else{var F=this._options.border;H=document.createElement("canvas");var D=H.getContext("2d");if(H.width=this._spacingX,H.height=this._spacingY,D.fillStyle=L,D.fillRect(F,F,H.width-F,H.height-F),q){D.fillStyle=$,D.font=this._ctx.font,D.textAlign="center",D.textBaseline="middle";var R=[].concat(q);for(var O=0;O<R.length;O++)D.fillText(R[O],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[w]=H}this._ctx.drawImage(H,Q*this._spacingX,V*this._spacingY)},U._drawNoCache=function K(Z,Q){var V=Z[0],q=Z[1],$=Z[2],L=Z[3],w=Z[4];if(Q){var H=this._options.border;this._ctx.fillStyle=w,this._ctx.fillRect(V*this._spacingX+H,q*this._spacingY+H,this._spacingX-H,this._spacingY-H)}if(!$)return;this._ctx.fillStyle=L;var F=[].concat($);for(var D=0;D<F.length;D++)this._ctx.fillText(F[D],(V+0.5)*this._spacingX,Math.ceil((q+0.5)*this._spacingY))},U.computeSize=function K(Z,Q){var V=Math.floor(Z/this._spacingX),q=Math.floor(Q/this._spacingY);return[V,q]},U.computeFontSize=function K(Z,Q){var V=Math.floor(Z/this._options.width),q=Math.floor(Q/this._options.height),$=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var L=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=$;var w=L/100,H=w*q/V;if(H>1)q=Math.floor(q/H);return Math.floor(q/this._options.spacing)},U._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._spacingX),Math.floor(Q/this._spacingY)]},U._updateSize=function K(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(Z.spacing*Q),this._spacingY=Math.ceil(Z.spacing*Z.fontSize),Z.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=Z.width*this._spacingX,this._ctx.canvas.height=Z.height*this._spacingY},G}(M);a.cache=!1;var l=function(Y){K0(G,Y);function G(){var K=Y.call(this)||this;return K._colorCanvas=document.createElement("canvas"),K}var U=G.prototype;return U.draw=function K(Z,Q){var V=Z[0],q=Z[1],$=Z[2],L=Z[3],w=Z[4],H=this._options.tileWidth,F=this._options.tileHeight;if(Q)if(this._options.tileColorize)this._ctx.clearRect(V*H,q*F,H,F);else this._ctx.fillStyle=w,this._ctx.fillRect(V*H,q*F,H,F);if(!$)return;var D=[].concat($),R=[].concat(L),O=[].concat(w);for(var j=0;j<D.length;j++){var v=this._options.tileMap[D[j]];if(!v)throw new Error('Char "'+D[j]+'" not found in tileMap');if(this._options.tileColorize){var u=this._colorCanvas,h=u.getContext("2d");h.globalCompositeOperation="source-over",h.clearRect(0,0,H,F);var c=R[j],t=O[j];if(h.drawImage(this._options.tileSet,v[0],v[1],H,F,0,0,H,F),c!="transparent")h.fillStyle=c,h.globalCompositeOperation="source-atop",h.fillRect(0,0,H,F);if(t!="transparent")h.fillStyle=t,h.globalCompositeOperation="destination-over",h.fillRect(0,0,H,F);this._ctx.drawImage(u,V*H,q*F,H,F)}else this._ctx.drawImage(this._options.tileSet,v[0],v[1],H,F,V*H,q*F,H,F)}},U.computeSize=function K(Z,Q){var V=Math.floor(Z/this._options.tileWidth),q=Math.floor(Q/this._options.tileHeight);return[V,q]},U.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},U._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},U._updateSize=function K(){var Z=this._options;this._ctx.canvas.width=Z.width*Z.tileWidth,this._ctx.canvas.height=Z.height*Z.tileHeight,this._colorCanvas.width=Z.tileWidth,this._colorCanvas.height=Z.tileHeight},G}(M);function g(Y){var G,U;if(Y in E)G=E[Y];else{if(Y.charAt(0)=="#"){var K=Y.match(/[0-9a-f]/gi)||[],Z=K.map(function(V){return parseInt(V,16)});if(Z.length==3)G=Z.map(function(V){return V*17});else{for(var Q=0;Q<3;Q++)Z[Q+1]+=16*Z[Q],Z.splice(Q,1);G=Z}}else if(U=Y.match(/rgb\(([0-9, ]+)\)/i))G=U[1].split(/\s*,\s*/).map(function(V){return parseInt(V)});else G=[0,0,0];E[Y]=G}return G.slice()}function _(Y){var G=Y.slice();for(var U=arguments.length,K=new Array(U>1?U-1:0),Z=1;Z<U;Z++)K[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++)for(var V=0;V<K.length;V++)G[Q]+=K[V][Q];return G}function m(Y){for(var G=arguments.length,U=new Array(G>1?G-1:0),K=1;K<G;K++)U[K-1]=arguments[K];for(var Z=0;Z<3;Z++)for(var Q=0;Q<U.length;Q++)Y[Z]+=U[Q][Z];return Y}function d(Y){var G=Y.slice();for(var U=arguments.length,K=new Array(U>1?U-1:0),Z=1;Z<U;Z++)K[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++){for(var V=0;V<K.length;V++)G[Q]*=K[V][Q]/255;G[Q]=Math.round(G[Q])}return G}function p(Y){for(var G=arguments.length,U=new Array(G>1?G-1:0),K=1;K<G;K++)U[K-1]=arguments[K];for(var Z=0;Z<3;Z++){for(var Q=0;Q<U.length;Q++)Y[Z]*=U[Q][Z]/255;Y[Z]=Math.round(Y[Z])}return Y}function z0(Y,G,U){if(U===void 0)U=0.5;var K=Y.slice();for(var Z=0;Z<3;Z++)K[Z]=Math.round(K[Z]+U*(G[Z]-Y[Z]));return K}var G0=z0;function A(Y,G,U){if(U===void 0)U=0.5;var K=x(Y),Z=x(G);for(var Q=0;Q<3;Q++)K[Q]+=U*(Z[Q]-K[Q]);return i(K)}var k=A;function T(Y,G){if(!(G instanceof Array))G=Math.round(B.getNormal(0,G));var U=Y.slice();for(var K=0;K<3;K++)U[K]+=G instanceof Array?Math.round(B.getNormal(0,G[K])):G;return U}function x(Y){var G=Y[0]/255,U=Y[1]/255,K=Y[2]/255,Z=Math.max(G,U,K),Q=Math.min(G,U,K),V=0,q,$=(Z+Q)/2;if(Z==Q)q=0;else{var L=Z-Q;switch(q=$>0.5?L/(2-Z-Q):L/(Z+Q),Z){case G:V=(U-K)/L+(U<K?6:0);break;case U:V=(K-G)/L+2;break;case K:V=(G-U)/L+4;break}V/=6}return[V,q,$]}function e(Y,G,U){if(U<0)U+=1;if(U>1)U-=1;if(U<0.16666666666666666)return Y+(G-Y)*6*U;if(U<0.5)return G;if(U<0.6666666666666666)return Y+(G-Y)*(0.6666666666666666-U)*6;return Y}function i(Y){var G=Y[2];if(Y[1]==0)return G=Math.round(G*255),[G,G,G];else{var U=Y[1],K=G<0.5?G*(1+U):G+U-G*U,Z=2*G-K,Q=e(Z,K,Y[0]+0.3333333333333333),V=e(Z,K,Y[0]),q=e(Z,K,Y[0]-0.3333333333333333);return[Math.round(Q*255),Math.round(V*255),Math.round(q*255)]}}function f(Y){var G=Y.map(function(U){return I(U,0,255)});return"rgb("+G.join(",")+")"}function S(Y){var G=Y.map(function(U){return I(U,0,255).toString(16).padStart(2,"0")});return"#"+G.join("")}var E={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},s=Object.freeze({__proto__:null,fromString:g,add:_,add_:m,multiply:d,multiply_:p,interpolate:z0,lerp:G0,interpolateHSL:A,lerpHSL:k,randomize:T,rgb2hsl:x,hsl2rgb:i,toRGB:f,toHex:S}),Z0=function(Y){K0(G,Y);function G(){var K=Y.call(this)||this;K._uniforms={};try{K._gl=K._initWebGL()}catch(Z){if(typeof Z==="string")alert(Z);else if(Z instanceof Error)alert(Z.message)}return K}G.isSupported=function K(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var U=G.prototype;return U.schedule=function K(Z){requestAnimationFrame(Z)},U.getContainer=function K(){return this._gl.canvas},U.setOptions=function K(Z){var Q=this;Y.prototype.setOptions.call(this,Z),this._updateSize();var V=this._options.tileSet;if(V&&"complete"in V&&!V.complete)V.addEventListener("load",function(){return Q._updateTexture(V)});else this._updateTexture(V)},U.draw=function K(Z,Q){var V=this._gl,q=this._options,$=Z[0],L=Z[1],w=Z[2],H=Z[3],F=Z[4],D=V.canvas.height-(L+1)*q.tileHeight;if(V.scissor($*q.tileWidth,D,q.tileWidth,q.tileHeight),Q){if(q.tileColorize)V.clearColor(0,0,0,0);else V.clearColor.apply(V,m0(F));V.clear(V.COLOR_BUFFER_BIT)}if(!w)return;var R=[].concat(w),O=[].concat(F),j=[].concat(H);V.uniform2fv(this._uniforms.targetPosRel,[$,L]);for(var v=0;v<R.length;v++){var u=this._options.tileMap[R[v]];if(!u)throw new Error('Char "'+R[v]+'" not found in tileMap');if(V.uniform1f(this._uniforms.colorize,q.tileColorize?1:0),V.uniform2fv(this._uniforms.tilesetPosAbs,u),q.tileColorize)V.uniform4fv(this._uniforms.tint,m0(j[v])),V.uniform4fv(this._uniforms.bg,m0(O[v]));V.drawArrays(V.TRIANGLE_STRIP,0,4)}},U.clear=function K(){var Z=this._gl;Z.clearColor.apply(Z,m0(this._options.bg)),Z.scissor(0,0,Z.canvas.width,Z.canvas.height),Z.clear(Z.COLOR_BUFFER_BIT)},U.computeSize=function K(Z,Q){var V=Math.floor(Z/this._options.tileWidth),q=Math.floor(Q/this._options.tileHeight);return[V,q]},U.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},U.eventToPosition=function K(Z,Q){var V=this._gl.canvas,q=V.getBoundingClientRect();if(Z-=q.left,Q-=q.top,Z*=V.width/q.width,Q*=V.height/q.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},U._initWebGL=function K(){var Z=this,Q=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=Q;var V=C0(Q,P0,$0);return Q.useProgram(V),Y0(Q),V0.forEach(function(q){return Z._uniforms[q]=Q.getUniformLocation(V,q)}),this._program=V,Q.enable(Q.BLEND),Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA),Q.enable(Q.SCISSOR_TEST),Q},U._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},U._updateSize=function K(){var Z=this._gl,Q=this._options,V=[Q.width*Q.tileWidth,Q.height*Q.tileHeight];Z.canvas.width=V[0],Z.canvas.height=V[1],Z.viewport(0,0,V[0],V[1]),Z.uniform2fv(this._uniforms.tileSize,[Q.tileWidth,Q.tileHeight]),Z.uniform2fv(this._uniforms.targetSize,V)},U._updateTexture=function K(Z){r0(this._gl,Z)},G}(P),V0=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],P0=`
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
}`.trim(),$0=`
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
}`.trim();function C0(Y,G,U){var K=Y.createShader(Y.VERTEX_SHADER);if(Y.shaderSource(K,G),Y.compileShader(K),!Y.getShaderParameter(K,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(K)||"");var Z=Y.createShader(Y.FRAGMENT_SHADER);if(Y.shaderSource(Z,U),Y.compileShader(Z),!Y.getShaderParameter(Z,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(Z)||"");var Q=Y.createProgram();if(Y.attachShader(Q,K),Y.attachShader(Q,Z),Y.linkProgram(Q),!Y.getProgramParameter(Q,Y.LINK_STATUS))throw new Error(Y.getProgramInfoLog(Q)||"");return Q}function Y0(Y){var G=new Float32Array([0,0,1,0,0,1,1,1]),U=Y.createBuffer();Y.bindBuffer(Y.ARRAY_BUFFER,U),Y.bufferData(Y.ARRAY_BUFFER,G,Y.STATIC_DRAW),Y.enableVertexAttribArray(0),Y.vertexAttribPointer(0,2,Y.FLOAT,!1,0,0)}function r0(Y,G){var U=Y.createTexture();return Y.bindTexture(Y.TEXTURE_2D,U),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MAG_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MIN_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_S,Y.REPEAT),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_T,Y.REPEAT),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,0),Y.texImage2D(Y.TEXTURE_2D,0,Y.RGBA,Y.RGBA,Y.UNSIGNED_BYTE,G),U}var S0={};function m0(Y){if(!(Y in S0)){var G;if(Y=="transparent")G=[0,0,0,0];else if(Y.indexOf("rgba")>-1){G=(Y.match(/[\d.]+/g)||[]).map(Number);for(var U=0;U<3;U++)G[U]=G[U]/255}else G=g(Y).map(function(K){return K/255}),G.push(1);S0[Y]=G}return S0[Y]}function i6(Y){return"\x1B[0;48;5;"+O1(Y)+"m\x1B[2J"}function t6(Y,G){return"\x1B[0;38;5;"+O1(Y)+";48;5;"+O1(G)+"m"}function e6(Y,G){return"\x1B["+(G+1)+";"+(Y+1)+"H"}function O1(Y){var G=256,U=6,K=U/G,Z=g(Y),Q=Math.floor(Z[0]*K),V=Math.floor(Z[1]*K),q=Math.floor(Z[2]*K);return Q*36+V*6+q*1+16}var n1=function(Y){K0(G,Y);function G(){var K=Y.call(this)||this;return K._offset=[0,0],K._cursor=[-1,-1],K._lastColor="",K}var U=G.prototype;return U.schedule=function K(Z){setTimeout(Z,16.666666666666668)},U.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z);var Q=[Z.width,Z.height],V=this.computeSize();this._offset=V.map(function(q,$){return Math.floor((q-Q[$])/2)})},U.clear=function K(){process.stdout.write(i6(this._options.bg))},U.draw=function K(Z,Q){var V=Z[0],q=Z[1],$=Z[2],L=Z[3],w=Z[4],H=this._offset[0]+V,F=this._offset[1]+q,D=this.computeSize();if(H<0||H>=D[0])return;if(F<0||F>=D[1])return;if(H!==this._cursor[0]||F!==this._cursor[1])process.stdout.write(e6(H,F)),this._cursor[0]=H,this._cursor[1]=F;if(Q){if(!$)$=" "}if(!$)return;var R=t6(L,w);if(R!==this._lastColor)process.stdout.write(R),this._lastColor=R;if($!="\t"){var O=[].concat($);process.stdout.write(O[0])}if(this._cursor[0]++,this._cursor[0]>=D[0])this._cursor[0]=0,this._cursor[1]++},U.computeFontSize=function K(){throw new Error("Terminal backend has no notion of font size")},U.eventToPosition=function K(Z,Q){return[Z,Q]},U.computeSize=function K(){return[process.stdout.columns,process.stdout.rows]},G}(P),ZZ=/%([bc]){([^}]*)}/g,v0=0,b0=1,j1=2,C1=3;function JZ(Y,G){var U={width:0,height:1},K=E1(Y,G),Z=0;for(var Q=0;Q<K.length;Q++){var V=K[Q];switch(V.type){case v0:Z+=V.value.length;break;case b0:U.height++,U.width=Math.max(U.width,Z),Z=0;break}}return U.width=Math.max(U.width,Z),U}function E1(Y,G){var U=[],K=0;Y.replace(ZZ,function(Q,V,q,$){var L=Y.substring(K,$);if(L.length)U.push({type:v0,value:L});return U.push({type:V=="c"?j1:C1,value:q.trim()}),K=$+Q.length,""});var Z=Y.substring(K);if(Z.length)U.push({type:v0,value:Z});return QZ(U,G)}function QZ(Y,G){if(!G)G=1/0;var U=0,K=0,Z=-1;while(U<Y.length){var Q=Y[U];if(Q.type==b0)K=0,Z=-1;if(Q.type!=v0){U++;continue}while(K==0&&Q.value.charAt(0)==" ")Q.value=Q.value.substring(1);var V=Q.value.indexOf(`
`);if(V!=-1){Q.value=Q1(Y,U,V,!0);var q=Q.value.split("");while(q.length&&q[q.length-1]==" ")q.pop();Q.value=q.join("")}if(!Q.value.length){Y.splice(U,1);continue}if(K+Q.value.length>G){var $=-1;while(!0){var L=Q.value.indexOf(" ",$+1);if(L==-1)break;if(K+L>G)break;$=L}if($!=-1)Q.value=Q1(Y,U,$,!0);else if(Z!=-1){var w=Y[Z],H=w.value.lastIndexOf(" ");w.value=Q1(Y,Z,H,!0),U=Z}else Q.value=Q1(Y,U,G-K,!1)}else if(K+=Q.value.length,Q.value.indexOf(" ")!=-1)Z=U;U++}Y.push({type:b0});var F=null;for(var D=0;D<Y.length;D++){var R=Y[D];switch(R.type){case v0:F=R;break;case b0:if(F){var O=F.value.split("");while(O.length&&O[O.length-1]==" ")O.pop();F.value=O.join("")}F=null;break}}return Y.pop(),Y}function Q1(Y,G,U,K){var Z={type:b0},Q={type:v0,value:Y[G].value.substring(U+(K?1:0))};return Y.splice(G+1,0,Z,Q),Y[G].value.substring(0,U)}var VZ=Object.freeze({__proto__:null,TYPE_TEXT:v0,TYPE_NEWLINE:b0,TYPE_FG:j1,TYPE_BG:C1,measure:JZ,tokenize:E1}),A1=80,N1=25,X0={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},KZ={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},qZ={hex:Q0,rect:a,tile:l,"tile-gl":Z0,term:n1},zZ={width:A1,height:N1,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},y0=function(){function Y(U){if(U===void 0)U={};this._data={},this._dirty=!1,this._options={},U=Object.assign({},zZ,U),this.setOptions(U),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var G=Y.prototype;return G.DEBUG=function U(K,Z,Q){var V=[this._options.bg,this._options.fg];this.draw(K,Z,null,null,V[Q%V.length])},G.clear=function U(){this._data={},this._dirty=!0},G.setOptions=function U(K){if(Object.assign(this._options,K),K.width||K.height||K.fontSize||K.fontFamily||K.spacing||K.layout){if(K.layout){var Z=qZ[K.layout];this._backend=new Z}this._backend.setOptions(this._options),this._dirty=!0}return this},G.getOptions=function U(){return this._options},G.getContainer=function U(){return this._backend.getContainer()},G.computeSize=function U(K,Z){return this._backend.computeSize(K,Z)},G.computeFontSize=function U(K,Z){return this._backend.computeFontSize(K,Z)},G.computeTileSize=function U(K,Z){var Q=Math.floor(K/this._options.width),V=Math.floor(Z/this._options.height);return[Q,V]},G.eventToPosition=function U(K){var Z,Q;if("touches"in K)Z=K.touches[0].clientX,Q=K.touches[0].clientY;else Z=K.clientX,Q=K.clientY;return this._backend.eventToPosition(Z,Q)},G.draw=function U(K,Z,Q,V,q){if(!V)V=this._options.fg;if(!q)q=this._options.bg;var $=K+","+Z;if(this._data[$]=[K,Z,Q,V,q],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[$]=!0},G.drawOver=function U(K,Z,Q,V,q){var $=K+","+Z,L=this._data[$];if(L)L[2]=Q||L[2],L[3]=V||L[3],L[4]=q||L[4];else this.draw(K,Z,Q,V,q)},G.drawText=function U(K,Z,Q,V){var q=null,$=null,L=K,w=Z,H=1;if(!V)V=this._options.width-K;var F=E1(Q,V);while(F.length){var D=F.shift();switch(D.type){case v0:var R=!1,O=!1,j=!1,v=!1;for(var u=0;u<D.value.length;u++){var h=D.value.charCodeAt(u),c=D.value.charAt(u);if(this._options.layout==="term"){var t=h>>8,J0=t===17||t>=46&&t<=159||t>=172&&t<=215||h>=43360&&h<=43391;if(J0){this.draw(L+0,w,c,q,$),this.draw(L+1,w,"\t",q,$),L+=2;continue}}if(j=h>65280&&h<65377||h>65500&&h<65512||h>65518,R=c.charCodeAt(0)==32||c.charCodeAt(0)==12288,v&&!j&&!R)L++;if(j&&!O)L++;this.draw(L++,w,c,q,$),O=R,v=j}break;case j1:q=D.value||null;break;case C1:$=D.value||null;break;case b0:L=K,w++,H++;break}}return H},G._tick=function U(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var K in this._data)this._draw(K,!1)}else for(var Z in this._dirty)this._draw(Z,!0);this._dirty=!1},G._draw=function U(K,Z){var Q=this._data[K];if(Q[4]!=this._options.bg)Z=!0;this._backend.draw(Q,Z)},Y}();y0.Rect=a,y0.Hex=Q0,y0.Tile=l,y0.TileGL=Z0,y0.Term=n1;var UZ=function(){function Y(U){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,U),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var K=0;K<this._options.order;K++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var G=Y.prototype;return G.clear=function U(){this._data={},this._priorValues={}},G.generate=function U(){var K=[this._sample(this._prefix)];while(K[K.length-1]!=this._boundary)K.push(this._sample(K));return this._join(K.slice(0,-1))},G.observe=function U(K){var Z=this._split(K);for(var Q=0;Q<Z.length;Q++)this._priorValues[Z[Q]]=this._options.prior;Z=this._prefix.concat(Z).concat(this._suffix);for(var V=this._options.order;V<Z.length;V++){var q=Z.slice(V-this._options.order,V),$=Z[V];for(var L=0;L<q.length;L++){var w=q.slice(L);this._observeEvent(w,$)}}},G.getStats=function U(){var K=[],Z=Object.keys(this._priorValues).length;Z--,K.push("distinct samples: "+Z);var Q=Object.keys(this._data).length,V=0;for(var q in this._data)V+=Object.keys(this._data[q]).length;return K.push("dictionary size (contexts): "+Q),K.push("dictionary size (events): "+V),K.join(", ")},G._split=function U(K){return K.split(this._options.words?/\s+/:"")},G._join=function U(K){return K.join(this._options.words?" ":"")},G._observeEvent=function U(K,Z){var Q=this._join(K);if(!(Q in this._data))this._data[Q]={};var V=this._data[Q];if(!(Z in V))V[Z]=0;V[Z]++},G._sample=function U(K){K=this._backoff(K);var Z=this._join(K),Q=this._data[Z],V={};if(this._options.prior){for(var q in this._priorValues)V[q]=this._priorValues[q];for(var $ in Q)V[$]+=Q[$]}else V=Q;return B.getWeightedValue(V)},G._backoff=function U(K){if(K.length>this._options.order)K=K.slice(-this._options.order);else if(K.length<this._options.order)K=this._prefix.slice(0,this._options.order-K.length).concat(K);while(!(this._join(K)in this._data)&&K.length>0)K=K.slice(1);return K},Y}(),r1=function(){function Y(){this.heap=[],this.timestamp=0}var G=Y.prototype;return G.lessThan=function U(K,Z){return K.key==Z.key?K.timestamp<Z.timestamp:K.key<Z.key},G.shift=function U(K){this.heap=this.heap.map(function(Z){var{key:Q,value:V,timestamp:q}=Z;return{key:Q+K,value:V,timestamp:q}})},G.len=function U(){return this.heap.length},G.push=function U(K,Z){this.timestamp+=1;var Q=this.len();this.heap.push({value:K,timestamp:this.timestamp,key:Z}),this.updateUp(Q)},G.pop=function U(){if(this.len()==0)throw new Error("no element to pop");var K=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return K},G.find=function U(K){for(var Z=0;Z<this.len();Z++)if(K==this.heap[Z].value)return this.heap[Z];return null},G.remove=function U(K){var Z=null;for(var Q=0;Q<this.len();Q++)if(K==this.heap[Q].value)Z=Q;if(Z===null)return!1;if(this.len()>1){var V=this.heap.pop();if(V.value!=K)this.heap[Z]=V,this.updateDown(Z);return!0}else this.heap.pop();return!0},G.parentNode=function U(K){return Math.floor((K-1)/2)},G.leftChildNode=function U(K){return 2*K+1},G.rightChildNode=function U(K){return 2*K+2},G.existNode=function U(K){return K>=0&&K<this.heap.length},G.swap=function U(K,Z){var Q=this.heap[K];this.heap[K]=this.heap[Z],this.heap[Z]=Q},G.minNode=function U(K){var Z=K.filter(this.existNode.bind(this)),Q=Z[0];for(var V=ZJ(Z),q;!(q=V()).done;){var $=q.value;if(this.lessThan(this.heap[$],this.heap[Q]))Q=$}return Q},G.updateUp=function U(K){if(K==0)return;var Z=this.parentNode(K);if(this.existNode(Z)&&this.lessThan(this.heap[K],this.heap[Z]))this.swap(K,Z),this.updateUp(Z)},G.updateDown=function U(K){var Z=this.leftChildNode(K),Q=this.rightChildNode(K);if(!this.existNode(Z))return;var V=this.minNode([K,Z,Q]);if(V!=K)this.swap(K,V),this.updateDown(V)},G.debugPrint=function U(){console.log(this.heap)},Y}(),s1=function(){function Y(){this._time=0,this._events=new r1}var G=Y.prototype;return G.getTime=function U(){return this._time},G.clear=function U(){return this._events=new r1,this},G.add=function U(K,Z){this._events.push(K,Z)},G.get=function U(){if(!this._events.len())return null;var K=this._events.pop(),Z=K.key,Q=K.value;if(Z>0)this._time+=Z,this._events.shift(-Z);return Q},G.getEventTime=function U(K){var Z=this._events.find(K);if(Z){var Q=Z.key;return Q}return},G.remove=function U(K){return this._events.remove(K)},Y}(),S1=function(){function Y(){this._queue=new s1,this._repeat=[],this._current=null}var G=Y.prototype;return G.getTime=function U(){return this._queue.getTime()},G.add=function U(K,Z){if(Z)this._repeat.push(K);return this},G.getTimeOf=function U(K){return this._queue.getEventTime(K)},G.clear=function U(){return this._queue.clear(),this._repeat=[],this._current=null,this},G.remove=function U(K){var Z=this._queue.remove(K),Q=this._repeat.indexOf(K);if(Q!=-1)this._repeat.splice(Q,1);if(this._current==K)this._current=null;return Z},G.next=function U(){return this._current=this._queue.get(),this._current},Y}(),$Z=function(Y){K0(G,Y);function G(){return Y.apply(this,arguments)||this}var U=G.prototype;return U.add=function K(Z,Q){return this._queue.add(Z,0),Y.prototype.add.call(this,Z,Q)},U.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return Y.prototype.next.call(this)},G}(S1),XZ=function(Y){K0(G,Y);function G(){return Y.apply(this,arguments)||this}var U=G.prototype;return U.add=function K(Z,Q,V){return this._queue.add(Z,V!==void 0?V:1/Z.getSpeed()),Y.prototype.add.call(this,Z,Q)},U.next=function K(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return Y.prototype.next.call(this)},G}(S1),BZ=function(Y){K0(G,Y);function G(){var K=Y.call(this)||this;return K._defaultDuration=1,K._duration=K._defaultDuration,K}var U=G.prototype;return U.add=function K(Z,Q,V){return this._queue.add(Z,V||this._defaultDuration),Y.prototype.add.call(this,Z,Q)},U.clear=function K(){return this._duration=this._defaultDuration,Y.prototype.clear.call(this)},U.remove=function K(Z){if(Z==this._current)this._duration=this._defaultDuration;return Y.prototype.remove.call(this,Z)},U.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return Y.prototype.next.call(this)},U.setDuration=function K(Z){if(this._current)this._duration=Z;return this},G}(S1),GZ={Simple:$Z,Speed:XZ,Action:BZ},v1=function(){function Y(U,K){if(K===void 0)K={};this._lightPasses=U,this._options=Object.assign({topology:8},K)}var G=Y.prototype;return G._getCircle=function U(K,Z,Q){var V=[],q,$,L;switch(this._options.topology){case 4:$=1,L=[0,1],q=[X0[8][7],X0[8][1],X0[8][3],X0[8][5]];break;case 6:q=X0[6],$=1,L=[-1,1];break;case 8:q=X0[4],$=2,L=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var w=K+L[0]*Q,H=Z+L[1]*Q;for(var F=0;F<q.length;F++)for(var D=0;D<Q*$;D++)V.push([w,H]),w+=q[F][0],H+=q[F][1];return V},Y}(),YZ=function(Y){K0(G,Y);function G(){return Y.apply(this,arguments)||this}var U=G.prototype;return U.compute=function K(Z,Q,V,q){if(q(Z,Q,0,1),!this._lightPasses(Z,Q))return;var $=[],L,w,H,F,D;for(var R=1;R<=V;R++){var O=this._getCircle(Z,Q,R),j=360/O.length;for(var v=0;v<O.length;v++){if(H=O[v][0],F=O[v][1],L=j*(v-0.5),w=L+j,D=!this._lightPasses(H,F),this._visibleCoords(Math.floor(L),Math.ceil(w),D,$))q(H,F,R,1);if($.length==2&&$[0]==0&&$[1]==360)return}}},U._visibleCoords=function K(Z,Q,V,q){if(Z<0){var $=this._visibleCoords(0,Q,V,q),L=this._visibleCoords(360+Z,360,V,q);return $||L}var w=0;while(w<q.length&&q[w]<Z)w++;if(w==q.length){if(V)q.push(Z,Q);return!0}var H=0;if(w%2){while(w<q.length&&q[w]<Q)w++,H++;if(H==0)return!1;if(V)if(H%2)q.splice(w-H,H,Q);else q.splice(w-H,H);return!0}else{while(w<q.length&&q[w]<Q)w++,H++;if(Z==q[w-H]&&H==1)return!1;if(V)if(H%2)q.splice(w-H,H,Z);else q.splice(w-H,H,Z,Q);return!0}},G}(v1),wZ=function(Y){K0(G,Y);function G(){return Y.apply(this,arguments)||this}var U=G.prototype;return U.compute=function K(Z,Q,V,q){if(q(Z,Q,0,1),!this._lightPasses(Z,Q))return;var $=[],L,w,H,F,D,R;for(var O=1;O<=V;O++){var j=this._getCircle(Z,Q,O),v=j.length;for(var u=0;u<v;u++){if(L=j[u][0],w=j[u][1],F=[u?2*u-1:2*v-1,2*v],D=[2*u+1,2*v],H=!this._lightPasses(L,w),R=this._checkVisibility(F,D,H,$),R)q(L,w,O,R);if($.length==2&&$[0][0]==0&&$[1][0]==$[1][1])return}}},U._checkVisibility=function K(Z,Q,V,q){if(Z[0]>Q[0]){var $=this._checkVisibility(Z,[Z[1],Z[1]],V,q),L=this._checkVisibility([0,1],Q,V,q);return($+L)/2}var w=0,H=!1;while(w<q.length){var F=q[w],D=F[0]*Z[1]-Z[0]*F[1];if(D>=0){if(D==0&&!(w%2))H=!0;break}w++}var R=q.length,O=!1;while(R--){var j=q[R],v=Q[0]*j[1]-j[0]*Q[1];if(v>=0){if(v==0&&R%2)O=!0;break}}var u=!0;if(w==R&&(H||O))u=!1;else if(H&&O&&w+1==R&&R%2)u=!1;else if(w>R&&w%2)u=!1;if(!u)return 0;var h,c=R-w+1;if(c%2)if(w%2){var t=q[w];if(h=(Q[0]*t[1]-t[0]*Q[1])/(t[1]*Q[1]),V)q.splice(w,c,Q)}else{var J0=q[R];if(h=(J0[0]*Z[1]-Z[0]*J0[1])/(Z[1]*J0[1]),V)q.splice(w,c,Z)}else if(w%2){var U0=q[w],L0=q[R];if(h=(L0[0]*U0[1]-U0[0]*L0[1])/(U0[1]*L0[1]),V)q.splice(w,c)}else{if(V)q.splice(w,c,Z,Q);return 1}var E0=(Q[0]*Z[1]-Z[0]*Q[1])/(Z[1]*Q[1]);return h/E0},G}(v1),I0=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],LZ=function(Y){K0(G,Y);function G(){return Y.apply(this,arguments)||this}var U=G.prototype;return U.compute=function K(Z,Q,V,q){q(Z,Q,0,1);for(var $=0;$<I0.length;$++)this._renderOctant(Z,Q,I0[$],V,q)},U.compute180=function K(Z,Q,V,q,$){$(Z,Q,0,1);var L=(q-1+8)%8,w=(q-2+8)%8,H=(q+1+8)%8;this._renderOctant(Z,Q,I0[w],V,$),this._renderOctant(Z,Q,I0[L],V,$),this._renderOctant(Z,Q,I0[q],V,$),this._renderOctant(Z,Q,I0[H],V,$)},U.compute90=function K(Z,Q,V,q,$){$(Z,Q,0,1);var L=(q-1+8)%8;this._renderOctant(Z,Q,I0[q],V,$),this._renderOctant(Z,Q,I0[L],V,$)},U._renderOctant=function K(Z,Q,V,q,$){this._castVisibility(Z,Q,1,1,0,q+1,V[0],V[1],V[2],V[3],$)},U._castVisibility=function K(Z,Q,V,q,$,L,w,H,F,D,R){if(q<$)return;for(var O=V;O<=L;O++){var j=-O-1,v=-O,u=!1,h=0;while(j<=0){j+=1;var c=Z+j*w+v*H,t=Q+j*F+v*D,J0=(j-0.5)/(v+0.5),U0=(j+0.5)/(v-0.5);if(U0>q)continue;if(J0<$)break;if(j*j+v*v<L*L)R(c,t,O,1);if(!u){if(!this._lightPasses(c,t)&&O<L)u=!0,this._castVisibility(Z,Q,O+1,q,J0,L,w,H,F,D,R),h=U0}else{if(!this._lightPasses(c,t)){h=U0;continue}u=!1,q=h}}if(u)break}},G}(v1),HZ={DiscreteShadowcasting:YZ,PreciseShadowcasting:wZ,RecursiveShadowcasting:LZ},k0=function(){function Y(U,K){if(U===void 0)U=A1;if(K===void 0)K=N1;this._width=U,this._height=K}var G=Y.prototype;return G._fillMap=function U(K){var Z=[];for(var Q=0;Q<this._width;Q++){Z.push([]);for(var V=0;V<this._height;V++)Z[Q].push(K)}return Z},Y}(),PZ=function(Y){K0(G,Y);function G(){return Y.apply(this,arguments)||this}var U=G.prototype;return U.create=function K(Z){var Q=this._width-1,V=this._height-1;for(var q=0;q<=Q;q++)for(var $=0;$<=V;$++){var L=q&&$&&q<Q&&$<V;Z(q,$,L?0:1)}return this},G}(k0),o1=function(Y){K0(G,Y);function G(K,Z){var Q=Y.call(this,K,Z)||this;return Q._rooms=[],Q._corridors=[],Q}var U=G.prototype;return U.getRooms=function K(){return this._rooms},U.getCorridors=function K(){return this._corridors},G}(k0),a1=function Y(){},V1=function(Y){K0(G,Y);function G(K,Z,Q,V,q,$){var L=Y.call(this)||this;if(L._x1=K,L._y1=Z,L._x2=Q,L._y2=V,L._doors={},q!==void 0&&$!==void 0)L.addDoor(q,$);return L}G.createRandomAt=function K(Z,Q,V,q,$){var L=$.roomWidth[0],w=$.roomWidth[1],H=B.getUniformInt(L,w);L=$.roomHeight[0],w=$.roomHeight[1];var F=B.getUniformInt(L,w);if(V==1){var D=Q-Math.floor(B.getUniform()*F);return new this(Z+1,D,Z+H,D+F-1,Z,Q)}if(V==-1){var R=Q-Math.floor(B.getUniform()*F);return new this(Z-H,R,Z-1,R+F-1,Z,Q)}if(q==1){var O=Z-Math.floor(B.getUniform()*H);return new this(O,Q+1,O+H-1,Q+F,Z,Q)}if(q==-1){var j=Z-Math.floor(B.getUniform()*H);return new this(j,Q-F,j+H-1,Q-1,Z,Q)}throw new Error("dx or dy must be 1 or -1")},G.createRandomCenter=function K(Z,Q,V){var q=V.roomWidth[0],$=V.roomWidth[1],L=B.getUniformInt(q,$);q=V.roomHeight[0],$=V.roomHeight[1];var w=B.getUniformInt(q,$),H=Z-Math.floor(B.getUniform()*L),F=Q-Math.floor(B.getUniform()*w),D=H+L-1,R=F+w-1;return new this(H,F,D,R)},G.createRandom=function K(Z,Q,V){var q=V.roomWidth[0],$=V.roomWidth[1],L=B.getUniformInt(q,$);q=V.roomHeight[0],$=V.roomHeight[1];var w=B.getUniformInt(q,$),H=Z-L-1,F=Q-w-1,D=1+Math.floor(B.getUniform()*H),R=1+Math.floor(B.getUniform()*F),O=D+L-1,j=R+w-1;return new this(D,R,O,j)};var U=G.prototype;return U.addDoor=function K(Z,Q){return this._doors[Z+","+Q]=1,this},U.getDoors=function K(Z){for(var Q in this._doors){var V=Q.split(",");Z(parseInt(V[0]),parseInt(V[1]))}return this},U.clearDoors=function K(){return this._doors={},this},U.addDoors=function K(Z){var Q=this._x1-1,V=this._x2+1,q=this._y1-1,$=this._y2+1;for(var L=Q;L<=V;L++)for(var w=q;w<=$;w++){if(L!=Q&&L!=V&&w!=q&&w!=$)continue;if(Z(L,w))continue;this.addDoor(L,w)}return this},U.debug=function K(){console.log("room",this._x1,this._y1,this._x2,this._y2)},U.isValid=function K(Z,Q){var V=this._x1-1,q=this._x2+1,$=this._y1-1,L=this._y2+1;for(var w=V;w<=q;w++)for(var H=$;H<=L;H++)if(w==V||w==q||H==$||H==L){if(!Z(w,H))return!1}else if(!Q(w,H))return!1;return!0},U.create=function K(Z){var Q=this._x1-1,V=this._x2+1,q=this._y1-1,$=this._y2+1,L=0;for(var w=Q;w<=V;w++)for(var H=q;H<=$;H++){if(w+","+H in this._doors)L=2;else if(w==Q||w==V||H==q||H==$)L=1;else L=0;Z(w,H,L)}},U.getCenter=function K(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},U.getLeft=function K(){return this._x1},U.getRight=function K(){return this._x2},U.getTop=function K(){return this._y1},U.getBottom=function K(){return this._y2},G}(a1),I1=function(Y){K0(G,Y);function G(K,Z,Q,V){var q=Y.call(this)||this;return q._startX=K,q._startY=Z,q._endX=Q,q._endY=V,q._endsWithAWall=!0,q}G.createRandomAt=function K(Z,Q,V,q,$){var L=$.corridorLength[0],w=$.corridorLength[1],H=B.getUniformInt(L,w);return new this(Z,Q,Z+V*H,Q+q*H)};var U=G.prototype;return U.debug=function K(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},U.isValid=function K(Z,Q){var V=this._startX,q=this._startY,$=this._endX-V,L=this._endY-q,w=1+Math.max(Math.abs($),Math.abs(L));if($)$=$/Math.abs($);if(L)L=L/Math.abs(L);var H=L,F=-$,D=!0;for(var R=0;R<w;R++){var O=V+R*$,j=q+R*L;if(!Q(O,j))D=!1;if(!Z(O+H,j+F))D=!1;if(!Z(O-H,j-F))D=!1;if(!D){w=R,this._endX=O-$,this._endY=j-L;break}}if(w==0)return!1;if(w==1&&Z(this._endX+$,this._endY+L))return!1;var v=!Z(this._endX+$+H,this._endY+L+F),u=!Z(this._endX+$-H,this._endY+L-F);if(this._endsWithAWall=Z(this._endX+$,this._endY+L),(v||u)&&this._endsWithAWall)return!1;return!0},U.create=function K(Z){var Q=this._startX,V=this._startY,q=this._endX-Q,$=this._endY-V,L=1+Math.max(Math.abs(q),Math.abs($));if(q)q=q/Math.abs(q);if($)$=$/Math.abs($);for(var w=0;w<L;w++){var H=Q+w*q,F=V+w*$;Z(H,F,0)}return!0},U.createPriorityWalls=function K(Z){if(!this._endsWithAWall)return;var Q=this._startX,V=this._startY,q=this._endX-Q,$=this._endY-V;if(q)q=q/Math.abs(q);if($)$=$/Math.abs($);var L=$,w=-q;Z(this._endX+q,this._endY+$),Z(this._endX+L,this._endY+w),Z(this._endX-L,this._endY-w)},G}(a1),FZ=function(Y){K0(G,Y);function G(K,Z,Q){var V=Y.call(this,K,Z)||this;return V._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(V._options,Q),V._map=[],V._dug=0,V._roomAttempts=20,V._corridorAttempts=20,V._connected=[],V._unconnected=[],V._digCallback=V._digCallback.bind(x0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(x0(V)),V._isWallCallback=V._isWallCallback.bind(x0(V)),V}var U=G.prototype;return U.create=function K(Z){var Q=Date.now();while(!0){var V=Date.now();if(V-Q>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(Z)for(var q=0;q<this._width;q++)for(var $=0;$<this._height;$++)Z(q,$,this._map[q][$]);return this},U._generateRooms=function K(){var Z=this._width-2,Q=this._height-2,V;do if(V=this._generateRoom(),this._dug/(Z*Q)>this._options.roomDugPercentage)break;while(V)},U._generateRoom=function K(){var Z=0;while(Z<this._roomAttempts){Z++;var Q=V1.createRandom(this._width,this._height,this._options);if(!Q.isValid(this._isWallCallback,this._canBeDugCallback))continue;return Q.create(this._digCallback),this._rooms.push(Q),Q}return null},U._generateCorridors=function K(){var Z=0;while(Z<this._corridorAttempts){Z++,this._corridors=[],this._map=this._fillMap(1);for(var Q=0;Q<this._rooms.length;Q++){var V=this._rooms[Q];V.clearDoors(),V.create(this._digCallback)}if(this._unconnected=B.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var q=B.getItem(this._connected);if(!q)break;var $=this._closestRoom(this._unconnected,q);if(!$)break;var L=this._closestRoom(this._connected,$);if(!L)break;var w=this._connectRooms($,L);if(!w)break;if(!this._unconnected.length)return!0}}return!1},U._closestRoom=function K(Z,Q){var V=1/0,q=Q.getCenter(),$=null;for(var L=0;L<Z.length;L++){var w=Z[L],H=w.getCenter(),F=H[0]-q[0],D=H[1]-q[1],R=F*F+D*D;if(R<V)V=R,$=w}return $},U._connectRooms=function K(Z,Q){var V=Z.getCenter(),q=Q.getCenter(),$=q[0]-V[0],L=q[1]-V[1],w,H,F,D,R,O,j;if(Math.abs($)<Math.abs(L))F=L>0?2:0,D=(F+2)%4,R=Q.getLeft(),O=Q.getRight(),j=0;else F=$>0?1:3,D=(F+2)%4,R=Q.getTop(),O=Q.getBottom(),j=1;if(w=this._placeInWall(Z,F),!w)return!1;if(w[j]>=R&&w[j]<=O){H=w.slice();var v=0;switch(D){case 0:v=Q.getTop()-1;break;case 1:v=Q.getRight()+1;break;case 2:v=Q.getBottom()+1;break;case 3:v=Q.getLeft()-1;break}H[(j+1)%2]=v,this._digLine([w,H])}else if(w[j]<R-1||w[j]>O+1){var u=w[j]-q[j],h=0;switch(D){case 0:case 1:h=u<0?3:1;break;case 2:case 3:h=u<0?1:3;break}if(D=(D+h)%4,H=this._placeInWall(Q,D),!H)return!1;var c=[0,0];c[j]=w[j];var t=(j+1)%2;c[t]=H[t],this._digLine([w,c,H])}else{var J0=(j+1)%2;if(H=this._placeInWall(Q,D),!H)return!1;var U0=Math.round((H[J0]+w[J0])/2),L0=[0,0],E0=[0,0];L0[j]=w[j],L0[J0]=U0,E0[j]=H[j],E0[J0]=U0,this._digLine([w,L0,E0,H])}if(Z.addDoor(w[0],w[1]),Q.addDoor(H[0],H[1]),j=this._unconnected.indexOf(Z),j!=-1)this._unconnected.splice(j,1),this._connected.push(Z);if(j=this._unconnected.indexOf(Q),j!=-1)this._unconnected.splice(j,1),this._connected.push(Q);return!0},U._placeInWall=function K(Z,Q){var V=[0,0],q=[0,0],$=0;switch(Q){case 0:q=[1,0],V=[Z.getLeft(),Z.getTop()-1],$=Z.getRight()-Z.getLeft()+1;break;case 1:q=[0,1],V=[Z.getRight()+1,Z.getTop()],$=Z.getBottom()-Z.getTop()+1;break;case 2:q=[1,0],V=[Z.getLeft(),Z.getBottom()+1],$=Z.getRight()-Z.getLeft()+1;break;case 3:q=[0,1],V=[Z.getLeft()-1,Z.getTop()],$=Z.getBottom()-Z.getTop()+1;break}var L=[],w=-2;for(var H=0;H<$;H++){var F=V[0]+H*q[0],D=V[1]+H*q[1];L.push(null);var R=this._map[F][D]==1;if(R){if(w!=H-1)L[H]=[F,D]}else if(w=H,H)L[H-1]=null}for(var O=L.length-1;O>=0;O--)if(!L[O])L.splice(O,1);return L.length?B.getItem(L):null},U._digLine=function K(Z){for(var Q=1;Q<Z.length;Q++){var V=Z[Q-1],q=Z[Q],$=new I1(V[0],V[1],q[0],q[1]);$.create(this._digCallback),this._corridors.push($)}},U._digCallback=function K(Z,Q,V){if(this._map[Z][Q]=V,V==0)this._dug++},U._isWallCallback=function K(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},U._canBeDugCallback=function K(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},G}(o1),DZ=function(Y){K0(G,Y);function G(K,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,K,Z)||this,V._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},V.setOptions(Q),V._dirs=X0[V._options.topology],V._map=V._fillMap(0),V}var U=G.prototype;return U.randomize=function K(Z){for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)this._map[Q][V]=B.getUniform()<Z?1:0;return this},U.setOptions=function K(Z){Object.assign(this._options,Z)},U.set=function K(Z,Q,V){this._map[Z][Q]=V},U.create=function K(Z){var Q=this._fillMap(0),V=this._options.born,q=this._options.survive;for(var $=0;$<this._height;$++){var L=1,w=0;if(this._options.topology==6)L=2,w=$%2;for(var H=w;H<this._width;H+=L){var F=this._map[H][$],D=this._getNeighbors(H,$);if(F&&q.indexOf(D)!=-1)Q[H][$]=1;else if(!F&&V.indexOf(D)!=-1)Q[H][$]=1}}this._map=Q,Z&&this._serviceCallback(Z)},U._serviceCallback=function K(Z){for(var Q=0;Q<this._height;Q++){var V=1,q=0;if(this._options.topology==6)V=2,q=Q%2;for(var $=q;$<this._width;$+=V)Z($,Q,this._map[$][Q])}},U._getNeighbors=function K(Z,Q){var V=0;for(var q=0;q<this._dirs.length;q++){var $=this._dirs[q],L=Z+$[0],w=Q+$[1];if(L<0||L>=this._width||w<0||w>=this._height)continue;V+=this._map[L][w]==1?1:0}return V},U.connect=function K(Z,Q,V){if(!Q)Q=0;var q=[],$={},L=1,w=[0,0];if(this._options.topology==6)L=2,w=[0,1];for(var H=0;H<this._height;H++)for(var F=w[H%2];F<this._width;F+=L)if(this._freeSpace(F,H,Q)){var D=[F,H];$[this._pointKey(D)]=D,q.push([F,H])}var R=q[B.getUniformInt(0,q.length-1)],O=this._pointKey(R),j={};j[O]=R,delete $[O],this._findConnected(j,$,[R],!1,Q);while(Object.keys($).length>0){var v=this._getFromTo(j,$),u=v[0],h=v[1],c={};c[this._pointKey(u)]=u,this._findConnected(c,$,[u],!0,Q);var t=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;t.call(this,h,u,j,$,Q,V);for(var J0 in c){var U0=c[J0];this._map[U0[0]][U0[1]]=Q,j[J0]=U0,delete $[J0]}}Z&&this._serviceCallback(Z)},U._getFromTo=function K(Z,Q){var V=[0,0],q=[0,0],$,L=Object.keys(Z),w=Object.keys(Q);for(var H=0;H<5;H++){if(L.length<w.length){var F=L;q=Z[F[B.getUniformInt(0,F.length-1)]],V=this._getClosest(q,Q)}else{var D=w;V=Q[D[B.getUniformInt(0,D.length-1)]],q=this._getClosest(V,Z)}if($=(V[0]-q[0])*(V[0]-q[0])+(V[1]-q[1])*(V[1]-q[1]),$<64)break}return[V,q]},U._getClosest=function K(Z,Q){var V=null,q=null;for(var $ in Q){var L=Q[$],w=(L[0]-Z[0])*(L[0]-Z[0])+(L[1]-Z[1])*(L[1]-Z[1]);if(q==null||w<q)q=w,V=L}return V},U._findConnected=function K(Z,Q,V,q,$){while(V.length>0){var L=V.splice(0,1)[0],w=void 0;if(this._options.topology==6)w=[[L[0]+2,L[1]],[L[0]+1,L[1]-1],[L[0]-1,L[1]-1],[L[0]-2,L[1]],[L[0]-1,L[1]+1],[L[0]+1,L[1]+1]];else w=[[L[0]+1,L[1]],[L[0]-1,L[1]],[L[0],L[1]+1],[L[0],L[1]-1]];for(var H=0;H<w.length;H++){var F=this._pointKey(w[H]);if(Z[F]==null&&this._freeSpace(w[H][0],w[H][1],$)){if(Z[F]=w[H],!q)delete Q[F];V.push(w[H])}}}},U._tunnelToConnected=function K(Z,Q,V,q,$,L){var w,H;if(Q[0]<Z[0])w=Q,H=Z;else w=Z,H=Q;for(var F=w[0];F<=H[0];F++){this._map[F][w[1]]=$;var D=[F,w[1]],R=this._pointKey(D);V[R]=D,delete q[R]}if(L&&w[0]<H[0])L(w,[H[0],w[1]]);var O=H[0];if(Q[1]<Z[1])w=Q,H=Z;else w=Z,H=Q;for(var j=w[1];j<H[1];j++){this._map[O][j]=$;var v=[O,j],u=this._pointKey(v);V[u]=v,delete q[u]}if(L&&w[1]<H[1])L([H[0],w[1]],[H[0],H[1]])},U._tunnelToConnected6=function K(Z,Q,V,q,$,L){var w,H;if(Q[0]<Z[0])w=Q,H=Z;else w=Z,H=Q;var F=w[0],D=w[1];while(!(F==H[0]&&D==H[1])){var R=2;if(D<H[1])D++,R=1;else if(D>H[1])D--,R=1;if(F<H[0])F+=R;else if(F>H[0])F-=R;else if(H[1]%2)F-=R;else F+=R;this._map[F][D]=$;var O=[F,D],j=this._pointKey(O);V[j]=O,delete q[j]}if(L)L(Q,Z)},U._freeSpace=function K(Z,Q,V){return Z>=0&&Z<this._width&&Q>=0&&Q<this._height&&this._map[Z][Q]==V},U._pointKey=function K(Z){return Z[0]+"."+Z[1]},G}(k0),WZ={room:V1,corridor:I1},RZ=function(Y){K0(G,Y);function G(K,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,K,Z)||this,V._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},Q),V._features={room:4,corridor:4},V._map=[],V._featureAttempts=20,V._walls={},V._dug=0,V._digCallback=V._digCallback.bind(x0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(x0(V)),V._isWallCallback=V._isWallCallback.bind(x0(V)),V._priorityWallCallback=V._priorityWallCallback.bind(x0(V)),V}var U=G.prototype;return U.create=function K(Z){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var Q=(this._width-2)*(this._height-2);this._firstRoom();var V=Date.now(),q;do{q=0;var $=Date.now();if($-V>this._options.timeLimit)break;var L=this._findWall();if(!L)break;var w=L.split(","),H=parseInt(w[0]),F=parseInt(w[1]),D=this._getDiggingDirection(H,F);if(!D)continue;var R=0;do if(R++,this._tryFeature(H,F,D[0],D[1])){this._removeSurroundingWalls(H,F),this._removeSurroundingWalls(H-D[0],F-D[1]);break}while(R<this._featureAttempts);for(var O in this._walls)if(this._walls[O]>1)q++}while(this._dug/Q<this._options.dugPercentage||q);if(this._addDoors(),Z)for(var j=0;j<this._width;j++)for(var v=0;v<this._height;v++)Z(j,v,this._map[j][v]);return this._walls={},this._map=[],this},U._digCallback=function K(Z,Q,V){if(V==0||V==2)this._map[Z][Q]=0,this._dug++;else this._walls[Z+","+Q]=1},U._isWallCallback=function K(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},U._canBeDugCallback=function K(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},U._priorityWallCallback=function K(Z,Q){this._walls[Z+","+Q]=2},U._firstRoom=function K(){var Z=Math.floor(this._width/2),Q=Math.floor(this._height/2),V=V1.createRandomCenter(Z,Q,this._options);this._rooms.push(V),V.create(this._digCallback)},U._findWall=function K(){var Z=[],Q=[];for(var V in this._walls){var q=this._walls[V];if(q==2)Q.push(V);else Z.push(V)}var $=Q.length?Q:Z;if(!$.length)return null;var L=B.getItem($.sort());return delete this._walls[L],L},U._tryFeature=function K(Z,Q,V,q){var $=B.getWeightedValue(this._features),L=WZ[$],w=L.createRandomAt(Z,Q,V,q,this._options);if(!w.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(w.create(this._digCallback),w instanceof V1)this._rooms.push(w);if(w instanceof I1)w.createPriorityWalls(this._priorityWallCallback),this._corridors.push(w);return!0},U._removeSurroundingWalls=function K(Z,Q){var V=X0[4];for(var q=0;q<V.length;q++){var $=V[q],L=Z+$[0],w=Q+$[1];delete this._walls[L+","+w],L=Z+2*$[0],w=Q+2*$[1],delete this._walls[L+","+w]}},U._getDiggingDirection=function K(Z,Q){if(Z<=0||Q<=0||Z>=this._width-1||Q>=this._height-1)return null;var V=null,q=X0[4];for(var $=0;$<q.length;$++){var L=q[$],w=Z+L[0],H=Q+L[1];if(!this._map[w][H]){if(V)return null;V=L}}if(!V)return null;return[-V[0],-V[1]]},U._addDoors=function K(){var Z=this._map;function Q($,L){return Z[$][L]==1}for(var V=0;V<this._rooms.length;V++){var q=this._rooms[V];q.clearDoors(),q.addDoors(Q)}},G}(o1);function i1(Y,G,U){U[G[Y+1]]=U[Y],G[U[Y]]=G[Y+1],U[Y]=Y+1,G[Y+1]=Y}function t1(Y,G,U){U[G[Y]]=U[Y],G[U[Y]]=G[Y],U[Y]=Y,G[Y]=Y}var MZ=function(Y){K0(G,Y);function G(){return Y.apply(this,arguments)||this}var U=G.prototype;return U.create=function K(Z){var Q=this._fillMap(1),V=Math.ceil((this._width-2)/2),q=0.375,$=[],L=[];for(var w=0;w<V;w++)$.push(w),L.push(w);$.push(V-1);var H;for(H=1;H+3<this._height;H+=2)for(var F=0;F<V;F++){var D=2*F+1,R=H;if(Q[D][R]=0,F!=$[F+1]&&B.getUniform()>q)i1(F,$,L),Q[D+1][R]=0;if(F!=$[F]&&B.getUniform()>q)t1(F,$,L);else Q[D][R+1]=0}for(var O=0;O<V;O++){var j=2*O+1,v=H;if(Q[j][v]=0,O!=$[O+1]&&(O==$[O]||B.getUniform()>q))i1(O,$,L),Q[j+1][v]=0;t1(O,$,L)}for(var u=0;u<this._width;u++)for(var h=0;h<this._height;h++)Z(u,h,Q[u][h]);return this},G}(k0),OZ=function(Y){K0(G,Y);function G(){var K=Y.apply(this,arguments)||this;return K._stack=[],K._map=[],K}var U=G.prototype;return U.create=function K(Z){var Q=this._width,V=this._height;this._map=[];for(var q=0;q<Q;q++){this._map.push([]);for(var $=0;$<V;$++){var L=q==0||$==0||q+1==Q||$+1==V;this._map[q].push(L?1:0)}}this._stack=[[1,1,Q-2,V-2]],this._process();for(var w=0;w<Q;w++)for(var H=0;H<V;H++)Z(w,H,this._map[w][H]);return this._map=[],this},U._process=function K(){while(this._stack.length){var Z=this._stack.shift();this._partitionRoom(Z)}},U._partitionRoom=function K(Z){var Q=[],V=[];for(var q=Z[0]+1;q<Z[2];q++){var $=this._map[q][Z[1]-1],L=this._map[q][Z[3]+1];if($&&L&&!(q%2))Q.push(q)}for(var w=Z[1]+1;w<Z[3];w++){var H=this._map[Z[0]-1][w],F=this._map[Z[2]+1][w];if(H&&F&&!(w%2))V.push(w)}if(!Q.length||!V.length)return;var D=B.getItem(Q),R=B.getItem(V);this._map[D][R]=1;var O=[],j=[];O.push(j);for(var v=Z[0];v<D;v++)if(this._map[v][R]=1,v%2)j.push([v,R]);j=[],O.push(j);for(var u=D+1;u<=Z[2];u++)if(this._map[u][R]=1,u%2)j.push([u,R]);j=[],O.push(j);for(var h=Z[1];h<R;h++)if(this._map[D][h]=1,h%2)j.push([D,h]);j=[],O.push(j);for(var c=R+1;c<=Z[3];c++)if(this._map[D][c]=1,c%2)j.push([D,c]);var t=B.getItem(O);for(var J0=0;J0<O.length;J0++){var U0=O[J0];if(U0==t)continue;var L0=B.getItem(U0);this._map[L0[0]][L0[1]]=0}this._stack.push([Z[0],Z[1],D-1,R-1]),this._stack.push([D+1,Z[1],Z[2],R-1]),this._stack.push([Z[0],R+1,D-1,Z[3]]),this._stack.push([D+1,R+1,Z[2],Z[3]])},G}(k0),jZ=function(Y){K0(G,Y);function G(K,Z,Q){var V;if(Q===void 0)Q=0;return V=Y.call(this,K,Z)||this,V._regularity=Q,V._map=[],V}var U=G.prototype;return U.create=function K(Z){var Q=this._width,V=this._height,q=this._fillMap(1);Q-=Q%2?1:2,V-=V%2?1:2;var $=0,L=0,w=0,H=0,F=0,D=!1,R=[[0,0],[0,0],[0,0],[0,0]];do{if($=1+2*Math.floor(B.getUniform()*(Q-1)/2),L=1+2*Math.floor(B.getUniform()*(V-1)/2),!F)q[$][L]=0;if(!q[$][L]){this._randomize(R);do{if(Math.floor(B.getUniform()*(this._regularity+1))==0)this._randomize(R);D=!0;for(var O=0;O<4;O++)if(w=$+R[O][0]*2,H=L+R[O][1]*2,this._isFree(q,w,H,Q,V)){q[w][H]=0,q[$+R[O][0]][L+R[O][1]]=0,$=w,L=H,D=!1,F++;break}}while(!D)}}while(F+1<Q*V/4);for(var j=0;j<this._width;j++)for(var v=0;v<this._height;v++)Z(j,v,q[j][v]);return this._map=[],this},U._randomize=function K(Z){for(var Q=0;Q<4;Q++)Z[Q][0]=0,Z[Q][1]=0;switch(Math.floor(B.getUniform()*4)){case 0:Z[0][0]=-1,Z[1][0]=1,Z[2][1]=-1,Z[3][1]=1;break;case 1:Z[3][0]=-1,Z[2][0]=1,Z[1][1]=-1,Z[0][1]=1;break;case 2:Z[2][0]=-1,Z[3][0]=1,Z[0][1]=-1,Z[1][1]=1;break;case 3:Z[1][0]=-1,Z[0][0]=1,Z[3][1]=-1,Z[2][1]=1;break}},U._isFree=function K(Z,Q,V,q,$){if(Q<1||V<1||Q>=q||V>=$)return!1;return Z[Q][V]},G}(k0),CZ=function(Y){K0(G,Y);function G(K,Z,Q){var V=Y.call(this,K,Z)||this;if(V.map=[],V.rooms=[],V.connectedCells=[],Q=Object.assign({cellWidth:3,cellHeight:3},Q),!Q.hasOwnProperty("roomWidth"))Q.roomWidth=V._calculateRoomSize(V._width,Q.cellWidth);if(!Q.hasOwnProperty("roomHeight"))Q.roomHeight=V._calculateRoomSize(V._height,Q.cellHeight);return V._options=Q,V}var U=G.prototype;return U.create=function K(Z){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),Z)for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)Z(Q,V,this.map[Q][V]);return this},U._calculateRoomSize=function K(Z,Q){var V=Math.floor(Z/Q*0.8),q=Math.floor(Z/Q*0.25);if(q<2)q=2;if(V<2)V=2;return[q,V]},U._initRooms=function K(){for(var Z=0;Z<this._options.cellWidth;Z++){this.rooms.push([]);for(var Q=0;Q<this._options.cellHeight;Q++)this.rooms[Z].push({x:0,y:0,width:0,height:0,connections:[],cellx:Z,celly:Q})}},U._connectRooms=function K(){var Z=B.getUniformInt(0,this._options.cellWidth-1),Q=B.getUniformInt(0,this._options.cellHeight-1),V,q,$,L=!1,w,H,F;do{F=[0,2,4,6],F=B.shuffle(F);do{if(L=!1,V=F.pop(),q=Z+X0[8][V][0],$=Q+X0[8][V][1],q<0||q>=this._options.cellWidth)continue;if($<0||$>=this._options.cellHeight)continue;if(w=this.rooms[Z][Q],w.connections.length>0){if(w.connections[0][0]==q&&w.connections[0][1]==$)break}if(H=this.rooms[q][$],H.connections.length==0)H.connections.push([Z,Q]),this.connectedCells.push([q,$]),Z=q,Q=$,L=!0}while(F.length>0&&L==!1)}while(F.length>0)},U._connectUnconnectedRooms=function K(){var Z=this._options.cellWidth,Q=this._options.cellHeight;this.connectedCells=B.shuffle(this.connectedCells);var V,q,$;for(var L=0;L<this._options.cellWidth;L++)for(var w=0;w<this._options.cellHeight;w++)if(V=this.rooms[L][w],V.connections.length==0){var H=[0,2,4,6];H=B.shuffle(H),$=!1;do{var F=H.pop(),D=L+X0[8][F][0],R=w+X0[8][F][1];if(D<0||D>=Z||R<0||R>=Q)continue;if(q=this.rooms[D][R],$=!0,q.connections.length==0)break;for(var O=0;O<q.connections.length;O++)if(q.connections[O][0]==L&&q.connections[O][1]==w){$=!1;break}if($)break}while(H.length);if($)V.connections.push([q.cellx,q.celly]);else console.log("-- Unable to connect room.")}},U._createRandomRoomConnections=function K(){},U._createRooms=function K(){var Z=this._width,Q=this._height,V=this._options.cellWidth,q=this._options.cellHeight,$=Math.floor(this._width/V),L=Math.floor(this._height/q),w,H,F=this._options.roomWidth,D=this._options.roomHeight,R,O,j;for(var v=0;v<V;v++)for(var u=0;u<q;u++){if(R=$*v,O=L*u,R==0)R=1;if(O==0)O=1;if(w=B.getUniformInt(F[0],F[1]),H=B.getUniformInt(D[0],D[1]),u>0){j=this.rooms[v][u-1];while(O-(j.y+j.height)<3)O++}if(v>0){j=this.rooms[v-1][u];while(R-(j.x+j.width)<3)R++}var h=Math.round(B.getUniformInt(0,$-w)/2),c=Math.round(B.getUniformInt(0,L-H)/2);while(R+h+w>=Z)if(h)h--;else w--;while(O+c+H>=Q)if(c)c--;else H--;R=R+h,O=O+c,this.rooms[v][u].x=R,this.rooms[v][u].y=O,this.rooms[v][u].width=w,this.rooms[v][u].height=H;for(var t=R;t<R+w;t++)for(var J0=O;J0<O+H;J0++)this.map[t][J0]=0}},U._getWallPosition=function K(Z,Q){var V,q,$;if(Q==1||Q==3){if(V=B.getUniformInt(Z.x+1,Z.x+Z.width-2),Q==1)q=Z.y-2,$=q+1;else q=Z.y+Z.height+1,$=q-1;this.map[V][$]=0}else{if(q=B.getUniformInt(Z.y+1,Z.y+Z.height-2),Q==2)V=Z.x+Z.width+1,$=V-1;else V=Z.x-2,$=V+1;this.map[$][q]=0}return[V,q]},U._drawCorridor=function K(Z,Q){var V=Q[0]-Z[0],q=Q[1]-Z[1],$=Z[0],L=Z[1],w,H,F,D,R=[],O=Math.abs(V),j=Math.abs(q),v=B.getUniform(),u=v,h=1-v;if(H=V>0?2:6,F=q>0?4:0,O<j)w=Math.ceil(j*u),R.push([F,w]),R.push([H,O]),w=Math.floor(j*h),R.push([F,w]);else w=Math.ceil(O*u),R.push([H,w]),R.push([F,j]),w=Math.floor(O*h),R.push([H,w]);this.map[$][L]=0;while(R.length>0){D=R.pop();while(D[1]>0)$+=X0[8][D[0]][0],L+=X0[8][D[0]][1],this.map[$][L]=0,D[1]=D[1]-1}},U._createCorridors=function K(){var Z=this._options.cellWidth,Q=this._options.cellHeight,V,q,$,L,w;for(var H=0;H<Z;H++)for(var F=0;F<Q;F++){V=this.rooms[H][F];for(var D=0;D<V.connections.length;D++){if(q=V.connections[D],$=this.rooms[q[0]][q[1]],$.cellx>V.cellx)L=2,w=4;else if($.cellx<V.cellx)L=4,w=2;else if($.celly>V.celly)L=3,w=1;else L=1,w=3;this._drawCorridor(this._getWallPosition(V,L),this._getWallPosition($,w))}}},G}(k0),EZ={Arena:PZ,Uniform:FZ,Cellular:DZ,Digger:RZ,EllerMaze:MZ,DividedMaze:OZ,IceyMaze:jZ,Rogue:CZ},AZ=function Y(){},NZ=0.5*(Math.sqrt(3)-1),s0=(3-Math.sqrt(3))/6,SZ=function(Y){K0(G,Y);function G(K){var Z;if(K===void 0)K=256;Z=Y.call(this)||this,Z._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var Q=[];for(var V=0;V<K;V++)Q.push(V);Q=B.shuffle(Q),Z._perms=[],Z._indexes=[];for(var q=0;q<2*K;q++)Z._perms.push(Q[q%K]),Z._indexes.push(Z._perms[q]%Z._gradients.length);return Z}var U=G.prototype;return U.get=function K(Z,Q){var V=this._perms,q=this._indexes,$=V.length/2,L=0,w=0,H=0,F,D=(Z+Q)*NZ,R=Math.floor(Z+D),O=Math.floor(Q+D),j=(R+O)*s0,v=R-j,u=O-j,h=Z-v,c=Q-u,t,J0;if(h>c)t=1,J0=0;else t=0,J0=1;var U0=h-t+s0,L0=c-J0+s0,E0=h-1+2*s0,f1=c-1+2*s0,b1=C(R,$),k1=C(O,$),o0=0.5-h*h-c*c;if(o0>=0){o0*=o0,F=q[b1+V[k1]];var Z6=this._gradients[F];L=o0*o0*(Z6[0]*h+Z6[1]*c)}var a0=0.5-U0*U0-L0*L0;if(a0>=0){a0*=a0,F=q[b1+t+V[k1+J0]];var J6=this._gradients[F];w=a0*a0*(J6[0]*U0+J6[1]*L0)}var i0=0.5-E0*E0-f1*f1;if(i0>=0){i0*=i0,F=q[b1+1+V[k1+1]];var Q6=this._gradients[F];H=i0*i0*(Q6[0]*E0+Q6[1]*f1)}return 70*(L+w+H)},G}(AZ),vZ={Simplex:SZ},e1=function(){function Y(U,K,Z,Q){if(Q===void 0)Q={};if(this._toX=U,this._toY=K,this._passableCallback=Z,this._options=Object.assign({topology:8},Q),this._dirs=X0[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var G=Y.prototype;return G._getNeighbors=function U(K,Z){var Q=[];for(var V=0;V<this._dirs.length;V++){var q=this._dirs[V],$=K+q[0],L=Z+q[1];if(!this._passableCallback($,L))continue;Q.push([$,L])}return Q},Y}(),IZ=function(Y){K0(G,Y);function G(K,Z,Q,V){var q=Y.call(this,K,Z,Q,V)||this;return q._computed={},q._todo=[],q._add(K,Z,null),q}var U=G.prototype;return U.compute=function K(Z,Q,V){var q=Z+","+Q;if(!(q in this._computed))this._compute(Z,Q);if(!(q in this._computed))return;var $=this._computed[q];while($)V($.x,$.y),$=$.prev},U._compute=function K(Z,Q){while(this._todo.length){var V=this._todo.shift();if(V.x==Z&&V.y==Q)return;var q=this._getNeighbors(V.x,V.y);for(var $=0;$<q.length;$++){var L=q[$],w=L[0],H=L[1],F=w+","+H;if(F in this._computed)continue;this._add(w,H,V)}}},U._add=function K(Z,Q,V){var q={x:Z,y:Q,prev:V};this._computed[Z+","+Q]=q,this._todo.push(q)},G}(e1),fZ=function(Y){K0(G,Y);function G(K,Z,Q,V){var q;if(V===void 0)V={};return q=Y.call(this,K,Z,Q,V)||this,q._todo=[],q._done={},q}var U=G.prototype;return U.compute=function K(Z,Q,V){this._todo=[],this._done={},this._fromX=Z,this._fromY=Q,this._add(this._toX,this._toY,null);while(this._todo.length){var q=this._todo.shift(),$=q.x+","+q.y;if($ in this._done)continue;if(this._done[$]=q,q.x==Z&&q.y==Q)break;var L=this._getNeighbors(q.x,q.y);for(var w=0;w<L.length;w++){var H=L[w],F=H[0],D=H[1],R=F+","+D;if(R in this._done)continue;this._add(F,D,q)}}var O=this._done[Z+","+Q];if(!O)return;while(O)V(O.x,O.y),O=O.prev},U._add=function K(Z,Q,V){var q=this._distance(Z,Q),$={x:Z,y:Q,prev:V,g:V?V.g+1:0,h:q},L=$.g+$.h;for(var w=0;w<this._todo.length;w++){var H=this._todo[w],F=H.g+H.h;if(L<F||L==F&&q<H.h){this._todo.splice(w,0,$);return}}this._todo.push($)},U._distance=function K(Z,Q){switch(this._options.topology){case 4:return Math.abs(Z-this._fromX)+Math.abs(Q-this._fromY);case 6:var V=Math.abs(Z-this._fromX),q=Math.abs(Q-this._fromY);return q+Math.max(0,(V-q)/2);case 8:return Math.max(Math.abs(Z-this._fromX),Math.abs(Q-this._fromY))}},G}(e1),bZ={Dijkstra:IZ,AStar:fZ},kZ=function(){function Y(U){this._scheduler=U,this._lock=1}var G=Y.prototype;return G.start=function U(){return this.unlock()},G.lock=function U(){return this._lock++,this},G.unlock=function U(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var K=this._scheduler.next();if(!K)return this.lock();var Z=K.act();if(Z&&Z.then)this.lock(),Z.then(this.unlock.bind(this))}return this},Y}(),uZ=function(){function Y(U,K){if(K===void 0)K={};this._reflectivityCallback=U,this._options={},K=Object.assign({passes:1,emissionThreshold:100,range:10},K),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(K)}var G=Y.prototype;return G.setOptions=function U(K){if(Object.assign(this._options,K),K&&K.range)this.reset();return this},G.setFOV=function U(K){return this._fov=K,this._fovCache={},this},G.setLight=function U(K,Z,Q){var V=K+","+Z;if(Q)this._lights[V]=typeof Q=="string"?g(Q):Q;else delete this._lights[V];return this},G.clearLights=function U(){this._lights={}},G.reset=function U(){return this._reflectivityCache={},this._fovCache={},this},G.compute=function U(K){var Z={},Q={},V={};for(var q in this._lights){var $=this._lights[q];Q[q]=[0,0,0],m(Q[q],$)}for(var L=0;L<this._options.passes;L++){if(this._emitLight(Q,V,Z),L+1==this._options.passes)continue;Q=this._computeEmitters(V,Z)}for(var w in V){var H=w.split(","),F=parseInt(H[0]),D=parseInt(H[1]);K(F,D,V[w])}return this},G._emitLight=function U(K,Z,Q){for(var V in K){var q=V.split(","),$=parseInt(q[0]),L=parseInt(q[1]);this._emitLightFromCell($,L,K[V],Z),Q[V]=1}return this},G._computeEmitters=function U(K,Z){var Q={};for(var V in K){if(V in Z)continue;var q=K[V],$=void 0;if(V in this._reflectivityCache)$=this._reflectivityCache[V];else{var L=V.split(","),w=parseInt(L[0]),H=parseInt(L[1]);$=this._reflectivityCallback(w,H),this._reflectivityCache[V]=$}if($==0)continue;var F=[0,0,0],D=0;for(var R=0;R<3;R++){var O=Math.round(q[R]*$);F[R]=O,D+=O}if(D>this._options.emissionThreshold)Q[V]=F}return Q},G._emitLightFromCell=function U(K,Z,Q,V){var q=K+","+Z,$;if(q in this._fovCache)$=this._fovCache[q];else $=this._updateFOV(K,Z);for(var L in $){var w=$[L],H=void 0;if(L in V)H=V[L];else H=[0,0,0],V[L]=H;for(var F=0;F<3;F++)H[F]+=Math.round(Q[F]*w)}return this},G._updateFOV=function U(K,Z){var Q=K+","+Z,V={};this._fovCache[Q]=V;var q=this._options.range;function $(L,w,H,F){var D=L+","+w,R=F*(1-H/q);if(R==0)return;V[D]=R}return this._fov.compute(K,Z,q,$.bind(this)),V},Y}(),TZ=n,gZ=s,hZ=VZ;J.Color=gZ,J.DEFAULT_HEIGHT=N1,J.DEFAULT_WIDTH=A1,J.DIRS=X0,J.Display=y0,J.Engine=kZ,J.EventQueue=s1,J.FOV=HZ,J.KEYS=KZ,J.Lighting=uZ,J.Map=EZ,J.Noise=vZ,J.Path=bZ,J.RNG=B,J.Scheduler=GZ,J.StringGenerator=UZ,J.Text=hZ,J.Util=TZ,Object.defineProperty(J,"__esModule",{value:!0})})});var cZ=typeof window!=="undefined"?window.innerWidth:0,dZ=typeof window!=="undefined"?window.innerHeight:0;var o={cameraWidth:Math.floor(cZ/16),cameraHeight:Math.floor(dZ/16),chatLogMaxSize:100,chatLogMaxDisplaySize:10,debug:!0,fontSize:16,highlightEnemy:!0,showGrid:!0,showUI:!0,zoom:1},T1={WIDTH:1024,HEIGHT:1024},B0={width:Math.floor(o.cameraWidth*(1/o.zoom)),height:Math.floor(o.cameraHeight*(1/o.zoom)),bg:"transparent",fontSize:Math.floor(o.fontSize*o.zoom),layout:"tile-gl",tileWidth:16,tileHeight:16,tileSet:null,tileMap:null,tileColorize:!0};function K6(J,z){let X=J.entities[z];return`DEBUG: ${z} at ${X.mapId},${X.x},${X.y}`}class K1{name;description;energyDelta;constructor(J,z,X=0){this.name=J,this.description=z,this.energyDelta=X}}class t0{name;description;constructor(J,z){this.name=J,this.description=z}}class M0{key;description;constructor(J,z){this.key=J,this.description=z}}class p0{name;description;constructor(J,z){this.name=J,this.description=z}}class O0{name;description;icon;color;energyMax;unlockCondition;constructor(J,z,X,B=100){this.name=J,this.description=z,this.icon=X,this.energyMax=B,this.color="white",this.unlockCondition=null}}class q1{name;description;color;constructor(J,z,X){this.name=J,this.description=z,this.color=X}}class H0{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(J,z,X,B="cyberyellow",P=0,M=0,C=0,I=0,N=0,b=[]){this.name=J,this.description=z,this.icon=X,this.color=B,this.energyDelta=P,this.matter=M,this.gold=C,this.damage=I,this.energyCost=N,this.effects=b}}class r{name;description;icon;fg;bg;energyDelta;constructor(J,z,X=null,B="white",P="black",M=0){this.name=J,this.description=z,this.icon=X,this.fg=B,this.bg=P,this.energyDelta=M}}var W={actions:{Enter:new K1("Enter","Enter a portal or plant atmosphere"),Launch:new K1("Launch","Launch into space",-10),Wait:new K1("Wait","Wait one turn in place")},ais:{aggrorange:new t0("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new t0("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new t0("guardian","Idles at a position and only fights back if engaged"),interactenrage:new t0("interactenrage","Gets hostile when getting talked to too often!")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new M0("N","Move/interact/combat north"),E:new M0("E","Move/interact/combat east"),S:new M0("S","Move/interact/combat south"),W:new M0("W","Move/interact/combat west"),A:new M0("A","Primary action, confirm"),B:new M0("B","Take a break, cancel"),"1":new M0("1","Secondary action, first quick slot"),"2":new M0("2","Tertiary action, second quick slot"),M:new M0("M","Menu"),"#":new M0("#","Open prompt")},dialogs:{bot_bar_aerobot_backstage:"Huh? How did you get here?",bot_bar_aerobot_charger:"Feel free to recharge on those chargepads and enjoy the show.",bot_bar_aerobot_spa_down:"Have you been to our shop, yet?",bot_bar_aerobot_spa_up:"Ahhhh, so refreshing!",bot_bar_aerobot_welcome:"Welcome to the Bot Bar. How may we serve you?",bot_dormitory_aerobot_down:"Would you please go to your own pod?",bot_dormitory_aerobot_up:"Pod, sweet pod!",bot_dormitory_workbot_left:"This pod is taken, go away!",bot_dormitory_workbot_right:"Brzzzt! Brzzzt!",bot_factory_workbot_assembly:"The assembly line is unblocked!",bot_factory_workbot_forebot:"What are you doing here? Get back to work!",bot_factory_workbot_sewers:"Sewage water is spilling over again.",bot_factory_workbot_workwork:"Work, work!",bot_factory_workbot_wrench:"I lost a wrench somewhere here...",bot_prison_aerobot:"I'm innocent! I'm innocent! I'm innocent! Beep!",bot_prison_workbot:"Thanks for freeing me! Guess I don't need this Pickaxe anymore...",bot_stadium_botracing:"Now this is botracing!",bot_station_pioneer:"You shall not pass!",manual_spirit:"Weeee!",manual_aerobot:"Huh? Why don't you have a hull?",manual_workbot:"Work, work!",manual_cleaner:"Follow the rules! Okay?",manual_pioneer:"Don't talk to me, weakling!",shop_instance_aerobot_shopper:"It's shiny!!!",shop_instance_shopkeeper:"Welcome! What does your engine desire?",shop_instance_workbot_shopper:"This shop is not so secret after all..."},effects:{Recharger:new p0("Recharger","Doubles energy gained from chargepads"),RockCrusher:new p0("Rock Crusher","Mines rock"),Screwing:new p0("Screwing","Unscrews the sewer portal covers"),WallCrusher:new p0("Wall Crusher","Tears down weak walls"),WaterShield:new p0("Water Shield","Reduces damage taken from water")},entities:{movableboulder:new O0("Boulder","A movable rock","o",2),movablebox:new O0("Box","A movable box","x",2),Spirit:new O0("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new O0("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new O0("WorkBot","Basic factory worker","B"),Cleaner:new O0("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new O0("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Valkyrie:new O0("Valkyrie","Airbourne war logistics","V",160),Pioneer:new O0("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200)},factions:{Spirits:new q1("Spirits","Default player faction","white"),Pyrates:new q1("Pyrates","Default enemy faction","cybermagenta"),Guardians:new q1("Guardians","Bot station guardians","cybercyan")},items:{battery:new H0("Battery","Increases maximum energy","b","cyberyellow",10),chest:new H0("Chest","A chest. What might be inside?","i","cyberyellow"),energy:new H0("Energy","Energy pack","e","cyberyellow",10),gold:new H0("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new H0("Goo","A minor matter source","goo","gray",0,1),junk:new H0("Junk","Broken bot","%","gray",0,1),matter:new H0("Matter","A pile of stuff","m","gray",0,100),broom:new H0("Broom","Sweeps the floor","ib","cyberyellow",0,0,0,-10,-1),hammer:new H0("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["Wall Crusher"]),pickaxe:new H0("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["Rock Crusher"]),shocker:new H0("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1,["Recharger"]),trident:new H0("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["Water Shield"]),wrench:new H0("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1,["Screwing"])},maps:{bot_bar:`!
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
!!spawn 35 3 WorkBot faction=Spirits name=ForeBot dialog=bot_factory_workbot_forebot equip=wrench ai=interactenrage
!!# wall
!!+ wallweak
!!~ water
!!- watersewage
!!. void
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
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:o.showGrid?new r("void","Just nothing here",".","gray"):new r("void","Just nothing here"),voidtrue:new r("voidtrue","Really nothing here and you shouldn't get there ever!","_"),voidhidden:new r("voidhidden","Looks like a wall, but isn't!","#","gray","black"),water:new r("water","Rust and other dangers await","~","cybercyan","cyberblue",-2),watersewage:new r("watersewage","Rust, goo and other dangers await","~~","cyberyellow","cybergreen",-4),rock:new r("rock","Hidden treasures may await","'","white","gray"),tree:new r("tree","Lots of trees make a forest","t","brown","black"),wall:new r("wall","A strong wall","#","gray","black"),wallstatueaerobot:new r("wallstatueaerobot","A small statue looking like an AeroBot","sa","gray","black"),wallstatuecleaner:new r("wallstatuecleaner","A small statue looking like a Cleaner","sc","gray","black"),wallstatuepioneer:new r("wallstatuepioneer","A small statue looking like a Pioneer","sp","gray","black"),wallstatueworkbot:new r("wallstatueworkbot","A small statue looking like a WorkBot","sb","gray","black"),wallweak:new r("wallweak","A weakened wall","+","gray","black"),chargepad:new r("chargepad","Recharges energy and health","=","cyberyellow","black",2),movenorth:new r("movenorth","Moves you north","^^","cyberyellow"),moveeast:new r("moveeast","Moves you east",">>","cyberyellow"),movesouth:new r("movesouth","Moves you south","vv","cyberyellow"),movewest:new r("movewest","Moves you west","<<","cyberyellow"),portal:new r("portal","Gateway to another map","O","cyberyellow","gray"),portalclosed:new r("portalclosed","Closed gateway to another map","Oc","black","gray"),portalhidden:new r("portalhidden","Hidden gateway to another map","#","gray","black"),portallauncher:new r("portallauncher","Launches into space","O","cyberyellow","gray"),portalsewers:new r("portalsewers","Needs some tool to open","#~","gray","black"),portalstartworkbot:new r("portalstartworkbot","Start playing as a WorkBot","OB","white"),portalstartaerobot:new r("portalstartaerobot","Start playing as a AeroBot","OA","white"),"_portalstart?":new r("_portalstart?","Not unlocked, yet!","O?","white"),spacerock:new r("spacerock","Mountains as seen from space, non-blocking!","'s","white","gray"),spacetree:new r("spacetree","Forest as seen from space","ts","brown","darkgray"),spacewater:new r("spacewater","Water as seen from space, not dangerous!","~s","cybercyan","cyberblue"),spacevoid:new r("spacevoid","Void/ground as seen from space",".s","darkgray","darkgray"),spacevoidstarwhite:new r("spacevoidstarwhite","Space with a white background star",".w","white"),spacevoidstaryellow:new r("spacevoidstaryellow","Space with a yellow background star",".y","cyberyellow"),sun:new r("sun","It's hot, really hot!","§","cyberyellow","cyberyellow",-100),terminal:new r("terminal","A computer terminal","$","cyberyellow"),tv:new r("tv","A big billboard screen","!","black","cyberyellow")},uitexts:{}};function q6(J){if(Object.hasOwn(W.dialogs,J))return W.dialogs[J];return`TODO: ${J} needs localization!`}function w0(J,z){return J.chatLog.push(z),J.chatLog=J.chatLog.slice(-o.chatLogMaxSize),J}function F0(J,z,X,B,P=0,M=0,C={}){let I={id:z,type:X,mapId:B,x:P,y:M,energy:10,energyMax:10,gold:0,matter:0,message:null,interactions:0,options:C};return J=U1(J,I,X),J.entities[I.id]=I,J}function z1(J,z){return J.entities[z]=void 0,delete J.entities[z],J.tools[z]=void 0,J}function u0(J,z){let X=Object.keys(J.entities),B=[];for(let P=0;P<X.length;P++){let M=J.entities[X[P]];if(M.mapId===z)B.push(M)}return B}function z6(J,z,X,B){let P=u0(J,z).filter((M)=>M.x===X&&M.y===B);if(P.length>0)return P[0];return null}function U1(J,z,X){if(z.type=X,z.energy=X.energyMax,z.energyMax=X.energyMax,z.gold=0,z.matter=0,!j0(z))J.tools[z.id]=void 0;return J}function U6(J,z,X){if(z===X)return J;if(z.options.faction===X.options.faction){if(X.options.dialog){let B=X?.options?.name?X.options.name:X.type.name;J=w0(J,B+": "+q6(X.options.dialog)),X.interactions++}}else{let B=z.id,P=X.id;J._combatQueue.push({entityId:B,otherEntityId:P})}if(X.interactions>=3&&X.options?.ai===W.ais.interactenrage)X.options.faction=W.factions.Pyrates;return J}function j0(J){return J.type===W.entities.movableboulder||J.type===W.entities.movablebox}function $1(J,z){let X={A:W.actions.Wait,B:W.actions.Wait};if(!!J.lastSpacePositionByEntity[z.id]&&z.energy>Math.abs(W.actions.Launch.energyDelta))X.A=W.actions.Launch;let P=J.maps[z.mapId].getTile(z.x,z.y);if(!!P.options.mapId&&"x"in P.options&&"y"in P.options)X.A=W.actions.Enter;return X}function g1(J,z,X){let B=J._eventSubscribers[z];if(B)for(let P=0;P<B.length;P++){let M=B[P];J=M(J,X)}return J}function h1(J,z,X){if(z in J._eventSubscribers);else J._eventSubscribers[z]=[];return J._eventSubscribers[z].push(X),J}function T0(J,z,X,B=0,P=0){let C={id:X1(X,B,P),type:z,mapId:X,x:B,y:P,energy:z.energyDelta,gold:z.gold,matter:z.matter};return J.items[C.id]=C,J}function $6(J,z,X,B=0,P=0){let M=W.items.junk,I={id:X1(X,B,P),type:M,mapId:X,x:B,y:P,energy:M.energyDelta,gold:M.gold,matter:z};return J.items[I.id]=I,J}function e0(J,z,X,B=0,P=0,M,C){let N={id:X1(X,B,P),type:z,mapId:X,x:B,y:P,energy:z.energyDelta,gold:M,matter:C};return J.items[N.id]=N,J}function X1(J,z,X){return"item,"+J+","+z+","+X}function x1(J,z){return J.items[z]=void 0,delete J.items[z],J}function B1(J,z){let X=Object.keys(J.items),B=[];for(let P=0;P<X.length;P++){let M=J.items[X[P]];if(M.mapId===z)B.push(M)}return B}function X6(J,z,X,B){let P=X1(z,X,B);if(P in J.items)return J.items[P];return null}function G1(J,z){return J.tools[z]}function B6(J,z,X){if(j0(z))return J;if(!nZ(z,X))return J;if(lZ(X))J=_1(J,z.id,X.type);else{if(X.type===W.items.battery)z.energyMax+=X.energy;if(J._energyQueue.push({entityId:z.id,energyDelta:X.energy}),z.id.startsWith("player"))J=w0(J,`Picked up ${X.type.name}.`)}return z.gold+=X.gold,z.matter+=X.matter,x1(J,X.id),J}function _1(J,z,X){let B={type:X};if(J.tools[z]=B,z.startsWith("player"))J=w0(J,`Equipped ${X.name}.`);return J}function lZ(J){return J.type.energyCost<0}function nZ(J,z){return J.gold+z.gold>=0&&J.matter+z.matter>=0}/*!
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
 */var rZ=function(J){var z={};function X(B){if(z[B])return z[B].exports;var P=z[B]={i:B,l:!1,exports:{}};return J[B].call(P.exports,P,P.exports,X),P.l=!0,P.exports}return X.m=J,X.c=z,X.d=function(B,P,M){X.o(B,P)||Object.defineProperty(B,P,{enumerable:!0,get:M})},X.r=function(B){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(B,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(B,"__esModule",{value:!0})},X.t=function(B,P){if(1&P&&(B=X(B)),8&P)return B;if(4&P&&typeof B=="object"&&B&&B.__esModule)return B;var M=Object.create(null);if(X.r(M),Object.defineProperty(M,"default",{enumerable:!0,value:B}),2&P&&typeof B!="string")for(var C in B)X.d(M,C,function(I){return B[I]}.bind(null,C));return M},X.n=function(B){var P=B&&B.__esModule?function(){return B.default}:function(){return B};return X.d(P,"a",P),P},X.o=function(B,P){return Object.prototype.hasOwnProperty.call(B,P)},X.p="/bin/",X(X.s=0)}([function(J,z,X){var B={},P=X(1),M=X(2),C=X(3);J.exports=B;var I=1;B.js=function(){var N,b,n,Q0=!1,a={},l={},g={},_={},m=!0,d={},p=[],z0=Number.MAX_VALUE,G0=!1;this.setAcceptableTiles=function(f){f instanceof Array?n=f:!isNaN(parseFloat(f))&&isFinite(f)&&(n=[f])},this.enableSync=function(){Q0=!0},this.disableSync=function(){Q0=!1},this.enableDiagonals=function(){G0=!0},this.disableDiagonals=function(){G0=!1},this.setGrid=function(f){N=f;for(var S=0;S<N.length;S++)for(var E=0;E<N[0].length;E++)l[N[S][E]]||(l[N[S][E]]=1)},this.setTileCost=function(f,S){l[f]=S},this.setAdditionalPointCost=function(f,S,E){g[S]===void 0&&(g[S]={}),g[S][f]=E},this.removeAdditionalPointCost=function(f,S){g[S]!==void 0&&delete g[S][f]},this.removeAllAdditionalPointCosts=function(){g={}},this.setDirectionalCondition=function(f,S,E){_[S]===void 0&&(_[S]={}),_[S][f]=E},this.removeAllDirectionalConditions=function(){_={}},this.setIterationsPerCalculation=function(f){z0=f},this.avoidAdditionalPoint=function(f,S){a[S]===void 0&&(a[S]={}),a[S][f]=1},this.stopAvoidingAdditionalPoint=function(f,S){a[S]!==void 0&&delete a[S][f]},this.enableCornerCutting=function(){m=!0},this.disableCornerCutting=function(){m=!1},this.stopAvoidingAllAdditionalPoints=function(){a={}},this.findPath=function(f,S,E,s,Z0){var V0=function(S0){Q0?Z0(S0):setTimeout(function(){Z0(S0)})};if(n===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(N===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(f<0||S<0||E<0||s<0||f>N[0].length-1||S>N.length-1||E>N[0].length-1||s>N.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(f!==E||S!==s){for(var P0=N[s][E],$0=!1,C0=0;C0<n.length;C0++)if(P0===n[C0]){$0=!0;break}if($0!==!1){var Y0=new P;Y0.openList=new C(function(S0,m0){return S0.bestGuessDistance()-m0.bestGuessDistance()}),Y0.isDoneCalculating=!1,Y0.nodeHash={},Y0.startX=f,Y0.startY=S,Y0.endX=E,Y0.endY=s,Y0.callback=V0,Y0.openList.push(e(Y0,Y0.startX,Y0.startY,null,1));var r0=I++;return d[r0]=Y0,p.push(r0),r0}V0(null)}else V0([])},this.cancelPath=function(f){return f in d&&(delete d[f],!0)},this.calculate=function(){if(p.length!==0&&N!==void 0&&n!==void 0)for(b=0;b<z0;b++){if(p.length===0)return;Q0&&(b=0);var f=p[0],S=d[f];if(S!==void 0)if(S.openList.size()!==0){var E=S.openList.pop();if(S.endX!==E.x||S.endY!==E.y)E.list=0,E.y>0&&A(S,E,0,-1,1*x(E.x,E.y-1)),E.x<N[0].length-1&&A(S,E,1,0,1*x(E.x+1,E.y)),E.y<N.length-1&&A(S,E,0,1,1*x(E.x,E.y+1)),E.x>0&&A(S,E,-1,0,1*x(E.x-1,E.y)),G0&&(E.x>0&&E.y>0&&(m||k(N,n,E.x,E.y-1,E)&&k(N,n,E.x-1,E.y,E))&&A(S,E,-1,-1,1.4*x(E.x-1,E.y-1)),E.x<N[0].length-1&&E.y<N.length-1&&(m||k(N,n,E.x,E.y+1,E)&&k(N,n,E.x+1,E.y,E))&&A(S,E,1,1,1.4*x(E.x+1,E.y+1)),E.x<N[0].length-1&&E.y>0&&(m||k(N,n,E.x,E.y-1,E)&&k(N,n,E.x+1,E.y,E))&&A(S,E,1,-1,1.4*x(E.x+1,E.y-1)),E.x>0&&E.y<N.length-1&&(m||k(N,n,E.x,E.y+1,E)&&k(N,n,E.x-1,E.y,E))&&A(S,E,-1,1,1.4*x(E.x-1,E.y+1)));else{var s=[];s.push({x:E.x,y:E.y});for(var Z0=E.parent;Z0!=null;)s.push({x:Z0.x,y:Z0.y}),Z0=Z0.parent;s.reverse();var V0=s;S.callback(V0),delete d[f],p.shift()}}else S.callback(null),delete d[f],p.shift();else p.shift()}};var A=function(f,S,E,s,Z0){var V0=S.x+E,P0=S.y+s;if((a[P0]===void 0||a[P0][V0]===void 0)&&k(N,n,V0,P0,S)){var $0=e(f,V0,P0,S,Z0);$0.list===void 0?($0.list=1,f.openList.push($0)):S.costSoFar+Z0<$0.costSoFar&&($0.costSoFar=S.costSoFar+Z0,$0.parent=S,f.openList.updateItem($0))}},k=function(f,S,E,s,Z0){var V0=_[s]&&_[s][E];if(V0){var P0=T(Z0.x-E,Z0.y-s);if(!function(){for(var C0=0;C0<V0.length;C0++)if(V0[C0]===P0)return!0;return!1}())return!1}for(var $0=0;$0<S.length;$0++)if(f[s][E]===S[$0])return!0;return!1},T=function(f,S){if(f===0&&S===-1)return B.TOP;if(f===1&&S===-1)return B.TOP_RIGHT;if(f===1&&S===0)return B.RIGHT;if(f===1&&S===1)return B.BOTTOM_RIGHT;if(f===0&&S===1)return B.BOTTOM;if(f===-1&&S===1)return B.BOTTOM_LEFT;if(f===-1&&S===0)return B.LEFT;if(f===-1&&S===-1)return B.TOP_LEFT;throw new Error("These differences are not valid: "+f+", "+S)},x=function(f,S){return g[S]&&g[S][f]||l[N[S][f]]},e=function(f,S,E,s,Z0){if(f.nodeHash[E]!==void 0){if(f.nodeHash[E][S]!==void 0)return f.nodeHash[E][S]}else f.nodeHash[E]={};var V0=i(S,E,f.endX,f.endY);if(s!==null)var P0=s.costSoFar+Z0;else P0=0;var $0=new M(s,S,E,P0,V0);return f.nodeHash[E][S]=$0,$0},i=function(f,S,E,s){var Z0,V0;return G0?(Z0=Math.abs(f-E))<(V0=Math.abs(S-s))?1.4*Z0+V0:1.4*V0+Z0:(Z0=Math.abs(f-E))+(V0=Math.abs(S-s))}},B.TOP="TOP",B.TOP_RIGHT="TOP_RIGHT",B.RIGHT="RIGHT",B.BOTTOM_RIGHT="BOTTOM_RIGHT",B.BOTTOM="BOTTOM",B.BOTTOM_LEFT="BOTTOM_LEFT",B.LEFT="LEFT",B.TOP_LEFT="TOP_LEFT"},function(J,z){J.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(J,z){J.exports=function(X,B,P,M,C){this.parent=X,this.x=B,this.y=P,this.costSoFar=M,this.simpleDistanceToTarget=C,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(J,z,X){J.exports=X(4)},function(J,z,X){var B,P,M;(function(){var C,I,N,b,n,Q0,a,l,g,_,m,d,p,z0,G0;N=Math.floor,_=Math.min,I=function(A,k){return A<k?-1:A>k?1:0},g=function(A,k,T,x,e){var i;if(T==null&&(T=0),e==null&&(e=I),T<0)throw new Error("lo must be non-negative");for(x==null&&(x=A.length);T<x;)e(k,A[i=N((T+x)/2)])<0?x=i:T=i+1;return[].splice.apply(A,[T,T-T].concat(k)),k},Q0=function(A,k,T){return T==null&&(T=I),A.push(k),z0(A,0,A.length-1,T)},n=function(A,k){var T,x;return k==null&&(k=I),T=A.pop(),A.length?(x=A[0],A[0]=T,G0(A,0,k)):x=T,x},l=function(A,k,T){var x;return T==null&&(T=I),x=A[0],A[0]=k,G0(A,0,T),x},a=function(A,k,T){var x;return T==null&&(T=I),A.length&&T(A[0],k)<0&&(k=(x=[A[0],k])[0],A[0]=x[1],G0(A,0,T)),k},b=function(A,k){var T,x,e,i,f,S;for(k==null&&(k=I),f=[],x=0,e=(i=function(){S=[];for(var E=0,s=N(A.length/2);0<=s?E<s:E>s;0<=s?E++:E--)S.push(E);return S}.apply(this).reverse()).length;x<e;x++)T=i[x],f.push(G0(A,T,k));return f},p=function(A,k,T){var x;if(T==null&&(T=I),(x=A.indexOf(k))!==-1)return z0(A,0,x,T),G0(A,x,T)},m=function(A,k,T){var x,e,i,f,S;if(T==null&&(T=I),!(e=A.slice(0,k)).length)return e;for(b(e,T),i=0,f=(S=A.slice(k)).length;i<f;i++)x=S[i],a(e,x,T);return e.sort(T).reverse()},d=function(A,k,T){var x,e,i,f,S,E,s,Z0,V0;if(T==null&&(T=I),10*k<=A.length){if(!(i=A.slice(0,k).sort(T)).length)return i;for(e=i[i.length-1],f=0,E=(s=A.slice(k)).length;f<E;f++)T(x=s[f],e)<0&&(g(i,x,0,null,T),i.pop(),e=i[i.length-1]);return i}for(b(A,T),V0=[],S=0,Z0=_(k,A.length);0<=Z0?S<Z0:S>Z0;0<=Z0?++S:--S)V0.push(n(A,T));return V0},z0=function(A,k,T,x){var e,i,f;for(x==null&&(x=I),e=A[T];T>k&&x(e,i=A[f=T-1>>1])<0;)A[T]=i,T=f;return A[T]=e},G0=function(A,k,T){var x,e,i,f,S;for(T==null&&(T=I),e=A.length,S=k,i=A[k],x=2*k+1;x<e;)(f=x+1)<e&&!(T(A[x],A[f])<0)&&(x=f),A[k]=A[x],x=2*(k=x)+1;return A[k]=i,z0(A,S,k,T)},C=function(){function A(k){this.cmp=k!=null?k:I,this.nodes=[]}return A.push=Q0,A.pop=n,A.replace=l,A.pushpop=a,A.heapify=b,A.updateItem=p,A.nlargest=m,A.nsmallest=d,A.prototype.push=function(k){return Q0(this.nodes,k,this.cmp)},A.prototype.pop=function(){return n(this.nodes,this.cmp)},A.prototype.peek=function(){return this.nodes[0]},A.prototype.contains=function(k){return this.nodes.indexOf(k)!==-1},A.prototype.replace=function(k){return l(this.nodes,k,this.cmp)},A.prototype.pushpop=function(k){return a(this.nodes,k,this.cmp)},A.prototype.heapify=function(){return b(this.nodes,this.cmp)},A.prototype.updateItem=function(k){return p(this.nodes,k,this.cmp)},A.prototype.clear=function(){return this.nodes=[]},A.prototype.empty=function(){return this.nodes.length===0},A.prototype.size=function(){return this.nodes.length},A.prototype.clone=function(){var k;return(k=new A).nodes=this.nodes.slice(0),k},A.prototype.toArray=function(){return this.nodes.slice(0)},A.prototype.insert=A.prototype.push,A.prototype.top=A.prototype.peek,A.prototype.front=A.prototype.peek,A.prototype.has=A.prototype.contains,A.prototype.copy=A.prototype.clone,A}(),P=[],(M=typeof(B=function(){return C})=="function"?B.apply(z,P):B)===void 0||(J.exports=M)}).call(this)}]);function G6(J,z,X,B,P){let M=new rZ.js;M.setGrid(J),M.setAcceptableTiles([0]),M.enableSync();let C=null;return M.findPath(z,X,B,P,function(I){C=I}),M.calculate(),C}function D0(){return"player"}function Y6(J,z,X,B){return Math.abs(J-X)+Math.abs(z-B)}function Y1(J){return[...Array(J).keys()]}function w6(J){let z=sZ(J),X=J.entities[D0()];for(let B=0;B<z.length;B++){let P=z[B],M=J.entities[P],C=J._AIs[P],I=Y6(X.x,X.y,M.x,M.y);if(X.options.faction!==M.options.faction&&I<=C.aggroRange){let N=J.maps[J.currentMapId].asMovementMap(),b=G6(N,M.x,M.y,X.x,X.y);if(b){if(b=b.slice(1),b.length>I)b=null}C.path=b}if(!!M.message&&M.message.includes("OBEY"));}for(let B=0;B<z.length;B++){let P=z[B],M=J.entities[P],C=J._AIs[P];if(C.path){let I=C.path[0],N=I.x-M.x,b=I.y-M.y;J=W0(J,M,N,b)}}return J}function sZ(J){let z=u0(J,J.currentMapId),X=[];for(let B=0;B<z.length;B++){let P=z[B];if(P.options.ai)X.push(P.id)}return X}function L6(J,z,X){let B=J.entities[z],P=8;switch(X){case W.ais.aggrorange:P=8;break;case W.ais.aggrorangeshort:P=2;break;case W.ais.guardian:P=1;break;case W.ais.interactenrage:P=2;break;default:}return J._AIs[z]={entityId:z,type:X,aggroRange:P,startMap:B.mapId,startX:B.x,startY:B.y,path:null},J}function w1(J,z){return J._AIs[z]=void 0,delete J._AIs[z],J}function P6(J){let z=void 0;while(typeof(z=J._despawnQueue.shift())!=="undefined")J=z1(J,z),J=w1(J,z);return J}function F6(J){return J}class c0{mapId;x;y;entityOrItemName;options;constructor(J,z,X,B,P={}){this.mapId=J,this.x=z,this.y=X,this.entityOrItemName=B,this.options=P}generateId(){return this.mapId+","+this.entityOrItemName+","+this.x+","+this.y+"/g"}}function Z1(J,z){if(oZ(z.entityOrItemName)){let X=z.options;if(Object.hasOwn(X,"ai"))X.ai=W.ais[X.ai];if(Object.hasOwn(X,"faction"))X.faction=W.factions[X.faction];let B=z.generateId();if(J=F0(J,B,W.entities[z.entityOrItemName],z.mapId,z.x,z.y,X),Object.hasOwn(X,"equip")&&H6(X.equip))J=_1(J,B,W.items[X.equip]);if(Object.hasOwn(X,"ai"))J=L6(J,B,X.ai)}else if(H6(z.entityOrItemName))J=T0(J,W.items[z.entityOrItemName],z.mapId,z.x,z.y);return J}function oZ(J){return Object.hasOwn(W.entities,J)}function H6(J){return Object.hasOwn(W.items,J)}var L1={width:16,height:16},m1=L1;function g0(J,z={}){return{type:J,options:z}}function D6(J){return J.type.name.startsWith("space")}function W6(J){for(let z in W.maps){let X=d0(W.maps[z]);J.maps[z]=X;for(let B of X._spawnCommands)J=Z1(J,B);X._spawnCommands=[]}return J}function R6(J,z){let X=B1(J,z);for(let P=0;P<X.length;P++){let M=X[P];J=x1(J,M.id)}let B=u0(J,z);for(let P=0;P<B.length;P++){let M=B[P];J=z1(J,M.id),J=w1(J,M.id)}return J.maps[z]=void 0,delete J.maps[z],J}class h0{id;widthTiles;heightTiles;seed;_tiles;_cacheMovementMap;_spawnCommands;_tvCount;tvMessage;constructor(J,z,X,B=[]){this.id=J,this.widthTiles=z,this.heightTiles=X,this.seed=null,this._tiles=B,this._cacheMovementMap=null,this._spawnCommands=[],this._tvCount=0,this.tvMessage=null}getTile(J,z){if(J>=0&&J<this.widthTiles&&z>=0&&z<this.heightTiles){let X=z*this.widthTiles+J;return this._tiles[X]}return{}}setTile(J,z,X,B={}){this._cacheMovementMap=null;let P=z*this.widthTiles+J,M=this._tiles[P];return this._tiles[P]=g0(X,B),M}setTvMessage(J){if(this._tvCount){let z=0;for(let X of this._tiles)if(X.type===W.tiles.tv&&z<J.length)X.options.sign=J[z],z++;if(J==="")J=null;this.tvMessage=J}}pasteOnto(J,z=0,X=0){for(let B=0;B<J.heightTiles;B++)for(let P=0;P<J.widthTiles;P++){let M=J.getTile(P,B);if(M.type!==W.tiles.voidtrue)this.setTile(P+z,B+X,M.type,M.options)}return this}circular(){let J=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let z=-J;z<=J;z++)for(let X=-J;X<=J;X++)if(X*X+z*z>=J*J)this.setTile(X+J-1,z+J-1,W.tiles.voidtrue);return this}sample(J,z){let X=Math.floor(this.widthTiles/J),B=Math.floor(this.heightTiles/z),P=[];for(let M=0;M<z;M++)for(let C=0;C<J;C++){let I={};for(let l=0;l<B;l++)for(let g=0;g<X;g++){let _=this.getTile(C*X+g,M*B+l);if(I[_.type.name])I[_.type.name]+=1;else I[_.type.name]=1}let N="",b=0;for(let[l,g]of Object.entries(I))if(g>b)N=l,b=g;let n="space"+N,Q0=W.tiles[n]||W.tiles.spacevoid,a={mapId:this.id,x:C*X,y:M*B};P.push(g0(Q0,a))}return new h0("__sampled_"+J+"_"+z+"_"+this.id,J,z,P)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let J=new Array(this.heightTiles);for(let z=0;z<this.heightTiles;z++){J[z]=new Array(this.widthTiles);for(let X=0;X<this.widthTiles;X++){let B=z*this.widthTiles+X,M=this._tiles[B].type;if(J[z][X]=0,M===W.tiles.rock||M===W.tiles.portalclosed||M===W.tiles.portalsewers||M===W.tiles.tv||M.name.startsWith("wall"))J[z][X]=1}}return this._cacheMovementMap=J,J}}function d0(J){let z=J.split(/\r?\n/),X=J[0],B="",P=0,M=0,C={},I=[],N=[],b=0,n="";for(let a=0;a<z.length;a++){let l=z[a];if(l.startsWith(X)){if(l.startsWith(X+"!id"))B=l.slice(5);else if(l.startsWith(X+"!size")){let g=l.split(" ").slice(1);P=Number(g[0]),M=Number(g[1])}else if(l.startsWith(X+"!spawn")){let g=l.split(" ").slice(1),_={};if(g.length>3){let m=g.slice(3);for(let d of m){let p=d.split("=");_[p[0]]=p[1]}}I.push(new c0(B,Number(g[0]),Number(g[1]),g[2],_))}else if(l.startsWith(X+"!")){let g=l[2],_=l.slice(4);C[g]=_}}else for(let g=0;g<l.length;g++){let _=l[g],m=C[_];if(o.debug&&!m)console.log("DEBUG Broken map: "+B);let d=m.split(" "),p={};if(m.startsWith("portal ")||m.startsWith("portalhidden ")||m.startsWith("portalsewers ")||m.startsWith("portallauncher ")||m.startsWith("portalstart"))m=d[0],p.mapId=d[1],p.x=Number(d[2]),p.y=Number(d[3]);if(m.startsWith("wall ")&&d.length>=2)m="wall",p.sign=d[1];if(m.startsWith("terminal ")){if(m="terminal",d.length>=2)p.screen=d[1]}if(m.startsWith("tv ")&&d.length>=2){if(m="tv",d.length===3)n=d[2];b++}N.push(g0(W.tiles[m],p))}}if(o.debug&&!(b===0||b===12))console.log("DEBUG Broken map: "+B+" (invalid TV size "+b+", allowed are 0 or 12 characters per map)");let Q0=new h0(B,P,M,N);return Q0._tvCount=b,Q0.setTvMessage(n),Q0._spawnCommands=I,Q0}function j6(J,z,X){switch(X){case W.commands.N:J=W0(J,z,0,-1);break;case W.commands.W:J=W0(J,z,-1,0);break;case W.commands.S:J=W0(J,z,0,1);break;case W.commands.E:J=W0(J,z,1,0);break;case W.commands.A:J=M6(J,z,W.commands.A);break;case W.commands.B:J=M6(J,z,W.commands.B);break;default:}return J}function W0(J,z,X,B,P=0){let M=J.maps[z.mapId],C=z6(J,M.id,z.x+X,z.y+B),I=J.tools[z.id];if(z.message=M.tvMessage,C)if(j0(C)){if(!j0(z)&&P<1)J=W0(J,C,X,B,P++),J=W0(J,z,X,B,P++)}else J=U6(J,z,C);else if(iZ(M,z,X,B))J=O6(J,M,z,X,B),J._energyQueue.push({entityId:z.id,energyDelta:-1*P});else if(tZ(M,z,I,X,B)){if(M.setTile(z.x+X,z.y+B,W.tiles.void).type===W.tiles.rock){let b=J.rng.getPercentage();if(b<=1)J=T0(J,W.items.matter,M.id,z.x+X,z.y+B);else if(b<=34)J=T0(J,W.items.junk,M.id,z.x+X,z.y+B)}J._energyQueue.push({entityId:z.id,energyDelta:I.type.energyCost})}else if(eZ(M,z,I,X,B))J=O6(J,M,z,X,B),J._energyQueue.push({entityId:z.id,energyDelta:I.type.energyCost});return J}function M6(J,z,X){let P=$1(J,z)[X.key],C=J.maps[z.mapId].getTile(z.x,z.y);switch(P){case W.actions.Enter:J=C6(J,z,C);break;case W.actions.Launch:J=aZ(J,z,C);case W.actions.Wait:break;default:}return J}function O6(J,z,X,B,P){X.x+=B,X.y+=P;let M=X6(J,X.mapId,X.x,X.y);if(M)J=B6(J,X,M);let C=z.getTile(X.x,X.y);if(C.type.name.startsWith("portal"))J=C6(J,X,C);if(C.type===W.tiles.terminal)z.setTvMessage("OBEYWORKKILL");if(C.type.name.startsWith("move"))switch(C.type.name){case"movenorth":J=W0(J,X,0,-1);break;case"moveeast":J=W0(J,X,1,0);break;case"movesouth":J=W0(J,X,0,1);break;case"movewest":J=W0(J,X,-1,0);break;default:}return J}function C6(J,z,X){if(z.id.startsWith("player"))J.currentMapId=X.options.mapId;if(D6(X))J.lastSpacePositionByEntity[z.id]={mapId:z.mapId,x:z.x,y:z.y};else J.lastSpacePositionByEntity[z.id]=void 0,delete J.lastSpacePositionByEntity[z.id];let B={entityId:z.id,oldMapId:z.mapId,oldX:z.x,oldY:z.y,oldTileType:X.type,newMapId:X.options.mapId,newX:X.options.x,newY:X.options.y};return z.mapId=X.options.mapId,z.x=X.options.x,z.y=X.options.y,J=g1(J,"entitymap.updated.event",B),J}function aZ(J,z,X){if(J.lastSpacePositionByEntity[z.id]){if(z.id.startsWith("player"))J.currentMapId=J.lastSpacePositionByEntity[z.id].mapId;let B={entityId:z.id,oldMapId:z.mapId,oldX:z.x,oldY:z.y,oldTileType:X.type,newMapId:J.lastSpacePositionByEntity[z.id].mapId,newX:J.lastSpacePositionByEntity[z.id].x,newY:J.lastSpacePositionByEntity[z.id].y};z.mapId=B.newMapId,z.x=B.newX,z.y=B.newY,J._energyQueue.push({entityId:z.id,energyDelta:W.actions.Launch.energyDelta}),J.lastSpacePositionByEntity[z.id]=void 0,delete J.lastSpacePositionByEntity[z.id],J=g1(J,"entitymap.updated.event",B)}return J}function E6(J){for(let z in J.entities){let X=J.entities[z],B=J.tools[z],M=J.maps[X.mapId].getTile(X.x,X.y),C=M.type.energyDelta;if(M.type===W.tiles.chargepad&&B?.type.effects.includes(W.effects.Recharger.name))C*=2;else if((M.type===W.tiles.water||M.type===W.tiles.watersewage)&&B?.type.effects.includes(W.effects.WaterShield.name))C/=2;if(C!==0)J._energyQueue.push({entityId:z,energyDelta:C})}return J}function A6(J,z){let X=J.entities[z.entityId];switch(z.oldTileType){case W.tiles.portalstartaerobot:J=U1(J,X,W.entities.AeroBot),J=w0(J,`Booting up as an ${W.entities.AeroBot.name}...`);break;case W.tiles.portalstartworkbot:J=U1(J,X,W.entities.WorkBot),J=w0(J,`Booting up as a ${W.entities.WorkBot.name}...`);break;default:}return J}function iZ(J,z,X,B){let P=z.x+X,M=z.y+B,C=J.getTile(P,M).type;return P>=0&&P<J.widthTiles&&M>=0&&M<J.heightTiles&&!(C===W.tiles.rock||C===W.tiles.portalclosed||C===W.tiles.portalsewers||C===W.tiles.tv||C.name.startsWith("wall"))}function tZ(J,z,X,B,P){let M=z.x+B,C=z.y+P,I=J.getTile(M,C).type;if(X)return X.type.effects.includes(W.effects.WallCrusher.name)&&I===W.tiles.wallweak||X.type.effects.includes(W.effects.RockCrusher.name)&&I===W.tiles.rock;return!1}function eZ(J,z,X,B,P){let M=z.x+B,C=z.y+P,I=J.getTile(M,C).type;if(X)return X.type.effects.includes(W.effects.Screwing.name)&&I===W.tiles.portalsewers;return!1}var v6=u1(P1(),1);class f0{seed;_rotRng;constructor(J=1337){this.seed=J,this._rotRng=v6.RNG.clone(),this._rotRng.setSeed(J)}getPercentage(){return this._rotRng.getPercentage()}getItem(J){return this._rotRng.getItem(J)}}function I6(J,z){if(z.seed===1337)J=F0(J,"batteryvalkyrie0",W.entities.Valkyrie,z.id,130,127,{faction:W.factions.Spirits}),J=F0(J,"batteryvalkyrie1",W.entities.Valkyrie,z.id,124,127,{faction:W.factions.Spirits}),J=T0(J,W.items.trident,z.id,127,130);else{let X=new f0(z.seed);for(let B=0;B<z.heightTiles;B++)for(let P=0;P<z.widthTiles;P++){let M=z.getTile(P,B);if(X.getPercentage()<=1&&(M.type===W.tiles.void||M.type===W.tiles.tree)){let C=X.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(C){case"Deviant":case"Pioneer":J=Z1(J,new c0(z.id,P,B,C,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":J=Z1(J,new c0(z.id,P,B,C));break}}}}return J}var F1=u1(P1(),1);var QJ=1337,f6=55;function b6(J,z=QJ){F1.RNG.setSeed(z);let X=new F1.Noise.Simplex,B=L1.width*m1.width,P=L1.height*m1.height,M=[];for(let N=0;N<P;N++)for(let b=0;b<B;b++){let n=X.get(b/f6,N/f6),Q0;if(n<=-0.5)Q0=W.tiles.water;else if(n<=0)Q0=W.tiles.void;else if(n<0.5)Q0=W.tiles.tree;else Q0=W.tiles.rock;M.push(g0(Q0))}let C="simplex="+z,I=new h0(C,B,P,M);return I.seed=z,J.maps[C]=I,J}var VJ=1337;function u6(J,z=VJ){let X=k6(1024,1024,W.tiles.void);X.id="solarsystem="+z,J.maps[X.id]=X;let B=new f0(z),P=new f0(z),M=B.getItem([2,3,4,5,6,7,8,9,10,11,12]),C=128,I=512-C,N=Math.floor(I/M);X=KJ(X,B);let b=k6(128,128,W.tiles.voidtrue);qJ(b,63,63,62,W.tiles.sun),zJ(b,63,63,W.tiles.sun),X.pasteOnto(b,448,448);for(let a=C;a<512;a+=N){let l=B.getItem([-1,1])*B.getItem(Y1(a)),g=B.getItem([-1,1])*Math.floor(Math.sqrt(a*a-l*l));l+=512,g+=512;let _=B.getItem([16,24,32]),m=Math.floor(_/2)-1;J=b6(J,z);let d=J.maps["simplex="+z],p=W.map_snippets.launcher;p=p.replace("!!O portallauncher space 0 0",`!!O portallauncher ${X.id} ${l} ${g}`);let z0=d0(p),G0=P.getItem(Y1(d.widthTiles-z0.widthTiles)),A=P.getItem(Y1(d.heightTiles-z0.heightTiles));d.pasteOnto(z0,G0,A),J=I6(J,d);let k=d.sample(_,_).circular();X.pasteOnto(k,l-(m+1),g-(m+1)),z++}let n=W.map_snippets.space_bot_station;n=n.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let Q0=d0(n);return X.pasteOnto(Q0,583,398),J}function k6(J,z,X){let B=[];for(let C=0;C<J*z;C++)B.push(g0(X));return new h0("__temp",J,z,B)}function KJ(J,z){for(let X=0;X<J.heightTiles;X++)for(let B=0;B<J.widthTiles;B++)if(z.getPercentage()<=1)J.setTile(B,X,z.getItem([W.tiles.spacevoidstarwhite,W.tiles.spacevoidstaryellow]));return J}function qJ(J,z,X,B,P){let M=1-B,C=1,I=-2*B,N=0,b=B;J.setTile(z,X+B,P),J.setTile(z,X-B,P),J.setTile(z+B,X,P),J.setTile(z-B,X,P);while(N<b){if(M>=0)b-=1,I+=2,M+=I;N+=1,C+=2,M+=C,J.setTile(z+N,X+b,P),J.setTile(z-N,X+b,P),J.setTile(z+N,X-b,P),J.setTile(z-N,X-b,P),J.setTile(z+b,X+N,P),J.setTile(z-b,X+N,P),J.setTile(z+b,X-N,P),J.setTile(z-b,X-N,P)}return J}function zJ(J,z,X,B){let{widthTiles:P,heightTiles:M}=J,C=[];C.push({x:z,y:X});let I=void 0;while(typeof(I=C.shift())!=="undefined"){let N=I,b=I;if(I.x+1<P)b={x:I.x+1,y:I.y};while(J.getTile(N.x,N.y).type!==B){if(J.setTile(N.x,N.y,B),N.y+1<M){if(J.getTile(N.x,N.y+1).type!==B)C.push({x:N.x,y:N.y+1})}if(N.y-1>=0){if(J.getTile(N.x,N.y-1).type!==B)C.push({x:N.x,y:N.y-1})}if(N.x-1>=0)N.x-=1;else break}while(J.getTile(b.x,b.y).type!==B){if(J.setTile(b.x,b.y,B),b.y+1<M){if(J.getTile(b.x,b.y+1).type!==B)C.push({x:b.x,y:b.y+1})}if(b.y-1>=0){if(J.getTile(b.x,b.y-1).type!==B)C.push({x:b.x,y:b.y-1})}if(b.x+1<P)b.x+=1;else break}}return J}var UJ=`!
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
`;function T6(J,z){if(z?.oldMapId?.startsWith("shop_instance")){J=R6(J,z.oldMapId);let X=J.maps[z.newMapId],B=X.getTile(z.newX,z.newY);X.setTile(z.newX,z.newY,B.type,{mapId:"shop_instance",x:z.oldX,y:z.oldY})}if(z?.newMapId?.startsWith("shop_instance")){let X=d0(UJ);X.id+="_"+z.oldMapId+"_"+z.entityId,X.setTile(z.newX,z.newY,W.tiles.portal,{mapId:z.oldMapId,x:z.oldX,y:z.oldY}),J.maps[z.oldMapId].setTile(z.oldX,z.oldY,z.oldTileType,{mapId:X.id,x:z.newX,y:z.newY});let P=J.entities[z.entityId];if(P.id.startsWith("player"))J.currentMapId=X.id;if(P.mapId=X.id,P.x=z.newX,P.Y=z.newY,J.maps[X.id]=X,J=e0(J,W.items.hammer,X.id,4,4,0,-200),J=e0(J,W.items.pickaxe,X.id,4,6,0,-200),J=e0(J,W.items.battery,X.id,4,8,0,-200),J=e0(J,W.items.gold,X.id,4,10,0,-1e4),J=F0(J,X.id+"_shopkeeper",W.entities.AeroBot,X.id,6,2,{faction:P.options.faction,dialog:"shop_instance_shopkeeper",name:"Shopkeeper"}),z?.oldMapId.startsWith("bot_stadium"))J=F0(J,X.id+"_shopper",W.entities.WorkBot,X.id,1,12,{faction:P.options.faction,dialog:"shop_instance_workbot_shopper"});else if(z?.oldMapId.startsWith("bot_bar"))J=F0(J,X.id+"_shopper",W.entities.AeroBot,X.id,4,11,{faction:P.options.faction,dialog:"shop_instance_aerobot_shopper"})}return J}function g6(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!0,actionLog:[],chatLog:[],currentMapId:"",entities:{},items:{},lastSpacePositionByEntity:{},maps:{},rng:new f0,tools:{},tvs:{}}}function h6(J){let z=void 0;while(typeof(z=J._combatQueue.shift())!=="undefined"){let X=-1,B=-5,P=G1(J,z.entityId);if(P)X=P.type.energyCost,B=-1*Math.abs(P.type.damage);J._energyQueue.push({entityId:z.entityId,energyDelta:X}),J._energyQueue.push({entityId:z.otherEntityId,energyDelta:B});let M=J.entities[z.entityId],C=J.entities[z.otherEntityId],I=M?.options?.name?M.options.name:M.type.name,N=C?.options?.name?C.options.name:C.type.name;J=w0(J,`${I} did ${Math.abs(B)} damage to ${N} at cost of ${Math.abs(X)} energy.`)}return J}function x6(J){let z=void 0,X=new Set;while(typeof(z=J._energyQueue.shift())!=="undefined"){let B=J.entities[z.entityId];if(B.energy=Math.min(B.energy+z.energyDelta,B.energyMax),B.energy<=0)X.add(B.id)}for(let B of X){let P=J.entities[B];J._despawnQueue.push(B);let M=P?.options?.name?P.options.name:P.type.name;if(!j0(P)){let C=Math.max(1,Math.floor(P.energyMax/3));J=$6(J,C,P.mapId,P.x,P.y),J=w0(J,`${M} destroyed leaving behind Junk.`)}}return J}function _6(J){return J=w6(J),J=h6(J),J=E6(J),J=x6(J),J=P6(J),J=F6(J),J}class D1{state;constructor(){}init(){return this.state=g6(),this.state=h1(this.state,"entitymap.updated.event",A6),this.state=h1(this.state,"entitymap.updated.event",T6),this.state=u6(this.state),this.state=W6(this.state),this.state.currentMapId="botmos_hull_selection",this.state=F0(this.state,D0(),W.entities.Spirit,this.state.currentMapId,9,5,{faction:W.factions.Spirits,name:"Player"}),this.state}update(J,z=!1){let X=this.state.entities[D0()];if(X){if(J){switch(J){case W.commands.M:this.state._menuOpen=!this.state._menuOpen;break;case W.commands["#"]:this.state=w0(this.state,K6(this.state,D0()));break;default:this.state=j6(this.state,X,J),this.state=_6(this.state)}this.state.actionLog.push(J.key)}}else this.state=w0(this.state,`Game over! ${this.state.actionLog.length} turns.`),console.log(`Game over! ${this.state.actionLog.length} turns: ${this.state.actionLog.join("")}`),this.state.currentMapId="botmos_hull_selection",this.state=F0(this.state,D0(),W.entities.Spirit,this.state.currentMapId,9,5,{faction:W.factions.Spirits,name:"Player"});return this.state}play(J){for(let z=0;z<J.length;z++){let X=J[z];this.update(W.commands[X],!0)}return this.state}}var y={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1,slash:!1},p1=[],c1=void 0,m6=0;document.body.addEventListener("keydown",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":y.up=!0,q0(J);break;case"a":case"ArrowLeft":y.left=!0,q0(J);break;case"s":case"ArrowDown":y.down=!0,q0(J);break;case"d":case"ArrowRight":y.right=!0,q0(J);break;case"x":y.a=!0,q0(J);break;case" ":case"y":case"z":y.b=!0,q0(J);break;case"m":y.menu=!0,q0(J);break;case"#":case"/":y.slash=!0,q0(J);break;default:}A0(y6())});function A0(J){let z=Date.now();if(c1!==void 0&&z-m6>=80)m6=z,c1(J)}document.body.addEventListener("keyup",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":y.up=!1,q0(J);break;case"a":case"ArrowLeft":y.left=!1,q0(J);break;case"s":case"ArrowDown":y.down=!1,q0(J);break;case"d":case"ArrowRight":y.right=!1,q0(J);break;case"x":y.a=!1,q0(J);break;case" ":case"y":case"z":y.b=!1,q0(J);break;case"m":y.menu=!1,q0(J);break;case"#":case"/":y.slash=!1,q0(J);default:}});document.body.addEventListener("click",function(J){let{clientX:z,clientY:X}=J,P=document.body.clientWidth/3,C=document.body.clientHeight/3;if(z>=P&&z<2*P&&X<C)A0(W.commands.N),q0(J);else if(z<P&&X<C)A0(W.commands.B),q0(J);else if(z>=2*P&&X<C)A0(W.commands.A),q0(J);else if(z<P&&X>=C&&X<2*C)A0(W.commands.W),q0(J);else if(z>=2*P&&X>=C&&X<2*C)A0(W.commands.E),q0(J);else if(z>=P&&z<2*P&&X>=2*C)A0(W.commands.S),q0(J);else if(z>=P&&z<2*P&&X>=C&&X<2*C)A0(W.commands.M),q0(J)});function q0(J){J.preventDefault(),J.stopPropagation()}var J1=null;function $J(){let J=null;if(y.right)J=W.commands.E;if(y.left)J=W.commands.W;if(y.down)J=W.commands.S;if(y.up)J=W.commands.N;if(y.up&&y.right){if(J===W.commands.N&&J1===W.commands.N)J=W.commands.E}if(y.up&&y.left){if(J===W.commands.N&&J1===W.commands.N)J=W.commands.W}if(y.down&&y.right){if(J===W.commands.S&&J1===W.commands.S)J=W.commands.E}if(y.down&&y.left){if(J===W.commands.S&&J1===W.commands.S)J=W.commands.W}if(y.a)J=W.commands.A;if(y.b)J=W.commands.B;if(y.menu)J=W.commands.M;if(y.slash)J=W.commands["#"];if(J1=J,J!==null)p1.push(J)}function y6(){$J();let J=p1.shift()||null;return p1=[],J}var p6=void 0;window.addEventListener("gamepadconnected",(J)=>{p6=setInterval(function(){let z=navigator.getGamepads()[J.gamepad?.index];if(y.right=z.buttons[15].pressed,y.left=z.buttons[14].pressed,y.down=z.buttons[13].pressed,y.up=z.buttons[12].pressed,y.a=z.buttons[0].pressed||z.buttons[2].pressed,y.b=z.buttons[1].pressed||z.buttons[3].pressed,y.menu=z.buttons[9].pressed,y.right||y.left||y.down||y.up||y.a||y.b||y.menu)A0(y6())},100)});window.addEventListener("gamepaddisconnected",(J)=>{clearInterval(p6)});function c6(J){c1=J}var s6=u1(P1(),1);var W1={AeroBot:[0,0],battery:[16,0],broom:[32,0],chargepad:[48,0],chest:[64,0],Cleaner:[80,0],Deviant:[96,0],energy:[112,0],gold:[128,0],goo:[144,0],hammer:[160,0],junk:[176,0],matter:[192,0],movableboulder:[208,0],movablebox:[224,0],moveeast:[240,0],movenorth:[256,0],movesouth:[272,0],movewest:[288,0],pickaxe:[304,0],Pioneer:[320,0],portalclosed:[336,0],portalhidden:[352,0],portallauncher:[368,0],portal:[384,0],portalsewers:[400,0],portalstartaerobot:[416,0],"_portalstart?":[432,0],portalstartworkbot:[448,0],rock:[464,0],shocker:[480,0],spacerock:[496,0],spacetree:[512,0],spacevoid:[528,0],spacevoidstarwhite:[544,0],spacevoidstaryellow:[560,0],spacewater:[576,0],Spirit:[592,0],sun:[608,0],terminal:[624,0],tree:[640,0],trident:[656,0],tv:[672,0],Valkyrie:[688,0],voidhidden:[704,0],void:[720,0],voidtrue:[736,0],wall0:[752,0],wall1:[768,0],wall2:[784,0],walla_:[800,0],wallA:[816,0],wallb_:[832,0],wallB:[848,0],wallc_:[864,0],wallC:[880,0],walld_:[896,0],wallD:[912,0],walle_:[928,0],wallE:[944,0],wallf_:[960,0],wallF:[976,0],wallg_:[992,0],wallG:[1008,0],wallh_:[1024,0],wallH:[1040,0],walli_:[1056,0],wallI:[1072,0],wallj_:[1088,0],wallJ:[1104,0],wallk_:[1120,0],wallK:[1136,0],walll_:[1152,0],wallL:[1168,0],wallm_:[1184,0],wallM:[1200,0],walln_:[1216,0],wallN:[1232,0],wallo_:[1248,0],wallO:[1264,0],"wall(":[1280,0],"wall)":[1296,0],"wall+":[1312,0],"wall,":[1328,0],"wall.":[1344,0],wall:[1360,0],"wall:":[1376,0],wall_:[1392,0],"wall|":[1408,0],wallp_:[1424,0],wallP:[1440,0],wallq_:[1456,0],wallQ:[1472,0],wallr_:[1488,0],wallR:[1504,0],walls_:[1520,0],wallS:[1536,0],wallstatueaerobot:[1552,0],wallstatuecleaner:[1568,0],wallstatuepioneer:[1584,0],wallstatueworkbot:[1600,0],wallt_:[1616,0],wallT:[1632,0],wallu_:[1648,0],wallU:[1664,0],wallv_:[1680,0],wallV:[1696,0],wallweak:[1712,0],wallw_:[1728,0],wallW:[1744,0],wallx_:[1760,0],wallX:[1776,0],wally_:[1792,0],wallY:[1808,0],wallz_:[1824,0],wallZ:[1840,0],water:[1856,0],watersewage:[1872,0],WorkBot:[1888,0],wrench:[1904,0]};var n0=document.createElement("div");n0.id="ui";document.body.appendChild(n0);var d1=n6(),R1=n6(),d6=XJ(),N0=document.createElement("div");N0.replaceChildren(d1,R1,d6);n0.replaceChildren(N0);var M1=document.createElement("div");M1.id="uichatlog";n0.appendChild(M1);async function l6(J,z=0){if(!o.showUI)return;let X=D0(),B=J.entities[X],P="";if(B){l0(d1,B.type.name);let M="",C=G1(J,X);if(C)l0(R1,C.type.name.toLowerCase());else l0(R1,null);let I="";if(B.matter>0)I=`${B.matter}M `;let N="";if(B.gold>0)N=`${B.gold}G `;let b=$1(J,B);if(P=" "+B.energy+"/"+B.energyMax+" "+M+N+I+"Y:"+b.B.name+" X:"+b.A.name,n0.style.flexDirection="column-reverse",B.y-z>=B0.height-3)n0.style.flexDirection="column";if(N0.style.background="#000",B.energy/B.energyMax<=0.2)N0.style.color="#000",N0.style.background="#f00";else N0.style.color="#74ee15",N0.style.background="#000"}else l0(d1,null),l0(R1,null),P="Game over!",N0.style.color="#000",N0.style.background="#f00";if(d6.innerText=P,J._menuOpen&&!!J.chatLog.length){let M=J.chatLog.slice(-o.chatLogMaxDisplaySize);M1.innerText=M.join(`
`)}else M1.innerText=""}function n6(){let J=document.createElement("span");return l0(J,null),J.style.height=`${o.fontSize}px`,J.style.display="inline-block",J}function XJ(){let J=document.createElement("span");return J.style.display="inline-block",J.style.marginLeft="8px",J}function l0(J,z){if(z){let X=W1[z][0];J.style.background=`url('build/tiles.png') -${X}px 0`,J.style.width=`${o.fontSize}px`}else J.style.width="0px"}var o6=document.createElement("img");o6.src="build/tiles.png";B0.tileSet=o6;B0.tileMap=YJ();var l1=new s6.Display(B0);document.body.appendChild(l1.getContainer());function BJ(J,z){let X=J.currentMapId,B=J.maps[X],P=0,M=0;if(B.widthTiles<z.width)P=Math.floor((z.width-B.widthTiles)/2),z.x=0;if(B.heightTiles<z.height)M=Math.floor((z.height-B.heightTiles)/2),z.y=0;let C={},I={},N={};for(let g=0;g<z.height;g++)for(let _=0;_<z.width;_++){let m=B.getTile(z.x+_,z.y+g),d="";if(!!m&&!!m.type)if(m.options.sign)d="#"+m.options.sign;else d=m.type.icon;if(d){let p=[P+_,M+g].toString();C[p]=[d],I[p]=["transparent"],N[p]=["transparent"]}}let b=B1(J,X);for(let g=0;g<b.length;g++){let _=b[g],m=P+_.x-z.x,d=M+_.y-z.y,p=[m,d].toString();if(C[p])C[p].push(_.type.icon),I[p].push("transparent"),N[p].push("transparent");else C[p]=[_.type.icon],I[p]=["transparent"],N[p]=["transparent"]}let n=D0(),Q0=J.entities[n],a=((Q0||{}).options||{}).faction||void 0,l=u0(J,X);for(let g=0;g<l.length;g++){let _=l[g],m=P+_.x-z.x,d=M+_.y-z.y,p="transparent";if(o.highlightEnemy&&!!a&&!j0(_))p=a===_.options.faction?"rgba(116, 238, 21, 0.5)":"rgba(240, 0, 255, 0.5)";if(_===Q0)p="transparent";let z0=[m,d].toString();if(C[z0])C[z0].push(_.type.icon),I[z0].push(p),N[z0].push("transparent");else C[z0]=[_.type.icon],I[z0]=[p],N[z0]=["transparent"]}l1.clear();for(let[g,_]of Object.entries(C)){let m=g.split(",");l1.draw(Number(m[0]),Number(m[1]),_,I[g],N[g])}}var r6={x:0,y:0};async function _0(J){let z=J.entities[D0()],X=z?z:r6,B=GJ(X);BJ(J,B),l6(J,B.y),r6=X}async function a6(J){}function GJ(J){return{x:Math.min(Math.max(0,J.x-Math.floor(B0.width/2)),T1.WIDTH-B0.width),y:Math.min(Math.max(0,J.y-Math.floor(B0.height/2)),T1.HEIGHT-B0.height),width:B0.width,height:B0.height}}function YJ(){let J={};for(let[z,X]of Object.entries(W1))if(z.startsWith("wall")&&(z.length===5||z.length===6))J["#"+z.substring(4,5)]=X;else if(Object.hasOwn(W.tiles,z))J[W.tiles[z].icon]=X;else if(Object.hasOwn(W.entities,z))J[W.entities[z].icon]=X;else if(Object.hasOwn(W.items,z))J[W.items[z].icon]=X;return J}var R0=new D1;window.onload=function(){_0(R0.init())};window.onresize=function(){let J=typeof window!=="undefined"?window.innerWidth:0,z=typeof window!=="undefined"?window.innerHeight:0;o.cameraWidth=Math.floor(J/o.fontSize),o.cameraHeight=Math.floor(z/o.fontSize),B0.width=Math.floor(o.cameraWidth*(1/o.zoom)),B0.height=Math.floor(o.cameraHeight*(1/o.zoom)),a6(B0),_0(R0.state)};c6(function(J){_0(R0.update(J))});if(!window.BMActionLog)window.BMActionLog=function(){return R0.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(J){_0(R0.play(J))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){o.debug=!o.debug,_0(R0.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){o.showUI=!o.showUI,_0(R0.state)};if(o.debug){if(!window.BMDebugState)window.BMDebugState=function(){return R0.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let J=Object.keys(R0.state.maps).length,z=Object.keys(R0.state.entities).length,X=Object.keys(R0.state.items).length,B=Object.keys(R0.state.tools).length;return`Maps: ${J}, Entities: ${z}, Items: ${X}, Tools: ${B}`}}document.body.focus();
