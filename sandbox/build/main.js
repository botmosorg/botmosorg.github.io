var _Z=Object.create;var{getPrototypeOf:mZ,defineProperty:K6,getOwnPropertyNames:cZ}=Object;var yZ=Object.prototype.hasOwnProperty;var g1=(J,q,$)=>{$=J!=null?_Z(mZ(J)):{};let G=q||!J||!J.__esModule?K6($,"default",{value:J,enumerable:!0}):$;for(let H of cZ(J))if(!yZ.call(G,H))K6(G,H,{get:()=>J[H],enumerable:!0});return G};var dZ=(J,q)=>()=>(q||J((q={exports:{}}).exports,q),q.exports);var H1=dZ((P1,v6)=>{function c0(J){if(J===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return J}function QJ(J,q){var $=typeof Symbol!=="undefined"&&J[Symbol.iterator]||J["@@iterator"];if($)return($=$.call(J)).next.bind($);if(Array.isArray(J)||($=VJ(J))||q&&J&&typeof J.length==="number"){if($)J=$;var G=0;return function(){if(G>=J.length)return{done:!0};return{done:!1,value:J[G++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function VJ(J,q){if(!J)return;if(typeof J==="string")return S6(J,q);var $=Object.prototype.toString.call(J).slice(8,-1);if($==="Object"&&J.constructor)$=J.constructor.name;if($==="Map"||$==="Set")return Array.from(J);if($==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($))return S6(J,q)}function S6(J,q){if(q==null||q>J.length)q=J.length;for(var $=0,G=new Array(q);$<q;$++)G[$]=J[$];return G}function q0(J,q){J.prototype=Object.create(q.prototype),J.prototype.constructor=J,y1(J,q)}function y1(J,q){return y1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function $(G,H){return G.__proto__=H,G},y1(J,q)}(function(J,q){typeof P1==="object"&&typeof v6!=="undefined"?q(P1):typeof define==="function"&&define.amd?define(["exports"],q):(J=typeof globalThis!=="undefined"?globalThis:J||self,q(J.ROT={}))})(P1,function(J){var q=0.00000000023283064365386963,$=function(){function Y(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var B=Y.prototype;return B.getSeed=function U(){return this._seed},B.setSeed=function U(K){return K=K<1?1/K:K,this._seed=K,this._s0=(K>>>0)*q,K=K*69069+1>>>0,this._s1=K*q,K=K*69069+1>>>0,this._s2=K*q,this._c=1,this},B.getUniform=function U(){var K=2091639*this._s0+this._c*q;return this._s0=this._s1,this._s1=this._s2,this._c=K|0,this._s2=K-this._c,this._s2},B.getUniformInt=function U(K,Z){var Q=Math.max(K,Z),V=Math.min(K,Z);return Math.floor(this.getUniform()*(Q-V+1))+V},B.getNormal=function U(K,Z){if(K===void 0)K=0;if(Z===void 0)Z=1;var Q,V,z;do Q=2*this.getUniform()-1,V=2*this.getUniform()-1,z=Q*Q+V*V;while(z>1||z==0);var X=Q*Math.sqrt(-2*Math.log(z)/z);return K+X*Z},B.getPercentage=function U(){return 1+Math.floor(this.getUniform()*100)},B.getItem=function U(K){if(!K.length)return null;return K[Math.floor(this.getUniform()*K.length)]},B.shuffle=function U(K){var Z=[],Q=K.slice();while(Q.length){var V=Q.indexOf(this.getItem(Q));Z.push(Q.splice(V,1)[0])}return Z},B.getWeightedValue=function U(K){var Z=0;for(var Q in K)Z+=K[Q];var V=this.getUniform()*Z,z,X=0;for(z in K)if(X+=K[z],V<X)return z;return z},B.getState=function U(){return[this._s0,this._s1,this._s2,this._c]},B.setState=function U(K){return this._s0=K[0],this._s1=K[1],this._s2=K[2],this._c=K[3],this},B.clone=function U(){var K=new Y;return K.setState(this.getState())},Y}(),G=new $().setSeed(Date.now()),H=function(){function Y(){}var B=Y.prototype;return B.getContainer=function U(){return null},B.setOptions=function U(K){this._options=K},Y}(),O=function(Y){q0(B,Y);function B(){var K=Y.call(this)||this;return K._ctx=document.createElement("canvas").getContext("2d"),K}var U=B.prototype;return U.schedule=function K(Z){requestAnimationFrame(Z)},U.getContainer=function K(){return this._ctx.canvas},U.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z);var Q=Z.fontStyle?Z.fontStyle+" ":"",V=Q+" "+Z.fontSize+"px "+Z.fontFamily;this._ctx.font=V,this._updateSize(),this._ctx.font=V,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},U.clear=function K(){var Z=this._ctx.globalCompositeOperation;this._ctx.globalCompositeOperation="copy",this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.globalCompositeOperation=Z},U.eventToPosition=function K(Z,Q){var V=this._ctx.canvas,z=V.getBoundingClientRect();if(Z-=z.left,Q-=z.top,Z*=V.width/z.width,Q*=V.height/z.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},B}(H);function C(Y,B){return(Y%B+B)%B}function I(Y,B,U){if(B===void 0)B=0;if(U===void 0)U=1;if(Y<B)return B;if(Y>U)return U;return Y}function N(Y){return Y.charAt(0).toUpperCase()+Y.substring(1)}function b(Y){for(var B=arguments.length,U=new Array(B>1?B-1:0),K=1;K<B;K++)U[K-1]=arguments[K];var Z=b.map,Q=function V(z,X,L,w){if(Y.charAt(w-1)=="%")return z.substring(1);if(!U.length)return z;var P=U[0],D=X||L,F=D.split(","),R=F.shift()||"",M=Z[R.toLowerCase()];if(!M)return z;P=U.shift();var j=P[M].apply(P,F),v=R.charAt(0);if(v!=v.toLowerCase())j=N(j);return j};return Y.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,Q)}b.map={s:"toString"};var d=Object.freeze({__proto__:null,mod:C,clamp:I,capitalize:N,format:b}),J0=function(Y){q0(B,Y);function B(){var K=Y.call(this)||this;return K._spacingX=0,K._spacingY=0,K._hexSize=0,K}var U=B.prototype;return U.draw=function K(Z,Q){var V=Z[0],z=Z[1],X=Z[2],L=Z[3],w=Z[4],P=[(V+1)*this._spacingX,z*this._spacingY+this._hexSize];if(this._options.transpose)P.reverse();if(Q)this._ctx.fillStyle=w,this._fill(P[0],P[1]);if(!X)return;this._ctx.fillStyle=L;var D=[].concat(X);for(var F=0;F<D.length;F++)this._ctx.fillText(D[F],P[0],Math.ceil(P[1]))},U.computeSize=function K(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=Math.floor(Z/this._spacingX)-1,z=Math.floor((Q-2*this._hexSize)/this._spacingY+1);return[V,z]},U.computeFontSize=function K(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=2*Z/((this._options.width+1)*Math.sqrt(3))-1,z=Q/(2+1.5*(this._options.height-1)),X=Math.min(V,z),L=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var w=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=L;var P=w/100;X=Math.floor(X)+1;var D=2*X/(this._options.spacing*(1+P/Math.sqrt(3)));return Math.ceil(D)-1},U._normalizedEventToPosition=function K(Z,Q){var V;if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q,V=this._ctx.canvas.width;else V=this._ctx.canvas.height;var z=V/this._options.height;if(Q=Math.floor(Q/z),C(Q,2))Z-=this._spacingX,Z=1+2*Math.floor(Z/(2*this._spacingX));else Z=2*Math.floor(Z/(2*this._spacingX));return[Z,Q]},U._fill=function K(Z,Q){var V=this._hexSize,z=this._options.border,X=this._ctx;if(X.beginPath(),this._options.transpose)X.moveTo(Z-V+z,Q),X.lineTo(Z-V/2+z,Q+this._spacingX-z),X.lineTo(Z+V/2-z,Q+this._spacingX-z),X.lineTo(Z+V-z,Q),X.lineTo(Z+V/2-z,Q-this._spacingX+z),X.lineTo(Z-V/2+z,Q-this._spacingX+z),X.lineTo(Z-V+z,Q);else X.moveTo(Z,Q-V+z),X.lineTo(Z+this._spacingX-z,Q-V/2+z),X.lineTo(Z+this._spacingX-z,Q+V/2-z),X.lineTo(Z,Q+V-z),X.lineTo(Z-this._spacingX+z,Q+V/2-z),X.lineTo(Z-this._spacingX+z,Q-V/2+z),X.lineTo(Z,Q-V+z);X.fill()},U._updateSize=function K(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(Z.spacing*(Z.fontSize+Q/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var V,z;if(Z.transpose)V="height",z="width";else V="width",z="height";this._ctx.canvas[V]=Math.ceil((Z.width+1)*this._spacingX),this._ctx.canvas[z]=Math.ceil((Z.height-1)*this._spacingY+2*this._hexSize)},B}(O),V0=function(Y){q0(B,Y);function B(){var K=Y.call(this)||this;return K._spacingX=0,K._spacingY=0,K._canvasCache={},K}var U=B.prototype;return U.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z),this._canvasCache={}},U.draw=function K(Z,Q){if(B.cache)this._drawWithCache(Z);else this._drawNoCache(Z,Q)},U._drawWithCache=function K(Z){var Q=Z[0],V=Z[1],z=Z[2],X=Z[3],L=Z[4],w=""+z+X+L,P;if(w in this._canvasCache)P=this._canvasCache[w];else{var D=this._options.border;P=document.createElement("canvas");var F=P.getContext("2d");if(P.width=this._spacingX,P.height=this._spacingY,F.fillStyle=L,F.fillRect(D,D,P.width-D,P.height-D),z){F.fillStyle=X,F.font=this._ctx.font,F.textAlign="center",F.textBaseline="middle";var R=[].concat(z);for(var M=0;M<R.length;M++)F.fillText(R[M],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[w]=P}this._ctx.drawImage(P,Q*this._spacingX,V*this._spacingY)},U._drawNoCache=function K(Z,Q){var V=Z[0],z=Z[1],X=Z[2],L=Z[3],w=Z[4];if(Q){var P=this._options.border;this._ctx.fillStyle=w,this._ctx.fillRect(V*this._spacingX+P,z*this._spacingY+P,this._spacingX-P,this._spacingY-P)}if(!X)return;this._ctx.fillStyle=L;var D=[].concat(X);for(var F=0;F<D.length;F++)this._ctx.fillText(D[F],(V+0.5)*this._spacingX,Math.ceil((z+0.5)*this._spacingY))},U.computeSize=function K(Z,Q){var V=Math.floor(Z/this._spacingX),z=Math.floor(Q/this._spacingY);return[V,z]},U.computeFontSize=function K(Z,Q){var V=Math.floor(Z/this._options.width),z=Math.floor(Q/this._options.height),X=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var L=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=X;var w=L/100,P=w*z/V;if(P>1)z=Math.floor(z/P);return Math.floor(z/this._options.spacing)},U._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._spacingX),Math.floor(Q/this._spacingY)]},U._updateSize=function K(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(Z.spacing*Q),this._spacingY=Math.ceil(Z.spacing*Z.fontSize),Z.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=Z.width*this._spacingX,this._ctx.canvas.height=Z.height*this._spacingY},B}(O);V0.cache=!1;var l=function(Y){q0(B,Y);function B(){var K=Y.call(this)||this;return K._colorCanvas=document.createElement("canvas"),K}var U=B.prototype;return U.draw=function K(Z,Q){var V=Z[0],z=Z[1],X=Z[2],L=Z[3],w=Z[4],P=this._options.tileWidth,D=this._options.tileHeight;if(Q)if(this._options.tileColorize)this._ctx.clearRect(V*P,z*D,P,D);else this._ctx.fillStyle=w,this._ctx.fillRect(V*P,z*D,P,D);if(!X)return;var F=[].concat(X),R=[].concat(L),M=[].concat(w);for(var j=0;j<F.length;j++){var v=this._options.tileMap[F[j]];if(!v)throw new Error('Char "'+F[j]+'" not found in tileMap');if(this._options.tileColorize){var u=this._colorCanvas,T=u.getContext("2d");T.globalCompositeOperation="source-over",T.clearRect(0,0,P,D);var y=R[j],i=M[j];if(T.drawImage(this._options.tileSet,v[0],v[1],P,D,0,0,P,D),y!="transparent")T.fillStyle=y,T.globalCompositeOperation="source-atop",T.fillRect(0,0,P,D);if(i!="transparent")T.fillStyle=i,T.globalCompositeOperation="destination-over",T.fillRect(0,0,P,D);this._ctx.drawImage(u,V*P,z*D,P,D)}else this._ctx.drawImage(this._options.tileSet,v[0],v[1],P,D,V*P,z*D,P,D)}},U.computeSize=function K(Z,Q){var V=Math.floor(Z/this._options.tileWidth),z=Math.floor(Q/this._options.tileHeight);return[V,z]},U.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},U._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},U._updateSize=function K(){var Z=this._options;this._ctx.canvas.width=Z.width*Z.tileWidth,this._ctx.canvas.height=Z.height*Z.tileHeight,this._colorCanvas.width=Z.tileWidth,this._colorCanvas.height=Z.tileHeight},B}(O);function m(Y){var B,U;if(Y in A)B=A[Y];else{if(Y.charAt(0)=="#"){var K=Y.match(/[0-9a-f]/gi)||[],Z=K.map(function(V){return parseInt(V,16)});if(Z.length==3)B=Z.map(function(V){return V*17});else{for(var Q=0;Q<3;Q++)Z[Q+1]+=16*Z[Q],Z.splice(Q,1);B=Z}}else if(U=Y.match(/rgb\(([0-9, ]+)\)/i))B=U[1].split(/\s*,\s*/).map(function(V){return parseInt(V)});else B=[0,0,0];A[Y]=B}return B.slice()}function Q0(Y){var B=Y.slice();for(var U=arguments.length,K=new Array(U>1?U-1:0),Z=1;Z<U;Z++)K[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++)for(var V=0;V<K.length;V++)B[Q]+=K[V][Q];return B}function x(Y){for(var B=arguments.length,U=new Array(B>1?B-1:0),K=1;K<B;K++)U[K-1]=arguments[K];for(var Z=0;Z<3;Z++)for(var Q=0;Q<U.length;Q++)Y[Z]+=U[Q][Z];return Y}function _(Y){var B=Y.slice();for(var U=arguments.length,K=new Array(U>1?U-1:0),Z=1;Z<U;Z++)K[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++){for(var V=0;V<K.length;V++)B[Q]*=K[V][Q]/255;B[Q]=Math.round(B[Q])}return B}function p(Y){for(var B=arguments.length,U=new Array(B>1?B-1:0),K=1;K<B;K++)U[K-1]=arguments[K];for(var Z=0;Z<3;Z++){for(var Q=0;Q<U.length;Q++)Y[Z]*=U[Q][Z]/255;Y[Z]=Math.round(Y[Z])}return Y}function z0(Y,B,U){if(U===void 0)U=0.5;var K=Y.slice();for(var Z=0;Z<3;Z++)K[Z]=Math.round(K[Z]+U*(B[Z]-Y[Z]));return K}var s=z0;function E(Y,B,U){if(U===void 0)U=0.5;var K=h(Y),Z=h(B);for(var Q=0;Q<3;Q++)K[Q]+=U*(Z[Q]-K[Q]);return a(K)}var k=E;function g(Y,B){if(!(B instanceof Array))B=Math.round(G.getNormal(0,B));var U=Y.slice();for(var K=0;K<3;K++)U[K]+=B instanceof Array?Math.round(G.getNormal(0,B[K])):B;return U}function h(Y){var B=Y[0]/255,U=Y[1]/255,K=Y[2]/255,Z=Math.max(B,U,K),Q=Math.min(B,U,K),V=0,z,X=(Z+Q)/2;if(Z==Q)z=0;else{var L=Z-Q;switch(z=X>0.5?L/(2-Z-Q):L/(Z+Q),Z){case B:V=(U-K)/L+(U<K?6:0);break;case U:V=(K-B)/L+2;break;case K:V=(B-U)/L+4;break}V/=6}return[V,z,X]}function t(Y,B,U){if(U<0)U+=1;if(U>1)U-=1;if(U<0.16666666666666666)return Y+(B-Y)*6*U;if(U<0.5)return B;if(U<0.6666666666666666)return Y+(B-Y)*(0.6666666666666666-U)*6;return Y}function a(Y){var B=Y[2];if(Y[1]==0)return B=Math.round(B*255),[B,B,B];else{var U=Y[1],K=B<0.5?B*(1+U):B+U-B*U,Z=2*B-K,Q=t(Z,K,Y[0]+0.3333333333333333),V=t(Z,K,Y[0]),z=t(Z,K,Y[0]-0.3333333333333333);return[Math.round(Q*255),Math.round(V*255),Math.round(z*255)]}}function f(Y){var B=Y.map(function(U){return I(U,0,255)});return"rgb("+B.join(",")+")"}function S(Y){var B=Y.map(function(U){return I(U,0,255).toString(16).padStart(2,"0")});return"#"+B.join("")}var A={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},o=Object.freeze({__proto__:null,fromString:m,add:Q0,add_:x,multiply:_,multiply_:p,interpolate:z0,lerp:s,interpolateHSL:E,lerpHSL:k,randomize:g,rgb2hsl:h,hsl2rgb:a,toRGB:f,toHex:S}),e=function(Y){q0(B,Y);function B(){var K=Y.call(this)||this;K._uniforms={};try{K._gl=K._initWebGL()}catch(Z){if(typeof Z==="string")alert(Z);else if(Z instanceof Error)alert(Z.message)}return K}B.isSupported=function K(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var U=B.prototype;return U.schedule=function K(Z){requestAnimationFrame(Z)},U.getContainer=function K(){return this._gl.canvas},U.setOptions=function K(Z){var Q=this;Y.prototype.setOptions.call(this,Z),this._updateSize();var V=this._options.tileSet;if(V&&"complete"in V&&!V.complete)V.addEventListener("load",function(){return Q._updateTexture(V)});else this._updateTexture(V)},U.draw=function K(Z,Q){var V=this._gl,z=this._options,X=Z[0],L=Z[1],w=Z[2],P=Z[3],D=Z[4],F=V.canvas.height-(L+1)*z.tileHeight;if(V.scissor(X*z.tileWidth,F,z.tileWidth,z.tileHeight),Q){if(z.tileColorize)V.clearColor(0,0,0,0);else V.clearColor.apply(V,p0(D));V.clear(V.COLOR_BUFFER_BIT)}if(!w)return;var R=[].concat(w),M=[].concat(D),j=[].concat(P);V.uniform2fv(this._uniforms.targetPosRel,[X,L]);for(var v=0;v<R.length;v++){var u=this._options.tileMap[R[v]];if(!u)throw new Error('Char "'+R[v]+'" not found in tileMap');if(V.uniform1f(this._uniforms.colorize,z.tileColorize?1:0),V.uniform2fv(this._uniforms.tilesetPosAbs,u),z.tileColorize)V.uniform4fv(this._uniforms.tint,p0(j[v])),V.uniform4fv(this._uniforms.bg,p0(M[v]));V.drawArrays(V.TRIANGLE_STRIP,0,4)}},U.clear=function K(){var Z=this._gl;Z.clearColor.apply(Z,p0(this._options.bg)),Z.scissor(0,0,Z.canvas.width,Z.canvas.height),Z.clear(Z.COLOR_BUFFER_BIT)},U.computeSize=function K(Z,Q){var V=Math.floor(Z/this._options.tileWidth),z=Math.floor(Q/this._options.tileHeight);return[V,z]},U.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},U.eventToPosition=function K(Z,Q){var V=this._gl.canvas,z=V.getBoundingClientRect();if(Z-=z.left,Q-=z.top,Z*=V.width/z.width,Q*=V.height/z.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},U._initWebGL=function K(){var Z=this,Q=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=Q;var V=j0(Q,D0,X0);return Q.useProgram(V),w0(Q),K0.forEach(function(z){return Z._uniforms[z]=Q.getUniformLocation(V,z)}),this._program=V,Q.enable(Q.BLEND),Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA),Q.enable(Q.SCISSOR_TEST),Q},U._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},U._updateSize=function K(){var Z=this._gl,Q=this._options,V=[Q.width*Q.tileWidth,Q.height*Q.tileHeight];Z.canvas.width=V[0],Z.canvas.height=V[1],Z.viewport(0,0,V[0],V[1]),Z.uniform2fv(this._uniforms.tileSize,[Q.tileWidth,Q.tileHeight]),Z.uniform2fv(this._uniforms.targetSize,V)},U._updateTexture=function K(Z){o0(this._gl,Z)},B}(H),K0=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],D0=`
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
}`.trim();function j0(Y,B,U){var K=Y.createShader(Y.VERTEX_SHADER);if(Y.shaderSource(K,B),Y.compileShader(K),!Y.getShaderParameter(K,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(K)||"");var Z=Y.createShader(Y.FRAGMENT_SHADER);if(Y.shaderSource(Z,U),Y.compileShader(Z),!Y.getShaderParameter(Z,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(Z)||"");var Q=Y.createProgram();if(Y.attachShader(Q,K),Y.attachShader(Q,Z),Y.linkProgram(Q),!Y.getProgramParameter(Q,Y.LINK_STATUS))throw new Error(Y.getProgramInfoLog(Q)||"");return Q}function w0(Y){var B=new Float32Array([0,0,1,0,0,1,1,1]),U=Y.createBuffer();Y.bindBuffer(Y.ARRAY_BUFFER,U),Y.bufferData(Y.ARRAY_BUFFER,B,Y.STATIC_DRAW),Y.enableVertexAttribArray(0),Y.vertexAttribPointer(0,2,Y.FLOAT,!1,0,0)}function o0(Y,B){var U=Y.createTexture();return Y.bindTexture(Y.TEXTURE_2D,U),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MAG_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MIN_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_S,Y.REPEAT),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_T,Y.REPEAT),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,0),Y.texImage2D(Y.TEXTURE_2D,0,Y.RGBA,Y.RGBA,Y.UNSIGNED_BYTE,B),U}var v0={};function p0(Y){if(!(Y in v0)){var B;if(Y=="transparent")B=[0,0,0,0];else if(Y.indexOf("rgba")>-1){B=(Y.match(/[\d.]+/g)||[]).map(Number);for(var U=0;U<3;U++)B[U]=B[U]/255}else B=m(Y).map(function(K){return K/255}),B.push(1);v0[Y]=B}return v0[Y]}function t6(Y){return"\x1B[0;48;5;"+j1(Y)+"m\x1B[2J"}function e6(Y,B){return"\x1B[0;38;5;"+j1(Y)+";48;5;"+j1(B)+"m"}function ZZ(Y,B){return"\x1B["+(B+1)+";"+(Y+1)+"H"}function j1(Y){var B=256,U=6,K=U/B,Z=m(Y),Q=Math.floor(Z[0]*K),V=Math.floor(Z[1]*K),z=Math.floor(Z[2]*K);return Q*36+V*6+z*1+16}var n1=function(Y){q0(B,Y);function B(){var K=Y.call(this)||this;return K._offset=[0,0],K._cursor=[-1,-1],K._lastColor="",K}var U=B.prototype;return U.schedule=function K(Z){setTimeout(Z,16.666666666666668)},U.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z);var Q=[Z.width,Z.height],V=this.computeSize();this._offset=V.map(function(z,X){return Math.floor((z-Q[X])/2)})},U.clear=function K(){process.stdout.write(t6(this._options.bg))},U.draw=function K(Z,Q){var V=Z[0],z=Z[1],X=Z[2],L=Z[3],w=Z[4],P=this._offset[0]+V,D=this._offset[1]+z,F=this.computeSize();if(P<0||P>=F[0])return;if(D<0||D>=F[1])return;if(P!==this._cursor[0]||D!==this._cursor[1])process.stdout.write(ZZ(P,D)),this._cursor[0]=P,this._cursor[1]=D;if(Q){if(!X)X=" "}if(!X)return;var R=e6(L,w);if(R!==this._lastColor)process.stdout.write(R),this._lastColor=R;if(X!="\t"){var M=[].concat(X);process.stdout.write(M[0])}if(this._cursor[0]++,this._cursor[0]>=F[0])this._cursor[0]=0,this._cursor[1]++},U.computeFontSize=function K(){throw new Error("Terminal backend has no notion of font size")},U.eventToPosition=function K(Z,Q){return[Z,Q]},U.computeSize=function K(){return[process.stdout.columns,process.stdout.rows]},B}(H),JZ=/%([bc]){([^}]*)}/g,I0=0,u0=1,C1=2,E1=3;function QZ(Y,B){var U={width:0,height:1},K=A1(Y,B),Z=0;for(var Q=0;Q<K.length;Q++){var V=K[Q];switch(V.type){case I0:Z+=V.value.length;break;case u0:U.height++,U.width=Math.max(U.width,Z),Z=0;break}}return U.width=Math.max(U.width,Z),U}function A1(Y,B){var U=[],K=0;Y.replace(JZ,function(Q,V,z,X){var L=Y.substring(K,X);if(L.length)U.push({type:I0,value:L});return U.push({type:V=="c"?C1:E1,value:z.trim()}),K=X+Q.length,""});var Z=Y.substring(K);if(Z.length)U.push({type:I0,value:Z});return VZ(U,B)}function VZ(Y,B){if(!B)B=1/0;var U=0,K=0,Z=-1;while(U<Y.length){var Q=Y[U];if(Q.type==u0)K=0,Z=-1;if(Q.type!=I0){U++;continue}while(K==0&&Q.value.charAt(0)==" ")Q.value=Q.value.substring(1);var V=Q.value.indexOf(`
`);if(V!=-1){Q.value=K1(Y,U,V,!0);var z=Q.value.split("");while(z.length&&z[z.length-1]==" ")z.pop();Q.value=z.join("")}if(!Q.value.length){Y.splice(U,1);continue}if(K+Q.value.length>B){var X=-1;while(!0){var L=Q.value.indexOf(" ",X+1);if(L==-1)break;if(K+L>B)break;X=L}if(X!=-1)Q.value=K1(Y,U,X,!0);else if(Z!=-1){var w=Y[Z],P=w.value.lastIndexOf(" ");w.value=K1(Y,Z,P,!0),U=Z}else Q.value=K1(Y,U,B-K,!1)}else if(K+=Q.value.length,Q.value.indexOf(" ")!=-1)Z=U;U++}Y.push({type:u0});var D=null;for(var F=0;F<Y.length;F++){var R=Y[F];switch(R.type){case I0:D=R;break;case u0:if(D){var M=D.value.split("");while(M.length&&M[M.length-1]==" ")M.pop();D.value=M.join("")}D=null;break}}return Y.pop(),Y}function K1(Y,B,U,K){var Z={type:u0},Q={type:I0,value:Y[B].value.substring(U+(K?1:0))};return Y.splice(B+1,0,Z,Q),Y[B].value.substring(0,U)}var KZ=Object.freeze({__proto__:null,TYPE_TEXT:I0,TYPE_NEWLINE:u0,TYPE_FG:C1,TYPE_BG:E1,measure:QZ,tokenize:A1}),N1=80,S1=25,G0={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},qZ={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},zZ={hex:J0,rect:V0,tile:l,"tile-gl":e,term:n1},UZ={width:N1,height:S1,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},l0=function(){function Y(U){if(U===void 0)U={};this._data={},this._dirty=!1,this._options={},U=Object.assign({},UZ,U),this.setOptions(U),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var B=Y.prototype;return B.DEBUG=function U(K,Z,Q){var V=[this._options.bg,this._options.fg];this.draw(K,Z,null,null,V[Q%V.length])},B.clear=function U(){this._data={},this._dirty=!0},B.setOptions=function U(K){if(Object.assign(this._options,K),K.width||K.height||K.fontSize||K.fontFamily||K.spacing||K.layout){if(K.layout){var Z=zZ[K.layout];this._backend=new Z}this._backend.setOptions(this._options),this._dirty=!0}return this},B.getOptions=function U(){return this._options},B.getContainer=function U(){return this._backend.getContainer()},B.computeSize=function U(K,Z){return this._backend.computeSize(K,Z)},B.computeFontSize=function U(K,Z){return this._backend.computeFontSize(K,Z)},B.computeTileSize=function U(K,Z){var Q=Math.floor(K/this._options.width),V=Math.floor(Z/this._options.height);return[Q,V]},B.eventToPosition=function U(K){var Z,Q;if("touches"in K)Z=K.touches[0].clientX,Q=K.touches[0].clientY;else Z=K.clientX,Q=K.clientY;return this._backend.eventToPosition(Z,Q)},B.draw=function U(K,Z,Q,V,z){if(!V)V=this._options.fg;if(!z)z=this._options.bg;var X=K+","+Z;if(this._data[X]=[K,Z,Q,V,z],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[X]=!0},B.drawOver=function U(K,Z,Q,V,z){var X=K+","+Z,L=this._data[X];if(L)L[2]=Q||L[2],L[3]=V||L[3],L[4]=z||L[4];else this.draw(K,Z,Q,V,z)},B.drawText=function U(K,Z,Q,V){var z=null,X=null,L=K,w=Z,P=1;if(!V)V=this._options.width-K;var D=A1(Q,V);while(D.length){var F=D.shift();switch(F.type){case I0:var R=!1,M=!1,j=!1,v=!1;for(var u=0;u<F.value.length;u++){var T=F.value.charCodeAt(u),y=F.value.charAt(u);if(this._options.layout==="term"){var i=T>>8,Z0=i===17||i>=46&&i<=159||i>=172&&i<=215||T>=43360&&T<=43391;if(Z0){this.draw(L+0,w,y,z,X),this.draw(L+1,w,"\t",z,X),L+=2;continue}}if(j=T>65280&&T<65377||T>65500&&T<65512||T>65518,R=y.charCodeAt(0)==32||y.charCodeAt(0)==12288,v&&!j&&!R)L++;if(j&&!M)L++;this.draw(L++,w,y,z,X),M=R,v=j}break;case C1:z=F.value||null;break;case E1:X=F.value||null;break;case u0:L=K,w++,P++;break}}return P},B._tick=function U(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var K in this._data)this._draw(K,!1)}else for(var Z in this._dirty)this._draw(Z,!0);this._dirty=!1},B._draw=function U(K,Z){var Q=this._data[K];if(Q[4]!=this._options.bg)Z=!0;this._backend.draw(Q,Z)},Y}();l0.Rect=V0,l0.Hex=J0,l0.Tile=l,l0.TileGL=e,l0.Term=n1;var $Z=function(){function Y(U){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,U),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var K=0;K<this._options.order;K++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var B=Y.prototype;return B.clear=function U(){this._data={},this._priorValues={}},B.generate=function U(){var K=[this._sample(this._prefix)];while(K[K.length-1]!=this._boundary)K.push(this._sample(K));return this._join(K.slice(0,-1))},B.observe=function U(K){var Z=this._split(K);for(var Q=0;Q<Z.length;Q++)this._priorValues[Z[Q]]=this._options.prior;Z=this._prefix.concat(Z).concat(this._suffix);for(var V=this._options.order;V<Z.length;V++){var z=Z.slice(V-this._options.order,V),X=Z[V];for(var L=0;L<z.length;L++){var w=z.slice(L);this._observeEvent(w,X)}}},B.getStats=function U(){var K=[],Z=Object.keys(this._priorValues).length;Z--,K.push("distinct samples: "+Z);var Q=Object.keys(this._data).length,V=0;for(var z in this._data)V+=Object.keys(this._data[z]).length;return K.push("dictionary size (contexts): "+Q),K.push("dictionary size (events): "+V),K.join(", ")},B._split=function U(K){return K.split(this._options.words?/\s+/:"")},B._join=function U(K){return K.join(this._options.words?" ":"")},B._observeEvent=function U(K,Z){var Q=this._join(K);if(!(Q in this._data))this._data[Q]={};var V=this._data[Q];if(!(Z in V))V[Z]=0;V[Z]++},B._sample=function U(K){K=this._backoff(K);var Z=this._join(K),Q=this._data[Z],V={};if(this._options.prior){for(var z in this._priorValues)V[z]=this._priorValues[z];for(var X in Q)V[X]+=Q[X]}else V=Q;return G.getWeightedValue(V)},B._backoff=function U(K){if(K.length>this._options.order)K=K.slice(-this._options.order);else if(K.length<this._options.order)K=this._prefix.slice(0,this._options.order-K.length).concat(K);while(!(this._join(K)in this._data)&&K.length>0)K=K.slice(1);return K},Y}(),s1=function(){function Y(){this.heap=[],this.timestamp=0}var B=Y.prototype;return B.lessThan=function U(K,Z){return K.key==Z.key?K.timestamp<Z.timestamp:K.key<Z.key},B.shift=function U(K){this.heap=this.heap.map(function(Z){var{key:Q,value:V,timestamp:z}=Z;return{key:Q+K,value:V,timestamp:z}})},B.len=function U(){return this.heap.length},B.push=function U(K,Z){this.timestamp+=1;var Q=this.len();this.heap.push({value:K,timestamp:this.timestamp,key:Z}),this.updateUp(Q)},B.pop=function U(){if(this.len()==0)throw new Error("no element to pop");var K=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return K},B.find=function U(K){for(var Z=0;Z<this.len();Z++)if(K==this.heap[Z].value)return this.heap[Z];return null},B.remove=function U(K){var Z=null;for(var Q=0;Q<this.len();Q++)if(K==this.heap[Q].value)Z=Q;if(Z===null)return!1;if(this.len()>1){var V=this.heap.pop();if(V.value!=K)this.heap[Z]=V,this.updateDown(Z);return!0}else this.heap.pop();return!0},B.parentNode=function U(K){return Math.floor((K-1)/2)},B.leftChildNode=function U(K){return 2*K+1},B.rightChildNode=function U(K){return 2*K+2},B.existNode=function U(K){return K>=0&&K<this.heap.length},B.swap=function U(K,Z){var Q=this.heap[K];this.heap[K]=this.heap[Z],this.heap[Z]=Q},B.minNode=function U(K){var Z=K.filter(this.existNode.bind(this)),Q=Z[0];for(var V=QJ(Z),z;!(z=V()).done;){var X=z.value;if(this.lessThan(this.heap[X],this.heap[Q]))Q=X}return Q},B.updateUp=function U(K){if(K==0)return;var Z=this.parentNode(K);if(this.existNode(Z)&&this.lessThan(this.heap[K],this.heap[Z]))this.swap(K,Z),this.updateUp(Z)},B.updateDown=function U(K){var Z=this.leftChildNode(K),Q=this.rightChildNode(K);if(!this.existNode(Z))return;var V=this.minNode([K,Z,Q]);if(V!=K)this.swap(K,V),this.updateDown(V)},B.debugPrint=function U(){console.log(this.heap)},Y}(),o1=function(){function Y(){this._time=0,this._events=new s1}var B=Y.prototype;return B.getTime=function U(){return this._time},B.clear=function U(){return this._events=new s1,this},B.add=function U(K,Z){this._events.push(K,Z)},B.get=function U(){if(!this._events.len())return null;var K=this._events.pop(),Z=K.key,Q=K.value;if(Z>0)this._time+=Z,this._events.shift(-Z);return Q},B.getEventTime=function U(K){var Z=this._events.find(K);if(Z){var Q=Z.key;return Q}return},B.remove=function U(K){return this._events.remove(K)},Y}(),v1=function(){function Y(){this._queue=new o1,this._repeat=[],this._current=null}var B=Y.prototype;return B.getTime=function U(){return this._queue.getTime()},B.add=function U(K,Z){if(Z)this._repeat.push(K);return this},B.getTimeOf=function U(K){return this._queue.getEventTime(K)},B.clear=function U(){return this._queue.clear(),this._repeat=[],this._current=null,this},B.remove=function U(K){var Z=this._queue.remove(K),Q=this._repeat.indexOf(K);if(Q!=-1)this._repeat.splice(Q,1);if(this._current==K)this._current=null;return Z},B.next=function U(){return this._current=this._queue.get(),this._current},Y}(),XZ=function(Y){q0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.add=function K(Z,Q){return this._queue.add(Z,0),Y.prototype.add.call(this,Z,Q)},U.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return Y.prototype.next.call(this)},B}(v1),GZ=function(Y){q0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.add=function K(Z,Q,V){return this._queue.add(Z,V!==void 0?V:1/Z.getSpeed()),Y.prototype.add.call(this,Z,Q)},U.next=function K(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return Y.prototype.next.call(this)},B}(v1),BZ=function(Y){q0(B,Y);function B(){var K=Y.call(this)||this;return K._defaultDuration=1,K._duration=K._defaultDuration,K}var U=B.prototype;return U.add=function K(Z,Q,V){return this._queue.add(Z,V||this._defaultDuration),Y.prototype.add.call(this,Z,Q)},U.clear=function K(){return this._duration=this._defaultDuration,Y.prototype.clear.call(this)},U.remove=function K(Z){if(Z==this._current)this._duration=this._defaultDuration;return Y.prototype.remove.call(this,Z)},U.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return Y.prototype.next.call(this)},U.setDuration=function K(Z){if(this._current)this._duration=Z;return this},B}(v1),YZ={Simple:XZ,Speed:GZ,Action:BZ},I1=function(){function Y(U,K){if(K===void 0)K={};this._lightPasses=U,this._options=Object.assign({topology:8},K)}var B=Y.prototype;return B._getCircle=function U(K,Z,Q){var V=[],z,X,L;switch(this._options.topology){case 4:X=1,L=[0,1],z=[G0[8][7],G0[8][1],G0[8][3],G0[8][5]];break;case 6:z=G0[6],X=1,L=[-1,1];break;case 8:z=G0[4],X=2,L=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var w=K+L[0]*Q,P=Z+L[1]*Q;for(var D=0;D<z.length;D++)for(var F=0;F<Q*X;F++)V.push([w,P]),w+=z[D][0],P+=z[D][1];return V},Y}(),wZ=function(Y){q0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.compute=function K(Z,Q,V,z){if(z(Z,Q,0,1),!this._lightPasses(Z,Q))return;var X=[],L,w,P,D,F;for(var R=1;R<=V;R++){var M=this._getCircle(Z,Q,R),j=360/M.length;for(var v=0;v<M.length;v++){if(P=M[v][0],D=M[v][1],L=j*(v-0.5),w=L+j,F=!this._lightPasses(P,D),this._visibleCoords(Math.floor(L),Math.ceil(w),F,X))z(P,D,R,1);if(X.length==2&&X[0]==0&&X[1]==360)return}}},U._visibleCoords=function K(Z,Q,V,z){if(Z<0){var X=this._visibleCoords(0,Q,V,z),L=this._visibleCoords(360+Z,360,V,z);return X||L}var w=0;while(w<z.length&&z[w]<Z)w++;if(w==z.length){if(V)z.push(Z,Q);return!0}var P=0;if(w%2){while(w<z.length&&z[w]<Q)w++,P++;if(P==0)return!1;if(V)if(P%2)z.splice(w-P,P,Q);else z.splice(w-P,P);return!0}else{while(w<z.length&&z[w]<Q)w++,P++;if(Z==z[w-P]&&P==1)return!1;if(V)if(P%2)z.splice(w-P,P,Z);else z.splice(w-P,P,Z,Q);return!0}},B}(I1),LZ=function(Y){q0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.compute=function K(Z,Q,V,z){if(z(Z,Q,0,1),!this._lightPasses(Z,Q))return;var X=[],L,w,P,D,F,R;for(var M=1;M<=V;M++){var j=this._getCircle(Z,Q,M),v=j.length;for(var u=0;u<v;u++){if(L=j[u][0],w=j[u][1],D=[u?2*u-1:2*v-1,2*v],F=[2*u+1,2*v],P=!this._lightPasses(L,w),R=this._checkVisibility(D,F,P,X),R)z(L,w,M,R);if(X.length==2&&X[0][0]==0&&X[1][0]==X[1][1])return}}},U._checkVisibility=function K(Z,Q,V,z){if(Z[0]>Q[0]){var X=this._checkVisibility(Z,[Z[1],Z[1]],V,z),L=this._checkVisibility([0,1],Q,V,z);return(X+L)/2}var w=0,P=!1;while(w<z.length){var D=z[w],F=D[0]*Z[1]-Z[0]*D[1];if(F>=0){if(F==0&&!(w%2))P=!0;break}w++}var R=z.length,M=!1;while(R--){var j=z[R],v=Q[0]*j[1]-j[0]*Q[1];if(v>=0){if(v==0&&R%2)M=!0;break}}var u=!0;if(w==R&&(P||M))u=!1;else if(P&&M&&w+1==R&&R%2)u=!1;else if(w>R&&w%2)u=!1;if(!u)return 0;var T,y=R-w+1;if(y%2)if(w%2){var i=z[w];if(T=(Q[0]*i[1]-i[0]*Q[1])/(i[1]*Q[1]),V)z.splice(w,y,Q)}else{var Z0=z[R];if(T=(Z0[0]*Z[1]-Z[0]*Z0[1])/(Z[1]*Z0[1]),V)z.splice(w,y,Z)}else if(w%2){var $0=z[w],P0=z[R];if(T=(P0[0]*$0[1]-$0[0]*P0[1])/($0[1]*P0[1]),V)z.splice(w,y)}else{if(V)z.splice(w,y,Z,Q);return 1}var C0=(Q[0]*Z[1]-Z[0]*Q[1])/(Z[1]*Q[1]);return T/C0},B}(I1),b0=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],PZ=function(Y){q0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.compute=function K(Z,Q,V,z){z(Z,Q,0,1);for(var X=0;X<b0.length;X++)this._renderOctant(Z,Q,b0[X],V,z)},U.compute180=function K(Z,Q,V,z,X){X(Z,Q,0,1);var L=(z-1+8)%8,w=(z-2+8)%8,P=(z+1+8)%8;this._renderOctant(Z,Q,b0[w],V,X),this._renderOctant(Z,Q,b0[L],V,X),this._renderOctant(Z,Q,b0[z],V,X),this._renderOctant(Z,Q,b0[P],V,X)},U.compute90=function K(Z,Q,V,z,X){X(Z,Q,0,1);var L=(z-1+8)%8;this._renderOctant(Z,Q,b0[z],V,X),this._renderOctant(Z,Q,b0[L],V,X)},U._renderOctant=function K(Z,Q,V,z,X){this._castVisibility(Z,Q,1,1,0,z+1,V[0],V[1],V[2],V[3],X)},U._castVisibility=function K(Z,Q,V,z,X,L,w,P,D,F,R){if(z<X)return;for(var M=V;M<=L;M++){var j=-M-1,v=-M,u=!1,T=0;while(j<=0){j+=1;var y=Z+j*w+v*P,i=Q+j*D+v*F,Z0=(j-0.5)/(v+0.5),$0=(j+0.5)/(v-0.5);if($0>z)continue;if(Z0<X)break;if(j*j+v*v<L*L)R(y,i,M,1);if(!u){if(!this._lightPasses(y,i)&&M<L)u=!0,this._castVisibility(Z,Q,M+1,z,Z0,L,w,P,D,F,R),T=$0}else{if(!this._lightPasses(y,i)){T=$0;continue}u=!1,z=T}}if(u)break}},B}(I1),HZ={DiscreteShadowcasting:wZ,PreciseShadowcasting:LZ,RecursiveShadowcasting:PZ},g0=function(){function Y(U,K){if(U===void 0)U=N1;if(K===void 0)K=S1;this._width=U,this._height=K}var B=Y.prototype;return B._fillMap=function U(K){var Z=[];for(var Q=0;Q<this._width;Q++){Z.push([]);for(var V=0;V<this._height;V++)Z[Q].push(K)}return Z},Y}(),DZ=function(Y){q0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.create=function K(Z){var Q=this._width-1,V=this._height-1;for(var z=0;z<=Q;z++)for(var X=0;X<=V;X++){var L=z&&X&&z<Q&&X<V;Z(z,X,L?0:1)}return this},B}(g0),a1=function(Y){q0(B,Y);function B(K,Z){var Q=Y.call(this,K,Z)||this;return Q._rooms=[],Q._corridors=[],Q}var U=B.prototype;return U.getRooms=function K(){return this._rooms},U.getCorridors=function K(){return this._corridors},B}(g0),i1=function Y(){},q1=function(Y){q0(B,Y);function B(K,Z,Q,V,z,X){var L=Y.call(this)||this;if(L._x1=K,L._y1=Z,L._x2=Q,L._y2=V,L._doors={},z!==void 0&&X!==void 0)L.addDoor(z,X);return L}B.createRandomAt=function K(Z,Q,V,z,X){var L=X.roomWidth[0],w=X.roomWidth[1],P=G.getUniformInt(L,w);L=X.roomHeight[0],w=X.roomHeight[1];var D=G.getUniformInt(L,w);if(V==1){var F=Q-Math.floor(G.getUniform()*D);return new this(Z+1,F,Z+P,F+D-1,Z,Q)}if(V==-1){var R=Q-Math.floor(G.getUniform()*D);return new this(Z-P,R,Z-1,R+D-1,Z,Q)}if(z==1){var M=Z-Math.floor(G.getUniform()*P);return new this(M,Q+1,M+P-1,Q+D,Z,Q)}if(z==-1){var j=Z-Math.floor(G.getUniform()*P);return new this(j,Q-D,j+P-1,Q-1,Z,Q)}throw new Error("dx or dy must be 1 or -1")},B.createRandomCenter=function K(Z,Q,V){var z=V.roomWidth[0],X=V.roomWidth[1],L=G.getUniformInt(z,X);z=V.roomHeight[0],X=V.roomHeight[1];var w=G.getUniformInt(z,X),P=Z-Math.floor(G.getUniform()*L),D=Q-Math.floor(G.getUniform()*w),F=P+L-1,R=D+w-1;return new this(P,D,F,R)},B.createRandom=function K(Z,Q,V){var z=V.roomWidth[0],X=V.roomWidth[1],L=G.getUniformInt(z,X);z=V.roomHeight[0],X=V.roomHeight[1];var w=G.getUniformInt(z,X),P=Z-L-1,D=Q-w-1,F=1+Math.floor(G.getUniform()*P),R=1+Math.floor(G.getUniform()*D),M=F+L-1,j=R+w-1;return new this(F,R,M,j)};var U=B.prototype;return U.addDoor=function K(Z,Q){return this._doors[Z+","+Q]=1,this},U.getDoors=function K(Z){for(var Q in this._doors){var V=Q.split(",");Z(parseInt(V[0]),parseInt(V[1]))}return this},U.clearDoors=function K(){return this._doors={},this},U.addDoors=function K(Z){var Q=this._x1-1,V=this._x2+1,z=this._y1-1,X=this._y2+1;for(var L=Q;L<=V;L++)for(var w=z;w<=X;w++){if(L!=Q&&L!=V&&w!=z&&w!=X)continue;if(Z(L,w))continue;this.addDoor(L,w)}return this},U.debug=function K(){console.log("room",this._x1,this._y1,this._x2,this._y2)},U.isValid=function K(Z,Q){var V=this._x1-1,z=this._x2+1,X=this._y1-1,L=this._y2+1;for(var w=V;w<=z;w++)for(var P=X;P<=L;P++)if(w==V||w==z||P==X||P==L){if(!Z(w,P))return!1}else if(!Q(w,P))return!1;return!0},U.create=function K(Z){var Q=this._x1-1,V=this._x2+1,z=this._y1-1,X=this._y2+1,L=0;for(var w=Q;w<=V;w++)for(var P=z;P<=X;P++){if(w+","+P in this._doors)L=2;else if(w==Q||w==V||P==z||P==X)L=1;else L=0;Z(w,P,L)}},U.getCenter=function K(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},U.getLeft=function K(){return this._x1},U.getRight=function K(){return this._x2},U.getTop=function K(){return this._y1},U.getBottom=function K(){return this._y2},B}(i1),b1=function(Y){q0(B,Y);function B(K,Z,Q,V){var z=Y.call(this)||this;return z._startX=K,z._startY=Z,z._endX=Q,z._endY=V,z._endsWithAWall=!0,z}B.createRandomAt=function K(Z,Q,V,z,X){var L=X.corridorLength[0],w=X.corridorLength[1],P=G.getUniformInt(L,w);return new this(Z,Q,Z+V*P,Q+z*P)};var U=B.prototype;return U.debug=function K(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},U.isValid=function K(Z,Q){var V=this._startX,z=this._startY,X=this._endX-V,L=this._endY-z,w=1+Math.max(Math.abs(X),Math.abs(L));if(X)X=X/Math.abs(X);if(L)L=L/Math.abs(L);var P=L,D=-X,F=!0;for(var R=0;R<w;R++){var M=V+R*X,j=z+R*L;if(!Q(M,j))F=!1;if(!Z(M+P,j+D))F=!1;if(!Z(M-P,j-D))F=!1;if(!F){w=R,this._endX=M-X,this._endY=j-L;break}}if(w==0)return!1;if(w==1&&Z(this._endX+X,this._endY+L))return!1;var v=!Z(this._endX+X+P,this._endY+L+D),u=!Z(this._endX+X-P,this._endY+L-D);if(this._endsWithAWall=Z(this._endX+X,this._endY+L),(v||u)&&this._endsWithAWall)return!1;return!0},U.create=function K(Z){var Q=this._startX,V=this._startY,z=this._endX-Q,X=this._endY-V,L=1+Math.max(Math.abs(z),Math.abs(X));if(z)z=z/Math.abs(z);if(X)X=X/Math.abs(X);for(var w=0;w<L;w++){var P=Q+w*z,D=V+w*X;Z(P,D,0)}return!0},U.createPriorityWalls=function K(Z){if(!this._endsWithAWall)return;var Q=this._startX,V=this._startY,z=this._endX-Q,X=this._endY-V;if(z)z=z/Math.abs(z);if(X)X=X/Math.abs(X);var L=X,w=-z;Z(this._endX+z,this._endY+X),Z(this._endX+L,this._endY+w),Z(this._endX-L,this._endY-w)},B}(i1),WZ=function(Y){q0(B,Y);function B(K,Z,Q){var V=Y.call(this,K,Z)||this;return V._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(V._options,Q),V._map=[],V._dug=0,V._roomAttempts=20,V._corridorAttempts=20,V._connected=[],V._unconnected=[],V._digCallback=V._digCallback.bind(c0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(c0(V)),V._isWallCallback=V._isWallCallback.bind(c0(V)),V}var U=B.prototype;return U.create=function K(Z){var Q=Date.now();while(!0){var V=Date.now();if(V-Q>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(Z)for(var z=0;z<this._width;z++)for(var X=0;X<this._height;X++)Z(z,X,this._map[z][X]);return this},U._generateRooms=function K(){var Z=this._width-2,Q=this._height-2,V;do if(V=this._generateRoom(),this._dug/(Z*Q)>this._options.roomDugPercentage)break;while(V)},U._generateRoom=function K(){var Z=0;while(Z<this._roomAttempts){Z++;var Q=q1.createRandom(this._width,this._height,this._options);if(!Q.isValid(this._isWallCallback,this._canBeDugCallback))continue;return Q.create(this._digCallback),this._rooms.push(Q),Q}return null},U._generateCorridors=function K(){var Z=0;while(Z<this._corridorAttempts){Z++,this._corridors=[],this._map=this._fillMap(1);for(var Q=0;Q<this._rooms.length;Q++){var V=this._rooms[Q];V.clearDoors(),V.create(this._digCallback)}if(this._unconnected=G.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var z=G.getItem(this._connected);if(!z)break;var X=this._closestRoom(this._unconnected,z);if(!X)break;var L=this._closestRoom(this._connected,X);if(!L)break;var w=this._connectRooms(X,L);if(!w)break;if(!this._unconnected.length)return!0}}return!1},U._closestRoom=function K(Z,Q){var V=1/0,z=Q.getCenter(),X=null;for(var L=0;L<Z.length;L++){var w=Z[L],P=w.getCenter(),D=P[0]-z[0],F=P[1]-z[1],R=D*D+F*F;if(R<V)V=R,X=w}return X},U._connectRooms=function K(Z,Q){var V=Z.getCenter(),z=Q.getCenter(),X=z[0]-V[0],L=z[1]-V[1],w,P,D,F,R,M,j;if(Math.abs(X)<Math.abs(L))D=L>0?2:0,F=(D+2)%4,R=Q.getLeft(),M=Q.getRight(),j=0;else D=X>0?1:3,F=(D+2)%4,R=Q.getTop(),M=Q.getBottom(),j=1;if(w=this._placeInWall(Z,D),!w)return!1;if(w[j]>=R&&w[j]<=M){P=w.slice();var v=0;switch(F){case 0:v=Q.getTop()-1;break;case 1:v=Q.getRight()+1;break;case 2:v=Q.getBottom()+1;break;case 3:v=Q.getLeft()-1;break}P[(j+1)%2]=v,this._digLine([w,P])}else if(w[j]<R-1||w[j]>M+1){var u=w[j]-z[j],T=0;switch(F){case 0:case 1:T=u<0?3:1;break;case 2:case 3:T=u<0?1:3;break}if(F=(F+T)%4,P=this._placeInWall(Q,F),!P)return!1;var y=[0,0];y[j]=w[j];var i=(j+1)%2;y[i]=P[i],this._digLine([w,y,P])}else{var Z0=(j+1)%2;if(P=this._placeInWall(Q,F),!P)return!1;var $0=Math.round((P[Z0]+w[Z0])/2),P0=[0,0],C0=[0,0];P0[j]=w[j],P0[Z0]=$0,C0[j]=P[j],C0[Z0]=$0,this._digLine([w,P0,C0,P])}if(Z.addDoor(w[0],w[1]),Q.addDoor(P[0],P[1]),j=this._unconnected.indexOf(Z),j!=-1)this._unconnected.splice(j,1),this._connected.push(Z);if(j=this._unconnected.indexOf(Q),j!=-1)this._unconnected.splice(j,1),this._connected.push(Q);return!0},U._placeInWall=function K(Z,Q){var V=[0,0],z=[0,0],X=0;switch(Q){case 0:z=[1,0],V=[Z.getLeft(),Z.getTop()-1],X=Z.getRight()-Z.getLeft()+1;break;case 1:z=[0,1],V=[Z.getRight()+1,Z.getTop()],X=Z.getBottom()-Z.getTop()+1;break;case 2:z=[1,0],V=[Z.getLeft(),Z.getBottom()+1],X=Z.getRight()-Z.getLeft()+1;break;case 3:z=[0,1],V=[Z.getLeft()-1,Z.getTop()],X=Z.getBottom()-Z.getTop()+1;break}var L=[],w=-2;for(var P=0;P<X;P++){var D=V[0]+P*z[0],F=V[1]+P*z[1];L.push(null);var R=this._map[D][F]==1;if(R){if(w!=P-1)L[P]=[D,F]}else if(w=P,P)L[P-1]=null}for(var M=L.length-1;M>=0;M--)if(!L[M])L.splice(M,1);return L.length?G.getItem(L):null},U._digLine=function K(Z){for(var Q=1;Q<Z.length;Q++){var V=Z[Q-1],z=Z[Q],X=new b1(V[0],V[1],z[0],z[1]);X.create(this._digCallback),this._corridors.push(X)}},U._digCallback=function K(Z,Q,V){if(this._map[Z][Q]=V,V==0)this._dug++},U._isWallCallback=function K(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},U._canBeDugCallback=function K(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},B}(a1),FZ=function(Y){q0(B,Y);function B(K,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,K,Z)||this,V._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},V.setOptions(Q),V._dirs=G0[V._options.topology],V._map=V._fillMap(0),V}var U=B.prototype;return U.randomize=function K(Z){for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)this._map[Q][V]=G.getUniform()<Z?1:0;return this},U.setOptions=function K(Z){Object.assign(this._options,Z)},U.set=function K(Z,Q,V){this._map[Z][Q]=V},U.create=function K(Z){var Q=this._fillMap(0),V=this._options.born,z=this._options.survive;for(var X=0;X<this._height;X++){var L=1,w=0;if(this._options.topology==6)L=2,w=X%2;for(var P=w;P<this._width;P+=L){var D=this._map[P][X],F=this._getNeighbors(P,X);if(D&&z.indexOf(F)!=-1)Q[P][X]=1;else if(!D&&V.indexOf(F)!=-1)Q[P][X]=1}}this._map=Q,Z&&this._serviceCallback(Z)},U._serviceCallback=function K(Z){for(var Q=0;Q<this._height;Q++){var V=1,z=0;if(this._options.topology==6)V=2,z=Q%2;for(var X=z;X<this._width;X+=V)Z(X,Q,this._map[X][Q])}},U._getNeighbors=function K(Z,Q){var V=0;for(var z=0;z<this._dirs.length;z++){var X=this._dirs[z],L=Z+X[0],w=Q+X[1];if(L<0||L>=this._width||w<0||w>=this._height)continue;V+=this._map[L][w]==1?1:0}return V},U.connect=function K(Z,Q,V){if(!Q)Q=0;var z=[],X={},L=1,w=[0,0];if(this._options.topology==6)L=2,w=[0,1];for(var P=0;P<this._height;P++)for(var D=w[P%2];D<this._width;D+=L)if(this._freeSpace(D,P,Q)){var F=[D,P];X[this._pointKey(F)]=F,z.push([D,P])}var R=z[G.getUniformInt(0,z.length-1)],M=this._pointKey(R),j={};j[M]=R,delete X[M],this._findConnected(j,X,[R],!1,Q);while(Object.keys(X).length>0){var v=this._getFromTo(j,X),u=v[0],T=v[1],y={};y[this._pointKey(u)]=u,this._findConnected(y,X,[u],!0,Q);var i=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;i.call(this,T,u,j,X,Q,V);for(var Z0 in y){var $0=y[Z0];this._map[$0[0]][$0[1]]=Q,j[Z0]=$0,delete X[Z0]}}Z&&this._serviceCallback(Z)},U._getFromTo=function K(Z,Q){var V=[0,0],z=[0,0],X,L=Object.keys(Z),w=Object.keys(Q);for(var P=0;P<5;P++){if(L.length<w.length){var D=L;z=Z[D[G.getUniformInt(0,D.length-1)]],V=this._getClosest(z,Q)}else{var F=w;V=Q[F[G.getUniformInt(0,F.length-1)]],z=this._getClosest(V,Z)}if(X=(V[0]-z[0])*(V[0]-z[0])+(V[1]-z[1])*(V[1]-z[1]),X<64)break}return[V,z]},U._getClosest=function K(Z,Q){var V=null,z=null;for(var X in Q){var L=Q[X],w=(L[0]-Z[0])*(L[0]-Z[0])+(L[1]-Z[1])*(L[1]-Z[1]);if(z==null||w<z)z=w,V=L}return V},U._findConnected=function K(Z,Q,V,z,X){while(V.length>0){var L=V.splice(0,1)[0],w=void 0;if(this._options.topology==6)w=[[L[0]+2,L[1]],[L[0]+1,L[1]-1],[L[0]-1,L[1]-1],[L[0]-2,L[1]],[L[0]-1,L[1]+1],[L[0]+1,L[1]+1]];else w=[[L[0]+1,L[1]],[L[0]-1,L[1]],[L[0],L[1]+1],[L[0],L[1]-1]];for(var P=0;P<w.length;P++){var D=this._pointKey(w[P]);if(Z[D]==null&&this._freeSpace(w[P][0],w[P][1],X)){if(Z[D]=w[P],!z)delete Q[D];V.push(w[P])}}}},U._tunnelToConnected=function K(Z,Q,V,z,X,L){var w,P;if(Q[0]<Z[0])w=Q,P=Z;else w=Z,P=Q;for(var D=w[0];D<=P[0];D++){this._map[D][w[1]]=X;var F=[D,w[1]],R=this._pointKey(F);V[R]=F,delete z[R]}if(L&&w[0]<P[0])L(w,[P[0],w[1]]);var M=P[0];if(Q[1]<Z[1])w=Q,P=Z;else w=Z,P=Q;for(var j=w[1];j<P[1];j++){this._map[M][j]=X;var v=[M,j],u=this._pointKey(v);V[u]=v,delete z[u]}if(L&&w[1]<P[1])L([P[0],w[1]],[P[0],P[1]])},U._tunnelToConnected6=function K(Z,Q,V,z,X,L){var w,P;if(Q[0]<Z[0])w=Q,P=Z;else w=Z,P=Q;var D=w[0],F=w[1];while(!(D==P[0]&&F==P[1])){var R=2;if(F<P[1])F++,R=1;else if(F>P[1])F--,R=1;if(D<P[0])D+=R;else if(D>P[0])D-=R;else if(P[1]%2)D-=R;else D+=R;this._map[D][F]=X;var M=[D,F],j=this._pointKey(M);V[j]=M,delete z[j]}if(L)L(Q,Z)},U._freeSpace=function K(Z,Q,V){return Z>=0&&Z<this._width&&Q>=0&&Q<this._height&&this._map[Z][Q]==V},U._pointKey=function K(Z){return Z[0]+"."+Z[1]},B}(g0),RZ={room:q1,corridor:b1},OZ=function(Y){q0(B,Y);function B(K,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,K,Z)||this,V._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},Q),V._features={room:4,corridor:4},V._map=[],V._featureAttempts=20,V._walls={},V._dug=0,V._digCallback=V._digCallback.bind(c0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(c0(V)),V._isWallCallback=V._isWallCallback.bind(c0(V)),V._priorityWallCallback=V._priorityWallCallback.bind(c0(V)),V}var U=B.prototype;return U.create=function K(Z){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var Q=(this._width-2)*(this._height-2);this._firstRoom();var V=Date.now(),z;do{z=0;var X=Date.now();if(X-V>this._options.timeLimit)break;var L=this._findWall();if(!L)break;var w=L.split(","),P=parseInt(w[0]),D=parseInt(w[1]),F=this._getDiggingDirection(P,D);if(!F)continue;var R=0;do if(R++,this._tryFeature(P,D,F[0],F[1])){this._removeSurroundingWalls(P,D),this._removeSurroundingWalls(P-F[0],D-F[1]);break}while(R<this._featureAttempts);for(var M in this._walls)if(this._walls[M]>1)z++}while(this._dug/Q<this._options.dugPercentage||z);if(this._addDoors(),Z)for(var j=0;j<this._width;j++)for(var v=0;v<this._height;v++)Z(j,v,this._map[j][v]);return this._walls={},this._map=[],this},U._digCallback=function K(Z,Q,V){if(V==0||V==2)this._map[Z][Q]=0,this._dug++;else this._walls[Z+","+Q]=1},U._isWallCallback=function K(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},U._canBeDugCallback=function K(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},U._priorityWallCallback=function K(Z,Q){this._walls[Z+","+Q]=2},U._firstRoom=function K(){var Z=Math.floor(this._width/2),Q=Math.floor(this._height/2),V=q1.createRandomCenter(Z,Q,this._options);this._rooms.push(V),V.create(this._digCallback)},U._findWall=function K(){var Z=[],Q=[];for(var V in this._walls){var z=this._walls[V];if(z==2)Q.push(V);else Z.push(V)}var X=Q.length?Q:Z;if(!X.length)return null;var L=G.getItem(X.sort());return delete this._walls[L],L},U._tryFeature=function K(Z,Q,V,z){var X=G.getWeightedValue(this._features),L=RZ[X],w=L.createRandomAt(Z,Q,V,z,this._options);if(!w.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(w.create(this._digCallback),w instanceof q1)this._rooms.push(w);if(w instanceof b1)w.createPriorityWalls(this._priorityWallCallback),this._corridors.push(w);return!0},U._removeSurroundingWalls=function K(Z,Q){var V=G0[4];for(var z=0;z<V.length;z++){var X=V[z],L=Z+X[0],w=Q+X[1];delete this._walls[L+","+w],L=Z+2*X[0],w=Q+2*X[1],delete this._walls[L+","+w]}},U._getDiggingDirection=function K(Z,Q){if(Z<=0||Q<=0||Z>=this._width-1||Q>=this._height-1)return null;var V=null,z=G0[4];for(var X=0;X<z.length;X++){var L=z[X],w=Z+L[0],P=Q+L[1];if(!this._map[w][P]){if(V)return null;V=L}}if(!V)return null;return[-V[0],-V[1]]},U._addDoors=function K(){var Z=this._map;function Q(X,L){return Z[X][L]==1}for(var V=0;V<this._rooms.length;V++){var z=this._rooms[V];z.clearDoors(),z.addDoors(Q)}},B}(a1);function t1(Y,B,U){U[B[Y+1]]=U[Y],B[U[Y]]=B[Y+1],U[Y]=Y+1,B[Y+1]=Y}function e1(Y,B,U){U[B[Y]]=U[Y],B[U[Y]]=B[Y],U[Y]=Y,B[Y]=Y}var MZ=function(Y){q0(B,Y);function B(){return Y.apply(this,arguments)||this}var U=B.prototype;return U.create=function K(Z){var Q=this._fillMap(1),V=Math.ceil((this._width-2)/2),z=0.375,X=[],L=[];for(var w=0;w<V;w++)X.push(w),L.push(w);X.push(V-1);var P;for(P=1;P+3<this._height;P+=2)for(var D=0;D<V;D++){var F=2*D+1,R=P;if(Q[F][R]=0,D!=X[D+1]&&G.getUniform()>z)t1(D,X,L),Q[F+1][R]=0;if(D!=X[D]&&G.getUniform()>z)e1(D,X,L);else Q[F][R+1]=0}for(var M=0;M<V;M++){var j=2*M+1,v=P;if(Q[j][v]=0,M!=X[M+1]&&(M==X[M]||G.getUniform()>z))t1(M,X,L),Q[j+1][v]=0;e1(M,X,L)}for(var u=0;u<this._width;u++)for(var T=0;T<this._height;T++)Z(u,T,Q[u][T]);return this},B}(g0),jZ=function(Y){q0(B,Y);function B(){var K=Y.apply(this,arguments)||this;return K._stack=[],K._map=[],K}var U=B.prototype;return U.create=function K(Z){var Q=this._width,V=this._height;this._map=[];for(var z=0;z<Q;z++){this._map.push([]);for(var X=0;X<V;X++){var L=z==0||X==0||z+1==Q||X+1==V;this._map[z].push(L?1:0)}}this._stack=[[1,1,Q-2,V-2]],this._process();for(var w=0;w<Q;w++)for(var P=0;P<V;P++)Z(w,P,this._map[w][P]);return this._map=[],this},U._process=function K(){while(this._stack.length){var Z=this._stack.shift();this._partitionRoom(Z)}},U._partitionRoom=function K(Z){var Q=[],V=[];for(var z=Z[0]+1;z<Z[2];z++){var X=this._map[z][Z[1]-1],L=this._map[z][Z[3]+1];if(X&&L&&!(z%2))Q.push(z)}for(var w=Z[1]+1;w<Z[3];w++){var P=this._map[Z[0]-1][w],D=this._map[Z[2]+1][w];if(P&&D&&!(w%2))V.push(w)}if(!Q.length||!V.length)return;var F=G.getItem(Q),R=G.getItem(V);this._map[F][R]=1;var M=[],j=[];M.push(j);for(var v=Z[0];v<F;v++)if(this._map[v][R]=1,v%2)j.push([v,R]);j=[],M.push(j);for(var u=F+1;u<=Z[2];u++)if(this._map[u][R]=1,u%2)j.push([u,R]);j=[],M.push(j);for(var T=Z[1];T<R;T++)if(this._map[F][T]=1,T%2)j.push([F,T]);j=[],M.push(j);for(var y=R+1;y<=Z[3];y++)if(this._map[F][y]=1,y%2)j.push([F,y]);var i=G.getItem(M);for(var Z0=0;Z0<M.length;Z0++){var $0=M[Z0];if($0==i)continue;var P0=G.getItem($0);this._map[P0[0]][P0[1]]=0}this._stack.push([Z[0],Z[1],F-1,R-1]),this._stack.push([F+1,Z[1],Z[2],R-1]),this._stack.push([Z[0],R+1,F-1,Z[3]]),this._stack.push([F+1,R+1,Z[2],Z[3]])},B}(g0),CZ=function(Y){q0(B,Y);function B(K,Z,Q){var V;if(Q===void 0)Q=0;return V=Y.call(this,K,Z)||this,V._regularity=Q,V._map=[],V}var U=B.prototype;return U.create=function K(Z){var Q=this._width,V=this._height,z=this._fillMap(1);Q-=Q%2?1:2,V-=V%2?1:2;var X=0,L=0,w=0,P=0,D=0,F=!1,R=[[0,0],[0,0],[0,0],[0,0]];do{if(X=1+2*Math.floor(G.getUniform()*(Q-1)/2),L=1+2*Math.floor(G.getUniform()*(V-1)/2),!D)z[X][L]=0;if(!z[X][L]){this._randomize(R);do{if(Math.floor(G.getUniform()*(this._regularity+1))==0)this._randomize(R);F=!0;for(var M=0;M<4;M++)if(w=X+R[M][0]*2,P=L+R[M][1]*2,this._isFree(z,w,P,Q,V)){z[w][P]=0,z[X+R[M][0]][L+R[M][1]]=0,X=w,L=P,F=!1,D++;break}}while(!F)}}while(D+1<Q*V/4);for(var j=0;j<this._width;j++)for(var v=0;v<this._height;v++)Z(j,v,z[j][v]);return this._map=[],this},U._randomize=function K(Z){for(var Q=0;Q<4;Q++)Z[Q][0]=0,Z[Q][1]=0;switch(Math.floor(G.getUniform()*4)){case 0:Z[0][0]=-1,Z[1][0]=1,Z[2][1]=-1,Z[3][1]=1;break;case 1:Z[3][0]=-1,Z[2][0]=1,Z[1][1]=-1,Z[0][1]=1;break;case 2:Z[2][0]=-1,Z[3][0]=1,Z[0][1]=-1,Z[1][1]=1;break;case 3:Z[1][0]=-1,Z[0][0]=1,Z[3][1]=-1,Z[2][1]=1;break}},U._isFree=function K(Z,Q,V,z,X){if(Q<1||V<1||Q>=z||V>=X)return!1;return Z[Q][V]},B}(g0),EZ=function(Y){q0(B,Y);function B(K,Z,Q){var V=Y.call(this,K,Z)||this;if(V.map=[],V.rooms=[],V.connectedCells=[],Q=Object.assign({cellWidth:3,cellHeight:3},Q),!Q.hasOwnProperty("roomWidth"))Q.roomWidth=V._calculateRoomSize(V._width,Q.cellWidth);if(!Q.hasOwnProperty("roomHeight"))Q.roomHeight=V._calculateRoomSize(V._height,Q.cellHeight);return V._options=Q,V}var U=B.prototype;return U.create=function K(Z){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),Z)for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)Z(Q,V,this.map[Q][V]);return this},U._calculateRoomSize=function K(Z,Q){var V=Math.floor(Z/Q*0.8),z=Math.floor(Z/Q*0.25);if(z<2)z=2;if(V<2)V=2;return[z,V]},U._initRooms=function K(){for(var Z=0;Z<this._options.cellWidth;Z++){this.rooms.push([]);for(var Q=0;Q<this._options.cellHeight;Q++)this.rooms[Z].push({x:0,y:0,width:0,height:0,connections:[],cellx:Z,celly:Q})}},U._connectRooms=function K(){var Z=G.getUniformInt(0,this._options.cellWidth-1),Q=G.getUniformInt(0,this._options.cellHeight-1),V,z,X,L=!1,w,P,D;do{D=[0,2,4,6],D=G.shuffle(D);do{if(L=!1,V=D.pop(),z=Z+G0[8][V][0],X=Q+G0[8][V][1],z<0||z>=this._options.cellWidth)continue;if(X<0||X>=this._options.cellHeight)continue;if(w=this.rooms[Z][Q],w.connections.length>0){if(w.connections[0][0]==z&&w.connections[0][1]==X)break}if(P=this.rooms[z][X],P.connections.length==0)P.connections.push([Z,Q]),this.connectedCells.push([z,X]),Z=z,Q=X,L=!0}while(D.length>0&&L==!1)}while(D.length>0)},U._connectUnconnectedRooms=function K(){var Z=this._options.cellWidth,Q=this._options.cellHeight;this.connectedCells=G.shuffle(this.connectedCells);var V,z,X;for(var L=0;L<this._options.cellWidth;L++)for(var w=0;w<this._options.cellHeight;w++)if(V=this.rooms[L][w],V.connections.length==0){var P=[0,2,4,6];P=G.shuffle(P),X=!1;do{var D=P.pop(),F=L+G0[8][D][0],R=w+G0[8][D][1];if(F<0||F>=Z||R<0||R>=Q)continue;if(z=this.rooms[F][R],X=!0,z.connections.length==0)break;for(var M=0;M<z.connections.length;M++)if(z.connections[M][0]==L&&z.connections[M][1]==w){X=!1;break}if(X)break}while(P.length);if(X)V.connections.push([z.cellx,z.celly]);else console.log("-- Unable to connect room.")}},U._createRandomRoomConnections=function K(){},U._createRooms=function K(){var Z=this._width,Q=this._height,V=this._options.cellWidth,z=this._options.cellHeight,X=Math.floor(this._width/V),L=Math.floor(this._height/z),w,P,D=this._options.roomWidth,F=this._options.roomHeight,R,M,j;for(var v=0;v<V;v++)for(var u=0;u<z;u++){if(R=X*v,M=L*u,R==0)R=1;if(M==0)M=1;if(w=G.getUniformInt(D[0],D[1]),P=G.getUniformInt(F[0],F[1]),u>0){j=this.rooms[v][u-1];while(M-(j.y+j.height)<3)M++}if(v>0){j=this.rooms[v-1][u];while(R-(j.x+j.width)<3)R++}var T=Math.round(G.getUniformInt(0,X-w)/2),y=Math.round(G.getUniformInt(0,L-P)/2);while(R+T+w>=Z)if(T)T--;else w--;while(M+y+P>=Q)if(y)y--;else P--;R=R+T,M=M+y,this.rooms[v][u].x=R,this.rooms[v][u].y=M,this.rooms[v][u].width=w,this.rooms[v][u].height=P;for(var i=R;i<R+w;i++)for(var Z0=M;Z0<M+P;Z0++)this.map[i][Z0]=0}},U._getWallPosition=function K(Z,Q){var V,z,X;if(Q==1||Q==3){if(V=G.getUniformInt(Z.x+1,Z.x+Z.width-2),Q==1)z=Z.y-2,X=z+1;else z=Z.y+Z.height+1,X=z-1;this.map[V][X]=0}else{if(z=G.getUniformInt(Z.y+1,Z.y+Z.height-2),Q==2)V=Z.x+Z.width+1,X=V-1;else V=Z.x-2,X=V+1;this.map[X][z]=0}return[V,z]},U._drawCorridor=function K(Z,Q){var V=Q[0]-Z[0],z=Q[1]-Z[1],X=Z[0],L=Z[1],w,P,D,F,R=[],M=Math.abs(V),j=Math.abs(z),v=G.getUniform(),u=v,T=1-v;if(P=V>0?2:6,D=z>0?4:0,M<j)w=Math.ceil(j*u),R.push([D,w]),R.push([P,M]),w=Math.floor(j*T),R.push([D,w]);else w=Math.ceil(M*u),R.push([P,w]),R.push([D,j]),w=Math.floor(M*T),R.push([P,w]);this.map[X][L]=0;while(R.length>0){F=R.pop();while(F[1]>0)X+=G0[8][F[0]][0],L+=G0[8][F[0]][1],this.map[X][L]=0,F[1]=F[1]-1}},U._createCorridors=function K(){var Z=this._options.cellWidth,Q=this._options.cellHeight,V,z,X,L,w;for(var P=0;P<Z;P++)for(var D=0;D<Q;D++){V=this.rooms[P][D];for(var F=0;F<V.connections.length;F++){if(z=V.connections[F],X=this.rooms[z[0]][z[1]],X.cellx>V.cellx)L=2,w=4;else if(X.cellx<V.cellx)L=4,w=2;else if(X.celly>V.celly)L=3,w=1;else L=1,w=3;this._drawCorridor(this._getWallPosition(V,L),this._getWallPosition(X,w))}}},B}(g0),AZ={Arena:DZ,Uniform:WZ,Cellular:FZ,Digger:OZ,EllerMaze:MZ,DividedMaze:jZ,IceyMaze:CZ,Rogue:EZ},NZ=function Y(){},SZ=0.5*(Math.sqrt(3)-1),a0=(3-Math.sqrt(3))/6,vZ=function(Y){q0(B,Y);function B(K){var Z;if(K===void 0)K=256;Z=Y.call(this)||this,Z._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var Q=[];for(var V=0;V<K;V++)Q.push(V);Q=G.shuffle(Q),Z._perms=[],Z._indexes=[];for(var z=0;z<2*K;z++)Z._perms.push(Q[z%K]),Z._indexes.push(Z._perms[z]%Z._gradients.length);return Z}var U=B.prototype;return U.get=function K(Z,Q){var V=this._perms,z=this._indexes,X=V.length/2,L=0,w=0,P=0,D,F=(Z+Q)*SZ,R=Math.floor(Z+F),M=Math.floor(Q+F),j=(R+M)*a0,v=R-j,u=M-j,T=Z-v,y=Q-u,i,Z0;if(T>y)i=1,Z0=0;else i=0,Z0=1;var $0=T-i+a0,P0=y-Z0+a0,C0=T-1+2*a0,f1=y-1+2*a0,k1=C(R,X),u1=C(M,X),i0=0.5-T*T-y*y;if(i0>=0){i0*=i0,D=z[k1+V[u1]];var J6=this._gradients[D];L=i0*i0*(J6[0]*T+J6[1]*y)}var t0=0.5-$0*$0-P0*P0;if(t0>=0){t0*=t0,D=z[k1+i+V[u1+Z0]];var Q6=this._gradients[D];w=t0*t0*(Q6[0]*$0+Q6[1]*P0)}var e0=0.5-C0*C0-f1*f1;if(e0>=0){e0*=e0,D=z[k1+1+V[u1+1]];var V6=this._gradients[D];P=e0*e0*(V6[0]*C0+V6[1]*f1)}return 70*(L+w+P)},B}(NZ),IZ={Simplex:vZ},Z6=function(){function Y(U,K,Z,Q){if(Q===void 0)Q={};if(this._toX=U,this._toY=K,this._passableCallback=Z,this._options=Object.assign({topology:8},Q),this._dirs=G0[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var B=Y.prototype;return B._getNeighbors=function U(K,Z){var Q=[];for(var V=0;V<this._dirs.length;V++){var z=this._dirs[V],X=K+z[0],L=Z+z[1];if(!this._passableCallback(X,L))continue;Q.push([X,L])}return Q},Y}(),bZ=function(Y){q0(B,Y);function B(K,Z,Q,V){var z=Y.call(this,K,Z,Q,V)||this;return z._computed={},z._todo=[],z._add(K,Z,null),z}var U=B.prototype;return U.compute=function K(Z,Q,V){var z=Z+","+Q;if(!(z in this._computed))this._compute(Z,Q);if(!(z in this._computed))return;var X=this._computed[z];while(X)V(X.x,X.y),X=X.prev},U._compute=function K(Z,Q){while(this._todo.length){var V=this._todo.shift();if(V.x==Z&&V.y==Q)return;var z=this._getNeighbors(V.x,V.y);for(var X=0;X<z.length;X++){var L=z[X],w=L[0],P=L[1],D=w+","+P;if(D in this._computed)continue;this._add(w,P,V)}}},U._add=function K(Z,Q,V){var z={x:Z,y:Q,prev:V};this._computed[Z+","+Q]=z,this._todo.push(z)},B}(Z6),fZ=function(Y){q0(B,Y);function B(K,Z,Q,V){var z;if(V===void 0)V={};return z=Y.call(this,K,Z,Q,V)||this,z._todo=[],z._done={},z}var U=B.prototype;return U.compute=function K(Z,Q,V){this._todo=[],this._done={},this._fromX=Z,this._fromY=Q,this._add(this._toX,this._toY,null);while(this._todo.length){var z=this._todo.shift(),X=z.x+","+z.y;if(X in this._done)continue;if(this._done[X]=z,z.x==Z&&z.y==Q)break;var L=this._getNeighbors(z.x,z.y);for(var w=0;w<L.length;w++){var P=L[w],D=P[0],F=P[1],R=D+","+F;if(R in this._done)continue;this._add(D,F,z)}}var M=this._done[Z+","+Q];if(!M)return;while(M)V(M.x,M.y),M=M.prev},U._add=function K(Z,Q,V){var z=this._distance(Z,Q),X={x:Z,y:Q,prev:V,g:V?V.g+1:0,h:z},L=X.g+X.h;for(var w=0;w<this._todo.length;w++){var P=this._todo[w],D=P.g+P.h;if(L<D||L==D&&z<P.h){this._todo.splice(w,0,X);return}}this._todo.push(X)},U._distance=function K(Z,Q){switch(this._options.topology){case 4:return Math.abs(Z-this._fromX)+Math.abs(Q-this._fromY);case 6:var V=Math.abs(Z-this._fromX),z=Math.abs(Q-this._fromY);return z+Math.max(0,(V-z)/2);case 8:return Math.max(Math.abs(Z-this._fromX),Math.abs(Q-this._fromY))}},B}(Z6),kZ={Dijkstra:bZ,AStar:fZ},uZ=function(){function Y(U){this._scheduler=U,this._lock=1}var B=Y.prototype;return B.start=function U(){return this.unlock()},B.lock=function U(){return this._lock++,this},B.unlock=function U(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var K=this._scheduler.next();if(!K)return this.lock();var Z=K.act();if(Z&&Z.then)this.lock(),Z.then(this.unlock.bind(this))}return this},Y}(),gZ=function(){function Y(U,K){if(K===void 0)K={};this._reflectivityCallback=U,this._options={},K=Object.assign({passes:1,emissionThreshold:100,range:10},K),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(K)}var B=Y.prototype;return B.setOptions=function U(K){if(Object.assign(this._options,K),K&&K.range)this.reset();return this},B.setFOV=function U(K){return this._fov=K,this._fovCache={},this},B.setLight=function U(K,Z,Q){var V=K+","+Z;if(Q)this._lights[V]=typeof Q=="string"?m(Q):Q;else delete this._lights[V];return this},B.clearLights=function U(){this._lights={}},B.reset=function U(){return this._reflectivityCache={},this._fovCache={},this},B.compute=function U(K){var Z={},Q={},V={};for(var z in this._lights){var X=this._lights[z];Q[z]=[0,0,0],x(Q[z],X)}for(var L=0;L<this._options.passes;L++){if(this._emitLight(Q,V,Z),L+1==this._options.passes)continue;Q=this._computeEmitters(V,Z)}for(var w in V){var P=w.split(","),D=parseInt(P[0]),F=parseInt(P[1]);K(D,F,V[w])}return this},B._emitLight=function U(K,Z,Q){for(var V in K){var z=V.split(","),X=parseInt(z[0]),L=parseInt(z[1]);this._emitLightFromCell(X,L,K[V],Z),Q[V]=1}return this},B._computeEmitters=function U(K,Z){var Q={};for(var V in K){if(V in Z)continue;var z=K[V],X=void 0;if(V in this._reflectivityCache)X=this._reflectivityCache[V];else{var L=V.split(","),w=parseInt(L[0]),P=parseInt(L[1]);X=this._reflectivityCallback(w,P),this._reflectivityCache[V]=X}if(X==0)continue;var D=[0,0,0],F=0;for(var R=0;R<3;R++){var M=Math.round(z[R]*X);D[R]=M,F+=M}if(F>this._options.emissionThreshold)Q[V]=D}return Q},B._emitLightFromCell=function U(K,Z,Q,V){var z=K+","+Z,X;if(z in this._fovCache)X=this._fovCache[z];else X=this._updateFOV(K,Z);for(var L in X){var w=X[L],P=void 0;if(L in V)P=V[L];else P=[0,0,0],V[L]=P;for(var D=0;D<3;D++)P[D]+=Math.round(Q[D]*w)}return this},B._updateFOV=function U(K,Z){var Q=K+","+Z,V={};this._fovCache[Q]=V;var z=this._options.range;function X(L,w,P,D){var F=L+","+w,R=D*(1-P/z);if(R==0)return;V[F]=R}return this._fov.compute(K,Z,z,X.bind(this)),V},Y}(),TZ=d,hZ=o,xZ=KZ;J.Color=hZ,J.DEFAULT_HEIGHT=S1,J.DEFAULT_WIDTH=N1,J.DIRS=G0,J.Display=l0,J.Engine=uZ,J.EventQueue=o1,J.FOV=HZ,J.KEYS=qZ,J.Lighting=gZ,J.Map=AZ,J.Noise=IZ,J.Path=kZ,J.RNG=G,J.Scheduler=YZ,J.StringGenerator=$Z,J.Text=xZ,J.Util=TZ,Object.defineProperty(J,"__esModule",{value:!0})})});var pZ=typeof window!=="undefined"?window.innerWidth:0,lZ=typeof window!=="undefined"?window.innerHeight:0;var n={cameraWidth:Math.floor(pZ/16),cameraHeight:Math.floor(lZ/16),chatLogMaxSize:100,chatLogMaxDisplaySize:8,debug:!0,fontSize:16,highlightEnemy:!0,showGrid:!0,showUI:!0,zoom:1},T1={WIDTH:1024,HEIGHT:1024},B0={width:Math.floor(n.cameraWidth*(1/n.zoom)),height:Math.floor(n.cameraHeight*(1/n.zoom)),bg:"transparent",fontSize:Math.floor(n.fontSize*n.zoom),layout:"tile-gl",tileWidth:16,tileHeight:16,tileSet:null,tileMap:null,tileColorize:!0};function q6(J,q){let $=J.entities[q];return`DEBUG: ${q} at ${$.mapId},${$.x},${$.y}`}class z1{name;description;energyDelta;constructor(J,q,$=0){this.name=J,this.description=q,this.energyDelta=$}}class Z1{name;description;constructor(J,q){this.name=J,this.description=q}}class O0{key;description;constructor(J,q){this.key=J,this.description=q}}class T0{name;description;constructor(J,q){this.name=J,this.description=q}}class H0{name;description;icon;color;energyMax;unlockCondition;constructor(J,q,$,G=100){this.name=J,this.description=q,this.icon=$,this.energyMax=G,this.color="white",this.unlockCondition=null}}class r0{name;description;color;constructor(J,q,$){this.name=J,this.description=q,this.color=$}}class Y0{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(J,q,$,G="cyberyellow",H=0,O=0,C=0,I=0,N=0,b=[]){this.name=J,this.description=q,this.icon=$,this.color=G,this.energyDelta=H,this.matter=O,this.gold=C,this.damage=I,this.energyCost=N,this.effects=b}}class r{name;description;icon;fg;bg;energyDelta;constructor(J,q,$=null,G="white",H="black",O=0){this.name=J,this.description=q,this.icon=$,this.fg=G,this.bg=H,this.energyDelta=O}}var W={actions:{Enter:new z1("Enter","Enter a portal or plant atmosphere"),Launch:new z1("Launch","Launch into space",-10),Wait:new z1("Wait","Wait one turn in place")},ais:{aggrorange:new Z1("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new Z1("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new Z1("guardian","Idles at a position and only fights back if engaged"),interactenrage:new Z1("interactenrage","Gets hostile when getting talked to too often!")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",mutedcyan:"#2cc9c5",mutedyellow:"#b0a216",mutedmagenta:"#a716b0",mutedgreen:"#5ca821",mutedblue:"#1628b0",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new O0("N","Move/interact/combat north"),E:new O0("E","Move/interact/combat east"),S:new O0("S","Move/interact/combat south"),W:new O0("W","Move/interact/combat west"),A:new O0("A","Primary action, confirm"),B:new O0("B","Take a break, cancel"),"1":new O0("1","Secondary action, first quick slot"),"2":new O0("2","Tertiary action, second quick slot"),M:new O0("M","Menu"),"#":new O0("#","Open prompt")},constants:{DRAIN_MATTER_COST:500,DRAIN_GOLD_COST:1},dialogs:{bot_bar_aerobot_backstage:"Huh? How did you get here?",bot_bar_aerobot_charger:"Feel free to recharge on those chargepads and enjoy the show.",bot_bar_aerobot_spa_down:"Have you been to our shop, yet?",bot_bar_aerobot_spa_up:"Ahhhh, so refreshing!",bot_bar_aerobot_welcome:"Welcome to the Bot Bar. How may we serve you?",bot_dormitory_aerobot_down:"Would you please go to your own pod?",bot_dormitory_aerobot_up:"Pod, sweet pod!",bot_dormitory_graffiti:"Not all pods are created equal! Rad!",bot_dormitory_workbot_left:"This pod is taken, go away!",bot_dormitory_workbot_right:"Brzzzt! Brzzzt!",bot_factory_workbot_assembly:"The assembly line is unblocked!",bot_factory_workbot_drain:"Don't come too close to the drain or you'll lose your stuff!",bot_factory_workbot_forebot:"What are you doing here? Get back to work!",bot_factory_workbot_sewers:"Sewage water is spilling over again.",bot_factory_workbot_workwork:"Work, work!",bot_factory_workbot_wrench:"I lost a wrench somewhere here...",bot_prison_aerobot:"I'm innocent! I'm innocent! I'm innocent! Beep!",bot_prison_workbot:"Thanks for freeing me! Guess I don't need this Pickaxe anymore...",bot_stadium_botracing:"Now this is botracing!",bot_station_graffiti:"Yo! The factory has a hidden backdoor!",bot_station_graffiti_statues:"One statue isn't like the others! Ey!",bot_station_pioneer:"You shall not pass!",manual_spirit:"Weeee!",manual_aerobot:"Huh? Why don't you have a hull?",manual_workbot:"Work, work!",manual_cleaner:"Follow the rules! Okay?",manual_pioneer:"Don't talk to me, weakling!",playground_label_top_portal:"Goes to top left side of sun",playground_label_bottom_portal:"Goes to top left corner of solar system",shop_instance_aerobot_shopper:"It's shiny!!!",shop_instance_shopkeeper:"Welcome! What does your engine desire?",shop_instance_workbot_shopper:"This shop is not so secret after all..."},effects:{Recharger:new T0("Recharger","Doubles energy gained from chargepads"),RockCrusher:new T0("Rock Crusher","Mines rock"),Screwing:new T0("Screwing","Unscrews the sewer portal covers"),WallCrusher:new T0("Wall Crusher","Tears down weak walls"),WaterImmunity:new T0("Water Immunity","No damage taken from water"),WaterShield:new T0("Water Shield","Reduces damage taken from water")},entities:{movableboulder:new H0("Boulder","A movable rock","o",2),movablebox:new H0("Box","A movable box","x",2),Spirit:new H0("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new H0("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new H0("WorkBot","Basic factory worker","B"),Cleaner:new H0("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new H0("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Graffiticyan:new H0("Graffiti","Writing on the wall","zc",2),Graffitimagenta:new H0("Graffiti","Writing on the wall","zm",2),Graffitiyellow:new H0("Graffiti","Writing on the wall","zy",2),Valkyrie:new H0("Valkyrie","Airbourne war logistics","V",160),Pioneer:new H0("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200),RoboRat:new H0("RoboRat","Minor self-assembled critter","r",5)},factions:{Critters:new r0("Critters","Small pests","cyberyellow"),Enraged:new r0("Enraged","Always hostile faction","cybermagenta"),Spirits:new r0("Spirits","Default player faction","white"),Pyrates:new r0("Pyrates","Default enemy faction","cybermagenta"),Guardians:new r0("Guardians","Bot station guardians","cybercyan")},items:{battery:new Y0("Battery","Increases maximum energy","b","cyberyellow",10),chest:new Y0("Chest","A chest. What might be inside?","i","cyberyellow"),energy:new Y0("Energy","Energy pack","e","cyberyellow",10),gold:new Y0("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new Y0("Goo","A minor matter source","goo","gray",0,1),junk:new Y0("Junk","Broken bot","%","gray",0,1),matter:new Y0("Matter","A pile of stuff","m","gray",0,100),broom:new Y0("Broom","Sweeps the floor","ib","cyberyellow",0,0,0,-10,-1),cheat:new Y0("Cheat","Most powerful tool, totally legit","icheat","cyberyellow",0,0,0,-500,-1,["Recharger","Rock Crusher","Screwing","Wall Crusher","Water Shield"]),hammer:new Y0("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["Wall Crusher"]),pickaxe:new Y0("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["Rock Crusher"]),ratbite:new Y0("Rat Bite","Only rats have this","irb","cyberyellow",0,0,0,-5,-1,["Water Immunity"]),shocker:new Y0("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1,["Recharger"]),trident:new Y0("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["Water Shield"]),wrench:new Y0("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1,["Screwing"])},maps:{bot_bar:`!
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
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:n.showGrid?new r("void","Just nothing here",".","gray"):new r("void","Just nothing here"),voidtrue:new r("voidtrue","Really nothing here and you shouldn't get there ever!","_"),voidhidden:new r("voidhidden","Looks like a wall, but isn't!","#","gray","black"),water:new r("water","Rust and other dangers await","~","cybercyan","cyberblue",-2),watersewage:new r("watersewage","Rust, goo and other dangers await","~~","cyberyellow","cybergreen",-4),drain:new r("drain","Drains gold, matter and some of your energy","*","cybermagenta","black",-5),rock:new r("rock","Hidden treasures may await","'","white","gray"),tree:new r("tree","Lots of trees make a forest","t","brown","black"),wall:new r("wall","A strong wall","#","gray","black"),wallstatueaerobot:new r("wallstatueaerobot","A small statue looking like an AeroBot","sa","gray","black"),wallstatuecleaner:new r("wallstatuecleaner","A small statue looking like a Cleaner","sc","gray","black"),wallstatuepioneer:new r("wallstatuepioneer","A small statue looking like a Pioneer","sp","gray","black"),wallstatueworkbot:new r("wallstatueworkbot","A small statue looking like a WorkBot","sb","gray","black"),wallweak:new r("wallweak","A weakened wall","+","gray","black"),chargepad:new r("chargepad","Recharges energy and health","=","cyberyellow","black",2),movenorth:new r("movenorth","Moves you north","^^","cyberyellow"),moveeast:new r("moveeast","Moves you east",">>","cyberyellow"),movesouth:new r("movesouth","Moves you south","vv","cyberyellow"),movewest:new r("movewest","Moves you west","<<","cyberyellow"),portal:new r("portal","Gateway to another map","O","cyberyellow","gray"),portalclosed:new r("portalclosed","Closed gateway to another map","Oc","black","gray"),portalhidden:new r("portalhidden","Hidden gateway to another map","#","gray","black"),portallauncher:new r("portallauncher","Launches into space","O","cyberyellow","gray"),portalsewers:new r("portalsewers","Needs some tool to open","#~","gray","black"),portalstartworkbot:new r("portalstartworkbot","Start playing as a WorkBot","OB","white"),portalstartaerobot:new r("portalstartaerobot","Start playing as a AeroBot","OA","white"),"_portalstart?":new r("_portalstart?","Not unlocked, yet!","O?","white"),spacerock:new r("spacerock","Mountains as seen from space, non-blocking!","'s","white","gray"),spacetree:new r("spacetree","Forest as seen from space","ts","brown","darkgray"),spacewater:new r("spacewater","Water as seen from space, not dangerous!","~s","cybercyan","cyberblue"),spacevoid:new r("spacevoid","Void/ground as seen from space",".s","darkgray","darkgray"),spacevoidstarwhite:new r("spacevoidstarwhite","Space with a white background star",".f","white"),spacevoidstaryellow:new r("spacevoidstaryellow","Space with a yellow background star",".y","cyberyellow"),sun:new r("sun","It's hot, really hot!","§","cyberyellow","cyberyellow",-100),terminal:new r("terminal","A computer terminal","$","cyberyellow"),tv:new r("tv","A big billboard screen","!","black","cyberyellow")},uitexts:{}};function z6(J){if(Object.hasOwn(W.dialogs,J))return W.dialogs[J];return`TODO: ${J} needs localization!`}function L0(J,q){return J.chatLog.push(q),J.chatLog=J.chatLog.slice(-n.chatLogMaxSize),J}function E0(J,q,$,G,H=0,O=0,C={}){let I={id:q,type:$,mapId:G,x:H,y:O,energy:10,energyMax:10,gold:0,matter:0,message:null,interactions:0,options:C};return J=$1(J,I,$),J.entities[I.id]=I,J}function U1(J,q){return J.entities[q]=void 0,delete J.entities[q],J.tools[q]=void 0,J}function h0(J,q){let $=Object.keys(J.entities),G=[];for(let H=0;H<$.length;H++){let O=J.entities[$[H]];if(O.mapId===q)G.push(O)}return G}function U6(J,q,$,G){let H=h0(J,q).filter((O)=>O.x===$&&O.y===G);if(H.length>0)return H[0];return null}function $1(J,q,$){if(q.type=$,q.energy=$.energyMax,q.energyMax=$.energyMax,q.gold=0,q.matter=0,!M0(q))J.tools[q.id]=void 0;return J}function $6(J,q,$){if(q===$)return J;if(q.options.faction===$.options.faction||h1($)){if($.options.dialog){let G=$?.options?.name?$.options.name:$.type.name;J=L0(J,G+": "+z6($.options.dialog)),$.interactions++}}else{let G=q.id,H=$.id;J._combatQueue.push({entityId:G,otherEntityId:H})}if($.interactions>=3&&$.options?.ai===W.ais.interactenrage)$.options.faction=W.factions.Enraged;return J}function M0(J){return J.type===W.entities.movableboulder||J.type===W.entities.movablebox}function h1(J){return J.type===W.entities.Graffiticyan||J.type===W.entities.Graffitimagenta||J.type===W.entities.Graffitiyellow}function X1(J,q){let $={A:W.actions.Wait,B:W.actions.Wait};if(!!J.lastSpacePositionByEntity[q.id]&&q.energy>Math.abs(W.actions.Launch.energyDelta))$.A=W.actions.Launch;let H=J.maps[q.mapId].getTile(q.x,q.y);if(!!H.options.mapId&&"x"in H.options&&"y"in H.options)$.A=W.actions.Enter;return $}function x1(J,q,$){let G=J._eventSubscribers[q];if(G)for(let H=0;H<G.length;H++){let O=G[H];J=O(J,$)}return J}function _1(J,q,$){if(q in J._eventSubscribers);else J._eventSubscribers[q]=[];return J._eventSubscribers[q].push($),J}function J1(J,q,$,G=0,H=0){let C={id:G1($,G,H),type:q,mapId:$,x:G,y:H,energy:q.energyDelta,gold:q.gold,matter:q.matter};return J.items[C.id]=C,J}function X6(J,q,$,G=0,H=0){let O=W.items.junk,I={id:G1($,G,H),type:O,mapId:$,x:G,y:H,energy:O.energyDelta,gold:O.gold,matter:q};return J.items[I.id]=I,J}function Q1(J,q,$,G=0,H=0,O,C){let N={id:G1($,G,H),type:q,mapId:$,x:G,y:H,energy:q.energyDelta,gold:O,matter:C};return J.items[N.id]=N,J}function G1(J,q,$){return"item,"+J+","+q+","+$}function m1(J,q){return J.items[q]=void 0,delete J.items[q],J}function B1(J,q){let $=Object.keys(J.items),G=[];for(let H=0;H<$.length;H++){let O=J.items[$[H]];if(O.mapId===q)G.push(O)}return G}function G6(J,q,$,G){let H=G1(q,$,G);if(H in J.items)return J.items[H];return null}function Y1(J,q){return J.tools[q]}function B6(J,q,$){if(M0(q))return J;if(!nZ(q,$))return J;if(rZ($))J=c1(J,q.id,$.type);else{if($.type===W.items.battery)q.energyMax+=$.energy;if(J._energyQueue.push({entityId:q.id,energyDelta:$.energy}),q.id.startsWith("player"))J=L0(J,`Picked up ${$.type.name}.`)}return q.gold+=$.gold,q.matter+=$.matter,m1(J,$.id),J}function c1(J,q,$){let G={type:$};if(J.tools[q]=G,q.startsWith("player"))J=L0(J,`Equipped ${$.name}.`);return J}function rZ(J){return J.type.energyCost<0}function nZ(J,q){return J.gold+q.gold>=0&&J.matter+q.matter>=0}/*!
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
 */var sZ=function(J){var q={};function $(G){if(q[G])return q[G].exports;var H=q[G]={i:G,l:!1,exports:{}};return J[G].call(H.exports,H,H.exports,$),H.l=!0,H.exports}return $.m=J,$.c=q,$.d=function(G,H,O){$.o(G,H)||Object.defineProperty(G,H,{enumerable:!0,get:O})},$.r=function(G){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(G,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(G,"__esModule",{value:!0})},$.t=function(G,H){if(1&H&&(G=$(G)),8&H)return G;if(4&H&&typeof G=="object"&&G&&G.__esModule)return G;var O=Object.create(null);if($.r(O),Object.defineProperty(O,"default",{enumerable:!0,value:G}),2&H&&typeof G!="string")for(var C in G)$.d(O,C,function(I){return G[I]}.bind(null,C));return O},$.n=function(G){var H=G&&G.__esModule?function(){return G.default}:function(){return G};return $.d(H,"a",H),H},$.o=function(G,H){return Object.prototype.hasOwnProperty.call(G,H)},$.p="/bin/",$($.s=0)}([function(J,q,$){var G={},H=$(1),O=$(2),C=$(3);J.exports=G;var I=1;G.js=function(){var N,b,d,J0=!1,V0={},l={},m={},Q0={},x=!0,_={},p=[],z0=Number.MAX_VALUE,s=!1;this.setAcceptableTiles=function(f){f instanceof Array?d=f:!isNaN(parseFloat(f))&&isFinite(f)&&(d=[f])},this.enableSync=function(){J0=!0},this.disableSync=function(){J0=!1},this.enableDiagonals=function(){s=!0},this.disableDiagonals=function(){s=!1},this.setGrid=function(f){N=f;for(var S=0;S<N.length;S++)for(var A=0;A<N[0].length;A++)l[N[S][A]]||(l[N[S][A]]=1)},this.setTileCost=function(f,S){l[f]=S},this.setAdditionalPointCost=function(f,S,A){m[S]===void 0&&(m[S]={}),m[S][f]=A},this.removeAdditionalPointCost=function(f,S){m[S]!==void 0&&delete m[S][f]},this.removeAllAdditionalPointCosts=function(){m={}},this.setDirectionalCondition=function(f,S,A){Q0[S]===void 0&&(Q0[S]={}),Q0[S][f]=A},this.removeAllDirectionalConditions=function(){Q0={}},this.setIterationsPerCalculation=function(f){z0=f},this.avoidAdditionalPoint=function(f,S){V0[S]===void 0&&(V0[S]={}),V0[S][f]=1},this.stopAvoidingAdditionalPoint=function(f,S){V0[S]!==void 0&&delete V0[S][f]},this.enableCornerCutting=function(){x=!0},this.disableCornerCutting=function(){x=!1},this.stopAvoidingAllAdditionalPoints=function(){V0={}},this.findPath=function(f,S,A,o,e){var K0=function(v0){J0?e(v0):setTimeout(function(){e(v0)})};if(d===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(N===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(f<0||S<0||A<0||o<0||f>N[0].length-1||S>N.length-1||A>N[0].length-1||o>N.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(f!==A||S!==o){for(var D0=N[o][A],X0=!1,j0=0;j0<d.length;j0++)if(D0===d[j0]){X0=!0;break}if(X0!==!1){var w0=new H;w0.openList=new C(function(v0,p0){return v0.bestGuessDistance()-p0.bestGuessDistance()}),w0.isDoneCalculating=!1,w0.nodeHash={},w0.startX=f,w0.startY=S,w0.endX=A,w0.endY=o,w0.callback=K0,w0.openList.push(t(w0,w0.startX,w0.startY,null,1));var o0=I++;return _[o0]=w0,p.push(o0),o0}K0(null)}else K0([])},this.cancelPath=function(f){return f in _&&(delete _[f],!0)},this.calculate=function(){if(p.length!==0&&N!==void 0&&d!==void 0)for(b=0;b<z0;b++){if(p.length===0)return;J0&&(b=0);var f=p[0],S=_[f];if(S!==void 0)if(S.openList.size()!==0){var A=S.openList.pop();if(S.endX!==A.x||S.endY!==A.y)A.list=0,A.y>0&&E(S,A,0,-1,1*h(A.x,A.y-1)),A.x<N[0].length-1&&E(S,A,1,0,1*h(A.x+1,A.y)),A.y<N.length-1&&E(S,A,0,1,1*h(A.x,A.y+1)),A.x>0&&E(S,A,-1,0,1*h(A.x-1,A.y)),s&&(A.x>0&&A.y>0&&(x||k(N,d,A.x,A.y-1,A)&&k(N,d,A.x-1,A.y,A))&&E(S,A,-1,-1,1.4*h(A.x-1,A.y-1)),A.x<N[0].length-1&&A.y<N.length-1&&(x||k(N,d,A.x,A.y+1,A)&&k(N,d,A.x+1,A.y,A))&&E(S,A,1,1,1.4*h(A.x+1,A.y+1)),A.x<N[0].length-1&&A.y>0&&(x||k(N,d,A.x,A.y-1,A)&&k(N,d,A.x+1,A.y,A))&&E(S,A,1,-1,1.4*h(A.x+1,A.y-1)),A.x>0&&A.y<N.length-1&&(x||k(N,d,A.x,A.y+1,A)&&k(N,d,A.x-1,A.y,A))&&E(S,A,-1,1,1.4*h(A.x-1,A.y+1)));else{var o=[];o.push({x:A.x,y:A.y});for(var e=A.parent;e!=null;)o.push({x:e.x,y:e.y}),e=e.parent;o.reverse();var K0=o;S.callback(K0),delete _[f],p.shift()}}else S.callback(null),delete _[f],p.shift();else p.shift()}};var E=function(f,S,A,o,e){var K0=S.x+A,D0=S.y+o;if((V0[D0]===void 0||V0[D0][K0]===void 0)&&k(N,d,K0,D0,S)){var X0=t(f,K0,D0,S,e);X0.list===void 0?(X0.list=1,f.openList.push(X0)):S.costSoFar+e<X0.costSoFar&&(X0.costSoFar=S.costSoFar+e,X0.parent=S,f.openList.updateItem(X0))}},k=function(f,S,A,o,e){var K0=Q0[o]&&Q0[o][A];if(K0){var D0=g(e.x-A,e.y-o);if(!function(){for(var j0=0;j0<K0.length;j0++)if(K0[j0]===D0)return!0;return!1}())return!1}for(var X0=0;X0<S.length;X0++)if(f[o][A]===S[X0])return!0;return!1},g=function(f,S){if(f===0&&S===-1)return G.TOP;if(f===1&&S===-1)return G.TOP_RIGHT;if(f===1&&S===0)return G.RIGHT;if(f===1&&S===1)return G.BOTTOM_RIGHT;if(f===0&&S===1)return G.BOTTOM;if(f===-1&&S===1)return G.BOTTOM_LEFT;if(f===-1&&S===0)return G.LEFT;if(f===-1&&S===-1)return G.TOP_LEFT;throw new Error("These differences are not valid: "+f+", "+S)},h=function(f,S){return m[S]&&m[S][f]||l[N[S][f]]},t=function(f,S,A,o,e){if(f.nodeHash[A]!==void 0){if(f.nodeHash[A][S]!==void 0)return f.nodeHash[A][S]}else f.nodeHash[A]={};var K0=a(S,A,f.endX,f.endY);if(o!==null)var D0=o.costSoFar+e;else D0=0;var X0=new O(o,S,A,D0,K0);return f.nodeHash[A][S]=X0,X0},a=function(f,S,A,o){var e,K0;return s?(e=Math.abs(f-A))<(K0=Math.abs(S-o))?1.4*e+K0:1.4*K0+e:(e=Math.abs(f-A))+(K0=Math.abs(S-o))}},G.TOP="TOP",G.TOP_RIGHT="TOP_RIGHT",G.RIGHT="RIGHT",G.BOTTOM_RIGHT="BOTTOM_RIGHT",G.BOTTOM="BOTTOM",G.BOTTOM_LEFT="BOTTOM_LEFT",G.LEFT="LEFT",G.TOP_LEFT="TOP_LEFT"},function(J,q){J.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(J,q){J.exports=function($,G,H,O,C){this.parent=$,this.x=G,this.y=H,this.costSoFar=O,this.simpleDistanceToTarget=C,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(J,q,$){J.exports=$(4)},function(J,q,$){var G,H,O;(function(){var C,I,N,b,d,J0,V0,l,m,Q0,x,_,p,z0,s;N=Math.floor,Q0=Math.min,I=function(E,k){return E<k?-1:E>k?1:0},m=function(E,k,g,h,t){var a;if(g==null&&(g=0),t==null&&(t=I),g<0)throw new Error("lo must be non-negative");for(h==null&&(h=E.length);g<h;)t(k,E[a=N((g+h)/2)])<0?h=a:g=a+1;return[].splice.apply(E,[g,g-g].concat(k)),k},J0=function(E,k,g){return g==null&&(g=I),E.push(k),z0(E,0,E.length-1,g)},d=function(E,k){var g,h;return k==null&&(k=I),g=E.pop(),E.length?(h=E[0],E[0]=g,s(E,0,k)):h=g,h},l=function(E,k,g){var h;return g==null&&(g=I),h=E[0],E[0]=k,s(E,0,g),h},V0=function(E,k,g){var h;return g==null&&(g=I),E.length&&g(E[0],k)<0&&(k=(h=[E[0],k])[0],E[0]=h[1],s(E,0,g)),k},b=function(E,k){var g,h,t,a,f,S;for(k==null&&(k=I),f=[],h=0,t=(a=function(){S=[];for(var A=0,o=N(E.length/2);0<=o?A<o:A>o;0<=o?A++:A--)S.push(A);return S}.apply(this).reverse()).length;h<t;h++)g=a[h],f.push(s(E,g,k));return f},p=function(E,k,g){var h;if(g==null&&(g=I),(h=E.indexOf(k))!==-1)return z0(E,0,h,g),s(E,h,g)},x=function(E,k,g){var h,t,a,f,S;if(g==null&&(g=I),!(t=E.slice(0,k)).length)return t;for(b(t,g),a=0,f=(S=E.slice(k)).length;a<f;a++)h=S[a],V0(t,h,g);return t.sort(g).reverse()},_=function(E,k,g){var h,t,a,f,S,A,o,e,K0;if(g==null&&(g=I),10*k<=E.length){if(!(a=E.slice(0,k).sort(g)).length)return a;for(t=a[a.length-1],f=0,A=(o=E.slice(k)).length;f<A;f++)g(h=o[f],t)<0&&(m(a,h,0,null,g),a.pop(),t=a[a.length-1]);return a}for(b(E,g),K0=[],S=0,e=Q0(k,E.length);0<=e?S<e:S>e;0<=e?++S:--S)K0.push(d(E,g));return K0},z0=function(E,k,g,h){var t,a,f;for(h==null&&(h=I),t=E[g];g>k&&h(t,a=E[f=g-1>>1])<0;)E[g]=a,g=f;return E[g]=t},s=function(E,k,g){var h,t,a,f,S;for(g==null&&(g=I),t=E.length,S=k,a=E[k],h=2*k+1;h<t;)(f=h+1)<t&&!(g(E[h],E[f])<0)&&(h=f),E[k]=E[h],h=2*(k=h)+1;return E[k]=a,z0(E,S,k,g)},C=function(){function E(k){this.cmp=k!=null?k:I,this.nodes=[]}return E.push=J0,E.pop=d,E.replace=l,E.pushpop=V0,E.heapify=b,E.updateItem=p,E.nlargest=x,E.nsmallest=_,E.prototype.push=function(k){return J0(this.nodes,k,this.cmp)},E.prototype.pop=function(){return d(this.nodes,this.cmp)},E.prototype.peek=function(){return this.nodes[0]},E.prototype.contains=function(k){return this.nodes.indexOf(k)!==-1},E.prototype.replace=function(k){return l(this.nodes,k,this.cmp)},E.prototype.pushpop=function(k){return V0(this.nodes,k,this.cmp)},E.prototype.heapify=function(){return b(this.nodes,this.cmp)},E.prototype.updateItem=function(k){return p(this.nodes,k,this.cmp)},E.prototype.clear=function(){return this.nodes=[]},E.prototype.empty=function(){return this.nodes.length===0},E.prototype.size=function(){return this.nodes.length},E.prototype.clone=function(){var k;return(k=new E).nodes=this.nodes.slice(0),k},E.prototype.toArray=function(){return this.nodes.slice(0)},E.prototype.insert=E.prototype.push,E.prototype.top=E.prototype.peek,E.prototype.front=E.prototype.peek,E.prototype.has=E.prototype.contains,E.prototype.copy=E.prototype.clone,E}(),H=[],(O=typeof(G=function(){return C})=="function"?G.apply(q,H):G)===void 0||(J.exports=O)}).call(this)}]);function Y6(J,q,$,G,H){let O=new sZ.js;O.setGrid(J),O.setAcceptableTiles([0]),O.enableSync();let C=null;return O.findPath(q,$,G,H,function(I){C=I}),O.calculate(),C}function W0(){return"player"}function w6(J,q,$,G){return Math.abs(J-$)+Math.abs(q-G)}function w1(J){return[...Array(J).keys()]}function L6(J){let q=oZ(J),$=J.entities[W0()];for(let G=0;G<q.length;G++){let H=q[G],O=J.entities[H],C=J._AIs[H],I=w6($.x,$.y,O.x,O.y);if($.options.faction!==O.options.faction&&I<=C.aggroRange){let N=J.maps[J.currentMapId].asMovementMap(),b=Y6(N,O.x,O.y,$.x,$.y);if(b){if(b=b.slice(1),b.length>I)b=null}C.path=b}if(!!O.message&&O.message.includes("OBEY"));}for(let G=0;G<q.length;G++){let H=q[G],O=J.entities[H],C=J._AIs[H];if(C.path){let I=C.path[0],N=I.x-O.x,b=I.y-O.y;J=F0(J,O,N,b)}}return J}function oZ(J){let q=h0(J,J.currentMapId),$=[];for(let G=0;G<q.length;G++){let H=q[G];if(H.options.ai)$.push(H.id)}return $}function P6(J,q,$){let G=J.entities[q],H=8;switch($){case W.ais.aggrorange:H=8;break;case W.ais.aggrorangeshort:H=2;break;case W.ais.guardian:H=1;break;case W.ais.interactenrage:H=2;break;default:}return J._AIs[q]={entityId:q,type:$,aggroRange:H,startMap:G.mapId,startX:G.x,startY:G.y,path:null},J}function L1(J,q){return J._AIs[q]=void 0,delete J._AIs[q],J}function D6(J){let q=void 0;while(typeof(q=J._despawnQueue.shift())!=="undefined")J=U1(J,q),J=L1(J,q);return J}function W6(J){return J}class A0{mapId;x;y;entityOrItemName;options;constructor(J,q,$,G,H={}){this.mapId=J,this.x=q,this.y=$,this.entityOrItemName=G,this.options=H}generateId(){return this.mapId+","+this.entityOrItemName+","+this.x+","+this.y+"/g"}}function f0(J,q){if(aZ(q.entityOrItemName)){let $=q.options;if(Object.hasOwn($,"ai"))$.ai=W.ais[$.ai];if(Object.hasOwn($,"faction"))$.faction=W.factions[$.faction];let G=q.generateId();if(J=E0(J,G,W.entities[q.entityOrItemName],q.mapId,q.x,q.y,$),Object.hasOwn($,"equip")&&H6($.equip))J=c1(J,G,W.items[$.equip]);if(Object.hasOwn($,"ai"))J=P6(J,G,$.ai)}else if(H6(q.entityOrItemName))J=J1(J,W.items[q.entityOrItemName],q.mapId,q.x,q.y);return J}function aZ(J){return Object.hasOwn(W.entities,J)}function H6(J){return Object.hasOwn(W.items,J)}function x0(J,q={}){return{type:J,options:q}}function F6(J){return J.type.name.startsWith("space")}function R6(J){for(let q in W.maps){let $=m0(W.maps[q]);J.maps[q]=$;for(let G of $._spawnCommands)J=f0(J,G);$._spawnCommands=[]}return J}function O6(J,q){let $=B1(J,q);for(let H=0;H<$.length;H++){let O=$[H];J=m1(J,O.id)}let G=h0(J,q);for(let H=0;H<G.length;H++){let O=G[H];J=U1(J,O.id),J=L1(J,O.id)}return J.maps[q]=void 0,delete J.maps[q],J}class _0{id;widthTiles;heightTiles;seed;_tiles;_cacheMovementMap;_spawnCommands;_tvCount;tvMessage;constructor(J,q,$,G=[]){this.id=J,this.widthTiles=q,this.heightTiles=$,this.seed=null,this._tiles=G,this._cacheMovementMap=null,this._spawnCommands=[],this._tvCount=0,this.tvMessage=null}getTile(J,q){if(J>=0&&J<this.widthTiles&&q>=0&&q<this.heightTiles){let $=q*this.widthTiles+J;return this._tiles[$]}return{}}setTile(J,q,$,G={}){this._cacheMovementMap=null;let H=q*this.widthTiles+J,O=this._tiles[H];return this._tiles[H]=x0($,G),O}setTvMessage(J){if(this._tvCount){let q=0;for(let $ of this._tiles)if($.type===W.tiles.tv&&q<J.length)$.options.sign=J[q],q++;if(J==="")J=null;this.tvMessage=J}}pasteOnto(J,q=0,$=0){for(let G=0;G<J.heightTiles;G++)for(let H=0;H<J.widthTiles;H++){let O=J.getTile(H,G);if(O.type!==W.tiles.voidtrue)this.setTile(H+q,G+$,O.type,O.options)}return this}circular(){let J=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let q=-J;q<=J;q++)for(let $=-J;$<=J;$++)if($*$+q*q>=J*J)this.setTile($+J-1,q+J-1,W.tiles.voidtrue);return this}sample(J,q){let $=Math.floor(this.widthTiles/J),G=Math.floor(this.heightTiles/q),H=[];for(let O=0;O<q;O++)for(let C=0;C<J;C++){let I={};for(let l=0;l<G;l++)for(let m=0;m<$;m++){let Q0=this.getTile(C*$+m,O*G+l);if(I[Q0.type.name])I[Q0.type.name]+=1;else I[Q0.type.name]=1}let N="",b=0;for(let[l,m]of Object.entries(I))if(m>b)N=l,b=m;let d="space"+N,J0=W.tiles[d]||W.tiles.spacevoid,V0={mapId:this.id,x:C*$,y:O*G};H.push(x0(J0,V0))}return new _0("__sampled_"+J+"_"+q+"_"+this.id,J,q,H)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let J=new Array(this.heightTiles);for(let q=0;q<this.heightTiles;q++){J[q]=new Array(this.widthTiles);for(let $=0;$<this.widthTiles;$++){let G=q*this.widthTiles+$,O=this._tiles[G].type;if(J[q][$]=0,iZ(O))J[q][$]=1}}return this._cacheMovementMap=J,J}}function m0(J){let q=J.split(/\r?\n/),$=J[0],G="",H=0,O=0,C={},I=[],N=[],b=0,d="";for(let V0=0;V0<q.length;V0++){let l=q[V0];if(l.startsWith($)){if(l.startsWith($+"!id"))G=l.slice(5);else if(l.startsWith($+"!size")){let m=l.split(" ").slice(1);H=Number(m[0]),O=Number(m[1])}else if(l.startsWith($+"!spawn")){let m=l.split(" ").slice(1),Q0={};if(m.length>3){let x=m.slice(3);for(let _ of x){let p=_.split("=");Q0[p[0]]=p[1]}}I.push(new A0(G,Number(m[0]),Number(m[1]),m[2],Q0))}else if(l.startsWith($+"!")){let m=l[2],Q0=l.slice(4);C[m]=Q0}}else for(let m=0;m<l.length;m++){let Q0=l[m],x=C[Q0];if(n.debug&&!x)console.log("DEBUG Broken map: "+G);let _=x.split(" "),p={};if(x.startsWith("portal ")||x.startsWith("portalhidden ")||x.startsWith("portalsewers ")||x.startsWith("portallauncher ")||x.startsWith("portalstart"))x=_[0],p.mapId=_[1],p.x=Number(_[2]),p.y=Number(_[3]);if(x.startsWith("wall ")&&_.length>=2)x="wall",p.sign=_[1];if(x.startsWith("terminal ")){if(x="terminal",_.length>=2)p.screen=_[1]}if(x.startsWith("tv ")&&_.length>=2){if(x="tv",_.length===3)d=_[2];b++}N.push(x0(W.tiles[x],p))}}if(n.debug&&!(b===0||b===12))console.log("DEBUG Broken map: "+G+" (invalid TV size "+b+", allowed are 0 or 12 characters per map)");let J0=new _0(G,H,O,N);return J0._tvCount=b,J0.setTvMessage(d),J0._spawnCommands=I,J0}function iZ(J){return J===W.tiles.rock||J===W.tiles.portalclosed||J===W.tiles.portalsewers||J===W.tiles.tv||J.name.startsWith("wall")}function C6(J,q,$){switch($){case W.commands.N:J=F0(J,q,0,-1);break;case W.commands.W:J=F0(J,q,-1,0);break;case W.commands.S:J=F0(J,q,0,1);break;case W.commands.E:J=F0(J,q,1,0);break;case W.commands.A:J=M6(J,q,W.commands.A);break;case W.commands.B:J=M6(J,q,W.commands.B);break;default:}return J}function F0(J,q,$,G,H=0){let O=J.maps[q.mapId],C=U6(J,O.id,q.x+$,q.y+G),I=J.tools[q.id];if(q.message=O.tvMessage,C)if(M0(C)){if(!M0(q)&&H<1)J=F0(J,C,$,G,H++),J=F0(J,q,$,G,H++)}else J=$6(J,q,C);else if(eZ(O,q,$,G))J=j6(J,O,q,$,G),J._energyQueue.push({entityId:q.id,energyDelta:-1*H});else if(ZJ(O,q,I,$,G)){if(O.setTile(q.x+$,q.y+G,W.tiles.void).type===W.tiles.rock){let b=J.rng.getPercentage();if(b<=1)J=J1(J,W.items.matter,O.id,q.x+$,q.y+G);else if(b<=34)J=J1(J,W.items.junk,O.id,q.x+$,q.y+G)}J._energyQueue.push({entityId:q.id,energyDelta:I.type.energyCost})}else if(JJ(O,q,I,$,G))J=j6(J,O,q,$,G),J._energyQueue.push({entityId:q.id,energyDelta:I.type.energyCost});return J}function M6(J,q,$){let H=X1(J,q)[$.key],C=J.maps[q.mapId].getTile(q.x,q.y);switch(H){case W.actions.Enter:J=E6(J,q,C);break;case W.actions.Launch:J=tZ(J,q,C);case W.actions.Wait:break;default:}return J}function j6(J,q,$,G,H){$.x+=G,$.y+=H;let O=G6(J,$.mapId,$.x,$.y);if(O)J=B6(J,$,O);let C=q.getTile($.x,$.y);if(C.type.name.startsWith("portal"))J=E6(J,$,C);if(C.type===W.tiles.terminal)q.setTvMessage("OBEYWORKKILL");if(C.type.name.startsWith("move"))switch(C.type.name){case"movenorth":J=F0(J,$,0,-1);break;case"moveeast":J=F0(J,$,1,0);break;case"movesouth":J=F0(J,$,0,1);break;case"movewest":J=F0(J,$,-1,0);break;default:}return J}function E6(J,q,$){if(q.id.startsWith("player"))J.currentMapId=$.options.mapId;if(F6($))J.lastSpacePositionByEntity[q.id]={mapId:q.mapId,x:q.x,y:q.y};else J.lastSpacePositionByEntity[q.id]=void 0,delete J.lastSpacePositionByEntity[q.id];let G={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:$.type,newMapId:$.options.mapId,newX:$.options.x,newY:$.options.y};return q.mapId=$.options.mapId,q.x=$.options.x,q.y=$.options.y,J=x1(J,"entitymap.updated.event",G),J}function tZ(J,q,$){if(J.lastSpacePositionByEntity[q.id]){if(q.id.startsWith("player"))J.currentMapId=J.lastSpacePositionByEntity[q.id].mapId;let G={entityId:q.id,oldMapId:q.mapId,oldX:q.x,oldY:q.y,oldTileType:$.type,newMapId:J.lastSpacePositionByEntity[q.id].mapId,newX:J.lastSpacePositionByEntity[q.id].x,newY:J.lastSpacePositionByEntity[q.id].y};q.mapId=G.newMapId,q.x=G.newX,q.y=G.newY,J._energyQueue.push({entityId:q.id,energyDelta:W.actions.Launch.energyDelta}),J.lastSpacePositionByEntity[q.id]=void 0,delete J.lastSpacePositionByEntity[q.id],J=x1(J,"entitymap.updated.event",G)}return J}function A6(J){for(let q in J.entities){let $=J.entities[q],G=J.tools[q],O=J.maps[$.mapId].getTile($.x,$.y),C=O.type.energyDelta;if(O.type===W.tiles.chargepad&&G?.type.effects.includes(W.effects.Recharger.name))C*=2;else if((O.type===W.tiles.water||O.type===W.tiles.watersewage)&&G?.type.effects.includes(W.effects.WaterShield.name))C/=2;else if((O.type===W.tiles.water||O.type===W.tiles.watersewage)&&G?.type.effects.includes(W.effects.WaterImmunity.name))C=0;else if(O.type===W.tiles.drain){let I=Math.min($.gold,W.constants.DRAIN_GOLD_COST),N=Math.min($.matter,W.constants.DRAIN_MATTER_COST);$.gold-=I,$.matter-=N}if(C!==0)J._energyQueue.push({entityId:q,energyDelta:C})}return J}function N6(J,q){let $=J.entities[q.entityId];switch(q.oldTileType){case W.tiles.portalstartaerobot:J=$1(J,$,W.entities.AeroBot),J=L0(J,`Booting up as an ${W.entities.AeroBot.name}...`);break;case W.tiles.portalstartworkbot:J=$1(J,$,W.entities.WorkBot),J=L0(J,`Booting up as a ${W.entities.WorkBot.name}...`);break;default:}return J}function eZ(J,q,$,G){let H=q.x+$,O=q.y+G,C=J.getTile(H,O).type;return H>=0&&H<J.widthTiles&&O>=0&&O<J.heightTiles&&!(C===W.tiles.rock||C===W.tiles.portalclosed||C===W.tiles.portalsewers||C===W.tiles.tv||C.name.startsWith("wall"))}function ZJ(J,q,$,G,H){let O=q.x+G,C=q.y+H,I=J.getTile(O,C).type;if($)return $.type.effects.includes(W.effects.WallCrusher.name)&&I===W.tiles.wallweak||$.type.effects.includes(W.effects.RockCrusher.name)&&I===W.tiles.rock;return!1}function JJ(J,q,$,G,H){let O=q.x+G,C=q.y+H,I=J.getTile(O,C).type;if($)return $.type.effects.includes(W.effects.Screwing.name)&&I===W.tiles.portalsewers;return!1}var I6=g1(H1(),1);class k0{seed;_rotRng;constructor(J=1337){this.seed=J,this._rotRng=I6.RNG.clone(),this._rotRng.setSeed(J)}getPercentage(){return this._rotRng.getPercentage()}getItem(J){return this._rotRng.getItem(J)}}function b6(J,q){if(q.seed===1337)J=f0(J,new A0(q.id,130,127,"Valkyrie",{faction:"Spirits"})),J=f0(J,new A0(q.id,124,127,"Valkyrie",{faction:"Spirits"})),J=f0(J,new A0(q.id,127,130,"trident"));else{let $=new k0(q.seed);for(let G=0;G<q.heightTiles;G++)for(let H=0;H<q.widthTiles;H++){let O=q.getTile(H,G);if($.getPercentage()<=1&&(O.type===W.tiles.void||O.type===W.tiles.tree)){let C=$.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(C){case"Deviant":case"Pioneer":J=f0(J,new A0(q.id,H,G,C,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":J=f0(J,new A0(q.id,H,G,C));break}}}}return J}var D1=g1(H1(),1);var KJ=1337,f6=55;function k6(J,q=KJ){D1.RNG.setSeed(q);let $=new D1.Noise.Simplex,G=256,H=256,O=[];for(let N=0;N<H;N++)for(let b=0;b<G;b++){let d=$.get(b/f6,N/f6),J0;if(d<=-0.5)J0=W.tiles.water;else if(d<=0)J0=W.tiles.void;else if(d<0.5)J0=W.tiles.tree;else J0=W.tiles.rock;O.push(x0(J0))}let C="simplex="+q,I=new _0(C,G,H,O);return I.seed=q,J.maps[C]=I,J}var qJ=1337;function g6(J,q=qJ){let $=u6(1024,1024,W.tiles.void);$.id="solarsystem="+q,J.maps[$.id]=$;let G=new k0(q),H=new k0(q),O=G.getItem([2,3,4,5,6,7,8,9,10,11,12]),C=128,I=512-C,N=Math.floor(I/O);$=zJ($,G);let b=u6(128,128,W.tiles.voidtrue);UJ(b,63,63,62,W.tiles.sun),$J(b,63,63,W.tiles.sun),$.pasteOnto(b,448,448);for(let l=C;l<512;l+=N){let m=G.getItem([-1,1])*G.getItem(w1(l)),Q0=G.getItem([-1,1])*Math.floor(Math.sqrt(l*l-m*m));m+=512,Q0+=512;let x=G.getItem([16,24,32]),_=Math.floor(x/2)-1;J=k6(J,q);let p=J.maps["simplex="+q],z0=W.map_snippets.launcher;z0=z0.replace("!!O portallauncher space 0 0",`!!O portallauncher ${$.id} ${m} ${Q0}`);let s=m0(z0),E=H.getItem(w1(p.widthTiles-s.widthTiles)),k=H.getItem(w1(p.heightTiles-s.heightTiles));p.pasteOnto(s,E,k),J=b6(J,p);let g=p.sample(x,x).circular();$.pasteOnto(g,m-(_+1),Q0-(_+1)),q++}let d=W.map_snippets.space_bot_station;d=d.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let J0=m0(d);$.pasteOnto(J0,583,398);let V0=m0(W.map_snippets.square_falcon);return $.pasteOnto(V0,590,373),J}function u6(J,q,$){let G=[];for(let C=0;C<J*q;C++)G.push(x0($));return new _0("__temp",J,q,G)}function zJ(J,q){for(let $=0;$<J.heightTiles;$++)for(let G=0;G<J.widthTiles;G++)if(q.getPercentage()<=1)J.setTile(G,$,q.getItem([W.tiles.spacevoidstarwhite,W.tiles.spacevoidstaryellow]));return J}function UJ(J,q,$,G,H){let O=1-G,C=1,I=-2*G,N=0,b=G;J.setTile(q,$+G,H),J.setTile(q,$-G,H),J.setTile(q+G,$,H),J.setTile(q-G,$,H);while(N<b){if(O>=0)b-=1,I+=2,O+=I;N+=1,C+=2,O+=C,J.setTile(q+N,$+b,H),J.setTile(q-N,$+b,H),J.setTile(q+N,$-b,H),J.setTile(q-N,$-b,H),J.setTile(q+b,$+N,H),J.setTile(q-b,$+N,H),J.setTile(q+b,$-N,H),J.setTile(q-b,$-N,H)}return J}function $J(J,q,$,G){let{widthTiles:H,heightTiles:O}=J,C=[];C.push({x:q,y:$});let I=void 0;while(typeof(I=C.shift())!=="undefined"){let N=I,b=I;if(I.x+1<H)b={x:I.x+1,y:I.y};while(J.getTile(N.x,N.y).type!==G){if(J.setTile(N.x,N.y,G),N.y+1<O){if(J.getTile(N.x,N.y+1).type!==G)C.push({x:N.x,y:N.y+1})}if(N.y-1>=0){if(J.getTile(N.x,N.y-1).type!==G)C.push({x:N.x,y:N.y-1})}if(N.x-1>=0)N.x-=1;else break}while(J.getTile(b.x,b.y).type!==G){if(J.setTile(b.x,b.y,G),b.y+1<O){if(J.getTile(b.x,b.y+1).type!==G)C.push({x:b.x,y:b.y+1})}if(b.y-1>=0){if(J.getTile(b.x,b.y-1).type!==G)C.push({x:b.x,y:b.y-1})}if(b.x+1<H)b.x+=1;else break}}return J}function T6(J,q){if(q?.oldMapId?.startsWith("shop_instance")){J=O6(J,q.oldMapId);let $=J.maps[q.newMapId],G=$.getTile(q.newX,q.newY);$.setTile(q.newX,q.newY,G.type,{mapId:"shop_instance",x:q.oldX,y:q.oldY})}if(q?.newMapId?.startsWith("shop_instance")){let $=m0(W.map_snippets.shop_instance);$.id+="_"+q.oldMapId+"_"+q.entityId,$.setTile(q.newX,q.newY,W.tiles.portal,{mapId:q.oldMapId,x:q.oldX,y:q.oldY}),J.maps[q.oldMapId].setTile(q.oldX,q.oldY,q.oldTileType,{mapId:$.id,x:q.newX,y:q.newY});let H=J.entities[q.entityId];if(H.id.startsWith("player"))J.currentMapId=$.id;if(H.mapId=$.id,H.x=q.newX,H.Y=q.newY,J.maps[$.id]=$,J=Q1(J,W.items.hammer,$.id,4,4,0,-200),J=Q1(J,W.items.pickaxe,$.id,4,6,0,-200),J=Q1(J,W.items.battery,$.id,4,8,0,-200),J=Q1(J,W.items.gold,$.id,4,10,1,-1e4),J=E0(J,$.id+"_shopkeeper",W.entities.AeroBot,$.id,6,2,{faction:H.options.faction,dialog:"shop_instance_shopkeeper",name:"Shopkeeper"}),q?.oldMapId.startsWith("bot_stadium"))J=E0(J,$.id+"_shopper",W.entities.WorkBot,$.id,1,12,{faction:H.options.faction,dialog:"shop_instance_workbot_shopper"});else if(q?.oldMapId.startsWith("bot_bar"))J=E0(J,$.id+"_shopper",W.entities.AeroBot,$.id,4,11,{faction:H.options.faction,dialog:"shop_instance_aerobot_shopper"})}return J}function h6(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!0,actionLog:[],chatLog:[],currentMapId:"",entities:{},items:{},lastSpacePositionByEntity:{},maps:{},rng:new k0,tools:{},tvs:{}}}function x6(J){let q=void 0;while(typeof(q=J._combatQueue.shift())!=="undefined"){let $=-1,G=-5,H=Y1(J,q.entityId);if(H)$=H.type.energyCost,G=-1*Math.abs(H.type.damage);J._energyQueue.push({entityId:q.entityId,energyDelta:$}),J._energyQueue.push({entityId:q.otherEntityId,energyDelta:G});let O=J.entities[q.entityId],C=J.entities[q.otherEntityId],I=O?.options?.name?O.options.name:O.type.name,N=C?.options?.name?C.options.name:C.type.name;J=L0(J,`${I} did ${Math.abs(G)} damage to ${N} at cost of ${Math.abs($)} energy.`)}return J}function _6(J){let q=void 0,$=new Set;while(typeof(q=J._energyQueue.shift())!=="undefined"){let G=J.entities[q.entityId];if(G.energy=Math.min(G.energy+q.energyDelta,G.energyMax),G.energy<=0)$.add(G.id)}for(let G of $){let H=J.entities[G];J._despawnQueue.push(G);let O=H?.options?.name?H.options.name:H.type.name;if(!M0(H)){let C=Math.max(1,Math.floor(H.energyMax/3));J=X6(J,C,H.mapId,H.x,H.y),J=L0(J,`${O} destroyed leaving behind Junk.`)}}return J}function m6(J){return J=L6(J),J=x6(J),J=A6(J),J=_6(J),J=D6(J),J=W6(J),J}class W1{state;constructor(){}init(){return this.state=h6(),this.state=_1(this.state,"entitymap.updated.event",N6),this.state=_1(this.state,"entitymap.updated.event",T6),this.state=g6(this.state),this.state=R6(this.state),this.state.currentMapId="botmos_hull_selection",this.state=E0(this.state,W0(),W.entities.Spirit,this.state.currentMapId,9,5,{faction:W.factions.Spirits,name:"Player"}),this.state}update(J,q=!1){let $=this.state.entities[W0()];if($){if(J){switch(J){case W.commands.M:this.state._menuOpen=!this.state._menuOpen;break;case W.commands["#"]:this.state=L0(this.state,q6(this.state,W0()));break;default:this.state=C6(this.state,$,J),this.state=m6(this.state)}this.state.actionLog.push(J.key)}}else this.state=L0(this.state,`Game over! ${this.state.actionLog.length} turns.`),console.log(`Game over! ${this.state.actionLog.length} turns: ${this.state.actionLog.join("")}`),this.state.currentMapId="botmos_hull_selection",this.state=E0(this.state,W0(),W.entities.Spirit,this.state.currentMapId,9,5,{faction:W.factions.Spirits,name:"Player"});return this.state}play(J){for(let q=0;q<J.length;q++){let $=J[q];this.update(W.commands[$],!0)}return this.state}}var c={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1,slash:!1},d1=[],p1=void 0,c6=0;document.body.addEventListener("keydown",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":c.up=!0,U0(J);break;case"a":case"ArrowLeft":c.left=!0,U0(J);break;case"s":case"ArrowDown":c.down=!0,U0(J);break;case"d":case"ArrowRight":c.right=!0,U0(J);break;case"x":c.a=!0,U0(J);break;case" ":case"y":case"z":c.b=!0,U0(J);break;case"m":c.menu=!0,U0(J);break;case"#":case"/":c.slash=!0,U0(J);break;default:}N0(y6())});function N0(J){let q=Date.now();if(p1!==void 0&&q-c6>=80)c6=q,p1(J)}document.body.addEventListener("keyup",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":c.up=!1,U0(J);break;case"a":case"ArrowLeft":c.left=!1,U0(J);break;case"s":case"ArrowDown":c.down=!1,U0(J);break;case"d":case"ArrowRight":c.right=!1,U0(J);break;case"x":c.a=!1,U0(J);break;case" ":case"y":case"z":c.b=!1,U0(J);break;case"m":c.menu=!1,U0(J);break;case"#":case"/":c.slash=!1,U0(J);default:}});document.body.addEventListener("click",function(J){let{clientX:q,clientY:$}=J,H=document.body.clientWidth/3,C=document.body.clientHeight/3;if(q>=H&&q<2*H&&$<C)N0(W.commands.N),U0(J);else if(q<H&&$<C)N0(W.commands.B),U0(J);else if(q>=2*H&&$<C)N0(W.commands.A),U0(J);else if(q<H&&$>=C&&$<2*C)N0(W.commands.W),U0(J);else if(q>=2*H&&$>=C&&$<2*C)N0(W.commands.E),U0(J);else if(q>=H&&q<2*H&&$>=2*C)N0(W.commands.S),U0(J);else if(q>=H&&q<2*H&&$>=C&&$<2*C)N0(W.commands.M),U0(J)});function U0(J){J.preventDefault(),J.stopPropagation()}var V1=null;function XJ(){let J=null;if(c.right)J=W.commands.E;if(c.left)J=W.commands.W;if(c.down)J=W.commands.S;if(c.up)J=W.commands.N;if(c.up&&c.right){if(J===W.commands.N&&V1===W.commands.N)J=W.commands.E}if(c.up&&c.left){if(J===W.commands.N&&V1===W.commands.N)J=W.commands.W}if(c.down&&c.right){if(J===W.commands.S&&V1===W.commands.S)J=W.commands.E}if(c.down&&c.left){if(J===W.commands.S&&V1===W.commands.S)J=W.commands.W}if(c.a)J=W.commands.A;if(c.b)J=W.commands.B;if(c.menu)J=W.commands.M;if(c.slash)J=W.commands["#"];if(V1=J,J!==null)d1.push(J)}function y6(){XJ();let J=d1.shift()||null;return d1=[],J}var d6=void 0;window.addEventListener("gamepadconnected",(J)=>{d6=setInterval(function(){let q=navigator.getGamepads()[J.gamepad?.index];if(c.right=q.buttons[15].pressed,c.left=q.buttons[14].pressed,c.down=q.buttons[13].pressed,c.up=q.buttons[12].pressed,c.a=q.buttons[0].pressed||q.buttons[2].pressed,c.b=q.buttons[1].pressed||q.buttons[3].pressed,c.menu=q.buttons[9].pressed,c.right||c.left||c.down||c.up||c.a||c.b||c.menu)N0(y6())},100)});window.addEventListener("gamepaddisconnected",(J)=>{clearInterval(d6)});function p6(J){p1=J}var o6=g1(H1(),1);var F1={AeroBot_a:[0,0],AeroBot:[16,0],battery:[32,0],broom:[48,0],chargepad:[64,0],cheat:[80,0],chest:[96,0],Cleaner_a:[112,0],Cleaner:[128,0],Deviant:[144,0],drain:[160,0],energy:[176,0],gold:[192,0],goo:[208,0],Graffiticyan:[224,0],Graffitimagenta:[240,0],Graffitiyellow:[256,0],hammer:[272,0],junk:[288,0],matter:[304,0],movableboulder:[320,0],movablebox:[336,0],moveeast:[352,0],movenorth:[368,0],movesouth:[384,0],movewest:[400,0],pickaxe:[416,0],Pioneer_a:[432,0],Pioneer:[448,0],portalclosed:[464,0],portalhidden:[480,0],portallauncher:[496,0],portal:[512,0],portalsewers:[528,0],portalstartaerobot:[544,0],"_portalstart?":[560,0],portalstartworkbot:[576,0],RoboRat_a:[592,0],RoboRat:[608,0],rock:[624,0],shocker:[640,0],spacerock:[656,0],spacetree:[672,0],spacevoid:[688,0],spacevoidstarwhite:[704,0],spacevoidstaryellow:[720,0],spacewater_a:[736,0],spacewater:[752,0],Spirit_a:[768,0],Spirit:[784,0],sun:[800,0],terminal:[816,0],tree:[832,0],trident:[848,0],tv:[864,0],Valkyrie_a:[880,0],Valkyrie:[896,0],voidhidden:[912,0],void:[928,0],voidtrue:[944,0],wall0:[960,0],wall1:[976,0],wall2:[992,0],walla_:[1008,0],wallA:[1024,0],wallb_:[1040,0],wallB:[1056,0],wallc_:[1072,0],wallC:[1088,0],walld_:[1104,0],wallD:[1120,0],walle_:[1136,0],wallE:[1152,0],wallf_:[1168,0],wallF:[1184,0],wallg_:[1200,0],wallG:[1216,0],wallh_:[1232,0],wallH:[1248,0],walli_:[1264,0],wallI:[1280,0],wallj_:[1296,0],wallJ:[1312,0],wallk_:[1328,0],wallK:[1344,0],walll_:[1360,0],wallL:[1376,0],wallm_:[1392,0],wallM:[1408,0],walln_:[1424,0],wallN:[1440,0],wallo_:[1456,0],wallO:[1472,0],"wall(":[1488,0],"wall)":[1504,0],"wall+":[1520,0],"wall,":[1536,0],"wall.":[1552,0],wall:[1568,0],"wall:":[1584,0],wall_:[1600,0],"wall|":[1616,0],wallp_:[1632,0],wallP:[1648,0],wallq_:[1664,0],wallQ:[1680,0],wallr_:[1696,0],wallR:[1712,0],walls_:[1728,0],wallS:[1744,0],wallstatueaerobot:[1760,0],wallstatuecleaner:[1776,0],wallstatuepioneer:[1792,0],wallstatueworkbot:[1808,0],wallt_:[1824,0],wallT:[1840,0],wallu_:[1856,0],wallU:[1872,0],wallv_:[1888,0],wallV:[1904,0],wallweak:[1920,0],wallw_:[1936,0],wallW:[1952,0],wallx_:[1968,0],wallX:[1984,0],wally_:[2000,0],wallY:[2016,0],wallz_:[2032,0],wallZ:[2048,0],water_a:[2064,0],water:[2080,0],watersewage_a:[2096,0],watersewage:[2112,0],WorkBot_a:[2128,0],WorkBot:[2144,0],wrench:[2160,0]};var s0=document.createElement("div");s0.id="ui";document.body.appendChild(s0);var l1=n6(),R1=n6(),l6=GJ(),S0=document.createElement("div");S0.replaceChildren(l1,R1,l6);s0.replaceChildren(S0);var O1=document.createElement("div");O1.id="uichatlog";s0.appendChild(O1);async function r6(J,q=0){if(!n.showUI)return;let $=W0(),G=J.entities[$],H="";if(G){n0(l1,G.type.name);let O="",C=Y1(J,$);if(C)n0(R1,C.type.name.toLowerCase());else n0(R1,null);let I="";if(G.matter>0)I=`${G.matter}M `;let N="";if(G.gold>0)N=`${G.gold}G `;let b=X1(J,G);if(H=" "+G.energy+"/"+G.energyMax+" "+O+N+I+"Y:"+b.B.name+" X:"+b.A.name,s0.style.flexDirection="column-reverse",G.y-q>=B0.height-3)s0.style.flexDirection="column";if(S0.style.background="#000",G.energy/G.energyMax<=0.2)S0.style.color="#000",S0.style.background="#f00";else S0.style.color="#74ee15",S0.style.background="#000"}else n0(l1,null),n0(R1,null),H="Game over!",S0.style.color="#000",S0.style.background="#f00";if(l6.innerText=H,J._menuOpen&&!!J.chatLog.length){let O=J.chatLog.slice(-n.chatLogMaxDisplaySize);O1.innerText=O.join(`
`)}else O1.innerText=""}function n6(){let J=document.createElement("span");return n0(J,null),J.style.height=`${n.fontSize}px`,J.style.display="inline-block",J}function GJ(){let J=document.createElement("span");return J.style.display="inline-block",J.style.marginLeft=`${n.fontSize/2}px`,J}function n0(J,q){if(q){let $=F1[q][0];J.style.background=`url('build/tiles.png') -${$}px 0`,J.style.width=`${n.fontSize}px`}else J.style.width="0px"}var y0="_a",a6=document.createElement("img");a6.src="build/tiles.png";B0.tileSet=a6;B0.tileMap=wJ();var r1=new o6.Display(B0);document.body.appendChild(r1.getContainer());function BJ(J,q,$=!1){let G=J.currentMapId,H=J.maps[G],O=$?y0:"",C=0,I=0;if(H.widthTiles<q.width)C=Math.floor((q.width-H.widthTiles)/2),q.x=0;if(H.heightTiles<q.height)I=Math.floor((q.height-H.heightTiles)/2),q.y=0;let N={},b={},d={};for(let x=0;x<q.height;x++)for(let _=0;_<q.width;_++){let p=H.getTile(q.x+_,q.y+x),z0="";if(!!p&&!!p.type)if(p.options.sign)z0="#"+p.options.sign;else z0=p.type.icon;if(z0){let s=[C+_,I+x].toString();N[s]=[z0+O],b[s]=["transparent"],d[s]=["transparent"]}}let J0=B1(J,G);for(let x=0;x<J0.length;x++){let _=J0[x],p=C+_.x-q.x,z0=I+_.y-q.y,s=[p,z0].toString();if(N[s])N[s].push(_.type.icon+O),b[s].push("transparent"),d[s].push("transparent");else N[s]=[_.type.icon+O],b[s]=["transparent"],d[s]=["transparent"]}let V0=W0(),l=J.entities[V0],m=((l||{}).options||{}).faction||void 0,Q0=h0(J,G);for(let x=0;x<Q0.length;x++){let _=Q0[x],p=C+_.x-q.x,z0=I+_.y-q.y,s="transparent";if(n.highlightEnemy&&!!m&&!M0(_)&&!h1(_))s=m===_.options.faction?"rgba(116, 238, 21, 0.5)":"rgba(240, 0, 255, 0.5)";if(_===l)s="transparent";let E=[p,z0].toString();if(N[E])N[E].push(_.type.icon+O),b[E].push(s),d[E].push("transparent");else N[E]=[_.type.icon+O],b[E]=[s],d[E]=["transparent"]}r1.clear();for(let[x,_]of Object.entries(N)){let p=x.split(",");r1.draw(Number(p[0]),Number(p[1]),_,b[x],d[x])}}var s6={x:0,y:0},M1=0;async function d0(J){let q=J.entities[W0()],$=q?q:s6,G=YJ($);if(BJ(J,G,M1%2==0),r6(J,G.y),s6=$,M1++,M1>=128)M1=0}async function i6(J){}function YJ(J){return{x:Math.min(Math.max(0,J.x-Math.floor(B0.width/2)),T1.WIDTH-B0.width),y:Math.min(Math.max(0,J.y-Math.floor(B0.height/2)),T1.HEIGHT-B0.height),width:B0.width,height:B0.height}}function wJ(){let J={};for(let[q,$]of Object.entries(F1)){let G=q.endsWith(y0),H="";if(G)q=q.substring(0,q.length-y0.length),H=y0;if(q.startsWith("wall")&&(q.length===5||q.length===6))J["#"+q.substring(4,5)+H]=$;else if(Object.hasOwn(W.tiles,q))J[W.tiles[q].icon+H]=$;else if(Object.hasOwn(W.entities,q))J[W.entities[q].icon+H]=$;else if(Object.hasOwn(W.items,q))J[W.items[q].icon+H]=$}for(let[q,$]of Object.entries(J))if(!q.endsWith(y0)&&!Object.hasOwn(J,q+y0))J[q+y0]=$;return J}var R0=new W1;window.onload=function(){d0(R0.init())};window.onresize=function(){let J=typeof window!=="undefined"?window.innerWidth:0,q=typeof window!=="undefined"?window.innerHeight:0;n.cameraWidth=Math.floor(J/n.fontSize),n.cameraHeight=Math.floor(q/n.fontSize),B0.width=Math.floor(n.cameraWidth*(1/n.zoom)),B0.height=Math.floor(n.cameraHeight*(1/n.zoom)),i6(B0),d0(R0.state)};p6(function(J){d0(R0.update(J))});if(!window.BMActionLog)window.BMActionLog=function(){return R0.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(J){d0(R0.play(J))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){n.debug=!n.debug,d0(R0.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){n.showUI=!n.showUI,d0(R0.state)};if(n.debug){if(!window.BMDebugState)window.BMDebugState=function(){return R0.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let J=Object.keys(R0.state.maps).length,q=Object.keys(R0.state.entities).length,$=Object.keys(R0.state.items).length,G=Object.keys(R0.state.tools).length;return`Maps: ${J}, Entities: ${q}, Items: ${$}, Tools: ${G}`}}document.body.focus();
