var eZ=Object.create;var{getPrototypeOf:ZJ,defineProperty:B6,getOwnPropertyNames:JJ}=Object;var QJ=Object.prototype.hasOwnProperty;var y1=(J,q,$)=>{$=J!=null?eZ(ZJ(J)):{};let G=q||!J||!J.__esModule?B6($,"default",{value:J,enumerable:!0}):$;for(let P of JJ(J))if(!QJ.call(G,P))B6(G,P,{get:()=>J[P],enumerable:!0});return G};var VJ=(J,q)=>()=>(q||J((q={exports:{}}).exports,q),q.exports);var M1=VJ((R1,u6)=>{function c0(J){if(J===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return J}function HJ(J,q){var $=typeof Symbol!=="undefined"&&J[Symbol.iterator]||J["@@iterator"];if($)return($=$.call(J)).next.bind($);if(Array.isArray(J)||($=PJ(J))||q&&J&&typeof J.length==="number"){if($)J=$;var G=0;return function(){if(G>=J.length)return{done:!0};return{done:!1,value:J[G++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PJ(J,q){if(!J)return;if(typeof J==="string")return k6(J,q);var $=Object.prototype.toString.call(J).slice(8,-1);if($==="Object"&&J.constructor)$=J.constructor.name;if($==="Map"||$==="Set")return Array.from(J);if($==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($))return k6(J,q)}function k6(J,q){if(q==null||q>J.length)q=J.length;for(var $=0,G=new Array(q);$<q;$++)G[$]=J[$];return G}function q0(J,q){J.prototype=Object.create(q.prototype),J.prototype.constructor=J,i1(J,q)}function i1(J,q){return i1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function $(G,P){return G.__proto__=P,G},i1(J,q)}(function(J,q){typeof R1==="object"&&typeof u6!=="undefined"?q(R1):typeof define==="function"&&define.amd?define(["exports"],q):(J=typeof globalThis!=="undefined"?globalThis:J||self,q(J.ROT={}))})(R1,function(J){var q=0.00000000023283064365386963,$=function(){function Y(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var B=Y.prototype;return B.getSeed=function U(){return this._seed},B.setSeed=function U(K){return K=K<1?1/K:K,this._seed=K,this._s0=(K>>>0)*q,K=K*69069+1>>>0,this._s1=K*q,K=K*69069+1>>>0,this._s2=K*q,this._c=1,this},B.getUniform=function U(){var K=2091639*this._s0+this._c*q;return this._s0=this._s1,this._s1=this._s2,this._c=K|0,this._s2=K-this._c,this._s2},B.getUniformInt=function U(K,Z){var Q=Math.max(K,Z),V=Math.min(K,Z);return Math.floor(this.getUniform()*(Q-V+1))+V},B.getNormal=function U(K,Z){if(K===void 0)K=0;if(Z===void 0)Z=1;var Q,V,z;do Q=2*this.getUniform()-1,V=2*this.getUniform()-1,z=Q*Q+V*V;while(z>1||z==0);var X=Q*Math.sqrt(-2*Math.log(z)/z);return K+X*Z},B.getPercentage=function U(){return 1+Math.floor(this.getUniform()*100)},B.getItem=function U(K){if(!K.length)return null;return K[Math.floor(this.getUniform()*K.length)]},B.shuffle=function U(K){var Z=[],Q=K.slice();while(Q.length){var V=Q.indexOf(this.getItem(Q));Z.push(Q.splice(V,1)[0])}return Z},B.getWeightedValue=function U(K){var Z=0;for(var Q in K)Z+=K[Q];var V=this.getUniform()*Z,z,X=0;for(z in K)if(X+=K[z],V<X)return z;return z},B.getState=function U(){return[this._s0,this._s1,this._s2,this._c]},B.setState=function U(K){return this._s0=K[0],this._s1=K[1],this._s2=K[2],this._c=K[3],this},B.clone=function U(){var K=new Y;return K.setState(this.getState())},Y}(),G=new $().setSeed(Date.now()),P=function(){function Y(){}var B=Y.prototype;return B.getContainer=function U(){return null},B.setOptions=function U(K){this._options=K},Y}(),R=function(Y){q0(B,Y);function B(){var K=Y.call(this)||this;return K._ctx=document.createElement("canvas").getContext("2d"),K}var U=B.prototype;return U.schedule=function K(Z){requestAnimationFrame(Z)},U.getContainer=function K(){return this._ctx.canvas},U.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z);var Q=Z.fontStyle?Z.fontStyle+" ":"",V=Q+" "+Z.fontSize+"px "+Z.fontFamily;this._ctx.font=V,this._updateSize(),this._ctx.font=V,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},U.clear=function K(){var Z=this._ctx.globalCompositeOperation;this._ctx.globalCompositeOperation="copy",this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.globalCompositeOperation=Z},U.eventToPosition=function K(Z,Q){var V=this._ctx.canvas,z=V.getBoundingClientRect();if(Z-=z.left,Q-=z.top,Z*=V.width/z.width,Q*=V.height/z.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},B}(P);function C(Y,B){return(Y%B+B)%B}function v(Y,B,U){if(B===void 0)B=0;if(U===void 0)U=1;if(Y<B)return B;if(Y>U)return U;return Y}function N(Y){return Y.charAt(0).toUpperCase()+Y.substring(1)}function I(Y){for(var B=arguments.length,U=new Array(B>1?B-1:0),K=1;K<B;K++)U[K-1]=arguments[K];var Z=I.map,Q=function V(z,X,L,w){if(Y.charAt(w-1)=="%")return z.substring(1);if(!U.length)return z;var H=U[0],D=X||L,W=D.split(","),M=W.shift()||"",O=Z[M.toLowerCase()];if(!O)return z;H=U.shift();var j=H[O].apply(H,W),b=M.charAt(0);if(b!=b.toLowerCase())j=N(j);return j};return Y.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,Q)}I.map={s:"toString"};var m=Object.freeze({__proto__:null,mod:C,clamp:v,capitalize:N,format:I}),J0=function(Y){q0(B,Y);function B(){var K=Y.call(this)||this;return K._spacingX=0,K._spacingY=0,K._hexSize=0,K}var U=B.prototype;return U.draw=function K(Z,Q){var V=Z[0],z=Z[1],X=Z[2],L=Z[3],w=Z[4],H=[(V+1)*this._spacingX,z*this._spacingY+this._hexSize];if(this._options.transpose)H.reverse();if(Q)this._ctx.fillStyle=w,this._fill(H[0],H[1]);if(!X)return;this._ctx.fillStyle=L;var D=[].concat(X);for(var W=0;W<D.length;W++)this._ctx.fillText(D[W],H[0],Math.ceil(H[1]))},U.computeSize=function K(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=Math.floor(Z/this._spacingX)-1,z=Math.floor((Q-2*this._hexSize)/this._spacingY+1);return[V,z]},U.computeFontSize=function K(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=2*Z/((this._options.width+1)*Math.sqrt(3))-1,z=Q/(2+1.5*(this._options.height-1)),X=Math.min(V,z),L=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var w=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=L;var H=w/100;X=Math.floor(X)+1;var D=2*X/(this._options.spacing*(1+H/Math.sqrt(3)));return Math.ceil(D)-1},U._normalizedEventToPosition=function K(Z,Q){var V;if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q,V=this._ctx.canvas.width;else V=this._ctx.canvas.height;var z=V/this._options.height;if(Q=Math.floor(Q/z),C(Q,2))Z-=this._spacingX,Z=1+2*Math.floor(Z/(2*this._spacingX));else Z=2*Math.floor(Z/(2*this._spacingX));return[Z,Q]},U._fill=function K(Z,Q){var V=this._hexSize,z=this._options.border,X=this._ctx;if(X.beginPath(),this._options.transpose)X.moveTo(Z-V+z,Q),X.lineTo(Z-V/2+z,Q+this._spacingX-z),X.lineTo(Z+V/2-z,Q+this._spacingX-z),X.lineTo(Z+V-z,Q),X.lineTo(Z+V/2-z,Q-this._spacingX+z),X.lineTo(Z-V/2+z,Q-this._spacingX+z),X.lineTo(Z-V+z,Q);else X.moveTo(Z,Q-V+z),X.lineTo(Z+this._spacingX-z,Q-V/2+z),X.lineTo(Z+this._spacingX-z,Q+V/2-z),X.lineTo(Z,Q+V-z),X.lineTo(Z-this._spacingX+z,Q+V/2-z),X.lineTo(Z-this._spacingX+z,Q-V/2+z),X.lineTo(Z,Q-V+z);X.fill()},U._updateSize=function K(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(Z.spacing*(Z.fontSize+Q/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var V,z;if(Z.transpose)V="height",z="width";else V="width",z="height";this._ctx.canvas[V]=Math.ceil((Z.width+1)*this._spacingX),this._ctx.canvas[z]=Math.ceil((Z.height-1)*this._spacingY+2*this._hexSize)},B}(R),V0=function(Y){q0(B,Y);function B(){var K=Y.call(this)||this;return K._spacingX=0,K._spacingY=0,K._canvasCache={},K}var U=B.prototype;return U.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z),this._canvasCache={}},U.draw=function K(Z,Q){if(B.cache)this._drawWithCache(Z);else this._drawNoCache(Z,Q)},U._drawWithCache=function K(Z){var Q=Z[0],V=Z[1],z=Z[2],X=Z[3],L=Z[4],w=""+z+X+L,H;if(w in this._canvasCache)H=this._canvasCache[w];else{var D=this._options.border;H=document.createElement("canvas");var W=H.getContext("2d");if(H.width=this._spacingX,H.height=this._spacingY,W.fillStyle=L,W.fillRect(D,D,H.width-D,H.height-D),z){W.fillStyle=X,W.font=this._ctx.font,W.textAlign="center",W.textBaseline="middle";var M=[].concat(z);for(var O=0;O<M.length;O++)W.fillText(M[O],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[w]=H}this._ctx.drawImage(H,Q*this._spacingX,V*this._spacingY)},U._drawNoCache=function K(Z,Q){var V=Z[0],z=Z[1],X=Z[2],L=Z[3],w=Z[4];if(Q){var H=this._options.border;this._ctx.fillStyle=w,this._ctx.fillRect(V*this._spacingX+H,z*this._spacingY+H,this._spacingX-H,this._spacingY-H)}if(!X)return;this._ctx.fillStyle=L;var D=[].concat(X);for(var W=0;W<D.length;W++)this._ctx.fillText(D[W],(V+0.5)*this._spacingX,Math.ceil((z+0.5)*this._spacingY))},U.computeSize=function K(Z,Q){var V=Math.floor(Z/this._spacingX),z=Math.floor(Q/this._spacingY);return[V,z]},U.computeFontSize=function K(Z,Q){var V=Math.floor(Z/this._options.width),z=Math.floor(Q/this._options.height),X=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var L=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=X;var w=L/100,H=w*z/V;if(H>1)z=Math.floor(z/H);return Math.floor(z/this._options.spacing)},U._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._spacingX),Math.floor(Q/this._spacingY)]},U._updateSize=function K(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(Z.spacing*Q),this._spacingY=Math.ceil(Z.spacing*Z.fontSize),Z.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=Z.width*this._spacingX,this._ctx.canvas.height=Z.height*this._spacingY},B}(R);V0.cache=!1;var n=function(Y){q0(B,Y);function B(){var K=Y.call(this)||this;return K._colorCanvas=document.createElement("canvas"),K}var U=B.prototype;return U.draw=function K(Z,Q){var V=Z[0],z=Z[1],X=Z[2],L=Z[3],w=Z[4],H=this._options.tileWidth,D=this._options.tileHeight;if(Q)if(this._options.tileColorize)this._ctx.clearRect(V*H,z*D,H,D);else this._ctx.fillStyle=w,this._ctx.fillRect(V*H,z*D,H,D);if(!X)return;var W=[].concat(X),M=[].concat(L),O=[].concat(w);for(var j=0;j<W.length;j++){var b=this._options.tileMap[W[j]];if(!b)throw new Error('Char "'+W[j]+'" not found in tileMap');if(this._options.tileColorize){var g=this._colorCanvas,h=g.getContext("2d");h.globalCompositeOperation="source-over",h.clearRect(0,0,H,D);var d=M[j],i=O[j];if(h.drawImage(this._options.tileSet,b[0],b[1],H,D,0,0,H,D),d!="transparent")h.fillStyle=d,h.globalCompositeOperation="source-atop",h.fillRect(0,0,H,D);if(i!="transparent")h.fillStyle=i,h.globalCompositeOperation="destination-over",h.fillRect(0,0,H,D);this._ctx.drawImage(g,V*H,z*D,H,D)}else this._ctx.drawImage(this._options.tileSet,b[0],b[1],H,D,V*H,z*D,H,D)}},U.computeSize=function K(Z,Q){var V=Math.floor(Z/this._options.tileWidth),z=Math.floor(Q/this._options.tileHeight);return[V,z]},U.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},U._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},U._updateSize=function K(){var Z=this._options;this._ctx.canvas.width=Z.width*Z.tileWidth,this._ctx.canvas.height=Z.height*Z.tileHeight,this._colorCanvas.width=Z.tileWidth,this._colorCanvas.height=Z.tileHeight},B}(R);function c(Y){var B,U;if(Y in A)B=A[Y];else{if(Y.charAt(0)=="#"){var K=Y.match(/[0-9a-f]/gi)||[],Z=K.map(function(V){return parseInt(V,16)});if(Z.length==3)B=Z.map(function(V){return V*17});else{for(var Q=0;Q<3;Q++)Z[Q+1]+=16*Z[Q],Z.splice(Q,1);B=Z}}else if(U=Y.match(/rgb\(([0-9, ]+)\)/i))B=U[1].split(/\s*,\s*/).map(function(V){return parseInt(V)});else B=[0,0,0];A[Y]=B}return B.slice()}function Q0(Y){var B=Y.slice();for(var U=arguments.length,K=new Array(U>1?U-1:0),Z=1;Z<U;Z++)K[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++)for(var V=0;V<K.length;V++)B[Q]+=K[V][Q];return B}function x(Y){for(var B=arguments.length,U=new Array(B>1?B-1:0),K=1;K<B;K++)U[K-1]=arguments[K];for(var Z=0;Z<3;Z++)for(var Q=0;Q<U.length;Q++)Y[Z]+=U[Q][Z];return Y}function _(Y){var B=Y.slice();for(var U=arguments.length,K=new Array(U>1?U-1:0),Z=1;Z<U;Z++)K[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++){for(var V=0;V<K.length;V++)B[Q]*=K[V][Q]/255;B[Q]=Math.round(B[Q])}return B}function p(Y){for(var B=arguments.length,U=new Array(B>1?B-1:0),K=1;K<B;K++)U[K-1]=arguments[K];for(var Z=0;Z<3;Z++){for(var Q=0;Q<U.length;Q++)Y[Z]*=U[Q][Z]/255;Y[Z]=Math.round(Y[Z])}return Y}function U0(Y,B,U){if(U===void 0)U=0.5;var K=Y.slice();for(var Z=0;Z<3;Z++)K[Z]=Math.round(K[Z]+U*(B[Z]-Y[Z]));return K}var s=U0;function E(Y,B,U){if(U===void 0)U=0.5;var K=T(Y),Z=T(B);for(var Q=0;Q<3;Q++)K[Q]+=U*(Z[Q]-K[Q]);return a(K)}var k=E;function u(Y,B){if(!(B instanceof Array))B=Math.round(G.getNormal(0,B));var U=Y.slice();for(var K=0;K<3;K++)U[K]+=B instanceof Array?Math.round(G.getNormal(0,B[K])):B;return U}function T(Y){var B=Y[0]/255,U=Y[1]/255,K=Y[2]/255,Z=Math.max(B,U,K),Q=Math.min(B,U,K),V=0,z,X=(Z+Q)/2;if(Z==Q)z=0;else{var L=Z-Q;switch(z=X>0.5?L/(2-Z-Q):L/(Z+Q),Z){case B:V=(U-K)/L+(U<K?6:0);break;case U:V=(K-B)/L+2;break;case K:V=(B-U)/L+4;break}V/=6}return[V,z,X]}function t(Y,B,U){if(U<0)U+=1;if(U>1)U-=1;if(U<0.16666666666666666)return Y+(B-Y)*6*U;if(U<0.5)return B;if(U<0.6666666666666666)return Y+(B-Y)*(0.6666666666666666-U)*6;return Y}function a(Y){var B=Y[2];if(Y[1]==0)return B=Math.round(B*255),[B,B,B];else{var U=Y[1],K=B<0.5?B*(1+U):B+U-B*U,Z=2*B-K,Q=t(Z,K,Y[0]+0.3333333333333333),V=t(Z,K,Y[0]),z=t(Z,K,Y[0]-0.3333333333333333);return[Math.round(Q*255),Math.round(V*255),Math.round(z*255)]}}function f(Y){var B=Y.map(function(U){return v(U,0,255)});return"rgb("+B.join(",")+")"}function S(Y){var B=Y.map(function(U){return v(U,0,255).toString(16).padStart(2,"0")});return"#"+B.join("")}var A={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},o=Object.freeze({__proto__:null,fromString:c,add:Q0,add_:x,multiply:_,multiply_:p,interpolate:U0,lerp:s,interpolateHSL:E,lerpHSL:k,randomize:u,rgb2hsl:T,hsl2rgb:a,toRGB:f,toHex:S}),e=function(Y){q0(B,Y);function B(){var K=Y.call(this)||this;K._uniforms={};try{K._gl=K._initWebGL()}catch(Z){if(typeof Z==="string")alert(Z);else if(Z instanceof Error)alert(Z.message)}return K}B.isSupported=function K(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var U=B.prototype;return U.schedule=function K(Z){requestAnimationFrame(Z)},U.getContainer=function K(){return this._gl.canvas},U.setOptions=function K(Z){var Q=this;Y.prototype.setOptions.call(this,Z),this._updateSize();var V=this._options.tileSet;if(V&&"complete"in V&&!V.complete)V.addEventListener("load",function(){return Q._updateTexture(V)});else this._updateTexture(V)},U.draw=function K(Z,Q){var V=this._gl,z=this._options,X=Z[0],L=Z[1],w=Z[2],H=Z[3],D=Z[4],W=V.canvas.height-(L+1)*z.tileHeight;if(V.scissor(X*z.tileWidth,W,z.tileWidth,z.tileHeight),Q){if(z.tileColorize)V.clearColor(0,0,0,0);else V.clearColor.apply(V,p0(D));V.clear(V.COLOR_BUFFER_BIT)}if(!w)return;var M=[].concat(w),O=[].concat(D),j=[].concat(H);V.uniform2fv(this._uniforms.targetPosRel,[X,L]);for(var b=0;b<M.length;b++){var g=this._options.tileMap[M[b]];if(!g)throw new Error('Char "'+M[b]+'" not found in tileMap');if(V.uniform1f(this._uniforms.colorize,z.tileColorize?1:0),V.uniform2fv(this._uniforms.tilesetPosAbs,g),z.tileColorize)V.uniform4fv(this._uniforms.tint,p0(j[b])),V.uniform4fv(this._uniforms.bg,p0(O[b]));V.drawArrays(V.TRIANGLE_STRIP,0,4)}},U.clear=function K(){var Z=this._gl;Z.clearColor.apply(Z,p0(this._options.bg)),Z.scissor(0,0,Z.canvas.width,Z.canvas.height),Z.clear(Z.COLOR_BUFFER_BIT)},U.computeSize=function K(Z,Q){var V=Math.floor(Z/this._options.tileWidth),z=Math.floor(Q/this._options.tileHeight);return[V,z]},U.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},U.eventToPosition=function K(Z,Q){var V=this._gl.canvas,z=V.getBoundingClientRect();if(Z-=z.left,Q-=z.top,Z*=V.width/z.width,Q*=V.height/z.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},U._initWebGL=function K(){var Z=this,Q=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=Q;var V=j0(Q,D0,X0);return Q.useProgram(V),w0(Q),K0.forEach(function(z){return Z._uniforms[z]=Q.getUniformLocation(V,z)}),this._program=V,Q.enable(Q.BLEND),Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA),Q.enable(Q.SCISSOR_TEST),Q},U._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},U._updateSize=function K(){var Z=this._gl,Q=this._options,V=[Q.width*Q.tileWidth,Q.height*Q.tileHeight];Z.canvas.width=V[0],Z.canvas.height=V[1],Z.viewport(0,0,V[0],V[1]),Z.uniform2fv(this._uniforms.tileSize,[Q.tileWidth,Q.tileHeight]),Z.uniform2fv(this._uniforms.targetSize,V)},U._updateTexture=function K(Z){t0(this._gl,Z)},B}(P),K0=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],D0=`
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
}`.trim();function j0(Y,B,U){var K=Y.createShader(Y.VERTEX_SHADER);if(Y.shaderSource(K,B),Y.compileShader(K),!Y.getShaderParameter(K,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(K)||"");var Z=Y.createShader(Y.FRAGMENT_SHADER);if(Y.shaderSource(Z,U),Y.compileShader(Z),!Y.getShaderParameter(Z,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(Z)||"");var Q=Y.createProgram();if(Y.attachShader(Q,K),Y.attachShader(Q,Z),Y.linkProgram(Q),!Y.getProgramParameter(Q,Y.LINK_STATUS))throw new Error(Y.getProgramInfoLog(Q)||"");return Q}function w0(Y){var B=new Float32Array([0,0,1,0,0,1,1,1]),U=Y.createBuffer();Y.bindBuffer(Y.ARRAY_BUFFER,U),Y.bufferData(Y.ARRAY_BUFFER,B,Y.STATIC_DRAW),Y.enableVertexAttribArray(0),Y.vertexAttribPointer(0,2,Y.FLOAT,!1,0,0)}function t0(Y,B){var U=Y.createTexture();return Y.bindTexture(Y.TEXTURE_2D,U),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MAG_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MIN_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_S,Y.REPEAT),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_T,Y.REPEAT),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,0),Y.texImage2D(Y.TEXTURE_2D,0,Y.RGBA,Y.RGBA,Y.UNSIGNED_BYTE,B),U}var S0={};function p0(Y){if(!(Y in S0)){var B;if(Y=="transparent")B=[0,0,0,0];else if(Y.indexOf("rgba")>-1){B=(Y.match(/[\d.]+/g)||[]).map(Number);for(var U=0;U<3;U++)B[U]=B[U]/255}else B=c(Y).map(function(K){return K/255}),B.push(1);S0[Y]=B}return S0[Y]}function YZ(Y){return"\x1B[0;48;5;"+b1(Y)+"m\x1B[2J"}function wZ(Y,B){return"\x1B[0;38;5;"+b1(Y)+";48;5;"+b1(B)+"m"}function LZ(Y,B){return"\x1B["+(B+1)+";"+(Y+1)+"H"}function b1(Y){var B=256,U=6,K=U/B,Z=c(Y),Q=Math.floor(Z[0]*K),V=Math.floor(Z[1]*K),z=Math.floor(Z[2]*K);return Q*36+V*6+z*1+16}var Z6=function(Y){q0(B,Y);function B(){var K=Y.call(this)||this;return K._offset=[0,0],K._cursor=[-1,-1],K._lastColor="",K}var U=B.prototype;return U.schedule=function K(Z){setTimeout(Z,16.666666666666668)},U.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z);var Q=[Z.width,Z.height],V=this.computeSize();this._offset=V.map(function(z,X){return Math.floor((z-Q[X])/2)})},U.clear=function K(){process.stdout.write(YZ(this._options.bg))},U.draw=function K(Z,Q){var V=Z[0],z=Z[1],X=Z[2],L=Z[3],w=Z[4],H=this._offset[0]+V,D=this._offset[1]+z,W=this.computeSize();if(H<0||H>=W[0])return;if(D<0||D>=W[1])return;if(H!==this._cursor[0]||D!==this._cursor[1])process.stdout.write(LZ(H,D)),this._cursor[0]=H,this._cursor[1]=D;if(Q){if(!X)X=" "}if(!X)return;var M=wZ(L,w);if(M!==this._lastColor)process.stdout.write(M),this._lastColor=M;if(X!="\t"){var O=[].concat(X);process.stdout.write(O[0])}if(this._cursor[0]++,this._cursor[0]>=W[0])this._cursor[0]=0,this._cursor[1]++},U.computeFontSize=function K(){throw new Error("Terminal backend has no notion of font size")},U.eventToPosition=function K(Z,Q){return[Z,Q]},U.computeSize=function K(){return[process.stdout.columns,process.stdout.rows]},B}(P),HZ=/%([bc]){([^}]*)}/g,b0=0,u0=1,I1=2,f1=3;function PZ(Y,B){var U={width:0,height:1},K=k1(Y,B),Z=0;for(var Q=0;Q<K.length;Q++){var V=K[Q];switch(V.type){case b0:Z+=V.value.length;break;case u0:U.height++,U.width=Math.max(U.width,Z),Z=0;break}}return U.width=Math.max(U.width,Z),U}function k1(Y,B){var U=[],K=0;Y.replace(HZ,function(Q,V,z,X){var L=Y.substring(K,X);if(L.length)U.push({type:b0,value:L});return U.push({type:V=="c"?I1:f1,value:z.trim()}),K=X+Q.length,""});var Z=Y.substring(K);if(Z.length)U.push({type:b0,value:Z});return DZ(U,B)}function DZ(Y,B){if(!B)B=1/0;var U=0,K=0,Z=-1;while(U<Y.length){var Q=Y[U];if(Q.type==u0)K=0,Z=-1;if(Q.type!=b0){U++;continue}while(K==0&&Q.value.charAt(0)==" ")Q.value=Q.value.substring(1);var V=Q.value.indexOf(`
`);if(V!=-1){Q.value=U1(Y,U,V,!0);var z=Q.value.split("");while(z.length&&z[z.length-1]==" ")z.pop();Q.value=z.join("")}if(!Q.value.length){Y.splice(U,1);continue}if(K+Q.value.length>B){var X=-1;while(!0){var L=Q.value.indexOf(" ",X+1);if(L==-1)break;if(K+L>B)break;X=L}if(X!=-1)Q.value=U1(Y,U,X,!0);else if(Z!=-1){var w=Y[Z],H=w.value.lastIndexOf(" ");w.value=U1(Y,Z,H,!0),U=Z}else Q.value=U1(Y,U,B-K,!1)}else if(K+=Q.value.length,Q.value.indexOf(" ")!=-1)Z=U;U++}Y.push({type:u0});var D=null;for(var W=0;W<Y.length;W++){var M=Y[W];switch(M.type){case b0:D=M;break;case u0:if(D){var O=D.value.split("");while(O.length&&O[O.length-1]==" ")O.pop();D.value=O.join("")}D=null;break}}return Y.pop(),Y}function U1(Y,B,U,K){var Z={type:u0},Q={type:b0,value:Y[B].value.substring(U+(K?1:0))};return Y.splice(B+1,0,Z,Q),Y[B].value.substring(0,U)}var WZ=Object.freeze({__proto__:null,TYPE_TEXT:b0,TYPE_NEWLINE:u0,TYPE_FG:I1,TYPE_BG:f1,measure:PZ,tokenize:k1}),u1=80,g1=25,G0={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},FZ={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},RZ={hex:J0,rect:V0,tile:n,"tile-gl":e,term:Z6},MZ={width:u1,height:g1,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},l0=function(){function Y(U){if(U===void 0)U={};this._data={},this._dirty=!1,this._options={},U=Object.assign({},MZ,U),this.setOptions(U),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var B=Y.prototype;return B.DEBUG=function U(K,Z,Q){var V=[this._options.bg,this._options.fg];this.draw(K,Z,null,null,V[Q%V.length])},B.clear=function U(){this._data={},this._dirty=!0},B.setOptions=function U(K){if(Object.assign(this._options,K),K.width||K.height||K.fontSize||K.fontFamily||K.spacing||K.layout){if(K.layout){var Z=RZ[K.layout];this._backend=new Z}this._backend.setOptions(this._options),this._dirty=!0}return this},B.getOptions=function U(){return this._options},B.getContainer=function U(){return this._backend.getContainer()},B.computeSize=function U(K,Z){return this._backend.computeSize(K,Z)},B.computeFontSize=function U(K,Z){return this._backend.computeFontSize(K,Z)},B.computeTileSize=function U(K,Z){var Q=Math.floor(K/this._options.width),V=Math.floor(Z/this._options.height);return[Q,V]},B.eventToPosition=function U(K){var Z,Q;if("touches"in K)Z=K.touches[0].clientX,Q=K.touches[0].clientY;else Z=K.clientX,Q=K.clientY;return this._backend.eventToPosition(Z,Q)},B.draw=function U(K,Z,Q,V,z){if(!V)V=this._options.fg;if(!z)z=this._options.bg;var X=K+","+Z;if(this._data[X]=[K,Z,Q,V,z],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[X]=!0},B.drawOver=function U(K,Z,Q,V,z){var X=K+","+Z,L=this._data[X];if(L)L[2]=Q||L[2],L[3]=V||L[3],L[4]=z||L[4];else this.draw(K,Z,Q,V,z)},B.drawText=function U(K,Z,Q,V){var z=null,X=null,L=K,w=Z,H=1;if(!V)V=this._options.width-K;var D=k1(Q,V);while(D.length){var W=D.shift();switch(W.type){case b0:var M=!1,O=!1,j=!1,b=!1;for(var g=0;g<W.value.length;g++){var h=W.value.charCodeAt(g),d=W.value.charAt(g);if(this._options.layout==="term"){var i=h>>8,Z0=i===17||i>=46&&i<=159||i>=172&&i<=215||h>=43360&&h<=43391;if(Z0){this.draw(L+0,w,d,z,X),this.draw(L+1,w,"\t",z,X),L+=2;continue}}if(j=h>65280&&h<65377||h>65500&&h<65512||h>65518,M=d.charCodeAt(0)==32||d.charCodeAt(0)==12288,b&&!j&&!M)L++;if(j&&!O)L++;this.draw(L++,w,d,z,X),O=M,b=j}break;case I1:z=W.value||null;break;case f1:X=W.value||null;break;case u0:L=K,w++,H++;break}}return H},B._tick=function U(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var K in this._data)this._draw(K,!1)}else for(var Z in this._dirty)this._draw(Z,!0);this._dirty=!1},B._draw=function U(K,Z){var Q=this._data[K];if(Q[4]!=this._options.bg)Z=!0;this._backend.draw(Q,Z)},Y}();l0.Rect=V0,l0.Hex=J0,l0.Tile=n,l0.TileGL=e,l0.Term=Z6;var OZ=function(){function Y(U){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,U),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var K=0;K<this._options.order;K++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var B=Y.prototype;return B.clear=function U(){this._data={},this._priorValues={}},B.generate=function U(){var K=[this._sample(this._prefix)];while(K[K.length-1]!=this._boundary)K.push(this._sample(K));return this._join(K.slice(0,-1))},B.observe=function U(K){var Z=this._split(K);for(var Q=0;Q<Z.length;Q++)this._priorValues[Z[Q]]=this._options.prior;Z=this._prefix.concat(Z).concat(this._suffix);for(var V=this._options.order;V<Z.length;V++){var z=Z.slice(V-this._options.order,V),X=Z[V];for(var L=0;L<z.length;L++){var w=z.slice(L);this._observeEvent(w,X)}}},B.getStats=function U(){var K=[],Z=Object.keys(this._priorValues).length;Z--,K.push("distinct samples: "+Z);var Q=Object.keys(this._data).length,V=0;for(var z in this._data)V+=Object.keys(this._data[z]).length;return K.push("dictionary size (contexts): "+Q),K.push("dictionary size (events): "+V),K.join(", ")},B._split=function U(K){return K.split(this._options.words?/\s+/:"")},B._join=function U(K){return K.join(this._options.words?" ":"")},B._observeEvent=function U(K,Z){var Q=this._join(K);if(!(Q in this._data))this._data[Q]={};var V=this._data[Q];if(!(Z in V))V[Z]=0;V[Z]++},B._sample=function U(K){K=this._backoff(K);var Z=this._join(K),Q=this._data[Z],V={};if(this._options.prior){for(var z in this._priorValues)V[z]=this._priorValues[z];for(var X in Q)V[X]+=Q[X]}else V=Q;return G.getWeightedValue(V)},B._backoff=function U(K){if(K.length>this._options.order)K=K.slice(-this._options.order);else if(K.length<this._options.order)K=this._prefix.slice(0,this._options.order-K.length).concat(K);while(!(this._join(K)in this._data)&&K.length>0)K=K.slice(1);return K},Y}(),J6=function(){function Y(){this.heap=[],this.timestamp=0}var B=Y.prototype;return B.lessThan=function U(K,Z){return K.key==Z.key?K.timestamp<Z.timestamp:K.key<Z.key},B.shift=function U(K){this.heap=this.heap.map(function(Z){var{key:Q,value:V,timestamp:z}=Z;return{key:Q+K,value:V,timestamp:z}})},B.len=function U(){return this.heap.length},B.push=function U(K,Z){this.timestamp+=1;var Q=this.len();this.heap.push({value:K,timestamp:this.timestamp,key:Z}),this.updateUp(Q)},B.pop=function U(){if(this.len()==0)throw new Error("no element to pop");var K=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return K},B.find=function U(K){for(var Z=0;Z<this.len();Z++)if(K==this.heap[Z].value)return this.heap[Z];return null},B.remove=function U(K){var Z=null;for(var Q=0;Q<this.len();Q++)if(K==this.heap[Q].value)Z=Q;if(Z===null)return!1;if(this.len()>1){var V=this.heap.pop();if(V.value!=K)this.heap[Z]=V,this.updateDown(Z);return!0}else this.heap.pop();return!0},B.parentNode=function U(K){return Math.floor((K-1)/2)},B.leftChildNode=function U(K){return 2*K+1},B.rightChildNode=function U(K){return 2*K+2},B.existNode=function U(K){return K>=0&&K<this.heap.length},B.swap=function U(K,Z){var Q=this.heap[K];this.heap[K]=this.heap[Z],this.heap[Z]=Q},B.minNode=function U(K){var Z=K.filter(this.existNode.bind(this)),Q=Z[0];for(var V=HJ(Z),z;!(z=V()).done;){var X=z.value;if(this.lessThan(this.heap[X],this.heap[Q]))Q=X}return Q},B.updateUp=function U(K){if(K==0)return;var Z=this.parentNode(K);if(this.existNode(Z)&&this.lessThan(this.heap[K],this.heap[Z]))this.swap(K,Z),this.updateUp(Z)},B.updateDown=function U(K){var Z=this.leftChildNode(K),Q=this.rightChildNode(K);if(!this.existNode(Z))return;var V=this.minNode([K,Z,Q]);if(V!=K)this.swap(K,V),this.updateDown(V)},B.debugPrint=function U(){console.log(this.heap)},Y}(),Q6=function(){function Y(){this._time=0,this._events=new J6}var B=Y.prototype;return B.getTime=function U(){return this._time},B.clear=function U(){return this._events=new J6,this},B.add=function U(K,Z){this._events.push(K,Z)},B.get=function U(){if(!this._events.len())return null;var K=this._events.pop(),Z=K.key,Q=K.value;if(Z>0)this._time+=Z,this._events.shift(-Z);return Q},B.getEventTime=function U(K){var Z=this._events.find(K);if(Z){var Q=Z.key;return Q}return},B.remove=function U(K){return this._events.remove(K)},Y}(),T1=function(){function Y(){this._queue=new Q6,this._repeat=[],this._current=null}var B=Y.prototype;return B.getTime=function U(){return this._queue.getTime()},B.add=function U(K,Z){if(Z)this._repeat.push(K);return this},B.getTimeOf=function U(K){return this._queue.getEventTime(K)},B.clear=function U(){return this._queue.clear(),this._repeat=[],this._current=null,this},B.remove=function U(K){var Z=this._queue.remove(K),Q=this._repeat.indexOf(K);if(Q!=-1)this._repeat.splice(Q,1);if(this._current==K)this._current=null;return Z},B.next=function U(){return this._current=this._queue.get(),this._current},Y}(),jZ=function(Y){q0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.add=function K(Z,Q){return this._queue.add(Z,0),Y.prototype.add.call(this,Z,Q)},U.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return Y.prototype.next.call(this)},B}(T1),CZ=function(Y){q0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.add=function K(Z,Q,V){return this._queue.add(Z,V!==void 0?V:1/Z.getSpeed()),Y.prototype.add.call(this,Z,Q)},U.next=function K(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return Y.prototype.next.call(this)},B}(T1),EZ=function(Y){q0(B,Y);function B(){var K=Y.call(this)||this;return K._defaultDuration=1,K._duration=K._defaultDuration,K}var U=B.prototype;return U.add=function K(Z,Q,V){return this._queue.add(Z,V||this._defaultDuration),Y.prototype.add.call(this,Z,Q)},U.clear=function K(){return this._duration=this._defaultDuration,Y.prototype.clear.call(this)},U.remove=function K(Z){if(Z==this._current)this._duration=this._defaultDuration;return Y.prototype.remove.call(this,Z)},U.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return Y.prototype.next.call(this)},U.setDuration=function K(Z){if(this._current)this._duration=Z;return this},B}(T1),AZ={Simple:jZ,Speed:CZ,Action:EZ},h1=function(){function Y(U,K){if(K===void 0)K={};this._lightPasses=U,this._options=Object.assign({topology:8},K)}var B=Y.prototype;return B._getCircle=function U(K,Z,Q){var V=[],z,X,L;switch(this._options.topology){case 4:X=1,L=[0,1],z=[G0[8][7],G0[8][1],G0[8][3],G0[8][5]];break;case 6:z=G0[6],X=1,L=[-1,1];break;case 8:z=G0[4],X=2,L=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var w=K+L[0]*Q,H=Z+L[1]*Q;for(var D=0;D<z.length;D++)for(var W=0;W<Q*X;W++)V.push([w,H]),w+=z[D][0],H+=z[D][1];return V},Y}(),NZ=function(Y){q0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.compute=function K(Z,Q,V,z){if(z(Z,Q,0,1),!this._lightPasses(Z,Q))return;var X=[],L,w,H,D,W;for(var M=1;M<=V;M++){var O=this._getCircle(Z,Q,M),j=360/O.length;for(var b=0;b<O.length;b++){if(H=O[b][0],D=O[b][1],L=j*(b-0.5),w=L+j,W=!this._lightPasses(H,D),this._visibleCoords(Math.floor(L),Math.ceil(w),W,X))z(H,D,M,1);if(X.length==2&&X[0]==0&&X[1]==360)return}}},U._visibleCoords=function K(Z,Q,V,z){if(Z<0){var X=this._visibleCoords(0,Q,V,z),L=this._visibleCoords(360+Z,360,V,z);return X||L}var w=0;while(w<z.length&&z[w]<Z)w++;if(w==z.length){if(V)z.push(Z,Q);return!0}var H=0;if(w%2){while(w<z.length&&z[w]<Q)w++,H++;if(H==0)return!1;if(V)if(H%2)z.splice(w-H,H,Q);else z.splice(w-H,H);return!0}else{while(w<z.length&&z[w]<Q)w++,H++;if(Z==z[w-H]&&H==1)return!1;if(V)if(H%2)z.splice(w-H,H,Z);else z.splice(w-H,H,Z,Q);return!0}},B}(h1),vZ=function(Y){q0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.compute=function K(Z,Q,V,z){if(z(Z,Q,0,1),!this._lightPasses(Z,Q))return;var X=[],L,w,H,D,W,M;for(var O=1;O<=V;O++){var j=this._getCircle(Z,Q,O),b=j.length;for(var g=0;g<b;g++){if(L=j[g][0],w=j[g][1],D=[g?2*g-1:2*b-1,2*b],W=[2*g+1,2*b],H=!this._lightPasses(L,w),M=this._checkVisibility(D,W,H,X),M)z(L,w,O,M);if(X.length==2&&X[0][0]==0&&X[1][0]==X[1][1])return}}},U._checkVisibility=function K(Z,Q,V,z){if(Z[0]>Q[0]){var X=this._checkVisibility(Z,[Z[1],Z[1]],V,z),L=this._checkVisibility([0,1],Q,V,z);return(X+L)/2}var w=0,H=!1;while(w<z.length){var D=z[w],W=D[0]*Z[1]-Z[0]*D[1];if(W>=0){if(W==0&&!(w%2))H=!0;break}w++}var M=z.length,O=!1;while(M--){var j=z[M],b=Q[0]*j[1]-j[0]*Q[1];if(b>=0){if(b==0&&M%2)O=!0;break}}var g=!0;if(w==M&&(H||O))g=!1;else if(H&&O&&w+1==M&&M%2)g=!1;else if(w>M&&w%2)g=!1;if(!g)return 0;var h,d=M-w+1;if(d%2)if(w%2){var i=z[w];if(h=(Q[0]*i[1]-i[0]*Q[1])/(i[1]*Q[1]),V)z.splice(w,d,Q)}else{var Z0=z[M];if(h=(Z0[0]*Z[1]-Z[0]*Z0[1])/(Z[1]*Z0[1]),V)z.splice(w,d,Z)}else if(w%2){var $0=z[w],H0=z[M];if(h=(H0[0]*$0[1]-$0[0]*H0[1])/($0[1]*H0[1]),V)z.splice(w,d)}else{if(V)z.splice(w,d,Z,Q);return 1}var C0=(Q[0]*Z[1]-Z[0]*Q[1])/(Z[1]*Q[1]);return h/C0},B}(h1),I0=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],SZ=function(Y){q0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.compute=function K(Z,Q,V,z){z(Z,Q,0,1);for(var X=0;X<I0.length;X++)this._renderOctant(Z,Q,I0[X],V,z)},U.compute180=function K(Z,Q,V,z,X){X(Z,Q,0,1);var L=(z-1+8)%8,w=(z-2+8)%8,H=(z+1+8)%8;this._renderOctant(Z,Q,I0[w],V,X),this._renderOctant(Z,Q,I0[L],V,X),this._renderOctant(Z,Q,I0[z],V,X),this._renderOctant(Z,Q,I0[H],V,X)},U.compute90=function K(Z,Q,V,z,X){X(Z,Q,0,1);var L=(z-1+8)%8;this._renderOctant(Z,Q,I0[z],V,X),this._renderOctant(Z,Q,I0[L],V,X)},U._renderOctant=function K(Z,Q,V,z,X){this._castVisibility(Z,Q,1,1,0,z+1,V[0],V[1],V[2],V[3],X)},U._castVisibility=function K(Z,Q,V,z,X,L,w,H,D,W,M){if(z<X)return;for(var O=V;O<=L;O++){var j=-O-1,b=-O,g=!1,h=0;while(j<=0){j+=1;var d=Z+j*w+b*H,i=Q+j*D+b*W,Z0=(j-0.5)/(b+0.5),$0=(j+0.5)/(b-0.5);if($0>z)continue;if(Z0<X)break;if(j*j+b*b<L*L)M(d,i,O,1);if(!g){if(!this._lightPasses(d,i)&&O<L)g=!0,this._castVisibility(Z,Q,O+1,z,Z0,L,w,H,D,W,M),h=$0}else{if(!this._lightPasses(d,i)){h=$0;continue}g=!1,z=h}}if(g)break}},B}(h1),bZ={DiscreteShadowcasting:NZ,PreciseShadowcasting:vZ,RecursiveShadowcasting:SZ},g0=function(){function Y(U,K){if(U===void 0)U=u1;if(K===void 0)K=g1;this._width=U,this._height=K}var B=Y.prototype;return B._fillMap=function U(K){var Z=[];for(var Q=0;Q<this._width;Q++){Z.push([]);for(var V=0;V<this._height;V++)Z[Q].push(K)}return Z},Y}(),IZ=function(Y){q0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.create=function K(Z){var Q=this._width-1,V=this._height-1;for(var z=0;z<=Q;z++)for(var X=0;X<=V;X++){var L=z&&X&&z<Q&&X<V;Z(z,X,L?0:1)}return this},B}(g0),V6=function(Y){q0(B,Y);function B(K,Z){var Q=Y.call(this,K,Z)||this;return Q._rooms=[],Q._corridors=[],Q}var U=B.prototype;return U.getRooms=function K(){return this._rooms},U.getCorridors=function K(){return this._corridors},B}(g0),K6=function Y(){},$1=function(Y){q0(B,Y);function B(K,Z,Q,V,z,X){var L=Y.call(this)||this;if(L._x1=K,L._y1=Z,L._x2=Q,L._y2=V,L._doors={},z!==void 0&&X!==void 0)L.addDoor(z,X);return L}B.createRandomAt=function K(Z,Q,V,z,X){var L=X.roomWidth[0],w=X.roomWidth[1],H=G.getUniformInt(L,w);L=X.roomHeight[0],w=X.roomHeight[1];var D=G.getUniformInt(L,w);if(V==1){var W=Q-Math.floor(G.getUniform()*D);return new this(Z+1,W,Z+H,W+D-1,Z,Q)}if(V==-1){var M=Q-Math.floor(G.getUniform()*D);return new this(Z-H,M,Z-1,M+D-1,Z,Q)}if(z==1){var O=Z-Math.floor(G.getUniform()*H);return new this(O,Q+1,O+H-1,Q+D,Z,Q)}if(z==-1){var j=Z-Math.floor(G.getUniform()*H);return new this(j,Q-D,j+H-1,Q-1,Z,Q)}throw new Error("dx or dy must be 1 or -1")},B.createRandomCenter=function K(Z,Q,V){var z=V.roomWidth[0],X=V.roomWidth[1],L=G.getUniformInt(z,X);z=V.roomHeight[0],X=V.roomHeight[1];var w=G.getUniformInt(z,X),H=Z-Math.floor(G.getUniform()*L),D=Q-Math.floor(G.getUniform()*w),W=H+L-1,M=D+w-1;return new this(H,D,W,M)},B.createRandom=function K(Z,Q,V){var z=V.roomWidth[0],X=V.roomWidth[1],L=G.getUniformInt(z,X);z=V.roomHeight[0],X=V.roomHeight[1];var w=G.getUniformInt(z,X),H=Z-L-1,D=Q-w-1,W=1+Math.floor(G.getUniform()*H),M=1+Math.floor(G.getUniform()*D),O=W+L-1,j=M+w-1;return new this(W,M,O,j)};var U=B.prototype;return U.addDoor=function K(Z,Q){return this._doors[Z+","+Q]=1,this},U.getDoors=function K(Z){for(var Q in this._doors){var V=Q.split(",");Z(parseInt(V[0]),parseInt(V[1]))}return this},U.clearDoors=function K(){return this._doors={},this},U.addDoors=function K(Z){var Q=this._x1-1,V=this._x2+1,z=this._y1-1,X=this._y2+1;for(var L=Q;L<=V;L++)for(var w=z;w<=X;w++){if(L!=Q&&L!=V&&w!=z&&w!=X)continue;if(Z(L,w))continue;this.addDoor(L,w)}return this},U.debug=function K(){console.log("room",this._x1,this._y1,this._x2,this._y2)},U.isValid=function K(Z,Q){var V=this._x1-1,z=this._x2+1,X=this._y1-1,L=this._y2+1;for(var w=V;w<=z;w++)for(var H=X;H<=L;H++)if(w==V||w==z||H==X||H==L){if(!Z(w,H))return!1}else if(!Q(w,H))return!1;return!0},U.create=function K(Z){var Q=this._x1-1,V=this._x2+1,z=this._y1-1,X=this._y2+1,L=0;for(var w=Q;w<=V;w++)for(var H=z;H<=X;H++){if(w+","+H in this._doors)L=2;else if(w==Q||w==V||H==z||H==X)L=1;else L=0;Z(w,H,L)}},U.getCenter=function K(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},U.getLeft=function K(){return this._x1},U.getRight=function K(){return this._x2},U.getTop=function K(){return this._y1},U.getBottom=function K(){return this._y2},B}(K6),x1=function(Y){q0(B,Y);function B(K,Z,Q,V){var z=Y.call(this)||this;return z._startX=K,z._startY=Z,z._endX=Q,z._endY=V,z._endsWithAWall=!0,z}B.createRandomAt=function K(Z,Q,V,z,X){var L=X.corridorLength[0],w=X.corridorLength[1],H=G.getUniformInt(L,w);return new this(Z,Q,Z+V*H,Q+z*H)};var U=B.prototype;return U.debug=function K(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},U.isValid=function K(Z,Q){var V=this._startX,z=this._startY,X=this._endX-V,L=this._endY-z,w=1+Math.max(Math.abs(X),Math.abs(L));if(X)X=X/Math.abs(X);if(L)L=L/Math.abs(L);var H=L,D=-X,W=!0;for(var M=0;M<w;M++){var O=V+M*X,j=z+M*L;if(!Q(O,j))W=!1;if(!Z(O+H,j+D))W=!1;if(!Z(O-H,j-D))W=!1;if(!W){w=M,this._endX=O-X,this._endY=j-L;break}}if(w==0)return!1;if(w==1&&Z(this._endX+X,this._endY+L))return!1;var b=!Z(this._endX+X+H,this._endY+L+D),g=!Z(this._endX+X-H,this._endY+L-D);if(this._endsWithAWall=Z(this._endX+X,this._endY+L),(b||g)&&this._endsWithAWall)return!1;return!0},U.create=function K(Z){var Q=this._startX,V=this._startY,z=this._endX-Q,X=this._endY-V,L=1+Math.max(Math.abs(z),Math.abs(X));if(z)z=z/Math.abs(z);if(X)X=X/Math.abs(X);for(var w=0;w<L;w++){var H=Q+w*z,D=V+w*X;Z(H,D,0)}return!0},U.createPriorityWalls=function K(Z){if(!this._endsWithAWall)return;var Q=this._startX,V=this._startY,z=this._endX-Q,X=this._endY-V;if(z)z=z/Math.abs(z);if(X)X=X/Math.abs(X);var L=X,w=-z;Z(this._endX+z,this._endY+X),Z(this._endX+L,this._endY+w),Z(this._endX-L,this._endY-w)},B}(K6),fZ=function(Y){q0(B,Y);function B(K,Z,Q){var V=Y.call(this,K,Z)||this;return V._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(V._options,Q),V._map=[],V._dug=0,V._roomAttempts=20,V._corridorAttempts=20,V._connected=[],V._unconnected=[],V._digCallback=V._digCallback.bind(c0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(c0(V)),V._isWallCallback=V._isWallCallback.bind(c0(V)),V}var U=B.prototype;return U.create=function K(Z){var Q=Date.now();while(!0){var V=Date.now();if(V-Q>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(Z)for(var z=0;z<this._width;z++)for(var X=0;X<this._height;X++)Z(z,X,this._map[z][X]);return this},U._generateRooms=function K(){var Z=this._width-2,Q=this._height-2,V;do if(V=this._generateRoom(),this._dug/(Z*Q)>this._options.roomDugPercentage)break;while(V)},U._generateRoom=function K(){var Z=0;while(Z<this._roomAttempts){Z++;var Q=$1.createRandom(this._width,this._height,this._options);if(!Q.isValid(this._isWallCallback,this._canBeDugCallback))continue;return Q.create(this._digCallback),this._rooms.push(Q),Q}return null},U._generateCorridors=function K(){var Z=0;while(Z<this._corridorAttempts){Z++,this._corridors=[],this._map=this._fillMap(1);for(var Q=0;Q<this._rooms.length;Q++){var V=this._rooms[Q];V.clearDoors(),V.create(this._digCallback)}if(this._unconnected=G.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var z=G.getItem(this._connected);if(!z)break;var X=this._closestRoom(this._unconnected,z);if(!X)break;var L=this._closestRoom(this._connected,X);if(!L)break;var w=this._connectRooms(X,L);if(!w)break;if(!this._unconnected.length)return!0}}return!1},U._closestRoom=function K(Z,Q){var V=1/0,z=Q.getCenter(),X=null;for(var L=0;L<Z.length;L++){var w=Z[L],H=w.getCenter(),D=H[0]-z[0],W=H[1]-z[1],M=D*D+W*W;if(M<V)V=M,X=w}return X},U._connectRooms=function K(Z,Q){var V=Z.getCenter(),z=Q.getCenter(),X=z[0]-V[0],L=z[1]-V[1],w,H,D,W,M,O,j;if(Math.abs(X)<Math.abs(L))D=L>0?2:0,W=(D+2)%4,M=Q.getLeft(),O=Q.getRight(),j=0;else D=X>0?1:3,W=(D+2)%4,M=Q.getTop(),O=Q.getBottom(),j=1;if(w=this._placeInWall(Z,D),!w)return!1;if(w[j]>=M&&w[j]<=O){H=w.slice();var b=0;switch(W){case 0:b=Q.getTop()-1;break;case 1:b=Q.getRight()+1;break;case 2:b=Q.getBottom()+1;break;case 3:b=Q.getLeft()-1;break}H[(j+1)%2]=b,this._digLine([w,H])}else if(w[j]<M-1||w[j]>O+1){var g=w[j]-z[j],h=0;switch(W){case 0:case 1:h=g<0?3:1;break;case 2:case 3:h=g<0?1:3;break}if(W=(W+h)%4,H=this._placeInWall(Q,W),!H)return!1;var d=[0,0];d[j]=w[j];var i=(j+1)%2;d[i]=H[i],this._digLine([w,d,H])}else{var Z0=(j+1)%2;if(H=this._placeInWall(Q,W),!H)return!1;var $0=Math.round((H[Z0]+w[Z0])/2),H0=[0,0],C0=[0,0];H0[j]=w[j],H0[Z0]=$0,C0[j]=H[j],C0[Z0]=$0,this._digLine([w,H0,C0,H])}if(Z.addDoor(w[0],w[1]),Q.addDoor(H[0],H[1]),j=this._unconnected.indexOf(Z),j!=-1)this._unconnected.splice(j,1),this._connected.push(Z);if(j=this._unconnected.indexOf(Q),j!=-1)this._unconnected.splice(j,1),this._connected.push(Q);return!0},U._placeInWall=function K(Z,Q){var V=[0,0],z=[0,0],X=0;switch(Q){case 0:z=[1,0],V=[Z.getLeft(),Z.getTop()-1],X=Z.getRight()-Z.getLeft()+1;break;case 1:z=[0,1],V=[Z.getRight()+1,Z.getTop()],X=Z.getBottom()-Z.getTop()+1;break;case 2:z=[1,0],V=[Z.getLeft(),Z.getBottom()+1],X=Z.getRight()-Z.getLeft()+1;break;case 3:z=[0,1],V=[Z.getLeft()-1,Z.getTop()],X=Z.getBottom()-Z.getTop()+1;break}var L=[],w=-2;for(var H=0;H<X;H++){var D=V[0]+H*z[0],W=V[1]+H*z[1];L.push(null);var M=this._map[D][W]==1;if(M){if(w!=H-1)L[H]=[D,W]}else if(w=H,H)L[H-1]=null}for(var O=L.length-1;O>=0;O--)if(!L[O])L.splice(O,1);return L.length?G.getItem(L):null},U._digLine=function K(Z){for(var Q=1;Q<Z.length;Q++){var V=Z[Q-1],z=Z[Q],X=new x1(V[0],V[1],z[0],z[1]);X.create(this._digCallback),this._corridors.push(X)}},U._digCallback=function K(Z,Q,V){if(this._map[Z][Q]=V,V==0)this._dug++},U._isWallCallback=function K(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},U._canBeDugCallback=function K(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},B}(V6),kZ=function(Y){q0(B,Y);function B(K,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,K,Z)||this,V._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},V.setOptions(Q),V._dirs=G0[V._options.topology],V._map=V._fillMap(0),V}var U=B.prototype;return U.randomize=function K(Z){for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)this._map[Q][V]=G.getUniform()<Z?1:0;return this},U.setOptions=function K(Z){Object.assign(this._options,Z)},U.set=function K(Z,Q,V){this._map[Z][Q]=V},U.create=function K(Z){var Q=this._fillMap(0),V=this._options.born,z=this._options.survive;for(var X=0;X<this._height;X++){var L=1,w=0;if(this._options.topology==6)L=2,w=X%2;for(var H=w;H<this._width;H+=L){var D=this._map[H][X],W=this._getNeighbors(H,X);if(D&&z.indexOf(W)!=-1)Q[H][X]=1;else if(!D&&V.indexOf(W)!=-1)Q[H][X]=1}}this._map=Q,Z&&this._serviceCallback(Z)},U._serviceCallback=function K(Z){for(var Q=0;Q<this._height;Q++){var V=1,z=0;if(this._options.topology==6)V=2,z=Q%2;for(var X=z;X<this._width;X+=V)Z(X,Q,this._map[X][Q])}},U._getNeighbors=function K(Z,Q){var V=0;for(var z=0;z<this._dirs.length;z++){var X=this._dirs[z],L=Z+X[0],w=Q+X[1];if(L<0||L>=this._width||w<0||w>=this._height)continue;V+=this._map[L][w]==1?1:0}return V},U.connect=function K(Z,Q,V){if(!Q)Q=0;var z=[],X={},L=1,w=[0,0];if(this._options.topology==6)L=2,w=[0,1];for(var H=0;H<this._height;H++)for(var D=w[H%2];D<this._width;D+=L)if(this._freeSpace(D,H,Q)){var W=[D,H];X[this._pointKey(W)]=W,z.push([D,H])}var M=z[G.getUniformInt(0,z.length-1)],O=this._pointKey(M),j={};j[O]=M,delete X[O],this._findConnected(j,X,[M],!1,Q);while(Object.keys(X).length>0){var b=this._getFromTo(j,X),g=b[0],h=b[1],d={};d[this._pointKey(g)]=g,this._findConnected(d,X,[g],!0,Q);var i=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;i.call(this,h,g,j,X,Q,V);for(var Z0 in d){var $0=d[Z0];this._map[$0[0]][$0[1]]=Q,j[Z0]=$0,delete X[Z0]}}Z&&this._serviceCallback(Z)},U._getFromTo=function K(Z,Q){var V=[0,0],z=[0,0],X,L=Object.keys(Z),w=Object.keys(Q);for(var H=0;H<5;H++){if(L.length<w.length){var D=L;z=Z[D[G.getUniformInt(0,D.length-1)]],V=this._getClosest(z,Q)}else{var W=w;V=Q[W[G.getUniformInt(0,W.length-1)]],z=this._getClosest(V,Z)}if(X=(V[0]-z[0])*(V[0]-z[0])+(V[1]-z[1])*(V[1]-z[1]),X<64)break}return[V,z]},U._getClosest=function K(Z,Q){var V=null,z=null;for(var X in Q){var L=Q[X],w=(L[0]-Z[0])*(L[0]-Z[0])+(L[1]-Z[1])*(L[1]-Z[1]);if(z==null||w<z)z=w,V=L}return V},U._findConnected=function K(Z,Q,V,z,X){while(V.length>0){var L=V.splice(0,1)[0],w=void 0;if(this._options.topology==6)w=[[L[0]+2,L[1]],[L[0]+1,L[1]-1],[L[0]-1,L[1]-1],[L[0]-2,L[1]],[L[0]-1,L[1]+1],[L[0]+1,L[1]+1]];else w=[[L[0]+1,L[1]],[L[0]-1,L[1]],[L[0],L[1]+1],[L[0],L[1]-1]];for(var H=0;H<w.length;H++){var D=this._pointKey(w[H]);if(Z[D]==null&&this._freeSpace(w[H][0],w[H][1],X)){if(Z[D]=w[H],!z)delete Q[D];V.push(w[H])}}}},U._tunnelToConnected=function K(Z,Q,V,z,X,L){var w,H;if(Q[0]<Z[0])w=Q,H=Z;else w=Z,H=Q;for(var D=w[0];D<=H[0];D++){this._map[D][w[1]]=X;var W=[D,w[1]],M=this._pointKey(W);V[M]=W,delete z[M]}if(L&&w[0]<H[0])L(w,[H[0],w[1]]);var O=H[0];if(Q[1]<Z[1])w=Q,H=Z;else w=Z,H=Q;for(var j=w[1];j<H[1];j++){this._map[O][j]=X;var b=[O,j],g=this._pointKey(b);V[g]=b,delete z[g]}if(L&&w[1]<H[1])L([H[0],w[1]],[H[0],H[1]])},U._tunnelToConnected6=function K(Z,Q,V,z,X,L){var w,H;if(Q[0]<Z[0])w=Q,H=Z;else w=Z,H=Q;var D=w[0],W=w[1];while(!(D==H[0]&&W==H[1])){var M=2;if(W<H[1])W++,M=1;else if(W>H[1])W--,M=1;if(D<H[0])D+=M;else if(D>H[0])D-=M;else if(H[1]%2)D-=M;else D+=M;this._map[D][W]=X;var O=[D,W],j=this._pointKey(O);V[j]=O,delete z[j]}if(L)L(Q,Z)},U._freeSpace=function K(Z,Q,V){return Z>=0&&Z<this._width&&Q>=0&&Q<this._height&&this._map[Z][Q]==V},U._pointKey=function K(Z){return Z[0]+"."+Z[1]},B}(g0),uZ={room:$1,corridor:x1},gZ=function(Y){q0(B,Y);function B(K,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,K,Z)||this,V._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},Q),V._features={room:4,corridor:4},V._map=[],V._featureAttempts=20,V._walls={},V._dug=0,V._digCallback=V._digCallback.bind(c0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(c0(V)),V._isWallCallback=V._isWallCallback.bind(c0(V)),V._priorityWallCallback=V._priorityWallCallback.bind(c0(V)),V}var U=B.prototype;return U.create=function K(Z){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var Q=(this._width-2)*(this._height-2);this._firstRoom();var V=Date.now(),z;do{z=0;var X=Date.now();if(X-V>this._options.timeLimit)break;var L=this._findWall();if(!L)break;var w=L.split(","),H=parseInt(w[0]),D=parseInt(w[1]),W=this._getDiggingDirection(H,D);if(!W)continue;var M=0;do if(M++,this._tryFeature(H,D,W[0],W[1])){this._removeSurroundingWalls(H,D),this._removeSurroundingWalls(H-W[0],D-W[1]);break}while(M<this._featureAttempts);for(var O in this._walls)if(this._walls[O]>1)z++}while(this._dug/Q<this._options.dugPercentage||z);if(this._addDoors(),Z)for(var j=0;j<this._width;j++)for(var b=0;b<this._height;b++)Z(j,b,this._map[j][b]);return this._walls={},this._map=[],this},U._digCallback=function K(Z,Q,V){if(V==0||V==2)this._map[Z][Q]=0,this._dug++;else this._walls[Z+","+Q]=1},U._isWallCallback=function K(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},U._canBeDugCallback=function K(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},U._priorityWallCallback=function K(Z,Q){this._walls[Z+","+Q]=2},U._firstRoom=function K(){var Z=Math.floor(this._width/2),Q=Math.floor(this._height/2),V=$1.createRandomCenter(Z,Q,this._options);this._rooms.push(V),V.create(this._digCallback)},U._findWall=function K(){var Z=[],Q=[];for(var V in this._walls){var z=this._walls[V];if(z==2)Q.push(V);else Z.push(V)}var X=Q.length?Q:Z;if(!X.length)return null;var L=G.getItem(X.sort());return delete this._walls[L],L},U._tryFeature=function K(Z,Q,V,z){var X=G.getWeightedValue(this._features),L=uZ[X],w=L.createRandomAt(Z,Q,V,z,this._options);if(!w.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(w.create(this._digCallback),w instanceof $1)this._rooms.push(w);if(w instanceof x1)w.createPriorityWalls(this._priorityWallCallback),this._corridors.push(w);return!0},U._removeSurroundingWalls=function K(Z,Q){var V=G0[4];for(var z=0;z<V.length;z++){var X=V[z],L=Z+X[0],w=Q+X[1];delete this._walls[L+","+w],L=Z+2*X[0],w=Q+2*X[1],delete this._walls[L+","+w]}},U._getDiggingDirection=function K(Z,Q){if(Z<=0||Q<=0||Z>=this._width-1||Q>=this._height-1)return null;var V=null,z=G0[4];for(var X=0;X<z.length;X++){var L=z[X],w=Z+L[0],H=Q+L[1];if(!this._map[w][H]){if(V)return null;V=L}}if(!V)return null;return[-V[0],-V[1]]},U._addDoors=function K(){var Z=this._map;function Q(X,L){return Z[X][L]==1}for(var V=0;V<this._rooms.length;V++){var z=this._rooms[V];z.clearDoors(),z.addDoors(Q)}},B}(V6);function q6(Y,B,U){U[B[Y+1]]=U[Y],B[U[Y]]=B[Y+1],U[Y]=Y+1,B[Y+1]=Y}function z6(Y,B,U){U[B[Y]]=U[Y],B[U[Y]]=B[Y],U[Y]=Y,B[Y]=Y}var TZ=function(Y){q0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.create=function K(Z){var Q=this._fillMap(1),V=Math.ceil((this._width-2)/2),z=0.375,X=[],L=[];for(var w=0;w<V;w++)X.push(w),L.push(w);X.push(V-1);var H;for(H=1;H+3<this._height;H+=2)for(var D=0;D<V;D++){var W=2*D+1,M=H;if(Q[W][M]=0,D!=X[D+1]&&G.getUniform()>z)q6(D,X,L),Q[W+1][M]=0;if(D!=X[D]&&G.getUniform()>z)z6(D,X,L);else Q[W][M+1]=0}for(var O=0;O<V;O++){var j=2*O+1,b=H;if(Q[j][b]=0,O!=X[O+1]&&(O==X[O]||G.getUniform()>z))q6(O,X,L),Q[j+1][b]=0;z6(O,X,L)}for(var g=0;g<this._width;g++)for(var h=0;h<this._height;h++)Z(g,h,Q[g][h]);return this},B}(g0),hZ=function(Y){q0(B,Y);function B(){var K=Y.apply(this,arguments)||this;return K._stack=[],K._map=[],K}var U=B.prototype;return U.create=function K(Z){var Q=this._width,V=this._height;this._map=[];for(var z=0;z<Q;z++){this._map.push([]);for(var X=0;X<V;X++){var L=z==0||X==0||z+1==Q||X+1==V;this._map[z].push(L?1:0)}}this._stack=[[1,1,Q-2,V-2]],this._process();for(var w=0;w<Q;w++)for(var H=0;H<V;H++)Z(w,H,this._map[w][H]);return this._map=[],this},U._process=function K(){while(this._stack.length){var Z=this._stack.shift();this._partitionRoom(Z)}},U._partitionRoom=function K(Z){var Q=[],V=[];for(var z=Z[0]+1;z<Z[2];z++){var X=this._map[z][Z[1]-1],L=this._map[z][Z[3]+1];if(X&&L&&!(z%2))Q.push(z)}for(var w=Z[1]+1;w<Z[3];w++){var H=this._map[Z[0]-1][w],D=this._map[Z[2]+1][w];if(H&&D&&!(w%2))V.push(w)}if(!Q.length||!V.length)return;var W=G.getItem(Q),M=G.getItem(V);this._map[W][M]=1;var O=[],j=[];O.push(j);for(var b=Z[0];b<W;b++)if(this._map[b][M]=1,b%2)j.push([b,M]);j=[],O.push(j);for(var g=W+1;g<=Z[2];g++)if(this._map[g][M]=1,g%2)j.push([g,M]);j=[],O.push(j);for(var h=Z[1];h<M;h++)if(this._map[W][h]=1,h%2)j.push([W,h]);j=[],O.push(j);for(var d=M+1;d<=Z[3];d++)if(this._map[W][d]=1,d%2)j.push([W,d]);var i=G.getItem(O);for(var Z0=0;Z0<O.length;Z0++){var $0=O[Z0];if($0==i)continue;var H0=G.getItem($0);this._map[H0[0]][H0[1]]=0}this._stack.push([Z[0],Z[1],W-1,M-1]),this._stack.push([W+1,Z[1],Z[2],M-1]),this._stack.push([Z[0],M+1,W-1,Z[3]]),this._stack.push([W+1,M+1,Z[2],Z[3]])},B}(g0),xZ=function(Y){q0(B,Y);function B(K,Z,Q){var V;if(Q===void 0)Q=0;return V=Y.call(this,K,Z)||this,V._regularity=Q,V._map=[],V}var U=B.prototype;return U.create=function K(Z){var Q=this._width,V=this._height,z=this._fillMap(1);Q-=Q%2?1:2,V-=V%2?1:2;var X=0,L=0,w=0,H=0,D=0,W=!1,M=[[0,0],[0,0],[0,0],[0,0]];do{if(X=1+2*Math.floor(G.getUniform()*(Q-1)/2),L=1+2*Math.floor(G.getUniform()*(V-1)/2),!D)z[X][L]=0;if(!z[X][L]){this._randomize(M);do{if(Math.floor(G.getUniform()*(this._regularity+1))==0)this._randomize(M);W=!0;for(var O=0;O<4;O++)if(w=X+M[O][0]*2,H=L+M[O][1]*2,this._isFree(z,w,H,Q,V)){z[w][H]=0,z[X+M[O][0]][L+M[O][1]]=0,X=w,L=H,W=!1,D++;break}}while(!W)}}while(D+1<Q*V/4);for(var j=0;j<this._width;j++)for(var b=0;b<this._height;b++)Z(j,b,z[j][b]);return this._map=[],this},U._randomize=function K(Z){for(var Q=0;Q<4;Q++)Z[Q][0]=0,Z[Q][1]=0;switch(Math.floor(G.getUniform()*4)){case 0:Z[0][0]=-1,Z[1][0]=1,Z[2][1]=-1,Z[3][1]=1;break;case 1:Z[3][0]=-1,Z[2][0]=1,Z[1][1]=-1,Z[0][1]=1;break;case 2:Z[2][0]=-1,Z[3][0]=1,Z[0][1]=-1,Z[1][1]=1;break;case 3:Z[1][0]=-1,Z[0][0]=1,Z[3][1]=-1,Z[2][1]=1;break}},U._isFree=function K(Z,Q,V,z,X){if(Q<1||V<1||Q>=z||V>=X)return!1;return Z[Q][V]},B}(g0),_Z=function(Y){q0(B,Y);function B(K,Z,Q){var V=Y.call(this,K,Z)||this;if(V.map=[],V.rooms=[],V.connectedCells=[],Q=Object.assign({cellWidth:3,cellHeight:3},Q),!Q.hasOwnProperty("roomWidth"))Q.roomWidth=V._calculateRoomSize(V._width,Q.cellWidth);if(!Q.hasOwnProperty("roomHeight"))Q.roomHeight=V._calculateRoomSize(V._height,Q.cellHeight);return V._options=Q,V}var U=B.prototype;return U.create=function K(Z){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),Z)for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)Z(Q,V,this.map[Q][V]);return this},U._calculateRoomSize=function K(Z,Q){var V=Math.floor(Z/Q*0.8),z=Math.floor(Z/Q*0.25);if(z<2)z=2;if(V<2)V=2;return[z,V]},U._initRooms=function K(){for(var Z=0;Z<this._options.cellWidth;Z++){this.rooms.push([]);for(var Q=0;Q<this._options.cellHeight;Q++)this.rooms[Z].push({x:0,y:0,width:0,height:0,connections:[],cellx:Z,celly:Q})}},U._connectRooms=function K(){var Z=G.getUniformInt(0,this._options.cellWidth-1),Q=G.getUniformInt(0,this._options.cellHeight-1),V,z,X,L=!1,w,H,D;do{D=[0,2,4,6],D=G.shuffle(D);do{if(L=!1,V=D.pop(),z=Z+G0[8][V][0],X=Q+G0[8][V][1],z<0||z>=this._options.cellWidth)continue;if(X<0||X>=this._options.cellHeight)continue;if(w=this.rooms[Z][Q],w.connections.length>0){if(w.connections[0][0]==z&&w.connections[0][1]==X)break}if(H=this.rooms[z][X],H.connections.length==0)H.connections.push([Z,Q]),this.connectedCells.push([z,X]),Z=z,Q=X,L=!0}while(D.length>0&&L==!1)}while(D.length>0)},U._connectUnconnectedRooms=function K(){var Z=this._options.cellWidth,Q=this._options.cellHeight;this.connectedCells=G.shuffle(this.connectedCells);var V,z,X;for(var L=0;L<this._options.cellWidth;L++)for(var w=0;w<this._options.cellHeight;w++)if(V=this.rooms[L][w],V.connections.length==0){var H=[0,2,4,6];H=G.shuffle(H),X=!1;do{var D=H.pop(),W=L+G0[8][D][0],M=w+G0[8][D][1];if(W<0||W>=Z||M<0||M>=Q)continue;if(z=this.rooms[W][M],X=!0,z.connections.length==0)break;for(var O=0;O<z.connections.length;O++)if(z.connections[O][0]==L&&z.connections[O][1]==w){X=!1;break}if(X)break}while(H.length);if(X)V.connections.push([z.cellx,z.celly]);else console.log("-- Unable to connect room.")}},U._createRandomRoomConnections=function K(){},U._createRooms=function K(){var Z=this._width,Q=this._height,V=this._options.cellWidth,z=this._options.cellHeight,X=Math.floor(this._width/V),L=Math.floor(this._height/z),w,H,D=this._options.roomWidth,W=this._options.roomHeight,M,O,j;for(var b=0;b<V;b++)for(var g=0;g<z;g++){if(M=X*b,O=L*g,M==0)M=1;if(O==0)O=1;if(w=G.getUniformInt(D[0],D[1]),H=G.getUniformInt(W[0],W[1]),g>0){j=this.rooms[b][g-1];while(O-(j.y+j.height)<3)O++}if(b>0){j=this.rooms[b-1][g];while(M-(j.x+j.width)<3)M++}var h=Math.round(G.getUniformInt(0,X-w)/2),d=Math.round(G.getUniformInt(0,L-H)/2);while(M+h+w>=Z)if(h)h--;else w--;while(O+d+H>=Q)if(d)d--;else H--;M=M+h,O=O+d,this.rooms[b][g].x=M,this.rooms[b][g].y=O,this.rooms[b][g].width=w,this.rooms[b][g].height=H;for(var i=M;i<M+w;i++)for(var Z0=O;Z0<O+H;Z0++)this.map[i][Z0]=0}},U._getWallPosition=function K(Z,Q){var V,z,X;if(Q==1||Q==3){if(V=G.getUniformInt(Z.x+1,Z.x+Z.width-2),Q==1)z=Z.y-2,X=z+1;else z=Z.y+Z.height+1,X=z-1;this.map[V][X]=0}else{if(z=G.getUniformInt(Z.y+1,Z.y+Z.height-2),Q==2)V=Z.x+Z.width+1,X=V-1;else V=Z.x-2,X=V+1;this.map[X][z]=0}return[V,z]},U._drawCorridor=function K(Z,Q){var V=Q[0]-Z[0],z=Q[1]-Z[1],X=Z[0],L=Z[1],w,H,D,W,M=[],O=Math.abs(V),j=Math.abs(z),b=G.getUniform(),g=b,h=1-b;if(H=V>0?2:6,D=z>0?4:0,O<j)w=Math.ceil(j*g),M.push([D,w]),M.push([H,O]),w=Math.floor(j*h),M.push([D,w]);else w=Math.ceil(O*g),M.push([H,w]),M.push([D,j]),w=Math.floor(O*h),M.push([H,w]);this.map[X][L]=0;while(M.length>0){W=M.pop();while(W[1]>0)X+=G0[8][W[0]][0],L+=G0[8][W[0]][1],this.map[X][L]=0,W[1]=W[1]-1}},U._createCorridors=function K(){var Z=this._options.cellWidth,Q=this._options.cellHeight,V,z,X,L,w;for(var H=0;H<Z;H++)for(var D=0;D<Q;D++){V=this.rooms[H][D];for(var W=0;W<V.connections.length;W++){if(z=V.connections[W],X=this.rooms[z[0]][z[1]],X.cellx>V.cellx)L=2,w=4;else if(X.cellx<V.cellx)L=4,w=2;else if(X.celly>V.celly)L=3,w=1;else L=1,w=3;this._drawCorridor(this._getWallPosition(V,L),this._getWallPosition(X,w))}}},B}(g0),mZ={Arena:IZ,Uniform:fZ,Cellular:kZ,Digger:gZ,EllerMaze:TZ,DividedMaze:hZ,IceyMaze:xZ,Rogue:_Z},cZ=function Y(){},yZ=0.5*(Math.sqrt(3)-1),e0=(3-Math.sqrt(3))/6,dZ=function(Y){q0(B,Y);function B(K){var Z;if(K===void 0)K=256;Z=Y.call(this)||this,Z._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var Q=[];for(var V=0;V<K;V++)Q.push(V);Q=G.shuffle(Q),Z._perms=[],Z._indexes=[];for(var z=0;z<2*K;z++)Z._perms.push(Q[z%K]),Z._indexes.push(Z._perms[z]%Z._gradients.length);return Z}var U=B.prototype;return U.get=function K(Z,Q){var V=this._perms,z=this._indexes,X=V.length/2,L=0,w=0,H=0,D,W=(Z+Q)*yZ,M=Math.floor(Z+W),O=Math.floor(Q+W),j=(M+O)*e0,b=M-j,g=O-j,h=Z-b,d=Q-g,i,Z0;if(h>d)i=1,Z0=0;else i=0,Z0=1;var $0=h-i+e0,H0=d-Z0+e0,C0=h-1+2*e0,_1=d-1+2*e0,m1=C(M,X),c1=C(O,X),Z1=0.5-h*h-d*d;if(Z1>=0){Z1*=Z1,D=z[m1+V[c1]];var $6=this._gradients[D];L=Z1*Z1*($6[0]*h+$6[1]*d)}var J1=0.5-$0*$0-H0*H0;if(J1>=0){J1*=J1,D=z[m1+i+V[c1+Z0]];var X6=this._gradients[D];w=J1*J1*(X6[0]*$0+X6[1]*H0)}var Q1=0.5-C0*C0-_1*_1;if(Q1>=0){Q1*=Q1,D=z[m1+1+V[c1+1]];var G6=this._gradients[D];H=Q1*Q1*(G6[0]*C0+G6[1]*_1)}return 70*(L+w+H)},B}(cZ),pZ={Simplex:dZ},U6=function(){function Y(U,K,Z,Q){if(Q===void 0)Q={};if(this._toX=U,this._toY=K,this._passableCallback=Z,this._options=Object.assign({topology:8},Q),this._dirs=G0[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var B=Y.prototype;return B._getNeighbors=function U(K,Z){var Q=[];for(var V=0;V<this._dirs.length;V++){var z=this._dirs[V],X=K+z[0],L=Z+z[1];if(!this._passableCallback(X,L))continue;Q.push([X,L])}return Q},Y}(),lZ=function(Y){q0(B,Y);function B(K,Z,Q,V){var z=Y.call(this,K,Z,Q,V)||this;return z._computed={},z._todo=[],z._add(K,Z,null),z}var U=B.prototype;return U.compute=function K(Z,Q,V){var z=Z+","+Q;if(!(z in this._computed))this._compute(Z,Q);if(!(z in this._computed))return;var X=this._computed[z];while(X)V(X.x,X.y),X=X.prev},U._compute=function K(Z,Q){while(this._todo.length){var V=this._todo.shift();if(V.x==Z&&V.y==Q)return;var z=this._getNeighbors(V.x,V.y);for(var X=0;X<z.length;X++){var L=z[X],w=L[0],H=L[1],D=w+","+H;if(D in this._computed)continue;this._add(w,H,V)}}},U._add=function K(Z,Q,V){var z={x:Z,y:Q,prev:V};this._computed[Z+","+Q]=z,this._todo.push(z)},B}(U6),nZ=function(Y){q0(B,Y);function B(K,Z,Q,V){var z;if(V===void 0)V={};return z=Y.call(this,K,Z,Q,V)||this,z._todo=[],z._done={},z}var U=B.prototype;return U.compute=function K(Z,Q,V){this._todo=[],this._done={},this._fromX=Z,this._fromY=Q,this._add(this._toX,this._toY,null);while(this._todo.length){var z=this._todo.shift(),X=z.x+","+z.y;if(X in this._done)continue;if(this._done[X]=z,z.x==Z&&z.y==Q)break;var L=this._getNeighbors(z.x,z.y);for(var w=0;w<L.length;w++){var H=L[w],D=H[0],W=H[1],M=D+","+W;if(M in this._done)continue;this._add(D,W,z)}}var O=this._done[Z+","+Q];if(!O)return;while(O)V(O.x,O.y),O=O.prev},U._add=function K(Z,Q,V){var z=this._distance(Z,Q),X={x:Z,y:Q,prev:V,g:V?V.g+1:0,h:z},L=X.g+X.h;for(var w=0;w<this._todo.length;w++){var H=this._todo[w],D=H.g+H.h;if(L<D||L==D&&z<H.h){this._todo.splice(w,0,X);return}}this._todo.push(X)},U._distance=function K(Z,Q){switch(this._options.topology){case 4:return Math.abs(Z-this._fromX)+Math.abs(Q-this._fromY);case 6:var V=Math.abs(Z-this._fromX),z=Math.abs(Q-this._fromY);return z+Math.max(0,(V-z)/2);case 8:return Math.max(Math.abs(Z-this._fromX),Math.abs(Q-this._fromY))}},B}(U6),rZ={Dijkstra:lZ,AStar:nZ},sZ=function(){function Y(U){this._scheduler=U,this._lock=1}var B=Y.prototype;return B.start=function U(){return this.unlock()},B.lock=function U(){return this._lock++,this},B.unlock=function U(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var K=this._scheduler.next();if(!K)return this.lock();var Z=K.act();if(Z&&Z.then)this.lock(),Z.then(this.unlock.bind(this))}return this},Y}(),oZ=function(){function Y(U,K){if(K===void 0)K={};this._reflectivityCallback=U,this._options={},K=Object.assign({passes:1,emissionThreshold:100,range:10},K),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(K)}var B=Y.prototype;return B.setOptions=function U(K){if(Object.assign(this._options,K),K&&K.range)this.reset();return this},B.setFOV=function U(K){return this._fov=K,this._fovCache={},this},B.setLight=function U(K,Z,Q){var V=K+","+Z;if(Q)this._lights[V]=typeof Q=="string"?c(Q):Q;else delete this._lights[V];return this},B.clearLights=function U(){this._lights={}},B.reset=function U(){return this._reflectivityCache={},this._fovCache={},this},B.compute=function U(K){var Z={},Q={},V={};for(var z in this._lights){var X=this._lights[z];Q[z]=[0,0,0],x(Q[z],X)}for(var L=0;L<this._options.passes;L++){if(this._emitLight(Q,V,Z),L+1==this._options.passes)continue;Q=this._computeEmitters(V,Z)}for(var w in V){var H=w.split(","),D=parseInt(H[0]),W=parseInt(H[1]);K(D,W,V[w])}return this},B._emitLight=function U(K,Z,Q){for(var V in K){var z=V.split(","),X=parseInt(z[0]),L=parseInt(z[1]);this._emitLightFromCell(X,L,K[V],Z),Q[V]=1}return this},B._computeEmitters=function U(K,Z){var Q={};for(var V in K){if(V in Z)continue;var z=K[V],X=void 0;if(V in this._reflectivityCache)X=this._reflectivityCache[V];else{var L=V.split(","),w=parseInt(L[0]),H=parseInt(L[1]);X=this._reflectivityCallback(w,H),this._reflectivityCache[V]=X}if(X==0)continue;var D=[0,0,0],W=0;for(var M=0;M<3;M++){var O=Math.round(z[M]*X);D[M]=O,W+=O}if(W>this._options.emissionThreshold)Q[V]=D}return Q},B._emitLightFromCell=function U(K,Z,Q,V){var z=K+","+Z,X;if(z in this._fovCache)X=this._fovCache[z];else X=this._updateFOV(K,Z);for(var L in X){var w=X[L],H=void 0;if(L in V)H=V[L];else H=[0,0,0],V[L]=H;for(var D=0;D<3;D++)H[D]+=Math.round(Q[D]*w)}return this},B._updateFOV=function U(K,Z){var Q=K+","+Z,V={};this._fovCache[Q]=V;var z=this._options.range;function X(L,w,H,D){var W=L+","+w,M=D*(1-H/z);if(M==0)return;V[W]=M}return this._fov.compute(K,Z,z,X.bind(this)),V},Y}(),aZ=m,iZ=o,tZ=WZ;J.Color=iZ,J.DEFAULT_HEIGHT=g1,J.DEFAULT_WIDTH=u1,J.DIRS=G0,J.Display=l0,J.Engine=sZ,J.EventQueue=Q6,J.FOV=bZ,J.KEYS=FZ,J.Lighting=oZ,J.Map=mZ,J.Noise=pZ,J.Path=rZ,J.RNG=G,J.Scheduler=AZ,J.StringGenerator=OZ,J.Text=tZ,J.Util=aZ,Object.defineProperty(J,"__esModule",{value:!0})})});var KJ=typeof window!=="undefined"?window.innerWidth:0,qJ=typeof window!=="undefined"?window.innerHeight:0;var l={cameraWidth:Math.floor(KJ/16),cameraHeight:Math.floor(qJ/16),chatLogMaxSize:100,chatLogMaxDisplaySize:8,debug:!0,fontSize:16,highlightEnemy:!0,showGrid:!0,showUI:!0,showTooltip:!0,showEnergy:1,zoom:1},d1={WIDTH:1024,HEIGHT:1024},B0={width:Math.floor(l.cameraWidth*(1/l.zoom)),height:Math.floor(l.cameraHeight*(1/l.zoom)),bg:"transparent",fontSize:Math.floor(l.fontSize*l.zoom),layout:"tile-gl",tileWidth:16,tileHeight:16,tileSet:null,tileMap:null,tileColorize:!0};function Y6(J,q){let $=J.entities[q];return`DEBUG: ${q} at ${$.mapId},${$.x},${$.y}`}class X1{name;description;energyDelta;constructor(J,q,$=0){this.name=J,this.description=q,this.energyDelta=$}}class V1{name;description;constructor(J,q){this.name=J,this.description=q}}class M0{key;description;constructor(J,q){this.key=J,this.description=q}}class T0{name;description;tooltip;constructor(J,q,$=""){this.name=J,this.description=q,this.tooltip=$}}class P0{name;description;icon;color;energyMax;unlockCondition;constructor(J,q,$,G=100){this.name=J,this.description=q,this.icon=$,this.energyMax=G,this.color="white",this.unlockCondition=null}}class n0{name;description;color;constructor(J,q,$){this.name=J,this.description=q,this.color=$}}class Y0{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(J,q,$,G="cyberyellow",P=0,R=0,C=0,v=0,N=0,I=[]){this.name=J,this.description=q,this.icon=$,this.color=G,this.energyDelta=P,this.matter=R,this.gold=C,this.damage=v,this.energyCost=N,this.effects=I}}class r{name;description;tooltip;icon;fg;bg;energyDelta;constructor(J,q,$="",G=null,P="white",R="black",C=0){this.name=J,this.description=q,this.tooltip=$,this.icon=G,this.fg=P,this.bg=R,this.energyDelta=C}}var F={actions:{Enter:new X1("Enter","Enter a portal or plant atmosphere"),Launch:new X1("Launch","Launch into space",-10),Wait:new X1("Wait","Wait one turn in place")},ais:{aggrorange:new V1("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new V1("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new V1("guardian","Idles at a position and only fights back if engaged"),interactenrage:new V1("interactenrage","Gets hostile when getting talked to too often!")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",mutedcyan:"#2cc9c5",mutedyellow:"#b0a216",mutedmagenta:"#a716b0",mutedgreen:"#5ca821",mutedblue:"#1628b0",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new M0("N","Move/interact/combat north"),E:new M0("E","Move/interact/combat east"),S:new M0("S","Move/interact/combat south"),W:new M0("W","Move/interact/combat west"),A:new M0("A","Primary action, confirm"),B:new M0("B","Take a break, cancel"),"1":new M0("1","Secondary action, first quick slot"),"2":new M0("2","Tertiary action, second quick slot"),M:new M0("M","Menu"),"#":new M0("#","Open prompt")},constants:{DRAIN_MATTER_COST:500,DRAIN_GOLD_COST:1,MIN_TURN_SPEED_IN_MS:80},dialogs:{bot_bar_aerobot_backstage:"Huh? How did you get here?",bot_bar_aerobot_charger:"Feel free to recharge on those chargepads and enjoy the show.",bot_bar_aerobot_spa_down:"Have you been to our shop, yet?",bot_bar_aerobot_spa_up:"Ahhhh, so refreshing!",bot_bar_aerobot_welcome:"Welcome to the Bot Bar. How may we serve you?",bot_dormitory_aerobot_down:"Would you please go to your own pod?",bot_dormitory_aerobot_up:"Pod, sweet pod!",bot_dormitory_graffiti:"Not all pods are created equal! Rad!",bot_dormitory_workbot_left:"This pod is taken, go away!",bot_dormitory_workbot_right:"Brzzzt! Brzzzt!",bot_factory_workbot_assembly:"The assembly line is unblocked!",bot_factory_workbot_drain:"Don't come too close to the drain or you'll lose your stuff!",bot_factory_workbot_forebot:"What are you doing here? Get back to work!",bot_factory_workbot_sewers:"Sewage water is spilling over again.",bot_factory_workbot_workwork:"Work, work!",bot_factory_workbot_wrench:"I lost a wrench somewhere here...",bot_prison_aerobot:"I'm innocent! I'm innocent! I'm innocent! Beep!",bot_prison_workbot:"Thanks for freeing me! Guess I don't need this Pickaxe anymore...",bot_stadium_botracing:"Now this is botracing!",bot_station_graffiti:"Yo! The factory has a hidden backdoor!",bot_station_graffiti_statues:"One statue isn't like the others! Ey!",bot_station_pioneer:"You shall not pass!",manual_spirit:"Weeee!",manual_aerobot:"Huh? Why don't you have a hull?",manual_workbot:"Work, work!",manual_cleaner:"Follow the rules! Okay?",manual_pioneer:"Don't talk to me, weakling!",playground_label_top_portal:"Goes to top left side of star",playground_label_bottom_portal:"Goes to top left corner of solar system",shop_instance_aerobot_shopper:"It's shiny!!!",shop_instance_shopkeeper:"Welcome! What does your engine desire?",shop_instance_workbot_shopper:"This shop is not so secret after all..."},effects:{Recharger:new T0("Recharger","Doubles energy gained from chargepads"),RockCrusher:new T0("Rock Crusher","Mines rock"),Screwing:new T0("Screwing","Unscrews the sewer portal covers"),WallCrusher:new T0("Wall Crusher","Tears down weak walls"),WaterImmunity:new T0("Water Immunity","No damage taken from water"),WaterShield:new T0("Water Shield","Reduces damage taken from water")},entities:{movableboulder:new P0("Boulder","A movable rock","o",2),movablebox:new P0("Box","A movable box","x",2),Spirit:new P0("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new P0("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new P0("WorkBot","Basic factory worker","B"),Cleaner:new P0("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new P0("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Graffiticyan:new P0("Graffiti","Writing on the wall","zc",2),Graffitimagenta:new P0("Graffiti","Writing on the wall","zm",2),Graffitiyellow:new P0("Graffiti","Writing on the wall","zy",2),Valkyrie:new P0("Valkyrie","Airbourne war logistics","V",160),Pioneer:new P0("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200),RoboRat:new P0("RoboRat","Minor self-assembled critter","r",5)},factions:{Critters:new n0("Critters","Small pests","cyberyellow"),Enraged:new n0("Enraged","Always hostile faction","cybermagenta"),Spirits:new n0("Spirits","Default player faction","white"),Pyrates:new n0("Pyrates","Default enemy faction","cybermagenta"),Guardians:new n0("Guardians","Bot station guardians","cybercyan")},items:{battery:new Y0("Battery","Increases maximum energy","b","cyberyellow",10),chest:new Y0("Chest","A chest. What might be inside?","i","cyberyellow"),energy:new Y0("Energy","Energy pack","e","cyberyellow",10),gold:new Y0("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new Y0("Goo","A minor matter source","goo","gray",0,1),junk:new Y0("Junk","Broken bot","%","gray",0,1),matter:new Y0("Matter","A pile of stuff","m","gray",0,100),broom:new Y0("Broom","Sweeps the floor","ib","cyberyellow",0,0,0,-10,-1),cheat:new Y0("Cheat","Most powerful tool, totally legit","icheat","cyberyellow",0,0,0,-500,-1,["Recharger","Rock Crusher","Screwing","Wall Crusher","Water Shield"]),hammer:new Y0("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["Wall Crusher"]),pickaxe:new Y0("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["Rock Crusher"]),ratbite:new Y0("Rat Bite","Only rats have this","irb","cyberyellow",0,0,0,-5,-1,["Water Immunity"]),shocker:new Y0("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1,["Recharger"]),trident:new Y0("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["Water Shield"]),wrench:new Y0("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1,["Screwing"])},maps:{bot_bar:`!
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
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:l.showGrid?new r("void","Just nothing here","",".","gray"):new r("void","Just nothing here"),voidtrue:new r("voidtrue","Really nothing here and you shouldn't get there ever!","","_"),voidhidden:new r("voidhidden","Looks like a wall, but isn't!","","#","gray","black"),water:new r("water","Rust and other dangers await","Water","~","cybercyan","cyberblue",-2),watersewage:new r("watersewage","Rust, goo and other dangers await","Sewage Water","~~","cyberyellow","cybergreen",-4),drain:new r("drain","Drains gold, matter and some of your energy","Drain","*","cybermagenta","black",-5),rock:new r("rock","Hidden treasures may await","Rock","'","white","gray"),tree:new r("tree","Lots of trees make a forest","Tree","t","brown","black"),wall:new r("wall","A strong wall","","#","gray","black"),wallstatueaerobot:new r("wallstatueaerobot","A small statue looking like an AeroBot","","sa","gray","black"),wallstatuecleaner:new r("wallstatuecleaner","A small statue looking like a Cleaner","","sc","gray","black"),wallstatuepioneer:new r("wallstatuepioneer","A small statue looking like a Pioneer","","sp","gray","black"),wallstatueworkbot:new r("wallstatueworkbot","A small statue looking like a WorkBot","","sb","gray","black"),wallweak:new r("wallweak","A weakened wall","Weak Wall","+","gray","black"),chargepad:new r("chargepad","Recharges energy and health","Chargepad","=","cyberyellow","black",2),movenorth:new r("movenorth","Moves you north","","^^","cyberyellow"),moveeast:new r("moveeast","Moves you east","",">>","cyberyellow"),movesouth:new r("movesouth","Moves you south","","vv","cyberyellow"),movewest:new r("movewest","Moves you west","","<<","cyberyellow"),portal:new r("portal","Gateway to another map","Portal","O","cyberyellow","gray"),portalclosed:new r("portalclosed","Closed gateway to another map","Closed Portal","Oc","black","gray"),portalhidden:new r("portalhidden","Hidden gateway to another map","","#","gray","black"),portallauncher:new r("portallauncher","Launches into space","Launch to Space","O","cyberyellow","gray"),portalsewers:new r("portalsewers","Needs some tool to open","Sewer Gate","#~","gray","black"),portalstartworkbot:new r("portalstartworkbot","Start playing as a WorkBot","Play as a WorkBot","OB","white"),portalstartaerobot:new r("portalstartaerobot","Start playing as an AeroBot","Play as an AeroBot","OA","white"),"_portalstart?":new r("_portalstart?","Not unlocked, yet!","?","O?","white"),spacerock:new r("spacerock","Mountains as seen from space, non-blocking!","","'s","white","gray"),spacetree:new r("spacetree","Forest as seen from space","","ts","brown","darkgray"),spacewater:new r("spacewater","Water as seen from space, not dangerous!","","~s","cybercyan","cyberblue"),spacevoid:new r("spacevoid","Void/ground as seen from space","",".s","darkgray","darkgray"),spacevoidstarwhite:new r("spacevoidstarwhite","Space with a white background star","",".f","white"),spacevoidstaryellow:new r("spacevoidstaryellow","Space with a yellow background star","",".y","cyberyellow"),star:new r("star","It's hot, really hot!","Star","§","cyberyellow","cyberyellow",-100),terminal:new r("terminal","A computer terminal","Terminal","$","cyberyellow"),tv:new r("tv","A big billboard screen","TV","!","black","cyberyellow")},uitexts:{}};function w6(J){if(Object.hasOwn(F.dialogs,J))return F.dialogs[J];return`FIXME: ${J} needs localization!`}function L0(J,q){return J.chatLog.push(q),J.chatLog=J.chatLog.slice(-l.chatLogMaxSize),J}function E0(J,q,$,G,P=0,R=0,C={}){let v={id:q,type:$,mapId:G,x:P,y:R,energy:10,energyMax:10,gold:0,matter:0,message:null,interactions:0,options:C};return J=Y1(J,v,$),J.entities[v.id]=v,J}function G1(J,q){return J.entities[q]=void 0,delete J.entities[q],J.tools[q]=void 0,J}function h0(J,q){let $=Object.keys(J.entities),G=[];for(let P=0;P<$.length;P++){let R=J.entities[$[P]];if(R.mapId===q)G.push(R)}return G}function B1(J,q,$,G){let P=h0(J,q).filter((R)=>R.x===$&&R.y===G);if(P.length>0)return P[0];return null}function Y1(J,q,$){if(q.type=$,q.energy=$.energyMax,q.energyMax=$.energyMax,q.gold=0,q.matter=0,!O0(q))J.tools[q.id]=void 0;return J}function L6(J,q,$){if(q===$)return J;if(q.options.faction===$.options.faction||p1($)){if($.options.dialog){let G=$?.options?.name?$.options.name:$.type.name;J=L0(J,G+": "+w6($.options.dialog)),$.interactions++}}else{let G=q.id,P=$.id;J._combatQueue.push({entityId:G,otherEntityId:P})}if($.interactions>=3&&$.options?.ai===F.ais.interactenrage)$.options.faction=F.factions.Enraged;return J}function O0(J){return J.type===F.entities.movableboulder||J.type===F.entities.movablebox}function p1(J){return J.type===F.entities.Graffiticyan||J.type===F.entities.Graffitimagenta||J.type===F.entities.Graffitiyellow}function w1(J,q){let $={A:F.actions.Wait,B:F.actions.Wait};if(!!J.lastSpacePositionByEntity[q.id]&&q.energy>Math.abs(F.actions.Launch.energyDelta))$.A=F.actions.Launch;let P=J.maps[q.mapId].getTile(q.x,q.y);if(!!P.options.mapId&&"x"in P.options&&"y"in P.options)$.A=F.actions.Enter;return $}function l1(J,q,$){let G=J._eventSubscribers[q];if(G)for(let P=0;P<G.length;P++){let R=G[P];J=R(J,$)}return J}function n1(J,q,$){if(q in J._eventSubscribers);else J._eventSubscribers[q]=[];return J._eventSubscribers[q].push($),J}function K1(J,q,$,G=0,P=0){let C={id:L1($,G,P),type:q,mapId:$,x:G,y:P,energy:q.energyDelta,gold:q.gold,matter:q.matter};return J.items[C.id]=C,J}function H6(J,q,$,G=0,P=0){let R=F.items.junk,v={id:L1($,G,P),type:R,mapId:$,x:G,y:P,energy:R.energyDelta,gold:R.gold,matter:q};return J.items[v.id]=v,J}function q1(J,q,$,G=0,P=0,R,C){let N={id:L1($,G,P),type:q,mapId:$,x:G,y:P,energy:q.energyDelta,gold:R,matter:C};return J.items[N.id]=N,J}function L1(J,q,$){return"item,"+J+","+q+","+$}function r1(J,q){return J.items[q]=void 0,delete J.items[q],J}function H1(J,q){let $=Object.keys(J.items),G=[];for(let P=0;P<$.length;P++){let R=J.items[$[P]];if(R.mapId===q)G.push(R)}return G}function P1(J,q,$,G){let P=L1(q,$,G);if(P in J.items)return J.items[P];return null}function D1(J,q){return J.tools[q]}function P6(J,q,$){if(O0(q))return J;if(!UJ(q,$))return J;if(zJ($))J=s1(J,q.id,$.type);else{if($.type===F.items.battery)q.energyMax+=$.energy;if(J._energyQueue.push({entityId:q.id,energyDelta:$.energy}),q.id.startsWith("player"))J=L0(J,`Picked up ${$.type.name}.`)}return q.gold+=$.gold,q.matter+=$.matter,r1(J,$.id),J}function s1(J,q,$){let G={type:$};if(J.tools[q]=G,q.startsWith("player"))J=L0(J,`Equipped ${$.name}.`);return J}function zJ(J){return J.type.energyCost<0}function UJ(J,q){return J.gold+q.gold>=0&&J.matter+q.matter>=0}/*!
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
 */var $J=function(J){var q={};function $(G){if(q[G])return q[G].exports;var P=q[G]={i:G,l:!1,exports:{}};return J[G].call(P.exports,P,P.exports,$),P.l=!0,P.exports}return $.m=J,$.c=q,$.d=function(G,P,R){$.o(G,P)||Object.defineProperty(G,P,{enumerable:!0,get:R})},$.r=function(G){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(G,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(G,"__esModule",{value:!0})},$.t=function(G,P){if(1&P&&(G=$(G)),8&P)return G;if(4&P&&typeof G=="object"&&G&&G.__esModule)return G;var R=Object.create(null);if($.r(R),Object.defineProperty(R,"default",{enumerable:!0,value:G}),2&P&&typeof G!="string")for(var C in G)$.d(R,C,function(v){return G[v]}.bind(null,C));return R},$.n=function(G){var P=G&&G.__esModule?function(){return G.default}:function(){return G};return $.d(P,"a",P),P},$.o=function(G,P){return Object.prototype.hasOwnProperty.call(G,P)},$.p="/bin/",$($.s=0)}([function(J,q,$){var G={},P=$(1),R=$(2),C=$(3);J.exports=G;var v=1;G.js=function(){var N,I,m,J0=!1,V0={},n={},c={},Q0={},x=!0,_={},p=[],U0=Number.MAX_VALUE,s=!1;this.setAcceptableTiles=function(f){f instanceof Array?m=f:!isNaN(parseFloat(f))&&isFinite(f)&&(m=[f])},this.enableSync=function(){J0=!0},this.disableSync=function(){J0=!1},this.enableDiagonals=function(){s=!0},this.disableDiagonals=function(){s=!1},this.setGrid=function(f){N=f;for(var S=0;S<N.length;S++)for(var A=0;A<N[0].length;A++)n[N[S][A]]||(n[N[S][A]]=1)},this.setTileCost=function(f,S){n[f]=S},this.setAdditionalPointCost=function(f,S,A){c[S]===void 0&&(c[S]={}),c[S][f]=A},this.removeAdditionalPointCost=function(f,S){c[S]!==void 0&&delete c[S][f]},this.removeAllAdditionalPointCosts=function(){c={}},this.setDirectionalCondition=function(f,S,A){Q0[S]===void 0&&(Q0[S]={}),Q0[S][f]=A},this.removeAllDirectionalConditions=function(){Q0={}},this.setIterationsPerCalculation=function(f){U0=f},this.avoidAdditionalPoint=function(f,S){V0[S]===void 0&&(V0[S]={}),V0[S][f]=1},this.stopAvoidingAdditionalPoint=function(f,S){V0[S]!==void 0&&delete V0[S][f]},this.enableCornerCutting=function(){x=!0},this.disableCornerCutting=function(){x=!1},this.stopAvoidingAllAdditionalPoints=function(){V0={}},this.findPath=function(f,S,A,o,e){var K0=function(S0){J0?e(S0):setTimeout(function(){e(S0)})};if(m===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(N===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(f<0||S<0||A<0||o<0||f>N[0].length-1||S>N.length-1||A>N[0].length-1||o>N.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(f!==A||S!==o){for(var D0=N[o][A],X0=!1,j0=0;j0<m.length;j0++)if(D0===m[j0]){X0=!0;break}if(X0!==!1){var w0=new P;w0.openList=new C(function(S0,p0){return S0.bestGuessDistance()-p0.bestGuessDistance()}),w0.isDoneCalculating=!1,w0.nodeHash={},w0.startX=f,w0.startY=S,w0.endX=A,w0.endY=o,w0.callback=K0,w0.openList.push(t(w0,w0.startX,w0.startY,null,1));var t0=v++;return _[t0]=w0,p.push(t0),t0}K0(null)}else K0([])},this.cancelPath=function(f){return f in _&&(delete _[f],!0)},this.calculate=function(){if(p.length!==0&&N!==void 0&&m!==void 0)for(I=0;I<U0;I++){if(p.length===0)return;J0&&(I=0);var f=p[0],S=_[f];if(S!==void 0)if(S.openList.size()!==0){var A=S.openList.pop();if(S.endX!==A.x||S.endY!==A.y)A.list=0,A.y>0&&E(S,A,0,-1,1*T(A.x,A.y-1)),A.x<N[0].length-1&&E(S,A,1,0,1*T(A.x+1,A.y)),A.y<N.length-1&&E(S,A,0,1,1*T(A.x,A.y+1)),A.x>0&&E(S,A,-1,0,1*T(A.x-1,A.y)),s&&(A.x>0&&A.y>0&&(x||k(N,m,A.x,A.y-1,A)&&k(N,m,A.x-1,A.y,A))&&E(S,A,-1,-1,1.4*T(A.x-1,A.y-1)),A.x<N[0].length-1&&A.y<N.length-1&&(x||k(N,m,A.x,A.y+1,A)&&k(N,m,A.x+1,A.y,A))&&E(S,A,1,1,1.4*T(A.x+1,A.y+1)),A.x<N[0].length-1&&A.y>0&&(x||k(N,m,A.x,A.y-1,A)&&k(N,m,A.x+1,A.y,A))&&E(S,A,1,-1,1.4*T(A.x+1,A.y-1)),A.x>0&&A.y<N.length-1&&(x||k(N,m,A.x,A.y+1,A)&&k(N,m,A.x-1,A.y,A))&&E(S,A,-1,1,1.4*T(A.x-1,A.y+1)));else{var o=[];o.push({x:A.x,y:A.y});for(var e=A.parent;e!=null;)o.push({x:e.x,y:e.y}),e=e.parent;o.reverse();var K0=o;S.callback(K0),delete _[f],p.shift()}}else S.callback(null),delete _[f],p.shift();else p.shift()}};var E=function(f,S,A,o,e){var K0=S.x+A,D0=S.y+o;if((V0[D0]===void 0||V0[D0][K0]===void 0)&&k(N,m,K0,D0,S)){var X0=t(f,K0,D0,S,e);X0.list===void 0?(X0.list=1,f.openList.push(X0)):S.costSoFar+e<X0.costSoFar&&(X0.costSoFar=S.costSoFar+e,X0.parent=S,f.openList.updateItem(X0))}},k=function(f,S,A,o,e){var K0=Q0[o]&&Q0[o][A];if(K0){var D0=u(e.x-A,e.y-o);if(!function(){for(var j0=0;j0<K0.length;j0++)if(K0[j0]===D0)return!0;return!1}())return!1}for(var X0=0;X0<S.length;X0++)if(f[o][A]===S[X0])return!0;return!1},u=function(f,S){if(f===0&&S===-1)return G.TOP;if(f===1&&S===-1)return G.TOP_RIGHT;if(f===1&&S===0)return G.RIGHT;if(f===1&&S===1)return G.BOTTOM_RIGHT;if(f===0&&S===1)return G.BOTTOM;if(f===-1&&S===1)return G.BOTTOM_LEFT;if(f===-1&&S===0)return G.LEFT;if(f===-1&&S===-1)return G.TOP_LEFT;throw new Error("These differences are not valid: "+f+", "+S)},T=function(f,S){return c[S]&&c[S][f]||n[N[S][f]]},t=function(f,S,A,o,e){if(f.nodeHash[A]!==void 0){if(f.nodeHash[A][S]!==void 0)return f.nodeHash[A][S]}else f.nodeHash[A]={};var K0=a(S,A,f.endX,f.endY);if(o!==null)var D0=o.costSoFar+e;else D0=0;var X0=new R(o,S,A,D0,K0);return f.nodeHash[A][S]=X0,X0},a=function(f,S,A,o){var e,K0;return s?(e=Math.abs(f-A))<(K0=Math.abs(S-o))?1.4*e+K0:1.4*K0+e:(e=Math.abs(f-A))+(K0=Math.abs(S-o))}},G.TOP="TOP",G.TOP_RIGHT="TOP_RIGHT",G.RIGHT="RIGHT",G.BOTTOM_RIGHT="BOTTOM_RIGHT",G.BOTTOM="BOTTOM",G.BOTTOM_LEFT="BOTTOM_LEFT",G.LEFT="LEFT",G.TOP_LEFT="TOP_LEFT"},function(J,q){J.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(J,q){J.exports=function($,G,P,R,C){this.parent=$,this.x=G,this.y=P,this.costSoFar=R,this.simpleDistanceToTarget=C,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(J,q,$){J.exports=$(4)},function(J,q,$){var G,P,R;(function(){var C,v,N,I,m,J0,V0,n,c,Q0,x,_,p,U0,s;N=Math.floor,Q0=Math.min,v=function(E,k){return E<k?-1:E>k?1:0},c=function(E,k,u,T,t){var a;if(u==null&&(u=0),t==null&&(t=v),u<0)throw new Error("lo must be non-negative");for(T==null&&(T=E.length);u<T;)t(k,E[a=N((u+T)/2)])<0?T=a:u=a+1;return[].splice.apply(E,[u,u-u].concat(k)),k},J0=function(E,k,u){return u==null&&(u=v),E.push(k),U0(E,0,E.length-1,u)},m=function(E,k){var u,T;return k==null&&(k=v),u=E.pop(),E.length?(T=E[0],E[0]=u,s(E,0,k)):T=u,T},n=function(E,k,u){var T;return u==null&&(u=v),T=E[0],E[0]=k,s(E,0,u),T},V0=function(E,k,u){var T;return u==null&&(u=v),E.length&&u(E[0],k)<0&&(k=(T=[E[0],k])[0],E[0]=T[1],s(E,0,u)),k},I=function(E,k){var u,T,t,a,f,S;for(k==null&&(k=v),f=[],T=0,t=(a=function(){S=[];for(var A=0,o=N(E.length/2);0<=o?A<o:A>o;0<=o?A++:A--)S.push(A);return S}.apply(this).reverse()).length;T<t;T++)u=a[T],f.push(s(E,u,k));return f},p=function(E,k,u){var T;if(u==null&&(u=v),(T=E.indexOf(k))!==-1)return U0(E,0,T,u),s(E,T,u)},x=function(E,k,u){var T,t,a,f,S;if(u==null&&(u=v),!(t=E.slice(0,k)).length)return t;for(I(t,u),a=0,f=(S=E.slice(k)).length;a<f;a++)T=S[a],V0(t,T,u);return t.sort(u).reverse()},_=function(E,k,u){var T,t,a,f,S,A,o,e,K0;if(u==null&&(u=v),10*k<=E.length){if(!(a=E.slice(0,k).sort(u)).length)return a;for(t=a[a.length-1],f=0,A=(o=E.slice(k)).length;f<A;f++)u(T=o[f],t)<0&&(c(a,T,0,null,u),a.pop(),t=a[a.length-1]);return a}for(I(E,u),K0=[],S=0,e=Q0(k,E.length);0<=e?S<e:S>e;0<=e?++S:--S)K0.push(m(E,u));return K0},U0=function(E,k,u,T){var t,a,f;for(T==null&&(T=v),t=E[u];u>k&&T(t,a=E[f=u-1>>1])<0;)E[u]=a,u=f;return E[u]=t},s=function(E,k,u){var T,t,a,f,S;for(u==null&&(u=v),t=E.length,S=k,a=E[k],T=2*k+1;T<t;)(f=T+1)<t&&!(u(E[T],E[f])<0)&&(T=f),E[k]=E[T],T=2*(k=T)+1;return E[k]=a,U0(E,S,k,u)},C=function(){function E(k){this.cmp=k!=null?k:v,this.nodes=[]}return E.push=J0,E.pop=m,E.replace=n,E.pushpop=V0,E.heapify=I,E.updateItem=p,E.nlargest=x,E.nsmallest=_,E.prototype.push=function(k){return J0(this.nodes,k,this.cmp)},E.prototype.pop=function(){return m(this.nodes,this.cmp)},E.prototype.peek=function(){return this.nodes[0]},E.prototype.contains=function(k){return this.nodes.indexOf(k)!==-1},E.prototype.replace=function(k){return n(this.nodes,k,this.cmp)},E.prototype.pushpop=function(k){return V0(this.nodes,k,this.cmp)},E.prototype.heapify=function(){return I(this.nodes,this.cmp)},E.prototype.updateItem=function(k){return p(this.nodes,k,this.cmp)},E.prototype.clear=function(){return this.nodes=[]},E.prototype.empty=function(){return this.nodes.length===0},E.prototype.size=function(){return this.nodes.length},E.prototype.clone=function(){var k;return(k=new E).nodes=this.nodes.slice(0),k},E.prototype.toArray=function(){return this.nodes.slice(0)},E.prototype.insert=E.prototype.push,E.prototype.top=E.prototype.peek,E.prototype.front=E.prototype.peek,E.prototype.has=E.prototype.contains,E.prototype.copy=E.prototype.clone,E}(),P=[],(R=typeof(G=function(){return C})=="function"?G.apply(q,P):G)===void 0||(J.exports=R)}).call(this)}]);function D6(J,q,$,G,P){let R=new $J.js;R.setGrid(J),R.setAcceptableTiles([0]),R.enableSync();let C=null;return R.findPath(q,$,G,P,function(v){C=v}),R.calculate(),C}function W0(){return"player"}function W6(J,q,$,G){return Math.abs(J-$)+Math.abs(q-G)}function W1(J){return[...Array(J).keys()]}function F6(J){let q=XJ(J),$=J.entities[W0()];for(let G=0;G<q.length;G++){let P=q[G],R=J.entities[P],C=J._AIs[P],v=W6($.x,$.y,R.x,R.y);if($.options.faction!==R.options.faction&&v<=C.aggroRange){let N=J.maps[J.currentMapId].asMovementMap(),I=D6(N,R.x,R.y,$.x,$.y);if(I){if(I=I.slice(1),I.length>v)I=null}C.path=I}if(!!R.message&&R.message.includes("OBEY"));}for(let G=0;G<q.length;G++){let P=q[G],R=J.entities[P],C=J._AIs[P];if(C.path){let v=C.path[0],N=v.x-R.x,I=v.y-R.y;J=F0(J,R,N,I)}}return J}function XJ(J){let q=h0(J,J.currentMapId),$=[];for(let G=0;G<q.length;G++){let P=q[G];if(P.options.ai)$.push(P.id)}return $}function R6(J,q,$){let G=J.entities[q],P=8;switch($){case F.ais.aggrorange:P=8;break;case F.ais.aggrorangeshort:P=2;break;case F.ais.guardian:P=1;break;case F.ais.interactenrage:P=2;break;default:}return J._AIs[q]={entityId:q,type:$,aggroRange:P,startMap:G.mapId,startX:G.x,startY:G.y,path:null},J}function F1(J,q){return J._AIs[q]=void 0,delete J._AIs[q],J}function O6(J){let q=void 0;while(typeof(q=J._despawnQueue.shift())!=="undefined")J=G1(J,q),J=F1(J,q);return J}function j6(J){return J}class A0{mapId;x;y;entityOrItemName;options;constructor(J,q,$,G,P={}){this.mapId=J,this.x=q,this.y=$,this.entityOrItemName=G,this.options=P}generateId(){return this.mapId+","+this.entityOrItemName+","+this.x+","+this.y+"/g"}}function f0(J,q){if(GJ(q.entityOrItemName)){let $=q.options;if(Object.hasOwn($,"ai"))$.ai=F.ais[$.ai];if(Object.hasOwn($,"faction"))$.faction=F.factions[$.faction];let G=q.generateId();if(J=E0(J,G,F.entities[q.entityOrItemName],q.mapId,q.x,q.y,$),Object.hasOwn($,"equip")&&M6($.equip))J=s1(J,G,F.items[$.equip]);if(Object.hasOwn($,"ai"))J=R6(J,G,$.ai)}else if(M6(q.entityOrItemName))J=K1(J,F.items[q.entityOrItemName],q.mapId,q.x,q.y);return J}function GJ(J){return Object.hasOwn(F.entities,J)}function M6(J){return Object.hasOwn(F.items,J)}function x0(J,q={}){return{type:J,options:q}}function C6(J){return J.type.name.startsWith("space")}function E6(J){for(let q in F.maps){let $=m0(F.maps[q]);J.maps[q]=$;for(let G of $._spawnCommands)J=f0(J,G);$._spawnCommands=[]}return J}function A6(J,q){let $=H1(J,q);for(let P=0;P<$.length;P++){let R=$[P];J=r1(J,R.id)}let G=h0(J,q);for(let P=0;P<G.length;P++){let R=G[P];J=G1(J,R.id),J=F1(J,R.id)}return J.maps[q]=void 0,delete J.maps[q],J}class _0{id;widthTiles;heightTiles;seed;_tiles;_cacheMovementMap;_spawnCommands;_tvCount;tvMessage;constructor(J,q,$,G=[]){this.id=J,this.widthTiles=q,this.heightTiles=$,this.seed=null,this._tiles=G,this._cacheMovementMap=null,this._spawnCommands=[],this._tvCount=0,this.tvMessage=null}getTile(J,q){if(J>=0&&J<this.widthTiles&&q>=0&&q<this.heightTiles){let $=q*this.widthTiles+J;return this._tiles[$]}return{}}setTile(J,q,$,G={}){this._cacheMovementMap=null;let P=q*this.widthTiles+J,R=this._tiles[P];return this._tiles[P]=x0($,G),R}setTvMessage(J){if(this._tvCount){let q=0;for(let $ of this._tiles)if($.type===F.tiles.tv&&q<J.length)$.options.sign=J[q],q++;if(J==="")J=null;this.tvMessage=J}}pasteOnto(J,q=0,$=0){for(let G=0;G<J.heightTiles;G++)for(let P=0;P<J.widthTiles;P++){let R=J.getTile(P,G);if(R.type!==F.tiles.voidtrue)this.setTile(P+q,G+$,R.type,R.options)}return this}circular(){let J=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let q=-J;q<=J;q++)for(let $=-J;$<=J;$++)if($*$+q*q>=J*J)this.setTile($+J-1,q+J-1,F.tiles.voidtrue);return this}sample(J,q){let $=Math.floor(this.widthTiles/J),G=Math.floor(this.heightTiles/q),P=[];for(let R=0;R<q;R++)for(let C=0;C<J;C++){let v={};for(let n=0;n<G;n++)for(let c=0;c<$;c++){let Q0=this.getTile(C*$+c,R*G+n);if(v[Q0.type.name])v[Q0.type.name]+=1;else v[Q0.type.name]=1}let N="",I=0;for(let[n,c]of Object.entries(v))if(c>I)N=n,I=c;let m="space"+N,J0=F.tiles[m]||F.tiles.spacevoid,V0={mapId:this.id,x:C*$,y:R*G};P.push(x0(J0,V0))}return new _0("__sampled_"+J+"_"+q+"_"+this.id,J,q,P)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let J=new Array(this.heightTiles);for(let q=0;q<this.heightTiles;q++){J[q]=new Array(this.widthTiles);for(let $=0;$<this.widthTiles;$++){let G=q*this.widthTiles+$,R=this._tiles[G].type;if(J[q][$]=0,o1(R))J[q][$]=1}}return this._cacheMovementMap=J,J}}function m0(J){let q=J.split(/\r?\n/),$=J[0],G="",P=0,R=0,C={},v=[],N=[],I=0,m="";for(let V0=0;V0<q.length;V0++){let n=q[V0];if(n.startsWith($)){if(n.startsWith($+"!id"))G=n.slice(5);else if(n.startsWith($+"!size")){let c=n.split(" ").slice(1);P=Number(c[0]),R=Number(c[1])}else if(n.startsWith($+"!spawn")){let c=n.split(" ").slice(1),Q0={};if(c.length>3){let x=c.slice(3);for(let _ of x){let p=_.split("=");Q0[p[0]]=p[1]}}v.push(new A0(G,Number(c[0]),Number(c[1]),c[2],Q0))}else if(n.startsWith($+"!")){let c=n[2],Q0=n.slice(4);C[c]=Q0}}else for(let c=0;c<n.length;c++){let Q0=n[c],x=C[Q0];if(l.debug&&!x)console.log("DEBUG Broken map: "+G);let _=x.split(" "),p={};if(x.startsWith("portal ")||x.startsWith("portalhidden ")||x.startsWith("portalsewers ")||x.startsWith("portallauncher ")||x.startsWith("portalstart"))x=_[0],p.mapId=_[1],p.x=Number(_[2]),p.y=Number(_[3]);if(x.startsWith("wall ")&&_.length>=2)x="wall",p.sign=_[1];if(x.startsWith("terminal ")){if(x="terminal",_.length>=2)p.screen=_[1]}if(x.startsWith("tv ")&&_.length>=2){if(x="tv",_.length===3)m=_[2];I++}N.push(x0(F.tiles[x],p))}}if(l.debug&&!(I===0||I===12))console.log("DEBUG Broken map: "+G+" (invalid TV size "+I+", allowed are 0 or 12 characters per map)");let J0=new _0(G,P,R,N);return J0._tvCount=I,J0.setTvMessage(m),J0._spawnCommands=v,J0}function o1(J){return J===F.tiles.rock||J===F.tiles.portalclosed||J===F.tiles.portalsewers||J===F.tiles.tv||J.name.startsWith("wall")}function a1(J){return J===F.tiles.water||J===F.tiles.watersewage}function S6(J,q,$){switch($){case F.commands.N:J=F0(J,q,0,-1);break;case F.commands.W:J=F0(J,q,-1,0);break;case F.commands.S:J=F0(J,q,0,1);break;case F.commands.E:J=F0(J,q,1,0);break;case F.commands.A:J=N6(J,q,F.commands.A);break;case F.commands.B:J=N6(J,q,F.commands.B);break;default:}return J}function F0(J,q,$,G,P=0){let R=J.maps[q.mapId],C=B1(J,R.id,q.x+$,q.y+G),v=J.tools[q.id];if(q.message=R.tvMessage,C)if(O0(C)){if(!O0(q)&&P<1)J=F0(J,C,$,G,P++),J=F0(J,q,$,G,P++)}else J=L6(J,q,C);else if(YJ(R,q,$,G))J=v6(J,R,q,$,G),J._energyQueue.push({entityId:q.id,energyDelta:-1*P});else if(wJ(R,q,v,$,G)){if(R.setTile(q.x+$,q.y+G,F.tiles.void).type===F.tiles.rock){let I=J.rng.getPercentage();if(I<=1)J=K1(J,F.items.matter,R.id,q.x+$,q.y+G);else if(I<=34)J=K1(J,F.items.junk,R.id,q.x+$,q.y+G)}J._energyQueue.push({entityId:q.id,energyDelta:v.type.energyCost})}else if(LJ(R,q,v,$,G))J=v6(J,R,q,$,G),J._energyQueue.push({entityId:q.id,energyDelta:v.type.energyCost});return J}function N6(J,q,$){let P=w1(J,q)[$.key],C=J.maps[q.mapId].getTile(q.x,q.y);switch(P){case F.actions.Enter:J=b6(J,q,C);break;case F.actions.Launch:J=BJ(J,q,C);case F.actions.Wait:break;default:}return J}function v6(J,q,$,G,P){$.x+=G,$.y+=P;let R=P1(J,$.mapId,$.x,$.y);if(R)J=P6(J,$,R);let C=q.getTile($.x,$.y);if(C.type.name.startsWith("portal"))J=b6(J,$,C);if(C.type===F.tiles.terminal)q.setTvMessage("OBEYWORKKILL");if(C.type.name.startsWith("move"))switch(C.type.name){case"movenorth":J=F0(J,$,0,-1);break;case"moveeast":J=F0(J,$,1,0);break;case"movesouth":J=F0(J,$,0,1);break;case"movewest":J=F0(J,$,-1,0);break;default:}return J}function b6(J,q,$){if(q.id.startsWith("player"))J.currentMapId=$.options.mapId;if(C6($))J.lastSpacePositionByEntity[q.id]={mapId:q.mapId,x:q.x,y:q.y};else J.lastSpacePositionByEntity[q.id]=void 0,delete J.lastSpacePositionByEntity[q.id];let G={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:$.type,newMapId:$.options.mapId,newX:$.options.x,newY:$.options.y};return q.mapId=$.options.mapId,q.x=$.options.x,q.y=$.options.y,J=l1(J,"entitymap.updated.event",G),J}function BJ(J,q,$){if(J.lastSpacePositionByEntity[q.id]){if(q.id.startsWith("player"))J.currentMapId=J.lastSpacePositionByEntity[q.id].mapId;let G={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:$.type,newMapId:J.lastSpacePositionByEntity[q.id].mapId,newX:J.lastSpacePositionByEntity[q.id].x,newY:J.lastSpacePositionByEntity[q.id].y};q.mapId=G.newMapId,q.x=G.newX,q.y=G.newY,J._energyQueue.push({entityId:q.id,energyDelta:F.actions.Launch.energyDelta}),J.lastSpacePositionByEntity[q.id]=void 0,delete J.lastSpacePositionByEntity[q.id],J=l1(J,"entitymap.updated.event",G)}return J}function I6(J){for(let q in J.entities){let $=J.entities[q],G=J.tools[q],R=J.maps[$.mapId].getTile($.x,$.y),C=R.type.energyDelta;if(R.type===F.tiles.chargepad&&G?.type.effects.includes(F.effects.Recharger.name))C*=2;else if(a1(R.type)&&G?.type.effects.includes(F.effects.WaterImmunity.name))C=0;else if(a1(R.type)&&G?.type.effects.includes(F.effects.WaterShield.name))C/=2;else if(R.type===F.tiles.drain){let v=Math.min($.gold,F.constants.DRAIN_GOLD_COST),N=Math.min($.matter,F.constants.DRAIN_MATTER_COST);$.gold-=v,$.matter-=N}if(C!==0)J._energyQueue.push({entityId:q,energyDelta:C})}return J}function f6(J,q){let $=J.entities[q.entityId];switch(q.oldTileType){case F.tiles.portalstartaerobot:J=Y1(J,$,F.entities.AeroBot),J=L0(J,`Booting up as an ${F.entities.AeroBot.name}...`);break;case F.tiles.portalstartworkbot:J=Y1(J,$,F.entities.WorkBot),J=L0(J,`Booting up as a ${F.entities.WorkBot.name}...`);break;default:}return J}function YJ(J,q,$,G){let P=q.x+$,R=q.y+G,C=J.getTile(P,R).type;return P>=0&&P<J.widthTiles&&R>=0&&R<J.heightTiles&&!o1(C)}function wJ(J,q,$,G,P){let R=q.x+G,C=q.y+P,v=J.getTile(R,C).type;if($)return $.type.effects.includes(F.effects.WallCrusher.name)&&v===F.tiles.wallweak||$.type.effects.includes(F.effects.RockCrusher.name)&&v===F.tiles.rock;return!1}function LJ(J,q,$,G,P){let R=q.x+G,C=q.y+P,v=J.getTile(R,C).type;if($)return $.type.effects.includes(F.effects.Screwing.name)&&v===F.tiles.portalsewers;return!1}var g6=y1(M1(),1);class k0{seed;_rotRng;constructor(J=1337){this.seed=J,this._rotRng=g6.RNG.clone(),this._rotRng.setSeed(J)}getPercentage(){return this._rotRng.getPercentage()}getItem(J){return this._rotRng.getItem(J)}}function T6(J,q){if(q.seed===1337)J=f0(J,new A0(q.id,130,127,"Valkyrie",{faction:"Spirits"})),J=f0(J,new A0(q.id,124,127,"Valkyrie",{faction:"Spirits"})),J=f0(J,new A0(q.id,127,130,"trident"));else{let $=new k0(q.seed);for(let G=0;G<q.heightTiles;G++)for(let P=0;P<q.widthTiles;P++){let R=q.getTile(P,G);if($.getPercentage()<=1&&(R.type===F.tiles.void||R.type===F.tiles.tree)){let C=$.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(C){case"Deviant":case"Pioneer":J=f0(J,new A0(q.id,P,G,C,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":J=f0(J,new A0(q.id,P,G,C));break}}}}return J}var O1=y1(M1(),1);var DJ=1337,h6=55;function x6(J,q=DJ){O1.RNG.setSeed(q);let $=new O1.Noise.Simplex,G=256,P=256,R=[];for(let N=0;N<P;N++)for(let I=0;I<G;I++){let m=$.get(I/h6,N/h6),J0;if(m<=-0.5)J0=F.tiles.water;else if(m<=0)J0=F.tiles.void;else if(m<0.5)J0=F.tiles.tree;else J0=F.tiles.rock;R.push(x0(J0))}let C="simplex="+q,v=new _0(C,G,P,R);return v.seed=q,J.maps[C]=v,J}var WJ=1337;function m6(J,q=WJ){let $=_6(1024,1024,F.tiles.void);$.id="solarsystem="+q,J.maps[$.id]=$;let G=new k0(q),P=new k0(q),R=G.getItem([2,3,4,5,6,7,8,9,10,11,12]),C=128,v=512-C,N=Math.floor(v/R);$=FJ($,G);let I=_6(128,128,F.tiles.voidtrue);RJ(I,63,63,62,F.tiles.star),MJ(I,63,63,F.tiles.star),$.pasteOnto(I,448,448);for(let n=C;n<512;n+=N){let c=G.getItem([-1,1])*G.getItem(W1(n)),Q0=G.getItem([-1,1])*Math.floor(Math.sqrt(n*n-c*c));c+=512,Q0+=512;let x=G.getItem([16,24,32]),_=Math.floor(x/2)-1;J=x6(J,q);let p=J.maps["simplex="+q],U0=F.map_snippets.launcher;U0=U0.replace("!!O portallauncher space 0 0",`!!O portallauncher ${$.id} ${c} ${Q0}`);let s=m0(U0),E=P.getItem(W1(p.widthTiles-s.widthTiles)),k=P.getItem(W1(p.heightTiles-s.heightTiles));p.pasteOnto(s,E,k),J=T6(J,p);let u=p.sample(x,x).circular();$.pasteOnto(u,c-(_+1),Q0-(_+1)),q++}let m=F.map_snippets.space_bot_station;m=m.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let J0=m0(m);$.pasteOnto(J0,583,398);let V0=m0(F.map_snippets.square_falcon);return $.pasteOnto(V0,590,373),J}function _6(J,q,$){let G=[];for(let C=0;C<J*q;C++)G.push(x0($));return new _0("__temp",J,q,G)}function FJ(J,q){for(let $=0;$<J.heightTiles;$++)for(let G=0;G<J.widthTiles;G++)if(q.getPercentage()<=1)J.setTile(G,$,q.getItem([F.tiles.spacevoidstarwhite,F.tiles.spacevoidstaryellow]));return J}function RJ(J,q,$,G,P){let R=1-G,C=1,v=-2*G,N=0,I=G;J.setTile(q,$+G,P),J.setTile(q,$-G,P),J.setTile(q+G,$,P),J.setTile(q-G,$,P);while(N<I){if(R>=0)I-=1,v+=2,R+=v;N+=1,C+=2,R+=C,J.setTile(q+N,$+I,P),J.setTile(q-N,$+I,P),J.setTile(q+N,$-I,P),J.setTile(q-N,$-I,P),J.setTile(q+I,$+N,P),J.setTile(q-I,$+N,P),J.setTile(q+I,$-N,P),J.setTile(q-I,$-N,P)}return J}function MJ(J,q,$,G){let{widthTiles:P,heightTiles:R}=J,C=[];C.push({x:q,y:$});let v=void 0;while(typeof(v=C.shift())!=="undefined"){let N=v,I=v;if(v.x+1<P)I={x:v.x+1,y:v.y};while(J.getTile(N.x,N.y).type!==G){if(J.setTile(N.x,N.y,G),N.y+1<R){if(J.getTile(N.x,N.y+1).type!==G)C.push({x:N.x,y:N.y+1})}if(N.y-1>=0){if(J.getTile(N.x,N.y-1).type!==G)C.push({x:N.x,y:N.y-1})}if(N.x-1>=0)N.x-=1;else break}while(J.getTile(I.x,I.y).type!==G){if(J.setTile(I.x,I.y,G),I.y+1<R){if(J.getTile(I.x,I.y+1).type!==G)C.push({x:I.x,y:I.y+1})}if(I.y-1>=0){if(J.getTile(I.x,I.y-1).type!==G)C.push({x:I.x,y:I.y-1})}if(I.x+1<P)I.x+=1;else break}}return J}function c6(J,q){if(q?.oldMapId?.startsWith("shop_instance")){J=A6(J,q.oldMapId);let $=J.maps[q.newMapId],G=$.getTile(q.newX,q.newY);$.setTile(q.newX,q.newY,G.type,{mapId:"shop_instance",x:q.oldX,y:q.oldY})}if(q?.newMapId?.startsWith("shop_instance")){let $=m0(F.map_snippets.shop_instance);$.id+="_"+q.oldMapId+"_"+q.entityId,$.setTile(q.newX,q.newY,F.tiles.portal,{mapId:q.oldMapId,x:q.oldX,y:q.oldY}),J.maps[q.oldMapId].setTile(q.oldX,q.oldY,q.oldTileType,{mapId:$.id,x:q.newX,y:q.newY});let P=J.entities[q.entityId];if(P.id.startsWith("player"))J.currentMapId=$.id;if(P.mapId=$.id,P.x=q.newX,P.Y=q.newY,J.maps[$.id]=$,J=q1(J,F.items.hammer,$.id,4,4,0,-200),J=q1(J,F.items.pickaxe,$.id,4,6,0,-200),J=q1(J,F.items.battery,$.id,4,8,0,-200),J=q1(J,F.items.gold,$.id,4,10,1,-1e4),J=E0(J,$.id+"_shopkeeper",F.entities.AeroBot,$.id,6,2,{faction:P.options.faction,dialog:"shop_instance_shopkeeper",name:"Shopkeeper"}),q?.oldMapId.startsWith("bot_stadium"))J=E0(J,$.id+"_shopper",F.entities.WorkBot,$.id,1,12,{faction:P.options.faction,dialog:"shop_instance_workbot_shopper"});else if(q?.oldMapId.startsWith("bot_bar"))J=E0(J,$.id+"_shopper",F.entities.AeroBot,$.id,4,11,{faction:P.options.faction,dialog:"shop_instance_aerobot_shopper"})}return J}function y6(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!0,actionLog:[],chatLog:[],currentMapId:"",entities:{},items:{},lastSpacePositionByEntity:{},maps:{},rng:new k0,tools:{},tvs:{}}}function d6(J){let q=void 0;while(typeof(q=J._combatQueue.shift())!=="undefined"){let $=-1,G=-5,P=D1(J,q.entityId);if(P)$=P.type.energyCost,G=-1*Math.abs(P.type.damage);J._energyQueue.push({entityId:q.entityId,energyDelta:$}),J._energyQueue.push({entityId:q.otherEntityId,energyDelta:G});let R=J.entities[q.entityId],C=J.entities[q.otherEntityId],v=R?.options?.name?R.options.name:R.type.name,N=C?.options?.name?C.options.name:C.type.name;J=L0(J,`${v} did ${Math.abs(G)} damage to ${N} at cost of ${Math.abs($)} energy.`)}return J}function p6(J){let q=void 0,$=new Set;while(typeof(q=J._energyQueue.shift())!=="undefined"){let G=J.entities[q.entityId];if(G.energy=Math.min(G.energy+q.energyDelta,G.energyMax),G.energy<=0)$.add(G.id)}for(let G of $){let P=J.entities[G];J._despawnQueue.push(G);let R=P?.options?.name?P.options.name:P.type.name;if(!O0(P)){let C=Math.max(1,Math.floor(P.energyMax/3));J=H6(J,C,P.mapId,P.x,P.y),J=L0(J,`${R} destroyed leaving behind Junk.`)}}return J}function l6(J){return J=F6(J),J=d6(J),J=I6(J),J=p6(J),J=O6(J),J=j6(J),J}class j1{state;constructor(){}init(){return this.state=y6(),this.state=n1(this.state,"entitymap.updated.event",f6),this.state=n1(this.state,"entitymap.updated.event",c6),this.state=m6(this.state),this.state=E6(this.state),this.state.currentMapId="botmos_hull_selection",this.state=E0(this.state,W0(),F.entities.Spirit,this.state.currentMapId,9,5,{faction:F.factions.Spirits,name:"Player"}),this.state}update(J,q=!1){let $=this.state.entities[W0()];if($){if(J){switch(J){case F.commands.M:this.state._menuOpen=!this.state._menuOpen;break;case F.commands["#"]:this.state=L0(this.state,Y6(this.state,W0()));break;default:this.state=S6(this.state,$,J),this.state=l6(this.state)}this.state.actionLog.push(J.key)}}else this.state=L0(this.state,`Game over! ${this.state.actionLog.length} turns.`),console.log(`Game over! ${this.state.actionLog.length} turns: ${this.state.actionLog.join("")}`),this.state.currentMapId="botmos_hull_selection",this.state=E0(this.state,W0(),F.entities.Spirit,this.state.currentMapId,9,5,{faction:F.factions.Spirits,name:"Player"});return this.state}play(J){for(let q=0;q<J.length;q++){let $=J[q];this.update(F.commands[$],!0)}return this.state}}var y={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1,slash:!1},t1=[],C1=void 0,r6=void 0,n6=0;document.body.addEventListener("keydown",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":y.up=!0,z0(J);break;case"a":case"ArrowLeft":y.left=!0,z0(J);break;case"s":case"ArrowDown":y.down=!0,z0(J);break;case"d":case"ArrowRight":y.right=!0,z0(J);break;case"x":y.a=!0,z0(J);break;case" ":case"y":case"z":y.b=!0,z0(J);break;case"m":y.menu=!0,z0(J);break;case"#":case"/":y.slash=!0,z0(J);break;default:}N0(s6())});function N0(J){let q=Date.now();if(C1!==void 0&&q-n6>=F.constants.MIN_TURN_SPEED_IN_MS)n6=q,C1(J)}document.body.addEventListener("keyup",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":y.up=!1,z0(J);break;case"a":case"ArrowLeft":y.left=!1,z0(J);break;case"s":case"ArrowDown":y.down=!1,z0(J);break;case"d":case"ArrowRight":y.right=!1,z0(J);break;case"x":y.a=!1,z0(J);break;case" ":case"y":case"z":y.b=!1,z0(J);break;case"m":y.menu=!1,z0(J);break;case"#":case"/":y.slash=!1,z0(J);default:}});document.body.addEventListener("click",function(J){let{clientX:q,clientY:$}=J,P=document.body.clientWidth/3,C=document.body.clientHeight/3;if(q>=P&&q<2*P&&$<C)N0(F.commands.N),z0(J);else if(q<P&&$<C)N0(F.commands.B),z0(J);else if(q>=2*P&&$<C)N0(F.commands.A),z0(J);else if(q<P&&$>=C&&$<2*C)N0(F.commands.W),z0(J);else if(q>=2*P&&$>=C&&$<2*C)N0(F.commands.E),z0(J);else if(q>=P&&q<2*P&&$>=2*C)N0(F.commands.S),z0(J);else if(q>=P&&q<2*P&&$>=C&&$<2*C)N0(F.commands.M),z0(J)});function z0(J){J.preventDefault(),J.stopPropagation()}var z1=null;function OJ(){let J=null;if(y.right)J=F.commands.E;if(y.left)J=F.commands.W;if(y.down)J=F.commands.S;if(y.up)J=F.commands.N;if(y.up&&y.right){if(J===F.commands.N&&z1===F.commands.N)J=F.commands.E}if(y.up&&y.left){if(J===F.commands.N&&z1===F.commands.N)J=F.commands.W}if(y.down&&y.right){if(J===F.commands.S&&z1===F.commands.S)J=F.commands.E}if(y.down&&y.left){if(J===F.commands.S&&z1===F.commands.S)J=F.commands.W}if(y.a)J=F.commands.A;if(y.b)J=F.commands.B;if(y.menu)J=F.commands.M;if(y.slash)J=F.commands["#"];if(z1=J,J!==null)t1.push(J)}function s6(){OJ();let J=t1.shift()||null;return t1=[],J}document.body.addEventListener("mousemove",function(J){if(J.defaultPrevented)return;if(C1!==void 0)r6(J),z0(J)});var o6=void 0;window.addEventListener("gamepadconnected",(J)=>{o6=setInterval(function(){let q=navigator.getGamepads()[J.gamepad?.index];if(y.right=q.buttons[15].pressed,y.left=q.buttons[14].pressed,y.down=q.buttons[13].pressed,y.up=q.buttons[12].pressed,y.a=q.buttons[0].pressed||q.buttons[2].pressed,y.b=q.buttons[1].pressed||q.buttons[3].pressed,y.menu=q.buttons[9].pressed,y.right||y.left||y.down||y.up||y.a||y.b||y.menu)N0(s6())},100)});window.addEventListener("gamepaddisconnected",(J)=>{clearInterval(o6)});function a6(J){C1=J}function i6(J){r6=J}var KZ=y1(M1(),1);var E1={__10:[0,0],__11:[16,0],__12:[32,0],__13:[48,0],__14:[64,0],__15:[80,0],__1:[96,0],_1:[112,0],__2:[128,0],_2:[144,0],__3:[160,0],_3:[176,0],__4:[192,0],_4:[208,0],__5:[224,0],_5:[240,0],__6:[256,0],_6:[272,0],__7:[288,0],_7:[304,0],__8:[320,0],_8:[336,0],__9:[352,0],_9:[368,0],AeroBot_a:[384,0],AeroBot:[400,0],battery:[416,0],broom:[432,0],chargepad:[448,0],cheat:[464,0],chest:[480,0],Cleaner_a:[496,0],Cleaner:[512,0],Deviant:[528,0],drain:[544,0],energy:[560,0],gold:[576,0],goo:[592,0],Graffiticyan:[608,0],Graffitimagenta:[624,0],Graffitiyellow:[640,0],hammer:[656,0],junk:[672,0],matter:[688,0],movableboulder:[704,0],movablebox:[720,0],moveeast:[736,0],movenorth:[752,0],movesouth:[768,0],movewest:[784,0],pickaxe:[800,0],Pioneer_a:[816,0],Pioneer:[832,0],portalclosed:[848,0],portalhidden:[864,0],portallauncher:[880,0],portal:[896,0],portalsewers:[912,0],portalstartaerobot:[928,0],"_portalstart?":[944,0],portalstartworkbot:[960,0],RoboRat_a:[976,0],RoboRat:[992,0],rock:[1008,0],shocker:[1024,0],spacerock:[1040,0],spacetree:[1056,0],spacevoid:[1072,0],spacevoidstarwhite:[1088,0],spacevoidstaryellow:[1104,0],spacewater_a:[1120,0],spacewater:[1136,0],Spirit_a:[1152,0],Spirit:[1168,0],star:[1184,0],terminal:[1200,0],tree:[1216,0],trident:[1232,0],tv:[1248,0],Valkyrie_a:[1264,0],Valkyrie:[1280,0],voidhidden:[1296,0],void:[1312,0],voidtrue:[1328,0],wall0:[1344,0],wall1:[1360,0],wall2:[1376,0],walla_:[1392,0],wallA:[1408,0],wallb_:[1424,0],wallB:[1440,0],wallc_:[1456,0],wallC:[1472,0],walld_:[1488,0],wallD:[1504,0],walle_:[1520,0],wallE:[1536,0],wallf_:[1552,0],wallF:[1568,0],wallg_:[1584,0],wallG:[1600,0],wallh_:[1616,0],wallH:[1632,0],walli_:[1648,0],wallI:[1664,0],wallj_:[1680,0],wallJ:[1696,0],wallk_:[1712,0],wallK:[1728,0],walll_:[1744,0],wallL:[1760,0],wallm_:[1776,0],wallM:[1792,0],walln_:[1808,0],wallN:[1824,0],wallo_:[1840,0],wallO:[1856,0],"wall(":[1872,0],"wall)":[1888,0],"wall+":[1904,0],"wall,":[1920,0],"wall.":[1936,0],wall:[1952,0],"wall:":[1968,0],wall_:[1984,0],"wall|":[2000,0],wallp_:[2016,0],wallP:[2032,0],wallq_:[2048,0],wallQ:[2064,0],wallr_:[2080,0],wallR:[2096,0],walls_:[2112,0],wallS:[2128,0],wallstatueaerobot:[2144,0],wallstatuecleaner:[2160,0],wallstatuepioneer:[2176,0],wallstatueworkbot:[2192,0],wallt_:[2208,0],wallT:[2224,0],wallu_:[2240,0],wallU:[2256,0],wallv_:[2272,0],wallV:[2288,0],wallweak:[2304,0],wallw_:[2320,0],wallW:[2336,0],wallx_:[2352,0],wallX:[2368,0],wally_:[2384,0],wallY:[2400,0],wallz_:[2416,0],wallZ:[2432,0],water_a:[2448,0],water:[2464,0],watersewage_a:[2480,0],watersewage:[2496,0],WorkBot_a:[2512,0],WorkBot:[2528,0],wrench:[2544,0]};var o0=document.createElement("div");o0.id="ui";document.body.appendChild(o0);var A1=JZ(),r0=JZ(),t6=jJ(),v0=document.createElement("div");v0.replaceChildren(A1,r0,t6);o0.replaceChildren(v0);var v1=document.createElement("div");v1.style.display="flex";v1.style.justifyContent="space-between";var N1=document.createElement("div");N1.id="uichatlog";var e6=document.createElement("div");e6.id="uitooltip";v1.replaceChildren(N1,e6);o0.appendChild(v1);var e1=document.createElement("div");e1.id="uimousetooltip";document.body.appendChild(e1);async function ZZ(J,q=0){if(!l.showUI)return;let $=W0(),G=J.entities[$],P="";if(G){s0(A1,G.type.name),A1.dataset.tooltip="Player hull: "+G.type.name;let R="",C=D1(J,$);if(C){s0(r0,C.type.name.toLowerCase());let m=C.type;r0.dataset.tooltip=`Player tool: ${m.name} (${Math.abs(m.damage)} damage, ${m.energyCost} energy)`}else s0(r0,null),r0.dataset.tooltip=void 0;let v="";if(G.matter>0)v=`${G.matter}M `;let N="";if(G.gold>0)N=`${G.gold}G `;let I=w1(J,G);if(P=" "+G.energy+"/"+G.energyMax+" "+R+N+v+"Y:"+I.B.name+" X:"+I.A.name,o0.style.flexDirection="column-reverse",G.y-q>=B0.height-3)o0.style.flexDirection="column";if(v0.style.background="#000",G.energy/G.energyMax<=0.2)v0.style.color="#000",v0.style.background="#f00";else v0.style.color="#74ee15",v0.style.background="#000"}else s0(A1,null),s0(r0,null),P="Game over!",v0.style.color="#000",v0.style.background="#f00";if(t6.innerText=P,J._menuOpen&&!!J.chatLog.length){let R=J.chatLog.slice(-l.chatLogMaxDisplaySize);N1.innerText=R.join(`
`)}else N1.innerText=""}function JZ(){let J=document.createElement("span");return s0(J,null),J.style.height=`${l.fontSize}px`,J.style.display="inline-block",J}function jJ(){let J=document.createElement("span");return J.style.display="inline-block",J.style.marginLeft=`${l.fontSize/2}px`,J}function s0(J,q){if(q){let $=E1[q][0];J.style.background=`url('build/tiles.png') -${$}px 0`,J.style.width=`${l.fontSize}px`}else J.style.width="0px"}function QZ(){return e1}var y0="_a",qZ=document.createElement("img");qZ.src="build/tiles.png";B0.tileSet=qZ;B0.tileMap=AJ();var i0=new KZ.Display(B0);document.body.appendChild(i0.getContainer());var zZ=0,UZ=0,a0=void 0;function CJ(J,q,$=!1){a0=J;let G=J.currentMapId,P=J.maps[G],R=$?y0:"",C=0,v=0;if(P.widthTiles<q.width)C=Math.floor((q.width-P.widthTiles)/2),q.x=0;if(P.heightTiles<q.height)v=Math.floor((q.height-P.heightTiles)/2),q.y=0;zZ=q.x-C,UZ=q.y-v;let N={},I={},m={};for(let x=0;x<q.height;x++)for(let _=0;_<q.width;_++){let p=P.getTile(q.x+_,q.y+x),U0="";if(p?.type)if(p.options.sign)U0="#"+p.options.sign;else U0=p.type.icon;if(U0){let s=[C+_,v+x].toString();N[s]=[U0+R],I[s]=["transparent"],m[s]=["transparent"]}}let J0=H1(J,G);for(let x=0;x<J0.length;x++){let _=J0[x],p=C+_.x-q.x,U0=v+_.y-q.y,s=[p,U0].toString();if(N[s])N[s].push(_.type.icon+R),I[s].push("transparent"),m[s].push("transparent");else N[s]=[_.type.icon+R],I[s]=["transparent"],m[s]=["transparent"]}let V0=W0(),n=J.entities[V0],c=((n||{}).options||{}).faction||void 0,Q0=h0(J,G);for(let x=0;x<Q0.length;x++){let _=Q0[x],p=C+_.x-q.x,U0=v+_.y-q.y,s="transparent";if(l.highlightEnemy&&!!c&&!O0(_)&&!p1(_))s=c===_.options.faction?"rgba(116, 238, 21, 0.5)":"rgba(240, 0, 255, 0.5)";if(_===n)s="transparent";let E=[p,U0].toString();if(N[E])N[E].push(_.type.icon+R),I[E].push(s),m[E].push("transparent");else N[E]=[_.type.icon+R],I[E]=[s],m[E]=["transparent"];if(l.showEnergy!==0){let k=l.showEnergy===1?16:10,u=l.showEnergy===1?"__":"_",T=Math.ceil(_.energy/_.energyMax*k);if(T<k)N[E].push(u+T),I[E].push("transparent"),m[E].push("transparent")}}i0.clear();for(let[x,_]of Object.entries(N)){let p=x.split(",");i0.draw(Number(p[0]),Number(p[1]),_,I[x],m[x])}}var VZ={x:0,y:0},S1=0;async function d0(J){let q=J.entities[W0()],$=q?q:VZ,G=EJ($);if(CJ(J,G,S1%2==0),ZZ(J,G.y),VZ=$,S1++,S1>=128)S1=0}async function $Z(){i0._backend.setOptions(B0)}function XZ(J){return[J[0]+zZ,J[1]+UZ]}function GZ(J){if(!a0)return{tile:null,entity:null,item:null};let q=a0.currentMapId,$=a0.maps[q],G=J[0],P=J[1],R=$.getTile(G,P),C=B1(a0,q,G,P),v=P1(a0,q,G,P);return{tile:R,entity:C,item:v}}function EJ(J){return{x:Math.min(Math.max(0,J.x-Math.floor(B0.width/2)),d1.WIDTH-B0.width),y:Math.min(Math.max(0,J.y-Math.floor(B0.height/2)),d1.HEIGHT-B0.height),width:B0.width,height:B0.height}}function AJ(){let J={};for(let[q,$]of Object.entries(E1)){let G=q.endsWith(y0),P="";if(G)q=q.substring(0,q.length-y0.length),P=y0;if(q.startsWith("wall")&&(q.length===5||q.length===6))J["#"+q.substring(4,5)+P]=$;else if(Object.hasOwn(F.tiles,q))J[F.tiles[q].icon+P]=$;else if(Object.hasOwn(F.entities,q))J[F.entities[q].icon+P]=$;else if(Object.hasOwn(F.items,q))J[F.items[q].icon+P]=$;else J[q+P]=$}for(let[q,$]of Object.entries(J))if(!q.endsWith(y0)&&!Object.hasOwn(J,q+y0))J[q+y0]=$;return J}async function BZ(J){if(!l.showUI||!l.showTooltip)return;let q="";if(J.target){if(J.target?.dataset?.tooltip)q+=J.target.dataset.tooltip}let $=i0.eventToPosition(J);if($[0]!==-1){let C=XZ($),v=GZ(C);if(v.entity){let N=v.entity?.options?.name?v.entity.options.name:v.entity.type.name;q+=N}if(v.item){if(q!=="")q+=`
`;q+=v.item.type.name}if(!!v?.tile?.type&&v.tile?.type.tooltip!==""){if(q!=="")q+=`
`;q+=v.tile.type.tooltip}}let G=typeof window!=="undefined"?window.innerHeight:0,P=Math.floor(G/2),R=QZ();if(q!==""){if(R.innerText=q,R.style.left=J.x+20+"px",R.style.top=J.y+20+"px",J.y>P)R.style.top=J.y-20+"px";R.style.display="inline-block"}else R.style.display="none"}var R0=new j1;window.onload=function(){d0(R0.init())};window.onresize=async function(){let J=typeof window!=="undefined"?window.innerWidth:0,q=typeof window!=="undefined"?window.innerHeight:0;l.cameraWidth=Math.floor(J/l.fontSize),l.cameraHeight=Math.floor(q/l.fontSize),B0.width=Math.floor(l.cameraWidth*(1/l.zoom)),B0.height=Math.floor(l.cameraHeight*(1/l.zoom)),await $Z(),d0(R0.state)};a6(function(J){d0(R0.update(J))});i6(BZ);if(!window.BMActionLog)window.BMActionLog=function(){return R0.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(J){d0(R0.play(J))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){l.debug=!l.debug,d0(R0.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){l.showUI=!l.showUI,d0(R0.state)};if(l.debug){if(!window.BMDebugState)window.BMDebugState=function(){return R0.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let J=Object.keys(R0.state.maps).length,q=Object.keys(R0.state.entities).length,$=Object.keys(R0.state.items).length,G=Object.keys(R0.state.tools).length;return`Maps: ${J}, Entities: ${q}, Items: ${$}, Tools: ${G}`}}document.body.focus();
