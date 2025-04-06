var ZJ=Object.create;var{getPrototypeOf:JJ,defineProperty:B6,getOwnPropertyNames:QJ}=Object;var VJ=Object.prototype.hasOwnProperty;var d1=(J,z,$)=>{$=J!=null?ZJ(JJ(J)):{};let G=z||!J||!J.__esModule?B6($,"default",{value:J,enumerable:!0}):$;for(let P of QJ(J))if(!VJ.call(G,P))B6(G,P,{get:()=>J[P],enumerable:!0});return G};var KJ=(J,z)=>()=>(z||J((z={exports:{}}).exports,z),z.exports);var O1=KJ((M1,g6)=>{function c0(J){if(J===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return J}function PJ(J,z){var $=typeof Symbol!=="undefined"&&J[Symbol.iterator]||J["@@iterator"];if($)return($=$.call(J)).next.bind($);if(Array.isArray(J)||($=DJ(J))||z&&J&&typeof J.length==="number"){if($)J=$;var G=0;return function(){if(G>=J.length)return{done:!0};return{done:!1,value:J[G++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DJ(J,z){if(!J)return;if(typeof J==="string")return u6(J,z);var $=Object.prototype.toString.call(J).slice(8,-1);if($==="Object"&&J.constructor)$=J.constructor.name;if($==="Map"||$==="Set")return Array.from(J);if($==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($))return u6(J,z)}function u6(J,z){if(z==null||z>J.length)z=J.length;for(var $=0,G=new Array(z);$<z;$++)G[$]=J[$];return G}function z0(J,z){J.prototype=Object.create(z.prototype),J.prototype.constructor=J,i1(J,z)}function i1(J,z){return i1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function $(G,P){return G.__proto__=P,G},i1(J,z)}(function(J,z){typeof M1==="object"&&typeof g6!=="undefined"?z(M1):typeof define==="function"&&define.amd?define(["exports"],z):(J=typeof globalThis!=="undefined"?globalThis:J||self,z(J.ROT={}))})(M1,function(J){var z=0.00000000023283064365386963,$=function(){function Y(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var B=Y.prototype;return B.getSeed=function q(){return this._seed},B.setSeed=function q(K){return K=K<1?1/K:K,this._seed=K,this._s0=(K>>>0)*z,K=K*69069+1>>>0,this._s1=K*z,K=K*69069+1>>>0,this._s2=K*z,this._c=1,this},B.getUniform=function q(){var K=2091639*this._s0+this._c*z;return this._s0=this._s1,this._s1=this._s2,this._c=K|0,this._s2=K-this._c,this._s2},B.getUniformInt=function q(K,Z){var Q=Math.max(K,Z),V=Math.min(K,Z);return Math.floor(this.getUniform()*(Q-V+1))+V},B.getNormal=function q(K,Z){if(K===void 0)K=0;if(Z===void 0)Z=1;var Q,V,U;do Q=2*this.getUniform()-1,V=2*this.getUniform()-1,U=Q*Q+V*V;while(U>1||U==0);var X=Q*Math.sqrt(-2*Math.log(U)/U);return K+X*Z},B.getPercentage=function q(){return 1+Math.floor(this.getUniform()*100)},B.getItem=function q(K){if(!K.length)return null;return K[Math.floor(this.getUniform()*K.length)]},B.shuffle=function q(K){var Z=[],Q=K.slice();while(Q.length){var V=Q.indexOf(this.getItem(Q));Z.push(Q.splice(V,1)[0])}return Z},B.getWeightedValue=function q(K){var Z=0;for(var Q in K)Z+=K[Q];var V=this.getUniform()*Z,U,X=0;for(U in K)if(X+=K[U],V<X)return U;return U},B.getState=function q(){return[this._s0,this._s1,this._s2,this._c]},B.setState=function q(K){return this._s0=K[0],this._s1=K[1],this._s2=K[2],this._c=K[3],this},B.clone=function q(){var K=new Y;return K.setState(this.getState())},Y}(),G=new $().setSeed(Date.now()),P=function(){function Y(){}var B=Y.prototype;return B.getContainer=function q(){return null},B.setOptions=function q(K){this._options=K},Y}(),R=function(Y){z0(B,Y);function B(){var K=Y.call(this)||this;return K._ctx=document.createElement("canvas").getContext("2d"),K}var q=B.prototype;return q.schedule=function K(Z){requestAnimationFrame(Z)},q.getContainer=function K(){return this._ctx.canvas},q.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z);var Q=Z.fontStyle?Z.fontStyle+" ":"",V=Q+" "+Z.fontSize+"px "+Z.fontFamily;this._ctx.font=V,this._updateSize(),this._ctx.font=V,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},q.clear=function K(){var Z=this._ctx.globalCompositeOperation;this._ctx.globalCompositeOperation="copy",this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.globalCompositeOperation=Z},q.eventToPosition=function K(Z,Q){var V=this._ctx.canvas,U=V.getBoundingClientRect();if(Z-=U.left,Q-=U.top,Z*=V.width/U.width,Q*=V.height/U.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},B}(P);function j(Y,B){return(Y%B+B)%B}function S(Y,B,q){if(B===void 0)B=0;if(q===void 0)q=1;if(Y<B)return B;if(Y>q)return q;return Y}function N(Y){return Y.charAt(0).toUpperCase()+Y.substring(1)}function I(Y){for(var B=arguments.length,q=new Array(B>1?B-1:0),K=1;K<B;K++)q[K-1]=arguments[K];var Z=I.map,Q=function V(U,X,w,L){if(Y.charAt(L-1)=="%")return U.substring(1);if(!q.length)return U;var H=q[0],D=X||w,W=D.split(","),M=W.shift()||"",O=Z[M.toLowerCase()];if(!O)return U;H=q.shift();var C=H[O].apply(H,W),f=M.charAt(0);if(f!=f.toLowerCase())C=N(C);return C};return Y.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,Q)}I.map={s:"toString"};var m=Object.freeze({__proto__:null,mod:j,clamp:S,capitalize:N,format:I}),J0=function(Y){z0(B,Y);function B(){var K=Y.call(this)||this;return K._spacingX=0,K._spacingY=0,K._hexSize=0,K}var q=B.prototype;return q.draw=function K(Z,Q){var V=Z[0],U=Z[1],X=Z[2],w=Z[3],L=Z[4],H=[(V+1)*this._spacingX,U*this._spacingY+this._hexSize];if(this._options.transpose)H.reverse();if(Q)this._ctx.fillStyle=L,this._fill(H[0],H[1]);if(!X)return;this._ctx.fillStyle=w;var D=[].concat(X);for(var W=0;W<D.length;W++)this._ctx.fillText(D[W],H[0],Math.ceil(H[1]))},q.computeSize=function K(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=Math.floor(Z/this._spacingX)-1,U=Math.floor((Q-2*this._hexSize)/this._spacingY+1);return[V,U]},q.computeFontSize=function K(Z,Q){if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q;var V=2*Z/((this._options.width+1)*Math.sqrt(3))-1,U=Q/(2+1.5*(this._options.height-1)),X=Math.min(V,U),w=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var L=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=w;var H=L/100;X=Math.floor(X)+1;var D=2*X/(this._options.spacing*(1+H/Math.sqrt(3)));return Math.ceil(D)-1},q._normalizedEventToPosition=function K(Z,Q){var V;if(this._options.transpose)Z+=Q,Q=Z-Q,Z-=Q,V=this._ctx.canvas.width;else V=this._ctx.canvas.height;var U=V/this._options.height;if(Q=Math.floor(Q/U),j(Q,2))Z-=this._spacingX,Z=1+2*Math.floor(Z/(2*this._spacingX));else Z=2*Math.floor(Z/(2*this._spacingX));return[Z,Q]},q._fill=function K(Z,Q){var V=this._hexSize,U=this._options.border,X=this._ctx;if(X.beginPath(),this._options.transpose)X.moveTo(Z-V+U,Q),X.lineTo(Z-V/2+U,Q+this._spacingX-U),X.lineTo(Z+V/2-U,Q+this._spacingX-U),X.lineTo(Z+V-U,Q),X.lineTo(Z+V/2-U,Q-this._spacingX+U),X.lineTo(Z-V/2+U,Q-this._spacingX+U),X.lineTo(Z-V+U,Q);else X.moveTo(Z,Q-V+U),X.lineTo(Z+this._spacingX-U,Q-V/2+U),X.lineTo(Z+this._spacingX-U,Q+V/2-U),X.lineTo(Z,Q+V-U),X.lineTo(Z-this._spacingX+U,Q+V/2-U),X.lineTo(Z-this._spacingX+U,Q-V/2+U),X.lineTo(Z,Q-V+U);X.fill()},q._updateSize=function K(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(Z.spacing*(Z.fontSize+Q/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var V,U;if(Z.transpose)V="height",U="width";else V="width",U="height";this._ctx.canvas[V]=Math.ceil((Z.width+1)*this._spacingX),this._ctx.canvas[U]=Math.ceil((Z.height-1)*this._spacingY+2*this._hexSize)},B}(R),V0=function(Y){z0(B,Y);function B(){var K=Y.call(this)||this;return K._spacingX=0,K._spacingY=0,K._canvasCache={},K}var q=B.prototype;return q.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z),this._canvasCache={}},q.draw=function K(Z,Q){if(B.cache)this._drawWithCache(Z);else this._drawNoCache(Z,Q)},q._drawWithCache=function K(Z){var Q=Z[0],V=Z[1],U=Z[2],X=Z[3],w=Z[4],L=""+U+X+w,H;if(L in this._canvasCache)H=this._canvasCache[L];else{var D=this._options.border;H=document.createElement("canvas");var W=H.getContext("2d");if(H.width=this._spacingX,H.height=this._spacingY,W.fillStyle=w,W.fillRect(D,D,H.width-D,H.height-D),U){W.fillStyle=X,W.font=this._ctx.font,W.textAlign="center",W.textBaseline="middle";var M=[].concat(U);for(var O=0;O<M.length;O++)W.fillText(M[O],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[L]=H}this._ctx.drawImage(H,Q*this._spacingX,V*this._spacingY)},q._drawNoCache=function K(Z,Q){var V=Z[0],U=Z[1],X=Z[2],w=Z[3],L=Z[4];if(Q){var H=this._options.border;this._ctx.fillStyle=L,this._ctx.fillRect(V*this._spacingX+H,U*this._spacingY+H,this._spacingX-H,this._spacingY-H)}if(!X)return;this._ctx.fillStyle=w;var D=[].concat(X);for(var W=0;W<D.length;W++)this._ctx.fillText(D[W],(V+0.5)*this._spacingX,Math.ceil((U+0.5)*this._spacingY))},q.computeSize=function K(Z,Q){var V=Math.floor(Z/this._spacingX),U=Math.floor(Q/this._spacingY);return[V,U]},q.computeFontSize=function K(Z,Q){var V=Math.floor(Z/this._options.width),U=Math.floor(Q/this._options.height),X=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var w=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=X;var L=w/100,H=L*U/V;if(H>1)U=Math.floor(U/H);return Math.floor(U/this._options.spacing)},q._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._spacingX),Math.floor(Q/this._spacingY)]},q._updateSize=function K(){var Z=this._options,Q=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(Z.spacing*Q),this._spacingY=Math.ceil(Z.spacing*Z.fontSize),Z.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=Z.width*this._spacingX,this._ctx.canvas.height=Z.height*this._spacingY},B}(R);V0.cache=!1;var r=function(Y){z0(B,Y);function B(){var K=Y.call(this)||this;return K._colorCanvas=document.createElement("canvas"),K}var q=B.prototype;return q.draw=function K(Z,Q){var V=Z[0],U=Z[1],X=Z[2],w=Z[3],L=Z[4],H=this._options.tileWidth,D=this._options.tileHeight;if(Q)if(this._options.tileColorize)this._ctx.clearRect(V*H,U*D,H,D);else this._ctx.fillStyle=L,this._ctx.fillRect(V*H,U*D,H,D);if(!X)return;var W=[].concat(X),M=[].concat(w),O=[].concat(L);for(var C=0;C<W.length;C++){var f=this._options.tileMap[W[C]];if(!f)throw new Error('Char "'+W[C]+'" not found in tileMap');if(this._options.tileColorize){var g=this._colorCanvas,h=g.getContext("2d");h.globalCompositeOperation="source-over",h.clearRect(0,0,H,D);var d=M[C],i=O[C];if(h.drawImage(this._options.tileSet,f[0],f[1],H,D,0,0,H,D),d!="transparent")h.fillStyle=d,h.globalCompositeOperation="source-atop",h.fillRect(0,0,H,D);if(i!="transparent")h.fillStyle=i,h.globalCompositeOperation="destination-over",h.fillRect(0,0,H,D);this._ctx.drawImage(g,V*H,U*D,H,D)}else this._ctx.drawImage(this._options.tileSet,f[0],f[1],H,D,V*H,U*D,H,D)}},q.computeSize=function K(Z,Q){var V=Math.floor(Z/this._options.tileWidth),U=Math.floor(Q/this._options.tileHeight);return[V,U]},q.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},q._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},q._updateSize=function K(){var Z=this._options;this._ctx.canvas.width=Z.width*Z.tileWidth,this._ctx.canvas.height=Z.height*Z.tileHeight,this._colorCanvas.width=Z.tileWidth,this._colorCanvas.height=Z.tileHeight},B}(R);function c(Y){var B,q;if(Y in A)B=A[Y];else{if(Y.charAt(0)=="#"){var K=Y.match(/[0-9a-f]/gi)||[],Z=K.map(function(V){return parseInt(V,16)});if(Z.length==3)B=Z.map(function(V){return V*17});else{for(var Q=0;Q<3;Q++)Z[Q+1]+=16*Z[Q],Z.splice(Q,1);B=Z}}else if(q=Y.match(/rgb\(([0-9, ]+)\)/i))B=q[1].split(/\s*,\s*/).map(function(V){return parseInt(V)});else B=[0,0,0];A[Y]=B}return B.slice()}function Q0(Y){var B=Y.slice();for(var q=arguments.length,K=new Array(q>1?q-1:0),Z=1;Z<q;Z++)K[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++)for(var V=0;V<K.length;V++)B[Q]+=K[V][Q];return B}function x(Y){for(var B=arguments.length,q=new Array(B>1?B-1:0),K=1;K<B;K++)q[K-1]=arguments[K];for(var Z=0;Z<3;Z++)for(var Q=0;Q<q.length;Q++)Y[Z]+=q[Q][Z];return Y}function _(Y){var B=Y.slice();for(var q=arguments.length,K=new Array(q>1?q-1:0),Z=1;Z<q;Z++)K[Z-1]=arguments[Z];for(var Q=0;Q<3;Q++){for(var V=0;V<K.length;V++)B[Q]*=K[V][Q]/255;B[Q]=Math.round(B[Q])}return B}function p(Y){for(var B=arguments.length,q=new Array(B>1?B-1:0),K=1;K<B;K++)q[K-1]=arguments[K];for(var Z=0;Z<3;Z++){for(var Q=0;Q<q.length;Q++)Y[Z]*=q[Q][Z]/255;Y[Z]=Math.round(Y[Z])}return Y}function q0(Y,B,q){if(q===void 0)q=0.5;var K=Y.slice();for(var Z=0;Z<3;Z++)K[Z]=Math.round(K[Z]+q*(B[Z]-Y[Z]));return K}var s=q0;function E(Y,B,q){if(q===void 0)q=0.5;var K=T(Y),Z=T(B);for(var Q=0;Q<3;Q++)K[Q]+=q*(Z[Q]-K[Q]);return a(K)}var k=E;function u(Y,B){if(!(B instanceof Array))B=Math.round(G.getNormal(0,B));var q=Y.slice();for(var K=0;K<3;K++)q[K]+=B instanceof Array?Math.round(G.getNormal(0,B[K])):B;return q}function T(Y){var B=Y[0]/255,q=Y[1]/255,K=Y[2]/255,Z=Math.max(B,q,K),Q=Math.min(B,q,K),V=0,U,X=(Z+Q)/2;if(Z==Q)U=0;else{var w=Z-Q;switch(U=X>0.5?w/(2-Z-Q):w/(Z+Q),Z){case B:V=(q-K)/w+(q<K?6:0);break;case q:V=(K-B)/w+2;break;case K:V=(B-q)/w+4;break}V/=6}return[V,U,X]}function t(Y,B,q){if(q<0)q+=1;if(q>1)q-=1;if(q<0.16666666666666666)return Y+(B-Y)*6*q;if(q<0.5)return B;if(q<0.6666666666666666)return Y+(B-Y)*(0.6666666666666666-q)*6;return Y}function a(Y){var B=Y[2];if(Y[1]==0)return B=Math.round(B*255),[B,B,B];else{var q=Y[1],K=B<0.5?B*(1+q):B+q-B*q,Z=2*B-K,Q=t(Z,K,Y[0]+0.3333333333333333),V=t(Z,K,Y[0]),U=t(Z,K,Y[0]-0.3333333333333333);return[Math.round(Q*255),Math.round(V*255),Math.round(U*255)]}}function b(Y){var B=Y.map(function(q){return S(q,0,255)});return"rgb("+B.join(",")+")"}function v(Y){var B=Y.map(function(q){return S(q,0,255).toString(16).padStart(2,"0")});return"#"+B.join("")}var A={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},o=Object.freeze({__proto__:null,fromString:c,add:Q0,add_:x,multiply:_,multiply_:p,interpolate:q0,lerp:s,interpolateHSL:E,lerpHSL:k,randomize:u,rgb2hsl:T,hsl2rgb:a,toRGB:b,toHex:v}),e=function(Y){z0(B,Y);function B(){var K=Y.call(this)||this;K._uniforms={};try{K._gl=K._initWebGL()}catch(Z){if(typeof Z==="string")alert(Z);else if(Z instanceof Error)alert(Z.message)}return K}B.isSupported=function K(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var q=B.prototype;return q.schedule=function K(Z){requestAnimationFrame(Z)},q.getContainer=function K(){return this._gl.canvas},q.setOptions=function K(Z){var Q=this;Y.prototype.setOptions.call(this,Z),this._updateSize();var V=this._options.tileSet;if(V&&"complete"in V&&!V.complete)V.addEventListener("load",function(){return Q._updateTexture(V)});else this._updateTexture(V)},q.draw=function K(Z,Q){var V=this._gl,U=this._options,X=Z[0],w=Z[1],L=Z[2],H=Z[3],D=Z[4],W=V.canvas.height-(w+1)*U.tileHeight;if(V.scissor(X*U.tileWidth,W,U.tileWidth,U.tileHeight),Q){if(U.tileColorize)V.clearColor(0,0,0,0);else V.clearColor.apply(V,p0(D));V.clear(V.COLOR_BUFFER_BIT)}if(!L)return;var M=[].concat(L),O=[].concat(D),C=[].concat(H);V.uniform2fv(this._uniforms.targetPosRel,[X,w]);for(var f=0;f<M.length;f++){var g=this._options.tileMap[M[f]];if(!g)throw new Error('Char "'+M[f]+'" not found in tileMap');if(V.uniform1f(this._uniforms.colorize,U.tileColorize?1:0),V.uniform2fv(this._uniforms.tilesetPosAbs,g),U.tileColorize)V.uniform4fv(this._uniforms.tint,p0(C[f])),V.uniform4fv(this._uniforms.bg,p0(O[f]));V.drawArrays(V.TRIANGLE_STRIP,0,4)}},q.clear=function K(){var Z=this._gl;Z.clearColor.apply(Z,p0(this._options.bg)),Z.scissor(0,0,Z.canvas.width,Z.canvas.height),Z.clear(Z.COLOR_BUFFER_BIT)},q.computeSize=function K(Z,Q){var V=Math.floor(Z/this._options.tileWidth),U=Math.floor(Q/this._options.tileHeight);return[V,U]},q.computeFontSize=function K(){throw new Error("Tile backend does not understand font size")},q.eventToPosition=function K(Z,Q){var V=this._gl.canvas,U=V.getBoundingClientRect();if(Z-=U.left,Q-=U.top,Z*=V.width/U.width,Q*=V.height/U.height,Z<0||Q<0||Z>=V.width||Q>=V.height)return[-1,-1];return this._normalizedEventToPosition(Z,Q)},q._initWebGL=function K(){var Z=this,Q=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=Q;var V=j0(Q,D0,X0);return Q.useProgram(V),w0(Q),K0.forEach(function(U){return Z._uniforms[U]=Q.getUniformLocation(V,U)}),this._program=V,Q.enable(Q.BLEND),Q.blendFuncSeparate(Q.SRC_ALPHA,Q.ONE_MINUS_SRC_ALPHA,Q.ONE,Q.ONE_MINUS_SRC_ALPHA),Q.enable(Q.SCISSOR_TEST),Q},q._normalizedEventToPosition=function K(Z,Q){return[Math.floor(Z/this._options.tileWidth),Math.floor(Q/this._options.tileHeight)]},q._updateSize=function K(){var Z=this._gl,Q=this._options,V=[Q.width*Q.tileWidth,Q.height*Q.tileHeight];Z.canvas.width=V[0],Z.canvas.height=V[1],Z.viewport(0,0,V[0],V[1]),Z.uniform2fv(this._uniforms.tileSize,[Q.tileWidth,Q.tileHeight]),Z.uniform2fv(this._uniforms.targetSize,V)},q._updateTexture=function K(Z){t0(this._gl,Z)},B}(P),K0=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],D0=`
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
}`.trim();function j0(Y,B,q){var K=Y.createShader(Y.VERTEX_SHADER);if(Y.shaderSource(K,B),Y.compileShader(K),!Y.getShaderParameter(K,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(K)||"");var Z=Y.createShader(Y.FRAGMENT_SHADER);if(Y.shaderSource(Z,q),Y.compileShader(Z),!Y.getShaderParameter(Z,Y.COMPILE_STATUS))throw new Error(Y.getShaderInfoLog(Z)||"");var Q=Y.createProgram();if(Y.attachShader(Q,K),Y.attachShader(Q,Z),Y.linkProgram(Q),!Y.getProgramParameter(Q,Y.LINK_STATUS))throw new Error(Y.getProgramInfoLog(Q)||"");return Q}function w0(Y){var B=new Float32Array([0,0,1,0,0,1,1,1]),q=Y.createBuffer();Y.bindBuffer(Y.ARRAY_BUFFER,q),Y.bufferData(Y.ARRAY_BUFFER,B,Y.STATIC_DRAW),Y.enableVertexAttribArray(0),Y.vertexAttribPointer(0,2,Y.FLOAT,!1,0,0)}function t0(Y,B){var q=Y.createTexture();return Y.bindTexture(Y.TEXTURE_2D,q),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MAG_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_MIN_FILTER,Y.NEAREST),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_S,Y.REPEAT),Y.texParameteri(Y.TEXTURE_2D,Y.TEXTURE_WRAP_T,Y.REPEAT),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,0),Y.texImage2D(Y.TEXTURE_2D,0,Y.RGBA,Y.RGBA,Y.UNSIGNED_BYTE,B),q}var v0={};function p0(Y){if(!(Y in v0)){var B;if(Y=="transparent")B=[0,0,0,0];else if(Y.indexOf("rgba")>-1){B=(Y.match(/[\d.]+/g)||[]).map(Number);for(var q=0;q<3;q++)B[q]=B[q]/255}else B=c(Y).map(function(K){return K/255}),B.push(1);v0[Y]=B}return v0[Y]}function LZ(Y){return"\x1B[0;48;5;"+I1(Y)+"m\x1B[2J"}function wZ(Y,B){return"\x1B[0;38;5;"+I1(Y)+";48;5;"+I1(B)+"m"}function HZ(Y,B){return"\x1B["+(B+1)+";"+(Y+1)+"H"}function I1(Y){var B=256,q=6,K=q/B,Z=c(Y),Q=Math.floor(Z[0]*K),V=Math.floor(Z[1]*K),U=Math.floor(Z[2]*K);return Q*36+V*6+U*1+16}var Z6=function(Y){z0(B,Y);function B(){var K=Y.call(this)||this;return K._offset=[0,0],K._cursor=[-1,-1],K._lastColor="",K}var q=B.prototype;return q.schedule=function K(Z){setTimeout(Z,16.666666666666668)},q.setOptions=function K(Z){Y.prototype.setOptions.call(this,Z);var Q=[Z.width,Z.height],V=this.computeSize();this._offset=V.map(function(U,X){return Math.floor((U-Q[X])/2)})},q.clear=function K(){process.stdout.write(LZ(this._options.bg))},q.draw=function K(Z,Q){var V=Z[0],U=Z[1],X=Z[2],w=Z[3],L=Z[4],H=this._offset[0]+V,D=this._offset[1]+U,W=this.computeSize();if(H<0||H>=W[0])return;if(D<0||D>=W[1])return;if(H!==this._cursor[0]||D!==this._cursor[1])process.stdout.write(HZ(H,D)),this._cursor[0]=H,this._cursor[1]=D;if(Q){if(!X)X=" "}if(!X)return;var M=wZ(w,L);if(M!==this._lastColor)process.stdout.write(M),this._lastColor=M;if(X!="\t"){var O=[].concat(X);process.stdout.write(O[0])}if(this._cursor[0]++,this._cursor[0]>=W[0])this._cursor[0]=0,this._cursor[1]++},q.computeFontSize=function K(){throw new Error("Terminal backend has no notion of font size")},q.eventToPosition=function K(Z,Q){return[Z,Q]},q.computeSize=function K(){return[process.stdout.columns,process.stdout.rows]},B}(P),PZ=/%([bc]){([^}]*)}/g,f0=0,u0=1,b1=2,k1=3;function DZ(Y,B){var q={width:0,height:1},K=u1(Y,B),Z=0;for(var Q=0;Q<K.length;Q++){var V=K[Q];switch(V.type){case f0:Z+=V.value.length;break;case u0:q.height++,q.width=Math.max(q.width,Z),Z=0;break}}return q.width=Math.max(q.width,Z),q}function u1(Y,B){var q=[],K=0;Y.replace(PZ,function(Q,V,U,X){var w=Y.substring(K,X);if(w.length)q.push({type:f0,value:w});return q.push({type:V=="c"?b1:k1,value:U.trim()}),K=X+Q.length,""});var Z=Y.substring(K);if(Z.length)q.push({type:f0,value:Z});return WZ(q,B)}function WZ(Y,B){if(!B)B=1/0;var q=0,K=0,Z=-1;while(q<Y.length){var Q=Y[q];if(Q.type==u0)K=0,Z=-1;if(Q.type!=f0){q++;continue}while(K==0&&Q.value.charAt(0)==" ")Q.value=Q.value.substring(1);var V=Q.value.indexOf(`
`);if(V!=-1){Q.value=$1(Y,q,V,!0);var U=Q.value.split("");while(U.length&&U[U.length-1]==" ")U.pop();Q.value=U.join("")}if(!Q.value.length){Y.splice(q,1);continue}if(K+Q.value.length>B){var X=-1;while(!0){var w=Q.value.indexOf(" ",X+1);if(w==-1)break;if(K+w>B)break;X=w}if(X!=-1)Q.value=$1(Y,q,X,!0);else if(Z!=-1){var L=Y[Z],H=L.value.lastIndexOf(" ");L.value=$1(Y,Z,H,!0),q=Z}else Q.value=$1(Y,q,B-K,!1)}else if(K+=Q.value.length,Q.value.indexOf(" ")!=-1)Z=q;q++}Y.push({type:u0});var D=null;for(var W=0;W<Y.length;W++){var M=Y[W];switch(M.type){case f0:D=M;break;case u0:if(D){var O=D.value.split("");while(O.length&&O[O.length-1]==" ")O.pop();D.value=O.join("")}D=null;break}}return Y.pop(),Y}function $1(Y,B,q,K){var Z={type:u0},Q={type:f0,value:Y[B].value.substring(q+(K?1:0))};return Y.splice(B+1,0,Z,Q),Y[B].value.substring(0,q)}var FZ=Object.freeze({__proto__:null,TYPE_TEXT:f0,TYPE_NEWLINE:u0,TYPE_FG:b1,TYPE_BG:k1,measure:DZ,tokenize:u1}),g1=80,T1=25,G0={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},RZ={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},MZ={hex:J0,rect:V0,tile:r,"tile-gl":e,term:Z6},OZ={width:g1,height:T1,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},l0=function(){function Y(q){if(q===void 0)q={};this._data={},this._dirty=!1,this._options={},q=Object.assign({},OZ,q),this.setOptions(q),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var B=Y.prototype;return B.DEBUG=function q(K,Z,Q){var V=[this._options.bg,this._options.fg];this.draw(K,Z,null,null,V[Q%V.length])},B.clear=function q(){this._data={},this._dirty=!0},B.setOptions=function q(K){if(Object.assign(this._options,K),K.width||K.height||K.fontSize||K.fontFamily||K.spacing||K.layout){if(K.layout){var Z=MZ[K.layout];this._backend=new Z}this._backend.setOptions(this._options),this._dirty=!0}return this},B.getOptions=function q(){return this._options},B.getContainer=function q(){return this._backend.getContainer()},B.computeSize=function q(K,Z){return this._backend.computeSize(K,Z)},B.computeFontSize=function q(K,Z){return this._backend.computeFontSize(K,Z)},B.computeTileSize=function q(K,Z){var Q=Math.floor(K/this._options.width),V=Math.floor(Z/this._options.height);return[Q,V]},B.eventToPosition=function q(K){var Z,Q;if("touches"in K)Z=K.touches[0].clientX,Q=K.touches[0].clientY;else Z=K.clientX,Q=K.clientY;return this._backend.eventToPosition(Z,Q)},B.draw=function q(K,Z,Q,V,U){if(!V)V=this._options.fg;if(!U)U=this._options.bg;var X=K+","+Z;if(this._data[X]=[K,Z,Q,V,U],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[X]=!0},B.drawOver=function q(K,Z,Q,V,U){var X=K+","+Z,w=this._data[X];if(w)w[2]=Q||w[2],w[3]=V||w[3],w[4]=U||w[4];else this.draw(K,Z,Q,V,U)},B.drawText=function q(K,Z,Q,V){var U=null,X=null,w=K,L=Z,H=1;if(!V)V=this._options.width-K;var D=u1(Q,V);while(D.length){var W=D.shift();switch(W.type){case f0:var M=!1,O=!1,C=!1,f=!1;for(var g=0;g<W.value.length;g++){var h=W.value.charCodeAt(g),d=W.value.charAt(g);if(this._options.layout==="term"){var i=h>>8,Z0=i===17||i>=46&&i<=159||i>=172&&i<=215||h>=43360&&h<=43391;if(Z0){this.draw(w+0,L,d,U,X),this.draw(w+1,L,"\t",U,X),w+=2;continue}}if(C=h>65280&&h<65377||h>65500&&h<65512||h>65518,M=d.charCodeAt(0)==32||d.charCodeAt(0)==12288,f&&!C&&!M)w++;if(C&&!O)w++;this.draw(w++,L,d,U,X),O=M,f=C}break;case b1:U=W.value||null;break;case k1:X=W.value||null;break;case u0:w=K,L++,H++;break}}return H},B._tick=function q(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var K in this._data)this._draw(K,!1)}else for(var Z in this._dirty)this._draw(Z,!0);this._dirty=!1},B._draw=function q(K,Z){var Q=this._data[K];if(Q[4]!=this._options.bg)Z=!0;this._backend.draw(Q,Z)},Y}();l0.Rect=V0,l0.Hex=J0,l0.Tile=r,l0.TileGL=e,l0.Term=Z6;var jZ=function(){function Y(q){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,q),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var K=0;K<this._options.order;K++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var B=Y.prototype;return B.clear=function q(){this._data={},this._priorValues={}},B.generate=function q(){var K=[this._sample(this._prefix)];while(K[K.length-1]!=this._boundary)K.push(this._sample(K));return this._join(K.slice(0,-1))},B.observe=function q(K){var Z=this._split(K);for(var Q=0;Q<Z.length;Q++)this._priorValues[Z[Q]]=this._options.prior;Z=this._prefix.concat(Z).concat(this._suffix);for(var V=this._options.order;V<Z.length;V++){var U=Z.slice(V-this._options.order,V),X=Z[V];for(var w=0;w<U.length;w++){var L=U.slice(w);this._observeEvent(L,X)}}},B.getStats=function q(){var K=[],Z=Object.keys(this._priorValues).length;Z--,K.push("distinct samples: "+Z);var Q=Object.keys(this._data).length,V=0;for(var U in this._data)V+=Object.keys(this._data[U]).length;return K.push("dictionary size (contexts): "+Q),K.push("dictionary size (events): "+V),K.join(", ")},B._split=function q(K){return K.split(this._options.words?/\s+/:"")},B._join=function q(K){return K.join(this._options.words?" ":"")},B._observeEvent=function q(K,Z){var Q=this._join(K);if(!(Q in this._data))this._data[Q]={};var V=this._data[Q];if(!(Z in V))V[Z]=0;V[Z]++},B._sample=function q(K){K=this._backoff(K);var Z=this._join(K),Q=this._data[Z],V={};if(this._options.prior){for(var U in this._priorValues)V[U]=this._priorValues[U];for(var X in Q)V[X]+=Q[X]}else V=Q;return G.getWeightedValue(V)},B._backoff=function q(K){if(K.length>this._options.order)K=K.slice(-this._options.order);else if(K.length<this._options.order)K=this._prefix.slice(0,this._options.order-K.length).concat(K);while(!(this._join(K)in this._data)&&K.length>0)K=K.slice(1);return K},Y}(),J6=function(){function Y(){this.heap=[],this.timestamp=0}var B=Y.prototype;return B.lessThan=function q(K,Z){return K.key==Z.key?K.timestamp<Z.timestamp:K.key<Z.key},B.shift=function q(K){this.heap=this.heap.map(function(Z){var{key:Q,value:V,timestamp:U}=Z;return{key:Q+K,value:V,timestamp:U}})},B.len=function q(){return this.heap.length},B.push=function q(K,Z){this.timestamp+=1;var Q=this.len();this.heap.push({value:K,timestamp:this.timestamp,key:Z}),this.updateUp(Q)},B.pop=function q(){if(this.len()==0)throw new Error("no element to pop");var K=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return K},B.find=function q(K){for(var Z=0;Z<this.len();Z++)if(K==this.heap[Z].value)return this.heap[Z];return null},B.remove=function q(K){var Z=null;for(var Q=0;Q<this.len();Q++)if(K==this.heap[Q].value)Z=Q;if(Z===null)return!1;if(this.len()>1){var V=this.heap.pop();if(V.value!=K)this.heap[Z]=V,this.updateDown(Z);return!0}else this.heap.pop();return!0},B.parentNode=function q(K){return Math.floor((K-1)/2)},B.leftChildNode=function q(K){return 2*K+1},B.rightChildNode=function q(K){return 2*K+2},B.existNode=function q(K){return K>=0&&K<this.heap.length},B.swap=function q(K,Z){var Q=this.heap[K];this.heap[K]=this.heap[Z],this.heap[Z]=Q},B.minNode=function q(K){var Z=K.filter(this.existNode.bind(this)),Q=Z[0];for(var V=PJ(Z),U;!(U=V()).done;){var X=U.value;if(this.lessThan(this.heap[X],this.heap[Q]))Q=X}return Q},B.updateUp=function q(K){if(K==0)return;var Z=this.parentNode(K);if(this.existNode(Z)&&this.lessThan(this.heap[K],this.heap[Z]))this.swap(K,Z),this.updateUp(Z)},B.updateDown=function q(K){var Z=this.leftChildNode(K),Q=this.rightChildNode(K);if(!this.existNode(Z))return;var V=this.minNode([K,Z,Q]);if(V!=K)this.swap(K,V),this.updateDown(V)},B.debugPrint=function q(){console.log(this.heap)},Y}(),Q6=function(){function Y(){this._time=0,this._events=new J6}var B=Y.prototype;return B.getTime=function q(){return this._time},B.clear=function q(){return this._events=new J6,this},B.add=function q(K,Z){this._events.push(K,Z)},B.get=function q(){if(!this._events.len())return null;var K=this._events.pop(),Z=K.key,Q=K.value;if(Z>0)this._time+=Z,this._events.shift(-Z);return Q},B.getEventTime=function q(K){var Z=this._events.find(K);if(Z){var Q=Z.key;return Q}return},B.remove=function q(K){return this._events.remove(K)},Y}(),h1=function(){function Y(){this._queue=new Q6,this._repeat=[],this._current=null}var B=Y.prototype;return B.getTime=function q(){return this._queue.getTime()},B.add=function q(K,Z){if(Z)this._repeat.push(K);return this},B.getTimeOf=function q(K){return this._queue.getEventTime(K)},B.clear=function q(){return this._queue.clear(),this._repeat=[],this._current=null,this},B.remove=function q(K){var Z=this._queue.remove(K),Q=this._repeat.indexOf(K);if(Q!=-1)this._repeat.splice(Q,1);if(this._current==K)this._current=null;return Z},B.next=function q(){return this._current=this._queue.get(),this._current},Y}(),CZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var q=B.prototype;return q.add=function K(Z,Q){return this._queue.add(Z,0),Y.prototype.add.call(this,Z,Q)},q.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return Y.prototype.next.call(this)},B}(h1),EZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var q=B.prototype;return q.add=function K(Z,Q,V){return this._queue.add(Z,V!==void 0?V:1/Z.getSpeed()),Y.prototype.add.call(this,Z,Q)},q.next=function K(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return Y.prototype.next.call(this)},B}(h1),AZ=function(Y){z0(B,Y);function B(){var K=Y.call(this)||this;return K._defaultDuration=1,K._duration=K._defaultDuration,K}var q=B.prototype;return q.add=function K(Z,Q,V){return this._queue.add(Z,V||this._defaultDuration),Y.prototype.add.call(this,Z,Q)},q.clear=function K(){return this._duration=this._defaultDuration,Y.prototype.clear.call(this)},q.remove=function K(Z){if(Z==this._current)this._duration=this._defaultDuration;return Y.prototype.remove.call(this,Z)},q.next=function K(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return Y.prototype.next.call(this)},q.setDuration=function K(Z){if(this._current)this._duration=Z;return this},B}(h1),NZ={Simple:CZ,Speed:EZ,Action:AZ},x1=function(){function Y(q,K){if(K===void 0)K={};this._lightPasses=q,this._options=Object.assign({topology:8},K)}var B=Y.prototype;return B._getCircle=function q(K,Z,Q){var V=[],U,X,w;switch(this._options.topology){case 4:X=1,w=[0,1],U=[G0[8][7],G0[8][1],G0[8][3],G0[8][5]];break;case 6:U=G0[6],X=1,w=[-1,1];break;case 8:U=G0[4],X=2,w=[-1,1];break;default:throw new Error("Incorrect topology for FOV computation")}var L=K+w[0]*Q,H=Z+w[1]*Q;for(var D=0;D<U.length;D++)for(var W=0;W<Q*X;W++)V.push([L,H]),L+=U[D][0],H+=U[D][1];return V},Y}(),SZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var q=B.prototype;return q.compute=function K(Z,Q,V,U){if(U(Z,Q,0,1),!this._lightPasses(Z,Q))return;var X=[],w,L,H,D,W;for(var M=1;M<=V;M++){var O=this._getCircle(Z,Q,M),C=360/O.length;for(var f=0;f<O.length;f++){if(H=O[f][0],D=O[f][1],w=C*(f-0.5),L=w+C,W=!this._lightPasses(H,D),this._visibleCoords(Math.floor(w),Math.ceil(L),W,X))U(H,D,M,1);if(X.length==2&&X[0]==0&&X[1]==360)return}}},q._visibleCoords=function K(Z,Q,V,U){if(Z<0){var X=this._visibleCoords(0,Q,V,U),w=this._visibleCoords(360+Z,360,V,U);return X||w}var L=0;while(L<U.length&&U[L]<Z)L++;if(L==U.length){if(V)U.push(Z,Q);return!0}var H=0;if(L%2){while(L<U.length&&U[L]<Q)L++,H++;if(H==0)return!1;if(V)if(H%2)U.splice(L-H,H,Q);else U.splice(L-H,H);return!0}else{while(L<U.length&&U[L]<Q)L++,H++;if(Z==U[L-H]&&H==1)return!1;if(V)if(H%2)U.splice(L-H,H,Z);else U.splice(L-H,H,Z,Q);return!0}},B}(x1),vZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var q=B.prototype;return q.compute=function K(Z,Q,V,U){if(U(Z,Q,0,1),!this._lightPasses(Z,Q))return;var X=[],w,L,H,D,W,M;for(var O=1;O<=V;O++){var C=this._getCircle(Z,Q,O),f=C.length;for(var g=0;g<f;g++){if(w=C[g][0],L=C[g][1],D=[g?2*g-1:2*f-1,2*f],W=[2*g+1,2*f],H=!this._lightPasses(w,L),M=this._checkVisibility(D,W,H,X),M)U(w,L,O,M);if(X.length==2&&X[0][0]==0&&X[1][0]==X[1][1])return}}},q._checkVisibility=function K(Z,Q,V,U){if(Z[0]>Q[0]){var X=this._checkVisibility(Z,[Z[1],Z[1]],V,U),w=this._checkVisibility([0,1],Q,V,U);return(X+w)/2}var L=0,H=!1;while(L<U.length){var D=U[L],W=D[0]*Z[1]-Z[0]*D[1];if(W>=0){if(W==0&&!(L%2))H=!0;break}L++}var M=U.length,O=!1;while(M--){var C=U[M],f=Q[0]*C[1]-C[0]*Q[1];if(f>=0){if(f==0&&M%2)O=!0;break}}var g=!0;if(L==M&&(H||O))g=!1;else if(H&&O&&L+1==M&&M%2)g=!1;else if(L>M&&L%2)g=!1;if(!g)return 0;var h,d=M-L+1;if(d%2)if(L%2){var i=U[L];if(h=(Q[0]*i[1]-i[0]*Q[1])/(i[1]*Q[1]),V)U.splice(L,d,Q)}else{var Z0=U[M];if(h=(Z0[0]*Z[1]-Z[0]*Z0[1])/(Z[1]*Z0[1]),V)U.splice(L,d,Z)}else if(L%2){var $0=U[L],H0=U[M];if(h=(H0[0]*$0[1]-$0[0]*H0[1])/($0[1]*H0[1]),V)U.splice(L,d)}else{if(V)U.splice(L,d,Z,Q);return 1}var C0=(Q[0]*Z[1]-Z[0]*Q[1])/(Z[1]*Q[1]);return h/C0},B}(x1),I0=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],fZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var q=B.prototype;return q.compute=function K(Z,Q,V,U){U(Z,Q,0,1);for(var X=0;X<I0.length;X++)this._renderOctant(Z,Q,I0[X],V,U)},q.compute180=function K(Z,Q,V,U,X){X(Z,Q,0,1);var w=(U-1+8)%8,L=(U-2+8)%8,H=(U+1+8)%8;this._renderOctant(Z,Q,I0[L],V,X),this._renderOctant(Z,Q,I0[w],V,X),this._renderOctant(Z,Q,I0[U],V,X),this._renderOctant(Z,Q,I0[H],V,X)},q.compute90=function K(Z,Q,V,U,X){X(Z,Q,0,1);var w=(U-1+8)%8;this._renderOctant(Z,Q,I0[U],V,X),this._renderOctant(Z,Q,I0[w],V,X)},q._renderOctant=function K(Z,Q,V,U,X){this._castVisibility(Z,Q,1,1,0,U+1,V[0],V[1],V[2],V[3],X)},q._castVisibility=function K(Z,Q,V,U,X,w,L,H,D,W,M){if(U<X)return;for(var O=V;O<=w;O++){var C=-O-1,f=-O,g=!1,h=0;while(C<=0){C+=1;var d=Z+C*L+f*H,i=Q+C*D+f*W,Z0=(C-0.5)/(f+0.5),$0=(C+0.5)/(f-0.5);if($0>U)continue;if(Z0<X)break;if(C*C+f*f<w*w)M(d,i,O,1);if(!g){if(!this._lightPasses(d,i)&&O<w)g=!0,this._castVisibility(Z,Q,O+1,U,Z0,w,L,H,D,W,M),h=$0}else{if(!this._lightPasses(d,i)){h=$0;continue}g=!1,U=h}}if(g)break}},B}(x1),IZ={DiscreteShadowcasting:SZ,PreciseShadowcasting:vZ,RecursiveShadowcasting:fZ},g0=function(){function Y(q,K){if(q===void 0)q=g1;if(K===void 0)K=T1;this._width=q,this._height=K}var B=Y.prototype;return B._fillMap=function q(K){var Z=[];for(var Q=0;Q<this._width;Q++){Z.push([]);for(var V=0;V<this._height;V++)Z[Q].push(K)}return Z},Y}(),bZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var q=B.prototype;return q.create=function K(Z){var Q=this._width-1,V=this._height-1;for(var U=0;U<=Q;U++)for(var X=0;X<=V;X++){var w=U&&X&&U<Q&&X<V;Z(U,X,w?0:1)}return this},B}(g0),V6=function(Y){z0(B,Y);function B(K,Z){var Q=Y.call(this,K,Z)||this;return Q._rooms=[],Q._corridors=[],Q}var q=B.prototype;return q.getRooms=function K(){return this._rooms},q.getCorridors=function K(){return this._corridors},B}(g0),K6=function Y(){},X1=function(Y){z0(B,Y);function B(K,Z,Q,V,U,X){var w=Y.call(this)||this;if(w._x1=K,w._y1=Z,w._x2=Q,w._y2=V,w._doors={},U!==void 0&&X!==void 0)w.addDoor(U,X);return w}B.createRandomAt=function K(Z,Q,V,U,X){var w=X.roomWidth[0],L=X.roomWidth[1],H=G.getUniformInt(w,L);w=X.roomHeight[0],L=X.roomHeight[1];var D=G.getUniformInt(w,L);if(V==1){var W=Q-Math.floor(G.getUniform()*D);return new this(Z+1,W,Z+H,W+D-1,Z,Q)}if(V==-1){var M=Q-Math.floor(G.getUniform()*D);return new this(Z-H,M,Z-1,M+D-1,Z,Q)}if(U==1){var O=Z-Math.floor(G.getUniform()*H);return new this(O,Q+1,O+H-1,Q+D,Z,Q)}if(U==-1){var C=Z-Math.floor(G.getUniform()*H);return new this(C,Q-D,C+H-1,Q-1,Z,Q)}throw new Error("dx or dy must be 1 or -1")},B.createRandomCenter=function K(Z,Q,V){var U=V.roomWidth[0],X=V.roomWidth[1],w=G.getUniformInt(U,X);U=V.roomHeight[0],X=V.roomHeight[1];var L=G.getUniformInt(U,X),H=Z-Math.floor(G.getUniform()*w),D=Q-Math.floor(G.getUniform()*L),W=H+w-1,M=D+L-1;return new this(H,D,W,M)},B.createRandom=function K(Z,Q,V){var U=V.roomWidth[0],X=V.roomWidth[1],w=G.getUniformInt(U,X);U=V.roomHeight[0],X=V.roomHeight[1];var L=G.getUniformInt(U,X),H=Z-w-1,D=Q-L-1,W=1+Math.floor(G.getUniform()*H),M=1+Math.floor(G.getUniform()*D),O=W+w-1,C=M+L-1;return new this(W,M,O,C)};var q=B.prototype;return q.addDoor=function K(Z,Q){return this._doors[Z+","+Q]=1,this},q.getDoors=function K(Z){for(var Q in this._doors){var V=Q.split(",");Z(parseInt(V[0]),parseInt(V[1]))}return this},q.clearDoors=function K(){return this._doors={},this},q.addDoors=function K(Z){var Q=this._x1-1,V=this._x2+1,U=this._y1-1,X=this._y2+1;for(var w=Q;w<=V;w++)for(var L=U;L<=X;L++){if(w!=Q&&w!=V&&L!=U&&L!=X)continue;if(Z(w,L))continue;this.addDoor(w,L)}return this},q.debug=function K(){console.log("room",this._x1,this._y1,this._x2,this._y2)},q.isValid=function K(Z,Q){var V=this._x1-1,U=this._x2+1,X=this._y1-1,w=this._y2+1;for(var L=V;L<=U;L++)for(var H=X;H<=w;H++)if(L==V||L==U||H==X||H==w){if(!Z(L,H))return!1}else if(!Q(L,H))return!1;return!0},q.create=function K(Z){var Q=this._x1-1,V=this._x2+1,U=this._y1-1,X=this._y2+1,w=0;for(var L=Q;L<=V;L++)for(var H=U;H<=X;H++){if(L+","+H in this._doors)w=2;else if(L==Q||L==V||H==U||H==X)w=1;else w=0;Z(L,H,w)}},q.getCenter=function K(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},q.getLeft=function K(){return this._x1},q.getRight=function K(){return this._x2},q.getTop=function K(){return this._y1},q.getBottom=function K(){return this._y2},B}(K6),_1=function(Y){z0(B,Y);function B(K,Z,Q,V){var U=Y.call(this)||this;return U._startX=K,U._startY=Z,U._endX=Q,U._endY=V,U._endsWithAWall=!0,U}B.createRandomAt=function K(Z,Q,V,U,X){var w=X.corridorLength[0],L=X.corridorLength[1],H=G.getUniformInt(w,L);return new this(Z,Q,Z+V*H,Q+U*H)};var q=B.prototype;return q.debug=function K(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},q.isValid=function K(Z,Q){var V=this._startX,U=this._startY,X=this._endX-V,w=this._endY-U,L=1+Math.max(Math.abs(X),Math.abs(w));if(X)X=X/Math.abs(X);if(w)w=w/Math.abs(w);var H=w,D=-X,W=!0;for(var M=0;M<L;M++){var O=V+M*X,C=U+M*w;if(!Q(O,C))W=!1;if(!Z(O+H,C+D))W=!1;if(!Z(O-H,C-D))W=!1;if(!W){L=M,this._endX=O-X,this._endY=C-w;break}}if(L==0)return!1;if(L==1&&Z(this._endX+X,this._endY+w))return!1;var f=!Z(this._endX+X+H,this._endY+w+D),g=!Z(this._endX+X-H,this._endY+w-D);if(this._endsWithAWall=Z(this._endX+X,this._endY+w),(f||g)&&this._endsWithAWall)return!1;return!0},q.create=function K(Z){var Q=this._startX,V=this._startY,U=this._endX-Q,X=this._endY-V,w=1+Math.max(Math.abs(U),Math.abs(X));if(U)U=U/Math.abs(U);if(X)X=X/Math.abs(X);for(var L=0;L<w;L++){var H=Q+L*U,D=V+L*X;Z(H,D,0)}return!0},q.createPriorityWalls=function K(Z){if(!this._endsWithAWall)return;var Q=this._startX,V=this._startY,U=this._endX-Q,X=this._endY-V;if(U)U=U/Math.abs(U);if(X)X=X/Math.abs(X);var w=X,L=-U;Z(this._endX+U,this._endY+X),Z(this._endX+w,this._endY+L),Z(this._endX-w,this._endY-L)},B}(K6),kZ=function(Y){z0(B,Y);function B(K,Z,Q){var V=Y.call(this,K,Z)||this;return V._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(V._options,Q),V._map=[],V._dug=0,V._roomAttempts=20,V._corridorAttempts=20,V._connected=[],V._unconnected=[],V._digCallback=V._digCallback.bind(c0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(c0(V)),V._isWallCallback=V._isWallCallback.bind(c0(V)),V}var q=B.prototype;return q.create=function K(Z){var Q=Date.now();while(!0){var V=Date.now();if(V-Q>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(Z)for(var U=0;U<this._width;U++)for(var X=0;X<this._height;X++)Z(U,X,this._map[U][X]);return this},q._generateRooms=function K(){var Z=this._width-2,Q=this._height-2,V;do if(V=this._generateRoom(),this._dug/(Z*Q)>this._options.roomDugPercentage)break;while(V)},q._generateRoom=function K(){var Z=0;while(Z<this._roomAttempts){Z++;var Q=X1.createRandom(this._width,this._height,this._options);if(!Q.isValid(this._isWallCallback,this._canBeDugCallback))continue;return Q.create(this._digCallback),this._rooms.push(Q),Q}return null},q._generateCorridors=function K(){var Z=0;while(Z<this._corridorAttempts){Z++,this._corridors=[],this._map=this._fillMap(1);for(var Q=0;Q<this._rooms.length;Q++){var V=this._rooms[Q];V.clearDoors(),V.create(this._digCallback)}if(this._unconnected=G.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var U=G.getItem(this._connected);if(!U)break;var X=this._closestRoom(this._unconnected,U);if(!X)break;var w=this._closestRoom(this._connected,X);if(!w)break;var L=this._connectRooms(X,w);if(!L)break;if(!this._unconnected.length)return!0}}return!1},q._closestRoom=function K(Z,Q){var V=1/0,U=Q.getCenter(),X=null;for(var w=0;w<Z.length;w++){var L=Z[w],H=L.getCenter(),D=H[0]-U[0],W=H[1]-U[1],M=D*D+W*W;if(M<V)V=M,X=L}return X},q._connectRooms=function K(Z,Q){var V=Z.getCenter(),U=Q.getCenter(),X=U[0]-V[0],w=U[1]-V[1],L,H,D,W,M,O,C;if(Math.abs(X)<Math.abs(w))D=w>0?2:0,W=(D+2)%4,M=Q.getLeft(),O=Q.getRight(),C=0;else D=X>0?1:3,W=(D+2)%4,M=Q.getTop(),O=Q.getBottom(),C=1;if(L=this._placeInWall(Z,D),!L)return!1;if(L[C]>=M&&L[C]<=O){H=L.slice();var f=0;switch(W){case 0:f=Q.getTop()-1;break;case 1:f=Q.getRight()+1;break;case 2:f=Q.getBottom()+1;break;case 3:f=Q.getLeft()-1;break}H[(C+1)%2]=f,this._digLine([L,H])}else if(L[C]<M-1||L[C]>O+1){var g=L[C]-U[C],h=0;switch(W){case 0:case 1:h=g<0?3:1;break;case 2:case 3:h=g<0?1:3;break}if(W=(W+h)%4,H=this._placeInWall(Q,W),!H)return!1;var d=[0,0];d[C]=L[C];var i=(C+1)%2;d[i]=H[i],this._digLine([L,d,H])}else{var Z0=(C+1)%2;if(H=this._placeInWall(Q,W),!H)return!1;var $0=Math.round((H[Z0]+L[Z0])/2),H0=[0,0],C0=[0,0];H0[C]=L[C],H0[Z0]=$0,C0[C]=H[C],C0[Z0]=$0,this._digLine([L,H0,C0,H])}if(Z.addDoor(L[0],L[1]),Q.addDoor(H[0],H[1]),C=this._unconnected.indexOf(Z),C!=-1)this._unconnected.splice(C,1),this._connected.push(Z);if(C=this._unconnected.indexOf(Q),C!=-1)this._unconnected.splice(C,1),this._connected.push(Q);return!0},q._placeInWall=function K(Z,Q){var V=[0,0],U=[0,0],X=0;switch(Q){case 0:U=[1,0],V=[Z.getLeft(),Z.getTop()-1],X=Z.getRight()-Z.getLeft()+1;break;case 1:U=[0,1],V=[Z.getRight()+1,Z.getTop()],X=Z.getBottom()-Z.getTop()+1;break;case 2:U=[1,0],V=[Z.getLeft(),Z.getBottom()+1],X=Z.getRight()-Z.getLeft()+1;break;case 3:U=[0,1],V=[Z.getLeft()-1,Z.getTop()],X=Z.getBottom()-Z.getTop()+1;break}var w=[],L=-2;for(var H=0;H<X;H++){var D=V[0]+H*U[0],W=V[1]+H*U[1];w.push(null);var M=this._map[D][W]==1;if(M){if(L!=H-1)w[H]=[D,W]}else if(L=H,H)w[H-1]=null}for(var O=w.length-1;O>=0;O--)if(!w[O])w.splice(O,1);return w.length?G.getItem(w):null},q._digLine=function K(Z){for(var Q=1;Q<Z.length;Q++){var V=Z[Q-1],U=Z[Q],X=new _1(V[0],V[1],U[0],U[1]);X.create(this._digCallback),this._corridors.push(X)}},q._digCallback=function K(Z,Q,V){if(this._map[Z][Q]=V,V==0)this._dug++},q._isWallCallback=function K(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},q._canBeDugCallback=function K(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},B}(V6),uZ=function(Y){z0(B,Y);function B(K,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,K,Z)||this,V._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},V.setOptions(Q),V._dirs=G0[V._options.topology],V._map=V._fillMap(0),V}var q=B.prototype;return q.randomize=function K(Z){for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)this._map[Q][V]=G.getUniform()<Z?1:0;return this},q.setOptions=function K(Z){Object.assign(this._options,Z)},q.set=function K(Z,Q,V){this._map[Z][Q]=V},q.create=function K(Z){var Q=this._fillMap(0),V=this._options.born,U=this._options.survive;for(var X=0;X<this._height;X++){var w=1,L=0;if(this._options.topology==6)w=2,L=X%2;for(var H=L;H<this._width;H+=w){var D=this._map[H][X],W=this._getNeighbors(H,X);if(D&&U.indexOf(W)!=-1)Q[H][X]=1;else if(!D&&V.indexOf(W)!=-1)Q[H][X]=1}}this._map=Q,Z&&this._serviceCallback(Z)},q._serviceCallback=function K(Z){for(var Q=0;Q<this._height;Q++){var V=1,U=0;if(this._options.topology==6)V=2,U=Q%2;for(var X=U;X<this._width;X+=V)Z(X,Q,this._map[X][Q])}},q._getNeighbors=function K(Z,Q){var V=0;for(var U=0;U<this._dirs.length;U++){var X=this._dirs[U],w=Z+X[0],L=Q+X[1];if(w<0||w>=this._width||L<0||L>=this._height)continue;V+=this._map[w][L]==1?1:0}return V},q.connect=function K(Z,Q,V){if(!Q)Q=0;var U=[],X={},w=1,L=[0,0];if(this._options.topology==6)w=2,L=[0,1];for(var H=0;H<this._height;H++)for(var D=L[H%2];D<this._width;D+=w)if(this._freeSpace(D,H,Q)){var W=[D,H];X[this._pointKey(W)]=W,U.push([D,H])}var M=U[G.getUniformInt(0,U.length-1)],O=this._pointKey(M),C={};C[O]=M,delete X[O],this._findConnected(C,X,[M],!1,Q);while(Object.keys(X).length>0){var f=this._getFromTo(C,X),g=f[0],h=f[1],d={};d[this._pointKey(g)]=g,this._findConnected(d,X,[g],!0,Q);var i=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;i.call(this,h,g,C,X,Q,V);for(var Z0 in d){var $0=d[Z0];this._map[$0[0]][$0[1]]=Q,C[Z0]=$0,delete X[Z0]}}Z&&this._serviceCallback(Z)},q._getFromTo=function K(Z,Q){var V=[0,0],U=[0,0],X,w=Object.keys(Z),L=Object.keys(Q);for(var H=0;H<5;H++){if(w.length<L.length){var D=w;U=Z[D[G.getUniformInt(0,D.length-1)]],V=this._getClosest(U,Q)}else{var W=L;V=Q[W[G.getUniformInt(0,W.length-1)]],U=this._getClosest(V,Z)}if(X=(V[0]-U[0])*(V[0]-U[0])+(V[1]-U[1])*(V[1]-U[1]),X<64)break}return[V,U]},q._getClosest=function K(Z,Q){var V=null,U=null;for(var X in Q){var w=Q[X],L=(w[0]-Z[0])*(w[0]-Z[0])+(w[1]-Z[1])*(w[1]-Z[1]);if(U==null||L<U)U=L,V=w}return V},q._findConnected=function K(Z,Q,V,U,X){while(V.length>0){var w=V.splice(0,1)[0],L=void 0;if(this._options.topology==6)L=[[w[0]+2,w[1]],[w[0]+1,w[1]-1],[w[0]-1,w[1]-1],[w[0]-2,w[1]],[w[0]-1,w[1]+1],[w[0]+1,w[1]+1]];else L=[[w[0]+1,w[1]],[w[0]-1,w[1]],[w[0],w[1]+1],[w[0],w[1]-1]];for(var H=0;H<L.length;H++){var D=this._pointKey(L[H]);if(Z[D]==null&&this._freeSpace(L[H][0],L[H][1],X)){if(Z[D]=L[H],!U)delete Q[D];V.push(L[H])}}}},q._tunnelToConnected=function K(Z,Q,V,U,X,w){var L,H;if(Q[0]<Z[0])L=Q,H=Z;else L=Z,H=Q;for(var D=L[0];D<=H[0];D++){this._map[D][L[1]]=X;var W=[D,L[1]],M=this._pointKey(W);V[M]=W,delete U[M]}if(w&&L[0]<H[0])w(L,[H[0],L[1]]);var O=H[0];if(Q[1]<Z[1])L=Q,H=Z;else L=Z,H=Q;for(var C=L[1];C<H[1];C++){this._map[O][C]=X;var f=[O,C],g=this._pointKey(f);V[g]=f,delete U[g]}if(w&&L[1]<H[1])w([H[0],L[1]],[H[0],H[1]])},q._tunnelToConnected6=function K(Z,Q,V,U,X,w){var L,H;if(Q[0]<Z[0])L=Q,H=Z;else L=Z,H=Q;var D=L[0],W=L[1];while(!(D==H[0]&&W==H[1])){var M=2;if(W<H[1])W++,M=1;else if(W>H[1])W--,M=1;if(D<H[0])D+=M;else if(D>H[0])D-=M;else if(H[1]%2)D-=M;else D+=M;this._map[D][W]=X;var O=[D,W],C=this._pointKey(O);V[C]=O,delete U[C]}if(w)w(Q,Z)},q._freeSpace=function K(Z,Q,V){return Z>=0&&Z<this._width&&Q>=0&&Q<this._height&&this._map[Z][Q]==V},q._pointKey=function K(Z){return Z[0]+"."+Z[1]},B}(g0),gZ={room:X1,corridor:_1},TZ=function(Y){z0(B,Y);function B(K,Z,Q){var V;if(Q===void 0)Q={};return V=Y.call(this,K,Z)||this,V._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},Q),V._features={room:4,corridor:4},V._map=[],V._featureAttempts=20,V._walls={},V._dug=0,V._digCallback=V._digCallback.bind(c0(V)),V._canBeDugCallback=V._canBeDugCallback.bind(c0(V)),V._isWallCallback=V._isWallCallback.bind(c0(V)),V._priorityWallCallback=V._priorityWallCallback.bind(c0(V)),V}var q=B.prototype;return q.create=function K(Z){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var Q=(this._width-2)*(this._height-2);this._firstRoom();var V=Date.now(),U;do{U=0;var X=Date.now();if(X-V>this._options.timeLimit)break;var w=this._findWall();if(!w)break;var L=w.split(","),H=parseInt(L[0]),D=parseInt(L[1]),W=this._getDiggingDirection(H,D);if(!W)continue;var M=0;do if(M++,this._tryFeature(H,D,W[0],W[1])){this._removeSurroundingWalls(H,D),this._removeSurroundingWalls(H-W[0],D-W[1]);break}while(M<this._featureAttempts);for(var O in this._walls)if(this._walls[O]>1)U++}while(this._dug/Q<this._options.dugPercentage||U);if(this._addDoors(),Z)for(var C=0;C<this._width;C++)for(var f=0;f<this._height;f++)Z(C,f,this._map[C][f]);return this._walls={},this._map=[],this},q._digCallback=function K(Z,Q,V){if(V==0||V==2)this._map[Z][Q]=0,this._dug++;else this._walls[Z+","+Q]=1},q._isWallCallback=function K(Z,Q){if(Z<0||Q<0||Z>=this._width||Q>=this._height)return!1;return this._map[Z][Q]==1},q._canBeDugCallback=function K(Z,Q){if(Z<1||Q<1||Z+1>=this._width||Q+1>=this._height)return!1;return this._map[Z][Q]==1},q._priorityWallCallback=function K(Z,Q){this._walls[Z+","+Q]=2},q._firstRoom=function K(){var Z=Math.floor(this._width/2),Q=Math.floor(this._height/2),V=X1.createRandomCenter(Z,Q,this._options);this._rooms.push(V),V.create(this._digCallback)},q._findWall=function K(){var Z=[],Q=[];for(var V in this._walls){var U=this._walls[V];if(U==2)Q.push(V);else Z.push(V)}var X=Q.length?Q:Z;if(!X.length)return null;var w=G.getItem(X.sort());return delete this._walls[w],w},q._tryFeature=function K(Z,Q,V,U){var X=G.getWeightedValue(this._features),w=gZ[X],L=w.createRandomAt(Z,Q,V,U,this._options);if(!L.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(L.create(this._digCallback),L instanceof X1)this._rooms.push(L);if(L instanceof _1)L.createPriorityWalls(this._priorityWallCallback),this._corridors.push(L);return!0},q._removeSurroundingWalls=function K(Z,Q){var V=G0[4];for(var U=0;U<V.length;U++){var X=V[U],w=Z+X[0],L=Q+X[1];delete this._walls[w+","+L],w=Z+2*X[0],L=Q+2*X[1],delete this._walls[w+","+L]}},q._getDiggingDirection=function K(Z,Q){if(Z<=0||Q<=0||Z>=this._width-1||Q>=this._height-1)return null;var V=null,U=G0[4];for(var X=0;X<U.length;X++){var w=U[X],L=Z+w[0],H=Q+w[1];if(!this._map[L][H]){if(V)return null;V=w}}if(!V)return null;return[-V[0],-V[1]]},q._addDoors=function K(){var Z=this._map;function Q(X,w){return Z[X][w]==1}for(var V=0;V<this._rooms.length;V++){var U=this._rooms[V];U.clearDoors(),U.addDoors(Q)}},B}(V6);function z6(Y,B,q){q[B[Y+1]]=q[Y],B[q[Y]]=B[Y+1],q[Y]=Y+1,B[Y+1]=Y}function U6(Y,B,q){q[B[Y]]=q[Y],B[q[Y]]=B[Y],q[Y]=Y,B[Y]=Y}var hZ=function(Y){z0(B,Y);function B(){return Y.apply(this,arguments)||this}var q=B.prototype;return q.create=function K(Z){var Q=this._fillMap(1),V=Math.ceil((this._width-2)/2),U=0.375,X=[],w=[];for(var L=0;L<V;L++)X.push(L),w.push(L);X.push(V-1);var H;for(H=1;H+3<this._height;H+=2)for(var D=0;D<V;D++){var W=2*D+1,M=H;if(Q[W][M]=0,D!=X[D+1]&&G.getUniform()>U)z6(D,X,w),Q[W+1][M]=0;if(D!=X[D]&&G.getUniform()>U)U6(D,X,w);else Q[W][M+1]=0}for(var O=0;O<V;O++){var C=2*O+1,f=H;if(Q[C][f]=0,O!=X[O+1]&&(O==X[O]||G.getUniform()>U))z6(O,X,w),Q[C+1][f]=0;U6(O,X,w)}for(var g=0;g<this._width;g++)for(var h=0;h<this._height;h++)Z(g,h,Q[g][h]);return this},B}(g0),xZ=function(Y){z0(B,Y);function B(){var K=Y.apply(this,arguments)||this;return K._stack=[],K._map=[],K}var q=B.prototype;return q.create=function K(Z){var Q=this._width,V=this._height;this._map=[];for(var U=0;U<Q;U++){this._map.push([]);for(var X=0;X<V;X++){var w=U==0||X==0||U+1==Q||X+1==V;this._map[U].push(w?1:0)}}this._stack=[[1,1,Q-2,V-2]],this._process();for(var L=0;L<Q;L++)for(var H=0;H<V;H++)Z(L,H,this._map[L][H]);return this._map=[],this},q._process=function K(){while(this._stack.length){var Z=this._stack.shift();this._partitionRoom(Z)}},q._partitionRoom=function K(Z){var Q=[],V=[];for(var U=Z[0]+1;U<Z[2];U++){var X=this._map[U][Z[1]-1],w=this._map[U][Z[3]+1];if(X&&w&&!(U%2))Q.push(U)}for(var L=Z[1]+1;L<Z[3];L++){var H=this._map[Z[0]-1][L],D=this._map[Z[2]+1][L];if(H&&D&&!(L%2))V.push(L)}if(!Q.length||!V.length)return;var W=G.getItem(Q),M=G.getItem(V);this._map[W][M]=1;var O=[],C=[];O.push(C);for(var f=Z[0];f<W;f++)if(this._map[f][M]=1,f%2)C.push([f,M]);C=[],O.push(C);for(var g=W+1;g<=Z[2];g++)if(this._map[g][M]=1,g%2)C.push([g,M]);C=[],O.push(C);for(var h=Z[1];h<M;h++)if(this._map[W][h]=1,h%2)C.push([W,h]);C=[],O.push(C);for(var d=M+1;d<=Z[3];d++)if(this._map[W][d]=1,d%2)C.push([W,d]);var i=G.getItem(O);for(var Z0=0;Z0<O.length;Z0++){var $0=O[Z0];if($0==i)continue;var H0=G.getItem($0);this._map[H0[0]][H0[1]]=0}this._stack.push([Z[0],Z[1],W-1,M-1]),this._stack.push([W+1,Z[1],Z[2],M-1]),this._stack.push([Z[0],M+1,W-1,Z[3]]),this._stack.push([W+1,M+1,Z[2],Z[3]])},B}(g0),_Z=function(Y){z0(B,Y);function B(K,Z,Q){var V;if(Q===void 0)Q=0;return V=Y.call(this,K,Z)||this,V._regularity=Q,V._map=[],V}var q=B.prototype;return q.create=function K(Z){var Q=this._width,V=this._height,U=this._fillMap(1);Q-=Q%2?1:2,V-=V%2?1:2;var X=0,w=0,L=0,H=0,D=0,W=!1,M=[[0,0],[0,0],[0,0],[0,0]];do{if(X=1+2*Math.floor(G.getUniform()*(Q-1)/2),w=1+2*Math.floor(G.getUniform()*(V-1)/2),!D)U[X][w]=0;if(!U[X][w]){this._randomize(M);do{if(Math.floor(G.getUniform()*(this._regularity+1))==0)this._randomize(M);W=!0;for(var O=0;O<4;O++)if(L=X+M[O][0]*2,H=w+M[O][1]*2,this._isFree(U,L,H,Q,V)){U[L][H]=0,U[X+M[O][0]][w+M[O][1]]=0,X=L,w=H,W=!1,D++;break}}while(!W)}}while(D+1<Q*V/4);for(var C=0;C<this._width;C++)for(var f=0;f<this._height;f++)Z(C,f,U[C][f]);return this._map=[],this},q._randomize=function K(Z){for(var Q=0;Q<4;Q++)Z[Q][0]=0,Z[Q][1]=0;switch(Math.floor(G.getUniform()*4)){case 0:Z[0][0]=-1,Z[1][0]=1,Z[2][1]=-1,Z[3][1]=1;break;case 1:Z[3][0]=-1,Z[2][0]=1,Z[1][1]=-1,Z[0][1]=1;break;case 2:Z[2][0]=-1,Z[3][0]=1,Z[0][1]=-1,Z[1][1]=1;break;case 3:Z[1][0]=-1,Z[0][0]=1,Z[3][1]=-1,Z[2][1]=1;break}},q._isFree=function K(Z,Q,V,U,X){if(Q<1||V<1||Q>=U||V>=X)return!1;return Z[Q][V]},B}(g0),mZ=function(Y){z0(B,Y);function B(K,Z,Q){var V=Y.call(this,K,Z)||this;if(V.map=[],V.rooms=[],V.connectedCells=[],Q=Object.assign({cellWidth:3,cellHeight:3},Q),!Q.hasOwnProperty("roomWidth"))Q.roomWidth=V._calculateRoomSize(V._width,Q.cellWidth);if(!Q.hasOwnProperty("roomHeight"))Q.roomHeight=V._calculateRoomSize(V._height,Q.cellHeight);return V._options=Q,V}var q=B.prototype;return q.create=function K(Z){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),Z)for(var Q=0;Q<this._width;Q++)for(var V=0;V<this._height;V++)Z(Q,V,this.map[Q][V]);return this},q._calculateRoomSize=function K(Z,Q){var V=Math.floor(Z/Q*0.8),U=Math.floor(Z/Q*0.25);if(U<2)U=2;if(V<2)V=2;return[U,V]},q._initRooms=function K(){for(var Z=0;Z<this._options.cellWidth;Z++){this.rooms.push([]);for(var Q=0;Q<this._options.cellHeight;Q++)this.rooms[Z].push({x:0,y:0,width:0,height:0,connections:[],cellx:Z,celly:Q})}},q._connectRooms=function K(){var Z=G.getUniformInt(0,this._options.cellWidth-1),Q=G.getUniformInt(0,this._options.cellHeight-1),V,U,X,w=!1,L,H,D;do{D=[0,2,4,6],D=G.shuffle(D);do{if(w=!1,V=D.pop(),U=Z+G0[8][V][0],X=Q+G0[8][V][1],U<0||U>=this._options.cellWidth)continue;if(X<0||X>=this._options.cellHeight)continue;if(L=this.rooms[Z][Q],L.connections.length>0){if(L.connections[0][0]==U&&L.connections[0][1]==X)break}if(H=this.rooms[U][X],H.connections.length==0)H.connections.push([Z,Q]),this.connectedCells.push([U,X]),Z=U,Q=X,w=!0}while(D.length>0&&w==!1)}while(D.length>0)},q._connectUnconnectedRooms=function K(){var Z=this._options.cellWidth,Q=this._options.cellHeight;this.connectedCells=G.shuffle(this.connectedCells);var V,U,X;for(var w=0;w<this._options.cellWidth;w++)for(var L=0;L<this._options.cellHeight;L++)if(V=this.rooms[w][L],V.connections.length==0){var H=[0,2,4,6];H=G.shuffle(H),X=!1;do{var D=H.pop(),W=w+G0[8][D][0],M=L+G0[8][D][1];if(W<0||W>=Z||M<0||M>=Q)continue;if(U=this.rooms[W][M],X=!0,U.connections.length==0)break;for(var O=0;O<U.connections.length;O++)if(U.connections[O][0]==w&&U.connections[O][1]==L){X=!1;break}if(X)break}while(H.length);if(X)V.connections.push([U.cellx,U.celly]);else console.log("-- Unable to connect room.")}},q._createRandomRoomConnections=function K(){},q._createRooms=function K(){var Z=this._width,Q=this._height,V=this._options.cellWidth,U=this._options.cellHeight,X=Math.floor(this._width/V),w=Math.floor(this._height/U),L,H,D=this._options.roomWidth,W=this._options.roomHeight,M,O,C;for(var f=0;f<V;f++)for(var g=0;g<U;g++){if(M=X*f,O=w*g,M==0)M=1;if(O==0)O=1;if(L=G.getUniformInt(D[0],D[1]),H=G.getUniformInt(W[0],W[1]),g>0){C=this.rooms[f][g-1];while(O-(C.y+C.height)<3)O++}if(f>0){C=this.rooms[f-1][g];while(M-(C.x+C.width)<3)M++}var h=Math.round(G.getUniformInt(0,X-L)/2),d=Math.round(G.getUniformInt(0,w-H)/2);while(M+h+L>=Z)if(h)h--;else L--;while(O+d+H>=Q)if(d)d--;else H--;M=M+h,O=O+d,this.rooms[f][g].x=M,this.rooms[f][g].y=O,this.rooms[f][g].width=L,this.rooms[f][g].height=H;for(var i=M;i<M+L;i++)for(var Z0=O;Z0<O+H;Z0++)this.map[i][Z0]=0}},q._getWallPosition=function K(Z,Q){var V,U,X;if(Q==1||Q==3){if(V=G.getUniformInt(Z.x+1,Z.x+Z.width-2),Q==1)U=Z.y-2,X=U+1;else U=Z.y+Z.height+1,X=U-1;this.map[V][X]=0}else{if(U=G.getUniformInt(Z.y+1,Z.y+Z.height-2),Q==2)V=Z.x+Z.width+1,X=V-1;else V=Z.x-2,X=V+1;this.map[X][U]=0}return[V,U]},q._drawCorridor=function K(Z,Q){var V=Q[0]-Z[0],U=Q[1]-Z[1],X=Z[0],w=Z[1],L,H,D,W,M=[],O=Math.abs(V),C=Math.abs(U),f=G.getUniform(),g=f,h=1-f;if(H=V>0?2:6,D=U>0?4:0,O<C)L=Math.ceil(C*g),M.push([D,L]),M.push([H,O]),L=Math.floor(C*h),M.push([D,L]);else L=Math.ceil(O*g),M.push([H,L]),M.push([D,C]),L=Math.floor(O*h),M.push([H,L]);this.map[X][w]=0;while(M.length>0){W=M.pop();while(W[1]>0)X+=G0[8][W[0]][0],w+=G0[8][W[0]][1],this.map[X][w]=0,W[1]=W[1]-1}},q._createCorridors=function K(){var Z=this._options.cellWidth,Q=this._options.cellHeight,V,U,X,w,L;for(var H=0;H<Z;H++)for(var D=0;D<Q;D++){V=this.rooms[H][D];for(var W=0;W<V.connections.length;W++){if(U=V.connections[W],X=this.rooms[U[0]][U[1]],X.cellx>V.cellx)w=2,L=4;else if(X.cellx<V.cellx)w=4,L=2;else if(X.celly>V.celly)w=3,L=1;else w=1,L=3;this._drawCorridor(this._getWallPosition(V,w),this._getWallPosition(X,L))}}},B}(g0),cZ={Arena:bZ,Uniform:kZ,Cellular:uZ,Digger:TZ,EllerMaze:hZ,DividedMaze:xZ,IceyMaze:_Z,Rogue:mZ},yZ=function Y(){},dZ=0.5*(Math.sqrt(3)-1),e0=(3-Math.sqrt(3))/6,pZ=function(Y){z0(B,Y);function B(K){var Z;if(K===void 0)K=256;Z=Y.call(this)||this,Z._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var Q=[];for(var V=0;V<K;V++)Q.push(V);Q=G.shuffle(Q),Z._perms=[],Z._indexes=[];for(var U=0;U<2*K;U++)Z._perms.push(Q[U%K]),Z._indexes.push(Z._perms[U]%Z._gradients.length);return Z}var q=B.prototype;return q.get=function K(Z,Q){var V=this._perms,U=this._indexes,X=V.length/2,w=0,L=0,H=0,D,W=(Z+Q)*dZ,M=Math.floor(Z+W),O=Math.floor(Q+W),C=(M+O)*e0,f=M-C,g=O-C,h=Z-f,d=Q-g,i,Z0;if(h>d)i=1,Z0=0;else i=0,Z0=1;var $0=h-i+e0,H0=d-Z0+e0,C0=h-1+2*e0,m1=d-1+2*e0,c1=j(M,X),y1=j(O,X),Z1=0.5-h*h-d*d;if(Z1>=0){Z1*=Z1,D=U[c1+V[y1]];var $6=this._gradients[D];w=Z1*Z1*($6[0]*h+$6[1]*d)}var J1=0.5-$0*$0-H0*H0;if(J1>=0){J1*=J1,D=U[c1+i+V[y1+Z0]];var X6=this._gradients[D];L=J1*J1*(X6[0]*$0+X6[1]*H0)}var Q1=0.5-C0*C0-m1*m1;if(Q1>=0){Q1*=Q1,D=U[c1+1+V[y1+1]];var G6=this._gradients[D];H=Q1*Q1*(G6[0]*C0+G6[1]*m1)}return 70*(w+L+H)},B}(yZ),lZ={Simplex:pZ},q6=function(){function Y(q,K,Z,Q){if(Q===void 0)Q={};if(this._toX=q,this._toY=K,this._passableCallback=Z,this._options=Object.assign({topology:8},Q),this._dirs=G0[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var B=Y.prototype;return B._getNeighbors=function q(K,Z){var Q=[];for(var V=0;V<this._dirs.length;V++){var U=this._dirs[V],X=K+U[0],w=Z+U[1];if(!this._passableCallback(X,w))continue;Q.push([X,w])}return Q},Y}(),rZ=function(Y){z0(B,Y);function B(K,Z,Q,V){var U=Y.call(this,K,Z,Q,V)||this;return U._computed={},U._todo=[],U._add(K,Z,null),U}var q=B.prototype;return q.compute=function K(Z,Q,V){var U=Z+","+Q;if(!(U in this._computed))this._compute(Z,Q);if(!(U in this._computed))return;var X=this._computed[U];while(X)V(X.x,X.y),X=X.prev},q._compute=function K(Z,Q){while(this._todo.length){var V=this._todo.shift();if(V.x==Z&&V.y==Q)return;var U=this._getNeighbors(V.x,V.y);for(var X=0;X<U.length;X++){var w=U[X],L=w[0],H=w[1],D=L+","+H;if(D in this._computed)continue;this._add(L,H,V)}}},q._add=function K(Z,Q,V){var U={x:Z,y:Q,prev:V};this._computed[Z+","+Q]=U,this._todo.push(U)},B}(q6),nZ=function(Y){z0(B,Y);function B(K,Z,Q,V){var U;if(V===void 0)V={};return U=Y.call(this,K,Z,Q,V)||this,U._todo=[],U._done={},U}var q=B.prototype;return q.compute=function K(Z,Q,V){this._todo=[],this._done={},this._fromX=Z,this._fromY=Q,this._add(this._toX,this._toY,null);while(this._todo.length){var U=this._todo.shift(),X=U.x+","+U.y;if(X in this._done)continue;if(this._done[X]=U,U.x==Z&&U.y==Q)break;var w=this._getNeighbors(U.x,U.y);for(var L=0;L<w.length;L++){var H=w[L],D=H[0],W=H[1],M=D+","+W;if(M in this._done)continue;this._add(D,W,U)}}var O=this._done[Z+","+Q];if(!O)return;while(O)V(O.x,O.y),O=O.prev},q._add=function K(Z,Q,V){var U=this._distance(Z,Q),X={x:Z,y:Q,prev:V,g:V?V.g+1:0,h:U},w=X.g+X.h;for(var L=0;L<this._todo.length;L++){var H=this._todo[L],D=H.g+H.h;if(w<D||w==D&&U<H.h){this._todo.splice(L,0,X);return}}this._todo.push(X)},q._distance=function K(Z,Q){switch(this._options.topology){case 4:return Math.abs(Z-this._fromX)+Math.abs(Q-this._fromY);case 6:var V=Math.abs(Z-this._fromX),U=Math.abs(Q-this._fromY);return U+Math.max(0,(V-U)/2);case 8:return Math.max(Math.abs(Z-this._fromX),Math.abs(Q-this._fromY))}},B}(q6),sZ={Dijkstra:rZ,AStar:nZ},oZ=function(){function Y(q){this._scheduler=q,this._lock=1}var B=Y.prototype;return B.start=function q(){return this.unlock()},B.lock=function q(){return this._lock++,this},B.unlock=function q(){if(!this._lock)throw new Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var K=this._scheduler.next();if(!K)return this.lock();var Z=K.act();if(Z&&Z.then)this.lock(),Z.then(this.unlock.bind(this))}return this},Y}(),aZ=function(){function Y(q,K){if(K===void 0)K={};this._reflectivityCallback=q,this._options={},K=Object.assign({passes:1,emissionThreshold:100,range:10},K),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(K)}var B=Y.prototype;return B.setOptions=function q(K){if(Object.assign(this._options,K),K&&K.range)this.reset();return this},B.setFOV=function q(K){return this._fov=K,this._fovCache={},this},B.setLight=function q(K,Z,Q){var V=K+","+Z;if(Q)this._lights[V]=typeof Q=="string"?c(Q):Q;else delete this._lights[V];return this},B.clearLights=function q(){this._lights={}},B.reset=function q(){return this._reflectivityCache={},this._fovCache={},this},B.compute=function q(K){var Z={},Q={},V={};for(var U in this._lights){var X=this._lights[U];Q[U]=[0,0,0],x(Q[U],X)}for(var w=0;w<this._options.passes;w++){if(this._emitLight(Q,V,Z),w+1==this._options.passes)continue;Q=this._computeEmitters(V,Z)}for(var L in V){var H=L.split(","),D=parseInt(H[0]),W=parseInt(H[1]);K(D,W,V[L])}return this},B._emitLight=function q(K,Z,Q){for(var V in K){var U=V.split(","),X=parseInt(U[0]),w=parseInt(U[1]);this._emitLightFromCell(X,w,K[V],Z),Q[V]=1}return this},B._computeEmitters=function q(K,Z){var Q={};for(var V in K){if(V in Z)continue;var U=K[V],X=void 0;if(V in this._reflectivityCache)X=this._reflectivityCache[V];else{var w=V.split(","),L=parseInt(w[0]),H=parseInt(w[1]);X=this._reflectivityCallback(L,H),this._reflectivityCache[V]=X}if(X==0)continue;var D=[0,0,0],W=0;for(var M=0;M<3;M++){var O=Math.round(U[M]*X);D[M]=O,W+=O}if(W>this._options.emissionThreshold)Q[V]=D}return Q},B._emitLightFromCell=function q(K,Z,Q,V){var U=K+","+Z,X;if(U in this._fovCache)X=this._fovCache[U];else X=this._updateFOV(K,Z);for(var w in X){var L=X[w],H=void 0;if(w in V)H=V[w];else H=[0,0,0],V[w]=H;for(var D=0;D<3;D++)H[D]+=Math.round(Q[D]*L)}return this},B._updateFOV=function q(K,Z){var Q=K+","+Z,V={};this._fovCache[Q]=V;var U=this._options.range;function X(w,L,H,D){var W=w+","+L,M=D*(1-H/U);if(M==0)return;V[W]=M}return this._fov.compute(K,Z,U,X.bind(this)),V},Y}(),iZ=m,tZ=o,eZ=FZ;J.Color=tZ,J.DEFAULT_HEIGHT=T1,J.DEFAULT_WIDTH=g1,J.DIRS=G0,J.Display=l0,J.Engine=oZ,J.EventQueue=Q6,J.FOV=IZ,J.KEYS=RZ,J.Lighting=aZ,J.Map=cZ,J.Noise=lZ,J.Path=sZ,J.RNG=G,J.Scheduler=NZ,J.StringGenerator=jZ,J.Text=eZ,J.Util=iZ,Object.defineProperty(J,"__esModule",{value:!0})})});var zJ=typeof window!=="undefined"?window.innerWidth:0,UJ=typeof window!=="undefined"?window.innerHeight:0;var l={cameraWidth:Math.floor(zJ/16),cameraHeight:Math.floor(UJ/16),chatLogMaxSize:100,chatLogMaxDisplaySize:8,debug:!0,fontSize:16,highlightEnemy:!0,showGrid:!0,showUI:!0,showTooltip:!0,showEnergy:1,zoom:1},p1={WIDTH:1024,HEIGHT:1024},B0={width:Math.floor(l.cameraWidth*(1/l.zoom)),height:Math.floor(l.cameraHeight*(1/l.zoom)),bg:"transparent",fontSize:Math.floor(l.fontSize*l.zoom),layout:"tile-gl",tileWidth:16,tileHeight:16,tileSet:null,tileMap:null,tileColorize:!0};function Y6(J,z){let $=J.entities[z];return`DEBUG: ${z} at ${$.mapId},${$.x},${$.y}`}class G1{name;description;energyDelta;constructor(J,z,$=0){this.name=J,this.description=z,this.energyDelta=$}}class V1{name;description;constructor(J,z){this.name=J,this.description=z}}class M0{key;description;constructor(J,z){this.key=J,this.description=z}}class T0{name;description;tooltip;constructor(J,z,$=""){this.name=J,this.description=z,this.tooltip=$}}class P0{name;description;icon;color;energyMax;unlockCondition;constructor(J,z,$,G=100){this.name=J,this.description=z,this.icon=$,this.energyMax=G,this.color="white",this.unlockCondition=null}}class r0{name;description;color;constructor(J,z,$){this.name=J,this.description=z,this.color=$}}class Y0{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(J,z,$,G="cyberyellow",P=0,R=0,j=0,S=0,N=0,I=[]){this.name=J,this.description=z,this.icon=$,this.color=G,this.energyDelta=P,this.matter=R,this.gold=j,this.damage=S,this.energyCost=N,this.effects=I}}class n{name;description;tooltip;icon;fg;bg;energyDelta;constructor(J,z,$="",G=null,P="white",R="black",j=0){this.name=J,this.description=z,this.tooltip=$,this.icon=G,this.fg=P,this.bg=R,this.energyDelta=j}}var F={actions:{Enter:new G1("Enter","Enter a portal or plant atmosphere"),Launch:new G1("Launch","Launch into space",-10),Wait:new G1("Wait","Wait one turn in place")},ais:{aggrorange:new V1("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new V1("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new V1("guardian","Idles at a position and only fights back if engaged"),interactenrage:new V1("interactenrage","Gets hostile when getting talked to too often!")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ee15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",mutedcyan:"#2cc9c5",mutedyellow:"#b0a216",mutedmagenta:"#a716b0",mutedgreen:"#5ca821",mutedblue:"#1628b0",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new M0("N","Move/interact/combat north"),E:new M0("E","Move/interact/combat east"),S:new M0("S","Move/interact/combat south"),W:new M0("W","Move/interact/combat west"),A:new M0("A","Primary action, confirm"),B:new M0("B","Take a break, cancel"),"1":new M0("1","Secondary action, first quick slot"),"2":new M0("2","Tertiary action, second quick slot"),M:new M0("M","Menu"),"#":new M0("#","Open prompt")},constants:{DRAIN_MATTER_COST:500,DRAIN_GOLD_COST:1,MIN_TURN_SPEED_IN_MS:80},dialogs:{bot_bar_aerobot_backstage:"Huh? How did you get here?",bot_bar_aerobot_charger:"Feel free to recharge on those chargepads and enjoy the show.",bot_bar_aerobot_spa_down:"Have you been to our shop, yet?",bot_bar_aerobot_spa_up:"Ahhhh, so refreshing!",bot_bar_aerobot_welcome:"Welcome to the Bot Bar. How may we serve you?",bot_dormitory_aerobot_down:"Would you please go to your own pod?",bot_dormitory_aerobot_up:"Pod, sweet pod!",bot_dormitory_graffiti:"Not all pods are created equal! Rad!",bot_dormitory_workbot_left:"This pod is taken, go away!",bot_dormitory_workbot_right:"Brzzzt! Brzzzt!",bot_factory_workbot_assembly:"The assembly line is unblocked!",bot_factory_workbot_drain:"Don't come too close to the drain or you'll lose your stuff!",bot_factory_workbot_forebot:"What are you doing here? Get back to work!",bot_factory_workbot_sewers:"Sewage water is spilling over again.",bot_factory_workbot_workwork:"Work, work!",bot_factory_workbot_wrench:"I lost a wrench somewhere here...",bot_prison_aerobot:"I'm innocent! I'm innocent! I'm innocent! Beep!",bot_prison_workbot:"Thanks for freeing me! Guess I don't need this Pickaxe anymore...",bot_stadium_botracing:"Now this is botracing!",bot_station_graffiti:"Yo! The factory has a hidden backdoor!",bot_station_graffiti_statues:"One statue isn't like the others! Ey!",bot_station_pioneer:"You shall not pass!",manual_spirit:"Weeee!",manual_aerobot:"Huh? Why don't you have a hull?",manual_workbot:"Work, work!",manual_cleaner:"Follow the rules! Okay?",manual_pioneer:"Don't talk to me, weakling!",playground_label_top_portal:"Goes to top left side of star",playground_label_bottom_portal:"Goes to top left corner of solar system",shop_instance_aerobot_shopper:"It's shiny!!!",shop_instance_shopkeeper:"Welcome! What does your engine desire?",shop_instance_workbot_shopper:"This shop is not so secret after all..."},effects:{Recharger:new T0("Recharger","Doubles energy gained from chargepads"),RockCrusher:new T0("Rock Crusher","Mines rock"),Screwing:new T0("Screwing","Unscrews the sewer portal covers"),WallCrusher:new T0("Wall Crusher","Tears down weak walls"),WaterImmunity:new T0("Water Immunity","No damage taken from water"),WaterShield:new T0("Water Shield","Reduces damage taken from water")},entities:{movableboulder:new P0("Boulder","A movable rock","o",2),movablebox:new P0("Box","A movable box","x",2),Spirit:new P0("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new P0("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new P0("WorkBot","Basic factory worker","B"),Cleaner:new P0("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new P0("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Graffiticyan:new P0("Graffiti","Writing on the wall","zc",2),Graffitimagenta:new P0("Graffiti","Writing on the wall","zm",2),Graffitiyellow:new P0("Graffiti","Writing on the wall","zy",2),Valkyrie:new P0("Valkyrie","Airbourne war logistics","V",160),Pioneer:new P0("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200),RoboRat:new P0("RoboRat","Minor self-assembled critter","r",5)},factions:{Critters:new r0("Critters","Small pests","cyberyellow"),Enraged:new r0("Enraged","Always hostile faction","cybermagenta"),Spirits:new r0("Spirits","Default player faction","white"),Pyrates:new r0("Pyrates","Default enemy faction","cybermagenta"),Guardians:new r0("Guardians","Bot station guardians","cybercyan")},items:{battery:new Y0("Battery","Increases maximum energy","b","cyberyellow",10),chest:new Y0("Chest","A chest. What might be inside?","i","cyberyellow"),energy:new Y0("Energy","Energy pack","e","cyberyellow",10),gold:new Y0("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new Y0("Goo","A minor matter source","goo","gray",0,1),junk:new Y0("Junk","Broken bot","%","gray",0,1),matter:new Y0("Matter","A pile of stuff","m","gray",0,100),broom:new Y0("Broom","Sweeps the floor","ib","cyberyellow",0,0,0,-10,-1),cheat:new Y0("Cheat","Most powerful tool, totally legit","icheat","cyberyellow",0,0,0,-500,-1,["Recharger","Rock Crusher","Screwing","Wall Crusher","Water Shield"]),hammer:new Y0("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["Wall Crusher"]),pickaxe:new Y0("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["Rock Crusher"]),ratbite:new Y0("Rat Bite","Only rats have this","irb","cyberyellow",0,0,0,-5,-1,["Water Immunity"]),shocker:new Y0("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1,["Recharger"]),trident:new Y0("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["Water Shield"]),wrench:new Y0("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1,["Screwing"])},maps:{bot_bar:`!
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
`},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:l.showGrid?new n("void","Just nothing here","",".","gray"):new n("void","Just nothing here"),voidtrue:new n("voidtrue","Really nothing here and you shouldn't get there ever!","","_"),voidhidden:new n("voidhidden","Looks like a wall, but isn't!","","#","gray","black"),water:new n("water","Rust and other dangers await","Water","~","cybercyan","cyberblue",-2),watersewage:new n("watersewage","Rust, goo and other dangers await","Sewage Water","~~","cyberyellow","cybergreen",-4),drain:new n("drain","Drains gold, matter and some of your energy","Drain","*","cybermagenta","black",-5),rock:new n("rock","Hidden treasures may await","Rock","'","white","gray"),tree:new n("tree","Lots of trees make a forest","Tree","t","brown","black"),wall:new n("wall","A strong wall","","#","gray","black"),wallstatueaerobot:new n("wallstatueaerobot","A small statue looking like an AeroBot","","sa","gray","black"),wallstatuecleaner:new n("wallstatuecleaner","A small statue looking like a Cleaner","","sc","gray","black"),wallstatuepioneer:new n("wallstatuepioneer","A small statue looking like a Pioneer","","sp","gray","black"),wallstatueworkbot:new n("wallstatueworkbot","A small statue looking like a WorkBot","","sb","gray","black"),wallweak:new n("wallweak","A weakened wall","Weak Wall","+","gray","black"),chargepad:new n("chargepad","Recharges energy and health","Chargepad","=","cyberyellow","black",2),movenorth:new n("movenorth","Moves you north","","^^","cyberyellow"),moveeast:new n("moveeast","Moves you east","",">>","cyberyellow"),movesouth:new n("movesouth","Moves you south","","vv","cyberyellow"),movewest:new n("movewest","Moves you west","","<<","cyberyellow"),portal:new n("portal","Gateway to another map","Portal","O","cyberyellow","gray"),portalclosed:new n("portalclosed","Closed gateway to another map","Closed Portal","Oc","black","gray"),portalhidden:new n("portalhidden","Hidden gateway to another map","","#","gray","black"),portallauncher:new n("portallauncher","Launches into space","Launch to Space","O","cyberyellow","gray"),portalsewers:new n("portalsewers","Needs some tool to open","Sewer Gate","#~","gray","black"),portalstartworkbot:new n("portalstartworkbot","Start playing as a WorkBot","Play as a WorkBot","OB","white"),portalstartaerobot:new n("portalstartaerobot","Start playing as an AeroBot","Play as an AeroBot","OA","white"),"_portalstart?":new n("_portalstart?","Not unlocked, yet!","?","O?","white"),spacerock:new n("spacerock","Mountains as seen from space, non-blocking!","","'s","white","gray"),spacetree:new n("spacetree","Forest as seen from space","","ts","brown","darkgray"),spacewater:new n("spacewater","Water as seen from space, not dangerous!","","~s","cybercyan","cyberblue"),spacevoid:new n("spacevoid","Void/ground as seen from space","",".s","darkgray","darkgray"),spacevoidstarwhite:new n("spacevoidstarwhite","Space with a white background star","",".f","white"),spacevoidstaryellow:new n("spacevoidstaryellow","Space with a yellow background star","",".y","cyberyellow"),star:new n("star","It's hot, really hot!","Star","§","cyberyellow","cyberyellow",-100),terminal:new n("terminal","A computer terminal","Terminal","$","cyberyellow"),tv:new n("tv","A big billboard screen","TV","!","black","cyberyellow")},uitexts:{}};function L6(J){if(Object.hasOwn(F.dialogs,J))return F.dialogs[J];return`FIXME: ${J} needs localization!`}function L0(J,z){return J.chatLog.push(z),J.chatLog=J.chatLog.slice(-l.chatLogMaxSize),J}function E0(J,z,$,G,P=0,R=0,j={}){let S={id:z,type:$,mapId:G,x:P,y:R,energy:10,energyMax:10,gold:0,matter:0,message:null,interactions:0,options:j};return J=L1(J,S,$),J.entities[S.id]=S,J}function B1(J,z){return J.entities[z]=void 0,delete J.entities[z],J.tools[z]=void 0,delete J.tools[z],J}function h0(J,z){let $=Object.keys(J.entities),G=[];for(let P=0;P<$.length;P++){let R=J.entities[$[P]];if(R.mapId===z)G.push(R)}return G}function Y1(J,z,$,G){let P=h0(J,z).filter((R)=>R.x===$&&R.y===G);if(P.length>0)return P[0];return null}function L1(J,z,$){if(z.type=$,z.energy=$.energyMax,z.energyMax=$.energyMax,z.gold=0,z.matter=0,!O0(z))J.tools[z.id]=void 0;return J}function w6(J,z,$){if(z===$)return J;if(z.options.faction===$.options.faction||l1($)){if($.options.dialog){let G=$?.options?.name?$.options.name:$.type.name;J=L0(J,G+": "+L6($.options.dialog)),$.interactions++}}else{let G=z.id,P=$.id;J._combatQueue.push({entityId:G,otherEntityId:P})}if($.interactions>=3&&$.options?.ai===F.ais.interactenrage)$.options.faction=F.factions.Enraged;return J}function O0(J){return J.type===F.entities.movableboulder||J.type===F.entities.movablebox}function l1(J){return J.type===F.entities.Graffiticyan||J.type===F.entities.Graffitimagenta||J.type===F.entities.Graffitiyellow}function w1(J,z){let $={A:F.actions.Wait,B:F.actions.Wait};if(!!J.lastSpacePositionByEntity[z.id]&&z.energy>Math.abs(F.actions.Launch.energyDelta))$.A=F.actions.Launch;let P=J.maps[z.mapId].getTile(z.x,z.y);if(!!P.options.mapId&&"x"in P.options&&"y"in P.options)$.A=F.actions.Enter;return $}function K1(J,z,$){let G=J._eventSubscribers[z];if(G)for(let P=0;P<G.length;P++){let R=G[P];J=R(J,$)}return J}function r1(J,z,$){if(z in J._eventSubscribers);else J._eventSubscribers[z]=[];return J._eventSubscribers[z].push($),J}function z1(J,z,$,G=0,P=0){let j={id:H1($,G,P),type:z,mapId:$,x:G,y:P,energy:z.energyDelta,gold:z.gold,matter:z.matter};return J.items[j.id]=j,J}function P6(J,z,$,G=0,P=0){let R=F.items.junk,S={id:H1($,G,P),type:R,mapId:$,x:G,y:P,energy:R.energyDelta,gold:R.gold,matter:z};return J.items[S.id]=S,J}function U1(J,z,$,G=0,P=0,R,j){let N={id:H1($,G,P),type:z,mapId:$,x:G,y:P,energy:z.energyDelta,gold:R,matter:j};return J.items[N.id]=N,J}function H1(J,z,$){return"item,"+J+","+z+","+$}function n1(J,z){return J.items[z]=void 0,delete J.items[z],J}function P1(J,z){let $=Object.keys(J.items),G=[];for(let P=0;P<$.length;P++){let R=J.items[$[P]];if(R.mapId===z)G.push(R)}return G}function D1(J,z,$,G){let P=H1(z,$,G);if(P in J.items)return J.items[P];return null}function W1(J,z){return J.tools[z]}function D6(J,z,$){if(O0(z))return J;if(!$J(z,$))return J;if(qJ($))J=s1(J,z.id,$.type);else{if($.type===F.items.battery)z.energyMax+=$.energy;if(J._energyQueue.push({entityId:z.id,energyDelta:$.energy}),z.id.startsWith("player"))J=L0(J,`Picked up ${$.type.name}.`)}return z.gold+=$.gold,z.matter+=$.matter,n1(J,$.id),J}function s1(J,z,$){let G=J.tools[z],P=void 0;if($){if(P={type:$},J.tools[z]=P,z.startsWith("player"))J=L0(J,`Equipped ${$.name}.`)}else if(G){let j=G.type;if(J.tools[z]=P,z.startsWith("player"))J=L0(J,`Unequipped ${j}.`)}let R={entityId:z,oldEquippedItem:G,newEquippedItem:P};return J=K1(J,1,R),J}function qJ(J){return J.type.energyCost<0}function $J(J,z){return J.gold+z.gold>=0&&J.matter+z.matter>=0}/*!
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
 */var XJ=function(J){var z={};function $(G){if(z[G])return z[G].exports;var P=z[G]={i:G,l:!1,exports:{}};return J[G].call(P.exports,P,P.exports,$),P.l=!0,P.exports}return $.m=J,$.c=z,$.d=function(G,P,R){$.o(G,P)||Object.defineProperty(G,P,{enumerable:!0,get:R})},$.r=function(G){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(G,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(G,"__esModule",{value:!0})},$.t=function(G,P){if(1&P&&(G=$(G)),8&P)return G;if(4&P&&typeof G=="object"&&G&&G.__esModule)return G;var R=Object.create(null);if($.r(R),Object.defineProperty(R,"default",{enumerable:!0,value:G}),2&P&&typeof G!="string")for(var j in G)$.d(R,j,function(S){return G[S]}.bind(null,j));return R},$.n=function(G){var P=G&&G.__esModule?function(){return G.default}:function(){return G};return $.d(P,"a",P),P},$.o=function(G,P){return Object.prototype.hasOwnProperty.call(G,P)},$.p="/bin/",$($.s=0)}([function(J,z,$){var G={},P=$(1),R=$(2),j=$(3);J.exports=G;var S=1;G.js=function(){var N,I,m,J0=!1,V0={},r={},c={},Q0={},x=!0,_={},p=[],q0=Number.MAX_VALUE,s=!1;this.setAcceptableTiles=function(b){b instanceof Array?m=b:!isNaN(parseFloat(b))&&isFinite(b)&&(m=[b])},this.enableSync=function(){J0=!0},this.disableSync=function(){J0=!1},this.enableDiagonals=function(){s=!0},this.disableDiagonals=function(){s=!1},this.setGrid=function(b){N=b;for(var v=0;v<N.length;v++)for(var A=0;A<N[0].length;A++)r[N[v][A]]||(r[N[v][A]]=1)},this.setTileCost=function(b,v){r[b]=v},this.setAdditionalPointCost=function(b,v,A){c[v]===void 0&&(c[v]={}),c[v][b]=A},this.removeAdditionalPointCost=function(b,v){c[v]!==void 0&&delete c[v][b]},this.removeAllAdditionalPointCosts=function(){c={}},this.setDirectionalCondition=function(b,v,A){Q0[v]===void 0&&(Q0[v]={}),Q0[v][b]=A},this.removeAllDirectionalConditions=function(){Q0={}},this.setIterationsPerCalculation=function(b){q0=b},this.avoidAdditionalPoint=function(b,v){V0[v]===void 0&&(V0[v]={}),V0[v][b]=1},this.stopAvoidingAdditionalPoint=function(b,v){V0[v]!==void 0&&delete V0[v][b]},this.enableCornerCutting=function(){x=!0},this.disableCornerCutting=function(){x=!1},this.stopAvoidingAllAdditionalPoints=function(){V0={}},this.findPath=function(b,v,A,o,e){var K0=function(v0){J0?e(v0):setTimeout(function(){e(v0)})};if(m===void 0)throw new Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(N===void 0)throw new Error("You can't set a path without first calling setGrid() on EasyStar.");if(b<0||v<0||A<0||o<0||b>N[0].length-1||v>N.length-1||A>N[0].length-1||o>N.length-1)throw new Error("Your start or end point is outside the scope of your grid.");if(b!==A||v!==o){for(var D0=N[o][A],X0=!1,j0=0;j0<m.length;j0++)if(D0===m[j0]){X0=!0;break}if(X0!==!1){var w0=new P;w0.openList=new j(function(v0,p0){return v0.bestGuessDistance()-p0.bestGuessDistance()}),w0.isDoneCalculating=!1,w0.nodeHash={},w0.startX=b,w0.startY=v,w0.endX=A,w0.endY=o,w0.callback=K0,w0.openList.push(t(w0,w0.startX,w0.startY,null,1));var t0=S++;return _[t0]=w0,p.push(t0),t0}K0(null)}else K0([])},this.cancelPath=function(b){return b in _&&(delete _[b],!0)},this.calculate=function(){if(p.length!==0&&N!==void 0&&m!==void 0)for(I=0;I<q0;I++){if(p.length===0)return;J0&&(I=0);var b=p[0],v=_[b];if(v!==void 0)if(v.openList.size()!==0){var A=v.openList.pop();if(v.endX!==A.x||v.endY!==A.y)A.list=0,A.y>0&&E(v,A,0,-1,1*T(A.x,A.y-1)),A.x<N[0].length-1&&E(v,A,1,0,1*T(A.x+1,A.y)),A.y<N.length-1&&E(v,A,0,1,1*T(A.x,A.y+1)),A.x>0&&E(v,A,-1,0,1*T(A.x-1,A.y)),s&&(A.x>0&&A.y>0&&(x||k(N,m,A.x,A.y-1,A)&&k(N,m,A.x-1,A.y,A))&&E(v,A,-1,-1,1.4*T(A.x-1,A.y-1)),A.x<N[0].length-1&&A.y<N.length-1&&(x||k(N,m,A.x,A.y+1,A)&&k(N,m,A.x+1,A.y,A))&&E(v,A,1,1,1.4*T(A.x+1,A.y+1)),A.x<N[0].length-1&&A.y>0&&(x||k(N,m,A.x,A.y-1,A)&&k(N,m,A.x+1,A.y,A))&&E(v,A,1,-1,1.4*T(A.x+1,A.y-1)),A.x>0&&A.y<N.length-1&&(x||k(N,m,A.x,A.y+1,A)&&k(N,m,A.x-1,A.y,A))&&E(v,A,-1,1,1.4*T(A.x-1,A.y+1)));else{var o=[];o.push({x:A.x,y:A.y});for(var e=A.parent;e!=null;)o.push({x:e.x,y:e.y}),e=e.parent;o.reverse();var K0=o;v.callback(K0),delete _[b],p.shift()}}else v.callback(null),delete _[b],p.shift();else p.shift()}};var E=function(b,v,A,o,e){var K0=v.x+A,D0=v.y+o;if((V0[D0]===void 0||V0[D0][K0]===void 0)&&k(N,m,K0,D0,v)){var X0=t(b,K0,D0,v,e);X0.list===void 0?(X0.list=1,b.openList.push(X0)):v.costSoFar+e<X0.costSoFar&&(X0.costSoFar=v.costSoFar+e,X0.parent=v,b.openList.updateItem(X0))}},k=function(b,v,A,o,e){var K0=Q0[o]&&Q0[o][A];if(K0){var D0=u(e.x-A,e.y-o);if(!function(){for(var j0=0;j0<K0.length;j0++)if(K0[j0]===D0)return!0;return!1}())return!1}for(var X0=0;X0<v.length;X0++)if(b[o][A]===v[X0])return!0;return!1},u=function(b,v){if(b===0&&v===-1)return G.TOP;if(b===1&&v===-1)return G.TOP_RIGHT;if(b===1&&v===0)return G.RIGHT;if(b===1&&v===1)return G.BOTTOM_RIGHT;if(b===0&&v===1)return G.BOTTOM;if(b===-1&&v===1)return G.BOTTOM_LEFT;if(b===-1&&v===0)return G.LEFT;if(b===-1&&v===-1)return G.TOP_LEFT;throw new Error("These differences are not valid: "+b+", "+v)},T=function(b,v){return c[v]&&c[v][b]||r[N[v][b]]},t=function(b,v,A,o,e){if(b.nodeHash[A]!==void 0){if(b.nodeHash[A][v]!==void 0)return b.nodeHash[A][v]}else b.nodeHash[A]={};var K0=a(v,A,b.endX,b.endY);if(o!==null)var D0=o.costSoFar+e;else D0=0;var X0=new R(o,v,A,D0,K0);return b.nodeHash[A][v]=X0,X0},a=function(b,v,A,o){var e,K0;return s?(e=Math.abs(b-A))<(K0=Math.abs(v-o))?1.4*e+K0:1.4*K0+e:(e=Math.abs(b-A))+(K0=Math.abs(v-o))}},G.TOP="TOP",G.TOP_RIGHT="TOP_RIGHT",G.RIGHT="RIGHT",G.BOTTOM_RIGHT="BOTTOM_RIGHT",G.BOTTOM="BOTTOM",G.BOTTOM_LEFT="BOTTOM_LEFT",G.LEFT="LEFT",G.TOP_LEFT="TOP_LEFT"},function(J,z){J.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(J,z){J.exports=function($,G,P,R,j){this.parent=$,this.x=G,this.y=P,this.costSoFar=R,this.simpleDistanceToTarget=j,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(J,z,$){J.exports=$(4)},function(J,z,$){var G,P,R;(function(){var j,S,N,I,m,J0,V0,r,c,Q0,x,_,p,q0,s;N=Math.floor,Q0=Math.min,S=function(E,k){return E<k?-1:E>k?1:0},c=function(E,k,u,T,t){var a;if(u==null&&(u=0),t==null&&(t=S),u<0)throw new Error("lo must be non-negative");for(T==null&&(T=E.length);u<T;)t(k,E[a=N((u+T)/2)])<0?T=a:u=a+1;return[].splice.apply(E,[u,u-u].concat(k)),k},J0=function(E,k,u){return u==null&&(u=S),E.push(k),q0(E,0,E.length-1,u)},m=function(E,k){var u,T;return k==null&&(k=S),u=E.pop(),E.length?(T=E[0],E[0]=u,s(E,0,k)):T=u,T},r=function(E,k,u){var T;return u==null&&(u=S),T=E[0],E[0]=k,s(E,0,u),T},V0=function(E,k,u){var T;return u==null&&(u=S),E.length&&u(E[0],k)<0&&(k=(T=[E[0],k])[0],E[0]=T[1],s(E,0,u)),k},I=function(E,k){var u,T,t,a,b,v;for(k==null&&(k=S),b=[],T=0,t=(a=function(){v=[];for(var A=0,o=N(E.length/2);0<=o?A<o:A>o;0<=o?A++:A--)v.push(A);return v}.apply(this).reverse()).length;T<t;T++)u=a[T],b.push(s(E,u,k));return b},p=function(E,k,u){var T;if(u==null&&(u=S),(T=E.indexOf(k))!==-1)return q0(E,0,T,u),s(E,T,u)},x=function(E,k,u){var T,t,a,b,v;if(u==null&&(u=S),!(t=E.slice(0,k)).length)return t;for(I(t,u),a=0,b=(v=E.slice(k)).length;a<b;a++)T=v[a],V0(t,T,u);return t.sort(u).reverse()},_=function(E,k,u){var T,t,a,b,v,A,o,e,K0;if(u==null&&(u=S),10*k<=E.length){if(!(a=E.slice(0,k).sort(u)).length)return a;for(t=a[a.length-1],b=0,A=(o=E.slice(k)).length;b<A;b++)u(T=o[b],t)<0&&(c(a,T,0,null,u),a.pop(),t=a[a.length-1]);return a}for(I(E,u),K0=[],v=0,e=Q0(k,E.length);0<=e?v<e:v>e;0<=e?++v:--v)K0.push(m(E,u));return K0},q0=function(E,k,u,T){var t,a,b;for(T==null&&(T=S),t=E[u];u>k&&T(t,a=E[b=u-1>>1])<0;)E[u]=a,u=b;return E[u]=t},s=function(E,k,u){var T,t,a,b,v;for(u==null&&(u=S),t=E.length,v=k,a=E[k],T=2*k+1;T<t;)(b=T+1)<t&&!(u(E[T],E[b])<0)&&(T=b),E[k]=E[T],T=2*(k=T)+1;return E[k]=a,q0(E,v,k,u)},j=function(){function E(k){this.cmp=k!=null?k:S,this.nodes=[]}return E.push=J0,E.pop=m,E.replace=r,E.pushpop=V0,E.heapify=I,E.updateItem=p,E.nlargest=x,E.nsmallest=_,E.prototype.push=function(k){return J0(this.nodes,k,this.cmp)},E.prototype.pop=function(){return m(this.nodes,this.cmp)},E.prototype.peek=function(){return this.nodes[0]},E.prototype.contains=function(k){return this.nodes.indexOf(k)!==-1},E.prototype.replace=function(k){return r(this.nodes,k,this.cmp)},E.prototype.pushpop=function(k){return V0(this.nodes,k,this.cmp)},E.prototype.heapify=function(){return I(this.nodes,this.cmp)},E.prototype.updateItem=function(k){return p(this.nodes,k,this.cmp)},E.prototype.clear=function(){return this.nodes=[]},E.prototype.empty=function(){return this.nodes.length===0},E.prototype.size=function(){return this.nodes.length},E.prototype.clone=function(){var k;return(k=new E).nodes=this.nodes.slice(0),k},E.prototype.toArray=function(){return this.nodes.slice(0)},E.prototype.insert=E.prototype.push,E.prototype.top=E.prototype.peek,E.prototype.front=E.prototype.peek,E.prototype.has=E.prototype.contains,E.prototype.copy=E.prototype.clone,E}(),P=[],(R=typeof(G=function(){return j})=="function"?G.apply(z,P):G)===void 0||(J.exports=R)}).call(this)}]);function W6(J,z,$,G,P){let R=new XJ.js;R.setGrid(J),R.setAcceptableTiles([0]),R.enableSync();let j=null;return R.findPath(z,$,G,P,function(S){j=S}),R.calculate(),j}function W0(){return"player"}function F6(J,z,$,G){return Math.abs(J-$)+Math.abs(z-G)}function F1(J){return[...Array(J).keys()]}function R6(J){let z=GJ(J),$=J.entities[W0()];for(let G=0;G<z.length;G++){let P=z[G],R=J.entities[P],j=J._AIs[P],S=F6($.x,$.y,R.x,R.y);if($.options.faction!==R.options.faction&&S<=j.aggroRange){let N=J.maps[J.currentMapId].asMovementMap(),I=W6(N,R.x,R.y,$.x,$.y);if(I){if(I=I.slice(1),I.length>S)I=null}j.path=I}if(!!R.message&&R.message.includes("OBEY"));}for(let G=0;G<z.length;G++){let P=z[G],R=J.entities[P],j=J._AIs[P];if(j.path){let S=j.path[0],N=S.x-R.x,I=S.y-R.y;J=F0(J,R,N,I)}}return J}function GJ(J){let z=h0(J,J.currentMapId),$=[];for(let G=0;G<z.length;G++){let P=z[G];if(P.options.ai)$.push(P.id)}return $}function M6(J,z,$){let G=J.entities[z],P=8;switch($){case F.ais.aggrorange:P=8;break;case F.ais.aggrorangeshort:P=2;break;case F.ais.guardian:P=1;break;case F.ais.interactenrage:P=2;break;default:}return J._AIs[z]={entityId:z,type:$,aggroRange:P,startMap:G.mapId,startX:G.x,startY:G.y,path:null},J}function R1(J,z){return J._AIs[z]=void 0,delete J._AIs[z],J}function j6(J){let z=void 0;while(typeof(z=J._despawnQueue.shift())!=="undefined")J=B1(J,z),J=R1(J,z);return J}function C6(J){return J}class A0{mapId;x;y;entityOrItemName;options;constructor(J,z,$,G,P={}){this.mapId=J,this.x=z,this.y=$,this.entityOrItemName=G,this.options=P}generateId(){return this.mapId+","+this.entityOrItemName+","+this.x+","+this.y+"/g"}}function b0(J,z){if(BJ(z.entityOrItemName)){let $=z.options;if(Object.hasOwn($,"ai"))$.ai=F.ais[$.ai];if(Object.hasOwn($,"faction"))$.faction=F.factions[$.faction];let G=z.generateId();if(J=E0(J,G,F.entities[z.entityOrItemName],z.mapId,z.x,z.y,$),Object.hasOwn($,"equip")&&O6($.equip))J=s1(J,G,F.items[$.equip]);if(Object.hasOwn($,"ai"))J=M6(J,G,$.ai)}else if(O6(z.entityOrItemName))J=z1(J,F.items[z.entityOrItemName],z.mapId,z.x,z.y);return J}function BJ(J){return Object.hasOwn(F.entities,J)}function O6(J){return Object.hasOwn(F.items,J)}function x0(J,z={}){return{type:J,options:z}}function E6(J){return J.type.name.startsWith("space")}function A6(J){for(let z in F.maps){let $=m0(F.maps[z]);J.maps[z]=$;for(let G of $._spawnCommands)J=b0(J,G);$._spawnCommands=[]}return J}function N6(J,z){let $=P1(J,z);for(let P=0;P<$.length;P++){let R=$[P];J=n1(J,R.id)}let G=h0(J,z);for(let P=0;P<G.length;P++){let R=G[P];J=B1(J,R.id),J=R1(J,R.id)}return J.maps[z]=void 0,delete J.maps[z],J}class _0{id;widthTiles;heightTiles;seed;_tiles;_cacheMovementMap;_spawnCommands;_tvCount;tvMessage;constructor(J,z,$,G=[]){this.id=J,this.widthTiles=z,this.heightTiles=$,this.seed=null,this._tiles=G,this._cacheMovementMap=null,this._spawnCommands=[],this._tvCount=0,this.tvMessage=null}getTile(J,z){if(J>=0&&J<this.widthTiles&&z>=0&&z<this.heightTiles){let $=z*this.widthTiles+J;return this._tiles[$]}return{}}setTile(J,z,$,G={}){this._cacheMovementMap=null;let P=z*this.widthTiles+J,R=this._tiles[P];return this._tiles[P]=x0($,G),R}setTvMessage(J){if(this._tvCount){let z=0;for(let $ of this._tiles)if($.type===F.tiles.tv&&z<J.length)$.options.sign=J[z],z++;if(J==="")J=null;this.tvMessage=J}}pasteOnto(J,z=0,$=0){for(let G=0;G<J.heightTiles;G++)for(let P=0;P<J.widthTiles;P++){let R=J.getTile(P,G);if(R.type!==F.tiles.voidtrue)this.setTile(P+z,G+$,R.type,R.options)}return this}circular(){let J=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let z=-J;z<=J;z++)for(let $=-J;$<=J;$++)if($*$+z*z>=J*J)this.setTile($+J-1,z+J-1,F.tiles.voidtrue);return this}sample(J,z){let $=Math.floor(this.widthTiles/J),G=Math.floor(this.heightTiles/z),P=[];for(let R=0;R<z;R++)for(let j=0;j<J;j++){let S={};for(let r=0;r<G;r++)for(let c=0;c<$;c++){let Q0=this.getTile(j*$+c,R*G+r);if(S[Q0.type.name])S[Q0.type.name]+=1;else S[Q0.type.name]=1}let N="",I=0;for(let[r,c]of Object.entries(S))if(c>I)N=r,I=c;let m="space"+N,J0=F.tiles[m]||F.tiles.spacevoid,V0={mapId:this.id,x:j*$,y:R*G};P.push(x0(J0,V0))}return new _0("__sampled_"+J+"_"+z+"_"+this.id,J,z,P)}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let J=new Array(this.heightTiles);for(let z=0;z<this.heightTiles;z++){J[z]=new Array(this.widthTiles);for(let $=0;$<this.widthTiles;$++){let G=z*this.widthTiles+$,R=this._tiles[G].type;if(J[z][$]=0,o1(R))J[z][$]=1}}return this._cacheMovementMap=J,J}}function m0(J){let z=J.split(/\r?\n/),$=J[0],G="",P=0,R=0,j={},S=[],N=[],I=0,m="";for(let V0=0;V0<z.length;V0++){let r=z[V0];if(r.startsWith($)){if(r.startsWith($+"!id"))G=r.slice(5);else if(r.startsWith($+"!size")){let c=r.split(" ").slice(1);P=Number(c[0]),R=Number(c[1])}else if(r.startsWith($+"!spawn")){let c=r.split(" ").slice(1),Q0={};if(c.length>3){let x=c.slice(3);for(let _ of x){let p=_.split("=");Q0[p[0]]=p[1]}}S.push(new A0(G,Number(c[0]),Number(c[1]),c[2],Q0))}else if(r.startsWith($+"!")){let c=r[2],Q0=r.slice(4);j[c]=Q0}}else for(let c=0;c<r.length;c++){let Q0=r[c],x=j[Q0];if(l.debug&&!x)console.log("DEBUG Broken map: "+G);let _=x.split(" "),p={};if(x.startsWith("portal ")||x.startsWith("portalhidden ")||x.startsWith("portalsewers ")||x.startsWith("portallauncher ")||x.startsWith("portalstart"))x=_[0],p.mapId=_[1],p.x=Number(_[2]),p.y=Number(_[3]);if(x.startsWith("wall ")&&_.length>=2)x="wall",p.sign=_[1];if(x.startsWith("terminal ")){if(x="terminal",_.length>=2)p.screen=_[1]}if(x.startsWith("tv ")&&_.length>=2){if(x="tv",_.length===3)m=_[2];I++}N.push(x0(F.tiles[x],p))}}if(l.debug&&!(I===0||I===12))console.log("DEBUG Broken map: "+G+" (invalid TV size "+I+", allowed are 0 or 12 characters per map)");let J0=new _0(G,P,R,N);return J0._tvCount=I,J0.setTvMessage(m),J0._spawnCommands=S,J0}function o1(J){return J===F.tiles.rock||J===F.tiles.portalclosed||J===F.tiles.portalsewers||J===F.tiles.tv||J.name.startsWith("wall")}function a1(J){return J===F.tiles.water||J===F.tiles.watersewage}function f6(J,z,$){switch($){case F.commands.N:J=F0(J,z,0,-1);break;case F.commands.W:J=F0(J,z,-1,0);break;case F.commands.S:J=F0(J,z,0,1);break;case F.commands.E:J=F0(J,z,1,0);break;case F.commands.A:J=S6(J,z,F.commands.A);break;case F.commands.B:J=S6(J,z,F.commands.B);break;default:}return J}function F0(J,z,$,G,P=0){let R=J.maps[z.mapId],j=Y1(J,R.id,z.x+$,z.y+G),S=J.tools[z.id];if(z.message=R.tvMessage,j)if(O0(j)){if(!O0(z)&&P<1)J=F0(J,j,$,G,P++),J=F0(J,z,$,G,P++)}else J=w6(J,z,j);else if(LJ(R,z,$,G))J=v6(J,R,z,$,G),J._energyQueue.push({entityId:z.id,energyDelta:-1*P});else if(wJ(R,z,S,$,G)){if(R.setTile(z.x+$,z.y+G,F.tiles.void).type===F.tiles.rock){let I=J.rng.getPercentage();if(I<=1)J=z1(J,F.items.matter,R.id,z.x+$,z.y+G);else if(I<=34)J=z1(J,F.items.junk,R.id,z.x+$,z.y+G)}J._energyQueue.push({entityId:z.id,energyDelta:S.type.energyCost})}else if(HJ(R,z,S,$,G))J=v6(J,R,z,$,G),J._energyQueue.push({entityId:z.id,energyDelta:S.type.energyCost});return J}function S6(J,z,$){let P=w1(J,z)[$.key],j=J.maps[z.mapId].getTile(z.x,z.y);switch(P){case F.actions.Enter:J=I6(J,z,j);break;case F.actions.Launch:J=YJ(J,z,j);case F.actions.Wait:break;default:}return J}function v6(J,z,$,G,P){$.x+=G,$.y+=P;let R=D1(J,$.mapId,$.x,$.y);if(R)J=D6(J,$,R);let j=z.getTile($.x,$.y);if(j.type.name.startsWith("portal"))J=I6(J,$,j);if(j.type===F.tiles.terminal)z.setTvMessage("OBEYWORKKILL");if(j.type.name.startsWith("move"))switch(j.type.name){case"movenorth":J=F0(J,$,0,-1);break;case"moveeast":J=F0(J,$,1,0);break;case"movesouth":J=F0(J,$,0,1);break;case"movewest":J=F0(J,$,-1,0);break;default:}return J}function I6(J,z,$){if(z.id.startsWith("player"))J.currentMapId=$.options.mapId;if(E6($))J.lastSpacePositionByEntity[z.id]={mapId:z.mapId,x:z.x,y:z.y};else J.lastSpacePositionByEntity[z.id]=void 0,delete J.lastSpacePositionByEntity[z.id];let G={entityId:z.id,oldMapId:z.mapId,oldX:z.x,oldY:z.y,oldTileType:$.type,newMapId:$.options.mapId,newX:$.options.x,newY:$.options.y};return z.mapId=$.options.mapId,z.x=$.options.x,z.y=$.options.y,J=K1(J,0,G),J}function YJ(J,z,$){if(J.lastSpacePositionByEntity[z.id]){if(z.id.startsWith("player"))J.currentMapId=J.lastSpacePositionByEntity[z.id].mapId;let G={entityId:z.id,oldMapId:z.mapId,oldX:z.x,oldY:z.y,oldTileType:$.type,newMapId:J.lastSpacePositionByEntity[z.id].mapId,newX:J.lastSpacePositionByEntity[z.id].x,newY:J.lastSpacePositionByEntity[z.id].y};z.mapId=G.newMapId,z.x=G.newX,z.y=G.newY,J._energyQueue.push({entityId:z.id,energyDelta:F.actions.Launch.energyDelta}),J.lastSpacePositionByEntity[z.id]=void 0,delete J.lastSpacePositionByEntity[z.id],J=K1(J,0,G)}return J}function b6(J){for(let z in J.entities){let $=J.entities[z],G=J.tools[z],R=J.maps[$.mapId].getTile($.x,$.y),j=R.type.energyDelta;if(R.type===F.tiles.chargepad&&G?.type.effects.includes(F.effects.Recharger.name))j*=2;else if(a1(R.type)&&G?.type.effects.includes(F.effects.WaterImmunity.name))j=0;else if(a1(R.type)&&G?.type.effects.includes(F.effects.WaterShield.name))j/=2;else if(R.type===F.tiles.drain){let S=Math.min($.gold,F.constants.DRAIN_GOLD_COST),N=Math.min($.matter,F.constants.DRAIN_MATTER_COST);$.gold-=S,$.matter-=N}if(j!==0)J._energyQueue.push({entityId:z,energyDelta:j})}return J}function k6(J,z){let $=J.entities[z.entityId];switch(z.oldTileType){case F.tiles.portalstartaerobot:J=L1(J,$,F.entities.AeroBot),J=L0(J,`Booting up as an ${F.entities.AeroBot.name}...`);break;case F.tiles.portalstartworkbot:J=L1(J,$,F.entities.WorkBot),J=L0(J,`Booting up as a ${F.entities.WorkBot.name}...`);break;default:}return J}function LJ(J,z,$,G){let P=z.x+$,R=z.y+G,j=J.getTile(P,R).type;return P>=0&&P<J.widthTiles&&R>=0&&R<J.heightTiles&&!o1(j)}function wJ(J,z,$,G,P){let R=z.x+G,j=z.y+P,S=J.getTile(R,j).type;if($)return $.type.effects.includes(F.effects.WallCrusher.name)&&S===F.tiles.wallweak||$.type.effects.includes(F.effects.RockCrusher.name)&&S===F.tiles.rock;return!1}function HJ(J,z,$,G,P){let R=z.x+G,j=z.y+P,S=J.getTile(R,j).type;if($)return $.type.effects.includes(F.effects.Screwing.name)&&S===F.tiles.portalsewers;return!1}var T6=d1(O1(),1);class k0{seed;_rotRng;constructor(J=1337){this.seed=J,this._rotRng=T6.RNG.clone(),this._rotRng.setSeed(J)}getPercentage(){return this._rotRng.getPercentage()}getItem(J){return this._rotRng.getItem(J)}}function h6(J,z){if(z.seed===1337)J=b0(J,new A0(z.id,130,127,"Valkyrie",{faction:"Spirits"})),J=b0(J,new A0(z.id,124,127,"Valkyrie",{faction:"Spirits"})),J=b0(J,new A0(z.id,127,130,"trident"));else{let $=new k0(z.seed);for(let G=0;G<z.heightTiles;G++)for(let P=0;P<z.widthTiles;P++){let R=z.getTile(P,G);if($.getPercentage()<=1&&(R.type===F.tiles.void||R.type===F.tiles.tree)){let j=$.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(j){case"Deviant":case"Pioneer":J=b0(J,new A0(z.id,P,G,j,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":J=b0(J,new A0(z.id,P,G,j));break}}}}return J}var j1=d1(O1(),1);var WJ=1337,x6=55;function _6(J,z=WJ){j1.RNG.setSeed(z);let $=new j1.Noise.Simplex,G=256,P=256,R=[];for(let N=0;N<P;N++)for(let I=0;I<G;I++){let m=$.get(I/x6,N/x6),J0;if(m<=-0.5)J0=F.tiles.water;else if(m<=0)J0=F.tiles.void;else if(m<0.5)J0=F.tiles.tree;else J0=F.tiles.rock;R.push(x0(J0))}let j="simplex="+z,S=new _0(j,G,P,R);return S.seed=z,J.maps[j]=S,J}var FJ=1337;function c6(J,z=FJ){let $=m6(1024,1024,F.tiles.void);$.id="solarsystem="+z,J.maps[$.id]=$;let G=new k0(z),P=new k0(z),R=G.getItem([2,3,4,5,6,7,8,9,10,11,12]),j=128,S=512-j,N=Math.floor(S/R);$=RJ($,G);let I=m6(128,128,F.tiles.voidtrue);MJ(I,63,63,62,F.tiles.star),OJ(I,63,63,F.tiles.star),$.pasteOnto(I,448,448);for(let r=j;r<512;r+=N){let c=G.getItem([-1,1])*G.getItem(F1(r)),Q0=G.getItem([-1,1])*Math.floor(Math.sqrt(r*r-c*c));c+=512,Q0+=512;let x=G.getItem([16,24,32]),_=Math.floor(x/2)-1;J=_6(J,z);let p=J.maps["simplex="+z],q0=F.map_snippets.launcher;q0=q0.replace("!!O portallauncher space 0 0",`!!O portallauncher ${$.id} ${c} ${Q0}`);let s=m0(q0),E=P.getItem(F1(p.widthTiles-s.widthTiles)),k=P.getItem(F1(p.heightTiles-s.heightTiles));p.pasteOnto(s,E,k),J=h6(J,p);let u=p.sample(x,x).circular();$.pasteOnto(u,c-(_+1),Q0-(_+1)),z++}let m=F.map_snippets.space_bot_station;m=m.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let J0=m0(m);$.pasteOnto(J0,583,398);let V0=m0(F.map_snippets.square_falcon);return $.pasteOnto(V0,590,373),J}function m6(J,z,$){let G=[];for(let j=0;j<J*z;j++)G.push(x0($));return new _0("__temp",J,z,G)}function RJ(J,z){for(let $=0;$<J.heightTiles;$++)for(let G=0;G<J.widthTiles;G++)if(z.getPercentage()<=1)J.setTile(G,$,z.getItem([F.tiles.spacevoidstarwhite,F.tiles.spacevoidstaryellow]));return J}function MJ(J,z,$,G,P){let R=1-G,j=1,S=-2*G,N=0,I=G;J.setTile(z,$+G,P),J.setTile(z,$-G,P),J.setTile(z+G,$,P),J.setTile(z-G,$,P);while(N<I){if(R>=0)I-=1,S+=2,R+=S;N+=1,j+=2,R+=j,J.setTile(z+N,$+I,P),J.setTile(z-N,$+I,P),J.setTile(z+N,$-I,P),J.setTile(z-N,$-I,P),J.setTile(z+I,$+N,P),J.setTile(z-I,$+N,P),J.setTile(z+I,$-N,P),J.setTile(z-I,$-N,P)}return J}function OJ(J,z,$,G){let{widthTiles:P,heightTiles:R}=J,j=[];j.push({x:z,y:$});let S=void 0;while(typeof(S=j.shift())!=="undefined"){let N=S,I=S;if(S.x+1<P)I={x:S.x+1,y:S.y};while(J.getTile(N.x,N.y).type!==G){if(J.setTile(N.x,N.y,G),N.y+1<R){if(J.getTile(N.x,N.y+1).type!==G)j.push({x:N.x,y:N.y+1})}if(N.y-1>=0){if(J.getTile(N.x,N.y-1).type!==G)j.push({x:N.x,y:N.y-1})}if(N.x-1>=0)N.x-=1;else break}while(J.getTile(I.x,I.y).type!==G){if(J.setTile(I.x,I.y,G),I.y+1<R){if(J.getTile(I.x,I.y+1).type!==G)j.push({x:I.x,y:I.y+1})}if(I.y-1>=0){if(J.getTile(I.x,I.y-1).type!==G)j.push({x:I.x,y:I.y-1})}if(I.x+1<P)I.x+=1;else break}}return J}function y6(J,z){if(z?.oldMapId?.startsWith("shop_instance")){J=N6(J,z.oldMapId);let $=J.maps[z.newMapId],G=$.getTile(z.newX,z.newY);$.setTile(z.newX,z.newY,G.type,{mapId:"shop_instance",x:z.oldX,y:z.oldY})}if(z?.newMapId?.startsWith("shop_instance")){let $=m0(F.map_snippets.shop_instance);$.id+="_"+z.oldMapId+"_"+z.entityId,$.setTile(z.newX,z.newY,F.tiles.portal,{mapId:z.oldMapId,x:z.oldX,y:z.oldY}),J.maps[z.oldMapId].setTile(z.oldX,z.oldY,z.oldTileType,{mapId:$.id,x:z.newX,y:z.newY});let P=J.entities[z.entityId];if(P.id.startsWith("player"))J.currentMapId=$.id;if(P.mapId=$.id,P.x=z.newX,P.Y=z.newY,J.maps[$.id]=$,J=U1(J,F.items.hammer,$.id,4,4,0,-200),J=U1(J,F.items.pickaxe,$.id,4,6,0,-200),J=U1(J,F.items.battery,$.id,4,8,0,-200),J=U1(J,F.items.gold,$.id,4,10,1,-1e4),J=E0(J,$.id+"_shopkeeper",F.entities.AeroBot,$.id,6,2,{faction:P.options.faction,dialog:"shop_instance_shopkeeper",name:"Shopkeeper"}),z?.oldMapId.startsWith("bot_stadium"))J=E0(J,$.id+"_shopper",F.entities.WorkBot,$.id,1,12,{faction:P.options.faction,dialog:"shop_instance_workbot_shopper"});else if(z?.oldMapId.startsWith("bot_bar"))J=E0(J,$.id+"_shopper",F.entities.AeroBot,$.id,4,11,{faction:P.options.faction,dialog:"shop_instance_aerobot_shopper"})}return J}function d6(){return{_AIs:{},_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_menuOpen:!0,actionLog:[],chatLog:[],currentMapId:"",entities:{},items:{},lastSpacePositionByEntity:{},maps:{},rng:new k0,tools:{},tvs:{}}}function p6(J){let z=void 0;while(typeof(z=J._combatQueue.shift())!=="undefined"){let $=-1,G=-5,P=W1(J,z.entityId);if(P)$=P.type.energyCost,G=-1*Math.abs(P.type.damage);J._energyQueue.push({entityId:z.entityId,energyDelta:$}),J._energyQueue.push({entityId:z.otherEntityId,energyDelta:G});let R=J.entities[z.entityId],j=J.entities[z.otherEntityId],S=R?.options?.name?R.options.name:R.type.name,N=j?.options?.name?j.options.name:j.type.name;J=L0(J,`${S} did ${Math.abs(G)} damage to ${N} at cost of ${Math.abs($)} energy.`)}return J}function l6(J){let z=void 0,$=new Set;while(typeof(z=J._energyQueue.shift())!=="undefined"){let G=J.entities[z.entityId];if(G.energy=Math.min(G.energy+z.energyDelta,G.energyMax),G.energy<=0)$.add(G.id)}for(let G of $){let P=J.entities[G];J._despawnQueue.push(G);let R=P?.options?.name?P.options.name:P.type.name;if(!O0(P)){let j=Math.max(1,Math.floor(P.energyMax/3));J=P6(J,j,P.mapId,P.x,P.y),J=L0(J,`${R} destroyed leaving behind Junk.`)}}return J}function r6(J){return J=R6(J),J=p6(J),J=b6(J),J=l6(J),J=j6(J),J=C6(J),J}class C1{state;constructor(){}init(){return this.state=d6(),this.state=r1(this.state,0,k6),this.state=r1(this.state,0,y6),this.state=c6(this.state),this.state=A6(this.state),this.state.currentMapId="botmos_hull_selection",this.state=E0(this.state,W0(),F.entities.Spirit,this.state.currentMapId,9,5,{faction:F.factions.Spirits,name:"Player"}),this.state}update(J,z=!1){let $=this.state.entities[W0()];if($){if(J){switch(J){case F.commands.M:this.state._menuOpen=!this.state._menuOpen;break;case F.commands["#"]:this.state=L0(this.state,Y6(this.state,W0()));break;default:this.state=f6(this.state,$,J),this.state=r6(this.state)}this.state.actionLog.push(J.key)}}else this.state=L0(this.state,`Game over! ${this.state.actionLog.length} turns.`),console.log(`Game over! ${this.state.actionLog.length} turns: ${this.state.actionLog.join("")}`),this.state.currentMapId="botmos_hull_selection",this.state=E0(this.state,W0(),F.entities.Spirit,this.state.currentMapId,9,5,{faction:F.factions.Spirits,name:"Player"});return this.state}play(J){for(let z=0;z<J.length;z++){let $=J[z];this.update(F.commands[$],!0)}return this.state}}var y={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,one:!1,two:!1,menu:!1,slash:!1},t1=[],E1=void 0,s6=void 0,n6=0;document.body.addEventListener("keydown",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":y.up=!0,U0(J);break;case"a":case"ArrowLeft":y.left=!0,U0(J);break;case"s":case"ArrowDown":y.down=!0,U0(J);break;case"d":case"ArrowRight":y.right=!0,U0(J);break;case"x":y.a=!0,U0(J);break;case" ":case"y":case"z":y.b=!0,U0(J);break;case"m":y.menu=!0,U0(J);break;case"#":case"/":y.slash=!0,U0(J);break;default:}N0(o6())});function N0(J){let z=Date.now();if(E1!==void 0&&z-n6>=F.constants.MIN_TURN_SPEED_IN_MS)n6=z,E1(J)}document.body.addEventListener("keyup",function(J){if(J.defaultPrevented)return;switch(J.key){case"w":case"ArrowUp":y.up=!1,U0(J);break;case"a":case"ArrowLeft":y.left=!1,U0(J);break;case"s":case"ArrowDown":y.down=!1,U0(J);break;case"d":case"ArrowRight":y.right=!1,U0(J);break;case"x":y.a=!1,U0(J);break;case" ":case"y":case"z":y.b=!1,U0(J);break;case"m":y.menu=!1,U0(J);break;case"#":case"/":y.slash=!1,U0(J);default:}});document.body.addEventListener("click",function(J){let{clientX:z,clientY:$}=J,P=document.body.clientWidth/3,j=document.body.clientHeight/3;if(z>=P&&z<2*P&&$<j)N0(F.commands.N),U0(J);else if(z<P&&$<j)N0(F.commands.B),U0(J);else if(z>=2*P&&$<j)N0(F.commands.A),U0(J);else if(z<P&&$>=j&&$<2*j)N0(F.commands.W),U0(J);else if(z>=2*P&&$>=j&&$<2*j)N0(F.commands.E),U0(J);else if(z>=P&&z<2*P&&$>=2*j)N0(F.commands.S),U0(J);else if(z>=P&&z<2*P&&$>=j&&$<2*j)N0(F.commands.M),U0(J)});function U0(J){J.preventDefault(),J.stopPropagation()}var q1=null;function jJ(){let J=null;if(y.right)J=F.commands.E;if(y.left)J=F.commands.W;if(y.down)J=F.commands.S;if(y.up)J=F.commands.N;if(y.up&&y.right){if(J===F.commands.N&&q1===F.commands.N)J=F.commands.E}if(y.up&&y.left){if(J===F.commands.N&&q1===F.commands.N)J=F.commands.W}if(y.down&&y.right){if(J===F.commands.S&&q1===F.commands.S)J=F.commands.E}if(y.down&&y.left){if(J===F.commands.S&&q1===F.commands.S)J=F.commands.W}if(y.a)J=F.commands.A;if(y.b)J=F.commands.B;if(y.menu)J=F.commands.M;if(y.slash)J=F.commands["#"];if(q1=J,J!==null)t1.push(J)}function o6(){jJ();let J=t1.shift()||null;return t1=[],J}document.body.addEventListener("mousemove",function(J){if(J.defaultPrevented)return;if(E1!==void 0)s6(J),U0(J)});var a6=void 0;window.addEventListener("gamepadconnected",(J)=>{a6=setInterval(function(){let z=navigator.getGamepads()[J.gamepad?.index];if(y.right=z.buttons[15].pressed,y.left=z.buttons[14].pressed,y.down=z.buttons[13].pressed,y.up=z.buttons[12].pressed,y.a=z.buttons[0].pressed||z.buttons[2].pressed,y.b=z.buttons[1].pressed||z.buttons[3].pressed,y.menu=z.buttons[9].pressed,y.right||y.left||y.down||y.up||y.a||y.b||y.menu)N0(o6())},100)});window.addEventListener("gamepaddisconnected",(J)=>{clearInterval(a6)});function i6(J){E1=J}function t6(J){s6=J}var zZ=d1(O1(),1);var A1={__10:[0,0],__11:[16,0],__12:[32,0],__13:[48,0],__14:[64,0],__15:[80,0],__1:[96,0],_1:[112,0],__2:[128,0],_2:[144,0],__3:[160,0],_3:[176,0],__4:[192,0],_4:[208,0],__5:[224,0],_5:[240,0],__6:[256,0],_6:[272,0],__7:[288,0],_7:[304,0],__8:[320,0],_8:[336,0],__9:[352,0],_9:[368,0],AeroBot_a:[384,0],AeroBot:[400,0],battery:[416,0],broom:[432,0],chargepad:[448,0],cheat:[464,0],chest:[480,0],Cleaner_a:[496,0],Cleaner:[512,0],Deviant:[528,0],drain:[544,0],energy:[560,0],gold:[576,0],goo:[592,0],Graffiticyan:[608,0],Graffitimagenta:[624,0],Graffitiyellow:[640,0],hammer:[656,0],junk:[672,0],matter:[688,0],movableboulder:[704,0],movablebox:[720,0],moveeast:[736,0],movenorth:[752,0],movesouth:[768,0],movewest:[784,0],pickaxe:[800,0],Pioneer_a:[816,0],Pioneer:[832,0],portalclosed:[848,0],portalhidden:[864,0],portallauncher:[880,0],portal:[896,0],portalsewers:[912,0],portalstartaerobot:[928,0],"_portalstart?":[944,0],portalstartworkbot:[960,0],RoboRat_a:[976,0],RoboRat:[992,0],rock:[1008,0],shocker:[1024,0],spacerock:[1040,0],spacetree:[1056,0],spacevoid:[1072,0],spacevoidstarwhite:[1088,0],spacevoidstaryellow:[1104,0],spacewater_a:[1120,0],spacewater:[1136,0],Spirit_a:[1152,0],Spirit:[1168,0],star:[1184,0],terminal:[1200,0],tree:[1216,0],trident:[1232,0],tv:[1248,0],Valkyrie_a:[1264,0],Valkyrie:[1280,0],voidhidden:[1296,0],void:[1312,0],voidtrue:[1328,0],wall0:[1344,0],wall1:[1360,0],wall2:[1376,0],walla_:[1392,0],wallA:[1408,0],wallb_:[1424,0],wallB:[1440,0],wallc_:[1456,0],wallC:[1472,0],walld_:[1488,0],wallD:[1504,0],walle_:[1520,0],wallE:[1536,0],wallf_:[1552,0],wallF:[1568,0],wallg_:[1584,0],wallG:[1600,0],wallh_:[1616,0],wallH:[1632,0],walli_:[1648,0],wallI:[1664,0],wallj_:[1680,0],wallJ:[1696,0],wallk_:[1712,0],wallK:[1728,0],walll_:[1744,0],wallL:[1760,0],wallm_:[1776,0],wallM:[1792,0],walln_:[1808,0],wallN:[1824,0],wallo_:[1840,0],wallO:[1856,0],"wall(":[1872,0],"wall)":[1888,0],"wall+":[1904,0],"wall,":[1920,0],"wall.":[1936,0],wall:[1952,0],"wall:":[1968,0],wall_:[1984,0],"wall|":[2000,0],wallp_:[2016,0],wallP:[2032,0],wallq_:[2048,0],wallQ:[2064,0],wallr_:[2080,0],wallR:[2096,0],walls_:[2112,0],wallS:[2128,0],wallstatueaerobot:[2144,0],wallstatuecleaner:[2160,0],wallstatuepioneer:[2176,0],wallstatueworkbot:[2192,0],wallt_:[2208,0],wallT:[2224,0],wallu_:[2240,0],wallU:[2256,0],wallv_:[2272,0],wallV:[2288,0],wallweak:[2304,0],wallw_:[2320,0],wallW:[2336,0],wallx_:[2352,0],wallX:[2368,0],wally_:[2384,0],wallY:[2400,0],wallz_:[2416,0],wallZ:[2432,0],water_a:[2448,0],water:[2464,0],watersewage_a:[2480,0],watersewage:[2496,0],WorkBot_a:[2512,0],WorkBot:[2528,0],wrench:[2544,0]};var o0=document.createElement("div");o0.id="ui";document.body.appendChild(o0);var N1=QZ(),n0=QZ(),e6=CJ(),S0=document.createElement("div");S0.replaceChildren(N1,n0,e6);o0.replaceChildren(S0);var v1=document.createElement("div");v1.style.display="flex";v1.style.justifyContent="space-between";var S1=document.createElement("div");S1.id="uichatlog";var ZZ=document.createElement("div");ZZ.id="uitooltip";v1.replaceChildren(S1,ZZ);o0.appendChild(v1);var e1=document.createElement("div");e1.id="uimousetooltip";document.body.appendChild(e1);async function JZ(J,z=0){if(!l.showUI)return;let $=W0(),G=J.entities[$],P="";if(G){s0(N1,G.type.name),N1.dataset.tooltip="Player hull: "+G.type.name;let R="",j=W1(J,$);if(j){s0(n0,j.type.name.toLowerCase());let m=j.type;n0.dataset.tooltip=`Player tool: ${m.name} (${Math.abs(m.damage)} damage, ${m.energyCost} energy)`}else s0(n0,null),n0.dataset.tooltip=void 0;let S="";if(G.matter>0)S=`${G.matter}M `;let N="";if(G.gold>0)N=`${G.gold}G `;let I=w1(J,G);if(P=" "+G.energy+"/"+G.energyMax+" "+R+N+S+"Y:"+I.B.name+" X:"+I.A.name,o0.style.flexDirection="column-reverse",G.y-z>=B0.height-3)o0.style.flexDirection="column";if(S0.style.background="#000",G.energy/G.energyMax<=0.2)S0.style.color="#000",S0.style.background="#f00";else S0.style.color="#74ee15",S0.style.background="#000"}else s0(N1,null),s0(n0,null),P="Game over!",S0.style.color="#000",S0.style.background="#f00";if(e6.innerText=P,J._menuOpen&&!!J.chatLog.length){let R=J.chatLog.slice(-l.chatLogMaxDisplaySize);S1.innerText=R.join(`
`)}else S1.innerText=""}function QZ(){let J=document.createElement("span");return s0(J,null),J.style.height=`${l.fontSize}px`,J.style.display="inline-block",J}function CJ(){let J=document.createElement("span");return J.style.display="inline-block",J.style.marginLeft=`${l.fontSize/2}px`,J}function s0(J,z){if(z){let $=A1[z][0];J.style.background=`url('build/tiles.png') -${$}px 0`,J.style.width=`${l.fontSize}px`}else J.style.width="0px"}function VZ(){return e1}var y0="_a",UZ=document.createElement("img");UZ.src="build/tiles.png";B0.tileSet=UZ;B0.tileMap=NJ();var i0=new zZ.Display(B0);document.body.appendChild(i0.getContainer());var qZ=0,$Z=0,a0=void 0;function EJ(J,z,$=!1){a0=J;let G=J.currentMapId,P=J.maps[G],R=$?y0:"",j=0,S=0;if(P.widthTiles<z.width)j=Math.floor((z.width-P.widthTiles)/2),z.x=0;if(P.heightTiles<z.height)S=Math.floor((z.height-P.heightTiles)/2),z.y=0;qZ=z.x-j,$Z=z.y-S;let N={},I={},m={};for(let x=0;x<z.height;x++)for(let _=0;_<z.width;_++){let p=P.getTile(z.x+_,z.y+x),q0="";if(p?.type)if(p.options.sign)q0="#"+p.options.sign;else q0=p.type.icon;if(q0){let s=[j+_,S+x].toString();N[s]=[q0+R],I[s]=["transparent"],m[s]=["transparent"]}}let J0=P1(J,G);for(let x=0;x<J0.length;x++){let _=J0[x],p=j+_.x-z.x,q0=S+_.y-z.y,s=[p,q0].toString();if(N[s])N[s].push(_.type.icon+R),I[s].push("transparent"),m[s].push("transparent");else N[s]=[_.type.icon+R],I[s]=["transparent"],m[s]=["transparent"]}let V0=W0(),r=J.entities[V0],c=((r||{}).options||{}).faction||void 0,Q0=h0(J,G);for(let x=0;x<Q0.length;x++){let _=Q0[x],p=j+_.x-z.x,q0=S+_.y-z.y,s="transparent";if(l.highlightEnemy&&!!c&&!O0(_)&&!l1(_))s=c===_.options.faction?"rgba(116, 238, 21, 0.5)":"rgba(240, 0, 255, 0.5)";if(_===r)s="transparent";let E=[p,q0].toString();if(N[E])N[E].push(_.type.icon+R),I[E].push(s),m[E].push("transparent");else N[E]=[_.type.icon+R],I[E]=[s],m[E]=["transparent"];if(l.showEnergy!==0){let k=l.showEnergy===1?16:10,u=l.showEnergy===1?"__":"_",T=Math.ceil(_.energy/_.energyMax*k);if(T<k)N[E].push(u+T),I[E].push("transparent"),m[E].push("transparent")}}i0.clear();for(let[x,_]of Object.entries(N)){let p=x.split(",");i0.draw(Number(p[0]),Number(p[1]),_,I[x],m[x])}}var KZ={x:0,y:0},f1=0;async function d0(J){let z=J.entities[W0()],$=z?z:KZ,G=AJ($);if(EJ(J,G,f1%2==0),JZ(J,G.y),KZ=$,f1++,f1>=128)f1=0}async function XZ(){i0._backend.setOptions(B0)}function GZ(J){return[J[0]+qZ,J[1]+$Z]}function BZ(J){if(!a0)return{tile:null,entity:null,item:null};let z=a0.currentMapId,$=a0.maps[z],G=J[0],P=J[1],R=$.getTile(G,P),j=Y1(a0,z,G,P),S=D1(a0,z,G,P);return{tile:R,entity:j,item:S}}function AJ(J){return{x:Math.min(Math.max(0,J.x-Math.floor(B0.width/2)),p1.WIDTH-B0.width),y:Math.min(Math.max(0,J.y-Math.floor(B0.height/2)),p1.HEIGHT-B0.height),width:B0.width,height:B0.height}}function NJ(){let J={};for(let[z,$]of Object.entries(A1)){let G=z.endsWith(y0),P="";if(G)z=z.substring(0,z.length-y0.length),P=y0;if(z.startsWith("wall")&&(z.length===5||z.length===6))J["#"+z.substring(4,5)+P]=$;else if(Object.hasOwn(F.tiles,z))J[F.tiles[z].icon+P]=$;else if(Object.hasOwn(F.entities,z))J[F.entities[z].icon+P]=$;else if(Object.hasOwn(F.items,z))J[F.items[z].icon+P]=$;else J[z+P]=$}for(let[z,$]of Object.entries(J))if(!z.endsWith(y0)&&!Object.hasOwn(J,z+y0))J[z+y0]=$;return J}async function YZ(J){if(!l.showUI||!l.showTooltip)return;let z="";if(J.target){if(J.target?.dataset?.tooltip)z+=J.target.dataset.tooltip}let $=i0.eventToPosition(J);if($[0]!==-1){let j=GZ($),S=BZ(j);if(S.entity){let N=S.entity?.options?.name?S.entity.options.name:S.entity.type.name;z+=N}if(S.item){if(z!=="")z+=`
`;z+=S.item.type.name}if(!!S?.tile?.type&&S.tile?.type.tooltip!==""){if(z!=="")z+=`
`;z+=S.tile.type.tooltip}}let G=typeof window!=="undefined"?window.innerHeight:0,P=Math.floor(G/2),R=VZ();if(z!==""){if(R.innerText=z,R.style.left=J.x+20+"px",R.style.top=J.y+20+"px",J.y>P)R.style.top=J.y-20+"px";R.style.display="inline-block"}else R.style.display="none"}var R0=new C1;window.onload=function(){d0(R0.init())};window.onresize=async function(){let J=typeof window!=="undefined"?window.innerWidth:0,z=typeof window!=="undefined"?window.innerHeight:0;l.cameraWidth=Math.floor(J/l.fontSize),l.cameraHeight=Math.floor(z/l.fontSize),B0.width=Math.floor(l.cameraWidth*(1/l.zoom)),B0.height=Math.floor(l.cameraHeight*(1/l.zoom)),await XZ(),d0(R0.state)};i6(function(J){d0(R0.update(J))});t6(YZ);if(!window.BMActionLog)window.BMActionLog=function(){return R0.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(J){d0(R0.play(J))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){l.debug=!l.debug,d0(R0.state)};if(!window.BMToggleUI)window.BMToggleUI=function(){l.showUI=!l.showUI,d0(R0.state)};if(l.debug){if(!window.BMDebugState)window.BMDebugState=function(){return R0.state};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let J=Object.keys(R0.state.maps).length,z=Object.keys(R0.state.entities).length,$=Object.keys(R0.state.items).length,G=Object.keys(R0.state.tools).length;return`Maps: ${J}, Entities: ${z}, Items: ${$}, Tools: ${G}`}}document.body.focus();
