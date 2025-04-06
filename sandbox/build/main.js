var zJ=Object.create;var{getPrototypeOf:qJ,defineProperty:H6,getOwnPropertyNames:UJ}=Object;var $J=Object.prototype.hasOwnProperty;var r1=(J,z,U)=>{U=J!=null?zJ(qJ(J)):{};let G=z||!J||!J.__esModule?H6(U,"default",{value:J,enumerable:!0}):U;for(let P of UJ(J))if(!$J.call(G,P))H6(G,P,{get:()=>J[P],enumerable:!0});return G};var XJ=(J,z)=>()=>(z||J((z={exports:{}}).exports,z),z.exports);var C1=XJ((O1,y6)=>{function y0(J){if(J===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return J}function MJ(J,z){var U=typeof Symbol!=="undefined"&&J[Symbol.iterator]||J["@@iterator"];if(U)return(U=U.call(J)).next.bind(U);if(Array.isArray(J)||(U=jJ(J))||z&&J&&typeof J.length==="number"){if(U)J=U;var G=0;return function(){if(G>=J.length)return{done:!0};return{done:!1,value:J[G++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jJ(J,z){if(!J)return;if(typeof J==="string")return c6(J,z);var U=Object.prototype.toString.call(J).slice(8,-1);if(U==="Object"&&J.constructor)U=J.constructor.name;if(U==="Map"||U==="Set")return Array.from(J);if(U==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U))return c6(J,z)}function c6(J,z){if(z==null||z>J.length)z=J.length;for(var U=0,G=new Array(z);U<z;U++)G[U]=J[U];return G}function z0(J,z){J.prototype=Object.create(z.prototype),J.prototype.constructor=J,e1(J,z)}function e1(J,z){return e1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function U(G,P){return G.__proto__=P,G},e1(J,z)}(function(J,z){typeof O1==="object"&&typeof y6!=="undefined"?z(O1):typeof define==="function"&&define.amd?define(["exports"],z):(J=typeof globalThis!=="undefined"?globalThis:J||self,z(J.ROT={}))})(O1,function(J){var z=0.00000000023283064365386963,U=function(){function Y(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var B=Y.prototype;return B.getSeed=function $(){return this._seed},B.setSeed=function $(K){return K=K<1?1/K:K,this._seed=K,this._s0=(K>>>0)*z,K=K*69069+1>>>0,this._s1=K*z,K=K*69069+1>>>0,this._s2=K*z,this._c=1,this},B.getUniform=function $(){var K=2091639*this._s0+this._c*z;return this._s0=this._s1,this._s1=this._s2,this._c=K|0,this._s2=K-this._c,this._s2},B.getUniformInt=function $(K,Z){var Q=Math.max(K,Z),V=Math.min(K,Z);return Math.floor(this.getUniform()*(Q-V+1))+V},B.getNormal=function $(K,Z){if(K===void 0)K=0;if(Z===void 0)Z=1;var Q,V,q;do Q=2*this.getUniform()-1,V=2*this.getUniform()-1,q=Q*Q+V*V;while(q>1||q==0);var X=Q*Math.sqrt(-2*Math.log(q)/q);return K+X*Z},B.getPercentage=function $(){return 1+Math.floor(this.getUniform()*100)},B.getItem=function $(K){if(!K.length)return null;return K[Math.floor(this.getUniform()*K.length)]},B.shuffle=function $(K){var Z=[],Q=K.slice();while(Q.length){var V=Q.indexOf(this.getItem(Q));Z.push(Q.splice(V,1)[0])}return Z},B.getWeightedValue=function $(K){var Z=0;for(var Q in K)Z+=K[Q];var V=this.getUniform()*Z,q,X=0;for(q in K)if(X+=K[q],V<X)return q;return q},B.getState=function $(){return[this._s0,this._s1,this._s2,this._c]},B.setState=function $(K){return this._s0=K[0],this._s1=K[1],this._s2=K[2],this._c=K[3],this},B.clone=function $(){var K=new Y;return K.setState(this.getState())},Y}(),G=new U().setSeed(Date.now()),P=function(){function Y(){}var B=Y.prototype;return B.getContainer=function $(){return null},B.setOptions=function $(K){this._options=K},Y}(),R=function(Y){z0(B,Y);function B(){var K=Y.call(this)||this;return K._ctx=document.createElement("canvas").getContext("2d"),K}var $=B.prototype;return $.schedule=function K(Z){requestAnimationFrame(Z)},$.getContainer=function K(){return this._ctx.canvas},$.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z);var Q=Z.fontStyle?Z.fontStyle+" ":"",V=Q+" "+Z.fontSize+"px "+Z.fontFamily;this._ctx.font=V,this._updateSize(),this._ctx.font=V,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},$.clear=function K(){var Z=this._ctx.globalCompositeOperation;this._ctx.globalCompositeOperation="copy",this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.globalCompositeOperation=Z},$.eventToPosition=function K(Z,Q){var V=this._ctx.canvas,q=V.getBoundingClientRect();if(Z-=q.left,Q-=q.top,Z*=V.width/q.width,Q*=V.height/q.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},B}(P);function C(Y,B){return(Y%B+B)%B}function S(Y,B,$){if(B===void 0)B=0;if($===void 0)$=1;if(Y<B)return B;if(Y>$)return $;return Y}function N(Y){return Y.charAt(0).toUpperCase()+Y.substring(1)}function I(Y){for(var B=arguments.length,$=new Array(B>1?B-1:0),K=1;K<B;K++)$[K-1]=arguments[K];var Z=I.map,Q=function V(q,X,L,w){if(Y.charAt(w-1)=="%")return q.substring(1);if(!$.length)return q;var H=$[0],D=X||L,F=D.split(","),M=F.shift()||"",j=Z[M.toLowerCase()];if(!j)return q;H=$.shift();var O=H[j].apply(H,F),b=M.charAt(0);if(b!=b.toLowerCase())O=N(O);return O};return Y.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,Q)}I.map={s:"toString"};var c=Object.freeze({__proto__:null,mod:C,clamp:S,capitalize:N,format:I}),n=function(Y){z0(B,Y);function B(){var K=Y.call(this)||this;return K._spacingX=0,K._spacingY=0,K._hexSize=0,K}var $=B.prototype;return $.draw=function K(Z,Q){var V=Z[0],q=Z[1],X=Z[2],L=Z[3],w=Z[4],H=[(V+1)*this._spacingX,q*this._spacingY+this._hexSize];if(this._options.transpose)H.reverse();if(Q)this._ctx.fillStyle=w,this._fill(H[0],H[1]);if(!X)return;this._ctx.fillStyle=L;var D=[].concat(X);for(var F=0;F<D.length;F++)this._ctx.fillText(D[F],H[0],Math.ceil(H[1]))},$.computeSize=function K(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=Math.floor(Z/this._spacingX)-1,q=Math.floor((Q-2*this._hexSize)/this._spacingY+1);return[V,q]},$.computeFontSize=function K(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=2*Z/((this._options.width+1)*Math.sqrt(3))-1,q=Q/(2+1.5*(this._options.height-1)),X=Math.min(V,q),L=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var w=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=L;var H=w/100;X=Math.floor(X)+1;var D=2*X/(this._options.spacing*(1+H/Math.sqrt(3)));return Math.ceil(D)-1},$._normalizedEventToPosition=function K(Z,Q){var V;if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q,V=this._ctx.canvas.width;else V=this._ctx.canvas.height;var q=V/this._options.height;if(Q=Math.floor(Q/q),C(Q,2))Z-=this._spacingX,Z=1+2*Math.floor(Z/(2*this._spacingX));else Z=2*Math.floor(Z/(2*this._spacingX));return[Z,Q]},$._fill=function K(Z,Q){var V=this._hexSize,q=this._options.border,X=this._ctx;if(X.beginPath(),this._options.transpose)X.moveTo(Z-V+q,Q),X.lineTo(Z-V/2+q,Q+this._spacingX-q),X.lineTo(Z+V/2-q,Q+this._spacingX-q),X.lineTo(Z+V-q,Q),X.lineTo(Z+V/2-q,Q-this._spacingX+q),X.lineTo(Z-V/2+q,Q-this._spacingX+q),X.lineTo(Z-V+q,Q);else X.moveTo(Z,Q-V+q),X.lineTo(Z+this._spacingX-q,Q-V/2+q),X.lineTo(Z+this._spacingX-q,Q+V/2-q),X.lineTo(Z,Q+V-q),X.lineTo(Z-this._spacingX+q,Q+V/2-q),X.lineTo(Z-this._spacingX+q,Q-V/2+q),X.lineTo(Z,Q-V+q);X.fill()},$._updateSize=function K(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(Z.spacing*(Z.fontSize+Q/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var V,q;if(Z.transpose)V="height",q="width";else V="width",q="height";this._ctx.canvas[V]=Math.ceil((Z.width+1)*this._spacingX),this._ctx.canvas[q]=Math.ceil((Z.height-1)*this._spacingY+2*this._hexSize)},B}(R),Q0=function(Y){z0(B,Y);function B(){var K=Y.call(this)||this;return K._spacingX=0,K._spacingY=0,K._canvasCache={},K}var $=B.prototype;return $.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z),this._canvasCache={}},$.draw=function K(Z,Q){if(B.cache)this._drawWithCache(Z);else this._drawNoCache(Z,Q)},$._drawWithCache=function K(Z){var Q=Z[0],V=Z[1],q=Z[2],X=Z[3],L=Z[4],w=""+q+X+L,H;if(w in this._canvasCache)H=this._canvasCache[w];else{var D=this._options.border;H=document.createElement("canvas");var F=H.getContext("2d");if(H.width=this._spacingX,H.height=this._spacingY,F.fillStyle=L,F.fillRect(D,D,H.width-D,H.height-D),q){F.fillStyle=X,F.font=this._ctx.font,F.textAlign="center",F.textBaseline="middle";var M=[].concat(q);for(var j=0;j<M.length;j++)F.fillText(M[j],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[w]=H}this._ctx.drawImage(H,Q*this._spacingX,V*this._spacingY)},$._drawNoCache=function K(Z,Q){var V=Z[0],q=Z[1],X=Z[2],L=Z[3],w=Z[4];if(Q){var H=this._options.border;this._ctx.fillStyle=w,this._ctx.fillRect(V*this._spacingX+H,q*this._spacingY+H,this._spacingX-H,this._spacingY-H)}if(!X)return;this._ctx.fillStyle=L;var D=[].concat(X);for(var F=0;F<D.length;F++)this._ctx.fillText(D[F],(V+0.5)*this._spacingX,Math.ceil((q+0.5)*this._spacingY))},$.computeSize=function K(Z,Q){var V=Math.floor(Z/this._spacingX),q=Math.floor(Q/this._spacingY);return[V,q]},$.computeFontSize=function K(Z,Q){var V=Math.floor(Z/this._options.width),q=Math.floor(Q/this._options.height),X=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var L=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=X;var w=L/100,H=w*q/V;if(H>1)q=Math.floor(q/H);return Math.floor(q/this._options.spacing)},$._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._spacingX),Math.floor(Q/this._spacingY)]},$._updateSize=function K(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(Z.spacing*Q),this._spacingY=Math.ceil(Z.spacing*Z.fontSize),Z.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=Z.width*this._spacingX,this._ctx.canvas.height=Z.height*this._spacingY},B}(R);Q0.cache=!1;var l=function(Y){z0(B,Y);function B(){var K=Y.call(this)||this;return K._colorCanvas=document.createElement("canvas"),K}var $=B.prototype;return $.draw=function K(Z,Q){var V=Z[0],q=Z[1],X=Z[2],L=Z[3],w=Z[4],H=this._options.tileWidth,D=this._options.tileHeight;if(Q)if(this._options.tileColorize)this._ctx.clearRect(V*H,q*D,H,D);else this._ctx.fillStyle=w,this._ctx.fillRect(V*H,q*D,H,D);if(!X)return;var F=[].concat(X),M=[].concat(L),j=[].concat(w);for(var O=0;O<F.length;O++){var b=this._options.tileMap[F[O]];if(!b)throw new Error('Char "'+F[O]+'" not found in tileMap');if(this._options.tileColorize){var g=this._colorCanvas,h=g.getContext("2d");h.globalCompositeOperation="source-over",h.clearRect(0,0,H,D);var d=M[O],t=j[O];if(h.drawImage(this._options.tileSet,b[0],b[1],H,D,0,0,H,D),d!="transparent")h.fillStyle=d,h.globalCompositeOperation="source-atop",h.fillRect(0,0,H,D);if(t!="transparent")h.fillStyle=t,h.globalCompositeOperation="destination-over",h.fillRect(0,0,H,D);this._ctx.drawImage(g,V*H,q*D,H,D)}else this._ctx.drawImage(this._options.tileSet,b[0],b[1],H,D,V*H,q*D,H,D)}},$.computeSize=function K(Z,Q){var V=Math.floor(Z/this._options.tileWidth),q=Math.floor(Q/this._options.tileHeight);return[V,q]},$.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},$._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},$._updateSize=function K(){var Z=this._options;this._ctx.canvas.width=Z.width*Z.tileWidth,this._ctx.canvas.height=Z.height*Z.tileHeight,this._colorCanvas.width=Z.tileWidth,this._colorCanvas.height=Z.tileHeight},B}(R);function m(Y){var B,$;if(Y in E)B=E[Y];else{if(Y.charAt(0)=="#"){var K=Y.match(/[0-9a-f]/gi)||[],Z=K.map(function(V){return parseInt(V,16)});if(Z.length==3)B=Z.map(function(V){return V*17});else{for(var Q=0;Q<3;Q++)Z[Q+1]+=16*Z[Q],Z.splice(Q,1);B=Z}}else if($=Y.match(/rgb\(([0-9, ]+)\)/i))B=$[1].split(/\s*,\s*/).map(function(V){return parseInt(V)});else B=[0,0,0];E[Y]=B}return B.slice()}function V0(Y){var B=Y.slice();for(var $=arguments.length,K=new Array($>1?$-1:0),Z=1;Z<$;Z++)K[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++)for(var V=0;V<K.length;V++)B[Q]+=K[V][Q];return B}function x(Y){for(var B=arguments.length,$=new Array(B>1?B-1:0),K=1;K<B;K++)$[K-1]=arguments[K];for(var Z=0;Z<3;Z++)for(var Q=0;Q<$.length;Q++)Y[Z]+=$[Q][Z];return Y}function _(Y){var B=Y.slice();for(var $=arguments.length,K=new Array($>1?$-1:0),Z=1;Z<$;Z++)K[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++){for(var V=0;V<K.length;V++)B[Q]*=K[V][Q]/255;B[Q]=Math.round(B[Q])}return B}function r(Y){for(var B=arguments.length,$=new Array(B>1?B-1:0),K=1;K<B;K++)$[K-1]=arguments[K];for(var Z=0;Z<3;Z++){for(var Q=0;Q<$.length;Q++)Y[Z]*=$[Q][Z]/255;Y[Z]=Math.round(Y[Z])}return Y}function U0(Y,B,$){if($===void 0)$=0.5;var K=Y.slice();for(var Z=0;Z<3;Z++)K[Z]=Math.round(K[Z]+$*(B[Z]-Y[Z]));return K}var o=U0;function A(Y,B,$){if($===void 0)$=0.5;var K=T(Y),Z=T(B);for(var Q=0;Q<3;Q++)K[Q]+=$*(Z[Q]-K[Q]);return i(K)}var f=A;function u(Y,B){if(!(B instanceof Array))B=Math.round(G.getNormal(0,B));var $=Y.slice();for(var K=0;K<3;K++)$[K]+=B instanceof Array?Math.round(G.getNormal(0,B[K])):B;return $}function T(Y){var B=Y[0]/255,$=Y[1]/255,K=Y[2]/255,Z=Math.max(B,$,K),Q=Math.min(B,$,K),V=0,q,X=(Z+Q)/2;if(Z==Q)q=0;else{var L=Z-Q;switch(q=X>0.5?L/(2-Z-Q):L/(Z+Q),Z){case B:V=($-K)/L+($<K?6:0);break;case $:V=(K-B)/L+2;break;case K:V=(B-$)/L+4;break}V/=6}return[V,q,X]}function e(Y,B,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return Y+(B-Y)*6*$;if($<0.5)return B;if($<0.6666666666666666)return Y+(B-Y)*(0.6666666666666666-$)*6;return Y}function i(Y){var B=Y[2];if(Y[1]==0)return B=Math.round(B*255),[B,B,B];else{var $=Y[1],K=B<0.5?B*(1+$):B+$-B*$,Z=2*B-K,Q=e(Z,K,Y[0]+0.3333333333333333),V=e(Z,K,Y[0]),q=e(Z,K,Y[0]-0.3333333333333333);return[Math.round(Q*255),Math.round(V*255),Math.round(q*255)]}}function k(Y){var B=Y.map(function($){return S($,0,255)});return"rgb("+B.join(",")+")"}function v(Y){var B=Y.map(function($){return S($,0,255).toString(16).padStart(2,"0")});return"#"+B.join("")}var E={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},a=Object.freeze({__proto__:null,fromString:m,add:V0,add_:x,multiply:_,multiply_:r,interpolate:U0,lerp:o,interpolateHSL:A,lerpHSL:f,randomize:u,rgb2hsl:T,hsl2rgb:i,toRGB:k,toHex:v}),Z0=function(Y){z0(B,Y);function B(){var K=Y.call(this)||this;K._uniforms={};try{K._gl=K._initWebGL()}catch(Z){if(typeof Z==="string")alert(Z);else if(Z instanceof Error)alert(Z.message)}return K}B.isSupported=function K(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var $=B.prototype;return $.schedule=function K(Z){requestAnimationFrame(Z)},$.getContainer=function K(){return this._gl.canvas},$.setOptions=function K(Z){var Q=this;Y.prototype.setOptions.call(this,Z),this._updateSize();var V=this._options.tileSet;if(V&&"complete"in V&&!V.complete)V.addEventListener("load",function(){return Q._updateTexture(V)});else this._updateTexture(V)},$.draw=function K(Z,Q){var V=this._gl,q=this._options,X=Z[0],L=Z[1],w=Z[2],H=Z[3],D=Z[4],F=V.canvas.height-(L+1)*q.tileHeight;if(V.scissor(X*q.tileWidth,F,q.tileWidth,q.tileHeight),Q){if(q.tileColorize)V.clearColor(0,0,0,0);else V.clearColor.apply(V,r0(D));V.clear(V.COLOR_BUFFER_BIT)}if(!w)return;var M=[].concat(w),j=[].concat(D),O=[].concat(H);V.uniform2fv(this._uniforms.targetPosRel,[X,L]);for(var b=0;b<M.length;b++){var g=this._options.tileMap[M[b]];if(!g)throw new Error('Char "'+M[b]+'" not found in tileMap');if(V.uniform1f(this._uniforms.colorize,q.tileColorize?1:0),V.uniform2fv(this._uniforms.tilesetPosAbs,g),q.tileColorize)V.uniform4fv(this._uniforms.tint,r0(O[b])),V.uniform4fv(this._uniforms.bg,r0(j[b]));V.drawArrays(V.TRIANGLE_STRIP,0,4)}},$.clear=function K(){var Z=this._gl;Z.clearColor.apply(Z,r0(this._options.bg)),Z.scissor(0,0,Z.canvas.width,Z.canvas.height),Z.clear(Z.COLOR_BUFFER_BIT)},$.computeSize=function K(Z,Q){var V=Math.floor(Z/this._options.tileWidth),q=Math.floor(Q/this._options.tileHeight);return[V,q]},$.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},$.eventToPosition=function K(Z,Q){var V=this._gl.canvas,q=V.getBoundingClientRect();if(Z-=q.left,Q-=q.top,Z*=V.width/q.width,Q*=V.height/q.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},$._initWebGL=function K(){var Z=this,Q=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=Q;var V=O0(Q,D0,X0);return Q.useProgram(V),L0(Q),K0.forEach(function(q){return Z._uniforms[q]=Q.getUniformLocation(V,q)}),this._program=V,Q.enable(Q.BLEND),Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA),Q.enable(Q.SCISSOR_TEST),Q},$._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},$._updateSize=function K(){var Z=this._gl,Q=this._options,V=[Q.width*Q.tileWidth,Q.height*Q.tileHeight];Z.canvas.width=V[0],Z.canvas.height=V[1],Z.viewport(0,0,V[0],V[1]),Z.uniform2fv(this._uniforms.tileSize,[Q.tileWidth,Q.tileHeight]),Z.uniform2fv(this._uniforms.targetSize,V)},$._updateTexture=function K(Z){e0(this._gl,Z)},B}(P),K0=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],D0=`
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
}`.trim();function O0(Y,B,$){var K=Y.createShader(Y.VERTEX_SHADER);if(Y.shaderSource(K,B),Y.compileShader(K),!Y.getShaderParameter(K,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(K)||"");var Z=Y.createShader(Y.FRAGMENT_SHADER);if(Y.shaderSource(Z,$),Y.compileShader(Z),!Y.getShaderParameter(Z,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(Z)||"");var Q=Y.createProgram();if(Y.attachShader(Q,K),Y.attachShader(Q,Z),Y.linkProgram(Q),!Y.getProgramParameter(Q,Y.LINK_STATUS))throw new Error(Y.getProgramInfoLog(Q)||"");return Q}function L0(Y){var B=new Float32Array([0,0,1,0,0,1,1,1]),$=Y.createBuffer();Y.bindBuffer(Y.ARRAY_BUFFER,$),Y.bufferData(Y.ARRAY_BUFFER,B,Y.STATIC_DRAW),Y.enableVertexAttribArray(0),Y.vertexAttribPointer(0,2,Y.FLOAT,!1,0,0)}function e0(Y,B){var $=Y.createTexture();return Y.bindTexture(Y.TEXTURE_2D,$),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MAG_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MIN_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_S,Y.REPEAT),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_T,Y.REPEAT),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,0),Y.texImage2D(Y.TEXTURE_2D,0,Y.RGBA,Y.RGBA,Y.UNSIGNED_BYTE,B),$}var S0={};function r0(Y){if(!(Y in S0)){var B;if(Y=="transparent")B=[0,0,0,0];else if(Y.indexOf("rgba")>-1){B=(Y.match(/[\d.]+/g)||[]).map(Number);for(var $=0;$<3;$++)B[$]=B[$]/255}else B=m(Y).map(function(K){return K/255}),B.push(1);S0[Y]=B}return S0[Y]}function WZ(Y){return"\x1B[0;48;5;"+u1(Y)+"m\x1B[2J"}function FZ(Y,B){return"\x1B[0;38;5;"+u1(Y)+";48;5;"+u1(B)+"m"}function RZ(Y,B){return"\x1B["+(B+1)+";"+(Y+1)+"H"}function u1(Y){var B=256,$=6,K=$/B,Z=m(Y),Q=Math.floor(Z[0]*K),V=Math.floor(Z[1]*K),q=Math.floor(Z[2]*K);return Q*36+V*6+q*1+16}var K6=function(Y){z0(B,Y);function B(){var K=Y.call(this)||this;return K._offset=[0,0],K._cursor=[-1,-1],K._lastColor="",K}var $=B.prototype;return $.schedule=function K(Z){setTimeout(Z,16.666666666666668)},$.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z);var Q=[Z.width,Z.height],V=this.computeSize();this._offset=V.map(function(q,X){return Math.floor((q-Q[X])/2)})},$.clear=function K(){process.stdout.write(WZ(this._options.bg))},$.draw=function K(Z,Q){var V=Z[0],q=Z[1],X=Z[2],L=Z[3],w=Z[4],H=this._offset[0]+V,D=this._offset[1]+q,F=this.computeSize();if(H<0||H>=F[0])return;if(D<0||D>=F[1])return;if(H!==this._cursor[0]||D!==this._cursor[1])process.stdout.write(RZ(H,D)),this._cursor[0]=H,this._cursor[1]=D;if(Q){if(!X)X=" "}if(!X)return;var M=FZ(L,w);if(M!==this._lastColor)process.stdout.write(M),this._lastColor=M;if(X!="\t"){var j=[].concat(X);process.stdout.write(j[0])}if(this._cursor[0]++,this._cursor[0]>=F[0])this._cursor[0]=0,this._cursor[1]++},$.computeFontSize=function K(){throw new Error("Terminal backend has no notion of font size")},$.eventToPosition=function K(Z,Q){return[Z,Q]},$.computeSize=function K(){return[process.stdout.columns,process.stdout.rows]},B}(P),MZ=/%([bc]){([^}]*)}/g,b0=0,u0=1,g1=2,T1=3;function jZ(Y,B){var $={width:0,height:1},K=h1(Y,B),Z=0;for(var Q=0;Q<K.length;Q++){var V=K[Q];switch(V.type){case b0:Z+=V.value.length;break;case u0:$.height++,$.width=Math.max($.width,Z),Z=0;break}}return $.width=Math.max($.width,Z),$}function h1(Y,B){var $=[],K=0;Y.replace(MZ,function(Q,V,q,X){var L=Y.substring(K,X);if(L.length)$.push({type:b0,value:L});return $.push({type:V=="c"?g1:T1,value:q.trim()}),K=X+Q.length,""});var Z=Y.substring(K);if(Z.length)$.push({type:b0,value:Z});return OZ($,B)}function OZ(Y,B){if(!B)B=1/0;var $=0,K=0,Z=-1;while($<Y.length){var Q=Y[$];if(Q.type==u0)K=0,Z=-1;if(Q.type!=b0){$++;continue}while(K==0&&Q.value.charAt(0)==" ")Q.value=Q.value.substring(1);var V=Q.value.indexOf(`
`);if(V!=-1){Q.value=X1(Y,$,V,!0);var q=Q.value.split("");while(q.length&&q[q.length-1]==" ")q.pop();Q.value=q.join("")}if(!Q.value.length){Y.splice($,1);continue}if(K+Q.value.length>B){var X=-1;while(!0){var L=Q.value.indexOf(" ",X+1);if(L==-1)break;if(K+L>B)break;X=L}if(X!=-1)Q.value=X1(Y,$,X,!0);else if(Z!=-1){var w=Y[Z],H=w.value.lastIndexOf(" ");w.value=X1(Y,Z,H,!0),$=Z}else Q.value=X1(Y,$,B-K,!1)}else if(K+=Q.value.length,Q.value.indexOf(" ")!=-1)Z=$;$++}Y.push({type:u0});var D=null;for(var F=0;F<Y.length;F++){var M=Y[F];switch(M.type){case b0:D=M;break;case u0:if(D){var j=D.value.split("");while(j.length&&j[j.length-1]==" ")j.pop();D.value=j.join("")}D=null;break}}return Y.pop(),Y}function X1(Y,B,$,K){var Z={type:u0},Q={type:b0,value:Y[B].value.substring($+(K?1:0))};return Y.splice(B+1,0,Z,Q),Y[B].value.substring(0,$)}var CZ=Object.freeze({__proto__:null,TYPE_TEXT:b0,TYPE_NEWLINE:u0,TYPE_FG:g1,TYPE_BG:T1,measure:jZ,tokenize:h1}),x1=80,_1=25,G0={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},AZ={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},EZ={hex:n,rect:Q0,tile:l,"tile-gl":Z0,term:K6},NZ={width:x1,height:_1,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},n0=function(){function Y($){if($===void 0)$={};this._data={},this._dirty=!1,this._options={},$=Object.assign({},NZ,$),this.setOptions($),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var B=Y.prototype;return B.DEBUG=function $(K,Z,Q){var V=[this._options.bg,this._options.fg];this.draw(K,Z,null,null,V[Q%V.length])},B.clear=function $(){this._data={},this._dirty=!0},B.setOptions=function $(K){if(Object.assign(this._options,K),K.width||K.height||K.fontSize||K.fontFamily||K.spacing||K.layout){if(K.layout){var Z=EZ[K.layout];this._backend=new Z}this._backend.setOptions(this._options),this._dirty=!0}return this},B.getOptions=function $(){return this._options},B.getContainer=function $(){return this._backend.getContainer()},B.computeSize=function $(K,Z){return this._backend.computeSize(K,Z)},B.computeFontSize=function $(K,Z){return this._backend.computeFontSize(K,Z)},B.computeTileSize=function $(K,Z){var Q=Math.floor(K/this._options.width),V=Math.floor(Z/this._options.height);return[Q,V]},B.eventToPosition=function $(K){var Z,Q;if("touches"in K)Z=K.touches[0].clientX,Q=K.touches[0].clientY;else Z=K.clientX,Q=K.clientY;return this._backend.eventToPosition(Z,Q)},B.draw=function $(K,Z,Q,V,q){if(!V)V=this._options.fg;if(!q)q=this._options.bg;var X=K+","+Z;if(this._data[X]=[K,Z,Q,V,q],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[X]=!0},B.drawOver=function $(K,Z,Q,V,q){var X=K+","+Z,L=this._data[X];if(L)L[2]=Q||L[2],L[3]=V||L[3],L[4]=q||L[4];else this.draw(K,Z,Q,V,q)},B.drawText=function $(K,Z,Q,V){var q=null,X=null,L=K,w=Z,H=1;if(!V)V=this._options.width-K;var D=h1(Q,V);while(D.length){var F=D.shift();switch(F.type){case b0:var M=!1,j=!1,O=!1,b=!1;for(var g=0;g<F.value.length;g++){var h=F.value.charCodeAt(g),d=F.value.charAt(g);if(this._options.layout==="term"){var t=h>>8,J0=t===17||t>=46&&t<=159||t>=172&&t<=215||h>=43360&&h<=43391;if(J0){this.draw(L+0,w,d,q,X),this.draw(L+1,w,"\t",q,X),L+=2;continue}}if(O=h>65280&&h<65377||h>65500&&h<65512||h>65518,M=d.charCodeAt(0)==32||d.charCodeAt(0)==12288,b&&!O&&!M)L++;if(O&&!j)L++;this.draw(L++,w,d,q,X),j=M,b=O}break;case g1:q=F.value||null;break;case T1:X=F.value||null;break;case u0:L=K,w++,H++;break}}return H},B._tick=function $(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var K in this._data)this._draw(K,!1)}else for(var Z in this._dirty)this._draw(Z,!0);this._dirty=!1},B._draw=function $(K,Z){var Q=this._data[K];if(Q[4]!=this._options.bg)Z=!0;this._backend.draw(Q,Z)},Y}();n0.Rect=Q0,n0.Hex=n,n0.Tile=l,n0.TileGL=Z0,n0.Term=K6;var vZ=function(){function Y($){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,$),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var K=0;K<this._options.order;K++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var B=Y.prototype;return B.clear=function $(){this._data={},this._priorValues={}},B.generate=function $(){var K=[this._sample(this._prefix)];while(K[K.length-1]!=this._boundary)K.push(this._sample(K));return this._join(K.slice(0,-1))},B.observe=function $(K){var Z=this._split(K);for(var Q=0;Q<Z.length;Q++)this._priorValues[Z[Q]]=this._options.prior;Z=this._prefix.concat(Z).concat(this._suffix);for(var V=this._options.order;V<Z.length;V++){var q=Z.slice(V-this._options.order,V),X=Z[V];for(var L=0;L<q.length;L++){var w=q.slice(L);this._observeEvent(w,X)}}},B.getStats=function $(){var K=[],Z=Object.keys(this._priorValues).length;Z--,K.push("distinct samples: "+Z);var Q=Object.keys(this._data).length,V=0;for(var q in this._data)V+=Object.keys(this._data[q]).length;return K.push("dictionary size (contexts): "+Q),K.push("dictionary size (events): "+V),K.join(", ")},B._split=function $(K){return K.split(this._options.words?/\s+/:"")},B._join=function $(K){return K.join(this._options.words?" ":"")},B._observeEvent=function $(K,Z){var Q=this._join(K);if(!(Q in this._data))this._data[Q]={};var V=this._data[Q];if(!(Z in V))V[Z]=0;V[Z]++},B._sample=function $(K){K=this._backoff(K);var Z=this._join(K),Q=this._data[Z],V={};if(this._options.prior){for(var q in this._priorValues)V[q]=this._priorValues[q];for(var X in Q)V[X]+=Q[X]}else V=Q;return G.getWeightedValue(V)},B._backoff=function $(K){if(K.length>this._options.order)K=K.slice(-this._options.order);else if(K.length<this._options.order)K=this._prefix.slice(0,this._options.order-K.length).concat(K);while(!(this._join(K)in this._data)&&K.length>0)K=K.slice(1);return K},Y}(),z6=function(){function Y(){this.heap=[],this.timestamp=0}var B=Y.prototype;return B.lessThan=function $(K,Z){return K.key==Z.key?K.timestamp<Z.timestamp:K.key<Z.key},B.shift=function $(K){this.heap=this.heap.map(function(Z){var{key:Q,value:V,timestamp:q}=Z;return{key:Q+K,value:V,timestamp:q}})},B.len=function $(){return this.heap.length},B.push=function $(K,Z){this.timestamp+=1;var Q=this.len();this.heap.push({value:K,timestamp:this.timestamp,key:Z}),this.updateUp(Q)},B.pop=function $(){if(this.len()==0)throw new Error("no element to pop");var K=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return K},B.find=function $(K){for(var Z=0;Z<this.len();Z++)if(K==this.heap[Z].value)return this.heap[Z];return null},B.remove=function $(K){var Z=null;for(var Q=0;Q<this.len();Q++)if(K==this.heap[Q].value)Z=Q;if(Z===null)return!1;if(this.len()>1){var V=this.heap.pop();if(V.value!=K)this.heap[Z]=V,this.updateDown(Z);return!0}else this.heap.pop();return!0},B.parentNode=function $(K){return Math.floor((K-1)/2)},B.leftChildNode=function $(K){return 2*K+1},B.rightChildNode=function $(K){return 2*K+2},B.existNode=function $(K){return K>=0&&K<this.heap.length},B.swap=function $(K,Z){var Q=this.heap[K];this.heap[K]=this.heap[Z],this.heap[Z]=Q},B.minNode=function $(K){var Z=K.filter(this.existNode.bind(this)),Q=Z[0];for(var V=MJ(Z),q;!(q=V()).done;){var X=q.value;if(this.lessThan(this.heap[X],this.heap[Q]))Q=X}return Q},B.updateUp=function $(K){if(K==0)return;var Z=this.parentNode(K);if(this.existNode(Z)&&this.lessThan(this.heap[K],this.heap[Z]))this.swap(K,Z),this.updateUp(Z)},B.updateDown=function $(K){var Z=this.leftChildNode(K),Q=this.rightChildNode(K);if(!this.existNode(Z))return;var V=this.minNode([K,Z,Q]);if(V!=K)this.swap(K,V),this.updateDown(V)},B.debugPrint=function $(){console.log(this.heap)},Y}(),q6=function(){function Y(){this._time=0,this._events=new z6}var B=Y.prototype;return B.getTime=function $(){return this._time},B.clear=function $(){return this._events=new z6,this},B.add=function $(K,Z){this._events.push(K,Z)},B.get=function $(){if(!this._events.len())return null;var K=this._events.pop(),Z=K.key,Q=K.value;if(Z>0)this._time+=Z,this._events.shift(-Z);return Q},B.getEventTime=function $(K){var Z=this._events.find(K);if(Z){var Q=Z.key;return Q}return},B.remove=function $(K){return this._events.remove(K)},Y}(),m1=function(){function Y(){this._queue=new q6,this._repeat=[],this._current=null}var B=Y.prototype;return B.getTime=function $(){return this._queue.getTime()},B.add=function $(K,Z){if(Z)this._repeat.push(K);return this},B.getTimeOf=function $(K){return this._queue.getEventTime(K)},B.clear=function $(){return this._queue.clear(),this._repeat=[],this._current=null,this},B.remove=function $(K){var Z=this._queue.remove(K),Q=this._repeat.indexOf(K);if(Q!=-1)this._repeat.splice(Q,1);if(this._current==K)this._current=null;return Z},B.next=function $(){return this._current=this._queue.get(),this._current},Y}(),SZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var $=B.prototype;return $.add=function K(Z,Q){return this._queue.add(Z,0),Y.prototype.add.call(this,Z,Q)},$.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return Y.prototype.next.call(this)},B}(m1),bZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var $=B.prototype;return $.add=function K(Z,Q,V){return this._queue.add(Z,V!==void 0?V:1/Z.getSpeed()),Y.prototype.add.call(this,Z,Q)},$.next=function K(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return Y.prototype.next.call(this)},B}(m1),IZ=function(Y){z0(B,Y);function B(){var K=Y.call(this)||this;return K._defaultDuration=1,K._duration=K._defaultDuration,K}var $=B.prototype;return $.add=function K(Z,Q,V){return this._queue.add(Z,V||this._defaultDuration),Y.prototype.add.call(this,Z,Q)},$.clear=function K(){return this._duration=this._defaultDuration,Y.prototype.clear.call(this)},$.remove=function K(Z){if(Z==this._current)this._duration=this._defaultDuration;return Y.prototype.remove.call(this,Z)},$.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return Y.prototype.next.call(this)},$.setDuration=function K(Z){if(this._current)this._duration=Z;return this},B}(m1),kZ={Simple:SZ,Speed:bZ,Action:IZ},c1=function(){function Y($,K){if(K===void 0)K={};this._lightPasses=$,this._options=Object.assign({topology:8},K)}var B=Y.prototype;return B._getCircle=function $(K,Z,Q){var V=[],q,X,L;switch(this._options.topology){case 4:X=1,L=[0,1],q=[G0[8][7],G0[8][1],G0[8][3],G0[8][5]];break;case 6:q=G0[6],X=1,L=[-1,1];break;case 8:q=G0[4],X=2,L=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var w=K+L[0]*Q,H=Z+L[1]*Q;for(var D=0;D<q.length;D++)for(var F=0;F<Q*X;F++)V.push([w,H]),w+=q[D][0],H+=q[D][1];return V},Y}(),fZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var $=B.prototype;return $.compute=function K(Z,Q,V,q){if(q(Z,Q,0,1),!this._lightPasses(Z,Q))return;var X=[],L,w,H,D,F;for(var M=1;M<=V;M++){var j=this._getCircle(Z,Q,M),O=360/j.length;for(var b=0;b<j.length;b++){if(H=j[b][0],D=j[b][1],L=O*(b-0.5),w=L+O,F=!this._lightPasses(H,D),this._visibleCoords(Math.floor(L),Math.ceil(w),F,X))q(H,D,M,1);if(X.length==2&&X[0]==0&&X[1]==360)return}}},$._visibleCoords=function K(Z,Q,V,q){if(Z<0){var X=this._visibleCoords(0,Q,V,q),L=this._visibleCoords(360+Z,360,V,q);return X||L}var w=0;while(w<q.length&&q[w]<Z)w++;if(w==q.length){if(V)q.push(Z,Q);return!0}var H=0;if(w%2){while(w<q.length&&q[w]<Q)w++,H++;if(H==0)return!1;if(V)if(H%2)q.splice(w-H,H,Q);else q.splice(w-H,H);return!0}else{while(w<q.length&&q[w]<Q)w++,H++;if(Z==q[w-H]&&H==1)return!1;if(V)if(H%2)q.splice(w-H,H,Z);else q.splice(w-H,H,Z,Q);return!0}},B}(c1),uZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var $=B.prototype;return $.compute=function K(Z,Q,V,q){if(q(Z,Q,0,1),!this._lightPasses(Z,Q))return;var X=[],L,w,H,D,F,M;for(var j=1;j<=V;j++){var O=this._getCircle(Z,Q,j),b=O.length;for(var g=0;g<b;g++){if(L=O[g][0],w=O[g][1],D=[g?2*g-1:2*b-1,2*b],F=[2*g+1,2*b],H=!this._lightPasses(L,w),M=this._checkVisibility(D,F,H,X),M)q(L,w,j,M);if(X.length==2&&X[0][0]==0&&X[1][0]==X[1][1])return}}},$._checkVisibility=function K(Z,Q,V,q){if(Z[0]>Q[0]){var X=this._checkVisibility(Z,[Z[1],Z[1]],V,q),L=this._checkVisibility([0,1],Q,V,q);return(X+L)/2}var w=0,H=!1;while(w<q.length){var D=q[w],F=D[0]*Z[1]-Z[0]*D[1];if(F>=0){if(F==0&&!(w%2))H=!0;break}w++}var M=q.length,j=!1;while(M--){var O=q[M],b=Q[0]*O[1]-O[0]*Q[1];if(b>=0){if(b==0&&M%2)j=!0;break}}var g=!0;if(w==M&&(H||j))g=!1;else if(H&&j&&w+1==M&&M%2)g=!1;else if(w>M&&w%2)g=!1;if(!g)return 0;var h,d=M-w+1;if(d%2)if(w%2){var t=q[w];if(h=(Q[0]*t[1]-t[0]*Q[1])/(t[1]*Q[1]),V)q.splice(w,d,Q)}else{var J0=q[M];if(h=(J0[0]*Z[1]-Z[0]*J0[1])/(Z[1]*J0[1]),V)q.splice(w,d,Z)}else if(w%2){var $0=q[w],H0=q[M];if(h=(H0[0]*$0[1]-$0[0]*H0[1])/($0[1]*H0[1]),V)q.splice(w,d)}else{if(V)q.splice(w,d,Z,Q);return 1}var C0=(Q[0]*Z[1]-Z[0]*Q[1])/(Z[1]*Q[1]);return h/C0},B}(c1),I0=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],gZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var $=B.prototype;return $.compute=function K(Z,Q,V,q){q(Z,Q,0,1);for(var X=0;X<I0.length;X++)this._renderOctant(Z,Q,I0[X],V,q)},$.compute180=function K(Z,Q,V,q,X){X(Z,Q,0,1);var L=(q-1+8)%8,w=(q-2+8)%8,H=(q+1+8)%8;this._renderOctant(Z,Q,I0[w],V,X),this._renderOctant(Z,Q,I0[L],V,X),this._renderOctant(Z,Q,I0[q],V,X),this._renderOctant(Z,Q,I0[H],V,X)},$.compute90=function K(Z,Q,V,q,X){X(Z,Q,0,1);var L=(q-1+8)%8;this._renderOctant(Z,Q,I0[q],V,X),this._renderOctant(Z,Q,I0[L],V,X)},$._renderOctant=function K(Z,Q,V,q,X){this._castVisibility(Z,Q,1,1,0,q+1,V[0],V[1],V[2],V[3],X)},$._castVisibility=function K(Z,Q,V,q,X,L,w,H,D,F,M){if(q<X)return;for(var j=V;j<=L;j++){var O=-j-1,b=-j,g=!1,h=0;while(O<=0){O+=1;var d=Z+O*w+b*H,t=Q+O*D+b*F,J0=(O-0.5)/(b+0.5),$0=(O+0.5)/(b-0.5);if($0>q)continue;if(J0<X)break;if(O*O+b*b<L*L)M(d,t,j,1);if(!g){if(!this._lightPasses(d,t)&&j<L)g=!0,this._castVisibility(Z,Q,j+1,q,J0,L,w,H,D,F,M),h=$0}else{if(!this._lightPasses(d,t)){h=$0;continue}g=!1,q=h}}if(g)break}},B}(c1),TZ={DiscreteShadowcasting:fZ,PreciseShadowcasting:uZ,RecursiveShadowcasting:gZ},g0=function(){function Y($,K){if($===void 0)$=x1;if(K===void 0)K=_1;this._width=$,this._height=K}var B=Y.prototype;return B._fillMap=function $(K){var Z=[];for(var Q=0;Q<this._width;Q++){Z.push([]);for(var V=0;V<this._height;V++)Z[Q].push(K)}return Z},Y}(),hZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var $=B.prototype;return $.create=function K(Z){var Q=this._width-1,V=this._height-1;for(var q=0;q<=Q;q++)for(var X=0;X<=V;X++){var L=q&&X&&q<Q&&X<V;Z(q,X,L?0:1)}return this},B}(g0),U6=function(Y){z0(B,Y);function B(K,Z){var Q=Y.call(this,K,Z)||this;return Q._rooms=[],Q._corridors=[],Q}var $=B.prototype;return $.getRooms=function K(){return this._rooms},$.getCorridors=function K(){return this._corridors},B}(g0),$6=function Y(){},G1=function(Y){z0(B,Y);function B(K,Z,Q,V,q,X){var L=Y.call(this)||this;if(L._x1=K,L._y1=Z,L._x2=Q,L._y2=V,L._doors={},q!==void 0&&X!==void 0)L.addDoor(q,X);return L}B.createRandomAt=function K(Z,Q,V,q,X){var L=X.roomWidth[0],w=X.roomWidth[1],H=G.getUniformInt(L,w);L=X.roomHeight[0],w=X.roomHeight[1];var D=G.getUniformInt(L,w);if(V==1){var F=Q-Math.floor(G.getUniform()*D);return new this(Z+1,F,Z+H,F+D-1,Z,Q)}if(V==-1){var M=Q-Math.floor(G.getUniform()*D);return new this(Z-H,M,Z-1,M+D-1,Z,Q)}if(q==1){var j=Z-Math.floor(G.getUniform()*H);return new this(j,Q+1,j+H-1,Q+D,Z,Q)}if(q==-1){var O=Z-Math.floor(G.getUniform()*H);return new this(O,Q-D,O+H-1,Q-1,Z,Q)}throw new Error("dx or dy must be 1 or -1")},B.createRandomCenter=function K(Z,Q,V){var q=V.roomWidth[0],X=V.roomWidth[1],L=G.getUniformInt(q,X);q=V.roomHeight[0],X=V.roomHeight[1];var w=G.getUniformInt(q,X),H=Z-Math.floor(G.getUniform()*L),D=Q-Math.floor(G.getUniform()*w),F=H+L-1,M=D+w-1;return new this(H,D,F,M)},B.createRandom=function K(Z,Q,V){var q=V.roomWidth[0],X=V.roomWidth[1],L=G.getUniformInt(q,X);q=V.roomHeight[0],X=V.roomHeight[1];var w=G.getUniformInt(q,X),H=Z-L-1,D=Q-w-1,F=1+Math.floor(G.getUniform()*H),M=1+Math.floor(G.getUniform()*D),j=F+L-1,O=M+w-1;return new this(F,M,j,O)};var $=B.prototype;return $.addDoor=function K(Z,Q){return this._doors[Z+","+Q]=1,this},$.getDoors=function K(Z){for(var Q in this._doors){var V=Q.split(",");Z(parseInt(V[0]),parseInt(V[1]))}return this},$.clearDoors=function K(){return this._doors={},this},$.addDoors=function K(Z){var Q=this._x1-1,V=this._x2+1,q=this._y1-1,X=this._y2+1;for(var L=Q;L<=V;L++)for(var w=q;w<=X;w++){if(L!=Q&&L!=V&&w!=q&&w!=X)continue;if(Z(L,w))continue;this.addDoor(L,w)}return this},$.debug=function K(){console.log("room",this._x1,this._y1,this._x2,this._y2)},$.isValid=function K(Z,Q){var V=this._x1-1,q=this._x2+1,X=this._y1-1,L=this._y2+1;for(var w=V;w<=q;w++)for(var H=X;H<=L;H++)if(w==V||w==q||H==X||H==L){if(!Z(w,H))return!1}else if(!Q(w,H))return!1;return!0},$.create=function K(Z){var Q=this._x1-1,V=this._x2+1,q=this._y1-1,X=this._y2+1,L=0;for(var w=Q;w<=V;w++)for(var H=q;H<=X;H++){if(w+","+H in this._doors)L=2;else if(w==Q||w==V||H==q||H==X)L=1;else L=0;Z(w,H,L)}},$.getCenter=function K(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},$.getLeft=function K(){return this._x1},$.getRight=function K(){return this._x2},$.getTop=function K(){return this._y1},$.getBottom=function K(){return this._y2},B}($6),y1=function(Y){z0(B,Y);function B(K,Z,Q,V){var q=Y.call(this)||this;return q._startX=K,q._startY=Z,q._endX=Q,q._endY=V,q._endsWithAWall=!0,q}B.createRandomAt=function K(Z,Q,V,q,X){var L=X.corridorLength[0],w=X.corridorLength[1],H=G.getUniformInt(L,w);return new this(Z,Q,Z+V*H,Q+q*H)};var $=B.prototype;return $.debug=function K(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},$.isValid=function K(Z,Q){var V=this._startX,q=this._startY,X=this._endX-V,L=this._endY-q,w=1+Math.max(Math.abs(X),Math.abs(L));if(X)X=X/Math.abs(X);if(L)L=L/Math.abs(L);var H=L,D=-X,F=!0;for(var M=0;M<w;M++){var j=V+M*X,O=q+M*L;if(!Q(j,O))F=!1;if(!Z(j+H,O+D))F=!1;if(!Z(j-H,O-D))F=!1;if(!F){w=M,this._endX=j-X,this._endY=O-L;break}}if(w==0)return!1;if(w==1&&Z(this._endX+X,this._endY+L))return!1;var b=!Z(this._endX+X+H,this._endY+L+D),g=!Z(this._endX+X-H,this._endY+L-D);if(this._endsWithAWall=Z(this._endX+X,this._endY+L),(b||g)&&this._endsWithAWall)return!1;return!0},$.create=function K(Z){var Q=this._startX,V=this._startY,q=this._endX-Q,X=this._endY-V,L=1+Math.max(Math.abs(q),Math.abs(X));if(q)q=q/Math.abs(q);if(X)X=X/Math.abs(X);for(var w=0;w<L;w++){var H=Q+w*q,D=V+w*X;Z(H,D,0)}return!0},$.createPriorityWalls=function K(Z){if(!this._endsWithAWall)return;var Q=this._startX,V=this._startY,q=this._endX-Q,X=this._endY-V;if(q)q=q/Math.abs(q);if(X)X=X/Math.abs(X);var L=X,w=-q;Z(this._endX+q,this._endY+X),Z(this._endX+L,this._endY+w),Z(this._endX-L,this._endY-w)},B}($6),xZ=function(Y){z0(B,Y);function B(K,Z,Q){var V=Y.call(this,K,Z)||this;return V._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(V._options,Q),V._map=[],V._dug=0,V._roomAttempts=20,V._corridorAttempts=20,V._connected=[],V._unconnected=[],V._digCallback=V._digCallback.bind(y0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(y0(V)),V._isWallCallback=V._isWallCallback.bind(y0(V)),V}var $=B.prototype;return $.create=function K(Z){var Q=Date.now();while(!0){var V=Date.now();if(V-Q>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(Z)for(var q=0;q<this._width;q++)for(var X=0;X<this._height;X++)Z(q,X,this._map[q][X]);return this},$._generateRooms=function K(){var Z=this._width-2,Q=this._height-2,V;do if(V=this._generateRoom(),this._dug/(Z*Q)>this._options.roomDugPercentage)break;while(V)},$._generateRoom=function K(){var Z=0;while(Z<this._roomAttempts){Z++;var Q=G1.createRandom(this._width,this._height,this._options);if(!Q.isValid(this._isWallCallback,this._canBeDugCallback))continue;return Q.create(this._digCallback),this._rooms.push(Q),Q}return null},$._generateCorridors=function K(){var Z=0;while(Z<this._corridorAttempts){Z++,this._corridors=[],this._map=this._fillMap(1);for(var Q=0;Q<this._rooms.length;Q++){var V=this._rooms[Q];V.clearDoors(),V.create(this._digCallback)}if(this._unconnected=G.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var q=G.getItem(this._connected);if(!q)break;var X=this._closestRoom(this._unconnected,q);if(!X)break;var L=this._closestRoom(this._connected,X);if(!L)break;var w=this._connectRooms(X,L);if(!w)break;if(!this._unconnected.length)return!0}}return!1},$._closestRoom=function K(Z,Q){var V=1/0,q=Q.getCenter(),X=null;for(var L=0;L<Z.length;L++){var w=Z[L],H=w.getCenter(),D=H[0]-q[0],F=H[1]-q[1],M=D*D+F*F;if(M<V)V=M,X=w}return X},$._connectRooms=function K(Z,Q){var V=Z.getCenter(),q=Q.getCenter(),X=q[0]-V[0],L=q[1]-V[1],w,H,D,F,M,j,O;if(Math.abs(X)<Math.abs(L))D=L>0?2:0,F=(D+2)%4,M=Q.getLeft(),j=Q.getRight(),O=0;else D=X>0?1:3,F=(D+2)%4,M=Q.getTop(),j=Q.getBottom(),O=1;if(w=this._placeInWall(Z,D),!w)return!1;if(w[O]>=M&&w[O]<=j){H=w.slice();var b=0;switch(F){case 0:b=Q.getTop()-1;break;case 1:b=Q.getRight()+1;break;case 2:b=Q.getBottom()+1;break;case 3:b=Q.getLeft()-1;break}H[(O+1)%2]=b,this._digLine([w,H])}else if(w[O]<M-1||w[O]>j+1){var g=w[O]-q[O],h=0;switch(F){case 0:case 1:h=g<0?3:1;break;case 2:case 3:h=g<0?1:3;break}if(F=(F+h)%4,H=this._placeInWall(Q,F),!H)return!1;var d=[0,0];d[O]=w[O];var t=(O+1)%2;d[t]=H[t],this._digLine([w,d,H])}else{var J0=(O+1)%2;if(H=this._placeInWall(Q,F),!H)return!1;var $0=Math.round((H[J0]+w[J0])/2),H0=[0,0],C0=[0,0];H0[O]=w[O],H0[J0]=$0,C0[O]=H[O],C0[J0]=$0,this._digLine([w,H0,C0,H])}if(Z.addDoor(w[0],w[1]),Q.addDoor(H[0],H[1]),O=this._unconnected.indexOf(Z),O!=-1)this._unconnected.splice(O,1),this._connected.push(Z);if(O=this._unconnected.indexOf(Q),O!=-1)this._unconnected.splice(O,1),this._connected.push(Q);return!0},$._placeInWall=function K(Z,Q){var V=[0,0],q=[0,0],X=0;switch(Q){case 0:q=[1,0],V=[Z.getLeft(),Z.getTop()-1],X=Z.getRight()-Z.getLeft()+1;break;case 1:q=[0,1],V=[Z.getRight()+1,Z.getTop()],X=Z.getBottom()-Z.getTop()+1;break;case 2:q=[1,0],V=[Z.getLeft(),Z.getBottom()+1],X=Z.getRight()-Z.getLeft()+1;break;case 3:q=[0,1],V=[Z.getLeft()-1,Z.getTop()],X=Z.getBottom()-Z.getTop()+1;break}var L=[],w=-2;for(var H=0;H<X;H++){var D=V[0]+H*q[0],F=V[1]+H*q[1];L.push(null);var M=this._map[D][F]==1;if(M){if(w!=H-1)L[H]=[D,F]}else if(w=H,H)L[H-1]=null}for(var j=L.length-1;j>=0;j--)if(!L[j])L.splice(j,1);return L.length?G.getItem(L):null},$._digLine=function K(Z){for(var Q=1;Q<Z.length;Q++){var V=Z[Q-1],q=Z[Q],X=new y1(V[0],V[1],q[0],q[1]);X.create(this._digCallback),this._corridors.push(X)}},$._digCallback=function K(Z,Q,V){if(this._map[Z][Q]=V,V==0)this._dug++},$._isWallCallback=function K(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},$._canBeDugCallback=function K(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},B}(U6),_Z=function(Y){z0(B,Y);function B(K,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,K,Z)||this,V._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},V.setOptions(Q),V._dirs=G0[V._options.topology],V._map=V._fillMap(0),V}var $=B.prototype;return $.randomize=function K(Z){for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)this._map[Q][V]=G.getUniform()<Z?1:0;return this},$.setOptions=function K(Z){Object.assign(this._options,Z)},$.set=function K(Z,Q,V){this._map[Z][Q]=V},$.create=function K(Z){var Q=this._fillMap(0),V=this._options.born,q=this._options.survive;for(var X=0;X<this._height;X++){var L=1,w=0;if(this._options.topology==6)L=2,w=X%2;for(var H=w;H<this._width;H+=L){var D=this._map[H][X],F=this._getNeighbors(H,X);if(D&&q.indexOf(F)!=-1)Q[H][X]=1;else if(!D&&V.indexOf(F)!=-1)Q[H][X]=1}}this._map=Q,Z&&this._serviceCallback(Z)},$._serviceCallback=function K(Z){for(var Q=0;Q<this._height;Q++){var V=1,q=0;if(this._options.topology==6)V=2,q=Q%2;for(var X=q;X<this._width;X+=V)Z(X,Q,this._map[X][Q])}},$._getNeighbors=function K(Z,Q){var V=0;for(var q=0;q<this._dirs.length;q++){var X=this._dirs[q],L=Z+X[0],w=Q+X[1];if(L<0||L>=this._width||w<0||w>=this._height)continue;V+=this._map[L][w]==1?1:0}return V},$.connect=function K(Z,Q,V){if(!Q)Q=0;var q=[],X={},L=1,w=[0,0];if(this._options.topology==6)L=2,w=[0,1];for(var H=0;H<this._height;H++)for(var D=w[H%2];D<this._width;D+=L)if(this._freeSpace(D,H,Q)){var F=[D,H];X[this._pointKey(F)]=F,q.push([D,H])}var M=q[G.getUniformInt(0,q.length-1)],j=this._pointKey(M),O={};O[j]=M,delete X[j],this._findConnected(O,X,[M],!1,Q);while(Object.keys(X).length>0){var b=this._getFromTo(O,X),g=b[0],h=b[1],d={};d[this._pointKey(g)]=g,this._findConnected(d,X,[g],!0,Q);var t=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;t.call(this,h,g,O,X,Q,V);for(var J0 in d){var $0=d[J0];this._map[$0[0]][$0[1]]=Q,O[J0]=$0,delete X[J0]}}Z&&this._serviceCallback(Z)},$._getFromTo=function K(Z,Q){var V=[0,0],q=[0,0],X,L=Object.keys(Z),w=Object.keys(Q);for(var H=0;H<5;H++){if(L.length<w.length){var D=L;q=Z[D[G.getUniformInt(0,D.length-1)]],V=this._getClosest(q,Q)}else{var F=w;V=Q[F[G.getUniformInt(0,F.length-1)]],q=this._getClosest(V,Z)}if(X=(V[0]-q[0])*(V[0]-q[0])+(V[1]-q[1])*(V[1]-q[1]),X<64)break}return[V,q]},$._getClosest=function K(Z,Q){var V=null,q=null;for(var X in Q){var L=Q[X],w=(L[0]-Z[0])*(L[0]-Z[0])+(L[1]-Z[1])*(L[1]-Z[1]);if(q==null||w<q)q=w,V=L}return V},$._findConnected=function K(Z,Q,V,q,X){while(V.length>0){var L=V.splice(0,1)[0],w=void 0;if(this._options.topology==6)w=[[L[0]+2,L[1]],[L[0]+1,L[1]-1],[L[0]-1,L[1]-1],[L[0]-2,L[1]],[L[0]-1,L[1]+1],[L[0]+1,L[1]+1]];else w=[[L[0]+1,L[1]],[L[0]-1,L[1]],[L[0],L[1]+1],[L[0],L[1]-1]];for(var H=0;H<w.length;H++){var D=this._pointKey(w[H]);if(Z[D]==null&&this._freeSpace(w[H][0],w[H][1],X)){if(Z[D]=w[H],!q)delete Q[D];V.push(w[H])}}}},$._tunnelToConnected=function K(Z,Q,V,q,X,L){var w,H;if(Q[0]<Z[0])w=Q,H=Z;else w=Z,H=Q;for(var D=w[0];D<=H[0];D++){this._map[D][w[1]]=X;var F=[D,w[1]],M=this._pointKey(F);V[M]=F,delete q[M]}if(L&&w[0]<H[0])L(w,[H[0],w[1]]);var j=H[0];if(Q[1]<Z[1])w=Q,H=Z;else w=Z,H=Q;for(var O=w[1];O<H[1];O++){this._map[j][O]=X;var b=[j,O],g=this._pointKey(b);V[g]=b,delete q[g]}if(L&&w[1]<H[1])L([H[0],w[1]],[H[0],H[1]])},$._tunnelToConnected6=function K(Z,Q,V,q,X,L){var w,H;if(Q[0]<Z[0])w=Q,H=Z;else w=Z,H=Q;var D=w[0],F=w[1];while(!(D==H[0]&&F==H[1])){var M=2;if(F<H[1])F++,M=1;else if(F>H[1])F--,M=1;if(D<H[0])D+=M;else if(D>H[0])D-=M;else if(H[1]%2)D-=M;else D+=M;this._map[D][F]=X;var j=[D,F],O=this._pointKey(j);V[O]=j,delete q[O]}if(L)L(Q,Z)},$._freeSpace=function K(Z,Q,V){return Z>=0&&Z<this._width&&Q>=0&&Q<this._height&&this._map[Z][Q]==V},$._pointKey=function K(Z){return Z[0]+"."+Z[1]},B}(g0),mZ={room:G1,corridor:y1},cZ=function(Y){z0(B,Y);function B(K,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,K,Z)||this,V._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},Q),V._features={room:4,corridor:4},V._map=[],V._featureAttempts=20,V._walls={},V._dug=0,V._digCallback=V._digCallback.bind(y0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(y0(V)),V._isWallCallback=V._isWallCallback.bind(y0(V)),V._priorityWallCallback=V._priorityWallCallback.bind(y0(V)),V}var $=B.prototype;return $.create=function K(Z){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var Q=(this._width-2)*(this._height-2);this._firstRoom();var V=Date.now(),q;do{q=0;var X=Date.now();if(X-V>this._options.timeLimit)break;var L=this._findWall();if(!L)break;var w=L.split(","),H=parseInt(w[0]),D=parseInt(w[1]),F=this._getDiggingDirection(H,D);if(!F)continue;var M=0;do if(M++,this._tryFeature(H,D,F[0],F[1])){this._removeSurroundingWalls(H,D),this._removeSurroundingWalls(H-F[0],D-F[1]);break}while(M<this._featureAttempts);for(var j in this._walls)if(this._walls[j]>1)q++}while(this._dug/Q<this._options.dugPercentage||q);if(this._addDoors(),Z)for(var O=0;O<this._width;O++)for(var b=0;b<this._height;b++)Z(O,b,this._map[O][b]);return this._walls={},this._map=[],this},$._digCallback=function K(Z,Q,V){if(V==0||V==2)this._map[Z][Q]=0,this._dug++;else this._walls[Z+","+Q]=1},$._isWallCallback=function K(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},$._canBeDugCallback=function K(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},$._priorityWallCallback=function K(Z,Q){this._walls[Z+","+Q]=2},$._firstRoom=function K(){var Z=Math.floor(this._width/2),Q=Math.floor(this._height/2),V=G1.createRandomCenter(Z,Q,this._options);this._rooms.push(V),V.create(this._digCallback)},$._findWall=function K(){var Z=[],Q=[];for(var V in this._walls){var q=this._walls[V];if(q==2)Q.push(V);else Z.push(V)}var X=Q.length?Q:Z;if(!X.length)return null;var L=G.getItem(X.sort());return delete this._walls[L],L},$._tryFeature=function K(Z,Q,V,q){var X=G.getWeightedValue(this._features),L=mZ[X],w=L.createRandomAt(Z,Q,V,q,this._options);if(!w.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(w.create(this._digCallback),w instanceof G1)this._rooms.push(w);if(w instanceof y1)w.createPriorityWalls(this._priorityWallCallback),this._corridors.push(w);return!0},$._removeSurroundingWalls=function K(Z,Q){var V=G0[4];for(var q=0;q<V.length;q++){var X=V[q],L=Z+X[0],w=Q+X[1];delete this._walls[L+","+w],L=Z+2*X[0],w=Q+2*X[1],delete this._walls[L+","+w]}},$._getDiggingDirection=function K(Z,Q){if(Z<=0||Q<=0||Z>=this._width-1||Q>=this._height-1)return null;var V=null,q=G0[4];for(var X=0;X<q.length;X++){var L=q[X],w=Z+L[0],H=Q+L[1];if(!this._map[w][H]){if(V)return null;V=L}}if(!V)return null;return[-V[0],-V[1]]},$._addDoors=function K(){var Z=this._map;function Q(X,L){return Z[X][L]==1}for(var V=0;V<this._rooms.length;V++){var q=this._rooms[V];q.clearDoors(),q.addDoors(Q)}},B}(U6);function X6(Y,B,$){$[B[Y+1]]=$[Y],B[$[Y]]=B[Y+1],$[Y]=Y+1,B[Y+1]=Y}function G6(Y,B,$){$[B[Y]]=$[Y],B[$[Y]]=B[Y],$[Y]=Y,B[Y]=Y}var yZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var $=B.prototype;return $.create=function K(Z){var Q=this._fillMap(1),V=Math.ceil((this._width-2)/2),q=0.375,X=[],L=[];for(var w=0;w<V;w++)X.push(w),L.push(w);X.push(V-1);var H;for(H=1;H+3<this._height;H+=2)for(var D=0;D<V;D++){var F=2*D+1,M=H;if(Q[F][M]=0,D!=X[D+1]&&G.getUniform()>q)X6(D,X,L),Q[F+1][M]=0;if(D!=X[D]&&G.getUniform()>q)G6(D,X,L);else Q[F][M+1]=0}for(var j=0;j<V;j++){var O=2*j+1,b=H;if(Q[O][b]=0,j!=X[j+1]&&(j==X[j]||G.getUniform()>q))X6(j,X,L),Q[O+1][b]=0;G6(j,X,L)}for(var g=0;g<this._width;g++)for(var h=0;h<this._height;h++)Z(g,h,Q[g][h]);return this},B}(g0),dZ=function(Y){z0(B,Y);function B(){var K=Y.apply(this,arguments)||this;return K._stack=[],K._map=[],K}var $=B.prototype;return $.create=function K(Z){var Q=this._width,V=this._height;this._map=[];for(var q=0;q<Q;q++){this._map.push([]);for(var X=0;X<V;X++){var L=q==0||X==0||q+1==Q||X+1==V;this._map[q].push(L?1:0)}}this._stack=[[1,1,Q-2,V-2]],this._process();for(var w=0;w<Q;w++)for(var H=0;H<V;H++)Z(w,H,this._map[w][H]);return this._map=[],this},$._process=function K(){while(this._stack.length){var Z=this._stack.shift();this._partitionRoom(Z)}},$._partitionRoom=function K(Z){var Q=[],V=[];for(var q=Z[0]+1;q<Z[2];q++){var X=this._map[q][Z[1]-1],L=this._map[q][Z[3]+1];if(X&&L&&!(q%2))Q.push(q)}for(var w=Z[1]+1;w<Z[3];w++){var H=this._map[Z[0]-1][w],D=this._map[Z[2]+1][w];if(H&&D&&!(w%2))V.push(w)}if(!Q.length||!V.length)return;var F=G.getItem(Q),M=G.getItem(V);this._map[F][M]=1;var j=[],O=[];j.push(O);for(var b=Z[0];b<F;b++)if(this._map[b][M]=1,b%2)O.push([b,M]);O=[],j.push(O);for(var g=F+1;g<=Z[2];g++)if(this._map[g][M]=1,g%2)O.push([g,M]);O=[],j.push(O);for(var h=Z[1];h<M;h++)if(this._map[F][h]=1,h%2)O.push([F,h]);O=[],j.push(O);for(var d=M+1;d<=Z[3];d++)if(this._map[F][d]=1,d%2)O.push([F,d]);var t=G.getItem(j);for(var J0=0;J0<j.length;J0++){var $0=j[J0];if($0==t)continue;var H0=G.getItem($0);this._map[H0[0]][H0[1]]=0}this._stack.push([Z[0],Z[1],F-1,M-1]),this._stack.push([F+1,Z[1],Z[2],M-1]),this._stack.push([Z[0],M+1,F-1,Z[3]]),this._stack.push([F+1,M+1,Z[2],Z[3]])},B}(g0),pZ=function(Y){z0(B,Y);function B(K,Z,Q){var V;if(Q===void 0)Q=0;return V=Y.call(this,K,Z)||this,V._regularity=Q,V._map=[],V}var $=B.prototype;return $.create=function K(Z){var Q=this._width,V=this._height,q=this._fillMap(1);Q-=Q%2?1:2,V-=V%2?1:2;var X=0,L=0,w=0,H=0,D=0,F=!1,M=[[0,0],[0,0],[0,0],[0,0]];do{if(X=1+2*Math.floor(G.getUniform()*(Q-1)/2),L=1+2*Math.floor(G.getUniform()*(V-1)/2),!D)q[X][L]=0;if(!q[X][L]){this._randomize(M);do{if(Math.floor(G.getUniform()*(this._regularity+1))==0)this._randomize(M);F=!0;for(var j=0;j<4;j++)if(w=X+M[j][0]*2,H=L+M[j][1]*2,this._isFree(q,w,H,Q,V)){q[w][H]=0,q[X+M[j][0]][L+M[j][1]]=0,X=w,L=H,F=!1,D++;break}}while(!F)}}while(D+1<Q*V/4);for(var O=0;O<this._width;O++)for(var b=0;b<this._height;b++)Z(O,b,q[O][b]);return this._map=[],this},$._randomize=function K(Z){for(var Q=0;Q<4;Q++)Z[Q][0]=0,Z[Q][1]=0;switch(Math.floor(G.getUniform()*4)){case 0:Z[0][0]=-1,Z[1][0]=1,Z[2][1]=-1,Z[3][1]=1;break;case 1:Z[3][0]=-1,Z[2][0]=1,Z[1][1]=-1,Z[0][1]=1;break;case 2:Z[2][0]=-1,Z[3][0]=1,Z[0][1]=-1,Z[1][1]=1;break;case 3:Z[1][0]=-1,Z[0][0]=1,Z[3][1]=-1,Z[2][1]=1;break}},$._isFree=function K(Z,Q,V,q,X){if(Q<1||V<1||Q>=q||V>=X)return!1;return Z[Q][V]},B}(g0),lZ=function(Y){z0(B,Y);function B(K,Z,Q){var V=Y.call(this,K,Z)||this;if(V.map=[],V.rooms=[],V.connectedCells=[],Q=Object.assign({cellWidth:3,cellHeight:3},Q),!Q.hasOwnProperty("roomWidth"))Q.roomWidth=V._calculateRoomSize(V._width,Q.cellWidth);if(!Q.hasOwnProperty("roomHeight"))Q.roomHeight=V._calculateRoomSize(V._height,Q.cellHeight);return V._options=Q,V}var $=B.prototype;return $.create=function K(Z){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),Z)for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)Z(Q,V,this.map[Q][V]);return this},$._calculateRoomSize=function K(Z,Q){var V=Math.floor(Z/Q*0.8),q=Math.floor(Z/Q*0.25);if(q<2)q=2;if(V<2)V=2;return[q,V]},$._initRooms=function K(){for(var Z=0;Z<this._options.cellWidth;Z++){this.rooms.push([]);for(var Q=0;Q<this._options.cellHeight;Q++)this.rooms[Z].push({x:0,y:0,width:0,height:0,connections:[],cellx:Z,celly:Q})}},$._connectRooms=function K(){var Z=G.getUniformInt(0,this._options.cellWidth-1),Q=G.getUniformInt(0,this._options.cellHeight-1),V,q,X,L=!1,w,H,D;do{D=[0,2,4,6],D=G.shuffle(D);do{if(L=!1,V=D.pop(),q=Z+G0[8][V][0],X=Q+G0[8][V][1],q<0||q>=this._options.cellWidth)continue;if(X<0||X>=this._options.cellHeight)continue;if(w=this.rooms[Z][Q],w.connections.length>0){if(w.connections[0][0]==q&&w.connections[0][1]==X)break}if(H=this.rooms[q][X],H.connections.length==0)H.connections.push([Z,Q]),this.connectedCells.push([q,X]),Z=q,Q=X,L=!0}while(D.length>0&&L==!1)}while(D.length>0)},$._connectUnconnectedRooms=function K(){var Z=this._options.cellWidth,Q=this._options.cellHeight;this.connectedCells=G.shuffle(this.connectedCells);var V,q,X;for(var L=0;L<this._options.cellWidth;L++)for(var w=0;w<this._options.cellHeight;w++)if(V=this.rooms[L][w],V.connections.length==0){var H=[0,2,4,6];H=G.shuffle(H),X=!1;do{var D=H.pop(),F=L+G0[8][D][0],M=w+G0[8][D][1];if(F<0||F>=Z||M<0||M>=Q)continue;if(q=this.rooms[F][M],X=!0,q.connections.length==0)break;for(var j=0;j<q.connections.length;j++)if(q.connections[j][0]==L&&q.connections[j][1]==w){X=!1;break}if(X)break}while(H.length);if(X)V.connections.push([q.cellx,q.celly]);else console.log("-- Unable to connect room.")}},$._createRandomRoomConnections=function K(){},$._createRooms=function K(){var Z=this._width,Q=this._height,V=this._options.cellWidth,q=this._options.cellHeight,X=Math.floor(this._width/V),L=Math.floor(this._height/q),w,H,D=this._options.roomWidth,F=this._options.roomHeight,M,j,O;for(var b=0;b<V;b++)for(var g=0;g<q;g++){if(M=X*b,j=L*g,M==0)M=1;if(j==0)j=1;if(w=G.getUniformInt(D[0],D[1]),H=G.getUniformInt(F[0],F[1]),g>0){O=this.rooms[b][g-1];while(j-(O.y+O.height)<3)j++}if(b>0){O=this.rooms[b-1][g];while(M-(O.x+O.width)<3)M++}var h=Math.round(G.getUniformInt(0,X-w)/2),d=Math.round(G.getUniformInt(0,L-H)/2);while(M+h+w>=Z)if(h)h--;else w--;while(j+d+H>=Q)if(d)d--;else H--;M=M+h,j=j+d,this.rooms[b][g].x=M,this.rooms[b][g].y=j,this.rooms[b][g].width=w,this.rooms[b][g].height=H;for(var t=M;t<M+w;t++)for(var J0=j;J0<j+H;J0++)this.map[t][J0]=0}},$._getWallPosition=function K(Z,Q){var V,q,X;if(Q==1||Q==3){if(V=G.getUniformInt(Z.x+1,Z.x+Z.width-2),Q==1)q=Z.y-2,X=q+1;else q=Z.y+Z.height+1,X=q-1;this.map[V][X]=0}else{if(q=G.getUniformInt(Z.y+1,Z.y+Z.height-2),Q==2)V=Z.x+Z.width+1,X=V-1;else V=Z.x-2,X=V+1;this.map[X][q]=0}return[V,q]},$._drawCorridor=function K(Z,Q){var V=Q[0]-Z[0],q=Q[1]-Z[1],X=Z[0],L=Z[1],w,H,D,F,M=[],j=Math.abs(V),O=Math.abs(q),b=G.getUniform(),g=b,h=1-b;if(H=V>0?2:6,D=q>0?4:0,j<O)w=Math.ceil(O*g),M.push([D,w]),M.push([H,j]),w=Math.floor(O*h),M.push([D,w]);else w=Math.ceil(j*g),M.push([H,w]),M.push([D,O]),w=Math.floor(j*h),M.push([H,w]);this.map[X][L]=0;while(M.length>0){F=M.pop();while(F[1]>0)X+=G0[8][F[0]][0],L+=G0[8][F[0]][1],this.map[X][L]=0,F[1]=F[1]-1}},$._createCorridors=function K(){var Z=this._options.cellWidth,Q=this._options.cellHeight,V,q,X,L,w;for(var H=0;H<Z;H++)for(var D=0;D<Q;D++){V=this.rooms[H][D];for(var F=0;F<V.connections.length;F++){if(q=V.connections[F],X=this.rooms[q[0]][q[1]],X.cellx>V.cellx)L=2,w=4;else if(X.cellx<V.cellx)L=4,w=2;else if(X.celly>V.celly)L=3,w=1;else L=1,w=3;this._drawCorridor(this._getWallPosition(V,L),this._getWallPosition(X,w))}}},B}(g0),rZ={Arena:hZ,Uniform:xZ,Cellular:_Z,Digger:cZ,EllerMaze:yZ,DividedMaze:dZ,IceyMaze:pZ,Rogue:lZ},nZ=function Y(){},sZ=0.5*(Math.sqrt(3)-1),Z1=(3-Math.sqrt(3))/6,oZ=function(Y){z0(B,Y);function B(K){var Z;if(K===void 0)K=256;Z=Y.call(this)||this,Z._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var Q=[];for(var V=0;V<K;V++)Q.push(V);Q=G.shuffle(Q),Z._perms=[],Z._indexes=[];for(var q=0;q<2*K;q++)Z._perms.push(Q[q%K]),Z._indexes.push(Z._perms[q]%Z._gradients.length);return Z}var $=B.prototype;return $.get=function K(Z,Q){var V=this._perms,q=this._indexes,X=V.length/2,L=0,w=0,H=0,D,F=(Z+Q)*sZ,M=Math.floor(Z+F),j=Math.floor(Q+F),O=(M+j)*Z1,b=M-O,g=j-O,h=Z-b,d=Q-g,t,J0;if(h>d)t=1,J0=0;else t=0,J0=1;var $0=h-t+Z1,H0=d-J0+Z1,C0=h-1+2*Z1,d1=d-1+2*Z1,p1=C(M,X),l1=C(j,X),J1=0.5-h*h-d*d;if(J1>=0){J1*=J1,D=q[p1+V[l1]];var Y6=this._gradients[D];L=J1*J1*(Y6[0]*h+Y6[1]*d)}var Q1=0.5-$0*$0-H0*H0;if(Q1>=0){Q1*=Q1,D=q[p1+t+V[l1+J0]];var w6=this._gradients[D];w=Q1*Q1*(w6[0]*$0+w6[1]*H0)}var V1=0.5-C0*C0-d1*d1;if(V1>=0){V1*=V1,D=q[p1+1+V[l1+1]];var L6=this._gradients[D];H=V1*V1*(L6[0]*C0+L6[1]*d1)}return 70*(L+w+H)},B}(nZ),aZ={Simplex:oZ},B6=function(){function Y($,K,Z,Q){if(Q===void 0)Q={};if(this._toX=$,this._toY=K,this._passableCallback=Z,this._options=Object.assign({topology:8},Q),this._dirs=G0[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var B=Y.prototype;return B._getNeighbors=function $(K,Z){var Q=[];for(var V=0;V<this._dirs.length;V++){var q=this._dirs[V],X=K+q[0],L=Z+q[1];if(!this._passableCallback(X,L))continue;Q.push([X,L])}return Q},Y}(),iZ=function(Y){z0(B,Y);function B(K,Z,Q,V){var q=Y.call(this,K,Z,Q,V)||this;return q._computed={},q._todo=[],q._add(K,Z,null),q}var $=B.prototype;return $.compute=function K(Z,Q,V){var q=Z+","+Q;if(!(q in this._computed))this._compute(Z,Q);if(!(q in this._computed))return;var X=this._computed[q];while(X)V(X.x,X.y),X=X.prev},$._compute=function K(Z,Q){while(this._todo.length){var V=this._todo.shift();if(V.x==Z&&V.y==Q)return;var q=this._getNeighbors(V.x,V.y);for(var X=0;X<q.length;X++){var L=q[X],w=L[0],H=L[1],D=w+","+H;if(D in this._computed)continue;this._add(w,H,V)}}},$._add=function K(Z,Q,V){var q={x:Z,y:Q,prev:V};this._computed[Z+","+Q]=q,this._todo.push(q)},B}(B6),tZ=function(Y){z0(B,Y);function B(K,Z,Q,V){var q;if(V===void 0)V={};return q=Y.call(this,K,Z,Q,V)||this,q._todo=[],q._done={},q}var $=B.prototype;return $.compute=function K(Z,Q,V){this._todo=[],this._done={},this._fromX=Z,this._fromY=Q,this._add(this._toX,this._toY,null);while(this._todo.length){var q=this._todo.shift(),X=q.x+","+q.y;if(X in this._done)continue;if(this._done[X]=q,q.x==Z&&q.y==Q)break;var L=this._getNeighbors(q.x,q.y);for(var w=0;w<L.length;w++){var H=L[w],D=H[0],F=H[1],M=D+","+F;if(M in this._done)continue;this._add(D,F,q)}}var j=this._done[Z+","+Q];if(!j)return;while(j)V(j.x,j.y),j=j.prev},$._add=function K(Z,Q,V){var q=this._distance(Z,Q),X={x:Z,y:Q,prev:V,g:V?V.g+1:0,h:q},L=X.g+X.h;for(var w=0;w<this._todo.length;w++){var H=this._todo[w],D=H.g+H.h;if(L<D||L==D&&q<H.h){this._todo.splice(w,0,X);return}}this._todo.push(X)},$._distance=function K(Z,Q){switch(this._options.topology){case 4:return Math.abs(Z-this._fromX)+Math.abs(Q-this._fromY);case 6:var V=Math.abs(Z-this._fromX),q=Math.abs(Q-this._fromY);return q+Math.max(0,(V-q)/2);case 8:return Math.max(Math.abs(Z-this._fromX),Math.abs(Q-this._fromY))}},B}(B6),eZ={Dijkstra:iZ,AStar:tZ},ZJ=function(){function Y($){this._scheduler=$,this._lock=1}var B=Y.prototype;return B.start=function $(){return this.unlock()},B.lock=function $(){return this._lock++,this},B.unlock=function $(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var K=this._scheduler.next();if(!K)return this.lock();var Z=K.act();if(Z&&Z.then)this.lock(),Z.then(this.unlock.bind(this))}return this},Y}(),JJ=function(){function Y($,K){if(K===void 0)K={};this._reflectivityCallback=$,this._options={},K=Object.assign({passes:1,emissionThreshold:100,range:10},K),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(K)}var B=Y.prototype;return B.setOptions=function $(K){if(Object.assign(this._options,K),K&&K.range)this.reset();return this},B.setFOV=function $(K){return this._fov=K,this._fovCache={},this},B.setLight=function $(K,Z,Q){var V=K+","+Z;if(Q)this._lights[V]=typeof Q=="string"?m(Q):Q;else delete this._lights[V];return this},B.clearLights=function $(){this._lights={}},B.reset=function $(){return this._reflectivityCache={},this._fovCache={},this},B.compute=function $(K){var Z={},Q={},V={};for(var q in this._lights){var X=this._lights[q];Q[q]=[0,0,0],x(Q[q],X)}for(var L=0;L<this._options.passes;L++){if(this._emitLight(Q,V,Z),L+1==this._options.passes)continue;Q=this._computeEmitters(V,Z)}for(var w in V){var H=w.split(","),D=parseInt(H[0]),F=parseInt(H[1]);K(D,F,V[w])}return this},B._emitLight=function $(K,Z,Q){for(var V in K){var q=V.split(","),X=parseInt(q[0]),L=parseInt(q[1]);this._emitLightFromCell(X,L,K[V],Z),Q[V]=1}return this},B._computeEmitters=function $(K,Z){var Q={};for(var V in K){if(V in Z)continue;var q=K[V],X=void 0;if(V in this._reflectivityCache)X=this._reflectivityCache[V];else{var L=V.split(","),w=parseInt(L[0]),H=parseInt(L[1]);X=this._reflectivityCallback(w,H),this._reflectivityCache[V]=X}if(X==0)continue;var D=[0,0,0],F=0;for(var M=0;M<3;M++){var j=Math.round(q[M]*X);D[M]=j,F+=j}if(F>this._options.emissionThreshold)Q[V]=D}return Q},B._emitLightFromCell=function $(K,Z,Q,V){var q=K+","+Z,X;if(q in this._fovCache)X=this._fovCache[q];else X=this._updateFOV(K,Z);for(var L in X){var w=X[L],H=void 0;if(L in V)H=V[L];else H=[0,0,0],V[L]=H;for(var D=0;D<3;D++)H[D]+=Math.round(Q[D]*w)}return this},B._updateFOV=function $(K,Z){var Q=K+","+Z,V={};this._fovCache[Q]=V;var q=this._options.range;function X(L,w,H,D){var F=L+","+w,M=D*(1-H/q);if(M==0)return;V[F]=M}return this._fov.compute(K,Z,q,X.bind(this)),V},Y}(),QJ=c,VJ=a,KJ=CZ;J.Color=VJ,J.DEFAULT_HEIGHT=_1,J.DEFAULT_WIDTH=x1,J.DIRS=G0,J.Display=n0,J.Engine=ZJ,J.EventQueue=q6,J.FOV=TZ,J.KEYS=AZ,J.Lighting=JJ,J.Map=rZ,J.Noise=aZ,J.Path=eZ,J.RNG=G,J.Scheduler=kZ,J.StringGenerator=vZ,J.Text=KJ,J.Util=QJ,Object.defineProperty(J,"__esModule",{value:!0})})});var GJ=typeof window!=="undefined"?window.innerWidth:0,BJ=typeof window!=="undefined"?window.innerHeight:0;var p={cameraWidth:Math.floor(GJ/16),cameraHeight:Math.floor(BJ/16),chatLogMaxSize:100,chatLogMaxDisplaySize:8,debug:!0,fontSize:16,highlightEnemy:!0,showGrid:!0,showUI:!0,showTooltip:!0,showEnergy:1,uiEffectsMaxDisplaySize:8,zoom:1},n1={WIDTH:1024,HEIGHT:1024},B0={width:Math.floor(p.cameraWidth*(1/p.zoom)),height:Math.floor(p.cameraHeight*(1/p.zoom)),bg:"transparent",fontSize:Math.floor(p.fontSize*p.zoom),layout:"tile-gl",tileWidth:16,tileHeight:16,tileSet:null,tileMap:null,tileColorize:!0};function P6(J,z){let U=J.entities[z];return`DEBUG: ${z} at ${U.mapId},${U.x},${U.y}`}class B1{name;description;energyDelta;constructor(J,z,U=0){this.name=J,this.description=z,this.energyDelta=U}}class K1{name;description;constructor(J,z){this.name=J,this.description=z}}class M0{key;description;constructor(J,z){this.key=J,this.description=z}}class T0{name;description;tooltip;icon;constructor(J,z,U="",G){this.name=J,this.description=z,this.tooltip=U,this.icon=G}}class P0{name;description;icon;color;energyMax;unlockCondition;constructor(J,z,U,G=100){this.name=J,this.description=z,this.icon=U,this.energyMax=G,this.color="white",this.unlockCondition=null}}class s0{name;description;color;constructor(J,z,U){this.name=J,this.description=z,this.color=U}}class Y0{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(J,z,U,G="cyberyellow",P=0,R=0,C=0,S=0,N=0,I=[]){this.name=J,this.description=z,this.icon=U,this.color=G,this.energyDelta=P,this.matter=R,this.gold=C,this.damage=S,this.energyCost=N,this.effects=I}}class s{name;description;tooltip;icon;fg;bg;energyDelta;constructor(J,z,U="",G=null,P="white",R="black",C=0){this.name=J,this.description=z,this.tooltip=U,this.icon=G,this.fg=P,this.bg=R,this.energyDelta=C}}var W={actions:{Enter:new B1("Enter","Enter a portal or plant atmosphere"),Launch:new B1("Launch","Launch into space",-10),Wait:new B1("Wait","Wait one turn in place")},ais:{aggrorange:new K1("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new K1("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new K1("guardian","Idles at a position and only fights back if engaged"),interactenrage:new K1("interactenrage","Gets hostile when getting talked to too often!")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",mutedcyan:"#2cc9c5",mutedyellow:"#b0a216",mutedmagenta:"#a716b0",mutedgreen:"#5ca821",mutedblue:"#1628b0",red:"#f00",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new M0("N","Move/interact/combat north"),E:new M0("E","Move/interact/combat east"),S:new M0("S","Move/interact/combat south"),W:new M0("W","Move/interact/combat west"),A:new M0("A","Primary action, confirm"),B:new M0("B","Take a break, cancel"),"1":new M0("1","Secondary action, first quick slot"),"2":new M0("2","Tertiary action, second quick slot"),M:new M0("M","Menu"),"#":new M0("#","Open prompt")},constants:{DRAIN_MATTER_COST:500,DRAIN_GOLD_COST:1,MIN_TURN_SPEED_IN_MS:80},dialogs:{bot_bar_aerobot_backstage:"Huh? How did you get here?",bot_bar_aerobot_charger:"Feel free to recharge on those chargepads and enjoy the show.",bot_bar_aerobot_spa_down:"Have you been to our shop, yet?",bot_bar_aerobot_spa_up:"Ahhhh, so refreshing!",bot_bar_aerobot_welcome:"Welcome to the Bot Bar. How may we serve you?",bot_dormitory_aerobot_down:"Would you please go to your own pod?",bot_dormitory_aerobot_up:"Pod, sweet pod!",bot_dormitory_graffiti:"Not all pods are created equal! Rad!",bot_dormitory_workbot_left:"This pod is taken, go away!",bot_dormitory_workbot_right:"Brzzzt! Brzzzt!",bot_factory_workbot_assembly:"The assembly line is unblocked!",bot_factory_workbot_drain:"Don't come too close to the drain or you'll lose your stuff!",bot_factory_workbot_forebot:"What are you doing here? Get back to work!",bot_factory_workbot_sewers:"Sewage water is spilling over again.",bot_factory_workbot_workwork:"Work, work!",bot_factory_workbot_wrench:"I lost a wrench somewhere here...",bot_prison_aerobot:"I'm innocent! I'm innocent! I'm innocent! Beep!",bot_prison_workbot:"Thanks for freeing me! Guess I don't need this Pickaxe anymore...",bot_stadium_botracing:"Now this is botracing!",bot_station_graffiti:"Yo! The factory has a hidden backdoor!",bot_station_graffiti_statues:"One statue isn't like the others! Ey!",bot_station_pioneer:"You shall not pass!",manual_spirit:"Weeee!",manual_aerobot:"Huh? Why don't you have a hull?",manual_workbot:"Work, work!",manual_cleaner:"Follow the rules! Okay?",manual_pioneer:"Don't talk to me, weakling!",playground_label_top_portal:"Goes to top left side of star",playground_label_bottom_portal:"Goes to top left corner of solar system",shop_instance_aerobot_shopper:"It's shiny!!!",shop_instance_shopkeeper:"Welcome! What does your engine desire?",shop_instance_workbot_shopper:"This shop is not so secret after all..."},effects:{Recharger:new T0("Recharger","Doubles energy gained from chargepads","[Recharger]: Doubles energy gained from chargepads","fx_re"),RockCrusher:new T0("RockCrusher","Mines rock","[Rock Crusher]: Enables rock mining","fx_rc"),Screwing:new T0("Screwing","Unscrews the sewer portal covers","[Screwing]: Opens sewer gates","fx_sc"),WallCrusher:new T0("WallCrusher","Tears down weak walls","[Wall Crusher]: Enables weak wall destruction","fx_wc"),WaterImmunity:new T0("WaterImmunity","No damage taken from water","[Water Immunity]: Prevents water damage","fx_wi"),WaterShield:new T0("WaterShield","Reduces damage taken from water","[Water Shield]: Reduces water damage","fx_ws")},entities:{movableboulder:new P0("Boulder","A movable rock","o",2),movablebox:new P0("Box","A movable box","x",2),Spirit:new P0("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new P0("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new P0("WorkBot","Basic factory worker","B"),Cleaner:new P0("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new P0("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Graffiticyan:new P0("Graffiti","Writing on the wall","zc",2),Graffitimagenta:new P0("Graffiti","Writing on the wall","zm",2),Graffitiyellow:new P0("Graffiti","Writing on the wall","zy",2),Valkyrie:new P0("Valkyrie","Airbourne war logistics","V",160),Pioneer:new P0("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200),RoboRat:new P0("RoboRat","Minor self-assembled critter","r",5)},factions:{Critters:new s0("Critters","Small pests","cyberyellow"),Enraged:new s0("Enraged","Always hostile faction","cybermagenta"),Spirits:new s0("Spirits","Default player faction","white"),Pyrates:new s0("Pyrates","Default enemy faction","cybermagenta"),Guardians:new s0("Guardians","Bot station guardians","cybercyan")},items:{battery:new Y0("Battery","Increases maximum energy","b","cyberyellow",10),chest:new Y0("Chest","A chest. What might be inside?","i","cyberyellow"),energy:new Y0("Energy","Energy pack","e","cyberyellow",10),gold:new Y0("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new Y0("Goo","A minor matter source","goo","gray",0,1),junk:new Y0("Junk","Broken bot","%","gray",0,1),matter:new Y0("Matter","A pile of stuff","m","gray",0,100),broom:new Y0("Broom","Sweeps the floor","ib","cyberyellow",0,0,0,-10,-1),cheat:new Y0("Cheat","Most powerful tool, totally legit","icheat","cyberyellow",0,0,0,-500,-1,["Recharger","RockCrusher","Screwing","WallCrusher","WaterShield"]),hammer:new Y0("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["WallCrusher"]),pickaxe:new Y0("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["RockCrusher"]),ratbite:new Y0("Rat Bite","Only rats have this","irb","cyberyellow",0,0,0,-5,-1,["WaterImmunity"]),shocker:new Y0("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1,["Recharger"]),trident:new Y0("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["WaterShield"]),wrench:new Y0("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1,["Screwing"])},maps:{bot_bar:`!
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
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:p.showGrid?new s("void","Just nothing here","",".","gray"):new s("void","Just nothing here"),voidtrue:new s("voidtrue","Really nothing here and you shouldn't get there ever!","","_"),voidhidden:new s("voidhidden","Looks like a wall, but isn't!","","#","gray","black"),water:new s("water","Rust and other dangers await","Water","~","cybercyan","cyberblue",-2),watersewage:new s("watersewage","Rust, goo and other dangers await","Sewage Water","~~","cyberyellow","cybergreen",-4),drain:new s("drain","Drains gold, matter and some of your energy","Drain","*","cybermagenta","black",-5),rock:new s("rock","Hidden treasures may await","Rock","'","white","gray"),tree:new s("tree","Lots of trees make a forest","Tree","t","brown","black"),wall:new s("wall","A strong wall","","#","gray","black"),wallstatueaerobot:new s("wallstatueaerobot","A small statue looking like an AeroBot","","sa","gray","black"),wallstatuecleaner:new s("wallstatuecleaner","A small statue looking like a Cleaner","","sc","gray","black"),wallstatuepioneer:new s("wallstatuepioneer","A small statue looking like a Pioneer","","sp","gray","black"),wallstatueworkbot:new s("wallstatueworkbot","A small statue looking like a WorkBot","","sb","gray","black"),wallweak:new s("wallweak","A weakened wall","Weak Wall","+","gray","black"),chargepad:new s("chargepad","Recharges energy and health","Chargepad","=","cyberyellow","black",2),movenorth:new s("movenorth","Moves you north","","^^","cyberyellow"),moveeast:new s("moveeast","Moves you east","",">>","cyberyellow"),movesouth:new s("movesouth","Moves you south","","vv","cyberyellow"),movewest:new s("movewest","Moves you west","","<<","cyberyellow"),portal:new s("portal","Gateway to another map","Portal","O","cyberyellow","gray"),portalclosed:new s("portalclosed","Closed gateway to another map","Closed Portal","Oc","black","gray"),portalhidden:new s("portalhidden","Hidden gateway to another map","","#","gray","black"),portallauncher:new s("portallauncher","Launches into space","Launch to Space","O","cyberyellow","gray"),portalsewers:new s("portalsewers","Needs some tool to open","Sewer Gate","#~","gray","black"),portalstartworkbot:new s("portalstartworkbot","Start playing as a WorkBot","Play as a WorkBot","OB","white"),portalstartaerobot:new s("portalstartaerobot","Start playing as an AeroBot","Play as an AeroBot","OA","white"),"_portalstart?":new s("_portalstart?","Not unlocked, yet!","?","O?","white"),spacerock:new s("spacerock","Mountains as seen from space, non-blocking!","","'s","white","gray"),spacetree:new s("spacetree","Forest as seen from space","","ts","brown","darkgray"),spacewater:new s("spacewater","Water as seen from space, not dangerous!","","~s","cybercyan","cyberblue"),spacevoid:new s("spacevoid","Void/ground as seen from space","",".s","darkgray","darkgray"),spacevoidstarwhite:new s("spacevoidstarwhite","Space with a white background star","",".f","white"),spacevoidstaryellow:new s("spacevoidstaryellow","Space with a yellow background star","",".y","cyberyellow"),star:new s("star","It's hot, really hot!","Star","§","cyberyellow","cyberyellow",-100),terminal:new s("terminal","A computer terminal","Terminal","$","cyberyellow"),tv:new s("tv","A big billboard screen","TV","!","black","cyberyellow")},uitexts:{}};function D6(J,z){return Object.values(J.effects[z])}function h0(J,z,U){return!!J.effects[z]&&J.effects[z].hasOwnProperty(U.name)}function W6(J){return J}function F6(J,z){if(z.oldEquippedItem){let U=z.oldEquippedItem.type;for(let G of U.effects){let P=W.effects[G];if(!!J.effects[z.entityId][P.name]&&J.effects[z.entityId][P.name].source===U)delete J.effects[z.entityId][P.name]}}if(z.newEquippedItem){let U=z.newEquippedItem.type;for(let G of U.effects){let P=W.effects[G];J.effects[z.entityId][P.name]={type:P,source:U}}}return J}function R6(J){if(Object.hasOwn(W.dialogs,J))return W.dialogs[J];return`FIXME: ${J} needs localization!`}function w0(J,z){return J.chatLog.push(z),J.chatLog=J.chatLog.slice(-p.chatLogMaxSize),J}function A0(J,z,U,G,P=0,R=0,C={}){let S={id:z,type:U,mapId:G,x:P,y:R,energy:10,energyMax:10,gold:0,matter:0,message:null,interactions:0,options:C};return J=L1(J,S,U),J.entities[S.id]=S,J}function Y1(J,z){return J.entities[z]=void 0,delete J.entities[z],J.tools[z]=void 0,delete J.tools[z],J.effects[z]=void 0,delete J.effects[z],J}function x0(J,z){let U=Object.keys(J.entities),G=[];for(let P=0;P<U.length;P++){let R=J.entities[U[P]];if(R.mapId===z)G.push(R)}return G}function w1(J,z,U,G){let P=x0(J,z).filter((R)=>R.x===U&&R.y===G);if(P.length>0)return P[0];return null}function L1(J,z,U){if(z.type=U,z.energy=U.energyMax,z.energyMax=U.energyMax,z.gold=0,z.matter=0,!j0(z))J.tools[z.id]=void 0;return J.effects[z.id]={},J}function M6(J,z,U){if(z===U)return J;if(z.options.faction===U.options.faction||s1(U)){if(U.options.dialog){let G=U?.options?.name?U.options.name:U.type.name;J=w0(J,G+": "+R6(U.options.dialog)),U.interactions++}}else{let G=z.id,P=U.id;J._combatQueue.push({entityId:G,otherEntityId:P})}if(U.interactions>=3&&U.options?.ai===W.ais.interactenrage)U.options.faction=W.factions.Enraged;return J}function j0(J){return J.type===W.entities.movableboulder||J.type===W.entities.movablebox}function s1(J){return J.type===W.entities.Graffiticyan||J.type===W.entities.Graffitimagenta||J.type===W.entities.Graffitiyellow}function H1(J,z){let U={A:W.actions.Wait,B:W.actions.Wait};if(!!J.lastSpacePositionByEntity[z.id]&&z.energy>Math.abs(W.actions.Launch.energyDelta))U.A=W.actions.Launch;let P=J.maps[z.mapId].getTile(z.x,z.y);if(!!P.options.mapId&&"x"in P.options&&"y"in P.options)U.A=W.actions.Enter;return U}function z1(J,z,U){let G=J._eventSubscribers[z];if(G)for(let P=0;P<G.length;P++){let R=G[P];J=R(J,U)}return J}function P1(J,z,U){if(z in J._eventSubscribers);else J._eventSubscribers[z]=[];return J._eventSubscribers[z].push(U),J}function q1(J,z,U,G=0,P=0){let C={id:D1(U,G,P),type:z,mapId:U,x:G,y:P,energy:z.energyDelta,gold:z.gold,matter:z.matter};return J.items[C.id]=C,J}function O6(J,z,U,G=0,P=0){let R=W.items.junk,S={id:D1(U,G,P),type:R,mapId:U,x:G,y:P,energy:R.energyDelta,gold:R.gold,matter:z};return J.items[S.id]=S,J}function U1(J,z,U,G=0,P=0,R,C){let N={id:D1(U,G,P),type:z,mapId:U,x:G,y:P,energy:z.energyDelta,gold:R,matter:C};return J.items[N.id]=N,J}function D1(J,z,U){return"item,"+J+","+z+","+U}function o1(J,z){return J.items[z]=void 0,delete J.items[z],J}function W1(J,z){let U=Object.keys(J.items),G=[];for(let P=0;P<U.length;P++){let R=J.items[U[P]];if(R.mapId===z)G.push(R)}return G}function F1(J,z,U,G){let P=D1(z,U,G);if(P in J.items)return J.items[P];return null}function R1(J,z){return J.tools[z]}function C6(J,z,U){if(j0(z))return J;if(!wJ(z,U))return J;if(YJ(U))J=a1(J,z.id,U.type);else{if(U.type===W.items.battery)z.energyMax+=U.energy;if(J._energyQueue.push({entityId:z.id,energyDelta:U.energy}),z.id.startsWith("player"))J=w0(J,`Picked up ${U.type.name}.`)}return z.gold+=U.gold,z.matter+=U.matter,o1(J,U.id),J}function a1(J,z,U){let G=J.tools[z],P=void 0;if(U){if(P={type:U},J.tools[z]=P,z.startsWith("player"))J=w0(J,`Equipped ${U.name}.`)}else if(G){let C=G.type;if(J.tools[z]=P,z.startsWith("player"))J=w0(J,`Unequipped ${C}.`)}let R={entityId:z,oldEquippedItem:G,newEquippedItem:P};return J=z1(J,1,R),J}function YJ(J){return J.type.energyCost<0}function wJ(J,z){return J.gold+z.gold>=0&&J.matter+z.matter>=0}/*!
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
 */var LJ=function(J){var z={};function U(G){if(z[G])return z[G].exports;var P=z[G]={i:G,l:!1,exports:{}};return J[G].call(P.exports,P,P.exports,U),P.l=!0,P.exports}return U.m=J,U.c=z,U.d=function(G,P,R){U.o(G,P)||Object.defineProperty(G,P,{enumerable:!0,get:R})},U.r=function(G){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(G,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(G,"__esModule",{value:!0})},U.t=function(G,P){if(1&P&&(G=U(G)),8&P)return G;if(4&P&&typeof G=="object"&&G&&G.__esModule)return G;var R=Object.create(null);if(U.r(R),Object.defineProperty(R,"default",{enumerable:!0,value:G}),2&P&&typeof G!="string")for(var C in G)U.d(R,C,function(S){return G[S]}.bind(null,C));return R},U.n=function(G){var P=G&&G.__esModule?function(){return G.default}:function(){return G};return U.d(P,"a",P),P},U.o=function(G,P){return Object.prototype.hasOwnProperty.call(G,P)},U.p="/bin/",U(U.s=0)}([function(J,z,U){var G={},P=U(1),R=U(2),C=U(3);J.exports=G;var S=1;G.js=function(){var N,I,c,n=!1,Q0={},l={},m={},V0={},x=!0,_={},r=[],U0=Number.MAX_VALUE,o=!1;this.setAcceptableTiles=function(k){k instanceof Array?c=k:!isNaN(parseFloat(k))&&isFinite(k)&&(c=[k])},this.enableSync=function(){n=!0},this.disableSync=function(){n=!1},this.enableDiagonals=function(){o=!0},this.disableDiagonals=function(){o=!1},this.setGrid=function(k){N=k;for(var v=0;v<N.length;v++)for(var E=0;E<N[0].length;E++)l[N[v][E]]||(l[N[v][E]]=1)},this.setTileCost=function(k,v){l[k]=v},this.setAdditionalPointCost=function(k,v,E){m[v]===void 0&&(m[v]={}),m[v][k]=E},this.removeAdditionalPointCost=function(k,v){m[v]!==void 0&&delete m[v][k]},this.removeAllAdditionalPointCosts=function(){m={}},this.setDirectionalCondition=function(k,v,E){V0[v]===void 0&&(V0[v]={}),V0[v][k]=E},this.removeAllDirectionalConditions=function(){V0={}},this.setIterationsPerCalculation=function(k){U0=k},this.avoidAdditionalPoint=function(k,v){Q0[v]===void 0&&(Q0[v]={}),Q0[v][k]=1},this.stopAvoidingAdditionalPoint=function(k,v){Q0[v]!==void 0&&delete Q0[v][k]},this.enableCornerCutting=function(){x=!0},this.disableCornerCutting=function(){x=!1},this.stopAvoidingAllAdditionalPoints=function(){Q0={}},this.findPath=function(k,v,E,a,Z0){var K0=function(S0){n?Z0(S0):setTimeout(function(){Z0(S0)})};if(c===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(N===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(k<0||v<0||E<0||a<0||k>N[0].length-1||v>N.length-1||E>N[0].length-1||a>N.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(k!==E||v!==a){for(var D0=N[a][E],X0=!1,O0=0;O0<c.length;O0++)if(D0===c[O0]){X0=!0;break}if(X0!==!1){var L0=new P;L0.openList=new C(function(S0,r0){return S0.bestGuessDistance()-r0.bestGuessDistance()}),L0.isDoneCalculating=!1,L0.nodeHash={},L0.startX=k,L0.startY=v,L0.endX=E,L0.endY=a,L0.callback=K0,L0.openList.push(e(L0,L0.startX,L0.startY,null,1));var e0=S++;return _[e0]=L0,r.push(e0),e0}K0(null)}else K0([])},this.cancelPath=function(k){return k in _&&(delete _[k],!0)},this.calculate=function(){if(r.length!==0&&N!==void 0&&c!==void 0)for(I=0;I<U0;I++){if(r.length===0)return;n&&(I=0);var k=r[0],v=_[k];if(v!==void 0)if(v.openList.size()!==0){var E=v.openList.pop();if(v.endX!==E.x||v.endY!==E.y)E.list=0,E.y>0&&A(v,E,0,-1,1*T(E.x,E.y-1)),E.x<N[0].length-1&&A(v,E,1,0,1*T(E.x+1,E.y)),E.y<N.length-1&&A(v,E,0,1,1*T(E.x,E.y+1)),E.x>0&&A(v,E,-1,0,1*T(E.x-1,E.y)),o&&(E.x>0&&E.y>0&&(x||f(N,c,E.x,E.y-1,E)&&f(N,c,E.x-1,E.y,E))&&A(v,E,-1,-1,1.4*T(E.x-1,E.y-1)),E.x<N[0].length-1&&E.y<N.length-1&&(x||f(N,c,E.x,E.y+1,E)&&f(N,c,E.x+1,E.y,E))&&A(v,E,1,1,1.4*T(E.x+1,E.y+1)),E.x<N[0].length-1&&E.y>0&&(x||f(N,c,E.x,E.y-1,E)&&f(N,c,E.x+1,E.y,E))&&A(v,E,1,-1,1.4*T(E.x+1,E.y-1)),E.x>0&&E.y<N.length-1&&(x||f(N,c,E.x,E.y+1,E)&&f(N,c,E.x-1,E.y,E))&&A(v,E,-1,1,1.4*T(E.x-1,E.y+1)));else{var a=[];a.push({x:E.x,y:E.y});for(var Z0=E.parent;Z0!=null;)a.push({x:Z0.x,y:Z0.y}),Z0=Z0.parent;a.reverse();var K0=a;v.callback(K0),delete _[k],r.shift()}}else v.callback(null),delete _[k],r.shift();else r.shift()}};var A=function(k,v,E,a,Z0){var K0=v.x+E,D0=v.y+a;if((Q0[D0]===void 0||Q0[D0][K0]===void 0)&&f(N,c,K0,D0,v)){var X0=e(k,K0,D0,v,Z0);X0.list===void 0?(X0.list=1,k.openList.push(X0)):v.costSoFar+Z0<X0.costSoFar&&(X0.costSoFar=v.costSoFar+Z0,X0.parent=v,k.openList.updateItem(X0))}},f=function(k,v,E,a,Z0){var K0=V0[a]&&V0[a][E];if(K0){var D0=u(Z0.x-E,Z0.y-a);if(!function(){for(var O0=0;O0<K0.length;O0++)if(K0[O0]===D0)return!0;return!1}())return!1}for(var X0=0;X0<v.length;X0++)if(k[a][E]===v[X0])return!0;return!1},u=function(k,v){if(k===0&&v===-1)return G.TOP;if(k===1&&v===-1)return G.TOP_RIGHT;if(k===1&&v===0)return G.RIGHT;if(k===1&&v===1)return G.BOTTOM_RIGHT;if(k===0&&v===1)return G.BOTTOM;if(k===-1&&v===1)return G.BOTTOM_LEFT;if(k===-1&&v===0)return G.LEFT;if(k===-1&&v===-1)return G.TOP_LEFT;throw new Error("These differences are not valid: "+k+", "+v)},T=function(k,v){return m[v]&&m[v][k]||l[N[v][k]]},e=function(k,v,E,a,Z0){if(k.nodeHash[E]!==void 0){if(k.nodeHash[E][v]!==void 0)return k.nodeHash[E][v]}else k.nodeHash[E]={};var K0=i(v,E,k.endX,k.endY);if(a!==null)var D0=a.costSoFar+Z0;else D0=0;var X0=new R(a,v,E,D0,K0);return k.nodeHash[E][v]=X0,X0},i=function(k,v,E,a){var Z0,K0;return o?(Z0=Math.abs(k-E))<(K0=Math.abs(v-a))?1.4*Z0+K0:1.4*K0+Z0:(Z0=Math.abs(k-E))+(K0=Math.abs(v-a))}},G.TOP="TOP",G.TOP_RIGHT="TOP_RIGHT",G.RIGHT="RIGHT",G.BOTTOM_RIGHT="BOTTOM_RIGHT",G.BOTTOM="BOTTOM",G.BOTTOM_LEFT="BOTTOM_LEFT",G.LEFT="LEFT",G.TOP_LEFT="TOP_LEFT"},function(J,z){J.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(J,z){J.exports=function(U,G,P,R,C){this.parent=U,this.x=G,this.y=P,this.costSoFar=R,this.simpleDistanceToTarget=C,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(J,z,U){J.exports=U(4)},function(J,z,U){var G,P,R;(function(){var C,S,N,I,c,n,Q0,l,m,V0,x,_,r,U0,o;N=Math.floor,V0=Math.min,S=function(A,f){return A<f?-1:A>f?1:0},m=function(A,f,u,T,e){var i;if(u==null&&(u=0),e==null&&(e=S),u<0)throw new Error("lo must be non-negative");for(T==null&&(T=A.length);u<T;)e(f,A[i=N((u+T)/2)])<0?T=i:u=i+1;return[].splice.apply(A,[u,u-u].concat(f)),f},n=function(A,f,u){return u==null&&(u=S),A.push(f),U0(A,0,A.length-1,u)},c=function(A,f){var u,T;return f==null&&(f=S),u=A.pop(),A.length?(T=A[0],A[0]=u,o(A,0,f)):T=u,T},l=function(A,f,u){var T;return u==null&&(u=S),T=A[0],A[0]=f,o(A,0,u),T},Q0=function(A,f,u){var T;return u==null&&(u=S),A.length&&u(A[0],f)<0&&(f=(T=[A[0],f])[0],A[0]=T[1],o(A,0,u)),f},I=function(A,f){var u,T,e,i,k,v;for(f==null&&(f=S),k=[],T=0,e=(i=function(){v=[];for(var E=0,a=N(A.length/2);0<=a?E<a:E>a;0<=a?E++:E--)v.push(E);return v}.apply(this).reverse()).length;T<e;T++)u=i[T],k.push(o(A,u,f));return k},r=function(A,f,u){var T;if(u==null&&(u=S),(T=A.indexOf(f))!==-1)return U0(A,0,T,u),o(A,T,u)},x=function(A,f,u){var T,e,i,k,v;if(u==null&&(u=S),!(e=A.slice(0,f)).length)return e;for(I(e,u),i=0,k=(v=A.slice(f)).length;i<k;i++)T=v[i],Q0(e,T,u);return e.sort(u).reverse()},_=function(A,f,u){var T,e,i,k,v,E,a,Z0,K0;if(u==null&&(u=S),10*f<=A.length){if(!(i=A.slice(0,f).sort(u)).length)return i;for(e=i[i.length-1],k=0,E=(a=A.slice(f)).length;k<E;k++)u(T=a[k],e)<0&&(m(i,T,0,null,u),i.pop(),e=i[i.length-1]);return i}for(I(A,u),K0=[],v=0,Z0=V0(f,A.length);0<=Z0?v<Z0:v>Z0;0<=Z0?++v:--v)K0.push(c(A,u));return K0},U0=function(A,f,u,T){var e,i,k;for(T==null&&(T=S),e=A[u];u>f&&T(e,i=A[k=u-1>>1])<0;)A[u]=i,u=k;return A[u]=e},o=function(A,f,u){var T,e,i,k,v;for(u==null&&(u=S),e=A.length,v=f,i=A[f],T=2*f+1;T<e;)(k=T+1)<e&&!(u(A[T],A[k])<0)&&(T=k),A[f]=A[T],T=2*(f=T)+1;return A[f]=i,U0(A,v,f,u)},C=function(){function A(f){this.cmp=f!=null?f:S,this.nodes=[]}return A.push=n,A.pop=c,A.replace=l,A.pushpop=Q0,A.heapify=I,A.updateItem=r,A.nlargest=x,A.nsmallest=_,A.prototype.push=function(f){return n(this.nodes,f,this.cmp)},A.prototype.pop=function(){return c(this.nodes,this.cmp)},A.prototype.peek=function(){return this.nodes[0]},A.prototype.contains=function(f){return this.nodes.indexOf(f)!==-1},A.prototype.replace=function(f){return l(this.nodes,f,this.cmp)},A.prototype.pushpop=function(f){return Q0(this.nodes,f,this.cmp)},A.prototype.heapify=function(){return I(this.nodes,this.cmp)},A.prototype.updateItem=function(f){return r(this.nodes,f,this.cmp)},A.prototype.clear=function(){return this.nodes=[]},A.prototype.empty=function(){return this.nodes.length===0},A.prototype.size=function(){return this.nodes.length},A.prototype.clone=function(){var f;return(f=new A).nodes=this.nodes.slice(0),f},A.prototype.toArray=function(){return this.nodes.slice(0)},A.prototype.insert=A.prototype.push,A.prototype.top=A.prototype.peek,A.prototype.front=A.prototype.peek,A.prototype.has=A.prototype.contains,A.prototype.copy=A.prototype.clone,A}(),P=[],(R=typeof(G=function(){return C})=="function"?G.apply(z,P):G)===void 0||(J.exports=R)}).call(this)}]);function A6(J,z,U,G,P){let R=new LJ.js;R.setGrid(J),R.setAcceptableTiles([0]),R.enableSync();let C=null;return R.findPath(z,U,G,P,function(S){C=S}),R.calculate(),C}function W0(){return"player"}function E6(J,z,U,G){return Math.abs(J-U)+Math.abs(z-G)}function M1(J){return[...Array(J).keys()]}function N6(J){let z=HJ(J),U=J.entities[W0()];for(let G=0;G<z.length;G++){let P=z[G],R=J.entities[P],C=J._AIs[P],S=E6(U.x,U.y,R.x,R.y);if(U.options.faction!==R.options.faction&&S<=C.aggroRange){let N=J.maps[J.currentMapId].asMovementMap(),I=A6(N,R.x,R.y,U.x,U.y);if(I){if(I=I.slice(1),I.length>S)I=null}C.path=I}if(!!R.message&&R.message.includes("OBEY"));}for(let G=0;G<z.length;G++){let P=z[G],R=J.entities[P],C=J._AIs[P];if(C.path){let S=C.path[0],N=S.x-R.x,I=S.y-R.y;J=F0(J,R,N,I)}}return J}function HJ(J){let z=x0(J,J.currentMapId),U=[];for(let G=0;G<z.length;G++){let P=z[G];if(P.options.ai)U.push(P.id)}return U}function v6(J,z,U){let G=J.entities[z],P=8;switch(U){case W.ais.aggrorange:P=8;break;case W.ais.aggrorangeshort:P=2;break;case W.ais.guardian:P=1;break;case W.ais.interactenrage:P=2;break;default:}return J._AIs[z]={entityId:z,type:U,aggroRange:P,startMap:G.mapId,startX:G.x,startY:G.y,path:null},J}function j1(J,z){return J._AIs[z]=void 0,delete J._AIs[z],J}function b6(J){let z=void 0;while(typeof(z=J._despawnQueue.shift())!=="undefined")J=Y1(J,z),J=j1(J,z);return J}function I6(J){return J}class E0{mapId;x;y;entityOrItemName;options;constructor(J,z,U,G,P={}){this.mapId=J,this.x=z,this.y=U,this.entityOrItemName=G,this.options=P}generateId(){return this.mapId+","+this.entityOrItemName+","+this.x+","+this.y+"/g"}}function k0(J,z){if(PJ(z.entityOrItemName)){let U=z.options;if(Object.hasOwn(U,"ai"))U.ai=W.ais[U.ai];if(Object.hasOwn(U,"faction"))U.faction=W.factions[U.faction];let G=z.generateId();if(J=A0(J,G,W.entities[z.entityOrItemName],z.mapId,z.x,z.y,U),Object.hasOwn(U,"equip")&&S6(U.equip))J=a1(J,G,W.items[U.equip]);if(Object.hasOwn(U,"ai"))J=v6(J,G,U.ai)}else if(S6(z.entityOrItemName))J=q1(J,W.items[z.entityOrItemName],z.mapId,z.x,z.y);return J}function PJ(J){return Object.hasOwn(W.entities,J)}function S6(J){return Object.hasOwn(W.items,J)}function _0(J,z={}){return{type:J,options:z}}function k6(J){return J.type.name.startsWith("space")}function f6(J){for(let z in W.maps){let U=c0(W.maps[z]);J.maps[z]=U;for(let G of U._spawnCommands)J=k0(J,G);U._spawnCommands=[]}return J}function u6(J,z){let U=W1(J,z);for(let P=0;P<U.length;P++){let R=U[P];J=o1(J,R.id)}let G=x0(J,z);for(let P=0;P<G.length;P++){let R=G[P];J=Y1(J,R.id),J=j1(J,R.id)}return J.maps[z]=void 0,delete J.maps[z],J}class m0{id;widthTiles;heightTiles;seed;_tiles;_cacheMovementMap;_spawnCommands;_tvCount;tvMessage;constructor(J,z,U,G=[]){this.id=J,this.widthTiles=z,this.heightTiles=U,this.seed=null,this._tiles=G,this._cacheMovementMap=null,this._spawnCommands=[],this._tvCount=0,this.tvMessage=null}getTile(J,z){if(J>=0&&J<this.widthTiles&&z>=0&&z<this.heightTiles){let U=z*this.widthTiles+J;return this._tiles[U]}return{}}setTile(J,z,U,G={}){this._cacheMovementMap=null;let P=z*this.widthTiles+J,R=this._tiles[P];return this._tiles[P]=_0(U,G),R}setTvMessage(J){if(this._tvCount){let z=0;for(let U of this._tiles)if(U.type===W.tiles.tv&&z<J.length)U.options.sign=J[z],z++;if(J==="")J=null;this.tvMessage=J}}pasteOnto(J,z=0,U=0){for(let G=0;G<J.heightTiles;G++)for(let P=0;P<J.widthTiles;P++){let R=J.getTile(P,G);if(R.type!==W.tiles.voidtrue)this.setTile(P+z,G+U,R.type,R.options)}return this}circular(){let J=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let z=-J;z<=J;z++)for(let U=-J;U<=J;U++)if(U*U+z*z>=J*J)this.setTile(U+J-1,z+J-1,W.tiles.voidtrue);return this}sample(J,z){let U=Math.floor(this.widthTiles/J),G=Math.floor(this.heightTiles/z),P=[];for(let R=0;R<z;R++)for(let C=0;C<J;C++){let S={};for(let l=0;l<G;l++)for(let m=0;m<U;m++){let V0=this.getTile(C*U+m,R*G+l);if(S[V0.type.name])S[V0.type.name]+=1;else S[V0.type.name]=1}let N="",I=0;for(let[l,m]of Object.entries(S))if(m>I)N=l,I=m;let c="space"+N,n=W.tiles[c]||W.tiles.spacevoid,Q0={mapId:this.id,x:C*U,y:R*G};P.push(_0(n,Q0))}return new m0("__sampled_"+J+"_"+z+"_"+this.id,J,z,P)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let J=new Array(this.heightTiles);for(let z=0;z<this.heightTiles;z++){J[z]=new Array(this.widthTiles);for(let U=0;U<this.widthTiles;U++){let G=z*this.widthTiles+U,R=this._tiles[G].type;if(J[z][U]=0,i1(R))J[z][U]=1}}return this._cacheMovementMap=J,J}}function c0(J){let z=J.split(/\r?\n/),U=J[0],G="",P=0,R=0,C={},S=[],N=[],I=0,c="";for(let Q0=0;Q0<z.length;Q0++){let l=z[Q0];if(l.startsWith(U)){if(l.startsWith(U+"!id"))G=l.slice(5);else if(l.startsWith(U+"!size")){let m=l.split(" ").slice(1);P=Number(m[0]),R=Number(m[1])}else if(l.startsWith(U+"!spawn")){let m=l.split(" ").slice(1),V0={};if(m.length>3){let x=m.slice(3);for(let _ of x){let r=_.split("=");V0[r[0]]=r[1]}}S.push(new E0(G,Number(m[0]),Number(m[1]),m[2],V0))}else if(l.startsWith(U+"!")){let m=l[2],V0=l.slice(4);C[m]=V0}}else for(let m=0;m<l.length;m++){let V0=l[m],x=C[V0];if(p.debug&&!x)console.log("DEBUG Broken map: "+G);let _=x.split(" "),r={};if(x.startsWith("portal ")||x.startsWith("portalhidden ")||x.startsWith("portalsewers ")||x.startsWith("portallauncher ")||x.startsWith("portalstart"))x=_[0],r.mapId=_[1],r.x=Number(_[2]),r.y=Number(_[3]);if(x.startsWith("wall ")&&_.length>=2)x="wall",r.sign=_[1];if(x.startsWith("terminal ")){if(x="terminal",_.length>=2)r.screen=_[1]}if(x.startsWith("tv ")&&_.length>=2){if(x="tv",_.length===3)c=_[2];I++}N.push(_0(W.tiles[x],r))}}if(p.debug&&!(I===0||I===12))console.log("DEBUG Broken map: "+G+" (invalid TV size "+I+", allowed are 0 or 12 characters per map)");let n=new m0(G,P,R,N);return n._tvCount=I,n.setTvMessage(c),n._spawnCommands=S,n}function i1(J){return J===W.tiles.rock||J===W.tiles.portalclosed||J===W.tiles.portalsewers||J===W.tiles.tv||J.name.startsWith("wall")}function t1(J){return J===W.tiles.water||J===W.tiles.watersewage}function h6(J,z,U){switch(U){case W.commands.N:J=F0(J,z,0,-1);break;case W.commands.W:J=F0(J,z,-1,0);break;case W.commands.S:J=F0(J,z,0,1);break;case W.commands.E:J=F0(J,z,1,0);break;case W.commands.A:J=g6(J,z,W.commands.A);break;case W.commands.B:J=g6(J,z,W.commands.B);break;default:}return J}function F0(J,z,U,G,P=0){let R=J.maps[z.mapId],C=w1(J,R.id,z.x+U,z.y+G),S=J.tools[z.id];if(z.message=R.tvMessage,C)if(j0(C)){if(!j0(z)&&P<1)J=F0(J,C,U,G,P++),J=F0(J,z,U,G,P++)}else J=M6(J,z,C);else if(WJ(R,z,U,G))J=T6(J,R,z,U,G),J._energyQueue.push({entityId:z.id,energyDelta:-1*P});else if(FJ(J,R,z,U,G)){if(R.setTile(z.x+U,z.y+G,W.tiles.void).type===W.tiles.rock){let I=J.rng.getPercentage();if(I<=1)J=q1(J,W.items.matter,R.id,z.x+U,z.y+G);else if(I<=34)J=q1(J,W.items.junk,R.id,z.x+U,z.y+G)}J._energyQueue.push({entityId:z.id,energyDelta:S.type.energyCost})}else if(RJ(J,R,z,U,G))J=T6(J,R,z,U,G),J._energyQueue.push({entityId:z.id,energyDelta:S.type.energyCost});return J}function g6(J,z,U){let P=H1(J,z)[U.key],C=J.maps[z.mapId].getTile(z.x,z.y);switch(P){case W.actions.Enter:J=x6(J,z,C);break;case W.actions.Launch:J=DJ(J,z,C);case W.actions.Wait:break;default:}return J}function T6(J,z,U,G,P){U.x+=G,U.y+=P;let R=F1(J,U.mapId,U.x,U.y);if(R)J=C6(J,U,R);let C=z.getTile(U.x,U.y);if(C.type.name.startsWith("portal"))J=x6(J,U,C);if(C.type===W.tiles.terminal)z.setTvMessage("OBEYWORKKILL");if(C.type.name.startsWith("move"))switch(C.type.name){case"movenorth":J=F0(J,U,0,-1);break;case"moveeast":J=F0(J,U,1,0);break;case"movesouth":J=F0(J,U,0,1);break;case"movewest":J=F0(J,U,-1,0);break;default:}return J}function x6(J,z,U){if(z.id.startsWith("player"))J.currentMapId=U.options.mapId;if(k6(U))J.lastSpacePositionByEntity[z.id]={mapId:z.mapId,x:z.x,y:z.y};else J.lastSpacePositionByEntity[z.id]=void 0,delete J.lastSpacePositionByEntity[z.id];let G={entityId:z.id,oldMapId:z.mapId,oldX:z.x,oldY:z.y,oldTileType:U.type,newMapId:U.options.mapId,newX:U.options.x,newY:U.options.y};return z.mapId=U.options.mapId,z.x=U.options.x,z.y=U.options.y,J=z1(J,0,G),J}function DJ(J,z,U){if(J.lastSpacePositionByEntity[z.id]){if(z.id.startsWith("player"))J.currentMapId=J.lastSpacePositionByEntity[z.id].mapId;let G={entityId:z.id,oldMapId:z.mapId,oldX:z.x,oldY:z.y,oldTileType:U.type,newMapId:J.lastSpacePositionByEntity[z.id].mapId,newX:J.lastSpacePositionByEntity[z.id].x,newY:J.lastSpacePositionByEntity[z.id].y};z.mapId=G.newMapId,z.x=G.newX,z.y=G.newY,J._energyQueue.push({entityId:z.id,energyDelta:W.actions.Launch.energyDelta}),J.lastSpacePositionByEntity[z.id]=void 0,delete J.lastSpacePositionByEntity[z.id],J=z1(J,0,G)}return J}function _6(J){for(let z in J.entities){let U=J.entities[z],P=J.maps[U.mapId].getTile(U.x,U.y),R=P.type.energyDelta;if(P.type===W.tiles.chargepad&&h0(J,z,W.effects.Recharger))R*=2;else if(t1(P.type)&&h0(J,z,W.effects.WaterImmunity))R=0;else if(t1(P.type)&&h0(J,z,W.effects.WaterShield))R/=2;else if(P.type===W.tiles.drain){let C=Math.min(U.gold,W.constants.DRAIN_GOLD_COST),S=Math.min(U.matter,W.constants.DRAIN_MATTER_COST);U.gold-=C,U.matter-=S}if(R!==0)J._energyQueue.push({entityId:z,energyDelta:R})}return J}function m6(J,z){let U=J.entities[z.entityId];switch(z.oldTileType){case W.tiles.portalstartaerobot:J=L1(J,U,W.entities.AeroBot),J=w0(J,`Booting up as an ${W.entities.AeroBot.name}...`);break;case W.tiles.portalstartworkbot:J=L1(J,U,W.entities.WorkBot),J=w0(J,`Booting up as a ${W.entities.WorkBot.name}...`);break;default:}return J}function WJ(J,z,U,G){let P=z.x+U,R=z.y+G,C=J.getTile(P,R).type;return P>=0&&P<J.widthTiles&&R>=0&&R<J.heightTiles&&!i1(C)}function FJ(J,z,U,G,P){let R=U.x+G,C=U.y+P,S=z.getTile(R,C).type;return h0(J,U.id,W.effects.WallCrusher)&&S===W.tiles.wallweak||h0(J,U.id,W.effects.RockCrusher)&&S===W.tiles.rock}function RJ(J,z,U,G,P){let R=U.x+G,C=U.y+P,S=z.getTile(R,C).type;return h0(J,U.id,W.effects.Screwing)&&S===W.tiles.portalsewers}var d6=r1(C1(),1);class f0{seed;_rotRng;constructor(J=1337){this.seed=J,this._rotRng=d6.RNG.clone(),this._rotRng.setSeed(J)}getPercentage(){return this._rotRng.getPercentage()}getItem(J){return this._rotRng.getItem(J)}}function p6(J,z){if(z.seed===1337)J=k0(J,new E0(z.id,130,127,"Valkyrie",{faction:"Spirits"})),J=k0(J,new E0(z.id,124,127,"Valkyrie",{faction:"Spirits"})),J=k0(J,new E0(z.id,127,130,"trident"));else{let U=new f0(z.seed);for(let G=0;G<z.heightTiles;G++)for(let P=0;P<z.widthTiles;P++){let R=z.getTile(P,G);if(U.getPercentage()<=1&&(R.type===W.tiles.void||R.type===W.tiles.tree)){let C=U.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(C){case"Deviant":case"Pioneer":J=k0(J,new E0(z.id,P,G,C,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":J=k0(J,new E0(z.id,P,G,C));break}}}}return J}var A1=r1(C1(),1);var OJ=1337,l6=55;function r6(J,z=OJ){A1.RNG.setSeed(z);let U=new A1.Noise.Simplex,G=256,P=256,R=[];for(let N=0;N<P;N++)for(let I=0;I<G;I++){let c=U.get(I/l6,N/l6),n;if(c<=-0.5)n=W.tiles.water;else if(c<=0)n=W.tiles.void;else if(c<0.5)n=W.tiles.tree;else n=W.tiles.rock;R.push(_0(n))}let C="simplex="+z,S=new m0(C,G,P,R);return S.seed=z,J.maps[C]=S,J}var CJ=1337;function s6(J,z=CJ){let U=n6(1024,1024,W.tiles.void);U.id="solarsystem="+z,J.maps[U.id]=U;let G=new f0(z),P=new f0(z),R=G.getItem([2,3,4,5,6,7,8,9,10,11,12]),C=128,S=512-C,N=Math.floor(S/R);U=AJ(U,G);let I=n6(128,128,W.tiles.voidtrue);EJ(I,63,63,62,W.tiles.star),NJ(I,63,63,W.tiles.star),U.pasteOnto(I,448,448);for(let l=C;l<512;l+=N){let m=G.getItem([-1,1])*G.getItem(M1(l)),V0=G.getItem([-1,1])*Math.floor(Math.sqrt(l*l-m*m));m+=512,V0+=512;let x=G.getItem([16,24,32]),_=Math.floor(x/2)-1;J=r6(J,z);let r=J.maps["simplex="+z],U0=W.map_snippets.launcher;U0=U0.replace("!!O portallauncher space 0 0",`!!O portallauncher ${U.id} ${m} ${V0}`);let o=c0(U0),A=P.getItem(M1(r.widthTiles-o.widthTiles)),f=P.getItem(M1(r.heightTiles-o.heightTiles));r.pasteOnto(o,A,f),J=p6(J,r);let u=r.sample(x,x).circular();U.pasteOnto(u,m-(_+1),V0-(_+1)),z++}let c=W.map_snippets.space_bot_station;c=c.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let n=c0(c);U.pasteOnto(n,583,398);let Q0=c0(W.map_snippets.square_falcon);return U.pasteOnto(Q0,590,373),J}function n6(J,z,U){let G=[];for(let C=0;C<J*z;C++)G.push(_0(U));return new m0("__temp",J,z,G)}function AJ(J,z){for(let U=0;U<J.heightTiles;U++)for(let G=0;G<J.widthTiles;G++)if(z.getPercentage()<=1)J.setTile(G,U,z.getItem([W.tiles.spacevoidstarwhite,W.tiles.spacevoidstaryellow]));return J}function EJ(J,z,U,G,P){let R=1-G,C=1,S=-2*G,N=0,I=G;J.setTile(z,U+G,P),J.setTile(z,U-G,P),J.setTile(z+G,U,P),J.setTile(z-G,U,P);while(N<I){if(R>=0)I-=1,S+=2,R+=S;N+=1,C+=2,R+=C,J.setTile(z+N,U+I,P),J.setTile(z-N,U+I,P),J.setTile(z+N,U-I,P),J.setTile(z-N,U-I,P),J.setTile(z+I,U+N,P),J.setTile(z-I,U+N,P),J.setTile(z+I,U-N,P),J.setTile(z-I,U-N,P)}return J}function NJ(J,z,U,G){let{widthTiles:P,heightTiles:R}=J,C=[];C.push({x:z,y:U});let S=void 0;while(typeof(S=C.shift())!=="undefined"){let N=S,I=S;if(S.x+1<P)I={x:S.x+1,y:S.y};while(J.getTile(N.x,N.y).type!==G){if(J.setTile(N.x,N.y,G),N.y+1<R){if(J.getTile(N.x,N.y+1).type!==G)C.push({x:N.x,y:N.y+1})}if(N.y-1>=0){if(J.getTile(N.x,N.y-1).type!==G)C.push({x:N.x,y:N.y-1})}if(N.x-1>=0)N.x-=1;else break}while(J.getTile(I.x,I.y).type!==G){if(J.setTile(I.x,I.y,G),I.y+1<R){if(J.getTile(I.x,I.y+1).type!==G)C.push({x:I.x,y:I.y+1})}if(I.y-1>=0){if(J.getTile(I.x,I.y-1).type!==G)C.push({x:I.x,y:I.y-1})}if(I.x+1<P)I.x+=1;else break}}return J}function o6(J,z){if(z?.oldMapId?.startsWith("shop_instance")){J=u6(J,z.oldMapId);let U=J.maps[z.newMapId],G=U.getTile(z.newX,z.newY);U.setTile(z.newX,z.newY,G.type,{mapId:"shop_instance",x:z.oldX,y:z.oldY})}if(z?.newMapId?.startsWith("shop_instance")){let U=c0(W.map_snippets.shop_instance);U.id+="_"+z.oldMapId+"_"+z.entityId,U.setTile(z.newX,z.newY,W.tiles.portal,{mapId:z.oldMapId,x:z.oldX,y:z.oldY}),J.maps[z.oldMapId].setTile(z.oldX,z.oldY,z.oldTileType,{mapId:U.id,x:z.newX,y:z.newY});let P=J.entities[z.entityId];if(P.id.startsWith("player"))J.currentMapId=U.id;if(P.mapId=U.id,P.x=z.newX,P.Y=z.newY,J.maps[U.id]=U,J=U1(J,W.items.hammer,U.id,4,4,0,-200),J=U1(J,W.items.pickaxe,U.id,4,6,0,-200),J=U1(J,W.items.battery,U.id,4,8,0,-200),J=U1(J,W.items.gold,U.id,4,10,1,-1e4),J=A0(J,U.id+"_shopkeeper",W.entities.AeroBot,U.id,6,2,{faction:P.options.faction,dialog:"shop_instance_shopkeeper",name:"Shopkeeper"}),z?.oldMapId.startsWith("bot_stadium"))J=A0(J,U.id+"_shopper",W.entities.WorkBot,U.id,1,12,{faction:P.options.faction,dialog:"shop_instance_workbot_shopper"});else if(z?.oldMapId.startsWith("bot_bar"))J=A0(J,U.id+"_shopper",W.entities.AeroBot,U.id,4,11,{faction:P.options.faction,dialog:"shop_instance_aerobot_shopper"})}return J}function a6(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!0,actionLog:[],chatLog:[],currentMapId:"",effects:{},entities:{},items:{},lastSpacePositionByEntity:{},maps:{},rng:new f0,tools:{},tvs:{}}}function i6(J){let z=void 0;while(typeof(z=J._combatQueue.shift())!=="undefined"){let U=-1,G=-5,P=R1(J,z.entityId);if(P)U=P.type.energyCost,G=-1*Math.abs(P.type.damage);J._energyQueue.push({entityId:z.entityId,energyDelta:U}),J._energyQueue.push({entityId:z.otherEntityId,energyDelta:G});let R=J.entities[z.entityId],C=J.entities[z.otherEntityId],S=R?.options?.name?R.options.name:R.type.name,N=C?.options?.name?C.options.name:C.type.name;J=w0(J,`${S} did ${Math.abs(G)} damage to ${N} at cost of ${Math.abs(U)} energy.`)}return J}function t6(J){let z=void 0,U=new Set;while(typeof(z=J._energyQueue.shift())!=="undefined"){let G=J.entities[z.entityId];if(G.energy=Math.min(G.energy+z.energyDelta,G.energyMax),G.energy<=0)U.add(G.id)}for(let G of U){let P=J.entities[G];J._despawnQueue.push(G);let R=P?.options?.name?P.options.name:P.type.name;if(!j0(P)){let C=Math.max(1,Math.floor(P.energyMax/3));J=O6(J,C,P.mapId,P.x,P.y),J=w0(J,`${R} destroyed leaving behind Junk.`)}}return J}function e6(J){return J=N6(J),J=i6(J),J=_6(J),J=t6(J),J=W6(J),J=b6(J),J=I6(J),J}class E1{state;constructor(){}init(){return this.state=a6(),this.state=P1(this.state,0,m6),this.state=P1(this.state,0,o6),this.state=P1(this.state,1,F6),this.state=s6(this.state),this.state=f6(this.state),this.state.currentMapId="botmos_hull_selection",this.state=A0(this.state,W0(),W.entities.Spirit,this.state.currentMapId,9,5,{faction:W.factions.Spirits,name:"Player"}),this.state}update(J,z=!1){let U=this.state.entities[W0()];if(U){if(J){switch(J){case W.commands.M:this.state._menuOpen=!this.state._menuOpen;break;case W.commands["#"]:this.state=w0(this.state,P6(this.state,W0()));break;default:this.state=h6(this.state,U,J),this.state=e6(this.state)}this.state.actionLog.push(J.key)}}else this.state=w0(this.state,`Game over! ${this.state.actionLog.length} turns.`),console.log(`Game over! ${this.state.actionLog.length} turns: ${this.state.actionLog.join("")}`),this.state.currentMapId="botmos_hull_selection",this.state=A0(this.state,W0(),W.entities.Spirit,this.state.currentMapId,9,5,{faction:W.factions.Spirits,name:"Player"});return this.state}play(J){for(let z=0;z<J.length;z++){let U=J[z];this.update(W.commands[U],!0)}return this.state}}var y={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1,slash:!1},Z6=[],N1=void 0,JZ=void 0,ZZ=0;document.body.addEventListener("keydown",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":y.up=!0,q0(J);break;case"a":case"ArrowLeft":y.left=!0,q0(J);break;case"s":case"ArrowDown":y.down=!0,q0(J);break;case"d":case"ArrowRight":y.right=!0,q0(J);break;case"x":y.a=!0,q0(J);break;case" ":case"y":case"z":y.b=!0,q0(J);break;case"m":y.menu=!0,q0(J);break;case"#":case"/":y.slash=!0,q0(J);break;default:}N0(QZ())});function N0(J){let z=Date.now();if(N1!==void 0&&z-ZZ>=W.constants.MIN_TURN_SPEED_IN_MS)ZZ=z,N1(J)}document.body.addEventListener("keyup",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":y.up=!1,q0(J);break;case"a":case"ArrowLeft":y.left=!1,q0(J);break;case"s":case"ArrowDown":y.down=!1,q0(J);break;case"d":case"ArrowRight":y.right=!1,q0(J);break;case"x":y.a=!1,q0(J);break;case" ":case"y":case"z":y.b=!1,q0(J);break;case"m":y.menu=!1,q0(J);break;case"#":case"/":y.slash=!1,q0(J);default:}});document.body.addEventListener("click",function(J){let{clientX:z,clientY:U}=J,P=document.body.clientWidth/3,C=document.body.clientHeight/3;if(z>=P&&z<2*P&&U<C)N0(W.commands.N),q0(J);else if(z<P&&U<C)N0(W.commands.B),q0(J);else if(z>=2*P&&U<C)N0(W.commands.A),q0(J);else if(z<P&&U>=C&&U<2*C)N0(W.commands.W),q0(J);else if(z>=2*P&&U>=C&&U<2*C)N0(W.commands.E),q0(J);else if(z>=P&&z<2*P&&U>=2*C)N0(W.commands.S),q0(J);else if(z>=P&&z<2*P&&U>=C&&U<2*C)N0(W.commands.M),q0(J)});function q0(J){J.preventDefault(),J.stopPropagation()}var $1=null;function vJ(){let J=null;if(y.right)J=W.commands.E;if(y.left)J=W.commands.W;if(y.down)J=W.commands.S;if(y.up)J=W.commands.N;if(y.up&&y.right){if(J===W.commands.N&&$1===W.commands.N)J=W.commands.E}if(y.up&&y.left){if(J===W.commands.N&&$1===W.commands.N)J=W.commands.W}if(y.down&&y.right){if(J===W.commands.S&&$1===W.commands.S)J=W.commands.E}if(y.down&&y.left){if(J===W.commands.S&&$1===W.commands.S)J=W.commands.W}if(y.a)J=W.commands.A;if(y.b)J=W.commands.B;if(y.menu)J=W.commands.M;if(y.slash)J=W.commands["#"];if($1=J,J!==null)Z6.push(J)}function QZ(){vJ();let J=Z6.shift()||null;return Z6=[],J}document.body.addEventListener("mousemove",function(J){if(J.defaultPrevented)return;if(N1!==void 0)JZ(J),q0(J)});var VZ=void 0;window.addEventListener("gamepadconnected",(J)=>{VZ=setInterval(function(){let z=navigator.getGamepads()[J.gamepad?.index];if(y.right=z.buttons[15].pressed,y.left=z.buttons[14].pressed,y.down=z.buttons[13].pressed,y.up=z.buttons[12].pressed,y.a=z.buttons[0].pressed||z.buttons[2].pressed,y.b=z.buttons[1].pressed||z.buttons[3].pressed,y.menu=z.buttons[9].pressed,y.right||y.left||y.down||y.up||y.a||y.b||y.menu)N0(QZ())},100)});window.addEventListener("gamepaddisconnected",(J)=>{clearInterval(VZ)});function KZ(J){N1=J}function zZ(J){JZ=J}var GZ=r1(C1(),1);var v1={__10:[0,0],__11:[16,0],__12:[32,0],__13:[48,0],__14:[64,0],__15:[80,0],__1:[96,0],_1:[112,0],__2:[128,0],_2:[144,0],__3:[160,0],_3:[176,0],__4:[192,0],_4:[208,0],__5:[224,0],_5:[240,0],__6:[256,0],_6:[272,0],__7:[288,0],_7:[304,0],__8:[320,0],_8:[336,0],__9:[352,0],_9:[368,0],AeroBot_a:[384,0],AeroBot:[400,0],battery:[416,0],broom:[432,0],chargepad:[448,0],cheat:[464,0],chest:[480,0],Cleaner_a:[496,0],Cleaner:[512,0],Deviant:[528,0],drain:[544,0],energy:[560,0],gold:[576,0],goo:[592,0],Graffiticyan:[608,0],Graffitimagenta:[624,0],Graffitiyellow:[640,0],hammer:[656,0],junk:[672,0],matter:[688,0],movableboulder:[704,0],movablebox:[720,0],moveeast:[736,0],movenorth:[752,0],movesouth:[768,0],movewest:[784,0],pickaxe:[800,0],Pioneer_a:[816,0],Pioneer:[832,0],portalclosed:[848,0],portalhidden:[864,0],portallauncher:[880,0],portal:[896,0],portalsewers:[912,0],portalstartaerobot:[928,0],"_portalstart?":[944,0],portalstartworkbot:[960,0],Recharger:[976,0],RoboRat_a:[992,0],RoboRat:[1008,0],RockCrusher:[1024,0],rock:[1040,0],Screwing:[1056,0],shocker:[1072,0],spacerock:[1088,0],spacetree:[1104,0],spacevoid:[1120,0],spacevoidstarwhite:[1136,0],spacevoidstaryellow:[1152,0],spacewater_a:[1168,0],spacewater:[1184,0],Spirit_a:[1200,0],Spirit:[1216,0],star:[1232,0],terminal:[1248,0],tree:[1264,0],trident:[1280,0],tv:[1296,0],Valkyrie_a:[1312,0],Valkyrie:[1328,0],voidhidden:[1344,0],void:[1360,0],voidtrue:[1376,0],wall0:[1392,0],wall1:[1408,0],wall2:[1424,0],walla_:[1440,0],wallA:[1456,0],wallb_:[1472,0],wallB:[1488,0],wallc_:[1504,0],wallC:[1520,0],WallCrusher:[1536,0],walld_:[1552,0],wallD:[1568,0],walle_:[1584,0],wallE:[1600,0],wallf_:[1616,0],wallF:[1632,0],wallg_:[1648,0],wallG:[1664,0],wallh_:[1680,0],wallH:[1696,0],walli_:[1712,0],wallI:[1728,0],wallj_:[1744,0],wallJ:[1760,0],wallk_:[1776,0],wallK:[1792,0],walll_:[1808,0],wallL:[1824,0],wallm_:[1840,0],wallM:[1856,0],walln_:[1872,0],wallN:[1888,0],wallo_:[1904,0],wallO:[1920,0],"wall(":[1936,0],"wall)":[1952,0],"wall+":[1968,0],"wall,":[1984,0],"wall.":[2000,0],wall:[2016,0],"wall:":[2032,0],wall_:[2048,0],"wall|":[2064,0],wallp_:[2080,0],wallP:[2096,0],wallq_:[2112,0],wallQ:[2128,0],wallr_:[2144,0],wallR:[2160,0],walls_:[2176,0],wallS:[2192,0],wallstatueaerobot:[2208,0],wallstatuecleaner:[2224,0],wallstatuepioneer:[2240,0],wallstatueworkbot:[2256,0],wallt_:[2272,0],wallT:[2288,0],wallu_:[2304,0],wallU:[2320,0],wallv_:[2336,0],wallV:[2352,0],wallweak:[2368,0],wallw_:[2384,0],wallW:[2400,0],wallx_:[2416,0],wallX:[2432,0],wally_:[2448,0],wallY:[2464,0],wallz_:[2480,0],wallZ:[2496,0],water_a:[2512,0],WaterImmunity:[2528,0],water:[2544,0],watersewage_a:[2560,0],watersewage:[2576,0],WaterShield:[2592,0],WorkBot_a:[2608,0],WorkBot:[2624,0],wrench:[2640,0]};var a0=document.createElement("div");a0.id="ui";document.body.appendChild(a0);var S1=V6(),o0=V6(),J6=SJ();J6.style.marginRight=`${p.fontSize/2}px`;var b1=[];for(let J=0;J<p.uiEffectsMaxDisplaySize;J++)b1.push(V6());var v0=document.createElement("div");v0.replaceChildren(S1,o0,J6,...b1);a0.replaceChildren(v0);var k1=document.createElement("div");k1.style.display="flex";k1.style.justifyContent="space-between";var I1=document.createElement("div");I1.id="uichatlog";var qZ=document.createElement("div");qZ.id="uitooltip";k1.replaceChildren(I1,qZ);a0.appendChild(k1);var Q6=document.createElement("div");Q6.id="uimousetooltip";document.body.appendChild(Q6);async function UZ(J,z=0){if(!p.showUI)return;let U=W0(),G=J.entities[U],P="";if(G){d0(S1,G.type.name),S1.dataset.tooltip="Player hull: "+G.type.name;let R="",C=R1(J,U);if(C){d0(o0,C.type.name.toLowerCase());let n=C.type;o0.dataset.tooltip=`Player tool: ${n.name} (${Math.abs(n.damage)} damage, ${n.energyCost} energy)`}else d0(o0,null),o0.dataset.tooltip=void 0;let S=D6(J,U);for(let n=0;n<p.uiEffectsMaxDisplaySize;n++){let Q0=S[n]?.type.name||null,l=S[n]?.type.tooltip||void 0;d0(b1[n],Q0),b1[n].dataset.tooltip=l}let N="";if(G.matter>0)N=`${G.matter}M `;let I="";if(G.gold>0)I=`${G.gold}G `;let c=H1(J,G);if(P=" "+G.energy+"/"+G.energyMax+" "+R+I+N+"Y:"+c.B.name+" X:"+c.A.name,a0.style.flexDirection="column-reverse",G.y-z>=B0.height-3)a0.style.flexDirection="column";if(v0.style.background="#000",G.energy/G.energyMax<=0.2)v0.style.color="#000",v0.style.background="#f00";else v0.style.color="#74ee15",v0.style.background="#000"}else d0(S1,null),d0(o0,null),P="Game over!",v0.style.color="#000",v0.style.background="#f00";if(J6.innerText=P,J._menuOpen&&!!J.chatLog.length){let R=J.chatLog.slice(-p.chatLogMaxDisplaySize);I1.innerText=R.join(`
`)}else I1.innerText=""}function V6(){let J=document.createElement("span");return d0(J,null),J.style.height=`${p.fontSize}px`,J.style.display="inline-block",J}function SJ(){let J=document.createElement("span");return J.style.display="inline-block",J.style.marginLeft=`${p.fontSize/2}px`,J}function d0(J,z){if(z){let U=v1[z][0];J.style.background=`url('build/tiles.png') -${U}px 0`,J.style.width=`${p.fontSize}px`}else J.style.width="0px"}function $Z(){return Q6}var p0="_a",BZ=document.createElement("img");BZ.src="build/tiles.png";B0.tileSet=BZ;B0.tileMap=kJ();var t0=new GZ.Display(B0);document.body.appendChild(t0.getContainer());var YZ=0,wZ=0,i0=void 0;function bJ(J,z,U=!1){i0=J;let G=J.currentMapId,P=J.maps[G],R=U?p0:"",C=0,S=0;if(P.widthTiles<z.width)C=Math.floor((z.width-P.widthTiles)/2),z.x=0;if(P.heightTiles<z.height)S=Math.floor((z.height-P.heightTiles)/2),z.y=0;YZ=z.x-C,wZ=z.y-S;let N={},I={},c={};for(let x=0;x<z.height;x++)for(let _=0;_<z.width;_++){let r=P.getTile(z.x+_,z.y+x),U0="";if(r?.type)if(r.options.sign)U0="#"+r.options.sign;else U0=r.type.icon;if(U0){let o=[C+_,S+x].toString();N[o]=[U0+R],I[o]=["transparent"],c[o]=["transparent"]}}let n=W1(J,G);for(let x=0;x<n.length;x++){let _=n[x],r=C+_.x-z.x,U0=S+_.y-z.y,o=[r,U0].toString();if(N[o])N[o].push(_.type.icon+R),I[o].push("transparent"),c[o].push("transparent");else N[o]=[_.type.icon+R],I[o]=["transparent"],c[o]=["transparent"]}let Q0=W0(),l=J.entities[Q0],m=((l||{}).options||{}).faction||void 0,V0=x0(J,G);for(let x=0;x<V0.length;x++){let _=V0[x],r=C+_.x-z.x,U0=S+_.y-z.y,o="transparent";if(p.highlightEnemy&&!!m&&!j0(_)&&!s1(_))o=m===_.options.faction?"rgba(116, 238, 21, 0.5)":"rgba(240, 0, 255, 0.5)";if(_===l)o="transparent";let A=[r,U0].toString();if(N[A])N[A].push(_.type.icon+R),I[A].push(o),c[A].push("transparent");else N[A]=[_.type.icon+R],I[A]=[o],c[A]=["transparent"];if(p.showEnergy!==0){let f=p.showEnergy===1?16:10,u=p.showEnergy===1?"__":"_",T=Math.ceil(_.energy/_.energyMax*f);if(T<f)N[A].push(u+T),I[A].push("transparent"),c[A].push("transparent")}}t0.clear();for(let[x,_]of Object.entries(N)){let r=x.split(",");t0.draw(Number(r[0]),Number(r[1]),_,I[x],c[x])}}var XZ={x:0,y:0},f1=0;async function l0(J){let z=J.entities[W0()],U=z?z:XZ,G=IJ(U);if(bJ(J,G,f1%2==0),UZ(J,G.y),XZ=U,f1++,f1>=128)f1=0}async function LZ(){t0._backend.setOptions(B0)}function HZ(J){return[J[0]+YZ,J[1]+wZ]}function PZ(J){if(!i0)return{tile:null,entity:null,item:null};let z=i0.currentMapId,U=i0.maps[z],G=J[0],P=J[1],R=U.getTile(G,P),C=w1(i0,z,G,P),S=F1(i0,z,G,P);return{tile:R,entity:C,item:S}}function IJ(J){return{x:Math.min(Math.max(0,J.x-Math.floor(B0.width/2)),n1.WIDTH-B0.width),y:Math.min(Math.max(0,J.y-Math.floor(B0.height/2)),n1.HEIGHT-B0.height),width:B0.width,height:B0.height}}function kJ(){let J={};for(let[z,U]of Object.entries(v1)){let G=z.endsWith(p0),P="";if(G)z=z.substring(0,z.length-p0.length),P=p0;if(z.startsWith("wall")&&(z.length===5||z.length===6))J["#"+z.substring(4,5)+P]=U;else if(Object.hasOwn(W.tiles,z))J[W.tiles[z].icon+P]=U;else if(Object.hasOwn(W.entities,z))J[W.entities[z].icon+P]=U;else if(Object.hasOwn(W.items,z))J[W.items[z].icon+P]=U;else J[z+P]=U}for(let[z,U]of Object.entries(J))if(!z.endsWith(p0)&&!Object.hasOwn(J,z+p0))J[z+p0]=U;return J}async function DZ(J){if(!p.showUI||!p.showTooltip)return;let z="";if(J.target){if(J.target?.dataset?.tooltip)z+=J.target.dataset.tooltip}let U=t0.eventToPosition(J);if(U[0]!==-1){let C=HZ(U),S=PZ(C);if(S.entity){let N=S.entity?.options?.name?S.entity.options.name:S.entity.type.name;z+=N}if(S.item){if(z!=="")z+=`
`;z+=S.item.type.name}if(!!S?.tile?.type&&S.tile?.type.tooltip!==""){if(z!=="")z+=`
`;z+=S.tile.type.tooltip}}let G=typeof window!=="undefined"?window.innerHeight:0,P=Math.floor(G/2),R=$Z();if(z!==""){if(R.innerText=z,R.style.left=J.x+20+"px",R.style.top=J.y+20+"px",J.y>P)R.style.top=J.y-20+"px";R.style.display="inline-block"}else R.style.display="none"}var R0=new E1;window.onload=function(){l0(R0.init())};window.onresize=async function(){let J=typeof window!=="undefined"?window.innerWidth:0,z=typeof window!=="undefined"?window.innerHeight:0;p.cameraWidth=Math.floor(J/p.fontSize),p.cameraHeight=Math.floor(z/p.fontSize),B0.width=Math.floor(p.cameraWidth*(1/p.zoom)),B0.height=Math.floor(p.cameraHeight*(1/p.zoom)),await LZ(),l0(R0.state)};KZ(function(J){l0(R0.update(J))});zZ(DZ);if(!window.BMActionLog)window.BMActionLog=function(){return R0.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(J){l0(R0.play(J))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){p.debug=!p.debug,l0(R0.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){p.showUI=!p.showUI,l0(R0.state)};if(p.debug){if(!window.BMDebugState)window.BMDebugState=function(){return R0.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let J=Object.keys(R0.state.maps).length,z=Object.keys(R0.state.entities).length,U=Object.keys(R0.state.items).length,G=Object.keys(R0.state.tools).length;return`Maps: ${J}, Entities: ${z}, Items: ${U}, Tools: ${G}`}}document.body.focus();
