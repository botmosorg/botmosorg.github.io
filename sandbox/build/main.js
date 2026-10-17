var N8=Object.create;var{getPrototypeOf:S8,defineProperty:Ww,getOwnPropertyNames:u8}=Object;var g8=Object.prototype.hasOwnProperty;function h8(_){return this[_]}var I8,T8,S0=(_,w,J)=>{var K=_!=null&&typeof _==="object";if(K){var $=w?I8??=new WeakMap:T8??=new WeakMap,G=$.get(_);if(G)return G}J=_!=null?N8(S8(_)):{};let j=w||!_||!_.__esModule?Ww(J,"default",{value:_,enumerable:!0}):J;for(let F of u8(_))if(!g8.call(j,F))Ww(j,F,{get:h8.bind(_,F),enumerable:!0});if(K)$.set(_,j);return j};var x8=(_,w)=>()=>(w||_((w={exports:{}}).exports,w),w.exports);var Z0=x8((J0,ew)=>{function V1(_){if(_===void 0)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function W7(_,w){var J=typeof Symbol<"u"&&_[Symbol.iterator]||_["@@iterator"];if(J)return(J=J.call(_)).next.bind(J);if(Array.isArray(_)||(J=H7(_))||w&&_&&typeof _.length==="number"){if(J)_=J;var K=0;return function(){if(K>=_.length)return{done:!0};return{done:!1,value:_[K++]}}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H7(_,w){if(!_)return;if(typeof _==="string")return iw(_,w);var J=Object.prototype.toString.call(_).slice(8,-1);if(J==="Object"&&_.constructor)J=_.constructor.name;if(J==="Map"||J==="Set")return Array.from(_);if(J==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(J))return iw(_,w)}function iw(_,w){if(w==null||w>_.length)w=_.length;for(var J=0,K=Array(w);J<w;J++)K[J]=_[J];return K}function V_(_,w){_.prototype=Object.create(w.prototype),_.prototype.constructor=_,p0(_,w)}function p0(_,w){return p0=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(K,$){return K.__proto__=$,K},p0(_,w)}(function(_,w){typeof J0==="object"&&typeof ew<"u"?w(J0):typeof define==="function"&&define.amd?define(["exports"],w):(_=typeof globalThis<"u"?globalThis:_||self,w(_.ROT={}))})(J0,function(_){var w=0.00000000023283064365386963,J=function(){function B(){this._seed=0,this._s0=0,this._s1=0,this._s2=0,this._c=0}var U=B.prototype;return U.getSeed=function(){return this._seed},U.setSeed=function(q){return q=q<1?1/q:q,this._seed=q,this._s0=(q>>>0)*w,q=q*69069+1>>>0,this._s1=q*w,q=q*69069+1>>>0,this._s2=q*w,this._c=1,this},U.getUniform=function(){var q=2091639*this._s0+this._c*w;return this._s0=this._s1,this._s1=this._s2,this._c=q|0,this._s2=q-this._c,this._s2},U.getUniformInt=function(q,Q){var Z=Math.max(q,Q),V=Math.min(q,Q);return Math.floor(this.getUniform()*(Z-V+1))+V},U.getNormal=function(q,Q){if(q===void 0)q=0;if(Q===void 0)Q=1;var Z,V,z;do Z=2*this.getUniform()-1,V=2*this.getUniform()-1,z=Z*Z+V*V;while(z>1||z==0);var Y=Z*Math.sqrt(-2*Math.log(z)/z);return q+Y*Q},U.getPercentage=function(){return 1+Math.floor(this.getUniform()*100)},U.getItem=function(q){if(!q.length)return null;return q[Math.floor(this.getUniform()*q.length)]},U.shuffle=function(q){var Q=[],Z=q.slice();while(Z.length){var V=Z.indexOf(this.getItem(Z));Q.push(Z.splice(V,1)[0])}return Q},U.getWeightedValue=function(q){var Q=0;for(var Z in q)Q+=q[Z];var V=this.getUniform()*Q,z,Y=0;for(z in q)if(Y+=q[z],V<Y)return z;return z},U.getState=function(){return[this._s0,this._s1,this._s2,this._c]},U.setState=function(q){return this._s0=q[0],this._s1=q[1],this._s2=q[2],this._c=q[3],this},U.clone=function(){var q=new B;return q.setState(this.getState())},B}(),K=new J().setSeed(Date.now()),$=function(){function B(){}var U=B.prototype;return U.getContainer=function(){return null},U.setOptions=function(q){this._options=q},B}(),G=function(B){V_(U,B);function U(){var q=B.call(this)||this;return q._ctx=document.createElement("canvas").getContext("2d"),q}var X=U.prototype;return X.schedule=function(Q){requestAnimationFrame(Q)},X.getContainer=function(){return this._ctx.canvas},X.setOptions=function(Q){B.prototype.setOptions.call(this,Q);var Z=Q.fontStyle?Q.fontStyle+" ":"",V=Z+" "+Q.fontSize+"px "+Q.fontFamily;this._ctx.font=V,this._updateSize(),this._ctx.font=V,this._ctx.textAlign="center",this._ctx.textBaseline="middle"},X.clear=function(){var Q=this._ctx.globalCompositeOperation;this._ctx.globalCompositeOperation="copy",this._ctx.fillStyle=this._options.bg,this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height),this._ctx.globalCompositeOperation=Q},X.eventToPosition=function(Q,Z){var V=this._ctx.canvas,z=V.getBoundingClientRect();if(Q-=z.left,Z-=z.top,Q*=V.width/z.width,Z*=V.height/z.height,Q<0||Z<0||Q>=V.width||Z>=V.height)return[-1,-1];return this._normalizedEventToPosition(Q,Z)},U}($);function j(B,U){return(B%U+U)%U}function F(B,U,X){if(U===void 0)U=0;if(X===void 0)X=1;if(B<U)return U;if(B>X)return X;return B}function b(B){return B.charAt(0).toUpperCase()+B.substring(1)}function C(B){for(var U=arguments.length,X=Array(U>1?U-1:0),q=1;q<U;q++)X[q-1]=arguments[q];var Q=C.map,Z=function(z,Y,H,W){if(B.charAt(W-1)=="%")return z.substring(1);if(!X.length)return z;var L=X[0],R=Y||H,v=R.split(","),P=v.shift()||"",M=Q[P.toLowerCase()];if(!M)return z;L=X.shift();var k=L[M].apply(L,v),N=P.charAt(0);if(N!=N.toLowerCase())k=b(k);return k};return B.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi,Z)}C.map={s:"toString"};var O=Object.freeze({__proto__:null,mod:j,clamp:F,capitalize:b,format:C}),T=function(B){V_(U,B);function U(){var q=B.call(this)||this;return q._spacingX=0,q._spacingY=0,q._hexSize=0,q}var X=U.prototype;return X.draw=function(Q,Z){var V=Q[0],z=Q[1],Y=Q[2],H=Q[3],W=Q[4],L=[(V+1)*this._spacingX,z*this._spacingY+this._hexSize];if(this._options.transpose)L.reverse();if(Z)this._ctx.fillStyle=W,this._fill(L[0],L[1]);if(!Y)return;this._ctx.fillStyle=H;var R=[].concat(Y);for(var v=0;v<R.length;v++)this._ctx.fillText(R[v],L[0],Math.ceil(L[1]))},X.computeSize=function(Q,Z){if(this._options.transpose)Q+=Z,Z=Q-Z,Q-=Z;var V=Math.floor(Q/this._spacingX)-1,z=Math.floor((Z-2*this._hexSize)/this._spacingY+1);return[V,z]},X.computeFontSize=function(Q,Z){if(this._options.transpose)Q+=Z,Z=Q-Z,Q-=Z;var V=2*Q/((this._options.width+1)*Math.sqrt(3))-1,z=Z/(2+1.5*(this._options.height-1)),Y=Math.min(V,z),H=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var W=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=H;var L=W/100;Y=Math.floor(Y)+1;var R=2*Y/(this._options.spacing*(1+L/Math.sqrt(3)));return Math.ceil(R)-1},X._normalizedEventToPosition=function(Q,Z){var V;if(this._options.transpose)Q+=Z,Z=Q-Z,Q-=Z,V=this._ctx.canvas.width;else V=this._ctx.canvas.height;var z=V/this._options.height;if(Z=Math.floor(Z/z),j(Z,2))Q-=this._spacingX,Q=1+2*Math.floor(Q/(2*this._spacingX));else Q=2*Math.floor(Q/(2*this._spacingX));return[Q,Z]},X._fill=function(Q,Z){var V=this._hexSize,z=this._options.border,Y=this._ctx;if(Y.beginPath(),this._options.transpose)Y.moveTo(Q-V+z,Z),Y.lineTo(Q-V/2+z,Z+this._spacingX-z),Y.lineTo(Q+V/2-z,Z+this._spacingX-z),Y.lineTo(Q+V-z,Z),Y.lineTo(Q+V/2-z,Z-this._spacingX+z),Y.lineTo(Q-V/2+z,Z-this._spacingX+z),Y.lineTo(Q-V+z,Z);else Y.moveTo(Q,Z-V+z),Y.lineTo(Q+this._spacingX-z,Z-V/2+z),Y.lineTo(Q+this._spacingX-z,Z+V/2-z),Y.lineTo(Q,Z+V-z),Y.lineTo(Q-this._spacingX+z,Z+V/2-z),Y.lineTo(Q-this._spacingX+z,Z-V/2+z),Y.lineTo(Q,Z-V+z);Y.fill()},X._updateSize=function(){var Q=this._options,Z=Math.ceil(this._ctx.measureText("W").width);this._hexSize=Math.floor(Q.spacing*(Q.fontSize+Z/Math.sqrt(3))/2),this._spacingX=this._hexSize*Math.sqrt(3)/2,this._spacingY=this._hexSize*1.5;var V,z;if(Q.transpose)V="height",z="width";else V="width",z="height";this._ctx.canvas[V]=Math.ceil((Q.width+1)*this._spacingX),this._ctx.canvas[z]=Math.ceil((Q.height-1)*this._spacingY+2*this._hexSize)},U}(G),S=function(B){V_(U,B);function U(){var q=B.call(this)||this;return q._spacingX=0,q._spacingY=0,q._canvasCache={},q}var X=U.prototype;return X.setOptions=function(Q){B.prototype.setOptions.call(this,Q),this._canvasCache={}},X.draw=function(Q,Z){if(U.cache)this._drawWithCache(Q);else this._drawNoCache(Q,Z)},X._drawWithCache=function(Q){var Z=Q[0],V=Q[1],z=Q[2],Y=Q[3],H=Q[4],W=""+z+Y+H,L;if(W in this._canvasCache)L=this._canvasCache[W];else{var R=this._options.border;L=document.createElement("canvas");var v=L.getContext("2d");if(L.width=this._spacingX,L.height=this._spacingY,v.fillStyle=H,v.fillRect(R,R,L.width-R,L.height-R),z){v.fillStyle=Y,v.font=this._ctx.font,v.textAlign="center",v.textBaseline="middle";var P=[].concat(z);for(var M=0;M<P.length;M++)v.fillText(P[M],this._spacingX/2,Math.ceil(this._spacingY/2))}this._canvasCache[W]=L}this._ctx.drawImage(L,Z*this._spacingX,V*this._spacingY)},X._drawNoCache=function(Q,Z){var V=Q[0],z=Q[1],Y=Q[2],H=Q[3],W=Q[4];if(Z){var L=this._options.border;this._ctx.fillStyle=W,this._ctx.fillRect(V*this._spacingX+L,z*this._spacingY+L,this._spacingX-L,this._spacingY-L)}if(!Y)return;this._ctx.fillStyle=H;var R=[].concat(Y);for(var v=0;v<R.length;v++)this._ctx.fillText(R[v],(V+0.5)*this._spacingX,Math.ceil((z+0.5)*this._spacingY))},X.computeSize=function(Q,Z){var V=Math.floor(Q/this._spacingX),z=Math.floor(Z/this._spacingY);return[V,z]},X.computeFontSize=function(Q,Z){var V=Math.floor(Q/this._options.width),z=Math.floor(Z/this._options.height),Y=this._ctx.font;this._ctx.font="100px "+this._options.fontFamily;var H=Math.ceil(this._ctx.measureText("W").width);this._ctx.font=Y;var W=H/100,L=W*z/V;if(L>1)z=Math.floor(z/L);return Math.floor(z/this._options.spacing)},X._normalizedEventToPosition=function(Q,Z){return[Math.floor(Q/this._spacingX),Math.floor(Z/this._spacingY)]},X._updateSize=function(){var Q=this._options,Z=Math.ceil(this._ctx.measureText("W").width);if(this._spacingX=Math.ceil(Q.spacing*Z),this._spacingY=Math.ceil(Q.spacing*Q.fontSize),Q.forceSquareRatio)this._spacingX=this._spacingY=Math.max(this._spacingX,this._spacingY);this._ctx.canvas.width=Q.width*this._spacingX,this._ctx.canvas.height=Q.height*this._spacingY},U}(G);S.cache=!1;var I=function(B){V_(U,B);function U(){var q=B.call(this)||this;return q._colorCanvas=document.createElement("canvas"),q}var X=U.prototype;return X.draw=function(Q,Z){var V=Q[0],z=Q[1],Y=Q[2],H=Q[3],W=Q[4],L=this._options.tileWidth,R=this._options.tileHeight;if(Z)if(this._options.tileColorize)this._ctx.clearRect(V*L,z*R,L,R);else this._ctx.fillStyle=W,this._ctx.fillRect(V*L,z*R,L,R);if(!Y)return;var v=[].concat(Y),P=[].concat(H),M=[].concat(W);for(var k=0;k<v.length;k++){var N=this._options.tileMap[v[k]];if(!N)throw Error('Char "'+v[k]+'" not found in tileMap');if(this._options.tileColorize){var x=this._colorCanvas,l=x.getContext("2d");l.globalCompositeOperation="source-over",l.clearRect(0,0,L,R);var d=P[k],i=M[k];if(l.drawImage(this._options.tileSet,N[0],N[1],L,R,0,0,L,R),d!="transparent")l.fillStyle=d,l.globalCompositeOperation="source-atop",l.fillRect(0,0,L,R);if(i!="transparent")l.fillStyle=i,l.globalCompositeOperation="destination-over",l.fillRect(0,0,L,R);this._ctx.drawImage(x,V*L,z*R,L,R)}else this._ctx.drawImage(this._options.tileSet,N[0],N[1],L,R,V*L,z*R,L,R)}},X.computeSize=function(Q,Z){var V=Math.floor(Q/this._options.tileWidth),z=Math.floor(Z/this._options.tileHeight);return[V,z]},X.computeFontSize=function(){throw Error("Tile backend does not understand font size")},X._normalizedEventToPosition=function(Q,Z){return[Math.floor(Q/this._options.tileWidth),Math.floor(Z/this._options.tileHeight)]},X._updateSize=function(){var Q=this._options;this._ctx.canvas.width=Q.width*Q.tileWidth,this._ctx.canvas.height=Q.height*Q.tileHeight,this._colorCanvas.width=Q.tileWidth,this._colorCanvas.height=Q.tileHeight},U}(G);function p(B){var U,X;if(B in f)U=f[B];else{if(B.charAt(0)=="#"){var q=B.match(/[0-9a-f]/gi)||[],Q=q.map(function(V){return parseInt(V,16)});if(Q.length==3)U=Q.map(function(V){return V*17});else{for(var Z=0;Z<3;Z++)Q[Z+1]+=16*Q[Z],Q.splice(Z,1);U=Q}}else if(X=B.match(/rgb\(([0-9, ]+)\)/i))U=X[1].split(/\s*,\s*/).map(function(V){return parseInt(V)});else U=[0,0,0];f[B]=U}return U.slice()}function t(B){var U=B.slice();for(var X=arguments.length,q=Array(X>1?X-1:0),Q=1;Q<X;Q++)q[Q-1]=arguments[Q];for(var Z=0;Z<3;Z++)for(var V=0;V<q.length;V++)U[Z]+=q[V][Z];return U}function r(B){for(var U=arguments.length,X=Array(U>1?U-1:0),q=1;q<U;q++)X[q-1]=arguments[q];for(var Q=0;Q<3;Q++)for(var Z=0;Z<X.length;Z++)B[Q]+=X[Z][Q];return B}function J_(B){var U=B.slice();for(var X=arguments.length,q=Array(X>1?X-1:0),Q=1;Q<X;Q++)q[Q-1]=arguments[Q];for(var Z=0;Z<3;Z++){for(var V=0;V<q.length;V++)U[Z]*=q[V][Z]/255;U[Z]=Math.round(U[Z])}return U}function Z_(B){for(var U=arguments.length,X=Array(U>1?U-1:0),q=1;q<U;q++)X[q-1]=arguments[q];for(var Q=0;Q<3;Q++){for(var Z=0;Z<X.length;Z++)B[Q]*=X[Z][Q]/255;B[Q]=Math.round(B[Q])}return B}function U_(B,U,X){if(X===void 0)X=0.5;var q=B.slice();for(var Q=0;Q<3;Q++)q[Q]=Math.round(q[Q]+X*(U[Q]-B[Q]));return q}var X_=U_;function A(B,U,X){if(X===void 0)X=0.5;var q=c(B),Q=c(U);for(var Z=0;Z<3;Z++)q[Z]+=X*(Q[Z]-q[Z]);return a(q)}var h=A;function m(B,U){if(!(U instanceof Array))U=Math.round(K.getNormal(0,U));var X=B.slice();for(var q=0;q<3;q++)X[q]+=U instanceof Array?Math.round(K.getNormal(0,U[q])):U;return X}function c(B){var U=B[0]/255,X=B[1]/255,q=B[2]/255,Q=Math.max(U,X,q),Z=Math.min(U,X,q),V=0,z,Y=(Q+Z)/2;if(Q==Z)z=0;else{var H=Q-Z;switch(z=Y>0.5?H/(2-Q-Z):H/(Q+Z),Q){case U:V=(X-q)/H+(X<q?6:0);break;case X:V=(q-U)/H+2;break;case q:V=(U-X)/H+4;break}V/=6}return[V,z,Y]}function o(B,U,X){if(X<0)X+=1;if(X>1)X-=1;if(X<0.16666666666666666)return B+(U-B)*6*X;if(X<0.5)return U;if(X<0.6666666666666666)return B+(U-B)*(0.6666666666666666-X)*6;return B}function a(B){var U=B[2];if(B[1]==0)return U=Math.round(U*255),[U,U,U];else{var X=B[1],q=U<0.5?U*(1+X):U+X-U*X,Q=2*U-q,Z=o(Q,q,B[0]+0.3333333333333333),V=o(Q,q,B[0]),z=o(Q,q,B[0]-0.3333333333333333);return[Math.round(Z*255),Math.round(V*255),Math.round(z*255)]}}function u(B){var U=B.map(function(X){return F(X,0,255)});return"rgb("+U.join(",")+")"}function E(B){var U=B.map(function(X){return F(X,0,255).toString(16).padStart(2,"0")});return"#"+U.join("")}var f={black:[0,0,0],navy:[0,0,128],darkblue:[0,0,139],mediumblue:[0,0,205],blue:[0,0,255],darkgreen:[0,100,0],green:[0,128,0],teal:[0,128,128],darkcyan:[0,139,139],deepskyblue:[0,191,255],darkturquoise:[0,206,209],mediumspringgreen:[0,250,154],lime:[0,255,0],springgreen:[0,255,127],aqua:[0,255,255],cyan:[0,255,255],midnightblue:[25,25,112],dodgerblue:[30,144,255],forestgreen:[34,139,34],seagreen:[46,139,87],darkslategray:[47,79,79],darkslategrey:[47,79,79],limegreen:[50,205,50],mediumseagreen:[60,179,113],turquoise:[64,224,208],royalblue:[65,105,225],steelblue:[70,130,180],darkslateblue:[72,61,139],mediumturquoise:[72,209,204],indigo:[75,0,130],darkolivegreen:[85,107,47],cadetblue:[95,158,160],cornflowerblue:[100,149,237],mediumaquamarine:[102,205,170],dimgray:[105,105,105],dimgrey:[105,105,105],slateblue:[106,90,205],olivedrab:[107,142,35],slategray:[112,128,144],slategrey:[112,128,144],lightslategray:[119,136,153],lightslategrey:[119,136,153],mediumslateblue:[123,104,238],lawngreen:[124,252,0],chartreuse:[127,255,0],aquamarine:[127,255,212],maroon:[128,0,0],purple:[128,0,128],olive:[128,128,0],gray:[128,128,128],grey:[128,128,128],skyblue:[135,206,235],lightskyblue:[135,206,250],blueviolet:[138,43,226],darkred:[139,0,0],darkmagenta:[139,0,139],saddlebrown:[139,69,19],darkseagreen:[143,188,143],lightgreen:[144,238,144],mediumpurple:[147,112,216],darkviolet:[148,0,211],palegreen:[152,251,152],darkorchid:[153,50,204],yellowgreen:[154,205,50],sienna:[160,82,45],brown:[165,42,42],darkgray:[169,169,169],darkgrey:[169,169,169],lightblue:[173,216,230],greenyellow:[173,255,47],paleturquoise:[175,238,238],lightsteelblue:[176,196,222],powderblue:[176,224,230],firebrick:[178,34,34],darkgoldenrod:[184,134,11],mediumorchid:[186,85,211],rosybrown:[188,143,143],darkkhaki:[189,183,107],silver:[192,192,192],mediumvioletred:[199,21,133],indianred:[205,92,92],peru:[205,133,63],chocolate:[210,105,30],tan:[210,180,140],lightgray:[211,211,211],lightgrey:[211,211,211],palevioletred:[216,112,147],thistle:[216,191,216],orchid:[218,112,214],goldenrod:[218,165,32],crimson:[220,20,60],gainsboro:[220,220,220],plum:[221,160,221],burlywood:[222,184,135],lightcyan:[224,255,255],lavender:[230,230,250],darksalmon:[233,150,122],violet:[238,130,238],palegoldenrod:[238,232,170],lightcoral:[240,128,128],khaki:[240,230,140],aliceblue:[240,248,255],honeydew:[240,255,240],azure:[240,255,255],sandybrown:[244,164,96],wheat:[245,222,179],beige:[245,245,220],whitesmoke:[245,245,245],mintcream:[245,255,250],ghostwhite:[248,248,255],salmon:[250,128,114],antiquewhite:[250,235,215],linen:[250,240,230],lightgoldenrodyellow:[250,250,210],oldlace:[253,245,230],red:[255,0,0],fuchsia:[255,0,255],magenta:[255,0,255],deeppink:[255,20,147],orangered:[255,69,0],tomato:[255,99,71],hotpink:[255,105,180],coral:[255,127,80],darkorange:[255,140,0],lightsalmon:[255,160,122],orange:[255,165,0],lightpink:[255,182,193],pink:[255,192,203],gold:[255,215,0],peachpuff:[255,218,185],navajowhite:[255,222,173],moccasin:[255,228,181],bisque:[255,228,196],mistyrose:[255,228,225],blanchedalmond:[255,235,205],papayawhip:[255,239,213],lavenderblush:[255,240,245],seashell:[255,245,238],cornsilk:[255,248,220],lemonchiffon:[255,250,205],floralwhite:[255,250,240],snow:[255,250,250],yellow:[255,255,0],lightyellow:[255,255,224],ivory:[255,255,240],white:[255,255,255]},n=Object.freeze({__proto__:null,fromString:p,add:t,add_:r,multiply:J_,multiply_:Z_,interpolate:U_,lerp:X_,interpolateHSL:A,lerpHSL:h,randomize:m,rgb2hsl:c,hsl2rgb:a,toRGB:u,toHex:E}),e=function(B){V_(U,B);function U(){var q=B.call(this)||this;q._uniforms={};try{q._gl=q._initWebGL()}catch(Q){if(typeof Q==="string")alert(Q);else if(Q instanceof Error)alert(Q.message)}return q}U.isSupported=function(){return!!document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0})};var X=U.prototype;return X.schedule=function(Q){requestAnimationFrame(Q)},X.getContainer=function(){return this._gl.canvas},X.setOptions=function(Q){var Z=this;B.prototype.setOptions.call(this,Q),this._updateSize();var V=this._options.tileSet;if(V&&"complete"in V&&!V.complete)V.addEventListener("load",function(){return Z._updateTexture(V)});else this._updateTexture(V)},X.draw=function(Q,Z){var V=this._gl,z=this._options,Y=Q[0],H=Q[1],W=Q[2],L=Q[3],R=Q[4],v=V.canvas.height-(H+1)*z.tileHeight;if(V.scissor(Y*z.tileWidth,v,z.tileWidth,z.tileHeight),Z){if(z.tileColorize)V.clearColor(0,0,0,0);else V.clearColor.apply(V,Y1(R));V.clear(V.COLOR_BUFFER_BIT)}if(!W)return;var P=[].concat(W),M=[].concat(R),k=[].concat(L);V.uniform2fv(this._uniforms.targetPosRel,[Y,H]);for(var N=0;N<P.length;N++){var x=this._options.tileMap[P[N]];if(!x)throw Error('Char "'+P[N]+'" not found in tileMap');if(V.uniform1f(this._uniforms.colorize,z.tileColorize?1:0),V.uniform2fv(this._uniforms.tilesetPosAbs,x),z.tileColorize)V.uniform4fv(this._uniforms.tint,Y1(k[N])),V.uniform4fv(this._uniforms.bg,Y1(M[N]));V.drawArrays(V.TRIANGLE_STRIP,0,4)}},X.clear=function(){var Q=this._gl;Q.clearColor.apply(Q,Y1(this._options.bg)),Q.scissor(0,0,Q.canvas.width,Q.canvas.height),Q.clear(Q.COLOR_BUFFER_BIT)},X.computeSize=function(Q,Z){var V=Math.floor(Q/this._options.tileWidth),z=Math.floor(Z/this._options.tileHeight);return[V,z]},X.computeFontSize=function(){throw Error("Tile backend does not understand font size")},X.eventToPosition=function(Q,Z){var V=this._gl.canvas,z=V.getBoundingClientRect();if(Q-=z.left,Z-=z.top,Q*=V.width/z.width,Z*=V.height/z.height,Q<0||Z<0||Q>=V.width||Z>=V.height)return[-1,-1];return this._normalizedEventToPosition(Q,Z)},X._initWebGL=function(){var Q=this,Z=document.createElement("canvas").getContext("webgl2",{preserveDrawingBuffer:!0});window.gl=Z;var V=I_(Z,R_,Y_);return Z.useProgram(V),H_(Z),K_.forEach(function(z){return Q._uniforms[z]=Z.getUniformLocation(V,z)}),this._program=V,Z.enable(Z.BLEND),Z.blendFuncSeparate(Z.SRC_ALPHA,Z.ONE_MINUS_SRC_ALPHA,Z.ONE,Z.ONE_MINUS_SRC_ALPHA),Z.enable(Z.SCISSOR_TEST),Z},X._normalizedEventToPosition=function(Q,Z){return[Math.floor(Q/this._options.tileWidth),Math.floor(Z/this._options.tileHeight)]},X._updateSize=function(){var Q=this._gl,Z=this._options,V=[Z.width*Z.tileWidth,Z.height*Z.tileHeight];Q.canvas.width=V[0],Q.canvas.height=V[1],Q.viewport(0,0,V[0],V[1]),Q.uniform2fv(this._uniforms.tileSize,[Z.tileWidth,Z.tileHeight]),Q.uniform2fv(this._uniforms.targetSize,V)},X._updateTexture=function(Q){M1(this._gl,Q)},U}($),K_=["targetPosRel","tilesetPosAbs","tileSize","targetSize","colorize","bg","tint"],R_=`
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
}`.trim(),Y_=`
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
}`.trim();function I_(B,U,X){var q=B.createShader(B.VERTEX_SHADER);if(B.shaderSource(q,U),B.compileShader(q),!B.getShaderParameter(q,B.COMPILE_STATUS))throw Error(B.getShaderInfoLog(q)||"");var Q=B.createShader(B.FRAGMENT_SHADER);if(B.shaderSource(Q,X),B.compileShader(Q),!B.getShaderParameter(Q,B.COMPILE_STATUS))throw Error(B.getShaderInfoLog(Q)||"");var Z=B.createProgram();if(B.attachShader(Z,q),B.attachShader(Z,Q),B.linkProgram(Z),!B.getProgramParameter(Z,B.LINK_STATUS))throw Error(B.getProgramInfoLog(Z)||"");return Z}function H_(B){var U=new Float32Array([0,0,1,0,0,1,1,1]),X=B.createBuffer();B.bindBuffer(B.ARRAY_BUFFER,X),B.bufferData(B.ARRAY_BUFFER,U,B.STATIC_DRAW),B.enableVertexAttribArray(0),B.vertexAttribPointer(0,2,B.FLOAT,!1,0,0)}function M1(B,U){var X=B.createTexture();return B.bindTexture(B.TEXTURE_2D,X),B.texParameteri(B.TEXTURE_2D,B.TEXTURE_MAG_FILTER,B.NEAREST),B.texParameteri(B.TEXTURE_2D,B.TEXTURE_MIN_FILTER,B.NEAREST),B.texParameteri(B.TEXTURE_2D,B.TEXTURE_WRAP_S,B.REPEAT),B.texParameteri(B.TEXTURE_2D,B.TEXTURE_WRAP_T,B.REPEAT),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,0),B.texImage2D(B.TEXTURE_2D,0,B.RGBA,B.RGBA,B.UNSIGNED_BYTE,U),X}var d_={};function Y1(B){if(!(B in d_)){var U;if(B=="transparent")U=[0,0,0,0];else if(B.indexOf("rgba")>-1){U=(B.match(/[\d.]+/g)||[]).map(Number);for(var X=0;X<3;X++)U[X]=U[X]/255}else U=p(B).map(function(q){return q/255}),U.push(1);d_[B]=U}return d_[B]}function y6(B){return"\x1B[0;48;5;"+F0(B)+"m\x1B[2J"}function r6(B,U){return"\x1B[0;38;5;"+F0(B)+";48;5;"+F0(U)+"m"}function n6(B,U){return"\x1B["+(U+1)+";"+(B+1)+"H"}function F0(B){var U=256,X=6,q=X/U,Q=p(B),Z=Math.floor(Q[0]*q),V=Math.floor(Q[1]*q),z=Math.floor(Q[2]*q);return Z*36+V*6+z*1+16}var Zw=function(B){V_(U,B);function U(){var q=B.call(this)||this;return q._offset=[0,0],q._cursor=[-1,-1],q._lastColor="",q}var X=U.prototype;return X.schedule=function(Q){setTimeout(Q,16.666666666666668)},X.setOptions=function(Q){B.prototype.setOptions.call(this,Q);var Z=[Q.width,Q.height],V=this.computeSize();this._offset=V.map(function(z,Y){return Math.floor((z-Z[Y])/2)})},X.clear=function(){process.stdout.write(y6(this._options.bg))},X.draw=function(Q,Z){var V=Q[0],z=Q[1],Y=Q[2],H=Q[3],W=Q[4],L=this._offset[0]+V,R=this._offset[1]+z,v=this.computeSize();if(L<0||L>=v[0])return;if(R<0||R>=v[1])return;if(L!==this._cursor[0]||R!==this._cursor[1])process.stdout.write(n6(L,R)),this._cursor[0]=L,this._cursor[1]=R;if(Z){if(!Y)Y=" "}if(!Y)return;var P=r6(H,W);if(P!==this._lastColor)process.stdout.write(P),this._lastColor=P;if(Y!="\t"){var M=[].concat(Y);process.stdout.write(M[0])}if(this._cursor[0]++,this._cursor[0]>=v[0])this._cursor[0]=0,this._cursor[1]++},X.computeFontSize=function(){throw Error("Terminal backend has no notion of font size")},X.eventToPosition=function(Q,Z){return[Q,Z]},X.computeSize=function(){return[process.stdout.columns,process.stdout.rows]},U}($),o6=/%([bc]){([^}]*)}/g,y_=0,_1=1,b0=2,v0=3;function s6(B,U){var X={width:0,height:1},q=P0(B,U),Q=0;for(var Z=0;Z<q.length;Z++){var V=q[Z];switch(V.type){case y_:Q+=V.value.length;break;case _1:X.height++,X.width=Math.max(X.width,Q),Q=0;break}}return X.width=Math.max(X.width,Q),X}function P0(B,U){var X=[],q=0;B.replace(o6,function(Z,V,z,Y){var H=B.substring(q,Y);if(H.length)X.push({type:y_,value:H});return X.push({type:V=="c"?b0:v0,value:z.trim()}),q=Y+Z.length,""});var Q=B.substring(q);if(Q.length)X.push({type:y_,value:Q});return a6(X,U)}function a6(B,U){if(!U)U=1/0;var X=0,q=0,Q=-1;while(X<B.length){var Z=B[X];if(Z.type==_1)q=0,Q=-1;if(Z.type!=y_){X++;continue}while(q==0&&Z.value.charAt(0)==" ")Z.value=Z.value.substring(1);var V=Z.value.indexOf(`
`);if(V!=-1){Z.value=r1(B,X,V,!0);var z=Z.value.split("");while(z.length&&z[z.length-1]==" ")z.pop();Z.value=z.join("")}if(!Z.value.length){B.splice(X,1);continue}if(q+Z.value.length>U){var Y=-1;while(!0){var H=Z.value.indexOf(" ",Y+1);if(H==-1)break;if(q+H>U)break;Y=H}if(Y!=-1)Z.value=r1(B,X,Y,!0);else if(Q!=-1){var W=B[Q],L=W.value.lastIndexOf(" ");W.value=r1(B,Q,L,!0),X=Q}else Z.value=r1(B,X,U-q,!1)}else if(q+=Z.value.length,Z.value.indexOf(" ")!=-1)Q=X;X++}B.push({type:_1});var R=null;for(var v=0;v<B.length;v++){var P=B[v];switch(P.type){case y_:R=P;break;case _1:if(R){var M=R.value.split("");while(M.length&&M[M.length-1]==" ")M.pop();R.value=M.join("")}R=null;break}}return B.pop(),B}function r1(B,U,X,q){var Q={type:_1},Z={type:y_,value:B[U].value.substring(X+(q?1:0))};return B.splice(U+1,0,Q,Z),B[U].value.substring(0,X)}var i6=Object.freeze({__proto__:null,TYPE_TEXT:y_,TYPE_NEWLINE:_1,TYPE_FG:b0,TYPE_BG:v0,measure:s6,tokenize:P0}),C0=80,M0=25,B_={4:[[0,-1],[1,0],[0,1],[-1,0]],8:[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],6:[[-1,-1],[1,-1],[2,0],[1,1],[-1,1],[-2,0]]},e6={VK_CANCEL:3,VK_HELP:6,VK_BACK_SPACE:8,VK_TAB:9,VK_CLEAR:12,VK_RETURN:13,VK_ENTER:14,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:18,VK_PAUSE:19,VK_CAPS_LOCK:20,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_PRINTSCREEN:44,VK_INSERT:45,VK_DELETE:46,VK_0:48,VK_1:49,VK_2:50,VK_3:51,VK_4:52,VK_5:53,VK_6:54,VK_7:55,VK_8:56,VK_9:57,VK_COLON:58,VK_SEMICOLON:59,VK_LESS_THAN:60,VK_EQUALS:61,VK_GREATER_THAN:62,VK_QUESTION_MARK:63,VK_AT:64,VK_A:65,VK_B:66,VK_C:67,VK_D:68,VK_E:69,VK_F:70,VK_G:71,VK_H:72,VK_I:73,VK_J:74,VK_K:75,VK_L:76,VK_M:77,VK_N:78,VK_O:79,VK_P:80,VK_Q:81,VK_R:82,VK_S:83,VK_T:84,VK_U:85,VK_V:86,VK_W:87,VK_X:88,VK_Y:89,VK_Z:90,VK_CONTEXT_MENU:93,VK_NUMPAD0:96,VK_NUMPAD1:97,VK_NUMPAD2:98,VK_NUMPAD3:99,VK_NUMPAD4:100,VK_NUMPAD5:101,VK_NUMPAD6:102,VK_NUMPAD7:103,VK_NUMPAD8:104,VK_NUMPAD9:105,VK_MULTIPLY:106,VK_ADD:107,VK_SEPARATOR:108,VK_SUBTRACT:109,VK_DECIMAL:110,VK_DIVIDE:111,VK_F1:112,VK_F2:113,VK_F3:114,VK_F4:115,VK_F5:116,VK_F6:117,VK_F7:118,VK_F8:119,VK_F9:120,VK_F10:121,VK_F11:122,VK_F12:123,VK_F13:124,VK_F14:125,VK_F15:126,VK_F16:127,VK_F17:128,VK_F18:129,VK_F19:130,VK_F20:131,VK_F21:132,VK_F22:133,VK_F23:134,VK_F24:135,VK_NUM_LOCK:144,VK_SCROLL_LOCK:145,VK_CIRCUMFLEX:160,VK_EXCLAMATION:161,VK_DOUBLE_QUOTE:162,VK_HASH:163,VK_DOLLAR:164,VK_PERCENT:165,VK_AMPERSAND:166,VK_UNDERSCORE:167,VK_OPEN_PAREN:168,VK_CLOSE_PAREN:169,VK_ASTERISK:170,VK_PLUS:171,VK_PIPE:172,VK_HYPHEN_MINUS:173,VK_OPEN_CURLY_BRACKET:174,VK_CLOSE_CURLY_BRACKET:175,VK_TILDE:176,VK_COMMA:188,VK_PERIOD:190,VK_SLASH:191,VK_BACK_QUOTE:192,VK_OPEN_BRACKET:219,VK_BACK_SLASH:220,VK_CLOSE_BRACKET:221,VK_QUOTE:222,VK_META:224,VK_ALTGR:225,VK_WIN:91,VK_KANA:21,VK_HANGUL:21,VK_EISU:22,VK_JUNJA:23,VK_FINAL:24,VK_HANJA:25,VK_KANJI:25,VK_CONVERT:28,VK_NONCONVERT:29,VK_ACCEPT:30,VK_MODECHANGE:31,VK_SELECT:41,VK_PRINT:42,VK_EXECUTE:43,VK_SLEEP:95},t6={hex:T,rect:S,tile:I,"tile-gl":e,term:Zw},_8={width:C0,height:M0,transpose:!1,layout:"rect",fontSize:15,spacing:1,border:0,forceSquareRatio:!1,fontFamily:"monospace",fontStyle:"",fg:"#ccc",bg:"#000",tileWidth:32,tileHeight:32,tileMap:{},tileSet:null,tileColorize:!1},U1=function(){function B(X){if(X===void 0)X={};this._data={},this._dirty=!1,this._options={},X=Object.assign({},_8,X),this.setOptions(X),this.DEBUG=this.DEBUG.bind(this),this._tick=this._tick.bind(this),this._backend.schedule(this._tick)}var U=B.prototype;return U.DEBUG=function(q,Q,Z){var V=[this._options.bg,this._options.fg];this.draw(q,Q,null,null,V[Z%V.length])},U.clear=function(){this._data={},this._dirty=!0},U.setOptions=function(q){if(Object.assign(this._options,q),q.width||q.height||q.fontSize||q.fontFamily||q.spacing||q.layout){if(q.layout){var Q=t6[q.layout];this._backend=new Q}this._backend.setOptions(this._options),this._dirty=!0}return this},U.getOptions=function(){return this._options},U.getContainer=function(){return this._backend.getContainer()},U.computeSize=function(q,Q){return this._backend.computeSize(q,Q)},U.computeFontSize=function(q,Q){return this._backend.computeFontSize(q,Q)},U.computeTileSize=function(q,Q){var Z=Math.floor(q/this._options.width),V=Math.floor(Q/this._options.height);return[Z,V]},U.eventToPosition=function(q){var Q,Z;if("touches"in q)Q=q.touches[0].clientX,Z=q.touches[0].clientY;else Q=q.clientX,Z=q.clientY;return this._backend.eventToPosition(Q,Z)},U.draw=function(q,Q,Z,V,z){if(!V)V=this._options.fg;if(!z)z=this._options.bg;var Y=q+","+Q;if(this._data[Y]=[q,Q,Z,V,z],this._dirty===!0)return;if(!this._dirty)this._dirty={};this._dirty[Y]=!0},U.drawOver=function(q,Q,Z,V,z){var Y=q+","+Q,H=this._data[Y];if(H)H[2]=Z||H[2],H[3]=V||H[3],H[4]=z||H[4];else this.draw(q,Q,Z,V,z)},U.drawText=function(q,Q,Z,V){var z=null,Y=null,H=q,W=Q,L=1;if(!V)V=this._options.width-q;var R=P0(Z,V);while(R.length){var v=R.shift();switch(v.type){case y_:var P=!1,M=!1,k=!1,N=!1;for(var x=0;x<v.value.length;x++){var l=v.value.charCodeAt(x),d=v.value.charAt(x);if(this._options.layout==="term"){var i=l>>8,__=i===17||i>=46&&i<=159||i>=172&&i<=215||l>=43360&&l<=43391;if(__){this.draw(H+0,W,d,z,Y),this.draw(H+1,W,"\t",z,Y),H+=2;continue}}if(k=l>65280&&l<65377||l>65500&&l<65512||l>65518,P=d.charCodeAt(0)==32||d.charCodeAt(0)==12288,N&&!k&&!P)H++;if(k&&!M)H++;this.draw(H++,W,d,z,Y),M=P,N=k}break;case b0:z=v.value||null;break;case v0:Y=v.value||null;break;case _1:H=q,W++,L++;break}}return L},U._tick=function(){if(this._backend.schedule(this._tick),!this._dirty)return;if(this._dirty===!0){this._backend.clear();for(var q in this._data)this._draw(q,!1)}else for(var Q in this._dirty)this._draw(Q,!0);this._dirty=!1},U._draw=function(q,Q){var Z=this._data[q];if(Z[4]!=this._options.bg)Q=!0;this._backend.draw(Z,Q)},B}();U1.Rect=S,U1.Hex=T,U1.Tile=I,U1.TileGL=e,U1.Term=Zw;var w8=function(){function B(X){this._options={words:!1,order:3,prior:0.001},Object.assign(this._options,X),this._boundary=String.fromCharCode(0),this._suffix=this._boundary,this._prefix=[];for(var q=0;q<this._options.order;q++)this._prefix.push(this._boundary);this._priorValues={},this._priorValues[this._boundary]=this._options.prior,this._data={}}var U=B.prototype;return U.clear=function(){this._data={},this._priorValues={}},U.generate=function(){var q=[this._sample(this._prefix)];while(q[q.length-1]!=this._boundary)q.push(this._sample(q));return this._join(q.slice(0,-1))},U.observe=function(q){var Q=this._split(q);for(var Z=0;Z<Q.length;Z++)this._priorValues[Q[Z]]=this._options.prior;Q=this._prefix.concat(Q).concat(this._suffix);for(var V=this._options.order;V<Q.length;V++){var z=Q.slice(V-this._options.order,V),Y=Q[V];for(var H=0;H<z.length;H++){var W=z.slice(H);this._observeEvent(W,Y)}}},U.getStats=function(){var q=[],Q=Object.keys(this._priorValues).length;Q--,q.push("distinct samples: "+Q);var Z=Object.keys(this._data).length,V=0;for(var z in this._data)V+=Object.keys(this._data[z]).length;return q.push("dictionary size (contexts): "+Z),q.push("dictionary size (events): "+V),q.join(", ")},U._split=function(q){return q.split(this._options.words?/\s+/:"")},U._join=function(q){return q.join(this._options.words?" ":"")},U._observeEvent=function(q,Q){var Z=this._join(q);if(!(Z in this._data))this._data[Z]={};var V=this._data[Z];if(!(Q in V))V[Q]=0;V[Q]++},U._sample=function(q){q=this._backoff(q);var Q=this._join(q),Z=this._data[Q],V={};if(this._options.prior){for(var z in this._priorValues)V[z]=this._priorValues[z];for(var Y in Z)V[Y]+=Z[Y]}else V=Z;return K.getWeightedValue(V)},U._backoff=function(q){if(q.length>this._options.order)q=q.slice(-this._options.order);else if(q.length<this._options.order)q=this._prefix.slice(0,this._options.order-q.length).concat(q);while(!(this._join(q)in this._data)&&q.length>0)q=q.slice(1);return q},B}(),Kw=function(){function B(){this.heap=[],this.timestamp=0}var U=B.prototype;return U.lessThan=function(q,Q){return q.key==Q.key?q.timestamp<Q.timestamp:q.key<Q.key},U.shift=function(q){this.heap=this.heap.map(function(Q){var{key:Z,value:V,timestamp:z}=Q;return{key:Z+q,value:V,timestamp:z}})},U.len=function(){return this.heap.length},U.push=function(q,Q){this.timestamp+=1;var Z=this.len();this.heap.push({value:q,timestamp:this.timestamp,key:Q}),this.updateUp(Z)},U.pop=function(){if(this.len()==0)throw Error("no element to pop");var q=this.heap[0];if(this.len()>1)this.heap[0]=this.heap.pop(),this.updateDown(0);else this.heap.pop();return q},U.find=function(q){for(var Q=0;Q<this.len();Q++)if(q==this.heap[Q].value)return this.heap[Q];return null},U.remove=function(q){var Q=null;for(var Z=0;Z<this.len();Z++)if(q==this.heap[Z].value)Q=Z;if(Q===null)return!1;if(this.len()>1){var V=this.heap.pop();if(V.value!=q)this.heap[Q]=V,this.updateDown(Q);return!0}else this.heap.pop();return!0},U.parentNode=function(q){return Math.floor((q-1)/2)},U.leftChildNode=function(q){return 2*q+1},U.rightChildNode=function(q){return 2*q+2},U.existNode=function(q){return q>=0&&q<this.heap.length},U.swap=function(q,Q){var Z=this.heap[q];this.heap[q]=this.heap[Q],this.heap[Q]=Z},U.minNode=function(q){var Q=q.filter(this.existNode.bind(this)),Z=Q[0];for(var V=W7(Q),z;!(z=V()).done;){var Y=z.value;if(this.lessThan(this.heap[Y],this.heap[Z]))Z=Y}return Z},U.updateUp=function(q){if(q==0)return;var Q=this.parentNode(q);if(this.existNode(Q)&&this.lessThan(this.heap[q],this.heap[Q]))this.swap(q,Q),this.updateUp(Q)},U.updateDown=function(q){var Q=this.leftChildNode(q),Z=this.rightChildNode(q);if(!this.existNode(Q))return;var V=this.minNode([q,Q,Z]);if(V!=q)this.swap(q,V),this.updateDown(V)},U.debugPrint=function(){console.log(this.heap)},B}(),Vw=function(){function B(){this._time=0,this._events=new Kw}var U=B.prototype;return U.getTime=function(){return this._time},U.clear=function(){return this._events=new Kw,this},U.add=function(q,Q){this._events.push(q,Q)},U.get=function(){if(!this._events.len())return null;var q=this._events.pop(),Q=q.key,Z=q.value;if(Q>0)this._time+=Q,this._events.shift(-Q);return Z},U.getEventTime=function(q){var Q=this._events.find(q);if(Q){var Z=Q.key;return Z}return},U.remove=function(q){return this._events.remove(q)},B}(),k0=function(){function B(){this._queue=new Vw,this._repeat=[],this._current=null}var U=B.prototype;return U.getTime=function(){return this._queue.getTime()},U.add=function(q,Q){if(Q)this._repeat.push(q);return this},U.getTimeOf=function(q){return this._queue.getEventTime(q)},U.clear=function(){return this._queue.clear(),this._repeat=[],this._current=null,this},U.remove=function(q){var Q=this._queue.remove(q),Z=this._repeat.indexOf(q);if(Z!=-1)this._repeat.splice(Z,1);if(this._current==q)this._current=null;return Q},U.next=function(){return this._current=this._queue.get(),this._current},B}(),Q8=function(B){V_(U,B);function U(){return B.apply(this,arguments)||this}var X=U.prototype;return X.add=function(Q,Z){return this._queue.add(Q,0),B.prototype.add.call(this,Q,Z)},X.next=function(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,0);return B.prototype.next.call(this)},U}(k0),J8=function(B){V_(U,B);function U(){return B.apply(this,arguments)||this}var X=U.prototype;return X.add=function(Q,Z,V){return this._queue.add(Q,V!==void 0?V:1/Q.getSpeed()),B.prototype.add.call(this,Q,Z)},X.next=function(){if(this._current&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,1/this._current.getSpeed());return B.prototype.next.call(this)},U}(k0),Z8=function(B){V_(U,B);function U(){var q=B.call(this)||this;return q._defaultDuration=1,q._duration=q._defaultDuration,q}var X=U.prototype;return X.add=function(Q,Z,V){return this._queue.add(Q,V||this._defaultDuration),B.prototype.add.call(this,Q,Z)},X.clear=function(){return this._duration=this._defaultDuration,B.prototype.clear.call(this)},X.remove=function(Q){if(Q==this._current)this._duration=this._defaultDuration;return B.prototype.remove.call(this,Q)},X.next=function(){if(this._current!==null&&this._repeat.indexOf(this._current)!=-1)this._queue.add(this._current,this._duration||this._defaultDuration),this._duration=this._defaultDuration;return B.prototype.next.call(this)},X.setDuration=function(Q){if(this._current)this._duration=Q;return this},U}(k0),K8={Simple:Q8,Speed:J8,Action:Z8},O0=function(){function B(X,q){if(q===void 0)q={};this._lightPasses=X,this._options=Object.assign({topology:8},q)}var U=B.prototype;return U._getCircle=function(q,Q,Z){var V=[],z,Y,H;switch(this._options.topology){case 4:Y=1,H=[0,1],z=[B_[8][7],B_[8][1],B_[8][3],B_[8][5]];break;case 6:z=B_[6],Y=1,H=[-1,1];break;case 8:z=B_[4],Y=2,H=[-1,1];break;default:throw Error("Incorrect topology for FOV computation")}var W=q+H[0]*Z,L=Q+H[1]*Z;for(var R=0;R<z.length;R++)for(var v=0;v<Z*Y;v++)V.push([W,L]),W+=z[R][0],L+=z[R][1];return V},B}(),V8=function(B){V_(U,B);function U(){return B.apply(this,arguments)||this}var X=U.prototype;return X.compute=function(Q,Z,V,z){if(z(Q,Z,0,1),!this._lightPasses(Q,Z))return;var Y=[],H,W,L,R,v;for(var P=1;P<=V;P++){var M=this._getCircle(Q,Z,P),k=360/M.length;for(var N=0;N<M.length;N++){if(L=M[N][0],R=M[N][1],H=k*(N-0.5),W=H+k,v=!this._lightPasses(L,R),this._visibleCoords(Math.floor(H),Math.ceil(W),v,Y))z(L,R,P,1);if(Y.length==2&&Y[0]==0&&Y[1]==360)return}}},X._visibleCoords=function(Q,Z,V,z){if(Q<0){var Y=this._visibleCoords(0,Z,V,z),H=this._visibleCoords(360+Q,360,V,z);return Y||H}var W=0;while(W<z.length&&z[W]<Q)W++;if(W==z.length){if(V)z.push(Q,Z);return!0}var L=0;if(W%2){while(W<z.length&&z[W]<Z)W++,L++;if(L==0)return!1;if(V)if(L%2)z.splice(W-L,L,Z);else z.splice(W-L,L);return!0}else{while(W<z.length&&z[W]<Z)W++,L++;if(Q==z[W-L]&&L==1)return!1;if(V)if(L%2)z.splice(W-L,L,Q);else z.splice(W-L,L,Q,Z);return!0}},U}(O0),q8=function(B){V_(U,B);function U(){return B.apply(this,arguments)||this}var X=U.prototype;return X.compute=function(Q,Z,V,z){if(z(Q,Z,0,1),!this._lightPasses(Q,Z))return;var Y=[],H,W,L,R,v,P;for(var M=1;M<=V;M++){var k=this._getCircle(Q,Z,M),N=k.length;for(var x=0;x<N;x++){if(H=k[x][0],W=k[x][1],R=[x?2*x-1:2*N-1,2*N],v=[2*x+1,2*N],L=!this._lightPasses(H,W),P=this._checkVisibility(R,v,L,Y),P)z(H,W,M,P);if(Y.length==2&&Y[0][0]==0&&Y[1][0]==Y[1][1])return}}},X._checkVisibility=function(Q,Z,V,z){if(Q[0]>Z[0]){var Y=this._checkVisibility(Q,[Q[1],Q[1]],V,z),H=this._checkVisibility([0,1],Z,V,z);return(Y+H)/2}var W=0,L=!1;while(W<z.length){var R=z[W],v=R[0]*Q[1]-Q[0]*R[1];if(v>=0){if(v==0&&!(W%2))L=!0;break}W++}var P=z.length,M=!1;while(P--){var k=z[P],N=Z[0]*k[1]-k[0]*Z[1];if(N>=0){if(N==0&&P%2)M=!0;break}}var x=!0;if(W==P&&(L||M))x=!1;else if(L&&M&&W+1==P&&P%2)x=!1;else if(W>P&&W%2)x=!1;if(!x)return 0;var l,d=P-W+1;if(d%2)if(W%2){var i=z[W];if(l=(Z[0]*i[1]-i[0]*Z[1])/(i[1]*Z[1]),V)z.splice(W,d,Z)}else{var __=z[P];if(l=(__[0]*Q[1]-Q[0]*__[1])/(Q[1]*__[1]),V)z.splice(W,d,Q)}else if(W%2){var q_=z[W],L_=z[P];if(l=(L_[0]*q_[1]-q_[0]*L_[1])/(q_[1]*L_[1]),V)z.splice(W,d)}else{if(V)z.splice(W,d,Q,Z);return 1}var T_=(Z[0]*Q[1]-Q[0]*Z[1])/(Q[1]*Z[1]);return l/T_},U}(O0),r_=[[-1,0,0,1],[0,-1,1,0],[0,-1,-1,0],[-1,0,0,-1],[1,0,0,-1],[0,1,-1,0],[0,1,1,0],[1,0,0,1]],z8=function(B){V_(U,B);function U(){return B.apply(this,arguments)||this}var X=U.prototype;return X.compute=function(Q,Z,V,z){z(Q,Z,0,1);for(var Y=0;Y<r_.length;Y++)this._renderOctant(Q,Z,r_[Y],V,z)},X.compute180=function(Q,Z,V,z,Y){Y(Q,Z,0,1);var H=(z-1+8)%8,W=(z-2+8)%8,L=(z+1+8)%8;this._renderOctant(Q,Z,r_[W],V,Y),this._renderOctant(Q,Z,r_[H],V,Y),this._renderOctant(Q,Z,r_[z],V,Y),this._renderOctant(Q,Z,r_[L],V,Y)},X.compute90=function(Q,Z,V,z,Y){Y(Q,Z,0,1);var H=(z-1+8)%8;this._renderOctant(Q,Z,r_[z],V,Y),this._renderOctant(Q,Z,r_[H],V,Y)},X._renderOctant=function(Q,Z,V,z,Y){this._castVisibility(Q,Z,1,1,0,z+1,V[0],V[1],V[2],V[3],Y)},X._castVisibility=function(Q,Z,V,z,Y,H,W,L,R,v,P){if(z<Y)return;for(var M=V;M<=H;M++){var k=-M-1,N=-M,x=!1,l=0;while(k<=0){k+=1;var d=Q+k*W+N*L,i=Z+k*R+N*v,__=(k-0.5)/(N+0.5),q_=(k+0.5)/(N-0.5);if(q_>z)continue;if(__<Y)break;if(k*k+N*N<H*H)P(d,i,M,1);if(!x){if(!this._lightPasses(d,i)&&M<H)x=!0,this._castVisibility(Q,Z,M+1,z,__,H,W,L,R,v,P),l=q_}else{if(!this._lightPasses(d,i)){l=q_;continue}x=!1,z=l}}if(x)break}},U}(O0),$8={DiscreteShadowcasting:V8,PreciseShadowcasting:q8,RecursiveShadowcasting:z8},w1=function(){function B(X,q){if(X===void 0)X=C0;if(q===void 0)q=M0;this._width=X,this._height=q}var U=B.prototype;return U._fillMap=function(q){var Q=[];for(var Z=0;Z<this._width;Z++){Q.push([]);for(var V=0;V<this._height;V++)Q[Z].push(q)}return Q},B}(),X8=function(B){V_(U,B);function U(){return B.apply(this,arguments)||this}var X=U.prototype;return X.create=function(Q){var Z=this._width-1,V=this._height-1;for(var z=0;z<=Z;z++)for(var Y=0;Y<=V;Y++){var H=z&&Y&&z<Z&&Y<V;Q(z,Y,H?0:1)}return this},U}(w1),qw=function(B){V_(U,B);function U(q,Q){var Z=B.call(this,q,Q)||this;return Z._rooms=[],Z._corridors=[],Z}var X=U.prototype;return X.getRooms=function(){return this._rooms},X.getCorridors=function(){return this._corridors},U}(w1),zw=function(){},n1=function(B){V_(U,B);function U(q,Q,Z,V,z,Y){var H=B.call(this)||this;if(H._x1=q,H._y1=Q,H._x2=Z,H._y2=V,H._doors={},z!==void 0&&Y!==void 0)H.addDoor(z,Y);return H}U.createRandomAt=function(Q,Z,V,z,Y){var H=Y.roomWidth[0],W=Y.roomWidth[1],L=K.getUniformInt(H,W);H=Y.roomHeight[0],W=Y.roomHeight[1];var R=K.getUniformInt(H,W);if(V==1){var v=Z-Math.floor(K.getUniform()*R);return new this(Q+1,v,Q+L,v+R-1,Q,Z)}if(V==-1){var P=Z-Math.floor(K.getUniform()*R);return new this(Q-L,P,Q-1,P+R-1,Q,Z)}if(z==1){var M=Q-Math.floor(K.getUniform()*L);return new this(M,Z+1,M+L-1,Z+R,Q,Z)}if(z==-1){var k=Q-Math.floor(K.getUniform()*L);return new this(k,Z-R,k+L-1,Z-1,Q,Z)}throw Error("dx or dy must be 1 or -1")},U.createRandomCenter=function(Q,Z,V){var z=V.roomWidth[0],Y=V.roomWidth[1],H=K.getUniformInt(z,Y);z=V.roomHeight[0],Y=V.roomHeight[1];var W=K.getUniformInt(z,Y),L=Q-Math.floor(K.getUniform()*H),R=Z-Math.floor(K.getUniform()*W),v=L+H-1,P=R+W-1;return new this(L,R,v,P)},U.createRandom=function(Q,Z,V){var z=V.roomWidth[0],Y=V.roomWidth[1],H=K.getUniformInt(z,Y);z=V.roomHeight[0],Y=V.roomHeight[1];var W=K.getUniformInt(z,Y),L=Q-H-1,R=Z-W-1,v=1+Math.floor(K.getUniform()*L),P=1+Math.floor(K.getUniform()*R),M=v+H-1,k=P+W-1;return new this(v,P,M,k)};var X=U.prototype;return X.addDoor=function(Q,Z){return this._doors[Q+","+Z]=1,this},X.getDoors=function(Q){for(var Z in this._doors){var V=Z.split(",");Q(parseInt(V[0]),parseInt(V[1]))}return this},X.clearDoors=function(){return this._doors={},this},X.addDoors=function(Q){var Z=this._x1-1,V=this._x2+1,z=this._y1-1,Y=this._y2+1;for(var H=Z;H<=V;H++)for(var W=z;W<=Y;W++){if(H!=Z&&H!=V&&W!=z&&W!=Y)continue;if(Q(H,W))continue;this.addDoor(H,W)}return this},X.debug=function(){console.log("room",this._x1,this._y1,this._x2,this._y2)},X.isValid=function(Q,Z){var V=this._x1-1,z=this._x2+1,Y=this._y1-1,H=this._y2+1;for(var W=V;W<=z;W++)for(var L=Y;L<=H;L++)if(W==V||W==z||L==Y||L==H){if(!Q(W,L))return!1}else if(!Z(W,L))return!1;return!0},X.create=function(Q){var Z=this._x1-1,V=this._x2+1,z=this._y1-1,Y=this._y2+1,H=0;for(var W=Z;W<=V;W++)for(var L=z;L<=Y;L++){if(W+","+L in this._doors)H=2;else if(W==Z||W==V||L==z||L==Y)H=1;else H=0;Q(W,L,H)}},X.getCenter=function(){return[Math.round((this._x1+this._x2)/2),Math.round((this._y1+this._y2)/2)]},X.getLeft=function(){return this._x1},X.getRight=function(){return this._x2},X.getTop=function(){return this._y1},X.getBottom=function(){return this._y2},U}(zw),f0=function(B){V_(U,B);function U(q,Q,Z,V){var z=B.call(this)||this;return z._startX=q,z._startY=Q,z._endX=Z,z._endY=V,z._endsWithAWall=!0,z}U.createRandomAt=function(Q,Z,V,z,Y){var H=Y.corridorLength[0],W=Y.corridorLength[1],L=K.getUniformInt(H,W);return new this(Q,Z,Q+V*L,Z+z*L)};var X=U.prototype;return X.debug=function(){console.log("corridor",this._startX,this._startY,this._endX,this._endY)},X.isValid=function(Q,Z){var V=this._startX,z=this._startY,Y=this._endX-V,H=this._endY-z,W=1+Math.max(Math.abs(Y),Math.abs(H));if(Y)Y=Y/Math.abs(Y);if(H)H=H/Math.abs(H);var L=H,R=-Y,v=!0;for(var P=0;P<W;P++){var M=V+P*Y,k=z+P*H;if(!Z(M,k))v=!1;if(!Q(M+L,k+R))v=!1;if(!Q(M-L,k-R))v=!1;if(!v){W=P,this._endX=M-Y,this._endY=k-H;break}}if(W==0)return!1;if(W==1&&Q(this._endX+Y,this._endY+H))return!1;var N=!Q(this._endX+Y+L,this._endY+H+R),x=!Q(this._endX+Y-L,this._endY+H-R);if(this._endsWithAWall=Q(this._endX+Y,this._endY+H),(N||x)&&this._endsWithAWall)return!1;return!0},X.create=function(Q){var Z=this._startX,V=this._startY,z=this._endX-Z,Y=this._endY-V,H=1+Math.max(Math.abs(z),Math.abs(Y));if(z)z=z/Math.abs(z);if(Y)Y=Y/Math.abs(Y);for(var W=0;W<H;W++){var L=Z+W*z,R=V+W*Y;Q(L,R,0)}return!0},X.createPriorityWalls=function(Q){if(!this._endsWithAWall)return;var Z=this._startX,V=this._startY,z=this._endX-Z,Y=this._endY-V;if(z)z=z/Math.abs(z);if(Y)Y=Y/Math.abs(Y);var H=Y,W=-z;Q(this._endX+z,this._endY+Y),Q(this._endX+H,this._endY+W),Q(this._endX-H,this._endY-W)},U}(zw),Y8=function(B){V_(U,B);function U(q,Q,Z){var V=B.call(this,q,Q)||this;return V._options={roomWidth:[3,9],roomHeight:[3,5],roomDugPercentage:0.1,timeLimit:1000},Object.assign(V._options,Z),V._map=[],V._dug=0,V._roomAttempts=20,V._corridorAttempts=20,V._connected=[],V._unconnected=[],V._digCallback=V._digCallback.bind(V1(V)),V._canBeDugCallback=V._canBeDugCallback.bind(V1(V)),V._isWallCallback=V._isWallCallback.bind(V1(V)),V}var X=U.prototype;return X.create=function(Q){var Z=Date.now();while(!0){var V=Date.now();if(V-Z>this._options.timeLimit)return null;if(this._map=this._fillMap(1),this._dug=0,this._rooms=[],this._unconnected=[],this._generateRooms(),this._rooms.length<2)continue;if(this._generateCorridors())break}if(Q)for(var z=0;z<this._width;z++)for(var Y=0;Y<this._height;Y++)Q(z,Y,this._map[z][Y]);return this},X._generateRooms=function(){var Q=this._width-2,Z=this._height-2,V;do if(V=this._generateRoom(),this._dug/(Q*Z)>this._options.roomDugPercentage)break;while(V)},X._generateRoom=function(){var Q=0;while(Q<this._roomAttempts){Q++;var Z=n1.createRandom(this._width,this._height,this._options);if(!Z.isValid(this._isWallCallback,this._canBeDugCallback))continue;return Z.create(this._digCallback),this._rooms.push(Z),Z}return null},X._generateCorridors=function(){var Q=0;while(Q<this._corridorAttempts){Q++,this._corridors=[],this._map=this._fillMap(1);for(var Z=0;Z<this._rooms.length;Z++){var V=this._rooms[Z];V.clearDoors(),V.create(this._digCallback)}if(this._unconnected=K.shuffle(this._rooms.slice()),this._connected=[],this._unconnected.length)this._connected.push(this._unconnected.pop());while(!0){var z=K.getItem(this._connected);if(!z)break;var Y=this._closestRoom(this._unconnected,z);if(!Y)break;var H=this._closestRoom(this._connected,Y);if(!H)break;var W=this._connectRooms(Y,H);if(!W)break;if(!this._unconnected.length)return!0}}return!1},X._closestRoom=function(Q,Z){var V=1/0,z=Z.getCenter(),Y=null;for(var H=0;H<Q.length;H++){var W=Q[H],L=W.getCenter(),R=L[0]-z[0],v=L[1]-z[1],P=R*R+v*v;if(P<V)V=P,Y=W}return Y},X._connectRooms=function(Q,Z){var V=Q.getCenter(),z=Z.getCenter(),Y=z[0]-V[0],H=z[1]-V[1],W,L,R,v,P,M,k;if(Math.abs(Y)<Math.abs(H))R=H>0?2:0,v=(R+2)%4,P=Z.getLeft(),M=Z.getRight(),k=0;else R=Y>0?1:3,v=(R+2)%4,P=Z.getTop(),M=Z.getBottom(),k=1;if(W=this._placeInWall(Q,R),!W)return!1;if(W[k]>=P&&W[k]<=M){L=W.slice();var N=0;switch(v){case 0:N=Z.getTop()-1;break;case 1:N=Z.getRight()+1;break;case 2:N=Z.getBottom()+1;break;case 3:N=Z.getLeft()-1;break}L[(k+1)%2]=N,this._digLine([W,L])}else if(W[k]<P-1||W[k]>M+1){var x=W[k]-z[k],l=0;switch(v){case 0:case 1:l=x<0?3:1;break;case 2:case 3:l=x<0?1:3;break}if(v=(v+l)%4,L=this._placeInWall(Z,v),!L)return!1;var d=[0,0];d[k]=W[k];var i=(k+1)%2;d[i]=L[i],this._digLine([W,d,L])}else{var __=(k+1)%2;if(L=this._placeInWall(Z,v),!L)return!1;var q_=Math.round((L[__]+W[__])/2),L_=[0,0],T_=[0,0];L_[k]=W[k],L_[__]=q_,T_[k]=L[k],T_[__]=q_,this._digLine([W,L_,T_,L])}if(Q.addDoor(W[0],W[1]),Z.addDoor(L[0],L[1]),k=this._unconnected.indexOf(Q),k!=-1)this._unconnected.splice(k,1),this._connected.push(Q);if(k=this._unconnected.indexOf(Z),k!=-1)this._unconnected.splice(k,1),this._connected.push(Z);return!0},X._placeInWall=function(Q,Z){var V=[0,0],z=[0,0],Y=0;switch(Z){case 0:z=[1,0],V=[Q.getLeft(),Q.getTop()-1],Y=Q.getRight()-Q.getLeft()+1;break;case 1:z=[0,1],V=[Q.getRight()+1,Q.getTop()],Y=Q.getBottom()-Q.getTop()+1;break;case 2:z=[1,0],V=[Q.getLeft(),Q.getBottom()+1],Y=Q.getRight()-Q.getLeft()+1;break;case 3:z=[0,1],V=[Q.getLeft()-1,Q.getTop()],Y=Q.getBottom()-Q.getTop()+1;break}var H=[],W=-2;for(var L=0;L<Y;L++){var R=V[0]+L*z[0],v=V[1]+L*z[1];H.push(null);var P=this._map[R][v]==1;if(P){if(W!=L-1)H[L]=[R,v]}else if(W=L,L)H[L-1]=null}for(var M=H.length-1;M>=0;M--)if(!H[M])H.splice(M,1);return H.length?K.getItem(H):null},X._digLine=function(Q){for(var Z=1;Z<Q.length;Z++){var V=Q[Z-1],z=Q[Z],Y=new f0(V[0],V[1],z[0],z[1]);Y.create(this._digCallback),this._corridors.push(Y)}},X._digCallback=function(Q,Z,V){if(this._map[Q][Z]=V,V==0)this._dug++},X._isWallCallback=function(Q,Z){if(Q<0||Z<0||Q>=this._width||Z>=this._height)return!1;return this._map[Q][Z]==1},X._canBeDugCallback=function(Q,Z){if(Q<1||Z<1||Q+1>=this._width||Z+1>=this._height)return!1;return this._map[Q][Z]==1},U}(qw),U8=function(B){V_(U,B);function U(q,Q,Z){var V;if(Z===void 0)Z={};return V=B.call(this,q,Q)||this,V._options={born:[5,6,7,8],survive:[4,5,6,7,8],topology:8},V.setOptions(Z),V._dirs=B_[V._options.topology],V._map=V._fillMap(0),V}var X=U.prototype;return X.randomize=function(Q){for(var Z=0;Z<this._width;Z++)for(var V=0;V<this._height;V++)this._map[Z][V]=K.getUniform()<Q?1:0;return this},X.setOptions=function(Q){Object.assign(this._options,Q)},X.set=function(Q,Z,V){this._map[Q][Z]=V},X.create=function(Q){var Z=this._fillMap(0),V=this._options.born,z=this._options.survive;for(var Y=0;Y<this._height;Y++){var H=1,W=0;if(this._options.topology==6)H=2,W=Y%2;for(var L=W;L<this._width;L+=H){var R=this._map[L][Y],v=this._getNeighbors(L,Y);if(R&&z.indexOf(v)!=-1)Z[L][Y]=1;else if(!R&&V.indexOf(v)!=-1)Z[L][Y]=1}}this._map=Z,Q&&this._serviceCallback(Q)},X._serviceCallback=function(Q){for(var Z=0;Z<this._height;Z++){var V=1,z=0;if(this._options.topology==6)V=2,z=Z%2;for(var Y=z;Y<this._width;Y+=V)Q(Y,Z,this._map[Y][Z])}},X._getNeighbors=function(Q,Z){var V=0;for(var z=0;z<this._dirs.length;z++){var Y=this._dirs[z],H=Q+Y[0],W=Z+Y[1];if(H<0||H>=this._width||W<0||W>=this._height)continue;V+=this._map[H][W]==1?1:0}return V},X.connect=function(Q,Z,V){if(!Z)Z=0;var z=[],Y={},H=1,W=[0,0];if(this._options.topology==6)H=2,W=[0,1];for(var L=0;L<this._height;L++)for(var R=W[L%2];R<this._width;R+=H)if(this._freeSpace(R,L,Z)){var v=[R,L];Y[this._pointKey(v)]=v,z.push([R,L])}var P=z[K.getUniformInt(0,z.length-1)],M=this._pointKey(P),k={};k[M]=P,delete Y[M],this._findConnected(k,Y,[P],!1,Z);while(Object.keys(Y).length>0){var N=this._getFromTo(k,Y),x=N[0],l=N[1],d={};d[this._pointKey(x)]=x,this._findConnected(d,Y,[x],!0,Z);var i=this._options.topology==6?this._tunnelToConnected6:this._tunnelToConnected;i.call(this,l,x,k,Y,Z,V);for(var __ in d){var q_=d[__];this._map[q_[0]][q_[1]]=Z,k[__]=q_,delete Y[__]}}Q&&this._serviceCallback(Q)},X._getFromTo=function(Q,Z){var V=[0,0],z=[0,0],Y,H=Object.keys(Q),W=Object.keys(Z);for(var L=0;L<5;L++){if(H.length<W.length){var R=H;z=Q[R[K.getUniformInt(0,R.length-1)]],V=this._getClosest(z,Z)}else{var v=W;V=Z[v[K.getUniformInt(0,v.length-1)]],z=this._getClosest(V,Q)}if(Y=(V[0]-z[0])*(V[0]-z[0])+(V[1]-z[1])*(V[1]-z[1]),Y<64)break}return[V,z]},X._getClosest=function(Q,Z){var V=null,z=null;for(var Y in Z){var H=Z[Y],W=(H[0]-Q[0])*(H[0]-Q[0])+(H[1]-Q[1])*(H[1]-Q[1]);if(z==null||W<z)z=W,V=H}return V},X._findConnected=function(Q,Z,V,z,Y){while(V.length>0){var H=V.splice(0,1)[0],W=void 0;if(this._options.topology==6)W=[[H[0]+2,H[1]],[H[0]+1,H[1]-1],[H[0]-1,H[1]-1],[H[0]-2,H[1]],[H[0]-1,H[1]+1],[H[0]+1,H[1]+1]];else W=[[H[0]+1,H[1]],[H[0]-1,H[1]],[H[0],H[1]+1],[H[0],H[1]-1]];for(var L=0;L<W.length;L++){var R=this._pointKey(W[L]);if(Q[R]==null&&this._freeSpace(W[L][0],W[L][1],Y)){if(Q[R]=W[L],!z)delete Z[R];V.push(W[L])}}}},X._tunnelToConnected=function(Q,Z,V,z,Y,H){var W,L;if(Z[0]<Q[0])W=Z,L=Q;else W=Q,L=Z;for(var R=W[0];R<=L[0];R++){this._map[R][W[1]]=Y;var v=[R,W[1]],P=this._pointKey(v);V[P]=v,delete z[P]}if(H&&W[0]<L[0])H(W,[L[0],W[1]]);var M=L[0];if(Z[1]<Q[1])W=Z,L=Q;else W=Q,L=Z;for(var k=W[1];k<L[1];k++){this._map[M][k]=Y;var N=[M,k],x=this._pointKey(N);V[x]=N,delete z[x]}if(H&&W[1]<L[1])H([L[0],W[1]],[L[0],L[1]])},X._tunnelToConnected6=function(Q,Z,V,z,Y,H){var W,L;if(Z[0]<Q[0])W=Z,L=Q;else W=Q,L=Z;var R=W[0],v=W[1];while(!(R==L[0]&&v==L[1])){var P=2;if(v<L[1])v++,P=1;else if(v>L[1])v--,P=1;if(R<L[0])R+=P;else if(R>L[0])R-=P;else if(L[1]%2)R-=P;else R+=P;this._map[R][v]=Y;var M=[R,v],k=this._pointKey(M);V[k]=M,delete z[k]}if(H)H(Z,Q)},X._freeSpace=function(Q,Z,V){return Q>=0&&Q<this._width&&Z>=0&&Z<this._height&&this._map[Q][Z]==V},X._pointKey=function(Q){return Q[0]+"."+Q[1]},U}(w1),B8={room:n1,corridor:f0},G8=function(B){V_(U,B);function U(q,Q,Z){var V;if(Z===void 0)Z={};return V=B.call(this,q,Q)||this,V._options=Object.assign({roomWidth:[3,9],roomHeight:[3,5],corridorLength:[3,10],dugPercentage:0.2,timeLimit:1000},Z),V._features={room:4,corridor:4},V._map=[],V._featureAttempts=20,V._walls={},V._dug=0,V._digCallback=V._digCallback.bind(V1(V)),V._canBeDugCallback=V._canBeDugCallback.bind(V1(V)),V._isWallCallback=V._isWallCallback.bind(V1(V)),V._priorityWallCallback=V._priorityWallCallback.bind(V1(V)),V}var X=U.prototype;return X.create=function(Q){this._rooms=[],this._corridors=[],this._map=this._fillMap(1),this._walls={},this._dug=0;var Z=(this._width-2)*(this._height-2);this._firstRoom();var V=Date.now(),z;do{z=0;var Y=Date.now();if(Y-V>this._options.timeLimit)break;var H=this._findWall();if(!H)break;var W=H.split(","),L=parseInt(W[0]),R=parseInt(W[1]),v=this._getDiggingDirection(L,R);if(!v)continue;var P=0;do if(P++,this._tryFeature(L,R,v[0],v[1])){this._removeSurroundingWalls(L,R),this._removeSurroundingWalls(L-v[0],R-v[1]);break}while(P<this._featureAttempts);for(var M in this._walls)if(this._walls[M]>1)z++}while(this._dug/Z<this._options.dugPercentage||z);if(this._addDoors(),Q)for(var k=0;k<this._width;k++)for(var N=0;N<this._height;N++)Q(k,N,this._map[k][N]);return this._walls={},this._map=[],this},X._digCallback=function(Q,Z,V){if(V==0||V==2)this._map[Q][Z]=0,this._dug++;else this._walls[Q+","+Z]=1},X._isWallCallback=function(Q,Z){if(Q<0||Z<0||Q>=this._width||Z>=this._height)return!1;return this._map[Q][Z]==1},X._canBeDugCallback=function(Q,Z){if(Q<1||Z<1||Q+1>=this._width||Z+1>=this._height)return!1;return this._map[Q][Z]==1},X._priorityWallCallback=function(Q,Z){this._walls[Q+","+Z]=2},X._firstRoom=function(){var Q=Math.floor(this._width/2),Z=Math.floor(this._height/2),V=n1.createRandomCenter(Q,Z,this._options);this._rooms.push(V),V.create(this._digCallback)},X._findWall=function(){var Q=[],Z=[];for(var V in this._walls){var z=this._walls[V];if(z==2)Z.push(V);else Q.push(V)}var Y=Z.length?Z:Q;if(!Y.length)return null;var H=K.getItem(Y.sort());return delete this._walls[H],H},X._tryFeature=function(Q,Z,V,z){var Y=K.getWeightedValue(this._features),H=B8[Y],W=H.createRandomAt(Q,Z,V,z,this._options);if(!W.isValid(this._isWallCallback,this._canBeDugCallback))return!1;if(W.create(this._digCallback),W instanceof n1)this._rooms.push(W);if(W instanceof f0)W.createPriorityWalls(this._priorityWallCallback),this._corridors.push(W);return!0},X._removeSurroundingWalls=function(Q,Z){var V=B_[4];for(var z=0;z<V.length;z++){var Y=V[z],H=Q+Y[0],W=Z+Y[1];delete this._walls[H+","+W],H=Q+2*Y[0],W=Z+2*Y[1],delete this._walls[H+","+W]}},X._getDiggingDirection=function(Q,Z){if(Q<=0||Z<=0||Q>=this._width-1||Z>=this._height-1)return null;var V=null,z=B_[4];for(var Y=0;Y<z.length;Y++){var H=z[Y],W=Q+H[0],L=Z+H[1];if(!this._map[W][L]){if(V)return null;V=H}}if(!V)return null;return[-V[0],-V[1]]},X._addDoors=function(){var Q=this._map;function Z(Y,H){return Q[Y][H]==1}for(var V=0;V<this._rooms.length;V++){var z=this._rooms[V];z.clearDoors(),z.addDoors(Z)}},U}(qw);function $w(B,U,X){X[U[B+1]]=X[B],U[X[B]]=U[B+1],X[B]=B+1,U[B+1]=B}function Xw(B,U,X){X[U[B]]=X[B],U[X[B]]=U[B],X[B]=B,U[B]=B}var W8=function(B){V_(U,B);function U(){return B.apply(this,arguments)||this}var X=U.prototype;return X.create=function(Q){var Z=this._fillMap(1),V=Math.ceil((this._width-2)/2),z=0.375,Y=[],H=[];for(var W=0;W<V;W++)Y.push(W),H.push(W);Y.push(V-1);var L;for(L=1;L+3<this._height;L+=2)for(var R=0;R<V;R++){var v=2*R+1,P=L;if(Z[v][P]=0,R!=Y[R+1]&&K.getUniform()>z)$w(R,Y,H),Z[v+1][P]=0;if(R!=Y[R]&&K.getUniform()>z)Xw(R,Y,H);else Z[v][P+1]=0}for(var M=0;M<V;M++){var k=2*M+1,N=L;if(Z[k][N]=0,M!=Y[M+1]&&(M==Y[M]||K.getUniform()>z))$w(M,Y,H),Z[k+1][N]=0;Xw(M,Y,H)}for(var x=0;x<this._width;x++)for(var l=0;l<this._height;l++)Q(x,l,Z[x][l]);return this},U}(w1),H8=function(B){V_(U,B);function U(){var q=B.apply(this,arguments)||this;return q._stack=[],q._map=[],q}var X=U.prototype;return X.create=function(Q){var Z=this._width,V=this._height;this._map=[];for(var z=0;z<Z;z++){this._map.push([]);for(var Y=0;Y<V;Y++){var H=z==0||Y==0||z+1==Z||Y+1==V;this._map[z].push(H?1:0)}}this._stack=[[1,1,Z-2,V-2]],this._process();for(var W=0;W<Z;W++)for(var L=0;L<V;L++)Q(W,L,this._map[W][L]);return this._map=[],this},X._process=function(){while(this._stack.length){var Q=this._stack.shift();this._partitionRoom(Q)}},X._partitionRoom=function(Q){var Z=[],V=[];for(var z=Q[0]+1;z<Q[2];z++){var Y=this._map[z][Q[1]-1],H=this._map[z][Q[3]+1];if(Y&&H&&!(z%2))Z.push(z)}for(var W=Q[1]+1;W<Q[3];W++){var L=this._map[Q[0]-1][W],R=this._map[Q[2]+1][W];if(L&&R&&!(W%2))V.push(W)}if(!Z.length||!V.length)return;var v=K.getItem(Z),P=K.getItem(V);this._map[v][P]=1;var M=[],k=[];M.push(k);for(var N=Q[0];N<v;N++)if(this._map[N][P]=1,N%2)k.push([N,P]);k=[],M.push(k);for(var x=v+1;x<=Q[2];x++)if(this._map[x][P]=1,x%2)k.push([x,P]);k=[],M.push(k);for(var l=Q[1];l<P;l++)if(this._map[v][l]=1,l%2)k.push([v,l]);k=[],M.push(k);for(var d=P+1;d<=Q[3];d++)if(this._map[v][d]=1,d%2)k.push([v,d]);var i=K.getItem(M);for(var __=0;__<M.length;__++){var q_=M[__];if(q_==i)continue;var L_=K.getItem(q_);this._map[L_[0]][L_[1]]=0}this._stack.push([Q[0],Q[1],v-1,P-1]),this._stack.push([v+1,Q[1],Q[2],P-1]),this._stack.push([Q[0],P+1,v-1,Q[3]]),this._stack.push([v+1,P+1,Q[2],Q[3]])},U}(w1),L8=function(B){V_(U,B);function U(q,Q,Z){var V;if(Z===void 0)Z=0;return V=B.call(this,q,Q)||this,V._regularity=Z,V._map=[],V}var X=U.prototype;return X.create=function(Q){var Z=this._width,V=this._height,z=this._fillMap(1);Z-=Z%2?1:2,V-=V%2?1:2;var Y=0,H=0,W=0,L=0,R=0,v=!1,P=[[0,0],[0,0],[0,0],[0,0]];do{if(Y=1+2*Math.floor(K.getUniform()*(Z-1)/2),H=1+2*Math.floor(K.getUniform()*(V-1)/2),!R)z[Y][H]=0;if(!z[Y][H]){this._randomize(P);do{if(Math.floor(K.getUniform()*(this._regularity+1))==0)this._randomize(P);v=!0;for(var M=0;M<4;M++)if(W=Y+P[M][0]*2,L=H+P[M][1]*2,this._isFree(z,W,L,Z,V)){z[W][L]=0,z[Y+P[M][0]][H+P[M][1]]=0,Y=W,H=L,v=!1,R++;break}}while(!v)}}while(R+1<Z*V/4);for(var k=0;k<this._width;k++)for(var N=0;N<this._height;N++)Q(k,N,z[k][N]);return this._map=[],this},X._randomize=function(Q){for(var Z=0;Z<4;Z++)Q[Z][0]=0,Q[Z][1]=0;switch(Math.floor(K.getUniform()*4)){case 0:Q[0][0]=-1,Q[1][0]=1,Q[2][1]=-1,Q[3][1]=1;break;case 1:Q[3][0]=-1,Q[2][0]=1,Q[1][1]=-1,Q[0][1]=1;break;case 2:Q[2][0]=-1,Q[3][0]=1,Q[0][1]=-1,Q[1][1]=1;break;case 3:Q[1][0]=-1,Q[0][0]=1,Q[3][1]=-1,Q[2][1]=1;break}},X._isFree=function(Q,Z,V,z,Y){if(Z<1||V<1||Z>=z||V>=Y)return!1;return Q[Z][V]},U}(w1),D8=function(B){V_(U,B);function U(q,Q,Z){var V=B.call(this,q,Q)||this;if(V.map=[],V.rooms=[],V.connectedCells=[],Z=Object.assign({cellWidth:3,cellHeight:3},Z),!Z.hasOwnProperty("roomWidth"))Z.roomWidth=V._calculateRoomSize(V._width,Z.cellWidth);if(!Z.hasOwnProperty("roomHeight"))Z.roomHeight=V._calculateRoomSize(V._height,Z.cellHeight);return V._options=Z,V}var X=U.prototype;return X.create=function(Q){if(this.map=this._fillMap(1),this.rooms=[],this.connectedCells=[],this._initRooms(),this._connectRooms(),this._connectUnconnectedRooms(),this._createRandomRoomConnections(),this._createRooms(),this._createCorridors(),Q)for(var Z=0;Z<this._width;Z++)for(var V=0;V<this._height;V++)Q(Z,V,this.map[Z][V]);return this},X._calculateRoomSize=function(Q,Z){var V=Math.floor(Q/Z*0.8),z=Math.floor(Q/Z*0.25);if(z<2)z=2;if(V<2)V=2;return[z,V]},X._initRooms=function(){for(var Q=0;Q<this._options.cellWidth;Q++){this.rooms.push([]);for(var Z=0;Z<this._options.cellHeight;Z++)this.rooms[Q].push({x:0,y:0,width:0,height:0,connections:[],cellx:Q,celly:Z})}},X._connectRooms=function(){var Q=K.getUniformInt(0,this._options.cellWidth-1),Z=K.getUniformInt(0,this._options.cellHeight-1),V,z,Y,H=!1,W,L,R;do{R=[0,2,4,6],R=K.shuffle(R);do{if(H=!1,V=R.pop(),z=Q+B_[8][V][0],Y=Z+B_[8][V][1],z<0||z>=this._options.cellWidth)continue;if(Y<0||Y>=this._options.cellHeight)continue;if(W=this.rooms[Q][Z],W.connections.length>0){if(W.connections[0][0]==z&&W.connections[0][1]==Y)break}if(L=this.rooms[z][Y],L.connections.length==0)L.connections.push([Q,Z]),this.connectedCells.push([z,Y]),Q=z,Z=Y,H=!0}while(R.length>0&&H==!1)}while(R.length>0)},X._connectUnconnectedRooms=function(){var Q=this._options.cellWidth,Z=this._options.cellHeight;this.connectedCells=K.shuffle(this.connectedCells);var V,z,Y;for(var H=0;H<this._options.cellWidth;H++)for(var W=0;W<this._options.cellHeight;W++)if(V=this.rooms[H][W],V.connections.length==0){var L=[0,2,4,6];L=K.shuffle(L),Y=!1;do{var R=L.pop(),v=H+B_[8][R][0],P=W+B_[8][R][1];if(v<0||v>=Q||P<0||P>=Z)continue;if(z=this.rooms[v][P],Y=!0,z.connections.length==0)break;for(var M=0;M<z.connections.length;M++)if(z.connections[M][0]==H&&z.connections[M][1]==W){Y=!1;break}if(Y)break}while(L.length);if(Y)V.connections.push([z.cellx,z.celly]);else console.log("-- Unable to connect room.")}},X._createRandomRoomConnections=function(){},X._createRooms=function(){var Q=this._width,Z=this._height,V=this._options.cellWidth,z=this._options.cellHeight,Y=Math.floor(this._width/V),H=Math.floor(this._height/z),W,L,R=this._options.roomWidth,v=this._options.roomHeight,P,M,k;for(var N=0;N<V;N++)for(var x=0;x<z;x++){if(P=Y*N,M=H*x,P==0)P=1;if(M==0)M=1;if(W=K.getUniformInt(R[0],R[1]),L=K.getUniformInt(v[0],v[1]),x>0){k=this.rooms[N][x-1];while(M-(k.y+k.height)<3)M++}if(N>0){k=this.rooms[N-1][x];while(P-(k.x+k.width)<3)P++}var l=Math.round(K.getUniformInt(0,Y-W)/2),d=Math.round(K.getUniformInt(0,H-L)/2);while(P+l+W>=Q)if(l)l--;else W--;while(M+d+L>=Z)if(d)d--;else L--;P=P+l,M=M+d,this.rooms[N][x].x=P,this.rooms[N][x].y=M,this.rooms[N][x].width=W,this.rooms[N][x].height=L;for(var i=P;i<P+W;i++)for(var __=M;__<M+L;__++)this.map[i][__]=0}},X._getWallPosition=function(Q,Z){var V,z,Y;if(Z==1||Z==3){if(V=K.getUniformInt(Q.x+1,Q.x+Q.width-2),Z==1)z=Q.y-2,Y=z+1;else z=Q.y+Q.height+1,Y=z-1;this.map[V][Y]=0}else{if(z=K.getUniformInt(Q.y+1,Q.y+Q.height-2),Z==2)V=Q.x+Q.width+1,Y=V-1;else V=Q.x-2,Y=V+1;this.map[Y][z]=0}return[V,z]},X._drawCorridor=function(Q,Z){var V=Z[0]-Q[0],z=Z[1]-Q[1],Y=Q[0],H=Q[1],W,L,R,v,P=[],M=Math.abs(V),k=Math.abs(z),N=K.getUniform(),x=N,l=1-N;if(L=V>0?2:6,R=z>0?4:0,M<k)W=Math.ceil(k*x),P.push([R,W]),P.push([L,M]),W=Math.floor(k*l),P.push([R,W]);else W=Math.ceil(M*x),P.push([L,W]),P.push([R,k]),W=Math.floor(M*l),P.push([L,W]);this.map[Y][H]=0;while(P.length>0){v=P.pop();while(v[1]>0)Y+=B_[8][v[0]][0],H+=B_[8][v[0]][1],this.map[Y][H]=0,v[1]=v[1]-1}},X._createCorridors=function(){var Q=this._options.cellWidth,Z=this._options.cellHeight,V,z,Y,H,W;for(var L=0;L<Q;L++)for(var R=0;R<Z;R++){V=this.rooms[L][R];for(var v=0;v<V.connections.length;v++){if(z=V.connections[v],Y=this.rooms[z[0]][z[1]],Y.cellx>V.cellx)H=2,W=4;else if(Y.cellx<V.cellx)H=4,W=2;else if(Y.celly>V.celly)H=3,W=1;else H=1,W=3;this._drawCorridor(this._getWallPosition(V,H),this._getWallPosition(Y,W))}}},U}(w1),j8={Arena:X8,Uniform:Y8,Cellular:U8,Digger:G8,EllerMaze:W8,DividedMaze:H8,IceyMaze:L8,Rogue:D8},R8=function(){},F8=0.5*(Math.sqrt(3)-1),k1=(3-Math.sqrt(3))/6,b8=function(B){V_(U,B);function U(q){var Q;if(q===void 0)q=256;Q=B.call(this)||this,Q._gradients=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]];var Z=[];for(var V=0;V<q;V++)Z.push(V);Z=K.shuffle(Z),Q._perms=[],Q._indexes=[];for(var z=0;z<2*q;z++)Q._perms.push(Z[z%q]),Q._indexes.push(Q._perms[z]%Q._gradients.length);return Q}var X=U.prototype;return X.get=function(Q,Z){var V=this._perms,z=this._indexes,Y=V.length/2,H=0,W=0,L=0,R,v=(Q+Z)*F8,P=Math.floor(Q+v),M=Math.floor(Z+v),k=(P+M)*k1,N=P-k,x=M-k,l=Q-N,d=Z-x,i,__;if(l>d)i=1,__=0;else i=0,__=1;var q_=l-i+k1,L_=d-__+k1,T_=l-1+2*k1,A0=d-1+2*k1,E0=j(P,Y),N0=j(M,Y),O1=0.5-l*l-d*d;if(O1>=0){O1*=O1,R=z[E0+V[N0]];var Uw=this._gradients[R];H=O1*O1*(Uw[0]*l+Uw[1]*d)}var f1=0.5-q_*q_-L_*L_;if(f1>=0){f1*=f1,R=z[E0+i+V[N0+__]];var Bw=this._gradients[R];W=f1*f1*(Bw[0]*q_+Bw[1]*L_)}var A1=0.5-T_*T_-A0*A0;if(A1>=0){A1*=A1,R=z[E0+1+V[N0+1]];var Gw=this._gradients[R];L=A1*A1*(Gw[0]*T_+Gw[1]*A0)}return 70*(H+W+L)},U}(R8),v8={Simplex:b8},Yw=function(){function B(X,q,Q,Z){if(Z===void 0)Z={};if(this._toX=X,this._toY=q,this._passableCallback=Q,this._options=Object.assign({topology:8},Z),this._dirs=B_[this._options.topology],this._options.topology==8)this._dirs=[this._dirs[0],this._dirs[2],this._dirs[4],this._dirs[6],this._dirs[1],this._dirs[3],this._dirs[5],this._dirs[7]]}var U=B.prototype;return U._getNeighbors=function(q,Q){var Z=[];for(var V=0;V<this._dirs.length;V++){var z=this._dirs[V],Y=q+z[0],H=Q+z[1];if(!this._passableCallback(Y,H))continue;Z.push([Y,H])}return Z},B}(),P8=function(B){V_(U,B);function U(q,Q,Z,V){var z=B.call(this,q,Q,Z,V)||this;return z._computed={},z._todo=[],z._add(q,Q,null),z}var X=U.prototype;return X.compute=function(Q,Z,V){var z=Q+","+Z;if(!(z in this._computed))this._compute(Q,Z);if(!(z in this._computed))return;var Y=this._computed[z];while(Y)V(Y.x,Y.y),Y=Y.prev},X._compute=function(Q,Z){while(this._todo.length){var V=this._todo.shift();if(V.x==Q&&V.y==Z)return;var z=this._getNeighbors(V.x,V.y);for(var Y=0;Y<z.length;Y++){var H=z[Y],W=H[0],L=H[1],R=W+","+L;if(R in this._computed)continue;this._add(W,L,V)}}},X._add=function(Q,Z,V){var z={x:Q,y:Z,prev:V};this._computed[Q+","+Z]=z,this._todo.push(z)},U}(Yw),C8=function(B){V_(U,B);function U(q,Q,Z,V){var z;if(V===void 0)V={};return z=B.call(this,q,Q,Z,V)||this,z._todo=[],z._done={},z}var X=U.prototype;return X.compute=function(Q,Z,V){this._todo=[],this._done={},this._fromX=Q,this._fromY=Z,this._add(this._toX,this._toY,null);while(this._todo.length){var z=this._todo.shift(),Y=z.x+","+z.y;if(Y in this._done)continue;if(this._done[Y]=z,z.x==Q&&z.y==Z)break;var H=this._getNeighbors(z.x,z.y);for(var W=0;W<H.length;W++){var L=H[W],R=L[0],v=L[1],P=R+","+v;if(P in this._done)continue;this._add(R,v,z)}}var M=this._done[Q+","+Z];if(!M)return;while(M)V(M.x,M.y),M=M.prev},X._add=function(Q,Z,V){var z=this._distance(Q,Z),Y={x:Q,y:Z,prev:V,g:V?V.g+1:0,h:z},H=Y.g+Y.h;for(var W=0;W<this._todo.length;W++){var L=this._todo[W],R=L.g+L.h;if(H<R||H==R&&z<L.h){this._todo.splice(W,0,Y);return}}this._todo.push(Y)},X._distance=function(Q,Z){switch(this._options.topology){case 4:return Math.abs(Q-this._fromX)+Math.abs(Z-this._fromY);case 6:var V=Math.abs(Q-this._fromX),z=Math.abs(Z-this._fromY);return z+Math.max(0,(V-z)/2);case 8:return Math.max(Math.abs(Q-this._fromX),Math.abs(Z-this._fromY))}},U}(Yw),M8={Dijkstra:P8,AStar:C8},k8=function(){function B(X){this._scheduler=X,this._lock=1}var U=B.prototype;return U.start=function(){return this.unlock()},U.lock=function(){return this._lock++,this},U.unlock=function(){if(!this._lock)throw Error("Cannot unlock unlocked engine");this._lock--;while(!this._lock){var q=this._scheduler.next();if(!q)return this.lock();var Q=q.act();if(Q&&Q.then)this.lock(),Q.then(this.unlock.bind(this))}return this},B}(),O8=function(){function B(X,q){if(q===void 0)q={};this._reflectivityCallback=X,this._options={},q=Object.assign({passes:1,emissionThreshold:100,range:10},q),this._lights={},this._reflectivityCache={},this._fovCache={},this.setOptions(q)}var U=B.prototype;return U.setOptions=function(q){if(Object.assign(this._options,q),q&&q.range)this.reset();return this},U.setFOV=function(q){return this._fov=q,this._fovCache={},this},U.setLight=function(q,Q,Z){var V=q+","+Q;if(Z)this._lights[V]=typeof Z=="string"?p(Z):Z;else delete this._lights[V];return this},U.clearLights=function(){this._lights={}},U.reset=function(){return this._reflectivityCache={},this._fovCache={},this},U.compute=function(q){var Q={},Z={},V={};for(var z in this._lights){var Y=this._lights[z];Z[z]=[0,0,0],r(Z[z],Y)}for(var H=0;H<this._options.passes;H++){if(this._emitLight(Z,V,Q),H+1==this._options.passes)continue;Z=this._computeEmitters(V,Q)}for(var W in V){var L=W.split(","),R=parseInt(L[0]),v=parseInt(L[1]);q(R,v,V[W])}return this},U._emitLight=function(q,Q,Z){for(var V in q){var z=V.split(","),Y=parseInt(z[0]),H=parseInt(z[1]);this._emitLightFromCell(Y,H,q[V],Q),Z[V]=1}return this},U._computeEmitters=function(q,Q){var Z={};for(var V in q){if(V in Q)continue;var z=q[V],Y=void 0;if(V in this._reflectivityCache)Y=this._reflectivityCache[V];else{var H=V.split(","),W=parseInt(H[0]),L=parseInt(H[1]);Y=this._reflectivityCallback(W,L),this._reflectivityCache[V]=Y}if(Y==0)continue;var R=[0,0,0],v=0;for(var P=0;P<3;P++){var M=Math.round(z[P]*Y);R[P]=M,v+=M}if(v>this._options.emissionThreshold)Z[V]=R}return Z},U._emitLightFromCell=function(q,Q,Z,V){var z=q+","+Q,Y;if(z in this._fovCache)Y=this._fovCache[z];else Y=this._updateFOV(q,Q);for(var H in Y){var W=Y[H],L=void 0;if(H in V)L=V[H];else L=[0,0,0],V[H]=L;for(var R=0;R<3;R++)L[R]+=Math.round(Z[R]*W)}return this},U._updateFOV=function(q,Q){var Z=q+","+Q,V={};this._fovCache[Z]=V;var z=this._options.range;function Y(H,W,L,R){var v=H+","+W,P=R*(1-L/z);if(P==0)return;V[v]=P}return this._fov.compute(q,Q,z,Y.bind(this)),V},B}(),f8=O,A8=n,E8=i6;_.Color=A8,_.DEFAULT_HEIGHT=M0,_.DEFAULT_WIDTH=C0,_.DIRS=B_,_.Display=U1,_.Engine=k8,_.EventQueue=Vw,_.FOV=$8,_.KEYS=e6,_.Lighting=O8,_.Map=j8,_.Noise=v8,_.Path=M8,_.RNG=K,_.Scheduler=K8,_.StringGenerator=w8,_.Text=E8,_.Util=f8,Object.defineProperty(_,"__esModule",{value:!0})})});var{readFileSync:O7}=(()=>({}));function G1(_,w,J){let K=B1(_,w),$=B1(_,J);if(K===null||$===null)return 0;if(K===$)return 1;else if(K.friendly.has($.name)||$.friendly.has(K.name))return 1;else if(K.hostile.has($.name)||$.hostile.has(K.name))return 2;else if(K.friendly.has("*")||$.friendly.has("*"))return 1;else if(K.hostile.has("*")||$.hostile.has("*"))return 2;return 0}function B1(_,w){return(_.components.faction[w]||{}).faction||null}function n_(_,w,J){return _.components.faction[w]={faction:J},_}class o_{name;description;energyDelta;constructor(_,w,J=0){this.name=_,this.description=w,this.energyDelta=J}}class E1{name;description;constructor(_,w){this.name=_,this.description=w}}class f_{key;description;constructor(_,w){this.key=_,this.description=w}}class N_{name;description;tooltip;icon;constructor(_,w,J="",K){this.name=_,this.description=w,this.tooltip=J,this.icon=K}}class G_{name;description;icon;color;energyMax;unlockCondition;constructor(_,w,J,K=100){this.name=_,this.description=w,this.icon=J,this.energyMax=K,this.color="white",this.unlockCondition=null}}class s_{name;description;color;friendly;hostile;constructor(_,w,J,K,$){this.name=_,this.description=w,this.color=J,this.friendly=K,this.hostile=$}}class z_{name;description;icon;color;energyDelta;matter;gold;damage;energyCost;effects;constructor(_,w,J,K="cyberyellow",$=0,G=0,j=0,F=0,b=0,C=[]){this.name=_,this.description=w,this.icon=J,this.color=K,this.energyDelta=$,this.matter=G,this.gold=j,this.damage=F,this.energyCost=b,this.effects=C}}class y{name;description;tooltip;icon;isBlocking;isSpace;isWater;energyDelta;sign;constructor(_,w,J="",K=null,$={}){this.name=_,this.description=w,this.tooltip=J,this.icon=K,this.isBlocking=$.isBlocking||!1,this.isSpace=$.isSpace||!1,this.isWater=$.isWater||!1,this.energyDelta=$.energyDelta||0,this.sign=$.sign}}var u0={};function Hw(_){if(!u0[_])u0[_]=new y("wall","A strong wall","",`#${_}`,{isBlocking:!0,sign:_});return u0[_]}var D={actions:{Buy:new o_("Buy","Buy an item or tool"),Drop:new o_("Drop","Drop current tool"),Enter:new o_("Enter","Enter a portal or plant atmosphere"),Launch:new o_("Launch","Launch into space",-10),Shift:new o_("Shift","Shifts a lever",-1),Take:new o_("Take","Pickup and equip a tool"),Wait:new o_("Wait","Wait one turn in place")},ais:{aggrorange:new E1("aggrorange","Idles at a position and engages the player when coming into range"),aggrorangeshort:new E1("aggrorangeshort","Idles at a position and engages the player when coming into shorter range"),guardian:new E1("guardian","Idles at a position and only fights back if engaged"),interactenrage:new E1("interactenrage","Gets hostile when getting talked to too often!")},colors:{black:"#000",brown:"#a52a2a",cybercyan:"#4deeea",cyberyellow:"#ffe700",cybermagenta:"#f000ff",cybergreen:"#74ef15",cyberblue:"#001eff",darkgray:"#222",gray:"#777",mutedcyan:"#2cc9c5",mutedyellow:"#b0a216",mutedmagenta:"#a716b0",mutedgreen:"#5ca821",mutedblue:"#1628b0",red:"#f00",white:"#fff"},colorcoding:{cybergreen:"Friendly color",cybermagenta:"Enemy color",cyberyellow:"Item or special effect color"},commands:{N:new f_("N","Move/interact/combat north"),E:new f_("E","Move/interact/combat east"),S:new f_("S","Move/interact/combat south"),W:new f_("W","Move/interact/combat west"),A:new f_("A","Primary action, confirm"),B:new f_("B","Take a break, cancel"),X:new f_("X","Secondary action, combat-related"),Y:new f_("Y","Tertiary action, inventory or item related"),M:new f_("M","Hide/show message log"),"?":new f_("?","Contextual help")},constants:{DRAIN_MATTER_COST:500,DRAIN_GOLD_COST:1,MIN_TURN_SPEED_IN_MS:80},dialogs:{bot_bar_aerobot_backstage:"Huh? How did you get here?",bot_bar_aerobot_charger:"Feel free to recharge on those chargepads and enjoy the show.",bot_bar_aerobot_spa_down:"Have you been to our shop, yet?",bot_bar_aerobot_spa_up:"Ahhhh, so refreshing!",bot_bar_aerobot_welcome:"Welcome to the Bot Bar. How may we serve you?",bot_dormitory_aerobot_down:"Would you please go to your own pod?",bot_dormitory_aerobot_up:"Pod, sweet pod!",bot_dormitory_graffiti:"Not all pods are created equal! Rad!",bot_dormitory_workbot_left:"This pod is taken, go away!",bot_dormitory_workbot_right:"Brzzzt! Brzzzt!",bot_factory_workbot_assembly:"The assembly line is unblocked!",bot_factory_workbot_drain:"Don't come too close to the drain or you'll lose your stuff!",bot_factory_workbot_forebot:"What are you doing here? Get back to work!",bot_factory_workbot_sewers:"Sewage water is spilling over again.",bot_factory_workbot_workwork:"Work, work!",bot_factory_workbot_wrench:"I lost a wrench somewhere here...",bot_prison_aerobot:"I'm innocent! I'm innocent! I'm innocent! Beep!",bot_prison_workbot:"Thanks for freeing me! Guess I don't need this Pickaxe anymore...",bot_stadium_botracing:"Now this is botracing!",bot_station_graffiti:"Yo! The factory has a hidden backdoor!",bot_station_graffiti_statues:"One statue isn't like the others! Ey!",bot_station_graffiti_gold:"Obtain gold and ascend!",bot_station_pioneer:"You shall not pass!",bot_station_spire_richbot:"All gold is MINE! MINE! MINE!",bugger_nest_cloud:"Tokens! Tokens! Tokens! Go get 'em!",manual_botmoses:"Try the '?' in the bottom left corner if you are stuck.",manual_spirit:"Weeee!",manual_aerobot:"Huh? Why don't you have a hull?",manual_workbot:"Work, work!",manual_cleaner:"Follow the rules! Okay?",manual_pioneer:"Don't talk to me, weakling!",playground_label_top_portal:"Goes to top left side of star",playground_label_bottom_portal:"Goes to top left corner of solar system",shop_instance_aerobot_shopper:"It's shiny!!!",shop_instance_shopkeeper:"Welcome! What does your engine desire?",shop_instance_workbot_shopper:"This shop is not so secret after all...",unlocked_cleaner:"No Fun Allowed: Unlocked Cleaner.",unlocked_roborat:"Rat King: Unlocked RoboRat.",unlocked_bugger:"DecaCheater: Unlocked Bugger."},effects:{BioAbsorber:new N_("BioAbsorber","Gain energy while on trees","[Bio Absorber]: Regenerates energy on trees","fx_ba"),GraffitiCleaner:new N_("GraffitiCleaner","Removes graffiti on contact","[Graffiti Cleaner]: Removes graffiti","fx_gc"),Recharger:new N_("Recharger","Doubles energy gained from chargepads","[Recharger]: Doubles energy gained from chargepads","fx_re"),Recuperation:new N_("Recuperation","Reduces tool energy cost","[Recuperation]: Reduces tool energy cost (max. -1)","fx_cu"),RockCrusher:new N_("RockCrusher","Mines rock","[Rock Crusher]: Enables rock mining","fx_rc"),Screwing:new N_("Screwing","Unscrews the sewer portal covers","[Screwing]: Opens sewer gates","fx_sc"),WallCrusher:new N_("WallCrusher","Tears down weak walls","[Wall Crusher]: Enables weak wall destruction","fx_wc"),WaterImmunity:new N_("WaterImmunity","No damage taken from water","[Water Immunity]: Prevents water damage","fx_wi"),WaterShield:new N_("WaterShield","Reduces damage taken from water","[Water Shield]: Reduces water damage","fx_ws")},entities:{movableboulder:new G_("Boulder","A movable rock","o",2),movablebox:new G_("Box","A movable box","x",2),Spirit:new G_("Spirit","You are back in the machine mind, pick a new hull!","@",10),AeroBot:new G_("AeroBot","Basic server, serving energy goo and such to bots","A",80),WorkBot:new G_("WorkBot","Basic factory worker","B"),Cleaner:new G_("Cleaner","Bot purging malfunctioning bots","C",50),Deviant:new G_("Deviant","Unaligned, divergent bot roaming the BotMos","D",120),Graffiticyan:new G_("Graffiti","Writing on the wall","zc",2),Graffitimagenta:new G_("Graffiti","Writing on the wall","zm",2),Graffitiyellow:new G_("Graffiti","Writing on the wall","zy",2),Valkyrie:new G_("Valkyrie","Airbourne war logistics","V",160),Pioneer:new G_("Pioneer","Absolute slayer bots, brotherhood of ultimate warriors","W",200),RichBot:new G_("RichBot","Shiny metal a**, owns the bot station","R",500),RoboRat:new G_("RoboRat","Minor self-assembled critter","cr",5),Bugger:new G_("Bugger","Minor annoyance critter","cb",5),SageBot:new G_("SageBot","Guides the player","S",200)},factions:{Critters:new s_("Critters","Small pests","cyberyellow",new Set,new Set(["*"])),Drifters:new s_("Drifters","Bots disconnected from a mothership/overmind","cybergreen",new Set,new Set(["Guardians","Workers"])),Enraged:new s_("Enraged","Always hostile faction","cybermagenta",new Set,new Set(["*"])),Spirits:new s_("Spirits","Default player faction","white",new Set,new Set),Pyrates:new s_("Pyrates","Default enemy faction","cybermagenta",new Set,new Set(["*"])),Guardians:new s_("Guardians","Bot station guardians","cybercyan",new Set,new Set(["Workers"])),Workers:new s_("Workers","Bot station workers","white",new Set,new Set(["Guardians"]))},items:{battery:new z_("Battery","Increases maximum energy","b","cyberyellow",10),chest:new z_("Chest","A chest. What might be inside?","i","cyberyellow"),energy:new z_("Energy","Energy pack","e","cyberyellow",10),gold:new z_("Gold","Precious shiny!","gg","cyberyellow",0,0,1),goo:new z_("Goo","A minor matter source","goo","gray",0,1),junk:new z_("Junk","Broken bot","%","gray",0,1),matter:new z_("Matter","A pile of stuff","m","gray",0,100),mop:new z_("Mop","Removes graffiti from walls","im","cyberyellow",0,0,0,-10,-1,["GraffitiCleaner"]),cheat:new z_("Cheat","Most powerful tool, totally legit","icheat","cyberyellow",0,0,0,-500,-1,["Recharger","RockCrusher","Screwing","WallCrusher","WaterShield"]),hammer:new z_("Hammer","Tears down weak walls","ih","cyberyellow",0,0,0,-15,-2,["WallCrusher"]),pickaxe:new z_("Pickaxe","Mines rock","ip","cyberyellow",0,0,0,-13,-2,["RockCrusher"]),ratbite:new z_("Rat Bite","Only rats have this","irb","cyberyellow",0,0,0,-5,-1,["WaterImmunity"]),shocker:new z_("Shocker","Injects Bots with new energy, basic AeroBot tool","is","cyberyellow",0,0,0,10,-1,["Recharger"]),trident:new z_("Trident","Traverse water with less energy cost","it","cyberyellow",0,0,0,-20,-3,["WaterShield"]),upgradeBioAbsorber:new z_("Bio Absorber Upgrade","Grants [BioAbsorber] effect","iu_ba","cyberyellow",0,0,0,0,0,["BioAbsorber"]),upgradeRecuperation:new z_("Recuperation Upgrade","Grants [Recuperation] effect","iu_cu","cyberyellow",0,0,0,0,0,["Recuperation"]),upgradeWaterImmunity:new z_("WaterImmunity Upgrade","Grants [WaterImmunity] effect","iu_wi","cyberyellow",0,0,0,0,0,["WaterImmunity"]),wrench:new z_("Wrench","Basic WorkBot tool","iw","cyberyellow",0,0,0,-10,-1,["Screwing"])},names:{BotMoses:"Teaches the new player",Betty:"Gambles a lot",Bender:"From the future, bowl head",Drak:"A now retired Pioneer, who teaches the new player combat lessons",Oz:"A machinery wizard"},tiles:{void:new y("void","Just nothing here","","."),voidtrue:new y("voidtrue","Really nothing here and you shouldn't get there ever!","","_"),voidhidden:new y("voidhidden","Looks like a wall, but isn't!","",".#"),water:new y("water","Rust and other dangers await","Water","~",{isWater:!0,energyDelta:-2}),watersewage:new y("watersewage","Rust, goo and other dangers await","Sewage Water","~~",{isWater:!0,energyDelta:-4}),drain:new y("drain","Drains gold, matter and some of your energy","Drain","*",{energyDelta:-5}),rock:new y("rock","Hidden treasures may await","Rock","'",{isBlocking:!0}),tree:new y("tree","Lots of trees make a forest","Tree","t"),wall:new y("wall","A strong wall","","#",{isBlocking:!0}),wallstatueaerobot:new y("wallstatueaerobot","A small statue looking like an AeroBot","","sa",{isBlocking:!0}),wallstatuecleaner:new y("wallstatuecleaner","A small statue looking like a Cleaner","","sc",{isBlocking:!0}),wallstatuepioneer:new y("wallstatuepioneer","A small statue looking like a Pioneer","","sp",{isBlocking:!0}),wallstatueworkbot:new y("wallstatueworkbot","A small statue looking like a WorkBot","","sb",{isBlocking:!0}),wallweak:new y("wallweak","A weakened wall","Weak Wall","+",{isBlocking:!0}),chargepad:new y("chargepad","Recharges energy and health","Chargepad","=",{energyDelta:2}),leverleft:new y("leverleft","A lever (off)","Lever","l|"),leverright:new y("leverright","A lever (on)","Lever","l/"),movenorth:new y("movenorth","Moves you north","","^^"),moveeast:new y("moveeast","Moves you east","",">>"),movesouth:new y("movesouth","Moves you south","","vv"),movewest:new y("movewest","Moves you west","","<<"),portal:new y("portal","Gateway to another map","Portal","O"),portalclosed:new y("portalclosed","Closed gateway to another map","Closed Portal","Oc",{isBlocking:!0}),portalhidden:new y("portalhidden","Hidden gateway to another map","","Oh"),portallauncher:new y("portallauncher","Launches into space","Launch to Space","Ol"),portalsewers:new y("portalsewers","Needs some tool to open","Sewer Gate","#~",{isBlocking:!0}),portalstartworkbot:new y("portalstartworkbot","Start playing as a WorkBot","Play as a WorkBot","OB"),portalstartaerobot:new y("portalstartaerobot","Start playing as an AeroBot","Play as an AeroBot","OA"),portalstartcleaner:new y("portalstartcleaner","Start playing as a Cleaner","Play as a Cleaner","OC"),portalstartroborat:new y("portalstartroborat","Start playing as a RoboRat","Play as a RoboRat","Ocr"),portalstartbugger:new y("portalstartbugger","Start playing as a Bugger","Play as a Bugger","Ocb"),_portalstartunknown:new y("_portalstartunknown","Not unlocked, yet!","?","O?"),spacerock:new y("spacerock","Mountains as seen from space, non-blocking!","","'s",{isSpace:!0}),spacetree:new y("spacetree","Forest as seen from space","","ts",{isSpace:!0}),spacewater:new y("spacewater","Water as seen from space, not dangerous!","","~s",{isSpace:!0}),spacevoid:new y("spacevoid","Void/ground as seen from space","",".s",{isSpace:!0}),spacevoidstarwhite:new y("spacevoidstarwhite","Space with a white background star","",".f"),spacevoidstaryellow:new y("spacevoidstaryellow","Space with a yellow background star","",".y"),star:new y("star","It's hot, really hot!","Star","§",{energyDelta:-100}),terminal:new y("terminal","A computer terminal","Terminal","$")},triggersandactuators:{_tAction:0,_tDestruction:1,_tInteract:2,_tStep:4,_aDestroyEntity:0,_aPlaceTile:1,_aSpawnEntity:2,_aToggleTile:3},uitexts:{}};function o1(_){if(Object.hasOwn(D.dialogs,_))return D.dialogs[_];return`FIXME: ${_} needs localization!`}function Lw(_,w,J,K){return Math.abs(_-J)+Math.abs(w-K)}function W1(_){return[...Array(_).keys()]}function Dw(){if(window.crypto&&crypto)return self.crypto.randomUUID();return""}class s1{width;height;data;constructor(_,w,J){this.width=_;this.height=w;this.data=Array(this.width*this.height).fill(J)}isValid(_,w){return _>=0&&_<this.width&&w>=0&&w<this.height}get(_,w){if(!this.isValid(_,w))return null;return this.data[w*this.width+_]}set(_,w,J){if(!this.isValid(_,w))return;this.data[w*this.width+_]=J}}function m8(_){if(_===void 0){if(typeof window>"u"||!window.location||!window.location.search)return 0;_=window.location.search}try{let w=new URLSearchParams(_),J=w.get("bottom"),K=w.get("b"),$=J!==null&&J!==""?J:K;if($!==null&&$!==""){let G=parseFloat($);if(!isNaN(G))return Math.max(0,G)}}catch{return 0}return 0}function l8(_){if(_===void 0)try{if(typeof window<"u"&&window.sessionStorage)_=window.sessionStorage;else if(typeof sessionStorage<"u")_=sessionStorage;else return{uploadToLeaderboard:!1,username:"",passwordHash:""}}catch{return{uploadToLeaderboard:!1,username:"",passwordHash:""}}try{let w=_?.getItem("botmos_session");if(w!==null&&w!==void 0){let J=JSON.parse(w);if(J&&typeof J==="object"){let K=J.uploadToLeaderboard,$=K===!0||K==="true"||K===1||K==="1",G=typeof J.username==="string"?J.username:"",j=typeof J.passwordHash==="string"?J.passwordHash:"";return{uploadToLeaderboard:$,username:G,passwordHash:j}}}return{uploadToLeaderboard:!1,username:"",passwordHash:""}}catch{return{uploadToLeaderboard:!1,username:"",passwordHash:""}}}function c8(_){if(_===void 0){if(typeof window>"u"||!window.location||!window.location.search)return"";_=window.location.search}try{let w=new URLSearchParams(_),J=w.get("run"),K=w.get("r"),$=J!==null&&J!==""?J:K;if($!==null&&$!==void 0){let G=$.trim();if(G.startsWith("https://"))return G}}catch{return""}return""}function p8(_){if(_===void 0){if(typeof window>"u"||!window.location||!window.location.search)return 10;_=window.location.search}try{let K=new URLSearchParams(_).get("tps");if(K!==null&&K!==""){let $=parseFloat(K);if(!isNaN($)&&$>0)return $}}catch{return 10}return 10}function S1(){if(typeof document<"u"&&document.body)if(document.body.style.position="relative",g.bottom>0)document.body.style.height=`calc(100% - ${g.bottom}px)`,document.body.style.marginBottom=`${g.bottom}px`,document.body.style.boxSizing="border-box";else document.body.style.height="100%",document.body.style.marginBottom="0px"}var jw=m8(),d8=c8(),y8=p8(),a1=l8(),r8=a1.uploadToLeaderboard?Dw():"",n8=typeof window<"u"?window.innerWidth:0,o8=typeof window<"u"?Math.max(0,window.innerHeight-jw):0,N1=16;var g={bottom:jw,cameraWidth:Math.floor(n8/N1),cameraHeight:Math.floor(o8/N1),chatLogMaxSize:100,chatLogMaxDisplaySize:8,clientRunId:r8,debug:!0,fontSize:N1,highlightFriendEnemy:!0,leaderboardUploadUrl:"https://lively-fog-5c85.botmos.workers.dev",passwordHash:a1.passwordHash,run:d8,showUI:!0,showTooltip:!0,showEnergy:1,tps:y8,uiEffectsMaxDisplaySize:8,uiInventoryMaxDisplaySize:4,uiTouchGridThickness:1,uploadToLeaderboard:a1.uploadToLeaderboard,username:a1.username,version:"0.0.8-dev",zoom:1};var v_={width:Math.floor(g.cameraWidth*(1/g.zoom)),height:Math.floor(g.cameraHeight*(1/g.zoom)),bg:"transparent",fontSize:Math.floor(g.fontSize*g.zoom),layout:"tile-gl",tileWidth:N1,tileHeight:N1,tileSet:null,tileMap:null,tileColorize:!0};function w_(_,w){return _.chatLog.push(w),_.chatLog=_.chatLog.slice(-g.chatLogMaxSize),_}function Rw(_){let w;if(_._idManager.freeIds.length>0)w=_._idManager.freeIds.pop();else w=_._idManager.nextId++;return _._idManager.usedIds.add(w),w}function s8(_,w,J,K){if(J==="position")S_(_,w,K);else _.components[J][w]=K}class a_{entityId;componentsToAdd=new Map;state;constructor(_,w){this.state=_,this.entityId=w??Rw(_).toString()}getEntityId(){return this.entityId}with(_,w){return this.componentsToAdd.set(_,w),this}build(){if(this.state.entities[this.entityId]=!0,!this.state.effects[this.entityId])this.state.effects[this.entityId]={};for(let[_,w]of this.componentsToAdd.entries())s8(this.state,this.entityId,_,w);return this.entityId}}function i1(_,w){let J=_.components.actuator;if(!J)return _;for(let[K,$]of Object.entries(J)){if(!$||$.channel!==w.channel)continue;switch($.type){case 0:break;case 1:break;case 2:break;case 3:let G=_.components.position[K];if(G){let j=_.maps[G.mapId];if(j){let F=w.active?$.activate:$.deactivate;j.setTile(G.x,G.y,F)}}break;case 4:if(w.triggeredBy===s())_=w_(_,o1(w.channel));case 5:if(w.triggeredBy===s()){if(w.channel==="botmos_win_condition"){let j=e1(_,w.triggeredBy);if(_=w_(_,`Game won! ${j} turns.`),g.uploadToLeaderboard)_._uploadNow=!0}else if(w.channel==="botmos_lose_condition"){if(g.uploadToLeaderboard)_._uploadNow=!0}}break}}return _}function Fw(_){return _}function s(){return"player"}function e1(_,w){return _.actionLog.filter((J)=>J!=="?"&&J!=="M").length+1}function P_(_,w,J,K){if(!_.statistics[w])_.statistics[w]={[0]:0,[1]:0,[2]:0,[3]:0,[4]:0,[5]:0,[6]:0,[7]:0};_.statistics[w][J]+=K;let $=_.components.trigger;if(!$)return _;for(let[G,j]of Object.entries($)){if(!j||j.type!==3)continue;let{stat:F,statThreshold:b}=j;if(F===J&&b!==void 0){if(_.statistics[w][F]>=b){if(j.triggered=!0,_=i1(_,{triggerId:G,channel:j.channel,active:j.triggered,triggeredBy:w}),j.once)_._despawnQueue.push(G)}}}return _}/*!
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
 */var i8=function(_){var w={};function J(K){if(w[K])return w[K].exports;var $=w[K]={i:K,l:!1,exports:{}};return _[K].call($.exports,$,$.exports,J),$.l=!0,$.exports}return J.m=_,J.c=w,J.d=function(K,$,G){J.o(K,$)||Object.defineProperty(K,$,{enumerable:!0,get:G})},J.r=function(K){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(K,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(K,"__esModule",{value:!0})},J.t=function(K,$){if(1&$&&(K=J(K)),8&$)return K;if(4&$&&typeof K=="object"&&K&&K.__esModule)return K;var G=Object.create(null);if(J.r(G),Object.defineProperty(G,"default",{enumerable:!0,value:K}),2&$&&typeof K!="string")for(var j in K)J.d(G,j,function(F){return K[F]}.bind(null,j));return G},J.n=function(K){var $=K&&K.__esModule?function(){return K.default}:function(){return K};return J.d($,"a",$),$},J.o=function(K,$){return Object.prototype.hasOwnProperty.call(K,$)},J.p="/bin/",J(J.s=0)}([function(_,w,J){var K={},$=J(1),G=J(2),j=J(3);_.exports=K;var F=1;K.js=function(){var b,C,O,T=!1,S={},I={},p={},t={},r=!0,J_={},Z_=[],U_=Number.MAX_VALUE,X_=!1;this.setAcceptableTiles=function(u){u instanceof Array?O=u:!isNaN(parseFloat(u))&&isFinite(u)&&(O=[u])},this.enableSync=function(){T=!0},this.disableSync=function(){T=!1},this.enableDiagonals=function(){X_=!0},this.disableDiagonals=function(){X_=!1},this.setGrid=function(u){b=u;for(var E=0;E<b.length;E++)for(var f=0;f<b[0].length;f++)I[b[E][f]]||(I[b[E][f]]=1)},this.setTileCost=function(u,E){I[u]=E},this.setAdditionalPointCost=function(u,E,f){p[E]===void 0&&(p[E]={}),p[E][u]=f},this.removeAdditionalPointCost=function(u,E){p[E]!==void 0&&delete p[E][u]},this.removeAllAdditionalPointCosts=function(){p={}},this.setDirectionalCondition=function(u,E,f){t[E]===void 0&&(t[E]={}),t[E][u]=f},this.removeAllDirectionalConditions=function(){t={}},this.setIterationsPerCalculation=function(u){U_=u},this.avoidAdditionalPoint=function(u,E){S[E]===void 0&&(S[E]={}),S[E][u]=1},this.stopAvoidingAdditionalPoint=function(u,E){S[E]!==void 0&&delete S[E][u]},this.enableCornerCutting=function(){r=!0},this.disableCornerCutting=function(){r=!1},this.stopAvoidingAllAdditionalPoints=function(){S={}},this.findPath=function(u,E,f,n,e){var K_=function(d_){T?e(d_):setTimeout(function(){e(d_)})};if(O===void 0)throw Error("You can't set a path without first calling setAcceptableTiles() on EasyStar.");if(b===void 0)throw Error("You can't set a path without first calling setGrid() on EasyStar.");if(u<0||E<0||f<0||n<0||u>b[0].length-1||E>b.length-1||f>b[0].length-1||n>b.length-1)throw Error("Your start or end point is outside the scope of your grid.");if(u!==f||E!==n){for(var R_=b[n][f],Y_=!1,I_=0;I_<O.length;I_++)if(R_===O[I_]){Y_=!0;break}if(Y_!==!1){var H_=new $;H_.openList=new j(function(d_,Y1){return d_.bestGuessDistance()-Y1.bestGuessDistance()}),H_.isDoneCalculating=!1,H_.nodeHash={},H_.startX=u,H_.startY=E,H_.endX=f,H_.endY=n,H_.callback=K_,H_.openList.push(o(H_,H_.startX,H_.startY,null,1));var M1=F++;return J_[M1]=H_,Z_.push(M1),M1}K_(null)}else K_([])},this.cancelPath=function(u){return u in J_&&(delete J_[u],!0)},this.calculate=function(){if(Z_.length!==0&&b!==void 0&&O!==void 0)for(C=0;C<U_;C++){if(Z_.length===0)return;T&&(C=0);var u=Z_[0],E=J_[u];if(E!==void 0)if(E.openList.size()!==0){var f=E.openList.pop();if(E.endX!==f.x||E.endY!==f.y)f.list=0,f.y>0&&A(E,f,0,-1,1*c(f.x,f.y-1)),f.x<b[0].length-1&&A(E,f,1,0,1*c(f.x+1,f.y)),f.y<b.length-1&&A(E,f,0,1,1*c(f.x,f.y+1)),f.x>0&&A(E,f,-1,0,1*c(f.x-1,f.y)),X_&&(f.x>0&&f.y>0&&(r||h(b,O,f.x,f.y-1,f)&&h(b,O,f.x-1,f.y,f))&&A(E,f,-1,-1,1.4*c(f.x-1,f.y-1)),f.x<b[0].length-1&&f.y<b.length-1&&(r||h(b,O,f.x,f.y+1,f)&&h(b,O,f.x+1,f.y,f))&&A(E,f,1,1,1.4*c(f.x+1,f.y+1)),f.x<b[0].length-1&&f.y>0&&(r||h(b,O,f.x,f.y-1,f)&&h(b,O,f.x+1,f.y,f))&&A(E,f,1,-1,1.4*c(f.x+1,f.y-1)),f.x>0&&f.y<b.length-1&&(r||h(b,O,f.x,f.y+1,f)&&h(b,O,f.x-1,f.y,f))&&A(E,f,-1,1,1.4*c(f.x-1,f.y+1)));else{var n=[];n.push({x:f.x,y:f.y});for(var e=f.parent;e!=null;)n.push({x:e.x,y:e.y}),e=e.parent;n.reverse();var K_=n;E.callback(K_),delete J_[u],Z_.shift()}}else E.callback(null),delete J_[u],Z_.shift();else Z_.shift()}};var A=function(u,E,f,n,e){var K_=E.x+f,R_=E.y+n;if((S[R_]===void 0||S[R_][K_]===void 0)&&h(b,O,K_,R_,E)){var Y_=o(u,K_,R_,E,e);Y_.list===void 0?(Y_.list=1,u.openList.push(Y_)):E.costSoFar+e<Y_.costSoFar&&(Y_.costSoFar=E.costSoFar+e,Y_.parent=E,u.openList.updateItem(Y_))}},h=function(u,E,f,n,e){var K_=t[n]&&t[n][f];if(K_){var R_=m(e.x-f,e.y-n);if(!function(){for(var I_=0;I_<K_.length;I_++)if(K_[I_]===R_)return!0;return!1}())return!1}for(var Y_=0;Y_<E.length;Y_++)if(u[n][f]===E[Y_])return!0;return!1},m=function(u,E){if(u===0&&E===-1)return K.TOP;if(u===1&&E===-1)return K.TOP_RIGHT;if(u===1&&E===0)return K.RIGHT;if(u===1&&E===1)return K.BOTTOM_RIGHT;if(u===0&&E===1)return K.BOTTOM;if(u===-1&&E===1)return K.BOTTOM_LEFT;if(u===-1&&E===0)return K.LEFT;if(u===-1&&E===-1)return K.TOP_LEFT;throw Error("These differences are not valid: "+u+", "+E)},c=function(u,E){return p[E]&&p[E][u]||I[b[E][u]]},o=function(u,E,f,n,e){if(u.nodeHash[f]!==void 0){if(u.nodeHash[f][E]!==void 0)return u.nodeHash[f][E]}else u.nodeHash[f]={};var K_=a(E,f,u.endX,u.endY);if(n!==null)var R_=n.costSoFar+e;else R_=0;var Y_=new G(n,E,f,R_,K_);return u.nodeHash[f][E]=Y_,Y_},a=function(u,E,f,n){var e,K_;return X_?(e=Math.abs(u-f))<(K_=Math.abs(E-n))?1.4*e+K_:1.4*K_+e:(e=Math.abs(u-f))+(K_=Math.abs(E-n))}},K.TOP="TOP",K.TOP_RIGHT="TOP_RIGHT",K.RIGHT="RIGHT",K.BOTTOM_RIGHT="BOTTOM_RIGHT",K.BOTTOM="BOTTOM",K.BOTTOM_LEFT="BOTTOM_LEFT",K.LEFT="LEFT",K.TOP_LEFT="TOP_LEFT"},function(_,w){_.exports=function(){this.pointsToAvoid={},this.startX,this.callback,this.startY,this.endX,this.endY,this.nodeHash={},this.openList}},function(_,w){_.exports=function(J,K,$,G,j){this.parent=J,this.x=K,this.y=$,this.costSoFar=G,this.simpleDistanceToTarget=j,this.bestGuessDistance=function(){return this.costSoFar+this.simpleDistanceToTarget}}},function(_,w,J){_.exports=J(4)},function(_,w,J){var K,$,G;(function(){var j,F,b,C,O,T,S,I,p,t,r,J_,Z_,U_,X_;b=Math.floor,t=Math.min,F=function(A,h){return A<h?-1:A>h?1:0},p=function(A,h,m,c,o){var a;if(m==null&&(m=0),o==null&&(o=F),m<0)throw Error("lo must be non-negative");for(c==null&&(c=A.length);m<c;)o(h,A[a=b((m+c)/2)])<0?c=a:m=a+1;return[].splice.apply(A,[m,m-m].concat(h)),h},T=function(A,h,m){return m==null&&(m=F),A.push(h),U_(A,0,A.length-1,m)},O=function(A,h){var m,c;return h==null&&(h=F),m=A.pop(),A.length?(c=A[0],A[0]=m,X_(A,0,h)):c=m,c},I=function(A,h,m){var c;return m==null&&(m=F),c=A[0],A[0]=h,X_(A,0,m),c},S=function(A,h,m){var c;return m==null&&(m=F),A.length&&m(A[0],h)<0&&(h=(c=[A[0],h])[0],A[0]=c[1],X_(A,0,m)),h},C=function(A,h){var m,c,o,a,u,E;for(h==null&&(h=F),u=[],c=0,o=(a=function(){E=[];for(var f=0,n=b(A.length/2);0<=n?f<n:f>n;0<=n?f++:f--)E.push(f);return E}.apply(this).reverse()).length;c<o;c++)m=a[c],u.push(X_(A,m,h));return u},Z_=function(A,h,m){var c;if(m==null&&(m=F),(c=A.indexOf(h))!==-1)return U_(A,0,c,m),X_(A,c,m)},r=function(A,h,m){var c,o,a,u,E;if(m==null&&(m=F),!(o=A.slice(0,h)).length)return o;for(C(o,m),a=0,u=(E=A.slice(h)).length;a<u;a++)c=E[a],S(o,c,m);return o.sort(m).reverse()},J_=function(A,h,m){var c,o,a,u,E,f,n,e,K_;if(m==null&&(m=F),10*h<=A.length){if(!(a=A.slice(0,h).sort(m)).length)return a;for(o=a[a.length-1],u=0,f=(n=A.slice(h)).length;u<f;u++)m(c=n[u],o)<0&&(p(a,c,0,null,m),a.pop(),o=a[a.length-1]);return a}for(C(A,m),K_=[],E=0,e=t(h,A.length);0<=e?E<e:E>e;0<=e?++E:--E)K_.push(O(A,m));return K_},U_=function(A,h,m,c){var o,a,u;for(c==null&&(c=F),o=A[m];m>h&&c(o,a=A[u=m-1>>1])<0;)A[m]=a,m=u;return A[m]=o},X_=function(A,h,m){var c,o,a,u,E;for(m==null&&(m=F),o=A.length,E=h,a=A[h],c=2*h+1;c<o;)(u=c+1)<o&&!(m(A[c],A[u])<0)&&(c=u),A[h]=A[c],c=2*(h=c)+1;return A[h]=a,U_(A,E,h,m)},j=function(){function A(h){this.cmp=h!=null?h:F,this.nodes=[]}return A.push=T,A.pop=O,A.replace=I,A.pushpop=S,A.heapify=C,A.updateItem=Z_,A.nlargest=r,A.nsmallest=J_,A.prototype.push=function(h){return T(this.nodes,h,this.cmp)},A.prototype.pop=function(){return O(this.nodes,this.cmp)},A.prototype.peek=function(){return this.nodes[0]},A.prototype.contains=function(h){return this.nodes.indexOf(h)!==-1},A.prototype.replace=function(h){return I(this.nodes,h,this.cmp)},A.prototype.pushpop=function(h){return S(this.nodes,h,this.cmp)},A.prototype.heapify=function(){return C(this.nodes,this.cmp)},A.prototype.updateItem=function(h){return Z_(this.nodes,h,this.cmp)},A.prototype.clear=function(){return this.nodes=[]},A.prototype.empty=function(){return this.nodes.length===0},A.prototype.size=function(){return this.nodes.length},A.prototype.clone=function(){var h;return(h=new A).nodes=this.nodes.slice(0),h},A.prototype.toArray=function(){return this.nodes.slice(0)},A.prototype.insert=A.prototype.push,A.prototype.top=A.prototype.peek,A.prototype.front=A.prototype.peek,A.prototype.has=A.prototype.contains,A.prototype.copy=A.prototype.clone,A}(),$=[],(G=typeof(K=function(){return j})=="function"?K.apply(w,$):K)===void 0||(_.exports=G)}).call(this)}]),u1=new i8.js;u1.enableSync();function bw(_,w,J,K,$){u1.setGrid(_),u1.setAcceptableTiles([0]);let G=null;return u1.findPath(w,J,K,$,function(j){G=j}),u1.calculate(),G}function vw(_,w){return Object.values(_.effects[w])}function C_(_,w,J){return!!_.effects[w]&&Object.hasOwn(_.effects[w],J.name)}function Pw(_,w){if(w.oldEquippedItem){let J=w.oldEquippedItem;for(let K of J.effects){let $=D.effects[K];if(!!_.effects[w.entityId]?.[$.name]&&_.effects[w.entityId][$.name].source===J){delete _.effects[w.entityId][$.name];let G=_.components.inventory[w.entityId]?.inventory.find((j)=>j.effects.includes(K));if(G)_.effects[w.entityId][$.name]={type:$,source:G}}}}if(w.newEquippedItem){let J=w.newEquippedItem;for(let K of J.effects){let $=D.effects[K];if(!_.effects[w.entityId])_.effects[w.entityId]={};_.effects[w.entityId][$.name]={type:$,source:J}}}return _}function Cw(_,w){let J=w.type;for(let K of J.effects)_.effects[w.entityId][K]={type:D.effects[K]};return _}function x_(_,w,J){let K=_._eventSubscribers[w];if(K)for(let $=0;$<K.length;$++){let G=K[$];_=G(_,J)}return _}function H1(_,w,J){if(w in _._eventSubscribers);else _._eventSubscribers[w]=[];return _._eventSubscribers[w].push(J),_}function I0(_,w,J){return Z1(_,w,J),_}function kw(_,w,J){return Aw(_,w,J),_}function g1(_,w,J,K,$){return Ew(_,w,J,K,$),_}function t1(_,w){return _.components.inventory[w]?.inventory??[]}function Ow(_,w){let J=_.components.inventory[w]?.inventory;if(!J||J.length===0)return null;let K=null,$=0;for(let G of J){let j=Math.abs(G.damage);if(j>$)$=j,K=G}return K}function h1(_,w){let J=_.components.inventory[w];if(!J)return!1;return J.inventory.length<J.max}function Q1(_){if(!_)return!1;return _.energyCost<0}function J1(_,w){let J=_.components.currency[w];if(!J)return!1;return J.gold<0||J.matter<0}function I1(_,w,J){let K=_.components.currency[w],$=_.components.currency[J];if(!K||!$)return!1;return K.gold+$.gold>=0&&K.matter+$.matter>=0}function e8(_,w,J){let K=_.components.type[J]?.type;if(!K)return _;if(!h1(_,w))return _;let $=_.components.currency[w],G=_.components.currency[J];if($&&G)$.gold+=Math.max(0,G.gold),$.matter+=Math.max(0,G.matter);return _=T1(_,w,K),m_(_,J),_}function t8(_,w,J){let K=_.components.type[J]?.type;if(!K)return _;let $=_.components.energy[J];if(K===D.items.battery){let C=_.components.energy[w];if(C&&$)C.max+=$.current}if($&&$.current!==0)_._energyQueue.push({entityId:w,energyDelta:$.current});let G=_.components.currency[w],j=_.components.currency[J],F=void 0;if(G&&j)F=G.gold,G.gold+=Math.max(0,j.gold),G.matter+=Math.max(0,j.matter);if(w.startsWith("player")){if(_=w_(_,`Picked up ${K.name}.`),G&&F!==void 0&&G.gold>F)_=P_(_,w,2,G.gold-F)}let b={entityId:w,type:K};return _=x_(_,2,b),m_(_,J),_}function _7(_,w,J){let K=_.components.type[J]?.type;if(!K)return _;if(!h1(_,w))return _;if(!I1(_,w,J))return _;let $=_.components.currency[w],G=_.components.currency[J];if($&&G)$.gold+=G.gold,$.matter+=G.matter;return _=T1(_,w,K),m_(_,J),_}function w7(_,w,J){let K=_.components.type[J]?.type;if(!K)return _;if(!I1(_,w,J))return _;let $=_.components.currency[w],G=_.components.currency[J],j=void 0;if($&&G)j=$.gold,$.gold+=G.gold,$.matter+=G.matter;let F=_.components.energy[J];if(K===D.items.battery){let C=_.components.energy[w];if(C&&F)C.max+=F.current}if(F&&F.current!==0)_._energyQueue.push({entityId:w,energyDelta:F.current});if(w.startsWith("player")){if(_=w_(_,`Bought ${K.name}.`),$&&j!==void 0&&$.gold>j)_=P_(_,w,2,$.gold-j)}let b={entityId:w,type:K};return _=x_(_,2,b),m_(_,J),_}function _0(_,w,J){if(u_(_,w))return _;let K=_.components.type[J]?.type;if(!K)return _;let $=J1(_,J),G=Q1(K);if($)if(G)return _7(_,w,J);else return w7(_,w,J);else if(G)return e8(_,w,J);else return t8(_,w,J)}function T1(_,w,J){let K=_.components.inventory[w];if(!K||!J)return _;if(K.inventory.length>=K.max)return _;if(K.inventory.push(J),w.startsWith("player")){if(_=w_(_,`Equipped ${J.name}.`),J===D.items.cheat)_=P_(_,w,0,1)}let $={entityId:w,oldEquippedItem:null,newEquippedItem:J};return _=x_(_,1,$),_}function fw(_,w){let J=_.components.position[w],K=_.components.inventory[w];if(!K||K.inventory.length===0||!J)return _;let $=K.inventory.pop();Z1(_,$,{mapId:J.mapId,x:J.x,y:J.y});let G={entityId:w,oldEquippedItem:$,newEquippedItem:null};if(_=x_(_,1,G),w===s())_=w_(_,`Dropped ${$.name}.`);return _}function l_(_,w){return _.components.position[w]}function Sw(_,w,J){switch(J){case D.commands.N:_=M_(_,w,0,-1);break;case D.commands.W:_=M_(_,w,-1,0);break;case D.commands.S:_=M_(_,w,0,1);break;case D.commands.E:_=M_(_,w,1,0);break;case D.commands.A:_=w0(_,w,D.commands.A);break;case D.commands.B:_=w0(_,w,D.commands.B);break;case D.commands.X:_=w0(_,w,D.commands.X);break;case D.commands.Y:_=w0(_,w,D.commands.Y);break;default:}return _}function M_(_,w,J,K,$=0){let G=l_(_,w),j=_.maps[G.mapId],F=A_(_,{mapId:j.id,x:G.x+J,y:G.y+K}),b=Iw(_,F);if(b)if(u_(_,b)){if(!u_(_,w)&&$<1)_=M_(_,b,J,K,$++),_=M_(_,w,J,K,$++)}else if(K1(_,b)&&C_(_,w,D.effects.GraffitiCleaner)){_._energyQueue.push({entityId:b,energyDelta:-1*D.entities.Graffiticyan.energyMax});let C=T0(_,w,"GraffitiCleaner");_._energyQueue.push({entityId:w,energyDelta:x0(_,w,C)})}else _=Tw(_,w,b);else if(q7(_,j,w,J,K))_=Nw(_,j,w,J,K),_._energyQueue.push({entityId:w,energyDelta:-1*$});else if(z7(_,j,w,J,K)){let C=j.setTile(G.x+J,G.y+K,D.tiles.void),O={mapId:j.id,x:G.x+J,y:G.y+K};if(C===D.tiles.rock){let I=_.rng.getPercentage();if(I<=1)_=I0(_,D.items.matter,O);else if(I<=34)_=I0(_,D.items.junk,O)}if(w===s())_=P_(_,w,3,1);let T=C===D.tiles.rock?"RockCrusher":"WallCrusher",S=T0(_,w,T);_._energyQueue.push({entityId:w,energyDelta:x0(_,w,S)})}else if($7(_,j,w,J,K)){_=Nw(_,j,w,J,K);let C=T0(_,w,"Screwing");_._energyQueue.push({entityId:w,energyDelta:x0(_,w,C)})}return _}function T0(_,w,J){let K=_.components.inventory[w];if(!K)return;return K.inventory.find(($)=>$.effects.includes(J))}function x0(_,w,J){let K=J?J.energyCost:-1;if(C_(_,w,D.effects.Recuperation))K=Math.min(-1,K+1);return K}function w0(_,w,J){let $=D1(_,w)[J.key],G=l_(_,w),F=_.maps[G.mapId].getTile(G.x,G.y);switch($){case D.actions.Enter:_=uw(_,w,F);break;case D.actions.Launch:_=K7(_,w,F);break;case D.actions.Shift:_=V7(_,w);break;case D.actions.Take:_=J7(_,w,G);break;case D.actions.Buy:_=Z7(_,w,G);break;case D.actions.Drop:_=Q7(_,w);break;case D.actions.Wait:break;default:}return _}function Q7(_,w){return fw(_,w)}function J7(_,w,J){let K=A_(_,J);for(let $ of K)if(_.components.pickupable[$]){let G=_.components.type[$]?.type;if(Q1(G)&&!J1(_,$)){_=_0(_,w,$);break}}return _}function Z7(_,w,J){let K=A_(_,J);for(let $ of K)if(_.components.pickupable[$]){if(J1(_,$)){_=_0(_,w,$);break}}return _}function Nw(_,w,J,K,$){let G=l_(_,J),j={...G,x:G.x+K,y:G.y+$};_=S_(_,J,j);let F=A_(_,j);for(let O of F)if(_.components.pickupable[O]){let T=_.components.type[O]?.type;if(T&&!Q1(T)&&!J1(_,O))_=_0(_,J,O)}let b=w.getTile(j.x,j.y),C=w.getPortal(j.x,j.y);if(b.name.startsWith("portal")&&C)_=uw(_,J,b,C);if(b.name.startsWith("move"))switch(b.name){case"movenorth":_=M_(_,J,0,-1);break;case"moveeast":_=M_(_,J,1,0);break;case"movesouth":_=M_(_,J,0,1);break;case"movewest":_=M_(_,J,-1,0);break;default:}return _}function uw(_,w,J,K){let $=l_(_,w),G=K||_.maps[$.mapId]?.getPortal($.x,$.y);if(!G)return _;if(w.startsWith("player"))_.currentMapId=G.mapId;let j=J;if(j.isSpace)_.lastSpacePositionByEntity[w]={mapId:$.mapId,x:$.x,y:$.y};else _.lastSpacePositionByEntity[w]=void 0,delete _.lastSpacePositionByEntity[w];let F={entityId:w,oldMapId:$.mapId,oldX:$.x,oldY:$.y,oldTileType:j,newMapId:G.mapId,newX:G.x,newY:G.y},b={...$,mapId:G.mapId,x:G.x,y:G.y};return _=S_(_,w,b),_=x_(_,0,F),_}function K7(_,w,J){let K=l_(_,w);if(_.lastSpacePositionByEntity[w]){if(w.startsWith("player"))_.currentMapId=_.lastSpacePositionByEntity[w].mapId;let $={entityId:w,oldMapId:K.mapId,oldX:K.x,oldY:K.y,oldTileType:J,newMapId:_.lastSpacePositionByEntity[w].mapId,newX:_.lastSpacePositionByEntity[w].x,newY:_.lastSpacePositionByEntity[w].y},G={...K,mapId:$.newMapId,x:$.newX,y:$.newY};_=S_(_,w,G),_._energyQueue.push({entityId:w,energyDelta:D.actions.Launch.energyDelta}),_.lastSpacePositionByEntity[w]=void 0,delete _.lastSpacePositionByEntity[w],_=x_(_,0,$)}return _}function V7(_,w){let J=A_(_,_.components.position[w]);for(let K of J){let $=_.components.trigger[K];if($&&$.type==0){if($.triggered=!$.triggered,_=i1(_,{triggerId:K,channel:$.channel,active:$.triggered,triggeredBy:w}),$.once)_._despawnQueue.push(K);_._energyQueue.push({entityId:w,energyDelta:D.actions.Shift.energyDelta})}}return _}function gw(_){let w=i_(_,_.currentMapId);for(let J=0;J<w.length;J++){let K=w[J];if(!_.components.energy[K])continue;let $=l_(_,K);if(!$)continue;let G=_.maps[$.mapId];if(!G)continue;let j=G.getTile($.x,$.y),F=j.energyDelta;if(j===D.tiles.chargepad&&C_(_,K,D.effects.Recharger))F*=2;else if(j===D.tiles.tree&&C_(_,K,D.effects.BioAbsorber))F=1;else if(j.isWater&&C_(_,K,D.effects.WaterImmunity))F=0;else if(j.isWater&&C_(_,K,D.effects.WaterShield))F/=2;else if(j===D.tiles.drain){let b=_.components.currency[K];if(b){let C=Math.min(b.gold,D.constants.DRAIN_GOLD_COST),O=Math.min(b.matter,D.constants.DRAIN_MATTER_COST);b.gold-=C,b.matter-=O}}if(F!==0)_._energyQueue.push({entityId:K,energyDelta:F})}return _}function hw(_,w){switch(w.oldTileType){case D.tiles.portalstartaerobot:_=L1(_,w.entityId,D.entities.AeroBot),_=n_(_,w.entityId,D.factions.Workers),_=w_(_,`Booting up as an ${D.entities.AeroBot.name}...`);break;case D.tiles.portalstartbugger:_=L1(_,w.entityId,D.entities.Bugger),_=n_(_,w.entityId,D.factions.Critters),_=w_(_,`Booting up as a ${D.entities.Bugger.name}...`);break;case D.tiles.portalstartcleaner:_=L1(_,w.entityId,D.entities.Cleaner),_=n_(_,w.entityId,D.factions.Guardians),_=w_(_,`Booting up as a ${D.entities.Cleaner.name}...`);break;case D.tiles.portalstartroborat:_=L1(_,w.entityId,D.entities.RoboRat),_=n_(_,w.entityId,D.factions.Critters),_=x_(_,2,{entityId:w.entityId,type:D.items.upgradeWaterImmunity}),_=w_(_,`Booting up as a ${D.entities.RoboRat.name}...`);break;case D.tiles.portalstartworkbot:_=L1(_,w.entityId,D.entities.WorkBot),_=n_(_,w.entityId,D.factions.Workers),_=w_(_,`Booting up as a ${D.entities.WorkBot.name}...`);break;default:}return _}function q7(_,w,J,K,$){let G=l_(_,J),j=G.x+K,F=G.y+$,b=w.getTile(j,F);return j>=0&&j<w.widthTiles&&F>=0&&F<w.heightTiles&&!b.isBlocking}function z7(_,w,J,K,$){let G=l_(_,J),j=G.x+K,F=G.y+$,b=w.getTile(j,F);return C_(_,J,D.effects.WallCrusher)&&b===D.tiles.wallweak||C_(_,J,D.effects.RockCrusher)&&b===D.tiles.rock}function $7(_,w,J,K,$){let G=l_(_,J),j=G.x+K,F=G.y+$,b=w.getTile(j,F);return C_(_,J,D.effects.Screwing)&&b===D.tiles.portalsewers}function mw(_){let w=X7(_),J=s();if(!_.entities[J])return _;let K=_.components.position[J];for(let $=0;$<w.length;$++){let G=w[$];if(J===G)continue;let j=_.components.ai[G],F=_.components.position[G];if(j._pathCache.playerX!==K.x||j._pathCache.playerY!==K.y||j._pathCache.entityX!==F.x||j._pathCache.entityY!==F.y)j._pathCache={};let b=Lw(K.x,K.y,F.x,F.y);if(G1(_,J,G)===2&&b<=j.aggroRange)if(j._pathCache.path)j.path=j._pathCache.path;else{let C=_.maps[_.currentMapId].asMovementMap(),O=bw(C,F.x,F.y,K.x,K.y);if(O){if(O=O.slice(1),O.length>b)O=null}j.path=O,j._pathCache={playerX:K.x,playerY:K.y,entityX:F.x,entityY:F.y,path:O}}}for(let $=0;$<w.length;$++){let G=w[$],j=_.components.ai[G];if(j.path){let F=j.path[0],b=_.components.position[G],C=F.x-b.x,O=F.y-b.y;_=M_(_,G,C,O)}}return _}function X7(_){let w=i_(_,_.currentMapId),J=[];for(let K=0;K<w.length;K++){let $=w[K];if(_.components.ai[$])J.push($)}return J}function lw(_,w){let J=8;switch(_){case D.ais.aggrorange:J=8;break;case D.ais.aggrorangeshort:J=2;break;case D.ais.guardian:J=1;break;case D.ais.interactenrage:J=2;break;default:}return{type:_,aggroRange:J,startPosition:{mapId:w.mapId,x:w.x,y:w.y},path:null,_pathCache:{}}}function Q0(_,w,J,K={}){let $=new a_(_,K.id).with("type",{type:w}).with("collision",{collides:!0}).with("currency",{gold:0,matter:0}).with("energy",{current:w.energyMax,max:w.energyMax}).with("interaction",{interactions:0,messages:[]}).with("position",{mapId:J.mapId,x:J.x,y:J.y});if(!l0(w))$.with("inventory",{inventory:[],max:K.inventoryMax??4});if(K.ai)$.with("ai",lw(K.ai,J));if(K.dialog)$.with("dialog",{dialog:K.dialog});if(K.faction)$.with("faction",{faction:K.faction});if(K.name)$.with("name",{name:K.name});let G=$.build();if(K.equippedItem)T1(_,G,K.equippedItem);if(K.equippedItems)for(let j of K.equippedItems)T1(_,G,j);return G}function m0(_,w,J,K,$=s(),G={}){return Y7(_,K,w,J,$,{faction:D.factions.Spirits,name:g.username||"Player",...G})}function Y7(_,w,J,K,$,G={}){return Q0(_,D.entities.Spirit,{mapId:w,x:J,y:K},{id:$,...G})}function Z1(_,w,J,K=w.gold,$=w.matter){return new a_(_).with("type",{type:w}).with("position",{mapId:J.mapId,x:J.x,y:J.y}).with("currency",{gold:K,matter:$}).with("energy",{current:w.energyDelta,max:w.energyDelta}).with("pickupable",{}).build()}function Aw(_,w,J){let K=D.items.junk;return Z1(_,K,J,K.gold,w)}function Ew(_,w,J,K,$){return Z1(_,w,J,K,$)}function cw(_,w,J){return new a_(_).with("position",w).with("trigger",J).build()}function pw(_,w,J){return new a_(_).with("position",w).with("actuator",J).build()}function j1(_,w){return new a_(_).with("trigger",w).build()}function R1(_,w){return new a_(_).with("actuator",w).build()}function m_(_,w){let J=_.components.position[w];if(J)dw(_,w,J.mapId,J.x,J.y);if(_.entities[w])_.entities[w]=void 0,delete _.entities[w];for(let K of Object.values(_.components))delete K[w];return _.effects[w]=void 0,delete _.effects[w],_}function S_(_,w,J){let K=_.components.position[w];if(K)dw(_,w,K.mapId,K.x,K.y);return _.components.position[w]={...J},U7(_,w,J.mapId,J.x,J.y),_}function U7(_,w,J,K,$){if(!_.cache.entitiesByMap[J])_.cache.entitiesByMap[J]=new Set;_.cache.entitiesByMap[J].add(w);let G=`${J},${K},${$}`;if(!_.cache.entitiesByLocation[G])_.cache.entitiesByLocation[G]=new Set;_.cache.entitiesByLocation[G].add(w)}function dw(_,w,J,K,$){if(_.cache.entitiesByMap[J])_.cache.entitiesByMap[J].delete(w);let G=`${J},${K},${$}`;if(_.cache.entitiesByLocation[G])_.cache.entitiesByLocation[G].delete(w)}function i_(_,w){let J=_.cache.entitiesByMap[w];if(J)return Array.from(J);return[]}function A_(_,w){let J=`${w.mapId},${w.x},${w.y}`,K=_.cache.entitiesByLocation[J];if(K)return Array.from(K);return[]}function Iw(_,w){for(let J=0;J<w.length;J++){let K=w[J],$=_.components.collision[K];if($&&$.collides)return K}return null}function L1(_,w,J){_.components.type[w]={type:J};let K=_.components.energy[w];if(K)K.current=J.energyMax,K.max=J.energyMax;let $=_.components.currency[w];if($)$.gold=0,$.matter=0;if(!u_(_,w)){let G={inventory:[],max:_.components.inventory[w]?.max??4};_.components.inventory[w]=G}return _.effects[w]={},_}function Tw(_,w,J){if(w===J)return _;let K=G1(_,w,J);if(K===1||K1(_,J)){if(_.components.dialog[J]?.dialog){let $=_.components.type[J]?.type,G=_.components.name[J]?.name?_.components.name[J].name:$.name;if(_=w_(_,G+": "+o1(_.components.dialog[J].dialog)),_.components.interaction[J])_.components.interaction[J].interactions++}}else if(K===2)_._combatQueue.push({entityId:w,otherEntityId:J});if(_.components.interaction[J]?.interactions>=3&&_.components.ai[J]?.type===D.ais.interactenrage)_=n_(_,J,D.factions.Enraged);return _}function K1(_,w){let J=_.components.type[w]?.type;return J===D.entities.Graffiticyan||J===D.entities.Graffitimagenta||J===D.entities.Graffitiyellow}function yw(_,w){return _.components.type[w]?.type instanceof z_}function l0(_){return _===D.entities.movableboulder||_===D.entities.movablebox}function u_(_,w){let J=_.components.type[w]?.type;return!!J&&l0(J)}function D1(_,w){let J={A:D.actions.Wait,B:D.actions.Wait,X:D.actions.Wait,Y:D.actions.Wait},K=_.components.energy[w];if(!!_.lastSpacePositionByEntity[w]&&(K&&K.current>Math.abs(D.actions.Launch.energyDelta)))J.A=D.actions.Launch;let $=_.components.position[w];if($){let G=_.maps[$.mapId];if(G){if(G.getPortal($.x,$.y))J.A=D.actions.Enter}let j=A_(_,$),F=0;for(let C of j){if(_.components.pickupable[C]){let S=_.components.type[C]?.type;if(J1(_,C)){if(Q1(S)){if(I1(_,w,C)&&h1(_,w)){J.Y=D.actions.Buy;break}}else if(I1(_,w,C)){J.Y=D.actions.Buy;break}}else if(Q1(S)){if(h1(_,w)){J.Y=D.actions.Take;break}}}let O=_.components.trigger[C];if(O&&O.type==0&&(K&&K.current>Math.abs(D.actions.Shift.energyDelta)))J.A=D.actions.Shift,F++;if(_.components.actuator[C])F++}if(t1(_,w).length>0&&j.length-F===1)J.Y=D.actions.Drop}return J}var E_={bot_bar:`!
!!id bot_bar
!!size 28 16
!!spawn 14 3 movablebox
!!spawn 14 12 movablebox
!!spawn 2 4 AeroBot faction=Workers dialog=bot_bar_aerobot_welcome
!!spawn 4 8 AeroBot faction=Workers dialog=bot_bar_aerobot_charger
!!spawn 10 7 AeroBot faction=Workers dialog=bot_bar_aerobot_backstage
!!spawn 21 3 AeroBot faction=Workers dialog=bot_bar_aerobot_spa_up
!!spawn 21 5 AeroBot faction=Workers dialog=bot_bar_aerobot_spa_down
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
################_____#______`,bot_dormitory_hidden:`!
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
####`,bot_dormitory:`!
!!id bot_dormitory
!!size 32 32
!!spawn 13 8 battery
!!spawn 4 11 AeroBot faction=Workers dialog=bot_dormitory_aerobot_up
!!spawn 23 27 AeroBot faction=Workers dialog=bot_dormitory_aerobot_down ai=interactenrage equip=shocker
!!spawn 8 18 WorkBot faction=Workers dialog=bot_dormitory_workbot_left ai=interactenrage
!!spawn 26 18 WorkBot faction=Workers dialog=bot_dormitory_workbot_right
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
##O##########################Q##`,bot_elevator:`!
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
_________##E###_________________`,bot_factory:`!
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
!!spawn 40 19 WorkBot faction=Workers dialog=bot_factory_workbot_wrench
!!spawn 15 18 WorkBot faction=Workers dialog=bot_factory_workbot_workwork
!!spawn 25 18 WorkBot faction=Workers dialog=bot_factory_workbot_assembly
!!spawn 43 29 WorkBot faction=Workers dialog=bot_factory_workbot_sewers
!!spawn 1 19 WorkBot faction=Workers dialog=bot_factory_workbot_drain
!!spawn 35 3 WorkBot faction=Workers name=ForeBot dialog=bot_factory_workbot_forebot equip=wrench ai=interactenrage
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
##O#############################################`,botmos_hull_selection:`!
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
!!3 _portalstartunknown bot_prison_armory 1 2
!!9 _portalstartunknown bot_station_spire_sewers 16 7
!!0 _portalstartunknown bugger_nest 6 3
!!? _portalstartunknown
!!D portal bot_station 0 29
!!spawn 6 7 _aToggleTile channel=unlocked_cleaner activate=portalstartcleaner deactivate=_portalstartunknown
!!spawn 6 16 _aToggleTile channel=unlocked_roborat activate=portalstartroborat deactivate=_portalstartunknown
!!spawn 3 17 _aToggleTile channel=unlocked_bugger activate=portalstartbugger deactivate=_portalstartunknown
##_____BotMos_____##
#_Choose_your_hull_#
#.================.#
#..................#
#.....2.....Manual.#
#..1........>.>.>..]
#..................#
#.....3............#
#..?...............#
#..................#
#.....?............#
#..?...............#
#..................#
#.....?............#
#..?...............#
#...........Credits#
#.....9.....>.>.>..[
#..0...............#
#~~~~~~~~~~~~~~~~~~#
#(##################`,bot_prison_armory:`!
!!id bot_prison_armory
!!size 16 5
!!spawn 7 3 battery
!!spawn 8 3 battery
!!spawn 9 3 battery
!!spawn 10 3 battery
!!spawn 11 3 battery
!!spawn 3 1 hammer
!!spawn 5 1 shocker
!!spawn 7 1 mop
!!# wall
!!s wallstatuecleaner
!!. void
!!= chargepad
!!~ water
!!D portalclosed bot_prison 19 0
!!/ leverleft
!!spawn 5 3 _tAction channel=bot_prison_armory_unlock
!!spawn 5 3 _aToggleTile channel=bot_prison_armory_unlock activate=leverright deactivate=leverleft
!!spawn 3 4 _aToggleTile channel=bot_prison_armory_unlock activate=portal deactivate=portalclosed
################
#=.............#
#=.............#
#=s.s/........~#
###D############`,bot_prison:`!
!!id bot_prison
!!size 48 34
!!spawn 18 11 Cleaner faction=Guardians ai=aggrorange
!!spawn 17 2 Cleaner faction=Guardians ai=aggrorange
!!spawn 24 5 Cleaner faction=Guardians ai=aggrorange
!!spawn 29 24 Cleaner faction=Guardians ai=aggrorangeshort
!!spawn 34 22 AeroBot faction=Workers dialog=bot_prison_aerobot
!!spawn 9 22 WorkBot faction=Workers dialog=bot_prison_workbot
!!spawn 28 1 mop
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
!!D portalclosed bot_prison_armory 3 4
!!/ leverleft
!!O portal bot_station 26 7
!!Q portal
!!P portal
!!R portal
!!§ portalsewers bot_station_sewers 27 6
!!spawn 19 0 _aToggleTile channel=bot_prison_armory_unlock activate=portal deactivate=portalclosed
!!spawn 29 25 _tAction channel=bot_prison_cells
!!spawn 29 25 _aToggleTile channel=bot_prison_cells activate=leverright deactivate=leverleft
!!spawn 3 23 _aToggleTile channel=bot_prison_cells activate=portal deactivate=portalclosed
!!spawn 7 23 _aToggleTile channel=bot_prison_cells activate=portal deactivate=portalclosed
!!spawn 12 23 _aToggleTile channel=bot_prison_cells activate=portal deactivate=portalclosed
!!spawn 3 28 _aToggleTile channel=bot_prison_cells activate=portal deactivate=portalclosed
!!spawn 7 28 _aToggleTile channel=bot_prison_cells activate=portal deactivate=portalclosed
!!spawn 12 28 _aToggleTile channel=bot_prison_cells activate=portal deactivate=portalclosed
!!spawn 35 23 _aToggleTile channel=bot_prison_cells activate=portal deactivate=portalclosed
!!spawn 40 23 _aToggleTile channel=bot_prison_cells activate=portal deactivate=portalclosed
!!spawn 44 23 _aToggleTile channel=bot_prison_cells activate=portal deactivate=portalclosed
!!spawn 35 28 _aToggleTile channel=bot_prison_cells activate=portal deactivate=portalclosed
!!spawn 40 28 _aToggleTile channel=bot_prison_cells activate=portal deactivate=portalclosed
!!spawn 44 28 _aToggleTile channel=bot_prison_cells activate=portal deactivate=portalclosed
________________###D############________________
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
#..............######,#######/###..............#
#..............##_###,#_____#####..............#
#..............##_###,#________##..............#
#++C+++C++++C++##_#,,,#________##++C++++C+++C++#
#....#....#....##_#,###________##....#....#....#
#~...#~...#...~##_#,###________#§~...#...~#...~#
##,####,#####,#####,##############,#####,####,##
_#,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,#_
_##############################################_`,bot_stadium:`!
!!id bot_stadium
!!size 48 16
!!spawn 26 2 WorkBot faction=Workers dialog=bot_stadium_botracing
!!spawn 22 4 upgradeRecuperation
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
#############################################O##`,bot_station_sewers:`!
!!id bot_station_sewers
!!size 32 32
!!spawn 25 17 upgradeBioAbsorber
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
##############################z#`,bot_station_spire_sewers:`!
!!id bot_station_spire_sewers
!!size 32 16
!!. void
!!_ voidtrue
!!# wall
!!w wallweak
!!~ watersewage
!!, wall ,
!!| wall |
!!( wall (
!!) wall )
!!: wall :
!!+ wall +
!!C portal bot_station_sewers 15 5
!!D portal bot_station_sewers 16 5
!!spawn 29 9 wrench
_______________##_______________
____________###ww###____________
________####,())++((####________
____####|:,,)(++:|)++,|:####____
####+(:,,)|(|||:+):(+:((+)(+####
#+:)|+:)|:++(,+(:,,:)|,()),||+:#
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
####~~~~~~~~~~~~~~~~~~~~~~~~####
____####~~~~~~~~~~~~~~~~####____
________####~~~~~~~~####________
____________###CD###____________
_______________##_______________`,bot_station_spire:`!
!!id bot_station_spire
!!size 32 16
!!. void
!!_ voidtrue
!!# wall
!!w wallweak
!!* drain
!!, wall ,
!!| wall |
!!( wall (
!!) wall )
!!: wall :
!!+ wall +
!!C portal bot_station 15 4
!!D portal bot_station 16 4
!!spawn 16 7 RichBot faction=Workers ai=interactenrage equip=hammer dialog=bot_station_spire_richbot
!!spawn 12 7 energy
!!spawn 12 9 energy
!!spawn 12 11 energy
!!spawn 12 13 energy
!!spawn 19 7 energy
!!spawn 19 9 energy
!!spawn 19 11 energy
!!spawn 19 13 energy
!!spawn 5 2 Bugger faction=Critters
!!spawn 21 1 Bugger faction=Critters
_______________##_______________
____________###ww###____________
________####,())++((####________
____####|:,,)(++:|)++,|:####____
####+(:,,)|(|||:+):(+:((+)(+####
#+:)|+:)|:++(,+(:,,:)|,()),||+:#
#..............................#
#...........w......w...........#
#..............................#
#...........w..**..w...........#
#.............****.............#
####........w.****.w........####
____####......****......####____
________####w.****.w####________
____________###CD###____________
_______________##_______________`,bot_station:`!
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
!!spawn 8 3 Pioneer name=Kard faction=Guardians ai=aggrorangeshort equip=hammer dialog=bot_station_pioneer
!!spawn 9 16 Graffiticyan dialog=bot_station_graffiti_statues
!!spawn 27 17 Graffitimagenta dialog=bot_station_graffiti
!!spawn 18 3 Graffitiyellow dialog=bot_station_graffiti_gold
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
!!C portalclosed bot_station_spire 15 14
!!D portalclosed bot_station_spire 16 14
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
!!spawn 15 4 _aToggleTile channel=botmos_win_condition activate=portal deactivate=portalclosed
!!spawn 16 4 _aToggleTile channel=botmos_win_condition activate=portal deactivate=portalclosed
#w##############################
#~..########################..~r
#.......################.......#
#...........########...........#
#...####.++....CD........####..#
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
##############################z#`,bugger_nest:`!
!!id bugger_nest
!!size 12 10
!!. void
!!_ voidtrue
!!# wall
!!w wallweak
!!O portal bot_station 15 5
!!P portal bot_station 16 5
!!spawn 3 2 battery
!!spawn 3 3 battery
!!spawn 10 2 battery
!!spawn 10 3 battery
!!spawn 1 6 upgradeBioAbsorber
!!spawn 7 6 shocker
!!spawn 8 6 trident
!!spawn 9 6 hammer
!!spawn 10 6 pickaxe
!!spawn 3 6 Bugger name=Cloud faction=Critters dialog=bugger_nest_cloud
############
#..........#
#..w......w#
#..w......w#
#..........#
#..........#
#..........#
#####OP#####
__#_#__#_#__
__#_#__#_#__`,credits:`!
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
################################################################################`,dungeon_entrance_4diverters:`!
!!size 4 4
!!exitn 1 2
!!exite 1 2
!!exits 1 2
!!exitw 1 2
!!. void
!!# wall
#..#
....
....
#..#`,launcher:`!
!!size 16 10
!!exite 7 8
!!exits 14 14
!!exitw 7 8
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
##=##=########.#`,manual:`!
!!id manual
!!size 80 54
!!spawn 2 4 SageBot faction=Spirits name=BotMoses dialog=manual_botmoses
!!spawn 4 26 Spirit faction=Spirits dialog=manual_spirit
!!spawn 4 27 AeroBot faction=Spirits dialog=manual_aerobot
!!spawn 4 28 WorkBot faction=Spirits dialog=manual_workbot
!!spawn 4 29 Cleaner faction=Spirits dialog=manual_cleaner
!!spawn 4 30 Pioneer faction=Spirits dialog=manual_pioneer equip=hammer ai=interactenrage
!!spawn 54 36 Spirit faction=Critters ai=aggrorange
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
#^..BOTS......enemies_are_orange..............................................^#
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
#^..+.Gold,_precious_shiny,_you_are_not_worthy................................^#
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
################################################################################`,playground_trigger:`!
!!id playground_trigger
!!size 20 24
!!. void
!!# wall
!!= chargepad
!!~ water
!!l leverleft
!!r leverright
!!O portal playground 19 1
!!P portalclosed botmos_hull_selection 1 19
!!spawn 8 1 _tAction channel=hull_selection_portal
!!spawn 8 0 _aToggleTile channel=hull_selection_portal activate=portal deactivate=portalclosed
!!spawn 8 1 _aToggleTile channel=hull_selection_portal activate=leverright deactivate=leverleft
!!spawn 11 1 _tAction channel=playground_portal triggered=true
!!spawn 0 1 _aToggleTile channel=playground_portal triggered=true activate=portal deactivate=portalclosed
!!spawn 11 1 _aToggleTile channel=playground_portal activate=leverright deactivate=leverleft
########P###########
O=......l..r.......#
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
#..................#
#..................#
#..................#
#..................#
#..................#
#..................#
#~~~~~~~~~~~~~~~~~~#
#~~~~~~~~~~~~~~~~~~#
#~~~~~~~~~~~~~~~~~~#
#~~~~~~~~~~~~~~~~~~#
####################`,playground:`!
!!id playground
!!size 20 24
!!spawn 9 9 movableboulder
!!spawn 10 9 movableboulder
!!spawn 9 17 cheat
!!spawn 9 15 upgradeBioAbsorber
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
!!* drain
!!~ water
!!D portal gen:dungeon=1337 31 31
!!V portal overworld=42 0 0
!!O portal botmos_hull_selection 1 19
!!Q portal solarsystem=1337 448 448
!!P portal solarsystem=1337 30 17
!!R portal playground_trigger 0 1
!!spawn 19 1 _aToggleTile channel=playground_portal triggered=true activate=portal deactivate=portalclosed
#O##################
#*====.............R
#====.......#D..Q#.#
#===...............#
#==................#
#=..........#V..P#.#
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
####################`,shop_instance:`!
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
################################################`,space_bot_station:`!
!!size 3 4
!!_ voidtrue
!!# wall
!!O portal station 0 0
###
###
###
_O_`,square_falcon:`!
!!size 7 6
!!_ voidtrue
!!# wall
!!+ wallweak
!!O portalclosed
######_
#######
####O__
#######
######_
__#+___`,vincent_rocket:`!
!!size 3 10
!!_ voidtrue
!!# wall
!!+ wallweak
!!O portalclosed
_+_
_+_
_#_
###
###
###
###
###
#O#
#_#`};function nw(_){let w=_._despawnQueue;_._despawnQueue=[];for(let J=0;J<w.length;J++)_=m_(_,w[J]);return _}function ow(_){return _}class c_{mapId;x;y;entityName;options;constructor(_,w,J,K,$={}){this.mapId=_,this.x=w,this.y=J,this.entityName=K,this.options=$}}function k_(_,w){if(rw(w.entityName)){let J=w.options,K=Object.hasOwn(J,"ai")?D.ais[J.ai]:void 0,$=Object.hasOwn(J,"dialog")?J.dialog:void 0,G=Object.hasOwn(J,"equip")&&c0(J.equip)?D.items[J.equip]:null,j=Object.hasOwn(J,"faction")?D.factions[J.faction]:void 0,F=Object.hasOwn(J,"name")?J.name:void 0,b=D.entities[w.entityName];Q0(_,b,{mapId:w.mapId,x:w.x,y:w.y},{ai:K,dialog:$,equippedItem:G,faction:j,name:F})}else if(c0(w.entityName)){let J={mapId:w.mapId,x:w.x,y:w.y};Z1(_,D.items[w.entityName],J)}else if(B7(w.entityName)){let J=w.options,K={mapId:w.mapId,x:w.x,y:w.y},$=D.triggersandactuators[w.entityName],G=Object.hasOwn(J,"channel")?J.channel:void 0,j=Object.hasOwn(J,"triggered")?J.triggered.toLowerCase()==="true":!1,F=Object.hasOwn(J,"once")?J.once.toLowerCase()==="true":!1;cw(_,K,{type:$,channel:G,triggered:j,once:F})}else if(G7(w.entityName)){let J=w.options,K={mapId:w.mapId,x:w.x,y:w.y},$=D.triggersandactuators[w.entityName],G=Object.hasOwn(J,"channel")?J.channel:void 0,j=Object.hasOwn(J,"activate")?D.tiles[J.activate]:void 0,F=Object.hasOwn(J,"deactivate")?D.tiles[J.deactivate]:void 0,b=Object.hasOwn(J,"spawn")?J.spawn:void 0,C=void 0;if(rw(b))C=D.entities[b];else if(c0(b))C=D.items[b];pw(_,K,{type:$,channel:G,activate:j,deactivate:F,spawn:C})}return _}function rw(_){return Object.hasOwn(D.entities,_)}function c0(_){return Object.hasOwn(D.items,_)}function B7(_){return Object.hasOwn(D.triggersandactuators,_)&&_.startsWith("_t")}function G7(_){return Object.hasOwn(D.triggersandactuators,_)&&_.startsWith("_a")}function sw(_){for(let w in E_){let J=p_(E_[w]);if(!J.isSnippet()){_.maps[w]=J;for(let K of J._spawnCommands)_=k_(_,K);J._spawnCommands=[]}}return _}function aw(_,w){let J=i_(_,w);for(let K=0;K<J.length;K++){let $=J[K];_=m_(_,$)}return _.maps[w]=void 0,delete _.maps[w],_}class F_{id;widthTiles;heightTiles;seed;_tiles;_initialTiles;_portals;entropy;_cacheMovementMap;_spawnCommands;constructor(_,w,J,K=[]){if(this.id=_,this.widthTiles=w,this.heightTiles=J,this.seed=null,this._tiles=new s1(w,J,D.tiles.voidtrue),this._initialTiles=new s1(w,J,D.tiles.voidtrue),this._portals={},K.length>0)for(let $=0;$<J;$++)for(let G=0;G<w;G++){let j=K[$*w+G];if(j){let F=j.type?j.type:j;if(this._tiles.set(G,$,F),this._initialTiles.set(G,$,F),j.options&&j.options.mapId!==void 0)this.setPortal(G,$,{mapId:j.options.mapId,x:Number(j.options.x),y:Number(j.options.y)})}}this.entropy=0,this._cacheMovementMap=null,this._spawnCommands=[]}getPortal(_,w){return this._portals[`${_},${w}`]}setPortal(_,w,J){this._portals[`${_},${w}`]={...J}}deletePortal(_,w){delete this._portals[`${_},${w}`]}hasPortal(_,w){return`${_},${w}`in this._portals}getPortals(){return this._portals}getTile(_,w){return this._tiles.get(_,w)||D.tiles.voidtrue}setTile(_,w,J,K){this._cacheMovementMap=null;let $=this._tiles.get(_,w);if(this._tiles.set(_,w,J),K&&K.mapId!==void 0&&K.x!==void 0&&K.y!==void 0)this.setPortal(_,w,{mapId:K.mapId,x:Number(K.x),y:Number(K.y)});return $}resetEntropy(){for(let _=0;_<this.heightTiles;_++)for(let w=0;w<this.widthTiles;w++){let J=this._tiles.get(w,_);if(J)this._initialTiles.set(w,_,J)}this.entropy=0}pasteOnto(_,w=0,J=0){for(let K=0;K<_.heightTiles;K++)for(let $=0;$<_.widthTiles;$++){let G=_.getTile($,K);if(G!==D.tiles.voidtrue){this.setTile($+w,K+J,G);let j=_.getPortal($,K);if(j)this.setPortal($+w,K+J,j)}}return this}circular(){let _=Math.floor(Math.min(this.widthTiles,this.heightTiles)/2);for(let w=-_;w<=_;w++)for(let J=-_;J<=_;J++)if(J*J+w*w>=_*_){let K=J+_-1,$=w+_-1;this.setTile(K,$,D.tiles.voidtrue),this.deletePortal(K,$)}return this}sample(_,w){let J=Math.floor(this.widthTiles/_),K=Math.floor(this.heightTiles/w),$=new F_("__sampled_"+_+"_"+w+"_"+this.id,_,w);for(let G=0;G<w;G++)for(let j=0;j<_;j++){let F={};for(let S=0;S<K;S++)for(let I=0;I<J;I++){let p=this.getTile(j*J+I,G*K+S);if(F[p.name])F[p.name]+=1;else F[p.name]=1}let b="",C=0;for(let[S,I]of Object.entries(F))if(I>C)b=S,C=I;let O="space"+b,T=D.tiles[O]||D.tiles.spacevoid;$.setTile(j,G,T),$.setPortal(j,G,{mapId:this.id,x:j*J,y:G*K})}return $}asMovementMap(){if(this._cacheMovementMap)return this._cacheMovementMap;let _=Array(this.heightTiles);for(let w=0;w<this.heightTiles;w++){_[w]=Array(this.widthTiles);for(let J=0;J<this.widthTiles;J++){let K=this._tiles.get(J,w);if(_[w][J]=0,K&&K.isBlocking)_[w][J]=1}}return this._cacheMovementMap=_,_}isSnippet(){return this.id===void 0||this.id===null||this.id===""}static createEmptyMap(_,w,J){let K=[];for(let G=0;G<_*w;G++)K.push(J);return new F_(null,_,w,K)}}function p_(_){let w=_.split(/\r?\n/),J=_[0],K="",$=0,G=0,j={},F=[],b=[],C=0,O={};for(let S=0;S<w.length;S++){let I=w[S];if(I.startsWith(J)){if(I.startsWith(J+"!id"))K=I.slice(5);else if(I.startsWith(J+"!size")){let p=I.split(" ").slice(1);$=Number(p[0]),G=Number(p[1])}else if(I.startsWith(J+"!spawn")){let p=I.split(" ").slice(1),t={};if(p.length>3){let r=p.slice(3);for(let J_ of r){let Z_=J_.split("=");t[Z_[0]]=Z_[1]}}F.push(new c_(K,Number(p[0]),Number(p[1]),p[2],t))}else if(I.startsWith(J+"!")){let p=I[2],t=I.slice(4);j[p]=t}}else{for(let p=0;p<I.length;p++){let t=I[p],r=j[t];if(g.debug&&!r)console.log("DEBUG Broken map: "+K);let J_=r.split(" "),Z_;if(r.startsWith("portal ")||r.startsWith("portalclosed ")||r.startsWith("portalhidden ")||r.startsWith("portalsewers ")||r.startsWith("portallauncher ")||r.startsWith("portalstart")||r.startsWith("_portalstart")){let U_=J_[0];if(Z_=D.tiles[U_],J_.length===4)O[`${p},${C}`]={mapId:J_[1],x:Number(J_[2]),y:Number(J_[3])}}else if(r.startsWith("wall ")&&J_.length>=2)Z_=Hw(J_[1]);else if(r.startsWith("terminal "))Z_=D.tiles.terminal;else Z_=D.tiles[r];b.push(Z_)}C++}}let T=new F_(K,$,G,b);T._spawnCommands=F;for(let[S,I]of Object.entries(O)){let[p,t]=S.split(",").map(Number);T.setPortal(p,t,I)}return T}var tw=S0(Z0(),1);class O_{seed;_rotRng;constructor(_=1337){this.seed=_,this._rotRng=tw.RNG.clone(),this._rotRng.setSeed(_)}getPercentage(){return this._rotRng.getPercentage()}getItem(_){return this._rotRng.getItem(_)}}function _6(_,w=1337,J=64,K=4096){let $=F_.createEmptyMap(J,J,D.tiles.wall),G=new O_(w),j=J/2-1,F={x:j,y:j};$.setTile(F.x,F.y,D.tiles.void);for(let b=0;b<K;b++){switch(G.getItem([0,1,2,3])){case 0:F=K0(F,0,-1,J);break;case 1:F=K0(F,1,0,J);break;case 2:F=K0(F,0,1,J);break;case 3:F=K0(F,-1,0,J);break}$.setTile(F.x,F.y,D.tiles.void)}return $.id=`gen:dungeon=${w}`,_.maps[$.id]=$,_}function K0(_,w,J,K){return{x:Math.max(0,Math.min(K-1,_.x+w)),y:Math.max(0,Math.min(K-1,_.y+J))}}function w6(_,w){if(w?.newMapId?.startsWith("gen:dungeon")){let J=w?.newMapId,K=Number(J?.split("=").at(-1));if(_=_6(_,K),w.entityId.startsWith("player"))_.currentMapId=J;_=S_(_,w.entityId,{mapId:J,x:w.newX,y:w.newY})}return _}function Q6(_,w){if(w.seed===1337)_=k_(_,new c_(w.id,130,127,"Valkyrie",{faction:"Spirits"})),_=k_(_,new c_(w.id,124,127,"Valkyrie",{faction:"Spirits"})),_=k_(_,new c_(w.id,127,130,"trident"));else{let J=new O_(w.seed);for(let K=0;K<w.heightTiles;K++)for(let $=0;$<w.widthTiles;$++){let G=w.getTile($,K);if(J.getPercentage()<=1&&(G===D.tiles.void||G===D.tiles.tree)){let j=J.getItem(["Pioneer","Deviant","junk","matter","junk","matter"]);switch(j){case"Deviant":case"Pioneer":_=k_(_,new c_(w.id,$,K,j,{faction:"Pyrates",ai:"aggrorange"}));break;case"junk":case"matter":_=k_(_,new c_(w.id,$,K,j));break}}}}return _}var V0=S0(Z0(),1);var L7=1337,J6=55;function Z6(_,w=L7){V0.RNG.setSeed(w);let J=new V0.Noise.Simplex,K=256,$=256,G=[];for(let b=0;b<$;b++)for(let C=0;C<K;C++){let O=J.get(C/J6,b/J6),T;if(O<=-0.5)T=D.tiles.water;else if(O<=0)T=D.tiles.void;else if(O<0.5)T=D.tiles.tree;else T=D.tiles.rock;G.push(T)}let j="simplex="+w,F=new F_(j,K,$,G);return F.seed=w,_.maps[j]=F,_}var D7=1337;function K6(_,w=D7){let J=F_.createEmptyMap(1024,1024,D.tiles.void);J.id="solarsystem="+w,_.maps[J.id]=J;let K=new O_(w),$=new O_(w),G=K.getItem([2,3,4,5,6,7,8,9,10,11,12]),j=128,F=512-j,b=Math.floor(F/G);J=j7(J,K);let C=F_.createEmptyMap(128,128,D.tiles.voidtrue);R7(C,63,63,62,D.tiles.star),F7(C,63,63,D.tiles.star),J.pasteOnto(C,448,448);for(let t=j;t<512;t+=b){let r=K.getItem([-1,1])*K.getItem(W1(t)),J_=K.getItem([-1,1])*Math.floor(Math.sqrt(t*t-r*r));r+=512,J_+=512;let Z_=K.getItem([16,24,32]),U_=Math.floor(Z_/2)-1;_=Z6(_,w);let X_=_.maps["simplex="+w],A=E_.launcher;A=A.replace("!!O portallauncher space 0 0",`!!O portallauncher ${J.id} ${r} ${J_}`);let h=p_(A),m=$.getItem(W1(X_.widthTiles-h.widthTiles)),c=$.getItem(W1(X_.heightTiles-h.heightTiles));X_.pasteOnto(h,m,c),_=Q6(_,X_);let o=X_.sample(Z_,Z_).circular();J.pasteOnto(o,r-(U_+1),J_-(U_+1)),w++}let O=E_.space_bot_station;O=O.replace("!!O portal station 0 0","!!O portal bot_elevator 11 47");let T=p_(O);J.pasteOnto(T,583,398);let S=p_(E_.square_falcon);J.pasteOnto(S,590,373);let I=p_(E_.vincent_rocket);J.pasteOnto(I,512,430);let p=p_(E_.vincent_rocket);return J.pasteOnto(p,520,432),_}function j7(_,w){for(let J=0;J<_.heightTiles;J++)for(let K=0;K<_.widthTiles;K++)if(w.getPercentage()<=1)_.setTile(K,J,w.getItem([D.tiles.spacevoidstarwhite,D.tiles.spacevoidstaryellow]));return _}function R7(_,w,J,K,$){let G=1-K,j=1,F=-2*K,b=0,C=K;_.setTile(w,J+K,$),_.setTile(w,J-K,$),_.setTile(w+K,J,$),_.setTile(w-K,J,$);while(b<C){if(G>=0)C-=1,F+=2,G+=F;b+=1,j+=2,G+=j,_.setTile(w+b,J+C,$),_.setTile(w-b,J+C,$),_.setTile(w+b,J-C,$),_.setTile(w-b,J-C,$),_.setTile(w+C,J+b,$),_.setTile(w-C,J+b,$),_.setTile(w+C,J-b,$),_.setTile(w-C,J-b,$)}return _}function F7(_,w,J,K){let{widthTiles:$,heightTiles:G}=_,j=[];j.push({x:w,y:J});let F=void 0;while(typeof(F=j.shift())<"u"){let b=F,C=F;if(F.x+1<$)C={x:F.x+1,y:F.y};while(_.getTile(b.x,b.y)!==K){if(_.setTile(b.x,b.y,K),b.y+1<G){if(_.getTile(b.x,b.y+1)!==K)j.push({x:b.x,y:b.y+1})}if(b.y-1>=0){if(_.getTile(b.x,b.y-1)!==K)j.push({x:b.x,y:b.y-1})}if(b.x-1>=0)b.x-=1;else break}while(_.getTile(C.x,C.y)!==K){if(_.setTile(C.x,C.y,K),C.y+1<G){if(_.getTile(C.x,C.y+1)!==K)j.push({x:C.x,y:C.y+1})}if(C.y-1>=0){if(_.getTile(C.x,C.y-1)!==K)j.push({x:C.x,y:C.y-1})}if(C.x+1<$)C.x+=1;else break}}return _}function V6(_,w){if(w?.oldMapId?.startsWith("shop_instance")){_=aw(_,w.oldMapId);let J=_.maps[w.newMapId],K=J.getTile(w.newX,w.newY);J.setTile(w.newX,w.newY,K,{mapId:"shop_instance",x:w.oldX,y:w.oldY})}if(w?.newMapId?.startsWith("shop_instance")){let J=p_(E_.shop_instance);if(J.id="shop_instance_"+w.oldMapId+"_"+w.entityId,J.setTile(w.newX,w.newY,D.tiles.portal,{mapId:w.oldMapId,x:w.oldX,y:w.oldY}),_.maps[w.oldMapId].setTile(w.oldX,w.oldY,w.oldTileType,{mapId:J.id,x:w.newX,y:w.newY}),w.entityId.startsWith("player"))_.currentMapId=J.id;if(_=S_(_,w.entityId,{mapId:J.id,x:w.newX,y:w.newY}),delete _.maps.shop_instance,_.maps[J.id]=J,_=g1(_,D.items.hammer,{mapId:J.id,x:4,y:4},0,-200),_=g1(_,D.items.pickaxe,{mapId:J.id,x:4,y:6},0,-200),_=g1(_,D.items.battery,{mapId:J.id,x:4,y:8},0,-200),_=g1(_,D.items.gold,{mapId:J.id,x:4,y:10},1,-1e4),_=k_(_,{mapId:J.id,x:6,y:2,entityName:"AeroBot",options:{faction:B1(_,w.entityId).name,dialog:"shop_instance_shopkeeper",name:"Shopkeeper"}}),w?.oldMapId.startsWith("bot_stadium"))_=k_(_,{mapId:J.id,x:1,y:12,entityName:"WorkBot",options:{faction:B1(_,w.entityId).name,dialog:"shop_instance_workbot_shopper"}});else if(w?.oldMapId.startsWith("bot_bar"))_=k_(_,{mapId:J.id,x:4,y:11,entityName:"AeroBot",options:{faction:B1(_,w.entityId).name,dialog:"shop_instance_aerobot_shopper"}})}return _}var b7=["actuator","ai","collision","currency","dialog","energy","faction","interaction","inventory","name","pickupable","position","trigger","type"];function q6(){let _={};for(let w of b7)_[w]={};return _}function z6(){return{_combatQueue:[],_despawnQueue:[],_energyQueue:[],_eventSubscribers:{},_idManager:{nextId:1,usedIds:new Set,freeIds:[]},_menuOpen:!0,_uploadNow:!1,actionLog:[],chatLog:[],currentMapId:"",cache:{entitiesByMap:{},entitiesByLocation:{}},effects:{},entities:{},lastSpacePositionByEntity:{},maps:{},rng:new O_,statistics:{},components:q6()}}function $6(_){let w=_._combatQueue;_._combatQueue=[];for(let J=0;J<w.length;J++){let K=w[J],$=-1,G=-5,j=Ow(_,K.entityId);if(j){if($=j.energyCost,C_(_,K.entityId,D.effects.Recuperation))$=Math.min(-1,$+1);G=-1*Math.abs(j.damage)}_._energyQueue.push({entityId:K.entityId,energyDelta:$}),_._energyQueue.push({entityId:K.otherEntityId,energyDelta:G});let{entityId:F,otherEntityId:b}=K,C=_.components.type[F]?.type,O=_.components.type[b]?.type,T=_.components.name[F]?.name?_.components.name[F].name:C.name,S=_.components.name[b]?.name?_.components.name[b].name:O.name;_=w_(_,`${T} did ${Math.abs(G)} damage to ${S} at cost of ${Math.abs($)} energy.`)}return _}function X6(_){let w=_._energyQueue;_._energyQueue=[];let J=new Set;for(let K=0;K<w.length;K++){let $=w[K],G=!!_.entities[$.entityId],j=_.components.energy[$.entityId];if(G&&j&&!yw(_,$.entityId)){if(j.current=Math.min(j.current+$.energyDelta,j.max),j.current<=0)J.add($.entityId)}}for(let K of J){let $=_.components.type[K]?.type,G=_.components.position[K],j=_.components.energy[K];_._despawnQueue.push(K);let F=_.components.name[K]?.name?_.components.name[K].name:$.name;if(!u_(_,K)&&!K1(_,K)){let b=Math.max(1,Math.floor(j.max/3));_=kw(_,b,G),_=w_(_,`${F} destroyed leaving behind Junk.`)}else _=w_(_,`${F} destroyed.`);if(_=P_(_,s(),4,1),$)switch($){case D.entities.Graffiticyan:case D.entities.Graffitimagenta:case D.entities.Graffitiyellow:_=P_(_,s(),6,1);break;case D.entities.RoboRat:_=P_(_,s(),7,1);break}if(_.components.name[K]?.name)_=P_(_,s(),5,1);if(K===s()){let b=e1(_,K);_=w_(_,`Game over! ${b} turns.`),_=P_(_,K,1,1)}}return _}function Y6(_){return _=mw(_),_=$6(_),_=gw(_),_=X6(_),_=Fw(_),_=nw(_),_=ow(_),_}class U6{p=[];constructor(_){this.p=Array(512);let w=Array(256);for(let K=0;K<256;K++)w[K]=K;let J=new O_(_);for(let K=255;K>0;K--){let $=J.getItem(W1(K+1));[w[K],w[$]]=[w[$],w[K]]}for(let K=0;K<256;K++)this.p[K]=this.p[K+256]=w[K]}fade(_){return _*_*_*(_*(_*6-15)+10)}lerp(_,w,J){return w+_*(J-w)}grad(_,w,J,K){let $=_&15,G=$<8?w:J,j=$<4?J:$===12||$===14?w:K;return(($&1)===0?G:-G)+(($&2)===0?j:-j)}noise(_,w,J){let K=Math.floor(_)&255,$=Math.floor(w)&255,G=Math.floor(J)&255;_-=Math.floor(_),w-=Math.floor(w),J-=Math.floor(J);let j=this.fade(_),F=this.fade(w),b=this.fade(J),C=this.p[K]+$,O=this.p[C]+G,T=this.p[C+1]+G,S=this.p[K+1]+$,I=this.p[S]+G,p=this.p[S+1]+G;return(this.lerp(b,this.lerp(F,this.lerp(j,this.grad(this.p[O],_,w,J),this.grad(this.p[I],_-1,w,J)),this.lerp(j,this.grad(this.p[T],_,w-1,J),this.grad(this.p[p],_-1,w-1,J))),this.lerp(F,this.lerp(j,this.grad(this.p[O+1],_,w,J-1),this.grad(this.p[I+1],_-1,w,J-1)),this.lerp(j,this.grad(this.p[T+1],_,w-1,J-1),this.grad(this.p[p+1],_-1,w-1,J-1))))+1)/2}}class d0{width;height;seed;constructor(_,w,J){this.width=_,this.height=w,this.seed=J}generate(_,w){let J=new U6(this.seed),K=[],$=D.tiles.void,G=D.tiles.water,j=D.tiles.tree,F=D.tiles.rock;for(let b=0;b<this.height;b++)for(let C=0;C<this.width;C++){let O=C/this.width*5-2.5,T=b/this.height*5-2.5,S=this.getOctaveNoise(J,O,T,0,4,0.5);S=(S-0.5)*2+0.5,S=Math.max(0,Math.min(1,S));let I;if(S<0.25)I=G;else if(S<0.5)I=$;else if(S<0.75)I=j;else I=F;K.push(I)}return new F_(_,this.width,this.height,K)}getOctaveNoise(_,w,J,K,$,G){let j=0,F=1,b=1,C=0;for(let O=0;O<$;O++)j+=_.noise(w*F,J*F,K*F)*b,C+=b,b*=G,F*=2;return j/C}}var v7=42;function B6(_,w=v7){let K=new d0(256,256,w).generate("overworld="+w,"Overworld");return _.maps[K.id]=K,_}function G6(_,w){let J=_.components.position[w];if(g.debug&&!!J)return`DEBUG: ${w} at ${J.mapId},${J.x},${J.y}`;return""}async function y0(_){let w=P7(_);return fetch(g.leaderboardUploadUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w)})}function P7(_){return{username:g.username,passwordHash:g.passwordHash,clientRunId:g.clientRunId,actionLog:_.actionLog.join(""),version:g.version}}var C7=1,F1=[],q1=null;function M7(){if(typeof document>"u")return null;if(!q1){if(q1=document.getElementById("uisyslog"),!q1)q1=document.createElement("div"),q1.id="uisyslog",document.body.appendChild(q1)}return q1}function W6(){let _=M7();if(!_)return;let w=F1.slice(-3);_.innerHTML="";for(let J of w){let K=document.createElement("div");K.textContent=J.text,_.appendChild(K)}}function $_(_){let w=C7++,J=setTimeout(()=>{k7(w)},5000);F1.push({id:w,text:_,timerId:J});while(F1.length>3){let K=F1.shift();if(K&&K.timerId)clearTimeout(K.timerId)}W6()}function k7(_){let w=F1.findIndex((J)=>J.id===_);if(w!==-1){let[J]=F1.splice(w,1);if(J&&J.timerId)clearTimeout(J.timerId);W6()}}function f7(_,w){_._menuOpen=!0,_=w_(_,"?: Prints this help."),_=w_(_,"M/Gamepad Start: Hide/show log.");let J=D1(_,w);_=w_(_,`1/E/Gamepad A: ${J.A.name}`),_=w_(_,`2/Q/Gamepad B: ${J.B.name}`),_=w_(_,`3/X/Gamepad X: ${J.X.name}`),_=w_(_,`4/Y/Z/Gamepad Y: ${J.Y.name}`);let K=G6(_,w);if(K)_=w_(_,K);return _}function A7(_){let w="";if(typeof _==="string"){let $=O7(_,"utf-8"),G=JSON.parse($);if(G.version!==g.version)return;w=G.actionLog||""}else{if(_.version!==void 0&&_.version!==g.version)return;w=_.actionLog||""}let J=new x1;J.init(),J.play(w);let K=J.state.statistics[s()]||{0:0,1:0,2:0};return console.log(JSON.stringify(K)),K}class x1{state;constructor(_=z6()){this.state=_}static runHeadless(_){return A7(_)}init(){return this.state=H1(this.state,0,hw),this.state=H1(this.state,0,w6),this.state=H1(this.state,0,V6),this.state=H1(this.state,1,Pw),this.state=H1(this.state,2,Cw),this.state=K6(this.state),this.state=sw(this.state),this.state=B6(this.state),this.state.currentMapId="botmos_hull_selection",j1(this.state,{type:3,channel:"botmos_win_condition",triggered:!1,once:!1,stat:2,statThreshold:1}),j1(this.state,{type:3,channel:"botmos_lose_condition",triggered:!1,once:!1,stat:1,statThreshold:1}),R1(this.state,{type:5,channel:"botmos_win_condition"}),R1(this.state,{type:5,channel:"botmos_lose_condition"}),j1(this.state,{type:3,channel:"unlocked_bugger",triggered:!1,once:!0,stat:0,statThreshold:10}),R1(this.state,{type:4,channel:"unlocked_bugger"}),j1(this.state,{type:3,channel:"unlocked_cleaner",triggered:!1,once:!0,stat:6,statThreshold:4}),R1(this.state,{type:4,channel:"unlocked_cleaner"}),j1(this.state,{type:3,channel:"unlocked_roborat",triggered:!1,once:!0,stat:7,statThreshold:4}),R1(this.state,{type:4,channel:"unlocked_roborat"}),m0(this.state,9,5,this.state.currentMapId,s()),this.state}update(_,w=!1){let J=s(),K=!!this.state.entities[J];if(!K)this.state.currentMapId="botmos_hull_selection",m0(this.state,9,5,this.state.currentMapId,s()),K=!0;if(K){if(_){switch(_){case D.commands.M:this.state._menuOpen=!this.state._menuOpen;break;case D.commands["?"]:this.state=f7(this.state,J);break;default:this.state=Sw(this.state,J,_),this.state=Y6(this.state)}if(this.state.actionLog.push(_.key),this.state._uploadNow&&!w){try{y0(this.state),$_("Run uploaded to leaderboard")}catch($){console.error($)}this.state._uploadNow=!1}}}return this.state}play(_){for(let w=0;w<_.length;w++){let J=_[w];this.update(D.commands[J],!0)}return this.state}}var E7=1,W_=null,b_=[],q0=!1,H6=void 0;function N7(){if(typeof document>"u"||!document.body)return null;if(W_)return W_;W_=document.createElement("div"),W_.id="ui-touch-overlay";let _=g.uiTouchGridThickness??E7,w=D.colors.cybergreen;Object.assign(W_.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"none",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gap:"0px",boxSizing:"border-box",zIndex:"15",pointerEvents:"none",opacity:"0",transition:"opacity 0.25s ease-out"}),b_=[];for(let J=0;J<3;J++){let K=[];for(let $=0;$<3;$++){let G=document.createElement("div");G.dataset.row=String(J),G.dataset.col=String($),Object.assign(G.style,{border:`${_}px solid ${w}`,color:w,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",fontFamily:"monospace",fontSize:`${g.fontSize||16}px`,fontWeight:"bold",userSelect:"none",padding:"4px",boxSizing:"border-box"}),W_.appendChild(G),K.push(G)}b_.push(K)}return document.body.appendChild(W_),W_}function z0(){return q0}function L6(_){if(!W_&&typeof document<"u")N7();if(q0=!0,r0(_),W_)W_.style.display="grid",W_.offsetHeight,W_.style.opacity="1"}function $0(){if(q0=!1,W_)W_.style.opacity="0",W_.style.display="none"}function r0(_){if(_)H6=_;else _=H6;if(!q0||!b_||b_.length!==3)return;let w={A:D.actions.Wait,B:D.actions.Wait,X:D.actions.Wait,Y:D.actions.Wait};if(_){let J=s();if(_.entities[J])w=D1(_,J)}b_[0][0].innerText=`2: ${w.B.name}`,b_[0][1].innerText="▲",b_[0][2].innerText=`1: ${w.A.name}`,b_[1][0].innerText="◀",b_[1][1].innerText="",b_[1][2].innerText="▶",b_[2][0].innerText=`4: ${w.Y.name}`,b_[2][1].innerText="▼",b_[2][2].innerText=`3: ${w.X.name}`}var Q_={up:!1,right:!1,down:!1,left:!1,a:!1,b:!1,x:!1,y:!1,menu:!1,help:!1},a0=[],G0=void 0,i0=void 0,e0=-D.constants.MIN_TURN_SPEED_IN_MS;function v1(_,w=Date.now()){if(_===null)return!1;if(g.run)return!1;if(G0!==void 0&&w-e0>=D.constants.MIN_TURN_SPEED_IN_MS)return e0=w,m1=_,G0(_),!0;return!1}function b1(_){if(_&&_.preventDefault)_.preventDefault();if(_&&_.stopPropagation)_.stopPropagation()}var D6={w:"up",ArrowUp:"up",a:"left",ArrowLeft:"left",s:"down",ArrowDown:"down",d:"right",ArrowRight:"right","1":"a",e:"a","2":"b",q:"b"," ":"b","3":"x",x:"x","4":"y",y:"y",z:"y",m:"menu","?":"help"},m1=null;function S7(){let _=null;if(Q_.right)_=D.commands.E;if(Q_.left)_=D.commands.W;if(Q_.down)_=D.commands.S;if(Q_.up)_=D.commands.N;if(Q_.up&&Q_.right){if(_===D.commands.N&&m1===D.commands.N)_=D.commands.E}if(Q_.up&&Q_.left){if(_===D.commands.N&&m1===D.commands.N)_=D.commands.W}if(Q_.down&&Q_.right){if(_===D.commands.S&&m1===D.commands.S)_=D.commands.E}if(Q_.down&&Q_.left){if(_===D.commands.S&&m1===D.commands.S)_=D.commands.W}if(Q_.a)_=D.commands.A;if(Q_.b)_=D.commands.B;if(Q_.x)_=D.commands.X;if(Q_.y)_=D.commands.Y;if(Q_.menu)_=D.commands.M;if(Q_.help)_=D.commands["?"];if(_!==null)a0.push(_)}function F6(){S7();let _=a0.shift()||null;return a0=[],_}var Y0=null,U0=null,B0=!1,n0=0,X0=()=>{if(B0=!1,Y0)clearTimeout(Y0),Y0=null;if(U0)clearInterval(U0),U0=null};if(typeof document<"u"&&document.body){let w=function(J,K,$){if(!z0())return!1;if(J===1&&K===1)return $0(),b1($),n0=Date.now(),!0;return!1};document.body.addEventListener("keydown",function(J){if(J.defaultPrevented)return;let K=D6[J.key];if(K)Q_[K]=!0,b1(J),v1(F6())}),document.body.addEventListener("keyup",function(J){if(J.defaultPrevented)return;let K=D6[J.key];if(K)Q_[K]=!1,b1(J)});let _=[[D.commands.B,D.commands.N,D.commands.A],[D.commands.W,D.commands.M,D.commands.E],[D.commands.Y,D.commands.S,D.commands.X]];if(document.body.addEventListener("pointerdown",function(J){if(J.defaultPrevented)return;let K=typeof document<"u"?document.getElementById("uihelp"):null;if(K&&J.target&&K.contains(J.target))return;X0();let $=Math.floor(J.clientX/document.body.clientWidth*3),G=Math.floor(J.clientY/document.body.clientHeight*3);if(w(G,$,J))return;let j=_[G]?.[$];if(j)B0=!0,n0=Date.now(),v1(j),b1(J),Y0=setTimeout(()=>{if(!B0)return;v1(j),U0=setInterval(()=>{if(!B0)return;v1(j)},_w)},t0)}),typeof window<"u")window.addEventListener("pointerup",X0),window.addEventListener("pointercancel",X0),window.addEventListener("blur",X0);document.body.addEventListener("click",function(J){if(J.defaultPrevented||Date.now()-n0<300)return;let K=typeof document<"u"?document.getElementById("uihelp"):null;if(K&&J.target&&K.contains(J.target))return;let $=Math.floor(J.clientX/document.body.clientWidth*3),G=Math.floor(J.clientY/document.body.clientHeight*3);if(w(G,$,J))return;let j=_[G]?.[$];if(j)v1(j),b1(J)}),document.body.addEventListener("mousemove",function(J){if(J.defaultPrevented)return;if(G0!==void 0&&i0!==void 0)i0(J),b1(J)})}var t0=250,_w=80,u7=16,l1=0.5,D_={A:0,B:1,X:2,Y:3,LB:4,RB:5,LT:6,RT:7,SELECT:8,START:9,DPAD_UP:12,DPAD_DOWN:13,DPAD_LEFT:14,DPAD_RIGHT:15};class b6{states={up:{pressed:!1,pressStartTime:0,lastTriggerTime:0},down:{pressed:!1,pressStartTime:0,lastTriggerTime:0},left:{pressed:!1,pressStartTime:0,lastTriggerTime:0},right:{pressed:!1,pressStartTime:0,lastTriggerTime:0},a:{pressed:!1,pressStartTime:0,lastTriggerTime:0},b:{pressed:!1,pressStartTime:0,lastTriggerTime:0},x:{pressed:!1,pressStartTime:0,lastTriggerTime:0},y:{pressed:!1,pressStartTime:0,lastTriggerTime:0},menu:{pressed:!1,pressStartTime:0,lastTriggerTime:0},help:{pressed:!1,pressStartTime:0,lastTriggerTime:0}};dirActive=!1;dirPressStartTime=0;lastDirTriggerTime=0;lastDirCombo="";reset(){let _=["up","down","left","right","a","b","x","y","menu","help"];for(let w of _)this.states[w]={pressed:!1,pressStartTime:0,lastTriggerTime:0};this.dirActive=!1,this.dirPressStartTime=0,this.lastDirTriggerTime=0,this.lastDirCombo=""}update(_,w=Date.now(),J=!0){let K=!1,$=["a","b","x","y","menu","help"];for(let F of $){let b=_[F]||!1,C=this.states[F];if(b)if(!C.pressed)C.pressed=!0,C.pressStartTime=w,C.lastTriggerTime=w,K=!0;else{let O=w-C.pressStartTime,T=w-C.lastTriggerTime;if(O>=t0&&T>=_w)C.lastTriggerTime=w,K=!0}else C.pressed=!1}let G=`${_.up?"U":""}${_.down?"D":""}${_.left?"L":""}${_.right?"R":""}`;if(G.length>0){if(!this.dirActive)this.dirActive=!0,this.dirPressStartTime=w,this.lastDirTriggerTime=0,this.lastDirCombo="";let F=G!==this.lastDirCombo,b=w-this.dirPressStartTime,C=w-this.lastDirTriggerTime,O=b>=t0&&C>=_w;if(J&&(F||O))this.lastDirCombo=G,this.lastDirTriggerTime=w,K=!0}else this.dirActive=!1,this.lastDirCombo="";return K}}var g7=new b6,j6=void 0,o0=void 0,R6=!1,c1=new Map;function j_(_){if(!_)return!1;if(typeof _==="boolean")return _;if(typeof _.pressed==="boolean")return _.pressed;if(typeof _.value==="number")return _.value>l1;return!1}function p1(_=Date.now()){if(typeof navigator>"u"||g.run)return;let w=navigator.getGamepads||navigator.webkitGetGamepads||navigator.mozGetGamepads,J=w?w.call(navigator):null;if(J){let O=Array.from(J);for(let T=0;T<O.length;T++){let S=O[T];if(S&&S.connected!==!1)c1.set(S.index!==void 0?S.index:T,S);else if(S&&S.connected===!1)c1.delete(S.index!==void 0?S.index:T)}}let K=Array.from(c1.values()),$=!1,G={up:!1,down:!1,left:!1,right:!1,a:!1,b:!1,x:!1,y:!1,menu:!1,help:!1};for(let O=0;O<K.length;O++){let T=K[O];if(!T||T.connected===!1)continue;$=!0;let S=T.buttons||[],I=T.axes||[];if(j_(S[D_.DPAD_UP])||I[1]!==void 0&&I[1]<-l1)G.up=!0;if(j_(S[D_.DPAD_DOWN])||I[1]!==void 0&&I[1]>l1)G.down=!0;if(j_(S[D_.DPAD_LEFT])||I[0]!==void 0&&I[0]<-l1)G.left=!0;if(j_(S[D_.DPAD_RIGHT])||I[0]!==void 0&&I[0]>l1)G.right=!0;if(j_(S[D_.A]))G.a=!0;if(j_(S[D_.B]))G.b=!0;if(j_(S[D_.X]))G.x=!0;if(j_(S[D_.Y]))G.y=!0;if(j_(S[D_.LB])||j_(S[D_.RB])||j_(S[D_.LT])||j_(S[D_.RT]))G.help=!0;if(j_(S[D_.START])||j_(S[D_.SELECT]))G.menu=!0}if(!$)return;let j=G.up||G.down||G.left||G.right||G.a||G.b||G.x||G.y||G.menu||G.help,F=D.constants.MIN_TURN_SPEED_IN_MS,b=_-e0>=F,C=g7.update(G,_,b);if(j||R6)Q_.up=G.up,Q_.down=G.down,Q_.left=G.left,Q_.right=G.right,Q_.a=G.a,Q_.b=G.b,Q_.x=G.x,Q_.y=G.y,Q_.menu=G.menu,Q_.help=G.help,R6=j;if(C){let O=F6();if(O!==null)v1(O,_)}}function s0(_=u7){if(typeof window>"u")return;if(typeof requestAnimationFrame<"u"){if(o0===void 0){let w=()=>{p1(),o0=requestAnimationFrame(w)};o0=requestAnimationFrame(w)}}else if(j6===void 0)j6=setInterval(()=>{p1()},_)}if(typeof window<"u"){s0();let _=(K)=>{if(K.gamepad)c1.set(K.gamepad.index!==void 0?K.gamepad.index:0,K.gamepad);$_("Gamepad connected."),s0(),p1()},w=(K)=>{if(K.gamepad)c1.delete(K.gamepad.index);$_("Gamepad disconnected."),p1()};window.addEventListener("gamepadconnected",_),window.addEventListener("gamepaddisconnected",w);let J=()=>{s0(),p1()};window.addEventListener("pointerdown",J,{passive:!0}),window.addEventListener("keydown",J,{passive:!0}),window.addEventListener("focus",J,{passive:!0})}function v6(_){G0=_}function P6(_){i0=_}var E6=S0(Z0(),1);var W0={__10:[0,0],__11:[16,0],__12:[32,0],__13:[48,0],__14:[64,0],__15:[80,0],__1:[96,0],_1:[112,0],__2:[128,0],_2:[144,0],__3:[160,0],_3:[176,0],__4:[192,0],_4:[208,0],__5:[224,0],_5:[240,0],__6:[256,0],_6:[272,0],__7:[288,0],_7:[304,0],__8:[320,0],_8:[336,0],__9:[352,0],_9:[368,0],AeroBot_a:[384,0],AeroBot:[400,0],battery:[416,0],BioAbsorber:[432,0],Bugger_a:[448,0],Bugger:[464,0],chargepad:[480,0],cheat:[496,0],chest:[512,0],Cleaner_a:[528,0],Cleaner:[544,0],Deviant:[560,0],drain:[576,0],energy:[592,0],gold:[608,0],goo:[624,0],GraffitiCleaner:[640,0],Graffiticyan:[656,0],Graffitimagenta:[672,0],Graffitiyellow:[688,0],hammer:[704,0],junk:[720,0],leverleft:[736,0],leverright:[752,0],matter:[768,0],mop:[784,0],movableboulder:[800,0],movablebox:[816,0],moveeast:[832,0],movenorth:[848,0],movesouth:[864,0],movewest:[880,0],pickaxe:[896,0],Pioneer_a:[912,0],Pioneer:[928,0],portalclosed:[944,0],portalhidden:[960,0],portallauncher:[976,0],portal:[992,0],portalsewers:[1008,0],portalstartaerobot:[1024,0],portalstartbugger:[1040,0],portalstartcleaner:[1056,0],portalstartroborat:[1072,0],_portalstartunknown:[1088,0],portalstartworkbot:[1104,0],Recharger:[1120,0],Recuperation:[1136,0],RichBot_a:[1152,0],RichBot:[1168,0],RoboRat_a:[1184,0],RoboRat:[1200,0],RockCrusher:[1216,0],rock:[1232,0],SageBot_a:[1248,0],SageBot:[1264,0],Screwing:[1280,0],shocker:[1296,0],spacerock:[1312,0],spacetree:[1328,0],spacevoid:[1344,0],spacevoidstarwhite:[1360,0],spacevoidstaryellow:[1376,0],spacewater_a:[1392,0],spacewater:[1408,0],Spirit_a:[1424,0],Spirit:[1440,0],star:[1456,0],terminal:[1472,0],tree:[1488,0],trident:[1504,0],upgradeBioAbsorber:[1520,0],upgradeRecuperation:[1536,0],upgradeWaterImmunity:[1552,0],Valkyrie_a:[1568,0],Valkyrie:[1584,0],voidhidden:[1600,0],void:[1616,0],voidtrue:[1632,0],wall0:[1648,0],wall1:[1664,0],wall2:[1680,0],walla_:[1696,0],wallA:[1712,0],wallb_:[1728,0],wallB:[1744,0],wallc_:[1760,0],wallC:[1776,0],WallCrusher:[1792,0],walld_:[1808,0],wallD:[1824,0],walle_:[1840,0],wallE:[1856,0],wallf_:[1872,0],wallF:[1888,0],wallg_:[1904,0],wallG:[1920,0],wallh_:[1936,0],wallH:[1952,0],walli_:[1968,0],wallI:[1984,0],wallj_:[2000,0],wallJ:[2016,0],wallk_:[2032,0],wallK:[2048,0],walll_:[2064,0],wallL:[2080,0],wallm_:[2096,0],wallM:[2112,0],walln_:[2128,0],wallN:[2144,0],wallo_:[2160,0],wallO:[2176,0],"wall(":[2192,0],"wall)":[2208,0],"wall+":[2224,0],"wall,":[2240,0],"wall.":[2256,0],wall:[2272,0],"wall:":[2288,0],wall_:[2304,0],"wall|":[2320,0],wallp_:[2336,0],wallP:[2352,0],wallq_:[2368,0],wallQ:[2384,0],wallr_:[2400,0],wallR:[2416,0],walls_:[2432,0],wallS:[2448,0],wallstatueaerobot:[2464,0],wallstatuecleaner:[2480,0],wallstatuepioneer:[2496,0],wallstatueworkbot:[2512,0],wallt_:[2528,0],wallT:[2544,0],wallu_:[2560,0],wallU:[2576,0],wallv_:[2592,0],wallV:[2608,0],wallweak:[2624,0],wallw_:[2640,0],wallW:[2656,0],wallx_:[2672,0],wallX:[2688,0],wally_:[2704,0],wallY:[2720,0],wallz_:[2736,0],wallZ:[2752,0],water_a:[2768,0],WaterImmunity:[2784,0],water:[2800,0],watersewage_a:[2816,0],watersewage:[2832,0],WaterShield:[2848,0],WorkBot_a:[2864,0],WorkBot:[2880,0],wrench:[2896,0]};var h7="#74ee15",C6="#f00",H0="#000",I7=0.2,y1=document.createElement("div");y1.id="ui";document.body.appendChild(y1);var $1=O6(!1);$1.id="uihelp";$1.innerText="?";$1.dataset.tooltip="Press '?' or click for help!";$1.style.cursor="pointer";if(typeof document<"u"){let _=0,w=(J)=>{if(J&&J.preventDefault)J.preventDefault();if(J&&J.stopPropagation)J.stopPropagation();let K=Date.now();if(K-_<300)return;if(_=K,z0())$0();else L6()};$1.addEventListener("pointerdown",w),$1.addEventListener("click",w)}var L0=Jw(),z1=[];for(let _=0;_<g.uiInventoryMaxDisplaySize;_++)z1.push(Jw());var ww=O6();ww.style.marginRight=`${g.fontSize/2}px`;var d1=[];for(let _=0;_<g.uiEffectsMaxDisplaySize;_++)d1.push(Jw());var g_=document.createElement("div");g_.id="uiline";g_.replaceChildren($1,L0,...z1,ww,...d1);y1.replaceChildren(g_);var j0=document.createElement("div");j0.style.display="flex";j0.style.justifyContent="space-between";var D0=document.createElement("div");D0.id="uichatlog";var M6=document.createElement("div");M6.id="uitooltip";j0.replaceChildren(D0,M6);y1.appendChild(j0);var Qw=document.createElement("div");Qw.id="uimousetooltip";document.body.appendChild(Qw);async function k6(_){if(!g.showUI)return;let w=s(),J=_.entities[w],K=_.components.energy[w],$=_.components.currency[w],G="";if(!!J&&!!K&&!!$)G=T7(_,w),y1.style.flexDirection="column-reverse",m7(K);else x7(),G="Game over!",g_.style.color=H0,g_.style.background=C6;ww.innerText=G,l7(_),r0(_)}function T7(_,w){let J=_.components.type[w]?.type,K=_.components.energy[w],$=_.components.currency[w];e_(L0,J.name),L0.dataset.tooltip="Hull: "+J.name;let G=t1(_,w);for(let O=0;O<g.uiInventoryMaxDisplaySize;O++){let T=G[O];if(T)e_(z1[O],T.name.toLowerCase()),z1[O].dataset.tooltip=`${T.name} (${Math.abs(T.damage)} damage, ${T.energyCost} energy)`;else e_(z1[O],null),z1[O].dataset.tooltip=void 0}let j=vw(_,w);for(let O=0;O<g.uiEffectsMaxDisplaySize;O++){let T=j[O]?.type.name||null,S=j[O]?.type.tooltip||void 0;e_(d1[O],T),d1[O].dataset.tooltip=S}let F=`${K.max}`;if(K.current<K.max)F=`${K.current}/${K.max}`;let b="";if($.matter>0)b=`${$.matter}M `;let C="";if($.gold>0)C=`${$.gold}G `;return(F+" "+C+b).trimEnd()}function x7(){e_(L0,null);for(let _=0;_<g.uiInventoryMaxDisplaySize;_++)e_(z1[_],null);for(let _=0;_<g.uiEffectsMaxDisplaySize;_++)e_(d1[_],null)}function m7(_){if(g_.style.background=H0,_.current/_.max<=I7)g_.style.color=H0,g_.style.background=C6;else g_.style.color=h7,g_.style.background=H0}function l7(_){if(_._menuOpen&&!!_.chatLog.length){let w=_.chatLog.slice(-g.chatLogMaxDisplaySize);D0.innerText=w.join(`
`)}else D0.innerText=""}function Jw(){let _=document.createElement("span");return e_(_,null),_.style.height=`${g.fontSize}px`,_.style.display="inline-block",_}function O6(_=!0){let w=document.createElement("span");if(w.style.display="inline",_)w.style.marginLeft=`${g.fontSize/2}px`;return w}function e_(_,w){if(w){let J=W0[w][0];_.style.background=`url('build/tiles.png') -${J}px 0`,_.style.width=`${g.fontSize}px`}else _.style.width="0px"}function f6(){return Qw}var X1="_a",N6=document.createElement("img");N6.src="build/tiles.png";v_.tileSet=N6;v_.tileMap=o7();var h_=new E6.Display(v_);document.body.appendChild(h_.getContainer());var S6=0,u6=0,C1=void 0;function c7(_,w,J=!1){C1=_;let K=_.currentMapId,$=_.maps[K],G=J?X1:"",j=0,F=0;S6=w.x-j,u6=w.y-F;let b=d7(w.width,w.height);y7(b,_,w,j,F,G),r7(b,_,w,j,F,G),n7(b,w.width,w.height)}var A6={x:0,y:0},R0=0;async function t_(_){let w=s(),K=_.entities[w]?_.components.position[w]:A6,$=p7(K);if(c7(_,$,R0%2==0),k6(_),A6=K,R0++,R0>=128)R0=0}async function g6(){if(h_._backend&&typeof h_._backend._updateSize==="function")h_._backend._options=v_,h_._backend._updateSize();else h_.setOptions(v_)}function h6(_,w){let J=Math.max(0,w-g.bottom);g.cameraWidth=Math.floor(_/g.fontSize),g.cameraHeight=Math.floor(J/g.fontSize),v_.width=Math.floor(g.cameraWidth*(1/g.zoom)),v_.height=Math.floor(g.cameraHeight*(1/g.zoom))}function I6(_){return[_[0]+S6,_[1]+u6]}function T6(_){if(!C1)return{state:null,tile:null,entities:[]};let w=C1.currentMapId,J=C1.maps[w],K=_[0],$=_[1],G=J.getTile(K,$),j=A_(C1,{mapId:w,x:K,y:$}),F=[];if(j)F.push(...j);return{state:C1,tile:G,entities:F}}function p7(_){return{x:_.x-Math.floor(v_.width/2),y:_.y-Math.floor(v_.height/2),width:v_.width,height:v_.height}}var P1=[];function d7(_,w){if(P1.length>w)P1.length=w;for(let J=P1.length;J<w;J++)P1[J]=[];for(let J=0;J<w;J++){let K=P1[J];if(K.length>_)K.length=_;for(let $=K.length;$<_;$++)K[$]={chars:[],fg:[],bg:[]};for(let $=0;$<_;$++)K[$].chars.length=0,K[$].fg.length=0,K[$].bg.length=0}return P1}function y7(_,w,J,K,$,G){let j=w.currentMapId,F=w.maps[j];if(!F)return;for(let b=0;b<J.height;b++)for(let C=0;C<J.width;C++){let T=F.getTile(J.x+C,J.y+b)?.icon||"";if(T){let S=K+C,I=$+b;if(_[I]&&_[I][S])_[I][S].chars.push(T+G),_[I][S].fg.push("transparent"),_[I][S].bg.push("transparent")}}}function r7(_,w,J,K,$,G){let j=w.currentMapId,F=s(),b=i_(w,j);for(let C=0;C<b.length;C++){let O=b[C],T=w.components.type[O]?.type;if(!T)continue;let S=w.components.position[O];if(!S)continue;let I=K+S.x-J.x,p=$+S.y-J.y;if(I<0||I>=J.width||p<0||p>=J.height)continue;let t="transparent";if(g.highlightFriendEnemy&&!u_(w,O)&&!K1(w,O)&&O!==F)switch(G1(w,F,O)){case 1:break;case 2:t="rgba(255, 0, 0, 0.5)";break}if(_[p]&&_[p][I])_[p][I].chars.push(T.icon+G),_[p][I].fg.push(t),_[p][I].bg.push("transparent");let r=w.components.energy[O];if(r&&g.showEnergy!==0){let J_=g.showEnergy===1?16:10,Z_=g.showEnergy===1?"__":"_",U_=Math.ceil(r.current/r.max*J_);if(U_<J_){if(_[p]&&_[p][I])_[p][I].chars.push(Z_+U_),_[p][I].fg.push("transparent"),_[p][I].bg.push("transparent")}}}}function n7(_,w,J){h_.clear();let K=J!==void 0?Math.min(J,_.length):_.length;for(let $=0;$<K;$++){let G=_[$];if(!G)continue;let j=w!==void 0?Math.min(w,G.length):G.length;for(let F=0;F<j;F++){let b=G[F];if(b&&b.chars.length>0)h_.draw(F,$,b.chars,b.fg,b.bg)}}}function o7(){let _={};for(let[w,J]of Object.entries(W0)){let K=w.endsWith(X1),$="";if(K)w=w.substring(0,w.length-X1.length),$=X1;if(w.startsWith("wall")&&(w.length===5||w.length===6))_["#"+w.substring(4,5)+$]=J;else if(Object.hasOwn(D.tiles,w))_[D.tiles[w].icon+$]=J;else if(Object.hasOwn(D.entities,w))_[D.entities[w].icon+$]=J;else if(Object.hasOwn(D.items,w))_[D.items[w].icon+$]=J;else if(Object.hasOwn(D.effects,w))_[D.effects[w].icon+$]=J;else _[w+$]=J}for(let[w,J]of Object.entries(_))if(!w.endsWith(X1)&&!Object.hasOwn(_,w+X1))_[w+X1]=J;return _}async function x6(_){if(!g.showUI||!g.showTooltip)return;let w="";if(_.target){if(_.target?.dataset?.tooltip)w+=_.target.dataset.tooltip}let J=h_.eventToPosition(_);if(J[0]!==-1){let j=I6(J),F=T6(j);for(let b=0;b<F.entities.length;b++){let C=F.entities[b],O=F.state.components.type[C]?.type,T=F.state.components.name[C]?.name??O?.name;if(T){if(w!=="")w+=`
`;w+=T}}if(!!F?.tile&&F.tile.tooltip!==""){if(w!=="")w+=`
`;w+=F.tile.tooltip}}let K=typeof window<"u"?Math.max(0,window.innerHeight-g.bottom):0,$=Math.floor(K/2),G=f6();if(w!==""){G.innerText=w,G.style.display="inline-block";let{offsetWidth:j,offsetHeight:F}=G,b=typeof window<"u"?window.innerWidth:0,C=K,O=_.x+20,T=_.y+20;if(O+j>b)O=_.x-j-20;if(T+F>C)T=_.y-F-20;G.style.left=O+"px",G.style.top=T+"px"}else G.style.display="none"}async function s7(_){if(!_||typeof _!=="string"||!_.startsWith("https://")){$_("Failed to fetch replay: URL must use HTTPS protocol");return}try{let w=await fetch(_);if(!w.ok){$_(`Failed to fetch replay: ${w.status} ${w.statusText}`);return}let J=await w.json(),K=J;if(Array.isArray(J)){if(J.length===0){$_("Replay file is empty");return}let $=void 0;for(let G of J)if(G&&typeof G==="object"&&typeof G.actionLog==="string"){if(!$||G.actionLog.length>=$.actionLog.length)$=G}K=$||J[J.length-1]}if(!K||typeof K!=="object"){$_("Invalid replay data format");return}if(typeof K.actionLog!=="string"){$_("Replay missing actionLog");return}return K}catch(w){$_(`Error loading replay: ${w instanceof Error?w.message:String(w)}`);return}}class m6{game;actionLog;tps;currentTurnIndex=0;drawFn;onTurn;onComplete;_timer=null;_isPlaying=!1;_isFinished=!1;constructor(_,w,J=g.tps,K=()=>{},$,G){this.game=_,this.actionLog=w,this.tps=J>0?J:4,this.drawFn=K,this.onTurn=$,this.onComplete=G}get isPlaying(){return this._isPlaying}get isFinished(){return this._isFinished}get turnIndex(){return this.currentTurnIndex}get totalTurns(){return this.actionLog.length}start(){if(this._isFinished||this._isPlaying)return;this._isPlaying=!0;let _=Math.max(1,Math.round(1000/this.tps));this._timer=setInterval(()=>{this.step()},_)}pause(){if(!this._isPlaying)return;if(this._isPlaying=!1,this._timer!==null)clearInterval(this._timer),this._timer=null}resume(){this.start()}stop(){this.pause()}step(){if(this.currentTurnIndex>=this.actionLog.length)return this._isFinished=!0,this.pause(),this.onComplete?.(this.game.state),$_("Replay finished."),!1;let _=this.actionLog[this.currentTurnIndex],w=D.commands[_]||null;if(w)this.game.update(w,!0),this.drawFn(this.game.state);if(this.currentTurnIndex++,this.onTurn?.(this.currentTurnIndex,this.actionLog.length,w),this.currentTurnIndex>=this.actionLog.length)return this._isFinished=!0,this.pause(),this.onComplete?.(this.game.state),$_("Replay finished"),!1;return!0}}async function l6(_,w=()=>{}){if(!g.run)return;$_(`Fetching replay from ${g.run}...`);let J=await s7(g.run);if(!J){$_("Could not start replay: invalid or unreachable run file");return}if(J.version&&J.version!==g.version)$_(`Warning: Replay version ${J.version} differs from current ${g.version}`);if(J.username){g.username=J.username;let $=s();if(_.state.components.name[$])_.state.components.name[$].name=J.username;w(_.state)}$_(`Replay started: ${J.actionLog.length} turns @ ${g.tps} tps`);let K=new m6(_,J.actionLog,g.tps,w);return K.start(),K}var a7=void 0;function c6(_){window.onload=async function(){if(S1(),t_(_.init()),g.run)a7=await l6(_,t_)},window.onresize=async function(){S1();let w=typeof window<"u"?window.innerWidth:0,J=typeof window<"u"?window.innerHeight:0;h6(w,J),await g6(),t_(_.state)},v6(function(w){t_(_.update(w))}),P6(x6),document.body.focus()}function p6(_){if(!window.BMActionLog)window.BMActionLog=function(){return _.state.actionLog.join("")};if(!window.BMPlay)window.BMPlay=function(w){t_(_.play(w))};if(!window.BMToggleDebug)window.BMToggleDebug=function(){g.debug=!g.debug,t_(_.state)};if(g.debug){if(!window.BMDebugState)window.BMDebugState=function(){return _.state};if(!window.BMDebugPlayerStatistics)window.BMDebugPlayerStatistics=function(){return _.state.statistics[s()]};if(!window.BMDebugStateSize)window.BMDebugStateSize=function(){let w=Object.keys(_.state.maps).length,J=Object.keys(_.state.entities).length,K=Object.keys(_.state.components.inventory).length;return`Maps: ${w}, Entities: ${J}, Inventories: ${K}`}}}$_("BotMos v"+g.version);$_("Creating cosmos...");S1();var d6=new x1;p6(d6);c6(d6);
