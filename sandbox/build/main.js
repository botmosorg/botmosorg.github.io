var fZ=Object.create;var{getPrototypeOf:bZ,defineProperty:i1,getOwnPropertyNames:kZ}=Object;var uZ=Object.prototype.hasOwnProperty;var I1=(J,q,X)=>{X=J!=null?fZ(bZ(J)):{};let B=q||!J||!J.__esModule?i1(X,"default",{value:J,enumerable:!0}):X;for(let P of kZ(J))if(!uZ.call(B,P))i1(B,P,{get:()=>J[P],enumerable:!0});return B};var TZ=(J,q)=>()=>(q||J((q={exports:{}}).exports,q),q.exports);var w1=TZ((L1,M6)=>{function h0(J){if(J===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return J}function rZ(J,q){var X=typeof Symbol!=="undefined"&&J[Symbol.iterator]||J["@@iterator"];if(X)return(X=X.call(J)).next.bind(X);if(Array.isArray(J)||(X=sZ(J))||q&&J&&typeof J.length==="number"){if(X)J=X;var B=0;return function(){if(B>=J.length)return{done:!0};return{done:!1,value:J[B++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sZ(J,q){if(!J)return;if(typeof J==="string")return R6(J,q);var X=Object.prototype.toString.call(J).slice(8,-1);if(X==="Object"&&J.constructor)X=J.constructor.name;if(X==="Map"||X==="Set")return Array.from(J);if(X==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(X))return R6(J,q)}function R6(J,q){if(q==null||q>J.length)q=J.length;for(var X=0,B=new Array(q);X<q;X++)B[X]=J[X];return B}function K0(J,q){J.prototype=Object.create(q.prototype),J.prototype.constructor=J,g1(J,q)}function g1(J,q){return g1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function X(B,P){return B.__proto__=P,B},g1(J,q)}(function(J,q){typeof L1==="object"&&typeof M6!=="undefined"?q(L1):typeof define==="function"&&define.amd?define(["exports"],q):(J=typeof globalThis!=="undefined"?globalThis:J||self,q(J.ROT={}))})(L1,function(J){var q=0.00000000023283064365386963,X=function(){function Y(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var G=Y.prototype;return G.getSeed=function z(){return this._seed},G.setSeed=function z(K){return K=K<1?1/K:K,this._seed=K,this._s0=(K>>>0)*q,K=K*69069+1>>>0,this._s1=K*q,K=K*69069+1>>>0,this._s2=K*q,this._c=1,this},G.getUniform=function z(){var K=2091639*this._s0+this._c*q;return this._s0=this._s1,this._s1=this._s2,this._c=K|0,this._s2=K-this._c,this._s2},G.getUniformInt=function z(K,Z){var Q=Math.max(K,Z),V=Math.min(K,Z);return Math.floor(this.getUniform()*(Q-V+1))+V},G.getNormal=function z(K,Z){if(K===void 0)K=0;if(Z===void 0)Z=1;var Q,V,U;do Q=2*this.getUniform()-1,V=2*this.getUniform()-1,U=Q*Q+V*V;while(U>1||U==0);var $=Q*Math.sqrt(-2*Math.log(U)/U);return K+$*Z},G.getPercentage=function z(){return 1+Math.floor(this.getUniform()*100)},G.getItem=function z(K){if(!K.length)return null;return K[Math.floor(this.getUniform()*K.length)]},G.shuffle=function z(K){var Z=[],Q=K.slice();while(Q.length){var V=Q.indexOf(this.getItem(Q));Z.push(Q.splice(V,1)[0])}return Z},G.getWeightedValue=function z(K){var Z=0;for(var Q in K)Z+=K[Q];var V=this.getUniform()*Z,U,$=0;for(U in K)if($+=K[U],V<$)return U;return U},G.getState=function z(){return[this._s0,this._s1,this._s2,this._c]},G.setState=function z(K){return this._s0=K[0],this._s1=K[1],this._s2=K[2],this._c=K[3],this},G.clone=function z(){var K=new Y;return K.setState(this.getState())},Y}(),B=new X().setSeed(Date.now()),P=function(){function Y(){}var G=Y.prototype;return G.getContainer=function z(){return null},G.setOptions=function z(K){this._options=K},Y}(),R=function(Y){K0(G,Y);function G(){var K=Y.call(this)||this;return K._ctx=document.createElement("canvas").getContext("2d"),K}var z=G.prototype;return z.schedule=function K(Z){requestAnimationFrame(Z)},z.getContainer=function K(){return this._ctx.canvas},z.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z);var Q=Z.fontStyle?Z.fontStyle+" ":"",V=Q+" "+Z.fontSize+"px "+Z.fontFamily;this._ctx.font=V,this._updateSize(),this._ctx.font=V,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},z.clear=function K(){var Z=this._ctx.globalCompositeOperation;this._ctx.globalCompositeOperation="copy",this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.globalCompositeOperation=Z},z.eventToPosition=function K(Z,Q){var V=this._ctx.canvas,U=V.getBoundingClientRect();if(Z-=U.left,Q-=U.top,Z*=V.width/U.width,Q*=V.height/U.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},G}(P);function j(Y,G){return(Y%G+G)%G}function v(Y,G,z){if(G===void 0)G=0;if(z===void 0)z=1;if(Y<G)return G;if(Y>z)return z;return Y}function N(Y){return Y.charAt(0).toUpperCase()+Y.substring(1)}function b(Y){for(var G=arguments.length,z=new Array(G>1?G-1:0),K=1;K<G;K++)z[K-1]=arguments[K];var Z=b.map,Q=function V(U,$,w,L){if(Y.charAt(L-1)=="%")return U.substring(1);if(!z.length)return U;var H=z[0],F=$||w,D=F.split(","),O=D.shift()||"",M=Z[O.toLowerCase()];if(!M)return U;H=z.shift();var E=H[M].apply(H,D),I=O.charAt(0);if(I!=I.toLowerCase())E=N(E);return E};return Y.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,Q)}b.map={s:"toString"};var l=Object.freeze({__proto__:null,mod:j,clamp:v,capitalize:N,format:b}),Q0=function(Y){K0(G,Y);function G(){var K=Y.call(this)||this;return K._spacingX=0,K._spacingY=0,K._hexSize=0,K}var z=G.prototype;return z.draw=function K(Z,Q){var V=Z[0],U=Z[1],$=Z[2],w=Z[3],L=Z[4],H=[(V+1)*this._spacingX,U*this._spacingY+this._hexSize];if(this._options.transpose)H.reverse();if(Q)this._ctx.fillStyle=L,this._fill(H[0],H[1]);if(!$)return;this._ctx.fillStyle=w;var F=[].concat($);for(var D=0;D<F.length;D++)this._ctx.fillText(F[D],H[0],Math.ceil(H[1]))},z.computeSize=function K(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=Math.floor(Z/this._spacingX)-1,U=Math.floor((Q-2*this._hexSize)/this._spacingY+1);return[V,U]},z.computeFontSize=function K(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=2*Z/((this._options.width+1)*Math.sqrt(3))-1,U=Q/(2+1.5*(this._options.height-1)),$=Math.min(V,U),w=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var L=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=w;var H=L/100;$=Math.floor($)+1;var F=2*$/(this._options.spacing*(1+H/Math.sqrt(3)));return Math.ceil(F)-1},z._normalizedEventToPosition=function K(Z,Q){var V;if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q,V=this._ctx.canvas.width;else V=this._ctx.canvas.height;var U=V/this._options.height;if(Q=Math.floor(Q/U),j(Q,2))Z-=this._spacingX,Z=1+2*Math.floor(Z/(2*this._spacingX));else Z=2*Math.floor(Z/(2*this._spacingX));return[Z,Q]},z._fill=function K(Z,Q){var V=this._hexSize,U=this._options.border,$=this._ctx;if($.beginPath(),this._options.transpose)$.moveTo(Z-V+U,Q),$.lineTo(Z-V/2+U,Q+this._spacingX-U),$.lineTo(Z+V/2-U,Q+this._spacingX-U),$.lineTo(Z+V-U,Q),$.lineTo(Z+V/2-U,Q-this._spacingX+U),$.lineTo(Z-V/2+U,Q-this._spacingX+U),$.lineTo(Z-V+U,Q);else $.moveTo(Z,Q-V+U),$.lineTo(Z+this._spacingX-U,Q-V/2+U),$.lineTo(Z+this._spacingX-U,Q+V/2-U),$.lineTo(Z,Q+V-U),$.lineTo(Z-this._spacingX+U,Q+V/2-U),$.lineTo(Z-this._spacingX+U,Q-V/2+U),$.lineTo(Z,Q-V+U);$.fill()},z._updateSize=function K(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(Z.spacing*(Z.fontSize+Q/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var V,U;if(Z.transpose)V="height",U="width";else V="width",U="height";this._ctx.canvas[V]=Math.ceil((Z.width+1)*this._spacingX),this._ctx.canvas[U]=Math.ceil((Z.height-1)*this._spacingY+2*this._hexSize)},G}(R),o=function(Y){K0(G,Y);function G(){var K=Y.call(this)||this;return K._spacingX=0,K._spacingY=0,K._canvasCache={},K}var z=G.prototype;return z.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z),this._canvasCache={}},z.draw=function K(Z,Q){if(G.cache)this._drawWithCache(Z);else this._drawNoCache(Z,Q)},z._drawWithCache=function K(Z){var Q=Z[0],V=Z[1],U=Z[2],$=Z[3],w=Z[4],L=""+U+$+w,H;if(L in this._canvasCache)H=this._canvasCache[L];else{var F=this._options.border;H=document.createElement("canvas");var D=H.getContext("2d");if(H.width=this._spacingX,H.height=this._spacingY,D.fillStyle=w,D.fillRect(F,F,H.width-F,H.height-F),U){D.fillStyle=$,D.font=this._ctx.font,D.textAlign="center",D.textBaseline="middle";var O=[].concat(U);for(var M=0;M<O.length;M++)D.fillText(O[M],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[L]=H}this._ctx.drawImage(H,Q*this._spacingX,V*this._spacingY)},z._drawNoCache=function K(Z,Q){var V=Z[0],U=Z[1],$=Z[2],w=Z[3],L=Z[4];if(Q){var H=this._options.border;this._ctx.fillStyle=L,this._ctx.fillRect(V*this._spacingX+H,U*this._spacingY+H,this._spacingX-H,this._spacingY-H)}if(!$)return;this._ctx.fillStyle=w;var F=[].concat($);for(var D=0;D<F.length;D++)this._ctx.fillText(F[D],(V+0.5)*this._spacingX,Math.ceil((U+0.5)*this._spacingY))},z.computeSize=function K(Z,Q){var V=Math.floor(Z/this._spacingX),U=Math.floor(Q/this._spacingY);return[V,U]},z.computeFontSize=function K(Z,Q){var V=Math.floor(Z/this._options.width),U=Math.floor(Q/this._options.height),$=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var w=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=$;var L=w/100,H=L*U/V;if(H>1)U=Math.floor(U/H);return Math.floor(U/this._options.spacing)},z._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._spacingX),Math.floor(Q/this._spacingY)]},z._updateSize=function K(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(Z.spacing*Q),this._spacingY=Math.ceil(Z.spacing*Z.fontSize),Z.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=Z.width*this._spacingX,this._ctx.canvas.height=Z.height*this._spacingY},G}(R);o.cache=!1;var n=function(Y){K0(G,Y);function G(){var K=Y.call(this)||this;return K._colorCanvas=document.createElement("canvas"),K}var z=G.prototype;return z.draw=function K(Z,Q){var V=Z[0],U=Z[1],$=Z[2],w=Z[3],L=Z[4],H=this._options.tileWidth,F=this._options.tileHeight;if(Q)if(this._options.tileColorize)this._ctx.clearRect(V*H,U*F,H,F);else this._ctx.fillStyle=L,this._ctx.fillRect(V*H,U*F,H,F);if(!$)return;var D=[].concat($),O=[].concat(w),M=[].concat(L);for(var E=0;E<D.length;E++){var I=this._options.tileMap[D[E]];if(!I)throw new Error('Char "'+D[E]+'" not found in tileMap');if(this._options.tileColorize){var u=this._colorCanvas,h=u.getContext("2d");h.globalCompositeOperation="source-over",h.clearRect(0,0,H,F);var c=O[E],i=M[E];if(h.drawImage(this._options.tileSet,I[0],I[1],H,F,0,0,H,F),c!="transparent")h.fillStyle=c,h.globalCompositeOperation="source-atop",h.fillRect(0,0,H,F);if(i!="transparent")h.fillStyle=i,h.globalCompositeOperation="destination-over",h.fillRect(0,0,H,F);this._ctx.drawImage(u,V*H,U*F,H,F)}else this._ctx.drawImage(this._options.tileSet,I[0],I[1],H,F,V*H,U*F,H,F)}},z.computeSize=function K(Z,Q){var V=Math.floor(Z/this._options.tileWidth),U=Math.floor(Q/this._options.tileHeight);return[V,U]},z.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},z._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},z._updateSize=function K(){var Z=this._options;this._ctx.canvas.width=Z.width*Z.tileWidth,this._ctx.canvas.height=Z.height*Z.tileHeight,this._colorCanvas.width=Z.tileWidth,this._colorCanvas.height=Z.tileHeight},G}(R);function g(Y){var G,z;if(Y in C)G=C[Y];else{if(Y.charAt(0)=="#"){var K=Y.match(/[0-9a-f]/gi)||[],Z=K.map(function(V){return parseInt(V,16)});if(Z.length==3)G=Z.map(function(V){return V*17});else{for(var Q=0;Q<3;Q++)Z[Q+1]+=16*Z[Q],Z.splice(Q,1);G=Z}}else if(z=Y.match(/rgb\(([0-9, ]+)\)/i))G=z[1].split(/\s*,\s*/).map(function(V){return parseInt(V)});else G=[0,0,0];C[Y]=G}return G.slice()}function _(Y){var G=Y.slice();for(var z=arguments.length,K=new Array(z>1?z-1:0),Z=1;Z<z;Z++)K[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++)for(var V=0;V<K.length;V++)G[Q]+=K[V][Q];return G}function m(Y){for(var G=arguments.length,z=new Array(G>1?G-1:0),K=1;K<G;K++)z[K-1]=arguments[K];for(var Z=0;Z<3;Z++)for(var Q=0;Q<z.length;Q++)Y[Z]+=z[Q][Z];return Y}function d(Y){var G=Y.slice();for(var z=arguments.length,K=new Array(z>1?z-1:0),Z=1;Z<z;Z++)K[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++){for(var V=0;V<K.length;V++)G[Q]*=K[V][Q]/255;G[Q]=Math.round(G[Q])}return G}function p(Y){for(var G=arguments.length,z=new Array(G>1?G-1:0),K=1;K<G;K++)z[K-1]=arguments[K];for(var Z=0;Z<3;Z++){for(var Q=0;Q<z.length;Q++)Y[Z]*=z[Q][Z]/255;Y[Z]=Math.round(Y[Z])}return Y}function q0(Y,G,z){if(z===void 0)z=0.5;var K=Y.slice();for(var Z=0;Z<3;Z++)K[Z]=Math.round(K[Z]+z*(G[Z]-Y[Z]));return K}var G0=q0;function A(Y,G,z){if(z===void 0)z=0.5;var K=x(Y),Z=x(G);for(var Q=0;Q<3;Q++)K[Q]+=z*(Z[Q]-K[Q]);return a(K)}var k=A;function T(Y,G){if(!(G instanceof Array))G=Math.round(B.getNormal(0,G));var z=Y.slice();for(var K=0;K<3;K++)z[K]+=G instanceof Array?Math.round(B.getNormal(0,G[K])):G;return z}function x(Y){var G=Y[0]/255,z=Y[1]/255,K=Y[2]/255,Z=Math.max(G,z,K),Q=Math.min(G,z,K),V=0,U,$=(Z+Q)/2;if(Z==Q)U=0;else{var w=Z-Q;switch(U=$>0.5?w/(2-Z-Q):w/(Z+Q),Z){case G:V=(z-K)/w+(z<K?6:0);break;case z:V=(K-G)/w+2;break;case K:V=(G-z)/w+4;break}V/=6}return[V,U,$]}function t(Y,G,z){if(z<0)z+=1;if(z>1)z-=1;if(z<0.16666666666666666)return Y+(G-Y)*6*z;if(z<0.5)return G;if(z<0.6666666666666666)return Y+(G-Y)*(0.6666666666666666-z)*6;return Y}function a(Y){var G=Y[2];if(Y[1]==0)return G=Math.round(G*255),[G,G,G];else{var z=Y[1],K=G<0.5?G*(1+z):G+z-G*z,Z=2*G-K,Q=t(Z,K,Y[0]+0.3333333333333333),V=t(Z,K,Y[0]),U=t(Z,K,Y[0]-0.3333333333333333);return[Math.round(Q*255),Math.round(V*255),Math.round(U*255)]}}function f(Y){var G=Y.map(function(z){return v(z,0,255)});return"rgb("+G.join(",")+")"}function S(Y){var G=Y.map(function(z){return v(z,0,255).toString(16).padStart(2,"0")});return"#"+G.join("")}var C={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},s=Object.freeze({__proto__:null,fromString:g,add:_,add_:m,multiply:d,multiply_:p,interpolate:q0,lerp:G0,interpolateHSL:A,lerpHSL:k,randomize:T,rgb2hsl:x,hsl2rgb:a,toRGB:f,toHex:S}),Z0=function(Y){K0(G,Y);function G(){var K=Y.call(this)||this;K._uniforms={};try{K._gl=K._initWebGL()}catch(Z){if(typeof Z==="string")alert(Z);else if(Z instanceof Error)alert(Z.message)}return K}G.isSupported=function K(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var z=G.prototype;return z.schedule=function K(Z){requestAnimationFrame(Z)},z.getContainer=function K(){return this._gl.canvas},z.setOptions=function K(Z){var Q=this;Y.prototype.setOptions.call(this,Z),this._updateSize();var V=this._options.tileSet;if(V&&"complete"in V&&!V.complete)V.addEventListener("load",function(){return Q._updateTexture(V)});else this._updateTexture(V)},z.draw=function K(Z,Q){var V=this._gl,U=this._options,$=Z[0],w=Z[1],L=Z[2],H=Z[3],F=Z[4],D=V.canvas.height-(w+1)*U.tileHeight;if(V.scissor($*U.tileWidth,D,U.tileWidth,U.tileHeight),Q){if(U.tileColorize)V.clearColor(0,0,0,0);else V.clearColor.apply(V,_0(F));V.clear(V.COLOR_BUFFER_BIT)}if(!L)return;var O=[].concat(L),M=[].concat(F),E=[].concat(H);V.uniform2fv(this._uniforms.targetPosRel,[$,w]);for(var I=0;I<O.length;I++){var u=this._options.tileMap[O[I]];if(!u)throw new Error('Char "'+O[I]+'" not found in tileMap');if(V.uniform1f(this._uniforms.colorize,U.tileColorize?1:0),V.uniform2fv(this._uniforms.tilesetPosAbs,u),U.tileColorize)V.uniform4fv(this._uniforms.tint,_0(E[I])),V.uniform4fv(this._uniforms.bg,_0(M[I]));V.drawArrays(V.TRIANGLE_STRIP,0,4)}},z.clear=function K(){var Z=this._gl;Z.clearColor.apply(Z,_0(this._options.bg)),Z.scissor(0,0,Z.canvas.width,Z.canvas.height),Z.clear(Z.COLOR_BUFFER_BIT)},z.computeSize=function K(Z,Q){var V=Math.floor(Z/this._options.tileWidth),U=Math.floor(Q/this._options.tileHeight);return[V,U]},z.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},z.eventToPosition=function K(Z,Q){var V=this._gl.canvas,U=V.getBoundingClientRect();if(Z-=U.left,Q-=U.top,Z*=V.width/U.width,Q*=V.height/U.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},z._initWebGL=function K(){var Z=this,Q=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=Q;var V=E0(Q,H0,$0);return Q.useProgram(V),Y0(Q),V0.forEach(function(U){return Z._uniforms[U]=Q.getUniformLocation(V,U)}),this._program=V,Q.enable(Q.BLEND),Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA),Q.enable(Q.SCISSOR_TEST),Q},z._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},z._updateSize=function K(){var Z=this._gl,Q=this._options,V=[Q.width*Q.tileWidth,Q.height*Q.tileHeight];Z.canvas.width=V[0],Z.canvas.height=V[1],Z.viewport(0,0,V[0],V[1]),Z.uniform2fv(this._uniforms.tileSize,[Q.tileWidth,Q.tileHeight]),Z.uniform2fv(this._uniforms.targetSize,V)},z._updateTexture=function K(Z){l0(this._gl,Z)},G}(P),V0=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],H0=`
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
}`.trim();function E0(Y,G,z){var K=Y.createShader(Y.VERTEX_SHADER);if(Y.shaderSource(K,G),Y.compileShader(K),!Y.getShaderParameter(K,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(K)||"");var Z=Y.createShader(Y.FRAGMENT_SHADER);if(Y.shaderSource(Z,z),Y.compileShader(Z),!Y.getShaderParameter(Z,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(Z)||"");var Q=Y.createProgram();if(Y.attachShader(Q,K),Y.attachShader(Q,Z),Y.linkProgram(Q),!Y.getProgramParameter(Q,Y.LINK_STATUS))throw new Error(Y.getProgramInfoLog(Q)||"");return Q}function Y0(Y){var G=new Float32Array([0,0,1,0,0,1,1,1]),z=Y.createBuffer();Y.bindBuffer(Y.ARRAY_BUFFER,z),Y.bufferData(Y.ARRAY_BUFFER,G,Y.STATIC_DRAW),Y.enableVertexAttribArray(0),Y.vertexAttribPointer(0,2,Y.FLOAT,!1,0,0)}function l0(Y,G){var z=Y.createTexture();return Y.bindTexture(Y.TEXTURE_2D,z),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MAG_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MIN_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_S,Y.REPEAT),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_T,Y.REPEAT),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,0),Y.texImage2D(Y.TEXTURE_2D,0,Y.RGBA,Y.RGBA,Y.UNSIGNED_BYTE,G),z}var N0={};function _0(Y){if(!(Y in N0)){var G;if(Y=="transparent")G=[0,0,0,0];else if(Y.indexOf("rgba")>-1){G=(Y.match(/[\d.]+/g)||[]).map(Number);for(var z=0;z<3;z++)G[z]=G[z]/255}else G=g(Y).map(function(K){return K/255}),G.push(1);N0[Y]=G}return N0[Y]}function d6(Y){return"\x1B[0;48;5;"+F1(Y)+"m\x1B[2J"}function l6(Y,G){return"\x1B[0;38;5;"+F1(Y)+";48;5;"+F1(G)+"m"}function n6(Y,G){return"\x1B["+(G+1)+";"+(Y+1)+"H"}function F1(Y){var G=256,z=6,K=z/G,Z=g(Y),Q=Math.floor(Z[0]*K),V=Math.floor(Z[1]*K),U=Math.floor(Z[2]*K);return Q*36+V*6+U*1+16}var m1=function(Y){K0(G,Y);function G(){var K=Y.call(this)||this;return K._offset=[0,0],K._cursor=[-1,-1],K._lastColor="",K}var z=G.prototype;return z.schedule=function K(Z){setTimeout(Z,16.666666666666668)},z.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z);var Q=[Z.width,Z.height],V=this.computeSize();this._offset=V.map(function(U,$){return Math.floor((U-Q[$])/2)})},z.clear=function K(){process.stdout.write(d6(this._options.bg))},z.draw=function K(Z,Q){var V=Z[0],U=Z[1],$=Z[2],w=Z[3],L=Z[4],H=this._offset[0]+V,F=this._offset[1]+U,D=this.computeSize();if(H<0||H>=D[0])return;if(F<0||F>=D[1])return;if(H!==this._cursor[0]||F!==this._cursor[1])process.stdout.write(n6(H,F)),this._cursor[0]=H,this._cursor[1]=F;if(Q){if(!$)$=" "}if(!$)return;var O=l6(w,L);if(O!==this._lastColor)process.stdout.write(O),this._lastColor=O;if($!="\t"){var M=[].concat($);process.stdout.write(M[0])}if(this._cursor[0]++,this._cursor[0]>=D[0])this._cursor[0]=0,this._cursor[1]++},z.computeFontSize=function K(){throw new Error("Terminal backend has no notion of font size")},z.eventToPosition=function K(Z,Q){return[Z,Q]},z.computeSize=function K(){return[process.stdout.columns,process.stdout.rows]},G}(P),r6=/%([bc]){([^}]*)}/g,S0=0,f0=1,D1=2,W1=3;function s6(Y,G){var z={width:0,height:1},K=O1(Y,G),Z=0;for(var Q=0;Q<K.length;Q++){var V=K[Q];switch(V.type){case S0:Z+=V.value.length;break;case f0:z.height++,z.width=Math.max(z.width,Z),Z=0;break}}return z.width=Math.max(z.width,Z),z}function O1(Y,G){var z=[],K=0;Y.replace(r6,function(Q,V,U,$){var w=Y.substring(K,$);if(w.length)z.push({type:S0,value:w});return z.push({type:V=="c"?D1:W1,value:U.trim()}),K=$+Q.length,""});var Z=Y.substring(K);if(Z.length)z.push({type:S0,value:Z});return o6(z,G)}function o6(Y,G){if(!G)G=1/0;var z=0,K=0,Z=-1;while(z<Y.length){var Q=Y[z];if(Q.type==f0)K=0,Z=-1;if(Q.type!=S0){z++;continue}while(K==0&&Q.value.charAt(0)==" ")Q.value=Q.value.substring(1);var V=Q.value.indexOf(`
`);if(V!=-1){Q.value=Z1(Y,z,V,!0);var U=Q.value.split("");while(U.length&&U[U.length-1]==" ")U.pop();Q.value=U.join("")}if(!Q.value.length){Y.splice(z,1);continue}if(K+Q.value.length>G){var $=-1;while(!0){var w=Q.value.indexOf(" ",$+1);if(w==-1)break;if(K+w>G)break;$=w}if($!=-1)Q.value=Z1(Y,z,$,!0);else if(Z!=-1){var L=Y[Z],H=L.value.lastIndexOf(" ");L.value=Z1(Y,Z,H,!0),z=Z}else Q.value=Z1(Y,z,G-K,!1)}else if(K+=Q.value.length,Q.value.indexOf(" ")!=-1)Z=z;z++}Y.push({type:f0});var F=null;for(var D=0;D<Y.length;D++){var O=Y[D];switch(O.type){case S0:F=O;break;case f0:if(F){var M=F.value.split("");while(M.length&&M[M.length-1]==" ")M.pop();F.value=M.join("")}F=null;break}}return Y.pop(),Y}function Z1(Y,G,z,K){var Z={type:f0},Q={type:S0,value:Y[G].value.substring(z+(K?1:0))};return Y.splice(G+1,0,Z,Q),Y[G].value.substring(0,z)}var a6=Object.freeze({__proto__:null,TYPE_TEXT:S0,TYPE_NEWLINE:f0,TYPE_FG:D1,TYPE_BG:W1,measure:s6,tokenize:O1}),R1=80,M1=25,X0={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},i6={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},e6={hex:Q0,rect:o,tile:n,"tile-gl":Z0,term:m1},t6={width:R1,height:M1,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},m0=function(){function Y(z){if(z===void 0)z={};this._data={},this._dirty=!1,this._options={},z=Object.assign({},t6,z),this.setOptions(z),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var G=Y.prototype;return G.DEBUG=function z(K,Z,Q){var V=[this._options.bg,this._options.fg];this.draw(K,Z,null,null,V[Q%V.length])},G.clear=function z(){this._data={},this._dirty=!0},G.setOptions=function z(K){if(Object.assign(this._options,K),K.width||K.height||K.fontSize||K.fontFamily||K.spacing||K.layout){if(K.layout){var Z=e6[K.layout];this._backend=new Z}this._backend.setOptions(this._options),this._dirty=!0}return this},G.getOptions=function z(){return this._options},G.getContainer=function z(){return this._backend.getContainer()},G.computeSize=function z(K,Z){return this._backend.computeSize(K,Z)},G.computeFontSize=function z(K,Z){return this._backend.computeFontSize(K,Z)},G.computeTileSize=function z(K,Z){var Q=Math.floor(K/this._options.width),V=Math.floor(Z/this._options.height);return[Q,V]},G.eventToPosition=function z(K){var Z,Q;if("touches"in K)Z=K.touches[0].clientX,Q=K.touches[0].clientY;else Z=K.clientX,Q=K.clientY;return this._backend.eventToPosition(Z,Q)},G.draw=function z(K,Z,Q,V,U){if(!V)V=this._options.fg;if(!U)U=this._options.bg;var $=K+","+Z;if(this._data[$]=[K,Z,Q,V,U],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[$]=!0},G.drawOver=function z(K,Z,Q,V,U){var $=K+","+Z,w=this._data[$];if(w)w[2]=Q||w[2],w[3]=V||w[3],w[4]=U||w[4];else this.draw(K,Z,Q,V,U)},G.drawText=function z(K,Z,Q,V){var U=null,$=null,w=K,L=Z,H=1;if(!V)V=this._options.width-K;var F=O1(Q,V);while(F.length){var D=F.shift();switch(D.type){case S0:var O=!1,M=!1,E=!1,I=!1;for(var u=0;u<D.value.length;u++){var h=D.value.charCodeAt(u),c=D.value.charAt(u);if(this._options.layout==="term"){var i=h>>8,J0=i===17||i>=46&&i<=159||i>=172&&i<=215||h>=43360&&h<=43391;if(J0){this.draw(w+0,L,c,U,$),this.draw(w+1,L,"\t",U,$),w+=2;continue}}if(E=h>65280&&h<65377||h>65500&&h<65512||h>65518,O=c.charCodeAt(0)==32||c.charCodeAt(0)==12288,I&&!E&&!O)w++;if(E&&!M)w++;this.draw(w++,L,c,U,$),M=O,I=E}break;case D1:U=D.value||null;break;case W1:$=D.value||null;break;case f0:w=K,L++,H++;break}}return H},G._tick=function z(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var K in this._data)this._draw(K,!1)}else for(var Z in this._dirty)this._draw(Z,!0);this._dirty=!1},G._draw=function z(K,Z){var Q=this._data[K];if(Q[4]!=this._options.bg)Z=!0;this._backend.draw(Q,Z)},Y}();m0.Rect=o,m0.Hex=Q0,m0.Tile=n,m0.TileGL=Z0,m0.Term=m1;var ZZ=function(){function Y(z){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,z),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var K=0;K<this._options.order;K++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var G=Y.prototype;return G.clear=function z(){this._data={},this._priorValues={}},G.generate=function z(){var K=[this._sample(this._prefix)];while(K[K.length-1]!=this._boundary)K.push(this._sample(K));return this._join(K.slice(0,-1))},G.observe=function z(K){var Z=this._split(K);for(var Q=0;Q<Z.length;Q++)this._priorValues[Z[Q]]=this._options.prior;Z=this._prefix.concat(Z).concat(this._suffix);for(var V=this._options.order;V<Z.length;V++){var U=Z.slice(V-this._options.order,V),$=Z[V];for(var w=0;w<U.length;w++){var L=U.slice(w);this._observeEvent(L,$)}}},G.getStats=function z(){var K=[],Z=Object.keys(this._priorValues).length;Z--,K.push("distinct samples: "+Z);var Q=Object.keys(this._data).length,V=0;for(var U in this._data)V+=Object.keys(this._data[U]).length;return K.push("dictionary size (contexts): "+Q),K.push("dictionary size (events): "+V),K.join(", ")},G._split=function z(K){return K.split(this._options.words?/\s+/:"")},G._join=function z(K){return K.join(this._options.words?" ":"")},G._observeEvent=function z(K,Z){var Q=this._join(K);if(!(Q in this._data))this._data[Q]={};var V=this._data[Q];if(!(Z in V))V[Z]=0;V[Z]++},G._sample=function z(K){K=this._backoff(K);var Z=this._join(K),Q=this._data[Z],V={};if(this._options.prior){for(var U in this._priorValues)V[U]=this._priorValues[U];for(var $ in Q)V[$]+=Q[$]}else V=Q;return B.getWeightedValue(V)},G._backoff=function z(K){if(K.length>this._options.order)K=K.slice(-this._options.order);else if(K.length<this._options.order)K=this._prefix.slice(0,this._options.order-K.length).concat(K);while(!(this._join(K)in this._data)&&K.length>0)K=K.slice(1);return K},Y}(),y1=function(){function Y(){this.heap=[],this.timestamp=0}var G=Y.prototype;return G.lessThan=function z(K,Z){return K.key==Z.key?K.timestamp<Z.timestamp:K.key<Z.key},G.shift=function z(K){this.heap=this.heap.map(function(Z){var{key:Q,value:V,timestamp:U}=Z;return{key:Q+K,value:V,timestamp:U}})},G.len=function z(){return this.heap.length},G.push=function z(K,Z){this.timestamp+=1;var Q=this.len();this.heap.push({value:K,timestamp:this.timestamp,key:Z}),this.updateUp(Q)},G.pop=function z(){if(this.len()==0)throw new Error("no element to pop");var K=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return K},G.find=function z(K){for(var Z=0;Z<this.len();Z++)if(K==this.heap[Z].value)return this.heap[Z];return null},G.remove=function z(K){var Z=null;for(var Q=0;Q<this.len();Q++)if(K==this.heap[Q].value)Z=Q;if(Z===null)return!1;if(this.len()>1){var V=this.heap.pop();if(V.value!=K)this.heap[Z]=V,this.updateDown(Z);return!0}else this.heap.pop();return!0},G.parentNode=function z(K){return Math.floor((K-1)/2)},G.leftChildNode=function z(K){return 2*K+1},G.rightChildNode=function z(K){return 2*K+2},G.existNode=function z(K){return K>=0&&K<this.heap.length},G.swap=function z(K,Z){var Q=this.heap[K];this.heap[K]=this.heap[Z],this.heap[Z]=Q},G.minNode=function z(K){var Z=K.filter(this.existNode.bind(this)),Q=Z[0];for(var V=rZ(Z),U;!(U=V()).done;){var $=U.value;if(this.lessThan(this.heap[$],this.heap[Q]))Q=$}return Q},G.updateUp=function z(K){if(K==0)return;var Z=this.parentNode(K);if(this.existNode(Z)&&this.lessThan(this.heap[K],this.heap[Z]))this.swap(K,Z),this.updateUp(Z)},G.updateDown=function z(K){var Z=this.leftChildNode(K),Q=this.rightChildNode(K);if(!this.existNode(Z))return;var V=this.minNode([K,Z,Q]);if(V!=K)this.swap(K,V),this.updateDown(V)},G.debugPrint=function z(){console.log(this.heap)},Y}(),p1=function(){function Y(){this._time=0,this._events=new y1}var G=Y.prototype;return G.getTime=function z(){return this._time},G.clear=function z(){return this._events=new y1,this},G.add=function z(K,Z){this._events.push(K,Z)},G.get=function z(){if(!this._events.len())return null;var K=this._events.pop(),Z=K.key,Q=K.value;if(Z>0)this._time+=Z,this._events.shift(-Z);return Q},G.getEventTime=function z(K){var Z=this._events.find(K);if(Z){var Q=Z.key;return Q}return},G.remove=function z(K){return this._events.remove(K)},Y}(),j1=function(){function Y(){this._queue=new p1,this._repeat=[],this._current=null}var G=Y.prototype;return G.getTime=function z(){return this._queue.getTime()},G.add=function z(K,Z){if(Z)this._repeat.push(K);return this},G.getTimeOf=function z(K){return this._queue.getEventTime(K)},G.clear=function z(){return this._queue.clear(),this._repeat=[],this._current=null,this},G.remove=function z(K){var Z=this._queue.remove(K),Q=this._repeat.indexOf(K);if(Q!=-1)this._repeat.splice(Q,1);if(this._current==K)this._current=null;return Z},G.next=function z(){return this._current=this._queue.get(),this._current},Y}(),JZ=function(Y){K0(G,Y);function G(){return Y.apply(this,arguments)||this}var z=G.prototype;return z.add=function K(Z,Q){return this._queue.add(Z,0),Y.prototype.add.call(this,Z,Q)},z.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return Y.prototype.next.call(this)},G}(j1),QZ=function(Y){K0(G,Y);function G(){return Y.apply(this,arguments)||this}var z=G.prototype;return z.add=function K(Z,Q,V){return this._queue.add(Z,V!==void 0?V:1/Z.getSpeed()),Y.prototype.add.call(this,Z,Q)},z.next=function K(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return Y.prototype.next.call(this)},G}(j1),VZ=function(Y){K0(G,Y);function G(){var K=Y.call(this)||this;return K._defaultDuration=1,K._duration=K._defaultDuration,K}var z=G.prototype;return z.add=function K(Z,Q,V){return this._queue.add(Z,V||this._defaultDuration),Y.prototype.add.call(this,Z,Q)},z.clear=function K(){return this._duration=this._defaultDuration,Y.prototype.clear.call(this)},z.remove=function K(Z){if(Z==this._current)this._duration=this._defaultDuration;return Y.prototype.remove.call(this,Z)},z.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return Y.prototype.next.call(this)},z.setDuration=function K(Z){if(this._current)this._duration=Z;return this},G}(j1),KZ={Simple:JZ,Speed:QZ,Action:VZ},E1=function(){function Y(z,K){if(K===void 0)K={};this._lightPasses=z,this._options=Object.assign({topology:8},K)}var G=Y.prototype;return G._getCircle=function z(K,Z,Q){var V=[],U,$,w;switch(this._options.topology){case 4:$=1,w=[0,1],U=[X0[8][7],X0[8][1],X0[8][3],X0[8][5]];break;case 6:U=X0[6],$=1,w=[-1,1];break;case 8:U=X0[4],$=2,w=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var L=K+w[0]*Q,H=Z+w[1]*Q;for(var F=0;F<U.length;F++)for(var D=0;D<Q*$;D++)V.push([L,H]),L+=U[F][0],H+=U[F][1];return V},Y}(),UZ=function(Y){K0(G,Y);function G(){return Y.apply(this,arguments)||this}var z=G.prototype;return z.compute=function K(Z,Q,V,U){if(U(Z,Q,0,1),!this._lightPasses(Z,Q))return;var $=[],w,L,H,F,D;for(var O=1;O<=V;O++){var M=this._getCircle(Z,Q,O),E=360/M.length;for(var I=0;I<M.length;I++){if(H=M[I][0],F=M[I][1],w=E*(I-0.5),L=w+E,D=!this._lightPasses(H,F),this._visibleCoords(Math.floor(w),Math.ceil(L),D,$))U(H,F,O,1);if($.length==2&&$[0]==0&&$[1]==360)return}}},z._visibleCoords=function K(Z,Q,V,U){if(Z<0){var $=this._visibleCoords(0,Q,V,U),w=this._visibleCoords(360+Z,360,V,U);return $||w}var L=0;while(L<U.length&&U[L]<Z)L++;if(L==U.length){if(V)U.push(Z,Q);return!0}var H=0;if(L%2){while(L<U.length&&U[L]<Q)L++,H++;if(H==0)return!1;if(V)if(H%2)U.splice(L-H,H,Q);else U.splice(L-H,H);return!0}else{while(L<U.length&&U[L]<Q)L++,H++;if(Z==U[L-H]&&H==1)return!1;if(V)if(H%2)U.splice(L-H,H,Z);else U.splice(L-H,H,Z,Q);return!0}},G}(E1),qZ=function(Y){K0(G,Y);function G(){return Y.apply(this,arguments)||this}var z=G.prototype;return z.compute=function K(Z,Q,V,U){if(U(Z,Q,0,1),!this._lightPasses(Z,Q))return;var $=[],w,L,H,F,D,O;for(var M=1;M<=V;M++){var E=this._getCircle(Z,Q,M),I=E.length;for(var u=0;u<I;u++){if(w=E[u][0],L=E[u][1],F=[u?2*u-1:2*I-1,2*I],D=[2*u+1,2*I],H=!this._lightPasses(w,L),O=this._checkVisibility(F,D,H,$),O)U(w,L,M,O);if($.length==2&&$[0][0]==0&&$[1][0]==$[1][1])return}}},z._checkVisibility=function K(Z,Q,V,U){if(Z[0]>Q[0]){var $=this._checkVisibility(Z,[Z[1],Z[1]],V,U),w=this._checkVisibility([0,1],Q,V,U);return($+w)/2}var L=0,H=!1;while(L<U.length){var F=U[L],D=F[0]*Z[1]-Z[0]*F[1];if(D>=0){if(D==0&&!(L%2))H=!0;break}L++}var O=U.length,M=!1;while(O--){var E=U[O],I=Q[0]*E[1]-E[0]*Q[1];if(I>=0){if(I==0&&O%2)M=!0;break}}var u=!0;if(L==O&&(H||M))u=!1;else if(H&&M&&L+1==O&&O%2)u=!1;else if(L>O&&L%2)u=!1;if(!u)return 0;var h,c=O-L+1;if(c%2)if(L%2){var i=U[L];if(h=(Q[0]*i[1]-i[0]*Q[1])/(i[1]*Q[1]),V)U.splice(L,c,Q)}else{var J0=U[O];if(h=(J0[0]*Z[1]-Z[0]*J0[1])/(Z[1]*J0[1]),V)U.splice(L,c,Z)}else if(L%2){var z0=U[L],w0=U[O];if(h=(w0[0]*z0[1]-z0[0]*w0[1])/(z0[1]*w0[1]),V)U.splice(L,c)}else{if(V)U.splice(L,c,Z,Q);return 1}var C0=(Q[0]*Z[1]-Z[0]*Q[1])/(Z[1]*Q[1]);return h/C0},G}(E1),I0=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],zZ=function(Y){K0(G,Y);function G(){return Y.apply(this,arguments)||this}var z=G.prototype;return z.compute=function K(Z,Q,V,U){U(Z,Q,0,1);for(var $=0;$<I0.length;$++)this._renderOctant(Z,Q,I0[$],V,U)},z.compute180=function K(Z,Q,V,U,$){$(Z,Q,0,1);var w=(U-1+8)%8,L=(U-2+8)%8,H=(U+1+8)%8;this._renderOctant(Z,Q,I0[L],V,$),this._renderOctant(Z,Q,I0[w],V,$),this._renderOctant(Z,Q,I0[U],V,$),this._renderOctant(Z,Q,I0[H],V,$)},z.compute90=function K(Z,Q,V,U,$){$(Z,Q,0,1);var w=(U-1+8)%8;this._renderOctant(Z,Q,I0[U],V,$),this._renderOctant(Z,Q,I0[w],V,$)},z._renderOctant=function K(Z,Q,V,U,$){this._castVisibility(Z,Q,1,1,0,U+1,V[0],V[1],V[2],V[3],$)},z._castVisibility=function K(Z,Q,V,U,$,w,L,H,F,D,O){if(U<$)return;for(var M=V;M<=w;M++){var E=-M-1,I=-M,u=!1,h=0;while(E<=0){E+=1;var c=Z+E*L+I*H,i=Q+E*F+I*D,J0=(E-0.5)/(I+0.5),z0=(E+0.5)/(I-0.5);if(z0>U)continue;if(J0<$)break;if(E*E+I*I<w*w)O(c,i,M,1);if(!u){if(!this._lightPasses(c,i)&&M<w)u=!0,this._castVisibility(Z,Q,M+1,U,J0,w,L,H,F,D,O),h=z0}else{if(!this._lightPasses(c,i)){h=z0;continue}u=!1,U=h}}if(u)break}},G}(E1),$Z={DiscreteShadowcasting:UZ,PreciseShadowcasting:qZ,RecursiveShadowcasting:zZ},b0=function(){function Y(z,K){if(z===void 0)z=R1;if(K===void 0)K=M1;this._width=z,this._height=K}var G=Y.prototype;return G._fillMap=function z(K){var Z=[];for(var Q=0;Q<this._width;Q++){Z.push([]);for(var V=0;V<this._height;V++)Z[Q].push(K)}return Z},Y}(),XZ=function(Y){K0(G,Y);function G(){return Y.apply(this,arguments)||this}var z=G.prototype;return z.create=function K(Z){var Q=this._width-1,V=this._height-1;for(var U=0;U<=Q;U++)for(var $=0;$<=V;$++){var w=U&&$&&U<Q&&$<V;Z(U,$,w?0:1)}return this},G}(b0),c1=function(Y){K0(G,Y);function G(K,Z){var Q=Y.call(this,K,Z)||this;return Q._rooms=[],Q._corridors=[],Q}var z=G.prototype;return z.getRooms=function K(){return this._rooms},z.getCorridors=function K(){return this._corridors},G}(b0),d1=function Y(){},J1=function(Y){K0(G,Y);function G(K,Z,Q,V,U,$){var w=Y.call(this)||this;if(w._x1=K,w._y1=Z,w._x2=Q,w._y2=V,w._doors={},U!==void 0&&$!==void 0)w.addDoor(U,$);return w}G.createRandomAt=function K(Z,Q,V,U,$){var w=$.roomWidth[0],L=$.roomWidth[1],H=B.getUniformInt(w,L);w=$.roomHeight[0],L=$.roomHeight[1];var F=B.getUniformInt(w,L);if(V==1){var D=Q-Math.floor(B.getUniform()*F);return new this(Z+1,D,Z+H,D+F-1,Z,Q)}if(V==-1){var O=Q-Math.floor(B.getUniform()*F);return new this(Z-H,O,Z-1,O+F-1,Z,Q)}if(U==1){var M=Z-Math.floor(B.getUniform()*H);return new this(M,Q+1,M+H-1,Q+F,Z,Q)}if(U==-1){var E=Z-Math.floor(B.getUniform()*H);return new this(E,Q-F,E+H-1,Q-1,Z,Q)}throw new Error("dx or dy must be 1 or -1")},G.createRandomCenter=function K(Z,Q,V){var U=V.roomWidth[0],$=V.roomWidth[1],w=B.getUniformInt(U,$);U=V.roomHeight[0],$=V.roomHeight[1];var L=B.getUniformInt(U,$),H=Z-Math.floor(B.getUniform()*w),F=Q-Math.floor(B.getUniform()*L),D=H+w-1,O=F+L-1;return new this(H,F,D,O)},G.createRandom=function K(Z,Q,V){var U=V.roomWidth[0],$=V.roomWidth[1],w=B.getUniformInt(U,$);U=V.roomHeight[0],$=V.roomHeight[1];var L=B.getUniformInt(U,$),H=Z-w-1,F=Q-L-1,D=1+Math.floor(B.getUniform()*H),O=1+Math.floor(B.getUniform()*F),M=D+w-1,E=O+L-1;return new this(D,O,M,E)};var z=G.prototype;return z.addDoor=function K(Z,Q){return this._doors[Z+","+Q]=1,this},z.getDoors=function K(Z){for(var Q in this._doors){var V=Q.split(",");Z(parseInt(V[0]),parseInt(V[1]))}return this},z.clearDoors=function K(){return this._doors={},this},z.addDoors=function K(Z){var Q=this._x1-1,V=this._x2+1,U=this._y1-1,$=this._y2+1;for(var w=Q;w<=V;w++)for(var L=U;L<=$;L++){if(w!=Q&&w!=V&&L!=U&&L!=$)continue;if(Z(w,L))continue;this.addDoor(w,L)}return this},z.debug=function K(){console.log("room",this._x1,this._y1,this._x2,this._y2)},z.isValid=function K(Z,Q){var V=this._x1-1,U=this._x2+1,$=this._y1-1,w=this._y2+1;for(var L=V;L<=U;L++)for(var H=$;H<=w;H++)if(L==V||L==U||H==$||H==w){if(!Z(L,H))return!1}else if(!Q(L,H))return!1;return!0},z.create=function K(Z){var Q=this._x1-1,V=this._x2+1,U=this._y1-1,$=this._y2+1,w=0;for(var L=Q;L<=V;L++)for(var H=U;H<=$;H++){if(L+","+H in this._doors)w=2;else if(L==Q||L==V||H==U||H==$)w=1;else w=0;Z(L,H,w)}},z.getCenter=function K(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},z.getLeft=function K(){return this._x1},z.getRight=function K(){return this._x2},z.getTop=function K(){return this._y1},z.getBottom=function K(){return this._y2},G}(d1),C1=function(Y){K0(G,Y);function G(K,Z,Q,V){var U=Y.call(this)||this;return U._startX=K,U._startY=Z,U._endX=Q,U._endY=V,U._endsWithAWall=!0,U}G.createRandomAt=function K(Z,Q,V,U,$){var w=$.corridorLength[0],L=$.corridorLength[1],H=B.getUniformInt(w,L);return new this(Z,Q,Z+V*H,Q+U*H)};var z=G.prototype;return z.debug=function K(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},z.isValid=function K(Z,Q){var V=this._startX,U=this._startY,$=this._endX-V,w=this._endY-U,L=1+Math.max(Math.abs($),Math.abs(w));if($)$=$/Math.abs($);if(w)w=w/Math.abs(w);var H=w,F=-$,D=!0;for(var O=0;O<L;O++){var M=V+O*$,E=U+O*w;if(!Q(M,E))D=!1;if(!Z(M+H,E+F))D=!1;if(!Z(M-H,E-F))D=!1;if(!D){L=O,this._endX=M-$,this._endY=E-w;break}}if(L==0)return!1;if(L==1&&Z(this._endX+$,this._endY+w))return!1;var I=!Z(this._endX+$+H,this._endY+w+F),u=!Z(this._endX+$-H,this._endY+w-F);if(this._endsWithAWall=Z(this._endX+$,this._endY+w),(I||u)&&this._endsWithAWall)return!1;return!0},z.create=function K(Z){var Q=this._startX,V=this._startY,U=this._endX-Q,$=this._endY-V,w=1+Math.max(Math.abs(U),Math.abs($));if(U)U=U/Math.abs(U);if($)$=$/Math.abs($);for(var L=0;L<w;L++){var H=Q+L*U,F=V+L*$;Z(H,F,0)}return!0},z.createPriorityWalls=function K(Z){if(!this._endsWithAWall)return;var Q=this._startX,V=this._startY,U=this._endX-Q,$=this._endY-V;if(U)U=U/Math.abs(U);if($)$=$/Math.abs($);var w=$,L=-U;Z(this._endX+U,this._endY+$),Z(this._endX+w,this._endY+L),Z(this._endX-w,this._endY-L)},G}(d1),BZ=function(Y){K0(G,Y);function G(K,Z,Q){var V=Y.call(this,K,Z)||this;return V._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(V._options,Q),V._map=[],V._dug=0,V._roomAttempts=20,V._corridorAttempts=20,V._connected=[],V._unconnected=[],V._digCallback=V._digCallback.bind(h0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(h0(V)),V._isWallCallback=V._isWallCallback.bind(h0(V)),V}var z=G.prototype;return z.create=function K(Z){var Q=Date.now();while(!0){var V=Date.now();if(V-Q>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(Z)for(var U=0;U<this._width;U++)for(var $=0;$<this._height;$++)Z(U,$,this._map[U][$]);return this},z._generateRooms=function K(){var Z=this._width-2,Q=this._height-2,V;do if(V=this._generateRoom(),this._dug/(Z*Q)>this._options.roomDugPercentage)break;while(V)},z._generateRoom=function K(){var Z=0;while(Z<this._roomAttempts){Z++;var Q=J1.createRandom(this._width,this._height,this._options);if(!Q.isValid(this._isWallCallback,this._canBeDugCallback))continue;return Q.create(this._digCallback),this._rooms.push(Q),Q}return null},z._generateCorridors=function K(){var Z=0;while(Z<this._corridorAttempts){Z++,this._corridors=[],this._map=this._fillMap(1);for(var Q=0;Q<this._rooms.length;Q++){var V=this._rooms[Q];V.clearDoors(),V.create(this._digCallback)}if(this._unconnected=B.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var U=B.getItem(this._connected);if(!U)break;var $=this._closestRoom(this._unconnected,U);if(!$)break;var w=this._closestRoom(this._connected,$);if(!w)break;var L=this._connectRooms($,w);if(!L)break;if(!this._unconnected.length)return!0}}return!1},z._closestRoom=function K(Z,Q){var V=1/0,U=Q.getCenter(),$=null;for(var w=0;w<Z.length;w++){var L=Z[w],H=L.getCenter(),F=H[0]-U[0],D=H[1]-U[1],O=F*F+D*D;if(O<V)V=O,$=L}return $},z._connectRooms=function K(Z,Q){var V=Z.getCenter(),U=Q.getCenter(),$=U[0]-V[0],w=U[1]-V[1],L,H,F,D,O,M,E;if(Math.abs($)<Math.abs(w))F=w>0?2:0,D=(F+2)%4,O=Q.getLeft(),M=Q.getRight(),E=0;else F=$>0?1:3,D=(F+2)%4,O=Q.getTop(),M=Q.getBottom(),E=1;if(L=this._placeInWall(Z,F),!L)return!1;if(L[E]>=O&&L[E]<=M){H=L.slice();var I=0;switch(D){case 0:I=Q.getTop()-1;break;case 1:I=Q.getRight()+1;break;case 2:I=Q.getBottom()+1;break;case 3:I=Q.getLeft()-1;break}H[(E+1)%2]=I,this._digLine([L,H])}else if(L[E]<O-1||L[E]>M+1){var u=L[E]-U[E],h=0;switch(D){case 0:case 1:h=u<0?3:1;break;case 2:case 3:h=u<0?1:3;break}if(D=(D+h)%4,H=this._placeInWall(Q,D),!H)return!1;var c=[0,0];c[E]=L[E];var i=(E+1)%2;c[i]=H[i],this._digLine([L,c,H])}else{var J0=(E+1)%2;if(H=this._placeInWall(Q,D),!H)return!1;var z0=Math.round((H[J0]+L[J0])/2),w0=[0,0],C0=[0,0];w0[E]=L[E],w0[J0]=z0,C0[E]=H[E],C0[J0]=z0,this._digLine([L,w0,C0,H])}if(Z.addDoor(L[0],L[1]),Q.addDoor(H[0],H[1]),E=this._unconnected.indexOf(Z),E!=-1)this._unconnected.splice(E,1),this._connected.push(Z);if(E=this._unconnected.indexOf(Q),E!=-1)this._unconnected.splice(E,1),this._connected.push(Q);return!0},z._placeInWall=function K(Z,Q){var V=[0,0],U=[0,0],$=0;switch(Q){case 0:U=[1,0],V=[Z.getLeft(),Z.getTop()-1],$=Z.getRight()-Z.getLeft()+1;break;case 1:U=[0,1],V=[Z.getRight()+1,Z.getTop()],$=Z.getBottom()-Z.getTop()+1;break;case 2:U=[1,0],V=[Z.getLeft(),Z.getBottom()+1],$=Z.getRight()-Z.getLeft()+1;break;case 3:U=[0,1],V=[Z.getLeft()-1,Z.getTop()],$=Z.getBottom()-Z.getTop()+1;break}var w=[],L=-2;for(var H=0;H<$;H++){var F=V[0]+H*U[0],D=V[1]+H*U[1];w.push(null);var O=this._map[F][D]==1;if(O){if(L!=H-1)w[H]=[F,D]}else if(L=H,H)w[H-1]=null}for(var M=w.length-1;M>=0;M--)if(!w[M])w.splice(M,1);return w.length?B.getItem(w):null},z._digLine=function K(Z){for(var Q=1;Q<Z.length;Q++){var V=Z[Q-1],U=Z[Q],$=new C1(V[0],V[1],U[0],U[1]);$.create(this._digCallback),this._corridors.push($)}},z._digCallback=function K(Z,Q,V){if(this._map[Z][Q]=V,V==0)this._dug++},z._isWallCallback=function K(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},z._canBeDugCallback=function K(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},G}(c1),GZ=function(Y){K0(G,Y);function G(K,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,K,Z)||this,V._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},V.setOptions(Q),V._dirs=X0[V._options.topology],V._map=V._fillMap(0),V}var z=G.prototype;return z.randomize=function K(Z){for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)this._map[Q][V]=B.getUniform()<Z?1:0;return this},z.setOptions=function K(Z){Object.assign(this._options,Z)},z.set=function K(Z,Q,V){this._map[Z][Q]=V},z.create=function K(Z){var Q=this._fillMap(0),V=this._options.born,U=this._options.survive;for(var $=0;$<this._height;$++){var w=1,L=0;if(this._options.topology==6)w=2,L=$%2;for(var H=L;H<this._width;H+=w){var F=this._map[H][$],D=this._getNeighbors(H,$);if(F&&U.indexOf(D)!=-1)Q[H][$]=1;else if(!F&&V.indexOf(D)!=-1)Q[H][$]=1}}this._map=Q,Z&&this._serviceCallback(Z)},z._serviceCallback=function K(Z){for(var Q=0;Q<this._height;Q++){var V=1,U=0;if(this._options.topology==6)V=2,U=Q%2;for(var $=U;$<this._width;$+=V)Z($,Q,this._map[$][Q])}},z._getNeighbors=function K(Z,Q){var V=0;for(var U=0;U<this._dirs.length;U++){var $=this._dirs[U],w=Z+$[0],L=Q+$[1];if(w<0||w>=this._width||L<0||L>=this._height)continue;V+=this._map[w][L]==1?1:0}return V},z.connect=function K(Z,Q,V){if(!Q)Q=0;var U=[],$={},w=1,L=[0,0];if(this._options.topology==6)w=2,L=[0,1];for(var H=0;H<this._height;H++)for(var F=L[H%2];F<this._width;F+=w)if(this._freeSpace(F,H,Q)){var D=[F,H];$[this._pointKey(D)]=D,U.push([F,H])}var O=U[B.getUniformInt(0,U.length-1)],M=this._pointKey(O),E={};E[M]=O,delete $[M],this._findConnected(E,$,[O],!1,Q);while(Object.keys($).length>0){var I=this._getFromTo(E,$),u=I[0],h=I[1],c={};c[this._pointKey(u)]=u,this._findConnected(c,$,[u],!0,Q);var i=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;i.call(this,h,u,E,$,Q,V);for(var J0 in c){var z0=c[J0];this._map[z0[0]][z0[1]]=Q,E[J0]=z0,delete $[J0]}}Z&&this._serviceCallback(Z)},z._getFromTo=function K(Z,Q){var V=[0,0],U=[0,0],$,w=Object.keys(Z),L=Object.keys(Q);for(var H=0;H<5;H++){if(w.length<L.length){var F=w;U=Z[F[B.getUniformInt(0,F.length-1)]],V=this._getClosest(U,Q)}else{var D=L;V=Q[D[B.getUniformInt(0,D.length-1)]],U=this._getClosest(V,Z)}if($=(V[0]-U[0])*(V[0]-U[0])+(V[1]-U[1])*(V[1]-U[1]),$<64)break}return[V,U]},z._getClosest=function K(Z,Q){var V=null,U=null;for(var $ in Q){var w=Q[$],L=(w[0]-Z[0])*(w[0]-Z[0])+(w[1]-Z[1])*(w[1]-Z[1]);if(U==null||L<U)U=L,V=w}return V},z._findConnected=function K(Z,Q,V,U,$){while(V.length>0){var w=V.splice(0,1)[0],L=void 0;if(this._options.topology==6)L=[[w[0]+2,w[1]],[w[0]+1,w[1]-1],[w[0]-1,w[1]-1],[w[0]-2,w[1]],[w[0]-1,w[1]+1],[w[0]+1,w[1]+1]];else L=[[w[0]+1,w[1]],[w[0]-1,w[1]],[w[0],w[1]+1],[w[0],w[1]-1]];for(var H=0;H<L.length;H++){var F=this._pointKey(L[H]);if(Z[F]==null&&this._freeSpace(L[H][0],L[H][1],$)){if(Z[F]=L[H],!U)delete Q[F];V.push(L[H])}}}},z._tunnelToConnected=function K(Z,Q,V,U,$,w){var L,H;if(Q[0]<Z[0])L=Q,H=Z;else L=Z,H=Q;for(var F=L[0];F<=H[0];F++){this._map[F][L[1]]=$;var D=[F,L[1]],O=this._pointKey(D);V[O]=D,delete U[O]}if(w&&L[0]<H[0])w(L,[H[0],L[1]]);var M=H[0];if(Q[1]<Z[1])L=Q,H=Z;else L=Z,H=Q;for(var E=L[1];E<H[1];E++){this._map[M][E]=$;var I=[M,E],u=this._pointKey(I);V[u]=I,delete U[u]}if(w&&L[1]<H[1])w([H[0],L[1]],[H[0],H[1]])},z._tunnelToConnected6=function K(Z,Q,V,U,$,w){var L,H;if(Q[0]<Z[0])L=Q,H=Z;else L=Z,H=Q;var F=L[0],D=L[1];while(!(F==H[0]&&D==H[1])){var O=2;if(D<H[1])D++,O=1;else if(D>H[1])D--,O=1;if(F<H[0])F+=O;else if(F>H[0])F-=O;else if(H[1]%2)F-=O;else F+=O;this._map[F][D]=$;var M=[F,D],E=this._pointKey(M);V[E]=M,delete U[E]}if(w)w(Q,Z)},z._freeSpace=function K(Z,Q,V){return Z>=0&&Z<this._width&&Q>=0&&Q<this._height&&this._map[Z][Q]==V},z._pointKey=function K(Z){return Z[0]+"."+Z[1]},G}(b0),YZ={room:J1,corridor:C1},LZ=function(Y){K0(G,Y);function G(K,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,K,Z)||this,V._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},Q),V._features={room:4,corridor:4},V._map=[],V._featureAttempts=20,V._walls={},V._dug=0,V._digCallback=V._digCallback.bind(h0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(h0(V)),V._isWallCallback=V._isWallCallback.bind(h0(V)),V._priorityWallCallback=V._priorityWallCallback.bind(h0(V)),V}var z=G.prototype;return z.create=function K(Z){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var Q=(this._width-2)*(this._height-2);this._firstRoom();var V=Date.now(),U;do{U=0;var $=Date.now();if($-V>this._options.timeLimit)break;var w=this._findWall();if(!w)break;var L=w.split(","),H=parseInt(L[0]),F=parseInt(L[1]),D=this._getDiggingDirection(H,F);if(!D)continue;var O=0;do if(O++,this._tryFeature(H,F,D[0],D[1])){this._removeSurroundingWalls(H,F),this._removeSurroundingWalls(H-D[0],F-D[1]);break}while(O<this._featureAttempts);for(var M in this._walls)if(this._walls[M]>1)U++}while(this._dug/Q<this._options.dugPercentage||U);if(this._addDoors(),Z)for(var E=0;E<this._width;E++)for(var I=0;I<this._height;I++)Z(E,I,this._map[E][I]);return this._walls={},this._map=[],this},z._digCallback=function K(Z,Q,V){if(V==0||V==2)this._map[Z][Q]=0,this._dug++;else this._walls[Z+","+Q]=1},z._isWallCallback=function K(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},z._canBeDugCallback=function K(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},z._priorityWallCallback=function K(Z,Q){this._walls[Z+","+Q]=2},z._firstRoom=function K(){var Z=Math.floor(this._width/2),Q=Math.floor(this._height/2),V=J1.createRandomCenter(Z,Q,this._options);this._rooms.push(V),V.create(this._digCallback)},z._findWall=function K(){var Z=[],Q=[];for(var V in this._walls){var U=this._walls[V];if(U==2)Q.push(V);else Z.push(V)}var $=Q.length?Q:Z;if(!$.length)return null;var w=B.getItem($.sort());return delete this._walls[w],w},z._tryFeature=function K(Z,Q,V,U){var $=B.getWeightedValue(this._features),w=YZ[$],L=w.createRandomAt(Z,Q,V,U,this._options);if(!L.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(L.create(this._digCallback),L instanceof J1)this._rooms.push(L);if(L instanceof C1)L.createPriorityWalls(this._priorityWallCallback),this._corridors.push(L);return!0},z._removeSurroundingWalls=function K(Z,Q){var V=X0[4];for(var U=0;U<V.length;U++){var $=V[U],w=Z+$[0],L=Q+$[1];delete this._walls[w+","+L],w=Z+2*$[0],L=Q+2*$[1],delete this._walls[w+","+L]}},z._getDiggingDirection=function K(Z,Q){if(Z<=0||Q<=0||Z>=this._width-1||Q>=this._height-1)return null;var V=null,U=X0[4];for(var $=0;$<U.length;$++){var w=U[$],L=Z+w[0],H=Q+w[1];if(!this._map[L][H]){if(V)return null;V=w}}if(!V)return null;return[-V[0],-V[1]]},z._addDoors=function K(){var Z=this._map;function Q($,w){return Z[$][w]==1}for(var V=0;V<this._rooms.length;V++){var U=this._rooms[V];U.clearDoors(),U.addDoors(Q)}},G}(c1);function l1(Y,G,z){z[G[Y+1]]=z[Y],G[z[Y]]=G[Y+1],z[Y]=Y+1,G[Y+1]=Y}function n1(Y,G,z){z[G[Y]]=z[Y],G[z[Y]]=G[Y],z[Y]=Y,G[Y]=Y}var wZ=function(Y){K0(G,Y);function G(){return Y.apply(this,arguments)||this}var z=G.prototype;return z.create=function K(Z){var Q=this._fillMap(1),V=Math.ceil((this._width-2)/2),U=0.375,$=[],w=[];for(var L=0;L<V;L++)$.push(L),w.push(L);$.push(V-1);var H;for(H=1;H+3<this._height;H+=2)for(var F=0;F<V;F++){var D=2*F+1,O=H;if(Q[D][O]=0,F!=$[F+1]&&B.getUniform()>U)l1(F,$,w),Q[D+1][O]=0;if(F!=$[F]&&B.getUniform()>U)n1(F,$,w);else Q[D][O+1]=0}for(var M=0;M<V;M++){var E=2*M+1,I=H;if(Q[E][I]=0,M!=$[M+1]&&(M==$[M]||B.getUniform()>U))l1(M,$,w),Q[E+1][I]=0;n1(M,$,w)}for(var u=0;u<this._width;u++)for(var h=0;h<this._height;h++)Z(u,h,Q[u][h]);return this},G}(b0),HZ=function(Y){K0(G,Y);function G(){var K=Y.apply(this,arguments)||this;return K._stack=[],K._map=[],K}var z=G.prototype;return z.create=function K(Z){var Q=this._width,V=this._height;this._map=[];for(var U=0;U<Q;U++){this._map.push([]);for(var $=0;$<V;$++){var w=U==0||$==0||U+1==Q||$+1==V;this._map[U].push(w?1:0)}}this._stack=[[1,1,Q-2,V-2]],this._process();for(var L=0;L<Q;L++)for(var H=0;H<V;H++)Z(L,H,this._map[L][H]);return this._map=[],this},z._process=function K(){while(this._stack.length){var Z=this._stack.shift();this._partitionRoom(Z)}},z._partitionRoom=function K(Z){var Q=[],V=[];for(var U=Z[0]+1;U<Z[2];U++){var $=this._map[U][Z[1]-1],w=this._map[U][Z[3]+1];if($&&w&&!(U%2))Q.push(U)}for(var L=Z[1]+1;L<Z[3];L++){var H=this._map[Z[0]-1][L],F=this._map[Z[2]+1][L];if(H&&F&&!(L%2))V.push(L)}if(!Q.length||!V.length)return;var D=B.getItem(Q),O=B.getItem(V);this._map[D][O]=1;var M=[],E=[];M.push(E);for(var I=Z[0];I<D;I++)if(this._map[I][O]=1,I%2)E.push([I,O]);E=[],M.push(E);for(var u=D+1;u<=Z[2];u++)if(this._map[u][O]=1,u%2)E.push([u,O]);E=[],M.push(E);for(var h=Z[1];h<O;h++)if(this._map[D][h]=1,h%2)E.push([D,h]);E=[],M.push(E);for(var c=O+1;c<=Z[3];c++)if(this._map[D][c]=1,c%2)E.push([D,c]);var i=B.getItem(M);for(var J0=0;J0<M.length;J0++){var z0=M[J0];if(z0==i)continue;var w0=B.getItem(z0);this._map[w0[0]][w0[1]]=0}this._stack.push([Z[0],Z[1],D-1,O-1]),this._stack.push([D+1,Z[1],Z[2],O-1]),this._stack.push([Z[0],O+1,D-1,Z[3]]),this._stack.push([D+1,O+1,Z[2],Z[3]])},G}(b0),PZ=function(Y){K0(G,Y);function G(K,Z,Q){var V;if(Q===void 0)Q=0;return V=Y.call(this,K,Z)||this,V._regularity=Q,V._map=[],V}var z=G.prototype;return z.create=function K(Z){var Q=this._width,V=this._height,U=this._fillMap(1);Q-=Q%2?1:2,V-=V%2?1:2;var $=0,w=0,L=0,H=0,F=0,D=!1,O=[[0,0],[0,0],[0,0],[0,0]];do{if($=1+2*Math.floor(B.getUniform()*(Q-1)/2),w=1+2*Math.floor(B.getUniform()*(V-1)/2),!F)U[$][w]=0;if(!U[$][w]){this._randomize(O);do{if(Math.floor(B.getUniform()*(this._regularity+1))==0)this._randomize(O);D=!0;for(var M=0;M<4;M++)if(L=$+O[M][0]*2,H=w+O[M][1]*2,this._isFree(U,L,H,Q,V)){U[L][H]=0,U[$+O[M][0]][w+O[M][1]]=0,$=L,w=H,D=!1,F++;break}}while(!D)}}while(F+1<Q*V/4);for(var E=0;E<this._width;E++)for(var I=0;I<this._height;I++)Z(E,I,U[E][I]);return this._map=[],this},z._randomize=function K(Z){for(var Q=0;Q<4;Q++)Z[Q][0]=0,Z[Q][1]=0;switch(Math.floor(B.getUniform()*4)){case 0:Z[0][0]=-1,Z[1][0]=1,Z[2][1]=-1,Z[3][1]=1;break;case 1:Z[3][0]=-1,Z[2][0]=1,Z[1][1]=-1,Z[0][1]=1;break;case 2:Z[2][0]=-1,Z[3][0]=1,Z[0][1]=-1,Z[1][1]=1;break;case 3:Z[1][0]=-1,Z[0][0]=1,Z[3][1]=-1,Z[2][1]=1;break}},z._isFree=function K(Z,Q,V,U,$){if(Q<1||V<1||Q>=U||V>=$)return!1;return Z[Q][V]},G}(b0),FZ=function(Y){K0(G,Y);function G(K,Z,Q){var V=Y.call(this,K,Z)||this;if(V.map=[],V.rooms=[],V.connectedCells=[],Q=Object.assign({cellWidth:3,cellHeight:3},Q),!Q.hasOwnProperty("roomWidth"))Q.roomWidth=V._calculateRoomSize(V._width,Q.cellWidth);if(!Q.hasOwnProperty("roomHeight"))Q.roomHeight=V._calculateRoomSize(V._height,Q.cellHeight);return V._options=Q,V}var z=G.prototype;return z.create=function K(Z){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),Z)for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)Z(Q,V,this.map[Q][V]);return this},z._calculateRoomSize=function K(Z,Q){var V=Math.floor(Z/Q*0.8),U=Math.floor(Z/Q*0.25);if(U<2)U=2;if(V<2)V=2;return[U,V]},z._initRooms=function K(){for(var Z=0;Z<this._options.cellWidth;Z++){this.rooms.push([]);for(var Q=0;Q<this._options.cellHeight;Q++)this.rooms[Z].push({x:0,y:0,width:0,height:0,connections:[],cellx:Z,celly:Q})}},z._connectRooms=function K(){var Z=B.getUniformInt(0,this._options.cellWidth-1),Q=B.getUniformInt(0,this._options.cellHeight-1),V,U,$,w=!1,L,H,F;do{F=[0,2,4,6],F=B.shuffle(F);do{if(w=!1,V=F.pop(),U=Z+X0[8][V][0],$=Q+X0[8][V][1],U<0||U>=this._options.cellWidth)continue;if($<0||$>=this._options.cellHeight)continue;if(L=this.rooms[Z][Q],L.connections.length>0){if(L.connections[0][0]==U&&L.connections[0][1]==$)break}if(H=this.rooms[U][$],H.connections.length==0)H.connections.push([Z,Q]),this.connectedCells.push([U,$]),Z=U,Q=$,w=!0}while(F.length>0&&w==!1)}while(F.length>0)},z._connectUnconnectedRooms=function K(){var Z=this._options.cellWidth,Q=this._options.cellHeight;this.connectedCells=B.shuffle(this.connectedCells);var V,U,$;for(var w=0;w<this._options.cellWidth;w++)for(var L=0;L<this._options.cellHeight;L++)if(V=this.rooms[w][L],V.connections.length==0){var H=[0,2,4,6];H=B.shuffle(H),$=!1;do{var F=H.pop(),D=w+X0[8][F][0],O=L+X0[8][F][1];if(D<0||D>=Z||O<0||O>=Q)continue;if(U=this.rooms[D][O],$=!0,U.connections.length==0)break;for(var M=0;M<U.connections.length;M++)if(U.connections[M][0]==w&&U.connections[M][1]==L){$=!1;break}if($)break}while(H.length);if($)V.connections.push([U.cellx,U.celly]);else console.log("-- Unable to connect room.")}},z._createRandomRoomConnections=function K(){},z._createRooms=function K(){var Z=this._width,Q=this._height,V=this._options.cellWidth,U=this._options.cellHeight,$=Math.floor(this._width/V),w=Math.floor(this._height/U),L,H,F=this._options.roomWidth,D=this._options.roomHeight,O,M,E;for(var I=0;I<V;I++)for(var u=0;u<U;u++){if(O=$*I,M=w*u,O==0)O=1;if(M==0)M=1;if(L=B.getUniformInt(F[0],F[1]),H=B.getUniformInt(D[0],D[1]),u>0){E=this.rooms[I][u-1];while(M-(E.y+E.height)<3)M++}if(I>0){E=this.rooms[I-1][u];while(O-(E.x+E.width)<3)O++}var h=Math.round(B.getUniformInt(0,$-L)/2),c=Math.round(B.getUniformInt(0,w-H)/2);while(O+h+L>=Z)if(h)h--;else L--;while(M+c+H>=Q)if(c)c--;else H--;O=O+h,M=M+c,this.rooms[I][u].x=O,this.rooms[I][u].y=M,this.rooms[I][u].width=L,this.rooms[I][u].height=H;for(var i=O;i<O+L;i++)for(var J0=M;J0<M+H;J0++)this.map[i][J0]=0}},z._getWallPosition=function K(Z,Q){var V,U,$;if(Q==1||Q==3){if(V=B.getUniformInt(Z.x+1,Z.x+Z.width-2),Q==1)U=Z.y-2,$=U+1;else U=Z.y+Z.height+1,$=U-1;this.map[V][$]=0}else{if(U=B.getUniformInt(Z.y+1,Z.y+Z.height-2),Q==2)V=Z.x+Z.width+1,$=V-1;else V=Z.x-2,$=V+1;this.map[$][U]=0}return[V,U]},z._drawCorridor=function K(Z,Q){var V=Q[0]-Z[0],U=Q[1]-Z[1],$=Z[0],w=Z[1],L,H,F,D,O=[],M=Math.abs(V),E=Math.abs(U),I=B.getUniform(),u=I,h=1-I;if(H=V>0?2:6,F=U>0?4:0,M<E)L=Math.ceil(E*u),O.push([F,L]),O.push([H,M]),L=Math.floor(E*h),O.push([F,L]);else L=Math.ceil(M*u),O.push([H,L]),O.push([F,E]),L=Math.floor(M*h),O.push([H,L]);this.map[$][w]=0;while(O.length>0){D=O.pop();while(D[1]>0)$+=X0[8][D[0]][0],w+=X0[8][D[0]][1],this.map[$][w]=0,D[1]=D[1]-1}},z._createCorridors=function K(){var Z=this._options.cellWidth,Q=this._options.cellHeight,V,U,$,w,L;for(var H=0;H<Z;H++)for(var F=0;F<Q;F++){V=this.rooms[H][F];for(var D=0;D<V.connections.length;D++){if(U=V.connections[D],$=this.rooms[U[0]][U[1]],$.cellx>V.cellx)w=2,L=4;else if($.cellx<V.cellx)w=4,L=2;else if($.celly>V.celly)w=3,L=1;else w=1,L=3;this._drawCorridor(this._getWallPosition(V,w),this._getWallPosition($,L))}}},G}(b0),DZ={Arena:XZ,Uniform:BZ,Cellular:GZ,Digger:LZ,EllerMaze:wZ,DividedMaze:HZ,IceyMaze:PZ,Rogue:FZ},WZ=function Y(){},OZ=0.5*(Math.sqrt(3)-1),n0=(3-Math.sqrt(3))/6,RZ=function(Y){K0(G,Y);function G(K){var Z;if(K===void 0)K=256;Z=Y.call(this)||this,Z._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var Q=[];for(var V=0;V<K;V++)Q.push(V);Q=B.shuffle(Q),Z._perms=[],Z._indexes=[];for(var U=0;U<2*K;U++)Z._perms.push(Q[U%K]),Z._indexes.push(Z._perms[U]%Z._gradients.length);return Z}var z=G.prototype;return z.get=function K(Z,Q){var V=this._perms,U=this._indexes,$=V.length/2,w=0,L=0,H=0,F,D=(Z+Q)*OZ,O=Math.floor(Z+D),M=Math.floor(Q+D),E=(O+M)*n0,I=O-E,u=M-E,h=Z-I,c=Q-u,i,J0;if(h>c)i=1,J0=0;else i=0,J0=1;var z0=h-i+n0,w0=c-J0+n0,C0=h-1+2*n0,A1=c-1+2*n0,N1=j(O,$),S1=j(M,$),r0=0.5-h*h-c*c;if(r0>=0){r0*=r0,F=U[N1+V[S1]];var s1=this._gradients[F];w=r0*r0*(s1[0]*h+s1[1]*c)}var s0=0.5-z0*z0-w0*w0;if(s0>=0){s0*=s0,F=U[N1+i+V[S1+J0]];var o1=this._gradients[F];L=s0*s0*(o1[0]*z0+o1[1]*w0)}var o0=0.5-C0*C0-A1*A1;if(o0>=0){o0*=o0,F=U[N1+1+V[S1+1]];var a1=this._gradients[F];H=o0*o0*(a1[0]*C0+a1[1]*A1)}return 70*(w+L+H)},G}(WZ),MZ={Simplex:RZ},r1=function(){function Y(z,K,Z,Q){if(Q===void 0)Q={};if(this._toX=z,this._toY=K,this._passableCallback=Z,this._options=Object.assign({topology:8},Q),this._dirs=X0[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var G=Y.prototype;return G._getNeighbors=function z(K,Z){var Q=[];for(var V=0;V<this._dirs.length;V++){var U=this._dirs[V],$=K+U[0],w=Z+U[1];if(!this._passableCallback($,w))continue;Q.push([$,w])}return Q},Y}(),jZ=function(Y){K0(G,Y);function G(K,Z,Q,V){var U=Y.call(this,K,Z,Q,V)||this;return U._computed={},U._todo=[],U._add(K,Z,null),U}var z=G.prototype;return z.compute=function K(Z,Q,V){var U=Z+","+Q;if(!(U in this._computed))this._compute(Z,Q);if(!(U in this._computed))return;var $=this._computed[U];while($)V($.x,$.y),$=$.prev},z._compute=function K(Z,Q){while(this._todo.length){var V=this._todo.shift();if(V.x==Z&&V.y==Q)return;var U=this._getNeighbors(V.x,V.y);for(var $=0;$<U.length;$++){var w=U[$],L=w[0],H=w[1],F=L+","+H;if(F in this._computed)continue;this._add(L,H,V)}}},z._add=function K(Z,Q,V){var U={x:Z,y:Q,prev:V};this._computed[Z+","+Q]=U,this._todo.push(U)},G}(r1),EZ=function(Y){K0(G,Y);function G(K,Z,Q,V){var U;if(V===void 0)V={};return U=Y.call(this,K,Z,Q,V)||this,U._todo=[],U._done={},U}var z=G.prototype;return z.compute=function K(Z,Q,V){this._todo=[],this._done={},this._fromX=Z,this._fromY=Q,this._add(this._toX,this._toY,null);while(this._todo.length){var U=this._todo.shift(),$=U.x+","+U.y;if($ in this._done)continue;if(this._done[$]=U,U.x==Z&&U.y==Q)break;var w=this._getNeighbors(U.x,U.y);for(var L=0;L<w.length;L++){var H=w[L],F=H[0],D=H[1],O=F+","+D;if(O in this._done)continue;this._add(F,D,U)}}var M=this._done[Z+","+Q];if(!M)return;while(M)V(M.x,M.y),M=M.prev},z._add=function K(Z,Q,V){var U=this._distance(Z,Q),$={x:Z,y:Q,prev:V,g:V?V.g+1:0,h:U},w=$.g+$.h;for(var L=0;L<this._todo.length;L++){var H=this._todo[L],F=H.g+H.h;if(w<F||w==F&&U<H.h){this._todo.splice(L,0,$);return}}this._todo.push($)},z._distance=function K(Z,Q){switch(this._options.topology){case 4:return Math.abs(Z-this._fromX)+Math.abs(Q-this._fromY);case 6:var V=Math.abs(Z-this._fromX),U=Math.abs(Q-this._fromY);return U+Math.max(0,(V-U)/2);case 8:return Math.max(Math.abs(Z-this._fromX),Math.abs(Q-this._fromY))}},G}(r1),CZ={Dijkstra:jZ,AStar:EZ},AZ=function(){function Y(z){this._scheduler=z,this._lock=1}var G=Y.prototype;return G.start=function z(){return this.unlock()},G.lock=function z(){return this._lock++,this},G.unlock=function z(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var K=this._scheduler.next();if(!K)return this.lock();var Z=K.act();if(Z&&Z.then)this.lock(),Z.then(this.unlock.bind(this))}return this},Y}(),NZ=function(){function Y(z,K){if(K===void 0)K={};this._reflectivityCallback=z,this._options={},K=Object.assign({passes:1,emissionThreshold:100,range:10},K),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(K)}var G=Y.prototype;return G.setOptions=function z(K){if(Object.assign(this._options,K),K&&K.range)this.reset();return this},G.setFOV=function z(K){return this._fov=K,this._fovCache={},this},G.setLight=function z(K,Z,Q){var V=K+","+Z;if(Q)this._lights[V]=typeof Q=="string"?g(Q):Q;else delete this._lights[V];return this},G.clearLights=function z(){this._lights={}},G.reset=function z(){return this._reflectivityCache={},this._fovCache={},this},G.compute=function z(K){var Z={},Q={},V={};for(var U in this._lights){var $=this._lights[U];Q[U]=[0,0,0],m(Q[U],$)}for(var w=0;w<this._options.passes;w++){if(this._emitLight(Q,V,Z),w+1==this._options.passes)continue;Q=this._computeEmitters(V,Z)}for(var L in V){var H=L.split(","),F=parseInt(H[0]),D=parseInt(H[1]);K(F,D,V[L])}return this},G._emitLight=function z(K,Z,Q){for(var V in K){var U=V.split(","),$=parseInt(U[0]),w=parseInt(U[1]);this._emitLightFromCell($,w,K[V],Z),Q[V]=1}return this},G._computeEmitters=function z(K,Z){var Q={};for(var V in K){if(V in Z)continue;var U=K[V],$=void 0;if(V in this._reflectivityCache)$=this._reflectivityCache[V];else{var w=V.split(","),L=parseInt(w[0]),H=parseInt(w[1]);$=this._reflectivityCallback(L,H),this._reflectivityCache[V]=$}if($==0)continue;var F=[0,0,0],D=0;for(var O=0;O<3;O++){var M=Math.round(U[O]*$);F[O]=M,D+=M}if(D>this._options.emissionThreshold)Q[V]=F}return Q},G._emitLightFromCell=function z(K,Z,Q,V){var U=K+","+Z,$;if(U in this._fovCache)$=this._fovCache[U];else $=this._updateFOV(K,Z);for(var w in $){var L=$[w],H=void 0;if(w in V)H=V[w];else H=[0,0,0],V[w]=H;for(var F=0;F<3;F++)H[F]+=Math.round(Q[F]*L)}return this},G._updateFOV=function z(K,Z){var Q=K+","+Z,V={};this._fovCache[Q]=V;var U=this._options.range;function $(w,L,H,F){var D=w+","+L,O=F*(1-H/U);if(O==0)return;V[D]=O}return this._fov.compute(K,Z,U,$.bind(this)),V},Y}(),SZ=l,IZ=s,vZ=a6;J.Color=IZ,J.DEFAULT_HEIGHT=M1,J.DEFAULT_WIDTH=R1,J.DIRS=X0,J.Display=m0,J.Engine=AZ,J.EventQueue=p1,J.FOV=$Z,J.KEYS=i6,J.Lighting=NZ,J.Map=DZ,J.Noise=MZ,J.Path=CZ,J.RNG=B,J.Scheduler=KZ,J.StringGenerator=ZZ,J.Text=vZ,J.Util=SZ,Object.defineProperty(J,"__esModule",{value:!0})})});var gZ=typeof window!=="undefined"?window.innerWidth:0,hZ=typeof window!=="undefined"?window.innerHeight:0;var e={cameraWidth:Math.floor(gZ/16),cameraHeight:Math.floor(hZ/16),chatLogMaxSize:100,chatLogMaxDisplaySize:10,debug:!0,fontSize:16,highlightEnemy:!0,showGrid:!0,showUI:!0,zoom:1},v1={WIDTH:1024,HEIGHT:1024},B0={width:Math.floor(e.cameraWidth*(1/e.zoom)),height:Math.floor(e.cameraHeight*(1/e.zoom)),bg:"transparent",fontSize:Math.floor(e.fontSize*e.zoom),layout:"tile-gl",tileWidth:16,tileHeight:16,tileSet:null,tileMap:null,tileColorize:!0};function e1(J,q){let X=J.entities[q];return`DEBUG: ${q} at ${X.mapId},${X.x},${X.y}`}class Q1{name;description;energyDelta;constructor(J,q,X=0){this.name=J,this.description=q,this.energyDelta=X}}class a0{name;description;constructor(J,q){this.name=J,this.description=q}}class R0{key;description;constructor(J,q){this.key=J,this.description=q}}class y0{name;description;constructor(J,q){this.name=J,this.description=q}}class M0{name;description;icon;color;energyMax;unlockCondition;constructor(J,q,X,B=100){this.name=J,this.description=q,this.icon=X,this.energyMax=B,this.color="white",this.unlockCondition=null}}class V1{name;description;color;constructor(J,q,X){this.name=J,this.description=q,this.color=X}}class P0{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(J,q,X,B="cyberyellow",P=0,R=0,j=0,v=0,N=0,b=[]){this.name=J,this.description=q,this.icon=X,this.color=B,this.energyDelta=P,this.matter=R,this.gold=j,this.damage=v,this.energyCost=N,this.effects=b}}class r{name;description;icon;fg;bg;energyDelta;constructor(J,q,X=null,B="white",P="black",R=0){this.name=J,this.description=q,this.icon=X,this.fg=B,this.bg=P,this.energyDelta=R}}var W={actions:{Enter:new Q1("Enter","Enter a portal or plant atmosphere"),Launch:new Q1("Launch","Launch into space",-10),Wait:new Q1("Wait","Wait one turn in place")},ais:{aggrorange:new a0("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new a0("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new a0("guardian","Idles at a position and only fights back if engaged"),interactenrage:new a0("interactenrage","Gets hostile when getting talked to too often!")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new R0("N","Move/interact/combat north"),E:new R0("E","Move/interact/combat east"),S:new R0("S","Move/interact/combat south"),W:new R0("W","Move/interact/combat west"),A:new R0("A","Primary action, confirm"),B:new R0("B","Take a break, cancel"),"1":new R0("1","Secondary action, first quick slot"),"2":new R0("2","Tertiary action, second quick slot"),M:new R0("M","Menu"),"#":new R0("#","Open prompt")},dialogs:{bot_bar_aerobot_backstage:"Huh? How did you get here?",bot_bar_aerobot_charger:"Feel free to recharge on those chargepads and enjoy the show.",bot_bar_aerobot_spa_down:"Have you been to our shop, yet?",bot_bar_aerobot_spa_up:"Ahhhh, so refreshing!",bot_bar_aerobot_welcome:"Welcome to the Bot Bar. How may we serve you?",bot_dormitory_aerobot_down:"Would you please go to your own pod?",bot_dormitory_aerobot_up:"Pod, sweet pod!",bot_dormitory_workbot_left:"This pod is taken, go away!",bot_dormitory_workbot_right:"Brzzzt! Brzzzt!",bot_prison_aerobot:"I'm innocent! I'm innocent! I'm innocent! Beep!",bot_prison_workbot:"Thanks for freeing me! Guess I don't need this Pickaxe anymore...",bot_stadium_botracing:"Now this is botracing!",bot_station_pioneer:"You shall not pass!",manual_spirit:"Weeee!",manual_aerobot:"Huh? Why don't you have a hull?",manual_workbot:"Work, work!",manual_cleaner:"Follow the rules! Okay?",manual_pioneer:"Don't talk to me, weakling!",shop_instance_aerobot_shopper:"It's shiny!!!",shop_instance_shopkeeper:"Welcome! What does your engine desire?",shop_instance_workbot_shopper:"This shop is not so secret after all..."},effects:{Recharger:new y0("Recharger","Doubles energy gained from chargepads"),RockCrusher:new y0("Rock Crusher","Mines rock"),Screwing:new y0("Screwing","Unscrews the sewer portal covers"),WallCrusher:new y0("Wall Crusher","Tears down weak walls"),WaterShield:new y0("Water Shield","Reduces damage taken from water")},entities:{movableboulder:new M0("Boulder","A movable rock","o",2),movablebox:new M0("Box","A movable box","x",2),Spirit:new M0("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new M0("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new M0("WorkBot","Basic factory worker","B"),Cleaner:new M0("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new M0("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Valkyrie:new M0("Valkyrie","Airbourne war logistics","V",160),Pioneer:new M0("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200)},factions:{Spirits:new V1("Spirits","Default player faction","white"),Pyrates:new V1("Pyrates","Default enemy faction","cybermagenta"),Guardians:new V1("Guardians","Bot station guardians","cybercyan")},items:{battery:new P0("Battery","Increases maximum energy","b","cyberyellow",10),energy:new P0("Energy","Energy pack","e","cyberyellow",10),gold:new P0("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new P0("Goo","A minor matter source","goo","gray",0,1),junk:new P0("Junk","Broken bot","%","gray",0,1),matter:new P0("Matter","A pile of stuff","m","gray",0,100),broom:new P0("Broom","Sweeps the floor","ib","cyberyellow",0,0,0,-10,-1),hammer:new P0("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["Wall Crusher"]),pickaxe:new P0("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["Rock Crusher"]),shocker:new P0("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1,["Recharger"]),trident:new P0("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["Water Shield"]),wrench:new P0("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1,["Screwing"])},maps:{bot_bar:`!
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
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:e.showGrid?new r("void","Just nothing here",".","gray"):new r("void","Just nothing here"),voidtrue:new r("voidtrue","Really nothing here and you shouldn't get there ever!","_"),voidhidden:new r("voidhidden","Looks like a wall, but isn't!","#","gray","black"),water:new r("water","Rust and other dangers await","~","cybercyan","cyberblue",-2),watersewage:new r("watersewage","Rust, goo and other dangers await","~~","cyberyellow","cybergreen",-4),rock:new r("rock","Hidden treasures may await","'","white","gray"),tree:new r("tree","Lots of trees make a forest","t","brown","black"),wall:new r("wall","A strong wall","#","gray","black"),wallstatueaerobot:new r("wallstatueaerobot","A small statue looking like an AeroBot","sa","gray","black"),wallstatuecleaner:new r("wallstatuecleaner","A small statue looking like a Cleaner","sc","gray","black"),wallstatuepioneer:new r("wallstatuepioneer","A small statue looking like a Pioneer","sp","gray","black"),wallstatueworkbot:new r("wallstatueworkbot","A small statue looking like a WorkBot","sb","gray","black"),wallweak:new r("wallweak","A weakened wall","+","gray","black"),chargepad:new r("chargepad","Recharges energy and health","=","cyberyellow","black",2),movenorth:new r("movenorth","Moves you north","^^","cyberyellow"),moveeast:new r("moveeast","Moves you east",">>","cyberyellow"),movesouth:new r("movesouth","Moves you south","vv","cyberyellow"),movewest:new r("movewest","Moves you west","<<","cyberyellow"),portal:new r("portal","Gateway to another map","O","cyberyellow","gray"),portalclosed:new r("portalclosed","Closed gateway to another map","Oc","black","gray"),portalhidden:new r("portalhidden","Hidden gateway to another map","#","gray","black"),portallauncher:new r("portallauncher","Launches into space","O","cyberyellow","gray"),portalsewers:new r("portalsewers","Needs some tool to open","#~","gray","black"),portalstartworkbot:new r("portalstartworkbot","Start playing as a WorkBot","OB","white"),portalstartaerobot:new r("portalstartaerobot","Start playing as a AeroBot","OA","white"),"_portalstart?":new r("_portalstart?","Not unlocked, yet!","O?","white"),spacerock:new r("spacerock","Mountains as seen from space, non-blocking!","'s","white","gray"),spacetree:new r("spacetree","Forest as seen from space","ts","brown","darkgray"),spacewater:new r("spacewater","Water as seen from space, not dangerous!","~s","cybercyan","cyberblue"),spacevoid:new r("spacevoid","Void/ground as seen from space",".s","darkgray","darkgray"),spacevoidstarwhite:new r("spacevoidstarwhite","Space with a white background star",".w","white"),spacevoidstaryellow:new r("spacevoidstaryellow","Space with a yellow background star",".y","cyberyellow"),sun:new r("sun","It's hot, really hot!","§","cyberyellow","cyberyellow",-100),terminal:new r("terminal","A computer terminal","$","cyberyellow"),tv:new r("tv","A big billboard screen","!","black","cyberyellow")},uitexts:{}};function t1(J){if(Object.hasOwn(W.dialogs,J))return W.dialogs[J];return`TODO: ${J} needs localization!`}function L0(J,q){return J.chatLog.push(q),J.chatLog=J.chatLog.slice(-e.chatLogMaxSize),J}function F0(J,q,X,B,P=0,R=0,j={}){let v={id:q,type:X,mapId:B,x:P,y:R,energy:10,energyMax:10,gold:0,matter:0,message:null,interactions:0,options:j};return J=U1(J,v,X),J.entities[v.id]=v,J}function K1(J,q){return J.entities[q]=void 0,delete J.entities[q],J.tools[q]=void 0,J}function k0(J,q){let X=Object.keys(J.entities),B=[];for(let P=0;P<X.length;P++){let R=J.entities[X[P]];if(R.mapId===q)B.push(R)}return B}function Z6(J,q,X,B){let P=k0(J,q).filter((R)=>R.x===X&&R.y===B);if(P.length>0)return P[0];return null}function U1(J,q,X){if(q.type=X,q.energy=X.energyMax,q.energyMax=X.energyMax,q.gold=0,q.matter=0,!j0(q))J.tools[q.id]=void 0;return J}function J6(J,q,X){if(q===X)return J;if(q.options.faction===X.options.faction){if(X.options.dialog){let B=X?.options?.name?X.options.name:X.type.name;J=L0(J,B+": "+t1(X.options.dialog)),X.interactions++}}else{let B=q.id,P=X.id;J._combatQueue.push({entityId:B,otherEntityId:P})}if(X.interactions>=3&&X.options?.ai===W.ais.interactenrage)X.options.faction=W.factions.Pyrates;return J}function j0(J){return J.type===W.entities.movableboulder||J.type===W.entities.movablebox}function q1(J,q){let X={A:W.actions.Wait,B:W.actions.Wait};if(!!J.lastSpacePositionByEntity[q.id]&&q.energy>Math.abs(W.actions.Launch.energyDelta))X.A=W.actions.Launch;let P=J.maps[q.mapId].getTile(q.x,q.y);if(!!P.options.mapId&&"x"in P.options&&"y"in P.options)X.A=W.actions.Enter;return X}function f1(J,q,X){let B=J._eventSubscribers[q];if(B)for(let P=0;P<B.length;P++){let R=B[P];J=R(J,X)}return J}function b1(J,q,X){if(q in J._eventSubscribers);else J._eventSubscribers[q]=[];return J._eventSubscribers[q].push(X),J}function u0(J,q,X,B=0,P=0){let j={id:z1(X,B,P),type:q,mapId:X,x:B,y:P,energy:q.energyDelta,gold:q.gold,matter:q.matter};return J.items[j.id]=j,J}function Q6(J,q,X,B=0,P=0){let R=W.items.junk,v={id:z1(X,B,P),type:R,mapId:X,x:B,y:P,energy:R.energyDelta,gold:R.gold,matter:q};return J.items[v.id]=v,J}function i0(J,q,X,B=0,P=0,R,j){let N={id:z1(X,B,P),type:q,mapId:X,x:B,y:P,energy:q.energyDelta,gold:R,matter:j};return J.items[N.id]=N,J}function z1(J,q,X){return"item,"+J+","+q+","+X}function k1(J,q){return J.items[q]=void 0,delete J.items[q],J}function $1(J,q){let X=Object.keys(J.items),B=[];for(let P=0;P<X.length;P++){let R=J.items[X[P]];if(R.mapId===q)B.push(R)}return B}function V6(J,q,X,B){let P=z1(q,X,B);if(P in J.items)return J.items[P];return null}function X1(J,q){return J.tools[q]}function K6(J,q,X){if(j0(q))return J;if(!_Z(q,X))return J;if(xZ(X))J=u1(J,q.id,X.type);else{if(X.type===W.items.battery)q.energyMax+=X.energy;if(J._energyQueue.push({entityId:q.id,energyDelta:X.energy}),q.id.startsWith("player"))J=L0(J,`Picked up ${X.type.name}.`)}return q.gold+=X.gold,q.matter+=X.matter,k1(J,X.id),J}function u1(J,q,X){let B={type:X};if(J.tools[q]=B,q.startsWith("player"))J=L0(J,`Equipped ${X.name}.`);return J}function xZ(J){return J.type.energyCost<0}function _Z(J,q){return J.gold+q.gold>=0&&J.matter+q.matter>=0}/*!
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
 */var mZ=function(J){var q={};function X(B){if(q[B])return q[B].exports;var P=q[B]={i:B,l:!1,exports:{}};return J[B].call(P.exports,P,P.exports,X),P.l=!0,P.exports}return X.m=J,X.c=q,X.d=function(B,P,R){X.o(B,P)||Object.defineProperty(B,P,{enumerable:!0,get:R})},X.r=function(B){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(B,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(B,"__esModule",{value:!0})},X.t=function(B,P){if(1&P&&(B=X(B)),8&P)return B;if(4&P&&typeof B=="object"&&B&&B.__esModule)return B;var R=Object.create(null);if(X.r(R),Object.defineProperty(R,"default",{enumerable:!0,value:B}),2&P&&typeof B!="string")for(var j in B)X.d(R,j,function(v){return B[v]}.bind(null,j));return R},X.n=function(B){var P=B&&B.__esModule?function(){return B.default}:function(){return B};return X.d(P,"a",P),P},X.o=function(B,P){return Object.prototype.hasOwnProperty.call(B,P)},X.p="/bin/",X(X.s=0)}([function(J,q,X){var B={},P=X(1),R=X(2),j=X(3);J.exports=B;var v=1;B.js=function(){var N,b,l,Q0=!1,o={},n={},g={},_={},m=!0,d={},p=[],q0=Number.MAX_VALUE,G0=!1;this.setAcceptableTiles=function(f){f instanceof Array?l=f:!isNaN(parseFloat(f))&&isFinite(f)&&(l=[f])},this.enableSync=function(){Q0=!0},this.disableSync=function(){Q0=!1},this.enableDiagonals=function(){G0=!0},this.disableDiagonals=function(){G0=!1},this.setGrid=function(f){N=f;for(var S=0;S<N.length;S++)for(var C=0;C<N[0].length;C++)n[N[S][C]]||(n[N[S][C]]=1)},this.setTileCost=function(f,S){n[f]=S},this.setAdditionalPointCost=function(f,S,C){g[S]===void 0&&(g[S]={}),g[S][f]=C},this.removeAdditionalPointCost=function(f,S){g[S]!==void 0&&delete g[S][f]},this.removeAllAdditionalPointCosts=function(){g={}},this.setDirectionalCondition=function(f,S,C){_[S]===void 0&&(_[S]={}),_[S][f]=C},this.removeAllDirectionalConditions=function(){_={}},this.setIterationsPerCalculation=function(f){q0=f},this.avoidAdditionalPoint=function(f,S){o[S]===void 0&&(o[S]={}),o[S][f]=1},this.stopAvoidingAdditionalPoint=function(f,S){o[S]!==void 0&&delete o[S][f]},this.enableCornerCutting=function(){m=!0},this.disableCornerCutting=function(){m=!1},this.stopAvoidingAllAdditionalPoints=function(){o={}},this.findPath=function(f,S,C,s,Z0){var V0=function(N0){Q0?Z0(N0):setTimeout(function(){Z0(N0)})};if(l===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(N===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(f<0||S<0||C<0||s<0||f>N[0].length-1||S>N.length-1||C>N[0].length-1||s>N.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(f!==C||S!==s){for(var H0=N[s][C],$0=!1,E0=0;E0<l.length;E0++)if(H0===l[E0]){$0=!0;break}if($0!==!1){var Y0=new P;Y0.openList=new j(function(N0,_0){return N0.bestGuessDistance()-_0.bestGuessDistance()}),Y0.isDoneCalculating=!1,Y0.nodeHash={},Y0.startX=f,Y0.startY=S,Y0.endX=C,Y0.endY=s,Y0.callback=V0,Y0.openList.push(t(Y0,Y0.startX,Y0.startY,null,1));var l0=v++;return d[l0]=Y0,p.push(l0),l0}V0(null)}else V0([])},this.cancelPath=function(f){return f in d&&(delete d[f],!0)},this.calculate=function(){if(p.length!==0&&N!==void 0&&l!==void 0)for(b=0;b<q0;b++){if(p.length===0)return;Q0&&(b=0);var f=p[0],S=d[f];if(S!==void 0)if(S.openList.size()!==0){var C=S.openList.pop();if(S.endX!==C.x||S.endY!==C.y)C.list=0,C.y>0&&A(S,C,0,-1,1*x(C.x,C.y-1)),C.x<N[0].length-1&&A(S,C,1,0,1*x(C.x+1,C.y)),C.y<N.length-1&&A(S,C,0,1,1*x(C.x,C.y+1)),C.x>0&&A(S,C,-1,0,1*x(C.x-1,C.y)),G0&&(C.x>0&&C.y>0&&(m||k(N,l,C.x,C.y-1,C)&&k(N,l,C.x-1,C.y,C))&&A(S,C,-1,-1,1.4*x(C.x-1,C.y-1)),C.x<N[0].length-1&&C.y<N.length-1&&(m||k(N,l,C.x,C.y+1,C)&&k(N,l,C.x+1,C.y,C))&&A(S,C,1,1,1.4*x(C.x+1,C.y+1)),C.x<N[0].length-1&&C.y>0&&(m||k(N,l,C.x,C.y-1,C)&&k(N,l,C.x+1,C.y,C))&&A(S,C,1,-1,1.4*x(C.x+1,C.y-1)),C.x>0&&C.y<N.length-1&&(m||k(N,l,C.x,C.y+1,C)&&k(N,l,C.x-1,C.y,C))&&A(S,C,-1,1,1.4*x(C.x-1,C.y+1)));else{var s=[];s.push({x:C.x,y:C.y});for(var Z0=C.parent;Z0!=null;)s.push({x:Z0.x,y:Z0.y}),Z0=Z0.parent;s.reverse();var V0=s;S.callback(V0),delete d[f],p.shift()}}else S.callback(null),delete d[f],p.shift();else p.shift()}};var A=function(f,S,C,s,Z0){var V0=S.x+C,H0=S.y+s;if((o[H0]===void 0||o[H0][V0]===void 0)&&k(N,l,V0,H0,S)){var $0=t(f,V0,H0,S,Z0);$0.list===void 0?($0.list=1,f.openList.push($0)):S.costSoFar+Z0<$0.costSoFar&&($0.costSoFar=S.costSoFar+Z0,$0.parent=S,f.openList.updateItem($0))}},k=function(f,S,C,s,Z0){var V0=_[s]&&_[s][C];if(V0){var H0=T(Z0.x-C,Z0.y-s);if(!function(){for(var E0=0;E0<V0.length;E0++)if(V0[E0]===H0)return!0;return!1}())return!1}for(var $0=0;$0<S.length;$0++)if(f[s][C]===S[$0])return!0;return!1},T=function(f,S){if(f===0&&S===-1)return B.TOP;if(f===1&&S===-1)return B.TOP_RIGHT;if(f===1&&S===0)return B.RIGHT;if(f===1&&S===1)return B.BOTTOM_RIGHT;if(f===0&&S===1)return B.BOTTOM;if(f===-1&&S===1)return B.BOTTOM_LEFT;if(f===-1&&S===0)return B.LEFT;if(f===-1&&S===-1)return B.TOP_LEFT;throw new Error("These differences are not valid: "+f+", "+S)},x=function(f,S){return g[S]&&g[S][f]||n[N[S][f]]},t=function(f,S,C,s,Z0){if(f.nodeHash[C]!==void 0){if(f.nodeHash[C][S]!==void 0)return f.nodeHash[C][S]}else f.nodeHash[C]={};var V0=a(S,C,f.endX,f.endY);if(s!==null)var H0=s.costSoFar+Z0;else H0=0;var $0=new R(s,S,C,H0,V0);return f.nodeHash[C][S]=$0,$0},a=function(f,S,C,s){var Z0,V0;return G0?(Z0=Math.abs(f-C))<(V0=Math.abs(S-s))?1.4*Z0+V0:1.4*V0+Z0:(Z0=Math.abs(f-C))+(V0=Math.abs(S-s))}},B.TOP="TOP",B.TOP_RIGHT="TOP_RIGHT",B.RIGHT="RIGHT",B.BOTTOM_RIGHT="BOTTOM_RIGHT",B.BOTTOM="BOTTOM",B.BOTTOM_LEFT="BOTTOM_LEFT",B.LEFT="LEFT",B.TOP_LEFT="TOP_LEFT"},function(J,q){J.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(J,q){J.exports=function(X,B,P,R,j){this.parent=X,this.x=B,this.y=P,this.costSoFar=R,this.simpleDistanceToTarget=j,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(J,q,X){J.exports=X(4)},function(J,q,X){var B,P,R;(function(){var j,v,N,b,l,Q0,o,n,g,_,m,d,p,q0,G0;N=Math.floor,_=Math.min,v=function(A,k){return A<k?-1:A>k?1:0},g=function(A,k,T,x,t){var a;if(T==null&&(T=0),t==null&&(t=v),T<0)throw new Error("lo must be non-negative");for(x==null&&(x=A.length);T<x;)t(k,A[a=N((T+x)/2)])<0?x=a:T=a+1;return[].splice.apply(A,[T,T-T].concat(k)),k},Q0=function(A,k,T){return T==null&&(T=v),A.push(k),q0(A,0,A.length-1,T)},l=function(A,k){var T,x;return k==null&&(k=v),T=A.pop(),A.length?(x=A[0],A[0]=T,G0(A,0,k)):x=T,x},n=function(A,k,T){var x;return T==null&&(T=v),x=A[0],A[0]=k,G0(A,0,T),x},o=function(A,k,T){var x;return T==null&&(T=v),A.length&&T(A[0],k)<0&&(k=(x=[A[0],k])[0],A[0]=x[1],G0(A,0,T)),k},b=function(A,k){var T,x,t,a,f,S;for(k==null&&(k=v),f=[],x=0,t=(a=function(){S=[];for(var C=0,s=N(A.length/2);0<=s?C<s:C>s;0<=s?C++:C--)S.push(C);return S}.apply(this).reverse()).length;x<t;x++)T=a[x],f.push(G0(A,T,k));return f},p=function(A,k,T){var x;if(T==null&&(T=v),(x=A.indexOf(k))!==-1)return q0(A,0,x,T),G0(A,x,T)},m=function(A,k,T){var x,t,a,f,S;if(T==null&&(T=v),!(t=A.slice(0,k)).length)return t;for(b(t,T),a=0,f=(S=A.slice(k)).length;a<f;a++)x=S[a],o(t,x,T);return t.sort(T).reverse()},d=function(A,k,T){var x,t,a,f,S,C,s,Z0,V0;if(T==null&&(T=v),10*k<=A.length){if(!(a=A.slice(0,k).sort(T)).length)return a;for(t=a[a.length-1],f=0,C=(s=A.slice(k)).length;f<C;f++)T(x=s[f],t)<0&&(g(a,x,0,null,T),a.pop(),t=a[a.length-1]);return a}for(b(A,T),V0=[],S=0,Z0=_(k,A.length);0<=Z0?S<Z0:S>Z0;0<=Z0?++S:--S)V0.push(l(A,T));return V0},q0=function(A,k,T,x){var t,a,f;for(x==null&&(x=v),t=A[T];T>k&&x(t,a=A[f=T-1>>1])<0;)A[T]=a,T=f;return A[T]=t},G0=function(A,k,T){var x,t,a,f,S;for(T==null&&(T=v),t=A.length,S=k,a=A[k],x=2*k+1;x<t;)(f=x+1)<t&&!(T(A[x],A[f])<0)&&(x=f),A[k]=A[x],x=2*(k=x)+1;return A[k]=a,q0(A,S,k,T)},j=function(){function A(k){this.cmp=k!=null?k:v,this.nodes=[]}return A.push=Q0,A.pop=l,A.replace=n,A.pushpop=o,A.heapify=b,A.updateItem=p,A.nlargest=m,A.nsmallest=d,A.prototype.push=function(k){return Q0(this.nodes,k,this.cmp)},A.prototype.pop=function(){return l(this.nodes,this.cmp)},A.prototype.peek=function(){return this.nodes[0]},A.prototype.contains=function(k){return this.nodes.indexOf(k)!==-1},A.prototype.replace=function(k){return n(this.nodes,k,this.cmp)},A.prototype.pushpop=function(k){return o(this.nodes,k,this.cmp)},A.prototype.heapify=function(){return b(this.nodes,this.cmp)},A.prototype.updateItem=function(k){return p(this.nodes,k,this.cmp)},A.prototype.clear=function(){return this.nodes=[]},A.prototype.empty=function(){return this.nodes.length===0},A.prototype.size=function(){return this.nodes.length},A.prototype.clone=function(){var k;return(k=new A).nodes=this.nodes.slice(0),k},A.prototype.toArray=function(){return this.nodes.slice(0)},A.prototype.insert=A.prototype.push,A.prototype.top=A.prototype.peek,A.prototype.front=A.prototype.peek,A.prototype.has=A.prototype.contains,A.prototype.copy=A.prototype.clone,A}(),P=[],(R=typeof(B=function(){return j})=="function"?B.apply(q,P):B)===void 0||(J.exports=R)}).call(this)}]);function U6(J,q,X,B,P){let R=new mZ.js;R.setGrid(J),R.setAcceptableTiles([0]),R.enableSync();let j=null;return R.findPath(q,X,B,P,function(v){j=v}),R.calculate(),j}function D0(){return"player"}function q6(J,q,X,B){return Math.abs(J-X)+Math.abs(q-B)}function B1(J){return[...Array(J).keys()]}function z6(J){let q=yZ(J),X=J.entities[D0()];for(let B=0;B<q.length;B++){let P=q[B],R=J.entities[P],j=J._AIs[P],v=q6(X.x,X.y,R.x,R.y);if(X.options.faction!==R.options.faction&&v<=j.aggroRange){let N=J.maps[J.currentMapId].asMovementMap(),b=U6(N,R.x,R.y,X.x,X.y);if(b){if(b=b.slice(1),b.length>v)b=null}j.path=b}if(!!R.message&&R.message.includes("OBEY"));}for(let B=0;B<q.length;B++){let P=q[B],R=J.entities[P],j=J._AIs[P];if(j.path){let v=j.path[0],N=v.x-R.x,b=v.y-R.y;J=W0(J,R,N,b)}}return J}function yZ(J){let q=k0(J,J.currentMapId),X=[];for(let B=0;B<q.length;B++){let P=q[B];if(P.options.ai)X.push(P.id)}return X}function $6(J,q,X){let B=J.entities[q],P=8;switch(X){case W.ais.aggrorange:P=8;break;case W.ais.aggrorangeshort:P=2;break;case W.ais.guardian:P=1;break;case W.ais.interactenrage:P=2;break;default:}return J._AIs[q]={entityId:q,type:X,aggroRange:P,startMap:B.mapId,startX:B.x,startY:B.y,path:null},J}function G1(J,q){return J._AIs[q]=void 0,delete J._AIs[q],J}function B6(J){let q=void 0;while(typeof(q=J._despawnQueue.shift())!=="undefined")J=K1(J,q),J=G1(J,q);return J}function G6(J){return J}class p0{mapId;x;y;entityOrItemName;options;constructor(J,q,X,B,P={}){this.mapId=J,this.x=q,this.y=X,this.entityOrItemName=B,this.options=P}generateId(){return this.mapId+","+this.entityOrItemName+","+this.x+","+this.y+"/g"}}function e0(J,q){if(pZ(q.entityOrItemName)){let X=q.options;if(Object.hasOwn(X,"ai"))X.ai=W.ais[X.ai];if(Object.hasOwn(X,"faction"))X.faction=W.factions[X.faction];let B=q.generateId();if(J=F0(J,B,W.entities[q.entityOrItemName],q.mapId,q.x,q.y,X),Object.hasOwn(X,"equip")&&X6(X.equip))J=u1(J,B,W.items[X.equip]);if(Object.hasOwn(X,"ai"))J=$6(J,B,X.ai)}else if(X6(q.entityOrItemName))J=u0(J,W.items[q.entityOrItemName],q.mapId,q.x,q.y);return J}function pZ(J){return Object.hasOwn(W.entities,J)}function X6(J){return Object.hasOwn(W.items,J)}var Y1={width:16,height:16},T1=Y1;function T0(J,q={}){return{type:J,options:q}}function Y6(J){return J.type.name.startsWith("space")}function L6(J){for(let q in W.maps){let X=c0(W.maps[q]);J.maps[q]=X;for(let B of X._spawnCommands)J=e0(J,B);X._spawnCommands=[]}return J}function w6(J,q){let X=$1(J,q);for(let P=0;P<X.length;P++){let R=X[P];J=k1(J,R.id)}let B=k0(J,q);for(let P=0;P<B.length;P++){let R=B[P];J=K1(J,R.id),J=G1(J,R.id)}return J.maps[q]=void 0,delete J.maps[q],J}class g0{id;widthTiles;heightTiles;seed;_tiles;_cacheMovementMap;_spawnCommands;_tvCount;tvMessage;constructor(J,q,X,B=[]){this.id=J,this.widthTiles=q,this.heightTiles=X,this.seed=null,this._tiles=B,this._cacheMovementMap=null,this._spawnCommands=[],this._tvCount=0,this.tvMessage=null}getTile(J,q){if(J>=0&&J<this.widthTiles&&q>=0&&q<this.heightTiles){let X=q*this.widthTiles+J;return this._tiles[X]}return{}}setTile(J,q,X,B={}){this._cacheMovementMap=null;let P=q*this.widthTiles+J,R=this._tiles[P];return this._tiles[P]=T0(X,B),R}setTvMessage(J){if(this._tvCount){let q=0;for(let X of this._tiles)if(X.type===W.tiles.tv&&q<J.length)X.options.sign=J[q],q++;if(J==="")J=null;this.tvMessage=J}}pasteOnto(J,q=0,X=0){for(let B=0;B<J.heightTiles;B++)for(let P=0;P<J.widthTiles;P++){let R=J.getTile(P,B);if(R.type!==W.tiles.voidtrue)this.setTile(P+q,B+X,R.type,R.options)}return this}circular(){let J=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let q=-J;q<=J;q++)for(let X=-J;X<=J;X++)if(X*X+q*q>=J*J)this.setTile(X+J-1,q+J-1,W.tiles.voidtrue);return this}sample(J,q){let X=Math.floor(this.widthTiles/J),B=Math.floor(this.heightTiles/q),P=[];for(let R=0;R<q;R++)for(let j=0;j<J;j++){let v={};for(let n=0;n<B;n++)for(let g=0;g<X;g++){let _=this.getTile(j*X+g,R*B+n);if(v[_.type.name])v[_.type.name]+=1;else v[_.type.name]=1}let N="",b=0;for(let[n,g]of Object.entries(v))if(g>b)N=n,b=g;let l="space"+N,Q0=W.tiles[l]||W.tiles.spacevoid,o={mapId:this.id,x:j*X,y:R*B};P.push(T0(Q0,o))}return new g0("__sampled_"+J+"_"+q+"_"+this.id,J,q,P)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let J=new Array(this.heightTiles);for(let q=0;q<this.heightTiles;q++){J[q]=new Array(this.widthTiles);for(let X=0;X<this.widthTiles;X++){let B=q*this.widthTiles+X,R=this._tiles[B].type;if(J[q][X]=0,R===W.tiles.rock||R===W.tiles.portalclosed||R===W.tiles.portalsewers||R===W.tiles.tv||R.name.startsWith("wall"))J[q][X]=1}}return this._cacheMovementMap=J,J}}function c0(J){let q=J.split(/\r?\n/),X=J[0],B="",P=0,R=0,j={},v=[],N=[],b=0,l="";for(let o=0;o<q.length;o++){let n=q[o];if(n.startsWith(X)){if(n.startsWith(X+"!id"))B=n.slice(5);else if(n.startsWith(X+"!size")){let g=n.split(" ").slice(1);P=Number(g[0]),R=Number(g[1])}else if(n.startsWith(X+"!spawn")){let g=n.split(" ").slice(1),_={};if(g.length>3){let m=g.slice(3);for(let d of m){let p=d.split("=");_[p[0]]=p[1]}}v.push(new p0(B,Number(g[0]),Number(g[1]),g[2],_))}else if(n.startsWith(X+"!")){let g=n[2],_=n.slice(4);j[g]=_}}else for(let g=0;g<n.length;g++){let _=n[g],m=j[_];if(e.debug&&!m)console.log("DEBUG Broken map: "+B);let d=m.split(" "),p={};if(m.startsWith("portal ")||m.startsWith("portalhidden ")||m.startsWith("portalsewers ")||m.startsWith("portallauncher ")||m.startsWith("portalstart"))m=d[0],p.mapId=d[1],p.x=Number(d[2]),p.y=Number(d[3]);if(m.startsWith("wall ")&&d.length>=2)m="wall",p.sign=d[1];if(m.startsWith("terminal ")){if(m="terminal",d.length>=2)p.screen=d[1]}if(m.startsWith("tv ")&&d.length>=2){if(m="tv",d.length===3)l=d[2];b++}N.push(T0(W.tiles[m],p))}}if(e.debug&&!(b===0||b===12))console.log("DEBUG Broken map: "+B+" (invalid TV size "+b+", allowed are 0 or 12 characters per map)");let Q0=new g0(B,P,R,N);return Q0._tvCount=b,Q0.setTvMessage(l),Q0._spawnCommands=v,Q0}function F6(J,q,X){switch(X){case W.commands.N:J=W0(J,q,0,-1);break;case W.commands.W:J=W0(J,q,-1,0);break;case W.commands.S:J=W0(J,q,0,1);break;case W.commands.E:J=W0(J,q,1,0);break;case W.commands.A:J=H6(J,q,W.commands.A);break;case W.commands.B:J=H6(J,q,W.commands.B);break;default:}return J}function W0(J,q,X,B,P=0){let R=J.maps[q.mapId],j=Z6(J,R.id,q.x+X,q.y+B),v=J.tools[q.id];if(q.message=R.tvMessage,j)if(j0(j)){if(!j0(q)&&P<1)J=W0(J,j,X,B,P++),J=W0(J,q,X,B,P++)}else J=J6(J,q,j);else if(dZ(R,q,X,B))J=P6(J,R,q,X,B),J._energyQueue.push({entityId:q.id,energyDelta:-1*P});else if(lZ(R,q,v,X,B)){if(R.setTile(q.x+X,q.y+B,W.tiles.void).type===W.tiles.rock){let b=J.rng.getPercentage();if(b<=1)J=u0(J,W.items.matter,R.id,q.x+X,q.y+B);else if(b<=34)J=u0(J,W.items.junk,R.id,q.x+X,q.y+B)}J._energyQueue.push({entityId:q.id,energyDelta:v.type.energyCost})}else if(nZ(R,q,v,X,B))J=P6(J,R,q,X,B),J._energyQueue.push({entityId:q.id,energyDelta:v.type.energyCost});return J}function H6(J,q,X){let P=q1(J,q)[X.key],j=J.maps[q.mapId].getTile(q.x,q.y);switch(P){case W.actions.Enter:J=D6(J,q,j);break;case W.actions.Launch:J=cZ(J,q,j);case W.actions.Wait:break;default:}return J}function P6(J,q,X,B,P){X.x+=B,X.y+=P;let R=V6(J,X.mapId,X.x,X.y);if(R)J=K6(J,X,R);let j=q.getTile(X.x,X.y);if(j.type.name.startsWith("portal"))J=D6(J,X,j);if(j.type===W.tiles.terminal)q.setTvMessage("OBEYWORKKILL");if(j.type.name.startsWith("move"))switch(j.type.name){case"movenorth":J=W0(J,X,0,-1);break;case"moveeast":J=W0(J,X,1,0);break;case"movesouth":J=W0(J,X,0,1);break;case"movewest":J=W0(J,X,-1,0);break;default:}return J}function D6(J,q,X){if(q.id.startsWith("player"))J.currentMapId=X.options.mapId;if(Y6(X))J.lastSpacePositionByEntity[q.id]={mapId:q.mapId,x:q.x,y:q.y};else J.lastSpacePositionByEntity[q.id]=void 0,delete J.lastSpacePositionByEntity[q.id];let B={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:X.type,newMapId:X.options.mapId,newX:X.options.x,newY:X.options.y};return q.mapId=X.options.mapId,q.x=X.options.x,q.y=X.options.y,J=f1(J,"entitymap.updated.event",B),J}function cZ(J,q,X){if(J.lastSpacePositionByEntity[q.id]){if(q.id.startsWith("player"))J.currentMapId=J.lastSpacePositionByEntity[q.id].mapId;let B={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:X.type,newMapId:J.lastSpacePositionByEntity[q.id].mapId,newX:J.lastSpacePositionByEntity[q.id].x,newY:J.lastSpacePositionByEntity[q.id].y};q.mapId=B.newMapId,q.x=B.newX,q.y=B.newY,J._energyQueue.push({entityId:q.id,energyDelta:W.actions.Launch.energyDelta}),J.lastSpacePositionByEntity[q.id]=void 0,delete J.lastSpacePositionByEntity[q.id],J=f1(J,"entitymap.updated.event",B)}return J}function W6(J){for(let q in J.entities){let X=J.entities[q],B=J.tools[q],R=J.maps[X.mapId].getTile(X.x,X.y),j=R.type.energyDelta;if(R.type===W.tiles.chargepad&&B?.type.effects.includes(W.effects.Recharger.name))j*=2;else if((R.type===W.tiles.water||R.type===W.tiles.watersewage)&&B?.type.effects.includes(W.effects.WaterShield.name))j/=2;if(j!==0)J._energyQueue.push({entityId:q,energyDelta:j})}return J}function O6(J,q){let X=J.entities[q.entityId];switch(q.oldTileType){case W.tiles.portalstartaerobot:J=U1(J,X,W.entities.AeroBot),J=L0(J,`Booting up as an ${W.entities.AeroBot.name}...`);break;case W.tiles.portalstartworkbot:J=U1(J,X,W.entities.WorkBot),J=L0(J,`Booting up as a ${W.entities.WorkBot.name}...`);break;default:}return J}function dZ(J,q,X,B){let P=q.x+X,R=q.y+B,j=J.getTile(P,R).type;return P>=0&&P<J.widthTiles&&R>=0&&R<J.heightTiles&&!(j===W.tiles.rock||j===W.tiles.portalclosed||j===W.tiles.portalsewers||j===W.tiles.tv||j.name.startsWith("wall"))}function lZ(J,q,X,B,P){let R=q.x+B,j=q.y+P,v=J.getTile(R,j).type;if(X)return X.type.effects.includes(W.effects.WallCrusher.name)&&v===W.tiles.wallweak||X.type.effects.includes(W.effects.RockCrusher.name)&&v===W.tiles.rock;return!1}function nZ(J,q,X,B,P){let R=q.x+B,j=q.y+P,v=J.getTile(R,j).type;if(X)return X.type.effects.includes(W.effects.Screwing.name)&&v===W.tiles.portalsewers;return!1}var j6=I1(w1(),1);class v0{seed;_rotRng;constructor(J=1337){this.seed=J,this._rotRng=j6.RNG.clone(),this._rotRng.setSeed(J)}getPercentage(){return this._rotRng.getPercentage()}getItem(J){return this._rotRng.getItem(J)}}function E6(J,q){if(q.seed===1337)J=F0(J,"batteryvalkyrie0",W.entities.Valkyrie,q.id,130,127,{faction:W.factions.Spirits}),J=F0(J,"batteryvalkyrie1",W.entities.Valkyrie,q.id,124,127,{faction:W.factions.Spirits}),J=u0(J,W.items.trident,q.id,127,130);else{let X=new v0(q.seed);for(let B=0;B<q.heightTiles;B++)for(let P=0;P<q.widthTiles;P++){let R=q.getTile(P,B);if(X.getPercentage()<=1&&(R.type===W.tiles.void||R.type===W.tiles.tree)){let j=X.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(j){case"Deviant":case"Pioneer":J=e0(J,new p0(q.id,P,B,j,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":J=e0(J,new p0(q.id,P,B,j));break}}}}return J}var H1=I1(w1(),1);var oZ=1337,C6=55;function A6(J,q=oZ){H1.RNG.setSeed(q);let X=new H1.Noise.Simplex,B=Y1.width*T1.width,P=Y1.height*T1.height,R=[];for(let N=0;N<P;N++)for(let b=0;b<B;b++){let l=X.get(b/C6,N/C6),Q0;if(l<=-0.5)Q0=W.tiles.water;else if(l<=0)Q0=W.tiles.void;else if(l<0.5)Q0=W.tiles.tree;else Q0=W.tiles.rock;R.push(T0(Q0))}let j="simplex="+q,v=new g0(j,B,P,R);return v.seed=q,J.maps[j]=v,J}var aZ=1337;function S6(J,q=aZ){let X=N6(1024,1024,W.tiles.void);X.id="solarsystem="+q,J.maps[X.id]=X;let B=new v0(q),P=new v0(q),R=B.getItem([2,3,4,5,6,7,8,9,10,11,12]),j=128,v=512-j,N=Math.floor(v/R);X=iZ(X,B);let b=N6(128,128,W.tiles.voidtrue);eZ(b,63,63,62,W.tiles.sun),tZ(b,63,63,W.tiles.sun),X.pasteOnto(b,448,448);for(let o=j;o<512;o+=N){let n=B.getItem([-1,1])*B.getItem(B1(o)),g=B.getItem([-1,1])*Math.floor(Math.sqrt(o*o-n*n));n+=512,g+=512;let _=B.getItem([16,24,32]),m=Math.floor(_/2)-1;J=A6(J,q);let d=J.maps["simplex="+q],p=W.map_snippets.launcher;p=p.replace("!!O portallauncher space 0 0",`!!O portallauncher ${X.id} ${n} ${g}`);let q0=c0(p),G0=P.getItem(B1(d.widthTiles-q0.widthTiles)),A=P.getItem(B1(d.heightTiles-q0.heightTiles));d.pasteOnto(q0,G0,A),J=E6(J,d);let k=d.sample(_,_).circular();X.pasteOnto(k,n-(m+1),g-(m+1)),q++}let l=W.map_snippets.space_bot_station;l=l.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let Q0=c0(l);return X.pasteOnto(Q0,583,398),J}function N6(J,q,X){let B=[];for(let j=0;j<J*q;j++)B.push(T0(X));return new g0("__temp",J,q,B)}function iZ(J,q){for(let X=0;X<J.heightTiles;X++)for(let B=0;B<J.widthTiles;B++)if(q.getPercentage()<=1)J.setTile(B,X,q.getItem([W.tiles.spacevoidstarwhite,W.tiles.spacevoidstaryellow]));return J}function eZ(J,q,X,B,P){let R=1-B,j=1,v=-2*B,N=0,b=B;J.setTile(q,X+B,P),J.setTile(q,X-B,P),J.setTile(q+B,X,P),J.setTile(q-B,X,P);while(N<b){if(R>=0)b-=1,v+=2,R+=v;N+=1,j+=2,R+=j,J.setTile(q+N,X+b,P),J.setTile(q-N,X+b,P),J.setTile(q+N,X-b,P),J.setTile(q-N,X-b,P),J.setTile(q+b,X+N,P),J.setTile(q-b,X+N,P),J.setTile(q+b,X-N,P),J.setTile(q-b,X-N,P)}return J}function tZ(J,q,X,B){let{widthTiles:P,heightTiles:R}=J,j=[];j.push({x:q,y:X});let v=void 0;while(typeof(v=j.shift())!=="undefined"){let N=v,b=v;if(v.x+1<P)b={x:v.x+1,y:v.y};while(J.getTile(N.x,N.y).type!==B){if(J.setTile(N.x,N.y,B),N.y+1<R){if(J.getTile(N.x,N.y+1).type!==B)j.push({x:N.x,y:N.y+1})}if(N.y-1>=0){if(J.getTile(N.x,N.y-1).type!==B)j.push({x:N.x,y:N.y-1})}if(N.x-1>=0)N.x-=1;else break}while(J.getTile(b.x,b.y).type!==B){if(J.setTile(b.x,b.y,B),b.y+1<R){if(J.getTile(b.x,b.y+1).type!==B)j.push({x:b.x,y:b.y+1})}if(b.y-1>=0){if(J.getTile(b.x,b.y-1).type!==B)j.push({x:b.x,y:b.y-1})}if(b.x+1<P)b.x+=1;else break}}return J}var ZJ=`!
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
`;function I6(J,q){if(q?.oldMapId?.startsWith("shop_instance")){J=w6(J,q.oldMapId);let X=J.maps[q.newMapId],B=X.getTile(q.newX,q.newY);X.setTile(q.newX,q.newY,B.type,{mapId:"shop_instance",x:q.oldX,y:q.oldY})}if(q?.newMapId?.startsWith("shop_instance")){let X=c0(ZJ);X.id+="_"+q.oldMapId+"_"+q.entityId,X.setTile(q.newX,q.newY,W.tiles.portal,{mapId:q.oldMapId,x:q.oldX,y:q.oldY}),J.maps[q.oldMapId].setTile(q.oldX,q.oldY,q.oldTileType,{mapId:X.id,x:q.newX,y:q.newY});let P=J.entities[q.entityId];if(P.id.startsWith("player"))J.currentMapId=X.id;if(P.mapId=X.id,P.x=q.newX,P.Y=q.newY,J.maps[X.id]=X,J=i0(J,W.items.hammer,X.id,4,4,0,-200),J=i0(J,W.items.pickaxe,X.id,4,6,0,-200),J=i0(J,W.items.battery,X.id,4,8,0,-200),J=i0(J,W.items.gold,X.id,4,10,0,-1e4),J=F0(J,X.id+"_shopkeeper",W.entities.AeroBot,X.id,6,2,{faction:P.options.faction,dialog:"shop_instance_shopkeeper",name:"Shopkeeper"}),q?.oldMapId.startsWith("bot_stadium"))J=F0(J,X.id+"_shopper",W.entities.WorkBot,X.id,1,12,{faction:P.options.faction,dialog:"shop_instance_workbot_shopper"});else if(q?.oldMapId.startsWith("bot_bar"))J=F0(J,X.id+"_shopper",W.entities.AeroBot,X.id,4,11,{faction:P.options.faction,dialog:"shop_instance_aerobot_shopper"})}return J}function v6(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!0,actionLog:[],chatLog:[],currentMapId:"",entities:{},items:{},lastSpacePositionByEntity:{},maps:{},rng:new v0,tools:{},tvs:{}}}function f6(J){let q=void 0;while(typeof(q=J._combatQueue.shift())!=="undefined"){let X=-1,B=-5,P=X1(J,q.entityId);if(P)X=P.type.energyCost,B=-1*Math.abs(P.type.damage);J._energyQueue.push({entityId:q.entityId,energyDelta:X}),J._energyQueue.push({entityId:q.otherEntityId,energyDelta:B});let R=J.entities[q.entityId],j=J.entities[q.otherEntityId],v=R?.options?.name?R.options.name:R.type.name,N=j?.options?.name?j.options.name:j.type.name;J=L0(J,`${v} did ${Math.abs(B)} damage to ${N} at cost of ${Math.abs(X)} energy.`)}return J}function b6(J){let q=void 0,X=new Set;while(typeof(q=J._energyQueue.shift())!=="undefined"){let B=J.entities[q.entityId];if(B.energy=Math.min(B.energy+q.energyDelta,B.energyMax),B.energy<=0)X.add(B.id)}for(let B of X){let P=J.entities[B];J._despawnQueue.push(B);let R=P?.options?.name?P.options.name:P.type.name;if(!j0(P)){let j=Math.max(1,Math.floor(P.energyMax/3));J=Q6(J,j,P.mapId,P.x,P.y),J=L0(J,`${R} destroyed leaving behind Junk.`)}}return J}function k6(J){return J=z6(J),J=f6(J),J=W6(J),J=b6(J),J=B6(J),J=G6(J),J}class P1{state;constructor(){}init(){return this.state=v6(),this.state=b1(this.state,"entitymap.updated.event",O6),this.state=b1(this.state,"entitymap.updated.event",I6),this.state=S6(this.state),this.state=L6(this.state),this.state.currentMapId="botmos_hull_selection",this.state=F0(this.state,D0(),W.entities.Spirit,this.state.currentMapId,9,5,{faction:W.factions.Spirits,name:"Player"}),this.state}update(J,q=!1){let X=this.state.entities[D0()];if(X){if(J){switch(J){case W.commands.M:this.state._menuOpen=!this.state._menuOpen;break;case W.commands["#"]:this.state=L0(this.state,e1(this.state,D0()));break;default:this.state=F6(this.state,X,J),this.state=k6(this.state)}this.state.actionLog.push(J.key)}}else this.state=L0(this.state,`Game over! ${this.state.actionLog.length} turns.`),console.log(`Game over! ${this.state.actionLog.length} turns: ${this.state.actionLog.join("")}`),this.state.currentMapId="botmos_hull_selection",this.state=F0(this.state,D0(),W.entities.Spirit,this.state.currentMapId,9,5,{faction:W.factions.Spirits,name:"Player"});return this.state}play(J){for(let q=0;q<J.length;q++){let X=J[q];this.update(W.commands[X],!0)}return this.state}}var y={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1,slash:!1},h1=[],x1=void 0,u6=0;document.body.addEventListener("keydown",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":y.up=!0,U0(J);break;case"a":case"ArrowLeft":y.left=!0,U0(J);break;case"s":case"ArrowDown":y.down=!0,U0(J);break;case"d":case"ArrowRight":y.right=!0,U0(J);break;case"x":y.a=!0,U0(J);break;case" ":case"y":case"z":y.b=!0,U0(J);break;case"m":y.menu=!0,U0(J);break;case"#":case"/":y.slash=!0,U0(J);break;default:}A0(T6())});function A0(J){let q=Date.now();if(x1!==void 0&&q-u6>=80)u6=q,x1(J)}document.body.addEventListener("keyup",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":y.up=!1,U0(J);break;case"a":case"ArrowLeft":y.left=!1,U0(J);break;case"s":case"ArrowDown":y.down=!1,U0(J);break;case"d":case"ArrowRight":y.right=!1,U0(J);break;case"x":y.a=!1,U0(J);break;case" ":case"y":case"z":y.b=!1,U0(J);break;case"m":y.menu=!1,U0(J);break;case"#":case"/":y.slash=!1,U0(J);default:}});document.body.addEventListener("click",function(J){let{clientX:q,clientY:X}=J,P=document.body.clientWidth/3,j=document.body.clientHeight/3;if(q>=P&&q<2*P&&X<j)A0(W.commands.N),U0(J);else if(q<P&&X<j)A0(W.commands.B),U0(J);else if(q>=2*P&&X<j)A0(W.commands.A),U0(J);else if(q<P&&X>=j&&X<2*j)A0(W.commands.W),U0(J);else if(q>=2*P&&X>=j&&X<2*j)A0(W.commands.E),U0(J);else if(q>=P&&q<2*P&&X>=2*j)A0(W.commands.S),U0(J);else if(q>=P&&q<2*P&&X>=j&&X<2*j)A0(W.commands.M),U0(J)});function U0(J){J.preventDefault(),J.stopPropagation()}var t0=null;function JJ(){let J=null;if(y.right)J=W.commands.E;if(y.left)J=W.commands.W;if(y.down)J=W.commands.S;if(y.up)J=W.commands.N;if(y.up&&y.right){if(J===W.commands.N&&t0===W.commands.N)J=W.commands.E}if(y.up&&y.left){if(J===W.commands.N&&t0===W.commands.N)J=W.commands.W}if(y.down&&y.right){if(J===W.commands.S&&t0===W.commands.S)J=W.commands.E}if(y.down&&y.left){if(J===W.commands.S&&t0===W.commands.S)J=W.commands.W}if(y.a)J=W.commands.A;if(y.b)J=W.commands.B;if(y.menu)J=W.commands.M;if(y.slash)J=W.commands["#"];if(t0=J,J!==null)h1.push(J)}function T6(){JJ();let J=h1.shift()||null;return h1=[],J}var g6=void 0;window.addEventListener("gamepadconnected",(J)=>{g6=setInterval(function(){let q=navigator.getGamepads()[J.gamepad?.index];if(y.right=q.buttons[15].pressed,y.left=q.buttons[14].pressed,y.down=q.buttons[13].pressed,y.up=q.buttons[12].pressed,y.a=q.buttons[0].pressed||q.buttons[2].pressed,y.b=q.buttons[1].pressed||q.buttons[3].pressed,y.menu=q.buttons[9].pressed,y.right||y.left||y.down||y.up||y.a||y.b||y.menu)A0(T6())},100)});window.addEventListener("gamepaddisconnected",(J)=>{clearInterval(g6)});function h6(J){x1=J}var y6=I1(w1(),1);var x6={AeroBot:[0,0],battery:[16,0],broom:[32,0],chargepad:[48,0],Cleaner:[64,0],Deviant:[80,0],energy:[96,0],gold:[112,0],goo:[128,0],hammer:[144,0],junk:[160,0],matter:[176,0],movableboulder:[192,0],movablebox:[208,0],moveeast:[224,0],movenorth:[240,0],movesouth:[256,0],movewest:[272,0],pickaxe:[288,0],Pioneer:[304,0],portalclosed:[320,0],portalhidden:[336,0],portallauncher:[352,0],portal:[368,0],portalsewers:[384,0],portalstartaerobot:[400,0],"_portalstart?":[416,0],portalstartworkbot:[432,0],rock:[448,0],shocker:[464,0],spacerock:[480,0],spacetree:[496,0],spacevoid:[512,0],spacevoidstarwhite:[528,0],spacevoidstaryellow:[544,0],spacewater:[560,0],Spirit:[576,0],sun:[592,0],terminal:[608,0],tree:[624,0],trident:[640,0],tv:[656,0],Valkyrie:[672,0],voidhidden:[688,0],void:[704,0],voidtrue:[720,0],wall0:[736,0],wall1:[752,0],wall2:[768,0],walla_:[784,0],wallA:[800,0],wallb_:[816,0],wallB:[832,0],wallc_:[848,0],wallC:[864,0],walld_:[880,0],wallD:[896,0],walle_:[912,0],wallE:[928,0],wallf_:[944,0],wallF:[960,0],wallg_:[976,0],wallG:[992,0],wallh_:[1008,0],wallH:[1024,0],walli_:[1040,0],wallI:[1056,0],wallj_:[1072,0],wallJ:[1088,0],wallk_:[1104,0],wallK:[1120,0],walll_:[1136,0],wallL:[1152,0],wallm_:[1168,0],wallM:[1184,0],walln_:[1200,0],wallN:[1216,0],wallo_:[1232,0],wallO:[1248,0],"wall(":[1264,0],"wall)":[1280,0],"wall+":[1296,0],"wall,":[1312,0],"wall.":[1328,0],wall:[1344,0],"wall:":[1360,0],wall_:[1376,0],"wall|":[1392,0],wallp_:[1408,0],wallP:[1424,0],wallq_:[1440,0],wallQ:[1456,0],wallr_:[1472,0],wallR:[1488,0],walls_:[1504,0],wallS:[1520,0],wallstatueaerobot:[1536,0],wallstatuecleaner:[1552,0],wallstatuepioneer:[1568,0],wallstatueworkbot:[1584,0],wallt_:[1600,0],wallT:[1616,0],wallu_:[1632,0],wallU:[1648,0],wallv_:[1664,0],wallV:[1680,0],wallweak:[1696,0],wallw_:[1712,0],wallW:[1728,0],wallx_:[1744,0],wallX:[1760,0],wally_:[1776,0],wallY:[1792,0],wallz_:[1808,0],wallZ:[1824,0],water:[1840,0],watersewage:[1856,0],WorkBot:[1872,0],wrench:[1888,0]};var d0=document.createElement("div");d0.id="ui";document.body.appendChild(d0);async function _6(J,q=0){if(!e.showUI)return;let X=D0(),B=J.entities[X],P=document.createElement("span");if(B){let R="",j=X1(J,X);if(j)R=j.type.name+" ";let v="";if(B.matter>0)v=`${B.matter}M `;let N="";if(B.gold>0)N=`${B.gold}G `;let b=q1(J,B),l=B.type.name+" "+B.energy+"/"+B.energyMax+" "+R+N+v+"Y:"+b.B.name+" X:"+b.A.name;if(d0.style.flexDirection="column-reverse",B.y-q>=B0.height-3)d0.style.flexDirection="column";if(P.innerText=l,P.style.background="#000",B.energy/B.energyMax<=0.2)P.style.color="#000",P.style.background="#f00";else P.style.color="#74ee15",P.style.background="#000"}else P.innerText="Game over!",P.style.color="#000",P.style.background="#f00";if(d0.replaceChildren(P),J._menuOpen&&!!J.chatLog.length){let R=J.chatLog.slice(-e.chatLogMaxDisplaySize),j=document.createElement("div");j.id="uichatlog",j.innerText=R.join(`
`),d0.appendChild(j)}}var p6=document.createElement("img");p6.src="build/tiles.png";B0.tileSet=p6;B0.tileMap=KJ();var _1=new y6.Display(B0);document.body.appendChild(_1.getContainer());function QJ(J,q){let X=J.currentMapId,B=J.maps[X],P=0,R=0;if(B.widthTiles<q.width)P=Math.floor((q.width-B.widthTiles)/2),q.x=0;if(B.heightTiles<q.height)R=Math.floor((q.height-B.heightTiles)/2),q.y=0;let j={},v={},N={};for(let g=0;g<q.height;g++)for(let _=0;_<q.width;_++){let m=B.getTile(q.x+_,q.y+g),d="";if(!!m&&!!m.type)if(m.options.sign)d="#"+m.options.sign;else d=m.type.icon;if(d){let p=[P+_,R+g].toString();j[p]=[d],v[p]=["transparent"],N[p]=["transparent"]}}let b=$1(J,X);for(let g=0;g<b.length;g++){let _=b[g],m=P+_.x-q.x,d=R+_.y-q.y,p=[m,d].toString();if(j[p])j[p].push(_.type.icon),v[p].push("transparent"),N[p].push("transparent");else j[p]=[_.type.icon],v[p]=["transparent"],N[p]=["transparent"]}let l=D0(),Q0=J.entities[l],o=((Q0||{}).options||{}).faction||void 0,n=k0(J,X);for(let g=0;g<n.length;g++){let _=n[g],m=P+_.x-q.x,d=R+_.y-q.y,p="transparent";if(e.highlightEnemy&&!!o&&!j0(_))p=o===_.options.faction?"rgba(116, 238, 21, 0.5)":"rgba(240, 0, 255, 0.5)";if(_===Q0)p="transparent";let q0=[m,d].toString();if(j[q0])j[q0].push(_.type.icon),v[q0].push(p),N[q0].push("transparent");else j[q0]=[_.type.icon],v[q0]=[p],N[q0]=["transparent"]}_1.clear();for(let[g,_]of Object.entries(j)){let m=g.split(",");_1.draw(Number(m[0]),Number(m[1]),_,v[g],N[g])}}var m6={x:0,y:0};async function x0(J){let q=J.entities[D0()],X=q?q:m6,B=VJ(X);QJ(J,B),_6(J,B.y),m6=X}async function c6(J){}function VJ(J){return{x:Math.min(Math.max(0,J.x-Math.floor(B0.width/2)),v1.WIDTH-B0.width),y:Math.min(Math.max(0,J.y-Math.floor(B0.height/2)),v1.HEIGHT-B0.height),width:B0.width,height:B0.height}}function KJ(){let J={};for(let[q,X]of Object.entries(x6))if(q.startsWith("wall")&&(q.length===5||q.length===6))J["#"+q.substring(4,5)]=X;else if(Object.hasOwn(W.tiles,q))J[W.tiles[q].icon]=X;else if(Object.hasOwn(W.entities,q))J[W.entities[q].icon]=X;else if(Object.hasOwn(W.items,q))J[W.items[q].icon]=X;return J}var O0=new P1;window.onload=function(){x0(O0.init())};window.onresize=function(){let J=typeof window!=="undefined"?window.innerWidth:0,q=typeof window!=="undefined"?window.innerHeight:0;e.cameraWidth=Math.floor(J/e.fontSize),e.cameraHeight=Math.floor(q/e.fontSize),B0.width=Math.floor(e.cameraWidth*(1/e.zoom)),B0.height=Math.floor(e.cameraHeight*(1/e.zoom)),c6(B0),x0(O0.state)};h6(function(J){x0(O0.update(J))});if(!window.BMActionLog)window.BMActionLog=function(){return O0.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(J){x0(O0.play(J))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){e.debug=!e.debug,x0(O0.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){e.showUI=!e.showUI,x0(O0.state)};if(e.debug){if(!window.BMDebugState)window.BMDebugState=function(){return O0.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let J=Object.keys(O0.state.maps).length,q=Object.keys(O0.state.entities).length,X=Object.keys(O0.state.items).length,B=Object.keys(O0.state.tools).length;return`Maps: ${J}, Entities: ${q}, Items: ${X}, Tools: ${B}`}}document.body.focus();
