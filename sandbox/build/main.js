var _Q=Object.create;var{getPrototypeOf:mQ,defineProperty:KJ,getOwnPropertyNames:yQ}=Object;var pQ=Object.prototype.hasOwnProperty;var uZ=(J,z,$)=>{$=J!=null?_Q(mQ(J)):{};let G=z||!J||!J.__esModule?KJ($,"default",{value:J,enumerable:!0}):$;for(let P of yQ(J))if(!pQ.call(G,P))KJ(G,P,{get:()=>J[P],enumerable:!0});return G};var cQ=(J,z)=>()=>(z||J((z={exports:{}}).exports,z),z.exports);var PZ=cQ((HZ,SJ)=>{function m0(J){if(J===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return J}function J7(J,z){var $=typeof Symbol!=="undefined"&&J[Symbol.iterator]||J["@@iterator"];if($)return($=$.call(J)).next.bind($);if(Array.isArray(J)||($=Q7(J))||z&&J&&typeof J.length==="number"){if($)J=$;var G=0;return function(){if(G>=J.length)return{done:!0};return{done:!1,value:J[G++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q7(J,z){if(!J)return;if(typeof J==="string")return vJ(J,z);var $=Object.prototype.toString.call(J).slice(8,-1);if($==="Object"&&J.constructor)$=J.constructor.name;if($==="Map"||$==="Set")return Array.from(J);if($==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($))return vJ(J,z)}function vJ(J,z){if(z==null||z>J.length)z=J.length;for(var $=0,G=new Array(z);$<z;$++)G[$]=J[$];return G}function K0(J,z){J.prototype=Object.create(z.prototype),J.prototype.constructor=J,pZ(J,z)}function pZ(J,z){return pZ=Object.setPrototypeOf?Object.setPrototypeOf.bind():function $(G,P){return G.__proto__=P,G},pZ(J,z)}(function(J,z){typeof HZ==="object"&&typeof SJ!=="undefined"?z(HZ):typeof define==="function"&&define.amd?define(["exports"],z):(J=typeof globalThis!=="undefined"?globalThis:J||self,z(J.ROT={}))})(HZ,function(J){var z=0.00000000023283064365386963,$=function(){function Y(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var B=Y.prototype;return B.getSeed=function U(){return this._seed},B.setSeed=function U(K){return K=K<1?1/K:K,this._seed=K,this._s0=(K>>>0)*z,K=K*69069+1>>>0,this._s1=K*z,K=K*69069+1>>>0,this._s2=K*z,this._c=1,this},B.getUniform=function U(){var K=2091639*this._s0+this._c*z;return this._s0=this._s1,this._s1=this._s2,this._c=K|0,this._s2=K-this._c,this._s2},B.getUniformInt=function U(K,Z){var Q=Math.max(K,Z),V=Math.min(K,Z);return Math.floor(this.getUniform()*(Q-V+1))+V},B.getNormal=function U(K,Z){if(K===void 0)K=0;if(Z===void 0)Z=1;var Q,V,q;do Q=2*this.getUniform()-1,V=2*this.getUniform()-1,q=Q*Q+V*V;while(q>1||q==0);var X=Q*Math.sqrt(-2*Math.log(q)/q);return K+X*Z},B.getPercentage=function U(){return 1+Math.floor(this.getUniform()*100)},B.getItem=function U(K){if(!K.length)return null;return K[Math.floor(this.getUniform()*K.length)]},B.shuffle=function U(K){var Z=[],Q=K.slice();while(Q.length){var V=Q.indexOf(this.getItem(Q));Z.push(Q.splice(V,1)[0])}return Z},B.getWeightedValue=function U(K){var Z=0;for(var Q in K)Z+=K[Q];var V=this.getUniform()*Z,q,X=0;for(q in K)if(X+=K[q],V<X)return q;return q},B.getState=function U(){return[this._s0,this._s1,this._s2,this._c]},B.setState=function U(K){return this._s0=K[0],this._s1=K[1],this._s2=K[2],this._c=K[3],this},B.clone=function U(){var K=new Y;return K.setState(this.getState())},Y}(),G=new $().setSeed(Date.now()),P=function(){function Y(){}var B=Y.prototype;return B.getContainer=function U(){return null},B.setOptions=function U(K){this._options=K},Y}(),O=function(Y){K0(B,Y);function B(){var K=Y.call(this)||this;return K._ctx=document.createElement("canvas").getContext("2d"),K}var U=B.prototype;return U.schedule=function K(Z){requestAnimationFrame(Z)},U.getContainer=function K(){return this._ctx.canvas},U.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z);var Q=Z.fontStyle?Z.fontStyle+" ":"",V=Q+" "+Z.fontSize+"px "+Z.fontFamily;this._ctx.font=V,this._updateSize(),this._ctx.font=V,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},U.clear=function K(){var Z=this._ctx.globalCompositeOperation;this._ctx.globalCompositeOperation="copy",this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.globalCompositeOperation=Z},U.eventToPosition=function K(Z,Q){var V=this._ctx.canvas,q=V.getBoundingClientRect();if(Z-=q.left,Q-=q.top,Z*=V.width/q.width,Q*=V.height/q.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},B}(P);function C(Y,B){return(Y%B+B)%B}function I(Y,B,U){if(B===void 0)B=0;if(U===void 0)U=1;if(Y<B)return B;if(Y>U)return U;return Y}function N(Y){return Y.charAt(0).toUpperCase()+Y.substring(1)}function b(Y){for(var B=arguments.length,U=new Array(B>1?B-1:0),K=1;K<B;K++)U[K-1]=arguments[K];var Z=b.map,Q=function V(q,X,L,w){if(Y.charAt(w-1)=="%")return q.substring(1);if(!U.length)return q;var H=U[0],D=X||L,W=D.split(","),R=W.shift()||"",M=Z[R.toLowerCase()];if(!M)return q;H=U.shift();var j=H[M].apply(H,W),S=R.charAt(0);if(S!=S.toLowerCase())j=N(j);return j};return Y.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,Q)}b.map={s:"toString"};var n=Object.freeze({__proto__:null,mod:C,clamp:I,capitalize:N,format:b}),J0=function(Y){K0(B,Y);function B(){var K=Y.call(this)||this;return K._spacingX=0,K._spacingY=0,K._hexSize=0,K}var U=B.prototype;return U.draw=function K(Z,Q){var V=Z[0],q=Z[1],X=Z[2],L=Z[3],w=Z[4],H=[(V+1)*this._spacingX,q*this._spacingY+this._hexSize];if(this._options.transpose)H.reverse();if(Q)this._ctx.fillStyle=w,this._fill(H[0],H[1]);if(!X)return;this._ctx.fillStyle=L;var D=[].concat(X);for(var W=0;W<D.length;W++)this._ctx.fillText(D[W],H[0],Math.ceil(H[1]))},U.computeSize=function K(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=Math.floor(Z/this._spacingX)-1,q=Math.floor((Q-2*this._hexSize)/this._spacingY+1);return[V,q]},U.computeFontSize=function K(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=2*Z/((this._options.width+1)*Math.sqrt(3))-1,q=Q/(2+1.5*(this._options.height-1)),X=Math.min(V,q),L=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var w=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=L;var H=w/100;X=Math.floor(X)+1;var D=2*X/(this._options.spacing*(1+H/Math.sqrt(3)));return Math.ceil(D)-1},U._normalizedEventToPosition=function K(Z,Q){var V;if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q,V=this._ctx.canvas.width;else V=this._ctx.canvas.height;var q=V/this._options.height;if(Q=Math.floor(Q/q),C(Q,2))Z-=this._spacingX,Z=1+2*Math.floor(Z/(2*this._spacingX));else Z=2*Math.floor(Z/(2*this._spacingX));return[Z,Q]},U._fill=function K(Z,Q){var V=this._hexSize,q=this._options.border,X=this._ctx;if(X.beginPath(),this._options.transpose)X.moveTo(Z-V+q,Q),X.lineTo(Z-V/2+q,Q+this._spacingX-q),X.lineTo(Z+V/2-q,Q+this._spacingX-q),X.lineTo(Z+V-q,Q),X.lineTo(Z+V/2-q,Q-this._spacingX+q),X.lineTo(Z-V/2+q,Q-this._spacingX+q),X.lineTo(Z-V+q,Q);else X.moveTo(Z,Q-V+q),X.lineTo(Z+this._spacingX-q,Q-V/2+q),X.lineTo(Z+this._spacingX-q,Q+V/2-q),X.lineTo(Z,Q+V-q),X.lineTo(Z-this._spacingX+q,Q+V/2-q),X.lineTo(Z-this._spacingX+q,Q-V/2+q),X.lineTo(Z,Q-V+q);X.fill()},U._updateSize=function K(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(Z.spacing*(Z.fontSize+Q/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var V,q;if(Z.transpose)V="height",q="width";else V="width",q="height";this._ctx.canvas[V]=Math.ceil((Z.width+1)*this._spacingX),this._ctx.canvas[q]=Math.ceil((Z.height-1)*this._spacingY+2*this._hexSize)},B}(O),Q0=function(Y){K0(B,Y);function B(){var K=Y.call(this)||this;return K._spacingX=0,K._spacingY=0,K._canvasCache={},K}var U=B.prototype;return U.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z),this._canvasCache={}},U.draw=function K(Z,Q){if(B.cache)this._drawWithCache(Z);else this._drawNoCache(Z,Q)},U._drawWithCache=function K(Z){var Q=Z[0],V=Z[1],q=Z[2],X=Z[3],L=Z[4],w=""+q+X+L,H;if(w in this._canvasCache)H=this._canvasCache[w];else{var D=this._options.border;H=document.createElement("canvas");var W=H.getContext("2d");if(H.width=this._spacingX,H.height=this._spacingY,W.fillStyle=L,W.fillRect(D,D,H.width-D,H.height-D),q){W.fillStyle=X,W.font=this._ctx.font,W.textAlign="center",W.textBaseline="middle";var R=[].concat(q);for(var M=0;M<R.length;M++)W.fillText(R[M],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[w]=H}this._ctx.drawImage(H,Q*this._spacingX,V*this._spacingY)},U._drawNoCache=function K(Z,Q){var V=Z[0],q=Z[1],X=Z[2],L=Z[3],w=Z[4];if(Q){var H=this._options.border;this._ctx.fillStyle=w,this._ctx.fillRect(V*this._spacingX+H,q*this._spacingY+H,this._spacingX-H,this._spacingY-H)}if(!X)return;this._ctx.fillStyle=L;var D=[].concat(X);for(var W=0;W<D.length;W++)this._ctx.fillText(D[W],(V+0.5)*this._spacingX,Math.ceil((q+0.5)*this._spacingY))},U.computeSize=function K(Z,Q){var V=Math.floor(Z/this._spacingX),q=Math.floor(Q/this._spacingY);return[V,q]},U.computeFontSize=function K(Z,Q){var V=Math.floor(Z/this._options.width),q=Math.floor(Q/this._options.height),X=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var L=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=X;var w=L/100,H=w*q/V;if(H>1)q=Math.floor(q/H);return Math.floor(q/this._options.spacing)},U._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._spacingX),Math.floor(Q/this._spacingY)]},U._updateSize=function K(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(Z.spacing*Q),this._spacingY=Math.ceil(Z.spacing*Z.fontSize),Z.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=Z.width*this._spacingX,this._ctx.canvas.height=Z.height*this._spacingY},B}(O);Q0.cache=!1;var d=function(Y){K0(B,Y);function B(){var K=Y.call(this)||this;return K._colorCanvas=document.createElement("canvas"),K}var U=B.prototype;return U.draw=function K(Z,Q){var V=Z[0],q=Z[1],X=Z[2],L=Z[3],w=Z[4],H=this._options.tileWidth,D=this._options.tileHeight;if(Q)if(this._options.tileColorize)this._ctx.clearRect(V*H,q*D,H,D);else this._ctx.fillStyle=w,this._ctx.fillRect(V*H,q*D,H,D);if(!X)return;var W=[].concat(X),R=[].concat(L),M=[].concat(w);for(var j=0;j<W.length;j++){var S=this._options.tileMap[W[j]];if(!S)throw new Error('Char "'+W[j]+'" not found in tileMap');if(this._options.tileColorize){var u=this._colorCanvas,h=u.getContext("2d");h.globalCompositeOperation="source-over",h.clearRect(0,0,H,D);var c=R[j],i=M[j];if(h.drawImage(this._options.tileSet,S[0],S[1],H,D,0,0,H,D),c!="transparent")h.fillStyle=c,h.globalCompositeOperation="source-atop",h.fillRect(0,0,H,D);if(i!="transparent")h.fillStyle=i,h.globalCompositeOperation="destination-over",h.fillRect(0,0,H,D);this._ctx.drawImage(u,V*H,q*D,H,D)}else this._ctx.drawImage(this._options.tileSet,S[0],S[1],H,D,V*H,q*D,H,D)}},U.computeSize=function K(Z,Q){var V=Math.floor(Z/this._options.tileWidth),q=Math.floor(Q/this._options.tileHeight);return[V,q]},U.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},U._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},U._updateSize=function K(){var Z=this._options;this._ctx.canvas.width=Z.width*Z.tileWidth,this._ctx.canvas.height=Z.height*Z.tileHeight,this._colorCanvas.width=Z.tileWidth,this._colorCanvas.height=Z.tileHeight},B}(O);function g(Y){var B,U;if(Y in E)B=E[Y];else{if(Y.charAt(0)=="#"){var K=Y.match(/[0-9a-f]/gi)||[],Z=K.map(function(V){return parseInt(V,16)});if(Z.length==3)B=Z.map(function(V){return V*17});else{for(var Q=0;Q<3;Q++)Z[Q+1]+=16*Z[Q],Z.splice(Q,1);B=Z}}else if(U=Y.match(/rgb\(([0-9, ]+)\)/i))B=U[1].split(/\s*,\s*/).map(function(V){return parseInt(V)});else B=[0,0,0];E[Y]=B}return B.slice()}function _(Y){var B=Y.slice();for(var U=arguments.length,K=new Array(U>1?U-1:0),Z=1;Z<U;Z++)K[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++)for(var V=0;V<K.length;V++)B[Q]+=K[V][Q];return B}function m(Y){for(var B=arguments.length,U=new Array(B>1?B-1:0),K=1;K<B;K++)U[K-1]=arguments[K];for(var Z=0;Z<3;Z++)for(var Q=0;Q<U.length;Q++)Y[Z]+=U[Q][Z];return Y}function r(Y){var B=Y.slice();for(var U=arguments.length,K=new Array(U>1?U-1:0),Z=1;Z<U;Z++)K[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++){for(var V=0;V<K.length;V++)B[Q]*=K[V][Q]/255;B[Q]=Math.round(B[Q])}return B}function y(Y){for(var B=arguments.length,U=new Array(B>1?B-1:0),K=1;K<B;K++)U[K-1]=arguments[K];for(var Z=0;Z<3;Z++){for(var Q=0;Q<U.length;Q++)Y[Z]*=U[Q][Z]/255;Y[Z]=Math.round(Y[Z])}return Y}function z0(Y,B,U){if(U===void 0)U=0.5;var K=Y.slice();for(var Z=0;Z<3;Z++)K[Z]=Math.round(K[Z]+U*(B[Z]-Y[Z]));return K}var X0=z0;function A(Y,B,U){if(U===void 0)U=0.5;var K=x(Y),Z=x(B);for(var Q=0;Q<3;Q++)K[Q]+=U*(Z[Q]-K[Q]);return a(K)}var k=A;function T(Y,B){if(!(B instanceof Array))B=Math.round(G.getNormal(0,B));var U=Y.slice();for(var K=0;K<3;K++)U[K]+=B instanceof Array?Math.round(G.getNormal(0,B[K])):B;return U}function x(Y){var B=Y[0]/255,U=Y[1]/255,K=Y[2]/255,Z=Math.max(B,U,K),Q=Math.min(B,U,K),V=0,q,X=(Z+Q)/2;if(Z==Q)q=0;else{var L=Z-Q;switch(q=X>0.5?L/(2-Z-Q):L/(Z+Q),Z){case B:V=(U-K)/L+(U<K?6:0);break;case U:V=(K-B)/L+2;break;case K:V=(B-U)/L+4;break}V/=6}return[V,q,X]}function e(Y,B,U){if(U<0)U+=1;if(U>1)U-=1;if(U<0.16666666666666666)return Y+(B-Y)*6*U;if(U<0.5)return B;if(U<0.6666666666666666)return Y+(B-Y)*(0.6666666666666666-U)*6;return Y}function a(Y){var B=Y[2];if(Y[1]==0)return B=Math.round(B*255),[B,B,B];else{var U=Y[1],K=B<0.5?B*(1+U):B+U-B*U,Z=2*B-K,Q=e(Z,K,Y[0]+0.3333333333333333),V=e(Z,K,Y[0]),q=e(Z,K,Y[0]-0.3333333333333333);return[Math.round(Q*255),Math.round(V*255),Math.round(q*255)]}}function f(Y){var B=Y.map(function(U){return I(U,0,255)});return"rgb("+B.join(",")+")"}function v(Y){var B=Y.map(function(U){return I(U,0,255).toString(16).padStart(2,"0")});return"#"+B.join("")}var E={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},s=Object.freeze({__proto__:null,fromString:g,add:_,add_:m,multiply:r,multiply_:y,interpolate:z0,lerp:X0,interpolateHSL:A,lerpHSL:k,randomize:T,rgb2hsl:x,hsl2rgb:a,toRGB:f,toHex:v}),t=function(Y){K0(B,Y);function B(){var K=Y.call(this)||this;K._uniforms={};try{K._gl=K._initWebGL()}catch(Z){if(typeof Z==="string")alert(Z);else if(Z instanceof Error)alert(Z.message)}return K}B.isSupported=function K(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var U=B.prototype;return U.schedule=function K(Z){requestAnimationFrame(Z)},U.getContainer=function K(){return this._gl.canvas},U.setOptions=function K(Z){var Q=this;Y.prototype.setOptions.call(this,Z),this._updateSize();var V=this._options.tileSet;if(V&&"complete"in V&&!V.complete)V.addEventListener("load",function(){return Q._updateTexture(V)});else this._updateTexture(V)},U.draw=function K(Z,Q){var V=this._gl,q=this._options,X=Z[0],L=Z[1],w=Z[2],H=Z[3],D=Z[4],W=V.canvas.height-(L+1)*q.tileHeight;if(V.scissor(X*q.tileWidth,W,q.tileWidth,q.tileHeight),Q){if(q.tileColorize)V.clearColor(0,0,0,0);else V.clearColor.apply(V,p0(D));V.clear(V.COLOR_BUFFER_BIT)}if(!w)return;var R=[].concat(w),M=[].concat(D),j=[].concat(H);V.uniform2fv(this._uniforms.targetPosRel,[X,L]);for(var S=0;S<R.length;S++){var u=this._options.tileMap[R[S]];if(!u)throw new Error('Char "'+R[S]+'" not found in tileMap');if(V.uniform1f(this._uniforms.colorize,q.tileColorize?1:0),V.uniform2fv(this._uniforms.tilesetPosAbs,u),q.tileColorize)V.uniform4fv(this._uniforms.tint,p0(j[S])),V.uniform4fv(this._uniforms.bg,p0(M[S]));V.drawArrays(V.TRIANGLE_STRIP,0,4)}},U.clear=function K(){var Z=this._gl;Z.clearColor.apply(Z,p0(this._options.bg)),Z.scissor(0,0,Z.canvas.width,Z.canvas.height),Z.clear(Z.COLOR_BUFFER_BIT)},U.computeSize=function K(Z,Q){var V=Math.floor(Z/this._options.tileWidth),q=Math.floor(Q/this._options.tileHeight);return[V,q]},U.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},U.eventToPosition=function K(Z,Q){var V=this._gl.canvas,q=V.getBoundingClientRect();if(Z-=q.left,Q-=q.top,Z*=V.width/q.width,Q*=V.height/q.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},U._initWebGL=function K(){var Z=this,Q=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=Q;var V=C0(Q,D0,$0);return Q.useProgram(V),w0(Q),V0.forEach(function(q){return Z._uniforms[q]=Q.getUniformLocation(V,q)}),this._program=V,Q.enable(Q.BLEND),Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA),Q.enable(Q.SCISSOR_TEST),Q},U._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},U._updateSize=function K(){var Z=this._gl,Q=this._options,V=[Q.width*Q.tileWidth,Q.height*Q.tileHeight];Z.canvas.width=V[0],Z.canvas.height=V[1],Z.viewport(0,0,V[0],V[1]),Z.uniform2fv(this._uniforms.tileSize,[Q.tileWidth,Q.tileHeight]),Z.uniform2fv(this._uniforms.targetSize,V)},U._updateTexture=function K(Z){r0(this._gl,Z)},B}(P),V0=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],D0=`
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
	fragColor = vec4(0, 0, 0, 1);

	vec4 texel = texelFetch(image, ivec2(tilesetPosPx), 0);

	if (colorize) {
		texel.rgb = tint.a * tint.rgb + (1.0-tint.a) * texel.rgb;
		fragColor.rgb = texel.a*texel.rgb + (1.0-texel.a)*bg.rgb;
		fragColor.a = texel.a + (1.0-texel.a)*bg.a;
	} else {
		fragColor = texel;
	}
}`.trim();function C0(Y,B,U){var K=Y.createShader(Y.VERTEX_SHADER);if(Y.shaderSource(K,B),Y.compileShader(K),!Y.getShaderParameter(K,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(K)||"");var Z=Y.createShader(Y.FRAGMENT_SHADER);if(Y.shaderSource(Z,U),Y.compileShader(Z),!Y.getShaderParameter(Z,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(Z)||"");var Q=Y.createProgram();if(Y.attachShader(Q,K),Y.attachShader(Q,Z),Y.linkProgram(Q),!Y.getProgramParameter(Q,Y.LINK_STATUS))throw new Error(Y.getProgramInfoLog(Q)||"");return Q}function w0(Y){var B=new Float32Array([0,0,1,0,0,1,1,1]),U=Y.createBuffer();Y.bindBuffer(Y.ARRAY_BUFFER,U),Y.bufferData(Y.ARRAY_BUFFER,B,Y.STATIC_DRAW),Y.enableVertexAttribArray(0),Y.vertexAttribPointer(0,2,Y.FLOAT,!1,0,0)}function r0(Y,B){var U=Y.createTexture();return Y.bindTexture(Y.TEXTURE_2D,U),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MAG_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MIN_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_S,Y.REPEAT),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_T,Y.REPEAT),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,0),Y.texImage2D(Y.TEXTURE_2D,0,Y.RGBA,Y.RGBA,Y.UNSIGNED_BYTE,B),U}var v0={};function p0(Y){if(!(Y in v0)){var B;if(Y=="transparent")B=[0,0,0,0];else if(Y.indexOf("rgba")>-1){B=(Y.match(/[\d.]+/g)||[]).map(Number);for(var U=0;U<3;U++)B[U]=B[U]/255}else B=g(Y).map(function(K){return K/255}),B.push(1);v0[Y]=B}return v0[Y]}function eJ(Y){return"\x1B[0;48;5;"+MZ(Y)+"m\x1B[2J"}function tJ(Y,B){return"\x1B[0;38;5;"+MZ(Y)+";48;5;"+MZ(B)+"m"}function ZQ(Y,B){return"\x1B["+(B+1)+";"+(Y+1)+"H"}function MZ(Y){var B=256,U=6,K=U/B,Z=g(Y),Q=Math.floor(Z[0]*K),V=Math.floor(Z[1]*K),q=Math.floor(Z[2]*K);return Q*36+V*6+q*1+16}var rZ=function(Y){K0(B,Y);function B(){var K=Y.call(this)||this;return K._offset=[0,0],K._cursor=[-1,-1],K._lastColor="",K}var U=B.prototype;return U.schedule=function K(Z){setTimeout(Z,16.666666666666668)},U.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z);var Q=[Z.width,Z.height],V=this.computeSize();this._offset=V.map(function(q,X){return Math.floor((q-Q[X])/2)})},U.clear=function K(){process.stdout.write(eJ(this._options.bg))},U.draw=function K(Z,Q){var V=Z[0],q=Z[1],X=Z[2],L=Z[3],w=Z[4],H=this._offset[0]+V,D=this._offset[1]+q,W=this.computeSize();if(H<0||H>=W[0])return;if(D<0||D>=W[1])return;if(H!==this._cursor[0]||D!==this._cursor[1])process.stdout.write(ZQ(H,D)),this._cursor[0]=H,this._cursor[1]=D;if(Q){if(!X)X=" "}if(!X)return;var R=tJ(L,w);if(R!==this._lastColor)process.stdout.write(R),this._lastColor=R;if(X!="\t"){var M=[].concat(X);process.stdout.write(M[0])}if(this._cursor[0]++,this._cursor[0]>=W[0])this._cursor[0]=0,this._cursor[1]++},U.computeFontSize=function K(){throw new Error("Terminal backend has no notion of font size")},U.eventToPosition=function K(Z,Q){return[Z,Q]},U.computeSize=function K(){return[process.stdout.columns,process.stdout.rows]},B}(P),JQ=/%([bc]){([^}]*)}/g,S0=0,b0=1,jZ=2,CZ=3;function QQ(Y,B){var U={width:0,height:1},K=EZ(Y,B),Z=0;for(var Q=0;Q<K.length;Q++){var V=K[Q];switch(V.type){case S0:Z+=V.value.length;break;case b0:U.height++,U.width=Math.max(U.width,Z),Z=0;break}}return U.width=Math.max(U.width,Z),U}function EZ(Y,B){var U=[],K=0;Y.replace(JQ,function(Q,V,q,X){var L=Y.substring(K,X);if(L.length)U.push({type:S0,value:L});return U.push({type:V=="c"?jZ:CZ,value:q.trim()}),K=X+Q.length,""});var Z=Y.substring(K);if(Z.length)U.push({type:S0,value:Z});return VQ(U,B)}function VQ(Y,B){if(!B)B=1/0;var U=0,K=0,Z=-1;while(U<Y.length){var Q=Y[U];if(Q.type==b0)K=0,Z=-1;if(Q.type!=S0){U++;continue}while(K==0&&Q.value.charAt(0)==" ")Q.value=Q.value.substring(1);var V=Q.value.indexOf(`
`);if(V!=-1){Q.value=VZ(Y,U,V,!0);var q=Q.value.split("");while(q.length&&q[q.length-1]==" ")q.pop();Q.value=q.join("")}if(!Q.value.length){Y.splice(U,1);continue}if(K+Q.value.length>B){var X=-1;while(!0){var L=Q.value.indexOf(" ",X+1);if(L==-1)break;if(K+L>B)break;X=L}if(X!=-1)Q.value=VZ(Y,U,X,!0);else if(Z!=-1){var w=Y[Z],H=w.value.lastIndexOf(" ");w.value=VZ(Y,Z,H,!0),U=Z}else Q.value=VZ(Y,U,B-K,!1)}else if(K+=Q.value.length,Q.value.indexOf(" ")!=-1)Z=U;U++}Y.push({type:b0});var D=null;for(var W=0;W<Y.length;W++){var R=Y[W];switch(R.type){case S0:D=R;break;case b0:if(D){var M=D.value.split("");while(M.length&&M[M.length-1]==" ")M.pop();D.value=M.join("")}D=null;break}}return Y.pop(),Y}function VZ(Y,B,U,K){var Z={type:b0},Q={type:S0,value:Y[B].value.substring(U+(K?1:0))};return Y.splice(B+1,0,Z,Q),Y[B].value.substring(0,U)}var KQ=Object.freeze({__proto__:null,TYPE_TEXT:S0,TYPE_NEWLINE:b0,TYPE_FG:jZ,TYPE_BG:CZ,measure:QQ,tokenize:EZ}),AZ=80,NZ=25,G0={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},qQ={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},zQ={hex:J0,rect:Q0,tile:d,"tile-gl":t,term:rZ},UQ={width:AZ,height:NZ,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},c0=function(){function Y(U){if(U===void 0)U={};this._data={},this._dirty=!1,this._options={},U=Object.assign({},UQ,U),this.setOptions(U),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var B=Y.prototype;return B.DEBUG=function U(K,Z,Q){var V=[this._options.bg,this._options.fg];this.draw(K,Z,null,null,V[Q%V.length])},B.clear=function U(){this._data={},this._dirty=!0},B.setOptions=function U(K){if(Object.assign(this._options,K),K.width||K.height||K.fontSize||K.fontFamily||K.spacing||K.layout){if(K.layout){var Z=zQ[K.layout];this._backend=new Z}this._backend.setOptions(this._options),this._dirty=!0}return this},B.getOptions=function U(){return this._options},B.getContainer=function U(){return this._backend.getContainer()},B.computeSize=function U(K,Z){return this._backend.computeSize(K,Z)},B.computeFontSize=function U(K,Z){return this._backend.computeFontSize(K,Z)},B.computeTileSize=function U(K,Z){var Q=Math.floor(K/this._options.width),V=Math.floor(Z/this._options.height);return[Q,V]},B.eventToPosition=function U(K){var Z,Q;if("touches"in K)Z=K.touches[0].clientX,Q=K.touches[0].clientY;else Z=K.clientX,Q=K.clientY;return this._backend.eventToPosition(Z,Q)},B.draw=function U(K,Z,Q,V,q){if(!V)V=this._options.fg;if(!q)q=this._options.bg;var X=K+","+Z;if(this._data[X]=[K,Z,Q,V,q],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[X]=!0},B.drawOver=function U(K,Z,Q,V,q){var X=K+","+Z,L=this._data[X];if(L)L[2]=Q||L[2],L[3]=V||L[3],L[4]=q||L[4];else this.draw(K,Z,Q,V,q)},B.drawText=function U(K,Z,Q,V){var q=null,X=null,L=K,w=Z,H=1;if(!V)V=this._options.width-K;var D=EZ(Q,V);while(D.length){var W=D.shift();switch(W.type){case S0:var R=!1,M=!1,j=!1,S=!1;for(var u=0;u<W.value.length;u++){var h=W.value.charCodeAt(u),c=W.value.charAt(u);if(this._options.layout==="term"){var i=h>>8,Z0=i===17||i>=46&&i<=159||i>=172&&i<=215||h>=43360&&h<=43391;if(Z0){this.draw(L+0,w,c,q,X),this.draw(L+1,w,"\t",q,X),L+=2;continue}}if(j=h>65280&&h<65377||h>65500&&h<65512||h>65518,R=c.charCodeAt(0)==32||c.charCodeAt(0)==12288,S&&!j&&!R)L++;if(j&&!M)L++;this.draw(L++,w,c,q,X),M=R,S=j}break;case jZ:q=W.value||null;break;case CZ:X=W.value||null;break;case b0:L=K,w++,H++;break}}return H},B._tick=function U(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var K in this._data)this._draw(K,!1)}else for(var Z in this._dirty)this._draw(Z,!0);this._dirty=!1},B._draw=function U(K,Z){var Q=this._data[K];if(Q[4]!=this._options.bg)Z=!0;this._backend.draw(Q,Z)},Y}();c0.Rect=Q0,c0.Hex=J0,c0.Tile=d,c0.TileGL=t,c0.Term=rZ;var $Q=function(){function Y(U){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,U),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var K=0;K<this._options.order;K++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var B=Y.prototype;return B.clear=function U(){this._data={},this._priorValues={}},B.generate=function U(){var K=[this._sample(this._prefix)];while(K[K.length-1]!=this._boundary)K.push(this._sample(K));return this._join(K.slice(0,-1))},B.observe=function U(K){var Z=this._split(K);for(var Q=0;Q<Z.length;Q++)this._priorValues[Z[Q]]=this._options.prior;Z=this._prefix.concat(Z).concat(this._suffix);for(var V=this._options.order;V<Z.length;V++){var q=Z.slice(V-this._options.order,V),X=Z[V];for(var L=0;L<q.length;L++){var w=q.slice(L);this._observeEvent(w,X)}}},B.getStats=function U(){var K=[],Z=Object.keys(this._priorValues).length;Z--,K.push("distinct samples: "+Z);var Q=Object.keys(this._data).length,V=0;for(var q in this._data)V+=Object.keys(this._data[q]).length;return K.push("dictionary size (contexts): "+Q),K.push("dictionary size (events): "+V),K.join(", ")},B._split=function U(K){return K.split(this._options.words?/\s+/:"")},B._join=function U(K){return K.join(this._options.words?" ":"")},B._observeEvent=function U(K,Z){var Q=this._join(K);if(!(Q in this._data))this._data[Q]={};var V=this._data[Q];if(!(Z in V))V[Z]=0;V[Z]++},B._sample=function U(K){K=this._backoff(K);var Z=this._join(K),Q=this._data[Z],V={};if(this._options.prior){for(var q in this._priorValues)V[q]=this._priorValues[q];for(var X in Q)V[X]+=Q[X]}else V=Q;return G.getWeightedValue(V)},B._backoff=function U(K){if(K.length>this._options.order)K=K.slice(-this._options.order);else if(K.length<this._options.order)K=this._prefix.slice(0,this._options.order-K.length).concat(K);while(!(this._join(K)in this._data)&&K.length>0)K=K.slice(1);return K},Y}(),sZ=function(){function Y(){this.heap=[],this.timestamp=0}var B=Y.prototype;return B.lessThan=function U(K,Z){return K.key==Z.key?K.timestamp<Z.timestamp:K.key<Z.key},B.shift=function U(K){this.heap=this.heap.map(function(Z){var{key:Q,value:V,timestamp:q}=Z;return{key:Q+K,value:V,timestamp:q}})},B.len=function U(){return this.heap.length},B.push=function U(K,Z){this.timestamp+=1;var Q=this.len();this.heap.push({value:K,timestamp:this.timestamp,key:Z}),this.updateUp(Q)},B.pop=function U(){if(this.len()==0)throw new Error("no element to pop");var K=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return K},B.find=function U(K){for(var Z=0;Z<this.len();Z++)if(K==this.heap[Z].value)return this.heap[Z];return null},B.remove=function U(K){var Z=null;for(var Q=0;Q<this.len();Q++)if(K==this.heap[Q].value)Z=Q;if(Z===null)return!1;if(this.len()>1){var V=this.heap.pop();if(V.value!=K)this.heap[Z]=V,this.updateDown(Z);return!0}else this.heap.pop();return!0},B.parentNode=function U(K){return Math.floor((K-1)/2)},B.leftChildNode=function U(K){return 2*K+1},B.rightChildNode=function U(K){return 2*K+2},B.existNode=function U(K){return K>=0&&K<this.heap.length},B.swap=function U(K,Z){var Q=this.heap[K];this.heap[K]=this.heap[Z],this.heap[Z]=Q},B.minNode=function U(K){var Z=K.filter(this.existNode.bind(this)),Q=Z[0];for(var V=J7(Z),q;!(q=V()).done;){var X=q.value;if(this.lessThan(this.heap[X],this.heap[Q]))Q=X}return Q},B.updateUp=function U(K){if(K==0)return;var Z=this.parentNode(K);if(this.existNode(Z)&&this.lessThan(this.heap[K],this.heap[Z]))this.swap(K,Z),this.updateUp(Z)},B.updateDown=function U(K){var Z=this.leftChildNode(K),Q=this.rightChildNode(K);if(!this.existNode(Z))return;var V=this.minNode([K,Z,Q]);if(V!=K)this.swap(K,V),this.updateDown(V)},B.debugPrint=function U(){console.log(this.heap)},Y}(),oZ=function(){function Y(){this._time=0,this._events=new sZ}var B=Y.prototype;return B.getTime=function U(){return this._time},B.clear=function U(){return this._events=new sZ,this},B.add=function U(K,Z){this._events.push(K,Z)},B.get=function U(){if(!this._events.len())return null;var K=this._events.pop(),Z=K.key,Q=K.value;if(Z>0)this._time+=Z,this._events.shift(-Z);return Q},B.getEventTime=function U(K){var Z=this._events.find(K);if(Z){var Q=Z.key;return Q}return},B.remove=function U(K){return this._events.remove(K)},Y}(),vZ=function(){function Y(){this._queue=new oZ,this._repeat=[],this._current=null}var B=Y.prototype;return B.getTime=function U(){return this._queue.getTime()},B.add=function U(K,Z){if(Z)this._repeat.push(K);return this},B.getTimeOf=function U(K){return this._queue.getEventTime(K)},B.clear=function U(){return this._queue.clear(),this._repeat=[],this._current=null,this},B.remove=function U(K){var Z=this._queue.remove(K),Q=this._repeat.indexOf(K);if(Q!=-1)this._repeat.splice(Q,1);if(this._current==K)this._current=null;return Z},B.next=function U(){return this._current=this._queue.get(),this._current},Y}(),XQ=function(Y){K0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.add=function K(Z,Q){return this._queue.add(Z,0),Y.prototype.add.call(this,Z,Q)},U.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return Y.prototype.next.call(this)},B}(vZ),GQ=function(Y){K0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.add=function K(Z,Q,V){return this._queue.add(Z,V!==void 0?V:1/Z.getSpeed()),Y.prototype.add.call(this,Z,Q)},U.next=function K(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return Y.prototype.next.call(this)},B}(vZ),BQ=function(Y){K0(B,Y);function B(){var K=Y.call(this)||this;return K._defaultDuration=1,K._duration=K._defaultDuration,K}var U=B.prototype;return U.add=function K(Z,Q,V){return this._queue.add(Z,V||this._defaultDuration),Y.prototype.add.call(this,Z,Q)},U.clear=function K(){return this._duration=this._defaultDuration,Y.prototype.clear.call(this)},U.remove=function K(Z){if(Z==this._current)this._duration=this._defaultDuration;return Y.prototype.remove.call(this,Z)},U.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return Y.prototype.next.call(this)},U.setDuration=function K(Z){if(this._current)this._duration=Z;return this},B}(vZ),YQ={Simple:XQ,Speed:GQ,Action:BQ},SZ=function(){function Y(U,K){if(K===void 0)K={};this._lightPasses=U,this._options=Object.assign({topology:8},K)}var B=Y.prototype;return B._getCircle=function U(K,Z,Q){var V=[],q,X,L;switch(this._options.topology){case 4:X=1,L=[0,1],q=[G0[8][7],G0[8][1],G0[8][3],G0[8][5]];break;case 6:q=G0[6],X=1,L=[-1,1];break;case 8:q=G0[4],X=2,L=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var w=K+L[0]*Q,H=Z+L[1]*Q;for(var D=0;D<q.length;D++)for(var W=0;W<Q*X;W++)V.push([w,H]),w+=q[D][0],H+=q[D][1];return V},Y}(),wQ=function(Y){K0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.compute=function K(Z,Q,V,q){if(q(Z,Q,0,1),!this._lightPasses(Z,Q))return;var X=[],L,w,H,D,W;for(var R=1;R<=V;R++){var M=this._getCircle(Z,Q,R),j=360/M.length;for(var S=0;S<M.length;S++){if(H=M[S][0],D=M[S][1],L=j*(S-0.5),w=L+j,W=!this._lightPasses(H,D),this._visibleCoords(Math.floor(L),Math.ceil(w),W,X))q(H,D,R,1);if(X.length==2&&X[0]==0&&X[1]==360)return}}},U._visibleCoords=function K(Z,Q,V,q){if(Z<0){var X=this._visibleCoords(0,Q,V,q),L=this._visibleCoords(360+Z,360,V,q);return X||L}var w=0;while(w<q.length&&q[w]<Z)w++;if(w==q.length){if(V)q.push(Z,Q);return!0}var H=0;if(w%2){while(w<q.length&&q[w]<Q)w++,H++;if(H==0)return!1;if(V)if(H%2)q.splice(w-H,H,Q);else q.splice(w-H,H);return!0}else{while(w<q.length&&q[w]<Q)w++,H++;if(Z==q[w-H]&&H==1)return!1;if(V)if(H%2)q.splice(w-H,H,Z);else q.splice(w-H,H,Z,Q);return!0}},B}(SZ),LQ=function(Y){K0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.compute=function K(Z,Q,V,q){if(q(Z,Q,0,1),!this._lightPasses(Z,Q))return;var X=[],L,w,H,D,W,R;for(var M=1;M<=V;M++){var j=this._getCircle(Z,Q,M),S=j.length;for(var u=0;u<S;u++){if(L=j[u][0],w=j[u][1],D=[u?2*u-1:2*S-1,2*S],W=[2*u+1,2*S],H=!this._lightPasses(L,w),R=this._checkVisibility(D,W,H,X),R)q(L,w,M,R);if(X.length==2&&X[0][0]==0&&X[1][0]==X[1][1])return}}},U._checkVisibility=function K(Z,Q,V,q){if(Z[0]>Q[0]){var X=this._checkVisibility(Z,[Z[1],Z[1]],V,q),L=this._checkVisibility([0,1],Q,V,q);return(X+L)/2}var w=0,H=!1;while(w<q.length){var D=q[w],W=D[0]*Z[1]-Z[0]*D[1];if(W>=0){if(W==0&&!(w%2))H=!0;break}w++}var R=q.length,M=!1;while(R--){var j=q[R],S=Q[0]*j[1]-j[0]*Q[1];if(S>=0){if(S==0&&R%2)M=!0;break}}var u=!0;if(w==R&&(H||M))u=!1;else if(H&&M&&w+1==R&&R%2)u=!1;else if(w>R&&w%2)u=!1;if(!u)return 0;var h,c=R-w+1;if(c%2)if(w%2){var i=q[w];if(h=(Q[0]*i[1]-i[0]*Q[1])/(i[1]*Q[1]),V)q.splice(w,c,Q)}else{var Z0=q[R];if(h=(Z0[0]*Z[1]-Z[0]*Z0[1])/(Z[1]*Z0[1]),V)q.splice(w,c,Z)}else if(w%2){var U0=q[w],H0=q[R];if(h=(H0[0]*U0[1]-U0[0]*H0[1])/(U0[1]*H0[1]),V)q.splice(w,c)}else{if(V)q.splice(w,c,Z,Q);return 1}var E0=(Q[0]*Z[1]-Z[0]*Q[1])/(Z[1]*Q[1]);return h/E0},B}(SZ),I0=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],HQ=function(Y){K0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.compute=function K(Z,Q,V,q){q(Z,Q,0,1);for(var X=0;X<I0.length;X++)this._renderOctant(Z,Q,I0[X],V,q)},U.compute180=function K(Z,Q,V,q,X){X(Z,Q,0,1);var L=(q-1+8)%8,w=(q-2+8)%8,H=(q+1+8)%8;this._renderOctant(Z,Q,I0[w],V,X),this._renderOctant(Z,Q,I0[L],V,X),this._renderOctant(Z,Q,I0[q],V,X),this._renderOctant(Z,Q,I0[H],V,X)},U.compute90=function K(Z,Q,V,q,X){X(Z,Q,0,1);var L=(q-1+8)%8;this._renderOctant(Z,Q,I0[q],V,X),this._renderOctant(Z,Q,I0[L],V,X)},U._renderOctant=function K(Z,Q,V,q,X){this._castVisibility(Z,Q,1,1,0,q+1,V[0],V[1],V[2],V[3],X)},U._castVisibility=function K(Z,Q,V,q,X,L,w,H,D,W,R){if(q<X)return;for(var M=V;M<=L;M++){var j=-M-1,S=-M,u=!1,h=0;while(j<=0){j+=1;var c=Z+j*w+S*H,i=Q+j*D+S*W,Z0=(j-0.5)/(S+0.5),U0=(j+0.5)/(S-0.5);if(U0>q)continue;if(Z0<X)break;if(j*j+S*S<L*L)R(c,i,M,1);if(!u){if(!this._lightPasses(c,i)&&M<L)u=!0,this._castVisibility(Z,Q,M+1,q,Z0,L,w,H,D,W,R),h=U0}else{if(!this._lightPasses(c,i)){h=U0;continue}u=!1,q=h}}if(u)break}},B}(SZ),PQ={DiscreteShadowcasting:wQ,PreciseShadowcasting:LQ,RecursiveShadowcasting:HQ},k0=function(){function Y(U,K){if(U===void 0)U=AZ;if(K===void 0)K=NZ;this._width=U,this._height=K}var B=Y.prototype;return B._fillMap=function U(K){var Z=[];for(var Q=0;Q<this._width;Q++){Z.push([]);for(var V=0;V<this._height;V++)Z[Q].push(K)}return Z},Y}(),DQ=function(Y){K0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.create=function K(Z){var Q=this._width-1,V=this._height-1;for(var q=0;q<=Q;q++)for(var X=0;X<=V;X++){var L=q&&X&&q<Q&&X<V;Z(q,X,L?0:1)}return this},B}(k0),aZ=function(Y){K0(B,Y);function B(K,Z){var Q=Y.call(this,K,Z)||this;return Q._rooms=[],Q._corridors=[],Q}var U=B.prototype;return U.getRooms=function K(){return this._rooms},U.getCorridors=function K(){return this._corridors},B}(k0),iZ=function Y(){},KZ=function(Y){K0(B,Y);function B(K,Z,Q,V,q,X){var L=Y.call(this)||this;if(L._x1=K,L._y1=Z,L._x2=Q,L._y2=V,L._doors={},q!==void 0&&X!==void 0)L.addDoor(q,X);return L}B.createRandomAt=function K(Z,Q,V,q,X){var L=X.roomWidth[0],w=X.roomWidth[1],H=G.getUniformInt(L,w);L=X.roomHeight[0],w=X.roomHeight[1];var D=G.getUniformInt(L,w);if(V==1){var W=Q-Math.floor(G.getUniform()*D);return new this(Z+1,W,Z+H,W+D-1,Z,Q)}if(V==-1){var R=Q-Math.floor(G.getUniform()*D);return new this(Z-H,R,Z-1,R+D-1,Z,Q)}if(q==1){var M=Z-Math.floor(G.getUniform()*H);return new this(M,Q+1,M+H-1,Q+D,Z,Q)}if(q==-1){var j=Z-Math.floor(G.getUniform()*H);return new this(j,Q-D,j+H-1,Q-1,Z,Q)}throw new Error("dx or dy must be 1 or -1")},B.createRandomCenter=function K(Z,Q,V){var q=V.roomWidth[0],X=V.roomWidth[1],L=G.getUniformInt(q,X);q=V.roomHeight[0],X=V.roomHeight[1];var w=G.getUniformInt(q,X),H=Z-Math.floor(G.getUniform()*L),D=Q-Math.floor(G.getUniform()*w),W=H+L-1,R=D+w-1;return new this(H,D,W,R)},B.createRandom=function K(Z,Q,V){var q=V.roomWidth[0],X=V.roomWidth[1],L=G.getUniformInt(q,X);q=V.roomHeight[0],X=V.roomHeight[1];var w=G.getUniformInt(q,X),H=Z-L-1,D=Q-w-1,W=1+Math.floor(G.getUniform()*H),R=1+Math.floor(G.getUniform()*D),M=W+L-1,j=R+w-1;return new this(W,R,M,j)};var U=B.prototype;return U.addDoor=function K(Z,Q){return this._doors[Z+","+Q]=1,this},U.getDoors=function K(Z){for(var Q in this._doors){var V=Q.split(",");Z(parseInt(V[0]),parseInt(V[1]))}return this},U.clearDoors=function K(){return this._doors={},this},U.addDoors=function K(Z){var Q=this._x1-1,V=this._x2+1,q=this._y1-1,X=this._y2+1;for(var L=Q;L<=V;L++)for(var w=q;w<=X;w++){if(L!=Q&&L!=V&&w!=q&&w!=X)continue;if(Z(L,w))continue;this.addDoor(L,w)}return this},U.debug=function K(){console.log("room",this._x1,this._y1,this._x2,this._y2)},U.isValid=function K(Z,Q){var V=this._x1-1,q=this._x2+1,X=this._y1-1,L=this._y2+1;for(var w=V;w<=q;w++)for(var H=X;H<=L;H++)if(w==V||w==q||H==X||H==L){if(!Z(w,H))return!1}else if(!Q(w,H))return!1;return!0},U.create=function K(Z){var Q=this._x1-1,V=this._x2+1,q=this._y1-1,X=this._y2+1,L=0;for(var w=Q;w<=V;w++)for(var H=q;H<=X;H++){if(w+","+H in this._doors)L=2;else if(w==Q||w==V||H==q||H==X)L=1;else L=0;Z(w,H,L)}},U.getCenter=function K(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},U.getLeft=function K(){return this._x1},U.getRight=function K(){return this._x2},U.getTop=function K(){return this._y1},U.getBottom=function K(){return this._y2},B}(iZ),IZ=function(Y){K0(B,Y);function B(K,Z,Q,V){var q=Y.call(this)||this;return q._startX=K,q._startY=Z,q._endX=Q,q._endY=V,q._endsWithAWall=!0,q}B.createRandomAt=function K(Z,Q,V,q,X){var L=X.corridorLength[0],w=X.corridorLength[1],H=G.getUniformInt(L,w);return new this(Z,Q,Z+V*H,Q+q*H)};var U=B.prototype;return U.debug=function K(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},U.isValid=function K(Z,Q){var V=this._startX,q=this._startY,X=this._endX-V,L=this._endY-q,w=1+Math.max(Math.abs(X),Math.abs(L));if(X)X=X/Math.abs(X);if(L)L=L/Math.abs(L);var H=L,D=-X,W=!0;for(var R=0;R<w;R++){var M=V+R*X,j=q+R*L;if(!Q(M,j))W=!1;if(!Z(M+H,j+D))W=!1;if(!Z(M-H,j-D))W=!1;if(!W){w=R,this._endX=M-X,this._endY=j-L;break}}if(w==0)return!1;if(w==1&&Z(this._endX+X,this._endY+L))return!1;var S=!Z(this._endX+X+H,this._endY+L+D),u=!Z(this._endX+X-H,this._endY+L-D);if(this._endsWithAWall=Z(this._endX+X,this._endY+L),(S||u)&&this._endsWithAWall)return!1;return!0},U.create=function K(Z){var Q=this._startX,V=this._startY,q=this._endX-Q,X=this._endY-V,L=1+Math.max(Math.abs(q),Math.abs(X));if(q)q=q/Math.abs(q);if(X)X=X/Math.abs(X);for(var w=0;w<L;w++){var H=Q+w*q,D=V+w*X;Z(H,D,0)}return!0},U.createPriorityWalls=function K(Z){if(!this._endsWithAWall)return;var Q=this._startX,V=this._startY,q=this._endX-Q,X=this._endY-V;if(q)q=q/Math.abs(q);if(X)X=X/Math.abs(X);var L=X,w=-q;Z(this._endX+q,this._endY+X),Z(this._endX+L,this._endY+w),Z(this._endX-L,this._endY-w)},B}(iZ),FQ=function(Y){K0(B,Y);function B(K,Z,Q){var V=Y.call(this,K,Z)||this;return V._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(V._options,Q),V._map=[],V._dug=0,V._roomAttempts=20,V._corridorAttempts=20,V._connected=[],V._unconnected=[],V._digCallback=V._digCallback.bind(m0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(m0(V)),V._isWallCallback=V._isWallCallback.bind(m0(V)),V}var U=B.prototype;return U.create=function K(Z){var Q=Date.now();while(!0){var V=Date.now();if(V-Q>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(Z)for(var q=0;q<this._width;q++)for(var X=0;X<this._height;X++)Z(q,X,this._map[q][X]);return this},U._generateRooms=function K(){var Z=this._width-2,Q=this._height-2,V;do if(V=this._generateRoom(),this._dug/(Z*Q)>this._options.roomDugPercentage)break;while(V)},U._generateRoom=function K(){var Z=0;while(Z<this._roomAttempts){Z++;var Q=KZ.createRandom(this._width,this._height,this._options);if(!Q.isValid(this._isWallCallback,this._canBeDugCallback))continue;return Q.create(this._digCallback),this._rooms.push(Q),Q}return null},U._generateCorridors=function K(){var Z=0;while(Z<this._corridorAttempts){Z++,this._corridors=[],this._map=this._fillMap(1);for(var Q=0;Q<this._rooms.length;Q++){var V=this._rooms[Q];V.clearDoors(),V.create(this._digCallback)}if(this._unconnected=G.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var q=G.getItem(this._connected);if(!q)break;var X=this._closestRoom(this._unconnected,q);if(!X)break;var L=this._closestRoom(this._connected,X);if(!L)break;var w=this._connectRooms(X,L);if(!w)break;if(!this._unconnected.length)return!0}}return!1},U._closestRoom=function K(Z,Q){var V=1/0,q=Q.getCenter(),X=null;for(var L=0;L<Z.length;L++){var w=Z[L],H=w.getCenter(),D=H[0]-q[0],W=H[1]-q[1],R=D*D+W*W;if(R<V)V=R,X=w}return X},U._connectRooms=function K(Z,Q){var V=Z.getCenter(),q=Q.getCenter(),X=q[0]-V[0],L=q[1]-V[1],w,H,D,W,R,M,j;if(Math.abs(X)<Math.abs(L))D=L>0?2:0,W=(D+2)%4,R=Q.getLeft(),M=Q.getRight(),j=0;else D=X>0?1:3,W=(D+2)%4,R=Q.getTop(),M=Q.getBottom(),j=1;if(w=this._placeInWall(Z,D),!w)return!1;if(w[j]>=R&&w[j]<=M){H=w.slice();var S=0;switch(W){case 0:S=Q.getTop()-1;break;case 1:S=Q.getRight()+1;break;case 2:S=Q.getBottom()+1;break;case 3:S=Q.getLeft()-1;break}H[(j+1)%2]=S,this._digLine([w,H])}else if(w[j]<R-1||w[j]>M+1){var u=w[j]-q[j],h=0;switch(W){case 0:case 1:h=u<0?3:1;break;case 2:case 3:h=u<0?1:3;break}if(W=(W+h)%4,H=this._placeInWall(Q,W),!H)return!1;var c=[0,0];c[j]=w[j];var i=(j+1)%2;c[i]=H[i],this._digLine([w,c,H])}else{var Z0=(j+1)%2;if(H=this._placeInWall(Q,W),!H)return!1;var U0=Math.round((H[Z0]+w[Z0])/2),H0=[0,0],E0=[0,0];H0[j]=w[j],H0[Z0]=U0,E0[j]=H[j],E0[Z0]=U0,this._digLine([w,H0,E0,H])}if(Z.addDoor(w[0],w[1]),Q.addDoor(H[0],H[1]),j=this._unconnected.indexOf(Z),j!=-1)this._unconnected.splice(j,1),this._connected.push(Z);if(j=this._unconnected.indexOf(Q),j!=-1)this._unconnected.splice(j,1),this._connected.push(Q);return!0},U._placeInWall=function K(Z,Q){var V=[0,0],q=[0,0],X=0;switch(Q){case 0:q=[1,0],V=[Z.getLeft(),Z.getTop()-1],X=Z.getRight()-Z.getLeft()+1;break;case 1:q=[0,1],V=[Z.getRight()+1,Z.getTop()],X=Z.getBottom()-Z.getTop()+1;break;case 2:q=[1,0],V=[Z.getLeft(),Z.getBottom()+1],X=Z.getRight()-Z.getLeft()+1;break;case 3:q=[0,1],V=[Z.getLeft()-1,Z.getTop()],X=Z.getBottom()-Z.getTop()+1;break}var L=[],w=-2;for(var H=0;H<X;H++){var D=V[0]+H*q[0],W=V[1]+H*q[1];L.push(null);var R=this._map[D][W]==1;if(R){if(w!=H-1)L[H]=[D,W]}else if(w=H,H)L[H-1]=null}for(var M=L.length-1;M>=0;M--)if(!L[M])L.splice(M,1);return L.length?G.getItem(L):null},U._digLine=function K(Z){for(var Q=1;Q<Z.length;Q++){var V=Z[Q-1],q=Z[Q],X=new IZ(V[0],V[1],q[0],q[1]);X.create(this._digCallback),this._corridors.push(X)}},U._digCallback=function K(Z,Q,V){if(this._map[Z][Q]=V,V==0)this._dug++},U._isWallCallback=function K(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},U._canBeDugCallback=function K(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},B}(aZ),WQ=function(Y){K0(B,Y);function B(K,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,K,Z)||this,V._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},V.setOptions(Q),V._dirs=G0[V._options.topology],V._map=V._fillMap(0),V}var U=B.prototype;return U.randomize=function K(Z){for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)this._map[Q][V]=G.getUniform()<Z?1:0;return this},U.setOptions=function K(Z){Object.assign(this._options,Z)},U.set=function K(Z,Q,V){this._map[Z][Q]=V},U.create=function K(Z){var Q=this._fillMap(0),V=this._options.born,q=this._options.survive;for(var X=0;X<this._height;X++){var L=1,w=0;if(this._options.topology==6)L=2,w=X%2;for(var H=w;H<this._width;H+=L){var D=this._map[H][X],W=this._getNeighbors(H,X);if(D&&q.indexOf(W)!=-1)Q[H][X]=1;else if(!D&&V.indexOf(W)!=-1)Q[H][X]=1}}this._map=Q,Z&&this._serviceCallback(Z)},U._serviceCallback=function K(Z){for(var Q=0;Q<this._height;Q++){var V=1,q=0;if(this._options.topology==6)V=2,q=Q%2;for(var X=q;X<this._width;X+=V)Z(X,Q,this._map[X][Q])}},U._getNeighbors=function K(Z,Q){var V=0;for(var q=0;q<this._dirs.length;q++){var X=this._dirs[q],L=Z+X[0],w=Q+X[1];if(L<0||L>=this._width||w<0||w>=this._height)continue;V+=this._map[L][w]==1?1:0}return V},U.connect=function K(Z,Q,V){if(!Q)Q=0;var q=[],X={},L=1,w=[0,0];if(this._options.topology==6)L=2,w=[0,1];for(var H=0;H<this._height;H++)for(var D=w[H%2];D<this._width;D+=L)if(this._freeSpace(D,H,Q)){var W=[D,H];X[this._pointKey(W)]=W,q.push([D,H])}var R=q[G.getUniformInt(0,q.length-1)],M=this._pointKey(R),j={};j[M]=R,delete X[M],this._findConnected(j,X,[R],!1,Q);while(Object.keys(X).length>0){var S=this._getFromTo(j,X),u=S[0],h=S[1],c={};c[this._pointKey(u)]=u,this._findConnected(c,X,[u],!0,Q);var i=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;i.call(this,h,u,j,X,Q,V);for(var Z0 in c){var U0=c[Z0];this._map[U0[0]][U0[1]]=Q,j[Z0]=U0,delete X[Z0]}}Z&&this._serviceCallback(Z)},U._getFromTo=function K(Z,Q){var V=[0,0],q=[0,0],X,L=Object.keys(Z),w=Object.keys(Q);for(var H=0;H<5;H++){if(L.length<w.length){var D=L;q=Z[D[G.getUniformInt(0,D.length-1)]],V=this._getClosest(q,Q)}else{var W=w;V=Q[W[G.getUniformInt(0,W.length-1)]],q=this._getClosest(V,Z)}if(X=(V[0]-q[0])*(V[0]-q[0])+(V[1]-q[1])*(V[1]-q[1]),X<64)break}return[V,q]},U._getClosest=function K(Z,Q){var V=null,q=null;for(var X in Q){var L=Q[X],w=(L[0]-Z[0])*(L[0]-Z[0])+(L[1]-Z[1])*(L[1]-Z[1]);if(q==null||w<q)q=w,V=L}return V},U._findConnected=function K(Z,Q,V,q,X){while(V.length>0){var L=V.splice(0,1)[0],w=void 0;if(this._options.topology==6)w=[[L[0]+2,L[1]],[L[0]+1,L[1]-1],[L[0]-1,L[1]-1],[L[0]-2,L[1]],[L[0]-1,L[1]+1],[L[0]+1,L[1]+1]];else w=[[L[0]+1,L[1]],[L[0]-1,L[1]],[L[0],L[1]+1],[L[0],L[1]-1]];for(var H=0;H<w.length;H++){var D=this._pointKey(w[H]);if(Z[D]==null&&this._freeSpace(w[H][0],w[H][1],X)){if(Z[D]=w[H],!q)delete Q[D];V.push(w[H])}}}},U._tunnelToConnected=function K(Z,Q,V,q,X,L){var w,H;if(Q[0]<Z[0])w=Q,H=Z;else w=Z,H=Q;for(var D=w[0];D<=H[0];D++){this._map[D][w[1]]=X;var W=[D,w[1]],R=this._pointKey(W);V[R]=W,delete q[R]}if(L&&w[0]<H[0])L(w,[H[0],w[1]]);var M=H[0];if(Q[1]<Z[1])w=Q,H=Z;else w=Z,H=Q;for(var j=w[1];j<H[1];j++){this._map[M][j]=X;var S=[M,j],u=this._pointKey(S);V[u]=S,delete q[u]}if(L&&w[1]<H[1])L([H[0],w[1]],[H[0],H[1]])},U._tunnelToConnected6=function K(Z,Q,V,q,X,L){var w,H;if(Q[0]<Z[0])w=Q,H=Z;else w=Z,H=Q;var D=w[0],W=w[1];while(!(D==H[0]&&W==H[1])){var R=2;if(W<H[1])W++,R=1;else if(W>H[1])W--,R=1;if(D<H[0])D+=R;else if(D>H[0])D-=R;else if(H[1]%2)D-=R;else D+=R;this._map[D][W]=X;var M=[D,W],j=this._pointKey(M);V[j]=M,delete q[j]}if(L)L(Q,Z)},U._freeSpace=function K(Z,Q,V){return Z>=0&&Z<this._width&&Q>=0&&Q<this._height&&this._map[Z][Q]==V},U._pointKey=function K(Z){return Z[0]+"."+Z[1]},B}(k0),RQ={room:KZ,corridor:IZ},OQ=function(Y){K0(B,Y);function B(K,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,K,Z)||this,V._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},Q),V._features={room:4,corridor:4},V._map=[],V._featureAttempts=20,V._walls={},V._dug=0,V._digCallback=V._digCallback.bind(m0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(m0(V)),V._isWallCallback=V._isWallCallback.bind(m0(V)),V._priorityWallCallback=V._priorityWallCallback.bind(m0(V)),V}var U=B.prototype;return U.create=function K(Z){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var Q=(this._width-2)*(this._height-2);this._firstRoom();var V=Date.now(),q;do{q=0;var X=Date.now();if(X-V>this._options.timeLimit)break;var L=this._findWall();if(!L)break;var w=L.split(","),H=parseInt(w[0]),D=parseInt(w[1]),W=this._getDiggingDirection(H,D);if(!W)continue;var R=0;do if(R++,this._tryFeature(H,D,W[0],W[1])){this._removeSurroundingWalls(H,D),this._removeSurroundingWalls(H-W[0],D-W[1]);break}while(R<this._featureAttempts);for(var M in this._walls)if(this._walls[M]>1)q++}while(this._dug/Q<this._options.dugPercentage||q);if(this._addDoors(),Z)for(var j=0;j<this._width;j++)for(var S=0;S<this._height;S++)Z(j,S,this._map[j][S]);return this._walls={},this._map=[],this},U._digCallback=function K(Z,Q,V){if(V==0||V==2)this._map[Z][Q]=0,this._dug++;else this._walls[Z+","+Q]=1},U._isWallCallback=function K(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},U._canBeDugCallback=function K(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},U._priorityWallCallback=function K(Z,Q){this._walls[Z+","+Q]=2},U._firstRoom=function K(){var Z=Math.floor(this._width/2),Q=Math.floor(this._height/2),V=KZ.createRandomCenter(Z,Q,this._options);this._rooms.push(V),V.create(this._digCallback)},U._findWall=function K(){var Z=[],Q=[];for(var V in this._walls){var q=this._walls[V];if(q==2)Q.push(V);else Z.push(V)}var X=Q.length?Q:Z;if(!X.length)return null;var L=G.getItem(X.sort());return delete this._walls[L],L},U._tryFeature=function K(Z,Q,V,q){var X=G.getWeightedValue(this._features),L=RQ[X],w=L.createRandomAt(Z,Q,V,q,this._options);if(!w.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(w.create(this._digCallback),w instanceof KZ)this._rooms.push(w);if(w instanceof IZ)w.createPriorityWalls(this._priorityWallCallback),this._corridors.push(w);return!0},U._removeSurroundingWalls=function K(Z,Q){var V=G0[4];for(var q=0;q<V.length;q++){var X=V[q],L=Z+X[0],w=Q+X[1];delete this._walls[L+","+w],L=Z+2*X[0],w=Q+2*X[1],delete this._walls[L+","+w]}},U._getDiggingDirection=function K(Z,Q){if(Z<=0||Q<=0||Z>=this._width-1||Q>=this._height-1)return null;var V=null,q=G0[4];for(var X=0;X<q.length;X++){var L=q[X],w=Z+L[0],H=Q+L[1];if(!this._map[w][H]){if(V)return null;V=L}}if(!V)return null;return[-V[0],-V[1]]},U._addDoors=function K(){var Z=this._map;function Q(X,L){return Z[X][L]==1}for(var V=0;V<this._rooms.length;V++){var q=this._rooms[V];q.clearDoors(),q.addDoors(Q)}},B}(aZ);function eZ(Y,B,U){U[B[Y+1]]=U[Y],B[U[Y]]=B[Y+1],U[Y]=Y+1,B[Y+1]=Y}function tZ(Y,B,U){U[B[Y]]=U[Y],B[U[Y]]=B[Y],U[Y]=Y,B[Y]=Y}var MQ=function(Y){K0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.create=function K(Z){var Q=this._fillMap(1),V=Math.ceil((this._width-2)/2),q=0.375,X=[],L=[];for(var w=0;w<V;w++)X.push(w),L.push(w);X.push(V-1);var H;for(H=1;H+3<this._height;H+=2)for(var D=0;D<V;D++){var W=2*D+1,R=H;if(Q[W][R]=0,D!=X[D+1]&&G.getUniform()>q)eZ(D,X,L),Q[W+1][R]=0;if(D!=X[D]&&G.getUniform()>q)tZ(D,X,L);else Q[W][R+1]=0}for(var M=0;M<V;M++){var j=2*M+1,S=H;if(Q[j][S]=0,M!=X[M+1]&&(M==X[M]||G.getUniform()>q))eZ(M,X,L),Q[j+1][S]=0;tZ(M,X,L)}for(var u=0;u<this._width;u++)for(var h=0;h<this._height;h++)Z(u,h,Q[u][h]);return this},B}(k0),jQ=function(Y){K0(B,Y);function B(){var K=Y.apply(this,arguments)||this;return K._stack=[],K._map=[],K}var U=B.prototype;return U.create=function K(Z){var Q=this._width,V=this._height;this._map=[];for(var q=0;q<Q;q++){this._map.push([]);for(var X=0;X<V;X++){var L=q==0||X==0||q+1==Q||X+1==V;this._map[q].push(L?1:0)}}this._stack=[[1,1,Q-2,V-2]],this._process();for(var w=0;w<Q;w++)for(var H=0;H<V;H++)Z(w,H,this._map[w][H]);return this._map=[],this},U._process=function K(){while(this._stack.length){var Z=this._stack.shift();this._partitionRoom(Z)}},U._partitionRoom=function K(Z){var Q=[],V=[];for(var q=Z[0]+1;q<Z[2];q++){var X=this._map[q][Z[1]-1],L=this._map[q][Z[3]+1];if(X&&L&&!(q%2))Q.push(q)}for(var w=Z[1]+1;w<Z[3];w++){var H=this._map[Z[0]-1][w],D=this._map[Z[2]+1][w];if(H&&D&&!(w%2))V.push(w)}if(!Q.length||!V.length)return;var W=G.getItem(Q),R=G.getItem(V);this._map[W][R]=1;var M=[],j=[];M.push(j);for(var S=Z[0];S<W;S++)if(this._map[S][R]=1,S%2)j.push([S,R]);j=[],M.push(j);for(var u=W+1;u<=Z[2];u++)if(this._map[u][R]=1,u%2)j.push([u,R]);j=[],M.push(j);for(var h=Z[1];h<R;h++)if(this._map[W][h]=1,h%2)j.push([W,h]);j=[],M.push(j);for(var c=R+1;c<=Z[3];c++)if(this._map[W][c]=1,c%2)j.push([W,c]);var i=G.getItem(M);for(var Z0=0;Z0<M.length;Z0++){var U0=M[Z0];if(U0==i)continue;var H0=G.getItem(U0);this._map[H0[0]][H0[1]]=0}this._stack.push([Z[0],Z[1],W-1,R-1]),this._stack.push([W+1,Z[1],Z[2],R-1]),this._stack.push([Z[0],R+1,W-1,Z[3]]),this._stack.push([W+1,R+1,Z[2],Z[3]])},B}(k0),CQ=function(Y){K0(B,Y);function B(K,Z,Q){var V;if(Q===void 0)Q=0;return V=Y.call(this,K,Z)||this,V._regularity=Q,V._map=[],V}var U=B.prototype;return U.create=function K(Z){var Q=this._width,V=this._height,q=this._fillMap(1);Q-=Q%2?1:2,V-=V%2?1:2;var X=0,L=0,w=0,H=0,D=0,W=!1,R=[[0,0],[0,0],[0,0],[0,0]];do{if(X=1+2*Math.floor(G.getUniform()*(Q-1)/2),L=1+2*Math.floor(G.getUniform()*(V-1)/2),!D)q[X][L]=0;if(!q[X][L]){this._randomize(R);do{if(Math.floor(G.getUniform()*(this._regularity+1))==0)this._randomize(R);W=!0;for(var M=0;M<4;M++)if(w=X+R[M][0]*2,H=L+R[M][1]*2,this._isFree(q,w,H,Q,V)){q[w][H]=0,q[X+R[M][0]][L+R[M][1]]=0,X=w,L=H,W=!1,D++;break}}while(!W)}}while(D+1<Q*V/4);for(var j=0;j<this._width;j++)for(var S=0;S<this._height;S++)Z(j,S,q[j][S]);return this._map=[],this},U._randomize=function K(Z){for(var Q=0;Q<4;Q++)Z[Q][0]=0,Z[Q][1]=0;switch(Math.floor(G.getUniform()*4)){case 0:Z[0][0]=-1,Z[1][0]=1,Z[2][1]=-1,Z[3][1]=1;break;case 1:Z[3][0]=-1,Z[2][0]=1,Z[1][1]=-1,Z[0][1]=1;break;case 2:Z[2][0]=-1,Z[3][0]=1,Z[0][1]=-1,Z[1][1]=1;break;case 3:Z[1][0]=-1,Z[0][0]=1,Z[3][1]=-1,Z[2][1]=1;break}},U._isFree=function K(Z,Q,V,q,X){if(Q<1||V<1||Q>=q||V>=X)return!1;return Z[Q][V]},B}(k0),EQ=function(Y){K0(B,Y);function B(K,Z,Q){var V=Y.call(this,K,Z)||this;if(V.map=[],V.rooms=[],V.connectedCells=[],Q=Object.assign({cellWidth:3,cellHeight:3},Q),!Q.hasOwnProperty("roomWidth"))Q.roomWidth=V._calculateRoomSize(V._width,Q.cellWidth);if(!Q.hasOwnProperty("roomHeight"))Q.roomHeight=V._calculateRoomSize(V._height,Q.cellHeight);return V._options=Q,V}var U=B.prototype;return U.create=function K(Z){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),Z)for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)Z(Q,V,this.map[Q][V]);return this},U._calculateRoomSize=function K(Z,Q){var V=Math.floor(Z/Q*0.8),q=Math.floor(Z/Q*0.25);if(q<2)q=2;if(V<2)V=2;return[q,V]},U._initRooms=function K(){for(var Z=0;Z<this._options.cellWidth;Z++){this.rooms.push([]);for(var Q=0;Q<this._options.cellHeight;Q++)this.rooms[Z].push({x:0,y:0,width:0,height:0,connections:[],cellx:Z,celly:Q})}},U._connectRooms=function K(){var Z=G.getUniformInt(0,this._options.cellWidth-1),Q=G.getUniformInt(0,this._options.cellHeight-1),V,q,X,L=!1,w,H,D;do{D=[0,2,4,6],D=G.shuffle(D);do{if(L=!1,V=D.pop(),q=Z+G0[8][V][0],X=Q+G0[8][V][1],q<0||q>=this._options.cellWidth)continue;if(X<0||X>=this._options.cellHeight)continue;if(w=this.rooms[Z][Q],w.connections.length>0){if(w.connections[0][0]==q&&w.connections[0][1]==X)break}if(H=this.rooms[q][X],H.connections.length==0)H.connections.push([Z,Q]),this.connectedCells.push([q,X]),Z=q,Q=X,L=!0}while(D.length>0&&L==!1)}while(D.length>0)},U._connectUnconnectedRooms=function K(){var Z=this._options.cellWidth,Q=this._options.cellHeight;this.connectedCells=G.shuffle(this.connectedCells);var V,q,X;for(var L=0;L<this._options.cellWidth;L++)for(var w=0;w<this._options.cellHeight;w++)if(V=this.rooms[L][w],V.connections.length==0){var H=[0,2,4,6];H=G.shuffle(H),X=!1;do{var D=H.pop(),W=L+G0[8][D][0],R=w+G0[8][D][1];if(W<0||W>=Z||R<0||R>=Q)continue;if(q=this.rooms[W][R],X=!0,q.connections.length==0)break;for(var M=0;M<q.connections.length;M++)if(q.connections[M][0]==L&&q.connections[M][1]==w){X=!1;break}if(X)break}while(H.length);if(X)V.connections.push([q.cellx,q.celly]);else console.log("-- Unable to connect room.")}},U._createRandomRoomConnections=function K(){},U._createRooms=function K(){var Z=this._width,Q=this._height,V=this._options.cellWidth,q=this._options.cellHeight,X=Math.floor(this._width/V),L=Math.floor(this._height/q),w,H,D=this._options.roomWidth,W=this._options.roomHeight,R,M,j;for(var S=0;S<V;S++)for(var u=0;u<q;u++){if(R=X*S,M=L*u,R==0)R=1;if(M==0)M=1;if(w=G.getUniformInt(D[0],D[1]),H=G.getUniformInt(W[0],W[1]),u>0){j=this.rooms[S][u-1];while(M-(j.y+j.height)<3)M++}if(S>0){j=this.rooms[S-1][u];while(R-(j.x+j.width)<3)R++}var h=Math.round(G.getUniformInt(0,X-w)/2),c=Math.round(G.getUniformInt(0,L-H)/2);while(R+h+w>=Z)if(h)h--;else w--;while(M+c+H>=Q)if(c)c--;else H--;R=R+h,M=M+c,this.rooms[S][u].x=R,this.rooms[S][u].y=M,this.rooms[S][u].width=w,this.rooms[S][u].height=H;for(var i=R;i<R+w;i++)for(var Z0=M;Z0<M+H;Z0++)this.map[i][Z0]=0}},U._getWallPosition=function K(Z,Q){var V,q,X;if(Q==1||Q==3){if(V=G.getUniformInt(Z.x+1,Z.x+Z.width-2),Q==1)q=Z.y-2,X=q+1;else q=Z.y+Z.height+1,X=q-1;this.map[V][X]=0}else{if(q=G.getUniformInt(Z.y+1,Z.y+Z.height-2),Q==2)V=Z.x+Z.width+1,X=V-1;else V=Z.x-2,X=V+1;this.map[X][q]=0}return[V,q]},U._drawCorridor=function K(Z,Q){var V=Q[0]-Z[0],q=Q[1]-Z[1],X=Z[0],L=Z[1],w,H,D,W,R=[],M=Math.abs(V),j=Math.abs(q),S=G.getUniform(),u=S,h=1-S;if(H=V>0?2:6,D=q>0?4:0,M<j)w=Math.ceil(j*u),R.push([D,w]),R.push([H,M]),w=Math.floor(j*h),R.push([D,w]);else w=Math.ceil(M*u),R.push([H,w]),R.push([D,j]),w=Math.floor(M*h),R.push([H,w]);this.map[X][L]=0;while(R.length>0){W=R.pop();while(W[1]>0)X+=G0[8][W[0]][0],L+=G0[8][W[0]][1],this.map[X][L]=0,W[1]=W[1]-1}},U._createCorridors=function K(){var Z=this._options.cellWidth,Q=this._options.cellHeight,V,q,X,L,w;for(var H=0;H<Z;H++)for(var D=0;D<Q;D++){V=this.rooms[H][D];for(var W=0;W<V.connections.length;W++){if(q=V.connections[W],X=this.rooms[q[0]][q[1]],X.cellx>V.cellx)L=2,w=4;else if(X.cellx<V.cellx)L=4,w=2;else if(X.celly>V.celly)L=3,w=1;else L=1,w=3;this._drawCorridor(this._getWallPosition(V,L),this._getWallPosition(X,w))}}},B}(k0),AQ={Arena:DQ,Uniform:FQ,Cellular:WQ,Digger:OQ,EllerMaze:MQ,DividedMaze:jQ,IceyMaze:CQ,Rogue:EQ},NQ=function Y(){},vQ=0.5*(Math.sqrt(3)-1),s0=(3-Math.sqrt(3))/6,SQ=function(Y){K0(B,Y);function B(K){var Z;if(K===void 0)K=256;Z=Y.call(this)||this,Z._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var Q=[];for(var V=0;V<K;V++)Q.push(V);Q=G.shuffle(Q),Z._perms=[],Z._indexes=[];for(var q=0;q<2*K;q++)Z._perms.push(Q[q%K]),Z._indexes.push(Z._perms[q]%Z._gradients.length);return Z}var U=B.prototype;return U.get=function K(Z,Q){var V=this._perms,q=this._indexes,X=V.length/2,L=0,w=0,H=0,D,W=(Z+Q)*vQ,R=Math.floor(Z+W),M=Math.floor(Q+W),j=(R+M)*s0,S=R-j,u=M-j,h=Z-S,c=Q-u,i,Z0;if(h>c)i=1,Z0=0;else i=0,Z0=1;var U0=h-i+s0,H0=c-Z0+s0,E0=h-1+2*s0,fZ=c-1+2*s0,bZ=C(R,X),kZ=C(M,X),o0=0.5-h*h-c*c;if(o0>=0){o0*=o0,D=q[bZ+V[kZ]];var JJ=this._gradients[D];L=o0*o0*(JJ[0]*h+JJ[1]*c)}var a0=0.5-U0*U0-H0*H0;if(a0>=0){a0*=a0,D=q[bZ+i+V[kZ+Z0]];var QJ=this._gradients[D];w=a0*a0*(QJ[0]*U0+QJ[1]*H0)}var i0=0.5-E0*E0-fZ*fZ;if(i0>=0){i0*=i0,D=q[bZ+1+V[kZ+1]];var VJ=this._gradients[D];H=i0*i0*(VJ[0]*E0+VJ[1]*fZ)}return 70*(L+w+H)},B}(NQ),IQ={Simplex:SQ},ZJ=function(){function Y(U,K,Z,Q){if(Q===void 0)Q={};if(this._toX=U,this._toY=K,this._passableCallback=Z,this._options=Object.assign({topology:8},Q),this._dirs=G0[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var B=Y.prototype;return B._getNeighbors=function U(K,Z){var Q=[];for(var V=0;V<this._dirs.length;V++){var q=this._dirs[V],X=K+q[0],L=Z+q[1];if(!this._passableCallback(X,L))continue;Q.push([X,L])}return Q},Y}(),fQ=function(Y){K0(B,Y);function B(K,Z,Q,V){var q=Y.call(this,K,Z,Q,V)||this;return q._computed={},q._todo=[],q._add(K,Z,null),q}var U=B.prototype;return U.compute=function K(Z,Q,V){var q=Z+","+Q;if(!(q in this._computed))this._compute(Z,Q);if(!(q in this._computed))return;var X=this._computed[q];while(X)V(X.x,X.y),X=X.prev},U._compute=function K(Z,Q){while(this._todo.length){var V=this._todo.shift();if(V.x==Z&&V.y==Q)return;var q=this._getNeighbors(V.x,V.y);for(var X=0;X<q.length;X++){var L=q[X],w=L[0],H=L[1],D=w+","+H;if(D in this._computed)continue;this._add(w,H,V)}}},U._add=function K(Z,Q,V){var q={x:Z,y:Q,prev:V};this._computed[Z+","+Q]=q,this._todo.push(q)},B}(ZJ),bQ=function(Y){K0(B,Y);function B(K,Z,Q,V){var q;if(V===void 0)V={};return q=Y.call(this,K,Z,Q,V)||this,q._todo=[],q._done={},q}var U=B.prototype;return U.compute=function K(Z,Q,V){this._todo=[],this._done={},this._fromX=Z,this._fromY=Q,this._add(this._toX,this._toY,null);while(this._todo.length){var q=this._todo.shift(),X=q.x+","+q.y;if(X in this._done)continue;if(this._done[X]=q,q.x==Z&&q.y==Q)break;var L=this._getNeighbors(q.x,q.y);for(var w=0;w<L.length;w++){var H=L[w],D=H[0],W=H[1],R=D+","+W;if(R in this._done)continue;this._add(D,W,q)}}var M=this._done[Z+","+Q];if(!M)return;while(M)V(M.x,M.y),M=M.prev},U._add=function K(Z,Q,V){var q=this._distance(Z,Q),X={x:Z,y:Q,prev:V,g:V?V.g+1:0,h:q},L=X.g+X.h;for(var w=0;w<this._todo.length;w++){var H=this._todo[w],D=H.g+H.h;if(L<D||L==D&&q<H.h){this._todo.splice(w,0,X);return}}this._todo.push(X)},U._distance=function K(Z,Q){switch(this._options.topology){case 4:return Math.abs(Z-this._fromX)+Math.abs(Q-this._fromY);case 6:var V=Math.abs(Z-this._fromX),q=Math.abs(Q-this._fromY);return q+Math.max(0,(V-q)/2);case 8:return Math.max(Math.abs(Z-this._fromX),Math.abs(Q-this._fromY))}},B}(ZJ),kQ={Dijkstra:fQ,AStar:bQ},uQ=function(){function Y(U){this._scheduler=U,this._lock=1}var B=Y.prototype;return B.start=function U(){return this.unlock()},B.lock=function U(){return this._lock++,this},B.unlock=function U(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var K=this._scheduler.next();if(!K)return this.lock();var Z=K.act();if(Z&&Z.then)this.lock(),Z.then(this.unlock.bind(this))}return this},Y}(),TQ=function(){function Y(U,K){if(K===void 0)K={};this._reflectivityCallback=U,this._options={},K=Object.assign({passes:1,emissionThreshold:100,range:10},K),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(K)}var B=Y.prototype;return B.setOptions=function U(K){if(Object.assign(this._options,K),K&&K.range)this.reset();return this},B.setFOV=function U(K){return this._fov=K,this._fovCache={},this},B.setLight=function U(K,Z,Q){var V=K+","+Z;if(Q)this._lights[V]=typeof Q=="string"?g(Q):Q;else delete this._lights[V];return this},B.clearLights=function U(){this._lights={}},B.reset=function U(){return this._reflectivityCache={},this._fovCache={},this},B.compute=function U(K){var Z={},Q={},V={};for(var q in this._lights){var X=this._lights[q];Q[q]=[0,0,0],m(Q[q],X)}for(var L=0;L<this._options.passes;L++){if(this._emitLight(Q,V,Z),L+1==this._options.passes)continue;Q=this._computeEmitters(V,Z)}for(var w in V){var H=w.split(","),D=parseInt(H[0]),W=parseInt(H[1]);K(D,W,V[w])}return this},B._emitLight=function U(K,Z,Q){for(var V in K){var q=V.split(","),X=parseInt(q[0]),L=parseInt(q[1]);this._emitLightFromCell(X,L,K[V],Z),Q[V]=1}return this},B._computeEmitters=function U(K,Z){var Q={};for(var V in K){if(V in Z)continue;var q=K[V],X=void 0;if(V in this._reflectivityCache)X=this._reflectivityCache[V];else{var L=V.split(","),w=parseInt(L[0]),H=parseInt(L[1]);X=this._reflectivityCallback(w,H),this._reflectivityCache[V]=X}if(X==0)continue;var D=[0,0,0],W=0;for(var R=0;R<3;R++){var M=Math.round(q[R]*X);D[R]=M,W+=M}if(W>this._options.emissionThreshold)Q[V]=D}return Q},B._emitLightFromCell=function U(K,Z,Q,V){var q=K+","+Z,X;if(q in this._fovCache)X=this._fovCache[q];else X=this._updateFOV(K,Z);for(var L in X){var w=X[L],H=void 0;if(L in V)H=V[L];else H=[0,0,0],V[L]=H;for(var D=0;D<3;D++)H[D]+=Math.round(Q[D]*w)}return this},B._updateFOV=function U(K,Z){var Q=K+","+Z,V={};this._fovCache[Q]=V;var q=this._options.range;function X(L,w,H,D){var W=L+","+w,R=D*(1-H/q);if(R==0)return;V[W]=R}return this._fov.compute(K,Z,q,X.bind(this)),V},Y}(),gQ=n,hQ=s,xQ=KQ;J.Color=hQ,J.DEFAULT_HEIGHT=NZ,J.DEFAULT_WIDTH=AZ,J.DIRS=G0,J.Display=c0,J.Engine=uQ,J.EventQueue=oZ,J.FOV=PQ,J.KEYS=qQ,J.Lighting=TQ,J.Map=AQ,J.Noise=IQ,J.Path=kQ,J.RNG=G,J.Scheduler=YQ,J.StringGenerator=$Q,J.Text=xQ,J.Util=gQ,Object.defineProperty(J,"__esModule",{value:!0})})});var dQ=typeof window!=="undefined"?window.innerWidth:0,lQ=typeof window!=="undefined"?window.innerHeight:0;var o={cameraWidth:Math.floor(dQ/32),cameraHeight:Math.floor(lQ/32),chatLogMaxSize:100,chatLogMaxDisplaySize:8,debug:!0,fontSize:32,highlightEnemy:!0,showGrid:!0,showUI:!0,zoom:1},TZ={WIDTH:1024,HEIGHT:1024},B0={width:Math.floor(o.cameraWidth*(1/o.zoom)),height:Math.floor(o.cameraHeight*(1/o.zoom)),bg:"transparent",fontSize:Math.floor(o.fontSize*o.zoom),layout:"tile-gl",tileWidth:32,tileHeight:32,tileSet:null,tileMap:null,tileColorize:!0};function qJ(J,z){let $=J.entities[z];return`DEBUG: ${z} at ${$.mapId},${$.x},${$.y}`}class qZ{name;description;energyDelta;constructor(J,z,$=0){this.name=J,this.description=z,this.energyDelta=$}}class e0{name;description;constructor(J,z){this.name=J,this.description=z}}class M0{key;description;constructor(J,z){this.key=J,this.description=z}}class u0{name;description;constructor(J,z){this.name=J,this.description=z}}class P0{name;description;icon;color;energyMax;unlockCondition;constructor(J,z,$,G=100){this.name=J,this.description=z,this.icon=$,this.energyMax=G,this.color="white",this.unlockCondition=null}}class t0{name;description;color;constructor(J,z,$){this.name=J,this.description=z,this.color=$}}class Y0{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(J,z,$,G="cyberyellow",P=0,O=0,C=0,I=0,N=0,b=[]){this.name=J,this.description=z,this.icon=$,this.color=G,this.energyDelta=P,this.matter=O,this.gold=C,this.damage=I,this.energyCost=N,this.effects=b}}class l{name;description;icon;fg;bg;energyDelta;constructor(J,z,$=null,G="white",P="black",O=0){this.name=J,this.description=z,this.icon=$,this.fg=G,this.bg=P,this.energyDelta=O}}var F={actions:{Enter:new qZ("Enter","Enter a portal or plant atmosphere"),Launch:new qZ("Launch","Launch into space",-10),Wait:new qZ("Wait","Wait one turn in place")},ais:{aggrorange:new e0("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new e0("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new e0("guardian","Idles at a position and only fights back if engaged"),interactenrage:new e0("interactenrage","Gets hostile when getting talked to too often!")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",mutedcyan:"#2cc9c5",mutedyellow:"#b0a216",mutedmagenta:"#a716b0",mutedgreen:"#5ca821",mutedblue:"#1628b0",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new M0("N","Move/interact/combat north"),E:new M0("E","Move/interact/combat east"),S:new M0("S","Move/interact/combat south"),W:new M0("W","Move/interact/combat west"),A:new M0("A","Primary action, confirm"),B:new M0("B","Take a break, cancel"),"1":new M0("1","Secondary action, first quick slot"),"2":new M0("2","Tertiary action, second quick slot"),M:new M0("M","Menu"),"#":new M0("#","Open prompt")},dialogs:{bot_bar_aerobot_backstage:"Huh? How did you get here?",bot_bar_aerobot_charger:"Feel free to recharge on those chargepads and enjoy the show.",bot_bar_aerobot_spa_down:"Have you been to our shop, yet?",bot_bar_aerobot_spa_up:"Ahhhh, so refreshing!",bot_bar_aerobot_welcome:"Welcome to the Bot Bar. How may we serve you?",bot_dormitory_aerobot_down:"Would you please go to your own pod?",bot_dormitory_aerobot_up:"Pod, sweet pod!",bot_dormitory_graffiti:"Not all pods are created equal! Rad!",bot_dormitory_workbot_left:"This pod is taken, go away!",bot_dormitory_workbot_right:"Brzzzt! Brzzzt!",bot_factory_workbot_assembly:"The assembly line is unblocked!",bot_factory_workbot_drain:"Don't come too close to the drain or you'll lose your stuff!",bot_factory_workbot_forebot:"What are you doing here? Get back to work!",bot_factory_workbot_sewers:"Sewage water is spilling over again.",bot_factory_workbot_workwork:"Work, work!",bot_factory_workbot_wrench:"I lost a wrench somewhere here...",bot_prison_aerobot:"I'm innocent! I'm innocent! I'm innocent! Beep!",bot_prison_workbot:"Thanks for freeing me! Guess I don't need this Pickaxe anymore...",bot_stadium_botracing:"Now this is botracing!",bot_station_graffiti:"Yo! The factory has a hidden backdoor!",bot_station_graffiti_statues:"One statue isn't like the others! Ey!",bot_station_pioneer:"You shall not pass!",manual_spirit:"Weeee!",manual_aerobot:"Huh? Why don't you have a hull?",manual_workbot:"Work, work!",manual_cleaner:"Follow the rules! Okay?",manual_pioneer:"Don't talk to me, weakling!",playground_label_top_portal:"Goes to top left side of sun",playground_label_bottom_portal:"Goes to top left corner of solar system",shop_instance_aerobot_shopper:"It's shiny!!!",shop_instance_shopkeeper:"Welcome! What does your engine desire?",shop_instance_workbot_shopper:"This shop is not so secret after all..."},effects:{Recharger:new u0("Recharger","Doubles energy gained from chargepads"),RockCrusher:new u0("Rock Crusher","Mines rock"),Screwing:new u0("Screwing","Unscrews the sewer portal covers"),WallCrusher:new u0("Wall Crusher","Tears down weak walls"),WaterImmunity:new u0("Water Immunity","No damage taken from water"),WaterShield:new u0("Water Shield","Reduces damage taken from water")},entities:{movableboulder:new P0("Boulder","A movable rock","o",2),movablebox:new P0("Box","A movable box","x",2),Spirit:new P0("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new P0("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new P0("WorkBot","Basic factory worker","B"),Cleaner:new P0("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new P0("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Graffiticyan:new P0("Graffiti","Writing on the wall","zc",2),Graffitimagenta:new P0("Graffiti","Writing on the wall","zm",2),Graffitiyellow:new P0("Graffiti","Writing on the wall","zy",2),Valkyrie:new P0("Valkyrie","Airbourne war logistics","V",160),Pioneer:new P0("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200),RoboRat:new P0("RoboRat","Minor self-assembled critter","r",5)},factions:{Critters:new t0("Critters","Small pests","cyberyellow"),Spirits:new t0("Spirits","Default player faction","white"),Pyrates:new t0("Pyrates","Default enemy faction","cybermagenta"),Guardians:new t0("Guardians","Bot station guardians","cybercyan")},items:{battery:new Y0("Battery","Increases maximum energy","b","cyberyellow",10),chest:new Y0("Chest","A chest. What might be inside?","i","cyberyellow"),energy:new Y0("Energy","Energy pack","e","cyberyellow",10),gold:new Y0("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new Y0("Goo","A minor matter source","goo","gray",0,1),junk:new Y0("Junk","Broken bot","%","gray",0,1),matter:new Y0("Matter","A pile of stuff","m","gray",0,100),broom:new Y0("Broom","Sweeps the floor","ib","cyberyellow",0,0,0,-10,-1),cheat:new Y0("Cheat","Most powerful tool, totally legit","icheat","cyberyellow",0,0,0,-500,-1,["Recharger","Rock Crusher","Screwing","Wall Crusher","Water Shield"]),hammer:new Y0("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["Wall Crusher"]),pickaxe:new Y0("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["Rock Crusher"]),ratbite:new Y0("Rat Bite","Only rats have this","irb","cyberyellow",0,0,0,-5,-1,["Water Immunity"]),shocker:new Y0("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1,["Recharger"]),trident:new Y0("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["Water Shield"]),wrench:new Y0("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1,["Screwing"])},maps:{bot_bar:`!
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
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:o.showGrid?new l("void","Just nothing here",".","gray"):new l("void","Just nothing here"),voidtrue:new l("voidtrue","Really nothing here and you shouldn't get there ever!","_"),voidhidden:new l("voidhidden","Looks like a wall, but isn't!","#","gray","black"),water:new l("water","Rust and other dangers await","~","cybercyan","cyberblue",-2),watersewage:new l("watersewage","Rust, goo and other dangers await","~~","cyberyellow","cybergreen",-4),drain:new l("drain","Drains gold, matter and some of your energy","*","cybermagenta","black",-5),rock:new l("rock","Hidden treasures may await","'","white","gray"),tree:new l("tree","Lots of trees make a forest","t","brown","black"),wall:new l("wall","A strong wall","#","gray","black"),wallstatueaerobot:new l("wallstatueaerobot","A small statue looking like an AeroBot","sa","gray","black"),wallstatuecleaner:new l("wallstatuecleaner","A small statue looking like a Cleaner","sc","gray","black"),wallstatuepioneer:new l("wallstatuepioneer","A small statue looking like a Pioneer","sp","gray","black"),wallstatueworkbot:new l("wallstatueworkbot","A small statue looking like a WorkBot","sb","gray","black"),wallweak:new l("wallweak","A weakened wall","+","gray","black"),chargepad:new l("chargepad","Recharges energy and health","=","cyberyellow","black",2),movenorth:new l("movenorth","Moves you north","^^","cyberyellow"),moveeast:new l("moveeast","Moves you east",">>","cyberyellow"),movesouth:new l("movesouth","Moves you south","vv","cyberyellow"),movewest:new l("movewest","Moves you west","<<","cyberyellow"),portal:new l("portal","Gateway to another map","O","cyberyellow","gray"),portalclosed:new l("portalclosed","Closed gateway to another map","Oc","black","gray"),portalhidden:new l("portalhidden","Hidden gateway to another map","#","gray","black"),portallauncher:new l("portallauncher","Launches into space","O","cyberyellow","gray"),portalsewers:new l("portalsewers","Needs some tool to open","#~","gray","black"),portalstartworkbot:new l("portalstartworkbot","Start playing as a WorkBot","OB","white"),portalstartaerobot:new l("portalstartaerobot","Start playing as a AeroBot","OA","white"),"_portalstart?":new l("_portalstart?","Not unlocked, yet!","O?","white"),spacerock:new l("spacerock","Mountains as seen from space, non-blocking!","'s","white","gray"),spacetree:new l("spacetree","Forest as seen from space","ts","brown","darkgray"),spacewater:new l("spacewater","Water as seen from space, not dangerous!","~s","cybercyan","cyberblue"),spacevoid:new l("spacevoid","Void/ground as seen from space",".s","darkgray","darkgray"),spacevoidstarwhite:new l("spacevoidstarwhite","Space with a white background star",".w","white"),spacevoidstaryellow:new l("spacevoidstaryellow","Space with a yellow background star",".y","cyberyellow"),sun:new l("sun","It's hot, really hot!","§","cyberyellow","cyberyellow",-100),terminal:new l("terminal","A computer terminal","$","cyberyellow"),tv:new l("tv","A big billboard screen","!","black","cyberyellow")},uitexts:{}};function zJ(J){if(Object.hasOwn(F.dialogs,J))return F.dialogs[J];return`TODO: ${J} needs localization!`}function L0(J,z){return J.chatLog.push(z),J.chatLog=J.chatLog.slice(-o.chatLogMaxSize),J}function F0(J,z,$,G,P=0,O=0,C={}){let I={id:z,type:$,mapId:G,x:P,y:O,energy:10,energyMax:10,gold:0,matter:0,message:null,interactions:0,options:C};return J=UZ(J,I,$),J.entities[I.id]=I,J}function zZ(J,z){return J.entities[z]=void 0,delete J.entities[z],J.tools[z]=void 0,J}function T0(J,z){let $=Object.keys(J.entities),G=[];for(let P=0;P<$.length;P++){let O=J.entities[$[P]];if(O.mapId===z)G.push(O)}return G}function UJ(J,z,$,G){let P=T0(J,z).filter((O)=>O.x===$&&O.y===G);if(P.length>0)return P[0];return null}function UZ(J,z,$){if(z.type=$,z.energy=$.energyMax,z.energyMax=$.energyMax,z.gold=0,z.matter=0,!j0(z))J.tools[z.id]=void 0;return J}function $J(J,z,$){if(z===$)return J;if(z.options.faction===$.options.faction||gZ($)){if($.options.dialog){let G=$?.options?.name?$.options.name:$.type.name;J=L0(J,G+": "+zJ($.options.dialog)),$.interactions++}}else{let G=z.id,P=$.id;J._combatQueue.push({entityId:G,otherEntityId:P})}if($.interactions>=3&&$.options?.ai===F.ais.interactenrage)$.options.faction=F.factions.Pyrates;return J}function j0(J){return J.type===F.entities.movableboulder||J.type===F.entities.movablebox}function gZ(J){return J.type===F.entities.Graffiticyan||J.type===F.entities.Graffitimagenta||J.type===F.entities.Graffitiyellow}function $Z(J,z){let $={A:F.actions.Wait,B:F.actions.Wait};if(!!J.lastSpacePositionByEntity[z.id]&&z.energy>Math.abs(F.actions.Launch.energyDelta))$.A=F.actions.Launch;let P=J.maps[z.mapId].getTile(z.x,z.y);if(!!P.options.mapId&&"x"in P.options&&"y"in P.options)$.A=F.actions.Enter;return $}function hZ(J,z,$){let G=J._eventSubscribers[z];if(G)for(let P=0;P<G.length;P++){let O=G[P];J=O(J,$)}return J}function xZ(J,z,$){if(z in J._eventSubscribers);else J._eventSubscribers[z]=[];return J._eventSubscribers[z].push($),J}function g0(J,z,$,G=0,P=0){let C={id:XZ($,G,P),type:z,mapId:$,x:G,y:P,energy:z.energyDelta,gold:z.gold,matter:z.matter};return J.items[C.id]=C,J}function XJ(J,z,$,G=0,P=0){let O=F.items.junk,I={id:XZ($,G,P),type:O,mapId:$,x:G,y:P,energy:O.energyDelta,gold:O.gold,matter:z};return J.items[I.id]=I,J}function ZZ(J,z,$,G=0,P=0,O,C){let N={id:XZ($,G,P),type:z,mapId:$,x:G,y:P,energy:z.energyDelta,gold:O,matter:C};return J.items[N.id]=N,J}function XZ(J,z,$){return"item,"+J+","+z+","+$}function _Z(J,z){return J.items[z]=void 0,delete J.items[z],J}function GZ(J,z){let $=Object.keys(J.items),G=[];for(let P=0;P<$.length;P++){let O=J.items[$[P]];if(O.mapId===z)G.push(O)}return G}function GJ(J,z,$,G){let P=XZ(z,$,G);if(P in J.items)return J.items[P];return null}function BZ(J,z){return J.tools[z]}function BJ(J,z,$){if(j0(z))return J;if(!rQ(z,$))return J;if(nQ($))J=mZ(J,z.id,$.type);else{if($.type===F.items.battery)z.energyMax+=$.energy;if(J._energyQueue.push({entityId:z.id,energyDelta:$.energy}),z.id.startsWith("player"))J=L0(J,`Picked up ${$.type.name}.`)}return z.gold+=$.gold,z.matter+=$.matter,_Z(J,$.id),J}function mZ(J,z,$){let G={type:$};if(J.tools[z]=G,z.startsWith("player"))J=L0(J,`Equipped ${$.name}.`);return J}function nQ(J){return J.type.energyCost<0}function rQ(J,z){return J.gold+z.gold>=0&&J.matter+z.matter>=0}/*!
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
 */var sQ=function(J){var z={};function $(G){if(z[G])return z[G].exports;var P=z[G]={i:G,l:!1,exports:{}};return J[G].call(P.exports,P,P.exports,$),P.l=!0,P.exports}return $.m=J,$.c=z,$.d=function(G,P,O){$.o(G,P)||Object.defineProperty(G,P,{enumerable:!0,get:O})},$.r=function(G){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(G,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(G,"__esModule",{value:!0})},$.t=function(G,P){if(1&P&&(G=$(G)),8&P)return G;if(4&P&&typeof G=="object"&&G&&G.__esModule)return G;var O=Object.create(null);if($.r(O),Object.defineProperty(O,"default",{enumerable:!0,value:G}),2&P&&typeof G!="string")for(var C in G)$.d(O,C,function(I){return G[I]}.bind(null,C));return O},$.n=function(G){var P=G&&G.__esModule?function(){return G.default}:function(){return G};return $.d(P,"a",P),P},$.o=function(G,P){return Object.prototype.hasOwnProperty.call(G,P)},$.p="/bin/",$($.s=0)}([function(J,z,$){var G={},P=$(1),O=$(2),C=$(3);J.exports=G;var I=1;G.js=function(){var N,b,n,J0=!1,Q0={},d={},g={},_={},m=!0,r={},y=[],z0=Number.MAX_VALUE,X0=!1;this.setAcceptableTiles=function(f){f instanceof Array?n=f:!isNaN(parseFloat(f))&&isFinite(f)&&(n=[f])},this.enableSync=function(){J0=!0},this.disableSync=function(){J0=!1},this.enableDiagonals=function(){X0=!0},this.disableDiagonals=function(){X0=!1},this.setGrid=function(f){N=f;for(var v=0;v<N.length;v++)for(var E=0;E<N[0].length;E++)d[N[v][E]]||(d[N[v][E]]=1)},this.setTileCost=function(f,v){d[f]=v},this.setAdditionalPointCost=function(f,v,E){g[v]===void 0&&(g[v]={}),g[v][f]=E},this.removeAdditionalPointCost=function(f,v){g[v]!==void 0&&delete g[v][f]},this.removeAllAdditionalPointCosts=function(){g={}},this.setDirectionalCondition=function(f,v,E){_[v]===void 0&&(_[v]={}),_[v][f]=E},this.removeAllDirectionalConditions=function(){_={}},this.setIterationsPerCalculation=function(f){z0=f},this.avoidAdditionalPoint=function(f,v){Q0[v]===void 0&&(Q0[v]={}),Q0[v][f]=1},this.stopAvoidingAdditionalPoint=function(f,v){Q0[v]!==void 0&&delete Q0[v][f]},this.enableCornerCutting=function(){m=!0},this.disableCornerCutting=function(){m=!1},this.stopAvoidingAllAdditionalPoints=function(){Q0={}},this.findPath=function(f,v,E,s,t){var V0=function(v0){J0?t(v0):setTimeout(function(){t(v0)})};if(n===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(N===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(f<0||v<0||E<0||s<0||f>N[0].length-1||v>N.length-1||E>N[0].length-1||s>N.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(f!==E||v!==s){for(var D0=N[s][E],$0=!1,C0=0;C0<n.length;C0++)if(D0===n[C0]){$0=!0;break}if($0!==!1){var w0=new P;w0.openList=new C(function(v0,p0){return v0.bestGuessDistance()-p0.bestGuessDistance()}),w0.isDoneCalculating=!1,w0.nodeHash={},w0.startX=f,w0.startY=v,w0.endX=E,w0.endY=s,w0.callback=V0,w0.openList.push(e(w0,w0.startX,w0.startY,null,1));var r0=I++;return r[r0]=w0,y.push(r0),r0}V0(null)}else V0([])},this.cancelPath=function(f){return f in r&&(delete r[f],!0)},this.calculate=function(){if(y.length!==0&&N!==void 0&&n!==void 0)for(b=0;b<z0;b++){if(y.length===0)return;J0&&(b=0);var f=y[0],v=r[f];if(v!==void 0)if(v.openList.size()!==0){var E=v.openList.pop();if(v.endX!==E.x||v.endY!==E.y)E.list=0,E.y>0&&A(v,E,0,-1,1*x(E.x,E.y-1)),E.x<N[0].length-1&&A(v,E,1,0,1*x(E.x+1,E.y)),E.y<N.length-1&&A(v,E,0,1,1*x(E.x,E.y+1)),E.x>0&&A(v,E,-1,0,1*x(E.x-1,E.y)),X0&&(E.x>0&&E.y>0&&(m||k(N,n,E.x,E.y-1,E)&&k(N,n,E.x-1,E.y,E))&&A(v,E,-1,-1,1.4*x(E.x-1,E.y-1)),E.x<N[0].length-1&&E.y<N.length-1&&(m||k(N,n,E.x,E.y+1,E)&&k(N,n,E.x+1,E.y,E))&&A(v,E,1,1,1.4*x(E.x+1,E.y+1)),E.x<N[0].length-1&&E.y>0&&(m||k(N,n,E.x,E.y-1,E)&&k(N,n,E.x+1,E.y,E))&&A(v,E,1,-1,1.4*x(E.x+1,E.y-1)),E.x>0&&E.y<N.length-1&&(m||k(N,n,E.x,E.y+1,E)&&k(N,n,E.x-1,E.y,E))&&A(v,E,-1,1,1.4*x(E.x-1,E.y+1)));else{var s=[];s.push({x:E.x,y:E.y});for(var t=E.parent;t!=null;)s.push({x:t.x,y:t.y}),t=t.parent;s.reverse();var V0=s;v.callback(V0),delete r[f],y.shift()}}else v.callback(null),delete r[f],y.shift();else y.shift()}};var A=function(f,v,E,s,t){var V0=v.x+E,D0=v.y+s;if((Q0[D0]===void 0||Q0[D0][V0]===void 0)&&k(N,n,V0,D0,v)){var $0=e(f,V0,D0,v,t);$0.list===void 0?($0.list=1,f.openList.push($0)):v.costSoFar+t<$0.costSoFar&&($0.costSoFar=v.costSoFar+t,$0.parent=v,f.openList.updateItem($0))}},k=function(f,v,E,s,t){var V0=_[s]&&_[s][E];if(V0){var D0=T(t.x-E,t.y-s);if(!function(){for(var C0=0;C0<V0.length;C0++)if(V0[C0]===D0)return!0;return!1}())return!1}for(var $0=0;$0<v.length;$0++)if(f[s][E]===v[$0])return!0;return!1},T=function(f,v){if(f===0&&v===-1)return G.TOP;if(f===1&&v===-1)return G.TOP_RIGHT;if(f===1&&v===0)return G.RIGHT;if(f===1&&v===1)return G.BOTTOM_RIGHT;if(f===0&&v===1)return G.BOTTOM;if(f===-1&&v===1)return G.BOTTOM_LEFT;if(f===-1&&v===0)return G.LEFT;if(f===-1&&v===-1)return G.TOP_LEFT;throw new Error("These differences are not valid: "+f+", "+v)},x=function(f,v){return g[v]&&g[v][f]||d[N[v][f]]},e=function(f,v,E,s,t){if(f.nodeHash[E]!==void 0){if(f.nodeHash[E][v]!==void 0)return f.nodeHash[E][v]}else f.nodeHash[E]={};var V0=a(v,E,f.endX,f.endY);if(s!==null)var D0=s.costSoFar+t;else D0=0;var $0=new O(s,v,E,D0,V0);return f.nodeHash[E][v]=$0,$0},a=function(f,v,E,s){var t,V0;return X0?(t=Math.abs(f-E))<(V0=Math.abs(v-s))?1.4*t+V0:1.4*V0+t:(t=Math.abs(f-E))+(V0=Math.abs(v-s))}},G.TOP="TOP",G.TOP_RIGHT="TOP_RIGHT",G.RIGHT="RIGHT",G.BOTTOM_RIGHT="BOTTOM_RIGHT",G.BOTTOM="BOTTOM",G.BOTTOM_LEFT="BOTTOM_LEFT",G.LEFT="LEFT",G.TOP_LEFT="TOP_LEFT"},function(J,z){J.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(J,z){J.exports=function($,G,P,O,C){this.parent=$,this.x=G,this.y=P,this.costSoFar=O,this.simpleDistanceToTarget=C,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(J,z,$){J.exports=$(4)},function(J,z,$){var G,P,O;(function(){var C,I,N,b,n,J0,Q0,d,g,_,m,r,y,z0,X0;N=Math.floor,_=Math.min,I=function(A,k){return A<k?-1:A>k?1:0},g=function(A,k,T,x,e){var a;if(T==null&&(T=0),e==null&&(e=I),T<0)throw new Error("lo must be non-negative");for(x==null&&(x=A.length);T<x;)e(k,A[a=N((T+x)/2)])<0?x=a:T=a+1;return[].splice.apply(A,[T,T-T].concat(k)),k},J0=function(A,k,T){return T==null&&(T=I),A.push(k),z0(A,0,A.length-1,T)},n=function(A,k){var T,x;return k==null&&(k=I),T=A.pop(),A.length?(x=A[0],A[0]=T,X0(A,0,k)):x=T,x},d=function(A,k,T){var x;return T==null&&(T=I),x=A[0],A[0]=k,X0(A,0,T),x},Q0=function(A,k,T){var x;return T==null&&(T=I),A.length&&T(A[0],k)<0&&(k=(x=[A[0],k])[0],A[0]=x[1],X0(A,0,T)),k},b=function(A,k){var T,x,e,a,f,v;for(k==null&&(k=I),f=[],x=0,e=(a=function(){v=[];for(var E=0,s=N(A.length/2);0<=s?E<s:E>s;0<=s?E++:E--)v.push(E);return v}.apply(this).reverse()).length;x<e;x++)T=a[x],f.push(X0(A,T,k));return f},y=function(A,k,T){var x;if(T==null&&(T=I),(x=A.indexOf(k))!==-1)return z0(A,0,x,T),X0(A,x,T)},m=function(A,k,T){var x,e,a,f,v;if(T==null&&(T=I),!(e=A.slice(0,k)).length)return e;for(b(e,T),a=0,f=(v=A.slice(k)).length;a<f;a++)x=v[a],Q0(e,x,T);return e.sort(T).reverse()},r=function(A,k,T){var x,e,a,f,v,E,s,t,V0;if(T==null&&(T=I),10*k<=A.length){if(!(a=A.slice(0,k).sort(T)).length)return a;for(e=a[a.length-1],f=0,E=(s=A.slice(k)).length;f<E;f++)T(x=s[f],e)<0&&(g(a,x,0,null,T),a.pop(),e=a[a.length-1]);return a}for(b(A,T),V0=[],v=0,t=_(k,A.length);0<=t?v<t:v>t;0<=t?++v:--v)V0.push(n(A,T));return V0},z0=function(A,k,T,x){var e,a,f;for(x==null&&(x=I),e=A[T];T>k&&x(e,a=A[f=T-1>>1])<0;)A[T]=a,T=f;return A[T]=e},X0=function(A,k,T){var x,e,a,f,v;for(T==null&&(T=I),e=A.length,v=k,a=A[k],x=2*k+1;x<e;)(f=x+1)<e&&!(T(A[x],A[f])<0)&&(x=f),A[k]=A[x],x=2*(k=x)+1;return A[k]=a,z0(A,v,k,T)},C=function(){function A(k){this.cmp=k!=null?k:I,this.nodes=[]}return A.push=J0,A.pop=n,A.replace=d,A.pushpop=Q0,A.heapify=b,A.updateItem=y,A.nlargest=m,A.nsmallest=r,A.prototype.push=function(k){return J0(this.nodes,k,this.cmp)},A.prototype.pop=function(){return n(this.nodes,this.cmp)},A.prototype.peek=function(){return this.nodes[0]},A.prototype.contains=function(k){return this.nodes.indexOf(k)!==-1},A.prototype.replace=function(k){return d(this.nodes,k,this.cmp)},A.prototype.pushpop=function(k){return Q0(this.nodes,k,this.cmp)},A.prototype.heapify=function(){return b(this.nodes,this.cmp)},A.prototype.updateItem=function(k){return y(this.nodes,k,this.cmp)},A.prototype.clear=function(){return this.nodes=[]},A.prototype.empty=function(){return this.nodes.length===0},A.prototype.size=function(){return this.nodes.length},A.prototype.clone=function(){var k;return(k=new A).nodes=this.nodes.slice(0),k},A.prototype.toArray=function(){return this.nodes.slice(0)},A.prototype.insert=A.prototype.push,A.prototype.top=A.prototype.peek,A.prototype.front=A.prototype.peek,A.prototype.has=A.prototype.contains,A.prototype.copy=A.prototype.clone,A}(),P=[],(O=typeof(G=function(){return C})=="function"?G.apply(z,P):G)===void 0||(J.exports=O)}).call(this)}]);function YJ(J,z,$,G,P){let O=new sQ.js;O.setGrid(J),O.setAcceptableTiles([0]),O.enableSync();let C=null;return O.findPath(z,$,G,P,function(I){C=I}),O.calculate(),C}function W0(){return"player"}function wJ(J,z,$,G){return Math.abs(J-$)+Math.abs(z-G)}function YZ(J){return[...Array(J).keys()]}function LJ(J){let z=oQ(J),$=J.entities[W0()];for(let G=0;G<z.length;G++){let P=z[G],O=J.entities[P],C=J._AIs[P],I=wJ($.x,$.y,O.x,O.y);if($.options.faction!==O.options.faction&&I<=C.aggroRange){let N=J.maps[J.currentMapId].asMovementMap(),b=YJ(N,O.x,O.y,$.x,$.y);if(b){if(b=b.slice(1),b.length>I)b=null}C.path=b}if(!!O.message&&O.message.includes("OBEY"));}for(let G=0;G<z.length;G++){let P=z[G],O=J.entities[P],C=J._AIs[P];if(C.path){let I=C.path[0],N=I.x-O.x,b=I.y-O.y;J=R0(J,O,N,b)}}return J}function oQ(J){let z=T0(J,J.currentMapId),$=[];for(let G=0;G<z.length;G++){let P=z[G];if(P.options.ai)$.push(P.id)}return $}function HJ(J,z,$){let G=J.entities[z],P=8;switch($){case F.ais.aggrorange:P=8;break;case F.ais.aggrorangeshort:P=2;break;case F.ais.guardian:P=1;break;case F.ais.interactenrage:P=2;break;default:}return J._AIs[z]={entityId:z,type:$,aggroRange:P,startMap:G.mapId,startX:G.x,startY:G.y,path:null},J}function wZ(J,z){return J._AIs[z]=void 0,delete J._AIs[z],J}function DJ(J){let z=void 0;while(typeof(z=J._despawnQueue.shift())!=="undefined")J=zZ(J,z),J=wZ(J,z);return J}function FJ(J){return J}class d0{mapId;x;y;entityOrItemName;options;constructor(J,z,$,G,P={}){this.mapId=J,this.x=z,this.y=$,this.entityOrItemName=G,this.options=P}generateId(){return this.mapId+","+this.entityOrItemName+","+this.x+","+this.y+"/g"}}function JZ(J,z){if(aQ(z.entityOrItemName)){let $=z.options;if(Object.hasOwn($,"ai"))$.ai=F.ais[$.ai];if(Object.hasOwn($,"faction"))$.faction=F.factions[$.faction];let G=z.generateId();if(J=F0(J,G,F.entities[z.entityOrItemName],z.mapId,z.x,z.y,$),Object.hasOwn($,"equip")&&PJ($.equip))J=mZ(J,G,F.items[$.equip]);if(Object.hasOwn($,"ai"))J=HJ(J,G,$.ai)}else if(PJ(z.entityOrItemName))J=g0(J,F.items[z.entityOrItemName],z.mapId,z.x,z.y);return J}function aQ(J){return Object.hasOwn(F.entities,J)}function PJ(J){return Object.hasOwn(F.items,J)}var LZ={width:16,height:16},yZ=LZ;function h0(J,z={}){return{type:J,options:z}}function WJ(J){return J.type.name.startsWith("space")}function RJ(J){for(let z in F.maps){let $=_0(F.maps[z]);J.maps[z]=$;for(let G of $._spawnCommands)J=JZ(J,G);$._spawnCommands=[]}return J}function OJ(J,z){let $=GZ(J,z);for(let P=0;P<$.length;P++){let O=$[P];J=_Z(J,O.id)}let G=T0(J,z);for(let P=0;P<G.length;P++){let O=G[P];J=zZ(J,O.id),J=wZ(J,O.id)}return J.maps[z]=void 0,delete J.maps[z],J}class x0{id;widthTiles;heightTiles;seed;_tiles;_cacheMovementMap;_spawnCommands;_tvCount;tvMessage;constructor(J,z,$,G=[]){this.id=J,this.widthTiles=z,this.heightTiles=$,this.seed=null,this._tiles=G,this._cacheMovementMap=null,this._spawnCommands=[],this._tvCount=0,this.tvMessage=null}getTile(J,z){if(J>=0&&J<this.widthTiles&&z>=0&&z<this.heightTiles){let $=z*this.widthTiles+J;return this._tiles[$]}return{}}setTile(J,z,$,G={}){this._cacheMovementMap=null;let P=z*this.widthTiles+J,O=this._tiles[P];return this._tiles[P]=h0($,G),O}setTvMessage(J){if(this._tvCount){let z=0;for(let $ of this._tiles)if($.type===F.tiles.tv&&z<J.length)$.options.sign=J[z],z++;if(J==="")J=null;this.tvMessage=J}}pasteOnto(J,z=0,$=0){for(let G=0;G<J.heightTiles;G++)for(let P=0;P<J.widthTiles;P++){let O=J.getTile(P,G);if(O.type!==F.tiles.voidtrue)this.setTile(P+z,G+$,O.type,O.options)}return this}circular(){let J=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let z=-J;z<=J;z++)for(let $=-J;$<=J;$++)if($*$+z*z>=J*J)this.setTile($+J-1,z+J-1,F.tiles.voidtrue);return this}sample(J,z){let $=Math.floor(this.widthTiles/J),G=Math.floor(this.heightTiles/z),P=[];for(let O=0;O<z;O++)for(let C=0;C<J;C++){let I={};for(let d=0;d<G;d++)for(let g=0;g<$;g++){let _=this.getTile(C*$+g,O*G+d);if(I[_.type.name])I[_.type.name]+=1;else I[_.type.name]=1}let N="",b=0;for(let[d,g]of Object.entries(I))if(g>b)N=d,b=g;let n="space"+N,J0=F.tiles[n]||F.tiles.spacevoid,Q0={mapId:this.id,x:C*$,y:O*G};P.push(h0(J0,Q0))}return new x0("__sampled_"+J+"_"+z+"_"+this.id,J,z,P)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let J=new Array(this.heightTiles);for(let z=0;z<this.heightTiles;z++){J[z]=new Array(this.widthTiles);for(let $=0;$<this.widthTiles;$++){let G=z*this.widthTiles+$,O=this._tiles[G].type;if(J[z][$]=0,O===F.tiles.rock||O===F.tiles.portalclosed||O===F.tiles.portalsewers||O===F.tiles.tv||O.name.startsWith("wall"))J[z][$]=1}}return this._cacheMovementMap=J,J}}function _0(J){let z=J.split(/\r?\n/),$=J[0],G="",P=0,O=0,C={},I=[],N=[],b=0,n="";for(let Q0=0;Q0<z.length;Q0++){let d=z[Q0];if(d.startsWith($)){if(d.startsWith($+"!id"))G=d.slice(5);else if(d.startsWith($+"!size")){let g=d.split(" ").slice(1);P=Number(g[0]),O=Number(g[1])}else if(d.startsWith($+"!spawn")){let g=d.split(" ").slice(1),_={};if(g.length>3){let m=g.slice(3);for(let r of m){let y=r.split("=");_[y[0]]=y[1]}}I.push(new d0(G,Number(g[0]),Number(g[1]),g[2],_))}else if(d.startsWith($+"!")){let g=d[2],_=d.slice(4);C[g]=_}}else for(let g=0;g<d.length;g++){let _=d[g],m=C[_];if(o.debug&&!m)console.log("DEBUG Broken map: "+G);let r=m.split(" "),y={};if(m.startsWith("portal ")||m.startsWith("portalhidden ")||m.startsWith("portalsewers ")||m.startsWith("portallauncher ")||m.startsWith("portalstart"))m=r[0],y.mapId=r[1],y.x=Number(r[2]),y.y=Number(r[3]);if(m.startsWith("wall ")&&r.length>=2)m="wall",y.sign=r[1];if(m.startsWith("terminal ")){if(m="terminal",r.length>=2)y.screen=r[1]}if(m.startsWith("tv ")&&r.length>=2){if(m="tv",r.length===3)n=r[2];b++}N.push(h0(F.tiles[m],y))}}if(o.debug&&!(b===0||b===12))console.log("DEBUG Broken map: "+G+" (invalid TV size "+b+", allowed are 0 or 12 characters per map)");let J0=new x0(G,P,O,N);return J0._tvCount=b,J0.setTvMessage(n),J0._spawnCommands=I,J0}function CJ(J,z,$){switch($){case F.commands.N:J=R0(J,z,0,-1);break;case F.commands.W:J=R0(J,z,-1,0);break;case F.commands.S:J=R0(J,z,0,1);break;case F.commands.E:J=R0(J,z,1,0);break;case F.commands.A:J=MJ(J,z,F.commands.A);break;case F.commands.B:J=MJ(J,z,F.commands.B);break;default:}return J}function R0(J,z,$,G,P=0){let O=J.maps[z.mapId],C=UJ(J,O.id,z.x+$,z.y+G),I=J.tools[z.id];if(z.message=O.tvMessage,C)if(j0(C)){if(!j0(z)&&P<1)J=R0(J,C,$,G,P++),J=R0(J,z,$,G,P++)}else J=$J(J,z,C);else if(eQ(O,z,$,G))J=jJ(J,O,z,$,G),J._energyQueue.push({entityId:z.id,energyDelta:-1*P});else if(tQ(O,z,I,$,G)){if(O.setTile(z.x+$,z.y+G,F.tiles.void).type===F.tiles.rock){let b=J.rng.getPercentage();if(b<=1)J=g0(J,F.items.matter,O.id,z.x+$,z.y+G);else if(b<=34)J=g0(J,F.items.junk,O.id,z.x+$,z.y+G)}J._energyQueue.push({entityId:z.id,energyDelta:I.type.energyCost})}else if(Z7(O,z,I,$,G))J=jJ(J,O,z,$,G),J._energyQueue.push({entityId:z.id,energyDelta:I.type.energyCost});return J}function MJ(J,z,$){let P=$Z(J,z)[$.key],C=J.maps[z.mapId].getTile(z.x,z.y);switch(P){case F.actions.Enter:J=EJ(J,z,C);break;case F.actions.Launch:J=iQ(J,z,C);case F.actions.Wait:break;default:}return J}function jJ(J,z,$,G,P){$.x+=G,$.y+=P;let O=GJ(J,$.mapId,$.x,$.y);if(O)J=BJ(J,$,O);let C=z.getTile($.x,$.y);if(C.type.name.startsWith("portal"))J=EJ(J,$,C);if(C.type===F.tiles.terminal)z.setTvMessage("OBEYWORKKILL");if(C.type.name.startsWith("move"))switch(C.type.name){case"movenorth":J=R0(J,$,0,-1);break;case"moveeast":J=R0(J,$,1,0);break;case"movesouth":J=R0(J,$,0,1);break;case"movewest":J=R0(J,$,-1,0);break;default:}return J}function EJ(J,z,$){if(z.id.startsWith("player"))J.currentMapId=$.options.mapId;if(WJ($))J.lastSpacePositionByEntity[z.id]={mapId:z.mapId,x:z.x,y:z.y};else J.lastSpacePositionByEntity[z.id]=void 0,delete J.lastSpacePositionByEntity[z.id];let G={entityId:z.id,oldMapId:z.mapId,oldX:z.x,oldY:z.y,oldTileType:$.type,newMapId:$.options.mapId,newX:$.options.x,newY:$.options.y};return z.mapId=$.options.mapId,z.x=$.options.x,z.y=$.options.y,J=hZ(J,"entitymap.updated.event",G),J}function iQ(J,z,$){if(J.lastSpacePositionByEntity[z.id]){if(z.id.startsWith("player"))J.currentMapId=J.lastSpacePositionByEntity[z.id].mapId;let G={entityId:z.id,oldMapId:z.mapId,oldX:z.x,oldY:z.y,oldTileType:$.type,newMapId:J.lastSpacePositionByEntity[z.id].mapId,newX:J.lastSpacePositionByEntity[z.id].x,newY:J.lastSpacePositionByEntity[z.id].y};z.mapId=G.newMapId,z.x=G.newX,z.y=G.newY,J._energyQueue.push({entityId:z.id,energyDelta:F.actions.Launch.energyDelta}),J.lastSpacePositionByEntity[z.id]=void 0,delete J.lastSpacePositionByEntity[z.id],J=hZ(J,"entitymap.updated.event",G)}return J}function AJ(J){for(let z in J.entities){let $=J.entities[z],G=J.tools[z],O=J.maps[$.mapId].getTile($.x,$.y),C=O.type.energyDelta;if(O.type===F.tiles.chargepad&&G?.type.effects.includes(F.effects.Recharger.name))C*=2;else if((O.type===F.tiles.water||O.type===F.tiles.watersewage)&&G?.type.effects.includes(F.effects.WaterShield.name))C/=2;else if((O.type===F.tiles.water||O.type===F.tiles.watersewage)&&G?.type.effects.includes(F.effects.WaterImmunity.name))C=0;else if(O.type===F.tiles.drain){let I=Math.min($.gold,1),N=Math.min($.matter,500);$.gold-=I,$.matter-=N}if(C!==0)J._energyQueue.push({entityId:z,energyDelta:C})}return J}function NJ(J,z){let $=J.entities[z.entityId];switch(z.oldTileType){case F.tiles.portalstartaerobot:J=UZ(J,$,F.entities.AeroBot),J=L0(J,`Booting up as an ${F.entities.AeroBot.name}...`);break;case F.tiles.portalstartworkbot:J=UZ(J,$,F.entities.WorkBot),J=L0(J,`Booting up as a ${F.entities.WorkBot.name}...`);break;default:}return J}function eQ(J,z,$,G){let P=z.x+$,O=z.y+G,C=J.getTile(P,O).type;return P>=0&&P<J.widthTiles&&O>=0&&O<J.heightTiles&&!(C===F.tiles.rock||C===F.tiles.portalclosed||C===F.tiles.portalsewers||C===F.tiles.tv||C.name.startsWith("wall"))}function tQ(J,z,$,G,P){let O=z.x+G,C=z.y+P,I=J.getTile(O,C).type;if($)return $.type.effects.includes(F.effects.WallCrusher.name)&&I===F.tiles.wallweak||$.type.effects.includes(F.effects.RockCrusher.name)&&I===F.tiles.rock;return!1}function Z7(J,z,$,G,P){let O=z.x+G,C=z.y+P,I=J.getTile(O,C).type;if($)return $.type.effects.includes(F.effects.Screwing.name)&&I===F.tiles.portalsewers;return!1}var IJ=uZ(PZ(),1);class f0{seed;_rotRng;constructor(J=1337){this.seed=J,this._rotRng=IJ.RNG.clone(),this._rotRng.setSeed(J)}getPercentage(){return this._rotRng.getPercentage()}getItem(J){return this._rotRng.getItem(J)}}function fJ(J,z){if(z.seed===1337)J=F0(J,"batteryvalkyrie0",F.entities.Valkyrie,z.id,130,127,{faction:F.factions.Spirits}),J=F0(J,"batteryvalkyrie1",F.entities.Valkyrie,z.id,124,127,{faction:F.factions.Spirits}),J=g0(J,F.items.trident,z.id,127,130);else{let $=new f0(z.seed);for(let G=0;G<z.heightTiles;G++)for(let P=0;P<z.widthTiles;P++){let O=z.getTile(P,G);if($.getPercentage()<=1&&(O.type===F.tiles.void||O.type===F.tiles.tree)){let C=$.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(C){case"Deviant":case"Pioneer":J=JZ(J,new d0(z.id,P,G,C,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":J=JZ(J,new d0(z.id,P,G,C));break}}}}return J}var DZ=uZ(PZ(),1);var V7=1337,bJ=55;function kJ(J,z=V7){DZ.RNG.setSeed(z);let $=new DZ.Noise.Simplex,G=LZ.width*yZ.width,P=LZ.height*yZ.height,O=[];for(let N=0;N<P;N++)for(let b=0;b<G;b++){let n=$.get(b/bJ,N/bJ),J0;if(n<=-0.5)J0=F.tiles.water;else if(n<=0)J0=F.tiles.void;else if(n<0.5)J0=F.tiles.tree;else J0=F.tiles.rock;O.push(h0(J0))}let C="simplex="+z,I=new x0(C,G,P,O);return I.seed=z,J.maps[C]=I,J}var K7=1337;function TJ(J,z=K7){let $=uJ(1024,1024,F.tiles.void);$.id="solarsystem="+z,J.maps[$.id]=$;let G=new f0(z),P=new f0(z),O=G.getItem([2,3,4,5,6,7,8,9,10,11,12]),C=128,I=512-C,N=Math.floor(I/O);$=q7($,G);let b=uJ(128,128,F.tiles.voidtrue);z7(b,63,63,62,F.tiles.sun),U7(b,63,63,F.tiles.sun),$.pasteOnto(b,448,448);for(let d=C;d<512;d+=N){let g=G.getItem([-1,1])*G.getItem(YZ(d)),_=G.getItem([-1,1])*Math.floor(Math.sqrt(d*d-g*g));g+=512,_+=512;let m=G.getItem([16,24,32]),r=Math.floor(m/2)-1;J=kJ(J,z);let y=J.maps["simplex="+z],z0=F.map_snippets.launcher;z0=z0.replace("!!O portallauncher space 0 0",`!!O portallauncher ${$.id} ${g} ${_}`);let X0=_0(z0),A=P.getItem(YZ(y.widthTiles-X0.widthTiles)),k=P.getItem(YZ(y.heightTiles-X0.heightTiles));y.pasteOnto(X0,A,k),J=fJ(J,y);let T=y.sample(m,m).circular();$.pasteOnto(T,g-(r+1),_-(r+1)),z++}let n=F.map_snippets.space_bot_station;n=n.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let J0=_0(n);$.pasteOnto(J0,583,398);let Q0=_0(F.map_snippets.square_falcon);return $.pasteOnto(Q0,590,373),J}function uJ(J,z,$){let G=[];for(let C=0;C<J*z;C++)G.push(h0($));return new x0("__temp",J,z,G)}function q7(J,z){for(let $=0;$<J.heightTiles;$++)for(let G=0;G<J.widthTiles;G++)if(z.getPercentage()<=1)J.setTile(G,$,z.getItem([F.tiles.spacevoidstarwhite,F.tiles.spacevoidstaryellow]));return J}function z7(J,z,$,G,P){let O=1-G,C=1,I=-2*G,N=0,b=G;J.setTile(z,$+G,P),J.setTile(z,$-G,P),J.setTile(z+G,$,P),J.setTile(z-G,$,P);while(N<b){if(O>=0)b-=1,I+=2,O+=I;N+=1,C+=2,O+=C,J.setTile(z+N,$+b,P),J.setTile(z-N,$+b,P),J.setTile(z+N,$-b,P),J.setTile(z-N,$-b,P),J.setTile(z+b,$+N,P),J.setTile(z-b,$+N,P),J.setTile(z+b,$-N,P),J.setTile(z-b,$-N,P)}return J}function U7(J,z,$,G){let{widthTiles:P,heightTiles:O}=J,C=[];C.push({x:z,y:$});let I=void 0;while(typeof(I=C.shift())!=="undefined"){let N=I,b=I;if(I.x+1<P)b={x:I.x+1,y:I.y};while(J.getTile(N.x,N.y).type!==G){if(J.setTile(N.x,N.y,G),N.y+1<O){if(J.getTile(N.x,N.y+1).type!==G)C.push({x:N.x,y:N.y+1})}if(N.y-1>=0){if(J.getTile(N.x,N.y-1).type!==G)C.push({x:N.x,y:N.y-1})}if(N.x-1>=0)N.x-=1;else break}while(J.getTile(b.x,b.y).type!==G){if(J.setTile(b.x,b.y,G),b.y+1<O){if(J.getTile(b.x,b.y+1).type!==G)C.push({x:b.x,y:b.y+1})}if(b.y-1>=0){if(J.getTile(b.x,b.y-1).type!==G)C.push({x:b.x,y:b.y-1})}if(b.x+1<P)b.x+=1;else break}}return J}var $7=`!
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
`;function gJ(J,z){if(z?.oldMapId?.startsWith("shop_instance")){J=OJ(J,z.oldMapId);let $=J.maps[z.newMapId],G=$.getTile(z.newX,z.newY);$.setTile(z.newX,z.newY,G.type,{mapId:"shop_instance",x:z.oldX,y:z.oldY})}if(z?.newMapId?.startsWith("shop_instance")){let $=_0($7);$.id+="_"+z.oldMapId+"_"+z.entityId,$.setTile(z.newX,z.newY,F.tiles.portal,{mapId:z.oldMapId,x:z.oldX,y:z.oldY}),J.maps[z.oldMapId].setTile(z.oldX,z.oldY,z.oldTileType,{mapId:$.id,x:z.newX,y:z.newY});let P=J.entities[z.entityId];if(P.id.startsWith("player"))J.currentMapId=$.id;if(P.mapId=$.id,P.x=z.newX,P.Y=z.newY,J.maps[$.id]=$,J=ZZ(J,F.items.hammer,$.id,4,4,0,-200),J=ZZ(J,F.items.pickaxe,$.id,4,6,0,-200),J=ZZ(J,F.items.battery,$.id,4,8,0,-200),J=ZZ(J,F.items.gold,$.id,4,10,0,-1e4),J=F0(J,$.id+"_shopkeeper",F.entities.AeroBot,$.id,6,2,{faction:P.options.faction,dialog:"shop_instance_shopkeeper",name:"Shopkeeper"}),z?.oldMapId.startsWith("bot_stadium"))J=F0(J,$.id+"_shopper",F.entities.WorkBot,$.id,1,12,{faction:P.options.faction,dialog:"shop_instance_workbot_shopper"});else if(z?.oldMapId.startsWith("bot_bar"))J=F0(J,$.id+"_shopper",F.entities.AeroBot,$.id,4,11,{faction:P.options.faction,dialog:"shop_instance_aerobot_shopper"})}return J}function hJ(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!0,actionLog:[],chatLog:[],currentMapId:"",entities:{},items:{},lastSpacePositionByEntity:{},maps:{},rng:new f0,tools:{},tvs:{}}}function xJ(J){let z=void 0;while(typeof(z=J._combatQueue.shift())!=="undefined"){let $=-1,G=-5,P=BZ(J,z.entityId);if(P)$=P.type.energyCost,G=-1*Math.abs(P.type.damage);J._energyQueue.push({entityId:z.entityId,energyDelta:$}),J._energyQueue.push({entityId:z.otherEntityId,energyDelta:G});let O=J.entities[z.entityId],C=J.entities[z.otherEntityId],I=O?.options?.name?O.options.name:O.type.name,N=C?.options?.name?C.options.name:C.type.name;J=L0(J,`${I} did ${Math.abs(G)} damage to ${N} at cost of ${Math.abs($)} energy.`)}return J}function _J(J){let z=void 0,$=new Set;while(typeof(z=J._energyQueue.shift())!=="undefined"){let G=J.entities[z.entityId];if(G.energy=Math.min(G.energy+z.energyDelta,G.energyMax),G.energy<=0)$.add(G.id)}for(let G of $){let P=J.entities[G];J._despawnQueue.push(G);let O=P?.options?.name?P.options.name:P.type.name;if(!j0(P)){let C=Math.max(1,Math.floor(P.energyMax/3));J=XJ(J,C,P.mapId,P.x,P.y),J=L0(J,`${O} destroyed leaving behind Junk.`)}}return J}function mJ(J){return J=LJ(J),J=xJ(J),J=AJ(J),J=_J(J),J=DJ(J),J=FJ(J),J}class FZ{state;constructor(){}init(){return this.state=hJ(),this.state=xZ(this.state,"entitymap.updated.event",NJ),this.state=xZ(this.state,"entitymap.updated.event",gJ),this.state=TJ(this.state),this.state=RJ(this.state),this.state.currentMapId="botmos_hull_selection",this.state=F0(this.state,W0(),F.entities.Spirit,this.state.currentMapId,9,5,{faction:F.factions.Spirits,name:"Player"}),this.state}update(J,z=!1){let $=this.state.entities[W0()];if($){if(J){switch(J){case F.commands.M:this.state._menuOpen=!this.state._menuOpen;break;case F.commands["#"]:this.state=L0(this.state,qJ(this.state,W0()));break;default:this.state=CJ(this.state,$,J),this.state=mJ(this.state)}this.state.actionLog.push(J.key)}}else this.state=L0(this.state,`Game over! ${this.state.actionLog.length} turns.`),console.log(`Game over! ${this.state.actionLog.length} turns: ${this.state.actionLog.join("")}`),this.state.currentMapId="botmos_hull_selection",this.state=F0(this.state,W0(),F.entities.Spirit,this.state.currentMapId,9,5,{faction:F.factions.Spirits,name:"Player"});return this.state}play(J){for(let z=0;z<J.length;z++){let $=J[z];this.update(F.commands[$],!0)}return this.state}}var p={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1,slash:!1},cZ=[],dZ=void 0,yJ=0;document.body.addEventListener("keydown",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":p.up=!0,q0(J);break;case"a":case"ArrowLeft":p.left=!0,q0(J);break;case"s":case"ArrowDown":p.down=!0,q0(J);break;case"d":case"ArrowRight":p.right=!0,q0(J);break;case"x":p.a=!0,q0(J);break;case" ":case"y":case"z":p.b=!0,q0(J);break;case"m":p.menu=!0,q0(J);break;case"#":case"/":p.slash=!0,q0(J);break;default:}A0(pJ())});function A0(J){let z=Date.now();if(dZ!==void 0&&z-yJ>=80)yJ=z,dZ(J)}document.body.addEventListener("keyup",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":p.up=!1,q0(J);break;case"a":case"ArrowLeft":p.left=!1,q0(J);break;case"s":case"ArrowDown":p.down=!1,q0(J);break;case"d":case"ArrowRight":p.right=!1,q0(J);break;case"x":p.a=!1,q0(J);break;case" ":case"y":case"z":p.b=!1,q0(J);break;case"m":p.menu=!1,q0(J);break;case"#":case"/":p.slash=!1,q0(J);default:}});document.body.addEventListener("click",function(J){let{clientX:z,clientY:$}=J,P=document.body.clientWidth/3,C=document.body.clientHeight/3;if(z>=P&&z<2*P&&$<C)A0(F.commands.N),q0(J);else if(z<P&&$<C)A0(F.commands.B),q0(J);else if(z>=2*P&&$<C)A0(F.commands.A),q0(J);else if(z<P&&$>=C&&$<2*C)A0(F.commands.W),q0(J);else if(z>=2*P&&$>=C&&$<2*C)A0(F.commands.E),q0(J);else if(z>=P&&z<2*P&&$>=2*C)A0(F.commands.S),q0(J);else if(z>=P&&z<2*P&&$>=C&&$<2*C)A0(F.commands.M),q0(J)});function q0(J){J.preventDefault(),J.stopPropagation()}var QZ=null;function X7(){let J=null;if(p.right)J=F.commands.E;if(p.left)J=F.commands.W;if(p.down)J=F.commands.S;if(p.up)J=F.commands.N;if(p.up&&p.right){if(J===F.commands.N&&QZ===F.commands.N)J=F.commands.E}if(p.up&&p.left){if(J===F.commands.N&&QZ===F.commands.N)J=F.commands.W}if(p.down&&p.right){if(J===F.commands.S&&QZ===F.commands.S)J=F.commands.E}if(p.down&&p.left){if(J===F.commands.S&&QZ===F.commands.S)J=F.commands.W}if(p.a)J=F.commands.A;if(p.b)J=F.commands.B;if(p.menu)J=F.commands.M;if(p.slash)J=F.commands["#"];if(QZ=J,J!==null)cZ.push(J)}function pJ(){X7();let J=cZ.shift()||null;return cZ=[],J}var cJ=void 0;window.addEventListener("gamepadconnected",(J)=>{cJ=setInterval(function(){let z=navigator.getGamepads()[J.gamepad?.index];if(p.right=z.buttons[15].pressed,p.left=z.buttons[14].pressed,p.down=z.buttons[13].pressed,p.up=z.buttons[12].pressed,p.a=z.buttons[0].pressed||z.buttons[2].pressed,p.b=z.buttons[1].pressed||z.buttons[3].pressed,p.menu=z.buttons[9].pressed,p.right||p.left||p.down||p.up||p.a||p.b||p.menu)A0(pJ())},100)});window.addEventListener("gamepaddisconnected",(J)=>{clearInterval(cJ)});function dJ(J){dZ=J}var oJ=uZ(PZ(),1);var WZ={AeroBot:[0,0],battery:[32,0],broom:[64,0],chargepad:[96,0],cheat:[128,0],chest:[160,0],Cleaner:[192,0],Deviant:[224,0],drain:[256,0],energy:[288,0],gold:[320,0],goo:[352,0],Graffiticyan:[384,0],Graffitimagenta:[416,0],Graffitiyellow:[448,0],hammer:[480,0],junk:[512,0],matter:[544,0],movableboulder:[576,0],movablebox:[608,0],moveeast:[640,0],movenorth:[672,0],movesouth:[704,0],movewest:[736,0],pickaxe:[768,0],Pioneer:[800,0],portalclosed:[832,0],portalhidden:[864,0],portallauncher:[896,0],portal:[928,0],portalsewers:[960,0],portalstartaerobot:[992,0],"_portalstart?":[1024,0],portalstartworkbot:[1056,0],RoboRat:[1088,0],rock:[1120,0],shocker:[1152,0],spacerock:[1184,0],spacetree:[1216,0],spacevoid:[1248,0],spacevoidstarwhite:[1280,0],spacevoidstaryellow:[1312,0],spacewater:[1344,0],Spirit:[1376,0],sun:[1408,0],terminal:[1440,0],tree:[1472,0],trident:[1504,0],tv:[1536,0],Valkyrie:[1568,0],voidhidden:[1600,0],void:[1632,0],voidtrue:[1664,0],wall0:[1696,0],wall1:[1728,0],wall2:[1760,0],walla_:[1792,0],wallA:[1824,0],wallb_:[1856,0],wallB:[1888,0],wallc_:[1920,0],wallC:[1952,0],walld_:[1984,0],wallD:[2016,0],walle_:[2048,0],wallE:[2080,0],wallf_:[2112,0],wallF:[2144,0],wallg_:[2176,0],wallG:[2208,0],wallh_:[2240,0],wallH:[2272,0],walli_:[2304,0],wallI:[2336,0],wallj_:[2368,0],wallJ:[2400,0],wallk_:[2432,0],wallK:[2464,0],walll_:[2496,0],wallL:[2528,0],wallm_:[2560,0],wallM:[2592,0],walln_:[2624,0],wallN:[2656,0],wallo_:[2688,0],wallO:[2720,0],"wall(":[2752,0],"wall)":[2784,0],"wall+":[2816,0],"wall,":[2848,0],"wall.":[2880,0],wall:[2912,0],"wall:":[2944,0],wall_:[2976,0],"wall|":[3008,0],wallp_:[3040,0],wallP:[3072,0],wallq_:[3104,0],wallQ:[3136,0],wallr_:[3168,0],wallR:[3200,0],walls_:[3232,0],wallS:[3264,0],wallstatueaerobot:[3296,0],wallstatuecleaner:[3328,0],wallstatuepioneer:[3360,0],wallstatueworkbot:[3392,0],wallt_:[3424,0],wallT:[3456,0],wallu_:[3488,0],wallU:[3520,0],wallv_:[3552,0],wallV:[3584,0],wallweak:[3616,0],wallw_:[3648,0],wallW:[3680,0],wallx_:[3712,0],wallX:[3744,0],wally_:[3776,0],wallY:[3808,0],wallz_:[3840,0],wallZ:[3872,0],water:[3904,0],watersewage:[3936,0],WorkBot:[3968,0],wrench:[4000,0]};var n0=document.createElement("div");n0.id="ui";document.body.appendChild(n0);var lZ=rJ(),RZ=rJ(),lJ=G7(),N0=document.createElement("div");N0.replaceChildren(lZ,RZ,lJ);n0.replaceChildren(N0);var OZ=document.createElement("div");OZ.id="uichatlog";n0.appendChild(OZ);async function nJ(J,z=0){if(!o.showUI)return;let $=W0(),G=J.entities[$],P="";if(G){l0(lZ,G.type.name);let O="",C=BZ(J,$);if(C)l0(RZ,C.type.name.toLowerCase());else l0(RZ,null);let I="";if(G.matter>0)I=`${G.matter}M `;let N="";if(G.gold>0)N=`${G.gold}G `;let b=$Z(J,G);if(P=" "+G.energy+"/"+G.energyMax+" "+O+N+I+"Y:"+b.B.name+" X:"+b.A.name,n0.style.flexDirection="column-reverse",G.y-z>=B0.height-3)n0.style.flexDirection="column";if(N0.style.background="#000",G.energy/G.energyMax<=0.2)N0.style.color="#000",N0.style.background="#f00";else N0.style.color="#74ee15",N0.style.background="#000"}else l0(lZ,null),l0(RZ,null),P="Game over!",N0.style.color="#000",N0.style.background="#f00";if(lJ.innerText=P,J._menuOpen&&!!J.chatLog.length){let O=J.chatLog.slice(-o.chatLogMaxDisplaySize);OZ.innerText=O.join(`
`)}else OZ.innerText=""}function rJ(){let J=document.createElement("span");return l0(J,null),J.style.height=`${o.fontSize}px`,J.style.display="inline-block",J}function G7(){let J=document.createElement("span");return J.style.display="inline-block",J.style.marginLeft="16px",J}function l0(J,z){if(z){let $=WZ[z][0];J.style.background=`url('build/tiles.png') -${$}px 0`,J.style.width=`${o.fontSize}px`}else J.style.width="0px"}var aJ=document.createElement("img");aJ.src="build/tiles.png";B0.tileSet=aJ;B0.tileMap=w7();var nZ=new oJ.Display(B0);document.body.appendChild(nZ.getContainer());function B7(J,z){let $=J.currentMapId,G=J.maps[$],P=0,O=0;if(G.widthTiles<z.width)P=Math.floor((z.width-G.widthTiles)/2),z.x=0;if(G.heightTiles<z.height)O=Math.floor((z.height-G.heightTiles)/2),z.y=0;let C={},I={},N={};for(let g=0;g<z.height;g++)for(let _=0;_<z.width;_++){let m=G.getTile(z.x+_,z.y+g),r="";if(!!m&&!!m.type)if(m.options.sign)r="#"+m.options.sign;else r=m.type.icon;if(r){let y=[P+_,O+g].toString();C[y]=[r],I[y]=["transparent"],N[y]=["transparent"]}}let b=GZ(J,$);for(let g=0;g<b.length;g++){let _=b[g],m=P+_.x-z.x,r=O+_.y-z.y,y=[m,r].toString();if(C[y])C[y].push(_.type.icon),I[y].push("transparent"),N[y].push("transparent");else C[y]=[_.type.icon],I[y]=["transparent"],N[y]=["transparent"]}let n=W0(),J0=J.entities[n],Q0=((J0||{}).options||{}).faction||void 0,d=T0(J,$);for(let g=0;g<d.length;g++){let _=d[g],m=P+_.x-z.x,r=O+_.y-z.y,y="transparent";if(o.highlightEnemy&&!!Q0&&!j0(_)&&!gZ(_))y=Q0===_.options.faction?"rgba(116, 238, 21, 0.5)":"rgba(240, 0, 255, 0.5)";if(_===J0)y="transparent";let z0=[m,r].toString();if(C[z0])C[z0].push(_.type.icon),I[z0].push(y),N[z0].push("transparent");else C[z0]=[_.type.icon],I[z0]=[y],N[z0]=["transparent"]}nZ.clear();for(let[g,_]of Object.entries(C)){let m=g.split(",");nZ.draw(Number(m[0]),Number(m[1]),_,I[g],N[g])}}var sJ={x:0,y:0};async function y0(J){let z=J.entities[W0()],$=z?z:sJ,G=Y7($);B7(J,G),nJ(J,G.y),sJ=$}async function iJ(J){}function Y7(J){return{x:Math.min(Math.max(0,J.x-Math.floor(B0.width/2)),TZ.WIDTH-B0.width),y:Math.min(Math.max(0,J.y-Math.floor(B0.height/2)),TZ.HEIGHT-B0.height),width:B0.width,height:B0.height}}function w7(){let J={};for(let[z,$]of Object.entries(WZ))if(z.startsWith("wall")&&(z.length===5||z.length===6))J["#"+z.substring(4,5)]=$;else if(Object.hasOwn(F.tiles,z))J[F.tiles[z].icon]=$;else if(Object.hasOwn(F.entities,z))J[F.entities[z].icon]=$;else if(Object.hasOwn(F.items,z))J[F.items[z].icon]=$;return J}var O0=new FZ;window.onload=function(){y0(O0.init())};window.onresize=function(){let J=typeof window!=="undefined"?window.innerWidth:0,z=typeof window!=="undefined"?window.innerHeight:0;o.cameraWidth=Math.floor(J/o.fontSize),o.cameraHeight=Math.floor(z/o.fontSize),B0.width=Math.floor(o.cameraWidth*(1/o.zoom)),B0.height=Math.floor(o.cameraHeight*(1/o.zoom)),iJ(B0),y0(O0.state)};dJ(function(J){y0(O0.update(J))});if(!window.BMActionLog)window.BMActionLog=function(){return O0.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(J){y0(O0.play(J))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){o.debug=!o.debug,y0(O0.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){o.showUI=!o.showUI,y0(O0.state)};if(o.debug){if(!window.BMDebugState)window.BMDebugState=function(){return O0.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let J=Object.keys(O0.state.maps).length,z=Object.keys(O0.state.entities).length,$=Object.keys(O0.state.items).length,G=Object.keys(O0.state.tools).length;return`Maps: ${J}, Entities: ${z}, Items: ${$}, Tools: ${G}`}}document.body.focus();
