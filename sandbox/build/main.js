var bZ=Object.create;var{getPrototypeOf:kZ,defineProperty:e1,getOwnPropertyNames:uZ}=Object;var TZ=Object.prototype.hasOwnProperty;var v1=(J,U,X)=>{X=J!=null?bZ(kZ(J)):{};let G=U||!J||!J.__esModule?e1(X,"default",{value:J,enumerable:!0}):X;for(let P of uZ(J))if(!TZ.call(G,P))e1(G,P,{get:()=>J[P],enumerable:!0});return G};var gZ=(J,U)=>()=>(U||J((U={exports:{}}).exports,U),U.exports);var w1=gZ((L1,j6)=>{function h0(J){if(J===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return J}function sZ(J,U){var X=typeof Symbol!=="undefined"&&J[Symbol.iterator]||J["@@iterator"];if(X)return(X=X.call(J)).next.bind(X);if(Array.isArray(J)||(X=oZ(J))||U&&J&&typeof J.length==="number"){if(X)J=X;var G=0;return function(){if(G>=J.length)return{done:!0};return{done:!1,value:J[G++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oZ(J,U){if(!J)return;if(typeof J==="string")return O6(J,U);var X=Object.prototype.toString.call(J).slice(8,-1);if(X==="Object"&&J.constructor)X=J.constructor.name;if(X==="Map"||X==="Set")return Array.from(J);if(X==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(X))return O6(J,U)}function O6(J,U){if(U==null||U>J.length)U=J.length;for(var X=0,G=new Array(U);X<U;X++)G[X]=J[X];return G}function K0(J,U){J.prototype=Object.create(U.prototype),J.prototype.constructor=J,h1(J,U)}function h1(J,U){return h1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function X(G,P){return G.__proto__=P,G},h1(J,U)}(function(J,U){typeof L1==="object"&&typeof j6!=="undefined"?U(L1):typeof define==="function"&&define.amd?define(["exports"],U):(J=typeof globalThis!=="undefined"?globalThis:J||self,U(J.ROT={}))})(L1,function(J){var U=0.00000000023283064365386963,X=function(){function Y(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var B=Y.prototype;return B.getSeed=function z(){return this._seed},B.setSeed=function z(K){return K=K<1?1/K:K,this._seed=K,this._s0=(K>>>0)*U,K=K*69069+1>>>0,this._s1=K*U,K=K*69069+1>>>0,this._s2=K*U,this._c=1,this},B.getUniform=function z(){var K=2091639*this._s0+this._c*U;return this._s0=this._s1,this._s1=this._s2,this._c=K|0,this._s2=K-this._c,this._s2},B.getUniformInt=function z(K,Z){var Q=Math.max(K,Z),V=Math.min(K,Z);return Math.floor(this.getUniform()*(Q-V+1))+V},B.getNormal=function z(K,Z){if(K===void 0)K=0;if(Z===void 0)Z=1;var Q,V,q;do Q=2*this.getUniform()-1,V=2*this.getUniform()-1,q=Q*Q+V*V;while(q>1||q==0);var $=Q*Math.sqrt(-2*Math.log(q)/q);return K+$*Z},B.getPercentage=function z(){return 1+Math.floor(this.getUniform()*100)},B.getItem=function z(K){if(!K.length)return null;return K[Math.floor(this.getUniform()*K.length)]},B.shuffle=function z(K){var Z=[],Q=K.slice();while(Q.length){var V=Q.indexOf(this.getItem(Q));Z.push(Q.splice(V,1)[0])}return Z},B.getWeightedValue=function z(K){var Z=0;for(var Q in K)Z+=K[Q];var V=this.getUniform()*Z,q,$=0;for(q in K)if($+=K[q],V<$)return q;return q},B.getState=function z(){return[this._s0,this._s1,this._s2,this._c]},B.setState=function z(K){return this._s0=K[0],this._s1=K[1],this._s2=K[2],this._c=K[3],this},B.clone=function z(){var K=new Y;return K.setState(this.getState())},Y}(),G=new X().setSeed(Date.now()),P=function(){function Y(){}var B=Y.prototype;return B.getContainer=function z(){return null},B.setOptions=function z(K){this._options=K},Y}(),M=function(Y){K0(B,Y);function B(){var K=Y.call(this)||this;return K._ctx=document.createElement("canvas").getContext("2d"),K}var z=B.prototype;return z.schedule=function K(Z){requestAnimationFrame(Z)},z.getContainer=function K(){return this._ctx.canvas},z.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z);var Q=Z.fontStyle?Z.fontStyle+" ":"",V=Q+" "+Z.fontSize+"px "+Z.fontFamily;this._ctx.font=V,this._updateSize(),this._ctx.font=V,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},z.clear=function K(){var Z=this._ctx.globalCompositeOperation;this._ctx.globalCompositeOperation="copy",this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.globalCompositeOperation=Z},z.eventToPosition=function K(Z,Q){var V=this._ctx.canvas,q=V.getBoundingClientRect();if(Z-=q.left,Q-=q.top,Z*=V.width/q.width,Q*=V.height/q.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},B}(P);function j(Y,B){return(Y%B+B)%B}function v(Y,B,z){if(B===void 0)B=0;if(z===void 0)z=1;if(Y<B)return B;if(Y>z)return z;return Y}function N(Y){return Y.charAt(0).toUpperCase()+Y.substring(1)}function b(Y){for(var B=arguments.length,z=new Array(B>1?B-1:0),K=1;K<B;K++)z[K-1]=arguments[K];var Z=b.map,Q=function V(q,$,w,L){if(Y.charAt(L-1)=="%")return q.substring(1);if(!z.length)return q;var H=z[0],F=$||w,D=F.split(","),R=D.shift()||"",O=Z[R.toLowerCase()];if(!O)return q;H=z.shift();var E=H[O].apply(H,D),I=R.charAt(0);if(I!=I.toLowerCase())E=N(E);return E};return Y.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,Q)}b.map={s:"toString"};var d=Object.freeze({__proto__:null,mod:j,clamp:v,capitalize:N,format:b}),a=function(Y){K0(B,Y);function B(){var K=Y.call(this)||this;return K._spacingX=0,K._spacingY=0,K._hexSize=0,K}var z=B.prototype;return z.draw=function K(Z,Q){var V=Z[0],q=Z[1],$=Z[2],w=Z[3],L=Z[4],H=[(V+1)*this._spacingX,q*this._spacingY+this._hexSize];if(this._options.transpose)H.reverse();if(Q)this._ctx.fillStyle=L,this._fill(H[0],H[1]);if(!$)return;this._ctx.fillStyle=w;var F=[].concat($);for(var D=0;D<F.length;D++)this._ctx.fillText(F[D],H[0],Math.ceil(H[1]))},z.computeSize=function K(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=Math.floor(Z/this._spacingX)-1,q=Math.floor((Q-2*this._hexSize)/this._spacingY+1);return[V,q]},z.computeFontSize=function K(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=2*Z/((this._options.width+1)*Math.sqrt(3))-1,q=Q/(2+1.5*(this._options.height-1)),$=Math.min(V,q),w=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var L=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=w;var H=L/100;$=Math.floor($)+1;var F=2*$/(this._options.spacing*(1+H/Math.sqrt(3)));return Math.ceil(F)-1},z._normalizedEventToPosition=function K(Z,Q){var V;if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q,V=this._ctx.canvas.width;else V=this._ctx.canvas.height;var q=V/this._options.height;if(Q=Math.floor(Q/q),j(Q,2))Z-=this._spacingX,Z=1+2*Math.floor(Z/(2*this._spacingX));else Z=2*Math.floor(Z/(2*this._spacingX));return[Z,Q]},z._fill=function K(Z,Q){var V=this._hexSize,q=this._options.border,$=this._ctx;if($.beginPath(),this._options.transpose)$.moveTo(Z-V+q,Q),$.lineTo(Z-V/2+q,Q+this._spacingX-q),$.lineTo(Z+V/2-q,Q+this._spacingX-q),$.lineTo(Z+V-q,Q),$.lineTo(Z+V/2-q,Q-this._spacingX+q),$.lineTo(Z-V/2+q,Q-this._spacingX+q),$.lineTo(Z-V+q,Q);else $.moveTo(Z,Q-V+q),$.lineTo(Z+this._spacingX-q,Q-V/2+q),$.lineTo(Z+this._spacingX-q,Q+V/2-q),$.lineTo(Z,Q+V-q),$.lineTo(Z-this._spacingX+q,Q+V/2-q),$.lineTo(Z-this._spacingX+q,Q-V/2+q),$.lineTo(Z,Q-V+q);$.fill()},z._updateSize=function K(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(Z.spacing*(Z.fontSize+Q/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var V,q;if(Z.transpose)V="height",q="width";else V="width",q="height";this._ctx.canvas[V]=Math.ceil((Z.width+1)*this._spacingX),this._ctx.canvas[q]=Math.ceil((Z.height-1)*this._spacingY+2*this._hexSize)},B}(M),i=function(Y){K0(B,Y);function B(){var K=Y.call(this)||this;return K._spacingX=0,K._spacingY=0,K._canvasCache={},K}var z=B.prototype;return z.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z),this._canvasCache={}},z.draw=function K(Z,Q){if(B.cache)this._drawWithCache(Z);else this._drawNoCache(Z,Q)},z._drawWithCache=function K(Z){var Q=Z[0],V=Z[1],q=Z[2],$=Z[3],w=Z[4],L=""+q+$+w,H;if(L in this._canvasCache)H=this._canvasCache[L];else{var F=this._options.border;H=document.createElement("canvas");var D=H.getContext("2d");if(H.width=this._spacingX,H.height=this._spacingY,D.fillStyle=w,D.fillRect(F,F,H.width-F,H.height-F),q){D.fillStyle=$,D.font=this._ctx.font,D.textAlign="center",D.textBaseline="middle";var R=[].concat(q);for(var O=0;O<R.length;O++)D.fillText(R[O],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[L]=H}this._ctx.drawImage(H,Q*this._spacingX,V*this._spacingY)},z._drawNoCache=function K(Z,Q){var V=Z[0],q=Z[1],$=Z[2],w=Z[3],L=Z[4];if(Q){var H=this._options.border;this._ctx.fillStyle=L,this._ctx.fillRect(V*this._spacingX+H,q*this._spacingY+H,this._spacingX-H,this._spacingY-H)}if(!$)return;this._ctx.fillStyle=w;var F=[].concat($);for(var D=0;D<F.length;D++)this._ctx.fillText(F[D],(V+0.5)*this._spacingX,Math.ceil((q+0.5)*this._spacingY))},z.computeSize=function K(Z,Q){var V=Math.floor(Z/this._spacingX),q=Math.floor(Q/this._spacingY);return[V,q]},z.computeFontSize=function K(Z,Q){var V=Math.floor(Z/this._options.width),q=Math.floor(Q/this._options.height),$=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var w=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=$;var L=w/100,H=L*q/V;if(H>1)q=Math.floor(q/H);return Math.floor(q/this._options.spacing)},z._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._spacingX),Math.floor(Q/this._spacingY)]},z._updateSize=function K(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(Z.spacing*Q),this._spacingY=Math.ceil(Z.spacing*Z.fontSize),Z.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=Z.width*this._spacingX,this._ctx.canvas.height=Z.height*this._spacingY},B}(M);i.cache=!1;var n=function(Y){K0(B,Y);function B(){var K=Y.call(this)||this;return K._colorCanvas=document.createElement("canvas"),K}var z=B.prototype;return z.draw=function K(Z,Q){var V=Z[0],q=Z[1],$=Z[2],w=Z[3],L=Z[4],H=this._options.tileWidth,F=this._options.tileHeight;if(Q)if(this._options.tileColorize)this._ctx.clearRect(V*H,q*F,H,F);else this._ctx.fillStyle=L,this._ctx.fillRect(V*H,q*F,H,F);if(!$)return;var D=[].concat($),R=[].concat(w),O=[].concat(L);for(var E=0;E<D.length;E++){var I=this._options.tileMap[D[E]];if(!I)throw new Error('Char "'+D[E]+'" not found in tileMap');if(this._options.tileColorize){var u=this._colorCanvas,h=u.getContext("2d");h.globalCompositeOperation="source-over",h.clearRect(0,0,H,F);var c=R[E],t=O[E];if(h.drawImage(this._options.tileSet,I[0],I[1],H,F,0,0,H,F),c!="transparent")h.fillStyle=c,h.globalCompositeOperation="source-atop",h.fillRect(0,0,H,F);if(t!="transparent")h.fillStyle=t,h.globalCompositeOperation="destination-over",h.fillRect(0,0,H,F);this._ctx.drawImage(u,V*H,q*F,H,F)}else this._ctx.drawImage(this._options.tileSet,I[0],I[1],H,F,V*H,q*F,H,F)}},z.computeSize=function K(Z,Q){var V=Math.floor(Z/this._options.tileWidth),q=Math.floor(Q/this._options.tileHeight);return[V,q]},z.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},z._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},z._updateSize=function K(){var Z=this._options;this._ctx.canvas.width=Z.width*Z.tileWidth,this._ctx.canvas.height=Z.height*Z.tileHeight,this._colorCanvas.width=Z.tileWidth,this._colorCanvas.height=Z.tileHeight},B}(M);function g(Y){var B,z;if(Y in C)B=C[Y];else{if(Y.charAt(0)=="#"){var K=Y.match(/[0-9a-f]/gi)||[],Z=K.map(function(V){return parseInt(V,16)});if(Z.length==3)B=Z.map(function(V){return V*17});else{for(var Q=0;Q<3;Q++)Z[Q+1]+=16*Z[Q],Z.splice(Q,1);B=Z}}else if(z=Y.match(/rgb\(([0-9, ]+)\)/i))B=z[1].split(/\s*,\s*/).map(function(V){return parseInt(V)});else B=[0,0,0];C[Y]=B}return B.slice()}function _(Y){var B=Y.slice();for(var z=arguments.length,K=new Array(z>1?z-1:0),Z=1;Z<z;Z++)K[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++)for(var V=0;V<K.length;V++)B[Q]+=K[V][Q];return B}function m(Y){for(var B=arguments.length,z=new Array(B>1?B-1:0),K=1;K<B;K++)z[K-1]=arguments[K];for(var Z=0;Z<3;Z++)for(var Q=0;Q<z.length;Q++)Y[Z]+=z[Q][Z];return Y}function l(Y){var B=Y.slice();for(var z=arguments.length,K=new Array(z>1?z-1:0),Z=1;Z<z;Z++)K[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++){for(var V=0;V<K.length;V++)B[Q]*=K[V][Q]/255;B[Q]=Math.round(B[Q])}return B}function p(Y){for(var B=arguments.length,z=new Array(B>1?B-1:0),K=1;K<B;K++)z[K-1]=arguments[K];for(var Z=0;Z<3;Z++){for(var Q=0;Q<z.length;Q++)Y[Z]*=z[Q][Z]/255;Y[Z]=Math.round(Y[Z])}return Y}function q0(Y,B,z){if(z===void 0)z=0.5;var K=Y.slice();for(var Z=0;Z<3;Z++)K[Z]=Math.round(K[Z]+z*(B[Z]-Y[Z]));return K}var B0=q0;function A(Y,B,z){if(z===void 0)z=0.5;var K=x(Y),Z=x(B);for(var Q=0;Q<3;Q++)K[Q]+=z*(Z[Q]-K[Q]);return e(K)}var k=A;function T(Y,B){if(!(B instanceof Array))B=Math.round(G.getNormal(0,B));var z=Y.slice();for(var K=0;K<3;K++)z[K]+=B instanceof Array?Math.round(G.getNormal(0,B[K])):B;return z}function x(Y){var B=Y[0]/255,z=Y[1]/255,K=Y[2]/255,Z=Math.max(B,z,K),Q=Math.min(B,z,K),V=0,q,$=(Z+Q)/2;if(Z==Q)q=0;else{var w=Z-Q;switch(q=$>0.5?w/(2-Z-Q):w/(Z+Q),Z){case B:V=(z-K)/w+(z<K?6:0);break;case z:V=(K-B)/w+2;break;case K:V=(B-z)/w+4;break}V/=6}return[V,q,$]}function Z0(Y,B,z){if(z<0)z+=1;if(z>1)z-=1;if(z<0.16666666666666666)return Y+(B-Y)*6*z;if(z<0.5)return B;if(z<0.6666666666666666)return Y+(B-Y)*(0.6666666666666666-z)*6;return Y}function e(Y){var B=Y[2];if(Y[1]==0)return B=Math.round(B*255),[B,B,B];else{var z=Y[1],K=B<0.5?B*(1+z):B+z-B*z,Z=2*B-K,Q=Z0(Z,K,Y[0]+0.3333333333333333),V=Z0(Z,K,Y[0]),q=Z0(Z,K,Y[0]-0.3333333333333333);return[Math.round(Q*255),Math.round(V*255),Math.round(q*255)]}}function f(Y){var B=Y.map(function(z){return v(z,0,255)});return"rgb("+B.join(",")+")"}function S(Y){var B=Y.map(function(z){return v(z,0,255).toString(16).padStart(2,"0")});return"#"+B.join("")}var C={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},s=Object.freeze({__proto__:null,fromString:g,add:_,add_:m,multiply:l,multiply_:p,interpolate:q0,lerp:B0,interpolateHSL:A,lerpHSL:k,randomize:T,rgb2hsl:x,hsl2rgb:e,toRGB:f,toHex:S}),J0=function(Y){K0(B,Y);function B(){var K=Y.call(this)||this;K._uniforms={};try{K._gl=K._initWebGL()}catch(Z){if(typeof Z==="string")alert(Z);else if(Z instanceof Error)alert(Z.message)}return K}B.isSupported=function K(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var z=B.prototype;return z.schedule=function K(Z){requestAnimationFrame(Z)},z.getContainer=function K(){return this._gl.canvas},z.setOptions=function K(Z){var Q=this;Y.prototype.setOptions.call(this,Z),this._updateSize();var V=this._options.tileSet;if(V&&"complete"in V&&!V.complete)V.addEventListener("load",function(){return Q._updateTexture(V)});else this._updateTexture(V)},z.draw=function K(Z,Q){var V=this._gl,q=this._options,$=Z[0],w=Z[1],L=Z[2],H=Z[3],F=Z[4],D=V.canvas.height-(w+1)*q.tileHeight;if(V.scissor($*q.tileWidth,D,q.tileWidth,q.tileHeight),Q){if(q.tileColorize)V.clearColor(0,0,0,0);else V.clearColor.apply(V,_0(F));V.clear(V.COLOR_BUFFER_BIT)}if(!L)return;var R=[].concat(L),O=[].concat(F),E=[].concat(H);V.uniform2fv(this._uniforms.targetPosRel,[$,w]);for(var I=0;I<R.length;I++){var u=this._options.tileMap[R[I]];if(!u)throw new Error('Char "'+R[I]+'" not found in tileMap');if(V.uniform1f(this._uniforms.colorize,q.tileColorize?1:0),V.uniform2fv(this._uniforms.tilesetPosAbs,u),q.tileColorize)V.uniform4fv(this._uniforms.tint,_0(E[I])),V.uniform4fv(this._uniforms.bg,_0(O[I]));V.drawArrays(V.TRIANGLE_STRIP,0,4)}},z.clear=function K(){var Z=this._gl;Z.clearColor.apply(Z,_0(this._options.bg)),Z.scissor(0,0,Z.canvas.width,Z.canvas.height),Z.clear(Z.COLOR_BUFFER_BIT)},z.computeSize=function K(Z,Q){var V=Math.floor(Z/this._options.tileWidth),q=Math.floor(Q/this._options.tileHeight);return[V,q]},z.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},z.eventToPosition=function K(Z,Q){var V=this._gl.canvas,q=V.getBoundingClientRect();if(Z-=q.left,Q-=q.top,Z*=V.width/q.width,Q*=V.height/q.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},z._initWebGL=function K(){var Z=this,Q=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=Q;var V=E0(Q,P0,$0);return Q.useProgram(V),Y0(Q),V0.forEach(function(q){return Z._uniforms[q]=Q.getUniformLocation(V,q)}),this._program=V,Q.enable(Q.BLEND),Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA),Q.enable(Q.SCISSOR_TEST),Q},z._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},z._updateSize=function K(){var Z=this._gl,Q=this._options,V=[Q.width*Q.tileWidth,Q.height*Q.tileHeight];Z.canvas.width=V[0],Z.canvas.height=V[1],Z.viewport(0,0,V[0],V[1]),Z.uniform2fv(this._uniforms.tileSize,[Q.tileWidth,Q.tileHeight]),Z.uniform2fv(this._uniforms.targetSize,V)},z._updateTexture=function K(Z){l0(this._gl,Z)},B}(P),V0=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],P0=`
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
}`.trim();function E0(Y,B,z){var K=Y.createShader(Y.VERTEX_SHADER);if(Y.shaderSource(K,B),Y.compileShader(K),!Y.getShaderParameter(K,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(K)||"");var Z=Y.createShader(Y.FRAGMENT_SHADER);if(Y.shaderSource(Z,z),Y.compileShader(Z),!Y.getShaderParameter(Z,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(Z)||"");var Q=Y.createProgram();if(Y.attachShader(Q,K),Y.attachShader(Q,Z),Y.linkProgram(Q),!Y.getProgramParameter(Q,Y.LINK_STATUS))throw new Error(Y.getProgramInfoLog(Q)||"");return Q}function Y0(Y){var B=new Float32Array([0,0,1,0,0,1,1,1]),z=Y.createBuffer();Y.bindBuffer(Y.ARRAY_BUFFER,z),Y.bufferData(Y.ARRAY_BUFFER,B,Y.STATIC_DRAW),Y.enableVertexAttribArray(0),Y.vertexAttribPointer(0,2,Y.FLOAT,!1,0,0)}function l0(Y,B){var z=Y.createTexture();return Y.bindTexture(Y.TEXTURE_2D,z),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MAG_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MIN_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_S,Y.REPEAT),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_T,Y.REPEAT),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,0),Y.texImage2D(Y.TEXTURE_2D,0,Y.RGBA,Y.RGBA,Y.UNSIGNED_BYTE,B),z}var N0={};function _0(Y){if(!(Y in N0)){var B;if(Y=="transparent")B=[0,0,0,0];else if(Y.indexOf("rgba")>-1){B=(Y.match(/[\d.]+/g)||[]).map(Number);for(var z=0;z<3;z++)B[z]=B[z]/255}else B=g(Y).map(function(K){return K/255}),B.push(1);N0[Y]=B}return N0[Y]}function l6(Y){return"\x1B[0;48;5;"+D1(Y)+"m\x1B[2J"}function n6(Y,B){return"\x1B[0;38;5;"+D1(Y)+";48;5;"+D1(B)+"m"}function r6(Y,B){return"\x1B["+(B+1)+";"+(Y+1)+"H"}function D1(Y){var B=256,z=6,K=z/B,Z=g(Y),Q=Math.floor(Z[0]*K),V=Math.floor(Z[1]*K),q=Math.floor(Z[2]*K);return Q*36+V*6+q*1+16}var y1=function(Y){K0(B,Y);function B(){var K=Y.call(this)||this;return K._offset=[0,0],K._cursor=[-1,-1],K._lastColor="",K}var z=B.prototype;return z.schedule=function K(Z){setTimeout(Z,16.666666666666668)},z.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z);var Q=[Z.width,Z.height],V=this.computeSize();this._offset=V.map(function(q,$){return Math.floor((q-Q[$])/2)})},z.clear=function K(){process.stdout.write(l6(this._options.bg))},z.draw=function K(Z,Q){var V=Z[0],q=Z[1],$=Z[2],w=Z[3],L=Z[4],H=this._offset[0]+V,F=this._offset[1]+q,D=this.computeSize();if(H<0||H>=D[0])return;if(F<0||F>=D[1])return;if(H!==this._cursor[0]||F!==this._cursor[1])process.stdout.write(r6(H,F)),this._cursor[0]=H,this._cursor[1]=F;if(Q){if(!$)$=" "}if(!$)return;var R=n6(w,L);if(R!==this._lastColor)process.stdout.write(R),this._lastColor=R;if($!="\t"){var O=[].concat($);process.stdout.write(O[0])}if(this._cursor[0]++,this._cursor[0]>=D[0])this._cursor[0]=0,this._cursor[1]++},z.computeFontSize=function K(){throw new Error("Terminal backend has no notion of font size")},z.eventToPosition=function K(Z,Q){return[Z,Q]},z.computeSize=function K(){return[process.stdout.columns,process.stdout.rows]},B}(P),s6=/%([bc]){([^}]*)}/g,S0=0,f0=1,W1=2,R1=3;function o6(Y,B){var z={width:0,height:1},K=M1(Y,B),Z=0;for(var Q=0;Q<K.length;Q++){var V=K[Q];switch(V.type){case S0:Z+=V.value.length;break;case f0:z.height++,z.width=Math.max(z.width,Z),Z=0;break}}return z.width=Math.max(z.width,Z),z}function M1(Y,B){var z=[],K=0;Y.replace(s6,function(Q,V,q,$){var w=Y.substring(K,$);if(w.length)z.push({type:S0,value:w});return z.push({type:V=="c"?W1:R1,value:q.trim()}),K=$+Q.length,""});var Z=Y.substring(K);if(Z.length)z.push({type:S0,value:Z});return a6(z,B)}function a6(Y,B){if(!B)B=1/0;var z=0,K=0,Z=-1;while(z<Y.length){var Q=Y[z];if(Q.type==f0)K=0,Z=-1;if(Q.type!=S0){z++;continue}while(K==0&&Q.value.charAt(0)==" ")Q.value=Q.value.substring(1);var V=Q.value.indexOf(`
`);if(V!=-1){Q.value=Z1(Y,z,V,!0);var q=Q.value.split("");while(q.length&&q[q.length-1]==" ")q.pop();Q.value=q.join("")}if(!Q.value.length){Y.splice(z,1);continue}if(K+Q.value.length>B){var $=-1;while(!0){var w=Q.value.indexOf(" ",$+1);if(w==-1)break;if(K+w>B)break;$=w}if($!=-1)Q.value=Z1(Y,z,$,!0);else if(Z!=-1){var L=Y[Z],H=L.value.lastIndexOf(" ");L.value=Z1(Y,Z,H,!0),z=Z}else Q.value=Z1(Y,z,B-K,!1)}else if(K+=Q.value.length,Q.value.indexOf(" ")!=-1)Z=z;z++}Y.push({type:f0});var F=null;for(var D=0;D<Y.length;D++){var R=Y[D];switch(R.type){case S0:F=R;break;case f0:if(F){var O=F.value.split("");while(O.length&&O[O.length-1]==" ")O.pop();F.value=O.join("")}F=null;break}}return Y.pop(),Y}function Z1(Y,B,z,K){var Z={type:f0},Q={type:S0,value:Y[B].value.substring(z+(K?1:0))};return Y.splice(B+1,0,Z,Q),Y[B].value.substring(0,z)}var i6=Object.freeze({__proto__:null,TYPE_TEXT:S0,TYPE_NEWLINE:f0,TYPE_FG:W1,TYPE_BG:R1,measure:o6,tokenize:M1}),O1=80,j1=25,X0={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},e6={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},t6={hex:a,rect:i,tile:n,"tile-gl":J0,term:y1},ZZ={width:O1,height:j1,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},m0=function(){function Y(z){if(z===void 0)z={};this._data={},this._dirty=!1,this._options={},z=Object.assign({},ZZ,z),this.setOptions(z),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var B=Y.prototype;return B.DEBUG=function z(K,Z,Q){var V=[this._options.bg,this._options.fg];this.draw(K,Z,null,null,V[Q%V.length])},B.clear=function z(){this._data={},this._dirty=!0},B.setOptions=function z(K){if(Object.assign(this._options,K),K.width||K.height||K.fontSize||K.fontFamily||K.spacing||K.layout){if(K.layout){var Z=t6[K.layout];this._backend=new Z}this._backend.setOptions(this._options),this._dirty=!0}return this},B.getOptions=function z(){return this._options},B.getContainer=function z(){return this._backend.getContainer()},B.computeSize=function z(K,Z){return this._backend.computeSize(K,Z)},B.computeFontSize=function z(K,Z){return this._backend.computeFontSize(K,Z)},B.computeTileSize=function z(K,Z){var Q=Math.floor(K/this._options.width),V=Math.floor(Z/this._options.height);return[Q,V]},B.eventToPosition=function z(K){var Z,Q;if("touches"in K)Z=K.touches[0].clientX,Q=K.touches[0].clientY;else Z=K.clientX,Q=K.clientY;return this._backend.eventToPosition(Z,Q)},B.draw=function z(K,Z,Q,V,q){if(!V)V=this._options.fg;if(!q)q=this._options.bg;var $=K+","+Z;if(this._data[$]=[K,Z,Q,V,q],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[$]=!0},B.drawOver=function z(K,Z,Q,V,q){var $=K+","+Z,w=this._data[$];if(w)w[2]=Q||w[2],w[3]=V||w[3],w[4]=q||w[4];else this.draw(K,Z,Q,V,q)},B.drawText=function z(K,Z,Q,V){var q=null,$=null,w=K,L=Z,H=1;if(!V)V=this._options.width-K;var F=M1(Q,V);while(F.length){var D=F.shift();switch(D.type){case S0:var R=!1,O=!1,E=!1,I=!1;for(var u=0;u<D.value.length;u++){var h=D.value.charCodeAt(u),c=D.value.charAt(u);if(this._options.layout==="term"){var t=h>>8,Q0=t===17||t>=46&&t<=159||t>=172&&t<=215||h>=43360&&h<=43391;if(Q0){this.draw(w+0,L,c,q,$),this.draw(w+1,L,"\t",q,$),w+=2;continue}}if(E=h>65280&&h<65377||h>65500&&h<65512||h>65518,R=c.charCodeAt(0)==32||c.charCodeAt(0)==12288,I&&!E&&!R)w++;if(E&&!O)w++;this.draw(w++,L,c,q,$),O=R,I=E}break;case W1:q=D.value||null;break;case R1:$=D.value||null;break;case f0:w=K,L++,H++;break}}return H},B._tick=function z(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var K in this._data)this._draw(K,!1)}else for(var Z in this._dirty)this._draw(Z,!0);this._dirty=!1},B._draw=function z(K,Z){var Q=this._data[K];if(Q[4]!=this._options.bg)Z=!0;this._backend.draw(Q,Z)},Y}();m0.Rect=i,m0.Hex=a,m0.Tile=n,m0.TileGL=J0,m0.Term=y1;var JZ=function(){function Y(z){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,z),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var K=0;K<this._options.order;K++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var B=Y.prototype;return B.clear=function z(){this._data={},this._priorValues={}},B.generate=function z(){var K=[this._sample(this._prefix)];while(K[K.length-1]!=this._boundary)K.push(this._sample(K));return this._join(K.slice(0,-1))},B.observe=function z(K){var Z=this._split(K);for(var Q=0;Q<Z.length;Q++)this._priorValues[Z[Q]]=this._options.prior;Z=this._prefix.concat(Z).concat(this._suffix);for(var V=this._options.order;V<Z.length;V++){var q=Z.slice(V-this._options.order,V),$=Z[V];for(var w=0;w<q.length;w++){var L=q.slice(w);this._observeEvent(L,$)}}},B.getStats=function z(){var K=[],Z=Object.keys(this._priorValues).length;Z--,K.push("distinct samples: "+Z);var Q=Object.keys(this._data).length,V=0;for(var q in this._data)V+=Object.keys(this._data[q]).length;return K.push("dictionary size (contexts): "+Q),K.push("dictionary size (events): "+V),K.join(", ")},B._split=function z(K){return K.split(this._options.words?/\s+/:"")},B._join=function z(K){return K.join(this._options.words?" ":"")},B._observeEvent=function z(K,Z){var Q=this._join(K);if(!(Q in this._data))this._data[Q]={};var V=this._data[Q];if(!(Z in V))V[Z]=0;V[Z]++},B._sample=function z(K){K=this._backoff(K);var Z=this._join(K),Q=this._data[Z],V={};if(this._options.prior){for(var q in this._priorValues)V[q]=this._priorValues[q];for(var $ in Q)V[$]+=Q[$]}else V=Q;return G.getWeightedValue(V)},B._backoff=function z(K){if(K.length>this._options.order)K=K.slice(-this._options.order);else if(K.length<this._options.order)K=this._prefix.slice(0,this._options.order-K.length).concat(K);while(!(this._join(K)in this._data)&&K.length>0)K=K.slice(1);return K},Y}(),p1=function(){function Y(){this.heap=[],this.timestamp=0}var B=Y.prototype;return B.lessThan=function z(K,Z){return K.key==Z.key?K.timestamp<Z.timestamp:K.key<Z.key},B.shift=function z(K){this.heap=this.heap.map(function(Z){var{key:Q,value:V,timestamp:q}=Z;return{key:Q+K,value:V,timestamp:q}})},B.len=function z(){return this.heap.length},B.push=function z(K,Z){this.timestamp+=1;var Q=this.len();this.heap.push({value:K,timestamp:this.timestamp,key:Z}),this.updateUp(Q)},B.pop=function z(){if(this.len()==0)throw new Error("no element to pop");var K=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return K},B.find=function z(K){for(var Z=0;Z<this.len();Z++)if(K==this.heap[Z].value)return this.heap[Z];return null},B.remove=function z(K){var Z=null;for(var Q=0;Q<this.len();Q++)if(K==this.heap[Q].value)Z=Q;if(Z===null)return!1;if(this.len()>1){var V=this.heap.pop();if(V.value!=K)this.heap[Z]=V,this.updateDown(Z);return!0}else this.heap.pop();return!0},B.parentNode=function z(K){return Math.floor((K-1)/2)},B.leftChildNode=function z(K){return 2*K+1},B.rightChildNode=function z(K){return 2*K+2},B.existNode=function z(K){return K>=0&&K<this.heap.length},B.swap=function z(K,Z){var Q=this.heap[K];this.heap[K]=this.heap[Z],this.heap[Z]=Q},B.minNode=function z(K){var Z=K.filter(this.existNode.bind(this)),Q=Z[0];for(var V=sZ(Z),q;!(q=V()).done;){var $=q.value;if(this.lessThan(this.heap[$],this.heap[Q]))Q=$}return Q},B.updateUp=function z(K){if(K==0)return;var Z=this.parentNode(K);if(this.existNode(Z)&&this.lessThan(this.heap[K],this.heap[Z]))this.swap(K,Z),this.updateUp(Z)},B.updateDown=function z(K){var Z=this.leftChildNode(K),Q=this.rightChildNode(K);if(!this.existNode(Z))return;var V=this.minNode([K,Z,Q]);if(V!=K)this.swap(K,V),this.updateDown(V)},B.debugPrint=function z(){console.log(this.heap)},Y}(),c1=function(){function Y(){this._time=0,this._events=new p1}var B=Y.prototype;return B.getTime=function z(){return this._time},B.clear=function z(){return this._events=new p1,this},B.add=function z(K,Z){this._events.push(K,Z)},B.get=function z(){if(!this._events.len())return null;var K=this._events.pop(),Z=K.key,Q=K.value;if(Z>0)this._time+=Z,this._events.shift(-Z);return Q},B.getEventTime=function z(K){var Z=this._events.find(K);if(Z){var Q=Z.key;return Q}return},B.remove=function z(K){return this._events.remove(K)},Y}(),E1=function(){function Y(){this._queue=new c1,this._repeat=[],this._current=null}var B=Y.prototype;return B.getTime=function z(){return this._queue.getTime()},B.add=function z(K,Z){if(Z)this._repeat.push(K);return this},B.getTimeOf=function z(K){return this._queue.getEventTime(K)},B.clear=function z(){return this._queue.clear(),this._repeat=[],this._current=null,this},B.remove=function z(K){var Z=this._queue.remove(K),Q=this._repeat.indexOf(K);if(Q!=-1)this._repeat.splice(Q,1);if(this._current==K)this._current=null;return Z},B.next=function z(){return this._current=this._queue.get(),this._current},Y}(),QZ=function(Y){K0(B,Y);function B(){return Y.apply(this,arguments)||this}var z=B.prototype;return z.add=function K(Z,Q){return this._queue.add(Z,0),Y.prototype.add.call(this,Z,Q)},z.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return Y.prototype.next.call(this)},B}(E1),VZ=function(Y){K0(B,Y);function B(){return Y.apply(this,arguments)||this}var z=B.prototype;return z.add=function K(Z,Q,V){return this._queue.add(Z,V!==void 0?V:1/Z.getSpeed()),Y.prototype.add.call(this,Z,Q)},z.next=function K(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return Y.prototype.next.call(this)},B}(E1),KZ=function(Y){K0(B,Y);function B(){var K=Y.call(this)||this;return K._defaultDuration=1,K._duration=K._defaultDuration,K}var z=B.prototype;return z.add=function K(Z,Q,V){return this._queue.add(Z,V||this._defaultDuration),Y.prototype.add.call(this,Z,Q)},z.clear=function K(){return this._duration=this._defaultDuration,Y.prototype.clear.call(this)},z.remove=function K(Z){if(Z==this._current)this._duration=this._defaultDuration;return Y.prototype.remove.call(this,Z)},z.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return Y.prototype.next.call(this)},z.setDuration=function K(Z){if(this._current)this._duration=Z;return this},B}(E1),UZ={Simple:QZ,Speed:VZ,Action:KZ},C1=function(){function Y(z,K){if(K===void 0)K={};this._lightPasses=z,this._options=Object.assign({topology:8},K)}var B=Y.prototype;return B._getCircle=function z(K,Z,Q){var V=[],q,$,w;switch(this._options.topology){case 4:$=1,w=[0,1],q=[X0[8][7],X0[8][1],X0[8][3],X0[8][5]];break;case 6:q=X0[6],$=1,w=[-1,1];break;case 8:q=X0[4],$=2,w=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var L=K+w[0]*Q,H=Z+w[1]*Q;for(var F=0;F<q.length;F++)for(var D=0;D<Q*$;D++)V.push([L,H]),L+=q[F][0],H+=q[F][1];return V},Y}(),qZ=function(Y){K0(B,Y);function B(){return Y.apply(this,arguments)||this}var z=B.prototype;return z.compute=function K(Z,Q,V,q){if(q(Z,Q,0,1),!this._lightPasses(Z,Q))return;var $=[],w,L,H,F,D;for(var R=1;R<=V;R++){var O=this._getCircle(Z,Q,R),E=360/O.length;for(var I=0;I<O.length;I++){if(H=O[I][0],F=O[I][1],w=E*(I-0.5),L=w+E,D=!this._lightPasses(H,F),this._visibleCoords(Math.floor(w),Math.ceil(L),D,$))q(H,F,R,1);if($.length==2&&$[0]==0&&$[1]==360)return}}},z._visibleCoords=function K(Z,Q,V,q){if(Z<0){var $=this._visibleCoords(0,Q,V,q),w=this._visibleCoords(360+Z,360,V,q);return $||w}var L=0;while(L<q.length&&q[L]<Z)L++;if(L==q.length){if(V)q.push(Z,Q);return!0}var H=0;if(L%2){while(L<q.length&&q[L]<Q)L++,H++;if(H==0)return!1;if(V)if(H%2)q.splice(L-H,H,Q);else q.splice(L-H,H);return!0}else{while(L<q.length&&q[L]<Q)L++,H++;if(Z==q[L-H]&&H==1)return!1;if(V)if(H%2)q.splice(L-H,H,Z);else q.splice(L-H,H,Z,Q);return!0}},B}(C1),zZ=function(Y){K0(B,Y);function B(){return Y.apply(this,arguments)||this}var z=B.prototype;return z.compute=function K(Z,Q,V,q){if(q(Z,Q,0,1),!this._lightPasses(Z,Q))return;var $=[],w,L,H,F,D,R;for(var O=1;O<=V;O++){var E=this._getCircle(Z,Q,O),I=E.length;for(var u=0;u<I;u++){if(w=E[u][0],L=E[u][1],F=[u?2*u-1:2*I-1,2*I],D=[2*u+1,2*I],H=!this._lightPasses(w,L),R=this._checkVisibility(F,D,H,$),R)q(w,L,O,R);if($.length==2&&$[0][0]==0&&$[1][0]==$[1][1])return}}},z._checkVisibility=function K(Z,Q,V,q){if(Z[0]>Q[0]){var $=this._checkVisibility(Z,[Z[1],Z[1]],V,q),w=this._checkVisibility([0,1],Q,V,q);return($+w)/2}var L=0,H=!1;while(L<q.length){var F=q[L],D=F[0]*Z[1]-Z[0]*F[1];if(D>=0){if(D==0&&!(L%2))H=!0;break}L++}var R=q.length,O=!1;while(R--){var E=q[R],I=Q[0]*E[1]-E[0]*Q[1];if(I>=0){if(I==0&&R%2)O=!0;break}}var u=!0;if(L==R&&(H||O))u=!1;else if(H&&O&&L+1==R&&R%2)u=!1;else if(L>R&&L%2)u=!1;if(!u)return 0;var h,c=R-L+1;if(c%2)if(L%2){var t=q[L];if(h=(Q[0]*t[1]-t[0]*Q[1])/(t[1]*Q[1]),V)q.splice(L,c,Q)}else{var Q0=q[R];if(h=(Q0[0]*Z[1]-Z[0]*Q0[1])/(Z[1]*Q0[1]),V)q.splice(L,c,Z)}else if(L%2){var z0=q[L],w0=q[R];if(h=(w0[0]*z0[1]-z0[0]*w0[1])/(z0[1]*w0[1]),V)q.splice(L,c)}else{if(V)q.splice(L,c,Z,Q);return 1}var C0=(Q[0]*Z[1]-Z[0]*Q[1])/(Z[1]*Q[1]);return h/C0},B}(C1),I0=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],$Z=function(Y){K0(B,Y);function B(){return Y.apply(this,arguments)||this}var z=B.prototype;return z.compute=function K(Z,Q,V,q){q(Z,Q,0,1);for(var $=0;$<I0.length;$++)this._renderOctant(Z,Q,I0[$],V,q)},z.compute180=function K(Z,Q,V,q,$){$(Z,Q,0,1);var w=(q-1+8)%8,L=(q-2+8)%8,H=(q+1+8)%8;this._renderOctant(Z,Q,I0[L],V,$),this._renderOctant(Z,Q,I0[w],V,$),this._renderOctant(Z,Q,I0[q],V,$),this._renderOctant(Z,Q,I0[H],V,$)},z.compute90=function K(Z,Q,V,q,$){$(Z,Q,0,1);var w=(q-1+8)%8;this._renderOctant(Z,Q,I0[q],V,$),this._renderOctant(Z,Q,I0[w],V,$)},z._renderOctant=function K(Z,Q,V,q,$){this._castVisibility(Z,Q,1,1,0,q+1,V[0],V[1],V[2],V[3],$)},z._castVisibility=function K(Z,Q,V,q,$,w,L,H,F,D,R){if(q<$)return;for(var O=V;O<=w;O++){var E=-O-1,I=-O,u=!1,h=0;while(E<=0){E+=1;var c=Z+E*L+I*H,t=Q+E*F+I*D,Q0=(E-0.5)/(I+0.5),z0=(E+0.5)/(I-0.5);if(z0>q)continue;if(Q0<$)break;if(E*E+I*I<w*w)R(c,t,O,1);if(!u){if(!this._lightPasses(c,t)&&O<w)u=!0,this._castVisibility(Z,Q,O+1,q,Q0,w,L,H,F,D,R),h=z0}else{if(!this._lightPasses(c,t)){h=z0;continue}u=!1,q=h}}if(u)break}},B}(C1),XZ={DiscreteShadowcasting:qZ,PreciseShadowcasting:zZ,RecursiveShadowcasting:$Z},b0=function(){function Y(z,K){if(z===void 0)z=O1;if(K===void 0)K=j1;this._width=z,this._height=K}var B=Y.prototype;return B._fillMap=function z(K){var Z=[];for(var Q=0;Q<this._width;Q++){Z.push([]);for(var V=0;V<this._height;V++)Z[Q].push(K)}return Z},Y}(),GZ=function(Y){K0(B,Y);function B(){return Y.apply(this,arguments)||this}var z=B.prototype;return z.create=function K(Z){var Q=this._width-1,V=this._height-1;for(var q=0;q<=Q;q++)for(var $=0;$<=V;$++){var w=q&&$&&q<Q&&$<V;Z(q,$,w?0:1)}return this},B}(b0),d1=function(Y){K0(B,Y);function B(K,Z){var Q=Y.call(this,K,Z)||this;return Q._rooms=[],Q._corridors=[],Q}var z=B.prototype;return z.getRooms=function K(){return this._rooms},z.getCorridors=function K(){return this._corridors},B}(b0),l1=function Y(){},J1=function(Y){K0(B,Y);function B(K,Z,Q,V,q,$){var w=Y.call(this)||this;if(w._x1=K,w._y1=Z,w._x2=Q,w._y2=V,w._doors={},q!==void 0&&$!==void 0)w.addDoor(q,$);return w}B.createRandomAt=function K(Z,Q,V,q,$){var w=$.roomWidth[0],L=$.roomWidth[1],H=G.getUniformInt(w,L);w=$.roomHeight[0],L=$.roomHeight[1];var F=G.getUniformInt(w,L);if(V==1){var D=Q-Math.floor(G.getUniform()*F);return new this(Z+1,D,Z+H,D+F-1,Z,Q)}if(V==-1){var R=Q-Math.floor(G.getUniform()*F);return new this(Z-H,R,Z-1,R+F-1,Z,Q)}if(q==1){var O=Z-Math.floor(G.getUniform()*H);return new this(O,Q+1,O+H-1,Q+F,Z,Q)}if(q==-1){var E=Z-Math.floor(G.getUniform()*H);return new this(E,Q-F,E+H-1,Q-1,Z,Q)}throw new Error("dx or dy must be 1 or -1")},B.createRandomCenter=function K(Z,Q,V){var q=V.roomWidth[0],$=V.roomWidth[1],w=G.getUniformInt(q,$);q=V.roomHeight[0],$=V.roomHeight[1];var L=G.getUniformInt(q,$),H=Z-Math.floor(G.getUniform()*w),F=Q-Math.floor(G.getUniform()*L),D=H+w-1,R=F+L-1;return new this(H,F,D,R)},B.createRandom=function K(Z,Q,V){var q=V.roomWidth[0],$=V.roomWidth[1],w=G.getUniformInt(q,$);q=V.roomHeight[0],$=V.roomHeight[1];var L=G.getUniformInt(q,$),H=Z-w-1,F=Q-L-1,D=1+Math.floor(G.getUniform()*H),R=1+Math.floor(G.getUniform()*F),O=D+w-1,E=R+L-1;return new this(D,R,O,E)};var z=B.prototype;return z.addDoor=function K(Z,Q){return this._doors[Z+","+Q]=1,this},z.getDoors=function K(Z){for(var Q in this._doors){var V=Q.split(",");Z(parseInt(V[0]),parseInt(V[1]))}return this},z.clearDoors=function K(){return this._doors={},this},z.addDoors=function K(Z){var Q=this._x1-1,V=this._x2+1,q=this._y1-1,$=this._y2+1;for(var w=Q;w<=V;w++)for(var L=q;L<=$;L++){if(w!=Q&&w!=V&&L!=q&&L!=$)continue;if(Z(w,L))continue;this.addDoor(w,L)}return this},z.debug=function K(){console.log("room",this._x1,this._y1,this._x2,this._y2)},z.isValid=function K(Z,Q){var V=this._x1-1,q=this._x2+1,$=this._y1-1,w=this._y2+1;for(var L=V;L<=q;L++)for(var H=$;H<=w;H++)if(L==V||L==q||H==$||H==w){if(!Z(L,H))return!1}else if(!Q(L,H))return!1;return!0},z.create=function K(Z){var Q=this._x1-1,V=this._x2+1,q=this._y1-1,$=this._y2+1,w=0;for(var L=Q;L<=V;L++)for(var H=q;H<=$;H++){if(L+","+H in this._doors)w=2;else if(L==Q||L==V||H==q||H==$)w=1;else w=0;Z(L,H,w)}},z.getCenter=function K(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},z.getLeft=function K(){return this._x1},z.getRight=function K(){return this._x2},z.getTop=function K(){return this._y1},z.getBottom=function K(){return this._y2},B}(l1),A1=function(Y){K0(B,Y);function B(K,Z,Q,V){var q=Y.call(this)||this;return q._startX=K,q._startY=Z,q._endX=Q,q._endY=V,q._endsWithAWall=!0,q}B.createRandomAt=function K(Z,Q,V,q,$){var w=$.corridorLength[0],L=$.corridorLength[1],H=G.getUniformInt(w,L);return new this(Z,Q,Z+V*H,Q+q*H)};var z=B.prototype;return z.debug=function K(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},z.isValid=function K(Z,Q){var V=this._startX,q=this._startY,$=this._endX-V,w=this._endY-q,L=1+Math.max(Math.abs($),Math.abs(w));if($)$=$/Math.abs($);if(w)w=w/Math.abs(w);var H=w,F=-$,D=!0;for(var R=0;R<L;R++){var O=V+R*$,E=q+R*w;if(!Q(O,E))D=!1;if(!Z(O+H,E+F))D=!1;if(!Z(O-H,E-F))D=!1;if(!D){L=R,this._endX=O-$,this._endY=E-w;break}}if(L==0)return!1;if(L==1&&Z(this._endX+$,this._endY+w))return!1;var I=!Z(this._endX+$+H,this._endY+w+F),u=!Z(this._endX+$-H,this._endY+w-F);if(this._endsWithAWall=Z(this._endX+$,this._endY+w),(I||u)&&this._endsWithAWall)return!1;return!0},z.create=function K(Z){var Q=this._startX,V=this._startY,q=this._endX-Q,$=this._endY-V,w=1+Math.max(Math.abs(q),Math.abs($));if(q)q=q/Math.abs(q);if($)$=$/Math.abs($);for(var L=0;L<w;L++){var H=Q+L*q,F=V+L*$;Z(H,F,0)}return!0},z.createPriorityWalls=function K(Z){if(!this._endsWithAWall)return;var Q=this._startX,V=this._startY,q=this._endX-Q,$=this._endY-V;if(q)q=q/Math.abs(q);if($)$=$/Math.abs($);var w=$,L=-q;Z(this._endX+q,this._endY+$),Z(this._endX+w,this._endY+L),Z(this._endX-w,this._endY-L)},B}(l1),BZ=function(Y){K0(B,Y);function B(K,Z,Q){var V=Y.call(this,K,Z)||this;return V._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(V._options,Q),V._map=[],V._dug=0,V._roomAttempts=20,V._corridorAttempts=20,V._connected=[],V._unconnected=[],V._digCallback=V._digCallback.bind(h0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(h0(V)),V._isWallCallback=V._isWallCallback.bind(h0(V)),V}var z=B.prototype;return z.create=function K(Z){var Q=Date.now();while(!0){var V=Date.now();if(V-Q>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(Z)for(var q=0;q<this._width;q++)for(var $=0;$<this._height;$++)Z(q,$,this._map[q][$]);return this},z._generateRooms=function K(){var Z=this._width-2,Q=this._height-2,V;do if(V=this._generateRoom(),this._dug/(Z*Q)>this._options.roomDugPercentage)break;while(V)},z._generateRoom=function K(){var Z=0;while(Z<this._roomAttempts){Z++;var Q=J1.createRandom(this._width,this._height,this._options);if(!Q.isValid(this._isWallCallback,this._canBeDugCallback))continue;return Q.create(this._digCallback),this._rooms.push(Q),Q}return null},z._generateCorridors=function K(){var Z=0;while(Z<this._corridorAttempts){Z++,this._corridors=[],this._map=this._fillMap(1);for(var Q=0;Q<this._rooms.length;Q++){var V=this._rooms[Q];V.clearDoors(),V.create(this._digCallback)}if(this._unconnected=G.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var q=G.getItem(this._connected);if(!q)break;var $=this._closestRoom(this._unconnected,q);if(!$)break;var w=this._closestRoom(this._connected,$);if(!w)break;var L=this._connectRooms($,w);if(!L)break;if(!this._unconnected.length)return!0}}return!1},z._closestRoom=function K(Z,Q){var V=1/0,q=Q.getCenter(),$=null;for(var w=0;w<Z.length;w++){var L=Z[w],H=L.getCenter(),F=H[0]-q[0],D=H[1]-q[1],R=F*F+D*D;if(R<V)V=R,$=L}return $},z._connectRooms=function K(Z,Q){var V=Z.getCenter(),q=Q.getCenter(),$=q[0]-V[0],w=q[1]-V[1],L,H,F,D,R,O,E;if(Math.abs($)<Math.abs(w))F=w>0?2:0,D=(F+2)%4,R=Q.getLeft(),O=Q.getRight(),E=0;else F=$>0?1:3,D=(F+2)%4,R=Q.getTop(),O=Q.getBottom(),E=1;if(L=this._placeInWall(Z,F),!L)return!1;if(L[E]>=R&&L[E]<=O){H=L.slice();var I=0;switch(D){case 0:I=Q.getTop()-1;break;case 1:I=Q.getRight()+1;break;case 2:I=Q.getBottom()+1;break;case 3:I=Q.getLeft()-1;break}H[(E+1)%2]=I,this._digLine([L,H])}else if(L[E]<R-1||L[E]>O+1){var u=L[E]-q[E],h=0;switch(D){case 0:case 1:h=u<0?3:1;break;case 2:case 3:h=u<0?1:3;break}if(D=(D+h)%4,H=this._placeInWall(Q,D),!H)return!1;var c=[0,0];c[E]=L[E];var t=(E+1)%2;c[t]=H[t],this._digLine([L,c,H])}else{var Q0=(E+1)%2;if(H=this._placeInWall(Q,D),!H)return!1;var z0=Math.round((H[Q0]+L[Q0])/2),w0=[0,0],C0=[0,0];w0[E]=L[E],w0[Q0]=z0,C0[E]=H[E],C0[Q0]=z0,this._digLine([L,w0,C0,H])}if(Z.addDoor(L[0],L[1]),Q.addDoor(H[0],H[1]),E=this._unconnected.indexOf(Z),E!=-1)this._unconnected.splice(E,1),this._connected.push(Z);if(E=this._unconnected.indexOf(Q),E!=-1)this._unconnected.splice(E,1),this._connected.push(Q);return!0},z._placeInWall=function K(Z,Q){var V=[0,0],q=[0,0],$=0;switch(Q){case 0:q=[1,0],V=[Z.getLeft(),Z.getTop()-1],$=Z.getRight()-Z.getLeft()+1;break;case 1:q=[0,1],V=[Z.getRight()+1,Z.getTop()],$=Z.getBottom()-Z.getTop()+1;break;case 2:q=[1,0],V=[Z.getLeft(),Z.getBottom()+1],$=Z.getRight()-Z.getLeft()+1;break;case 3:q=[0,1],V=[Z.getLeft()-1,Z.getTop()],$=Z.getBottom()-Z.getTop()+1;break}var w=[],L=-2;for(var H=0;H<$;H++){var F=V[0]+H*q[0],D=V[1]+H*q[1];w.push(null);var R=this._map[F][D]==1;if(R){if(L!=H-1)w[H]=[F,D]}else if(L=H,H)w[H-1]=null}for(var O=w.length-1;O>=0;O--)if(!w[O])w.splice(O,1);return w.length?G.getItem(w):null},z._digLine=function K(Z){for(var Q=1;Q<Z.length;Q++){var V=Z[Q-1],q=Z[Q],$=new A1(V[0],V[1],q[0],q[1]);$.create(this._digCallback),this._corridors.push($)}},z._digCallback=function K(Z,Q,V){if(this._map[Z][Q]=V,V==0)this._dug++},z._isWallCallback=function K(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},z._canBeDugCallback=function K(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},B}(d1),YZ=function(Y){K0(B,Y);function B(K,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,K,Z)||this,V._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},V.setOptions(Q),V._dirs=X0[V._options.topology],V._map=V._fillMap(0),V}var z=B.prototype;return z.randomize=function K(Z){for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)this._map[Q][V]=G.getUniform()<Z?1:0;return this},z.setOptions=function K(Z){Object.assign(this._options,Z)},z.set=function K(Z,Q,V){this._map[Z][Q]=V},z.create=function K(Z){var Q=this._fillMap(0),V=this._options.born,q=this._options.survive;for(var $=0;$<this._height;$++){var w=1,L=0;if(this._options.topology==6)w=2,L=$%2;for(var H=L;H<this._width;H+=w){var F=this._map[H][$],D=this._getNeighbors(H,$);if(F&&q.indexOf(D)!=-1)Q[H][$]=1;else if(!F&&V.indexOf(D)!=-1)Q[H][$]=1}}this._map=Q,Z&&this._serviceCallback(Z)},z._serviceCallback=function K(Z){for(var Q=0;Q<this._height;Q++){var V=1,q=0;if(this._options.topology==6)V=2,q=Q%2;for(var $=q;$<this._width;$+=V)Z($,Q,this._map[$][Q])}},z._getNeighbors=function K(Z,Q){var V=0;for(var q=0;q<this._dirs.length;q++){var $=this._dirs[q],w=Z+$[0],L=Q+$[1];if(w<0||w>=this._width||L<0||L>=this._height)continue;V+=this._map[w][L]==1?1:0}return V},z.connect=function K(Z,Q,V){if(!Q)Q=0;var q=[],$={},w=1,L=[0,0];if(this._options.topology==6)w=2,L=[0,1];for(var H=0;H<this._height;H++)for(var F=L[H%2];F<this._width;F+=w)if(this._freeSpace(F,H,Q)){var D=[F,H];$[this._pointKey(D)]=D,q.push([F,H])}var R=q[G.getUniformInt(0,q.length-1)],O=this._pointKey(R),E={};E[O]=R,delete $[O],this._findConnected(E,$,[R],!1,Q);while(Object.keys($).length>0){var I=this._getFromTo(E,$),u=I[0],h=I[1],c={};c[this._pointKey(u)]=u,this._findConnected(c,$,[u],!0,Q);var t=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;t.call(this,h,u,E,$,Q,V);for(var Q0 in c){var z0=c[Q0];this._map[z0[0]][z0[1]]=Q,E[Q0]=z0,delete $[Q0]}}Z&&this._serviceCallback(Z)},z._getFromTo=function K(Z,Q){var V=[0,0],q=[0,0],$,w=Object.keys(Z),L=Object.keys(Q);for(var H=0;H<5;H++){if(w.length<L.length){var F=w;q=Z[F[G.getUniformInt(0,F.length-1)]],V=this._getClosest(q,Q)}else{var D=L;V=Q[D[G.getUniformInt(0,D.length-1)]],q=this._getClosest(V,Z)}if($=(V[0]-q[0])*(V[0]-q[0])+(V[1]-q[1])*(V[1]-q[1]),$<64)break}return[V,q]},z._getClosest=function K(Z,Q){var V=null,q=null;for(var $ in Q){var w=Q[$],L=(w[0]-Z[0])*(w[0]-Z[0])+(w[1]-Z[1])*(w[1]-Z[1]);if(q==null||L<q)q=L,V=w}return V},z._findConnected=function K(Z,Q,V,q,$){while(V.length>0){var w=V.splice(0,1)[0],L=void 0;if(this._options.topology==6)L=[[w[0]+2,w[1]],[w[0]+1,w[1]-1],[w[0]-1,w[1]-1],[w[0]-2,w[1]],[w[0]-1,w[1]+1],[w[0]+1,w[1]+1]];else L=[[w[0]+1,w[1]],[w[0]-1,w[1]],[w[0],w[1]+1],[w[0],w[1]-1]];for(var H=0;H<L.length;H++){var F=this._pointKey(L[H]);if(Z[F]==null&&this._freeSpace(L[H][0],L[H][1],$)){if(Z[F]=L[H],!q)delete Q[F];V.push(L[H])}}}},z._tunnelToConnected=function K(Z,Q,V,q,$,w){var L,H;if(Q[0]<Z[0])L=Q,H=Z;else L=Z,H=Q;for(var F=L[0];F<=H[0];F++){this._map[F][L[1]]=$;var D=[F,L[1]],R=this._pointKey(D);V[R]=D,delete q[R]}if(w&&L[0]<H[0])w(L,[H[0],L[1]]);var O=H[0];if(Q[1]<Z[1])L=Q,H=Z;else L=Z,H=Q;for(var E=L[1];E<H[1];E++){this._map[O][E]=$;var I=[O,E],u=this._pointKey(I);V[u]=I,delete q[u]}if(w&&L[1]<H[1])w([H[0],L[1]],[H[0],H[1]])},z._tunnelToConnected6=function K(Z,Q,V,q,$,w){var L,H;if(Q[0]<Z[0])L=Q,H=Z;else L=Z,H=Q;var F=L[0],D=L[1];while(!(F==H[0]&&D==H[1])){var R=2;if(D<H[1])D++,R=1;else if(D>H[1])D--,R=1;if(F<H[0])F+=R;else if(F>H[0])F-=R;else if(H[1]%2)F-=R;else F+=R;this._map[F][D]=$;var O=[F,D],E=this._pointKey(O);V[E]=O,delete q[E]}if(w)w(Q,Z)},z._freeSpace=function K(Z,Q,V){return Z>=0&&Z<this._width&&Q>=0&&Q<this._height&&this._map[Z][Q]==V},z._pointKey=function K(Z){return Z[0]+"."+Z[1]},B}(b0),LZ={room:J1,corridor:A1},wZ=function(Y){K0(B,Y);function B(K,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,K,Z)||this,V._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},Q),V._features={room:4,corridor:4},V._map=[],V._featureAttempts=20,V._walls={},V._dug=0,V._digCallback=V._digCallback.bind(h0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(h0(V)),V._isWallCallback=V._isWallCallback.bind(h0(V)),V._priorityWallCallback=V._priorityWallCallback.bind(h0(V)),V}var z=B.prototype;return z.create=function K(Z){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var Q=(this._width-2)*(this._height-2);this._firstRoom();var V=Date.now(),q;do{q=0;var $=Date.now();if($-V>this._options.timeLimit)break;var w=this._findWall();if(!w)break;var L=w.split(","),H=parseInt(L[0]),F=parseInt(L[1]),D=this._getDiggingDirection(H,F);if(!D)continue;var R=0;do if(R++,this._tryFeature(H,F,D[0],D[1])){this._removeSurroundingWalls(H,F),this._removeSurroundingWalls(H-D[0],F-D[1]);break}while(R<this._featureAttempts);for(var O in this._walls)if(this._walls[O]>1)q++}while(this._dug/Q<this._options.dugPercentage||q);if(this._addDoors(),Z)for(var E=0;E<this._width;E++)for(var I=0;I<this._height;I++)Z(E,I,this._map[E][I]);return this._walls={},this._map=[],this},z._digCallback=function K(Z,Q,V){if(V==0||V==2)this._map[Z][Q]=0,this._dug++;else this._walls[Z+","+Q]=1},z._isWallCallback=function K(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},z._canBeDugCallback=function K(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},z._priorityWallCallback=function K(Z,Q){this._walls[Z+","+Q]=2},z._firstRoom=function K(){var Z=Math.floor(this._width/2),Q=Math.floor(this._height/2),V=J1.createRandomCenter(Z,Q,this._options);this._rooms.push(V),V.create(this._digCallback)},z._findWall=function K(){var Z=[],Q=[];for(var V in this._walls){var q=this._walls[V];if(q==2)Q.push(V);else Z.push(V)}var $=Q.length?Q:Z;if(!$.length)return null;var w=G.getItem($.sort());return delete this._walls[w],w},z._tryFeature=function K(Z,Q,V,q){var $=G.getWeightedValue(this._features),w=LZ[$],L=w.createRandomAt(Z,Q,V,q,this._options);if(!L.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(L.create(this._digCallback),L instanceof J1)this._rooms.push(L);if(L instanceof A1)L.createPriorityWalls(this._priorityWallCallback),this._corridors.push(L);return!0},z._removeSurroundingWalls=function K(Z,Q){var V=X0[4];for(var q=0;q<V.length;q++){var $=V[q],w=Z+$[0],L=Q+$[1];delete this._walls[w+","+L],w=Z+2*$[0],L=Q+2*$[1],delete this._walls[w+","+L]}},z._getDiggingDirection=function K(Z,Q){if(Z<=0||Q<=0||Z>=this._width-1||Q>=this._height-1)return null;var V=null,q=X0[4];for(var $=0;$<q.length;$++){var w=q[$],L=Z+w[0],H=Q+w[1];if(!this._map[L][H]){if(V)return null;V=w}}if(!V)return null;return[-V[0],-V[1]]},z._addDoors=function K(){var Z=this._map;function Q($,w){return Z[$][w]==1}for(var V=0;V<this._rooms.length;V++){var q=this._rooms[V];q.clearDoors(),q.addDoors(Q)}},B}(d1);function n1(Y,B,z){z[B[Y+1]]=z[Y],B[z[Y]]=B[Y+1],z[Y]=Y+1,B[Y+1]=Y}function r1(Y,B,z){z[B[Y]]=z[Y],B[z[Y]]=B[Y],z[Y]=Y,B[Y]=Y}var HZ=function(Y){K0(B,Y);function B(){return Y.apply(this,arguments)||this}var z=B.prototype;return z.create=function K(Z){var Q=this._fillMap(1),V=Math.ceil((this._width-2)/2),q=0.375,$=[],w=[];for(var L=0;L<V;L++)$.push(L),w.push(L);$.push(V-1);var H;for(H=1;H+3<this._height;H+=2)for(var F=0;F<V;F++){var D=2*F+1,R=H;if(Q[D][R]=0,F!=$[F+1]&&G.getUniform()>q)n1(F,$,w),Q[D+1][R]=0;if(F!=$[F]&&G.getUniform()>q)r1(F,$,w);else Q[D][R+1]=0}for(var O=0;O<V;O++){var E=2*O+1,I=H;if(Q[E][I]=0,O!=$[O+1]&&(O==$[O]||G.getUniform()>q))n1(O,$,w),Q[E+1][I]=0;r1(O,$,w)}for(var u=0;u<this._width;u++)for(var h=0;h<this._height;h++)Z(u,h,Q[u][h]);return this},B}(b0),PZ=function(Y){K0(B,Y);function B(){var K=Y.apply(this,arguments)||this;return K._stack=[],K._map=[],K}var z=B.prototype;return z.create=function K(Z){var Q=this._width,V=this._height;this._map=[];for(var q=0;q<Q;q++){this._map.push([]);for(var $=0;$<V;$++){var w=q==0||$==0||q+1==Q||$+1==V;this._map[q].push(w?1:0)}}this._stack=[[1,1,Q-2,V-2]],this._process();for(var L=0;L<Q;L++)for(var H=0;H<V;H++)Z(L,H,this._map[L][H]);return this._map=[],this},z._process=function K(){while(this._stack.length){var Z=this._stack.shift();this._partitionRoom(Z)}},z._partitionRoom=function K(Z){var Q=[],V=[];for(var q=Z[0]+1;q<Z[2];q++){var $=this._map[q][Z[1]-1],w=this._map[q][Z[3]+1];if($&&w&&!(q%2))Q.push(q)}for(var L=Z[1]+1;L<Z[3];L++){var H=this._map[Z[0]-1][L],F=this._map[Z[2]+1][L];if(H&&F&&!(L%2))V.push(L)}if(!Q.length||!V.length)return;var D=G.getItem(Q),R=G.getItem(V);this._map[D][R]=1;var O=[],E=[];O.push(E);for(var I=Z[0];I<D;I++)if(this._map[I][R]=1,I%2)E.push([I,R]);E=[],O.push(E);for(var u=D+1;u<=Z[2];u++)if(this._map[u][R]=1,u%2)E.push([u,R]);E=[],O.push(E);for(var h=Z[1];h<R;h++)if(this._map[D][h]=1,h%2)E.push([D,h]);E=[],O.push(E);for(var c=R+1;c<=Z[3];c++)if(this._map[D][c]=1,c%2)E.push([D,c]);var t=G.getItem(O);for(var Q0=0;Q0<O.length;Q0++){var z0=O[Q0];if(z0==t)continue;var w0=G.getItem(z0);this._map[w0[0]][w0[1]]=0}this._stack.push([Z[0],Z[1],D-1,R-1]),this._stack.push([D+1,Z[1],Z[2],R-1]),this._stack.push([Z[0],R+1,D-1,Z[3]]),this._stack.push([D+1,R+1,Z[2],Z[3]])},B}(b0),FZ=function(Y){K0(B,Y);function B(K,Z,Q){var V;if(Q===void 0)Q=0;return V=Y.call(this,K,Z)||this,V._regularity=Q,V._map=[],V}var z=B.prototype;return z.create=function K(Z){var Q=this._width,V=this._height,q=this._fillMap(1);Q-=Q%2?1:2,V-=V%2?1:2;var $=0,w=0,L=0,H=0,F=0,D=!1,R=[[0,0],[0,0],[0,0],[0,0]];do{if($=1+2*Math.floor(G.getUniform()*(Q-1)/2),w=1+2*Math.floor(G.getUniform()*(V-1)/2),!F)q[$][w]=0;if(!q[$][w]){this._randomize(R);do{if(Math.floor(G.getUniform()*(this._regularity+1))==0)this._randomize(R);D=!0;for(var O=0;O<4;O++)if(L=$+R[O][0]*2,H=w+R[O][1]*2,this._isFree(q,L,H,Q,V)){q[L][H]=0,q[$+R[O][0]][w+R[O][1]]=0,$=L,w=H,D=!1,F++;break}}while(!D)}}while(F+1<Q*V/4);for(var E=0;E<this._width;E++)for(var I=0;I<this._height;I++)Z(E,I,q[E][I]);return this._map=[],this},z._randomize=function K(Z){for(var Q=0;Q<4;Q++)Z[Q][0]=0,Z[Q][1]=0;switch(Math.floor(G.getUniform()*4)){case 0:Z[0][0]=-1,Z[1][0]=1,Z[2][1]=-1,Z[3][1]=1;break;case 1:Z[3][0]=-1,Z[2][0]=1,Z[1][1]=-1,Z[0][1]=1;break;case 2:Z[2][0]=-1,Z[3][0]=1,Z[0][1]=-1,Z[1][1]=1;break;case 3:Z[1][0]=-1,Z[0][0]=1,Z[3][1]=-1,Z[2][1]=1;break}},z._isFree=function K(Z,Q,V,q,$){if(Q<1||V<1||Q>=q||V>=$)return!1;return Z[Q][V]},B}(b0),DZ=function(Y){K0(B,Y);function B(K,Z,Q){var V=Y.call(this,K,Z)||this;if(V.map=[],V.rooms=[],V.connectedCells=[],Q=Object.assign({cellWidth:3,cellHeight:3},Q),!Q.hasOwnProperty("roomWidth"))Q.roomWidth=V._calculateRoomSize(V._width,Q.cellWidth);if(!Q.hasOwnProperty("roomHeight"))Q.roomHeight=V._calculateRoomSize(V._height,Q.cellHeight);return V._options=Q,V}var z=B.prototype;return z.create=function K(Z){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),Z)for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)Z(Q,V,this.map[Q][V]);return this},z._calculateRoomSize=function K(Z,Q){var V=Math.floor(Z/Q*0.8),q=Math.floor(Z/Q*0.25);if(q<2)q=2;if(V<2)V=2;return[q,V]},z._initRooms=function K(){for(var Z=0;Z<this._options.cellWidth;Z++){this.rooms.push([]);for(var Q=0;Q<this._options.cellHeight;Q++)this.rooms[Z].push({x:0,y:0,width:0,height:0,connections:[],cellx:Z,celly:Q})}},z._connectRooms=function K(){var Z=G.getUniformInt(0,this._options.cellWidth-1),Q=G.getUniformInt(0,this._options.cellHeight-1),V,q,$,w=!1,L,H,F;do{F=[0,2,4,6],F=G.shuffle(F);do{if(w=!1,V=F.pop(),q=Z+X0[8][V][0],$=Q+X0[8][V][1],q<0||q>=this._options.cellWidth)continue;if($<0||$>=this._options.cellHeight)continue;if(L=this.rooms[Z][Q],L.connections.length>0){if(L.connections[0][0]==q&&L.connections[0][1]==$)break}if(H=this.rooms[q][$],H.connections.length==0)H.connections.push([Z,Q]),this.connectedCells.push([q,$]),Z=q,Q=$,w=!0}while(F.length>0&&w==!1)}while(F.length>0)},z._connectUnconnectedRooms=function K(){var Z=this._options.cellWidth,Q=this._options.cellHeight;this.connectedCells=G.shuffle(this.connectedCells);var V,q,$;for(var w=0;w<this._options.cellWidth;w++)for(var L=0;L<this._options.cellHeight;L++)if(V=this.rooms[w][L],V.connections.length==0){var H=[0,2,4,6];H=G.shuffle(H),$=!1;do{var F=H.pop(),D=w+X0[8][F][0],R=L+X0[8][F][1];if(D<0||D>=Z||R<0||R>=Q)continue;if(q=this.rooms[D][R],$=!0,q.connections.length==0)break;for(var O=0;O<q.connections.length;O++)if(q.connections[O][0]==w&&q.connections[O][1]==L){$=!1;break}if($)break}while(H.length);if($)V.connections.push([q.cellx,q.celly]);else console.log("-- Unable to connect room.")}},z._createRandomRoomConnections=function K(){},z._createRooms=function K(){var Z=this._width,Q=this._height,V=this._options.cellWidth,q=this._options.cellHeight,$=Math.floor(this._width/V),w=Math.floor(this._height/q),L,H,F=this._options.roomWidth,D=this._options.roomHeight,R,O,E;for(var I=0;I<V;I++)for(var u=0;u<q;u++){if(R=$*I,O=w*u,R==0)R=1;if(O==0)O=1;if(L=G.getUniformInt(F[0],F[1]),H=G.getUniformInt(D[0],D[1]),u>0){E=this.rooms[I][u-1];while(O-(E.y+E.height)<3)O++}if(I>0){E=this.rooms[I-1][u];while(R-(E.x+E.width)<3)R++}var h=Math.round(G.getUniformInt(0,$-L)/2),c=Math.round(G.getUniformInt(0,w-H)/2);while(R+h+L>=Z)if(h)h--;else L--;while(O+c+H>=Q)if(c)c--;else H--;R=R+h,O=O+c,this.rooms[I][u].x=R,this.rooms[I][u].y=O,this.rooms[I][u].width=L,this.rooms[I][u].height=H;for(var t=R;t<R+L;t++)for(var Q0=O;Q0<O+H;Q0++)this.map[t][Q0]=0}},z._getWallPosition=function K(Z,Q){var V,q,$;if(Q==1||Q==3){if(V=G.getUniformInt(Z.x+1,Z.x+Z.width-2),Q==1)q=Z.y-2,$=q+1;else q=Z.y+Z.height+1,$=q-1;this.map[V][$]=0}else{if(q=G.getUniformInt(Z.y+1,Z.y+Z.height-2),Q==2)V=Z.x+Z.width+1,$=V-1;else V=Z.x-2,$=V+1;this.map[$][q]=0}return[V,q]},z._drawCorridor=function K(Z,Q){var V=Q[0]-Z[0],q=Q[1]-Z[1],$=Z[0],w=Z[1],L,H,F,D,R=[],O=Math.abs(V),E=Math.abs(q),I=G.getUniform(),u=I,h=1-I;if(H=V>0?2:6,F=q>0?4:0,O<E)L=Math.ceil(E*u),R.push([F,L]),R.push([H,O]),L=Math.floor(E*h),R.push([F,L]);else L=Math.ceil(O*u),R.push([H,L]),R.push([F,E]),L=Math.floor(O*h),R.push([H,L]);this.map[$][w]=0;while(R.length>0){D=R.pop();while(D[1]>0)$+=X0[8][D[0]][0],w+=X0[8][D[0]][1],this.map[$][w]=0,D[1]=D[1]-1}},z._createCorridors=function K(){var Z=this._options.cellWidth,Q=this._options.cellHeight,V,q,$,w,L;for(var H=0;H<Z;H++)for(var F=0;F<Q;F++){V=this.rooms[H][F];for(var D=0;D<V.connections.length;D++){if(q=V.connections[D],$=this.rooms[q[0]][q[1]],$.cellx>V.cellx)w=2,L=4;else if($.cellx<V.cellx)w=4,L=2;else if($.celly>V.celly)w=3,L=1;else w=1,L=3;this._drawCorridor(this._getWallPosition(V,w),this._getWallPosition($,L))}}},B}(b0),WZ={Arena:GZ,Uniform:BZ,Cellular:YZ,Digger:wZ,EllerMaze:HZ,DividedMaze:PZ,IceyMaze:FZ,Rogue:DZ},RZ=function Y(){},MZ=0.5*(Math.sqrt(3)-1),n0=(3-Math.sqrt(3))/6,OZ=function(Y){K0(B,Y);function B(K){var Z;if(K===void 0)K=256;Z=Y.call(this)||this,Z._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var Q=[];for(var V=0;V<K;V++)Q.push(V);Q=G.shuffle(Q),Z._perms=[],Z._indexes=[];for(var q=0;q<2*K;q++)Z._perms.push(Q[q%K]),Z._indexes.push(Z._perms[q]%Z._gradients.length);return Z}var z=B.prototype;return z.get=function K(Z,Q){var V=this._perms,q=this._indexes,$=V.length/2,w=0,L=0,H=0,F,D=(Z+Q)*MZ,R=Math.floor(Z+D),O=Math.floor(Q+D),E=(R+O)*n0,I=R-E,u=O-E,h=Z-I,c=Q-u,t,Q0;if(h>c)t=1,Q0=0;else t=0,Q0=1;var z0=h-t+n0,w0=c-Q0+n0,C0=h-1+2*n0,N1=c-1+2*n0,S1=j(R,$),I1=j(O,$),r0=0.5-h*h-c*c;if(r0>=0){r0*=r0,F=q[S1+V[I1]];var o1=this._gradients[F];w=r0*r0*(o1[0]*h+o1[1]*c)}var s0=0.5-z0*z0-w0*w0;if(s0>=0){s0*=s0,F=q[S1+t+V[I1+Q0]];var a1=this._gradients[F];L=s0*s0*(a1[0]*z0+a1[1]*w0)}var o0=0.5-C0*C0-N1*N1;if(o0>=0){o0*=o0,F=q[S1+1+V[I1+1]];var i1=this._gradients[F];H=o0*o0*(i1[0]*C0+i1[1]*N1)}return 70*(w+L+H)},B}(RZ),jZ={Simplex:OZ},s1=function(){function Y(z,K,Z,Q){if(Q===void 0)Q={};if(this._toX=z,this._toY=K,this._passableCallback=Z,this._options=Object.assign({topology:8},Q),this._dirs=X0[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var B=Y.prototype;return B._getNeighbors=function z(K,Z){var Q=[];for(var V=0;V<this._dirs.length;V++){var q=this._dirs[V],$=K+q[0],w=Z+q[1];if(!this._passableCallback($,w))continue;Q.push([$,w])}return Q},Y}(),EZ=function(Y){K0(B,Y);function B(K,Z,Q,V){var q=Y.call(this,K,Z,Q,V)||this;return q._computed={},q._todo=[],q._add(K,Z,null),q}var z=B.prototype;return z.compute=function K(Z,Q,V){var q=Z+","+Q;if(!(q in this._computed))this._compute(Z,Q);if(!(q in this._computed))return;var $=this._computed[q];while($)V($.x,$.y),$=$.prev},z._compute=function K(Z,Q){while(this._todo.length){var V=this._todo.shift();if(V.x==Z&&V.y==Q)return;var q=this._getNeighbors(V.x,V.y);for(var $=0;$<q.length;$++){var w=q[$],L=w[0],H=w[1],F=L+","+H;if(F in this._computed)continue;this._add(L,H,V)}}},z._add=function K(Z,Q,V){var q={x:Z,y:Q,prev:V};this._computed[Z+","+Q]=q,this._todo.push(q)},B}(s1),CZ=function(Y){K0(B,Y);function B(K,Z,Q,V){var q;if(V===void 0)V={};return q=Y.call(this,K,Z,Q,V)||this,q._todo=[],q._done={},q}var z=B.prototype;return z.compute=function K(Z,Q,V){this._todo=[],this._done={},this._fromX=Z,this._fromY=Q,this._add(this._toX,this._toY,null);while(this._todo.length){var q=this._todo.shift(),$=q.x+","+q.y;if($ in this._done)continue;if(this._done[$]=q,q.x==Z&&q.y==Q)break;var w=this._getNeighbors(q.x,q.y);for(var L=0;L<w.length;L++){var H=w[L],F=H[0],D=H[1],R=F+","+D;if(R in this._done)continue;this._add(F,D,q)}}var O=this._done[Z+","+Q];if(!O)return;while(O)V(O.x,O.y),O=O.prev},z._add=function K(Z,Q,V){var q=this._distance(Z,Q),$={x:Z,y:Q,prev:V,g:V?V.g+1:0,h:q},w=$.g+$.h;for(var L=0;L<this._todo.length;L++){var H=this._todo[L],F=H.g+H.h;if(w<F||w==F&&q<H.h){this._todo.splice(L,0,$);return}}this._todo.push($)},z._distance=function K(Z,Q){switch(this._options.topology){case 4:return Math.abs(Z-this._fromX)+Math.abs(Q-this._fromY);case 6:var V=Math.abs(Z-this._fromX),q=Math.abs(Q-this._fromY);return q+Math.max(0,(V-q)/2);case 8:return Math.max(Math.abs(Z-this._fromX),Math.abs(Q-this._fromY))}},B}(s1),AZ={Dijkstra:EZ,AStar:CZ},NZ=function(){function Y(z){this._scheduler=z,this._lock=1}var B=Y.prototype;return B.start=function z(){return this.unlock()},B.lock=function z(){return this._lock++,this},B.unlock=function z(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var K=this._scheduler.next();if(!K)return this.lock();var Z=K.act();if(Z&&Z.then)this.lock(),Z.then(this.unlock.bind(this))}return this},Y}(),SZ=function(){function Y(z,K){if(K===void 0)K={};this._reflectivityCallback=z,this._options={},K=Object.assign({passes:1,emissionThreshold:100,range:10},K),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(K)}var B=Y.prototype;return B.setOptions=function z(K){if(Object.assign(this._options,K),K&&K.range)this.reset();return this},B.setFOV=function z(K){return this._fov=K,this._fovCache={},this},B.setLight=function z(K,Z,Q){var V=K+","+Z;if(Q)this._lights[V]=typeof Q=="string"?g(Q):Q;else delete this._lights[V];return this},B.clearLights=function z(){this._lights={}},B.reset=function z(){return this._reflectivityCache={},this._fovCache={},this},B.compute=function z(K){var Z={},Q={},V={};for(var q in this._lights){var $=this._lights[q];Q[q]=[0,0,0],m(Q[q],$)}for(var w=0;w<this._options.passes;w++){if(this._emitLight(Q,V,Z),w+1==this._options.passes)continue;Q=this._computeEmitters(V,Z)}for(var L in V){var H=L.split(","),F=parseInt(H[0]),D=parseInt(H[1]);K(F,D,V[L])}return this},B._emitLight=function z(K,Z,Q){for(var V in K){var q=V.split(","),$=parseInt(q[0]),w=parseInt(q[1]);this._emitLightFromCell($,w,K[V],Z),Q[V]=1}return this},B._computeEmitters=function z(K,Z){var Q={};for(var V in K){if(V in Z)continue;var q=K[V],$=void 0;if(V in this._reflectivityCache)$=this._reflectivityCache[V];else{var w=V.split(","),L=parseInt(w[0]),H=parseInt(w[1]);$=this._reflectivityCallback(L,H),this._reflectivityCache[V]=$}if($==0)continue;var F=[0,0,0],D=0;for(var R=0;R<3;R++){var O=Math.round(q[R]*$);F[R]=O,D+=O}if(D>this._options.emissionThreshold)Q[V]=F}return Q},B._emitLightFromCell=function z(K,Z,Q,V){var q=K+","+Z,$;if(q in this._fovCache)$=this._fovCache[q];else $=this._updateFOV(K,Z);for(var w in $){var L=$[w],H=void 0;if(w in V)H=V[w];else H=[0,0,0],V[w]=H;for(var F=0;F<3;F++)H[F]+=Math.round(Q[F]*L)}return this},B._updateFOV=function z(K,Z){var Q=K+","+Z,V={};this._fovCache[Q]=V;var q=this._options.range;function $(w,L,H,F){var D=w+","+L,R=F*(1-H/q);if(R==0)return;V[D]=R}return this._fov.compute(K,Z,q,$.bind(this)),V},Y}(),IZ=d,vZ=s,fZ=i6;J.Color=vZ,J.DEFAULT_HEIGHT=j1,J.DEFAULT_WIDTH=O1,J.DIRS=X0,J.Display=m0,J.Engine=NZ,J.EventQueue=c1,J.FOV=XZ,J.KEYS=e6,J.Lighting=SZ,J.Map=WZ,J.Noise=jZ,J.Path=AZ,J.RNG=G,J.Scheduler=UZ,J.StringGenerator=JZ,J.Text=fZ,J.Util=IZ,Object.defineProperty(J,"__esModule",{value:!0})})});var hZ=typeof window!=="undefined"?window.innerWidth:0,xZ=typeof window!=="undefined"?window.innerHeight:0;var o={cameraWidth:Math.floor(hZ/16),cameraHeight:Math.floor(xZ/16),chatLogMaxSize:100,chatLogMaxDisplaySize:10,debug:!0,fontSize:16,highlightEnemy:!0,showGrid:!0,showUI:!0,zoom:1},f1={WIDTH:1024,HEIGHT:1024},G0={width:Math.floor(o.cameraWidth*(1/o.zoom)),height:Math.floor(o.cameraHeight*(1/o.zoom)),bg:"transparent",fontSize:Math.floor(o.fontSize*o.zoom),layout:"tile-gl",tileWidth:16,tileHeight:16,tileSet:null,tileMap:null,tileColorize:!0};function t1(J,U){let X=J.entities[U];return`DEBUG: ${U} at ${X.mapId},${X.x},${X.y}`}class Q1{name;description;energyDelta;constructor(J,U,X=0){this.name=J,this.description=U,this.energyDelta=X}}class a0{name;description;constructor(J,U){this.name=J,this.description=U}}class M0{key;description;constructor(J,U){this.key=J,this.description=U}}class y0{name;description;constructor(J,U){this.name=J,this.description=U}}class O0{name;description;icon;color;energyMax;unlockCondition;constructor(J,U,X,G=100){this.name=J,this.description=U,this.icon=X,this.energyMax=G,this.color="white",this.unlockCondition=null}}class V1{name;description;color;constructor(J,U,X){this.name=J,this.description=U,this.color=X}}class H0{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(J,U,X,G="cyberyellow",P=0,M=0,j=0,v=0,N=0,b=[]){this.name=J,this.description=U,this.icon=X,this.color=G,this.energyDelta=P,this.matter=M,this.gold=j,this.damage=v,this.energyCost=N,this.effects=b}}class r{name;description;icon;fg;bg;energyDelta;constructor(J,U,X=null,G="white",P="black",M=0){this.name=J,this.description=U,this.icon=X,this.fg=G,this.bg=P,this.energyDelta=M}}var W={actions:{Enter:new Q1("Enter","Enter a portal or plant atmosphere"),Launch:new Q1("Launch","Launch into space",-10),Wait:new Q1("Wait","Wait one turn in place")},ais:{aggrorange:new a0("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new a0("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new a0("guardian","Idles at a position and only fights back if engaged"),interactenrage:new a0("interactenrage","Gets hostile when getting talked to too often!")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new M0("N","Move/interact/combat north"),E:new M0("E","Move/interact/combat east"),S:new M0("S","Move/interact/combat south"),W:new M0("W","Move/interact/combat west"),A:new M0("A","Primary action, confirm"),B:new M0("B","Take a break, cancel"),"1":new M0("1","Secondary action, first quick slot"),"2":new M0("2","Tertiary action, second quick slot"),M:new M0("M","Menu"),"#":new M0("#","Open prompt")},dialogs:{bot_bar_aerobot_backstage:"Huh? How did you get here?",bot_bar_aerobot_charger:"Feel free to recharge on those chargepads and enjoy the show.",bot_bar_aerobot_spa_down:"Have you been to our shop, yet?",bot_bar_aerobot_spa_up:"Ahhhh, so refreshing!",bot_bar_aerobot_welcome:"Welcome to the Bot Bar. How may we serve you?",bot_dormitory_aerobot_down:"Would you please go to your own pod?",bot_dormitory_aerobot_up:"Pod, sweet pod!",bot_dormitory_workbot_left:"This pod is taken, go away!",bot_dormitory_workbot_right:"Brzzzt! Brzzzt!",bot_factory_workbot_assembly:"The assembly line is unblocked!",bot_factory_workbot_forebot:"What are you doing here? Get back to work!",bot_factory_workbot_sewers:"Sewage water is spilling over again.",bot_factory_workbot_workwork:"Work, work!",bot_factory_workbot_wrench:"I lost a wrench somewhere here...",bot_prison_aerobot:"I'm innocent! I'm innocent! I'm innocent! Beep!",bot_prison_workbot:"Thanks for freeing me! Guess I don't need this Pickaxe anymore...",bot_stadium_botracing:"Now this is botracing!",bot_station_pioneer:"You shall not pass!",manual_spirit:"Weeee!",manual_aerobot:"Huh? Why don't you have a hull?",manual_workbot:"Work, work!",manual_cleaner:"Follow the rules! Okay?",manual_pioneer:"Don't talk to me, weakling!",shop_instance_aerobot_shopper:"It's shiny!!!",shop_instance_shopkeeper:"Welcome! What does your engine desire?",shop_instance_workbot_shopper:"This shop is not so secret after all..."},effects:{Recharger:new y0("Recharger","Doubles energy gained from chargepads"),RockCrusher:new y0("Rock Crusher","Mines rock"),Screwing:new y0("Screwing","Unscrews the sewer portal covers"),WallCrusher:new y0("Wall Crusher","Tears down weak walls"),WaterShield:new y0("Water Shield","Reduces damage taken from water")},entities:{movableboulder:new O0("Boulder","A movable rock","o",2),movablebox:new O0("Box","A movable box","x",2),Spirit:new O0("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new O0("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new O0("WorkBot","Basic factory worker","B"),Cleaner:new O0("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new O0("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Valkyrie:new O0("Valkyrie","Airbourne war logistics","V",160),Pioneer:new O0("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200)},factions:{Spirits:new V1("Spirits","Default player faction","white"),Pyrates:new V1("Pyrates","Default enemy faction","cybermagenta"),Guardians:new V1("Guardians","Bot station guardians","cybercyan")},items:{battery:new H0("Battery","Increases maximum energy","b","cyberyellow",10),chest:new H0("Chest","A chest. What might be inside?","i","cyberyellow"),energy:new H0("Energy","Energy pack","e","cyberyellow",10),gold:new H0("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new H0("Goo","A minor matter source","goo","gray",0,1),junk:new H0("Junk","Broken bot","%","gray",0,1),matter:new H0("Matter","A pile of stuff","m","gray",0,100),broom:new H0("Broom","Sweeps the floor","ib","cyberyellow",0,0,0,-10,-1),hammer:new H0("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["Wall Crusher"]),pickaxe:new H0("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["Rock Crusher"]),shocker:new H0("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1,["Recharger"]),trident:new H0("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["Water Shield"]),wrench:new H0("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1,["Screwing"])},maps:{bot_bar:`!
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
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:o.showGrid?new r("void","Just nothing here",".","gray"):new r("void","Just nothing here"),voidtrue:new r("voidtrue","Really nothing here and you shouldn't get there ever!","_"),voidhidden:new r("voidhidden","Looks like a wall, but isn't!","#","gray","black"),water:new r("water","Rust and other dangers await","~","cybercyan","cyberblue",-2),watersewage:new r("watersewage","Rust, goo and other dangers await","~~","cyberyellow","cybergreen",-4),rock:new r("rock","Hidden treasures may await","'","white","gray"),tree:new r("tree","Lots of trees make a forest","t","brown","black"),wall:new r("wall","A strong wall","#","gray","black"),wallstatueaerobot:new r("wallstatueaerobot","A small statue looking like an AeroBot","sa","gray","black"),wallstatuecleaner:new r("wallstatuecleaner","A small statue looking like a Cleaner","sc","gray","black"),wallstatuepioneer:new r("wallstatuepioneer","A small statue looking like a Pioneer","sp","gray","black"),wallstatueworkbot:new r("wallstatueworkbot","A small statue looking like a WorkBot","sb","gray","black"),wallweak:new r("wallweak","A weakened wall","+","gray","black"),chargepad:new r("chargepad","Recharges energy and health","=","cyberyellow","black",2),movenorth:new r("movenorth","Moves you north","^^","cyberyellow"),moveeast:new r("moveeast","Moves you east",">>","cyberyellow"),movesouth:new r("movesouth","Moves you south","vv","cyberyellow"),movewest:new r("movewest","Moves you west","<<","cyberyellow"),portal:new r("portal","Gateway to another map","O","cyberyellow","gray"),portalclosed:new r("portalclosed","Closed gateway to another map","Oc","black","gray"),portalhidden:new r("portalhidden","Hidden gateway to another map","#","gray","black"),portallauncher:new r("portallauncher","Launches into space","O","cyberyellow","gray"),portalsewers:new r("portalsewers","Needs some tool to open","#~","gray","black"),portalstartworkbot:new r("portalstartworkbot","Start playing as a WorkBot","OB","white"),portalstartaerobot:new r("portalstartaerobot","Start playing as a AeroBot","OA","white"),"_portalstart?":new r("_portalstart?","Not unlocked, yet!","O?","white"),spacerock:new r("spacerock","Mountains as seen from space, non-blocking!","'s","white","gray"),spacetree:new r("spacetree","Forest as seen from space","ts","brown","darkgray"),spacewater:new r("spacewater","Water as seen from space, not dangerous!","~s","cybercyan","cyberblue"),spacevoid:new r("spacevoid","Void/ground as seen from space",".s","darkgray","darkgray"),spacevoidstarwhite:new r("spacevoidstarwhite","Space with a white background star",".w","white"),spacevoidstaryellow:new r("spacevoidstaryellow","Space with a yellow background star",".y","cyberyellow"),sun:new r("sun","It's hot, really hot!","§","cyberyellow","cyberyellow",-100),terminal:new r("terminal","A computer terminal","$","cyberyellow"),tv:new r("tv","A big billboard screen","!","black","cyberyellow")},uitexts:{}};function Z6(J){if(Object.hasOwn(W.dialogs,J))return W.dialogs[J];return`TODO: ${J} needs localization!`}function L0(J,U){return J.chatLog.push(U),J.chatLog=J.chatLog.slice(-o.chatLogMaxSize),J}function F0(J,U,X,G,P=0,M=0,j={}){let v={id:U,type:X,mapId:G,x:P,y:M,energy:10,energyMax:10,gold:0,matter:0,message:null,interactions:0,options:j};return J=U1(J,v,X),J.entities[v.id]=v,J}function K1(J,U){return J.entities[U]=void 0,delete J.entities[U],J.tools[U]=void 0,J}function k0(J,U){let X=Object.keys(J.entities),G=[];for(let P=0;P<X.length;P++){let M=J.entities[X[P]];if(M.mapId===U)G.push(M)}return G}function J6(J,U,X,G){let P=k0(J,U).filter((M)=>M.x===X&&M.y===G);if(P.length>0)return P[0];return null}function U1(J,U,X){if(U.type=X,U.energy=X.energyMax,U.energyMax=X.energyMax,U.gold=0,U.matter=0,!j0(U))J.tools[U.id]=void 0;return J}function Q6(J,U,X){if(U===X)return J;if(U.options.faction===X.options.faction){if(X.options.dialog){let G=X?.options?.name?X.options.name:X.type.name;J=L0(J,G+": "+Z6(X.options.dialog)),X.interactions++}}else{let G=U.id,P=X.id;J._combatQueue.push({entityId:G,otherEntityId:P})}if(X.interactions>=3&&X.options?.ai===W.ais.interactenrage)X.options.faction=W.factions.Pyrates;return J}function j0(J){return J.type===W.entities.movableboulder||J.type===W.entities.movablebox}function q1(J,U){let X={A:W.actions.Wait,B:W.actions.Wait};if(!!J.lastSpacePositionByEntity[U.id]&&U.energy>Math.abs(W.actions.Launch.energyDelta))X.A=W.actions.Launch;let P=J.maps[U.mapId].getTile(U.x,U.y);if(!!P.options.mapId&&"x"in P.options&&"y"in P.options)X.A=W.actions.Enter;return X}function b1(J,U,X){let G=J._eventSubscribers[U];if(G)for(let P=0;P<G.length;P++){let M=G[P];J=M(J,X)}return J}function k1(J,U,X){if(U in J._eventSubscribers);else J._eventSubscribers[U]=[];return J._eventSubscribers[U].push(X),J}function u0(J,U,X,G=0,P=0){let j={id:z1(X,G,P),type:U,mapId:X,x:G,y:P,energy:U.energyDelta,gold:U.gold,matter:U.matter};return J.items[j.id]=j,J}function V6(J,U,X,G=0,P=0){let M=W.items.junk,v={id:z1(X,G,P),type:M,mapId:X,x:G,y:P,energy:M.energyDelta,gold:M.gold,matter:U};return J.items[v.id]=v,J}function i0(J,U,X,G=0,P=0,M,j){let N={id:z1(X,G,P),type:U,mapId:X,x:G,y:P,energy:U.energyDelta,gold:M,matter:j};return J.items[N.id]=N,J}function z1(J,U,X){return"item,"+J+","+U+","+X}function u1(J,U){return J.items[U]=void 0,delete J.items[U],J}function $1(J,U){let X=Object.keys(J.items),G=[];for(let P=0;P<X.length;P++){let M=J.items[X[P]];if(M.mapId===U)G.push(M)}return G}function K6(J,U,X,G){let P=z1(U,X,G);if(P in J.items)return J.items[P];return null}function X1(J,U){return J.tools[U]}function U6(J,U,X){if(j0(U))return J;if(!mZ(U,X))return J;if(_Z(X))J=T1(J,U.id,X.type);else{if(X.type===W.items.battery)U.energyMax+=X.energy;if(J._energyQueue.push({entityId:U.id,energyDelta:X.energy}),U.id.startsWith("player"))J=L0(J,`Picked up ${X.type.name}.`)}return U.gold+=X.gold,U.matter+=X.matter,u1(J,X.id),J}function T1(J,U,X){let G={type:X};if(J.tools[U]=G,U.startsWith("player"))J=L0(J,`Equipped ${X.name}.`);return J}function _Z(J){return J.type.energyCost<0}function mZ(J,U){return J.gold+U.gold>=0&&J.matter+U.matter>=0}/*!
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
 */var yZ=function(J){var U={};function X(G){if(U[G])return U[G].exports;var P=U[G]={i:G,l:!1,exports:{}};return J[G].call(P.exports,P,P.exports,X),P.l=!0,P.exports}return X.m=J,X.c=U,X.d=function(G,P,M){X.o(G,P)||Object.defineProperty(G,P,{enumerable:!0,get:M})},X.r=function(G){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(G,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(G,"__esModule",{value:!0})},X.t=function(G,P){if(1&P&&(G=X(G)),8&P)return G;if(4&P&&typeof G=="object"&&G&&G.__esModule)return G;var M=Object.create(null);if(X.r(M),Object.defineProperty(M,"default",{enumerable:!0,value:G}),2&P&&typeof G!="string")for(var j in G)X.d(M,j,function(v){return G[v]}.bind(null,j));return M},X.n=function(G){var P=G&&G.__esModule?function(){return G.default}:function(){return G};return X.d(P,"a",P),P},X.o=function(G,P){return Object.prototype.hasOwnProperty.call(G,P)},X.p="/bin/",X(X.s=0)}([function(J,U,X){var G={},P=X(1),M=X(2),j=X(3);J.exports=G;var v=1;G.js=function(){var N,b,d,a=!1,i={},n={},g={},_={},m=!0,l={},p=[],q0=Number.MAX_VALUE,B0=!1;this.setAcceptableTiles=function(f){f instanceof Array?d=f:!isNaN(parseFloat(f))&&isFinite(f)&&(d=[f])},this.enableSync=function(){a=!0},this.disableSync=function(){a=!1},this.enableDiagonals=function(){B0=!0},this.disableDiagonals=function(){B0=!1},this.setGrid=function(f){N=f;for(var S=0;S<N.length;S++)for(var C=0;C<N[0].length;C++)n[N[S][C]]||(n[N[S][C]]=1)},this.setTileCost=function(f,S){n[f]=S},this.setAdditionalPointCost=function(f,S,C){g[S]===void 0&&(g[S]={}),g[S][f]=C},this.removeAdditionalPointCost=function(f,S){g[S]!==void 0&&delete g[S][f]},this.removeAllAdditionalPointCosts=function(){g={}},this.setDirectionalCondition=function(f,S,C){_[S]===void 0&&(_[S]={}),_[S][f]=C},this.removeAllDirectionalConditions=function(){_={}},this.setIterationsPerCalculation=function(f){q0=f},this.avoidAdditionalPoint=function(f,S){i[S]===void 0&&(i[S]={}),i[S][f]=1},this.stopAvoidingAdditionalPoint=function(f,S){i[S]!==void 0&&delete i[S][f]},this.enableCornerCutting=function(){m=!0},this.disableCornerCutting=function(){m=!1},this.stopAvoidingAllAdditionalPoints=function(){i={}},this.findPath=function(f,S,C,s,J0){var V0=function(N0){a?J0(N0):setTimeout(function(){J0(N0)})};if(d===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(N===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(f<0||S<0||C<0||s<0||f>N[0].length-1||S>N.length-1||C>N[0].length-1||s>N.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(f!==C||S!==s){for(var P0=N[s][C],$0=!1,E0=0;E0<d.length;E0++)if(P0===d[E0]){$0=!0;break}if($0!==!1){var Y0=new P;Y0.openList=new j(function(N0,_0){return N0.bestGuessDistance()-_0.bestGuessDistance()}),Y0.isDoneCalculating=!1,Y0.nodeHash={},Y0.startX=f,Y0.startY=S,Y0.endX=C,Y0.endY=s,Y0.callback=V0,Y0.openList.push(Z0(Y0,Y0.startX,Y0.startY,null,1));var l0=v++;return l[l0]=Y0,p.push(l0),l0}V0(null)}else V0([])},this.cancelPath=function(f){return f in l&&(delete l[f],!0)},this.calculate=function(){if(p.length!==0&&N!==void 0&&d!==void 0)for(b=0;b<q0;b++){if(p.length===0)return;a&&(b=0);var f=p[0],S=l[f];if(S!==void 0)if(S.openList.size()!==0){var C=S.openList.pop();if(S.endX!==C.x||S.endY!==C.y)C.list=0,C.y>0&&A(S,C,0,-1,1*x(C.x,C.y-1)),C.x<N[0].length-1&&A(S,C,1,0,1*x(C.x+1,C.y)),C.y<N.length-1&&A(S,C,0,1,1*x(C.x,C.y+1)),C.x>0&&A(S,C,-1,0,1*x(C.x-1,C.y)),B0&&(C.x>0&&C.y>0&&(m||k(N,d,C.x,C.y-1,C)&&k(N,d,C.x-1,C.y,C))&&A(S,C,-1,-1,1.4*x(C.x-1,C.y-1)),C.x<N[0].length-1&&C.y<N.length-1&&(m||k(N,d,C.x,C.y+1,C)&&k(N,d,C.x+1,C.y,C))&&A(S,C,1,1,1.4*x(C.x+1,C.y+1)),C.x<N[0].length-1&&C.y>0&&(m||k(N,d,C.x,C.y-1,C)&&k(N,d,C.x+1,C.y,C))&&A(S,C,1,-1,1.4*x(C.x+1,C.y-1)),C.x>0&&C.y<N.length-1&&(m||k(N,d,C.x,C.y+1,C)&&k(N,d,C.x-1,C.y,C))&&A(S,C,-1,1,1.4*x(C.x-1,C.y+1)));else{var s=[];s.push({x:C.x,y:C.y});for(var J0=C.parent;J0!=null;)s.push({x:J0.x,y:J0.y}),J0=J0.parent;s.reverse();var V0=s;S.callback(V0),delete l[f],p.shift()}}else S.callback(null),delete l[f],p.shift();else p.shift()}};var A=function(f,S,C,s,J0){var V0=S.x+C,P0=S.y+s;if((i[P0]===void 0||i[P0][V0]===void 0)&&k(N,d,V0,P0,S)){var $0=Z0(f,V0,P0,S,J0);$0.list===void 0?($0.list=1,f.openList.push($0)):S.costSoFar+J0<$0.costSoFar&&($0.costSoFar=S.costSoFar+J0,$0.parent=S,f.openList.updateItem($0))}},k=function(f,S,C,s,J0){var V0=_[s]&&_[s][C];if(V0){var P0=T(J0.x-C,J0.y-s);if(!function(){for(var E0=0;E0<V0.length;E0++)if(V0[E0]===P0)return!0;return!1}())return!1}for(var $0=0;$0<S.length;$0++)if(f[s][C]===S[$0])return!0;return!1},T=function(f,S){if(f===0&&S===-1)return G.TOP;if(f===1&&S===-1)return G.TOP_RIGHT;if(f===1&&S===0)return G.RIGHT;if(f===1&&S===1)return G.BOTTOM_RIGHT;if(f===0&&S===1)return G.BOTTOM;if(f===-1&&S===1)return G.BOTTOM_LEFT;if(f===-1&&S===0)return G.LEFT;if(f===-1&&S===-1)return G.TOP_LEFT;throw new Error("These differences are not valid: "+f+", "+S)},x=function(f,S){return g[S]&&g[S][f]||n[N[S][f]]},Z0=function(f,S,C,s,J0){if(f.nodeHash[C]!==void 0){if(f.nodeHash[C][S]!==void 0)return f.nodeHash[C][S]}else f.nodeHash[C]={};var V0=e(S,C,f.endX,f.endY);if(s!==null)var P0=s.costSoFar+J0;else P0=0;var $0=new M(s,S,C,P0,V0);return f.nodeHash[C][S]=$0,$0},e=function(f,S,C,s){var J0,V0;return B0?(J0=Math.abs(f-C))<(V0=Math.abs(S-s))?1.4*J0+V0:1.4*V0+J0:(J0=Math.abs(f-C))+(V0=Math.abs(S-s))}},G.TOP="TOP",G.TOP_RIGHT="TOP_RIGHT",G.RIGHT="RIGHT",G.BOTTOM_RIGHT="BOTTOM_RIGHT",G.BOTTOM="BOTTOM",G.BOTTOM_LEFT="BOTTOM_LEFT",G.LEFT="LEFT",G.TOP_LEFT="TOP_LEFT"},function(J,U){J.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(J,U){J.exports=function(X,G,P,M,j){this.parent=X,this.x=G,this.y=P,this.costSoFar=M,this.simpleDistanceToTarget=j,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(J,U,X){J.exports=X(4)},function(J,U,X){var G,P,M;(function(){var j,v,N,b,d,a,i,n,g,_,m,l,p,q0,B0;N=Math.floor,_=Math.min,v=function(A,k){return A<k?-1:A>k?1:0},g=function(A,k,T,x,Z0){var e;if(T==null&&(T=0),Z0==null&&(Z0=v),T<0)throw new Error("lo must be non-negative");for(x==null&&(x=A.length);T<x;)Z0(k,A[e=N((T+x)/2)])<0?x=e:T=e+1;return[].splice.apply(A,[T,T-T].concat(k)),k},a=function(A,k,T){return T==null&&(T=v),A.push(k),q0(A,0,A.length-1,T)},d=function(A,k){var T,x;return k==null&&(k=v),T=A.pop(),A.length?(x=A[0],A[0]=T,B0(A,0,k)):x=T,x},n=function(A,k,T){var x;return T==null&&(T=v),x=A[0],A[0]=k,B0(A,0,T),x},i=function(A,k,T){var x;return T==null&&(T=v),A.length&&T(A[0],k)<0&&(k=(x=[A[0],k])[0],A[0]=x[1],B0(A,0,T)),k},b=function(A,k){var T,x,Z0,e,f,S;for(k==null&&(k=v),f=[],x=0,Z0=(e=function(){S=[];for(var C=0,s=N(A.length/2);0<=s?C<s:C>s;0<=s?C++:C--)S.push(C);return S}.apply(this).reverse()).length;x<Z0;x++)T=e[x],f.push(B0(A,T,k));return f},p=function(A,k,T){var x;if(T==null&&(T=v),(x=A.indexOf(k))!==-1)return q0(A,0,x,T),B0(A,x,T)},m=function(A,k,T){var x,Z0,e,f,S;if(T==null&&(T=v),!(Z0=A.slice(0,k)).length)return Z0;for(b(Z0,T),e=0,f=(S=A.slice(k)).length;e<f;e++)x=S[e],i(Z0,x,T);return Z0.sort(T).reverse()},l=function(A,k,T){var x,Z0,e,f,S,C,s,J0,V0;if(T==null&&(T=v),10*k<=A.length){if(!(e=A.slice(0,k).sort(T)).length)return e;for(Z0=e[e.length-1],f=0,C=(s=A.slice(k)).length;f<C;f++)T(x=s[f],Z0)<0&&(g(e,x,0,null,T),e.pop(),Z0=e[e.length-1]);return e}for(b(A,T),V0=[],S=0,J0=_(k,A.length);0<=J0?S<J0:S>J0;0<=J0?++S:--S)V0.push(d(A,T));return V0},q0=function(A,k,T,x){var Z0,e,f;for(x==null&&(x=v),Z0=A[T];T>k&&x(Z0,e=A[f=T-1>>1])<0;)A[T]=e,T=f;return A[T]=Z0},B0=function(A,k,T){var x,Z0,e,f,S;for(T==null&&(T=v),Z0=A.length,S=k,e=A[k],x=2*k+1;x<Z0;)(f=x+1)<Z0&&!(T(A[x],A[f])<0)&&(x=f),A[k]=A[x],x=2*(k=x)+1;return A[k]=e,q0(A,S,k,T)},j=function(){function A(k){this.cmp=k!=null?k:v,this.nodes=[]}return A.push=a,A.pop=d,A.replace=n,A.pushpop=i,A.heapify=b,A.updateItem=p,A.nlargest=m,A.nsmallest=l,A.prototype.push=function(k){return a(this.nodes,k,this.cmp)},A.prototype.pop=function(){return d(this.nodes,this.cmp)},A.prototype.peek=function(){return this.nodes[0]},A.prototype.contains=function(k){return this.nodes.indexOf(k)!==-1},A.prototype.replace=function(k){return n(this.nodes,k,this.cmp)},A.prototype.pushpop=function(k){return i(this.nodes,k,this.cmp)},A.prototype.heapify=function(){return b(this.nodes,this.cmp)},A.prototype.updateItem=function(k){return p(this.nodes,k,this.cmp)},A.prototype.clear=function(){return this.nodes=[]},A.prototype.empty=function(){return this.nodes.length===0},A.prototype.size=function(){return this.nodes.length},A.prototype.clone=function(){var k;return(k=new A).nodes=this.nodes.slice(0),k},A.prototype.toArray=function(){return this.nodes.slice(0)},A.prototype.insert=A.prototype.push,A.prototype.top=A.prototype.peek,A.prototype.front=A.prototype.peek,A.prototype.has=A.prototype.contains,A.prototype.copy=A.prototype.clone,A}(),P=[],(M=typeof(G=function(){return j})=="function"?G.apply(U,P):G)===void 0||(J.exports=M)}).call(this)}]);function q6(J,U,X,G,P){let M=new yZ.js;M.setGrid(J),M.setAcceptableTiles([0]),M.enableSync();let j=null;return M.findPath(U,X,G,P,function(v){j=v}),M.calculate(),j}function D0(){return"player"}function z6(J,U,X,G){return Math.abs(J-X)+Math.abs(U-G)}function G1(J){return[...Array(J).keys()]}function $6(J){let U=pZ(J),X=J.entities[D0()];for(let G=0;G<U.length;G++){let P=U[G],M=J.entities[P],j=J._AIs[P],v=z6(X.x,X.y,M.x,M.y);if(X.options.faction!==M.options.faction&&v<=j.aggroRange){let N=J.maps[J.currentMapId].asMovementMap(),b=q6(N,M.x,M.y,X.x,X.y);if(b){if(b=b.slice(1),b.length>v)b=null}j.path=b}if(!!M.message&&M.message.includes("OBEY"));}for(let G=0;G<U.length;G++){let P=U[G],M=J.entities[P],j=J._AIs[P];if(j.path){let v=j.path[0],N=v.x-M.x,b=v.y-M.y;J=W0(J,M,N,b)}}return J}function pZ(J){let U=k0(J,J.currentMapId),X=[];for(let G=0;G<U.length;G++){let P=U[G];if(P.options.ai)X.push(P.id)}return X}function X6(J,U,X){let G=J.entities[U],P=8;switch(X){case W.ais.aggrorange:P=8;break;case W.ais.aggrorangeshort:P=2;break;case W.ais.guardian:P=1;break;case W.ais.interactenrage:P=2;break;default:}return J._AIs[U]={entityId:U,type:X,aggroRange:P,startMap:G.mapId,startX:G.x,startY:G.y,path:null},J}function B1(J,U){return J._AIs[U]=void 0,delete J._AIs[U],J}function B6(J){let U=void 0;while(typeof(U=J._despawnQueue.shift())!=="undefined")J=K1(J,U),J=B1(J,U);return J}function Y6(J){return J}class p0{mapId;x;y;entityOrItemName;options;constructor(J,U,X,G,P={}){this.mapId=J,this.x=U,this.y=X,this.entityOrItemName=G,this.options=P}generateId(){return this.mapId+","+this.entityOrItemName+","+this.x+","+this.y+"/g"}}function e0(J,U){if(cZ(U.entityOrItemName)){let X=U.options;if(Object.hasOwn(X,"ai"))X.ai=W.ais[X.ai];if(Object.hasOwn(X,"faction"))X.faction=W.factions[X.faction];let G=U.generateId();if(J=F0(J,G,W.entities[U.entityOrItemName],U.mapId,U.x,U.y,X),Object.hasOwn(X,"equip")&&G6(X.equip))J=T1(J,G,W.items[X.equip]);if(Object.hasOwn(X,"ai"))J=X6(J,G,X.ai)}else if(G6(U.entityOrItemName))J=u0(J,W.items[U.entityOrItemName],U.mapId,U.x,U.y);return J}function cZ(J){return Object.hasOwn(W.entities,J)}function G6(J){return Object.hasOwn(W.items,J)}var Y1={width:16,height:16},g1=Y1;function T0(J,U={}){return{type:J,options:U}}function L6(J){return J.type.name.startsWith("space")}function w6(J){for(let U in W.maps){let X=c0(W.maps[U]);J.maps[U]=X;for(let G of X._spawnCommands)J=e0(J,G);X._spawnCommands=[]}return J}function H6(J,U){let X=$1(J,U);for(let P=0;P<X.length;P++){let M=X[P];J=u1(J,M.id)}let G=k0(J,U);for(let P=0;P<G.length;P++){let M=G[P];J=K1(J,M.id),J=B1(J,M.id)}return J.maps[U]=void 0,delete J.maps[U],J}class g0{id;widthTiles;heightTiles;seed;_tiles;_cacheMovementMap;_spawnCommands;_tvCount;tvMessage;constructor(J,U,X,G=[]){this.id=J,this.widthTiles=U,this.heightTiles=X,this.seed=null,this._tiles=G,this._cacheMovementMap=null,this._spawnCommands=[],this._tvCount=0,this.tvMessage=null}getTile(J,U){if(J>=0&&J<this.widthTiles&&U>=0&&U<this.heightTiles){let X=U*this.widthTiles+J;return this._tiles[X]}return{}}setTile(J,U,X,G={}){this._cacheMovementMap=null;let P=U*this.widthTiles+J,M=this._tiles[P];return this._tiles[P]=T0(X,G),M}setTvMessage(J){if(this._tvCount){let U=0;for(let X of this._tiles)if(X.type===W.tiles.tv&&U<J.length)X.options.sign=J[U],U++;if(J==="")J=null;this.tvMessage=J}}pasteOnto(J,U=0,X=0){for(let G=0;G<J.heightTiles;G++)for(let P=0;P<J.widthTiles;P++){let M=J.getTile(P,G);if(M.type!==W.tiles.voidtrue)this.setTile(P+U,G+X,M.type,M.options)}return this}circular(){let J=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let U=-J;U<=J;U++)for(let X=-J;X<=J;X++)if(X*X+U*U>=J*J)this.setTile(X+J-1,U+J-1,W.tiles.voidtrue);return this}sample(J,U){let X=Math.floor(this.widthTiles/J),G=Math.floor(this.heightTiles/U),P=[];for(let M=0;M<U;M++)for(let j=0;j<J;j++){let v={};for(let n=0;n<G;n++)for(let g=0;g<X;g++){let _=this.getTile(j*X+g,M*G+n);if(v[_.type.name])v[_.type.name]+=1;else v[_.type.name]=1}let N="",b=0;for(let[n,g]of Object.entries(v))if(g>b)N=n,b=g;let d="space"+N,a=W.tiles[d]||W.tiles.spacevoid,i={mapId:this.id,x:j*X,y:M*G};P.push(T0(a,i))}return new g0("__sampled_"+J+"_"+U+"_"+this.id,J,U,P)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let J=new Array(this.heightTiles);for(let U=0;U<this.heightTiles;U++){J[U]=new Array(this.widthTiles);for(let X=0;X<this.widthTiles;X++){let G=U*this.widthTiles+X,M=this._tiles[G].type;if(J[U][X]=0,M===W.tiles.rock||M===W.tiles.portalclosed||M===W.tiles.portalsewers||M===W.tiles.tv||M.name.startsWith("wall"))J[U][X]=1}}return this._cacheMovementMap=J,J}}function c0(J){let U=J.split(/\r?\n/),X=J[0],G="",P=0,M=0,j={},v=[],N=[],b=0,d="";for(let i=0;i<U.length;i++){let n=U[i];if(n.startsWith(X)){if(n.startsWith(X+"!id"))G=n.slice(5);else if(n.startsWith(X+"!size")){let g=n.split(" ").slice(1);P=Number(g[0]),M=Number(g[1])}else if(n.startsWith(X+"!spawn")){let g=n.split(" ").slice(1),_={};if(g.length>3){let m=g.slice(3);for(let l of m){let p=l.split("=");_[p[0]]=p[1]}}v.push(new p0(G,Number(g[0]),Number(g[1]),g[2],_))}else if(n.startsWith(X+"!")){let g=n[2],_=n.slice(4);j[g]=_}}else for(let g=0;g<n.length;g++){let _=n[g],m=j[_];if(o.debug&&!m)console.log("DEBUG Broken map: "+G);let l=m.split(" "),p={};if(m.startsWith("portal ")||m.startsWith("portalhidden ")||m.startsWith("portalsewers ")||m.startsWith("portallauncher ")||m.startsWith("portalstart"))m=l[0],p.mapId=l[1],p.x=Number(l[2]),p.y=Number(l[3]);if(m.startsWith("wall ")&&l.length>=2)m="wall",p.sign=l[1];if(m.startsWith("terminal ")){if(m="terminal",l.length>=2)p.screen=l[1]}if(m.startsWith("tv ")&&l.length>=2){if(m="tv",l.length===3)d=l[2];b++}N.push(T0(W.tiles[m],p))}}if(o.debug&&!(b===0||b===12))console.log("DEBUG Broken map: "+G+" (invalid TV size "+b+", allowed are 0 or 12 characters per map)");let a=new g0(G,P,M,N);return a._tvCount=b,a.setTvMessage(d),a._spawnCommands=v,a}function D6(J,U,X){switch(X){case W.commands.N:J=W0(J,U,0,-1);break;case W.commands.W:J=W0(J,U,-1,0);break;case W.commands.S:J=W0(J,U,0,1);break;case W.commands.E:J=W0(J,U,1,0);break;case W.commands.A:J=P6(J,U,W.commands.A);break;case W.commands.B:J=P6(J,U,W.commands.B);break;default:}return J}function W0(J,U,X,G,P=0){let M=J.maps[U.mapId],j=J6(J,M.id,U.x+X,U.y+G),v=J.tools[U.id];if(U.message=M.tvMessage,j)if(j0(j)){if(!j0(U)&&P<1)J=W0(J,j,X,G,P++),J=W0(J,U,X,G,P++)}else J=Q6(J,U,j);else if(lZ(M,U,X,G))J=F6(J,M,U,X,G),J._energyQueue.push({entityId:U.id,energyDelta:-1*P});else if(nZ(M,U,v,X,G)){if(M.setTile(U.x+X,U.y+G,W.tiles.void).type===W.tiles.rock){let b=J.rng.getPercentage();if(b<=1)J=u0(J,W.items.matter,M.id,U.x+X,U.y+G);else if(b<=34)J=u0(J,W.items.junk,M.id,U.x+X,U.y+G)}J._energyQueue.push({entityId:U.id,energyDelta:v.type.energyCost})}else if(rZ(M,U,v,X,G))J=F6(J,M,U,X,G),J._energyQueue.push({entityId:U.id,energyDelta:v.type.energyCost});return J}function P6(J,U,X){let P=q1(J,U)[X.key],j=J.maps[U.mapId].getTile(U.x,U.y);switch(P){case W.actions.Enter:J=W6(J,U,j);break;case W.actions.Launch:J=dZ(J,U,j);case W.actions.Wait:break;default:}return J}function F6(J,U,X,G,P){X.x+=G,X.y+=P;let M=K6(J,X.mapId,X.x,X.y);if(M)J=U6(J,X,M);let j=U.getTile(X.x,X.y);if(j.type.name.startsWith("portal"))J=W6(J,X,j);if(j.type===W.tiles.terminal)U.setTvMessage("OBEYWORKKILL");if(j.type.name.startsWith("move"))switch(j.type.name){case"movenorth":J=W0(J,X,0,-1);break;case"moveeast":J=W0(J,X,1,0);break;case"movesouth":J=W0(J,X,0,1);break;case"movewest":J=W0(J,X,-1,0);break;default:}return J}function W6(J,U,X){if(U.id.startsWith("player"))J.currentMapId=X.options.mapId;if(L6(X))J.lastSpacePositionByEntity[U.id]={mapId:U.mapId,x:U.x,y:U.y};else J.lastSpacePositionByEntity[U.id]=void 0,delete J.lastSpacePositionByEntity[U.id];let G={entityId:U.id,oldMapId:U.mapId,oldX:U.x,oldY:U.y,oldTileType:X.type,newMapId:X.options.mapId,newX:X.options.x,newY:X.options.y};return U.mapId=X.options.mapId,U.x=X.options.x,U.y=X.options.y,J=b1(J,"entitymap.updated.event",G),J}function dZ(J,U,X){if(J.lastSpacePositionByEntity[U.id]){if(U.id.startsWith("player"))J.currentMapId=J.lastSpacePositionByEntity[U.id].mapId;let G={entityId:U.id,oldMapId:U.mapId,oldX:U.x,oldY:U.y,oldTileType:X.type,newMapId:J.lastSpacePositionByEntity[U.id].mapId,newX:J.lastSpacePositionByEntity[U.id].x,newY:J.lastSpacePositionByEntity[U.id].y};U.mapId=G.newMapId,U.x=G.newX,U.y=G.newY,J._energyQueue.push({entityId:U.id,energyDelta:W.actions.Launch.energyDelta}),J.lastSpacePositionByEntity[U.id]=void 0,delete J.lastSpacePositionByEntity[U.id],J=b1(J,"entitymap.updated.event",G)}return J}function R6(J){for(let U in J.entities){let X=J.entities[U],G=J.tools[U],M=J.maps[X.mapId].getTile(X.x,X.y),j=M.type.energyDelta;if(M.type===W.tiles.chargepad&&G?.type.effects.includes(W.effects.Recharger.name))j*=2;else if((M.type===W.tiles.water||M.type===W.tiles.watersewage)&&G?.type.effects.includes(W.effects.WaterShield.name))j/=2;if(j!==0)J._energyQueue.push({entityId:U,energyDelta:j})}return J}function M6(J,U){let X=J.entities[U.entityId];switch(U.oldTileType){case W.tiles.portalstartaerobot:J=U1(J,X,W.entities.AeroBot),J=L0(J,`Booting up as an ${W.entities.AeroBot.name}...`);break;case W.tiles.portalstartworkbot:J=U1(J,X,W.entities.WorkBot),J=L0(J,`Booting up as a ${W.entities.WorkBot.name}...`);break;default:}return J}function lZ(J,U,X,G){let P=U.x+X,M=U.y+G,j=J.getTile(P,M).type;return P>=0&&P<J.widthTiles&&M>=0&&M<J.heightTiles&&!(j===W.tiles.rock||j===W.tiles.portalclosed||j===W.tiles.portalsewers||j===W.tiles.tv||j.name.startsWith("wall"))}function nZ(J,U,X,G,P){let M=U.x+G,j=U.y+P,v=J.getTile(M,j).type;if(X)return X.type.effects.includes(W.effects.WallCrusher.name)&&v===W.tiles.wallweak||X.type.effects.includes(W.effects.RockCrusher.name)&&v===W.tiles.rock;return!1}function rZ(J,U,X,G,P){let M=U.x+G,j=U.y+P,v=J.getTile(M,j).type;if(X)return X.type.effects.includes(W.effects.Screwing.name)&&v===W.tiles.portalsewers;return!1}var E6=v1(w1(),1);class v0{seed;_rotRng;constructor(J=1337){this.seed=J,this._rotRng=E6.RNG.clone(),this._rotRng.setSeed(J)}getPercentage(){return this._rotRng.getPercentage()}getItem(J){return this._rotRng.getItem(J)}}function C6(J,U){if(U.seed===1337)J=F0(J,"batteryvalkyrie0",W.entities.Valkyrie,U.id,130,127,{faction:W.factions.Spirits}),J=F0(J,"batteryvalkyrie1",W.entities.Valkyrie,U.id,124,127,{faction:W.factions.Spirits}),J=u0(J,W.items.trident,U.id,127,130);else{let X=new v0(U.seed);for(let G=0;G<U.heightTiles;G++)for(let P=0;P<U.widthTiles;P++){let M=U.getTile(P,G);if(X.getPercentage()<=1&&(M.type===W.tiles.void||M.type===W.tiles.tree)){let j=X.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(j){case"Deviant":case"Pioneer":J=e0(J,new p0(U.id,P,G,j,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":J=e0(J,new p0(U.id,P,G,j));break}}}}return J}var H1=v1(w1(),1);var aZ=1337,A6=55;function N6(J,U=aZ){H1.RNG.setSeed(U);let X=new H1.Noise.Simplex,G=Y1.width*g1.width,P=Y1.height*g1.height,M=[];for(let N=0;N<P;N++)for(let b=0;b<G;b++){let d=X.get(b/A6,N/A6),a;if(d<=-0.5)a=W.tiles.water;else if(d<=0)a=W.tiles.void;else if(d<0.5)a=W.tiles.tree;else a=W.tiles.rock;M.push(T0(a))}let j="simplex="+U,v=new g0(j,G,P,M);return v.seed=U,J.maps[j]=v,J}var iZ=1337;function I6(J,U=iZ){let X=S6(1024,1024,W.tiles.void);X.id="solarsystem="+U,J.maps[X.id]=X;let G=new v0(U),P=new v0(U),M=G.getItem([2,3,4,5,6,7,8,9,10,11,12]),j=128,v=512-j,N=Math.floor(v/M);X=eZ(X,G);let b=S6(128,128,W.tiles.voidtrue);tZ(b,63,63,62,W.tiles.sun),ZJ(b,63,63,W.tiles.sun),X.pasteOnto(b,448,448);for(let i=j;i<512;i+=N){let n=G.getItem([-1,1])*G.getItem(G1(i)),g=G.getItem([-1,1])*Math.floor(Math.sqrt(i*i-n*n));n+=512,g+=512;let _=G.getItem([16,24,32]),m=Math.floor(_/2)-1;J=N6(J,U);let l=J.maps["simplex="+U],p=W.map_snippets.launcher;p=p.replace("!!O portallauncher space 0 0",`!!O portallauncher ${X.id} ${n} ${g}`);let q0=c0(p),B0=P.getItem(G1(l.widthTiles-q0.widthTiles)),A=P.getItem(G1(l.heightTiles-q0.heightTiles));l.pasteOnto(q0,B0,A),J=C6(J,l);let k=l.sample(_,_).circular();X.pasteOnto(k,n-(m+1),g-(m+1)),U++}let d=W.map_snippets.space_bot_station;d=d.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let a=c0(d);return X.pasteOnto(a,583,398),J}function S6(J,U,X){let G=[];for(let j=0;j<J*U;j++)G.push(T0(X));return new g0("__temp",J,U,G)}function eZ(J,U){for(let X=0;X<J.heightTiles;X++)for(let G=0;G<J.widthTiles;G++)if(U.getPercentage()<=1)J.setTile(G,X,U.getItem([W.tiles.spacevoidstarwhite,W.tiles.spacevoidstaryellow]));return J}function tZ(J,U,X,G,P){let M=1-G,j=1,v=-2*G,N=0,b=G;J.setTile(U,X+G,P),J.setTile(U,X-G,P),J.setTile(U+G,X,P),J.setTile(U-G,X,P);while(N<b){if(M>=0)b-=1,v+=2,M+=v;N+=1,j+=2,M+=j,J.setTile(U+N,X+b,P),J.setTile(U-N,X+b,P),J.setTile(U+N,X-b,P),J.setTile(U-N,X-b,P),J.setTile(U+b,X+N,P),J.setTile(U-b,X+N,P),J.setTile(U+b,X-N,P),J.setTile(U-b,X-N,P)}return J}function ZJ(J,U,X,G){let{widthTiles:P,heightTiles:M}=J,j=[];j.push({x:U,y:X});let v=void 0;while(typeof(v=j.shift())!=="undefined"){let N=v,b=v;if(v.x+1<P)b={x:v.x+1,y:v.y};while(J.getTile(N.x,N.y).type!==G){if(J.setTile(N.x,N.y,G),N.y+1<M){if(J.getTile(N.x,N.y+1).type!==G)j.push({x:N.x,y:N.y+1})}if(N.y-1>=0){if(J.getTile(N.x,N.y-1).type!==G)j.push({x:N.x,y:N.y-1})}if(N.x-1>=0)N.x-=1;else break}while(J.getTile(b.x,b.y).type!==G){if(J.setTile(b.x,b.y,G),b.y+1<M){if(J.getTile(b.x,b.y+1).type!==G)j.push({x:b.x,y:b.y+1})}if(b.y-1>=0){if(J.getTile(b.x,b.y-1).type!==G)j.push({x:b.x,y:b.y-1})}if(b.x+1<P)b.x+=1;else break}}return J}var JJ=`!
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
`;function v6(J,U){if(U?.oldMapId?.startsWith("shop_instance")){J=H6(J,U.oldMapId);let X=J.maps[U.newMapId],G=X.getTile(U.newX,U.newY);X.setTile(U.newX,U.newY,G.type,{mapId:"shop_instance",x:U.oldX,y:U.oldY})}if(U?.newMapId?.startsWith("shop_instance")){let X=c0(JJ);X.id+="_"+U.oldMapId+"_"+U.entityId,X.setTile(U.newX,U.newY,W.tiles.portal,{mapId:U.oldMapId,x:U.oldX,y:U.oldY}),J.maps[U.oldMapId].setTile(U.oldX,U.oldY,U.oldTileType,{mapId:X.id,x:U.newX,y:U.newY});let P=J.entities[U.entityId];if(P.id.startsWith("player"))J.currentMapId=X.id;if(P.mapId=X.id,P.x=U.newX,P.Y=U.newY,J.maps[X.id]=X,J=i0(J,W.items.hammer,X.id,4,4,0,-200),J=i0(J,W.items.pickaxe,X.id,4,6,0,-200),J=i0(J,W.items.battery,X.id,4,8,0,-200),J=i0(J,W.items.gold,X.id,4,10,0,-1e4),J=F0(J,X.id+"_shopkeeper",W.entities.AeroBot,X.id,6,2,{faction:P.options.faction,dialog:"shop_instance_shopkeeper",name:"Shopkeeper"}),U?.oldMapId.startsWith("bot_stadium"))J=F0(J,X.id+"_shopper",W.entities.WorkBot,X.id,1,12,{faction:P.options.faction,dialog:"shop_instance_workbot_shopper"});else if(U?.oldMapId.startsWith("bot_bar"))J=F0(J,X.id+"_shopper",W.entities.AeroBot,X.id,4,11,{faction:P.options.faction,dialog:"shop_instance_aerobot_shopper"})}return J}function f6(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!0,actionLog:[],chatLog:[],currentMapId:"",entities:{},items:{},lastSpacePositionByEntity:{},maps:{},rng:new v0,tools:{},tvs:{}}}function b6(J){let U=void 0;while(typeof(U=J._combatQueue.shift())!=="undefined"){let X=-1,G=-5,P=X1(J,U.entityId);if(P)X=P.type.energyCost,G=-1*Math.abs(P.type.damage);J._energyQueue.push({entityId:U.entityId,energyDelta:X}),J._energyQueue.push({entityId:U.otherEntityId,energyDelta:G});let M=J.entities[U.entityId],j=J.entities[U.otherEntityId],v=M?.options?.name?M.options.name:M.type.name,N=j?.options?.name?j.options.name:j.type.name;J=L0(J,`${v} did ${Math.abs(G)} damage to ${N} at cost of ${Math.abs(X)} energy.`)}return J}function k6(J){let U=void 0,X=new Set;while(typeof(U=J._energyQueue.shift())!=="undefined"){let G=J.entities[U.entityId];if(G.energy=Math.min(G.energy+U.energyDelta,G.energyMax),G.energy<=0)X.add(G.id)}for(let G of X){let P=J.entities[G];J._despawnQueue.push(G);let M=P?.options?.name?P.options.name:P.type.name;if(!j0(P)){let j=Math.max(1,Math.floor(P.energyMax/3));J=V6(J,j,P.mapId,P.x,P.y),J=L0(J,`${M} destroyed leaving behind Junk.`)}}return J}function u6(J){return J=$6(J),J=b6(J),J=R6(J),J=k6(J),J=B6(J),J=Y6(J),J}class P1{state;constructor(){}init(){return this.state=f6(),this.state=k1(this.state,"entitymap.updated.event",M6),this.state=k1(this.state,"entitymap.updated.event",v6),this.state=I6(this.state),this.state=w6(this.state),this.state.currentMapId="botmos_hull_selection",this.state=F0(this.state,D0(),W.entities.Spirit,this.state.currentMapId,9,5,{faction:W.factions.Spirits,name:"Player"}),this.state}update(J,U=!1){let X=this.state.entities[D0()];if(X){if(J){switch(J){case W.commands.M:this.state._menuOpen=!this.state._menuOpen;break;case W.commands["#"]:this.state=L0(this.state,t1(this.state,D0()));break;default:this.state=D6(this.state,X,J),this.state=u6(this.state)}this.state.actionLog.push(J.key)}}else this.state=L0(this.state,`Game over! ${this.state.actionLog.length} turns.`),console.log(`Game over! ${this.state.actionLog.length} turns: ${this.state.actionLog.join("")}`),this.state.currentMapId="botmos_hull_selection",this.state=F0(this.state,D0(),W.entities.Spirit,this.state.currentMapId,9,5,{faction:W.factions.Spirits,name:"Player"});return this.state}play(J){for(let U=0;U<J.length;U++){let X=J[U];this.update(W.commands[X],!0)}return this.state}}var y={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1,slash:!1},x1=[],_1=void 0,T6=0;document.body.addEventListener("keydown",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":y.up=!0,U0(J);break;case"a":case"ArrowLeft":y.left=!0,U0(J);break;case"s":case"ArrowDown":y.down=!0,U0(J);break;case"d":case"ArrowRight":y.right=!0,U0(J);break;case"x":y.a=!0,U0(J);break;case" ":case"y":case"z":y.b=!0,U0(J);break;case"m":y.menu=!0,U0(J);break;case"#":case"/":y.slash=!0,U0(J);break;default:}A0(g6())});function A0(J){let U=Date.now();if(_1!==void 0&&U-T6>=80)T6=U,_1(J)}document.body.addEventListener("keyup",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":y.up=!1,U0(J);break;case"a":case"ArrowLeft":y.left=!1,U0(J);break;case"s":case"ArrowDown":y.down=!1,U0(J);break;case"d":case"ArrowRight":y.right=!1,U0(J);break;case"x":y.a=!1,U0(J);break;case" ":case"y":case"z":y.b=!1,U0(J);break;case"m":y.menu=!1,U0(J);break;case"#":case"/":y.slash=!1,U0(J);default:}});document.body.addEventListener("click",function(J){let{clientX:U,clientY:X}=J,P=document.body.clientWidth/3,j=document.body.clientHeight/3;if(U>=P&&U<2*P&&X<j)A0(W.commands.N),U0(J);else if(U<P&&X<j)A0(W.commands.B),U0(J);else if(U>=2*P&&X<j)A0(W.commands.A),U0(J);else if(U<P&&X>=j&&X<2*j)A0(W.commands.W),U0(J);else if(U>=2*P&&X>=j&&X<2*j)A0(W.commands.E),U0(J);else if(U>=P&&U<2*P&&X>=2*j)A0(W.commands.S),U0(J);else if(U>=P&&U<2*P&&X>=j&&X<2*j)A0(W.commands.M),U0(J)});function U0(J){J.preventDefault(),J.stopPropagation()}var t0=null;function QJ(){let J=null;if(y.right)J=W.commands.E;if(y.left)J=W.commands.W;if(y.down)J=W.commands.S;if(y.up)J=W.commands.N;if(y.up&&y.right){if(J===W.commands.N&&t0===W.commands.N)J=W.commands.E}if(y.up&&y.left){if(J===W.commands.N&&t0===W.commands.N)J=W.commands.W}if(y.down&&y.right){if(J===W.commands.S&&t0===W.commands.S)J=W.commands.E}if(y.down&&y.left){if(J===W.commands.S&&t0===W.commands.S)J=W.commands.W}if(y.a)J=W.commands.A;if(y.b)J=W.commands.B;if(y.menu)J=W.commands.M;if(y.slash)J=W.commands["#"];if(t0=J,J!==null)x1.push(J)}function g6(){QJ();let J=x1.shift()||null;return x1=[],J}var h6=void 0;window.addEventListener("gamepadconnected",(J)=>{h6=setInterval(function(){let U=navigator.getGamepads()[J.gamepad?.index];if(y.right=U.buttons[15].pressed,y.left=U.buttons[14].pressed,y.down=U.buttons[13].pressed,y.up=U.buttons[12].pressed,y.a=U.buttons[0].pressed||U.buttons[2].pressed,y.b=U.buttons[1].pressed||U.buttons[3].pressed,y.menu=U.buttons[9].pressed,y.right||y.left||y.down||y.up||y.a||y.b||y.menu)A0(g6())},100)});window.addEventListener("gamepaddisconnected",(J)=>{clearInterval(h6)});function x6(J){_1=J}var p6=v1(w1(),1);var F1={AeroBot:[0,0],battery:[16,0],broom:[32,0],chargepad:[48,0],chest:[64,0],Cleaner:[80,0],Deviant:[96,0],energy:[112,0],gold:[128,0],goo:[144,0],hammer:[160,0],junk:[176,0],matter:[192,0],movableboulder:[208,0],movablebox:[224,0],moveeast:[240,0],movenorth:[256,0],movesouth:[272,0],movewest:[288,0],pickaxe:[304,0],Pioneer:[320,0],portalclosed:[336,0],portalhidden:[352,0],portallauncher:[368,0],portal:[384,0],portalsewers:[400,0],portalstartaerobot:[416,0],"_portalstart?":[432,0],portalstartworkbot:[448,0],rock:[464,0],shocker:[480,0],spacerock:[496,0],spacetree:[512,0],spacevoid:[528,0],spacevoidstarwhite:[544,0],spacevoidstaryellow:[560,0],spacewater:[576,0],Spirit:[592,0],sun:[608,0],terminal:[624,0],tree:[640,0],trident:[656,0],tv:[672,0],Valkyrie:[688,0],voidhidden:[704,0],void:[720,0],voidtrue:[736,0],wall0:[752,0],wall1:[768,0],wall2:[784,0],walla_:[800,0],wallA:[816,0],wallb_:[832,0],wallB:[848,0],wallc_:[864,0],wallC:[880,0],walld_:[896,0],wallD:[912,0],walle_:[928,0],wallE:[944,0],wallf_:[960,0],wallF:[976,0],wallg_:[992,0],wallG:[1008,0],wallh_:[1024,0],wallH:[1040,0],walli_:[1056,0],wallI:[1072,0],wallj_:[1088,0],wallJ:[1104,0],wallk_:[1120,0],wallK:[1136,0],walll_:[1152,0],wallL:[1168,0],wallm_:[1184,0],wallM:[1200,0],walln_:[1216,0],wallN:[1232,0],wallo_:[1248,0],wallO:[1264,0],"wall(":[1280,0],"wall)":[1296,0],"wall+":[1312,0],"wall,":[1328,0],"wall.":[1344,0],wall:[1360,0],"wall:":[1376,0],wall_:[1392,0],"wall|":[1408,0],wallp_:[1424,0],wallP:[1440,0],wallq_:[1456,0],wallQ:[1472,0],wallr_:[1488,0],wallR:[1504,0],walls_:[1520,0],wallS:[1536,0],wallstatueaerobot:[1552,0],wallstatuecleaner:[1568,0],wallstatuepioneer:[1584,0],wallstatueworkbot:[1600,0],wallt_:[1616,0],wallT:[1632,0],wallu_:[1648,0],wallU:[1664,0],wallv_:[1680,0],wallV:[1696,0],wallweak:[1712,0],wallw_:[1728,0],wallW:[1744,0],wallx_:[1760,0],wallX:[1776,0],wally_:[1792,0],wallY:[1808,0],wallz_:[1824,0],wallZ:[1840,0],water:[1856,0],watersewage:[1872,0],WorkBot:[1888,0],wrench:[1904,0]};var d0=document.createElement("div");d0.id="ui";document.body.appendChild(d0);async function m6(J,U=0){if(!o.showUI)return;let X=D0(),G=J.entities[X],P=document.createElement("div"),M="",j=[];if(G){j.push(_6(G.type.name));let v="",N=X1(J,X);if(N)j.push(_6(N.type.name.toLowerCase()));let b="";if(G.matter>0)b=`${G.matter}M `;let d="";if(G.gold>0)d=`${G.gold}G `;let a=q1(J,G);if(M=" "+G.energy+"/"+G.energyMax+" "+v+d+b+"Y:"+a.B.name+" X:"+a.A.name,d0.style.flexDirection="column-reverse",G.y-U>=G0.height-3)d0.style.flexDirection="column";if(P.style.background="#000",G.energy/G.energyMax<=0.2)P.style.color="#000",P.style.background="#f00";else P.style.color="#74ee15",P.style.background="#000"}else M="Game over!",P.style.color="#000",P.style.background="#f00";if(j.push(VJ(M)),P.replaceChildren(...j),d0.replaceChildren(P),J._menuOpen&&!!J.chatLog.length){let v=J.chatLog.slice(-o.chatLogMaxDisplaySize),N=document.createElement("div");N.id="uichatlog",N.innerText=v.join(`
`),d0.appendChild(N)}}function _6(J){let U=document.createElement("span"),X=F1[J][0];return U.style.background=`url('build/tiles.png') -${X}px 0`,U.style.width=`${o.fontSize}px`,U.style.height=`${o.fontSize}px`,U.style.display="inline-block",U}function VJ(J){let U=document.createElement("span");return U.style.display="inline-block",U.style.marginLeft="8px",U.innerText=J,U}var c6=document.createElement("img");c6.src="build/tiles.png";G0.tileSet=c6;G0.tileMap=qJ();var m1=new p6.Display(G0);document.body.appendChild(m1.getContainer());function KJ(J,U){let X=J.currentMapId,G=J.maps[X],P=0,M=0;if(G.widthTiles<U.width)P=Math.floor((U.width-G.widthTiles)/2),U.x=0;if(G.heightTiles<U.height)M=Math.floor((U.height-G.heightTiles)/2),U.y=0;let j={},v={},N={};for(let g=0;g<U.height;g++)for(let _=0;_<U.width;_++){let m=G.getTile(U.x+_,U.y+g),l="";if(!!m&&!!m.type)if(m.options.sign)l="#"+m.options.sign;else l=m.type.icon;if(l){let p=[P+_,M+g].toString();j[p]=[l],v[p]=["transparent"],N[p]=["transparent"]}}let b=$1(J,X);for(let g=0;g<b.length;g++){let _=b[g],m=P+_.x-U.x,l=M+_.y-U.y,p=[m,l].toString();if(j[p])j[p].push(_.type.icon),v[p].push("transparent"),N[p].push("transparent");else j[p]=[_.type.icon],v[p]=["transparent"],N[p]=["transparent"]}let d=D0(),a=J.entities[d],i=((a||{}).options||{}).faction||void 0,n=k0(J,X);for(let g=0;g<n.length;g++){let _=n[g],m=P+_.x-U.x,l=M+_.y-U.y,p="transparent";if(o.highlightEnemy&&!!i&&!j0(_))p=i===_.options.faction?"rgba(116, 238, 21, 0.5)":"rgba(240, 0, 255, 0.5)";if(_===a)p="transparent";let q0=[m,l].toString();if(j[q0])j[q0].push(_.type.icon),v[q0].push(p),N[q0].push("transparent");else j[q0]=[_.type.icon],v[q0]=[p],N[q0]=["transparent"]}m1.clear();for(let[g,_]of Object.entries(j)){let m=g.split(",");m1.draw(Number(m[0]),Number(m[1]),_,v[g],N[g])}}var y6={x:0,y:0};async function x0(J){let U=J.entities[D0()],X=U?U:y6,G=UJ(X);KJ(J,G),m6(J,G.y),y6=X}async function d6(J){}function UJ(J){return{x:Math.min(Math.max(0,J.x-Math.floor(G0.width/2)),f1.WIDTH-G0.width),y:Math.min(Math.max(0,J.y-Math.floor(G0.height/2)),f1.HEIGHT-G0.height),width:G0.width,height:G0.height}}function qJ(){let J={};for(let[U,X]of Object.entries(F1))if(U.startsWith("wall")&&(U.length===5||U.length===6))J["#"+U.substring(4,5)]=X;else if(Object.hasOwn(W.tiles,U))J[W.tiles[U].icon]=X;else if(Object.hasOwn(W.entities,U))J[W.entities[U].icon]=X;else if(Object.hasOwn(W.items,U))J[W.items[U].icon]=X;return J}var R0=new P1;window.onload=function(){x0(R0.init())};window.onresize=function(){let J=typeof window!=="undefined"?window.innerWidth:0,U=typeof window!=="undefined"?window.innerHeight:0;o.cameraWidth=Math.floor(J/o.fontSize),o.cameraHeight=Math.floor(U/o.fontSize),G0.width=Math.floor(o.cameraWidth*(1/o.zoom)),G0.height=Math.floor(o.cameraHeight*(1/o.zoom)),d6(G0),x0(R0.state)};x6(function(J){x0(R0.update(J))});if(!window.BMActionLog)window.BMActionLog=function(){return R0.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(J){x0(R0.play(J))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){o.debug=!o.debug,x0(R0.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){o.showUI=!o.showUI,x0(R0.state)};if(o.debug){if(!window.BMDebugState)window.BMDebugState=function(){return R0.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let J=Object.keys(R0.state.maps).length,U=Object.keys(R0.state.entities).length,X=Object.keys(R0.state.items).length,G=Object.keys(R0.state.tools).length;return`Maps: ${J}, Entities: ${U}, Items: ${X}, Tools: ${G}`}}document.body.focus();
